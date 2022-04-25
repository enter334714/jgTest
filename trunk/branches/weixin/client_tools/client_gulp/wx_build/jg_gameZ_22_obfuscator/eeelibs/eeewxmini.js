var b = wx.$e;
(function (window, document, kn96u) {
  var m4 = kn96u['un'],
      nsj3 = kn96u['uns'],
      zv_yf4 = kn96u['static'],
      $ij3n = kn96u['class'],
      $xlgi = kn96u['getset'],
      tg$x = kn96u['__newvec'],
      lzhrgt = laya['utils']['Browser'],
      jinq$3 = laya['events']['Event'],
      d5k60b = laya['events']['EventDispatcher'],
      afv47 = laya['resource']['HTMLImage'],
      jitg$x = laya['utils']['Handler'],
      usn93 = laya['display']['Input'],
      hyvfz = laya['net']['Loader'],
      s9knu = laya['maths']['Matrix'],
      kn9su6 = laya['renders']['Render'],
      fyhzvr = laya['utils']['RunDriver'],
      uq3jns = laya['media']['Sound'],
      vam47_ = laya['media']['SoundChannel'],
      qksu9n = laya['media']['SoundManager'],
      j$qi3n = laya['display']['Stage'],
      n3q9us = laya['net']['URL'],
      d1w852 = laya['utils']['Utils'],
      sn9q3 = function () {
    function w52d80() {}return $ij3n(w52d80, 'laya.wx.mini.MiniAdpter'), w52d80['getJson'] = function (xij$g) {
      return JSON['parse'](xij$g);
    }, w52d80['init'] = function (rfylhz, mocep) {
      rfylhz === void 0x0 && (rfylhz = ![]), mocep === void 0x0 && (mocep = ![]);if (w52d80['_inited']) return;w52d80['window'] = window;if (w52d80['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;w52d80['_inited'] = !![], w52d80['isZiYu'] = mocep, w52d80['isPosMsgYu'] = rfylhz, w52d80['EnvConfig'] = {}, !w52d80['isZiYu'] && (av_4m7['setNativeFileDir']('/layaairGame'), av_4m7['existDir'](av_4m7['fileNativeDir'], jitg$x['create'](w52d80, w52d80['onMkdirCallBack']))), w52d80['window']['focus'] = function () {}, kn96u['getUrlPath'] = function () {}, w52d80['window']['logtime'] = function (ku9bs6) {}, w52d80['window']['alertTimeLog'] = function (bsu9) {}, w52d80['window']['resetShareInfo'] = function () {}, w52d80['window']['CanvasRenderingContext2D'] = function () {}, w52d80['window']['CanvasRenderingContext2D']['prototype'] = w52d80['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], w52d80['window']['document']['body']['appendChild'] = function () {}, w52d80['EnvConfig']['pixelRatioInt'] = 0x0, fyhzvr['getPixelRatio'] = w52d80['pixelRatio'], w52d80['_preCreateElement'] = lzhrgt['createElement'], lzhrgt['createElement'] = w52d80['createElement'], fyhzvr['createShaderCondition'] = w52d80['createShaderCondition'], d1w852['parseXMLFromString'] = w52d80['parseXMLFromString'], usn93['_createInputElement'] = snujq3['_createInputElement'], w52d80['EnvConfig']['load'] = hyvfz['prototype']['load'], hyvfz['prototype']['load'] = yv47_['prototype']['load'], w52d80['isZiYu'] && rfylhz && wx['onMessage'](function (eompa) {
        eompa['isLoad'] && (av_4m7['ziyuFileData'][eompa['url']] = eompa['data']);
      });
    }, w52d80['onMkdirCallBack'] = function (b9d60, am7c_4) {
      if (!b9d60) av_4m7['filesListObj'] = JSON['parse'](am7c_4['data']);
    }, w52d80['pixelRatio'] = function () {
      if (!w52d80['EnvConfig']['pixelRatioInt']) try {
        var mo7acp = wx['getSystemInfoSync']();return w52d80['EnvConfig']['pixelRatioInt'] = mo7acp['pixelRatio'], mo7acp = mo7acp, mo7acp['pixelRatio'];
      } catch (va7f) {}return w52d80['EnvConfig']['pixelRatioInt'];
    }, w52d80['createElement'] = function (epacm) {
      if (epacm == 'canvas') {
        var txlhrg;return w52d80['idx'] == 0x1 ? w52d80['isZiYu'] ? (txlhrg = sharedCanvas, txlhrg['style'] = {}) : txlhrg = window['canvas'] : txlhrg = window['wx']['createCanvas'](), w52d80['idx']++, txlhrg;
      } else {
        if (epacm == 'textarea' || epacm == 'input') return w52d80['onCreateInput'](epacm);else {
          if (epacm == 'div') {
            var ocepma = w52d80['_preCreateElement'](epacm);return ocepma['contains'] = function (a4mc7) {
              return null;
            }, ocepma['removeChild'] = function (hglzt) {}, ocepma;
          } else return w52d80['_preCreateElement'](epacm);
        }
      }
    }, w52d80['onCreateInput'] = function (v_f7a4) {
      var sku6b = w52d80['_preCreateElement'](v_f7a4);return sku6b['focus'] = snujq3['wxinputFocus'], sku6b['blur'] = snujq3['wxinputblur'], sku6b['style'] = {}, sku6b['value'] = 0x0, sku6b['parentElement'] = {}, sku6b['placeholder'] = {}, sku6b['type'] = {}, sku6b['setColor'] = function (sjnqu3) {}, sku6b['setType'] = function (ixgtj$) {}, sku6b['setFontFace'] = function (qsunk9) {}, sku6b['addEventListener'] = function (tjigx) {}, sku6b['contains'] = function (iqx$3j) {
        return null;
      }, sku6b['removeChild'] = function ($tij) {}, sku6b;
    }, w52d80['createShaderCondition'] = function (b6d5k0) {
      var db508 = this,
          xgil$t = function () {
        var u3sqn9 = b6d5k0;return db508[b6d5k0['replace']('this.', '')];
      };return xgil$t;
    }, w52d80['EnvConfig'] = null, w52d80['window'] = null, w52d80['_preCreateElement'] = null, w52d80['_inited'] = ![], w52d80['wxRequest'] = null, w52d80['systemInfo'] = null, w52d80['version'] = '0.0.1', w52d80['isZiYu'] = ![], w52d80['isPosMsgYu'] = ![], w52d80['parseXMLFromString'] = function (w8d512) {
      var sqnju, b9k06d;w8d512 = w8d512['replace'](/>\s+</g, '><');try {
        sqnju = new window['Parser']['DOMParser']()['parseFromString'](w8d512, 'text/xml');
      } catch (tglrz) {
        throw '需要引入xml解析库文件';
      }return sqnju;
    }, w52d80['idx'] = 0x1, w52d80;
  }(),
      uk9sn6 = function () {
    function tgzlrh() {}$ij3n(tgzlrh, 'laya.wx.mini.MiniImage');var b560kd = tgzlrh['prototype'];return b560kd['_loadImage'] = function (aempo) {
      var lrtgz = this,
          _7ma = ![];aempo['indexOf']('layaNativeDir/') == -0x1 && (_7ma = !![], aempo = n3q9us['formatURL'](aempo));if (!av_4m7['getFileInfo'](aempo)) {
        if (aempo['indexOf']('http://') != -0x1 || aempo['indexOf']('https://') != -0x1) av_4m7['downImg'](aempo, new jitg$x(tgzlrh, tgzlrh['onDownImgCallBack'], [aempo, lrtgz]), aempo);else tgzlrh['onCreateImage'](aempo, lrtgz, !![]);
      } else tgzlrh['onCreateImage'](aempo, lrtgz, !_7ma);
    }, tgzlrh['onDownImgCallBack'] = function (aocme, m4_ca, mcpoae) {
      if (!mcpoae) tgzlrh['onCreateImage'](aocme, m4_ca);else m4_ca['onError'](null);
    }, tgzlrh['onCreateImage'] = function (zfhyvr, ukqsn9, fvy_4z) {
      fvy_4z === void 0x0 && (fvy_4z = ![]);var _a7mv4;if (!fvy_4z) {
        var vzyrh = av_4m7['getFileInfo'](zfhyvr),
            b5w8d = vzyrh['md5'];_a7mv4 = av_4m7['getFileNativePath'](b5w8d);
      } else _a7mv4 = zfhyvr;if (ukqsn9['imgCache'] == null) ukqsn9['imgCache'] = {};var y4fv_z;function zryf4v() {
        y4fv_z['onload'] = null, y4fv_z['onerror'] = null, delete ukqsn9['imgCache'][zfhyvr];
      };var i3j$qx = function () {
        zryf4v(), ukqsn9['onLoaded'](y4fv_z);
      },
          litg$ = function () {
        zryf4v(), ukqsn9['event']('error', 'Load image failed');
      };ukqsn9['_type'] == 'nativeimage' ? (y4fv_z = new lzhrgt['window']['Image'](), y4fv_z['crossOrigin'] = '', y4fv_z['onload'] = i3j$qx, y4fv_z['onerror'] = litg$, y4fv_z['src'] = _a7mv4, ukqsn9['imgCache'][zfhyvr] = y4fv_z) : new afv47['create'](_a7mv4, { 'onload': i3j$qx, 'onerror': litg$, 'onCreate': function (yr4v) {
          y4fv_z = yr4v, ukqsn9['imgCache'][zfhyvr] = yr4v;
        } });
    }, tgzlrh;
  }(),
      snujq3 = function () {
    function trlgzh() {}return $ij3n(trlgzh, 'laya.wx.mini.MiniInput'), trlgzh['_createInputElement'] = function () {
      usn93['_initInput'](usn93['area'] = lzhrgt['createElement']('textarea')), usn93['_initInput'](usn93['input'] = lzhrgt['createElement']('input')), usn93['inputContainer'] = lzhrgt['createElement']('div'), usn93['inputContainer']['style']['position'] = 'absolute', usn93['inputContainer']['style']['zIndex'] = 0x186a0, lzhrgt['container']['appendChild'](usn93['inputContainer']), usn93['inputContainer']['setPos'] = function (w5d8, qn3sju) {
        usn93['inputContainer']['style']['left'] = w5d8 + 'px', usn93['inputContainer']['style']['top'] = qn3sju + 'px';
      }, kn96u['stage']['on']('resize', null, trlgzh['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (yzr4) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), qksu9n['_soundClass'] = a_m74c, qksu9n['_musicClass'] = a_m74c, window['_videoClass'] = dbk65;
    }, trlgzh['_onStageResize'] = function () {
      var qnuk9 = kn96u['stage']['_canvasTransform']['identity']();qnuk9['scale'](lzhrgt['width'] / kn9su6['canvas']['width'] / fyhzvr['getPixelRatio'](), lzhrgt['height'] / kn9su6['canvas']['height'] / fyhzvr['getPixelRatio']());
    }, trlgzh['wxinputFocus'] = function (qniu) {
      var y4rvz = usn93['inputElement']['target'];if (y4rvz && !y4rvz['editable']) return;sn9q3['window']['wx']['offKeyboardConfirm'](), sn9q3['window']['wx']['offKeyboardInput'](), sn9q3['window']['wx']['showKeyboard']({ 'defaultValue': y4rvz['text'], 'maxLength': y4rvz['maxChars'], 'multiple': y4rvz['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (am7oc_) {}, 'fail': function (r4yfzv) {} }), sn9q3['window']['wx']['onKeyboardConfirm'](function (lrhfz) {
        var j3i$xq = lrhfz ? lrhfz['value'] : '';y4rvz['text'] = j3i$xq, y4rvz['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), sn9q3['window']['wx']['onKeyboardInput'](function (lrthx) {
        var ompeca = lrthx ? lrthx['value'] : '';if (!y4rvz['multiline']) {
          if (ompeca['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }y4rvz['text'] = ompeca, y4rvz['event']('input');
      });
    }, trlgzh['inputEnter'] = function () {
      usn93['inputElement']['target']['focus'] = ![];
    }, trlgzh['wxinputblur'] = function () {
      trlgzh['hideKeyboard']();
    }, trlgzh['hideKeyboard'] = function () {
      sn9q3['window']['wx']['offKeyboardConfirm'](), sn9q3['window']['wx']['offKeyboardInput'](), sn9q3['window']['wx']['hideKeyboard']({ 'success': function (yv4z_) {
          console['log']('隐藏键盘');
        }, 'fail': function (zgrtlh) {
          console['log']('隐藏键盘出错:' + (zgrtlh ? zgrtlh['errMsg'] : ''));
        } });
    }, trlgzh;
  }(),
      yv47_ = function () {
    function zvhfy() {}$ij3n(zvhfy, 'laya.wx.mini.MiniLoader');var $i3gxj = zvhfy['prototype'];return $i3gxj['load'] = function (vam74, ryhfz, i$gjtx, c7oap, f7yv_) {
      i$gjtx === void 0x0 && (i$gjtx = !![]), f7yv_ === void 0x0 && (f7yv_ = ![]);var lrgtzh = this;lrgtzh['_url'] = vam74;if (vam74['indexOf']('data:image') === 0x0) lrgtzh['_type'] = ryhfz = 'image';else lrgtzh['_type'] = ryhfz || (ryhfz = lrgtzh['getTypeFromUrl'](vam74));lrgtzh['_cache'] = i$gjtx, lrgtzh['_data'] = null;var kb6u9s = 'ascii';if (vam74['indexOf']('.fnt') != -0x1) kb6u9s = 'utf8';else ryhfz == 'arraybuffer' && (kb6u9s = '');;var zlhyr = d1w852['getFileExtension'](vam74);if (zvhfy['_fileTypeArr']['indexOf'](zlhyr) != -0x1) sn9q3['EnvConfig']['load']['call'](this, vam74, ryhfz, i$gjtx, c7oap, f7yv_);else {
        if (!av_4m7['getFileInfo'](vam74)) {
          if (vam74['indexOf']('layaNativeDir/') != -0x1) {
            if (sn9q3['isZiYu']) {
              var yfzv4 = av_4m7['ziyuFileData'][vam74];lrgtzh['onLoaded'](yfzv4);return;
            } else {
              cosnole['log']('read read'), av_4m7['read'](vam74, kb6u9s, new jitg$x(zvhfy, zvhfy['onReadNativeCallBack'], [kb6u9s, vam74, ryhfz, i$gjtx, c7oap, f7yv_, lrgtzh]));return;
            }
          }if (n3q9us['rootPath'] == '') var acmo = vam74;else acmo = vam74['split'](n3q9us['rootPath'])[0x0];vam74['indexOf']('http://') != -0x1 || vam74['indexOf']('https://') != -0x1 ? sn9q3['EnvConfig']['load']['call'](lrgtzh, vam74, ryhfz, i$gjtx, c7oap, f7yv_) : av_4m7['readFile'](acmo, kb6u9s, new jitg$x(zvhfy, zvhfy['onReadNativeCallBack'], [kb6u9s, vam74, ryhfz, i$gjtx, c7oap, f7yv_, lrgtzh]), vam74);
        } else sn9q3['EnvConfig']['load']['call'](this, vam74, ryhfz, i$gjtx, c7oap, f7yv_);
      }
    }, $i3gxj['resMgrLoad'] = function (d90kb, p7coma, xg3i$j, d08wb5, om7ap, tixl$g, mapoc7) {
      xg3i$j === void 0x0 && (xg3i$j = 0x0), d08wb5 === void 0x0 && (d08wb5 = ![]), om7ap === void 0x0 && (om7ap = ![]), tixl$g === void 0x0 && (tixl$g = 0x0), mapoc7 === void 0x0 && (mapoc7 = 0x3), d90kb['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', d90kb), sn9q3['EnvConfig']['resMgrLoad'](d90kb, (jig3, jxtig, ltrhx) => {
        zvhfy['prototype']['resMgrLoadCallBack'](jig3, jxtig, ltrhx, p7coma);
      }, xg3i$j, d08wb5, om7ap, tixl$g, mapoc7);
    }, $i3gxj['resMgrLoadCallBack'] = function (t$hl, xgtj$i, wd580, tigl$) {
      console['log']('buff:::', t$hl, wd580, av_4m7['fileNativeDir'] + '///' + av_4m7['fileListName']), tigl$(t$hl, xgtj$i, wd580);
    }, $i3gxj['clearRes'] = function (unks9q, dwb850) {
      dwb850 === void 0x0 && (dwb850 = ![]);var u6bk9s = this;u6bk9s['clearRes'](unks9q, dwb850);var gtlx$i = av_4m7['getFileInfo'](unks9q);if (gtlx$i && (unks9q['indexOf']('http://') != -0x1 || unks9q['indexOf']('https://') != -0x1)) {
        var $txglh = gtlx$i['md5'],
            sbu69 = av_4m7['getFileNativePath']($txglh);av_4m7['remove'](sbu69);
      }
    }, zvhfy['onReadNativeCallBack'] = function (i3gxj, c74m_a, x3ijq, f7y, _av4, $itj, f4vzyr, maopec, z_yf4v) {
      f7y === void 0x0 && (f7y = !![]), $itj === void 0x0 && ($itj = ![]), maopec === void 0x0 && (maopec = 0x0);if (!maopec) {
        var tlxh$;if (x3ijq == 'json' || x3ijq == 'atlas') tlxh$ = sn9q3['getJson'](z_yf4v['data']);else x3ijq == 'xml' ? tlxh$ = d1w852['parseXMLFromString'](z_yf4v['data']) : tlxh$ = z_yf4v['data'];f4vzyr['onLoaded'](tlxh$), !sn9q3['isZiYu'] && sn9q3['isPosMsgYu'] && x3ijq != 'arraybuffer' && wx['postMessage']({ 'url': c74m_a, 'data': tlxh$, 'isLoad': !![] });
      } else maopec == 0x1 && sn9q3['EnvConfig']['load']['call'](f4vzyr, c74m_a, x3ijq, f7y, _av4, $itj);
    }, zv_yf4(zvhfy, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), zvhfy;
  }(),
      av_4m7 = function (j$xq3i) {
    function _am74v() {
      _am74v['__super']['call'](this);;
    }return $ij3n(_am74v, 'laya.wx.mini.MiniFileMgr', j$xq3i), _am74v['isLoadFile'] = function (grhtxl) {
      return _am74v['_fileTypeArr']['indexOf'](grhtxl) != -0x1 ? !![] : ![];
    }, _am74v['getFileInfo'] = function (rthlgx) {
      var u96sk = rthlgx['split']('?')[0x0],
          kb690s = _am74v['filesListObj'][u96sk];if (kb690s == null) return null;else return kb690s;return null;
    }, _am74v['onFileUpdate'] = function (_y4f7v, fyz4v_) {
      var uq9s3n = _y4f7v['split']('/'),
          d508b6 = uq9s3n[uq9s3n['length'] - 0x1],
          i$j3nq = _am74v['getFileInfo'](fyz4v_);if (i$j3nq == null) _am74v['onSaveFile'](fyz4v_, d508b6);else {
        if (i$j3nq['readyUrl'] != fyz4v_) _am74v['remove'](d508b6, fyz4v_);
      }
    }, _am74v['exits'] = function (mpco, qukn9s) {
      var f47_v = _am74v['getFileNativePath'](mpco);_am74v['fs']['getFileInfo']({ 'filePath': f47_v, 'success': function (wd125) {
          qukn9s != null && qukn9s['runWith']([0x0, wd125]);
        }, 'fail': function (ac7m_) {
          qukn9s != null && qukn9s['runWith']([0x1, ac7m_]);
        } });
    }, _am74v['read'] = function (jnq$i3, m47a_, nuqj3, co7) {
      m47a_ === void 0x0 && (m47a_ = 'ascill'), co7 === void 0x0 && (co7 = '');var ghrxl;co7 != '' ? ghrxl = _am74v['getFileNativePath'](jnq$i3) : ghrxl = jnq$i3, _am74v['fs']['readFile']({ 'filePath': ghrxl, 'encoding': m47a_, 'success': function (knsq) {
          nuqj3 != null && nuqj3['runWith']([0x0, knsq]);
        }, 'fail': function (mace) {
          if (mace && co7 != '') _am74v['down'](co7, m47a_, nuqj3, co7);else nuqj3 != null && nuqj3['runWith']([0x1]);
        } });
    }, _am74v['readNativeFile'] = function (hrzglt, qjxi3) {
      _am74v['fs']['readFile']({ 'filePath': hrzglt, 'encoding': '', 'success': function (qj$3ix) {
          qjxi3 != null && qjxi3['runWith']([0x0]);
        }, 'fail': function (pmoa7c) {
          qjxi3 != null && qjxi3['runWith']([0x1]);
        } });
    }, _am74v['down'] = function (a_m7, q$3jn, a7m_c, f_a) {
      q$3jn === void 0x0 && (q$3jn = 'ascill'), f_a === void 0x0 && (f_a = '');var _yf7v = _am74v['getFileNativePath'](f_a),
          k65db0 = _am74v['wxdown']({ 'url': a_m7, 'filePath': _yf7v, 'success': function (zylrht) {
          if (zylrht['statusCode'] === 0xc8) _am74v['readFile'](zylrht['filePath'], q$3jn, a7m_c, f_a);
        }, 'fail': function (qniuj) {
          a7m_c != null && a7m_c['runWith']([0x1, qniuj]);
        } });k65db0['onProgressUpdate'](function (rzht) {
        a7m_c != null && a7m_c['runWith']([0x2, rzht['progress']]);
      });
    }, _am74v['readFile'] = function (c7maop, uqjn3i, fzyrv, cpoam) {
      uqjn3i === void 0x0 && (uqjn3i = 'ascill'), cpoam === void 0x0 && (cpoam = ''), _am74v['fs']['readFile']({ 'filePath': c7maop, 'encoding': uqjn3i, 'success': function ($gtxl) {
          if (c7maop['indexOf']('http://') != -0x1 || c7maop['indexOf']('https://') != -0x1) _am74v['onFileUpdate'](c7maop, cpoam);fzyrv != null && fzyrv['runWith']([0x0, $gtxl]);
        }, 'fail': function (q3iju) {
          if (q3iju) fzyrv != null && fzyrv['runWith']([0x1, q3iju]);
        } });
    }, _am74v['downImg'] = function (om7p, kd05, _av7f) {
      _av7f === void 0x0 && (_av7f = '');var njqus = _am74v['wxdown']({ 'url': om7p, 'success': function (d850bw) {
          d850bw['statusCode'] === 0xc8 && _am74v['copyFile'](d850bw['tempFilePath'], _av7f, kd05);
        }, 'fail': function (b69sk0) {
          kd05 != null && kd05['runWith']([0x1, b69sk0]);
        } });
    }, _am74v['copyFile'] = function (hrgtz, qus3n, mpao) {
      var _a7co = hrgtz['split']('/'),
          $nji3 = _a7co[_a7co['length'] - 0x1],
          n$j3qi = qus3n['split']('?')[0x0],
          f_7vy4 = _am74v['getFileInfo'](qus3n),
          n93qsu = _am74v['getFileNativePath']($nji3);_am74v['fs']['copyFile']({ 'srcPath': hrgtz, 'destPath': n93qsu, 'success': function (a7poc) {
          if (!f_7vy4) _am74v['onSaveFile'](qus3n, $nji3), mpao != null && mpao['runWith']([0x0]);else {
            if (f_7vy4['readyUrl'] != qus3n) _am74v['remove']($nji3, qus3n, mpao);
          }
        }, 'fail': function (ztl) {
          mpao != null && mpao['runWith']([0x1, ztl]);
        } });
    }, _am74v['getFileNativePath'] = function (aoecm) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + aoecm;
    }, _am74v['remove'] = function (xl$hg, v7f4a_, a74mc) {
      v7f4a_ === void 0x0 && (v7f4a_ = '');var yzrfv = _am74v['getFileInfo'](v7f4a_),
          coa_7 = _am74v['getFileNativePath'](yzrfv['md5']);kn96u['loader']['clearRes'](yzrfv['readyUrl']), _am74v['fs']['unlink']({ 'filePath': coa_7, 'success': function (lgxi$) {
          if (v7f4a_ != '') _am74v['onSaveFile'](v7f4a_, xl$hg);a74mc != null && a74mc['runWith']([0x0]);
        }, 'fail': function ($qxj) {} });
    }, _am74v['onSaveFile'] = function (d690bk, b0s69k) {
      var x$gj = d690bk['split']('?')[0x0];_am74v['filesListObj'][x$gj] = { 'md5': b0s69k, 'readyUrl': d690bk }, _am74v['fs']['writeFile']({ 'filePath': _am74v['fileNativeDir'] + '/' + _am74v['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_am74v['filesListObj']), 'success': function (y_vf) {
          console['log']('写入测试测试成功：', y_vf);
        }, 'fail': function (k5db0) {
          console['log']('写入测试测试失败：', k5db0);
        } });
    }, _am74v['existDir'] = function (rzy4vf, bk0s6) {
      _am74v['fs']['mkdir']({ 'dirPath': rzy4vf, 'success': function (cmoa7p) {
          bk0s6 != null && bk0s6['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (y7fv_) {
          if (y7fv_['errMsg']['indexOf']('file already exists') != -0x1) _am74v['readSync'](_am74v['fileListName'], 'utf8', bk0s6);else bk0s6 != null && bk0s6['runWith']([0x1, y7fv_]);
        } });
    }, _am74v['readSync'] = function (xj$gti, lyhtr, v4_ma, q3jsu) {
      lyhtr === void 0x0 && (lyhtr = 'ascill'), q3jsu === void 0x0 && (q3jsu = '');var uqns93 = _am74v['getFileNativePath'](xj$gti),
          yhrzt;try {
        yhrzt = _am74v['fs']['readFileSync'](uqns93), v4_ma != null && v4_ma['runWith']([0x0, { 'data': yhrzt }]);
      } catch (b50wd) {
        v4_ma != null && v4_ma['runWith']([0x1]);
      }
    }, _am74v['readCache'] = function () {}, _am74v['writeCache'] = function (s06kb9) {
      var fyrvhz = readyUrl['split']('?')[0x0];_am74v['filesListObj'][fyrvhz] = { 'md5': md5Name, 'readyUrl': readyUrl }, _am74v['fs']['writeFile']({ 'filePath': _am74v['fileNativeDir'] + '/' + _am74v['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_am74v['filesListObj']), 'success': function (d05w8b) {}, 'fail': function (ukqn9) {} });
    }, _am74v['setNativeFileDir'] = function (sjn3q) {
      _am74v['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + sjn3q;
    }, _am74v['filesListObj'] = {}, _am74v['fileNativeDir'] = null, _am74v['fileListName'] = 'layaairfiles.txt', _am74v['ziyuFileData'] = {}, zv_yf4(_am74v, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _am74v;
  }(d5k60b),
      a_m74c = function (ui3nq) {
    function buks6() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], buks6['__super']['call'](this), this['_sound'] = buks6['_createSound'](), this['_chanell'] = new lrxhtg(this['_sound']);
    }$ij3n(buks6, 'laya.wx.mini.MiniSound', ui3nq);var _7fva = buks6['prototype'];return _7fva['load'] = function (yf7v4) {
      var k9b6us = this;yf7v4 = n3q9us['formatURL'](yf7v4), this['url'] = yf7v4;if (buks6['_audioCache'][yf7v4]) {
        this['event']('complete');return;
      }function m_7c4a() {
        if (buks6['_null'] != undefined) k9b6us['_sound']['onCanplay'](buks6['_null']), k9b6us['_sound']['onError'](buks6['_null']);else try {
          k9b6us['_sound']['onCanplay'](null), k9b6us['_sound']['onError'](null), buks6['_null'] = null;
        } catch (ju3ns) {
          console['warn']('[wxmini] _clearSound:' + ju3ns), k9b6us['_sound']['onCanplay'](j3nqu), k9b6us['_sound']['onError'](j3nqu), buks6['_null'] = j3nqu;
        }
      }function yrhfl() {
        tgxij['loaded'] = !![], tgxij['event']('complete'), buks6['_audioCache'][tgxij['url']] = tgxij;
      }function rghtx(nuqsj) {
        console['error']('errCode=' + nuqsj['errCode'] + '  errMsg=' + nuqsj['errMsg']), tgxij['event']('error');
      }function j3nqu() {}this['_sound']['onCanplay'](yrhfl), this['_sound']['onError'](rghtx), this['_sound']['src'] = yf7v4;var tgxij = this;
    }, _7fva['play'] = function (lzfhr, kqsn9u) {
      lzfhr === void 0x0 && (lzfhr = 0x0), kqsn9u === void 0x0 && (kqsn9u = 0x0);var $x3j, _moa7c;if (this['url'] == qksu9n['_tMusic']) {
        if (!buks6['_musicAudio']) buks6['_musicAudio'] = this['_sound'];$x3j = buks6['_musicAudio'], _moa7c = this['_chanell'];
      } else $x3j = this['_sound'], _moa7c = this['_chanell'];return $x3j['src'] = this['url'], $x3j['startTime'] = 0x0, _moa7c['isStopped'] && (_moa7c['url'] = this['url'], _moa7c['loops'] = kqsn9u, _moa7c['startTime'] = lzfhr, _moa7c['play'](), qksu9n['addChannel'](_moa7c)), _moa7c;
    }, _7fva['dispose'] = function () {
      var f_4 = buks6['_audioCache'][this['url']];f_4 && (f_4['src'] = '', delete buks6['_audioCache'][this['url']]);
    }, $xlgi(0x0, _7fva, 'duration', function () {
      return this['_sound']['duration'];
    }), buks6['_createSound'] = function () {
      buks6['_id']++;var yzf4_v = sn9q3['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return yzf4_v;
    }, buks6['_musicAudio'] = null, buks6['_id'] = 0x0, buks6['_audioCache'] = {}, buks6['_null'] = undefined, buks6;
  }(d5k60b),
      lrxhtg = function (yz4_) {
    function _74yf(yrhzlt) {
      this['_audio'] = null, this['_onEnd'] = null, _74yf['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = yrhzlt, this['_onEnd'] = d1w852['bind'](this['__onEnd'], this), yrhzlt['onEnded'](this['_onEnd']);
    }$ij3n(_74yf, 'laya.wx.mini.MiniSoundChannel', yz4_);var mae = _74yf['prototype'];return mae['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (kn96u['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, mae['__onNull'] = function () {}, mae['play'] = function () {
      this['isStopped'] = ![], qksu9n['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, mae['stop'] = function () {
      this['isStopped'] = !![], qksu9n['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, mae['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, mae['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], qksu9n['addChannel'](this), this['_audio']['play']();
    }, $xlgi(0x0, mae, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), $xlgi(0x0, mae, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), $xlgi(0x0, mae, 'volume', function () {
      return 0x1;
    }, function (d25w18) {}), _74yf['_null'] = undefined, _74yf;
  }(vam47_),
      dbk65 = function () {
    function yhzrlt() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = sn9q3['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }$ij3n(yhzrlt, 'laya.wx.mini.MiniVideo');var frzy4v = yhzrlt['prototype'];return frzy4v['on'] = function (tly, htgxl, s06k9b) {
      if (tly == 'loadedmetadata') this['onPlayFunc'] = s06k9b['bind'](htgxl), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else tly == 'ended' && (this['onEndedFunC'] = s06k9b['bind'](htgxl), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, frzy4v['onTimeUpdateFunc'] = function (a_m4v7) {
      this['position'] = a_m4v7['position'], this['_duration'] = a_m4v7['duration'];
    }, frzy4v['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, frzy4v['onended'] = function (amocpe, moc7pa) {
      this['onEndedFunC'] = moc7pa['bind'](amocpe), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, frzy4v['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, frzy4v['off'] = function (_vyz, k69b0d, fy4zvr) {
      if (_vyz == 'loadedmetadata') this['onPlayFunc'] = fy4zvr['bind'](k69b0d), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else _vyz == 'ended' && (this['onEndedFunC'] = fy4zvr['bind'](k69b0d), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, frzy4v['load'] = function (zltghr) {
      if (!this['videoElement']) return;this['videoElement']['src'] = zltghr;
    }, frzy4v['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, frzy4v['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, frzy4v['size'] = function (_m47ac, usjnq) {
      if (!this['videoElement']) return;this['videoElement']['width'] = _m47ac, this['videoElement']['height'] = usjnq;
    }, frzy4v['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, frzy4v['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, $xlgi(0x0, frzy4v, 'duration', function () {
      return this['_duration'];
    }), $xlgi(0x0, frzy4v, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (_v74fy) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = _v74fy;
    }), $xlgi(0x0, frzy4v, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), $xlgi(0x0, frzy4v, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), $xlgi(0x0, frzy4v, 'ended', function () {
      return this['videoend'];
    }), $xlgi(0x0, frzy4v, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (zhyf) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = zhyf;
    }), $xlgi(0x0, frzy4v, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (xthlg$) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = xthlg$;
    }), $xlgi(0x0, frzy4v, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function ($xjiq3) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = $xjiq3;
    }), $xlgi(0x0, frzy4v, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), $xlgi(0x0, frzy4v, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (jt$igx) {
      if (!this['videoElement']) return;this['videoElement']['x'] = jt$igx;
    }), $xlgi(0x0, frzy4v, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (c74_am) {
      if (!this['videoElement']) return;this['videoElement']['y'] = c74_am;
    }), $xlgi(0x0, frzy4v, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), $xlgi(0x0, frzy4v, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (ht$lgx) {
      if (!this['videoElement']) return;this['videoElement']['src'] = ht$lgx;
    }), $xlgi(0x0, frzy4v, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (maco7) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = maco7;
    }), $xlgi(0x0, frzy4v, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (hrgzlt) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = hrgzlt;
    }), yhzrlt;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var unj3q in Laya) {
    var gltxr = Laya[unj3q];gltxr && gltxr['__isclass'] && (exports[unj3q] = gltxr);
  }
});