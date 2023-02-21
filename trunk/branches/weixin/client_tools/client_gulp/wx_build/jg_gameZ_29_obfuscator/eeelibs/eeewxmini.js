var b = wx.$e;
(function (window, document, lqhbiv) {
    var tfgjk$ = lqhbiv['un'],
        ihvlq = lqhbiv['uns'],
        jf4kgt = lqhbiv['static'],
        f$kxj = lqhbiv['class'],
        m2xozp = lqhbiv['getset'],
        umdz1 = lqhbiv['__newvec'],
        kfgtj = laya['utils']['Browser'],
        h30s68 = laya['events']['Event'],
        atgk = laya['events']['EventDispatcher'],
        kf4agt = laya['resource']['HTMLImage'],
        jf2x = laya['utils']['Handler'],
        pdomxz = laya['display']['Input'],
        beqilv = laya['net']['Loader'],
        qlivh = laya['maths']['Matrix'],
        ompz2x = laya['renders']['Render'],
        op2zm = laya['utils']['RunDriver'],
        m1zd9u = laya['media']['Sound'],
        m91zd = laya['media']['SoundChannel'],
        lvsqhi = laya['media']['SoundManager'],
        w4eabv = laya['display']['Stage'],
        t2j = laya['net']['URL'],
        fkg4t = laya['utils']['Utils'],
        weabv = function () {
        function doxmpz() {}
        return f$kxj(doxmpz, 'laya.wx.mini.MiniAdpter'), doxmpz['getJson'] = function (x2mpoz) {
            return JSON['parse'](x2mpoz);
        }, doxmpz['init'] = function (zmxpdo, qilvs) {
            zmxpdo === void 0x0 && (zmxpdo = ![]), qilvs === void 0x0 && (qilvs = ![]);
            if (doxmpz['_inited']) return;
            doxmpz['window'] = window;
            if (doxmpz['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            doxmpz['_inited'] = !![], doxmpz['isZiYu'] = qilvs, doxmpz['isPosMsgYu'] = zmxpdo, doxmpz['EnvConfig'] = {}, !doxmpz['isZiYu'] && (kfg4at['setNativeFileDir']('/layaairGame'), kfg4at['existDir'](kfg4at['fileNativeDir'], jf2x['create'](doxmpz, doxmpz['onMkdirCallBack']))), doxmpz['window']['focus'] = function () {}, lqhbiv['getUrlPath'] = function () {}, doxmpz['window']['logtime'] = function (kf2t$) {}, doxmpz['window']['alertTimeLog'] = function (x2fk$j) {}, doxmpz['window']['resetShareInfo'] = function () {}, doxmpz['window']['CanvasRenderingContext2D'] = function () {}, doxmpz['window']['CanvasRenderingContext2D']['prototype'] = doxmpz['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], doxmpz['window']['document']['body']['appendChild'] = function () {}, doxmpz['EnvConfig']['pixelRatioInt'] = 0x0, op2zm['getPixelRatio'] = doxmpz['pixelRatio'], doxmpz['_preCreateElement'] = kfgtj['createElement'], kfgtj['createElement'] = doxmpz['createElement'], op2zm['createShaderCondition'] = doxmpz['createShaderCondition'], fkg4t['parseXMLFromString'] = doxmpz['parseXMLFromString'], pdomxz['_createInputElement'] = zmdp9['_createInputElement'], doxmpz['EnvConfig']['load'] = beqilv['prototype']['load'], beqilv['prototype']['load'] = zxdmop['prototype']['load'], doxmpz['isZiYu'] && zmxpdo && wx['onMessage'](function (z19omd) {
                z19omd['isLoad'] && (kfg4at['ziyuFileData'][z19omd['url']] = z19omd['data']);
            });
        }, doxmpz['onMkdirCallBack'] = function (h3s608, eivqbl) {
            if (!h3s608) kfg4at['filesListObj'] = JSON['parse'](eivqbl['data']);
        }, doxmpz['pixelRatio'] = function () {
            if (!doxmpz['EnvConfig']['pixelRatioInt']) try {
                var svqlh = wx['getSystemInfoSync']();
                return doxmpz['EnvConfig']['pixelRatioInt'] = svqlh['pixelRatio'], svqlh = svqlh, svqlh['pixelRatio'];
            } catch (oxjp2) {}
            return doxmpz['EnvConfig']['pixelRatioInt'];
        }, doxmpz['createElement'] = function (libqv) {
            if (libqv == 'canvas') {
                var dzpmx;
                return doxmpz['idx'] == 0x1 ? doxmpz['isZiYu'] ? (dzpmx = sharedCanvas, dzpmx['style'] = {}) : dzpmx = window['canvas'] : dzpmx = window['wx']['createCanvas'](), doxmpz['idx']++, dzpmx;
            } else {
                if (libqv == 'textarea' || libqv == 'input') return doxmpz['onCreateInput'](libqv);else {
                    if (libqv == 'div') {
                        var yr7c05 = doxmpz['_preCreateElement'](libqv);
                        return yr7c05['contains'] = function (wav4e) {
                            return null;
                        }, yr7c05['removeChild'] = function (be4av) {}, yr7c05;
                    } else return doxmpz['_preCreateElement'](libqv);
                }
            }
        }, doxmpz['onCreateInput'] = function (j$2xf) {
            var sivql = doxmpz['_preCreateElement'](j$2xf);
            return sivql['focus'] = zmdp9['wxinputFocus'], sivql['blur'] = zmdp9['wxinputblur'], sivql['style'] = {}, sivql['value'] = 0x0, sivql['parentElement'] = {}, sivql['placeholder'] = {}, sivql['type'] = {}, sivql['setColor'] = function (a4tkw) {}, sivql['setType'] = function (s6liqh) {}, sivql['setFontFace'] = function (wabev) {}, sivql['addEventListener'] = function (k4wgat) {}, sivql['contains'] = function (t2k$fj) {
                return null;
            }, sivql['removeChild'] = function (j$fp) {}, sivql;
        }, doxmpz['createShaderCondition'] = function (hbvlq) {
            var lqs8h = this,
                a4wt = function () {
                var xf2j$k = hbvlq;
                return lqs8h[hbvlq['replace']('this.', '')];
            };
            return a4wt;
        }, doxmpz['EnvConfig'] = null, doxmpz['window'] = null, doxmpz['_preCreateElement'] = null, doxmpz['_inited'] = ![], doxmpz['wxRequest'] = null, doxmpz['systemInfo'] = null, doxmpz['version'] = '0.0.1', doxmpz['isZiYu'] = ![], doxmpz['isPosMsgYu'] = ![], doxmpz['parseXMLFromString'] = function (j$kft2) {
            var n7_cy, jxpf$2;
            j$kft2 = j$kft2['replace'](/>\s+</g, '><');
            try {
                n7_cy = new window['Parser']['DOMParser']()['parseFromString'](j$kft2, 'text/xml');
            } catch (mo$xp2) {
                throw '需要引入xml解析库文件';
            }
            return n7_cy;
        }, doxmpz['idx'] = 0x1, doxmpz;
    }(),
        jxo$2 = function () {
        function $xk() {}
        f$kxj($xk, 'laya.wx.mini.MiniImage');
        var g$tkf = $xk['prototype'];
        return g$tkf['_loadImage'] = function (mzud19) {
            var nc5_ = this,
                x2j$f = ![];
            mzud19['indexOf']('layaNativeDir/') == -0x1 && (x2j$f = !![], mzud19 = t2j['formatURL'](mzud19));
            if (!kfg4at['getFileInfo'](mzud19)) {
                if (mzud19['indexOf']('http://') != -0x1 || mzud19['indexOf']('https://') != -0x1) kfg4at['downImg'](mzud19, new jf2x($xk, $xk['onDownImgCallBack'], [mzud19, nc5_]), mzud19);else $xk['onCreateImage'](mzud19, nc5_, !![]);
            } else $xk['onCreateImage'](mzud19, nc5_, !x2j$f);
        }, $xk['onDownImgCallBack'] = function (afg4kt, ewb, odmz9p) {
            if (!odmz9p) $xk['onCreateImage'](afg4kt, ewb);else ewb['onError'](null);
        }, $xk['onCreateImage'] = function (e4bavw, aebgw, r750cy) {
            r750cy === void 0x0 && (r750cy = ![]);
            var ivbelq;
            if (!r750cy) {
                var wbae4g = kfg4at['getFileInfo'](e4bavw),
                    k2t = wbae4g['md5'];
                ivbelq = kfg4at['getFileNativePath'](k2t);
            } else ivbelq = e4bavw;
            if (aebgw['imgCache'] == null) aebgw['imgCache'] = {};
            var o2xpj$;
            function $fjx() {
                o2xpj$['onload'] = null, o2xpj$['onerror'] = null, delete aebgw['imgCache'][e4bavw];
            }
            ;
            var lvbqh = function () {
                $fjx(), aebgw['onLoaded'](o2xpj$);
            },
                hviqs = function () {
                $fjx(), aebgw['event']('error', 'Load image failed');
            };
            aebgw['_type'] == 'nativeimage' ? (o2xpj$ = new kfgtj['window']['Image'](), o2xpj$['crossOrigin'] = '', o2xpj$['onload'] = lvbqh, o2xpj$['onerror'] = hviqs, o2xpj$['src'] = ivbelq, aebgw['imgCache'][e4bavw] = o2xpj$) : new kf4agt['create'](ivbelq, {
                'onload': lvbqh,
                'onerror': hviqs,
                'onCreate': function (oz1) {
                    o2xpj$ = oz1, aebgw['imgCache'][e4bavw] = oz1;
                }
            });
        }, $xk;
    }(),
        zmdp9 = function () {
        function gfk4tj() {}
        return f$kxj(gfk4tj, 'laya.wx.mini.MiniInput'), gfk4tj['_createInputElement'] = function () {
            pdomxz['_initInput'](pdomxz['area'] = kfgtj['createElement']('textarea')), pdomxz['_initInput'](pdomxz['input'] = kfgtj['createElement']('input')), pdomxz['inputContainer'] = kfgtj['createElement']('div'), pdomxz['inputContainer']['style']['position'] = 'absolute', pdomxz['inputContainer']['style']['zIndex'] = 0x186a0, kfgtj['container']['appendChild'](pdomxz['inputContainer']), pdomxz['inputContainer']['setPos'] = function (b4eavw, s6il) {
                pdomxz['inputContainer']['style']['left'] = b4eavw + 'px', pdomxz['inputContainer']['style']['top'] = s6il + 'px';
            }, lqhbiv['stage']['on']('resize', null, gfk4tj['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (vlqihb) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), lvsqhi['_soundClass'] = bivqle, lvsqhi['_musicClass'] = bivqle, window['_videoClass'] = tfjk4;
        }, gfk4tj['_onStageResize'] = function () {
            var _ycn7 = lqhbiv['stage']['_canvasTransform']['identity']();
            _ycn7['scale'](kfgtj['width'] / ompz2x['canvas']['width'] / op2zm['getPixelRatio'](), kfgtj['height'] / ompz2x['canvas']['height'] / op2zm['getPixelRatio']());
        }, gfk4tj['wxinputFocus'] = function (iqelv) {
            var elvb = pdomxz['inputElement']['target'];
            if (elvb && !elvb['editable']) return;
            weabv['window']['wx']['offKeyboardConfirm'](), weabv['window']['wx']['offKeyboardInput'](), weabv['window']['wx']['showKeyboard']({
                'defaultValue': elvb['text'],
                'maxLength': elvb['maxChars'],
                'multiple': elvb['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (qh8s36) {},
                'fail': function (eibvq) {}
            }), weabv['window']['wx']['onKeyboardConfirm'](function (mopz9d) {
                var qlbhi = mopz9d ? mopz9d['value'] : '';
                elvb['text'] = qlbhi, elvb['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), weabv['window']['wx']['onKeyboardInput'](function (lebiv) {
                var lhiqs6 = lebiv ? lebiv['value'] : '';
                if (!elvb['multiline']) {
                    if (lhiqs6['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                elvb['text'] = lhiqs6, elvb['event']('input');
            });
        }, gfk4tj['inputEnter'] = function () {
            pdomxz['inputElement']['target']['focus'] = ![];
        }, gfk4tj['wxinputblur'] = function () {
            gfk4tj['hideKeyboard']();
        }, gfk4tj['hideKeyboard'] = function () {
            weabv['window']['wx']['offKeyboardConfirm'](), weabv['window']['wx']['offKeyboardInput'](), weabv['window']['wx']['hideKeyboard']({
                'success': function (sq8h3) {
                    console['log']('隐藏键盘');
                },
                'fail': function (mpzdxo) {
                    console['log']('隐藏键盘出错:' + (mpzdxo ? mpzdxo['errMsg'] : ''));
                }
            });
        }, gfk4tj;
    }(),
        zxdmop = function () {
        function c075() {}
        f$kxj(c075, 'laya.wx.mini.MiniLoader');
        var gat4f = c075['prototype'];
        return gat4f['load'] = function (jp$ox, qilebv, ilqs6h, $2fjkx, n7c) {
            ilqs6h === void 0x0 && (ilqs6h = !![]), n7c === void 0x0 && (n7c = ![]);
            var j2xf$p = this;
            j2xf$p['_url'] = jp$ox;
            if (jp$ox['indexOf']('data:image') === 0x0) j2xf$p['_type'] = qilebv = 'image';else j2xf$p['_type'] = qilebv || (qilebv = j2xf$p['getTypeFromUrl'](jp$ox));
            j2xf$p['_cache'] = ilqs6h, j2xf$p['_data'] = null;
            var wg4kt = 'ascii';
            if (jp$ox['indexOf']('.fnt') != -0x1) wg4kt = 'utf8';else qilebv == 'arraybuffer' && (wg4kt = '');
            ;
            var lh68sq = fkg4t['getFileExtension'](jp$ox);
            if (c075['_fileTypeArr']['indexOf'](lh68sq) != -0x1) weabv['EnvConfig']['load']['call'](this, jp$ox, qilebv, ilqs6h, $2fjkx, n7c);else {
                if (!kfg4at['getFileInfo'](jp$ox)) {
                    if (jp$ox['indexOf']('layaNativeDir/') != -0x1) {
                        if (weabv['isZiYu']) {
                            var k2j$t = kfg4at['ziyuFileData'][jp$ox];
                            j2xf$p['onLoaded'](k2j$t);
                            return;
                        } else {
                            cosnole['log']('read read'), kfg4at['read'](jp$ox, wg4kt, new jf2x(c075, c075['onReadNativeCallBack'], [wg4kt, jp$ox, qilebv, ilqs6h, $2fjkx, n7c, j2xf$p]));
                            return;
                        }
                    }
                    if (t2j['rootPath'] == '') var po2mz = jp$ox;else po2mz = jp$ox['split'](t2j['rootPath'])[0x0];
                    jp$ox['indexOf']('http://') != -0x1 || jp$ox['indexOf']('https://') != -0x1 ? weabv['EnvConfig']['load']['call'](j2xf$p, jp$ox, qilebv, ilqs6h, $2fjkx, n7c) : kfg4at['readFile'](po2mz, wg4kt, new jf2x(c075, c075['onReadNativeCallBack'], [wg4kt, jp$ox, qilebv, ilqs6h, $2fjkx, n7c, j2xf$p]), jp$ox);
                } else weabv['EnvConfig']['load']['call'](this, jp$ox, qilebv, ilqs6h, $2fjkx, n7c);
            }
        }, gat4f['resMgrLoad'] = function (oxmdpz, a4vbwe, x2$o, wv4, g$fj, xzdmop, y07r) {
            x2$o === void 0x0 && (x2$o = 0x0), wv4 === void 0x0 && (wv4 = ![]), g$fj === void 0x0 && (g$fj = ![]), xzdmop === void 0x0 && (xzdmop = 0x0), y07r === void 0x0 && (y07r = 0x3), oxmdpz['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', oxmdpz), weabv['EnvConfig']['resMgrLoad'](oxmdpz, (bhlivq, jfx2p, ivsq) => {
                c075['prototype']['resMgrLoadCallBack'](bhlivq, jfx2p, ivsq, a4vbwe);
            }, x2$o, wv4, g$fj, xzdmop, y07r);
        }, gat4f['resMgrLoadCallBack'] = function (weivab, dxpom, tewg4a, yr0378) {
            console['log']('buff:::', weivab, tewg4a, kfg4at['fileNativeDir'] + '///' + kfg4at['fileListName']), yr0378(weivab, dxpom, tewg4a);
        }, gat4f['clearRes'] = function (kjgft$, hs836q) {
            hs836q === void 0x0 && (hs836q = ![]);
            var qhs6li = this;
            qhs6li['clearRes'](kjgft$, hs836q);
            var c57ryn = kfg4at['getFileInfo'](kjgft$);
            if (c57ryn && (kjgft$['indexOf']('http://') != -0x1 || kjgft$['indexOf']('https://') != -0x1)) {
                var dz9mp = c57ryn['md5'],
                    $omp = kfg4at['getFileNativePath'](dz9mp);
                kfg4at['remove']($omp);
            }
        }, c075['onReadNativeCallBack'] = function (hq8, zo, nc5r7, fta4k, r05y, dm1zu, t4fkga, lishv, sh86lq) {
            fta4k === void 0x0 && (fta4k = !![]), dm1zu === void 0x0 && (dm1zu = ![]), lishv === void 0x0 && (lishv = 0x0);
            if (!lishv) {
                var ozmdxp;
                if (nc5r7 == 'json' || nc5r7 == 'atlas') ozmdxp = weabv['getJson'](sh86lq['data']);else nc5r7 == 'xml' ? ozmdxp = fkg4t['parseXMLFromString'](sh86lq['data']) : ozmdxp = sh86lq['data'];
                t4fkga['onLoaded'](ozmdxp), !weabv['isZiYu'] && weabv['isPosMsgYu'] && nc5r7 != 'arraybuffer' && wx['postMessage']({
                    'url': zo,
                    'data': ozmdxp,
                    'isLoad': !![]
                });
            } else lishv == 0x1 && weabv['EnvConfig']['load']['call'](t4fkga, zo, nc5r7, fta4k, r05y, dm1zu);
        }, jf4kgt(c075, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), c075;
    }(),
        kfg4at = function (ihqlvb) {
        function z1dm9o() {
            z1dm9o['__super']['call'](this);
            ;
        }
        return f$kxj(z1dm9o, 'laya.wx.mini.MiniFileMgr', ihqlvb), z1dm9o['isLoadFile'] = function (k4twag) {
            return z1dm9o['_fileTypeArr']['indexOf'](k4twag) != -0x1 ? !![] : ![];
        }, z1dm9o['getFileInfo'] = function (a4bev) {
            var tkj$f = a4bev['split']('?')[0x0],
                vwiea = z1dm9o['filesListObj'][tkj$f];
            if (vwiea == null) return null;else return vwiea;
            return null;
        }, z1dm9o['onFileUpdate'] = function ($2pxom, hiql) {
            var hvbi = $2pxom['split']('/'),
                eaw4v = hvbi[hvbi['length'] - 0x1],
                e4wbva = z1dm9o['getFileInfo'](hiql);
            if (e4wbva == null) z1dm9o['onSaveFile'](hiql, eaw4v);else {
                if (e4wbva['readyUrl'] != hiql) z1dm9o['remove'](eaw4v, hiql);
            }
        }, z1dm9o['exits'] = function (xpdzmo, iabwe) {
            var cr75n = z1dm9o['getFileNativePath'](xpdzmo);
            z1dm9o['fs']['getFileInfo']({
                'filePath': cr75n,
                'success': function (ihlqv) {
                    iabwe != null && iabwe['runWith']([0x0, ihlqv]);
                },
                'fail': function (yr3087) {
                    iabwe != null && iabwe['runWith']([0x1, yr3087]);
                }
            });
        }, z1dm9o['read'] = function (jfg$, qihsl, c5y7r0, vb4aw) {
            qihsl === void 0x0 && (qihsl = 'ascill'), vb4aw === void 0x0 && (vb4aw = '');
            var fj$xk;
            vb4aw != '' ? fj$xk = z1dm9o['getFileNativePath'](jfg$) : fj$xk = jfg$, z1dm9o['fs']['readFile']({
                'filePath': fj$xk,
                'encoding': qihsl,
                'success': function (n7y5_c) {
                    c5y7r0 != null && c5y7r0['runWith']([0x0, n7y5_c]);
                },
                'fail': function (lqbvih) {
                    if (lqbvih && vb4aw != '') z1dm9o['down'](vb4aw, qihsl, c5y7r0, vb4aw);else c5y7r0 != null && c5y7r0['runWith']([0x1]);
                }
            });
        }, z1dm9o['readNativeFile'] = function (eqbil, sihlq) {
            z1dm9o['fs']['readFile']({
                'filePath': eqbil,
                'encoding': '',
                'success': function (p2om) {
                    sihlq != null && sihlq['runWith']([0x0]);
                },
                'fail': function (ktf4jg) {
                    sihlq != null && sihlq['runWith']([0x1]);
                }
            });
        }, z1dm9o['down'] = function (ilqs6, hqbliv, d19um, mxpo2z) {
            hqbliv === void 0x0 && (hqbliv = 'ascill'), mxpo2z === void 0x0 && (mxpo2z = '');
            var $2opm = z1dm9o['getFileNativePath'](mxpo2z),
                dxpozm = z1dm9o['wxdown']({
                'url': ilqs6,
                'filePath': $2opm,
                'success': function (evbilq) {
                    if (evbilq['statusCode'] === 0xc8) z1dm9o['readFile'](evbilq['filePath'], hqbliv, d19um, mxpo2z);
                },
                'fail': function (s36qh8) {
                    d19um != null && d19um['runWith']([0x1, s36qh8]);
                }
            });
            dxpozm['onProgressUpdate'](function (xmpoz2) {
                d19um != null && d19um['runWith']([0x2, xmpoz2['progress']]);
            });
        }, z1dm9o['readFile'] = function (vihsql, m2x$po, y5rcn7, qvsihl) {
            m2x$po === void 0x0 && (m2x$po = 'ascill'), qvsihl === void 0x0 && (qvsihl = ''), z1dm9o['fs']['readFile']({
                'filePath': vihsql,
                'encoding': m2x$po,
                'success': function (lvibe) {
                    if (vihsql['indexOf']('http://') != -0x1 || vihsql['indexOf']('https://') != -0x1) z1dm9o['onFileUpdate'](vihsql, qvsihl);
                    y5rcn7 != null && y5rcn7['runWith']([0x0, lvibe]);
                },
                'fail': function (cn_y75) {
                    if (cn_y75) y5rcn7 != null && y5rcn7['runWith']([0x1, cn_y75]);
                }
            });
        }, z1dm9o['downImg'] = function (gae4w, jt4g, jxk2) {
            jxk2 === void 0x0 && (jxk2 = '');
            var zpom9 = z1dm9o['wxdown']({
                'url': gae4w,
                'success': function ($kjx) {
                    $kjx['statusCode'] === 0xc8 && z1dm9o['copyFile']($kjx['tempFilePath'], jxk2, jt4g);
                },
                'fail': function (lbiqvh) {
                    jt4g != null && jt4g['runWith']([0x1, lbiqvh]);
                }
            });
        }, z1dm9o['copyFile'] = function (pf$j2x, tgka4w, $2p) {
            var hlivq = pf$j2x['split']('/'),
                ewvib = hlivq[hlivq['length'] - 0x1],
                mud9 = tgka4w['split']('?')[0x0],
                qhls6 = z1dm9o['getFileInfo'](tgka4w),
                v4bea = z1dm9o['getFileNativePath'](ewvib);
            z1dm9o['fs']['copyFile']({
                'srcPath': pf$j2x,
                'destPath': v4bea,
                'success': function (aibe) {
                    if (!qhls6) z1dm9o['onSaveFile'](tgka4w, ewvib), $2p != null && $2p['runWith']([0x0]);else {
                        if (qhls6['readyUrl'] != tgka4w) z1dm9o['remove'](ewvib, tgka4w, $2p);
                    }
                },
                'fail': function (bhlqiv) {
                    $2p != null && $2p['runWith']([0x1, bhlqiv]);
                }
            });
        }, z1dm9o['getFileNativePath'] = function (ox2mp$) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ox2mp$;
        }, z1dm9o['remove'] = function (dmu1z9, gaeb4w, aibw) {
            gaeb4w === void 0x0 && (gaeb4w = '');
            var vlqibh = z1dm9o['getFileInfo'](gaeb4w),
                op$j2 = z1dm9o['getFileNativePath'](vlqibh['md5']);
            lqhbiv['loader']['clearRes'](vlqibh['readyUrl']), z1dm9o['fs']['unlink']({
                'filePath': op$j2,
                'success': function (akwt4g) {
                    if (gaeb4w != '') z1dm9o['onSaveFile'](gaeb4w, dmu1z9);
                    aibw != null && aibw['runWith']([0x0]);
                },
                'fail': function (c5ny7) {}
            });
        }, z1dm9o['onSaveFile'] = function (j$px, x$k2) {
            var o2$xpm = j$px['split']('?')[0x0];
            z1dm9o['filesListObj'][o2$xpm] = {
                'md5': x$k2,
                'readyUrl': j$px
            }, z1dm9o['fs']['writeFile']({
                'filePath': z1dm9o['fileNativeDir'] + '/' + z1dm9o['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](z1dm9o['filesListObj']),
                'success': function (eiab) {
                    console['log']('写入测试测试成功：', eiab);
                },
                'fail': function (o$jx) {
                    console['log']('写入测试测试失败：', o$jx);
                }
            });
        }, z1dm9o['existDir'] = function (f2p$jx, qh8l6s) {
            z1dm9o['fs']['mkdir']({
                'dirPath': f2p$jx,
                'success': function (awv) {
                    qh8l6s != null && qh8l6s['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (px2mzo) {
                    if (px2mzo['errMsg']['indexOf']('file already exists') != -0x1) z1dm9o['readSync'](z1dm9o['fileListName'], 'utf8', qh8l6s);else qh8l6s != null && qh8l6s['runWith']([0x1, px2mzo]);
                }
            });
        }, z1dm9o['readSync'] = function (qs6l, xjop2, zu9m1, u91mzd) {
            xjop2 === void 0x0 && (xjop2 = 'ascill'), u91mzd === void 0x0 && (u91mzd = '');
            var c07ry = z1dm9o['getFileNativePath'](qs6l),
                opzx;
            try {
                opzx = z1dm9o['fs']['readFileSync'](c07ry), zu9m1 != null && zu9m1['runWith']([0x0, { 'data': opzx }]);
            } catch (siql) {
                zu9m1 != null && zu9m1['runWith']([0x1]);
            }
        }, z1dm9o['readCache'] = function () {}, z1dm9o['writeCache'] = function (opxm2z) {
            var egwat = readyUrl['split']('?')[0x0];
            z1dm9o['filesListObj'][egwat] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, z1dm9o['fs']['writeFile']({
                'filePath': z1dm9o['fileNativeDir'] + '/' + z1dm9o['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](z1dm9o['filesListObj']),
                'success': function (vble) {},
                'fail': function (zd9mo) {}
            });
        }, z1dm9o['setNativeFileDir'] = function (m9du1z) {
            z1dm9o['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + m9du1z;
        }, z1dm9o['filesListObj'] = {}, z1dm9o['fileNativeDir'] = null, z1dm9o['fileListName'] = 'layaairfiles.txt', z1dm9o['ziyuFileData'] = {}, jf4kgt(z1dm9o, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), z1dm9o;
    }(atgk),
        bivqle = function (t4afgk) {
        function etw4ag() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], etw4ag['__super']['call'](this), this['_sound'] = etw4ag['_createSound'](), this['_chanell'] = new wlbvie(this['_sound']);
        }
        f$kxj(etw4ag, 'laya.wx.mini.MiniSound', t4afgk);
        var r80y3 = etw4ag['prototype'];
        return r80y3['load'] = function (lvqbi) {
            var gtf4j = this;
            lvqbi = t2j['formatURL'](lvqbi), this['url'] = lvqbi;
            if (etw4ag['_audioCache'][lvqbi]) {
                this['event']('complete');
                return;
            }
            function aiv() {
                if (etw4ag['_null'] != undefined) gtf4j['_sound']['onCanplay'](etw4ag['_null']), gtf4j['_sound']['onError'](etw4ag['_null']);else try {
                    gtf4j['_sound']['onCanplay'](null), gtf4j['_sound']['onError'](null), etw4ag['_null'] = null;
                } catch (odp) {
                    console['warn']('[wxmini] _clearSound:' + odp), gtf4j['_sound']['onCanplay'](dm9zp), gtf4j['_sound']['onError'](dm9zp), etw4ag['_null'] = dm9zp;
                }
            }
            function ozp2xm() {
                opxmd['loaded'] = !![], opxmd['event']('complete'), etw4ag['_audioCache'][opxmd['url']] = opxmd;
            }
            function ozxdm(iqsl6h) {
                console['error']('errCode=' + iqsl6h['errCode'] + '  errMsg=' + iqsl6h['errMsg']), opxmd['event']('error');
            }
            function dm9zp() {}
            this['_sound']['onCanplay'](ozp2xm), this['_sound']['onError'](ozxdm), this['_sound']['src'] = lvqbi;
            var opxmd = this;
        }, r80y3['play'] = function (s3r, aveb4w) {
            s3r === void 0x0 && (s3r = 0x0), aveb4w === void 0x0 && (aveb4w = 0x0);
            var jf2kt$, yrn7c;
            if (this['url'] == lvsqhi['_tMusic']) {
                if (!etw4ag['_musicAudio']) etw4ag['_musicAudio'] = this['_sound'];
                jf2kt$ = etw4ag['_musicAudio'], yrn7c = this['_chanell'];
            } else jf2kt$ = this['_sound'], yrn7c = this['_chanell'];
            return jf2kt$['src'] = this['url'], jf2kt$['startTime'] = 0x0, yrn7c['isStopped'] && (yrn7c['url'] = this['url'], yrn7c['loops'] = aveb4w, yrn7c['startTime'] = s3r, yrn7c['play'](), lvsqhi['addChannel'](yrn7c)), yrn7c;
        }, r80y3['dispose'] = function () {
            var lqebvi = etw4ag['_audioCache'][this['url']];
            lqebvi && (lqebvi['src'] = '', delete etw4ag['_audioCache'][this['url']]);
        }, m2xozp(0x0, r80y3, 'duration', function () {
            return this['_sound']['duration'];
        }), etw4ag['_createSound'] = function () {
            etw4ag['_id']++;
            var aivw = weabv['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return aivw;
        }, etw4ag['_musicAudio'] = null, etw4ag['_id'] = 0x0, etw4ag['_audioCache'] = {}, etw4ag['_null'] = undefined, etw4ag;
    }(atgk),
        wlbvie = function (lhsq) {
        function levbqi(x$poj2) {
            this['_audio'] = null, this['_onEnd'] = null, levbqi['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = x$poj2, this['_onEnd'] = fkg4t['bind'](this['__onEnd'], this), x$poj2['onEnded'](this['_onEnd']);
        }
        f$kxj(levbqi, 'laya.wx.mini.MiniSoundChannel', lhsq);
        var xfkj$2 = levbqi['prototype'];
        return xfkj$2['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (lqhbiv['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, xfkj$2['__onNull'] = function () {}, xfkj$2['play'] = function () {
            this['isStopped'] = ![], lvsqhi['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, xfkj$2['stop'] = function () {
            this['isStopped'] = !![], lvsqhi['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, xfkj$2['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, xfkj$2['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], lvsqhi['addChannel'](this), this['_audio']['play']();
        }, m2xozp(0x0, xfkj$2, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), m2xozp(0x0, xfkj$2, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), m2xozp(0x0, xfkj$2, 'volume', function () {
            return 0x1;
        }, function (vhibl) {}), levbqi['_null'] = undefined, levbqi;
    }(m91zd),
        tfjk4 = function () {
        function dzopm() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = weabv['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        f$kxj(dzopm, 'laya.wx.mini.MiniVideo');
        var xop2j$ = dzopm['prototype'];
        return xop2j$['on'] = function (baei, fj2k$, rnc75) {
            if (baei == 'loadedmetadata') this['onPlayFunc'] = rnc75['bind'](fj2k$), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else baei == 'ended' && (this['onEndedFunC'] = rnc75['bind'](fj2k$), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, xop2j$['onTimeUpdateFunc'] = function (islq6) {
            this['position'] = islq6['position'], this['_duration'] = islq6['duration'];
        }, xop2j$['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, xop2j$['onended'] = function (t$fk, q83h6) {
            this['onEndedFunC'] = q83h6['bind'](t$fk), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, xop2j$['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, xop2j$['off'] = function (hsil, mdpz9, eivqlb) {
            if (hsil == 'loadedmetadata') this['onPlayFunc'] = eivqlb['bind'](mdpz9), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else hsil == 'ended' && (this['onEndedFunC'] = eivqlb['bind'](mdpz9), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, xop2j$['load'] = function ($pj2xo) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = $pj2xo;
        }, xop2j$['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, xop2j$['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, xop2j$['size'] = function (yr5c7n, dmu9z1) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = yr5c7n, this['videoElement']['height'] = dmu9z1;
        }, xop2j$['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, xop2j$['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, m2xozp(0x0, xop2j$, 'duration', function () {
            return this['_duration'];
        }), m2xozp(0x0, xop2j$, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (ilbqvh) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = ilbqvh;
        }), m2xozp(0x0, xop2j$, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), m2xozp(0x0, xop2j$, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), m2xozp(0x0, xop2j$, 'ended', function () {
            return this['videoend'];
        }), m2xozp(0x0, xop2j$, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (ilvbew) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = ilvbew;
        }), m2xozp(0x0, xop2j$, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (vlbie) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = vlbie;
        }), m2xozp(0x0, xop2j$, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (mzo2px) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = mzo2px;
        }), m2xozp(0x0, xop2j$, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), m2xozp(0x0, xop2j$, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function ($kgj) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = $kgj;
        }), m2xozp(0x0, xop2j$, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (t4kjg) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = t4kjg;
        }), m2xozp(0x0, xop2j$, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), m2xozp(0x0, xop2j$, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (jktg) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = jktg;
        }), m2xozp(0x0, xop2j$, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (jf4kg) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = jf4kg;
        }), m2xozp(0x0, xop2j$, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (mx2p) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = mx2p;
        }), dzopm;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var y350r7 in Laya) {
        var g4ewt = Laya[y350r7];
        g4ewt && g4ewt['__isclass'] && (exports[y350r7] = g4ewt);
    }
});