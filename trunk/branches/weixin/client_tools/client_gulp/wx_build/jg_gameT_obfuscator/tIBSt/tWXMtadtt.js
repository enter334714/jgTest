var M = wx.$T;
(function (window, document, buajs) {
  var _wm5 = buajs['un'],
      akusjb = buajs['uns'],
      pv$fz = buajs['static'],
      dzpf$ = buajs['class'],
      c49t2i = buajs['getset'],
      qoy0e = buajs['__newvec'],
      tci92v = laya['utils']['Browser'],
      $v9dp = laya['events']['Event'],
      vdf9p$ = laya['events']['EventDispatcher'],
      xh0m = laya['resource']['HTMLImage'],
      hmxw_ = laya['utils']['Handler'],
      _hm5 = laya['display']['Input'],
      $c9dvi = laya['net']['Loader'],
      dpfzo = laya['maths']['Matrix'],
      hymw5 = laya['renders']['Render'],
      xqo70 = laya['utils']['RunDriver'],
      r83g1 = laya['media']['Sound'],
      fz7ep = laya['media']['SoundChannel'],
      fd$z = laya['media']['SoundManager'],
      jbrgn3 = laya['display']['Stage'],
      i94tc2 = laya['net']['URL'],
      _hyx0 = laya['utils']['Utils'],
      bsjkua = function () {
    function $9tiv() {}return dzpf$($9tiv, 'laya.wx.mini.MiniAdpter'), $9tiv['getJson'] = function (lcit42) {
      return JSON['parse'](lcit42);
    }, $9tiv['init'] = function (m0xy_q, t$9vci) {
      m0xy_q === void 0x0 && (m0xy_q = ![]), t$9vci === void 0x0 && (t$9vci = ![]);if ($9tiv['_inited']) return;$9tiv['window'] = window;if ($9tiv['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;$9tiv['_inited'] = !![], $9tiv['isZiYu'] = t$9vci, $9tiv['isPosMsgYu'] = m0xy_q, $9tiv['EnvConfig'] = {}, !$9tiv['isZiYu'] && (w5y_hm['setNativeFileDir']('/layaairGame'), w5y_hm['existDir'](w5y_hm['fileNativeDir'], hmxw_['create']($9tiv, $9tiv['onMkdirCallBack']))), $9tiv['window']['focus'] = function () {}, buajs['getUrlPath'] = function () {}, $9tiv['window']['logtime'] = function (qyo0e) {}, $9tiv['window']['alertTimeLog'] = function (r38gnj) {}, $9tiv['window']['resetShareInfo'] = function () {}, $9tiv['window']['CanvasRenderingContext2D'] = function () {}, $9tiv['window']['CanvasRenderingContext2D']['prototype'] = $9tiv['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $9tiv['window']['document']['body']['appendChild'] = function () {}, $9tiv['EnvConfig']['pixelRatioInt'] = 0x0, xqo70['getPixelRatio'] = $9tiv['pixelRatio'], $9tiv['_preCreateElement'] = tci92v['createElement'], tci92v['createElement'] = $9tiv['createElement'], xqo70['createShaderCondition'] = $9tiv['createShaderCondition'], _hyx0['parseXMLFromString'] = $9tiv['parseXMLFromString'], _hm5['_createInputElement'] = wm_xhy['_createInputElement'], $9tiv['EnvConfig']['load'] = $c9dvi['prototype']['load'], $c9dvi['prototype']['load'] = w3518['prototype']['load'], $9tiv['isZiYu'] && m0xy_q && wx['onMessage'](function (zf7oqe) {
        zf7oqe['isLoad'] && (w5y_hm['ziyuFileData'][zf7oqe['url']] = zf7oqe['data']);
      });
    }, $9tiv['onMkdirCallBack'] = function (pofzd7, f$dv) {
      if (!pofzd7) w5y_hm['filesListObj'] = JSON['parse'](f$dv['data']);
    }, $9tiv['pixelRatio'] = function () {
      if (!$9tiv['EnvConfig']['pixelRatioInt']) try {
        var ct429 = wx['getSystemInfoSync']();return $9tiv['EnvConfig']['pixelRatioInt'] = ct429['pixelRatio'], ct429 = ct429, ct429['pixelRatio'];
      } catch (rgbj) {}return $9tiv['EnvConfig']['pixelRatioInt'];
    }, $9tiv['createElement'] = function (jskrba) {
      if (jskrba == 'canvas') {
        var bg3n;return $9tiv['idx'] == 0x1 ? $9tiv['isZiYu'] ? (bg3n = sharedCanvas, bg3n['style'] = {}) : bg3n = window['canvas'] : bg3n = window['wx']['createCanvas'](), $9tiv['idx']++, bg3n;
      } else {
        if (jskrba == 'textarea' || jskrba == 'input') return $9tiv['onCreateInput'](jskrba);else {
          if (jskrba == 'div') {
            var ngabj = $9tiv['_preCreateElement'](jskrba);return ngabj['contains'] = function (ey0q_) {
              return null;
            }, ngabj['removeChild'] = function (gbrk) {}, ngabj;
          } else return $9tiv['_preCreateElement'](jskrba);
        }
      }
    }, $9tiv['onCreateInput'] = function (c49i2t) {
      var _xyqe = $9tiv['_preCreateElement'](c49i2t);return _xyqe['focus'] = wm_xhy['wxinputFocus'], _xyqe['blur'] = wm_xhy['wxinputblur'], _xyqe['style'] = {}, _xyqe['value'] = 0x0, _xyqe['parentElement'] = {}, _xyqe['placeholder'] = {}, _xyqe['type'] = {}, _xyqe['setColor'] = function (r3nj8g) {}, _xyqe['setType'] = function (m5hw61) {}, _xyqe['setFontFace'] = function (tc$i9v) {}, _xyqe['addEventListener'] = function (n6513) {}, _xyqe['contains'] = function (fvpz$) {
        return null;
      }, _xyqe['removeChild'] = function ($dvz) {}, _xyqe;
    }, $9tiv['createShaderCondition'] = function (ivc92) {
      var p9vi = this,
          o7dfzp = function () {
        var m5hw_6 = ivc92;return p9vi[ivc92['replace']('this.', '')];
      };return o7dfzp;
    }, $9tiv['EnvConfig'] = null, $9tiv['window'] = null, $9tiv['_preCreateElement'] = null, $9tiv['_inited'] = ![], $9tiv['wxRequest'] = null, $9tiv['systemInfo'] = null, $9tiv['version'] = '0.0.1', $9tiv['isZiYu'] = ![], $9tiv['isPosMsgYu'] = ![], $9tiv['parseXMLFromString'] = function (f$9p) {
      var m65_hw, c92ti;f$9p = f$9p['replace'](/>\s+</g, '><');try {
        m65_hw = new window['Parser']['DOMParser']()['parseFromString'](f$9p, 'text/xml');
      } catch (cl42) {
        throw '需要引入xml解析库文件';
      }return m65_hw;
    }, $9tiv['idx'] = 0x1, $9tiv;
  }(),
      m6_wh5 = function () {
    function r3ngjb() {}dzpf$(r3ngjb, 'laya.wx.mini.MiniImage');var jkra = r3ngjb['prototype'];return jkra['_loadImage'] = function (ivd9) {
      var hm = this,
          q7zo0 = ![];ivd9['indexOf']('layaNativeDir/') == -0x1 && (q7zo0 = !![], ivd9 = i94tc2['formatURL'](ivd9));if (!w5y_hm['getFileInfo'](ivd9)) {
        if (ivd9['indexOf']('http://') != -0x1 || ivd9['indexOf']('https://') != -0x1) w5y_hm['downImg'](ivd9, new hmxw_(r3ngjb, r3ngjb['onDownImgCallBack'], [ivd9, hm]), ivd9);else r3ngjb['onCreateImage'](ivd9, hm, !![]);
      } else r3ngjb['onCreateImage'](ivd9, hm, !q7zo0);
    }, r3ngjb['onDownImgCallBack'] = function (it29, _65mh, pz7f$d) {
      if (!pz7f$d) r3ngjb['onCreateImage'](it29, _65mh);else _65mh['onError'](null);
    }, r3ngjb['onCreateImage'] = function (pz7eof, h5mwy_, bkajr) {
      bkajr === void 0x0 && (bkajr = ![]);var qmx_;if (!bkajr) {
        var l2ict4 = w5y_hm['getFileInfo'](pz7eof),
            abgjrn = l2ict4['md5'];qmx_ = w5y_hm['getFileNativePath'](abgjrn);
      } else qmx_ = pz7eof;if (h5mwy_['imgCache'] == null) h5mwy_['imgCache'] = {};var eofz7p;function dpz$7f() {
        eofz7p['onload'] = null, eofz7p['onerror'] = null, delete h5mwy_['imgCache'][pz7eof];
      };var opf7ez = function () {
        dpz$7f(), h5mwy_['onLoaded'](eofz7p);
      },
          jskrb = function () {
        dpz$7f(), h5mwy_['event']('error', 'Load image failed');
      };h5mwy_['_type'] == 'nativeimage' ? (eofz7p = new tci92v['window']['Image'](), eofz7p['crossOrigin'] = '', eofz7p['onload'] = opf7ez, eofz7p['onerror'] = jskrb, eofz7p['src'] = qmx_, h5mwy_['imgCache'][pz7eof] = eofz7p) : new xh0m['create'](qmx_, { 'onload': opf7ez, 'onerror': jskrb, 'onCreate': function (y_eq0x) {
          eofz7p = y_eq0x, h5mwy_['imgCache'][pz7eof] = y_eq0x;
        } });
    }, r3ngjb;
  }(),
      wm_xhy = function () {
    function vfpd$9() {}return dzpf$(vfpd$9, 'laya.wx.mini.MiniInput'), vfpd$9['_createInputElement'] = function () {
      _hm5['_initInput'](_hm5['area'] = tci92v['createElement']('textarea')), _hm5['_initInput'](_hm5['input'] = tci92v['createElement']('input')), _hm5['inputContainer'] = tci92v['createElement']('div'), _hm5['inputContainer']['style']['position'] = 'absolute', _hm5['inputContainer']['style']['zIndex'] = 0x186a0, tci92v['container']['appendChild'](_hm5['inputContainer']), _hm5['inputContainer']['setPos'] = function ($9di, kjrbga) {
        _hm5['inputContainer']['style']['left'] = $9di + 'px', _hm5['inputContainer']['style']['top'] = kjrbga + 'px';
      }, buajs['stage']['on']('resize', null, vfpd$9['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (z0e) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), fd$z['_soundClass'] = gjnr38, fd$z['_musicClass'] = gjnr38;
    }, vfpd$9['_onStageResize'] = function () {
      var _6m5 = buajs['stage']['_canvasTransform']['identity']();_6m5['scale'](tci92v['width'] / hymw5['canvas']['width'] / xqo70['getPixelRatio'](), tci92v['height'] / hymw5['canvas']['height'] / xqo70['getPixelRatio']());
    }, vfpd$9['wxinputFocus'] = function (w8h561) {
      var xh0y_m = _hm5['inputElement']['target'];if (xh0y_m && !xh0y_m['editable']) return;bsjkua['window']['wx']['offKeyboardConfirm'](), bsjkua['window']['wx']['offKeyboardInput'](), bsjkua['window']['wx']['showKeyboard']({ 'defaultValue': xh0y_m['text'], 'maxLength': xh0y_m['maxChars'], 'multiple': xh0y_m['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (zqe07o) {}, 'fail': function (oz7dpf) {} }), bsjkua['window']['wx']['onKeyboardConfirm'](function (df$pvz) {
        var rbajsk = df$pvz ? df$pvz['value'] : '';xh0y_m['text'] = rbajsk, xh0y_m['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), bsjkua['window']['wx']['onKeyboardInput'](function (fp$9) {
        var n3185 = fp$9 ? fp$9['value'] : '';if (!xh0y_m['multiline']) {
          if (n3185['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }xh0y_m['text'] = n3185, xh0y_m['event']('input');
      });
    }, vfpd$9['inputEnter'] = function () {
      _hm5['inputElement']['target']['focus'] = ![];
    }, vfpd$9['wxinputblur'] = function () {
      vfpd$9['hideKeyboard']();
    }, vfpd$9['hideKeyboard'] = function () {
      bsjkua['window']['wx']['offKeyboardConfirm'](), bsjkua['window']['wx']['offKeyboardInput'](), bsjkua['window']['wx']['hideKeyboard']({ 'success': function (epzof7) {
          console['log']('隐藏键盘');
        }, 'fail': function (w_mxh) {
          console['log']('隐藏键盘出错:' + (w_mxh ? w_mxh['errMsg'] : ''));
        } });
    }, vfpd$9;
  }(),
      w3518 = function () {
    function z$pdvf() {}dzpf$(z$pdvf, 'laya.wx.mini.MiniLoader');var n1r83g = z$pdvf['prototype'];return n1r83g['load'] = function (xye_q0, t$civ, zeqo0, zoq7e0, _mh) {
      zeqo0 === void 0x0 && (zeqo0 = !![]), _mh === void 0x0 && (_mh = ![]);var mxywh_ = this;mxywh_['_url'] = xye_q0;if (xye_q0['indexOf']('data:image') === 0x0) mxywh_['_type'] = t$civ = 'image';else mxywh_['_type'] = t$civ || (t$civ = mxywh_['getTypeFromUrl'](xye_q0));mxywh_['_cache'] = zeqo0, mxywh_['_data'] = null;var h586w1 = 'ascii';if (xye_q0['indexOf']('.fnt') != -0x1) h586w1 = 'utf8';else t$civ == 'arraybuffer' && (h586w1 = '');;var ct9iv$ = _hyx0['getFileExtension'](xye_q0);if (z$pdvf['_fileTypeArr']['indexOf'](ct9iv$) != -0x1) bsjkua['EnvConfig']['load']['call'](this, xye_q0, t$civ, zeqo0, zoq7e0, _mh);else {
        if (!w5y_hm['getFileInfo'](xye_q0)) {
          if (xye_q0['indexOf']('layaNativeDir/') != -0x1) {
            if (bsjkua['isZiYu']) {
              var fpe7 = w5y_hm['ziyuFileData'][xye_q0];mxywh_['onLoaded'](fpe7);return;
            } else {
              cosnole['log']('read read'), w5y_hm['read'](xye_q0, h586w1, new hmxw_(z$pdvf, z$pdvf['onReadNativeCallBack'], [h586w1, xye_q0, t$civ, zeqo0, zoq7e0, _mh, mxywh_]));return;
            }
          }if (i94tc2['rootPath'] == '') var v$9fd = xye_q0;else v$9fd = xye_q0['split'](i94tc2['rootPath'])[0x0];xye_q0['indexOf']('http://') != -0x1 || xye_q0['indexOf']('https://') != -0x1 ? bsjkua['EnvConfig']['load']['call'](mxywh_, xye_q0, t$civ, zeqo0, zoq7e0, _mh) : w5y_hm['readFile'](v$9fd, h586w1, new hmxw_(z$pdvf, z$pdvf['onReadNativeCallBack'], [h586w1, xye_q0, t$civ, zeqo0, zoq7e0, _mh, mxywh_]), xye_q0);
        } else bsjkua['EnvConfig']['load']['call'](this, xye_q0, t$civ, zeqo0, zoq7e0, _mh);
      }
    }, n1r83g['resMgrLoad'] = function (xeqoy, pi$dv9, $dzpf, pfd$z7, g3j8n, oqe07x, jgrkb) {
      $dzpf === void 0x0 && ($dzpf = 0x0), pfd$z7 === void 0x0 && (pfd$z7 = ![]), g3j8n === void 0x0 && (g3j8n = ![]), oqe07x === void 0x0 && (oqe07x = 0x0), jgrkb === void 0x0 && (jgrkb = 0x3), xeqoy['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xeqoy), bsjkua['EnvConfig']['resMgrLoad'](xeqoy, (o0e7xq, fz$pdv, jakrg) => {
        z$pdvf['prototype']['resMgrLoadCallBack'](o0e7xq, fz$pdv, jakrg, pi$dv9);
      }, $dzpf, pfd$z7, g3j8n, oqe07x, jgrkb);
    }, n1r83g['resMgrLoadCallBack'] = function ($dvp9f, hmy5, w856h1, nbgar) {
      console['log']('buff:::', $dvp9f, w856h1, w5y_hm['fileNativeDir'] + '///' + w5y_hm['fileListName']), nbgar($dvp9f, hmy5, w856h1);
    }, n1r83g['clearRes'] = function (o0exyq, _qxym) {
      _qxym === void 0x0 && (_qxym = ![]);var _6m5wh = this;_6m5wh['clearRes'](o0exyq, _qxym);var jagbr = w5y_hm['getFileInfo'](o0exyq);if (jagbr && (o0exyq['indexOf']('http://') != -0x1 || o0exyq['indexOf']('https://') != -0x1)) {
        var w516hm = jagbr['md5'],
            zpfvd = w5y_hm['getFileNativePath'](w516hm);w5y_hm['remove'](zpfvd);
      }
    }, z$pdvf['onReadNativeCallBack'] = function (pid9v$, xhm_yw, d7p$, g8r3nj, c9di, $fzdvp, kjuabs, njrg, _yqex0) {
      g8r3nj === void 0x0 && (g8r3nj = !![]), $fzdvp === void 0x0 && ($fzdvp = ![]), njrg === void 0x0 && (njrg = 0x0);if (!njrg) {
        var hwy_xm;if (d7p$ == 'json' || d7p$ == 'atlas') hwy_xm = bsjkua['getJson'](_yqex0['data']);else d7p$ == 'xml' ? hwy_xm = _hyx0['parseXMLFromString'](_yqex0['data']) : hwy_xm = _yqex0['data'];kjuabs['onLoaded'](hwy_xm), !bsjkua['isZiYu'] && bsjkua['isPosMsgYu'] && d7p$ != 'arraybuffer' && wx['postMessage']({ 'url': xhm_yw, 'data': hwy_xm, 'isLoad': !![] });
      } else njrg == 0x1 && bsjkua['EnvConfig']['load']['call'](kjuabs, xhm_yw, d7p$, g8r3nj, c9di, $fzdvp);
    }, pv$fz(z$pdvf, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), z$pdvf;
  }(),
      w5y_hm = function (it29vc) {
    function r813() {
      r813['__super']['call'](this);;
    }return dzpf$(r813, 'laya.wx.mini.MiniFileMgr', it29vc), r813['isLoadFile'] = function (jsubak) {
      return r813['_fileTypeArr']['indexOf'](jsubak) != -0x1 ? !![] : ![];
    }, r813['getFileInfo'] = function (g3rbj) {
      var it42lc = g3rbj['split']('?')[0x0],
          dp9vf = r813['filesListObj'][it42lc];if (dp9vf == null) return null;else return dp9vf;return null;
    }, r813['onFileUpdate'] = function (c9vti$, c429t) {
      var o7feqz = c9vti$['split']('/'),
          bagnj = o7feqz[o7feqz['length'] - 0x1],
          tci24 = r813['getFileInfo'](c429t);if (tci24 == null) r813['onSaveFile'](c429t, bagnj);else {
        if (tci24['readyUrl'] != c429t) r813['remove'](bagnj, c429t);
      }
    }, r813['exits'] = function (hm5w6, abjgrk) {
      var kjrbas = r813['getFileNativePath'](hm5w6);r813['fs']['getFileInfo']({ 'filePath': kjrbas, 'success': function (q_mxy) {
          abjgrk != null && abjgrk['runWith']([0x0, q_mxy]);
        }, 'fail': function (vp$i) {
          abjgrk != null && abjgrk['runWith']([0x1, vp$i]);
        } });
    }, r813['read'] = function (_mw56, pd7z$f, vzfd$p, m0_hx) {
      pd7z$f === void 0x0 && (pd7z$f = 'ascill'), m0_hx === void 0x0 && (m0_hx = '');var rnbj3g;m0_hx != '' ? rnbj3g = r813['getFileNativePath'](_mw56) : rnbj3g = _mw56, r813['fs']['readFile']({ 'filePath': rnbj3g, 'encoding': pd7z$f, 'success': function (brjg3n) {
          vzfd$p != null && vzfd$p['runWith']([0x0, brjg3n]);
        }, 'fail': function (n168g) {
          if (n168g && m0_hx != '') r813['down'](m0_hx, pd7z$f, vzfd$p, m0_hx);else vzfd$p != null && vzfd$p['runWith']([0x1]);
        } });
    }, r813['readNativeFile'] = function (_qeyx, y_e0) {
      r813['fs']['readFile']({ 'filePath': _qeyx, 'encoding': '', 'success': function (qxe07) {
          y_e0 != null && y_e0['runWith']([0x0]);
        }, 'fail': function (arsk) {
          y_e0 != null && y_e0['runWith']([0x1]);
        } });
    }, r813['down'] = function (zf7do, p9$di, _w5m, ngrab) {
      p9$di === void 0x0 && (p9$di = 'ascill'), ngrab === void 0x0 && (ngrab = '');var ofdz7 = r813['getFileNativePath'](ngrab),
          t4i92c = r813['wxdown']({ 'url': zf7do, 'filePath': ofdz7, 'success': function (y_qm) {
          if (y_qm['statusCode'] === 0xc8) r813['readFile'](y_qm['filePath'], p9$di, _w5m, ngrab);
        }, 'fail': function (zpe) {
          _w5m != null && _w5m['runWith']([0x1, zpe]);
        } });t4i92c['onProgressUpdate'](function (ngr8j) {
        _w5m != null && _w5m['runWith']([0x2, ngr8j['progress']]);
      });
    }, r813['readFile'] = function (bnrga, m5h16, q0e_x, jnrg38) {
      m5h16 === void 0x0 && (m5h16 = 'ascill'), jnrg38 === void 0x0 && (jnrg38 = ''), r813['fs']['readFile']({ 'filePath': bnrga, 'encoding': m5h16, 'success': function ($df7) {
          if (bnrga['indexOf']('http://') != -0x1 || bnrga['indexOf']('https://') != -0x1) r813['onFileUpdate'](bnrga, jnrg38);q0e_x != null && q0e_x['runWith']([0x0, $df7]);
        }, 'fail': function (jbr3ng) {
          if (jbr3ng) q0e_x != null && q0e_x['runWith']([0x1, jbr3ng]);
        } });
    }, r813['downImg'] = function (x_q0, angjbr, v$di) {
      v$di === void 0x0 && (v$di = '');var hm6w5_ = r813['wxdown']({ 'url': x_q0, 'success': function (ofqz) {
          ofqz['statusCode'] === 0xc8 && r813['copyFile'](ofqz['tempFilePath'], v$di, angjbr);
        }, 'fail': function (h0_) {
          angjbr != null && angjbr['runWith']([0x1, h0_]);
        } });
    }, r813['copyFile'] = function (nrg31, q7x0, t2c9v) {
      var gb3rnj = nrg31['split']('/'),
          _hm56 = gb3rnj[gb3rnj['length'] - 0x1],
          i2c49 = q7x0['split']('?')[0x0],
          wh6m1 = r813['getFileInfo'](q7x0),
          vic29t = r813['getFileNativePath'](_hm56);r813['fs']['copyFile']({ 'srcPath': nrg31, 'destPath': vic29t, 'success': function (yq0xm_) {
          if (!wh6m1) r813['onSaveFile'](q7x0, _hm56), t2c9v != null && t2c9v['runWith']([0x0]);else {
            if (wh6m1['readyUrl'] != q7x0) r813['remove'](_hm56, q7x0, t2c9v);
          }
        }, 'fail': function (abksr) {
          t2c9v != null && t2c9v['runWith']([0x1, abksr]);
        } });
    }, r813['getFileNativePath'] = function (mwh51) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + mwh51;
    }, r813['remove'] = function (gjn3rb, eq0x7, p$vdf) {
      eq0x7 === void 0x0 && (eq0x7 = '');var p7fdz = r813['getFileInfo'](eq0x7),
          _6 = r813['getFileNativePath'](p7fdz['md5']);buajs['loader']['clearRes'](p7fdz['readyUrl']), r813['fs']['unlink']({ 'filePath': _6, 'success': function (hm5_w) {
          if (eq0x7 != '') r813['onSaveFile'](eq0x7, gjn3rb);p$vdf != null && p$vdf['runWith']([0x0]);
        }, 'fail': function (n1638g) {} });
    }, r813['onSaveFile'] = function (g8n36, f$d9vp) {
      var n5381 = g8n36['split']('?')[0x0];r813['filesListObj'][n5381] = { 'md5': f$d9vp, 'readyUrl': g8n36 }, r813['fs']['writeFile']({ 'filePath': r813['fileNativeDir'] + '/' + r813['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r813['filesListObj']), 'success': function (f$vpz) {
          console['log']('写入测试测试成功：', f$vpz);
        }, 'fail': function (pvd9i$) {
          console['log']('写入测试测试失败：', pvd9i$);
        } });
    }, r813['existDir'] = function (pdz, i2lt) {
      r813['fs']['mkdir']({ 'dirPath': pdz, 'success': function (o07z) {
          i2lt != null && i2lt['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (wyh5_m) {
          if (wyh5_m['errMsg']['indexOf']('file already exists') != -0x1) r813['readSync'](r813['fileListName'], 'utf8', i2lt);else i2lt != null && i2lt['runWith']([0x1, wyh5_m]);
        } });
    }, r813['readSync'] = function (c$9ivt, m_0yx, d9$f, kabuj) {
      m_0yx === void 0x0 && (m_0yx = 'ascill'), kabuj === void 0x0 && (kabuj = '');var x0qo = r813['getFileNativePath'](c$9ivt),
          c2ti4l;try {
        c2ti4l = r813['fs']['readFileSync'](x0qo), d9$f != null && d9$f['runWith']([0x0, { 'data': c2ti4l }]);
      } catch (h0yx) {
        d9$f != null && d9$f['runWith']([0x1]);
      }
    }, r813['readCache'] = function () {}, r813['writeCache'] = function (pfv$d) {
      var yx_qe = readyUrl['split']('?')[0x0];r813['filesListObj'][yx_qe] = { 'md5': md5Name, 'readyUrl': readyUrl }, r813['fs']['writeFile']({ 'filePath': r813['fileNativeDir'] + '/' + r813['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r813['filesListObj']), 'success': function (g8nj) {}, 'fail': function (ct2il4) {} });
    }, r813['setNativeFileDir'] = function (mh5w_) {
      r813['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + mh5w_;
    }, r813['filesListObj'] = {}, r813['fileNativeDir'] = null, r813['fileListName'] = 'layaairfiles.txt', r813['ziyuFileData'] = {}, pv$fz(r813, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), r813;
  }(vdf9p$),
      gjnr38 = function (eqo07z) {
    function jba() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], jba['__super']['call'](this), this['_sound'] = jba['_createSound']();
    }dzpf$(jba, 'laya.wx.mini.MiniSound', eqo07z);var ci9$dv = jba['prototype'];return ci9$dv['load'] = function (oe7x0q) {
      var r8nj3g = this;oe7x0q = i94tc2['formatURL'](oe7x0q), this['url'] = oe7x0q;if (jba['_audioCache'][oe7x0q]) {
        this['event']('complete');return;
      }function m0xyh_() {
        if (jba['_null'] != undefined) r8nj3g['_sound']['onCanplay'](jba['_null']), r8nj3g['_sound']['onError'](jba['_null']);else try {
          r8nj3g['_sound']['onCanplay'](null), r8nj3g['_sound']['onError'](null), jba['_null'] = null;
        } catch (nrg3b) {
          console['warn']('[wxmini] _clearSound:' + nrg3b), r8nj3g['_sound']['onCanplay'](i249tc), r8nj3g['_sound']['onError'](i249tc), jba['_null'] = i249tc;
        }
      }function nr3jgb() {
        m0xyh_(), ci4t9['loaded'] = !![], ci4t9['event']('complete'), jba['_audioCache'][ci4t9['url']] = ci4t9;
      }function bgjkr(ye0_qx) {
        console['error']('errCode=' + ye0_qx['errCode'] + '  errMsg=' + ye0_qx['errMsg']), m0xyh_(), ci4t9['event']('error');
      }function i249tc() {}this['_sound']['onCanplay'](nr3jgb), this['_sound']['onError'](bgjkr), this['_sound']['src'] = oe7x0q;var ci4t9 = this;
    }, ci9$dv['play'] = function (r3g8n, hw5m16) {
      r3g8n === void 0x0 && (r3g8n = 0x0), hw5m16 === void 0x0 && (hw5m16 = 0x0);var bsr;if (this['url'] == fd$z['_tMusic']) {
        if (!jba['_musicAudio']) jba['_musicAudio'] = jba['_createSound']();bsr = jba['_musicAudio'];
      } else bsr = jba['_createSound']();bsr['src'] = this['url'];var vit92 = new n5(bsr);return vit92['url'] = this['url'], vit92['loops'] = hw5m16, vit92['startTime'] = r3g8n, vit92['play'](), fd$z['addChannel'](vit92), vit92;
    }, ci9$dv['dispose'] = function () {
      var yxh0_ = jba['_audioCache'][this['url']];yxh0_ && (yxh0_['src'] = '', delete jba['_audioCache'][this['url']]);
    }, c49t2i(0x0, ci9$dv, 'duration', function () {
      return this['_sound']['duration'];
    }), jba['_createSound'] = function () {
      return jba['_id']++, bsjkua['window']['wx']['createInnerAudioContext']();
    }, jba['_musicAudio'] = null, jba['_id'] = 0x0, jba['_audioCache'] = {}, jba['_null'] = undefined, jba;
  }(vdf9p$),
      n5 = function (ivt$9c) {
    function qexoy(h5ymw_) {
      this['_audio'] = null, this['_onEnd'] = null, qexoy['__super']['call'](this), this['_audio'] = h5ymw_, this['_onEnd'] = _hyx0['bind'](this['__onEnd'], this), h5ymw_['onEnded'](this['_onEnd']);
    }dzpf$(qexoy, 'laya.wx.mini.MiniSoundChannel', ivt$9c);var jkargb = qexoy['prototype'];return jkargb['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (buajs['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jkargb['__onNull'] = function () {}, jkargb['play'] = function () {
      this['isStopped'] = ![], fd$z['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, jkargb['stop'] = function () {
      this['isStopped'] = !![], fd$z['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (qexoy['_null'] != undefined) this['_audio']['onEnded'](qexoy['_null']);else try {
        this['_audio']['onEnded'](null), qexoy['_null'] = null;
      } catch (r1g8n3) {
        console['warn']('[wxmini] stop:' + r1g8n3), this['_audio']['onEnded'](_hyx0['bind'](this['__onNull'], this)), qexoy['_null'] = _hyx0['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, jkargb['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, jkargb['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], fd$z['addChannel'](this), this['_audio']['play']();
    }, c49t2i(0x0, jkargb, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), c49t2i(0x0, jkargb, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), c49t2i(0x0, jkargb, 'volume', function () {
      return 0x1;
    }, function (angrj) {}), qexoy['_null'] = undefined, qexoy;
  }(fz7ep);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var nabg in Laya) {
    var y_xq0 = Laya[nabg];y_xq0 && y_xq0['__isclass'] && (exports[nabg] = y_xq0);
  }
});