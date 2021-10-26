var m = wx.$g;
(function (window, document, u6hzmw) {
  var q5xs3 = u6hzmw['un'],
      csx420 = u6hzmw['uns'],
      p1iab = u6hzmw['static'],
      w6fhz = u6hzmw['class'],
      l$oe = u6hzmw['getset'],
      g$eql = u6hzmw['__newvec'],
      j097y = laya['utils']['Browser'],
      ol$ge = laya['events']['Event'],
      eh$lfo = laya['events']['EventDispatcher'],
      vpt1b = laya['resource']['HTMLImage'],
      pbt1r8 = laya['utils']['Handler'],
      wm6fz = laya['display']['Input'],
      oe$gql = laya['net']['Loader'],
      s5x42c = laya['maths']['Matrix'],
      sx43c5 = laya['renders']['Render'],
      egql$o = laya['utils']['RunDriver'],
      r1tp8 = laya['media']['Sound'],
      zmh6wf = laya['media']['SoundChannel'],
      g5csq3 = laya['media']['SoundManager'],
      g3oeq5 = laya['display']['Stage'],
      q5sc3x = laya['net']['URL'],
      ba1vp = laya['utils']['Utils'],
      y2jd0 = function () {
    function _kt7r8() {}return w6fhz(_kt7r8, 'laya.wx.mini.MiniAdpter'), _kt7r8['getJson'] = function (arvb1p) {
      return JSON['parse'](arvb1p);
    }, _kt7r8['init'] = function (zmw6hf, rk_b8t) {
      zmw6hf === void 0x0 && (zmw6hf = ![]), rk_b8t === void 0x0 && (rk_b8t = ![]);if (_kt7r8['_inited']) return;_kt7r8['window'] = window;if (_kt7r8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;_kt7r8['_inited'] = !![], _kt7r8['isZiYu'] = rk_b8t, _kt7r8['isPosMsgYu'] = zmw6hf, _kt7r8['EnvConfig'] = {}, !_kt7r8['isZiYu'] && (jd7k9['setNativeFileDir']('/layaairGame'), jd7k9['existDir'](jd7k9['fileNativeDir'], pbt1r8['create'](_kt7r8, _kt7r8['onMkdirCallBack']))), _kt7r8['window']['focus'] = function () {}, u6hzmw['getUrlPath'] = function () {}, _kt7r8['window']['logtime'] = function (t_897k) {}, _kt7r8['window']['alertTimeLog'] = function (egolf) {}, _kt7r8['window']['resetShareInfo'] = function () {}, _kt7r8['window']['CanvasRenderingContext2D'] = function () {}, _kt7r8['window']['CanvasRenderingContext2D']['prototype'] = _kt7r8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], _kt7r8['window']['document']['body']['appendChild'] = function () {}, _kt7r8['EnvConfig']['pixelRatioInt'] = 0x0, egql$o['getPixelRatio'] = _kt7r8['pixelRatio'], _kt7r8['_preCreateElement'] = j097y['createElement'], j097y['createElement'] = _kt7r8['createElement'], egql$o['createShaderCondition'] = _kt7r8['createShaderCondition'], ba1vp['parseXMLFromString'] = _kt7r8['parseXMLFromString'], wm6fz['_createInputElement'] = j20d4y['_createInputElement'], _kt7r8['EnvConfig']['load'] = oe$gql['prototype']['load'], oe$gql['prototype']['load'] = umwzh6['prototype']['load'], _kt7r8['isZiYu'] && zmw6hf && wx['onMessage'](function (fw6l$) {
        fw6l$['isLoad'] && (jd7k9['ziyuFileData'][fw6l$['url']] = fw6l$['data']);
      });
    }, _kt7r8['onMkdirCallBack'] = function (g3qole, zumh6w) {
      if (!g3qole) jd7k9['filesListObj'] = JSON['parse'](zumh6w['data']);
    }, _kt7r8['pixelRatio'] = function () {
      if (!_kt7r8['EnvConfig']['pixelRatioInt']) try {
        var m$hw = wx['getSystemInfoSync']();return _kt7r8['EnvConfig']['pixelRatioInt'] = m$hw['pixelRatio'], m$hw = m$hw, m$hw['pixelRatio'];
      } catch (xc3sq5) {}return _kt7r8['EnvConfig']['pixelRatioInt'];
    }, _kt7r8['createElement'] = function (ktp) {
      if (ktp == 'canvas') {
        var rbk_t;return _kt7r8['idx'] == 0x1 ? _kt7r8['isZiYu'] ? (rbk_t = sharedCanvas, rbk_t['style'] = {}) : rbk_t = window['canvas'] : rbk_t = window['wx']['createCanvas'](), _kt7r8['idx']++, rbk_t;
      } else {
        if (ktp == 'textarea' || ktp == 'input') return _kt7r8['onCreateInput'](ktp);else {
          if (ktp == 'div') {
            var eqo3g = _kt7r8['_preCreateElement'](ktp);return eqo3g['contains'] = function (c3sq5) {
              return null;
            }, eqo3g['removeChild'] = function (vpb1tr) {}, eqo3g;
          } else return _kt7r8['_preCreateElement'](ktp);
        }
      }
    }, _kt7r8['onCreateInput'] = function (jy2d40) {
      var o$hlef = _kt7r8['_preCreateElement'](jy2d40);return o$hlef['focus'] = j20d4y['wxinputFocus'], o$hlef['blur'] = j20d4y['wxinputblur'], o$hlef['style'] = {}, o$hlef['value'] = 0x0, o$hlef['parentElement'] = {}, o$hlef['placeholder'] = {}, o$hlef['type'] = {}, o$hlef['setColor'] = function (o5q3eg) {}, o$hlef['setType'] = function (k8tbr_) {}, o$hlef['setFontFace'] = function (whfm) {}, o$hlef['addEventListener'] = function ($elgof) {}, o$hlef['contains'] = function (p8bktr) {
        return null;
      }, o$hlef['removeChild'] = function (fh$mw6) {}, o$hlef;
    }, _kt7r8['createShaderCondition'] = function (mz6uw) {
      var qg3o5 = this,
          cxy20 = function () {
        var olhef$ = mz6uw;return qg3o5[mz6uw['replace']('this.', '')];
      };return cxy20;
    }, _kt7r8['EnvConfig'] = null, _kt7r8['window'] = null, _kt7r8['_preCreateElement'] = null, _kt7r8['_inited'] = ![], _kt7r8['wxRequest'] = null, _kt7r8['systemInfo'] = null, _kt7r8['version'] = '0.0.1', _kt7r8['isZiYu'] = ![], _kt7r8['isPosMsgYu'] = ![], _kt7r8['parseXMLFromString'] = function (go35qe) {
      var r1btp, q5eo3g;go35qe = go35qe['replace'](/>\s+</g, '><');try {
        r1btp = new window['Parser']['DOMParser']()['parseFromString'](go35qe, 'text/xml');
      } catch (djy7_9) {
        throw '需要引入xml解析库文件';
      }return r1btp;
    }, _kt7r8['idx'] = 0x1, _kt7r8;
  }(),
      yj9d70 = function () {
    function pavbi() {}w6fhz(pavbi, 'laya.wx.mini.MiniImage');var lfho = pavbi['prototype'];return lfho['_loadImage'] = function (l$qg) {
      var h6f = this,
          jy90d7 = ![];l$qg['indexOf']('layaNativeDir/') == -0x1 && (jy90d7 = !![], l$qg = q5sc3x['formatURL'](l$qg));if (!jd7k9['getFileInfo'](l$qg)) {
        if (l$qg['indexOf']('http://') != -0x1 || l$qg['indexOf']('https://') != -0x1) jd7k9['downImg'](l$qg, new pbt1r8(pavbi, pavbi['onDownImgCallBack'], [l$qg, h6f]), l$qg);else pavbi['onCreateImage'](l$qg, h6f, !![]);
      } else pavbi['onCreateImage'](l$qg, h6f, !jy90d7);
    }, pavbi['onDownImgCallBack'] = function (cqs3, huw6mz, m6hfz) {
      if (!m6hfz) pavbi['onCreateImage'](cqs3, huw6mz);else huw6mz['onError'](null);
    }, pavbi['onCreateImage'] = function (kr78t, j024xy, s40xc2) {
      s40xc2 === void 0x0 && (s40xc2 = ![]);var glof$;if (!s40xc2) {
        var $qloeg = jd7k9['getFileInfo'](kr78t),
            vpa1bi = $qloeg['md5'];glof$ = jd7k9['getFileNativePath'](vpa1bi);
      } else glof$ = kr78t;if (j024xy['imgCache'] == null) j024xy['imgCache'] = {};var lfhw$6;function y7d_9() {
        lfhw$6['onload'] = null, lfhw$6['onerror'] = null, delete j024xy['imgCache'][kr78t];
      };var hfw6l = function () {
        y7d_9(), j024xy['onLoaded'](lfhw$6);
      },
          ofgel = function () {
        y7d_9(), j024xy['event']('error', 'Load image failed');
      };j024xy['_type'] == 'nativeimage' ? (lfhw$6 = new j097y['window']['Image'](), lfhw$6['crossOrigin'] = '', lfhw$6['onload'] = hfw6l, lfhw$6['onerror'] = ofgel, lfhw$6['src'] = glof$, j024xy['imgCache'][kr78t] = lfhw$6) : new vpt1b['create'](glof$, { 'onload': hfw6l, 'onerror': ofgel, 'onCreate': function (qe$olg) {
          lfhw$6 = qe$olg, j024xy['imgCache'][kr78t] = qe$olg;
        } });
    }, pavbi;
  }(),
      j20d4y = function () {
    function zhfmw6() {}return w6fhz(zhfmw6, 'laya.wx.mini.MiniInput'), zhfmw6['_createInputElement'] = function () {
      wm6fz['_initInput'](wm6fz['area'] = j097y['createElement']('textarea')), wm6fz['_initInput'](wm6fz['input'] = j097y['createElement']('input')), wm6fz['inputContainer'] = j097y['createElement']('div'), wm6fz['inputContainer']['style']['position'] = 'absolute', wm6fz['inputContainer']['style']['zIndex'] = 0x186a0, j097y['container']['appendChild'](wm6fz['inputContainer']), wm6fz['inputContainer']['setPos'] = function (brptv, t8_kb) {
        wm6fz['inputContainer']['style']['left'] = brptv + 'px', wm6fz['inputContainer']['style']['top'] = t8_kb + 'px';
      }, u6hzmw['stage']['on']('resize', null, zhfmw6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (og3e5) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), g5csq3['_soundClass'] = g3q5oe, g5csq3['_musicClass'] = g3q5oe;
    }, zhfmw6['_onStageResize'] = function () {
      var eg$l = u6hzmw['stage']['_canvasTransform']['identity']();eg$l['scale'](j097y['width'] / sx43c5['canvas']['width'] / egql$o['getPixelRatio'](), j097y['height'] / sx43c5['canvas']['height'] / egql$o['getPixelRatio']());
    }, zhfmw6['wxinputFocus'] = function (_jd97) {
      var hlf$ow = wm6fz['inputElement']['target'];if (hlf$ow && !hlf$ow['editable']) return;y2jd0['window']['wx']['offKeyboardConfirm'](), y2jd0['window']['wx']['offKeyboardInput'](), y2jd0['window']['wx']['showKeyboard']({ 'defaultValue': hlf$ow['text'], 'maxLength': hlf$ow['maxChars'], 'multiple': hlf$ow['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (dj90y) {}, 'fail': function (cx5sq3) {} }), y2jd0['window']['wx']['onKeyboardConfirm'](function (cxs24) {
        var gcs53q = cxs24 ? cxs24['value'] : '';hlf$ow['text'] = gcs53q, hlf$ow['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), y2jd0['window']['wx']['onKeyboardInput'](function (o5qeg) {
        var $foehl = o5qeg ? o5qeg['value'] : '';if (!hlf$ow['multiline']) {
          if ($foehl['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }hlf$ow['text'] = $foehl, hlf$ow['event']('input');
      });
    }, zhfmw6['inputEnter'] = function () {
      wm6fz['inputElement']['target']['focus'] = ![];
    }, zhfmw6['wxinputblur'] = function () {
      zhfmw6['hideKeyboard']();
    }, zhfmw6['hideKeyboard'] = function () {
      y2jd0['window']['wx']['offKeyboardConfirm'](), y2jd0['window']['wx']['offKeyboardInput'](), y2jd0['window']['wx']['hideKeyboard']({ 'success': function ($mwh) {
          console['log']('隐藏键盘');
        }, 'fail': function (bprk) {
          console['log']('隐藏键盘出错:' + (bprk ? bprk['errMsg'] : ''));
        } });
    }, zhfmw6;
  }(),
      umwzh6 = function () {
    function pbv1rt() {}w6fhz(pbv1rt, 'laya.wx.mini.MiniLoader');var folh$e = pbv1rt['prototype'];return folh$e['load'] = function (_y7jd, y9dj7, fhleo$, h$lwo, dj7k_9) {
      fhleo$ === void 0x0 && (fhleo$ = !![]), dj7k_9 === void 0x0 && (dj7k_9 = ![]);var h6m$ = this;h6m$['_url'] = _y7jd;if (_y7jd['indexOf']('data:image') === 0x0) h6m$['_type'] = y9dj7 = 'image';else h6m$['_type'] = y9dj7 || (y9dj7 = h6m$['getTypeFromUrl'](_y7jd));h6m$['_cache'] = fhleo$, h6m$['_data'] = null;var q5s3 = 'ascii';if (_y7jd['indexOf']('.fnt') != -0x1) q5s3 = 'utf8';else y9dj7 == 'arraybuffer' && (q5s3 = '');;var y0jx = ba1vp['getFileExtension'](_y7jd);if (pbv1rt['_fileTypeArr']['indexOf'](y0jx) != -0x1) y2jd0['EnvConfig']['load']['call'](this, _y7jd, y9dj7, fhleo$, h$lwo, dj7k_9);else {
        if (!jd7k9['getFileInfo'](_y7jd)) {
          if (_y7jd['indexOf']('layaNativeDir/') != -0x1) {
            if (y2jd0['isZiYu']) {
              var _kt9 = jd7k9['ziyuFileData'][_y7jd];h6m$['onLoaded'](_kt9);return;
            } else {
              cosnole['log']('read read'), jd7k9['read'](_y7jd, q5s3, new pbt1r8(pbv1rt, pbv1rt['onReadNativeCallBack'], [q5s3, _y7jd, y9dj7, fhleo$, h$lwo, dj7k_9, h6m$]));return;
            }
          }if (q5sc3x['rootPath'] == '') var _dkj7 = _y7jd;else _dkj7 = _y7jd['split'](q5sc3x['rootPath'])[0x0];_y7jd['indexOf']('http://') != -0x1 || _y7jd['indexOf']('https://') != -0x1 ? y2jd0['EnvConfig']['load']['call'](h6m$, _y7jd, y9dj7, fhleo$, h$lwo, dj7k_9) : jd7k9['readFile'](_dkj7, q5s3, new pbt1r8(pbv1rt, pbv1rt['onReadNativeCallBack'], [q5s3, _y7jd, y9dj7, fhleo$, h$lwo, dj7k_9, h6m$]), _y7jd);
        } else y2jd0['EnvConfig']['load']['call'](this, _y7jd, y9dj7, fhleo$, h$lwo, dj7k_9);
      }
    }, folh$e['resMgrLoad'] = function (fhelo$, v1arb, tpvr1b, $ow, yd0j79, lqoge, p8brt) {
      tpvr1b === void 0x0 && (tpvr1b = 0x0), $ow === void 0x0 && ($ow = ![]), yd0j79 === void 0x0 && (yd0j79 = ![]), lqoge === void 0x0 && (lqoge = 0x0), p8brt === void 0x0 && (p8brt = 0x3), fhelo$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', fhelo$), y2jd0['EnvConfig']['resMgrLoad'](fhelo$, (g3oql, y0xc4, yxc4) => {
        pbv1rt['prototype']['resMgrLoadCallBack'](g3oql, y0xc4, yxc4, v1arb);
      }, tpvr1b, $ow, yd0j79, lqoge, p8brt);
    }, folh$e['resMgrLoadCallBack'] = function (bia1pv, kp8br, fhm, _9d87) {
      console['log']('buff:::', bia1pv, fhm, jd7k9['fileNativeDir'] + '///' + jd7k9['fileListName']), _9d87(bia1pv, kp8br, fhm);
    }, folh$e['clearRes'] = function (k_7r8t, brp18) {
      brp18 === void 0x0 && (brp18 = ![]);var o3qeg5 = this;o3qeg5['clearRes'](k_7r8t, brp18);var xs4c53 = jd7k9['getFileInfo'](k_7r8t);if (xs4c53 && (k_7r8t['indexOf']('http://') != -0x1 || k_7r8t['indexOf']('https://') != -0x1)) {
        var tk8r7 = xs4c53['md5'],
            lfeh$o = jd7k9['getFileNativePath'](tk8r7);jd7k9['remove'](lfeh$o);
      }
    }, pbv1rt['onReadNativeCallBack'] = function (fwho, y2j9d, j_9y, wf6m$h, xq35s, c35q, cgs3q, jy9_, tb81p) {
      wf6m$h === void 0x0 && (wf6m$h = !![]), c35q === void 0x0 && (c35q = ![]), jy9_ === void 0x0 && (jy9_ = 0x0);if (!jy9_) {
        var whm6fz;if (j_9y == 'json' || j_9y == 'atlas') whm6fz = y2jd0['getJson'](tb81p['data']);else j_9y == 'xml' ? whm6fz = ba1vp['parseXMLFromString'](tb81p['data']) : whm6fz = tb81p['data'];cgs3q['onLoaded'](whm6fz), !y2jd0['isZiYu'] && y2jd0['isPosMsgYu'] && j_9y != 'arraybuffer' && wx['postMessage']({ 'url': y2j9d, 'data': whm6fz, 'isLoad': !![] });
      } else jy9_ == 0x1 && y2jd0['EnvConfig']['load']['call'](cgs3q, y2j9d, j_9y, wf6m$h, xq35s, c35q);
    }, p1iab(pbv1rt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), pbv1rt;
  }(),
      jd7k9 = function (b1pr8) {
    function $fwmh() {
      $fwmh['__super']['call'](this);;
    }return w6fhz($fwmh, 'laya.wx.mini.MiniFileMgr', b1pr8), $fwmh['isLoadFile'] = function (y4d02) {
      return $fwmh['_fileTypeArr']['indexOf'](y4d02) != -0x1 ? !![] : ![];
    }, $fwmh['getFileInfo'] = function (g35qes) {
      var olgf = g35qes['split']('?')[0x0],
          kt_7 = $fwmh['filesListObj'][olgf];if (kt_7 == null) return null;else return kt_7;return null;
    }, $fwmh['onFileUpdate'] = function (lg$efo, s52) {
      var lfoh$w = lg$efo['split']('/'),
          kt97 = lfoh$w[lfoh$w['length'] - 0x1],
          pt81 = $fwmh['getFileInfo'](s52);if (pt81 == null) $fwmh['onSaveFile'](s52, kt97);else {
        if (pt81['readyUrl'] != s52) $fwmh['remove'](kt97, s52);
      }
    }, $fwmh['exits'] = function (sx42c0, r1tpvb) {
      var ptv = $fwmh['getFileNativePath'](sx42c0);$fwmh['fs']['getFileInfo']({ 'filePath': ptv, 'success': function (y042xc) {
          r1tpvb != null && r1tpvb['runWith']([0x0, y042xc]);
        }, 'fail': function (btp81) {
          r1tpvb != null && r1tpvb['runWith']([0x1, btp81]);
        } });
    }, $fwmh['read'] = function (csqx, pbr1t, _7k8r, jd920) {
      pbr1t === void 0x0 && (pbr1t = 'ascill'), jd920 === void 0x0 && (jd920 = '');var xc45;jd920 != '' ? xc45 = $fwmh['getFileNativePath'](csqx) : xc45 = csqx, $fwmh['fs']['readFile']({ 'filePath': xc45, 'encoding': pbr1t, 'success': function (ho$w) {
          _7k8r != null && _7k8r['runWith']([0x0, ho$w]);
        }, 'fail': function (r1vapb) {
          if (r1vapb && jd920 != '') $fwmh['down'](jd920, pbr1t, _7k8r, jd920);else _7k8r != null && _7k8r['runWith']([0x1]);
        } });
    }, $fwmh['readNativeFile'] = function ($h6wlf, br1ptv) {
      $fwmh['fs']['readFile']({ 'filePath': $h6wlf, 'encoding': '', 'success': function (g3qe) {
          br1ptv != null && br1ptv['runWith']([0x0]);
        }, 'fail': function (x3cs5q) {
          br1ptv != null && br1ptv['runWith']([0x1]);
        } });
    }, $fwmh['down'] = function (qoe35, p1btrv, $olq, d9yj07) {
      p1btrv === void 0x0 && (p1btrv = 'ascill'), d9yj07 === void 0x0 && (d9yj07 = '');var yd420 = $fwmh['getFileNativePath'](d9yj07),
          d4y2j0 = $fwmh['wxdown']({ 'url': qoe35, 'filePath': yd420, 'success': function (dyj790) {
          if (dyj790['statusCode'] === 0xc8) $fwmh['readFile'](dyj790['filePath'], p1btrv, $olq, d9yj07);
        }, 'fail': function (fho$el) {
          $olq != null && $olq['runWith']([0x1, fho$el]);
        } });d4y2j0['onProgressUpdate'](function (jdy920) {
        $olq != null && $olq['runWith']([0x2, jdy920['progress']]);
      });
    }, $fwmh['readFile'] = function (x0s42c, rbkt8, eqog35, $leqo) {
      rbkt8 === void 0x0 && (rbkt8 = 'ascill'), $leqo === void 0x0 && ($leqo = ''), $fwmh['fs']['readFile']({ 'filePath': x0s42c, 'encoding': rbkt8, 'success': function (y7j0) {
          if (x0s42c['indexOf']('http://') != -0x1 || x0s42c['indexOf']('https://') != -0x1) $fwmh['onFileUpdate'](x0s42c, $leqo);eqog35 != null && eqog35['runWith']([0x0, y7j0]);
        }, 'fail': function (tvr1p) {
          if (tvr1p) eqog35 != null && eqog35['runWith']([0x1, tvr1p]);
        } });
    }, $fwmh['downImg'] = function (cqg5s, mhwu6, brv1a) {
      brv1a === void 0x0 && (brv1a = '');var qge3s5 = $fwmh['wxdown']({ 'url': cqg5s, 'success': function (_btkr) {
          _btkr['statusCode'] === 0xc8 && $fwmh['copyFile'](_btkr['tempFilePath'], brv1a, mhwu6);
        }, 'fail': function (qgel) {
          mhwu6 != null && mhwu6['runWith']([0x1, qgel]);
        } });
    }, $fwmh['copyFile'] = function (p1ivba, x524s, $f6lh) {
      var bpi1a = p1ivba['split']('/'),
          bp8trk = bpi1a[bpi1a['length'] - 0x1],
          umzwh = x524s['split']('?')[0x0],
          c43s5 = $fwmh['getFileInfo'](x524s),
          lqgeo$ = $fwmh['getFileNativePath'](bp8trk);$fwmh['fs']['copyFile']({ 'srcPath': p1ivba, 'destPath': lqgeo$, 'success': function (oqlg3) {
          if (!c43s5) $fwmh['onSaveFile'](x524s, bp8trk), $f6lh != null && $f6lh['runWith']([0x0]);else {
            if (c43s5['readyUrl'] != x524s) $fwmh['remove'](bp8trk, x524s, $f6lh);
          }
        }, 'fail': function (_jd9k) {
          $f6lh != null && $f6lh['runWith']([0x1, _jd9k]);
        } });
    }, $fwmh['getFileNativePath'] = function (m6wh$f) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + m6wh$f;
    }, $fwmh['remove'] = function (yj97_, jy_97, oleq$) {
      jy_97 === void 0x0 && (jy_97 = '');var kr_t78 = $fwmh['getFileInfo'](jy_97),
          avbi = $fwmh['getFileNativePath'](kr_t78['md5']);u6hzmw['loader']['clearRes'](kr_t78['readyUrl']), $fwmh['fs']['unlink']({ 'filePath': avbi, 'success': function (vbiap1) {
          if (jy_97 != '') $fwmh['onSaveFile'](jy_97, yj97_);oleq$ != null && oleq$['runWith']([0x0]);
        }, 'fail': function (v1pb) {} });
    }, $fwmh['onSaveFile'] = function (k8t7r, bk_tr) {
      var egolq3 = k8t7r['split']('?')[0x0];$fwmh['filesListObj'][egolq3] = { 'md5': bk_tr, 'readyUrl': k8t7r }, $fwmh['fs']['writeFile']({ 'filePath': $fwmh['fileNativeDir'] + '/' + $fwmh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($fwmh['filesListObj']), 'success': function (b8tp1r) {
          console['log']('写入测试测试成功：', b8tp1r);
        }, 'fail': function (h6wfm$) {
          console['log']('写入测试测试失败：', h6wfm$);
        } });
    }, $fwmh['existDir'] = function (l$ohwf, rbpav1) {
      $fwmh['fs']['mkdir']({ 'dirPath': l$ohwf, 'success': function (e$fl) {
          rbpav1 != null && rbpav1['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (d8) {
          if (d8['errMsg']['indexOf']('file already exists') != -0x1) $fwmh['readSync']($fwmh['fileListName'], 'utf8', rbpav1);else rbpav1 != null && rbpav1['runWith']([0x1, d8]);
        } });
    }, $fwmh['readSync'] = function (gqelo3, qxsc53, ogeq3l, _9t8k) {
      qxsc53 === void 0x0 && (qxsc53 = 'ascill'), _9t8k === void 0x0 && (_9t8k = '');var r1tpb8 = $fwmh['getFileNativePath'](gqelo3),
          muzhw6;try {
        muzhw6 = $fwmh['fs']['readFileSync'](r1tpb8), ogeq3l != null && ogeq3l['runWith']([0x0, { 'data': muzhw6 }]);
      } catch (el$og) {
        ogeq3l != null && ogeq3l['runWith']([0x1]);
      }
    }, $fwmh['readCache'] = function () {}, $fwmh['writeCache'] = function (h6wl$) {
      var vrb1pa = readyUrl['split']('?')[0x0];$fwmh['filesListObj'][vrb1pa] = { 'md5': md5Name, 'readyUrl': readyUrl }, $fwmh['fs']['writeFile']({ 'filePath': $fwmh['fileNativeDir'] + '/' + $fwmh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($fwmh['filesListObj']), 'success': function (dyj204) {}, 'fail': function (whzu6m) {} });
    }, $fwmh['setNativeFileDir'] = function (pra1v) {
      $fwmh['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + pra1v;
    }, $fwmh['filesListObj'] = {}, $fwmh['fileNativeDir'] = null, $fwmh['fileListName'] = 'layaairfiles.txt', $fwmh['ziyuFileData'] = {}, p1iab($fwmh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $fwmh;
  }(eh$lfo),
      g3q5oe = function (dj79y) {
    function eg3ol() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], eg3ol['__super']['call'](this), this['_sound'] = eg3ol['_createSound']();
    }w6fhz(eg3ol, 'laya.wx.mini.MiniSound', dj79y);var d_789 = eg3ol['prototype'];return d_789['load'] = function (lhf$w) {
      var xc35s = this;lhf$w = q5sc3x['formatURL'](lhf$w), this['url'] = lhf$w;if (eg3ol['_audioCache'][lhf$w]) {
        this['event']('complete');return;
      }function d79_() {
        if (eg3ol['_null'] != undefined) xc35s['_sound']['onCanplay'](eg3ol['_null']), xc35s['_sound']['onError'](eg3ol['_null']);else try {
          xc35s['_sound']['onCanplay'](null), xc35s['_sound']['onError'](null), eg3ol['_null'] = null;
        } catch (vp1r) {
          console['warn']('[wxmini] _clearSound:' + vp1r), xc35s['_sound']['onCanplay'](f$elo), xc35s['_sound']['onError'](f$elo), eg3ol['_null'] = f$elo;
        }
      }function wfhz6m() {
        d79_(), zwm['loaded'] = !![], zwm['event']('complete'), eg3ol['_audioCache'][zwm['url']] = zwm;
      }function s3cqg5(yj79d_) {
        console['error']('errCode=' + yj79d_['errCode'] + '  errMsg=' + yj79d_['errMsg']), d79_(), zwm['event']('error');
      }function f$elo() {}this['_sound']['onCanplay'](wfhz6m), this['_sound']['onError'](s3cqg5), this['_sound']['src'] = lhf$w;var zwm = this;
    }, d_789['play'] = function (s35gcq, tk78r) {
      s35gcq === void 0x0 && (s35gcq = 0x0), tk78r === void 0x0 && (tk78r = 0x0);var ptbrv;if (this['url'] == g5csq3['_tMusic']) {
        if (!eg3ol['_musicAudio']) eg3ol['_musicAudio'] = eg3ol['_createSound']();ptbrv = eg3ol['_musicAudio'];
      } else ptbrv = eg3ol['_createSound']();ptbrv['src'] = this['url'];var c4y02x = new qelg(ptbrv);return c4y02x['url'] = this['url'], c4y02x['loops'] = tk78r, c4y02x['startTime'] = s35gcq, c4y02x['play'](), g5csq3['addChannel'](c4y02x), c4y02x;
    }, d_789['dispose'] = function () {
      var lohfw$ = eg3ol['_audioCache'][this['url']];lohfw$ && (lohfw$['src'] = '', delete eg3ol['_audioCache'][this['url']]);
    }, l$oe(0x0, d_789, 'duration', function () {
      return this['_sound']['duration'];
    }), eg3ol['_createSound'] = function () {
      return eg3ol['_id']++, y2jd0['window']['wx']['createInnerAudioContext']();
    }, eg3ol['_musicAudio'] = null, eg3ol['_id'] = 0x0, eg3ol['_audioCache'] = {}, eg3ol['_null'] = undefined, eg3ol;
  }(eh$lfo),
      qelg = function (avbp1) {
    function e$lq(l$efg) {
      this['_audio'] = null, this['_onEnd'] = null, e$lq['__super']['call'](this), this['_audio'] = l$efg, this['_onEnd'] = ba1vp['bind'](this['__onEnd'], this), l$efg['onEnded'](this['_onEnd']);
    }w6fhz(e$lq, 'laya.wx.mini.MiniSoundChannel', avbp1);var hlwf6 = e$lq['prototype'];return hlwf6['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (u6hzmw['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hlwf6['__onNull'] = function () {}, hlwf6['play'] = function () {
      this['isStopped'] = ![], g5csq3['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, hlwf6['stop'] = function () {
      this['isStopped'] = !![], g5csq3['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (e$lq['_null'] != undefined) this['_audio']['onEnded'](e$lq['_null']);else try {
        this['_audio']['onEnded'](null), e$lq['_null'] = null;
      } catch (y079jd) {
        console['warn']('[wxmini] stop:' + y079jd), this['_audio']['onEnded'](ba1vp['bind'](this['__onNull'], this)), e$lq['_null'] = ba1vp['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, hlwf6['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, hlwf6['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], g5csq3['addChannel'](this), this['_audio']['play']();
    }, l$oe(0x0, hlwf6, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), l$oe(0x0, hlwf6, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), l$oe(0x0, hlwf6, 'volume', function () {
      return 0x1;
    }, function (bapv) {}), e$lq['_null'] = undefined, e$lq;
  }(zmh6wf);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var s3ge5q in Laya) {
    var $lwhfo = Laya[s3ge5q];$lwhfo && $lwhfo['__isclass'] && (exports[s3ge5q] = $lwhfo);
  }
});