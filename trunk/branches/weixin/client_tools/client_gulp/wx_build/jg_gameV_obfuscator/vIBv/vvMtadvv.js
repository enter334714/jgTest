var Q = wx.$v;
(function (window, document, xv7gp) {
  var ez8ul = xv7gp['un'],
      k07cv = xv7gp['uns'],
      foi$s = xv7gp['static'],
      ont34 = xv7gp['class'],
      h1ty2 = xv7gp['getset'],
      o4i3 = xv7gp['__newvec'],
      eu8qwb = laya['utils']['Browser'],
      e8bgqw = laya['events']['Event'],
      v7xpk5 = laya['events']['EventDispatcher'],
      n1t_2 = laya['resource']['HTMLImage'],
      kv75xp = laya['utils']['Handler'],
      ewbxqg = laya['display']['Input'],
      qew8bu = laya['net']['Loader'],
      pxv57 = laya['maths']['Matrix'],
      x7k5 = laya['renders']['Render'],
      px57v = laya['utils']['RunDriver'],
      si9$f = laya['media']['Sound'],
      $4siof = laya['media']['SoundChannel'],
      ns3$o = laya['media']['SoundManager'],
      d7mc0k = laya['display']['Stage'],
      vp75g = laya['net']['URL'],
      cdk70 = laya['utils']['Utils'],
      qlebu8 = function () {
    function z8eb() {}return ont34(z8eb, 'laya.wx.mini.MiniAdpter'), z8eb['getJson'] = function ($fis4) {
      return JSON['parse']($fis4);
    }, z8eb['init'] = function (ebgq8, lbqe8u) {
      ebgq8 === void 0x0 && (ebgq8 = ![]), lbqe8u === void 0x0 && (lbqe8u = ![]);if (z8eb['_inited']) return;z8eb['window'] = window;if (z8eb['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;z8eb['_inited'] = !![], z8eb['isZiYu'] = lbqe8u, z8eb['isPosMsgYu'] = ebgq8, z8eb['EnvConfig'] = {}, !z8eb['isZiYu'] && (qpvw['setNativeFileDir']('/layaairGame'), qpvw['existDir'](qpvw['fileNativeDir'], kv75xp['create'](z8eb, z8eb['onMkdirCallBack']))), z8eb['window']['focus'] = function () {}, xv7gp['getUrlPath'] = function () {}, z8eb['window']['logtime'] = function (o32n) {}, z8eb['window']['alertTimeLog'] = function (l8buq) {}, z8eb['window']['resetShareInfo'] = function () {}, z8eb['window']['CanvasRenderingContext2D'] = function () {}, z8eb['window']['CanvasRenderingContext2D']['prototype'] = z8eb['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], z8eb['window']['document']['body']['appendChild'] = function () {}, z8eb['EnvConfig']['pixelRatioInt'] = 0x0, px57v['getPixelRatio'] = z8eb['pixelRatio'], z8eb['_preCreateElement'] = eu8qwb['createElement'], eu8qwb['createElement'] = z8eb['createElement'], px57v['createShaderCondition'] = z8eb['createShaderCondition'], cdk70['parseXMLFromString'] = z8eb['parseXMLFromString'], ewbxqg['_createInputElement'] = qlueb['_createInputElement'], z8eb['EnvConfig']['load'] = qew8bu['prototype']['load'], qew8bu['prototype']['load'] = t12h['prototype']['load'], z8eb['isZiYu'] && ebgq8 && wx['onMessage'](function (_n23t4) {
        _n23t4['isLoad'] && (qpvw['ziyuFileData'][_n23t4['url']] = _n23t4['data']);
      });
    }, z8eb['onMkdirCallBack'] = function (bgwq, yu6l8z) {
      if (!bgwq) qpvw['filesListObj'] = JSON['parse'](yu6l8z['data']);
    }, z8eb['pixelRatio'] = function () {
      if (!z8eb['EnvConfig']['pixelRatioInt']) try {
        var qwpxge = wx['getSystemInfoSync']();return z8eb['EnvConfig']['pixelRatioInt'] = qwpxge['pixelRatio'], qwpxge = qwpxge, qwpxge['pixelRatio'];
      } catch (sio$9) {}return z8eb['EnvConfig']['pixelRatioInt'];
    }, z8eb['createElement'] = function (lu8yz6) {
      if (lu8yz6 == 'canvas') {
        var exgwq;return z8eb['idx'] == 0x1 ? z8eb['isZiYu'] ? (exgwq = sharedCanvas, exgwq['style'] = {}) : exgwq = window['canvas'] : exgwq = window['wx']['createCanvas'](), z8eb['idx']++, exgwq;
      } else {
        if (lu8yz6 == 'textarea' || lu8yz6 == 'input') return z8eb['onCreateInput'](lu8yz6);else {
          if (lu8yz6 == 'div') {
            var s$9fir = z8eb['_preCreateElement'](lu8yz6);return s$9fir['contains'] = function (jc0mk) {
              return null;
            }, s$9fir['removeChild'] = function ($o9fi) {}, s$9fir;
          } else return z8eb['_preCreateElement'](lu8yz6);
        }
      }
    }, z8eb['onCreateInput'] = function (z6yl8u) {
      var h_6y12 = z8eb['_preCreateElement'](z6yl8u);return h_6y12['focus'] = qlueb['wxinputFocus'], h_6y12['blur'] = qlueb['wxinputblur'], h_6y12['style'] = {}, h_6y12['value'] = 0x0, h_6y12['parentElement'] = {}, h_6y12['placeholder'] = {}, h_6y12['type'] = {}, h_6y12['setColor'] = function (cjd0m) {}, h_6y12['setType'] = function ($to34n) {}, h_6y12['setFontFace'] = function (n2_ht1) {}, h_6y12['addEventListener'] = function (ir9$s) {}, h_6y12['contains'] = function (d0mcjk) {
        return null;
      }, h_6y12['removeChild'] = function (l6hy1z) {}, h_6y12;
    }, z8eb['createShaderCondition'] = function (y_h216) {
      var t_n3 = this,
          tn342_ = function () {
        var o3sn$4 = y_h216;return t_n3[y_h216['replace']('this.', '')];
      };return tn342_;
    }, z8eb['EnvConfig'] = null, z8eb['window'] = null, z8eb['_preCreateElement'] = null, z8eb['_inited'] = ![], z8eb['wxRequest'] = null, z8eb['systemInfo'] = null, z8eb['version'] = '0.0.1', z8eb['isZiYu'] = ![], z8eb['isPosMsgYu'] = ![], z8eb['parseXMLFromString'] = function (kd70mc) {
      var p075vk, wvp5x;kd70mc = kd70mc['replace'](/>\s+</g, '><');try {
        p075vk = new window['Parser']['DOMParser']()['parseFromString'](kd70mc, 'text/xml');
      } catch (s$4ofi) {
        throw '需要引入xml解析库文件';
      }return p075vk;
    }, z8eb['idx'] = 0x1, z8eb;
  }(),
      md7ck0 = function () {
    function qebl() {}ont34(qebl, 'laya.wx.mini.MiniImage');var le = qebl['prototype'];return le['_loadImage'] = function (gpw5) {
      var $3ois = this,
          zbel8u = ![];gpw5['indexOf']('layaNativeDir/') == -0x1 && (zbel8u = !![], gpw5 = vp75g['formatURL'](gpw5));if (!qpvw['getFileInfo'](gpw5)) {
        if (gpw5['indexOf']('http://') != -0x1 || gpw5['indexOf']('https://') != -0x1) qpvw['downImg'](gpw5, new kv75xp(qebl, qebl['onDownImgCallBack'], [gpw5, $3ois]), gpw5);else qebl['onCreateImage'](gpw5, $3ois, !![]);
      } else qebl['onCreateImage'](gpw5, $3ois, !zbel8u);
    }, qebl['onDownImgCallBack'] = function (pwqvg, pxegw, $isrf9) {
      if (!$isrf9) qebl['onCreateImage'](pwqvg, pxegw);else pxegw['onError'](null);
    }, qebl['onCreateImage'] = function (y12_t, mcj0dk, no34t$) {
      no34t$ === void 0x0 && (no34t$ = ![]);var zh6_1y;if (!no34t$) {
        var o3i$4 = qpvw['getFileInfo'](y12_t),
            bqelu = o3i$4['md5'];zh6_1y = qpvw['getFileNativePath'](bqelu);
      } else zh6_1y = y12_t;if (mcj0dk['imgCache'] == null) mcj0dk['imgCache'] = {};var n13t2_;function _t1n32() {
        n13t2_['onload'] = null, n13t2_['onerror'] = null, delete mcj0dk['imgCache'][y12_t];
      };var hn1 = function () {
        _t1n32(), mcj0dk['onLoaded'](n13t2_);
      },
          qgp = function () {
        _t1n32(), mcj0dk['event']('error', 'Load image failed');
      };mcj0dk['_type'] == 'nativeimage' ? (n13t2_ = new eu8qwb['window']['Image'](), n13t2_['crossOrigin'] = '', n13t2_['onload'] = hn1, n13t2_['onerror'] = qgp, n13t2_['src'] = zh6_1y, mcj0dk['imgCache'][y12_t] = n13t2_) : new n1t_2['create'](zh6_1y, { 'onload': hn1, 'onerror': qgp, 'onCreate': function (is$3o) {
          n13t2_ = is$3o, mcj0dk['imgCache'][y12_t] = is$3o;
        } });
    }, qebl;
  }(),
      qlueb = function () {
    function v7gp5x() {}return ont34(v7gp5x, 'laya.wx.mini.MiniInput'), v7gp5x['_createInputElement'] = function () {
      ewbxqg['_initInput'](ewbxqg['area'] = eu8qwb['createElement']('textarea')), ewbxqg['_initInput'](ewbxqg['input'] = eu8qwb['createElement']('input')), ewbxqg['inputContainer'] = eu8qwb['createElement']('div'), ewbxqg['inputContainer']['style']['position'] = 'absolute', ewbxqg['inputContainer']['style']['zIndex'] = 0x186a0, eu8qwb['container']['appendChild'](ewbxqg['inputContainer']), ewbxqg['inputContainer']['setPos'] = function (bxgqwe, so$3) {
        ewbxqg['inputContainer']['style']['left'] = bxgqwe + 'px', ewbxqg['inputContainer']['style']['top'] = so$3 + 'px';
      }, xv7gp['stage']['on']('resize', null, v7gp5x['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (t32n1) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ns3$o['_soundClass'] = ulb68z, ns3$o['_musicClass'] = ulb68z;
    }, v7gp5x['_onStageResize'] = function () {
      var y6lz1h = xv7gp['stage']['_canvasTransform']['identity']();y6lz1h['scale'](eu8qwb['width'] / x7k5['canvas']['width'] / px57v['getPixelRatio'](), eu8qwb['height'] / x7k5['canvas']['height'] / px57v['getPixelRatio']());
    }, v7gp5x['wxinputFocus'] = function (s3on) {
      var lu6yh = ewbxqg['inputElement']['target'];if (lu6yh && !lu6yh['editable']) return;qlebu8['window']['wx']['offKeyboardConfirm'](), qlebu8['window']['wx']['offKeyboardInput'](), qlebu8['window']['wx']['showKeyboard']({ 'defaultValue': lu6yh['text'], 'maxLength': lu6yh['maxChars'], 'multiple': lu6yh['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (beq8l) {}, 'fail': function (vgpx75) {} }), qlebu8['window']['wx']['onKeyboardConfirm'](function (kcm75) {
        var xvk7p = kcm75 ? kcm75['value'] : '';lu6yh['text'] = xvk7p, lu6yh['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), qlebu8['window']['wx']['onKeyboardInput'](function (ub8el) {
        var t$4no = ub8el ? ub8el['value'] : '';if (!lu6yh['multiline']) {
          if (t$4no['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }lu6yh['text'] = t$4no, lu6yh['event']('input');
      });
    }, v7gp5x['inputEnter'] = function () {
      ewbxqg['inputElement']['target']['focus'] = ![];
    }, v7gp5x['wxinputblur'] = function () {
      v7gp5x['hideKeyboard']();
    }, v7gp5x['hideKeyboard'] = function () {
      qlebu8['window']['wx']['offKeyboardConfirm'](), qlebu8['window']['wx']['offKeyboardInput'](), qlebu8['window']['wx']['hideKeyboard']({ 'success': function (hn1t2_) {
          console['log']('隐藏键盘');
        }, 'fail': function (n1h2_t) {
          console['log']('隐藏键盘出错:' + (n1h2_t ? n1h2_t['errMsg'] : ''));
        } });
    }, v7gp5x;
  }(),
      t12h = function () {
    function $i9fso() {}ont34($i9fso, 'laya.wx.mini.MiniLoader');var _yh2t1 = $i9fso['prototype'];return _yh2t1['load'] = function (xpwv5, is9f, fs9i$r, p0v75, _nh21) {
      fs9i$r === void 0x0 && (fs9i$r = !![]), _nh21 === void 0x0 && (_nh21 = ![]);var not4$ = this;not4$['_url'] = xpwv5;if (xpwv5['indexOf']('data:image') === 0x0) not4$['_type'] = is9f = 'image';else not4$['_type'] = is9f || (is9f = not4$['getTypeFromUrl'](xpwv5));not4$['_cache'] = fs9i$r, not4$['_data'] = null;var eqbgw8 = 'ascii';if (xpwv5['indexOf']('.fnt') != -0x1) eqbgw8 = 'utf8';else is9f == 'arraybuffer' && (eqbgw8 = '');;var wvgxp = cdk70['getFileExtension'](xpwv5);if ($i9fso['_fileTypeArr']['indexOf'](wvgxp) != -0x1) qlebu8['EnvConfig']['load']['call'](this, xpwv5, is9f, fs9i$r, p0v75, _nh21);else {
        if (!qpvw['getFileInfo'](xpwv5)) {
          if (xpwv5['indexOf']('layaNativeDir/') != -0x1) {
            if (qlebu8['isZiYu']) {
              var t32on = qpvw['ziyuFileData'][xpwv5];not4$['onLoaded'](t32on);return;
            } else {
              cosnole['log']('read read'), qpvw['read'](xpwv5, eqbgw8, new kv75xp($i9fso, $i9fso['onReadNativeCallBack'], [eqbgw8, xpwv5, is9f, fs9i$r, p0v75, _nh21, not4$]));return;
            }
          }if (vp75g['rootPath'] == '') var lz6bu = xpwv5;else lz6bu = xpwv5['split'](vp75g['rootPath'])[0x0];xpwv5['indexOf']('http://') != -0x1 || xpwv5['indexOf']('https://') != -0x1 ? qlebu8['EnvConfig']['load']['call'](not4$, xpwv5, is9f, fs9i$r, p0v75, _nh21) : qpvw['readFile'](lz6bu, eqbgw8, new kv75xp($i9fso, $i9fso['onReadNativeCallBack'], [eqbgw8, xpwv5, is9f, fs9i$r, p0v75, _nh21, not4$]), xpwv5);
        } else qlebu8['EnvConfig']['load']['call'](this, xpwv5, is9f, fs9i$r, p0v75, _nh21);
      }
    }, _yh2t1['resMgrLoad'] = function (z1l6h, ns4, xb, zlbu86, m57c0, e8buql, bzu6l) {
      xb === void 0x0 && (xb = 0x0), zlbu86 === void 0x0 && (zlbu86 = ![]), m57c0 === void 0x0 && (m57c0 = ![]), e8buql === void 0x0 && (e8buql = 0x0), bzu6l === void 0x0 && (bzu6l = 0x3), z1l6h['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', z1l6h), qlebu8['EnvConfig']['resMgrLoad'](z1l6h, (hy6u, k0v7c, $isfo9) => {
        $i9fso['prototype']['resMgrLoadCallBack'](hy6u, k0v7c, $isfo9, ns4);
      }, xb, zlbu86, m57c0, e8buql, bzu6l);
    }, _yh2t1['resMgrLoadCallBack'] = function (i$3os4, zyh61, h_t21, r$si9f) {
      console['log']('buff:::', i$3os4, h_t21, qpvw['fileNativeDir'] + '///' + qpvw['fileListName']), r$si9f(i$3os4, zyh61, h_t21);
    }, _yh2t1['clearRes'] = function (f$s9oi, wgxbqe) {
      wgxbqe === void 0x0 && (wgxbqe = ![]);var pvw5 = this;pvw5['clearRes'](f$s9oi, wgxbqe);var c07d = qpvw['getFileInfo'](f$s9oi);if (c07d && (f$s9oi['indexOf']('http://') != -0x1 || f$s9oi['indexOf']('https://') != -0x1)) {
        var hz6l1 = c07d['md5'],
            qle = qpvw['getFileNativePath'](hz6l1);qpvw['remove'](qle);
      }
    }, $i9fso['onReadNativeCallBack'] = function (u8lzeb, t3n21_, y_62, cj0dk, gq8, aj0mc, p75v0k, dmk0j, pgeqxw) {
      cj0dk === void 0x0 && (cj0dk = !![]), aj0mc === void 0x0 && (aj0mc = ![]), dmk0j === void 0x0 && (dmk0j = 0x0);if (!dmk0j) {
        var bu8ewq;if (y_62 == 'json' || y_62 == 'atlas') bu8ewq = qlebu8['getJson'](pgeqxw['data']);else y_62 == 'xml' ? bu8ewq = cdk70['parseXMLFromString'](pgeqxw['data']) : bu8ewq = pgeqxw['data'];p75v0k['onLoaded'](bu8ewq), !qlebu8['isZiYu'] && qlebu8['isPosMsgYu'] && y_62 != 'arraybuffer' && wx['postMessage']({ 'url': t3n21_, 'data': bu8ewq, 'isLoad': !![] });
      } else dmk0j == 0x1 && qlebu8['EnvConfig']['load']['call'](p75v0k, t3n21_, y_62, cj0dk, gq8, aj0mc);
    }, foi$s($i9fso, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), $i9fso;
  }(),
      qpvw = function (ebql8) {
    function mdk0c() {
      mdk0c['__super']['call'](this);;
    }return ont34(mdk0c, 'laya.wx.mini.MiniFileMgr', ebql8), mdk0c['isLoadFile'] = function (o4t32) {
      return mdk0c['_fileTypeArr']['indexOf'](o4t32) != -0x1 ? !![] : ![];
    }, mdk0c['getFileInfo'] = function (gqxv) {
      var $3sno = gqxv['split']('?')[0x0],
          n4s$o = mdk0c['filesListObj'][$3sno];if (n4s$o == null) return null;else return n4s$o;return null;
    }, mdk0c['onFileUpdate'] = function (djcmk, xwgqb) {
      var b8uqe = djcmk['split']('/'),
          yz16_ = b8uqe[b8uqe['length'] - 0x1],
          os34 = mdk0c['getFileInfo'](xwgqb);if (os34 == null) mdk0c['onSaveFile'](xwgqb, yz16_);else {
        if (os34['readyUrl'] != xwgqb) mdk0c['remove'](yz16_, xwgqb);
      }
    }, mdk0c['exits'] = function (u6ylz8, l16yz) {
      var d7mck0 = mdk0c['getFileNativePath'](u6ylz8);mdk0c['fs']['getFileInfo']({ 'filePath': d7mck0, 'success': function (o9fs$i) {
          l16yz != null && l16yz['runWith']([0x0, o9fs$i]);
        }, 'fail': function (fo$s) {
          l16yz != null && l16yz['runWith']([0x1, fo$s]);
        } });
    }, mdk0c['read'] = function (o4t2n3, e8lubz, v5xw, sio$3) {
      e8lubz === void 0x0 && (e8lubz = 'ascill'), sio$3 === void 0x0 && (sio$3 = '');var mck07d;sio$3 != '' ? mck07d = mdk0c['getFileNativePath'](o4t2n3) : mck07d = o4t2n3, mdk0c['fs']['readFile']({ 'filePath': mck07d, 'encoding': e8lubz, 'success': function (n_2t13) {
          v5xw != null && v5xw['runWith']([0x0, n_2t13]);
        }, 'fail': function (_nt1h2) {
          if (_nt1h2 && sio$3 != '') mdk0c['down'](sio$3, e8lubz, v5xw, sio$3);else v5xw != null && v5xw['runWith']([0x1]);
        } });
    }, mdk0c['readNativeFile'] = function (pv0, z8uebl) {
      mdk0c['fs']['readFile']({ 'filePath': pv0, 'encoding': '', 'success': function (h21y6) {
          z8uebl != null && z8uebl['runWith']([0x0]);
        }, 'fail': function (cmjkd0) {
          z8uebl != null && z8uebl['runWith']([0x1]);
        } });
    }, mdk0c['down'] = function (kc5m7, oi3$, ul8bze, yulhz) {
      oi3$ === void 0x0 && (oi3$ = 'ascill'), yulhz === void 0x0 && (yulhz = '');var cdk7 = mdk0c['getFileNativePath'](yulhz),
          zlbeu = mdk0c['wxdown']({ 'url': kc5m7, 'filePath': cdk7, 'success': function (c7v50k) {
          if (c7v50k['statusCode'] === 0xc8) mdk0c['readFile'](c7v50k['filePath'], oi3$, ul8bze, yulhz);
        }, 'fail': function (z1h6yl) {
          ul8bze != null && ul8bze['runWith']([0x1, z1h6yl]);
        } });zlbeu['onProgressUpdate'](function (mjc) {
        ul8bze != null && ul8bze['runWith']([0x2, mjc['progress']]);
      });
    }, mdk0c['readFile'] = function (kdm0c7, m0c75, k7xp5v, g8qwbe) {
      m0c75 === void 0x0 && (m0c75 = 'ascill'), g8qwbe === void 0x0 && (g8qwbe = ''), mdk0c['fs']['readFile']({ 'filePath': kdm0c7, 'encoding': m0c75, 'success': function (c75mk) {
          if (kdm0c7['indexOf']('http://') != -0x1 || kdm0c7['indexOf']('https://') != -0x1) mdk0c['onFileUpdate'](kdm0c7, g8qwbe);k7xp5v != null && k7xp5v['runWith']([0x0, c75mk]);
        }, 'fail': function (ns$3o4) {
          if (ns$3o4) k7xp5v != null && k7xp5v['runWith']([0x1, ns$3o4]);
        } });
    }, mdk0c['downImg'] = function (dj0km, fos9, s$9oi) {
      s$9oi === void 0x0 && (s$9oi = '');var qwe8bg = mdk0c['wxdown']({ 'url': dj0km, 'success': function (l1z6h) {
          l1z6h['statusCode'] === 0xc8 && mdk0c['copyFile'](l1z6h['tempFilePath'], s$9oi, fos9);
        }, 'fail': function (elqu8b) {
          fos9 != null && fos9['runWith']([0x1, elqu8b]);
        } });
    }, mdk0c['copyFile'] = function (nt_32, _324t, uzble8) {
      var uqb8we = nt_32['split']('/'),
          ewqu8b = uqb8we[uqb8we['length'] - 0x1],
          vxk7p = _324t['split']('?')[0x0],
          $fos9i = mdk0c['getFileInfo'](_324t),
          y1hz6l = mdk0c['getFileNativePath'](ewqu8b);mdk0c['fs']['copyFile']({ 'srcPath': nt_32, 'destPath': y1hz6l, 'success': function (qvw) {
          if (!$fos9i) mdk0c['onSaveFile'](_324t, ewqu8b), uzble8 != null && uzble8['runWith']([0x0]);else {
            if ($fos9i['readyUrl'] != _324t) mdk0c['remove'](ewqu8b, _324t, uzble8);
          }
        }, 'fail': function (dc0km) {
          uzble8 != null && uzble8['runWith']([0x1, dc0km]);
        } });
    }, mdk0c['getFileNativePath'] = function (pg5v7x) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + pg5v7x;
    }, mdk0c['remove'] = function (fr9$s, xvp5, t$4o) {
      xvp5 === void 0x0 && (xvp5 = '');var o2n43 = mdk0c['getFileInfo'](xvp5),
          iso$3 = mdk0c['getFileNativePath'](o2n43['md5']);xv7gp['loader']['clearRes'](o2n43['readyUrl']), mdk0c['fs']['unlink']({ 'filePath': iso$3, 'success': function (hy_26) {
          if (xvp5 != '') mdk0c['onSaveFile'](xvp5, fr9$s);t$4o != null && t$4o['runWith']([0x0]);
        }, 'fail': function ($si43) {} });
    }, mdk0c['onSaveFile'] = function (lb8z, y_t1) {
      var h1y2t = lb8z['split']('?')[0x0];mdk0c['filesListObj'][h1y2t] = { 'md5': y_t1, 'readyUrl': lb8z }, mdk0c['fs']['writeFile']({ 'filePath': mdk0c['fileNativeDir'] + '/' + mdk0c['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mdk0c['filesListObj']), 'success': function (ajmc0d) {
          console['log']('写入测试测试成功：', ajmc0d);
        }, 'fail': function (dckm7) {
          console['log']('写入测试测试失败：', dckm7);
        } });
    }, mdk0c['existDir'] = function (i$4sf, wpqexg) {
      mdk0c['fs']['mkdir']({ 'dirPath': i$4sf, 'success': function (i9fsr$) {
          wpqexg != null && wpqexg['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function ($9rf) {
          if ($9rf['errMsg']['indexOf']('file already exists') != -0x1) mdk0c['readSync'](mdk0c['fileListName'], 'utf8', wpqexg);else wpqexg != null && wpqexg['runWith']([0x1, $9rf]);
        } });
    }, mdk0c['readSync'] = function (q8uwe, zu6l8b, is$f4, irsf) {
      zu6l8b === void 0x0 && (zu6l8b = 'ascill'), irsf === void 0x0 && (irsf = '');var _1zh6y = mdk0c['getFileNativePath'](q8uwe),
          blu8z6;try {
        blu8z6 = mdk0c['fs']['readFileSync'](_1zh6y), is$f4 != null && is$f4['runWith']([0x0, { 'data': blu8z6 }]);
      } catch (i9rsf) {
        is$f4 != null && is$f4['runWith']([0x1]);
      }
    }, mdk0c['readCache'] = function () {}, mdk0c['writeCache'] = function (qebwg) {
      var y261 = readyUrl['split']('?')[0x0];mdk0c['filesListObj'][y261] = { 'md5': md5Name, 'readyUrl': readyUrl }, mdk0c['fs']['writeFile']({ 'filePath': mdk0c['fileNativeDir'] + '/' + mdk0c['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mdk0c['filesListObj']), 'success': function (gxewpq) {}, 'fail': function (m0dcja) {} });
    }, mdk0c['setNativeFileDir'] = function (dajmc) {
      mdk0c['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + dajmc;
    }, mdk0c['filesListObj'] = {}, mdk0c['fileNativeDir'] = null, mdk0c['fileListName'] = 'layaairfiles.txt', mdk0c['ziyuFileData'] = {}, foi$s(mdk0c, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), mdk0c;
  }(v7xpk5),
      ulb68z = function (vx5pw) {
    function t2_yh1() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], t2_yh1['__super']['call'](this), this['_sound'] = t2_yh1['_createSound']();
    }ont34(t2_yh1, 'laya.wx.mini.MiniSound', vx5pw);var pvk750 = t2_yh1['prototype'];return pvk750['load'] = function ($s4o3n) {
      var _6hz1y = this;$s4o3n = vp75g['formatURL']($s4o3n), this['url'] = $s4o3n;if (t2_yh1['_audioCache'][$s4o3n]) {
        this['event']('complete');return;
      }function zbule() {
        if (t2_yh1['_null'] != undefined) _6hz1y['_sound']['onCanplay'](t2_yh1['_null']), _6hz1y['_sound']['onError'](t2_yh1['_null']);else try {
          _6hz1y['_sound']['onCanplay'](null), _6hz1y['_sound']['onError'](null), t2_yh1['_null'] = null;
        } catch (_t13n) {
          console['warn']('[wxmini] _clearSound:' + _t13n), _6hz1y['_sound']['onCanplay'](bl8uqe), _6hz1y['_sound']['onError'](bl8uqe), t2_yh1['_null'] = bl8uqe;
        }
      }function w8bg() {
        zbule(), xv5w['loaded'] = !![], xv5w['event']('complete'), t2_yh1['_audioCache'][xv5w['url']] = xv5w;
      }function egbwq(wg8eb) {
        console['error']('errCode=' + wg8eb['errCode'] + '  errMsg=' + wg8eb['errMsg']), zbule(), xv5w['event']('error');
      }function bl8uqe() {}this['_sound']['onCanplay'](w8bg), this['_sound']['onError'](egbwq), this['_sound']['src'] = $s4o3n;var xv5w = this;
    }, pvk750['play'] = function (n31, d07mck) {
      n31 === void 0x0 && (n31 = 0x0), d07mck === void 0x0 && (d07mck = 0x0);var gx57;if (this['url'] == ns3$o['_tMusic']) {
        if (!t2_yh1['_musicAudio']) t2_yh1['_musicAudio'] = t2_yh1['_createSound']();gx57 = t2_yh1['_musicAudio'];
      } else gx57 = t2_yh1['_createSound']();gx57['src'] = this['url'];var euzb8 = new t213n_(gx57);return euzb8['url'] = this['url'], euzb8['loops'] = d07mck, euzb8['startTime'] = n31, euzb8['play'](), ns3$o['addChannel'](euzb8), euzb8;
    }, pvk750['dispose'] = function () {
      var si9r = t2_yh1['_audioCache'][this['url']];si9r && (si9r['src'] = '', delete t2_yh1['_audioCache'][this['url']]);
    }, h1ty2(0x0, pvk750, 'duration', function () {
      return this['_sound']['duration'];
    }), t2_yh1['_createSound'] = function () {
      return t2_yh1['_id']++, qlebu8['window']['wx']['createInnerAudioContext']();
    }, t2_yh1['_musicAudio'] = null, t2_yh1['_id'] = 0x0, t2_yh1['_audioCache'] = {}, t2_yh1['_null'] = undefined, t2_yh1;
  }(v7xpk5),
      t213n_ = function (exb) {
    function kmj0c(k05vp) {
      this['_audio'] = null, this['_onEnd'] = null, kmj0c['__super']['call'](this), this['_audio'] = k05vp, this['_onEnd'] = cdk70['bind'](this['__onEnd'], this), k05vp['onEnded'](this['_onEnd']);
    }ont34(kmj0c, 'laya.wx.mini.MiniSoundChannel', exb);var a0mdcj = kmj0c['prototype'];return a0mdcj['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (xv7gp['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, a0mdcj['__onNull'] = function () {}, a0mdcj['play'] = function () {
      this['isStopped'] = ![], ns3$o['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, a0mdcj['stop'] = function () {
      this['isStopped'] = !![], ns3$o['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (kmj0c['_null'] != undefined) this['_audio']['onEnded'](kmj0c['_null']);else try {
        this['_audio']['onEnded'](null), kmj0c['_null'] = null;
      } catch (r9sf) {
        console['warn']('[wxmini] stop:' + r9sf), this['_audio']['onEnded'](cdk70['bind'](this['__onNull'], this)), kmj0c['_null'] = cdk70['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, a0mdcj['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, a0mdcj['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ns3$o['addChannel'](this), this['_audio']['play']();
    }, h1ty2(0x0, a0mdcj, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), h1ty2(0x0, a0mdcj, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), h1ty2(0x0, a0mdcj, 'volume', function () {
      return 0x1;
    }, function (n3$4os) {}), kmj0c['_null'] = undefined, kmj0c;
  }($4siof);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var kc7d in Laya) {
    var epg = Laya[kc7d];epg && epg['__isclass'] && (exports[kc7d] = epg);
  }
});