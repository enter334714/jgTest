var W = wx.$l;
(function (window, document, tlhjz) {
  var k$ad = tlhjz['un'],
      f75ov = tlhjz['uns'],
      s2db$a = tlhjz['static'],
      b2hjka = tlhjz['class'],
      ot5f97 = tlhjz['getset'],
      rim0c3 = tlhjz['__newvec'],
      azkqjh = laya['utils']['Browser'],
      $48d_ = laya['events']['Event'],
      rxc3y0 = laya['events']['EventDispatcher'],
      u7e1v = laya['resource']['HTMLImage'],
      lzkjqh = laya['utils']['Handler'],
      b2as$d = laya['display']['Input'],
      d28s$b = laya['net']['Loader'],
      n48x_y = laya['maths']['Matrix'],
      lh5qzt = laya['renders']['Render'],
      veo17 = laya['utils']['RunDriver'],
      ov75f9 = laya['media']['Sound'],
      f7ov19 = laya['media']['SoundChannel'],
      gvo7e1 = laya['media']['SoundManager'],
      f1vo9 = laya['display']['Stage'],
      p1 = laya['net']['URL'],
      rwicm = laya['utils']['Utils'],
      n_y8x = function () {
    function ynx30r() {}return b2hjka(ynx30r, 'laya.wx.mini.MiniAdpter'), ynx30r['getJson'] = function (jkbad) {
      return JSON['parse'](jkbad);
    }, ynx30r['init'] = function (ry3xn0, $ad) {
      ry3xn0 === void 0x0 && (ry3xn0 = ![]), $ad === void 0x0 && ($ad = ![]);if (ynx30r['_inited']) return;ynx30r['window'] = window;if (ynx30r['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ynx30r['_inited'] = !![], ynx30r['isZiYu'] = $ad, ynx30r['isPosMsgYu'] = ry3xn0, ynx30r['EnvConfig'] = {}, !ynx30r['isZiYu'] && (jahz['setNativeFileDir']('/layaairGame'), jahz['existDir'](jahz['fileNativeDir'], lzkjqh['create'](ynx30r, ynx30r['onMkdirCallBack']))), ynx30r['window']['focus'] = function () {}, tlhjz['getUrlPath'] = function () {}, ynx30r['window']['logtime'] = function (kh2b) {}, ynx30r['window']['alertTimeLog'] = function (e6uvg1) {}, ynx30r['window']['resetShareInfo'] = function () {}, ynx30r['window']['CanvasRenderingContext2D'] = function () {}, ynx30r['window']['CanvasRenderingContext2D']['prototype'] = ynx30r['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ynx30r['window']['document']['body']['appendChild'] = function () {}, ynx30r['EnvConfig']['pixelRatioInt'] = 0x0, veo17['getPixelRatio'] = ynx30r['pixelRatio'], ynx30r['_preCreateElement'] = azkqjh['createElement'], azkqjh['createElement'] = ynx30r['createElement'], veo17['createShaderCondition'] = ynx30r['createShaderCondition'], rwicm['parseXMLFromString'] = ynx30r['parseXMLFromString'], b2as$d['_createInputElement'] = cmiw3['_createInputElement'], ynx30r['EnvConfig']['load'] = d28s$b['prototype']['load'], d28s$b['prototype']['load'] = d48s2$['prototype']['load'], ynx30r['isZiYu'] && ry3xn0 && wx['onMessage'](function ($s2dab) {
        $s2dab['isLoad'] && (jahz['ziyuFileData'][$s2dab['url']] = $s2dab['data']);
      });
    }, ynx30r['onMkdirCallBack'] = function (bjza, aqhjkz) {
      if (!bjza) jahz['filesListObj'] = JSON['parse'](aqhjkz['data']);
    }, ynx30r['pixelRatio'] = function () {
      if (!ynx30r['EnvConfig']['pixelRatioInt']) try {
        var v7f91o = wx['getSystemInfoSync']();return ynx30r['EnvConfig']['pixelRatioInt'] = v7f91o['pixelRatio'], v7f91o = v7f91o, v7f91o['pixelRatio'];
      } catch (ueg1v7) {}return ynx30r['EnvConfig']['pixelRatioInt'];
    }, ynx30r['createElement'] = function (ft795) {
      if (ft795 == 'canvas') {
        var mirc;return ynx30r['idx'] == 0x1 ? ynx30r['isZiYu'] ? (mirc = sharedCanvas, mirc['style'] = {}) : mirc = window['canvas'] : mirc = window['wx']['createCanvas'](), ynx30r['idx']++, mirc;
      } else {
        if (ft795 == 'textarea' || ft795 == 'input') return ynx30r['onCreateInput'](ft795);else {
          if (ft795 == 'div') {
            var qlth5 = ynx30r['_preCreateElement'](ft795);return qlth5['contains'] = function (e6v1gu) {
              return null;
            }, qlth5['removeChild'] = function (ego1v) {}, qlth5;
          } else return ynx30r['_preCreateElement'](ft795);
        }
      }
    }, ynx30r['onCreateInput'] = function (ic3r0) {
      var y03x = ynx30r['_preCreateElement'](ic3r0);return y03x['focus'] = cmiw3['wxinputFocus'], y03x['blur'] = cmiw3['wxinputblur'], y03x['style'] = {}, y03x['value'] = 0x0, y03x['parentElement'] = {}, y03x['placeholder'] = {}, y03x['type'] = {}, y03x['setColor'] = function (bzaj) {}, y03x['setType'] = function (g17e) {}, y03x['setFontFace'] = function (hjqzak) {}, y03x['addEventListener'] = function (mr30y) {}, y03x['contains'] = function (qhkzaj) {
        return null;
      }, y03x['removeChild'] = function (ajb2d) {}, y03x;
    }, ynx30r['createShaderCondition'] = function (hqtl5z) {
      var d82bs$ = this,
          cm0ir3 = function () {
        var dbkja2 = hqtl5z;return d82bs$[hqtl5z['replace']('this.', '')];
      };return cm0ir3;
    }, ynx30r['EnvConfig'] = null, ynx30r['window'] = null, ynx30r['_preCreateElement'] = null, ynx30r['_inited'] = ![], ynx30r['wxRequest'] = null, ynx30r['systemInfo'] = null, ynx30r['version'] = '0.0.1', ynx30r['isZiYu'] = ![], ynx30r['isPosMsgYu'] = ![], ynx30r['parseXMLFromString'] = function (hklqz) {
      var mc30, n84y;hklqz = hklqz['replace'](/>\s+</g, '><');try {
        mc30 = new window['Parser']['DOMParser']()['parseFromString'](hklqz, 'text/xml');
      } catch (asd$b) {
        throw '需要引入xml解析库文件';
      }return mc30;
    }, ynx30r['idx'] = 0x1, ynx30r;
  }(),
      q5l9tf = function () {
    function qf9l5() {}b2hjka(qf9l5, 'laya.wx.mini.MiniImage');var zqh5lt = qf9l5['prototype'];return zqh5lt['_loadImage'] = function (tq9fl) {
      var tfz5ql = this,
          ajbk2h = ![];tq9fl['indexOf']('layaNativeDir/') == -0x1 && (ajbk2h = !![], tq9fl = p1['formatURL'](tq9fl));if (!jahz['getFileInfo'](tq9fl)) {
        if (tq9fl['indexOf']('http://') != -0x1 || tq9fl['indexOf']('https://') != -0x1) jahz['downImg'](tq9fl, new lzkjqh(qf9l5, qf9l5['onDownImgCallBack'], [tq9fl, tfz5ql]), tq9fl);else qf9l5['onCreateImage'](tq9fl, tfz5ql, !![]);
      } else qf9l5['onCreateImage'](tq9fl, tfz5ql, !ajbk2h);
    }, qf9l5['onDownImgCallBack'] = function ($_84, mi03rc, ego1v7) {
      if (!ego1v7) qf9l5['onCreateImage']($_84, mi03rc);else mi03rc['onError'](null);
    }, qf9l5['onCreateImage'] = function (a$kb, ri, vo9e1) {
      vo9e1 === void 0x0 && (vo9e1 = ![]);var d$28bs;if (!vo9e1) {
        var c3rw = jahz['getFileInfo'](a$kb),
            of = c3rw['md5'];d$28bs = jahz['getFileNativePath'](of);
      } else d$28bs = a$kb;if (ri['imgCache'] == null) ri['imgCache'] = {};var kbj2ad;function ir03mc() {
        kbj2ad['onload'] = null, kbj2ad['onerror'] = null, delete ri['imgCache'][a$kb];
      };var lt5f = function () {
        ir03mc(), ri['onLoaded'](kbj2ad);
      },
          ds2a = function () {
        ir03mc(), ri['event']('error', 'Load image failed');
      };ri['_type'] == 'nativeimage' ? (kbj2ad = new azkqjh['window']['Image'](), kbj2ad['crossOrigin'] = '', kbj2ad['onload'] = lt5f, kbj2ad['onerror'] = ds2a, kbj2ad['src'] = d$28bs, ri['imgCache'][a$kb] = kbj2ad) : new u7e1v['create'](d$28bs, { 'onload': lt5f, 'onerror': ds2a, 'onCreate': function (eu6v1) {
          kbj2ad = eu6v1, ri['imgCache'][a$kb] = eu6v1;
        } });
    }, qf9l5;
  }(),
      cmiw3 = function () {
    function ljtqh() {}return b2hjka(ljtqh, 'laya.wx.mini.MiniInput'), ljtqh['_createInputElement'] = function () {
      b2as$d['_initInput'](b2as$d['area'] = azkqjh['createElement']('textarea')), b2as$d['_initInput'](b2as$d['input'] = azkqjh['createElement']('input')), b2as$d['inputContainer'] = azkqjh['createElement']('div'), b2as$d['inputContainer']['style']['position'] = 'absolute', b2as$d['inputContainer']['style']['zIndex'] = 0x186a0, azkqjh['container']['appendChild'](b2as$d['inputContainer']), b2as$d['inputContainer']['setPos'] = function (ztlqh, ahzjb) {
        b2as$d['inputContainer']['style']['left'] = ztlqh + 'px', b2as$d['inputContainer']['style']['top'] = ahzjb + 'px';
      }, tlhjz['stage']['on']('resize', null, ljtqh['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (sn_4$8) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), gvo7e1['_soundClass'] = k2abh, gvo7e1['_musicClass'] = k2abh;
    }, ljtqh['_onStageResize'] = function () {
      var m0c3i = tlhjz['stage']['_canvasTransform']['identity']();m0c3i['scale'](azkqjh['width'] / lh5qzt['canvas']['width'] / veo17['getPixelRatio'](), azkqjh['height'] / lh5qzt['canvas']['height'] / veo17['getPixelRatio']());
    }, ljtqh['wxinputFocus'] = function ($sdab) {
      var ve7g1u = b2as$d['inputElement']['target'];if (ve7g1u && !ve7g1u['editable']) return;n_y8x['window']['wx']['offKeyboardConfirm'](), n_y8x['window']['wx']['offKeyboardInput'](), n_y8x['window']['wx']['showKeyboard']({ 'defaultValue': ve7g1u['text'], 'maxLength': ve7g1u['maxChars'], 'multiple': ve7g1u['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (th5qz) {}, 'fail': function (qhzkaj) {} }), n_y8x['window']['wx']['onKeyboardConfirm'](function (jkzhba) {
        var eg7u = jkzhba ? jkzhba['value'] : '';ve7g1u['text'] = eg7u, ve7g1u['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), n_y8x['window']['wx']['onKeyboardInput'](function (x_yn30) {
        var s8d2b$ = x_yn30 ? x_yn30['value'] : '';if (!ve7g1u['multiline']) {
          if (s8d2b$['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ve7g1u['text'] = s8d2b$, ve7g1u['event']('input');
      });
    }, ljtqh['inputEnter'] = function () {
      b2as$d['inputElement']['target']['focus'] = ![];
    }, ljtqh['wxinputblur'] = function () {
      ljtqh['hideKeyboard']();
    }, ljtqh['hideKeyboard'] = function () {
      n_y8x['window']['wx']['offKeyboardConfirm'](), n_y8x['window']['wx']['offKeyboardInput'](), n_y8x['window']['wx']['hideKeyboard']({ 'success': function (l59fq) {
          console['log']('隐藏键盘');
        }, 'fail': function (eg17vu) {
          console['log']('隐藏键盘出错:' + (eg17vu ? eg17vu['errMsg'] : ''));
        } });
    }, ljtqh;
  }(),
      d48s2$ = function () {
    function b8s() {}b2hjka(b8s, 'laya.wx.mini.MiniLoader');var qjkhlz = b8s['prototype'];return qjkhlz['load'] = function (ol9t5, zftq5l, thzql5, _n4$s8, peg6) {
      thzql5 === void 0x0 && (thzql5 = !![]), peg6 === void 0x0 && (peg6 = ![]);var d_s8 = this;d_s8['_url'] = ol9t5;if (ol9t5['indexOf']('data:image') === 0x0) d_s8['_type'] = zftq5l = 'image';else d_s8['_type'] = zftq5l || (zftq5l = d_s8['getTypeFromUrl'](ol9t5));d_s8['_cache'] = thzql5, d_s8['_data'] = null;var hzql5t = 'ascii';if (ol9t5['indexOf']('.fnt') != -0x1) hzql5t = 'utf8';else zftq5l == 'arraybuffer' && (hzql5t = '');;var n8_s4$ = rwicm['getFileExtension'](ol9t5);if (b8s['_fileTypeArr']['indexOf'](n8_s4$) != -0x1) n_y8x['EnvConfig']['load']['call'](this, ol9t5, zftq5l, thzql5, _n4$s8, peg6);else {
        if (!jahz['getFileInfo'](ol9t5)) {
          if (ol9t5['indexOf']('layaNativeDir/') != -0x1) {
            if (n_y8x['isZiYu']) {
              var v9eo = jahz['ziyuFileData'][ol9t5];d_s8['onLoaded'](v9eo);return;
            } else {
              cosnole['log']('read read'), jahz['read'](ol9t5, hzql5t, new lzkjqh(b8s, b8s['onReadNativeCallBack'], [hzql5t, ol9t5, zftq5l, thzql5, _n4$s8, peg6, d_s8]));return;
            }
          }if (p1['rootPath'] == '') var lhtq5 = ol9t5;else lhtq5 = ol9t5['split'](p1['rootPath'])[0x0];ol9t5['indexOf']('http://') != -0x1 || ol9t5['indexOf']('https://') != -0x1 ? n_y8x['EnvConfig']['load']['call'](d_s8, ol9t5, zftq5l, thzql5, _n4$s8, peg6) : jahz['readFile'](lhtq5, hzql5t, new lzkjqh(b8s, b8s['onReadNativeCallBack'], [hzql5t, ol9t5, zftq5l, thzql5, _n4$s8, peg6, d_s8]), ol9t5);
        } else n_y8x['EnvConfig']['load']['call'](this, ol9t5, zftq5l, thzql5, _n4$s8, peg6);
      }
    }, qjkhlz['resMgrLoad'] = function (kazjqh, a$b2, eo1g, hkba, xy04, jkhab, cx3r) {
      eo1g === void 0x0 && (eo1g = 0x0), hkba === void 0x0 && (hkba = ![]), xy04 === void 0x0 && (xy04 = ![]), jkhab === void 0x0 && (jkhab = 0x0), cx3r === void 0x0 && (cx3r = 0x3), kazjqh['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', kazjqh), n_y8x['EnvConfig']['resMgrLoad'](kazjqh, (s48n, yrxc3, y_4x0n) => {
        b8s['prototype']['resMgrLoadCallBack'](s48n, yrxc3, y_4x0n, a$b2);
      }, eo1g, hkba, xy04, jkhab, cx3r);
    }, qjkhlz['resMgrLoadCallBack'] = function (akdj, $4_sn, d8_$4s, rcmwi3) {
      console['log']('buff:::', akdj, d8_$4s, jahz['fileNativeDir'] + '///' + jahz['fileListName']), rcmwi3(akdj, $4_sn, d8_$4s);
    }, qjkhlz['clearRes'] = function (peu1, j2adkb) {
      j2adkb === void 0x0 && (j2adkb = ![]);var jkbda2 = this;jkbda2['clearRes'](peu1, j2adkb);var s2d4 = jahz['getFileInfo'](peu1);if (s2d4 && (peu1['indexOf']('http://') != -0x1 || peu1['indexOf']('https://') != -0x1)) {
        var zjakh = s2d4['md5'],
            t5hz = jahz['getFileNativePath'](zjakh);jahz['remove'](t5hz);
      }
    }, b8s['onReadNativeCallBack'] = function (jhl, hz5, $4n8, l5zqtf, qtz5lh, sn4_$8, zljtqh, yrcx03, lfot9) {
      l5zqtf === void 0x0 && (l5zqtf = !![]), sn4_$8 === void 0x0 && (sn4_$8 = ![]), yrcx03 === void 0x0 && (yrcx03 = 0x0);if (!yrcx03) {
        var ajkb2h;if ($4n8 == 'json' || $4n8 == 'atlas') ajkb2h = n_y8x['getJson'](lfot9['data']);else $4n8 == 'xml' ? ajkb2h = rwicm['parseXMLFromString'](lfot9['data']) : ajkb2h = lfot9['data'];zljtqh['onLoaded'](ajkb2h), !n_y8x['isZiYu'] && n_y8x['isPosMsgYu'] && $4n8 != 'arraybuffer' && wx['postMessage']({ 'url': hz5, 'data': ajkb2h, 'isLoad': !![] });
      } else yrcx03 == 0x1 && n_y8x['EnvConfig']['load']['call'](zljtqh, hz5, $4n8, l5zqtf, qtz5lh, sn4_$8);
    }, s2db$a(b8s, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), b8s;
  }(),
      jahz = function (d8_s4) {
    function qtjzhl() {
      qtjzhl['__super']['call'](this);;
    }return b2hjka(qtjzhl, 'laya.wx.mini.MiniFileMgr', d8_s4), qtjzhl['isLoadFile'] = function (n_3y) {
      return qtjzhl['_fileTypeArr']['indexOf'](n_3y) != -0x1 ? !![] : ![];
    }, qtjzhl['getFileInfo'] = function (qlz5tf) {
      var ak$2 = qlz5tf['split']('?')[0x0],
          y_4n8x = qtjzhl['filesListObj'][ak$2];if (y_4n8x == null) return null;else return y_4n8x;return null;
    }, qtjzhl['onFileUpdate'] = function (v61ue, ba2khj) {
      var ltzh5q = v61ue['split']('/'),
          v1eu6g = ltzh5q[ltzh5q['length'] - 0x1],
          g1euv = qtjzhl['getFileInfo'](ba2khj);if (g1euv == null) qtjzhl['onSaveFile'](ba2khj, v1eu6g);else {
        if (g1euv['readyUrl'] != ba2khj) qtjzhl['remove'](v1eu6g, ba2khj);
      }
    }, qtjzhl['exits'] = function (yn_x40, nx0_4) {
      var s8$d42 = qtjzhl['getFileNativePath'](yn_x40);qtjzhl['fs']['getFileInfo']({ 'filePath': s8$d42, 'success': function (ds28$) {
          nx0_4 != null && nx0_4['runWith']([0x0, ds28$]);
        }, 'fail': function (kqza) {
          nx0_4 != null && nx0_4['runWith']([0x1, kqza]);
        } });
    }, qtjzhl['read'] = function (bahzjk, zk, gv1ue, bjd2) {
      zk === void 0x0 && (zk = 'ascill'), bjd2 === void 0x0 && (bjd2 = '');var jzab;bjd2 != '' ? jzab = qtjzhl['getFileNativePath'](bahzjk) : jzab = bahzjk, qtjzhl['fs']['readFile']({ 'filePath': jzab, 'encoding': zk, 'success': function (irw3) {
          gv1ue != null && gv1ue['runWith']([0x0, irw3]);
        }, 'fail': function (qhztl5) {
          if (qhztl5 && bjd2 != '') qtjzhl['down'](bjd2, zk, gv1ue, bjd2);else gv1ue != null && gv1ue['runWith']([0x1]);
        } });
    }, qtjzhl['readNativeFile'] = function (a2kdbj, t9f5lo) {
      qtjzhl['fs']['readFile']({ 'filePath': a2kdbj, 'encoding': '', 'success': function (t5lf9o) {
          t9f5lo != null && t9f5lo['runWith']([0x0]);
        }, 'fail': function (_x30y) {
          t9f5lo != null && t9f5lo['runWith']([0x1]);
        } });
    }, qtjzhl['down'] = function (p1ueg, tflo, $dbs2, d2bajk) {
      tflo === void 0x0 && (tflo = 'ascill'), d2bajk === void 0x0 && (d2bajk = '');var m3r0c = qtjzhl['getFileNativePath'](d2bajk),
          t5lfz = qtjzhl['wxdown']({ 'url': p1ueg, 'filePath': m3r0c, 'success': function ($bda) {
          if ($bda['statusCode'] === 0xc8) qtjzhl['readFile']($bda['filePath'], tflo, $dbs2, d2bajk);
        }, 'fail': function (xn4_8y) {
          $dbs2 != null && $dbs2['runWith']([0x1, xn4_8y]);
        } });t5lfz['onProgressUpdate'](function (y3xr0c) {
        $dbs2 != null && $dbs2['runWith']([0x2, y3xr0c['progress']]);
      });
    }, qtjzhl['readFile'] = function (n4x0y, kazhqj, kjabd, nr3x) {
      kazhqj === void 0x0 && (kazhqj = 'ascill'), nr3x === void 0x0 && (nr3x = ''), qtjzhl['fs']['readFile']({ 'filePath': n4x0y, 'encoding': kazhqj, 'success': function (r3c) {
          if (n4x0y['indexOf']('http://') != -0x1 || n4x0y['indexOf']('https://') != -0x1) qtjzhl['onFileUpdate'](n4x0y, nr3x);kjabd != null && kjabd['runWith']([0x0, r3c]);
        }, 'fail': function (xy8n4_) {
          if (xy8n4_) kjabd != null && kjabd['runWith']([0x1, xy8n4_]);
        } });
    }, qtjzhl['downImg'] = function (iwrc3m, ds2b$8, y03x_n) {
      y03x_n === void 0x0 && (y03x_n = '');var cr30x = qtjzhl['wxdown']({ 'url': iwrc3m, 'success': function (jhb2) {
          jhb2['statusCode'] === 0xc8 && qtjzhl['copyFile'](jhb2['tempFilePath'], y03x_n, ds2b$8);
        }, 'fail': function (tqzjh) {
          ds2b$8 != null && ds2b$8['runWith']([0x1, tqzjh]);
        } });
    }, qtjzhl['copyFile'] = function (veg1o7, yr0n, s4n$_8) {
      var ri3cm = veg1o7['split']('/'),
          kbj2da = ri3cm[ri3cm['length'] - 0x1],
          c0m3r = yr0n['split']('?')[0x0],
          hj2ak = qtjzhl['getFileInfo'](yr0n),
          xy_3n0 = qtjzhl['getFileNativePath'](kbj2da);qtjzhl['fs']['copyFile']({ 'srcPath': veg1o7, 'destPath': xy_3n0, 'success': function (sxn_84) {
          if (!hj2ak) qtjzhl['onSaveFile'](yr0n, kbj2da), s4n$_8 != null && s4n$_8['runWith']([0x0]);else {
            if (hj2ak['readyUrl'] != yr0n) qtjzhl['remove'](kbj2da, yr0n, s4n$_8);
          }
        }, 'fail': function (bjkda) {
          s4n$_8 != null && s4n$_8['runWith']([0x1, bjkda]);
        } });
    }, qtjzhl['getFileNativePath'] = function (jb2a) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + jb2a;
    }, qtjzhl['remove'] = function (tqhlzj, m0irc, s$n4_8) {
      m0irc === void 0x0 && (m0irc = '');var p6eu1g = qtjzhl['getFileInfo'](m0irc),
          ve197o = qtjzhl['getFileNativePath'](p6eu1g['md5']);tlhjz['loader']['clearRes'](p6eu1g['readyUrl']), qtjzhl['fs']['unlink']({ 'filePath': ve197o, 'success': function (rc0x3) {
          if (m0irc != '') qtjzhl['onSaveFile'](m0irc, tqhlzj);s$n4_8 != null && s$n4_8['runWith']([0x0]);
        }, 'fail': function (zltqh) {} });
    }, qtjzhl['onSaveFile'] = function (aqkhjz, s$48_) {
      var $4ds8_ = aqkhjz['split']('?')[0x0];qtjzhl['filesListObj'][$4ds8_] = { 'md5': s$48_, 'readyUrl': aqkhjz }, qtjzhl['fs']['writeFile']({ 'filePath': qtjzhl['fileNativeDir'] + '/' + qtjzhl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qtjzhl['filesListObj']), 'success': function (voge1) {
          console['log']('写入测试测试成功：', voge1);
        }, 'fail': function (s_xn4) {
          console['log']('写入测试测试失败：', s_xn4);
        } });
    }, qtjzhl['existDir'] = function (lqhztj, lt5fqz) {
      qtjzhl['fs']['mkdir']({ 'dirPath': lqhztj, 'success': function (ljqthz) {
          lt5fqz != null && lt5fqz['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (rwi3) {
          if (rwi3['errMsg']['indexOf']('file already exists') != -0x1) qtjzhl['readSync'](qtjzhl['fileListName'], 'utf8', lt5fqz);else lt5fqz != null && lt5fqz['runWith']([0x1, rwi3]);
        } });
    }, qtjzhl['readSync'] = function (_8nyx4, cri03m, v1og, y3cmr0) {
      cri03m === void 0x0 && (cri03m = 'ascill'), y3cmr0 === void 0x0 && (y3cmr0 = '');var zjahkq = qtjzhl['getFileNativePath'](_8nyx4),
          rx0cy;try {
        rx0cy = qtjzhl['fs']['readFileSync'](zjahkq), v1og != null && v1og['runWith']([0x0, { 'data': rx0cy }]);
      } catch (ue1gv) {
        v1og != null && v1og['runWith']([0x1]);
      }
    }, qtjzhl['readCache'] = function () {}, qtjzhl['writeCache'] = function (gvu) {
      var og = readyUrl['split']('?')[0x0];qtjzhl['filesListObj'][og] = { 'md5': md5Name, 'readyUrl': readyUrl }, qtjzhl['fs']['writeFile']({ 'filePath': qtjzhl['fileNativeDir'] + '/' + qtjzhl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qtjzhl['filesListObj']), 'success': function (d$s24) {}, 'fail': function (ov197e) {} });
    }, qtjzhl['setNativeFileDir'] = function (rcym) {
      qtjzhl['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rcym;
    }, qtjzhl['filesListObj'] = {}, qtjzhl['fileNativeDir'] = null, qtjzhl['fileListName'] = 'layaairfiles.txt', qtjzhl['ziyuFileData'] = {}, s2db$a(qtjzhl, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qtjzhl;
  }(rxc3y0),
      k2abh = function (s_d4$) {
    function rxy0c() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], rxy0c['__super']['call'](this), this['_sound'] = rxy0c['_createSound']();
    }b2hjka(rxy0c, 'laya.wx.mini.MiniSound', s_d4$);var y0c3rm = rxy0c['prototype'];return y0c3rm['load'] = function (ot5l9) {
      var jhak = this;ot5l9 = p1['formatURL'](ot5l9), this['url'] = ot5l9;if (rxy0c['_audioCache'][ot5l9]) {
        this['event']('complete');return;
      }function hakbj2() {
        if (rxy0c['_null'] != undefined) jhak['_sound']['onCanplay'](rxy0c['_null']), jhak['_sound']['onError'](rxy0c['_null']);else try {
          jhak['_sound']['onCanplay'](null), jhak['_sound']['onError'](null), rxy0c['_null'] = null;
        } catch ($badk) {
          console['warn']('[wxmini] _clearSound:' + $badk), jhak['_sound']['onCanplay'](cy0rm), jhak['_sound']['onError'](cy0rm), rxy0c['_null'] = cy0rm;
        }
      }function $sd82() {
        hakbj2(), bk2jh['loaded'] = !![], bk2jh['event']('complete'), rxy0c['_audioCache'][bk2jh['url']] = bk2jh;
      }function vue17(ev6u1) {
        console['error']('errCode=' + ev6u1['errCode'] + '  errMsg=' + ev6u1['errMsg']), hakbj2(), bk2jh['event']('error');
      }function cy0rm() {}this['_sound']['onCanplay']($sd82), this['_sound']['onError'](vue17), this['_sound']['src'] = ot5l9;var bk2jh = this;
    }, y0c3rm['play'] = function (cry03m, dkj2a) {
      cry03m === void 0x0 && (cry03m = 0x0), dkj2a === void 0x0 && (dkj2a = 0x0);var j2bdak;if (this['url'] == gvo7e1['_tMusic']) {
        if (!rxy0c['_musicAudio']) rxy0c['_musicAudio'] = rxy0c['_createSound']();j2bdak = rxy0c['_musicAudio'];
      } else j2bdak = rxy0c['_createSound']();j2bdak['src'] = this['url'];var ds4$8 = new n_y3(j2bdak);return ds4$8['url'] = this['url'], ds4$8['loops'] = dkj2a, ds4$8['startTime'] = cry03m, ds4$8['play'](), gvo7e1['addChannel'](ds4$8), ds4$8;
    }, y0c3rm['dispose'] = function () {
      var wm3rci = rxy0c['_audioCache'][this['url']];wm3rci && (wm3rci['src'] = '', delete rxy0c['_audioCache'][this['url']]);
    }, ot5f97(0x0, y0c3rm, 'duration', function () {
      return this['_sound']['duration'];
    }), rxy0c['_createSound'] = function () {
      return rxy0c['_id']++, n_y8x['window']['wx']['createInnerAudioContext']();
    }, rxy0c['_musicAudio'] = null, rxy0c['_id'] = 0x0, rxy0c['_audioCache'] = {}, rxy0c['_null'] = undefined, rxy0c;
  }(rxc3y0),
      n_y3 = function (bk2ja) {
    function qakjzh(ajh2kb) {
      this['_audio'] = null, this['_onEnd'] = null, qakjzh['__super']['call'](this), this['_audio'] = ajh2kb, this['_onEnd'] = rwicm['bind'](this['__onEnd'], this), ajh2kb['onEnded'](this['_onEnd']);
    }b2hjka(qakjzh, 'laya.wx.mini.MiniSoundChannel', bk2ja);var vo97e = qakjzh['prototype'];return vo97e['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (tlhjz['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, vo97e['__onNull'] = function () {}, vo97e['play'] = function () {
      this['isStopped'] = ![], gvo7e1['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, vo97e['stop'] = function () {
      this['isStopped'] = !![], gvo7e1['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (qakjzh['_null'] != undefined) this['_audio']['onEnded'](qakjzh['_null']);else try {
        this['_audio']['onEnded'](null), qakjzh['_null'] = null;
      } catch (mcr3y) {
        console['warn']('[wxmini] stop:' + mcr3y), this['_audio']['onEnded'](rwicm['bind'](this['__onNull'], this)), qakjzh['_null'] = rwicm['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, vo97e['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, vo97e['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], gvo7e1['addChannel'](this), this['_audio']['play']();
    }, ot5f97(0x0, vo97e, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ot5f97(0x0, vo97e, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ot5f97(0x0, vo97e, 'volume', function () {
      return 0x1;
    }, function (jkb2h) {}), qakjzh['_null'] = undefined, qakjzh;
  }(f7ov19);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var hzbajk in Laya) {
    var jlqhzt = Laya[hzbajk];jlqhzt && jlqhzt['__isclass'] && (exports[hzbajk] = jlqhzt);
  }
});