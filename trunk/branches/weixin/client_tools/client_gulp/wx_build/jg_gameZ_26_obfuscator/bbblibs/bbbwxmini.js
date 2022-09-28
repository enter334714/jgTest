var _ = wx.y$;
(function (window, document, ohp$2) {
  var r43ya = ohp$2['un'],
      t06mw = ohp$2['uns'],
      wvmx7 = ohp$2['static'],
      _6j0t = ohp$2['class'],
      diezlk = ohp$2['getset'],
      ao93up = ohp$2['__newvec'],
      zdlekc = laya['utils']['Browser'],
      fgyr8 = laya['events']['Event'],
      xv7lc = laya['events']['EventDispatcher'],
      p$ho = laya['resource']['HTMLImage'],
      gr43y = laya['utils']['Handler'],
      _bq0j = laya['display']['Input'],
      izf8k = laya['net']['Loader'],
      fekd = laya['maths']['Matrix'],
      vcnkle = laya['renders']['Render'],
      zeldi = laya['utils']['RunDriver'],
      kd8i = laya['media']['Sound'],
      _j06bq = laya['media']['SoundChannel'],
      rfgy5 = laya['media']['SoundManager'],
      ou9p32 = laya['display']['Stage'],
      zi5fr8 = laya['net']['URL'],
      xcnl7v = laya['utils']['Utils'],
      wm6s = function () {
    function $h2o() {}return _6j0t($h2o, 'laya.wx.mini.MiniAdpter'), $h2o['getJson'] = function (smtx) {
      return JSON['parse'](smtx);
    }, $h2o['init'] = function (ekdfz, cmnx) {
      ekdfz === void 0x0 && (ekdfz = ![]), cmnx === void 0x0 && (cmnx = ![]);if ($h2o['_inited']) return;$h2o['window'] = window;if ($h2o['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;$h2o['_inited'] = !![], $h2o['isZiYu'] = cmnx, $h2o['isPosMsgYu'] = ekdfz, $h2o['EnvConfig'] = {}, !$h2o['isZiYu'] && ($2ph['setNativeFileDir']('/layaairGame'), $2ph['existDir']($2ph['fileNativeDir'], gr43y['create']($h2o, $h2o['onMkdirCallBack']))), $h2o['window']['focus'] = function () {}, ohp$2['getUrlPath'] = function () {}, $h2o['window']['logtime'] = function (mst) {}, $h2o['window']['alertTimeLog'] = function (nwvm) {}, $h2o['window']['resetShareInfo'] = function () {}, $h2o['window']['CanvasRenderingContext2D'] = function () {}, $h2o['window']['CanvasRenderingContext2D']['prototype'] = $h2o['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $h2o['window']['document']['body']['appendChild'] = function () {}, $h2o['EnvConfig']['pixelRatioInt'] = 0x0, zeldi['getPixelRatio'] = $h2o['pixelRatio'], $h2o['_preCreateElement'] = zdlekc['createElement'], zdlekc['createElement'] = $h2o['createElement'], zeldi['createShaderCondition'] = $h2o['createShaderCondition'], xcnl7v['parseXMLFromString'] = $h2o['parseXMLFromString'], _bq0j['_createInputElement'] = nxwv7m['_createInputElement'], $h2o['EnvConfig']['load'] = izf8k['prototype']['load'], izf8k['prototype']['load'] = nlcv7['prototype']['load'], $h2o['isZiYu'] && ekdfz && wx['onMessage'](function (w_st) {
        w_st['isLoad'] && ($2ph['ziyuFileData'][w_st['url']] = w_st['data']);
      });
    }, $h2o['onMkdirCallBack'] = function (vx7, r5g84y) {
      if (!vx7) $2ph['filesListObj'] = JSON['parse'](r5g84y['data']);
    }, $h2o['pixelRatio'] = function () {
      if (!$h2o['EnvConfig']['pixelRatioInt']) try {
        var ay45rg = wx['getSystemInfoSync']();return $h2o['EnvConfig']['pixelRatioInt'] = ay45rg['pixelRatio'], ay45rg = ay45rg, ay45rg['pixelRatio'];
      } catch (_0jt6s) {}return $h2o['EnvConfig']['pixelRatioInt'];
    }, $h2o['createElement'] = function (_6s0qj) {
      if (_6s0qj == 'canvas') {
        var zfid8k;return $h2o['idx'] == 0x1 ? $h2o['isZiYu'] ? (zfid8k = sharedCanvas, zfid8k['style'] = {}) : zfid8k = window['canvas'] : zfid8k = window['wx']['createCanvas'](), $h2o['idx']++, zfid8k;
      } else {
        if (_6s0qj == 'textarea' || _6s0qj == 'input') return $h2o['onCreateInput'](_6s0qj);else {
          if (_6s0qj == 'div') {
            var kdife = $h2o['_preCreateElement'](_6s0qj);return kdife['contains'] = function (cnxlv) {
              return null;
            }, kdife['removeChild'] = function (kvcn) {}, kdife;
          } else return $h2o['_preCreateElement'](_6s0qj);
        }
      }
    }, $h2o['onCreateInput'] = function (gr85y) {
      var enlcdk = $h2o['_preCreateElement'](gr85y);return enlcdk['focus'] = nxwv7m['wxinputFocus'], enlcdk['blur'] = nxwv7m['wxinputblur'], enlcdk['style'] = {}, enlcdk['value'] = 0x0, enlcdk['parentElement'] = {}, enlcdk['placeholder'] = {}, enlcdk['type'] = {}, enlcdk['setColor'] = function (j_6s0q) {}, enlcdk['setType'] = function (yf58rg) {}, enlcdk['setFontFace'] = function (u3ya94) {}, enlcdk['addEventListener'] = function (uo923p) {}, enlcdk['contains'] = function (p9o3a) {
        return null;
      }, enlcdk['removeChild'] = function (mn7vc) {}, enlcdk;
    }, $h2o['createShaderCondition'] = function (lezkdc) {
      var y3g4a = this,
          t06w_s = function () {
        var nledkc = lezkdc;return y3g4a[lezkdc['replace']('this.', '')];
      };return t06w_s;
    }, $h2o['EnvConfig'] = null, $h2o['window'] = null, $h2o['_preCreateElement'] = null, $h2o['_inited'] = ![], $h2o['wxRequest'] = null, $h2o['systemInfo'] = null, $h2o['version'] = '0.0.1', $h2o['isZiYu'] = ![], $h2o['isPosMsgYu'] = ![], $h2o['parseXMLFromString'] = function (ir5gf) {
      var z85fid, lizk;ir5gf = ir5gf['replace'](/>\s+</g, '><');try {
        z85fid = new window['Parser']['DOMParser']()['parseFromString'](ir5gf, 'text/xml');
      } catch (v7nxc) {
        throw '需要引入xml解析库文件';
      }return z85fid;
    }, $h2o['idx'] = 0x1, $h2o;
  }(),
      smtw7x = function () {
    function o$1ph2() {}_6j0t(o$1ph2, 'laya.wx.mini.MiniImage');var twmsx = o$1ph2['prototype'];return twmsx['_loadImage'] = function (klcezd) {
      var rgy34 = this,
          zleckd = ![];klcezd['indexOf']('layaNativeDir/') == -0x1 && (zleckd = !![], klcezd = zi5fr8['formatURL'](klcezd));if (!$2ph['getFileInfo'](klcezd)) {
        if (klcezd['indexOf']('http://') != -0x1 || klcezd['indexOf']('https://') != -0x1) $2ph['downImg'](klcezd, new gr43y(o$1ph2, o$1ph2['onDownImgCallBack'], [klcezd, rgy34]), klcezd);else o$1ph2['onCreateImage'](klcezd, rgy34, !![]);
      } else o$1ph2['onCreateImage'](klcezd, rgy34, !zleckd);
    }, o$1ph2['onDownImgCallBack'] = function (g5rif8, klcnv, vcxnm) {
      if (!vcxnm) o$1ph2['onCreateImage'](g5rif8, klcnv);else klcnv['onError'](null);
    }, o$1ph2['onCreateImage'] = function ($p1h, mws60t, f5ry8g) {
      f5ry8g === void 0x0 && (f5ry8g = ![]);var s_06w;if (!f5ry8g) {
        var nvx7wm = $2ph['getFileInfo']($p1h),
            j0b6q_ = nvx7wm['md5'];s_06w = $2ph['getFileNativePath'](j0b6q_);
      } else s_06w = $p1h;if (mws60t['imgCache'] == null) mws60t['imgCache'] = {};var rg584;function len() {
        rg584['onload'] = null, rg584['onerror'] = null, delete mws60t['imgCache'][$p1h];
      };var a3y94 = function () {
        len(), mws60t['onLoaded'](rg584);
      },
          envclk = function () {
        len(), mws60t['event']('error', 'Load image failed');
      };mws60t['_type'] == 'nativeimage' ? (rg584 = new zdlekc['window']['Image'](), rg584['crossOrigin'] = '', rg584['onload'] = a3y94, rg584['onerror'] = envclk, rg584['src'] = s_06w, mws60t['imgCache'][$p1h] = rg584) : new p$ho['create'](s_06w, { 'onload': a3y94, 'onerror': envclk, 'onCreate': function (xtm7) {
          rg584 = xtm7, mws60t['imgCache'][$p1h] = xtm7;
        } });
    }, o$1ph2;
  }(),
      nxwv7m = function () {
    function o1u2() {}return _6j0t(o1u2, 'laya.wx.mini.MiniInput'), o1u2['_createInputElement'] = function () {
      _bq0j['_initInput'](_bq0j['area'] = zdlekc['createElement']('textarea')), _bq0j['_initInput'](_bq0j['input'] = zdlekc['createElement']('input')), _bq0j['inputContainer'] = zdlekc['createElement']('div'), _bq0j['inputContainer']['style']['position'] = 'absolute', _bq0j['inputContainer']['style']['zIndex'] = 0x186a0, zdlekc['container']['appendChild'](_bq0j['inputContainer']), _bq0j['inputContainer']['setPos'] = function (tws60, kdifz8) {
        _bq0j['inputContainer']['style']['left'] = tws60 + 'px', _bq0j['inputContainer']['style']['top'] = kdifz8 + 'px';
      }, ohp$2['stage']['on']('resize', null, o1u2['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fizd) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), rfgy5['_soundClass'] = oap39u, rfgy5['_musicClass'] = oap39u, window['_videoClass'] = m7tw;
    }, o1u2['_onStageResize'] = function () {
      var t67s = ohp$2['stage']['_canvasTransform']['identity']();t67s['scale'](zdlekc['width'] / vcnkle['canvas']['width'] / zeldi['getPixelRatio'](), zdlekc['height'] / vcnkle['canvas']['height'] / zeldi['getPixelRatio']());
    }, o1u2['wxinputFocus'] = function (ifr85z) {
      var idz8kf = _bq0j['inputElement']['target'];if (idz8kf && !idz8kf['editable']) return;wm6s['window']['wx']['offKeyboardConfirm'](), wm6s['window']['wx']['offKeyboardInput'](), wm6s['window']['wx']['showKeyboard']({ 'defaultValue': idz8kf['text'], 'maxLength': idz8kf['maxChars'], 'multiple': idz8kf['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (q_s06) {}, 'fail': function (zdki8) {} }), wm6s['window']['wx']['onKeyboardConfirm'](function (swmt67) {
        var rgy584 = swmt67 ? swmt67['value'] : '';idz8kf['text'] = rgy584, idz8kf['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), wm6s['window']['wx']['onKeyboardInput'](function (q6_bj) {
        var o493u = q6_bj ? q6_bj['value'] : '';if (!idz8kf['multiline']) {
          if (o493u['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }idz8kf['text'] = o493u, idz8kf['event']('input');
      });
    }, o1u2['inputEnter'] = function () {
      _bq0j['inputElement']['target']['focus'] = ![];
    }, o1u2['wxinputblur'] = function () {
      o1u2['hideKeyboard']();
    }, o1u2['hideKeyboard'] = function () {
      wm6s['window']['wx']['offKeyboardConfirm'](), wm6s['window']['wx']['offKeyboardInput'](), wm6s['window']['wx']['hideKeyboard']({ 'success': function (o3u2) {
          console['log']('隐藏键盘');
        }, 'fail': function (_w6s0) {
          console['log']('隐藏键盘出错:' + (_w6s0 ? _w6s0['errMsg'] : ''));
        } });
    }, o1u2;
  }(),
      nlcv7 = function () {
    function idkzf8() {}_6j0t(idkzf8, 'laya.wx.mini.MiniLoader');var xc7nmv = idkzf8['prototype'];return xc7nmv['load'] = function (i5z8fr, izkef, zfide, ekzdcl, z5fi8d) {
      zfide === void 0x0 && (zfide = !![]), z5fi8d === void 0x0 && (z5fi8d = ![]);var kdlize = this;kdlize['_url'] = i5z8fr;if (i5z8fr['indexOf']('data:image') === 0x0) kdlize['_type'] = izkef = 'image';else kdlize['_type'] = izkef || (izkef = kdlize['getTypeFromUrl'](i5z8fr));kdlize['_cache'] = zfide, kdlize['_data'] = null;var wm7s6t = 'ascii';if (i5z8fr['indexOf']('.fnt') != -0x1) wm7s6t = 'utf8';else izkef == 'arraybuffer' && (wm7s6t = '');;var ap3u = xcnl7v['getFileExtension'](i5z8fr);if (idkzf8['_fileTypeArr']['indexOf'](ap3u) != -0x1) wm6s['EnvConfig']['load']['call'](this, i5z8fr, izkef, zfide, ekzdcl, z5fi8d);else {
        if (!$2ph['getFileInfo'](i5z8fr)) {
          if (i5z8fr['indexOf']('layaNativeDir/') != -0x1) {
            if (wm6s['isZiYu']) {
              var u43a9o = $2ph['ziyuFileData'][i5z8fr];kdlize['onLoaded'](u43a9o);return;
            } else {
              cosnole['log']('read read'), $2ph['read'](i5z8fr, wm7s6t, new gr43y(idkzf8, idkzf8['onReadNativeCallBack'], [wm7s6t, i5z8fr, izkef, zfide, ekzdcl, z5fi8d, kdlize]));return;
            }
          }if (zi5fr8['rootPath'] == '') var xstmw = i5z8fr;else xstmw = i5z8fr['split'](zi5fr8['rootPath'])[0x0];i5z8fr['indexOf']('http://') != -0x1 || i5z8fr['indexOf']('https://') != -0x1 ? wm6s['EnvConfig']['load']['call'](kdlize, i5z8fr, izkef, zfide, ekzdcl, z5fi8d) : $2ph['readFile'](xstmw, wm7s6t, new gr43y(idkzf8, idkzf8['onReadNativeCallBack'], [wm7s6t, i5z8fr, izkef, zfide, ekzdcl, z5fi8d, kdlize]), i5z8fr);
        } else wm6s['EnvConfig']['load']['call'](this, i5z8fr, izkef, zfide, ekzdcl, z5fi8d);
      }
    }, xc7nmv['resMgrLoad'] = function (g5i8rf, rg5i8, ts0_w6, nlcevx, x7wvn, $op12u, lxvcne) {
      ts0_w6 === void 0x0 && (ts0_w6 = 0x0), nlcevx === void 0x0 && (nlcevx = ![]), x7wvn === void 0x0 && (x7wvn = ![]), $op12u === void 0x0 && ($op12u = 0x0), lxvcne === void 0x0 && (lxvcne = 0x3), g5i8rf['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', g5i8rf), wm6s['EnvConfig']['resMgrLoad'](g5i8rf, (j_qs06, _6sw0, h$p2) => {
        idkzf8['prototype']['resMgrLoadCallBack'](j_qs06, _6sw0, h$p2, rg5i8);
      }, ts0_w6, nlcevx, x7wvn, $op12u, lxvcne);
    }, xc7nmv['resMgrLoadCallBack'] = function (izkdef, i5frg, celnx, sw0tm6) {
      console['log']('buff:::', izkdef, celnx, $2ph['fileNativeDir'] + '///' + $2ph['fileListName']), sw0tm6(izkdef, i5frg, celnx);
    }, xc7nmv['clearRes'] = function (ezlkc, ekcdz) {
      ekcdz === void 0x0 && (ekcdz = ![]);var rg43ya = this;rg43ya['clearRes'](ezlkc, ekcdz);var d8f5zi = $2ph['getFileInfo'](ezlkc);if (d8f5zi && (ezlkc['indexOf']('http://') != -0x1 || ezlkc['indexOf']('https://') != -0x1)) {
        var x7mnvc = d8f5zi['md5'],
            rg548 = $2ph['getFileNativePath'](x7mnvc);$2ph['remove'](rg548);
      }
    }, idkzf8['onReadNativeCallBack'] = function (po9, agy3, tsw7m, i8frg5, ef, vxn7l, vtx7, vt7x, yagr) {
      i8frg5 === void 0x0 && (i8frg5 = !![]), vxn7l === void 0x0 && (vxn7l = ![]), vt7x === void 0x0 && (vt7x = 0x0);if (!vt7x) {
        var w7tmx;if (tsw7m == 'json' || tsw7m == 'atlas') w7tmx = wm6s['getJson'](yagr['data']);else tsw7m == 'xml' ? w7tmx = xcnl7v['parseXMLFromString'](yagr['data']) : w7tmx = yagr['data'];vtx7['onLoaded'](w7tmx), !wm6s['isZiYu'] && wm6s['isPosMsgYu'] && tsw7m != 'arraybuffer' && wx['postMessage']({ 'url': agy3, 'data': w7tmx, 'isLoad': !![] });
      } else vt7x == 0x1 && wm6s['EnvConfig']['load']['call'](vtx7, agy3, tsw7m, i8frg5, ef, vxn7l);
    }, wvmx7(idkzf8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), idkzf8;
  }(),
      $2ph = function (ielkz) {
    function rzi5f8() {
      rzi5f8['__super']['call'](this);;
    }return _6j0t(rzi5f8, 'laya.wx.mini.MiniFileMgr', ielkz), rzi5f8['isLoadFile'] = function (fkeiz) {
      return rzi5f8['_fileTypeArr']['indexOf'](fkeiz) != -0x1 ? !![] : ![];
    }, rzi5f8['getFileInfo'] = function (u439ao) {
      var j60_ts = u439ao['split']('?')[0x0],
          ezcdlk = rzi5f8['filesListObj'][j60_ts];if (ezcdlk == null) return null;else return ezcdlk;return null;
    }, rzi5f8['onFileUpdate'] = function (o3u4a9, h21o$p) {
      var a5y = o3u4a9['split']('/'),
          dikefz = a5y[a5y['length'] - 0x1],
          aou493 = rzi5f8['getFileInfo'](h21o$p);if (aou493 == null) rzi5f8['onSaveFile'](h21o$p, dikefz);else {
        if (aou493['readyUrl'] != h21o$p) rzi5f8['remove'](dikefz, h21o$p);
      }
    }, rzi5f8['exits'] = function (wtsm60, dlzc) {
      var ayr45g = rzi5f8['getFileNativePath'](wtsm60);rzi5f8['fs']['getFileInfo']({ 'filePath': ayr45g, 'success': function (y34agr) {
          dlzc != null && dlzc['runWith']([0x0, y34agr]);
        }, 'fail': function (cvnlx7) {
          dlzc != null && dlzc['runWith']([0x1, cvnlx7]);
        } });
    }, rzi5f8['read'] = function (nxv7lc, a9o4u3, swt06, o2p1) {
      a9o4u3 === void 0x0 && (a9o4u3 = 'ascill'), o2p1 === void 0x0 && (o2p1 = '');var irzf8;o2p1 != '' ? irzf8 = rzi5f8['getFileNativePath'](nxv7lc) : irzf8 = nxv7lc, rzi5f8['fs']['readFile']({ 'filePath': irzf8, 'encoding': a9o4u3, 'success': function (lcnke) {
          swt06 != null && swt06['runWith']([0x0, lcnke]);
        }, 'fail': function (ap93uo) {
          if (ap93uo && o2p1 != '') rzi5f8['down'](o2p1, a9o4u3, swt06, o2p1);else swt06 != null && swt06['runWith']([0x1]);
        } });
    }, rzi5f8['readNativeFile'] = function (lvxcn, xnevl) {
      rzi5f8['fs']['readFile']({ 'filePath': lvxcn, 'encoding': '', 'success': function (z8dfki) {
          xnevl != null && xnevl['runWith']([0x0]);
        }, 'fail': function (vmn) {
          xnevl != null && xnevl['runWith']([0x1]);
        } });
    }, rzi5f8['down'] = function (oph1$, y94a3u, exlvnc, kezcd) {
      y94a3u === void 0x0 && (y94a3u = 'ascill'), kezcd === void 0x0 && (kezcd = '');var gay54r = rzi5f8['getFileNativePath'](kezcd),
          fyrg5 = rzi5f8['wxdown']({ 'url': oph1$, 'filePath': gay54r, 'success': function (gy845r) {
          if (gy845r['statusCode'] === 0xc8) rzi5f8['readFile'](gy845r['filePath'], y94a3u, exlvnc, kezcd);
        }, 'fail': function (g8ry5) {
          exlvnc != null && exlvnc['runWith']([0x1, g8ry5]);
        } });fyrg5['onProgressUpdate'](function (cled) {
        exlvnc != null && exlvnc['runWith']([0x2, cled['progress']]);
      });
    }, rzi5f8['readFile'] = function (stm60, xlecv, cexv, wtms76) {
      xlecv === void 0x0 && (xlecv = 'ascill'), wtms76 === void 0x0 && (wtms76 = ''), rzi5f8['fs']['readFile']({ 'filePath': stm60, 'encoding': xlecv, 'success': function (i8d5) {
          if (stm60['indexOf']('http://') != -0x1 || stm60['indexOf']('https://') != -0x1) rzi5f8['onFileUpdate'](stm60, wtms76);cexv != null && cexv['runWith']([0x0, i8d5]);
        }, 'fail': function (mw0s6t) {
          if (mw0s6t) cexv != null && cexv['runWith']([0x1, mw0s6t]);
        } });
    }, rzi5f8['downImg'] = function (gy8, dfkze, ifdk) {
      ifdk === void 0x0 && (ifdk = '');var vek = rzi5f8['wxdown']({ 'url': gy8, 'success': function (xwn7) {
          xwn7['statusCode'] === 0xc8 && rzi5f8['copyFile'](xwn7['tempFilePath'], ifdk, dfkze);
        }, 'fail': function (nvekl) {
          dfkze != null && dfkze['runWith']([0x1, nvekl]);
        } });
    }, rzi5f8['copyFile'] = function (xnmw7v, zkeli, g4a9y) {
      var ph2o1 = xnmw7v['split']('/'),
          sw0_6 = ph2o1[ph2o1['length'] - 0x1],
          jts60 = zkeli['split']('?')[0x0],
          f5ryg8 = rzi5f8['getFileInfo'](zkeli),
          zkifd8 = rzi5f8['getFileNativePath'](sw0_6);rzi5f8['fs']['copyFile']({ 'srcPath': xnmw7v, 'destPath': zkifd8, 'success': function (kfi8zd) {
          if (!f5ryg8) rzi5f8['onSaveFile'](zkeli, sw0_6), g4a9y != null && g4a9y['runWith']([0x0]);else {
            if (f5ryg8['readyUrl'] != zkeli) rzi5f8['remove'](sw0_6, zkeli, g4a9y);
          }
        }, 'fail': function (t7sxm) {
          g4a9y != null && g4a9y['runWith']([0x1, t7sxm]);
        } });
    }, rzi5f8['getFileNativePath'] = function (vmxwn7) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vmxwn7;
    }, rzi5f8['remove'] = function (elzdi, yg5a4, m0s6wt) {
      yg5a4 === void 0x0 && (yg5a4 = '');var s7tw6 = rzi5f8['getFileInfo'](yg5a4),
          kdezc = rzi5f8['getFileNativePath'](s7tw6['md5']);ohp$2['loader']['clearRes'](s7tw6['readyUrl']), rzi5f8['fs']['unlink']({ 'filePath': kdezc, 'success': function (rg854y) {
          if (yg5a4 != '') rzi5f8['onSaveFile'](yg5a4, elzdi);m0s6wt != null && m0s6wt['runWith']([0x0]);
        }, 'fail': function (clx7vn) {} });
    }, rzi5f8['onSaveFile'] = function (cv7ln, elxv) {
      var elx = cv7ln['split']('?')[0x0];rzi5f8['filesListObj'][elx] = { 'md5': elxv, 'readyUrl': cv7ln }, rzi5f8['fs']['writeFile']({ 'filePath': rzi5f8['fileNativeDir'] + '/' + rzi5f8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rzi5f8['filesListObj']), 'success': function (p29ou) {
          console['log']('写入测试测试成功：', p29ou);
        }, 'fail': function (likez) {
          console['log']('写入测试测试失败：', likez);
        } });
    }, rzi5f8['existDir'] = function (a4gy3r, ekldn) {
      rzi5f8['fs']['mkdir']({ 'dirPath': a4gy3r, 'success': function (kefid) {
          ekldn != null && ekldn['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (fgr) {
          if (fgr['errMsg']['indexOf']('file already exists') != -0x1) rzi5f8['readSync'](rzi5f8['fileListName'], 'utf8', ekldn);else ekldn != null && ekldn['runWith']([0x1, fgr]);
        } });
    }, rzi5f8['readSync'] = function (tsw6m7, w6s7t, aou49, nlxc7) {
      w6s7t === void 0x0 && (w6s7t = 'ascill'), nlxc7 === void 0x0 && (nlxc7 = '');var fidz8 = rzi5f8['getFileNativePath'](tsw6m7),
          mcnv7;try {
        mcnv7 = rzi5f8['fs']['readFileSync'](fidz8), aou49 != null && aou49['runWith']([0x0, { 'data': mcnv7 }]);
      } catch (excln) {
        aou49 != null && aou49['runWith']([0x1]);
      }
    }, rzi5f8['readCache'] = function () {}, rzi5f8['writeCache'] = function (lenxcv) {
      var m0s = readyUrl['split']('?')[0x0];rzi5f8['filesListObj'][m0s] = { 'md5': md5Name, 'readyUrl': readyUrl }, rzi5f8['fs']['writeFile']({ 'filePath': rzi5f8['fileNativeDir'] + '/' + rzi5f8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rzi5f8['filesListObj']), 'success': function (op3u9) {}, 'fail': function (xwm7ts) {} });
    }, rzi5f8['setNativeFileDir'] = function (o$p1u) {
      rzi5f8['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + o$p1u;
    }, rzi5f8['filesListObj'] = {}, rzi5f8['fileNativeDir'] = null, rzi5f8['fileListName'] = 'layaairfiles.txt', rzi5f8['ziyuFileData'] = {}, wvmx7(rzi5f8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), rzi5f8;
  }(xv7lc),
      oap39u = function (zir) {
    function fri8z() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], fri8z['__super']['call'](this), this['_sound'] = fri8z['_createSound'](), this['_chanell'] = new dzliek(this['_sound']);
    }_6j0t(fri8z, 'laya.wx.mini.MiniSound', zir);var qs_6j0 = fri8z['prototype'];return qs_6j0['load'] = function (uo21$) {
      var j6bq_0 = this;uo21$ = zi5fr8['formatURL'](uo21$), this['url'] = uo21$;if (fri8z['_audioCache'][uo21$]) {
        this['event']('complete');return;
      }function _6st0j() {
        if (fri8z['_null'] != undefined) j6bq_0['_sound']['onCanplay'](fri8z['_null']), j6bq_0['_sound']['onError'](fri8z['_null']);else try {
          j6bq_0['_sound']['onCanplay'](null), j6bq_0['_sound']['onError'](null), fri8z['_null'] = null;
        } catch (nkdl) {
          console['warn']('[wxmini] _clearSound:' + nkdl), j6bq_0['_sound']['onCanplay'](wmvt7x), j6bq_0['_sound']['onError'](wmvt7x), fri8z['_null'] = wmvt7x;
        }
      }function dif85() {
        nlcvke['loaded'] = !![], nlcvke['event']('complete'), fri8z['_audioCache'][nlcvke['url']] = nlcvke;
      }function cxmnv(vleck) {
        console['error']('errCode=' + vleck['errCode'] + '  errMsg=' + vleck['errMsg']), nlcvke['event']('error');
      }function wmvt7x() {}this['_sound']['onCanplay'](dif85), this['_sound']['onError'](cxmnv), this['_sound']['src'] = uo21$;var nlcvke = this;
    }, qs_6j0['play'] = function (w7t6ms, bj6q_0) {
      w7t6ms === void 0x0 && (w7t6ms = 0x0), bj6q_0 === void 0x0 && (bj6q_0 = 0x0);var cvnlek, dfk8iz;if (this['url'] == rfgy5['_tMusic']) {
        if (!fri8z['_musicAudio']) fri8z['_musicAudio'] = this['_sound'];cvnlek = fri8z['_musicAudio'], dfk8iz = this['_chanell'];
      } else cvnlek = this['_sound'], dfk8iz = this['_chanell'];return cvnlek['src'] = this['url'], cvnlek['startTime'] = 0x0, dfk8iz['isStopped'] && (dfk8iz['url'] = this['url'], dfk8iz['loops'] = bj6q_0, dfk8iz['startTime'] = w7t6ms, dfk8iz['play'](), rfgy5['addChannel'](dfk8iz)), dfk8iz;
    }, qs_6j0['dispose'] = function () {
      var vklce = fri8z['_audioCache'][this['url']];vklce && (vklce['src'] = '', delete fri8z['_audioCache'][this['url']]);
    }, diezlk(0x0, qs_6j0, 'duration', function () {
      return this['_sound']['duration'];
    }), fri8z['_createSound'] = function () {
      fri8z['_id']++;var uapo9 = wm6s['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return uapo9;
    }, fri8z['_musicAudio'] = null, fri8z['_id'] = 0x0, fri8z['_audioCache'] = {}, fri8z['_null'] = undefined, fri8z;
  }(xv7lc),
      dzliek = function (f5dz) {
    function wmx7st(yagr34) {
      this['_audio'] = null, this['_onEnd'] = null, wmx7st['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = yagr34, this['_onEnd'] = xcnl7v['bind'](this['__onEnd'], this), yagr34['onEnded'](this['_onEnd']);
    }_6j0t(wmx7st, 'laya.wx.mini.MiniSoundChannel', f5dz);var gr34y = wmx7st['prototype'];return gr34y['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ohp$2['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, gr34y['__onNull'] = function () {}, gr34y['play'] = function () {
      this['isStopped'] = ![], rfgy5['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, gr34y['stop'] = function () {
      this['isStopped'] = !![], rfgy5['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, gr34y['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, gr34y['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], rfgy5['addChannel'](this), this['_audio']['play']();
    }, diezlk(0x0, gr34y, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), diezlk(0x0, gr34y, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), diezlk(0x0, gr34y, 'volume', function () {
      return 0x1;
    }, function (zidk8f) {}), wmx7st['_null'] = undefined, wmx7st;
  }(_j06bq),
      m7tw = function () {
    function p$u12() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = wm6s['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }_6j0t(p$u12, 'laya.wx.mini.MiniVideo');var ekcdl = p$u12['prototype'];return ekcdl['on'] = function (kdizf, kldzie, s0wt6m) {
      if (kdizf == 'loadedmetadata') this['onPlayFunc'] = s0wt6m['bind'](kldzie), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else kdizf == 'ended' && (this['onEndedFunC'] = s0wt6m['bind'](kldzie), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, ekcdl['onTimeUpdateFunc'] = function (g4ay93) {
      this['position'] = g4ay93['position'], this['_duration'] = g4ay93['duration'];
    }, ekcdl['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, ekcdl['onended'] = function (uo23, agy349) {
      this['onEndedFunC'] = agy349['bind'](uo23), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, ekcdl['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, ekcdl['off'] = function (cvlek, vncl, klie) {
      if (cvlek == 'loadedmetadata') this['onPlayFunc'] = klie['bind'](vncl), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else cvlek == 'ended' && (this['onEndedFunC'] = klie['bind'](vncl), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, ekcdl['load'] = function (z8dfik) {
      if (!this['videoElement']) return;this['videoElement']['src'] = z8dfik;
    }, ekcdl['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, ekcdl['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, ekcdl['size'] = function (fdizek, j6_st) {
      if (!this['videoElement']) return;this['videoElement']['width'] = fdizek, this['videoElement']['height'] = j6_st;
    }, ekcdl['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, ekcdl['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, diezlk(0x0, ekcdl, 'duration', function () {
      return this['_duration'];
    }), diezlk(0x0, ekcdl, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (o2hp$) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = o2hp$;
    }), diezlk(0x0, ekcdl, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), diezlk(0x0, ekcdl, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), diezlk(0x0, ekcdl, 'ended', function () {
      return this['videoend'];
    }), diezlk(0x0, ekcdl, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (wvmt7x) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = wvmt7x;
    }), diezlk(0x0, ekcdl, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (j6t0s) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = j6t0s;
    }), diezlk(0x0, ekcdl, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (ya34g) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = ya34g;
    }), diezlk(0x0, ekcdl, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), diezlk(0x0, ekcdl, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (j_6b0) {
      if (!this['videoElement']) return;this['videoElement']['x'] = j_6b0;
    }), diezlk(0x0, ekcdl, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (veln) {
      if (!this['videoElement']) return;this['videoElement']['y'] = veln;
    }), diezlk(0x0, ekcdl, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), diezlk(0x0, ekcdl, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (w76tm) {
      if (!this['videoElement']) return;this['videoElement']['src'] = w76tm;
    }), diezlk(0x0, ekcdl, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (h12o$) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = h12o$;
    }), diezlk(0x0, ekcdl, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (edcnl) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = edcnl;
    }), p$u12;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var kieldz in Laya) {
    var kifd8 = Laya[kieldz];kifd8 && kifd8['__isclass'] && (exports[kieldz] = kifd8);
  }
});