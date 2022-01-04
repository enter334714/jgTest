var B = wx.$B;
(function (window, document, z4k9b6) {
  var igupen = z4k9b6['un'],
      y0zl4v = z4k9b6['uns'],
      fr385j = z4k9b6['static'],
      r8a3 = z4k9b6['class'],
      sh6n7 = z4k9b6['getset'],
      ieaw2 = z4k9b6['__newvec'],
      w2ipa = laya['utils']['Browser'],
      jrmf15 = laya['events']['Event'],
      klzb49 = laya['events']['EventDispatcher'],
      sn96 = laya['resource']['HTMLImage'],
      _ytx0 = laya['utils']['Handler'],
      w835fr = laya['display']['Input'],
      enpgsu = laya['net']['Loader'],
      n7sguh = laya['maths']['Matrix'],
      eag2i = laya['renders']['Render'],
      gnpuei = laya['utils']['RunDriver'],
      seupg = laya['media']['Sound'],
      v$40ly = laya['media']['SoundChannel'],
      z964k = laya['media']['SoundManager'],
      npg7s = laya['display']['Stage'],
      uhgn7 = laya['net']['URL'],
      vkzl = laya['utils']['Utils'],
      _tq$x = function () {
    function esup() {}return r8a3(esup, 'laya.wx.mini.MiniAdpter'), esup['getJson'] = function (m5ojr1) {
      return JSON['parse'](m5ojr1);
    }, esup['init'] = function (l0$v4y, gp2ia) {
      l0$v4y === void 0x0 && (l0$v4y = ![]), gp2ia === void 0x0 && (gp2ia = ![]);if (esup['_inited']) return;esup['window'] = window;if (esup['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;esup['_inited'] = !![], esup['isZiYu'] = gp2ia, esup['isPosMsgYu'] = l0$v4y, esup['EnvConfig'] = {}, !esup['isZiYu'] && (y0vxt['setNativeFileDir']('/layaairGame'), y0vxt['existDir'](y0vxt['fileNativeDir'], _ytx0['create'](esup, esup['onMkdirCallBack']))), esup['window']['focus'] = function () {}, z4k9b6['getUrlPath'] = function () {}, esup['window']['logtime'] = function (v0yz) {}, esup['window']['alertTimeLog'] = function (zklv) {}, esup['window']['resetShareInfo'] = function () {}, esup['window']['CanvasRenderingContext2D'] = function () {}, esup['window']['CanvasRenderingContext2D']['prototype'] = esup['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], esup['window']['document']['body']['appendChild'] = function () {}, esup['EnvConfig']['pixelRatioInt'] = 0x0, gnpuei['getPixelRatio'] = esup['pixelRatio'], esup['_preCreateElement'] = w2ipa['createElement'], w2ipa['createElement'] = esup['createElement'], gnpuei['createShaderCondition'] = esup['createShaderCondition'], vkzl['parseXMLFromString'] = esup['parseXMLFromString'], w835fr['_createInputElement'] = yv$xt0['_createInputElement'], esup['EnvConfig']['load'] = enpgsu['prototype']['load'], enpgsu['prototype']['load'] = ueing['prototype']['load'], esup['isZiYu'] && l0$v4y && wx['onMessage'](function (us7p) {
        us7p['isLoad'] && (y0vxt['ziyuFileData'][us7p['url']] = us7p['data']);
      });
    }, esup['onMkdirCallBack'] = function (t$xy0, sugh7n) {
      if (!t$xy0) y0vxt['filesListObj'] = JSON['parse'](sugh7n['data']);
    }, esup['pixelRatio'] = function () {
      if (!esup['EnvConfig']['pixelRatioInt']) try {
        var aw38 = wx['getSystemInfoSync']();return esup['EnvConfig']['pixelRatioInt'] = aw38['pixelRatio'], aw38 = aw38, aw38['pixelRatio'];
      } catch (n769s) {}return esup['EnvConfig']['pixelRatioInt'];
    }, esup['createElement'] = function (w3a2f) {
      if (w3a2f == 'canvas') {
        var vtyl0$;return esup['idx'] == 0x1 ? esup['isZiYu'] ? (vtyl0$ = sharedCanvas, vtyl0$['style'] = {}) : vtyl0$ = window['canvas'] : vtyl0$ = window['wx']['createCanvas'](), esup['idx']++, vtyl0$;
      } else {
        if (w3a2f == 'textarea' || w3a2f == 'input') return esup['onCreateInput'](w3a2f);else {
          if (w3a2f == 'div') {
            var lbkz = esup['_preCreateElement'](w3a2f);return lbkz['contains'] = function (uhs6n) {
              return null;
            }, lbkz['removeChild'] = function (xv0$y) {}, lbkz;
          } else return esup['_preCreateElement'](w3a2f);
        }
      }
    }, esup['onCreateInput'] = function (zkbh9) {
      var x0_d = esup['_preCreateElement'](zkbh9);return x0_d['focus'] = yv$xt0['wxinputFocus'], x0_d['blur'] = yv$xt0['wxinputblur'], x0_d['style'] = {}, x0_d['value'] = 0x0, x0_d['parentElement'] = {}, x0_d['placeholder'] = {}, x0_d['type'] = {}, x0_d['setColor'] = function (n6shu7) {}, x0_d['setType'] = function ($q_dtx) {}, x0_d['setFontFace'] = function (y$0x_t) {}, x0_d['addEventListener'] = function (k97sh6) {}, x0_d['contains'] = function (pngeui) {
        return null;
      }, x0_d['removeChild'] = function (ugs7hn) {}, x0_d;
    }, esup['createShaderCondition'] = function (u6sn7) {
      var l94zkb = this,
          d$t0_x = function () {
        var zl4kv = u6sn7;return l94zkb[u6sn7['replace']('this.', '')];
      };return d$t0_x;
    }, esup['EnvConfig'] = null, esup['window'] = null, esup['_preCreateElement'] = null, esup['_inited'] = ![], esup['wxRequest'] = null, esup['systemInfo'] = null, esup['version'] = '0.0.1', esup['isZiYu'] = ![], esup['isPosMsgYu'] = ![], esup['parseXMLFromString'] = function (zl4) {
      var xy_0t$, p2ig;zl4 = zl4['replace'](/>\s+</g, '><');try {
        xy_0t$ = new window['Parser']['DOMParser']()['parseFromString'](zl4, 'text/xml');
      } catch (nepigu) {
        throw '需要引入xml解析库文件';
      }return xy_0t$;
    }, esup['idx'] = 0x1, esup;
  }(),
      r1j5mf = function () {
    function ewaip2() {}r8a3(ewaip2, 'laya.wx.mini.MiniImage');var w3i2ea = ewaip2['prototype'];return w3i2ea['_loadImage'] = function (s7npug) {
      var u7gn = this,
          wp2eai = ![];s7npug['indexOf']('layaNativeDir/') == -0x1 && (wp2eai = !![], s7npug = uhgn7['formatURL'](s7npug));if (!y0vxt['getFileInfo'](s7npug)) {
        if (s7npug['indexOf']('http://') != -0x1 || s7npug['indexOf']('https://') != -0x1) y0vxt['downImg'](s7npug, new _ytx0(ewaip2, ewaip2['onDownImgCallBack'], [s7npug, u7gn]), s7npug);else ewaip2['onCreateImage'](s7npug, u7gn, !![]);
      } else ewaip2['onCreateImage'](s7npug, u7gn, !wp2eai);
    }, ewaip2['onDownImgCallBack'] = function (z4lkb9, vxt$0, jfm5r) {
      if (!jfm5r) ewaip2['onCreateImage'](z4lkb9, vxt$0);else vxt$0['onError'](null);
    }, ewaip2['onCreateImage'] = function (rmj1o5, h7ngu, nhu) {
      nhu === void 0x0 && (nhu = ![]);var ty_x;if (!nhu) {
        var l0vyz = y0vxt['getFileInfo'](rmj1o5),
            kzb46 = l0vyz['md5'];ty_x = y0vxt['getFileNativePath'](kzb46);
      } else ty_x = rmj1o5;if (h7ngu['imgCache'] == null) h7ngu['imgCache'] = {};var iunp;function h976sn() {
        iunp['onload'] = null, iunp['onerror'] = null, delete h7ngu['imgCache'][rmj1o5];
      };var y_$t0 = function () {
        h976sn(), h7ngu['onLoaded'](iunp);
      },
          bvl4y = function () {
        h976sn(), h7ngu['event']('error', 'Load image failed');
      };h7ngu['_type'] == 'nativeimage' ? (iunp = new w2ipa['window']['Image'](), iunp['crossOrigin'] = '', iunp['onload'] = y_$t0, iunp['onerror'] = bvl4y, iunp['src'] = ty_x, h7ngu['imgCache'][rmj1o5] = iunp) : new sn96['create'](ty_x, { 'onload': y_$t0, 'onerror': bvl4y, 'onCreate': function (h6s97) {
          iunp = h6s97, h7ngu['imgCache'][rmj1o5] = h6s97;
        } });
    }, ewaip2;
  }(),
      yv$xt0 = function () {
    function snpug() {}return r8a3(snpug, 'laya.wx.mini.MiniInput'), snpug['_createInputElement'] = function () {
      w835fr['_initInput'](w835fr['area'] = w2ipa['createElement']('textarea')), w835fr['_initInput'](w835fr['input'] = w2ipa['createElement']('input')), w835fr['inputContainer'] = w2ipa['createElement']('div'), w835fr['inputContainer']['style']['position'] = 'absolute', w835fr['inputContainer']['style']['zIndex'] = 0x186a0, w2ipa['container']['appendChild'](w835fr['inputContainer']), w835fr['inputContainer']['setPos'] = function (vlb4, uhsng) {
        w835fr['inputContainer']['style']['left'] = vlb4 + 'px', w835fr['inputContainer']['style']['top'] = uhsng + 'px';
      }, z4k9b6['stage']['on']('resize', null, snpug['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jm15o) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), z964k['_soundClass'] = blzk, z964k['_musicClass'] = blzk;
    }, snpug['_onStageResize'] = function () {
      var ojm5r1 = z4k9b6['stage']['_canvasTransform']['identity']();ojm5r1['scale'](w2ipa['width'] / eag2i['canvas']['width'] / gnpuei['getPixelRatio'](), w2ipa['height'] / eag2i['canvas']['height'] / gnpuei['getPixelRatio']());
    }, snpug['wxinputFocus'] = function (mo5r1) {
      var sh67n9 = w835fr['inputElement']['target'];if (sh67n9 && !sh67n9['editable']) return;_tq$x['window']['wx']['offKeyboardConfirm'](), _tq$x['window']['wx']['offKeyboardInput'](), _tq$x['window']['wx']['showKeyboard']({ 'defaultValue': sh67n9['text'], 'maxLength': sh67n9['maxChars'], 'multiple': sh67n9['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (zyvl4) {}, 'fail': function (xt$_) {} }), _tq$x['window']['wx']['onKeyboardConfirm'](function (pag2e) {
        var gp2uie = pag2e ? pag2e['value'] : '';sh67n9['text'] = gp2uie, sh67n9['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _tq$x['window']['wx']['onKeyboardInput'](function ($dq_xt) {
        var hsngu7 = $dq_xt ? $dq_xt['value'] : '';if (!sh67n9['multiline']) {
          if (hsngu7['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }sh67n9['text'] = hsngu7, sh67n9['event']('input');
      });
    }, snpug['inputEnter'] = function () {
      w835fr['inputElement']['target']['focus'] = ![];
    }, snpug['wxinputblur'] = function () {
      snpug['hideKeyboard']();
    }, snpug['hideKeyboard'] = function () {
      _tq$x['window']['wx']['offKeyboardConfirm'](), _tq$x['window']['wx']['offKeyboardInput'](), _tq$x['window']['wx']['hideKeyboard']({ 'success': function (uhsg) {
          console['log']('隐藏键盘');
        }, 'fail': function (vly$0t) {
          console['log']('隐藏键盘出错:' + (vly$0t ? vly$0t['errMsg'] : ''));
        } });
    }, snpug;
  }(),
      ueing = function () {
    function vyl$() {}r8a3(vyl$, 'laya.wx.mini.MiniLoader');var x0_dt$ = vyl$['prototype'];return x0_dt$['load'] = function (e2aigp, wr8f5, fw58, zh6, n7sgu) {
      fw58 === void 0x0 && (fw58 = !![]), n7sgu === void 0x0 && (n7sgu = ![]);var z4l0y = this;z4l0y['_url'] = e2aigp;if (e2aigp['indexOf']('data:image') === 0x0) z4l0y['_type'] = wr8f5 = 'image';else z4l0y['_type'] = wr8f5 || (wr8f5 = z4l0y['getTypeFromUrl'](e2aigp));z4l0y['_cache'] = fw58, z4l0y['_data'] = null;var ipgue = 'ascii';if (e2aigp['indexOf']('.fnt') != -0x1) ipgue = 'utf8';else wr8f5 == 'arraybuffer' && (ipgue = '');;var l0t$y = vkzl['getFileExtension'](e2aigp);if (vyl$['_fileTypeArr']['indexOf'](l0t$y) != -0x1) _tq$x['EnvConfig']['load']['call'](this, e2aigp, wr8f5, fw58, zh6, n7sgu);else {
        if (!y0vxt['getFileInfo'](e2aigp)) {
          if (e2aigp['indexOf']('layaNativeDir/') != -0x1) {
            if (_tq$x['isZiYu']) {
              var td$_xq = y0vxt['ziyuFileData'][e2aigp];z4l0y['onLoaded'](td$_xq);return;
            } else {
              cosnole['log']('read read'), y0vxt['read'](e2aigp, ipgue, new _ytx0(vyl$, vyl$['onReadNativeCallBack'], [ipgue, e2aigp, wr8f5, fw58, zh6, n7sgu, z4l0y]));return;
            }
          }if (uhgn7['rootPath'] == '') var $_0ytx = e2aigp;else $_0ytx = e2aigp['split'](uhgn7['rootPath'])[0x0];e2aigp['indexOf']('http://') != -0x1 || e2aigp['indexOf']('https://') != -0x1 ? _tq$x['EnvConfig']['load']['call'](z4l0y, e2aigp, wr8f5, fw58, zh6, n7sgu) : y0vxt['readFile']($_0ytx, ipgue, new _ytx0(vyl$, vyl$['onReadNativeCallBack'], [ipgue, e2aigp, wr8f5, fw58, zh6, n7sgu, z4l0y]), e2aigp);
        } else _tq$x['EnvConfig']['load']['call'](this, e2aigp, wr8f5, fw58, zh6, n7sgu);
      }
    }, x0_dt$['resMgrLoad'] = function (vlk, nug7sh, $d_, bl4vyz, h6n7s, a8rwf, w328ai) {
      $d_ === void 0x0 && ($d_ = 0x0), bl4vyz === void 0x0 && (bl4vyz = ![]), h6n7s === void 0x0 && (h6n7s = ![]), a8rwf === void 0x0 && (a8rwf = 0x0), w328ai === void 0x0 && (w328ai = 0x3), vlk['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', vlk), _tq$x['EnvConfig']['resMgrLoad'](vlk, (fw23, usn76, f2wa) => {
        vyl$['prototype']['resMgrLoadCallBack'](fw23, usn76, f2wa, nug7sh);
      }, $d_, bl4vyz, h6n7s, a8rwf, w328ai);
    }, x0_dt$['resMgrLoadCallBack'] = function (inegp, zb4ly, a3rwf, v4zyl0) {
      console['log']('buff:::', inegp, a3rwf, y0vxt['fileNativeDir'] + '///' + y0vxt['fileListName']), v4zyl0(inegp, zb4ly, a3rwf);
    }, x0_dt$['clearRes'] = function (e2w3ia, rafw) {
      rafw === void 0x0 && (rafw = ![]);var a8w2f = this;a8w2f['clearRes'](e2w3ia, rafw);var $vy4l = y0vxt['getFileInfo'](e2w3ia);if ($vy4l && (e2w3ia['indexOf']('http://') != -0x1 || e2w3ia['indexOf']('https://') != -0x1)) {
        var kzlb49 = $vy4l['md5'],
            inegu = y0vxt['getFileNativePath'](kzlb49);y0vxt['remove'](inegu);
      }
    }, vyl$['onReadNativeCallBack'] = function (eigup, z9hbk, bk67h, pgaei2, seupn, txd$_q, hn9, giupen, m1rj5o) {
      pgaei2 === void 0x0 && (pgaei2 = !![]), txd$_q === void 0x0 && (txd$_q = ![]), giupen === void 0x0 && (giupen = 0x0);if (!giupen) {
        var we2a3i;if (bk67h == 'json' || bk67h == 'atlas') we2a3i = _tq$x['getJson'](m1rj5o['data']);else bk67h == 'xml' ? we2a3i = vkzl['parseXMLFromString'](m1rj5o['data']) : we2a3i = m1rj5o['data'];hn9['onLoaded'](we2a3i), !_tq$x['isZiYu'] && _tq$x['isPosMsgYu'] && bk67h != 'arraybuffer' && wx['postMessage']({ 'url': z9hbk, 'data': we2a3i, 'isLoad': !![] });
      } else giupen == 0x1 && _tq$x['EnvConfig']['load']['call'](hn9, z9hbk, bk67h, pgaei2, seupn, txd$_q);
    }, fr385j(vyl$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), vyl$;
  }(),
      y0vxt = function (hsk6) {
    function ghnu() {
      ghnu['__super']['call'](this);;
    }return r8a3(ghnu, 'laya.wx.mini.MiniFileMgr', hsk6), ghnu['isLoadFile'] = function (ia28w3) {
      return ghnu['_fileTypeArr']['indexOf'](ia28w3) != -0x1 ? !![] : ![];
    }, ghnu['getFileInfo'] = function (ylzvb) {
      var su7p = ylzvb['split']('?')[0x0],
          h6s97k = ghnu['filesListObj'][su7p];if (h6s97k == null) return null;else return h6s97k;return null;
    }, ghnu['onFileUpdate'] = function (bhk976, v4zby) {
      var ylv40 = bhk976['split']('/'),
          _$t0y = ylv40[ylv40['length'] - 0x1],
          $t0xd = ghnu['getFileInfo'](v4zby);if ($t0xd == null) ghnu['onSaveFile'](v4zby, _$t0y);else {
        if ($t0xd['readyUrl'] != v4zby) ghnu['remove'](_$t0y, v4zby);
      }
    }, ghnu['exits'] = function (usnh6, ungp) {
      var xt$d = ghnu['getFileNativePath'](usnh6);ghnu['fs']['getFileInfo']({ 'filePath': xt$d, 'success': function ($4yv0) {
          ungp != null && ungp['runWith']([0x0, $4yv0]);
        }, 'fail': function (ra8fw) {
          ungp != null && ungp['runWith']([0x1, ra8fw]);
        } });
    }, ghnu['read'] = function (a3e2wi, y0vtx$, aeiwp, wa3f82) {
      y0vtx$ === void 0x0 && (y0vtx$ = 'ascill'), wa3f82 === void 0x0 && (wa3f82 = '');var s6hn9;wa3f82 != '' ? s6hn9 = ghnu['getFileNativePath'](a3e2wi) : s6hn9 = a3e2wi, ghnu['fs']['readFile']({ 'filePath': s6hn9, 'encoding': y0vtx$, 'success': function (h76kb) {
          aeiwp != null && aeiwp['runWith']([0x0, h76kb]);
        }, 'fail': function (w382i) {
          if (w382i && wa3f82 != '') ghnu['down'](wa3f82, y0vtx$, aeiwp, wa3f82);else aeiwp != null && aeiwp['runWith']([0x1]);
        } });
    }, ghnu['readNativeFile'] = function (gnupei, w8f2) {
      ghnu['fs']['readFile']({ 'filePath': gnupei, 'encoding': '', 'success': function (_$td0) {
          w8f2 != null && w8f2['runWith']([0x0]);
        }, 'fail': function (kh6bz) {
          w8f2 != null && w8f2['runWith']([0x1]);
        } });
    }, ghnu['down'] = function (vyzbl, k6sh, eigp, n7uh6s) {
      k6sh === void 0x0 && (k6sh = 'ascill'), n7uh6s === void 0x0 && (n7uh6s = '');var tv$yx0 = ghnu['getFileNativePath'](n7uh6s),
          bkzlv = ghnu['wxdown']({ 'url': vyzbl, 'filePath': tv$yx0, 'success': function (t$qd_) {
          if (t$qd_['statusCode'] === 0xc8) ghnu['readFile'](t$qd_['filePath'], k6sh, eigp, n7uh6s);
        }, 'fail': function (z9b6hk) {
          eigp != null && eigp['runWith']([0x1, z9b6hk]);
        } });bkzlv['onProgressUpdate'](function (guep2) {
        eigp != null && eigp['runWith']([0x2, guep2['progress']]);
      });
    }, ghnu['readFile'] = function (aw28f, _$0tyx, f8r5j1, b4vkz) {
      _$0tyx === void 0x0 && (_$0tyx = 'ascill'), b4vkz === void 0x0 && (b4vkz = ''), ghnu['fs']['readFile']({ 'filePath': aw28f, 'encoding': _$0tyx, 'success': function (xt0d) {
          if (aw28f['indexOf']('http://') != -0x1 || aw28f['indexOf']('https://') != -0x1) ghnu['onFileUpdate'](aw28f, b4vkz);f8r5j1 != null && f8r5j1['runWith']([0x0, xt0d]);
        }, 'fail': function (t0y$) {
          if (t0y$) f8r5j1 != null && f8r5j1['runWith']([0x1, t0y$]);
        } });
    }, ghnu['downImg'] = function (hbkz9, enpugi, i2apg) {
      i2apg === void 0x0 && (i2apg = '');var rfj1 = ghnu['wxdown']({ 'url': hbkz9, 'success': function (eigun) {
          eigun['statusCode'] === 0xc8 && ghnu['copyFile'](eigun['tempFilePath'], i2apg, enpugi);
        }, 'fail': function (pg7u) {
          enpugi != null && enpugi['runWith']([0x1, pg7u]);
        } });
    }, ghnu['copyFile'] = function (yxtv$, k9h7, yxvt0$) {
      var iu2p = yxtv$['split']('/'),
          r15om = iu2p[iu2p['length'] - 0x1],
          frj81 = k9h7['split']('?')[0x0],
          f8rj3 = ghnu['getFileInfo'](k9h7),
          a2gpe = ghnu['getFileNativePath'](r15om);ghnu['fs']['copyFile']({ 'srcPath': yxtv$, 'destPath': a2gpe, 'success': function (hugn7s) {
          if (!f8rj3) ghnu['onSaveFile'](k9h7, r15om), yxvt0$ != null && yxvt0$['runWith']([0x0]);else {
            if (f8rj3['readyUrl'] != k9h7) ghnu['remove'](r15om, k9h7, yxvt0$);
          }
        }, 'fail': function (wepai2) {
          yxvt0$ != null && yxvt0$['runWith']([0x1, wepai2]);
        } });
    }, ghnu['getFileNativePath'] = function (us6hn7) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + us6hn7;
    }, ghnu['remove'] = function (lyzv4, e3wia2, uge2i) {
      e3wia2 === void 0x0 && (e3wia2 = '');var igep2a = ghnu['getFileInfo'](e3wia2),
          k9l4bz = ghnu['getFileNativePath'](igep2a['md5']);z4k9b6['loader']['clearRes'](igep2a['readyUrl']), ghnu['fs']['unlink']({ 'filePath': k9l4bz, 'success': function (m1jor5) {
          if (e3wia2 != '') ghnu['onSaveFile'](e3wia2, lyzv4);uge2i != null && uge2i['runWith']([0x0]);
        }, 'fail': function (eupsgn) {} });
    }, ghnu['onSaveFile'] = function (sn7ug, s7k6) {
      var a23wei = sn7ug['split']('?')[0x0];ghnu['filesListObj'][a23wei] = { 'md5': s7k6, 'readyUrl': sn7ug }, ghnu['fs']['writeFile']({ 'filePath': ghnu['fileNativeDir'] + '/' + ghnu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ghnu['filesListObj']), 'success': function (i2pe) {
          console['log']('写入测试测试成功：', i2pe);
        }, 'fail': function (e32aiw) {
          console['log']('写入测试测试失败：', e32aiw);
        } });
    }, ghnu['existDir'] = function (k49zl, egpusn) {
      ghnu['fs']['mkdir']({ 'dirPath': k49zl, 'success': function (piwa2e) {
          egpusn != null && egpusn['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function ($_tx0y) {
          if ($_tx0y['errMsg']['indexOf']('file already exists') != -0x1) ghnu['readSync'](ghnu['fileListName'], 'utf8', egpusn);else egpusn != null && egpusn['runWith']([0x1, $_tx0y]);
        } });
    }, ghnu['readSync'] = function (w53fr8, omrj1, pgs7u, n697hs) {
      omrj1 === void 0x0 && (omrj1 = 'ascill'), n697hs === void 0x0 && (n697hs = '');var iea2w3 = ghnu['getFileNativePath'](w53fr8),
          fm1j5r;try {
        fm1j5r = ghnu['fs']['readFileSync'](iea2w3), pgs7u != null && pgs7u['runWith']([0x0, { 'data': fm1j5r }]);
      } catch (jf8r3) {
        pgs7u != null && pgs7u['runWith']([0x1]);
      }
    }, ghnu['readCache'] = function () {}, ghnu['writeCache'] = function (i2up) {
      var u2pegi = readyUrl['split']('?')[0x0];ghnu['filesListObj'][u2pegi] = { 'md5': md5Name, 'readyUrl': readyUrl }, ghnu['fs']['writeFile']({ 'filePath': ghnu['fileNativeDir'] + '/' + ghnu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ghnu['filesListObj']), 'success': function (v$ytx) {}, 'fail': function (peui) {} });
    }, ghnu['setNativeFileDir'] = function (f5r8j3) {
      ghnu['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + f5r8j3;
    }, ghnu['filesListObj'] = {}, ghnu['fileNativeDir'] = null, ghnu['fileListName'] = 'layaairfiles.txt', ghnu['ziyuFileData'] = {}, fr385j(ghnu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ghnu;
  }(klzb49),
      blzk = function (y$) {
    function yl0tv$() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], yl0tv$['__super']['call'](this), this['_sound'] = yl0tv$['_createSound']();
    }r8a3(yl0tv$, 'laya.wx.mini.MiniSound', y$);var l9bk4 = yl0tv$['prototype'];return l9bk4['load'] = function (p2w) {
      var pguien = this;p2w = uhgn7['formatURL'](p2w), this['url'] = p2w;if (yl0tv$['_audioCache'][p2w]) {
        this['event']('complete');return;
      }function fr3w58() {
        if (yl0tv$['_null'] != undefined) pguien['_sound']['onCanplay'](yl0tv$['_null']), pguien['_sound']['onError'](yl0tv$['_null']);else try {
          pguien['_sound']['onCanplay'](null), pguien['_sound']['onError'](null), yl0tv$['_null'] = null;
        } catch ($_qd) {
          console['warn']('[wxmini] _clearSound:' + $_qd), pguien['_sound']['onCanplay'](pgesu), pguien['_sound']['onError'](pgesu), yl0tv$['_null'] = pgesu;
        }
      }function x0$() {
        fr3w58(), un7ps['loaded'] = !![], un7ps['event']('complete'), yl0tv$['_audioCache'][un7ps['url']] = un7ps;
      }function _td$qx(zb4y) {
        console['error']('errCode=' + zb4y['errCode'] + '  errMsg=' + zb4y['errMsg']), fr3w58(), un7ps['event']('error');
      }function pgesu() {}this['_sound']['onCanplay'](x0$), this['_sound']['onError'](_td$qx), this['_sound']['src'] = p2w;var un7ps = this;
    }, l9bk4['play'] = function (ro5j1m, zkbl49) {
      ro5j1m === void 0x0 && (ro5j1m = 0x0), zkbl49 === void 0x0 && (zkbl49 = 0x0);var v$y0l4;if (this['url'] == z964k['_tMusic']) {
        if (!yl0tv$['_musicAudio']) yl0tv$['_musicAudio'] = yl0tv$['_createSound']();v$y0l4 = yl0tv$['_musicAudio'];
      } else v$y0l4 = yl0tv$['_createSound']();v$y0l4['src'] = this['url'];var rjf815 = new kb6z9(v$y0l4);return rjf815['url'] = this['url'], rjf815['loops'] = zkbl49, rjf815['startTime'] = ro5j1m, rjf815['play'](), z964k['addChannel'](rjf815), rjf815;
    }, l9bk4['dispose'] = function () {
      var su7n = yl0tv$['_audioCache'][this['url']];su7n && (su7n['src'] = '', delete yl0tv$['_audioCache'][this['url']]);
    }, sh6n7(0x0, l9bk4, 'duration', function () {
      return this['_sound']['duration'];
    }), yl0tv$['_createSound'] = function () {
      return yl0tv$['_id']++, _tq$x['window']['wx']['createInnerAudioContext']();
    }, yl0tv$['_musicAudio'] = null, yl0tv$['_id'] = 0x0, yl0tv$['_audioCache'] = {}, yl0tv$['_null'] = undefined, yl0tv$;
  }(klzb49),
      kb6z9 = function ($ty0_x) {
    function zh6b9k(bvl4z) {
      this['_audio'] = null, this['_onEnd'] = null, zh6b9k['__super']['call'](this), this['_audio'] = bvl4z, this['_onEnd'] = vkzl['bind'](this['__onEnd'], this), bvl4z['onEnded'](this['_onEnd']);
    }r8a3(zh6b9k, 'laya.wx.mini.MiniSoundChannel', $ty0_x);var kvb4z = zh6b9k['prototype'];return kvb4z['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (z4k9b6['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, kvb4z['__onNull'] = function () {}, kvb4z['play'] = function () {
      this['isStopped'] = ![], z964k['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, kvb4z['stop'] = function () {
      this['isStopped'] = !![], z964k['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (zh6b9k['_null'] != undefined) this['_audio']['onEnded'](zh6b9k['_null']);else try {
        this['_audio']['onEnded'](null), zh6b9k['_null'] = null;
      } catch (f3w) {
        console['warn']('[wxmini] stop:' + f3w), this['_audio']['onEnded'](vkzl['bind'](this['__onNull'], this)), zh6b9k['_null'] = vkzl['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, kvb4z['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, kvb4z['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], z964k['addChannel'](this), this['_audio']['play']();
    }, sh6n7(0x0, kvb4z, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), sh6n7(0x0, kvb4z, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), sh6n7(0x0, kvb4z, 'volume', function () {
      return 0x1;
    }, function (gshn) {}), zh6b9k['_null'] = undefined, zh6b9k;
  }(v$40ly);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var n7h69s in Laya) {
    var zl04y = Laya[n7h69s];zl04y && zl04y['__isclass'] && (exports[n7h69s] = zl04y);
  }
});