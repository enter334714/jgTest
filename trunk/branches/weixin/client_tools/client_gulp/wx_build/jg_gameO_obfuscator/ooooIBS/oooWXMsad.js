var c = wx.$o;
(function (window, document, uv_n3l) {
  var cz8prh = uv_n3l['un'],
      rc8pm = uv_n3l['uns'],
      ox4g9f = uv_n3l['static'],
      ohgx4 = uv_n3l['class'],
      p8cmr = uv_n3l['getset'],
      hzpbc8 = uv_n3l['__newvec'],
      va = laya['utils']['Browser'],
      iadl2 = laya['events']['Event'],
      fx9w1 = laya['events']['EventDispatcher'],
      k$_y0e = laya['resource']['HTMLImage'],
      u3nvy_ = laya['utils']['Handler'],
      sr5tmq = laya['display']['Input'],
      $e_ky0 = laya['net']['Loader'],
      uny_e3 = laya['maths']['Matrix'],
      $k_y = laya['renders']['Render'],
      nuval3 = laya['utils']['RunDriver'],
      ykue0 = laya['media']['Sound'],
      a2dil6 = laya['media']['SoundChannel'],
      bxog = laya['media']['SoundManager'],
      a6vn = laya['display']['Stage'],
      g9fxw4 = laya['net']['URL'],
      m58c = laya['utils']['Utils'],
      v63ad = function () {
    function y$_0k() {}return ohgx4(y$_0k, 'laya.wx.mini.MiniAdpter'), y$_0k['getJson'] = function (_yeuk0) {
      return JSON['parse'](_yeuk0);
    }, y$_0k['init'] = function (hobz8, _0ueyk) {
      hobz8 === void 0x0 && (hobz8 = ![]), _0ueyk === void 0x0 && (_0ueyk = ![]);if (y$_0k['_inited']) return;y$_0k['window'] = window;if (y$_0k['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;y$_0k['_inited'] = !![], y$_0k['isZiYu'] = _0ueyk, y$_0k['isPosMsgYu'] = hobz8, y$_0k['EnvConfig'] = {}, !y$_0k['isZiYu'] && (wf49xg['setNativeFileDir']('/layaairGame'), wf49xg['existDir'](wf49xg['fileNativeDir'], u3nvy_['create'](y$_0k, y$_0k['onMkdirCallBack']))), y$_0k['window']['focus'] = function () {}, uv_n3l['getUrlPath'] = function () {}, y$_0k['window']['logtime'] = function (nvlu) {}, y$_0k['window']['alertTimeLog'] = function (nu_ey) {}, y$_0k['window']['resetShareInfo'] = function () {}, y$_0k['window']['CanvasRenderingContext2D'] = function () {}, y$_0k['window']['CanvasRenderingContext2D']['prototype'] = y$_0k['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], y$_0k['window']['document']['body']['appendChild'] = function () {}, y$_0k['EnvConfig']['pixelRatioInt'] = 0x0, nuval3['getPixelRatio'] = y$_0k['pixelRatio'], y$_0k['_preCreateElement'] = va['createElement'], va['createElement'] = y$_0k['createElement'], nuval3['createShaderCondition'] = y$_0k['createShaderCondition'], m58c['parseXMLFromString'] = y$_0k['parseXMLFromString'], sr5tmq['_createInputElement'] = v26la['_createInputElement'], y$_0k['EnvConfig']['load'] = $e_ky0['prototype']['load'], $e_ky0['prototype']['load'] = nalv3u['prototype']['load'], y$_0k['isZiYu'] && hobz8 && wx['onMessage'](function (kunye) {
        kunye['isLoad'] && (wf49xg['ziyuFileData'][kunye['url']] = kunye['data']);
      });
    }, y$_0k['onMkdirCallBack'] = function (i61a2, lvda6) {
      if (!i61a2) wf49xg['filesListObj'] = JSON['parse'](lvda6['data']);
    }, y$_0k['pixelRatio'] = function () {
      if (!y$_0k['EnvConfig']['pixelRatioInt']) try {
        var av3ln = wx['getSystemInfoSync']();return y$_0k['EnvConfig']['pixelRatioInt'] = av3ln['pixelRatio'], av3ln = av3ln, av3ln['pixelRatio'];
      } catch (xwi9f1) {}return y$_0k['EnvConfig']['pixelRatioInt'];
    }, y$_0k['createElement'] = function (bzh8) {
      if (bzh8 == 'canvas') {
        var bgoh8;return y$_0k['idx'] == 0x1 ? y$_0k['isZiYu'] ? (bgoh8 = sharedCanvas, bgoh8['style'] = {}) : bgoh8 = window['canvas'] : bgoh8 = window['wx']['createCanvas'](), y$_0k['idx']++, bgoh8;
      } else {
        if (bzh8 == 'textarea' || bzh8 == 'input') return y$_0k['onCreateInput'](bzh8);else {
          if (bzh8 == 'div') {
            var ofg9x4 = y$_0k['_preCreateElement'](bzh8);return ofg9x4['contains'] = function (z8cboh) {
              return null;
            }, ofg9x4['removeChild'] = function (w921if) {}, ofg9x4;
          } else return y$_0k['_preCreateElement'](bzh8);
        }
      }
    }, y$_0k['onCreateInput'] = function (ixwf1) {
      var h8zbc = y$_0k['_preCreateElement'](ixwf1);return h8zbc['focus'] = v26la['wxinputFocus'], h8zbc['blur'] = v26la['wxinputblur'], h8zbc['style'] = {}, h8zbc['value'] = 0x0, h8zbc['parentElement'] = {}, h8zbc['placeholder'] = {}, h8zbc['type'] = {}, h8zbc['setColor'] = function (vdl6a2) {}, h8zbc['setType'] = function (uv3_ny) {}, h8zbc['setFontFace'] = function (f9o4x) {}, h8zbc['addEventListener'] = function (zh4bo) {}, h8zbc['contains'] = function (zbo4g) {
        return null;
      }, h8zbc['removeChild'] = function (da2i) {}, h8zbc;
    }, y$_0k['createShaderCondition'] = function (ho8zb) {
      var sqtm5r = this,
          lanv36 = function () {
        var f194x = ho8zb;return sqtm5r[ho8zb['replace']('this.', '')];
      };return lanv36;
    }, y$_0k['EnvConfig'] = null, y$_0k['window'] = null, y$_0k['_preCreateElement'] = null, y$_0k['_inited'] = ![], y$_0k['wxRequest'] = null, y$_0k['systemInfo'] = null, y$_0k['version'] = '0.0.1', y$_0k['isZiYu'] = ![], y$_0k['isPosMsgYu'] = ![], y$_0k['parseXMLFromString'] = function (go4xb) {
      var ua3v, mr85pc;go4xb = go4xb['replace'](/>\s+</g, '><');try {
        ua3v = new window['Parser']['DOMParser']()['parseFromString'](go4xb, 'text/xml');
      } catch (hogzb4) {
        throw '需要引入xml解析库文件';
      }return ua3v;
    }, y$_0k['idx'] = 0x1, y$_0k;
  }(),
      zph8r = function () {
    function a21i() {}ohgx4(a21i, 'laya.wx.mini.MiniImage');var unv3l_ = a21i['prototype'];return unv3l_['_loadImage'] = function (qpmtr) {
      var un_3l = this,
          yuken = ![];qpmtr['indexOf']('layaNativeDir/') == -0x1 && (yuken = !![], qpmtr = g9fxw4['formatURL'](qpmtr));if (!wf49xg['getFileInfo'](qpmtr)) {
        if (qpmtr['indexOf']('http://') != -0x1 || qpmtr['indexOf']('https://') != -0x1) wf49xg['downImg'](qpmtr, new u3nvy_(a21i, a21i['onDownImgCallBack'], [qpmtr, un_3l]), qpmtr);else a21i['onCreateImage'](qpmtr, un_3l, !![]);
      } else a21i['onCreateImage'](qpmtr, un_3l, !yuken);
    }, a21i['onDownImgCallBack'] = function (k_unye, y_3vn, g4o9b) {
      if (!g4o9b) a21i['onCreateImage'](k_unye, y_3vn);else y_3vn['onError'](null);
    }, a21i['onCreateImage'] = function (prq5t, gz4h, hgo8b) {
      hgo8b === void 0x0 && (hgo8b = ![]);var ix1w9f;if (!hgo8b) {
        var i2da6 = wf49xg['getFileInfo'](prq5t),
            mq5p = i2da6['md5'];ix1w9f = wf49xg['getFileNativePath'](mq5p);
      } else ix1w9f = prq5t;if (gz4h['imgCache'] == null) gz4h['imgCache'] = {};var c8mp5r;function vun3la() {
        c8mp5r['onload'] = null, c8mp5r['onerror'] = null, delete gz4h['imgCache'][prq5t];
      };var ia62 = function () {
        vun3la(), gz4h['onLoaded'](c8mp5r);
      },
          pb8chz = function () {
        vun3la(), gz4h['event']('error', 'Load image failed');
      };gz4h['_type'] == 'nativeimage' ? (c8mp5r = new va['window']['Image'](), c8mp5r['crossOrigin'] = '', c8mp5r['onload'] = ia62, c8mp5r['onerror'] = pb8chz, c8mp5r['src'] = ix1w9f, gz4h['imgCache'][prq5t] = c8mp5r) : new k$_y0e['create'](ix1w9f, { 'onload': ia62, 'onerror': pb8chz, 'onCreate': function (h8pbcz) {
          c8mp5r = h8pbcz, gz4h['imgCache'][prq5t] = h8pbcz;
        } });
    }, a21i;
  }(),
      v26la = function () {
    function qmtr5p() {}return ohgx4(qmtr5p, 'laya.wx.mini.MiniInput'), qmtr5p['_createInputElement'] = function () {
      sr5tmq['_initInput'](sr5tmq['area'] = va['createElement']('textarea')), sr5tmq['_initInput'](sr5tmq['input'] = va['createElement']('input')), sr5tmq['inputContainer'] = va['createElement']('div'), sr5tmq['inputContainer']['style']['position'] = 'absolute', sr5tmq['inputContainer']['style']['zIndex'] = 0x186a0, va['container']['appendChild'](sr5tmq['inputContainer']), sr5tmq['inputContainer']['setPos'] = function (rs5qmt, i91f2w) {
        sr5tmq['inputContainer']['style']['left'] = rs5qmt + 'px', sr5tmq['inputContainer']['style']['top'] = i91f2w + 'px';
      }, uv_n3l['stage']['on']('resize', null, qmtr5p['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xgfo9) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), bxog['_soundClass'] = hgz4bo, bxog['_musicClass'] = hgz4bo;
    }, qmtr5p['_onStageResize'] = function () {
      var e3n = uv_n3l['stage']['_canvasTransform']['identity']();e3n['scale'](va['width'] / $k_y['canvas']['width'] / nuval3['getPixelRatio'](), va['height'] / $k_y['canvas']['height'] / nuval3['getPixelRatio']());
    }, qmtr5p['wxinputFocus'] = function (a2d6l) {
      var di612a = sr5tmq['inputElement']['target'];if (di612a && !di612a['editable']) return;v63ad['window']['wx']['offKeyboardConfirm'](), v63ad['window']['wx']['offKeyboardInput'](), v63ad['window']['wx']['showKeyboard']({ 'defaultValue': di612a['text'], 'maxLength': di612a['maxChars'], 'multiple': di612a['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (w61) {}, 'fail': function (a3nlv6) {} }), v63ad['window']['wx']['onKeyboardConfirm'](function (zg8hob) {
        var _eynu3 = zg8hob ? zg8hob['value'] : '';di612a['text'] = _eynu3, di612a['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), v63ad['window']['wx']['onKeyboardInput'](function (hb4) {
        var vuy_3n = hb4 ? hb4['value'] : '';if (!di612a['multiline']) {
          if (vuy_3n['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }di612a['text'] = vuy_3n, di612a['event']('input');
      });
    }, qmtr5p['inputEnter'] = function () {
      sr5tmq['inputElement']['target']['focus'] = ![];
    }, qmtr5p['wxinputblur'] = function () {
      qmtr5p['hideKeyboard']();
    }, qmtr5p['hideKeyboard'] = function () {
      v63ad['window']['wx']['offKeyboardConfirm'](), v63ad['window']['wx']['offKeyboardInput'](), v63ad['window']['wx']['hideKeyboard']({ 'success': function (x9g4w) {
          console['log']('隐藏键盘');
        }, 'fail': function (nalu) {
          console['log']('隐藏键盘出错:' + (nalu ? nalu['errMsg'] : ''));
        } });
    }, qmtr5p;
  }(),
      nalv3u = function () {
    function eyk_() {}ohgx4(eyk_, 'laya.wx.mini.MiniLoader');var j$kye = eyk_['prototype'];return j$kye['load'] = function (iwd2, h8boz, na3l, ldv62a, f2i1dw) {
      na3l === void 0x0 && (na3l = !![]), f2i1dw === void 0x0 && (f2i1dw = ![]);var cp8zbh = this;cp8zbh['_url'] = iwd2;if (iwd2['indexOf']('data:image') === 0x0) cp8zbh['_type'] = h8boz = 'image';else cp8zbh['_type'] = h8boz || (h8boz = cp8zbh['getTypeFromUrl'](iwd2));cp8zbh['_cache'] = na3l, cp8zbh['_data'] = null;var pqtm5 = 'ascii';if (iwd2['indexOf']('.fnt') != -0x1) pqtm5 = 'utf8';else h8boz == 'arraybuffer' && (pqtm5 = '');;var cr85pm = m58c['getFileExtension'](iwd2);if (eyk_['_fileTypeArr']['indexOf'](cr85pm) != -0x1) v63ad['EnvConfig']['load']['call'](this, iwd2, h8boz, na3l, ldv62a, f2i1dw);else {
        if (!wf49xg['getFileInfo'](iwd2)) {
          if (iwd2['indexOf']('layaNativeDir/') != -0x1) {
            if (v63ad['isZiYu']) {
              var lanv6 = wf49xg['ziyuFileData'][iwd2];cp8zbh['onLoaded'](lanv6);return;
            } else {
              cosnole['log']('read read'), wf49xg['read'](iwd2, pqtm5, new u3nvy_(eyk_, eyk_['onReadNativeCallBack'], [pqtm5, iwd2, h8boz, na3l, ldv62a, f2i1dw, cp8zbh]));return;
            }
          }if (g9fxw4['rootPath'] == '') var id1fw = iwd2;else id1fw = iwd2['split'](g9fxw4['rootPath'])[0x0];iwd2['indexOf']('http://') != -0x1 || iwd2['indexOf']('https://') != -0x1 ? v63ad['EnvConfig']['load']['call'](cp8zbh, iwd2, h8boz, na3l, ldv62a, f2i1dw) : wf49xg['readFile'](id1fw, pqtm5, new u3nvy_(eyk_, eyk_['onReadNativeCallBack'], [pqtm5, iwd2, h8boz, na3l, ldv62a, f2i1dw, cp8zbh]), iwd2);
        } else v63ad['EnvConfig']['load']['call'](this, iwd2, h8boz, na3l, ldv62a, f2i1dw);
      }
    }, j$kye['resMgrLoad'] = function (e3_ynu, zphcb, z8hrpc, u3v_ny, hxo4, nlua3v, da2li) {
      z8hrpc === void 0x0 && (z8hrpc = 0x0), u3v_ny === void 0x0 && (u3v_ny = ![]), hxo4 === void 0x0 && (hxo4 = ![]), nlua3v === void 0x0 && (nlua3v = 0x0), da2li === void 0x0 && (da2li = 0x3), e3_ynu['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', e3_ynu), v63ad['EnvConfig']['resMgrLoad'](e3_ynu, (zpc8m, rqtsm5, jyke) => {
        eyk_['prototype']['resMgrLoadCallBack'](zpc8m, rqtsm5, jyke, zphcb);
      }, z8hrpc, u3v_ny, hxo4, nlua3v, da2li);
    }, j$kye['resMgrLoadCallBack'] = function (xg94b, bgoh4z, yj0ek$, uv3_yn) {
      console['log']('buff:::', xg94b, yj0ek$, wf49xg['fileNativeDir'] + '///' + wf49xg['fileListName']), uv3_yn(xg94b, bgoh4z, yj0ek$);
    }, j$kye['clearRes'] = function (x94bg, pc5rm) {
      pc5rm === void 0x0 && (pc5rm = ![]);var eyk0$ = this;eyk0$['clearRes'](x94bg, pc5rm);var vanul3 = wf49xg['getFileInfo'](x94bg);if (vanul3 && (x94bg['indexOf']('http://') != -0x1 || x94bg['indexOf']('https://') != -0x1)) {
        var xgo9b = vanul3['md5'],
            cpbz8 = wf49xg['getFileNativePath'](xgo9b);wf49xg['remove'](cpbz8);
      }
    }, eyk_['onReadNativeCallBack'] = function (cm58rp, oxbg4h, mp5rct, _yvu3n, xfg9o, i1d6a2, yej$k0, $j0, vl_3u) {
      _yvu3n === void 0x0 && (_yvu3n = !![]), i1d6a2 === void 0x0 && (i1d6a2 = ![]), $j0 === void 0x0 && ($j0 = 0x0);if (!$j0) {
        var gxfw;if (mp5rct == 'json' || mp5rct == 'atlas') gxfw = v63ad['getJson'](vl_3u['data']);else mp5rct == 'xml' ? gxfw = m58c['parseXMLFromString'](vl_3u['data']) : gxfw = vl_3u['data'];yej$k0['onLoaded'](gxfw), !v63ad['isZiYu'] && v63ad['isPosMsgYu'] && mp5rct != 'arraybuffer' && wx['postMessage']({ 'url': oxbg4h, 'data': gxfw, 'isLoad': !![] });
      } else $j0 == 0x1 && v63ad['EnvConfig']['load']['call'](yej$k0, oxbg4h, mp5rct, _yvu3n, xfg9o, i1d6a2);
    }, ox4g9f(eyk_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), eyk_;
  }(),
      wf49xg = function (t5pmqr) {
    function pcmr8z() {
      pcmr8z['__super']['call'](this);;
    }return ohgx4(pcmr8z, 'laya.wx.mini.MiniFileMgr', t5pmqr), pcmr8z['isLoadFile'] = function (y$ke_) {
      return pcmr8z['_fileTypeArr']['indexOf'](y$ke_) != -0x1 ? !![] : ![];
    }, pcmr8z['getFileInfo'] = function ($_ky0) {
      var v3ul_ = $_ky0['split']('?')[0x0],
          bhz8og = pcmr8z['filesListObj'][v3ul_];if (bhz8og == null) return null;else return bhz8og;return null;
    }, pcmr8z['onFileUpdate'] = function (ualvn3, rhz) {
      var vul3n_ = ualvn3['split']('/'),
          t5rmcp = vul3n_[vul3n_['length'] - 0x1],
          _u3nvy = pcmr8z['getFileInfo'](rhz);if (_u3nvy == null) pcmr8z['onSaveFile'](rhz, t5rmcp);else {
        if (_u3nvy['readyUrl'] != rhz) pcmr8z['remove'](t5rmcp, rhz);
      }
    }, pcmr8z['exits'] = function (a3vd6l, ky0j$) {
      var xgob9 = pcmr8z['getFileNativePath'](a3vd6l);pcmr8z['fs']['getFileInfo']({ 'filePath': xgob9, 'success': function (nu3_l) {
          ky0j$ != null && ky0j$['runWith']([0x0, nu3_l]);
        }, 'fail': function (g94wfx) {
          ky0j$ != null && ky0j$['runWith']([0x1, g94wfx]);
        } });
    }, pcmr8z['read'] = function (i6wd21, w4fg, uvn3, y_0ke$) {
      w4fg === void 0x0 && (w4fg = 'ascill'), y_0ke$ === void 0x0 && (y_0ke$ = '');var a6lvd3;y_0ke$ != '' ? a6lvd3 = pcmr8z['getFileNativePath'](i6wd21) : a6lvd3 = i6wd21, pcmr8z['fs']['readFile']({ 'filePath': a6lvd3, 'encoding': w4fg, 'success': function (iad6l2) {
          uvn3 != null && uvn3['runWith']([0x0, iad6l2]);
        }, 'fail': function (tmqr5p) {
          if (tmqr5p && y_0ke$ != '') pcmr8z['down'](y_0ke$, w4fg, uvn3, y_0ke$);else uvn3 != null && uvn3['runWith']([0x1]);
        } });
    }, pcmr8z['readNativeFile'] = function (neyuk_, qm7t) {
      pcmr8z['fs']['readFile']({ 'filePath': neyuk_, 'encoding': '', 'success': function (nu_vy) {
          qm7t != null && qm7t['runWith']([0x0]);
        }, 'fail': function (ixf1w9) {
          qm7t != null && qm7t['runWith']([0x1]);
        } });
    }, pcmr8z['down'] = function (lna6v3, p8cr, m5rctp, gb4o) {
      p8cr === void 0x0 && (p8cr = 'ascill'), gb4o === void 0x0 && (gb4o = '');var lva62 = pcmr8z['getFileNativePath'](gb4o),
          eyn_ku = pcmr8z['wxdown']({ 'url': lna6v3, 'filePath': lva62, 'success': function (k0e_$y) {
          if (k0e_$y['statusCode'] === 0xc8) pcmr8z['readFile'](k0e_$y['filePath'], p8cr, m5rctp, gb4o);
        }, 'fail': function (ozhg4b) {
          m5rctp != null && m5rctp['runWith']([0x1, ozhg4b]);
        } });eyn_ku['onProgressUpdate'](function (ne_uy3) {
        m5rctp != null && m5rctp['runWith']([0x2, ne_uy3['progress']]);
      });
    }, pcmr8z['readFile'] = function (a62lid, xg4o9f, stqr, m57qt) {
      xg4o9f === void 0x0 && (xg4o9f = 'ascill'), m57qt === void 0x0 && (m57qt = ''), pcmr8z['fs']['readFile']({ 'filePath': a62lid, 'encoding': xg4o9f, 'success': function (fw9gx) {
          if (a62lid['indexOf']('http://') != -0x1 || a62lid['indexOf']('https://') != -0x1) pcmr8z['onFileUpdate'](a62lid, m57qt);stqr != null && stqr['runWith']([0x0, fw9gx]);
        }, 'fail': function (k0$_y) {
          if (k0$_y) stqr != null && stqr['runWith']([0x1, k0$_y]);
        } });
    }, pcmr8z['downImg'] = function (h4ogz, $eyj0, mtprc5) {
      mtprc5 === void 0x0 && (mtprc5 = '');var ohz8cb = pcmr8z['wxdown']({ 'url': h4ogz, 'success': function (nvua3l) {
          nvua3l['statusCode'] === 0xc8 && pcmr8z['copyFile'](nvua3l['tempFilePath'], mtprc5, $eyj0);
        }, 'fail': function (pr8mc) {
          $eyj0 != null && $eyj0['runWith']([0x1, pr8mc]);
        } });
    }, pcmr8z['copyFile'] = function (n_ul3v, x94fg, hgo4xb) {
      var e_kyu0 = n_ul3v['split']('/'),
          nuav3 = e_kyu0[e_kyu0['length'] - 0x1],
          i12dwf = x94fg['split']('?')[0x0],
          lv_n3u = pcmr8z['getFileInfo'](x94fg),
          hb8pcz = pcmr8z['getFileNativePath'](nuav3);pcmr8z['fs']['copyFile']({ 'srcPath': n_ul3v, 'destPath': hb8pcz, 'success': function (ln63va) {
          if (!lv_n3u) pcmr8z['onSaveFile'](x94fg, nuav3), hgo4xb != null && hgo4xb['runWith']([0x0]);else {
            if (lv_n3u['readyUrl'] != x94fg) pcmr8z['remove'](nuav3, x94fg, hgo4xb);
          }
        }, 'fail': function (avl62) {
          hgo4xb != null && hgo4xb['runWith']([0x1, avl62]);
        } });
    }, pcmr8z['getFileNativePath'] = function (hbo8) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + hbo8;
    }, pcmr8z['remove'] = function (nke_yu, $y0kj, gf4ox9) {
      $y0kj === void 0x0 && ($y0kj = '');var cr5 = pcmr8z['getFileInfo']($y0kj),
          ifx91w = pcmr8z['getFileNativePath'](cr5['md5']);uv_n3l['loader']['clearRes'](cr5['readyUrl']), pcmr8z['fs']['unlink']({ 'filePath': ifx91w, 'success': function (o4g9fx) {
          if ($y0kj != '') pcmr8z['onSaveFile']($y0kj, nke_yu);gf4ox9 != null && gf4ox9['runWith']([0x0]);
        }, 'fail': function (dl3av6) {} });
    }, pcmr8z['onSaveFile'] = function (wi1fd2, sqm5rt) {
      var ohbz = wi1fd2['split']('?')[0x0];pcmr8z['filesListObj'][ohbz] = { 'md5': sqm5rt, 'readyUrl': wi1fd2 }, pcmr8z['fs']['writeFile']({ 'filePath': pcmr8z['fileNativeDir'] + '/' + pcmr8z['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pcmr8z['filesListObj']), 'success': function (ho8g) {
          console['log']('写入测试测试成功：', ho8g);
        }, 'fail': function (hzoc8b) {
          console['log']('写入测试测试失败：', hzoc8b);
        } });
    }, pcmr8z['existDir'] = function (i6dla2, d6iw12) {
      pcmr8z['fs']['mkdir']({ 'dirPath': i6dla2, 'success': function (dlva2) {
          d6iw12 != null && d6iw12['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (a63nl) {
          if (a63nl['errMsg']['indexOf']('file already exists') != -0x1) pcmr8z['readSync'](pcmr8z['fileListName'], 'utf8', d6iw12);else d6iw12 != null && d6iw12['runWith']([0x1, a63nl]);
        } });
    }, pcmr8z['readSync'] = function (of49g, oxb94g, tm5r, m5rptq) {
      oxb94g === void 0x0 && (oxb94g = 'ascill'), m5rptq === void 0x0 && (m5rptq = '');var hzb8pc = pcmr8z['getFileNativePath'](of49g),
          cbho8z;try {
        cbho8z = pcmr8z['fs']['readFileSync'](hzb8pc), tm5r != null && tm5r['runWith']([0x0, { 'data': cbho8z }]);
      } catch (o8ghz) {
        tm5r != null && tm5r['runWith']([0x1]);
      }
    }, pcmr8z['readCache'] = function () {}, pcmr8z['writeCache'] = function (ek0$yj) {
      var lad2i6 = readyUrl['split']('?')[0x0];pcmr8z['filesListObj'][lad2i6] = { 'md5': md5Name, 'readyUrl': readyUrl }, pcmr8z['fs']['writeFile']({ 'filePath': pcmr8z['fileNativeDir'] + '/' + pcmr8z['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pcmr8z['filesListObj']), 'success': function (xh4ogb) {}, 'fail': function (vn36a) {} });
    }, pcmr8z['setNativeFileDir'] = function (nu3yv_) {
      pcmr8z['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + nu3yv_;
    }, pcmr8z['filesListObj'] = {}, pcmr8z['fileNativeDir'] = null, pcmr8z['fileListName'] = 'layaairfiles.txt', pcmr8z['ziyuFileData'] = {}, ox4g9f(pcmr8z, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), pcmr8z;
  }(fx9w1),
      hgz4bo = function (d3l6av) {
    function w91i2() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], w91i2['__super']['call'](this), this['_sound'] = w91i2['_createSound']();
    }ohgx4(w91i2, 'laya.wx.mini.MiniSound', d3l6av);var ifd2w = w91i2['prototype'];return ifd2w['load'] = function (wi2f1d) {
      var mcrt5p = this;wi2f1d = g9fxw4['formatURL'](wi2f1d), this['url'] = wi2f1d;if (w91i2['_audioCache'][wi2f1d]) {
        this['event']('complete');return;
      }function yuv_3n() {
        if (w91i2['_null'] != undefined) mcrt5p['_sound']['onCanplay'](w91i2['_null']), mcrt5p['_sound']['onError'](w91i2['_null']);else try {
          mcrt5p['_sound']['onCanplay'](null), mcrt5p['_sound']['onError'](null), w91i2['_null'] = null;
        } catch (m5qtr) {
          console['warn']('[wxmini] _clearSound:' + m5qtr), mcrt5p['_sound']['onCanplay'](f4xgo), mcrt5p['_sound']['onError'](f4xgo), w91i2['_null'] = f4xgo;
        }
      }function o4zbg() {
        yuv_3n(), ozbhc['loaded'] = !![], ozbhc['event']('complete'), w91i2['_audioCache'][ozbhc['url']] = ozbhc;
      }function qsrtm(j0eyk) {
        console['error']('errCode=' + j0eyk['errCode'] + '  errMsg=' + j0eyk['errMsg']), yuv_3n(), ozbhc['event']('error');
      }function f4xgo() {}this['_sound']['onCanplay'](o4zbg), this['_sound']['onError'](qsrtm), this['_sound']['src'] = wi2f1d;var ozbhc = this;
    }, ifd2w['play'] = function (w4xf9g, crmpz8) {
      w4xf9g === void 0x0 && (w4xf9g = 0x0), crmpz8 === void 0x0 && (crmpz8 = 0x0);var h8zpr;if (this['url'] == bxog['_tMusic']) {
        if (!w91i2['_musicAudio']) w91i2['_musicAudio'] = w91i2['_createSound']();h8zpr = w91i2['_musicAudio'];
      } else h8zpr = w91i2['_createSound']();h8zpr['src'] = this['url'];var kye0u_ = new f1x49w(h8zpr);return kye0u_['url'] = this['url'], kye0u_['loops'] = crmpz8, kye0u_['startTime'] = w4xf9g, kye0u_['play'](), bxog['addChannel'](kye0u_), kye0u_;
    }, ifd2w['dispose'] = function () {
      var xf9w = w91i2['_audioCache'][this['url']];xf9w && (xf9w['src'] = '', delete w91i2['_audioCache'][this['url']]);
    }, p8cmr(0x0, ifd2w, 'duration', function () {
      return this['_sound']['duration'];
    }), w91i2['_createSound'] = function () {
      return w91i2['_id']++, v63ad['window']['wx']['createInnerAudioContext']();
    }, w91i2['_musicAudio'] = null, w91i2['_id'] = 0x0, w91i2['_audioCache'] = {}, w91i2['_null'] = undefined, w91i2;
  }(fx9w1),
      f1x49w = function (hgb8o) {
    function yk0_u(och8bz) {
      this['_audio'] = null, this['_onEnd'] = null, yk0_u['__super']['call'](this), this['_audio'] = och8bz, this['_onEnd'] = m58c['bind'](this['__onEnd'], this), och8bz['onEnded'](this['_onEnd']);
    }ohgx4(yk0_u, 'laya.wx.mini.MiniSoundChannel', hgb8o);var neuk_ = yk0_u['prototype'];return neuk_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (uv_n3l['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, neuk_['__onNull'] = function () {}, neuk_['play'] = function () {
      this['isStopped'] = ![], bxog['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, neuk_['stop'] = function () {
      this['isStopped'] = !![], bxog['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (yk0_u['_null'] != undefined) this['_audio']['onEnded'](yk0_u['_null']);else try {
        this['_audio']['onEnded'](null), yk0_u['_null'] = null;
      } catch (nuvla) {
        console['warn']('[wxmini] stop:' + nuvla), this['_audio']['onEnded'](m58c['bind'](this['__onNull'], this)), yk0_u['_null'] = m58c['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, neuk_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, neuk_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], bxog['addChannel'](this), this['_audio']['play']();
    }, p8cmr(0x0, neuk_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), p8cmr(0x0, neuk_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), p8cmr(0x0, neuk_, 'volume', function () {
      return 0x1;
    }, function (tpcm5r) {}), yk0_u['_null'] = undefined, yk0_u;
  }(a2dil6);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var d6alv in Laya) {
    var v62l = Laya[d6alv];v62l && v62l['__isclass'] && (exports[d6alv] = v62l);
  }
});