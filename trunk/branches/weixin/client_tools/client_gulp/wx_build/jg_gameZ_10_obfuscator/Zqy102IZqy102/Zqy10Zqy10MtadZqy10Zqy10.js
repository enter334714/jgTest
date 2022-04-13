var J = wx.h$;
(function (window, document, ob05q) {
  var tchpze = ob05q['un'],
      zhtec = ob05q['uns'],
      f29ws = ob05q['static'],
      vyjo = ob05q['class'],
      u41a3l = ob05q['getset'],
      yxv7r = ob05q['__newvec'],
      z8hetc = laya['utils']['Browser'],
      kq05o = laya['events']['Event'],
      qgd0 = laya['events']['EventDispatcher'],
      vinj7 = laya['resource']['HTMLImage'],
      czhetp = laya['utils']['Handler'],
      k08 = laya['display']['Input'],
      p_the = laya['net']['Loader'],
      p2w_ze = laya['maths']['Matrix'],
      w_9ep = laya['renders']['Render'],
      k5gq0 = laya['utils']['RunDriver'],
      o7jr = laya['media']['Sound'],
      gq0d = laya['media']['SoundChannel'],
      phtcz = laya['media']['SoundManager'],
      bk05g = laya['display']['Stage'],
      xi1n7 = laya['net']['URL'],
      ezcph = laya['utils']['Utils'],
      h6z8ct = function () {
    function w29_f$() {}return vyjo(w29_f$, 'laya.wx.mini.MiniAdpter'), w29_f$['getJson'] = function (_phzt) {
      return JSON['parse'](_phzt);
    }, w29_f$['init'] = function (g0bk5q, t68dh) {
      g0bk5q === void 0x0 && (g0bk5q = ![]), t68dh === void 0x0 && (t68dh = ![]);if (w29_f$['_inited']) return;w29_f$['window'] = window;if (w29_f$['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;w29_f$['_inited'] = !![], w29_f$['isZiYu'] = t68dh, w29_f$['isPosMsgYu'] = g0bk5q, w29_f$['EnvConfig'] = {}, !w29_f$['isZiYu'] && (n34a1u['setNativeFileDir']('/layaairGame'), n34a1u['existDir'](n34a1u['fileNativeDir'], czhetp['create'](w29_f$, w29_f$['onMkdirCallBack']))), w29_f$['window']['focus'] = function () {}, ob05q['getUrlPath'] = function () {}, w29_f$['window']['logtime'] = function (ml4a3u) {}, w29_f$['window']['alertTimeLog'] = function (yvx7) {}, w29_f$['window']['resetShareInfo'] = function () {}, w29_f$['window']['CanvasRenderingContext2D'] = function () {}, w29_f$['window']['CanvasRenderingContext2D']['prototype'] = w29_f$['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], w29_f$['window']['document']['body']['appendChild'] = function () {}, w29_f$['EnvConfig']['pixelRatioInt'] = 0x0, k5gq0['getPixelRatio'] = w29_f$['pixelRatio'], w29_f$['_preCreateElement'] = z8hetc['createElement'], z8hetc['createElement'] = w29_f$['createElement'], k5gq0['createShaderCondition'] = w29_f$['createShaderCondition'], ezcph['parseXMLFromString'] = w29_f$['parseXMLFromString'], k08['_createInputElement'] = rvixj7['_createInputElement'], w29_f$['EnvConfig']['load'] = p_the['prototype']['load'], p_the['prototype']['load'] = e2w9p['prototype']['load'], w29_f$['isZiYu'] && g0bk5q && wx['onMessage'](function (ht6zc) {
        ht6zc['isLoad'] && (n34a1u['ziyuFileData'][ht6zc['url']] = ht6zc['data']);
      });
    }, w29_f$['onMkdirCallBack'] = function (nui134, ory7v) {
      if (!nui134) n34a1u['filesListObj'] = JSON['parse'](ory7v['data']);
    }, w29_f$['pixelRatio'] = function () {
      if (!w29_f$['EnvConfig']['pixelRatioInt']) try {
        var cth8z = wx['getSystemInfoSync']();return w29_f$['EnvConfig']['pixelRatioInt'] = cth8z['pixelRatio'], cth8z = cth8z, cth8z['pixelRatio'];
      } catch (pz2he_) {}return w29_f$['EnvConfig']['pixelRatioInt'];
    }, w29_f$['createElement'] = function (a43m) {
      if (a43m == 'canvas') {
        var d8gk0;return w29_f$['idx'] == 0x1 ? w29_f$['isZiYu'] ? (d8gk0 = sharedCanvas, d8gk0['style'] = {}) : d8gk0 = window['canvas'] : d8gk0 = window['wx']['createCanvas'](), w29_f$['idx']++, d8gk0;
      } else {
        if (a43m == 'textarea' || a43m == 'input') return w29_f$['onCreateInput'](a43m);else {
          if (a43m == 'div') {
            var t6g8cd = w29_f$['_preCreateElement'](a43m);return t6g8cd['contains'] = function (cdg68k) {
              return null;
            }, t6g8cd['removeChild'] = function (n1au43) {}, t6g8cd;
          } else return w29_f$['_preCreateElement'](a43m);
        }
      }
    }, w29_f$['onCreateInput'] = function (czh8t6) {
      var h6c = w29_f$['_preCreateElement'](czh8t6);return h6c['focus'] = rvixj7['wxinputFocus'], h6c['blur'] = rvixj7['wxinputblur'], h6c['style'] = {}, h6c['value'] = 0x0, h6c['parentElement'] = {}, h6c['placeholder'] = {}, h6c['type'] = {}, h6c['setColor'] = function (k5b0q) {}, h6c['setType'] = function (dkbg60) {}, h6c['setFontFace'] = function (i174) {}, h6c['addEventListener'] = function (hepz_t) {}, h6c['contains'] = function (_2wf) {
        return null;
      }, h6c['removeChild'] = function (th_zp) {}, h6c;
    }, w29_f$['createShaderCondition'] = function (na341u) {
      var qgkdb = this,
          tc = function () {
        var ectzp = na341u;return qgkdb[na341u['replace']('this.', '')];
      };return tc;
    }, w29_f$['EnvConfig'] = null, w29_f$['window'] = null, w29_f$['_preCreateElement'] = null, w29_f$['_inited'] = ![], w29_f$['wxRequest'] = null, w29_f$['systemInfo'] = null, w29_f$['version'] = '0.0.1', w29_f$['isZiYu'] = ![], w29_f$['isPosMsgYu'] = ![], w29_f$['parseXMLFromString'] = function (i13u) {
      var q5b0kg, h8dtc6;i13u = i13u['replace'](/>\s+</g, '><');try {
        q5b0kg = new window['Parser']['DOMParser']()['parseFromString'](i13u, 'text/xml');
      } catch (bg06k) {
        throw '需要引入xml解析库文件';
      }return q5b0kg;
    }, w29_f$['idx'] = 0x1, w29_f$;
  }(),
      k0d8g = function () {
    function ec8h() {}vyjo(ec8h, 'laya.wx.mini.MiniImage');var yqvor5 = ec8h['prototype'];return yqvor5['_loadImage'] = function (ji1x7n) {
      var c8g6k = this,
          ryj7vo = ![];ji1x7n['indexOf']('layaNativeDir/') == -0x1 && (ryj7vo = !![], ji1x7n = xi1n7['formatURL'](ji1x7n));if (!n34a1u['getFileInfo'](ji1x7n)) {
        if (ji1x7n['indexOf']('http://') != -0x1 || ji1x7n['indexOf']('https://') != -0x1) n34a1u['downImg'](ji1x7n, new czhetp(ec8h, ec8h['onDownImgCallBack'], [ji1x7n, c8g6k]), ji1x7n);else ec8h['onCreateImage'](ji1x7n, c8g6k, !![]);
      } else ec8h['onCreateImage'](ji1x7n, c8g6k, !ryj7vo);
    }, ec8h['onDownImgCallBack'] = function (bkoq, wf2_9p, ojry) {
      if (!ojry) ec8h['onCreateImage'](bkoq, wf2_9p);else wf2_9p['onError'](null);
    }, ec8h['onCreateImage'] = function (tcepz, oyqrb5, n34x1i) {
      n34x1i === void 0x0 && (n34x1i = ![]);var $_fw9;if (!n34x1i) {
        var htcp = n34a1u['getFileInfo'](tcepz),
            h_e2 = htcp['md5'];$_fw9 = n34a1u['getFileNativePath'](h_e2);
      } else $_fw9 = tcepz;if (oyqrb5['imgCache'] == null) oyqrb5['imgCache'] = {};var ixn17;function royj5() {
        ixn17['onload'] = null, ixn17['onerror'] = null, delete oyqrb5['imgCache'][tcepz];
      };var qyo5br = function () {
        royj5(), oyqrb5['onLoaded'](ixn17);
      },
          pw9e2_ = function () {
        royj5(), oyqrb5['event']('error', 'Load image failed');
      };oyqrb5['_type'] == 'nativeimage' ? (ixn17 = new z8hetc['window']['Image'](), ixn17['crossOrigin'] = '', ixn17['onload'] = qyo5br, ixn17['onerror'] = pw9e2_, ixn17['src'] = $_fw9, oyqrb5['imgCache'][tcepz] = ixn17) : new vinj7['create']($_fw9, { 'onload': qyo5br, 'onerror': pw9e2_, 'onCreate': function (xi147n) {
          ixn17 = xi147n, oyqrb5['imgCache'][tcepz] = xi147n;
        } });
    }, ec8h;
  }(),
      rvixj7 = function () {
    function ecpthz() {}return vyjo(ecpthz, 'laya.wx.mini.MiniInput'), ecpthz['_createInputElement'] = function () {
      k08['_initInput'](k08['area'] = z8hetc['createElement']('textarea')), k08['_initInput'](k08['input'] = z8hetc['createElement']('input')), k08['inputContainer'] = z8hetc['createElement']('div'), k08['inputContainer']['style']['position'] = 'absolute', k08['inputContainer']['style']['zIndex'] = 0x186a0, z8hetc['container']['appendChild'](k08['inputContainer']), k08['inputContainer']['setPos'] = function (eztp, ct6hz8) {
        k08['inputContainer']['style']['left'] = eztp + 'px', k08['inputContainer']['style']['top'] = ct6hz8 + 'px';
      }, ob05q['stage']['on']('resize', null, ecpthz['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (k08dg) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), phtcz['_soundClass'] = h86cd, phtcz['_musicClass'] = h86cd, window['_videoClass'] = oy5qrb;
    }, ecpthz['_onStageResize'] = function () {
      var qoyb5 = ob05q['stage']['_canvasTransform']['identity']();qoyb5['scale'](z8hetc['width'] / w_9ep['canvas']['width'] / k5gq0['getPixelRatio'](), z8hetc['height'] / w_9ep['canvas']['height'] / k5gq0['getPixelRatio']());
    }, ecpthz['wxinputFocus'] = function (te8hzc) {
      var qyr5vo = k08['inputElement']['target'];if (qyr5vo && !qyr5vo['editable']) return;h6z8ct['window']['wx']['offKeyboardConfirm'](), h6z8ct['window']['wx']['offKeyboardInput'](), h6z8ct['window']['wx']['showKeyboard']({ 'defaultValue': qyr5vo['text'], 'maxLength': qyr5vo['maxChars'], 'multiple': qyr5vo['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (_w2p9f) {}, 'fail': function (gtc68) {} }), h6z8ct['window']['wx']['onKeyboardConfirm'](function (n3x4i) {
        var jo5yrv = n3x4i ? n3x4i['value'] : '';qyr5vo['text'] = jo5yrv, qyr5vo['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), h6z8ct['window']['wx']['onKeyboardInput'](function (f_p) {
        var oyr5bq = f_p ? f_p['value'] : '';if (!qyr5vo['multiline']) {
          if (oyr5bq['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }qyr5vo['text'] = oyr5bq, qyr5vo['event']('input');
      });
    }, ecpthz['inputEnter'] = function () {
      k08['inputElement']['target']['focus'] = ![];
    }, ecpthz['wxinputblur'] = function () {
      ecpthz['hideKeyboard']();
    }, ecpthz['hideKeyboard'] = function () {
      h6z8ct['window']['wx']['offKeyboardConfirm'](), h6z8ct['window']['wx']['offKeyboardInput'](), h6z8ct['window']['wx']['hideKeyboard']({ 'success': function (d0gq) {
          console['log']('隐藏键盘');
        }, 'fail': function (zhe_2p) {
          console['log']('隐藏键盘出错:' + (zhe_2p ? zhe_2p['errMsg'] : ''));
        } });
    }, ecpthz;
  }(),
      e2w9p = function () {
    function fw2_p() {}vyjo(fw2_p, 'laya.wx.mini.MiniLoader');var ep92_w = fw2_p['prototype'];return ep92_w['load'] = function (y5boqr, rvjxy, bq0dgk, w29$s, jxnv7) {
      bq0dgk === void 0x0 && (bq0dgk = !![]), jxnv7 === void 0x0 && (jxnv7 = ![]);var _ewp2 = this;_ewp2['_url'] = y5boqr;if (y5boqr['indexOf']('data:image') === 0x0) _ewp2['_type'] = rvjxy = 'image';else _ewp2['_type'] = rvjxy || (rvjxy = _ewp2['getTypeFromUrl'](y5boqr));_ewp2['_cache'] = bq0dgk, _ewp2['_data'] = null;var g8kd60 = 'ascii';if (y5boqr['indexOf']('.fnt') != -0x1) g8kd60 = 'utf8';else rvjxy == 'arraybuffer' && (g8kd60 = '');;var dg6t8c = ezcph['getFileExtension'](y5boqr);if (fw2_p['_fileTypeArr']['indexOf'](dg6t8c) != -0x1) h6z8ct['EnvConfig']['load']['call'](this, y5boqr, rvjxy, bq0dgk, w29$s, jxnv7);else {
        if (!n34a1u['getFileInfo'](y5boqr)) {
          if (y5boqr['indexOf']('layaNativeDir/') != -0x1) {
            if (h6z8ct['isZiYu']) {
              var c86dkg = n34a1u['ziyuFileData'][y5boqr];_ewp2['onLoaded'](c86dkg);return;
            } else {
              cosnole['log']('read read'), n34a1u['read'](y5boqr, g8kd60, new czhetp(fw2_p, fw2_p['onReadNativeCallBack'], [g8kd60, y5boqr, rvjxy, bq0dgk, w29$s, jxnv7, _ewp2]));return;
            }
          }if (xi1n7['rootPath'] == '') var la143 = y5boqr;else la143 = y5boqr['split'](xi1n7['rootPath'])[0x0];y5boqr['indexOf']('http://') != -0x1 || y5boqr['indexOf']('https://') != -0x1 ? h6z8ct['EnvConfig']['load']['call'](_ewp2, y5boqr, rvjxy, bq0dgk, w29$s, jxnv7) : n34a1u['readFile'](la143, g8kd60, new czhetp(fw2_p, fw2_p['onReadNativeCallBack'], [g8kd60, y5boqr, rvjxy, bq0dgk, w29$s, jxnv7, _ewp2]), y5boqr);
        } else h6z8ct['EnvConfig']['load']['call'](this, y5boqr, rvjxy, bq0dgk, w29$s, jxnv7);
      }
    }, ep92_w['resMgrLoad'] = function (inx1j7, rboyq, xi3n14, u431la, dgkc8, _e2zp, j5vry) {
      xi3n14 === void 0x0 && (xi3n14 = 0x0), u431la === void 0x0 && (u431la = ![]), dgkc8 === void 0x0 && (dgkc8 = ![]), _e2zp === void 0x0 && (_e2zp = 0x0), j5vry === void 0x0 && (j5vry = 0x3), inx1j7['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', inx1j7), h6z8ct['EnvConfig']['resMgrLoad'](inx1j7, (broy5, yb0qo, hdc8) => {
        fw2_p['prototype']['resMgrLoadCallBack'](broy5, yb0qo, hdc8, rboyq);
      }, xi3n14, u431la, dgkc8, _e2zp, j5vry);
    }, ep92_w['resMgrLoadCallBack'] = function (kqbo50, n74, u13la, wzpe2) {
      console['log']('buff:::', kqbo50, u13la, n34a1u['fileNativeDir'] + '///' + n34a1u['fileListName']), wzpe2(kqbo50, n74, u13la);
    }, ep92_w['clearRes'] = function (vyor5, k0oqb5) {
      k0oqb5 === void 0x0 && (k0oqb5 = ![]);var sfw9$ = this;sfw9$['clearRes'](vyor5, k0oqb5);var d8ctg = n34a1u['getFileInfo'](vyor5);if (d8ctg && (vyor5['indexOf']('http://') != -0x1 || vyor5['indexOf']('https://') != -0x1)) {
        var ko05q = d8ctg['md5'],
            o5bq0k = n34a1u['getFileNativePath'](ko05q);n34a1u['remove'](o5bq0k);
      }
    }, fw2_p['onReadNativeCallBack'] = function (c6tz8, f2w9$s, y7vjx, n7xiv, h6dt, a3u4n1, w2pz, tc8, kdcg8) {
      n7xiv === void 0x0 && (n7xiv = !![]), a3u4n1 === void 0x0 && (a3u4n1 = ![]), tc8 === void 0x0 && (tc8 = 0x0);if (!tc8) {
        var k5bqo;if (y7vjx == 'json' || y7vjx == 'atlas') k5bqo = h6z8ct['getJson'](kdcg8['data']);else y7vjx == 'xml' ? k5bqo = ezcph['parseXMLFromString'](kdcg8['data']) : k5bqo = kdcg8['data'];w2pz['onLoaded'](k5bqo), !h6z8ct['isZiYu'] && h6z8ct['isPosMsgYu'] && y7vjx != 'arraybuffer' && wx['postMessage']({ 'url': f2w9$s, 'data': k5bqo, 'isLoad': !![] });
      } else tc8 == 0x1 && h6z8ct['EnvConfig']['load']['call'](w2pz, f2w9$s, y7vjx, n7xiv, h6dt, a3u4n1);
    }, f29ws(fw2_p, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), fw2_p;
  }(),
      n34a1u = function (b05kq) {
    function v7xj() {
      v7xj['__super']['call'](this);;
    }return vyjo(v7xj, 'laya.wx.mini.MiniFileMgr', b05kq), v7xj['isLoadFile'] = function (jin17) {
      return v7xj['_fileTypeArr']['indexOf'](jin17) != -0x1 ? !![] : ![];
    }, v7xj['getFileInfo'] = function (c8dk) {
      var _2wpez = c8dk['split']('?')[0x0],
          gdc = v7xj['filesListObj'][_2wpez];if (gdc == null) return null;else return gdc;return null;
    }, v7xj['onFileUpdate'] = function (x1j, yqo5r) {
      var hz6c = x1j['split']('/'),
          jxvin = hz6c[hz6c['length'] - 0x1],
          qkb0g5 = v7xj['getFileInfo'](yqo5r);if (qkb0g5 == null) v7xj['onSaveFile'](yqo5r, jxvin);else {
        if (qkb0g5['readyUrl'] != yqo5r) v7xj['remove'](jxvin, yqo5r);
      }
    }, v7xj['exits'] = function (jyr5ov, u3i14) {
      var e_h2z = v7xj['getFileNativePath'](jyr5ov);v7xj['fs']['getFileInfo']({ 'filePath': e_h2z, 'success': function (kqb5g) {
          u3i14 != null && u3i14['runWith']([0x0, kqb5g]);
        }, 'fail': function (mua3l4) {
          u3i14 != null && u3i14['runWith']([0x1, mua3l4]);
        } });
    }, v7xj['read'] = function (rjvyo7, dgb0k, yo5qv, j71ix) {
      dgb0k === void 0x0 && (dgb0k = 'ascill'), j71ix === void 0x0 && (j71ix = '');var x1i3n4;j71ix != '' ? x1i3n4 = v7xj['getFileNativePath'](rjvyo7) : x1i3n4 = rjvyo7, v7xj['fs']['readFile']({ 'filePath': x1i3n4, 'encoding': dgb0k, 'success': function (u13l) {
          yo5qv != null && yo5qv['runWith']([0x0, u13l]);
        }, 'fail': function (dg608) {
          if (dg608 && j71ix != '') v7xj['down'](j71ix, dgb0k, yo5qv, j71ix);else yo5qv != null && yo5qv['runWith']([0x1]);
        } });
    }, v7xj['readNativeFile'] = function (w92_e, xvr7yj) {
      v7xj['fs']['readFile']({ 'filePath': w92_e, 'encoding': '', 'success': function (zcthe) {
          xvr7yj != null && xvr7yj['runWith']([0x0]);
        }, 'fail': function (n74x1) {
          xvr7yj != null && xvr7yj['runWith']([0x1]);
        } });
    }, v7xj['down'] = function (ry5v, rx7j, boq5k0, z6ht8) {
      rx7j === void 0x0 && (rx7j = 'ascill'), z6ht8 === void 0x0 && (z6ht8 = '');var c6d8gt = v7xj['getFileNativePath'](z6ht8),
          hzp2 = v7xj['wxdown']({ 'url': ry5v, 'filePath': c6d8gt, 'success': function (g8d0k) {
          if (g8d0k['statusCode'] === 0xc8) v7xj['readFile'](g8d0k['filePath'], rx7j, boq5k0, z6ht8);
        }, 'fail': function ($w29sf) {
          boq5k0 != null && boq5k0['runWith']([0x1, $w29sf]);
        } });hzp2['onProgressUpdate'](function (rqyb5o) {
        boq5k0 != null && boq5k0['runWith']([0x2, rqyb5o['progress']]);
      });
    }, v7xj['readFile'] = function (jyrv7x, j7yv, bq5yr, boqr) {
      j7yv === void 0x0 && (j7yv = 'ascill'), boqr === void 0x0 && (boqr = ''), v7xj['fs']['readFile']({ 'filePath': jyrv7x, 'encoding': j7yv, 'success': function (g6dc8k) {
          if (jyrv7x['indexOf']('http://') != -0x1 || jyrv7x['indexOf']('https://') != -0x1) v7xj['onFileUpdate'](jyrv7x, boqr);bq5yr != null && bq5yr['runWith']([0x0, g6dc8k]);
        }, 'fail': function (dbkgq) {
          if (dbkgq) bq5yr != null && bq5yr['runWith']([0x1, dbkgq]);
        } });
    }, v7xj['downImg'] = function (n1ix, yrxv7, wf$) {
      wf$ === void 0x0 && (wf$ = '');var p_f92 = v7xj['wxdown']({ 'url': n1ix, 'success': function (c6hz) {
          c6hz['statusCode'] === 0xc8 && v7xj['copyFile'](c6hz['tempFilePath'], wf$, yrxv7);
        }, 'fail': function (g6c8td) {
          yrxv7 != null && yrxv7['runWith']([0x1, g6c8td]);
        } });
    }, v7xj['copyFile'] = function (j7oyvr, $f_w29, ry) {
      var orvjy = j7oyvr['split']('/'),
          x1ni74 = orvjy[orvjy['length'] - 0x1],
          nj71x = $f_w29['split']('?')[0x0],
          yrov = v7xj['getFileInfo']($f_w29),
          zp_het = v7xj['getFileNativePath'](x1ni74);v7xj['fs']['copyFile']({ 'srcPath': j7oyvr, 'destPath': zp_het, 'success': function (bo5q0k) {
          if (!yrov) v7xj['onSaveFile']($f_w29, x1ni74), ry != null && ry['runWith']([0x0]);else {
            if (yrov['readyUrl'] != $f_w29) v7xj['remove'](x1ni74, $f_w29, ry);
          }
        }, 'fail': function (zhetp_) {
          ry != null && ry['runWith']([0x1, zhetp_]);
        } });
    }, v7xj['getFileNativePath'] = function (s9wf2) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + s9wf2;
    }, v7xj['remove'] = function (f2_w9, e_zpt, i14u3n) {
      e_zpt === void 0x0 && (e_zpt = '');var hc8td = v7xj['getFileInfo'](e_zpt),
          chzt86 = v7xj['getFileNativePath'](hc8td['md5']);ob05q['loader']['clearRes'](hc8td['readyUrl']), v7xj['fs']['unlink']({ 'filePath': chzt86, 'success': function (t86hd) {
          if (e_zpt != '') v7xj['onSaveFile'](e_zpt, f2_w9);i14u3n != null && i14u3n['runWith']([0x0]);
        }, 'fail': function (tc8g6d) {} });
    }, v7xj['onSaveFile'] = function (ehct8, e9wp) {
      var u4a3n1 = ehct8['split']('?')[0x0];v7xj['filesListObj'][u4a3n1] = { 'md5': e9wp, 'readyUrl': ehct8 }, v7xj['fs']['writeFile']({ 'filePath': v7xj['fileNativeDir'] + '/' + v7xj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v7xj['filesListObj']), 'success': function (n134iu) {
          console['log']('写入测试测试成功：', n134iu);
        }, 'fail': function (x4i1n7) {
          console['log']('写入测试测试失败：', x4i1n7);
        } });
    }, v7xj['existDir'] = function (ceztph, cet) {
      v7xj['fs']['mkdir']({ 'dirPath': ceztph, 'success': function (j7irx) {
          cet != null && cet['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (a4ul) {
          if (a4ul['errMsg']['indexOf']('file already exists') != -0x1) v7xj['readSync'](v7xj['fileListName'], 'utf8', cet);else cet != null && cet['runWith']([0x1, a4ul]);
        } });
    }, v7xj['readSync'] = function (bk0dg6, c8ht6, ua34l1, a41lu) {
      c8ht6 === void 0x0 && (c8ht6 = 'ascill'), a41lu === void 0x0 && (a41lu = '');var _pew2z = v7xj['getFileNativePath'](bk0dg6),
          ez2h_;try {
        ez2h_ = v7xj['fs']['readFileSync'](_pew2z), ua34l1 != null && ua34l1['runWith']([0x0, { 'data': ez2h_ }]);
      } catch (dc6k8g) {
        ua34l1 != null && ua34l1['runWith']([0x1]);
      }
    }, v7xj['readCache'] = function () {}, v7xj['writeCache'] = function (p29w_f) {
      var hptc = readyUrl['split']('?')[0x0];v7xj['filesListObj'][hptc] = { 'md5': md5Name, 'readyUrl': readyUrl }, v7xj['fs']['writeFile']({ 'filePath': v7xj['fileNativeDir'] + '/' + v7xj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v7xj['filesListObj']), 'success': function (ph2z_) {}, 'fail': function (i3x1n4) {} });
    }, v7xj['setNativeFileDir'] = function (dh8t6) {
      v7xj['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + dh8t6;
    }, v7xj['filesListObj'] = {}, v7xj['fileNativeDir'] = null, v7xj['fileListName'] = 'layaairfiles.txt', v7xj['ziyuFileData'] = {}, f29ws(v7xj, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), v7xj;
  }(qgd0),
      h86cd = function ($_w9f) {
    function njxvi() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], njxvi['__super']['call'](this), this['_sound'] = njxvi['_createSound'](), this['_chanell'] = new voqr5(this['_sound']);
    }vyjo(njxvi, 'laya.wx.mini.MiniSound', $_w9f);var cd68t = njxvi['prototype'];return cd68t['load'] = function (bd0gk) {
      var gbk0q = this;bd0gk = xi1n7['formatURL'](bd0gk), this['url'] = bd0gk;if (njxvi['_audioCache'][bd0gk]) {
        this['event']('complete');return;
      }function b5rqo() {
        if (njxvi['_null'] != undefined) gbk0q['_sound']['onCanplay'](njxvi['_null']), gbk0q['_sound']['onError'](njxvi['_null']);else try {
          gbk0q['_sound']['onCanplay'](null), gbk0q['_sound']['onError'](null), njxvi['_null'] = null;
        } catch (dk6b0g) {
          console['warn']('[wxmini] _clearSound:' + dk6b0g), gbk0q['_sound']['onCanplay'](et8hcz), gbk0q['_sound']['onError'](et8hcz), njxvi['_null'] = et8hcz;
        }
      }function tgc8d6() {
        d6tg8['loaded'] = !![], d6tg8['event']('complete'), njxvi['_audioCache'][d6tg8['url']] = d6tg8;
      }function yqv5or(xvi7nj) {
        console['error']('errCode=' + xvi7nj['errCode'] + '  errMsg=' + xvi7nj['errMsg']), d6tg8['event']('error');
      }function et8hcz() {}this['_sound']['onCanplay'](tgc8d6), this['_sound']['onError'](yqv5or), this['_sound']['src'] = bd0gk;var d6tg8 = this;
    }, cd68t['play'] = function (qk5o0b, ws2$f9) {
      qk5o0b === void 0x0 && (qk5o0b = 0x0), ws2$f9 === void 0x0 && (ws2$f9 = 0x0);var kg860d, w$29;if (this['url'] == phtcz['_tMusic']) {
        if (!njxvi['_musicAudio']) njxvi['_musicAudio'] = this['_sound'];kg860d = njxvi['_musicAudio'], w$29 = this['_chanell'];
      } else kg860d = this['_sound'], w$29 = this['_chanell'];return kg860d['src'] = this['url'], kg860d['startTime'] = 0x0, w$29['isStopped'] && (w$29['url'] = this['url'], w$29['loops'] = ws2$f9, w$29['startTime'] = qk5o0b, w$29['play'](), phtcz['addChannel'](w$29)), w$29;
    }, cd68t['dispose'] = function () {
      var teph_ = njxvi['_audioCache'][this['url']];teph_ && (teph_['src'] = '', delete njxvi['_audioCache'][this['url']]);
    }, u41a3l(0x0, cd68t, 'duration', function () {
      return this['_sound']['duration'];
    }), njxvi['_createSound'] = function () {
      njxvi['_id']++;var p2ez = h6z8ct['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return p2ez;
    }, njxvi['_musicAudio'] = null, njxvi['_id'] = 0x0, njxvi['_audioCache'] = {}, njxvi['_null'] = undefined, njxvi;
  }(qgd0),
      voqr5 = function (ehctpz) {
    function kqb05(zeh_2) {
      this['_audio'] = null, this['_onEnd'] = null, kqb05['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = zeh_2, this['_onEnd'] = ezcph['bind'](this['__onEnd'], this), zeh_2['onEnded'](this['_onEnd']);
    }vyjo(kqb05, 'laya.wx.mini.MiniSoundChannel', ehctpz);var $f_9 = kqb05['prototype'];return $f_9['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ob05q['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $f_9['__onNull'] = function () {}, $f_9['play'] = function () {
      this['isStopped'] = ![], phtcz['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $f_9['stop'] = function () {
      this['isStopped'] = !![], phtcz['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, $f_9['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $f_9['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], phtcz['addChannel'](this), this['_audio']['play']();
    }, u41a3l(0x0, $f_9, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), u41a3l(0x0, $f_9, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), u41a3l(0x0, $f_9, 'volume', function () {
      return 0x1;
    }, function (h8t6d) {}), kqb05['_null'] = undefined, kqb05;
  }(gq0d),
      oy5qrb = function () {
    function amu43l() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = h6z8ct['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }vyjo(amu43l, 'laya.wx.mini.MiniVideo');var _2f$9w = amu43l['prototype'];return _2f$9w['on'] = function (jn71x, tzph_, b50oqy) {
      if (jn71x == 'loadedmetadata') this['onPlayFunc'] = b50oqy['bind'](tzph_), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else jn71x == 'ended' && (this['onEndedFunC'] = b50oqy['bind'](tzph_), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, _2f$9w['onTimeUpdateFunc'] = function (t8gc6) {
      this['position'] = t8gc6['position'], this['_duration'] = t8gc6['duration'];
    }, _2f$9w['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, _2f$9w['onended'] = function (k0d6bg, f2pw_) {
      this['onEndedFunC'] = f2pw_['bind'](k0d6bg), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, _2f$9w['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, _2f$9w['off'] = function (rvjy5, ehzcp, e2p9) {
      if (rvjy5 == 'loadedmetadata') this['onPlayFunc'] = e2p9['bind'](ehzcp), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else rvjy5 == 'ended' && (this['onEndedFunC'] = e2p9['bind'](ehzcp), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, _2f$9w['load'] = function (yvo5q) {
      if (!this['videoElement']) return;this['videoElement']['src'] = yvo5q;
    }, _2f$9w['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, _2f$9w['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, _2f$9w['size'] = function (kdc68, ijxr7) {
      if (!this['videoElement']) return;this['videoElement']['width'] = kdc68, this['videoElement']['height'] = ijxr7;
    }, _2f$9w['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, _2f$9w['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, u41a3l(0x0, _2f$9w, 'duration', function () {
      return this['_duration'];
    }), u41a3l(0x0, _2f$9w, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (pew_z) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = pew_z;
    }), u41a3l(0x0, _2f$9w, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), u41a3l(0x0, _2f$9w, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), u41a3l(0x0, _2f$9w, 'ended', function () {
      return this['videoend'];
    }), u41a3l(0x0, _2f$9w, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (h8cd) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = h8cd;
    }), u41a3l(0x0, _2f$9w, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (he8ztc) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = he8ztc;
    }), u41a3l(0x0, _2f$9w, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (ryjx7) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = ryjx7;
    }), u41a3l(0x0, _2f$9w, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), u41a3l(0x0, _2f$9w, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (ix7jn1) {
      if (!this['videoElement']) return;this['videoElement']['x'] = ix7jn1;
    }), u41a3l(0x0, _2f$9w, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (yor5jv) {
      if (!this['videoElement']) return;this['videoElement']['y'] = yor5jv;
    }), u41a3l(0x0, _2f$9w, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), u41a3l(0x0, _2f$9w, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (w2f9$) {
      if (!this['videoElement']) return;this['videoElement']['src'] = w2f9$;
    }), u41a3l(0x0, _2f$9w, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (ws29f) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = ws29f;
    }), u41a3l(0x0, _2f$9w, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (vjr7x) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = vjr7x;
    }), amu43l;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var d68cgk in Laya) {
    var rvyo7j = Laya[d68cgk];rvyo7j && rvyo7j['__isclass'] && (exports[d68cgk] = rvyo7j);
  }
});