var m = wx.$g;
(function (window, document, q8sc7) {
  var hxa5i = q8sc7['un'],
      d32z6o = q8sc7['uns'],
      x5hbi = q8sc7['static'],
      _t40pf = q8sc7['class'],
      ib_ = q8sc7['getset'],
      f_p0b5 = q8sc7['__newvec'],
      g7vcqs = laya['utils']['Browser'],
      c7qs8 = laya['events']['Event'],
      r2djz = laya['events']['EventDispatcher'],
      f4o_t = laya['resource']['HTMLImage'],
      oz243 = laya['utils']['Handler'],
      jd62r = laya['display']['Input'],
      u6r2$j = laya['net']['Loader'],
      t_40f3 = laya['maths']['Matrix'],
      dz342 = laya['renders']['Render'],
      piab0 = laya['utils']['RunDriver'],
      pf05b_ = laya['media']['Sound'],
      oz24 = laya['media']['SoundChannel'],
      rzdo = laya['media']['SoundManager'],
      g7qcsv = laya['display']['Stage'],
      j6ur$ = laya['net']['URL'],
      pbf_0 = laya['utils']['Utils'],
      i05bp_ = function () {
    function ekv1yw() {}return _t40pf(ekv1yw, 'laya.wx.mini.MiniAdpter'), ekv1yw['getJson'] = function (pba5x) {
      return JSON['parse'](pba5x);
    }, ekv1yw['init'] = function (xwhyk1, z3d4) {
      xwhyk1 === void 0x0 && (xwhyk1 = ![]), z3d4 === void 0x0 && (z3d4 = ![]);if (ekv1yw['_inited']) return;ekv1yw['window'] = window;if (ekv1yw['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ekv1yw['_inited'] = !![], ekv1yw['isZiYu'] = z3d4, ekv1yw['isPosMsgYu'] = xwhyk1, ekv1yw['EnvConfig'] = {}, !ekv1yw['isZiYu'] && (tbf['setNativeFileDir']('/layaairGame'), tbf['existDir'](tbf['fileNativeDir'], oz243['create'](ekv1yw, ekv1yw['onMkdirCallBack']))), ekv1yw['window']['focus'] = function () {}, q8sc7['getUrlPath'] = function () {}, ekv1yw['window']['logtime'] = function (bih5a) {}, ekv1yw['window']['alertTimeLog'] = function (ru62j$) {}, ekv1yw['window']['resetShareInfo'] = function () {}, ekv1yw['window']['CanvasRenderingContext2D'] = function () {}, ekv1yw['window']['CanvasRenderingContext2D']['prototype'] = ekv1yw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ekv1yw['window']['document']['body']['appendChild'] = function () {}, ekv1yw['EnvConfig']['pixelRatioInt'] = 0x0, piab0['getPixelRatio'] = ekv1yw['pixelRatio'], ekv1yw['_preCreateElement'] = g7vcqs['createElement'], g7vcqs['createElement'] = ekv1yw['createElement'], piab0['createShaderCondition'] = ekv1yw['createShaderCondition'], pbf_0['parseXMLFromString'] = ekv1yw['parseXMLFromString'], jd62r['_createInputElement'] = csq8g7['_createInputElement'], ekv1yw['EnvConfig']['load'] = u6r2$j['prototype']['load'], u6r2$j['prototype']['load'] = kevyw['prototype']['load'], ekv1yw['isZiYu'] && xwhyk1 && wx['onMessage'](function (r26z$j) {
        r26z$j['isLoad'] && (tbf['ziyuFileData'][r26z$j['url']] = r26z$j['data']);
      });
    }, ekv1yw['onMkdirCallBack'] = function (b5i_p0, z4tdo3) {
      if (!b5i_p0) tbf['filesListObj'] = JSON['parse'](z4tdo3['data']);
    }, ekv1yw['pixelRatio'] = function () {
      if (!ekv1yw['EnvConfig']['pixelRatioInt']) try {
        var vke7w = wx['getSystemInfoSync']();return ekv1yw['EnvConfig']['pixelRatioInt'] = vke7w['pixelRatio'], vke7w = vke7w, vke7w['pixelRatio'];
      } catch (ax5bih) {}return ekv1yw['EnvConfig']['pixelRatioInt'];
    }, ekv1yw['createElement'] = function (wykxh1) {
      if (wykxh1 == 'canvas') {
        var _pf50;return ekv1yw['idx'] == 0x1 ? ekv1yw['isZiYu'] ? (_pf50 = sharedCanvas, _pf50['style'] = {}) : _pf50 = window['canvas'] : _pf50 = window['wx']['createCanvas'](), ekv1yw['idx']++, _pf50;
      } else {
        if (wykxh1 == 'textarea' || wykxh1 == 'input') return ekv1yw['onCreateInput'](wykxh1);else {
          if (wykxh1 == 'div') {
            var q7sv = ekv1yw['_preCreateElement'](wykxh1);return q7sv['contains'] = function (vgqe) {
              return null;
            }, q7sv['removeChild'] = function (wve7yk) {}, q7sv;
          } else return ekv1yw['_preCreateElement'](wykxh1);
        }
      }
    }, ekv1yw['onCreateInput'] = function (p0_5i) {
      var ev7qw = ekv1yw['_preCreateElement'](p0_5i);return ev7qw['focus'] = csq8g7['wxinputFocus'], ev7qw['blur'] = csq8g7['wxinputblur'], ev7qw['style'] = {}, ev7qw['value'] = 0x0, ev7qw['parentElement'] = {}, ev7qw['placeholder'] = {}, ev7qw['type'] = {}, ev7qw['setColor'] = function (kywv1e) {}, ev7qw['setType'] = function (bf_05) {}, ev7qw['setFontFace'] = function (xkwa) {}, ev7qw['addEventListener'] = function (ruj2) {}, ev7qw['contains'] = function (od2) {
        return null;
      }, ev7qw['removeChild'] = function (dt3o4z) {}, ev7qw;
    }, ekv1yw['createShaderCondition'] = function (ih15x) {
      var bih5xa = this,
          oz2dr = function () {
        var ha1x = ih15x;return bih5xa[ih15x['replace']('this.', '')];
      };return oz2dr;
    }, ekv1yw['EnvConfig'] = null, ekv1yw['window'] = null, ekv1yw['_preCreateElement'] = null, ekv1yw['_inited'] = ![], ekv1yw['wxRequest'] = null, ekv1yw['systemInfo'] = null, ekv1yw['version'] = '0.0.1', ekv1yw['isZiYu'] = ![], ekv1yw['isPosMsgYu'] = ![], ekv1yw['parseXMLFromString'] = function (f3t4) {
      var zro26d, tf4o_3;f3t4 = f3t4['replace'](/>\s+</g, '><');try {
        zro26d = new window['Parser']['DOMParser']()['parseFromString'](f3t4, 'text/xml');
      } catch ($u6jmr) {
        throw '需要引入xml解析库文件';
      }return zro26d;
    }, ekv1yw['idx'] = 0x1, ekv1yw;
  }(),
      vc7eq = function () {
    function bpxia5() {}_t40pf(bpxia5, 'laya.wx.mini.MiniImage');var _bft = bpxia5['prototype'];return _bft['_loadImage'] = function (xhika) {
      var cs78gq = this,
          hyekw = ![];xhika['indexOf']('layaNativeDir/') == -0x1 && (hyekw = !![], xhika = j6ur$['formatURL'](xhika));if (!tbf['getFileInfo'](xhika)) {
        if (xhika['indexOf']('http://') != -0x1 || xhika['indexOf']('https://') != -0x1) tbf['downImg'](xhika, new oz243(bpxia5, bpxia5['onDownImgCallBack'], [xhika, cs78gq]), xhika);else bpxia5['onCreateImage'](xhika, cs78gq, !![]);
      } else bpxia5['onCreateImage'](xhika, cs78gq, !hyekw);
    }, bpxia5['onDownImgCallBack'] = function (w1yehk, wykhe, zdot) {
      if (!zdot) bpxia5['onCreateImage'](w1yehk, wykhe);else wykhe['onError'](null);
    }, bpxia5['onCreateImage'] = function (_b50pi, g9lcs, p50bi) {
      p50bi === void 0x0 && (p50bi = ![]);var dzo263;if (!p50bi) {
        var ih51xa = tbf['getFileInfo'](_b50pi),
            z6do2r = ih51xa['md5'];dzo263 = tbf['getFileNativePath'](z6do2r);
      } else dzo263 = _b50pi;if (g9lcs['imgCache'] == null) g9lcs['imgCache'] = {};var mu6$jr;function y1ew() {
        mu6$jr['onload'] = null, mu6$jr['onerror'] = null, delete g9lcs['imgCache'][_b50pi];
      };var b50pi = function () {
        y1ew(), g9lcs['onLoaded'](mu6$jr);
      },
          yh1xkw = function () {
        y1ew(), g9lcs['event']('error', 'Load image failed');
      };g9lcs['_type'] == 'nativeimage' ? (mu6$jr = new g7vcqs['window']['Image'](), mu6$jr['crossOrigin'] = '', mu6$jr['onload'] = b50pi, mu6$jr['onerror'] = yh1xkw, mu6$jr['src'] = dzo263, g9lcs['imgCache'][_b50pi] = mu6$jr) : new f4o_t['create'](dzo263, { 'onload': b50pi, 'onerror': yh1xkw, 'onCreate': function (gs8c9) {
          mu6$jr = gs8c9, g9lcs['imgCache'][_b50pi] = gs8c9;
        } });
    }, bpxia5;
  }(),
      csq8g7 = function () {
    function k1xhaw() {}return _t40pf(k1xhaw, 'laya.wx.mini.MiniInput'), k1xhaw['_createInputElement'] = function () {
      jd62r['_initInput'](jd62r['area'] = g7vcqs['createElement']('textarea')), jd62r['_initInput'](jd62r['input'] = g7vcqs['createElement']('input')), jd62r['inputContainer'] = g7vcqs['createElement']('div'), jd62r['inputContainer']['style']['position'] = 'absolute', jd62r['inputContainer']['style']['zIndex'] = 0x186a0, g7vcqs['container']['appendChild'](jd62r['inputContainer']), jd62r['inputContainer']['setPos'] = function (vegqy, q7gecv) {
        jd62r['inputContainer']['style']['left'] = vegqy + 'px', jd62r['inputContainer']['style']['top'] = q7gecv + 'px';
      }, q8sc7['stage']['on']('resize', null, k1xhaw['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (p_0t4) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), rzdo['_soundClass'] = f34do, rzdo['_musicClass'] = f34do, window['_videoClass'] = dz26j;
    }, k1xhaw['_onStageResize'] = function () {
      var vyq7we = q8sc7['stage']['_canvasTransform']['identity']();vyq7we['scale'](g7vcqs['width'] / dz342['canvas']['width'] / piab0['getPixelRatio'](), g7vcqs['height'] / dz342['canvas']['height'] / piab0['getPixelRatio']());
    }, k1xhaw['wxinputFocus'] = function (ixhk1) {
      var i_pb05 = jd62r['inputElement']['target'];if (i_pb05 && !i_pb05['editable']) return;i05bp_['window']['wx']['offKeyboardConfirm'](), i05bp_['window']['wx']['offKeyboardInput'](), i05bp_['window']['wx']['showKeyboard']({ 'defaultValue': i_pb05['text'], 'maxLength': i_pb05['maxChars'], 'multiple': i_pb05['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ewkv7) {}, 'fail': function (ixpa) {} }), i05bp_['window']['wx']['onKeyboardConfirm'](function (h51ai) {
        var tz3o4 = h51ai ? h51ai['value'] : '';i_pb05['text'] = tz3o4, i_pb05['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), i05bp_['window']['wx']['onKeyboardInput'](function (j$u6) {
        var kxh1i = j$u6 ? j$u6['value'] : '';if (!i_pb05['multiline']) {
          if (kxh1i['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }i_pb05['text'] = kxh1i, i_pb05['event']('input');
      });
    }, k1xhaw['inputEnter'] = function () {
      jd62r['inputElement']['target']['focus'] = ![];
    }, k1xhaw['wxinputblur'] = function () {
      k1xhaw['hideKeyboard']();
    }, k1xhaw['hideKeyboard'] = function () {
      i05bp_['window']['wx']['offKeyboardConfirm'](), i05bp_['window']['wx']['offKeyboardInput'](), i05bp_['window']['wx']['hideKeyboard']({ 'success': function (t3zd4o) {
          console['log']('隐藏键盘');
        }, 'fail': function (fto4d) {
          console['log']('隐藏键盘出错:' + (fto4d ? fto4d['errMsg'] : ''));
        } });
    }, k1xhaw;
  }(),
      kevyw = function () {
    function ipba5() {}_t40pf(ipba5, 'laya.wx.mini.MiniLoader');var geqvy = ipba5['prototype'];return geqvy['load'] = function (ab5pix, v7gsq, m$jru6, cs87g, d42z3) {
      m$jru6 === void 0x0 && (m$jru6 = !![]), d42z3 === void 0x0 && (d42z3 = ![]);var yq7egv = this;yq7egv['_url'] = ab5pix;if (ab5pix['indexOf']('data:image') === 0x0) yq7egv['_type'] = v7gsq = 'image';else yq7egv['_type'] = v7gsq || (v7gsq = yq7egv['getTypeFromUrl'](ab5pix));yq7egv['_cache'] = m$jru6, yq7egv['_data'] = null;var yxhk1 = 'ascii';if (ab5pix['indexOf']('.fnt') != -0x1) yxhk1 = 'utf8';else v7gsq == 'arraybuffer' && (yxhk1 = '');;var vge7y = pbf_0['getFileExtension'](ab5pix);if (ipba5['_fileTypeArr']['indexOf'](vge7y) != -0x1) i05bp_['EnvConfig']['load']['call'](this, ab5pix, v7gsq, m$jru6, cs87g, d42z3);else {
        if (!tbf['getFileInfo'](ab5pix)) {
          if (ab5pix['indexOf']('layaNativeDir/') != -0x1) {
            if (i05bp_['isZiYu']) {
              var fp_05 = tbf['ziyuFileData'][ab5pix];yq7egv['onLoaded'](fp_05);return;
            } else {
              cosnole['log']('read read'), tbf['read'](ab5pix, yxhk1, new oz243(ipba5, ipba5['onReadNativeCallBack'], [yxhk1, ab5pix, v7gsq, m$jru6, cs87g, d42z3, yq7egv]));return;
            }
          }if (j6ur$['rootPath'] == '') var gyqve = ab5pix;else gyqve = ab5pix['split'](j6ur$['rootPath'])[0x0];ab5pix['indexOf']('http://') != -0x1 || ab5pix['indexOf']('https://') != -0x1 ? i05bp_['EnvConfig']['load']['call'](yq7egv, ab5pix, v7gsq, m$jru6, cs87g, d42z3) : tbf['readFile'](gyqve, yxhk1, new oz243(ipba5, ipba5['onReadNativeCallBack'], [yxhk1, ab5pix, v7gsq, m$jru6, cs87g, d42z3, yq7egv]), ab5pix);
        } else i05bp_['EnvConfig']['load']['call'](this, ab5pix, v7gsq, m$jru6, cs87g, d42z3);
      }
    }, geqvy['resMgrLoad'] = function (yegqv, ixh1ak, qev7gc, i5xah1, kv7wye, r26z, vye1kw) {
      qev7gc === void 0x0 && (qev7gc = 0x0), i5xah1 === void 0x0 && (i5xah1 = ![]), kv7wye === void 0x0 && (kv7wye = ![]), r26z === void 0x0 && (r26z = 0x0), vye1kw === void 0x0 && (vye1kw = 0x3), yegqv['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', yegqv), i05bp_['EnvConfig']['resMgrLoad'](yegqv, (zd6, vywek, y7wk) => {
        ipba5['prototype']['resMgrLoadCallBack'](zd6, vywek, y7wk, ixh1ak);
      }, qev7gc, i5xah1, kv7wye, r26z, vye1kw);
    }, geqvy['resMgrLoadCallBack'] = function (zdo43t, hxi1a, qev7yg, pab5xi) {
      console['log']('buff:::', zdo43t, qev7yg, tbf['fileNativeDir'] + '///' + tbf['fileListName']), pab5xi(zdo43t, hxi1a, qev7yg);
    }, geqvy['clearRes'] = function (f_t0pb, qecg) {
      qecg === void 0x0 && (qecg = ![]);var otf4d = this;otf4d['clearRes'](f_t0pb, qecg);var ecq7vg = tbf['getFileInfo'](f_t0pb);if (ecq7vg && (f_t0pb['indexOf']('http://') != -0x1 || f_t0pb['indexOf']('https://') != -0x1)) {
        var vqe7 = ecq7vg['md5'],
            ipb_50 = tbf['getFileNativePath'](vqe7);tbf['remove'](ipb_50);
      }
    }, ipba5['onReadNativeCallBack'] = function (ev1k, ot_f4, cgl8qs, s87gcq, ah1ki, rj$26z, r6o2dz, l8cgs9, s9l8g) {
      s87gcq === void 0x0 && (s87gcq = !![]), rj$26z === void 0x0 && (rj$26z = ![]), l8cgs9 === void 0x0 && (l8cgs9 = 0x0);if (!l8cgs9) {
        var p0bi5a;if (cgl8qs == 'json' || cgl8qs == 'atlas') p0bi5a = i05bp_['getJson'](s9l8g['data']);else cgl8qs == 'xml' ? p0bi5a = pbf_0['parseXMLFromString'](s9l8g['data']) : p0bi5a = s9l8g['data'];r6o2dz['onLoaded'](p0bi5a), !i05bp_['isZiYu'] && i05bp_['isPosMsgYu'] && cgl8qs != 'arraybuffer' && wx['postMessage']({ 'url': ot_f4, 'data': p0bi5a, 'isLoad': !![] });
      } else l8cgs9 == 0x1 && i05bp_['EnvConfig']['load']['call'](r6o2dz, ot_f4, cgl8qs, s87gcq, ah1ki, rj$26z);
    }, x5hbi(ipba5, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ipba5;
  }(),
      tbf = function (x5ha) {
    function j6$ur() {
      j6$ur['__super']['call'](this);;
    }return _t40pf(j6$ur, 'laya.wx.mini.MiniFileMgr', x5ha), j6$ur['isLoadFile'] = function (o24dz) {
      return j6$ur['_fileTypeArr']['indexOf'](o24dz) != -0x1 ? !![] : ![];
    }, j6$ur['getFileInfo'] = function ($ru2j) {
      var sqlg8c = $ru2j['split']('?')[0x0],
          j$zr26 = j6$ur['filesListObj'][sqlg8c];if (j$zr26 == null) return null;else return j$zr26;return null;
    }, j6$ur['onFileUpdate'] = function (gq7vc, hak1x) {
      var r$j26 = gq7vc['split']('/'),
          evyw7k = r$j26[r$j26['length'] - 0x1],
          kvye1w = j6$ur['getFileInfo'](hak1x);if (kvye1w == null) j6$ur['onSaveFile'](hak1x, evyw7k);else {
        if (kvye1w['readyUrl'] != hak1x) j6$ur['remove'](evyw7k, hak1x);
      }
    }, j6$ur['exits'] = function (c8g7, o3t4fd) {
      var g7vec = j6$ur['getFileNativePath'](c8g7);j6$ur['fs']['getFileInfo']({ 'filePath': g7vec, 'success': function (ew7yqv) {
          o3t4fd != null && o3t4fd['runWith']([0x0, ew7yqv]);
        }, 'fail': function (d43toz) {
          o3t4fd != null && o3t4fd['runWith']([0x1, d43toz]);
        } });
    }, j6$ur['read'] = function (ev7wyk, bfp_0, yqwe7, baipx5) {
      bfp_0 === void 0x0 && (bfp_0 = 'ascill'), baipx5 === void 0x0 && (baipx5 = '');var w7yeqv;baipx5 != '' ? w7yeqv = j6$ur['getFileNativePath'](ev7wyk) : w7yeqv = ev7wyk, j6$ur['fs']['readFile']({ 'filePath': w7yeqv, 'encoding': bfp_0, 'success': function (i0bp5) {
          yqwe7 != null && yqwe7['runWith']([0x0, i0bp5]);
        }, 'fail': function (do6r2z) {
          if (do6r2z && baipx5 != '') j6$ur['down'](baipx5, bfp_0, yqwe7, baipx5);else yqwe7 != null && yqwe7['runWith']([0x1]);
        } });
    }, j6$ur['readNativeFile'] = function (j62z$, e7qyv) {
      j6$ur['fs']['readFile']({ 'filePath': j62z$, 'encoding': '', 'success': function (e7vqyg) {
          e7qyv != null && e7qyv['runWith']([0x0]);
        }, 'fail': function (vweyk7) {
          e7qyv != null && e7qyv['runWith']([0x1]);
        } });
    }, j6$ur['down'] = function (p0f_4t, g7qyve, pb_f5, b0tf) {
      g7qyve === void 0x0 && (g7qyve = 'ascill'), b0tf === void 0x0 && (b0tf = '');var j6r$ = j6$ur['getFileNativePath'](b0tf),
          tpbf0_ = j6$ur['wxdown']({ 'url': p0f_4t, 'filePath': j6r$, 'success': function (zo3d4t) {
          if (zo3d4t['statusCode'] === 0xc8) j6$ur['readFile'](zo3d4t['filePath'], g7qyve, pb_f5, b0tf);
        }, 'fail': function (dft4) {
          pb_f5 != null && pb_f5['runWith']([0x1, dft4]);
        } });tpbf0_['onProgressUpdate'](function (d3zo6) {
        pb_f5 != null && pb_f5['runWith']([0x2, d3zo6['progress']]);
      });
    }, j6$ur['readFile'] = function (yveg7q, k1xhy, rd6j, xyhwk1) {
      k1xhy === void 0x0 && (k1xhy = 'ascill'), xyhwk1 === void 0x0 && (xyhwk1 = ''), j6$ur['fs']['readFile']({ 'filePath': yveg7q, 'encoding': k1xhy, 'success': function (ewk7) {
          if (yveg7q['indexOf']('http://') != -0x1 || yveg7q['indexOf']('https://') != -0x1) j6$ur['onFileUpdate'](yveg7q, xyhwk1);rd6j != null && rd6j['runWith']([0x0, ewk7]);
        }, 'fail': function (wkevy1) {
          if (wkevy1) rd6j != null && rd6j['runWith']([0x1, wkevy1]);
        } });
    }, j6$ur['downImg'] = function (z362od, o6d2z, tb_p0) {
      tb_p0 === void 0x0 && (tb_p0 = '');var wkvye1 = j6$ur['wxdown']({ 'url': z362od, 'success': function (j$r6mu) {
          j$r6mu['statusCode'] === 0xc8 && j6$ur['copyFile'](j$r6mu['tempFilePath'], tb_p0, o6d2z);
        }, 'fail': function (_of4t) {
          o6d2z != null && o6d2z['runWith']([0x1, _of4t]);
        } });
    }, j6$ur['copyFile'] = function (lc8, eqyw7v, kw7vey) {
      var j2dzr = lc8['split']('/'),
          gqy7ev = j2dzr[j2dzr['length'] - 0x1],
          qscg8l = eqyw7v['split']('?')[0x0],
          r6jzd2 = j6$ur['getFileInfo'](eqyw7v),
          ur26 = j6$ur['getFileNativePath'](gqy7ev);j6$ur['fs']['copyFile']({ 'srcPath': lc8, 'destPath': ur26, 'success': function (pbf_) {
          if (!r6jzd2) j6$ur['onSaveFile'](eqyw7v, gqy7ev), kw7vey != null && kw7vey['runWith']([0x0]);else {
            if (r6jzd2['readyUrl'] != eqyw7v) j6$ur['remove'](gqy7ev, eqyw7v, kw7vey);
          }
        }, 'fail': function (qev7cg) {
          kw7vey != null && kw7vey['runWith']([0x1, qev7cg]);
        } });
    }, j6$ur['getFileNativePath'] = function (cgqve7) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + cgqve7;
    }, j6$ur['remove'] = function (z43od, d2o4z3, vg7qce) {
      d2o4z3 === void 0x0 && (d2o4z3 = '');var j$rm6 = j6$ur['getFileInfo'](d2o4z3),
          hxiab5 = j6$ur['getFileNativePath'](j$rm6['md5']);q8sc7['loader']['clearRes'](j$rm6['readyUrl']), j6$ur['fs']['unlink']({ 'filePath': hxiab5, 'success': function (tf4p0) {
          if (d2o4z3 != '') j6$ur['onSaveFile'](d2o4z3, z43od);vg7qce != null && vg7qce['runWith']([0x0]);
        }, 'fail': function (c8q) {} });
    }, j6$ur['onSaveFile'] = function (pia0b5, l9cs) {
      var zdo234 = pia0b5['split']('?')[0x0];j6$ur['filesListObj'][zdo234] = { 'md5': l9cs, 'readyUrl': pia0b5 }, j6$ur['fs']['writeFile']({ 'filePath': j6$ur['fileNativeDir'] + '/' + j6$ur['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](j6$ur['filesListObj']), 'success': function (f04_p) {
          console['log']('写入测试测试成功：', f04_p);
        }, 'fail': function (ekh1) {
          console['log']('写入测试测试失败：', ekh1);
        } });
    }, j6$ur['existDir'] = function (qsc87, zd3t4) {
      j6$ur['fs']['mkdir']({ 'dirPath': qsc87, 'success': function (ye7wq) {
          zd3t4 != null && zd3t4['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hkxy1) {
          if (hkxy1['errMsg']['indexOf']('file already exists') != -0x1) j6$ur['readSync'](j6$ur['fileListName'], 'utf8', zd3t4);else zd3t4 != null && zd3t4['runWith']([0x1, hkxy1]);
        } });
    }, j6$ur['readSync'] = function (w1kyh, pxbia, evyg7, xkw1hy) {
      pxbia === void 0x0 && (pxbia = 'ascill'), xkw1hy === void 0x0 && (xkw1hy = '');var doz243 = j6$ur['getFileNativePath'](w1kyh),
          ehyw1;try {
        ehyw1 = j6$ur['fs']['readFileSync'](doz243), evyg7 != null && evyg7['runWith']([0x0, { 'data': ehyw1 }]);
      } catch (w7veqy) {
        evyg7 != null && evyg7['runWith']([0x1]);
      }
    }, j6$ur['readCache'] = function () {}, j6$ur['writeCache'] = function (tbf_0p) {
      var gcl8sq = readyUrl['split']('?')[0x0];j6$ur['filesListObj'][gcl8sq] = { 'md5': md5Name, 'readyUrl': readyUrl }, j6$ur['fs']['writeFile']({ 'filePath': j6$ur['fileNativeDir'] + '/' + j6$ur['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](j6$ur['filesListObj']), 'success': function (ftbp0) {}, 'fail': function (zo632) {} });
    }, j6$ur['setNativeFileDir'] = function (qsc78) {
      j6$ur['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + qsc78;
    }, j6$ur['filesListObj'] = {}, j6$ur['fileNativeDir'] = null, j6$ur['fileListName'] = 'layaairfiles.txt', j6$ur['ziyuFileData'] = {}, x5hbi(j6$ur, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), j6$ur;
  }(r2djz),
      f34do = function (pbf0t) {
    function _403() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], _403['__super']['call'](this), this['_sound'] = _403['_createSound'](), this['_chanell'] = new _tbp(this['_sound']);
    }_t40pf(_403, 'laya.wx.mini.MiniSound', pbf0t);var csg89 = _403['prototype'];return csg89['load'] = function (t_430) {
      var wkahx1 = this;t_430 = j6ur$['formatURL'](t_430), this['url'] = t_430;if (_403['_audioCache'][t_430]) {
        this['event']('complete');return;
      }function wkyx1() {
        if (_403['_null'] != undefined) wkahx1['_sound']['onCanplay'](_403['_null']), wkahx1['_sound']['onError'](_403['_null']);else try {
          wkahx1['_sound']['onCanplay'](null), wkahx1['_sound']['onError'](null), _403['_null'] = null;
        } catch (eqv7g) {
          console['warn']('[wxmini] _clearSound:' + eqv7g), wkahx1['_sound']['onCanplay'](akh1xw), wkahx1['_sound']['onError'](akh1xw), _403['_null'] = akh1xw;
        }
      }function bxha() {
        ygevq7['loaded'] = !![], ygevq7['event']('complete'), _403['_audioCache'][ygevq7['url']] = ygevq7;
      }function _bpft(csg8) {
        console['error']('errCode=' + csg8['errCode'] + '  errMsg=' + csg8['errMsg']), ygevq7['event']('error');
      }function akh1xw() {}this['_sound']['onCanplay'](bxha), this['_sound']['onError'](_bpft), this['_sound']['src'] = t_430;var ygevq7 = this;
    }, csg89['play'] = function (_p5b0, jmr6u$) {
      _p5b0 === void 0x0 && (_p5b0 = 0x0), jmr6u$ === void 0x0 && (jmr6u$ = 0x0);var hxik1, p_fb0t;if (this['url'] == rzdo['_tMusic']) {
        if (!_403['_musicAudio']) _403['_musicAudio'] = this['_sound'];hxik1 = _403['_musicAudio'], p_fb0t = this['_chanell'];
      } else hxik1 = this['_sound'], p_fb0t = this['_chanell'];return hxik1['src'] = this['url'], hxik1['startTime'] = 0x0, p_fb0t['isStopped'] && (p_fb0t['url'] = this['url'], p_fb0t['loops'] = jmr6u$, p_fb0t['startTime'] = _p5b0, p_fb0t['play'](), rzdo['addChannel'](p_fb0t)), p_fb0t;
    }, csg89['dispose'] = function () {
      var to3f_4 = _403['_audioCache'][this['url']];to3f_4 && (to3f_4['src'] = '', delete _403['_audioCache'][this['url']]);
    }, ib_(0x0, csg89, 'duration', function () {
      return this['_sound']['duration'];
    }), _403['_createSound'] = function () {
      _403['_id']++;var hiax51 = i05bp_['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return hiax51;
    }, _403['_musicAudio'] = null, _403['_id'] = 0x0, _403['_audioCache'] = {}, _403['_null'] = undefined, _403;
  }(r2djz),
      _tbp = function (evw7ky) {
    function axkh1(do26rz) {
      this['_audio'] = null, this['_onEnd'] = null, axkh1['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = do26rz, this['_onEnd'] = pbf_0['bind'](this['__onEnd'], this), do26rz['onEnded'](this['_onEnd']);
    }_t40pf(axkh1, 'laya.wx.mini.MiniSoundChannel', evw7ky);var bp0_i5 = axkh1['prototype'];return bp0_i5['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (q8sc7['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, bp0_i5['__onNull'] = function () {}, bp0_i5['play'] = function () {
      this['isStopped'] = ![], rzdo['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, bp0_i5['stop'] = function () {
      this['isStopped'] = !![], rzdo['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, bp0_i5['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, bp0_i5['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], rzdo['addChannel'](this), this['_audio']['play']();
    }, ib_(0x0, bp0_i5, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ib_(0x0, bp0_i5, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ib_(0x0, bp0_i5, 'volume', function () {
      return 0x1;
    }, function (do4z3t) {}), axkh1['_null'] = undefined, axkh1;
  }(oz24),
      dz26j = function () {
    function _ptb0f() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = i05bp_['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }_t40pf(_ptb0f, 'laya.wx.mini.MiniVideo');var t4z3do = _ptb0f['prototype'];return t4z3do['on'] = function (gc8l9, apb5x, l8sgcq) {
      if (gc8l9 == 'loadedmetadata') this['onPlayFunc'] = l8sgcq['bind'](apb5x), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else gc8l9 == 'ended' && (this['onEndedFunC'] = l8sgcq['bind'](apb5x), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, t4z3do['onTimeUpdateFunc'] = function (q8lg) {
      this['position'] = q8lg['position'], this['_duration'] = q8lg['duration'];
    }, t4z3do['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, t4z3do['onended'] = function (_5pbi0, pft40_) {
      this['onEndedFunC'] = pft40_['bind'](_5pbi0), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, t4z3do['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, t4z3do['off'] = function (e7yvg, wkxha, r$u6jm) {
      if (e7yvg == 'loadedmetadata') this['onPlayFunc'] = r$u6jm['bind'](wkxha), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else e7yvg == 'ended' && (this['onEndedFunC'] = r$u6jm['bind'](wkxha), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, t4z3do['load'] = function (pa5bix) {
      if (!this['videoElement']) return;this['videoElement']['src'] = pa5bix;
    }, t4z3do['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, t4z3do['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, t4z3do['size'] = function (vwkye, vqc7e) {
      if (!this['videoElement']) return;this['videoElement']['width'] = vwkye, this['videoElement']['height'] = vqc7e;
    }, t4z3do['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, t4z3do['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, ib_(0x0, t4z3do, 'duration', function () {
      return this['_duration'];
    }), ib_(0x0, t4z3do, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (zd26rj) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = zd26rj;
    }), ib_(0x0, t4z3do, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), ib_(0x0, t4z3do, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), ib_(0x0, t4z3do, 'ended', function () {
      return this['videoend'];
    }), ib_(0x0, t4z3do, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (wv1y) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = wv1y;
    }), ib_(0x0, t4z3do, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (rz26dj) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = rz26dj;
    }), ib_(0x0, t4z3do, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (f4dto) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = f4dto;
    }), ib_(0x0, t4z3do, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), ib_(0x0, t4z3do, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (o3z2d4) {
      if (!this['videoElement']) return;this['videoElement']['x'] = o3z2d4;
    }), ib_(0x0, t4z3do, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (k1aw) {
      if (!this['videoElement']) return;this['videoElement']['y'] = k1aw;
    }), ib_(0x0, t4z3do, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), ib_(0x0, t4z3do, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (ip05_) {
      if (!this['videoElement']) return;this['videoElement']['src'] = ip05_;
    }), ib_(0x0, t4z3do, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (cq7) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = cq7;
    }), ib_(0x0, t4z3do, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (f3dot4) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = f3dot4;
    }), _ptb0f;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var fbp_05 in Laya) {
    var hkxi1 = Laya[fbp_05];hkxi1 && hkxi1['__isclass'] && (exports[fbp_05] = hkxi1);
  }
});