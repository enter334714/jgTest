var g = wx.u$;
(function (window, document, t6qrd) {
  var nw_ek = t6qrd['un'],
      kjyn_g = t6qrd['uns'],
      se8wh = t6qrd['static'],
      iyxjg = t6qrd['class'],
      mxci = t6qrd['getset'],
      ky_g = t6qrd['__newvec'],
      lomcpz = laya['utils']['Browser'],
      lb27$ = laya['events']['Event'],
      enwj_ = laya['events']['EventDispatcher'],
      u2$v9 = laya['resource']['HTMLImage'],
      ud2q = laya['utils']['Handler'],
      has08e = laya['display']['Input'],
      nj_wk = laya['net']['Loader'],
      jy4xi = laya['maths']['Matrix'],
      cxip = laya['renders']['Render'],
      icxgp4 = laya['utils']['RunDriver'],
      vuqf = laya['media']['Sound'],
      pm4cx = laya['media']['SoundChannel'],
      d2v5qu = laya['media']['SoundManager'],
      knjw = laya['display']['Stage'],
      $lz7o = laya['net']['URL'],
      ews = laya['utils']['Utils'],
      aw8eh = function () {
    function b97$v() {}return iyxjg(b97$v, 'laya.wx.mini.MiniAdpter'), b97$v['getJson'] = function (p4omcx) {
      return JSON['parse'](p4omcx);
    }, b97$v['init'] = function (jnkg_y, ocxzp) {
      jnkg_y === void 0x0 && (jnkg_y = ![]), ocxzp === void 0x0 && (ocxzp = ![]);if (b97$v['_inited']) return;b97$v['window'] = window;if (b97$v['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;b97$v['_inited'] = !![], b97$v['isZiYu'] = ocxzp, b97$v['isPosMsgYu'] = jnkg_y, b97$v['EnvConfig'] = {}, !b97$v['isZiYu'] && (mzlo$7['setNativeFileDir']('/layaairGame'), mzlo$7['existDir'](mzlo$7['fileNativeDir'], ud2q['create'](b97$v, b97$v['onMkdirCallBack']))), b97$v['window']['focus'] = function () {}, t6qrd['getUrlPath'] = function () {}, b97$v['window']['logtime'] = function (jn_wy) {}, b97$v['window']['alertTimeLog'] = function (kh8e_) {}, b97$v['window']['resetShareInfo'] = function () {}, b97$v['window']['CanvasRenderingContext2D'] = function () {}, b97$v['window']['CanvasRenderingContext2D']['prototype'] = b97$v['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], b97$v['window']['document']['body']['appendChild'] = function () {}, b97$v['EnvConfig']['pixelRatioInt'] = 0x0, icxgp4['getPixelRatio'] = b97$v['pixelRatio'], b97$v['_preCreateElement'] = lomcpz['createElement'], lomcpz['createElement'] = b97$v['createElement'], icxgp4['createShaderCondition'] = b97$v['createShaderCondition'], ews['parseXMLFromString'] = b97$v['parseXMLFromString'], has08e['_createInputElement'] = f36rt['_createInputElement'], b97$v['EnvConfig']['load'] = nj_wk['prototype']['load'], nj_wk['prototype']['load'] = a8hs0['prototype']['load'], b97$v['isZiYu'] && jnkg_y && wx['onMessage'](function (f6qdu5) {
        f6qdu5['isLoad'] && (mzlo$7['ziyuFileData'][f6qdu5['url']] = f6qdu5['data']);
      });
    }, b97$v['onMkdirCallBack'] = function (l97$zb, mpzco) {
      if (!l97$zb) mzlo$7['filesListObj'] = JSON['parse'](mpzco['data']);
    }, b97$v['pixelRatio'] = function () {
      if (!b97$v['EnvConfig']['pixelRatioInt']) try {
        var mo7lz = wx['getSystemInfoSync']();return b97$v['EnvConfig']['pixelRatioInt'] = mo7lz['pixelRatio'], mo7lz = mo7lz, mo7lz['pixelRatio'];
      } catch (mozcpx) {}return b97$v['EnvConfig']['pixelRatioInt'];
    }, b97$v['createElement'] = function (rt6f3d) {
      if (rt6f3d == 'canvas') {
        var ix4cp;return b97$v['idx'] == 0x1 ? b97$v['isZiYu'] ? (ix4cp = sharedCanvas, ix4cp['style'] = {}) : ix4cp = window['canvas'] : ix4cp = window['wx']['createCanvas'](), b97$v['idx']++, ix4cp;
      } else {
        if (rt6f3d == 'textarea' || rt6f3d == 'input') return b97$v['onCreateInput'](rt6f3d);else {
          if (rt6f3d == 'div') {
            var jynikg = b97$v['_preCreateElement'](rt6f3d);return jynikg['contains'] = function (rf65q) {
              return null;
            }, jynikg['removeChild'] = function (lzpco) {}, jynikg;
          } else return b97$v['_preCreateElement'](rt6f3d);
        }
      }
    }, b97$v['onCreateInput'] = function ($9l7z) {
      var wh8k_ = b97$v['_preCreateElement']($9l7z);return wh8k_['focus'] = f36rt['wxinputFocus'], wh8k_['blur'] = f36rt['wxinputblur'], wh8k_['style'] = {}, wh8k_['value'] = 0x0, wh8k_['parentElement'] = {}, wh8k_['placeholder'] = {}, wh8k_['type'] = {}, wh8k_['setColor'] = function (s_eh8w) {}, wh8k_['setType'] = function (nwyj_) {}, wh8k_['setFontFace'] = function (ekn) {}, wh8k_['addEventListener'] = function (o$7bz) {}, wh8k_['contains'] = function (_ewhk) {
        return null;
      }, wh8k_['removeChild'] = function (n4) {}, wh8k_;
    }, b97$v['createShaderCondition'] = function (lo$m) {
      var gknj = this,
          zc7o = function () {
        var b97$lz = lo$m;return gknj[lo$m['replace']('this.', '')];
      };return zc7o;
    }, b97$v['EnvConfig'] = null, b97$v['window'] = null, b97$v['_preCreateElement'] = null, b97$v['_inited'] = ![], b97$v['wxRequest'] = null, b97$v['systemInfo'] = null, b97$v['version'] = '0.0.1', b97$v['isZiYu'] = ![], b97$v['isPosMsgYu'] = ![], b97$v['parseXMLFromString'] = function (fr6qtd) {
      var vfuqd5, g4iynj;fr6qtd = fr6qtd['replace'](/>\s+</g, '><');try {
        vfuqd5 = new window['Parser']['DOMParser']()['parseFromString'](fr6qtd, 'text/xml');
      } catch (yn_kj) {
        throw '需要引入xml解析库文件';
      }return vfuqd5;
    }, b97$v['idx'] = 0x1, b97$v;
  }(),
      kngj_y = function () {
    function ea8hws() {}iyxjg(ea8hws, 'laya.wx.mini.MiniImage');var clzomp = ea8hws['prototype'];return clzomp['_loadImage'] = function (zo7b$l) {
      var ngj_y = this,
          cmop4x = ![];zo7b$l['indexOf']('layaNativeDir/') == -0x1 && (cmop4x = !![], zo7b$l = $lz7o['formatURL'](zo7b$l));if (!mzlo$7['getFileInfo'](zo7b$l)) {
        if (zo7b$l['indexOf']('http://') != -0x1 || zo7b$l['indexOf']('https://') != -0x1) mzlo$7['downImg'](zo7b$l, new ud2q(ea8hws, ea8hws['onDownImgCallBack'], [zo7b$l, ngj_y]), zo7b$l);else ea8hws['onCreateImage'](zo7b$l, ngj_y, !![]);
      } else ea8hws['onCreateImage'](zo7b$l, ngj_y, !cmop4x);
    }, ea8hws['onDownImgCallBack'] = function (f613r, mxcop4, cpzoml) {
      if (!cpzoml) ea8hws['onCreateImage'](f613r, mxcop4);else mxcop4['onError'](null);
    }, ea8hws['onCreateImage'] = function (ubv529, jxgy4, frq6t) {
      frq6t === void 0x0 && (frq6t = ![]);var bvu259;if (!frq6t) {
        var _e8shw = mzlo$7['getFileInfo'](ubv529),
            f63rtd = _e8shw['md5'];bvu259 = mzlo$7['getFileNativePath'](f63rtd);
      } else bvu259 = ubv529;if (jxgy4['imgCache'] == null) jxgy4['imgCache'] = {};var kwjyn;function gkjin() {
        kwjyn['onload'] = null, kwjyn['onerror'] = null, delete jxgy4['imgCache'][ubv529];
      };var du5fq6 = function () {
        gkjin(), jxgy4['onLoaded'](kwjyn);
      },
          f3rt61 = function () {
        gkjin(), jxgy4['event']('error', 'Load image failed');
      };jxgy4['_type'] == 'nativeimage' ? (kwjyn = new lomcpz['window']['Image'](), kwjyn['crossOrigin'] = '', kwjyn['onload'] = du5fq6, kwjyn['onerror'] = f3rt61, kwjyn['src'] = bvu259, jxgy4['imgCache'][ubv529] = kwjyn) : new u2$v9['create'](bvu259, { 'onload': du5fq6, 'onerror': f3rt61, 'onCreate': function (g4ixj) {
          kwjyn = g4ixj, jxgy4['imgCache'][ubv529] = g4ixj;
        } });
    }, ea8hws;
  }(),
      f36rt = function () {
    function jkwn_y() {}return iyxjg(jkwn_y, 'laya.wx.mini.MiniInput'), jkwn_y['_createInputElement'] = function () {
      has08e['_initInput'](has08e['area'] = lomcpz['createElement']('textarea')), has08e['_initInput'](has08e['input'] = lomcpz['createElement']('input')), has08e['inputContainer'] = lomcpz['createElement']('div'), has08e['inputContainer']['style']['position'] = 'absolute', has08e['inputContainer']['style']['zIndex'] = 0x186a0, lomcpz['container']['appendChild'](has08e['inputContainer']), has08e['inputContainer']['setPos'] = function (xcgip, _ek8n) {
        has08e['inputContainer']['style']['left'] = xcgip + 'px', has08e['inputContainer']['style']['top'] = _ek8n + 'px';
      }, t6qrd['stage']['on']('resize', null, jkwn_y['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (comzx) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), d2v5qu['_soundClass'] = ekj, d2v5qu['_musicClass'] = ekj, window['_videoClass'] = d6u5fq;
    }, jkwn_y['_onStageResize'] = function () {
      var dvqu25 = t6qrd['stage']['_canvasTransform']['identity']();dvqu25['scale'](lomcpz['width'] / cxip['canvas']['width'] / icxgp4['getPixelRatio'](), lomcpz['height'] / cxip['canvas']['height'] / icxgp4['getPixelRatio']());
    }, jkwn_y['wxinputFocus'] = function (hswa8e) {
      var se8hwa = has08e['inputElement']['target'];if (se8hwa && !se8hwa['editable']) return;aw8eh['window']['wx']['offKeyboardConfirm'](), aw8eh['window']['wx']['offKeyboardInput'](), aw8eh['window']['wx']['showKeyboard']({ 'defaultValue': se8hwa['text'], 'maxLength': se8hwa['maxChars'], 'multiple': se8hwa['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (jxiy4) {}, 'fail': function (ehsa8) {} }), aw8eh['window']['wx']['onKeyboardConfirm'](function (saew8) {
        var ijkgyn = saew8 ? saew8['value'] : '';se8hwa['text'] = ijkgyn, se8hwa['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), aw8eh['window']['wx']['onKeyboardInput'](function (vd52qu) {
        var mzpcl = vd52qu ? vd52qu['value'] : '';if (!se8hwa['multiline']) {
          if (mzpcl['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }se8hwa['text'] = mzpcl, se8hwa['event']('input');
      });
    }, jkwn_y['inputEnter'] = function () {
      has08e['inputElement']['target']['focus'] = ![];
    }, jkwn_y['wxinputblur'] = function () {
      jkwn_y['hideKeyboard']();
    }, jkwn_y['hideKeyboard'] = function () {
      aw8eh['window']['wx']['offKeyboardConfirm'](), aw8eh['window']['wx']['offKeyboardInput'](), aw8eh['window']['wx']['hideKeyboard']({ 'success': function (mlco7) {
          console['log']('隐藏键盘');
        }, 'fail': function (_kwyjn) {
          console['log']('隐藏键盘出错:' + (_kwyjn ? _kwyjn['errMsg'] : ''));
        } });
    }, jkwn_y;
  }(),
      a8hs0 = function () {
    function fuqd5() {}iyxjg(fuqd5, 'laya.wx.mini.MiniLoader');var dqfuv = fuqd5['prototype'];return dqfuv['load'] = function (lomzc7, has80, cxpmzo, gpi4x, copmz) {
      cxpmzo === void 0x0 && (cxpmzo = !![]), copmz === void 0x0 && (copmz = ![]);var ywjnk_ = this;ywjnk_['_url'] = lomzc7;if (lomzc7['indexOf']('data:image') === 0x0) ywjnk_['_type'] = has80 = 'image';else ywjnk_['_type'] = has80 || (has80 = ywjnk_['getTypeFromUrl'](lomzc7));ywjnk_['_cache'] = cxpmzo, ywjnk_['_data'] = null;var mcloz7 = 'ascii';if (lomzc7['indexOf']('.fnt') != -0x1) mcloz7 = 'utf8';else has80 == 'arraybuffer' && (mcloz7 = '');;var s0hae8 = ews['getFileExtension'](lomzc7);if (fuqd5['_fileTypeArr']['indexOf'](s0hae8) != -0x1) aw8eh['EnvConfig']['load']['call'](this, lomzc7, has80, cxpmzo, gpi4x, copmz);else {
        if (!mzlo$7['getFileInfo'](lomzc7)) {
          if (lomzc7['indexOf']('layaNativeDir/') != -0x1) {
            if (aw8eh['isZiYu']) {
              var i4xygj = mzlo$7['ziyuFileData'][lomzc7];ywjnk_['onLoaded'](i4xygj);return;
            } else {
              cosnole['log']('read read'), mzlo$7['read'](lomzc7, mcloz7, new ud2q(fuqd5, fuqd5['onReadNativeCallBack'], [mcloz7, lomzc7, has80, cxpmzo, gpi4x, copmz, ywjnk_]));return;
            }
          }if ($lz7o['rootPath'] == '') var nk_wjy = lomzc7;else nk_wjy = lomzc7['split']($lz7o['rootPath'])[0x0];lomzc7['indexOf']('http://') != -0x1 || lomzc7['indexOf']('https://') != -0x1 ? aw8eh['EnvConfig']['load']['call'](ywjnk_, lomzc7, has80, cxpmzo, gpi4x, copmz) : mzlo$7['readFile'](nk_wjy, mcloz7, new ud2q(fuqd5, fuqd5['onReadNativeCallBack'], [mcloz7, lomzc7, has80, cxpmzo, gpi4x, copmz, ywjnk_]), lomzc7);
        } else aw8eh['EnvConfig']['load']['call'](this, lomzc7, has80, cxpmzo, gpi4x, copmz);
      }
    }, dqfuv['resMgrLoad'] = function (aweh, xijy4, rt6df3, a8he0, wenkj, $92, whse_8) {
      rt6df3 === void 0x0 && (rt6df3 = 0x0), a8he0 === void 0x0 && (a8he0 = ![]), wenkj === void 0x0 && (wenkj = ![]), $92 === void 0x0 && ($92 = 0x0), whse_8 === void 0x0 && (whse_8 = 0x3), aweh['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', aweh), aw8eh['EnvConfig']['resMgrLoad'](aweh, (rq6fdt, tr6, new8_k) => {
        fuqd5['prototype']['resMgrLoadCallBack'](rq6fdt, tr6, new8_k, xijy4);
      }, rt6df3, a8he0, wenkj, $92, whse_8);
    }, dqfuv['resMgrLoadCallBack'] = function (w8_ek, q29, f6rdqt, yi4jxg) {
      console['log']('buff:::', w8_ek, f6rdqt, mzlo$7['fileNativeDir'] + '///' + mzlo$7['fileListName']), yi4jxg(w8_ek, q29, f6rdqt);
    }, dqfuv['clearRes'] = function ($zm7, he_sw) {
      he_sw === void 0x0 && (he_sw = ![]);var wjky = this;wjky['clearRes']($zm7, he_sw);var ah80se = mzlo$7['getFileInfo']($zm7);if (ah80se && ($zm7['indexOf']('http://') != -0x1 || $zm7['indexOf']('https://') != -0x1)) {
        var jk_enw = ah80se['md5'],
            u25 = mzlo$7['getFileNativePath'](jk_enw);mzlo$7['remove'](u25);
      }
    }, fuqd5['onReadNativeCallBack'] = function (dqu6f5, nk8we, hwke_, j_kg, nygjik, $7moz, q2d5v, knwe, t3rd6f) {
      j_kg === void 0x0 && (j_kg = !![]), $7moz === void 0x0 && ($7moz = ![]), knwe === void 0x0 && (knwe = 0x0);if (!knwe) {
        var _he8s;if (hwke_ == 'json' || hwke_ == 'atlas') _he8s = aw8eh['getJson'](t3rd6f['data']);else hwke_ == 'xml' ? _he8s = ews['parseXMLFromString'](t3rd6f['data']) : _he8s = t3rd6f['data'];q2d5v['onLoaded'](_he8s), !aw8eh['isZiYu'] && aw8eh['isPosMsgYu'] && hwke_ != 'arraybuffer' && wx['postMessage']({ 'url': nk8we, 'data': _he8s, 'isLoad': !![] });
      } else knwe == 0x1 && aw8eh['EnvConfig']['load']['call'](q2d5v, nk8we, hwke_, j_kg, nygjik, $7moz);
    }, se8wh(fuqd5, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), fuqd5;
  }(),
      mzlo$7 = function (f5du6q) {
    function $zlob7() {
      $zlob7['__super']['call'](this);;
    }return iyxjg($zlob7, 'laya.wx.mini.MiniFileMgr', f5du6q), $zlob7['isLoadFile'] = function ($2u9b) {
      return $zlob7['_fileTypeArr']['indexOf']($2u9b) != -0x1 ? !![] : ![];
    }, $zlob7['getFileInfo'] = function (pmcxi4) {
      var pozcm = pmcxi4['split']('?')[0x0],
          k_ngj = $zlob7['filesListObj'][pozcm];if (k_ngj == null) return null;else return k_ngj;return null;
    }, $zlob7['onFileUpdate'] = function (ngjy4i, saw8e) {
      var mp4o = ngjy4i['split']('/'),
          dv5q = mp4o[mp4o['length'] - 0x1],
          xjy4ig = $zlob7['getFileInfo'](saw8e);if (xjy4ig == null) $zlob7['onSaveFile'](saw8e, dv5q);else {
        if (xjy4ig['readyUrl'] != saw8e) $zlob7['remove'](dv5q, saw8e);
      }
    }, $zlob7['exits'] = function (jyk_w, bu92v) {
      var y_jngk = $zlob7['getFileNativePath'](jyk_w);$zlob7['fs']['getFileInfo']({ 'filePath': y_jngk, 'success': function (f6u5dq) {
          bu92v != null && bu92v['runWith']([0x0, f6u5dq]);
        }, 'fail': function (sehaw) {
          bu92v != null && bu92v['runWith']([0x1, sehaw]);
        } });
    }, $zlob7['read'] = function ($7zob, mpcxz, r6tdf, h8ae0) {
      mpcxz === void 0x0 && (mpcxz = 'ascill'), h8ae0 === void 0x0 && (h8ae0 = '');var o7z$lb;h8ae0 != '' ? o7z$lb = $zlob7['getFileNativePath']($7zob) : o7z$lb = $7zob, $zlob7['fs']['readFile']({ 'filePath': o7z$lb, 'encoding': mpcxz, 'success': function (qu65d) {
          r6tdf != null && r6tdf['runWith']([0x0, qu65d]);
        }, 'fail': function (_jwkn) {
          if (_jwkn && h8ae0 != '') $zlob7['down'](h8ae0, mpcxz, r6tdf, h8ae0);else r6tdf != null && r6tdf['runWith']([0x1]);
        } });
    }, $zlob7['readNativeFile'] = function (d6tf3, l9$27) {
      $zlob7['fs']['readFile']({ 'filePath': d6tf3, 'encoding': '', 'success': function (_8wne) {
          l9$27 != null && l9$27['runWith']([0x0]);
        }, 'fail': function (qu5vdf) {
          l9$27 != null && l9$27['runWith']([0x1]);
        } });
    }, $zlob7['down'] = function (ob$z7, rdft3, _wkenj, hawes8) {
      rdft3 === void 0x0 && (rdft3 = 'ascill'), hawes8 === void 0x0 && (hawes8 = '');var ipxc4m = $zlob7['getFileNativePath'](hawes8),
          o$ml = $zlob7['wxdown']({ 'url': ob$z7, 'filePath': ipxc4m, 'success': function (zolcm7) {
          if (zolcm7['statusCode'] === 0xc8) $zlob7['readFile'](zolcm7['filePath'], rdft3, _wkenj, hawes8);
        }, 'fail': function (rd63tf) {
          _wkenj != null && _wkenj['runWith']([0x1, rd63tf]);
        } });o$ml['onProgressUpdate'](function (ykjgn_) {
        _wkenj != null && _wkenj['runWith']([0x2, ykjgn_['progress']]);
      });
    }, $zlob7['readFile'] = function ($9zbl7, cmzlo, cgxip, mpzol) {
      cmzlo === void 0x0 && (cmzlo = 'ascill'), mpzol === void 0x0 && (mpzol = ''), $zlob7['fs']['readFile']({ 'filePath': $9zbl7, 'encoding': cmzlo, 'success': function (uv2d5) {
          if ($9zbl7['indexOf']('http://') != -0x1 || $9zbl7['indexOf']('https://') != -0x1) $zlob7['onFileUpdate']($9zbl7, mpzol);cgxip != null && cgxip['runWith']([0x0, uv2d5]);
        }, 'fail': function (yknjg_) {
          if (yknjg_) cgxip != null && cgxip['runWith']([0x1, yknjg_]);
        } });
    }, $zlob7['downImg'] = function (_jyng, jni, trfd6q) {
      trfd6q === void 0x0 && (trfd6q = '');var iypx4 = $zlob7['wxdown']({ 'url': _jyng, 'success': function (jg_n) {
          jg_n['statusCode'] === 0xc8 && $zlob7['copyFile'](jg_n['tempFilePath'], trfd6q, jni);
        }, 'fail': function (kj_w) {
          jni != null && jni['runWith']([0x1, kj_w]);
        } });
    }, $zlob7['copyFile'] = function (knwe_8, dfuvq, l$z7o) {
      var zpxoc = knwe_8['split']('/'),
          clmzpo = zpxoc[zpxoc['length'] - 0x1],
          ykgnj_ = dfuvq['split']('?')[0x0],
          e_8wnk = $zlob7['getFileInfo'](dfuvq),
          d36frt = $zlob7['getFileNativePath'](clmzpo);$zlob7['fs']['copyFile']({ 'srcPath': knwe_8, 'destPath': d36frt, 'success': function (gk_ynj) {
          if (!e_8wnk) $zlob7['onSaveFile'](dfuvq, clmzpo), l$z7o != null && l$z7o['runWith']([0x0]);else {
            if (e_8wnk['readyUrl'] != dfuvq) $zlob7['remove'](clmzpo, dfuvq, l$z7o);
          }
        }, 'fail': function (esahw8) {
          l$z7o != null && l$z7o['runWith']([0x1, esahw8]);
        } });
    }, $zlob7['getFileNativePath'] = function ($729bv) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $729bv;
    }, $zlob7['remove'] = function (ignkj, com7lz, _e8swh) {
      com7lz === void 0x0 && (com7lz = '');var u9vb2 = $zlob7['getFileInfo'](com7lz),
          ixj = $zlob7['getFileNativePath'](u9vb2['md5']);t6qrd['loader']['clearRes'](u9vb2['readyUrl']), $zlob7['fs']['unlink']({ 'filePath': ixj, 'success': function (zl97b) {
          if (com7lz != '') $zlob7['onSaveFile'](com7lz, ignkj);_e8swh != null && _e8swh['runWith']([0x0]);
        }, 'fail': function (b$v2) {} });
    }, $zlob7['onSaveFile'] = function (ehwa, kgin) {
      var uv9q52 = ehwa['split']('?')[0x0];$zlob7['filesListObj'][uv9q52] = { 'md5': kgin, 'readyUrl': ehwa }, $zlob7['fs']['writeFile']({ 'filePath': $zlob7['fileNativeDir'] + '/' + $zlob7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($zlob7['filesListObj']), 'success': function (df6rqt) {
          console['log']('写入测试测试成功：', df6rqt);
        }, 'fail': function (njkg_) {
          console['log']('写入测试测试失败：', njkg_);
        } });
    }, $zlob7['existDir'] = function (g4iyxp, v$b29u) {
      $zlob7['fs']['mkdir']({ 'dirPath': g4iyxp, 'success': function (gyn_k) {
          v$b29u != null && v$b29u['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (_wej) {
          if (_wej['errMsg']['indexOf']('file already exists') != -0x1) $zlob7['readSync']($zlob7['fileListName'], 'utf8', v$b29u);else v$b29u != null && v$b29u['runWith']([0x1, _wej]);
        } });
    }, $zlob7['readSync'] = function (omzl$, n_we, kgn_jy, v5uq29) {
      n_we === void 0x0 && (n_we = 'ascill'), v5uq29 === void 0x0 && (v5uq29 = '');var lzcom = $zlob7['getFileNativePath'](omzl$),
          bu92$;try {
        bu92$ = $zlob7['fs']['readFileSync'](lzcom), kgn_jy != null && kgn_jy['runWith']([0x0, { 'data': bu92$ }]);
      } catch (c4mipx) {
        kgn_jy != null && kgn_jy['runWith']([0x1]);
      }
    }, $zlob7['readCache'] = function () {}, $zlob7['writeCache'] = function (gjniy4) {
      var mcp4i = readyUrl['split']('?')[0x0];$zlob7['filesListObj'][mcp4i] = { 'md5': md5Name, 'readyUrl': readyUrl }, $zlob7['fs']['writeFile']({ 'filePath': $zlob7['fileNativeDir'] + '/' + $zlob7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($zlob7['filesListObj']), 'success': function (rt1f36) {}, 'fail': function (qud56) {} });
    }, $zlob7['setNativeFileDir'] = function (nig) {
      $zlob7['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + nig;
    }, $zlob7['filesListObj'] = {}, $zlob7['fileNativeDir'] = null, $zlob7['fileListName'] = 'layaairfiles.txt', $zlob7['ziyuFileData'] = {}, se8wh($zlob7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $zlob7;
  }(enwj_),
      ekj = function (t63f1) {
    function ozl$m7() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], ozl$m7['__super']['call'](this), this['_sound'] = ozl$m7['_createSound'](), this['_chanell'] = new ehs_w(this['_sound']);
    }iyxjg(ozl$m7, 'laya.wx.mini.MiniSound', t63f1);var b$97zl = ozl$m7['prototype'];return b$97zl['load'] = function (ipcgx4) {
      var z7m$ol = this;ipcgx4 = $lz7o['formatURL'](ipcgx4), this['url'] = ipcgx4;if (ozl$m7['_audioCache'][ipcgx4]) {
        this['event']('complete');return;
      }function v5qu9() {
        if (ozl$m7['_null'] != undefined) z7m$ol['_sound']['onCanplay'](ozl$m7['_null']), z7m$ol['_sound']['onError'](ozl$m7['_null']);else try {
          z7m$ol['_sound']['onCanplay'](null), z7m$ol['_sound']['onError'](null), ozl$m7['_null'] = null;
        } catch (m7ocz) {
          console['warn']('[wxmini] _clearSound:' + m7ocz), z7m$ol['_sound']['onCanplay'](v52udq), z7m$ol['_sound']['onError'](v52udq), ozl$m7['_null'] = v52udq;
        }
      }function hwe_8k() {
        vdu5['loaded'] = !![], vdu5['event']('complete'), ozl$m7['_audioCache'][vdu5['url']] = vdu5;
      }function uf5dq(lob$) {
        console['error']('errCode=' + lob$['errCode'] + '  errMsg=' + lob$['errMsg']), vdu5['event']('error');
      }function v52udq() {}this['_sound']['onCanplay'](hwe_8k), this['_sound']['onError'](uf5dq), this['_sound']['src'] = ipcgx4;var vdu5 = this;
    }, b$97zl['play'] = function (f1r6, b9v$7) {
      f1r6 === void 0x0 && (f1r6 = 0x0), b9v$7 === void 0x0 && (b9v$7 = 0x0);var $v9ub2, _jwkyn;if (this['url'] == d2v5qu['_tMusic']) {
        if (!ozl$m7['_musicAudio']) ozl$m7['_musicAudio'] = this['_sound'];$v9ub2 = ozl$m7['_musicAudio'], _jwkyn = this['_chanell'];
      } else $v9ub2 = this['_sound'], _jwkyn = this['_chanell'];return $v9ub2['src'] = this['url'], $v9ub2['startTime'] = 0x0, _jwkyn['isStopped'] && (_jwkyn['url'] = this['url'], _jwkyn['loops'] = b9v$7, _jwkyn['startTime'] = f1r6, _jwkyn['play'](), d2v5qu['addChannel'](_jwkyn)), _jwkyn;
    }, b$97zl['dispose'] = function () {
      var cpim = ozl$m7['_audioCache'][this['url']];cpim && (cpim['src'] = '', delete ozl$m7['_audioCache'][this['url']]);
    }, mxci(0x0, b$97zl, 'duration', function () {
      return this['_sound']['duration'];
    }), ozl$m7['_createSound'] = function () {
      ozl$m7['_id']++;var ml7coz = aw8eh['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return ml7coz;
    }, ozl$m7['_musicAudio'] = null, ozl$m7['_id'] = 0x0, ozl$m7['_audioCache'] = {}, ozl$m7['_null'] = undefined, ozl$m7;
  }(enwj_),
      ehs_w = function (wen8) {
    function j_ygkn(zoc7m) {
      this['_audio'] = null, this['_onEnd'] = null, j_ygkn['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = zoc7m, this['_onEnd'] = ews['bind'](this['__onEnd'], this), zoc7m['onEnded'](this['_onEnd']);
    }iyxjg(j_ygkn, 'laya.wx.mini.MiniSoundChannel', wen8);var $buv2 = j_ygkn['prototype'];return $buv2['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (t6qrd['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $buv2['__onNull'] = function () {}, $buv2['play'] = function () {
      this['isStopped'] = ![], d2v5qu['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $buv2['stop'] = function () {
      this['isStopped'] = !![], d2v5qu['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, $buv2['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $buv2['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], d2v5qu['addChannel'](this), this['_audio']['play']();
    }, mxci(0x0, $buv2, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), mxci(0x0, $buv2, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), mxci(0x0, $buv2, 'volume', function () {
      return 0x1;
    }, function (qvu5f) {}), j_ygkn['_null'] = undefined, j_ygkn;
  }(pm4cx),
      d6u5fq = function () {
    function bu52v() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = aw8eh['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }iyxjg(bu52v, 'laya.wx.mini.MiniVideo');var ygnk = bu52v['prototype'];return ygnk['on'] = function (d52u, v95q2, c4xo) {
      if (d52u == 'loadedmetadata') this['onPlayFunc'] = c4xo['bind'](v95q2), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else d52u == 'ended' && (this['onEndedFunC'] = c4xo['bind'](v95q2), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, ygnk['onTimeUpdateFunc'] = function ($zbol) {
      this['position'] = $zbol['position'], this['_duration'] = $zbol['duration'];
    }, ygnk['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, ygnk['onended'] = function (yipx4g, kny_gj) {
      this['onEndedFunC'] = kny_gj['bind'](yipx4g), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, ygnk['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, ygnk['off'] = function (vu92b, u$b2v, mxpic) {
      if (vu92b == 'loadedmetadata') this['onPlayFunc'] = mxpic['bind'](u$b2v), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else vu92b == 'ended' && (this['onEndedFunC'] = mxpic['bind'](u$b2v), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, ygnk['load'] = function (nwe8_k) {
      if (!this['videoElement']) return;this['videoElement']['src'] = nwe8_k;
    }, ygnk['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, ygnk['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, ygnk['size'] = function (l7zm$o, x4cpgi) {
      if (!this['videoElement']) return;this['videoElement']['width'] = l7zm$o, this['videoElement']['height'] = x4cpgi;
    }, ygnk['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, ygnk['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, mxci(0x0, ygnk, 'duration', function () {
      return this['_duration'];
    }), mxci(0x0, ygnk, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (ft31) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = ft31;
    }), mxci(0x0, ygnk, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), mxci(0x0, ygnk, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), mxci(0x0, ygnk, 'ended', function () {
      return this['videoend'];
    }), mxci(0x0, ygnk, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (rfq5) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = rfq5;
    }), mxci(0x0, ygnk, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (ynkw_) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = ynkw_;
    }), mxci(0x0, ygnk, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (ikjyn) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = ikjyn;
    }), mxci(0x0, ygnk, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), mxci(0x0, ygnk, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (plmo) {
      if (!this['videoElement']) return;this['videoElement']['x'] = plmo;
    }), mxci(0x0, ygnk, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (bl7oz) {
      if (!this['videoElement']) return;this['videoElement']['y'] = bl7oz;
    }), mxci(0x0, ygnk, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), mxci(0x0, ygnk, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (_njyw) {
      if (!this['videoElement']) return;this['videoElement']['src'] = _njyw;
    }), mxci(0x0, ygnk, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (vu529) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = vu529;
    }), mxci(0x0, ygnk, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (kny_g) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = kny_g;
    }), bu52v;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var m4opxc in Laya) {
    var wshe8 = Laya[m4opxc];wshe8 && wshe8['__isclass'] && (exports[m4opxc] = wshe8);
  }
});