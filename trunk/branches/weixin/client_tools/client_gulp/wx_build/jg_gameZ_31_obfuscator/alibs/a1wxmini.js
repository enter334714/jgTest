var c = wx.$a;
(function (window, document, xvsjhn) {
    var lb$y0 = xvsjhn['un'],
        ymbl$c = xvsjhn['uns'],
        jf1n = xvsjhn['static'],
        $blcma = xvsjhn['class'],
        hzvkn = xvsjhn['getset'],
        $bc0y = xvsjhn['__newvec'],
        o0_4w = laya['utils']['Browser'],
        hsjzvn = laya['events']['Event'],
        coy4b0 = laya['events']['EventDispatcher'],
        eu_4 = laya['resource']['HTMLImage'],
        g1u2fx = laya['utils']['Handler'],
        q8td6r = laya['display']['Input'],
        nhvjx = laya['net']['Loader'],
        nzjsv = laya['maths']['Matrix'],
        m$lybc = laya['renders']['Render'],
        $blymc = laya['utils']['RunDriver'],
        q6kzdh = laya['media']['Sound'],
        dzqh = laya['media']['SoundChannel'],
        cmby$l = laya['media']['SoundManager'],
        o4w = laya['display']['Stage'],
        kvnjhz = laya['net']['URL'],
        xjhvn = laya['utils']['Utils'],
        dzkv6 = function () {
        function mal9b$() {}
        return $blcma(mal9b$, 'laya.wx.mini.MiniAdpter'), mal9b$['getJson'] = function (njs1) {
            return JSON['parse'](njs1);
        }, mal9b$['init'] = function (vzk6d, r87tq5) {
            vzk6d === void 0x0 && (vzk6d = ![]), r87tq5 === void 0x0 && (r87tq5 = ![]);
            if (mal9b$['_inited']) return;
            mal9b$['window'] = window;
            if (mal9b$['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            mal9b$['_inited'] = !![], mal9b$['isZiYu'] = r87tq5, mal9b$['isPosMsgYu'] = vzk6d, mal9b$['EnvConfig'] = {}, !mal9b$['isZiYu'] && (kdzq6h['setNativeFileDir']('/layaairGame'), kdzq6h['existDir'](kdzq6h['fileNativeDir'], g1u2fx['create'](mal9b$, mal9b$['onMkdirCallBack']))), mal9b$['window']['focus'] = function () {}, xvsjhn['getUrlPath'] = function () {}, mal9b$['window']['logtime'] = function (dqkz6) {}, mal9b$['window']['alertTimeLog'] = function (qdr6) {}, mal9b$['window']['resetShareInfo'] = function () {}, mal9b$['window']['CanvasRenderingContext2D'] = function () {}, mal9b$['window']['CanvasRenderingContext2D']['prototype'] = mal9b$['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], mal9b$['window']['document']['body']['appendChild'] = function () {}, mal9b$['EnvConfig']['pixelRatioInt'] = 0x0, $blymc['getPixelRatio'] = mal9b$['pixelRatio'], mal9b$['_preCreateElement'] = o0_4w['createElement'], o0_4w['createElement'] = mal9b$['createElement'], $blymc['createShaderCondition'] = mal9b$['createShaderCondition'], xjhvn['parseXMLFromString'] = mal9b$['parseXMLFromString'], q8td6r['_createInputElement'] = q86kdz['_createInputElement'], mal9b$['EnvConfig']['load'] = nhvjx['prototype']['load'], nhvjx['prototype']['load'] = mabl9['prototype']['load'], mal9b$['isZiYu'] && vzk6d && wx['onMessage'](function (ab$9) {
                ab$9['isLoad'] && (kdzq6h['ziyuFileData'][ab$9['url']] = ab$9['data']);
            });
        }, mal9b$['onMkdirCallBack'] = function (f2j1s, u2_weg) {
            if (!f2j1s) kdzq6h['filesListObj'] = JSON['parse'](u2_weg['data']);
        }, mal9b$['pixelRatio'] = function () {
            if (!mal9b$['EnvConfig']['pixelRatioInt']) try {
                var o4y0_ = wx['getSystemInfoSync']();
                return mal9b$['EnvConfig']['pixelRatioInt'] = o4y0_['pixelRatio'], o4y0_ = o4y0_, o4y0_['pixelRatio'];
            } catch (mcal$b) {}
            return mal9b$['EnvConfig']['pixelRatioInt'];
        }, mal9b$['createElement'] = function (hsnx) {
            if (hsnx == 'canvas') {
                var nsjvz;
                return mal9b$['idx'] == 0x1 ? mal9b$['isZiYu'] ? (nsjvz = sharedCanvas, nsjvz['style'] = {}) : nsjvz = window['canvas'] : nsjvz = window['wx']['createCanvas'](), mal9b$['idx']++, nsjvz;
            } else {
                if (hsnx == 'textarea' || hsnx == 'input') return mal9b$['onCreateInput'](hsnx);else {
                    if (hsnx == 'div') {
                        var kz8dq = mal9b$['_preCreateElement'](hsnx);
                        return kz8dq['contains'] = function (szjvn) {
                            return null;
                        }, kz8dq['removeChild'] = function (_4gew) {}, kz8dq;
                    } else return mal9b$['_preCreateElement'](hsnx);
                }
            }
        }, mal9b$['onCreateInput'] = function (wg1fu) {
            var u4egw_ = mal9b$['_preCreateElement'](wg1fu);
            return u4egw_['focus'] = q86kdz['wxinputFocus'], u4egw_['blur'] = q86kdz['wxinputblur'], u4egw_['style'] = {}, u4egw_['value'] = 0x0, u4egw_['parentElement'] = {}, u4egw_['placeholder'] = {}, u4egw_['type'] = {}, u4egw_['setColor'] = function (kqh6) {}, u4egw_['setType'] = function ($ca) {}, u4egw_['setFontFace'] = function (hjzvs) {}, u4egw_['addEventListener'] = function (u12gfx) {}, u4egw_['contains'] = function (e_40y) {
                return null;
            }, u4egw_['removeChild'] = function (y$clb) {}, u4egw_;
        }, mal9b$['createShaderCondition'] = function (owe_0) {
            var m9bl$a = this,
                mab$cl = function () {
                var $mbyl = owe_0;
                return m9bl$a[owe_0['replace']('this.', '')];
            };
            return mab$cl;
        }, mal9b$['EnvConfig'] = null, mal9b$['window'] = null, mal9b$['_preCreateElement'] = null, mal9b$['_inited'] = ![], mal9b$['wxRequest'] = null, mal9b$['systemInfo'] = null, mal9b$['version'] = '0.0.1', mal9b$['isZiYu'] = ![], mal9b$['isPosMsgYu'] = ![], mal9b$['parseXMLFromString'] = function (d86qtr) {
            var hjxvsn, t8q75r;
            d86qtr = d86qtr['replace'](/>\s+</g, '><');
            try {
                hjxvsn = new window['Parser']['DOMParser']()['parseFromString'](d86qtr, 'text/xml');
            } catch (rqt58) {
                throw '需要引入xml解析库文件';
            }
            return hjxvsn;
        }, mal9b$['idx'] = 0x1, mal9b$;
    }(),
        k8qzd6 = function () {
        function $cb0yo() {}
        $blcma($cb0yo, 'laya.wx.mini.MiniImage');
        var sjhzv = $cb0yo['prototype'];
        return sjhzv['_loadImage'] = function (bal$9) {
            var b9m$ = this,
                zhsvj = ![];
            bal$9['indexOf']('layaNativeDir/') == -0x1 && (zhsvj = !![], bal$9 = kvnjhz['formatURL'](bal$9));
            if (!kdzq6h['getFileInfo'](bal$9)) {
                if (bal$9['indexOf']('http://') != -0x1 || bal$9['indexOf']('https://') != -0x1) kdzq6h['downImg'](bal$9, new g1u2fx($cb0yo, $cb0yo['onDownImgCallBack'], [bal$9, b9m$]), bal$9);else $cb0yo['onCreateImage'](bal$9, b9m$, !![]);
            } else $cb0yo['onCreateImage'](bal$9, b9m$, !zhsvj);
        }, $cb0yo['onDownImgCallBack'] = function (k86dqt, xjn1s, r3i57) {
            if (!r3i57) $cb0yo['onCreateImage'](k86dqt, xjn1s);else xjn1s['onError'](null);
        }, $cb0yo['onCreateImage'] = function (hsnzv, ymlb$c, vhnzjs) {
            vhnzjs === void 0x0 && (vhnzjs = ![]);
            var nshvx;
            if (!vhnzjs) {
                var xns1j = kdzq6h['getFileInfo'](hsnzv),
                    xu12 = xns1j['md5'];
                nshvx = kdzq6h['getFileNativePath'](xu12);
            } else nshvx = hsnzv;
            if (ymlb$c['imgCache'] == null) ymlb$c['imgCache'] = {};
            var kt8;
            function t3r7p() {
                kt8['onload'] = null, kt8['onerror'] = null, delete ymlb$c['imgCache'][hsnzv];
            }
            ;
            var ir3p5 = function () {
                t3r7p(), ymlb$c['onLoaded'](kt8);
            },
                nfx1s = function () {
                t3r7p(), ymlb$c['event']('error', 'Load image failed');
            };
            ymlb$c['_type'] == 'nativeimage' ? (kt8 = new o0_4w['window']['Image'](), kt8['crossOrigin'] = '', kt8['onload'] = ir3p5, kt8['onerror'] = nfx1s, kt8['src'] = nshvx, ymlb$c['imgCache'][hsnzv] = kt8) : new eu_4['create'](nshvx, {
                'onload': ir3p5,
                'onerror': nfx1s,
                'onCreate': function (cbyo$) {
                    kt8 = cbyo$, ymlb$c['imgCache'][hsnzv] = cbyo$;
                }
            });
        }, $cb0yo;
    }(),
        q86kdz = function () {
        function o0$cb() {}
        return $blcma(o0$cb, 'laya.wx.mini.MiniInput'), o0$cb['_createInputElement'] = function () {
            q8td6r['_initInput'](q8td6r['area'] = o0_4w['createElement']('textarea')), q8td6r['_initInput'](q8td6r['input'] = o0_4w['createElement']('input')), q8td6r['inputContainer'] = o0_4w['createElement']('div'), q8td6r['inputContainer']['style']['position'] = 'absolute', q8td6r['inputContainer']['style']['zIndex'] = 0x186a0, o0_4w['container']['appendChild'](q8td6r['inputContainer']), q8td6r['inputContainer']['setPos'] = function (obc0y, g21xfu) {
                q8td6r['inputContainer']['style']['left'] = obc0y + 'px', q8td6r['inputContainer']['style']['top'] = g21xfu + 'px';
            }, xvsjhn['stage']['on']('resize', null, o0$cb['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (yc4bo) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), cmby$l['_soundClass'] = lmba9, cmby$l['_musicClass'] = lmba9, window['_videoClass'] = l$y0cb;
        }, o0$cb['_onStageResize'] = function () {
            var c4ob = xvsjhn['stage']['_canvasTransform']['identity']();
            c4ob['scale'](o0_4w['width'] / m$lybc['canvas']['width'] / $blymc['getPixelRatio'](), o0_4w['height'] / m$lybc['canvas']['height'] / $blymc['getPixelRatio']());
        }, o0$cb['wxinputFocus'] = function (sxf1nj) {
            var q86dtr = q8td6r['inputElement']['target'];
            if (q86dtr && !q86dtr['editable']) return;
            dzkv6['window']['wx']['offKeyboardConfirm'](), dzkv6['window']['wx']['offKeyboardInput'](), dzkv6['window']['wx']['showKeyboard']({
                'defaultValue': q86dtr['text'],
                'maxLength': q86dtr['maxChars'],
                'multiple': q86dtr['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (vzhk6) {},
                'fail': function (zshjn) {}
            }), dzkv6['window']['wx']['onKeyboardConfirm'](function (hq6zd) {
                var owe0_4 = hq6zd ? hq6zd['value'] : '';
                q86dtr['text'] = owe0_4, q86dtr['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), dzkv6['window']['wx']['onKeyboardInput'](function (vjkz) {
                var rtd85 = vjkz ? vjkz['value'] : '';
                if (!q86dtr['multiline']) {
                    if (rtd85['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                q86dtr['text'] = rtd85, q86dtr['event']('input');
            });
        }, o0$cb['inputEnter'] = function () {
            q8td6r['inputElement']['target']['focus'] = ![];
        }, o0$cb['wxinputblur'] = function () {
            o0$cb['hideKeyboard']();
        }, o0$cb['hideKeyboard'] = function () {
            dzkv6['window']['wx']['offKeyboardConfirm'](), dzkv6['window']['wx']['offKeyboardInput'](), dzkv6['window']['wx']['hideKeyboard']({
                'success': function (p37r5) {
                    console['log']('隐藏键盘');
                },
                'fail': function (p3ri5) {
                    console['log']('隐藏键盘出错:' + (p3ri5 ? p3ri5['errMsg'] : ''));
                }
            });
        }, o0$cb;
    }(),
        mabl9 = function () {
        function vdzh() {}
        $blcma(vdzh, 'laya.wx.mini.MiniLoader');
        var u4woe_ = vdzh['prototype'];
        return u4woe_['load'] = function (ab$m, cb$oy0, y0$cl, znv6k, c$0l) {
            y0$cl === void 0x0 && (y0$cl = !![]), c$0l === void 0x0 && (c$0l = ![]);
            var cmba$ = this;
            cmba$['_url'] = ab$m;
            if (ab$m['indexOf']('data:image') === 0x0) cmba$['_type'] = cb$oy0 = 'image';else cmba$['_type'] = cb$oy0 || (cb$oy0 = cmba$['getTypeFromUrl'](ab$m));
            cmba$['_cache'] = y0$cl, cmba$['_data'] = null;
            var njhvz = 'ascii';
            if (ab$m['indexOf']('.fnt') != -0x1) njhvz = 'utf8';else cb$oy0 == 'arraybuffer' && (njhvz = '');
            ;
            var jzhns = xjhvn['getFileExtension'](ab$m);
            if (vdzh['_fileTypeArr']['indexOf'](jzhns) != -0x1) dzkv6['EnvConfig']['load']['call'](this, ab$m, cb$oy0, y0$cl, znv6k, c$0l);else {
                if (!kdzq6h['getFileInfo'](ab$m)) {
                    if (ab$m['indexOf']('layaNativeDir/') != -0x1) {
                        if (dzkv6['isZiYu']) {
                            var $blm9a = kdzq6h['ziyuFileData'][ab$m];
                            cmba$['onLoaded']($blm9a);
                            return;
                        } else {
                            cosnole['log']('read read'), kdzq6h['read'](ab$m, njhvz, new g1u2fx(vdzh, vdzh['onReadNativeCallBack'], [njhvz, ab$m, cb$oy0, y0$cl, znv6k, c$0l, cmba$]));
                            return;
                        }
                    }
                    if (kvnjhz['rootPath'] == '') var j12s = ab$m;else j12s = ab$m['split'](kvnjhz['rootPath'])[0x0];
                    ab$m['indexOf']('http://') != -0x1 || ab$m['indexOf']('https://') != -0x1 ? dzkv6['EnvConfig']['load']['call'](cmba$, ab$m, cb$oy0, y0$cl, znv6k, c$0l) : kdzq6h['readFile'](j12s, njhvz, new g1u2fx(vdzh, vdzh['onReadNativeCallBack'], [njhvz, ab$m, cb$oy0, y0$cl, znv6k, c$0l, cmba$]), ab$m);
                } else dzkv6['EnvConfig']['load']['call'](this, ab$m, cb$oy0, y0$cl, znv6k, c$0l);
            }
        }, u4woe_['resMgrLoad'] = function (c0byo$, rdt6, c0o$yb, y0o$cb, sf1nj, sfxv, hnsvx) {
            c0o$yb === void 0x0 && (c0o$yb = 0x0), y0o$cb === void 0x0 && (y0o$cb = ![]), sf1nj === void 0x0 && (sf1nj = ![]), sfxv === void 0x0 && (sfxv = 0x0), hnsvx === void 0x0 && (hnsvx = 0x3), c0byo$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', c0byo$), dzkv6['EnvConfig']['resMgrLoad'](c0byo$, (s1g, i375r, c4_) => {
                vdzh['prototype']['resMgrLoadCallBack'](s1g, i375r, c4_, rdt6);
            }, c0o$yb, y0o$cb, sf1nj, sfxv, hnsvx);
        }, u4woe_['resMgrLoadCallBack'] = function (a9$mbl, nkhz6, ou_w4, r5qdt8) {
            console['log']('buff:::', a9$mbl, ou_w4, kdzq6h['fileNativeDir'] + '///' + kdzq6h['fileListName']), r5qdt8(a9$mbl, nkhz6, ou_w4);
        }, u4woe_['clearRes'] = function (zvjkhn, e_w04o) {
            e_w04o === void 0x0 && (e_w04o = ![]);
            var co4y0_ = this;
            co4y0_['clearRes'](zvjkhn, e_w04o);
            var w_e4g = kdzq6h['getFileInfo'](zvjkhn);
            if (w_e4g && (zvjkhn['indexOf']('http://') != -0x1 || zvjkhn['indexOf']('https://') != -0x1)) {
                var ugw2e_ = w_e4g['md5'],
                    u12xf = kdzq6h['getFileNativePath'](ugw2e_);
                kdzq6h['remove'](u12xf);
            }
        }, vdzh['onReadNativeCallBack'] = function (vjxh, jzvhn, xfsg, gsf21, vjkzn, vhxs, nxsjf1, u1e2wg, xg21fu) {
            gsf21 === void 0x0 && (gsf21 = !![]), vhxs === void 0x0 && (vhxs = ![]), u1e2wg === void 0x0 && (u1e2wg = 0x0);
            if (!u1e2wg) {
                var bcy0o;
                if (xfsg == 'json' || xfsg == 'atlas') bcy0o = dzkv6['getJson'](xg21fu['data']);else xfsg == 'xml' ? bcy0o = xjhvn['parseXMLFromString'](xg21fu['data']) : bcy0o = xg21fu['data'];
                nxsjf1['onLoaded'](bcy0o), !dzkv6['isZiYu'] && dzkv6['isPosMsgYu'] && xfsg != 'arraybuffer' && wx['postMessage']({
                    'url': jzvhn,
                    'data': bcy0o,
                    'isLoad': !![]
                });
            } else u1e2wg == 0x1 && dzkv6['EnvConfig']['load']['call'](nxsjf1, jzvhn, xfsg, gsf21, vjkzn, vhxs);
        }, jf1n(vdzh, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), vdzh;
    }(),
        kdzq6h = function (qdzh6k) {
        function yo40() {
            yo40['__super']['call'](this);
            ;
        }
        return $blcma(yo40, 'laya.wx.mini.MiniFileMgr', qdzh6k), yo40['isLoadFile'] = function (nxvjsf) {
            return yo40['_fileTypeArr']['indexOf'](nxvjsf) != -0x1 ? !![] : ![];
        }, yo40['getFileInfo'] = function (hsxnjv) {
            var abml$c = hsxnjv['split']('?')[0x0],
                _0w4eo = yo40['filesListObj'][abml$c];
            if (_0w4eo == null) return null;else return _0w4eo;
            return null;
        }, yo40['onFileUpdate'] = function (ly0cb, snvjxf) {
            var fj1xns = ly0cb['split']('/'),
                zhk6q = fj1xns[fj1xns['length'] - 0x1],
                cal = yo40['getFileInfo'](snvjxf);
            if (cal == null) yo40['onSaveFile'](snvjxf, zhk6q);else {
                if (cal['readyUrl'] != snvjxf) yo40['remove'](zhk6q, snvjxf);
            }
        }, yo40['exits'] = function (y40bo, o04yc) {
            var xnvfjs = yo40['getFileNativePath'](y40bo);
            yo40['fs']['getFileInfo']({
                'filePath': xnvfjs,
                'success': function (g1ux) {
                    o04yc != null && o04yc['runWith']([0x0, g1ux]);
                },
                'fail': function (q8dkt6) {
                    o04yc != null && o04yc['runWith']([0x1, q8dkt6]);
                }
            });
        }, yo40['read'] = function (rq86td, boyc0, hvz6d, ylb$c0) {
            boyc0 === void 0x0 && (boyc0 = 'ascill'), ylb$c0 === void 0x0 && (ylb$c0 = '');
            var d8zk6;
            ylb$c0 != '' ? d8zk6 = yo40['getFileNativePath'](rq86td) : d8zk6 = rq86td, yo40['fs']['readFile']({
                'filePath': d8zk6,
                'encoding': boyc0,
                'success': function (oe_40) {
                    hvz6d != null && hvz6d['runWith']([0x0, oe_40]);
                },
                'fail': function (albm9) {
                    if (albm9 && ylb$c0 != '') yo40['down'](ylb$c0, boyc0, hvz6d, ylb$c0);else hvz6d != null && hvz6d['runWith']([0x1]);
                }
            });
        }, yo40['readNativeFile'] = function (alb, z6hkvn) {
            yo40['fs']['readFile']({
                'filePath': alb,
                'encoding': '',
                'success': function (yo) {
                    z6hkvn != null && z6hkvn['runWith']([0x0]);
                },
                'fail': function (e_4u) {
                    z6hkvn != null && z6hkvn['runWith']([0x1]);
                }
            });
        }, yo40['down'] = function (wg2ue, q758tr, q6dk8t, hnxjsv) {
            q758tr === void 0x0 && (q758tr = 'ascill'), hnxjsv === void 0x0 && (hnxjsv = '');
            var l$yb0 = yo40['getFileNativePath'](hnxjsv),
                b9$mla = yo40['wxdown']({
                'url': wg2ue,
                'filePath': l$yb0,
                'success': function (eo_y04) {
                    if (eo_y04['statusCode'] === 0xc8) yo40['readFile'](eo_y04['filePath'], q758tr, q6dk8t, hnxjsv);
                },
                'fail': function (ml$9ab) {
                    q6dk8t != null && q6dk8t['runWith']([0x1, ml$9ab]);
                }
            });
            b9$mla['onProgressUpdate'](function (p37t) {
                q6dk8t != null && q6dk8t['runWith']([0x2, p37t['progress']]);
            });
        }, yo40['readFile'] = function (f2sg1x, o4yb0, $oc0by, tqkd8) {
            o4yb0 === void 0x0 && (o4yb0 = 'ascill'), tqkd8 === void 0x0 && (tqkd8 = ''), yo40['fs']['readFile']({
                'filePath': f2sg1x,
                'encoding': o4yb0,
                'success': function (gf21wu) {
                    if (f2sg1x['indexOf']('http://') != -0x1 || f2sg1x['indexOf']('https://') != -0x1) yo40['onFileUpdate'](f2sg1x, tqkd8);
                    $oc0by != null && $oc0by['runWith']([0x0, gf21wu]);
                },
                'fail': function (k6zqd) {
                    if (k6zqd) $oc0by != null && $oc0by['runWith']([0x1, k6zqd]);
                }
            });
        }, yo40['downImg'] = function (kt8dq6, zvkhj, wo0e_4) {
            wo0e_4 === void 0x0 && (wo0e_4 = '');
            var _u4ew = yo40['wxdown']({
                'url': kt8dq6,
                'success': function (bcyl$) {
                    bcyl$['statusCode'] === 0xc8 && yo40['copyFile'](bcyl$['tempFilePath'], wo0e_4, zvkhj);
                },
                'fail': function (jhznk) {
                    zvkhj != null && zvkhj['runWith']([0x1, jhznk]);
                }
            });
        }, yo40['copyFile'] = function (vsfxj, r3t75p, vnzkhj) {
            var ycbo40 = vsfxj['split']('/'),
                u_wge2 = ycbo40[ycbo40['length'] - 0x1],
                hxvjn = r3t75p['split']('?')[0x0],
                r5t873 = yo40['getFileInfo'](r3t75p),
                oc_ = yo40['getFileNativePath'](u_wge2);
            yo40['fs']['copyFile']({
                'srcPath': vsfxj,
                'destPath': oc_,
                'success': function (co4y_) {
                    if (!r5t873) yo40['onSaveFile'](r3t75p, u_wge2), vnzkhj != null && vnzkhj['runWith']([0x0]);else {
                        if (r5t873['readyUrl'] != r3t75p) yo40['remove'](u_wge2, r3t75p, vnzkhj);
                    }
                },
                'fail': function (pt537) {
                    vnzkhj != null && vnzkhj['runWith']([0x1, pt537]);
                }
            });
        }, yo40['getFileNativePath'] = function (y04_oc) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + y04_oc;
        }, yo40['remove'] = function (fx12u, a$mblc, x12jf) {
            a$mblc === void 0x0 && (a$mblc = '');
            var wo4e_u = yo40['getFileInfo'](a$mblc),
                bymcl$ = yo40['getFileNativePath'](wo4e_u['md5']);
            xvsjhn['loader']['clearRes'](wo4e_u['readyUrl']), yo40['fs']['unlink']({
                'filePath': bymcl$,
                'success': function (x2j1s) {
                    if (a$mblc != '') yo40['onSaveFile'](a$mblc, fx12u);
                    x12jf != null && x12jf['runWith']([0x0]);
                },
                'fail': function (khvznj) {}
            });
        }, yo40['onSaveFile'] = function (xnjsf1, kzhdv6) {
            var i53pr = xnjsf1['split']('?')[0x0];
            yo40['filesListObj'][i53pr] = {
                'md5': kzhdv6,
                'readyUrl': xnjsf1
            }, yo40['fs']['writeFile']({
                'filePath': yo40['fileNativeDir'] + '/' + yo40['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](yo40['filesListObj']),
                'success': function (s2jfx) {
                    console['log']('写入测试测试成功：', s2jfx);
                },
                'fail': function (nsfj) {
                    console['log']('写入测试测试失败：', nsfj);
                }
            });
        }, yo40['existDir'] = function (njvf, _oeuw4) {
            yo40['fs']['mkdir']({
                'dirPath': njvf,
                'success': function (qtd58) {
                    _oeuw4 != null && _oeuw4['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (k86zd) {
                    if (k86zd['errMsg']['indexOf']('file already exists') != -0x1) yo40['readSync'](yo40['fileListName'], 'utf8', _oeuw4);else _oeuw4 != null && _oeuw4['runWith']([0x1, k86zd]);
                }
            });
        }, yo40['readSync'] = function (fxjsnv, r857qt, nxfvsj, jsnzvh) {
            r857qt === void 0x0 && (r857qt = 'ascill'), jsnzvh === void 0x0 && (jsnzvh = '');
            var g1u2w = yo40['getFileNativePath'](fxjsnv),
                yb$0o;
            try {
                yb$0o = yo40['fs']['readFileSync'](g1u2w), nxfvsj != null && nxfvsj['runWith']([0x0, { 'data': yb$0o }]);
            } catch (ycbl$m) {
                nxfvsj != null && nxfvsj['runWith']([0x1]);
            }
        }, yo40['readCache'] = function () {}, yo40['writeCache'] = function (e2uw_g) {
            var jznvh = readyUrl['split']('?')[0x0];
            yo40['filesListObj'][jznvh] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, yo40['fs']['writeFile']({
                'filePath': yo40['fileNativeDir'] + '/' + yo40['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](yo40['filesListObj']),
                'success': function (pri375) {},
                'fail': function (ocby0$) {}
            });
        }, yo40['setNativeFileDir'] = function (b04co) {
            yo40['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + b04co;
        }, yo40['filesListObj'] = {}, yo40['fileNativeDir'] = null, yo40['fileListName'] = 'layaairfiles.txt', yo40['ziyuFileData'] = {}, jf1n(yo40, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), yo40;
    }(coy4b0),
        lmba9 = function (sjnfx1) {
        function nzhjsv() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], nzhjsv['__super']['call'](this), this['_sound'] = nzhjsv['_createSound'](), this['_chanell'] = new j1x2fs(this['_sound']);
        }
        $blcma(nzhjsv, 'laya.wx.mini.MiniSound', sjnfx1);
        var uw2e1 = nzhjsv['prototype'];
        return uw2e1['load'] = function (r8qtd) {
            var cbl$y = this;
            r8qtd = kvnjhz['formatURL'](r8qtd), this['url'] = r8qtd;
            if (nzhjsv['_audioCache'][r8qtd]) {
                this['event']('complete');
                return;
            }
            function o0_c() {
                if (nzhjsv['_null'] != undefined) cbl$y['_sound']['onCanplay'](nzhjsv['_null']), cbl$y['_sound']['onError'](nzhjsv['_null']);else try {
                    cbl$y['_sound']['onCanplay'](null), cbl$y['_sound']['onError'](null), nzhjsv['_null'] = null;
                } catch (w_4eo0) {
                    console['warn']('[wxmini] _clearSound:' + w_4eo0), cbl$y['_sound']['onCanplay'](o4ycb), cbl$y['_sound']['onError'](o4ycb), nzhjsv['_null'] = o4ycb;
                }
            }
            function zkn6vh() {
                e2_g['loaded'] = !![], e2_g['event']('complete'), nzhjsv['_audioCache'][e2_g['url']] = e2_g;
            }
            function nhz6k(i735rp) {
                console['error']('errCode=' + i735rp['errCode'] + '  errMsg=' + i735rp['errMsg']), e2_g['event']('error');
            }
            function o4ycb() {}
            this['_sound']['onCanplay'](zkn6vh), this['_sound']['onError'](nhz6k), this['_sound']['src'] = r8qtd;
            var e2_g = this;
        }, uw2e1['play'] = function (ou4we, sfjvn) {
            ou4we === void 0x0 && (ou4we = 0x0), sfjvn === void 0x0 && (sfjvn = 0x0);
            var snfxv, eg;
            if (this['url'] == cmby$l['_tMusic']) {
                if (!nzhjsv['_musicAudio']) nzhjsv['_musicAudio'] = this['_sound'];
                snfxv = nzhjsv['_musicAudio'], eg = this['_chanell'];
            } else snfxv = this['_sound'], eg = this['_chanell'];
            return snfxv['src'] = this['url'], snfxv['startTime'] = 0x0, eg['isStopped'] && (eg['url'] = this['url'], eg['loops'] = sfjvn, eg['startTime'] = ou4we, eg['play'](), cmby$l['addChannel'](eg)), eg;
        }, uw2e1['dispose'] = function () {
            var nvjshx = nzhjsv['_audioCache'][this['url']];
            nvjshx && (nvjshx['src'] = '', delete nzhjsv['_audioCache'][this['url']]);
        }, hzvkn(0x0, uw2e1, 'duration', function () {
            return this['_sound']['duration'];
        }), nzhjsv['_createSound'] = function () {
            nzhjsv['_id']++;
            var e_ouw4 = dzkv6['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return e_ouw4;
        }, nzhjsv['_musicAudio'] = null, nzhjsv['_id'] = 0x0, nzhjsv['_audioCache'] = {}, nzhjsv['_null'] = undefined, nzhjsv;
    }(coy4b0),
        j1x2fs = function (oye_40) {
        function sxjn1(z6kdv) {
            this['_audio'] = null, this['_onEnd'] = null, sxjn1['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = z6kdv, this['_onEnd'] = xjhvn['bind'](this['__onEnd'], this), z6kdv['onEnded'](this['_onEnd']);
        }
        $blcma(sxjn1, 'laya.wx.mini.MiniSoundChannel', oye_40);
        var wf1ug2 = sxjn1['prototype'];
        return wf1ug2['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (xvsjhn['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, wf1ug2['__onNull'] = function () {}, wf1ug2['play'] = function () {
            this['isStopped'] = ![], cmby$l['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, wf1ug2['stop'] = function () {
            this['isStopped'] = !![], cmby$l['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, wf1ug2['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, wf1ug2['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], cmby$l['addChannel'](this), this['_audio']['play']();
        }, hzvkn(0x0, wf1ug2, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), hzvkn(0x0, wf1ug2, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), hzvkn(0x0, wf1ug2, 'volume', function () {
            return 0x1;
        }, function (dk6zqh) {}), sxjn1['_null'] = undefined, sxjn1;
    }(dzqh),
        l$y0cb = function () {
        function r7p5t3() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = dzkv6['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        $blcma(r7p5t3, 'laya.wx.mini.MiniVideo');
        var x21jf = r7p5t3['prototype'];
        return x21jf['on'] = function (sjh, rdtq85, t78r5q) {
            if (sjh == 'loadedmetadata') this['onPlayFunc'] = t78r5q['bind'](rdtq85), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else sjh == 'ended' && (this['onEndedFunC'] = t78r5q['bind'](rdtq85), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, x21jf['onTimeUpdateFunc'] = function (khqz6d) {
            this['position'] = khqz6d['position'], this['_duration'] = khqz6d['duration'];
        }, x21jf['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, x21jf['onended'] = function (y40oe, q8dkz) {
            this['onEndedFunC'] = q8dkz['bind'](y40oe), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, x21jf['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, x21jf['off'] = function (o_0we4, eg_2, pt375) {
            if (o_0we4 == 'loadedmetadata') this['onPlayFunc'] = pt375['bind'](eg_2), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else o_0we4 == 'ended' && (this['onEndedFunC'] = pt375['bind'](eg_2), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, x21jf['load'] = function (hkzq6) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = hkzq6;
        }, x21jf['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, x21jf['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, x21jf['size'] = function (vnsxhj, l$mc) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = vnsxhj, this['videoElement']['height'] = l$mc;
        }, x21jf['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, x21jf['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, hzvkn(0x0, x21jf, 'duration', function () {
            return this['_duration'];
        }), hzvkn(0x0, x21jf, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (kn6h) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = kn6h;
        }), hzvkn(0x0, x21jf, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), hzvkn(0x0, x21jf, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), hzvkn(0x0, x21jf, 'ended', function () {
            return this['videoend'];
        }), hzvkn(0x0, x21jf, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (nhvk6) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = nhvk6;
        }), hzvkn(0x0, x21jf, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (xjns) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = xjns;
        }), hzvkn(0x0, x21jf, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (qz8dk6) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = qz8dk6;
        }), hzvkn(0x0, x21jf, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), hzvkn(0x0, x21jf, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (_ewo4) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = _ewo4;
        }), hzvkn(0x0, x21jf, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function ($mlabc) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = $mlabc;
        }), hzvkn(0x0, x21jf, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), hzvkn(0x0, x21jf, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (zqd6) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = zqd6;
        }), hzvkn(0x0, x21jf, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (gwu2e_) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = gwu2e_;
        }), hzvkn(0x0, x21jf, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (rtd68q) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = rtd68q;
        }), r7p5t3;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var jf1xs2 in Laya) {
        var d6qzhk = Laya[jf1xs2];
        d6qzhk && d6qzhk['__isclass'] && (exports[jf1xs2] = d6qzhk);
    }
});