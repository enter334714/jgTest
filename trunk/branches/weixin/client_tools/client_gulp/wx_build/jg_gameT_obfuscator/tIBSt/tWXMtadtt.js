var M = wx.$T;
(function (window, document, rj3gn8) {
  var oz7epf = rj3gn8['un'],
      _m0hx = rj3gn8['uns'],
      $fpzdv = rj3gn8['static'],
      c9ivt = rj3gn8['class'],
      jban = rj3gn8['getset'],
      $fp = rj3gn8['__newvec'],
      arkgj = laya['utils']['Browser'],
      mh_5 = laya['events']['Event'],
      g3brn = laya['events']['EventDispatcher'],
      $vid9c = laya['resource']['HTMLImage'],
      cit24 = laya['utils']['Handler'],
      x_h0m = laya['display']['Input'],
      hw15 = laya['net']['Loader'],
      g361n8 = laya['maths']['Matrix'],
      zof7qe = laya['renders']['Render'],
      bjau = laya['utils']['RunDriver'],
      $pfv9 = laya['media']['Sound'],
      $9vcdi = laya['media']['SoundChannel'],
      pzdvf = laya['media']['SoundManager'],
      rbgakj = laya['display']['Stage'],
      gnjbr = laya['net']['URL'],
      pdfvz = laya['utils']['Utils'],
      fqzeo7 = function () {
    function kabjus() {}return c9ivt(kabjus, 'laya.wx.mini.MiniAdpter'), kabjus['getJson'] = function (ic$dv) {
      return JSON['parse'](ic$dv);
    }, kabjus['init'] = function (_ym0qx, idp$v) {
      _ym0qx === void 0x0 && (_ym0qx = ![]), idp$v === void 0x0 && (idp$v = ![]);if (kabjus['_inited']) return;kabjus['window'] = window;if (kabjus['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;kabjus['_inited'] = !![], kabjus['isZiYu'] = idp$v, kabjus['isPosMsgYu'] = _ym0qx, kabjus['EnvConfig'] = {}, !kabjus['isZiYu'] && (p9vdf['setNativeFileDir']('/layaairGame'), p9vdf['existDir'](p9vdf['fileNativeDir'], cit24['create'](kabjus, kabjus['onMkdirCallBack']))), kabjus['window']['focus'] = function () {}, rj3gn8['getUrlPath'] = function () {}, kabjus['window']['logtime'] = function (jakrbg) {}, kabjus['window']['alertTimeLog'] = function (kbjr) {}, kabjus['window']['resetShareInfo'] = function () {}, kabjus['window']['CanvasRenderingContext2D'] = function () {}, kabjus['window']['CanvasRenderingContext2D']['prototype'] = kabjus['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], kabjus['window']['document']['body']['appendChild'] = function () {}, kabjus['EnvConfig']['pixelRatioInt'] = 0x0, bjau['getPixelRatio'] = kabjus['pixelRatio'], kabjus['_preCreateElement'] = arkgj['createElement'], arkgj['createElement'] = kabjus['createElement'], bjau['createShaderCondition'] = kabjus['createShaderCondition'], pdfvz['parseXMLFromString'] = kabjus['parseXMLFromString'], x_h0m['_createInputElement'] = h_wym5['_createInputElement'], kabjus['EnvConfig']['load'] = hw15['prototype']['load'], hw15['prototype']['load'] = eyoxq['prototype']['load'], kabjus['isZiYu'] && _ym0qx && wx['onMessage'](function (anbgj) {
        anbgj['isLoad'] && (p9vdf['ziyuFileData'][anbgj['url']] = anbgj['data']);
      });
    }, kabjus['onMkdirCallBack'] = function (oz7fdp, n8g316) {
      if (!oz7fdp) p9vdf['filesListObj'] = JSON['parse'](n8g316['data']);
    }, kabjus['pixelRatio'] = function () {
      if (!kabjus['EnvConfig']['pixelRatioInt']) try {
        var m0qxy_ = wx['getSystemInfoSync']();return kabjus['EnvConfig']['pixelRatioInt'] = m0qxy_['pixelRatio'], m0qxy_ = m0qxy_, m0qxy_['pixelRatio'];
      } catch (krjab) {}return kabjus['EnvConfig']['pixelRatioInt'];
    }, kabjus['createElement'] = function (akus) {
      if (akus == 'canvas') {
        var pofdz;return kabjus['idx'] == 0x1 ? kabjus['isZiYu'] ? (pofdz = sharedCanvas, pofdz['style'] = {}) : pofdz = window['canvas'] : pofdz = window['wx']['createCanvas'](), kabjus['idx']++, pofdz;
      } else {
        if (akus == 'textarea' || akus == 'input') return kabjus['onCreateInput'](akus);else {
          if (akus == 'div') {
            var ef7pz = kabjus['_preCreateElement'](akus);return ef7pz['contains'] = function (d$7pz) {
              return null;
            }, ef7pz['removeChild'] = function (kujba) {}, ef7pz;
          } else return kabjus['_preCreateElement'](akus);
        }
      }
    }, kabjus['onCreateInput'] = function (ct$vi) {
      var oep7f = kabjus['_preCreateElement'](ct$vi);return oep7f['focus'] = h_wym5['wxinputFocus'], oep7f['blur'] = h_wym5['wxinputblur'], oep7f['style'] = {}, oep7f['value'] = 0x0, oep7f['parentElement'] = {}, oep7f['placeholder'] = {}, oep7f['type'] = {}, oep7f['setColor'] = function (f$zdp7) {}, oep7f['setType'] = function (_w5h) {}, oep7f['setFontFace'] = function (_x0ym) {}, oep7f['addEventListener'] = function ($dvfpz) {}, oep7f['contains'] = function (skabju) {
        return null;
      }, oep7f['removeChild'] = function (zofp) {}, oep7f;
    }, kabjus['createShaderCondition'] = function (jkrbsa) {
      var abgjkr = this,
          rn3g8j = function () {
        var ivct29 = jkrbsa;return abgjkr[jkrbsa['replace']('this.', '')];
      };return rn3g8j;
    }, kabjus['EnvConfig'] = null, kabjus['window'] = null, kabjus['_preCreateElement'] = null, kabjus['_inited'] = ![], kabjus['wxRequest'] = null, kabjus['systemInfo'] = null, kabjus['version'] = '0.0.1', kabjus['isZiYu'] = ![], kabjus['isPosMsgYu'] = ![], kabjus['parseXMLFromString'] = function (f7epo) {
      var iv9$p, h_y;f7epo = f7epo['replace'](/>\s+</g, '><');try {
        iv9$p = new window['Parser']['DOMParser']()['parseFromString'](f7epo, 'text/xml');
      } catch (pz7$fd) {
        throw '需要引入xml解析库文件';
      }return iv9$p;
    }, kabjus['idx'] = 0x1, kabjus;
  }(),
      cv9i = function () {
    function y0xhm_() {}c9ivt(y0xhm_, 'laya.wx.mini.MiniImage');var jangrb = y0xhm_['prototype'];return jangrb['_loadImage'] = function (nrbaj) {
      var d$i9 = this,
          n3jrb = ![];nrbaj['indexOf']('layaNativeDir/') == -0x1 && (n3jrb = !![], nrbaj = gnjbr['formatURL'](nrbaj));if (!p9vdf['getFileInfo'](nrbaj)) {
        if (nrbaj['indexOf']('http://') != -0x1 || nrbaj['indexOf']('https://') != -0x1) p9vdf['downImg'](nrbaj, new cit24(y0xhm_, y0xhm_['onDownImgCallBack'], [nrbaj, d$i9]), nrbaj);else y0xhm_['onCreateImage'](nrbaj, d$i9, !![]);
      } else y0xhm_['onCreateImage'](nrbaj, d$i9, !n3jrb);
    }, y0xhm_['onDownImgCallBack'] = function (rakbjs, fv9d, xeo7) {
      if (!xeo7) y0xhm_['onCreateImage'](rakbjs, fv9d);else fv9d['onError'](null);
    }, y0xhm_['onCreateImage'] = function (rgbaj, f7zod, my5_w) {
      my5_w === void 0x0 && (my5_w = ![]);var whmyx_;if (!my5_w) {
        var zoqe0 = p9vdf['getFileInfo'](rgbaj),
            f7p = zoqe0['md5'];whmyx_ = p9vdf['getFileNativePath'](f7p);
      } else whmyx_ = rgbaj;if (f7zod['imgCache'] == null) f7zod['imgCache'] = {};var n5163;function xqo0() {
        n5163['onload'] = null, n5163['onerror'] = null, delete f7zod['imgCache'][rgbaj];
      };var q07oxe = function () {
        xqo0(), f7zod['onLoaded'](n5163);
      },
          ganrb = function () {
        xqo0(), f7zod['event']('error', 'Load image failed');
      };f7zod['_type'] == 'nativeimage' ? (n5163 = new arkgj['window']['Image'](), n5163['crossOrigin'] = '', n5163['onload'] = q07oxe, n5163['onerror'] = ganrb, n5163['src'] = whmyx_, f7zod['imgCache'][rgbaj] = n5163) : new $vid9c['create'](whmyx_, { 'onload': q07oxe, 'onerror': ganrb, 'onCreate': function (qzo0) {
          n5163 = qzo0, f7zod['imgCache'][rgbaj] = qzo0;
        } });
    }, y0xhm_;
  }(),
      h_wym5 = function () {
    function ymx0q() {}return c9ivt(ymx0q, 'laya.wx.mini.MiniInput'), ymx0q['_createInputElement'] = function () {
      x_h0m['_initInput'](x_h0m['area'] = arkgj['createElement']('textarea')), x_h0m['_initInput'](x_h0m['input'] = arkgj['createElement']('input')), x_h0m['inputContainer'] = arkgj['createElement']('div'), x_h0m['inputContainer']['style']['position'] = 'absolute', x_h0m['inputContainer']['style']['zIndex'] = 0x186a0, arkgj['container']['appendChild'](x_h0m['inputContainer']), x_h0m['inputContainer']['setPos'] = function (ngr38, t2iv9c) {
        x_h0m['inputContainer']['style']['left'] = ngr38 + 'px', x_h0m['inputContainer']['style']['top'] = t2iv9c + 'px';
      }, rj3gn8['stage']['on']('resize', null, ymx0q['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (mq_0xy) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), pzdvf['_soundClass'] = eyxqo0, pzdvf['_musicClass'] = eyxqo0;
    }, ymx0q['_onStageResize'] = function () {
      var tvi$ = rj3gn8['stage']['_canvasTransform']['identity']();tvi$['scale'](arkgj['width'] / zof7qe['canvas']['width'] / bjau['getPixelRatio'](), arkgj['height'] / zof7qe['canvas']['height'] / bjau['getPixelRatio']());
    }, ymx0q['wxinputFocus'] = function (idv$9) {
      var eofz7 = x_h0m['inputElement']['target'];if (eofz7 && !eofz7['editable']) return;fqzeo7['window']['wx']['offKeyboardConfirm'](), fqzeo7['window']['wx']['offKeyboardInput'](), fqzeo7['window']['wx']['showKeyboard']({ 'defaultValue': eofz7['text'], 'maxLength': eofz7['maxChars'], 'multiple': eofz7['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (xqmy_) {}, 'fail': function (civ$d) {} }), fqzeo7['window']['wx']['onKeyboardConfirm'](function (jkrbga) {
        var fzdp$ = jkrbga ? jkrbga['value'] : '';eofz7['text'] = fzdp$, eofz7['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), fqzeo7['window']['wx']['onKeyboardInput'](function (qo0z7e) {
        var e07xqo = qo0z7e ? qo0z7e['value'] : '';if (!eofz7['multiline']) {
          if (e07xqo['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }eofz7['text'] = e07xqo, eofz7['event']('input');
      });
    }, ymx0q['inputEnter'] = function () {
      x_h0m['inputElement']['target']['focus'] = ![];
    }, ymx0q['wxinputblur'] = function () {
      ymx0q['hideKeyboard']();
    }, ymx0q['hideKeyboard'] = function () {
      fqzeo7['window']['wx']['offKeyboardConfirm'](), fqzeo7['window']['wx']['offKeyboardInput'](), fqzeo7['window']['wx']['hideKeyboard']({ 'success': function ($ipv9d) {
          console['log']('隐藏键盘');
        }, 'fail': function (eq0_xy) {
          console['log']('隐藏键盘出错:' + (eq0_xy ? eq0_xy['errMsg'] : ''));
        } });
    }, ymx0q;
  }(),
      eyoxq = function () {
    function kuasb() {}c9ivt(kuasb, 'laya.wx.mini.MiniLoader');var f7ozdp = kuasb['prototype'];return f7ozdp['load'] = function (najrbg, ofzd, m6w_, abngr, ukj) {
      m6w_ === void 0x0 && (m6w_ = !![]), ukj === void 0x0 && (ukj = ![]);var z7oqef = this;z7oqef['_url'] = najrbg;if (najrbg['indexOf']('data:image') === 0x0) z7oqef['_type'] = ofzd = 'image';else z7oqef['_type'] = ofzd || (ofzd = z7oqef['getTypeFromUrl'](najrbg));z7oqef['_cache'] = m6w_, z7oqef['_data'] = null;var f9$ = 'ascii';if (najrbg['indexOf']('.fnt') != -0x1) f9$ = 'utf8';else ofzd == 'arraybuffer' && (f9$ = '');;var q_myx = pdfvz['getFileExtension'](najrbg);if (kuasb['_fileTypeArr']['indexOf'](q_myx) != -0x1) fqzeo7['EnvConfig']['load']['call'](this, najrbg, ofzd, m6w_, abngr, ukj);else {
        if (!p9vdf['getFileInfo'](najrbg)) {
          if (najrbg['indexOf']('layaNativeDir/') != -0x1) {
            if (fqzeo7['isZiYu']) {
              var pfvdz = p9vdf['ziyuFileData'][najrbg];z7oqef['onLoaded'](pfvdz);return;
            } else {
              cosnole['log']('read read'), p9vdf['read'](najrbg, f9$, new cit24(kuasb, kuasb['onReadNativeCallBack'], [f9$, najrbg, ofzd, m6w_, abngr, ukj, z7oqef]));return;
            }
          }if (gnjbr['rootPath'] == '') var gn8 = najrbg;else gn8 = najrbg['split'](gnjbr['rootPath'])[0x0];najrbg['indexOf']('http://') != -0x1 || najrbg['indexOf']('https://') != -0x1 ? fqzeo7['EnvConfig']['load']['call'](z7oqef, najrbg, ofzd, m6w_, abngr, ukj) : p9vdf['readFile'](gn8, f9$, new cit24(kuasb, kuasb['onReadNativeCallBack'], [f9$, najrbg, ofzd, m6w_, abngr, ukj, z7oqef]), najrbg);
        } else fqzeo7['EnvConfig']['load']['call'](this, najrbg, ofzd, m6w_, abngr, ukj);
      }
    }, f7ozdp['resMgrLoad'] = function (i92tc, eqo0z7, x0qm_y, ajbrks, g361n, ozfe, qyxo0e) {
      x0qm_y === void 0x0 && (x0qm_y = 0x0), ajbrks === void 0x0 && (ajbrks = ![]), g361n === void 0x0 && (g361n = ![]), ozfe === void 0x0 && (ozfe = 0x0), qyxo0e === void 0x0 && (qyxo0e = 0x3), i92tc['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', i92tc), fqzeo7['EnvConfig']['resMgrLoad'](i92tc, (f7zqeo, qoyx0e, v$zpfd) => {
        kuasb['prototype']['resMgrLoadCallBack'](f7zqeo, qoyx0e, v$zpfd, eqo0z7);
      }, x0qm_y, ajbrks, g361n, ozfe, qyxo0e);
    }, f7ozdp['resMgrLoadCallBack'] = function (_yhmxw, m0, $cdiv9, ofzeq7) {
      console['log']('buff:::', _yhmxw, $cdiv9, p9vdf['fileNativeDir'] + '///' + p9vdf['fileListName']), ofzeq7(_yhmxw, m0, $cdiv9);
    }, f7ozdp['clearRes'] = function (vfd$pz, d7pzo) {
      d7pzo === void 0x0 && (d7pzo = ![]);var basjku = this;basjku['clearRes'](vfd$pz, d7pzo);var o07qz = p9vdf['getFileInfo'](vfd$pz);if (o07qz && (vfd$pz['indexOf']('http://') != -0x1 || vfd$pz['indexOf']('https://') != -0x1)) {
        var zf$7pd = o07qz['md5'],
            it$v9c = p9vdf['getFileNativePath'](zf$7pd);p9vdf['remove'](it$v9c);
      }
    }, kuasb['onReadNativeCallBack'] = function (vd$i9p, x7oe, yxh_m, yqxm0_, pi$vd, gr3n, pd9f$, _xy0h, dpv9$f) {
      yqxm0_ === void 0x0 && (yqxm0_ = !![]), gr3n === void 0x0 && (gr3n = ![]), _xy0h === void 0x0 && (_xy0h = 0x0);if (!_xy0h) {
        var $ct9iv;if (yxh_m == 'json' || yxh_m == 'atlas') $ct9iv = fqzeo7['getJson'](dpv9$f['data']);else yxh_m == 'xml' ? $ct9iv = pdfvz['parseXMLFromString'](dpv9$f['data']) : $ct9iv = dpv9$f['data'];pd9f$['onLoaded']($ct9iv), !fqzeo7['isZiYu'] && fqzeo7['isPosMsgYu'] && yxh_m != 'arraybuffer' && wx['postMessage']({ 'url': x7oe, 'data': $ct9iv, 'isLoad': !![] });
      } else _xy0h == 0x1 && fqzeo7['EnvConfig']['load']['call'](pd9f$, x7oe, yxh_m, yqxm0_, pi$vd, gr3n);
    }, $fpzdv(kuasb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), kuasb;
  }(),
      p9vdf = function (oq7e) {
    function ng3681() {
      ng3681['__super']['call'](this);;
    }return c9ivt(ng3681, 'laya.wx.mini.MiniFileMgr', oq7e), ng3681['isLoadFile'] = function (vfp9) {
      return ng3681['_fileTypeArr']['indexOf'](vfp9) != -0x1 ? !![] : ![];
    }, ng3681['getFileInfo'] = function (ywmh) {
      var ymh_w5 = ywmh['split']('?')[0x0],
          r183n = ng3681['filesListObj'][ymh_w5];if (r183n == null) return null;else return r183n;return null;
    }, ng3681['onFileUpdate'] = function (jrgka, $pf) {
      var itl4c2 = jrgka['split']('/'),
          xmw_hy = itl4c2[itl4c2['length'] - 0x1],
          jbgk = ng3681['getFileInfo']($pf);if (jbgk == null) ng3681['onSaveFile']($pf, xmw_hy);else {
        if (jbgk['readyUrl'] != $pf) ng3681['remove'](xmw_hy, $pf);
      }
    }, ng3681['exits'] = function (r1ng38, njabrg) {
      var d$ivc9 = ng3681['getFileNativePath'](r1ng38);ng3681['fs']['getFileInfo']({ 'filePath': d$ivc9, 'success': function (cilt) {
          njabrg != null && njabrg['runWith']([0x0, cilt]);
        }, 'fail': function (ksab) {
          njabrg != null && njabrg['runWith']([0x1, ksab]);
        } });
    }, ng3681['read'] = function (xy0m_q, di$v, d$7fz, qz7eo) {
      di$v === void 0x0 && (di$v = 'ascill'), qz7eo === void 0x0 && (qz7eo = '');var hx_ym;qz7eo != '' ? hx_ym = ng3681['getFileNativePath'](xy0m_q) : hx_ym = xy0m_q, ng3681['fs']['readFile']({ 'filePath': hx_ym, 'encoding': di$v, 'success': function (pdvf$z) {
          d$7fz != null && d$7fz['runWith']([0x0, pdvf$z]);
        }, 'fail': function (w5h16m) {
          if (w5h16m && qz7eo != '') ng3681['down'](qz7eo, di$v, d$7fz, qz7eo);else d$7fz != null && d$7fz['runWith']([0x1]);
        } });
    }, ng3681['readNativeFile'] = function (_wh56m, cvi9t) {
      ng3681['fs']['readFile']({ 'filePath': _wh56m, 'encoding': '', 'success': function (bsaujk) {
          cvi9t != null && cvi9t['runWith']([0x0]);
        }, 'fail': function (yqe) {
          cvi9t != null && cvi9t['runWith']([0x1]);
        } });
    }, ng3681['down'] = function (vict29, xeq_y, t24cl, gjrbn) {
      xeq_y === void 0x0 && (xeq_y = 'ascill'), gjrbn === void 0x0 && (gjrbn = '');var jgr = ng3681['getFileNativePath'](gjrbn),
          qxoe07 = ng3681['wxdown']({ 'url': vict29, 'filePath': jgr, 'success': function (i49tc) {
          if (i49tc['statusCode'] === 0xc8) ng3681['readFile'](i49tc['filePath'], xeq_y, t24cl, gjrbn);
        }, 'fail': function (_0yhmx) {
          t24cl != null && t24cl['runWith']([0x1, _0yhmx]);
        } });qxoe07['onProgressUpdate'](function ($pvfz) {
        t24cl != null && t24cl['runWith']([0x2, $pvfz['progress']]);
      });
    }, ng3681['readFile'] = function (zoeq0, eqox7, brjska, eq_xy) {
      eqox7 === void 0x0 && (eqox7 = 'ascill'), eq_xy === void 0x0 && (eq_xy = ''), ng3681['fs']['readFile']({ 'filePath': zoeq0, 'encoding': eqox7, 'success': function (m5h_y) {
          if (zoeq0['indexOf']('http://') != -0x1 || zoeq0['indexOf']('https://') != -0x1) ng3681['onFileUpdate'](zoeq0, eq_xy);brjska != null && brjska['runWith']([0x0, m5h_y]);
        }, 'fail': function (oef7z) {
          if (oef7z) brjska != null && brjska['runWith']([0x1, oef7z]);
        } });
    }, ng3681['downImg'] = function (hxw_m, srka, agrjk) {
      agrjk === void 0x0 && (agrjk = '');var $fpvd9 = ng3681['wxdown']({ 'url': hxw_m, 'success': function (xe_0) {
          xe_0['statusCode'] === 0xc8 && ng3681['copyFile'](xe_0['tempFilePath'], agrjk, srka);
        }, 'fail': function (wh65m1) {
          srka != null && srka['runWith']([0x1, wh65m1]);
        } });
    }, ng3681['copyFile'] = function (bajksu, qex_y0, h1wm6) {
      var fpoe7z = bajksu['split']('/'),
          w18365 = fpoe7z[fpoe7z['length'] - 0x1],
          zfvdp = qex_y0['split']('?')[0x0],
          cvti$9 = ng3681['getFileInfo'](qex_y0),
          vdci = ng3681['getFileNativePath'](w18365);ng3681['fs']['copyFile']({ 'srcPath': bajksu, 'destPath': vdci, 'success': function (kuasjb) {
          if (!cvti$9) ng3681['onSaveFile'](qex_y0, w18365), h1wm6 != null && h1wm6['runWith']([0x0]);else {
            if (cvti$9['readyUrl'] != qex_y0) ng3681['remove'](w18365, qex_y0, h1wm6);
          }
        }, 'fail': function (jbnr3) {
          h1wm6 != null && h1wm6['runWith']([0x1, jbnr3]);
        } });
    }, ng3681['getFileNativePath'] = function (c$v9id) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + c$v9id;
    }, ng3681['remove'] = function (_mh0yx, kjsabr, $itv9) {
      kjsabr === void 0x0 && (kjsabr = '');var _5myhw = ng3681['getFileInfo'](kjsabr),
          rg3nbj = ng3681['getFileNativePath'](_5myhw['md5']);rj3gn8['loader']['clearRes'](_5myhw['readyUrl']), ng3681['fs']['unlink']({ 'filePath': rg3nbj, 'success': function (mh615w) {
          if (kjsabr != '') ng3681['onSaveFile'](kjsabr, _mh0yx);$itv9 != null && $itv9['runWith']([0x0]);
        }, 'fail': function (hw6m51) {} });
    }, ng3681['onSaveFile'] = function (jn3g, t29i4c) {
      var c2vi9t = jn3g['split']('?')[0x0];ng3681['filesListObj'][c2vi9t] = { 'md5': t29i4c, 'readyUrl': jn3g }, ng3681['fs']['writeFile']({ 'filePath': ng3681['fileNativeDir'] + '/' + ng3681['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ng3681['filesListObj']), 'success': function (w356) {
          console['log']('写入测试测试成功：', w356);
        }, 'fail': function (civ9) {
          console['log']('写入测试测试失败：', civ9);
        } });
    }, ng3681['existDir'] = function (dv9c, w18653) {
      ng3681['fs']['mkdir']({ 'dirPath': dv9c, 'success': function (o7df) {
          w18653 != null && w18653['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (e_q0x) {
          if (e_q0x['errMsg']['indexOf']('file already exists') != -0x1) ng3681['readSync'](ng3681['fileListName'], 'utf8', w18653);else w18653 != null && w18653['runWith']([0x1, e_q0x]);
        } });
    }, ng3681['readSync'] = function (odpf, hxmw_y, eqf7oz, _hy5wm) {
      hxmw_y === void 0x0 && (hxmw_y = 'ascill'), _hy5wm === void 0x0 && (_hy5wm = '');var jkub = ng3681['getFileNativePath'](odpf),
          $ictv;try {
        $ictv = ng3681['fs']['readFileSync'](jkub), eqf7oz != null && eqf7oz['runWith']([0x0, { 'data': $ictv }]);
      } catch (ngrb) {
        eqf7oz != null && eqf7oz['runWith']([0x1]);
      }
    }, ng3681['readCache'] = function () {}, ng3681['writeCache'] = function (foqe7z) {
      var vi$p9 = readyUrl['split']('?')[0x0];ng3681['filesListObj'][vi$p9] = { 'md5': md5Name, 'readyUrl': readyUrl }, ng3681['fs']['writeFile']({ 'filePath': ng3681['fileNativeDir'] + '/' + ng3681['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ng3681['filesListObj']), 'success': function (o7xq0) {}, 'fail': function (rganj) {} });
    }, ng3681['setNativeFileDir'] = function (ofpz7e) {
      ng3681['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ofpz7e;
    }, ng3681['filesListObj'] = {}, ng3681['fileNativeDir'] = null, ng3681['fileListName'] = 'layaairfiles.txt', ng3681['ziyuFileData'] = {}, $fpzdv(ng3681, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ng3681;
  }(g3brn),
      eyxqo0 = function (fz7pdo) {
    function zp7d() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], zp7d['__super']['call'](this), this['_sound'] = zp7d['_createSound']();
    }c9ivt(zp7d, 'laya.wx.mini.MiniSound', fz7pdo);var idvp$ = zp7d['prototype'];return idvp$['load'] = function (eqzfo) {
      var dfvp$9 = this;eqzfo = gnjbr['formatURL'](eqzfo), this['url'] = eqzfo;if (zp7d['_audioCache'][eqzfo]) {
        this['event']('complete');return;
      }function mxy0q_() {
        if (zp7d['_null'] != undefined) dfvp$9['_sound']['onCanplay'](zp7d['_null']), dfvp$9['_sound']['onError'](zp7d['_null']);else try {
          dfvp$9['_sound']['onCanplay'](null), dfvp$9['_sound']['onError'](null), zp7d['_null'] = null;
        } catch (m_hy0) {
          console['warn']('[wxmini] _clearSound:' + m_hy0), dfvp$9['_sound']['onCanplay'](gnjrab), dfvp$9['_sound']['onError'](gnjrab), zp7d['_null'] = gnjrab;
        }
      }function kabrjg() {
        mxy0q_(), qzoe['loaded'] = !![], qzoe['event']('complete'), zp7d['_audioCache'][qzoe['url']] = qzoe;
      }function zqe07(dpv$9) {
        console['error']('errCode=' + dpv$9['errCode'] + '  errMsg=' + dpv$9['errMsg']), mxy0q_(), qzoe['event']('error');
      }function gnjrab() {}this['_sound']['onCanplay'](kabrjg), this['_sound']['onError'](zqe07), this['_sound']['src'] = eqzfo;var qzoe = this;
    }, idvp$['play'] = function (qmy_, m_w56h) {
      qmy_ === void 0x0 && (qmy_ = 0x0), m_w56h === void 0x0 && (m_w56h = 0x0);var o0xq;if (this['url'] == pzdvf['_tMusic']) {
        if (!zp7d['_musicAudio']) zp7d['_musicAudio'] = zp7d['_createSound']();o0xq = zp7d['_musicAudio'];
      } else o0xq = zp7d['_createSound']();o0xq['src'] = this['url'];var $9vfp = new yxh_0m(o0xq);return $9vfp['url'] = this['url'], $9vfp['loops'] = m_w56h, $9vfp['startTime'] = qmy_, $9vfp['play'](), pzdvf['addChannel']($9vfp), $9vfp;
    }, idvp$['dispose'] = function () {
      var hmy0 = zp7d['_audioCache'][this['url']];hmy0 && (hmy0['src'] = '', delete zp7d['_audioCache'][this['url']]);
    }, jban(0x0, idvp$, 'duration', function () {
      return this['_sound']['duration'];
    }), zp7d['_createSound'] = function () {
      return zp7d['_id']++, fqzeo7['window']['wx']['createInnerAudioContext']();
    }, zp7d['_musicAudio'] = null, zp7d['_id'] = 0x0, zp7d['_audioCache'] = {}, zp7d['_null'] = undefined, zp7d;
  }(g3brn),
      yxh_0m = function (l4ct) {
    function m65wh(of7epz) {
      this['_audio'] = null, this['_onEnd'] = null, m65wh['__super']['call'](this), this['_audio'] = of7epz, this['_onEnd'] = pdfvz['bind'](this['__onEnd'], this), of7epz['onEnded'](this['_onEnd']);
    }c9ivt(m65wh, 'laya.wx.mini.MiniSoundChannel', l4ct);var jkbsr = m65wh['prototype'];return jkbsr['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (rj3gn8['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jkbsr['__onNull'] = function () {}, jkbsr['play'] = function () {
      this['isStopped'] = ![], pzdvf['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, jkbsr['stop'] = function () {
      this['isStopped'] = !![], pzdvf['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (m65wh['_null'] != undefined) this['_audio']['onEnded'](m65wh['_null']);else try {
        this['_audio']['onEnded'](null), m65wh['_null'] = null;
      } catch (zqeof) {
        console['warn']('[wxmini] stop:' + zqeof), this['_audio']['onEnded'](pdfvz['bind'](this['__onNull'], this)), m65wh['_null'] = pdfvz['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, jkbsr['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, jkbsr['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], pzdvf['addChannel'](this), this['_audio']['play']();
    }, jban(0x0, jkbsr, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), jban(0x0, jkbsr, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), jban(0x0, jkbsr, 'volume', function () {
      return 0x1;
    }, function (bjksra) {}), m65wh['_null'] = undefined, m65wh;
  }($9vcdi);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ymw_5h in Laya) {
    var hm_5 = Laya[ymw_5h];hm_5 && hm_5['__isclass'] && (exports[ymw_5h] = hm_5);
  }
});