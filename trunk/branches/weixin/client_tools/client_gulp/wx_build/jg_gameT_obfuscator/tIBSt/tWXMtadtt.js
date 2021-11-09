var M = wx.$T;
(function (window, document, e0xq7) {
  var _mwh65 = e0xq7['un'],
      o7qfz = e0xq7['uns'],
      f$pvz = e0xq7['static'],
      rgjkba = e0xq7['class'],
      pv$f9d = e0xq7['getset'],
      jbsar = e0xq7['__newvec'],
      zp$7f = laya['utils']['Browser'],
      zo7q0 = laya['events']['Event'],
      ajbkr = laya['events']['EventDispatcher'],
      r8n1g = laya['resource']['HTMLImage'],
      hm5w1 = laya['utils']['Handler'],
      zofq7e = laya['display']['Input'],
      y0q_m = laya['net']['Loader'],
      e7oqz0 = laya['maths']['Matrix'],
      p$df = laya['renders']['Render'],
      dicv$ = laya['utils']['RunDriver'],
      fe7p = laya['media']['Sound'],
      w_mxhy = laya['media']['SoundChannel'],
      ct29v = laya['media']['SoundManager'],
      ngbjar = laya['display']['Stage'],
      ksjbra = laya['net']['URL'],
      vp$d9i = laya['utils']['Utils'],
      w618 = function () {
    function bjnr3g() {}return rgjkba(bjnr3g, 'laya.wx.mini.MiniAdpter'), bjnr3g['getJson'] = function (w5_6mh) {
      return JSON['parse'](w5_6mh);
    }, bjnr3g['init'] = function (i$v9c, _wym5h) {
      i$v9c === void 0x0 && (i$v9c = ![]), _wym5h === void 0x0 && (_wym5h = ![]);if (bjnr3g['_inited']) return;bjnr3g['window'] = window;if (bjnr3g['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;bjnr3g['_inited'] = !![], bjnr3g['isZiYu'] = _wym5h, bjnr3g['isPosMsgYu'] = i$v9c, bjnr3g['EnvConfig'] = {}, !bjnr3g['isZiYu'] && (m_hw5y['setNativeFileDir']('/layaairGame'), m_hw5y['existDir'](m_hw5y['fileNativeDir'], hm5w1['create'](bjnr3g, bjnr3g['onMkdirCallBack']))), bjnr3g['window']['focus'] = function () {}, e0xq7['getUrlPath'] = function () {}, bjnr3g['window']['logtime'] = function (hmxw_) {}, bjnr3g['window']['alertTimeLog'] = function (xq0e7o) {}, bjnr3g['window']['resetShareInfo'] = function () {}, bjnr3g['window']['CanvasRenderingContext2D'] = function () {}, bjnr3g['window']['CanvasRenderingContext2D']['prototype'] = bjnr3g['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], bjnr3g['window']['document']['body']['appendChild'] = function () {}, bjnr3g['EnvConfig']['pixelRatioInt'] = 0x0, dicv$['getPixelRatio'] = bjnr3g['pixelRatio'], bjnr3g['_preCreateElement'] = zp$7f['createElement'], zp$7f['createElement'] = bjnr3g['createElement'], dicv$['createShaderCondition'] = bjnr3g['createShaderCondition'], vp$d9i['parseXMLFromString'] = bjnr3g['parseXMLFromString'], zofq7e['_createInputElement'] = xw_h['_createInputElement'], bjnr3g['EnvConfig']['load'] = y0q_m['prototype']['load'], y0q_m['prototype']['load'] = mwy['prototype']['load'], bjnr3g['isZiYu'] && i$v9c && wx['onMessage'](function (z0q7eo) {
        z0q7eo['isLoad'] && (m_hw5y['ziyuFileData'][z0q7eo['url']] = z0q7eo['data']);
      });
    }, bjnr3g['onMkdirCallBack'] = function (f7ezo, ivcd9) {
      if (!f7ezo) m_hw5y['filesListObj'] = JSON['parse'](ivcd9['data']);
    }, bjnr3g['pixelRatio'] = function () {
      if (!bjnr3g['EnvConfig']['pixelRatioInt']) try {
        var wmh516 = wx['getSystemInfoSync']();return bjnr3g['EnvConfig']['pixelRatioInt'] = wmh516['pixelRatio'], wmh516 = wmh516, wmh516['pixelRatio'];
      } catch (hm0_x) {}return bjnr3g['EnvConfig']['pixelRatioInt'];
    }, bjnr3g['createElement'] = function (fz7eqo) {
      if (fz7eqo == 'canvas') {
        var kaub;return bjnr3g['idx'] == 0x1 ? bjnr3g['isZiYu'] ? (kaub = sharedCanvas, kaub['style'] = {}) : kaub = window['canvas'] : kaub = window['wx']['createCanvas'](), bjnr3g['idx']++, kaub;
      } else {
        if (fz7eqo == 'textarea' || fz7eqo == 'input') return bjnr3g['onCreateInput'](fz7eqo);else {
          if (fz7eqo == 'div') {
            var hmw165 = bjnr3g['_preCreateElement'](fz7eqo);return hmw165['contains'] = function (z7dpo) {
              return null;
            }, hmw165['removeChild'] = function (vcit2) {}, hmw165;
          } else return bjnr3g['_preCreateElement'](fz7eqo);
        }
      }
    }, bjnr3g['onCreateInput'] = function (dzpo7f) {
      var jan = bjnr3g['_preCreateElement'](dzpo7f);return jan['focus'] = xw_h['wxinputFocus'], jan['blur'] = xw_h['wxinputblur'], jan['style'] = {}, jan['value'] = 0x0, jan['parentElement'] = {}, jan['placeholder'] = {}, jan['type'] = {}, jan['setColor'] = function (cl4ti2) {}, jan['setType'] = function (gjbna) {}, jan['setFontFace'] = function (tl2c4) {}, jan['addEventListener'] = function (f7qoz) {}, jan['contains'] = function (bkarjs) {
        return null;
      }, jan['removeChild'] = function (ilc4t) {}, jan;
    }, bjnr3g['createShaderCondition'] = function (it9$) {
      var mhw6 = this,
          zdpv$f = function () {
        var jskarb = it9$;return mhw6[it9$['replace']('this.', '')];
      };return zdpv$f;
    }, bjnr3g['EnvConfig'] = null, bjnr3g['window'] = null, bjnr3g['_preCreateElement'] = null, bjnr3g['_inited'] = ![], bjnr3g['wxRequest'] = null, bjnr3g['systemInfo'] = null, bjnr3g['version'] = '0.0.1', bjnr3g['isZiYu'] = ![], bjnr3g['isPosMsgYu'] = ![], bjnr3g['parseXMLFromString'] = function (d7opf) {
      var zvpf$d, yq_x0e;d7opf = d7opf['replace'](/>\s+</g, '><');try {
        zvpf$d = new window['Parser']['DOMParser']()['parseFromString'](d7opf, 'text/xml');
      } catch (r3ng8j) {
        throw '需要引入xml解析库文件';
      }return zvpf$d;
    }, bjnr3g['idx'] = 0x1, bjnr3g;
  }(),
      baksr = function () {
    function vzdf$() {}rgjkba(vzdf$, 'laya.wx.mini.MiniImage');var w85h1 = vzdf$['prototype'];return w85h1['_loadImage'] = function (r81n3g) {
      var dzpof = this,
          zqof = ![];r81n3g['indexOf']('layaNativeDir/') == -0x1 && (zqof = !![], r81n3g = ksjbra['formatURL'](r81n3g));if (!m_hw5y['getFileInfo'](r81n3g)) {
        if (r81n3g['indexOf']('http://') != -0x1 || r81n3g['indexOf']('https://') != -0x1) m_hw5y['downImg'](r81n3g, new hm5w1(vzdf$, vzdf$['onDownImgCallBack'], [r81n3g, dzpof]), r81n3g);else vzdf$['onCreateImage'](r81n3g, dzpof, !![]);
      } else vzdf$['onCreateImage'](r81n3g, dzpof, !zqof);
    }, vzdf$['onDownImgCallBack'] = function ($vdzpf, tv2, _hw5y) {
      if (!_hw5y) vzdf$['onCreateImage']($vdzpf, tv2);else tv2['onError'](null);
    }, vzdf$['onCreateImage'] = function (qzoe7f, $d7f, $t9cv) {
      $t9cv === void 0x0 && ($t9cv = ![]);var myxh0;if (!$t9cv) {
        var mwy_ = m_hw5y['getFileInfo'](qzoe7f),
            i$tc = mwy_['md5'];myxh0 = m_hw5y['getFileNativePath'](i$tc);
      } else myxh0 = qzoe7f;if ($d7f['imgCache'] == null) $d7f['imgCache'] = {};var v$fzd;function t924() {
        v$fzd['onload'] = null, v$fzd['onerror'] = null, delete $d7f['imgCache'][qzoe7f];
      };var v92t = function () {
        t924(), $d7f['onLoaded'](v$fzd);
      },
          dpv = function () {
        t924(), $d7f['event']('error', 'Load image failed');
      };$d7f['_type'] == 'nativeimage' ? (v$fzd = new zp$7f['window']['Image'](), v$fzd['crossOrigin'] = '', v$fzd['onload'] = v92t, v$fzd['onerror'] = dpv, v$fzd['src'] = myxh0, $d7f['imgCache'][qzoe7f] = v$fzd) : new r8n1g['create'](myxh0, { 'onload': v92t, 'onerror': dpv, 'onCreate': function (bgrak) {
          v$fzd = bgrak, $d7f['imgCache'][qzoe7f] = bgrak;
        } });
    }, vzdf$;
  }(),
      xw_h = function () {
    function xh_ym0() {}return rgjkba(xh_ym0, 'laya.wx.mini.MiniInput'), xh_ym0['_createInputElement'] = function () {
      zofq7e['_initInput'](zofq7e['area'] = zp$7f['createElement']('textarea')), zofq7e['_initInput'](zofq7e['input'] = zp$7f['createElement']('input')), zofq7e['inputContainer'] = zp$7f['createElement']('div'), zofq7e['inputContainer']['style']['position'] = 'absolute', zofq7e['inputContainer']['style']['zIndex'] = 0x186a0, zp$7f['container']['appendChild'](zofq7e['inputContainer']), zofq7e['inputContainer']['setPos'] = function (xmw_hy, kjsabu) {
        zofq7e['inputContainer']['style']['left'] = xmw_hy + 'px', zofq7e['inputContainer']['style']['top'] = kjsabu + 'px';
      }, e0xq7['stage']['on']('resize', null, xh_ym0['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (yxm_w) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ct29v['_soundClass'] = bnj3, ct29v['_musicClass'] = bnj3;
    }, xh_ym0['_onStageResize'] = function () {
      var jrbak = e0xq7['stage']['_canvasTransform']['identity']();jrbak['scale'](zp$7f['width'] / p$df['canvas']['width'] / dicv$['getPixelRatio'](), zp$7f['height'] / p$df['canvas']['height'] / dicv$['getPixelRatio']());
    }, xh_ym0['wxinputFocus'] = function (z$dvpf) {
      var $fzvp = zofq7e['inputElement']['target'];if ($fzvp && !$fzvp['editable']) return;w618['window']['wx']['offKeyboardConfirm'](), w618['window']['wx']['offKeyboardInput'](), w618['window']['wx']['showKeyboard']({ 'defaultValue': $fzvp['text'], 'maxLength': $fzvp['maxChars'], 'multiple': $fzvp['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (dp9i$v) {}, 'fail': function (q0xy) {} }), w618['window']['wx']['onKeyboardConfirm'](function (mh56_) {
        var eo0qxy = mh56_ ? mh56_['value'] : '';$fzvp['text'] = eo0qxy, $fzvp['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), w618['window']['wx']['onKeyboardInput'](function (pf$vd) {
        var arkjgb = pf$vd ? pf$vd['value'] : '';if (!$fzvp['multiline']) {
          if (arkjgb['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }$fzvp['text'] = arkjgb, $fzvp['event']('input');
      });
    }, xh_ym0['inputEnter'] = function () {
      zofq7e['inputElement']['target']['focus'] = ![];
    }, xh_ym0['wxinputblur'] = function () {
      xh_ym0['hideKeyboard']();
    }, xh_ym0['hideKeyboard'] = function () {
      w618['window']['wx']['offKeyboardConfirm'](), w618['window']['wx']['offKeyboardInput'](), w618['window']['wx']['hideKeyboard']({ 'success': function (y_xqm) {
          console['log']('隐藏键盘');
        }, 'fail': function (od7pz) {
          console['log']('隐藏键盘出错:' + (od7pz ? od7pz['errMsg'] : ''));
        } });
    }, xh_ym0;
  }(),
      mwy = function () {
    function bjng3r() {}rgjkba(bjng3r, 'laya.wx.mini.MiniLoader');var p7feoz = bjng3r['prototype'];return p7feoz['load'] = function (m0_xh, kbgrj, gbjar, why_5m, vci$) {
      gbjar === void 0x0 && (gbjar = !![]), vci$ === void 0x0 && (vci$ = ![]);var n85613 = this;n85613['_url'] = m0_xh;if (m0_xh['indexOf']('data:image') === 0x0) n85613['_type'] = kbgrj = 'image';else n85613['_type'] = kbgrj || (kbgrj = n85613['getTypeFromUrl'](m0_xh));n85613['_cache'] = gbjar, n85613['_data'] = null;var pz7of = 'ascii';if (m0_xh['indexOf']('.fnt') != -0x1) pz7of = 'utf8';else kbgrj == 'arraybuffer' && (pz7of = '');;var c2ilt4 = vp$d9i['getFileExtension'](m0_xh);if (bjng3r['_fileTypeArr']['indexOf'](c2ilt4) != -0x1) w618['EnvConfig']['load']['call'](this, m0_xh, kbgrj, gbjar, why_5m, vci$);else {
        if (!m_hw5y['getFileInfo'](m0_xh)) {
          if (m0_xh['indexOf']('layaNativeDir/') != -0x1) {
            if (w618['isZiYu']) {
              var h516w8 = m_hw5y['ziyuFileData'][m0_xh];n85613['onLoaded'](h516w8);return;
            } else {
              cosnole['log']('read read'), m_hw5y['read'](m0_xh, pz7of, new hm5w1(bjng3r, bjng3r['onReadNativeCallBack'], [pz7of, m0_xh, kbgrj, gbjar, why_5m, vci$, n85613]));return;
            }
          }if (ksjbra['rootPath'] == '') var hywmx_ = m0_xh;else hywmx_ = m0_xh['split'](ksjbra['rootPath'])[0x0];m0_xh['indexOf']('http://') != -0x1 || m0_xh['indexOf']('https://') != -0x1 ? w618['EnvConfig']['load']['call'](n85613, m0_xh, kbgrj, gbjar, why_5m, vci$) : m_hw5y['readFile'](hywmx_, pz7of, new hm5w1(bjng3r, bjng3r['onReadNativeCallBack'], [pz7of, m0_xh, kbgrj, gbjar, why_5m, vci$, n85613]), m0_xh);
        } else w618['EnvConfig']['load']['call'](this, m0_xh, kbgrj, gbjar, why_5m, vci$);
      }
    }, p7feoz['resMgrLoad'] = function (xo07, r3njb, c2i4t9, dfpzv, j8g3nr, abnj, m5_h) {
      c2i4t9 === void 0x0 && (c2i4t9 = 0x0), dfpzv === void 0x0 && (dfpzv = ![]), j8g3nr === void 0x0 && (j8g3nr = ![]), abnj === void 0x0 && (abnj = 0x0), m5_h === void 0x0 && (m5_h = 0x3), xo07['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xo07), w618['EnvConfig']['resMgrLoad'](xo07, (w5mh, ictv9, f9$dvp) => {
        bjng3r['prototype']['resMgrLoadCallBack'](w5mh, ictv9, f9$dvp, r3njb);
      }, c2i4t9, dfpzv, j8g3nr, abnj, m5_h);
    }, p7feoz['resMgrLoadCallBack'] = function (qoe7zf, opf7, subak, r3ngj) {
      console['log']('buff:::', qoe7zf, subak, m_hw5y['fileNativeDir'] + '///' + m_hw5y['fileListName']), r3ngj(qoe7zf, opf7, subak);
    }, p7feoz['clearRes'] = function (f9p$dv, _eqyx) {
      _eqyx === void 0x0 && (_eqyx = ![]);var dz$v = this;dz$v['clearRes'](f9p$dv, _eqyx);var zf7oqe = m_hw5y['getFileInfo'](f9p$dv);if (zf7oqe && (f9p$dv['indexOf']('http://') != -0x1 || f9p$dv['indexOf']('https://') != -0x1)) {
        var fqeo = zf7oqe['md5'],
            c4t2il = m_hw5y['getFileNativePath'](fqeo);m_hw5y['remove'](c4t2il);
      }
    }, bjng3r['onReadNativeCallBack'] = function (rgn38, m0qx_, pdv$zf, _eqx0y, p7zd$f, cit24, h0m_, h65w1m, tc24i) {
      _eqx0y === void 0x0 && (_eqx0y = !![]), cit24 === void 0x0 && (cit24 = ![]), h65w1m === void 0x0 && (h65w1m = 0x0);if (!h65w1m) {
        var bkrsj;if (pdv$zf == 'json' || pdv$zf == 'atlas') bkrsj = w618['getJson'](tc24i['data']);else pdv$zf == 'xml' ? bkrsj = vp$d9i['parseXMLFromString'](tc24i['data']) : bkrsj = tc24i['data'];h0m_['onLoaded'](bkrsj), !w618['isZiYu'] && w618['isPosMsgYu'] && pdv$zf != 'arraybuffer' && wx['postMessage']({ 'url': m0qx_, 'data': bkrsj, 'isLoad': !![] });
      } else h65w1m == 0x1 && w618['EnvConfig']['load']['call'](h0m_, m0qx_, pdv$zf, _eqx0y, p7zd$f, cit24);
    }, f$pvz(bjng3r, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), bjng3r;
  }(),
      m_hw5y = function (my0x_q) {
    function abjgnr() {
      abjgnr['__super']['call'](this);;
    }return rgjkba(abjgnr, 'laya.wx.mini.MiniFileMgr', my0x_q), abjgnr['isLoadFile'] = function (ep7fzo) {
      return abjgnr['_fileTypeArr']['indexOf'](ep7fzo) != -0x1 ? !![] : ![];
    }, abjgnr['getFileInfo'] = function (_yq0xe) {
      var _mhw65 = _yq0xe['split']('?')[0x0],
          _m0yx = abjgnr['filesListObj'][_mhw65];if (_m0yx == null) return null;else return _m0yx;return null;
    }, abjgnr['onFileUpdate'] = function (t49i2c, rj3nbg) {
      var it492c = t49i2c['split']('/'),
          ze0oq7 = it492c[it492c['length'] - 0x1],
          rjbkag = abjgnr['getFileInfo'](rj3nbg);if (rjbkag == null) abjgnr['onSaveFile'](rj3nbg, ze0oq7);else {
        if (rjbkag['readyUrl'] != rj3nbg) abjgnr['remove'](ze0oq7, rj3nbg);
      }
    }, abjgnr['exits'] = function (rbgkj, d$7p) {
      var oqz07e = abjgnr['getFileNativePath'](rbgkj);abjgnr['fs']['getFileInfo']({ 'filePath': oqz07e, 'success': function (dfpzv$) {
          d$7p != null && d$7p['runWith']([0x0, dfpzv$]);
        }, 'fail': function ($vcti) {
          d$7p != null && d$7p['runWith']([0x1, $vcti]);
        } });
    }, abjgnr['read'] = function (rangjb, i92t, hw856, i9tc2v) {
      i92t === void 0x0 && (i92t = 'ascill'), i9tc2v === void 0x0 && (i9tc2v = '');var t2vi9c;i9tc2v != '' ? t2vi9c = abjgnr['getFileNativePath'](rangjb) : t2vi9c = rangjb, abjgnr['fs']['readFile']({ 'filePath': t2vi9c, 'encoding': i92t, 'success': function (xy0_mh) {
          hw856 != null && hw856['runWith']([0x0, xy0_mh]);
        }, 'fail': function (qo0z7e) {
          if (qo0z7e && i9tc2v != '') abjgnr['down'](i9tc2v, i92t, hw856, i9tc2v);else hw856 != null && hw856['runWith']([0x1]);
        } });
    }, abjgnr['readNativeFile'] = function (dvic9$, $vdci) {
      abjgnr['fs']['readFile']({ 'filePath': dvic9$, 'encoding': '', 'success': function (vc$di9) {
          $vdci != null && $vdci['runWith']([0x0]);
        }, 'fail': function (j3rnbg) {
          $vdci != null && $vdci['runWith']([0x1]);
        } });
    }, abjgnr['down'] = function (gjkrab, $c9di, ubskaj, efpzo7) {
      $c9di === void 0x0 && ($c9di = 'ascill'), efpzo7 === void 0x0 && (efpzo7 = '');var li2tc4 = abjgnr['getFileNativePath'](efpzo7),
          h_m6w5 = abjgnr['wxdown']({ 'url': gjkrab, 'filePath': li2tc4, 'success': function (t49c2) {
          if (t49c2['statusCode'] === 0xc8) abjgnr['readFile'](t49c2['filePath'], $c9di, ubskaj, efpzo7);
        }, 'fail': function (d$zfpv) {
          ubskaj != null && ubskaj['runWith']([0x1, d$zfpv]);
        } });h_m6w5['onProgressUpdate'](function (qe0xo7) {
        ubskaj != null && ubskaj['runWith']([0x2, qe0xo7['progress']]);
      });
    }, abjgnr['readFile'] = function (sajkbr, p7fzd, fvpd9$, sjabkr) {
      p7fzd === void 0x0 && (p7fzd = 'ascill'), sjabkr === void 0x0 && (sjabkr = ''), abjgnr['fs']['readFile']({ 'filePath': sajkbr, 'encoding': p7fzd, 'success': function (exy_q0) {
          if (sajkbr['indexOf']('http://') != -0x1 || sajkbr['indexOf']('https://') != -0x1) abjgnr['onFileUpdate'](sajkbr, sjabkr);fvpd9$ != null && fvpd9$['runWith']([0x0, exy_q0]);
        }, 'fail': function (wh61m) {
          if (wh61m) fvpd9$ != null && fvpd9$['runWith']([0x1, wh61m]);
        } });
    }, abjgnr['downImg'] = function (_6mw, m6w51, xhw_m) {
      xhw_m === void 0x0 && (xhw_m = '');var ye_0xq = abjgnr['wxdown']({ 'url': _6mw, 'success': function (bgnj) {
          bgnj['statusCode'] === 0xc8 && abjgnr['copyFile'](bgnj['tempFilePath'], xhw_m, m6w51);
        }, 'fail': function (srb) {
          m6w51 != null && m6w51['runWith']([0x1, srb]);
        } });
    }, abjgnr['copyFile'] = function (barjks, q0my_, e0y_) {
      var qz7oef = barjks['split']('/'),
          pzfd = qz7oef[qz7oef['length'] - 0x1],
          m_w = q0my_['split']('?')[0x0],
          g38j = abjgnr['getFileInfo'](q0my_),
          w8153 = abjgnr['getFileNativePath'](pzfd);abjgnr['fs']['copyFile']({ 'srcPath': barjks, 'destPath': w8153, 'success': function (njgab) {
          if (!g38j) abjgnr['onSaveFile'](q0my_, pzfd), e0y_ != null && e0y_['runWith']([0x0]);else {
            if (g38j['readyUrl'] != q0my_) abjgnr['remove'](pzfd, q0my_, e0y_);
          }
        }, 'fail': function (fzp7$) {
          e0y_ != null && e0y_['runWith']([0x1, fzp7$]);
        } });
    }, abjgnr['getFileNativePath'] = function (t24i9c) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + t24i9c;
    }, abjgnr['remove'] = function (jng, hmyw_5, x7o0qe) {
      hmyw_5 === void 0x0 && (hmyw_5 = '');var d$pf7 = abjgnr['getFileInfo'](hmyw_5),
          q7ezf = abjgnr['getFileNativePath'](d$pf7['md5']);e0xq7['loader']['clearRes'](d$pf7['readyUrl']), abjgnr['fs']['unlink']({ 'filePath': q7ezf, 'success': function (w_5mh) {
          if (hmyw_5 != '') abjgnr['onSaveFile'](hmyw_5, jng);x7o0qe != null && x7o0qe['runWith']([0x0]);
        }, 'fail': function (gn318) {} });
    }, abjgnr['onSaveFile'] = function (r3gj8, iv29t) {
      var yxm_q = r3gj8['split']('?')[0x0];abjgnr['filesListObj'][yxm_q] = { 'md5': iv29t, 'readyUrl': r3gj8 }, abjgnr['fs']['writeFile']({ 'filePath': abjgnr['fileNativeDir'] + '/' + abjgnr['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](abjgnr['filesListObj']), 'success': function (gbn3) {
          console['log']('写入测试测试成功：', gbn3);
        }, 'fail': function (n5836) {
          console['log']('写入测试测试失败：', n5836);
        } });
    }, abjgnr['existDir'] = function (vzfd$, yqeo0x) {
      abjgnr['fs']['mkdir']({ 'dirPath': vzfd$, 'success': function (_xyqm0) {
          yqeo0x != null && yqeo0x['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hyx) {
          if (hyx['errMsg']['indexOf']('file already exists') != -0x1) abjgnr['readSync'](abjgnr['fileListName'], 'utf8', yqeo0x);else yqeo0x != null && yqeo0x['runWith']([0x1, hyx]);
        } });
    }, abjgnr['readSync'] = function (n6583, ct2i, _hyw, arjbng) {
      ct2i === void 0x0 && (ct2i = 'ascill'), arjbng === void 0x0 && (arjbng = '');var epof7z = abjgnr['getFileNativePath'](n6583),
          n3g8r;try {
        n3g8r = abjgnr['fs']['readFileSync'](epof7z), _hyw != null && _hyw['runWith']([0x0, { 'data': n3g8r }]);
      } catch (idp) {
        _hyw != null && _hyw['runWith']([0x1]);
      }
    }, abjgnr['readCache'] = function () {}, abjgnr['writeCache'] = function (p$9vd) {
      var $7dpf = readyUrl['split']('?')[0x0];abjgnr['filesListObj'][$7dpf] = { 'md5': md5Name, 'readyUrl': readyUrl }, abjgnr['fs']['writeFile']({ 'filePath': abjgnr['fileNativeDir'] + '/' + abjgnr['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](abjgnr['filesListObj']), 'success': function (qoez0) {}, 'fail': function (_6hw5) {} });
    }, abjgnr['setNativeFileDir'] = function (gnrj3b) {
      abjgnr['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gnrj3b;
    }, abjgnr['filesListObj'] = {}, abjgnr['fileNativeDir'] = null, abjgnr['fileListName'] = 'layaairfiles.txt', abjgnr['ziyuFileData'] = {}, f$pvz(abjgnr, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), abjgnr;
  }(ajbkr),
      bnj3 = function (fpez7o) {
    function iv9p() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], iv9p['__super']['call'](this), this['_sound'] = iv9p['_createSound']();
    }rgjkba(iv9p, 'laya.wx.mini.MiniSound', fpez7o);var _hxmy = iv9p['prototype'];return _hxmy['load'] = function (vp$9i) {
      var m5yh = this;vp$9i = ksjbra['formatURL'](vp$9i), this['url'] = vp$9i;if (iv9p['_audioCache'][vp$9i]) {
        this['event']('complete');return;
      }function jg3n8r() {
        if (iv9p['_null'] != undefined) m5yh['_sound']['onCanplay'](iv9p['_null']), m5yh['_sound']['onError'](iv9p['_null']);else try {
          m5yh['_sound']['onCanplay'](null), m5yh['_sound']['onError'](null), iv9p['_null'] = null;
        } catch (gkjarb) {
          console['warn']('[wxmini] _clearSound:' + gkjarb), m5yh['_sound']['onCanplay'](h_wymx), m5yh['_sound']['onError'](h_wymx), iv9p['_null'] = h_wymx;
        }
      }function abrkjs() {
        jg3n8r(), itc9$v['loaded'] = !![], itc9$v['event']('complete'), iv9p['_audioCache'][itc9$v['url']] = itc9$v;
      }function eqy0x_(_yxqe) {
        console['error']('errCode=' + _yxqe['errCode'] + '  errMsg=' + _yxqe['errMsg']), jg3n8r(), itc9$v['event']('error');
      }function h_wymx() {}this['_sound']['onCanplay'](abrkjs), this['_sound']['onError'](eqy0x_), this['_sound']['src'] = vp$9i;var itc9$v = this;
    }, _hxmy['play'] = function (x0y_m, eyq0xo) {
      x0y_m === void 0x0 && (x0y_m = 0x0), eyq0xo === void 0x0 && (eyq0xo = 0x0);var ivd$9;if (this['url'] == ct29v['_tMusic']) {
        if (!iv9p['_musicAudio']) iv9p['_musicAudio'] = iv9p['_createSound']();ivd$9 = iv9p['_musicAudio'];
      } else ivd$9 = iv9p['_createSound']();ivd$9['src'] = this['url'];var df$zv = new aksj(ivd$9);return df$zv['url'] = this['url'], df$zv['loops'] = eyq0xo, df$zv['startTime'] = x0y_m, df$zv['play'](), ct29v['addChannel'](df$zv), df$zv;
    }, _hxmy['dispose'] = function () {
      var _0yh = iv9p['_audioCache'][this['url']];_0yh && (_0yh['src'] = '', delete iv9p['_audioCache'][this['url']]);
    }, pv$f9d(0x0, _hxmy, 'duration', function () {
      return this['_sound']['duration'];
    }), iv9p['_createSound'] = function () {
      return iv9p['_id']++, w618['window']['wx']['createInnerAudioContext']();
    }, iv9p['_musicAudio'] = null, iv9p['_id'] = 0x0, iv9p['_audioCache'] = {}, iv9p['_null'] = undefined, iv9p;
  }(ajbkr),
      aksj = function (w1hm56) {
    function oqyxe(abrng) {
      this['_audio'] = null, this['_onEnd'] = null, oqyxe['__super']['call'](this), this['_audio'] = abrng, this['_onEnd'] = vp$d9i['bind'](this['__onEnd'], this), abrng['onEnded'](this['_onEnd']);
    }rgjkba(oqyxe, 'laya.wx.mini.MiniSoundChannel', w1hm56);var vitc92 = oqyxe['prototype'];return vitc92['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (e0xq7['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, vitc92['__onNull'] = function () {}, vitc92['play'] = function () {
      this['isStopped'] = ![], ct29v['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, vitc92['stop'] = function () {
      this['isStopped'] = !![], ct29v['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (oqyxe['_null'] != undefined) this['_audio']['onEnded'](oqyxe['_null']);else try {
        this['_audio']['onEnded'](null), oqyxe['_null'] = null;
      } catch (zoef7p) {
        console['warn']('[wxmini] stop:' + zoef7p), this['_audio']['onEnded'](vp$d9i['bind'](this['__onNull'], this)), oqyxe['_null'] = vp$d9i['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, vitc92['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, vitc92['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ct29v['addChannel'](this), this['_audio']['play']();
    }, pv$f9d(0x0, vitc92, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), pv$f9d(0x0, vitc92, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), pv$f9d(0x0, vitc92, 'volume', function () {
      return 0x1;
    }, function (gkabrj) {}), oqyxe['_null'] = undefined, oqyxe;
  }(w_mxhy);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var v$id9p in Laya) {
    var oz7pfe = Laya[v$id9p];oz7pfe && oz7pfe['__isclass'] && (exports[v$id9p] = oz7pfe);
  }
});