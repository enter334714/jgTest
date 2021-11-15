var W = wx.$l;
(function (window, document, tlzqf5) {
  var qjlk = tlzqf5['un'],
      rci30 = tlzqf5['uns'],
      e1ugv = tlzqf5['static'],
      lzkhq = tlzqf5['class'],
      habzj = tlzqf5['getset'],
      zabjk = tlzqf5['__newvec'],
      x4y_n0 = laya['utils']['Browser'],
      cr3xy = laya['events']['Event'],
      y3rx0n = laya['events']['EventDispatcher'],
      m30rc = laya['resource']['HTMLImage'],
      qtl95f = laya['utils']['Handler'],
      absd$2 = laya['display']['Input'],
      lt5zqh = laya['net']['Loader'],
      eu1p6 = laya['maths']['Matrix'],
      ge6u1p = laya['renders']['Render'],
      eo197v = laya['utils']['RunDriver'],
      qhajkz = laya['media']['Sound'],
      jbakh2 = laya['media']['SoundChannel'],
      jk2bha = laya['media']['SoundManager'],
      tql5f = laya['display']['Stage'],
      ug6p = laya['net']['URL'],
      fo59l = laya['utils']['Utils'],
      kqahz = function () {
    function yx8_4() {}return lzkhq(yx8_4, 'laya.wx.mini.MiniAdpter'), yx8_4['getJson'] = function (bahjzk) {
      return JSON['parse'](bahjzk);
    }, yx8_4['init'] = function (pue61, adb$s) {
      pue61 === void 0x0 && (pue61 = ![]), adb$s === void 0x0 && (adb$s = ![]);if (yx8_4['_inited']) return;yx8_4['window'] = window;if (yx8_4['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;yx8_4['_inited'] = !![], yx8_4['isZiYu'] = adb$s, yx8_4['isPosMsgYu'] = pue61, yx8_4['EnvConfig'] = {}, !yx8_4['isZiYu'] && (zl5qt['setNativeFileDir']('/layaairGame'), zl5qt['existDir'](zl5qt['fileNativeDir'], qtl95f['create'](yx8_4, yx8_4['onMkdirCallBack']))), yx8_4['window']['focus'] = function () {}, tlzqf5['getUrlPath'] = function () {}, yx8_4['window']['logtime'] = function (yn4x_) {}, yx8_4['window']['alertTimeLog'] = function (ja2dk) {}, yx8_4['window']['resetShareInfo'] = function () {}, yx8_4['window']['CanvasRenderingContext2D'] = function () {}, yx8_4['window']['CanvasRenderingContext2D']['prototype'] = yx8_4['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yx8_4['window']['document']['body']['appendChild'] = function () {}, yx8_4['EnvConfig']['pixelRatioInt'] = 0x0, eo197v['getPixelRatio'] = yx8_4['pixelRatio'], yx8_4['_preCreateElement'] = x4y_n0['createElement'], x4y_n0['createElement'] = yx8_4['createElement'], eo197v['createShaderCondition'] = yx8_4['createShaderCondition'], fo59l['parseXMLFromString'] = yx8_4['parseXMLFromString'], absd$2['_createInputElement'] = yx4n_8['_createInputElement'], yx8_4['EnvConfig']['load'] = lt5zqh['prototype']['load'], lt5zqh['prototype']['load'] = bs2$a['prototype']['load'], yx8_4['isZiYu'] && pue61 && wx['onMessage'](function (dab$k) {
        dab$k['isLoad'] && (zl5qt['ziyuFileData'][dab$k['url']] = dab$k['data']);
      });
    }, yx8_4['onMkdirCallBack'] = function (hzjbka, lzh5qt) {
      if (!hzjbka) zl5qt['filesListObj'] = JSON['parse'](lzh5qt['data']);
    }, yx8_4['pixelRatio'] = function () {
      if (!yx8_4['EnvConfig']['pixelRatioInt']) try {
        var kjhb2a = wx['getSystemInfoSync']();return yx8_4['EnvConfig']['pixelRatioInt'] = kjhb2a['pixelRatio'], kjhb2a = kjhb2a, kjhb2a['pixelRatio'];
      } catch (iw3m) {}return yx8_4['EnvConfig']['pixelRatioInt'];
    }, yx8_4['createElement'] = function (x_8sn4) {
      if (x_8sn4 == 'canvas') {
        var qft5l;return yx8_4['idx'] == 0x1 ? yx8_4['isZiYu'] ? (qft5l = sharedCanvas, qft5l['style'] = {}) : qft5l = window['canvas'] : qft5l = window['wx']['createCanvas'](), yx8_4['idx']++, qft5l;
      } else {
        if (x_8sn4 == 'textarea' || x_8sn4 == 'input') return yx8_4['onCreateInput'](x_8sn4);else {
          if (x_8sn4 == 'div') {
            var e1gv6 = yx8_4['_preCreateElement'](x_8sn4);return e1gv6['contains'] = function (lkzj) {
              return null;
            }, e1gv6['removeChild'] = function (q5fl9) {}, e1gv6;
          } else return yx8_4['_preCreateElement'](x_8sn4);
        }
      }
    }, yx8_4['onCreateInput'] = function (jzqhl) {
      var v7e91o = yx8_4['_preCreateElement'](jzqhl);return v7e91o['focus'] = yx4n_8['wxinputFocus'], v7e91o['blur'] = yx4n_8['wxinputblur'], v7e91o['style'] = {}, v7e91o['value'] = 0x0, v7e91o['parentElement'] = {}, v7e91o['placeholder'] = {}, v7e91o['type'] = {}, v7e91o['setColor'] = function (yx3n0r) {}, v7e91o['setType'] = function (y0r3nx) {}, v7e91o['setFontFace'] = function (_$s8d) {}, v7e91o['addEventListener'] = function (ve6g1u) {}, v7e91o['contains'] = function (q5fz) {
        return null;
      }, v7e91o['removeChild'] = function (c03ry) {}, v7e91o;
    }, yx8_4['createShaderCondition'] = function ($4sd8_) {
      var _ny3 = this,
          hqtjl = function () {
        var o17 = $4sd8_;return _ny3[$4sd8_['replace']('this.', '')];
      };return hqtjl;
    }, yx8_4['EnvConfig'] = null, yx8_4['window'] = null, yx8_4['_preCreateElement'] = null, yx8_4['_inited'] = ![], yx8_4['wxRequest'] = null, yx8_4['systemInfo'] = null, yx8_4['version'] = '0.0.1', yx8_4['isZiYu'] = ![], yx8_4['isPosMsgYu'] = ![], yx8_4['parseXMLFromString'] = function (r3yx) {
      var yx_04n, y4_x0;r3yx = r3yx['replace'](/>\s+</g, '><');try {
        yx_04n = new window['Parser']['DOMParser']()['parseFromString'](r3yx, 'text/xml');
      } catch (ajbhk) {
        throw '需要引入xml解析库文件';
      }return yx_04n;
    }, yx8_4['idx'] = 0x1, yx8_4;
  }(),
      pu6ge1 = function () {
    function d2bak$() {}lzkhq(d2bak$, 'laya.wx.mini.MiniImage');var ue6gv1 = d2bak$['prototype'];return ue6gv1['_loadImage'] = function (hkjlzq) {
      var zha = this,
          mcw3i = ![];hkjlzq['indexOf']('layaNativeDir/') == -0x1 && (mcw3i = !![], hkjlzq = ug6p['formatURL'](hkjlzq));if (!zl5qt['getFileInfo'](hkjlzq)) {
        if (hkjlzq['indexOf']('http://') != -0x1 || hkjlzq['indexOf']('https://') != -0x1) zl5qt['downImg'](hkjlzq, new qtl95f(d2bak$, d2bak$['onDownImgCallBack'], [hkjlzq, zha]), hkjlzq);else d2bak$['onCreateImage'](hkjlzq, zha, !![]);
      } else d2bak$['onCreateImage'](hkjlzq, zha, !mcw3i);
    }, d2bak$['onDownImgCallBack'] = function (x3n_y0, adb, s$82) {
      if (!s$82) d2bak$['onCreateImage'](x3n_y0, adb);else adb['onError'](null);
    }, d2bak$['onCreateImage'] = function (r30cym, x4n_0y, flqtz) {
      flqtz === void 0x0 && (flqtz = ![]);var f1vo9;if (!flqtz) {
        var ry03n = zl5qt['getFileInfo'](r30cym),
            rmw3i = ry03n['md5'];f1vo9 = zl5qt['getFileNativePath'](rmw3i);
      } else f1vo9 = r30cym;if (x4n_0y['imgCache'] == null) x4n_0y['imgCache'] = {};var epug1;function sbd2$a() {
        epug1['onload'] = null, epug1['onerror'] = null, delete x4n_0y['imgCache'][r30cym];
      };var _n4s8$ = function () {
        sbd2$a(), x4n_0y['onLoaded'](epug1);
      },
          hkqzja = function () {
        sbd2$a(), x4n_0y['event']('error', 'Load image failed');
      };x4n_0y['_type'] == 'nativeimage' ? (epug1 = new x4y_n0['window']['Image'](), epug1['crossOrigin'] = '', epug1['onload'] = _n4s8$, epug1['onerror'] = hkqzja, epug1['src'] = f1vo9, x4n_0y['imgCache'][r30cym] = epug1) : new m30rc['create'](f1vo9, { 'onload': _n4s8$, 'onerror': hkqzja, 'onCreate': function (_s4$n) {
          epug1 = _s4$n, x4n_0y['imgCache'][r30cym] = _s4$n;
        } });
    }, d2bak$;
  }(),
      yx4n_8 = function () {
    function e719vo() {}return lzkhq(e719vo, 'laya.wx.mini.MiniInput'), e719vo['_createInputElement'] = function () {
      absd$2['_initInput'](absd$2['area'] = x4y_n0['createElement']('textarea')), absd$2['_initInput'](absd$2['input'] = x4y_n0['createElement']('input')), absd$2['inputContainer'] = x4y_n0['createElement']('div'), absd$2['inputContainer']['style']['position'] = 'absolute', absd$2['inputContainer']['style']['zIndex'] = 0x186a0, x4y_n0['container']['appendChild'](absd$2['inputContainer']), absd$2['inputContainer']['setPos'] = function (hzkqja, f71vo9) {
        absd$2['inputContainer']['style']['left'] = hzkqja + 'px', absd$2['inputContainer']['style']['top'] = f71vo9 + 'px';
      }, tlzqf5['stage']['on']('resize', null, e719vo['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (f5lzqt) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), jk2bha['_soundClass'] = fv75o9, jk2bha['_musicClass'] = fv75o9;
    }, e719vo['_onStageResize'] = function () {
      var nx_40y = tlzqf5['stage']['_canvasTransform']['identity']();nx_40y['scale'](x4y_n0['width'] / ge6u1p['canvas']['width'] / eo197v['getPixelRatio'](), x4y_n0['height'] / ge6u1p['canvas']['height'] / eo197v['getPixelRatio']());
    }, e719vo['wxinputFocus'] = function (hbk2) {
      var akbjh = absd$2['inputElement']['target'];if (akbjh && !akbjh['editable']) return;kqahz['window']['wx']['offKeyboardConfirm'](), kqahz['window']['wx']['offKeyboardInput'](), kqahz['window']['wx']['showKeyboard']({ 'defaultValue': akbjh['text'], 'maxLength': akbjh['maxChars'], 'multiple': akbjh['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (db2a$) {}, 'fail': function (sd) {} }), kqahz['window']['wx']['onKeyboardConfirm'](function (n_0y4x) {
        var hjk2ba = n_0y4x ? n_0y4x['value'] : '';akbjh['text'] = hjk2ba, akbjh['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), kqahz['window']['wx']['onKeyboardInput'](function (xcy0r) {
        var xn0y4_ = xcy0r ? xcy0r['value'] : '';if (!akbjh['multiline']) {
          if (xn0y4_['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }akbjh['text'] = xn0y4_, akbjh['event']('input');
      });
    }, e719vo['inputEnter'] = function () {
      absd$2['inputElement']['target']['focus'] = ![];
    }, e719vo['wxinputblur'] = function () {
      e719vo['hideKeyboard']();
    }, e719vo['hideKeyboard'] = function () {
      kqahz['window']['wx']['offKeyboardConfirm'](), kqahz['window']['wx']['offKeyboardInput'](), kqahz['window']['wx']['hideKeyboard']({ 'success': function (e1o97v) {
          console['log']('隐藏键盘');
        }, 'fail': function (_nyx84) {
          console['log']('隐藏键盘出错:' + (_nyx84 ? _nyx84['errMsg'] : ''));
        } });
    }, e719vo;
  }(),
      bs2$a = function () {
    function qlhjzk() {}lzkhq(qlhjzk, 'laya.wx.mini.MiniLoader');var e17gvo = qlhjzk['prototype'];return e17gvo['load'] = function (s4d8$, ft9l5q, ynx3r, ue1vg6, m30ic) {
      ynx3r === void 0x0 && (ynx3r = !![]), m30ic === void 0x0 && (m30ic = ![]);var mc3r0i = this;mc3r0i['_url'] = s4d8$;if (s4d8$['indexOf']('data:image') === 0x0) mc3r0i['_type'] = ft9l5q = 'image';else mc3r0i['_type'] = ft9l5q || (ft9l5q = mc3r0i['getTypeFromUrl'](s4d8$));mc3r0i['_cache'] = ynx3r, mc3r0i['_data'] = null;var r0y3nx = 'ascii';if (s4d8$['indexOf']('.fnt') != -0x1) r0y3nx = 'utf8';else ft9l5q == 'arraybuffer' && (r0y3nx = '');;var g17vo = fo59l['getFileExtension'](s4d8$);if (qlhjzk['_fileTypeArr']['indexOf'](g17vo) != -0x1) kqahz['EnvConfig']['load']['call'](this, s4d8$, ft9l5q, ynx3r, ue1vg6, m30ic);else {
        if (!zl5qt['getFileInfo'](s4d8$)) {
          if (s4d8$['indexOf']('layaNativeDir/') != -0x1) {
            if (kqahz['isZiYu']) {
              var cwm3ir = zl5qt['ziyuFileData'][s4d8$];mc3r0i['onLoaded'](cwm3ir);return;
            } else {
              cosnole['log']('read read'), zl5qt['read'](s4d8$, r0y3nx, new qtl95f(qlhjzk, qlhjzk['onReadNativeCallBack'], [r0y3nx, s4d8$, ft9l5q, ynx3r, ue1vg6, m30ic, mc3r0i]));return;
            }
          }if (ug6p['rootPath'] == '') var y0rmc3 = s4d8$;else y0rmc3 = s4d8$['split'](ug6p['rootPath'])[0x0];s4d8$['indexOf']('http://') != -0x1 || s4d8$['indexOf']('https://') != -0x1 ? kqahz['EnvConfig']['load']['call'](mc3r0i, s4d8$, ft9l5q, ynx3r, ue1vg6, m30ic) : zl5qt['readFile'](y0rmc3, r0y3nx, new qtl95f(qlhjzk, qlhjzk['onReadNativeCallBack'], [r0y3nx, s4d8$, ft9l5q, ynx3r, ue1vg6, m30ic, mc3r0i]), s4d8$);
        } else kqahz['EnvConfig']['load']['call'](this, s4d8$, ft9l5q, ynx3r, ue1vg6, m30ic);
      }
    }, e17gvo['resMgrLoad'] = function (mc0r3, xy0nr3, t59lqf, n8_yx4, tzjlq, o79tf5, zhkjlq) {
      t59lqf === void 0x0 && (t59lqf = 0x0), n8_yx4 === void 0x0 && (n8_yx4 = ![]), tzjlq === void 0x0 && (tzjlq = ![]), o79tf5 === void 0x0 && (o79tf5 = 0x0), zhkjlq === void 0x0 && (zhkjlq = 0x3), mc0r3['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', mc0r3), kqahz['EnvConfig']['resMgrLoad'](mc0r3, (o17vf, o9tfl, a$bk2) => {
        qlhjzk['prototype']['resMgrLoadCallBack'](o17vf, o9tfl, a$bk2, xy0nr3);
      }, t59lqf, n8_yx4, tzjlq, o79tf5, zhkjlq);
    }, e17gvo['resMgrLoadCallBack'] = function (o5t9lf, h2akj, o95lt, nyxr3) {
      console['log']('buff:::', o5t9lf, o95lt, zl5qt['fileNativeDir'] + '///' + zl5qt['fileListName']), nyxr3(o5t9lf, h2akj, o95lt);
    }, e17gvo['clearRes'] = function (_4ny0, tqhzl) {
      tqhzl === void 0x0 && (tqhzl = ![]);var d428s = this;d428s['clearRes'](_4ny0, tqhzl);var qzl5 = zl5qt['getFileInfo'](_4ny0);if (qzl5 && (_4ny0['indexOf']('http://') != -0x1 || _4ny0['indexOf']('https://') != -0x1)) {
        var guv17e = qzl5['md5'],
            ba2hkj = zl5qt['getFileNativePath'](guv17e);zl5qt['remove'](ba2hkj);
      }
    }, qlhjzk['onReadNativeCallBack'] = function (lot5f, cri3m, b2kjah, dbjak2, n3_yx, lzh5, xn30_, kbdj2, abkjd) {
      dbjak2 === void 0x0 && (dbjak2 = !![]), lzh5 === void 0x0 && (lzh5 = ![]), kbdj2 === void 0x0 && (kbdj2 = 0x0);if (!kbdj2) {
        var ymc30;if (b2kjah == 'json' || b2kjah == 'atlas') ymc30 = kqahz['getJson'](abkjd['data']);else b2kjah == 'xml' ? ymc30 = fo59l['parseXMLFromString'](abkjd['data']) : ymc30 = abkjd['data'];xn30_['onLoaded'](ymc30), !kqahz['isZiYu'] && kqahz['isPosMsgYu'] && b2kjah != 'arraybuffer' && wx['postMessage']({ 'url': cri3m, 'data': ymc30, 'isLoad': !![] });
      } else kbdj2 == 0x1 && kqahz['EnvConfig']['load']['call'](xn30_, cri3m, b2kjah, dbjak2, n3_yx, lzh5);
    }, e1ugv(qlhjzk, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qlhjzk;
  }(),
      zl5qt = function (f97o5) {
    function u7v1g() {
      u7v1g['__super']['call'](this);;
    }return lzkhq(u7v1g, 'laya.wx.mini.MiniFileMgr', f97o5), u7v1g['isLoadFile'] = function (_yx3n) {
      return u7v1g['_fileTypeArr']['indexOf'](_yx3n) != -0x1 ? !![] : ![];
    }, u7v1g['getFileInfo'] = function (khb2ja) {
      var z5ftl = khb2ja['split']('?')[0x0],
          sdba$ = u7v1g['filesListObj'][z5ftl];if (sdba$ == null) return null;else return sdba$;return null;
    }, u7v1g['onFileUpdate'] = function (x3n_y, v6ueg) {
      var lkzqh = x3n_y['split']('/'),
          o5f9t7 = lkzqh[lkzqh['length'] - 0x1],
          d_4$8 = u7v1g['getFileInfo'](v6ueg);if (d_4$8 == null) u7v1g['onSaveFile'](v6ueg, o5f9t7);else {
        if (d_4$8['readyUrl'] != v6ueg) u7v1g['remove'](o5f9t7, v6ueg);
      }
    }, u7v1g['exits'] = function (og7v1e, ds$284) {
      var $ds_8 = u7v1g['getFileNativePath'](og7v1e);u7v1g['fs']['getFileInfo']({ 'filePath': $ds_8, 'success': function (x8y_4n) {
          ds$284 != null && ds$284['runWith']([0x0, x8y_4n]);
        }, 'fail': function (o9fl) {
          ds$284 != null && ds$284['runWith']([0x1, o9fl]);
        } });
    }, u7v1g['read'] = function (lhkjz, ycm30r, jqlhkz, xy0) {
      ycm30r === void 0x0 && (ycm30r = 'ascill'), xy0 === void 0x0 && (xy0 = '');var gev61;xy0 != '' ? gev61 = u7v1g['getFileNativePath'](lhkjz) : gev61 = lhkjz, u7v1g['fs']['readFile']({ 'filePath': gev61, 'encoding': ycm30r, 'success': function (fo5v97) {
          jqlhkz != null && jqlhkz['runWith']([0x0, fo5v97]);
        }, 'fail': function (t9fl) {
          if (t9fl && xy0 != '') u7v1g['down'](xy0, ycm30r, jqlhkz, xy0);else jqlhkz != null && jqlhkz['runWith']([0x1]);
        } });
    }, u7v1g['readNativeFile'] = function (c3rwi, bd$as2) {
      u7v1g['fs']['readFile']({ 'filePath': c3rwi, 'encoding': '', 'success': function (sbad2$) {
          bd$as2 != null && bd$as2['runWith']([0x0]);
        }, 'fail': function (fqzl5) {
          bd$as2 != null && bd$as2['runWith']([0x1]);
        } });
    }, u7v1g['down'] = function (u61ge, zlqhk, kb$, hkzq) {
      zlqhk === void 0x0 && (zlqhk = 'ascill'), hkzq === void 0x0 && (hkzq = '');var mr3cwi = u7v1g['getFileNativePath'](hkzq),
          v957o = u7v1g['wxdown']({ 'url': u61ge, 'filePath': mr3cwi, 'success': function (kjzaq) {
          if (kjzaq['statusCode'] === 0xc8) u7v1g['readFile'](kjzaq['filePath'], zlqhk, kb$, hkzq);
        }, 'fail': function (ci0m3) {
          kb$ != null && kb$['runWith']([0x1, ci0m3]);
        } });v957o['onProgressUpdate'](function (_84yn) {
        kb$ != null && kb$['runWith']([0x2, _84yn['progress']]);
      });
    }, u7v1g['readFile'] = function (lf5o9t, ds4$_, abds2, rmic0) {
      ds4$_ === void 0x0 && (ds4$_ = 'ascill'), rmic0 === void 0x0 && (rmic0 = ''), u7v1g['fs']['readFile']({ 'filePath': lf5o9t, 'encoding': ds4$_, 'success': function (qjzhk) {
          if (lf5o9t['indexOf']('http://') != -0x1 || lf5o9t['indexOf']('https://') != -0x1) u7v1g['onFileUpdate'](lf5o9t, rmic0);abds2 != null && abds2['runWith']([0x0, qjzhk]);
        }, 'fail': function (qhkl) {
          if (qhkl) abds2 != null && abds2['runWith']([0x1, qhkl]);
        } });
    }, u7v1g['downImg'] = function (_4xyn8, f9ov5, lqtz5f) {
      lqtz5f === void 0x0 && (lqtz5f = '');var ftq9l5 = u7v1g['wxdown']({ 'url': _4xyn8, 'success': function (l5f) {
          l5f['statusCode'] === 0xc8 && u7v1g['copyFile'](l5f['tempFilePath'], lqtz5f, f9ov5);
        }, 'fail': function (thjqzl) {
          f9ov5 != null && f9ov5['runWith']([0x1, thjqzl]);
        } });
    }, u7v1g['copyFile'] = function (e1go7v, ri3wc, x0cyr3) {
      var x4_8sn = e1go7v['split']('/'),
          $bdsa = x4_8sn[x4_8sn['length'] - 0x1],
          ri3wmc = ri3wc['split']('?')[0x0],
          kqhlz = u7v1g['getFileInfo'](ri3wc),
          o79e1v = u7v1g['getFileNativePath']($bdsa);u7v1g['fs']['copyFile']({ 'srcPath': e1go7v, 'destPath': o79e1v, 'success': function (o1ev7) {
          if (!kqhlz) u7v1g['onSaveFile'](ri3wc, $bdsa), x0cyr3 != null && x0cyr3['runWith']([0x0]);else {
            if (kqhlz['readyUrl'] != ri3wc) u7v1g['remove']($bdsa, ri3wc, x0cyr3);
          }
        }, 'fail': function ($d42s) {
          x0cyr3 != null && x0cyr3['runWith']([0x1, $d42s]);
        } });
    }, u7v1g['getFileNativePath'] = function (ka2b) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ka2b;
    }, u7v1g['remove'] = function (zjba, d82$, olft) {
      d82$ === void 0x0 && (d82$ = '');var o91e7 = u7v1g['getFileInfo'](d82$),
          t9f5lo = u7v1g['getFileNativePath'](o91e7['md5']);tlzqf5['loader']['clearRes'](o91e7['readyUrl']), u7v1g['fs']['unlink']({ 'filePath': t9f5lo, 'success': function (dabj2) {
          if (d82$ != '') u7v1g['onSaveFile'](d82$, zjba);olft != null && olft['runWith']([0x0]);
        }, 'fail': function (vg71) {} });
    }, u7v1g['onSaveFile'] = function (eug17v, dab2$k) {
      var g7voe1 = eug17v['split']('?')[0x0];u7v1g['filesListObj'][g7voe1] = { 'md5': dab2$k, 'readyUrl': eug17v }, u7v1g['fs']['writeFile']({ 'filePath': u7v1g['fileNativeDir'] + '/' + u7v1g['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](u7v1g['filesListObj']), 'success': function (tf79) {
          console['log']('写入测试测试成功：', tf79);
        }, 'fail': function (b2kda$) {
          console['log']('写入测试测试失败：', b2kda$);
        } });
    }, u7v1g['existDir'] = function (fztl, qhz5) {
      u7v1g['fs']['mkdir']({ 'dirPath': fztl, 'success': function (f9to75) {
          qhz5 != null && qhz5['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (_x3yn) {
          if (_x3yn['errMsg']['indexOf']('file already exists') != -0x1) u7v1g['readSync'](u7v1g['fileListName'], 'utf8', qhz5);else qhz5 != null && qhz5['runWith']([0x1, _x3yn]);
        } });
    }, u7v1g['readSync'] = function (ryn0x3, ug7v1, akjq, gv61e) {
      ug7v1 === void 0x0 && (ug7v1 = 'ascill'), gv61e === void 0x0 && (gv61e = '');var bd2as$ = u7v1g['getFileNativePath'](ryn0x3),
          jh2ak;try {
        jh2ak = u7v1g['fs']['readFileSync'](bd2as$), akjq != null && akjq['runWith']([0x0, { 'data': jh2ak }]);
      } catch (aqkzhj) {
        akjq != null && akjq['runWith']([0x1]);
      }
    }, u7v1g['readCache'] = function () {}, u7v1g['writeCache'] = function (dk2j) {
      var xny3_ = readyUrl['split']('?')[0x0];u7v1g['filesListObj'][xny3_] = { 'md5': md5Name, 'readyUrl': readyUrl }, u7v1g['fs']['writeFile']({ 'filePath': u7v1g['fileNativeDir'] + '/' + u7v1g['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](u7v1g['filesListObj']), 'success': function (l59qtf) {}, 'fail': function (flto) {} });
    }, u7v1g['setNativeFileDir'] = function (zt5qhl) {
      u7v1g['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zt5qhl;
    }, u7v1g['filesListObj'] = {}, u7v1g['fileNativeDir'] = null, u7v1g['fileListName'] = 'layaairfiles.txt', u7v1g['ziyuFileData'] = {}, e1ugv(u7v1g, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), u7v1g;
  }(y3rx0n),
      fv75o9 = function (xr3n) {
    function xr0y() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], xr0y['__super']['call'](this), this['_sound'] = xr0y['_createSound']();
    }lzkhq(xr0y, 'laya.wx.mini.MiniSound', xr3n);var e6vug = xr0y['prototype'];return e6vug['load'] = function (ve9o71) {
      var zkjahb = this;ve9o71 = ug6p['formatURL'](ve9o71), this['url'] = ve9o71;if (xr0y['_audioCache'][ve9o71]) {
        this['event']('complete');return;
      }function bkaj() {
        if (xr0y['_null'] != undefined) zkjahb['_sound']['onCanplay'](xr0y['_null']), zkjahb['_sound']['onError'](xr0y['_null']);else try {
          zkjahb['_sound']['onCanplay'](null), zkjahb['_sound']['onError'](null), xr0y['_null'] = null;
        } catch (ds2ab) {
          console['warn']('[wxmini] _clearSound:' + ds2ab), zkjahb['_sound']['onCanplay'](jahk), zkjahb['_sound']['onError'](jahk), xr0y['_null'] = jahk;
        }
      }function ue1g6p() {
        bkaj(), z5ltqh['loaded'] = !![], z5ltqh['event']('complete'), xr0y['_audioCache'][z5ltqh['url']] = z5ltqh;
      }function x03ny_(qhzl5) {
        console['error']('errCode=' + qhzl5['errCode'] + '  errMsg=' + qhzl5['errMsg']), bkaj(), z5ltqh['event']('error');
      }function jahk() {}this['_sound']['onCanplay'](ue1g6p), this['_sound']['onError'](x03ny_), this['_sound']['src'] = ve9o71;var z5ltqh = this;
    }, e6vug['play'] = function (ue6p, qhzja) {
      ue6p === void 0x0 && (ue6p = 0x0), qhzja === void 0x0 && (qhzja = 0x0);var veug17;if (this['url'] == jk2bha['_tMusic']) {
        if (!xr0y['_musicAudio']) xr0y['_musicAudio'] = xr0y['_createSound']();veug17 = xr0y['_musicAudio'];
      } else veug17 = xr0y['_createSound']();veug17['src'] = this['url'];var qjlh = new hjaqkz(veug17);return qjlh['url'] = this['url'], qjlh['loops'] = qhzja, qjlh['startTime'] = ue6p, qjlh['play'](), jk2bha['addChannel'](qjlh), qjlh;
    }, e6vug['dispose'] = function () {
      var xn0ry3 = xr0y['_audioCache'][this['url']];xn0ry3 && (xn0ry3['src'] = '', delete xr0y['_audioCache'][this['url']]);
    }, habzj(0x0, e6vug, 'duration', function () {
      return this['_sound']['duration'];
    }), xr0y['_createSound'] = function () {
      return xr0y['_id']++, kqahz['window']['wx']['createInnerAudioContext']();
    }, xr0y['_musicAudio'] = null, xr0y['_id'] = 0x0, xr0y['_audioCache'] = {}, xr0y['_null'] = undefined, xr0y;
  }(y3rx0n),
      hjaqkz = function (nx04) {
    function ic3r0(qhjklz) {
      this['_audio'] = null, this['_onEnd'] = null, ic3r0['__super']['call'](this), this['_audio'] = qhjklz, this['_onEnd'] = fo59l['bind'](this['__onEnd'], this), qhjklz['onEnded'](this['_onEnd']);
    }lzkhq(ic3r0, 'laya.wx.mini.MiniSoundChannel', nx04);var jahq = ic3r0['prototype'];return jahq['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (tlzqf5['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jahq['__onNull'] = function () {}, jahq['play'] = function () {
      this['isStopped'] = ![], jk2bha['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, jahq['stop'] = function () {
      this['isStopped'] = !![], jk2bha['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ic3r0['_null'] != undefined) this['_audio']['onEnded'](ic3r0['_null']);else try {
        this['_audio']['onEnded'](null), ic3r0['_null'] = null;
      } catch (bha2kj) {
        console['warn']('[wxmini] stop:' + bha2kj), this['_audio']['onEnded'](fo59l['bind'](this['__onNull'], this)), ic3r0['_null'] = fo59l['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, jahq['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, jahq['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], jk2bha['addChannel'](this), this['_audio']['play']();
    }, habzj(0x0, jahq, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), habzj(0x0, jahq, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), habzj(0x0, jahq, 'volume', function () {
      return 0x1;
    }, function (yx48_) {}), ic3r0['_null'] = undefined, ic3r0;
  }(jbakh2);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var flqt5z in Laya) {
    var kd2bja = Laya[flqt5z];kd2bja && kd2bja['__isclass'] && (exports[flqt5z] = kd2bja);
  }
});