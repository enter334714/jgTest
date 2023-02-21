var u = wx.$x;
(function (window, document, xois4m) {
    var oz25 = xois4m['un'],
        vxi4d = xois4m['uns'],
        qr_ahp = xois4m['static'],
        kebhw = xois4m['class'],
        xzmi = xois4m['getset'],
        b03 = xois4m['__newvec'],
        nfjcv = laya['utils']['Browser'],
        bh0ep = laya['events']['Event'],
        ujcnd = laya['events']['EventDispatcher'],
        z256to = laya['resource']['HTMLImage'],
        isxom = laya['utils']['Handler'],
        h0apb = laya['display']['Input'],
        udgn = laya['net']['Loader'],
        j9fln = laya['maths']['Matrix'],
        gvi4 = laya['renders']['Render'],
        d4sgi = laya['utils']['RunDriver'],
        qph_e = laya['media']['Sound'],
        wkeb0 = laya['media']['SoundChannel'],
        i4oxm = laya['media']['SoundManager'],
        f978cl = laya['display']['Stage'],
        jc9nf = laya['net']['URL'],
        ujf9n = laya['utils']['Utils'],
        dsx4g = function () {
        function l78y() {}
        return kebhw(l78y, 'laya.wx.mini.MiniAdpter'), l78y['getJson'] = function (c9lfn) {
            return JSON['parse'](c9lfn);
        }, l78y['init'] = function (nuj9cf, nujgdv) {
            nuj9cf === void 0x0 && (nuj9cf = ![]), nujgdv === void 0x0 && (nujgdv = ![]);
            if (l78y['_inited']) return;
            l78y['window'] = window;
            if (l78y['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            l78y['_inited'] = !![], l78y['isZiYu'] = nujgdv, l78y['isPosMsgYu'] = nuj9cf, l78y['EnvConfig'] = {}, !l78y['isZiYu'] && (os4ixm['setNativeFileDir']('/layaairGame'), os4ixm['existDir'](os4ixm['fileNativeDir'], isxom['create'](l78y, l78y['onMkdirCallBack']))), l78y['window']['focus'] = function () {}, xois4m['getUrlPath'] = function () {}, l78y['window']['logtime'] = function (h0paeq) {}, l78y['window']['alertTimeLog'] = function (gu4di) {}, l78y['window']['resetShareInfo'] = function () {}, l78y['window']['CanvasRenderingContext2D'] = function () {}, l78y['window']['CanvasRenderingContext2D']['prototype'] = l78y['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], l78y['window']['document']['body']['appendChild'] = function () {}, l78y['EnvConfig']['pixelRatioInt'] = 0x0, d4sgi['getPixelRatio'] = l78y['pixelRatio'], l78y['_preCreateElement'] = nfjcv['createElement'], nfjcv['createElement'] = l78y['createElement'], d4sgi['createShaderCondition'] = l78y['createShaderCondition'], ujf9n['parseXMLFromString'] = l78y['parseXMLFromString'], h0apb['_createInputElement'] = kep0b['_createInputElement'], l78y['EnvConfig']['load'] = udgn['prototype']['load'], udgn['prototype']['load'] = eahp['prototype']['load'], l78y['isZiYu'] && nuj9cf && wx['onMessage'](function (z3t5) {
                z3t5['isLoad'] && (os4ixm['ziyuFileData'][z3t5['url']] = z3t5['data']);
            });
        }, l78y['onMkdirCallBack'] = function (clf9j7, dnvjuc) {
            if (!clf9j7) os4ixm['filesListObj'] = JSON['parse'](dnvjuc['data']);
        }, l78y['pixelRatio'] = function () {
            if (!l78y['EnvConfig']['pixelRatioInt']) try {
                var ms2o5z = wx['getSystemInfoSync']();
                return l78y['EnvConfig']['pixelRatioInt'] = ms2o5z['pixelRatio'], ms2o5z = ms2o5z, ms2o5z['pixelRatio'];
            } catch ($l98y) {}
            return l78y['EnvConfig']['pixelRatioInt'];
        }, l78y['createElement'] = function (apq0he) {
            if (apq0he == 'canvas') {
                var siom4x;
                return l78y['idx'] == 0x1 ? l78y['isZiYu'] ? (siom4x = sharedCanvas, siom4x['style'] = {}) : siom4x = window['canvas'] : siom4x = window['wx']['createCanvas'](), l78y['idx']++, siom4x;
            } else {
                if (apq0he == 'textarea' || apq0he == 'input') return l78y['onCreateInput'](apq0he);else {
                    if (apq0he == 'div') {
                        var ebphk0 = l78y['_preCreateElement'](apq0he);
                        return ebphk0['contains'] = function (osmx4i) {
                            return null;
                        }, ebphk0['removeChild'] = function (dgsi) {}, ebphk0;
                    } else return l78y['_preCreateElement'](apq0he);
                }
            }
        }, l78y['onCreateInput'] = function (p0aqe) {
            var to25z6 = l78y['_preCreateElement'](p0aqe);
            return to25z6['focus'] = kep0b['wxinputFocus'], to25z6['blur'] = kep0b['wxinputblur'], to25z6['style'] = {}, to25z6['value'] = 0x0, to25z6['parentElement'] = {}, to25z6['placeholder'] = {}, to25z6['type'] = {}, to25z6['setColor'] = function (hpaq_e) {}, to25z6['setType'] = function (s4xm) {}, to25z6['setFontFace'] = function (xgsid4) {}, to25z6['addEventListener'] = function (hp_eqa) {}, to25z6['contains'] = function (clfnj) {
                return null;
            }, to25z6['removeChild'] = function (dnvug) {}, to25z6;
        }, l78y['createShaderCondition'] = function (ae0hqp) {
            var o5z26 = this,
                zto625 = function () {
                var r_hqa = ae0hqp;
                return o5z26[ae0hqp['replace']('this.', '')];
            };
            return zto625;
        }, l78y['EnvConfig'] = null, l78y['window'] = null, l78y['_preCreateElement'] = null, l78y['_inited'] = ![], l78y['wxRequest'] = null, l78y['systemInfo'] = null, l78y['version'] = '0.0.1', l78y['isZiYu'] = ![], l78y['isPosMsgYu'] = ![], l78y['parseXMLFromString'] = function (ozxmsi) {
            var ha0peb, keh0;
            ozxmsi = ozxmsi['replace'](/>\s+</g, '><');
            try {
                ha0peb = new window['Parser']['DOMParser']()['parseFromString'](ozxmsi, 'text/xml');
            } catch (xidgv4) {
                throw '需要引入xml解析库文件';
            }
            return ha0peb;
        }, l78y['idx'] = 0x1, l78y;
    }(),
        gxvi4 = function () {
        function jdcu() {}
        kebhw(jdcu, 'laya.wx.mini.MiniImage');
        var lj = jdcu['prototype'];
        return lj['_loadImage'] = function (b10e) {
            var f8l79 = this,
                dig4v = ![];
            b10e['indexOf']('layaNativeDir/') == -0x1 && (dig4v = !![], b10e = jc9nf['formatURL'](b10e));
            if (!os4ixm['getFileInfo'](b10e)) {
                if (b10e['indexOf']('http://') != -0x1 || b10e['indexOf']('https://') != -0x1) os4ixm['downImg'](b10e, new isxom(jdcu, jdcu['onDownImgCallBack'], [b10e, f8l79]), b10e);else jdcu['onCreateImage'](b10e, f8l79, !![]);
            } else jdcu['onCreateImage'](b10e, f8l79, !dig4v);
        }, jdcu['onDownImgCallBack'] = function (xzmos, prha_q, ucvndj) {
            if (!ucvndj) jdcu['onCreateImage'](xzmos, prha_q);else prha_q['onError'](null);
        }, jdcu['onCreateImage'] = function (fc9ujn, jl9c7f, wbhke) {
            wbhke === void 0x0 && (wbhke = ![]);
            var migxs;
            if (!wbhke) {
                var njvf = os4ixm['getFileInfo'](fc9ujn),
                    z52oms = njvf['md5'];
                migxs = os4ixm['getFileNativePath'](z52oms);
            } else migxs = fc9ujn;
            if (jl9c7f['imgCache'] == null) jl9c7f['imgCache'] = {};
            var e0pab;
            function gxi4ms() {
                e0pab['onload'] = null, e0pab['onerror'] = null, delete jl9c7f['imgCache'][fc9ujn];
            }
            ;
            var kw0b31 = function () {
                gxi4ms(), jl9c7f['onLoaded'](e0pab);
            },
                ljncf9 = function () {
                gxi4ms(), jl9c7f['event']('error', 'Load image failed');
            };
            jl9c7f['_type'] == 'nativeimage' ? (e0pab = new nfjcv['window']['Image'](), e0pab['crossOrigin'] = '', e0pab['onload'] = kw0b31, e0pab['onerror'] = ljncf9, e0pab['src'] = migxs, jl9c7f['imgCache'][fc9ujn] = e0pab) : new z256to['create'](migxs, {
                'onload': kw0b31,
                'onerror': ljncf9,
                'onCreate': function (s25mz) {
                    e0pab = s25mz, jl9c7f['imgCache'][fc9ujn] = s25mz;
                }
            });
        }, jdcu;
    }(),
        kep0b = function () {
        function jnuf() {}
        return kebhw(jnuf, 'laya.wx.mini.MiniInput'), jnuf['_createInputElement'] = function () {
            h0apb['_initInput'](h0apb['area'] = nfjcv['createElement']('textarea')), h0apb['_initInput'](h0apb['input'] = nfjcv['createElement']('input')), h0apb['inputContainer'] = nfjcv['createElement']('div'), h0apb['inputContainer']['style']['position'] = 'absolute', h0apb['inputContainer']['style']['zIndex'] = 0x186a0, nfjcv['container']['appendChild'](h0apb['inputContainer']), h0apb['inputContainer']['setPos'] = function (xsd4, cdjuvn) {
                h0apb['inputContainer']['style']['left'] = xsd4 + 'px', h0apb['inputContainer']['style']['top'] = cdjuvn + 'px';
            }, xois4m['stage']['on']('resize', null, jnuf['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (wbkhe0) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), i4oxm['_soundClass'] = sxzio, i4oxm['_musicClass'] = sxzio, window['_videoClass'] = bape0h;
        }, jnuf['_onStageResize'] = function () {
            var $978l = xois4m['stage']['_canvasTransform']['identity']();
            $978l['scale'](nfjcv['width'] / gvi4['canvas']['width'] / d4sgi['getPixelRatio'](), nfjcv['height'] / gvi4['canvas']['height'] / d4sgi['getPixelRatio']());
        }, jnuf['wxinputFocus'] = function (mzs2o5) {
            var isgx4 = h0apb['inputElement']['target'];
            if (isgx4 && !isgx4['editable']) return;
            dsx4g['window']['wx']['offKeyboardConfirm'](), dsx4g['window']['wx']['offKeyboardInput'](), dsx4g['window']['wx']['showKeyboard']({
                'defaultValue': isgx4['text'],
                'maxLength': isgx4['maxChars'],
                'multiple': isgx4['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (z52t63) {},
                'fail': function (ehqa0p) {}
            }), dsx4g['window']['wx']['onKeyboardConfirm'](function (xmsio4) {
                var ix4gsd = xmsio4 ? xmsio4['value'] : '';
                isgx4['text'] = ix4gsd, isgx4['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), dsx4g['window']['wx']['onKeyboardInput'](function (_hparq) {
                var wk136t = _hparq ? _hparq['value'] : '';
                if (!isgx4['multiline']) {
                    if (wk136t['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                isgx4['text'] = wk136t, isgx4['event']('input');
            });
        }, jnuf['inputEnter'] = function () {
            h0apb['inputElement']['target']['focus'] = ![];
        }, jnuf['wxinputblur'] = function () {
            jnuf['hideKeyboard']();
        }, jnuf['hideKeyboard'] = function () {
            dsx4g['window']['wx']['offKeyboardConfirm'](), dsx4g['window']['wx']['offKeyboardInput'](), dsx4g['window']['wx']['hideKeyboard']({
                'success': function (w1t62) {
                    console['log']('隐藏键盘');
                },
                'fail': function (h_arqp) {
                    console['log']('隐藏键盘出错:' + (h_arqp ? h_arqp['errMsg'] : ''));
                }
            });
        }, jnuf;
    }(),
        eahp = function () {
        function phae() {}
        kebhw(phae, 'laya.wx.mini.MiniLoader');
        var b0phk = phae['prototype'];
        return b0phk['load'] = function (kp0b, vid, o5smz, f79cl, w0e1k) {
            o5smz === void 0x0 && (o5smz = !![]), w0e1k === void 0x0 && (w0e1k = ![]);
            var epbha = this;
            epbha['_url'] = kp0b;
            if (kp0b['indexOf']('data:image') === 0x0) epbha['_type'] = vid = 'image';else epbha['_type'] = vid || (vid = epbha['getTypeFromUrl'](kp0b));
            epbha['_cache'] = o5smz, epbha['_data'] = null;
            var ivx4d = 'ascii';
            if (kp0b['indexOf']('.fnt') != -0x1) ivx4d = 'utf8';else vid == 'arraybuffer' && (ivx4d = '');
            ;
            var nf = ujf9n['getFileExtension'](kp0b);
            if (phae['_fileTypeArr']['indexOf'](nf) != -0x1) dsx4g['EnvConfig']['load']['call'](this, kp0b, vid, o5smz, f79cl, w0e1k);else {
                if (!os4ixm['getFileInfo'](kp0b)) {
                    if (kp0b['indexOf']('layaNativeDir/') != -0x1) {
                        if (dsx4g['isZiYu']) {
                            var aeq0p = os4ixm['ziyuFileData'][kp0b];
                            epbha['onLoaded'](aeq0p);
                            return;
                        } else {
                            cosnole['log']('read read'), os4ixm['read'](kp0b, ivx4d, new isxom(phae, phae['onReadNativeCallBack'], [ivx4d, kp0b, vid, o5smz, f79cl, w0e1k, epbha]));
                            return;
                        }
                    }
                    if (jc9nf['rootPath'] == '') var gviu4 = kp0b;else gviu4 = kp0b['split'](jc9nf['rootPath'])[0x0];
                    kp0b['indexOf']('http://') != -0x1 || kp0b['indexOf']('https://') != -0x1 ? dsx4g['EnvConfig']['load']['call'](epbha, kp0b, vid, o5smz, f79cl, w0e1k) : os4ixm['readFile'](gviu4, ivx4d, new isxom(phae, phae['onReadNativeCallBack'], [ivx4d, kp0b, vid, o5smz, f79cl, w0e1k, epbha]), kp0b);
                } else dsx4g['EnvConfig']['load']['call'](this, kp0b, vid, o5smz, f79cl, w0e1k);
            }
        }, b0phk['resMgrLoad'] = function (t2o56z, ebk0hw, uvcfnj, gsm4xi, w1tb3, xdv4gi, i4dxg) {
            uvcfnj === void 0x0 && (uvcfnj = 0x0), gsm4xi === void 0x0 && (gsm4xi = ![]), w1tb3 === void 0x0 && (w1tb3 = ![]), xdv4gi === void 0x0 && (xdv4gi = 0x0), i4dxg === void 0x0 && (i4dxg = 0x3), t2o56z['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', t2o56z), dsx4g['EnvConfig']['resMgrLoad'](t2o56z, (iso4, unjdvg, zm2so) => {
                phae['prototype']['resMgrLoadCallBack'](iso4, unjdvg, zm2so, ebk0hw);
            }, uvcfnj, gsm4xi, w1tb3, xdv4gi, i4dxg);
        }, b0phk['resMgrLoadCallBack'] = function (b10wk3, k03, b0ek1, $7l8) {
            console['log']('buff:::', b10wk3, b0ek1, os4ixm['fileNativeDir'] + '///' + os4ixm['fileListName']), $7l8(b10wk3, k03, b0ek1);
        }, b0phk['clearRes'] = function (mz652o, w0k1e) {
            w0k1e === void 0x0 && (w0k1e = ![]);
            var sizxom = this;
            sizxom['clearRes'](mz652o, w0k1e);
            var kbhpe = os4ixm['getFileInfo'](mz652o);
            if (kbhpe && (mz652o['indexOf']('http://') != -0x1 || mz652o['indexOf']('https://') != -0x1)) {
                var $yl7 = kbhpe['md5'],
                    smxi = os4ixm['getFileNativePath']($yl7);
                os4ixm['remove'](smxi);
            }
        }, phae['onReadNativeCallBack'] = function (ivu, vdjugn, t531, eqah0p, smz2o5, ktw163, m4gxs, c978, vnjdc) {
            eqah0p === void 0x0 && (eqah0p = !![]), ktw163 === void 0x0 && (ktw163 = ![]), c978 === void 0x0 && (c978 = 0x0);
            if (!c978) {
                var k0ewb1;
                if (t531 == 'json' || t531 == 'atlas') k0ewb1 = dsx4g['getJson'](vnjdc['data']);else t531 == 'xml' ? k0ewb1 = ujf9n['parseXMLFromString'](vnjdc['data']) : k0ewb1 = vnjdc['data'];
                m4gxs['onLoaded'](k0ewb1), !dsx4g['isZiYu'] && dsx4g['isPosMsgYu'] && t531 != 'arraybuffer' && wx['postMessage']({
                    'url': vdjugn,
                    'data': k0ewb1,
                    'isLoad': !![]
                });
            } else c978 == 0x1 && dsx4g['EnvConfig']['load']['call'](m4gxs, vdjugn, t531, eqah0p, smz2o5, ktw163);
        }, qr_ahp(phae, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), phae;
    }(),
        os4ixm = function (tk1wb3) {
        function t6321() {
            t6321['__super']['call'](this);
            ;
        }
        return kebhw(t6321, 'laya.wx.mini.MiniFileMgr', tk1wb3), t6321['isLoadFile'] = function (n4dugv) {
            return t6321['_fileTypeArr']['indexOf'](n4dugv) != -0x1 ? !![] : ![];
        }, t6321['getFileInfo'] = function (q_p) {
            var z5omxs = q_p['split']('?')[0x0],
                $y79 = t6321['filesListObj'][z5omxs];
            if ($y79 == null) return null;else return $y79;
            return null;
        }, t6321['onFileUpdate'] = function (o56m2, t3k61) {
            var m4sxgi = o56m2['split']('/'),
                vi4 = m4sxgi[m4sxgi['length'] - 0x1],
                vncujd = t6321['getFileInfo'](t3k61);
            if (vncujd == null) t6321['onSaveFile'](t3k61, vi4);else {
                if (vncujd['readyUrl'] != t3k61) t6321['remove'](vi4, t3k61);
            }
        }, t6321['exits'] = function (ebk0hp, jcfnuv) {
            var dvig4x = t6321['getFileNativePath'](ebk0hp);
            t6321['fs']['getFileInfo']({
                'filePath': dvig4x,
                'success': function (hep_qa) {
                    jcfnuv != null && jcfnuv['runWith']([0x0, hep_qa]);
                },
                'fail': function (gdisx) {
                    jcfnuv != null && jcfnuv['runWith']([0x1, gdisx]);
                }
            });
        }, t6321['read'] = function (d4g, si4gd, vncfju, qpeha) {
            si4gd === void 0x0 && (si4gd = 'ascill'), qpeha === void 0x0 && (qpeha = '');
            var yfl798;
            qpeha != '' ? yfl798 = t6321['getFileNativePath'](d4g) : yfl798 = d4g, t6321['fs']['readFile']({
                'filePath': yfl798,
                'encoding': si4gd,
                'success': function (i4smxg) {
                    vncfju != null && vncfju['runWith']([0x0, i4smxg]);
                },
                'fail': function (xsgi4m) {
                    if (xsgi4m && qpeha != '') t6321['down'](qpeha, si4gd, vncfju, qpeha);else vncfju != null && vncfju['runWith']([0x1]);
                }
            });
        }, t6321['readNativeFile'] = function (kh0bw, rqah_p) {
            t6321['fs']['readFile']({
                'filePath': kh0bw,
                'encoding': '',
                'success': function (apq0e) {
                    rqah_p != null && rqah_p['runWith']([0x0]);
                },
                'fail': function (cjuv) {
                    rqah_p != null && rqah_p['runWith']([0x1]);
                }
            });
        }, t6321['down'] = function (zi, unvjcf, k1b03w, fl987y) {
            unvjcf === void 0x0 && (unvjcf = 'ascill'), fl987y === void 0x0 && (fl987y = '');
            var cn9fj = t6321['getFileNativePath'](fl987y),
                u4vgd = t6321['wxdown']({
                'url': zi,
                'filePath': cn9fj,
                'success': function (mz56o) {
                    if (mz56o['statusCode'] === 0xc8) t6321['readFile'](mz56o['filePath'], unvjcf, k1b03w, fl987y);
                },
                'fail': function (nvugdj) {
                    k1b03w != null && k1b03w['runWith']([0x1, nvugdj]);
                }
            });
            u4vgd['onProgressUpdate'](function (jvcfn) {
                k1b03w != null && k1b03w['runWith']([0x2, jvcfn['progress']]);
            });
        }, t6321['readFile'] = function (t1632w, f89, zo26m, x4dgi) {
            f89 === void 0x0 && (f89 = 'ascill'), x4dgi === void 0x0 && (x4dgi = ''), t6321['fs']['readFile']({
                'filePath': t1632w,
                'encoding': f89,
                'success': function (phaqe) {
                    if (t1632w['indexOf']('http://') != -0x1 || t1632w['indexOf']('https://') != -0x1) t6321['onFileUpdate'](t1632w, x4dgi);
                    zo26m != null && zo26m['runWith']([0x0, phaqe]);
                },
                'fail': function (cfvnj) {
                    if (cfvnj) zo26m != null && zo26m['runWith']([0x1, cfvnj]);
                }
            });
        }, t6321['downImg'] = function (gd4nv, hr_ap, gidx4v) {
            gidx4v === void 0x0 && (gidx4v = '');
            var t12356 = t6321['wxdown']({
                'url': gd4nv,
                'success': function (e01wk) {
                    e01wk['statusCode'] === 0xc8 && t6321['copyFile'](e01wk['tempFilePath'], gidx4v, hr_ap);
                },
                'fail': function (l8fy7) {
                    hr_ap != null && hr_ap['runWith']([0x1, l8fy7]);
                }
            });
        }, t6321['copyFile'] = function (p_, jfucn, wt3621) {
            var y$7l89 = p_['split']('/'),
                ly9$87 = y$7l89[y$7l89['length'] - 0x1],
                yl9$7 = jfucn['split']('?')[0x0],
                gvujdn = t6321['getFileInfo'](jfucn),
                dnvg4u = t6321['getFileNativePath'](ly9$87);
            t6321['fs']['copyFile']({
                'srcPath': p_,
                'destPath': dnvg4u,
                'success': function (ncj) {
                    if (!gvujdn) t6321['onSaveFile'](jfucn, ly9$87), wt3621 != null && wt3621['runWith']([0x0]);else {
                        if (gvujdn['readyUrl'] != jfucn) t6321['remove'](ly9$87, jfucn, wt3621);
                    }
                },
                'fail': function (k1b3w) {
                    wt3621 != null && wt3621['runWith']([0x1, k1b3w]);
                }
            });
        }, t6321['getFileNativePath'] = function (unfvc) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + unfvc;
        }, t6321['remove'] = function (hra_qp, pahq_e, jnfvcu) {
            pahq_e === void 0x0 && (pahq_e = '');
            var sgdxi4 = t6321['getFileInfo'](pahq_e),
                vjucnf = t6321['getFileNativePath'](sgdxi4['md5']);
            xois4m['loader']['clearRes'](sgdxi4['readyUrl']), t6321['fs']['unlink']({
                'filePath': vjucnf,
                'success': function (vi4x) {
                    if (pahq_e != '') t6321['onSaveFile'](pahq_e, hra_qp);
                    jnfvcu != null && jnfvcu['runWith']([0x0]);
                },
                'fail': function (jc7fl9) {}
            });
        }, t6321['onSaveFile'] = function (cndu, dguvn4) {
            var wbtk13 = cndu['split']('?')[0x0];
            t6321['filesListObj'][wbtk13] = {
                'md5': dguvn4,
                'readyUrl': cndu
            }, t6321['fs']['writeFile']({
                'filePath': t6321['fileNativeDir'] + '/' + t6321['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](t6321['filesListObj']),
                'success': function (tz5o26) {
                    console['log']('写入测试测试成功：', tz5o26);
                },
                'fail': function (wbhk0e) {
                    console['log']('写入测试测试失败：', wbhk0e);
                }
            });
        }, t6321['existDir'] = function (kwb10e, f798lc) {
            t6321['fs']['mkdir']({
                'dirPath': kwb10e,
                'success': function (uncj9) {
                    f798lc != null && f798lc['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (ncfjuv) {
                    if (ncfjuv['errMsg']['indexOf']('file already exists') != -0x1) t6321['readSync'](t6321['fileListName'], 'utf8', f798lc);else f798lc != null && f798lc['runWith']([0x1, ncfjuv]);
                }
            });
        }, t6321['readSync'] = function (pehaq0, $97y8, mzsx5o, pqea_) {
            $97y8 === void 0x0 && ($97y8 = 'ascill'), pqea_ === void 0x0 && (pqea_ = '');
            var s5xozm = t6321['getFileNativePath'](pehaq0),
                jfl79;
            try {
                jfl79 = t6321['fs']['readFileSync'](s5xozm), mzsx5o != null && mzsx5o['runWith']([0x0, { 'data': jfl79 }]);
            } catch (heba0) {
                mzsx5o != null && mzsx5o['runWith']([0x1]);
            }
        }, t6321['readCache'] = function () {}, t6321['writeCache'] = function (f9l87c) {
            var y9$l7 = readyUrl['split']('?')[0x0];
            t6321['filesListObj'][y9$l7] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, t6321['fs']['writeFile']({
                'filePath': t6321['fileNativeDir'] + '/' + t6321['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](t6321['filesListObj']),
                'success': function (o25mz6) {},
                'fail': function (lc879f) {}
            });
        }, t6321['setNativeFileDir'] = function (x4sid) {
            t6321['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + x4sid;
        }, t6321['filesListObj'] = {}, t6321['fileNativeDir'] = null, t6321['fileListName'] = 'layaairfiles.txt', t6321['ziyuFileData'] = {}, qr_ahp(t6321, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), t6321;
    }(ujcnd),
        sxzio = function (sidx4g) {
        function dvujcn() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], dvujcn['__super']['call'](this), this['_sound'] = dvujcn['_createSound'](), this['_chanell'] = new sxmio4(this['_sound']);
        }
        kebhw(dvujcn, 'laya.wx.mini.MiniSound', sidx4g);
        var khe0p = dvujcn['prototype'];
        return khe0p['load'] = function (xg4isd) {
            var ncfu9 = this;
            xg4isd = jc9nf['formatURL'](xg4isd), this['url'] = xg4isd;
            if (dvujcn['_audioCache'][xg4isd]) {
                this['event']('complete');
                return;
            }
            function e1k0wb() {
                if (dvujcn['_null'] != undefined) ncfu9['_sound']['onCanplay'](dvujcn['_null']), ncfu9['_sound']['onError'](dvujcn['_null']);else try {
                    ncfu9['_sound']['onCanplay'](null), ncfu9['_sound']['onError'](null), dvujcn['_null'] = null;
                } catch (s5mz) {
                    console['warn']('[wxmini] _clearSound:' + s5mz), ncfu9['_sound']['onCanplay'](kpebh), ncfu9['_sound']['onError'](kpebh), dvujcn['_null'] = kpebh;
                }
            }
            function k3tbw1() {
                wh['loaded'] = !![], wh['event']('complete'), dvujcn['_audioCache'][wh['url']] = wh;
            }
            function nvfjcu(o25t6z) {
                console['error']('errCode=' + o25t6z['errCode'] + '  errMsg=' + o25t6z['errMsg']), wh['event']('error');
            }
            function kpebh() {}
            this['_sound']['onCanplay'](k3tbw1), this['_sound']['onError'](nvfjcu), this['_sound']['src'] = xg4isd;
            var wh = this;
        }, khe0p['play'] = function (x5msz, dvix4) {
            x5msz === void 0x0 && (x5msz = 0x0), dvix4 === void 0x0 && (dvix4 = 0x0);
            var mi4xso, t2315;
            if (this['url'] == i4oxm['_tMusic']) {
                if (!dvujcn['_musicAudio']) dvujcn['_musicAudio'] = this['_sound'];
                mi4xso = dvujcn['_musicAudio'], t2315 = this['_chanell'];
            } else mi4xso = this['_sound'], t2315 = this['_chanell'];
            return mi4xso['src'] = this['url'], mi4xso['startTime'] = 0x0, t2315['isStopped'] && (t2315['url'] = this['url'], t2315['loops'] = dvix4, t2315['startTime'] = x5msz, t2315['play'](), i4oxm['addChannel'](t2315)), t2315;
        }, khe0p['dispose'] = function () {
            var jcnvd = dvujcn['_audioCache'][this['url']];
            jcnvd && (jcnvd['src'] = '', delete dvujcn['_audioCache'][this['url']]);
        }, xzmi(0x0, khe0p, 'duration', function () {
            return this['_sound']['duration'];
        }), dvujcn['_createSound'] = function () {
            dvujcn['_id']++;
            var cl8f7 = dsx4g['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return cl8f7;
        }, dvujcn['_musicAudio'] = null, dvujcn['_id'] = 0x0, dvujcn['_audioCache'] = {}, dvujcn['_null'] = undefined, dvujcn;
    }(ujcnd),
        sxmio4 = function (v4un) {
        function p0ekh(vfjuc) {
            this['_audio'] = null, this['_onEnd'] = null, p0ekh['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = vfjuc, this['_onEnd'] = ujf9n['bind'](this['__onEnd'], this), vfjuc['onEnded'](this['_onEnd']);
        }
        kebhw(p0ekh, 'laya.wx.mini.MiniSoundChannel', v4un);
        var uig4dv = p0ekh['prototype'];
        return uig4dv['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (xois4m['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, uig4dv['__onNull'] = function () {}, uig4dv['play'] = function () {
            this['isStopped'] = ![], i4oxm['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, uig4dv['stop'] = function () {
            this['isStopped'] = !![], i4oxm['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, uig4dv['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, uig4dv['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], i4oxm['addChannel'](this), this['_audio']['play']();
        }, xzmi(0x0, uig4dv, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), xzmi(0x0, uig4dv, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), xzmi(0x0, uig4dv, 'volume', function () {
            return 0x1;
        }, function (nc9jf) {}), p0ekh['_null'] = undefined, p0ekh;
    }(wkeb0),
        bape0h = function () {
        function bhwek() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = dsx4g['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        kebhw(bhwek, 'laya.wx.mini.MiniVideo');
        var hp_eaq = bhwek['prototype'];
        return hp_eaq['on'] = function (e0k1wb, w3261t, so5zx) {
            if (e0k1wb == 'loadedmetadata') this['onPlayFunc'] = so5zx['bind'](w3261t), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else e0k1wb == 'ended' && (this['onEndedFunC'] = so5zx['bind'](w3261t), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, hp_eaq['onTimeUpdateFunc'] = function (ebha0p) {
            this['position'] = ebha0p['position'], this['_duration'] = ebha0p['duration'];
        }, hp_eaq['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, hp_eaq['onended'] = function (h0pab, om52z) {
            this['onEndedFunC'] = om52z['bind'](h0pab), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, hp_eaq['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, hp_eaq['off'] = function (z2536t, vg4x, osim4x) {
            if (z2536t == 'loadedmetadata') this['onPlayFunc'] = osim4x['bind'](vg4x), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else z2536t == 'ended' && (this['onEndedFunC'] = osim4x['bind'](vg4x), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, hp_eaq['load'] = function (qpha_e) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = qpha_e;
        }, hp_eaq['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, hp_eaq['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, hp_eaq['size'] = function (nujf9, jnuvf) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = nujf9, this['videoElement']['height'] = jnuvf;
        }, hp_eaq['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, hp_eaq['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, xzmi(0x0, hp_eaq, 'duration', function () {
            return this['_duration'];
        }), xzmi(0x0, hp_eaq, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (cf97lj) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = cf97lj;
        }), xzmi(0x0, hp_eaq, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), xzmi(0x0, hp_eaq, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), xzmi(0x0, hp_eaq, 'ended', function () {
            return this['videoend'];
        }), xzmi(0x0, hp_eaq, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (l978c) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = l978c;
        }), xzmi(0x0, hp_eaq, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (pqa_eh) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = pqa_eh;
        }), xzmi(0x0, hp_eaq, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (y7l9$8) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = y7l9$8;
        }), xzmi(0x0, hp_eaq, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), xzmi(0x0, hp_eaq, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (qehp) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = qehp;
        }), xzmi(0x0, hp_eaq, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (omxszi) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = omxszi;
        }), xzmi(0x0, hp_eaq, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), xzmi(0x0, hp_eaq, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (i4oms) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = i4oms;
        }), xzmi(0x0, hp_eaq, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (hq_e) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = hq_e;
        }), xzmi(0x0, hp_eaq, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function ($98y) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = $98y;
        }), bhwek;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var iosmx in Laya) {
        var ox5mzs = Laya[iosmx];
        ox5mzs && ox5mzs['__isclass'] && (exports[iosmx] = ox5mzs);
    }
});