var m = wx.$g;
(function (window, document, kx1why) {
  var jr$m6 = kx1why['un'],
      kwy1h = kx1why['uns'],
      odt4 = kx1why['static'],
      b_p50 = kx1why['class'],
      o432dz = kx1why['getset'],
      o_4t3f = kx1why['__newvec'],
      qgsc8 = laya['utils']['Browser'],
      rj2dz6 = laya['events']['Event'],
      lq8 = laya['events']['EventDispatcher'],
      khyx = laya['resource']['HTMLImage'],
      d3z = laya['utils']['Handler'],
      bfp0_t = laya['display']['Input'],
      $6jr2z = laya['net']['Loader'],
      rj26 = laya['maths']['Matrix'],
      k1ye = laya['renders']['Render'],
      qwye7v = laya['utils']['RunDriver'],
      b05_i = laya['media']['Sound'],
      g8q7 = laya['media']['SoundChannel'],
      g7qvey = laya['media']['SoundManager'],
      zo63 = laya['display']['Stage'],
      weqyv7 = laya['net']['URL'],
      c9l8g = laya['utils']['Utils'],
      e1wvky = function () {
    function z$62() {}return b_p50(z$62, 'laya.wx.mini.MiniAdpter'), z$62['getJson'] = function (z6drj2) {
      return JSON['parse'](z6drj2);
    }, z$62['init'] = function (wqyev, r$6j2u) {
      wqyev === void 0x0 && (wqyev = ![]), r$6j2u === void 0x0 && (r$6j2u = ![]);if (z$62['_inited']) return;z$62['window'] = window;if (z$62['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;z$62['_inited'] = !![], z$62['isZiYu'] = r$6j2u, z$62['isPosMsgYu'] = wqyev, z$62['EnvConfig'] = {}, !z$62['isZiYu'] && (vc7qg['setNativeFileDir']('/layaairGame'), vc7qg['existDir'](vc7qg['fileNativeDir'], d3z['create'](z$62, z$62['onMkdirCallBack']))), z$62['window']['focus'] = function () {}, kx1why['getUrlPath'] = function () {}, z$62['window']['logtime'] = function (t0p_f4) {}, z$62['window']['alertTimeLog'] = function (hk1aix) {}, z$62['window']['resetShareInfo'] = function () {}, z$62['window']['CanvasRenderingContext2D'] = function () {}, z$62['window']['CanvasRenderingContext2D']['prototype'] = z$62['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], z$62['window']['document']['body']['appendChild'] = function () {}, z$62['EnvConfig']['pixelRatioInt'] = 0x0, qwye7v['getPixelRatio'] = z$62['pixelRatio'], z$62['_preCreateElement'] = qgsc8['createElement'], qgsc8['createElement'] = z$62['createElement'], qwye7v['createShaderCondition'] = z$62['createShaderCondition'], c9l8g['parseXMLFromString'] = z$62['parseXMLFromString'], bfp0_t['_createInputElement'] = zd3o4['_createInputElement'], z$62['EnvConfig']['load'] = $6jr2z['prototype']['load'], $6jr2z['prototype']['load'] = j2$ru6['prototype']['load'], z$62['isZiYu'] && wqyev && wx['onMessage'](function (q7y) {
        q7y['isLoad'] && (vc7qg['ziyuFileData'][q7y['url']] = q7y['data']);
      });
    }, z$62['onMkdirCallBack'] = function (z423d, u$rmj6) {
      if (!z423d) vc7qg['filesListObj'] = JSON['parse'](u$rmj6['data']);
    }, z$62['pixelRatio'] = function () {
      if (!z$62['EnvConfig']['pixelRatioInt']) try {
        var f0t_pb = wx['getSystemInfoSync']();return z$62['EnvConfig']['pixelRatioInt'] = f0t_pb['pixelRatio'], f0t_pb = f0t_pb, f0t_pb['pixelRatio'];
      } catch (t3dzo4) {}return z$62['EnvConfig']['pixelRatioInt'];
    }, z$62['createElement'] = function (pft40_) {
      if (pft40_ == 'canvas') {
        var g7ceqv;return z$62['idx'] == 0x1 ? z$62['isZiYu'] ? (g7ceqv = sharedCanvas, g7ceqv['style'] = {}) : g7ceqv = window['canvas'] : g7ceqv = window['wx']['createCanvas'](), z$62['idx']++, g7ceqv;
      } else {
        if (pft40_ == 'textarea' || pft40_ == 'input') return z$62['onCreateInput'](pft40_);else {
          if (pft40_ == 'div') {
            var yvg7eq = z$62['_preCreateElement'](pft40_);return yvg7eq['contains'] = function (hxak) {
              return null;
            }, yvg7eq['removeChild'] = function (z3ot4d) {}, yvg7eq;
          } else return z$62['_preCreateElement'](pft40_);
        }
      }
    }, z$62['onCreateInput'] = function (ptf) {
      var g8scl9 = z$62['_preCreateElement'](ptf);return g8scl9['focus'] = zd3o4['wxinputFocus'], g8scl9['blur'] = zd3o4['wxinputblur'], g8scl9['style'] = {}, g8scl9['value'] = 0x0, g8scl9['parentElement'] = {}, g8scl9['placeholder'] = {}, g8scl9['type'] = {}, g8scl9['setColor'] = function (scqlg) {}, g8scl9['setType'] = function (o6d23z) {}, g8scl9['setFontFace'] = function (or) {}, g8scl9['addEventListener'] = function (qvg7s) {}, g8scl9['contains'] = function (v7qc) {
        return null;
      }, g8scl9['removeChild'] = function (_5p0ib) {}, g8scl9;
    }, z$62['createShaderCondition'] = function (bi5pa) {
      var bi = this,
          kai1h = function () {
        var evy1wk = bi5pa;return bi[bi5pa['replace']('this.', '')];
      };return kai1h;
    }, z$62['EnvConfig'] = null, z$62['window'] = null, z$62['_preCreateElement'] = null, z$62['_inited'] = ![], z$62['wxRequest'] = null, z$62['systemInfo'] = null, z$62['version'] = '0.0.1', z$62['isZiYu'] = ![], z$62['isPosMsgYu'] = ![], z$62['parseXMLFromString'] = function (qwvye7) {
      var _34f, i1kh;qwvye7 = qwvye7['replace'](/>\s+</g, '><');try {
        _34f = new window['Parser']['DOMParser']()['parseFromString'](qwvye7, 'text/xml');
      } catch (d3otf) {
        throw '需要引入xml解析库文件';
      }return _34f;
    }, z$62['idx'] = 0x1, z$62;
  }(),
      j$6u2r = function () {
    function rjd2() {}b_p50(rjd2, 'laya.wx.mini.MiniImage');var k1xhi = rjd2['prototype'];return k1xhi['_loadImage'] = function (ot4df3) {
      var lsqg = this,
          kwa1x = ![];ot4df3['indexOf']('layaNativeDir/') == -0x1 && (kwa1x = !![], ot4df3 = weqyv7['formatURL'](ot4df3));if (!vc7qg['getFileInfo'](ot4df3)) {
        if (ot4df3['indexOf']('http://') != -0x1 || ot4df3['indexOf']('https://') != -0x1) vc7qg['downImg'](ot4df3, new d3z(rjd2, rjd2['onDownImgCallBack'], [ot4df3, lsqg]), ot4df3);else rjd2['onCreateImage'](ot4df3, lsqg, !![]);
      } else rjd2['onCreateImage'](ot4df3, lsqg, !kwa1x);
    }, rjd2['onDownImgCallBack'] = function (p_5b0f, wey7vq, p_b0ft) {
      if (!p_b0ft) rjd2['onCreateImage'](p_5b0f, wey7vq);else wey7vq['onError'](null);
    }, rjd2['onCreateImage'] = function (f05p_, t043f, z6o23d) {
      z6o23d === void 0x0 && (z6o23d = ![]);var ahkx;if (!z6o23d) {
        var i1hxak = vc7qg['getFileInfo'](f05p_),
            x15h = i1hxak['md5'];ahkx = vc7qg['getFileNativePath'](x15h);
      } else ahkx = f05p_;if (t043f['imgCache'] == null) t043f['imgCache'] = {};var yveqg;function bft0p_() {
        yveqg['onload'] = null, yveqg['onerror'] = null, delete t043f['imgCache'][f05p_];
      };var p_40tf = function () {
        bft0p_(), t043f['onLoaded'](yveqg);
      },
          $u6rj2 = function () {
        bft0p_(), t043f['event']('error', 'Load image failed');
      };t043f['_type'] == 'nativeimage' ? (yveqg = new qgsc8['window']['Image'](), yveqg['crossOrigin'] = '', yveqg['onload'] = p_40tf, yveqg['onerror'] = $u6rj2, yveqg['src'] = ahkx, t043f['imgCache'][f05p_] = yveqg) : new khyx['create'](ahkx, { 'onload': p_40tf, 'onerror': $u6rj2, 'onCreate': function (yqvw7e) {
          yveqg = yqvw7e, t043f['imgCache'][f05p_] = yqvw7e;
        } });
    }, rjd2;
  }(),
      zd3o4 = function () {
    function zo6() {}return b_p50(zo6, 'laya.wx.mini.MiniInput'), zo6['_createInputElement'] = function () {
      bfp0_t['_initInput'](bfp0_t['area'] = qgsc8['createElement']('textarea')), bfp0_t['_initInput'](bfp0_t['input'] = qgsc8['createElement']('input')), bfp0_t['inputContainer'] = qgsc8['createElement']('div'), bfp0_t['inputContainer']['style']['position'] = 'absolute', bfp0_t['inputContainer']['style']['zIndex'] = 0x186a0, qgsc8['container']['appendChild'](bfp0_t['inputContainer']), bfp0_t['inputContainer']['setPos'] = function (hxaw1, v7eqyw) {
        bfp0_t['inputContainer']['style']['left'] = hxaw1 + 'px', bfp0_t['inputContainer']['style']['top'] = v7eqyw + 'px';
      }, kx1why['stage']['on']('resize', null, zo6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (c7vsg) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), g7qvey['_soundClass'] = wkah1x, g7qvey['_musicClass'] = wkah1x;
    }, zo6['_onStageResize'] = function () {
      var mju$6 = kx1why['stage']['_canvasTransform']['identity']();mju$6['scale'](qgsc8['width'] / k1ye['canvas']['width'] / qwye7v['getPixelRatio'](), qgsc8['height'] / k1ye['canvas']['height'] / qwye7v['getPixelRatio']());
    }, zo6['wxinputFocus'] = function (pa5bi) {
      var csl8g = bfp0_t['inputElement']['target'];if (csl8g && !csl8g['editable']) return;e1wvky['window']['wx']['offKeyboardConfirm'](), e1wvky['window']['wx']['offKeyboardInput'](), e1wvky['window']['wx']['showKeyboard']({ 'defaultValue': csl8g['text'], 'maxLength': csl8g['maxChars'], 'multiple': csl8g['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ju6$mr) {}, 'fail': function (a1xih5) {} }), e1wvky['window']['wx']['onKeyboardConfirm'](function (fb5p0) {
        var jd6z2 = fb5p0 ? fb5p0['value'] : '';csl8g['text'] = jd6z2, csl8g['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), e1wvky['window']['wx']['onKeyboardInput'](function (ywqve7) {
        var lgscq = ywqve7 ? ywqve7['value'] : '';if (!csl8g['multiline']) {
          if (lgscq['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }csl8g['text'] = lgscq, csl8g['event']('input');
      });
    }, zo6['inputEnter'] = function () {
      bfp0_t['inputElement']['target']['focus'] = ![];
    }, zo6['wxinputblur'] = function () {
      zo6['hideKeyboard']();
    }, zo6['hideKeyboard'] = function () {
      e1wvky['window']['wx']['offKeyboardConfirm'](), e1wvky['window']['wx']['offKeyboardInput'](), e1wvky['window']['wx']['hideKeyboard']({ 'success': function (piba50) {
          console['log']('隐藏键盘');
        }, 'fail': function (_fo3) {
          console['log']('隐藏键盘出错:' + (_fo3 ? _fo3['errMsg'] : ''));
        } });
    }, zo6;
  }(),
      j2$ru6 = function () {
    function egyqv7() {}b_p50(egyqv7, 'laya.wx.mini.MiniLoader');var pib0a = egyqv7['prototype'];return pib0a['load'] = function (x1iak, eykw, ah1ix5, eqgc7v, $z2r) {
      ah1ix5 === void 0x0 && (ah1ix5 = !![]), $z2r === void 0x0 && ($z2r = ![]);var _0tbfp = this;_0tbfp['_url'] = x1iak;if (x1iak['indexOf']('data:image') === 0x0) _0tbfp['_type'] = eykw = 'image';else _0tbfp['_type'] = eykw || (eykw = _0tbfp['getTypeFromUrl'](x1iak));_0tbfp['_cache'] = ah1ix5, _0tbfp['_data'] = null;var $j6ru2 = 'ascii';if (x1iak['indexOf']('.fnt') != -0x1) $j6ru2 = 'utf8';else eykw == 'arraybuffer' && ($j6ru2 = '');;var cve7q = c9l8g['getFileExtension'](x1iak);if (egyqv7['_fileTypeArr']['indexOf'](cve7q) != -0x1) e1wvky['EnvConfig']['load']['call'](this, x1iak, eykw, ah1ix5, eqgc7v, $z2r);else {
        if (!vc7qg['getFileInfo'](x1iak)) {
          if (x1iak['indexOf']('layaNativeDir/') != -0x1) {
            if (e1wvky['isZiYu']) {
              var u62$jr = vc7qg['ziyuFileData'][x1iak];_0tbfp['onLoaded'](u62$jr);return;
            } else {
              cosnole['log']('read read'), vc7qg['read'](x1iak, $j6ru2, new d3z(egyqv7, egyqv7['onReadNativeCallBack'], [$j6ru2, x1iak, eykw, ah1ix5, eqgc7v, $z2r, _0tbfp]));return;
            }
          }if (weqyv7['rootPath'] == '') var s9lg = x1iak;else s9lg = x1iak['split'](weqyv7['rootPath'])[0x0];x1iak['indexOf']('http://') != -0x1 || x1iak['indexOf']('https://') != -0x1 ? e1wvky['EnvConfig']['load']['call'](_0tbfp, x1iak, eykw, ah1ix5, eqgc7v, $z2r) : vc7qg['readFile'](s9lg, $j6ru2, new d3z(egyqv7, egyqv7['onReadNativeCallBack'], [$j6ru2, x1iak, eykw, ah1ix5, eqgc7v, $z2r, _0tbfp]), x1iak);
        } else e1wvky['EnvConfig']['load']['call'](this, x1iak, eykw, ah1ix5, eqgc7v, $z2r);
      }
    }, pib0a['resMgrLoad'] = function (d3o4z2, cv7ge, ywve7k, btp0_, wyqe, hyx1k, eqvgy7) {
      ywve7k === void 0x0 && (ywve7k = 0x0), btp0_ === void 0x0 && (btp0_ = ![]), wyqe === void 0x0 && (wyqe = ![]), hyx1k === void 0x0 && (hyx1k = 0x0), eqvgy7 === void 0x0 && (eqvgy7 = 0x3), d3o4z2['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', d3o4z2), e1wvky['EnvConfig']['resMgrLoad'](d3o4z2, (i5bxh, uj$mr, vgeyq7) => {
        egyqv7['prototype']['resMgrLoadCallBack'](i5bxh, uj$mr, vgeyq7, cv7ge);
      }, ywve7k, btp0_, wyqe, hyx1k, eqvgy7);
    }, pib0a['resMgrLoadCallBack'] = function (gv7yqe, bp_0i, o_t3f, vkyew) {
      console['log']('buff:::', gv7yqe, o_t3f, vc7qg['fileNativeDir'] + '///' + vc7qg['fileListName']), vkyew(gv7yqe, bp_0i, o_t3f);
    }, pib0a['clearRes'] = function (b50pia, g8s9lc) {
      g8s9lc === void 0x0 && (g8s9lc = ![]);var b0ftp = this;b0ftp['clearRes'](b50pia, g8s9lc);var odz6 = vc7qg['getFileInfo'](b50pia);if (odz6 && (b50pia['indexOf']('http://') != -0x1 || b50pia['indexOf']('https://') != -0x1)) {
        var pf0_5b = odz6['md5'],
            cqg7sv = vc7qg['getFileNativePath'](pf0_5b);vc7qg['remove'](cqg7sv);
      }
    }, egyqv7['onReadNativeCallBack'] = function (z43od, csg7v, we7, zro2d, cgs9l8, pba50, x5ipa, dtz3, ft4_p) {
      zro2d === void 0x0 && (zro2d = !![]), pba50 === void 0x0 && (pba50 = ![]), dtz3 === void 0x0 && (dtz3 = 0x0);if (!dtz3) {
        var y1vwk;if (we7 == 'json' || we7 == 'atlas') y1vwk = e1wvky['getJson'](ft4_p['data']);else we7 == 'xml' ? y1vwk = c9l8g['parseXMLFromString'](ft4_p['data']) : y1vwk = ft4_p['data'];x5ipa['onLoaded'](y1vwk), !e1wvky['isZiYu'] && e1wvky['isPosMsgYu'] && we7 != 'arraybuffer' && wx['postMessage']({ 'url': csg7v, 'data': y1vwk, 'isLoad': !![] });
      } else dtz3 == 0x1 && e1wvky['EnvConfig']['load']['call'](x5ipa, csg7v, we7, zro2d, cgs9l8, pba50);
    }, odt4(egyqv7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), egyqv7;
  }(),
      vc7qg = function (f0p4t) {
    function tf43_0() {
      tf43_0['__super']['call'](this);;
    }return b_p50(tf43_0, 'laya.wx.mini.MiniFileMgr', f0p4t), tf43_0['isLoadFile'] = function (gcs7q8) {
      return tf43_0['_fileTypeArr']['indexOf'](gcs7q8) != -0x1 ? !![] : ![];
    }, tf43_0['getFileInfo'] = function (v7yew) {
      var u2r6j$ = v7yew['split']('?')[0x0],
          h1x = tf43_0['filesListObj'][u2r6j$];if (h1x == null) return null;else return h1x;return null;
    }, tf43_0['onFileUpdate'] = function (yekwv7, aixb5h) {
      var csqg7 = yekwv7['split']('/'),
          gc7q = csqg7[csqg7['length'] - 0x1],
          z$j62 = tf43_0['getFileInfo'](aixb5h);if (z$j62 == null) tf43_0['onSaveFile'](aixb5h, gc7q);else {
        if (z$j62['readyUrl'] != aixb5h) tf43_0['remove'](gc7q, aixb5h);
      }
    }, tf43_0['exits'] = function (zrj6, kxahw1) {
      var p0tf_ = tf43_0['getFileNativePath'](zrj6);tf43_0['fs']['getFileInfo']({ 'filePath': p0tf_, 'success': function (sg98l) {
          kxahw1 != null && kxahw1['runWith']([0x0, sg98l]);
        }, 'fail': function (od42z3) {
          kxahw1 != null && kxahw1['runWith']([0x1, od42z3]);
        } });
    }, tf43_0['read'] = function (t4_p0f, xi5pa, _p0ib, ge7vc) {
      xi5pa === void 0x0 && (xi5pa = 'ascill'), ge7vc === void 0x0 && (ge7vc = '');var bhx5;ge7vc != '' ? bhx5 = tf43_0['getFileNativePath'](t4_p0f) : bhx5 = t4_p0f, tf43_0['fs']['readFile']({ 'filePath': bhx5, 'encoding': xi5pa, 'success': function (kaw1h) {
          _p0ib != null && _p0ib['runWith']([0x0, kaw1h]);
        }, 'fail': function (sqg8cl) {
          if (sqg8cl && ge7vc != '') tf43_0['down'](ge7vc, xi5pa, _p0ib, ge7vc);else _p0ib != null && _p0ib['runWith']([0x1]);
        } });
    }, tf43_0['readNativeFile'] = function (aihxk, o2z6) {
      tf43_0['fs']['readFile']({ 'filePath': aihxk, 'encoding': '', 'success': function (vkew1) {
          o2z6 != null && o2z6['runWith']([0x0]);
        }, 'fail': function (of4td) {
          o2z6 != null && o2z6['runWith']([0x1]);
        } });
    }, tf43_0['down'] = function (ehkw1y, bxpia5, $jrm6u, ur6j2) {
      bxpia5 === void 0x0 && (bxpia5 = 'ascill'), ur6j2 === void 0x0 && (ur6j2 = '');var hx1kwa = tf43_0['getFileNativePath'](ur6j2),
          um6$j = tf43_0['wxdown']({ 'url': ehkw1y, 'filePath': hx1kwa, 'success': function (f3t4_0) {
          if (f3t4_0['statusCode'] === 0xc8) tf43_0['readFile'](f3t4_0['filePath'], bxpia5, $jrm6u, ur6j2);
        }, 'fail': function (s8cq) {
          $jrm6u != null && $jrm6u['runWith']([0x1, s8cq]);
        } });um6$j['onProgressUpdate'](function (q8s7g) {
        $jrm6u != null && $jrm6u['runWith']([0x2, q8s7g['progress']]);
      });
    }, tf43_0['readFile'] = function (wyk1e, ah1i, _t4fp0, ab05ip) {
      ah1i === void 0x0 && (ah1i = 'ascill'), ab05ip === void 0x0 && (ab05ip = ''), tf43_0['fs']['readFile']({ 'filePath': wyk1e, 'encoding': ah1i, 'success': function (v7gcsq) {
          if (wyk1e['indexOf']('http://') != -0x1 || wyk1e['indexOf']('https://') != -0x1) tf43_0['onFileUpdate'](wyk1e, ab05ip);_t4fp0 != null && _t4fp0['runWith']([0x0, v7gcsq]);
        }, 'fail': function (gs7cvq) {
          if (gs7cvq) _t4fp0 != null && _t4fp0['runWith']([0x1, gs7cvq]);
        } });
    }, tf43_0['downImg'] = function (tp_bf0, v7wyk, _f40tp) {
      _f40tp === void 0x0 && (_f40tp = '');var vek7y = tf43_0['wxdown']({ 'url': tp_bf0, 'success': function (o6d32z) {
          o6d32z['statusCode'] === 0xc8 && tf43_0['copyFile'](o6d32z['tempFilePath'], _f40tp, v7wyk);
        }, 'fail': function (xabi5h) {
          v7wyk != null && v7wyk['runWith']([0x1, xabi5h]);
        } });
    }, tf43_0['copyFile'] = function (gecq, eygv7, v7g) {
      var l8gqsc = gecq['split']('/'),
          xhia15 = l8gqsc[l8gqsc['length'] - 0x1],
          e7wvyq = eygv7['split']('?')[0x0],
          $ujm6 = tf43_0['getFileInfo'](eygv7),
          ykh1xw = tf43_0['getFileNativePath'](xhia15);tf43_0['fs']['copyFile']({ 'srcPath': gecq, 'destPath': ykh1xw, 'success': function (hib5ax) {
          if (!$ujm6) tf43_0['onSaveFile'](eygv7, xhia15), v7g != null && v7g['runWith']([0x0]);else {
            if ($ujm6['readyUrl'] != eygv7) tf43_0['remove'](xhia15, eygv7, v7g);
          }
        }, 'fail': function (p0i5ab) {
          v7g != null && v7g['runWith']([0x1, p0i5ab]);
        } });
    }, tf43_0['getFileNativePath'] = function (r$u26) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + r$u26;
    }, tf43_0['remove'] = function (vegcq, ywvek7, d6j) {
      ywvek7 === void 0x0 && (ywvek7 = '');var yqwv7 = tf43_0['getFileInfo'](ywvek7),
          _ft043 = tf43_0['getFileNativePath'](yqwv7['md5']);kx1why['loader']['clearRes'](yqwv7['readyUrl']), tf43_0['fs']['unlink']({ 'filePath': _ft043, 'success': function (lsc9g) {
          if (ywvek7 != '') tf43_0['onSaveFile'](ywvek7, vegcq);d6j != null && d6j['runWith']([0x0]);
        }, 'fail': function (yew7vk) {} });
    }, tf43_0['onSaveFile'] = function (h1yxwk, f_tpb0) {
      var ahk = h1yxwk['split']('?')[0x0];tf43_0['filesListObj'][ahk] = { 'md5': f_tpb0, 'readyUrl': h1yxwk }, tf43_0['fs']['writeFile']({ 'filePath': tf43_0['fileNativeDir'] + '/' + tf43_0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tf43_0['filesListObj']), 'success': function (c8sl9g) {
          console['log']('写入测试测试成功：', c8sl9g);
        }, 'fail': function (vyqe7w) {
          console['log']('写入测试测试失败：', vyqe7w);
        } });
    }, tf43_0['existDir'] = function (d6oz3, fp04_t) {
      tf43_0['fs']['mkdir']({ 'dirPath': d6oz3, 'success': function (z243o) {
          fp04_t != null && fp04_t['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (r6umj$) {
          if (r6umj$['errMsg']['indexOf']('file already exists') != -0x1) tf43_0['readSync'](tf43_0['fileListName'], 'utf8', fp04_t);else fp04_t != null && fp04_t['runWith']([0x1, r6umj$]);
        } });
    }, tf43_0['readSync'] = function (z2do63, z6rj2$, y1ekw, mu$jr) {
      z6rj2$ === void 0x0 && (z6rj2$ = 'ascill'), mu$jr === void 0x0 && (mu$jr = '');var f430_ = tf43_0['getFileNativePath'](z2do63),
          yv7ek;try {
        yv7ek = tf43_0['fs']['readFileSync'](f430_), y1ekw != null && y1ekw['runWith']([0x0, { 'data': yv7ek }]);
      } catch (apbx5i) {
        y1ekw != null && y1ekw['runWith']([0x1]);
      }
    }, tf43_0['readCache'] = function () {}, tf43_0['writeCache'] = function (odft43) {
      var wev7yq = readyUrl['split']('?')[0x0];tf43_0['filesListObj'][wev7yq] = { 'md5': md5Name, 'readyUrl': readyUrl }, tf43_0['fs']['writeFile']({ 'filePath': tf43_0['fileNativeDir'] + '/' + tf43_0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tf43_0['filesListObj']), 'success': function (r6$) {}, 'fail': function (f_bt0) {} });
    }, tf43_0['setNativeFileDir'] = function (gvc7) {
      tf43_0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gvc7;
    }, tf43_0['filesListObj'] = {}, tf43_0['fileNativeDir'] = null, tf43_0['fileListName'] = 'layaairfiles.txt', tf43_0['ziyuFileData'] = {}, odt4(tf43_0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), tf43_0;
  }(lq8),
      wkah1x = function (ve7qy) {
    function fp4() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], fp4['__super']['call'](this), this['_sound'] = fp4['_createSound']();
    }b_p50(fp4, 'laya.wx.mini.MiniSound', ve7qy);var qvgcs7 = fp4['prototype'];return qvgcs7['load'] = function (csgq) {
      var kw7ev = this;csgq = weqyv7['formatURL'](csgq), this['url'] = csgq;if (fp4['_audioCache'][csgq]) {
        this['event']('complete');return;
      }function j6u2() {
        if (fp4['_null'] != undefined) kw7ev['_sound']['onCanplay'](fp4['_null']), kw7ev['_sound']['onError'](fp4['_null']);else try {
          kw7ev['_sound']['onCanplay'](null), kw7ev['_sound']['onError'](null), fp4['_null'] = null;
        } catch (q7wevy) {
          console['warn']('[wxmini] _clearSound:' + q7wevy), kw7ev['_sound']['onCanplay'](_ptfb0), kw7ev['_sound']['onError'](_ptfb0), fp4['_null'] = _ptfb0;
        }
      }function kh1e() {
        j6u2(), _p04ft['loaded'] = !![], _p04ft['event']('complete'), fp4['_audioCache'][_p04ft['url']] = _p04ft;
      }function kw1xh(sqgl8) {
        console['error']('errCode=' + sqgl8['errCode'] + '  errMsg=' + sqgl8['errMsg']), j6u2(), _p04ft['event']('error');
      }function _ptfb0() {}this['_sound']['onCanplay'](kh1e), this['_sound']['onError'](kw1xh), this['_sound']['src'] = csgq;var _p04ft = this;
    }, qvgcs7['play'] = function (yq7wve, $umj) {
      yq7wve === void 0x0 && (yq7wve = 0x0), $umj === void 0x0 && ($umj = 0x0);var od6z;if (this['url'] == g7qvey['_tMusic']) {
        if (!fp4['_musicAudio']) fp4['_musicAudio'] = fp4['_createSound']();od6z = fp4['_musicAudio'];
      } else od6z = fp4['_createSound']();od6z['src'] = this['url'];var h1x5a = new wa1x(od6z);return h1x5a['url'] = this['url'], h1x5a['loops'] = $umj, h1x5a['startTime'] = yq7wve, h1x5a['play'](), g7qvey['addChannel'](h1x5a), h1x5a;
    }, qvgcs7['dispose'] = function () {
      var ju26r = fp4['_audioCache'][this['url']];ju26r && (ju26r['src'] = '', delete fp4['_audioCache'][this['url']]);
    }, o432dz(0x0, qvgcs7, 'duration', function () {
      return this['_sound']['duration'];
    }), fp4['_createSound'] = function () {
      return fp4['_id']++, e1wvky['window']['wx']['createInnerAudioContext']();
    }, fp4['_musicAudio'] = null, fp4['_id'] = 0x0, fp4['_audioCache'] = {}, fp4['_null'] = undefined, fp4;
  }(lq8),
      wa1x = function (j$z62) {
    function k1ixh(hxykw1) {
      this['_audio'] = null, this['_onEnd'] = null, k1ixh['__super']['call'](this), this['_audio'] = hxykw1, this['_onEnd'] = c9l8g['bind'](this['__onEnd'], this), hxykw1['onEnded'](this['_onEnd']);
    }b_p50(k1ixh, 'laya.wx.mini.MiniSoundChannel', j$z62);var g89csl = k1ixh['prototype'];return g89csl['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (kx1why['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, g89csl['__onNull'] = function () {}, g89csl['play'] = function () {
      this['isStopped'] = ![], g7qvey['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, g89csl['stop'] = function () {
      this['isStopped'] = !![], g7qvey['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (k1ixh['_null'] != undefined) this['_audio']['onEnded'](k1ixh['_null']);else try {
        this['_audio']['onEnded'](null), k1ixh['_null'] = null;
      } catch (scq8lg) {
        console['warn']('[wxmini] stop:' + scq8lg), this['_audio']['onEnded'](c9l8g['bind'](this['__onNull'], this)), k1ixh['_null'] = c9l8g['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, g89csl['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, g89csl['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], g7qvey['addChannel'](this), this['_audio']['play']();
    }, o432dz(0x0, g89csl, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), o432dz(0x0, g89csl, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), o432dz(0x0, g89csl, 'volume', function () {
      return 0x1;
    }, function (q7ye) {}), k1ixh['_null'] = undefined, k1ixh;
  }(g8q7);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var abpi in Laya) {
    var zdt43o = Laya[abpi];zdt43o && zdt43o['__isclass'] && (exports[abpi] = zdt43o);
  }
});