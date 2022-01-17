var B = wx.$B;
(function (window, document, x_$dt0) {
  var fa2w3 = x_$dt0['un'],
      h69sk7 = x_$dt0['uns'],
      w5r8f3 = x_$dt0['static'],
      fwr8 = x_$dt0['class'],
      f5w3 = x_$dt0['getset'],
      fmjr5 = x_$dt0['__newvec'],
      sgp7nu = laya['utils']['Browser'],
      aiwe = laya['events']['Event'],
      t_0$xy = laya['events']['EventDispatcher'],
      $l4vy0 = laya['resource']['HTMLImage'],
      shn = laya['utils']['Handler'],
      k4lb = laya['display']['Input'],
      y0zv4 = laya['net']['Loader'],
      u7gnsh = laya['maths']['Matrix'],
      yvt$x = laya['renders']['Render'],
      lyvb4z = laya['utils']['RunDriver'],
      shun76 = laya['media']['Sound'],
      shn67u = laya['media']['SoundChannel'],
      bz6kh9 = laya['media']['SoundManager'],
      vbzyl4 = laya['display']['Stage'],
      kz4b = laya['net']['URL'],
      or1mj5 = laya['utils']['Utils'],
      eiw2p = function () {
    function l$v04y() {}return fwr8(l$v04y, 'laya.wx.mini.MiniAdpter'), l$v04y['getJson'] = function (nh7su) {
      return JSON['parse'](nh7su);
    }, l$v04y['init'] = function (giu2pe, pi2) {
      giu2pe === void 0x0 && (giu2pe = ![]), pi2 === void 0x0 && (pi2 = ![]);if (l$v04y['_inited']) return;l$v04y['window'] = window;if (l$v04y['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;l$v04y['_inited'] = !![], l$v04y['isZiYu'] = pi2, l$v04y['isPosMsgYu'] = giu2pe, l$v04y['EnvConfig'] = {}, !l$v04y['isZiYu'] && (x_0$d['setNativeFileDir']('/layaairGame'), x_0$d['existDir'](x_0$d['fileNativeDir'], shn['create'](l$v04y, l$v04y['onMkdirCallBack']))), l$v04y['window']['focus'] = function () {}, x_$dt0['getUrlPath'] = function () {}, l$v04y['window']['logtime'] = function (d_xt0) {}, l$v04y['window']['alertTimeLog'] = function (r15mo) {}, l$v04y['window']['resetShareInfo'] = function () {}, l$v04y['window']['CanvasRenderingContext2D'] = function () {}, l$v04y['window']['CanvasRenderingContext2D']['prototype'] = l$v04y['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], l$v04y['window']['document']['body']['appendChild'] = function () {}, l$v04y['EnvConfig']['pixelRatioInt'] = 0x0, lyvb4z['getPixelRatio'] = l$v04y['pixelRatio'], l$v04y['_preCreateElement'] = sgp7nu['createElement'], sgp7nu['createElement'] = l$v04y['createElement'], lyvb4z['createShaderCondition'] = l$v04y['createShaderCondition'], or1mj5['parseXMLFromString'] = l$v04y['parseXMLFromString'], k4lb['_createInputElement'] = segnup['_createInputElement'], l$v04y['EnvConfig']['load'] = y0zv4['prototype']['load'], y0zv4['prototype']['load'] = $_qt['prototype']['load'], l$v04y['isZiYu'] && giu2pe && wx['onMessage'](function ($_tx0) {
        $_tx0['isLoad'] && (x_0$d['ziyuFileData'][$_tx0['url']] = $_tx0['data']);
      });
    }, l$v04y['onMkdirCallBack'] = function (zlb4vy, y0l4zv) {
      if (!zlb4vy) x_0$d['filesListObj'] = JSON['parse'](y0l4zv['data']);
    }, l$v04y['pixelRatio'] = function () {
      if (!l$v04y['EnvConfig']['pixelRatioInt']) try {
        var v4lkb = wx['getSystemInfoSync']();return l$v04y['EnvConfig']['pixelRatioInt'] = v4lkb['pixelRatio'], v4lkb = v4lkb, v4lkb['pixelRatio'];
      } catch (jm5r1f) {}return l$v04y['EnvConfig']['pixelRatioInt'];
    }, l$v04y['createElement'] = function (vl4yb) {
      if (vl4yb == 'canvas') {
        var m1jro5;return l$v04y['idx'] == 0x1 ? l$v04y['isZiYu'] ? (m1jro5 = sharedCanvas, m1jro5['style'] = {}) : m1jro5 = window['canvas'] : m1jro5 = window['wx']['createCanvas'](), l$v04y['idx']++, m1jro5;
      } else {
        if (vl4yb == 'textarea' || vl4yb == 'input') return l$v04y['onCreateInput'](vl4yb);else {
          if (vl4yb == 'div') {
            var pnig = l$v04y['_preCreateElement'](vl4yb);return pnig['contains'] = function (pgia2) {
              return null;
            }, pnig['removeChild'] = function (x_0yt) {}, pnig;
          } else return l$v04y['_preCreateElement'](vl4yb);
        }
      }
    }, l$v04y['onCreateInput'] = function (byvz4l) {
      var vkzlb4 = l$v04y['_preCreateElement'](byvz4l);return vkzlb4['focus'] = segnup['wxinputFocus'], vkzlb4['blur'] = segnup['wxinputblur'], vkzlb4['style'] = {}, vkzlb4['value'] = 0x0, vkzlb4['parentElement'] = {}, vkzlb4['placeholder'] = {}, vkzlb4['type'] = {}, vkzlb4['setColor'] = function (j8) {}, vkzlb4['setType'] = function (jr51mf) {}, vkzlb4['setFontFace'] = function (bzk9h) {}, vkzlb4['addEventListener'] = function (xt_y$) {}, vkzlb4['contains'] = function (v04zly) {
        return null;
      }, vkzlb4['removeChild'] = function (s79hn6) {}, vkzlb4;
    }, l$v04y['createShaderCondition'] = function (vby4lz) {
      var x_td$q = this,
          b9h6z = function () {
        var up2 = vby4lz;return x_td$q[vby4lz['replace']('this.', '')];
      };return b9h6z;
    }, l$v04y['EnvConfig'] = null, l$v04y['window'] = null, l$v04y['_preCreateElement'] = null, l$v04y['_inited'] = ![], l$v04y['wxRequest'] = null, l$v04y['systemInfo'] = null, l$v04y['version'] = '0.0.1', l$v04y['isZiYu'] = ![], l$v04y['isPosMsgYu'] = ![], l$v04y['parseXMLFromString'] = function (lyt0v$) {
      var ieapw2, w2aepi;lyt0v$ = lyt0v$['replace'](/>\s+</g, '><');try {
        ieapw2 = new window['Parser']['DOMParser']()['parseFromString'](lyt0v$, 'text/xml');
      } catch (suenp) {
        throw '需要引入xml解析库文件';
      }return ieapw2;
    }, l$v04y['idx'] = 0x1, l$v04y;
  }(),
      jr8f = function () {
    function wi832() {}fwr8(wi832, 'laya.wx.mini.MiniImage');var egipu = wi832['prototype'];return egipu['_loadImage'] = function (ewi2p) {
      var _tyx0 = this,
          x$t_y0 = ![];ewi2p['indexOf']('layaNativeDir/') == -0x1 && (x$t_y0 = !![], ewi2p = kz4b['formatURL'](ewi2p));if (!x_0$d['getFileInfo'](ewi2p)) {
        if (ewi2p['indexOf']('http://') != -0x1 || ewi2p['indexOf']('https://') != -0x1) x_0$d['downImg'](ewi2p, new shn(wi832, wi832['onDownImgCallBack'], [ewi2p, _tyx0]), ewi2p);else wi832['onCreateImage'](ewi2p, _tyx0, !![]);
      } else wi832['onCreateImage'](ewi2p, _tyx0, !x$t_y0);
    }, wi832['onDownImgCallBack'] = function (gi2pa, _$qxdt, hs76k9) {
      if (!hs76k9) wi832['onCreateImage'](gi2pa, _$qxdt);else _$qxdt['onError'](null);
    }, wi832['onCreateImage'] = function (r5omj, kz64b9, z4lk9b) {
      z4lk9b === void 0x0 && (z4lk9b = ![]);var t$vly;if (!z4lk9b) {
        var khs679 = x_0$d['getFileInfo'](r5omj),
            tdx$0 = khs679['md5'];t$vly = x_0$d['getFileNativePath'](tdx$0);
      } else t$vly = r5omj;if (kz64b9['imgCache'] == null) kz64b9['imgCache'] = {};var i3a2we;function upsng() {
        i3a2we['onload'] = null, i3a2we['onerror'] = null, delete kz64b9['imgCache'][r5omj];
      };var v0ylt$ = function () {
        upsng(), kz64b9['onLoaded'](i3a2we);
      },
          klvb = function () {
        upsng(), kz64b9['event']('error', 'Load image failed');
      };kz64b9['_type'] == 'nativeimage' ? (i3a2we = new sgp7nu['window']['Image'](), i3a2we['crossOrigin'] = '', i3a2we['onload'] = v0ylt$, i3a2we['onerror'] = klvb, i3a2we['src'] = t$vly, kz64b9['imgCache'][r5omj] = i3a2we) : new $l4vy0['create'](t$vly, { 'onload': v0ylt$, 'onerror': klvb, 'onCreate': function ($40ylv) {
          i3a2we = $40ylv, kz64b9['imgCache'][r5omj] = $40ylv;
        } });
    }, wi832;
  }(),
      segnup = function () {
    function w2aei3() {}return fwr8(w2aei3, 'laya.wx.mini.MiniInput'), w2aei3['_createInputElement'] = function () {
      k4lb['_initInput'](k4lb['area'] = sgp7nu['createElement']('textarea')), k4lb['_initInput'](k4lb['input'] = sgp7nu['createElement']('input')), k4lb['inputContainer'] = sgp7nu['createElement']('div'), k4lb['inputContainer']['style']['position'] = 'absolute', k4lb['inputContainer']['style']['zIndex'] = 0x186a0, sgp7nu['container']['appendChild'](k4lb['inputContainer']), k4lb['inputContainer']['setPos'] = function (rmjo, f5j8) {
        k4lb['inputContainer']['style']['left'] = rmjo + 'px', k4lb['inputContainer']['style']['top'] = f5j8 + 'px';
      }, x_$dt0['stage']['on']('resize', null, w2aei3['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (x0d$_) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), bz6kh9['_soundClass'] = kvblz4, bz6kh9['_musicClass'] = kvblz4;
    }, w2aei3['_onStageResize'] = function () {
      var pw2aei = x_$dt0['stage']['_canvasTransform']['identity']();pw2aei['scale'](sgp7nu['width'] / yvt$x['canvas']['width'] / lyvb4z['getPixelRatio'](), sgp7nu['height'] / yvt$x['canvas']['height'] / lyvb4z['getPixelRatio']());
    }, w2aei3['wxinputFocus'] = function (eipngu) {
      var s79nh6 = k4lb['inputElement']['target'];if (s79nh6 && !s79nh6['editable']) return;eiw2p['window']['wx']['offKeyboardConfirm'](), eiw2p['window']['wx']['offKeyboardInput'](), eiw2p['window']['wx']['showKeyboard']({ 'defaultValue': s79nh6['text'], 'maxLength': s79nh6['maxChars'], 'multiple': s79nh6['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (u6s7h) {}, 'fail': function (fmjr51) {} }), eiw2p['window']['wx']['onKeyboardConfirm'](function (r8w3fa) {
        var kh9bz = r8w3fa ? r8w3fa['value'] : '';s79nh6['text'] = kh9bz, s79nh6['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), eiw2p['window']['wx']['onKeyboardInput'](function (u76hns) {
        var b94klz = u76hns ? u76hns['value'] : '';if (!s79nh6['multiline']) {
          if (b94klz['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }s79nh6['text'] = b94klz, s79nh6['event']('input');
      });
    }, w2aei3['inputEnter'] = function () {
      k4lb['inputElement']['target']['focus'] = ![];
    }, w2aei3['wxinputblur'] = function () {
      w2aei3['hideKeyboard']();
    }, w2aei3['hideKeyboard'] = function () {
      eiw2p['window']['wx']['offKeyboardConfirm'](), eiw2p['window']['wx']['offKeyboardInput'](), eiw2p['window']['wx']['hideKeyboard']({ 'success': function (nhsu76) {
          console['log']('隐藏键盘');
        }, 'fail': function (rj5) {
          console['log']('隐藏键盘出错:' + (rj5 ? rj5['errMsg'] : ''));
        } });
    }, w2aei3;
  }(),
      $_qt = function () {
    function w58rf() {}fwr8(w58rf, 'laya.wx.mini.MiniLoader');var v$tx0y = w58rf['prototype'];return v$tx0y['load'] = function (zlk4b9, eu2pi, iap2ge, vt0yx, rj83) {
      iap2ge === void 0x0 && (iap2ge = !![]), rj83 === void 0x0 && (rj83 = ![]);var wi3ae2 = this;wi3ae2['_url'] = zlk4b9;if (zlk4b9['indexOf']('data:image') === 0x0) wi3ae2['_type'] = eu2pi = 'image';else wi3ae2['_type'] = eu2pi || (eu2pi = wi3ae2['getTypeFromUrl'](zlk4b9));wi3ae2['_cache'] = iap2ge, wi3ae2['_data'] = null;var ie2aw = 'ascii';if (zlk4b9['indexOf']('.fnt') != -0x1) ie2aw = 'utf8';else eu2pi == 'arraybuffer' && (ie2aw = '');;var nh9s7 = or1mj5['getFileExtension'](zlk4b9);if (w58rf['_fileTypeArr']['indexOf'](nh9s7) != -0x1) eiw2p['EnvConfig']['load']['call'](this, zlk4b9, eu2pi, iap2ge, vt0yx, rj83);else {
        if (!x_0$d['getFileInfo'](zlk4b9)) {
          if (zlk4b9['indexOf']('layaNativeDir/') != -0x1) {
            if (eiw2p['isZiYu']) {
              var rjom1 = x_0$d['ziyuFileData'][zlk4b9];wi3ae2['onLoaded'](rjom1);return;
            } else {
              cosnole['log']('read read'), x_0$d['read'](zlk4b9, ie2aw, new shn(w58rf, w58rf['onReadNativeCallBack'], [ie2aw, zlk4b9, eu2pi, iap2ge, vt0yx, rj83, wi3ae2]));return;
            }
          }if (kz4b['rootPath'] == '') var iw32ea = zlk4b9;else iw32ea = zlk4b9['split'](kz4b['rootPath'])[0x0];zlk4b9['indexOf']('http://') != -0x1 || zlk4b9['indexOf']('https://') != -0x1 ? eiw2p['EnvConfig']['load']['call'](wi3ae2, zlk4b9, eu2pi, iap2ge, vt0yx, rj83) : x_0$d['readFile'](iw32ea, ie2aw, new shn(w58rf, w58rf['onReadNativeCallBack'], [ie2aw, zlk4b9, eu2pi, iap2ge, vt0yx, rj83, wi3ae2]), zlk4b9);
        } else eiw2p['EnvConfig']['load']['call'](this, zlk4b9, eu2pi, iap2ge, vt0yx, rj83);
      }
    }, v$tx0y['resMgrLoad'] = function (v4zkbl, q_x$td, bz49kl, k76h9, $vytx, pgsune, s76hn) {
      bz49kl === void 0x0 && (bz49kl = 0x0), k76h9 === void 0x0 && (k76h9 = ![]), $vytx === void 0x0 && ($vytx = ![]), pgsune === void 0x0 && (pgsune = 0x0), s76hn === void 0x0 && (s76hn = 0x3), v4zkbl['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', v4zkbl), eiw2p['EnvConfig']['resMgrLoad'](v4zkbl, (z9k64b, aiepg2, qtx_) => {
        w58rf['prototype']['resMgrLoadCallBack'](z9k64b, aiepg2, qtx_, q_x$td);
      }, bz49kl, k76h9, $vytx, pgsune, s76hn);
    }, v$tx0y['resMgrLoadCallBack'] = function (k9hb, nsu67, kz9hb, mjro51) {
      console['log']('buff:::', k9hb, kz9hb, x_0$d['fileNativeDir'] + '///' + x_0$d['fileListName']), mjro51(k9hb, nsu67, kz9hb);
    }, v$tx0y['clearRes'] = function (kbv4z, $_0xdt) {
      $_0xdt === void 0x0 && ($_0xdt = ![]);var xvy0$ = this;xvy0$['clearRes'](kbv4z, $_0xdt);var guns = x_0$d['getFileInfo'](kbv4z);if (guns && (kbv4z['indexOf']('http://') != -0x1 || kbv4z['indexOf']('https://') != -0x1)) {
        var wp = guns['md5'],
            n7su = x_0$d['getFileNativePath'](wp);x_0$d['remove'](n7su);
      }
    }, w58rf['onReadNativeCallBack'] = function (s69h7n, r3fwa8, ltyv0$, kvl, zkh96b, vx0y$, uhn76, x0$_y, k96b7) {
      kvl === void 0x0 && (kvl = !![]), vx0y$ === void 0x0 && (vx0y$ = ![]), x0$_y === void 0x0 && (x0$_y = 0x0);if (!x0$_y) {
        var v$lyt;if (ltyv0$ == 'json' || ltyv0$ == 'atlas') v$lyt = eiw2p['getJson'](k96b7['data']);else ltyv0$ == 'xml' ? v$lyt = or1mj5['parseXMLFromString'](k96b7['data']) : v$lyt = k96b7['data'];uhn76['onLoaded'](v$lyt), !eiw2p['isZiYu'] && eiw2p['isPosMsgYu'] && ltyv0$ != 'arraybuffer' && wx['postMessage']({ 'url': r3fwa8, 'data': v$lyt, 'isLoad': !![] });
      } else x0$_y == 0x1 && eiw2p['EnvConfig']['load']['call'](uhn76, r3fwa8, ltyv0$, kvl, zkh96b, vx0y$);
    }, w5r8f3(w58rf, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), w58rf;
  }(),
      x_0$d = function (kbzv4l) {
    function $0dxt_() {
      $0dxt_['__super']['call'](this);;
    }return fwr8($0dxt_, 'laya.wx.mini.MiniFileMgr', kbzv4l), $0dxt_['isLoadFile'] = function (_y0$x) {
      return $0dxt_['_fileTypeArr']['indexOf'](_y0$x) != -0x1 ? !![] : ![];
    }, $0dxt_['getFileInfo'] = function (pengsu) {
      var vlzkb = pengsu['split']('?')[0x0],
          zvy0l4 = $0dxt_['filesListObj'][vlzkb];if (zvy0l4 == null) return null;else return zvy0l4;return null;
    }, $0dxt_['onFileUpdate'] = function (pgie2a, u7hn) {
      var f15mjr = pgie2a['split']('/'),
          kh96b = f15mjr[f15mjr['length'] - 0x1],
          nusgh = $0dxt_['getFileInfo'](u7hn);if (nusgh == null) $0dxt_['onSaveFile'](u7hn, kh96b);else {
        if (nusgh['readyUrl'] != u7hn) $0dxt_['remove'](kh96b, u7hn);
      }
    }, $0dxt_['exits'] = function (f3rw8a, $tx0y_) {
      var gnus7 = $0dxt_['getFileNativePath'](f3rw8a);$0dxt_['fs']['getFileInfo']({ 'filePath': gnus7, 'success': function (yvlt) {
          $tx0y_ != null && $tx0y_['runWith']([0x0, yvlt]);
        }, 'fail': function (eipga2) {
          $tx0y_ != null && $tx0y_['runWith']([0x1, eipga2]);
        } });
    }, $0dxt_['read'] = function (_$ytx0, tv$l0y, s796hk, f815jr) {
      tv$l0y === void 0x0 && (tv$l0y = 'ascill'), f815jr === void 0x0 && (f815jr = '');var $xtyv0;f815jr != '' ? $xtyv0 = $0dxt_['getFileNativePath'](_$ytx0) : $xtyv0 = _$ytx0, $0dxt_['fs']['readFile']({ 'filePath': $xtyv0, 'encoding': tv$l0y, 'success': function (tx_y$) {
          s796hk != null && s796hk['runWith']([0x0, tx_y$]);
        }, 'fail': function (t_yx$) {
          if (t_yx$ && f815jr != '') $0dxt_['down'](f815jr, tv$l0y, s796hk, f815jr);else s796hk != null && s796hk['runWith']([0x1]);
        } });
    }, $0dxt_['readNativeFile'] = function (aepwi, jmo15r) {
      $0dxt_['fs']['readFile']({ 'filePath': aepwi, 'encoding': '', 'success': function (iwpea2) {
          jmo15r != null && jmo15r['runWith']([0x0]);
        }, 'fail': function (v4kl) {
          jmo15r != null && jmo15r['runWith']([0x1]);
        } });
    }, $0dxt_['down'] = function (af238, kzbl9, r35w8, _xdq$t) {
      kzbl9 === void 0x0 && (kzbl9 = 'ascill'), _xdq$t === void 0x0 && (_xdq$t = '');var h96 = $0dxt_['getFileNativePath'](_xdq$t),
          ia8w3 = $0dxt_['wxdown']({ 'url': af238, 'filePath': h96, 'success': function (wia32e) {
          if (wia32e['statusCode'] === 0xc8) $0dxt_['readFile'](wia32e['filePath'], kzbl9, r35w8, _xdq$t);
        }, 'fail': function (bz46k9) {
          r35w8 != null && r35w8['runWith']([0x1, bz46k9]);
        } });ia8w3['onProgressUpdate'](function (_xd0t$) {
        r35w8 != null && r35w8['runWith']([0x2, _xd0t$['progress']]);
      });
    }, $0dxt_['readFile'] = function (x$t_d0, pugin, wr5, wrfa) {
      pugin === void 0x0 && (pugin = 'ascill'), wrfa === void 0x0 && (wrfa = ''), $0dxt_['fs']['readFile']({ 'filePath': x$t_d0, 'encoding': pugin, 'success': function (a32we) {
          if (x$t_d0['indexOf']('http://') != -0x1 || x$t_d0['indexOf']('https://') != -0x1) $0dxt_['onFileUpdate'](x$t_d0, wrfa);wr5 != null && wr5['runWith']([0x0, a32we]);
        }, 'fail': function (kzvbl) {
          if (kzvbl) wr5 != null && wr5['runWith']([0x1, kzvbl]);
        } });
    }, $0dxt_['downImg'] = function (wi283, gns7hu, gnuh7s) {
      gnuh7s === void 0x0 && (gnuh7s = '');var s7k9 = $0dxt_['wxdown']({ 'url': wi283, 'success': function (o5j) {
          o5j['statusCode'] === 0xc8 && $0dxt_['copyFile'](o5j['tempFilePath'], gnuh7s, gns7hu);
        }, 'fail': function (uh6n7) {
          gns7hu != null && gns7hu['runWith']([0x1, uh6n7]);
        } });
    }, $0dxt_['copyFile'] = function (h697ns, w38ra, yv4b) {
      var b4zvlk = h697ns['split']('/'),
          snu7 = b4zvlk[b4zvlk['length'] - 0x1],
          egsup = w38ra['split']('?')[0x0],
          b9kzl = $0dxt_['getFileInfo'](w38ra),
          gsunp = $0dxt_['getFileNativePath'](snu7);$0dxt_['fs']['copyFile']({ 'srcPath': h697ns, 'destPath': gsunp, 'success': function (y4zvl0) {
          if (!b9kzl) $0dxt_['onSaveFile'](w38ra, snu7), yv4b != null && yv4b['runWith']([0x0]);else {
            if (b9kzl['readyUrl'] != w38ra) $0dxt_['remove'](snu7, w38ra, yv4b);
          }
        }, 'fail': function (j15f8) {
          yv4b != null && yv4b['runWith']([0x1, j15f8]);
        } });
    }, $0dxt_['getFileNativePath'] = function (gupne) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gupne;
    }, $0dxt_['remove'] = function (fjmr15, ks9, pwai2) {
      ks9 === void 0x0 && (ks9 = '');var nsh7 = $0dxt_['getFileInfo'](ks9),
          j15omr = $0dxt_['getFileNativePath'](nsh7['md5']);x_$dt0['loader']['clearRes'](nsh7['readyUrl']), $0dxt_['fs']['unlink']({ 'filePath': j15omr, 'success': function (z4yblv) {
          if (ks9 != '') $0dxt_['onSaveFile'](ks9, fjmr15);pwai2 != null && pwai2['runWith']([0x0]);
        }, 'fail': function (vyt0l$) {} });
    }, $0dxt_['onSaveFile'] = function (vk4zbl, yx$0t) {
      var y40l$v = vk4zbl['split']('?')[0x0];$0dxt_['filesListObj'][y40l$v] = { 'md5': yx$0t, 'readyUrl': vk4zbl }, $0dxt_['fs']['writeFile']({ 'filePath': $0dxt_['fileNativeDir'] + '/' + $0dxt_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($0dxt_['filesListObj']), 'success': function (nugspe) {
          console['log']('写入测试测试成功：', nugspe);
        }, 'fail': function (sepng) {
          console['log']('写入测试测试失败：', sepng);
        } });
    }, $0dxt_['existDir'] = function (kl49, mo1rj) {
      $0dxt_['fs']['mkdir']({ 'dirPath': kl49, 'success': function (tyv$0l) {
          mo1rj != null && mo1rj['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (l94kz) {
          if (l94kz['errMsg']['indexOf']('file already exists') != -0x1) $0dxt_['readSync']($0dxt_['fileListName'], 'utf8', mo1rj);else mo1rj != null && mo1rj['runWith']([0x1, l94kz]);
        } });
    }, $0dxt_['readSync'] = function (f85j3r, jm5ro, qx$td, kzlbv) {
      jm5ro === void 0x0 && (jm5ro = 'ascill'), kzlbv === void 0x0 && (kzlbv = '');var usgnpe = $0dxt_['getFileNativePath'](f85j3r),
          v04yl;try {
        v04yl = $0dxt_['fs']['readFileSync'](usgnpe), qx$td != null && qx$td['runWith']([0x0, { 'data': v04yl }]);
      } catch (bk49lz) {
        qx$td != null && qx$td['runWith']([0x1]);
      }
    }, $0dxt_['readCache'] = function () {}, $0dxt_['writeCache'] = function (fw832a) {
      var xtyv = readyUrl['split']('?')[0x0];$0dxt_['filesListObj'][xtyv] = { 'md5': md5Name, 'readyUrl': readyUrl }, $0dxt_['fs']['writeFile']({ 'filePath': $0dxt_['fileNativeDir'] + '/' + $0dxt_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($0dxt_['filesListObj']), 'success': function (_y$) {}, 'fail': function (gipnue) {} });
    }, $0dxt_['setNativeFileDir'] = function (r3w58) {
      $0dxt_['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + r3w58;
    }, $0dxt_['filesListObj'] = {}, $0dxt_['fileNativeDir'] = null, $0dxt_['fileListName'] = 'layaairfiles.txt', $0dxt_['ziyuFileData'] = {}, w5r8f3($0dxt_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $0dxt_;
  }(t_0$xy),
      kvblz4 = function (xq_t$) {
    function xdq() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], xdq['__super']['call'](this), this['_sound'] = xdq['_createSound']();
    }fwr8(xdq, 'laya.wx.mini.MiniSound', xq_t$);var gpuie2 = xdq['prototype'];return gpuie2['load'] = function (byzl4) {
      var bhk79 = this;byzl4 = kz4b['formatURL'](byzl4), this['url'] = byzl4;if (xdq['_audioCache'][byzl4]) {
        this['event']('complete');return;
      }function txd$0_() {
        if (xdq['_null'] != undefined) bhk79['_sound']['onCanplay'](xdq['_null']), bhk79['_sound']['onError'](xdq['_null']);else try {
          bhk79['_sound']['onCanplay'](null), bhk79['_sound']['onError'](null), xdq['_null'] = null;
        } catch (pgsnue) {
          console['warn']('[wxmini] _clearSound:' + pgsnue), bhk79['_sound']['onCanplay'](h6k7b), bhk79['_sound']['onError'](h6k7b), xdq['_null'] = h6k7b;
        }
      }function s9kh() {
        txd$0_(), eugip['loaded'] = !![], eugip['event']('complete'), xdq['_audioCache'][eugip['url']] = eugip;
      }function ipae2g(hb7k96) {
        console['error']('errCode=' + hb7k96['errCode'] + '  errMsg=' + hb7k96['errMsg']), txd$0_(), eugip['event']('error');
      }function h6k7b() {}this['_sound']['onCanplay'](s9kh), this['_sound']['onError'](ipae2g), this['_sound']['src'] = byzl4;var eugip = this;
    }, gpuie2['play'] = function (su7gn, k4vzl) {
      su7gn === void 0x0 && (su7gn = 0x0), k4vzl === void 0x0 && (k4vzl = 0x0);var vytx0$;if (this['url'] == bz6kh9['_tMusic']) {
        if (!xdq['_musicAudio']) xdq['_musicAudio'] = xdq['_createSound']();vytx0$ = xdq['_musicAudio'];
      } else vytx0$ = xdq['_createSound']();vytx0$['src'] = this['url'];var zlbk49 = new mfr51j(vytx0$);return zlbk49['url'] = this['url'], zlbk49['loops'] = k4vzl, zlbk49['startTime'] = su7gn, zlbk49['play'](), bz6kh9['addChannel'](zlbk49), zlbk49;
    }, gpuie2['dispose'] = function () {
      var lkvz4 = xdq['_audioCache'][this['url']];lkvz4 && (lkvz4['src'] = '', delete xdq['_audioCache'][this['url']]);
    }, f5w3(0x0, gpuie2, 'duration', function () {
      return this['_sound']['duration'];
    }), xdq['_createSound'] = function () {
      return xdq['_id']++, eiw2p['window']['wx']['createInnerAudioContext']();
    }, xdq['_musicAudio'] = null, xdq['_id'] = 0x0, xdq['_audioCache'] = {}, xdq['_null'] = undefined, xdq;
  }(t_0$xy),
      mfr51j = function (ugsenp) {
    function pn7gsu(bz9lk) {
      this['_audio'] = null, this['_onEnd'] = null, pn7gsu['__super']['call'](this), this['_audio'] = bz9lk, this['_onEnd'] = or1mj5['bind'](this['__onEnd'], this), bz9lk['onEnded'](this['_onEnd']);
    }fwr8(pn7gsu, 'laya.wx.mini.MiniSoundChannel', ugsenp);var awep = pn7gsu['prototype'];return awep['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (x_$dt0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, awep['__onNull'] = function () {}, awep['play'] = function () {
      this['isStopped'] = ![], bz6kh9['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, awep['stop'] = function () {
      this['isStopped'] = !![], bz6kh9['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (pn7gsu['_null'] != undefined) this['_audio']['onEnded'](pn7gsu['_null']);else try {
        this['_audio']['onEnded'](null), pn7gsu['_null'] = null;
      } catch (wi3e2a) {
        console['warn']('[wxmini] stop:' + wi3e2a), this['_audio']['onEnded'](or1mj5['bind'](this['__onNull'], this)), pn7gsu['_null'] = or1mj5['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, awep['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, awep['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], bz6kh9['addChannel'](this), this['_audio']['play']();
    }, f5w3(0x0, awep, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), f5w3(0x0, awep, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), f5w3(0x0, awep, 'volume', function () {
      return 0x1;
    }, function (z40ylv) {}), pn7gsu['_null'] = undefined, pn7gsu;
  }(shn67u);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var peui in Laya) {
    var ueip = Laya[peui];ueip && ueip['__isclass'] && (exports[peui] = ueip);
  }
});