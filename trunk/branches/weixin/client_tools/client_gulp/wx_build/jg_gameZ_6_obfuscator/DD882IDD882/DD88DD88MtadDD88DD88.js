var G = wx.$E;
(function (window, document, m47$bc) {
  var idj_1 = m47$bc['un'],
      lpxyno = m47$bc['uns'],
      s3z = m47$bc['static'],
      s_t1id = m47$bc['class'],
      nlxp = m47$bc['getset'],
      tsz32 = m47$bc['__newvec'],
      gpn9yh = laya['utils']['Browser'],
      k$mbc = laya['events']['Event'],
      bcmk$ = laya['events']['EventDispatcher'],
      a9uqh = laya['resource']['HTMLImage'],
      va9uqr = laya['utils']['Handler'],
      k4c56 = laya['display']['Input'],
      rf8w = laya['net']['Loader'],
      s1idt_ = laya['maths']['Matrix'],
      cjk56 = laya['renders']['Render'],
      ghylpn = laya['utils']['RunDriver'],
      onlpy = laya['media']['Sound'],
      qav9ur = laya['media']['SoundChannel'],
      war8v = laya['media']['SoundManager'],
      qg9hua = laya['display']['Stage'],
      uqwvr = laya['net']['URL'],
      q9ugha = laya['utils']['Utils'],
      id_15 = function () {
    function fwqr8() {}return s_t1id(fwqr8, 'laya.wx.mini.MiniAdpter'), fwqr8['getJson'] = function (ug9pah) {
      return JSON['parse'](ug9pah);
    }, fwqr8['init'] = function (npxgy, qw8ar) {
      npxgy === void 0x0 && (npxgy = ![]), qw8ar === void 0x0 && (qw8ar = ![]);if (fwqr8['_inited']) return;fwqr8['window'] = window;if (fwqr8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;fwqr8['_inited'] = !![], fwqr8['isZiYu'] = qw8ar, fwqr8['isPosMsgYu'] = npxgy, fwqr8['EnvConfig'] = {}, !fwqr8['isZiYu'] && ($bc46k['setNativeFileDir']('/layaairGame'), $bc46k['existDir']($bc46k['fileNativeDir'], va9uqr['create'](fwqr8, fwqr8['onMkdirCallBack']))), fwqr8['window']['focus'] = function () {}, m47$bc['getUrlPath'] = function () {}, fwqr8['window']['logtime'] = function (gpnh) {}, fwqr8['window']['alertTimeLog'] = function (ynoxpl) {}, fwqr8['window']['resetShareInfo'] = function () {}, fwqr8['window']['CanvasRenderingContext2D'] = function () {}, fwqr8['window']['CanvasRenderingContext2D']['prototype'] = fwqr8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], fwqr8['window']['document']['body']['appendChild'] = function () {}, fwqr8['EnvConfig']['pixelRatioInt'] = 0x0, ghylpn['getPixelRatio'] = fwqr8['pixelRatio'], fwqr8['_preCreateElement'] = gpn9yh['createElement'], gpn9yh['createElement'] = fwqr8['createElement'], ghylpn['createShaderCondition'] = fwqr8['createShaderCondition'], q9ugha['parseXMLFromString'] = fwqr8['parseXMLFromString'], k4c56['_createInputElement'] = rf8qv['_createInputElement'], fwqr8['EnvConfig']['load'] = rf8w['prototype']['load'], rf8w['prototype']['load'] = c64bk['prototype']['load'], fwqr8['isZiYu'] && npxgy && wx['onMessage'](function (u9yhpg) {
        u9yhpg['isLoad'] && ($bc46k['ziyuFileData'][u9yhpg['url']] = u9yhpg['data']);
      });
    }, fwqr8['onMkdirCallBack'] = function (ugqha9, gu9) {
      if (!ugqha9) $bc46k['filesListObj'] = JSON['parse'](gu9['data']);
    }, fwqr8['pixelRatio'] = function () {
      if (!fwqr8['EnvConfig']['pixelRatioInt']) try {
        var t1s32 = wx['getSystemInfoSync']();return fwqr8['EnvConfig']['pixelRatioInt'] = t1s32['pixelRatio'], t1s32 = t1s32, t1s32['pixelRatio'];
      } catch (gylxnp) {}return fwqr8['EnvConfig']['pixelRatioInt'];
    }, fwqr8['createElement'] = function (b$4mkc) {
      if (b$4mkc == 'canvas') {
        var isd;return fwqr8['idx'] == 0x1 ? fwqr8['isZiYu'] ? (isd = sharedCanvas, isd['style'] = {}) : isd = window['canvas'] : isd = window['wx']['createCanvas'](), fwqr8['idx']++, isd;
      } else {
        if (b$4mkc == 'textarea' || b$4mkc == 'input') return fwqr8['onCreateInput'](b$4mkc);else {
          if (b$4mkc == 'div') {
            var $j6dk5 = fwqr8['_preCreateElement'](b$4mkc);return $j6dk5['contains'] = function (_d1itj) {
              return null;
            }, $j6dk5['removeChild'] = function (dij15) {}, $j6dk5;
          } else return fwqr8['_preCreateElement'](b$4mkc);
        }
      }
    }, fwqr8['onCreateInput'] = function (p9yug) {
      var mc4b$7 = fwqr8['_preCreateElement'](p9yug);return mc4b$7['focus'] = rf8qv['wxinputFocus'], mc4b$7['blur'] = rf8qv['wxinputblur'], mc4b$7['style'] = {}, mc4b$7['value'] = 0x0, mc4b$7['parentElement'] = {}, mc4b$7['placeholder'] = {}, mc4b$7['type'] = {}, mc4b$7['setColor'] = function (vqrwa8) {}, mc4b$7['setType'] = function (vawqu) {}, mc4b$7['setFontFace'] = function (y9hupg) {}, mc4b$7['addEventListener'] = function (ngyh9) {}, mc4b$7['contains'] = function (st2_30) {
        return null;
      }, mc4b$7['removeChild'] = function (ru9q) {}, mc4b$7;
    }, fwqr8['createShaderCondition'] = function (cbf4m7) {
      var rv7w = this,
          g9haqu = function () {
        var gxynlp = cbf4m7;return rv7w[cbf4m7['replace']('this.', '')];
      };return g9haqu;
    }, fwqr8['EnvConfig'] = null, fwqr8['window'] = null, fwqr8['_preCreateElement'] = null, fwqr8['_inited'] = ![], fwqr8['wxRequest'] = null, fwqr8['systemInfo'] = null, fwqr8['version'] = '0.0.1', fwqr8['isZiYu'] = ![], fwqr8['isPosMsgYu'] = ![], fwqr8['parseXMLFromString'] = function ($ck4) {
      var b$k4m, ruqa9;$ck4 = $ck4['replace'](/>\s+</g, '><');try {
        b$k4m = new window['Parser']['DOMParser']()['parseFromString']($ck4, 'text/xml');
      } catch (ruwqva) {
        throw '需要引入xml解析库文件';
      }return b$k4m;
    }, fwqr8['idx'] = 0x1, fwqr8;
  }(),
      vrw7f = function () {
    function w8mv7f() {}s_t1id(w8mv7f, 'laya.wx.mini.MiniImage');var a8wv = w8mv7f['prototype'];return a8wv['_loadImage'] = function ($b4mc7) {
      var xnlpgy = this,
          uhg9a = ![];$b4mc7['indexOf']('layaNativeDir/') == -0x1 && (uhg9a = !![], $b4mc7 = uqwvr['formatURL']($b4mc7));if (!$bc46k['getFileInfo']($b4mc7)) {
        if ($b4mc7['indexOf']('http://') != -0x1 || $b4mc7['indexOf']('https://') != -0x1) $bc46k['downImg']($b4mc7, new va9uqr(w8mv7f, w8mv7f['onDownImgCallBack'], [$b4mc7, xnlpgy]), $b4mc7);else w8mv7f['onCreateImage']($b4mc7, xnlpgy, !![]);
      } else w8mv7f['onCreateImage']($b4mc7, xnlpgy, !uhg9a);
    }, w8mv7f['onDownImgCallBack'] = function (ph9u, vwm78f, pgxl) {
      if (!pgxl) w8mv7f['onCreateImage'](ph9u, vwm78f);else vwm78f['onError'](null);
    }, w8mv7f['onCreateImage'] = function (c64$5, ru9qa, aq9v) {
      aq9v === void 0x0 && (aq9v = ![]);var mb7c$4;if (!aq9v) {
        var agpuh9 = $bc46k['getFileInfo'](c64$5),
            rhuq9a = agpuh9['md5'];mb7c$4 = $bc46k['getFileNativePath'](rhuq9a);
      } else mb7c$4 = c64$5;if (ru9qa['imgCache'] == null) ru9qa['imgCache'] = {};var $kd6;function ap9hgu() {
        $kd6['onload'] = null, $kd6['onerror'] = null, delete ru9qa['imgCache'][c64$5];
      };var t_i21 = function () {
        ap9hgu(), ru9qa['onLoaded']($kd6);
      },
          i56dk = function () {
        ap9hgu(), ru9qa['event']('error', 'Load image failed');
      };ru9qa['_type'] == 'nativeimage' ? ($kd6 = new gpn9yh['window']['Image'](), $kd6['crossOrigin'] = '', $kd6['onload'] = t_i21, $kd6['onerror'] = i56dk, $kd6['src'] = mb7c$4, ru9qa['imgCache'][c64$5] = $kd6) : new a9uqh['create'](mb7c$4, { 'onload': t_i21, 'onerror': i56dk, 'onCreate': function (bcfm4) {
          $kd6 = bcfm4, ru9qa['imgCache'][c64$5] = bcfm4;
        } });
    }, w8mv7f;
  }(),
      rf8qv = function () {
    function vrwau() {}return s_t1id(vrwau, 'laya.wx.mini.MiniInput'), vrwau['_createInputElement'] = function () {
      k4c56['_initInput'](k4c56['area'] = gpn9yh['createElement']('textarea')), k4c56['_initInput'](k4c56['input'] = gpn9yh['createElement']('input')), k4c56['inputContainer'] = gpn9yh['createElement']('div'), k4c56['inputContainer']['style']['position'] = 'absolute', k4c56['inputContainer']['style']['zIndex'] = 0x186a0, gpn9yh['container']['appendChild'](k4c56['inputContainer']), k4c56['inputContainer']['setPos'] = function (b7mc4f, rfwvq8) {
        k4c56['inputContainer']['style']['left'] = b7mc4f + 'px', k4c56['inputContainer']['style']['top'] = rfwvq8 + 'px';
      }, m47$bc['stage']['on']('resize', null, vrwau['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (t3s12_) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), war8v['_soundClass'] = dj51i_, war8v['_musicClass'] = dj51i_, window['_videoClass'] = _st231;
    }, vrwau['_onStageResize'] = function () {
      var s0t_2 = m47$bc['stage']['_canvasTransform']['identity']();s0t_2['scale'](gpn9yh['width'] / cjk56['canvas']['width'] / ghylpn['getPixelRatio'](), gpn9yh['height'] / cjk56['canvas']['height'] / ghylpn['getPixelRatio']());
    }, vrwau['wxinputFocus'] = function (ph9yu) {
      var yplnxo = k4c56['inputElement']['target'];if (yplnxo && !yplnxo['editable']) return;id_15['window']['wx']['offKeyboardConfirm'](), id_15['window']['wx']['offKeyboardInput'](), id_15['window']['wx']['showKeyboard']({ 'defaultValue': yplnxo['text'], 'maxLength': yplnxo['maxChars'], 'multiple': yplnxo['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function ($5kjd) {}, 'fail': function (k$56dj) {} }), id_15['window']['wx']['onKeyboardConfirm'](function (r7w) {
        var b$ck64 = r7w ? r7w['value'] : '';yplnxo['text'] = b$ck64, yplnxo['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), id_15['window']['wx']['onKeyboardInput'](function (sit21_) {
        var idj6k = sit21_ ? sit21_['value'] : '';if (!yplnxo['multiline']) {
          if (idj6k['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }yplnxo['text'] = idj6k, yplnxo['event']('input');
      });
    }, vrwau['inputEnter'] = function () {
      k4c56['inputElement']['target']['focus'] = ![];
    }, vrwau['wxinputblur'] = function () {
      vrwau['hideKeyboard']();
    }, vrwau['hideKeyboard'] = function () {
      id_15['window']['wx']['offKeyboardConfirm'](), id_15['window']['wx']['offKeyboardInput'](), id_15['window']['wx']['hideKeyboard']({ 'success': function (r9uqva) {
          console['log']('隐藏键盘');
        }, 'fail': function (q8wva) {
          console['log']('隐藏键盘出错:' + (q8wva ? q8wva['errMsg'] : ''));
        } });
    }, vrwau;
  }(),
      c64bk = function () {
    function hnlgy() {}s_t1id(hnlgy, 'laya.wx.mini.MiniLoader');var aq9urh = hnlgy['prototype'];return aq9urh['load'] = function (nxlpo, plgnyh, nghp, qwarv, k$c56) {
      nghp === void 0x0 && (nghp = !![]), k$c56 === void 0x0 && (k$c56 = ![]);var aq8rw = this;aq8rw['_url'] = nxlpo;if (nxlpo['indexOf']('data:image') === 0x0) aq8rw['_type'] = plgnyh = 'image';else aq8rw['_type'] = plgnyh || (plgnyh = aq8rw['getTypeFromUrl'](nxlpo));aq8rw['_cache'] = nghp, aq8rw['_data'] = null;var wvq8a = 'ascii';if (nxlpo['indexOf']('.fnt') != -0x1) wvq8a = 'utf8';else plgnyh == 'arraybuffer' && (wvq8a = '');;var $dkj6 = q9ugha['getFileExtension'](nxlpo);if (hnlgy['_fileTypeArr']['indexOf']($dkj6) != -0x1) id_15['EnvConfig']['load']['call'](this, nxlpo, plgnyh, nghp, qwarv, k$c56);else {
        if (!$bc46k['getFileInfo'](nxlpo)) {
          if (nxlpo['indexOf']('layaNativeDir/') != -0x1) {
            if (id_15['isZiYu']) {
              var b7$c = $bc46k['ziyuFileData'][nxlpo];aq8rw['onLoaded'](b7$c);return;
            } else {
              cosnole['log']('read read'), $bc46k['read'](nxlpo, wvq8a, new va9uqr(hnlgy, hnlgy['onReadNativeCallBack'], [wvq8a, nxlpo, plgnyh, nghp, qwarv, k$c56, aq8rw]));return;
            }
          }if (uqwvr['rootPath'] == '') var d61i = nxlpo;else d61i = nxlpo['split'](uqwvr['rootPath'])[0x0];nxlpo['indexOf']('http://') != -0x1 || nxlpo['indexOf']('https://') != -0x1 ? id_15['EnvConfig']['load']['call'](aq8rw, nxlpo, plgnyh, nghp, qwarv, k$c56) : $bc46k['readFile'](d61i, wvq8a, new va9uqr(hnlgy, hnlgy['onReadNativeCallBack'], [wvq8a, nxlpo, plgnyh, nghp, qwarv, k$c56, aq8rw]), nxlpo);
        } else id_15['EnvConfig']['load']['call'](this, nxlpo, plgnyh, nghp, qwarv, k$c56);
      }
    }, aq9urh['resMgrLoad'] = function (a9uqr, c4bm, kc$mb4, pyxnlo, r8vqwa, uvarwq, _1djt) {
      kc$mb4 === void 0x0 && (kc$mb4 = 0x0), pyxnlo === void 0x0 && (pyxnlo = ![]), r8vqwa === void 0x0 && (r8vqwa = ![]), uvarwq === void 0x0 && (uvarwq = 0x0), _1djt === void 0x0 && (_1djt = 0x3), a9uqr['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', a9uqr), id_15['EnvConfig']['resMgrLoad'](a9uqr, (tdi_j1, gyn9p, xlnpyg) => {
        hnlgy['prototype']['resMgrLoadCallBack'](tdi_j1, gyn9p, xlnpyg, c4bm);
      }, kc$mb4, pyxnlo, r8vqwa, uvarwq, _1djt);
    }, aq9urh['resMgrLoadCallBack'] = function (jdt_1, di_15, uy9, _02ts3) {
      console['log']('buff:::', jdt_1, uy9, $bc46k['fileNativeDir'] + '///' + $bc46k['fileListName']), _02ts3(jdt_1, di_15, uy9);
    }, aq9urh['clearRes'] = function (rvf78, aqvr9) {
      aqvr9 === void 0x0 && (aqvr9 = ![]);var d6 = this;d6['clearRes'](rvf78, aqvr9);var cjk = $bc46k['getFileInfo'](rvf78);if (cjk && (rvf78['indexOf']('http://') != -0x1 || rvf78['indexOf']('https://') != -0x1)) {
        var $j56ck = cjk['md5'],
            b48m = $bc46k['getFileNativePath']($j56ck);$bc46k['remove'](b48m);
      }
    }, hnlgy['onReadNativeCallBack'] = function (ph9guy, yh9gu, hgpa9, ahgu9, arv9q, cm47b, uhp, ck4b$6, s_1t23) {
      ahgu9 === void 0x0 && (ahgu9 = !![]), cm47b === void 0x0 && (cm47b = ![]), ck4b$6 === void 0x0 && (ck4b$6 = 0x0);if (!ck4b$6) {
        var urvwq;if (hgpa9 == 'json' || hgpa9 == 'atlas') urvwq = id_15['getJson'](s_1t23['data']);else hgpa9 == 'xml' ? urvwq = q9ugha['parseXMLFromString'](s_1t23['data']) : urvwq = s_1t23['data'];uhp['onLoaded'](urvwq), !id_15['isZiYu'] && id_15['isPosMsgYu'] && hgpa9 != 'arraybuffer' && wx['postMessage']({ 'url': yh9gu, 'data': urvwq, 'isLoad': !![] });
      } else ck4b$6 == 0x1 && id_15['EnvConfig']['load']['call'](uhp, yh9gu, hgpa9, ahgu9, arv9q, cm47b);
    }, s3z(hnlgy, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), hnlgy;
  }(),
      $bc46k = function (w7m8f) {
    function agh9p() {
      agh9p['__super']['call'](this);;
    }return s_t1id(agh9p, 'laya.wx.mini.MiniFileMgr', w7m8f), agh9p['isLoadFile'] = function (it_d1s) {
      return agh9p['_fileTypeArr']['indexOf'](it_d1s) != -0x1 ? !![] : ![];
    }, agh9p['getFileInfo'] = function (m84) {
      var sit_1d = m84['split']('?')[0x0],
          d56ki = agh9p['filesListObj'][sit_1d];if (d56ki == null) return null;else return d56ki;return null;
    }, agh9p['onFileUpdate'] = function (w78frv, $bmc4k) {
      var rqf8 = w78frv['split']('/'),
          q9uhag = rqf8[rqf8['length'] - 0x1],
          qar8v = agh9p['getFileInfo']($bmc4k);if (qar8v == null) agh9p['onSaveFile']($bmc4k, q9uhag);else {
        if (qar8v['readyUrl'] != $bmc4k) agh9p['remove'](q9uhag, $bmc4k);
      }
    }, agh9p['exits'] = function (u9rqv, _t0s23) {
      var mw8bf = agh9p['getFileNativePath'](u9rqv);agh9p['fs']['getFileInfo']({ 'filePath': mw8bf, 'success': function (s2_3t0) {
          _t0s23 != null && _t0s23['runWith']([0x0, s2_3t0]);
        }, 'fail': function (h9ar) {
          _t0s23 != null && _t0s23['runWith']([0x1, h9ar]);
        } });
    }, agh9p['read'] = function (i_51d, rq8, j_i5d, fm8wv) {
      rq8 === void 0x0 && (rq8 = 'ascill'), fm8wv === void 0x0 && (fm8wv = '');var quhr9;fm8wv != '' ? quhr9 = agh9p['getFileNativePath'](i_51d) : quhr9 = i_51d, agh9p['fs']['readFile']({ 'filePath': quhr9, 'encoding': rq8, 'success': function (_20st) {
          j_i5d != null && j_i5d['runWith']([0x0, _20st]);
        }, 'fail': function (yphgnl) {
          if (yphgnl && fm8wv != '') agh9p['down'](fm8wv, rq8, j_i5d, fm8wv);else j_i5d != null && j_i5d['runWith']([0x1]);
        } });
    }, agh9p['readNativeFile'] = function (k54c6$, wrvqf8) {
      agh9p['fs']['readFile']({ 'filePath': k54c6$, 'encoding': '', 'success': function (pgynh) {
          wrvqf8 != null && wrvqf8['runWith']([0x0]);
        }, 'fail': function (k4b) {
          wrvqf8 != null && wrvqf8['runWith']([0x1]);
        } });
    }, agh9p['down'] = function (aqvur9, k$d6, j6$k, u9varq) {
      k$d6 === void 0x0 && (k$d6 = 'ascill'), u9varq === void 0x0 && (u9varq = '');var fm8wv7 = agh9p['getFileNativePath'](u9varq),
          qa8wv = agh9p['wxdown']({ 'url': aqvur9, 'filePath': fm8wv7, 'success': function (yph9gu) {
          if (yph9gu['statusCode'] === 0xc8) agh9p['readFile'](yph9gu['filePath'], k$d6, j6$k, u9varq);
        }, 'fail': function (hapug) {
          j6$k != null && j6$k['runWith']([0x1, hapug]);
        } });qa8wv['onProgressUpdate'](function (hyn9) {
        j6$k != null && j6$k['runWith']([0x2, hyn9['progress']]);
      });
    }, agh9p['readFile'] = function (_st03, uhyg9p, _dji51, vfw7) {
      uhyg9p === void 0x0 && (uhyg9p = 'ascill'), vfw7 === void 0x0 && (vfw7 = ''), agh9p['fs']['readFile']({ 'filePath': _st03, 'encoding': uhyg9p, 'success': function (kbm$4) {
          if (_st03['indexOf']('http://') != -0x1 || _st03['indexOf']('https://') != -0x1) agh9p['onFileUpdate'](_st03, vfw7);_dji51 != null && _dji51['runWith']([0x0, kbm$4]);
        }, 'fail': function (mfcb74) {
          if (mfcb74) _dji51 != null && _dji51['runWith']([0x1, mfcb74]);
        } });
    }, agh9p['downImg'] = function (gxpl, j_it1d, ypghu) {
      ypghu === void 0x0 && (ypghu = '');var yxng = agh9p['wxdown']({ 'url': gxpl, 'success': function (d5kji) {
          d5kji['statusCode'] === 0xc8 && agh9p['copyFile'](d5kji['tempFilePath'], ypghu, j_it1d);
        }, 'fail': function (w8mvf) {
          j_it1d != null && j_it1d['runWith']([0x1, w8mvf]);
        } });
    }, agh9p['copyFile'] = function (wvraq8, $6b4k, j6$5) {
      var rw8aqv = wvraq8['split']('/'),
          apgu = rw8aqv[rw8aqv['length'] - 0x1],
          hpnlgy = $6b4k['split']('?')[0x0],
          wvf8r7 = agh9p['getFileInfo']($6b4k),
          uraw = agh9p['getFileNativePath'](apgu);agh9p['fs']['copyFile']({ 'srcPath': wvraq8, 'destPath': uraw, 'success': function ($k5j6d) {
          if (!wvf8r7) agh9p['onSaveFile']($6b4k, apgu), j6$5 != null && j6$5['runWith']([0x0]);else {
            if (wvf8r7['readyUrl'] != $6b4k) agh9p['remove'](apgu, $6b4k, j6$5);
          }
        }, 'fail': function (q8arvw) {
          j6$5 != null && j6$5['runWith']([0x1, q8arvw]);
        } });
    }, agh9p['getFileNativePath'] = function (aug9hp) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + aug9hp;
    }, agh9p['remove'] = function ($5cjk6, hlpny, fvr78w) {
      hlpny === void 0x0 && (hlpny = '');var aw8q = agh9p['getFileInfo'](hlpny),
          nlygph = agh9p['getFileNativePath'](aw8q['md5']);m47$bc['loader']['clearRes'](aw8q['readyUrl']), agh9p['fs']['unlink']({ 'filePath': nlygph, 'success': function (hqag) {
          if (hlpny != '') agh9p['onSaveFile'](hlpny, $5cjk6);fvr78w != null && fvr78w['runWith']([0x0]);
        }, 'fail': function (d1i56j) {} });
    }, agh9p['onSaveFile'] = function (wuarqv, plnyox) {
      var i1j5_ = wuarqv['split']('?')[0x0];agh9p['filesListObj'][i1j5_] = { 'md5': plnyox, 'readyUrl': wuarqv }, agh9p['fs']['writeFile']({ 'filePath': agh9p['fileNativeDir'] + '/' + agh9p['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](agh9p['filesListObj']), 'success': function (hgylnp) {
          console['log']('写入测试测试成功：', hgylnp);
        }, 'fail': function (bkm$c4) {
          console['log']('写入测试测试失败：', bkm$c4);
        } });
    }, agh9p['existDir'] = function (oplynx, f7m48b) {
      agh9p['fs']['mkdir']({ 'dirPath': oplynx, 'success': function (r8vawq) {
          f7m48b != null && f7m48b['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (guaph) {
          if (guaph['errMsg']['indexOf']('file already exists') != -0x1) agh9p['readSync'](agh9p['fileListName'], 'utf8', f7m48b);else f7m48b != null && f7m48b['runWith']([0x1, guaph]);
        } });
    }, agh9p['readSync'] = function (kc$564, pgua9, ga9pu, a9urqv) {
      pgua9 === void 0x0 && (pgua9 = 'ascill'), a9urqv === void 0x0 && (a9urqv = '');var gnyhp = agh9p['getFileNativePath'](kc$564),
          ug9qha;try {
        ug9qha = agh9p['fs']['readFileSync'](gnyhp), ga9pu != null && ga9pu['runWith']([0x0, { 'data': ug9qha }]);
      } catch (b46c) {
        ga9pu != null && ga9pu['runWith']([0x1]);
      }
    }, agh9p['readCache'] = function () {}, agh9p['writeCache'] = function (cbmf74) {
      var np9h = readyUrl['split']('?')[0x0];agh9p['filesListObj'][np9h] = { 'md5': md5Name, 'readyUrl': readyUrl }, agh9p['fs']['writeFile']({ 'filePath': agh9p['fileNativeDir'] + '/' + agh9p['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](agh9p['filesListObj']), 'success': function (zst203) {}, 'fail': function (bmc74f) {} });
    }, agh9p['setNativeFileDir'] = function (c4bm$7) {
      agh9p['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + c4bm$7;
    }, agh9p['filesListObj'] = {}, agh9p['fileNativeDir'] = null, agh9p['fileListName'] = 'layaairfiles.txt', agh9p['ziyuFileData'] = {}, s3z(agh9p, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), agh9p;
  }(bcmk$),
      dj51i_ = function (b$ck4m) {
    function xployn() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], xployn['__super']['call'](this), this['_sound'] = xployn['_createSound'](), this['_chanell'] = new d_1j(this['_sound']);
    }s_t1id(xployn, 'laya.wx.mini.MiniSound', b$ck4m);var wf78v = xployn['prototype'];return wf78v['load'] = function (_ids1t) {
      var pgynlx = this;_ids1t = uqwvr['formatURL'](_ids1t), this['url'] = _ids1t;if (xployn['_audioCache'][_ids1t]) {
        this['event']('complete');return;
      }function fwvq8() {
        if (xployn['_null'] != undefined) pgynlx['_sound']['onCanplay'](xployn['_null']), pgynlx['_sound']['onError'](xployn['_null']);else try {
          pgynlx['_sound']['onCanplay'](null), pgynlx['_sound']['onError'](null), xployn['_null'] = null;
        } catch (t13_s2) {
          console['warn']('[wxmini] _clearSound:' + t13_s2), pgynlx['_sound']['onCanplay'](arqwvu), pgynlx['_sound']['onError'](arqwvu), xployn['_null'] = arqwvu;
        }
      }function uwvra() {
        _1d5ij['loaded'] = !![], _1d5ij['event']('complete'), xployn['_audioCache'][_1d5ij['url']] = _1d5ij;
      }function lxoypn(h9auqr) {
        console['error']('errCode=' + h9auqr['errCode'] + '  errMsg=' + h9auqr['errMsg']), _1d5ij['event']('error');
      }function arqwvu() {}this['_sound']['onCanplay'](uwvra), this['_sound']['onError'](lxoypn), this['_sound']['src'] = _ids1t;var _1d5ij = this;
    }, wf78v['play'] = function (k5c4$, $4mck) {
      k5c4$ === void 0x0 && (k5c4$ = 0x0), $4mck === void 0x0 && ($4mck = 0x0);var _tds1, xnylpg;if (this['url'] == war8v['_tMusic']) {
        if (!xployn['_musicAudio']) xployn['_musicAudio'] = this['_sound'];_tds1 = xployn['_musicAudio'], xnylpg = this['_chanell'];
      } else _tds1 = this['_sound'], xnylpg = this['_chanell'];return _tds1['src'] = this['url'], _tds1['startTime'] = 0x0, xnylpg['isStopped'] && (xnylpg['url'] = this['url'], xnylpg['loops'] = $4mck, xnylpg['startTime'] = k5c4$, xnylpg['play'](), war8v['addChannel'](xnylpg)), xnylpg;
    }, wf78v['dispose'] = function () {
      var i_s21 = xployn['_audioCache'][this['url']];i_s21 && (i_s21['src'] = '', delete xployn['_audioCache'][this['url']]);
    }, nlxp(0x0, wf78v, 'duration', function () {
      return this['_sound']['duration'];
    }), xployn['_createSound'] = function () {
      xployn['_id']++;var fw7v8 = id_15['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return fw7v8;
    }, xployn['_musicAudio'] = null, xployn['_id'] = 0x0, xployn['_audioCache'] = {}, xployn['_null'] = undefined, xployn;
  }(bcmk$),
      d_1j = function (f4) {
    function gnlhp(rvuq9) {
      this['_audio'] = null, this['_onEnd'] = null, gnlhp['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = rvuq9, this['_onEnd'] = q9ugha['bind'](this['__onEnd'], this), rvuq9['onEnded'](this['_onEnd']);
    }s_t1id(gnlhp, 'laya.wx.mini.MiniSoundChannel', f4);var hra = gnlhp['prototype'];return hra['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (m47$bc['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hra['__onNull'] = function () {}, hra['play'] = function () {
      this['isStopped'] = ![], war8v['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, hra['stop'] = function () {
      this['isStopped'] = !![], war8v['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, hra['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, hra['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], war8v['addChannel'](this), this['_audio']['play']();
    }, nlxp(0x0, hra, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), nlxp(0x0, hra, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), nlxp(0x0, hra, 'volume', function () {
      return 0x1;
    }, function (s_12t) {}), gnlhp['_null'] = undefined, gnlhp;
  }(qav9ur),
      _st231 = function () {
    function mk4b$c() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = id_15['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }s_t1id(mk4b$c, 'laya.wx.mini.MiniVideo');var t1j_id = mk4b$c['prototype'];return t1j_id['on'] = function (rqa9v, k6jc, lxnygp) {
      if (rqa9v == 'loadedmetadata') this['onPlayFunc'] = lxnygp['bind'](k6jc), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else rqa9v == 'ended' && (this['onEndedFunC'] = lxnygp['bind'](k6jc), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, t1j_id['onTimeUpdateFunc'] = function (wm7vf8) {
      this['position'] = wm7vf8['position'], this['_duration'] = wm7vf8['duration'];
    }, t1j_id['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, t1j_id['onended'] = function (fvmw8, xloy) {
      this['onEndedFunC'] = xloy['bind'](fvmw8), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, t1j_id['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, t1j_id['off'] = function (qvr8aw, qrw8a, qhau9) {
      if (qvr8aw == 'loadedmetadata') this['onPlayFunc'] = qhau9['bind'](qrw8a), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else qvr8aw == 'ended' && (this['onEndedFunC'] = qhau9['bind'](qrw8a), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, t1j_id['load'] = function (r9qv) {
      if (!this['videoElement']) return;this['videoElement']['src'] = r9qv;
    }, t1j_id['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, t1j_id['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, t1j_id['size'] = function ($k4mbc, t2z3s) {
      if (!this['videoElement']) return;this['videoElement']['width'] = $k4mbc, this['videoElement']['height'] = t2z3s;
    }, t1j_id['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, t1j_id['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, nlxp(0x0, t1j_id, 'duration', function () {
      return this['_duration'];
    }), nlxp(0x0, t1j_id, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (plonx) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = plonx;
    }), nlxp(0x0, t1j_id, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), nlxp(0x0, t1j_id, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), nlxp(0x0, t1j_id, 'ended', function () {
      return this['videoend'];
    }), nlxp(0x0, t1j_id, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (f8m74b) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = f8m74b;
    }), nlxp(0x0, t1j_id, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (guhpa) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = guhpa;
    }), nlxp(0x0, t1j_id, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (pyhnl) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = pyhnl;
    }), nlxp(0x0, t1j_id, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), nlxp(0x0, t1j_id, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (tjid_) {
      if (!this['videoElement']) return;this['videoElement']['x'] = tjid_;
    }), nlxp(0x0, t1j_id, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (ji5_d) {
      if (!this['videoElement']) return;this['videoElement']['y'] = ji5_d;
    }), nlxp(0x0, t1j_id, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), nlxp(0x0, t1j_id, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (t2s3z) {
      if (!this['videoElement']) return;this['videoElement']['src'] = t2s3z;
    }), nlxp(0x0, t1j_id, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (yplgx) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = yplgx;
    }), nlxp(0x0, t1j_id, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function ($b4m7c) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = $b4m7c;
    }), mk4b$c;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var i5djk6 in Laya) {
    var q9uvar = Laya[i5djk6];q9uvar && q9uvar['__isclass'] && (exports[i5djk6] = q9uvar);
  }
});