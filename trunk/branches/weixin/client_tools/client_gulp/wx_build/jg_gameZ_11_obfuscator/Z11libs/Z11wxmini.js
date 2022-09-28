var B = wx.$z;
(function (window, document, x81d6) {
    var zmd9f = x81d6['un'],
        is7b = x81d6['uns'],
        n_h0 = x81d6['static'],
        rgse = x81d6['class'],
        ibo7s = x81d6['getset'],
        h0mfw = x81d6['__newvec'],
        x613 = laya['utils']['Browser'],
        uir = laya['events']['Event'],
        ja_gq = laya['events']['EventDispatcher'],
        egro_j = laya['resource']['HTMLImage'],
        uirosj = laya['utils']['Handler'],
        px368 = laya['display']['Input'],
        iou = laya['net']['Loader'],
        xd3168 = laya['maths']['Matrix'],
        tly$25 = laya['renders']['Render'],
        b5iu7s = laya['utils']['RunDriver'],
        pk1x = laya['media']['Sound'],
        _jea = laya['media']['SoundChannel'],
        a0n = laya['media']['SoundManager'],
        sgrjoe = laya['display']['Stage'],
        zfwhm0 = laya['net']['URL'],
        qamn0 = laya['utils']['Utils'],
        qnh0 = function () {
        function y5b7i() {}
        return rgse(y5b7i, 'laya.wx.mini.MiniAdpter'), y5b7i['getJson'] = function (jgra_) {
            return JSON['parse'](jgra_);
        }, y5b7i['init'] = function (i5yu7b, jouri) {
            i5yu7b === void 0x0 && (i5yu7b = ![]), jouri === void 0x0 && (jouri = ![]);
            if (y5b7i['_inited']) return;
            y5b7i['window'] = window;
            if (y5b7i['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            y5b7i['_inited'] = !![], y5b7i['isZiYu'] = jouri, y5b7i['isPosMsgYu'] = i5yu7b, y5b7i['EnvConfig'] = {}, !y5b7i['isZiYu'] && (d3f9zw['setNativeFileDir']('/layaairGame'), d3f9zw['existDir'](d3f9zw['fileNativeDir'], uirosj['create'](y5b7i, y5b7i['onMkdirCallBack']))), y5b7i['window']['focus'] = function () {}, x81d6['getUrlPath'] = function () {}, y5b7i['window']['logtime'] = function (tlvy$) {}, y5b7i['window']['alertTimeLog'] = function (l2t5) {}, y5b7i['window']['resetShareInfo'] = function () {}, y5b7i['window']['CanvasRenderingContext2D'] = function () {}, y5b7i['window']['CanvasRenderingContext2D']['prototype'] = y5b7i['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], y5b7i['window']['document']['body']['appendChild'] = function () {}, y5b7i['EnvConfig']['pixelRatioInt'] = 0x0, b5iu7s['getPixelRatio'] = y5b7i['pixelRatio'], y5b7i['_preCreateElement'] = x613['createElement'], x613['createElement'] = y5b7i['createElement'], b5iu7s['createShaderCondition'] = y5b7i['createShaderCondition'], qamn0['parseXMLFromString'] = y5b7i['parseXMLFromString'], px368['_createInputElement'] = w9mfz0['_createInputElement'], y5b7i['EnvConfig']['load'] = iou['prototype']['load'], iou['prototype']['load'] = i7bu5y['prototype']['load'], y5b7i['isZiYu'] && i5yu7b && wx['onMessage'](function (nh0_qa) {
                nh0_qa['isLoad'] && (d3f9zw['ziyuFileData'][nh0_qa['url']] = nh0_qa['data']);
            });
        }, y5b7i['onMkdirCallBack'] = function (rogej_, gj_ore) {
            if (!rogej_) d3f9zw['filesListObj'] = JSON['parse'](gj_ore['data']);
        }, y5b7i['pixelRatio'] = function () {
            if (!y5b7i['EnvConfig']['pixelRatioInt']) try {
                var fd961 = wx['getSystemInfoSync']();
                return y5b7i['EnvConfig']['pixelRatioInt'] = fd961['pixelRatio'], fd961 = fd961, fd961['pixelRatio'];
            } catch (enga_q) {}
            return y5b7i['EnvConfig']['pixelRatioInt'];
        }, y5b7i['createElement'] = function (si7ru) {
            if (si7ru == 'canvas') {
                var h0wnz;
                return y5b7i['idx'] == 0x1 ? y5b7i['isZiYu'] ? (h0wnz = sharedCanvas, h0wnz['style'] = {}) : h0wnz = window['canvas'] : h0wnz = window['wx']['createCanvas'](), y5b7i['idx']++, h0wnz;
            } else {
                if (si7ru == 'textarea' || si7ru == 'input') return y5b7i['onCreateInput'](si7ru);else {
                    if (si7ru == 'div') {
                        var yb57t2 = y5b7i['_preCreateElement'](si7ru);
                        return yb57t2['contains'] = function (suio7r) {
                            return null;
                        }, yb57t2['removeChild'] = function (eahq_n) {}, yb57t2;
                    } else return y5b7i['_preCreateElement'](si7ru);
                }
            }
        }, y5b7i['onCreateInput'] = function (eaj_) {
            var osrjui = y5b7i['_preCreateElement'](eaj_);
            return osrjui['focus'] = w9mfz0['wxinputFocus'], osrjui['blur'] = w9mfz0['wxinputblur'], osrjui['style'] = {}, osrjui['value'] = 0x0, osrjui['parentElement'] = {}, osrjui['placeholder'] = {}, osrjui['type'] = {}, osrjui['setColor'] = function (qa_gn) {}, osrjui['setType'] = function (g_arej) {}, osrjui['setFontFace'] = function (wz90f) {}, osrjui['addEventListener'] = function (rgsjou) {}, osrjui['contains'] = function (ea_qh) {
                return null;
            }, osrjui['removeChild'] = function (en_qh) {}, osrjui;
        }, y5b7i['createShaderCondition'] = function (ui75y) {
            var i57y = this,
                k8p14 = function () {
                var hq = ui75y;
                return i57y[ui75y['replace']('this.', '')];
            };
            return k8p14;
        }, y5b7i['EnvConfig'] = null, y5b7i['window'] = null, y5b7i['_preCreateElement'] = null, y5b7i['_inited'] = ![], y5b7i['wxRequest'] = null, y5b7i['systemInfo'] = null, y5b7i['version'] = '0.0.1', y5b7i['isZiYu'] = ![], y5b7i['isPosMsgYu'] = ![], y5b7i['parseXMLFromString'] = function (u57by) {
            var hma0, ybui7;
            u57by = u57by['replace'](/>\s+</g, '><');
            try {
                hma0 = new window['Parser']['DOMParser']()['parseFromString'](u57by, 'text/xml');
            } catch (jga_q) {
                throw '需要引入xml解析库文件';
            }
            return hma0;
        }, y5b7i['idx'] = 0x1, y5b7i;
    }(),
        d61x38 = function () {
        function f90mwz() {}
        rgse(f90mwz, 'laya.wx.mini.MiniImage');
        var i7s5 = f90mwz['prototype'];
        return i7s5['_loadImage'] = function (y2b57) {
            var qnga_ = this,
                hnq0_a = ![];
            y2b57['indexOf']('layaNativeDir/') == -0x1 && (hnq0_a = !![], y2b57 = zfwhm0['formatURL'](y2b57));
            if (!d3f9zw['getFileInfo'](y2b57)) {
                if (y2b57['indexOf']('http://') != -0x1 || y2b57['indexOf']('https://') != -0x1) d3f9zw['downImg'](y2b57, new uirosj(f90mwz, f90mwz['onDownImgCallBack'], [y2b57, qnga_]), y2b57);else f90mwz['onCreateImage'](y2b57, qnga_, !![]);
            } else f90mwz['onCreateImage'](y2b57, qnga_, !hnq0_a);
        }, f90mwz['onDownImgCallBack'] = function (e_gna, w0hmz, suo7b) {
            if (!suo7b) f90mwz['onCreateImage'](e_gna, w0hmz);else w0hmz['onError'](null);
        }, f90mwz['onCreateImage'] = function (ybiu, qh_ane, usob) {
            usob === void 0x0 && (usob = ![]);
            var k4p81x;
            if (!usob) {
                var $ty5 = d3f9zw['getFileInfo'](ybiu),
                    fd9631 = $ty5['md5'];
                k4p81x = d3f9zw['getFileNativePath'](fd9631);
            } else k4p81x = ybiu;
            if (qh_ane['imgCache'] == null) qh_ane['imgCache'] = {};
            var i7o;
            function f9d316() {
                i7o['onload'] = null, i7o['onerror'] = null, delete qh_ane['imgCache'][ybiu];
            }
            ;
            var q_ejga = function () {
                f9d316(), qh_ane['onLoaded'](i7o);
            },
                jiosr = function () {
                f9d316(), qh_ane['event']('error', 'Load image failed');
            };
            qh_ane['_type'] == 'nativeimage' ? (i7o = new x613['window']['Image'](), i7o['crossOrigin'] = '', i7o['onload'] = q_ejga, i7o['onerror'] = jiosr, i7o['src'] = k4p81x, qh_ane['imgCache'][ybiu] = i7o) : new egro_j['create'](k4p81x, {
                'onload': q_ejga,
                'onerror': jiosr,
                'onCreate': function (t527) {
                    i7o = t527, qh_ane['imgCache'][ybiu] = t527;
                }
            });
        }, f90mwz;
    }(),
        w9mfz0 = function () {
        function uo7isr() {}
        return rgse(uo7isr, 'laya.wx.mini.MiniInput'), uo7isr['_createInputElement'] = function () {
            px368['_initInput'](px368['area'] = x613['createElement']('textarea')), px368['_initInput'](px368['input'] = x613['createElement']('input')), px368['inputContainer'] = x613['createElement']('div'), px368['inputContainer']['style']['position'] = 'absolute', px368['inputContainer']['style']['zIndex'] = 0x186a0, x613['container']['appendChild'](px368['inputContainer']), px368['inputContainer']['setPos'] = function (hae_qn, zfm9) {
                px368['inputContainer']['style']['left'] = hae_qn + 'px', px368['inputContainer']['style']['top'] = zfm9 + 'px';
            }, x81d6['stage']['on']('resize', null, uo7isr['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (p8xk1) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), a0n['_soundClass'] = p461x8, a0n['_musicClass'] = p461x8, window['_videoClass'] = p683;
        }, uo7isr['_onStageResize'] = function () {
            var our7si = x81d6['stage']['_canvasTransform']['identity']();
            our7si['scale'](x613['width'] / tly$25['canvas']['width'] / b5iu7s['getPixelRatio'](), x613['height'] / tly$25['canvas']['height'] / b5iu7s['getPixelRatio']());
        }, uo7isr['wxinputFocus'] = function (rgejs) {
            var f63z = px368['inputElement']['target'];
            if (f63z && !f63z['editable']) return;
            qnh0['window']['wx']['offKeyboardConfirm'](), qnh0['window']['wx']['offKeyboardInput'](), qnh0['window']['wx']['showKeyboard']({
                'defaultValue': f63z['text'],
                'maxLength': f63z['maxChars'],
                'multiple': f63z['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (jsrgeo) {},
                'fail': function (zm0nhw) {}
            }), qnh0['window']['wx']['onKeyboardConfirm'](function (agen) {
                var yt2v$ = agen ? agen['value'] : '';
                f63z['text'] = yt2v$, f63z['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), qnh0['window']['wx']['onKeyboardInput'](function (x6481p) {
                var iyb7u5 = x6481p ? x6481p['value'] : '';
                if (!f63z['multiline']) {
                    if (iyb7u5['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                f63z['text'] = iyb7u5, f63z['event']('input');
            });
        }, uo7isr['inputEnter'] = function () {
            px368['inputElement']['target']['focus'] = ![];
        }, uo7isr['wxinputblur'] = function () {
            uo7isr['hideKeyboard']();
        }, uo7isr['hideKeyboard'] = function () {
            qnh0['window']['wx']['offKeyboardConfirm'](), qnh0['window']['wx']['offKeyboardInput'](), qnh0['window']['wx']['hideKeyboard']({
                'success': function (a0hn) {
                    console['log']('隐藏键盘');
                },
                'fail': function (qaje) {
                    console['log']('隐藏键盘出错:' + (qaje ? qaje['errMsg'] : ''));
                }
            });
        }, uo7isr;
    }(),
        i7bu5y = function () {
        function gjuos() {}
        rgse(gjuos, 'laya.wx.mini.MiniLoader');
        var eojg = gjuos['prototype'];
        return eojg['load'] = function (w90mz, y$b2t, ly2$, srjguo, isruo) {
            ly2$ === void 0x0 && (ly2$ = !![]), isruo === void 0x0 && (isruo = ![]);
            var orseg = this;
            orseg['_url'] = w90mz;
            if (w90mz['indexOf']('data:image') === 0x0) orseg['_type'] = y$b2t = 'image';else orseg['_type'] = y$b2t || (y$b2t = orseg['getTypeFromUrl'](w90mz));
            orseg['_cache'] = ly2$, orseg['_data'] = null;
            var o7is = 'ascii';
            if (w90mz['indexOf']('.fnt') != -0x1) o7is = 'utf8';else y$b2t == 'arraybuffer' && (o7is = '');
            ;
            var iour7s = qamn0['getFileExtension'](w90mz);
            if (gjuos['_fileTypeArr']['indexOf'](iour7s) != -0x1) qnh0['EnvConfig']['load']['call'](this, w90mz, y$b2t, ly2$, srjguo, isruo);else {
                if (!d3f9zw['getFileInfo'](w90mz)) {
                    if (w90mz['indexOf']('layaNativeDir/') != -0x1) {
                        if (qnh0['isZiYu']) {
                            var zmw0h = d3f9zw['ziyuFileData'][w90mz];
                            orseg['onLoaded'](zmw0h);
                            return;
                        } else {
                            cosnole['log']('read read'), d3f9zw['read'](w90mz, o7is, new uirosj(gjuos, gjuos['onReadNativeCallBack'], [o7is, w90mz, y$b2t, ly2$, srjguo, isruo, orseg]));
                            return;
                        }
                    }
                    if (zfwhm0['rootPath'] == '') var wzfd39 = w90mz;else wzfd39 = w90mz['split'](zfwhm0['rootPath'])[0x0];
                    w90mz['indexOf']('http://') != -0x1 || w90mz['indexOf']('https://') != -0x1 ? qnh0['EnvConfig']['load']['call'](orseg, w90mz, y$b2t, ly2$, srjguo, isruo) : d3f9zw['readFile'](wzfd39, o7is, new uirosj(gjuos, gjuos['onReadNativeCallBack'], [o7is, w90mz, y$b2t, ly2$, srjguo, isruo, orseg]), w90mz);
                } else qnh0['EnvConfig']['load']['call'](this, w90mz, y$b2t, ly2$, srjguo, isruo);
            }
        }, eojg['resMgrLoad'] = function (rjsuio, sjurio, u7rs, nmhq0, a_nh0q, xpk18, d369fz) {
            u7rs === void 0x0 && (u7rs = 0x0), nmhq0 === void 0x0 && (nmhq0 = ![]), a_nh0q === void 0x0 && (a_nh0q = ![]), xpk18 === void 0x0 && (xpk18 = 0x0), d369fz === void 0x0 && (d369fz = 0x3), rjsuio['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', rjsuio), qnh0['EnvConfig']['resMgrLoad'](rjsuio, (p146x, n_ehq, lvt$) => {
                gjuos['prototype']['resMgrLoadCallBack'](p146x, n_ehq, lvt$, sjurio);
            }, u7rs, nmhq0, a_nh0q, xpk18, d369fz);
        }, eojg['resMgrLoadCallBack'] = function (rjousi, xp841, e_ah, aqj_eg) {
            console['log']('buff:::', rjousi, e_ah, d3f9zw['fileNativeDir'] + '///' + d3f9zw['fileListName']), aqj_eg(rjousi, xp841, e_ah);
        }, eojg['clearRes'] = function (ahn0m, ouibs7) {
            ouibs7 === void 0x0 && (ouibs7 = ![]);
            var _anh0q = this;
            _anh0q['clearRes'](ahn0m, ouibs7);
            var haq0_ = d3f9zw['getFileInfo'](ahn0m);
            if (haq0_ && (ahn0m['indexOf']('http://') != -0x1 || ahn0m['indexOf']('https://') != -0x1)) {
                var iu7or = haq0_['md5'],
                    e_aqgj = d3f9zw['getFileNativePath'](iu7or);
                d3f9zw['remove'](e_aqgj);
            }
        }, gjuos['onReadNativeCallBack'] = function (q_ahn0, wdz9f3, fd9163, hmf0z, w9zmf, y2tlv, $yt2v, ty72b5, jroge) {
            hmf0z === void 0x0 && (hmf0z = !![]), y2tlv === void 0x0 && (y2tlv = ![]), ty72b5 === void 0x0 && (ty72b5 = 0x0);
            if (!ty72b5) {
                var tb25y$;
                if (fd9163 == 'json' || fd9163 == 'atlas') tb25y$ = qnh0['getJson'](jroge['data']);else fd9163 == 'xml' ? tb25y$ = qamn0['parseXMLFromString'](jroge['data']) : tb25y$ = jroge['data'];
                $yt2v['onLoaded'](tb25y$), !qnh0['isZiYu'] && qnh0['isPosMsgYu'] && fd9163 != 'arraybuffer' && wx['postMessage']({
                    'url': wdz9f3,
                    'data': tb25y$,
                    'isLoad': !![]
                });
            } else ty72b5 == 0x1 && qnh0['EnvConfig']['load']['call']($yt2v, wdz9f3, fd9163, hmf0z, w9zmf, y2tlv);
        }, n_h0(gjuos, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), gjuos;
    }(),
        d3f9zw = function (h_qnea) {
        function p86x14() {
            p86x14['__super']['call'](this);
            ;
        }
        return rgse(p86x14, 'laya.wx.mini.MiniFileMgr', h_qnea), p86x14['isLoadFile'] = function (uo7isb) {
            return p86x14['_fileTypeArr']['indexOf'](uo7isb) != -0x1 ? !![] : ![];
        }, p86x14['getFileInfo'] = function (sogurj) {
            var _0ahnq = sogurj['split']('?')[0x0],
                i7y5ub = p86x14['filesListObj'][_0ahnq];
            if (i7y5ub == null) return null;else return i7y5ub;
            return null;
        }, p86x14['onFileUpdate'] = function (hz0mf, $ly2vt) {
            var hq0nwm = hz0mf['split']('/'),
                d1863 = hq0nwm[hq0nwm['length'] - 0x1],
                v2$ylt = p86x14['getFileInfo']($ly2vt);
            if (v2$ylt == null) p86x14['onSaveFile']($ly2vt, d1863);else {
                if (v2$ylt['readyUrl'] != $ly2vt) p86x14['remove'](d1863, $ly2vt);
            }
        }, p86x14['exits'] = function (f31, ahqn_0) {
            var nah_q0 = p86x14['getFileNativePath'](f31);
            p86x14['fs']['getFileInfo']({
                'filePath': nah_q0,
                'success': function (ha0mnq) {
                    ahqn_0 != null && ahqn_0['runWith']([0x0, ha0mnq]);
                },
                'fail': function (bi7su5) {
                    ahqn_0 != null && ahqn_0['runWith']([0x1, bi7su5]);
                }
            });
        }, p86x14['read'] = function (w0nhz, isour, rsjiou, jserg) {
            isour === void 0x0 && (isour = 'ascill'), jserg === void 0x0 && (jserg = '');
            var ibuso;
            jserg != '' ? ibuso = p86x14['getFileNativePath'](w0nhz) : ibuso = w0nhz, p86x14['fs']['readFile']({
                'filePath': ibuso,
                'encoding': isour,
                'success': function (d9f3wz) {
                    rsjiou != null && rsjiou['runWith']([0x0, d9f3wz]);
                },
                'fail': function (n_geqa) {
                    if (n_geqa && jserg != '') p86x14['down'](jserg, isour, rsjiou, jserg);else rsjiou != null && rsjiou['runWith']([0x1]);
                }
            });
        }, p86x14['readNativeFile'] = function (ajq_, uorgjs) {
            p86x14['fs']['readFile']({
                'filePath': ajq_,
                'encoding': '',
                'success': function ($t2by) {
                    uorgjs != null && uorgjs['runWith']([0x0]);
                },
                'fail': function (w0hmn) {
                    uorgjs != null && uorgjs['runWith']([0x1]);
                }
            });
        }, p86x14['down'] = function (qneag_, n0_haq, a_egjr, p168x) {
            n0_haq === void 0x0 && (n0_haq = 'ascill'), p168x === void 0x0 && (p168x = '');
            var x48p1k = p86x14['getFileNativePath'](p168x),
                erosjg = p86x14['wxdown']({
                'url': qneag_,
                'filePath': x48p1k,
                'success': function (i7su5b) {
                    if (i7su5b['statusCode'] === 0xc8) p86x14['readFile'](i7su5b['filePath'], n0_haq, a_egjr, p168x);
                },
                'fail': function (_0anhq) {
                    a_egjr != null && a_egjr['runWith']([0x1, _0anhq]);
                }
            });
            erosjg['onProgressUpdate'](function (jgsuro) {
                a_egjr != null && a_egjr['runWith']([0x2, jgsuro['progress']]);
            });
        }, p86x14['readFile'] = function (i57u, zfd369, dz9fw3, ori7s) {
            zfd369 === void 0x0 && (zfd369 = 'ascill'), ori7s === void 0x0 && (ori7s = ''), p86x14['fs']['readFile']({
                'filePath': i57u,
                'encoding': zfd369,
                'success': function (yuib57) {
                    if (i57u['indexOf']('http://') != -0x1 || i57u['indexOf']('https://') != -0x1) p86x14['onFileUpdate'](i57u, ori7s);
                    dz9fw3 != null && dz9fw3['runWith']([0x0, yuib57]);
                },
                'fail': function (px6184) {
                    if (px6184) dz9fw3 != null && dz9fw3['runWith']([0x1, px6184]);
                }
            });
        }, p86x14['downImg'] = function (gnqe, bu7y5, sjgruo) {
            sjgruo === void 0x0 && (sjgruo = '');
            var gsore = p86x14['wxdown']({
                'url': gnqe,
                'success': function (b$yt5) {
                    b$yt5['statusCode'] === 0xc8 && p86x14['copyFile'](b$yt5['tempFilePath'], sjgruo, bu7y5);
                },
                'fail': function (ah_qe) {
                    bu7y5 != null && bu7y5['runWith']([0x1, ah_qe]);
                }
            });
        }, p86x14['copyFile'] = function (ogjre_, ytl5$, f9m) {
            var hm0wzf = ogjre_['split']('/'),
                sgoerj = hm0wzf[hm0wzf['length'] - 0x1],
                qwn0mh = ytl5$['split']('?')[0x0],
                ea_qhn = p86x14['getFileInfo'](ytl5$),
                hnea_q = p86x14['getFileNativePath'](sgoerj);
            p86x14['fs']['copyFile']({
                'srcPath': ogjre_,
                'destPath': hnea_q,
                'success': function (egra_) {
                    if (!ea_qhn) p86x14['onSaveFile'](ytl5$, sgoerj), f9m != null && f9m['runWith']([0x0]);else {
                        if (ea_qhn['readyUrl'] != ytl5$) p86x14['remove'](sgoerj, ytl5$, f9m);
                    }
                },
                'fail': function (vty2) {
                    f9m != null && f9m['runWith']([0x1, vty2]);
                }
            });
        }, p86x14['getFileNativePath'] = function (yv$) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + yv$;
        }, p86x14['remove'] = function (ursoij, qn_a0, zd639f) {
            qn_a0 === void 0x0 && (qn_a0 = '');
            var b7yt2 = p86x14['getFileInfo'](qn_a0),
                mfwz0h = p86x14['getFileNativePath'](b7yt2['md5']);
            x81d6['loader']['clearRes'](b7yt2['readyUrl']), p86x14['fs']['unlink']({
                'filePath': mfwz0h,
                'success': function (hwnz0m) {
                    if (qn_a0 != '') p86x14['onSaveFile'](qn_a0, ursoij);
                    zd639f != null && zd639f['runWith']([0x0]);
                },
                'fail': function (reog_j) {}
            });
        }, p86x14['onSaveFile'] = function (f9dzwm, dz9mw) {
            var ib5yu7 = f9dzwm['split']('?')[0x0];
            p86x14['filesListObj'][ib5yu7] = {
                'md5': dz9mw,
                'readyUrl': f9dzwm
            }, p86x14['fs']['writeFile']({
                'filePath': p86x14['fileNativeDir'] + '/' + p86x14['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](p86x14['filesListObj']),
                'success': function (soiju) {
                    console['log']('写入测试测试成功：', soiju);
                },
                'fail': function (fmwhz) {
                    console['log']('写入测试测试失败：', fmwhz);
                }
            });
        }, p86x14['existDir'] = function (ro7u, jursg) {
            p86x14['fs']['mkdir']({
                'dirPath': ro7u,
                'success': function (x163d) {
                    jursg != null && jursg['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (h0wnzm) {
                    if (h0wnzm['errMsg']['indexOf']('file already exists') != -0x1) p86x14['readSync'](p86x14['fileListName'], 'utf8', jursg);else jursg != null && jursg['runWith']([0x1, h0wnzm]);
                }
            });
        }, p86x14['readSync'] = function (md9w, $y2l5t, b$5ty2, u7i5bs) {
            $y2l5t === void 0x0 && ($y2l5t = 'ascill'), u7i5bs === void 0x0 && (u7i5bs = '');
            var g_raej = p86x14['getFileNativePath'](md9w),
                r_gje;
            try {
                r_gje = p86x14['fs']['readFileSync'](g_raej), b$5ty2 != null && b$5ty2['runWith']([0x0, { 'data': r_gje }]);
            } catch (maqhn0) {
                b$5ty2 != null && b$5ty2['runWith']([0x1]);
            }
        }, p86x14['readCache'] = function () {}, p86x14['writeCache'] = function (l$t25y) {
            var p6481 = readyUrl['split']('?')[0x0];
            p86x14['filesListObj'][p6481] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, p86x14['fs']['writeFile']({
                'filePath': p86x14['fileNativeDir'] + '/' + p86x14['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](p86x14['filesListObj']),
                'success': function (os7bui) {},
                'fail': function (osrugj) {}
            });
        }, p86x14['setNativeFileDir'] = function (rjsio) {
            p86x14['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rjsio;
        }, p86x14['filesListObj'] = {}, p86x14['fileNativeDir'] = null, p86x14['fileListName'] = 'layaairfiles.txt', p86x14['ziyuFileData'] = {}, n_h0(p86x14, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), p86x14;
    }(ja_gq),
        p461x8 = function (yvlt$2) {
        function jusrio() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], jusrio['__super']['call'](this), this['_sound'] = jusrio['_createSound'](), this['_chanell'] = new ea_qgn(this['_sound']);
        }
        rgse(jusrio, 'laya.wx.mini.MiniSound', yvlt$2);
        var joursg = jusrio['prototype'];
        return joursg['load'] = function (aq0hmn) {
            var yt2$v = this;
            aq0hmn = zfwhm0['formatURL'](aq0hmn), this['url'] = aq0hmn;
            if (jusrio['_audioCache'][aq0hmn]) {
                this['event']('complete');
                return;
            }
            function qhea_n() {
                if (jusrio['_null'] != undefined) yt2$v['_sound']['onCanplay'](jusrio['_null']), yt2$v['_sound']['onError'](jusrio['_null']);else try {
                    yt2$v['_sound']['onCanplay'](null), yt2$v['_sound']['onError'](null), jusrio['_null'] = null;
                } catch (y$2lvt) {
                    console['warn']('[wxmini] _clearSound:' + y$2lvt), yt2$v['_sound']['onCanplay']($5l2t), yt2$v['_sound']['onError']($5l2t), jusrio['_null'] = $5l2t;
                }
            }
            function mnq0h() {
                p48x6['loaded'] = !![], p48x6['event']('complete'), jusrio['_audioCache'][p48x6['url']] = p48x6;
            }
            function _ehnq(iros) {
                console['error']('errCode=' + iros['errCode'] + '  errMsg=' + iros['errMsg']), p48x6['event']('error');
            }
            function $5l2t() {}
            this['_sound']['onCanplay'](mnq0h), this['_sound']['onError'](_ehnq), this['_sound']['src'] = aq0hmn;
            var p48x6 = this;
        }, joursg['play'] = function (d3zw9, fdw9z3) {
            d3zw9 === void 0x0 && (d3zw9 = 0x0), fdw9z3 === void 0x0 && (fdw9z3 = 0x0);
            var josgr, uijsro;
            if (this['url'] == a0n['_tMusic']) {
                if (!jusrio['_musicAudio']) jusrio['_musicAudio'] = this['_sound'];
                josgr = jusrio['_musicAudio'], uijsro = this['_chanell'];
            } else josgr = this['_sound'], uijsro = this['_chanell'];
            return josgr['src'] = this['url'], josgr['startTime'] = 0x0, uijsro['isStopped'] && (uijsro['url'] = this['url'], uijsro['loops'] = fdw9z3, uijsro['startTime'] = d3zw9, uijsro['play'](), a0n['addChannel'](uijsro)), uijsro;
        }, joursg['dispose'] = function () {
            var mwnhq0 = jusrio['_audioCache'][this['url']];
            mwnhq0 && (mwnhq0['src'] = '', delete jusrio['_audioCache'][this['url']]);
        }, ibo7s(0x0, joursg, 'duration', function () {
            return this['_sound']['duration'];
        }), jusrio['_createSound'] = function () {
            jusrio['_id']++;
            var _eqahn = qnh0['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return _eqahn;
        }, jusrio['_musicAudio'] = null, jusrio['_id'] = 0x0, jusrio['_audioCache'] = {}, jusrio['_null'] = undefined, jusrio;
    }(ja_gq),
        ea_qgn = function (f39d16) {
        function ea_gr(zwfd9m) {
            this['_audio'] = null, this['_onEnd'] = null, ea_gr['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = zwfd9m, this['_onEnd'] = qamn0['bind'](this['__onEnd'], this), zwfd9m['onEnded'](this['_onEnd']);
        }
        rgse(ea_gr, 'laya.wx.mini.MiniSoundChannel', f39d16);
        var ourjs = ea_gr['prototype'];
        return ourjs['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (x81d6['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, ourjs['__onNull'] = function () {}, ourjs['play'] = function () {
            this['isStopped'] = ![], a0n['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, ourjs['stop'] = function () {
            this['isStopped'] = !![], a0n['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, ourjs['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, ourjs['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], a0n['addChannel'](this), this['_audio']['play']();
        }, ibo7s(0x0, ourjs, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), ibo7s(0x0, ourjs, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), ibo7s(0x0, ourjs, 'volume', function () {
            return 0x1;
        }, function (tb5y$2) {}), ea_gr['_null'] = undefined, ea_gr;
    }(_jea),
        p683 = function () {
        function age_nq() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = qnh0['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        rgse(age_nq, 'laya.wx.mini.MiniVideo');
        var zw93df = age_nq['prototype'];
        return zw93df['on'] = function (hwzf0, $b5t2y, uori7s) {
            if (hwzf0 == 'loadedmetadata') this['onPlayFunc'] = uori7s['bind']($b5t2y), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else hwzf0 == 'ended' && (this['onEndedFunC'] = uori7s['bind']($b5t2y), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, zw93df['onTimeUpdateFunc'] = function (_arjge) {
            this['position'] = _arjge['position'], this['_duration'] = _arjge['duration'];
        }, zw93df['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, zw93df['onended'] = function (aqmn0h, bt5$y) {
            this['onEndedFunC'] = bt5$y['bind'](aqmn0h), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, zw93df['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, zw93df['off'] = function (z9f3, aqne_, l$5yt2) {
            if (z9f3 == 'loadedmetadata') this['onPlayFunc'] = l$5yt2['bind'](aqne_), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else z9f3 == 'ended' && (this['onEndedFunC'] = l$5yt2['bind'](aqne_), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, zw93df['load'] = function (pk41x8) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = pk41x8;
        }, zw93df['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, zw93df['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, zw93df['size'] = function (mz0wn, lt$y5) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = mz0wn, this['videoElement']['height'] = lt$y5;
        }, zw93df['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, zw93df['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, ibo7s(0x0, zw93df, 'duration', function () {
            return this['_duration'];
        }), ibo7s(0x0, zw93df, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (p6x38) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = p6x38;
        }), ibo7s(0x0, zw93df, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), ibo7s(0x0, zw93df, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), ibo7s(0x0, zw93df, 'ended', function () {
            return this['videoend'];
        }), ibo7s(0x0, zw93df, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (b5ty2$) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = b5ty2$;
        }), ibo7s(0x0, zw93df, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (yvtl$2) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = yvtl$2;
        }), ibo7s(0x0, zw93df, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (orgje_) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = orgje_;
        }), ibo7s(0x0, zw93df, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), ibo7s(0x0, zw93df, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function ($52tl) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = $52tl;
        }), ibo7s(0x0, zw93df, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (ergjo_) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = ergjo_;
        }), ibo7s(0x0, zw93df, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), ibo7s(0x0, zw93df, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (rogesj) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = rogesj;
        }), ibo7s(0x0, zw93df, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (hnmaq) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = hnmaq;
        }), ibo7s(0x0, zw93df, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (rgsoe) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = rgsoe;
        }), age_nq;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var y$25 in Laya) {
        var iu75sb = Laya[y$25];
        iu75sb && iu75sb['__isclass'] && (exports[y$25] = iu75sb);
    }
});