var a = wx.$y;
(function (window, document, ikng2$) {
    var hwtoj = ikng2$['un'],
        cn$k9 = ikng2$['uns'],
        l8f_7o = ikng2$['static'],
        c_78s = ikng2$['class'],
        $qn2gi = ikng2$['getset'],
        c_7sl8 = ikng2$['__newvec'],
        w1tu4 = laya['utils']['Browser'],
        a563vy = laya['events']['Event'],
        nk$9g = laya['events']['EventDispatcher'],
        c8ls9 = laya['resource']['HTMLImage'],
        f7oj = laya['utils']['Handler'],
        w1mtdu = laya['display']['Input'],
        _ol8f = laya['net']['Loader'],
        cl2 = laya['maths']['Matrix'],
        s78lf_ = laya['renders']['Render'],
        sk29lc = laya['utils']['RunDriver'],
        s2knc9 = laya['media']['Sound'],
        _hfoj7 = laya['media']['SoundChannel'],
        w1dut = laya['media']['SoundManager'],
        wmdut = laya['display']['Stage'],
        k9cn$2 = laya['net']['URL'],
        vr6y0 = laya['utils']['Utils'],
        tdwj4 = function () {
        function lcs8() {}
        return c_78s(lcs8, 'laya.wx.mini.MiniAdpter'), lcs8['getJson'] = function (iq$2ng) {
            return JSON['parse'](iq$2ng);
        }, lcs8['init'] = function (_olf78, f7h_) {
            _olf78 === void 0x0 && (_olf78 = ![]), f7h_ === void 0x0 && (f7h_ = ![]);
            if (lcs8['_inited']) return;
            lcs8['window'] = window;
            if (lcs8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            lcs8['_inited'] = !![], lcs8['isZiYu'] = f7h_, lcs8['isPosMsgYu'] = _olf78, lcs8['EnvConfig'] = {}, !lcs8['isZiYu'] && (ho_4f['setNativeFileDir']('/layaairGame'), ho_4f['existDir'](ho_4f['fileNativeDir'], f7oj['create'](lcs8, lcs8['onMkdirCallBack']))), lcs8['window']['focus'] = function () {}, ikng2$['getUrlPath'] = function () {}, lcs8['window']['logtime'] = function (l2k) {}, lcs8['window']['alertTimeLog'] = function (_f8s7) {}, lcs8['window']['resetShareInfo'] = function () {}, lcs8['window']['CanvasRenderingContext2D'] = function () {}, lcs8['window']['CanvasRenderingContext2D']['prototype'] = lcs8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], lcs8['window']['document']['body']['appendChild'] = function () {}, lcs8['EnvConfig']['pixelRatioInt'] = 0x0, sk29lc['getPixelRatio'] = lcs8['pixelRatio'], lcs8['_preCreateElement'] = w1tu4['createElement'], w1tu4['createElement'] = lcs8['createElement'], sk29lc['createShaderCondition'] = lcs8['createShaderCondition'], vr6y0['parseXMLFromString'] = lcs8['parseXMLFromString'], w1mtdu['_createInputElement'] = _ojf4h['_createInputElement'], lcs8['EnvConfig']['load'] = _ol8f['prototype']['load'], _ol8f['prototype']['load'] = u5mtd['prototype']['load'], lcs8['isZiYu'] && _olf78 && wx['onMessage'](function (jwdt4) {
                jwdt4['isLoad'] && (ho_4f['ziyuFileData'][jwdt4['url']] = jwdt4['data']);
            });
        }, lcs8['onMkdirCallBack'] = function (g2nki$, clk92s) {
            if (!g2nki$) ho_4f['filesListObj'] = JSON['parse'](clk92s['data']);
        }, lcs8['pixelRatio'] = function () {
            if (!lcs8['EnvConfig']['pixelRatioInt']) try {
                var m3a6 = wx['getSystemInfoSync']();
                return lcs8['EnvConfig']['pixelRatioInt'] = m3a6['pixelRatio'], m3a6 = m3a6, m3a6['pixelRatio'];
            } catch (tj4ho) {}
            return lcs8['EnvConfig']['pixelRatioInt'];
        }, lcs8['createElement'] = function ($2in) {
            if ($2in == 'canvas') {
                var d4wjt;
                return lcs8['idx'] == 0x1 ? lcs8['isZiYu'] ? (d4wjt = sharedCanvas, d4wjt['style'] = {}) : d4wjt = window['canvas'] : d4wjt = window['wx']['createCanvas'](), lcs8['idx']++, d4wjt;
            } else {
                if ($2in == 'textarea' || $2in == 'input') return lcs8['onCreateInput']($2in);else {
                    if ($2in == 'div') {
                        var y0xer = lcs8['_preCreateElement']($2in);
                        return y0xer['contains'] = function (oh4fw) {
                            return null;
                        }, y0xer['removeChild'] = function (yr0v36) {}, y0xer;
                    } else return lcs8['_preCreateElement']($2in);
                }
            }
        }, lcs8['onCreateInput'] = function (dw1ht) {
            var ig2$kn = lcs8['_preCreateElement'](dw1ht);
            return ig2$kn['focus'] = _ojf4h['wxinputFocus'], ig2$kn['blur'] = _ojf4h['wxinputblur'], ig2$kn['style'] = {}, ig2$kn['value'] = 0x0, ig2$kn['parentElement'] = {}, ig2$kn['placeholder'] = {}, ig2$kn['type'] = {}, ig2$kn['setColor'] = function (o8l_7f) {}, ig2$kn['setType'] = function (f_ls78) {}, ig2$kn['setFontFace'] = function (y0rz3) {}, ig2$kn['addEventListener'] = function (f7_l8) {}, ig2$kn['contains'] = function (jh4ot) {
                return null;
            }, ig2$kn['removeChild'] = function (sc8l7_) {}, ig2$kn;
        }, lcs8['createShaderCondition'] = function (fjho_) {
            var _f7hj = this,
                kcls29 = function () {
                var s_l8c7 = fjho_;
                return _f7hj[fjho_['replace']('this.', '')];
            };
            return kcls29;
        }, lcs8['EnvConfig'] = null, lcs8['window'] = null, lcs8['_preCreateElement'] = null, lcs8['_inited'] = ![], lcs8['wxRequest'] = null, lcs8['systemInfo'] = null, lcs8['version'] = '0.0.1', lcs8['isZiYu'] = ![], lcs8['isPosMsgYu'] = ![], lcs8['parseXMLFromString'] = function (_jo7fh) {
            var kgn2$i, dm1t5u;
            _jo7fh = _jo7fh['replace'](/>\s+</g, '><');
            try {
                kgn2$i = new window['Parser']['DOMParser']()['parseFromString'](_jo7fh, 'text/xml');
            } catch (gnp$) {
                throw '需要引入xml解析库文件';
            }
            return kgn2$i;
        }, lcs8['idx'] = 0x1, lcs8;
    }(),
        t1u4d = function () {
        function n9c() {}
        c_78s(n9c, 'laya.wx.mini.MiniImage');
        var av36m = n9c['prototype'];
        return av36m['_loadImage'] = function (ks89l) {
            var a615 = this,
                au561 = ![];
            ks89l['indexOf']('layaNativeDir/') == -0x1 && (au561 = !![], ks89l = k9cn$2['formatURL'](ks89l));
            if (!ho_4f['getFileInfo'](ks89l)) {
                if (ks89l['indexOf']('http://') != -0x1 || ks89l['indexOf']('https://') != -0x1) ho_4f['downImg'](ks89l, new f7oj(n9c, n9c['onDownImgCallBack'], [ks89l, a615]), ks89l);else n9c['onCreateImage'](ks89l, a615, !![]);
            } else n9c['onCreateImage'](ks89l, a615, !au561);
        }, n9c['onDownImgCallBack'] = function (q2n, h7fo, n9s2kc) {
            if (!n9s2kc) n9c['onCreateImage'](q2n, h7fo);else h7fo['onError'](null);
        }, n9c['onCreateImage'] = function (of78_l, mwtu, h4wdtj) {
            h4wdtj === void 0x0 && (h4wdtj = ![]);
            var rz0eyx;
            if (!h4wdtj) {
                var n9k$2c = ho_4f['getFileInfo'](of78_l),
                    u53am6 = n9k$2c['md5'];
                rz0eyx = ho_4f['getFileNativePath'](u53am6);
            } else rz0eyx = of78_l;
            if (mwtu['imgCache'] == null) mwtu['imgCache'] = {};
            var sc9lk8;
            function xvy0rz() {
                sc9lk8['onload'] = null, sc9lk8['onerror'] = null, delete mwtu['imgCache'][of78_l];
            }
            ;
            var dthw4j = function () {
                xvy0rz(), mwtu['onLoaded'](sc9lk8);
            },
                q$ni2 = function () {
                xvy0rz(), mwtu['event']('error', 'Load image failed');
            };
            mwtu['_type'] == 'nativeimage' ? (sc9lk8 = new w1tu4['window']['Image'](), sc9lk8['crossOrigin'] = '', sc9lk8['onload'] = dthw4j, sc9lk8['onerror'] = q$ni2, sc9lk8['src'] = rz0eyx, mwtu['imgCache'][of78_l] = sc9lk8) : new c8ls9['create'](rz0eyx, {
                'onload': dthw4j,
                'onerror': q$ni2,
                'onCreate': function ($2c9k) {
                    sc9lk8 = $2c9k, mwtu['imgCache'][of78_l] = $2c9k;
                }
            });
        }, n9c;
    }(),
        _ojf4h = function () {
        function ho7f() {}
        return c_78s(ho7f, 'laya.wx.mini.MiniInput'), ho7f['_createInputElement'] = function () {
            w1mtdu['_initInput'](w1mtdu['area'] = w1tu4['createElement']('textarea')), w1mtdu['_initInput'](w1mtdu['input'] = w1tu4['createElement']('input')), w1mtdu['inputContainer'] = w1tu4['createElement']('div'), w1mtdu['inputContainer']['style']['position'] = 'absolute', w1mtdu['inputContainer']['style']['zIndex'] = 0x186a0, w1tu4['container']['appendChild'](w1mtdu['inputContainer']), w1mtdu['inputContainer']['setPos'] = function (gkn2i, l_78cs) {
                w1mtdu['inputContainer']['style']['left'] = gkn2i + 'px', w1mtdu['inputContainer']['style']['top'] = l_78cs + 'px';
            }, ikng2$['stage']['on']('resize', null, ho7f['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_jhf7o) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), w1dut['_soundClass'] = _7s8c, w1dut['_musicClass'] = _7s8c, window['_videoClass'] = t41duw;
        }, ho7f['_onStageResize'] = function () {
            var $ck29 = ikng2$['stage']['_canvasTransform']['identity']();
            $ck29['scale'](w1tu4['width'] / s78lf_['canvas']['width'] / sk29lc['getPixelRatio'](), w1tu4['height'] / s78lf_['canvas']['height'] / sk29lc['getPixelRatio']());
        }, ho7f['wxinputFocus'] = function (um561) {
            var jow4fh = w1mtdu['inputElement']['target'];
            if (jow4fh && !jow4fh['editable']) return;
            tdwj4['window']['wx']['offKeyboardConfirm'](), tdwj4['window']['wx']['offKeyboardInput'](), tdwj4['window']['wx']['showKeyboard']({
                'defaultValue': jow4fh['text'],
                'maxLength': jow4fh['maxChars'],
                'multiple': jow4fh['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (twoj) {},
                'fail': function (a306yv) {}
            }), tdwj4['window']['wx']['onKeyboardConfirm'](function (m1wdut) {
                var l879c = m1wdut ? m1wdut['value'] : '';
                jow4fh['text'] = l879c, jow4fh['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), tdwj4['window']['wx']['onKeyboardInput'](function ($g2) {
                var yre0xz = $g2 ? $g2['value'] : '';
                if (!jow4fh['multiline']) {
                    if (yre0xz['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                jow4fh['text'] = yre0xz, jow4fh['event']('input');
            });
        }, ho7f['inputEnter'] = function () {
            w1mtdu['inputElement']['target']['focus'] = ![];
        }, ho7f['wxinputblur'] = function () {
            ho7f['hideKeyboard']();
        }, ho7f['hideKeyboard'] = function () {
            tdwj4['window']['wx']['offKeyboardConfirm'](), tdwj4['window']['wx']['offKeyboardInput'](), tdwj4['window']['wx']['hideKeyboard']({
                'success': function (hwjf) {
                    console['log']('隐藏键盘');
                },
                'fail': function (u6m15) {
                    console['log']('隐藏键盘出错:' + (u6m15 ? u6m15['errMsg'] : ''));
                }
            });
        }, ho7f;
    }(),
        u5mtd = function () {
        function mwtdu1() {}
        c_78s(mwtdu1, 'laya.wx.mini.MiniLoader');
        var _8ojf = mwtdu1['prototype'];
        return _8ojf['load'] = function (t4howj, sck92, v0zyr3, amd15, ncs92) {
            v0zyr3 === void 0x0 && (v0zyr3 = !![]), ncs92 === void 0x0 && (ncs92 = ![]);
            var csl8_ = this;
            csl8_['_url'] = t4howj;
            if (t4howj['indexOf']('data:image') === 0x0) csl8_['_type'] = sck92 = 'image';else csl8_['_type'] = sck92 || (sck92 = csl8_['getTypeFromUrl'](t4howj));
            csl8_['_cache'] = v0zyr3, csl8_['_data'] = null;
            var in$pqg = 'ascii';
            if (t4howj['indexOf']('.fnt') != -0x1) in$pqg = 'utf8';else sck92 == 'arraybuffer' && (in$pqg = '');
            ;
            var m6a1u5 = vr6y0['getFileExtension'](t4howj);
            if (mwtdu1['_fileTypeArr']['indexOf'](m6a1u5) != -0x1) tdwj4['EnvConfig']['load']['call'](this, t4howj, sck92, v0zyr3, amd15, ncs92);else {
                if (!ho_4f['getFileInfo'](t4howj)) {
                    if (t4howj['indexOf']('layaNativeDir/') != -0x1) {
                        if (tdwj4['isZiYu']) {
                            var klc98 = ho_4f['ziyuFileData'][t4howj];
                            csl8_['onLoaded'](klc98);
                            return;
                        } else {
                            cosnole['log']('read read'), ho_4f['read'](t4howj, in$pqg, new f7oj(mwtdu1, mwtdu1['onReadNativeCallBack'], [in$pqg, t4howj, sck92, v0zyr3, amd15, ncs92, csl8_]));
                            return;
                        }
                    }
                    if (k9cn$2['rootPath'] == '') var cn29k = t4howj;else cn29k = t4howj['split'](k9cn$2['rootPath'])[0x0];
                    t4howj['indexOf']('http://') != -0x1 || t4howj['indexOf']('https://') != -0x1 ? tdwj4['EnvConfig']['load']['call'](csl8_, t4howj, sck92, v0zyr3, amd15, ncs92) : ho_4f['readFile'](cn29k, in$pqg, new f7oj(mwtdu1, mwtdu1['onReadNativeCallBack'], [in$pqg, t4howj, sck92, v0zyr3, amd15, ncs92, csl8_]), t4howj);
                } else tdwj4['EnvConfig']['load']['call'](this, t4howj, sck92, v0zyr3, amd15, ncs92);
            }
        }, _8ojf['resMgrLoad'] = function (hjdtw, cs_78, umd5a, k$92gn, dtwj, igk, gqpn$i) {
            umd5a === void 0x0 && (umd5a = 0x0), k$92gn === void 0x0 && (k$92gn = ![]), dtwj === void 0x0 && (dtwj = ![]), igk === void 0x0 && (igk = 0x0), gqpn$i === void 0x0 && (gqpn$i = 0x3), hjdtw['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', hjdtw), tdwj4['EnvConfig']['resMgrLoad'](hjdtw, (rv0zy, hwjot4, wmt1d) => {
                mwtdu1['prototype']['resMgrLoadCallBack'](rv0zy, hwjot4, wmt1d, cs_78);
            }, umd5a, k$92gn, dtwj, igk, gqpn$i);
        }, _8ojf['resMgrLoadCallBack'] = function (whj4to, v03a, dt5, jo7hf_) {
            console['log']('buff:::', whj4to, dt5, ho_4f['fileNativeDir'] + '///' + ho_4f['fileListName']), jo7hf_(whj4to, v03a, dt5);
        }, _8ojf['clearRes'] = function (kc2ls9, _fl87o) {
            _fl87o === void 0x0 && (_fl87o = ![]);
            var vxzy0 = this;
            vxzy0['clearRes'](kc2ls9, _fl87o);
            var c_78 = ho_4f['getFileInfo'](kc2ls9);
            if (c_78 && (kc2ls9['indexOf']('http://') != -0x1 || kc2ls9['indexOf']('https://') != -0x1)) {
                var du4w = c_78['md5'],
                    wtudm1 = ho_4f['getFileNativePath'](du4w);
                ho_4f['remove'](wtudm1);
            }
        }, mwtdu1['onReadNativeCallBack'] = function (jot4wh, yxzre, dtjh4w, a63v0y, y3v65, uw4t1d, ks29cn, wj4thd, vy03r6) {
            a63v0y === void 0x0 && (a63v0y = !![]), uw4t1d === void 0x0 && (uw4t1d = ![]), wj4thd === void 0x0 && (wj4thd = 0x0);
            if (!wj4thd) {
                var knc2;
                if (dtjh4w == 'json' || dtjh4w == 'atlas') knc2 = tdwj4['getJson'](vy03r6['data']);else dtjh4w == 'xml' ? knc2 = vr6y0['parseXMLFromString'](vy03r6['data']) : knc2 = vy03r6['data'];
                ks29cn['onLoaded'](knc2), !tdwj4['isZiYu'] && tdwj4['isPosMsgYu'] && dtjh4w != 'arraybuffer' && wx['postMessage']({
                    'url': yxzre,
                    'data': knc2,
                    'isLoad': !![]
                });
            } else wj4thd == 0x1 && tdwj4['EnvConfig']['load']['call'](ks29cn, yxzre, dtjh4w, a63v0y, y3v65, uw4t1d);
        }, l8f_7o(mwtdu1, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), mwtdu1;
    }(),
        ho_4f = function (hj4dw) {
        function c9lk2s() {
            c9lk2s['__super']['call'](this);
            ;
        }
        return c_78s(c9lk2s, 'laya.wx.mini.MiniFileMgr', hj4dw), c9lk2s['isLoadFile'] = function (lfo7_) {
            return c9lk2s['_fileTypeArr']['indexOf'](lfo7_) != -0x1 ? !![] : ![];
        }, c9lk2s['getFileInfo'] = function (ojwth) {
            var z3 = ojwth['split']('?')[0x0],
                d1ht = c9lk2s['filesListObj'][z3];
            if (d1ht == null) return null;else return d1ht;
            return null;
        }, c9lk2s['onFileUpdate'] = function (i$g2k, ck8ls) {
            var hw1 = i$g2k['split']('/'),
                zrvy = hw1[hw1['length'] - 0x1],
                hjfw = c9lk2s['getFileInfo'](ck8ls);
            if (hjfw == null) c9lk2s['onSaveFile'](ck8ls, zrvy);else {
                if (hjfw['readyUrl'] != ck8ls) c9lk2s['remove'](zrvy, ck8ls);
            }
        }, c9lk2s['exits'] = function (oj4fh_, k2csl9) {
            var f7ol8_ = c9lk2s['getFileNativePath'](oj4fh_);
            c9lk2s['fs']['getFileInfo']({
                'filePath': f7ol8_,
                'success': function (wo4t) {
                    k2csl9 != null && k2csl9['runWith']([0x0, wo4t]);
                },
                'fail': function (c$9n2) {
                    k2csl9 != null && k2csl9['runWith']([0x1, c$9n2]);
                }
            });
        }, c9lk2s['read'] = function (gkn$9, m5u6a3, k$g2n9, oj4f) {
            m5u6a3 === void 0x0 && (m5u6a3 = 'ascill'), oj4f === void 0x0 && (oj4f = '');
            var cslk29;
            oj4f != '' ? cslk29 = c9lk2s['getFileNativePath'](gkn$9) : cslk29 = gkn$9, c9lk2s['fs']['readFile']({
                'filePath': cslk29,
                'encoding': m5u6a3,
                'success': function (n2kg) {
                    k$g2n9 != null && k$g2n9['runWith']([0x0, n2kg]);
                },
                'fail': function (qpi) {
                    if (qpi && oj4f != '') c9lk2s['down'](oj4f, m5u6a3, k$g2n9, oj4f);else k$g2n9 != null && k$g2n9['runWith']([0x1]);
                }
            });
        }, c9lk2s['readNativeFile'] = function (_7l8, amv3) {
            c9lk2s['fs']['readFile']({
                'filePath': _7l8,
                'encoding': '',
                'success': function (c$9k2n) {
                    amv3 != null && amv3['runWith']([0x0]);
                },
                'fail': function (vxyz0r) {
                    amv3 != null && amv3['runWith']([0x1]);
                }
            });
        }, c9lk2s['down'] = function (w1mud, wofhj, eyxzr, j4dth) {
            wofhj === void 0x0 && (wofhj = 'ascill'), j4dth === void 0x0 && (j4dth = '');
            var _j87f = c9lk2s['getFileNativePath'](j4dth),
                yxvr0 = c9lk2s['wxdown']({
                'url': w1mud,
                'filePath': _j87f,
                'success': function (h14twd) {
                    if (h14twd['statusCode'] === 0xc8) c9lk2s['readFile'](h14twd['filePath'], wofhj, eyxzr, j4dth);
                },
                'fail': function (md1ut5) {
                    eyxzr != null && eyxzr['runWith']([0x1, md1ut5]);
                }
            });
            yxvr0['onProgressUpdate'](function (wdtj) {
                eyxzr != null && eyxzr['runWith']([0x2, wdtj['progress']]);
            });
        }, c9lk2s['readFile'] = function (oj4hw, am61, t1d4, mu1t5) {
            am61 === void 0x0 && (am61 = 'ascill'), mu1t5 === void 0x0 && (mu1t5 = ''), c9lk2s['fs']['readFile']({
                'filePath': oj4hw,
                'encoding': am61,
                'success': function (xz) {
                    if (oj4hw['indexOf']('http://') != -0x1 || oj4hw['indexOf']('https://') != -0x1) c9lk2s['onFileUpdate'](oj4hw, mu1t5);
                    t1d4 != null && t1d4['runWith']([0x0, xz]);
                },
                'fail': function (ht1d4w) {
                    if (ht1d4w) t1d4 != null && t1d4['runWith']([0x1, ht1d4w]);
                }
            });
        }, c9lk2s['downImg'] = function (fj4_ho, qpgi, zxyr) {
            zxyr === void 0x0 && (zxyr = '');
            var $pqi = c9lk2s['wxdown']({
                'url': fj4_ho,
                'success': function (klsc29) {
                    klsc29['statusCode'] === 0xc8 && c9lk2s['copyFile'](klsc29['tempFilePath'], zxyr, qpgi);
                },
                'fail': function (_7lo) {
                    qpgi != null && qpgi['runWith']([0x1, _7lo]);
                }
            });
        }, c9lk2s['copyFile'] = function (ck$92, cs9l78, y3z0v) {
            var h4wtd1 = ck$92['split']('/'),
                d1wtmu = h4wtd1[h4wtd1['length'] - 0x1],
                cl9s8k = cs9l78['split']('?')[0x0],
                u1am5d = c9lk2s['getFileInfo'](cs9l78),
                o_l8f = c9lk2s['getFileNativePath'](d1wtmu);
            c9lk2s['fs']['copyFile']({
                'srcPath': ck$92,
                'destPath': o_l8f,
                'success': function (td4whj) {
                    if (!u1am5d) c9lk2s['onSaveFile'](cs9l78, d1wtmu), y3z0v != null && y3z0v['runWith']([0x0]);else {
                        if (u1am5d['readyUrl'] != cs9l78) c9lk2s['remove'](d1wtmu, cs9l78, y3z0v);
                    }
                },
                'fail': function (j4twho) {
                    y3z0v != null && y3z0v['runWith']([0x1, j4twho]);
                }
            });
        }, c9lk2s['getFileNativePath'] = function (s2k9n) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + s2k9n;
        }, c9lk2s['remove'] = function (rzv0x, n9sc2k, qip$g) {
            n9sc2k === void 0x0 && (n9sc2k = '');
            var hfoj = c9lk2s['getFileInfo'](n9sc2k),
                sc29 = c9lk2s['getFileNativePath'](hfoj['md5']);
            ikng2$['loader']['clearRes'](hfoj['readyUrl']), c9lk2s['fs']['unlink']({
                'filePath': sc29,
                'success': function (td1h) {
                    if (n9sc2k != '') c9lk2s['onSaveFile'](n9sc2k, rzv0x);
                    qip$g != null && qip$g['runWith']([0x0]);
                },
                'fail': function (vzxy) {}
            });
        }, c9lk2s['onSaveFile'] = function (o7jh_f, adm1u5) {
            var _ojh = o7jh_f['split']('?')[0x0];
            c9lk2s['filesListObj'][_ojh] = {
                'md5': adm1u5,
                'readyUrl': o7jh_f
            }, c9lk2s['fs']['writeFile']({
                'filePath': c9lk2s['fileNativeDir'] + '/' + c9lk2s['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](c9lk2s['filesListObj']),
                'success': function (tmdu1) {
                    console['log']('写入测试测试成功：', tmdu1);
                },
                'fail': function (k$ngi) {
                    console['log']('写入测试测试失败：', k$ngi);
                }
            });
        }, c9lk2s['existDir'] = function (jwho4, xzyv0) {
            c9lk2s['fs']['mkdir']({
                'dirPath': jwho4,
                'success': function (dtm51) {
                    xzyv0 != null && xzyv0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (twd4) {
                    if (twd4['errMsg']['indexOf']('file already exists') != -0x1) c9lk2s['readSync'](c9lk2s['fileListName'], 'utf8', xzyv0);else xzyv0 != null && xzyv0['runWith']([0x1, twd4]);
                }
            });
        }, c9lk2s['readSync'] = function (k$g2n, k92cls, rv0yz3, ohf4w) {
            k92cls === void 0x0 && (k92cls = 'ascill'), ohf4w === void 0x0 && (ohf4w = '');
            var hjo_f7 = c9lk2s['getFileNativePath'](k$g2n),
                y6v;
            try {
                y6v = c9lk2s['fs']['readFileSync'](hjo_f7), rv0yz3 != null && rv0yz3['runWith']([0x0, { 'data': y6v }]);
            } catch (snc92k) {
                rv0yz3 != null && rv0yz3['runWith']([0x1]);
            }
        }, c9lk2s['readCache'] = function () {}, c9lk2s['writeCache'] = function (dt4w) {
            var thw = readyUrl['split']('?')[0x0];
            c9lk2s['filesListObj'][thw] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, c9lk2s['fs']['writeFile']({
                'filePath': c9lk2s['fileNativeDir'] + '/' + c9lk2s['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](c9lk2s['filesListObj']),
                'success': function (k89l) {},
                'fail': function (k8scl) {}
            });
        }, c9lk2s['setNativeFileDir'] = function (v36y5a) {
            c9lk2s['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + v36y5a;
        }, c9lk2s['filesListObj'] = {}, c9lk2s['fileNativeDir'] = null, c9lk2s['fileListName'] = 'layaairfiles.txt', c9lk2s['ziyuFileData'] = {}, l8f_7o(c9lk2s, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), c9lk2s;
    }(nk$9g),
        _7s8c = function (s9k) {
        function dh4tj() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], dh4tj['__super']['call'](this), this['_sound'] = dh4tj['_createSound'](), this['_chanell'] = new tdj4h(this['_sound']);
        }
        c_78s(dh4tj, 'laya.wx.mini.MiniSound', s9k);
        var lsc798 = dh4tj['prototype'];
        return lsc798['load'] = function (h4t1d) {
            var r0zxey = this;
            h4t1d = k9cn$2['formatURL'](h4t1d), this['url'] = h4t1d;
            if (dh4tj['_audioCache'][h4t1d]) {
                this['event']('complete');
                return;
            }
            function l78s9c() {
                if (dh4tj['_null'] != undefined) r0zxey['_sound']['onCanplay'](dh4tj['_null']), r0zxey['_sound']['onError'](dh4tj['_null']);else try {
                    r0zxey['_sound']['onCanplay'](null), r0zxey['_sound']['onError'](null), dh4tj['_null'] = null;
                } catch (s8c_7) {
                    console['warn']('[wxmini] _clearSound:' + s8c_7), r0zxey['_sound']['onCanplay'](ut15md), r0zxey['_sound']['onError'](ut15md), dh4tj['_null'] = ut15md;
                }
            }
            function udt15() {
                yva03['loaded'] = !![], yva03['event']('complete'), dh4tj['_audioCache'][yva03['url']] = yva03;
            }
            function l8_s7(knc2$) {
                console['error']('errCode=' + knc2$['errCode'] + '  errMsg=' + knc2$['errMsg']), yva03['event']('error');
            }
            function ut15md() {}
            this['_sound']['onCanplay'](udt15), this['_sound']['onError'](l8_s7), this['_sound']['src'] = h4t1d;
            var yva03 = this;
        }, lsc798['play'] = function (jh_o4f, hwo4tj) {
            jh_o4f === void 0x0 && (jh_o4f = 0x0), hwo4tj === void 0x0 && (hwo4tj = 0x0);
            var s8c7l, m53au6;
            if (this['url'] == w1dut['_tMusic']) {
                if (!dh4tj['_musicAudio']) dh4tj['_musicAudio'] = this['_sound'];
                s8c7l = dh4tj['_musicAudio'], m53au6 = this['_chanell'];
            } else s8c7l = this['_sound'], m53au6 = this['_chanell'];
            return s8c7l['src'] = this['url'], s8c7l['startTime'] = 0x0, m53au6['isStopped'] && (m53au6['url'] = this['url'], m53au6['loops'] = hwo4tj, m53au6['startTime'] = jh_o4f, m53au6['play'](), w1dut['addChannel'](m53au6)), m53au6;
        }, lsc798['dispose'] = function () {
            var s9l7c = dh4tj['_audioCache'][this['url']];
            s9l7c && (s9l7c['src'] = '', delete dh4tj['_audioCache'][this['url']]);
        }, $qn2gi(0x0, lsc798, 'duration', function () {
            return this['_sound']['duration'];
        }), dh4tj['_createSound'] = function () {
            dh4tj['_id']++;
            var jwo4f = tdwj4['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return jwo4f;
        }, dh4tj['_musicAudio'] = null, dh4tj['_id'] = 0x0, dh4tj['_audioCache'] = {}, dh4tj['_null'] = undefined, dh4tj;
    }(nk$9g),
        tdj4h = function (tw4) {
        function m5a1(ma3u) {
            this['_audio'] = null, this['_onEnd'] = null, m5a1['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = ma3u, this['_onEnd'] = vr6y0['bind'](this['__onEnd'], this), ma3u['onEnded'](this['_onEnd']);
        }
        c_78s(m5a1, 'laya.wx.mini.MiniSoundChannel', tw4);
        var k29nc$ = m5a1['prototype'];
        return k29nc$['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (ikng2$['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, k29nc$['__onNull'] = function () {}, k29nc$['play'] = function () {
            this['isStopped'] = ![], w1dut['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, k29nc$['stop'] = function () {
            this['isStopped'] = !![], w1dut['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, k29nc$['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, k29nc$['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], w1dut['addChannel'](this), this['_audio']['play']();
        }, $qn2gi(0x0, k29nc$, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), $qn2gi(0x0, k29nc$, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), $qn2gi(0x0, k29nc$, 'volume', function () {
            return 0x1;
        }, function (w4tj) {}), m5a1['_null'] = undefined, m5a1;
    }(_hfoj7),
        t41duw = function () {
        function f_8() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = tdwj4['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        c_78s(f_8, 'laya.wx.mini.MiniVideo');
        var jt4hd = f_8['prototype'];
        return jt4hd['on'] = function (jhw4fo, gi$k, ls7_) {
            if (jhw4fo == 'loadedmetadata') this['onPlayFunc'] = ls7_['bind'](gi$k), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else jhw4fo == 'ended' && (this['onEndedFunC'] = ls7_['bind'](gi$k), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, jt4hd['onTimeUpdateFunc'] = function (c92ks) {
            this['position'] = c92ks['position'], this['_duration'] = c92ks['duration'];
        }, jt4hd['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, jt4hd['onended'] = function (lc98s7, ud1am5) {
            this['onEndedFunC'] = ud1am5['bind'](lc98s7), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, jt4hd['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, jt4hd['off'] = function (f4how, l9s8kc, mu56a) {
            if (f4how == 'loadedmetadata') this['onPlayFunc'] = mu56a['bind'](l9s8kc), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else f4how == 'ended' && (this['onEndedFunC'] = mu56a['bind'](l9s8kc), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, jt4hd['load'] = function (t4owjh) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = t4owjh;
        }, jt4hd['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, jt4hd['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, jt4hd['size'] = function (j4wfoh, h7jo_f) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = j4wfoh, this['videoElement']['height'] = h7jo_f;
        }, jt4hd['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, jt4hd['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, $qn2gi(0x0, jt4hd, 'duration', function () {
            return this['_duration'];
        }), $qn2gi(0x0, jt4hd, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (twdj4h) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = twdj4h;
        }), $qn2gi(0x0, jt4hd, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), $qn2gi(0x0, jt4hd, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), $qn2gi(0x0, jt4hd, 'ended', function () {
            return this['videoend'];
        }), $qn2gi(0x0, jt4hd, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (mv5a3) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = mv5a3;
        }), $qn2gi(0x0, jt4hd, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (udt1mw) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = udt1mw;
        }), $qn2gi(0x0, jt4hd, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (h4jf) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = h4jf;
        }), $qn2gi(0x0, jt4hd, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), $qn2gi(0x0, jt4hd, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (s2cl) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = s2cl;
        }), $qn2gi(0x0, jt4hd, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (jh_4fo) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = jh_4fo;
        }), $qn2gi(0x0, jt4hd, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), $qn2gi(0x0, jt4hd, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (qng$ip) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = qng$ip;
        }), $qn2gi(0x0, jt4hd, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (t1mwdu) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = t1mwdu;
        }), $qn2gi(0x0, jt4hd, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (s7f_8l) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = s7f_8l;
        }), f_8;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var c79l8s in Laya) {
        var nk$g29 = Laya[c79l8s];
        nk$g29 && nk$g29['__isclass'] && (exports[c79l8s] = nk$g29);
    }
});