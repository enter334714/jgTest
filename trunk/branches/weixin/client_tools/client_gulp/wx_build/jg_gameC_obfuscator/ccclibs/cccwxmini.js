var p = wx.$h;
(function (window, document, ih$sk) {
  var i2fy = ih$sk['un'],
      yks1ih = ih$sk['uns'],
      az32v = ih$sk['static'],
      g_64b = ih$sk['class'],
      k$4_gb = ih$sk['getset'],
      pxwe8r = ih$sk['__newvec'],
      qnd = laya['utils']['Browser'],
      i1fya = laya['events']['Event'],
      b_6gm = laya['events']['EventDispatcher'],
      j37t9v = laya['resource']['HTMLImage'],
      gr8_m = laya['utils']['Handler'],
      kihs$y = laya['display']['Input'],
      t3z2av = laya['net']['Loader'],
      zat = laya['maths']['Matrix'],
      k_$bg = laya['renders']['Render'],
      _4b$hk = laya['utils']['RunDriver'],
      yiaf1 = laya['media']['Sound'],
      $4_bg = laya['media']['SoundChannel'],
      dq0oc = laya['media']['SoundManager'],
      ztvj39 = laya['display']['Stage'],
      mg_r = laya['net']['URL'],
      vzfa2 = laya['utils']['Utils'],
      k_gb4$ = function () {
    function on5() {}return g_64b(on5, 'laya.wx.mini.MiniAdpter'), on5['getJson'] = function (sy1ihf) {
      return JSON['parse'](sy1ihf);
    }, on5['init'] = function (tv39zj, docln5) {
      tv39zj === void 0x0 && (tv39zj = ![]), docln5 === void 0x0 && (docln5 = ![]);if (on5['_inited']) return;on5['window'] = window;if (on5['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;on5['_inited'] = !![], on5['isZiYu'] = docln5, on5['isPosMsgYu'] = tv39zj, on5['EnvConfig'] = {}, !on5['isZiYu'] && (mxwre8['setNativeFileDir']('/layaairGame'), mxwre8['existDir'](mxwre8['fileNativeDir'], gr8_m['create'](on5, on5['onMkdirCallBack']))), on5['window']['focus'] = function () {}, ih$sk['getUrlPath'] = function () {}, on5['window']['logtime'] = function (q90j37) {}, on5['window']['alertTimeLog'] = function (q90cj) {}, on5['window']['resetShareInfo'] = function () {}, on5['window']['CanvasRenderingContext2D'] = function () {}, on5['window']['CanvasRenderingContext2D']['prototype'] = on5['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], on5['window']['document']['body']['appendChild'] = function () {}, on5['EnvConfig']['pixelRatioInt'] = 0x0, _4b$hk['getPixelRatio'] = on5['pixelRatio'], on5['_preCreateElement'] = qnd['createElement'], qnd['createElement'] = on5['createElement'], _4b$hk['createShaderCondition'] = on5['createShaderCondition'], vzfa2['parseXMLFromString'] = on5['parseXMLFromString'], kihs$y['_createInputElement'] = rgem86['_createInputElement'], on5['EnvConfig']['load'] = t3z2av['prototype']['load'], t3z2av['prototype']['load'] = hb4k$s['prototype']['load'], on5['isZiYu'] && tv39zj && wx['onMessage'](function (gmr68e) {
        gmr68e['isLoad'] && (mxwre8['ziyuFileData'][gmr68e['url']] = gmr68e['data']);
      });
    }, on5['onMkdirCallBack'] = function ($yksi, cq5) {
      if (!$yksi) mxwre8['filesListObj'] = JSON['parse'](cq5['data']);
    }, on5['pixelRatio'] = function () {
      if (!on5['EnvConfig']['pixelRatioInt']) try {
        var lcon5 = wx['getSystemInfoSync']();return on5['EnvConfig']['pixelRatioInt'] = lcon5['pixelRatio'], lcon5 = lcon5, lcon5['pixelRatio'];
      } catch (_bhk4$) {}return on5['EnvConfig']['pixelRatioInt'];
    }, on5['createElement'] = function (bhk4) {
      if (bhk4 == 'canvas') {
        var kshiy$;return on5['idx'] == 0x1 ? on5['isZiYu'] ? (kshiy$ = sharedCanvas, kshiy$['style'] = {}) : kshiy$ = window['canvas'] : kshiy$ = window['wx']['createCanvas'](), on5['idx']++, kshiy$;
      } else {
        if (bhk4 == 'textarea' || bhk4 == 'input') return on5['onCreateInput'](bhk4);else {
          if (bhk4 == 'div') {
            var azt23v = on5['_preCreateElement'](bhk4);return azt23v['contains'] = function (hys$i) {
              return null;
            }, azt23v['removeChild'] = function (kb$ihs) {}, azt23v;
          } else return on5['_preCreateElement'](bhk4);
        }
      }
    }, on5['onCreateInput'] = function (af21vz) {
      var $iksy = on5['_preCreateElement'](af21vz);return $iksy['focus'] = rgem86['wxinputFocus'], $iksy['blur'] = rgem86['wxinputblur'], $iksy['style'] = {}, $iksy['value'] = 0x0, $iksy['parentElement'] = {}, $iksy['placeholder'] = {}, $iksy['type'] = {}, $iksy['setColor'] = function (j30q7) {}, $iksy['setType'] = function (mrg6_) {}, $iksy['setFontFace'] = function (s4hk$b) {}, $iksy['addEventListener'] = function (e8rpw) {}, $iksy['contains'] = function (ta9) {
        return null;
      }, $iksy['removeChild'] = function (q5on) {}, $iksy;
    }, on5['createShaderCondition'] = function (ky$ih) {
      var ai21y = this,
          zva2f1 = function () {
        var mg6_48 = ky$ih;return ai21y[ky$ih['replace']('this.', '')];
      };return zva2f1;
    }, on5['EnvConfig'] = null, on5['window'] = null, on5['_preCreateElement'] = null, on5['_inited'] = ![], on5['wxRequest'] = null, on5['systemInfo'] = null, on5['version'] = '0.0.1', on5['isZiYu'] = ![], on5['isPosMsgYu'] = ![], on5['parseXMLFromString'] = function (g4) {
      var dcn5ol, regm8;g4 = g4['replace'](/>\s+</g, '><');try {
        dcn5ol = new window['Parser']['DOMParser']()['parseFromString'](g4, 'text/xml');
      } catch (g6b4$) {
        throw '需要引入xml解析库文件';
      }return dcn5ol;
    }, on5['idx'] = 0x1, on5;
  }(),
      r68emg = function () {
    function v9jt7() {}g_64b(v9jt7, 'laya.wx.mini.MiniImage');var vtza23 = v9jt7['prototype'];return vtza23['_loadImage'] = function (k1hsi) {
      var zfat = this,
          gm64b_ = ![];k1hsi['indexOf']('layaNativeDir/') == -0x1 && (gm64b_ = !![], k1hsi = mg_r['formatURL'](k1hsi));if (!mxwre8['getFileInfo'](k1hsi)) {
        if (k1hsi['indexOf']('http://') != -0x1 || k1hsi['indexOf']('https://') != -0x1) mxwre8['downImg'](k1hsi, new gr8_m(v9jt7, v9jt7['onDownImgCallBack'], [k1hsi, zfat]), k1hsi);else v9jt7['onCreateImage'](k1hsi, zfat, !![]);
      } else v9jt7['onCreateImage'](k1hsi, zfat, !gm64b_);
    }, v9jt7['onDownImgCallBack'] = function ($4bhsk, hb_4$k, v2t3) {
      if (!v2t3) v9jt7['onCreateImage']($4bhsk, hb_4$k);else hb_4$k['onError'](null);
    }, v9jt7['onCreateImage'] = function (_b$g46, i$skb, dc0q) {
      dc0q === void 0x0 && (dc0q = ![]);var k_$4g;if (!dc0q) {
        var ys21i = mxwre8['getFileInfo'](_b$g46),
            b4_$6 = ys21i['md5'];k_$4g = mxwre8['getFileNativePath'](b4_$6);
      } else k_$4g = _b$g46;if (i$skb['imgCache'] == null) i$skb['imgCache'] = {};var jcq907;function j9307() {
        jcq907['onload'] = null, jcq907['onerror'] = null, delete i$skb['imgCache'][_b$g46];
      };var j7q0cd = function () {
        j9307(), i$skb['onLoaded'](jcq907);
      },
          k$hyis = function () {
        j9307(), i$skb['event']('error', 'Load image failed');
      };i$skb['_type'] == 'nativeimage' ? (jcq907 = new qnd['window']['Image'](), jcq907['crossOrigin'] = '', jcq907['onload'] = j7q0cd, jcq907['onerror'] = k$hyis, jcq907['src'] = k_$4g, i$skb['imgCache'][_b$g46] = jcq907) : new j37t9v['create'](k_$4g, { 'onload': j7q0cd, 'onerror': k$hyis, 'onCreate': function (cq70jd) {
          jcq907 = cq70jd, i$skb['imgCache'][_b$g46] = cq70jd;
        } });
    }, v9jt7;
  }(),
      rgem86 = function () {
    function _b$g() {}return g_64b(_b$g, 'laya.wx.mini.MiniInput'), _b$g['_createInputElement'] = function () {
      kihs$y['_initInput'](kihs$y['area'] = qnd['createElement']('textarea')), kihs$y['_initInput'](kihs$y['input'] = qnd['createElement']('input')), kihs$y['inputContainer'] = qnd['createElement']('div'), kihs$y['inputContainer']['style']['position'] = 'absolute', kihs$y['inputContainer']['style']['zIndex'] = 0x186a0, qnd['container']['appendChild'](kihs$y['inputContainer']), kihs$y['inputContainer']['setPos'] = function (a1zy2f, qoc) {
        kihs$y['inputContainer']['style']['left'] = a1zy2f + 'px', kihs$y['inputContainer']['style']['top'] = qoc + 'px';
      }, ih$sk['stage']['on']('resize', null, _b$g['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (j93q) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), dq0oc['_soundClass'] = qdon5, dq0oc['_musicClass'] = qdon5;
    }, _b$g['_onStageResize'] = function () {
      var odlcn5 = ih$sk['stage']['_canvasTransform']['identity']();odlcn5['scale'](qnd['width'] / k_$bg['canvas']['width'] / _4b$hk['getPixelRatio'](), qnd['height'] / k_$bg['canvas']['height'] / _4b$hk['getPixelRatio']());
    }, _b$g['wxinputFocus'] = function (jc70d) {
      var v1azf = kihs$y['inputElement']['target'];if (v1azf && !v1azf['editable']) return;k_gb4$['window']['wx']['offKeyboardConfirm'](), k_gb4$['window']['wx']['offKeyboardInput'](), k_gb4$['window']['wx']['showKeyboard']({ 'defaultValue': v1azf['text'], 'maxLength': v1azf['maxChars'], 'multiple': v1azf['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (d7qo0) {}, 'fail': function (i1) {} }), k_gb4$['window']['wx']['onKeyboardConfirm'](function (bs$hik) {
        var b$skhi = bs$hik ? bs$hik['value'] : '';v1azf['text'] = b$skhi, v1azf['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), k_gb4$['window']['wx']['onKeyboardInput'](function (qo07dc) {
        var at2zvf = qo07dc ? qo07dc['value'] : '';if (!v1azf['multiline']) {
          if (at2zvf['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }v1azf['text'] = at2zvf, v1azf['event']('input');
      });
    }, _b$g['inputEnter'] = function () {
      kihs$y['inputElement']['target']['focus'] = ![];
    }, _b$g['wxinputblur'] = function () {
      _b$g['hideKeyboard']();
    }, _b$g['hideKeyboard'] = function () {
      k_gb4$['window']['wx']['offKeyboardConfirm'](), k_gb4$['window']['wx']['offKeyboardInput'](), k_gb4$['window']['wx']['hideKeyboard']({ 'success': function (v97t3) {
          console['log']('隐藏键盘');
        }, 'fail': function (qn5c) {
          console['log']('隐藏键盘出错:' + (qn5c ? qn5c['errMsg'] : ''));
        } });
    }, _b$g;
  }(),
      hb4k$s = function () {
    function rexwp() {}g_64b(rexwp, 'laya.wx.mini.MiniLoader');var $hskyi = rexwp['prototype'];return $hskyi['load'] = function (ta32zv, a21zfy, mgr_86, _k$g4b, si1kyh) {
      mgr_86 === void 0x0 && (mgr_86 = !![]), si1kyh === void 0x0 && (si1kyh = ![]);var on5dl = this;on5dl['_url'] = ta32zv;if (ta32zv['indexOf']('data:image') === 0x0) on5dl['_type'] = a21zfy = 'image';else on5dl['_type'] = a21zfy || (a21zfy = on5dl['getTypeFromUrl'](ta32zv));on5dl['_cache'] = mgr_86, on5dl['_data'] = null;var vj3z = 'ascii';if (ta32zv['indexOf']('.fnt') != -0x1) vj3z = 'utf8';else a21zfy == 'arraybuffer' && (vj3z = '');;var fyz1a = vzfa2['getFileExtension'](ta32zv);if (rexwp['_fileTypeArr']['indexOf'](fyz1a) != -0x1) k_gb4$['EnvConfig']['load']['call'](this, ta32zv, a21zfy, mgr_86, _k$g4b, si1kyh);else {
        if (!mxwre8['getFileInfo'](ta32zv)) {
          if (ta32zv['indexOf']('layaNativeDir/') != -0x1) {
            if (k_gb4$['isZiYu']) {
              var sk$y = mxwre8['ziyuFileData'][ta32zv];on5dl['onLoaded'](sk$y);return;
            } else {
              cosnole['log']('read read'), mxwre8['read'](ta32zv, vj3z, new gr8_m(rexwp, rexwp['onReadNativeCallBack'], [vj3z, ta32zv, a21zfy, mgr_86, _k$g4b, si1kyh, on5dl]));return;
            }
          }if (mg_r['rootPath'] == '') var j03q7 = ta32zv;else j03q7 = ta32zv['split'](mg_r['rootPath'])[0x0];ta32zv['indexOf']('http://') != -0x1 || ta32zv['indexOf']('https://') != -0x1 ? k_gb4$['EnvConfig']['load']['call'](on5dl, ta32zv, a21zfy, mgr_86, _k$g4b, si1kyh) : mxwre8['readFile'](j03q7, vj3z, new gr8_m(rexwp, rexwp['onReadNativeCallBack'], [vj3z, ta32zv, a21zfy, mgr_86, _k$g4b, si1kyh, on5dl]), ta32zv);
        } else k_gb4$['EnvConfig']['load']['call'](this, ta32zv, a21zfy, mgr_86, _k$g4b, si1kyh);
      }
    }, $hskyi['resMgrLoad'] = function (on5qcd, vzf2at, cq0dj, h1kisy, zfa2y, f12syi, z9atv3) {
      cq0dj === void 0x0 && (cq0dj = 0x0), h1kisy === void 0x0 && (h1kisy = ![]), zfa2y === void 0x0 && (zfa2y = ![]), f12syi === void 0x0 && (f12syi = 0x0), z9atv3 === void 0x0 && (z9atv3 = 0x3), on5qcd['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', on5qcd), k_gb4$['EnvConfig']['resMgrLoad'](on5qcd, (sifh1y, lo5ncd, dcq7j0) => {
        rexwp['prototype']['resMgrLoadCallBack'](sifh1y, lo5ncd, dcq7j0, vzf2at);
      }, cq0dj, h1kisy, zfa2y, f12syi, z9atv3);
    }, $hskyi['resMgrLoadCallBack'] = function (ysi1kh, kb_$, mw, m_g46) {
      console['log']('buff:::', ysi1kh, mw, mxwre8['fileNativeDir'] + '///' + mxwre8['fileListName']), m_g46(ysi1kh, kb_$, mw);
    }, $hskyi['clearRes'] = function (j0t73, yfsh1i) {
      yfsh1i === void 0x0 && (yfsh1i = ![]);var iysf21 = this;iysf21['clearRes'](j0t73, yfsh1i);var fsyi12 = mxwre8['getFileInfo'](j0t73);if (fsyi12 && (j0t73['indexOf']('http://') != -0x1 || j0t73['indexOf']('https://') != -0x1)) {
        var q0cd7 = fsyi12['md5'],
            r8ewp = mxwre8['getFileNativePath'](q0cd7);mxwre8['remove'](r8ewp);
      }
    }, rexwp['onReadNativeCallBack'] = function (i$, vztf2, khy1s, s4hbk, a93zv, s$bh4, jv3t97, e8pxr, fy1a2z) {
      s4hbk === void 0x0 && (s4hbk = !![]), s$bh4 === void 0x0 && (s$bh4 = ![]), e8pxr === void 0x0 && (e8pxr = 0x0);if (!e8pxr) {
        var k$bsih;if (khy1s == 'json' || khy1s == 'atlas') k$bsih = k_gb4$['getJson'](fy1a2z['data']);else khy1s == 'xml' ? k$bsih = vzfa2['parseXMLFromString'](fy1a2z['data']) : k$bsih = fy1a2z['data'];jv3t97['onLoaded'](k$bsih), !k_gb4$['isZiYu'] && k_gb4$['isPosMsgYu'] && khy1s != 'arraybuffer' && wx['postMessage']({ 'url': vztf2, 'data': k$bsih, 'isLoad': !![] });
      } else e8pxr == 0x1 && k_gb4$['EnvConfig']['load']['call'](jv3t97, vztf2, khy1s, s4hbk, a93zv, s$bh4);
    }, az32v(rexwp, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), rexwp;
  }(),
      mxwre8 = function (v3ta) {
    function _mg46() {
      _mg46['__super']['call'](this);;
    }return g_64b(_mg46, 'laya.wx.mini.MiniFileMgr', v3ta), _mg46['isLoadFile'] = function (zv32) {
      return _mg46['_fileTypeArr']['indexOf'](zv32) != -0x1 ? !![] : ![];
    }, _mg46['getFileInfo'] = function (vz9a3) {
      var ldnco5 = vz9a3['split']('?')[0x0],
          fiy12a = _mg46['filesListObj'][ldnco5];if (fiy12a == null) return null;else return fiy12a;return null;
    }, _mg46['onFileUpdate'] = function (tv9j3z, yhfs) {
      var z2ay1 = tv9j3z['split']('/'),
          _6$4b = z2ay1[z2ay1['length'] - 0x1],
          $ish = _mg46['getFileInfo'](yhfs);if ($ish == null) _mg46['onSaveFile'](yhfs, _6$4b);else {
        if ($ish['readyUrl'] != yhfs) _mg46['remove'](_6$4b, yhfs);
      }
    }, _mg46['exits'] = function (c5qon, odcn5q) {
      var k$4 = _mg46['getFileNativePath'](c5qon);_mg46['fs']['getFileInfo']({ 'filePath': k$4, 'success': function (f12zva) {
          odcn5q != null && odcn5q['runWith']([0x0, f12zva]);
        }, 'fail': function (h$iksb) {
          odcn5q != null && odcn5q['runWith']([0x1, h$iksb]);
        } });
    }, _mg46['read'] = function (hibsk$, h4$ksb, v93zt, $shik) {
      h4$ksb === void 0x0 && (h4$ksb = 'ascill'), $shik === void 0x0 && ($shik = '');var t3j97v;$shik != '' ? t3j97v = _mg46['getFileNativePath'](hibsk$) : t3j97v = hibsk$, _mg46['fs']['readFile']({ 'filePath': t3j97v, 'encoding': h4$ksb, 'success': function (hks4) {
          v93zt != null && v93zt['runWith']([0x0, hks4]);
        }, 'fail': function (avtf) {
          if (avtf && $shik != '') _mg46['down']($shik, h4$ksb, v93zt, $shik);else v93zt != null && v93zt['runWith']([0x1]);
        } });
    }, _mg46['readNativeFile'] = function (bkh$4, jt039) {
      _mg46['fs']['readFile']({ 'filePath': bkh$4, 'encoding': '', 'success': function (hif1y) {
          jt039 != null && jt039['runWith']([0x0]);
        }, 'fail': function (iyhs1) {
          jt039 != null && jt039['runWith']([0x1]);
        } });
    }, _mg46['down'] = function (ewrx8, fsyi1h, dol5c, iy1fs) {
      fsyi1h === void 0x0 && (fsyi1h = 'ascill'), iy1fs === void 0x0 && (iy1fs = '');var z93avt = _mg46['getFileNativePath'](iy1fs),
          bkih = _mg46['wxdown']({ 'url': ewrx8, 'filePath': z93avt, 'success': function (dnoq) {
          if (dnoq['statusCode'] === 0xc8) _mg46['readFile'](dnoq['filePath'], fsyi1h, dol5c, iy1fs);
        }, 'fail': function (o5dc) {
          dol5c != null && dol5c['runWith']([0x1, o5dc]);
        } });bkih['onProgressUpdate'](function (b$sikh) {
        dol5c != null && dol5c['runWith']([0x2, b$sikh['progress']]);
      });
    }, _mg46['readFile'] = function (yihk1, hb$s4k, gbm64, $yish) {
      hb$s4k === void 0x0 && (hb$s4k = 'ascill'), $yish === void 0x0 && ($yish = ''), _mg46['fs']['readFile']({ 'filePath': yihk1, 'encoding': hb$s4k, 'success': function (mwe86r) {
          if (yihk1['indexOf']('http://') != -0x1 || yihk1['indexOf']('https://') != -0x1) _mg46['onFileUpdate'](yihk1, $yish);gbm64 != null && gbm64['runWith']([0x0, mwe86r]);
        }, 'fail': function (if12y) {
          if (if12y) gbm64 != null && gbm64['runWith']([0x1, if12y]);
        } });
    }, _mg46['downImg'] = function (faz2vt, hy1sf, tvz93a) {
      tvz93a === void 0x0 && (tvz93a = '');var d50oc = _mg46['wxdown']({ 'url': faz2vt, 'success': function ($_4bkh) {
          $_4bkh['statusCode'] === 0xc8 && _mg46['copyFile']($_4bkh['tempFilePath'], tvz93a, hy1sf);
        }, 'fail': function (h$kisb) {
          hy1sf != null && hy1sf['runWith']([0x1, h$kisb]);
        } });
    }, _mg46['copyFile'] = function (c5qdon, s1i2fy, f2isy) {
      var od5qc0 = c5qdon['split']('/'),
          fyia = od5qc0[od5qc0['length'] - 0x1],
          bs4k$h = s1i2fy['split']('?')[0x0],
          j937q0 = _mg46['getFileInfo'](s1i2fy),
          nodcq5 = _mg46['getFileNativePath'](fyia);_mg46['fs']['copyFile']({ 'srcPath': c5qdon, 'destPath': nodcq5, 'success': function (i1yf2) {
          if (!j937q0) _mg46['onSaveFile'](s1i2fy, fyia), f2isy != null && f2isy['runWith']([0x0]);else {
            if (j937q0['readyUrl'] != s1i2fy) _mg46['remove'](fyia, s1i2fy, f2isy);
          }
        }, 'fail': function (i2y1) {
          f2isy != null && f2isy['runWith']([0x1, i2y1]);
        } });
    }, _mg46['getFileNativePath'] = function (hksib$) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + hksib$;
    }, _mg46['remove'] = function ($6_4, hib$, yshi1) {
      hib$ === void 0x0 && (hib$ = '');var _64bg$ = _mg46['getFileInfo'](hib$),
          si1khy = _mg46['getFileNativePath'](_64bg$['md5']);ih$sk['loader']['clearRes'](_64bg$['readyUrl']), _mg46['fs']['unlink']({ 'filePath': si1khy, 'success': function (_gmb4) {
          if (hib$ != '') _mg46['onSaveFile'](hib$, $6_4);yshi1 != null && yshi1['runWith']([0x0]);
        }, 'fail': function (s4$bk) {} });
    }, _mg46['onSaveFile'] = function (t39jvz, fyaz2) {
      var vzf1 = t39jvz['split']('?')[0x0];_mg46['filesListObj'][vzf1] = { 'md5': fyaz2, 'readyUrl': t39jvz }, _mg46['fs']['writeFile']({ 'filePath': _mg46['fileNativeDir'] + '/' + _mg46['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_mg46['filesListObj']), 'success': function (dqc0o) {
          console['log']('写入测试测试成功：', dqc0o);
        }, 'fail': function (onl5dc) {
          console['log']('写入测试测试失败：', onl5dc);
        } });
    }, _mg46['existDir'] = function (bgm_6, iyf21s) {
      _mg46['fs']['mkdir']({ 'dirPath': bgm_6, 'success': function (bkh$_4) {
          iyf21s != null && iyf21s['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (g8rem) {
          if (g8rem['errMsg']['indexOf']('file already exists') != -0x1) _mg46['readSync'](_mg46['fileListName'], 'utf8', iyf21s);else iyf21s != null && iyf21s['runWith']([0x1, g8rem]);
        } });
    }, _mg46['readSync'] = function (aztv3, shk1, fi12ya, kyih1) {
      shk1 === void 0x0 && (shk1 = 'ascill'), kyih1 === void 0x0 && (kyih1 = '');var wrx = _mg46['getFileNativePath'](aztv3),
          wrxe8m;try {
        wrxe8m = _mg46['fs']['readFileSync'](wrx), fi12ya != null && fi12ya['runWith']([0x0, { 'data': wrxe8m }]);
      } catch (y21aif) {
        fi12ya != null && fi12ya['runWith']([0x1]);
      }
    }, _mg46['readCache'] = function () {}, _mg46['writeCache'] = function (dcj7) {
      var _64m8 = readyUrl['split']('?')[0x0];_mg46['filesListObj'][_64m8] = { 'md5': md5Name, 'readyUrl': readyUrl }, _mg46['fs']['writeFile']({ 'filePath': _mg46['fileNativeDir'] + '/' + _mg46['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_mg46['filesListObj']), 'success': function (yshik$) {}, 'fail': function (sfyih1) {} });
    }, _mg46['setNativeFileDir'] = function ($g_4kb) {
      _mg46['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $g_4kb;
    }, _mg46['filesListObj'] = {}, _mg46['fileNativeDir'] = null, _mg46['fileListName'] = 'layaairfiles.txt', _mg46['ziyuFileData'] = {}, az32v(_mg46, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _mg46;
  }(b_6gm),
      qdon5 = function (j9t3) {
    function $sbki() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], $sbki['__super']['call'](this), this['_sound'] = $sbki['_createSound']();
    }g_64b($sbki, 'laya.wx.mini.MiniSound', j9t3);var qc5d0o = $sbki['prototype'];return qc5d0o['load'] = function (jvt39z) {
      var $kihbs = this;jvt39z = mg_r['formatURL'](jvt39z), this['url'] = jvt39z;if ($sbki['_audioCache'][jvt39z]) {
        this['event']('complete');return;
      }function _8g4m() {
        if ($sbki['_null'] != undefined) $kihbs['_sound']['onCanplay']($sbki['_null']), $kihbs['_sound']['onError']($sbki['_null']);else try {
          $kihbs['_sound']['onCanplay'](null), $kihbs['_sound']['onError'](null), $sbki['_null'] = null;
        } catch (cq0d7o) {
          console['warn']('[wxmini] _clearSound:' + cq0d7o), $kihbs['_sound']['onCanplay'](v39at), $kihbs['_sound']['onError'](v39at), $sbki['_null'] = v39at;
        }
      }function l5dno() {
        _8g4m(), hf['loaded'] = !![], hf['event']('complete'), $sbki['_audioCache'][hf['url']] = hf;
      }function w8m6er(kis1yh) {
        console['error']('errCode=' + kis1yh['errCode'] + '  errMsg=' + kis1yh['errMsg']), _8g4m(), hf['event']('error');
      }function v39at() {}this['_sound']['onCanplay'](l5dno), this['_sound']['onError'](w8m6er), this['_sound']['src'] = jvt39z;var hf = this;
    }, qc5d0o['play'] = function (g8m_6, cq0do) {
      g8m_6 === void 0x0 && (g8m_6 = 0x0), cq0do === void 0x0 && (cq0do = 0x0);var hsy1k;if (this['url'] == dq0oc['_tMusic']) {
        if (!$sbki['_musicAudio']) $sbki['_musicAudio'] = $sbki['_createSound']();hsy1k = $sbki['_musicAudio'];
      } else hsy1k = $sbki['_createSound']();hsy1k['src'] = this['url'];var j79tv = new atvz9(hsy1k);return j79tv['url'] = this['url'], j79tv['loops'] = cq0do, j79tv['startTime'] = g8m_6, j79tv['play'](), dq0oc['addChannel'](j79tv), j79tv;
    }, qc5d0o['dispose'] = function () {
      var $4_gk = $sbki['_audioCache'][this['url']];$4_gk && ($4_gk['src'] = '', delete $sbki['_audioCache'][this['url']]);
    }, k$4_gb(0x0, qc5d0o, 'duration', function () {
      return this['_sound']['duration'];
    }), $sbki['_createSound'] = function () {
      return $sbki['_id']++, k_gb4$['window']['wx']['createInnerAudioContext']();
    }, $sbki['_musicAudio'] = null, $sbki['_id'] = 0x0, $sbki['_audioCache'] = {}, $sbki['_null'] = undefined, $sbki;
  }(b_6gm),
      atvz9 = function (a1zf2) {
    function jv793t(z1y2af) {
      this['_audio'] = null, this['_onEnd'] = null, jv793t['__super']['call'](this), this['_audio'] = z1y2af, this['_onEnd'] = vzfa2['bind'](this['__onEnd'], this), z1y2af['onEnded'](this['_onEnd']);
    }g_64b(jv793t, 'laya.wx.mini.MiniSoundChannel', a1zf2);var qjdc = jv793t['prototype'];return qjdc['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ih$sk['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, qjdc['__onNull'] = function () {}, qjdc['play'] = function () {
      this['isStopped'] = ![], dq0oc['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, qjdc['stop'] = function () {
      this['isStopped'] = !![], dq0oc['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (jv793t['_null'] != undefined) this['_audio']['onEnded'](jv793t['_null']);else try {
        this['_audio']['onEnded'](null), jv793t['_null'] = null;
      } catch ($syhki) {
        console['warn']('[wxmini] stop:' + $syhki), this['_audio']['onEnded'](vzfa2['bind'](this['__onNull'], this)), jv793t['_null'] = vzfa2['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, qjdc['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, qjdc['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], dq0oc['addChannel'](this), this['_audio']['play']();
    }, k$4_gb(0x0, qjdc, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), k$4_gb(0x0, qjdc, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), k$4_gb(0x0, qjdc, 'volume', function () {
      return 0x1;
    }, function (nl5dc) {}), jv793t['_null'] = undefined, jv793t;
  }($4_bg);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var dc50 in Laya) {
    var e8m6g = Laya[dc50];e8m6g && e8m6g['__isclass'] && (exports[dc50] = e8m6g);
  }
});