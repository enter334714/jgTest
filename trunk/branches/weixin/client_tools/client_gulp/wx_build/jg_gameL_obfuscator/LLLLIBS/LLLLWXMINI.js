var W = wx.$l;
(function (window, document, qtfzl5) {
  var hltzj = qtfzl5['un'],
      n_s$8 = qtfzl5['uns'],
      s2d$8b = qtfzl5['static'],
      akb$d = qtfzl5['class'],
      jka2bd = qtfzl5['getset'],
      eu1v = qtfzl5['__newvec'],
      xy4n0 = laya['utils']['Browser'],
      y3rc0 = laya['events']['Event'],
      sdb$2 = laya['events']['EventDispatcher'],
      n84s_$ = laya['resource']['HTMLImage'],
      akjbd2 = laya['utils']['Handler'],
      jzhakb = laya['display']['Input'],
      qhjkza = laya['net']['Loader'],
      iwc = laya['maths']['Matrix'],
      r03cm = laya['renders']['Render'],
      tzlhq = laya['utils']['RunDriver'],
      u7gv1e = laya['media']['Sound'],
      _4yn0x = laya['media']['SoundChannel'],
      ha2jb = laya['media']['SoundManager'],
      vg17u = laya['display']['Stage'],
      hkj2ab = laya['net']['URL'],
      eg6vu = laya['utils']['Utils'],
      im0rc3 = function () {
    function y3xc0() {}return akb$d(y3xc0, 'laya.wx.mini.MiniAdpter'), y3xc0['getJson'] = function (r0cmi) {
      return JSON['parse'](r0cmi);
    }, y3xc0['init'] = function (n8sx4, jkqz) {
      n8sx4 === void 0x0 && (n8sx4 = ![]), jkqz === void 0x0 && (jkqz = ![]);if (y3xc0['_inited']) return;y3xc0['window'] = window;if (y3xc0['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;y3xc0['_inited'] = !![], y3xc0['isZiYu'] = jkqz, y3xc0['isPosMsgYu'] = n8sx4, y3xc0['EnvConfig'] = {}, !y3xc0['isZiYu'] && (b2akdj['setNativeFileDir']('/layaairGame'), b2akdj['existDir'](b2akdj['fileNativeDir'], akjbd2['create'](y3xc0, y3xc0['onMkdirCallBack']))), y3xc0['window']['focus'] = function () {}, qtfzl5['getUrlPath'] = function () {}, y3xc0['window']['logtime'] = function (bhakj) {}, y3xc0['window']['alertTimeLog'] = function (sab$2d) {}, y3xc0['window']['resetShareInfo'] = function () {}, y3xc0['window']['CanvasRenderingContext2D'] = function () {}, y3xc0['window']['CanvasRenderingContext2D']['prototype'] = y3xc0['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], y3xc0['window']['document']['body']['appendChild'] = function () {}, y3xc0['EnvConfig']['pixelRatioInt'] = 0x0, tzlhq['getPixelRatio'] = y3xc0['pixelRatio'], y3xc0['_preCreateElement'] = xy4n0['createElement'], xy4n0['createElement'] = y3xc0['createElement'], tzlhq['createShaderCondition'] = y3xc0['createShaderCondition'], eg6vu['parseXMLFromString'] = y3xc0['parseXMLFromString'], jzhakb['_createInputElement'] = yn3xr0['_createInputElement'], y3xc0['EnvConfig']['load'] = qhjkza['prototype']['load'], qhjkza['prototype']['load'] = hlqj['prototype']['load'], y3xc0['isZiYu'] && n8sx4 && wx['onMessage'](function ($kd) {
        $kd['isLoad'] && (b2akdj['ziyuFileData'][$kd['url']] = $kd['data']);
      });
    }, y3xc0['onMkdirCallBack'] = function (nx_40y, s824) {
      if (!nx_40y) b2akdj['filesListObj'] = JSON['parse'](s824['data']);
    }, y3xc0['pixelRatio'] = function () {
      if (!y3xc0['EnvConfig']['pixelRatioInt']) try {
        var ab$2dk = wx['getSystemInfoSync']();return y3xc0['EnvConfig']['pixelRatioInt'] = ab$2dk['pixelRatio'], ab$2dk = ab$2dk, ab$2dk['pixelRatio'];
      } catch (sxn84_) {}return y3xc0['EnvConfig']['pixelRatioInt'];
    }, y3xc0['createElement'] = function (_3yx0) {
      if (_3yx0 == 'canvas') {
        var $4n_8s;return y3xc0['idx'] == 0x1 ? y3xc0['isZiYu'] ? ($4n_8s = sharedCanvas, $4n_8s['style'] = {}) : $4n_8s = window['canvas'] : $4n_8s = window['wx']['createCanvas'](), y3xc0['idx']++, $4n_8s;
      } else {
        if (_3yx0 == 'textarea' || _3yx0 == 'input') return y3xc0['onCreateInput'](_3yx0);else {
          if (_3yx0 == 'div') {
            var rycm0 = y3xc0['_preCreateElement'](_3yx0);return rycm0['contains'] = function (uv) {
              return null;
            }, rycm0['removeChild'] = function (y_3n0) {}, rycm0;
          } else return y3xc0['_preCreateElement'](_3yx0);
        }
      }
    }, y3xc0['onCreateInput'] = function (bak) {
      var lt5f9q = y3xc0['_preCreateElement'](bak);return lt5f9q['focus'] = yn3xr0['wxinputFocus'], lt5f9q['blur'] = yn3xr0['wxinputblur'], lt5f9q['style'] = {}, lt5f9q['value'] = 0x0, lt5f9q['parentElement'] = {}, lt5f9q['placeholder'] = {}, lt5f9q['type'] = {}, lt5f9q['setColor'] = function (ynr3) {}, lt5f9q['setType'] = function (x8s) {}, lt5f9q['setFontFace'] = function ($b28s) {}, lt5f9q['addEventListener'] = function (l95qf) {}, lt5f9q['contains'] = function (d$2sa) {
        return null;
      }, lt5f9q['removeChild'] = function ($kba2d) {}, lt5f9q;
    }, y3xc0['createShaderCondition'] = function (bkaz) {
      var ynx3r0 = this,
          b$da2k = function () {
        var d$a2sb = bkaz;return ynx3r0[bkaz['replace']('this.', '')];
      };return b$da2k;
    }, y3xc0['EnvConfig'] = null, y3xc0['window'] = null, y3xc0['_preCreateElement'] = null, y3xc0['_inited'] = ![], y3xc0['wxRequest'] = null, y3xc0['systemInfo'] = null, y3xc0['version'] = '0.0.1', y3xc0['isZiYu'] = ![], y3xc0['isPosMsgYu'] = ![], y3xc0['parseXMLFromString'] = function (d28s) {
      var fo975t, j2kbh;d28s = d28s['replace'](/>\s+</g, '><');try {
        fo975t = new window['Parser']['DOMParser']()['parseFromString'](d28s, 'text/xml');
      } catch (v79oe1) {
        throw '需要引入xml解析库文件';
      }return fo975t;
    }, y3xc0['idx'] = 0x1, y3xc0;
  }(),
      kjhab2 = function () {
    function wmc3ir() {}akb$d(wmc3ir, 'laya.wx.mini.MiniImage');var $84_ns = wmc3ir['prototype'];return $84_ns['_loadImage'] = function (vo7eg1) {
      var khjb = this,
          p1 = ![];vo7eg1['indexOf']('layaNativeDir/') == -0x1 && (p1 = !![], vo7eg1 = hkj2ab['formatURL'](vo7eg1));if (!b2akdj['getFileInfo'](vo7eg1)) {
        if (vo7eg1['indexOf']('http://') != -0x1 || vo7eg1['indexOf']('https://') != -0x1) b2akdj['downImg'](vo7eg1, new akjbd2(wmc3ir, wmc3ir['onDownImgCallBack'], [vo7eg1, khjb]), vo7eg1);else wmc3ir['onCreateImage'](vo7eg1, khjb, !![]);
      } else wmc3ir['onCreateImage'](vo7eg1, khjb, !p1);
    }, wmc3ir['onDownImgCallBack'] = function (x_3y0n, jb2hka, xns_8) {
      if (!xns_8) wmc3ir['onCreateImage'](x_3y0n, jb2hka);else jb2hka['onError'](null);
    }, wmc3ir['onCreateImage'] = function (t5fzql, ak$b, hja) {
      hja === void 0x0 && (hja = ![]);var rn3x0y;if (!hja) {
        var ahjkb2 = b2akdj['getFileInfo'](t5fzql),
            folt95 = ahjkb2['md5'];rn3x0y = b2akdj['getFileNativePath'](folt95);
      } else rn3x0y = t5fzql;if (ak$b['imgCache'] == null) ak$b['imgCache'] = {};var xryc;function $da2kb() {
        xryc['onload'] = null, xryc['onerror'] = null, delete ak$b['imgCache'][t5fzql];
      };var kabj2h = function () {
        $da2kb(), ak$b['onLoaded'](xryc);
      },
          xyrc30 = function () {
        $da2kb(), ak$b['event']('error', 'Load image failed');
      };ak$b['_type'] == 'nativeimage' ? (xryc = new xy4n0['window']['Image'](), xryc['crossOrigin'] = '', xryc['onload'] = kabj2h, xryc['onerror'] = xyrc30, xryc['src'] = rn3x0y, ak$b['imgCache'][t5fzql] = xryc) : new n84s_$['create'](rn3x0y, { 'onload': kabj2h, 'onerror': xyrc30, 'onCreate': function (l59qtf) {
          xryc = l59qtf, ak$b['imgCache'][t5fzql] = l59qtf;
        } });
    }, wmc3ir;
  }(),
      yn3xr0 = function () {
    function ftql5z() {}return akb$d(ftql5z, 'laya.wx.mini.MiniInput'), ftql5z['_createInputElement'] = function () {
      jzhakb['_initInput'](jzhakb['area'] = xy4n0['createElement']('textarea')), jzhakb['_initInput'](jzhakb['input'] = xy4n0['createElement']('input')), jzhakb['inputContainer'] = xy4n0['createElement']('div'), jzhakb['inputContainer']['style']['position'] = 'absolute', jzhakb['inputContainer']['style']['zIndex'] = 0x186a0, xy4n0['container']['appendChild'](jzhakb['inputContainer']), jzhakb['inputContainer']['setPos'] = function (d_84, ci3wm) {
        jzhakb['inputContainer']['style']['left'] = d_84 + 'px', jzhakb['inputContainer']['style']['top'] = ci3wm + 'px';
      }, qtfzl5['stage']['on']('resize', null, ftql5z['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (t59ol) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ha2jb['_soundClass'] = kjbd, ha2jb['_musicClass'] = kjbd;
    }, ftql5z['_onStageResize'] = function () {
      var $sdb = qtfzl5['stage']['_canvasTransform']['identity']();$sdb['scale'](xy4n0['width'] / r03cm['canvas']['width'] / tzlhq['getPixelRatio'](), xy4n0['height'] / r03cm['canvas']['height'] / tzlhq['getPixelRatio']());
    }, ftql5z['wxinputFocus'] = function (fqlzt5) {
      var x_4 = jzhakb['inputElement']['target'];if (x_4 && !x_4['editable']) return;im0rc3['window']['wx']['offKeyboardConfirm'](), im0rc3['window']['wx']['offKeyboardInput'](), im0rc3['window']['wx']['showKeyboard']({ 'defaultValue': x_4['text'], 'maxLength': x_4['maxChars'], 'multiple': x_4['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (bh2ka) {}, 'fail': function (fv5o) {} }), im0rc3['window']['wx']['onKeyboardConfirm'](function (a2jkbh) {
        var vu1eg = a2jkbh ? a2jkbh['value'] : '';x_4['text'] = vu1eg, x_4['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), im0rc3['window']['wx']['onKeyboardInput'](function (crym03) {
        var o5t7f = crym03 ? crym03['value'] : '';if (!x_4['multiline']) {
          if (o5t7f['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }x_4['text'] = o5t7f, x_4['event']('input');
      });
    }, ftql5z['inputEnter'] = function () {
      jzhakb['inputElement']['target']['focus'] = ![];
    }, ftql5z['wxinputblur'] = function () {
      ftql5z['hideKeyboard']();
    }, ftql5z['hideKeyboard'] = function () {
      im0rc3['window']['wx']['offKeyboardConfirm'](), im0rc3['window']['wx']['offKeyboardInput'](), im0rc3['window']['wx']['hideKeyboard']({ 'success': function ($s24d) {
          console['log']('隐藏键盘');
        }, 'fail': function (kzqah) {
          console['log']('隐藏键盘出错:' + (kzqah ? kzqah['errMsg'] : ''));
        } });
    }, ftql5z;
  }(),
      hlqj = function () {
    function x0rny() {}akb$d(x0rny, 'laya.wx.mini.MiniLoader');var rci3mw = x0rny['prototype'];return rci3mw['load'] = function (jthqzl, ry30cx, hzkqja, q5zfl, rmwi3c) {
      hzkqja === void 0x0 && (hzkqja = !![]), rmwi3c === void 0x0 && (rmwi3c = ![]);var n4x = this;n4x['_url'] = jthqzl;if (jthqzl['indexOf']('data:image') === 0x0) n4x['_type'] = ry30cx = 'image';else n4x['_type'] = ry30cx || (ry30cx = n4x['getTypeFromUrl'](jthqzl));n4x['_cache'] = hzkqja, n4x['_data'] = null;var bs2 = 'ascii';if (jthqzl['indexOf']('.fnt') != -0x1) bs2 = 'utf8';else ry30cx == 'arraybuffer' && (bs2 = '');;var fzqt5l = eg6vu['getFileExtension'](jthqzl);if (x0rny['_fileTypeArr']['indexOf'](fzqt5l) != -0x1) im0rc3['EnvConfig']['load']['call'](this, jthqzl, ry30cx, hzkqja, q5zfl, rmwi3c);else {
        if (!b2akdj['getFileInfo'](jthqzl)) {
          if (jthqzl['indexOf']('layaNativeDir/') != -0x1) {
            if (im0rc3['isZiYu']) {
              var wcm3 = b2akdj['ziyuFileData'][jthqzl];n4x['onLoaded'](wcm3);return;
            } else {
              cosnole['log']('read read'), b2akdj['read'](jthqzl, bs2, new akjbd2(x0rny, x0rny['onReadNativeCallBack'], [bs2, jthqzl, ry30cx, hzkqja, q5zfl, rmwi3c, n4x]));return;
            }
          }if (hkj2ab['rootPath'] == '') var o75tf9 = jthqzl;else o75tf9 = jthqzl['split'](hkj2ab['rootPath'])[0x0];jthqzl['indexOf']('http://') != -0x1 || jthqzl['indexOf']('https://') != -0x1 ? im0rc3['EnvConfig']['load']['call'](n4x, jthqzl, ry30cx, hzkqja, q5zfl, rmwi3c) : b2akdj['readFile'](o75tf9, bs2, new akjbd2(x0rny, x0rny['onReadNativeCallBack'], [bs2, jthqzl, ry30cx, hzkqja, q5zfl, rmwi3c, n4x]), jthqzl);
        } else im0rc3['EnvConfig']['load']['call'](this, jthqzl, ry30cx, hzkqja, q5zfl, rmwi3c);
      }
    }, rci3mw['resMgrLoad'] = function (tlo59f, eo17v9, jqzkh, yrnx3, a2bds, rmiwc, qztl5h) {
      jqzkh === void 0x0 && (jqzkh = 0x0), yrnx3 === void 0x0 && (yrnx3 = ![]), a2bds === void 0x0 && (a2bds = ![]), rmiwc === void 0x0 && (rmiwc = 0x0), qztl5h === void 0x0 && (qztl5h = 0x3), tlo59f['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', tlo59f), im0rc3['EnvConfig']['resMgrLoad'](tlo59f, (of1v7, kb2d$, ycr03x) => {
        x0rny['prototype']['resMgrLoadCallBack'](of1v7, kb2d$, ycr03x, eo17v9);
      }, jqzkh, yrnx3, a2bds, rmiwc, qztl5h);
    }, rci3mw['resMgrLoadCallBack'] = function (bjzkah, tzlhqj, $sadb, u1gp) {
      console['log']('buff:::', bjzkah, $sadb, b2akdj['fileNativeDir'] + '///' + b2akdj['fileListName']), u1gp(bjzkah, tzlhqj, $sadb);
    }, rci3mw['clearRes'] = function (eg1ov, irw3) {
      irw3 === void 0x0 && (irw3 = ![]);var tfql9 = this;tfql9['clearRes'](eg1ov, irw3);var jaqhkz = b2akdj['getFileInfo'](eg1ov);if (jaqhkz && (eg1ov['indexOf']('http://') != -0x1 || eg1ov['indexOf']('https://') != -0x1)) {
        var ahzqkj = jaqhkz['md5'],
            nx3_ = b2akdj['getFileNativePath'](ahzqkj);b2akdj['remove'](nx3_);
      }
    }, x0rny['onReadNativeCallBack'] = function (n84yx_, k2b, d4s8_$, uv71ge, t9o75f, qhlzjk, _n4s$, s4$d, _xn4y0) {
      uv71ge === void 0x0 && (uv71ge = !![]), qhlzjk === void 0x0 && (qhlzjk = ![]), s4$d === void 0x0 && (s4$d = 0x0);if (!s4$d) {
        var ev6gu;if (d4s8_$ == 'json' || d4s8_$ == 'atlas') ev6gu = im0rc3['getJson'](_xn4y0['data']);else d4s8_$ == 'xml' ? ev6gu = eg6vu['parseXMLFromString'](_xn4y0['data']) : ev6gu = _xn4y0['data'];_n4s$['onLoaded'](ev6gu), !im0rc3['isZiYu'] && im0rc3['isPosMsgYu'] && d4s8_$ != 'arraybuffer' && wx['postMessage']({ 'url': k2b, 'data': ev6gu, 'isLoad': !![] });
      } else s4$d == 0x1 && im0rc3['EnvConfig']['load']['call'](_n4s$, k2b, d4s8_$, uv71ge, t9o75f, qhlzjk);
    }, s2d$8b(x0rny, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), x0rny;
  }(),
      b2akdj = function (tqhzl) {
    function q9f5lt() {
      q9f5lt['__super']['call'](this);;
    }return akb$d(q9f5lt, 'laya.wx.mini.MiniFileMgr', tqhzl), q9f5lt['isLoadFile'] = function (sb2d$a) {
      return q9f5lt['_fileTypeArr']['indexOf'](sb2d$a) != -0x1 ? !![] : ![];
    }, q9f5lt['getFileInfo'] = function (h2kjba) {
      var t5fzq = h2kjba['split']('?')[0x0],
          lkzqh = q9f5lt['filesListObj'][t5fzq];if (lkzqh == null) return null;else return lkzqh;return null;
    }, q9f5lt['onFileUpdate'] = function (e9v71o, db2a$s) {
      var z5flq = e9v71o['split']('/'),
          v5of79 = z5flq[z5flq['length'] - 0x1],
          g1ev7 = q9f5lt['getFileInfo'](db2a$s);if (g1ev7 == null) q9f5lt['onSaveFile'](db2a$s, v5of79);else {
        if (g1ev7['readyUrl'] != db2a$s) q9f5lt['remove'](v5of79, db2a$s);
      }
    }, q9f5lt['exits'] = function (to975, jka2h) {
      var bahj = q9f5lt['getFileNativePath'](to975);q9f5lt['fs']['getFileInfo']({ 'filePath': bahj, 'success': function (_0xy) {
          jka2h != null && jka2h['runWith']([0x0, _0xy]);
        }, 'fail': function (d2bkja) {
          jka2h != null && jka2h['runWith']([0x1, d2bkja]);
        } });
    }, q9f5lt['read'] = function (n03_xy, qzjth, yxcr0, f7t) {
      qzjth === void 0x0 && (qzjth = 'ascill'), f7t === void 0x0 && (f7t = '');var yrx;f7t != '' ? yrx = q9f5lt['getFileNativePath'](n03_xy) : yrx = n03_xy, q9f5lt['fs']['readFile']({ 'filePath': yrx, 'encoding': qzjth, 'success': function (hz5q) {
          yxcr0 != null && yxcr0['runWith']([0x0, hz5q]);
        }, 'fail': function (s8$_n4) {
          if (s8$_n4 && f7t != '') q9f5lt['down'](f7t, qzjth, yxcr0, f7t);else yxcr0 != null && yxcr0['runWith']([0x1]);
        } });
    }, q9f5lt['readNativeFile'] = function (s$_d8, d$bs) {
      q9f5lt['fs']['readFile']({ 'filePath': s$_d8, 'encoding': '', 'success': function (dka2b) {
          d$bs != null && d$bs['runWith']([0x0]);
        }, 'fail': function (ue6gv) {
          d$bs != null && d$bs['runWith']([0x1]);
        } });
    }, q9f5lt['down'] = function (x3nry, zabjkh, nx_84s, gp1eu) {
      zabjkh === void 0x0 && (zabjkh = 'ascill'), gp1eu === void 0x0 && (gp1eu = '');var a$sbd2 = q9f5lt['getFileNativePath'](gp1eu),
          zkaj = q9f5lt['wxdown']({ 'url': x3nry, 'filePath': a$sbd2, 'success': function (uve6g) {
          if (uve6g['statusCode'] === 0xc8) q9f5lt['readFile'](uve6g['filePath'], zabjkh, nx_84s, gp1eu);
        }, 'fail': function (r0yx) {
          nx_84s != null && nx_84s['runWith']([0x1, r0yx]);
        } });zkaj['onProgressUpdate'](function (gp) {
        nx_84s != null && nx_84s['runWith']([0x2, gp['progress']]);
      });
    }, q9f5lt['readFile'] = function (d$sb28, kqhajz, cir30, z5qtfl) {
      kqhajz === void 0x0 && (kqhajz = 'ascill'), z5qtfl === void 0x0 && (z5qtfl = ''), q9f5lt['fs']['readFile']({ 'filePath': d$sb28, 'encoding': kqhajz, 'success': function (tlfo5) {
          if (d$sb28['indexOf']('http://') != -0x1 || d$sb28['indexOf']('https://') != -0x1) q9f5lt['onFileUpdate'](d$sb28, z5qtfl);cir30 != null && cir30['runWith']([0x0, tlfo5]);
        }, 'fail': function (egup) {
          if (egup) cir30 != null && cir30['runWith']([0x1, egup]);
        } });
    }, q9f5lt['downImg'] = function (_4xs8, bhkj, of975v) {
      of975v === void 0x0 && (of975v = '');var m30icr = q9f5lt['wxdown']({ 'url': _4xs8, 'success': function (eo1g7) {
          eo1g7['statusCode'] === 0xc8 && q9f5lt['copyFile'](eo1g7['tempFilePath'], of975v, bhkj);
        }, 'fail': function (gv1o7) {
          bhkj != null && bhkj['runWith']([0x1, gv1o7]);
        } });
    }, q9f5lt['copyFile'] = function (d84$s, $ab2d, bjhka2) {
      var zjqht = d84$s['split']('/'),
          u7v1g = zjqht[zjqht['length'] - 0x1],
          ev91o7 = $ab2d['split']('?')[0x0],
          xn_4y8 = q9f5lt['getFileInfo']($ab2d),
          cw3mi = q9f5lt['getFileNativePath'](u7v1g);q9f5lt['fs']['copyFile']({ 'srcPath': d84$s, 'destPath': cw3mi, 'success': function (s8n_x4) {
          if (!xn_4y8) q9f5lt['onSaveFile']($ab2d, u7v1g), bjhka2 != null && bjhka2['runWith']([0x0]);else {
            if (xn_4y8['readyUrl'] != $ab2d) q9f5lt['remove'](u7v1g, $ab2d, bjhka2);
          }
        }, 'fail': function (bdak2) {
          bjhka2 != null && bjhka2['runWith']([0x1, bdak2]);
        } });
    }, q9f5lt['getFileNativePath'] = function (my0c3) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + my0c3;
    }, q9f5lt['remove'] = function (o17vge, rycm30, q9t5l) {
      rycm30 === void 0x0 && (rycm30 = '');var bs$8d = q9f5lt['getFileInfo'](rycm30),
          p1gue6 = q9f5lt['getFileNativePath'](bs$8d['md5']);qtfzl5['loader']['clearRes'](bs$8d['readyUrl']), q9f5lt['fs']['unlink']({ 'filePath': p1gue6, 'success': function (jzab) {
          if (rycm30 != '') q9f5lt['onSaveFile'](rycm30, o17vge);q9t5l != null && q9t5l['runWith']([0x0]);
        }, 'fail': function (micw3r) {} });
    }, q9f5lt['onSaveFile'] = function (tlhj, vfo197) {
      var eg7uv1 = tlhj['split']('?')[0x0];q9f5lt['filesListObj'][eg7uv1] = { 'md5': vfo197, 'readyUrl': tlhj }, q9f5lt['fs']['writeFile']({ 'filePath': q9f5lt['fileNativeDir'] + '/' + q9f5lt['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](q9f5lt['filesListObj']), 'success': function (qhzt) {
          console['log']('写入测试测试成功：', qhzt);
        }, 'fail': function (m3ricw) {
          console['log']('写入测试测试失败：', m3ricw);
        } });
    }, q9f5lt['existDir'] = function (b2adjk, v597fo) {
      q9f5lt['fs']['mkdir']({ 'dirPath': b2adjk, 'success': function (e1o79) {
          v597fo != null && v597fo['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (veg16) {
          if (veg16['errMsg']['indexOf']('file already exists') != -0x1) q9f5lt['readSync'](q9f5lt['fileListName'], 'utf8', v597fo);else v597fo != null && v597fo['runWith']([0x1, veg16]);
        } });
    }, q9f5lt['readSync'] = function (t9olf5, ugp6, kbjzah, g6euv) {
      ugp6 === void 0x0 && (ugp6 = 'ascill'), g6euv === void 0x0 && (g6euv = '');var rc0ym3 = q9f5lt['getFileNativePath'](t9olf5),
          s2ab;try {
        s2ab = q9f5lt['fs']['readFileSync'](rc0ym3), kbjzah != null && kbjzah['runWith']([0x0, { 'data': s2ab }]);
      } catch (o79vf1) {
        kbjzah != null && kbjzah['runWith']([0x1]);
      }
    }, q9f5lt['readCache'] = function () {}, q9f5lt['writeCache'] = function (r0myc) {
      var ftl59 = readyUrl['split']('?')[0x0];q9f5lt['filesListObj'][ftl59] = { 'md5': md5Name, 'readyUrl': readyUrl }, q9f5lt['fs']['writeFile']({ 'filePath': q9f5lt['fileNativeDir'] + '/' + q9f5lt['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](q9f5lt['filesListObj']), 'success': function (lqt5fz) {}, 'fail': function (n30y_) {} });
    }, q9f5lt['setNativeFileDir'] = function (veu6g) {
      q9f5lt['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + veu6g;
    }, q9f5lt['filesListObj'] = {}, q9f5lt['fileNativeDir'] = null, q9f5lt['fileListName'] = 'layaairfiles.txt', q9f5lt['ziyuFileData'] = {}, s2d$8b(q9f5lt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), q9f5lt;
  }(sdb$2),
      kjbd = function (q5tzl) {
    function lf5qz() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], lf5qz['__super']['call'](this), this['_sound'] = lf5qz['_createSound']();
    }akb$d(lf5qz, 'laya.wx.mini.MiniSound', q5tzl);var f5l9 = lf5qz['prototype'];return f5l9['load'] = function (_yx0n) {
      var tf957o = this;_yx0n = hkj2ab['formatURL'](_yx0n), this['url'] = _yx0n;if (lf5qz['_audioCache'][_yx0n]) {
        this['event']('complete');return;
      }function yr3c() {
        if (lf5qz['_null'] != undefined) tf957o['_sound']['onCanplay'](lf5qz['_null']), tf957o['_sound']['onError'](lf5qz['_null']);else try {
          tf957o['_sound']['onCanplay'](null), tf957o['_sound']['onError'](null), lf5qz['_null'] = null;
        } catch (_$8sd) {
          console['warn']('[wxmini] _clearSound:' + _$8sd), tf957o['_sound']['onCanplay']($kab2), tf957o['_sound']['onError']($kab2), lf5qz['_null'] = $kab2;
        }
      }function u1v6e() {
        yr3c(), a2kbd$['loaded'] = !![], a2kbd$['event']('complete'), lf5qz['_audioCache'][a2kbd$['url']] = a2kbd$;
      }function ak2bhj(mryc30) {
        console['error']('errCode=' + mryc30['errCode'] + '  errMsg=' + mryc30['errMsg']), yr3c(), a2kbd$['event']('error');
      }function $kab2() {}this['_sound']['onCanplay'](u1v6e), this['_sound']['onError'](ak2bhj), this['_sound']['src'] = _yx0n;var a2kbd$ = this;
    }, f5l9['play'] = function (ug16pe, s8_nx) {
      ug16pe === void 0x0 && (ug16pe = 0x0), s8_nx === void 0x0 && (s8_nx = 0x0);var gv16e;if (this['url'] == ha2jb['_tMusic']) {
        if (!lf5qz['_musicAudio']) lf5qz['_musicAudio'] = lf5qz['_createSound']();gv16e = lf5qz['_musicAudio'];
      } else gv16e = lf5qz['_createSound']();gv16e['src'] = this['url'];var s4_$d8 = new $bd82(gv16e);return s4_$d8['url'] = this['url'], s4_$d8['loops'] = s8_nx, s4_$d8['startTime'] = ug16pe, s4_$d8['play'](), ha2jb['addChannel'](s4_$d8), s4_$d8;
    }, f5l9['dispose'] = function () {
      var zqlt5f = lf5qz['_audioCache'][this['url']];zqlt5f && (zqlt5f['src'] = '', delete lf5qz['_audioCache'][this['url']]);
    }, jka2bd(0x0, f5l9, 'duration', function () {
      return this['_sound']['duration'];
    }), lf5qz['_createSound'] = function () {
      return lf5qz['_id']++, im0rc3['window']['wx']['createInnerAudioContext']();
    }, lf5qz['_musicAudio'] = null, lf5qz['_id'] = 0x0, lf5qz['_audioCache'] = {}, lf5qz['_null'] = undefined, lf5qz;
  }(sdb$2),
      $bd82 = function (htl) {
    function zhqtlj(i3rm0) {
      this['_audio'] = null, this['_onEnd'] = null, zhqtlj['__super']['call'](this), this['_audio'] = i3rm0, this['_onEnd'] = eg6vu['bind'](this['__onEnd'], this), i3rm0['onEnded'](this['_onEnd']);
    }akb$d(zhqtlj, 'laya.wx.mini.MiniSoundChannel', htl);var qlhjtz = zhqtlj['prototype'];return qlhjtz['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (qtfzl5['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, qlhjtz['__onNull'] = function () {}, qlhjtz['play'] = function () {
      this['isStopped'] = ![], ha2jb['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, qlhjtz['stop'] = function () {
      this['isStopped'] = !![], ha2jb['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (zhqtlj['_null'] != undefined) this['_audio']['onEnded'](zhqtlj['_null']);else try {
        this['_audio']['onEnded'](null), zhqtlj['_null'] = null;
      } catch (ft5ql) {
        console['warn']('[wxmini] stop:' + ft5ql), this['_audio']['onEnded'](eg6vu['bind'](this['__onNull'], this)), zhqtlj['_null'] = eg6vu['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, qlhjtz['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, qlhjtz['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ha2jb['addChannel'](this), this['_audio']['play']();
    }, jka2bd(0x0, qlhjtz, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), jka2bd(0x0, qlhjtz, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), jka2bd(0x0, qlhjtz, 'volume', function () {
      return 0x1;
    }, function (yx03) {}), zhqtlj['_null'] = undefined, zhqtlj;
  }(_4yn0x);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var tljzhq in Laya) {
    var bkhjaz = Laya[tljzhq];bkhjaz && bkhjaz['__isclass'] && (exports[tljzhq] = bkhjaz);
  }
});