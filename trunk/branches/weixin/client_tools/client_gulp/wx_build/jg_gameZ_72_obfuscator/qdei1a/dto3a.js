var f = wx.$B;
(function (window, document, n5zyb) {
    var vm260d = n5zyb['un'],
        e9j7r8 = n5zyb['uns'],
        qdw0ao = n5zyb['static'],
        wqoyp = n5zyb['class'],
        ad0owq = n5zyb['getset'],
        qd0a2o = n5zyb['__newvec'],
        r93j8 = laya['utils']['Browser'],
        ugft1 = laya['events']['Event'],
        va20md = laya['events']['EventDispatcher'],
        qoa20d = laya['resource']['HTMLImage'],
        d2mv6 = laya['utils']['Handler'],
        h743j = laya['display']['Input'],
        zxpw5y = laya['net']['Loader'],
        axdwqo = laya['maths']['Matrix'],
        xqawd = laya['renders']['Render'],
        dv2ma = laya['utils']['RunDriver'],
        pyo = laya['media']['Sound'],
        $hs6ki = laya['media']['SoundChannel'],
        oqdw0 = laya['media']['SoundManager'],
        u1egf = laya['display']['Stage'],
        lr9 = laya['net']['URL'],
        mq0a2 = laya['utils']['Utils'],
        $v6msk = function () {
        function zpx5wy() {}
        return wqoyp(zpx5wy, 'laya.wx.mini.MiniAdpter'), zpx5wy['getJson'] = function (fl1gut) {
            return JSON['parse'](fl1gut);
        }, zpx5wy['init'] = function (v6sk, pqoyw) {
            v6sk === void 0x0 && (v6sk = ![]), pqoyw === void 0x0 && (pqoyw = ![]);
            if (zpx5wy['_inited']) return;
            zpx5wy['window'] = window;
            if (zpx5wy['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            zpx5wy['_inited'] = !![], zpx5wy['isZiYu'] = pqoyw, zpx5wy['isPosMsgYu'] = v6sk, zpx5wy['EnvConfig'] = {}, !zpx5wy['isZiYu'] && (awdq['setNativeFileDir']('/layaairGame'), awdq['existDir'](awdq['fileNativeDir'], d2mv6['create'](zpx5wy, zpx5wy['onMkdirCallBack']))), zpx5wy['window']['focus'] = function () {}, n5zyb['getUrlPath'] = function () {}, zpx5wy['window']['logtime'] = function (dwa0oq) {}, zpx5wy['window']['alertTimeLog'] = function (p_zyx5) {}, zpx5wy['window']['resetShareInfo'] = function () {}, zpx5wy['window']['CanvasRenderingContext2D'] = function () {}, zpx5wy['window']['CanvasRenderingContext2D']['prototype'] = zpx5wy['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zpx5wy['window']['document']['body']['appendChild'] = function () {}, zpx5wy['EnvConfig']['pixelRatioInt'] = 0x0, dv2ma['getPixelRatio'] = zpx5wy['pixelRatio'], zpx5wy['_preCreateElement'] = r93j8['createElement'], r93j8['createElement'] = zpx5wy['createElement'], dv2ma['createShaderCondition'] = zpx5wy['createShaderCondition'], mq0a2['parseXMLFromString'] = zpx5wy['parseXMLFromString'], h743j['_createInputElement'] = i4s3hj['_createInputElement'], zpx5wy['EnvConfig']['load'] = zxpw5y['prototype']['load'], zxpw5y['prototype']['load'] = hs$ki['prototype']['load'], zpx5wy['isZiYu'] && v6sk && wx['onMessage'](function (p_xy5) {
                p_xy5['isLoad'] && (awdq['ziyuFileData'][p_xy5['url']] = p_xy5['data']);
            });
        }, zpx5wy['onMkdirCallBack'] = function (ejr78, qypw) {
            if (!ejr78) awdq['filesListObj'] = JSON['parse'](qypw['data']);
        }, zpx5wy['pixelRatio'] = function () {
            if (!zpx5wy['EnvConfig']['pixelRatioInt']) try {
                var $iksv = wx['getSystemInfoSync']();
                return zpx5wy['EnvConfig']['pixelRatioInt'] = $iksv['pixelRatio'], $iksv = $iksv, $iksv['pixelRatio'];
            } catch (y5wp) {}
            return zpx5wy['EnvConfig']['pixelRatioInt'];
        }, zpx5wy['createElement'] = function (xp_5yz) {
            if (xp_5yz == 'canvas') {
                var $sik4;
                return zpx5wy['idx'] == 0x1 ? zpx5wy['isZiYu'] ? ($sik4 = sharedCanvas, $sik4['style'] = {}) : $sik4 = window['canvas'] : $sik4 = window['wx']['createCanvas'](), zpx5wy['idx']++, $sik4;
            } else {
                if (xp_5yz == 'textarea' || xp_5yz == 'input') return zpx5wy['onCreateInput'](xp_5yz);else {
                    if (xp_5yz == 'div') {
                        var k6$mv2 = zpx5wy['_preCreateElement'](xp_5yz);
                        return k6$mv2['contains'] = function (j387r9) {
                            return null;
                        }, k6$mv2['removeChild'] = function (e9rgu7) {}, k6$mv2;
                    } else return zpx5wy['_preCreateElement'](xp_5yz);
                }
            }
        }, zpx5wy['onCreateInput'] = function (yopwqx) {
            var smk6$v = zpx5wy['_preCreateElement'](yopwqx);
            return smk6$v['focus'] = i4s3hj['wxinputFocus'], smk6$v['blur'] = i4s3hj['wxinputblur'], smk6$v['style'] = {}, smk6$v['value'] = 0x0, smk6$v['parentElement'] = {}, smk6$v['placeholder'] = {}, smk6$v['type'] = {}, smk6$v['setColor'] = function (aqxdw) {}, smk6$v['setType'] = function (xoqywp) {}, smk6$v['setFontFace'] = function (xpaoqw) {}, smk6$v['addEventListener'] = function (adw0qo) {}, smk6$v['contains'] = function (is4$hk) {
                return null;
            }, smk6$v['removeChild'] = function (oqawd) {}, smk6$v;
        }, zpx5wy['createShaderCondition'] = function (pxw5yz) {
            var dxaow = this,
                ugle9 = function () {
                var g1fult = pxw5yz;
                return dxaow[pxw5yz['replace']('this.', '')];
            };
            return ugle9;
        }, zpx5wy['EnvConfig'] = null, zpx5wy['window'] = null, zpx5wy['_preCreateElement'] = null, zpx5wy['_inited'] = ![], zpx5wy['wxRequest'] = null, zpx5wy['systemInfo'] = null, zpx5wy['version'] = '0.0.1', zpx5wy['isZiYu'] = ![], zpx5wy['isPosMsgYu'] = ![], zpx5wy['parseXMLFromString'] = function ($h3s4) {
            var w0qoda, v6ki$;
            $h3s4 = $h3s4['replace'](/>\s+</g, '><');
            try {
                w0qoda = new window['Parser']['DOMParser']()['parseFromString']($h3s4, 'text/xml');
            } catch (fut1lg) {
                throw '需要引入xml解析库文件';
            }
            return w0qoda;
        }, zpx5wy['idx'] = 0x1, zpx5wy;
    }(),
        ij348 = function () {
        function j873r() {}
        wqoyp(j873r, 'laya.wx.mini.MiniImage');
        var z_nby = j873r['prototype'];
        return z_nby['_loadImage'] = function (eu9gr) {
            var zywp5x = this,
                rl1g = ![];
            eu9gr['indexOf']('layaNativeDir/') == -0x1 && (rl1g = !![], eu9gr = lr9['formatURL'](eu9gr));
            if (!awdq['getFileInfo'](eu9gr)) {
                if (eu9gr['indexOf']('http://') != -0x1 || eu9gr['indexOf']('https://') != -0x1) awdq['downImg'](eu9gr, new d2mv6(j873r, j873r['onDownImgCallBack'], [eu9gr, zywp5x]), eu9gr);else j873r['onCreateImage'](eu9gr, zywp5x, !![]);
            } else j873r['onCreateImage'](eu9gr, zywp5x, !rl1g);
        }, j873r['onDownImgCallBack'] = function (k$mv6s, vm20a, oadqw) {
            if (!oadqw) j873r['onCreateImage'](k$mv6s, vm20a);else vm20a['onError'](null);
        }, j873r['onCreateImage'] = function (y5wpzx, rl9uge, ltgf1u) {
            ltgf1u === void 0x0 && (ltgf1u = ![]);
            var p5wyo;
            if (!ltgf1u) {
                var xwqopa = awdq['getFileInfo'](y5wpzx),
                    k6s$mv = xwqopa['md5'];
                p5wyo = awdq['getFileNativePath'](k6s$mv);
            } else p5wyo = y5wpzx;
            if (rl9uge['imgCache'] == null) rl9uge['imgCache'] = {};
            var wp5xy;
            function l9eu() {
                wp5xy['onload'] = null, wp5xy['onerror'] = null, delete rl9uge['imgCache'][y5wpzx];
            }
            ;
            var rlue1g = function () {
                l9eu(), rl9uge['onLoaded'](wp5xy);
            },
                er9gu = function () {
                l9eu(), rl9uge['event']('error', 'Load image failed');
            };
            rl9uge['_type'] == 'nativeimage' ? (wp5xy = new r93j8['window']['Image'](), wp5xy['crossOrigin'] = '', wp5xy['onload'] = rlue1g, wp5xy['onerror'] = er9gu, wp5xy['src'] = p5wyo, rl9uge['imgCache'][y5wpzx] = wp5xy) : new qoa20d['create'](p5wyo, {
                'onload': rlue1g,
                'onerror': er9gu,
                'onCreate': function (wqoxap) {
                    wp5xy = wqoxap, rl9uge['imgCache'][y5wpzx] = wqoxap;
                }
            });
        }, j873r;
    }(),
        i4s3hj = function () {
        function guler1() {}
        return wqoyp(guler1, 'laya.wx.mini.MiniInput'), guler1['_createInputElement'] = function () {
            h743j['_initInput'](h743j['area'] = r93j8['createElement']('textarea')), h743j['_initInput'](h743j['input'] = r93j8['createElement']('input')), h743j['inputContainer'] = r93j8['createElement']('div'), h743j['inputContainer']['style']['position'] = 'absolute', h743j['inputContainer']['style']['zIndex'] = 0x186a0, r93j8['container']['appendChild'](h743j['inputContainer']), h743j['inputContainer']['setPos'] = function (a02dmq, od0a) {
                h743j['inputContainer']['style']['left'] = a02dmq + 'px', h743j['inputContainer']['style']['top'] = od0a + 'px';
            }, n5zyb['stage']['on']('resize', null, guler1['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (qwod) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), oqdw0['_soundClass'] = zy5_xp, oqdw0['_musicClass'] = zy5_xp, window['_videoClass'] = mvk26$;
        }, guler1['_onStageResize'] = function () {
            var je798r = n5zyb['stage']['_canvasTransform']['identity']();
            je798r['scale'](r93j8['width'] / xqawd['canvas']['width'] / dv2ma['getPixelRatio'](), r93j8['height'] / xqawd['canvas']['height'] / dv2ma['getPixelRatio']());
        }, guler1['wxinputFocus'] = function (r87e9j) {
            var reu1l = h743j['inputElement']['target'];
            if (reu1l && !reu1l['editable']) return;
            $v6msk['window']['wx']['offKeyboardConfirm'](), $v6msk['window']['wx']['offKeyboardInput'](), $v6msk['window']['wx']['showKeyboard']({
                'defaultValue': reu1l['text'],
                'maxLength': reu1l['maxChars'],
                'multiple': reu1l['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function ($6ihs) {},
                'fail': function (a2dqo0) {}
            }), $v6msk['window']['wx']['onKeyboardConfirm'](function (s6m$vk) {
                var ik$s6h = s6m$vk ? s6m$vk['value'] : '';
                reu1l['text'] = ik$s6h, reu1l['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), $v6msk['window']['wx']['onKeyboardInput'](function (kih$6s) {
                var v2d06 = kih$6s ? kih$6s['value'] : '';
                if (!reu1l['multiline']) {
                    if (v2d06['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                reu1l['text'] = v2d06, reu1l['event']('input');
            });
        }, guler1['inputEnter'] = function () {
            h743j['inputElement']['target']['focus'] = ![];
        }, guler1['wxinputblur'] = function () {
            guler1['hideKeyboard']();
        }, guler1['hideKeyboard'] = function () {
            $v6msk['window']['wx']['offKeyboardConfirm'](), $v6msk['window']['wx']['offKeyboardInput'](), $v6msk['window']['wx']['hideKeyboard']({
                'success': function (m$s6v) {
                    console['log']('隐藏键盘');
                },
                'fail': function (h$4) {
                    console['log']('隐藏键盘出错:' + (h$4 ? h$4['errMsg'] : ''));
                }
            });
        }, guler1;
    }(),
        hs$ki = function () {
        function $6mvsk() {}
        wqoyp($6mvsk, 'laya.wx.mini.MiniLoader');
        var $6m = $6mvsk['prototype'];
        return $6m['load'] = function (oxwdqa, eg9rlu, $h43is, pw5xz, rg7ue9) {
            $h43is === void 0x0 && ($h43is = !![]), rg7ue9 === void 0x0 && (rg7ue9 = ![]);
            var rlgu1 = this;
            rlgu1['_url'] = oxwdqa;
            if (oxwdqa['indexOf']('data:image') === 0x0) rlgu1['_type'] = eg9rlu = 'image';else rlgu1['_type'] = eg9rlu || (eg9rlu = rlgu1['getTypeFromUrl'](oxwdqa));
            rlgu1['_cache'] = $h43is, rlgu1['_data'] = null;
            var _zbny = 'ascii';
            if (oxwdqa['indexOf']('.fnt') != -0x1) _zbny = 'utf8';else eg9rlu == 'arraybuffer' && (_zbny = '');
            ;
            var jh834 = mq0a2['getFileExtension'](oxwdqa);
            if ($6mvsk['_fileTypeArr']['indexOf'](jh834) != -0x1) $v6msk['EnvConfig']['load']['call'](this, oxwdqa, eg9rlu, $h43is, pw5xz, rg7ue9);else {
                if (!awdq['getFileInfo'](oxwdqa)) {
                    if (oxwdqa['indexOf']('layaNativeDir/') != -0x1) {
                        if ($v6msk['isZiYu']) {
                            var kv$6m = awdq['ziyuFileData'][oxwdqa];
                            rlgu1['onLoaded'](kv$6m);
                            return;
                        } else {
                            cosnole['log']('read read'), awdq['read'](oxwdqa, _zbny, new d2mv6($6mvsk, $6mvsk['onReadNativeCallBack'], [_zbny, oxwdqa, eg9rlu, $h43is, pw5xz, rg7ue9, rlgu1]));
                            return;
                        }
                    }
                    if (lr9['rootPath'] == '') var ishj4 = oxwdqa;else ishj4 = oxwdqa['split'](lr9['rootPath'])[0x0];
                    oxwdqa['indexOf']('http://') != -0x1 || oxwdqa['indexOf']('https://') != -0x1 ? $v6msk['EnvConfig']['load']['call'](rlgu1, oxwdqa, eg9rlu, $h43is, pw5xz, rg7ue9) : awdq['readFile'](ishj4, _zbny, new d2mv6($6mvsk, $6mvsk['onReadNativeCallBack'], [_zbny, oxwdqa, eg9rlu, $h43is, pw5xz, rg7ue9, rlgu1]), oxwdqa);
                } else $v6msk['EnvConfig']['load']['call'](this, oxwdqa, eg9rlu, $h43is, pw5xz, rg7ue9);
            }
        }, $6m['resMgrLoad'] = function (qxwyo, aopqx, nz_5y, m02vk, u1fge, s$4ki, n5bz) {
            nz_5y === void 0x0 && (nz_5y = 0x0), m02vk === void 0x0 && (m02vk = ![]), u1fge === void 0x0 && (u1fge = ![]), s$4ki === void 0x0 && (s$4ki = 0x0), n5bz === void 0x0 && (n5bz = 0x3), qxwyo['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', qxwyo), $v6msk['EnvConfig']['resMgrLoad'](qxwyo, (daoq0, oy5pxw, qd2ma0) => {
                $6mvsk['prototype']['resMgrLoadCallBack'](daoq0, oy5pxw, qd2ma0, aopqx);
            }, nz_5y, m02vk, u1fge, s$4ki, n5bz);
        }, $6m['resMgrLoadCallBack'] = function (ug1lfe, mks$6v, oaqd02, e79rg8) {
            console['log']('buff:::', ug1lfe, oaqd02, awdq['fileNativeDir'] + '///' + awdq['fileListName']), e79rg8(ug1lfe, mks$6v, oaqd02);
        }, $6m['clearRes'] = function (uge9l, hj7438) {
            hj7438 === void 0x0 && (hj7438 = ![]);
            var ik$sh = this;
            ik$sh['clearRes'](uge9l, hj7438);
            var axwqd = awdq['getFileInfo'](uge9l);
            if (axwqd && (uge9l['indexOf']('http://') != -0x1 || uge9l['indexOf']('https://') != -0x1)) {
                var ufegl1 = axwqd['md5'],
                    wqoa = awdq['getFileNativePath'](ufegl1);
                awdq['remove'](wqoa);
            }
        }, $6mvsk['onReadNativeCallBack'] = function (hsi3$, $6ki, rleug1, k26$, pyxqw, jh4s, pxaq, v6sk$i, ij83h) {
            k26$ === void 0x0 && (k26$ = !![]), jh4s === void 0x0 && (jh4s = ![]), v6sk$i === void 0x0 && (v6sk$i = 0x0);
            if (!v6sk$i) {
                var rug79e;
                if (rleug1 == 'json' || rleug1 == 'atlas') rug79e = $v6msk['getJson'](ij83h['data']);else rleug1 == 'xml' ? rug79e = mq0a2['parseXMLFromString'](ij83h['data']) : rug79e = ij83h['data'];
                pxaq['onLoaded'](rug79e), !$v6msk['isZiYu'] && $v6msk['isPosMsgYu'] && rleug1 != 'arraybuffer' && wx['postMessage']({
                    'url': $6ki,
                    'data': rug79e,
                    'isLoad': !![]
                });
            } else v6sk$i == 0x1 && $v6msk['EnvConfig']['load']['call'](pxaq, $6ki, rleug1, k26$, pyxqw, jh4s);
        }, qdw0ao($6mvsk, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), $6mvsk;
    }(),
        awdq = function (qdma0) {
        function k2() {
            k2['__super']['call'](this);
            ;
        }
        return wqoyp(k2, 'laya.wx.mini.MiniFileMgr', qdma0), k2['isLoadFile'] = function (xpaowq) {
            return k2['_fileTypeArr']['indexOf'](xpaowq) != -0x1 ? !![] : ![];
        }, k2['getFileInfo'] = function (ihs4) {
            var owqd0a = ihs4['split']('?')[0x0],
                er7j98 = k2['filesListObj'][owqd0a];
            if (er7j98 == null) return null;else return er7j98;
            return null;
        }, k2['onFileUpdate'] = function (qa02d, p5z_yb) {
            var je9r = qa02d['split']('/'),
                qm20d = je9r[je9r['length'] - 0x1],
                h4i$s = k2['getFileInfo'](p5z_yb);
            if (h4i$s == null) k2['onSaveFile'](p5z_yb, qm20d);else {
                if (h4i$s['readyUrl'] != p5z_yb) k2['remove'](qm20d, p5z_yb);
            }
        }, k2['exits'] = function (tlgf, sij34h) {
            var doa2 = k2['getFileNativePath'](tlgf);
            k2['fs']['getFileInfo']({
                'filePath': doa2,
                'success': function (paqoxw) {
                    sij34h != null && sij34h['runWith']([0x0, paqoxw]);
                },
                'fail': function (mv6ks$) {
                    sij34h != null && sij34h['runWith']([0x1, mv6ks$]);
                }
            });
        }, k2['read'] = function (l1gefu, qxa, e9lg, ge1ur) {
            qxa === void 0x0 && (qxa = 'ascill'), ge1ur === void 0x0 && (ge1ur = '');
            var avm0d2;
            ge1ur != '' ? avm0d2 = k2['getFileNativePath'](l1gefu) : avm0d2 = l1gefu, k2['fs']['readFile']({
                'filePath': avm0d2,
                'encoding': qxa,
                'success': function (lreu1g) {
                    e9lg != null && e9lg['runWith']([0x0, lreu1g]);
                },
                'fail': function (g1fel) {
                    if (g1fel && ge1ur != '') k2['down'](ge1ur, qxa, e9lg, ge1ur);else e9lg != null && e9lg['runWith']([0x1]);
                }
            });
        }, k2['readNativeFile'] = function (pb_z, yz5bn) {
            k2['fs']['readFile']({
                'filePath': pb_z,
                'encoding': '',
                'success': function ($6shik) {
                    yz5bn != null && yz5bn['runWith']([0x0]);
                },
                'fail': function (awqox) {
                    yz5bn != null && yz5bn['runWith']([0x1]);
                }
            });
        }, k2['down'] = function (do02aq, aq20m, j38ih, m2k6v$) {
            aq20m === void 0x0 && (aq20m = 'ascill'), m2k6v$ === void 0x0 && (m2k6v$ = '');
            var grleu9 = k2['getFileNativePath'](m2k6v$),
                bpz_ = k2['wxdown']({
                'url': do02aq,
                'filePath': grleu9,
                'success': function (zpb5_y) {
                    if (zpb5_y['statusCode'] === 0xc8) k2['readFile'](zpb5_y['filePath'], aq20m, j38ih, m2k6v$);
                },
                'fail': function (wqoxyp) {
                    j38ih != null && j38ih['runWith']([0x1, wqoxyp]);
                }
            });
            bpz_['onProgressUpdate'](function (e1rglu) {
                j38ih != null && j38ih['runWith']([0x2, e1rglu['progress']]);
            });
        }, k2['readFile'] = function (q0o2a, u1gler, wyox5, w5yzpx) {
            u1gler === void 0x0 && (u1gler = 'ascill'), w5yzpx === void 0x0 && (w5yzpx = ''), k2['fs']['readFile']({
                'filePath': q0o2a,
                'encoding': u1gler,
                'success': function (hk4s) {
                    if (q0o2a['indexOf']('http://') != -0x1 || q0o2a['indexOf']('https://') != -0x1) k2['onFileUpdate'](q0o2a, w5yzpx);
                    wyox5 != null && wyox5['runWith']([0x0, hk4s]);
                },
                'fail': function (d2aq0o) {
                    if (d2aq0o) wyox5 != null && wyox5['runWith']([0x1, d2aq0o]);
                }
            });
        }, k2['downImg'] = function (glure, g9u7, iskh4) {
            iskh4 === void 0x0 && (iskh4 = '');
            var wopa = k2['wxdown']({
                'url': glure,
                'success': function (by_pz5) {
                    by_pz5['statusCode'] === 0xc8 && k2['copyFile'](by_pz5['tempFilePath'], iskh4, g9u7);
                },
                'fail': function (fe1gl) {
                    g9u7 != null && g9u7['runWith']([0x1, fe1gl]);
                }
            });
        }, k2['copyFile'] = function (vk$26, u9eg7, oqw) {
            var xywpqo = vk$26['split']('/'),
                jh374 = xywpqo[xywpqo['length'] - 0x1],
                m2vd6 = u9eg7['split']('?')[0x0],
                m2vd60 = k2['getFileInfo'](u9eg7),
                _yb5p = k2['getFileNativePath'](jh374);
            k2['fs']['copyFile']({
                'srcPath': vk$26,
                'destPath': _yb5p,
                'success': function (p_yx) {
                    if (!m2vd60) k2['onSaveFile'](u9eg7, jh374), oqw != null && oqw['runWith']([0x0]);else {
                        if (m2vd60['readyUrl'] != u9eg7) k2['remove'](jh374, u9eg7, oqw);
                    }
                },
                'fail': function ($34is) {
                    oqw != null && oqw['runWith']([0x1, $34is]);
                }
            });
        }, k2['getFileNativePath'] = function (ynzb5) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ynzb5;
        }, k2['remove'] = function (d062, qo20d, h8347j) {
            qo20d === void 0x0 && (qo20d = '');
            var ul1gft = k2['getFileInfo'](qo20d),
                jr973 = k2['getFileNativePath'](ul1gft['md5']);
            n5zyb['loader']['clearRes'](ul1gft['readyUrl']), k2['fs']['unlink']({
                'filePath': jr973,
                'success': function (skh$4i) {
                    if (qo20d != '') k2['onSaveFile'](qo20d, d062);
                    h8347j != null && h8347j['runWith']([0x0]);
                },
                'fail': function (mv$s6k) {}
            });
        }, k2['onSaveFile'] = function (rj78e, eru1) {
            var b5z_y = rj78e['split']('?')[0x0];
            k2['filesListObj'][b5z_y] = {
                'md5': eru1,
                'readyUrl': rj78e
            }, k2['fs']['writeFile']({
                'filePath': k2['fileNativeDir'] + '/' + k2['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](k2['filesListObj']),
                'success': function (y5_x) {
                    console['log']('写入测试测试成功：', y5_x);
                },
                'fail': function (y_xz) {
                    console['log']('写入测试测试失败：', y_xz);
                }
            });
        }, k2['existDir'] = function (g1luef, i$sh6k) {
            k2['fs']['mkdir']({
                'dirPath': g1luef,
                'success': function (k6hsi) {
                    i$sh6k != null && i$sh6k['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (aqxpo) {
                    if (aqxpo['errMsg']['indexOf']('file already exists') != -0x1) k2['readSync'](k2['fileListName'], 'utf8', i$sh6k);else i$sh6k != null && i$sh6k['runWith']([0x1, aqxpo]);
                }
            });
        }, k2['readSync'] = function (ik$4sh, yb_p, do2aq0, k$6vm2) {
            yb_p === void 0x0 && (yb_p = 'ascill'), k$6vm2 === void 0x0 && (k$6vm2 = '');
            var yxwz5p = k2['getFileNativePath'](ik$4sh),
                xywp5;
            try {
                xywp5 = k2['fs']['readFileSync'](yxwz5p), do2aq0 != null && do2aq0['runWith']([0x0, { 'data': xywp5 }]);
            } catch (dv20am) {
                do2aq0 != null && do2aq0['runWith']([0x1]);
            }
        }, k2['readCache'] = function () {}, k2['writeCache'] = function (hs3$i) {
            var oxqwap = readyUrl['split']('?')[0x0];
            k2['filesListObj'][oxqwap] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, k2['fs']['writeFile']({
                'filePath': k2['fileNativeDir'] + '/' + k2['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](k2['filesListObj']),
                'success': function (g1lru) {},
                'fail': function (_nb5yz) {}
            });
        }, k2['setNativeFileDir'] = function (d2qm) {
            k2['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + d2qm;
        }, k2['filesListObj'] = {}, k2['fileNativeDir'] = null, k2['fileListName'] = 'layaairfiles.txt', k2['ziyuFileData'] = {}, qdw0ao(k2, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), k2;
    }(va20md),
        zy5_xp = function (r7j3) {
        function e7j89() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], e7j89['__super']['call'](this), this['_sound'] = e7j89['_createSound'](), this['_chanell'] = new pzw5(this['_sound']);
        }
        wqoyp(e7j89, 'laya.wx.mini.MiniSound', r7j3);
        var his34$ = e7j89['prototype'];
        return his34$['load'] = function (g7reu) {
            var owa0 = this;
            g7reu = lr9['formatURL'](g7reu), this['url'] = g7reu;
            if (e7j89['_audioCache'][g7reu]) {
                this['event']('complete');
                return;
            }
            function i$v() {
                if (e7j89['_null'] != undefined) owa0['_sound']['onCanplay'](e7j89['_null']), owa0['_sound']['onError'](e7j89['_null']);else try {
                    owa0['_sound']['onCanplay'](null), owa0['_sound']['onError'](null), e7j89['_null'] = null;
                } catch (i3j84) {
                    console['warn']('[wxmini] _clearSound:' + i3j84), owa0['_sound']['onCanplay'](o0daq2), owa0['_sound']['onError'](o0daq2), e7j89['_null'] = o0daq2;
                }
            }
            function yb_nz() {
                znyb_['loaded'] = !![], znyb_['event']('complete'), e7j89['_audioCache'][znyb_['url']] = znyb_;
            }
            function qp(dawqox) {
                console['error']('errCode=' + dawqox['errCode'] + '  errMsg=' + dawqox['errMsg']), znyb_['event']('error');
            }
            function o0daq2() {}
            this['_sound']['onCanplay'](yb_nz), this['_sound']['onError'](qp), this['_sound']['src'] = g7reu;
            var znyb_ = this;
        }, his34$['play'] = function (zp5xy, i4jh83) {
            zp5xy === void 0x0 && (zp5xy = 0x0), i4jh83 === void 0x0 && (i4jh83 = 0x0);
            var o5xpyw, qda0o2;
            if (this['url'] == oqdw0['_tMusic']) {
                if (!e7j89['_musicAudio']) e7j89['_musicAudio'] = this['_sound'];
                o5xpyw = e7j89['_musicAudio'], qda0o2 = this['_chanell'];
            } else o5xpyw = this['_sound'], qda0o2 = this['_chanell'];
            return o5xpyw['src'] = this['url'], o5xpyw['startTime'] = 0x0, qda0o2['isStopped'] && (qda0o2['url'] = this['url'], qda0o2['loops'] = i4jh83, qda0o2['startTime'] = zp5xy, qda0o2['play'](), oqdw0['addChannel'](qda0o2)), qda0o2;
        }, his34$['dispose'] = function () {
            var aod0 = e7j89['_audioCache'][this['url']];
            aod0 && (aod0['src'] = '', delete e7j89['_audioCache'][this['url']]);
        }, ad0owq(0x0, his34$, 'duration', function () {
            return this['_sound']['duration'];
        }), e7j89['_createSound'] = function () {
            e7j89['_id']++;
            var ugt1lf = $v6msk['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return ugt1lf;
        }, e7j89['_musicAudio'] = null, e7j89['_id'] = 0x0, e7j89['_audioCache'] = {}, e7j89['_null'] = undefined, e7j89;
    }(va20md),
        pzw5 = function (yp5xzw) {
        function advm(ad02) {
            this['_audio'] = null, this['_onEnd'] = null, advm['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = ad02, this['_onEnd'] = mq0a2['bind'](this['__onEnd'], this), ad02['onEnded'](this['_onEnd']);
        }
        wqoyp(advm, 'laya.wx.mini.MiniSoundChannel', yp5xzw);
        var j4783 = advm['prototype'];
        return j4783['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (n5zyb['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, j4783['__onNull'] = function () {}, j4783['play'] = function () {
            this['isStopped'] = ![], oqdw0['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, j4783['stop'] = function () {
            this['isStopped'] = !![], oqdw0['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, j4783['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, j4783['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], oqdw0['addChannel'](this), this['_audio']['play']();
        }, ad0owq(0x0, j4783, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), ad0owq(0x0, j4783, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), ad0owq(0x0, j4783, 'volume', function () {
            return 0x1;
        }, function (elu9gr) {}), advm['_null'] = undefined, advm;
    }($hs6ki),
        mvk26$ = function () {
        function ksm6() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = $v6msk['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        wqoyp(ksm6, 'laya.wx.mini.MiniVideo');
        var mvk$26 = ksm6['prototype'];
        return mvk$26['on'] = function (r79eug, d2o0qa, d2m0aq) {
            if (r79eug == 'loadedmetadata') this['onPlayFunc'] = d2m0aq['bind'](d2o0qa), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else r79eug == 'ended' && (this['onEndedFunC'] = d2m0aq['bind'](d2o0qa), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, mvk$26['onTimeUpdateFunc'] = function (si6v$) {
            this['position'] = si6v$['position'], this['_duration'] = si6v$['duration'];
        }, mvk$26['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, mvk$26['onended'] = function (z5yx_, s3jih4) {
            this['onEndedFunC'] = s3jih4['bind'](z5yx_), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, mvk$26['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, mvk$26['off'] = function (d02v6, khi$4s, kv60m2) {
            if (d02v6 == 'loadedmetadata') this['onPlayFunc'] = kv60m2['bind'](khi$4s), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else d02v6 == 'ended' && (this['onEndedFunC'] = kv60m2['bind'](khi$4s), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, mvk$26['load'] = function (wo0aqd) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = wo0aqd;
        }, mvk$26['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, mvk$26['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, mvk$26['size'] = function (_nzb5y, kvms$6) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = _nzb5y, this['videoElement']['height'] = kvms$6;
        }, mvk$26['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, mvk$26['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, ad0owq(0x0, mvk$26, 'duration', function () {
            return this['_duration'];
        }), ad0owq(0x0, mvk$26, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (rje879) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = rje879;
        }), ad0owq(0x0, mvk$26, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), ad0owq(0x0, mvk$26, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), ad0owq(0x0, mvk$26, 'ended', function () {
            return this['videoend'];
        }), ad0owq(0x0, mvk$26, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (guflt1) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = guflt1;
        }), ad0owq(0x0, mvk$26, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (r8je9) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = r8je9;
        }), ad0owq(0x0, mvk$26, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (m62$) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = m62$;
        }), ad0owq(0x0, mvk$26, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), ad0owq(0x0, mvk$26, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (do02) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = do02;
        }), ad0owq(0x0, mvk$26, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (u7r) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = u7r;
        }), ad0owq(0x0, mvk$26, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), ad0owq(0x0, mvk$26, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (wpyo5x) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = wpyo5x;
        }), ad0owq(0x0, mvk$26, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (hsi43j) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = hsi43j;
        }), ad0owq(0x0, mvk$26, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (o0a2qd) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = o0a2qd;
        }), ksm6;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var $vksm6 in Laya) {
        var j78e = Laya[$vksm6];
        j78e && j78e['__isclass'] && (exports[$vksm6] = j78e);
    }
});