var W = wx.$l;
(function (window, document, n_48$s) {
  var ab2d$k = n_48$s['un'],
      v6eu = n_48$s['uns'],
      kaqzh = n_48$s['static'],
      $2db = n_48$s['class'],
      vf71o9 = n_48$s['getset'],
      w3mc = n_48$s['__newvec'],
      euv1g6 = laya['utils']['Browser'],
      v1oeg = laya['events']['Event'],
      o5fv = laya['events']['EventDispatcher'],
      hj2kb = laya['resource']['HTMLImage'],
      bjzkha = laya['utils']['Handler'],
      s4$8d_ = laya['display']['Input'],
      qft95l = laya['net']['Loader'],
      qhjaz = laya['maths']['Matrix'],
      zajhb = laya['renders']['Render'],
      kjb = laya['utils']['RunDriver'],
      f97vo1 = laya['media']['Sound'],
      hlkqz = laya['media']['SoundChannel'],
      ir3mwc = laya['media']['SoundManager'],
      ahkbz = laya['display']['Stage'],
      s$48 = laya['net']['URL'],
      $sd8b = laya['utils']['Utils'],
      sx8n4_ = function () {
    function azbjk() {}return $2db(azbjk, 'laya.wx.mini.MiniAdpter'), azbjk['getJson'] = function (jka2d) {
      return JSON['parse'](jka2d);
    }, azbjk['init'] = function (e1gp6, d$842) {
      e1gp6 === void 0x0 && (e1gp6 = ![]), d$842 === void 0x0 && (d$842 = ![]);if (azbjk['_inited']) return;azbjk['window'] = window;if (azbjk['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;azbjk['_inited'] = !![], azbjk['isZiYu'] = d$842, azbjk['isPosMsgYu'] = e1gp6, azbjk['EnvConfig'] = {}, !azbjk['isZiYu'] && (nyx_48['setNativeFileDir']('/layaairGame'), nyx_48['existDir'](nyx_48['fileNativeDir'], bjzkha['create'](azbjk, azbjk['onMkdirCallBack']))), azbjk['window']['focus'] = function () {}, n_48$s['getUrlPath'] = function () {}, azbjk['window']['logtime'] = function (x_04) {}, azbjk['window']['alertTimeLog'] = function ($4d_s) {}, azbjk['window']['resetShareInfo'] = function () {}, azbjk['window']['CanvasRenderingContext2D'] = function () {}, azbjk['window']['CanvasRenderingContext2D']['prototype'] = azbjk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], azbjk['window']['document']['body']['appendChild'] = function () {}, azbjk['EnvConfig']['pixelRatioInt'] = 0x0, kjb['getPixelRatio'] = azbjk['pixelRatio'], azbjk['_preCreateElement'] = euv1g6['createElement'], euv1g6['createElement'] = azbjk['createElement'], kjb['createShaderCondition'] = azbjk['createShaderCondition'], $sd8b['parseXMLFromString'] = azbjk['parseXMLFromString'], s4$8d_['_createInputElement'] = eo9v71['_createInputElement'], azbjk['EnvConfig']['load'] = qft95l['prototype']['load'], qft95l['prototype']['load'] = r30cym['prototype']['load'], azbjk['isZiYu'] && e1gp6 && wx['onMessage'](function (go7) {
        go7['isLoad'] && (nyx_48['ziyuFileData'][go7['url']] = go7['data']);
      });
    }, azbjk['onMkdirCallBack'] = function (mcw3ri, c0mir) {
      if (!mcw3ri) nyx_48['filesListObj'] = JSON['parse'](c0mir['data']);
    }, azbjk['pixelRatio'] = function () {
      if (!azbjk['EnvConfig']['pixelRatioInt']) try {
        var bha2jk = wx['getSystemInfoSync']();return azbjk['EnvConfig']['pixelRatioInt'] = bha2jk['pixelRatio'], bha2jk = bha2jk, bha2jk['pixelRatio'];
      } catch (fqz5t) {}return azbjk['EnvConfig']['pixelRatioInt'];
    }, azbjk['createElement'] = function (u6) {
      if (u6 == 'canvas') {
        var zhb;return azbjk['idx'] == 0x1 ? azbjk['isZiYu'] ? (zhb = sharedCanvas, zhb['style'] = {}) : zhb = window['canvas'] : zhb = window['wx']['createCanvas'](), azbjk['idx']++, zhb;
      } else {
        if (u6 == 'textarea' || u6 == 'input') return azbjk['onCreateInput'](u6);else {
          if (u6 == 'div') {
            var $bkad2 = azbjk['_preCreateElement'](u6);return $bkad2['contains'] = function (hqt5l) {
              return null;
            }, $bkad2['removeChild'] = function (yrn0x3) {}, $bkad2;
          } else return azbjk['_preCreateElement'](u6);
        }
      }
    }, azbjk['onCreateInput'] = function (lf95ot) {
      var hajkbz = azbjk['_preCreateElement'](lf95ot);return hajkbz['focus'] = eo9v71['wxinputFocus'], hajkbz['blur'] = eo9v71['wxinputblur'], hajkbz['style'] = {}, hajkbz['value'] = 0x0, hajkbz['parentElement'] = {}, hajkbz['placeholder'] = {}, hajkbz['type'] = {}, hajkbz['setColor'] = function (hkjaq) {}, hajkbz['setType'] = function (wc3rim) {}, hajkbz['setFontFace'] = function (ajb) {}, hajkbz['addEventListener'] = function (g71u) {}, hajkbz['contains'] = function (_ds$4) {
        return null;
      }, hajkbz['removeChild'] = function (n0y4_x) {}, hajkbz;
    }, azbjk['createShaderCondition'] = function (sx8_4n) {
      var tof = this,
          veu7g = function () {
        var yn0x3 = sx8_4n;return tof[sx8_4n['replace']('this.', '')];
      };return veu7g;
    }, azbjk['EnvConfig'] = null, azbjk['window'] = null, azbjk['_preCreateElement'] = null, azbjk['_inited'] = ![], azbjk['wxRequest'] = null, azbjk['systemInfo'] = null, azbjk['version'] = '0.0.1', azbjk['isZiYu'] = ![], azbjk['isPosMsgYu'] = ![], azbjk['parseXMLFromString'] = function (d2jba) {
      var kjba2, $s48d2;d2jba = d2jba['replace'](/>\s+</g, '><');try {
        kjba2 = new window['Parser']['DOMParser']()['parseFromString'](d2jba, 'text/xml');
      } catch (q5lhzt) {
        throw '需要引入xml解析库文件';
      }return kjba2;
    }, azbjk['idx'] = 0x1, azbjk;
  }(),
      khjabz = function () {
    function s_4$d() {}$2db(s_4$d, 'laya.wx.mini.MiniImage');var xy_48 = s_4$d['prototype'];return xy_48['_loadImage'] = function (kzjh) {
      var zbhak = this,
          _3y0xn = ![];kzjh['indexOf']('layaNativeDir/') == -0x1 && (_3y0xn = !![], kzjh = s$48['formatURL'](kzjh));if (!nyx_48['getFileInfo'](kzjh)) {
        if (kzjh['indexOf']('http://') != -0x1 || kzjh['indexOf']('https://') != -0x1) nyx_48['downImg'](kzjh, new bjzkha(s_4$d, s_4$d['onDownImgCallBack'], [kzjh, zbhak]), kzjh);else s_4$d['onCreateImage'](kzjh, zbhak, !![]);
      } else s_4$d['onCreateImage'](kzjh, zbhak, !_3y0xn);
    }, s_4$d['onDownImgCallBack'] = function (t7f9o, ve17o, pe61gu) {
      if (!pe61gu) s_4$d['onCreateImage'](t7f9o, ve17o);else ve17o['onError'](null);
    }, s_4$d['onCreateImage'] = function (fv7o5, d2kab, gpue6) {
      gpue6 === void 0x0 && (gpue6 = ![]);var e61p;if (!gpue6) {
        var ry0m3 = nyx_48['getFileInfo'](fv7o5),
            c0my = ry0m3['md5'];e61p = nyx_48['getFileNativePath'](c0my);
      } else e61p = fv7o5;if (d2kab['imgCache'] == null) d2kab['imgCache'] = {};var jkqaz;function f19vo() {
        jkqaz['onload'] = null, jkqaz['onerror'] = null, delete d2kab['imgCache'][fv7o5];
      };var ri0c3m = function () {
        f19vo(), d2kab['onLoaded'](jkqaz);
      },
          y0_n3 = function () {
        f19vo(), d2kab['event']('error', 'Load image failed');
      };d2kab['_type'] == 'nativeimage' ? (jkqaz = new euv1g6['window']['Image'](), jkqaz['crossOrigin'] = '', jkqaz['onload'] = ri0c3m, jkqaz['onerror'] = y0_n3, jkqaz['src'] = e61p, d2kab['imgCache'][fv7o5] = jkqaz) : new hj2kb['create'](e61p, { 'onload': ri0c3m, 'onerror': y0_n3, 'onCreate': function (a2ds) {
          jkqaz = a2ds, d2kab['imgCache'][fv7o5] = a2ds;
        } });
    }, s_4$d;
  }(),
      eo9v71 = function () {
    function ja() {}return $2db(ja, 'laya.wx.mini.MiniInput'), ja['_createInputElement'] = function () {
      s4$8d_['_initInput'](s4$8d_['area'] = euv1g6['createElement']('textarea')), s4$8d_['_initInput'](s4$8d_['input'] = euv1g6['createElement']('input')), s4$8d_['inputContainer'] = euv1g6['createElement']('div'), s4$8d_['inputContainer']['style']['position'] = 'absolute', s4$8d_['inputContainer']['style']['zIndex'] = 0x186a0, euv1g6['container']['appendChild'](s4$8d_['inputContainer']), s4$8d_['inputContainer']['setPos'] = function (y0n3x_, hklzjq) {
        s4$8d_['inputContainer']['style']['left'] = y0n3x_ + 'px', s4$8d_['inputContainer']['style']['top'] = hklzjq + 'px';
      }, n_48$s['stage']['on']('resize', null, ja['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ltj) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ir3mwc['_soundClass'] = f9vo75, ir3mwc['_musicClass'] = f9vo75;
    }, ja['_onStageResize'] = function () {
      var tf59o = n_48$s['stage']['_canvasTransform']['identity']();tf59o['scale'](euv1g6['width'] / zajhb['canvas']['width'] / kjb['getPixelRatio'](), euv1g6['height'] / zajhb['canvas']['height'] / kjb['getPixelRatio']());
    }, ja['wxinputFocus'] = function (rci0m) {
      var nxr30 = s4$8d_['inputElement']['target'];if (nxr30 && !nxr30['editable']) return;sx8n4_['window']['wx']['offKeyboardConfirm'](), sx8n4_['window']['wx']['offKeyboardInput'](), sx8n4_['window']['wx']['showKeyboard']({ 'defaultValue': nxr30['text'], 'maxLength': nxr30['maxChars'], 'multiple': nxr30['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (d$8_s4) {}, 'fail': function (qhjklz) {} }), sx8n4_['window']['wx']['onKeyboardConfirm'](function (x3yr) {
        var y0nrx3 = x3yr ? x3yr['value'] : '';nxr30['text'] = y0nrx3, nxr30['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), sx8n4_['window']['wx']['onKeyboardInput'](function (qzkjha) {
        var hqljzk = qzkjha ? qzkjha['value'] : '';if (!nxr30['multiline']) {
          if (hqljzk['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }nxr30['text'] = hqljzk, nxr30['event']('input');
      });
    }, ja['inputEnter'] = function () {
      s4$8d_['inputElement']['target']['focus'] = ![];
    }, ja['wxinputblur'] = function () {
      ja['hideKeyboard']();
    }, ja['hideKeyboard'] = function () {
      sx8n4_['window']['wx']['offKeyboardConfirm'](), sx8n4_['window']['wx']['offKeyboardInput'](), sx8n4_['window']['wx']['hideKeyboard']({ 'success': function (lkzjh) {
          console['log']('隐藏键盘');
        }, 'fail': function (of5) {
          console['log']('隐藏键盘出错:' + (of5 ? of5['errMsg'] : ''));
        } });
    }, ja;
  }(),
      r30cym = function () {
    function jbhka2() {}$2db(jbhka2, 'laya.wx.mini.MiniLoader');var qjzlh = jbhka2['prototype'];return qjzlh['load'] = function (adbs$2, khqzj, n_y48x, zakqh, n8x_4) {
      n_y48x === void 0x0 && (n_y48x = !![]), n8x_4 === void 0x0 && (n8x_4 = ![]);var aqzh = this;aqzh['_url'] = adbs$2;if (adbs$2['indexOf']('data:image') === 0x0) aqzh['_type'] = khqzj = 'image';else aqzh['_type'] = khqzj || (khqzj = aqzh['getTypeFromUrl'](adbs$2));aqzh['_cache'] = n_y48x, aqzh['_data'] = null;var dbas$ = 'ascii';if (adbs$2['indexOf']('.fnt') != -0x1) dbas$ = 'utf8';else khqzj == 'arraybuffer' && (dbas$ = '');;var v597f = $sd8b['getFileExtension'](adbs$2);if (jbhka2['_fileTypeArr']['indexOf'](v597f) != -0x1) sx8n4_['EnvConfig']['load']['call'](this, adbs$2, khqzj, n_y48x, zakqh, n8x_4);else {
        if (!nyx_48['getFileInfo'](adbs$2)) {
          if (adbs$2['indexOf']('layaNativeDir/') != -0x1) {
            if (sx8n4_['isZiYu']) {
              var qtlh = nyx_48['ziyuFileData'][adbs$2];aqzh['onLoaded'](qtlh);return;
            } else {
              cosnole['log']('read read'), nyx_48['read'](adbs$2, dbas$, new bjzkha(jbhka2, jbhka2['onReadNativeCallBack'], [dbas$, adbs$2, khqzj, n_y48x, zakqh, n8x_4, aqzh]));return;
            }
          }if (s$48['rootPath'] == '') var kbh2 = adbs$2;else kbh2 = adbs$2['split'](s$48['rootPath'])[0x0];adbs$2['indexOf']('http://') != -0x1 || adbs$2['indexOf']('https://') != -0x1 ? sx8n4_['EnvConfig']['load']['call'](aqzh, adbs$2, khqzj, n_y48x, zakqh, n8x_4) : nyx_48['readFile'](kbh2, dbas$, new bjzkha(jbhka2, jbhka2['onReadNativeCallBack'], [dbas$, adbs$2, khqzj, n_y48x, zakqh, n8x_4, aqzh]), adbs$2);
        } else sx8n4_['EnvConfig']['load']['call'](this, adbs$2, khqzj, n_y48x, zakqh, n8x_4);
      }
    }, qjzlh['resMgrLoad'] = function (s_8d, nx04_y, jqh, hltz5, of7v91, $84_sd, hqtljz) {
      jqh === void 0x0 && (jqh = 0x0), hltz5 === void 0x0 && (hltz5 = ![]), of7v91 === void 0x0 && (of7v91 = ![]), $84_sd === void 0x0 && ($84_sd = 0x0), hqtljz === void 0x0 && (hqtljz = 0x3), s_8d['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', s_8d), sx8n4_['EnvConfig']['resMgrLoad'](s_8d, (jlkqh, flt9q, o5vf) => {
        jbhka2['prototype']['resMgrLoadCallBack'](jlkqh, flt9q, o5vf, nx04_y);
      }, jqh, hltz5, of7v91, $84_sd, hqtljz);
    }, qjzlh['resMgrLoadCallBack'] = function (y3n0r, ka2$db, ka2d$, cr30m) {
      console['log']('buff:::', y3n0r, ka2d$, nyx_48['fileNativeDir'] + '///' + nyx_48['fileListName']), cr30m(y3n0r, ka2$db, ka2d$);
    }, qjzlh['clearRes'] = function (pu61ge, azjkhq) {
      azjkhq === void 0x0 && (azjkhq = ![]);var ug1ep = this;ug1ep['clearRes'](pu61ge, azjkhq);var $ak = nyx_48['getFileInfo'](pu61ge);if ($ak && (pu61ge['indexOf']('http://') != -0x1 || pu61ge['indexOf']('https://') != -0x1)) {
        var _x3n0y = $ak['md5'],
            xy4_0 = nyx_48['getFileNativePath'](_x3n0y);nyx_48['remove'](xy4_0);
      }
    }, jbhka2['onReadNativeCallBack'] = function (bjadk2, qft9l, x_0n3y, lztq5h, vo17e9, fq9, z5tqfl, abd2$s, htzqj) {
      lztq5h === void 0x0 && (lztq5h = !![]), fq9 === void 0x0 && (fq9 = ![]), abd2$s === void 0x0 && (abd2$s = 0x0);if (!abd2$s) {
        var _ns48$;if (x_0n3y == 'json' || x_0n3y == 'atlas') _ns48$ = sx8n4_['getJson'](htzqj['data']);else x_0n3y == 'xml' ? _ns48$ = $sd8b['parseXMLFromString'](htzqj['data']) : _ns48$ = htzqj['data'];z5tqfl['onLoaded'](_ns48$), !sx8n4_['isZiYu'] && sx8n4_['isPosMsgYu'] && x_0n3y != 'arraybuffer' && wx['postMessage']({ 'url': qft9l, 'data': _ns48$, 'isLoad': !![] });
      } else abd2$s == 0x1 && sx8n4_['EnvConfig']['load']['call'](z5tqfl, qft9l, x_0n3y, lztq5h, vo17e9, fq9);
    }, kaqzh(jbhka2, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jbhka2;
  }(),
      nyx_48 = function (tjzqlh) {
    function ljztqh() {
      ljztqh['__super']['call'](this);;
    }return $2db(ljztqh, 'laya.wx.mini.MiniFileMgr', tjzqlh), ljztqh['isLoadFile'] = function (peu1) {
      return ljztqh['_fileTypeArr']['indexOf'](peu1) != -0x1 ? !![] : ![];
    }, ljztqh['getFileInfo'] = function (d2sb8$) {
      var uv61eg = d2sb8$['split']('?')[0x0],
          _84$d = ljztqh['filesListObj'][uv61eg];if (_84$d == null) return null;else return _84$d;return null;
    }, ljztqh['onFileUpdate'] = function (ug71ve, _n3yx0) {
      var xn0_ = ug71ve['split']('/'),
          f5t9ql = xn0_[xn0_['length'] - 0x1],
          n48 = ljztqh['getFileInfo'](_n3yx0);if (n48 == null) ljztqh['onSaveFile'](_n3yx0, f5t9ql);else {
        if (n48['readyUrl'] != _n3yx0) ljztqh['remove'](f5t9ql, _n3yx0);
      }
    }, ljztqh['exits'] = function (x40, $ad) {
      var qtlf5z = ljztqh['getFileNativePath'](x40);ljztqh['fs']['getFileInfo']({ 'filePath': qtlf5z, 'success': function (icm0r) {
          $ad != null && $ad['runWith']([0x0, icm0r]);
        }, 'fail': function (xrny03) {
          $ad != null && $ad['runWith']([0x1, xrny03]);
        } });
    }, ljztqh['read'] = function (d$ka2, vg71u, s4_$d8, tfzl5q) {
      vg71u === void 0x0 && (vg71u = 'ascill'), tfzl5q === void 0x0 && (tfzl5q = '');var _8sn;tfzl5q != '' ? _8sn = ljztqh['getFileNativePath'](d$ka2) : _8sn = d$ka2, ljztqh['fs']['readFile']({ 'filePath': _8sn, 'encoding': vg71u, 'success': function (hkqajz) {
          s4_$d8 != null && s4_$d8['runWith']([0x0, hkqajz]);
        }, 'fail': function (khqzjl) {
          if (khqzjl && tfzl5q != '') ljztqh['down'](tfzl5q, vg71u, s4_$d8, tfzl5q);else s4_$d8 != null && s4_$d8['runWith']([0x1]);
        } });
    }, ljztqh['readNativeFile'] = function (hqlzkj, u16pe) {
      ljztqh['fs']['readFile']({ 'filePath': hqlzkj, 'encoding': '', 'success': function (jk2h) {
          u16pe != null && u16pe['runWith']([0x0]);
        }, 'fail': function (jhkbaz) {
          u16pe != null && u16pe['runWith']([0x1]);
        } });
    }, ljztqh['down'] = function (mric3w, ny30rx, eu7v, x8_sn4) {
      ny30rx === void 0x0 && (ny30rx = 'ascill'), x8_sn4 === void 0x0 && (x8_sn4 = '');var d_8$s4 = ljztqh['getFileNativePath'](x8_sn4),
          _3yxn = ljztqh['wxdown']({ 'url': mric3w, 'filePath': d_8$s4, 'success': function (jakzhq) {
          if (jakzhq['statusCode'] === 0xc8) ljztqh['readFile'](jakzhq['filePath'], ny30rx, eu7v, x8_sn4);
        }, 'fail': function (o79v5) {
          eu7v != null && eu7v['runWith']([0x1, o79v5]);
        } });_3yxn['onProgressUpdate'](function (sn4$8) {
        eu7v != null && eu7v['runWith']([0x2, sn4$8['progress']]);
      });
    }, ljztqh['readFile'] = function ($824d, qazjk, oe7v9, eo1v79) {
      qazjk === void 0x0 && (qazjk = 'ascill'), eo1v79 === void 0x0 && (eo1v79 = ''), ljztqh['fs']['readFile']({ 'filePath': $824d, 'encoding': qazjk, 'success': function (yx0r3n) {
          if ($824d['indexOf']('http://') != -0x1 || $824d['indexOf']('https://') != -0x1) ljztqh['onFileUpdate']($824d, eo1v79);oe7v9 != null && oe7v9['runWith']([0x0, yx0r3n]);
        }, 'fail': function (abjkd2) {
          if (abjkd2) oe7v9 != null && oe7v9['runWith']([0x1, abjkd2]);
        } });
    }, ljztqh['downImg'] = function ($ba2sd, im3r0, fqz5lt) {
      fqz5lt === void 0x0 && (fqz5lt = '');var pue61g = ljztqh['wxdown']({ 'url': $ba2sd, 'success': function (thjq) {
          thjq['statusCode'] === 0xc8 && ljztqh['copyFile'](thjq['tempFilePath'], fqz5lt, im3r0);
        }, 'fail': function (y30xnr) {
          im3r0 != null && im3r0['runWith']([0x1, y30xnr]);
        } });
    }, ljztqh['copyFile'] = function (mwic3r, n4y_x8, t59flo) {
      var s4_n = mwic3r['split']('/'),
          x0ryc3 = s4_n[s4_n['length'] - 0x1],
          ov7e19 = n4y_x8['split']('?')[0x0],
          s2bda = ljztqh['getFileInfo'](n4y_x8),
          xy03_n = ljztqh['getFileNativePath'](x0ryc3);ljztqh['fs']['copyFile']({ 'srcPath': mwic3r, 'destPath': xy03_n, 'success': function ($dkab) {
          if (!s2bda) ljztqh['onSaveFile'](n4y_x8, x0ryc3), t59flo != null && t59flo['runWith']([0x0]);else {
            if (s2bda['readyUrl'] != n4y_x8) ljztqh['remove'](x0ryc3, n4y_x8, t59flo);
          }
        }, 'fail': function (o1e79) {
          t59flo != null && t59flo['runWith']([0x1, o1e79]);
        } });
    }, ljztqh['getFileNativePath'] = function (xy0_4n) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xy0_4n;
    }, ljztqh['remove'] = function (xnry30, uev1g6, cy) {
      uev1g6 === void 0x0 && (uev1g6 = '');var ciwr3m = ljztqh['getFileInfo'](uev1g6),
          hqzltj = ljztqh['getFileNativePath'](ciwr3m['md5']);n_48$s['loader']['clearRes'](ciwr3m['readyUrl']), ljztqh['fs']['unlink']({ 'filePath': hqzltj, 'success': function (v16ueg) {
          if (uev1g6 != '') ljztqh['onSaveFile'](uev1g6, xnry30);cy != null && cy['runWith']([0x0]);
        }, 'fail': function (rnxy30) {} });
    }, ljztqh['onSaveFile'] = function (a$k2db, xrc0y) {
      var zqka = a$k2db['split']('?')[0x0];ljztqh['filesListObj'][zqka] = { 'md5': xrc0y, 'readyUrl': a$k2db }, ljztqh['fs']['writeFile']({ 'filePath': ljztqh['fileNativeDir'] + '/' + ljztqh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ljztqh['filesListObj']), 'success': function (x0n3ry) {
          console['log']('写入测试测试成功：', x0n3ry);
        }, 'fail': function (yc03x) {
          console['log']('写入测试测试失败：', yc03x);
        } });
    }, ljztqh['existDir'] = function (hzql, ak2jd) {
      ljztqh['fs']['mkdir']({ 'dirPath': hzql, 'success': function (x8y_) {
          ak2jd != null && ak2jd['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hqjlzt) {
          if (hqjlzt['errMsg']['indexOf']('file already exists') != -0x1) ljztqh['readSync'](ljztqh['fileListName'], 'utf8', ak2jd);else ak2jd != null && ak2jd['runWith']([0x1, hqjlzt]);
        } });
    }, ljztqh['readSync'] = function ($28ds, jzahkq, kqhaz, rc3iwm) {
      jzahkq === void 0x0 && (jzahkq = 'ascill'), rc3iwm === void 0x0 && (rc3iwm = '');var r3wm = ljztqh['getFileNativePath']($28ds),
          bka2j;try {
        bka2j = ljztqh['fs']['readFileSync'](r3wm), kqhaz != null && kqhaz['runWith']([0x0, { 'data': bka2j }]);
      } catch (e1gu6v) {
        kqhaz != null && kqhaz['runWith']([0x1]);
      }
    }, ljztqh['readCache'] = function () {}, ljztqh['writeCache'] = function (hajkb2) {
      var kzahj = readyUrl['split']('?')[0x0];ljztqh['filesListObj'][kzahj] = { 'md5': md5Name, 'readyUrl': readyUrl }, ljztqh['fs']['writeFile']({ 'filePath': ljztqh['fileNativeDir'] + '/' + ljztqh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ljztqh['filesListObj']), 'success': function (hakbj2) {}, 'fail': function (q9ftl) {} });
    }, ljztqh['setNativeFileDir'] = function (qzjhl) {
      ljztqh['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + qzjhl;
    }, ljztqh['filesListObj'] = {}, ljztqh['fileNativeDir'] = null, ljztqh['fileListName'] = 'layaairfiles.txt', ljztqh['ziyuFileData'] = {}, kaqzh(ljztqh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ljztqh;
  }(o5fv),
      f9vo75 = function (sda$b) {
    function mr03ic() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], mr03ic['__super']['call'](this), this['_sound'] = mr03ic['_createSound']();
    }$2db(mr03ic, 'laya.wx.mini.MiniSound', sda$b);var zhjqa = mr03ic['prototype'];return zhjqa['load'] = function (irmwc3) {
      var iwcrm3 = this;irmwc3 = s$48['formatURL'](irmwc3), this['url'] = irmwc3;if (mr03ic['_audioCache'][irmwc3]) {
        this['event']('complete');return;
      }function khqzlj() {
        if (mr03ic['_null'] != undefined) iwcrm3['_sound']['onCanplay'](mr03ic['_null']), iwcrm3['_sound']['onError'](mr03ic['_null']);else try {
          iwcrm3['_sound']['onCanplay'](null), iwcrm3['_sound']['onError'](null), mr03ic['_null'] = null;
        } catch (s$2bda) {
          console['warn']('[wxmini] _clearSound:' + s$2bda), iwcrm3['_sound']['onCanplay'](u6g1p), iwcrm3['_sound']['onError'](u6g1p), mr03ic['_null'] = u6g1p;
        }
      }function abkd$2() {
        khqzlj(), ev71['loaded'] = !![], ev71['event']('complete'), mr03ic['_audioCache'][ev71['url']] = ev71;
      }function _nyx0(jahb2) {
        console['error']('errCode=' + jahb2['errCode'] + '  errMsg=' + jahb2['errMsg']), khqzlj(), ev71['event']('error');
      }function u6g1p() {}this['_sound']['onCanplay'](abkd$2), this['_sound']['onError'](_nyx0), this['_sound']['src'] = irmwc3;var ev71 = this;
    }, zhjqa['play'] = function (ugp1e, f5qzl) {
      ugp1e === void 0x0 && (ugp1e = 0x0), f5qzl === void 0x0 && (f5qzl = 0x0);var rc3xy;if (this['url'] == ir3mwc['_tMusic']) {
        if (!mr03ic['_musicAudio']) mr03ic['_musicAudio'] = mr03ic['_createSound']();rc3xy = mr03ic['_musicAudio'];
      } else rc3xy = mr03ic['_createSound']();rc3xy['src'] = this['url'];var k2bajd = new l5qh(rc3xy);return k2bajd['url'] = this['url'], k2bajd['loops'] = f5qzl, k2bajd['startTime'] = ugp1e, k2bajd['play'](), ir3mwc['addChannel'](k2bajd), k2bajd;
    }, zhjqa['dispose'] = function () {
      var s_n = mr03ic['_audioCache'][this['url']];s_n && (s_n['src'] = '', delete mr03ic['_audioCache'][this['url']]);
    }, vf71o9(0x0, zhjqa, 'duration', function () {
      return this['_sound']['duration'];
    }), mr03ic['_createSound'] = function () {
      return mr03ic['_id']++, sx8n4_['window']['wx']['createInnerAudioContext']();
    }, mr03ic['_musicAudio'] = null, mr03ic['_id'] = 0x0, mr03ic['_audioCache'] = {}, mr03ic['_null'] = undefined, mr03ic;
  }(o5fv),
      l5qh = function (jzklhq) {
    function v7e1o(kjaqz) {
      this['_audio'] = null, this['_onEnd'] = null, v7e1o['__super']['call'](this), this['_audio'] = kjaqz, this['_onEnd'] = $sd8b['bind'](this['__onEnd'], this), kjaqz['onEnded'](this['_onEnd']);
    }$2db(v7e1o, 'laya.wx.mini.MiniSoundChannel', jzklhq);var ny3x0 = v7e1o['prototype'];return ny3x0['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (n_48$s['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ny3x0['__onNull'] = function () {}, ny3x0['play'] = function () {
      this['isStopped'] = ![], ir3mwc['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ny3x0['stop'] = function () {
      this['isStopped'] = !![], ir3mwc['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (v7e1o['_null'] != undefined) this['_audio']['onEnded'](v7e1o['_null']);else try {
        this['_audio']['onEnded'](null), v7e1o['_null'] = null;
      } catch (sb$2) {
        console['warn']('[wxmini] stop:' + sb$2), this['_audio']['onEnded']($sd8b['bind'](this['__onNull'], this)), v7e1o['_null'] = $sd8b['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ny3x0['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ny3x0['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ir3mwc['addChannel'](this), this['_audio']['play']();
    }, vf71o9(0x0, ny3x0, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), vf71o9(0x0, ny3x0, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), vf71o9(0x0, ny3x0, 'volume', function () {
      return 0x1;
    }, function (uvg6) {}), v7e1o['_null'] = undefined, v7e1o;
  }(hlkqz);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var zf5tq in Laya) {
    var to5l9f = Laya[zf5tq];to5l9f && to5l9f['__isclass'] && (exports[zf5tq] = to5l9f);
  }
});