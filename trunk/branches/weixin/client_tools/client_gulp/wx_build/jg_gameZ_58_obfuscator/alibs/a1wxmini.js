var c = wx.$a;
(function (window, document, ue2wg1) {
    var shznv = ue2wg1['un'],
        drqt6 = ue2wg1['uns'],
        jkhnvz = ue2wg1['static'],
        uge1 = ue2wg1['class'],
        s21 = ue2wg1['getset'],
        kvzj = ue2wg1['__newvec'],
        zdkq86 = laya['utils']['Browser'],
        ufw1 = laya['events']['Event'],
        uxf2 = laya['events']['EventDispatcher'],
        _0oy4c = laya['resource']['HTMLImage'],
        bcy4o = laya['utils']['Handler'],
        vhjnsz = laya['display']['Input'],
        rt357 = laya['net']['Loader'],
        zq68k = laya['maths']['Matrix'],
        oyb = laya['renders']['Render'],
        gw_4e = laya['utils']['RunDriver'],
        $0ocy = laya['media']['Sound'],
        wgfu21 = laya['media']['SoundChannel'],
        nsh = laya['media']['SoundManager'],
        _04yo = laya['display']['Stage'],
        _0w4o = laya['net']['URL'],
        q6dkhz = laya['utils']['Utils'],
        cyb0l$ = function () {
        function d5q8() {}
        return uge1(d5q8, 'laya.wx.mini.MiniAdpter'), d5q8['getJson'] = function (zhnsj) {
            return JSON['parse'](zhnsj);
        }, d5q8['init'] = function (sf1g2x, w_e4ug) {
            sf1g2x === void 0x0 && (sf1g2x = ![]), w_e4ug === void 0x0 && (w_e4ug = ![]);
            if (d5q8['_inited']) return;
            d5q8['window'] = window;
            if (d5q8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            d5q8['_inited'] = !![], d5q8['isZiYu'] = w_e4ug, d5q8['isPosMsgYu'] = sf1g2x, d5q8['EnvConfig'] = {}, !d5q8['isZiYu'] && (rqt6d['setNativeFileDir']('/layaairGame'), rqt6d['existDir'](rqt6d['fileNativeDir'], bcy4o['create'](d5q8, d5q8['onMkdirCallBack']))), d5q8['window']['focus'] = function () {}, ue2wg1['getUrlPath'] = function () {}, d5q8['window']['logtime'] = function (fsjnx1) {}, d5q8['window']['alertTimeLog'] = function (c$lbm) {}, d5q8['window']['resetShareInfo'] = function () {}, d5q8['window']['CanvasRenderingContext2D'] = function () {}, d5q8['window']['CanvasRenderingContext2D']['prototype'] = d5q8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], d5q8['window']['document']['body']['appendChild'] = function () {}, d5q8['EnvConfig']['pixelRatioInt'] = 0x0, gw_4e['getPixelRatio'] = d5q8['pixelRatio'], d5q8['_preCreateElement'] = zdkq86['createElement'], zdkq86['createElement'] = d5q8['createElement'], gw_4e['createShaderCondition'] = d5q8['createShaderCondition'], q6dkhz['parseXMLFromString'] = d5q8['parseXMLFromString'], vhjnsz['_createInputElement'] = t53r8['_createInputElement'], d5q8['EnvConfig']['load'] = rt357['prototype']['load'], rt357['prototype']['load'] = t75rp['prototype']['load'], d5q8['isZiYu'] && sf1g2x && wx['onMessage'](function (g_euw) {
                g_euw['isLoad'] && (rqt6d['ziyuFileData'][g_euw['url']] = g_euw['data']);
            });
        }, d5q8['onMkdirCallBack'] = function (vhk6, h6vkd) {
            if (!vhk6) rqt6d['filesListObj'] = JSON['parse'](h6vkd['data']);
        }, d5q8['pixelRatio'] = function () {
            if (!d5q8['EnvConfig']['pixelRatioInt']) try {
                var _4gweu = wx['getSystemInfoSync']();
                return d5q8['EnvConfig']['pixelRatioInt'] = _4gweu['pixelRatio'], _4gweu = _4gweu, _4gweu['pixelRatio'];
            } catch (njxvs) {}
            return d5q8['EnvConfig']['pixelRatioInt'];
        }, d5q8['createElement'] = function (q785) {
            if (q785 == 'canvas') {
                var q68z;
                return d5q8['idx'] == 0x1 ? d5q8['isZiYu'] ? (q68z = sharedCanvas, q68z['style'] = {}) : q68z = window['canvas'] : q68z = window['wx']['createCanvas'](), d5q8['idx']++, q68z;
            } else {
                if (q785 == 'textarea' || q785 == 'input') return d5q8['onCreateInput'](q785);else {
                    if (q785 == 'div') {
                        var cbly$ = d5q8['_preCreateElement'](q785);
                        return cbly$['contains'] = function (yclbm$) {
                            return null;
                        }, cbly$['removeChild'] = function (jzvhsn) {}, cbly$;
                    } else return d5q8['_preCreateElement'](q785);
                }
            }
        }, d5q8['onCreateInput'] = function (r85dt) {
            var _yc40 = d5q8['_preCreateElement'](r85dt);
            return _yc40['focus'] = t53r8['wxinputFocus'], _yc40['blur'] = t53r8['wxinputblur'], _yc40['style'] = {}, _yc40['value'] = 0x0, _yc40['parentElement'] = {}, _yc40['placeholder'] = {}, _yc40['type'] = {}, _yc40['setColor'] = function (b0lc) {}, _yc40['setType'] = function ($yb0o) {}, _yc40['setFontFace'] = function (_oy4) {}, _yc40['addEventListener'] = function (coy0b4) {}, _yc40['contains'] = function ($oc) {
                return null;
            }, _yc40['removeChild'] = function (shnjz) {}, _yc40;
        }, d5q8['createShaderCondition'] = function (u21wge) {
            var _eu4ow = this,
                vknhz = function () {
                var fx1ug = u21wge;
                return _eu4ow[u21wge['replace']('this.', '')];
            };
            return vknhz;
        }, d5q8['EnvConfig'] = null, d5q8['window'] = null, d5q8['_preCreateElement'] = null, d5q8['_inited'] = ![], d5q8['wxRequest'] = null, d5q8['systemInfo'] = null, d5q8['version'] = '0.0.1', d5q8['isZiYu'] = ![], d5q8['isPosMsgYu'] = ![], d5q8['parseXMLFromString'] = function (rq785t) {
            var $o0bc, hsznv;
            rq785t = rq785t['replace'](/>\s+</g, '><');
            try {
                $o0bc = new window['Parser']['DOMParser']()['parseFromString'](rq785t, 'text/xml');
            } catch (ylb) {
                throw '需要引入xml解析库文件';
            }
            return $o0bc;
        }, d5q8['idx'] = 0x1, d5q8;
    }(),
        vnhxs = function () {
        function jnhxv() {}
        uge1(jnhxv, 'laya.wx.mini.MiniImage');
        var r7tp35 = jnhxv['prototype'];
        return r7tp35['_loadImage'] = function (qkdz8) {
            var hzsnvj = this,
                b0y$co = ![];
            qkdz8['indexOf']('layaNativeDir/') == -0x1 && (b0y$co = !![], qkdz8 = _0w4o['formatURL'](qkdz8));
            if (!rqt6d['getFileInfo'](qkdz8)) {
                if (qkdz8['indexOf']('http://') != -0x1 || qkdz8['indexOf']('https://') != -0x1) rqt6d['downImg'](qkdz8, new bcy4o(jnhxv, jnhxv['onDownImgCallBack'], [qkdz8, hzsnvj]), qkdz8);else jnhxv['onCreateImage'](qkdz8, hzsnvj, !![]);
            } else jnhxv['onCreateImage'](qkdz8, hzsnvj, !b0y$co);
        }, jnhxv['onDownImgCallBack'] = function (f21sj, vkz6n, ueo_w) {
            if (!ueo_w) jnhxv['onCreateImage'](f21sj, vkz6n);else vkz6n['onError'](null);
        }, jnhxv['onCreateImage'] = function (q68, acm, ugwf) {
            ugwf === void 0x0 && (ugwf = ![]);
            var knvzhj;
            if (!ugwf) {
                var gwe_4u = rqt6d['getFileInfo'](q68),
                    drt5 = gwe_4u['md5'];
                knvzhj = rqt6d['getFileNativePath'](drt5);
            } else knvzhj = q68;
            if (acm['imgCache'] == null) acm['imgCache'] = {};
            var jkvzhn;
            function bmac$l() {
                jkvzhn['onload'] = null, jkvzhn['onerror'] = null, delete acm['imgCache'][q68];
            }
            ;
            var m9$bal = function () {
                bmac$l(), acm['onLoaded'](jkvzhn);
            },
                xfs12 = function () {
                bmac$l(), acm['event']('error', 'Load image failed');
            };
            acm['_type'] == 'nativeimage' ? (jkvzhn = new zdkq86['window']['Image'](), jkvzhn['crossOrigin'] = '', jkvzhn['onload'] = m9$bal, jkvzhn['onerror'] = xfs12, jkvzhn['src'] = knvzhj, acm['imgCache'][q68] = jkvzhn) : new _0oy4c['create'](knvzhj, {
                'onload': m9$bal,
                'onerror': xfs12,
                'onCreate': function (_g2w) {
                    jkvzhn = _g2w, acm['imgCache'][q68] = _g2w;
                }
            });
        }, jnhxv;
    }(),
        t53r8 = function () {
        function c$b0ly() {}
        return uge1(c$b0ly, 'laya.wx.mini.MiniInput'), c$b0ly['_createInputElement'] = function () {
            vhjnsz['_initInput'](vhjnsz['area'] = zdkq86['createElement']('textarea')), vhjnsz['_initInput'](vhjnsz['input'] = zdkq86['createElement']('input')), vhjnsz['inputContainer'] = zdkq86['createElement']('div'), vhjnsz['inputContainer']['style']['position'] = 'absolute', vhjnsz['inputContainer']['style']['zIndex'] = 0x186a0, zdkq86['container']['appendChild'](vhjnsz['inputContainer']), vhjnsz['inputContainer']['setPos'] = function (tk68qd, jnfs) {
                vhjnsz['inputContainer']['style']['left'] = tk68qd + 'px', vhjnsz['inputContainer']['style']['top'] = jnfs + 'px';
            }, ue2wg1['stage']['on']('resize', null, c$b0ly['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (gew_2u) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), nsh['_soundClass'] = rdt85, nsh['_musicClass'] = rdt85, window['_videoClass'] = pri53;
        }, c$b0ly['_onStageResize'] = function () {
            var ue21g = ue2wg1['stage']['_canvasTransform']['identity']();
            ue21g['scale'](zdkq86['width'] / oyb['canvas']['width'] / gw_4e['getPixelRatio'](), zdkq86['height'] / oyb['canvas']['height'] / gw_4e['getPixelRatio']());
        }, c$b0ly['wxinputFocus'] = function (zv6dkh) {
            var cbml = vhjnsz['inputElement']['target'];
            if (cbml && !cbml['editable']) return;
            cyb0l$['window']['wx']['offKeyboardConfirm'](), cyb0l$['window']['wx']['offKeyboardInput'](), cyb0l$['window']['wx']['showKeyboard']({
                'defaultValue': cbml['text'],
                'maxLength': cbml['maxChars'],
                'multiple': cbml['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (lbacm) {},
                'fail': function (g4_uw) {}
            }), cyb0l$['window']['wx']['onKeyboardConfirm'](function (nkjhz) {
                var qtd85 = nkjhz ? nkjhz['value'] : '';
                cbml['text'] = qtd85, cbml['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), cyb0l$['window']['wx']['onKeyboardInput'](function (m$ybc) {
                var ew_u4 = m$ybc ? m$ybc['value'] : '';
                if (!cbml['multiline']) {
                    if (ew_u4['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                cbml['text'] = ew_u4, cbml['event']('input');
            });
        }, c$b0ly['inputEnter'] = function () {
            vhjnsz['inputElement']['target']['focus'] = ![];
        }, c$b0ly['wxinputblur'] = function () {
            c$b0ly['hideKeyboard']();
        }, c$b0ly['hideKeyboard'] = function () {
            cyb0l$['window']['wx']['offKeyboardConfirm'](), cyb0l$['window']['wx']['offKeyboardInput'](), cyb0l$['window']['wx']['hideKeyboard']({
                'success': function (_weg2) {
                    console['log']('隐藏键盘');
                },
                'fail': function (xfjs2) {
                    console['log']('隐藏键盘出错:' + (xfjs2 ? xfjs2['errMsg'] : ''));
                }
            });
        }, c$b0ly;
    }(),
        t75rp = function () {
        function gw2e_u() {}
        uge1(gw2e_u, 'laya.wx.mini.MiniLoader');
        var lb$9 = gw2e_u['prototype'];
        return lb$9['load'] = function (xsfj12, u2gw, fx12j, mcl$ab, xns) {
            fx12j === void 0x0 && (fx12j = !![]), xns === void 0x0 && (xns = ![]);
            var r5q8td = this;
            r5q8td['_url'] = xsfj12;
            if (xsfj12['indexOf']('data:image') === 0x0) r5q8td['_type'] = u2gw = 'image';else r5q8td['_type'] = u2gw || (u2gw = r5q8td['getTypeFromUrl'](xsfj12));
            r5q8td['_cache'] = fx12j, r5q8td['_data'] = null;
            var r735pi = 'ascii';
            if (xsfj12['indexOf']('.fnt') != -0x1) r735pi = 'utf8';else u2gw == 'arraybuffer' && (r735pi = '');
            ;
            var b0oyc4 = q6dkhz['getFileExtension'](xsfj12);
            if (gw2e_u['_fileTypeArr']['indexOf'](b0oyc4) != -0x1) cyb0l$['EnvConfig']['load']['call'](this, xsfj12, u2gw, fx12j, mcl$ab, xns);else {
                if (!rqt6d['getFileInfo'](xsfj12)) {
                    if (xsfj12['indexOf']('layaNativeDir/') != -0x1) {
                        if (cyb0l$['isZiYu']) {
                            var kzh6nv = rqt6d['ziyuFileData'][xsfj12];
                            r5q8td['onLoaded'](kzh6nv);
                            return;
                        } else {
                            cosnole['log']('read read'), rqt6d['read'](xsfj12, r735pi, new bcy4o(gw2e_u, gw2e_u['onReadNativeCallBack'], [r735pi, xsfj12, u2gw, fx12j, mcl$ab, xns, r5q8td]));
                            return;
                        }
                    }
                    if (_0w4o['rootPath'] == '') var obyc$0 = xsfj12;else obyc$0 = xsfj12['split'](_0w4o['rootPath'])[0x0];
                    xsfj12['indexOf']('http://') != -0x1 || xsfj12['indexOf']('https://') != -0x1 ? cyb0l$['EnvConfig']['load']['call'](r5q8td, xsfj12, u2gw, fx12j, mcl$ab, xns) : rqt6d['readFile'](obyc$0, r735pi, new bcy4o(gw2e_u, gw2e_u['onReadNativeCallBack'], [r735pi, xsfj12, u2gw, fx12j, mcl$ab, xns, r5q8td]), xsfj12);
                } else cyb0l$['EnvConfig']['load']['call'](this, xsfj12, u2gw, fx12j, mcl$ab, xns);
            }
        }, lb$9['resMgrLoad'] = function (y_e40, hvsxnj, d85qr, a9ml, shzn, dh6kzv, i37) {
            d85qr === void 0x0 && (d85qr = 0x0), a9ml === void 0x0 && (a9ml = ![]), shzn === void 0x0 && (shzn = ![]), dh6kzv === void 0x0 && (dh6kzv = 0x0), i37 === void 0x0 && (i37 = 0x3), y_e40['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', y_e40), cyb0l$['EnvConfig']['resMgrLoad'](y_e40, (f1gx, kd8q6t, e_g4uw) => {
                gw2e_u['prototype']['resMgrLoadCallBack'](f1gx, kd8q6t, e_g4uw, hvsxnj);
            }, d85qr, a9ml, shzn, dh6kzv, i37);
        }, lb$9['resMgrLoadCallBack'] = function (snhzvj, xjvshn, y04cb, ewu21g) {
            console['log']('buff:::', snhzvj, y04cb, rqt6d['fileNativeDir'] + '///' + rqt6d['fileListName']), ewu21g(snhzvj, xjvshn, y04cb);
        }, lb$9['clearRes'] = function (wo0, nfjsx) {
            nfjsx === void 0x0 && (nfjsx = ![]);
            var cb0y$l = this;
            cb0y$l['clearRes'](wo0, nfjsx);
            var sjhvx = rqt6d['getFileInfo'](wo0);
            if (sjhvx && (wo0['indexOf']('http://') != -0x1 || wo0['indexOf']('https://') != -0x1)) {
                var hz6qkd = sjhvx['md5'],
                    dq8z = rqt6d['getFileNativePath'](hz6qkd);
                rqt6d['remove'](dq8z);
            }
        }, gw2e_u['onReadNativeCallBack'] = function (nzjvkh, fxsn, $9lbma, dqr58, gue21w, h6zdv, c4o_, p7i3r, lmbac) {
            dqr58 === void 0x0 && (dqr58 = !![]), h6zdv === void 0x0 && (h6zdv = ![]), p7i3r === void 0x0 && (p7i3r = 0x0);
            if (!p7i3r) {
                var gfwu12;
                if ($9lbma == 'json' || $9lbma == 'atlas') gfwu12 = cyb0l$['getJson'](lmbac['data']);else $9lbma == 'xml' ? gfwu12 = q6dkhz['parseXMLFromString'](lmbac['data']) : gfwu12 = lmbac['data'];
                c4o_['onLoaded'](gfwu12), !cyb0l$['isZiYu'] && cyb0l$['isPosMsgYu'] && $9lbma != 'arraybuffer' && wx['postMessage']({
                    'url': fxsn,
                    'data': gfwu12,
                    'isLoad': !![]
                });
            } else p7i3r == 0x1 && cyb0l$['EnvConfig']['load']['call'](c4o_, fxsn, $9lbma, dqr58, gue21w, h6zdv);
        }, jkhnvz(gw2e_u, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), gw2e_u;
    }(),
        rqt6d = function (ybco40) {
        function $cby0() {
            $cby0['__super']['call'](this);
            ;
        }
        return uge1($cby0, 'laya.wx.mini.MiniFileMgr', ybco40), $cby0['isLoadFile'] = function (_uw2eg) {
            return $cby0['_fileTypeArr']['indexOf'](_uw2eg) != -0x1 ? !![] : ![];
        }, $cby0['getFileInfo'] = function (q57t) {
            var rp3t5 = q57t['split']('?')[0x0],
                fvjx = $cby0['filesListObj'][rp3t5];
            if (fvjx == null) return null;else return fvjx;
            return null;
        }, $cby0['onFileUpdate'] = function (svzhjn, oby$0) {
            var kqhzd = svzhjn['split']('/'),
                d86qrt = kqhzd[kqhzd['length'] - 0x1],
                jvhxsn = $cby0['getFileInfo'](oby$0);
            if (jvhxsn == null) $cby0['onSaveFile'](oby$0, d86qrt);else {
                if (jvhxsn['readyUrl'] != oby$0) $cby0['remove'](d86qrt, oby$0);
            }
        }, $cby0['exits'] = function (vd6, vsfxnj) {
            var zjnvs = $cby0['getFileNativePath'](vd6);
            $cby0['fs']['getFileInfo']({
                'filePath': zjnvs,
                'success': function (hvnsjx) {
                    vsfxnj != null && vsfxnj['runWith']([0x0, hvnsjx]);
                },
                'fail': function (rtq58) {
                    vsfxnj != null && vsfxnj['runWith']([0x1, rtq58]);
                }
            });
        }, $cby0['read'] = function (_c0oy4, kzhd6q, p7t5r, vhxnjs) {
            kzhd6q === void 0x0 && (kzhd6q = 'ascill'), vhxnjs === void 0x0 && (vhxnjs = '');
            var y40ob;
            vhxnjs != '' ? y40ob = $cby0['getFileNativePath'](_c0oy4) : y40ob = _c0oy4, $cby0['fs']['readFile']({
                'filePath': y40ob,
                'encoding': kzhd6q,
                'success': function (t85rq) {
                    p7t5r != null && p7t5r['runWith']([0x0, t85rq]);
                },
                'fail': function (gfw2) {
                    if (gfw2 && vhxnjs != '') $cby0['down'](vhxnjs, kzhd6q, p7t5r, vhxnjs);else p7t5r != null && p7t5r['runWith']([0x1]);
                }
            });
        }, $cby0['readNativeFile'] = function (u12fgx, f12wgu) {
            $cby0['fs']['readFile']({
                'filePath': u12fgx,
                'encoding': '',
                'success': function (sxfg) {
                    f12wgu != null && f12wgu['runWith']([0x0]);
                },
                'fail': function (tq86d) {
                    f12wgu != null && f12wgu['runWith']([0x1]);
                }
            });
        }, $cby0['down'] = function (d68tq, oew40_, b0oy4, e2uwg1) {
            oew40_ === void 0x0 && (oew40_ = 'ascill'), e2uwg1 === void 0x0 && (e2uwg1 = '');
            var kqd86 = $cby0['getFileNativePath'](e2uwg1),
                xvjf = $cby0['wxdown']({
                'url': d68tq,
                'filePath': kqd86,
                'success': function (wo_40e) {
                    if (wo_40e['statusCode'] === 0xc8) $cby0['readFile'](wo_40e['filePath'], oew40_, b0oy4, e2uwg1);
                },
                'fail': function (jhsx) {
                    b0oy4 != null && b0oy4['runWith']([0x1, jhsx]);
                }
            });
            xvjf['onProgressUpdate'](function (c40by) {
                b0oy4 != null && b0oy4['runWith']([0x2, c40by['progress']]);
            });
        }, $cby0['readFile'] = function (vhd6kz, uweg21, q5td8, sf12g) {
            uweg21 === void 0x0 && (uweg21 = 'ascill'), sf12g === void 0x0 && (sf12g = ''), $cby0['fs']['readFile']({
                'filePath': vhd6kz,
                'encoding': uweg21,
                'success': function (hzkvd) {
                    if (vhd6kz['indexOf']('http://') != -0x1 || vhd6kz['indexOf']('https://') != -0x1) $cby0['onFileUpdate'](vhd6kz, sf12g);
                    q5td8 != null && q5td8['runWith']([0x0, hzkvd]);
                },
                'fail': function ($cylb0) {
                    if ($cylb0) q5td8 != null && q5td8['runWith']([0x1, $cylb0]);
                }
            });
        }, $cby0['downImg'] = function (u2w1g, bml$ac, e0wo_4) {
            e0wo_4 === void 0x0 && (e0wo_4 = '');
            var eoy4_ = $cby0['wxdown']({
                'url': u2w1g,
                'success': function (y4co0_) {
                    y4co0_['statusCode'] === 0xc8 && $cby0['copyFile'](y4co0_['tempFilePath'], e0wo_4, bml$ac);
                },
                'fail': function (f1g2) {
                    bml$ac != null && bml$ac['runWith']([0x1, f1g2]);
                }
            });
        }, $cby0['copyFile'] = function (cmb$, a$l9m, dzq8) {
            var sjf1x = cmb$['split']('/'),
                jzvhn = sjf1x[sjf1x['length'] - 0x1],
                uw12f = a$l9m['split']('?')[0x0],
                k6dtq = $cby0['getFileInfo'](a$l9m),
                zvnkhj = $cby0['getFileNativePath'](jzvhn);
            $cby0['fs']['copyFile']({
                'srcPath': cmb$,
                'destPath': zvnkhj,
                'success': function (xg21fs) {
                    if (!k6dtq) $cby0['onSaveFile'](a$l9m, jzvhn), dzq8 != null && dzq8['runWith']([0x0]);else {
                        if (k6dtq['readyUrl'] != a$l9m) $cby0['remove'](jzvhn, a$l9m, dzq8);
                    }
                },
                'fail': function (q8tkd) {
                    dzq8 != null && dzq8['runWith']([0x1, q8tkd]);
                }
            });
        }, $cby0['getFileNativePath'] = function (_euwg) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _euwg;
        }, $cby0['remove'] = function (vnk6, e4wuo_, ug2ew_) {
            e4wuo_ === void 0x0 && (e4wuo_ = '');
            var zhns = $cby0['getFileInfo'](e4wuo_),
                mlabc = $cby0['getFileNativePath'](zhns['md5']);
            ue2wg1['loader']['clearRes'](zhns['readyUrl']), $cby0['fs']['unlink']({
                'filePath': mlabc,
                'success': function (vzk6n) {
                    if (e4wuo_ != '') $cby0['onSaveFile'](e4wuo_, vnk6);
                    ug2ew_ != null && ug2ew_['runWith']([0x0]);
                },
                'fail': function (ug_w4e) {}
            });
        }, $cby0['onSaveFile'] = function (p753i, bo0yc4) {
            var fj1sn = p753i['split']('?')[0x0];
            $cby0['filesListObj'][fj1sn] = {
                'md5': bo0yc4,
                'readyUrl': p753i
            }, $cby0['fs']['writeFile']({
                'filePath': $cby0['fileNativeDir'] + '/' + $cby0['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify']($cby0['filesListObj']),
                'success': function (v6dk) {
                    console['log']('写入测试测试成功：', v6dk);
                },
                'fail': function (mlac) {
                    console['log']('写入测试测试失败：', mlac);
                }
            });
        }, $cby0['existDir'] = function (oye0, xs12fj) {
            $cby0['fs']['mkdir']({
                'dirPath': oye0,
                'success': function (cb$ylm) {
                    xs12fj != null && xs12fj['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (l$b9am) {
                    if (l$b9am['errMsg']['indexOf']('file already exists') != -0x1) $cby0['readSync']($cby0['fileListName'], 'utf8', xs12fj);else xs12fj != null && xs12fj['runWith']([0x1, l$b9am]);
                }
            });
        }, $cby0['readSync'] = function (sxvnfj, $9lab, zhk6q, _ow04e) {
            $9lab === void 0x0 && ($9lab = 'ascill'), _ow04e === void 0x0 && (_ow04e = '');
            var p573i = $cby0['getFileNativePath'](sxvnfj),
                sfj2;
            try {
                sfj2 = $cby0['fs']['readFileSync'](p573i), zhk6q != null && zhk6q['runWith']([0x0, { 'data': sfj2 }]);
            } catch (e_u2w) {
                zhk6q != null && zhk6q['runWith']([0x1]);
            }
        }, $cby0['readCache'] = function () {}, $cby0['writeCache'] = function (ug12we) {
            var hk6zqd = readyUrl['split']('?')[0x0];
            $cby0['filesListObj'][hk6zqd] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, $cby0['fs']['writeFile']({
                'filePath': $cby0['fileNativeDir'] + '/' + $cby0['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify']($cby0['filesListObj']),
                'success': function (c_0yo) {},
                'fail': function (svnxh) {}
            });
        }, $cby0['setNativeFileDir'] = function (c$ly0b) {
            $cby0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + c$ly0b;
        }, $cby0['filesListObj'] = {}, $cby0['fileNativeDir'] = null, $cby0['fileListName'] = 'layaairfiles.txt', $cby0['ziyuFileData'] = {}, jkhnvz($cby0, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), $cby0;
    }(uxf2),
        rdt85 = function (am$cb) {
        function ew_ug() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], ew_ug['__super']['call'](this), this['_sound'] = ew_ug['_createSound'](), this['_chanell'] = new xfsjv(this['_sound']);
        }
        uge1(ew_ug, 'laya.wx.mini.MiniSound', am$cb);
        var bcylm$ = ew_ug['prototype'];
        return bcylm$['load'] = function (a9lb$m) {
            var jnhv = this;
            a9lb$m = _0w4o['formatURL'](a9lb$m), this['url'] = a9lb$m;
            if (ew_ug['_audioCache'][a9lb$m]) {
                this['event']('complete');
                return;
            }
            function w2fu() {
                if (ew_ug['_null'] != undefined) jnhv['_sound']['onCanplay'](ew_ug['_null']), jnhv['_sound']['onError'](ew_ug['_null']);else try {
                    jnhv['_sound']['onCanplay'](null), jnhv['_sound']['onError'](null), ew_ug['_null'] = null;
                } catch (dqh6kz) {
                    console['warn']('[wxmini] _clearSound:' + dqh6kz), jnhv['_sound']['onCanplay'](tr68), jnhv['_sound']['onError'](tr68), ew_ug['_null'] = tr68;
                }
            }
            function o0$cyb() {
                ly$bcm['loaded'] = !![], ly$bcm['event']('complete'), ew_ug['_audioCache'][ly$bcm['url']] = ly$bcm;
            }
            function w4oue_(d6qzh) {
                console['error']('errCode=' + d6qzh['errCode'] + '  errMsg=' + d6qzh['errMsg']), ly$bcm['event']('error');
            }
            function tr68() {}
            this['_sound']['onCanplay'](o0$cyb), this['_sound']['onError'](w4oue_), this['_sound']['src'] = a9lb$m;
            var ly$bcm = this;
        }, bcylm$['play'] = function (k6hvd, nvhxs) {
            k6hvd === void 0x0 && (k6hvd = 0x0), nvhxs === void 0x0 && (nvhxs = 0x0);
            var js2f1x, r7358;
            if (this['url'] == nsh['_tMusic']) {
                if (!ew_ug['_musicAudio']) ew_ug['_musicAudio'] = this['_sound'];
                js2f1x = ew_ug['_musicAudio'], r7358 = this['_chanell'];
            } else js2f1x = this['_sound'], r7358 = this['_chanell'];
            return js2f1x['src'] = this['url'], js2f1x['startTime'] = 0x0, r7358['isStopped'] && (r7358['url'] = this['url'], r7358['loops'] = nvhxs, r7358['startTime'] = k6hvd, r7358['play'](), nsh['addChannel'](r7358)), r7358;
        }, bcylm$['dispose'] = function () {
            var i5p73r = ew_ug['_audioCache'][this['url']];
            i5p73r && (i5p73r['src'] = '', delete ew_ug['_audioCache'][this['url']]);
        }, s21(0x0, bcylm$, 'duration', function () {
            return this['_sound']['duration'];
        }), ew_ug['_createSound'] = function () {
            ew_ug['_id']++;
            var g1w2e = cyb0l$['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return g1w2e;
        }, ew_ug['_musicAudio'] = null, ew_ug['_id'] = 0x0, ew_ug['_audioCache'] = {}, ew_ug['_null'] = undefined, ew_ug;
    }(uxf2),
        xfsjv = function (pr753i) {
        function sfnxv(fg21uw) {
            this['_audio'] = null, this['_onEnd'] = null, sfnxv['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = fg21uw, this['_onEnd'] = q6dkhz['bind'](this['__onEnd'], this), fg21uw['onEnded'](this['_onEnd']);
        }
        uge1(sfnxv, 'laya.wx.mini.MiniSoundChannel', pr753i);
        var b0cl$ = sfnxv['prototype'];
        return b0cl$['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (ue2wg1['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, b0cl$['__onNull'] = function () {}, b0cl$['play'] = function () {
            this['isStopped'] = ![], nsh['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, b0cl$['stop'] = function () {
            this['isStopped'] = !![], nsh['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, b0cl$['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, b0cl$['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], nsh['addChannel'](this), this['_audio']['play']();
        }, s21(0x0, b0cl$, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), s21(0x0, b0cl$, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), s21(0x0, b0cl$, 'volume', function () {
            return 0x1;
        }, function (a$ml) {}), sfnxv['_null'] = undefined, sfnxv;
    }(wgfu21),
        pri53 = function () {
        function lb$0c() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = cyb0l$['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        uge1(lb$0c, 'laya.wx.mini.MiniVideo');
        var cbo$y = lb$0c['prototype'];
        return cbo$y['on'] = function (nfj1xs, ambcl, fj2s1) {
            if (nfj1xs == 'loadedmetadata') this['onPlayFunc'] = fj2s1['bind'](ambcl), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else nfj1xs == 'ended' && (this['onEndedFunC'] = fj2s1['bind'](ambcl), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, cbo$y['onTimeUpdateFunc'] = function (hvxns) {
            this['position'] = hvxns['position'], this['_duration'] = hvxns['duration'];
        }, cbo$y['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, cbo$y['onended'] = function (svnjxf, qdz86) {
            this['onEndedFunC'] = qdz86['bind'](svnjxf), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, cbo$y['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, cbo$y['off'] = function (fwug1, mly$, g2xuf1) {
            if (fwug1 == 'loadedmetadata') this['onPlayFunc'] = g2xuf1['bind'](mly$), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else fwug1 == 'ended' && (this['onEndedFunC'] = g2xuf1['bind'](mly$), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, cbo$y['load'] = function (xnjvs) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = xnjvs;
        }, cbo$y['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, cbo$y['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, cbo$y['size'] = function (ug4e_, o0_y4c) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = ug4e_, this['videoElement']['height'] = o0_y4c;
        }, cbo$y['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, cbo$y['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, s21(0x0, cbo$y, 'duration', function () {
            return this['_duration'];
        }), s21(0x0, cbo$y, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (cybl$m) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = cybl$m;
        }), s21(0x0, cbo$y, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), s21(0x0, cbo$y, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), s21(0x0, cbo$y, 'ended', function () {
            return this['videoend'];
        }), s21(0x0, cbo$y, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (wge12) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = wge12;
        }), s21(0x0, cbo$y, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (hnxsj) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = hnxsj;
        }), s21(0x0, cbo$y, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (ba$lc) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = ba$lc;
        }), s21(0x0, cbo$y, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), s21(0x0, cbo$y, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (hsnvjx) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = hsnvjx;
        }), s21(0x0, cbo$y, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (hd6zk) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = hd6zk;
        }), s21(0x0, cbo$y, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), s21(0x0, cbo$y, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (o04y_e) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = o04y_e;
        }), s21(0x0, cbo$y, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (f1sg) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = f1sg;
        }), s21(0x0, cbo$y, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function ($bclym) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = $bclym;
        }), lb$0c;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var c04o_ in Laya) {
        var vhzsnj = Laya[c04o_];
        vhzsnj && vhzsnj['__isclass'] && (exports[c04o_] = vhzsnj);
    }
});