var u = wx.$x;
(function (window, document, dncvju) {
  var ehwkb0 = dncvju['un'],
      h0web = dncvju['uns'],
      e0hk = dncvju['static'],
      s4gmxi = dncvju['class'],
      mos2 = dncvju['getset'],
      nufcv = dncvju['__newvec'],
      cnjuf9 = laya['utils']['Browser'],
      yl7$98 = laya['events']['Event'],
      l9n = laya['events']['EventDispatcher'],
      gs4xd = laya['resource']['HTMLImage'],
      ehq0ap = laya['utils']['Handler'],
      pehk0b = laya['display']['Input'],
      t21 = laya['net']['Loader'],
      $7l9 = laya['maths']['Matrix'],
      abhp0 = laya['renders']['Render'],
      ncl9fj = laya['utils']['RunDriver'],
      mszo52 = laya['media']['Sound'],
      kw1t = laya['media']['SoundChannel'],
      lcfj97 = laya['media']['SoundManager'],
      pra_hq = laya['display']['Stage'],
      o4sxm = laya['net']['URL'],
      xismoz = laya['utils']['Utils'],
      jnucv = function () {
    function e0bhw() {}return s4gmxi(e0bhw, 'laya.wx.mini.MiniAdpter'), e0bhw['getJson'] = function (sixd4) {
      return JSON['parse'](sixd4);
    }, e0bhw['init'] = function (m5xzo, szoxmi) {
      m5xzo === void 0x0 && (m5xzo = ![]), szoxmi === void 0x0 && (szoxmi = ![]);if (e0bhw['_inited']) return;e0bhw['window'] = window;if (e0bhw['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;e0bhw['_inited'] = !![], e0bhw['isZiYu'] = szoxmi, e0bhw['isPosMsgYu'] = m5xzo, e0bhw['EnvConfig'] = {}, !e0bhw['isZiYu'] && (k163wt['setNativeFileDir']('/layaairGame'), k163wt['existDir'](k163wt['fileNativeDir'], ehq0ap['create'](e0bhw, e0bhw['onMkdirCallBack']))), e0bhw['window']['focus'] = function () {}, dncvju['getUrlPath'] = function () {}, e0bhw['window']['logtime'] = function (nvud) {}, e0bhw['window']['alertTimeLog'] = function (cfl98) {}, e0bhw['window']['resetShareInfo'] = function () {}, e0bhw['window']['CanvasRenderingContext2D'] = function () {}, e0bhw['window']['CanvasRenderingContext2D']['prototype'] = e0bhw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], e0bhw['window']['document']['body']['appendChild'] = function () {}, e0bhw['EnvConfig']['pixelRatioInt'] = 0x0, ncl9fj['getPixelRatio'] = e0bhw['pixelRatio'], e0bhw['_preCreateElement'] = cnjuf9['createElement'], cnjuf9['createElement'] = e0bhw['createElement'], ncl9fj['createShaderCondition'] = e0bhw['createShaderCondition'], xismoz['parseXMLFromString'] = e0bhw['parseXMLFromString'], pehk0b['_createInputElement'] = dvxi['_createInputElement'], e0bhw['EnvConfig']['load'] = t21['prototype']['load'], t21['prototype']['load'] = _arpqh['prototype']['load'], e0bhw['isZiYu'] && m5xzo && wx['onMessage'](function (nju9f) {
        nju9f['isLoad'] && (k163wt['ziyuFileData'][nju9f['url']] = nju9f['data']);
      });
    }, e0bhw['onMkdirCallBack'] = function (osxiz, pqe0a) {
      if (!osxiz) k163wt['filesListObj'] = JSON['parse'](pqe0a['data']);
    }, e0bhw['pixelRatio'] = function () {
      if (!e0bhw['EnvConfig']['pixelRatioInt']) try {
        var ek0pbh = wx['getSystemInfoSync']();return e0bhw['EnvConfig']['pixelRatioInt'] = ek0pbh['pixelRatio'], ek0pbh = ek0pbh, ek0pbh['pixelRatio'];
      } catch (y798lf) {}return e0bhw['EnvConfig']['pixelRatioInt'];
    }, e0bhw['createElement'] = function (mxzso) {
      if (mxzso == 'canvas') {
        var oszimx;return e0bhw['idx'] == 0x1 ? e0bhw['isZiYu'] ? (oszimx = sharedCanvas, oszimx['style'] = {}) : oszimx = window['canvas'] : oszimx = window['wx']['createCanvas'](), e0bhw['idx']++, oszimx;
      } else {
        if (mxzso == 'textarea' || mxzso == 'input') return e0bhw['onCreateInput'](mxzso);else {
          if (mxzso == 'div') {
            var e0wkb = e0bhw['_preCreateElement'](mxzso);return e0wkb['contains'] = function (ndvujg) {
              return null;
            }, e0wkb['removeChild'] = function (hpa0eq) {}, e0wkb;
          } else return e0bhw['_preCreateElement'](mxzso);
        }
      }
    }, e0bhw['onCreateInput'] = function (hba0pe) {
      var cudnjv = e0bhw['_preCreateElement'](hba0pe);return cudnjv['focus'] = dvxi['wxinputFocus'], cudnjv['blur'] = dvxi['wxinputblur'], cudnjv['style'] = {}, cudnjv['value'] = 0x0, cudnjv['parentElement'] = {}, cudnjv['placeholder'] = {}, cudnjv['type'] = {}, cudnjv['setColor'] = function (jgun) {}, cudnjv['setType'] = function (nvgd4u) {}, cudnjv['setFontFace'] = function (pa_rq) {}, cudnjv['addEventListener'] = function (heap_) {}, cudnjv['contains'] = function (fnl9cj) {
        return null;
      }, cudnjv['removeChild'] = function (k01wb) {}, cudnjv;
    }, e0bhw['createShaderCondition'] = function (gvudj) {
      var m5zo26 = this,
          peqa0 = function () {
        var xds4ig = gvudj;return m5zo26[gvudj['replace']('this.', '')];
      };return peqa0;
    }, e0bhw['EnvConfig'] = null, e0bhw['window'] = null, e0bhw['_preCreateElement'] = null, e0bhw['_inited'] = ![], e0bhw['wxRequest'] = null, e0bhw['systemInfo'] = null, e0bhw['version'] = '0.0.1', e0bhw['isZiYu'] = ![], e0bhw['isPosMsgYu'] = ![], e0bhw['parseXMLFromString'] = function ($y789) {
      var cfn9l, qpa0he;$y789 = $y789['replace'](/>\s+</g, '><');try {
        cfn9l = new window['Parser']['DOMParser']()['parseFromString']($y789, 'text/xml');
      } catch (_prqh) {
        throw '需要引入xml解析库文件';
      }return cfn9l;
    }, e0bhw['idx'] = 0x1, e0bhw;
  }(),
      lj7f = function () {
    function t3wbk() {}s4gmxi(t3wbk, 'laya.wx.mini.MiniImage');var hp_qar = t3wbk['prototype'];return hp_qar['_loadImage'] = function (o5mszx) {
      var so5mz = this,
          cfn = ![];o5mszx['indexOf']('layaNativeDir/') == -0x1 && (cfn = !![], o5mszx = o4sxm['formatURL'](o5mszx));if (!k163wt['getFileInfo'](o5mszx)) {
        if (o5mszx['indexOf']('http://') != -0x1 || o5mszx['indexOf']('https://') != -0x1) k163wt['downImg'](o5mszx, new ehq0ap(t3wbk, t3wbk['onDownImgCallBack'], [o5mszx, so5mz]), o5mszx);else t3wbk['onCreateImage'](o5mszx, so5mz, !![]);
      } else t3wbk['onCreateImage'](o5mszx, so5mz, !cfn);
    }, t3wbk['onDownImgCallBack'] = function (t61k3w, l78$y, z2ot5) {
      if (!z2ot5) t3wbk['onCreateImage'](t61k3w, l78$y);else l78$y['onError'](null);
    }, t3wbk['onCreateImage'] = function (szmio, sgx4im, vd4nu) {
      vd4nu === void 0x0 && (vd4nu = ![]);var b31wkt;if (!vd4nu) {
        var q0ea = k163wt['getFileInfo'](szmio),
            f9nju = q0ea['md5'];b31wkt = k163wt['getFileNativePath'](f9nju);
      } else b31wkt = szmio;if (sgx4im['imgCache'] == null) sgx4im['imgCache'] = {};var ar_qp;function f978y() {
        ar_qp['onload'] = null, ar_qp['onerror'] = null, delete sgx4im['imgCache'][szmio];
      };var jc7f9l = function () {
        f978y(), sgx4im['onLoaded'](ar_qp);
      },
          vufcj = function () {
        f978y(), sgx4im['event']('error', 'Load image failed');
      };sgx4im['_type'] == 'nativeimage' ? (ar_qp = new cnjuf9['window']['Image'](), ar_qp['crossOrigin'] = '', ar_qp['onload'] = jc7f9l, ar_qp['onerror'] = vufcj, ar_qp['src'] = b31wkt, sgx4im['imgCache'][szmio] = ar_qp) : new gs4xd['create'](b31wkt, { 'onload': jc7f9l, 'onerror': vufcj, 'onCreate': function (a0ehbp) {
          ar_qp = a0ehbp, sgx4im['imgCache'][szmio] = a0ehbp;
        } });
    }, t3wbk;
  }(),
      dvxi = function () {
    function sg4dx() {}return s4gmxi(sg4dx, 'laya.wx.mini.MiniInput'), sg4dx['_createInputElement'] = function () {
      pehk0b['_initInput'](pehk0b['area'] = cnjuf9['createElement']('textarea')), pehk0b['_initInput'](pehk0b['input'] = cnjuf9['createElement']('input')), pehk0b['inputContainer'] = cnjuf9['createElement']('div'), pehk0b['inputContainer']['style']['position'] = 'absolute', pehk0b['inputContainer']['style']['zIndex'] = 0x186a0, cnjuf9['container']['appendChild'](pehk0b['inputContainer']), pehk0b['inputContainer']['setPos'] = function (bekwh0, zmisox) {
        pehk0b['inputContainer']['style']['left'] = bekwh0 + 'px', pehk0b['inputContainer']['style']['top'] = zmisox + 'px';
      }, dncvju['stage']['on']('resize', null, sg4dx['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (njcu) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), lcfj97['_soundClass'] = e0wb1k, lcfj97['_musicClass'] = e0wb1k;
    }, sg4dx['_onStageResize'] = function () {
      var wb3k01 = dncvju['stage']['_canvasTransform']['identity']();wb3k01['scale'](cnjuf9['width'] / abhp0['canvas']['width'] / ncl9fj['getPixelRatio'](), cnjuf9['height'] / abhp0['canvas']['height'] / ncl9fj['getPixelRatio']());
    }, sg4dx['wxinputFocus'] = function (o5s2zm) {
      var jlcf9n = pehk0b['inputElement']['target'];if (jlcf9n && !jlcf9n['editable']) return;jnucv['window']['wx']['offKeyboardConfirm'](), jnucv['window']['wx']['offKeyboardInput'](), jnucv['window']['wx']['showKeyboard']({ 'defaultValue': jlcf9n['text'], 'maxLength': jlcf9n['maxChars'], 'multiple': jlcf9n['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (w3k1) {}, 'fail': function (y87$l9) {} }), jnucv['window']['wx']['onKeyboardConfirm'](function (abe0hp) {
        var nfcuv = abe0hp ? abe0hp['value'] : '';jlcf9n['text'] = nfcuv, jlcf9n['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), jnucv['window']['wx']['onKeyboardInput'](function (jvf) {
        var zm5o6 = jvf ? jvf['value'] : '';if (!jlcf9n['multiline']) {
          if (zm5o6['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }jlcf9n['text'] = zm5o6, jlcf9n['event']('input');
      });
    }, sg4dx['inputEnter'] = function () {
      pehk0b['inputElement']['target']['focus'] = ![];
    }, sg4dx['wxinputblur'] = function () {
      sg4dx['hideKeyboard']();
    }, sg4dx['hideKeyboard'] = function () {
      jnucv['window']['wx']['offKeyboardConfirm'](), jnucv['window']['wx']['offKeyboardInput'](), jnucv['window']['wx']['hideKeyboard']({ 'success': function (xosizm) {
          console['log']('隐藏键盘');
        }, 'fail': function (cl87f) {
          console['log']('隐藏键盘出错:' + (cl87f ? cl87f['errMsg'] : ''));
        } });
    }, sg4dx;
  }(),
      _arpqh = function () {
    function hqpr_() {}s4gmxi(hqpr_, 'laya.wx.mini.MiniLoader');var om5z = hqpr_['prototype'];return om5z['load'] = function (wek0bh, mzsoxi, hep0bk, id4uv, kph0be) {
      hep0bk === void 0x0 && (hep0bk = !![]), kph0be === void 0x0 && (kph0be = ![]);var sdxi = this;sdxi['_url'] = wek0bh;if (wek0bh['indexOf']('data:image') === 0x0) sdxi['_type'] = mzsoxi = 'image';else sdxi['_type'] = mzsoxi || (mzsoxi = sdxi['getTypeFromUrl'](wek0bh));sdxi['_cache'] = hep0bk, sdxi['_data'] = null;var fyl89 = 'ascii';if (wek0bh['indexOf']('.fnt') != -0x1) fyl89 = 'utf8';else mzsoxi == 'arraybuffer' && (fyl89 = '');;var cunvdj = xismoz['getFileExtension'](wek0bh);if (hqpr_['_fileTypeArr']['indexOf'](cunvdj) != -0x1) jnucv['EnvConfig']['load']['call'](this, wek0bh, mzsoxi, hep0bk, id4uv, kph0be);else {
        if (!k163wt['getFileInfo'](wek0bh)) {
          if (wek0bh['indexOf']('layaNativeDir/') != -0x1) {
            if (jnucv['isZiYu']) {
              var _qp = k163wt['ziyuFileData'][wek0bh];sdxi['onLoaded'](_qp);return;
            } else {
              cosnole['log']('read read'), k163wt['read'](wek0bh, fyl89, new ehq0ap(hqpr_, hqpr_['onReadNativeCallBack'], [fyl89, wek0bh, mzsoxi, hep0bk, id4uv, kph0be, sdxi]));return;
            }
          }if (o4sxm['rootPath'] == '') var duvgnj = wek0bh;else duvgnj = wek0bh['split'](o4sxm['rootPath'])[0x0];wek0bh['indexOf']('http://') != -0x1 || wek0bh['indexOf']('https://') != -0x1 ? jnucv['EnvConfig']['load']['call'](sdxi, wek0bh, mzsoxi, hep0bk, id4uv, kph0be) : k163wt['readFile'](duvgnj, fyl89, new ehq0ap(hqpr_, hqpr_['onReadNativeCallBack'], [fyl89, wek0bh, mzsoxi, hep0bk, id4uv, kph0be, sdxi]), wek0bh);
        } else jnucv['EnvConfig']['load']['call'](this, wek0bh, mzsoxi, hep0bk, id4uv, kph0be);
      }
    }, om5z['resMgrLoad'] = function (gdisx, dgui4v, ncf, gmxs4i, bw31kt, xomzi, o2z6) {
      ncf === void 0x0 && (ncf = 0x0), gmxs4i === void 0x0 && (gmxs4i = ![]), bw31kt === void 0x0 && (bw31kt = ![]), xomzi === void 0x0 && (xomzi = 0x0), o2z6 === void 0x0 && (o2z6 = 0x3), gdisx['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', gdisx), jnucv['EnvConfig']['resMgrLoad'](gdisx, (_hp, lj97cf, cudj) => {
        hqpr_['prototype']['resMgrLoadCallBack'](_hp, lj97cf, cudj, dgui4v);
      }, ncf, gmxs4i, bw31kt, xomzi, o2z6);
    }, om5z['resMgrLoadCallBack'] = function (baeph0, m5xsz, ixdgs, t2356z) {
      console['log']('buff:::', baeph0, ixdgs, k163wt['fileNativeDir'] + '///' + k163wt['fileListName']), t2356z(baeph0, m5xsz, ixdgs);
    }, om5z['clearRes'] = function (o4sxmi, cl789f) {
      cl789f === void 0x0 && (cl789f = ![]);var l97y8 = this;l97y8['clearRes'](o4sxmi, cl789f);var xg4dsi = k163wt['getFileInfo'](o4sxmi);if (xg4dsi && (o4sxmi['indexOf']('http://') != -0x1 || o4sxmi['indexOf']('https://') != -0x1)) {
        var bwk10 = xg4dsi['md5'],
            l798$y = k163wt['getFileNativePath'](bwk10);k163wt['remove'](l798$y);
      }
    }, hqpr_['onReadNativeCallBack'] = function (t63152, z6o2m, xdgis, qp0ae, cf78l, z52mso, om65z, eabh0, ucnj) {
      qp0ae === void 0x0 && (qp0ae = !![]), z52mso === void 0x0 && (z52mso = ![]), eabh0 === void 0x0 && (eabh0 = 0x0);if (!eabh0) {
        var fjncv;if (xdgis == 'json' || xdgis == 'atlas') fjncv = jnucv['getJson'](ucnj['data']);else xdgis == 'xml' ? fjncv = xismoz['parseXMLFromString'](ucnj['data']) : fjncv = ucnj['data'];om65z['onLoaded'](fjncv), !jnucv['isZiYu'] && jnucv['isPosMsgYu'] && xdgis != 'arraybuffer' && wx['postMessage']({ 'url': z6o2m, 'data': fjncv, 'isLoad': !![] });
      } else eabh0 == 0x1 && jnucv['EnvConfig']['load']['call'](om65z, z6o2m, xdgis, qp0ae, cf78l, z52mso);
    }, e0hk(hqpr_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), hqpr_;
  }(),
      k163wt = function (w1tk36) {
    function mio4sx() {
      mio4sx['__super']['call'](this);;
    }return s4gmxi(mio4sx, 'laya.wx.mini.MiniFileMgr', w1tk36), mio4sx['isLoadFile'] = function (dg4vn) {
      return mio4sx['_fileTypeArr']['indexOf'](dg4vn) != -0x1 ? !![] : ![];
    }, mio4sx['getFileInfo'] = function (pah0eq) {
      var fjcvun = pah0eq['split']('?')[0x0],
          dgjnu = mio4sx['filesListObj'][fjcvun];if (dgjnu == null) return null;else return dgjnu;return null;
    }, mio4sx['onFileUpdate'] = function (zms5xo, k1b3w) {
      var w1b03 = zms5xo['split']('/'),
          bh0aep = w1b03[w1b03['length'] - 0x1],
          si4xgm = mio4sx['getFileInfo'](k1b3w);if (si4xgm == null) mio4sx['onSaveFile'](k1b3w, bh0aep);else {
        if (si4xgm['readyUrl'] != k1b3w) mio4sx['remove'](bh0aep, k1b3w);
      }
    }, mio4sx['exits'] = function ($9y8l7, guvjd) {
      var pqahe = mio4sx['getFileNativePath']($9y8l7);mio4sx['fs']['getFileInfo']({ 'filePath': pqahe, 'success': function (k0bp) {
          guvjd != null && guvjd['runWith']([0x0, k0bp]);
        }, 'fail': function (nvgjud) {
          guvjd != null && guvjd['runWith']([0x1, nvgjud]);
        } });
    }, mio4sx['read'] = function (cf79l, _heap, qp0ah, xivdg4) {
      _heap === void 0x0 && (_heap = 'ascill'), xivdg4 === void 0x0 && (xivdg4 = '');var o265zt;xivdg4 != '' ? o265zt = mio4sx['getFileNativePath'](cf79l) : o265zt = cf79l, mio4sx['fs']['readFile']({ 'filePath': o265zt, 'encoding': _heap, 'success': function (qape0h) {
          qp0ah != null && qp0ah['runWith']([0x0, qape0h]);
        }, 'fail': function (m4six) {
          if (m4six && xivdg4 != '') mio4sx['down'](xivdg4, _heap, qp0ah, xivdg4);else qp0ah != null && qp0ah['runWith']([0x1]);
        } });
    }, mio4sx['readNativeFile'] = function (sidx, dixgs4) {
      mio4sx['fs']['readFile']({ 'filePath': sidx, 'encoding': '', 'success': function (bep0k) {
          dixgs4 != null && dixgs4['runWith']([0x0]);
        }, 'fail': function (khbw0) {
          dixgs4 != null && dixgs4['runWith']([0x1]);
        } });
    }, mio4sx['down'] = function (jnvfuc, kb3t1w, pbh0ae, tk1wb) {
      kb3t1w === void 0x0 && (kb3t1w = 'ascill'), tk1wb === void 0x0 && (tk1wb = '');var fjc9un = mio4sx['getFileNativePath'](tk1wb),
          dnv4gu = mio4sx['wxdown']({ 'url': jnvfuc, 'filePath': fjc9un, 'success': function (hp0q) {
          if (hp0q['statusCode'] === 0xc8) mio4sx['readFile'](hp0q['filePath'], kb3t1w, pbh0ae, tk1wb);
        }, 'fail': function (vnd4g) {
          pbh0ae != null && pbh0ae['runWith']([0x1, vnd4g]);
        } });dnv4gu['onProgressUpdate'](function (xoms5z) {
        pbh0ae != null && pbh0ae['runWith']([0x2, xoms5z['progress']]);
      });
    }, mio4sx['readFile'] = function (juncf9, aeh0bp, jcf7l, ehp0kb) {
      aeh0bp === void 0x0 && (aeh0bp = 'ascill'), ehp0kb === void 0x0 && (ehp0kb = ''), mio4sx['fs']['readFile']({ 'filePath': juncf9, 'encoding': aeh0bp, 'success': function (n9jlfc) {
          if (juncf9['indexOf']('http://') != -0x1 || juncf9['indexOf']('https://') != -0x1) mio4sx['onFileUpdate'](juncf9, ehp0kb);jcf7l != null && jcf7l['runWith']([0x0, n9jlfc]);
        }, 'fail': function (l9y7$) {
          if (l9y7$) jcf7l != null && jcf7l['runWith']([0x1, l9y7$]);
        } });
    }, mio4sx['downImg'] = function (ap0qhe, junc9f, s5om2z) {
      s5om2z === void 0x0 && (s5om2z = '');var s52mz = mio4sx['wxdown']({ 'url': ap0qhe, 'success': function (cln9) {
          cln9['statusCode'] === 0xc8 && mio4sx['copyFile'](cln9['tempFilePath'], s5om2z, junc9f);
        }, 'fail': function (mixs4) {
          junc9f != null && junc9f['runWith']([0x1, mixs4]);
        } });
    }, mio4sx['copyFile'] = function (cndjuv, z5to62, kt136) {
      var vu4ig = cndjuv['split']('/'),
          s4im = vu4ig[vu4ig['length'] - 0x1],
          hkpbe = z5to62['split']('?')[0x0],
          fclj9 = mio4sx['getFileInfo'](z5to62),
          w63t2 = mio4sx['getFileNativePath'](s4im);mio4sx['fs']['copyFile']({ 'srcPath': cndjuv, 'destPath': w63t2, 'success': function (vg4d) {
          if (!fclj9) mio4sx['onSaveFile'](z5to62, s4im), kt136 != null && kt136['runWith']([0x0]);else {
            if (fclj9['readyUrl'] != z5to62) mio4sx['remove'](s4im, z5to62, kt136);
          }
        }, 'fail': function (dgjnvu) {
          kt136 != null && kt136['runWith']([0x1, dgjnvu]);
        } });
    }, mio4sx['getFileNativePath'] = function (pbhea) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + pbhea;
    }, mio4sx['remove'] = function (gvuid4, _qeh, ugvnd4) {
      _qeh === void 0x0 && (_qeh = '');var misxo = mio4sx['getFileInfo'](_qeh),
          gud4vi = mio4sx['getFileNativePath'](misxo['md5']);dncvju['loader']['clearRes'](misxo['readyUrl']), mio4sx['fs']['unlink']({ 'filePath': gud4vi, 'success': function (ekhp0b) {
          if (_qeh != '') mio4sx['onSaveFile'](_qeh, gvuid4);ugvnd4 != null && ugvnd4['runWith']([0x0]);
        }, 'fail': function (vig4d) {} });
    }, mio4sx['onSaveFile'] = function (s5mxzo, kbe01w) {
      var vngu = s5mxzo['split']('?')[0x0];mio4sx['filesListObj'][vngu] = { 'md5': kbe01w, 'readyUrl': s5mxzo }, mio4sx['fs']['writeFile']({ 'filePath': mio4sx['fileNativeDir'] + '/' + mio4sx['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mio4sx['filesListObj']), 'success': function (jgnudv) {
          console['log']('写入测试测试成功：', jgnudv);
        }, 'fail': function (o6z25) {
          console['log']('写入测试测试失败：', o6z25);
        } });
    }, mio4sx['existDir'] = function (is4dg, ixzmso) {
      mio4sx['fs']['mkdir']({ 'dirPath': is4dg, 'success': function (qp_ra) {
          ixzmso != null && ixzmso['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (tkwb) {
          if (tkwb['errMsg']['indexOf']('file already exists') != -0x1) mio4sx['readSync'](mio4sx['fileListName'], 'utf8', ixzmso);else ixzmso != null && ixzmso['runWith']([0x1, tkwb]);
        } });
    }, mio4sx['readSync'] = function ($y89, igsmx4, mzso2, djngu) {
      igsmx4 === void 0x0 && (igsmx4 = 'ascill'), djngu === void 0x0 && (djngu = '');var y9fl7 = mio4sx['getFileNativePath']($y89),
          xsi4o;try {
        xsi4o = mio4sx['fs']['readFileSync'](y9fl7), mzso2 != null && mzso2['runWith']([0x0, { 'data': xsi4o }]);
      } catch (h0pab) {
        mzso2 != null && mzso2['runWith']([0x1]);
      }
    }, mio4sx['readCache'] = function () {}, mio4sx['writeCache'] = function (ugjvnd) {
      var q_hpae = readyUrl['split']('?')[0x0];mio4sx['filesListObj'][q_hpae] = { 'md5': md5Name, 'readyUrl': readyUrl }, mio4sx['fs']['writeFile']({ 'filePath': mio4sx['fileNativeDir'] + '/' + mio4sx['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mio4sx['filesListObj']), 'success': function (dnujg) {}, 'fail': function (gdi4vu) {} });
    }, mio4sx['setNativeFileDir'] = function (m256) {
      mio4sx['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + m256;
    }, mio4sx['filesListObj'] = {}, mio4sx['fileNativeDir'] = null, mio4sx['fileListName'] = 'layaairfiles.txt', mio4sx['ziyuFileData'] = {}, e0hk(mio4sx, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), mio4sx;
  }(l9n),
      e0wb1k = function (m5so) {
    function hpe_qa() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], hpe_qa['__super']['call'](this), this['_sound'] = hpe_qa['_createSound']();
    }s4gmxi(hpe_qa, 'laya.wx.mini.MiniSound', m5so);var $98l7y = hpe_qa['prototype'];return $98l7y['load'] = function (aqhp_e) {
      var haprq_ = this;aqhp_e = o4sxm['formatURL'](aqhp_e), this['url'] = aqhp_e;if (hpe_qa['_audioCache'][aqhp_e]) {
        this['event']('complete');return;
      }function fc87l() {
        if (hpe_qa['_null'] != undefined) haprq_['_sound']['onCanplay'](hpe_qa['_null']), haprq_['_sound']['onError'](hpe_qa['_null']);else try {
          haprq_['_sound']['onCanplay'](null), haprq_['_sound']['onError'](null), hpe_qa['_null'] = null;
        } catch (o65) {
          console['warn']('[wxmini] _clearSound:' + o65), haprq_['_sound']['onCanplay'](l79y8$), haprq_['_sound']['onError'](l79y8$), hpe_qa['_null'] = l79y8$;
        }
      }function xs4gd() {
        fc87l(), t3bw['loaded'] = !![], t3bw['event']('complete'), hpe_qa['_audioCache'][t3bw['url']] = t3bw;
      }function hbk0e(xzims) {
        console['error']('errCode=' + xzims['errCode'] + '  errMsg=' + xzims['errMsg']), fc87l(), t3bw['event']('error');
      }function l79y8$() {}this['_sound']['onCanplay'](xs4gd), this['_sound']['onError'](hbk0e), this['_sound']['src'] = aqhp_e;var t3bw = this;
    }, $98l7y['play'] = function (k3b1wt, $8yl7) {
      k3b1wt === void 0x0 && (k3b1wt = 0x0), $8yl7 === void 0x0 && ($8yl7 = 0x0);var m5zs2;if (this['url'] == lcfj97['_tMusic']) {
        if (!hpe_qa['_musicAudio']) hpe_qa['_musicAudio'] = hpe_qa['_createSound']();m5zs2 = hpe_qa['_musicAudio'];
      } else m5zs2 = hpe_qa['_createSound']();m5zs2['src'] = this['url'];var l9jf = new h_aepq(m5zs2);return l9jf['url'] = this['url'], l9jf['loops'] = $8yl7, l9jf['startTime'] = k3b1wt, l9jf['play'](), lcfj97['addChannel'](l9jf), l9jf;
    }, $98l7y['dispose'] = function () {
      var hbe0wk = hpe_qa['_audioCache'][this['url']];hbe0wk && (hbe0wk['src'] = '', delete hpe_qa['_audioCache'][this['url']]);
    }, mos2(0x0, $98l7y, 'duration', function () {
      return this['_sound']['duration'];
    }), hpe_qa['_createSound'] = function () {
      return hpe_qa['_id']++, jnucv['window']['wx']['createInnerAudioContext']();
    }, hpe_qa['_musicAudio'] = null, hpe_qa['_id'] = 0x0, hpe_qa['_audioCache'] = {}, hpe_qa['_null'] = undefined, hpe_qa;
  }(l9n),
      h_aepq = function (zto62) {
    function i4xsmo(ug4vid) {
      this['_audio'] = null, this['_onEnd'] = null, i4xsmo['__super']['call'](this), this['_audio'] = ug4vid, this['_onEnd'] = xismoz['bind'](this['__onEnd'], this), ug4vid['onEnded'](this['_onEnd']);
    }s4gmxi(i4xsmo, 'laya.wx.mini.MiniSoundChannel', zto62);var zt263 = i4xsmo['prototype'];return zt263['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (dncvju['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, zt263['__onNull'] = function () {}, zt263['play'] = function () {
      this['isStopped'] = ![], lcfj97['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, zt263['stop'] = function () {
      this['isStopped'] = !![], lcfj97['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (i4xsmo['_null'] != undefined) this['_audio']['onEnded'](i4xsmo['_null']);else try {
        this['_audio']['onEnded'](null), i4xsmo['_null'] = null;
      } catch (gdvnu) {
        console['warn']('[wxmini] stop:' + gdvnu), this['_audio']['onEnded'](xismoz['bind'](this['__onNull'], this)), i4xsmo['_null'] = xismoz['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, zt263['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, zt263['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], lcfj97['addChannel'](this), this['_audio']['play']();
    }, mos2(0x0, zt263, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), mos2(0x0, zt263, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), mos2(0x0, zt263, 'volume', function () {
      return 0x1;
    }, function (fly87) {}), i4xsmo['_null'] = undefined, i4xsmo;
  }(kw1t);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var b0w1k3 in Laya) {
    var qr_a = Laya[b0w1k3];qr_a && qr_a['__isclass'] && (exports[b0w1k3] = qr_a);
  }
});