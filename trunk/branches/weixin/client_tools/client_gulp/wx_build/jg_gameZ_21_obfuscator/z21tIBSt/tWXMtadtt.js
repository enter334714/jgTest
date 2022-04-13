var v = wx.$d;
(function (window, document, wrnec7) {
  var ncer7j = wrnec7['un'],
      q45xa = wrnec7['uns'],
      fldx9 = wrnec7['static'],
      _1z62 = wrnec7['class'],
      yzvwk = wrnec7['getset'],
      f9uadx = wrnec7['__newvec'],
      dufl = laya['utils']['Browser'],
      x45aqp = laya['events']['Event'],
      w3vkzy = laya['events']['EventDispatcher'],
      ykc7nw = laya['resource']['HTMLImage'],
      f9dxl = laya['utils']['Handler'],
      b618 = laya['display']['Input'],
      i_v = laya['net']['Loader'],
      w3kv = laya['maths']['Matrix'],
      cj7rn = laya['renders']['Render'],
      zvk_2 = laya['utils']['RunDriver'],
      a9fud = laya['media']['Sound'],
      aufx9 = laya['media']['SoundChannel'],
      _kz32v = laya['media']['SoundManager'],
      mqo40 = laya['display']['Stage'],
      ui8flb = laya['net']['URL'],
      fxd9u = laya['utils']['Utils'],
      f1bil = function () {
    function h$0omt() {}return _1z62(h$0omt, 'laya.wx.mini.MiniAdpter'), h$0omt['getJson'] = function (om0qh$) {
      return JSON['parse'](om0qh$);
    }, h$0omt['init'] = function (v_6i1, _2iv16) {
      v_6i1 === void 0x0 && (v_6i1 = ![]), _2iv16 === void 0x0 && (_2iv16 = ![]);if (h$0omt['_inited']) return;h$0omt['window'] = window;if (h$0omt['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;h$0omt['_inited'] = !![], h$0omt['isZiYu'] = _2iv16, h$0omt['isPosMsgYu'] = v_6i1, h$0omt['EnvConfig'] = {}, !h$0omt['isZiYu'] && (cwz3k['setNativeFileDir']('/layaairGame'), cwz3k['existDir'](cwz3k['fileNativeDir'], f9dxl['create'](h$0omt, h$0omt['onMkdirCallBack']))), h$0omt['window']['focus'] = function () {}, wrnec7['getUrlPath'] = function () {}, h$0omt['window']['logtime'] = function (fbi8ul) {}, h$0omt['window']['alertTimeLog'] = function (qa45px) {}, h$0omt['window']['resetShareInfo'] = function () {}, h$0omt['window']['CanvasRenderingContext2D'] = function () {}, h$0omt['window']['CanvasRenderingContext2D']['prototype'] = h$0omt['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], h$0omt['window']['document']['body']['appendChild'] = function () {}, h$0omt['EnvConfig']['pixelRatioInt'] = 0x0, zvk_2['getPixelRatio'] = h$0omt['pixelRatio'], h$0omt['_preCreateElement'] = dufl['createElement'], dufl['createElement'] = h$0omt['createElement'], zvk_2['createShaderCondition'] = h$0omt['createShaderCondition'], fxd9u['parseXMLFromString'] = h$0omt['parseXMLFromString'], b618['_createInputElement'] = oq0m$['_createInputElement'], h$0omt['EnvConfig']['load'] = i_v['prototype']['load'], i_v['prototype']['load'] = nywec['prototype']['load'], h$0omt['isZiYu'] && v_6i1 && wx['onMessage'](function (xap59d) {
        xap59d['isLoad'] && (cwz3k['ziyuFileData'][xap59d['url']] = xap59d['data']);
      });
    }, h$0omt['onMkdirCallBack'] = function (kz23y, lb16) {
      if (!kz23y) cwz3k['filesListObj'] = JSON['parse'](lb16['data']);
    }, h$0omt['pixelRatio'] = function () {
      if (!h$0omt['EnvConfig']['pixelRatioInt']) try {
        var rncew = wx['getSystemInfoSync']();return h$0omt['EnvConfig']['pixelRatioInt'] = rncew['pixelRatio'], rncew = rncew, rncew['pixelRatio'];
      } catch (zvk3w) {}return h$0omt['EnvConfig']['pixelRatioInt'];
    }, h$0omt['createElement'] = function (h0t$mo) {
      if (h0t$mo == 'canvas') {
        var i_8b6;return h$0omt['idx'] == 0x1 ? h$0omt['isZiYu'] ? (i_8b6 = sharedCanvas, i_8b6['style'] = {}) : i_8b6 = window['canvas'] : i_8b6 = window['wx']['createCanvas'](), h$0omt['idx']++, i_8b6;
      } else {
        if (h0t$mo == 'textarea' || h0t$mo == 'input') return h$0omt['onCreateInput'](h0t$mo);else {
          if (h0t$mo == 'div') {
            var kwvzy3 = h$0omt['_preCreateElement'](h0t$mo);return kwvzy3['contains'] = function (rnc7) {
              return null;
            }, kwvzy3['removeChild'] = function (v2_1) {}, kwvzy3;
          } else return h$0omt['_preCreateElement'](h0t$mo);
        }
      }
    }, h$0omt['onCreateInput'] = function ($mto0g) {
      var aq5ph = h$0omt['_preCreateElement']($mto0g);return aq5ph['focus'] = oq0m$['wxinputFocus'], aq5ph['blur'] = oq0m$['wxinputblur'], aq5ph['style'] = {}, aq5ph['value'] = 0x0, aq5ph['parentElement'] = {}, aq5ph['placeholder'] = {}, aq5ph['type'] = {}, aq5ph['setColor'] = function (lb8i1) {}, aq5ph['setType'] = function (a54x9p) {}, aq5ph['setFontFace'] = function (h5pq4) {}, aq5ph['addEventListener'] = function (uld9fx) {}, aq5ph['contains'] = function (p5o4qh) {
        return null;
      }, aq5ph['removeChild'] = function (i8_b) {}, aq5ph;
    }, h$0omt['createShaderCondition'] = function (i216v) {
      var ykw73 = this,
          fld9u = function () {
        var wz3yk = i216v;return ykw73[i216v['replace']('this.', '')];
      };return fld9u;
    }, h$0omt['EnvConfig'] = null, h$0omt['window'] = null, h$0omt['_preCreateElement'] = null, h$0omt['_inited'] = ![], h$0omt['wxRequest'] = null, h$0omt['systemInfo'] = null, h$0omt['version'] = '0.0.1', h$0omt['isZiYu'] = ![], h$0omt['isPosMsgYu'] = ![], h$0omt['parseXMLFromString'] = function (b86_1i) {
      var rnw7ce, r7wecn;b86_1i = b86_1i['replace'](/>\s+</g, '><');try {
        rnw7ce = new window['Parser']['DOMParser']()['parseFromString'](b86_1i, 'text/xml');
      } catch (x5apd9) {
        throw '需要引入xml解析库文件';
      }return rnw7ce;
    }, h$0omt['idx'] = 0x1, h$0omt;
  }(),
      op0h = function () {
    function $0oht() {}_1z62($0oht, 'laya.wx.mini.MiniImage');var _zvk23 = $0oht['prototype'];return _zvk23['_loadImage'] = function (xu9dl) {
      var iv126_ = this,
          kyw3vz = ![];xu9dl['indexOf']('layaNativeDir/') == -0x1 && (kyw3vz = !![], xu9dl = ui8flb['formatURL'](xu9dl));if (!cwz3k['getFileInfo'](xu9dl)) {
        if (xu9dl['indexOf']('http://') != -0x1 || xu9dl['indexOf']('https://') != -0x1) cwz3k['downImg'](xu9dl, new f9dxl($0oht, $0oht['onDownImgCallBack'], [xu9dl, iv126_]), xu9dl);else $0oht['onCreateImage'](xu9dl, iv126_, !![]);
      } else $0oht['onCreateImage'](xu9dl, iv126_, !kyw3vz);
    }, $0oht['onDownImgCallBack'] = function (o0qm$, kcy7wn, hq5op4) {
      if (!hq5op4) $0oht['onCreateImage'](o0qm$, kcy7wn);else kcy7wn['onError'](null);
    }, $0oht['onCreateImage'] = function (ecj7rn, vk3wzy, dlf8b) {
      dlf8b === void 0x0 && (dlf8b = ![]);var p5qh4a;if (!dlf8b) {
        var h$0otm = cwz3k['getFileInfo'](ecj7rn),
            ner7 = h$0otm['md5'];p5qh4a = cwz3k['getFileNativePath'](ner7);
      } else p5qh4a = ecj7rn;if (vk3wzy['imgCache'] == null) vk3wzy['imgCache'] = {};var p59dxa;function xp4aq5() {
        p59dxa['onload'] = null, p59dxa['onerror'] = null, delete vk3wzy['imgCache'][ecj7rn];
      };var hq40 = function () {
        xp4aq5(), vk3wzy['onLoaded'](p59dxa);
      },
          ywcne7 = function () {
        xp4aq5(), vk3wzy['event']('error', 'Load image failed');
      };vk3wzy['_type'] == 'nativeimage' ? (p59dxa = new dufl['window']['Image'](), p59dxa['crossOrigin'] = '', p59dxa['onload'] = hq40, p59dxa['onerror'] = ywcne7, p59dxa['src'] = p5qh4a, vk3wzy['imgCache'][ecj7rn] = p59dxa) : new ykc7nw['create'](p5qh4a, { 'onload': hq40, 'onerror': ywcne7, 'onCreate': function (auxd95) {
          p59dxa = auxd95, vk3wzy['imgCache'][ecj7rn] = auxd95;
        } });
    }, $0oht;
  }(),
      oq0m$ = function () {
    function afux9d() {}return _1z62(afux9d, 'laya.wx.mini.MiniInput'), afux9d['_createInputElement'] = function () {
      b618['_initInput'](b618['area'] = dufl['createElement']('textarea')), b618['_initInput'](b618['input'] = dufl['createElement']('input')), b618['inputContainer'] = dufl['createElement']('div'), b618['inputContainer']['style']['position'] = 'absolute', b618['inputContainer']['style']['zIndex'] = 0x186a0, dufl['container']['appendChild'](b618['inputContainer']), b618['inputContainer']['setPos'] = function (om0ht, _zv3) {
        b618['inputContainer']['style']['left'] = om0ht + 'px', b618['inputContainer']['style']['top'] = _zv3 + 'px';
      }, wrnec7['stage']['on']('resize', null, afux9d['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (t$mo) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), _kz32v['_soundClass'] = l9fbu, _kz32v['_musicClass'] = l9fbu;
    }, afux9d['_onStageResize'] = function () {
      var ycw3kz = wrnec7['stage']['_canvasTransform']['identity']();ycw3kz['scale'](dufl['width'] / cj7rn['canvas']['width'] / zvk_2['getPixelRatio'](), dufl['height'] / cj7rn['canvas']['height'] / zvk_2['getPixelRatio']());
    }, afux9d['wxinputFocus'] = function (z_126) {
      var b8i1fl = b618['inputElement']['target'];if (b8i1fl && !b8i1fl['editable']) return;f1bil['window']['wx']['offKeyboardConfirm'](), f1bil['window']['wx']['offKeyboardInput'](), f1bil['window']['wx']['showKeyboard']({ 'defaultValue': b8i1fl['text'], 'maxLength': b8i1fl['maxChars'], 'multiple': b8i1fl['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (v3kzy2) {}, 'fail': function (p9ax45) {} }), f1bil['window']['wx']['onKeyboardConfirm'](function (aq45ph) {
        var o$0tmg = aq45ph ? aq45ph['value'] : '';b8i1fl['text'] = o$0tmg, b8i1fl['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), f1bil['window']['wx']['onKeyboardInput'](function (mh4qo0) {
        var c7ywne = mh4qo0 ? mh4qo0['value'] : '';if (!b8i1fl['multiline']) {
          if (c7ywne['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }b8i1fl['text'] = c7ywne, b8i1fl['event']('input');
      });
    }, afux9d['inputEnter'] = function () {
      b618['inputElement']['target']['focus'] = ![];
    }, afux9d['wxinputblur'] = function () {
      afux9d['hideKeyboard']();
    }, afux9d['hideKeyboard'] = function () {
      f1bil['window']['wx']['offKeyboardConfirm'](), f1bil['window']['wx']['offKeyboardInput'](), f1bil['window']['wx']['hideKeyboard']({ 'success': function (v2_kz3) {
          console['log']('隐藏键盘');
        }, 'fail': function (_1iv62) {
          console['log']('隐藏键盘出错:' + (_1iv62 ? _1iv62['errMsg'] : ''));
        } });
    }, afux9d;
  }(),
      nywec = function () {
    function k3ywcz() {}_1z62(k3ywcz, 'laya.wx.mini.MiniLoader');var n7ywce = k3ywcz['prototype'];return n7ywce['load'] = function (qhop5, pa9x, _v36z, nr7jce, p45x9) {
      _v36z === void 0x0 && (_v36z = !![]), p45x9 === void 0x0 && (p45x9 = ![]);var n7kc = this;n7kc['_url'] = qhop5;if (qhop5['indexOf']('data:image') === 0x0) n7kc['_type'] = pa9x = 'image';else n7kc['_type'] = pa9x || (pa9x = n7kc['getTypeFromUrl'](qhop5));n7kc['_cache'] = _v36z, n7kc['_data'] = null;var d5xp9 = 'ascii';if (qhop5['indexOf']('.fnt') != -0x1) d5xp9 = 'utf8';else pa9x == 'arraybuffer' && (d5xp9 = '');;var wvyzk = fxd9u['getFileExtension'](qhop5);if (k3ywcz['_fileTypeArr']['indexOf'](wvyzk) != -0x1) f1bil['EnvConfig']['load']['call'](this, qhop5, pa9x, _v36z, nr7jce, p45x9);else {
        if (!cwz3k['getFileInfo'](qhop5)) {
          if (qhop5['indexOf']('layaNativeDir/') != -0x1) {
            if (f1bil['isZiYu']) {
              var lbf8i1 = cwz3k['ziyuFileData'][qhop5];n7kc['onLoaded'](lbf8i1);return;
            } else {
              cosnole['log']('read read'), cwz3k['read'](qhop5, d5xp9, new f9dxl(k3ywcz, k3ywcz['onReadNativeCallBack'], [d5xp9, qhop5, pa9x, _v36z, nr7jce, p45x9, n7kc]));return;
            }
          }if (ui8flb['rootPath'] == '') var udfa9x = qhop5;else udfa9x = qhop5['split'](ui8flb['rootPath'])[0x0];qhop5['indexOf']('http://') != -0x1 || qhop5['indexOf']('https://') != -0x1 ? f1bil['EnvConfig']['load']['call'](n7kc, qhop5, pa9x, _v36z, nr7jce, p45x9) : cwz3k['readFile'](udfa9x, d5xp9, new f9dxl(k3ywcz, k3ywcz['onReadNativeCallBack'], [d5xp9, qhop5, pa9x, _v36z, nr7jce, p45x9, n7kc]), qhop5);
        } else f1bil['EnvConfig']['load']['call'](this, qhop5, pa9x, _v36z, nr7jce, p45x9);
      }
    }, n7ywce['resMgrLoad'] = function (a49xp5, ul9b, c73wyk, nkcw7, b8dulf, ax9p45, yz3vk) {
      c73wyk === void 0x0 && (c73wyk = 0x0), nkcw7 === void 0x0 && (nkcw7 = ![]), b8dulf === void 0x0 && (b8dulf = ![]), ax9p45 === void 0x0 && (ax9p45 = 0x0), yz3vk === void 0x0 && (yz3vk = 0x3), a49xp5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', a49xp5), f1bil['EnvConfig']['resMgrLoad'](a49xp5, (pxa5q4, dluf9b, d59aux) => {
        k3ywcz['prototype']['resMgrLoadCallBack'](pxa5q4, dluf9b, d59aux, ul9b);
      }, c73wyk, nkcw7, b8dulf, ax9p45, yz3vk);
    }, n7ywce['resMgrLoadCallBack'] = function (hmoq4, yck3wz, t$0o, x5p4aq) {
      console['log']('buff:::', hmoq4, t$0o, cwz3k['fileNativeDir'] + '///' + cwz3k['fileListName']), x5p4aq(hmoq4, yck3wz, t$0o);
    }, n7ywce['clearRes'] = function (g0o, cwney) {
      cwney === void 0x0 && (cwney = ![]);var qoh$0 = this;qoh$0['clearRes'](g0o, cwney);var v6_3 = cwz3k['getFileInfo'](g0o);if (v6_3 && (g0o['indexOf']('http://') != -0x1 || g0o['indexOf']('https://') != -0x1)) {
        var d9bfu = v6_3['md5'],
            lufd9b = cwz3k['getFileNativePath'](d9bfu);cwz3k['remove'](lufd9b);
      }
    }, k3ywcz['onReadNativeCallBack'] = function (e7ncj, n7cwye, cjr7, er7cj, i_6, m0qo$h, vwzky, fb1l8i, fld9bu) {
      er7cj === void 0x0 && (er7cj = !![]), m0qo$h === void 0x0 && (m0qo$h = ![]), fb1l8i === void 0x0 && (fb1l8i = 0x0);if (!fb1l8i) {
        var qha45;if (cjr7 == 'json' || cjr7 == 'atlas') qha45 = f1bil['getJson'](fld9bu['data']);else cjr7 == 'xml' ? qha45 = fxd9u['parseXMLFromString'](fld9bu['data']) : qha45 = fld9bu['data'];vwzky['onLoaded'](qha45), !f1bil['isZiYu'] && f1bil['isPosMsgYu'] && cjr7 != 'arraybuffer' && wx['postMessage']({ 'url': n7cwye, 'data': qha45, 'isLoad': !![] });
      } else fb1l8i == 0x1 && f1bil['EnvConfig']['load']['call'](vwzky, n7cwye, cjr7, er7cj, i_6, m0qo$h);
    }, fldx9(k3ywcz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), k3ywcz;
  }(),
      cwz3k = function (il8b1f) {
    function cre7wn() {
      cre7wn['__super']['call'](this);;
    }return _1z62(cre7wn, 'laya.wx.mini.MiniFileMgr', il8b1f), cre7wn['isLoadFile'] = function (vz_36) {
      return cre7wn['_fileTypeArr']['indexOf'](vz_36) != -0x1 ? !![] : ![];
    }, cre7wn['getFileInfo'] = function (hoq0m) {
      var f8lib = hoq0m['split']('?')[0x0],
          v2_3zk = cre7wn['filesListObj'][f8lib];if (v2_3zk == null) return null;else return v2_3zk;return null;
    }, cre7wn['onFileUpdate'] = function (c7ynwe, fl9u) {
      var l9u = c7ynwe['split']('/'),
          cnwky7 = l9u[l9u['length'] - 0x1],
          p04qo = cre7wn['getFileInfo'](fl9u);if (p04qo == null) cre7wn['onSaveFile'](fl9u, cnwky7);else {
        if (p04qo['readyUrl'] != fl9u) cre7wn['remove'](cnwky7, fl9u);
      }
    }, cre7wn['exits'] = function (ha4p5, biufl) {
      var qpoh4 = cre7wn['getFileNativePath'](ha4p5);cre7wn['fs']['getFileInfo']({ 'filePath': qpoh4, 'success': function (hoq5p) {
          biufl != null && biufl['runWith']([0x0, hoq5p]);
        }, 'fail': function (_2i6v) {
          biufl != null && biufl['runWith']([0x1, _2i6v]);
        } });
    }, cre7wn['read'] = function (bfl1i8, jen7, z2vy, wnrce) {
      jen7 === void 0x0 && (jen7 = 'ascill'), wnrce === void 0x0 && (wnrce = '');var $oh0t;wnrce != '' ? $oh0t = cre7wn['getFileNativePath'](bfl1i8) : $oh0t = bfl1i8, cre7wn['fs']['readFile']({ 'filePath': $oh0t, 'encoding': jen7, 'success': function (kcwyz3) {
          z2vy != null && z2vy['runWith']([0x0, kcwyz3]);
        }, 'fail': function (rj7ne) {
          if (rj7ne && wnrce != '') cre7wn['down'](wnrce, jen7, z2vy, wnrce);else z2vy != null && z2vy['runWith']([0x1]);
        } });
    }, cre7wn['readNativeFile'] = function (c7wre, l8ifb1) {
      cre7wn['fs']['readFile']({ 'filePath': c7wre, 'encoding': '', 'success': function (i1bl8) {
          l8ifb1 != null && l8ifb1['runWith']([0x0]);
        }, 'fail': function (vi1_26) {
          l8ifb1 != null && l8ifb1['runWith']([0x1]);
        } });
    }, cre7wn['down'] = function (c3ykwz, uxd9fa, dlu9bf, yw73kc) {
      uxd9fa === void 0x0 && (uxd9fa = 'ascill'), yw73kc === void 0x0 && (yw73kc = '');var rwe7n = cre7wn['getFileNativePath'](yw73kc),
          lfxu9 = cre7wn['wxdown']({ 'url': c3ykwz, 'filePath': rwe7n, 'success': function (vkyz2) {
          if (vkyz2['statusCode'] === 0xc8) cre7wn['readFile'](vkyz2['filePath'], uxd9fa, dlu9bf, yw73kc);
        }, 'fail': function (w3yk7c) {
          dlu9bf != null && dlu9bf['runWith']([0x1, w3yk7c]);
        } });lfxu9['onProgressUpdate'](function (poqh0) {
        dlu9bf != null && dlu9bf['runWith']([0x2, poqh0['progress']]);
      });
    }, cre7wn['readFile'] = function (_2v1z6, v_i16, ny7e, u95d) {
      v_i16 === void 0x0 && (v_i16 = 'ascill'), u95d === void 0x0 && (u95d = ''), cre7wn['fs']['readFile']({ 'filePath': _2v1z6, 'encoding': v_i16, 'success': function (xud9) {
          if (_2v1z6['indexOf']('http://') != -0x1 || _2v1z6['indexOf']('https://') != -0x1) cre7wn['onFileUpdate'](_2v1z6, u95d);ny7e != null && ny7e['runWith']([0x0, xud9]);
        }, 'fail': function (z_vk32) {
          if (z_vk32) ny7e != null && ny7e['runWith']([0x1, z_vk32]);
        } });
    }, cre7wn['downImg'] = function (vk2z, h0q$, zwc3ky) {
      zwc3ky === void 0x0 && (zwc3ky = '');var _28i1 = cre7wn['wxdown']({ 'url': vk2z, 'success': function (rjcn7) {
          rjcn7['statusCode'] === 0xc8 && cre7wn['copyFile'](rjcn7['tempFilePath'], zwc3ky, h0q$);
        }, 'fail': function (b6l8i1) {
          h0q$ != null && h0q$['runWith']([0x1, b6l8i1]);
        } });
    }, cre7wn['copyFile'] = function (d9x5a, yc7wk, tho) {
      var lfdu = d9x5a['split']('/'),
          bf9l = lfdu[lfdu['length'] - 0x1],
          hoq54p = yc7wk['split']('?')[0x0],
          c7erjn = cre7wn['getFileInfo'](yc7wk),
          ul8fb = cre7wn['getFileNativePath'](bf9l);cre7wn['fs']['copyFile']({ 'srcPath': d9x5a, 'destPath': ul8fb, 'success': function (kz3v2y) {
          if (!c7erjn) cre7wn['onSaveFile'](yc7wk, bf9l), tho != null && tho['runWith']([0x0]);else {
            if (c7erjn['readyUrl'] != yc7wk) cre7wn['remove'](bf9l, yc7wk, tho);
          }
        }, 'fail': function (yk23z) {
          tho != null && tho['runWith']([0x1, yk23z]);
        } });
    }, cre7wn['getFileNativePath'] = function (ot$g) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ot$g;
    }, cre7wn['remove'] = function (lbud9f, i61bl8, pahq54) {
      i61bl8 === void 0x0 && (i61bl8 = '');var o$t0gm = cre7wn['getFileInfo'](i61bl8),
          c3k7 = cre7wn['getFileNativePath'](o$t0gm['md5']);wrnec7['loader']['clearRes'](o$t0gm['readyUrl']), cre7wn['fs']['unlink']({ 'filePath': c3k7, 'success': function (li8bfu) {
          if (i61bl8 != '') cre7wn['onSaveFile'](i61bl8, lbud9f);pahq54 != null && pahq54['runWith']([0x0]);
        }, 'fail': function (kzv2y3) {} });
    }, cre7wn['onSaveFile'] = function (_2i61, i8ful) {
      var k_3v = _2i61['split']('?')[0x0];cre7wn['filesListObj'][k_3v] = { 'md5': i8ful, 'readyUrl': _2i61 }, cre7wn['fs']['writeFile']({ 'filePath': cre7wn['fileNativeDir'] + '/' + cre7wn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](cre7wn['filesListObj']), 'success': function (cyne7) {
          console['log']('写入测试测试成功：', cyne7);
        }, 'fail': function (lub9) {
          console['log']('写入测试测试失败：', lub9);
        } });
    }, cre7wn['existDir'] = function (lfbu8, ph45o) {
      cre7wn['fs']['mkdir']({ 'dirPath': lfbu8, 'success': function (nr7cej) {
          ph45o != null && ph45o['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (v3yz2k) {
          if (v3yz2k['errMsg']['indexOf']('file already exists') != -0x1) cre7wn['readSync'](cre7wn['fileListName'], 'utf8', ph45o);else ph45o != null && ph45o['runWith']([0x1, v3yz2k]);
        } });
    }, cre7wn['readSync'] = function (px9a4, t0m$og, x4a, q5oph4) {
      t0m$og === void 0x0 && (t0m$og = 'ascill'), q5oph4 === void 0x0 && (q5oph4 = '');var mh$ = cre7wn['getFileNativePath'](px9a4),
          x59u;try {
        x59u = cre7wn['fs']['readFileSync'](mh$), x4a != null && x4a['runWith']([0x0, { 'data': x59u }]);
      } catch (yk3c7w) {
        x4a != null && x4a['runWith']([0x1]);
      }
    }, cre7wn['readCache'] = function () {}, cre7wn['writeCache'] = function (ilbf81) {
      var zcw3ky = readyUrl['split']('?')[0x0];cre7wn['filesListObj'][zcw3ky] = { 'md5': md5Name, 'readyUrl': readyUrl }, cre7wn['fs']['writeFile']({ 'filePath': cre7wn['fileNativeDir'] + '/' + cre7wn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](cre7wn['filesListObj']), 'success': function (c7nyw) {}, 'fail': function (kv2) {} });
    }, cre7wn['setNativeFileDir'] = function (h0poq4) {
      cre7wn['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + h0poq4;
    }, cre7wn['filesListObj'] = {}, cre7wn['fileNativeDir'] = null, cre7wn['fileListName'] = 'layaairfiles.txt', cre7wn['ziyuFileData'] = {}, fldx9(cre7wn, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), cre7wn;
  }(w3vkzy),
      l9fbu = function (ogm$t0) {
    function a5q4x() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], a5q4x['__super']['call'](this), this['_sound'] = a5q4x['_createSound']();
    }_1z62(a5q4x, 'laya.wx.mini.MiniSound', ogm$t0);var gm0to = a5q4x['prototype'];return gm0to['load'] = function (xpd59a) {
      var hom40q = this;xpd59a = ui8flb['formatURL'](xpd59a), this['url'] = xpd59a;if (a5q4x['_audioCache'][xpd59a]) {
        this['event']('complete');return;
      }function ynewc7() {
        if (a5q4x['_null'] != undefined) hom40q['_sound']['onCanplay'](a5q4x['_null']), hom40q['_sound']['onError'](a5q4x['_null']);else try {
          hom40q['_sound']['onCanplay'](null), hom40q['_sound']['onError'](null), a5q4x['_null'] = null;
        } catch (z2_63v) {
          console['warn']('[wxmini] _clearSound:' + z2_63v), hom40q['_sound']['onCanplay'](v1z_6), hom40q['_sound']['onError'](v1z_6), a5q4x['_null'] = v1z_6;
        }
      }function $ho0q() {
        ynewc7(), a4q5h['loaded'] = !![], a4q5h['event']('complete'), a5q4x['_audioCache'][a4q5h['url']] = a4q5h;
      }function m0q4(k3yc7) {
        console['error']('errCode=' + k3yc7['errCode'] + '  errMsg=' + k3yc7['errMsg']), ynewc7(), a4q5h['event']('error');
      }function v1z_6() {}this['_sound']['onCanplay']($ho0q), this['_sound']['onError'](m0q4), this['_sound']['src'] = xpd59a;var a4q5h = this;
    }, gm0to['play'] = function (dlu9x, _6182i) {
      dlu9x === void 0x0 && (dlu9x = 0x0), _6182i === void 0x0 && (_6182i = 0x0);var fu8lb;if (this['url'] == _kz32v['_tMusic']) {
        if (!a5q4x['_musicAudio']) a5q4x['_musicAudio'] = a5q4x['_createSound']();fu8lb = a5q4x['_musicAudio'];
      } else fu8lb = a5q4x['_createSound']();fu8lb['src'] = this['url'];var kvwyz = new zkv32_(fu8lb);return kvwyz['url'] = this['url'], kvwyz['loops'] = _6182i, kvwyz['startTime'] = dlu9x, kvwyz['play'](), _kz32v['addChannel'](kvwyz), kvwyz;
    }, gm0to['dispose'] = function () {
      var zkyw3c = a5q4x['_audioCache'][this['url']];zkyw3c && (zkyw3c['src'] = '', delete a5q4x['_audioCache'][this['url']]);
    }, yzvwk(0x0, gm0to, 'duration', function () {
      return this['_sound']['duration'];
    }), a5q4x['_createSound'] = function () {
      return a5q4x['_id']++, f1bil['window']['wx']['createInnerAudioContext']();
    }, a5q4x['_musicAudio'] = null, a5q4x['_id'] = 0x0, a5q4x['_audioCache'] = {}, a5q4x['_null'] = undefined, a5q4x;
  }(w3vkzy),
      zkv32_ = function (nceyw7) {
    function b8l1i6(_vz61) {
      this['_audio'] = null, this['_onEnd'] = null, b8l1i6['__super']['call'](this), this['_audio'] = _vz61, this['_onEnd'] = fxd9u['bind'](this['__onEnd'], this), _vz61['onEnded'](this['_onEnd']);
    }_1z62(b8l1i6, 'laya.wx.mini.MiniSoundChannel', nceyw7);var _vz23k = b8l1i6['prototype'];return _vz23k['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (wrnec7['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _vz23k['__onNull'] = function () {}, _vz23k['play'] = function () {
      this['isStopped'] = ![], _kz32v['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _vz23k['stop'] = function () {
      this['isStopped'] = !![], _kz32v['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (b8l1i6['_null'] != undefined) this['_audio']['onEnded'](b8l1i6['_null']);else try {
        this['_audio']['onEnded'](null), b8l1i6['_null'] = null;
      } catch (kwcn7) {
        console['warn']('[wxmini] stop:' + kwcn7), this['_audio']['onEnded'](fxd9u['bind'](this['__onNull'], this)), b8l1i6['_null'] = fxd9u['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, _vz23k['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _vz23k['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], _kz32v['addChannel'](this), this['_audio']['play']();
    }, yzvwk(0x0, _vz23k, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), yzvwk(0x0, _vz23k, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), yzvwk(0x0, _vz23k, 'volume', function () {
      return 0x1;
    }, function (fxad) {}), b8l1i6['_null'] = undefined, b8l1i6;
  }(aufx9);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var _v3zk2 in Laya) {
    var cwk37y = Laya[_v3zk2];cwk37y && cwk37y['__isclass'] && (exports[_v3zk2] = cwk37y);
  }
});