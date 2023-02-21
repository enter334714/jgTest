var s1 = wx.l$;
(function (window, document, gi24xy) {
    var i41hg = gi24xy['un'],
        lzfp5 = gi24xy['uns'],
        $0vtw = gi24xy['static'],
        om_r = gi24xy['class'],
        es56lf = gi24xy['getset'],
        v9j$ = gi24xy['__newvec'],
        orqau = laya['utils']['Browser'],
        gix = laya['events']['Event'],
        h2431 = laya['events']['EventDispatcher'],
        n9r_ck = laya['resource']['HTMLImage'],
        hg1234 = laya['utils']['Handler'],
        ruqma = laya['display']['Input'],
        j9wkn = laya['net']['Loader'],
        w$b0vt = laya['maths']['Matrix'],
        gy4e = laya['renders']['Render'],
        td0wb = laya['utils']['RunDriver'],
        t$08 = laya['media']['Sound'],
        l5s = laya['media']['SoundChannel'],
        y42ghi = laya['media']['SoundManager'],
        oarqum = laya['display']['Stage'],
        slzp7f = laya['net']['URL'],
        wdt$b = laya['utils']['Utils'],
        wvj = function () {
        function fe65sx() {}
        return om_r(fe65sx, 'laya.wx.mini.MiniAdpter'), fe65sx['getJson'] = function (oauzm7) {
            return JSON['parse'](oauzm7);
        }, fe65sx['init'] = function (h3214g, _ckqra) {
            h3214g === void 0x0 && (h3214g = ![]), _ckqra === void 0x0 && (_ckqra = ![]);
            if (fe65sx['_inited']) return;
            fe65sx['window'] = window;
            if (fe65sx['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            fe65sx['_inited'] = !![], fe65sx['isZiYu'] = _ckqra, fe65sx['isPosMsgYu'] = h3214g, fe65sx['EnvConfig'] = {}, !fe65sx['isZiYu'] && (oauqrm['setNativeFileDir']('/layaairGame'), oauqrm['existDir'](oauqrm['fileNativeDir'], hg1234['create'](fe65sx, fe65sx['onMkdirCallBack']))), fe65sx['window']['focus'] = function () {}, gi24xy['getUrlPath'] = function () {}, fe65sx['window']['logtime'] = function (cnj_k) {}, fe65sx['window']['alertTimeLog'] = function (nc_qkr) {}, fe65sx['window']['resetShareInfo'] = function () {}, fe65sx['window']['CanvasRenderingContext2D'] = function () {}, fe65sx['window']['CanvasRenderingContext2D']['prototype'] = fe65sx['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], fe65sx['window']['document']['body']['appendChild'] = function () {}, fe65sx['EnvConfig']['pixelRatioInt'] = 0x0, td0wb['getPixelRatio'] = fe65sx['pixelRatio'], fe65sx['_preCreateElement'] = orqau['createElement'], orqau['createElement'] = fe65sx['createElement'], td0wb['createShaderCondition'] = fe65sx['createShaderCondition'], wdt$b['parseXMLFromString'] = fe65sx['parseXMLFromString'], ruqma['_createInputElement'] = up7zm['_createInputElement'], fe65sx['EnvConfig']['load'] = j9wkn['prototype']['load'], j9wkn['prototype']['load'] = igyx42['prototype']['load'], fe65sx['isZiYu'] && h3214g && wx['onMessage'](function (uplzf7) {
                uplzf7['isLoad'] && (oauqrm['ziyuFileData'][uplzf7['url']] = uplzf7['data']);
            });
        }, fe65sx['onMkdirCallBack'] = function (l5p6s, s5f6pl) {
            if (!l5p6s) oauqrm['filesListObj'] = JSON['parse'](s5f6pl['data']);
        }, fe65sx['pixelRatio'] = function () {
            if (!fe65sx['EnvConfig']['pixelRatioInt']) try {
                var vwbt$0 = wx['getSystemInfoSync']();
                return fe65sx['EnvConfig']['pixelRatioInt'] = vwbt$0['pixelRatio'], vwbt$0 = vwbt$0, vwbt$0['pixelRatio'];
            } catch (jtvw9) {}
            return fe65sx['EnvConfig']['pixelRatioInt'];
        }, fe65sx['createElement'] = function (njck_9) {
            if (njck_9 == 'canvas') {
                var _rknc9;
                return fe65sx['idx'] == 0x1 ? fe65sx['isZiYu'] ? (_rknc9 = sharedCanvas, _rknc9['style'] = {}) : _rknc9 = window['canvas'] : _rknc9 = window['wx']['createCanvas'](), fe65sx['idx']++, _rknc9;
            } else {
                if (njck_9 == 'textarea' || njck_9 == 'input') return fe65sx['onCreateInput'](njck_9);else {
                    if (njck_9 == 'div') {
                        var zfs7pl = fe65sx['_preCreateElement'](njck_9);
                        return zfs7pl['contains'] = function (zoupm) {
                            return null;
                        }, zfs7pl['removeChild'] = function (qcra) {}, zfs7pl;
                    } else return fe65sx['_preCreateElement'](njck_9);
                }
            }
        }, fe65sx['onCreateInput'] = function (oma_q) {
            var ey4g = fe65sx['_preCreateElement'](oma_q);
            return ey4g['focus'] = up7zm['wxinputFocus'], ey4g['blur'] = up7zm['wxinputblur'], ey4g['style'] = {}, ey4g['value'] = 0x0, ey4g['parentElement'] = {}, ey4g['placeholder'] = {}, ey4g['type'] = {}, ey4g['setColor'] = function (cq_kar) {}, ey4g['setType'] = function (wdbt0$) {}, ey4g['setFontFace'] = function (yex6) {}, ey4g['addEventListener'] = function (zsp7f) {}, ey4g['contains'] = function ($j0tw) {
                return null;
            }, ey4g['removeChild'] = function (jv9nw) {}, ey4g;
        }, fe65sx['createShaderCondition'] = function (amrq_o) {
            var ex = this,
                bt8$ = function () {
                var yeg6i = amrq_o;
                return ex[amrq_o['replace']('this.', '')];
            };
            return bt8$;
        }, fe65sx['EnvConfig'] = null, fe65sx['window'] = null, fe65sx['_preCreateElement'] = null, fe65sx['_inited'] = ![], fe65sx['wxRequest'] = null, fe65sx['systemInfo'] = null, fe65sx['version'] = '0.0.1', fe65sx['isZiYu'] = ![], fe65sx['isPosMsgYu'] = ![], fe65sx['parseXMLFromString'] = function (x6ie5y) {
            var acqrk, f6se;
            x6ie5y = x6ie5y['replace'](/>\s+</g, '><');
            try {
                acqrk = new window['Parser']['DOMParser']()['parseFromString'](x6ie5y, 'text/xml');
            } catch (b$vt0) {
                throw '需要引入xml解析库文件';
            }
            return acqrk;
        }, fe65sx['idx'] = 0x1, fe65sx;
    }(),
        fp7lzu = function () {
        function vjn$() {}
        om_r(vjn$, 'laya.wx.mini.MiniImage');
        var vt$jw = vjn$['prototype'];
        return vt$jw['_loadImage'] = function (k_qnrc) {
            var i4yg2x = this,
                _qkcar = ![];
            k_qnrc['indexOf']('layaNativeDir/') == -0x1 && (_qkcar = !![], k_qnrc = slzp7f['formatURL'](k_qnrc));
            if (!oauqrm['getFileInfo'](k_qnrc)) {
                if (k_qnrc['indexOf']('http://') != -0x1 || k_qnrc['indexOf']('https://') != -0x1) oauqrm['downImg'](k_qnrc, new hg1234(vjn$, vjn$['onDownImgCallBack'], [k_qnrc, i4yg2x]), k_qnrc);else vjn$['onCreateImage'](k_qnrc, i4yg2x, !![]);
            } else vjn$['onCreateImage'](k_qnrc, i4yg2x, !_qkcar);
        }, vjn$['onDownImgCallBack'] = function (t0b$d, zmo7, nck9_r) {
            if (!nck9_r) vjn$['onCreateImage'](t0b$d, zmo7);else zmo7['onError'](null);
        }, vjn$['onCreateImage'] = function (h42iy, td0w$b, lp7sfz) {
            lp7sfz === void 0x0 && (lp7sfz = ![]);
            var xfs6e5;
            if (!lp7sfz) {
                var oum7a = oauqrm['getFileInfo'](h42iy),
                    jvn$w9 = oum7a['md5'];
                xfs6e5 = oauqrm['getFileNativePath'](jvn$w9);
            } else xfs6e5 = h42iy;
            if (td0w$b['imgCache'] == null) td0w$b['imgCache'] = {};
            var h12i;
            function t$vjw0() {
                h12i['onload'] = null, h12i['onerror'] = null, delete td0w$b['imgCache'][h42iy];
            }
            ;
            var m_rqoa = function () {
                t$vjw0(), td0w$b['onLoaded'](h12i);
            },
                ix6g = function () {
                t$vjw0(), td0w$b['event']('error', 'Load image failed');
            };
            td0w$b['_type'] == 'nativeimage' ? (h12i = new orqau['window']['Image'](), h12i['crossOrigin'] = '', h12i['onload'] = m_rqoa, h12i['onerror'] = ix6g, h12i['src'] = xfs6e5, td0w$b['imgCache'][h42iy] = h12i) : new n9r_ck['create'](xfs6e5, {
                'onload': m_rqoa,
                'onerror': ix6g,
                'onCreate': function (xyes) {
                    h12i = xyes, td0w$b['imgCache'][h42iy] = xyes;
                }
            });
        }, vjn$;
    }(),
        up7zm = function () {
        function g4i2h() {}
        return om_r(g4i2h, 'laya.wx.mini.MiniInput'), g4i2h['_createInputElement'] = function () {
            ruqma['_initInput'](ruqma['area'] = orqau['createElement']('textarea')), ruqma['_initInput'](ruqma['input'] = orqau['createElement']('input')), ruqma['inputContainer'] = orqau['createElement']('div'), ruqma['inputContainer']['style']['position'] = 'absolute', ruqma['inputContainer']['style']['zIndex'] = 0x186a0, orqau['container']['appendChild'](ruqma['inputContainer']), ruqma['inputContainer']['setPos'] = function (qrmoua, rqc_kn) {
                ruqma['inputContainer']['style']['left'] = qrmoua + 'px', ruqma['inputContainer']['style']['top'] = rqc_kn + 'px';
            }, gi24xy['stage']['on']('resize', null, g4i2h['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (y6ex) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), y42ghi['_soundClass'] = jncvk9, y42ghi['_musicClass'] = jncvk9, window['_videoClass'] = _rqnk;
        }, g4i2h['_onStageResize'] = function () {
            var qrc_n = gi24xy['stage']['_canvasTransform']['identity']();
            qrc_n['scale'](orqau['width'] / gy4e['canvas']['width'] / td0wb['getPixelRatio'](), orqau['height'] / gy4e['canvas']['height'] / td0wb['getPixelRatio']());
        }, g4i2h['wxinputFocus'] = function (jckv) {
            var qkca_ = ruqma['inputElement']['target'];
            if (qkca_ && !qkca_['editable']) return;
            wvj['window']['wx']['offKeyboardConfirm'](), wvj['window']['wx']['offKeyboardInput'](), wvj['window']['wx']['showKeyboard']({
                'defaultValue': qkca_['text'],
                'maxLength': qkca_['maxChars'],
                'multiple': qkca_['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (caor) {},
                'fail': function (e4) {}
            }), wvj['window']['wx']['onKeyboardConfirm'](function (z5fsp) {
                var d$t08b = z5fsp ? z5fsp['value'] : '';
                qkca_['text'] = d$t08b, qkca_['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), wvj['window']['wx']['onKeyboardInput'](function (pf7zlu) {
                var jwnv9k = pf7zlu ? pf7zlu['value'] : '';
                if (!qkca_['multiline']) {
                    if (jwnv9k['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                qkca_['text'] = jwnv9k, qkca_['event']('input');
            });
        }, g4i2h['inputEnter'] = function () {
            ruqma['inputElement']['target']['focus'] = ![];
        }, g4i2h['wxinputblur'] = function () {
            g4i2h['hideKeyboard']();
        }, g4i2h['hideKeyboard'] = function () {
            wvj['window']['wx']['offKeyboardConfirm'](), wvj['window']['wx']['offKeyboardInput'](), wvj['window']['wx']['hideKeyboard']({
                'success': function (p5sf) {
                    console['log']('隐藏键盘');
                },
                'fail': function (roaq_c) {
                    console['log']('隐藏键盘出错:' + (roaq_c ? roaq_c['errMsg'] : ''));
                }
            });
        }, g4i2h;
    }(),
        igyx42 = function () {
        function moau7() {}
        om_r(moau7, 'laya.wx.mini.MiniLoader');
        var w$vbt = moau7['prototype'];
        return w$vbt['load'] = function (xse65f, $9nv, e4yig, fse5, fl7) {
            e4yig === void 0x0 && (e4yig = !![]), fl7 === void 0x0 && (fl7 = ![]);
            var e65sfl = this;
            e65sfl['_url'] = xse65f;
            if (xse65f['indexOf']('data:image') === 0x0) e65sfl['_type'] = $9nv = 'image';else e65sfl['_type'] = $9nv || ($9nv = e65sfl['getTypeFromUrl'](xse65f));
            e65sfl['_cache'] = e4yig, e65sfl['_data'] = null;
            var rkn9_c = 'ascii';
            if (xse65f['indexOf']('.fnt') != -0x1) rkn9_c = 'utf8';else $9nv == 'arraybuffer' && (rkn9_c = '');
            ;
            var jn9wk = wdt$b['getFileExtension'](xse65f);
            if (moau7['_fileTypeArr']['indexOf'](jn9wk) != -0x1) wvj['EnvConfig']['load']['call'](this, xse65f, $9nv, e4yig, fse5, fl7);else {
                if (!oauqrm['getFileInfo'](xse65f)) {
                    if (xse65f['indexOf']('layaNativeDir/') != -0x1) {
                        if (wvj['isZiYu']) {
                            var $jnv = oauqrm['ziyuFileData'][xse65f];
                            e65sfl['onLoaded']($jnv);
                            return;
                        } else {
                            cosnole['log']('read read'), oauqrm['read'](xse65f, rkn9_c, new hg1234(moau7, moau7['onReadNativeCallBack'], [rkn9_c, xse65f, $9nv, e4yig, fse5, fl7, e65sfl]));
                            return;
                        }
                    }
                    if (slzp7f['rootPath'] == '') var z7pluf = xse65f;else z7pluf = xse65f['split'](slzp7f['rootPath'])[0x0];
                    xse65f['indexOf']('http://') != -0x1 || xse65f['indexOf']('https://') != -0x1 ? wvj['EnvConfig']['load']['call'](e65sfl, xse65f, $9nv, e4yig, fse5, fl7) : oauqrm['readFile'](z7pluf, rkn9_c, new hg1234(moau7, moau7['onReadNativeCallBack'], [rkn9_c, xse65f, $9nv, e4yig, fse5, fl7, e65sfl]), xse65f);
                } else wvj['EnvConfig']['load']['call'](this, xse65f, $9nv, e4yig, fse5, fl7);
            }
        }, w$vbt['resMgrLoad'] = function (mauo7q, gx4eyi, tw$db0, vtwj$, upzm, j9$wvn, oracq_) {
            tw$db0 === void 0x0 && (tw$db0 = 0x0), vtwj$ === void 0x0 && (vtwj$ = ![]), upzm === void 0x0 && (upzm = ![]), j9$wvn === void 0x0 && (j9$wvn = 0x0), oracq_ === void 0x0 && (oracq_ = 0x3), mauo7q['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', mauo7q), wvj['EnvConfig']['resMgrLoad'](mauo7q, (zlf7ps, fzpul7, dw0t$) => {
                moau7['prototype']['resMgrLoadCallBack'](zlf7ps, fzpul7, dw0t$, gx4eyi);
            }, tw$db0, vtwj$, upzm, j9$wvn, oracq_);
        }, w$vbt['resMgrLoadCallBack'] = function (yigx2, wj9kvn, w$0d, ourm) {
            console['log']('buff:::', yigx2, w$0d, oauqrm['fileNativeDir'] + '///' + oauqrm['fileListName']), ourm(yigx2, wj9kvn, w$0d);
        }, w$vbt['clearRes'] = function (uml7z, j$vw9n) {
            j$vw9n === void 0x0 && (j$vw9n = ![]);
            var w$v0bt = this;
            w$v0bt['clearRes'](uml7z, j$vw9n);
            var r_kqac = oauqrm['getFileInfo'](uml7z);
            if (r_kqac && (uml7z['indexOf']('http://') != -0x1 || uml7z['indexOf']('https://') != -0x1)) {
                var j0t$v = r_kqac['md5'],
                    ao7muz = oauqrm['getFileNativePath'](j0t$v);
                oauqrm['remove'](ao7muz);
            }
        }, moau7['onReadNativeCallBack'] = function ($db8t0, _mqra, aumorq, n9jwvk, v9knw, fe65sl, exi6y5, $0vjt, jnkwv9) {
            n9jwvk === void 0x0 && (n9jwvk = !![]), fe65sl === void 0x0 && (fe65sl = ![]), $0vjt === void 0x0 && ($0vjt = 0x0);
            if (!$0vjt) {
                var jk9_;
                if (aumorq == 'json' || aumorq == 'atlas') jk9_ = wvj['getJson'](jnkwv9['data']);else aumorq == 'xml' ? jk9_ = wdt$b['parseXMLFromString'](jnkwv9['data']) : jk9_ = jnkwv9['data'];
                exi6y5['onLoaded'](jk9_), !wvj['isZiYu'] && wvj['isPosMsgYu'] && aumorq != 'arraybuffer' && wx['postMessage']({
                    'url': _mqra,
                    'data': jk9_,
                    'isLoad': !![]
                });
            } else $0vjt == 0x1 && wvj['EnvConfig']['load']['call'](exi6y5, _mqra, aumorq, n9jwvk, v9knw, fe65sl);
        }, $0vtw(moau7, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), moau7;
    }(),
        oauqrm = function (u7az) {
        function gh4yi2() {
            gh4yi2['__super']['call'](this);
            ;
        }
        return om_r(gh4yi2, 'laya.wx.mini.MiniFileMgr', u7az), gh4yi2['isLoadFile'] = function (qck_rn) {
            return gh4yi2['_fileTypeArr']['indexOf'](qck_rn) != -0x1 ? !![] : ![];
        }, gh4yi2['getFileInfo'] = function ($tvbw) {
            var s5fle = $tvbw['split']('?')[0x0],
                rn_q = gh4yi2['filesListObj'][s5fle];
            if (rn_q == null) return null;else return rn_q;
            return null;
        }, gh4yi2['onFileUpdate'] = function (nkcq_, g24ihy) {
            var zls = nkcq_['split']('/'),
                nwv = zls[zls['length'] - 0x1],
                dbw0$ = gh4yi2['getFileInfo'](g24ihy);
            if (dbw0$ == null) gh4yi2['onSaveFile'](g24ihy, nwv);else {
                if (dbw0$['readyUrl'] != g24ihy) gh4yi2['remove'](nwv, g24ihy);
            }
        }, gh4yi2['exits'] = function (uz7o, l7puf) {
            var v0$wb = gh4yi2['getFileNativePath'](uz7o);
            gh4yi2['fs']['getFileInfo']({
                'filePath': v0$wb,
                'success': function (ao7umz) {
                    l7puf != null && l7puf['runWith']([0x0, ao7umz]);
                },
                'fail': function (g41h2) {
                    l7puf != null && l7puf['runWith']([0x1, g41h2]);
                }
            });
        }, gh4yi2['read'] = function (y42hig, _qar, _qa, r_acqk) {
            _qar === void 0x0 && (_qar = 'ascill'), r_acqk === void 0x0 && (r_acqk = '');
            var s6fpl5;
            r_acqk != '' ? s6fpl5 = gh4yi2['getFileNativePath'](y42hig) : s6fpl5 = y42hig, gh4yi2['fs']['readFile']({
                'filePath': s6fpl5,
                'encoding': _qar,
                'success': function (p7umzo) {
                    _qa != null && _qa['runWith']([0x0, p7umzo]);
                },
                'fail': function (lp6s5f) {
                    if (lp6s5f && r_acqk != '') gh4yi2['down'](r_acqk, _qar, _qa, r_acqk);else _qa != null && _qa['runWith']([0x1]);
                }
            });
        }, gh4yi2['readNativeFile'] = function (moaq_r, qckr) {
            gh4yi2['fs']['readFile']({
                'filePath': moaq_r,
                'encoding': '',
                'success': function (quomar) {
                    qckr != null && qckr['runWith']([0x0]);
                },
                'fail': function (nwjkv9) {
                    qckr != null && qckr['runWith']([0x1]);
                }
            });
        }, gh4yi2['down'] = function (ufp7z, rqnc_, ckr_n9, k9_) {
            rqnc_ === void 0x0 && (rqnc_ = 'ascill'), k9_ === void 0x0 && (k9_ = '');
            var b80d = gh4yi2['getFileNativePath'](k9_),
                mqoa = gh4yi2['wxdown']({
                'url': ufp7z,
                'filePath': b80d,
                'success': function (f5szpl) {
                    if (f5szpl['statusCode'] === 0xc8) gh4yi2['readFile'](f5szpl['filePath'], rqnc_, ckr_n9, k9_);
                },
                'fail': function (y42igh) {
                    ckr_n9 != null && ckr_n9['runWith']([0x1, y42igh]);
                }
            });
            mqoa['onProgressUpdate'](function (lu7fz) {
                ckr_n9 != null && ckr_n9['runWith']([0x2, lu7fz['progress']]);
            });
        }, gh4yi2['readFile'] = function (igx4y, yx6ei, zuflp, t$vwb) {
            yx6ei === void 0x0 && (yx6ei = 'ascill'), t$vwb === void 0x0 && (t$vwb = ''), gh4yi2['fs']['readFile']({
                'filePath': igx4y,
                'encoding': yx6ei,
                'success': function (dbt0w$) {
                    if (igx4y['indexOf']('http://') != -0x1 || igx4y['indexOf']('https://') != -0x1) gh4yi2['onFileUpdate'](igx4y, t$vwb);
                    zuflp != null && zuflp['runWith']([0x0, dbt0w$]);
                },
                'fail': function (plzf) {
                    if (plzf) zuflp != null && zuflp['runWith']([0x1, plzf]);
                }
            });
        }, gh4yi2['downImg'] = function (c9r_k, upmoz, qmar_o) {
            qmar_o === void 0x0 && (qmar_o = '');
            var qm7uo = gh4yi2['wxdown']({
                'url': c9r_k,
                'success': function (iy6xe5) {
                    iy6xe5['statusCode'] === 0xc8 && gh4yi2['copyFile'](iy6xe5['tempFilePath'], qmar_o, upmoz);
                },
                'fail': function (az7u) {
                    upmoz != null && upmoz['runWith']([0x1, az7u]);
                }
            });
        }, gh4yi2['copyFile'] = function (wtbd0$, l5fs6p, c_nr9) {
            var qk_crn = wtbd0$['split']('/'),
                muaqro = qk_crn[qk_crn['length'] - 0x1],
                kjv9c = l5fs6p['split']('?')[0x0],
                yegxi6 = gh4yi2['getFileInfo'](l5fs6p),
                geyxi4 = gh4yi2['getFileNativePath'](muaqro);
            gh4yi2['fs']['copyFile']({
                'srcPath': wtbd0$,
                'destPath': geyxi4,
                'success': function (td8b$) {
                    if (!yegxi6) gh4yi2['onSaveFile'](l5fs6p, muaqro), c_nr9 != null && c_nr9['runWith']([0x0]);else {
                        if (yegxi6['readyUrl'] != l5fs6p) gh4yi2['remove'](muaqro, l5fs6p, c_nr9);
                    }
                },
                'fail': function (qr_ca) {
                    c_nr9 != null && c_nr9['runWith']([0x1, qr_ca]);
                }
            });
        }, gh4yi2['getFileNativePath'] = function (omz7u) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + omz7u;
        }, gh4yi2['remove'] = function (l6es, knj9_, $bwdt) {
            knj9_ === void 0x0 && (knj9_ = '');
            var jvn$ = gh4yi2['getFileInfo'](knj9_),
                igyx24 = gh4yi2['getFileNativePath'](jvn$['md5']);
            gi24xy['loader']['clearRes'](jvn$['readyUrl']), gh4yi2['fs']['unlink']({
                'filePath': igyx24,
                'success': function (wdt0b) {
                    if (knj9_ != '') gh4yi2['onSaveFile'](knj9_, l6es);
                    $bwdt != null && $bwdt['runWith']([0x0]);
                },
                'fail': function (p7lmz) {}
            });
        }, gh4yi2['onSaveFile'] = function (eiy56, hg4i2) {
            var efls5 = eiy56['split']('?')[0x0];
            gh4yi2['filesListObj'][efls5] = {
                'md5': hg4i2,
                'readyUrl': eiy56
            }, gh4yi2['fs']['writeFile']({
                'filePath': gh4yi2['fileNativeDir'] + '/' + gh4yi2['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](gh4yi2['filesListObj']),
                'success': function (ygxe6i) {
                    console['log']('写入测试测试成功：', ygxe6i);
                },
                'fail': function (ulmp) {
                    console['log']('写入测试测试失败：', ulmp);
                }
            });
        }, gh4yi2['existDir'] = function (s5l6f, qomua) {
            gh4yi2['fs']['mkdir']({
                'dirPath': s5l6f,
                'success': function (p7zom) {
                    qomua != null && qomua['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (xs65ey) {
                    if (xs65ey['errMsg']['indexOf']('file already exists') != -0x1) gh4yi2['readSync'](gh4yi2['fileListName'], 'utf8', qomua);else qomua != null && qomua['runWith']([0x1, xs65ey]);
                }
            });
        }, gh4yi2['readSync'] = function (spf5l6, u7lmz, up7omz, pzsf7l) {
            u7lmz === void 0x0 && (u7lmz = 'ascill'), pzsf7l === void 0x0 && (pzsf7l = '');
            var giexy = gh4yi2['getFileNativePath'](spf5l6),
                wdt0$;
            try {
                wdt0$ = gh4yi2['fs']['readFileSync'](giexy), up7omz != null && up7omz['runWith']([0x0, { 'data': wdt0$ }]);
            } catch (jnkw) {
                up7omz != null && up7omz['runWith']([0x1]);
            }
        }, gh4yi2['readCache'] = function () {}, gh4yi2['writeCache'] = function (lszf7) {
            var oz7uma = readyUrl['split']('?')[0x0];
            gh4yi2['filesListObj'][oz7uma] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, gh4yi2['fs']['writeFile']({
                'filePath': gh4yi2['fileNativeDir'] + '/' + gh4yi2['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](gh4yi2['filesListObj']),
                'success': function (l6pfs5) {},
                'fail': function (w0btd$) {}
            });
        }, gh4yi2['setNativeFileDir'] = function (y56ie) {
            gh4yi2['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + y56ie;
        }, gh4yi2['filesListObj'] = {}, gh4yi2['fileNativeDir'] = null, gh4yi2['fileListName'] = 'layaairfiles.txt', gh4yi2['ziyuFileData'] = {}, $0vtw(gh4yi2, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), gh4yi2;
    }(h2431),
        jncvk9 = function (umorq) {
        function n_r9() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], n_r9['__super']['call'](this), this['_sound'] = n_r9['_createSound'](), this['_chanell'] = new knjvw(this['_sound']);
        }
        om_r(n_r9, 'laya.wx.mini.MiniSound', umorq);
        var zmuoa7 = n_r9['prototype'];
        return zmuoa7['load'] = function (gyie4) {
            var ie6gy = this;
            gyie4 = slzp7f['formatURL'](gyie4), this['url'] = gyie4;
            if (n_r9['_audioCache'][gyie4]) {
                this['event']('complete');
                return;
            }
            function lfzp5() {
                if (n_r9['_null'] != undefined) ie6gy['_sound']['onCanplay'](n_r9['_null']), ie6gy['_sound']['onError'](n_r9['_null']);else try {
                    ie6gy['_sound']['onCanplay'](null), ie6gy['_sound']['onError'](null), n_r9['_null'] = null;
                } catch (xg6iy) {
                    console['warn']('[wxmini] _clearSound:' + xg6iy), ie6gy['_sound']['onCanplay']($jn9), ie6gy['_sound']['onError']($jn9), n_r9['_null'] = $jn9;
                }
            }
            function t$bw() {
                qmao_r['loaded'] = !![], qmao_r['event']('complete'), n_r9['_audioCache'][qmao_r['url']] = qmao_r;
            }
            function cn9j_k(s5f6ex) {
                console['error']('errCode=' + s5f6ex['errCode'] + '  errMsg=' + s5f6ex['errMsg']), qmao_r['event']('error');
            }
            function $jn9() {}
            this['_sound']['onCanplay'](t$bw), this['_sound']['onError'](cn9j_k), this['_sound']['src'] = gyie4;
            var qmao_r = this;
        }, zmuoa7['play'] = function (vt9wj$, kvwnj9) {
            vt9wj$ === void 0x0 && (vt9wj$ = 0x0), kvwnj9 === void 0x0 && (kvwnj9 = 0x0);
            var g132, rmqoau;
            if (this['url'] == y42ghi['_tMusic']) {
                if (!n_r9['_musicAudio']) n_r9['_musicAudio'] = this['_sound'];
                g132 = n_r9['_musicAudio'], rmqoau = this['_chanell'];
            } else g132 = this['_sound'], rmqoau = this['_chanell'];
            return g132['src'] = this['url'], g132['startTime'] = 0x0, rmqoau['isStopped'] && (rmqoau['url'] = this['url'], rmqoau['loops'] = kvwnj9, rmqoau['startTime'] = vt9wj$, rmqoau['play'](), y42ghi['addChannel'](rmqoau)), rmqoau;
        }, zmuoa7['dispose'] = function () {
            var $wbtv0 = n_r9['_audioCache'][this['url']];
            $wbtv0 && ($wbtv0['src'] = '', delete n_r9['_audioCache'][this['url']]);
        }, es56lf(0x0, zmuoa7, 'duration', function () {
            return this['_sound']['duration'];
        }), n_r9['_createSound'] = function () {
            n_r9['_id']++;
            var y4eg = wvj['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return y4eg;
        }, n_r9['_musicAudio'] = null, n_r9['_id'] = 0x0, n_r9['_audioCache'] = {}, n_r9['_null'] = undefined, n_r9;
    }(h2431),
        knjvw = function (qamu7) {
        function tjv$0w(ckj_) {
            this['_audio'] = null, this['_onEnd'] = null, tjv$0w['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = ckj_, this['_onEnd'] = wdt$b['bind'](this['__onEnd'], this), ckj_['onEnded'](this['_onEnd']);
        }
        om_r(tjv$0w, 'laya.wx.mini.MiniSoundChannel', qamu7);
        var f65psl = tjv$0w['prototype'];
        return f65psl['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (gi24xy['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, f65psl['__onNull'] = function () {}, f65psl['play'] = function () {
            this['isStopped'] = ![], y42ghi['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, f65psl['stop'] = function () {
            this['isStopped'] = !![], y42ghi['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, f65psl['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, f65psl['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], y42ghi['addChannel'](this), this['_audio']['play']();
        }, es56lf(0x0, f65psl, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), es56lf(0x0, f65psl, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), es56lf(0x0, f65psl, 'volume', function () {
            return 0x1;
        }, function (jncvk) {}), tjv$0w['_null'] = undefined, tjv$0w;
    }(l5s),
        _rqnk = function () {
        function wtjv9$() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = wvj['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        om_r(wtjv9$, 'laya.wx.mini.MiniVideo');
        var h12g = wtjv9$['prototype'];
        return h12g['on'] = function (plmu7, roaqc, dwt) {
            if (plmu7 == 'loadedmetadata') this['onPlayFunc'] = dwt['bind'](roaqc), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else plmu7 == 'ended' && (this['onEndedFunC'] = dwt['bind'](roaqc), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, h12g['onTimeUpdateFunc'] = function (s6fpl) {
            this['position'] = s6fpl['position'], this['_duration'] = s6fpl['duration'];
        }, h12g['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, h12g['onended'] = function (_mrao, jtv$9w) {
            this['onEndedFunC'] = jtv$9w['bind'](_mrao), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, h12g['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, h12g['off'] = function (y6i5x, w$v9t, a7uoz) {
            if (y6i5x == 'loadedmetadata') this['onPlayFunc'] = a7uoz['bind'](w$v9t), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else y6i5x == 'ended' && (this['onEndedFunC'] = a7uoz['bind'](w$v9t), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, h12g['load'] = function (k9j_cn) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = k9j_cn;
        }, h12g['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, h12g['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, h12g['size'] = function (m7zop, i42gx) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = m7zop, this['videoElement']['height'] = i42gx;
        }, h12g['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, h12g['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, es56lf(0x0, h12g, 'duration', function () {
            return this['_duration'];
        }), es56lf(0x0, h12g, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (ca_orq) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = ca_orq;
        }), es56lf(0x0, h12g, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), es56lf(0x0, h12g, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), es56lf(0x0, h12g, 'ended', function () {
            return this['videoend'];
        }), es56lf(0x0, h12g, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (ei5y6) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = ei5y6;
        }), es56lf(0x0, h12g, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (d0b$8) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = d0b$8;
        }), es56lf(0x0, h12g, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (fz7plu) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = fz7plu;
        }), es56lf(0x0, h12g, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), es56lf(0x0, h12g, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (kj_9) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = kj_9;
        }), es56lf(0x0, h12g, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (hyg2i4) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = hyg2i4;
        }), es56lf(0x0, h12g, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), es56lf(0x0, h12g, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (jt$w0v) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = jt$w0v;
        }), es56lf(0x0, h12g, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (jvw9k) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = jvw9k;
        }), es56lf(0x0, h12g, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (_omaq) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = _omaq;
        }), wtjv9$;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var ix5 in Laya) {
        var es6fl5 = Laya[ix5];
        es6fl5 && es6fl5['__isclass'] && (exports[ix5] = es6fl5);
    }
});