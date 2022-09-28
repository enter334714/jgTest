var c = wx.$a;
(function (window, document, hvjx) {
  var q8td6k = hvjx['un'],
      l9ba$ = hvjx['uns'],
      h6vdk = hvjx['static'],
      c40_y = hvjx['class'],
      $lambc = hvjx['getset'],
      o0ey_ = hvjx['__newvec'],
      ue12w = laya['utils']['Browser'],
      mabl9$ = laya['events']['Event'],
      zjhkvn = laya['events']['EventDispatcher'],
      hknjz = laya['resource']['HTMLImage'],
      l0b = laya['utils']['Handler'],
      t5r8q = laya['display']['Input'],
      s2fgx = laya['net']['Loader'],
      rdt85q = laya['maths']['Matrix'],
      cb0yo$ = laya['renders']['Render'],
      y0c4b = laya['utils']['RunDriver'],
      b$9alm = laya['media']['Sound'],
      o0y4_c = laya['media']['SoundChannel'],
      oy_c40 = laya['media']['SoundManager'],
      rq758 = laya['display']['Stage'],
      r3t5p = laya['net']['URL'],
      lm$ba = laya['utils']['Utils'],
      khzvn6 = function () {
    function e40o_w() {}return c40_y(e40o_w, 'laya.wx.mini.MiniAdpter'), e40o_w['getJson'] = function (zn6vhk) {
      return JSON['parse'](zn6vhk);
    }, e40o_w['init'] = function (rt5dq, hdzk6v) {
      rt5dq === void 0x0 && (rt5dq = ![]), hdzk6v === void 0x0 && (hdzk6v = ![]);if (e40o_w['_inited']) return;e40o_w['window'] = window;if (e40o_w['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;e40o_w['_inited'] = !![], e40o_w['isZiYu'] = hdzk6v, e40o_w['isPosMsgYu'] = rt5dq, e40o_w['EnvConfig'] = {}, !e40o_w['isZiYu'] && (nzhjv['setNativeFileDir']('/layaairGame'), nzhjv['existDir'](nzhjv['fileNativeDir'], l0b['create'](e40o_w, e40o_w['onMkdirCallBack']))), e40o_w['window']['focus'] = function () {}, hvjx['getUrlPath'] = function () {}, e40o_w['window']['logtime'] = function (r37t85) {}, e40o_w['window']['alertTimeLog'] = function (t375p) {}, e40o_w['window']['resetShareInfo'] = function () {}, e40o_w['window']['CanvasRenderingContext2D'] = function () {}, e40o_w['window']['CanvasRenderingContext2D']['prototype'] = e40o_w['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], e40o_w['window']['document']['body']['appendChild'] = function () {}, e40o_w['EnvConfig']['pixelRatioInt'] = 0x0, y0c4b['getPixelRatio'] = e40o_w['pixelRatio'], e40o_w['_preCreateElement'] = ue12w['createElement'], ue12w['createElement'] = e40o_w['createElement'], y0c4b['createShaderCondition'] = e40o_w['createShaderCondition'], lm$ba['parseXMLFromString'] = e40o_w['parseXMLFromString'], t5r8q['_createInputElement'] = nxf1['_createInputElement'], e40o_w['EnvConfig']['load'] = s2fgx['prototype']['load'], s2fgx['prototype']['load'] = g2uf1w['prototype']['load'], e40o_w['isZiYu'] && rt5dq && wx['onMessage'](function (e4uwg_) {
        e4uwg_['isLoad'] && (nzhjv['ziyuFileData'][e4uwg_['url']] = e4uwg_['data']);
      });
    }, e40o_w['onMkdirCallBack'] = function (hk6zdv, rd8tq) {
      if (!hk6zdv) nzhjv['filesListObj'] = JSON['parse'](rd8tq['data']);
    }, e40o_w['pixelRatio'] = function () {
      if (!e40o_w['EnvConfig']['pixelRatioInt']) try {
        var o04y_ = wx['getSystemInfoSync']();return e40o_w['EnvConfig']['pixelRatioInt'] = o04y_['pixelRatio'], o04y_ = o04y_, o04y_['pixelRatio'];
      } catch (trq857) {}return e40o_w['EnvConfig']['pixelRatioInt'];
    }, e40o_w['createElement'] = function (pt573r) {
      if (pt573r == 'canvas') {
        var d6tr8;return e40o_w['idx'] == 0x1 ? e40o_w['isZiYu'] ? (d6tr8 = sharedCanvas, d6tr8['style'] = {}) : d6tr8 = window['canvas'] : d6tr8 = window['wx']['createCanvas'](), e40o_w['idx']++, d6tr8;
      } else {
        if (pt573r == 'textarea' || pt573r == 'input') return e40o_w['onCreateInput'](pt573r);else {
          if (pt573r == 'div') {
            var yo_0c = e40o_w['_preCreateElement'](pt573r);return yo_0c['contains'] = function (rt375p) {
              return null;
            }, yo_0c['removeChild'] = function (kjznvh) {}, yo_0c;
          } else return e40o_w['_preCreateElement'](pt573r);
        }
      }
    }, e40o_w['onCreateInput'] = function (_0w4o) {
      var _g4w = e40o_w['_preCreateElement'](_0w4o);return _g4w['focus'] = nxf1['wxinputFocus'], _g4w['blur'] = nxf1['wxinputblur'], _g4w['style'] = {}, _g4w['value'] = 0x0, _g4w['parentElement'] = {}, _g4w['placeholder'] = {}, _g4w['type'] = {}, _g4w['setColor'] = function (sf1nxj) {}, _g4w['setType'] = function (d86qz) {}, _g4w['setFontFace'] = function (y_0co) {}, _g4w['addEventListener'] = function (xjs21f) {}, _g4w['contains'] = function (snhjv) {
        return null;
      }, _g4w['removeChild'] = function (ug_w2) {}, _g4w;
    }, e40o_w['createShaderCondition'] = function (uf2wg) {
      var v6zhn = this,
          d68rq = function () {
        var d8k6z = uf2wg;return v6zhn[uf2wg['replace']('this.', '')];
      };return d68rq;
    }, e40o_w['EnvConfig'] = null, e40o_w['window'] = null, e40o_w['_preCreateElement'] = null, e40o_w['_inited'] = ![], e40o_w['wxRequest'] = null, e40o_w['systemInfo'] = null, e40o_w['version'] = '0.0.1', e40o_w['isZiYu'] = ![], e40o_w['isPosMsgYu'] = ![], e40o_w['parseXMLFromString'] = function (fjsx) {
      var ip35r7, ab9l$;fjsx = fjsx['replace'](/>\s+</g, '><');try {
        ip35r7 = new window['Parser']['DOMParser']()['parseFromString'](fjsx, 'text/xml');
      } catch (_e0oy4) {
        throw '需要引入xml解析库文件';
      }return ip35r7;
    }, e40o_w['idx'] = 0x1, e40o_w;
  }(),
      y_co = function () {
    function vnjzhs() {}c40_y(vnjzhs, 'laya.wx.mini.MiniImage');var dzkvh = vnjzhs['prototype'];return dzkvh['_loadImage'] = function (kvdhz) {
      var kzh6vd = this,
          bm$ycl = ![];kvdhz['indexOf']('layaNativeDir/') == -0x1 && (bm$ycl = !![], kvdhz = r3t5p['formatURL'](kvdhz));if (!nzhjv['getFileInfo'](kvdhz)) {
        if (kvdhz['indexOf']('http://') != -0x1 || kvdhz['indexOf']('https://') != -0x1) nzhjv['downImg'](kvdhz, new l0b(vnjzhs, vnjzhs['onDownImgCallBack'], [kvdhz, kzh6vd]), kvdhz);else vnjzhs['onCreateImage'](kvdhz, kzh6vd, !![]);
      } else vnjzhs['onCreateImage'](kvdhz, kzh6vd, !bm$ycl);
    }, vnjzhs['onDownImgCallBack'] = function (dt86q, co_0y, sjf1) {
      if (!sjf1) vnjzhs['onCreateImage'](dt86q, co_0y);else co_0y['onError'](null);
    }, vnjzhs['onCreateImage'] = function (d6khzq, lc$ba, bcl$my) {
      bcl$my === void 0x0 && (bcl$my = ![]);var c_04yo;if (!bcl$my) {
        var rq8d5t = nzhjv['getFileInfo'](d6khzq),
            t5q78 = rq8d5t['md5'];c_04yo = nzhjv['getFileNativePath'](t5q78);
      } else c_04yo = d6khzq;if (lc$ba['imgCache'] == null) lc$ba['imgCache'] = {};var e0_y;function xjnvfs() {
        e0_y['onload'] = null, e0_y['onerror'] = null, delete lc$ba['imgCache'][d6khzq];
      };var dvzk = function () {
        xjnvfs(), lc$ba['onLoaded'](e0_y);
      },
          ge2 = function () {
        xjnvfs(), lc$ba['event']('error', 'Load image failed');
      };lc$ba['_type'] == 'nativeimage' ? (e0_y = new ue12w['window']['Image'](), e0_y['crossOrigin'] = '', e0_y['onload'] = dvzk, e0_y['onerror'] = ge2, e0_y['src'] = c_04yo, lc$ba['imgCache'][d6khzq] = e0_y) : new hknjz['create'](c_04yo, { 'onload': dvzk, 'onerror': ge2, 'onCreate': function (snfj1) {
          e0_y = snfj1, lc$ba['imgCache'][d6khzq] = snfj1;
        } });
    }, vnjzhs;
  }(),
      nxf1 = function () {
    function q7tr5() {}return c40_y(q7tr5, 'laya.wx.mini.MiniInput'), q7tr5['_createInputElement'] = function () {
      t5r8q['_initInput'](t5r8q['area'] = ue12w['createElement']('textarea')), t5r8q['_initInput'](t5r8q['input'] = ue12w['createElement']('input')), t5r8q['inputContainer'] = ue12w['createElement']('div'), t5r8q['inputContainer']['style']['position'] = 'absolute', t5r8q['inputContainer']['style']['zIndex'] = 0x186a0, ue12w['container']['appendChild'](t5r8q['inputContainer']), t5r8q['inputContainer']['setPos'] = function (sjzhn, rp3i7) {
        t5r8q['inputContainer']['style']['left'] = sjzhn + 'px', t5r8q['inputContainer']['style']['top'] = rp3i7 + 'px';
      }, hvjx['stage']['on']('resize', null, q7tr5['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jvhsxn) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), oy_c40['_soundClass'] = tr5387, oy_c40['_musicClass'] = tr5387, window['_videoClass'] = l0ybc;
    }, q7tr5['_onStageResize'] = function () {
      var al9b$ = hvjx['stage']['_canvasTransform']['identity']();al9b$['scale'](ue12w['width'] / cb0yo$['canvas']['width'] / y0c4b['getPixelRatio'](), ue12w['height'] / cb0yo$['canvas']['height'] / y0c4b['getPixelRatio']());
    }, q7tr5['wxinputFocus'] = function (s1njxf) {
      var vnhjs = t5r8q['inputElement']['target'];if (vnhjs && !vnhjs['editable']) return;khzvn6['window']['wx']['offKeyboardConfirm'](), khzvn6['window']['wx']['offKeyboardInput'](), khzvn6['window']['wx']['showKeyboard']({ 'defaultValue': vnhjs['text'], 'maxLength': vnhjs['maxChars'], 'multiple': vnhjs['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (t8dq6) {}, 'fail': function (abl$) {} }), khzvn6['window']['wx']['onKeyboardConfirm'](function (kvzjnh) {
        var u4_e = kvzjnh ? kvzjnh['value'] : '';vnhjs['text'] = u4_e, vnhjs['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), khzvn6['window']['wx']['onKeyboardInput'](function (cml$y) {
        var rq7t = cml$y ? cml$y['value'] : '';if (!vnhjs['multiline']) {
          if (rq7t['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }vnhjs['text'] = rq7t, vnhjs['event']('input');
      });
    }, q7tr5['inputEnter'] = function () {
      t5r8q['inputElement']['target']['focus'] = ![];
    }, q7tr5['wxinputblur'] = function () {
      q7tr5['hideKeyboard']();
    }, q7tr5['hideKeyboard'] = function () {
      khzvn6['window']['wx']['offKeyboardConfirm'](), khzvn6['window']['wx']['offKeyboardInput'](), khzvn6['window']['wx']['hideKeyboard']({ 'success': function (_y4eo) {
          console['log']('隐藏键盘');
        }, 'fail': function (gsx12) {
          console['log']('隐藏键盘出错:' + (gsx12 ? gsx12['errMsg'] : ''));
        } });
    }, q7tr5;
  }(),
      g2uf1w = function () {
    function cmlyb() {}c40_y(cmlyb, 'laya.wx.mini.MiniLoader');var ycl0$ = cmlyb['prototype'];return ycl0$['load'] = function (a9bm$l, fs2xj, xhjvs, $l9ma, sfnj) {
      xhjvs === void 0x0 && (xhjvs = !![]), sfnj === void 0x0 && (sfnj = ![]);var hkznvj = this;hkznvj['_url'] = a9bm$l;if (a9bm$l['indexOf']('data:image') === 0x0) hkznvj['_type'] = fs2xj = 'image';else hkznvj['_type'] = fs2xj || (fs2xj = hkznvj['getTypeFromUrl'](a9bm$l));hkznvj['_cache'] = xhjvs, hkznvj['_data'] = null;var dqhk6z = 'ascii';if (a9bm$l['indexOf']('.fnt') != -0x1) dqhk6z = 'utf8';else fs2xj == 'arraybuffer' && (dqhk6z = '');;var y0c_o = lm$ba['getFileExtension'](a9bm$l);if (cmlyb['_fileTypeArr']['indexOf'](y0c_o) != -0x1) khzvn6['EnvConfig']['load']['call'](this, a9bm$l, fs2xj, xhjvs, $l9ma, sfnj);else {
        if (!nzhjv['getFileInfo'](a9bm$l)) {
          if (a9bm$l['indexOf']('layaNativeDir/') != -0x1) {
            if (khzvn6['isZiYu']) {
              var r3p5i7 = nzhjv['ziyuFileData'][a9bm$l];hkznvj['onLoaded'](r3p5i7);return;
            } else {
              cosnole['log']('read read'), nzhjv['read'](a9bm$l, dqhk6z, new l0b(cmlyb, cmlyb['onReadNativeCallBack'], [dqhk6z, a9bm$l, fs2xj, xhjvs, $l9ma, sfnj, hkznvj]));return;
            }
          }if (r3t5p['rootPath'] == '') var o$ybc = a9bm$l;else o$ybc = a9bm$l['split'](r3t5p['rootPath'])[0x0];a9bm$l['indexOf']('http://') != -0x1 || a9bm$l['indexOf']('https://') != -0x1 ? khzvn6['EnvConfig']['load']['call'](hkznvj, a9bm$l, fs2xj, xhjvs, $l9ma, sfnj) : nzhjv['readFile'](o$ybc, dqhk6z, new l0b(cmlyb, cmlyb['onReadNativeCallBack'], [dqhk6z, a9bm$l, fs2xj, xhjvs, $l9ma, sfnj, hkznvj]), a9bm$l);
        } else khzvn6['EnvConfig']['load']['call'](this, a9bm$l, fs2xj, xhjvs, $l9ma, sfnj);
      }
    }, ycl0$['resMgrLoad'] = function (m$cly, sjfxn, t7rp35, hkdv, wu1eg, vfnjxs, vkdz6h) {
      t7rp35 === void 0x0 && (t7rp35 = 0x0), hkdv === void 0x0 && (hkdv = ![]), wu1eg === void 0x0 && (wu1eg = ![]), vfnjxs === void 0x0 && (vfnjxs = 0x0), vkdz6h === void 0x0 && (vkdz6h = 0x3), m$cly['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', m$cly), khzvn6['EnvConfig']['resMgrLoad'](m$cly, (jsnx1f, sjvnx, ow_e0) => {
        cmlyb['prototype']['resMgrLoadCallBack'](jsnx1f, sjvnx, ow_e0, sjfxn);
      }, t7rp35, hkdv, wu1eg, vfnjxs, vkdz6h);
    }, ycl0$['resMgrLoadCallBack'] = function (kjznh, c0b$l, hz6kqd, jvshx) {
      console['log']('buff:::', kjznh, hz6kqd, nzhjv['fileNativeDir'] + '///' + nzhjv['fileListName']), jvshx(kjznh, c0b$l, hz6kqd);
    }, ycl0$['clearRes'] = function (o0ye_4, cblym) {
      cblym === void 0x0 && (cblym = ![]);var mb$yc = this;mb$yc['clearRes'](o0ye_4, cblym);var r5q7t8 = nzhjv['getFileInfo'](o0ye_4);if (r5q7t8 && (o0ye_4['indexOf']('http://') != -0x1 || o0ye_4['indexOf']('https://') != -0x1)) {
        var kqz8 = r5q7t8['md5'],
            r35p = nzhjv['getFileNativePath'](kqz8);nzhjv['remove'](r35p);
      }
    }, cmlyb['onReadNativeCallBack'] = function (lyc$0b, $0byco, uwe4_o, d6qkt, s1gf, wo_4eu, $0lb, sx1nfj, oc_40y) {
      d6qkt === void 0x0 && (d6qkt = !![]), wo_4eu === void 0x0 && (wo_4eu = ![]), sx1nfj === void 0x0 && (sx1nfj = 0x0);if (!sx1nfj) {
        var knhv6;if (uwe4_o == 'json' || uwe4_o == 'atlas') knhv6 = khzvn6['getJson'](oc_40y['data']);else uwe4_o == 'xml' ? knhv6 = lm$ba['parseXMLFromString'](oc_40y['data']) : knhv6 = oc_40y['data'];$0lb['onLoaded'](knhv6), !khzvn6['isZiYu'] && khzvn6['isPosMsgYu'] && uwe4_o != 'arraybuffer' && wx['postMessage']({ 'url': $0byco, 'data': knhv6, 'isLoad': !![] });
      } else sx1nfj == 0x1 && khzvn6['EnvConfig']['load']['call']($0lb, $0byco, uwe4_o, d6qkt, s1gf, wo_4eu);
    }, h6vdk(cmlyb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), cmlyb;
  }(),
      nzhjv = function (o0cy$b) {
    function hzkq6() {
      hzkq6['__super']['call'](this);;
    }return c40_y(hzkq6, 'laya.wx.mini.MiniFileMgr', o0cy$b), hzkq6['isLoadFile'] = function (njvxsh) {
      return hzkq6['_fileTypeArr']['indexOf'](njvxsh) != -0x1 ? !![] : ![];
    }, hzkq6['getFileInfo'] = function (t8q6d) {
      var vhzsn = t8q6d['split']('?')[0x0],
          qd8rt6 = hzkq6['filesListObj'][vhzsn];if (qd8rt6 == null) return null;else return qd8rt6;return null;
    }, hzkq6['onFileUpdate'] = function (e_o4wu, hnxjv) {
      var ybc0l$ = e_o4wu['split']('/'),
          gwu4e = ybc0l$[ybc0l$['length'] - 0x1],
          $ycbo = hzkq6['getFileInfo'](hnxjv);if ($ycbo == null) hzkq6['onSaveFile'](hnxjv, gwu4e);else {
        if ($ycbo['readyUrl'] != hnxjv) hzkq6['remove'](gwu4e, hnxjv);
      }
    }, hzkq6['exits'] = function (b$la9, r38t7) {
      var rtd86q = hzkq6['getFileNativePath'](b$la9);hzkq6['fs']['getFileInfo']({ 'filePath': rtd86q, 'success': function (vknj) {
          r38t7 != null && r38t7['runWith']([0x0, vknj]);
        }, 'fail': function (sx1fj) {
          r38t7 != null && r38t7['runWith']([0x1, sx1fj]);
        } });
    }, hzkq6['read'] = function (zhvns, mcb$la, bc04o, j2s1xf) {
      mcb$la === void 0x0 && (mcb$la = 'ascill'), j2s1xf === void 0x0 && (j2s1xf = '');var lamb9;j2s1xf != '' ? lamb9 = hzkq6['getFileNativePath'](zhvns) : lamb9 = zhvns, hzkq6['fs']['readFile']({ 'filePath': lamb9, 'encoding': mcb$la, 'success': function (wu1ge) {
          bc04o != null && bc04o['runWith']([0x0, wu1ge]);
        }, 'fail': function ($9la) {
          if ($9la && j2s1xf != '') hzkq6['down'](j2s1xf, mcb$la, bc04o, j2s1xf);else bc04o != null && bc04o['runWith']([0x1]);
        } });
    }, hzkq6['readNativeFile'] = function (jsh, njvshz) {
      hzkq6['fs']['readFile']({ 'filePath': jsh, 'encoding': '', 'success': function (c0oy4_) {
          njvshz != null && njvshz['runWith']([0x0]);
        }, 'fail': function (g2_uew) {
          njvshz != null && njvshz['runWith']([0x1]);
        } });
    }, hzkq6['down'] = function (s2j1x, vnk6hz, pri75, rqt7) {
      vnk6hz === void 0x0 && (vnk6hz = 'ascill'), rqt7 === void 0x0 && (rqt7 = '');var gweu = hzkq6['getFileNativePath'](rqt7),
          t785qr = hzkq6['wxdown']({ 'url': s2j1x, 'filePath': gweu, 'success': function (xh) {
          if (xh['statusCode'] === 0xc8) hzkq6['readFile'](xh['filePath'], vnk6hz, pri75, rqt7);
        }, 'fail': function (weg4u_) {
          pri75 != null && pri75['runWith']([0x1, weg4u_]);
        } });t785qr['onProgressUpdate'](function (dt58rq) {
        pri75 != null && pri75['runWith']([0x2, dt58rq['progress']]);
      });
    }, hzkq6['readFile'] = function (c0$o, y$b0o, blcm, tq7r) {
      y$b0o === void 0x0 && (y$b0o = 'ascill'), tq7r === void 0x0 && (tq7r = ''), hzkq6['fs']['readFile']({ 'filePath': c0$o, 'encoding': y$b0o, 'success': function (ml9a) {
          if (c0$o['indexOf']('http://') != -0x1 || c0$o['indexOf']('https://') != -0x1) hzkq6['onFileUpdate'](c0$o, tq7r);blcm != null && blcm['runWith']([0x0, ml9a]);
        }, 'fail': function (e4wu_g) {
          if (e4wu_g) blcm != null && blcm['runWith']([0x1, e4wu_g]);
        } });
    }, hzkq6['downImg'] = function (f2g1ux, kdqzh, dqzkh) {
      dqzkh === void 0x0 && (dqzkh = '');var q5rtd = hzkq6['wxdown']({ 'url': f2g1ux, 'success': function (c0bo4) {
          c0bo4['statusCode'] === 0xc8 && hzkq6['copyFile'](c0bo4['tempFilePath'], dqzkh, kdqzh);
        }, 'fail': function (vfnsx) {
          kdqzh != null && kdqzh['runWith']([0x1, vfnsx]);
        } });
    }, hzkq6['copyFile'] = function (blm$a, m$ylbc, svxjf) {
      var jvkzh = blm$a['split']('/'),
          gwe2u1 = jvkzh[jvkzh['length'] - 0x1],
          b$mcl = m$ylbc['split']('?')[0x0],
          mbyc = hzkq6['getFileInfo'](m$ylbc),
          bocy40 = hzkq6['getFileNativePath'](gwe2u1);hzkq6['fs']['copyFile']({ 'srcPath': blm$a, 'destPath': bocy40, 'success': function (x2gf1) {
          if (!mbyc) hzkq6['onSaveFile'](m$ylbc, gwe2u1), svxjf != null && svxjf['runWith']([0x0]);else {
            if (mbyc['readyUrl'] != m$ylbc) hzkq6['remove'](gwe2u1, m$ylbc, svxjf);
          }
        }, 'fail': function (kzd8q) {
          svxjf != null && svxjf['runWith']([0x1, kzd8q]);
        } });
    }, hzkq6['getFileNativePath'] = function (q8dtr5) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + q8dtr5;
    }, hzkq6['remove'] = function (nhzj, tp537, fjxns) {
      tp537 === void 0x0 && (tp537 = '');var u_gw2e = hzkq6['getFileInfo'](tp537),
          $yob0 = hzkq6['getFileNativePath'](u_gw2e['md5']);hvjx['loader']['clearRes'](u_gw2e['readyUrl']), hzkq6['fs']['unlink']({ 'filePath': $yob0, 'success': function (c0y4o) {
          if (tp537 != '') hzkq6['onSaveFile'](tp537, nhzj);fjxns != null && fjxns['runWith']([0x0]);
        }, 'fail': function (fx2gs) {} });
    }, hzkq6['onSaveFile'] = function (fg1s2x, mcla$) {
      var fw1u2g = fg1s2x['split']('?')[0x0];hzkq6['filesListObj'][fw1u2g] = { 'md5': mcla$, 'readyUrl': fg1s2x }, hzkq6['fs']['writeFile']({ 'filePath': hzkq6['fileNativeDir'] + '/' + hzkq6['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hzkq6['filesListObj']), 'success': function (vxshjn) {
          console['log']('写入测试测试成功：', vxshjn);
        }, 'fail': function (wu4o) {
          console['log']('写入测试测试失败：', wu4o);
        } });
    }, hzkq6['existDir'] = function (xjs12f, o0$by) {
      hzkq6['fs']['mkdir']({ 'dirPath': xjs12f, 'success': function (ns1xj) {
          o0$by != null && o0$by['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (nfvjxs) {
          if (nfvjxs['errMsg']['indexOf']('file already exists') != -0x1) hzkq6['readSync'](hzkq6['fileListName'], 'utf8', o0$by);else o0$by != null && o0$by['runWith']([0x1, nfvjxs]);
        } });
    }, hzkq6['readSync'] = function (ueg12, ycm$b, ue2w_g, zknhv6) {
      ycm$b === void 0x0 && (ycm$b = 'ascill'), zknhv6 === void 0x0 && (zknhv6 = '');var kdq8t6 = hzkq6['getFileNativePath'](ueg12),
          znhk6v;try {
        znhk6v = hzkq6['fs']['readFileSync'](kdq8t6), ue2w_g != null && ue2w_g['runWith']([0x0, { 'data': znhk6v }]);
      } catch (o_4e0) {
        ue2w_g != null && ue2w_g['runWith']([0x1]);
      }
    }, hzkq6['readCache'] = function () {}, hzkq6['writeCache'] = function (f2ux1g) {
      var dkzq8 = readyUrl['split']('?')[0x0];hzkq6['filesListObj'][dkzq8] = { 'md5': md5Name, 'readyUrl': readyUrl }, hzkq6['fs']['writeFile']({ 'filePath': hzkq6['fileNativeDir'] + '/' + hzkq6['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hzkq6['filesListObj']), 'success': function (oy4c0_) {}, 'fail': function (lam$b9) {} });
    }, hzkq6['setNativeFileDir'] = function (xv) {
      hzkq6['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + xv;
    }, hzkq6['filesListObj'] = {}, hzkq6['fileNativeDir'] = null, hzkq6['fileListName'] = 'layaairfiles.txt', hzkq6['ziyuFileData'] = {}, h6vdk(hzkq6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), hzkq6;
  }(zjhkvn),
      tr5387 = function (xsfnj1) {
    function $cbo() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], $cbo['__super']['call'](this), this['_sound'] = $cbo['_createSound'](), this['_chanell'] = new q6kt8(this['_sound']);
    }c40_y($cbo, 'laya.wx.mini.MiniSound', xsfnj1);var w2u = $cbo['prototype'];return w2u['load'] = function ($ybmcl) {
      var wg2e = this;$ybmcl = r3t5p['formatURL']($ybmcl), this['url'] = $ybmcl;if ($cbo['_audioCache'][$ybmcl]) {
        this['event']('complete');return;
      }function fs1xnj() {
        if ($cbo['_null'] != undefined) wg2e['_sound']['onCanplay']($cbo['_null']), wg2e['_sound']['onError']($cbo['_null']);else try {
          wg2e['_sound']['onCanplay'](null), wg2e['_sound']['onError'](null), $cbo['_null'] = null;
        } catch (hvzsjn) {
          console['warn']('[wxmini] _clearSound:' + hvzsjn), wg2e['_sound']['onCanplay'](o_4ewu), wg2e['_sound']['onError'](o_4ewu), $cbo['_null'] = o_4ewu;
        }
      }function y4_co() {
        zkd86q['loaded'] = !![], zkd86q['event']('complete'), $cbo['_audioCache'][zkd86q['url']] = zkd86q;
      }function oe04_(wge1u) {
        console['error']('errCode=' + wge1u['errCode'] + '  errMsg=' + wge1u['errMsg']), zkd86q['event']('error');
      }function o_4ewu() {}this['_sound']['onCanplay'](y4_co), this['_sound']['onError'](oe04_), this['_sound']['src'] = $ybmcl;var zkd86q = this;
    }, w2u['play'] = function (e4oy_, gu21x) {
      e4oy_ === void 0x0 && (e4oy_ = 0x0), gu21x === void 0x0 && (gu21x = 0x0);var a$mbl9, yo0_c;if (this['url'] == oy_c40['_tMusic']) {
        if (!$cbo['_musicAudio']) $cbo['_musicAudio'] = this['_sound'];a$mbl9 = $cbo['_musicAudio'], yo0_c = this['_chanell'];
      } else a$mbl9 = this['_sound'], yo0_c = this['_chanell'];return a$mbl9['src'] = this['url'], a$mbl9['startTime'] = 0x0, yo0_c['isStopped'] && (yo0_c['url'] = this['url'], yo0_c['loops'] = gu21x, yo0_c['startTime'] = e4oy_, yo0_c['play'](), oy_c40['addChannel'](yo0_c)), yo0_c;
    }, w2u['dispose'] = function () {
      var dzvh6k = $cbo['_audioCache'][this['url']];dzvh6k && (dzvh6k['src'] = '', delete $cbo['_audioCache'][this['url']]);
    }, $lambc(0x0, w2u, 'duration', function () {
      return this['_sound']['duration'];
    }), $cbo['_createSound'] = function () {
      $cbo['_id']++;var wg_e4 = khzvn6['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return wg_e4;
    }, $cbo['_musicAudio'] = null, $cbo['_id'] = 0x0, $cbo['_audioCache'] = {}, $cbo['_null'] = undefined, $cbo;
  }(zjhkvn),
      q6kt8 = function (yc4_0o) {
    function zhsnv(njfs) {
      this['_audio'] = null, this['_onEnd'] = null, zhsnv['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = njfs, this['_onEnd'] = lm$ba['bind'](this['__onEnd'], this), njfs['onEnded'](this['_onEnd']);
    }c40_y(zhsnv, 'laya.wx.mini.MiniSoundChannel', yc4_0o);var xvfj = zhsnv['prototype'];return xvfj['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (hvjx['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, xvfj['__onNull'] = function () {}, xvfj['play'] = function () {
      this['isStopped'] = ![], oy_c40['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, xvfj['stop'] = function () {
      this['isStopped'] = !![], oy_c40['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, xvfj['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, xvfj['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], oy_c40['addChannel'](this), this['_audio']['play']();
    }, $lambc(0x0, xvfj, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), $lambc(0x0, xvfj, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), $lambc(0x0, xvfj, 'volume', function () {
      return 0x1;
    }, function (vsjhxn) {}), zhsnv['_null'] = undefined, zhsnv;
  }(o0y4_c),
      l0ybc = function () {
    function pr35t() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = khzvn6['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }c40_y(pr35t, 'laya.wx.mini.MiniVideo');var al9 = pr35t['prototype'];return al9['on'] = function (owue4_, fug21x, jfvnxs) {
      if (owue4_ == 'loadedmetadata') this['onPlayFunc'] = jfvnxs['bind'](fug21x), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else owue4_ == 'ended' && (this['onEndedFunC'] = jfvnxs['bind'](fug21x), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, al9['onTimeUpdateFunc'] = function (fj1x) {
      this['position'] = fj1x['position'], this['_duration'] = fj1x['duration'];
    }, al9['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, al9['onended'] = function (_oye04, o0y4bc) {
      this['onEndedFunC'] = o0y4bc['bind'](_oye04), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, al9['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, al9['off'] = function (js1fx, dhzkq6, e4gw) {
      if (js1fx == 'loadedmetadata') this['onPlayFunc'] = e4gw['bind'](dhzkq6), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else js1fx == 'ended' && (this['onEndedFunC'] = e4gw['bind'](dhzkq6), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, al9['load'] = function (labcm$) {
      if (!this['videoElement']) return;this['videoElement']['src'] = labcm$;
    }, al9['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, al9['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, al9['size'] = function (vknz6, la$cm) {
      if (!this['videoElement']) return;this['videoElement']['width'] = vknz6, this['videoElement']['height'] = la$cm;
    }, al9['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, al9['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, $lambc(0x0, al9, 'duration', function () {
      return this['_duration'];
    }), $lambc(0x0, al9, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (qkdt8) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = qkdt8;
    }), $lambc(0x0, al9, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), $lambc(0x0, al9, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), $lambc(0x0, al9, 'ended', function () {
      return this['videoend'];
    }), $lambc(0x0, al9, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (r85tq7) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = r85tq7;
    }), $lambc(0x0, al9, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (rtq5) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = rtq5;
    }), $lambc(0x0, al9, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (w4oue) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = w4oue;
    }), $lambc(0x0, al9, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), $lambc(0x0, al9, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (hsvxj) {
      if (!this['videoElement']) return;this['videoElement']['x'] = hsvxj;
    }), $lambc(0x0, al9, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (fu1x2g) {
      if (!this['videoElement']) return;this['videoElement']['y'] = fu1x2g;
    }), $lambc(0x0, al9, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), $lambc(0x0, al9, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (uge4w_) {
      if (!this['videoElement']) return;this['videoElement']['src'] = uge4w_;
    }), $lambc(0x0, al9, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (kd6hq) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = kd6hq;
    }), $lambc(0x0, al9, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function ($lbcmy) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = $lbcmy;
    }), pr35t;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var e4ou in Laya) {
    var d6z8q = Laya[e4ou];d6z8q && d6z8q['__isclass'] && (exports[e4ou] = d6z8q);
  }
});