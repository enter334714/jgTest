var f = wx.$B;
(function (window, document, _9xk) {
    var xt504 = _9xk['un'],
        t_k50x = _9xk['uns'],
        su6bd = _9xk['static'],
        nj1om$ = _9xk['class'],
        fsda = _9xk['getset'],
        askd_9 = _9xk['__newvec'],
        _ad9sk = laya['utils']['Browser'],
        pqyh = laya['events']['Event'],
        r84w5 = laya['events']['EventDispatcher'],
        h6quf = laya['resource']['HTMLImage'],
        zuqhe = laya['utils']['Handler'],
        ak_0x9 = laya['display']['Input'],
        $mjpn = laya['net']['Loader'],
        npmzqy = laya['maths']['Matrix'],
        k_sx9a = laya['renders']['Render'],
        h6ubd = laya['utils']['RunDriver'],
        sdakb = laya['media']['Sound'],
        ktx90 = laya['media']['SoundChannel'],
        _akxs9 = laya['media']['SoundManager'],
        ehpz = laya['display']['Stage'],
        zqep = laya['net']['URL'],
        a9k_x0 = laya['utils']['Utils'],
        k9sabd = function () {
        function _d9sak() {}
        return nj1om$(_d9sak, 'laya.wx.mini.MiniAdpter'), _d9sak['getJson'] = function (x5rt0) {
            return JSON['parse'](x5rt0);
        }, _d9sak['init'] = function (w5r47, uf6dbh) {
            w5r47 === void 0x0 && (w5r47 = ![]), uf6dbh === void 0x0 && (uf6dbh = ![]);
            if (_d9sak['_inited']) return;
            _d9sak['window'] = window;
            if (_d9sak['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            _d9sak['_inited'] = !![], _d9sak['isZiYu'] = uf6dbh, _d9sak['isPosMsgYu'] = w5r47, _d9sak['EnvConfig'] = {}, !_d9sak['isZiYu'] && (kxt5_0['setNativeFileDir']('/layaairGame'), kxt5_0['existDir'](kxt5_0['fileNativeDir'], zuqhe['create'](_d9sak, _d9sak['onMkdirCallBack']))), _d9sak['window']['focus'] = function () {}, _9xk['getUrlPath'] = function () {}, _d9sak['window']['logtime'] = function (pznyq) {}, _d9sak['window']['alertTimeLog'] = function (mo1j$n) {}, _d9sak['window']['resetShareInfo'] = function () {}, _d9sak['window']['CanvasRenderingContext2D'] = function () {}, _d9sak['window']['CanvasRenderingContext2D']['prototype'] = _d9sak['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], _d9sak['window']['document']['body']['appendChild'] = function () {}, _d9sak['EnvConfig']['pixelRatioInt'] = 0x0, h6ubd['getPixelRatio'] = _d9sak['pixelRatio'], _d9sak['_preCreateElement'] = _ad9sk['createElement'], _ad9sk['createElement'] = _d9sak['createElement'], h6ubd['createShaderCondition'] = _d9sak['createShaderCondition'], a9k_x0['parseXMLFromString'] = _d9sak['parseXMLFromString'], ak_0x9['_createInputElement'] = u6dbh['_createInputElement'], _d9sak['EnvConfig']['load'] = $mjpn['prototype']['load'], $mjpn['prototype']['load'] = givl32['prototype']['load'], _d9sak['isZiYu'] && w5r47 && wx['onMessage'](function (jlo2$) {
                jlo2$['isLoad'] && (kxt5_0['ziyuFileData'][jlo2$['url']] = jlo2$['data']);
            });
        }, _d9sak['onMkdirCallBack'] = function (hquy, nezp) {
            if (!hquy) kxt5_0['filesListObj'] = JSON['parse'](nezp['data']);
        }, _d9sak['pixelRatio'] = function () {
            if (!_d9sak['EnvConfig']['pixelRatioInt']) try {
                var bd9afs = wx['getSystemInfoSync']();
                return _d9sak['EnvConfig']['pixelRatioInt'] = bd9afs['pixelRatio'], bd9afs = bd9afs, bd9afs['pixelRatio'];
            } catch (budh) {}
            return _d9sak['EnvConfig']['pixelRatioInt'];
        }, _d9sak['createElement'] = function (uhd6fb) {
            if (uhd6fb == 'canvas') {
                var ye6uh;
                return _d9sak['idx'] == 0x1 ? _d9sak['isZiYu'] ? (ye6uh = sharedCanvas, ye6uh['style'] = {}) : ye6uh = window['canvas'] : ye6uh = window['wx']['createCanvas'](), _d9sak['idx']++, ye6uh;
            } else {
                if (uhd6fb == 'textarea' || uhd6fb == 'input') return _d9sak['onCreateInput'](uhd6fb);else {
                    if (uhd6fb == 'div') {
                        var zypnqe = _d9sak['_preCreateElement'](uhd6fb);
                        return zypnqe['contains'] = function (fuh6eq) {
                            return null;
                        }, zypnqe['removeChild'] = function (l3vo2g) {}, zypnqe;
                    } else return _d9sak['_preCreateElement'](uhd6fb);
                }
            }
        }, _d9sak['onCreateInput'] = function (l2og$3) {
            var df9a = _d9sak['_preCreateElement'](l2og$3);
            return df9a['focus'] = u6dbh['wxinputFocus'], df9a['blur'] = u6dbh['wxinputblur'], df9a['style'] = {}, df9a['value'] = 0x0, df9a['parentElement'] = {}, df9a['placeholder'] = {}, df9a['type'] = {}, df9a['setColor'] = function (vo2g3) {}, df9a['setType'] = function (pnjm) {}, df9a['setFontFace'] = function (f6uehb) {}, df9a['addEventListener'] = function ($1mnp) {}, df9a['contains'] = function (h6yequ) {
                return null;
            }, df9a['removeChild'] = function (gl2$3) {}, df9a;
        }, _d9sak['createShaderCondition'] = function (euhzq) {
            var epqyn = this,
                k9_t0 = function () {
                var f9dba = euhzq;
                return epqyn[euhzq['replace']('this.', '')];
            };
            return k9_t0;
        }, _d9sak['EnvConfig'] = null, _d9sak['window'] = null, _d9sak['_preCreateElement'] = null, _d9sak['_inited'] = ![], _d9sak['wxRequest'] = null, _d9sak['systemInfo'] = null, _d9sak['version'] = '0.0.1', _d9sak['isZiYu'] = ![], _d9sak['isPosMsgYu'] = ![], _d9sak['parseXMLFromString'] = function (tx054) {
            var ubfdh6, ojl$m;
            tx054 = tx054['replace'](/>\s+</g, '><');
            try {
                ubfdh6 = new window['Parser']['DOMParser']()['parseFromString'](tx054, 'text/xml');
            } catch (mnyqpz) {
                throw '需要引入xml解析库文件';
            }
            return ubfdh6;
        }, _d9sak['idx'] = 0x1, _d9sak;
    }(),
        tr45w0 = function () {
        function zeqhp() {}
        nj1om$(zeqhp, 'laya.wx.mini.MiniImage');
        var $om1jl = zeqhp['prototype'];
        return $om1jl['_loadImage'] = function (t54_x0) {
            var qmzpyn = this,
                uefb = ![];
            t54_x0['indexOf']('layaNativeDir/') == -0x1 && (uefb = !![], t54_x0 = zqep['formatURL'](t54_x0));
            if (!kxt5_0['getFileInfo'](t54_x0)) {
                if (t54_x0['indexOf']('http://') != -0x1 || t54_x0['indexOf']('https://') != -0x1) kxt5_0['downImg'](t54_x0, new zuqhe(zeqhp, zeqhp['onDownImgCallBack'], [t54_x0, qmzpyn]), t54_x0);else zeqhp['onCreateImage'](t54_x0, qmzpyn, !![]);
            } else zeqhp['onCreateImage'](t54_x0, qmzpyn, !uefb);
        }, zeqhp['onDownImgCallBack'] = function (fbdsa6, uhe6q, glov3) {
            if (!glov3) zeqhp['onCreateImage'](fbdsa6, uhe6q);else uhe6q['onError'](null);
        }, zeqhp['onCreateImage'] = function (fh6dub, kt_x05, sd6u) {
            sd6u === void 0x0 && (sd6u = ![]);
            var gl32;
            if (!sd6u) {
                var fbsda = kxt5_0['getFileInfo'](fh6dub),
                    fhud6b = fbsda['md5'];
                gl32 = kxt5_0['getFileNativePath'](fhud6b);
            } else gl32 = fh6dub;
            if (kt_x05['imgCache'] == null) kt_x05['imgCache'] = {};
            var t5w04r;
            function mnzp1j() {
                t5w04r['onload'] = null, t5w04r['onerror'] = null, delete kt_x05['imgCache'][fh6dub];
            }
            ;
            var nezqpy = function () {
                mnzp1j(), kt_x05['onLoaded'](t5w04r);
            },
                j$o1l = function () {
                mnzp1j(), kt_x05['event']('error', 'Load image failed');
            };
            kt_x05['_type'] == 'nativeimage' ? (t5w04r = new _ad9sk['window']['Image'](), t5w04r['crossOrigin'] = '', t5w04r['onload'] = nezqpy, t5w04r['onerror'] = j$o1l, t5w04r['src'] = gl32, kt_x05['imgCache'][fh6dub] = t5w04r) : new h6quf['create'](gl32, {
                'onload': nezqpy,
                'onerror': j$o1l,
                'onCreate': function (j2l$o1) {
                    t5w04r = j2l$o1, kt_x05['imgCache'][fh6dub] = j2l$o1;
                }
            });
        }, zeqhp;
    }(),
        u6dbh = function () {
        function h6uqf() {}
        return nj1om$(h6uqf, 'laya.wx.mini.MiniInput'), h6uqf['_createInputElement'] = function () {
            ak_0x9['_initInput'](ak_0x9['area'] = _ad9sk['createElement']('textarea')), ak_0x9['_initInput'](ak_0x9['input'] = _ad9sk['createElement']('input')), ak_0x9['inputContainer'] = _ad9sk['createElement']('div'), ak_0x9['inputContainer']['style']['position'] = 'absolute', ak_0x9['inputContainer']['style']['zIndex'] = 0x186a0, _ad9sk['container']['appendChild'](ak_0x9['inputContainer']), ak_0x9['inputContainer']['setPos'] = function (omn1$, t5xr40) {
                ak_0x9['inputContainer']['style']['left'] = omn1$ + 'px', ak_0x9['inputContainer']['style']['top'] = t5xr40 + 'px';
            }, _9xk['stage']['on']('resize', null, h6uqf['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (uhe6qf) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), _akxs9['_soundClass'] = uqy, _akxs9['_musicClass'] = uqy, window['_videoClass'] = pzqeny;
        }, h6uqf['_onStageResize'] = function () {
            var yzmpjn = _9xk['stage']['_canvasTransform']['identity']();
            yzmpjn['scale'](_ad9sk['width'] / k_sx9a['canvas']['width'] / h6ubd['getPixelRatio'](), _ad9sk['height'] / k_sx9a['canvas']['height'] / h6ubd['getPixelRatio']());
        }, h6uqf['wxinputFocus'] = function (a_9k0x) {
            var ktx09_ = ak_0x9['inputElement']['target'];
            if (ktx09_ && !ktx09_['editable']) return;
            k9sabd['window']['wx']['offKeyboardConfirm'](), k9sabd['window']['wx']['offKeyboardInput'](), k9sabd['window']['wx']['showKeyboard']({
                'defaultValue': ktx09_['text'],
                'maxLength': ktx09_['maxChars'],
                'multiple': ktx09_['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (qnz) {},
                'fail': function (mp1$jn) {}
            }), k9sabd['window']['wx']['onKeyboardConfirm'](function (jzm) {
                var zyeuqh = jzm ? jzm['value'] : '';
                ktx09_['text'] = zyeuqh, ktx09_['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), k9sabd['window']['wx']['onKeyboardInput'](function (w540r) {
                var _kdsa = w540r ? w540r['value'] : '';
                if (!ktx09_['multiline']) {
                    if (_kdsa['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                ktx09_['text'] = _kdsa, ktx09_['event']('input');
            });
        }, h6uqf['inputEnter'] = function () {
            ak_0x9['inputElement']['target']['focus'] = ![];
        }, h6uqf['wxinputblur'] = function () {
            h6uqf['hideKeyboard']();
        }, h6uqf['hideKeyboard'] = function () {
            k9sabd['window']['wx']['offKeyboardConfirm'](), k9sabd['window']['wx']['offKeyboardInput'](), k9sabd['window']['wx']['hideKeyboard']({
                'success': function (s9ab) {
                    console['log']('隐藏键盘');
                },
                'fail': function (f6uh) {
                    console['log']('隐藏键盘出错:' + (f6uh ? f6uh['errMsg'] : ''));
                }
            });
        }, h6uqf;
    }(),
        givl32 = function () {
        function $m() {}
        nj1om$($m, 'laya.wx.mini.MiniLoader');
        var uye6hq = $m['prototype'];
        return uye6hq['load'] = function (xrt04, sbfu6, sk9ab, h6qyeu, a_k09) {
            sk9ab === void 0x0 && (sk9ab = !![]), a_k09 === void 0x0 && (a_k09 = ![]);
            var mnoj1 = this;
            mnoj1['_url'] = xrt04;
            if (xrt04['indexOf']('data:image') === 0x0) mnoj1['_type'] = sbfu6 = 'image';else mnoj1['_type'] = sbfu6 || (sbfu6 = mnoj1['getTypeFromUrl'](xrt04));
            mnoj1['_cache'] = sk9ab, mnoj1['_data'] = null;
            var ab9sdk = 'ascii';
            if (xrt04['indexOf']('.fnt') != -0x1) ab9sdk = 'utf8';else sbfu6 == 'arraybuffer' && (ab9sdk = '');
            ;
            var bsud6 = a9k_x0['getFileExtension'](xrt04);
            if ($m['_fileTypeArr']['indexOf'](bsud6) != -0x1) k9sabd['EnvConfig']['load']['call'](this, xrt04, sbfu6, sk9ab, h6qyeu, a_k09);else {
                if (!kxt5_0['getFileInfo'](xrt04)) {
                    if (xrt04['indexOf']('layaNativeDir/') != -0x1) {
                        if (k9sabd['isZiYu']) {
                            var xa09_k = kxt5_0['ziyuFileData'][xrt04];
                            mnoj1['onLoaded'](xa09_k);
                            return;
                        } else {
                            cosnole['log']('read read'), kxt5_0['read'](xrt04, ab9sdk, new zuqhe($m, $m['onReadNativeCallBack'], [ab9sdk, xrt04, sbfu6, sk9ab, h6qyeu, a_k09, mnoj1]));
                            return;
                        }
                    }
                    if (zqep['rootPath'] == '') var qhzpe = xrt04;else qhzpe = xrt04['split'](zqep['rootPath'])[0x0];
                    xrt04['indexOf']('http://') != -0x1 || xrt04['indexOf']('https://') != -0x1 ? k9sabd['EnvConfig']['load']['call'](mnoj1, xrt04, sbfu6, sk9ab, h6qyeu, a_k09) : kxt5_0['readFile'](qhzpe, ab9sdk, new zuqhe($m, $m['onReadNativeCallBack'], [ab9sdk, xrt04, sbfu6, sk9ab, h6qyeu, a_k09, mnoj1]), xrt04);
                } else k9sabd['EnvConfig']['load']['call'](this, xrt04, sbfu6, sk9ab, h6qyeu, a_k09);
            }
        }, uye6hq['resMgrLoad'] = function (hpqzy, kx0_9t, kas9bd, g$23, og32l, mqnzp, eynpzq) {
            kas9bd === void 0x0 && (kas9bd = 0x0), g$23 === void 0x0 && (g$23 = ![]), og32l === void 0x0 && (og32l = ![]), mqnzp === void 0x0 && (mqnzp = 0x0), eynpzq === void 0x0 && (eynpzq = 0x3), hpqzy['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', hpqzy), k9sabd['EnvConfig']['resMgrLoad'](hpqzy, (gl2v3i, zpyjmn, k0xt9_) => {
                $m['prototype']['resMgrLoadCallBack'](gl2v3i, zpyjmn, k0xt9_, kx0_9t);
            }, kas9bd, g$23, og32l, mqnzp, eynpzq);
        }, uye6hq['resMgrLoadCallBack'] = function (enqypz, vg32lo, _0k9xa, l3ovg2) {
            console['log']('buff:::', enqypz, _0k9xa, kxt5_0['fileNativeDir'] + '///' + kxt5_0['fileListName']), l3ovg2(enqypz, vg32lo, _0k9xa);
        }, uye6hq['clearRes'] = function (xa9ks_, s6fdu) {
            s6fdu === void 0x0 && (s6fdu = ![]);
            var tk09_x = this;
            tk09_x['clearRes'](xa9ks_, s6fdu);
            var k9da = kxt5_0['getFileInfo'](xa9ks_);
            if (k9da && (xa9ks_['indexOf']('http://') != -0x1 || xa9ks_['indexOf']('https://') != -0x1)) {
                var k5t_0 = k9da['md5'],
                    uh6dfb = kxt5_0['getFileNativePath'](k5t_0);
                kxt5_0['remove'](uh6dfb);
            }
        }, $m['onReadNativeCallBack'] = function (pqnzym, epzqy, oglv2, ypzq, ypznj, k5x0t_, yzphe, s6fdab, fbus) {
            ypzq === void 0x0 && (ypzq = !![]), k5x0t_ === void 0x0 && (k5x0t_ = ![]), s6fdab === void 0x0 && (s6fdab = 0x0);
            if (!s6fdab) {
                var ds9bf;
                if (oglv2 == 'json' || oglv2 == 'atlas') ds9bf = k9sabd['getJson'](fbus['data']);else oglv2 == 'xml' ? ds9bf = a9k_x0['parseXMLFromString'](fbus['data']) : ds9bf = fbus['data'];
                yzphe['onLoaded'](ds9bf), !k9sabd['isZiYu'] && k9sabd['isPosMsgYu'] && oglv2 != 'arraybuffer' && wx['postMessage']({
                    'url': epzqy,
                    'data': ds9bf,
                    'isLoad': !![]
                });
            } else s6fdab == 0x1 && k9sabd['EnvConfig']['load']['call'](yzphe, epzqy, oglv2, ypzq, ypznj, k5x0t_);
        }, su6bd($m, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), $m;
    }(),
        kxt5_0 = function (g2lv) {
        function l2$go() {
            l2$go['__super']['call'](this);
            ;
        }
        return nj1om$(l2$go, 'laya.wx.mini.MiniFileMgr', g2lv), l2$go['isLoadFile'] = function (b6fuds) {
            return l2$go['_fileTypeArr']['indexOf'](b6fuds) != -0x1 ? !![] : ![];
        }, l2$go['getFileInfo'] = function (n1pj$) {
            var yqpz = n1pj$['split']('?')[0x0],
                nm1$o = l2$go['filesListObj'][yqpz];
            if (nm1$o == null) return null;else return nm1$o;
            return null;
        }, l2$go['onFileUpdate'] = function (hudbf6, o2lj$1) {
            var igvl23 = hudbf6['split']('/'),
                uezqhy = igvl23[igvl23['length'] - 0x1],
                r5t0x = l2$go['getFileInfo'](o2lj$1);
            if (r5t0x == null) l2$go['onSaveFile'](o2lj$1, uezqhy);else {
                if (r5t0x['readyUrl'] != o2lj$1) l2$go['remove'](uezqhy, o2lj$1);
            }
        }, l2$go['exits'] = function (m$j1o, db6af) {
            var zheyu = l2$go['getFileNativePath'](m$j1o);
            l2$go['fs']['getFileInfo']({
                'filePath': zheyu,
                'success': function (pn1$mj) {
                    db6af != null && db6af['runWith']([0x0, pn1$mj]);
                },
                'fail': function (k0_tx) {
                    db6af != null && db6af['runWith']([0x1, k0_tx]);
                }
            });
        }, l2$go['read'] = function (t50_x4, tw8r4, j1l$m, b6sda) {
            tw8r4 === void 0x0 && (tw8r4 = 'ascill'), b6sda === void 0x0 && (b6sda = '');
            var pnj;
            b6sda != '' ? pnj = l2$go['getFileNativePath'](t50_x4) : pnj = t50_x4, l2$go['fs']['readFile']({
                'filePath': pnj,
                'encoding': tw8r4,
                'success': function (tx_k50) {
                    j1l$m != null && j1l$m['runWith']([0x0, tx_k50]);
                },
                'fail': function (r54x0t) {
                    if (r54x0t && b6sda != '') l2$go['down'](b6sda, tw8r4, j1l$m, b6sda);else j1l$m != null && j1l$m['runWith']([0x1]);
                }
            });
        }, l2$go['readNativeFile'] = function (j$1olm, v2log) {
            l2$go['fs']['readFile']({
                'filePath': j$1olm,
                'encoding': '',
                'success': function (db9ka) {
                    v2log != null && v2log['runWith']([0x0]);
                },
                'fail': function (hb6df) {
                    v2log != null && v2log['runWith']([0x1]);
                }
            });
        }, l2$go['down'] = function (o2l13$, j$mp, m$njo, mypznq) {
            j$mp === void 0x0 && (j$mp = 'ascill'), mypznq === void 0x0 && (mypznq = '');
            var v2ol = l2$go['getFileNativePath'](mypznq),
                mp1z = l2$go['wxdown']({
                'url': o2l13$,
                'filePath': v2ol,
                'success': function (v3glo) {
                    if (v3glo['statusCode'] === 0xc8) l2$go['readFile'](v3glo['filePath'], j$mp, m$njo, mypznq);
                },
                'fail': function (_90akx) {
                    m$njo != null && m$njo['runWith']([0x1, _90akx]);
                }
            });
            mp1z['onProgressUpdate'](function (sk_a9x) {
                m$njo != null && m$njo['runWith']([0x2, sk_a9x['progress']]);
            });
        }, l2$go['readFile'] = function (m$pj1n, mj$n1p, sd6bfa, a_9s) {
            mj$n1p === void 0x0 && (mj$n1p = 'ascill'), a_9s === void 0x0 && (a_9s = ''), l2$go['fs']['readFile']({
                'filePath': m$pj1n,
                'encoding': mj$n1p,
                'success': function (o$jl2) {
                    if (m$pj1n['indexOf']('http://') != -0x1 || m$pj1n['indexOf']('https://') != -0x1) l2$go['onFileUpdate'](m$pj1n, a_9s);
                    sd6bfa != null && sd6bfa['runWith']([0x0, o$jl2]);
                },
                'fail': function (pj1zm) {
                    if (pj1zm) sd6bfa != null && sd6bfa['runWith']([0x1, pj1zm]);
                }
            });
        }, l2$go['downImg'] = function (jnpzm, pmyzn, xa_k09) {
            xa_k09 === void 0x0 && (xa_k09 = '');
            var pmzyn = l2$go['wxdown']({
                'url': jnpzm,
                'success': function (tw50r) {
                    tw50r['statusCode'] === 0xc8 && l2$go['copyFile'](tw50r['tempFilePath'], xa_k09, pmyzn);
                },
                'fail': function (qpzeny) {
                    pmyzn != null && pmyzn['runWith']([0x1, qpzeny]);
                }
            });
        }, l2$go['copyFile'] = function (dfu6bs, h6fqe, bdfus6) {
            var sadk = dfu6bs['split']('/'),
                $np = sadk[sadk['length'] - 0x1],
                mpnyjz = h6fqe['split']('?')[0x0],
                o1j2$l = l2$go['getFileInfo'](h6fqe),
                qzny = l2$go['getFileNativePath']($np);
            l2$go['fs']['copyFile']({
                'srcPath': dfu6bs,
                'destPath': qzny,
                'success': function (dbfs) {
                    if (!o1j2$l) l2$go['onSaveFile'](h6fqe, $np), bdfus6 != null && bdfus6['runWith']([0x0]);else {
                        if (o1j2$l['readyUrl'] != h6fqe) l2$go['remove']($np, h6fqe, bdfus6);
                    }
                },
                'fail': function (b9dska) {
                    bdfus6 != null && bdfus6['runWith']([0x1, b9dska]);
                }
            });
        }, l2$go['getFileNativePath'] = function (_xt90) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _xt90;
        }, l2$go['remove'] = function (zeqyhu, ov2g, _k50tx) {
            ov2g === void 0x0 && (ov2g = '');
            var mjyznp = l2$go['getFileInfo'](ov2g),
                k0x9_a = l2$go['getFileNativePath'](mjyznp['md5']);
            _9xk['loader']['clearRes'](mjyznp['readyUrl']), l2$go['fs']['unlink']({
                'filePath': k0x9_a,
                'success': function (f6ad) {
                    if (ov2g != '') l2$go['onSaveFile'](ov2g, zeqyhu);
                    _k50tx != null && _k50tx['runWith']([0x0]);
                },
                'fail': function (lv3ig2) {}
            });
        }, l2$go['onSaveFile'] = function (_t05, x_405t) {
            var kda9_ = _t05['split']('?')[0x0];
            l2$go['filesListObj'][kda9_] = {
                'md5': x_405t,
                'readyUrl': _t05
            }, l2$go['fs']['writeFile']({
                'filePath': l2$go['fileNativeDir'] + '/' + l2$go['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](l2$go['filesListObj']),
                'success': function (axs_9) {
                    console['log']('写入测试测试成功：', axs_9);
                },
                'fail': function (g2o) {
                    console['log']('写入测试测试失败：', g2o);
                }
            });
        }, l2$go['existDir'] = function ($l132, w54tr0) {
            l2$go['fs']['mkdir']({
                'dirPath': $l132,
                'success': function (qzuyh) {
                    w54tr0 != null && w54tr0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (w8t45) {
                    if (w8t45['errMsg']['indexOf']('file already exists') != -0x1) l2$go['readSync'](l2$go['fileListName'], 'utf8', w54tr0);else w54tr0 != null && w54tr0['runWith']([0x1, w8t45]);
                }
            });
        }, l2$go['readSync'] = function (pjnzm1, $1no, v3og, np1m$) {
            $1no === void 0x0 && ($1no = 'ascill'), np1m$ === void 0x0 && (np1m$ = '');
            var euy = l2$go['getFileNativePath'](pjnzm1),
                mnypj;
            try {
                mnypj = l2$go['fs']['readFileSync'](euy), v3og != null && v3og['runWith']([0x0, { 'data': mnypj }]);
            } catch (olj$m) {
                v3og != null && v3og['runWith']([0x1]);
            }
        }, l2$go['readCache'] = function () {}, l2$go['writeCache'] = function (omn$j1) {
            var adb6fs = readyUrl['split']('?')[0x0];
            l2$go['filesListObj'][adb6fs] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, l2$go['fs']['writeFile']({
                'filePath': l2$go['fileNativeDir'] + '/' + l2$go['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](l2$go['filesListObj']),
                'success': function (t90_kx) {},
                'fail': function (g3ol2v) {}
            });
        }, l2$go['setNativeFileDir'] = function (wr5t) {
            l2$go['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + wr5t;
        }, l2$go['filesListObj'] = {}, l2$go['fileNativeDir'] = null, l2$go['fileListName'] = 'layaairfiles.txt', l2$go['ziyuFileData'] = {}, su6bd(l2$go, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), l2$go;
    }(r84w5),
        uqy = function (bd6su) {
        function f6heq() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], f6heq['__super']['call'](this), this['_sound'] = f6heq['_createSound'](), this['_chanell'] = new uqhezy(this['_sound']);
        }
        nj1om$(f6heq, 'laya.wx.mini.MiniSound', bd6su);
        var ynpzeq = f6heq['prototype'];
        return ynpzeq['load'] = function (xtr4) {
            var jpzmny = this;
            xtr4 = zqep['formatURL'](xtr4), this['url'] = xtr4;
            if (f6heq['_audioCache'][xtr4]) {
                this['event']('complete');
                return;
            }
            function o3gl$2() {
                if (f6heq['_null'] != undefined) jpzmny['_sound']['onCanplay'](f6heq['_null']), jpzmny['_sound']['onError'](f6heq['_null']);else try {
                    jpzmny['_sound']['onCanplay'](null), jpzmny['_sound']['onError'](null), f6heq['_null'] = null;
                } catch (ax_k9) {
                    console['warn']('[wxmini] _clearSound:' + ax_k9), jpzmny['_sound']['onCanplay'](d9sfa), jpzmny['_sound']['onError'](d9sfa), f6heq['_null'] = d9sfa;
                }
            }
            function ak9d() {
                d6fuhb['loaded'] = !![], d6fuhb['event']('complete'), f6heq['_audioCache'][d6fuhb['url']] = d6fuhb;
            }
            function zypjn(pn$1m) {
                console['error']('errCode=' + pn$1m['errCode'] + '  errMsg=' + pn$1m['errMsg']), d6fuhb['event']('error');
            }
            function d9sfa() {}
            this['_sound']['onCanplay'](ak9d), this['_sound']['onError'](zypjn), this['_sound']['src'] = xtr4;
            var d6fuhb = this;
        }, ynpzeq['play'] = function (nzmypj, jm$p1n) {
            nzmypj === void 0x0 && (nzmypj = 0x0), jm$p1n === void 0x0 && (jm$p1n = 0x0);
            var jnyp, mnyzq;
            if (this['url'] == _akxs9['_tMusic']) {
                if (!f6heq['_musicAudio']) f6heq['_musicAudio'] = this['_sound'];
                jnyp = f6heq['_musicAudio'], mnyzq = this['_chanell'];
            } else jnyp = this['_sound'], mnyzq = this['_chanell'];
            return jnyp['src'] = this['url'], jnyp['startTime'] = 0x0, mnyzq['isStopped'] && (mnyzq['url'] = this['url'], mnyzq['loops'] = jm$p1n, mnyzq['startTime'] = nzmypj, mnyzq['play'](), _akxs9['addChannel'](mnyzq)), mnyzq;
        }, ynpzeq['dispose'] = function () {
            var t504rw = f6heq['_audioCache'][this['url']];
            t504rw && (t504rw['src'] = '', delete f6heq['_audioCache'][this['url']]);
        }, fsda(0x0, ynpzeq, 'duration', function () {
            return this['_sound']['duration'];
        }), f6heq['_createSound'] = function () {
            f6heq['_id']++;
            var db6f = k9sabd['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return db6f;
        }, f6heq['_musicAudio'] = null, f6heq['_id'] = 0x0, f6heq['_audioCache'] = {}, f6heq['_null'] = undefined, f6heq;
    }(r84w5),
        uqhezy = function (njmo1$) {
        function pmnz1(x_09t) {
            this['_audio'] = null, this['_onEnd'] = null, pmnz1['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = x_09t, this['_onEnd'] = a9k_x0['bind'](this['__onEnd'], this), x_09t['onEnded'](this['_onEnd']);
        }
        nj1om$(pmnz1, 'laya.wx.mini.MiniSoundChannel', njmo1$);
        var fe6qh = pmnz1['prototype'];
        return fe6qh['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (_9xk['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, fe6qh['__onNull'] = function () {}, fe6qh['play'] = function () {
            this['isStopped'] = ![], _akxs9['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, fe6qh['stop'] = function () {
            this['isStopped'] = !![], _akxs9['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, fe6qh['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, fe6qh['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], _akxs9['addChannel'](this), this['_audio']['play']();
        }, fsda(0x0, fe6qh, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), fsda(0x0, fe6qh, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), fsda(0x0, fe6qh, 'volume', function () {
            return 0x1;
        }, function (vlg2o) {}), pmnz1['_null'] = undefined, pmnz1;
    }(ktx90),
        pzqeny = function () {
        function mj1o$n() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = k9sabd['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        nj1om$(mj1o$n, 'laya.wx.mini.MiniVideo');
        var _t9k = mj1o$n['prototype'];
        return _t9k['on'] = function (euqy6, k_sax, l312o) {
            if (euqy6 == 'loadedmetadata') this['onPlayFunc'] = l312o['bind'](k_sax), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else euqy6 == 'ended' && (this['onEndedFunC'] = l312o['bind'](k_sax), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, _t9k['onTimeUpdateFunc'] = function (x45t) {
            this['position'] = x45t['position'], this['_duration'] = x45t['duration'];
        }, _t9k['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, _t9k['onended'] = function (t4rw8, ak9bsd) {
            this['onEndedFunC'] = ak9bsd['bind'](t4rw8), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, _t9k['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, _t9k['off'] = function (l32vig, fbas6, e6fq) {
            if (l32vig == 'loadedmetadata') this['onPlayFunc'] = e6fq['bind'](fbas6), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else l32vig == 'ended' && (this['onEndedFunC'] = e6fq['bind'](fbas6), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, _t9k['load'] = function (mznypq) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = mznypq;
        }, _t9k['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, _t9k['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, _t9k['size'] = function (xs9_, r78w4) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = xs9_, this['videoElement']['height'] = r78w4;
        }, _t9k['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, _t9k['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, fsda(0x0, _t9k, 'duration', function () {
            return this['_duration'];
        }), fsda(0x0, _t9k, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (nmp1) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = nmp1;
        }), fsda(0x0, _t9k, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), fsda(0x0, _t9k, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), fsda(0x0, _t9k, 'ended', function () {
            return this['videoend'];
        }), fsda(0x0, _t9k, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function ($j2l) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = $j2l;
        }), fsda(0x0, _t9k, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (mn1o$) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = mn1o$;
        }), fsda(0x0, _t9k, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (x045tr) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = x045tr;
        }), fsda(0x0, _t9k, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), fsda(0x0, _t9k, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (kasd9) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = kasd9;
        }), fsda(0x0, _t9k, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (_xt0k5) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = _xt0k5;
        }), fsda(0x0, _t9k, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), fsda(0x0, _t9k, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (mjpnz) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = mjpnz;
        }), fsda(0x0, _t9k, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (nyzmjp) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = nyzmjp;
        }), fsda(0x0, _t9k, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (nm1j$o) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = nm1j$o;
        }), mj1o$n;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var ynmzpj in Laya) {
        var jm$ol1 = Laya[ynmzpj];
        jm$ol1 && jm$ol1['__isclass'] && (exports[ynmzpj] = jm$ol1);
    }
});