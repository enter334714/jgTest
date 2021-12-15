var c = wx.$o;
(function (window, document, xgf4w9) {
  var u3al = xgf4w9['un'],
      x4fog9 = xgf4w9['uns'],
      ey0_k$ = xgf4w9['static'],
      w1f9i2 = xgf4w9['class'],
      ogf = xgf4w9['getset'],
      f14x9 = xgf4w9['__newvec'],
      c5tm = laya['utils']['Browser'],
      uek_ = laya['events']['Event'],
      d3a6l = laya['events']['EventDispatcher'],
      idw1 = laya['resource']['HTMLImage'],
      hzgb4o = laya['utils']['Handler'],
      hzpc8r = laya['display']['Input'],
      a6il2 = laya['net']['Loader'],
      ne3uy = laya['maths']['Matrix'],
      kun_ye = laya['renders']['Render'],
      va62 = laya['utils']['RunDriver'],
      u_n3vl = laya['media']['Sound'],
      obzh8g = laya['media']['SoundChannel'],
      vu3l_n = laya['media']['SoundManager'],
      lvd3a = laya['display']['Stage'],
      mr5tq = laya['net']['URL'],
      qmrtp5 = laya['utils']['Utils'],
      cb8hoz = function () {
    function vyn_u() {}return w1f9i2(vyn_u, 'laya.wx.mini.MiniAdpter'), vyn_u['getJson'] = function (xw91) {
      return JSON['parse'](xw91);
    }, vyn_u['init'] = function (wgf94, mrcz) {
      wgf94 === void 0x0 && (wgf94 = ![]), mrcz === void 0x0 && (mrcz = ![]);if (vyn_u['_inited']) return;vyn_u['window'] = window;if (vyn_u['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;vyn_u['_inited'] = !![], vyn_u['isZiYu'] = mrcz, vyn_u['isPosMsgYu'] = wgf94, vyn_u['EnvConfig'] = {}, !vyn_u['isZiYu'] && (_kuey0['setNativeFileDir']('/layaairGame'), _kuey0['existDir'](_kuey0['fileNativeDir'], hzgb4o['create'](vyn_u, vyn_u['onMkdirCallBack']))), vyn_u['window']['focus'] = function () {}, xgf4w9['getUrlPath'] = function () {}, vyn_u['window']['logtime'] = function (j0k$e) {}, vyn_u['window']['alertTimeLog'] = function (xwf14) {}, vyn_u['window']['resetShareInfo'] = function () {}, vyn_u['window']['CanvasRenderingContext2D'] = function () {}, vyn_u['window']['CanvasRenderingContext2D']['prototype'] = vyn_u['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], vyn_u['window']['document']['body']['appendChild'] = function () {}, vyn_u['EnvConfig']['pixelRatioInt'] = 0x0, va62['getPixelRatio'] = vyn_u['pixelRatio'], vyn_u['_preCreateElement'] = c5tm['createElement'], c5tm['createElement'] = vyn_u['createElement'], va62['createShaderCondition'] = vyn_u['createShaderCondition'], qmrtp5['parseXMLFromString'] = vyn_u['parseXMLFromString'], hzpc8r['_createInputElement'] = gh4b['_createInputElement'], vyn_u['EnvConfig']['load'] = a6il2['prototype']['load'], a6il2['prototype']['load'] = m5tpq['prototype']['load'], vyn_u['isZiYu'] && wgf94 && wx['onMessage'](function (mrq5tp) {
        mrq5tp['isLoad'] && (_kuey0['ziyuFileData'][mrq5tp['url']] = mrq5tp['data']);
      });
    }, vyn_u['onMkdirCallBack'] = function (cp8zm, lda63) {
      if (!cp8zm) _kuey0['filesListObj'] = JSON['parse'](lda63['data']);
    }, vyn_u['pixelRatio'] = function () {
      if (!vyn_u['EnvConfig']['pixelRatioInt']) try {
        var x4hbog = wx['getSystemInfoSync']();return vyn_u['EnvConfig']['pixelRatioInt'] = x4hbog['pixelRatio'], x4hbog = x4hbog, x4hbog['pixelRatio'];
      } catch (w9xgf4) {}return vyn_u['EnvConfig']['pixelRatioInt'];
    }, vyn_u['createElement'] = function (c8pzm) {
      if (c8pzm == 'canvas') {
        var z8;return vyn_u['idx'] == 0x1 ? vyn_u['isZiYu'] ? (z8 = sharedCanvas, z8['style'] = {}) : z8 = window['canvas'] : z8 = window['wx']['createCanvas'](), vyn_u['idx']++, z8;
      } else {
        if (c8pzm == 'textarea' || c8pzm == 'input') return vyn_u['onCreateInput'](c8pzm);else {
          if (c8pzm == 'div') {
            var o9bx = vyn_u['_preCreateElement'](c8pzm);return o9bx['contains'] = function (f4xgo9) {
              return null;
            }, o9bx['removeChild'] = function (y$) {}, o9bx;
          } else return vyn_u['_preCreateElement'](c8pzm);
        }
      }
    }, vyn_u['onCreateInput'] = function (vn63l) {
      var ekj = vyn_u['_preCreateElement'](vn63l);return ekj['focus'] = gh4b['wxinputFocus'], ekj['blur'] = gh4b['wxinputblur'], ekj['style'] = {}, ekj['value'] = 0x0, ekj['parentElement'] = {}, ekj['placeholder'] = {}, ekj['type'] = {}, ekj['setColor'] = function (_0keyu) {}, ekj['setType'] = function (il62) {}, ekj['setFontFace'] = function (g9b4x) {}, ekj['addEventListener'] = function (e_nyku) {}, ekj['contains'] = function (o8bhzc) {
        return null;
      }, ekj['removeChild'] = function (av2d) {}, ekj;
    }, vyn_u['createShaderCondition'] = function (fx9i1) {
      var mpr8c5 = this,
          i1w92f = function () {
        var $je = fx9i1;return mpr8c5[fx9i1['replace']('this.', '')];
      };return i1w92f;
    }, vyn_u['EnvConfig'] = null, vyn_u['window'] = null, vyn_u['_preCreateElement'] = null, vyn_u['_inited'] = ![], vyn_u['wxRequest'] = null, vyn_u['systemInfo'] = null, vyn_u['version'] = '0.0.1', vyn_u['isZiYu'] = ![], vyn_u['isPosMsgYu'] = ![], vyn_u['parseXMLFromString'] = function (kyu_en) {
      var hcz8pr, t5qrsm;kyu_en = kyu_en['replace'](/>\s+</g, '><');try {
        hcz8pr = new window['Parser']['DOMParser']()['parseFromString'](kyu_en, 'text/xml');
      } catch (oxbg4) {
        throw '需要引入xml解析库文件';
      }return hcz8pr;
    }, vyn_u['idx'] = 0x1, vyn_u;
  }(),
      cr85m = function () {
    function ad63() {}w1f9i2(ad63, 'laya.wx.mini.MiniImage');var j0yek$ = ad63['prototype'];return j0yek$['_loadImage'] = function (d6lai2) {
      var m7tsq5 = this,
          mtc5p = ![];d6lai2['indexOf']('layaNativeDir/') == -0x1 && (mtc5p = !![], d6lai2 = mr5tq['formatURL'](d6lai2));if (!_kuey0['getFileInfo'](d6lai2)) {
        if (d6lai2['indexOf']('http://') != -0x1 || d6lai2['indexOf']('https://') != -0x1) _kuey0['downImg'](d6lai2, new hzgb4o(ad63, ad63['onDownImgCallBack'], [d6lai2, m7tsq5]), d6lai2);else ad63['onCreateImage'](d6lai2, m7tsq5, !![]);
      } else ad63['onCreateImage'](d6lai2, m7tsq5, !mtc5p);
    }, ad63['onDownImgCallBack'] = function (ogzb4, ogx94f, rqst5) {
      if (!rqst5) ad63['onCreateImage'](ogzb4, ogx94f);else ogx94f['onError'](null);
    }, ad63['onCreateImage'] = function (mcpz8r, zmpcr8, mzpc) {
      mzpc === void 0x0 && (mzpc = ![]);var u3ey_n;if (!mzpc) {
        var xogb4h = _kuey0['getFileInfo'](mcpz8r),
            x9wf = xogb4h['md5'];u3ey_n = _kuey0['getFileNativePath'](x9wf);
      } else u3ey_n = mcpz8r;if (zmpcr8['imgCache'] == null) zmpcr8['imgCache'] = {};var z8bhoc;function pzrhc() {
        z8bhoc['onload'] = null, z8bhoc['onerror'] = null, delete zmpcr8['imgCache'][mcpz8r];
      };var y_ekun = function () {
        pzrhc(), zmpcr8['onLoaded'](z8bhoc);
      },
          d2la6 = function () {
        pzrhc(), zmpcr8['event']('error', 'Load image failed');
      };zmpcr8['_type'] == 'nativeimage' ? (z8bhoc = new c5tm['window']['Image'](), z8bhoc['crossOrigin'] = '', z8bhoc['onload'] = y_ekun, z8bhoc['onerror'] = d2la6, z8bhoc['src'] = u3ey_n, zmpcr8['imgCache'][mcpz8r] = z8bhoc) : new idw1['create'](u3ey_n, { 'onload': y_ekun, 'onerror': d2la6, 'onCreate': function (u3y_en) {
          z8bhoc = u3y_en, zmpcr8['imgCache'][mcpz8r] = u3y_en;
        } });
    }, ad63;
  }(),
      gh4b = function () {
    function ghz8o() {}return w1f9i2(ghz8o, 'laya.wx.mini.MiniInput'), ghz8o['_createInputElement'] = function () {
      hzpc8r['_initInput'](hzpc8r['area'] = c5tm['createElement']('textarea')), hzpc8r['_initInput'](hzpc8r['input'] = c5tm['createElement']('input')), hzpc8r['inputContainer'] = c5tm['createElement']('div'), hzpc8r['inputContainer']['style']['position'] = 'absolute', hzpc8r['inputContainer']['style']['zIndex'] = 0x186a0, c5tm['container']['appendChild'](hzpc8r['inputContainer']), hzpc8r['inputContainer']['setPos'] = function (v6, obgx49) {
        hzpc8r['inputContainer']['style']['left'] = v6 + 'px', hzpc8r['inputContainer']['style']['top'] = obgx49 + 'px';
      }, xgf4w9['stage']['on']('resize', null, ghz8o['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (lu_3v) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), vu3l_n['_soundClass'] = fw1i9, vu3l_n['_musicClass'] = fw1i9;
    }, ghz8o['_onStageResize'] = function () {
      var czmp8 = xgf4w9['stage']['_canvasTransform']['identity']();czmp8['scale'](c5tm['width'] / kun_ye['canvas']['width'] / va62['getPixelRatio'](), c5tm['height'] / kun_ye['canvas']['height'] / va62['getPixelRatio']());
    }, ghz8o['wxinputFocus'] = function (je$y0) {
      var eynuk = hzpc8r['inputElement']['target'];if (eynuk && !eynuk['editable']) return;cb8hoz['window']['wx']['offKeyboardConfirm'](), cb8hoz['window']['wx']['offKeyboardInput'](), cb8hoz['window']['wx']['showKeyboard']({ 'defaultValue': eynuk['text'], 'maxLength': eynuk['maxChars'], 'multiple': eynuk['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (gf4o9) {}, 'fail': function (v_n3l) {} }), cb8hoz['window']['wx']['onKeyboardConfirm'](function (mtsrq5) {
        var _vynu = mtsrq5 ? mtsrq5['value'] : '';eynuk['text'] = _vynu, eynuk['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), cb8hoz['window']['wx']['onKeyboardInput'](function (mrp) {
        var gx9wf4 = mrp ? mrp['value'] : '';if (!eynuk['multiline']) {
          if (gx9wf4['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }eynuk['text'] = gx9wf4, eynuk['event']('input');
      });
    }, ghz8o['inputEnter'] = function () {
      hzpc8r['inputElement']['target']['focus'] = ![];
    }, ghz8o['wxinputblur'] = function () {
      ghz8o['hideKeyboard']();
    }, ghz8o['hideKeyboard'] = function () {
      cb8hoz['window']['wx']['offKeyboardConfirm'](), cb8hoz['window']['wx']['offKeyboardInput'](), cb8hoz['window']['wx']['hideKeyboard']({ 'success': function (d1a6i) {
          console['log']('隐藏键盘');
        }, 'fail': function (y3_un) {
          console['log']('隐藏键盘出错:' + (y3_un ? y3_un['errMsg'] : ''));
        } });
    }, ghz8o;
  }(),
      m5tpq = function () {
    function prh8z() {}w1f9i2(prh8z, 'laya.wx.mini.MiniLoader');var tr5cm = prh8z['prototype'];return tr5cm['load'] = function (cpt5mr, pb8zch, g49xwf, goz8, a261) {
      g49xwf === void 0x0 && (g49xwf = !![]), a261 === void 0x0 && (a261 = ![]);var gb49x = this;gb49x['_url'] = cpt5mr;if (cpt5mr['indexOf']('data:image') === 0x0) gb49x['_type'] = pb8zch = 'image';else gb49x['_type'] = pb8zch || (pb8zch = gb49x['getTypeFromUrl'](cpt5mr));gb49x['_cache'] = g49xwf, gb49x['_data'] = null;var fx9go4 = 'ascii';if (cpt5mr['indexOf']('.fnt') != -0x1) fx9go4 = 'utf8';else pb8zch == 'arraybuffer' && (fx9go4 = '');;var n3_vyu = qmrtp5['getFileExtension'](cpt5mr);if (prh8z['_fileTypeArr']['indexOf'](n3_vyu) != -0x1) cb8hoz['EnvConfig']['load']['call'](this, cpt5mr, pb8zch, g49xwf, goz8, a261);else {
        if (!_kuey0['getFileInfo'](cpt5mr)) {
          if (cpt5mr['indexOf']('layaNativeDir/') != -0x1) {
            if (cb8hoz['isZiYu']) {
              var f4gw9x = _kuey0['ziyuFileData'][cpt5mr];gb49x['onLoaded'](f4gw9x);return;
            } else {
              cosnole['log']('read read'), _kuey0['read'](cpt5mr, fx9go4, new hzgb4o(prh8z, prh8z['onReadNativeCallBack'], [fx9go4, cpt5mr, pb8zch, g49xwf, goz8, a261, gb49x]));return;
            }
          }if (mr5tq['rootPath'] == '') var v3aun = cpt5mr;else v3aun = cpt5mr['split'](mr5tq['rootPath'])[0x0];cpt5mr['indexOf']('http://') != -0x1 || cpt5mr['indexOf']('https://') != -0x1 ? cb8hoz['EnvConfig']['load']['call'](gb49x, cpt5mr, pb8zch, g49xwf, goz8, a261) : _kuey0['readFile'](v3aun, fx9go4, new hzgb4o(prh8z, prh8z['onReadNativeCallBack'], [fx9go4, cpt5mr, pb8zch, g49xwf, goz8, a261, gb49x]), cpt5mr);
        } else cb8hoz['EnvConfig']['load']['call'](this, cpt5mr, pb8zch, g49xwf, goz8, a261);
      }
    }, tr5cm['resMgrLoad'] = function (t5s7q, nl3va6, phbz8c, rqp5tm, h8zbg, qms7t5, boh8zg) {
      phbz8c === void 0x0 && (phbz8c = 0x0), rqp5tm === void 0x0 && (rqp5tm = ![]), h8zbg === void 0x0 && (h8zbg = ![]), qms7t5 === void 0x0 && (qms7t5 = 0x0), boh8zg === void 0x0 && (boh8zg = 0x3), t5s7q['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', t5s7q), cb8hoz['EnvConfig']['resMgrLoad'](t5s7q, (ai2dl6, hr8c, hc8bp) => {
        prh8z['prototype']['resMgrLoadCallBack'](ai2dl6, hr8c, hc8bp, nl3va6);
      }, phbz8c, rqp5tm, h8zbg, qms7t5, boh8zg);
    }, tr5cm['resMgrLoadCallBack'] = function (fo9xg, tqrs5m, u_n, ye0_$k) {
      console['log']('buff:::', fo9xg, u_n, _kuey0['fileNativeDir'] + '///' + _kuey0['fileListName']), ye0_$k(fo9xg, tqrs5m, u_n);
    }, tr5cm['clearRes'] = function (nvula, y_knue) {
      y_knue === void 0x0 && (y_knue = ![]);var lda62v = this;lda62v['clearRes'](nvula, y_knue);var fi12 = _kuey0['getFileInfo'](nvula);if (fi12 && (nvula['indexOf']('http://') != -0x1 || nvula['indexOf']('https://') != -0x1)) {
        var k_e0u = fi12['md5'],
            zrp8mc = _kuey0['getFileNativePath'](k_e0u);_kuey0['remove'](zrp8mc);
      }
    }, prh8z['onReadNativeCallBack'] = function (cbhpz8, xofg9, hzo4g, e$0kjy, k$0yje, vad62l, ail26d, lvd63a, a216id) {
      e$0kjy === void 0x0 && (e$0kjy = !![]), vad62l === void 0x0 && (vad62l = ![]), lvd63a === void 0x0 && (lvd63a = 0x0);if (!lvd63a) {
        var b8zch;if (hzo4g == 'json' || hzo4g == 'atlas') b8zch = cb8hoz['getJson'](a216id['data']);else hzo4g == 'xml' ? b8zch = qmrtp5['parseXMLFromString'](a216id['data']) : b8zch = a216id['data'];ail26d['onLoaded'](b8zch), !cb8hoz['isZiYu'] && cb8hoz['isPosMsgYu'] && hzo4g != 'arraybuffer' && wx['postMessage']({ 'url': xofg9, 'data': b8zch, 'isLoad': !![] });
      } else lvd63a == 0x1 && cb8hoz['EnvConfig']['load']['call'](ail26d, xofg9, hzo4g, e$0kjy, k$0yje, vad62l);
    }, ey0_k$(prh8z, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), prh8z;
  }(),
      _kuey0 = function (tsq57) {
    function hobg8() {
      hobg8['__super']['call'](this);;
    }return w1f9i2(hobg8, 'laya.wx.mini.MiniFileMgr', tsq57), hobg8['isLoadFile'] = function (vn_uy3) {
      return hobg8['_fileTypeArr']['indexOf'](vn_uy3) != -0x1 ? !![] : ![];
    }, hobg8['getFileInfo'] = function (hpbzc8) {
      var nu_vl3 = hpbzc8['split']('?')[0x0],
          h8zcbo = hobg8['filesListObj'][nu_vl3];if (h8zcbo == null) return null;else return h8zcbo;return null;
    }, hobg8['onFileUpdate'] = function (mctrp, tr5qms) {
      var _kyeu = mctrp['split']('/'),
          g4hbz = _kyeu[_kyeu['length'] - 0x1],
          msr5t = hobg8['getFileInfo'](tr5qms);if (msr5t == null) hobg8['onSaveFile'](tr5qms, g4hbz);else {
        if (msr5t['readyUrl'] != tr5qms) hobg8['remove'](g4hbz, tr5qms);
      }
    }, hobg8['exits'] = function (_uyke0, i91w) {
      var ye_ku = hobg8['getFileNativePath'](_uyke0);hobg8['fs']['getFileInfo']({ 'filePath': ye_ku, 'success': function (w4xf) {
          i91w != null && i91w['runWith']([0x0, w4xf]);
        }, 'fail': function (p5cmt) {
          i91w != null && i91w['runWith']([0x1, p5cmt]);
        } });
    }, hobg8['read'] = function (uy0e_k, xo4fg, u0k_y, zb4o) {
      xo4fg === void 0x0 && (xo4fg = 'ascill'), zb4o === void 0x0 && (zb4o = '');var bohgz4;zb4o != '' ? bohgz4 = hobg8['getFileNativePath'](uy0e_k) : bohgz4 = uy0e_k, hobg8['fs']['readFile']({ 'filePath': bohgz4, 'encoding': xo4fg, 'success': function (bcp8h) {
          u0k_y != null && u0k_y['runWith']([0x0, bcp8h]);
        }, 'fail': function (ynv3_u) {
          if (ynv3_u && zb4o != '') hobg8['down'](zb4o, xo4fg, u0k_y, zb4o);else u0k_y != null && u0k_y['runWith']([0x1]);
        } });
    }, hobg8['readNativeFile'] = function (a2lid6, w91x) {
      hobg8['fs']['readFile']({ 'filePath': a2lid6, 'encoding': '', 'success': function (b4xo9) {
          w91x != null && w91x['runWith']([0x0]);
        }, 'fail': function ($e0k_) {
          w91x != null && w91x['runWith']([0x1]);
        } });
    }, hobg8['down'] = function (zchbp8, ogzh4, bg49ox, prhc8z) {
      ogzh4 === void 0x0 && (ogzh4 = 'ascill'), prhc8z === void 0x0 && (prhc8z = '');var crmpt = hobg8['getFileNativePath'](prhc8z),
          bczoh8 = hobg8['wxdown']({ 'url': zchbp8, 'filePath': crmpt, 'success': function (a2vld) {
          if (a2vld['statusCode'] === 0xc8) hobg8['readFile'](a2vld['filePath'], ogzh4, bg49ox, prhc8z);
        }, 'fail': function (wd216i) {
          bg49ox != null && bg49ox['runWith']([0x1, wd216i]);
        } });bczoh8['onProgressUpdate'](function (ch8p) {
        bg49ox != null && bg49ox['runWith']([0x2, ch8p['progress']]);
      });
    }, hobg8['readFile'] = function (xwi1f9, ynu_3e, lvn3, hb4) {
      ynu_3e === void 0x0 && (ynu_3e = 'ascill'), hb4 === void 0x0 && (hb4 = ''), hobg8['fs']['readFile']({ 'filePath': xwi1f9, 'encoding': ynu_3e, 'success': function (ad2lv) {
          if (xwi1f9['indexOf']('http://') != -0x1 || xwi1f9['indexOf']('https://') != -0x1) hobg8['onFileUpdate'](xwi1f9, hb4);lvn3 != null && lvn3['runWith']([0x0, ad2lv]);
        }, 'fail': function (val26) {
          if (val26) lvn3 != null && lvn3['runWith']([0x1, val26]);
        } });
    }, hobg8['downImg'] = function (f1w2di, s5m, vy3n) {
      vy3n === void 0x0 && (vy3n = '');var cz8hp = hobg8['wxdown']({ 'url': f1w2di, 'success': function (prc5mt) {
          prc5mt['statusCode'] === 0xc8 && hobg8['copyFile'](prc5mt['tempFilePath'], vy3n, s5m);
        }, 'fail': function (hcoz) {
          s5m != null && s5m['runWith']([0x1, hcoz]);
        } });
    }, hobg8['copyFile'] = function (gx4bh, vu3anl, mp8zrc) {
      var ld6va = gx4bh['split']('/'),
          yu_e3n = ld6va[ld6va['length'] - 0x1],
          q5rts = vu3anl['split']('?')[0x0],
          i6ad1 = hobg8['getFileInfo'](vu3anl),
          d61w = hobg8['getFileNativePath'](yu_e3n);hobg8['fs']['copyFile']({ 'srcPath': gx4bh, 'destPath': d61w, 'success': function (prz) {
          if (!i6ad1) hobg8['onSaveFile'](vu3anl, yu_e3n), mp8zrc != null && mp8zrc['runWith']([0x0]);else {
            if (i6ad1['readyUrl'] != vu3anl) hobg8['remove'](yu_e3n, vu3anl, mp8zrc);
          }
        }, 'fail': function (mrqp5) {
          mp8zrc != null && mp8zrc['runWith']([0x1, mrqp5]);
        } });
    }, hobg8['getFileNativePath'] = function (aidl62) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + aidl62;
    }, hobg8['remove'] = function (_u3vn, sqtmr, eukny_) {
      sqtmr === void 0x0 && (sqtmr = '');var l26dav = hobg8['getFileInfo'](sqtmr),
          zhgo4b = hobg8['getFileNativePath'](l26dav['md5']);xgf4w9['loader']['clearRes'](l26dav['readyUrl']), hobg8['fs']['unlink']({ 'filePath': zhgo4b, 'success': function (oh4bz) {
          if (sqtmr != '') hobg8['onSaveFile'](sqtmr, _u3vn);eukny_ != null && eukny_['runWith']([0x0]);
        }, 'fail': function (yneku) {} });
    }, hobg8['onSaveFile'] = function (v_ln3u, c8rmzp) {
      var ey_nku = v_ln3u['split']('?')[0x0];hobg8['filesListObj'][ey_nku] = { 'md5': c8rmzp, 'readyUrl': v_ln3u }, hobg8['fs']['writeFile']({ 'filePath': hobg8['fileNativeDir'] + '/' + hobg8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hobg8['filesListObj']), 'success': function (li2d6a) {
          console['log']('写入测试测试成功：', li2d6a);
        }, 'fail': function (hzgb) {
          console['log']('写入测试测试失败：', hzgb);
        } });
    }, hobg8['existDir'] = function (vnl3ua, wf149x) {
      hobg8['fs']['mkdir']({ 'dirPath': vnl3ua, 'success': function (bo8zg) {
          wf149x != null && wf149x['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hzr8p) {
          if (hzr8p['errMsg']['indexOf']('file already exists') != -0x1) hobg8['readSync'](hobg8['fileListName'], 'utf8', wf149x);else wf149x != null && wf149x['runWith']([0x1, hzr8p]);
        } });
    }, hobg8['readSync'] = function (fgxo94, vauln3, kueyn, eky$j0) {
      vauln3 === void 0x0 && (vauln3 = 'ascill'), eky$j0 === void 0x0 && (eky$j0 = '');var j0kye$ = hobg8['getFileNativePath'](fgxo94),
          mp5tc;try {
        mp5tc = hobg8['fs']['readFileSync'](j0kye$), kueyn != null && kueyn['runWith']([0x0, { 'data': mp5tc }]);
      } catch (trmp) {
        kueyn != null && kueyn['runWith']([0x1]);
      }
    }, hobg8['readCache'] = function () {}, hobg8['writeCache'] = function (dla26) {
      var hp8b = readyUrl['split']('?')[0x0];hobg8['filesListObj'][hp8b] = { 'md5': md5Name, 'readyUrl': readyUrl }, hobg8['fs']['writeFile']({ 'filePath': hobg8['fileNativeDir'] + '/' + hobg8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hobg8['filesListObj']), 'success': function (hb8zog) {}, 'fail': function (da26v) {} });
    }, hobg8['setNativeFileDir'] = function (d6val2) {
      hobg8['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + d6val2;
    }, hobg8['filesListObj'] = {}, hobg8['fileNativeDir'] = null, hobg8['fileListName'] = 'layaairfiles.txt', hobg8['ziyuFileData'] = {}, ey0_k$(hobg8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), hobg8;
  }(d3a6l),
      fw1i9 = function (cprz8) {
    function lnv() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], lnv['__super']['call'](this), this['_sound'] = lnv['_createSound']();
    }w1f9i2(lnv, 'laya.wx.mini.MiniSound', cprz8);var yenu3 = lnv['prototype'];return yenu3['load'] = function (x4gboh) {
      var p5mq = this;x4gboh = mr5tq['formatURL'](x4gboh), this['url'] = x4gboh;if (lnv['_audioCache'][x4gboh]) {
        this['event']('complete');return;
      }function b8zph() {
        if (lnv['_null'] != undefined) p5mq['_sound']['onCanplay'](lnv['_null']), p5mq['_sound']['onError'](lnv['_null']);else try {
          p5mq['_sound']['onCanplay'](null), p5mq['_sound']['onError'](null), lnv['_null'] = null;
        } catch (i9x1) {
          console['warn']('[wxmini] _clearSound:' + i9x1), p5mq['_sound']['onCanplay'](yku0_), p5mq['_sound']['onError'](yku0_), lnv['_null'] = yku0_;
        }
      }function x49fgw() {
        b8zph(), avd36l['loaded'] = !![], avd36l['event']('complete'), lnv['_audioCache'][avd36l['url']] = avd36l;
      }function key_n(n3ulav) {
        console['error']('errCode=' + n3ulav['errCode'] + '  errMsg=' + n3ulav['errMsg']), b8zph(), avd36l['event']('error');
      }function yku0_() {}this['_sound']['onCanplay'](x49fgw), this['_sound']['onError'](key_n), this['_sound']['src'] = x4gboh;var avd36l = this;
    }, yenu3['play'] = function (eun, qmr5tp) {
      eun === void 0x0 && (eun = 0x0), qmr5tp === void 0x0 && (qmr5tp = 0x0);var ozgb4;if (this['url'] == vu3l_n['_tMusic']) {
        if (!lnv['_musicAudio']) lnv['_musicAudio'] = lnv['_createSound']();ozgb4 = lnv['_musicAudio'];
      } else ozgb4 = lnv['_createSound']();ozgb4['src'] = this['url'];var a6di21 = new bhz8pc(ozgb4);return a6di21['url'] = this['url'], a6di21['loops'] = qmr5tp, a6di21['startTime'] = eun, a6di21['play'](), vu3l_n['addChannel'](a6di21), a6di21;
    }, yenu3['dispose'] = function () {
      var kuey_n = lnv['_audioCache'][this['url']];kuey_n && (kuey_n['src'] = '', delete lnv['_audioCache'][this['url']]);
    }, ogf(0x0, yenu3, 'duration', function () {
      return this['_sound']['duration'];
    }), lnv['_createSound'] = function () {
      return lnv['_id']++, cb8hoz['window']['wx']['createInnerAudioContext']();
    }, lnv['_musicAudio'] = null, lnv['_id'] = 0x0, lnv['_audioCache'] = {}, lnv['_null'] = undefined, lnv;
  }(d3a6l),
      bhz8pc = function (ulv3n_) {
    function mz(gxbo49) {
      this['_audio'] = null, this['_onEnd'] = null, mz['__super']['call'](this), this['_audio'] = gxbo49, this['_onEnd'] = qmrtp5['bind'](this['__onEnd'], this), gxbo49['onEnded'](this['_onEnd']);
    }w1f9i2(mz, 'laya.wx.mini.MiniSoundChannel', ulv3n_);var yuek0_ = mz['prototype'];return yuek0_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (xgf4w9['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, yuek0_['__onNull'] = function () {}, yuek0_['play'] = function () {
      this['isStopped'] = ![], vu3l_n['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, yuek0_['stop'] = function () {
      this['isStopped'] = !![], vu3l_n['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (mz['_null'] != undefined) this['_audio']['onEnded'](mz['_null']);else try {
        this['_audio']['onEnded'](null), mz['_null'] = null;
      } catch (_nvu3l) {
        console['warn']('[wxmini] stop:' + _nvu3l), this['_audio']['onEnded'](qmrtp5['bind'](this['__onNull'], this)), mz['_null'] = qmrtp5['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, yuek0_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, yuek0_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], vu3l_n['addChannel'](this), this['_audio']['play']();
    }, ogf(0x0, yuek0_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ogf(0x0, yuek0_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ogf(0x0, yuek0_, 'volume', function () {
      return 0x1;
    }, function (chz8rp) {}), mz['_null'] = undefined, mz;
  }(obzh8g);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var gfo94 in Laya) {
    var f94x = Laya[gfo94];f94x && f94x['__isclass'] && (exports[gfo94] = f94x);
  }
});