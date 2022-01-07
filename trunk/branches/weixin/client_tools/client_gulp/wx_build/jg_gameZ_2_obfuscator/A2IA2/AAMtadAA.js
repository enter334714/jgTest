var d = wx.$A;
(function (window, document, tbqx_) {
  var r745f = tbqx_['un'],
      txbpi = tbqx_['uns'],
      av09e$ = tbqx_['static'],
      fgr74_ = tbqx_['class'],
      ibpxty = tbqx_['getset'],
      ob4q_g = tbqx_['__newvec'],
      a$en9 = laya['utils']['Browser'],
      $a89v = laya['events']['Event'],
      jzdhs = laya['events']['EventDispatcher'],
      xyqitb = laya['resource']['HTMLImage'],
      j6ndsh = laya['utils']['Handler'],
      $9ev = laya['display']['Input'],
      byoxt = laya['net']['Loader'],
      yi1xt = laya['maths']['Matrix'],
      yi1tpx = laya['renders']['Render'],
      kpi13 = laya['utils']['RunDriver'],
      nm9$d = laya['media']['Sound'],
      vu08k3 = laya['media']['SoundChannel'],
      $d9 = laya['media']['SoundManager'],
      men6 = laya['display']['Stage'],
      sh6w = laya['net']['URL'],
      shw6 = laya['utils']['Utils'],
      g5rf4 = function () {
    function zd6j() {}return fgr74_(zd6j, 'laya.wx.mini.MiniAdpter'), zd6j['getJson'] = function (zw6ljh) {
      return JSON['parse'](zw6ljh);
    }, zd6j['init'] = function (a9$0v, oq_4rg) {
      a9$0v === void 0x0 && (a9$0v = ![]), oq_4rg === void 0x0 && (oq_4rg = ![]);if (zd6j['_inited']) return;zd6j['window'] = window;if (zd6j['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;zd6j['_inited'] = !![], zd6j['isZiYu'] = oq_4rg, zd6j['isPosMsgYu'] = a9$0v, zd6j['EnvConfig'] = {}, !zd6j['isZiYu'] && (p1xit['setNativeFileDir']('/layaairGame'), p1xit['existDir'](p1xit['fileNativeDir'], j6ndsh['create'](zd6j, zd6j['onMkdirCallBack']))), zd6j['window']['focus'] = function () {}, tbqx_['getUrlPath'] = function () {}, zd6j['window']['logtime'] = function (iyx1pk) {}, zd6j['window']['alertTimeLog'] = function (v8u0a) {}, zd6j['window']['resetShareInfo'] = function () {}, zd6j['window']['CanvasRenderingContext2D'] = function () {}, zd6j['window']['CanvasRenderingContext2D']['prototype'] = zd6j['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zd6j['window']['document']['body']['appendChild'] = function () {}, zd6j['EnvConfig']['pixelRatioInt'] = 0x0, kpi13['getPixelRatio'] = zd6j['pixelRatio'], zd6j['_preCreateElement'] = a$en9['createElement'], a$en9['createElement'] = zd6j['createElement'], kpi13['createShaderCondition'] = zd6j['createShaderCondition'], shw6['parseXMLFromString'] = zd6j['parseXMLFromString'], $9ev['_createInputElement'] = bqty['_createInputElement'], zd6j['EnvConfig']['load'] = byoxt['prototype']['load'], byoxt['prototype']['load'] = ikyu1['prototype']['load'], zd6j['isZiYu'] && a9$0v && wx['onMessage'](function (_4ogr) {
        _4ogr['isLoad'] && (p1xit['ziyuFileData'][_4ogr['url']] = _4ogr['data']);
      });
    }, zd6j['onMkdirCallBack'] = function (_rg4fo, f_4r7) {
      if (!_rg4fo) p1xit['filesListObj'] = JSON['parse'](f_4r7['data']);
    }, zd6j['pixelRatio'] = function () {
      if (!zd6j['EnvConfig']['pixelRatioInt']) try {
        var nds6jm = wx['getSystemInfoSync']();return zd6j['EnvConfig']['pixelRatioInt'] = nds6jm['pixelRatio'], nds6jm = nds6jm, nds6jm['pixelRatio'];
      } catch (uk3i1) {}return zd6j['EnvConfig']['pixelRatioInt'];
    }, zd6j['createElement'] = function (a$v809) {
      if (a$v809 == 'canvas') {
        var wzj2lh;return zd6j['idx'] == 0x1 ? zd6j['isZiYu'] ? (wzj2lh = sharedCanvas, wzj2lh['style'] = {}) : wzj2lh = window['canvas'] : wzj2lh = window['wx']['createCanvas'](), zd6j['idx']++, wzj2lh;
      } else {
        if (a$v809 == 'textarea' || a$v809 == 'input') return zd6j['onCreateInput'](a$v809);else {
          if (a$v809 == 'div') {
            var wlz6h = zd6j['_preCreateElement'](a$v809);return wlz6h['contains'] = function (xtqbyo) {
              return null;
            }, wlz6h['removeChild'] = function (med$s) {}, wlz6h;
          } else return zd6j['_preCreateElement'](a$v809);
        }
      }
    }, zd6j['onCreateInput'] = function (v038a) {
      var js6zw = zd6j['_preCreateElement'](v038a);return js6zw['focus'] = bqty['wxinputFocus'], js6zw['blur'] = bqty['wxinputblur'], js6zw['style'] = {}, js6zw['value'] = 0x0, js6zw['parentElement'] = {}, js6zw['placeholder'] = {}, js6zw['type'] = {}, js6zw['setColor'] = function (ogtq) {}, js6zw['setType'] = function (ix1yk) {}, js6zw['setFontFace'] = function ($v9me) {}, js6zw['addEventListener'] = function (qo4) {}, js6zw['contains'] = function (njm6d) {
        return null;
      }, js6zw['removeChild'] = function (_toxq) {}, js6zw;
    }, zd6j['createShaderCondition'] = function (qro_) {
      var _rqg = this,
          ndms$e = function () {
        var g4bo_q = qro_;return _rqg[qro_['replace']('this.', '')];
      };return ndms$e;
    }, zd6j['EnvConfig'] = null, zd6j['window'] = null, zd6j['_preCreateElement'] = null, zd6j['_inited'] = ![], zd6j['wxRequest'] = null, zd6j['systemInfo'] = null, zd6j['version'] = '0.0.1', zd6j['isZiYu'] = ![], zd6j['isPosMsgYu'] = ![], zd6j['parseXMLFromString'] = function (b_qog4) {
      var whzjs6, r5;b_qog4 = b_qog4['replace'](/>\s+</g, '><');try {
        whzjs6 = new window['Parser']['DOMParser']()['parseFromString'](b_qog4, 'text/xml');
      } catch (wlz2) {
        throw '需要引入xml解析库文件';
      }return whzjs6;
    }, zd6j['idx'] = 0x1, zd6j;
  }(),
      ot_xbq = function () {
    function z2lh() {}fgr74_(z2lh, 'laya.wx.mini.MiniImage');var qytbi = z2lh['prototype'];return qytbi['_loadImage'] = function (xybiqt) {
      var med6s = this,
          gro_4f = ![];xybiqt['indexOf']('layaNativeDir/') == -0x1 && (gro_4f = !![], xybiqt = sh6w['formatURL'](xybiqt));if (!p1xit['getFileInfo'](xybiqt)) {
        if (xybiqt['indexOf']('http://') != -0x1 || xybiqt['indexOf']('https://') != -0x1) p1xit['downImg'](xybiqt, new j6ndsh(z2lh, z2lh['onDownImgCallBack'], [xybiqt, med6s]), xybiqt);else z2lh['onCreateImage'](xybiqt, med6s, !![]);
      } else z2lh['onCreateImage'](xybiqt, med6s, !gro_4f);
    }, z2lh['onDownImgCallBack'] = function (jzwh2, ipy1xt, ybtx) {
      if (!ybtx) z2lh['onCreateImage'](jzwh2, ipy1xt);else ipy1xt['onError'](null);
    }, z2lh['onCreateImage'] = function (kiyp, xtq_o, pyki1u) {
      pyki1u === void 0x0 && (pyki1u = ![]);var fgr54;if (!pyki1u) {
        var mden$ = p1xit['getFileInfo'](kiyp),
            mna9$e = mden$['md5'];fgr54 = p1xit['getFileNativePath'](mna9$e);
      } else fgr54 = kiyp;if (xtq_o['imgCache'] == null) xtq_o['imgCache'] = {};var hjzl;function zl6hj() {
        hjzl['onload'] = null, hjzl['onerror'] = null, delete xtq_o['imgCache'][kiyp];
      };var ixpyb = function () {
        zl6hj(), xtq_o['onLoaded'](hjzl);
      },
          me9$d = function () {
        zl6hj(), xtq_o['event']('error', 'Load image failed');
      };xtq_o['_type'] == 'nativeimage' ? (hjzl = new a$en9['window']['Image'](), hjzl['crossOrigin'] = '', hjzl['onload'] = ixpyb, hjzl['onerror'] = me9$d, hjzl['src'] = fgr54, xtq_o['imgCache'][kiyp] = hjzl) : new xyqitb['create'](fgr54, { 'onload': ixpyb, 'onerror': me9$d, 'onCreate': function (tipxy1) {
          hjzl = tipxy1, xtq_o['imgCache'][kiyp] = tipxy1;
        } });
    }, z2lh;
  }(),
      bqty = function () {
    function gr57f() {}return fgr74_(gr57f, 'laya.wx.mini.MiniInput'), gr57f['_createInputElement'] = function () {
      $9ev['_initInput']($9ev['area'] = a$en9['createElement']('textarea')), $9ev['_initInput']($9ev['input'] = a$en9['createElement']('input')), $9ev['inputContainer'] = a$en9['createElement']('div'), $9ev['inputContainer']['style']['position'] = 'absolute', $9ev['inputContainer']['style']['zIndex'] = 0x186a0, a$en9['container']['appendChild']($9ev['inputContainer']), $9ev['inputContainer']['setPos'] = function (nem$9d, ukip13) {
        $9ev['inputContainer']['style']['left'] = nem$9d + 'px', $9ev['inputContainer']['style']['top'] = ukip13 + 'px';
      }, tbqx_['stage']['on']('resize', null, gr57f['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (v08a3u) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), $d9['_soundClass'] = zjs6hd, $d9['_musicClass'] = zjs6hd;
    }, gr57f['_onStageResize'] = function () {
      var sem$nd = tbqx_['stage']['_canvasTransform']['identity']();sem$nd['scale'](a$en9['width'] / yi1tpx['canvas']['width'] / kpi13['getPixelRatio'](), a$en9['height'] / yi1tpx['canvas']['height'] / kpi13['getPixelRatio']());
    }, gr57f['wxinputFocus'] = function (ybxit) {
      var snj6d = $9ev['inputElement']['target'];if (snj6d && !snj6d['editable']) return;g5rf4['window']['wx']['offKeyboardConfirm'](), g5rf4['window']['wx']['offKeyboardInput'](), g5rf4['window']['wx']['showKeyboard']({ 'defaultValue': snj6d['text'], 'maxLength': snj6d['maxChars'], 'multiple': snj6d['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (dshzj6) {}, 'fail': function (_otx) {} }), g5rf4['window']['wx']['onKeyboardConfirm'](function (hw6jsz) {
        var au380 = hw6jsz ? hw6jsz['value'] : '';snj6d['text'] = au380, snj6d['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), g5rf4['window']['wx']['onKeyboardInput'](function (djsh6) {
        var ky1ixp = djsh6 ? djsh6['value'] : '';if (!snj6d['multiline']) {
          if (ky1ixp['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }snj6d['text'] = ky1ixp, snj6d['event']('input');
      });
    }, gr57f['inputEnter'] = function () {
      $9ev['inputElement']['target']['focus'] = ![];
    }, gr57f['wxinputblur'] = function () {
      gr57f['hideKeyboard']();
    }, gr57f['hideKeyboard'] = function () {
      g5rf4['window']['wx']['offKeyboardConfirm'](), g5rf4['window']['wx']['offKeyboardInput'](), g5rf4['window']['wx']['hideKeyboard']({ 'success': function (q_ogbt) {
          console['log']('隐藏键盘');
        }, 'fail': function (iyxpb) {
          console['log']('隐藏键盘出错:' + (iyxpb ? iyxpb['errMsg'] : ''));
        } });
    }, gr57f;
  }(),
      ikyu1 = function () {
    function ytip() {}fgr74_(ytip, 'laya.wx.mini.MiniLoader');var a$0v = ytip['prototype'];return a$0v['load'] = function (r_g, js6hnd, e$9mav, hz2w, nem$9a) {
      e$9mav === void 0x0 && (e$9mav = !![]), nem$9a === void 0x0 && (nem$9a = ![]);var v8a0$ = this;v8a0$['_url'] = r_g;if (r_g['indexOf']('data:image') === 0x0) v8a0$['_type'] = js6hnd = 'image';else v8a0$['_type'] = js6hnd || (js6hnd = v8a0$['getTypeFromUrl'](r_g));v8a0$['_cache'] = e$9mav, v8a0$['_data'] = null;var bq_4o = 'ascii';if (r_g['indexOf']('.fnt') != -0x1) bq_4o = 'utf8';else js6hnd == 'arraybuffer' && (bq_4o = '');;var grf7_ = shw6['getFileExtension'](r_g);if (ytip['_fileTypeArr']['indexOf'](grf7_) != -0x1) g5rf4['EnvConfig']['load']['call'](this, r_g, js6hnd, e$9mav, hz2w, nem$9a);else {
        if (!p1xit['getFileInfo'](r_g)) {
          if (r_g['indexOf']('layaNativeDir/') != -0x1) {
            if (g5rf4['isZiYu']) {
              var k1yiu = p1xit['ziyuFileData'][r_g];v8a0$['onLoaded'](k1yiu);return;
            } else {
              cosnole['log']('read read'), p1xit['read'](r_g, bq_4o, new j6ndsh(ytip, ytip['onReadNativeCallBack'], [bq_4o, r_g, js6hnd, e$9mav, hz2w, nem$9a, v8a0$]));return;
            }
          }if (sh6w['rootPath'] == '') var $send = r_g;else $send = r_g['split'](sh6w['rootPath'])[0x0];r_g['indexOf']('http://') != -0x1 || r_g['indexOf']('https://') != -0x1 ? g5rf4['EnvConfig']['load']['call'](v8a0$, r_g, js6hnd, e$9mav, hz2w, nem$9a) : p1xit['readFile']($send, bq_4o, new j6ndsh(ytip, ytip['onReadNativeCallBack'], [bq_4o, r_g, js6hnd, e$9mav, hz2w, nem$9a, v8a0$]), r_g);
        } else g5rf4['EnvConfig']['load']['call'](this, r_g, js6hnd, e$9mav, hz2w, nem$9a);
      }
    }, a$0v['resMgrLoad'] = function (ogt_bq, xtpi, xipky, tqgo, oqg_tb, yotqbx, nmeds$) {
      xipky === void 0x0 && (xipky = 0x0), tqgo === void 0x0 && (tqgo = ![]), oqg_tb === void 0x0 && (oqg_tb = ![]), yotqbx === void 0x0 && (yotqbx = 0x0), nmeds$ === void 0x0 && (nmeds$ = 0x3), ogt_bq['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ogt_bq), g5rf4['EnvConfig']['resMgrLoad'](ogt_bq, (o4b_g, k801, g4ob) => {
        ytip['prototype']['resMgrLoadCallBack'](o4b_g, k801, g4ob, xtpi);
      }, xipky, tqgo, oqg_tb, yotqbx, nmeds$);
    }, a$0v['resMgrLoadCallBack'] = function (kiyx1, yitqx, med$9, mn$) {
      console['log']('buff:::', kiyx1, med$9, p1xit['fileNativeDir'] + '///' + p1xit['fileListName']), mn$(kiyx1, yitqx, med$9);
    }, a$0v['clearRes'] = function (dmsen, snjdm) {
      snjdm === void 0x0 && (snjdm = ![]);var lw2z = this;lw2z['clearRes'](dmsen, snjdm);var $sd = p1xit['getFileInfo'](dmsen);if ($sd && (dmsen['indexOf']('http://') != -0x1 || dmsen['indexOf']('https://') != -0x1)) {
        var hlj2wz = $sd['md5'],
            p8ku31 = p1xit['getFileNativePath'](hlj2wz);p1xit['remove'](p8ku31);
      }
    }, ytip['onReadNativeCallBack'] = function (m$dnse, u38v0, h6zs, itpb, ytiq, hzwjs, u308av, wl6j, xyitp1) {
      itpb === void 0x0 && (itpb = !![]), hzwjs === void 0x0 && (hzwjs = ![]), wl6j === void 0x0 && (wl6j = 0x0);if (!wl6j) {
        var bgoq_t;if (h6zs == 'json' || h6zs == 'atlas') bgoq_t = g5rf4['getJson'](xyitp1['data']);else h6zs == 'xml' ? bgoq_t = shw6['parseXMLFromString'](xyitp1['data']) : bgoq_t = xyitp1['data'];u308av['onLoaded'](bgoq_t), !g5rf4['isZiYu'] && g5rf4['isPosMsgYu'] && h6zs != 'arraybuffer' && wx['postMessage']({ 'url': u38v0, 'data': bgoq_t, 'isLoad': !![] });
      } else wl6j == 0x1 && g5rf4['EnvConfig']['load']['call'](u308av, u38v0, h6zs, itpb, ytiq, hzwjs);
    }, av09e$(ytip, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ytip;
  }(),
      p1xit = function (yxiqbt) {
    function v80a9$() {
      v80a9$['__super']['call'](this);;
    }return fgr74_(v80a9$, 'laya.wx.mini.MiniFileMgr', yxiqbt), v80a9$['isLoadFile'] = function (yotqb) {
      return v80a9$['_fileTypeArr']['indexOf'](yotqb) != -0x1 ? !![] : ![];
    }, v80a9$['getFileInfo'] = function (pykix1) {
      var fgr57 = pykix1['split']('?')[0x0],
          fo_rg4 = v80a9$['filesListObj'][fgr57];if (fo_rg4 == null) return null;else return fo_rg4;return null;
    }, v80a9$['onFileUpdate'] = function (iptxy, biyqtx) {
      var qgbo4_ = iptxy['split']('/'),
          b4og_q = qgbo4_[qgbo4_['length'] - 0x1],
          qgo_b = v80a9$['getFileInfo'](biyqtx);if (qgo_b == null) v80a9$['onSaveFile'](biyqtx, b4og_q);else {
        if (qgo_b['readyUrl'] != biyqtx) v80a9$['remove'](b4og_q, biyqtx);
      }
    }, v80a9$['exits'] = function (v9m$a, k31ip) {
      var eam9v = v80a9$['getFileNativePath'](v9m$a);v80a9$['fs']['getFileInfo']({ 'filePath': eam9v, 'success': function (wjh6lz) {
          k31ip != null && k31ip['runWith']([0x0, wjh6lz]);
        }, 'fail': function (msned) {
          k31ip != null && k31ip['runWith']([0x1, msned]);
        } });
    }, v80a9$['read'] = function (g475, jlwh, g_4f, oqt_gb) {
      jlwh === void 0x0 && (jlwh = 'ascill'), oqt_gb === void 0x0 && (oqt_gb = '');var dem$ns;oqt_gb != '' ? dem$ns = v80a9$['getFileNativePath'](g475) : dem$ns = g475, v80a9$['fs']['readFile']({ 'filePath': dem$ns, 'encoding': jlwh, 'success': function (btgqo) {
          g_4f != null && g_4f['runWith']([0x0, btgqo]);
        }, 'fail': function ($80v9) {
          if ($80v9 && oqt_gb != '') v80a9$['down'](oqt_gb, jlwh, g_4f, oqt_gb);else g_4f != null && g_4f['runWith']([0x1]);
        } });
    }, v80a9$['readNativeFile'] = function (boqx_t, oqtb) {
      v80a9$['fs']['readFile']({ 'filePath': boqx_t, 'encoding': '', 'success': function (p1yxk) {
          oqtb != null && oqtb['runWith']([0x0]);
        }, 'fail': function (k31up) {
          oqtb != null && oqtb['runWith']([0x1]);
        } });
    }, v80a9$['down'] = function (mne$d9, zs6h, tqixb, k18p3) {
      zs6h === void 0x0 && (zs6h = 'ascill'), k18p3 === void 0x0 && (k18p3 = '');var n$emsd = v80a9$['getFileNativePath'](k18p3),
          r4g_o = v80a9$['wxdown']({ 'url': mne$d9, 'filePath': n$emsd, 'success': function ($sdne) {
          if ($sdne['statusCode'] === 0xc8) v80a9$['readFile']($sdne['filePath'], zs6h, tqixb, k18p3);
        }, 'fail': function (ytxbpi) {
          tqixb != null && tqixb['runWith']([0x1, ytxbpi]);
        } });r4g_o['onProgressUpdate'](function (ogr_q) {
        tqixb != null && tqixb['runWith']([0x2, ogr_q['progress']]);
      });
    }, v80a9$['readFile'] = function (nsem6d, mnds, j2wlh, tibyq) {
      mnds === void 0x0 && (mnds = 'ascill'), tibyq === void 0x0 && (tibyq = ''), v80a9$['fs']['readFile']({ 'filePath': nsem6d, 'encoding': mnds, 'success': function (ixb) {
          if (nsem6d['indexOf']('http://') != -0x1 || nsem6d['indexOf']('https://') != -0x1) v80a9$['onFileUpdate'](nsem6d, tibyq);j2wlh != null && j2wlh['runWith']([0x0, ixb]);
        }, 'fail': function (otb_g) {
          if (otb_g) j2wlh != null && j2wlh['runWith']([0x1, otb_g]);
        } });
    }, v80a9$['downImg'] = function (d6jmns, iybxqt, typbxi) {
      typbxi === void 0x0 && (typbxi = '');var lzj2hw = v80a9$['wxdown']({ 'url': d6jmns, 'success': function (r_qog) {
          r_qog['statusCode'] === 0xc8 && v80a9$['copyFile'](r_qog['tempFilePath'], typbxi, iybxqt);
        }, 'fail': function (og_4rq) {
          iybxqt != null && iybxqt['runWith']([0x1, og_4rq]);
        } });
    }, v80a9$['copyFile'] = function (me$a9n, lz2j, piybxt) {
      var _xobt = me$a9n['split']('/'),
          dms = _xobt[_xobt['length'] - 0x1],
          o4rg_q = lz2j['split']('?')[0x0],
          mndj6 = v80a9$['getFileInfo'](lz2j),
          p1ytix = v80a9$['getFileNativePath'](dms);v80a9$['fs']['copyFile']({ 'srcPath': me$a9n, 'destPath': p1ytix, 'success': function (_qxot) {
          if (!mndj6) v80a9$['onSaveFile'](lz2j, dms), piybxt != null && piybxt['runWith']([0x0]);else {
            if (mndj6['readyUrl'] != lz2j) v80a9$['remove'](dms, lz2j, piybxt);
          }
        }, 'fail': function (g54fr7) {
          piybxt != null && piybxt['runWith']([0x1, g54fr7]);
        } });
    }, v80a9$['getFileNativePath'] = function (aen9m$) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + aen9m$;
    }, v80a9$['remove'] = function (whzl6, xqyot, ixykp) {
      xqyot === void 0x0 && (xqyot = '');var k30vu8 = v80a9$['getFileInfo'](xqyot),
          mnesd6 = v80a9$['getFileNativePath'](k30vu8['md5']);tbqx_['loader']['clearRes'](k30vu8['readyUrl']), v80a9$['fs']['unlink']({ 'filePath': mnesd6, 'success': function (dnj6m) {
          if (xqyot != '') v80a9$['onSaveFile'](xqyot, whzl6);ixykp != null && ixykp['runWith']([0x0]);
        }, 'fail': function ($vam9e) {} });
    }, v80a9$['onSaveFile'] = function (ypiuk1, fg4r57) {
      var go4b_ = ypiuk1['split']('?')[0x0];v80a9$['filesListObj'][go4b_] = { 'md5': fg4r57, 'readyUrl': ypiuk1 }, v80a9$['fs']['writeFile']({ 'filePath': v80a9$['fileNativeDir'] + '/' + v80a9$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v80a9$['filesListObj']), 'success': function (w2zljh) {
          console['log']('写入测试测试成功：', w2zljh);
        }, 'fail': function (iqxtb) {
          console['log']('写入测试测试失败：', iqxtb);
        } });
    }, v80a9$['existDir'] = function (sd6jnh, $amn9) {
      v80a9$['fs']['mkdir']({ 'dirPath': sd6jnh, 'success': function (y1pxti) {
          $amn9 != null && $amn9['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (o4bqg_) {
          if (o4bqg_['errMsg']['indexOf']('file already exists') != -0x1) v80a9$['readSync'](v80a9$['fileListName'], 'utf8', $amn9);else $amn9 != null && $amn9['runWith']([0x1, o4bqg_]);
        } });
    }, v80a9$['readSync'] = function (p13i, zh2l, gtqbo, _oqx) {
      zh2l === void 0x0 && (zh2l = 'ascill'), _oqx === void 0x0 && (_oqx = '');var b_tox = v80a9$['getFileNativePath'](p13i),
          dn$9em;try {
        dn$9em = v80a9$['fs']['readFileSync'](b_tox), gtqbo != null && gtqbo['runWith']([0x0, { 'data': dn$9em }]);
      } catch (t_boqx) {
        gtqbo != null && gtqbo['runWith']([0x1]);
      }
    }, v80a9$['readCache'] = function () {}, v80a9$['writeCache'] = function (wzlj) {
      var shn6d = readyUrl['split']('?')[0x0];v80a9$['filesListObj'][shn6d] = { 'md5': md5Name, 'readyUrl': readyUrl }, v80a9$['fs']['writeFile']({ 'filePath': v80a9$['fileNativeDir'] + '/' + v80a9$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v80a9$['filesListObj']), 'success': function (av09$e) {}, 'fail': function (yboqxt) {} });
    }, v80a9$['setNativeFileDir'] = function (bxypti) {
      v80a9$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bxypti;
    }, v80a9$['filesListObj'] = {}, v80a9$['fileNativeDir'] = null, v80a9$['fileListName'] = 'layaairfiles.txt', v80a9$['ziyuFileData'] = {}, av09e$(v80a9$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), v80a9$;
  }(jzdhs),
      zjs6hd = function (upi31) {
    function uipyk() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], uipyk['__super']['call'](this), this['_sound'] = uipyk['_createSound']();
    }fgr74_(uipyk, 'laya.wx.mini.MiniSound', upi31);var qbtxyi = uipyk['prototype'];return qbtxyi['load'] = function (r7g4_) {
      var rq = this;r7g4_ = sh6w['formatURL'](r7g4_), this['url'] = r7g4_;if (uipyk['_audioCache'][r7g4_]) {
        this['event']('complete');return;
      }function tbxoyq() {
        if (uipyk['_null'] != undefined) rq['_sound']['onCanplay'](uipyk['_null']), rq['_sound']['onError'](uipyk['_null']);else try {
          rq['_sound']['onCanplay'](null), rq['_sound']['onError'](null), uipyk['_null'] = null;
        } catch (dsen6m) {
          console['warn']('[wxmini] _clearSound:' + dsen6m), rq['_sound']['onCanplay'](org4_q), rq['_sound']['onError'](org4_q), uipyk['_null'] = org4_q;
        }
      }function g4qo_b() {
        tbxoyq(), qt_xb['loaded'] = !![], qt_xb['event']('complete'), uipyk['_audioCache'][qt_xb['url']] = qt_xb;
      }function otgbq_(djhsz) {
        console['error']('errCode=' + djhsz['errCode'] + '  errMsg=' + djhsz['errMsg']), tbxoyq(), qt_xb['event']('error');
      }function org4_q() {}this['_sound']['onCanplay'](g4qo_b), this['_sound']['onError'](otgbq_), this['_sound']['src'] = r7g4_;var qt_xb = this;
    }, qbtxyi['play'] = function (org_4q, k3u) {
      org_4q === void 0x0 && (org_4q = 0x0), k3u === void 0x0 && (k3u = 0x0);var yipku1;if (this['url'] == $d9['_tMusic']) {
        if (!uipyk['_musicAudio']) uipyk['_musicAudio'] = uipyk['_createSound']();yipku1 = uipyk['_musicAudio'];
      } else yipku1 = uipyk['_createSound']();yipku1['src'] = this['url'];var ogtb_ = new u0vk38(yipku1);return ogtb_['url'] = this['url'], ogtb_['loops'] = k3u, ogtb_['startTime'] = org_4q, ogtb_['play'](), $d9['addChannel'](ogtb_), ogtb_;
    }, qbtxyi['dispose'] = function () {
      var bpxit = uipyk['_audioCache'][this['url']];bpxit && (bpxit['src'] = '', delete uipyk['_audioCache'][this['url']]);
    }, ibpxty(0x0, qbtxyi, 'duration', function () {
      return this['_sound']['duration'];
    }), uipyk['_createSound'] = function () {
      return uipyk['_id']++, g5rf4['window']['wx']['createInnerAudioContext']();
    }, uipyk['_musicAudio'] = null, uipyk['_id'] = 0x0, uipyk['_audioCache'] = {}, uipyk['_null'] = undefined, uipyk;
  }(jzdhs),
      u0vk38 = function (zwj6hl) {
    function mne9(wjs6) {
      this['_audio'] = null, this['_onEnd'] = null, mne9['__super']['call'](this), this['_audio'] = wjs6, this['_onEnd'] = shw6['bind'](this['__onEnd'], this), wjs6['onEnded'](this['_onEnd']);
    }fgr74_(mne9, 'laya.wx.mini.MiniSoundChannel', zwj6hl);var orgq_ = mne9['prototype'];return orgq_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (tbqx_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, orgq_['__onNull'] = function () {}, orgq_['play'] = function () {
      this['isStopped'] = ![], $d9['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, orgq_['stop'] = function () {
      this['isStopped'] = !![], $d9['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (mne9['_null'] != undefined) this['_audio']['onEnded'](mne9['_null']);else try {
        this['_audio']['onEnded'](null), mne9['_null'] = null;
      } catch (xitqby) {
        console['warn']('[wxmini] stop:' + xitqby), this['_audio']['onEnded'](shw6['bind'](this['__onNull'], this)), mne9['_null'] = shw6['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, orgq_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, orgq_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], $d9['addChannel'](this), this['_audio']['play']();
    }, ibpxty(0x0, orgq_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ibpxty(0x0, orgq_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ibpxty(0x0, orgq_, 'volume', function () {
      return 0x1;
    }, function (j2zwhl) {}), mne9['_null'] = undefined, mne9;
  }(vu08k3);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var $9na in Laya) {
    var togqb_ = Laya[$9na];togqb_ && togqb_['__isclass'] && (exports[$9na] = togqb_);
  }
});