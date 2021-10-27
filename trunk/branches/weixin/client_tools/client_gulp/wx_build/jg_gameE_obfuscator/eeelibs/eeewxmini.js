var b = wx.$e;
(function (window, document, nq8ue) {
  var fj95z = nq8ue['un'],
      wv1g$2 = nq8ue['uns'],
      vr0o$a = nq8ue['static'],
      zmx796 = nq8ue['class'],
      suq8ne = nq8ue['getset'],
      lq8und = nq8ue['__newvec'],
      xw2 = laya['utils']['Browser'],
      jf95kz = laya['events']['Event'],
      dpqhil = laya['events']['EventDispatcher'],
      lp = laya['resource']['HTMLImage'],
      ilqdh = laya['utils']['Handler'],
      zx17m6 = laya['display']['Input'],
      hdlqip = laya['net']['Loader'],
      i95kj = laya['maths']['Matrix'],
      $avr0w = laya['renders']['Render'],
      pqilhd = laya['utils']['RunDriver'],
      $avro0 = laya['media']['Sound'],
      pkiflh = laya['media']['SoundChannel'],
      qlduh = laya['media']['SoundManager'],
      pjk5if = laya['display']['Stage'],
      j57zm9 = laya['net']['URL'],
      ebs3 = laya['utils']['Utils'],
      _4stb3 = function () {
    function fpkhl() {}return zmx796(fpkhl, 'laya.wx.mini.MiniAdpter'), fpkhl['getJson'] = function (ust8e) {
      return JSON['parse'](ust8e);
    }, fpkhl['init'] = function (fdhli, kf5ij9) {
      fdhli === void 0x0 && (fdhli = ![]), kf5ij9 === void 0x0 && (kf5ij9 = ![]);if (fpkhl['_inited']) return;fpkhl['window'] = window;if (fpkhl['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;fpkhl['_inited'] = !![], fpkhl['isZiYu'] = kf5ij9, fpkhl['isPosMsgYu'] = fdhli, fpkhl['EnvConfig'] = {}, !fpkhl['isZiYu'] && (jkfhpi['setNativeFileDir']('/layaairGame'), jkfhpi['existDir'](jkfhpi['fileNativeDir'], ilqdh['create'](fpkhl, fpkhl['onMkdirCallBack']))), fpkhl['window']['focus'] = function () {}, nq8ue['getUrlPath'] = function () {}, fpkhl['window']['logtime'] = function (pifkl) {}, fpkhl['window']['alertTimeLog'] = function (lhiq) {}, fpkhl['window']['resetShareInfo'] = function () {}, fpkhl['window']['CanvasRenderingContext2D'] = function () {}, fpkhl['window']['CanvasRenderingContext2D']['prototype'] = fpkhl['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], fpkhl['window']['document']['body']['appendChild'] = function () {}, fpkhl['EnvConfig']['pixelRatioInt'] = 0x0, pqilhd['getPixelRatio'] = fpkhl['pixelRatio'], fpkhl['_preCreateElement'] = xw2['createElement'], xw2['createElement'] = fpkhl['createElement'], pqilhd['createShaderCondition'] = fpkhl['createShaderCondition'], ebs3['parseXMLFromString'] = fpkhl['parseXMLFromString'], zx17m6['_createInputElement'] = pqlidh['_createInputElement'], fpkhl['EnvConfig']['load'] = hdlqip['prototype']['load'], hdlqip['prototype']['load'] = sqen8u['prototype']['load'], fpkhl['isZiYu'] && fdhli && wx['onMessage'](function ($wr20) {
        $wr20['isLoad'] && (jkfhpi['ziyuFileData'][$wr20['url']] = $wr20['data']);
      });
    }, fpkhl['onMkdirCallBack'] = function (qdhilp, f5j9) {
      if (!qdhilp) jkfhpi['filesListObj'] = JSON['parse'](f5j9['data']);
    }, fpkhl['pixelRatio'] = function () {
      if (!fpkhl['EnvConfig']['pixelRatioInt']) try {
        var kz9fj = wx['getSystemInfoSync']();return fpkhl['EnvConfig']['pixelRatioInt'] = kz9fj['pixelRatio'], kz9fj = kz9fj, kz9fj['pixelRatio'];
      } catch (f9ijk) {}return fpkhl['EnvConfig']['pixelRatioInt'];
    }, fpkhl['createElement'] = function (v0rao$) {
      if (v0rao$ == 'canvas') {
        var qilhdp;return fpkhl['idx'] == 0x1 ? fpkhl['isZiYu'] ? (qilhdp = sharedCanvas, qilhdp['style'] = {}) : qilhdp = window['canvas'] : qilhdp = window['wx']['createCanvas'](), fpkhl['idx']++, qilhdp;
      } else {
        if (v0rao$ == 'textarea' || v0rao$ == 'input') return fpkhl['onCreateInput'](v0rao$);else {
          if (v0rao$ == 'div') {
            var en8us4 = fpkhl['_preCreateElement'](v0rao$);return en8us4['contains'] = function (neu8dq) {
              return null;
            }, en8us4['removeChild'] = function (ijp5) {}, en8us4;
          } else return fpkhl['_preCreateElement'](v0rao$);
        }
      }
    }, fpkhl['onCreateInput'] = function (rwa0v) {
      var uden8 = fpkhl['_preCreateElement'](rwa0v);return uden8['focus'] = pqlidh['wxinputFocus'], uden8['blur'] = pqlidh['wxinputblur'], uden8['style'] = {}, uden8['value'] = 0x0, uden8['parentElement'] = {}, uden8['placeholder'] = {}, uden8['type'] = {}, uden8['setColor'] = function (plhif) {}, uden8['setType'] = function (esb43) {}, uden8['setFontFace'] = function (u8qnd) {}, uden8['addEventListener'] = function (e843) {}, uden8['contains'] = function (qdhpl) {
        return null;
      }, uden8['removeChild'] = function (bs_4) {}, uden8;
    }, fpkhl['createShaderCondition'] = function (aw0vr$) {
      var lqhu = this,
          ts34_b = function () {
        var jk5ifp = aw0vr$;return lqhu[aw0vr$['replace']('this.', '')];
      };return ts34_b;
    }, fpkhl['EnvConfig'] = null, fpkhl['window'] = null, fpkhl['_preCreateElement'] = null, fpkhl['_inited'] = ![], fpkhl['wxRequest'] = null, fpkhl['systemInfo'] = null, fpkhl['version'] = '0.0.1', fpkhl['isZiYu'] = ![], fpkhl['isPosMsgYu'] = ![], fpkhl['parseXMLFromString'] = function (k5ij9) {
      var hlpnd, ensu4;k5ij9 = k5ij9['replace'](/>\s+</g, '><');try {
        hlpnd = new window['Parser']['DOMParser']()['parseFromString'](k5ij9, 'text/xml');
      } catch (v0$gw2) {
        throw '需要引入xml解析库文件';
      }return hlpnd;
    }, fpkhl['idx'] = 0x1, fpkhl;
  }(),
      wa$0v = function () {
    function xm796() {}zmx796(xm796, 'laya.wx.mini.MiniImage');var fidlph = xm796['prototype'];return fidlph['_loadImage'] = function (iflpd) {
      var dnu = this,
          t43s8 = ![];iflpd['indexOf']('layaNativeDir/') == -0x1 && (t43s8 = !![], iflpd = j57zm9['formatURL'](iflpd));if (!jkfhpi['getFileInfo'](iflpd)) {
        if (iflpd['indexOf']('http://') != -0x1 || iflpd['indexOf']('https://') != -0x1) jkfhpi['downImg'](iflpd, new ilqdh(xm796, xm796['onDownImgCallBack'], [iflpd, dnu]), iflpd);else xm796['onCreateImage'](iflpd, dnu, !![]);
      } else xm796['onCreateImage'](iflpd, dnu, !t43s8);
    }, xm796['onDownImgCallBack'] = function (zm7j95, dul8nq, z795mj) {
      if (!z795mj) xm796['onCreateImage'](zm7j95, dul8nq);else dul8nq['onError'](null);
    }, xm796['onCreateImage'] = function ($0w2v, n8uedq, pdnh) {
      pdnh === void 0x0 && (pdnh = ![]);var bst;if (!pdnh) {
        var u8qdnl = jkfhpi['getFileInfo']($0w2v),
            $g02 = u8qdnl['md5'];bst = jkfhpi['getFileNativePath']($g02);
      } else bst = $0w2v;if (n8uedq['imgCache'] == null) n8uedq['imgCache'] = {};var ijpkhf;function x579z() {
        ijpkhf['onload'] = null, ijpkhf['onerror'] = null, delete n8uedq['imgCache'][$0w2v];
      };var kj79z = function () {
        x579z(), n8uedq['onLoaded'](ijpkhf);
      },
          ikf59j = function () {
        x579z(), n8uedq['event']('error', 'Load image failed');
      };n8uedq['_type'] == 'nativeimage' ? (ijpkhf = new xw2['window']['Image'](), ijpkhf['crossOrigin'] = '', ijpkhf['onload'] = kj79z, ijpkhf['onerror'] = ikf59j, ijpkhf['src'] = bst, n8uedq['imgCache'][$0w2v] = ijpkhf) : new lp['create'](bst, { 'onload': kj79z, 'onerror': ikf59j, 'onCreate': function ($0o) {
          ijpkhf = $0o, n8uedq['imgCache'][$0w2v] = $0o;
        } });
    }, xm796;
  }(),
      pqlidh = function () {
    function s3te4() {}return zmx796(s3te4, 'laya.wx.mini.MiniInput'), s3te4['_createInputElement'] = function () {
      zx17m6['_initInput'](zx17m6['area'] = xw2['createElement']('textarea')), zx17m6['_initInput'](zx17m6['input'] = xw2['createElement']('input')), zx17m6['inputContainer'] = xw2['createElement']('div'), zx17m6['inputContainer']['style']['position'] = 'absolute', zx17m6['inputContainer']['style']['zIndex'] = 0x186a0, xw2['container']['appendChild'](zx17m6['inputContainer']), zx17m6['inputContainer']['setPos'] = function (m1g67, w62v1g) {
        zx17m6['inputContainer']['style']['left'] = m1g67 + 'px', zx17m6['inputContainer']['style']['top'] = w62v1g + 'px';
      }, nq8ue['stage']['on']('resize', null, s3te4['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (dliqhp) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), qlduh['_soundClass'] = bs43t, qlduh['_musicClass'] = bs43t;
    }, s3te4['_onStageResize'] = function () {
      var gm621x = nq8ue['stage']['_canvasTransform']['identity']();gm621x['scale'](xw2['width'] / $avr0w['canvas']['width'] / pqilhd['getPixelRatio'](), xw2['height'] / $avr0w['canvas']['height'] / pqilhd['getPixelRatio']());
    }, s3te4['wxinputFocus'] = function (s_3t4) {
      var $g20vw = zx17m6['inputElement']['target'];if ($g20vw && !$g20vw['editable']) return;_4stb3['window']['wx']['offKeyboardConfirm'](), _4stb3['window']['wx']['offKeyboardInput'](), _4stb3['window']['wx']['showKeyboard']({ 'defaultValue': $g20vw['text'], 'maxLength': $g20vw['maxChars'], 'multiple': $g20vw['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (sbt3e) {}, 'fail': function (stb_3) {} }), _4stb3['window']['wx']['onKeyboardConfirm'](function (g216vw) {
        var i5jk9f = g216vw ? g216vw['value'] : '';$g20vw['text'] = i5jk9f, $g20vw['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _4stb3['window']['wx']['onKeyboardInput'](function (hlf) {
        var khjpi = hlf ? hlf['value'] : '';if (!$g20vw['multiline']) {
          if (khjpi['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }$g20vw['text'] = khjpi, $g20vw['event']('input');
      });
    }, s3te4['inputEnter'] = function () {
      zx17m6['inputElement']['target']['focus'] = ![];
    }, s3te4['wxinputblur'] = function () {
      s3te4['hideKeyboard']();
    }, s3te4['hideKeyboard'] = function () {
      _4stb3['window']['wx']['offKeyboardConfirm'](), _4stb3['window']['wx']['offKeyboardInput'](), _4stb3['window']['wx']['hideKeyboard']({ 'success': function (ue84s) {
          console['log']('隐藏键盘');
        }, 'fail': function (dhluqn) {
          console['log']('隐藏键盘出错:' + (dhluqn ? dhluqn['errMsg'] : ''));
        } });
    }, s3te4;
  }(),
      sqen8u = function () {
    function plkfih() {}zmx796(plkfih, 'laya.wx.mini.MiniLoader');var _yb34 = plkfih['prototype'];return _yb34['load'] = function (ifk9, bt3_s4, f5jpki, vra$0w, nlud8q) {
      f5jpki === void 0x0 && (f5jpki = !![]), nlud8q === void 0x0 && (nlud8q = ![]);var j9zfk5 = this;j9zfk5['_url'] = ifk9;if (ifk9['indexOf']('data:image') === 0x0) j9zfk5['_type'] = bt3_s4 = 'image';else j9zfk5['_type'] = bt3_s4 || (bt3_s4 = j9zfk5['getTypeFromUrl'](ifk9));j9zfk5['_cache'] = f5jpki, j9zfk5['_data'] = null;var iplk = 'ascii';if (ifk9['indexOf']('.fnt') != -0x1) iplk = 'utf8';else bt3_s4 == 'arraybuffer' && (iplk = '');;var tyb34 = ebs3['getFileExtension'](ifk9);if (plkfih['_fileTypeArr']['indexOf'](tyb34) != -0x1) _4stb3['EnvConfig']['load']['call'](this, ifk9, bt3_s4, f5jpki, vra$0w, nlud8q);else {
        if (!jkfhpi['getFileInfo'](ifk9)) {
          if (ifk9['indexOf']('layaNativeDir/') != -0x1) {
            if (_4stb3['isZiYu']) {
              var lhqnp = jkfhpi['ziyuFileData'][ifk9];j9zfk5['onLoaded'](lhqnp);return;
            } else {
              cosnole['log']('read read'), jkfhpi['read'](ifk9, iplk, new ilqdh(plkfih, plkfih['onReadNativeCallBack'], [iplk, ifk9, bt3_s4, f5jpki, vra$0w, nlud8q, j9zfk5]));return;
            }
          }if (j57zm9['rootPath'] == '') var t_3b4y = ifk9;else t_3b4y = ifk9['split'](j57zm9['rootPath'])[0x0];ifk9['indexOf']('http://') != -0x1 || ifk9['indexOf']('https://') != -0x1 ? _4stb3['EnvConfig']['load']['call'](j9zfk5, ifk9, bt3_s4, f5jpki, vra$0w, nlud8q) : jkfhpi['readFile'](t_3b4y, iplk, new ilqdh(plkfih, plkfih['onReadNativeCallBack'], [iplk, ifk9, bt3_s4, f5jpki, vra$0w, nlud8q, j9zfk5]), ifk9);
        } else _4stb3['EnvConfig']['load']['call'](this, ifk9, bt3_s4, f5jpki, vra$0w, nlud8q);
      }
    }, _yb34['resMgrLoad'] = function (ihpfdl, $2g0w, g2vw61, pjhfik, w$r20, mx617z, w$20) {
      g2vw61 === void 0x0 && (g2vw61 = 0x0), pjhfik === void 0x0 && (pjhfik = ![]), w$r20 === void 0x0 && (w$r20 = ![]), mx617z === void 0x0 && (mx617z = 0x0), w$20 === void 0x0 && (w$20 = 0x3), ihpfdl['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ihpfdl), _4stb3['EnvConfig']['resMgrLoad'](ihpfdl, (idqph, nqu8d, phfdil) => {
        plkfih['prototype']['resMgrLoadCallBack'](idqph, nqu8d, phfdil, $2g0w);
      }, g2vw61, pjhfik, w$r20, mx617z, w$20);
    }, _yb34['resMgrLoadCallBack'] = function (s8uqn, lpkhf, ns48eu, $v0g2) {
      console['log']('buff:::', s8uqn, ns48eu, jkfhpi['fileNativeDir'] + '///' + jkfhpi['fileListName']), $v0g2(s8uqn, lpkhf, ns48eu);
    }, _yb34['clearRes'] = function (kijfp, x6mz9) {
      x6mz9 === void 0x0 && (x6mz9 = ![]);var fkilph = this;fkilph['clearRes'](kijfp, x6mz9);var v0gw2$ = jkfhpi['getFileInfo'](kijfp);if (v0gw2$ && (kijfp['indexOf']('http://') != -0x1 || kijfp['indexOf']('https://') != -0x1)) {
        var ao$vr0 = v0gw2$['md5'],
            dqh = jkfhpi['getFileNativePath'](ao$vr0);jkfhpi['remove'](dqh);
      }
    }, plkfih['onReadNativeCallBack'] = function (a$r0v, gxm1, a0$or, fphji, kfji59, dlqp, r2$w0v, m12g6x, udnqh) {
      fphji === void 0x0 && (fphji = !![]), dlqp === void 0x0 && (dlqp = ![]), m12g6x === void 0x0 && (m12g6x = 0x0);if (!m12g6x) {
        var l8u;if (a0$or == 'json' || a0$or == 'atlas') l8u = _4stb3['getJson'](udnqh['data']);else a0$or == 'xml' ? l8u = ebs3['parseXMLFromString'](udnqh['data']) : l8u = udnqh['data'];r2$w0v['onLoaded'](l8u), !_4stb3['isZiYu'] && _4stb3['isPosMsgYu'] && a0$or != 'arraybuffer' && wx['postMessage']({ 'url': gxm1, 'data': l8u, 'isLoad': !![] });
      } else m12g6x == 0x1 && _4stb3['EnvConfig']['load']['call'](r2$w0v, gxm1, a0$or, fphji, kfji59, dlqp);
    }, vr0o$a(plkfih, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), plkfih;
  }(),
      jkfhpi = function (eb34st) {
    function wvg216() {
      wvg216['__super']['call'](this);;
    }return zmx796(wvg216, 'laya.wx.mini.MiniFileMgr', eb34st), wvg216['isLoadFile'] = function (q8uns) {
      return wvg216['_fileTypeArr']['indexOf'](q8uns) != -0x1 ? !![] : ![];
    }, wvg216['getFileInfo'] = function (qeu8dn) {
      var jk7z = qeu8dn['split']('?')[0x0],
          hkifpj = wvg216['filesListObj'][jk7z];if (hkifpj == null) return null;else return hkifpj;return null;
    }, wvg216['onFileUpdate'] = function (tsb_43, jpkh) {
      var jfz95 = tsb_43['split']('/'),
          j75z9m = jfz95[jfz95['length'] - 0x1],
          va0o$r = wvg216['getFileInfo'](jpkh);if (va0o$r == null) wvg216['onSaveFile'](jpkh, j75z9m);else {
        if (va0o$r['readyUrl'] != jpkh) wvg216['remove'](j75z9m, jpkh);
      }
    }, wvg216['exits'] = function (xg1m2, wg6v21) {
      var r$vwa0 = wvg216['getFileNativePath'](xg1m2);wvg216['fs']['getFileInfo']({ 'filePath': r$vwa0, 'success': function (pflkh) {
          wg6v21 != null && wg6v21['runWith']([0x0, pflkh]);
        }, 'fail': function (ts8eu) {
          wg6v21 != null && wg6v21['runWith']([0x1, ts8eu]);
        } });
    }, wvg216['read'] = function (kj9i, dluqnh, mz69x7, hnduql) {
      dluqnh === void 0x0 && (dluqnh = 'ascill'), hnduql === void 0x0 && (hnduql = '');var lquhn;hnduql != '' ? lquhn = wvg216['getFileNativePath'](kj9i) : lquhn = kj9i, wvg216['fs']['readFile']({ 'filePath': lquhn, 'encoding': dluqnh, 'success': function (es43bt) {
          mz69x7 != null && mz69x7['runWith']([0x0, es43bt]);
        }, 'fail': function (wv61g) {
          if (wv61g && hnduql != '') wvg216['down'](hnduql, dluqnh, mz69x7, hnduql);else mz69x7 != null && mz69x7['runWith']([0x1]);
        } });
    }, wvg216['readNativeFile'] = function (sebt3, xz1m7) {
      wvg216['fs']['readFile']({ 'filePath': sebt3, 'encoding': '', 'success': function (hlkfi) {
          xz1m7 != null && xz1m7['runWith']([0x0]);
        }, 'fail': function ($v2wg1) {
          xz1m7 != null && xz1m7['runWith']([0x1]);
        } });
    }, wvg216['down'] = function (gm26, nqdlp, ildqp, dfihl) {
      nqdlp === void 0x0 && (nqdlp = 'ascill'), dfihl === void 0x0 && (dfihl = '');var wg20v = wvg216['getFileNativePath'](dfihl),
          i5jf9 = wvg216['wxdown']({ 'url': gm26, 'filePath': wg20v, 'success': function (xmg167) {
          if (xmg167['statusCode'] === 0xc8) wvg216['readFile'](xmg167['filePath'], nqdlp, ildqp, dfihl);
        }, 'fail': function (v1g26) {
          ildqp != null && ildqp['runWith']([0x1, v1g26]);
        } });i5jf9['onProgressUpdate'](function (hdpf) {
        ildqp != null && ildqp['runWith']([0x2, hdpf['progress']]);
      });
    }, wvg216['readFile'] = function (p5fki, u8ns4e, t3s_4b, dlphqn) {
      u8ns4e === void 0x0 && (u8ns4e = 'ascill'), dlphqn === void 0x0 && (dlphqn = ''), wvg216['fs']['readFile']({ 'filePath': p5fki, 'encoding': u8ns4e, 'success': function (i5j9fk) {
          if (p5fki['indexOf']('http://') != -0x1 || p5fki['indexOf']('https://') != -0x1) wvg216['onFileUpdate'](p5fki, dlphqn);t3s_4b != null && t3s_4b['runWith']([0x0, i5j9fk]);
        }, 'fail': function (zk57) {
          if (zk57) t3s_4b != null && t3s_4b['runWith']([0x1, zk57]);
        } });
    }, wvg216['downImg'] = function (kpilfh, sbte43, fpk5j) {
      fpk5j === void 0x0 && (fpk5j = '');var j5if = wvg216['wxdown']({ 'url': kpilfh, 'success': function (s4eu) {
          s4eu['statusCode'] === 0xc8 && wvg216['copyFile'](s4eu['tempFilePath'], fpk5j, sbte43);
        }, 'fail': function (g62x1m) {
          sbte43 != null && sbte43['runWith']([0x1, g62x1m]);
        } });
    }, wvg216['copyFile'] = function (piflkh, zx97, z7m59x) {
      var w1gv2$ = piflkh['split']('/'),
          phfdli = w1gv2$[w1gv2$['length'] - 0x1],
          fjhikp = zx97['split']('?')[0x0],
          nuqs = wvg216['getFileInfo'](zx97),
          pjhfi = wvg216['getFileNativePath'](phfdli);wvg216['fs']['copyFile']({ 'srcPath': piflkh, 'destPath': pjhfi, 'success': function (jfk9i) {
          if (!nuqs) wvg216['onSaveFile'](zx97, phfdli), z7m59x != null && z7m59x['runWith']([0x0]);else {
            if (nuqs['readyUrl'] != zx97) wvg216['remove'](phfdli, zx97, z7m59x);
          }
        }, 'fail': function (fplkih) {
          z7m59x != null && z7m59x['runWith']([0x1, fplkih]);
        } });
    }, wvg216['getFileNativePath'] = function (k5fj9z) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + k5fj9z;
    }, wvg216['remove'] = function (w6xg2, r$0aov, z769x) {
      r$0aov === void 0x0 && (r$0aov = '');var sn4eu8 = wvg216['getFileInfo'](r$0aov),
          jhfkip = wvg216['getFileNativePath'](sn4eu8['md5']);nq8ue['loader']['clearRes'](sn4eu8['readyUrl']), wvg216['fs']['unlink']({ 'filePath': jhfkip, 'success': function (nhqlpd) {
          if (r$0aov != '') wvg216['onSaveFile'](r$0aov, w6xg2);z769x != null && z769x['runWith']([0x0]);
        }, 'fail': function (y4b3) {} });
    }, wvg216['onSaveFile'] = function (zm7x59, un8ld) {
      var qlnuh = zm7x59['split']('?')[0x0];wvg216['filesListObj'][qlnuh] = { 'md5': un8ld, 'readyUrl': zm7x59 }, wvg216['fs']['writeFile']({ 'filePath': wvg216['fileNativeDir'] + '/' + wvg216['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](wvg216['filesListObj']), 'success': function (gx126w) {
          console['log']('写入测试测试成功：', gx126w);
        }, 'fail': function (flhki) {
          console['log']('写入测试测试失败：', flhki);
        } });
    }, wvg216['existDir'] = function (lhipqd, ov0ra) {
      wvg216['fs']['mkdir']({ 'dirPath': lhipqd, 'success': function (vo$r) {
          ov0ra != null && ov0ra['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function ($wrva) {
          if ($wrva['errMsg']['indexOf']('file already exists') != -0x1) wvg216['readSync'](wvg216['fileListName'], 'utf8', ov0ra);else ov0ra != null && ov0ra['runWith']([0x1, $wrva]);
        } });
    }, wvg216['readSync'] = function ($gw20v, x2w, gx621, eb4s3t) {
      x2w === void 0x0 && (x2w = 'ascill'), eb4s3t === void 0x0 && (eb4s3t = '');var mxg67 = wvg216['getFileNativePath']($gw20v),
          vra0$;try {
        vra0$ = wvg216['fs']['readFileSync'](mxg67), gx621 != null && gx621['runWith']([0x0, { 'data': vra0$ }]);
      } catch (fz59kj) {
        gx621 != null && gx621['runWith']([0x1]);
      }
    }, wvg216['readCache'] = function () {}, wvg216['writeCache'] = function (m97z5x) {
      var eusqn8 = readyUrl['split']('?')[0x0];wvg216['filesListObj'][eusqn8] = { 'md5': md5Name, 'readyUrl': readyUrl }, wvg216['fs']['writeFile']({ 'filePath': wvg216['fileNativeDir'] + '/' + wvg216['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](wvg216['filesListObj']), 'success': function (u8nq) {}, 'fail': function (ns84) {} });
    }, wvg216['setNativeFileDir'] = function (mg612x) {
      wvg216['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + mg612x;
    }, wvg216['filesListObj'] = {}, wvg216['fileNativeDir'] = null, wvg216['fileListName'] = 'layaairfiles.txt', wvg216['ziyuFileData'] = {}, vr0o$a(wvg216, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), wvg216;
  }(dpqhil),
      bs43t = function (mg21) {
    function nhldqp() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], nhldqp['__super']['call'](this), this['_sound'] = nhldqp['_createSound']();
    }zmx796(nhldqp, 'laya.wx.mini.MiniSound', mg21);var j79zk = nhldqp['prototype'];return j79zk['load'] = function (e8ts) {
      var se8q = this;e8ts = j57zm9['formatURL'](e8ts), this['url'] = e8ts;if (nhldqp['_audioCache'][e8ts]) {
        this['event']('complete');return;
      }function z5mj9() {
        if (nhldqp['_null'] != undefined) se8q['_sound']['onCanplay'](nhldqp['_null']), se8q['_sound']['onError'](nhldqp['_null']);else try {
          se8q['_sound']['onCanplay'](null), se8q['_sound']['onError'](null), nhldqp['_null'] = null;
        } catch (w1gv$2) {
          console['warn']('[wxmini] _clearSound:' + w1gv$2), se8q['_sound']['onCanplay'](dphliq), se8q['_sound']['onError'](dphliq), nhldqp['_null'] = dphliq;
        }
      }function qn8es() {
        z5mj9(), z61m7['loaded'] = !![], z61m7['event']('complete'), nhldqp['_audioCache'][z61m7['url']] = z61m7;
      }function fjz9k(z6xm97) {
        console['error']('errCode=' + z6xm97['errCode'] + '  errMsg=' + z6xm97['errMsg']), z5mj9(), z61m7['event']('error');
      }function dphliq() {}this['_sound']['onCanplay'](qn8es), this['_sound']['onError'](fjz9k), this['_sound']['src'] = e8ts;var z61m7 = this;
    }, j79zk['play'] = function (kjifh, sn8que) {
      kjifh === void 0x0 && (kjifh = 0x0), sn8que === void 0x0 && (sn8que = 0x0);var x7mg61;if (this['url'] == qlduh['_tMusic']) {
        if (!nhldqp['_musicAudio']) nhldqp['_musicAudio'] = nhldqp['_createSound']();x7mg61 = nhldqp['_musicAudio'];
      } else x7mg61 = nhldqp['_createSound']();x7mg61['src'] = this['url'];var pdlqi = new $a0wr(x7mg61);return pdlqi['url'] = this['url'], pdlqi['loops'] = sn8que, pdlqi['startTime'] = kjifh, pdlqi['play'](), qlduh['addChannel'](pdlqi), pdlqi;
    }, j79zk['dispose'] = function () {
      var m7x96 = nhldqp['_audioCache'][this['url']];m7x96 && (m7x96['src'] = '', delete nhldqp['_audioCache'][this['url']]);
    }, suq8ne(0x0, j79zk, 'duration', function () {
      return this['_sound']['duration'];
    }), nhldqp['_createSound'] = function () {
      return nhldqp['_id']++, _4stb3['window']['wx']['createInnerAudioContext']();
    }, nhldqp['_musicAudio'] = null, nhldqp['_id'] = 0x0, nhldqp['_audioCache'] = {}, nhldqp['_null'] = undefined, nhldqp;
  }(dpqhil),
      $a0wr = function (g2) {
    function wv1g26(hdfpli) {
      this['_audio'] = null, this['_onEnd'] = null, wv1g26['__super']['call'](this), this['_audio'] = hdfpli, this['_onEnd'] = ebs3['bind'](this['__onEnd'], this), hdfpli['onEnded'](this['_onEnd']);
    }zmx796(wv1g26, 'laya.wx.mini.MiniSoundChannel', g2);var tby3_ = wv1g26['prototype'];return tby3_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (nq8ue['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, tby3_['__onNull'] = function () {}, tby3_['play'] = function () {
      this['isStopped'] = ![], qlduh['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, tby3_['stop'] = function () {
      this['isStopped'] = !![], qlduh['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (wv1g26['_null'] != undefined) this['_audio']['onEnded'](wv1g26['_null']);else try {
        this['_audio']['onEnded'](null), wv1g26['_null'] = null;
      } catch (va0o) {
        console['warn']('[wxmini] stop:' + va0o), this['_audio']['onEnded'](ebs3['bind'](this['__onNull'], this)), wv1g26['_null'] = ebs3['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, tby3_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, tby3_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], qlduh['addChannel'](this), this['_audio']['play']();
    }, suq8ne(0x0, tby3_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), suq8ne(0x0, tby3_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), suq8ne(0x0, tby3_, 'volume', function () {
      return 0x1;
    }, function (v1gw6) {}), wv1g26['_null'] = undefined, wv1g26;
  }(pkiflh);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var nlqpd in Laya) {
    var g17mx = Laya[nlqpd];g17mx && g17mx['__isclass'] && (exports[nlqpd] = g17mx);
  }
});