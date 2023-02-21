var f1 = wx.f$;
(function (window, document, cgeoij) {
    var p8w4mq = cgeoij['un'],
        evi = cgeoij['uns'],
        am4 = cgeoij['static'],
        x01hf9 = cgeoij['class'],
        v7gz = cgeoij['getset'],
        vz7b = cgeoij['__newvec'],
        bzg6 = laya['utils']['Browser'],
        goj = laya['events']['Event'],
        tqw = laya['events']['EventDispatcher'],
        bgi7vz = laya['resource']['HTMLImage'],
        rcldy3 = laya['utils']['Handler'],
        $dylr = laya['display']['Input'],
        rd$3y = laya['net']['Loader'],
        drye3c = laya['maths']['Matrix'],
        b076 = laya['renders']['Render'],
        n8p4ua = laya['utils']['RunDriver'],
        hwqsm = laya['media']['Sound'],
        ts9qmh = laya['media']['SoundChannel'],
        hx1s9t = laya['media']['SoundManager'],
        wp8m = laya['display']['Stage'],
        x52f01 = laya['net']['URL'],
        zi7g = laya['utils']['Utils'],
        jyrec = function () {
        function mt8q() {}
        return x01hf9(mt8q, 'laya.wx.mini.MiniAdpter'), mt8q['getJson'] = function (f91htx) {
            return JSON['parse'](f91htx);
        }, mt8q['init'] = function (mts8qw, h1s9tq) {
            mts8qw === void 0x0 && (mts8qw = ![]), h1s9tq === void 0x0 && (h1s9tq = ![]);
            if (mt8q['_inited']) return;
            mt8q['window'] = window;
            if (mt8q['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            mt8q['_inited'] = !![], mt8q['isZiYu'] = h1s9tq, mt8q['isPosMsgYu'] = mts8qw, mt8q['EnvConfig'] = {}, !mt8q['isZiYu'] && (c3dyr['setNativeFileDir']('/layaairGame'), c3dyr['existDir'](c3dyr['fileNativeDir'], rcldy3['create'](mt8q, mt8q['onMkdirCallBack']))), mt8q['window']['focus'] = function () {}, cgeoij['getUrlPath'] = function () {}, mt8q['window']['logtime'] = function (igcejo) {}, mt8q['window']['alertTimeLog'] = function (jciy) {}, mt8q['window']['resetShareInfo'] = function () {}, mt8q['window']['CanvasRenderingContext2D'] = function () {}, mt8q['window']['CanvasRenderingContext2D']['prototype'] = mt8q['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], mt8q['window']['document']['body']['appendChild'] = function () {}, mt8q['EnvConfig']['pixelRatioInt'] = 0x0, n8p4ua['getPixelRatio'] = mt8q['pixelRatio'], mt8q['_preCreateElement'] = bzg6['createElement'], bzg6['createElement'] = mt8q['createElement'], n8p4ua['createShaderCondition'] = mt8q['createShaderCondition'], zi7g['parseXMLFromString'] = mt8q['parseXMLFromString'], $dylr['_createInputElement'] = tqm8ws['_createInputElement'], mt8q['EnvConfig']['load'] = rd$3y['prototype']['load'], rd$3y['prototype']['load'] = ylrd['prototype']['load'], mt8q['isZiYu'] && mts8qw && wx['onMessage'](function (mtwqs8) {
                mtwqs8['isLoad'] && (c3dyr['ziyuFileData'][mtwqs8['url']] = mtwqs8['data']);
            });
        }, mt8q['onMkdirCallBack'] = function (zojvig, oigz) {
            if (!zojvig) c3dyr['filesListObj'] = JSON['parse'](oigz['data']);
        }, mt8q['pixelRatio'] = function () {
            if (!mt8q['EnvConfig']['pixelRatioInt']) try {
                var zbv7gi = wx['getSystemInfoSync']();
                return mt8q['EnvConfig']['pixelRatioInt'] = zbv7gi['pixelRatio'], zbv7gi = zbv7gi, zbv7gi['pixelRatio'];
            } catch (rld$) {}
            return mt8q['EnvConfig']['pixelRatioInt'];
        }, mt8q['createElement'] = function (l3dr) {
            if (l3dr == 'canvas') {
                var q8mts;
                return mt8q['idx'] == 0x1 ? mt8q['isZiYu'] ? (q8mts = sharedCanvas, q8mts['style'] = {}) : q8mts = window['canvas'] : q8mts = window['wx']['createCanvas'](), mt8q['idx']++, q8mts;
            } else {
                if (l3dr == 'textarea' || l3dr == 'input') return mt8q['onCreateInput'](l3dr);else {
                    if (l3dr == 'div') {
                        var eoijyc = mt8q['_preCreateElement'](l3dr);
                        return eoijyc['contains'] = function (je) {
                            return null;
                        }, eoijyc['removeChild'] = function (egiocj) {}, eoijyc;
                    } else return mt8q['_preCreateElement'](l3dr);
                }
            }
        }, mt8q['onCreateInput'] = function (ievgo) {
            var tshwq = mt8q['_preCreateElement'](ievgo);
            return tshwq['focus'] = tqm8ws['wxinputFocus'], tshwq['blur'] = tqm8ws['wxinputblur'], tshwq['style'] = {}, tshwq['value'] = 0x0, tshwq['parentElement'] = {}, tshwq['placeholder'] = {}, tshwq['type'] = {}, tshwq['setColor'] = function (zb256) {}, tshwq['setType'] = function (jecryo) {}, tshwq['setFontFace'] = function (swt) {}, tshwq['addEventListener'] = function (wmt8qs) {}, tshwq['contains'] = function (na8u) {
                return null;
            }, tshwq['removeChild'] = function (jyecio) {}, tshwq;
        }, mt8q['createShaderCondition'] = function (drl3cy) {
            var gijcoe = this,
                $_dr = function () {
                var ocyed = drl3cy;
                return gijcoe[drl3cy['replace']('this.', '')];
            };
            return $_dr;
        }, mt8q['EnvConfig'] = null, mt8q['window'] = null, mt8q['_preCreateElement'] = null, mt8q['_inited'] = ![], mt8q['wxRequest'] = null, mt8q['systemInfo'] = null, mt8q['version'] = '0.0.1', mt8q['isZiYu'] = ![], mt8q['isPosMsgYu'] = ![], mt8q['parseXMLFromString'] = function (qtwhms) {
            var shm9qt, ozjgi;
            qtwhms = qtwhms['replace'](/>\s+</g, '><');
            try {
                shm9qt = new window['Parser']['DOMParser']()['parseFromString'](qtwhms, 'text/xml');
            } catch (gzvji7) {
                throw '需要引入xml解析库文件';
            }
            return shm9qt;
        }, mt8q['idx'] = 0x1, mt8q;
    }(),
        yjco = function () {
        function cgiejo() {}
        x01hf9(cgiejo, 'laya.wx.mini.MiniImage');
        var ap4ku = cgiejo['prototype'];
        return ap4ku['_loadImage'] = function (rdocey) {
            var x01 = this,
                ejiog = ![];
            rdocey['indexOf']('layaNativeDir/') == -0x1 && (ejiog = !![], rdocey = x52f01['formatURL'](rdocey));
            if (!c3dyr['getFileInfo'](rdocey)) {
                if (rdocey['indexOf']('http://') != -0x1 || rdocey['indexOf']('https://') != -0x1) c3dyr['downImg'](rdocey, new rcldy3(cgiejo, cgiejo['onDownImgCallBack'], [rdocey, x01]), rdocey);else cgiejo['onCreateImage'](rdocey, x01, !![]);
            } else cgiejo['onCreateImage'](rdocey, x01, !ejiog);
        }, cgiejo['onDownImgCallBack'] = function (tm8wq, zvijog, x56f2) {
            if (!x56f2) cgiejo['onCreateImage'](tm8wq, zvijog);else zvijog['onError'](null);
        }, cgiejo['onCreateImage'] = function (xf0h91, hts9, anpw4) {
            anpw4 === void 0x0 && (anpw4 = ![]);
            var gzbi7;
            if (!anpw4) {
                var zgijv = c3dyr['getFileInfo'](xf0h91),
                    f205x6 = zgijv['md5'];
                gzbi7 = c3dyr['getFileNativePath'](f205x6);
            } else gzbi7 = xf0h91;
            if (hts9['imgCache'] == null) hts9['imgCache'] = {};
            var corj;
            function map8w4() {
                corj['onload'] = null, corj['onerror'] = null, delete hts9['imgCache'][xf0h91];
            }
            ;
            var sht9m = function () {
                map8w4(), hts9['onLoaded'](corj);
            },
                qshwt = function () {
                map8w4(), hts9['event']('error', 'Load image failed');
            };
            hts9['_type'] == 'nativeimage' ? (corj = new bzg6['window']['Image'](), corj['crossOrigin'] = '', corj['onload'] = sht9m, corj['onerror'] = qshwt, corj['src'] = gzbi7, hts9['imgCache'][xf0h91] = corj) : new bgi7vz['create'](gzbi7, {
                'onload': sht9m,
                'onerror': qshwt,
                'onCreate': function (sw8qmt) {
                    corj = sw8qmt, hts9['imgCache'][xf0h91] = sw8qmt;
                }
            });
        }, cgiejo;
    }(),
        tqm8ws = function () {
        function sm9hqt() {}
        return x01hf9(sm9hqt, 'laya.wx.mini.MiniInput'), sm9hqt['_createInputElement'] = function () {
            $dylr['_initInput']($dylr['area'] = bzg6['createElement']('textarea')), $dylr['_initInput']($dylr['input'] = bzg6['createElement']('input')), $dylr['inputContainer'] = bzg6['createElement']('div'), $dylr['inputContainer']['style']['position'] = 'absolute', $dylr['inputContainer']['style']['zIndex'] = 0x186a0, bzg6['container']['appendChild']($dylr['inputContainer']), $dylr['inputContainer']['setPos'] = function (rc3yld, unapk4) {
                $dylr['inputContainer']['style']['left'] = rc3yld + 'px', $dylr['inputContainer']['style']['top'] = unapk4 + 'px';
            }, cgeoij['stage']['on']('resize', null, sm9hqt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (w84n) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), hx1s9t['_soundClass'] = mtqw, hx1s9t['_musicClass'] = mtqw, window['_videoClass'] = zgovij;
        }, sm9hqt['_onStageResize'] = function () {
            var sq91h = cgeoij['stage']['_canvasTransform']['identity']();
            sq91h['scale'](bzg6['width'] / b076['canvas']['width'] / n8p4ua['getPixelRatio'](), bzg6['height'] / b076['canvas']['height'] / n8p4ua['getPixelRatio']());
        }, sm9hqt['wxinputFocus'] = function (rcedy) {
            var cdrl3y = $dylr['inputElement']['target'];
            if (cdrl3y && !cdrl3y['editable']) return;
            jyrec['window']['wx']['offKeyboardConfirm'](), jyrec['window']['wx']['offKeyboardInput'](), jyrec['window']['wx']['showKeyboard']({
                'defaultValue': cdrl3y['text'],
                'maxLength': cdrl3y['maxChars'],
                'multiple': cdrl3y['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (t1xh9) {},
                'fail': function (wqt8sm) {}
            }), jyrec['window']['wx']['onKeyboardConfirm'](function (ldry3$) {
                var tmsh = ldry3$ ? ldry3$['value'] : '';
                cdrl3y['text'] = tmsh, cdrl3y['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), jyrec['window']['wx']['onKeyboardInput'](function (r3_dl$) {
                var nwa4p = r3_dl$ ? r3_dl$['value'] : '';
                if (!cdrl3y['multiline']) {
                    if (nwa4p['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                cdrl3y['text'] = nwa4p, cdrl3y['event']('input');
            });
        }, sm9hqt['inputEnter'] = function () {
            $dylr['inputElement']['target']['focus'] = ![];
        }, sm9hqt['wxinputblur'] = function () {
            sm9hqt['hideKeyboard']();
        }, sm9hqt['hideKeyboard'] = function () {
            jyrec['window']['wx']['offKeyboardConfirm'](), jyrec['window']['wx']['offKeyboardInput'](), jyrec['window']['wx']['hideKeyboard']({
                'success': function (qm8swp) {
                    console['log']('隐藏键盘');
                },
                'fail': function (vzogji) {
                    console['log']('隐藏键盘出错:' + (vzogji ? vzogji['errMsg'] : ''));
                }
            });
        }, sm9hqt;
    }(),
        ylrd = function () {
        function qhtm9() {}
        x01hf9(qhtm9, 'laya.wx.mini.MiniLoader');
        var r3dce = qhtm9['prototype'];
        return r3dce['load'] = function (f9t1h, jovige, d_3l, cdreoy, f95x) {
            d_3l === void 0x0 && (d_3l = !![]), f95x === void 0x0 && (f95x = ![]);
            var c3yedr = this;
            c3yedr['_url'] = f9t1h;
            if (f9t1h['indexOf']('data:image') === 0x0) c3yedr['_type'] = jovige = 'image';else c3yedr['_type'] = jovige || (jovige = c3yedr['getTypeFromUrl'](f9t1h));
            c3yedr['_cache'] = d_3l, c3yedr['_data'] = null;
            var qw8ps = 'ascii';
            if (f9t1h['indexOf']('.fnt') != -0x1) qw8ps = 'utf8';else jovige == 'arraybuffer' && (qw8ps = '');
            ;
            var decory = zi7g['getFileExtension'](f9t1h);
            if (qhtm9['_fileTypeArr']['indexOf'](decory) != -0x1) jyrec['EnvConfig']['load']['call'](this, f9t1h, jovige, d_3l, cdreoy, f95x);else {
                if (!c3dyr['getFileInfo'](f9t1h)) {
                    if (f9t1h['indexOf']('layaNativeDir/') != -0x1) {
                        if (jyrec['isZiYu']) {
                            var eoigvj = c3dyr['ziyuFileData'][f9t1h];
                            c3yedr['onLoaded'](eoigvj);
                            return;
                        } else {
                            cosnole['log']('read read'), c3dyr['read'](f9t1h, qw8ps, new rcldy3(qhtm9, qhtm9['onReadNativeCallBack'], [qw8ps, f9t1h, jovige, d_3l, cdreoy, f95x, c3yedr]));
                            return;
                        }
                    }
                    if (x52f01['rootPath'] == '') var cdroe = f9t1h;else cdroe = f9t1h['split'](x52f01['rootPath'])[0x0];
                    f9t1h['indexOf']('http://') != -0x1 || f9t1h['indexOf']('https://') != -0x1 ? jyrec['EnvConfig']['load']['call'](c3yedr, f9t1h, jovige, d_3l, cdreoy, f95x) : c3dyr['readFile'](cdroe, qw8ps, new rcldy3(qhtm9, qhtm9['onReadNativeCallBack'], [qw8ps, f9t1h, jovige, d_3l, cdreoy, f95x, c3yedr]), f9t1h);
                } else jyrec['EnvConfig']['load']['call'](this, f9t1h, jovige, d_3l, cdreoy, f95x);
            }
        }, r3dce['resMgrLoad'] = function (iycoe, ht9fx, mthsw, rjyoec, rlyd3$, eyorj, vjzgi) {
            mthsw === void 0x0 && (mthsw = 0x0), rjyoec === void 0x0 && (rjyoec = ![]), rlyd3$ === void 0x0 && (rlyd3$ = ![]), eyorj === void 0x0 && (eyorj = 0x0), vjzgi === void 0x0 && (vjzgi = 0x3), iycoe['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', iycoe), jyrec['EnvConfig']['resMgrLoad'](iycoe, (xf0591, coyre, qmsp) => {
                qhtm9['prototype']['resMgrLoadCallBack'](xf0591, coyre, qmsp, ht9fx);
            }, mthsw, rjyoec, rlyd3$, eyorj, vjzgi);
        }, r3dce['resMgrLoadCallBack'] = function (hx9f0, f201x, nwa48p, rl3cyd) {
            console['log']('buff:::', hx9f0, nwa48p, c3dyr['fileNativeDir'] + '///' + c3dyr['fileListName']), rl3cyd(hx9f0, f201x, nwa48p);
        }, r3dce['clearRes'] = function (vz7jig, rdy3l) {
            rdy3l === void 0x0 && (rdy3l = ![]);
            var b6z7gv = this;
            b6z7gv['clearRes'](vz7jig, rdy3l);
            var cdre = c3dyr['getFileInfo'](vz7jig);
            if (cdre && (vz7jig['indexOf']('http://') != -0x1 || vz7jig['indexOf']('https://') != -0x1)) {
                var dry3ec = cdre['md5'],
                    xf1h0 = c3dyr['getFileNativePath'](dry3ec);
                c3dyr['remove'](xf1h0);
            }
        }, qhtm9['onReadNativeCallBack'] = function (f2x5, d3er, n8ua, $yrd3l, gojzvi, geoc, t9s1hx, mqwp4, eciojy) {
            $yrd3l === void 0x0 && ($yrd3l = !![]), geoc === void 0x0 && (geoc = ![]), mqwp4 === void 0x0 && (mqwp4 = 0x0);
            if (!mqwp4) {
                var p4wq8m;
                if (n8ua == 'json' || n8ua == 'atlas') p4wq8m = jyrec['getJson'](eciojy['data']);else n8ua == 'xml' ? p4wq8m = zi7g['parseXMLFromString'](eciojy['data']) : p4wq8m = eciojy['data'];
                t9s1hx['onLoaded'](p4wq8m), !jyrec['isZiYu'] && jyrec['isPosMsgYu'] && n8ua != 'arraybuffer' && wx['postMessage']({
                    'url': d3er,
                    'data': p4wq8m,
                    'isLoad': !![]
                });
            } else mqwp4 == 0x1 && jyrec['EnvConfig']['load']['call'](t9s1hx, d3er, n8ua, $yrd3l, gojzvi, geoc);
        }, am4(qhtm9, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), qhtm9;
    }(),
        c3dyr = function (iceog) {
        function redyoc() {
            redyoc['__super']['call'](this);
            ;
        }
        return x01hf9(redyoc, 'laya.wx.mini.MiniFileMgr', iceog), redyoc['isLoadFile'] = function (apwn8) {
            return redyoc['_fileTypeArr']['indexOf'](apwn8) != -0x1 ? !![] : ![];
        }, redyoc['getFileInfo'] = function (vbg67) {
            var t9 = vbg67['split']('?')[0x0],
                st19hx = redyoc['filesListObj'][t9];
            if (st19hx == null) return null;else return st19hx;
            return null;
        }, redyoc['onFileUpdate'] = function (yiec, zovg) {
            var b6f502 = yiec['split']('/'),
                pkn4au = b6f502[b6f502['length'] - 0x1],
                coryd = redyoc['getFileInfo'](zovg);
            if (coryd == null) redyoc['onSaveFile'](zovg, pkn4au);else {
                if (coryd['readyUrl'] != zovg) redyoc['remove'](pkn4au, zovg);
            }
        }, redyoc['exits'] = function (ydcro, sht9qm) {
            var f056b = redyoc['getFileNativePath'](ydcro);
            redyoc['fs']['getFileInfo']({
                'filePath': f056b,
                'success': function (sq8wtm) {
                    sht9qm != null && sht9qm['runWith']([0x0, sq8wtm]);
                },
                'fail': function (qhsmt9) {
                    sht9qm != null && sht9qm['runWith']([0x1, qhsmt9]);
                }
            });
        }, redyoc['read'] = function (wsmqh, l3$_rd, a8m4w, whqts) {
            l3$_rd === void 0x0 && (l3$_rd = 'ascill'), whqts === void 0x0 && (whqts = '');
            var bvg67;
            whqts != '' ? bvg67 = redyoc['getFileNativePath'](wsmqh) : bvg67 = wsmqh, redyoc['fs']['readFile']({
                'filePath': bvg67,
                'encoding': l3$_rd,
                'success': function (hqsm9) {
                    a8m4w != null && a8m4w['runWith']([0x0, hqsm9]);
                },
                'fail': function (igvej) {
                    if (igvej && whqts != '') redyoc['down'](whqts, l3$_rd, a8m4w, whqts);else a8m4w != null && a8m4w['runWith']([0x1]);
                }
            });
        }, redyoc['readNativeFile'] = function (st1q, sm8t) {
            redyoc['fs']['readFile']({
                'filePath': st1q,
                'encoding': '',
                'success': function (vgzij) {
                    sm8t != null && sm8t['runWith']([0x0]);
                },
                'fail': function (f2x150) {
                    sm8t != null && sm8t['runWith']([0x1]);
                }
            });
        }, redyoc['down'] = function (ma8, qt9hsm, mpqw8, n4kua) {
            qt9hsm === void 0x0 && (qt9hsm = 'ascill'), n4kua === void 0x0 && (n4kua = '');
            var qm9hts = redyoc['getFileNativePath'](n4kua),
                vzogj = redyoc['wxdown']({
                'url': ma8,
                'filePath': qm9hts,
                'success': function (b6f250) {
                    if (b6f250['statusCode'] === 0xc8) redyoc['readFile'](b6f250['filePath'], qt9hsm, mpqw8, n4kua);
                },
                'fail': function (l$_d3) {
                    mpqw8 != null && mpqw8['runWith']([0x1, l$_d3]);
                }
            });
            vzogj['onProgressUpdate'](function (x519f0) {
                mpqw8 != null && mpqw8['runWith']([0x2, x519f0['progress']]);
            });
        }, redyoc['readFile'] = function (htqs9m, jveoi, sq8tm, cydre) {
            jveoi === void 0x0 && (jveoi = 'ascill'), cydre === void 0x0 && (cydre = ''), redyoc['fs']['readFile']({
                'filePath': htqs9m,
                'encoding': jveoi,
                'success': function (ejcgoi) {
                    if (htqs9m['indexOf']('http://') != -0x1 || htqs9m['indexOf']('https://') != -0x1) redyoc['onFileUpdate'](htqs9m, cydre);
                    sq8tm != null && sq8tm['runWith']([0x0, ejcgoi]);
                },
                'fail': function (wm4pa8) {
                    if (wm4pa8) sq8tm != null && sq8tm['runWith']([0x1, wm4pa8]);
                }
            });
        }, redyoc['downImg'] = function (thsx1, qhswtm, fx9t1) {
            fx9t1 === void 0x0 && (fx9t1 = '');
            var jyorc = redyoc['wxdown']({
                'url': thsx1,
                'success': function (ejg) {
                    ejg['statusCode'] === 0xc8 && redyoc['copyFile'](ejg['tempFilePath'], fx9t1, qhswtm);
                },
                'fail': function (nw4a) {
                    qhswtm != null && qhswtm['runWith']([0x1, nw4a]);
                }
            });
        }, redyoc['copyFile'] = function (qwpm, f052x, x502) {
            var nk4ua = qwpm['split']('/'),
                p4wa8n = nk4ua[nk4ua['length'] - 0x1],
                oivej = f052x['split']('?')[0x0],
                ycjio = redyoc['getFileInfo'](f052x),
                vzjg7 = redyoc['getFileNativePath'](p4wa8n);
            redyoc['fs']['copyFile']({
                'srcPath': qwpm,
                'destPath': vzjg7,
                'success': function (tqwm8s) {
                    if (!ycjio) redyoc['onSaveFile'](f052x, p4wa8n), x502 != null && x502['runWith']([0x0]);else {
                        if (ycjio['readyUrl'] != f052x) redyoc['remove'](p4wa8n, f052x, x502);
                    }
                },
                'fail': function (orcdye) {
                    x502 != null && x502['runWith']([0x1, orcdye]);
                }
            });
        }, redyoc['getFileNativePath'] = function (xf1502) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xf1502;
        }, redyoc['remove'] = function (joycei, p84qmw, ordcye) {
            p84qmw === void 0x0 && (p84qmw = '');
            var eijgo = redyoc['getFileInfo'](p84qmw),
                oivzj = redyoc['getFileNativePath'](eijgo['md5']);
            cgeoij['loader']['clearRes'](eijgo['readyUrl']), redyoc['fs']['unlink']({
                'filePath': oivzj,
                'success': function (igeojv) {
                    if (p84qmw != '') redyoc['onSaveFile'](p84qmw, joycei);
                    ordcye != null && ordcye['runWith']([0x0]);
                },
                'fail': function (v7b26z) {}
            });
        }, redyoc['onSaveFile'] = function (lcy3d, h9txs1) {
            var l3drcy = lcy3d['split']('?')[0x0];
            redyoc['filesListObj'][l3drcy] = {
                'md5': h9txs1,
                'readyUrl': lcy3d
            }, redyoc['fs']['writeFile']({
                'filePath': redyoc['fileNativeDir'] + '/' + redyoc['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](redyoc['filesListObj']),
                'success': function (x91sht) {
                    console['log']('写入测试测试成功：', x91sht);
                },
                'fail': function (sqhmwt) {
                    console['log']('写入测试测试失败：', sqhmwt);
                }
            });
        }, redyoc['existDir'] = function (b57026, hfx10) {
            redyoc['fs']['mkdir']({
                'dirPath': b57026,
                'success': function (gvb7zi) {
                    hfx10 != null && hfx10['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (d$r_3) {
                    if (d$r_3['errMsg']['indexOf']('file already exists') != -0x1) redyoc['readSync'](redyoc['fileListName'], 'utf8', hfx10);else hfx10 != null && hfx10['runWith']([0x1, d$r_3]);
                }
            });
        }, redyoc['readSync'] = function (ojgei, e3rc, pku, l3$dr) {
            e3rc === void 0x0 && (e3rc = 'ascill'), l3$dr === void 0x0 && (l3$dr = '');
            var pauk4 = redyoc['getFileNativePath'](ojgei),
                xtf1h9;
            try {
                xtf1h9 = redyoc['fs']['readFileSync'](pauk4), pku != null && pku['runWith']([0x0, { 'data': xtf1h9 }]);
            } catch ($dy3lr) {
                pku != null && pku['runWith']([0x1]);
            }
        }, redyoc['readCache'] = function () {}, redyoc['writeCache'] = function (ig7zv) {
            var m4qp = readyUrl['split']('?')[0x0];
            redyoc['filesListObj'][m4qp] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, redyoc['fs']['writeFile']({
                'filePath': redyoc['fileNativeDir'] + '/' + redyoc['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](redyoc['filesListObj']),
                'success': function (yecdr3) {},
                'fail': function (dryeo) {}
            });
        }, redyoc['setNativeFileDir'] = function (n8wap) {
            redyoc['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + n8wap;
        }, redyoc['filesListObj'] = {}, redyoc['fileNativeDir'] = null, redyoc['fileListName'] = 'layaairfiles.txt', redyoc['ziyuFileData'] = {}, am4(redyoc, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), redyoc;
    }(tqw),
        mtqw = function (xf2650) {
        function _l$d3r() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], _l$d3r['__super']['call'](this), this['_sound'] = _l$d3r['_createSound'](), this['_chanell'] = new ij7zvg(this['_sound']);
        }
        x01hf9(_l$d3r, 'laya.wx.mini.MiniSound', xf2650);
        var f20x5 = _l$d3r['prototype'];
        return f20x5['load'] = function (yiejc) {
            var icejyo = this;
            yiejc = x52f01['formatURL'](yiejc), this['url'] = yiejc;
            if (_l$d3r['_audioCache'][yiejc]) {
                this['event']('complete');
                return;
            }
            function fx26() {
                if (_l$d3r['_null'] != undefined) icejyo['_sound']['onCanplay'](_l$d3r['_null']), icejyo['_sound']['onError'](_l$d3r['_null']);else try {
                    icejyo['_sound']['onCanplay'](null), icejyo['_sound']['onError'](null), _l$d3r['_null'] = null;
                } catch (gvj7) {
                    console['warn']('[wxmini] _clearSound:' + gvj7), icejyo['_sound']['onCanplay'](rl3d_), icejyo['_sound']['onError'](rl3d_), _l$d3r['_null'] = rl3d_;
                }
            }
            function egjio() {
                an8up4['loaded'] = !![], an8up4['event']('complete'), _l$d3r['_audioCache'][an8up4['url']] = an8up4;
            }
            function h1f9x(zijov) {
                console['error']('errCode=' + zijov['errCode'] + '  errMsg=' + zijov['errMsg']), an8up4['event']('error');
            }
            function rl3d_() {}
            this['_sound']['onCanplay'](egjio), this['_sound']['onError'](h1f9x), this['_sound']['src'] = yiejc;
            var an8up4 = this;
        }, f20x5['play'] = function (bv7zig, q91s) {
            bv7zig === void 0x0 && (bv7zig = 0x0), q91s === void 0x0 && (q91s = 0x0);
            var r_l3d$, tx1h9f;
            if (this['url'] == hx1s9t['_tMusic']) {
                if (!_l$d3r['_musicAudio']) _l$d3r['_musicAudio'] = this['_sound'];
                r_l3d$ = _l$d3r['_musicAudio'], tx1h9f = this['_chanell'];
            } else r_l3d$ = this['_sound'], tx1h9f = this['_chanell'];
            return r_l3d$['src'] = this['url'], r_l3d$['startTime'] = 0x0, tx1h9f['isStopped'] && (tx1h9f['url'] = this['url'], tx1h9f['loops'] = q91s, tx1h9f['startTime'] = bv7zig, tx1h9f['play'](), hx1s9t['addChannel'](tx1h9f)), tx1h9f;
        }, f20x5['dispose'] = function () {
            var fb602 = _l$d3r['_audioCache'][this['url']];
            fb602 && (fb602['src'] = '', delete _l$d3r['_audioCache'][this['url']]);
        }, v7gz(0x0, f20x5, 'duration', function () {
            return this['_sound']['duration'];
        }), _l$d3r['_createSound'] = function () {
            _l$d3r['_id']++;
            var erocdy = jyrec['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return erocdy;
        }, _l$d3r['_musicAudio'] = null, _l$d3r['_id'] = 0x0, _l$d3r['_audioCache'] = {}, _l$d3r['_null'] = undefined, _l$d3r;
    }(tqw),
        ij7zvg = function (t9f1x) {
        function gvizb7(unk) {
            this['_audio'] = null, this['_onEnd'] = null, gvizb7['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = unk, this['_onEnd'] = zi7g['bind'](this['__onEnd'], this), unk['onEnded'](this['_onEnd']);
        }
        x01hf9(gvizb7, 'laya.wx.mini.MiniSoundChannel', t9f1x);
        var igvbz = gvizb7['prototype'];
        return igvbz['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (cgeoij['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, igvbz['__onNull'] = function () {}, igvbz['play'] = function () {
            this['isStopped'] = ![], hx1s9t['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, igvbz['stop'] = function () {
            this['isStopped'] = !![], hx1s9t['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, igvbz['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, igvbz['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], hx1s9t['addChannel'](this), this['_audio']['play']();
        }, v7gz(0x0, igvbz, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), v7gz(0x0, igvbz, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), v7gz(0x0, igvbz, 'volume', function () {
            return 0x1;
        }, function (yldc3) {}), gvizb7['_null'] = undefined, gvizb7;
    }(ts9qmh),
        zgovij = function () {
        function oiycj() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = jyrec['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        x01hf9(oiycj, 'laya.wx.mini.MiniVideo');
        var hm9stq = oiycj['prototype'];
        return hm9stq['on'] = function (na4u8p, ld$3_r, p8a4u) {
            if (na4u8p == 'loadedmetadata') this['onPlayFunc'] = p8a4u['bind'](ld$3_r), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else na4u8p == 'ended' && (this['onEndedFunC'] = p8a4u['bind'](ld$3_r), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, hm9stq['onTimeUpdateFunc'] = function (f062x) {
            this['position'] = f062x['position'], this['_duration'] = f062x['duration'];
        }, hm9stq['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, hm9stq['onended'] = function (oyci, cjoei) {
            this['onEndedFunC'] = cjoei['bind'](oyci), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, hm9stq['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, hm9stq['off'] = function (vzgb7, l$dyr3, mpqws) {
            if (vzgb7 == 'loadedmetadata') this['onPlayFunc'] = mpqws['bind'](l$dyr3), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else vzgb7 == 'ended' && (this['onEndedFunC'] = mpqws['bind'](l$dyr3), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, hm9stq['load'] = function (n8up4) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = n8up4;
        }, hm9stq['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, hm9stq['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, hm9stq['size'] = function (lc3rdy, f1x5) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = lc3rdy, this['videoElement']['height'] = f1x5;
        }, hm9stq['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, hm9stq['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, v7gz(0x0, hm9stq, 'duration', function () {
            return this['_duration'];
        }), v7gz(0x0, hm9stq, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (hqwstm) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = hqwstm;
        }), v7gz(0x0, hm9stq, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), v7gz(0x0, hm9stq, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), v7gz(0x0, hm9stq, 'ended', function () {
            return this['videoend'];
        }), v7gz(0x0, hm9stq, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (ecjoiy) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = ecjoiy;
        }), v7gz(0x0, hm9stq, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (jv7g) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = jv7g;
        }), v7gz(0x0, hm9stq, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (_d$3r) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = _d$3r;
        }), v7gz(0x0, hm9stq, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), v7gz(0x0, hm9stq, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (k4p) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = k4p;
        }), v7gz(0x0, hm9stq, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (v7zgb6) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = v7zgb6;
        }), v7gz(0x0, hm9stq, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), v7gz(0x0, hm9stq, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (awm4p) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = awm4p;
        }), v7gz(0x0, hm9stq, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (ycro) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = ycro;
        }), v7gz(0x0, hm9stq, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (nwa4) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = nwa4;
        }), oiycj;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var j7zigv in Laya) {
        var w8pm4a = Laya[j7zigv];
        w8pm4a && w8pm4a['__isclass'] && (exports[j7zigv] = w8pm4a);
    }
});