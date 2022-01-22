var Q = wx.$v;
(function (window, document, djkm0) {
  var ck507v = djkm0['un'],
      x5pvw = djkm0['uns'],
      fs$9i = djkm0['static'],
      l1h6y = djkm0['class'],
      qwpvxg = djkm0['getset'],
      zuyh = djkm0['__newvec'],
      wqpxv = laya['utils']['Browser'],
      mk70c5 = laya['events']['Event'],
      epgx = laya['events']['EventDispatcher'],
      elz8 = laya['resource']['HTMLImage'],
      pvk5 = laya['utils']['Handler'],
      bxgwqe = laya['display']['Input'],
      h2_16y = laya['net']['Loader'],
      ck0dm = laya['maths']['Matrix'],
      jkm0c = laya['renders']['Render'],
      v7g5xp = laya['utils']['RunDriver'],
      g57px = laya['media']['Sound'],
      xw5gv = laya['media']['SoundChannel'],
      _6z1y = laya['media']['SoundManager'],
      bgq8e = laya['display']['Stage'],
      blu8z = laya['net']['URL'],
      v75kc = laya['utils']['Utils'],
      blu68z = function () {
    function xpw5g() {}return l1h6y(xpw5g, 'laya.wx.mini.MiniAdpter'), xpw5g['getJson'] = function (iof9s) {
      return JSON['parse'](iof9s);
    }, xpw5g['init'] = function (_243nt, t3_n42) {
      _243nt === void 0x0 && (_243nt = ![]), t3_n42 === void 0x0 && (t3_n42 = ![]);if (xpw5g['_inited']) return;xpw5g['window'] = window;if (xpw5g['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;xpw5g['_inited'] = !![], xpw5g['isZiYu'] = t3_n42, xpw5g['isPosMsgYu'] = _243nt, xpw5g['EnvConfig'] = {}, !xpw5g['isZiYu'] && (gxvwq['setNativeFileDir']('/layaairGame'), gxvwq['existDir'](gxvwq['fileNativeDir'], pvk5['create'](xpw5g, xpw5g['onMkdirCallBack']))), xpw5g['window']['focus'] = function () {}, djkm0['getUrlPath'] = function () {}, xpw5g['window']['logtime'] = function (cv07k5) {}, xpw5g['window']['alertTimeLog'] = function (ule8zb) {}, xpw5g['window']['resetShareInfo'] = function () {}, xpw5g['window']['CanvasRenderingContext2D'] = function () {}, xpw5g['window']['CanvasRenderingContext2D']['prototype'] = xpw5g['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xpw5g['window']['document']['body']['appendChild'] = function () {}, xpw5g['EnvConfig']['pixelRatioInt'] = 0x0, v7g5xp['getPixelRatio'] = xpw5g['pixelRatio'], xpw5g['_preCreateElement'] = wqpxv['createElement'], wqpxv['createElement'] = xpw5g['createElement'], v7g5xp['createShaderCondition'] = xpw5g['createShaderCondition'], v75kc['parseXMLFromString'] = xpw5g['parseXMLFromString'], bxgwqe['_createInputElement'] = uz6yh['_createInputElement'], xpw5g['EnvConfig']['load'] = h2_16y['prototype']['load'], h2_16y['prototype']['load'] = dk7c0m['prototype']['load'], xpw5g['isZiYu'] && _243nt && wx['onMessage'](function (_hn21) {
        _hn21['isLoad'] && (gxvwq['ziyuFileData'][_hn21['url']] = _hn21['data']);
      });
    }, xpw5g['onMkdirCallBack'] = function (yuhlz6, v0c75) {
      if (!yuhlz6) gxvwq['filesListObj'] = JSON['parse'](v0c75['data']);
    }, xpw5g['pixelRatio'] = function () {
      if (!xpw5g['EnvConfig']['pixelRatioInt']) try {
        var ue8b = wx['getSystemInfoSync']();return xpw5g['EnvConfig']['pixelRatioInt'] = ue8b['pixelRatio'], ue8b = ue8b, ue8b['pixelRatio'];
      } catch (pvk570) {}return xpw5g['EnvConfig']['pixelRatioInt'];
    }, xpw5g['createElement'] = function (cdmj) {
      if (cdmj == 'canvas') {
        var yh26;return xpw5g['idx'] == 0x1 ? xpw5g['isZiYu'] ? (yh26 = sharedCanvas, yh26['style'] = {}) : yh26 = window['canvas'] : yh26 = window['wx']['createCanvas'](), xpw5g['idx']++, yh26;
      } else {
        if (cdmj == 'textarea' || cdmj == 'input') return xpw5g['onCreateInput'](cdmj);else {
          if (cdmj == 'div') {
            var tn3_2 = xpw5g['_preCreateElement'](cdmj);return tn3_2['contains'] = function ($fi9o) {
              return null;
            }, tn3_2['removeChild'] = function (yz6h1) {}, tn3_2;
          } else return xpw5g['_preCreateElement'](cdmj);
        }
      }
    }, xpw5g['onCreateInput'] = function (firs9) {
      var bue8wq = xpw5g['_preCreateElement'](firs9);return bue8wq['focus'] = uz6yh['wxinputFocus'], bue8wq['blur'] = uz6yh['wxinputblur'], bue8wq['style'] = {}, bue8wq['value'] = 0x0, bue8wq['parentElement'] = {}, bue8wq['placeholder'] = {}, bue8wq['type'] = {}, bue8wq['setColor'] = function (md07kc) {}, bue8wq['setType'] = function (v5kx) {}, bue8wq['setFontFace'] = function (t_132) {}, bue8wq['addEventListener'] = function (h_1n2) {}, bue8wq['contains'] = function (t_n21h) {
        return null;
      }, bue8wq['removeChild'] = function (hyl6) {}, bue8wq;
    }, xpw5g['createShaderCondition'] = function (vwgpxq) {
      var t_342n = this,
          _231n = function () {
        var zy86lu = vwgpxq;return t_342n[vwgpxq['replace']('this.', '')];
      };return _231n;
    }, xpw5g['EnvConfig'] = null, xpw5g['window'] = null, xpw5g['_preCreateElement'] = null, xpw5g['_inited'] = ![], xpw5g['wxRequest'] = null, xpw5g['systemInfo'] = null, xpw5g['version'] = '0.0.1', xpw5g['isZiYu'] = ![], xpw5g['isPosMsgYu'] = ![], xpw5g['parseXMLFromString'] = function (k7x5v) {
      var bu8ql, gxwvpq;k7x5v = k7x5v['replace'](/>\s+</g, '><');try {
        bu8ql = new window['Parser']['DOMParser']()['parseFromString'](k7x5v, 'text/xml');
      } catch (k5m) {
        throw '需要引入xml解析库文件';
      }return bu8ql;
    }, xpw5g['idx'] = 0x1, xpw5g;
  }(),
      s9ifo = function () {
    function px57vg() {}l1h6y(px57vg, 'laya.wx.mini.MiniImage');var u8qble = px57vg['prototype'];return u8qble['_loadImage'] = function (xbeqg) {
      var $4ot3 = this,
          t2h_ = ![];xbeqg['indexOf']('layaNativeDir/') == -0x1 && (t2h_ = !![], xbeqg = blu8z['formatURL'](xbeqg));if (!gxvwq['getFileInfo'](xbeqg)) {
        if (xbeqg['indexOf']('http://') != -0x1 || xbeqg['indexOf']('https://') != -0x1) gxvwq['downImg'](xbeqg, new pvk5(px57vg, px57vg['onDownImgCallBack'], [xbeqg, $4ot3]), xbeqg);else px57vg['onCreateImage'](xbeqg, $4ot3, !![]);
      } else px57vg['onCreateImage'](xbeqg, $4ot3, !t2h_);
    }, px57vg['onDownImgCallBack'] = function (ons$, bwuq8, si$r9f) {
      if (!si$r9f) px57vg['onCreateImage'](ons$, bwuq8);else bwuq8['onError'](null);
    }, px57vg['onCreateImage'] = function (pg, da0, uwb8) {
      uwb8 === void 0x0 && (uwb8 = ![]);var z_y1h;if (!uwb8) {
        var r9$s = gxvwq['getFileInfo'](pg),
            wbu8 = r9$s['md5'];z_y1h = gxvwq['getFileNativePath'](wbu8);
      } else z_y1h = pg;if (da0['imgCache'] == null) da0['imgCache'] = {};var uwqeb;function pgxv5w() {
        uwqeb['onload'] = null, uwqeb['onerror'] = null, delete da0['imgCache'][pg];
      };var $sfr9i = function () {
        pgxv5w(), da0['onLoaded'](uwqeb);
      },
          i43$s = function () {
        pgxv5w(), da0['event']('error', 'Load image failed');
      };da0['_type'] == 'nativeimage' ? (uwqeb = new wqpxv['window']['Image'](), uwqeb['crossOrigin'] = '', uwqeb['onload'] = $sfr9i, uwqeb['onerror'] = i43$s, uwqeb['src'] = z_y1h, da0['imgCache'][pg] = uwqeb) : new elz8['create'](z_y1h, { 'onload': $sfr9i, 'onerror': i43$s, 'onCreate': function (o4$n) {
          uwqeb = o4$n, da0['imgCache'][pg] = o4$n;
        } });
    }, px57vg;
  }(),
      uz6yh = function () {
    function ad0mjc() {}return l1h6y(ad0mjc, 'laya.wx.mini.MiniInput'), ad0mjc['_createInputElement'] = function () {
      bxgwqe['_initInput'](bxgwqe['area'] = wqpxv['createElement']('textarea')), bxgwqe['_initInput'](bxgwqe['input'] = wqpxv['createElement']('input')), bxgwqe['inputContainer'] = wqpxv['createElement']('div'), bxgwqe['inputContainer']['style']['position'] = 'absolute', bxgwqe['inputContainer']['style']['zIndex'] = 0x186a0, wqpxv['container']['appendChild'](bxgwqe['inputContainer']), bxgwqe['inputContainer']['setPos'] = function (ubqe8, euq8l) {
        bxgwqe['inputContainer']['style']['left'] = ubqe8 + 'px', bxgwqe['inputContainer']['style']['top'] = euq8l + 'px';
      }, djkm0['stage']['on']('resize', null, ad0mjc['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (pv7k0) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), _6z1y['_soundClass'] = rf9i, _6z1y['_musicClass'] = rf9i;
    }, ad0mjc['_onStageResize'] = function () {
      var $iof = djkm0['stage']['_canvasTransform']['identity']();$iof['scale'](wqpxv['width'] / jkm0c['canvas']['width'] / v7g5xp['getPixelRatio'](), wqpxv['height'] / jkm0c['canvas']['height'] / v7g5xp['getPixelRatio']());
    }, ad0mjc['wxinputFocus'] = function (vkxp75) {
      var ul6z8 = bxgwqe['inputElement']['target'];if (ul6z8 && !ul6z8['editable']) return;blu68z['window']['wx']['offKeyboardConfirm'](), blu68z['window']['wx']['offKeyboardInput'](), blu68z['window']['wx']['showKeyboard']({ 'defaultValue': ul6z8['text'], 'maxLength': ul6z8['maxChars'], 'multiple': ul6z8['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (i$4) {}, 'fail': function (mdcj0a) {} }), blu68z['window']['wx']['onKeyboardConfirm'](function (ofs$) {
        var o$is43 = ofs$ ? ofs$['value'] : '';ul6z8['text'] = o$is43, ul6z8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), blu68z['window']['wx']['onKeyboardInput'](function (xqpwe) {
        var ton$3 = xqpwe ? xqpwe['value'] : '';if (!ul6z8['multiline']) {
          if (ton$3['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ul6z8['text'] = ton$3, ul6z8['event']('input');
      });
    }, ad0mjc['inputEnter'] = function () {
      bxgwqe['inputElement']['target']['focus'] = ![];
    }, ad0mjc['wxinputblur'] = function () {
      ad0mjc['hideKeyboard']();
    }, ad0mjc['hideKeyboard'] = function () {
      blu68z['window']['wx']['offKeyboardConfirm'](), blu68z['window']['wx']['offKeyboardInput'](), blu68z['window']['wx']['hideKeyboard']({ 'success': function (lz86yu) {
          console['log']('隐藏键盘');
        }, 'fail': function (ue8zbl) {
          console['log']('隐藏键盘出错:' + (ue8zbl ? ue8zbl['errMsg'] : ''));
        } });
    }, ad0mjc;
  }(),
      dk7c0m = function () {
    function lu8z() {}l1h6y(lu8z, 'laya.wx.mini.MiniLoader');var v5pkx7 = lu8z['prototype'];return v5pkx7['load'] = function (mcdk7, zhluy6, l6hu, eb8wuq, equlb8) {
      l6hu === void 0x0 && (l6hu = !![]), equlb8 === void 0x0 && (equlb8 = ![]);var hy_12 = this;hy_12['_url'] = mcdk7;if (mcdk7['indexOf']('data:image') === 0x0) hy_12['_type'] = zhluy6 = 'image';else hy_12['_type'] = zhluy6 || (zhluy6 = hy_12['getTypeFromUrl'](mcdk7));hy_12['_cache'] = l6hu, hy_12['_data'] = null;var mc7d0k = 'ascii';if (mcdk7['indexOf']('.fnt') != -0x1) mc7d0k = 'utf8';else zhluy6 == 'arraybuffer' && (mc7d0k = '');;var hz6y1 = v75kc['getFileExtension'](mcdk7);if (lu8z['_fileTypeArr']['indexOf'](hz6y1) != -0x1) blu68z['EnvConfig']['load']['call'](this, mcdk7, zhluy6, l6hu, eb8wuq, equlb8);else {
        if (!gxvwq['getFileInfo'](mcdk7)) {
          if (mcdk7['indexOf']('layaNativeDir/') != -0x1) {
            if (blu68z['isZiYu']) {
              var hy6zul = gxvwq['ziyuFileData'][mcdk7];hy_12['onLoaded'](hy6zul);return;
            } else {
              cosnole['log']('read read'), gxvwq['read'](mcdk7, mc7d0k, new pvk5(lu8z, lu8z['onReadNativeCallBack'], [mc7d0k, mcdk7, zhluy6, l6hu, eb8wuq, equlb8, hy_12]));return;
            }
          }if (blu8z['rootPath'] == '') var on42t3 = mcdk7;else on42t3 = mcdk7['split'](blu8z['rootPath'])[0x0];mcdk7['indexOf']('http://') != -0x1 || mcdk7['indexOf']('https://') != -0x1 ? blu68z['EnvConfig']['load']['call'](hy_12, mcdk7, zhluy6, l6hu, eb8wuq, equlb8) : gxvwq['readFile'](on42t3, mc7d0k, new pvk5(lu8z, lu8z['onReadNativeCallBack'], [mc7d0k, mcdk7, zhluy6, l6hu, eb8wuq, equlb8, hy_12]), mcdk7);
        } else blu68z['EnvConfig']['load']['call'](this, mcdk7, zhluy6, l6hu, eb8wuq, equlb8);
      }
    }, v5pkx7['resMgrLoad'] = function (fo9$, y6z_1, _23n4, h_t2, t3no, y6ulzh, p50kv) {
      _23n4 === void 0x0 && (_23n4 = 0x0), h_t2 === void 0x0 && (h_t2 = ![]), t3no === void 0x0 && (t3no = ![]), y6ulzh === void 0x0 && (y6ulzh = 0x0), p50kv === void 0x0 && (p50kv = 0x3), fo9$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', fo9$), blu68z['EnvConfig']['resMgrLoad'](fo9$, (o3s4i$, qeuwb8, beqwg) => {
        lu8z['prototype']['resMgrLoadCallBack'](o3s4i$, qeuwb8, beqwg, y6z_1);
      }, _23n4, h_t2, t3no, y6ulzh, p50kv);
    }, v5pkx7['resMgrLoadCallBack'] = function (ylu8z6, x5v7pg, t234on, acd0mj) {
      console['log']('buff:::', ylu8z6, t234on, gxvwq['fileNativeDir'] + '///' + gxvwq['fileListName']), acd0mj(ylu8z6, x5v7pg, t234on);
    }, v5pkx7['clearRes'] = function (thy2_, z61lyh) {
      z61lyh === void 0x0 && (z61lyh = ![]);var $sio4f = this;$sio4f['clearRes'](thy2_, z61lyh);var h12t_ = gxvwq['getFileInfo'](thy2_);if (h12t_ && (thy2_['indexOf']('http://') != -0x1 || thy2_['indexOf']('https://') != -0x1)) {
        var $i9fso = h12t_['md5'],
            xqvpg = gxvwq['getFileNativePath']($i9fso);gxvwq['remove'](xqvpg);
      }
    }, lu8z['onReadNativeCallBack'] = function (n1t_3, k0jcd, y_1z6h, _h21ty, nt23_4, _6z, mdk7c, o3nt, o2tn3) {
      _h21ty === void 0x0 && (_h21ty = !![]), _6z === void 0x0 && (_6z = ![]), o3nt === void 0x0 && (o3nt = 0x0);if (!o3nt) {
        var tn3$o;if (y_1z6h == 'json' || y_1z6h == 'atlas') tn3$o = blu68z['getJson'](o2tn3['data']);else y_1z6h == 'xml' ? tn3$o = v75kc['parseXMLFromString'](o2tn3['data']) : tn3$o = o2tn3['data'];mdk7c['onLoaded'](tn3$o), !blu68z['isZiYu'] && blu68z['isPosMsgYu'] && y_1z6h != 'arraybuffer' && wx['postMessage']({ 'url': k0jcd, 'data': tn3$o, 'isLoad': !![] });
      } else o3nt == 0x1 && blu68z['EnvConfig']['load']['call'](mdk7c, k0jcd, y_1z6h, _h21ty, nt23_4, _6z);
    }, fs$9i(lu8z, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), lu8z;
  }(),
      gxvwq = function (pvwqg) {
    function bl8equ() {
      bl8equ['__super']['call'](this);;
    }return l1h6y(bl8equ, 'laya.wx.mini.MiniFileMgr', pvwqg), bl8equ['isLoadFile'] = function (n_t4) {
      return bl8equ['_fileTypeArr']['indexOf'](n_t4) != -0x1 ? !![] : ![];
    }, bl8equ['getFileInfo'] = function (z6lub8) {
      var t21_hn = z6lub8['split']('?')[0x0],
          wpgex = bl8equ['filesListObj'][t21_hn];if (wpgex == null) return null;else return wpgex;return null;
    }, bl8equ['onFileUpdate'] = function (bu8zl, o4tn3) {
      var xpgvw = bu8zl['split']('/'),
          n2o34 = xpgvw[xpgvw['length'] - 0x1],
          nh = bl8equ['getFileInfo'](o4tn3);if (nh == null) bl8equ['onSaveFile'](o4tn3, n2o34);else {
        if (nh['readyUrl'] != o4tn3) bl8equ['remove'](n2o34, o4tn3);
      }
    }, bl8equ['exits'] = function (dmc0k, yz_16) {
      var t_13n = bl8equ['getFileNativePath'](dmc0k);bl8equ['fs']['getFileInfo']({ 'filePath': t_13n, 'success': function (jmad0c) {
          yz_16 != null && yz_16['runWith']([0x0, jmad0c]);
        }, 'fail': function (wvpxgq) {
          yz_16 != null && yz_16['runWith']([0x1, wvpxgq]);
        } });
    }, bl8equ['read'] = function (b8euwq, hlzyu6, kjc, _423) {
      hlzyu6 === void 0x0 && (hlzyu6 = 'ascill'), _423 === void 0x0 && (_423 = '');var djk0cm;_423 != '' ? djk0cm = bl8equ['getFileNativePath'](b8euwq) : djk0cm = b8euwq, bl8equ['fs']['readFile']({ 'filePath': djk0cm, 'encoding': hlzyu6, 'success': function (bqge8w) {
          kjc != null && kjc['runWith']([0x0, bqge8w]);
        }, 'fail': function (y_2h1t) {
          if (y_2h1t && _423 != '') bl8equ['down'](_423, hlzyu6, kjc, _423);else kjc != null && kjc['runWith']([0x1]);
        } });
    }, bl8equ['readNativeFile'] = function (exgwp, vgxpwq) {
      bl8equ['fs']['readFile']({ 'filePath': exgwp, 'encoding': '', 'success': function (xbqgew) {
          vgxpwq != null && vgxpwq['runWith']([0x0]);
        }, 'fail': function (ubz8e) {
          vgxpwq != null && vgxpwq['runWith']([0x1]);
        } });
    }, bl8equ['down'] = function (yuz86l, h6yul, h12_yt, mc057k) {
      h6yul === void 0x0 && (h6yul = 'ascill'), mc057k === void 0x0 && (mc057k = '');var t12y_ = bl8equ['getFileNativePath'](mc057k),
          quble8 = bl8equ['wxdown']({ 'url': yuz86l, 'filePath': t12y_, 'success': function (frs) {
          if (frs['statusCode'] === 0xc8) bl8equ['readFile'](frs['filePath'], h6yul, h12_yt, mc057k);
        }, 'fail': function (s$io34) {
          h12_yt != null && h12_yt['runWith']([0x1, s$io34]);
        } });quble8['onProgressUpdate'](function (xbqeg) {
        h12_yt != null && h12_yt['runWith']([0x2, xbqeg['progress']]);
      });
    }, bl8equ['readFile'] = function (gv75p, lz68ub, weqbg, iso$f) {
      lz68ub === void 0x0 && (lz68ub = 'ascill'), iso$f === void 0x0 && (iso$f = ''), bl8equ['fs']['readFile']({ 'filePath': gv75p, 'encoding': lz68ub, 'success': function (j0dmc) {
          if (gv75p['indexOf']('http://') != -0x1 || gv75p['indexOf']('https://') != -0x1) bl8equ['onFileUpdate'](gv75p, iso$f);weqbg != null && weqbg['runWith']([0x0, j0dmc]);
        }, 'fail': function (sofi4) {
          if (sofi4) weqbg != null && weqbg['runWith']([0x1, sofi4]);
        } });
    }, bl8equ['downImg'] = function (eqbw8g, beql, kp0v7) {
      kp0v7 === void 0x0 && (kp0v7 = '');var i9$rf = bl8equ['wxdown']({ 'url': eqbw8g, 'success': function (sirf) {
          sirf['statusCode'] === 0xc8 && bl8equ['copyFile'](sirf['tempFilePath'], kp0v7, beql);
        }, 'fail': function (i3os4) {
          beql != null && beql['runWith']([0x1, i3os4]);
        } });
    }, bl8equ['copyFile'] = function (s$if9o, djmac0, lyzu) {
      var x57pk = s$if9o['split']('/'),
          p5k7vx = x57pk[x57pk['length'] - 0x1],
          n23t_ = djmac0['split']('?')[0x0],
          xegqwb = bl8equ['getFileInfo'](djmac0),
          eq8blu = bl8equ['getFileNativePath'](p5k7vx);bl8equ['fs']['copyFile']({ 'srcPath': s$if9o, 'destPath': eq8blu, 'success': function (o2n34t) {
          if (!xegqwb) bl8equ['onSaveFile'](djmac0, p5k7vx), lyzu != null && lyzu['runWith']([0x0]);else {
            if (xegqwb['readyUrl'] != djmac0) bl8equ['remove'](p5k7vx, djmac0, lyzu);
          }
        }, 'fail': function (zeul8b) {
          lyzu != null && lyzu['runWith']([0x1, zeul8b]);
        } });
    }, bl8equ['getFileNativePath'] = function (u8qwb) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + u8qwb;
    }, bl8equ['remove'] = function (v57pkx, zuebl8, euqbw) {
      zuebl8 === void 0x0 && (zuebl8 = '');var gp5xwv = bl8equ['getFileInfo'](zuebl8),
          kcd7m0 = bl8equ['getFileNativePath'](gp5xwv['md5']);djkm0['loader']['clearRes'](gp5xwv['readyUrl']), bl8equ['fs']['unlink']({ 'filePath': kcd7m0, 'success': function (s3o$4i) {
          if (zuebl8 != '') bl8equ['onSaveFile'](zuebl8, v57pkx);euqbw != null && euqbw['runWith']([0x0]);
        }, 'fail': function (xpwvg5) {} });
    }, bl8equ['onSaveFile'] = function (y1_h62, zuly86) {
      var zeu8bl = y1_h62['split']('?')[0x0];bl8equ['filesListObj'][zeu8bl] = { 'md5': zuly86, 'readyUrl': y1_h62 }, bl8equ['fs']['writeFile']({ 'filePath': bl8equ['fileNativeDir'] + '/' + bl8equ['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bl8equ['filesListObj']), 'success': function (l61h) {
          console['log']('写入测试测试成功：', l61h);
        }, 'fail': function (cjd0am) {
          console['log']('写入测试测试失败：', cjd0am);
        } });
    }, bl8equ['existDir'] = function (wqpvx, bgeqw) {
      bl8equ['fs']['mkdir']({ 'dirPath': wqpvx, 'success': function (e8gbqw) {
          bgeqw != null && bgeqw['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (_1hn2) {
          if (_1hn2['errMsg']['indexOf']('file already exists') != -0x1) bl8equ['readSync'](bl8equ['fileListName'], 'utf8', bgeqw);else bgeqw != null && bgeqw['runWith']([0x1, _1hn2]);
        } });
    }, bl8equ['readSync'] = function (hzyl, quwe8b, t3n_21, o43$sn) {
      quwe8b === void 0x0 && (quwe8b = 'ascill'), o43$sn === void 0x0 && (o43$sn = '');var s$4o = bl8equ['getFileNativePath'](hzyl),
          o$t34;try {
        o$t34 = bl8equ['fs']['readFileSync'](s$4o), t3n_21 != null && t3n_21['runWith']([0x0, { 'data': o$t34 }]);
      } catch (wgb) {
        t3n_21 != null && t3n_21['runWith']([0x1]);
      }
    }, bl8equ['readCache'] = function () {}, bl8equ['writeCache'] = function (k07c5) {
      var _3tn12 = readyUrl['split']('?')[0x0];bl8equ['filesListObj'][_3tn12] = { 'md5': md5Name, 'readyUrl': readyUrl }, bl8equ['fs']['writeFile']({ 'filePath': bl8equ['fileNativeDir'] + '/' + bl8equ['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bl8equ['filesListObj']), 'success': function (i9rs) {}, 'fail': function (egqbx) {} });
    }, bl8equ['setNativeFileDir'] = function (ew8bg) {
      bl8equ['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ew8bg;
    }, bl8equ['filesListObj'] = {}, bl8equ['fileNativeDir'] = null, bl8equ['fileListName'] = 'layaairfiles.txt', bl8equ['ziyuFileData'] = {}, fs$9i(bl8equ, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), bl8equ;
  }(epgx),
      rf9i = function (_t1yh) {
    function n24ot() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], n24ot['__super']['call'](this), this['_sound'] = n24ot['_createSound']();
    }l1h6y(n24ot, 'laya.wx.mini.MiniSound', _t1yh);var s9fri = n24ot['prototype'];return s9fri['load'] = function (_1ty2h) {
      var fisr9 = this;_1ty2h = blu8z['formatURL'](_1ty2h), this['url'] = _1ty2h;if (n24ot['_audioCache'][_1ty2h]) {
        this['event']('complete');return;
      }function h_t12y() {
        if (n24ot['_null'] != undefined) fisr9['_sound']['onCanplay'](n24ot['_null']), fisr9['_sound']['onError'](n24ot['_null']);else try {
          fisr9['_sound']['onCanplay'](null), fisr9['_sound']['onError'](null), n24ot['_null'] = null;
        } catch ($si9fr) {
          console['warn']('[wxmini] _clearSound:' + $si9fr), fisr9['_sound']['onCanplay'](bl68z), fisr9['_sound']['onError'](bl68z), n24ot['_null'] = bl68z;
        }
      }function b8uwq() {
        h_t12y(), qwgxep['loaded'] = !![], qwgxep['event']('complete'), n24ot['_audioCache'][qwgxep['url']] = qwgxep;
      }function $s34(o3$ns) {
        console['error']('errCode=' + o3$ns['errCode'] + '  errMsg=' + o3$ns['errMsg']), h_t12y(), qwgxep['event']('error');
      }function bl68z() {}this['_sound']['onCanplay'](b8uwq), this['_sound']['onError']($s34), this['_sound']['src'] = _1ty2h;var qwgxep = this;
    }, s9fri['play'] = function (bwq, mcd7) {
      bwq === void 0x0 && (bwq = 0x0), mcd7 === void 0x0 && (mcd7 = 0x0);var lz61hy;if (this['url'] == _6z1y['_tMusic']) {
        if (!n24ot['_musicAudio']) n24ot['_musicAudio'] = n24ot['_createSound']();lz61hy = n24ot['_musicAudio'];
      } else lz61hy = n24ot['_createSound']();lz61hy['src'] = this['url'];var n_ht21 = new not34(lz61hy);return n_ht21['url'] = this['url'], n_ht21['loops'] = mcd7, n_ht21['startTime'] = bwq, n_ht21['play'](), _6z1y['addChannel'](n_ht21), n_ht21;
    }, s9fri['dispose'] = function () {
      var f$4si = n24ot['_audioCache'][this['url']];f$4si && (f$4si['src'] = '', delete n24ot['_audioCache'][this['url']]);
    }, qwpvxg(0x0, s9fri, 'duration', function () {
      return this['_sound']['duration'];
    }), n24ot['_createSound'] = function () {
      return n24ot['_id']++, blu68z['window']['wx']['createInnerAudioContext']();
    }, n24ot['_musicAudio'] = null, n24ot['_id'] = 0x0, n24ot['_audioCache'] = {}, n24ot['_null'] = undefined, n24ot;
  }(epgx),
      not34 = function (l6z8b) {
    function $oi9(tn3$) {
      this['_audio'] = null, this['_onEnd'] = null, $oi9['__super']['call'](this), this['_audio'] = tn3$, this['_onEnd'] = v75kc['bind'](this['__onEnd'], this), tn3$['onEnded'](this['_onEnd']);
    }l1h6y($oi9, 'laya.wx.mini.MiniSoundChannel', l6z8b);var sr$9f = $oi9['prototype'];return sr$9f['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (djkm0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, sr$9f['__onNull'] = function () {}, sr$9f['play'] = function () {
      this['isStopped'] = ![], _6z1y['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, sr$9f['stop'] = function () {
      this['isStopped'] = !![], _6z1y['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if ($oi9['_null'] != undefined) this['_audio']['onEnded']($oi9['_null']);else try {
        this['_audio']['onEnded'](null), $oi9['_null'] = null;
      } catch (xpe) {
        console['warn']('[wxmini] stop:' + xpe), this['_audio']['onEnded'](v75kc['bind'](this['__onNull'], this)), $oi9['_null'] = v75kc['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, sr$9f['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, sr$9f['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], _6z1y['addChannel'](this), this['_audio']['play']();
    }, qwpvxg(0x0, sr$9f, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), qwpvxg(0x0, sr$9f, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), qwpvxg(0x0, sr$9f, 'volume', function () {
      return 0x1;
    }, function (k57mc) {}), $oi9['_null'] = undefined, $oi9;
  }(xw5gv);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var qpvxw in Laya) {
    var $4n3os = Laya[qpvxw];$4n3os && $4n3os['__isclass'] && (exports[qpvxw] = $4n3os);
  }
});