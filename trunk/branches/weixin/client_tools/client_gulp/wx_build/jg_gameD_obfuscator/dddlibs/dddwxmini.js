var v = wx.$d;
(function (window, document, fgik) {
    var bzqx0 = fgik['un'],
        n4j_93 = fgik['uns'],
        aqx0z = fgik['static'],
        $81rwp = fgik['class'],
        hjn_4 = fgik['getset'],
        tdfe = fgik['__newvec'],
        abq = laya['utils']['Browser'],
        tkgqfu = laya['events']['Event'],
        a18bxz = laya['events']['EventDispatcher'],
        lypv = laya['resource']['HTMLImage'],
        qfgkz0 = laya['utils']['Handler'],
        mj6ed = laya['display']['Input'],
        mdih = laya['net']['Loader'],
        ba0zg = laya['maths']['Matrix'],
        w7pv = laya['renders']['Render'],
        eidtmu = laya['utils']['RunDriver'],
        fiedu = laya['media']['Sound'],
        j9h_4 = laya['media']['SoundChannel'],
        a0x8b = laya['media']['SoundManager'],
        z1x8b = laya['display']['Stage'],
        uedim6 = laya['net']['URL'],
        kgq = laya['utils']['Utils'],
        qk0gaz = function () {
        function qugkft() {}
        return $81rwp(qugkft, 'laya.wx.mini.MiniAdpter'), qugkft['getJson'] = function (h46jmn) {
            return JSON['parse'](h46jmn);
        }, qugkft['init'] = function (kgza0, pr1$8w) {
            kgza0 === void 0x0 && (kgza0 = ![]), pr1$8w === void 0x0 && (pr1$8w = ![]);
            if (qugkft['_inited']) return;
            qugkft['window'] = window;
            if (qugkft['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            qugkft['_inited'] = !![], qugkft['isZiYu'] = pr1$8w, qugkft['isPosMsgYu'] = kgza0, qugkft['EnvConfig'] = {}, !qugkft['isZiYu'] && (rwv7$['setNativeFileDir']('/layaairGame'), rwv7$['existDir'](rwv7$['fileNativeDir'], qfgkz0['create'](qugkft, qugkft['onMkdirCallBack']))), qugkft['window']['focus'] = function () {}, fgik['getUrlPath'] = function () {}, qugkft['window']['logtime'] = function (n4h9j_) {}, qugkft['window']['alertTimeLog'] = function (dhei6m) {}, qugkft['window']['resetShareInfo'] = function () {}, qugkft['window']['CanvasRenderingContext2D'] = function () {}, qugkft['window']['CanvasRenderingContext2D']['prototype'] = qugkft['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qugkft['window']['document']['body']['appendChild'] = function () {}, qugkft['EnvConfig']['pixelRatioInt'] = 0x0, eidtmu['getPixelRatio'] = qugkft['pixelRatio'], qugkft['_preCreateElement'] = abq['createElement'], abq['createElement'] = qugkft['createElement'], eidtmu['createShaderCondition'] = qugkft['createShaderCondition'], kgq['parseXMLFromString'] = qugkft['parseXMLFromString'], mj6ed['_createInputElement'] = _9n4c['_createInputElement'], qugkft['EnvConfig']['load'] = mdih['prototype']['load'], mdih['prototype']['load'] = kuitgf['prototype']['load'], qugkft['isZiYu'] && kgza0 && wx['onMessage'](function (dei6mh) {
                dei6mh['isLoad'] && (rwv7$['ziyuFileData'][dei6mh['url']] = dei6mh['data']);
            });
        }, qugkft['onMkdirCallBack'] = function (ufkigt, mjd6h) {
            if (!ufkigt) rwv7$['filesListObj'] = JSON['parse'](mjd6h['data']);
        }, qugkft['pixelRatio'] = function () {
            if (!qugkft['EnvConfig']['pixelRatioInt']) try {
                var qzg0kf = wx['getSystemInfoSync']();
                return qugkft['EnvConfig']['pixelRatioInt'] = qzg0kf['pixelRatio'], qzg0kf = qzg0kf, qzg0kf['pixelRatio'];
            } catch (fqzkg0) {}
            return qugkft['EnvConfig']['pixelRatioInt'];
        }, qugkft['createElement'] = function (kguqf) {
            if (kguqf == 'canvas') {
                var iuftde;
                return qugkft['idx'] == 0x1 ? qugkft['isZiYu'] ? (iuftde = sharedCanvas, iuftde['style'] = {}) : iuftde = window['canvas'] : iuftde = window['wx']['createCanvas'](), qugkft['idx']++, iuftde;
            } else {
                if (kguqf == 'textarea' || kguqf == 'input') return qugkft['onCreateInput'](kguqf);else {
                    if (kguqf == 'div') {
                        var o43c = qugkft['_preCreateElement'](kguqf);
                        return o43c['contains'] = function (x81ra) {
                            return null;
                        }, o43c['removeChild'] = function ($7rpvw) {}, o43c;
                    } else return qugkft['_preCreateElement'](kguqf);
                }
            }
        }, qugkft['onCreateInput'] = function (b8a0zx) {
            var futied = qugkft['_preCreateElement'](b8a0zx);
            return futied['focus'] = _9n4c['wxinputFocus'], futied['blur'] = _9n4c['wxinputblur'], futied['style'] = {}, futied['value'] = 0x0, futied['parentElement'] = {}, futied['placeholder'] = {}, futied['type'] = {}, futied['setColor'] = function (tiu) {}, futied['setType'] = function (w1$rx) {}, futied['setFontFace'] = function (p1$wvr) {}, futied['addEventListener'] = function (ab81z) {}, futied['contains'] = function (mnh6j) {
                return null;
            }, futied['removeChild'] = function (mn6jh4) {}, futied;
        }, qugkft['createShaderCondition'] = function (b1r8ax) {
            var _64nh = this,
                g0kzf = function () {
                var qkt0gf = b1r8ax;
                return _64nh[b1r8ax['replace']('this.', '')];
            };
            return g0kzf;
        }, qugkft['EnvConfig'] = null, qugkft['window'] = null, qugkft['_preCreateElement'] = null, qugkft['_inited'] = ![], qugkft['wxRequest'] = null, qugkft['systemInfo'] = null, qugkft['version'] = '0.0.1', qugkft['isZiYu'] = ![], qugkft['isPosMsgYu'] = ![], qugkft['parseXMLFromString'] = function (fgzq) {
            var etiuf, gz0ak;
            fgzq = fgzq['replace'](/>\s+</g, '><');
            try {
                etiuf = new window['Parser']['DOMParser']()['parseFromString'](fgzq, 'text/xml');
            } catch (ga0zkq) {
                throw '需要引入xml解析库文件';
            }
            return etiuf;
        }, qugkft['idx'] = 0x1, qugkft;
    }(),
        b8a = function () {
        function vp$w7y() {}
        $81rwp(vp$w7y, 'laya.wx.mini.MiniImage');
        var $lv7yp = vp$w7y['prototype'];
        return $lv7yp['_loadImage'] = function (fqkg) {
            var c9_35 = this,
                j4hm6n = ![];
            fqkg['indexOf']('layaNativeDir/') == -0x1 && (j4hm6n = !![], fqkg = uedim6['formatURL'](fqkg));
            if (!rwv7$['getFileInfo'](fqkg)) {
                if (fqkg['indexOf']('http://') != -0x1 || fqkg['indexOf']('https://') != -0x1) rwv7$['downImg'](fqkg, new qfgkz0(vp$w7y, vp$w7y['onDownImgCallBack'], [fqkg, c9_35]), fqkg);else vp$w7y['onCreateImage'](fqkg, c9_35, !![]);
            } else vp$w7y['onCreateImage'](fqkg, c9_35, !j4hm6n);
        }, vp$w7y['onDownImgCallBack'] = function (f0tkq, rp8$, aq0bgz) {
            if (!aq0bgz) vp$w7y['onCreateImage'](f0tkq, rp8$);else rp8$['onError'](null);
        }, vp$w7y['onCreateImage'] = function (n3c49_, a0zgqb, rv7wp) {
            rv7wp === void 0x0 && (rv7wp = ![]);
            var $vw7;
            if (!rv7wp) {
                var aqxz0 = rwv7$['getFileInfo'](n3c49_),
                    gkzqa0 = aqxz0['md5'];
                $vw7 = rwv7$['getFileNativePath'](gkzqa0);
            } else $vw7 = n3c49_;
            if (a0zgqb['imgCache'] == null) a0zgqb['imgCache'] = {};
            var e6hj;
            function zx0ba() {
                e6hj['onload'] = null, e6hj['onerror'] = null, delete a0zgqb['imgCache'][n3c49_];
            }
            ;
            var xw1r8 = function () {
                zx0ba(), a0zgqb['onLoaded'](e6hj);
            },
                j6mdeh = function () {
                zx0ba(), a0zgqb['event']('error', 'Load image failed');
            };
            a0zgqb['_type'] == 'nativeimage' ? (e6hj = new abq['window']['Image'](), e6hj['crossOrigin'] = '', e6hj['onload'] = xw1r8, e6hj['onerror'] = j6mdeh, e6hj['src'] = $vw7, a0zgqb['imgCache'][n3c49_] = e6hj) : new lypv['create']($vw7, {
                'onload': xw1r8,
                'onerror': j6mdeh,
                'onCreate': function (gq0tfk) {
                    e6hj = gq0tfk, a0zgqb['imgCache'][n3c49_] = gq0tfk;
                }
            });
        }, vp$w7y;
    }(),
        _9n4c = function () {
        function tudefi() {}
        return $81rwp(tudefi, 'laya.wx.mini.MiniInput'), tudefi['_createInputElement'] = function () {
            mj6ed['_initInput'](mj6ed['area'] = abq['createElement']('textarea')), mj6ed['_initInput'](mj6ed['input'] = abq['createElement']('input')), mj6ed['inputContainer'] = abq['createElement']('div'), mj6ed['inputContainer']['style']['position'] = 'absolute', mj6ed['inputContainer']['style']['zIndex'] = 0x186a0, abq['container']['appendChild'](mj6ed['inputContainer']), mj6ed['inputContainer']['setPos'] = function (zfqgk0, itfukd) {
                mj6ed['inputContainer']['style']['left'] = zfqgk0 + 'px', mj6ed['inputContainer']['style']['top'] = itfukd + 'px';
            }, fgik['stage']['on']('resize', null, tudefi['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (qzxb0a) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), a0x8b['_soundClass'] = fuqgk, a0x8b['_musicClass'] = fuqgk, window['_videoClass'] = ax8r1b;
        }, tudefi['_onStageResize'] = function () {
            var k0qgzf = fgik['stage']['_canvasTransform']['identity']();
            k0qgzf['scale'](abq['width'] / w7pv['canvas']['width'] / eidtmu['getPixelRatio'](), abq['height'] / w7pv['canvas']['height'] / eidtmu['getPixelRatio']());
        }, tudefi['wxinputFocus'] = function (nc43) {
            var b8xra = mj6ed['inputElement']['target'];
            if (b8xra && !b8xra['editable']) return;
            qk0gaz['window']['wx']['offKeyboardConfirm'](), qk0gaz['window']['wx']['offKeyboardInput'](), qk0gaz['window']['wx']['showKeyboard']({
                'defaultValue': b8xra['text'],
                'maxLength': b8xra['maxChars'],
                'multiple': b8xra['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (fetui) {},
                'fail': function (o934) {}
            }), qk0gaz['window']['wx']['onKeyboardConfirm'](function (qab0z) {
                var zgf0q = qab0z ? qab0z['value'] : '';
                b8xra['text'] = zgf0q, b8xra['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), qk0gaz['window']['wx']['onKeyboardInput'](function (dej6m) {
                var uifde = dej6m ? dej6m['value'] : '';
                if (!b8xra['multiline']) {
                    if (uifde['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                b8xra['text'] = uifde, b8xra['event']('input');
            });
        }, tudefi['inputEnter'] = function () {
            mj6ed['inputElement']['target']['focus'] = ![];
        }, tudefi['wxinputblur'] = function () {
            tudefi['hideKeyboard']();
        }, tudefi['hideKeyboard'] = function () {
            qk0gaz['window']['wx']['offKeyboardConfirm'](), qk0gaz['window']['wx']['offKeyboardInput'](), qk0gaz['window']['wx']['hideKeyboard']({
                'success': function (gfktiu) {
                    console['log']('隐藏键盘');
                },
                'fail': function (zqka0) {
                    console['log']('隐藏键盘出错:' + (zqka0 ? zqka0['errMsg'] : ''));
                }
            });
        }, tudefi;
    }(),
        kuitgf = function () {
        function qugtkf() {}
        $81rwp(qugtkf, 'laya.wx.mini.MiniLoader');
        var $p7wyv = qugtkf['prototype'];
        return $p7wyv['load'] = function (tg0qfk, w7v$r, aqbg, mn6h4, co953_) {
            aqbg === void 0x0 && (aqbg = !![]), co953_ === void 0x0 && (co953_ = ![]);
            var ly$v7 = this;
            ly$v7['_url'] = tg0qfk;
            if (tg0qfk['indexOf']('data:image') === 0x0) ly$v7['_type'] = w7v$r = 'image';else ly$v7['_type'] = w7v$r || (w7v$r = ly$v7['getTypeFromUrl'](tg0qfk));
            ly$v7['_cache'] = aqbg, ly$v7['_data'] = null;
            var _n394j = 'ascii';
            if (tg0qfk['indexOf']('.fnt') != -0x1) _n394j = 'utf8';else w7v$r == 'arraybuffer' && (_n394j = '');
            ;
            var kfg0t = kgq['getFileExtension'](tg0qfk);
            if (qugtkf['_fileTypeArr']['indexOf'](kfg0t) != -0x1) qk0gaz['EnvConfig']['load']['call'](this, tg0qfk, w7v$r, aqbg, mn6h4, co953_);else {
                if (!rwv7$['getFileInfo'](tg0qfk)) {
                    if (tg0qfk['indexOf']('layaNativeDir/') != -0x1) {
                        if (qk0gaz['isZiYu']) {
                            var _j4nh9 = rwv7$['ziyuFileData'][tg0qfk];
                            ly$v7['onLoaded'](_j4nh9);
                            return;
                        } else {
                            cosnole['log']('read read'), rwv7$['read'](tg0qfk, _n394j, new qfgkz0(qugtkf, qugtkf['onReadNativeCallBack'], [_n394j, tg0qfk, w7v$r, aqbg, mn6h4, co953_, ly$v7]));
                            return;
                        }
                    }
                    if (uedim6['rootPath'] == '') var $pvrw1 = tg0qfk;else $pvrw1 = tg0qfk['split'](uedim6['rootPath'])[0x0];
                    tg0qfk['indexOf']('http://') != -0x1 || tg0qfk['indexOf']('https://') != -0x1 ? qk0gaz['EnvConfig']['load']['call'](ly$v7, tg0qfk, w7v$r, aqbg, mn6h4, co953_) : rwv7$['readFile']($pvrw1, _n394j, new qfgkz0(qugtkf, qugtkf['onReadNativeCallBack'], [_n394j, tg0qfk, w7v$r, aqbg, mn6h4, co953_, ly$v7]), tg0qfk);
                } else qk0gaz['EnvConfig']['load']['call'](this, tg0qfk, w7v$r, aqbg, mn6h4, co953_);
            }
        }, $p7wyv['resMgrLoad'] = function (e6nmhj, $r8x1w, h6mjne, $7wyp, iktfg, bz0aqg, rbw1x8) {
            h6mjne === void 0x0 && (h6mjne = 0x0), $7wyp === void 0x0 && ($7wyp = ![]), iktfg === void 0x0 && (iktfg = ![]), bz0aqg === void 0x0 && (bz0aqg = 0x0), rbw1x8 === void 0x0 && (rbw1x8 = 0x3), e6nmhj['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', e6nmhj), qk0gaz['EnvConfig']['resMgrLoad'](e6nmhj, (bw1x, iufgtk, $1p8r) => {
                qugtkf['prototype']['resMgrLoadCallBack'](bw1x, iufgtk, $1p8r, $r8x1w);
            }, h6mjne, $7wyp, iktfg, bz0aqg, rbw1x8);
        }, $p7wyv['resMgrLoadCallBack'] = function (kgz0q, kdutfi, vrw1$p, pw1$rv) {
            console['log']('buff:::', kgz0q, vrw1$p, rwv7$['fileNativeDir'] + '///' + rwv7$['fileListName']), pw1$rv(kgz0q, kdutfi, vrw1$p);
        }, $p7wyv['clearRes'] = function (utiemd, rpv$w1) {
            rpv$w1 === void 0x0 && (rpv$w1 = ![]);
            var gikfut = this;
            gikfut['clearRes'](utiemd, rpv$w1);
            var z0kg = rwv7$['getFileInfo'](utiemd);
            if (z0kg && (utiemd['indexOf']('http://') != -0x1 || utiemd['indexOf']('https://') != -0x1)) {
                var hem6di = z0kg['md5'],
                    gfutki = rwv7$['getFileNativePath'](hem6di);
                rwv7$['remove'](gfutki);
            }
        }, qugtkf['onReadNativeCallBack'] = function (dut, iuedft, pyv7$l, pv$rw, za0, xaqbz, f0qtg, rpwv7, w1$r8p) {
            pv$rw === void 0x0 && (pv$rw = !![]), xaqbz === void 0x0 && (xaqbz = ![]), rpwv7 === void 0x0 && (rpwv7 = 0x0);
            if (!rpwv7) {
                var r$1x;
                if (pyv7$l == 'json' || pyv7$l == 'atlas') r$1x = qk0gaz['getJson'](w1$r8p['data']);else pyv7$l == 'xml' ? r$1x = kgq['parseXMLFromString'](w1$r8p['data']) : r$1x = w1$r8p['data'];
                f0qtg['onLoaded'](r$1x), !qk0gaz['isZiYu'] && qk0gaz['isPosMsgYu'] && pyv7$l != 'arraybuffer' && wx['postMessage']({
                    'url': iuedft,
                    'data': r$1x,
                    'isLoad': !![]
                });
            } else rpwv7 == 0x1 && qk0gaz['EnvConfig']['load']['call'](f0qtg, iuedft, pyv7$l, pv$rw, za0, xaqbz);
        }, aqx0z(qugtkf, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), qugtkf;
    }(),
        rwv7$ = function ($81wpr) {
        function ieft() {
            ieft['__super']['call'](this);
            ;
        }
        return $81rwp(ieft, 'laya.wx.mini.MiniFileMgr', $81wpr), ieft['isLoadFile'] = function (xb8z1a) {
            return ieft['_fileTypeArr']['indexOf'](xb8z1a) != -0x1 ? !![] : ![];
        }, ieft['getFileInfo'] = function (o39c25) {
            var ikgf = o39c25['split']('?')[0x0],
                c_59o3 = ieft['filesListObj'][ikgf];
            if (c_59o3 == null) return null;else return c_59o3;
            return null;
        }, ieft['onFileUpdate'] = function (uedift, $w7vpy) {
            var vyw7$ = uedift['split']('/'),
                kugq = vyw7$[vyw7$['length'] - 0x1],
                idhm6 = ieft['getFileInfo']($w7vpy);
            if (idhm6 == null) ieft['onSaveFile']($w7vpy, kugq);else {
                if (idhm6['readyUrl'] != $w7vpy) ieft['remove'](kugq, $w7vpy);
            }
        }, ieft['exits'] = function (b1wr8, j34_9) {
            var oc5923 = ieft['getFileNativePath'](b1wr8);
            ieft['fs']['getFileInfo']({
                'filePath': oc5923,
                'success': function (gab) {
                    j34_9 != null && j34_9['runWith']([0x0, gab]);
                },
                'fail': function (gqab) {
                    j34_9 != null && j34_9['runWith']([0x1, gqab]);
                }
            });
        }, ieft['read'] = function (xbw81r, pyv$l7, kq0gfz, mnh) {
            pyv$l7 === void 0x0 && (pyv$l7 = 'ascill'), mnh === void 0x0 && (mnh = '');
            var vw7py$;
            mnh != '' ? vw7py$ = ieft['getFileNativePath'](xbw81r) : vw7py$ = xbw81r, ieft['fs']['readFile']({
                'filePath': vw7py$,
                'encoding': pyv$l7,
                'success': function (zabgq0) {
                    kq0gfz != null && kq0gfz['runWith']([0x0, zabgq0]);
                },
                'fail': function (jnehm) {
                    if (jnehm && mnh != '') ieft['down'](mnh, pyv$l7, kq0gfz, mnh);else kq0gfz != null && kq0gfz['runWith']([0x1]);
                }
            });
        }, ieft['readNativeFile'] = function (p7wv$, gkqz0) {
            ieft['fs']['readFile']({
                'filePath': p7wv$,
                'encoding': '',
                'success': function (fkgi) {
                    gkqz0 != null && gkqz0['runWith']([0x0]);
                },
                'fail': function (ejhmd) {
                    gkqz0 != null && gkqz0['runWith']([0x1]);
                }
            });
        }, ieft['down'] = function (h_jn9, r$7vpw, n_h4j9, fuktgq) {
            r$7vpw === void 0x0 && (r$7vpw = 'ascill'), fuktgq === void 0x0 && (fuktgq = '');
            var diemt = ieft['getFileNativePath'](fuktgq),
                a8xb1 = ieft['wxdown']({
                'url': h_jn9,
                'filePath': diemt,
                'success': function (r18b) {
                    if (r18b['statusCode'] === 0xc8) ieft['readFile'](r18b['filePath'], r$7vpw, n_h4j9, fuktgq);
                },
                'fail': function (pwr$18) {
                    n_h4j9 != null && n_h4j9['runWith']([0x1, pwr$18]);
                }
            });
            a8xb1['onProgressUpdate'](function (wp7rv$) {
                n_h4j9 != null && n_h4j9['runWith']([0x2, wp7rv$['progress']]);
            });
        }, ieft['readFile'] = function (gazk0q, j4_n3, bxaq0, j_hn6) {
            j4_n3 === void 0x0 && (j4_n3 = 'ascill'), j_hn6 === void 0x0 && (j_hn6 = ''), ieft['fs']['readFile']({
                'filePath': gazk0q,
                'encoding': j4_n3,
                'success': function (kgqtf) {
                    if (gazk0q['indexOf']('http://') != -0x1 || gazk0q['indexOf']('https://') != -0x1) ieft['onFileUpdate'](gazk0q, j_hn6);
                    bxaq0 != null && bxaq0['runWith']([0x0, kgqtf]);
                },
                'fail': function (abq0zx) {
                    if (abq0zx) bxaq0 != null && bxaq0['runWith']([0x1, abq0zx]);
                }
            });
        }, ieft['downImg'] = function (oc3529, xa0bq, ugfqtk) {
            ugfqtk === void 0x0 && (ugfqtk = '');
            var ftdi = ieft['wxdown']({
                'url': oc3529,
                'success': function (tdmiue) {
                    tdmiue['statusCode'] === 0xc8 && ieft['copyFile'](tdmiue['tempFilePath'], ugfqtk, xa0bq);
                },
                'fail': function (n94h) {
                    xa0bq != null && xa0bq['runWith']([0x1, n94h]);
                }
            });
        }, ieft['copyFile'] = function (ikfut, vyl7, br8x) {
            var oc293 = ikfut['split']('/'),
                rx8a1b = oc293[oc293['length'] - 0x1],
                gkq0za = vyl7['split']('?')[0x0],
                $7lpy = ieft['getFileInfo'](vyl7),
                yv7pw = ieft['getFileNativePath'](rx8a1b);
            ieft['fs']['copyFile']({
                'srcPath': ikfut,
                'destPath': yv7pw,
                'success': function (fzgq0) {
                    if (!$7lpy) ieft['onSaveFile'](vyl7, rx8a1b), br8x != null && br8x['runWith']([0x0]);else {
                        if ($7lpy['readyUrl'] != vyl7) ieft['remove'](rx8a1b, vyl7, br8x);
                    }
                },
                'fail': function (w$rpv7) {
                    br8x != null && br8x['runWith']([0x1, w$rpv7]);
                }
            });
        }, ieft['getFileNativePath'] = function (fkzg) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + fkzg;
        }, ieft['remove'] = function (b18rx, wr$1x, c349_n) {
            wr$1x === void 0x0 && (wr$1x = '');
            var hj6m = ieft['getFileInfo'](wr$1x),
                m6dejh = ieft['getFileNativePath'](hj6m['md5']);
            fgik['loader']['clearRes'](hj6m['readyUrl']), ieft['fs']['unlink']({
                'filePath': m6dejh,
                'success': function (h64j_) {
                    if (wr$1x != '') ieft['onSaveFile'](wr$1x, b18rx);
                    c349_n != null && c349_n['runWith']([0x0]);
                },
                'fail': function (x8r1b) {}
            });
        }, ieft['onSaveFile'] = function (a0qgb, co5_93) {
            var $vyw7p = a0qgb['split']('?')[0x0];
            ieft['filesListObj'][$vyw7p] = {
                'md5': co5_93,
                'readyUrl': a0qgb
            }, ieft['fs']['writeFile']({
                'filePath': ieft['fileNativeDir'] + '/' + ieft['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ieft['filesListObj']),
                'success': function (m6diue) {
                    console['log']('写入测试测试成功：', m6diue);
                },
                'fail': function (o29c3) {
                    console['log']('写入测试测试失败：', o29c3);
                }
            });
        }, ieft['existDir'] = function (xza18, tkdfi) {
            ieft['fs']['mkdir']({
                'dirPath': xza18,
                'success': function (qb0zag) {
                    tkdfi != null && tkdfi['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (o59c3_) {
                    if (o59c3_['errMsg']['indexOf']('file already exists') != -0x1) ieft['readSync'](ieft['fileListName'], 'utf8', tkdfi);else tkdfi != null && tkdfi['runWith']([0x1, o59c3_]);
                }
            });
        }, ieft['readSync'] = function (imdue, xr$81w, ktfiu, jnm6h4) {
            xr$81w === void 0x0 && (xr$81w = 'ascill'), jnm6h4 === void 0x0 && (jnm6h4 = '');
            var j49n_ = ieft['getFileNativePath'](imdue),
                pl7y$v;
            try {
                pl7y$v = ieft['fs']['readFileSync'](j49n_), ktfiu != null && ktfiu['runWith']([0x0, { 'data': pl7y$v }]);
            } catch (z0kaq) {
                ktfiu != null && ktfiu['runWith']([0x1]);
            }
        }, ieft['readCache'] = function () {}, ieft['writeCache'] = function (zk0gqa) {
            var zx81ab = readyUrl['split']('?')[0x0];
            ieft['filesListObj'][zx81ab] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, ieft['fs']['writeFile']({
                'filePath': ieft['fileNativeDir'] + '/' + ieft['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ieft['filesListObj']),
                'success': function (c_49n) {},
                'fail': function (o_4) {}
            });
        }, ieft['setNativeFileDir'] = function ($yv) {
            ieft['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $yv;
        }, ieft['filesListObj'] = {}, ieft['fileNativeDir'] = null, ieft['fileListName'] = 'layaairfiles.txt', ieft['ziyuFileData'] = {}, aqx0z(ieft, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), ieft;
    }(a18bxz),
        fuqgk = function (zabqg) {
        function w$yp7() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], w$yp7['__super']['call'](this), this['_sound'] = w$yp7['_createSound'](), this['_chanell'] = new xw8(this['_sound']);
        }
        $81rwp(w$yp7, 'laya.wx.mini.MiniSound', zabqg);
        var p$7w = w$yp7['prototype'];
        return p$7w['load'] = function (imu6de) {
            var k0fqt = this;
            imu6de = uedim6['formatURL'](imu6de), this['url'] = imu6de;
            if (w$yp7['_audioCache'][imu6de]) {
                this['event']('complete');
                return;
            }
            function c93o_4() {
                if (w$yp7['_null'] != undefined) k0fqt['_sound']['onCanplay'](w$yp7['_null']), k0fqt['_sound']['onError'](w$yp7['_null']);else try {
                    k0fqt['_sound']['onCanplay'](null), k0fqt['_sound']['onError'](null), w$yp7['_null'] = null;
                } catch (temi) {
                    console['warn']('[wxmini] _clearSound:' + temi), k0fqt['_sound']['onCanplay'](kqa0zg), k0fqt['_sound']['onError'](kqa0zg), w$yp7['_null'] = kqa0zg;
                }
            }
            function tk0g() {
                tfik['loaded'] = !![], tfik['event']('complete'), w$yp7['_audioCache'][tfik['url']] = tfik;
            }
            function _j93n4(fugtki) {
                console['error']('errCode=' + fugtki['errCode'] + '  errMsg=' + fugtki['errMsg']), tfik['event']('error');
            }
            function kqa0zg() {}
            this['_sound']['onCanplay'](tk0g), this['_sound']['onError'](_j93n4), this['_sound']['src'] = imu6de;
            var tfik = this;
        }, p$7w['play'] = function (k0azq, ukiftg) {
            k0azq === void 0x0 && (k0azq = 0x0), ukiftg === void 0x0 && (ukiftg = 0x0);
            var u6dei, kzga0q;
            if (this['url'] == a0x8b['_tMusic']) {
                if (!w$yp7['_musicAudio']) w$yp7['_musicAudio'] = this['_sound'];
                u6dei = w$yp7['_musicAudio'], kzga0q = this['_chanell'];
            } else u6dei = this['_sound'], kzga0q = this['_chanell'];
            return u6dei['src'] = this['url'], u6dei['startTime'] = 0x0, kzga0q['isStopped'] && (kzga0q['url'] = this['url'], kzga0q['loops'] = ukiftg, kzga0q['startTime'] = k0azq, kzga0q['play'](), a0x8b['addChannel'](kzga0q)), kzga0q;
        }, p$7w['dispose'] = function () {
            var _6hnj = w$yp7['_audioCache'][this['url']];
            _6hnj && (_6hnj['src'] = '', delete w$yp7['_audioCache'][this['url']]);
        }, hjn_4(0x0, p$7w, 'duration', function () {
            return this['_sound']['duration'];
        }), w$yp7['_createSound'] = function () {
            w$yp7['_id']++;
            var g0kqza = qk0gaz['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return g0kqza;
        }, w$yp7['_musicAudio'] = null, w$yp7['_id'] = 0x0, w$yp7['_audioCache'] = {}, w$yp7['_null'] = undefined, w$yp7;
    }(a18bxz),
        xw8 = function ($y7lpv) {
        function uefdti(w$p81r) {
            this['_audio'] = null, this['_onEnd'] = null, uefdti['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = w$p81r, this['_onEnd'] = kgq['bind'](this['__onEnd'], this), w$p81r['onEnded'](this['_onEnd']);
        }
        $81rwp(uefdti, 'laya.wx.mini.MiniSoundChannel', $y7lpv);
        var w$7 = uefdti['prototype'];
        return w$7['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (fgik['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, w$7['__onNull'] = function () {}, w$7['play'] = function () {
            this['isStopped'] = ![], a0x8b['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, w$7['stop'] = function () {
            this['isStopped'] = !![], a0x8b['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, w$7['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, w$7['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], a0x8b['addChannel'](this), this['_audio']['play']();
        }, hjn_4(0x0, w$7, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), hjn_4(0x0, w$7, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), hjn_4(0x0, w$7, 'volume', function () {
            return 0x1;
        }, function (hen6jm) {}), uefdti['_null'] = undefined, uefdti;
    }(j9h_4),
        ax8r1b = function () {
        function mhjed6() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = qk0gaz['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        $81rwp(mhjed6, 'laya.wx.mini.MiniVideo');
        var zkg0fq = mhjed6['prototype'];
        return zkg0fq['on'] = function (jm4h, fuqkgt, wp$v7) {
            if (jm4h == 'loadedmetadata') this['onPlayFunc'] = wp$v7['bind'](fuqkgt), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else jm4h == 'ended' && (this['onEndedFunC'] = wp$v7['bind'](fuqkgt), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, zkg0fq['onTimeUpdateFunc'] = function (ufkgqt) {
            this['position'] = ufkgqt['position'], this['_duration'] = ufkgqt['duration'];
        }, zkg0fq['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, zkg0fq['onended'] = function (n93c_, id6emu) {
            this['onEndedFunC'] = id6emu['bind'](n93c_), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, zkg0fq['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, zkg0fq['off'] = function (e6dmiu, jn6emh, medu6i) {
            if (e6dmiu == 'loadedmetadata') this['onPlayFunc'] = medu6i['bind'](jn6emh), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else e6dmiu == 'ended' && (this['onEndedFunC'] = medu6i['bind'](jn6emh), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, zkg0fq['load'] = function (v7pr$) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = v7pr$;
        }, zkg0fq['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, zkg0fq['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, zkg0fq['size'] = function (xwr, hj46mn) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = xwr, this['videoElement']['height'] = hj46mn;
        }, zkg0fq['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, zkg0fq['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, hjn_4(0x0, zkg0fq, 'duration', function () {
            return this['_duration'];
        }), hjn_4(0x0, zkg0fq, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (t0gqfk) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = t0gqfk;
        }), hjn_4(0x0, zkg0fq, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), hjn_4(0x0, zkg0fq, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), hjn_4(0x0, zkg0fq, 'ended', function () {
            return this['videoend'];
        }), hjn_4(0x0, zkg0fq, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (gfktqu) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = gfktqu;
        }), hjn_4(0x0, zkg0fq, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (hj9) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = hj9;
        }), hjn_4(0x0, zkg0fq, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (w8r1p$) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = w8r1p$;
        }), hjn_4(0x0, zkg0fq, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), hjn_4(0x0, zkg0fq, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (xzabq) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = xzabq;
        }), hjn_4(0x0, zkg0fq, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (b0agzq) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = b0agzq;
        }), hjn_4(0x0, zkg0fq, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), hjn_4(0x0, zkg0fq, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (vprw1) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = vprw1;
        }), hjn_4(0x0, zkg0fq, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (gb0aq) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = gb0aq;
        }), hjn_4(0x0, zkg0fq, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (c493) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = c493;
        }), mhjed6;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var fgq0z in Laya) {
        var pv$wr = Laya[fgq0z];
        pv$wr && pv$wr['__isclass'] && (exports[fgq0z] = pv$wr);
    }
});