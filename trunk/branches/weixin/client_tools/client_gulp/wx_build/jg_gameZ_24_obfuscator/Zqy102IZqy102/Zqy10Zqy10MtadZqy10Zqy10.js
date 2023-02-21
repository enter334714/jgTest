var J = wx.h$;
(function (window, document, b5o0) {
    var qb5kg = b5o0['un'],
        pf9_2w = b5o0['uns'],
        jy7ro = b5o0['static'],
        hz6c = b5o0['class'],
        tgc8 = b5o0['getset'],
        un134i = b5o0['__newvec'],
        tehz8 = laya['utils']['Browser'],
        qb0kd = laya['events']['Event'],
        jin1x = laya['events']['EventDispatcher'],
        c68zt = laya['resource']['HTMLImage'],
        mul4a3 = laya['utils']['Handler'],
        ep_29 = laya['display']['Input'],
        u3ni = laya['net']['Loader'],
        htz6 = laya['maths']['Matrix'],
        gk50bq = laya['renders']['Render'],
        o5yqbr = laya['utils']['RunDriver'],
        r5oqv = laya['media']['Sound'],
        yvrj5 = laya['media']['SoundChannel'],
        k6gd = laya['media']['SoundManager'],
        rij7x = laya['display']['Stage'],
        gqbk = laya['net']['URL'],
        dbg6 = laya['utils']['Utils'],
        tg8d6 = function () {
        function dbkg0() {}
        return hz6c(dbkg0, 'laya.wx.mini.MiniAdpter'), dbkg0['getJson'] = function (_pz2e) {
            return JSON['parse'](_pz2e);
        }, dbkg0['init'] = function (am43ul, b5qkg0) {
            am43ul === void 0x0 && (am43ul = ![]), b5qkg0 === void 0x0 && (b5qkg0 = ![]);
            if (dbkg0['_inited']) return;
            dbkg0['window'] = window;
            if (dbkg0['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            dbkg0['_inited'] = !![], dbkg0['isZiYu'] = b5qkg0, dbkg0['isPosMsgYu'] = am43ul, dbkg0['EnvConfig'] = {}, !dbkg0['isZiYu'] && (zch8t6['setNativeFileDir']('/layaairGame'), zch8t6['existDir'](zch8t6['fileNativeDir'], mul4a3['create'](dbkg0, dbkg0['onMkdirCallBack']))), dbkg0['window']['focus'] = function () {}, b5o0['getUrlPath'] = function () {}, dbkg0['window']['logtime'] = function (q5bo0y) {}, dbkg0['window']['alertTimeLog'] = function (o0bk) {}, dbkg0['window']['resetShareInfo'] = function () {}, dbkg0['window']['CanvasRenderingContext2D'] = function () {}, dbkg0['window']['CanvasRenderingContext2D']['prototype'] = dbkg0['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], dbkg0['window']['document']['body']['appendChild'] = function () {}, dbkg0['EnvConfig']['pixelRatioInt'] = 0x0, o5yqbr['getPixelRatio'] = dbkg0['pixelRatio'], dbkg0['_preCreateElement'] = tehz8['createElement'], tehz8['createElement'] = dbkg0['createElement'], o5yqbr['createShaderCondition'] = dbkg0['createShaderCondition'], dbg6['parseXMLFromString'] = dbkg0['parseXMLFromString'], ep_29['_createInputElement'] = h6z8c['_createInputElement'], dbkg0['EnvConfig']['load'] = u3ni['prototype']['load'], u3ni['prototype']['load'] = oy50q['prototype']['load'], dbkg0['isZiYu'] && am43ul && wx['onMessage'](function (phcez) {
                phcez['isLoad'] && (zch8t6['ziyuFileData'][phcez['url']] = phcez['data']);
            });
        }, dbkg0['onMkdirCallBack'] = function (eph2_, tcdg8) {
            if (!eph2_) zch8t6['filesListObj'] = JSON['parse'](tcdg8['data']);
        }, dbkg0['pixelRatio'] = function () {
            if (!dbkg0['EnvConfig']['pixelRatioInt']) try {
                var rbyoq = wx['getSystemInfoSync']();
                return dbkg0['EnvConfig']['pixelRatioInt'] = rbyoq['pixelRatio'], rbyoq = rbyoq, rbyoq['pixelRatio'];
            } catch (q05yb) {}
            return dbkg0['EnvConfig']['pixelRatioInt'];
        }, dbkg0['createElement'] = function (ht8ce) {
            if (ht8ce == 'canvas') {
                var d8tg6c;
                return dbkg0['idx'] == 0x1 ? dbkg0['isZiYu'] ? (d8tg6c = sharedCanvas, d8tg6c['style'] = {}) : d8tg6c = window['canvas'] : d8tg6c = window['wx']['createCanvas'](), dbkg0['idx']++, d8tg6c;
            } else {
                if (ht8ce == 'textarea' || ht8ce == 'input') return dbkg0['onCreateInput'](ht8ce);else {
                    if (ht8ce == 'div') {
                        var bo05qy = dbkg0['_preCreateElement'](ht8ce);
                        return bo05qy['contains'] = function (p_hzte) {
                            return null;
                        }, bo05qy['removeChild'] = function (zhcpet) {}, bo05qy;
                    } else return dbkg0['_preCreateElement'](ht8ce);
                }
            }
        }, dbkg0['onCreateInput'] = function (xin3) {
            var hepc = dbkg0['_preCreateElement'](xin3);
            return hepc['focus'] = h6z8c['wxinputFocus'], hepc['blur'] = h6z8c['wxinputblur'], hepc['style'] = {}, hepc['value'] = 0x0, hepc['parentElement'] = {}, hepc['placeholder'] = {}, hepc['type'] = {}, hepc['setColor'] = function (pw2_9f) {}, hepc['setType'] = function (w_2pf) {}, hepc['setFontFace'] = function (al4mu) {}, hepc['addEventListener'] = function (u13an) {}, hepc['contains'] = function (jvry7o) {
                return null;
            }, hepc['removeChild'] = function (mul3) {}, hepc;
        }, dbkg0['createShaderCondition'] = function (_p2f) {
            var i7rjvx = this,
                n41ua = function () {
                var vr7xyj = _p2f;
                return i7rjvx[_p2f['replace']('this.', '')];
            };
            return n41ua;
        }, dbkg0['EnvConfig'] = null, dbkg0['window'] = null, dbkg0['_preCreateElement'] = null, dbkg0['_inited'] = ![], dbkg0['wxRequest'] = null, dbkg0['systemInfo'] = null, dbkg0['version'] = '0.0.1', dbkg0['isZiYu'] = ![], dbkg0['isPosMsgYu'] = ![], dbkg0['parseXMLFromString'] = function (hcd) {
            var t8dcg6, rvyq;
            hcd = hcd['replace'](/>\s+</g, '><');
            try {
                t8dcg6 = new window['Parser']['DOMParser']()['parseFromString'](hcd, 'text/xml');
            } catch (jyor5) {
                throw '需要引入xml解析库文件';
            }
            return t8dcg6;
        }, dbkg0['idx'] = 0x1, dbkg0;
    }(),
        _wf$9 = function () {
        function ckd68() {}
        hz6c(ckd68, 'laya.wx.mini.MiniImage');
        var _f2wp9 = ckd68['prototype'];
        return _f2wp9['_loadImage'] = function (pw_ze) {
            var vnijx7 = this,
                xijn = ![];
            pw_ze['indexOf']('layaNativeDir/') == -0x1 && (xijn = !![], pw_ze = gqbk['formatURL'](pw_ze));
            if (!zch8t6['getFileInfo'](pw_ze)) {
                if (pw_ze['indexOf']('http://') != -0x1 || pw_ze['indexOf']('https://') != -0x1) zch8t6['downImg'](pw_ze, new mul4a3(ckd68, ckd68['onDownImgCallBack'], [pw_ze, vnijx7]), pw_ze);else ckd68['onCreateImage'](pw_ze, vnijx7, !![]);
            } else ckd68['onCreateImage'](pw_ze, vnijx7, !xijn);
        }, ckd68['onDownImgCallBack'] = function (p2wf9_, hez8ct, ep29_) {
            if (!ep29_) ckd68['onCreateImage'](p2wf9_, hez8ct);else hez8ct['onError'](null);
        }, ckd68['onCreateImage'] = function (k6gb0d, tzc8he, cptzeh) {
            cptzeh === void 0x0 && (cptzeh = ![]);
            var dbgqk;
            if (!cptzeh) {
                var g06kbd = zch8t6['getFileInfo'](k6gb0d),
                    a3ul4m = g06kbd['md5'];
                dbgqk = zch8t6['getFileNativePath'](a3ul4m);
            } else dbgqk = k6gb0d;
            if (tzc8he['imgCache'] == null) tzc8he['imgCache'] = {};
            var _w$92f;
            function vo5yqr() {
                _w$92f['onload'] = null, _w$92f['onerror'] = null, delete tzc8he['imgCache'][k6gb0d];
            }
            ;
            var eth8z = function () {
                vo5yqr(), tzc8he['onLoaded'](_w$92f);
            },
                n41xi = function () {
                vo5yqr(), tzc8he['event']('error', 'Load image failed');
            };
            tzc8he['_type'] == 'nativeimage' ? (_w$92f = new tehz8['window']['Image'](), _w$92f['crossOrigin'] = '', _w$92f['onload'] = eth8z, _w$92f['onerror'] = n41xi, _w$92f['src'] = dbgqk, tzc8he['imgCache'][k6gb0d] = _w$92f) : new c68zt['create'](dbgqk, {
                'onload': eth8z,
                'onerror': n41xi,
                'onCreate': function (p_f9w) {
                    _w$92f = p_f9w, tzc8he['imgCache'][k6gb0d] = p_f9w;
                }
            });
        }, ckd68;
    }(),
        h6z8c = function () {
        function q5ok() {}
        return hz6c(q5ok, 'laya.wx.mini.MiniInput'), q5ok['_createInputElement'] = function () {
            ep_29['_initInput'](ep_29['area'] = tehz8['createElement']('textarea')), ep_29['_initInput'](ep_29['input'] = tehz8['createElement']('input')), ep_29['inputContainer'] = tehz8['createElement']('div'), ep_29['inputContainer']['style']['position'] = 'absolute', ep_29['inputContainer']['style']['zIndex'] = 0x186a0, tehz8['container']['appendChild'](ep_29['inputContainer']), ep_29['inputContainer']['setPos'] = function (gdtc8, lam43u) {
                ep_29['inputContainer']['style']['left'] = gdtc8 + 'px', ep_29['inputContainer']['style']['top'] = lam43u + 'px';
            }, b5o0['stage']['on']('resize', null, q5ok['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (rqyv5) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), k6gd['_soundClass'] = rvoyj, k6gd['_musicClass'] = rvoyj, window['_videoClass'] = xvir;
        }, q5ok['_onStageResize'] = function () {
            var xvn7ij = b5o0['stage']['_canvasTransform']['identity']();
            xvn7ij['scale'](tehz8['width'] / gk50bq['canvas']['width'] / o5yqbr['getPixelRatio'](), tehz8['height'] / gk50bq['canvas']['height'] / o5yqbr['getPixelRatio']());
        }, q5ok['wxinputFocus'] = function (_ept) {
            var qrvoy = ep_29['inputElement']['target'];
            if (qrvoy && !qrvoy['editable']) return;
            tg8d6['window']['wx']['offKeyboardConfirm'](), tg8d6['window']['wx']['offKeyboardInput'](), tg8d6['window']['wx']['showKeyboard']({
                'defaultValue': qrvoy['text'],
                'maxLength': qrvoy['maxChars'],
                'multiple': qrvoy['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (d8gt6c) {},
                'fail': function (a3lu14) {}
            }), tg8d6['window']['wx']['onKeyboardConfirm'](function (yboq0) {
                var w2_$f = yboq0 ? yboq0['value'] : '';
                qrvoy['text'] = w2_$f, qrvoy['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), tg8d6['window']['wx']['onKeyboardInput'](function (ezh_tp) {
                var u413n = ezh_tp ? ezh_tp['value'] : '';
                if (!qrvoy['multiline']) {
                    if (u413n['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                qrvoy['text'] = u413n, qrvoy['event']('input');
            });
        }, q5ok['inputEnter'] = function () {
            ep_29['inputElement']['target']['focus'] = ![];
        }, q5ok['wxinputblur'] = function () {
            q5ok['hideKeyboard']();
        }, q5ok['hideKeyboard'] = function () {
            tg8d6['window']['wx']['offKeyboardConfirm'](), tg8d6['window']['wx']['offKeyboardInput'](), tg8d6['window']['wx']['hideKeyboard']({
                'success': function (l4mau) {
                    console['log']('隐藏键盘');
                },
                'fail': function (xi7n4) {
                    console['log']('隐藏键盘出错:' + (xi7n4 ? xi7n4['errMsg'] : ''));
                }
            });
        }, q5ok;
    }(),
        oy50q = function () {
        function echpzt() {}
        hz6c(echpzt, 'laya.wx.mini.MiniLoader');
        var ry7voj = echpzt['prototype'];
        return ry7voj['load'] = function (orq5y, gk05b, rv5o, zp2he_, k0qgb5) {
            rv5o === void 0x0 && (rv5o = !![]), k0qgb5 === void 0x0 && (k0qgb5 = ![]);
            var t86hcz = this;
            t86hcz['_url'] = orq5y;
            if (orq5y['indexOf']('data:image') === 0x0) t86hcz['_type'] = gk05b = 'image';else t86hcz['_type'] = gk05b || (gk05b = t86hcz['getTypeFromUrl'](orq5y));
            t86hcz['_cache'] = rv5o, t86hcz['_data'] = null;
            var k806dg = 'ascii';
            if (orq5y['indexOf']('.fnt') != -0x1) k806dg = 'utf8';else gk05b == 'arraybuffer' && (k806dg = '');
            ;
            var qb50 = dbg6['getFileExtension'](orq5y);
            if (echpzt['_fileTypeArr']['indexOf'](qb50) != -0x1) tg8d6['EnvConfig']['load']['call'](this, orq5y, gk05b, rv5o, zp2he_, k0qgb5);else {
                if (!zch8t6['getFileInfo'](orq5y)) {
                    if (orq5y['indexOf']('layaNativeDir/') != -0x1) {
                        if (tg8d6['isZiYu']) {
                            var nua3 = zch8t6['ziyuFileData'][orq5y];
                            t86hcz['onLoaded'](nua3);
                            return;
                        } else {
                            cosnole['log']('read read'), zch8t6['read'](orq5y, k806dg, new mul4a3(echpzt, echpzt['onReadNativeCallBack'], [k806dg, orq5y, gk05b, rv5o, zp2he_, k0qgb5, t86hcz]));
                            return;
                        }
                    }
                    if (gqbk['rootPath'] == '') var zth_e = orq5y;else zth_e = orq5y['split'](gqbk['rootPath'])[0x0];
                    orq5y['indexOf']('http://') != -0x1 || orq5y['indexOf']('https://') != -0x1 ? tg8d6['EnvConfig']['load']['call'](t86hcz, orq5y, gk05b, rv5o, zp2he_, k0qgb5) : zch8t6['readFile'](zth_e, k806dg, new mul4a3(echpzt, echpzt['onReadNativeCallBack'], [k806dg, orq5y, gk05b, rv5o, zp2he_, k0qgb5, t86hcz]), orq5y);
                } else tg8d6['EnvConfig']['load']['call'](this, orq5y, gk05b, rv5o, zp2he_, k0qgb5);
            }
        }, ry7voj['resMgrLoad'] = function (thez8, un3, vjr7yo, qk5bo0, qy5orv, y5jvor, yvxrj7) {
            vjr7yo === void 0x0 && (vjr7yo = 0x0), qk5bo0 === void 0x0 && (qk5bo0 = ![]), qy5orv === void 0x0 && (qy5orv = ![]), y5jvor === void 0x0 && (y5jvor = 0x0), yvxrj7 === void 0x0 && (yvxrj7 = 0x3), thez8['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', thez8), tg8d6['EnvConfig']['resMgrLoad'](thez8, (cd6th, _p2fw9, z_epw2) => {
                echpzt['prototype']['resMgrLoadCallBack'](cd6th, _p2fw9, z_epw2, un3);
            }, vjr7yo, qk5bo0, qy5orv, y5jvor, yvxrj7);
        }, ry7voj['resMgrLoadCallBack'] = function (ryo5qb, bok0, f2$9sw, kdg60) {
            console['log']('buff:::', ryo5qb, f2$9sw, zch8t6['fileNativeDir'] + '///' + zch8t6['fileListName']), kdg60(ryo5qb, bok0, f2$9sw);
        }, ry7voj['clearRes'] = function (qgkd0, czhpet) {
            czhpet === void 0x0 && (czhpet = ![]);
            var r7yovj = this;
            r7yovj['clearRes'](qgkd0, czhpet);
            var x7yr = zch8t6['getFileInfo'](qgkd0);
            if (x7yr && (qgkd0['indexOf']('http://') != -0x1 || qgkd0['indexOf']('https://') != -0x1)) {
                var yj5r = x7yr['md5'],
                    qrob = zch8t6['getFileNativePath'](yj5r);
                zch8t6['remove'](qrob);
            }
        }, echpzt['onReadNativeCallBack'] = function (jrx7y, rv5joy, w2p_, nvjxi, l4ua13, ryqob5, hectp, iu413, td8ch6) {
            nvjxi === void 0x0 && (nvjxi = !![]), ryqob5 === void 0x0 && (ryqob5 = ![]), iu413 === void 0x0 && (iu413 = 0x0);
            if (!iu413) {
                var zpe2h;
                if (w2p_ == 'json' || w2p_ == 'atlas') zpe2h = tg8d6['getJson'](td8ch6['data']);else w2p_ == 'xml' ? zpe2h = dbg6['parseXMLFromString'](td8ch6['data']) : zpe2h = td8ch6['data'];
                hectp['onLoaded'](zpe2h), !tg8d6['isZiYu'] && tg8d6['isPosMsgYu'] && w2p_ != 'arraybuffer' && wx['postMessage']({
                    'url': rv5joy,
                    'data': zpe2h,
                    'isLoad': !![]
                });
            } else iu413 == 0x1 && tg8d6['EnvConfig']['load']['call'](hectp, rv5joy, w2p_, nvjxi, l4ua13, ryqob5);
        }, jy7ro(echpzt, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), echpzt;
    }(),
        zch8t6 = function (ze_2) {
        function u43la() {
            u43la['__super']['call'](this);
            ;
        }
        return hz6c(u43la, 'laya.wx.mini.MiniFileMgr', ze_2), u43la['isLoadFile'] = function (e2wzp) {
            return u43la['_fileTypeArr']['indexOf'](e2wzp) != -0x1 ? !![] : ![];
        }, u43la['getFileInfo'] = function (u3i41) {
            var a143lu = u3i41['split']('?')[0x0],
                bkqo50 = u43la['filesListObj'][a143lu];
            if (bkqo50 == null) return null;else return bkqo50;
            return null;
        }, u43la['onFileUpdate'] = function (pezh_2, x31n4) {
            var yqo5r = pezh_2['split']('/'),
                jyvo5r = yqo5r[yqo5r['length'] - 0x1],
                gc8t6 = u43la['getFileInfo'](x31n4);
            if (gc8t6 == null) u43la['onSaveFile'](x31n4, jyvo5r);else {
                if (gc8t6['readyUrl'] != x31n4) u43la['remove'](jyvo5r, x31n4);
            }
        }, u43la['exits'] = function (g5qbk, kg0db6) {
            var bd0qgk = u43la['getFileNativePath'](g5qbk);
            u43la['fs']['getFileInfo']({
                'filePath': bd0qgk,
                'success': function (ix134n) {
                    kg0db6 != null && kg0db6['runWith']([0x0, ix134n]);
                },
                'fail': function (k06gbd) {
                    kg0db6 != null && kg0db6['runWith']([0x1, k06gbd]);
                }
            });
        }, u43la['read'] = function (boq05k, o0kq5, gkdb6, z_2epw) {
            o0kq5 === void 0x0 && (o0kq5 = 'ascill'), z_2epw === void 0x0 && (z_2epw = '');
            var _p29f;
            z_2epw != '' ? _p29f = u43la['getFileNativePath'](boq05k) : _p29f = boq05k, u43la['fs']['readFile']({
                'filePath': _p29f,
                'encoding': o0kq5,
                'success': function (_ew2z) {
                    gkdb6 != null && gkdb6['runWith']([0x0, _ew2z]);
                },
                'fail': function (byo50) {
                    if (byo50 && z_2epw != '') u43la['down'](z_2epw, o0kq5, gkdb6, z_2epw);else gkdb6 != null && gkdb6['runWith']([0x1]);
                }
            });
        }, u43la['readNativeFile'] = function (c6d, _9ewp2) {
            u43la['fs']['readFile']({
                'filePath': c6d,
                'encoding': '',
                'success': function (d6th8) {
                    _9ewp2 != null && _9ewp2['runWith']([0x0]);
                },
                'fail': function (jyrvo7) {
                    _9ewp2 != null && _9ewp2['runWith']([0x1]);
                }
            });
        }, u43la['down'] = function (ijn71, b0okq, c8z6ht, cd6g8t) {
            b0okq === void 0x0 && (b0okq = 'ascill'), cd6g8t === void 0x0 && (cd6g8t = '');
            var tpcze = u43la['getFileNativePath'](cd6g8t),
                t68chz = u43la['wxdown']({
                'url': ijn71,
                'filePath': tpcze,
                'success': function (qoy0) {
                    if (qoy0['statusCode'] === 0xc8) u43la['readFile'](qoy0['filePath'], b0okq, c8z6ht, cd6g8t);
                },
                'fail': function (yr5jo) {
                    c8z6ht != null && c8z6ht['runWith']([0x1, yr5jo]);
                }
            });
            t68chz['onProgressUpdate'](function (xi7jnv) {
                c8z6ht != null && c8z6ht['runWith']([0x2, xi7jnv['progress']]);
            });
        }, u43la['readFile'] = function (joy7rv, w2s$, x7i1n4, $f92_) {
            w2s$ === void 0x0 && (w2s$ = 'ascill'), $f92_ === void 0x0 && ($f92_ = ''), u43la['fs']['readFile']({
                'filePath': joy7rv,
                'encoding': w2s$,
                'success': function (iv) {
                    if (joy7rv['indexOf']('http://') != -0x1 || joy7rv['indexOf']('https://') != -0x1) u43la['onFileUpdate'](joy7rv, $f92_);
                    x7i1n4 != null && x7i1n4['runWith']([0x0, iv]);
                },
                'fail': function (_htepz) {
                    if (_htepz) x7i1n4 != null && x7i1n4['runWith']([0x1, _htepz]);
                }
            });
        }, u43la['downImg'] = function (ybr5qo, yjrvo, t8ezhc) {
            t8ezhc === void 0x0 && (t8ezhc = '');
            var vnji = u43la['wxdown']({
                'url': ybr5qo,
                'success': function (oy50bq) {
                    oy50bq['statusCode'] === 0xc8 && u43la['copyFile'](oy50bq['tempFilePath'], t8ezhc, yjrvo);
                },
                'fail': function (kgc) {
                    yjrvo != null && yjrvo['runWith']([0x1, kgc]);
                }
            });
        }, u43la['copyFile'] = function (wf9_2, kgdc, ybo5qr) {
            var hc8z6 = wf9_2['split']('/'),
                c8teh = hc8z6[hc8z6['length'] - 0x1],
                rovqy = kgdc['split']('?')[0x0],
                q5bry = u43la['getFileInfo'](kgdc),
                yj5vo = u43la['getFileNativePath'](c8teh);
            u43la['fs']['copyFile']({
                'srcPath': wf9_2,
                'destPath': yj5vo,
                'success': function ($w9_f) {
                    if (!q5bry) u43la['onSaveFile'](kgdc, c8teh), ybo5qr != null && ybo5qr['runWith']([0x0]);else {
                        if (q5bry['readyUrl'] != kgdc) u43la['remove'](c8teh, kgdc, ybo5qr);
                    }
                },
                'fail': function (bk5oq0) {
                    ybo5qr != null && ybo5qr['runWith']([0x1, bk5oq0]);
                }
            });
        }, u43la['getFileNativePath'] = function (r5vjoy) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + r5vjoy;
        }, u43la['remove'] = function (d6gk, n17xji, _we9) {
            n17xji === void 0x0 && (n17xji = '');
            var p2_we9 = u43la['getFileInfo'](n17xji),
                v7jor = u43la['getFileNativePath'](p2_we9['md5']);
            b5o0['loader']['clearRes'](p2_we9['readyUrl']), u43la['fs']['unlink']({
                'filePath': v7jor,
                'success': function (byo5rq) {
                    if (n17xji != '') u43la['onSaveFile'](n17xji, d6gk);
                    _we9 != null && _we9['runWith']([0x0]);
                },
                'fail': function (w9_2ep) {}
            });
        }, u43la['onSaveFile'] = function (w9f2p, s$w9) {
            var pw_ze2 = w9f2p['split']('?')[0x0];
            u43la['filesListObj'][pw_ze2] = {
                'md5': s$w9,
                'readyUrl': w9f2p
            }, u43la['fs']['writeFile']({
                'filePath': u43la['fileNativeDir'] + '/' + u43la['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](u43la['filesListObj']),
                'success': function (ezt_p) {
                    console['log']('写入测试测试成功：', ezt_p);
                },
                'fail': function (kdc6) {
                    console['log']('写入测试测试失败：', kdc6);
                }
            });
        }, u43la['existDir'] = function (pezhc, d086g) {
            u43la['fs']['mkdir']({
                'dirPath': pezhc,
                'success': function (qok50) {
                    d086g != null && d086g['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (ua3m4l) {
                    if (ua3m4l['errMsg']['indexOf']('file already exists') != -0x1) u43la['readSync'](u43la['fileListName'], 'utf8', d086g);else d086g != null && d086g['runWith']([0x1, ua3m4l]);
                }
            });
        }, u43la['readSync'] = function (x7yjv, qryov, p_wf29, o0ybq5) {
            qryov === void 0x0 && (qryov = 'ascill'), o0ybq5 === void 0x0 && (o0ybq5 = '');
            var d80gk = u43la['getFileNativePath'](x7yjv),
                _ep29w;
            try {
                _ep29w = u43la['fs']['readFileSync'](d80gk), p_wf29 != null && p_wf29['runWith']([0x0, { 'data': _ep29w }]);
            } catch (bg) {
                p_wf29 != null && p_wf29['runWith']([0x1]);
            }
        }, u43la['readCache'] = function () {}, u43la['writeCache'] = function (z8c6ht) {
            var ri7xv = readyUrl['split']('?')[0x0];
            u43la['filesListObj'][ri7xv] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, u43la['fs']['writeFile']({
                'filePath': u43la['fileNativeDir'] + '/' + u43la['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](u43la['filesListObj']),
                'success': function (kob0q) {},
                'fail': function (u43a1) {}
            });
        }, u43la['setNativeFileDir'] = function (b0oqy5) {
            u43la['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + b0oqy5;
        }, u43la['filesListObj'] = {}, u43la['fileNativeDir'] = null, u43la['fileListName'] = 'layaairfiles.txt', u43la['ziyuFileData'] = {}, jy7ro(u43la, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), u43la;
    }(jin1x),
        rvoyj = function (ni1j7x) {
        function ua13l4() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], ua13l4['__super']['call'](this), this['_sound'] = ua13l4['_createSound'](), this['_chanell'] = new x14(this['_sound']);
        }
        hz6c(ua13l4, 'laya.wx.mini.MiniSound', ni1j7x);
        var byq5o = ua13l4['prototype'];
        return byq5o['load'] = function (rboqy) {
            var _p9f2 = this;
            rboqy = gqbk['formatURL'](rboqy), this['url'] = rboqy;
            if (ua13l4['_audioCache'][rboqy]) {
                this['event']('complete');
                return;
            }
            function xn17ji() {
                if (ua13l4['_null'] != undefined) _p9f2['_sound']['onCanplay'](ua13l4['_null']), _p9f2['_sound']['onError'](ua13l4['_null']);else try {
                    _p9f2['_sound']['onCanplay'](null), _p9f2['_sound']['onError'](null), ua13l4['_null'] = null;
                } catch (z_pew) {
                    console['warn']('[wxmini] _clearSound:' + z_pew), _p9f2['_sound']['onCanplay'](i43un1), _p9f2['_sound']['onError'](i43un1), ua13l4['_null'] = i43un1;
                }
            }
            function p9f_w2() {
                oj5ry['loaded'] = !![], oj5ry['event']('complete'), ua13l4['_audioCache'][oj5ry['url']] = oj5ry;
            }
            function qvy(ehztcp) {
                console['error']('errCode=' + ehztcp['errCode'] + '  errMsg=' + ehztcp['errMsg']), oj5ry['event']('error');
            }
            function i43un1() {}
            this['_sound']['onCanplay'](p9f_w2), this['_sound']['onError'](qvy), this['_sound']['src'] = rboqy;
            var oj5ry = this;
        }, byq5o['play'] = function (gqkb, dck86g) {
            gqkb === void 0x0 && (gqkb = 0x0), dck86g === void 0x0 && (dck86g = 0x0);
            var wp92_e, b0gdq;
            if (this['url'] == k6gd['_tMusic']) {
                if (!ua13l4['_musicAudio']) ua13l4['_musicAudio'] = this['_sound'];
                wp92_e = ua13l4['_musicAudio'], b0gdq = this['_chanell'];
            } else wp92_e = this['_sound'], b0gdq = this['_chanell'];
            return wp92_e['src'] = this['url'], wp92_e['startTime'] = 0x0, b0gdq['isStopped'] && (b0gdq['url'] = this['url'], b0gdq['loops'] = dck86g, b0gdq['startTime'] = gqkb, b0gdq['play'](), k6gd['addChannel'](b0gdq)), b0gdq;
        }, byq5o['dispose'] = function () {
            var _zw2 = ua13l4['_audioCache'][this['url']];
            _zw2 && (_zw2['src'] = '', delete ua13l4['_audioCache'][this['url']]);
        }, tgc8(0x0, byq5o, 'duration', function () {
            return this['_sound']['duration'];
        }), ua13l4['_createSound'] = function () {
            ua13l4['_id']++;
            var ojry = tg8d6['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return ojry;
        }, ua13l4['_musicAudio'] = null, ua13l4['_id'] = 0x0, ua13l4['_audioCache'] = {}, ua13l4['_null'] = undefined, ua13l4;
    }(jin1x),
        x14 = function (hctpez) {
        function cg8t6(o0y5b) {
            this['_audio'] = null, this['_onEnd'] = null, cg8t6['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = o0y5b, this['_onEnd'] = dbg6['bind'](this['__onEnd'], this), o0y5b['onEnded'](this['_onEnd']);
        }
        hz6c(cg8t6, 'laya.wx.mini.MiniSoundChannel', hctpez);
        var ybq5r = cg8t6['prototype'];
        return ybq5r['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (b5o0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, ybq5r['__onNull'] = function () {}, ybq5r['play'] = function () {
            this['isStopped'] = ![], k6gd['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, ybq5r['stop'] = function () {
            this['isStopped'] = !![], k6gd['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, ybq5r['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, ybq5r['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], k6gd['addChannel'](this), this['_audio']['play']();
        }, tgc8(0x0, ybq5r, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), tgc8(0x0, ybq5r, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), tgc8(0x0, ybq5r, 'volume', function () {
            return 0x1;
        }, function (zeh) {}), cg8t6['_null'] = undefined, cg8t6;
    }(yvrj5),
        xvir = function () {
        function gkdc68() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = tg8d6['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        hz6c(gkdc68, 'laya.wx.mini.MiniVideo');
        var u1n34 = gkdc68['prototype'];
        return u1n34['on'] = function (yoj5vr, s$9, e_hzt) {
            if (yoj5vr == 'loadedmetadata') this['onPlayFunc'] = e_hzt['bind'](s$9), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else yoj5vr == 'ended' && (this['onEndedFunC'] = e_hzt['bind'](s$9), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, u1n34['onTimeUpdateFunc'] = function (h_pze2) {
            this['position'] = h_pze2['position'], this['_duration'] = h_pze2['duration'];
        }, u1n34['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, u1n34['onended'] = function (x17i, yqov5r) {
            this['onEndedFunC'] = yqov5r['bind'](x17i), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, u1n34['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, u1n34['off'] = function (dk86g0, _w9pe, sw$f92) {
            if (dk86g0 == 'loadedmetadata') this['onPlayFunc'] = sw$f92['bind'](_w9pe), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else dk86g0 == 'ended' && (this['onEndedFunC'] = sw$f92['bind'](_w9pe), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, u1n34['load'] = function (amu43) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = amu43;
        }, u1n34['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, u1n34['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, u1n34['size'] = function (ua34m, c8gk) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = ua34m, this['videoElement']['height'] = c8gk;
        }, u1n34['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, u1n34['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, tgc8(0x0, u1n34, 'duration', function () {
            return this['_duration'];
        }), tgc8(0x0, u1n34, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (ul34) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = ul34;
        }), tgc8(0x0, u1n34, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), tgc8(0x0, u1n34, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), tgc8(0x0, u1n34, 'ended', function () {
            return this['videoend'];
        }), tgc8(0x0, u1n34, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (ixnjv7) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = ixnjv7;
        }), tgc8(0x0, u1n34, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (u41i3n) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = u41i3n;
        }), tgc8(0x0, u1n34, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (g68dc) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = g68dc;
        }), tgc8(0x0, u1n34, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), tgc8(0x0, u1n34, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (g6c8t) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = g6c8t;
        }), tgc8(0x0, u1n34, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (dgbk) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = dgbk;
        }), tgc8(0x0, u1n34, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), tgc8(0x0, u1n34, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (yovjr7) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = yovjr7;
        }), tgc8(0x0, u1n34, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (yjr7ov) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = yjr7ov;
        }), tgc8(0x0, u1n34, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (p_e2zh) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = p_e2zh;
        }), gkdc68;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var p2f9w in Laya) {
        var y5ovr = Laya[p2f9w];
        y5ovr && y5ovr['__isclass'] && (exports[p2f9w] = y5ovr);
    }
});