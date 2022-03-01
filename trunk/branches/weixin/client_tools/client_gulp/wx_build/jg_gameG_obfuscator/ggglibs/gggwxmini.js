var m = wx.$g;
(function (window, document, ibaxh5) {
  var ib05_p = ibaxh5['un'],
      lq8g = ibaxh5['uns'],
      ec7vgq = ibaxh5['static'],
      p0fb = ibaxh5['class'],
      fd4to = ibaxh5['getset'],
      z2drj6 = ibaxh5['__newvec'],
      $zj2 = laya['utils']['Browser'],
      qyvwe = laya['events']['Event'],
      rzd = laya['events']['EventDispatcher'],
      o3tf_ = laya['resource']['HTMLImage'],
      awkhx = laya['utils']['Handler'],
      ywe7kv = laya['display']['Input'],
      z63o2d = laya['net']['Loader'],
      _0i5p = laya['maths']['Matrix'],
      $ru6j = laya['renders']['Render'],
      xk1ahi = laya['utils']['RunDriver'],
      pxab5i = laya['media']['Sound'],
      p_40tf = laya['media']['SoundChannel'],
      jur2 = laya['media']['SoundManager'],
      m6$urj = laya['display']['Stage'],
      yve7g = laya['net']['URL'],
      glc9 = laya['utils']['Utils'],
      _40tf = function () {
    function _4fp0t() {}return p0fb(_4fp0t, 'laya.wx.mini.MiniAdpter'), _4fp0t['getJson'] = function (rjd6z) {
      return JSON['parse'](rjd6z);
    }, _4fp0t['init'] = function (qyvw, e7vqc) {
      qyvw === void 0x0 && (qyvw = ![]), e7vqc === void 0x0 && (e7vqc = ![]);if (_4fp0t['_inited']) return;_4fp0t['window'] = window;if (_4fp0t['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;_4fp0t['_inited'] = !![], _4fp0t['isZiYu'] = e7vqc, _4fp0t['isPosMsgYu'] = qyvw, _4fp0t['EnvConfig'] = {}, !_4fp0t['isZiYu'] && (sc8lq['setNativeFileDir']('/layaairGame'), sc8lq['existDir'](sc8lq['fileNativeDir'], awkhx['create'](_4fp0t, _4fp0t['onMkdirCallBack']))), _4fp0t['window']['focus'] = function () {}, ibaxh5['getUrlPath'] = function () {}, _4fp0t['window']['logtime'] = function (ykhew) {}, _4fp0t['window']['alertTimeLog'] = function (j62$z) {}, _4fp0t['window']['resetShareInfo'] = function () {}, _4fp0t['window']['CanvasRenderingContext2D'] = function () {}, _4fp0t['window']['CanvasRenderingContext2D']['prototype'] = _4fp0t['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], _4fp0t['window']['document']['body']['appendChild'] = function () {}, _4fp0t['EnvConfig']['pixelRatioInt'] = 0x0, xk1ahi['getPixelRatio'] = _4fp0t['pixelRatio'], _4fp0t['_preCreateElement'] = $zj2['createElement'], $zj2['createElement'] = _4fp0t['createElement'], xk1ahi['createShaderCondition'] = _4fp0t['createShaderCondition'], glc9['parseXMLFromString'] = _4fp0t['parseXMLFromString'], ywe7kv['_createInputElement'] = ew1h['_createInputElement'], _4fp0t['EnvConfig']['load'] = z63o2d['prototype']['load'], z63o2d['prototype']['load'] = scv7g['prototype']['load'], _4fp0t['isZiYu'] && qyvw && wx['onMessage'](function (yvq7ew) {
        yvq7ew['isLoad'] && (sc8lq['ziyuFileData'][yvq7ew['url']] = yvq7ew['data']);
      });
    }, _4fp0t['onMkdirCallBack'] = function (bf05_, g7vcqe) {
      if (!bf05_) sc8lq['filesListObj'] = JSON['parse'](g7vcqe['data']);
    }, _4fp0t['pixelRatio'] = function () {
      if (!_4fp0t['EnvConfig']['pixelRatioInt']) try {
        var ipa5xb = wx['getSystemInfoSync']();return _4fp0t['EnvConfig']['pixelRatioInt'] = ipa5xb['pixelRatio'], ipa5xb = ipa5xb, ipa5xb['pixelRatio'];
      } catch (j2zr$6) {}return _4fp0t['EnvConfig']['pixelRatioInt'];
    }, _4fp0t['createElement'] = function (drz26) {
      if (drz26 == 'canvas') {
        var _bp0i;return _4fp0t['idx'] == 0x1 ? _4fp0t['isZiYu'] ? (_bp0i = sharedCanvas, _bp0i['style'] = {}) : _bp0i = window['canvas'] : _bp0i = window['wx']['createCanvas'](), _4fp0t['idx']++, _bp0i;
      } else {
        if (drz26 == 'textarea' || drz26 == 'input') return _4fp0t['onCreateInput'](drz26);else {
          if (drz26 == 'div') {
            var dz3o6 = _4fp0t['_preCreateElement'](drz26);return dz3o6['contains'] = function (tf3do4) {
              return null;
            }, dz3o6['removeChild'] = function (sg8l9c) {}, dz3o6;
          } else return _4fp0t['_preCreateElement'](drz26);
        }
      }
    }, _4fp0t['onCreateInput'] = function (_tf30) {
      var q7cve = _4fp0t['_preCreateElement'](_tf30);return q7cve['focus'] = ew1h['wxinputFocus'], q7cve['blur'] = ew1h['wxinputblur'], q7cve['style'] = {}, q7cve['value'] = 0x0, q7cve['parentElement'] = {}, q7cve['placeholder'] = {}, q7cve['type'] = {}, q7cve['setColor'] = function (j6m$) {}, q7cve['setType'] = function (jr$z26) {}, q7cve['setFontFace'] = function (iah5bx) {}, q7cve['addEventListener'] = function (xih1ka) {}, q7cve['contains'] = function (zjr2) {
        return null;
      }, q7cve['removeChild'] = function (_0bpi) {}, q7cve;
    }, _4fp0t['createShaderCondition'] = function (biap0) {
      var f_0tp4 = this,
          p5axi = function () {
        var xia1h5 = biap0;return f_0tp4[biap0['replace']('this.', '')];
      };return p5axi;
    }, _4fp0t['EnvConfig'] = null, _4fp0t['window'] = null, _4fp0t['_preCreateElement'] = null, _4fp0t['_inited'] = ![], _4fp0t['wxRequest'] = null, _4fp0t['systemInfo'] = null, _4fp0t['version'] = '0.0.1', _4fp0t['isZiYu'] = ![], _4fp0t['isPosMsgYu'] = ![], _4fp0t['parseXMLFromString'] = function (t4do) {
      var _0t3f4, $j6r2;t4do = t4do['replace'](/>\s+</g, '><');try {
        _0t3f4 = new window['Parser']['DOMParser']()['parseFromString'](t4do, 'text/xml');
      } catch (f40tp) {
        throw '需要引入xml解析库文件';
      }return _0t3f4;
    }, _4fp0t['idx'] = 0x1, _4fp0t;
  }(),
      ax5hi1 = function () {
    function i5axhb() {}p0fb(i5axhb, 'laya.wx.mini.MiniImage');var sgc9 = i5axhb['prototype'];return sgc9['_loadImage'] = function (cqvg7s) {
      var kaxhi = this,
          s7qgcv = ![];cqvg7s['indexOf']('layaNativeDir/') == -0x1 && (s7qgcv = !![], cqvg7s = yve7g['formatURL'](cqvg7s));if (!sc8lq['getFileInfo'](cqvg7s)) {
        if (cqvg7s['indexOf']('http://') != -0x1 || cqvg7s['indexOf']('https://') != -0x1) sc8lq['downImg'](cqvg7s, new awkhx(i5axhb, i5axhb['onDownImgCallBack'], [cqvg7s, kaxhi]), cqvg7s);else i5axhb['onCreateImage'](cqvg7s, kaxhi, !![]);
      } else i5axhb['onCreateImage'](cqvg7s, kaxhi, !s7qgcv);
    }, i5axhb['onDownImgCallBack'] = function (whkxy1, k1x, drz2o6) {
      if (!drz2o6) i5axhb['onCreateImage'](whkxy1, k1x);else k1x['onError'](null);
    }, i5axhb['onCreateImage'] = function (or26d, axkwh, b_5f) {
      b_5f === void 0x0 && (b_5f = ![]);var b0pi;if (!b_5f) {
        var p5ia = sc8lq['getFileInfo'](or26d),
            bp_f50 = p5ia['md5'];b0pi = sc8lq['getFileNativePath'](bp_f50);
      } else b0pi = or26d;if (axkwh['imgCache'] == null) axkwh['imgCache'] = {};var ap0ib;function djrz26() {
        ap0ib['onload'] = null, ap0ib['onerror'] = null, delete axkwh['imgCache'][or26d];
      };var h1ia5x = function () {
        djrz26(), axkwh['onLoaded'](ap0ib);
      },
          rd2z = function () {
        djrz26(), axkwh['event']('error', 'Load image failed');
      };axkwh['_type'] == 'nativeimage' ? (ap0ib = new $zj2['window']['Image'](), ap0ib['crossOrigin'] = '', ap0ib['onload'] = h1ia5x, ap0ib['onerror'] = rd2z, ap0ib['src'] = b0pi, axkwh['imgCache'][or26d] = ap0ib) : new o3tf_['create'](b0pi, { 'onload': h1ia5x, 'onerror': rd2z, 'onCreate': function (i5bxp) {
          ap0ib = i5bxp, axkwh['imgCache'][or26d] = i5bxp;
        } });
    }, i5axhb;
  }(),
      ew1h = function () {
    function q7gcve() {}return p0fb(q7gcve, 'laya.wx.mini.MiniInput'), q7gcve['_createInputElement'] = function () {
      ywe7kv['_initInput'](ywe7kv['area'] = $zj2['createElement']('textarea')), ywe7kv['_initInput'](ywe7kv['input'] = $zj2['createElement']('input')), ywe7kv['inputContainer'] = $zj2['createElement']('div'), ywe7kv['inputContainer']['style']['position'] = 'absolute', ywe7kv['inputContainer']['style']['zIndex'] = 0x186a0, $zj2['container']['appendChild'](ywe7kv['inputContainer']), ywe7kv['inputContainer']['setPos'] = function (xw1khy, j$2u6) {
        ywe7kv['inputContainer']['style']['left'] = xw1khy + 'px', ywe7kv['inputContainer']['style']['top'] = j$2u6 + 'px';
      }, ibaxh5['stage']['on']('resize', null, q7gcve['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (rj6dz2) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), jur2['_soundClass'] = od43tf, jur2['_musicClass'] = od43tf;
    }, q7gcve['_onStageResize'] = function () {
      var _p0fb5 = ibaxh5['stage']['_canvasTransform']['identity']();_p0fb5['scale']($zj2['width'] / $ru6j['canvas']['width'] / xk1ahi['getPixelRatio'](), $zj2['height'] / $ru6j['canvas']['height'] / xk1ahi['getPixelRatio']());
    }, q7gcve['wxinputFocus'] = function (l98c) {
      var ixapb5 = ywe7kv['inputElement']['target'];if (ixapb5 && !ixapb5['editable']) return;_40tf['window']['wx']['offKeyboardConfirm'](), _40tf['window']['wx']['offKeyboardInput'](), _40tf['window']['wx']['showKeyboard']({ 'defaultValue': ixapb5['text'], 'maxLength': ixapb5['maxChars'], 'multiple': ixapb5['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (yq7ev) {}, 'fail': function (otf3d4) {} }), _40tf['window']['wx']['onKeyboardConfirm'](function (scvq7) {
        var fp4t_ = scvq7 ? scvq7['value'] : '';ixapb5['text'] = fp4t_, ixapb5['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _40tf['window']['wx']['onKeyboardInput'](function (e7yvw) {
        var sq7 = e7yvw ? e7yvw['value'] : '';if (!ixapb5['multiline']) {
          if (sq7['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ixapb5['text'] = sq7, ixapb5['event']('input');
      });
    }, q7gcve['inputEnter'] = function () {
      ywe7kv['inputElement']['target']['focus'] = ![];
    }, q7gcve['wxinputblur'] = function () {
      q7gcve['hideKeyboard']();
    }, q7gcve['hideKeyboard'] = function () {
      _40tf['window']['wx']['offKeyboardConfirm'](), _40tf['window']['wx']['offKeyboardInput'](), _40tf['window']['wx']['hideKeyboard']({ 'success': function (kwehy) {
          console['log']('隐藏键盘');
        }, 'fail': function (ekwvy1) {
          console['log']('隐藏键盘出错:' + (ekwvy1 ? ekwvy1['errMsg'] : ''));
        } });
    }, q7gcve;
  }(),
      scv7g = function () {
    function sgq7cv() {}p0fb(sgq7cv, 'laya.wx.mini.MiniLoader');var b0_tfp = sgq7cv['prototype'];return b0_tfp['load'] = function (zrd6j2, h1xwa, j26u, a5pib0, gs78cq) {
      j26u === void 0x0 && (j26u = !![]), gs78cq === void 0x0 && (gs78cq = ![]);var kw1yh = this;kw1yh['_url'] = zrd6j2;if (zrd6j2['indexOf']('data:image') === 0x0) kw1yh['_type'] = h1xwa = 'image';else kw1yh['_type'] = h1xwa || (h1xwa = kw1yh['getTypeFromUrl'](zrd6j2));kw1yh['_cache'] = j26u, kw1yh['_data'] = null;var f3t4d = 'ascii';if (zrd6j2['indexOf']('.fnt') != -0x1) f3t4d = 'utf8';else h1xwa == 'arraybuffer' && (f3t4d = '');;var c9g8l = glc9['getFileExtension'](zrd6j2);if (sgq7cv['_fileTypeArr']['indexOf'](c9g8l) != -0x1) _40tf['EnvConfig']['load']['call'](this, zrd6j2, h1xwa, j26u, a5pib0, gs78cq);else {
        if (!sc8lq['getFileInfo'](zrd6j2)) {
          if (zrd6j2['indexOf']('layaNativeDir/') != -0x1) {
            if (_40tf['isZiYu']) {
              var qgy = sc8lq['ziyuFileData'][zrd6j2];kw1yh['onLoaded'](qgy);return;
            } else {
              cosnole['log']('read read'), sc8lq['read'](zrd6j2, f3t4d, new awkhx(sgq7cv, sgq7cv['onReadNativeCallBack'], [f3t4d, zrd6j2, h1xwa, j26u, a5pib0, gs78cq, kw1yh]));return;
            }
          }if (yve7g['rootPath'] == '') var cev7g = zrd6j2;else cev7g = zrd6j2['split'](yve7g['rootPath'])[0x0];zrd6j2['indexOf']('http://') != -0x1 || zrd6j2['indexOf']('https://') != -0x1 ? _40tf['EnvConfig']['load']['call'](kw1yh, zrd6j2, h1xwa, j26u, a5pib0, gs78cq) : sc8lq['readFile'](cev7g, f3t4d, new awkhx(sgq7cv, sgq7cv['onReadNativeCallBack'], [f3t4d, zrd6j2, h1xwa, j26u, a5pib0, gs78cq, kw1yh]), zrd6j2);
        } else _40tf['EnvConfig']['load']['call'](this, zrd6j2, h1xwa, j26u, a5pib0, gs78cq);
      }
    }, b0_tfp['resMgrLoad'] = function (k1ixh, g8l9c, xhaw1k, paib50, vq7ye, mrj$u, z2d34o) {
      xhaw1k === void 0x0 && (xhaw1k = 0x0), paib50 === void 0x0 && (paib50 = ![]), vq7ye === void 0x0 && (vq7ye = ![]), mrj$u === void 0x0 && (mrj$u = 0x0), z2d34o === void 0x0 && (z2d34o = 0x3), k1ixh['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', k1ixh), _40tf['EnvConfig']['resMgrLoad'](k1ixh, (do43z2, eqvyg, _t4f0) => {
        sgq7cv['prototype']['resMgrLoadCallBack'](do43z2, eqvyg, _t4f0, g8l9c);
      }, xhaw1k, paib50, vq7ye, mrj$u, z2d34o);
    }, b0_tfp['resMgrLoadCallBack'] = function (t034f_, t4pf0_, wykhx1, bx5pia) {
      console['log']('buff:::', t034f_, wykhx1, sc8lq['fileNativeDir'] + '///' + sc8lq['fileListName']), bx5pia(t034f_, t4pf0_, wykhx1);
    }, b0_tfp['clearRes'] = function (r$6zj2, apbi5x) {
      apbi5x === void 0x0 && (apbi5x = ![]);var o43zd = this;o43zd['clearRes'](r$6zj2, apbi5x);var r2dz = sc8lq['getFileInfo'](r$6zj2);if (r2dz && (r$6zj2['indexOf']('http://') != -0x1 || r$6zj2['indexOf']('https://') != -0x1)) {
        var gslc8q = r2dz['md5'],
            h1kwy = sc8lq['getFileNativePath'](gslc8q);sc8lq['remove'](h1kwy);
      }
    }, sgq7cv['onReadNativeCallBack'] = function ($rj6m, x5piba, gcs7q, y7wkv, v7ecgq, yqevw7, jr62z$, cg8q7, z4o3td) {
      y7wkv === void 0x0 && (y7wkv = !![]), yqevw7 === void 0x0 && (yqevw7 = ![]), cg8q7 === void 0x0 && (cg8q7 = 0x0);if (!cg8q7) {
        var d3zo42;if (gcs7q == 'json' || gcs7q == 'atlas') d3zo42 = _40tf['getJson'](z4o3td['data']);else gcs7q == 'xml' ? d3zo42 = glc9['parseXMLFromString'](z4o3td['data']) : d3zo42 = z4o3td['data'];jr62z$['onLoaded'](d3zo42), !_40tf['isZiYu'] && _40tf['isPosMsgYu'] && gcs7q != 'arraybuffer' && wx['postMessage']({ 'url': x5piba, 'data': d3zo42, 'isLoad': !![] });
      } else cg8q7 == 0x1 && _40tf['EnvConfig']['load']['call'](jr62z$, x5piba, gcs7q, y7wkv, v7ecgq, yqevw7);
    }, ec7vgq(sgq7cv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), sgq7cv;
  }(),
      sc8lq = function (x1aih) {
    function b0ap() {
      b0ap['__super']['call'](this);;
    }return p0fb(b0ap, 'laya.wx.mini.MiniFileMgr', x1aih), b0ap['isLoadFile'] = function (yewqv) {
      return b0ap['_fileTypeArr']['indexOf'](yewqv) != -0x1 ? !![] : ![];
    }, b0ap['getFileInfo'] = function (pf40_) {
      var fod34 = pf40_['split']('?')[0x0],
          ft_b0 = b0ap['filesListObj'][fod34];if (ft_b0 == null) return null;else return ft_b0;return null;
    }, b0ap['onFileUpdate'] = function (d3tfo4, do34zt) {
      var ip0 = d3tfo4['split']('/'),
          to34z = ip0[ip0['length'] - 0x1],
          bi5p0a = b0ap['getFileInfo'](do34zt);if (bi5p0a == null) b0ap['onSaveFile'](do34zt, to34z);else {
        if (bi5p0a['readyUrl'] != do34zt) b0ap['remove'](to34z, do34zt);
      }
    }, b0ap['exits'] = function (p_b50i, khxi1a) {
      var _05bfp = b0ap['getFileNativePath'](p_b50i);b0ap['fs']['getFileInfo']({ 'filePath': _05bfp, 'success': function (u$6jm) {
          khxi1a != null && khxi1a['runWith']([0x0, u$6jm]);
        }, 'fail': function (djz6r) {
          khxi1a != null && khxi1a['runWith']([0x1, djz6r]);
        } });
    }, b0ap['read'] = function (g7yq, f4o3_t, f43t, ur2$j6) {
      f4o3_t === void 0x0 && (f4o3_t = 'ascill'), ur2$j6 === void 0x0 && (ur2$j6 = '');var vk1ewy;ur2$j6 != '' ? vk1ewy = b0ap['getFileNativePath'](g7yq) : vk1ewy = g7yq, b0ap['fs']['readFile']({ 'filePath': vk1ewy, 'encoding': f4o3_t, 'success': function (dzo26r) {
          f43t != null && f43t['runWith']([0x0, dzo26r]);
        }, 'fail': function (pax5bi) {
          if (pax5bi && ur2$j6 != '') b0ap['down'](ur2$j6, f4o3_t, f43t, ur2$j6);else f43t != null && f43t['runWith']([0x1]);
        } });
    }, b0ap['readNativeFile'] = function ($6rum, vyewk7) {
      b0ap['fs']['readFile']({ 'filePath': $6rum, 'encoding': '', 'success': function (_5fbp0) {
          vyewk7 != null && vyewk7['runWith']([0x0]);
        }, 'fail': function (pixa5) {
          vyewk7 != null && vyewk7['runWith']([0x1]);
        } });
    }, b0ap['down'] = function (od24z, wh1kye, r$j6z, zt3d) {
      wh1kye === void 0x0 && (wh1kye = 'ascill'), zt3d === void 0x0 && (zt3d = '');var hx1yk = b0ap['getFileNativePath'](zt3d),
          keyw7v = b0ap['wxdown']({ 'url': od24z, 'filePath': hx1yk, 'success': function (z6o3d) {
          if (z6o3d['statusCode'] === 0xc8) b0ap['readFile'](z6o3d['filePath'], wh1kye, r$j6z, zt3d);
        }, 'fail': function (kyw1xh) {
          r$j6z != null && r$j6z['runWith']([0x1, kyw1xh]);
        } });keyw7v['onProgressUpdate'](function (s8g9lc) {
        r$j6z != null && r$j6z['runWith']([0x2, s8g9lc['progress']]);
      });
    }, b0ap['readFile'] = function (s7cvq, o62dr, whek, hx1wka) {
      o62dr === void 0x0 && (o62dr = 'ascill'), hx1wka === void 0x0 && (hx1wka = ''), b0ap['fs']['readFile']({ 'filePath': s7cvq, 'encoding': o62dr, 'success': function (yevq) {
          if (s7cvq['indexOf']('http://') != -0x1 || s7cvq['indexOf']('https://') != -0x1) b0ap['onFileUpdate'](s7cvq, hx1wka);whek != null && whek['runWith']([0x0, yevq]);
        }, 'fail': function (wk1evy) {
          if (wk1evy) whek != null && whek['runWith']([0x1, wk1evy]);
        } });
    }, b0ap['downImg'] = function (j$u6r2, zd2jr, ibpa50) {
      ibpa50 === void 0x0 && (ibpa50 = '');var qvcge = b0ap['wxdown']({ 'url': j$u6r2, 'success': function (c7gsq) {
          c7gsq['statusCode'] === 0xc8 && b0ap['copyFile'](c7gsq['tempFilePath'], ibpa50, zd2jr);
        }, 'fail': function (xbapi) {
          zd2jr != null && zd2jr['runWith']([0x1, xbapi]);
        } });
    }, b0ap['copyFile'] = function (ia1hx5, f_5pb0, ah51xi) {
      var vgscq = ia1hx5['split']('/'),
          ibxha = vgscq[vgscq['length'] - 0x1],
          qe7gy = f_5pb0['split']('?')[0x0],
          xipa = b0ap['getFileInfo'](f_5pb0),
          g87cs = b0ap['getFileNativePath'](ibxha);b0ap['fs']['copyFile']({ 'srcPath': ia1hx5, 'destPath': g87cs, 'success': function (h1kyew) {
          if (!xipa) b0ap['onSaveFile'](f_5pb0, ibxha), ah51xi != null && ah51xi['runWith']([0x0]);else {
            if (xipa['readyUrl'] != f_5pb0) b0ap['remove'](ibxha, f_5pb0, ah51xi);
          }
        }, 'fail': function (rd26zj) {
          ah51xi != null && ah51xi['runWith']([0x1, rd26zj]);
        } });
    }, b0ap['getFileNativePath'] = function (gsc7q) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gsc7q;
    }, b0ap['remove'] = function (u$2, uj6mr, o4zd3) {
      uj6mr === void 0x0 && (uj6mr = '');var i5x = b0ap['getFileInfo'](uj6mr),
          ujmr6$ = b0ap['getFileNativePath'](i5x['md5']);ibaxh5['loader']['clearRes'](i5x['readyUrl']), b0ap['fs']['unlink']({ 'filePath': ujmr6$, 'success': function (ot_f34) {
          if (uj6mr != '') b0ap['onSaveFile'](uj6mr, u$2);o4zd3 != null && o4zd3['runWith']([0x0]);
        }, 'fail': function (dzo4) {} });
    }, b0ap['onSaveFile'] = function (ixpba5, evw7ky) {
      var wv7 = ixpba5['split']('?')[0x0];b0ap['filesListObj'][wv7] = { 'md5': evw7ky, 'readyUrl': ixpba5 }, b0ap['fs']['writeFile']({ 'filePath': b0ap['fileNativeDir'] + '/' + b0ap['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](b0ap['filesListObj']), 'success': function (hkyew1) {
          console['log']('写入测试测试成功：', hkyew1);
        }, 'fail': function (svg7q) {
          console['log']('写入测试测试失败：', svg7q);
        } });
    }, b0ap['existDir'] = function (or2z6, bai50) {
      b0ap['fs']['mkdir']({ 'dirPath': or2z6, 'success': function (pb0i5_) {
          bai50 != null && bai50['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (jd26r) {
          if (jd26r['errMsg']['indexOf']('file already exists') != -0x1) b0ap['readSync'](b0ap['fileListName'], 'utf8', bai50);else bai50 != null && bai50['runWith']([0x1, jd26r]);
        } });
    }, b0ap['readSync'] = function (do26rz, eh1kyw, m6ju$r, q7y) {
      eh1kyw === void 0x0 && (eh1kyw = 'ascill'), q7y === void 0x0 && (q7y = '');var eq7ywv = b0ap['getFileNativePath'](do26rz),
          j6z2r;try {
        j6z2r = b0ap['fs']['readFileSync'](eq7ywv), m6ju$r != null && m6ju$r['runWith']([0x0, { 'data': j6z2r }]);
      } catch (evgyq7) {
        m6ju$r != null && m6ju$r['runWith']([0x1]);
      }
    }, b0ap['readCache'] = function () {}, b0ap['writeCache'] = function (ipa5x) {
      var gevcq7 = readyUrl['split']('?')[0x0];b0ap['filesListObj'][gevcq7] = { 'md5': md5Name, 'readyUrl': readyUrl }, b0ap['fs']['writeFile']({ 'filePath': b0ap['fileNativeDir'] + '/' + b0ap['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](b0ap['filesListObj']), 'success': function (ozr26d) {}, 'fail': function (lgcs8q) {} });
    }, b0ap['setNativeFileDir'] = function (qvwye) {
      b0ap['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + qvwye;
    }, b0ap['filesListObj'] = {}, b0ap['fileNativeDir'] = null, b0ap['fileListName'] = 'layaairfiles.txt', b0ap['ziyuFileData'] = {}, ec7vgq(b0ap, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), b0ap;
  }(rzd),
      od43tf = function (gsc9l) {
    function f4to_() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], f4to_['__super']['call'](this), this['_sound'] = f4to_['_createSound']();
    }p0fb(f4to_, 'laya.wx.mini.MiniSound', gsc9l);var zr6d2 = f4to_['prototype'];return zr6d2['load'] = function (ywhxk) {
      var scg9l8 = this;ywhxk = yve7g['formatURL'](ywhxk), this['url'] = ywhxk;if (f4to_['_audioCache'][ywhxk]) {
        this['event']('complete');return;
      }function khi1xa() {
        if (f4to_['_null'] != undefined) scg9l8['_sound']['onCanplay'](f4to_['_null']), scg9l8['_sound']['onError'](f4to_['_null']);else try {
          scg9l8['_sound']['onCanplay'](null), scg9l8['_sound']['onError'](null), f4to_['_null'] = null;
        } catch (p5f_0) {
          console['warn']('[wxmini] _clearSound:' + p5f_0), scg9l8['_sound']['onCanplay'](tb_f), scg9l8['_sound']['onError'](tb_f), f4to_['_null'] = tb_f;
        }
      }function pi0ab() {
        khi1xa(), ju26$['loaded'] = !![], ju26$['event']('complete'), f4to_['_audioCache'][ju26$['url']] = ju26$;
      }function ek1vw(y1hek) {
        console['error']('errCode=' + y1hek['errCode'] + '  errMsg=' + y1hek['errMsg']), khi1xa(), ju26$['event']('error');
      }function tb_f() {}this['_sound']['onCanplay'](pi0ab), this['_sound']['onError'](ek1vw), this['_sound']['src'] = ywhxk;var ju26$ = this;
    }, zr6d2['play'] = function (o43tdf, g8q7cs) {
      o43tdf === void 0x0 && (o43tdf = 0x0), g8q7cs === void 0x0 && (g8q7cs = 0x0);var _ip50b;if (this['url'] == jur2['_tMusic']) {
        if (!f4to_['_musicAudio']) f4to_['_musicAudio'] = f4to_['_createSound']();_ip50b = f4to_['_musicAudio'];
      } else _ip50b = f4to_['_createSound']();_ip50b['src'] = this['url'];var ujr6m = new fd3to(_ip50b);return ujr6m['url'] = this['url'], ujr6m['loops'] = g8q7cs, ujr6m['startTime'] = o43tdf, ujr6m['play'](), jur2['addChannel'](ujr6m), ujr6m;
    }, zr6d2['dispose'] = function () {
      var bf0p = f4to_['_audioCache'][this['url']];bf0p && (bf0p['src'] = '', delete f4to_['_audioCache'][this['url']]);
    }, fd4to(0x0, zr6d2, 'duration', function () {
      return this['_sound']['duration'];
    }), f4to_['_createSound'] = function () {
      return f4to_['_id']++, _40tf['window']['wx']['createInnerAudioContext']();
    }, f4to_['_musicAudio'] = null, f4to_['_id'] = 0x0, f4to_['_audioCache'] = {}, f4to_['_null'] = undefined, f4to_;
  }(rzd),
      fd3to = function (vkew1) {
    function xyw(f40t_3) {
      this['_audio'] = null, this['_onEnd'] = null, xyw['__super']['call'](this), this['_audio'] = f40t_3, this['_onEnd'] = glc9['bind'](this['__onEnd'], this), f40t_3['onEnded'](this['_onEnd']);
    }p0fb(xyw, 'laya.wx.mini.MiniSoundChannel', vkew1);var wvkye1 = xyw['prototype'];return wvkye1['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ibaxh5['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, wvkye1['__onNull'] = function () {}, wvkye1['play'] = function () {
      this['isStopped'] = ![], jur2['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, wvkye1['stop'] = function () {
      this['isStopped'] = !![], jur2['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (xyw['_null'] != undefined) this['_audio']['onEnded'](xyw['_null']);else try {
        this['_audio']['onEnded'](null), xyw['_null'] = null;
      } catch (p0_4f) {
        console['warn']('[wxmini] stop:' + p0_4f), this['_audio']['onEnded'](glc9['bind'](this['__onNull'], this)), xyw['_null'] = glc9['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, wvkye1['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, wvkye1['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], jur2['addChannel'](this), this['_audio']['play']();
    }, fd4to(0x0, wvkye1, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), fd4to(0x0, wvkye1, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), fd4to(0x0, wvkye1, 'volume', function () {
      return 0x1;
    }, function (qg7sc) {}), xyw['_null'] = undefined, xyw;
  }(p_40tf);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var z63od in Laya) {
    var e1yv = Laya[z63od];e1yv && e1yv['__isclass'] && (exports[z63od] = e1yv);
  }
});