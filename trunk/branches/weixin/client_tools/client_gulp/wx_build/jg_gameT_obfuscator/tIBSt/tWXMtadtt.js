var M = wx.$T;
(function (window, document, _hym5) {
  var tci94 = _hym5['un'],
      qmyx0_ = _hym5['uns'],
      mw61h = _hym5['static'],
      ip = _hym5['class'],
      v$t9c = _hym5['getset'],
      ezo7fp = _hym5['__newvec'],
      nr183g = laya['utils']['Browser'],
      div$p9 = laya['events']['Event'],
      fzd7p = laya['events']['EventDispatcher'],
      ci$t9 = laya['resource']['HTMLImage'],
      wh5m16 = laya['utils']['Handler'],
      icvt = laya['display']['Input'],
      $pvd = laya['net']['Loader'],
      jauk = laya['maths']['Matrix'],
      ict9v$ = laya['renders']['Render'],
      ti9$vc = laya['utils']['RunDriver'],
      yw_5hm = laya['media']['Sound'],
      qz7o = laya['media']['SoundChannel'],
      bgrn3 = laya['media']['SoundManager'],
      $9fvd = laya['display']['Stage'],
      q7fzo = laya['net']['URL'],
      kuj = laya['utils']['Utils'],
      kbajgr = function () {
    function $i9dvc() {}return ip($i9dvc, 'laya.wx.mini.MiniAdpter'), $i9dvc['getJson'] = function (v9cit2) {
      return JSON['parse'](v9cit2);
    }, $i9dvc['init'] = function (h5_6m, eoxy) {
      h5_6m === void 0x0 && (h5_6m = ![]), eoxy === void 0x0 && (eoxy = ![]);if ($i9dvc['_inited']) return;$i9dvc['window'] = window;if ($i9dvc['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;$i9dvc['_inited'] = !![], $i9dvc['isZiYu'] = eoxy, $i9dvc['isPosMsgYu'] = h5_6m, $i9dvc['EnvConfig'] = {}, !$i9dvc['isZiYu'] && (oe7zqf['setNativeFileDir']('/layaairGame'), oe7zqf['existDir'](oe7zqf['fileNativeDir'], wh5m16['create']($i9dvc, $i9dvc['onMkdirCallBack']))), $i9dvc['window']['focus'] = function () {}, _hym5['getUrlPath'] = function () {}, $i9dvc['window']['logtime'] = function (wmh651) {}, $i9dvc['window']['alertTimeLog'] = function (qm_0y) {}, $i9dvc['window']['resetShareInfo'] = function () {}, $i9dvc['window']['CanvasRenderingContext2D'] = function () {}, $i9dvc['window']['CanvasRenderingContext2D']['prototype'] = $i9dvc['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $i9dvc['window']['document']['body']['appendChild'] = function () {}, $i9dvc['EnvConfig']['pixelRatioInt'] = 0x0, ti9$vc['getPixelRatio'] = $i9dvc['pixelRatio'], $i9dvc['_preCreateElement'] = nr183g['createElement'], nr183g['createElement'] = $i9dvc['createElement'], ti9$vc['createShaderCondition'] = $i9dvc['createShaderCondition'], kuj['parseXMLFromString'] = $i9dvc['parseXMLFromString'], icvt['_createInputElement'] = dz7fop['_createInputElement'], $i9dvc['EnvConfig']['load'] = $pvd['prototype']['load'], $pvd['prototype']['load'] = yq0o['prototype']['load'], $i9dvc['isZiYu'] && h5_6m && wx['onMessage'](function (w8361) {
        w8361['isLoad'] && (oe7zqf['ziyuFileData'][w8361['url']] = w8361['data']);
      });
    }, $i9dvc['onMkdirCallBack'] = function (qex_, idp9$v) {
      if (!qex_) oe7zqf['filesListObj'] = JSON['parse'](idp9$v['data']);
    }, $i9dvc['pixelRatio'] = function () {
      if (!$i9dvc['EnvConfig']['pixelRatioInt']) try {
        var jabrkg = wx['getSystemInfoSync']();return $i9dvc['EnvConfig']['pixelRatioInt'] = jabrkg['pixelRatio'], jabrkg = jabrkg, jabrkg['pixelRatio'];
      } catch (wh681) {}return $i9dvc['EnvConfig']['pixelRatioInt'];
    }, $i9dvc['createElement'] = function (ajbkrg) {
      if (ajbkrg == 'canvas') {
        var n1r3g;return $i9dvc['idx'] == 0x1 ? $i9dvc['isZiYu'] ? (n1r3g = sharedCanvas, n1r3g['style'] = {}) : n1r3g = window['canvas'] : n1r3g = window['wx']['createCanvas'](), $i9dvc['idx']++, n1r3g;
      } else {
        if (ajbkrg == 'textarea' || ajbkrg == 'input') return $i9dvc['onCreateInput'](ajbkrg);else {
          if (ajbkrg == 'div') {
            var xqo07e = $i9dvc['_preCreateElement'](ajbkrg);return xqo07e['contains'] = function (zfqo) {
              return null;
            }, xqo07e['removeChild'] = function (v2t9i) {}, xqo07e;
          } else return $i9dvc['_preCreateElement'](ajbkrg);
        }
      }
    }, $i9dvc['onCreateInput'] = function (yo0xe) {
      var pdzf$v = $i9dvc['_preCreateElement'](yo0xe);return pdzf$v['focus'] = dz7fop['wxinputFocus'], pdzf$v['blur'] = dz7fop['wxinputblur'], pdzf$v['style'] = {}, pdzf$v['value'] = 0x0, pdzf$v['parentElement'] = {}, pdzf$v['placeholder'] = {}, pdzf$v['type'] = {}, pdzf$v['setColor'] = function (f7zd$) {}, pdzf$v['setType'] = function (i9$vct) {}, pdzf$v['setFontFace'] = function (krbga) {}, pdzf$v['addEventListener'] = function (x0my_h) {}, pdzf$v['contains'] = function (jrgnb) {
        return null;
      }, pdzf$v['removeChild'] = function ($i9c) {}, pdzf$v;
    }, $i9dvc['createShaderCondition'] = function (i2l4tc) {
      var vfzpd$ = this,
          xqoe07 = function () {
        var jabgrn = i2l4tc;return vfzpd$[i2l4tc['replace']('this.', '')];
      };return xqoe07;
    }, $i9dvc['EnvConfig'] = null, $i9dvc['window'] = null, $i9dvc['_preCreateElement'] = null, $i9dvc['_inited'] = ![], $i9dvc['wxRequest'] = null, $i9dvc['systemInfo'] = null, $i9dvc['version'] = '0.0.1', $i9dvc['isZiYu'] = ![], $i9dvc['isPosMsgYu'] = ![], $i9dvc['parseXMLFromString'] = function (jbrnga) {
      var yqox0e, fep7;jbrnga = jbrnga['replace'](/>\s+</g, '><');try {
        yqox0e = new window['Parser']['DOMParser']()['parseFromString'](jbrnga, 'text/xml');
      } catch (l4c2ti) {
        throw '需要引入xml解析库文件';
      }return yqox0e;
    }, $i9dvc['idx'] = 0x1, $i9dvc;
  }(),
      w8h651 = function () {
    function pe7fzo() {}ip(pe7fzo, 'laya.wx.mini.MiniImage');var clt = pe7fzo['prototype'];return clt['_loadImage'] = function (ujaskb) {
      var c9$dvi = this,
          bkja = ![];ujaskb['indexOf']('layaNativeDir/') == -0x1 && (bkja = !![], ujaskb = q7fzo['formatURL'](ujaskb));if (!oe7zqf['getFileInfo'](ujaskb)) {
        if (ujaskb['indexOf']('http://') != -0x1 || ujaskb['indexOf']('https://') != -0x1) oe7zqf['downImg'](ujaskb, new wh5m16(pe7fzo, pe7fzo['onDownImgCallBack'], [ujaskb, c9$dvi]), ujaskb);else pe7fzo['onCreateImage'](ujaskb, c9$dvi, !![]);
      } else pe7fzo['onCreateImage'](ujaskb, c9$dvi, !bkja);
    }, pe7fzo['onDownImgCallBack'] = function (akrjb, ez0q7, zpfd$) {
      if (!zpfd$) pe7fzo['onCreateImage'](akrjb, ez0q7);else ez0q7['onError'](null);
    }, pe7fzo['onCreateImage'] = function (sbrjka, gr183n, w5ym_) {
      w5ym_ === void 0x0 && (w5ym_ = ![]);var ngj8;if (!w5ym_) {
        var t9ci4 = oe7zqf['getFileInfo'](sbrjka),
            n5381 = t9ci4['md5'];ngj8 = oe7zqf['getFileNativePath'](n5381);
      } else ngj8 = sbrjka;if (gr183n['imgCache'] == null) gr183n['imgCache'] = {};var _hwyxm;function xy0mh() {
        _hwyxm['onload'] = null, _hwyxm['onerror'] = null, delete gr183n['imgCache'][sbrjka];
      };var c4l2it = function () {
        xy0mh(), gr183n['onLoaded'](_hwyxm);
      },
          rn8j = function () {
        xy0mh(), gr183n['event']('error', 'Load image failed');
      };gr183n['_type'] == 'nativeimage' ? (_hwyxm = new nr183g['window']['Image'](), _hwyxm['crossOrigin'] = '', _hwyxm['onload'] = c4l2it, _hwyxm['onerror'] = rn8j, _hwyxm['src'] = ngj8, gr183n['imgCache'][sbrjka] = _hwyxm) : new ci$t9['create'](ngj8, { 'onload': c4l2it, 'onerror': rn8j, 'onCreate': function (fvp9$) {
          _hwyxm = fvp9$, gr183n['imgCache'][sbrjka] = fvp9$;
        } });
    }, pe7fzo;
  }(),
      dz7fop = function () {
    function abkr() {}return ip(abkr, 'laya.wx.mini.MiniInput'), abkr['_createInputElement'] = function () {
      icvt['_initInput'](icvt['area'] = nr183g['createElement']('textarea')), icvt['_initInput'](icvt['input'] = nr183g['createElement']('input')), icvt['inputContainer'] = nr183g['createElement']('div'), icvt['inputContainer']['style']['position'] = 'absolute', icvt['inputContainer']['style']['zIndex'] = 0x186a0, nr183g['container']['appendChild'](icvt['inputContainer']), icvt['inputContainer']['setPos'] = function (v9t$ic, gbnr) {
        icvt['inputContainer']['style']['left'] = v9t$ic + 'px', icvt['inputContainer']['style']['top'] = gbnr + 'px';
      }, _hym5['stage']['on']('resize', null, abkr['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($7dzp) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), bgrn3['_soundClass'] = r3nbjg, bgrn3['_musicClass'] = r3nbjg;
    }, abkr['_onStageResize'] = function () {
      var vpd$fz = _hym5['stage']['_canvasTransform']['identity']();vpd$fz['scale'](nr183g['width'] / ict9v$['canvas']['width'] / ti9$vc['getPixelRatio'](), nr183g['height'] / ict9v$['canvas']['height'] / ti9$vc['getPixelRatio']());
    }, abkr['wxinputFocus'] = function (di$9c) {
      var krjsab = icvt['inputElement']['target'];if (krjsab && !krjsab['editable']) return;kbajgr['window']['wx']['offKeyboardConfirm'](), kbajgr['window']['wx']['offKeyboardInput'](), kbajgr['window']['wx']['showKeyboard']({ 'defaultValue': krjsab['text'], 'maxLength': krjsab['maxChars'], 'multiple': krjsab['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (wm_yxh) {}, 'fail': function (qex7o0) {} }), kbajgr['window']['wx']['onKeyboardConfirm'](function (wmh) {
        var i29t4 = wmh ? wmh['value'] : '';krjsab['text'] = i29t4, krjsab['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), kbajgr['window']['wx']['onKeyboardInput'](function (yqe0ox) {
        var rbjska = yqe0ox ? yqe0ox['value'] : '';if (!krjsab['multiline']) {
          if (rbjska['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }krjsab['text'] = rbjska, krjsab['event']('input');
      });
    }, abkr['inputEnter'] = function () {
      icvt['inputElement']['target']['focus'] = ![];
    }, abkr['wxinputblur'] = function () {
      abkr['hideKeyboard']();
    }, abkr['hideKeyboard'] = function () {
      kbajgr['window']['wx']['offKeyboardConfirm'](), kbajgr['window']['wx']['offKeyboardInput'](), kbajgr['window']['wx']['hideKeyboard']({ 'success': function (_hw56m) {
          console['log']('隐藏键盘');
        }, 'fail': function (kajgb) {
          console['log']('隐藏键盘出错:' + (kajgb ? kajgb['errMsg'] : ''));
        } });
    }, abkr;
  }(),
      yq0o = function () {
    function w6m() {}ip(w6m, 'laya.wx.mini.MiniLoader');var pofe7z = w6m['prototype'];return pofe7z['load'] = function (t92vci, y0_xm, oe70z, d$zfv, nabrjg) {
      oe70z === void 0x0 && (oe70z = !![]), nabrjg === void 0x0 && (nabrjg = ![]);var l2tci4 = this;l2tci4['_url'] = t92vci;if (t92vci['indexOf']('data:image') === 0x0) l2tci4['_type'] = y0_xm = 'image';else l2tci4['_type'] = y0_xm || (y0_xm = l2tci4['getTypeFromUrl'](t92vci));l2tci4['_cache'] = oe70z, l2tci4['_data'] = null;var y_xhw = 'ascii';if (t92vci['indexOf']('.fnt') != -0x1) y_xhw = 'utf8';else y0_xm == 'arraybuffer' && (y_xhw = '');;var njgr8 = kuj['getFileExtension'](t92vci);if (w6m['_fileTypeArr']['indexOf'](njgr8) != -0x1) kbajgr['EnvConfig']['load']['call'](this, t92vci, y0_xm, oe70z, d$zfv, nabrjg);else {
        if (!oe7zqf['getFileInfo'](t92vci)) {
          if (t92vci['indexOf']('layaNativeDir/') != -0x1) {
            if (kbajgr['isZiYu']) {
              var why_xm = oe7zqf['ziyuFileData'][t92vci];l2tci4['onLoaded'](why_xm);return;
            } else {
              cosnole['log']('read read'), oe7zqf['read'](t92vci, y_xhw, new wh5m16(w6m, w6m['onReadNativeCallBack'], [y_xhw, t92vci, y0_xm, oe70z, d$zfv, nabrjg, l2tci4]));return;
            }
          }if (q7fzo['rootPath'] == '') var ezqf = t92vci;else ezqf = t92vci['split'](q7fzo['rootPath'])[0x0];t92vci['indexOf']('http://') != -0x1 || t92vci['indexOf']('https://') != -0x1 ? kbajgr['EnvConfig']['load']['call'](l2tci4, t92vci, y0_xm, oe70z, d$zfv, nabrjg) : oe7zqf['readFile'](ezqf, y_xhw, new wh5m16(w6m, w6m['onReadNativeCallBack'], [y_xhw, t92vci, y0_xm, oe70z, d$zfv, nabrjg, l2tci4]), t92vci);
        } else kbajgr['EnvConfig']['load']['call'](this, t92vci, y0_xm, oe70z, d$zfv, nabrjg);
      }
    }, pofe7z['resMgrLoad'] = function (m0xh, p7$fz, fpdv$, jbnra, mh156w, whxmy_, ip$9) {
      fpdv$ === void 0x0 && (fpdv$ = 0x0), jbnra === void 0x0 && (jbnra = ![]), mh156w === void 0x0 && (mh156w = ![]), whxmy_ === void 0x0 && (whxmy_ = 0x0), ip$9 === void 0x0 && (ip$9 = 0x3), m0xh['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', m0xh), kbajgr['EnvConfig']['resMgrLoad'](m0xh, (nraj, ajbrs, jgnr) => {
        w6m['prototype']['resMgrLoadCallBack'](nraj, ajbrs, jgnr, p7$fz);
      }, fpdv$, jbnra, mh156w, whxmy_, ip$9);
    }, pofe7z['resMgrLoadCallBack'] = function (gjnabr, h5_wmy, e70z, fpeo) {
      console['log']('buff:::', gjnabr, e70z, oe7zqf['fileNativeDir'] + '///' + oe7zqf['fileListName']), fpeo(gjnabr, h5_wmy, e70z);
    }, pofe7z['clearRes'] = function (grnj3, _q0ey) {
      _q0ey === void 0x0 && (_q0ey = ![]);var jnrag = this;jnrag['clearRes'](grnj3, _q0ey);var m_5h6w = oe7zqf['getFileInfo'](grnj3);if (m_5h6w && (grnj3['indexOf']('http://') != -0x1 || grnj3['indexOf']('https://') != -0x1)) {
        var c2i4tl = m_5h6w['md5'],
            qoyxe = oe7zqf['getFileNativePath'](c2i4tl);oe7zqf['remove'](qoyxe);
      }
    }, w6m['onReadNativeCallBack'] = function (zdp7o, myxh0, oe70qx, d9vi, ngj3r, w8h5, oex0y, pvd9i$, gj8n) {
      d9vi === void 0x0 && (d9vi = !![]), w8h5 === void 0x0 && (w8h5 = ![]), pvd9i$ === void 0x0 && (pvd9i$ = 0x0);if (!pvd9i$) {
        var v$9idc;if (oe70qx == 'json' || oe70qx == 'atlas') v$9idc = kbajgr['getJson'](gj8n['data']);else oe70qx == 'xml' ? v$9idc = kuj['parseXMLFromString'](gj8n['data']) : v$9idc = gj8n['data'];oex0y['onLoaded'](v$9idc), !kbajgr['isZiYu'] && kbajgr['isPosMsgYu'] && oe70qx != 'arraybuffer' && wx['postMessage']({ 'url': myxh0, 'data': v$9idc, 'isLoad': !![] });
      } else pvd9i$ == 0x1 && kbajgr['EnvConfig']['load']['call'](oex0y, myxh0, oe70qx, d9vi, ngj3r, w8h5);
    }, mw61h(w6m, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), w6m;
  }(),
      oe7zqf = function (d9v$ic) {
    function srabjk() {
      srabjk['__super']['call'](this);;
    }return ip(srabjk, 'laya.wx.mini.MiniFileMgr', d9v$ic), srabjk['isLoadFile'] = function (_wyh5m) {
      return srabjk['_fileTypeArr']['indexOf'](_wyh5m) != -0x1 ? !![] : ![];
    }, srabjk['getFileInfo'] = function (e0zo7q) {
      var w8h = e0zo7q['split']('?')[0x0],
          rsbka = srabjk['filesListObj'][w8h];if (rsbka == null) return null;else return rsbka;return null;
    }, srabjk['onFileUpdate'] = function (q07oex, ofqe7z) {
      var mh6w = q07oex['split']('/'),
          xq_0my = mh6w[mh6w['length'] - 0x1],
          ze7po = srabjk['getFileInfo'](ofqe7z);if (ze7po == null) srabjk['onSaveFile'](ofqe7z, xq_0my);else {
        if (ze7po['readyUrl'] != ofqe7z) srabjk['remove'](xq_0my, ofqe7z);
      }
    }, srabjk['exits'] = function (ct92i, ym0xh_) {
      var d9i$ = srabjk['getFileNativePath'](ct92i);srabjk['fs']['getFileInfo']({ 'filePath': d9i$, 'success': function (y0eoq) {
          ym0xh_ != null && ym0xh_['runWith']([0x0, y0eoq]);
        }, 'fail': function (jakr) {
          ym0xh_ != null && ym0xh_['runWith']([0x1, jakr]);
        } });
    }, srabjk['read'] = function (cvt2i, ox07eq, xqyo0e, qo0exy) {
      ox07eq === void 0x0 && (ox07eq = 'ascill'), qo0exy === void 0x0 && (qo0exy = '');var q0yxo;qo0exy != '' ? q0yxo = srabjk['getFileNativePath'](cvt2i) : q0yxo = cvt2i, srabjk['fs']['readFile']({ 'filePath': q0yxo, 'encoding': ox07eq, 'success': function (srkj) {
          xqyo0e != null && xqyo0e['runWith']([0x0, srkj]);
        }, 'fail': function (tic42) {
          if (tic42 && qo0exy != '') srabjk['down'](qo0exy, ox07eq, xqyo0e, qo0exy);else xqyo0e != null && xqyo0e['runWith']([0x1]);
        } });
    }, srabjk['readNativeFile'] = function (hwyxm, icv) {
      srabjk['fs']['readFile']({ 'filePath': hwyxm, 'encoding': '', 'success': function (dp$fz) {
          icv != null && icv['runWith']([0x0]);
        }, 'fail': function (_xq0ye) {
          icv != null && icv['runWith']([0x1]);
        } });
    }, srabjk['down'] = function (z7oe0, pdv$z, $cidv9, g1rn8) {
      pdv$z === void 0x0 && (pdv$z = 'ascill'), g1rn8 === void 0x0 && (g1rn8 = '');var kjs = srabjk['getFileNativePath'](g1rn8),
          zf7d$p = srabjk['wxdown']({ 'url': z7oe0, 'filePath': kjs, 'success': function (exqy) {
          if (exqy['statusCode'] === 0xc8) srabjk['readFile'](exqy['filePath'], pdv$z, $cidv9, g1rn8);
        }, 'fail': function (z7pf$) {
          $cidv9 != null && $cidv9['runWith']([0x1, z7pf$]);
        } });zf7d$p['onProgressUpdate'](function (_x0yq) {
        $cidv9 != null && $cidv9['runWith']([0x2, _x0yq['progress']]);
      });
    }, srabjk['readFile'] = function (d7oz, njrb3, ymhw_, _xymhw) {
      njrb3 === void 0x0 && (njrb3 = 'ascill'), _xymhw === void 0x0 && (_xymhw = ''), srabjk['fs']['readFile']({ 'filePath': d7oz, 'encoding': njrb3, 'success': function (arnj) {
          if (d7oz['indexOf']('http://') != -0x1 || d7oz['indexOf']('https://') != -0x1) srabjk['onFileUpdate'](d7oz, _xymhw);ymhw_ != null && ymhw_['runWith']([0x0, arnj]);
        }, 'fail': function (akgbrj) {
          if (akgbrj) ymhw_ != null && ymhw_['runWith']([0x1, akgbrj]);
        } });
    }, srabjk['downImg'] = function (jr3bgn, n3jrb, m_h0x) {
      m_h0x === void 0x0 && (m_h0x = '');var ex_qy = srabjk['wxdown']({ 'url': jr3bgn, 'success': function (sjkab) {
          sjkab['statusCode'] === 0xc8 && srabjk['copyFile'](sjkab['tempFilePath'], m_h0x, n3jrb);
        }, 'fail': function (bgjran) {
          n3jrb != null && n3jrb['runWith']([0x1, bgjran]);
        } });
    }, srabjk['copyFile'] = function (subjk, $9piv, fpvz$) {
      var q07oez = subjk['split']('/'),
          t2ic = q07oez[q07oez['length'] - 0x1],
          fzoe = $9piv['split']('?')[0x0],
          zp7d$f = srabjk['getFileInfo']($9piv),
          _wymhx = srabjk['getFileNativePath'](t2ic);srabjk['fs']['copyFile']({ 'srcPath': subjk, 'destPath': _wymhx, 'success': function (krag) {
          if (!zp7d$f) srabjk['onSaveFile']($9piv, t2ic), fpvz$ != null && fpvz$['runWith']([0x0]);else {
            if (zp7d$f['readyUrl'] != $9piv) srabjk['remove'](t2ic, $9piv, fpvz$);
          }
        }, 'fail': function (xmq_0y) {
          fpvz$ != null && fpvz$['runWith']([0x1, xmq_0y]);
        } });
    }, srabjk['getFileNativePath'] = function (rnbja) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rnbja;
    }, srabjk['remove'] = function (z7ofeq, w1m56, jrakbs) {
      w1m56 === void 0x0 && (w1m56 = '');var lti2c = srabjk['getFileInfo'](w1m56),
          bajuks = srabjk['getFileNativePath'](lti2c['md5']);_hym5['loader']['clearRes'](lti2c['readyUrl']), srabjk['fs']['unlink']({ 'filePath': bajuks, 'success': function ($df7zp) {
          if (w1m56 != '') srabjk['onSaveFile'](w1m56, z7ofeq);jrakbs != null && jrakbs['runWith']([0x0]);
        }, 'fail': function (akrj) {} });
    }, srabjk['onSaveFile'] = function (zoqe0, rjkg) {
      var n1586 = zoqe0['split']('?')[0x0];srabjk['filesListObj'][n1586] = { 'md5': rjkg, 'readyUrl': zoqe0 }, srabjk['fs']['writeFile']({ 'filePath': srabjk['fileNativeDir'] + '/' + srabjk['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](srabjk['filesListObj']), 'success': function (o7dpfz) {
          console['log']('写入测试测试成功：', o7dpfz);
        }, 'fail': function (sarj) {
          console['log']('写入测试测试失败：', sarj);
        } });
    }, srabjk['existDir'] = function (jgnab, lti4c2) {
      srabjk['fs']['mkdir']({ 'dirPath': jgnab, 'success': function (w65_mh) {
          lti4c2 != null && lti4c2['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hwm_56) {
          if (hwm_56['errMsg']['indexOf']('file already exists') != -0x1) srabjk['readSync'](srabjk['fileListName'], 'utf8', lti4c2);else lti4c2 != null && lti4c2['runWith']([0x1, hwm_56]);
        } });
    }, srabjk['readSync'] = function ($zfvdp, p$9di, icd, _5ywm) {
      p$9di === void 0x0 && (p$9di = 'ascill'), _5ywm === void 0x0 && (_5ywm = '');var nr8gj3 = srabjk['getFileNativePath']($zfvdp),
          zpfo7d;try {
        zpfo7d = srabjk['fs']['readFileSync'](nr8gj3), icd != null && icd['runWith']([0x0, { 'data': zpfo7d }]);
      } catch (gakr) {
        icd != null && icd['runWith']([0x1]);
      }
    }, srabjk['readCache'] = function () {}, srabjk['writeCache'] = function (x0o7eq) {
      var njrg38 = readyUrl['split']('?')[0x0];srabjk['filesListObj'][njrg38] = { 'md5': md5Name, 'readyUrl': readyUrl }, srabjk['fs']['writeFile']({ 'filePath': srabjk['fileNativeDir'] + '/' + srabjk['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](srabjk['filesListObj']), 'success': function (r318n) {}, 'fail': function (rg1n) {} });
    }, srabjk['setNativeFileDir'] = function (w6358) {
      srabjk['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + w6358;
    }, srabjk['filesListObj'] = {}, srabjk['fileNativeDir'] = null, srabjk['fileListName'] = 'layaairfiles.txt', srabjk['ziyuFileData'] = {}, mw61h(srabjk, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), srabjk;
  }(fzd7p),
      r3nbjg = function (rjkabg) {
    function ksaub() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ksaub['__super']['call'](this), this['_sound'] = ksaub['_createSound']();
    }ip(ksaub, 'laya.wx.mini.MiniSound', rjkabg);var v$it9c = ksaub['prototype'];return v$it9c['load'] = function (kbgar) {
      var eo7p = this;kbgar = q7fzo['formatURL'](kbgar), this['url'] = kbgar;if (ksaub['_audioCache'][kbgar]) {
        this['event']('complete');return;
      }function dfpv() {
        if (ksaub['_null'] != undefined) eo7p['_sound']['onCanplay'](ksaub['_null']), eo7p['_sound']['onError'](ksaub['_null']);else try {
          eo7p['_sound']['onCanplay'](null), eo7p['_sound']['onError'](null), ksaub['_null'] = null;
        } catch (_mywh5) {
          console['warn']('[wxmini] _clearSound:' + _mywh5), eo7p['_sound']['onCanplay'](ujbkas), eo7p['_sound']['onError'](ujbkas), ksaub['_null'] = ujbkas;
        }
      }function $pz7fd() {
        dfpv(), gnjb3['loaded'] = !![], gnjb3['event']('complete'), ksaub['_audioCache'][gnjb3['url']] = gnjb3;
      }function $tv9ic($vfdz) {
        console['error']('errCode=' + $vfdz['errCode'] + '  errMsg=' + $vfdz['errMsg']), dfpv(), gnjb3['event']('error');
      }function ujbkas() {}this['_sound']['onCanplay']($pz7fd), this['_sound']['onError']($tv9ic), this['_sound']['src'] = kbgar;var gnjb3 = this;
    }, v$it9c['play'] = function ($pdvz, x_m0yh) {
      $pdvz === void 0x0 && ($pdvz = 0x0), x_m0yh === void 0x0 && (x_m0yh = 0x0);var w56hm1;if (this['url'] == bgrn3['_tMusic']) {
        if (!ksaub['_musicAudio']) ksaub['_musicAudio'] = ksaub['_createSound']();w56hm1 = ksaub['_musicAudio'];
      } else w56hm1 = ksaub['_createSound']();w56hm1['src'] = this['url'];var ofpdz = new y_x0h(w56hm1);return ofpdz['url'] = this['url'], ofpdz['loops'] = x_m0yh, ofpdz['startTime'] = $pdvz, ofpdz['play'](), bgrn3['addChannel'](ofpdz), ofpdz;
    }, v$it9c['dispose'] = function () {
      var qm0y_ = ksaub['_audioCache'][this['url']];qm0y_ && (qm0y_['src'] = '', delete ksaub['_audioCache'][this['url']]);
    }, v$t9c(0x0, v$it9c, 'duration', function () {
      return this['_sound']['duration'];
    }), ksaub['_createSound'] = function () {
      return ksaub['_id']++, kbajgr['window']['wx']['createInnerAudioContext']();
    }, ksaub['_musicAudio'] = null, ksaub['_id'] = 0x0, ksaub['_audioCache'] = {}, ksaub['_null'] = undefined, ksaub;
  }(fzd7p),
      y_x0h = function (kargbj) {
    function kbjgra($9cdi) {
      this['_audio'] = null, this['_onEnd'] = null, kbjgra['__super']['call'](this), this['_audio'] = $9cdi, this['_onEnd'] = kuj['bind'](this['__onEnd'], this), $9cdi['onEnded'](this['_onEnd']);
    }ip(kbjgra, 'laya.wx.mini.MiniSoundChannel', kargbj);var fp9$vd = kbjgra['prototype'];return fp9$vd['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (_hym5['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, fp9$vd['__onNull'] = function () {}, fp9$vd['play'] = function () {
      this['isStopped'] = ![], bgrn3['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, fp9$vd['stop'] = function () {
      this['isStopped'] = !![], bgrn3['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (kbjgra['_null'] != undefined) this['_audio']['onEnded'](kbjgra['_null']);else try {
        this['_audio']['onEnded'](null), kbjgra['_null'] = null;
      } catch (hw56_m) {
        console['warn']('[wxmini] stop:' + hw56_m), this['_audio']['onEnded'](kuj['bind'](this['__onNull'], this)), kbjgra['_null'] = kuj['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, fp9$vd['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, fp9$vd['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], bgrn3['addChannel'](this), this['_audio']['play']();
    }, v$t9c(0x0, fp9$vd, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), v$t9c(0x0, fp9$vd, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), v$t9c(0x0, fp9$vd, 'volume', function () {
      return 0x1;
    }, function (v9cid$) {}), kbjgra['_null'] = undefined, kbjgra;
  }(qz7o);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var asjuk in Laya) {
    var dp$f9v = Laya[asjuk];dp$f9v && dp$f9v['__isclass'] && (exports[asjuk] = dp$f9v);
  }
});