var b = wx.$e;
(function (window, document, qjin3) {
    var u6ksn = qjin3['un'],
        gh$xtl = qjin3['uns'],
        vfyh = qjin3['static'],
        vhzry = qjin3['class'],
        yrvzfh = qjin3['getset'],
        quji3 = qjin3['__newvec'],
        zfryv4 = laya['utils']['Browser'],
        f4v_7a = laya['events']['Event'],
        jgti$ = laya['events']['EventDispatcher'],
        zyhlt = laya['resource']['HTMLImage'],
        caeom = laya['utils']['Handler'],
        unsqk = laya['display']['Input'],
        u3njiq = laya['net']['Loader'],
        txjg$ = laya['maths']['Matrix'],
        _7aoc = laya['renders']['Render'],
        k9qu = laya['utils']['RunDriver'],
        qus3 = laya['media']['Sound'],
        q3uinj = laya['media']['SoundChannel'],
        db0k5 = laya['media']['SoundManager'],
        uns9kq = laya['display']['Stage'],
        ju3n = laya['net']['URL'],
        fyrvz = laya['utils']['Utils'],
        rfz4yv = function () {
        function yv4fz_() {}
        return vhzry(yv4fz_, 'laya.wx.mini.MiniAdpter'), yv4fz_['getJson'] = function (q9ksnu) {
            return JSON['parse'](q9ksnu);
        }, yv4fz_['init'] = function (yfv_4z, mva_7) {
            yfv_4z === void 0x0 && (yfv_4z = ![]), mva_7 === void 0x0 && (mva_7 = ![]);
            if (yv4fz_['_inited']) return;
            yv4fz_['window'] = window;
            if (yv4fz_['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            yv4fz_['_inited'] = !![], yv4fz_['isZiYu'] = mva_7, yv4fz_['isPosMsgYu'] = yfv_4z, yv4fz_['EnvConfig'] = {}, !yv4fz_['isZiYu'] && (qui3jn['setNativeFileDir']('/layaairGame'), qui3jn['existDir'](qui3jn['fileNativeDir'], caeom['create'](yv4fz_, yv4fz_['onMkdirCallBack']))), yv4fz_['window']['focus'] = function () {}, qjin3['getUrlPath'] = function () {}, yv4fz_['window']['logtime'] = function (hvfzyr) {}, yv4fz_['window']['alertTimeLog'] = function (maoc7p) {}, yv4fz_['window']['resetShareInfo'] = function () {}, yv4fz_['window']['CanvasRenderingContext2D'] = function () {}, yv4fz_['window']['CanvasRenderingContext2D']['prototype'] = yv4fz_['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yv4fz_['window']['document']['body']['appendChild'] = function () {}, yv4fz_['EnvConfig']['pixelRatioInt'] = 0x0, k9qu['getPixelRatio'] = yv4fz_['pixelRatio'], yv4fz_['_preCreateElement'] = zfryv4['createElement'], zfryv4['createElement'] = yv4fz_['createElement'], k9qu['createShaderCondition'] = yv4fz_['createShaderCondition'], fyrvz['parseXMLFromString'] = yv4fz_['parseXMLFromString'], unsqk['_createInputElement'] = u9n6ks['_createInputElement'], yv4fz_['EnvConfig']['load'] = u3njiq['prototype']['load'], u3njiq['prototype']['load'] = qnjiu['prototype']['load'], yv4fz_['isZiYu'] && yfv_4z && wx['onMessage'](function (nsk9qu) {
                nsk9qu['isLoad'] && (qui3jn['ziyuFileData'][nsk9qu['url']] = nsk9qu['data']);
            });
        }, yv4fz_['onMkdirCallBack'] = function (nsku9, fhrzy) {
            if (!nsku9) qui3jn['filesListObj'] = JSON['parse'](fhrzy['data']);
        }, yv4fz_['pixelRatio'] = function () {
            if (!yv4fz_['EnvConfig']['pixelRatioInt']) try {
                var ixjtg = wx['getSystemInfoSync']();
                return yv4fz_['EnvConfig']['pixelRatioInt'] = ixjtg['pixelRatio'], ixjtg = ixjtg, ixjtg['pixelRatio'];
            } catch (v4z_f) {}
            return yv4fz_['EnvConfig']['pixelRatioInt'];
        }, yv4fz_['createElement'] = function (ca74_) {
            if (ca74_ == 'canvas') {
                var q3i$jx;
                return yv4fz_['idx'] == 0x1 ? yv4fz_['isZiYu'] ? (q3i$jx = sharedCanvas, q3i$jx['style'] = {}) : q3i$jx = window['canvas'] : q3i$jx = window['wx']['createCanvas'](), yv4fz_['idx']++, q3i$jx;
            } else {
                if (ca74_ == 'textarea' || ca74_ == 'input') return yv4fz_['onCreateInput'](ca74_);else {
                    if (ca74_ == 'div') {
                        var ompce = yv4fz_['_preCreateElement'](ca74_);
                        return ompce['contains'] = function (c7ap) {
                            return null;
                        }, ompce['removeChild'] = function (yvzfhr) {}, ompce;
                    } else return yv4fz_['_preCreateElement'](ca74_);
                }
            }
        }, yv4fz_['onCreateInput'] = function (bk6) {
            var qj$3ix = yv4fz_['_preCreateElement'](bk6);
            return qj$3ix['focus'] = u9n6ks['wxinputFocus'], qj$3ix['blur'] = u9n6ks['wxinputblur'], qj$3ix['style'] = {}, qj$3ix['value'] = 0x0, qj$3ix['parentElement'] = {}, qj$3ix['placeholder'] = {}, qj$3ix['type'] = {}, qj$3ix['setColor'] = function (mo7a_c) {}, qj$3ix['setType'] = function (frlyzh) {}, qj$3ix['setFontFace'] = function (oepmc) {}, qj$3ix['addEventListener'] = function (qn9sku) {}, qj$3ix['contains'] = function (kqnus9) {
                return null;
            }, qj$3ix['removeChild'] = function (gzlrt) {}, qj$3ix;
        }, yv4fz_['createShaderCondition'] = function (usk9b) {
            var f4vzr = this,
                su6kb9 = function () {
                var k5b6 = usk9b;
                return f4vzr[usk9b['replace']('this.', '')];
            };
            return su6kb9;
        }, yv4fz_['EnvConfig'] = null, yv4fz_['window'] = null, yv4fz_['_preCreateElement'] = null, yv4fz_['_inited'] = ![], yv4fz_['wxRequest'] = null, yv4fz_['systemInfo'] = null, yv4fz_['version'] = '0.0.1', yv4fz_['isZiYu'] = ![], yv4fz_['isPosMsgYu'] = ![], yv4fz_['parseXMLFromString'] = function (yzthr) {
            var _7v4am, n3us9q;
            yzthr = yzthr['replace'](/>\s+</g, '><');
            try {
                _7v4am = new window['Parser']['DOMParser']()['parseFromString'](yzthr, 'text/xml');
            } catch (nj3qi$) {
                throw '需要引入xml解析库文件';
            }
            return _7v4am;
        }, yv4fz_['idx'] = 0x1, yv4fz_;
    }(),
        xl$gti = function () {
        function qujsn3() {}
        vhzry(qujsn3, 'laya.wx.mini.MiniImage');
        var itj$x = qujsn3['prototype'];
        return itj$x['_loadImage'] = function (knsq) {
            var yhflr = this,
                hfzv = ![];
            knsq['indexOf']('layaNativeDir/') == -0x1 && (hfzv = !![], knsq = ju3n['formatURL'](knsq));
            if (!qui3jn['getFileInfo'](knsq)) {
                if (knsq['indexOf']('http://') != -0x1 || knsq['indexOf']('https://') != -0x1) qui3jn['downImg'](knsq, new caeom(qujsn3, qujsn3['onDownImgCallBack'], [knsq, yhflr]), knsq);else qujsn3['onCreateImage'](knsq, yhflr, !![]);
            } else qujsn3['onCreateImage'](knsq, yhflr, !hfzv);
        }, qujsn3['onDownImgCallBack'] = function (tlzyhr, d50w2, ryzhv) {
            if (!ryzhv) qujsn3['onCreateImage'](tlzyhr, d50w2);else d50w2['onError'](null);
        }, qujsn3['onCreateImage'] = function (dkb096, mecp, uns6k) {
            uns6k === void 0x0 && (uns6k = ![]);
            var coma7;
            if (!uns6k) {
                var hgtlxr = qui3jn['getFileInfo'](dkb096),
                    tgx$ji = hgtlxr['md5'];
                coma7 = qui3jn['getFileNativePath'](tgx$ji);
            } else coma7 = dkb096;
            if (mecp['imgCache'] == null) mecp['imgCache'] = {};
            var nqusj3;
            function fyrv() {
                nqusj3['onload'] = null, nqusj3['onerror'] = null, delete mecp['imgCache'][dkb096];
            }
            ;
            var snqk = function () {
                fyrv(), mecp['onLoaded'](nqusj3);
            },
                b86 = function () {
                fyrv(), mecp['event']('error', 'Load image failed');
            };
            mecp['_type'] == 'nativeimage' ? (nqusj3 = new zfryv4['window']['Image'](), nqusj3['crossOrigin'] = '', nqusj3['onload'] = snqk, nqusj3['onerror'] = b86, nqusj3['src'] = coma7, mecp['imgCache'][dkb096] = nqusj3) : new zyhlt['create'](coma7, {
                'onload': snqk,
                'onerror': b86,
                'onCreate': function (tlghx$) {
                    nqusj3 = tlghx$, mecp['imgCache'][dkb096] = tlghx$;
                }
            });
        }, qujsn3;
    }(),
        u9n6ks = function () {
        function bsuk6() {}
        return vhzry(bsuk6, 'laya.wx.mini.MiniInput'), bsuk6['_createInputElement'] = function () {
            unsqk['_initInput'](unsqk['area'] = zfryv4['createElement']('textarea')), unsqk['_initInput'](unsqk['input'] = zfryv4['createElement']('input')), unsqk['inputContainer'] = zfryv4['createElement']('div'), unsqk['inputContainer']['style']['position'] = 'absolute', unsqk['inputContainer']['style']['zIndex'] = 0x186a0, zfryv4['container']['appendChild'](unsqk['inputContainer']), unsqk['inputContainer']['setPos'] = function ($lgi, _m7aoc) {
                unsqk['inputContainer']['style']['left'] = $lgi + 'px', unsqk['inputContainer']['style']['top'] = _m7aoc + 'px';
            }, qjin3['stage']['on']('resize', null, bsuk6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (sqju) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), db0k5['_soundClass'] = v7f4_y, db0k5['_musicClass'] = v7f4_y, window['_videoClass'] = g$tjx;
        }, bsuk6['_onStageResize'] = function () {
            var w5820d = qjin3['stage']['_canvasTransform']['identity']();
            w5820d['scale'](zfryv4['width'] / _7aoc['canvas']['width'] / k9qu['getPixelRatio'](), zfryv4['height'] / _7aoc['canvas']['height'] / k9qu['getPixelRatio']());
        }, bsuk6['wxinputFocus'] = function (tj$xgi) {
            var uqns3 = unsqk['inputElement']['target'];
            if (uqns3 && !uqns3['editable']) return;
            rfz4yv['window']['wx']['offKeyboardConfirm'](), rfz4yv['window']['wx']['offKeyboardInput'](), rfz4yv['window']['wx']['showKeyboard']({
                'defaultValue': uqns3['text'],
                'maxLength': uqns3['maxChars'],
                'multiple': uqns3['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (xjg$) {},
                'fail': function (gxit) {}
            }), rfz4yv['window']['wx']['onKeyboardConfirm'](function (zhtrgl) {
                var s9b60k = zhtrgl ? zhtrgl['value'] : '';
                uqns3['text'] = s9b60k, uqns3['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), rfz4yv['window']['wx']['onKeyboardInput'](function (hfyrvz) {
                var b506d = hfyrvz ? hfyrvz['value'] : '';
                if (!uqns3['multiline']) {
                    if (b506d['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                uqns3['text'] = b506d, uqns3['event']('input');
            });
        }, bsuk6['inputEnter'] = function () {
            unsqk['inputElement']['target']['focus'] = ![];
        }, bsuk6['wxinputblur'] = function () {
            bsuk6['hideKeyboard']();
        }, bsuk6['hideKeyboard'] = function () {
            rfz4yv['window']['wx']['offKeyboardConfirm'](), rfz4yv['window']['wx']['offKeyboardInput'](), rfz4yv['window']['wx']['hideKeyboard']({
                'success': function (b09kd6) {
                    console['log']('隐藏键盘');
                },
                'fail': function ($jxig) {
                    console['log']('隐藏键盘出错:' + ($jxig ? $jxig['errMsg'] : ''));
                }
            });
        }, bsuk6;
    }(),
        qnjiu = function () {
        function tg$ilx() {}
        vhzry(tg$ilx, 'laya.wx.mini.MiniLoader');
        var j$gitx = tg$ilx['prototype'];
        return j$gitx['load'] = function (zrhgtl, pcma7o, gtijx, vy_fz, tyh) {
            gtijx === void 0x0 && (gtijx = !![]), tyh === void 0x0 && (tyh = ![]);
            var hrly = this;
            hrly['_url'] = zrhgtl;
            if (zrhgtl['indexOf']('data:image') === 0x0) hrly['_type'] = pcma7o = 'image';else hrly['_type'] = pcma7o || (pcma7o = hrly['getTypeFromUrl'](zrhgtl));
            hrly['_cache'] = gtijx, hrly['_data'] = null;
            var bs0k = 'ascii';
            if (zrhgtl['indexOf']('.fnt') != -0x1) bs0k = 'utf8';else pcma7o == 'arraybuffer' && (bs0k = '');
            ;
            var d8502w = fyrvz['getFileExtension'](zrhgtl);
            if (tg$ilx['_fileTypeArr']['indexOf'](d8502w) != -0x1) rfz4yv['EnvConfig']['load']['call'](this, zrhgtl, pcma7o, gtijx, vy_fz, tyh);else {
                if (!qui3jn['getFileInfo'](zrhgtl)) {
                    if (zrhgtl['indexOf']('layaNativeDir/') != -0x1) {
                        if (rfz4yv['isZiYu']) {
                            var iju3q = qui3jn['ziyuFileData'][zrhgtl];
                            hrly['onLoaded'](iju3q);
                            return;
                        } else {
                            cosnole['log']('read read'), qui3jn['read'](zrhgtl, bs0k, new caeom(tg$ilx, tg$ilx['onReadNativeCallBack'], [bs0k, zrhgtl, pcma7o, gtijx, vy_fz, tyh, hrly]));
                            return;
                        }
                    }
                    if (ju3n['rootPath'] == '') var x$ij3g = zrhgtl;else x$ij3g = zrhgtl['split'](ju3n['rootPath'])[0x0];
                    zrhgtl['indexOf']('http://') != -0x1 || zrhgtl['indexOf']('https://') != -0x1 ? rfz4yv['EnvConfig']['load']['call'](hrly, zrhgtl, pcma7o, gtijx, vy_fz, tyh) : qui3jn['readFile'](x$ij3g, bs0k, new caeom(tg$ilx, tg$ilx['onReadNativeCallBack'], [bs0k, zrhgtl, pcma7o, gtijx, vy_fz, tyh, hrly]), zrhgtl);
                } else rfz4yv['EnvConfig']['load']['call'](this, zrhgtl, pcma7o, gtijx, vy_fz, tyh);
            }
        }, j$gitx['resMgrLoad'] = function (_7ac4m, ocma, rthxlg, u6n9ks, ryz4fv, $thlg, _f) {
            rthxlg === void 0x0 && (rthxlg = 0x0), u6n9ks === void 0x0 && (u6n9ks = ![]), ryz4fv === void 0x0 && (ryz4fv = ![]), $thlg === void 0x0 && ($thlg = 0x0), _f === void 0x0 && (_f = 0x3), _7ac4m['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _7ac4m), rfz4yv['EnvConfig']['resMgrLoad'](_7ac4m, (jnu3i, sknq, inuj3) => {
                tg$ilx['prototype']['resMgrLoadCallBack'](jnu3i, sknq, inuj3, ocma);
            }, rthxlg, u6n9ks, ryz4fv, $thlg, _f);
        }, j$gitx['resMgrLoadCallBack'] = function (zvfhyr, cmoepa, f4av_, qi$3) {
            console['log']('buff:::', zvfhyr, f4av_, qui3jn['fileNativeDir'] + '///' + qui3jn['fileListName']), qi$3(zvfhyr, cmoepa, f4av_);
        }, j$gitx['clearRes'] = function (nus3q, xjti$g) {
            xjti$g === void 0x0 && (xjti$g = ![]);
            var vyhfr = this;
            vyhfr['clearRes'](nus3q, xjti$g);
            var c_a = qui3jn['getFileInfo'](nus3q);
            if (c_a && (nus3q['indexOf']('http://') != -0x1 || nus3q['indexOf']('https://') != -0x1)) {
                var z4_yvf = c_a['md5'],
                    kns9u6 = qui3jn['getFileNativePath'](z4_yvf);
                qui3jn['remove'](kns9u6);
            }
        }, tg$ilx['onReadNativeCallBack'] = function (k06, yhrvfz, o7ac_m, jgx3, om7apc, vfzry4, a_v47, bku9s, zgrlt) {
            jgx3 === void 0x0 && (jgx3 = !![]), vfzry4 === void 0x0 && (vfzry4 = ![]), bku9s === void 0x0 && (bku9s = 0x0);
            if (!bku9s) {
                var eao;
                if (o7ac_m == 'json' || o7ac_m == 'atlas') eao = rfz4yv['getJson'](zgrlt['data']);else o7ac_m == 'xml' ? eao = fyrvz['parseXMLFromString'](zgrlt['data']) : eao = zgrlt['data'];
                a_v47['onLoaded'](eao), !rfz4yv['isZiYu'] && rfz4yv['isPosMsgYu'] && o7ac_m != 'arraybuffer' && wx['postMessage']({
                    'url': yhrvfz,
                    'data': eao,
                    'isLoad': !![]
                });
            } else bku9s == 0x1 && rfz4yv['EnvConfig']['load']['call'](a_v47, yhrvfz, o7ac_m, jgx3, om7apc, vfzry4);
        }, vfyh(tg$ilx, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), tg$ilx;
    }(),
        qui3jn = function (w80d52) {
        function sk69u() {
            sk69u['__super']['call'](this);
            ;
        }
        return vhzry(sk69u, 'laya.wx.mini.MiniFileMgr', w80d52), sk69u['isLoadFile'] = function (rly) {
            return sk69u['_fileTypeArr']['indexOf'](rly) != -0x1 ? !![] : ![];
        }, sk69u['getFileInfo'] = function (hztglr) {
            var moac7 = hztglr['split']('?')[0x0],
                fz_4v = sk69u['filesListObj'][moac7];
            if (fz_4v == null) return null;else return fz_4v;
            return null;
        }, sk69u['onFileUpdate'] = function (ceap, b086d5) {
            var thxgr = ceap['split']('/'),
                xh$lt = thxgr[thxgr['length'] - 0x1],
                i$gx3j = sk69u['getFileInfo'](b086d5);
            if (i$gx3j == null) sk69u['onSaveFile'](b086d5, xh$lt);else {
                if (i$gx3j['readyUrl'] != b086d5) sk69u['remove'](xh$lt, b086d5);
            }
        }, sk69u['exits'] = function (rhfy, yvzf_) {
            var i$jtg = sk69u['getFileNativePath'](rhfy);
            sk69u['fs']['getFileInfo']({
                'filePath': i$jtg,
                'success': function (kusqn) {
                    yvzf_ != null && yvzf_['runWith']([0x0, kusqn]);
                },
                'fail': function (rzlyf) {
                    yvzf_ != null && yvzf_['runWith']([0x1, rzlyf]);
                }
            });
        }, sk69u['read'] = function (apo, u9ns6k, amco_, gixtj) {
            u9ns6k === void 0x0 && (u9ns6k = 'ascill'), gixtj === void 0x0 && (gixtj = '');
            var va7f;
            gixtj != '' ? va7f = sk69u['getFileNativePath'](apo) : va7f = apo, sk69u['fs']['readFile']({
                'filePath': va7f,
                'encoding': u9ns6k,
                'success': function (tlrz) {
                    amco_ != null && amco_['runWith']([0x0, tlrz]);
                },
                'fail': function (hfy) {
                    if (hfy && gixtj != '') sk69u['down'](gixtj, u9ns6k, amco_, gixtj);else amco_ != null && amco_['runWith']([0x1]);
                }
            });
        }, sk69u['readNativeFile'] = function (om_ca, _c7oma) {
            sk69u['fs']['readFile']({
                'filePath': om_ca,
                'encoding': '',
                'success': function (uq3sn9) {
                    _c7oma != null && _c7oma['runWith']([0x0]);
                },
                'fail': function (gil$tx) {
                    _c7oma != null && _c7oma['runWith']([0x1]);
                }
            });
        }, sk69u['down'] = function (ijgx$3, _7m4c, rzytlh, u9ns3) {
            _7m4c === void 0x0 && (_7m4c = 'ascill'), u9ns3 === void 0x0 && (u9ns3 = '');
            var xlit$g = sk69u['getFileNativePath'](u9ns3),
                nusq3 = sk69u['wxdown']({
                'url': ijgx$3,
                'filePath': xlit$g,
                'success': function (lrhf) {
                    if (lrhf['statusCode'] === 0xc8) sk69u['readFile'](lrhf['filePath'], _7m4c, rzytlh, u9ns3);
                },
                'fail': function (lrhzf) {
                    rzytlh != null && rzytlh['runWith']([0x1, lrhzf]);
                }
            });
            nusq3['onProgressUpdate'](function (yhlrzf) {
                rzytlh != null && rzytlh['runWith']([0x2, yhlrzf['progress']]);
            });
        }, sk69u['readFile'] = function (til, s6kn9, bs9k6u, sk0b9) {
            s6kn9 === void 0x0 && (s6kn9 = 'ascill'), sk0b9 === void 0x0 && (sk0b9 = ''), sk69u['fs']['readFile']({
                'filePath': til,
                'encoding': s6kn9,
                'success': function (zvyrf4) {
                    if (til['indexOf']('http://') != -0x1 || til['indexOf']('https://') != -0x1) sk69u['onFileUpdate'](til, sk0b9);
                    bs9k6u != null && bs9k6u['runWith']([0x0, zvyrf4]);
                },
                'fail': function (lxthr) {
                    if (lxthr) bs9k6u != null && bs9k6u['runWith']([0x1, lxthr]);
                }
            });
        }, sk69u['downImg'] = function (jix$3, hzlyt, lhryzf) {
            lhryzf === void 0x0 && (lhryzf = '');
            var d5b86 = sk69u['wxdown']({
                'url': jix$3,
                'success': function (meapoc) {
                    meapoc['statusCode'] === 0xc8 && sk69u['copyFile'](meapoc['tempFilePath'], lhryzf, hzlyt);
                },
                'fail': function (unq9) {
                    hzlyt != null && hzlyt['runWith']([0x1, unq9]);
                }
            });
        }, sk69u['copyFile'] = function (g3ji$x, igxtj, gix3$j) {
            var v7f_a = g3ji$x['split']('/'),
                b0d685 = v7f_a[v7f_a['length'] - 0x1],
                x$j3q = igxtj['split']('?')[0x0],
                xltgi$ = sk69u['getFileInfo'](igxtj),
                ks9un = sk69u['getFileNativePath'](b0d685);
            sk69u['fs']['copyFile']({
                'srcPath': g3ji$x,
                'destPath': ks9un,
                'success': function (vf4_7) {
                    if (!xltgi$) sk69u['onSaveFile'](igxtj, b0d685), gix3$j != null && gix3$j['runWith']([0x0]);else {
                        if (xltgi$['readyUrl'] != igxtj) sk69u['remove'](b0d685, igxtj, gix3$j);
                    }
                },
                'fail': function (kb65d) {
                    gix3$j != null && gix3$j['runWith']([0x1, kb65d]);
                }
            });
        }, sk69u['getFileNativePath'] = function (tgrlx) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + tgrlx;
        }, sk69u['remove'] = function (pcoae, gitx$l, i3qx) {
            gitx$l === void 0x0 && (gitx$l = '');
            var nqs9ku = sk69u['getFileInfo'](gitx$l),
                $lxgti = sk69u['getFileNativePath'](nqs9ku['md5']);
            qjin3['loader']['clearRes'](nqs9ku['readyUrl']), sk69u['fs']['unlink']({
                'filePath': $lxgti,
                'success': function (_74) {
                    if (gitx$l != '') sk69u['onSaveFile'](gitx$l, pcoae);
                    i3qx != null && i3qx['runWith']([0x0]);
                },
                'fail': function ($gxhtl) {}
            });
        }, sk69u['onSaveFile'] = function (cmpa7, uns9) {
            var iu3qnj = cmpa7['split']('?')[0x0];
            sk69u['filesListObj'][iu3qnj] = {
                'md5': uns9,
                'readyUrl': cmpa7
            }, sk69u['fs']['writeFile']({
                'filePath': sk69u['fileNativeDir'] + '/' + sk69u['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](sk69u['filesListObj']),
                'success': function (b560kd) {
                    console['log']('写入测试测试成功：', b560kd);
                },
                'fail': function (fvyz_4) {
                    console['log']('写入测试测试失败：', fvyz_4);
                }
            });
        }, sk69u['existDir'] = function (usnk69, dw81) {
            sk69u['fs']['mkdir']({
                'dirPath': usnk69,
                'success': function ($qi3xj) {
                    dw81 != null && dw81['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (z_y4) {
                    if (z_y4['errMsg']['indexOf']('file already exists') != -0x1) sk69u['readSync'](sk69u['fileListName'], 'utf8', dw81);else dw81 != null && dw81['runWith']([0x1, z_y4]);
                }
            });
        }, sk69u['readSync'] = function (hxtglr, cm_o7, xthlrg, vyf47_) {
            cm_o7 === void 0x0 && (cm_o7 = 'ascill'), vyf47_ === void 0x0 && (vyf47_ = '');
            var ca4_7m = sk69u['getFileNativePath'](hxtglr),
                v74f;
            try {
                v74f = sk69u['fs']['readFileSync'](ca4_7m), xthlrg != null && xthlrg['runWith']([0x0, { 'data': v74f }]);
            } catch (ztryhl) {
                xthlrg != null && xthlrg['runWith']([0x1]);
            }
        }, sk69u['readCache'] = function () {}, sk69u['writeCache'] = function (poamc) {
            var u3jniq = readyUrl['split']('?')[0x0];
            sk69u['filesListObj'][u3jniq] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, sk69u['fs']['writeFile']({
                'filePath': sk69u['fileNativeDir'] + '/' + sk69u['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](sk69u['filesListObj']),
                'success': function (uqs9kn) {},
                'fail': function (hyvr) {}
            });
        }, sk69u['setNativeFileDir'] = function (ghx$) {
            sk69u['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ghx$;
        }, sk69u['filesListObj'] = {}, sk69u['fileNativeDir'] = null, sk69u['fileListName'] = 'layaairfiles.txt', sk69u['ziyuFileData'] = {}, vfyh(sk69u, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), sk69u;
    }(jgti$),
        v7f4_y = function (d6508) {
        function oca7pm() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], oca7pm['__super']['call'](this), this['_sound'] = oca7pm['_createSound'](), this['_chanell'] = new nsjq(this['_sound']);
        }
        vhzry(oca7pm, 'laya.wx.mini.MiniSound', d6508);
        var rvyf = oca7pm['prototype'];
        return rvyf['load'] = function (hryf) {
            var tjg$i = this;
            hryf = ju3n['formatURL'](hryf), this['url'] = hryf;
            if (oca7pm['_audioCache'][hryf]) {
                this['event']('complete');
                return;
            }
            function gtlxh() {
                if (oca7pm['_null'] != undefined) tjg$i['_sound']['onCanplay'](oca7pm['_null']), tjg$i['_sound']['onError'](oca7pm['_null']);else try {
                    tjg$i['_sound']['onCanplay'](null), tjg$i['_sound']['onError'](null), oca7pm['_null'] = null;
                } catch (fzyrvh) {
                    console['warn']('[wxmini] _clearSound:' + fzyrvh), tjg$i['_sound']['onCanplay'](iltx), tjg$i['_sound']['onError'](iltx), oca7pm['_null'] = iltx;
                }
            }
            function qnjus() {
                ghxrtl['loaded'] = !![], ghxrtl['event']('complete'), oca7pm['_audioCache'][ghxrtl['url']] = ghxrtl;
            }
            function fzhvyr(li$gtx) {
                console['error']('errCode=' + li$gtx['errCode'] + '  errMsg=' + li$gtx['errMsg']), ghxrtl['event']('error');
            }
            function iltx() {}
            this['_sound']['onCanplay'](qnjus), this['_sound']['onError'](fzhvyr), this['_sound']['src'] = hryf;
            var ghxrtl = this;
        }, rvyf['play'] = function (d6085, gxi$tj) {
            d6085 === void 0x0 && (d6085 = 0x0), gxi$tj === void 0x0 && (gxi$tj = 0x0);
            var zyt, a47c;
            if (this['url'] == db0k5['_tMusic']) {
                if (!oca7pm['_musicAudio']) oca7pm['_musicAudio'] = this['_sound'];
                zyt = oca7pm['_musicAudio'], a47c = this['_chanell'];
            } else zyt = this['_sound'], a47c = this['_chanell'];
            return zyt['src'] = this['url'], zyt['startTime'] = 0x0, a47c['isStopped'] && (a47c['url'] = this['url'], a47c['loops'] = gxi$tj, a47c['startTime'] = d6085, a47c['play'](), db0k5['addChannel'](a47c)), a47c;
        }, rvyf['dispose'] = function () {
            var j3in = oca7pm['_audioCache'][this['url']];
            j3in && (j3in['src'] = '', delete oca7pm['_audioCache'][this['url']]);
        }, yrvzfh(0x0, rvyf, 'duration', function () {
            return this['_sound']['duration'];
        }), oca7pm['_createSound'] = function () {
            oca7pm['_id']++;
            var bd65k = rfz4yv['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return bd65k;
        }, oca7pm['_musicAudio'] = null, oca7pm['_id'] = 0x0, oca7pm['_audioCache'] = {}, oca7pm['_null'] = undefined, oca7pm;
    }(jgti$),
        nsjq = function (v4_m) {
        function m_7c(yvrhf) {
            this['_audio'] = null, this['_onEnd'] = null, m_7c['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = yvrhf, this['_onEnd'] = fyrvz['bind'](this['__onEnd'], this), yvrhf['onEnded'](this['_onEnd']);
        }
        vhzry(m_7c, 'laya.wx.mini.MiniSoundChannel', v4_m);
        var y7v4f_ = m_7c['prototype'];
        return y7v4f_['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (qjin3['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, y7v4f_['__onNull'] = function () {}, y7v4f_['play'] = function () {
            this['isStopped'] = ![], db0k5['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, y7v4f_['stop'] = function () {
            this['isStopped'] = !![], db0k5['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, y7v4f_['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, y7v4f_['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], db0k5['addChannel'](this), this['_audio']['play']();
        }, yrvzfh(0x0, y7v4f_, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), yrvzfh(0x0, y7v4f_, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), yrvzfh(0x0, y7v4f_, 'volume', function () {
            return 0x1;
        }, function (y4rz) {}), m_7c['_null'] = undefined, m_7c;
    }(q3uinj),
        g$tjx = function () {
        function mac47_() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = rfz4yv['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        vhzry(mac47_, 'laya.wx.mini.MiniVideo');
        var v4m7 = mac47_['prototype'];
        return v4m7['on'] = function (mcepo, qji$n, k90s6b) {
            if (mcepo == 'loadedmetadata') this['onPlayFunc'] = k90s6b['bind'](qji$n), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else mcepo == 'ended' && (this['onEndedFunC'] = k90s6b['bind'](qji$n), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, v4m7['onTimeUpdateFunc'] = function (pmc7o) {
            this['position'] = pmc7o['position'], this['_duration'] = pmc7o['duration'];
        }, v4m7['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, v4m7['onended'] = function (d581w, fv74a_) {
            this['onEndedFunC'] = fv74a_['bind'](d581w), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, v4m7['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, v4m7['off'] = function (xj3i$, h$gtl, zlrhyt) {
            if (xj3i$ == 'loadedmetadata') this['onPlayFunc'] = zlrhyt['bind'](h$gtl), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else xj3i$ == 'ended' && (this['onEndedFunC'] = zlrhyt['bind'](h$gtl), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, v4m7['load'] = function (k6bs0) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = k6bs0;
        }, v4m7['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, v4m7['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, v4m7['size'] = function (nqju3, thlrgz) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = nqju3, this['videoElement']['height'] = thlrgz;
        }, v4m7['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, v4m7['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, yrvzfh(0x0, v4m7, 'duration', function () {
            return this['_duration'];
        }), yrvzfh(0x0, v4m7, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (ji3q$x) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = ji3q$x;
        }), yrvzfh(0x0, v4m7, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), yrvzfh(0x0, v4m7, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), yrvzfh(0x0, v4m7, 'ended', function () {
            return this['videoend'];
        }), yrvzfh(0x0, v4m7, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (tgrxl) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = tgrxl;
        }), yrvzfh(0x0, v4m7, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (l$x) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = l$x;
        }), yrvzfh(0x0, v4m7, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (lzrhtg) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = lzrhtg;
        }), yrvzfh(0x0, v4m7, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), yrvzfh(0x0, v4m7, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (mca_4) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = mca_4;
        }), yrvzfh(0x0, v4m7, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (bd856) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = bd856;
        }), yrvzfh(0x0, v4m7, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), yrvzfh(0x0, v4m7, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (k6us9n) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = k6us9n;
        }), yrvzfh(0x0, v4m7, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (yfvz_) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = yfvz_;
        }), yrvzfh(0x0, v4m7, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (jgi$3x) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = jgi$3x;
        }), mac47_;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var ryvf4z in Laya) {
        var _7amv = Laya[ryvf4z];
        _7amv && _7amv['__isclass'] && (exports[ryvf4z] = _7amv);
    }
});