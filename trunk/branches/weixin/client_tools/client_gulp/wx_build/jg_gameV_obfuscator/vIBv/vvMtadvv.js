var Q = wx.$v;
(function (window, document, c70km) {
  var l6buz8 = c70km['un'],
      fr9$i = c70km['uns'],
      x5vpgw = c70km['static'],
      ubw8eq = c70km['class'],
      b86zl = c70km['getset'],
      i9s$fr = c70km['__newvec'],
      _hty2 = laya['utils']['Browser'],
      dm07c = laya['events']['Event'],
      fso = laya['events']['EventDispatcher'],
      i4sof = laya['resource']['HTMLImage'],
      jm0kc = laya['utils']['Handler'],
      vp75g = laya['display']['Input'],
      q8uble = laya['net']['Loader'],
      e8bqwg = laya['maths']['Matrix'],
      yz16l = laya['renders']['Render'],
      h6zy = laya['utils']['RunDriver'],
      lu8y = laya['media']['Sound'],
      xvg5wp = laya['media']['SoundChannel'],
      h_1y2t = laya['media']['SoundManager'],
      kd0cjm = laya['display']['Stage'],
      ebuw = laya['net']['URL'],
      q8elu = laya['utils']['Utils'],
      m0dac = function () {
    function cvk() {}return ubw8eq(cvk, 'laya.wx.mini.MiniAdpter'), cvk['getJson'] = function (gxvp5w) {
      return JSON['parse'](gxvp5w);
    }, cvk['init'] = function (s34io$, qbexw) {
      s34io$ === void 0x0 && (s34io$ = ![]), qbexw === void 0x0 && (qbexw = ![]);if (cvk['_inited']) return;cvk['window'] = window;if (cvk['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;cvk['_inited'] = !![], cvk['isZiYu'] = qbexw, cvk['isPosMsgYu'] = s34io$, cvk['EnvConfig'] = {}, !cvk['isZiYu'] && (lezbu8['setNativeFileDir']('/layaairGame'), lezbu8['existDir'](lezbu8['fileNativeDir'], jm0kc['create'](cvk, cvk['onMkdirCallBack']))), cvk['window']['focus'] = function () {}, c70km['getUrlPath'] = function () {}, cvk['window']['logtime'] = function (nt32_) {}, cvk['window']['alertTimeLog'] = function (y2_h6) {}, cvk['window']['resetShareInfo'] = function () {}, cvk['window']['CanvasRenderingContext2D'] = function () {}, cvk['window']['CanvasRenderingContext2D']['prototype'] = cvk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], cvk['window']['document']['body']['appendChild'] = function () {}, cvk['EnvConfig']['pixelRatioInt'] = 0x0, h6zy['getPixelRatio'] = cvk['pixelRatio'], cvk['_preCreateElement'] = _hty2['createElement'], _hty2['createElement'] = cvk['createElement'], h6zy['createShaderCondition'] = cvk['createShaderCondition'], q8elu['parseXMLFromString'] = cvk['parseXMLFromString'], vp75g['_createInputElement'] = zy_h6['_createInputElement'], cvk['EnvConfig']['load'] = q8uble['prototype']['load'], q8uble['prototype']['load'] = pvk0['prototype']['load'], cvk['isZiYu'] && s34io$ && wx['onMessage'](function (w5pgvx) {
        w5pgvx['isLoad'] && (lezbu8['ziyuFileData'][w5pgvx['url']] = w5pgvx['data']);
      });
    }, cvk['onMkdirCallBack'] = function (ewg8, xwpqg) {
      if (!ewg8) lezbu8['filesListObj'] = JSON['parse'](xwpqg['data']);
    }, cvk['pixelRatio'] = function () {
      if (!cvk['EnvConfig']['pixelRatioInt']) try {
        var g8qwe = wx['getSystemInfoSync']();return cvk['EnvConfig']['pixelRatioInt'] = g8qwe['pixelRatio'], g8qwe = g8qwe, g8qwe['pixelRatio'];
      } catch (gwqbe) {}return cvk['EnvConfig']['pixelRatioInt'];
    }, cvk['createElement'] = function (kd7c0) {
      if (kd7c0 == 'canvas') {
        var c75k0m;return cvk['idx'] == 0x1 ? cvk['isZiYu'] ? (c75k0m = sharedCanvas, c75k0m['style'] = {}) : c75k0m = window['canvas'] : c75k0m = window['wx']['createCanvas'](), cvk['idx']++, c75k0m;
      } else {
        if (kd7c0 == 'textarea' || kd7c0 == 'input') return cvk['onCreateInput'](kd7c0);else {
          if (kd7c0 == 'div') {
            var z61yh_ = cvk['_preCreateElement'](kd7c0);return z61yh_['contains'] = function (blqu) {
              return null;
            }, z61yh_['removeChild'] = function (bweqxg) {}, z61yh_;
          } else return cvk['_preCreateElement'](kd7c0);
        }
      }
    }, cvk['onCreateInput'] = function (io3$s) {
      var qbgex = cvk['_preCreateElement'](io3$s);return qbgex['focus'] = zy_h6['wxinputFocus'], qbgex['blur'] = zy_h6['wxinputblur'], qbgex['style'] = {}, qbgex['value'] = 0x0, qbgex['parentElement'] = {}, qbgex['placeholder'] = {}, qbgex['type'] = {}, qbgex['setColor'] = function (qbwge8) {}, qbgex['setType'] = function (so43i) {}, qbgex['setFontFace'] = function (ezb) {}, qbgex['addEventListener'] = function (pvx5gw) {}, qbgex['contains'] = function (uzyhl6) {
        return null;
      }, qbgex['removeChild'] = function (_t34n) {}, qbgex;
    }, cvk['createShaderCondition'] = function (ios$43) {
      var bq8e = this,
          gv7x5p = function () {
        var xp5vgw = ios$43;return bq8e[ios$43['replace']('this.', '')];
      };return gv7x5p;
    }, cvk['EnvConfig'] = null, cvk['window'] = null, cvk['_preCreateElement'] = null, cvk['_inited'] = ![], cvk['wxRequest'] = null, cvk['systemInfo'] = null, cvk['version'] = '0.0.1', cvk['isZiYu'] = ![], cvk['isPosMsgYu'] = ![], cvk['parseXMLFromString'] = function (z_1hy6) {
      var h1z6ly, o3ns;z_1hy6 = z_1hy6['replace'](/>\s+</g, '><');try {
        h1z6ly = new window['Parser']['DOMParser']()['parseFromString'](z_1hy6, 'text/xml');
      } catch (d0) {
        throw '需要引入xml解析库文件';
      }return h1z6ly;
    }, cvk['idx'] = 0x1, cvk;
  }(),
      zlue = function () {
    function gwpeqx() {}ubw8eq(gwpeqx, 'laya.wx.mini.MiniImage');var uzebl8 = gwpeqx['prototype'];return uzebl8['_loadImage'] = function (qb) {
      var kv7p5 = this,
          p7x5v = ![];qb['indexOf']('layaNativeDir/') == -0x1 && (p7x5v = !![], qb = ebuw['formatURL'](qb));if (!lezbu8['getFileInfo'](qb)) {
        if (qb['indexOf']('http://') != -0x1 || qb['indexOf']('https://') != -0x1) lezbu8['downImg'](qb, new jm0kc(gwpeqx, gwpeqx['onDownImgCallBack'], [qb, kv7p5]), qb);else gwpeqx['onCreateImage'](qb, kv7p5, !![]);
      } else gwpeqx['onCreateImage'](qb, kv7p5, !p7x5v);
    }, gwpeqx['onDownImgCallBack'] = function (qeulb, z1yh6_, u86ylz) {
      if (!u86ylz) gwpeqx['onCreateImage'](qeulb, z1yh6_);else z1yh6_['onError'](null);
    }, gwpeqx['onCreateImage'] = function (l68b, bequl, xk75p) {
      xk75p === void 0x0 && (xk75p = ![]);var kcjd;if (!xk75p) {
        var c0djk = lezbu8['getFileInfo'](l68b),
            $9ri = c0djk['md5'];kcjd = lezbu8['getFileNativePath']($9ri);
      } else kcjd = l68b;if (bequl['imgCache'] == null) bequl['imgCache'] = {};var is$rf;function qewbg() {
        is$rf['onload'] = null, is$rf['onerror'] = null, delete bequl['imgCache'][l68b];
      };var _hy162 = function () {
        qewbg(), bequl['onLoaded'](is$rf);
      },
          x7pv5k = function () {
        qewbg(), bequl['event']('error', 'Load image failed');
      };bequl['_type'] == 'nativeimage' ? (is$rf = new _hty2['window']['Image'](), is$rf['crossOrigin'] = '', is$rf['onload'] = _hy162, is$rf['onerror'] = x7pv5k, is$rf['src'] = kcjd, bequl['imgCache'][l68b] = is$rf) : new i4sof['create'](kcjd, { 'onload': _hy162, 'onerror': x7pv5k, 'onCreate': function (ul68zb) {
          is$rf = ul68zb, bequl['imgCache'][l68b] = ul68zb;
        } });
    }, gwpeqx;
  }(),
      zy_h6 = function () {
    function gqxep() {}return ubw8eq(gqxep, 'laya.wx.mini.MiniInput'), gqxep['_createInputElement'] = function () {
      vp75g['_initInput'](vp75g['area'] = _hty2['createElement']('textarea')), vp75g['_initInput'](vp75g['input'] = _hty2['createElement']('input')), vp75g['inputContainer'] = _hty2['createElement']('div'), vp75g['inputContainer']['style']['position'] = 'absolute', vp75g['inputContainer']['style']['zIndex'] = 0x186a0, _hty2['container']['appendChild'](vp75g['inputContainer']), vp75g['inputContainer']['setPos'] = function (vgx7, _43t2n) {
        vp75g['inputContainer']['style']['left'] = vgx7 + 'px', vp75g['inputContainer']['style']['top'] = _43t2n + 'px';
      }, c70km['stage']['on']('resize', null, gqxep['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_2th1y) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), h_1y2t['_soundClass'] = to324n, h_1y2t['_musicClass'] = to324n;
    }, gqxep['_onStageResize'] = function () {
      var of$4i = c70km['stage']['_canvasTransform']['identity']();of$4i['scale'](_hty2['width'] / yz16l['canvas']['width'] / h6zy['getPixelRatio'](), _hty2['height'] / yz16l['canvas']['height'] / h6zy['getPixelRatio']());
    }, gqxep['wxinputFocus'] = function (bqeu8w) {
      var ulz6yh = vp75g['inputElement']['target'];if (ulz6yh && !ulz6yh['editable']) return;m0dac['window']['wx']['offKeyboardConfirm'](), m0dac['window']['wx']['offKeyboardInput'](), m0dac['window']['wx']['showKeyboard']({ 'defaultValue': ulz6yh['text'], 'maxLength': ulz6yh['maxChars'], 'multiple': ulz6yh['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (sio3) {}, 'fail': function ($fo4si) {} }), m0dac['window']['wx']['onKeyboardConfirm'](function (hzy_6) {
        var dmkc70 = hzy_6 ? hzy_6['value'] : '';ulz6yh['text'] = dmkc70, ulz6yh['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), m0dac['window']['wx']['onKeyboardInput'](function (q8blue) {
        var c0dmk = q8blue ? q8blue['value'] : '';if (!ulz6yh['multiline']) {
          if (c0dmk['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ulz6yh['text'] = c0dmk, ulz6yh['event']('input');
      });
    }, gqxep['inputEnter'] = function () {
      vp75g['inputElement']['target']['focus'] = ![];
    }, gqxep['wxinputblur'] = function () {
      gqxep['hideKeyboard']();
    }, gqxep['hideKeyboard'] = function () {
      m0dac['window']['wx']['offKeyboardConfirm'](), m0dac['window']['wx']['offKeyboardInput'](), m0dac['window']['wx']['hideKeyboard']({ 'success': function (m07k5) {
          console['log']('隐藏键盘');
        }, 'fail': function (f$so9) {
          console['log']('隐藏键盘出错:' + (f$so9 ? f$so9['errMsg'] : ''));
        } });
    }, gqxep;
  }(),
      pvk0 = function () {
    function wbqx() {}ubw8eq(wbqx, 'laya.wx.mini.MiniLoader');var _n4t3 = wbqx['prototype'];return _n4t3['load'] = function (y16z_, pgqxv, _yz6, ublqe8, p7v05) {
      _yz6 === void 0x0 && (_yz6 = !![]), p7v05 === void 0x0 && (p7v05 = ![]);var fo9 = this;fo9['_url'] = y16z_;if (y16z_['indexOf']('data:image') === 0x0) fo9['_type'] = pgqxv = 'image';else fo9['_type'] = pgqxv || (pgqxv = fo9['getTypeFromUrl'](y16z_));fo9['_cache'] = _yz6, fo9['_data'] = null;var v57pxk = 'ascii';if (y16z_['indexOf']('.fnt') != -0x1) v57pxk = 'utf8';else pgqxv == 'arraybuffer' && (v57pxk = '');;var jkmd = q8elu['getFileExtension'](y16z_);if (wbqx['_fileTypeArr']['indexOf'](jkmd) != -0x1) m0dac['EnvConfig']['load']['call'](this, y16z_, pgqxv, _yz6, ublqe8, p7v05);else {
        if (!lezbu8['getFileInfo'](y16z_)) {
          if (y16z_['indexOf']('layaNativeDir/') != -0x1) {
            if (m0dac['isZiYu']) {
              var eg8wq = lezbu8['ziyuFileData'][y16z_];fo9['onLoaded'](eg8wq);return;
            } else {
              cosnole['log']('read read'), lezbu8['read'](y16z_, v57pxk, new jm0kc(wbqx, wbqx['onReadNativeCallBack'], [v57pxk, y16z_, pgqxv, _yz6, ublqe8, p7v05, fo9]));return;
            }
          }if (ebuw['rootPath'] == '') var wgqpvx = y16z_;else wgqpvx = y16z_['split'](ebuw['rootPath'])[0x0];y16z_['indexOf']('http://') != -0x1 || y16z_['indexOf']('https://') != -0x1 ? m0dac['EnvConfig']['load']['call'](fo9, y16z_, pgqxv, _yz6, ublqe8, p7v05) : lezbu8['readFile'](wgqpvx, v57pxk, new jm0kc(wbqx, wbqx['onReadNativeCallBack'], [v57pxk, y16z_, pgqxv, _yz6, ublqe8, p7v05, fo9]), y16z_);
        } else m0dac['EnvConfig']['load']['call'](this, y16z_, pgqxv, _yz6, ublqe8, p7v05);
      }
    }, _n4t3['resMgrLoad'] = function (ebgq8w, ris9f, ublq, ue, _24nt3, n2_34, qgpxw) {
      ublq === void 0x0 && (ublq = 0x0), ue === void 0x0 && (ue = ![]), _24nt3 === void 0x0 && (_24nt3 = ![]), n2_34 === void 0x0 && (n2_34 = 0x0), qgpxw === void 0x0 && (qgpxw = 0x3), ebgq8w['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ebgq8w), m0dac['EnvConfig']['resMgrLoad'](ebgq8w, (o43t2n, _t1yh2, on3$t) => {
        wbqx['prototype']['resMgrLoadCallBack'](o43t2n, _t1yh2, on3$t, ris9f);
      }, ublq, ue, _24nt3, n2_34, qgpxw);
    }, _n4t3['resMgrLoadCallBack'] = function ($of4i, l8zu6y, i$s9r, epgxq) {
      console['log']('buff:::', $of4i, i$s9r, lezbu8['fileNativeDir'] + '///' + lezbu8['fileListName']), epgxq($of4i, l8zu6y, i$s9r);
    }, _n4t3['clearRes'] = function (v5kxp, eqwbu8) {
      eqwbu8 === void 0x0 && (eqwbu8 = ![]);var kvx57p = this;kvx57p['clearRes'](v5kxp, eqwbu8);var s4o3i$ = lezbu8['getFileInfo'](v5kxp);if (s4o3i$ && (v5kxp['indexOf']('http://') != -0x1 || v5kxp['indexOf']('https://') != -0x1)) {
        var v7xpg = s4o3i$['md5'],
            dcmjk0 = lezbu8['getFileNativePath'](v7xpg);lezbu8['remove'](dcmjk0);
      }
    }, wbqx['onReadNativeCallBack'] = function (if4$s, qpwgex, zh_y16, fr9i$, qgepxw, h1_ty, n24to3, o$sn, d0jkc) {
      fr9i$ === void 0x0 && (fr9i$ = !![]), h1_ty === void 0x0 && (h1_ty = ![]), o$sn === void 0x0 && (o$sn = 0x0);if (!o$sn) {
        var eqgp;if (zh_y16 == 'json' || zh_y16 == 'atlas') eqgp = m0dac['getJson'](d0jkc['data']);else zh_y16 == 'xml' ? eqgp = q8elu['parseXMLFromString'](d0jkc['data']) : eqgp = d0jkc['data'];n24to3['onLoaded'](eqgp), !m0dac['isZiYu'] && m0dac['isPosMsgYu'] && zh_y16 != 'arraybuffer' && wx['postMessage']({ 'url': qpwgex, 'data': eqgp, 'isLoad': !![] });
      } else o$sn == 0x1 && m0dac['EnvConfig']['load']['call'](n24to3, qpwgex, zh_y16, fr9i$, qgepxw, h1_ty);
    }, x5vpgw(wbqx, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), wbqx;
  }(),
      lezbu8 = function (_y126) {
    function vpxw() {
      vpxw['__super']['call'](this);;
    }return ubw8eq(vpxw, 'laya.wx.mini.MiniFileMgr', _y126), vpxw['isLoadFile'] = function (o3nt24) {
      return vpxw['_fileTypeArr']['indexOf'](o3nt24) != -0x1 ? !![] : ![];
    }, vpxw['getFileInfo'] = function (n43s$o) {
      var yzh6l1 = n43s$o['split']('?')[0x0],
          foi$s9 = vpxw['filesListObj'][yzh6l1];if (foi$s9 == null) return null;else return foi$s9;return null;
    }, vpxw['onFileUpdate'] = function (qwpeg, d0am) {
      var t12h_y = qwpeg['split']('/'),
          zl6u8 = t12h_y[t12h_y['length'] - 0x1],
          s4$i = vpxw['getFileInfo'](d0am);if (s4$i == null) vpxw['onSaveFile'](d0am, zl6u8);else {
        if (s4$i['readyUrl'] != d0am) vpxw['remove'](zl6u8, d0am);
      }
    }, vpxw['exits'] = function (ew8bu, u8elbq) {
      var _ht12 = vpxw['getFileNativePath'](ew8bu);vpxw['fs']['getFileInfo']({ 'filePath': _ht12, 'success': function (e8bqgw) {
          u8elbq != null && u8elbq['runWith']([0x0, e8bqgw]);
        }, 'fail': function (s4n3$) {
          u8elbq != null && u8elbq['runWith']([0x1, s4n3$]);
        } });
    }, vpxw['read'] = function (t_1n, zh6lu, uhlz6y, ql8bu) {
      zh6lu === void 0x0 && (zh6lu = 'ascill'), ql8bu === void 0x0 && (ql8bu = '');var lyz6u;ql8bu != '' ? lyz6u = vpxw['getFileNativePath'](t_1n) : lyz6u = t_1n, vpxw['fs']['readFile']({ 'filePath': lyz6u, 'encoding': zh6lu, 'success': function (ue8zlb) {
          uhlz6y != null && uhlz6y['runWith']([0x0, ue8zlb]);
        }, 'fail': function (ajc0) {
          if (ajc0 && ql8bu != '') vpxw['down'](ql8bu, zh6lu, uhlz6y, ql8bu);else uhlz6y != null && uhlz6y['runWith']([0x1]);
        } });
    }, vpxw['readNativeFile'] = function (kmcdj0, yh_61) {
      vpxw['fs']['readFile']({ 'filePath': kmcdj0, 'encoding': '', 'success': function (_31n2) {
          yh_61 != null && yh_61['runWith']([0x0]);
        }, 'fail': function (t2_n31) {
          yh_61 != null && yh_61['runWith']([0x1]);
        } });
    }, vpxw['down'] = function ($4sn3o, zu68yl, eu8blq, sf9ir$) {
      zu68yl === void 0x0 && (zu68yl = 'ascill'), sf9ir$ === void 0x0 && (sf9ir$ = '');var ulez8 = vpxw['getFileNativePath'](sf9ir$),
          eg8w = vpxw['wxdown']({ 'url': $4sn3o, 'filePath': ulez8, 'success': function ($so3i4) {
          if ($so3i4['statusCode'] === 0xc8) vpxw['readFile']($so3i4['filePath'], zu68yl, eu8blq, sf9ir$);
        }, 'fail': function (n4os3) {
          eu8blq != null && eu8blq['runWith']([0x1, n4os3]);
        } });eg8w['onProgressUpdate'](function (dmckj) {
        eu8blq != null && eu8blq['runWith']([0x2, dmckj['progress']]);
      });
    }, vpxw['readFile'] = function (si$f, y6uz8l, yh1z6_, fiso4) {
      y6uz8l === void 0x0 && (y6uz8l = 'ascill'), fiso4 === void 0x0 && (fiso4 = ''), vpxw['fs']['readFile']({ 'filePath': si$f, 'encoding': y6uz8l, 'success': function (cjdk0) {
          if (si$f['indexOf']('http://') != -0x1 || si$f['indexOf']('https://') != -0x1) vpxw['onFileUpdate'](si$f, fiso4);yh1z6_ != null && yh1z6_['runWith']([0x0, cjdk0]);
        }, 'fail': function (n4t3_2) {
          if (n4t3_2) yh1z6_ != null && yh1z6_['runWith']([0x1, n4t3_2]);
        } });
    }, vpxw['downImg'] = function (xk5vp7, n2_t4, lezub) {
      lezub === void 0x0 && (lezub = '');var equbl8 = vpxw['wxdown']({ 'url': xk5vp7, 'success': function (kpx7v) {
          kpx7v['statusCode'] === 0xc8 && vpxw['copyFile'](kpx7v['tempFilePath'], lezub, n2_t4);
        }, 'fail': function (yhlz61) {
          n2_t4 != null && n2_t4['runWith']([0x1, yhlz61]);
        } });
    }, vpxw['copyFile'] = function (pv57gx, hz6, v7p5gx) {
      var fo9si$ = pv57gx['split']('/'),
          _y21h = fo9si$[fo9si$['length'] - 0x1],
          xwqvp = hz6['split']('?')[0x0],
          fo$si = vpxw['getFileInfo'](hz6),
          _y6zh = vpxw['getFileNativePath'](_y21h);vpxw['fs']['copyFile']({ 'srcPath': pv57gx, 'destPath': _y6zh, 'success': function (d0ckm) {
          if (!fo$si) vpxw['onSaveFile'](hz6, _y21h), v7p5gx != null && v7p5gx['runWith']([0x0]);else {
            if (fo$si['readyUrl'] != hz6) vpxw['remove'](_y21h, hz6, v7p5gx);
          }
        }, 'fail': function (ons$34) {
          v7p5gx != null && v7p5gx['runWith']([0x1, ons$34]);
        } });
    }, vpxw['getFileNativePath'] = function (kpx7v5) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + kpx7v5;
    }, vpxw['remove'] = function (vwpx, j0kmdc, px7kv5) {
      j0kmdc === void 0x0 && (j0kmdc = '');var y6hl1z = vpxw['getFileInfo'](j0kmdc),
          fo4is = vpxw['getFileNativePath'](y6hl1z['md5']);c70km['loader']['clearRes'](y6hl1z['readyUrl']), vpxw['fs']['unlink']({ 'filePath': fo4is, 'success': function (d0ca) {
          if (j0kmdc != '') vpxw['onSaveFile'](j0kmdc, vwpx);px7kv5 != null && px7kv5['runWith']([0x0]);
        }, 'fail': function (v5pgx) {} });
    }, vpxw['onSaveFile'] = function (jdamc0, hlz6yu) {
      var hy2t_ = jdamc0['split']('?')[0x0];vpxw['filesListObj'][hy2t_] = { 'md5': hlz6yu, 'readyUrl': jdamc0 }, vpxw['fs']['writeFile']({ 'filePath': vpxw['fileNativeDir'] + '/' + vpxw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](vpxw['filesListObj']), 'success': function (lyzu6h) {
          console['log']('写入测试测试成功：', lyzu6h);
        }, 'fail': function (io3s$) {
          console['log']('写入测试测试失败：', io3s$);
        } });
    }, vpxw['existDir'] = function (lhyz, uzyl) {
      vpxw['fs']['mkdir']({ 'dirPath': lhyz, 'success': function (cjam0d) {
          uzyl != null && uzyl['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (fio4$s) {
          if (fio4$s['errMsg']['indexOf']('file already exists') != -0x1) vpxw['readSync'](vpxw['fileListName'], 'utf8', uzyl);else uzyl != null && uzyl['runWith']([0x1, fio4$s]);
        } });
    }, vpxw['readSync'] = function (gexqw, io4$, o43i$, s$oi4) {
      io4$ === void 0x0 && (io4$ = 'ascill'), s$oi4 === void 0x0 && (s$oi4 = '');var djcm0 = vpxw['getFileNativePath'](gexqw),
          mdkjc;try {
        mdkjc = vpxw['fs']['readFileSync'](djcm0), o43i$ != null && o43i$['runWith']([0x0, { 'data': mdkjc }]);
      } catch (kpv7x5) {
        o43i$ != null && o43i$['runWith']([0x1]);
      }
    }, vpxw['readCache'] = function () {}, vpxw['writeCache'] = function (y1ht_) {
      var lzuy = readyUrl['split']('?')[0x0];vpxw['filesListObj'][lzuy] = { 'md5': md5Name, 'readyUrl': readyUrl }, vpxw['fs']['writeFile']({ 'filePath': vpxw['fileNativeDir'] + '/' + vpxw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](vpxw['filesListObj']), 'success': function (f9ri) {}, 'fail': function (oi3$s4) {} });
    }, vpxw['setNativeFileDir'] = function (m7c50) {
      vpxw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + m7c50;
    }, vpxw['filesListObj'] = {}, vpxw['fileNativeDir'] = null, vpxw['fileListName'] = 'layaairfiles.txt', vpxw['ziyuFileData'] = {}, x5vpgw(vpxw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), vpxw;
  }(fso),
      to324n = function (son34) {
    function xp5kv() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], xp5kv['__super']['call'](this), this['_sound'] = xp5kv['_createSound']();
    }ubw8eq(xp5kv, 'laya.wx.mini.MiniSound', son34);var ylzu6h = xp5kv['prototype'];return ylzu6h['load'] = function (yuzl68) {
      var j0cmad = this;yuzl68 = ebuw['formatURL'](yuzl68), this['url'] = yuzl68;if (xp5kv['_audioCache'][yuzl68]) {
        this['event']('complete');return;
      }function qwgxv() {
        if (xp5kv['_null'] != undefined) j0cmad['_sound']['onCanplay'](xp5kv['_null']), j0cmad['_sound']['onError'](xp5kv['_null']);else try {
          j0cmad['_sound']['onCanplay'](null), j0cmad['_sound']['onError'](null), xp5kv['_null'] = null;
        } catch (n3os4$) {
          console['warn']('[wxmini] _clearSound:' + n3os4$), j0cmad['_sound']['onCanplay'](gbqex), j0cmad['_sound']['onError'](gbqex), xp5kv['_null'] = gbqex;
        }
      }function s4$fi() {
        qwgxv(), fo$si4['loaded'] = !![], fo$si4['event']('complete'), xp5kv['_audioCache'][fo$si4['url']] = fo$si4;
      }function $sfo4i(w8qub) {
        console['error']('errCode=' + w8qub['errCode'] + '  errMsg=' + w8qub['errMsg']), qwgxv(), fo$si4['event']('error');
      }function gbqex() {}this['_sound']['onCanplay'](s4$fi), this['_sound']['onError']($sfo4i), this['_sound']['src'] = yuzl68;var fo$si4 = this;
    }, ylzu6h['play'] = function (k5v7xp, eb8qu) {
      k5v7xp === void 0x0 && (k5v7xp = 0x0), eb8qu === void 0x0 && (eb8qu = 0x0);var xbeqg;if (this['url'] == h_1y2t['_tMusic']) {
        if (!xp5kv['_musicAudio']) xp5kv['_musicAudio'] = xp5kv['_createSound']();xbeqg = xp5kv['_musicAudio'];
      } else xbeqg = xp5kv['_createSound']();xbeqg['src'] = this['url'];var b6ul = new gqwpex(xbeqg);return b6ul['url'] = this['url'], b6ul['loops'] = eb8qu, b6ul['startTime'] = k5v7xp, b6ul['play'](), h_1y2t['addChannel'](b6ul), b6ul;
    }, ylzu6h['dispose'] = function () {
      var o3i$s = xp5kv['_audioCache'][this['url']];o3i$s && (o3i$s['src'] = '', delete xp5kv['_audioCache'][this['url']]);
    }, b86zl(0x0, ylzu6h, 'duration', function () {
      return this['_sound']['duration'];
    }), xp5kv['_createSound'] = function () {
      return xp5kv['_id']++, m0dac['window']['wx']['createInnerAudioContext']();
    }, xp5kv['_musicAudio'] = null, xp5kv['_id'] = 0x0, xp5kv['_audioCache'] = {}, xp5kv['_null'] = undefined, xp5kv;
  }(fso),
      gqwpex = function (p7vx5g) {
    function beql(zy6luh) {
      this['_audio'] = null, this['_onEnd'] = null, beql['__super']['call'](this), this['_audio'] = zy6luh, this['_onEnd'] = q8elu['bind'](this['__onEnd'], this), zy6luh['onEnded'](this['_onEnd']);
    }ubw8eq(beql, 'laya.wx.mini.MiniSoundChannel', p7vx5g);var ns4o = beql['prototype'];return ns4o['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (c70km['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ns4o['__onNull'] = function () {}, ns4o['play'] = function () {
      this['isStopped'] = ![], h_1y2t['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ns4o['stop'] = function () {
      this['isStopped'] = !![], h_1y2t['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (beql['_null'] != undefined) this['_audio']['onEnded'](beql['_null']);else try {
        this['_audio']['onEnded'](null), beql['_null'] = null;
      } catch (uyzl6) {
        console['warn']('[wxmini] stop:' + uyzl6), this['_audio']['onEnded'](q8elu['bind'](this['__onNull'], this)), beql['_null'] = q8elu['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ns4o['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ns4o['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], h_1y2t['addChannel'](this), this['_audio']['play']();
    }, b86zl(0x0, ns4o, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), b86zl(0x0, ns4o, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), b86zl(0x0, ns4o, 'volume', function () {
      return 0x1;
    }, function (gvpxwq) {}), beql['_null'] = undefined, beql;
  }(xvg5wp);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var wgxpv5 in Laya) {
    var dkmc0 = Laya[wgxpv5];dkmc0 && dkmc0['__isclass'] && (exports[wgxpv5] = dkmc0);
  }
});