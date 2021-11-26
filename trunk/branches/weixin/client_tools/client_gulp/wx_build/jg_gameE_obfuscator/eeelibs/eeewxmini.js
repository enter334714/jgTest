var b = wx.$e;
(function (window, document, bd90) {
  var rzy4v = bd90['un'],
      hgxlr = bd90['uns'],
      gtlhx = bd90['static'],
      l$hgtx = bd90['class'],
      yvf_z = bd90['getset'],
      w0 = bd90['__newvec'],
      iqujn = laya['utils']['Browser'],
      a47_m = laya['events']['Event'],
      skuqn = laya['events']['EventDispatcher'],
      rtlgx = laya['resource']['HTMLImage'],
      v4am_ = laya['utils']['Handler'],
      hrzyfv = laya['display']['Input'],
      it$j = laya['net']['Loader'],
      b5d60k = laya['maths']['Matrix'],
      qn93 = laya['renders']['Render'],
      fvyhz = laya['utils']['RunDriver'],
      xji$q = laya['media']['Sound'],
      qx3j = laya['media']['SoundChannel'],
      $xtgli = laya['media']['SoundManager'],
      _47vy = laya['display']['Stage'],
      uk6s9b = laya['net']['URL'],
      it$l = laya['utils']['Utils'],
      moc7pa = function () {
    function eopca() {}return l$hgtx(eopca, 'laya.wx.mini.MiniAdpter'), eopca['getJson'] = function (k5d6b0) {
      return JSON['parse'](k5d6b0);
    }, eopca['init'] = function (hvzfry, b68d5) {
      hvzfry === void 0x0 && (hvzfry = ![]), b68d5 === void 0x0 && (b68d5 = ![]);if (eopca['_inited']) return;eopca['window'] = window;if (eopca['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;eopca['_inited'] = !![], eopca['isZiYu'] = b68d5, eopca['isPosMsgYu'] = hvzfry, eopca['EnvConfig'] = {}, !eopca['isZiYu'] && (zthgl['setNativeFileDir']('/layaairGame'), zthgl['existDir'](zthgl['fileNativeDir'], v4am_['create'](eopca, eopca['onMkdirCallBack']))), eopca['window']['focus'] = function () {}, bd90['getUrlPath'] = function () {}, eopca['window']['logtime'] = function ($gixj) {}, eopca['window']['alertTimeLog'] = function (jxtg) {}, eopca['window']['resetShareInfo'] = function () {}, eopca['window']['CanvasRenderingContext2D'] = function () {}, eopca['window']['CanvasRenderingContext2D']['prototype'] = eopca['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], eopca['window']['document']['body']['appendChild'] = function () {}, eopca['EnvConfig']['pixelRatioInt'] = 0x0, fvyhz['getPixelRatio'] = eopca['pixelRatio'], eopca['_preCreateElement'] = iqujn['createElement'], iqujn['createElement'] = eopca['createElement'], fvyhz['createShaderCondition'] = eopca['createShaderCondition'], it$l['parseXMLFromString'] = eopca['parseXMLFromString'], hrzyfv['_createInputElement'] = ylhzf['_createInputElement'], eopca['EnvConfig']['load'] = it$j['prototype']['load'], it$j['prototype']['load'] = jgi3$x['prototype']['load'], eopca['isZiYu'] && hvzfry && wx['onMessage'](function (avm47) {
        avm47['isLoad'] && (zthgl['ziyuFileData'][avm47['url']] = avm47['data']);
      });
    }, eopca['onMkdirCallBack'] = function (uj3niq, af4v7_) {
      if (!uj3niq) zthgl['filesListObj'] = JSON['parse'](af4v7_['data']);
    }, eopca['pixelRatio'] = function () {
      if (!eopca['EnvConfig']['pixelRatioInt']) try {
        var _v4zfy = wx['getSystemInfoSync']();return eopca['EnvConfig']['pixelRatioInt'] = _v4zfy['pixelRatio'], _v4zfy = _v4zfy, _v4zfy['pixelRatio'];
      } catch (gl$th) {}return eopca['EnvConfig']['pixelRatioInt'];
    }, eopca['createElement'] = function (vzrhy) {
      if (vzrhy == 'canvas') {
        var $ijnq;return eopca['idx'] == 0x1 ? eopca['isZiYu'] ? ($ijnq = sharedCanvas, $ijnq['style'] = {}) : $ijnq = window['canvas'] : $ijnq = window['wx']['createCanvas'](), eopca['idx']++, $ijnq;
      } else {
        if (vzrhy == 'textarea' || vzrhy == 'input') return eopca['onCreateInput'](vzrhy);else {
          if (vzrhy == 'div') {
            var b9d0k = eopca['_preCreateElement'](vzrhy);return b9d0k['contains'] = function (zryfh) {
              return null;
            }, b9d0k['removeChild'] = function (bus69) {}, b9d0k;
          } else return eopca['_preCreateElement'](vzrhy);
        }
      }
    }, eopca['onCreateInput'] = function (gxl$ti) {
      var d69kb = eopca['_preCreateElement'](gxl$ti);return d69kb['focus'] = ylhzf['wxinputFocus'], d69kb['blur'] = ylhzf['wxinputblur'], d69kb['style'] = {}, d69kb['value'] = 0x0, d69kb['parentElement'] = {}, d69kb['placeholder'] = {}, d69kb['type'] = {}, d69kb['setColor'] = function (il) {}, d69kb['setType'] = function (u3jq) {}, d69kb['setFontFace'] = function (b06k9d) {}, d69kb['addEventListener'] = function (zhvyf) {}, d69kb['contains'] = function (v47m_) {
        return null;
      }, d69kb['removeChild'] = function (pomc7) {}, d69kb;
    }, eopca['createShaderCondition'] = function (ecp) {
      var fv7_a = this,
          y7_vf4 = function () {
        var snu3qj = ecp;return fv7_a[ecp['replace']('this.', '')];
      };return y7_vf4;
    }, eopca['EnvConfig'] = null, eopca['window'] = null, eopca['_preCreateElement'] = null, eopca['_inited'] = ![], eopca['wxRequest'] = null, eopca['systemInfo'] = null, eopca['version'] = '0.0.1', eopca['isZiYu'] = ![], eopca['isPosMsgYu'] = ![], eopca['parseXMLFromString'] = function (xgj$it) {
      var o_mac7, gxtji$;xgj$it = xgj$it['replace'](/>\s+</g, '><');try {
        o_mac7 = new window['Parser']['DOMParser']()['parseFromString'](xgj$it, 'text/xml');
      } catch (v_m74a) {
        throw '需要引入xml解析库文件';
      }return o_mac7;
    }, eopca['idx'] = 0x1, eopca;
  }(),
      ks0b96 = function () {
    function d825w0() {}l$hgtx(d825w0, 'laya.wx.mini.MiniImage');var wdb85 = d825w0['prototype'];return wdb85['_loadImage'] = function (g$3jix) {
      var z4_y = this,
          x$lgti = ![];g$3jix['indexOf']('layaNativeDir/') == -0x1 && (x$lgti = !![], g$3jix = uk6s9b['formatURL'](g$3jix));if (!zthgl['getFileInfo'](g$3jix)) {
        if (g$3jix['indexOf']('http://') != -0x1 || g$3jix['indexOf']('https://') != -0x1) zthgl['downImg'](g$3jix, new v4am_(d825w0, d825w0['onDownImgCallBack'], [g$3jix, z4_y]), g$3jix);else d825w0['onCreateImage'](g$3jix, z4_y, !![]);
      } else d825w0['onCreateImage'](g$3jix, z4_y, !x$lgti);
    }, d825w0['onDownImgCallBack'] = function (fzhrvy, $g3ixj, _c47) {
      if (!_c47) d825w0['onCreateImage'](fzhrvy, $g3ixj);else $g3ixj['onError'](null);
    }, d825w0['onCreateImage'] = function ($xjit, busk69, c7a_o) {
      c7a_o === void 0x0 && (c7a_o = ![]);var wd;if (!c7a_o) {
        var ix$tjg = zthgl['getFileInfo']($xjit),
            j3iunq = ix$tjg['md5'];wd = zthgl['getFileNativePath'](j3iunq);
      } else wd = $xjit;if (busk69['imgCache'] == null) busk69['imgCache'] = {};var a_c4m;function qinj3u() {
        a_c4m['onload'] = null, a_c4m['onerror'] = null, delete busk69['imgCache'][$xjit];
      };var opaecm = function () {
        qinj3u(), busk69['onLoaded'](a_c4m);
      },
          wd0b8 = function () {
        qinj3u(), busk69['event']('error', 'Load image failed');
      };busk69['_type'] == 'nativeimage' ? (a_c4m = new iqujn['window']['Image'](), a_c4m['crossOrigin'] = '', a_c4m['onload'] = opaecm, a_c4m['onerror'] = wd0b8, a_c4m['src'] = wd, busk69['imgCache'][$xjit] = a_c4m) : new rtlgx['create'](wd, { 'onload': opaecm, 'onerror': wd0b8, 'onCreate': function (u96sk) {
          a_c4m = u96sk, busk69['imgCache'][$xjit] = u96sk;
        } });
    }, d825w0;
  }(),
      ylhzf = function () {
    function tlhxg() {}return l$hgtx(tlhxg, 'laya.wx.mini.MiniInput'), tlhxg['_createInputElement'] = function () {
      hrzyfv['_initInput'](hrzyfv['area'] = iqujn['createElement']('textarea')), hrzyfv['_initInput'](hrzyfv['input'] = iqujn['createElement']('input')), hrzyfv['inputContainer'] = iqujn['createElement']('div'), hrzyfv['inputContainer']['style']['position'] = 'absolute', hrzyfv['inputContainer']['style']['zIndex'] = 0x186a0, iqujn['container']['appendChild'](hrzyfv['inputContainer']), hrzyfv['inputContainer']['setPos'] = function (mapoce, acp) {
        hrzyfv['inputContainer']['style']['left'] = mapoce + 'px', hrzyfv['inputContainer']['style']['top'] = acp + 'px';
      }, bd90['stage']['on']('resize', null, tlhxg['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zrhfly) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), $xtgli['_soundClass'] = grtxlh, $xtgli['_musicClass'] = grtxlh;
    }, tlhxg['_onStageResize'] = function () {
      var buk6s = bd90['stage']['_canvasTransform']['identity']();buk6s['scale'](iqujn['width'] / qn93['canvas']['width'] / fvyhz['getPixelRatio'](), iqujn['height'] / qn93['canvas']['height'] / fvyhz['getPixelRatio']());
    }, tlhxg['wxinputFocus'] = function (amc_4) {
      var ti$xjg = hrzyfv['inputElement']['target'];if (ti$xjg && !ti$xjg['editable']) return;moc7pa['window']['wx']['offKeyboardConfirm'](), moc7pa['window']['wx']['offKeyboardInput'](), moc7pa['window']['wx']['showKeyboard']({ 'defaultValue': ti$xjg['text'], 'maxLength': ti$xjg['maxChars'], 'multiple': ti$xjg['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (hfr) {}, 'fail': function (w25d80) {} }), moc7pa['window']['wx']['onKeyboardConfirm'](function (i3jx) {
        var ma_ = i3jx ? i3jx['value'] : '';ti$xjg['text'] = ma_, ti$xjg['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), moc7pa['window']['wx']['onKeyboardInput'](function (ji3$xq) {
        var _amc7o = ji3$xq ? ji3$xq['value'] : '';if (!ti$xjg['multiline']) {
          if (_amc7o['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ti$xjg['text'] = _amc7o, ti$xjg['event']('input');
      });
    }, tlhxg['inputEnter'] = function () {
      hrzyfv['inputElement']['target']['focus'] = ![];
    }, tlhxg['wxinputblur'] = function () {
      tlhxg['hideKeyboard']();
    }, tlhxg['hideKeyboard'] = function () {
      moc7pa['window']['wx']['offKeyboardConfirm'](), moc7pa['window']['wx']['offKeyboardInput'](), moc7pa['window']['wx']['hideKeyboard']({ 'success': function (nqi) {
          console['log']('隐藏键盘');
        }, 'fail': function (j3i$q) {
          console['log']('隐藏键盘出错:' + (j3i$q ? j3i$q['errMsg'] : ''));
        } });
    }, tlhxg;
  }(),
      jgi3$x = function () {
    function lzhfyr() {}l$hgtx(lzhfyr, 'laya.wx.mini.MiniLoader');var qix$3j = lzhfyr['prototype'];return qix$3j['load'] = function (x3j, y74f_v, mc_o7, cmao7p, rzyhl) {
      mc_o7 === void 0x0 && (mc_o7 = !![]), rzyhl === void 0x0 && (rzyhl = ![]);var j3snu = this;j3snu['_url'] = x3j;if (x3j['indexOf']('data:image') === 0x0) j3snu['_type'] = y74f_v = 'image';else j3snu['_type'] = y74f_v || (y74f_v = j3snu['getTypeFromUrl'](x3j));j3snu['_cache'] = mc_o7, j3snu['_data'] = null;var ylhfz = 'ascii';if (x3j['indexOf']('.fnt') != -0x1) ylhfz = 'utf8';else y74f_v == 'arraybuffer' && (ylhfz = '');;var itj$g = it$l['getFileExtension'](x3j);if (lzhfyr['_fileTypeArr']['indexOf'](itj$g) != -0x1) moc7pa['EnvConfig']['load']['call'](this, x3j, y74f_v, mc_o7, cmao7p, rzyhl);else {
        if (!zthgl['getFileInfo'](x3j)) {
          if (x3j['indexOf']('layaNativeDir/') != -0x1) {
            if (moc7pa['isZiYu']) {
              var a4_7fv = zthgl['ziyuFileData'][x3j];j3snu['onLoaded'](a4_7fv);return;
            } else {
              cosnole['log']('read read'), zthgl['read'](x3j, ylhfz, new v4am_(lzhfyr, lzhfyr['onReadNativeCallBack'], [ylhfz, x3j, y74f_v, mc_o7, cmao7p, rzyhl, j3snu]));return;
            }
          }if (uk6s9b['rootPath'] == '') var sqj3u = x3j;else sqj3u = x3j['split'](uk6s9b['rootPath'])[0x0];x3j['indexOf']('http://') != -0x1 || x3j['indexOf']('https://') != -0x1 ? moc7pa['EnvConfig']['load']['call'](j3snu, x3j, y74f_v, mc_o7, cmao7p, rzyhl) : zthgl['readFile'](sqj3u, ylhfz, new v4am_(lzhfyr, lzhfyr['onReadNativeCallBack'], [ylhfz, x3j, y74f_v, mc_o7, cmao7p, rzyhl, j3snu]), x3j);
        } else moc7pa['EnvConfig']['load']['call'](this, x3j, y74f_v, mc_o7, cmao7p, rzyhl);
      }
    }, qix$3j['resMgrLoad'] = function ($gjix3, zyhvr, w8b0d, qxj$, bsuk6, zyrvhf, d60b5k) {
      w8b0d === void 0x0 && (w8b0d = 0x0), qxj$ === void 0x0 && (qxj$ = ![]), bsuk6 === void 0x0 && (bsuk6 = ![]), zyrvhf === void 0x0 && (zyrvhf = 0x0), d60b5k === void 0x0 && (d60b5k = 0x3), $gjix3['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', $gjix3), moc7pa['EnvConfig']['resMgrLoad']($gjix3, (lxgi$t, lxhtr, c_7mao) => {
        lzhfyr['prototype']['resMgrLoadCallBack'](lxgi$t, lxhtr, c_7mao, zyhvr);
      }, w8b0d, qxj$, bsuk6, zyrvhf, d60b5k);
    }, qix$3j['resMgrLoadCallBack'] = function (u9ns, db60k9, xgl$t, grthzl) {
      console['log']('buff:::', u9ns, xgl$t, zthgl['fileNativeDir'] + '///' + zthgl['fileListName']), grthzl(u9ns, db60k9, xgl$t);
    }, qix$3j['clearRes'] = function (u9skn6, _m7av4) {
      _m7av4 === void 0x0 && (_m7av4 = ![]);var hlyrfz = this;hlyrfz['clearRes'](u9skn6, _m7av4);var lzthrg = zthgl['getFileInfo'](u9skn6);if (lzthrg && (u9skn6['indexOf']('http://') != -0x1 || u9skn6['indexOf']('https://') != -0x1)) {
        var a4c_m7 = lzthrg['md5'],
            thry = zthgl['getFileNativePath'](a4c_m7);zthgl['remove'](thry);
      }
    }, lzhfyr['onReadNativeCallBack'] = function (ryv4fz, vf74_, d518w, xil$tg, hgt$x, tzgrl, mcoa_, _a7mc4, jix3g) {
      xil$tg === void 0x0 && (xil$tg = !![]), tzgrl === void 0x0 && (tzgrl = ![]), _a7mc4 === void 0x0 && (_a7mc4 = 0x0);if (!_a7mc4) {
        var b6580d;if (d518w == 'json' || d518w == 'atlas') b6580d = moc7pa['getJson'](jix3g['data']);else d518w == 'xml' ? b6580d = it$l['parseXMLFromString'](jix3g['data']) : b6580d = jix3g['data'];mcoa_['onLoaded'](b6580d), !moc7pa['isZiYu'] && moc7pa['isPosMsgYu'] && d518w != 'arraybuffer' && wx['postMessage']({ 'url': vf74_, 'data': b6580d, 'isLoad': !![] });
      } else _a7mc4 == 0x1 && moc7pa['EnvConfig']['load']['call'](mcoa_, vf74_, d518w, xil$tg, hgt$x, tzgrl);
    }, gtlhx(lzhfyr, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), lzhfyr;
  }(),
      zthgl = function (hxrgtl) {
    function ytz() {
      ytz['__super']['call'](this);;
    }return l$hgtx(ytz, 'laya.wx.mini.MiniFileMgr', hxrgtl), ytz['isLoadFile'] = function (qsn93u) {
      return ytz['_fileTypeArr']['indexOf'](qsn93u) != -0x1 ? !![] : ![];
    }, ytz['getFileInfo'] = function (kusn69) {
      var ryhl = kusn69['split']('?')[0x0],
          v4y7_ = ytz['filesListObj'][ryhl];if (v4y7_ == null) return null;else return v4y7_;return null;
    }, ytz['onFileUpdate'] = function (lyhzrt, htlxg$) {
      var fzyhrl = lyhzrt['split']('/'),
          hzlfry = fzyhrl[fzyhrl['length'] - 0x1],
          fvyr4 = ytz['getFileInfo'](htlxg$);if (fvyr4 == null) ytz['onSaveFile'](htlxg$, hzlfry);else {
        if (fvyr4['readyUrl'] != htlxg$) ytz['remove'](hzlfry, htlxg$);
      }
    }, ytz['exits'] = function (ijg3x, k0) {
      var a_m7co = ytz['getFileNativePath'](ijg3x);ytz['fs']['getFileInfo']({ 'filePath': a_m7co, 'success': function (zrf4) {
          k0 != null && k0['runWith']([0x0, zrf4]);
        }, 'fail': function (j3iq$) {
          k0 != null && k0['runWith']([0x1, j3iq$]);
        } });
    }, ytz['read'] = function (nij$3q, x$ht, dbw805, c7_mao) {
      x$ht === void 0x0 && (x$ht = 'ascill'), c7_mao === void 0x0 && (c7_mao = '');var d5b86;c7_mao != '' ? d5b86 = ytz['getFileNativePath'](nij$3q) : d5b86 = nij$3q, ytz['fs']['readFile']({ 'filePath': d5b86, 'encoding': x$ht, 'success': function (a7f) {
          dbw805 != null && dbw805['runWith']([0x0, a7f]);
        }, 'fail': function ($itxgl) {
          if ($itxgl && c7_mao != '') ytz['down'](c7_mao, x$ht, dbw805, c7_mao);else dbw805 != null && dbw805['runWith']([0x1]);
        } });
    }, ytz['readNativeFile'] = function (hflyrz, m47ac) {
      ytz['fs']['readFile']({ 'filePath': hflyrz, 'encoding': '', 'success': function (b680d5) {
          m47ac != null && m47ac['runWith']([0x0]);
        }, 'fail': function (oca7m) {
          m47ac != null && m47ac['runWith']([0x1]);
        } });
    }, ytz['down'] = function (yrzf, hlrgx, fhzv, i$q3x) {
      hlrgx === void 0x0 && (hlrgx = 'ascill'), i$q3x === void 0x0 && (i$q3x = '');var jusn = ytz['getFileNativePath'](i$q3x),
          thglx = ytz['wxdown']({ 'url': yrzf, 'filePath': jusn, 'success': function (thlrxg) {
          if (thlrxg['statusCode'] === 0xc8) ytz['readFile'](thlrxg['filePath'], hlrgx, fhzv, i$q3x);
        }, 'fail': function (gthlrx) {
          fhzv != null && fhzv['runWith']([0x1, gthlrx]);
        } });thglx['onProgressUpdate'](function (d2w58) {
        fhzv != null && fhzv['runWith']([0x2, d2w58['progress']]);
      });
    }, ytz['readFile'] = function ($3qijx, grtzl, cpaeom, squ9n) {
      grtzl === void 0x0 && (grtzl = 'ascill'), squ9n === void 0x0 && (squ9n = ''), ytz['fs']['readFile']({ 'filePath': $3qijx, 'encoding': grtzl, 'success': function (jx$3g) {
          if ($3qijx['indexOf']('http://') != -0x1 || $3qijx['indexOf']('https://') != -0x1) ytz['onFileUpdate']($3qijx, squ9n);cpaeom != null && cpaeom['runWith']([0x0, jx$3g]);
        }, 'fail': function (p7mca) {
          if (p7mca) cpaeom != null && cpaeom['runWith']([0x1, p7mca]);
        } });
    }, ytz['downImg'] = function (f7av4_, lyhf, q$3jin) {
      q$3jin === void 0x0 && (q$3jin = '');var hrtglx = ytz['wxdown']({ 'url': f7av4_, 'success': function (subk69) {
          subk69['statusCode'] === 0xc8 && ytz['copyFile'](subk69['tempFilePath'], q$3jin, lyhf);
        }, 'fail': function (qsu93n) {
          lyhf != null && lyhf['runWith']([0x1, qsu93n]);
        } });
    }, ytz['copyFile'] = function (a_om, f74vy_, v_f4z) {
      var i3n$ = a_om['split']('/'),
          i$nj = i3n$[i3n$['length'] - 0x1],
          zghl = f74vy_['split']('?')[0x0],
          oce = ytz['getFileInfo'](f74vy_),
          coeamp = ytz['getFileNativePath'](i$nj);ytz['fs']['copyFile']({ 'srcPath': a_om, 'destPath': coeamp, 'success': function (j$3ixq) {
          if (!oce) ytz['onSaveFile'](f74vy_, i$nj), v_f4z != null && v_f4z['runWith']([0x0]);else {
            if (oce['readyUrl'] != f74vy_) ytz['remove'](i$nj, f74vy_, v_f4z);
          }
        }, 'fail': function (peoamc) {
          v_f4z != null && v_f4z['runWith']([0x1, peoamc]);
        } });
    }, ytz['getFileNativePath'] = function (opae) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + opae;
    }, ytz['remove'] = function (tl$gxh, ltgx, fva_7) {
      ltgx === void 0x0 && (ltgx = '');var _v74a = ytz['getFileInfo'](ltgx),
          v47am = ytz['getFileNativePath'](_v74a['md5']);bd90['loader']['clearRes'](_v74a['readyUrl']), ytz['fs']['unlink']({ 'filePath': v47am, 'success': function (gitxl) {
          if (ltgx != '') ytz['onSaveFile'](ltgx, tl$gxh);fva_7 != null && fva_7['runWith']([0x0]);
        }, 'fail': function (fy4z_) {} });
    }, ytz['onSaveFile'] = function (yrhtlz, sk96un) {
      var amop7c = yrhtlz['split']('?')[0x0];ytz['filesListObj'][amop7c] = { 'md5': sk96un, 'readyUrl': yrhtlz }, ytz['fs']['writeFile']({ 'filePath': ytz['fileNativeDir'] + '/' + ytz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ytz['filesListObj']), 'success': function (zgtlr) {
          console['log']('写入测试测试成功：', zgtlr);
        }, 'fail': function (f4_zy) {
          console['log']('写入测试测试失败：', f4_zy);
        } });
    }, ytz['existDir'] = function (gxthl$, pcaome) {
      ytz['fs']['mkdir']({ 'dirPath': gxthl$, 'success': function (xli$t) {
          pcaome != null && pcaome['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (co7pm) {
          if (co7pm['errMsg']['indexOf']('file already exists') != -0x1) ytz['readSync'](ytz['fileListName'], 'utf8', pcaome);else pcaome != null && pcaome['runWith']([0x1, co7pm]);
        } });
    }, ytz['readSync'] = function (lrhgtx, omca7p, d580b, inj3q) {
      omca7p === void 0x0 && (omca7p = 'ascill'), inj3q === void 0x0 && (inj3q = '');var _7ocm = ytz['getFileNativePath'](lrhgtx),
          pcamo7;try {
        pcamo7 = ytz['fs']['readFileSync'](_7ocm), d580b != null && d580b['runWith']([0x0, { 'data': pcamo7 }]);
      } catch (sn3qju) {
        d580b != null && d580b['runWith']([0x1]);
      }
    }, ytz['readCache'] = function () {}, ytz['writeCache'] = function (xltrg) {
      var db8w = readyUrl['split']('?')[0x0];ytz['filesListObj'][db8w] = { 'md5': md5Name, 'readyUrl': readyUrl }, ytz['fs']['writeFile']({ 'filePath': ytz['fileNativeDir'] + '/' + ytz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ytz['filesListObj']), 'success': function (qn3i$j) {}, 'fail': function (un3sq) {} });
    }, ytz['setNativeFileDir'] = function (fy4v_z) {
      ytz['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + fy4v_z;
    }, ytz['filesListObj'] = {}, ytz['fileNativeDir'] = null, ytz['fileListName'] = 'layaairfiles.txt', ytz['ziyuFileData'] = {}, gtlhx(ytz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ytz;
  }(skuqn),
      grtxlh = function (yvfhrz) {
    function vyrf() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], vyrf['__super']['call'](this), this['_sound'] = vyrf['_createSound']();
    }l$hgtx(vyrf, 'laya.wx.mini.MiniSound', yvfhrz);var qsn9u3 = vyrf['prototype'];return qsn9u3['load'] = function (jigtx) {
      var inu = this;jigtx = uk6s9b['formatURL'](jigtx), this['url'] = jigtx;if (vyrf['_audioCache'][jigtx]) {
        this['event']('complete');return;
      }function qusnj3() {
        if (vyrf['_null'] != undefined) inu['_sound']['onCanplay'](vyrf['_null']), inu['_sound']['onError'](vyrf['_null']);else try {
          inu['_sound']['onCanplay'](null), inu['_sound']['onError'](null), vyrf['_null'] = null;
        } catch (zyhlr) {
          console['warn']('[wxmini] _clearSound:' + zyhlr), inu['_sound']['onCanplay'](m_ac47), inu['_sound']['onError'](m_ac47), vyrf['_null'] = m_ac47;
        }
      }function suj3nq() {
        qusnj3(), o_c7['loaded'] = !![], o_c7['event']('complete'), vyrf['_audioCache'][o_c7['url']] = o_c7;
      }function tzrhyl(vf_7a) {
        console['error']('errCode=' + vf_7a['errCode'] + '  errMsg=' + vf_7a['errMsg']), qusnj3(), o_c7['event']('error');
      }function m_ac47() {}this['_sound']['onCanplay'](suj3nq), this['_sound']['onError'](tzrhyl), this['_sound']['src'] = jigtx;var o_c7 = this;
    }, qsn9u3['play'] = function (w5d281, us93) {
      w5d281 === void 0x0 && (w5d281 = 0x0), us93 === void 0x0 && (us93 = 0x0);var k5b6d;if (this['url'] == $xtgli['_tMusic']) {
        if (!vyrf['_musicAudio']) vyrf['_musicAudio'] = vyrf['_createSound']();k5b6d = vyrf['_musicAudio'];
      } else k5b6d = vyrf['_createSound']();k5b6d['src'] = this['url'];var a7c_o = new y_v4f(k5b6d);return a7c_o['url'] = this['url'], a7c_o['loops'] = us93, a7c_o['startTime'] = w5d281, a7c_o['play'](), $xtgli['addChannel'](a7c_o), a7c_o;
    }, qsn9u3['dispose'] = function () {
      var un3s9q = vyrf['_audioCache'][this['url']];un3s9q && (un3s9q['src'] = '', delete vyrf['_audioCache'][this['url']]);
    }, yvf_z(0x0, qsn9u3, 'duration', function () {
      return this['_sound']['duration'];
    }), vyrf['_createSound'] = function () {
      return vyrf['_id']++, moc7pa['window']['wx']['createInnerAudioContext']();
    }, vyrf['_musicAudio'] = null, vyrf['_id'] = 0x0, vyrf['_audioCache'] = {}, vyrf['_null'] = undefined, vyrf;
  }(skuqn),
      y_v4f = function (emopa) {
    function n3qj$i($nq3ij) {
      this['_audio'] = null, this['_onEnd'] = null, n3qj$i['__super']['call'](this), this['_audio'] = $nq3ij, this['_onEnd'] = it$l['bind'](this['__onEnd'], this), $nq3ij['onEnded'](this['_onEnd']);
    }l$hgtx(n3qj$i, 'laya.wx.mini.MiniSoundChannel', emopa);var rvy4fz = n3qj$i['prototype'];return rvy4fz['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (bd90['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, rvy4fz['__onNull'] = function () {}, rvy4fz['play'] = function () {
      this['isStopped'] = ![], $xtgli['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, rvy4fz['stop'] = function () {
      this['isStopped'] = !![], $xtgli['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (n3qj$i['_null'] != undefined) this['_audio']['onEnded'](n3qj$i['_null']);else try {
        this['_audio']['onEnded'](null), n3qj$i['_null'] = null;
      } catch (njqiu3) {
        console['warn']('[wxmini] stop:' + njqiu3), this['_audio']['onEnded'](it$l['bind'](this['__onNull'], this)), n3qj$i['_null'] = it$l['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, rvy4fz['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, rvy4fz['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], $xtgli['addChannel'](this), this['_audio']['play']();
    }, yvf_z(0x0, rvy4fz, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), yvf_z(0x0, rvy4fz, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), yvf_z(0x0, rvy4fz, 'volume', function () {
      return 0x1;
    }, function (lhzrty) {}), n3qj$i['_null'] = undefined, n3qj$i;
  }(qx3j);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var x$tigl in Laya) {
    var tgrhzl = Laya[x$tigl];tgrhzl && tgrhzl['__isclass'] && (exports[x$tigl] = tgrhzl);
  }
});