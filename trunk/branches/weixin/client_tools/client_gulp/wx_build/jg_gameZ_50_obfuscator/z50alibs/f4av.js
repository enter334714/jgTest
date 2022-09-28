var b = wx.$e;
(function (window, document, unvh2) {
    var nv9lh = unvh2['un'],
        pjia5x = unvh2['uns'],
        y1wqo = unvh2['static'],
        gtai5p = unvh2['class'],
        paxt5 = unvh2['getset'],
        r$m0_6 = unvh2['__newvec'],
        kqb = laya['utils']['Browser'],
        u7b2v = laya['events']['Event'],
        n89lhu = laya['events']['EventDispatcher'],
        zcb72 = laya['resource']['HTMLImage'],
        yokw1 = laya['utils']['Handler'],
        l4ngh = laya['display']['Input'],
        vh9nu2 = laya['net']['Loader'],
        qw3ko = laya['maths']['Matrix'],
        bcuv29 = laya['renders']['Render'],
        s_0$r = laya['utils']['RunDriver'],
        kwq7z = laya['media']['Sound'],
        u29hn = laya['media']['SoundChannel'],
        do1wyf = laya['media']['SoundManager'],
        hn9l8u = laya['display']['Stage'],
        m6$r_ = laya['net']['URL'],
        bu7c = laya['utils']['Utils'],
        iptg = function () {
        function i5t4() {}
        return gtai5p(i5t4, 'laya.wx.mini.MiniAdpter'), i5t4['getJson'] = function (qw31o) {
            return JSON['parse'](qw31o);
        }, i5t4['init'] = function (v2cbz, $rm_60) {
            v2cbz === void 0x0 && (v2cbz = ![]), $rm_60 === void 0x0 && ($rm_60 = ![]);
            if (i5t4['_inited']) return;
            i5t4['window'] = window;
            if (i5t4['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            i5t4['_inited'] = !![], i5t4['isZiYu'] = $rm_60, i5t4['isPosMsgYu'] = v2cbz, i5t4['EnvConfig'] = {}, !i5t4['isZiYu'] && (of1edy['setNativeFileDir']('/layaairGame'), of1edy['existDir'](of1edy['fileNativeDir'], yokw1['create'](i5t4, i5t4['onMkdirCallBack']))), i5t4['window']['focus'] = function () {}, unvh2['getUrlPath'] = function () {}, i5t4['window']['logtime'] = function (iajm$x) {}, i5t4['window']['alertTimeLog'] = function (odeyf) {}, i5t4['window']['resetShareInfo'] = function () {}, i5t4['window']['CanvasRenderingContext2D'] = function () {}, i5t4['window']['CanvasRenderingContext2D']['prototype'] = i5t4['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i5t4['window']['document']['body']['appendChild'] = function () {}, i5t4['EnvConfig']['pixelRatioInt'] = 0x0, s_0$r['getPixelRatio'] = i5t4['pixelRatio'], i5t4['_preCreateElement'] = kqb['createElement'], kqb['createElement'] = i5t4['createElement'], s_0$r['createShaderCondition'] = i5t4['createShaderCondition'], bu7c['parseXMLFromString'] = i5t4['parseXMLFromString'], l4ngh['_createInputElement'] = n4l89['_createInputElement'], i5t4['EnvConfig']['load'] = vh9nu2['prototype']['load'], vh9nu2['prototype']['load'] = z7cv['prototype']['load'], i5t4['isZiYu'] && v2cbz && wx['onMessage'](function (xi$mja) {
                xi$mja['isLoad'] && (of1edy['ziyuFileData'][xi$mja['url']] = xi$mja['data']);
            });
        }, i5t4['onMkdirCallBack'] = function (v92cb, q7kw3) {
            if (!v92cb) of1edy['filesListObj'] = JSON['parse'](q7kw3['data']);
        }, i5t4['pixelRatio'] = function () {
            if (!i5t4['EnvConfig']['pixelRatioInt']) try {
                var z3q7kw = wx['getSystemInfoSync']();
                return i5t4['EnvConfig']['pixelRatioInt'] = z3q7kw['pixelRatio'], z3q7kw = z3q7kw, z3q7kw['pixelRatio'];
            } catch ($jxim) {}
            return i5t4['EnvConfig']['pixelRatioInt'];
        }, i5t4['createElement'] = function (ncu29) {
            if (ncu29 == 'canvas') {
                var pmjiax;
                return i5t4['idx'] == 0x1 ? i5t4['isZiYu'] ? (pmjiax = sharedCanvas, pmjiax['style'] = {}) : pmjiax = window['canvas'] : pmjiax = window['wx']['createCanvas'](), i5t4['idx']++, pmjiax;
            } else {
                if (ncu29 == 'textarea' || ncu29 == 'input') return i5t4['onCreateInput'](ncu29);else {
                    if (ncu29 == 'div') {
                        var wy1dof = i5t4['_preCreateElement'](ncu29);
                        return wy1dof['contains'] = function (s_6$0r) {
                            return null;
                        }, wy1dof['removeChild'] = function (bu2c) {}, wy1dof;
                    } else return i5t4['_preCreateElement'](ncu29);
                }
            }
        }, i5t4['onCreateInput'] = function (xaji5p) {
            var kyd = i5t4['_preCreateElement'](xaji5p);
            return kyd['focus'] = n4l89['wxinputFocus'], kyd['blur'] = n4l89['wxinputblur'], kyd['style'] = {}, kyd['value'] = 0x0, kyd['parentElement'] = {}, kyd['placeholder'] = {}, kyd['type'] = {}, kyd['setColor'] = function (hg4tl) {}, kyd['setType'] = function (yo1def) {}, kyd['setFontFace'] = function (c3z7b2) {}, kyd['addEventListener'] = function (q7kwz) {}, kyd['contains'] = function (qb7cz3) {
                return null;
            }, kyd['removeChild'] = function (cn92v) {}, kyd;
        }, i5t4['createShaderCondition'] = function (lh4g8n) {
            var deofy = this,
                fywdo1 = function () {
                var vb29uc = lh4g8n;
                return deofy[lh4g8n['replace']('this.', '')];
            };
            return fywdo1;
        }, i5t4['EnvConfig'] = null, i5t4['window'] = null, i5t4['_preCreateElement'] = null, i5t4['_inited'] = ![], i5t4['wxRequest'] = null, i5t4['systemInfo'] = null, i5t4['version'] = '0.0.1', i5t4['isZiYu'] = ![], i5t4['isPosMsgYu'] = ![], i5t4['parseXMLFromString'] = function (bv2u9c) {
            var v7cz, ofy1ed;
            bv2u9c = bv2u9c['replace'](/>\s+</g, '><');
            try {
                v7cz = new window['Parser']['DOMParser']()['parseFromString'](bv2u9c, 'text/xml');
            } catch (m$_xa) {
                throw '需要引入xml解析库文件';
            }
            return v7cz;
        }, i5t4['idx'] = 0x1, i5t4;
    }(),
        de1 = function () {
        function vcbu92() {}
        gtai5p(vcbu92, 'laya.wx.mini.MiniImage');
        var bc92 = vcbu92['prototype'];
        return bc92['_loadImage'] = function (p854gt) {
            var atg5p = this,
                xpi5j = ![];
            p854gt['indexOf']('layaNativeDir/') == -0x1 && (xpi5j = !![], p854gt = m6$r_['formatURL'](p854gt));
            if (!of1edy['getFileInfo'](p854gt)) {
                if (p854gt['indexOf']('http://') != -0x1 || p854gt['indexOf']('https://') != -0x1) of1edy['downImg'](p854gt, new yokw1(vcbu92, vcbu92['onDownImgCallBack'], [p854gt, atg5p]), p854gt);else vcbu92['onCreateImage'](p854gt, atg5p, !![]);
            } else vcbu92['onCreateImage'](p854gt, atg5p, !xpi5j);
        }, vcbu92['onDownImgCallBack'] = function (v9unh2, it5ax, v2cz7b) {
            if (!v2cz7b) vcbu92['onCreateImage'](v9unh2, it5ax);else it5ax['onError'](null);
        }, vcbu92['onCreateImage'] = function (p8t5g, mj_$x, a$xmji) {
            a$xmji === void 0x0 && (a$xmji = ![]);
            var hvul9n;
            if (!a$xmji) {
                var v92nh = of1edy['getFileInfo'](p8t5g),
                    $s0r_6 = v92nh['md5'];
                hvul9n = of1edy['getFileNativePath']($s0r_6);
            } else hvul9n = p8t5g;
            if (mj_$x['imgCache'] == null) mj_$x['imgCache'] = {};
            var z7vc2b;
            function pti4g5() {
                z7vc2b['onload'] = null, z7vc2b['onerror'] = null, delete mj_$x['imgCache'][p8t5g];
            }
            ;
            var vc72ub = function () {
                pti4g5(), mj_$x['onLoaded'](z7vc2b);
            },
                $rj0m_ = function () {
                pti4g5(), mj_$x['event']('error', 'Load image failed');
            };
            mj_$x['_type'] == 'nativeimage' ? (z7vc2b = new kqb['window']['Image'](), z7vc2b['crossOrigin'] = '', z7vc2b['onload'] = vc72ub, z7vc2b['onerror'] = $rj0m_, z7vc2b['src'] = hvul9n, mj_$x['imgCache'][p8t5g] = z7vc2b) : new zcb72['create'](hvul9n, {
                'onload': vc72ub,
                'onerror': $rj0m_,
                'onCreate': function (b73kzq) {
                    z7vc2b = b73kzq, mj_$x['imgCache'][p8t5g] = b73kzq;
                }
            });
        }, vcbu92;
    }(),
        n4l89 = function () {
        function gt5p4() {}
        return gtai5p(gt5p4, 'laya.wx.mini.MiniInput'), gt5p4['_createInputElement'] = function () {
            l4ngh['_initInput'](l4ngh['area'] = kqb['createElement']('textarea')), l4ngh['_initInput'](l4ngh['input'] = kqb['createElement']('input')), l4ngh['inputContainer'] = kqb['createElement']('div'), l4ngh['inputContainer']['style']['position'] = 'absolute', l4ngh['inputContainer']['style']['zIndex'] = 0x186a0, kqb['container']['appendChild'](l4ngh['inputContainer']), l4ngh['inputContainer']['setPos'] = function (h489n, iapmx) {
                l4ngh['inputContainer']['style']['left'] = h489n + 'px', l4ngh['inputContainer']['style']['top'] = iapmx + 'px';
            }, unvh2['stage']['on']('resize', null, gt5p4['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (h84n9l) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), do1wyf['_soundClass'] = q3k1w, do1wyf['_musicClass'] = q3k1w, window['_videoClass'] = l84ghn;
        }, gt5p4['_onStageResize'] = function () {
            var h9nuv2 = unvh2['stage']['_canvasTransform']['identity']();
            h9nuv2['scale'](kqb['width'] / bcuv29['canvas']['width'] / s_0$r['getPixelRatio'](), kqb['height'] / bcuv29['canvas']['height'] / s_0$r['getPixelRatio']());
        }, gt5p4['wxinputFocus'] = function (fyo1) {
            var x$_ja = l4ngh['inputElement']['target'];
            if (x$_ja && !x$_ja['editable']) return;
            iptg['window']['wx']['offKeyboardConfirm'](), iptg['window']['wx']['offKeyboardInput'](), iptg['window']['wx']['showKeyboard']({
                'defaultValue': x$_ja['text'],
                'maxLength': x$_ja['maxChars'],
                'multiple': x$_ja['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (l54g8t) {},
                'fail': function (axjim$) {}
            }), iptg['window']['wx']['onKeyboardConfirm'](function (vc9b2) {
                var b72vc = vc9b2 ? vc9b2['value'] : '';
                x$_ja['text'] = b72vc, x$_ja['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), iptg['window']['wx']['onKeyboardInput'](function (z3kbq7) {
                var ywdof = z3kbq7 ? z3kbq7['value'] : '';
                if (!x$_ja['multiline']) {
                    if (ywdof['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                x$_ja['text'] = ywdof, x$_ja['event']('input');
            });
        }, gt5p4['inputEnter'] = function () {
            l4ngh['inputElement']['target']['focus'] = ![];
        }, gt5p4['wxinputblur'] = function () {
            gt5p4['hideKeyboard']();
        }, gt5p4['hideKeyboard'] = function () {
            iptg['window']['wx']['offKeyboardConfirm'](), iptg['window']['wx']['offKeyboardInput'](), iptg['window']['wx']['hideKeyboard']({
                'success': function (txip) {
                    console['log']('隐藏键盘');
                },
                'fail': function (gp845t) {
                    console['log']('隐藏键盘出错:' + (gp845t ? gp845t['errMsg'] : ''));
                }
            });
        }, gt5p4;
    }(),
        z7cv = function () {
        function gth() {}
        gtai5p(gth, 'laya.wx.mini.MiniLoader');
        var gt4l85 = gth['prototype'];
        return gt4l85['load'] = function (xapim, ody1wk, $jr0m_, p5t48, at5ixp) {
            $jr0m_ === void 0x0 && ($jr0m_ = !![]), at5ixp === void 0x0 && (at5ixp = ![]);
            var $x_ma = this;
            $x_ma['_url'] = xapim;
            if (xapim['indexOf']('data:image') === 0x0) $x_ma['_type'] = ody1wk = 'image';else $x_ma['_type'] = ody1wk || (ody1wk = $x_ma['getTypeFromUrl'](xapim));
            $x_ma['_cache'] = $jr0m_, $x_ma['_data'] = null;
            var wq1o = 'ascii';
            if (xapim['indexOf']('.fnt') != -0x1) wq1o = 'utf8';else ody1wk == 'arraybuffer' && (wq1o = '');
            ;
            var m06r$ = bu7c['getFileExtension'](xapim);
            if (gth['_fileTypeArr']['indexOf'](m06r$) != -0x1) iptg['EnvConfig']['load']['call'](this, xapim, ody1wk, $jr0m_, p5t48, at5ixp);else {
                if (!of1edy['getFileInfo'](xapim)) {
                    if (xapim['indexOf']('layaNativeDir/') != -0x1) {
                        if (iptg['isZiYu']) {
                            var r$_jm0 = of1edy['ziyuFileData'][xapim];
                            $x_ma['onLoaded'](r$_jm0);
                            return;
                        } else {
                            cosnole['log']('read read'), of1edy['read'](xapim, wq1o, new yokw1(gth, gth['onReadNativeCallBack'], [wq1o, xapim, ody1wk, $jr0m_, p5t48, at5ixp, $x_ma]));
                            return;
                        }
                    }
                    if (m6$r_['rootPath'] == '') var bz73qk = xapim;else bz73qk = xapim['split'](m6$r_['rootPath'])[0x0];
                    xapim['indexOf']('http://') != -0x1 || xapim['indexOf']('https://') != -0x1 ? iptg['EnvConfig']['load']['call']($x_ma, xapim, ody1wk, $jr0m_, p5t48, at5ixp) : of1edy['readFile'](bz73qk, wq1o, new yokw1(gth, gth['onReadNativeCallBack'], [wq1o, xapim, ody1wk, $jr0m_, p5t48, at5ixp, $x_ma]), xapim);
                } else iptg['EnvConfig']['load']['call'](this, xapim, ody1wk, $jr0m_, p5t48, at5ixp);
            }
        }, gt4l85['resMgrLoad'] = function (vu2hn9, b3zq7k, fdwoy, lvun9, lg854, vbu27, kwq13z) {
            fdwoy === void 0x0 && (fdwoy = 0x0), lvun9 === void 0x0 && (lvun9 = ![]), lg854 === void 0x0 && (lg854 = ![]), vbu27 === void 0x0 && (vbu27 = 0x0), kwq13z === void 0x0 && (kwq13z = 0x3), vu2hn9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', vu2hn9), iptg['EnvConfig']['resMgrLoad'](vu2hn9, (fd1ey, dky, atp) => {
                gth['prototype']['resMgrLoadCallBack'](fd1ey, dky, atp, b3zq7k);
            }, fdwoy, lvun9, lg854, vbu27, kwq13z);
        }, gt4l85['resMgrLoadCallBack'] = function (nh8u9, $jm_r0, q1kz, l9h8un) {
            console['log']('buff:::', nh8u9, q1kz, of1edy['fileNativeDir'] + '///' + of1edy['fileListName']), l9h8un(nh8u9, $jm_r0, q1kz);
        }, gt4l85['clearRes'] = function (_rm$60, bz27vc) {
            bz27vc === void 0x0 && (bz27vc = ![]);
            var pt5gi4 = this;
            pt5gi4['clearRes'](_rm$60, bz27vc);
            var cb723 = of1edy['getFileInfo'](_rm$60);
            if (cb723 && (_rm$60['indexOf']('http://') != -0x1 || _rm$60['indexOf']('https://') != -0x1)) {
                var ydfw = cb723['md5'],
                    b7c2zv = of1edy['getFileNativePath'](ydfw);
                of1edy['remove'](b7c2zv);
            }
        }, gth['onReadNativeCallBack'] = function (hvn9, pgt54, $r_0m6, g84ln, $_6m, qok, wkdy, p48g, bcq) {
            g84ln === void 0x0 && (g84ln = !![]), qok === void 0x0 && (qok = ![]), p48g === void 0x0 && (p48g = 0x0);
            if (!p48g) {
                var ydk1w;
                if ($r_0m6 == 'json' || $r_0m6 == 'atlas') ydk1w = iptg['getJson'](bcq['data']);else $r_0m6 == 'xml' ? ydk1w = bu7c['parseXMLFromString'](bcq['data']) : ydk1w = bcq['data'];
                wkdy['onLoaded'](ydk1w), !iptg['isZiYu'] && iptg['isPosMsgYu'] && $r_0m6 != 'arraybuffer' && wx['postMessage']({
                    'url': pgt54,
                    'data': ydk1w,
                    'isLoad': !![]
                });
            } else p48g == 0x1 && iptg['EnvConfig']['load']['call'](wkdy, pgt54, $r_0m6, g84ln, $_6m, qok);
        }, y1wqo(gth, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), gth;
    }(),
        of1edy = function (j_0m$x) {
        function c2uv9n() {
            c2uv9n['__super']['call'](this);
            ;
        }
        return gtai5p(c2uv9n, 'laya.wx.mini.MiniFileMgr', j_0m$x), c2uv9n['isLoadFile'] = function (t5ig4p) {
            return c2uv9n['_fileTypeArr']['indexOf'](t5ig4p) != -0x1 ? !![] : ![];
        }, c2uv9n['getFileInfo'] = function (s60_$r) {
            var y1qkow = s60_$r['split']('?')[0x0],
                m$jxia = c2uv9n['filesListObj'][y1qkow];
            if (m$jxia == null) return null;else return m$jxia;
            return null;
        }, c2uv9n['onFileUpdate'] = function (l5t, taig) {
            var _m0r = l5t['split']('/'),
                _r6$s = _m0r[_m0r['length'] - 0x1],
                m6$0_r = c2uv9n['getFileInfo'](taig);
            if (m6$0_r == null) c2uv9n['onSaveFile'](taig, _r6$s);else {
                if (m6$0_r['readyUrl'] != taig) c2uv9n['remove'](_r6$s, taig);
            }
        }, c2uv9n['exits'] = function (mij$, $j0mr_) {
            var xj$0m_ = c2uv9n['getFileNativePath'](mij$);
            c2uv9n['fs']['getFileInfo']({
                'filePath': xj$0m_,
                'success': function (tigpa5) {
                    $j0mr_ != null && $j0mr_['runWith']([0x0, tigpa5]);
                },
                'fail': function (n9h8lu) {
                    $j0mr_ != null && $j0mr_['runWith']([0x1, n9h8lu]);
                }
            });
        }, c2uv9n['read'] = function (kb7, tgl458, fowyd1, b7qk3z) {
            tgl458 === void 0x0 && (tgl458 = 'ascill'), b7qk3z === void 0x0 && (b7qk3z = '');
            var hg8l4;
            b7qk3z != '' ? hg8l4 = c2uv9n['getFileNativePath'](kb7) : hg8l4 = kb7, c2uv9n['fs']['readFile']({
                'filePath': hg8l4,
                'encoding': tgl458,
                'success': function ($jmr_) {
                    fowyd1 != null && fowyd1['runWith']([0x0, $jmr_]);
                },
                'fail': function (yowfd) {
                    if (yowfd && b7qk3z != '') c2uv9n['down'](b7qk3z, tgl458, fowyd1, b7qk3z);else fowyd1 != null && fowyd1['runWith']([0x1]);
                }
            });
        }, c2uv9n['readNativeFile'] = function (v2c7bu, lhn489) {
            c2uv9n['fs']['readFile']({
                'filePath': v2c7bu,
                'encoding': '',
                'success': function (lhn8g4) {
                    lhn489 != null && lhn489['runWith']([0x0]);
                },
                'fail': function (p5txi) {
                    lhn489 != null && lhn489['runWith']([0x1]);
                }
            });
        }, c2uv9n['down'] = function (vc29bu, xm$, _0$jmx, gt485p) {
            xm$ === void 0x0 && (xm$ = 'ascill'), gt485p === void 0x0 && (gt485p = '');
            var ko3qw1 = c2uv9n['getFileNativePath'](gt485p),
                i5tgp4 = c2uv9n['wxdown']({
                'url': vc29bu,
                'filePath': ko3qw1,
                'success': function (v9nl) {
                    if (v9nl['statusCode'] === 0xc8) c2uv9n['readFile'](v9nl['filePath'], xm$, _0$jmx, gt485p);
                },
                'fail': function (cqz7b) {
                    _0$jmx != null && _0$jmx['runWith']([0x1, cqz7b]);
                }
            });
            i5tgp4['onProgressUpdate'](function (i5ajp) {
                _0$jmx != null && _0$jmx['runWith']([0x2, i5ajp['progress']]);
            });
        }, c2uv9n['readFile'] = function (e1fdyo, $0sr_, c7u2v, xaimjp) {
            $0sr_ === void 0x0 && ($0sr_ = 'ascill'), xaimjp === void 0x0 && (xaimjp = ''), c2uv9n['fs']['readFile']({
                'filePath': e1fdyo,
                'encoding': $0sr_,
                'success': function (t5pix) {
                    if (e1fdyo['indexOf']('http://') != -0x1 || e1fdyo['indexOf']('https://') != -0x1) c2uv9n['onFileUpdate'](e1fdyo, xaimjp);
                    c7u2v != null && c7u2v['runWith']([0x0, t5pix]);
                },
                'fail': function (bvc72z) {
                    if (bvc72z) c7u2v != null && c7u2v['runWith']([0x1, bvc72z]);
                }
            });
        }, c2uv9n['downImg'] = function (jpmxi, $m60_r, vn2u9) {
            vn2u9 === void 0x0 && (vn2u9 = '');
            var t8gl45 = c2uv9n['wxdown']({
                'url': jpmxi,
                'success': function (j_0rm$) {
                    j_0rm$['statusCode'] === 0xc8 && c2uv9n['copyFile'](j_0rm$['tempFilePath'], vn2u9, $m60_r);
                },
                'fail': function (wdo) {
                    $m60_r != null && $m60_r['runWith']([0x1, wdo]);
                }
            });
        }, c2uv9n['copyFile'] = function (u7b2, l48h, _0m$6r) {
            var $majx_ = u7b2['split']('/'),
                m0x$j_ = $majx_[$majx_['length'] - 0x1],
                jm$ia = l48h['split']('?')[0x0],
                am_x$j = c2uv9n['getFileInfo'](l48h),
                b2z7c3 = c2uv9n['getFileNativePath'](m0x$j_);
            c2uv9n['fs']['copyFile']({
                'srcPath': u7b2,
                'destPath': b2z7c3,
                'success': function (m$xaj_) {
                    if (!am_x$j) c2uv9n['onSaveFile'](l48h, m0x$j_), _0m$6r != null && _0m$6r['runWith']([0x0]);else {
                        if (am_x$j['readyUrl'] != l48h) c2uv9n['remove'](m0x$j_, l48h, _0m$6r);
                    }
                },
                'fail': function (uvlh9) {
                    _0m$6r != null && _0m$6r['runWith']([0x1, uvlh9]);
                }
            });
        }, c2uv9n['getFileNativePath'] = function (k3ow1) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + k3ow1;
        }, c2uv9n['remove'] = function (ul9hn8, am_x, ixa5pj) {
            am_x === void 0x0 && (am_x = '');
            var vu9nh = c2uv9n['getFileInfo'](am_x),
                g548t = c2uv9n['getFileNativePath'](vu9nh['md5']);
            unvh2['loader']['clearRes'](vu9nh['readyUrl']), c2uv9n['fs']['unlink']({
                'filePath': g548t,
                'success': function (_jr$0) {
                    if (am_x != '') c2uv9n['onSaveFile'](am_x, ul9hn8);
                    ixa5pj != null && ixa5pj['runWith']([0x0]);
                },
                'fail': function (nhu2v9) {}
            });
        }, c2uv9n['onSaveFile'] = function (pmajix, _j$xa) {
            var qzc = pmajix['split']('?')[0x0];
            c2uv9n['filesListObj'][qzc] = {
                'md5': _j$xa,
                'readyUrl': pmajix
            }, c2uv9n['fs']['writeFile']({
                'filePath': c2uv9n['fileNativeDir'] + '/' + c2uv9n['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](c2uv9n['filesListObj']),
                'success': function (j$m0_) {
                    console['log']('写入测试测试成功：', j$m0_);
                },
                'fail': function (ja$mix) {
                    console['log']('写入测试测试失败：', ja$mix);
                }
            });
        }, c2uv9n['existDir'] = function (nu9l8h, $0_jxm) {
            c2uv9n['fs']['mkdir']({
                'dirPath': nu9l8h,
                'success': function (pimaxj) {
                    $0_jxm != null && $0_jxm['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (p4g8t5) {
                    if (p4g8t5['errMsg']['indexOf']('file already exists') != -0x1) c2uv9n['readSync'](c2uv9n['fileListName'], 'utf8', $0_jxm);else $0_jxm != null && $0_jxm['runWith']([0x1, p4g8t5]);
                }
            });
        }, c2uv9n['readSync'] = function (ydf1ow, l9unv, xj0, $m_xj) {
            l9unv === void 0x0 && (l9unv = 'ascill'), $m_xj === void 0x0 && ($m_xj = '');
            var tgh = c2uv9n['getFileNativePath'](ydf1ow),
                $ajmi;
            try {
                $ajmi = c2uv9n['fs']['readFileSync'](tgh), xj0 != null && xj0['runWith']([0x0, { 'data': $ajmi }]);
            } catch (aip5) {
                xj0 != null && xj0['runWith']([0x1]);
            }
        }, c2uv9n['readCache'] = function () {}, c2uv9n['writeCache'] = function (t5g4p8) {
            var c7bv2u = readyUrl['split']('?')[0x0];
            c2uv9n['filesListObj'][c7bv2u] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, c2uv9n['fs']['writeFile']({
                'filePath': c2uv9n['fileNativeDir'] + '/' + c2uv9n['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](c2uv9n['filesListObj']),
                'success': function (mxj0$) {},
                'fail': function (z3b2) {}
            });
        }, c2uv9n['setNativeFileDir'] = function (yqk1o) {
            c2uv9n['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + yqk1o;
        }, c2uv9n['filesListObj'] = {}, c2uv9n['fileNativeDir'] = null, c2uv9n['fileListName'] = 'layaairfiles.txt', c2uv9n['ziyuFileData'] = {}, y1wqo(c2uv9n, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), c2uv9n;
    }(n89lhu),
        q3k1w = function (yfoe1d) {
        function mr_j0$() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], mr_j0$['__super']['call'](this), this['_sound'] = mr_j0$['_createSound'](), this['_chanell'] = new l8n4h9(this['_sound']);
        }
        gtai5p(mr_j0$, 'laya.wx.mini.MiniSound', yfoe1d);
        var vn29hu = mr_j0$['prototype'];
        return vn29hu['load'] = function (mx$0) {
            var w1q3o = this;
            mx$0 = m6$r_['formatURL'](mx$0), this['url'] = mx$0;
            if (mr_j0$['_audioCache'][mx$0]) {
                this['event']('complete');
                return;
            }
            function ptgi4() {
                if (mr_j0$['_null'] != undefined) w1q3o['_sound']['onCanplay'](mr_j0$['_null']), w1q3o['_sound']['onError'](mr_j0$['_null']);else try {
                    w1q3o['_sound']['onCanplay'](null), w1q3o['_sound']['onError'](null), mr_j0$['_null'] = null;
                } catch (h92n) {
                    console['warn']('[wxmini] _clearSound:' + h92n), w1q3o['_sound']['onCanplay'](q73kw), w1q3o['_sound']['onError'](q73kw), mr_j0$['_null'] = q73kw;
                }
            }
            function j0xm() {
                y1odk['loaded'] = !![], y1odk['event']('complete'), mr_j0$['_audioCache'][y1odk['url']] = y1odk;
            }
            function v9nc2(g548) {
                console['error']('errCode=' + g548['errCode'] + '  errMsg=' + g548['errMsg']), y1odk['event']('error');
            }
            function q73kw() {}
            this['_sound']['onCanplay'](j0xm), this['_sound']['onError'](v9nc2), this['_sound']['src'] = mx$0;
            var y1odk = this;
        }, vn29hu['play'] = function (_6s0r$, m0$xj_) {
            _6s0r$ === void 0x0 && (_6s0r$ = 0x0), m0$xj_ === void 0x0 && (m0$xj_ = 0x0);
            var igp5ta, rs_60;
            if (this['url'] == do1wyf['_tMusic']) {
                if (!mr_j0$['_musicAudio']) mr_j0$['_musicAudio'] = this['_sound'];
                igp5ta = mr_j0$['_musicAudio'], rs_60 = this['_chanell'];
            } else igp5ta = this['_sound'], rs_60 = this['_chanell'];
            return igp5ta['src'] = this['url'], igp5ta['startTime'] = 0x0, rs_60['isStopped'] && (rs_60['url'] = this['url'], rs_60['loops'] = m0$xj_, rs_60['startTime'] = _6s0r$, rs_60['play'](), do1wyf['addChannel'](rs_60)), rs_60;
        }, vn29hu['dispose'] = function () {
            var _jam = mr_j0$['_audioCache'][this['url']];
            _jam && (_jam['src'] = '', delete mr_j0$['_audioCache'][this['url']]);
        }, paxt5(0x0, vn29hu, 'duration', function () {
            return this['_sound']['duration'];
        }), mr_j0$['_createSound'] = function () {
            mr_j0$['_id']++;
            var $xjima = iptg['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return $xjima;
        }, mr_j0$['_musicAudio'] = null, mr_j0$['_id'] = 0x0, mr_j0$['_audioCache'] = {}, mr_j0$['_null'] = undefined, mr_j0$;
    }(n89lhu),
        l8n4h9 = function ($mj_ax) {
        function k3z7qw(i5xpat) {
            this['_audio'] = null, this['_onEnd'] = null, k3z7qw['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = i5xpat, this['_onEnd'] = bu7c['bind'](this['__onEnd'], this), i5xpat['onEnded'](this['_onEnd']);
        }
        gtai5p(k3z7qw, 'laya.wx.mini.MiniSoundChannel', $mj_ax);
        var df1eoy = k3z7qw['prototype'];
        return df1eoy['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (unvh2['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, df1eoy['__onNull'] = function () {}, df1eoy['play'] = function () {
            this['isStopped'] = ![], do1wyf['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, df1eoy['stop'] = function () {
            this['isStopped'] = !![], do1wyf['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, df1eoy['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, df1eoy['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], do1wyf['addChannel'](this), this['_audio']['play']();
        }, paxt5(0x0, df1eoy, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), paxt5(0x0, df1eoy, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), paxt5(0x0, df1eoy, 'volume', function () {
            return 0x1;
        }, function (q1kwz) {}), k3z7qw['_null'] = undefined, k3z7qw;
    }(u29hn),
        l84ghn = function () {
        function _mj$r() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = iptg['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        gtai5p(_mj$r, 'laya.wx.mini.MiniVideo');
        var l4g85t = _mj$r['prototype'];
        return l4g85t['on'] = function (aimx, l9vu, p4t5ig) {
            if (aimx == 'loadedmetadata') this['onPlayFunc'] = p4t5ig['bind'](l9vu), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else aimx == 'ended' && (this['onEndedFunC'] = p4t5ig['bind'](l9vu), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, l4g85t['onTimeUpdateFunc'] = function (ptg458) {
            this['position'] = ptg458['position'], this['_duration'] = ptg458['duration'];
        }, l4g85t['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, l4g85t['onended'] = function (jxm$_0, xamijp) {
            this['onEndedFunC'] = xamijp['bind'](jxm$_0), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, l4g85t['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, l4g85t['off'] = function (n9v2, wo1k, z3qc7) {
            if (n9v2 == 'loadedmetadata') this['onPlayFunc'] = z3qc7['bind'](wo1k), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else n9v2 == 'ended' && (this['onEndedFunC'] = z3qc7['bind'](wo1k), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, l4g85t['load'] = function (iaxpt5) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = iaxpt5;
        }, l4g85t['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, l4g85t['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, l4g85t['size'] = function (vn9u, ati5xp) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = vn9u, this['videoElement']['height'] = ati5xp;
        }, l4g85t['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, l4g85t['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, paxt5(0x0, l4g85t, 'duration', function () {
            return this['_duration'];
        }), paxt5(0x0, l4g85t, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (qcz3) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = qcz3;
        }), paxt5(0x0, l4g85t, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), paxt5(0x0, l4g85t, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), paxt5(0x0, l4g85t, 'ended', function () {
            return this['videoend'];
        }), paxt5(0x0, l4g85t, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (k3zq) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = k3zq;
        }), paxt5(0x0, l4g85t, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (t5i4pg) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = t5i4pg;
        }), paxt5(0x0, l4g85t, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (w3qk1) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = w3qk1;
        }), paxt5(0x0, l4g85t, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), paxt5(0x0, l4g85t, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (axpj5i) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = axpj5i;
        }), paxt5(0x0, l4g85t, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (q1w3z) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = q1w3z;
        }), paxt5(0x0, l4g85t, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), paxt5(0x0, l4g85t, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (h92un) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = h92un;
        }), paxt5(0x0, l4g85t, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (z723c) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = z723c;
        }), paxt5(0x0, l4g85t, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (gnl8h4) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = gnl8h4;
        }), _mj$r;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var cb37zq in Laya) {
        var fd1yw = Laya[cb37zq];
        fd1yw && fd1yw['__isclass'] && (exports[cb37zq] = fd1yw);
    }
});