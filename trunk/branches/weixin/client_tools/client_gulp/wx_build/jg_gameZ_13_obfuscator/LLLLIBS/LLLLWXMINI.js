var Z = wx.$L;
(function (window, document, j_bmo1) {
    var ztw6xu = j_bmo1['un'],
        v4q5s = j_bmo1['uns'],
        hoyj_2 = j_bmo1['static'],
        b1_ojm = j_bmo1['class'],
        _m1ipb = j_bmo1['getset'],
        d$7ekl = j_bmo1['__newvec'],
        gnsa5q = laya['utils']['Browser'],
        trxz6 = laya['events']['Event'],
        o1i_b = laya['events']['EventDispatcher'],
        xp9r6 = laya['resource']['HTMLImage'],
        l$ea = laya['utils']['Handler'],
        ak7l$g = laya['display']['Input'],
        uxzt6w = laya['net']['Loader'],
        rm9p0 = laya['maths']['Matrix'],
        g7ak$ = laya['renders']['Render'],
        i9rm0p = laya['utils']['RunDriver'],
        pm0 = laya['media']['Sound'],
        zr06 = laya['media']['SoundChannel'],
        kg$a7l = laya['media']['SoundManager'],
        u3tfzw = laya['display']['Stage'],
        s$g5q = laya['net']['URL'],
        d2y8hc = laya['utils']['Utils'],
        rzw6x = function () {
        function wtz6xu() {}
        return b1_ojm(wtz6xu, 'laya.wx.mini.MiniAdpter'), wtz6xu['getJson'] = function (sk5g$) {
            return JSON['parse'](sk5g$);
        }, wtz6xu['init'] = function (i1o_m, zw3tfu) {
            i1o_m === void 0x0 && (i1o_m = ![]), zw3tfu === void 0x0 && (zw3tfu = ![]);
            if (wtz6xu['_inited']) return;
            wtz6xu['window'] = window;
            if (wtz6xu['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            wtz6xu['_inited'] = !![], wtz6xu['isZiYu'] = zw3tfu, wtz6xu['isPosMsgYu'] = i1o_m, wtz6xu['EnvConfig'] = {}, !wtz6xu['isZiYu'] && (j_2hoy['setNativeFileDir']('/layaairGame'), j_2hoy['existDir'](j_2hoy['fileNativeDir'], l$ea['create'](wtz6xu, wtz6xu['onMkdirCallBack']))), wtz6xu['window']['focus'] = function () {}, j_bmo1['getUrlPath'] = function () {}, wtz6xu['window']['logtime'] = function (p1i) {}, wtz6xu['window']['alertTimeLog'] = function (v5n4q) {}, wtz6xu['window']['resetShareInfo'] = function () {}, wtz6xu['window']['CanvasRenderingContext2D'] = function () {}, wtz6xu['window']['CanvasRenderingContext2D']['prototype'] = wtz6xu['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], wtz6xu['window']['document']['body']['appendChild'] = function () {}, wtz6xu['EnvConfig']['pixelRatioInt'] = 0x0, i9rm0p['getPixelRatio'] = wtz6xu['pixelRatio'], wtz6xu['_preCreateElement'] = gnsa5q['createElement'], gnsa5q['createElement'] = wtz6xu['createElement'], i9rm0p['createShaderCondition'] = wtz6xu['createShaderCondition'], d2y8hc['parseXMLFromString'] = wtz6xu['parseXMLFromString'], ak7l$g['_createInputElement'] = ychj8['_createInputElement'], wtz6xu['EnvConfig']['load'] = uxzt6w['prototype']['load'], uxzt6w['prototype']['load'] = j82h['prototype']['load'], wtz6xu['isZiYu'] && i1o_m && wx['onMessage'](function (vg5qn) {
                vg5qn['isLoad'] && (j_2hoy['ziyuFileData'][vg5qn['url']] = vg5qn['data']);
            });
        }, wtz6xu['onMkdirCallBack'] = function (w3zft, ztwux6) {
            if (!w3zft) j_2hoy['filesListObj'] = JSON['parse'](ztwux6['data']);
        }, wtz6xu['pixelRatio'] = function () {
            if (!wtz6xu['EnvConfig']['pixelRatioInt']) try {
                var eyhc8 = wx['getSystemInfoSync']();
                return wtz6xu['EnvConfig']['pixelRatioInt'] = eyhc8['pixelRatio'], eyhc8 = eyhc8, eyhc8['pixelRatio'];
            } catch (b1imp_) {}
            return wtz6xu['EnvConfig']['pixelRatioInt'];
        }, wtz6xu['createElement'] = function (vsn4q5) {
            if (vsn4q5 == 'canvas') {
                var klg;
                return wtz6xu['idx'] == 0x1 ? wtz6xu['isZiYu'] ? (klg = sharedCanvas, klg['style'] = {}) : klg = window['canvas'] : klg = window['wx']['createCanvas'](), wtz6xu['idx']++, klg;
            } else {
                if (vsn4q5 == 'textarea' || vsn4q5 == 'input') return wtz6xu['onCreateInput'](vsn4q5);else {
                    if (vsn4q5 == 'div') {
                        var dlce8 = wtz6xu['_preCreateElement'](vsn4q5);
                        return dlce8['contains'] = function (yh_2) {
                            return null;
                        }, dlce8['removeChild'] = function ($7akg) {}, dlce8;
                    } else return wtz6xu['_preCreateElement'](vsn4q5);
                }
            }
        }, wtz6xu['onCreateInput'] = function (hycde) {
            var m_pi1b = wtz6xu['_preCreateElement'](hycde);
            return m_pi1b['focus'] = ychj8['wxinputFocus'], m_pi1b['blur'] = ychj8['wxinputblur'], m_pi1b['style'] = {}, m_pi1b['value'] = 0x0, m_pi1b['parentElement'] = {}, m_pi1b['placeholder'] = {}, m_pi1b['type'] = {}, m_pi1b['setColor'] = function (pi6r) {}, m_pi1b['setType'] = function (lae$) {}, m_pi1b['setFontFace'] = function (yoj2h8) {}, m_pi1b['addEventListener'] = function (bi91) {}, m_pi1b['contains'] = function (gas) {
                return null;
            }, m_pi1b['removeChild'] = function (q5ng) {}, m_pi1b;
        }, wtz6xu['createShaderCondition'] = function (j_1om) {
            var ch8j = this,
                tuxf = function () {
                var sg5qna = j_1om;
                return ch8j[j_1om['replace']('this.', '')];
            };
            return tuxf;
        }, wtz6xu['EnvConfig'] = null, wtz6xu['window'] = null, wtz6xu['_preCreateElement'] = null, wtz6xu['_inited'] = ![], wtz6xu['wxRequest'] = null, wtz6xu['systemInfo'] = null, wtz6xu['version'] = '0.0.1', wtz6xu['isZiYu'] = ![], wtz6xu['isPosMsgYu'] = ![], wtz6xu['parseXMLFromString'] = function (jc8yh2) {
            var $7lde, bm0p9;
            jc8yh2 = jc8yh2['replace'](/>\s+</g, '><');
            try {
                $7lde = new window['Parser']['DOMParser']()['parseFromString'](jc8yh2, 'text/xml');
            } catch (q4sv5) {
                throw '需要引入xml解析库文件';
            }
            return $7lde;
        }, wtz6xu['idx'] = 0x1, wtz6xu;
    }(),
        mrpi = function () {
        function kas$5g() {}
        b1_ojm(kas$5g, 'laya.wx.mini.MiniImage');
        var bjo_1m = kas$5g['prototype'];
        return bjo_1m['_loadImage'] = function (hc28) {
            var wu3tfz = this,
                $sgaq5 = ![];
            hc28['indexOf']('layaNativeDir/') == -0x1 && ($sgaq5 = !![], hc28 = s$g5q['formatURL'](hc28));
            if (!j_2hoy['getFileInfo'](hc28)) {
                if (hc28['indexOf']('http://') != -0x1 || hc28['indexOf']('https://') != -0x1) j_2hoy['downImg'](hc28, new l$ea(kas$5g, kas$5g['onDownImgCallBack'], [hc28, wu3tfz]), hc28);else kas$5g['onCreateImage'](hc28, wu3tfz, !![]);
            } else kas$5g['onCreateImage'](hc28, wu3tfz, !$sgaq5);
        }, kas$5g['onDownImgCallBack'] = function (jo2b_1, ck7, _bmo1j) {
            if (!_bmo1j) kas$5g['onCreateImage'](jo2b_1, ck7);else ck7['onError'](null);
        }, kas$5g['onCreateImage'] = function (ceh8dy, oyj8, clek7) {
            clek7 === void 0x0 && (clek7 = ![]);
            var b1_jom;
            if (!clek7) {
                var s5anqg = j_2hoy['getFileInfo'](ceh8dy),
                    x6tz0 = s5anqg['md5'];
                b1_jom = j_2hoy['getFileNativePath'](x6tz0);
            } else b1_jom = ceh8dy;
            if (oyj8['imgCache'] == null) oyj8['imgCache'] = {};
            var zr6wtx;
            function e8dhcl() {
                zr6wtx['onload'] = null, zr6wtx['onerror'] = null, delete oyj8['imgCache'][ceh8dy];
            }
            ;
            var tzwf = function () {
                e8dhcl(), oyj8['onLoaded'](zr6wtx);
            },
                l7$ke = function () {
                e8dhcl(), oyj8['event']('error', 'Load image failed');
            };
            oyj8['_type'] == 'nativeimage' ? (zr6wtx = new gnsa5q['window']['Image'](), zr6wtx['crossOrigin'] = '', zr6wtx['onload'] = tzwf, zr6wtx['onerror'] = l7$ke, zr6wtx['src'] = b1_jom, oyj8['imgCache'][ceh8dy] = zr6wtx) : new xp9r6['create'](b1_jom, {
                'onload': tzwf,
                'onerror': l7$ke,
                'onCreate': function (b1moi_) {
                    zr6wtx = b1moi_, oyj8['imgCache'][ceh8dy] = b1moi_;
                }
            });
        }, kas$5g;
    }(),
        ychj8 = function () {
        function $ags5k() {}
        return b1_ojm($ags5k, 'laya.wx.mini.MiniInput'), $ags5k['_createInputElement'] = function () {
            ak7l$g['_initInput'](ak7l$g['area'] = gnsa5q['createElement']('textarea')), ak7l$g['_initInput'](ak7l$g['input'] = gnsa5q['createElement']('input')), ak7l$g['inputContainer'] = gnsa5q['createElement']('div'), ak7l$g['inputContainer']['style']['position'] = 'absolute', ak7l$g['inputContainer']['style']['zIndex'] = 0x186a0, gnsa5q['container']['appendChild'](ak7l$g['inputContainer']), ak7l$g['inputContainer']['setPos'] = function (i9p6r, xpr) {
                ak7l$g['inputContainer']['style']['left'] = i9p6r + 'px', ak7l$g['inputContainer']['style']['top'] = xpr + 'px';
            }, j_bmo1['stage']['on']('resize', null, $ags5k['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (d2ych8) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), kg$a7l['_soundClass'] = _2j1y, kg$a7l['_musicClass'] = _2j1y, window['_videoClass'] = k$7dle;
        }, $ags5k['_onStageResize'] = function () {
            var dkle$7 = j_bmo1['stage']['_canvasTransform']['identity']();
            dkle$7['scale'](gnsa5q['width'] / g7ak$['canvas']['width'] / i9rm0p['getPixelRatio'](), gnsa5q['height'] / g7ak$['canvas']['height'] / i9rm0p['getPixelRatio']());
        }, $ags5k['wxinputFocus'] = function (h8edc) {
            var $as5g = ak7l$g['inputElement']['target'];
            if ($as5g && !$as5g['editable']) return;
            rzw6x['window']['wx']['offKeyboardConfirm'](), rzw6x['window']['wx']['offKeyboardInput'](), rzw6x['window']['wx']['showKeyboard']({
                'defaultValue': $as5g['text'],
                'maxLength': $as5g['maxChars'],
                'multiple': $as5g['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (f3tuzw) {},
                'fail': function (l7ak$g) {}
            }), rzw6x['window']['wx']['onKeyboardConfirm'](function (ec) {
                var g$kal = ec ? ec['value'] : '';
                $as5g['text'] = g$kal, $as5g['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), rzw6x['window']['wx']['onKeyboardInput'](function (nqa5g) {
                var p0mbi = nqa5g ? nqa5g['value'] : '';
                if (!$as5g['multiline']) {
                    if (p0mbi['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                $as5g['text'] = p0mbi, $as5g['event']('input');
            });
        }, $ags5k['inputEnter'] = function () {
            ak7l$g['inputElement']['target']['focus'] = ![];
        }, $ags5k['wxinputblur'] = function () {
            $ags5k['hideKeyboard']();
        }, $ags5k['hideKeyboard'] = function () {
            rzw6x['window']['wx']['offKeyboardConfirm'](), rzw6x['window']['wx']['offKeyboardInput'](), rzw6x['window']['wx']['hideKeyboard']({
                'success': function (ztx6) {
                    console['log']('隐藏键盘');
                },
                'fail': function (b9i0) {
                    console['log']('隐藏键盘出错:' + (b9i0 ? b9i0['errMsg'] : ''));
                }
            });
        }, $ags5k;
    }(),
        j82h = function () {
        function pr9() {}
        b1_ojm(pr9, 'laya.wx.mini.MiniLoader');
        var e$kld = pr9['prototype'];
        return e$kld['load'] = function (ib1p9, ojmb_, qsa5$, c2yh8, s5gqvn) {
            qsa5$ === void 0x0 && (qsa5$ = !![]), s5gqvn === void 0x0 && (s5gqvn = ![]);
            var b90i = this;
            b90i['_url'] = ib1p9;
            if (ib1p9['indexOf']('data:image') === 0x0) b90i['_type'] = ojmb_ = 'image';else b90i['_type'] = ojmb_ || (ojmb_ = b90i['getTypeFromUrl'](ib1p9));
            b90i['_cache'] = qsa5$, b90i['_data'] = null;
            var yohj = 'ascii';
            if (ib1p9['indexOf']('.fnt') != -0x1) yohj = 'utf8';else ojmb_ == 'arraybuffer' && (yohj = '');
            ;
            var k$ela = d2y8hc['getFileExtension'](ib1p9);
            if (pr9['_fileTypeArr']['indexOf'](k$ela) != -0x1) rzw6x['EnvConfig']['load']['call'](this, ib1p9, ojmb_, qsa5$, c2yh8, s5gqvn);else {
                if (!j_2hoy['getFileInfo'](ib1p9)) {
                    if (ib1p9['indexOf']('layaNativeDir/') != -0x1) {
                        if (rzw6x['isZiYu']) {
                            var r6xtz = j_2hoy['ziyuFileData'][ib1p9];
                            b90i['onLoaded'](r6xtz);
                            return;
                        } else {
                            cosnole['log']('read read'), j_2hoy['read'](ib1p9, yohj, new l$ea(pr9, pr9['onReadNativeCallBack'], [yohj, ib1p9, ojmb_, qsa5$, c2yh8, s5gqvn, b90i]));
                            return;
                        }
                    }
                    if (s$g5q['rootPath'] == '') var prx = ib1p9;else prx = ib1p9['split'](s$g5q['rootPath'])[0x0];
                    ib1p9['indexOf']('http://') != -0x1 || ib1p9['indexOf']('https://') != -0x1 ? rzw6x['EnvConfig']['load']['call'](b90i, ib1p9, ojmb_, qsa5$, c2yh8, s5gqvn) : j_2hoy['readFile'](prx, yohj, new l$ea(pr9, pr9['onReadNativeCallBack'], [yohj, ib1p9, ojmb_, qsa5$, c2yh8, s5gqvn, b90i]), ib1p9);
                } else rzw6x['EnvConfig']['load']['call'](this, ib1p9, ojmb_, qsa5$, c2yh8, s5gqvn);
            }
        }, e$kld['resMgrLoad'] = function (lk, lk7a$e, bo1m_j, xr09p, y2h_jo, z9r06x, qn5gs) {
            bo1m_j === void 0x0 && (bo1m_j = 0x0), xr09p === void 0x0 && (xr09p = ![]), y2h_jo === void 0x0 && (y2h_jo = ![]), z9r06x === void 0x0 && (z9r06x = 0x0), qn5gs === void 0x0 && (qn5gs = 0x3), lk['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', lk), rzw6x['EnvConfig']['resMgrLoad'](lk, (r9p6i, ipm9b, wzft) => {
                pr9['prototype']['resMgrLoadCallBack'](r9p6i, ipm9b, wzft, lk7a$e);
            }, bo1m_j, xr09p, y2h_jo, z9r06x, qn5gs);
        }, e$kld['resMgrLoadCallBack'] = function (eyh8d, cd8, m_bi1p, mbo_1i) {
            console['log']('buff:::', eyh8d, m_bi1p, j_2hoy['fileNativeDir'] + '///' + j_2hoy['fileListName']), mbo_1i(eyh8d, cd8, m_bi1p);
        }, e$kld['clearRes'] = function (y2h8o, ngqsa) {
            ngqsa === void 0x0 && (ngqsa = ![]);
            var $a5kgs = this;
            $a5kgs['clearRes'](y2h8o, ngqsa);
            var b_1j2 = j_2hoy['getFileInfo'](y2h8o);
            if (b_1j2 && (y2h8o['indexOf']('http://') != -0x1 || y2h8o['indexOf']('https://') != -0x1)) {
                var o1j2_ = b_1j2['md5'],
                    e7alk = j_2hoy['getFileNativePath'](o1j2_);
                j_2hoy['remove'](e7alk);
            }
        }, pr9['onReadNativeCallBack'] = function (le$ka, d87ecl, ldkec7, qn4s5, gk$7al, rpi069, i6r0p, edl$k7, yec8d) {
            qn4s5 === void 0x0 && (qn4s5 = !![]), rpi069 === void 0x0 && (rpi069 = ![]), edl$k7 === void 0x0 && (edl$k7 = 0x0);
            if (!edl$k7) {
                var zrx690;
                if (ldkec7 == 'json' || ldkec7 == 'atlas') zrx690 = rzw6x['getJson'](yec8d['data']);else ldkec7 == 'xml' ? zrx690 = d2y8hc['parseXMLFromString'](yec8d['data']) : zrx690 = yec8d['data'];
                i6r0p['onLoaded'](zrx690), !rzw6x['isZiYu'] && rzw6x['isPosMsgYu'] && ldkec7 != 'arraybuffer' && wx['postMessage']({
                    'url': d87ecl,
                    'data': zrx690,
                    'isLoad': !![]
                });
            } else edl$k7 == 0x1 && rzw6x['EnvConfig']['load']['call'](i6r0p, d87ecl, ldkec7, qn4s5, gk$7al, rpi069);
        }, hoyj_2(pr9, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), pr9;
    }(),
        j_2hoy = function (ehc8ld) {
        function o_hyj() {
            o_hyj['__super']['call'](this);
            ;
        }
        return b1_ojm(o_hyj, 'laya.wx.mini.MiniFileMgr', ehc8ld), o_hyj['isLoadFile'] = function (el7kcd) {
            return o_hyj['_fileTypeArr']['indexOf'](el7kcd) != -0x1 ? !![] : ![];
        }, o_hyj['getFileInfo'] = function (leka$) {
            var mi1b9 = leka$['split']('?')[0x0],
                bmo1_ = o_hyj['filesListObj'][mi1b9];
            if (bmo1_ == null) return null;else return bmo1_;
            return null;
        }, o_hyj['onFileUpdate'] = function (utfz3, mi90pr) {
            var hyc8j = utfz3['split']('/'),
                e8c7dl = hyc8j[hyc8j['length'] - 0x1],
                xufzw = o_hyj['getFileInfo'](mi90pr);
            if (xufzw == null) o_hyj['onSaveFile'](mi90pr, e8c7dl);else {
                if (xufzw['readyUrl'] != mi90pr) o_hyj['remove'](e8c7dl, mi90pr);
            }
        }, o_hyj['exits'] = function (k7$ae, pbim) {
            var o1yj_2 = o_hyj['getFileNativePath'](k7$ae);
            o_hyj['fs']['getFileInfo']({
                'filePath': o1yj_2,
                'success': function ($k7el) {
                    pbim != null && pbim['runWith']([0x0, $k7el]);
                },
                'fail': function ($a7lke) {
                    pbim != null && pbim['runWith']([0x1, $a7lke]);
                }
            });
        }, o_hyj['read'] = function (zuxtw, h2yoj, mib09p, yh8o2j) {
            h2yoj === void 0x0 && (h2yoj = 'ascill'), yh8o2j === void 0x0 && (yh8o2j = '');
            var xrz0;
            yh8o2j != '' ? xrz0 = o_hyj['getFileNativePath'](zuxtw) : xrz0 = zuxtw, o_hyj['fs']['readFile']({
                'filePath': xrz0,
                'encoding': h2yoj,
                'success': function (p1i_) {
                    mib09p != null && mib09p['runWith']([0x0, p1i_]);
                },
                'fail': function (bip_) {
                    if (bip_ && yh8o2j != '') o_hyj['down'](yh8o2j, h2yoj, mib09p, yh8o2j);else mib09p != null && mib09p['runWith']([0x1]);
                }
            });
        }, o_hyj['readNativeFile'] = function ($7galk, kdle7) {
            o_hyj['fs']['readFile']({
                'filePath': $7galk,
                'encoding': '',
                'success': function (c8j2hy) {
                    kdle7 != null && kdle7['runWith']([0x0]);
                },
                'fail': function (y_o12j) {
                    kdle7 != null && kdle7['runWith']([0x1]);
                }
            });
        }, o_hyj['down'] = function (le7$d, xfuwtz, trxzw, qa5s$) {
            xfuwtz === void 0x0 && (xfuwtz = 'ascill'), qa5s$ === void 0x0 && (qa5s$ = '');
            var k$ael = o_hyj['getFileNativePath'](qa5s$),
                $akgs5 = o_hyj['wxdown']({
                'url': le7$d,
                'filePath': k$ael,
                'success': function (cy2jh8) {
                    if (cy2jh8['statusCode'] === 0xc8) o_hyj['readFile'](cy2jh8['filePath'], xfuwtz, trxzw, qa5s$);
                },
                'fail': function (hoy2_) {
                    trxzw != null && trxzw['runWith']([0x1, hoy2_]);
                }
            });
            $akgs5['onProgressUpdate'](function (agq$5) {
                trxzw != null && trxzw['runWith']([0x2, agq$5['progress']]);
            });
        }, o_hyj['readFile'] = function (q5$ags, ch82dy, gna5sq, kecld) {
            ch82dy === void 0x0 && (ch82dy = 'ascill'), kecld === void 0x0 && (kecld = ''), o_hyj['fs']['readFile']({
                'filePath': q5$ags,
                'encoding': ch82dy,
                'success': function (lhdce) {
                    if (q5$ags['indexOf']('http://') != -0x1 || q5$ags['indexOf']('https://') != -0x1) o_hyj['onFileUpdate'](q5$ags, kecld);
                    gna5sq != null && gna5sq['runWith']([0x0, lhdce]);
                },
                'fail': function (ip690) {
                    if (ip690) gna5sq != null && gna5sq['runWith']([0x1, ip690]);
                }
            });
        }, o_hyj['downImg'] = function (qs5n4, p9m0b, vqgn5) {
            vqgn5 === void 0x0 && (vqgn5 = '');
            var pibm0 = o_hyj['wxdown']({
                'url': qs5n4,
                'success': function (im0pr9) {
                    im0pr9['statusCode'] === 0xc8 && o_hyj['copyFile'](im0pr9['tempFilePath'], vqgn5, p9m0b);
                },
                'fail': function (sgka5$) {
                    p9m0b != null && p9m0b['runWith']([0x1, sgka5$]);
                }
            });
        }, o_hyj['copyFile'] = function (a$g5qs, imr, zx6trw) {
            var obmi = a$g5qs['split']('/'),
                kg7al$ = obmi[obmi['length'] - 0x1],
                dyc2h = imr['split']('?')[0x0],
                r960px = o_hyj['getFileInfo'](imr),
                v4sq5 = o_hyj['getFileNativePath'](kg7al$);
            o_hyj['fs']['copyFile']({
                'srcPath': a$g5qs,
                'destPath': v4sq5,
                'success': function (vnqsg) {
                    if (!r960px) o_hyj['onSaveFile'](imr, kg7al$), zx6trw != null && zx6trw['runWith']([0x0]);else {
                        if (r960px['readyUrl'] != imr) o_hyj['remove'](kg7al$, imr, zx6trw);
                    }
                },
                'fail': function (kgl7a$) {
                    zx6trw != null && zx6trw['runWith']([0x1, kgl7a$]);
                }
            });
        }, o_hyj['getFileNativePath'] = function (_bo21) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _bo21;
        }, o_hyj['remove'] = function (s5g$ak, ydch82, r6z9x) {
            ydch82 === void 0x0 && (ydch82 = '');
            var ob_1m = o_hyj['getFileInfo'](ydch82),
                alg7$ = o_hyj['getFileNativePath'](ob_1m['md5']);
            j_bmo1['loader']['clearRes'](ob_1m['readyUrl']), o_hyj['fs']['unlink']({
                'filePath': alg7$,
                'success': function (gsqnv) {
                    if (ydch82 != '') o_hyj['onSaveFile'](ydch82, s5g$ak);
                    r6z9x != null && r6z9x['runWith']([0x0]);
                },
                'fail': function (tx0z6r) {}
            });
        }, o_hyj['onSaveFile'] = function (ce8l7d, xt6wzu) {
            var vs5nqg = ce8l7d['split']('?')[0x0];
            o_hyj['filesListObj'][vs5nqg] = {
                'md5': xt6wzu,
                'readyUrl': ce8l7d
            }, o_hyj['fs']['writeFile']({
                'filePath': o_hyj['fileNativeDir'] + '/' + o_hyj['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](o_hyj['filesListObj']),
                'success': function (hyj2_) {
                    console['log']('写入测试测试成功：', hyj2_);
                },
                'fail': function (l78cde) {
                    console['log']('写入测试测试失败：', l78cde);
                }
            });
        }, o_hyj['existDir'] = function (vqsn5g, g$aq) {
            o_hyj['fs']['mkdir']({
                'dirPath': vqsn5g,
                'success': function (sngqv) {
                    g$aq != null && g$aq['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (_oy12j) {
                    if (_oy12j['errMsg']['indexOf']('file already exists') != -0x1) o_hyj['readSync'](o_hyj['fileListName'], 'utf8', g$aq);else g$aq != null && g$aq['runWith']([0x1, _oy12j]);
                }
            });
        }, o_hyj['readSync'] = function (irp906, i91pbm, ga$5k, sn4q5) {
            i91pbm === void 0x0 && (i91pbm = 'ascill'), sn4q5 === void 0x0 && (sn4q5 = '');
            var mb1oj = o_hyj['getFileNativePath'](irp906),
                pi_m1;
            try {
                pi_m1 = o_hyj['fs']['readFileSync'](mb1oj), ga$5k != null && ga$5k['runWith']([0x0, { 'data': pi_m1 }]);
            } catch (_b21jo) {
                ga$5k != null && ga$5k['runWith']([0x1]);
            }
        }, o_hyj['readCache'] = function () {}, o_hyj['writeCache'] = function (r096i) {
            var pm19 = readyUrl['split']('?')[0x0];
            o_hyj['filesListObj'][pm19] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, o_hyj['fs']['writeFile']({
                'filePath': o_hyj['fileNativeDir'] + '/' + o_hyj['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](o_hyj['filesListObj']),
                'success': function ($gla7k) {},
                'fail': function (jh2yo) {}
            });
        }, o_hyj['setNativeFileDir'] = function (bm90i) {
            o_hyj['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bm90i;
        }, o_hyj['filesListObj'] = {}, o_hyj['fileNativeDir'] = null, o_hyj['fileListName'] = 'layaairfiles.txt', o_hyj['ziyuFileData'] = {}, hoyj_2(o_hyj, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), o_hyj;
    }(o1i_b),
        _2j1y = function (h_ojy2) {
        function i1m9() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], i1m9['__super']['call'](this), this['_sound'] = i1m9['_createSound'](), this['_chanell'] = new i6r0(this['_sound']);
        }
        b1_ojm(i1m9, 'laya.wx.mini.MiniSound', h_ojy2);
        var dke7cl = i1m9['prototype'];
        return dke7cl['load'] = function (qa$s5g) {
            var b1m_oi = this;
            qa$s5g = s$g5q['formatURL'](qa$s5g), this['url'] = qa$s5g;
            if (i1m9['_audioCache'][qa$s5g]) {
                this['event']('complete');
                return;
            }
            function $skg5a() {
                if (i1m9['_null'] != undefined) b1m_oi['_sound']['onCanplay'](i1m9['_null']), b1m_oi['_sound']['onError'](i1m9['_null']);else try {
                    b1m_oi['_sound']['onCanplay'](null), b1m_oi['_sound']['onError'](null), i1m9['_null'] = null;
                } catch (wt6z) {
                    console['warn']('[wxmini] _clearSound:' + wt6z), b1m_oi['_sound']['onCanplay'](a7l$ek), b1m_oi['_sound']['onError'](a7l$ek), i1m9['_null'] = a7l$ek;
                }
            }
            function uxztfw() {
                y28dhc['loaded'] = !![], y28dhc['event']('complete'), i1m9['_audioCache'][y28dhc['url']] = y28dhc;
            }
            function k7d$el($dlk) {
                console['error']('errCode=' + $dlk['errCode'] + '  errMsg=' + $dlk['errMsg']), y28dhc['event']('error');
            }
            function a7l$ek() {}
            this['_sound']['onCanplay'](uxztfw), this['_sound']['onError'](k7d$el), this['_sound']['src'] = qa$s5g;
            var y28dhc = this;
        }, dke7cl['play'] = function (_1jb2o, a7kgl) {
            _1jb2o === void 0x0 && (_1jb2o = 0x0), a7kgl === void 0x0 && (a7kgl = 0x0);
            var q5ngs, cedl87;
            if (this['url'] == kg$a7l['_tMusic']) {
                if (!i1m9['_musicAudio']) i1m9['_musicAudio'] = this['_sound'];
                q5ngs = i1m9['_musicAudio'], cedl87 = this['_chanell'];
            } else q5ngs = this['_sound'], cedl87 = this['_chanell'];
            return q5ngs['src'] = this['url'], q5ngs['startTime'] = 0x0, cedl87['isStopped'] && (cedl87['url'] = this['url'], cedl87['loops'] = a7kgl, cedl87['startTime'] = _1jb2o, cedl87['play'](), kg$a7l['addChannel'](cedl87)), cedl87;
        }, dke7cl['dispose'] = function () {
            var ibm1p_ = i1m9['_audioCache'][this['url']];
            ibm1p_ && (ibm1p_['src'] = '', delete i1m9['_audioCache'][this['url']]);
        }, _m1ipb(0x0, dke7cl, 'duration', function () {
            return this['_sound']['duration'];
        }), i1m9['_createSound'] = function () {
            i1m9['_id']++;
            var _pbm = rzw6x['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return _pbm;
        }, i1m9['_musicAudio'] = null, i1m9['_id'] = 0x0, i1m9['_audioCache'] = {}, i1m9['_null'] = undefined, i1m9;
    }(o1i_b),
        i6r0 = function (chled) {
        function ftzu3w(xz0r6) {
            this['_audio'] = null, this['_onEnd'] = null, ftzu3w['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = xz0r6, this['_onEnd'] = d2y8hc['bind'](this['__onEnd'], this), xz0r6['onEnded'](this['_onEnd']);
        }
        b1_ojm(ftzu3w, 'laya.wx.mini.MiniSoundChannel', chled);
        var z60r9 = ftzu3w['prototype'];
        return z60r9['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (j_bmo1['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, z60r9['__onNull'] = function () {}, z60r9['play'] = function () {
            this['isStopped'] = ![], kg$a7l['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, z60r9['stop'] = function () {
            this['isStopped'] = !![], kg$a7l['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, z60r9['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, z60r9['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], kg$a7l['addChannel'](this), this['_audio']['play']();
        }, _m1ipb(0x0, z60r9, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), _m1ipb(0x0, z60r9, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), _m1ipb(0x0, z60r9, 'volume', function () {
            return 0x1;
        }, function (lek) {}), ftzu3w['_null'] = undefined, ftzu3w;
    }(zr06),
        k$7dle = function () {
        function _b1oi() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = rzw6x['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        b1_ojm(_b1oi, 'laya.wx.mini.MiniVideo');
        var _jy2o1 = _b1oi['prototype'];
        return _jy2o1['on'] = function (l7kea, $a7ekl, galk7) {
            if (l7kea == 'loadedmetadata') this['onPlayFunc'] = galk7['bind']($a7ekl), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else l7kea == 'ended' && (this['onEndedFunC'] = galk7['bind']($a7ekl), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, _jy2o1['onTimeUpdateFunc'] = function (ld8hec) {
            this['position'] = ld8hec['position'], this['_duration'] = ld8hec['duration'];
        }, _jy2o1['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, _jy2o1['onended'] = function (hcy2, qv5s4) {
            this['onEndedFunC'] = qv5s4['bind'](hcy2), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, _jy2o1['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, _jy2o1['off'] = function (xztu6w, e78dlc, lhd8ec) {
            if (xztu6w == 'loadedmetadata') this['onPlayFunc'] = lhd8ec['bind'](e78dlc), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else xztu6w == 'ended' && (this['onEndedFunC'] = lhd8ec['bind'](e78dlc), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, _jy2o1['load'] = function (c7lke) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = c7lke;
        }, _jy2o1['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, _jy2o1['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, _jy2o1['size'] = function (pm_b, m90pbi) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = pm_b, this['videoElement']['height'] = m90pbi;
        }, _jy2o1['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, _jy2o1['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, _m1ipb(0x0, _jy2o1, 'duration', function () {
            return this['_duration'];
        }), _m1ipb(0x0, _jy2o1, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (o_1y2j) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = o_1y2j;
        }), _m1ipb(0x0, _jy2o1, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), _m1ipb(0x0, _jy2o1, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), _m1ipb(0x0, _jy2o1, 'ended', function () {
            return this['videoend'];
        }), _m1ipb(0x0, _jy2o1, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (zx06rt) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = zx06rt;
        }), _m1ipb(0x0, _jy2o1, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (g$aqs5) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = g$aqs5;
        }), _m1ipb(0x0, _jy2o1, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (r9p60) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = r9p60;
        }), _m1ipb(0x0, _jy2o1, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), _m1ipb(0x0, _jy2o1, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (c87led) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = c87led;
        }), _m1ipb(0x0, _jy2o1, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (m9b1pi) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = m9b1pi;
        }), _m1ipb(0x0, _jy2o1, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), _m1ipb(0x0, _jy2o1, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (delkc) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = delkc;
        }), _m1ipb(0x0, _jy2o1, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (ce8ydh) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = ce8ydh;
        }), _m1ipb(0x0, _jy2o1, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (b_p1mi) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = b_p1mi;
        }), _b1oi;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var sng5v in Laya) {
        var i1mpb = Laya[sng5v];
        i1mpb && i1mpb['__isclass'] && (exports[sng5v] = i1mpb);
    }
});