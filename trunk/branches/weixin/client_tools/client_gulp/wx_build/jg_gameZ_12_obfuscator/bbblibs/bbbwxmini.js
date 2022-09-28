var _ = wx.y$;
(function (window, document, nmqr) {
    var imjkh = nmqr['un'],
        iehfd = nmqr['uns'],
        y$_10z = nmqr['static'],
        nr = nmqr['class'],
        ljhk = nmqr['getset'],
        dgfhi = nmqr['__newvec'],
        hkimlj = laya['utils']['Browser'],
        egdbc = laya['events']['Event'],
        mlh = laya['events']['EventDispatcher'],
        yxz0$ = laya['resource']['HTMLImage'],
        turw = laya['utils']['Handler'],
        $203 = laya['display']['Input'],
        z0$x_y = laya['net']['Loader'],
        ejhif = laya['maths']['Matrix'],
        tvurs = laya['renders']['Render'],
        srvwut = laya['utils']['RunDriver'],
        qnsrop = laya['media']['Sound'],
        dhegfi = laya['media']['SoundChannel'],
        dcfaeb = laya['media']['SoundManager'],
        mqonpr = laya['display']['Stage'],
        uyvt = laya['net']['URL'],
        squrtp = laya['utils']['Utils'],
        uqsrp = function () {
        function ljkhmi() {}
        return nr(ljkhmi, 'laya.wx.mini.MiniAdpter'), ljkhmi['getJson'] = function (rsotp) {
            return JSON['parse'](rsotp);
        }, ljkhmi['init'] = function (uxsvtw, qvrst) {
            uxsvtw === void 0x0 && (uxsvtw = ![]), qvrst === void 0x0 && (qvrst = ![]);
            if (ljkhmi['_inited']) return;
            ljkhmi['window'] = window;
            if (ljkhmi['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            ljkhmi['_inited'] = !![], ljkhmi['isZiYu'] = qvrst, ljkhmi['isPosMsgYu'] = uxsvtw, ljkhmi['EnvConfig'] = {}, !ljkhmi['isZiYu'] && (geihjf['setNativeFileDir']('/layaairGame'), geihjf['existDir'](geihjf['fileNativeDir'], turw['create'](ljkhmi, ljkhmi['onMkdirCallBack']))), ljkhmi['window']['focus'] = function () {}, nmqr['getUrlPath'] = function () {}, ljkhmi['window']['logtime'] = function (molpqn) {}, ljkhmi['window']['alertTimeLog'] = function (efghij) {}, ljkhmi['window']['resetShareInfo'] = function () {}, ljkhmi['window']['CanvasRenderingContext2D'] = function () {}, ljkhmi['window']['CanvasRenderingContext2D']['prototype'] = ljkhmi['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ljkhmi['window']['document']['body']['appendChild'] = function () {}, ljkhmi['EnvConfig']['pixelRatioInt'] = 0x0, srvwut['getPixelRatio'] = ljkhmi['pixelRatio'], ljkhmi['_preCreateElement'] = hkimlj['createElement'], hkimlj['createElement'] = ljkhmi['createElement'], srvwut['createShaderCondition'] = ljkhmi['createShaderCondition'], squrtp['parseXMLFromString'] = ljkhmi['parseXMLFromString'], $203['_createInputElement'] = qsuvtr['_createInputElement'], ljkhmi['EnvConfig']['load'] = z0$x_y['prototype']['load'], z0$x_y['prototype']['load'] = xyv$wz['prototype']['load'], ljkhmi['isZiYu'] && uxsvtw && wx['onMessage'](function (gfjk) {
                gfjk['isLoad'] && (geihjf['ziyuFileData'][gfjk['url']] = gfjk['data']);
            });
        }, ljkhmi['onMkdirCallBack'] = function (rqpon, plqmo) {
            if (!rqpon) geihjf['filesListObj'] = JSON['parse'](plqmo['data']);
        }, ljkhmi['pixelRatio'] = function () {
            if (!ljkhmi['EnvConfig']['pixelRatioInt']) try {
                var hdgeif = wx['getSystemInfoSync']();
                return ljkhmi['EnvConfig']['pixelRatioInt'] = hdgeif['pixelRatio'], hdgeif = hdgeif, hdgeif['pixelRatio'];
            } catch (xvwtu) {}
            return ljkhmi['EnvConfig']['pixelRatioInt'];
        }, ljkhmi['createElement'] = function (oljnk) {
            if (oljnk == 'canvas') {
                var xvy$z;
                return ljkhmi['idx'] == 0x1 ? ljkhmi['isZiYu'] ? (xvy$z = sharedCanvas, xvy$z['style'] = {}) : xvy$z = window['canvas'] : xvy$z = window['wx']['createCanvas'](), ljkhmi['idx']++, xvy$z;
            } else {
                if (oljnk == 'textarea' || oljnk == 'input') return ljkhmi['onCreateInput'](oljnk);else {
                    if (oljnk == 'div') {
                        var nqolm = ljkhmi['_preCreateElement'](oljnk);
                        return nqolm['contains'] = function (pnormq) {
                            return null;
                        }, nqolm['removeChild'] = function (cfbd) {}, nqolm;
                    } else return ljkhmi['_preCreateElement'](oljnk);
                }
            }
        }, ljkhmi['onCreateInput'] = function (hgied) {
            var lknoj = ljkhmi['_preCreateElement'](hgied);
            return lknoj['focus'] = qsuvtr['wxinputFocus'], lknoj['blur'] = qsuvtr['wxinputblur'], lknoj['style'] = {}, lknoj['value'] = 0x0, lknoj['parentElement'] = {}, lknoj['placeholder'] = {}, lknoj['type'] = {}, lknoj['setColor'] = function (cbaedf) {}, lknoj['setType'] = function (qrmon) {}, lknoj['setFontFace'] = function ($z210_) {}, lknoj['addEventListener'] = function (trqsv) {}, lknoj['contains'] = function (w_x$z) {
                return null;
            }, lknoj['removeChild'] = function ($_0z) {}, lknoj;
        }, ljkhmi['createShaderCondition'] = function (mkhl) {
            var rtquvs = this,
                kgjhfi = function () {
                var defgbc = mkhl;
                return rtquvs[mkhl['replace']('this.', '')];
            };
            return kgjhfi;
        }, ljkhmi['EnvConfig'] = null, ljkhmi['window'] = null, ljkhmi['_preCreateElement'] = null, ljkhmi['_inited'] = ![], ljkhmi['wxRequest'] = null, ljkhmi['systemInfo'] = null, ljkhmi['version'] = '0.0.1', ljkhmi['isZiYu'] = ![], ljkhmi['isPosMsgYu'] = ![], ljkhmi['parseXMLFromString'] = function (qnpros) {
            var kfgij, opnrs;
            qnpros = qnpros['replace'](/>\s+</g, '><');
            try {
                kfgij = new window['Parser']['DOMParser']()['parseFromString'](qnpros, 'text/xml');
            } catch (usrwtv) {
                throw '需要引入xml解析库文件';
            }
            return kfgij;
        }, ljkhmi['idx'] = 0x1, ljkhmi;
    }(),
        jhkli = function () {
        function nmljok() {}
        nr(nmljok, 'laya.wx.mini.MiniImage');
        var prtsqo = nmljok['prototype'];
        return prtsqo['_loadImage'] = function (ehdfcg) {
            var y0z$x_ = this,
                oklpm = ![];
            ehdfcg['indexOf']('layaNativeDir/') == -0x1 && (oklpm = !![], ehdfcg = uyvt['formatURL'](ehdfcg));
            if (!geihjf['getFileInfo'](ehdfcg)) {
                if (ehdfcg['indexOf']('http://') != -0x1 || ehdfcg['indexOf']('https://') != -0x1) geihjf['downImg'](ehdfcg, new turw(nmljok, nmljok['onDownImgCallBack'], [ehdfcg, y0z$x_]), ehdfcg);else nmljok['onCreateImage'](ehdfcg, y0z$x_, !![]);
            } else nmljok['onCreateImage'](ehdfcg, y0z$x_, !oklpm);
        }, nmljok['onDownImgCallBack'] = function (toprqs, tsvq, hjkilm) {
            if (!hjkilm) nmljok['onCreateImage'](toprqs, tsvq);else tsvq['onError'](null);
        }, nmljok['onCreateImage'] = function (y$z0x, $1y0_z, cfgbed) {
            cfgbed === void 0x0 && (cfgbed = ![]);
            var z$0x_y;
            if (!cfgbed) {
                var srqopn = geihjf['getFileInfo'](y$z0x),
                    kgljh = srqopn['md5'];
                z$0x_y = geihjf['getFileNativePath'](kgljh);
            } else z$0x_y = y$z0x;
            if ($1y0_z['imgCache'] == null) $1y0_z['imgCache'] = {};
            var gdcbfe;
            function nomql() {
                gdcbfe['onload'] = null, gdcbfe['onerror'] = null, delete $1y0_z['imgCache'][y$z0x];
            }
            ;
            var uvwtsx = function () {
                nomql(), $1y0_z['onLoaded'](gdcbfe);
            },
                kjnm = function () {
                nomql(), $1y0_z['event']('error', 'Load image failed');
            };
            $1y0_z['_type'] == 'nativeimage' ? (gdcbfe = new hkimlj['window']['Image'](), gdcbfe['crossOrigin'] = '', gdcbfe['onload'] = uvwtsx, gdcbfe['onerror'] = kjnm, gdcbfe['src'] = z$0x_y, $1y0_z['imgCache'][y$z0x] = gdcbfe) : new yxz0$['create'](z$0x_y, {
                'onload': uvwtsx,
                'onerror': kjnm,
                'onCreate': function (qtsruv) {
                    gdcbfe = qtsruv, $1y0_z['imgCache'][y$z0x] = qtsruv;
                }
            });
        }, nmljok;
    }(),
        qsuvtr = function () {
        function sutp() {}
        return nr(sutp, 'laya.wx.mini.MiniInput'), sutp['_createInputElement'] = function () {
            $203['_initInput']($203['area'] = hkimlj['createElement']('textarea')), $203['_initInput']($203['input'] = hkimlj['createElement']('input')), $203['inputContainer'] = hkimlj['createElement']('div'), $203['inputContainer']['style']['position'] = 'absolute', $203['inputContainer']['style']['zIndex'] = 0x186a0, hkimlj['container']['appendChild']($203['inputContainer']), $203['inputContainer']['setPos'] = function (stuwvx, efcba) {
                $203['inputContainer']['style']['left'] = stuwvx + 'px', $203['inputContainer']['style']['top'] = efcba + 'px';
            }, nmqr['stage']['on']('resize', null, sutp['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zxyv) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), dcfaeb['_soundClass'] = jhigkf, dcfaeb['_musicClass'] = jhigkf, window['_videoClass'] = bfdae;
        }, sutp['_onStageResize'] = function () {
            var jlgk = nmqr['stage']['_canvasTransform']['identity']();
            jlgk['scale'](hkimlj['width'] / tvurs['canvas']['width'] / srvwut['getPixelRatio'](), hkimlj['height'] / tvurs['canvas']['height'] / srvwut['getPixelRatio']());
        }, sutp['wxinputFocus'] = function (kijhgf) {
            var kigjfh = $203['inputElement']['target'];
            if (kigjfh && !kigjfh['editable']) return;
            uqsrp['window']['wx']['offKeyboardConfirm'](), uqsrp['window']['wx']['offKeyboardInput'](), uqsrp['window']['wx']['showKeyboard']({
                'defaultValue': kigjfh['text'],
                'maxLength': kigjfh['maxChars'],
                'multiple': kigjfh['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (hjkmil) {},
                'fail': function (bfg) {}
            }), uqsrp['window']['wx']['onKeyboardConfirm'](function (pqnlom) {
                var xyzvw = pqnlom ? pqnlom['value'] : '';
                kigjfh['text'] = xyzvw, kigjfh['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), uqsrp['window']['wx']['onKeyboardInput'](function (jnkilm) {
                var lhikm = jnkilm ? jnkilm['value'] : '';
                if (!kigjfh['multiline']) {
                    if (lhikm['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                kigjfh['text'] = lhikm, kigjfh['event']('input');
            });
        }, sutp['inputEnter'] = function () {
            $203['inputElement']['target']['focus'] = ![];
        }, sutp['wxinputblur'] = function () {
            sutp['hideKeyboard']();
        }, sutp['hideKeyboard'] = function () {
            uqsrp['window']['wx']['offKeyboardConfirm'](), uqsrp['window']['wx']['offKeyboardInput'](), uqsrp['window']['wx']['hideKeyboard']({
                'success': function (normp) {
                    console['log']('隐藏键盘');
                },
                'fail': function (ghikl) {
                    console['log']('隐藏键盘出错:' + (ghikl ? ghikl['errMsg'] : ''));
                }
            });
        }, sutp;
    }(),
        xyv$wz = function () {
        function uwstvr() {}
        nr(uwstvr, 'laya.wx.mini.MiniLoader');
        var njkol = uwstvr['prototype'];
        return njkol['load'] = function (cbdgfe, $2_0, noklm, mjko, _$203) {
            noklm === void 0x0 && (noklm = !![]), _$203 === void 0x0 && (_$203 = ![]);
            var _312 = this;
            _312['_url'] = cbdgfe;
            if (cbdgfe['indexOf']('data:image') === 0x0) _312['_type'] = $2_0 = 'image';else _312['_type'] = $2_0 || ($2_0 = _312['getTypeFromUrl'](cbdgfe));
            _312['_cache'] = noklm, _312['_data'] = null;
            var klijm = 'ascii';
            if (cbdgfe['indexOf']('.fnt') != -0x1) klijm = 'utf8';else $2_0 == 'arraybuffer' && (klijm = '');
            ;
            var zy$xw = squrtp['getFileExtension'](cbdgfe);
            if (uwstvr['_fileTypeArr']['indexOf'](zy$xw) != -0x1) uqsrp['EnvConfig']['load']['call'](this, cbdgfe, $2_0, noklm, mjko, _$203);else {
                if (!geihjf['getFileInfo'](cbdgfe)) {
                    if (cbdgfe['indexOf']('layaNativeDir/') != -0x1) {
                        if (uqsrp['isZiYu']) {
                            var srtwu = geihjf['ziyuFileData'][cbdgfe];
                            _312['onLoaded'](srtwu);
                            return;
                        } else {
                            cosnole['log']('read read'), geihjf['read'](cbdgfe, klijm, new turw(uwstvr, uwstvr['onReadNativeCallBack'], [klijm, cbdgfe, $2_0, noklm, mjko, _$203, _312]));
                            return;
                        }
                    }
                    if (uyvt['rootPath'] == '') var gechfd = cbdgfe;else gechfd = cbdgfe['split'](uyvt['rootPath'])[0x0];
                    cbdgfe['indexOf']('http://') != -0x1 || cbdgfe['indexOf']('https://') != -0x1 ? uqsrp['EnvConfig']['load']['call'](_312, cbdgfe, $2_0, noklm, mjko, _$203) : geihjf['readFile'](gechfd, klijm, new turw(uwstvr, uwstvr['onReadNativeCallBack'], [klijm, cbdgfe, $2_0, noklm, mjko, _$203, _312]), cbdgfe);
                } else uqsrp['EnvConfig']['load']['call'](this, cbdgfe, $2_0, noklm, mjko, _$203);
            }
        }, njkol['resMgrLoad'] = function (pqstro, mjilhk, jlmkn, rqsvt, sxwuvt, sqprut, hfecg) {
            jlmkn === void 0x0 && (jlmkn = 0x0), rqsvt === void 0x0 && (rqsvt = ![]), sxwuvt === void 0x0 && (sxwuvt = ![]), sqprut === void 0x0 && (sqprut = 0x0), hfecg === void 0x0 && (hfecg = 0x3), pqstro['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', pqstro), uqsrp['EnvConfig']['resMgrLoad'](pqstro, (qlpmo, ecbda, nojkl) => {
                uwstvr['prototype']['resMgrLoadCallBack'](qlpmo, ecbda, nojkl, mjilhk);
            }, jlmkn, rqsvt, sxwuvt, sqprut, hfecg);
        }, njkol['resMgrLoadCallBack'] = function (jefgh, txwvu, qrsnop, dcfhe) {
            console['log']('buff:::', jefgh, qrsnop, geihjf['fileNativeDir'] + '///' + geihjf['fileListName']), dcfhe(jefgh, txwvu, qrsnop);
        }, njkol['clearRes'] = function (nmlopq, tvwyu) {
            tvwyu === void 0x0 && (tvwyu = ![]);
            var xuwvyz = this;
            xuwvyz['clearRes'](nmlopq, tvwyu);
            var rpq = geihjf['getFileInfo'](nmlopq);
            if (rpq && (nmlopq['indexOf']('http://') != -0x1 || nmlopq['indexOf']('https://') != -0x1)) {
                var y$_x0 = rpq['md5'],
                    qprts = geihjf['getFileNativePath'](y$_x0);
                geihjf['remove'](qprts);
            }
        }, uwstvr['onReadNativeCallBack'] = function (y0_1z, hgfej, ihgjkf, nilmj, bdgec, x$wy_z, igfde, cfebd, jihk) {
            nilmj === void 0x0 && (nilmj = !![]), x$wy_z === void 0x0 && (x$wy_z = ![]), cfebd === void 0x0 && (cfebd = 0x0);
            if (!cfebd) {
                var $xwyzv;
                if (ihgjkf == 'json' || ihgjkf == 'atlas') $xwyzv = uqsrp['getJson'](jihk['data']);else ihgjkf == 'xml' ? $xwyzv = squrtp['parseXMLFromString'](jihk['data']) : $xwyzv = jihk['data'];
                igfde['onLoaded']($xwyzv), !uqsrp['isZiYu'] && uqsrp['isPosMsgYu'] && ihgjkf != 'arraybuffer' && wx['postMessage']({
                    'url': hgfej,
                    'data': $xwyzv,
                    'isLoad': !![]
                });
            } else cfebd == 0x1 && uqsrp['EnvConfig']['load']['call'](igfde, hgfej, ihgjkf, nilmj, bdgec, x$wy_z);
        }, y$_10z(uwstvr, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), uwstvr;
    }(),
        geihjf = function (yz_x0$) {
        function qsrv() {
            qsrv['__super']['call'](this);
            ;
        }
        return nr(qsrv, 'laya.wx.mini.MiniFileMgr', yz_x0$), qsrv['isLoadFile'] = function (lkjmh) {
            return qsrv['_fileTypeArr']['indexOf'](lkjmh) != -0x1 ? !![] : ![];
        }, qsrv['getFileInfo'] = function (dgefh) {
            var dcfgbe = dgefh['split']('?')[0x0],
                lnmo = qsrv['filesListObj'][dcfgbe];
            if (lnmo == null) return null;else return lnmo;
            return null;
        }, qsrv['onFileUpdate'] = function (qnolp, svwtu) {
            var mqlno = qnolp['split']('/'),
                strqv = mqlno[mqlno['length'] - 0x1],
                egdbfc = qsrv['getFileInfo'](svwtu);
            if (egdbfc == null) qsrv['onSaveFile'](svwtu, strqv);else {
                if (egdbfc['readyUrl'] != svwtu) qsrv['remove'](strqv, svwtu);
            }
        }, qsrv['exits'] = function (imnjkl, klomnj) {
            var srvwt = qsrv['getFileNativePath'](imnjkl);
            qsrv['fs']['getFileInfo']({
                'filePath': srvwt,
                'success': function (pqs) {
                    klomnj != null && klomnj['runWith']([0x0, pqs]);
                },
                'fail': function (hdgec) {
                    klomnj != null && klomnj['runWith']([0x1, hdgec]);
                }
            });
        }, qsrv['read'] = function ($z21_0, pnokml, psoqr, lkonm) {
            pnokml === void 0x0 && (pnokml = 'ascill'), lkonm === void 0x0 && (lkonm = '');
            var dfcabe;
            lkonm != '' ? dfcabe = qsrv['getFileNativePath']($z21_0) : dfcabe = $z21_0, qsrv['fs']['readFile']({
                'filePath': dfcabe,
                'encoding': pnokml,
                'success': function (adbfec) {
                    psoqr != null && psoqr['runWith']([0x0, adbfec]);
                },
                'fail': function (baf) {
                    if (baf && lkonm != '') qsrv['down'](lkonm, pnokml, psoqr, lkonm);else psoqr != null && psoqr['runWith']([0x1]);
                }
            });
        }, qsrv['readNativeFile'] = function (ehfgd, qnprs) {
            qsrv['fs']['readFile']({
                'filePath': ehfgd,
                'encoding': '',
                'success': function (_1z$0y) {
                    qnprs != null && qnprs['runWith']([0x0]);
                },
                'fail': function ($xy_z) {
                    qnprs != null && qnprs['runWith']([0x1]);
                }
            });
        }, qsrv['down'] = function (ywzux, olj, z0$yx_, vyutxw) {
            olj === void 0x0 && (olj = 'ascill'), vyutxw === void 0x0 && (vyutxw = '');
            var jilnk = qsrv['getFileNativePath'](vyutxw),
                wvxut = qsrv['wxdown']({
                'url': ywzux,
                'filePath': jilnk,
                'success': function (ywutxv) {
                    if (ywutxv['statusCode'] === 0xc8) qsrv['readFile'](ywutxv['filePath'], olj, z0$yx_, vyutxw);
                },
                'fail': function (quvr) {
                    z0$yx_ != null && z0$yx_['runWith']([0x1, quvr]);
                }
            });
            wvxut['onProgressUpdate'](function (wuyvz) {
                z0$yx_ != null && z0$yx_['runWith']([0x2, wuyvz['progress']]);
            });
        }, qsrv['readFile'] = function (zy1_0, eifd, uvwtsr, uxswtv) {
            eifd === void 0x0 && (eifd = 'ascill'), uxswtv === void 0x0 && (uxswtv = ''), qsrv['fs']['readFile']({
                'filePath': zy1_0,
                'encoding': eifd,
                'success': function ($xy_) {
                    if (zy1_0['indexOf']('http://') != -0x1 || zy1_0['indexOf']('https://') != -0x1) qsrv['onFileUpdate'](zy1_0, uxswtv);
                    uvwtsr != null && uvwtsr['runWith']([0x0, $xy_]);
                },
                'fail': function (trusvq) {
                    if (trusvq) uvwtsr != null && uvwtsr['runWith']([0x1, trusvq]);
                }
            });
        }, qsrv['downImg'] = function (vxzywu, acfeb, qsoptr) {
            qsoptr === void 0x0 && (qsoptr = '');
            var kom = qsrv['wxdown']({
                'url': vxzywu,
                'success': function (y1_0$) {
                    y1_0$['statusCode'] === 0xc8 && qsrv['copyFile'](y1_0$['tempFilePath'], qsoptr, acfeb);
                },
                'fail': function (bfgc) {
                    acfeb != null && acfeb['runWith']([0x1, bfgc]);
                }
            });
        }, qsrv['copyFile'] = function (wvsr, $20z, sxut) {
            var $xz_0y = wvsr['split']('/'),
                utsprq = $xz_0y[$xz_0y['length'] - 0x1],
                hlkji = $20z['split']('?')[0x0],
                twvr = qsrv['getFileInfo']($20z),
                tup = qsrv['getFileNativePath'](utsprq);
            qsrv['fs']['copyFile']({
                'srcPath': wvsr,
                'destPath': tup,
                'success': function (ifedhg) {
                    if (!twvr) qsrv['onSaveFile']($20z, utsprq), sxut != null && sxut['runWith']([0x0]);else {
                        if (twvr['readyUrl'] != $20z) qsrv['remove'](utsprq, $20z, sxut);
                    }
                },
                'fail': function (inlmkj) {
                    sxut != null && sxut['runWith']([0x1, inlmkj]);
                }
            });
        }, qsrv['getFileNativePath'] = function (oqsr) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + oqsr;
        }, qsrv['remove'] = function (nor, suvrtq, y$z0_x) {
            suvrtq === void 0x0 && (suvrtq = '');
            var pqnolm = qsrv['getFileInfo'](suvrtq),
                twuvs = qsrv['getFileNativePath'](pqnolm['md5']);
            nmqr['loader']['clearRes'](pqnolm['readyUrl']), qsrv['fs']['unlink']({
                'filePath': twuvs,
                'success': function (pnroq) {
                    if (suvrtq != '') qsrv['onSaveFile'](suvrtq, nor);
                    y$z0_x != null && y$z0_x['runWith']([0x0]);
                },
                'fail': function (ghec) {}
            });
        }, qsrv['onSaveFile'] = function (hcge, hmlikj) {
            var lm = hcge['split']('?')[0x0];
            qsrv['filesListObj'][lm] = {
                'md5': hmlikj,
                'readyUrl': hcge
            }, qsrv['fs']['writeFile']({
                'filePath': qsrv['fileNativeDir'] + '/' + qsrv['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](qsrv['filesListObj']),
                'success': function ($_1203) {
                    console['log']('写入测试测试成功：', $_1203);
                },
                'fail': function (sqrtop) {
                    console['log']('写入测试测试失败：', sqrtop);
                }
            });
        }, qsrv['existDir'] = function (trsvuq, x0$_) {
            qsrv['fs']['mkdir']({
                'dirPath': trsvuq,
                'success': function (z201$) {
                    x0$_ != null && x0$_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (rnopsq) {
                    if (rnopsq['errMsg']['indexOf']('file already exists') != -0x1) qsrv['readSync'](qsrv['fileListName'], 'utf8', x0$_);else x0$_ != null && x0$_['runWith']([0x1, rnopsq]);
                }
            });
        }, qsrv['readSync'] = function (hfdecg, nopqrm, lmj, urqs) {
            nopqrm === void 0x0 && (nopqrm = 'ascill'), urqs === void 0x0 && (urqs = '');
            var jkligh = qsrv['getFileNativePath'](hfdecg),
                jlink;
            try {
                jlink = qsrv['fs']['readFileSync'](jkligh), lmj != null && lmj['runWith']([0x0, { 'data': jlink }]);
            } catch (mknpo) {
                lmj != null && lmj['runWith']([0x1]);
            }
        }, qsrv['readCache'] = function () {}, qsrv['writeCache'] = function (kolpmn) {
            var igdfh = readyUrl['split']('?')[0x0];
            qsrv['filesListObj'][igdfh] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, qsrv['fs']['writeFile']({
                'filePath': qsrv['fileNativeDir'] + '/' + qsrv['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](qsrv['filesListObj']),
                'success': function (jmhilk) {},
                'fail': function (ruspqt) {}
            });
        }, qsrv['setNativeFileDir'] = function (gbcdf) {
            qsrv['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gbcdf;
        }, qsrv['filesListObj'] = {}, qsrv['fileNativeDir'] = null, qsrv['fileListName'] = 'layaairfiles.txt', qsrv['ziyuFileData'] = {}, y$_10z(qsrv, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), qsrv;
    }(mlh),
        jhigkf = function (nrpqso) {
        function fbca() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], fbca['__super']['call'](this), this['_sound'] = fbca['_createSound'](), this['_chanell'] = new fhcged(this['_sound']);
        }
        nr(fbca, 'laya.wx.mini.MiniSound', nrpqso);
        var $_012 = fbca['prototype'];
        return $_012['load'] = function (w$xvyz) {
            var _xwz$ = this;
            w$xvyz = uyvt['formatURL'](w$xvyz), this['url'] = w$xvyz;
            if (fbca['_audioCache'][w$xvyz]) {
                this['event']('complete');
                return;
            }
            function nmkij() {
                if (fbca['_null'] != undefined) _xwz$['_sound']['onCanplay'](fbca['_null']), _xwz$['_sound']['onError'](fbca['_null']);else try {
                    _xwz$['_sound']['onCanplay'](null), _xwz$['_sound']['onError'](null), fbca['_null'] = null;
                } catch (qurvst) {
                    console['warn']('[wxmini] _clearSound:' + qurvst), _xwz$['_sound']['onCanplay'](xywv), _xwz$['_sound']['onError'](xywv), fbca['_null'] = xywv;
                }
            }
            function fhecd() {
                uvxzy['loaded'] = !![], uvxzy['event']('complete'), fbca['_audioCache'][uvxzy['url']] = uvxzy;
            }
            function putq(hged) {
                console['error']('errCode=' + hged['errCode'] + '  errMsg=' + hged['errMsg']), uvxzy['event']('error');
            }
            function xywv() {}
            this['_sound']['onCanplay'](fhecd), this['_sound']['onError'](putq), this['_sound']['src'] = w$xvyz;
            var uvxzy = this;
        }, $_012['play'] = function (orstp, klnj) {
            orstp === void 0x0 && (orstp = 0x0), klnj === void 0x0 && (klnj = 0x0);
            var $w_xz, jmikn;
            if (this['url'] == dcfaeb['_tMusic']) {
                if (!fbca['_musicAudio']) fbca['_musicAudio'] = this['_sound'];
                $w_xz = fbca['_musicAudio'], jmikn = this['_chanell'];
            } else $w_xz = this['_sound'], jmikn = this['_chanell'];
            return $w_xz['src'] = this['url'], $w_xz['startTime'] = 0x0, jmikn['isStopped'] && (jmikn['url'] = this['url'], jmikn['loops'] = klnj, jmikn['startTime'] = orstp, jmikn['play'](), dcfaeb['addChannel'](jmikn)), jmikn;
        }, $_012['dispose'] = function () {
            var befcd = fbca['_audioCache'][this['url']];
            befcd && (befcd['src'] = '', delete fbca['_audioCache'][this['url']]);
        }, ljhk(0x0, $_012, 'duration', function () {
            return this['_sound']['duration'];
        }), fbca['_createSound'] = function () {
            fbca['_id']++;
            var fjgkhi = uqsrp['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return fjgkhi;
        }, fbca['_musicAudio'] = null, fbca['_id'] = 0x0, fbca['_audioCache'] = {}, fbca['_null'] = undefined, fbca;
    }(mlh),
        fhcged = function (klmjni) {
        function wsvtx(pml) {
            this['_audio'] = null, this['_onEnd'] = null, wsvtx['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = pml, this['_onEnd'] = squrtp['bind'](this['__onEnd'], this), pml['onEnded'](this['_onEnd']);
        }
        nr(wsvtx, 'laya.wx.mini.MiniSoundChannel', klmjni);
        var $xy0z = wsvtx['prototype'];
        return $xy0z['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (nmqr['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, $xy0z['__onNull'] = function () {}, $xy0z['play'] = function () {
            this['isStopped'] = ![], dcfaeb['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, $xy0z['stop'] = function () {
            this['isStopped'] = !![], dcfaeb['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, $xy0z['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, $xy0z['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], dcfaeb['addChannel'](this), this['_audio']['play']();
        }, ljhk(0x0, $xy0z, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), ljhk(0x0, $xy0z, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), ljhk(0x0, $xy0z, 'volume', function () {
            return 0x1;
        }, function (dcbfea) {}), wsvtx['_null'] = undefined, wsvtx;
    }(dhegfi),
        bfdae = function () {
        function x_zy$w() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = uqsrp['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        nr(x_zy$w, 'laya.wx.mini.MiniVideo');
        var jiglh = x_zy$w['prototype'];
        return jiglh['on'] = function (nploq, mkplo, jnlikm) {
            if (nploq == 'loadedmetadata') this['onPlayFunc'] = jnlikm['bind'](mkplo), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else nploq == 'ended' && (this['onEndedFunC'] = jnlikm['bind'](mkplo), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, jiglh['onTimeUpdateFunc'] = function (dihegf) {
            this['position'] = dihegf['position'], this['_duration'] = dihegf['duration'];
        }, jiglh['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, jiglh['onended'] = function (jomnkl, lpnmoq) {
            this['onEndedFunC'] = lpnmoq['bind'](jomnkl), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, jiglh['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, jiglh['off'] = function (uvsrw, pqnorm, z$xvyw) {
            if (uvsrw == 'loadedmetadata') this['onPlayFunc'] = z$xvyw['bind'](pqnorm), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else uvsrw == 'ended' && (this['onEndedFunC'] = z$xvyw['bind'](pqnorm), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, jiglh['load'] = function (orqstp) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = orqstp;
        }, jiglh['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, jiglh['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, jiglh['size'] = function (dbcgf, dfgc) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = dbcgf, this['videoElement']['height'] = dfgc;
        }, jiglh['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, jiglh['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, ljhk(0x0, jiglh, 'duration', function () {
            return this['_duration'];
        }), ljhk(0x0, jiglh, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (qnomp) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = qnomp;
        }), ljhk(0x0, jiglh, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), ljhk(0x0, jiglh, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), ljhk(0x0, jiglh, 'ended', function () {
            return this['videoend'];
        }), ljhk(0x0, jiglh, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (qsrvtu) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = qsrvtu;
        }), ljhk(0x0, jiglh, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (gcdb) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = gcdb;
        }), ljhk(0x0, jiglh, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (nprqo) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = nprqo;
        }), ljhk(0x0, jiglh, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), ljhk(0x0, jiglh, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (pnrsoq) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = pnrsoq;
        }), ljhk(0x0, jiglh, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (lkmnop) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = lkmnop;
        }), ljhk(0x0, jiglh, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), ljhk(0x0, jiglh, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (v$yxz) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = v$yxz;
        }), ljhk(0x0, jiglh, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (wuxyvt) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = wuxyvt;
        }), ljhk(0x0, jiglh, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (trv) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = trv;
        }), x_zy$w;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var fghk in Laya) {
        var zy_10 = Laya[fghk];
        zy_10 && zy_10['__isclass'] && (exports[fghk] = zy_10);
    }
});