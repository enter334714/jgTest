var s1 = wx.l$;
(function (window, document, oc_a) {
    var am_ = oc_a['un'],
        $0 = oc_a['uns'],
        oraq_m = oc_a['static'],
        $tv0wj = oc_a['class'],
        twb0v = oc_a['getset'],
        zpsf7 = oc_a['__newvec'],
        _nqr = laya['utils']['Browser'],
        f5exs6 = laya['events']['Event'],
        po7 = laya['events']['EventDispatcher'],
        efl5 = laya['resource']['HTMLImage'],
        dtbw = laya['utils']['Handler'],
        cnvj9k = laya['display']['Input'],
        i4ge = laya['net']['Loader'],
        $9vtwj = laya['maths']['Matrix'],
        $dt0b = laya['renders']['Render'],
        gy4xei = laya['utils']['RunDriver'],
        $bw0t = laya['media']['Sound'],
        nv9$j = laya['media']['SoundChannel'],
        s65 = laya['media']['SoundManager'],
        wd0$b = laya['display']['Stage'],
        zufl7p = laya['net']['URL'],
        _amorq = laya['utils']['Utils'],
        x6s5e = function () {
        function jcn9k() {}
        return $tv0wj(jcn9k, 'laya.wx.mini.MiniAdpter'), jcn9k['getJson'] = function ($9twjv) {
            return JSON['parse']($9twjv);
        }, jcn9k['init'] = function (v$9wtj, kn9jw) {
            v$9wtj === void 0x0 && (v$9wtj = ![]), kn9jw === void 0x0 && (kn9jw = ![]);
            if (jcn9k['_inited']) return;
            jcn9k['window'] = window;
            if (jcn9k['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            jcn9k['_inited'] = !![], jcn9k['isZiYu'] = kn9jw, jcn9k['isPosMsgYu'] = v$9wtj, jcn9k['EnvConfig'] = {}, !jcn9k['isZiYu'] && (r_q['setNativeFileDir']('/layaairGame'), r_q['existDir'](r_q['fileNativeDir'], dtbw['create'](jcn9k, jcn9k['onMkdirCallBack']))), jcn9k['window']['focus'] = function () {}, oc_a['getUrlPath'] = function () {}, jcn9k['window']['logtime'] = function (n_krc) {}, jcn9k['window']['alertTimeLog'] = function (cvn9j) {}, jcn9k['window']['resetShareInfo'] = function () {}, jcn9k['window']['CanvasRenderingContext2D'] = function () {}, jcn9k['window']['CanvasRenderingContext2D']['prototype'] = jcn9k['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], jcn9k['window']['document']['body']['appendChild'] = function () {}, jcn9k['EnvConfig']['pixelRatioInt'] = 0x0, gy4xei['getPixelRatio'] = jcn9k['pixelRatio'], jcn9k['_preCreateElement'] = _nqr['createElement'], _nqr['createElement'] = jcn9k['createElement'], gy4xei['createShaderCondition'] = jcn9k['createShaderCondition'], _amorq['parseXMLFromString'] = jcn9k['parseXMLFromString'], cnvj9k['_createInputElement'] = $b8t['_createInputElement'], jcn9k['EnvConfig']['load'] = i4ge['prototype']['load'], i4ge['prototype']['load'] = $9twv['prototype']['load'], jcn9k['isZiYu'] && v$9wtj && wx['onMessage'](function (pmz7ou) {
                pmz7ou['isLoad'] && (r_q['ziyuFileData'][pmz7ou['url']] = pmz7ou['data']);
            });
        }, jcn9k['onMkdirCallBack'] = function (ckrq, h2gi1) {
            if (!ckrq) r_q['filesListObj'] = JSON['parse'](h2gi1['data']);
        }, jcn9k['pixelRatio'] = function () {
            if (!jcn9k['EnvConfig']['pixelRatioInt']) try {
                var _qrnk = wx['getSystemInfoSync']();
                return jcn9k['EnvConfig']['pixelRatioInt'] = _qrnk['pixelRatio'], _qrnk = _qrnk, _qrnk['pixelRatio'];
            } catch (d80$t) {}
            return jcn9k['EnvConfig']['pixelRatioInt'];
        }, jcn9k['createElement'] = function (lf65ps) {
            if (lf65ps == 'canvas') {
                var n9vkj;
                return jcn9k['idx'] == 0x1 ? jcn9k['isZiYu'] ? (n9vkj = sharedCanvas, n9vkj['style'] = {}) : n9vkj = window['canvas'] : n9vkj = window['wx']['createCanvas'](), jcn9k['idx']++, n9vkj;
            } else {
                if (lf65ps == 'textarea' || lf65ps == 'input') return jcn9k['onCreateInput'](lf65ps);else {
                    if (lf65ps == 'div') {
                        var vwbt0$ = jcn9k['_preCreateElement'](lf65ps);
                        return vwbt0$['contains'] = function (xei6g) {
                            return null;
                        }, vwbt0$['removeChild'] = function (v0$wj) {}, vwbt0$;
                    } else return jcn9k['_preCreateElement'](lf65ps);
                }
            }
        }, jcn9k['onCreateInput'] = function (uroqm) {
            var ck9j_ = jcn9k['_preCreateElement'](uroqm);
            return ck9j_['focus'] = $b8t['wxinputFocus'], ck9j_['blur'] = $b8t['wxinputblur'], ck9j_['style'] = {}, ck9j_['value'] = 0x0, ck9j_['parentElement'] = {}, ck9j_['placeholder'] = {}, ck9j_['type'] = {}, ck9j_['setColor'] = function (gih14) {}, ck9j_['setType'] = function (t0j) {}, ck9j_['setFontFace'] = function ($tdw0b) {}, ck9j_['addEventListener'] = function (raqck_) {}, ck9j_['contains'] = function (mourqa) {
                return null;
            }, ck9j_['removeChild'] = function (gihy) {}, ck9j_;
        }, jcn9k['createShaderCondition'] = function (nc9rk_) {
            var fzslp5 = this,
                v$b = function () {
                var plu7zm = nc9rk_;
                return fzslp5[nc9rk_['replace']('this.', '')];
            };
            return v$b;
        }, jcn9k['EnvConfig'] = null, jcn9k['window'] = null, jcn9k['_preCreateElement'] = null, jcn9k['_inited'] = ![], jcn9k['wxRequest'] = null, jcn9k['systemInfo'] = null, jcn9k['version'] = '0.0.1', jcn9k['isZiYu'] = ![], jcn9k['isPosMsgYu'] = ![], jcn9k['parseXMLFromString'] = function (wt0v$j) {
            var wv$9jt, wv0t$;
            wt0v$j = wt0v$j['replace'](/>\s+</g, '><');
            try {
                wv$9jt = new window['Parser']['DOMParser']()['parseFromString'](wt0v$j, 'text/xml');
            } catch (r_nkcq) {
                throw '需要引入xml解析库文件';
            }
            return wv$9jt;
        }, jcn9k['idx'] = 0x1, jcn9k;
    }(),
        egixy4 = function () {
        function nq_rc() {}
        $tv0wj(nq_rc, 'laya.wx.mini.MiniImage');
        var $tvjw9 = nq_rc['prototype'];
        return $tvjw9['_loadImage'] = function (nckjv9) {
            var x56yei = this,
                ig4y2h = ![];
            nckjv9['indexOf']('layaNativeDir/') == -0x1 && (ig4y2h = !![], nckjv9 = zufl7p['formatURL'](nckjv9));
            if (!r_q['getFileInfo'](nckjv9)) {
                if (nckjv9['indexOf']('http://') != -0x1 || nckjv9['indexOf']('https://') != -0x1) r_q['downImg'](nckjv9, new dtbw(nq_rc, nq_rc['onDownImgCallBack'], [nckjv9, x56yei]), nckjv9);else nq_rc['onCreateImage'](nckjv9, x56yei, !![]);
            } else nq_rc['onCreateImage'](nckjv9, x56yei, !ig4y2h);
        }, nq_rc['onDownImgCallBack'] = function (btw$0d, splzf7, vjw$9) {
            if (!vjw$9) nq_rc['onCreateImage'](btw$0d, splzf7);else splzf7['onError'](null);
        }, nq_rc['onCreateImage'] = function (wnvkj, d$tbw0, $d8b0) {
            $d8b0 === void 0x0 && ($d8b0 = ![]);
            var xgi6e;
            if (!$d8b0) {
                var xye6 = r_q['getFileInfo'](wnvkj),
                    cj_n = xye6['md5'];
                xgi6e = r_q['getFileNativePath'](cj_n);
            } else xgi6e = wnvkj;
            if (d$tbw0['imgCache'] == null) d$tbw0['imgCache'] = {};
            var tvj$;
            function qour() {
                tvj$['onload'] = null, tvj$['onerror'] = null, delete d$tbw0['imgCache'][wnvkj];
            }
            ;
            var pl6fs5 = function () {
                qour(), d$tbw0['onLoaded'](tvj$);
            },
                wnv9$j = function () {
                qour(), d$tbw0['event']('error', 'Load image failed');
            };
            d$tbw0['_type'] == 'nativeimage' ? (tvj$ = new _nqr['window']['Image'](), tvj$['crossOrigin'] = '', tvj$['onload'] = pl6fs5, tvj$['onerror'] = wnv9$j, tvj$['src'] = xgi6e, d$tbw0['imgCache'][wnvkj] = tvj$) : new efl5['create'](xgi6e, {
                'onload': pl6fs5,
                'onerror': wnv9$j,
                'onCreate': function (ih24) {
                    tvj$ = ih24, d$tbw0['imgCache'][wnvkj] = ih24;
                }
            });
        }, nq_rc;
    }(),
        $b8t = function () {
        function d8t0$() {}
        return $tv0wj(d8t0$, 'laya.wx.mini.MiniInput'), d8t0$['_createInputElement'] = function () {
            cnvj9k['_initInput'](cnvj9k['area'] = _nqr['createElement']('textarea')), cnvj9k['_initInput'](cnvj9k['input'] = _nqr['createElement']('input')), cnvj9k['inputContainer'] = _nqr['createElement']('div'), cnvj9k['inputContainer']['style']['position'] = 'absolute', cnvj9k['inputContainer']['style']['zIndex'] = 0x186a0, _nqr['container']['appendChild'](cnvj9k['inputContainer']), cnvj9k['inputContainer']['setPos'] = function (sl56e, ef65x) {
                cnvj9k['inputContainer']['style']['left'] = sl56e + 'px', cnvj9k['inputContainer']['style']['top'] = ef65x + 'px';
            }, oc_a['stage']['on']('resize', null, d8t0$['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (t$0wb) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), s65['_soundClass'] = eixy4, s65['_musicClass'] = eixy4, window['_videoClass'] = y6xie;
        }, d8t0$['_onStageResize'] = function () {
            var r_ckaq = oc_a['stage']['_canvasTransform']['identity']();
            r_ckaq['scale'](_nqr['width'] / $dt0b['canvas']['width'] / gy4xei['getPixelRatio'](), _nqr['height'] / $dt0b['canvas']['height'] / gy4xei['getPixelRatio']());
        }, d8t0$['wxinputFocus'] = function (quraom) {
            var nck_9 = cnvj9k['inputElement']['target'];
            if (nck_9 && !nck_9['editable']) return;
            x6s5e['window']['wx']['offKeyboardConfirm'](), x6s5e['window']['wx']['offKeyboardInput'](), x6s5e['window']['wx']['showKeyboard']({
                'defaultValue': nck_9['text'],
                'maxLength': nck_9['maxChars'],
                'multiple': nck_9['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (cq_rk) {},
                'fail': function (raco) {}
            }), x6s5e['window']['wx']['onKeyboardConfirm'](function (arcoq_) {
                var j9t$vw = arcoq_ ? arcoq_['value'] : '';
                nck_9['text'] = j9t$vw, nck_9['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), x6s5e['window']['wx']['onKeyboardInput'](function (xiyge4) {
                var l65fsp = xiyge4 ? xiyge4['value'] : '';
                if (!nck_9['multiline']) {
                    if (l65fsp['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                nck_9['text'] = l65fsp, nck_9['event']('input');
            });
        }, d8t0$['inputEnter'] = function () {
            cnvj9k['inputElement']['target']['focus'] = ![];
        }, d8t0$['wxinputblur'] = function () {
            d8t0$['hideKeyboard']();
        }, d8t0$['hideKeyboard'] = function () {
            x6s5e['window']['wx']['offKeyboardConfirm'](), x6s5e['window']['wx']['offKeyboardInput'](), x6s5e['window']['wx']['hideKeyboard']({
                'success': function (maqrou) {
                    console['log']('隐藏键盘');
                },
                'fail': function (qr_ak) {
                    console['log']('隐藏键盘出错:' + (qr_ak ? qr_ak['errMsg'] : ''));
                }
            });
        }, d8t0$;
    }(),
        $9twv = function () {
        function _kcj9n() {}
        $tv0wj(_kcj9n, 'laya.wx.mini.MiniLoader');
        var se6f = _kcj9n['prototype'];
        return se6f['load'] = function (n_qk, gy4ih, moqa7, ckrnq_, q7ouma) {
            moqa7 === void 0x0 && (moqa7 = !![]), q7ouma === void 0x0 && (q7ouma = ![]);
            var slef = this;
            slef['_url'] = n_qk;
            if (n_qk['indexOf']('data:image') === 0x0) slef['_type'] = gy4ih = 'image';else slef['_type'] = gy4ih || (gy4ih = slef['getTypeFromUrl'](n_qk));
            slef['_cache'] = moqa7, slef['_data'] = null;
            var cn9vkj = 'ascii';
            if (n_qk['indexOf']('.fnt') != -0x1) cn9vkj = 'utf8';else gy4ih == 'arraybuffer' && (cn9vkj = '');
            ;
            var f7puz = _amorq['getFileExtension'](n_qk);
            if (_kcj9n['_fileTypeArr']['indexOf'](f7puz) != -0x1) x6s5e['EnvConfig']['load']['call'](this, n_qk, gy4ih, moqa7, ckrnq_, q7ouma);else {
                if (!r_q['getFileInfo'](n_qk)) {
                    if (n_qk['indexOf']('layaNativeDir/') != -0x1) {
                        if (x6s5e['isZiYu']) {
                            var nck9_ = r_q['ziyuFileData'][n_qk];
                            slef['onLoaded'](nck9_);
                            return;
                        } else {
                            cosnole['log']('read read'), r_q['read'](n_qk, cn9vkj, new dtbw(_kcj9n, _kcj9n['onReadNativeCallBack'], [cn9vkj, n_qk, gy4ih, moqa7, ckrnq_, q7ouma, slef]));
                            return;
                        }
                    }
                    if (zufl7p['rootPath'] == '') var crq_ao = n_qk;else crq_ao = n_qk['split'](zufl7p['rootPath'])[0x0];
                    n_qk['indexOf']('http://') != -0x1 || n_qk['indexOf']('https://') != -0x1 ? x6s5e['EnvConfig']['load']['call'](slef, n_qk, gy4ih, moqa7, ckrnq_, q7ouma) : r_q['readFile'](crq_ao, cn9vkj, new dtbw(_kcj9n, _kcj9n['onReadNativeCallBack'], [cn9vkj, n_qk, gy4ih, moqa7, ckrnq_, q7ouma, slef]), n_qk);
                } else x6s5e['EnvConfig']['load']['call'](this, n_qk, gy4ih, moqa7, ckrnq_, q7ouma);
            }
        }, se6f['resMgrLoad'] = function (b8d0t, j9knvw, hg2iy, _rqaoc, lp6f5, kjn_c, tv$0jw) {
            hg2iy === void 0x0 && (hg2iy = 0x0), _rqaoc === void 0x0 && (_rqaoc = ![]), lp6f5 === void 0x0 && (lp6f5 = ![]), kjn_c === void 0x0 && (kjn_c = 0x0), tv$0jw === void 0x0 && (tv$0jw = 0x3), b8d0t['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', b8d0t), x6s5e['EnvConfig']['resMgrLoad'](b8d0t, (wt$0j, j9tvw, _kaqc) => {
                _kcj9n['prototype']['resMgrLoadCallBack'](wt$0j, j9tvw, _kaqc, j9knvw);
            }, hg2iy, _rqaoc, lp6f5, kjn_c, tv$0jw);
        }, se6f['resMgrLoadCallBack'] = function (rqac_, aquom7, y6xgi, kcrqa) {
            console['log']('buff:::', rqac_, y6xgi, r_q['fileNativeDir'] + '///' + r_q['fileListName']), kcrqa(rqac_, aquom7, y6xgi);
        }, se6f['clearRes'] = function (y6xe5i, nw9kjv) {
            nw9kjv === void 0x0 && (nw9kjv = ![]);
            var g241h3 = this;
            g241h3['clearRes'](y6xe5i, nw9kjv);
            var kr_qc = r_q['getFileInfo'](y6xe5i);
            if (kr_qc && (y6xe5i['indexOf']('http://') != -0x1 || y6xe5i['indexOf']('https://') != -0x1)) {
                var jw9vkn = kr_qc['md5'],
                    yhgi24 = r_q['getFileNativePath'](jw9vkn);
                r_q['remove'](yhgi24);
            }
        }, _kcj9n['onReadNativeCallBack'] = function (knvjw, ulzf7p, y4gx2i, ump7zo, psfl65, xi42gy, $jvt0, l5fes, w$9vt) {
            ump7zo === void 0x0 && (ump7zo = !![]), xi42gy === void 0x0 && (xi42gy = ![]), l5fes === void 0x0 && (l5fes = 0x0);
            if (!l5fes) {
                var vw0$;
                if (y4gx2i == 'json' || y4gx2i == 'atlas') vw0$ = x6s5e['getJson'](w$9vt['data']);else y4gx2i == 'xml' ? vw0$ = _amorq['parseXMLFromString'](w$9vt['data']) : vw0$ = w$9vt['data'];
                $jvt0['onLoaded'](vw0$), !x6s5e['isZiYu'] && x6s5e['isPosMsgYu'] && y4gx2i != 'arraybuffer' && wx['postMessage']({
                    'url': ulzf7p,
                    'data': vw0$,
                    'isLoad': !![]
                });
            } else l5fes == 0x1 && x6s5e['EnvConfig']['load']['call']($jvt0, ulzf7p, y4gx2i, ump7zo, psfl65, xi42gy);
        }, oraq_m(_kcj9n, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), _kcj9n;
    }(),
        r_q = function (ig2hy) {
        function kaq_rc() {
            kaq_rc['__super']['call'](this);
            ;
        }
        return $tv0wj(kaq_rc, 'laya.wx.mini.MiniFileMgr', ig2hy), kaq_rc['isLoadFile'] = function (d8bt) {
            return kaq_rc['_fileTypeArr']['indexOf'](d8bt) != -0x1 ? !![] : ![];
        }, kaq_rc['getFileInfo'] = function (le5f6s) {
            var omaq = le5f6s['split']('?')[0x0],
                dt$0wb = kaq_rc['filesListObj'][omaq];
            if (dt$0wb == null) return null;else return dt$0wb;
            return null;
        }, kaq_rc['onFileUpdate'] = function (vt$wb0, _roqca) {
            var tvj$0w = vt$wb0['split']('/'),
                ml7p = tvj$0w[tvj$0w['length'] - 0x1],
                r9 = kaq_rc['getFileInfo'](_roqca);
            if (r9 == null) kaq_rc['onSaveFile'](_roqca, ml7p);else {
                if (r9['readyUrl'] != _roqca) kaq_rc['remove'](ml7p, _roqca);
            }
        }, kaq_rc['exits'] = function (moq7ua, eig6x) {
            var krcn_ = kaq_rc['getFileNativePath'](moq7ua);
            kaq_rc['fs']['getFileInfo']({
                'filePath': krcn_,
                'success': function (j9tw$v) {
                    eig6x != null && eig6x['runWith']([0x0, j9tw$v]);
                },
                'fail': function (t$b0v) {
                    eig6x != null && eig6x['runWith']([0x1, t$b0v]);
                }
            });
        }, kaq_rc['read'] = function ($jw0tv, car_o, qu7am, _kcqa) {
            car_o === void 0x0 && (car_o = 'ascill'), _kcqa === void 0x0 && (_kcqa = '');
            var gxey6i;
            _kcqa != '' ? gxey6i = kaq_rc['getFileNativePath']($jw0tv) : gxey6i = $jw0tv, kaq_rc['fs']['readFile']({
                'filePath': gxey6i,
                'encoding': car_o,
                'success': function (z5lp) {
                    qu7am != null && qu7am['runWith']([0x0, z5lp]);
                },
                'fail': function (wjvt$9) {
                    if (wjvt$9 && _kcqa != '') kaq_rc['down'](_kcqa, car_o, qu7am, _kcqa);else qu7am != null && qu7am['runWith']([0x1]);
                }
            });
        }, kaq_rc['readNativeFile'] = function (zml7pu, arumo) {
            kaq_rc['fs']['readFile']({
                'filePath': zml7pu,
                'encoding': '',
                'success': function (g23h) {
                    arumo != null && arumo['runWith']([0x0]);
                },
                'fail': function (t8$) {
                    arumo != null && arumo['runWith']([0x1]);
                }
            });
        }, kaq_rc['down'] = function (sl7fz, iy4gex, b$dt8, _cn9j) {
            iy4gex === void 0x0 && (iy4gex = 'ascill'), _cn9j === void 0x0 && (_cn9j = '');
            var wv$j = kaq_rc['getFileNativePath'](_cn9j),
                nrc = kaq_rc['wxdown']({
                'url': sl7fz,
                'filePath': wv$j,
                'success': function (j9$wvt) {
                    if (j9$wvt['statusCode'] === 0xc8) kaq_rc['readFile'](j9$wvt['filePath'], iy4gex, b$dt8, _cn9j);
                },
                'fail': function (btd0w) {
                    b$dt8 != null && b$dt8['runWith']([0x1, btd0w]);
                }
            });
            nrc['onProgressUpdate'](function (cjkvn) {
                b$dt8 != null && b$dt8['runWith']([0x2, cjkvn['progress']]);
            });
        }, kaq_rc['readFile'] = function (kvcj, $jtv0, j9wvn, pzuf) {
            $jtv0 === void 0x0 && ($jtv0 = 'ascill'), pzuf === void 0x0 && (pzuf = ''), kaq_rc['fs']['readFile']({
                'filePath': kvcj,
                'encoding': $jtv0,
                'success': function (ef56s) {
                    if (kvcj['indexOf']('http://') != -0x1 || kvcj['indexOf']('https://') != -0x1) kaq_rc['onFileUpdate'](kvcj, pzuf);
                    j9wvn != null && j9wvn['runWith']([0x0, ef56s]);
                },
                'fail': function (xs6f5e) {
                    if (xs6f5e) j9wvn != null && j9wvn['runWith']([0x1, xs6f5e]);
                }
            });
        }, kaq_rc['downImg'] = function (jwnvk, _j, s6xy) {
            s6xy === void 0x0 && (s6xy = '');
            var r_nqk = kaq_rc['wxdown']({
                'url': jwnvk,
                'success': function (zm7oau) {
                    zm7oau['statusCode'] === 0xc8 && kaq_rc['copyFile'](zm7oau['tempFilePath'], s6xy, _j);
                },
                'fail': function (oqm_ra) {
                    _j != null && _j['runWith']([0x1, oqm_ra]);
                }
            });
        }, kaq_rc['copyFile'] = function (j9n_ck, b8$0td, yig2x4) {
            var wjt0$ = j9n_ck['split']('/'),
                wtvj$9 = wjt0$[wjt0$['length'] - 0x1],
                xyie5 = b8$0td['split']('?')[0x0],
                dtb8$ = kaq_rc['getFileInfo'](b8$0td),
                zlp5s = kaq_rc['getFileNativePath'](wtvj$9);
            kaq_rc['fs']['copyFile']({
                'srcPath': j9n_ck,
                'destPath': zlp5s,
                'success': function (uzlp) {
                    if (!dtb8$) kaq_rc['onSaveFile'](b8$0td, wtvj$9), yig2x4 != null && yig2x4['runWith']([0x0]);else {
                        if (dtb8$['readyUrl'] != b8$0td) kaq_rc['remove'](wtvj$9, b8$0td, yig2x4);
                    }
                },
                'fail': function (lzfp7) {
                    yig2x4 != null && yig2x4['runWith']([0x1, lzfp7]);
                }
            });
        }, kaq_rc['getFileNativePath'] = function (lpfsz5) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + lpfsz5;
        }, kaq_rc['remove'] = function (k9ncr, pzo7um, aro_q) {
            pzo7um === void 0x0 && (pzo7um = '');
            var vj$t9 = kaq_rc['getFileInfo'](pzo7um),
                se65f = kaq_rc['getFileNativePath'](vj$t9['md5']);
            oc_a['loader']['clearRes'](vj$t9['readyUrl']), kaq_rc['fs']['unlink']({
                'filePath': se65f,
                'success': function (ozuma) {
                    if (pzo7um != '') kaq_rc['onSaveFile'](pzo7um, k9ncr);
                    aro_q != null && aro_q['runWith']([0x0]);
                },
                'fail': function (aqrm_o) {}
            });
        }, kaq_rc['onSaveFile'] = function (wtd0$, uarmq) {
            var y6xse5 = wtd0$['split']('?')[0x0];
            kaq_rc['filesListObj'][y6xse5] = {
                'md5': uarmq,
                'readyUrl': wtd0$
            }, kaq_rc['fs']['writeFile']({
                'filePath': kaq_rc['fileNativeDir'] + '/' + kaq_rc['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](kaq_rc['filesListObj']),
                'success': function (qa7oum) {
                    console['log']('写入测试测试成功：', qa7oum);
                },
                'fail': function (njw9v$) {
                    console['log']('写入测试测试失败：', njw9v$);
                }
            });
        }, kaq_rc['existDir'] = function (pmluz7, ps7fz) {
            kaq_rc['fs']['mkdir']({
                'dirPath': pmluz7,
                'success': function (igexy) {
                    ps7fz != null && ps7fz['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (mo7u) {
                    if (mo7u['errMsg']['indexOf']('file already exists') != -0x1) kaq_rc['readSync'](kaq_rc['fileListName'], 'utf8', ps7fz);else ps7fz != null && ps7fz['runWith']([0x1, mo7u]);
                }
            });
        }, kaq_rc['readSync'] = function (mupoz, vncj, p65lf, t9$vw) {
            vncj === void 0x0 && (vncj = 'ascill'), t9$vw === void 0x0 && (t9$vw = '');
            var wdt0$ = kaq_rc['getFileNativePath'](mupoz),
                $nw9v;
            try {
                $nw9v = kaq_rc['fs']['readFileSync'](wdt0$), p65lf != null && p65lf['runWith']([0x0, { 'data': $nw9v }]);
            } catch (v$bt) {
                p65lf != null && p65lf['runWith']([0x1]);
            }
        }, kaq_rc['readCache'] = function () {}, kaq_rc['writeCache'] = function (iyg4e) {
            var plzuf7 = readyUrl['split']('?')[0x0];
            kaq_rc['filesListObj'][plzuf7] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, kaq_rc['fs']['writeFile']({
                'filePath': kaq_rc['fileNativeDir'] + '/' + kaq_rc['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](kaq_rc['filesListObj']),
                'success': function (_krqa) {},
                'fail': function (rqaou) {}
            });
        }, kaq_rc['setNativeFileDir'] = function (qmrua) {
            kaq_rc['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + qmrua;
        }, kaq_rc['filesListObj'] = {}, kaq_rc['fileNativeDir'] = null, kaq_rc['fileListName'] = 'layaairfiles.txt', kaq_rc['ziyuFileData'] = {}, oraq_m(kaq_rc, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), kaq_rc;
    }(po7),
        eixy4 = function (w0v$b) {
        function ul7fpz() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], ul7fpz['__super']['call'](this), this['_sound'] = ul7fpz['_createSound'](), this['_chanell'] = new xiye6(this['_sound']);
        }
        $tv0wj(ul7fpz, 'laya.wx.mini.MiniSound', w0v$b);
        var ie6y5x = ul7fpz['prototype'];
        return ie6y5x['load'] = function (esf6l5) {
            var u7lmp = this;
            esf6l5 = zufl7p['formatURL'](esf6l5), this['url'] = esf6l5;
            if (ul7fpz['_audioCache'][esf6l5]) {
                this['event']('complete');
                return;
            }
            function oaqu7m() {
                if (ul7fpz['_null'] != undefined) u7lmp['_sound']['onCanplay'](ul7fpz['_null']), u7lmp['_sound']['onError'](ul7fpz['_null']);else try {
                    u7lmp['_sound']['onCanplay'](null), u7lmp['_sound']['onError'](null), ul7fpz['_null'] = null;
                } catch (w$jv9) {
                    console['warn']('[wxmini] _clearSound:' + w$jv9), u7lmp['_sound']['onCanplay'](nc9rk), u7lmp['_sound']['onError'](nc9rk), ul7fpz['_null'] = nc9rk;
                }
            }
            function uoz7ma() {
                c9_jk['loaded'] = !![], c9_jk['event']('complete'), ul7fpz['_audioCache'][c9_jk['url']] = c9_jk;
            }
            function zlu7f(upoz) {
                console['error']('errCode=' + upoz['errCode'] + '  errMsg=' + upoz['errMsg']), c9_jk['event']('error');
            }
            function nc9rk() {}
            this['_sound']['onCanplay'](uoz7ma), this['_sound']['onError'](zlu7f), this['_sound']['src'] = esf6l5;
            var c9_jk = this;
        }, ie6y5x['play'] = function (tw0vj, tvw0j) {
            tw0vj === void 0x0 && (tw0vj = 0x0), tvw0j === void 0x0 && (tvw0j = 0x0);
            var g2iy, $vjw9t;
            if (this['url'] == s65['_tMusic']) {
                if (!ul7fpz['_musicAudio']) ul7fpz['_musicAudio'] = this['_sound'];
                g2iy = ul7fpz['_musicAudio'], $vjw9t = this['_chanell'];
            } else g2iy = this['_sound'], $vjw9t = this['_chanell'];
            return g2iy['src'] = this['url'], g2iy['startTime'] = 0x0, $vjw9t['isStopped'] && ($vjw9t['url'] = this['url'], $vjw9t['loops'] = tvw0j, $vjw9t['startTime'] = tw0vj, $vjw9t['play'](), s65['addChannel']($vjw9t)), $vjw9t;
        }, ie6y5x['dispose'] = function () {
            var fx5e6s = ul7fpz['_audioCache'][this['url']];
            fx5e6s && (fx5e6s['src'] = '', delete ul7fpz['_audioCache'][this['url']]);
        }, twb0v(0x0, ie6y5x, 'duration', function () {
            return this['_sound']['duration'];
        }), ul7fpz['_createSound'] = function () {
            ul7fpz['_id']++;
            var kq_car = x6s5e['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return kq_car;
        }, ul7fpz['_musicAudio'] = null, ul7fpz['_id'] = 0x0, ul7fpz['_audioCache'] = {}, ul7fpz['_null'] = undefined, ul7fpz;
    }(po7),
        xiye6 = function (xf5se6) {
        function uqraom(kr_cqa) {
            this['_audio'] = null, this['_onEnd'] = null, uqraom['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = kr_cqa, this['_onEnd'] = _amorq['bind'](this['__onEnd'], this), kr_cqa['onEnded'](this['_onEnd']);
        }
        $tv0wj(uqraom, 'laya.wx.mini.MiniSoundChannel', xf5se6);
        var zumpl7 = uqraom['prototype'];
        return zumpl7['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (oc_a['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, zumpl7['__onNull'] = function () {}, zumpl7['play'] = function () {
            this['isStopped'] = ![], s65['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, zumpl7['stop'] = function () {
            this['isStopped'] = !![], s65['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, zumpl7['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, zumpl7['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], s65['addChannel'](this), this['_audio']['play']();
        }, twb0v(0x0, zumpl7, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), twb0v(0x0, zumpl7, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), twb0v(0x0, zumpl7, 'volume', function () {
            return 0x1;
        }, function (d$t0b) {}), uqraom['_null'] = undefined, uqraom;
    }(nv9$j),
        y6xie = function () {
        function wtvj0() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = x6s5e['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        $tv0wj(wtvj0, 'laya.wx.mini.MiniVideo');
        var crn9_ = wtvj0['prototype'];
        return crn9_['on'] = function (q_aorc, g6iyx, yh24ig) {
            if (q_aorc == 'loadedmetadata') this['onPlayFunc'] = yh24ig['bind'](g6iyx), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else q_aorc == 'ended' && (this['onEndedFunC'] = yh24ig['bind'](g6iyx), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, crn9_['onTimeUpdateFunc'] = function (oura) {
            this['position'] = oura['position'], this['_duration'] = oura['duration'];
        }, crn9_['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, crn9_['onended'] = function (yh24i, _mq) {
            this['onEndedFunC'] = _mq['bind'](yh24i), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, crn9_['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, crn9_['off'] = function (cjv9k, jwtv$, zp7ul) {
            if (cjv9k == 'loadedmetadata') this['onPlayFunc'] = zp7ul['bind'](jwtv$), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else cjv9k == 'ended' && (this['onEndedFunC'] = zp7ul['bind'](jwtv$), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, crn9_['load'] = function (splf56) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = splf56;
        }, crn9_['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, crn9_['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, crn9_['size'] = function (twd0b, o_qm) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = twd0b, this['videoElement']['height'] = o_qm;
        }, crn9_['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, crn9_['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, twb0v(0x0, crn9_, 'duration', function () {
            return this['_duration'];
        }), twb0v(0x0, crn9_, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (xs5f6) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = xs5f6;
        }), twb0v(0x0, crn9_, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), twb0v(0x0, crn9_, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), twb0v(0x0, crn9_, 'ended', function () {
            return this['videoend'];
        }), twb0v(0x0, crn9_, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (akq_rc) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = akq_rc;
        }), twb0v(0x0, crn9_, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (x5f6s) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = x5f6s;
        }), twb0v(0x0, crn9_, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (moruq) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = moruq;
        }), twb0v(0x0, crn9_, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), twb0v(0x0, crn9_, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (jt$v9w) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = jt$v9w;
        }), twb0v(0x0, crn9_, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (xe65y) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = xe65y;
        }), twb0v(0x0, crn9_, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), twb0v(0x0, crn9_, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (yi42gx) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = yi42gx;
        }), twb0v(0x0, crn9_, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (h21g43) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = h21g43;
        }), twb0v(0x0, crn9_, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (sz7pf) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = sz7pf;
        }), wtvj0;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var pz7ulm in Laya) {
        var g4iye = Laya[pz7ulm];
        g4iye && g4iye['__isclass'] && (exports[pz7ulm] = g4iye);
    }
});