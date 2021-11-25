var Q = wx.$v;
(function (window, document, o$3t4) {
  var bw8egq = o$3t4['un'],
      l6zy = o$3t4['uns'],
      hzy6ul = o$3t4['static'],
      s$o3i4 = o$3t4['class'],
      n2t1h = o$3t4['getset'],
      wg8eq = o$3t4['__newvec'],
      cm50 = laya['utils']['Browser'],
      $osf9 = laya['events']['Event'],
      elzu8b = laya['events']['EventDispatcher'],
      t32n_4 = laya['resource']['HTMLImage'],
      ze8bu = laya['utils']['Handler'],
      qle8b = laya['display']['Input'],
      px57g = laya['net']['Loader'],
      _y62h = laya['maths']['Matrix'],
      xg5v7 = laya['renders']['Render'],
      t1h2n = laya['utils']['RunDriver'],
      o$t43 = laya['media']['Sound'],
      n4$so = laya['media']['SoundChannel'],
      zu8lbe = laya['media']['SoundManager'],
      y6lhzu = laya['display']['Stage'],
      bqxwg = laya['net']['URL'],
      yt_ = laya['utils']['Utils'],
      $o34tn = function () {
    function th1_2y() {}return s$o3i4(th1_2y, 'laya.wx.mini.MiniAdpter'), th1_2y['getJson'] = function (hu6ly) {
      return JSON['parse'](hu6ly);
    }, th1_2y['init'] = function (ck0jdm, qvpgw) {
      ck0jdm === void 0x0 && (ck0jdm = ![]), qvpgw === void 0x0 && (qvpgw = ![]);if (th1_2y['_inited']) return;th1_2y['window'] = window;if (th1_2y['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;th1_2y['_inited'] = !![], th1_2y['isZiYu'] = qvpgw, th1_2y['isPosMsgYu'] = ck0jdm, th1_2y['EnvConfig'] = {}, !th1_2y['isZiYu'] && (u6yz['setNativeFileDir']('/layaairGame'), u6yz['existDir'](u6yz['fileNativeDir'], ze8bu['create'](th1_2y, th1_2y['onMkdirCallBack']))), th1_2y['window']['focus'] = function () {}, o$3t4['getUrlPath'] = function () {}, th1_2y['window']['logtime'] = function (wegq8b) {}, th1_2y['window']['alertTimeLog'] = function (ont342) {}, th1_2y['window']['resetShareInfo'] = function () {}, th1_2y['window']['CanvasRenderingContext2D'] = function () {}, th1_2y['window']['CanvasRenderingContext2D']['prototype'] = th1_2y['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], th1_2y['window']['document']['body']['appendChild'] = function () {}, th1_2y['EnvConfig']['pixelRatioInt'] = 0x0, t1h2n['getPixelRatio'] = th1_2y['pixelRatio'], th1_2y['_preCreateElement'] = cm50['createElement'], cm50['createElement'] = th1_2y['createElement'], t1h2n['createShaderCondition'] = th1_2y['createShaderCondition'], yt_['parseXMLFromString'] = th1_2y['parseXMLFromString'], qle8b['_createInputElement'] = h6z1y_['_createInputElement'], th1_2y['EnvConfig']['load'] = px57g['prototype']['load'], px57g['prototype']['load'] = g5xpvw['prototype']['load'], th1_2y['isZiYu'] && ck0jdm && wx['onMessage'](function (k50v7p) {
        k50v7p['isLoad'] && (u6yz['ziyuFileData'][k50v7p['url']] = k50v7p['data']);
      });
    }, th1_2y['onMkdirCallBack'] = function (zh_y16, f4$so) {
      if (!zh_y16) u6yz['filesListObj'] = JSON['parse'](f4$so['data']);
    }, th1_2y['pixelRatio'] = function () {
      if (!th1_2y['EnvConfig']['pixelRatioInt']) try {
        var bxwq = wx['getSystemInfoSync']();return th1_2y['EnvConfig']['pixelRatioInt'] = bxwq['pixelRatio'], bxwq = bxwq, bxwq['pixelRatio'];
      } catch (pwv5gx) {}return th1_2y['EnvConfig']['pixelRatioInt'];
    }, th1_2y['createElement'] = function (jacm0) {
      if (jacm0 == 'canvas') {
        var $n4s;return th1_2y['idx'] == 0x1 ? th1_2y['isZiYu'] ? ($n4s = sharedCanvas, $n4s['style'] = {}) : $n4s = window['canvas'] : $n4s = window['wx']['createCanvas'](), th1_2y['idx']++, $n4s;
      } else {
        if (jacm0 == 'textarea' || jacm0 == 'input') return th1_2y['onCreateInput'](jacm0);else {
          if (jacm0 == 'div') {
            var bezul = th1_2y['_preCreateElement'](jacm0);return bezul['contains'] = function (_t1hy) {
              return null;
            }, bezul['removeChild'] = function (webu) {}, bezul;
          } else return th1_2y['_preCreateElement'](jacm0);
        }
      }
    }, th1_2y['onCreateInput'] = function (l1y6h) {
      var s4o$3n = th1_2y['_preCreateElement'](l1y6h);return s4o$3n['focus'] = h6z1y_['wxinputFocus'], s4o$3n['blur'] = h6z1y_['wxinputblur'], s4o$3n['style'] = {}, s4o$3n['value'] = 0x0, s4o$3n['parentElement'] = {}, s4o$3n['placeholder'] = {}, s4o$3n['type'] = {}, s4o$3n['setColor'] = function (f$o9) {}, s4o$3n['setType'] = function (xgeqw) {}, s4o$3n['setFontFace'] = function (o23t4n) {}, s4o$3n['addEventListener'] = function (qelu) {}, s4o$3n['contains'] = function (t34no$) {
        return null;
      }, s4o$3n['removeChild'] = function (s3$io4) {}, s4o$3n;
    }, th1_2y['createShaderCondition'] = function ($3n4ot) {
      var bgq = this,
          mkc570 = function () {
        var hzy61 = $3n4ot;return bgq[$3n4ot['replace']('this.', '')];
      };return mkc570;
    }, th1_2y['EnvConfig'] = null, th1_2y['window'] = null, th1_2y['_preCreateElement'] = null, th1_2y['_inited'] = ![], th1_2y['wxRequest'] = null, th1_2y['systemInfo'] = null, th1_2y['version'] = '0.0.1', th1_2y['isZiYu'] = ![], th1_2y['isPosMsgYu'] = ![], th1_2y['parseXMLFromString'] = function (f9si) {
      var not34, zble8u;f9si = f9si['replace'](/>\s+</g, '><');try {
        not34 = new window['Parser']['DOMParser']()['parseFromString'](f9si, 'text/xml');
      } catch (m0jcd) {
        throw '需要引入xml解析库文件';
      }return not34;
    }, th1_2y['idx'] = 0x1, th1_2y;
  }(),
      pgwvxq = function () {
    function pk5v() {}s$o3i4(pk5v, 'laya.wx.mini.MiniImage');var wqex = pk5v['prototype'];return wqex['_loadImage'] = function (k7c50m) {
      var t42n3_ = this,
          to4$ = ![];k7c50m['indexOf']('layaNativeDir/') == -0x1 && (to4$ = !![], k7c50m = bqxwg['formatURL'](k7c50m));if (!u6yz['getFileInfo'](k7c50m)) {
        if (k7c50m['indexOf']('http://') != -0x1 || k7c50m['indexOf']('https://') != -0x1) u6yz['downImg'](k7c50m, new ze8bu(pk5v, pk5v['onDownImgCallBack'], [k7c50m, t42n3_]), k7c50m);else pk5v['onCreateImage'](k7c50m, t42n3_, !![]);
      } else pk5v['onCreateImage'](k7c50m, t42n3_, !to4$);
    }, pk5v['onDownImgCallBack'] = function (o4fis$, o342, mck07) {
      if (!mck07) pk5v['onCreateImage'](o4fis$, o342);else o342['onError'](null);
    }, pk5v['onCreateImage'] = function (qleb8u, wqeg, q8blue) {
      q8blue === void 0x0 && (q8blue = ![]);var v07k5;if (!q8blue) {
        var z6h1y_ = u6yz['getFileInfo'](qleb8u),
            _3t1n2 = z6h1y_['md5'];v07k5 = u6yz['getFileNativePath'](_3t1n2);
      } else v07k5 = qleb8u;if (wqeg['imgCache'] == null) wqeg['imgCache'] = {};var $si9f;function lzh6y1() {
        $si9f['onload'] = null, $si9f['onerror'] = null, delete wqeg['imgCache'][qleb8u];
      };var e8qb = function () {
        lzh6y1(), wqeg['onLoaded']($si9f);
      },
          ueb8ql = function () {
        lzh6y1(), wqeg['event']('error', 'Load image failed');
      };wqeg['_type'] == 'nativeimage' ? ($si9f = new cm50['window']['Image'](), $si9f['crossOrigin'] = '', $si9f['onload'] = e8qb, $si9f['onerror'] = ueb8ql, $si9f['src'] = v07k5, wqeg['imgCache'][qleb8u] = $si9f) : new t32n_4['create'](v07k5, { 'onload': e8qb, 'onerror': ueb8ql, 'onCreate': function (si$9o) {
          $si9f = si$9o, wqeg['imgCache'][qleb8u] = si$9o;
        } });
    }, pk5v;
  }(),
      h6z1y_ = function () {
    function fsoi$4() {}return s$o3i4(fsoi$4, 'laya.wx.mini.MiniInput'), fsoi$4['_createInputElement'] = function () {
      qle8b['_initInput'](qle8b['area'] = cm50['createElement']('textarea')), qle8b['_initInput'](qle8b['input'] = cm50['createElement']('input')), qle8b['inputContainer'] = cm50['createElement']('div'), qle8b['inputContainer']['style']['position'] = 'absolute', qle8b['inputContainer']['style']['zIndex'] = 0x186a0, cm50['container']['appendChild'](qle8b['inputContainer']), qle8b['inputContainer']['setPos'] = function (g5wvxp, gpqv) {
        qle8b['inputContainer']['style']['left'] = g5wvxp + 'px', qle8b['inputContainer']['style']['top'] = gpqv + 'px';
      }, o$3t4['stage']['on']('resize', null, fsoi$4['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (tn4o23) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), zu8lbe['_soundClass'] = $n34o, zu8lbe['_musicClass'] = $n34o;
    }, fsoi$4['_onStageResize'] = function () {
      var to43n = o$3t4['stage']['_canvasTransform']['identity']();to43n['scale'](cm50['width'] / xg5v7['canvas']['width'] / t1h2n['getPixelRatio'](), cm50['height'] / xg5v7['canvas']['height'] / t1h2n['getPixelRatio']());
    }, fsoi$4['wxinputFocus'] = function (g5vx7) {
      var wg5px = qle8b['inputElement']['target'];if (wg5px && !wg5px['editable']) return;$o34tn['window']['wx']['offKeyboardConfirm'](), $o34tn['window']['wx']['offKeyboardInput'](), $o34tn['window']['wx']['showKeyboard']({ 'defaultValue': wg5px['text'], 'maxLength': wg5px['maxChars'], 'multiple': wg5px['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (lz6hy) {}, 'fail': function (zb6l8) {} }), $o34tn['window']['wx']['onKeyboardConfirm'](function (vpk50) {
        var $3sio4 = vpk50 ? vpk50['value'] : '';wg5px['text'] = $3sio4, wg5px['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), $o34tn['window']['wx']['onKeyboardInput'](function (wq8beu) {
        var kp5v0 = wq8beu ? wq8beu['value'] : '';if (!wg5px['multiline']) {
          if (kp5v0['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }wg5px['text'] = kp5v0, wg5px['event']('input');
      });
    }, fsoi$4['inputEnter'] = function () {
      qle8b['inputElement']['target']['focus'] = ![];
    }, fsoi$4['wxinputblur'] = function () {
      fsoi$4['hideKeyboard']();
    }, fsoi$4['hideKeyboard'] = function () {
      $o34tn['window']['wx']['offKeyboardConfirm'](), $o34tn['window']['wx']['offKeyboardInput'](), $o34tn['window']['wx']['hideKeyboard']({ 'success': function (f4i$) {
          console['log']('隐藏键盘');
        }, 'fail': function (ge8q) {
          console['log']('隐藏键盘出错:' + (ge8q ? ge8q['errMsg'] : ''));
        } });
    }, fsoi$4;
  }(),
      g5xpvw = function () {
    function qxvpw() {}s$o3i4(qxvpw, 'laya.wx.mini.MiniLoader');var i9f$s = qxvpw['prototype'];return i9f$s['load'] = function (dcam0, _tn32, xgbwe, b8lz6u, _h21) {
      xgbwe === void 0x0 && (xgbwe = !![]), _h21 === void 0x0 && (_h21 = ![]);var p07v = this;p07v['_url'] = dcam0;if (dcam0['indexOf']('data:image') === 0x0) p07v['_type'] = _tn32 = 'image';else p07v['_type'] = _tn32 || (_tn32 = p07v['getTypeFromUrl'](dcam0));p07v['_cache'] = xgbwe, p07v['_data'] = null;var _hyt21 = 'ascii';if (dcam0['indexOf']('.fnt') != -0x1) _hyt21 = 'utf8';else _tn32 == 'arraybuffer' && (_hyt21 = '');;var _2h1ty = yt_['getFileExtension'](dcam0);if (qxvpw['_fileTypeArr']['indexOf'](_2h1ty) != -0x1) $o34tn['EnvConfig']['load']['call'](this, dcam0, _tn32, xgbwe, b8lz6u, _h21);else {
        if (!u6yz['getFileInfo'](dcam0)) {
          if (dcam0['indexOf']('layaNativeDir/') != -0x1) {
            if ($o34tn['isZiYu']) {
              var o4t3n$ = u6yz['ziyuFileData'][dcam0];p07v['onLoaded'](o4t3n$);return;
            } else {
              cosnole['log']('read read'), u6yz['read'](dcam0, _hyt21, new ze8bu(qxvpw, qxvpw['onReadNativeCallBack'], [_hyt21, dcam0, _tn32, xgbwe, b8lz6u, _h21, p07v]));return;
            }
          }if (bqxwg['rootPath'] == '') var c507km = dcam0;else c507km = dcam0['split'](bqxwg['rootPath'])[0x0];dcam0['indexOf']('http://') != -0x1 || dcam0['indexOf']('https://') != -0x1 ? $o34tn['EnvConfig']['load']['call'](p07v, dcam0, _tn32, xgbwe, b8lz6u, _h21) : u6yz['readFile'](c507km, _hyt21, new ze8bu(qxvpw, qxvpw['onReadNativeCallBack'], [_hyt21, dcam0, _tn32, xgbwe, b8lz6u, _h21, p07v]), dcam0);
        } else $o34tn['EnvConfig']['load']['call'](this, dcam0, _tn32, xgbwe, b8lz6u, _h21);
      }
    }, i9f$s['resMgrLoad'] = function (gbweq8, z8uly, v7pg5, hl1y6z, hz6yl, kv75, qlu8be) {
      v7pg5 === void 0x0 && (v7pg5 = 0x0), hl1y6z === void 0x0 && (hl1y6z = ![]), hz6yl === void 0x0 && (hz6yl = ![]), kv75 === void 0x0 && (kv75 = 0x0), qlu8be === void 0x0 && (qlu8be = 0x3), gbweq8['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', gbweq8), $o34tn['EnvConfig']['resMgrLoad'](gbweq8, (xpwqvg, acjd0, n21t_3) => {
        qxvpw['prototype']['resMgrLoadCallBack'](xpwqvg, acjd0, n21t_3, z8uly);
      }, v7pg5, hl1y6z, hz6yl, kv75, qlu8be);
    }, i9f$s['resMgrLoadCallBack'] = function (hz61yl, nt$3o, kx7v5p, v7pk5x) {
      console['log']('buff:::', hz61yl, kx7v5p, u6yz['fileNativeDir'] + '///' + u6yz['fileListName']), v7pk5x(hz61yl, nt$3o, kx7v5p);
    }, i9f$s['clearRes'] = function (kpv, f$4so) {
      f$4so === void 0x0 && (f$4so = ![]);var y16_z = this;y16_z['clearRes'](kpv, f$4so);var xgw5p = u6yz['getFileInfo'](kpv);if (xgw5p && (kpv['indexOf']('http://') != -0x1 || kpv['indexOf']('https://') != -0x1)) {
        var uelbz = xgw5p['md5'],
            vpx75k = u6yz['getFileNativePath'](uelbz);u6yz['remove'](vpx75k);
      }
    }, qxvpw['onReadNativeCallBack'] = function (vgxp75, pv7g5x, t4$3n, e8buql, b8ezl, gq8ew, xpv7k5, o$nt43, zyh_6) {
      e8buql === void 0x0 && (e8buql = !![]), gq8ew === void 0x0 && (gq8ew = ![]), o$nt43 === void 0x0 && (o$nt43 = 0x0);if (!o$nt43) {
        var zu6bl;if (t4$3n == 'json' || t4$3n == 'atlas') zu6bl = $o34tn['getJson'](zyh_6['data']);else t4$3n == 'xml' ? zu6bl = yt_['parseXMLFromString'](zyh_6['data']) : zu6bl = zyh_6['data'];xpv7k5['onLoaded'](zu6bl), !$o34tn['isZiYu'] && $o34tn['isPosMsgYu'] && t4$3n != 'arraybuffer' && wx['postMessage']({ 'url': pv7g5x, 'data': zu6bl, 'isLoad': !![] });
      } else o$nt43 == 0x1 && $o34tn['EnvConfig']['load']['call'](xpv7k5, pv7g5x, t4$3n, e8buql, b8ezl, gq8ew);
    }, hzy6ul(qxvpw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qxvpw;
  }(),
      u6yz = function (t23n1) {
    function t_hn() {
      t_hn['__super']['call'](this);;
    }return s$o3i4(t_hn, 'laya.wx.mini.MiniFileMgr', t23n1), t_hn['isLoadFile'] = function (lhzu) {
      return t_hn['_fileTypeArr']['indexOf'](lhzu) != -0x1 ? !![] : ![];
    }, t_hn['getFileInfo'] = function (_h6yz) {
      var ul8eb = _h6yz['split']('?')[0x0],
          xgwpe = t_hn['filesListObj'][ul8eb];if (xgwpe == null) return null;else return xgwpe;return null;
    }, t_hn['onFileUpdate'] = function (pwqxv, f$ois) {
      var zu6y = pwqxv['split']('/'),
          v7gxp5 = zu6y[zu6y['length'] - 0x1],
          qwbegx = t_hn['getFileInfo'](f$ois);if (qwbegx == null) t_hn['onSaveFile'](f$ois, v7gxp5);else {
        if (qwbegx['readyUrl'] != f$ois) t_hn['remove'](v7gxp5, f$ois);
      }
    }, t_hn['exits'] = function (da0mj, $sfr) {
      var x5p7g = t_hn['getFileNativePath'](da0mj);t_hn['fs']['getFileInfo']({ 'filePath': x5p7g, 'success': function (_2ty1h) {
          $sfr != null && $sfr['runWith']([0x0, _2ty1h]);
        }, 'fail': function (xb) {
          $sfr != null && $sfr['runWith']([0x1, xb]);
        } });
    }, t_hn['read'] = function (p57, wge8b, pgwqe, y21h_t) {
      wge8b === void 0x0 && (wge8b = 'ascill'), y21h_t === void 0x0 && (y21h_t = '');var q8wub;y21h_t != '' ? q8wub = t_hn['getFileNativePath'](p57) : q8wub = p57, t_hn['fs']['readFile']({ 'filePath': q8wub, 'encoding': wge8b, 'success': function (zeu8lb) {
          pgwqe != null && pgwqe['runWith']([0x0, zeu8lb]);
        }, 'fail': function (ht_1y2) {
          if (ht_1y2 && y21h_t != '') t_hn['down'](y21h_t, wge8b, pgwqe, y21h_t);else pgwqe != null && pgwqe['runWith']([0x1]);
        } });
    }, t_hn['readNativeFile'] = function (m0cjad, vxgqwp) {
      t_hn['fs']['readFile']({ 'filePath': m0cjad, 'encoding': '', 'success': function (is4o$) {
          vxgqwp != null && vxgqwp['runWith']([0x0]);
        }, 'fail': function (c0kv) {
          vxgqwp != null && vxgqwp['runWith']([0x1]);
        } });
    }, t_hn['down'] = function (t$4o, bweqg8, uzlb68, o34ns$) {
      bweqg8 === void 0x0 && (bweqg8 = 'ascill'), o34ns$ === void 0x0 && (o34ns$ = '');var n13_2t = t_hn['getFileNativePath'](o34ns$),
          maj0 = t_hn['wxdown']({ 'url': t$4o, 'filePath': n13_2t, 'success': function (t123_) {
          if (t123_['statusCode'] === 0xc8) t_hn['readFile'](t123_['filePath'], bweqg8, uzlb68, o34ns$);
        }, 'fail': function (y12ht_) {
          uzlb68 != null && uzlb68['runWith']([0x1, y12ht_]);
        } });maj0['onProgressUpdate'](function (jd0c) {
        uzlb68 != null && uzlb68['runWith']([0x2, jd0c['progress']]);
      });
    }, t_hn['readFile'] = function (vkx7p5, l6zyu, w5pxv, qexgwp) {
      l6zyu === void 0x0 && (l6zyu = 'ascill'), qexgwp === void 0x0 && (qexgwp = ''), t_hn['fs']['readFile']({ 'filePath': vkx7p5, 'encoding': l6zyu, 'success': function (vw) {
          if (vkx7p5['indexOf']('http://') != -0x1 || vkx7p5['indexOf']('https://') != -0x1) t_hn['onFileUpdate'](vkx7p5, qexgwp);w5pxv != null && w5pxv['runWith']([0x0, vw]);
        }, 'fail': function (hy1lz) {
          if (hy1lz) w5pxv != null && w5pxv['runWith']([0x1, hy1lz]);
        } });
    }, t_hn['downImg'] = function (dm07k, p5vx7g, vx7k5) {
      vx7k5 === void 0x0 && (vx7k5 = '');var a0djmc = t_hn['wxdown']({ 'url': dm07k, 'success': function (bqlu8e) {
          bqlu8e['statusCode'] === 0xc8 && t_hn['copyFile'](bqlu8e['tempFilePath'], vx7k5, p5vx7g);
        }, 'fail': function (eq8ulb) {
          p5vx7g != null && p5vx7g['runWith']([0x1, eq8ulb]);
        } });
    }, t_hn['copyFile'] = function (n2t31, if$s9o, lu6y8z) {
      var $o3sn4 = n2t31['split']('/'),
          dj0ca = $o3sn4[$o3sn4['length'] - 0x1],
          jacd0m = if$s9o['split']('?')[0x0],
          th2_y = t_hn['getFileInfo'](if$s9o),
          mdkjc = t_hn['getFileNativePath'](dj0ca);t_hn['fs']['copyFile']({ 'srcPath': n2t31, 'destPath': mdkjc, 'success': function (o4$fi) {
          if (!th2_y) t_hn['onSaveFile'](if$s9o, dj0ca), lu6y8z != null && lu6y8z['runWith']([0x0]);else {
            if (th2_y['readyUrl'] != if$s9o) t_hn['remove'](dj0ca, if$s9o, lu6y8z);
          }
        }, 'fail': function (c075m) {
          lu6y8z != null && lu6y8z['runWith']([0x1, c075m]);
        } });
    }, t_hn['getFileNativePath'] = function ($irfs9) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $irfs9;
    }, t_hn['remove'] = function (s$o4fi, begw8q, v7kxp) {
      begw8q === void 0x0 && (begw8q = '');var kc75 = t_hn['getFileInfo'](begw8q),
          o42n = t_hn['getFileNativePath'](kc75['md5']);o$3t4['loader']['clearRes'](kc75['readyUrl']), t_hn['fs']['unlink']({ 'filePath': o42n, 'success': function (i34o) {
          if (begw8q != '') t_hn['onSaveFile'](begw8q, s$o4fi);v7kxp != null && v7kxp['runWith']([0x0]);
        }, 'fail': function (jkm0c) {} });
    }, t_hn['onSaveFile'] = function (o4sn3, beqgx) {
      var hy6lz1 = o4sn3['split']('?')[0x0];t_hn['filesListObj'][hy6lz1] = { 'md5': beqgx, 'readyUrl': o4sn3 }, t_hn['fs']['writeFile']({ 'filePath': t_hn['fileNativeDir'] + '/' + t_hn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t_hn['filesListObj']), 'success': function (kjd0cm) {
          console['log']('写入测试测试成功：', kjd0cm);
        }, 'fail': function (k0c5m) {
          console['log']('写入测试测试失败：', k0c5m);
        } });
    }, t_hn['existDir'] = function (h612y_, bz8l6u) {
      t_hn['fs']['mkdir']({ 'dirPath': h612y_, 'success': function (pgxweq) {
          bz8l6u != null && bz8l6u['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (xqbgew) {
          if (xqbgew['errMsg']['indexOf']('file already exists') != -0x1) t_hn['readSync'](t_hn['fileListName'], 'utf8', bz8l6u);else bz8l6u != null && bz8l6u['runWith']([0x1, xqbgew]);
        } });
    }, t_hn['readSync'] = function (ns4o3$, kcv05, majcd0, yl1zh6) {
      kcv05 === void 0x0 && (kcv05 = 'ascill'), yl1zh6 === void 0x0 && (yl1zh6 = '');var t423no = t_hn['getFileNativePath'](ns4o3$),
          ylu6;try {
        ylu6 = t_hn['fs']['readFileSync'](t423no), majcd0 != null && majcd0['runWith']([0x0, { 'data': ylu6 }]);
      } catch (cj0mdk) {
        majcd0 != null && majcd0['runWith']([0x1]);
      }
    }, t_hn['readCache'] = function () {}, t_hn['writeCache'] = function (lz68u) {
      var y62_h = readyUrl['split']('?')[0x0];t_hn['filesListObj'][y62_h] = { 'md5': md5Name, 'readyUrl': readyUrl }, t_hn['fs']['writeFile']({ 'filePath': t_hn['fileNativeDir'] + '/' + t_hn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t_hn['filesListObj']), 'success': function (nt_34) {}, 'fail': function (u8b6) {} });
    }, t_hn['setNativeFileDir'] = function (gqb8we) {
      t_hn['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gqb8we;
    }, t_hn['filesListObj'] = {}, t_hn['fileNativeDir'] = null, t_hn['fileListName'] = 'layaairfiles.txt', t_hn['ziyuFileData'] = {}, hzy6ul(t_hn, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), t_hn;
  }(elzu8b),
      $n34o = function (xwgvq) {
    function hzy() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], hzy['__super']['call'](this), this['_sound'] = hzy['_createSound']();
    }s$o3i4(hzy, 'laya.wx.mini.MiniSound', xwgvq);var cmk57 = hzy['prototype'];return cmk57['load'] = function (y6lh1) {
      var zl8bu6 = this;y6lh1 = bqxwg['formatURL'](y6lh1), this['url'] = y6lh1;if (hzy['_audioCache'][y6lh1]) {
        this['event']('complete');return;
      }function _nt() {
        if (hzy['_null'] != undefined) zl8bu6['_sound']['onCanplay'](hzy['_null']), zl8bu6['_sound']['onError'](hzy['_null']);else try {
          zl8bu6['_sound']['onCanplay'](null), zl8bu6['_sound']['onError'](null), hzy['_null'] = null;
        } catch (qbeg8w) {
          console['warn']('[wxmini] _clearSound:' + qbeg8w), zl8bu6['_sound']['onCanplay'](ir$9f), zl8bu6['_sound']['onError'](ir$9f), hzy['_null'] = ir$9f;
        }
      }function n4s$3() {
        _nt(), f4o$i['loaded'] = !![], f4o$i['event']('complete'), hzy['_audioCache'][f4o$i['url']] = f4o$i;
      }function dcjk(qb8ule) {
        console['error']('errCode=' + qb8ule['errCode'] + '  errMsg=' + qb8ule['errMsg']), _nt(), f4o$i['event']('error');
      }function ir$9f() {}this['_sound']['onCanplay'](n4s$3), this['_sound']['onError'](dcjk), this['_sound']['src'] = y6lh1;var f4o$i = this;
    }, cmk57['play'] = function (dc0k7, eqgwpx) {
      dc0k7 === void 0x0 && (dc0k7 = 0x0), eqgwpx === void 0x0 && (eqgwpx = 0x0);var e8ubl;if (this['url'] == zu8lbe['_tMusic']) {
        if (!hzy['_musicAudio']) hzy['_musicAudio'] = hzy['_createSound']();e8ubl = hzy['_musicAudio'];
      } else e8ubl = hzy['_createSound']();e8ubl['src'] = this['url'];var xqebg = new geqp(e8ubl);return xqebg['url'] = this['url'], xqebg['loops'] = eqgwpx, xqebg['startTime'] = dc0k7, xqebg['play'](), zu8lbe['addChannel'](xqebg), xqebg;
    }, cmk57['dispose'] = function () {
      var ebw8uq = hzy['_audioCache'][this['url']];ebw8uq && (ebw8uq['src'] = '', delete hzy['_audioCache'][this['url']]);
    }, n2t1h(0x0, cmk57, 'duration', function () {
      return this['_sound']['duration'];
    }), hzy['_createSound'] = function () {
      return hzy['_id']++, $o34tn['window']['wx']['createInnerAudioContext']();
    }, hzy['_musicAudio'] = null, hzy['_id'] = 0x0, hzy['_audioCache'] = {}, hzy['_null'] = undefined, hzy;
  }(elzu8b),
      geqp = function (ck5) {
    function ublz8e(l86zu) {
      this['_audio'] = null, this['_onEnd'] = null, ublz8e['__super']['call'](this), this['_audio'] = l86zu, this['_onEnd'] = yt_['bind'](this['__onEnd'], this), l86zu['onEnded'](this['_onEnd']);
    }s$o3i4(ublz8e, 'laya.wx.mini.MiniSoundChannel', ck5);var ulbq = ublz8e['prototype'];return ulbq['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (o$3t4['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ulbq['__onNull'] = function () {}, ulbq['play'] = function () {
      this['isStopped'] = ![], zu8lbe['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ulbq['stop'] = function () {
      this['isStopped'] = !![], zu8lbe['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ublz8e['_null'] != undefined) this['_audio']['onEnded'](ublz8e['_null']);else try {
        this['_audio']['onEnded'](null), ublz8e['_null'] = null;
      } catch (lu6yz8) {
        console['warn']('[wxmini] stop:' + lu6yz8), this['_audio']['onEnded'](yt_['bind'](this['__onNull'], this)), ublz8e['_null'] = yt_['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ulbq['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ulbq['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], zu8lbe['addChannel'](this), this['_audio']['play']();
    }, n2t1h(0x0, ulbq, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), n2t1h(0x0, ulbq, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), n2t1h(0x0, ulbq, 'volume', function () {
      return 0x1;
    }, function (gvp5x) {}), ublz8e['_null'] = undefined, ublz8e;
  }(n4$so);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ckjm0 in Laya) {
    var n21t3_ = Laya[ckjm0];n21t3_ && n21t3_['__isclass'] && (exports[ckjm0] = n21t3_);
  }
});