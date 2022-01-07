var Q = wx.$v;
(function (window, document, h612y_) {
  var xegbq = h612y_['un'],
      pgxqvw = h612y_['uns'],
      k05 = h612y_['static'],
      wvpq = h612y_['class'],
      hy6_z1 = h612y_['getset'],
      qe8ulb = h612y_['__newvec'],
      wq8geb = laya['utils']['Browser'],
      xwvpqg = laya['events']['Event'],
      c570mk = laya['events']['EventDispatcher'],
      y2_ht = laya['resource']['HTMLImage'],
      c0aj = laya['utils']['Handler'],
      $3s4i = laya['display']['Input'],
      qble = laya['net']['Loader'],
      jadc0 = laya['maths']['Matrix'],
      _n312t = laya['renders']['Render'],
      $3o4si = laya['utils']['RunDriver'],
      cj0d = laya['media']['Sound'],
      c0m7kd = laya['media']['SoundChannel'],
      bue8l = laya['media']['SoundManager'],
      $f4so = laya['display']['Stage'],
      buezl = laya['net']['URL'],
      o3tn4 = laya['utils']['Utils'],
      gxqpw = function () {
    function v5p0() {}return wvpq(v5p0, 'laya.wx.mini.MiniAdpter'), v5p0['getJson'] = function (bew8uq) {
      return JSON['parse'](bew8uq);
    }, v5p0['init'] = function (zyu6lh, qbw8e) {
      zyu6lh === void 0x0 && (zyu6lh = ![]), qbw8e === void 0x0 && (qbw8e = ![]);if (v5p0['_inited']) return;v5p0['window'] = window;if (v5p0['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;v5p0['_inited'] = !![], v5p0['isZiYu'] = qbw8e, v5p0['isPosMsgYu'] = zyu6lh, v5p0['EnvConfig'] = {}, !v5p0['isZiYu'] && (vpgqxw['setNativeFileDir']('/layaairGame'), vpgqxw['existDir'](vpgqxw['fileNativeDir'], c0aj['create'](v5p0, v5p0['onMkdirCallBack']))), v5p0['window']['focus'] = function () {}, h612y_['getUrlPath'] = function () {}, v5p0['window']['logtime'] = function (j0mcad) {}, v5p0['window']['alertTimeLog'] = function (is4$of) {}, v5p0['window']['resetShareInfo'] = function () {}, v5p0['window']['CanvasRenderingContext2D'] = function () {}, v5p0['window']['CanvasRenderingContext2D']['prototype'] = v5p0['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], v5p0['window']['document']['body']['appendChild'] = function () {}, v5p0['EnvConfig']['pixelRatioInt'] = 0x0, $3o4si['getPixelRatio'] = v5p0['pixelRatio'], v5p0['_preCreateElement'] = wq8geb['createElement'], wq8geb['createElement'] = v5p0['createElement'], $3o4si['createShaderCondition'] = v5p0['createShaderCondition'], o3tn4['parseXMLFromString'] = v5p0['parseXMLFromString'], $3s4i['_createInputElement'] = c057['_createInputElement'], v5p0['EnvConfig']['load'] = qble['prototype']['load'], qble['prototype']['load'] = sn3$4o['prototype']['load'], v5p0['isZiYu'] && zyu6lh && wx['onMessage'](function ($o3t) {
        $o3t['isLoad'] && (vpgqxw['ziyuFileData'][$o3t['url']] = $o3t['data']);
      });
    }, v5p0['onMkdirCallBack'] = function (nt21, to$3n) {
      if (!nt21) vpgqxw['filesListObj'] = JSON['parse'](to$3n['data']);
    }, v5p0['pixelRatio'] = function () {
      if (!v5p0['EnvConfig']['pixelRatioInt']) try {
        var p75kv = wx['getSystemInfoSync']();return v5p0['EnvConfig']['pixelRatioInt'] = p75kv['pixelRatio'], p75kv = p75kv, p75kv['pixelRatio'];
      } catch (u8lzy6) {}return v5p0['EnvConfig']['pixelRatioInt'];
    }, v5p0['createElement'] = function (ebulq8) {
      if (ebulq8 == 'canvas') {
        var k70mc;return v5p0['idx'] == 0x1 ? v5p0['isZiYu'] ? (k70mc = sharedCanvas, k70mc['style'] = {}) : k70mc = window['canvas'] : k70mc = window['wx']['createCanvas'](), v5p0['idx']++, k70mc;
      } else {
        if (ebulq8 == 'textarea' || ebulq8 == 'input') return v5p0['onCreateInput'](ebulq8);else {
          if (ebulq8 == 'div') {
            var fr$si9 = v5p0['_preCreateElement'](ebulq8);return fr$si9['contains'] = function (gxqvwp) {
              return null;
            }, fr$si9['removeChild'] = function (h_yt) {}, fr$si9;
          } else return v5p0['_preCreateElement'](ebulq8);
        }
      }
    }, v5p0['onCreateInput'] = function ($9i) {
      var hy1zl6 = v5p0['_preCreateElement']($9i);return hy1zl6['focus'] = c057['wxinputFocus'], hy1zl6['blur'] = c057['wxinputblur'], hy1zl6['style'] = {}, hy1zl6['value'] = 0x0, hy1zl6['parentElement'] = {}, hy1zl6['placeholder'] = {}, hy1zl6['type'] = {}, hy1zl6['setColor'] = function (not432) {}, hy1zl6['setType'] = function (h6zuy) {}, hy1zl6['setFontFace'] = function (t21nh_) {}, hy1zl6['addEventListener'] = function (h621) {}, hy1zl6['contains'] = function (lb8q) {
        return null;
      }, hy1zl6['removeChild'] = function (zlyh61) {}, hy1zl6;
    }, v5p0['createShaderCondition'] = function (cmad0) {
      var zeul = this,
          s$9o = function () {
        var xp5wg = cmad0;return zeul[cmad0['replace']('this.', '')];
      };return s$9o;
    }, v5p0['EnvConfig'] = null, v5p0['window'] = null, v5p0['_preCreateElement'] = null, v5p0['_inited'] = ![], v5p0['wxRequest'] = null, v5p0['systemInfo'] = null, v5p0['version'] = '0.0.1', v5p0['isZiYu'] = ![], v5p0['isPosMsgYu'] = ![], v5p0['parseXMLFromString'] = function (fr$s9) {
      var dma0c, osi34;fr$s9 = fr$s9['replace'](/>\s+</g, '><');try {
        dma0c = new window['Parser']['DOMParser']()['parseFromString'](fr$s9, 'text/xml');
      } catch (jdmk0) {
        throw '需要引入xml解析库文件';
      }return dma0c;
    }, v5p0['idx'] = 0x1, v5p0;
  }(),
      ezu8 = function () {
    function s9if$() {}wvpq(s9if$, 'laya.wx.mini.MiniImage');var gvwqx = s9if$['prototype'];return gvwqx['_loadImage'] = function (y86z) {
      var so4fi$ = this,
          kvp5x = ![];y86z['indexOf']('layaNativeDir/') == -0x1 && (kvp5x = !![], y86z = buezl['formatURL'](y86z));if (!vpgqxw['getFileInfo'](y86z)) {
        if (y86z['indexOf']('http://') != -0x1 || y86z['indexOf']('https://') != -0x1) vpgqxw['downImg'](y86z, new c0aj(s9if$, s9if$['onDownImgCallBack'], [y86z, so4fi$]), y86z);else s9if$['onCreateImage'](y86z, so4fi$, !![]);
      } else s9if$['onCreateImage'](y86z, so4fi$, !kvp5x);
    }, s9if$['onDownImgCallBack'] = function (zlu68y, uz6lb, t432n_) {
      if (!t432n_) s9if$['onCreateImage'](zlu68y, uz6lb);else uz6lb['onError'](null);
    }, s9if$['onCreateImage'] = function (wgpx5, yu, pk50v7) {
      pk50v7 === void 0x0 && (pk50v7 = ![]);var pwgqx;if (!pk50v7) {
        var ze8bl = vpgqxw['getFileInfo'](wgpx5),
            gpxew = ze8bl['md5'];pwgqx = vpgqxw['getFileNativePath'](gpxew);
      } else pwgqx = wgpx5;if (yu['imgCache'] == null) yu['imgCache'] = {};var ueblz8;function h1_6yz() {
        ueblz8['onload'] = null, ueblz8['onerror'] = null, delete yu['imgCache'][wgpx5];
      };var mkcd7 = function () {
        h1_6yz(), yu['onLoaded'](ueblz8);
      },
          qb8u = function () {
        h1_6yz(), yu['event']('error', 'Load image failed');
      };yu['_type'] == 'nativeimage' ? (ueblz8 = new wq8geb['window']['Image'](), ueblz8['crossOrigin'] = '', ueblz8['onload'] = mkcd7, ueblz8['onerror'] = qb8u, ueblz8['src'] = pwgqx, yu['imgCache'][wgpx5] = ueblz8) : new y2_ht['create'](pwgqx, { 'onload': mkcd7, 'onerror': qb8u, 'onCreate': function (wexbgq) {
          ueblz8 = wexbgq, yu['imgCache'][wgpx5] = wexbgq;
        } });
    }, s9if$;
  }(),
      c057 = function () {
    function d7k() {}return wvpq(d7k, 'laya.wx.mini.MiniInput'), d7k['_createInputElement'] = function () {
      $3s4i['_initInput']($3s4i['area'] = wq8geb['createElement']('textarea')), $3s4i['_initInput']($3s4i['input'] = wq8geb['createElement']('input')), $3s4i['inputContainer'] = wq8geb['createElement']('div'), $3s4i['inputContainer']['style']['position'] = 'absolute', $3s4i['inputContainer']['style']['zIndex'] = 0x186a0, wq8geb['container']['appendChild']($3s4i['inputContainer']), $3s4i['inputContainer']['setPos'] = function (t34$, v70c5k) {
        $3s4i['inputContainer']['style']['left'] = t34$ + 'px', $3s4i['inputContainer']['style']['top'] = v70c5k + 'px';
      }, h612y_['stage']['on']('resize', null, d7k['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (gbew8) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), bue8l['_soundClass'] = px75vg, bue8l['_musicClass'] = px75vg;
    }, d7k['_onStageResize'] = function () {
      var c0m7d = h612y_['stage']['_canvasTransform']['identity']();c0m7d['scale'](wq8geb['width'] / _n312t['canvas']['width'] / $3o4si['getPixelRatio'](), wq8geb['height'] / _n312t['canvas']['height'] / $3o4si['getPixelRatio']());
    }, d7k['wxinputFocus'] = function (kcjd0m) {
      var n$43s = $3s4i['inputElement']['target'];if (n$43s && !n$43s['editable']) return;gxqpw['window']['wx']['offKeyboardConfirm'](), gxqpw['window']['wx']['offKeyboardInput'](), gxqpw['window']['wx']['showKeyboard']({ 'defaultValue': n$43s['text'], 'maxLength': n$43s['maxChars'], 'multiple': n$43s['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (_zyh) {}, 'fail': function (s$4n3) {} }), gxqpw['window']['wx']['onKeyboardConfirm'](function (n1t2h) {
        var vgx7p = n1t2h ? n1t2h['value'] : '';n$43s['text'] = vgx7p, n$43s['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), gxqpw['window']['wx']['onKeyboardInput'](function (wgxpq) {
        var otn32 = wgxpq ? wgxpq['value'] : '';if (!n$43s['multiline']) {
          if (otn32['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }n$43s['text'] = otn32, n$43s['event']('input');
      });
    }, d7k['inputEnter'] = function () {
      $3s4i['inputElement']['target']['focus'] = ![];
    }, d7k['wxinputblur'] = function () {
      d7k['hideKeyboard']();
    }, d7k['hideKeyboard'] = function () {
      gxqpw['window']['wx']['offKeyboardConfirm'](), gxqpw['window']['wx']['offKeyboardInput'](), gxqpw['window']['wx']['hideKeyboard']({ 'success': function (eqgb8) {
          console['log']('隐藏键盘');
        }, 'fail': function (bu8l6) {
          console['log']('隐藏键盘出错:' + (bu8l6 ? bu8l6['errMsg'] : ''));
        } });
    }, d7k;
  }(),
      sn3$4o = function () {
    function p5vxk() {}wvpq(p5vxk, 'laya.wx.mini.MiniLoader');var v5pxk = p5vxk['prototype'];return v5pxk['load'] = function (mcd0j, n4t$o, to2n43, z1_hy6, fsr9i$) {
      to2n43 === void 0x0 && (to2n43 = !![]), fsr9i$ === void 0x0 && (fsr9i$ = ![]);var e8lbqu = this;e8lbqu['_url'] = mcd0j;if (mcd0j['indexOf']('data:image') === 0x0) e8lbqu['_type'] = n4t$o = 'image';else e8lbqu['_type'] = n4t$o || (n4t$o = e8lbqu['getTypeFromUrl'](mcd0j));e8lbqu['_cache'] = to2n43, e8lbqu['_data'] = null;var f$oi4 = 'ascii';if (mcd0j['indexOf']('.fnt') != -0x1) f$oi4 = 'utf8';else n4t$o == 'arraybuffer' && (f$oi4 = '');;var uzb6l8 = o3tn4['getFileExtension'](mcd0j);if (p5vxk['_fileTypeArr']['indexOf'](uzb6l8) != -0x1) gxqpw['EnvConfig']['load']['call'](this, mcd0j, n4t$o, to2n43, z1_hy6, fsr9i$);else {
        if (!vpgqxw['getFileInfo'](mcd0j)) {
          if (mcd0j['indexOf']('layaNativeDir/') != -0x1) {
            if (gxqpw['isZiYu']) {
              var th2_1n = vpgqxw['ziyuFileData'][mcd0j];e8lbqu['onLoaded'](th2_1n);return;
            } else {
              cosnole['log']('read read'), vpgqxw['read'](mcd0j, f$oi4, new c0aj(p5vxk, p5vxk['onReadNativeCallBack'], [f$oi4, mcd0j, n4t$o, to2n43, z1_hy6, fsr9i$, e8lbqu]));return;
            }
          }if (buezl['rootPath'] == '') var on43$t = mcd0j;else on43$t = mcd0j['split'](buezl['rootPath'])[0x0];mcd0j['indexOf']('http://') != -0x1 || mcd0j['indexOf']('https://') != -0x1 ? gxqpw['EnvConfig']['load']['call'](e8lbqu, mcd0j, n4t$o, to2n43, z1_hy6, fsr9i$) : vpgqxw['readFile'](on43$t, f$oi4, new c0aj(p5vxk, p5vxk['onReadNativeCallBack'], [f$oi4, mcd0j, n4t$o, to2n43, z1_hy6, fsr9i$, e8lbqu]), mcd0j);
        } else gxqpw['EnvConfig']['load']['call'](this, mcd0j, n4t$o, to2n43, z1_hy6, fsr9i$);
      }
    }, v5pxk['resMgrLoad'] = function (bgqxew, uqe8b, xbwg, qwgbe8, yl86, $ri9s, x5p7gv) {
      xbwg === void 0x0 && (xbwg = 0x0), qwgbe8 === void 0x0 && (qwgbe8 = ![]), yl86 === void 0x0 && (yl86 = ![]), $ri9s === void 0x0 && ($ri9s = 0x0), x5p7gv === void 0x0 && (x5p7gv = 0x3), bgqxew['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bgqxew), gxqpw['EnvConfig']['resMgrLoad'](bgqxew, (f$sio, gw8q, jmck0d) => {
        p5vxk['prototype']['resMgrLoadCallBack'](f$sio, gw8q, jmck0d, uqe8b);
      }, xbwg, qwgbe8, yl86, $ri9s, x5p7gv);
    }, v5pxk['resMgrLoadCallBack'] = function (dj0kc, _h2t1y, y6lhzu, gqwe8b) {
      console['log']('buff:::', dj0kc, y6lhzu, vpgqxw['fileNativeDir'] + '///' + vpgqxw['fileListName']), gqwe8b(dj0kc, _h2t1y, y6lhzu);
    }, v5pxk['clearRes'] = function (r$f9si, w8equ) {
      w8equ === void 0x0 && (w8equ = ![]);var _34tn2 = this;_34tn2['clearRes'](r$f9si, w8equ);var y16h_z = vpgqxw['getFileInfo'](r$f9si);if (y16h_z && (r$f9si['indexOf']('http://') != -0x1 || r$f9si['indexOf']('https://') != -0x1)) {
        var pwqvx = y16h_z['md5'],
            o3s4n$ = vpgqxw['getFileNativePath'](pwqvx);vpgqxw['remove'](o3s4n$);
      }
    }, p5vxk['onReadNativeCallBack'] = function (zube, dj0k, $oi9fs, t_n31, nt_43, ylu6z8, s9o$f, t24n3o, yh6) {
      t_n31 === void 0x0 && (t_n31 = !![]), ylu6z8 === void 0x0 && (ylu6z8 = ![]), t24n3o === void 0x0 && (t24n3o = 0x0);if (!t24n3o) {
        var lyz16;if ($oi9fs == 'json' || $oi9fs == 'atlas') lyz16 = gxqpw['getJson'](yh6['data']);else $oi9fs == 'xml' ? lyz16 = o3tn4['parseXMLFromString'](yh6['data']) : lyz16 = yh6['data'];s9o$f['onLoaded'](lyz16), !gxqpw['isZiYu'] && gxqpw['isPosMsgYu'] && $oi9fs != 'arraybuffer' && wx['postMessage']({ 'url': dj0k, 'data': lyz16, 'isLoad': !![] });
      } else t24n3o == 0x1 && gxqpw['EnvConfig']['load']['call'](s9o$f, dj0k, $oi9fs, t_n31, nt_43, ylu6z8);
    }, k05(p5vxk, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), p5vxk;
  }(),
      vpgqxw = function (_123) {
    function _hty() {
      _hty['__super']['call'](this);;
    }return wvpq(_hty, 'laya.wx.mini.MiniFileMgr', _123), _hty['isLoadFile'] = function (z6yh1_) {
      return _hty['_fileTypeArr']['indexOf'](z6yh1_) != -0x1 ? !![] : ![];
    }, _hty['getFileInfo'] = function (z6ulb8) {
      var ez8b = z6ulb8['split']('?')[0x0],
          lz6yh = _hty['filesListObj'][ez8b];if (lz6yh == null) return null;else return lz6yh;return null;
    }, _hty['onFileUpdate'] = function (c705mk, kp5xv) {
      var km05c7 = c705mk['split']('/'),
          wepxg = km05c7[km05c7['length'] - 0x1],
          fs4$o = _hty['getFileInfo'](kp5xv);if (fs4$o == null) _hty['onSaveFile'](kp5xv, wepxg);else {
        if (fs4$o['readyUrl'] != kp5xv) _hty['remove'](wepxg, kp5xv);
      }
    }, _hty['exits'] = function (_t243, beg8) {
      var t234o = _hty['getFileNativePath'](_t243);_hty['fs']['getFileInfo']({ 'filePath': t234o, 'success': function (uz6l8y) {
          beg8 != null && beg8['runWith']([0x0, uz6l8y]);
        }, 'fail': function (jmdck0) {
          beg8 != null && beg8['runWith']([0x1, jmdck0]);
        } });
    }, _hty['read'] = function (lzbu8e, v5gx, bl6u8, _n42t3) {
      v5gx === void 0x0 && (v5gx = 'ascill'), _n42t3 === void 0x0 && (_n42t3 = '');var tn_h21;_n42t3 != '' ? tn_h21 = _hty['getFileNativePath'](lzbu8e) : tn_h21 = lzbu8e, _hty['fs']['readFile']({ 'filePath': tn_h21, 'encoding': v5gx, 'success': function (pv5k) {
          bl6u8 != null && bl6u8['runWith']([0x0, pv5k]);
        }, 'fail': function (vpxwgq) {
          if (vpxwgq && _n42t3 != '') _hty['down'](_n42t3, v5gx, bl6u8, _n42t3);else bl6u8 != null && bl6u8['runWith']([0x1]);
        } });
    }, _hty['readNativeFile'] = function (kvx7p, ezub8l) {
      _hty['fs']['readFile']({ 'filePath': kvx7p, 'encoding': '', 'success': function (gpv57) {
          ezub8l != null && ezub8l['runWith']([0x0]);
        }, 'fail': function (fir9) {
          ezub8l != null && ezub8l['runWith']([0x1]);
        } });
    }, _hty['down'] = function (n2ht1, xqebwg, yt2_h, ze8ulb) {
      xqebwg === void 0x0 && (xqebwg = 'ascill'), ze8ulb === void 0x0 && (ze8ulb = '');var h1y6zl = _hty['getFileNativePath'](ze8ulb),
          lub8ez = _hty['wxdown']({ 'url': n2ht1, 'filePath': h1y6zl, 'success': function (s9$fo) {
          if (s9$fo['statusCode'] === 0xc8) _hty['readFile'](s9$fo['filePath'], xqebwg, yt2_h, ze8ulb);
        }, 'fail': function (hy_z1) {
          yt2_h != null && yt2_h['runWith']([0x1, hy_z1]);
        } });lub8ez['onProgressUpdate'](function (t243n_) {
        yt2_h != null && yt2_h['runWith']([0x2, t243n_['progress']]);
      });
    }, _hty['readFile'] = function (ewu8bq, equlb8, is$9o, o4$ns) {
      equlb8 === void 0x0 && (equlb8 = 'ascill'), o4$ns === void 0x0 && (o4$ns = ''), _hty['fs']['readFile']({ 'filePath': ewu8bq, 'encoding': equlb8, 'success': function (gxbe) {
          if (ewu8bq['indexOf']('http://') != -0x1 || ewu8bq['indexOf']('https://') != -0x1) _hty['onFileUpdate'](ewu8bq, o4$ns);is$9o != null && is$9o['runWith']([0x0, gxbe]);
        }, 'fail': function (l1y6z) {
          if (l1y6z) is$9o != null && is$9o['runWith']([0x1, l1y6z]);
        } });
    }, _hty['downImg'] = function (mc7dk0, $9fs, hyu6z) {
      hyu6z === void 0x0 && (hyu6z = '');var leu8q = _hty['wxdown']({ 'url': mc7dk0, 'success': function (n23to) {
          n23to['statusCode'] === 0xc8 && _hty['copyFile'](n23to['tempFilePath'], hyu6z, $9fs);
        }, 'fail': function (zeub8l) {
          $9fs != null && $9fs['runWith']([0x1, zeub8l]);
        } });
    }, _hty['copyFile'] = function (l68bu, hl1y, iso4f) {
      var kvp75x = l68bu['split']('/'),
          zy1h_6 = kvp75x[kvp75x['length'] - 0x1],
          h_216y = hl1y['split']('?')[0x0],
          f4osi = _hty['getFileInfo'](hl1y),
          ylz68u = _hty['getFileNativePath'](zy1h_6);_hty['fs']['copyFile']({ 'srcPath': l68bu, 'destPath': ylz68u, 'success': function (yh_16z) {
          if (!f4osi) _hty['onSaveFile'](hl1y, zy1h_6), iso4f != null && iso4f['runWith']([0x0]);else {
            if (f4osi['readyUrl'] != hl1y) _hty['remove'](zy1h_6, hl1y, iso4f);
          }
        }, 'fail': function (z8b6u) {
          iso4f != null && iso4f['runWith']([0x1, z8b6u]);
        } });
    }, _hty['getFileNativePath'] = function (wqg8e) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wqg8e;
    }, _hty['remove'] = function (ule8qb, _tn21h, _tn213) {
      _tn21h === void 0x0 && (_tn21h = '');var x5gvp7 = _hty['getFileInfo'](_tn21h),
          euzl = _hty['getFileNativePath'](x5gvp7['md5']);h612y_['loader']['clearRes'](x5gvp7['readyUrl']), _hty['fs']['unlink']({ 'filePath': euzl, 'success': function (xwqeb) {
          if (_tn21h != '') _hty['onSaveFile'](_tn21h, ule8qb);_tn213 != null && _tn213['runWith']([0x0]);
        }, 'fail': function (yh6zu) {} });
    }, _hty['onSaveFile'] = function (mc7d0, yzluh6) {
      var lub86z = mc7d0['split']('?')[0x0];_hty['filesListObj'][lub86z] = { 'md5': yzluh6, 'readyUrl': mc7d0 }, _hty['fs']['writeFile']({ 'filePath': _hty['fileNativeDir'] + '/' + _hty['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_hty['filesListObj']), 'success': function (fi9$rs) {
          console['log']('写入测试测试成功：', fi9$rs);
        }, 'fail': function (equbl) {
          console['log']('写入测试测试失败：', equbl);
        } });
    }, _hty['existDir'] = function (h21_6y, exgbq) {
      _hty['fs']['mkdir']({ 'dirPath': h21_6y, 'success': function ($nt3o) {
          exgbq != null && exgbq['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (t24) {
          if (t24['errMsg']['indexOf']('file already exists') != -0x1) _hty['readSync'](_hty['fileListName'], 'utf8', exgbq);else exgbq != null && exgbq['runWith']([0x1, t24]);
        } });
    }, _hty['readSync'] = function (zl6y8, b8uezl, dmk70c, a0cdjm) {
      b8uezl === void 0x0 && (b8uezl = 'ascill'), a0cdjm === void 0x0 && (a0cdjm = '');var c0dmkj = _hty['getFileNativePath'](zl6y8),
          xvw5g;try {
        xvw5g = _hty['fs']['readFileSync'](c0dmkj), dmk70c != null && dmk70c['runWith']([0x0, { 'data': xvw5g }]);
      } catch (p5v7k0) {
        dmk70c != null && dmk70c['runWith']([0x1]);
      }
    }, _hty['readCache'] = function () {}, _hty['writeCache'] = function (_21hy) {
      var z86yu = readyUrl['split']('?')[0x0];_hty['filesListObj'][z86yu] = { 'md5': md5Name, 'readyUrl': readyUrl }, _hty['fs']['writeFile']({ 'filePath': _hty['fileNativeDir'] + '/' + _hty['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_hty['filesListObj']), 'success': function (o2nt4) {}, 'fail': function (_2h1y6) {} });
    }, _hty['setNativeFileDir'] = function ($f9rsi) {
      _hty['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $f9rsi;
    }, _hty['filesListObj'] = {}, _hty['fileNativeDir'] = null, _hty['fileListName'] = 'layaairfiles.txt', _hty['ziyuFileData'] = {}, k05(_hty, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _hty;
  }(c570mk),
      px75vg = function (hy6u) {
    function yhlu() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], yhlu['__super']['call'](this), this['_sound'] = yhlu['_createSound']();
    }wvpq(yhlu, 'laya.wx.mini.MiniSound', hy6u);var sf$ri = yhlu['prototype'];return sf$ri['load'] = function (gxwpeq) {
      var wegpqx = this;gxwpeq = buezl['formatURL'](gxwpeq), this['url'] = gxwpeq;if (yhlu['_audioCache'][gxwpeq]) {
        this['event']('complete');return;
      }function bl8uze() {
        if (yhlu['_null'] != undefined) wegpqx['_sound']['onCanplay'](yhlu['_null']), wegpqx['_sound']['onError'](yhlu['_null']);else try {
          wegpqx['_sound']['onCanplay'](null), wegpqx['_sound']['onError'](null), yhlu['_null'] = null;
        } catch (o$4i3) {
          console['warn']('[wxmini] _clearSound:' + o$4i3), wegpqx['_sound']['onCanplay'](o$f9i), wegpqx['_sound']['onError'](o$f9i), yhlu['_null'] = o$f9i;
        }
      }function qbe() {
        bl8uze(), _4t2n['loaded'] = !![], _4t2n['event']('complete'), yhlu['_audioCache'][_4t2n['url']] = _4t2n;
      }function osn34$(ule8zb) {
        console['error']('errCode=' + ule8zb['errCode'] + '  errMsg=' + ule8zb['errMsg']), bl8uze(), _4t2n['event']('error');
      }function o$f9i() {}this['_sound']['onCanplay'](qbe), this['_sound']['onError'](osn34$), this['_sound']['src'] = gxwpeq;var _4t2n = this;
    }, sf$ri['play'] = function (qgxeb, t1h_y) {
      qgxeb === void 0x0 && (qgxeb = 0x0), t1h_y === void 0x0 && (t1h_y = 0x0);var wgvqx;if (this['url'] == bue8l['_tMusic']) {
        if (!yhlu['_musicAudio']) yhlu['_musicAudio'] = yhlu['_createSound']();wgvqx = yhlu['_musicAudio'];
      } else wgvqx = yhlu['_createSound']();wgvqx['src'] = this['url'];var cv570k = new tn43o2(wgvqx);return cv570k['url'] = this['url'], cv570k['loops'] = t1h_y, cv570k['startTime'] = qgxeb, cv570k['play'](), bue8l['addChannel'](cv570k), cv570k;
    }, sf$ri['dispose'] = function () {
      var tn24o = yhlu['_audioCache'][this['url']];tn24o && (tn24o['src'] = '', delete yhlu['_audioCache'][this['url']]);
    }, hy6_z1(0x0, sf$ri, 'duration', function () {
      return this['_sound']['duration'];
    }), yhlu['_createSound'] = function () {
      return yhlu['_id']++, gxqpw['window']['wx']['createInnerAudioContext']();
    }, yhlu['_musicAudio'] = null, yhlu['_id'] = 0x0, yhlu['_audioCache'] = {}, yhlu['_null'] = undefined, yhlu;
  }(c570mk),
      tn43o2 = function (h1yz_6) {
    function gvqwpx(wbxegq) {
      this['_audio'] = null, this['_onEnd'] = null, gvqwpx['__super']['call'](this), this['_audio'] = wbxegq, this['_onEnd'] = o3tn4['bind'](this['__onEnd'], this), wbxegq['onEnded'](this['_onEnd']);
    }wvpq(gvqwpx, 'laya.wx.mini.MiniSoundChannel', h1yz_6);var hl61yz = gvqwpx['prototype'];return hl61yz['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (h612y_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hl61yz['__onNull'] = function () {}, hl61yz['play'] = function () {
      this['isStopped'] = ![], bue8l['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, hl61yz['stop'] = function () {
      this['isStopped'] = !![], bue8l['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (gvqwpx['_null'] != undefined) this['_audio']['onEnded'](gvqwpx['_null']);else try {
        this['_audio']['onEnded'](null), gvqwpx['_null'] = null;
      } catch (lyhzu6) {
        console['warn']('[wxmini] stop:' + lyhzu6), this['_audio']['onEnded'](o3tn4['bind'](this['__onNull'], this)), gvqwpx['_null'] = o3tn4['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, hl61yz['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, hl61yz['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], bue8l['addChannel'](this), this['_audio']['play']();
    }, hy6_z1(0x0, hl61yz, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), hy6_z1(0x0, hl61yz, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), hy6_z1(0x0, hl61yz, 'volume', function () {
      return 0x1;
    }, function (ly8uz6) {}), gvqwpx['_null'] = undefined, gvqwpx;
  }(c0m7kd);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var is$4f in Laya) {
    var adm0c = Laya[is$4f];adm0c && adm0c['__isclass'] && (exports[is$4f] = adm0c);
  }
});