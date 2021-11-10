var M = wx.$T;
(function (window, document, tlc24) {
  var yh_0xm = tlc24['un'],
      h5_yw = tlc24['uns'],
      abrjk = tlc24['static'],
      eozf7 = tlc24['class'],
      ywmx_h = tlc24['getset'],
      pzf7$d = tlc24['__newvec'],
      ukasj = laya['utils']['Browser'],
      f$7zp = laya['events']['Event'],
      ragkjb = laya['events']['EventDispatcher'],
      ci4t9 = laya['resource']['HTMLImage'],
      vdf$zp = laya['utils']['Handler'],
      kbjsau = laya['display']['Input'],
      rbjgka = laya['net']['Loader'],
      vi9c = laya['maths']['Matrix'],
      sb = laya['renders']['Render'],
      itcv2 = laya['utils']['RunDriver'],
      ze0q = laya['media']['Sound'],
      z$f7d = laya['media']['SoundChannel'],
      xo7eq = laya['media']['SoundManager'],
      bajuk = laya['display']['Stage'],
      w856h = laya['net']['URL'],
      f7peo = laya['utils']['Utils'],
      kasrjb = function () {
    function l4i2() {}return eozf7(l4i2, 'laya.wx.mini.MiniAdpter'), l4i2['getJson'] = function (oe0z7) {
      return JSON['parse'](oe0z7);
    }, l4i2['init'] = function (jrakgb, bskjau) {
      jrakgb === void 0x0 && (jrakgb = ![]), bskjau === void 0x0 && (bskjau = ![]);if (l4i2['_inited']) return;l4i2['window'] = window;if (l4i2['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;l4i2['_inited'] = !![], l4i2['isZiYu'] = bskjau, l4i2['isPosMsgYu'] = jrakgb, l4i2['EnvConfig'] = {}, !l4i2['isZiYu'] && (pid$9['setNativeFileDir']('/layaairGame'), pid$9['existDir'](pid$9['fileNativeDir'], vdf$zp['create'](l4i2, l4i2['onMkdirCallBack']))), l4i2['window']['focus'] = function () {}, tlc24['getUrlPath'] = function () {}, l4i2['window']['logtime'] = function (w_x) {}, l4i2['window']['alertTimeLog'] = function (myq0x_) {}, l4i2['window']['resetShareInfo'] = function () {}, l4i2['window']['CanvasRenderingContext2D'] = function () {}, l4i2['window']['CanvasRenderingContext2D']['prototype'] = l4i2['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], l4i2['window']['document']['body']['appendChild'] = function () {}, l4i2['EnvConfig']['pixelRatioInt'] = 0x0, itcv2['getPixelRatio'] = l4i2['pixelRatio'], l4i2['_preCreateElement'] = ukasj['createElement'], ukasj['createElement'] = l4i2['createElement'], itcv2['createShaderCondition'] = l4i2['createShaderCondition'], f7peo['parseXMLFromString'] = l4i2['parseXMLFromString'], kbjsau['_createInputElement'] = zfdpv['_createInputElement'], l4i2['EnvConfig']['load'] = rbjgka['prototype']['load'], rbjgka['prototype']['load'] = yo0qex['prototype']['load'], l4i2['isZiYu'] && jrakgb && wx['onMessage'](function (zfe7qo) {
        zfe7qo['isLoad'] && (pid$9['ziyuFileData'][zfe7qo['url']] = zfe7qo['data']);
      });
    }, l4i2['onMkdirCallBack'] = function (rbakg, z$f7pd) {
      if (!rbakg) pid$9['filesListObj'] = JSON['parse'](z$f7pd['data']);
    }, l4i2['pixelRatio'] = function () {
      if (!l4i2['EnvConfig']['pixelRatioInt']) try {
        var $9tivc = wx['getSystemInfoSync']();return l4i2['EnvConfig']['pixelRatioInt'] = $9tivc['pixelRatio'], $9tivc = $9tivc, $9tivc['pixelRatio'];
      } catch (g136) {}return l4i2['EnvConfig']['pixelRatioInt'];
    }, l4i2['createElement'] = function (xy0_qe) {
      if (xy0_qe == 'canvas') {
        var mh6w_;return l4i2['idx'] == 0x1 ? l4i2['isZiYu'] ? (mh6w_ = sharedCanvas, mh6w_['style'] = {}) : mh6w_ = window['canvas'] : mh6w_ = window['wx']['createCanvas'](), l4i2['idx']++, mh6w_;
      } else {
        if (xy0_qe == 'textarea' || xy0_qe == 'input') return l4i2['onCreateInput'](xy0_qe);else {
          if (xy0_qe == 'div') {
            var lct42 = l4i2['_preCreateElement'](xy0_qe);return lct42['contains'] = function (w85) {
              return null;
            }, lct42['removeChild'] = function (fp9$) {}, lct42;
          } else return l4i2['_preCreateElement'](xy0_qe);
        }
      }
    }, l4i2['onCreateInput'] = function (ci2v9t) {
      var $dz7 = l4i2['_preCreateElement'](ci2v9t);return $dz7['focus'] = zfdpv['wxinputFocus'], $dz7['blur'] = zfdpv['wxinputblur'], $dz7['style'] = {}, $dz7['value'] = 0x0, $dz7['parentElement'] = {}, $dz7['placeholder'] = {}, $dz7['type'] = {}, $dz7['setColor'] = function (vdp$9) {}, $dz7['setType'] = function (c4ilt) {}, $dz7['setFontFace'] = function (kbsu) {}, $dz7['addEventListener'] = function (g3bnrj) {}, $dz7['contains'] = function (z$vpf) {
        return null;
      }, $dz7['removeChild'] = function (vc2t) {}, $dz7;
    }, l4i2['createShaderCondition'] = function (sbjaku) {
      var r3njb = this,
          xhym_w = function () {
        var _hmxy = sbjaku;return r3njb[sbjaku['replace']('this.', '')];
      };return xhym_w;
    }, l4i2['EnvConfig'] = null, l4i2['window'] = null, l4i2['_preCreateElement'] = null, l4i2['_inited'] = ![], l4i2['wxRequest'] = null, l4i2['systemInfo'] = null, l4i2['version'] = '0.0.1', l4i2['isZiYu'] = ![], l4i2['isPosMsgYu'] = ![], l4i2['parseXMLFromString'] = function (n3jg8r) {
      var j3rg8n, o7eqx0;n3jg8r = n3jg8r['replace'](/>\s+</g, '><');try {
        j3rg8n = new window['Parser']['DOMParser']()['parseFromString'](n3jg8r, 'text/xml');
      } catch (eq0o7x) {
        throw '需要引入xml解析库文件';
      }return j3rg8n;
    }, l4i2['idx'] = 0x1, l4i2;
  }(),
      zqo7ef = function () {
    function m0q_xy() {}eozf7(m0q_xy, 'laya.wx.mini.MiniImage');var pdvi = m0q_xy['prototype'];return pdvi['_loadImage'] = function (d$9f) {
      var r1g83 = this,
          x_y0e = ![];d$9f['indexOf']('layaNativeDir/') == -0x1 && (x_y0e = !![], d$9f = w856h['formatURL'](d$9f));if (!pid$9['getFileInfo'](d$9f)) {
        if (d$9f['indexOf']('http://') != -0x1 || d$9f['indexOf']('https://') != -0x1) pid$9['downImg'](d$9f, new vdf$zp(m0q_xy, m0q_xy['onDownImgCallBack'], [d$9f, r1g83]), d$9f);else m0q_xy['onCreateImage'](d$9f, r1g83, !![]);
      } else m0q_xy['onCreateImage'](d$9f, r1g83, !x_y0e);
    }, m0q_xy['onDownImgCallBack'] = function (pd9vf$, tlic2, _w5m) {
      if (!_w5m) m0q_xy['onCreateImage'](pd9vf$, tlic2);else tlic2['onError'](null);
    }, m0q_xy['onCreateImage'] = function (v$pf9, r138n, b3ng) {
      b3ng === void 0x0 && (b3ng = ![]);var xq07eo;if (!b3ng) {
        var vtc2 = pid$9['getFileInfo'](v$pf9),
            fvdz$ = vtc2['md5'];xq07eo = pid$9['getFileNativePath'](fvdz$);
      } else xq07eo = v$pf9;if (r138n['imgCache'] == null) r138n['imgCache'] = {};var opzef;function vzfd$p() {
        opzef['onload'] = null, opzef['onerror'] = null, delete r138n['imgCache'][v$pf9];
      };var rkajgb = function () {
        vzfd$p(), r138n['onLoaded'](opzef);
      },
          bkjsr = function () {
        vzfd$p(), r138n['event']('error', 'Load image failed');
      };r138n['_type'] == 'nativeimage' ? (opzef = new ukasj['window']['Image'](), opzef['crossOrigin'] = '', opzef['onload'] = rkajgb, opzef['onerror'] = bkjsr, opzef['src'] = xq07eo, r138n['imgCache'][v$pf9] = opzef) : new ci4t9['create'](xq07eo, { 'onload': rkajgb, 'onerror': bkjsr, 'onCreate': function (zo7efq) {
          opzef = zo7efq, r138n['imgCache'][v$pf9] = zo7efq;
        } });
    }, m0q_xy;
  }(),
      zfdpv = function () {
    function gbjanr() {}return eozf7(gbjanr, 'laya.wx.mini.MiniInput'), gbjanr['_createInputElement'] = function () {
      kbjsau['_initInput'](kbjsau['area'] = ukasj['createElement']('textarea')), kbjsau['_initInput'](kbjsau['input'] = ukasj['createElement']('input')), kbjsau['inputContainer'] = ukasj['createElement']('div'), kbjsau['inputContainer']['style']['position'] = 'absolute', kbjsau['inputContainer']['style']['zIndex'] = 0x186a0, ukasj['container']['appendChild'](kbjsau['inputContainer']), kbjsau['inputContainer']['setPos'] = function (n3168, xoq7e0) {
        kbjsau['inputContainer']['style']['left'] = n3168 + 'px', kbjsau['inputContainer']['style']['top'] = xoq7e0 + 'px';
      }, tlc24['stage']['on']('resize', null, gbjanr['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (nrgj83) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xo7eq['_soundClass'] = hxwm_y, xo7eq['_musicClass'] = hxwm_y;
    }, gbjanr['_onStageResize'] = function () {
      var jarbgn = tlc24['stage']['_canvasTransform']['identity']();jarbgn['scale'](ukasj['width'] / sb['canvas']['width'] / itcv2['getPixelRatio'](), ukasj['height'] / sb['canvas']['height'] / itcv2['getPixelRatio']());
    }, gbjanr['wxinputFocus'] = function (ct9$) {
      var ic2v9t = kbjsau['inputElement']['target'];if (ic2v9t && !ic2v9t['editable']) return;kasrjb['window']['wx']['offKeyboardConfirm'](), kasrjb['window']['wx']['offKeyboardInput'](), kasrjb['window']['wx']['showKeyboard']({ 'defaultValue': ic2v9t['text'], 'maxLength': ic2v9t['maxChars'], 'multiple': ic2v9t['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (jr38ng) {}, 'fail': function (njrga) {} }), kasrjb['window']['wx']['onKeyboardConfirm'](function (ajusk) {
        var eqoyx0 = ajusk ? ajusk['value'] : '';ic2v9t['text'] = eqoyx0, ic2v9t['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), kasrjb['window']['wx']['onKeyboardInput'](function (jn3bgr) {
        var oqfze = jn3bgr ? jn3bgr['value'] : '';if (!ic2v9t['multiline']) {
          if (oqfze['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ic2v9t['text'] = oqfze, ic2v9t['event']('input');
      });
    }, gbjanr['inputEnter'] = function () {
      kbjsau['inputElement']['target']['focus'] = ![];
    }, gbjanr['wxinputblur'] = function () {
      gbjanr['hideKeyboard']();
    }, gbjanr['hideKeyboard'] = function () {
      kasrjb['window']['wx']['offKeyboardConfirm'](), kasrjb['window']['wx']['offKeyboardInput'](), kasrjb['window']['wx']['hideKeyboard']({ 'success': function (qzoe0) {
          console['log']('隐藏键盘');
        }, 'fail': function (hwm_5y) {
          console['log']('隐藏键盘出错:' + (hwm_5y ? hwm_5y['errMsg'] : ''));
        } });
    }, gbjanr;
  }(),
      yo0qex = function () {
    function rn8g31() {}eozf7(rn8g31, 'laya.wx.mini.MiniLoader');var bjn3rg = rn8g31['prototype'];return bjn3rg['load'] = function (efp7o, asbrj, i2lct4, jangbr, tvc9i) {
      i2lct4 === void 0x0 && (i2lct4 = !![]), tvc9i === void 0x0 && (tvc9i = ![]);var y0mx_q = this;y0mx_q['_url'] = efp7o;if (efp7o['indexOf']('data:image') === 0x0) y0mx_q['_type'] = asbrj = 'image';else y0mx_q['_type'] = asbrj || (asbrj = y0mx_q['getTypeFromUrl'](efp7o));y0mx_q['_cache'] = i2lct4, y0mx_q['_data'] = null;var yoxe0 = 'ascii';if (efp7o['indexOf']('.fnt') != -0x1) yoxe0 = 'utf8';else asbrj == 'arraybuffer' && (yoxe0 = '');;var eo7zq0 = f7peo['getFileExtension'](efp7o);if (rn8g31['_fileTypeArr']['indexOf'](eo7zq0) != -0x1) kasrjb['EnvConfig']['load']['call'](this, efp7o, asbrj, i2lct4, jangbr, tvc9i);else {
        if (!pid$9['getFileInfo'](efp7o)) {
          if (efp7o['indexOf']('layaNativeDir/') != -0x1) {
            if (kasrjb['isZiYu']) {
              var fpod7z = pid$9['ziyuFileData'][efp7o];y0mx_q['onLoaded'](fpod7z);return;
            } else {
              cosnole['log']('read read'), pid$9['read'](efp7o, yoxe0, new vdf$zp(rn8g31, rn8g31['onReadNativeCallBack'], [yoxe0, efp7o, asbrj, i2lct4, jangbr, tvc9i, y0mx_q]));return;
            }
          }if (w856h['rootPath'] == '') var _0xqey = efp7o;else _0xqey = efp7o['split'](w856h['rootPath'])[0x0];efp7o['indexOf']('http://') != -0x1 || efp7o['indexOf']('https://') != -0x1 ? kasrjb['EnvConfig']['load']['call'](y0mx_q, efp7o, asbrj, i2lct4, jangbr, tvc9i) : pid$9['readFile'](_0xqey, yoxe0, new vdf$zp(rn8g31, rn8g31['onReadNativeCallBack'], [yoxe0, efp7o, asbrj, i2lct4, jangbr, tvc9i, y0mx_q]), efp7o);
        } else kasrjb['EnvConfig']['load']['call'](this, efp7o, asbrj, i2lct4, jangbr, tvc9i);
      }
    }, bjn3rg['resMgrLoad'] = function (ng3r81, zofp7, _ymhw, pzd7f, eyq_, mq_0, h15mw) {
      _ymhw === void 0x0 && (_ymhw = 0x0), pzd7f === void 0x0 && (pzd7f = ![]), eyq_ === void 0x0 && (eyq_ = ![]), mq_0 === void 0x0 && (mq_0 = 0x0), h15mw === void 0x0 && (h15mw = 0x3), ng3r81['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ng3r81), kasrjb['EnvConfig']['resMgrLoad'](ng3r81, (rkbj, c$ivd9, j8r) => {
        rn8g31['prototype']['resMgrLoadCallBack'](rkbj, c$ivd9, j8r, zofp7);
      }, _ymhw, pzd7f, eyq_, mq_0, h15mw);
    }, bjn3rg['resMgrLoadCallBack'] = function (f7qzoe, zvfd$p, oefz7p, ti9v2c) {
      console['log']('buff:::', f7qzoe, oefz7p, pid$9['fileNativeDir'] + '///' + pid$9['fileListName']), ti9v2c(f7qzoe, zvfd$p, oefz7p);
    }, bjn3rg['clearRes'] = function (jnr83, w65h) {
      w65h === void 0x0 && (w65h = ![]);var _mw56h = this;_mw56h['clearRes'](jnr83, w65h);var pvd$f = pid$9['getFileInfo'](jnr83);if (pvd$f && (jnr83['indexOf']('http://') != -0x1 || jnr83['indexOf']('https://') != -0x1)) {
        var p$d7 = pvd$f['md5'],
            gakbj = pid$9['getFileNativePath'](p$d7);pid$9['remove'](gakbj);
      }
    }, rn8g31['onReadNativeCallBack'] = function (i2l4tc, yx0mh, it492c, pdvzf$, eoxy0, v$p9di, v2ict, karsj, nrg38) {
      pdvzf$ === void 0x0 && (pdvzf$ = !![]), v$p9di === void 0x0 && (v$p9di = ![]), karsj === void 0x0 && (karsj = 0x0);if (!karsj) {
        var jarbsk;if (it492c == 'json' || it492c == 'atlas') jarbsk = kasrjb['getJson'](nrg38['data']);else it492c == 'xml' ? jarbsk = f7peo['parseXMLFromString'](nrg38['data']) : jarbsk = nrg38['data'];v2ict['onLoaded'](jarbsk), !kasrjb['isZiYu'] && kasrjb['isPosMsgYu'] && it492c != 'arraybuffer' && wx['postMessage']({ 'url': yx0mh, 'data': jarbsk, 'isLoad': !![] });
      } else karsj == 0x1 && kasrjb['EnvConfig']['load']['call'](v2ict, yx0mh, it492c, pdvzf$, eoxy0, v$p9di);
    }, abrjk(rn8g31, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), rn8g31;
  }(),
      pid$9 = function ($p7dfz) {
    function fd$zv() {
      fd$zv['__super']['call'](this);;
    }return eozf7(fd$zv, 'laya.wx.mini.MiniFileMgr', $p7dfz), fd$zv['isLoadFile'] = function (ngjr83) {
      return fd$zv['_fileTypeArr']['indexOf'](ngjr83) != -0x1 ? !![] : ![];
    }, fd$zv['getFileInfo'] = function (rabjgn) {
      var ilct = rabjgn['split']('?')[0x0],
          _h5wym = fd$zv['filesListObj'][ilct];if (_h5wym == null) return null;else return _h5wym;return null;
    }, fd$zv['onFileUpdate'] = function ($pidv, d7fzpo) {
      var itv9$c = $pidv['split']('/'),
          ivp = itv9$c[itv9$c['length'] - 0x1],
          e0xyq_ = fd$zv['getFileInfo'](d7fzpo);if (e0xyq_ == null) fd$zv['onSaveFile'](d7fzpo, ivp);else {
        if (e0xyq_['readyUrl'] != d7fzpo) fd$zv['remove'](ivp, d7fzpo);
      }
    }, fd$zv['exits'] = function (ict92, barjgk) {
      var rjbsk = fd$zv['getFileNativePath'](ict92);fd$zv['fs']['getFileInfo']({ 'filePath': rjbsk, 'success': function (gbnjr) {
          barjgk != null && barjgk['runWith']([0x0, gbnjr]);
        }, 'fail': function (itvc$9) {
          barjgk != null && barjgk['runWith']([0x1, itvc$9]);
        } });
    }, fd$zv['read'] = function (zofeq7, _5mh6w, mh5w_6, n1g38) {
      _5mh6w === void 0x0 && (_5mh6w = 'ascill'), n1g38 === void 0x0 && (n1g38 = '');var _hw5m6;n1g38 != '' ? _hw5m6 = fd$zv['getFileNativePath'](zofeq7) : _hw5m6 = zofeq7, fd$zv['fs']['readFile']({ 'filePath': _hw5m6, 'encoding': _5mh6w, 'success': function (n31685) {
          mh5w_6 != null && mh5w_6['runWith']([0x0, n31685]);
        }, 'fail': function (anrgb) {
          if (anrgb && n1g38 != '') fd$zv['down'](n1g38, _5mh6w, mh5w_6, n1g38);else mh5w_6 != null && mh5w_6['runWith']([0x1]);
        } });
    }, fd$zv['readNativeFile'] = function (m_5h6, r138) {
      fd$zv['fs']['readFile']({ 'filePath': m_5h6, 'encoding': '', 'success': function (gbkjra) {
          r138 != null && r138['runWith']([0x0]);
        }, 'fail': function (fd9v$p) {
          r138 != null && r138['runWith']([0x1]);
        } });
    }, fd$zv['down'] = function (jkausb, kjbag, v$pdi, nj8gr) {
      kjbag === void 0x0 && (kjbag = 'ascill'), nj8gr === void 0x0 && (nj8gr = '');var dof7 = fd$zv['getFileNativePath'](nj8gr),
          vi9$dc = fd$zv['wxdown']({ 'url': jkausb, 'filePath': dof7, 'success': function (ip9$dv) {
          if (ip9$dv['statusCode'] === 0xc8) fd$zv['readFile'](ip9$dv['filePath'], kjbag, v$pdi, nj8gr);
        }, 'fail': function (eq7fz) {
          v$pdi != null && v$pdi['runWith']([0x1, eq7fz]);
        } });vi9$dc['onProgressUpdate'](function (mxq0_) {
        v$pdi != null && v$pdi['runWith']([0x2, mxq0_['progress']]);
      });
    }, fd$zv['readFile'] = function (r83ngj, _q0mx, kbgaj, n1r3) {
      _q0mx === void 0x0 && (_q0mx = 'ascill'), n1r3 === void 0x0 && (n1r3 = ''), fd$zv['fs']['readFile']({ 'filePath': r83ngj, 'encoding': _q0mx, 'success': function (h5w186) {
          if (r83ngj['indexOf']('http://') != -0x1 || r83ngj['indexOf']('https://') != -0x1) fd$zv['onFileUpdate'](r83ngj, n1r3);kbgaj != null && kbgaj['runWith']([0x0, h5w186]);
        }, 'fail': function (zdf7p$) {
          if (zdf7p$) kbgaj != null && kbgaj['runWith']([0x1, zdf7p$]);
        } });
    }, fd$zv['downImg'] = function (v$di9, h8w51, _eqxy0) {
      _eqxy0 === void 0x0 && (_eqxy0 = '');var h615w8 = fd$zv['wxdown']({ 'url': v$di9, 'success': function (zepo) {
          zepo['statusCode'] === 0xc8 && fd$zv['copyFile'](zepo['tempFilePath'], _eqxy0, h8w51);
        }, 'fail': function (m0xyq) {
          h8w51 != null && h8w51['runWith']([0x1, m0xyq]);
        } });
    }, fd$zv['copyFile'] = function (rasbk, y_hm0, qe0o) {
      var wh_my = rasbk['split']('/'),
          gnabr = wh_my[wh_my['length'] - 0x1],
          ticv = y_hm0['split']('?')[0x0],
          $c9t = fd$zv['getFileInfo'](y_hm0),
          $pzf = fd$zv['getFileNativePath'](gnabr);fd$zv['fs']['copyFile']({ 'srcPath': rasbk, 'destPath': $pzf, 'success': function (o7dpfz) {
          if (!$c9t) fd$zv['onSaveFile'](y_hm0, gnabr), qe0o != null && qe0o['runWith']([0x0]);else {
            if ($c9t['readyUrl'] != y_hm0) fd$zv['remove'](gnabr, y_hm0, qe0o);
          }
        }, 'fail': function (sbrakj) {
          qe0o != null && qe0o['runWith']([0x1, sbrakj]);
        } });
    }, fd$zv['getFileNativePath'] = function (i49c) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + i49c;
    }, fd$zv['remove'] = function (y0m_xq, ng3816, nj3rg) {
      ng3816 === void 0x0 && (ng3816 = '');var t9ci = fd$zv['getFileInfo'](ng3816),
          $vipd = fd$zv['getFileNativePath'](t9ci['md5']);tlc24['loader']['clearRes'](t9ci['readyUrl']), fd$zv['fs']['unlink']({ 'filePath': $vipd, 'success': function (n3g8r) {
          if (ng3816 != '') fd$zv['onSaveFile'](ng3816, y0m_xq);nj3rg != null && nj3rg['runWith']([0x0]);
        }, 'fail': function ($7pdz) {} });
    }, fd$zv['onSaveFile'] = function (i$cd9v, asbkrj) {
      var fq7o = i$cd9v['split']('?')[0x0];fd$zv['filesListObj'][fq7o] = { 'md5': asbkrj, 'readyUrl': i$cd9v }, fd$zv['fs']['writeFile']({ 'filePath': fd$zv['fileNativeDir'] + '/' + fd$zv['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fd$zv['filesListObj']), 'success': function (fopez7) {
          console['log']('写入测试测试成功：', fopez7);
        }, 'fail': function (d$fp9) {
          console['log']('写入测试测试失败：', d$fp9);
        } });
    }, fd$zv['existDir'] = function (rjbagk, _hym0) {
      fd$zv['fs']['mkdir']({ 'dirPath': rjbagk, 'success': function (eqy0xo) {
          _hym0 != null && _hym0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (rg83) {
          if (rg83['errMsg']['indexOf']('file already exists') != -0x1) fd$zv['readSync'](fd$zv['fileListName'], 'utf8', _hym0);else _hym0 != null && _hym0['runWith']([0x1, rg83]);
        } });
    }, fd$zv['readSync'] = function (o70q, pvfz, j3gbn, xy_hwm) {
      pvfz === void 0x0 && (pvfz = 'ascill'), xy_hwm === void 0x0 && (xy_hwm = '');var i24ctl = fd$zv['getFileNativePath'](o70q),
          w65m;try {
        w65m = fd$zv['fs']['readFileSync'](i24ctl), j3gbn != null && j3gbn['runWith']([0x0, { 'data': w65m }]);
      } catch (pi9d) {
        j3gbn != null && j3gbn['runWith']([0x1]);
      }
    }, fd$zv['readCache'] = function () {}, fd$zv['writeCache'] = function (njrgb3) {
      var dicv$9 = readyUrl['split']('?')[0x0];fd$zv['filesListObj'][dicv$9] = { 'md5': md5Name, 'readyUrl': readyUrl }, fd$zv['fs']['writeFile']({ 'filePath': fd$zv['fileNativeDir'] + '/' + fd$zv['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fd$zv['filesListObj']), 'success': function (dv9$) {}, 'fail': function (kragj) {} });
    }, fd$zv['setNativeFileDir'] = function (_xwyh) {
      fd$zv['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _xwyh;
    }, fd$zv['filesListObj'] = {}, fd$zv['fileNativeDir'] = null, fd$zv['fileListName'] = 'layaairfiles.txt', fd$zv['ziyuFileData'] = {}, abrjk(fd$zv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), fd$zv;
  }(ragkjb),
      hxwm_y = function (oz7fpd) {
    function askjub() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], askjub['__super']['call'](this), this['_sound'] = askjub['_createSound']();
    }eozf7(askjub, 'laya.wx.mini.MiniSound', oz7fpd);var foq = askjub['prototype'];return foq['load'] = function (cv9) {
      var _xy0qm = this;cv9 = w856h['formatURL'](cv9), this['url'] = cv9;if (askjub['_audioCache'][cv9]) {
        this['event']('complete');return;
      }function e0zo7q() {
        if (askjub['_null'] != undefined) _xy0qm['_sound']['onCanplay'](askjub['_null']), _xy0qm['_sound']['onError'](askjub['_null']);else try {
          _xy0qm['_sound']['onCanplay'](null), _xy0qm['_sound']['onError'](null), askjub['_null'] = null;
        } catch (xyhw_) {
          console['warn']('[wxmini] _clearSound:' + xyhw_), _xy0qm['_sound']['onCanplay'](jn38r), _xy0qm['_sound']['onError'](jn38r), askjub['_null'] = jn38r;
        }
      }function q7fe() {
        e0zo7q(), w36185['loaded'] = !![], w36185['event']('complete'), askjub['_audioCache'][w36185['url']] = w36185;
      }function $icv9(eo0yqx) {
        console['error']('errCode=' + eo0yqx['errCode'] + '  errMsg=' + eo0yqx['errMsg']), e0zo7q(), w36185['event']('error');
      }function jn38r() {}this['_sound']['onCanplay'](q7fe), this['_sound']['onError']($icv9), this['_sound']['src'] = cv9;var w36185 = this;
    }, foq['play'] = function (zfvp$, p7zfd) {
      zfvp$ === void 0x0 && (zfvp$ = 0x0), p7zfd === void 0x0 && (p7zfd = 0x0);var $9cdvi;if (this['url'] == xo7eq['_tMusic']) {
        if (!askjub['_musicAudio']) askjub['_musicAudio'] = askjub['_createSound']();$9cdvi = askjub['_musicAudio'];
      } else $9cdvi = askjub['_createSound']();$9cdvi['src'] = this['url'];var aujbks = new y0q_x($9cdvi);return aujbks['url'] = this['url'], aujbks['loops'] = p7zfd, aujbks['startTime'] = zfvp$, aujbks['play'](), xo7eq['addChannel'](aujbks), aujbks;
    }, foq['dispose'] = function () {
      var e7f = askjub['_audioCache'][this['url']];e7f && (e7f['src'] = '', delete askjub['_audioCache'][this['url']]);
    }, ywmx_h(0x0, foq, 'duration', function () {
      return this['_sound']['duration'];
    }), askjub['_createSound'] = function () {
      return askjub['_id']++, kasrjb['window']['wx']['createInnerAudioContext']();
    }, askjub['_musicAudio'] = null, askjub['_id'] = 0x0, askjub['_audioCache'] = {}, askjub['_null'] = undefined, askjub;
  }(ragkjb),
      y0q_x = function ($civd9) {
    function qexy0_(yex0q_) {
      this['_audio'] = null, this['_onEnd'] = null, qexy0_['__super']['call'](this), this['_audio'] = yex0q_, this['_onEnd'] = f7peo['bind'](this['__onEnd'], this), yex0q_['onEnded'](this['_onEnd']);
    }eozf7(qexy0_, 'laya.wx.mini.MiniSoundChannel', $civd9);var mh615w = qexy0_['prototype'];return mh615w['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (tlc24['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, mh615w['__onNull'] = function () {}, mh615w['play'] = function () {
      this['isStopped'] = ![], xo7eq['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, mh615w['stop'] = function () {
      this['isStopped'] = !![], xo7eq['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (qexy0_['_null'] != undefined) this['_audio']['onEnded'](qexy0_['_null']);else try {
        this['_audio']['onEnded'](null), qexy0_['_null'] = null;
      } catch (w5m6_) {
        console['warn']('[wxmini] stop:' + w5m6_), this['_audio']['onEnded'](f7peo['bind'](this['__onNull'], this)), qexy0_['_null'] = f7peo['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, mh615w['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, mh615w['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xo7eq['addChannel'](this), this['_audio']['play']();
    }, ywmx_h(0x0, mh615w, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ywmx_h(0x0, mh615w, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ywmx_h(0x0, mh615w, 'volume', function () {
      return 0x1;
    }, function (b3rjgn) {}), qexy0_['_null'] = undefined, qexy0_;
  }(z$f7d);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var hm_x in Laya) {
    var ofp7dz = Laya[hm_x];ofp7dz && ofp7dz['__isclass'] && (exports[hm_x] = ofp7dz);
  }
});