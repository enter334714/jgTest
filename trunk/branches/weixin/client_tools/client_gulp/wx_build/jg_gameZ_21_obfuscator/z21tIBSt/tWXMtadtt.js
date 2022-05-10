var v = wx.$d;
(function (window, document, o4h5p) {
  var wcy7k = o4h5p['un'],
      i1v2_ = o4h5p['uns'],
      i61_2 = o4h5p['static'],
      n7wy = o4h5p['class'],
      d9lfux = o4h5p['getset'],
      _62zv1 = o4h5p['__newvec'],
      xpda9 = laya['utils']['Browser'],
      ejrcn = laya['events']['Event'],
      i_v2 = laya['events']['EventDispatcher'],
      o$t0 = laya['resource']['HTMLImage'],
      qo04hm = laya['utils']['Handler'],
      y2vzk = laya['display']['Input'],
      p5qx4a = laya['net']['Loader'],
      p5x9d = laya['maths']['Matrix'],
      adux5 = laya['renders']['Render'],
      fda9u = laya['utils']['RunDriver'],
      rewn = laya['media']['Sound'],
      zky2v3 = laya['media']['SoundChannel'],
      u8fd = laya['media']['SoundManager'],
      gtmo0 = laya['display']['Stage'],
      f8bli1 = laya['net']['URL'],
      xd9uaf = laya['utils']['Utils'],
      i1v6 = function () {
    function _6z32() {}return n7wy(_6z32, 'laya.wx.mini.MiniAdpter'), _6z32['getJson'] = function (k3yzwc) {
      return JSON['parse'](k3yzwc);
    }, _6z32['init'] = function (xa45qp, bl9ud) {
      xa45qp === void 0x0 && (xa45qp = ![]), bl9ud === void 0x0 && (bl9ud = ![]);if (_6z32['_inited']) return;_6z32['window'] = window;if (_6z32['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;_6z32['_inited'] = !![], _6z32['isZiYu'] = bl9ud, _6z32['isPosMsgYu'] = xa45qp, _6z32['EnvConfig'] = {}, !_6z32['isZiYu'] && (yknwc['setNativeFileDir']('/layaairGame'), yknwc['existDir'](yknwc['fileNativeDir'], qo04hm['create'](_6z32, _6z32['onMkdirCallBack']))), _6z32['window']['focus'] = function () {}, o4h5p['getUrlPath'] = function () {}, _6z32['window']['logtime'] = function (f9ldub) {}, _6z32['window']['alertTimeLog'] = function (yew) {}, _6z32['window']['resetShareInfo'] = function () {}, _6z32['window']['CanvasRenderingContext2D'] = function () {}, _6z32['window']['CanvasRenderingContext2D']['prototype'] = _6z32['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], _6z32['window']['document']['body']['appendChild'] = function () {}, _6z32['EnvConfig']['pixelRatioInt'] = 0x0, fda9u['getPixelRatio'] = _6z32['pixelRatio'], _6z32['_preCreateElement'] = xpda9['createElement'], xpda9['createElement'] = _6z32['createElement'], fda9u['createShaderCondition'] = _6z32['createShaderCondition'], xd9uaf['parseXMLFromString'] = _6z32['parseXMLFromString'], y2vzk['_createInputElement'] = kz32['_createInputElement'], _6z32['EnvConfig']['load'] = p5qx4a['prototype']['load'], p5qx4a['prototype']['load'] = a495px['prototype']['load'], _6z32['isZiYu'] && xa45qp && wx['onMessage'](function (_vi126) {
        _vi126['isLoad'] && (yknwc['ziyuFileData'][_vi126['url']] = _vi126['data']);
      });
    }, _6z32['onMkdirCallBack'] = function ($0mqh, q0$m) {
      if (!$0mqh) yknwc['filesListObj'] = JSON['parse'](q0$m['data']);
    }, _6z32['pixelRatio'] = function () {
      if (!_6z32['EnvConfig']['pixelRatioInt']) try {
        var mt0ho$ = wx['getSystemInfoSync']();return _6z32['EnvConfig']['pixelRatioInt'] = mt0ho$['pixelRatio'], mt0ho$ = mt0ho$, mt0ho$['pixelRatio'];
      } catch (xu9a5d) {}return _6z32['EnvConfig']['pixelRatioInt'];
    }, _6z32['createElement'] = function (i2_6v) {
      if (i2_6v == 'canvas') {
        var kzy3;return _6z32['idx'] == 0x1 ? _6z32['isZiYu'] ? (kzy3 = sharedCanvas, kzy3['style'] = {}) : kzy3 = window['canvas'] : kzy3 = window['wx']['createCanvas'](), _6z32['idx']++, kzy3;
      } else {
        if (i2_6v == 'textarea' || i2_6v == 'input') return _6z32['onCreateInput'](i2_6v);else {
          if (i2_6v == 'div') {
            var o0h$mq = _6z32['_preCreateElement'](i2_6v);return o0h$mq['contains'] = function (wky7n) {
              return null;
            }, o0h$mq['removeChild'] = function ($ohq0) {}, o0h$mq;
          } else return _6z32['_preCreateElement'](i2_6v);
        }
      }
    }, _6z32['onCreateInput'] = function (qomh$) {
      var du9l = _6z32['_preCreateElement'](qomh$);return du9l['focus'] = kz32['wxinputFocus'], du9l['blur'] = kz32['wxinputblur'], du9l['style'] = {}, du9l['value'] = 0x0, du9l['parentElement'] = {}, du9l['placeholder'] = {}, du9l['type'] = {}, du9l['setColor'] = function (m$g0ot) {}, du9l['setType'] = function (df9a) {}, du9l['setFontFace'] = function (px5qa) {}, du9l['addEventListener'] = function (zw3cky) {}, du9l['contains'] = function (bi86l1) {
        return null;
      }, du9l['removeChild'] = function (zv3ky) {}, du9l;
    }, _6z32['createShaderCondition'] = function (fbdl8) {
      var lfud8b = this,
          h$0moq = function () {
        var m0toh$ = fbdl8;return lfud8b[fbdl8['replace']('this.', '')];
      };return h$0moq;
    }, _6z32['EnvConfig'] = null, _6z32['window'] = null, _6z32['_preCreateElement'] = null, _6z32['_inited'] = ![], _6z32['wxRequest'] = null, _6z32['systemInfo'] = null, _6z32['version'] = '0.0.1', _6z32['isZiYu'] = ![], _6z32['isPosMsgYu'] = ![], _6z32['parseXMLFromString'] = function (h40mq) {
      var fl18, zkyv3;h40mq = h40mq['replace'](/>\s+</g, '><');try {
        fl18 = new window['Parser']['DOMParser']()['parseFromString'](h40mq, 'text/xml');
      } catch (yne7cw) {
        throw '需要引入xml解析库文件';
      }return fl18;
    }, _6z32['idx'] = 0x1, _6z32;
  }(),
      ap49x5 = function () {
    function bl9duf() {}n7wy(bl9duf, 'laya.wx.mini.MiniImage');var qo54 = bl9duf['prototype'];return qo54['_loadImage'] = function (_2618) {
      var h0 = this,
          i6b18l = ![];_2618['indexOf']('layaNativeDir/') == -0x1 && (i6b18l = !![], _2618 = f8bli1['formatURL'](_2618));if (!yknwc['getFileInfo'](_2618)) {
        if (_2618['indexOf']('http://') != -0x1 || _2618['indexOf']('https://') != -0x1) yknwc['downImg'](_2618, new qo04hm(bl9duf, bl9duf['onDownImgCallBack'], [_2618, h0]), _2618);else bl9duf['onCreateImage'](_2618, h0, !![]);
      } else bl9duf['onCreateImage'](_2618, h0, !i6b18l);
    }, bl9duf['onDownImgCallBack'] = function (dfulb8, kz3cw, zwykc3) {
      if (!zwykc3) bl9duf['onCreateImage'](dfulb8, kz3cw);else kz3cw['onError'](null);
    }, bl9duf['onCreateImage'] = function (ap9dx, ph5oq4, ibl68) {
      ibl68 === void 0x0 && (ibl68 = ![]);var q0h$om;if (!ibl68) {
        var y3k2vz = yknwc['getFileInfo'](ap9dx),
            wkc3yz = y3k2vz['md5'];q0h$om = yknwc['getFileNativePath'](wkc3yz);
      } else q0h$om = ap9dx;if (ph5oq4['imgCache'] == null) ph5oq4['imgCache'] = {};var ubd9l;function njrc7e() {
        ubd9l['onload'] = null, ubd9l['onerror'] = null, delete ph5oq4['imgCache'][ap9dx];
      };var ifblu = function () {
        njrc7e(), ph5oq4['onLoaded'](ubd9l);
      },
          nwrc = function () {
        njrc7e(), ph5oq4['event']('error', 'Load image failed');
      };ph5oq4['_type'] == 'nativeimage' ? (ubd9l = new xpda9['window']['Image'](), ubd9l['crossOrigin'] = '', ubd9l['onload'] = ifblu, ubd9l['onerror'] = nwrc, ubd9l['src'] = q0h$om, ph5oq4['imgCache'][ap9dx] = ubd9l) : new o$t0['create'](q0h$om, { 'onload': ifblu, 'onerror': nwrc, 'onCreate': function (vz_621) {
          ubd9l = vz_621, ph5oq4['imgCache'][ap9dx] = vz_621;
        } });
    }, bl9duf;
  }(),
      kz32 = function () {
    function _26i() {}return n7wy(_26i, 'laya.wx.mini.MiniInput'), _26i['_createInputElement'] = function () {
      y2vzk['_initInput'](y2vzk['area'] = xpda9['createElement']('textarea')), y2vzk['_initInput'](y2vzk['input'] = xpda9['createElement']('input')), y2vzk['inputContainer'] = xpda9['createElement']('div'), y2vzk['inputContainer']['style']['position'] = 'absolute', y2vzk['inputContainer']['style']['zIndex'] = 0x186a0, xpda9['container']['appendChild'](y2vzk['inputContainer']), y2vzk['inputContainer']['setPos'] = function (apq4, cn7wk) {
        y2vzk['inputContainer']['style']['left'] = apq4 + 'px', y2vzk['inputContainer']['style']['top'] = cn7wk + 'px';
      }, o4h5p['stage']['on']('resize', null, _26i['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (f9bld) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), u8fd['_soundClass'] = y2v, u8fd['_musicClass'] = y2v;
    }, _26i['_onStageResize'] = function () {
      var fau9d = o4h5p['stage']['_canvasTransform']['identity']();fau9d['scale'](xpda9['width'] / adux5['canvas']['width'] / fda9u['getPixelRatio'](), xpda9['height'] / adux5['canvas']['height'] / fda9u['getPixelRatio']());
    }, _26i['wxinputFocus'] = function (duax5) {
      var qhom40 = y2vzk['inputElement']['target'];if (qhom40 && !qhom40['editable']) return;i1v6['window']['wx']['offKeyboardConfirm'](), i1v6['window']['wx']['offKeyboardInput'](), i1v6['window']['wx']['showKeyboard']({ 'defaultValue': qhom40['text'], 'maxLength': qhom40['maxChars'], 'multiple': qhom40['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (df9ux) {}, 'fail': function (l1fi) {} }), i1v6['window']['wx']['onKeyboardConfirm'](function (q5aph4) {
        var kwcy37 = q5aph4 ? q5aph4['value'] : '';qhom40['text'] = kwcy37, qhom40['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), i1v6['window']['wx']['onKeyboardInput'](function (c37ykw) {
        var u9xd = c37ykw ? c37ykw['value'] : '';if (!qhom40['multiline']) {
          if (u9xd['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }qhom40['text'] = u9xd, qhom40['event']('input');
      });
    }, _26i['inputEnter'] = function () {
      y2vzk['inputElement']['target']['focus'] = ![];
    }, _26i['wxinputblur'] = function () {
      _26i['hideKeyboard']();
    }, _26i['hideKeyboard'] = function () {
      i1v6['window']['wx']['offKeyboardConfirm'](), i1v6['window']['wx']['offKeyboardInput'](), i1v6['window']['wx']['hideKeyboard']({ 'success': function (_162vz) {
          console['log']('隐藏键盘');
        }, 'fail': function (_23zk) {
          console['log']('隐藏键盘出错:' + (_23zk ? _23zk['errMsg'] : ''));
        } });
    }, _26i;
  }(),
      a495px = function () {
    function ifb1l() {}n7wy(ifb1l, 'laya.wx.mini.MiniLoader');var ce7 = ifb1l['prototype'];return ce7['load'] = function (v26z3_, d5xp9a, pxaq, x5qa4, o0mqh4) {
      pxaq === void 0x0 && (pxaq = !![]), o0mqh4 === void 0x0 && (o0mqh4 = ![]);var o5p4qh = this;o5p4qh['_url'] = v26z3_;if (v26z3_['indexOf']('data:image') === 0x0) o5p4qh['_type'] = d5xp9a = 'image';else o5p4qh['_type'] = d5xp9a || (d5xp9a = o5p4qh['getTypeFromUrl'](v26z3_));o5p4qh['_cache'] = pxaq, o5p4qh['_data'] = null;var cwne7r = 'ascii';if (v26z3_['indexOf']('.fnt') != -0x1) cwne7r = 'utf8';else d5xp9a == 'arraybuffer' && (cwne7r = '');;var ncwr7 = xd9uaf['getFileExtension'](v26z3_);if (ifb1l['_fileTypeArr']['indexOf'](ncwr7) != -0x1) i1v6['EnvConfig']['load']['call'](this, v26z3_, d5xp9a, pxaq, x5qa4, o0mqh4);else {
        if (!yknwc['getFileInfo'](v26z3_)) {
          if (v26z3_['indexOf']('layaNativeDir/') != -0x1) {
            if (i1v6['isZiYu']) {
              var kzw3c = yknwc['ziyuFileData'][v26z3_];o5p4qh['onLoaded'](kzw3c);return;
            } else {
              cosnole['log']('read read'), yknwc['read'](v26z3_, cwne7r, new qo04hm(ifb1l, ifb1l['onReadNativeCallBack'], [cwne7r, v26z3_, d5xp9a, pxaq, x5qa4, o0mqh4, o5p4qh]));return;
            }
          }if (f8bli1['rootPath'] == '') var t$0hom = v26z3_;else t$0hom = v26z3_['split'](f8bli1['rootPath'])[0x0];v26z3_['indexOf']('http://') != -0x1 || v26z3_['indexOf']('https://') != -0x1 ? i1v6['EnvConfig']['load']['call'](o5p4qh, v26z3_, d5xp9a, pxaq, x5qa4, o0mqh4) : yknwc['readFile'](t$0hom, cwne7r, new qo04hm(ifb1l, ifb1l['onReadNativeCallBack'], [cwne7r, v26z3_, d5xp9a, pxaq, x5qa4, o0mqh4, o5p4qh]), v26z3_);
        } else i1v6['EnvConfig']['load']['call'](this, v26z3_, d5xp9a, pxaq, x5qa4, o0mqh4);
      }
    }, ce7['resMgrLoad'] = function (o0pq4, b618i, phq04, ap594, f1b8li, kyzv32, qxa) {
      phq04 === void 0x0 && (phq04 = 0x0), ap594 === void 0x0 && (ap594 = ![]), f1b8li === void 0x0 && (f1b8li = ![]), kyzv32 === void 0x0 && (kyzv32 = 0x0), qxa === void 0x0 && (qxa = 0x3), o0pq4['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', o0pq4), i1v6['EnvConfig']['resMgrLoad'](o0pq4, (i2v6_, k3zy, fib1) => {
        ifb1l['prototype']['resMgrLoadCallBack'](i2v6_, k3zy, fib1, b618i);
      }, phq04, ap594, f1b8li, kyzv32, qxa);
    }, ce7['resMgrLoadCallBack'] = function (y3k2, i1_v26, lif18, lf8ib1) {
      console['log']('buff:::', y3k2, lif18, yknwc['fileNativeDir'] + '///' + yknwc['fileListName']), lf8ib1(y3k2, i1_v26, lif18);
    }, ce7['clearRes'] = function (iuf8bl, ykz3cw) {
      ykz3cw === void 0x0 && (ykz3cw = ![]);var dlfbu = this;dlfbu['clearRes'](iuf8bl, ykz3cw);var p54aqx = yknwc['getFileInfo'](iuf8bl);if (p54aqx && (iuf8bl['indexOf']('http://') != -0x1 || iuf8bl['indexOf']('https://') != -0x1)) {
        var a4xp95 = p54aqx['md5'],
            v_2i61 = yknwc['getFileNativePath'](a4xp95);yknwc['remove'](v_2i61);
      }
    }, ifb1l['onReadNativeCallBack'] = function (h$qmo, l8b61i, $t0hom, f81ib, b68i1, hqmo40, zwy3ck, wcy7en, nwy7ck) {
      f81ib === void 0x0 && (f81ib = !![]), hqmo40 === void 0x0 && (hqmo40 = ![]), wcy7en === void 0x0 && (wcy7en = 0x0);if (!wcy7en) {
        var lfud9x;if ($t0hom == 'json' || $t0hom == 'atlas') lfud9x = i1v6['getJson'](nwy7ck['data']);else $t0hom == 'xml' ? lfud9x = xd9uaf['parseXMLFromString'](nwy7ck['data']) : lfud9x = nwy7ck['data'];zwy3ck['onLoaded'](lfud9x), !i1v6['isZiYu'] && i1v6['isPosMsgYu'] && $t0hom != 'arraybuffer' && wx['postMessage']({ 'url': l8b61i, 'data': lfud9x, 'isLoad': !![] });
      } else wcy7en == 0x1 && i1v6['EnvConfig']['load']['call'](zwy3ck, l8b61i, $t0hom, f81ib, b68i1, hqmo40);
    }, i61_2(ifb1l, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ifb1l;
  }(),
      yknwc = function (v1z2_) {
    function knycw() {
      knycw['__super']['call'](this);;
    }return n7wy(knycw, 'laya.wx.mini.MiniFileMgr', v1z2_), knycw['isLoadFile'] = function (ncew) {
      return knycw['_fileTypeArr']['indexOf'](ncew) != -0x1 ? !![] : ![];
    }, knycw['getFileInfo'] = function (o0hq$) {
      var c3yw7 = o0hq$['split']('?')[0x0],
          fbli8u = knycw['filesListObj'][c3yw7];if (fbli8u == null) return null;else return fbli8u;return null;
    }, knycw['onFileUpdate'] = function (yv2, v3_z26) {
      var w3yvk = yv2['split']('/'),
          hpqo04 = w3yvk[w3yvk['length'] - 0x1],
          czywk3 = knycw['getFileInfo'](v3_z26);if (czywk3 == null) knycw['onSaveFile'](v3_z26, hpqo04);else {
        if (czywk3['readyUrl'] != v3_z26) knycw['remove'](hpqo04, v3_z26);
      }
    }, knycw['exits'] = function (qph5a, x95p4) {
      var _3k2z = knycw['getFileNativePath'](qph5a);knycw['fs']['getFileInfo']({ 'filePath': _3k2z, 'success': function (_z2v3k) {
          x95p4 != null && x95p4['runWith']([0x0, _z2v3k]);
        }, 'fail': function (ulxdf) {
          x95p4 != null && x95p4['runWith']([0x1, ulxdf]);
        } });
    }, knycw['read'] = function (l81i6, u9xl, lbu9f, dxu9l) {
      u9xl === void 0x0 && (u9xl = 'ascill'), dxu9l === void 0x0 && (dxu9l = '');var p5xa49;dxu9l != '' ? p5xa49 = knycw['getFileNativePath'](l81i6) : p5xa49 = l81i6, knycw['fs']['readFile']({ 'filePath': p5xa49, 'encoding': u9xl, 'success': function (v1i2_6) {
          lbu9f != null && lbu9f['runWith']([0x0, v1i2_6]);
        }, 'fail': function (m$th) {
          if (m$th && dxu9l != '') knycw['down'](dxu9l, u9xl, lbu9f, dxu9l);else lbu9f != null && lbu9f['runWith']([0x1]);
        } });
    }, knycw['readNativeFile'] = function (zv_, n7wyk) {
      knycw['fs']['readFile']({ 'filePath': zv_, 'encoding': '', 'success': function (xpqa5) {
          n7wyk != null && n7wyk['runWith']([0x0]);
        }, 'fail': function (udlfb9) {
          n7wyk != null && n7wyk['runWith']([0x1]);
        } });
    }, knycw['down'] = function (kc7wny, t$0og, vi26_, wk3y7c) {
      t$0og === void 0x0 && (t$0og = 'ascill'), wk3y7c === void 0x0 && (wk3y7c = '');var fbli8 = knycw['getFileNativePath'](wk3y7c),
          k2vz3_ = knycw['wxdown']({ 'url': kc7wny, 'filePath': fbli8, 'success': function (q0moh$) {
          if (q0moh$['statusCode'] === 0xc8) knycw['readFile'](q0moh$['filePath'], t$0og, vi26_, wk3y7c);
        }, 'fail': function (dufx) {
          vi26_ != null && vi26_['runWith']([0x1, dufx]);
        } });k2vz3_['onProgressUpdate'](function (xa45pq) {
        vi26_ != null && vi26_['runWith']([0x2, xa45pq['progress']]);
      });
    }, knycw['readFile'] = function (adu9, nr7j, b18fi, ib6) {
      nr7j === void 0x0 && (nr7j = 'ascill'), ib6 === void 0x0 && (ib6 = ''), knycw['fs']['readFile']({ 'filePath': adu9, 'encoding': nr7j, 'success': function (i1_) {
          if (adu9['indexOf']('http://') != -0x1 || adu9['indexOf']('https://') != -0x1) knycw['onFileUpdate'](adu9, ib6);b18fi != null && b18fi['runWith']([0x0, i1_]);
        }, 'fail': function (zv2_16) {
          if (zv2_16) b18fi != null && b18fi['runWith']([0x1, zv2_16]);
        } });
    }, knycw['downImg'] = function (dbf8l, nc7erw, rnej7) {
      rnej7 === void 0x0 && (rnej7 = '');var vz3_2k = knycw['wxdown']({ 'url': dbf8l, 'success': function (w7ykc3) {
          w7ykc3['statusCode'] === 0xc8 && knycw['copyFile'](w7ykc3['tempFilePath'], rnej7, nc7erw);
        }, 'fail': function (o0m$h) {
          nc7erw != null && nc7erw['runWith']([0x1, o0m$h]);
        } });
    }, knycw['copyFile'] = function (_82i61, rj7, ax9dfu) {
      var togm0$ = _82i61['split']('/'),
          _zv623 = togm0$[togm0$['length'] - 0x1],
          ap5q4h = rj7['split']('?')[0x0],
          hqom = knycw['getFileInfo'](rj7),
          uxld9f = knycw['getFileNativePath'](_zv623);knycw['fs']['copyFile']({ 'srcPath': _82i61, 'destPath': uxld9f, 'success': function (hqo5) {
          if (!hqom) knycw['onSaveFile'](rj7, _zv623), ax9dfu != null && ax9dfu['runWith']([0x0]);else {
            if (hqom['readyUrl'] != rj7) knycw['remove'](_zv623, rj7, ax9dfu);
          }
        }, 'fail': function (_k23z) {
          ax9dfu != null && ax9dfu['runWith']([0x1, _k23z]);
        } });
    }, knycw['getFileNativePath'] = function (z_v6) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + z_v6;
    }, knycw['remove'] = function (dfl, ot0mg$, lfud8) {
      ot0mg$ === void 0x0 && (ot0mg$ = '');var ey7n = knycw['getFileInfo'](ot0mg$),
          en7wcy = knycw['getFileNativePath'](ey7n['md5']);o4h5p['loader']['clearRes'](ey7n['readyUrl']), knycw['fs']['unlink']({ 'filePath': en7wcy, 'success': function (pax549) {
          if (ot0mg$ != '') knycw['onSaveFile'](ot0mg$, dfl);lfud8 != null && lfud8['runWith']([0x0]);
        }, 'fail': function (da9p5) {} });
    }, knycw['onSaveFile'] = function (i_b61, kcyw7) {
      var e7ywnc = i_b61['split']('?')[0x0];knycw['filesListObj'][e7ywnc] = { 'md5': kcyw7, 'readyUrl': i_b61 }, knycw['fs']['writeFile']({ 'filePath': knycw['fileNativeDir'] + '/' + knycw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](knycw['filesListObj']), 'success': function (g$o0tm) {
          console['log']('写入测试测试成功：', g$o0tm);
        }, 'fail': function (i_8b16) {
          console['log']('写入测试测试失败：', i_8b16);
        } });
    }, knycw['existDir'] = function (wzyck3, mh0q) {
      knycw['fs']['mkdir']({ 'dirPath': wzyck3, 'success': function (njce7r) {
          mh0q != null && mh0q['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (pa5h) {
          if (pa5h['errMsg']['indexOf']('file already exists') != -0x1) knycw['readSync'](knycw['fileListName'], 'utf8', mh0q);else mh0q != null && mh0q['runWith']([0x1, pa5h]);
        } });
    }, knycw['readSync'] = function (cw7k, h0$qom, b61_8i, y3wzk) {
      h0$qom === void 0x0 && (h0$qom = 'ascill'), y3wzk === void 0x0 && (y3wzk = '');var dul9xf = knycw['getFileNativePath'](cw7k),
          d9fb;try {
        d9fb = knycw['fs']['readFileSync'](dul9xf), b61_8i != null && b61_8i['runWith']([0x0, { 'data': d9fb }]);
      } catch (erc7nj) {
        b61_8i != null && b61_8i['runWith']([0x1]);
      }
    }, knycw['readCache'] = function () {}, knycw['writeCache'] = function (wzyk3) {
      var cj7n = readyUrl['split']('?')[0x0];knycw['filesListObj'][cj7n] = { 'md5': md5Name, 'readyUrl': readyUrl }, knycw['fs']['writeFile']({ 'filePath': knycw['fileNativeDir'] + '/' + knycw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](knycw['filesListObj']), 'success': function (ewy7) {}, 'fail': function ($gtom0) {} });
    }, knycw['setNativeFileDir'] = function (_18ib) {
      knycw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _18ib;
    }, knycw['filesListObj'] = {}, knycw['fileNativeDir'] = null, knycw['fileListName'] = 'layaairfiles.txt', knycw['ziyuFileData'] = {}, i61_2(knycw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), knycw;
  }(i_v2),
      y2v = function (b1i_8) {
    function xad95() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], xad95['__super']['call'](this), this['_sound'] = xad95['_createSound']();
    }n7wy(xad95, 'laya.wx.mini.MiniSound', b1i_8);var ykw7n = xad95['prototype'];return ykw7n['load'] = function (ibf) {
      var cenw = this;ibf = f8bli1['formatURL'](ibf), this['url'] = ibf;if (xad95['_audioCache'][ibf]) {
        this['event']('complete');return;
      }function gmt$0() {
        if (xad95['_null'] != undefined) cenw['_sound']['onCanplay'](xad95['_null']), cenw['_sound']['onError'](xad95['_null']);else try {
          cenw['_sound']['onCanplay'](null), cenw['_sound']['onError'](null), xad95['_null'] = null;
        } catch (apd9x5) {
          console['warn']('[wxmini] _clearSound:' + apd9x5), cenw['_sound']['onCanplay'](omh0$), cenw['_sound']['onError'](omh0$), xad95['_null'] = omh0$;
        }
      }function _v2i() {
        gmt$0(), wv3kyz['loaded'] = !![], wv3kyz['event']('complete'), xad95['_audioCache'][wv3kyz['url']] = wv3kyz;
      }function k_z(p45xa9) {
        console['error']('errCode=' + p45xa9['errCode'] + '  errMsg=' + p45xa9['errMsg']), gmt$0(), wv3kyz['event']('error');
      }function omh0$() {}this['_sound']['onCanplay'](_v2i), this['_sound']['onError'](k_z), this['_sound']['src'] = ibf;var wv3kyz = this;
    }, ykw7n['play'] = function (e7rcn, u9lfx) {
      e7rcn === void 0x0 && (e7rcn = 0x0), u9lfx === void 0x0 && (u9lfx = 0x0);var k7ncwy;if (this['url'] == u8fd['_tMusic']) {
        if (!xad95['_musicAudio']) xad95['_musicAudio'] = xad95['_createSound']();k7ncwy = xad95['_musicAudio'];
      } else k7ncwy = xad95['_createSound']();k7ncwy['src'] = this['url'];var i8fubl = new n7ercj(k7ncwy);return i8fubl['url'] = this['url'], i8fubl['loops'] = u9lfx, i8fubl['startTime'] = e7rcn, i8fubl['play'](), u8fd['addChannel'](i8fubl), i8fubl;
    }, ykw7n['dispose'] = function () {
      var xpq = xad95['_audioCache'][this['url']];xpq && (xpq['src'] = '', delete xad95['_audioCache'][this['url']]);
    }, d9lfux(0x0, ykw7n, 'duration', function () {
      return this['_sound']['duration'];
    }), xad95['_createSound'] = function () {
      return xad95['_id']++, i1v6['window']['wx']['createInnerAudioContext']();
    }, xad95['_musicAudio'] = null, xad95['_id'] = 0x0, xad95['_audioCache'] = {}, xad95['_null'] = undefined, xad95;
  }(i_v2),
      n7ercj = function (u5x9da) {
    function b16(ho0m$t) {
      this['_audio'] = null, this['_onEnd'] = null, b16['__super']['call'](this), this['_audio'] = ho0m$t, this['_onEnd'] = xd9uaf['bind'](this['__onEnd'], this), ho0m$t['onEnded'](this['_onEnd']);
    }n7wy(b16, 'laya.wx.mini.MiniSoundChannel', u5x9da);var wc7rn = b16['prototype'];return wc7rn['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (o4h5p['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, wc7rn['__onNull'] = function () {}, wc7rn['play'] = function () {
      this['isStopped'] = ![], u8fd['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, wc7rn['stop'] = function () {
      this['isStopped'] = !![], u8fd['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (b16['_null'] != undefined) this['_audio']['onEnded'](b16['_null']);else try {
        this['_audio']['onEnded'](null), b16['_null'] = null;
      } catch (yckzw3) {
        console['warn']('[wxmini] stop:' + yckzw3), this['_audio']['onEnded'](xd9uaf['bind'](this['__onNull'], this)), b16['_null'] = xd9uaf['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, wc7rn['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, wc7rn['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], u8fd['addChannel'](this), this['_audio']['play']();
    }, d9lfux(0x0, wc7rn, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), d9lfux(0x0, wc7rn, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), d9lfux(0x0, wc7rn, 'volume', function () {
      return 0x1;
    }, function (cjr7n) {}), b16['_null'] = undefined, b16;
  }(zky2v3);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var qohm0$ in Laya) {
    var a9du5x = Laya[qohm0$];a9du5x && a9du5x['__isclass'] && (exports[qohm0$] = a9du5x);
  }
});