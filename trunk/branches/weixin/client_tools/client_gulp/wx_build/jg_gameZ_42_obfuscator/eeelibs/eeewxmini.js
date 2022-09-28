var b = wx.$e;
(function (window, document, $xhltg) {
    var cpoame = $xhltg['un'],
        zv4fyr = $xhltg['uns'],
        f4y_zv = $xhltg['static'],
        yhlzfr = $xhltg['class'],
        hg$xl = $xhltg['getset'],
        sk9ub = $xhltg['__newvec'],
        fzyrvh = laya['utils']['Browser'],
        caoepm = laya['events']['Event'],
        zyfhlr = laya['events']['EventDispatcher'],
        igxl$t = laya['resource']['HTMLImage'],
        bk6s90 = laya['utils']['Handler'],
        lgrtxh = laya['display']['Input'],
        z4rvfy = laya['net']['Loader'],
        oac = laya['maths']['Matrix'],
        tlyrzh = laya['renders']['Render'],
        rlfh = laya['utils']['RunDriver'],
        maopce = laya['media']['Sound'],
        n39qus = laya['media']['SoundChannel'],
        th$lg = laya['media']['SoundManager'],
        fa47_v = laya['display']['Stage'],
        yvf_ = laya['net']['URL'],
        ks6u = laya['utils']['Utils'],
        c74a = function () {
        function mepac() {}
        return yhlzfr(mepac, 'laya.wx.mini.MiniAdpter'), mepac['getJson'] = function (yf4_zv) {
            return JSON['parse'](yf4_zv);
        }, mepac['init'] = function (empo, n3s9) {
            empo === void 0x0 && (empo = ![]), n3s9 === void 0x0 && (n3s9 = ![]);
            if (mepac['_inited']) return;
            mepac['window'] = window;
            if (mepac['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            mepac['_inited'] = !![], mepac['isZiYu'] = n3s9, mepac['isPosMsgYu'] = empo, mepac['EnvConfig'] = {}, !mepac['isZiYu'] && (b508['setNativeFileDir']('/layaairGame'), b508['existDir'](b508['fileNativeDir'], bk6s90['create'](mepac, mepac['onMkdirCallBack']))), mepac['window']['focus'] = function () {}, $xhltg['getUrlPath'] = function () {}, mepac['window']['logtime'] = function (lghzt) {}, mepac['window']['alertTimeLog'] = function (f4yz) {}, mepac['window']['resetShareInfo'] = function () {}, mepac['window']['CanvasRenderingContext2D'] = function () {}, mepac['window']['CanvasRenderingContext2D']['prototype'] = mepac['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], mepac['window']['document']['body']['appendChild'] = function () {}, mepac['EnvConfig']['pixelRatioInt'] = 0x0, rlfh['getPixelRatio'] = mepac['pixelRatio'], mepac['_preCreateElement'] = fzyrvh['createElement'], fzyrvh['createElement'] = mepac['createElement'], rlfh['createShaderCondition'] = mepac['createShaderCondition'], ks6u['parseXMLFromString'] = mepac['parseXMLFromString'], lgrtxh['_createInputElement'] = q3$xj['_createInputElement'], mepac['EnvConfig']['load'] = z4rvfy['prototype']['load'], z4rvfy['prototype']['load'] = _7yv['prototype']['load'], mepac['isZiYu'] && empo && wx['onMessage'](function (b960s) {
                b960s['isLoad'] && (b508['ziyuFileData'][b960s['url']] = b960s['data']);
            });
        }, mepac['onMkdirCallBack'] = function (hg$txl, glzhtr) {
            if (!hg$txl) b508['filesListObj'] = JSON['parse'](glzhtr['data']);
        }, mepac['pixelRatio'] = function () {
            if (!mepac['EnvConfig']['pixelRatioInt']) try {
                var ocepm = wx['getSystemInfoSync']();
                return mepac['EnvConfig']['pixelRatioInt'] = ocepm['pixelRatio'], ocepm = ocepm, ocepm['pixelRatio'];
            } catch (x$jt) {}
            return mepac['EnvConfig']['pixelRatioInt'];
        }, mepac['createElement'] = function (nujq3s) {
            if (nujq3s == 'canvas') {
                var $3jnq;
                return mepac['idx'] == 0x1 ? mepac['isZiYu'] ? ($3jnq = sharedCanvas, $3jnq['style'] = {}) : $3jnq = window['canvas'] : $3jnq = window['wx']['createCanvas'](), mepac['idx']++, $3jnq;
            } else {
                if (nujq3s == 'textarea' || nujq3s == 'input') return mepac['onCreateInput'](nujq3s);else {
                    if (nujq3s == 'div') {
                        var v4y_7 = mepac['_preCreateElement'](nujq3s);
                        return v4y_7['contains'] = function (yrzfh) {
                            return null;
                        }, v4y_7['removeChild'] = function (capo) {}, v4y_7;
                    } else return mepac['_preCreateElement'](nujq3s);
                }
            }
        }, mepac['onCreateInput'] = function (d51w8) {
            var b5kd06 = mepac['_preCreateElement'](d51w8);
            return b5kd06['focus'] = q3$xj['wxinputFocus'], b5kd06['blur'] = q3$xj['wxinputblur'], b5kd06['style'] = {}, b5kd06['value'] = 0x0, b5kd06['parentElement'] = {}, b5kd06['placeholder'] = {}, b5kd06['type'] = {}, b5kd06['setColor'] = function (z_vy4) {}, b5kd06['setType'] = function (ji3$) {}, b5kd06['setFontFace'] = function (zv4fy_) {}, b5kd06['addEventListener'] = function (s6u9kb) {}, b5kd06['contains'] = function (_m7oac) {
                return null;
            }, b5kd06['removeChild'] = function (hzrg) {}, b5kd06;
        }, mepac['createShaderCondition'] = function (fa_7v) {
            var ocae = this,
                $htg = function () {
                var zrtgl = fa_7v;
                return ocae[fa_7v['replace']('this.', '')];
            };
            return $htg;
        }, mepac['EnvConfig'] = null, mepac['window'] = null, mepac['_preCreateElement'] = null, mepac['_inited'] = ![], mepac['wxRequest'] = null, mepac['systemInfo'] = null, mepac['version'] = '0.0.1', mepac['isZiYu'] = ![], mepac['isPosMsgYu'] = ![], mepac['parseXMLFromString'] = function (j$q3n) {
            var s69kb, f7_v4;
            j$q3n = j$q3n['replace'](/>\s+</g, '><');
            try {
                s69kb = new window['Parser']['DOMParser']()['parseFromString'](j$q3n, 'text/xml');
            } catch (zv) {
                throw '需要引入xml解析库文件';
            }
            return s69kb;
        }, mepac['idx'] = 0x1, mepac;
    }(),
        $xilt = function () {
        function qn3ji$() {}
        yhlzfr(qn3ji$, 'laya.wx.mini.MiniImage');
        var _74cm = qn3ji$['prototype'];
        return _74cm['_loadImage'] = function (pce) {
            var w128 = this,
                m7_v4 = ![];
            pce['indexOf']('layaNativeDir/') == -0x1 && (m7_v4 = !![], pce = yvf_['formatURL'](pce));
            if (!b508['getFileInfo'](pce)) {
                if (pce['indexOf']('http://') != -0x1 || pce['indexOf']('https://') != -0x1) b508['downImg'](pce, new bk6s90(qn3ji$, qn3ji$['onDownImgCallBack'], [pce, w128]), pce);else qn3ji$['onCreateImage'](pce, w128, !![]);
            } else qn3ji$['onCreateImage'](pce, w128, !m7_v4);
        }, qn3ji$['onDownImgCallBack'] = function (w5d8, gji$x3, $tigxl) {
            if (!$tigxl) qn3ji$['onCreateImage'](w5d8, gji$x3);else gji$x3['onError'](null);
        }, qn3ji$['onCreateImage'] = function (rtzlyh, qs3jun, sqnu3) {
            sqnu3 === void 0x0 && (sqnu3 = ![]);
            var vyfz4_;
            if (!sqnu3) {
                var a7pc = b508['getFileInfo'](rtzlyh),
                    q9un3 = a7pc['md5'];
                vyfz4_ = b508['getFileNativePath'](q9un3);
            } else vyfz4_ = rtzlyh;
            if (qs3jun['imgCache'] == null) qs3jun['imgCache'] = {};
            var rhfzly;
            function d2w51() {
                rhfzly['onload'] = null, rhfzly['onerror'] = null, delete qs3jun['imgCache'][rtzlyh];
            }
            ;
            var va47_m = function () {
                d2w51(), qs3jun['onLoaded'](rhfzly);
            },
                tzlryh = function () {
                d2w51(), qs3jun['event']('error', 'Load image failed');
            };
            qs3jun['_type'] == 'nativeimage' ? (rhfzly = new fzyrvh['window']['Image'](), rhfzly['crossOrigin'] = '', rhfzly['onload'] = va47_m, rhfzly['onerror'] = tzlryh, rhfzly['src'] = vyfz4_, qs3jun['imgCache'][rtzlyh] = rhfzly) : new igxl$t['create'](vyfz4_, {
                'onload': va47_m,
                'onerror': tzlryh,
                'onCreate': function (jt$x) {
                    rhfzly = jt$x, qs3jun['imgCache'][rtzlyh] = jt$x;
                }
            });
        }, qn3ji$;
    }(),
        q3$xj = function () {
        function y_7v4() {}
        return yhlzfr(y_7v4, 'laya.wx.mini.MiniInput'), y_7v4['_createInputElement'] = function () {
            lgrtxh['_initInput'](lgrtxh['area'] = fzyrvh['createElement']('textarea')), lgrtxh['_initInput'](lgrtxh['input'] = fzyrvh['createElement']('input')), lgrtxh['inputContainer'] = fzyrvh['createElement']('div'), lgrtxh['inputContainer']['style']['position'] = 'absolute', lgrtxh['inputContainer']['style']['zIndex'] = 0x186a0, fzyrvh['container']['appendChild'](lgrtxh['inputContainer']), lgrtxh['inputContainer']['setPos'] = function (zthlr, $3qin) {
                lgrtxh['inputContainer']['style']['left'] = zthlr + 'px', lgrtxh['inputContainer']['style']['top'] = $3qin + 'px';
            }, $xhltg['stage']['on']('resize', null, y_7v4['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_vm7) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), th$lg['_soundClass'] = skb09, th$lg['_musicClass'] = skb09, window['_videoClass'] = zrf4;
        }, y_7v4['_onStageResize'] = function () {
            var ecmp = $xhltg['stage']['_canvasTransform']['identity']();
            ecmp['scale'](fzyrvh['width'] / tlyrzh['canvas']['width'] / rlfh['getPixelRatio'](), fzyrvh['height'] / tlyrzh['canvas']['height'] / rlfh['getPixelRatio']());
        }, y_7v4['wxinputFocus'] = function ($3jiqx) {
            var ixq3 = lgrtxh['inputElement']['target'];
            if (ixq3 && !ixq3['editable']) return;
            c74a['window']['wx']['offKeyboardConfirm'](), c74a['window']['wx']['offKeyboardInput'](), c74a['window']['wx']['showKeyboard']({
                'defaultValue': ixq3['text'],
                'maxLength': ixq3['maxChars'],
                'multiple': ixq3['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (c7pao) {},
                'fail': function (u3s9qn) {}
            }), c74a['window']['wx']['onKeyboardConfirm'](function (il$gt) {
                var kb069 = il$gt ? il$gt['value'] : '';
                ixq3['text'] = kb069, ixq3['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), c74a['window']['wx']['onKeyboardInput'](function (_f4y) {
                var bk69u = _f4y ? _f4y['value'] : '';
                if (!ixq3['multiline']) {
                    if (bk69u['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                ixq3['text'] = bk69u, ixq3['event']('input');
            });
        }, y_7v4['inputEnter'] = function () {
            lgrtxh['inputElement']['target']['focus'] = ![];
        }, y_7v4['wxinputblur'] = function () {
            y_7v4['hideKeyboard']();
        }, y_7v4['hideKeyboard'] = function () {
            c74a['window']['wx']['offKeyboardConfirm'](), c74a['window']['wx']['offKeyboardInput'](), c74a['window']['wx']['hideKeyboard']({
                'success': function (zvf_y) {
                    console['log']('隐藏键盘');
                },
                'fail': function (yz_4fv) {
                    console['log']('隐藏键盘出错:' + (yz_4fv ? yz_4fv['errMsg'] : ''));
                }
            });
        }, y_7v4;
    }(),
        _7yv = function () {
        function fhyr() {}
        yhlzfr(fhyr, 'laya.wx.mini.MiniLoader');
        var w82 = fhyr['prototype'];
        return w82['load'] = function (su9nk6, rlhxgt, q$xi3j, jns3, fav74) {
            q$xi3j === void 0x0 && (q$xi3j = !![]), fav74 === void 0x0 && (fav74 = ![]);
            var fzrvh = this;
            fzrvh['_url'] = su9nk6;
            if (su9nk6['indexOf']('data:image') === 0x0) fzrvh['_type'] = rlhxgt = 'image';else fzrvh['_type'] = rlhxgt || (rlhxgt = fzrvh['getTypeFromUrl'](su9nk6));
            fzrvh['_cache'] = q$xi3j, fzrvh['_data'] = null;
            var amv = 'ascii';
            if (su9nk6['indexOf']('.fnt') != -0x1) amv = 'utf8';else rlhxgt == 'arraybuffer' && (amv = '');
            ;
            var s9kun = ks6u['getFileExtension'](su9nk6);
            if (fhyr['_fileTypeArr']['indexOf'](s9kun) != -0x1) c74a['EnvConfig']['load']['call'](this, su9nk6, rlhxgt, q$xi3j, jns3, fav74);else {
                if (!b508['getFileInfo'](su9nk6)) {
                    if (su9nk6['indexOf']('layaNativeDir/') != -0x1) {
                        if (c74a['isZiYu']) {
                            var htx$gl = b508['ziyuFileData'][su9nk6];
                            fzrvh['onLoaded'](htx$gl);
                            return;
                        } else {
                            cosnole['log']('read read'), b508['read'](su9nk6, amv, new bk6s90(fhyr, fhyr['onReadNativeCallBack'], [amv, su9nk6, rlhxgt, q$xi3j, jns3, fav74, fzrvh]));
                            return;
                        }
                    }
                    if (yvf_['rootPath'] == '') var x3i$jg = su9nk6;else x3i$jg = su9nk6['split'](yvf_['rootPath'])[0x0];
                    su9nk6['indexOf']('http://') != -0x1 || su9nk6['indexOf']('https://') != -0x1 ? c74a['EnvConfig']['load']['call'](fzrvh, su9nk6, rlhxgt, q$xi3j, jns3, fav74) : b508['readFile'](x3i$jg, amv, new bk6s90(fhyr, fhyr['onReadNativeCallBack'], [amv, su9nk6, rlhxgt, q$xi3j, jns3, fav74, fzrvh]), su9nk6);
                } else c74a['EnvConfig']['load']['call'](this, su9nk6, rlhxgt, q$xi3j, jns3, fav74);
            }
        }, w82['resMgrLoad'] = function (xtgj, qx3i, _4zvf, _4f7a, thxlg, yrhfl, x$thgl) {
            _4zvf === void 0x0 && (_4zvf = 0x0), _4f7a === void 0x0 && (_4f7a = ![]), thxlg === void 0x0 && (thxlg = ![]), yrhfl === void 0x0 && (yrhfl = 0x0), x$thgl === void 0x0 && (x$thgl = 0x3), xtgj['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xtgj), c74a['EnvConfig']['resMgrLoad'](xtgj, (yv_7f, opcaem, suk96n) => {
                fhyr['prototype']['resMgrLoadCallBack'](yv_7f, opcaem, suk96n, qx3i);
            }, _4zvf, _4f7a, thxlg, yrhfl, x$thgl);
        }, w82['resMgrLoadCallBack'] = function (o7cmp, ilxt$g, empoa, xitgj$) {
            console['log']('buff:::', o7cmp, empoa, b508['fileNativeDir'] + '///' + b508['fileListName']), xitgj$(o7cmp, ilxt$g, empoa);
        }, w82['clearRes'] = function (ns9qk, m7_c) {
            m7_c === void 0x0 && (m7_c = ![]);
            var thlxrg = this;
            thlxrg['clearRes'](ns9qk, m7_c);
            var yzfr = b508['getFileInfo'](ns9qk);
            if (yzfr && (ns9qk['indexOf']('http://') != -0x1 || ns9qk['indexOf']('https://') != -0x1)) {
                var d85w1 = yzfr['md5'],
                    ix3$j = b508['getFileNativePath'](d85w1);
                b508['remove'](ix3$j);
            }
        }, fhyr['onReadNativeCallBack'] = function (yzrfv, oc7a_, epacom, _7mva, vfzyr4, ap7cmo, lgzthr, o_acm, nj3qs) {
            _7mva === void 0x0 && (_7mva = !![]), ap7cmo === void 0x0 && (ap7cmo = ![]), o_acm === void 0x0 && (o_acm = 0x0);
            if (!o_acm) {
                var mop7;
                if (epacom == 'json' || epacom == 'atlas') mop7 = c74a['getJson'](nj3qs['data']);else epacom == 'xml' ? mop7 = ks6u['parseXMLFromString'](nj3qs['data']) : mop7 = nj3qs['data'];
                lgzthr['onLoaded'](mop7), !c74a['isZiYu'] && c74a['isPosMsgYu'] && epacom != 'arraybuffer' && wx['postMessage']({
                    'url': oc7a_,
                    'data': mop7,
                    'isLoad': !![]
                });
            } else o_acm == 0x1 && c74a['EnvConfig']['load']['call'](lgzthr, oc7a_, epacom, _7mva, vfzyr4, ap7cmo);
        }, f4y_zv(fhyr, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), fhyr;
    }(),
        b508 = function (nsuqj) {
        function ryvz4f() {
            ryvz4f['__super']['call'](this);
            ;
        }
        return yhlzfr(ryvz4f, 'laya.wx.mini.MiniFileMgr', nsuqj), ryvz4f['isLoadFile'] = function (hrfvz) {
            return ryvz4f['_fileTypeArr']['indexOf'](hrfvz) != -0x1 ? !![] : ![];
        }, ryvz4f['getFileInfo'] = function (_maoc) {
            var vyrz4 = _maoc['split']('?')[0x0],
                _mc = ryvz4f['filesListObj'][vyrz4];
            if (_mc == null) return null;else return _mc;
            return null;
        }, ryvz4f['onFileUpdate'] = function (fhvr, oaem) {
            var ns6uk = fhvr['split']('/'),
                d1258 = ns6uk[ns6uk['length'] - 0x1],
                co_ = ryvz4f['getFileInfo'](oaem);
            if (co_ == null) ryvz4f['onSaveFile'](oaem, d1258);else {
                if (co_['readyUrl'] != oaem) ryvz4f['remove'](d1258, oaem);
            }
        }, ryvz4f['exits'] = function (kusq, bw5d0) {
            var fz4v = ryvz4f['getFileNativePath'](kusq);
            ryvz4f['fs']['getFileInfo']({
                'filePath': fz4v,
                'success': function (_v74af) {
                    bw5d0 != null && bw5d0['runWith']([0x0, _v74af]);
                },
                'fail': function (hlt$g) {
                    bw5d0 != null && bw5d0['runWith']([0x1, hlt$g]);
                }
            });
        }, ryvz4f['read'] = function (jx$g3, il$xg, xtg, mpaeoc) {
            il$xg === void 0x0 && (il$xg = 'ascill'), mpaeoc === void 0x0 && (mpaeoc = '');
            var gth;
            mpaeoc != '' ? gth = ryvz4f['getFileNativePath'](jx$g3) : gth = jx$g3, ryvz4f['fs']['readFile']({
                'filePath': gth,
                'encoding': il$xg,
                'success': function (a_mv47) {
                    xtg != null && xtg['runWith']([0x0, a_mv47]);
                },
                'fail': function (niqu3) {
                    if (niqu3 && mpaeoc != '') ryvz4f['down'](mpaeoc, il$xg, xtg, mpaeoc);else xtg != null && xtg['runWith']([0x1]);
                }
            });
        }, ryvz4f['readNativeFile'] = function (nu3sq, gjt$i) {
            ryvz4f['fs']['readFile']({
                'filePath': nu3sq,
                'encoding': '',
                'success': function (fv4y) {
                    gjt$i != null && gjt$i['runWith']([0x0]);
                },
                'fail': function (_af4v) {
                    gjt$i != null && gjt$i['runWith']([0x1]);
                }
            });
        }, ryvz4f['down'] = function (cpaoe, lrythz, pam7oc, xig$) {
            lrythz === void 0x0 && (lrythz = 'ascill'), xig$ === void 0x0 && (xig$ = '');
            var j3$xiq = ryvz4f['getFileNativePath'](xig$),
                yzlhrf = ryvz4f['wxdown']({
                'url': cpaoe,
                'filePath': j3$xiq,
                'success': function (kn9uqs) {
                    if (kn9uqs['statusCode'] === 0xc8) ryvz4f['readFile'](kn9uqs['filePath'], lrythz, pam7oc, xig$);
                },
                'fail': function (wd218) {
                    pam7oc != null && pam7oc['runWith']([0x1, wd218]);
                }
            });
            yzlhrf['onProgressUpdate'](function ($txgli) {
                pam7oc != null && pam7oc['runWith']([0x2, $txgli['progress']]);
            });
        }, ryvz4f['readFile'] = function (nsj3q, fva7_4, d60k, kd9) {
            fva7_4 === void 0x0 && (fva7_4 = 'ascill'), kd9 === void 0x0 && (kd9 = ''), ryvz4f['fs']['readFile']({
                'filePath': nsj3q,
                'encoding': fva7_4,
                'success': function (frlzyh) {
                    if (nsj3q['indexOf']('http://') != -0x1 || nsj3q['indexOf']('https://') != -0x1) ryvz4f['onFileUpdate'](nsj3q, kd9);
                    d60k != null && d60k['runWith']([0x0, frlzyh]);
                },
                'fail': function (sjqnu) {
                    if (sjqnu) d60k != null && d60k['runWith']([0x1, sjqnu]);
                }
            });
        }, ryvz4f['downImg'] = function (thx$, pcemo, a_mv7) {
            a_mv7 === void 0x0 && (a_mv7 = '');
            var _4mc = ryvz4f['wxdown']({
                'url': thx$,
                'success': function ($3iqxj) {
                    $3iqxj['statusCode'] === 0xc8 && ryvz4f['copyFile']($3iqxj['tempFilePath'], a_mv7, pcemo);
                },
                'fail': function (yvzfhr) {
                    pcemo != null && pcemo['runWith']([0x1, yvzfhr]);
                }
            });
        }, ryvz4f['copyFile'] = function (x$i3jq, fa_7, mc7a4_) {
            var jun3q = x$i3jq['split']('/'),
                u6bks9 = jun3q[jun3q['length'] - 0x1],
                hlyr = fa_7['split']('?')[0x0],
                hxtr = ryvz4f['getFileInfo'](fa_7),
                dw0b58 = ryvz4f['getFileNativePath'](u6bks9);
            ryvz4f['fs']['copyFile']({
                'srcPath': x$i3jq,
                'destPath': dw0b58,
                'success': function (lti$g) {
                    if (!hxtr) ryvz4f['onSaveFile'](fa_7, u6bks9), mc7a4_ != null && mc7a4_['runWith']([0x0]);else {
                        if (hxtr['readyUrl'] != fa_7) ryvz4f['remove'](u6bks9, fa_7, mc7a4_);
                    }
                },
                'fail': function (tigj$x) {
                    mc7a4_ != null && mc7a4_['runWith']([0x1, tigj$x]);
                }
            });
        }, ryvz4f['getFileNativePath'] = function (lxgh$t) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + lxgh$t;
        }, ryvz4f['remove'] = function (n6ksu9, zhrgtl, usqn3) {
            zhrgtl === void 0x0 && (zhrgtl = '');
            var it$jg = ryvz4f['getFileInfo'](zhrgtl),
                uqs3jn = ryvz4f['getFileNativePath'](it$jg['md5']);
            $xhltg['loader']['clearRes'](it$jg['readyUrl']), ryvz4f['fs']['unlink']({
                'filePath': uqs3jn,
                'success': function (ujqs) {
                    if (zhrgtl != '') ryvz4f['onSaveFile'](zhrgtl, n6ksu9);
                    usqn3 != null && usqn3['runWith']([0x0]);
                },
                'fail': function (xligt$) {}
            });
        }, ryvz4f['onSaveFile'] = function (ytlhzr, rlhzt) {
            var $tlxgh = ytlhzr['split']('?')[0x0];
            ryvz4f['filesListObj'][$tlxgh] = {
                'md5': rlhzt,
                'readyUrl': ytlhzr
            }, ryvz4f['fs']['writeFile']({
                'filePath': ryvz4f['fileNativeDir'] + '/' + ryvz4f['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ryvz4f['filesListObj']),
                'success': function (hl$xtg) {
                    console['log']('写入测试测试成功：', hl$xtg);
                },
                'fail': function (s60kb) {
                    console['log']('写入测试测试失败：', s60kb);
                }
            });
        }, ryvz4f['existDir'] = function (c7_mao, ecapom) {
            ryvz4f['fs']['mkdir']({
                'dirPath': c7_mao,
                'success': function (va_m4) {
                    ecapom != null && ecapom['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (nquks9) {
                    if (nquks9['errMsg']['indexOf']('file already exists') != -0x1) ryvz4f['readSync'](ryvz4f['fileListName'], 'utf8', ecapom);else ecapom != null && ecapom['runWith']([0x1, nquks9]);
                }
            });
        }, ryvz4f['readSync'] = function (dw5b80, m_4a7c, mecop, db90) {
            m_4a7c === void 0x0 && (m_4a7c = 'ascill'), db90 === void 0x0 && (db90 = '');
            var m_47 = ryvz4f['getFileNativePath'](dw5b80),
                yzlr;
            try {
                yzlr = ryvz4f['fs']['readFileSync'](m_47), mecop != null && mecop['runWith']([0x0, { 'data': yzlr }]);
            } catch (xglrht) {
                mecop != null && mecop['runWith']([0x1]);
            }
        }, ryvz4f['readCache'] = function () {}, ryvz4f['writeCache'] = function ($xqji3) {
            var uq39n = readyUrl['split']('?')[0x0];
            ryvz4f['filesListObj'][uq39n] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, ryvz4f['fs']['writeFile']({
                'filePath': ryvz4f['fileNativeDir'] + '/' + ryvz4f['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ryvz4f['filesListObj']),
                'success': function (hgrlt) {},
                'fail': function (grhtzl) {}
            });
        }, ryvz4f['setNativeFileDir'] = function (cepoam) {
            ryvz4f['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + cepoam;
        }, ryvz4f['filesListObj'] = {}, ryvz4f['fileNativeDir'] = null, ryvz4f['fileListName'] = 'layaairfiles.txt', ryvz4f['ziyuFileData'] = {}, f4y_zv(ryvz4f, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), ryvz4f;
    }(zyfhlr),
        skb09 = function (jgtx$) {
        function g$xtji() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], g$xtji['__super']['call'](this), this['_sound'] = g$xtji['_createSound'](), this['_chanell'] = new d821(this['_sound']);
        }
        yhlzfr(g$xtji, 'laya.wx.mini.MiniSound', jgtx$);
        var q3inu = g$xtji['prototype'];
        return q3inu['load'] = function (mpeo) {
            var jxtgi = this;
            mpeo = yvf_['formatURL'](mpeo), this['url'] = mpeo;
            if (g$xtji['_audioCache'][mpeo]) {
                this['event']('complete');
                return;
            }
            function zvhfr() {
                if (g$xtji['_null'] != undefined) jxtgi['_sound']['onCanplay'](g$xtji['_null']), jxtgi['_sound']['onError'](g$xtji['_null']);else try {
                    jxtgi['_sound']['onCanplay'](null), jxtgi['_sound']['onError'](null), g$xtji['_null'] = null;
                } catch (f4yvr) {
                    console['warn']('[wxmini] _clearSound:' + f4yvr), jxtgi['_sound']['onCanplay'](hyrl), jxtgi['_sound']['onError'](hyrl), g$xtji['_null'] = hyrl;
                }
            }
            function ksqn() {
                j$ixgt['loaded'] = !![], j$ixgt['event']('complete'), g$xtji['_audioCache'][j$ixgt['url']] = j$ixgt;
            }
            function vfy_z(f_v4y7) {
                console['error']('errCode=' + f_v4y7['errCode'] + '  errMsg=' + f_v4y7['errMsg']), j$ixgt['event']('error');
            }
            function hyrl() {}
            this['_sound']['onCanplay'](ksqn), this['_sound']['onError'](vfy_z), this['_sound']['src'] = mpeo;
            var j$ixgt = this;
        }, q3inu['play'] = function (f_47vy, nu9s6k) {
            f_47vy === void 0x0 && (f_47vy = 0x0), nu9s6k === void 0x0 && (nu9s6k = 0x0);
            var pecmoa, htlxrg;
            if (this['url'] == th$lg['_tMusic']) {
                if (!g$xtji['_musicAudio']) g$xtji['_musicAudio'] = this['_sound'];
                pecmoa = g$xtji['_musicAudio'], htlxrg = this['_chanell'];
            } else pecmoa = this['_sound'], htlxrg = this['_chanell'];
            return pecmoa['src'] = this['url'], pecmoa['startTime'] = 0x0, htlxrg['isStopped'] && (htlxrg['url'] = this['url'], htlxrg['loops'] = nu9s6k, htlxrg['startTime'] = f_47vy, htlxrg['play'](), th$lg['addChannel'](htlxrg)), htlxrg;
        }, q3inu['dispose'] = function () {
            var af47 = g$xtji['_audioCache'][this['url']];
            af47 && (af47['src'] = '', delete g$xtji['_audioCache'][this['url']]);
        }, hg$xl(0x0, q3inu, 'duration', function () {
            return this['_sound']['duration'];
        }), g$xtji['_createSound'] = function () {
            g$xtji['_id']++;
            var qji3x = c74a['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return qji3x;
        }, g$xtji['_musicAudio'] = null, g$xtji['_id'] = 0x0, g$xtji['_audioCache'] = {}, g$xtji['_null'] = undefined, g$xtji;
    }(zyfhlr),
        d821 = function (bs96) {
        function oepcm(u9b6) {
            this['_audio'] = null, this['_onEnd'] = null, oepcm['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = u9b6, this['_onEnd'] = ks6u['bind'](this['__onEnd'], this), u9b6['onEnded'](this['_onEnd']);
        }
        yhlzfr(oepcm, 'laya.wx.mini.MiniSoundChannel', bs96);
        var c7opam = oepcm['prototype'];
        return c7opam['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && ($xhltg['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, c7opam['__onNull'] = function () {}, c7opam['play'] = function () {
            this['isStopped'] = ![], th$lg['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, c7opam['stop'] = function () {
            this['isStopped'] = !![], th$lg['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, c7opam['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, c7opam['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], th$lg['addChannel'](this), this['_audio']['play']();
        }, hg$xl(0x0, c7opam, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), hg$xl(0x0, c7opam, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), hg$xl(0x0, c7opam, 'volume', function () {
            return 0x1;
        }, function (xtig$j) {}), oepcm['_null'] = undefined, oepcm;
    }(n39qus),
        zrf4 = function () {
        function sub96k() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = c74a['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        yhlzfr(sub96k, 'laya.wx.mini.MiniVideo');
        var y_v7f4 = sub96k['prototype'];
        return y_v7f4['on'] = function (eapomc, d1w28, yfz_v4) {
            if (eapomc == 'loadedmetadata') this['onPlayFunc'] = yfz_v4['bind'](d1w28), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else eapomc == 'ended' && (this['onEndedFunC'] = yfz_v4['bind'](d1w28), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, y_v7f4['onTimeUpdateFunc'] = function (in$3q) {
            this['position'] = in$3q['position'], this['_duration'] = in$3q['duration'];
        }, y_v7f4['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, y_v7f4['onended'] = function (f_a47v, k9qsu) {
            this['onEndedFunC'] = k9qsu['bind'](f_a47v), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, y_v7f4['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, y_v7f4['off'] = function (iunqj3, us9qkn, usjq3n) {
            if (iunqj3 == 'loadedmetadata') this['onPlayFunc'] = usjq3n['bind'](us9qkn), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else iunqj3 == 'ended' && (this['onEndedFunC'] = usjq3n['bind'](us9qkn), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, y_v7f4['load'] = function ($j3ni) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = $j3ni;
        }, y_v7f4['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, y_v7f4['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, y_v7f4['size'] = function (ks90b, o7_cma) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = ks90b, this['videoElement']['height'] = o7_cma;
        }, y_v7f4['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, y_v7f4['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, hg$xl(0x0, y_v7f4, 'duration', function () {
            return this['_duration'];
        }), hg$xl(0x0, y_v7f4, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (ijq3x) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = ijq3x;
        }), hg$xl(0x0, y_v7f4, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), hg$xl(0x0, y_v7f4, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), hg$xl(0x0, y_v7f4, 'ended', function () {
            return this['videoend'];
        }), hg$xl(0x0, y_v7f4, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (_ma4v) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = _ma4v;
        }), hg$xl(0x0, y_v7f4, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (w582) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = w582;
        }), hg$xl(0x0, y_v7f4, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (ukqn9s) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = ukqn9s;
        }), hg$xl(0x0, y_v7f4, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), hg$xl(0x0, y_v7f4, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (av_f7) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = av_f7;
        }), hg$xl(0x0, y_v7f4, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (d9) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = d9;
        }), hg$xl(0x0, y_v7f4, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), hg$xl(0x0, y_v7f4, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (bd6) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = bd6;
        }), hg$xl(0x0, y_v7f4, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (thlrg) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = thlrg;
        }), hg$xl(0x0, y_v7f4, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function ($lhx) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = $lhx;
        }), sub96k;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var lzrh in Laya) {
        var ma7_ = Laya[lzrh];
        ma7_ && ma7_['__isclass'] && (exports[lzrh] = ma7_);
    }
});