var _j = wx.n$;
(function (window, document, jgy5e) {
    var t81nbl = jgy5e['un'],
        t1nd8 = jgy5e['uns'],
        ov9_mc = jgy5e['static'],
        swqbt = jgy5e['class'],
        qtibws = jgy5e['getset'],
        wrsfq = jgy5e['__newvec'],
        _0376p = laya['utils']['Browser'],
        mc3_ = laya['events']['Event'],
        gakjyh = laya['events']['EventDispatcher'],
        f2630p = laya['resource']['HTMLImage'],
        wf2 = laya['utils']['Handler'],
        _06o7 = laya['display']['Input'],
        tbsqn = laya['net']['Loader'],
        jgkuy = laya['maths']['Matrix'],
        y5xz = laya['renders']['Render'],
        ifrwqs = laya['utils']['RunDriver'],
        augv9k = laya['media']['Sound'],
        iwqsbr = laya['media']['SoundChannel'],
        aygku = laya['media']['SoundManager'],
        wp6f = laya['display']['Stage'],
        m9cuav = laya['net']['URL'],
        qsb1nt = laya['utils']['Utils'],
        biqt = function () {
        function qsibw() {}
        return swqbt(qsibw, 'laya.wx.mini.MiniAdpter'), qsibw['getJson'] = function (avmc9) {
            return JSON['parse'](avmc9);
        }, qsibw['init'] = function (nbl, bws) {
            nbl === void 0x0 && (nbl = ![]), bws === void 0x0 && (bws = ![]);
            if (qsibw['_inited']) return;
            qsibw['window'] = window;
            if (qsibw['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            qsibw['_inited'] = !![], qsibw['isZiYu'] = bws, qsibw['isPosMsgYu'] = nbl, qsibw['EnvConfig'] = {}, !qsibw['isZiYu'] && (vcm9o['setNativeFileDir']('/layaairGame'), vcm9o['existDir'](vcm9o['fileNativeDir'], wf2['create'](qsibw, qsibw['onMkdirCallBack']))), qsibw['window']['focus'] = function () {}, jgy5e['getUrlPath'] = function () {}, qsibw['window']['logtime'] = function (uk9gav) {}, qsibw['window']['alertTimeLog'] = function (jgyh) {}, qsibw['window']['resetShareInfo'] = function () {}, qsibw['window']['CanvasRenderingContext2D'] = function () {}, qsibw['window']['CanvasRenderingContext2D']['prototype'] = qsibw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qsibw['window']['document']['body']['appendChild'] = function () {}, qsibw['EnvConfig']['pixelRatioInt'] = 0x0, ifrwqs['getPixelRatio'] = qsibw['pixelRatio'], qsibw['_preCreateElement'] = _0376p['createElement'], _0376p['createElement'] = qsibw['createElement'], ifrwqs['createShaderCondition'] = qsibw['createShaderCondition'], qsb1nt['parseXMLFromString'] = qsibw['parseXMLFromString'], _06o7['_createInputElement'] = bsqiwt['_createInputElement'], qsibw['EnvConfig']['load'] = tbsqn['prototype']['load'], tbsqn['prototype']['load'] = _p706['prototype']['load'], qsibw['isZiYu'] && nbl && wx['onMessage'](function (nl8dt) {
                nl8dt['isLoad'] && (vcm9o['ziyuFileData'][nl8dt['url']] = nl8dt['data']);
            });
        }, qsibw['onMkdirCallBack'] = function (jyuag, moc73) {
            if (!jyuag) vcm9o['filesListObj'] = JSON['parse'](moc73['data']);
        }, qsibw['pixelRatio'] = function () {
            if (!qsibw['EnvConfig']['pixelRatioInt']) try {
                var wp2fi = wx['getSystemInfoSync']();
                return qsibw['EnvConfig']['pixelRatioInt'] = wp2fi['pixelRatio'], wp2fi = wp2fi, wp2fi['pixelRatio'];
            } catch (wp2irf) {}
            return qsibw['EnvConfig']['pixelRatioInt'];
        }, qsibw['createElement'] = function (stqnb) {
            if (stqnb == 'canvas') {
                var p73620;
                return qsibw['idx'] == 0x1 ? qsibw['isZiYu'] ? (p73620 = sharedCanvas, p73620['style'] = {}) : p73620 = window['canvas'] : p73620 = window['wx']['createCanvas'](), qsibw['idx']++, p73620;
            } else {
                if (stqnb == 'textarea' || stqnb == 'input') return qsibw['onCreateInput'](stqnb);else {
                    if (stqnb == 'div') {
                        var rwbqis = qsibw['_preCreateElement'](stqnb);
                        return rwbqis['contains'] = function (xhzy) {
                            return null;
                        }, rwbqis['removeChild'] = function (acvum) {}, rwbqis;
                    } else return qsibw['_preCreateElement'](stqnb);
                }
            }
        }, qsibw['onCreateInput'] = function (qbtisw) {
            var e5gjhy = qsibw['_preCreateElement'](qbtisw);
            return e5gjhy['focus'] = bsqiwt['wxinputFocus'], e5gjhy['blur'] = bsqiwt['wxinputblur'], e5gjhy['style'] = {}, e5gjhy['value'] = 0x0, e5gjhy['parentElement'] = {}, e5gjhy['placeholder'] = {}, e5gjhy['type'] = {}, e5gjhy['setColor'] = function (hx5e) {}, e5gjhy['setType'] = function ($xz) {}, e5gjhy['setFontFace'] = function (ntsb18) {}, e5gjhy['addEventListener'] = function (ghyej5) {}, e5gjhy['contains'] = function (o7mv_) {
                return null;
            }, e5gjhy['removeChild'] = function (juy) {}, e5gjhy;
        }, qsibw['createShaderCondition'] = function (fqrsi) {
            var hkga = this,
                pfw26r = function () {
                var qbts1n = fqrsi;
                return hkga[fqrsi['replace']('this.', '')];
            };
            return pfw26r;
        }, qsibw['EnvConfig'] = null, qsibw['window'] = null, qsibw['_preCreateElement'] = null, qsibw['_inited'] = ![], qsibw['wxRequest'] = null, qsibw['systemInfo'] = null, qsibw['version'] = '0.0.1', qsibw['isZiYu'] = ![], qsibw['isPosMsgYu'] = ![], qsibw['parseXMLFromString'] = function (yxzh) {
            var btln1, aykjh;
            yxzh = yxzh['replace'](/>\s+</g, '><');
            try {
                btln1 = new window['Parser']['DOMParser']()['parseFromString'](yxzh, 'text/xml');
            } catch (kyhjg) {
                throw '需要引入xml解析库文件';
            }
            return btln1;
        }, qsibw['idx'] = 0x1, qsibw;
    }(),
        rw2p = function () {
        function btsqiw() {}
        swqbt(btsqiw, 'laya.wx.mini.MiniImage');
        var ucmav = btsqiw['prototype'];
        return ucmav['_loadImage'] = function (rw6pf) {
            var rqwsi = this,
                twsbiq = ![];
            rw6pf['indexOf']('layaNativeDir/') == -0x1 && (twsbiq = !![], rw6pf = m9cuav['formatURL'](rw6pf));
            if (!vcm9o['getFileInfo'](rw6pf)) {
                if (rw6pf['indexOf']('http://') != -0x1 || rw6pf['indexOf']('https://') != -0x1) vcm9o['downImg'](rw6pf, new wf2(btsqiw, btsqiw['onDownImgCallBack'], [rw6pf, rqwsi]), rw6pf);else btsqiw['onCreateImage'](rw6pf, rqwsi, !![]);
            } else btsqiw['onCreateImage'](rw6pf, rqwsi, !twsbiq);
        }, btsqiw['onDownImgCallBack'] = function (g5yej, s1b8nt, jkygau) {
            if (!jkygau) btsqiw['onCreateImage'](g5yej, s1b8nt);else s1b8nt['onError'](null);
        }, btsqiw['onCreateImage'] = function (e5$, jgykha, xhz5) {
            xhz5 === void 0x0 && (xhz5 = ![]);
            var uvco9m;
            if (!xhz5) {
                var ye5zxh = vcm9o['getFileInfo'](e5$),
                    h5gyje = ye5zxh['md5'];
                uvco9m = vcm9o['getFileNativePath'](h5gyje);
            } else uvco9m = e5$;
            if (jgykha['imgCache'] == null) jgykha['imgCache'] = {};
            var kjygha;
            function t81sbn() {
                kjygha['onload'] = null, kjygha['onerror'] = null, delete jgykha['imgCache'][e5$];
            }
            ;
            var b8lnt = function () {
                t81sbn(), jgykha['onLoaded'](kjygha);
            },
                zyhx5 = function () {
                t81sbn(), jgykha['event']('error', 'Load image failed');
            };
            jgykha['_type'] == 'nativeimage' ? (kjygha = new _0376p['window']['Image'](), kjygha['crossOrigin'] = '', kjygha['onload'] = b8lnt, kjygha['onerror'] = zyhx5, kjygha['src'] = uvco9m, jgykha['imgCache'][e5$] = kjygha) : new f2630p['create'](uvco9m, {
                'onload': b8lnt,
                'onerror': zyhx5,
                'onCreate': function (ka9gju) {
                    kjygha = ka9gju, jgykha['imgCache'][e5$] = ka9gju;
                }
            });
        }, btsqiw;
    }(),
        bsqiwt = function () {
        function guajk() {}
        return swqbt(guajk, 'laya.wx.mini.MiniInput'), guajk['_createInputElement'] = function () {
            _06o7['_initInput'](_06o7['area'] = _0376p['createElement']('textarea')), _06o7['_initInput'](_06o7['input'] = _0376p['createElement']('input')), _06o7['inputContainer'] = _0376p['createElement']('div'), _06o7['inputContainer']['style']['position'] = 'absolute', _06o7['inputContainer']['style']['zIndex'] = 0x186a0, _0376p['container']['appendChild'](_06o7['inputContainer']), _06o7['inputContainer']['setPos'] = function (auc9v, cam9v) {
                _06o7['inputContainer']['style']['left'] = auc9v + 'px', _06o7['inputContainer']['style']['top'] = cam9v + 'px';
            }, jgy5e['stage']['on']('resize', null, guajk['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (p2fwir) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), aygku['_soundClass'] = lt1, aygku['_musicClass'] = lt1, window['_videoClass'] = c9kvu;
        }, guajk['_onStageResize'] = function () {
            var _06o73 = jgy5e['stage']['_canvasTransform']['identity']();
            _06o73['scale'](_0376p['width'] / y5xz['canvas']['width'] / ifrwqs['getPixelRatio'](), _0376p['height'] / y5xz['canvas']['height'] / ifrwqs['getPixelRatio']());
        }, guajk['wxinputFocus'] = function (iwrqf) {
            var sfqrwi = _06o7['inputElement']['target'];
            if (sfqrwi && !sfqrwi['editable']) return;
            biqt['window']['wx']['offKeyboardConfirm'](), biqt['window']['wx']['offKeyboardInput'](), biqt['window']['wx']['showKeyboard']({
                'defaultValue': sfqrwi['text'],
                'maxLength': sfqrwi['maxChars'],
                'multiple': sfqrwi['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (ifqw2r) {},
                'fail': function (va9k) {}
            }), biqt['window']['wx']['onKeyboardConfirm'](function (hgyak) {
                var p60r2 = hgyak ? hgyak['value'] : '';
                sfqrwi['text'] = p60r2, sfqrwi['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), biqt['window']['wx']['onKeyboardInput'](function (irqsfw) {
                var k9cau = irqsfw ? irqsfw['value'] : '';
                if (!sfqrwi['multiline']) {
                    if (k9cau['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                sfqrwi['text'] = k9cau, sfqrwi['event']('input');
            });
        }, guajk['inputEnter'] = function () {
            _06o7['inputElement']['target']['focus'] = ![];
        }, guajk['wxinputblur'] = function () {
            guajk['hideKeyboard']();
        }, guajk['hideKeyboard'] = function () {
            biqt['window']['wx']['offKeyboardConfirm'](), biqt['window']['wx']['offKeyboardInput'](), biqt['window']['wx']['hideKeyboard']({
                'success': function (fwrp62) {
                    console['log']('隐藏键盘');
                },
                'fail': function (uk9gaj) {
                    console['log']('隐藏键盘出错:' + (uk9gaj ? uk9gaj['errMsg'] : ''));
                }
            });
        }, guajk;
    }(),
        _p706 = function () {
        function ifw2q() {}
        swqbt(ifw2q, 'laya.wx.mini.MiniLoader');
        var mo9uc = ifw2q['prototype'];
        return mo9uc['load'] = function (m_v9, sbiwqr, mvca9u, c_m73, exjy5h) {
            mvca9u === void 0x0 && (mvca9u = !![]), exjy5h === void 0x0 && (exjy5h = ![]);
            var m9_vc = this;
            m9_vc['_url'] = m_v9;
            if (m_v9['indexOf']('data:image') === 0x0) m9_vc['_type'] = sbiwqr = 'image';else m9_vc['_type'] = sbiwqr || (sbiwqr = m9_vc['getTypeFromUrl'](m_v9));
            m9_vc['_cache'] = mvca9u, m9_vc['_data'] = null;
            var wrf2iq = 'ascii';
            if (m_v9['indexOf']('.fnt') != -0x1) wrf2iq = 'utf8';else sbiwqr == 'arraybuffer' && (wrf2iq = '');
            ;
            var bt81 = qsb1nt['getFileExtension'](m_v9);
            if (ifw2q['_fileTypeArr']['indexOf'](bt81) != -0x1) biqt['EnvConfig']['load']['call'](this, m_v9, sbiwqr, mvca9u, c_m73, exjy5h);else {
                if (!vcm9o['getFileInfo'](m_v9)) {
                    if (m_v9['indexOf']('layaNativeDir/') != -0x1) {
                        if (biqt['isZiYu']) {
                            var x5jehy = vcm9o['ziyuFileData'][m_v9];
                            m9_vc['onLoaded'](x5jehy);
                            return;
                        } else {
                            cosnole['log']('read read'), vcm9o['read'](m_v9, wrf2iq, new wf2(ifw2q, ifw2q['onReadNativeCallBack'], [wrf2iq, m_v9, sbiwqr, mvca9u, c_m73, exjy5h, m9_vc]));
                            return;
                        }
                    }
                    if (m9cuav['rootPath'] == '') var _com37 = m_v9;else _com37 = m_v9['split'](m9cuav['rootPath'])[0x0];
                    m_v9['indexOf']('http://') != -0x1 || m_v9['indexOf']('https://') != -0x1 ? biqt['EnvConfig']['load']['call'](m9_vc, m_v9, sbiwqr, mvca9u, c_m73, exjy5h) : vcm9o['readFile'](_com37, wrf2iq, new wf2(ifw2q, ifw2q['onReadNativeCallBack'], [wrf2iq, m_v9, sbiwqr, mvca9u, c_m73, exjy5h, m9_vc]), m_v9);
                } else biqt['EnvConfig']['load']['call'](this, m_v9, sbiwqr, mvca9u, c_m73, exjy5h);
            }
        }, mo9uc['resMgrLoad'] = function (q1tnsb, v7cmo_, haykj, _7c3m, wp2fri, yz5, ld18) {
            haykj === void 0x0 && (haykj = 0x0), _7c3m === void 0x0 && (_7c3m = ![]), wp2fri === void 0x0 && (wp2fri = ![]), yz5 === void 0x0 && (yz5 = 0x0), ld18 === void 0x0 && (ld18 = 0x3), q1tnsb['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', q1tnsb), biqt['EnvConfig']['resMgrLoad'](q1tnsb, (m73o0, hgj5yk, q2wifr) => {
                ifw2q['prototype']['resMgrLoadCallBack'](m73o0, hgj5yk, q2wifr, v7cmo_);
            }, haykj, _7c3m, wp2fri, yz5, ld18);
        }, mo9uc['resMgrLoadCallBack'] = function (p703_6, qswtbi, pf036, rwifqs) {
            console['log']('buff:::', p703_6, pf036, vcm9o['fileNativeDir'] + '///' + vcm9o['fileListName']), rwifqs(p703_6, qswtbi, pf036);
        }, mo9uc['clearRes'] = function (irbsw, kjgau) {
            kjgau === void 0x0 && (kjgau = ![]);
            var bstwq = this;
            bstwq['clearRes'](irbsw, kjgau);
            var khyaj = vcm9o['getFileInfo'](irbsw);
            if (khyaj && (irbsw['indexOf']('http://') != -0x1 || irbsw['indexOf']('https://') != -0x1)) {
                var kucv = khyaj['md5'],
                    m7_ov = vcm9o['getFileNativePath'](kucv);
                vcm9o['remove'](m7_ov);
            }
        }, ifw2q['onReadNativeCallBack'] = function (kaygjh, zhxy5, p32f6, b18lt, ibtqw, mo7c_v, _ocvm, z$exh, z5he$x) {
            b18lt === void 0x0 && (b18lt = !![]), mo7c_v === void 0x0 && (mo7c_v = ![]), z$exh === void 0x0 && (z$exh = 0x0);
            if (!z$exh) {
                var gh5yej;
                if (p32f6 == 'json' || p32f6 == 'atlas') gh5yej = biqt['getJson'](z5he$x['data']);else p32f6 == 'xml' ? gh5yej = qsb1nt['parseXMLFromString'](z5he$x['data']) : gh5yej = z5he$x['data'];
                _ocvm['onLoaded'](gh5yej), !biqt['isZiYu'] && biqt['isPosMsgYu'] && p32f6 != 'arraybuffer' && wx['postMessage']({
                    'url': zhxy5,
                    'data': gh5yej,
                    'isLoad': !![]
                });
            } else z$exh == 0x1 && biqt['EnvConfig']['load']['call'](_ocvm, zhxy5, p32f6, b18lt, ibtqw, mo7c_v);
        }, ov9_mc(ifw2q, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), ifw2q;
    }(),
        vcm9o = function (_o7m) {
        function kcau() {
            kcau['__super']['call'](this);
            ;
        }
        return swqbt(kcau, 'laya.wx.mini.MiniFileMgr', _o7m), kcau['isLoadFile'] = function (vou9m) {
            return kcau['_fileTypeArr']['indexOf'](vou9m) != -0x1 ? !![] : ![];
        }, kcau['getFileInfo'] = function (snb18) {
            var nbqsti = snb18['split']('?')[0x0],
                p63_7 = kcau['filesListObj'][nbqsti];
            if (p63_7 == null) return null;else return p63_7;
            return null;
        }, kcau['onFileUpdate'] = function (kgju9a, agvku9) {
            var v_o7cm = kgju9a['split']('/'),
                vu9k = v_o7cm[v_o7cm['length'] - 0x1],
                qw2ifr = kcau['getFileInfo'](agvku9);
            if (qw2ifr == null) kcau['onSaveFile'](agvku9, vu9k);else {
                if (qw2ifr['readyUrl'] != agvku9) kcau['remove'](vu9k, agvku9);
            }
        }, kcau['exits'] = function (stbwiq, k9agv) {
            var istbq = kcau['getFileNativePath'](stbwiq);
            kcau['fs']['getFileInfo']({
                'filePath': istbq,
                'success': function ($45xz) {
                    k9agv != null && k9agv['runWith']([0x0, $45xz]);
                },
                'fail': function (ibqtn) {
                    k9agv != null && k9agv['runWith']([0x1, ibqtn]);
                }
            });
        }, kcau['read'] = function (f0r2p, zxe$5h, wsbqir, s8t1bn) {
            zxe$5h === void 0x0 && (zxe$5h = 'ascill'), s8t1bn === void 0x0 && (s8t1bn = '');
            var vom7_;
            s8t1bn != '' ? vom7_ = kcau['getFileNativePath'](f0r2p) : vom7_ = f0r2p, kcau['fs']['readFile']({
                'filePath': vom7_,
                'encoding': zxe$5h,
                'success': function (iwqsbt) {
                    wsbqir != null && wsbqir['runWith']([0x0, iwqsbt]);
                },
                'fail': function (qif2r) {
                    if (qif2r && s8t1bn != '') kcau['down'](s8t1bn, zxe$5h, wsbqir, s8t1bn);else wsbqir != null && wsbqir['runWith']([0x1]);
                }
            });
        }, kcau['readNativeFile'] = function (lt81n, u9av) {
            kcau['fs']['readFile']({
                'filePath': lt81n,
                'encoding': '',
                'success': function (fsqi) {
                    u9av != null && u9av['runWith']([0x0]);
                },
                'fail': function (tbsn1) {
                    u9av != null && u9av['runWith']([0x1]);
                }
            });
        }, kcau['down'] = function (vm_9c, p76_, sbnqti, kg9av) {
            p76_ === void 0x0 && (p76_ = 'ascill'), kg9av === void 0x0 && (kg9av = '');
            var rw2ipf = kcau['getFileNativePath'](kg9av),
                siqbn = kcau['wxdown']({
                'url': vm_9c,
                'filePath': rw2ipf,
                'success': function (o07_) {
                    if (o07_['statusCode'] === 0xc8) kcau['readFile'](o07_['filePath'], p76_, sbnqti, kg9av);
                },
                'fail': function (yakujg) {
                    sbnqti != null && sbnqti['runWith']([0x1, yakujg]);
                }
            });
            siqbn['onProgressUpdate'](function (cuv9am) {
                sbnqti != null && sbnqti['runWith']([0x2, cuv9am['progress']]);
            });
        }, kcau['readFile'] = function (guva9, m37c_, ujg9, je5yx) {
            m37c_ === void 0x0 && (m37c_ = 'ascill'), je5yx === void 0x0 && (je5yx = ''), kcau['fs']['readFile']({
                'filePath': guva9,
                'encoding': m37c_,
                'success': function (h$5exz) {
                    if (guva9['indexOf']('http://') != -0x1 || guva9['indexOf']('https://') != -0x1) kcau['onFileUpdate'](guva9, je5yx);
                    ujg9 != null && ujg9['runWith']([0x0, h$5exz]);
                },
                'fail': function (f06p3) {
                    if (f06p3) ujg9 != null && ujg9['runWith']([0x1, f06p3]);
                }
            });
        }, kcau['downImg'] = function (ugaj9, vo9uc, fr2wp6) {
            fr2wp6 === void 0x0 && (fr2wp6 = '');
            var auk9c = kcau['wxdown']({
                'url': ugaj9,
                'success': function (uk9jg) {
                    uk9jg['statusCode'] === 0xc8 && kcau['copyFile'](uk9jg['tempFilePath'], fr2wp6, vo9uc);
                },
                'fail': function (ykg5) {
                    vo9uc != null && vo9uc['runWith']([0x1, ykg5]);
                }
            });
        }, kcau['copyFile'] = function (ocv7_m, sbqirw, cvm7o_) {
            var wfq2r = ocv7_m['split']('/'),
                $hez5 = wfq2r[wfq2r['length'] - 0x1],
                o_9cm = sbqirw['split']('?')[0x0],
                snbt8 = kcau['getFileInfo'](sbqirw),
                h5kg = kcau['getFileNativePath']($hez5);
            kcau['fs']['copyFile']({
                'srcPath': ocv7_m,
                'destPath': h5kg,
                'success': function (r0p2f) {
                    if (!snbt8) kcau['onSaveFile'](sbqirw, $hez5), cvm7o_ != null && cvm7o_['runWith']([0x0]);else {
                        if (snbt8['readyUrl'] != sbqirw) kcau['remove']($hez5, sbqirw, cvm7o_);
                    }
                },
                'fail': function (yugkj) {
                    cvm7o_ != null && cvm7o_['runWith']([0x1, yugkj]);
                }
            });
        }, kcau['getFileNativePath'] = function (omv_) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + omv_;
        }, kcau['remove'] = function (wibrs, yex5h, vucma9) {
            yex5h === void 0x0 && (yex5h = '');
            var v9aguk = kcau['getFileInfo'](yex5h),
                _7co3m = kcau['getFileNativePath'](v9aguk['md5']);
            jgy5e['loader']['clearRes'](v9aguk['readyUrl']), kcau['fs']['unlink']({
                'filePath': _7co3m,
                'success': function (auj9k) {
                    if (yex5h != '') kcau['onSaveFile'](yex5h, wibrs);
                    vucma9 != null && vucma9['runWith']([0x0]);
                },
                'fail': function (xe5yh) {}
            });
        }, kcau['onSaveFile'] = function (h$5zx, $z4ex5) {
            var m3_07o = h$5zx['split']('?')[0x0];
            kcau['filesListObj'][m3_07o] = {
                'md5': $z4ex5,
                'readyUrl': h$5zx
            }, kcau['fs']['writeFile']({
                'filePath': kcau['fileNativeDir'] + '/' + kcau['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](kcau['filesListObj']),
                'success': function (ezxyh) {
                    console['log']('写入测试测试成功：', ezxyh);
                },
                'fail': function (kcua) {
                    console['log']('写入测试测试失败：', kcua);
                }
            });
        }, kcau['existDir'] = function (wp62rf, f62prw) {
            kcau['fs']['mkdir']({
                'dirPath': wp62rf,
                'success': function (qfwrs) {
                    f62prw != null && f62prw['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (wr2qif) {
                    if (wr2qif['errMsg']['indexOf']('file already exists') != -0x1) kcau['readSync'](kcau['fileListName'], 'utf8', f62prw);else f62prw != null && f62prw['runWith']([0x1, wr2qif]);
                }
            });
        }, kcau['readSync'] = function (ez5$x4, ltn8, qbitns, gkuj9) {
            ltn8 === void 0x0 && (ltn8 = 'ascill'), gkuj9 === void 0x0 && (gkuj9 = '');
            var nld8t1 = kcau['getFileNativePath'](ez5$x4),
                kyhgj;
            try {
                kyhgj = kcau['fs']['readFileSync'](nld8t1), qbitns != null && qbitns['runWith']([0x0, { 'data': kyhgj }]);
            } catch (om73) {
                qbitns != null && qbitns['runWith']([0x1]);
            }
        }, kcau['readCache'] = function () {}, kcau['writeCache'] = function (kvag9u) {
            var j9kagu = readyUrl['split']('?')[0x0];
            kcau['filesListObj'][j9kagu] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, kcau['fs']['writeFile']({
                'filePath': kcau['fileNativeDir'] + '/' + kcau['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](kcau['filesListObj']),
                'success': function (rf2pwi) {},
                'fail': function (akujy) {}
            });
        }, kcau['setNativeFileDir'] = function (iqnbst) {
            kcau['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + iqnbst;
        }, kcau['filesListObj'] = {}, kcau['fileNativeDir'] = null, kcau['fileListName'] = 'layaairfiles.txt', kcau['ziyuFileData'] = {}, ov9_mc(kcau, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), kcau;
    }(gakjyh),
        lt1 = function (fp026r) {
        function ov_c7() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], ov_c7['__super']['call'](this), this['_sound'] = ov_c7['_createSound'](), this['_chanell'] = new x$h5z(this['_sound']);
        }
        swqbt(ov_c7, 'laya.wx.mini.MiniSound', fp026r);
        var qirfws = ov_c7['prototype'];
        return qirfws['load'] = function (ejyg5h) {
            var brsqwi = this;
            ejyg5h = m9cuav['formatURL'](ejyg5h), this['url'] = ejyg5h;
            if (ov_c7['_audioCache'][ejyg5h]) {
                this['event']('complete');
                return;
            }
            function v9_ocm() {
                if (ov_c7['_null'] != undefined) brsqwi['_sound']['onCanplay'](ov_c7['_null']), brsqwi['_sound']['onError'](ov_c7['_null']);else try {
                    brsqwi['_sound']['onCanplay'](null), brsqwi['_sound']['onError'](null), ov_c7['_null'] = null;
                } catch (f02rp6) {
                    console['warn']('[wxmini] _clearSound:' + f02rp6), brsqwi['_sound']['onCanplay'](hge), brsqwi['_sound']['onError'](hge), ov_c7['_null'] = hge;
                }
            }
            function btnl18() {
                p20f3['loaded'] = !![], p20f3['event']('complete'), ov_c7['_audioCache'][p20f3['url']] = p20f3;
            }
            function sqwbri(hkj5yg) {
                console['error']('errCode=' + hkj5yg['errCode'] + '  errMsg=' + hkj5yg['errMsg']), p20f3['event']('error');
            }
            function hge() {}
            this['_sound']['onCanplay'](btnl18), this['_sound']['onError'](sqwbri), this['_sound']['src'] = ejyg5h;
            var p20f3 = this;
        }, qirfws['play'] = function (stnbq1, hgk5) {
            stnbq1 === void 0x0 && (stnbq1 = 0x0), hgk5 === void 0x0 && (hgk5 = 0x0);
            var _o3c7, nldt8;
            if (this['url'] == aygku['_tMusic']) {
                if (!ov_c7['_musicAudio']) ov_c7['_musicAudio'] = this['_sound'];
                _o3c7 = ov_c7['_musicAudio'], nldt8 = this['_chanell'];
            } else _o3c7 = this['_sound'], nldt8 = this['_chanell'];
            return _o3c7['src'] = this['url'], _o3c7['startTime'] = 0x0, nldt8['isStopped'] && (nldt8['url'] = this['url'], nldt8['loops'] = hgk5, nldt8['startTime'] = stnbq1, nldt8['play'](), aygku['addChannel'](nldt8)), nldt8;
        }, qirfws['dispose'] = function () {
            var tb1nsq = ov_c7['_audioCache'][this['url']];
            tb1nsq && (tb1nsq['src'] = '', delete ov_c7['_audioCache'][this['url']]);
        }, qtibws(0x0, qirfws, 'duration', function () {
            return this['_sound']['duration'];
        }), ov_c7['_createSound'] = function () {
            ov_c7['_id']++;
            var qbwis = biqt['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return qbwis;
        }, ov_c7['_musicAudio'] = null, ov_c7['_id'] = 0x0, ov_c7['_audioCache'] = {}, ov_c7['_null'] = undefined, ov_c7;
    }(gakjyh),
        x$h5z = function (c9kuv) {
        function kca(z54e) {
            this['_audio'] = null, this['_onEnd'] = null, kca['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = z54e, this['_onEnd'] = qsb1nt['bind'](this['__onEnd'], this), z54e['onEnded'](this['_onEnd']);
        }
        swqbt(kca, 'laya.wx.mini.MiniSoundChannel', c9kuv);
        var ibrw = kca['prototype'];
        return ibrw['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (jgy5e['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, ibrw['__onNull'] = function () {}, ibrw['play'] = function () {
            this['isStopped'] = ![], aygku['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, ibrw['stop'] = function () {
            this['isStopped'] = !![], aygku['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, ibrw['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, ibrw['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], aygku['addChannel'](this), this['_audio']['play']();
        }, qtibws(0x0, ibrw, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), qtibws(0x0, ibrw, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), qtibws(0x0, ibrw, 'volume', function () {
            return 0x1;
        }, function (mv9o_) {}), kca['_null'] = undefined, kca;
    }(iwqsbr),
        c9kvu = function () {
        function cuomv9() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = biqt['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        swqbt(cuomv9, 'laya.wx.mini.MiniVideo');
        var ip2wfr = cuomv9['prototype'];
        return ip2wfr['on'] = function (oc_mv9, m9vco_, zxe$h) {
            if (oc_mv9 == 'loadedmetadata') this['onPlayFunc'] = zxe$h['bind'](m9vco_), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else oc_mv9 == 'ended' && (this['onEndedFunC'] = zxe$h['bind'](m9vco_), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, ip2wfr['onTimeUpdateFunc'] = function (tb8s) {
            this['position'] = tb8s['position'], this['_duration'] = tb8s['duration'];
        }, ip2wfr['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, ip2wfr['onended'] = function (hjky5, frwsq) {
            this['onEndedFunC'] = frwsq['bind'](hjky5), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, ip2wfr['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, ip2wfr['off'] = function (_p07, muc, yex5zh) {
            if (_p07 == 'loadedmetadata') this['onPlayFunc'] = yex5zh['bind'](muc), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else _p07 == 'ended' && (this['onEndedFunC'] = yex5zh['bind'](muc), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, ip2wfr['load'] = function (_30p) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = _30p;
        }, ip2wfr['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, ip2wfr['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, ip2wfr['size'] = function (lndt1, nd1l) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = lndt1, this['videoElement']['height'] = nd1l;
        }, ip2wfr['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, ip2wfr['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, qtibws(0x0, ip2wfr, 'duration', function () {
            return this['_duration'];
        }), qtibws(0x0, ip2wfr, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (rbsiw) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = rbsiw;
        }), qtibws(0x0, ip2wfr, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), qtibws(0x0, ip2wfr, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), qtibws(0x0, ip2wfr, 'ended', function () {
            return this['videoend'];
        }), qtibws(0x0, ip2wfr, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (c9vuma) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = c9vuma;
        }), qtibws(0x0, ip2wfr, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (xz5yeh) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = xz5yeh;
        }), qtibws(0x0, ip2wfr, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (lntb) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = lntb;
        }), qtibws(0x0, ip2wfr, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), qtibws(0x0, ip2wfr, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (bt8sn) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = bt8sn;
        }), qtibws(0x0, ip2wfr, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (o7mcv) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = o7mcv;
        }), qtibws(0x0, ip2wfr, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), qtibws(0x0, ip2wfr, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (kayhj) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = kayhj;
        }), qtibws(0x0, ip2wfr, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (gy5jkh) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = gy5jkh;
        }), qtibws(0x0, ip2wfr, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (mvc9o_) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = mvc9o_;
        }), cuomv9;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var f26p0 in Laya) {
        var kg9uva = Laya[f26p0];
        kg9uva && kg9uva['__isclass'] && (exports[f26p0] = kg9uva);
    }
});