var M = wx.$T;
(function (window, document, w85h6) {
  var eq7ofz = w85h6['un'],
      w_m56h = w85h6['uns'],
      xywh = w85h6['static'],
      g163 = w85h6['class'],
      yx0_m = w85h6['getset'],
      opf7d = w85h6['__newvec'],
      e07oq = laya['utils']['Browser'],
      yqxe_ = laya['events']['Event'],
      t942ci = laya['events']['EventDispatcher'],
      vdp$i9 = laya['resource']['HTMLImage'],
      pvf$9d = laya['utils']['Handler'],
      vd9$ = laya['display']['Input'],
      gn16 = laya['net']['Loader'],
      x_whm = laya['maths']['Matrix'],
      dzfp$ = laya['renders']['Render'],
      e_0 = laya['utils']['RunDriver'],
      xyhm_w = laya['media']['Sound'],
      hwm651 = laya['media']['SoundChannel'],
      barsjk = laya['media']['SoundManager'],
      eq_x0 = laya['display']['Stage'],
      y_5hmw = laya['net']['URL'],
      w85h16 = laya['utils']['Utils'],
      r3gnb = function () {
    function e07zqo() {}return g163(e07zqo, 'laya.wx.mini.MiniAdpter'), e07zqo['getJson'] = function (v9p$d) {
      return JSON['parse'](v9p$d);
    }, e07zqo['init'] = function (yxmw, g38r) {
      yxmw === void 0x0 && (yxmw = ![]), g38r === void 0x0 && (g38r = ![]);if (e07zqo['_inited']) return;e07zqo['window'] = window;if (e07zqo['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;e07zqo['_inited'] = !![], e07zqo['isZiYu'] = g38r, e07zqo['isPosMsgYu'] = yxmw, e07zqo['EnvConfig'] = {}, !e07zqo['isZiYu'] && (i9tvc['setNativeFileDir']('/layaairGame'), i9tvc['existDir'](i9tvc['fileNativeDir'], pvf$9d['create'](e07zqo, e07zqo['onMkdirCallBack']))), e07zqo['window']['focus'] = function () {}, w85h6['getUrlPath'] = function () {}, e07zqo['window']['logtime'] = function (t9i$) {}, e07zqo['window']['alertTimeLog'] = function (eoqyx0) {}, e07zqo['window']['resetShareInfo'] = function () {}, e07zqo['window']['CanvasRenderingContext2D'] = function () {}, e07zqo['window']['CanvasRenderingContext2D']['prototype'] = e07zqo['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], e07zqo['window']['document']['body']['appendChild'] = function () {}, e07zqo['EnvConfig']['pixelRatioInt'] = 0x0, e_0['getPixelRatio'] = e07zqo['pixelRatio'], e07zqo['_preCreateElement'] = e07oq['createElement'], e07oq['createElement'] = e07zqo['createElement'], e_0['createShaderCondition'] = e07zqo['createShaderCondition'], w85h16['parseXMLFromString'] = e07zqo['parseXMLFromString'], vd9$['_createInputElement'] = tcv$i['_createInputElement'], e07zqo['EnvConfig']['load'] = gn16['prototype']['load'], gn16['prototype']['load'] = op7fd['prototype']['load'], e07zqo['isZiYu'] && yxmw && wx['onMessage'](function (kgjba) {
        kgjba['isLoad'] && (i9tvc['ziyuFileData'][kgjba['url']] = kgjba['data']);
      });
    }, e07zqo['onMkdirCallBack'] = function (xyo0qe, uakb) {
      if (!xyo0qe) i9tvc['filesListObj'] = JSON['parse'](uakb['data']);
    }, e07zqo['pixelRatio'] = function () {
      if (!e07zqo['EnvConfig']['pixelRatioInt']) try {
        var xqy0_e = wx['getSystemInfoSync']();return e07zqo['EnvConfig']['pixelRatioInt'] = xqy0_e['pixelRatio'], xqy0_e = xqy0_e, xqy0_e['pixelRatio'];
      } catch (fdvz$) {}return e07zqo['EnvConfig']['pixelRatioInt'];
    }, e07zqo['createElement'] = function (zpdo7f) {
      if (zpdo7f == 'canvas') {
        var ex0o7;return e07zqo['idx'] == 0x1 ? e07zqo['isZiYu'] ? (ex0o7 = sharedCanvas, ex0o7['style'] = {}) : ex0o7 = window['canvas'] : ex0o7 = window['wx']['createCanvas'](), e07zqo['idx']++, ex0o7;
      } else {
        if (zpdo7f == 'textarea' || zpdo7f == 'input') return e07zqo['onCreateInput'](zpdo7f);else {
          if (zpdo7f == 'div') {
            var i49 = e07zqo['_preCreateElement'](zpdo7f);return i49['contains'] = function (xqe7) {
              return null;
            }, i49['removeChild'] = function (skajr) {}, i49;
          } else return e07zqo['_preCreateElement'](zpdo7f);
        }
      }
    }, e07zqo['onCreateInput'] = function (idc9$) {
      var _hxym0 = e07zqo['_preCreateElement'](idc9$);return _hxym0['focus'] = tcv$i['wxinputFocus'], _hxym0['blur'] = tcv$i['wxinputblur'], _hxym0['style'] = {}, _hxym0['value'] = 0x0, _hxym0['parentElement'] = {}, _hxym0['placeholder'] = {}, _hxym0['type'] = {}, _hxym0['setColor'] = function (ey_0) {}, _hxym0['setType'] = function (x0q7eo) {}, _hxym0['setFontFace'] = function (hmy0_x) {}, _hxym0['addEventListener'] = function (x0qm_) {}, _hxym0['contains'] = function (cvid) {
        return null;
      }, _hxym0['removeChild'] = function (pzfo) {}, _hxym0;
    }, e07zqo['createShaderCondition'] = function (m1w56) {
      var _xyhm0 = this,
          ep7o = function () {
        var abnrjg = m1w56;return _xyhm0[m1w56['replace']('this.', '')];
      };return ep7o;
    }, e07zqo['EnvConfig'] = null, e07zqo['window'] = null, e07zqo['_preCreateElement'] = null, e07zqo['_inited'] = ![], e07zqo['wxRequest'] = null, e07zqo['systemInfo'] = null, e07zqo['version'] = '0.0.1', e07zqo['isZiYu'] = ![], e07zqo['isPosMsgYu'] = ![], e07zqo['parseXMLFromString'] = function (pvd9f) {
      var i9$vt, opfez;pvd9f = pvd9f['replace'](/>\s+</g, '><');try {
        i9$vt = new window['Parser']['DOMParser']()['parseFromString'](pvd9f, 'text/xml');
      } catch (w65318) {
        throw '需要引入xml解析库文件';
      }return i9$vt;
    }, e07zqo['idx'] = 0x1, e07zqo;
  }(),
      m_hxw = function () {
    function grbkaj() {}g163(grbkaj, 'laya.wx.mini.MiniImage');var abrng = grbkaj['prototype'];return abrng['_loadImage'] = function (rgajnb) {
      var pf7zo = this,
          why5 = ![];rgajnb['indexOf']('layaNativeDir/') == -0x1 && (why5 = !![], rgajnb = y_5hmw['formatURL'](rgajnb));if (!i9tvc['getFileInfo'](rgajnb)) {
        if (rgajnb['indexOf']('http://') != -0x1 || rgajnb['indexOf']('https://') != -0x1) i9tvc['downImg'](rgajnb, new pvf$9d(grbkaj, grbkaj['onDownImgCallBack'], [rgajnb, pf7zo]), rgajnb);else grbkaj['onCreateImage'](rgajnb, pf7zo, !![]);
      } else grbkaj['onCreateImage'](rgajnb, pf7zo, !why5);
    }, grbkaj['onDownImgCallBack'] = function (hymx_, xy0qm, wmhx) {
      if (!wmhx) grbkaj['onCreateImage'](hymx_, xy0qm);else xy0qm['onError'](null);
    }, grbkaj['onCreateImage'] = function (agbkrj, wm15h, v9ipd$) {
      v9ipd$ === void 0x0 && (v9ipd$ = ![]);var g13;if (!v9ipd$) {
        var krjg = i9tvc['getFileInfo'](agbkrj),
            f7odz = krjg['md5'];g13 = i9tvc['getFileNativePath'](f7odz);
      } else g13 = agbkrj;if (wm15h['imgCache'] == null) wm15h['imgCache'] = {};var abnrj;function absjuk() {
        abnrj['onload'] = null, abnrj['onerror'] = null, delete wm15h['imgCache'][agbkrj];
      };var pdz$ = function () {
        absjuk(), wm15h['onLoaded'](abnrj);
      },
          w3561 = function () {
        absjuk(), wm15h['event']('error', 'Load image failed');
      };wm15h['_type'] == 'nativeimage' ? (abnrj = new e07oq['window']['Image'](), abnrj['crossOrigin'] = '', abnrj['onload'] = pdz$, abnrj['onerror'] = w3561, abnrj['src'] = g13, wm15h['imgCache'][agbkrj] = abnrj) : new vdp$i9['create'](g13, { 'onload': pdz$, 'onerror': w3561, 'onCreate': function (f7zeop) {
          abnrj = f7zeop, wm15h['imgCache'][agbkrj] = f7zeop;
        } });
    }, grbkaj;
  }(),
      tcv$i = function () {
    function fezop() {}return g163(fezop, 'laya.wx.mini.MiniInput'), fezop['_createInputElement'] = function () {
      vd9$['_initInput'](vd9$['area'] = e07oq['createElement']('textarea')), vd9$['_initInput'](vd9$['input'] = e07oq['createElement']('input')), vd9$['inputContainer'] = e07oq['createElement']('div'), vd9$['inputContainer']['style']['position'] = 'absolute', vd9$['inputContainer']['style']['zIndex'] = 0x186a0, e07oq['container']['appendChild'](vd9$['inputContainer']), vd9$['inputContainer']['setPos'] = function (juasbk, jg8n) {
        vd9$['inputContainer']['style']['left'] = juasbk + 'px', vd9$['inputContainer']['style']['top'] = jg8n + 'px';
      }, w85h6['stage']['on']('resize', null, fezop['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (w56hm) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), barsjk['_soundClass'] = sjrk, barsjk['_musicClass'] = sjrk;
    }, fezop['_onStageResize'] = function () {
      var $d7fp = w85h6['stage']['_canvasTransform']['identity']();$d7fp['scale'](e07oq['width'] / dzfp$['canvas']['width'] / e_0['getPixelRatio'](), e07oq['height'] / dzfp$['canvas']['height'] / e_0['getPixelRatio']());
    }, fezop['wxinputFocus'] = function (x_yq0m) {
      var juks = vd9$['inputElement']['target'];if (juks && !juks['editable']) return;r3gnb['window']['wx']['offKeyboardConfirm'](), r3gnb['window']['wx']['offKeyboardInput'](), r3gnb['window']['wx']['showKeyboard']({ 'defaultValue': juks['text'], 'maxLength': juks['maxChars'], 'multiple': juks['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (f7zpd$) {}, 'fail': function (bkjarg) {} }), r3gnb['window']['wx']['onKeyboardConfirm'](function ($9tci) {
        var n853 = $9tci ? $9tci['value'] : '';juks['text'] = n853, juks['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), r3gnb['window']['wx']['onKeyboardInput'](function ($dpf7) {
        var iv$t9c = $dpf7 ? $dpf7['value'] : '';if (!juks['multiline']) {
          if (iv$t9c['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }juks['text'] = iv$t9c, juks['event']('input');
      });
    }, fezop['inputEnter'] = function () {
      vd9$['inputElement']['target']['focus'] = ![];
    }, fezop['wxinputblur'] = function () {
      fezop['hideKeyboard']();
    }, fezop['hideKeyboard'] = function () {
      r3gnb['window']['wx']['offKeyboardConfirm'](), r3gnb['window']['wx']['offKeyboardInput'](), r3gnb['window']['wx']['hideKeyboard']({ 'success': function (ilc2t) {
          console['log']('隐藏键盘');
        }, 'fail': function (i$dvc) {
          console['log']('隐藏键盘出错:' + (i$dvc ? i$dvc['errMsg'] : ''));
        } });
    }, fezop;
  }(),
      op7fd = function () {
    function hmwy() {}g163(hmwy, 'laya.wx.mini.MiniLoader');var l2ci = hmwy['prototype'];return l2ci['load'] = function ($dzp, agjn, dvp9, x_qye, y_mq) {
      dvp9 === void 0x0 && (dvp9 = !![]), y_mq === void 0x0 && (y_mq = ![]);var ey_qx0 = this;ey_qx0['_url'] = $dzp;if ($dzp['indexOf']('data:image') === 0x0) ey_qx0['_type'] = agjn = 'image';else ey_qx0['_type'] = agjn || (agjn = ey_qx0['getTypeFromUrl']($dzp));ey_qx0['_cache'] = dvp9, ey_qx0['_data'] = null;var jrg3n8 = 'ascii';if ($dzp['indexOf']('.fnt') != -0x1) jrg3n8 = 'utf8';else agjn == 'arraybuffer' && (jrg3n8 = '');;var jgn3br = w85h16['getFileExtension']($dzp);if (hmwy['_fileTypeArr']['indexOf'](jgn3br) != -0x1) r3gnb['EnvConfig']['load']['call'](this, $dzp, agjn, dvp9, x_qye, y_mq);else {
        if (!i9tvc['getFileInfo']($dzp)) {
          if ($dzp['indexOf']('layaNativeDir/') != -0x1) {
            if (r3gnb['isZiYu']) {
              var $9iv = i9tvc['ziyuFileData'][$dzp];ey_qx0['onLoaded']($9iv);return;
            } else {
              cosnole['log']('read read'), i9tvc['read']($dzp, jrg3n8, new pvf$9d(hmwy, hmwy['onReadNativeCallBack'], [jrg3n8, $dzp, agjn, dvp9, x_qye, y_mq, ey_qx0]));return;
            }
          }if (y_5hmw['rootPath'] == '') var i4tl2 = $dzp;else i4tl2 = $dzp['split'](y_5hmw['rootPath'])[0x0];$dzp['indexOf']('http://') != -0x1 || $dzp['indexOf']('https://') != -0x1 ? r3gnb['EnvConfig']['load']['call'](ey_qx0, $dzp, agjn, dvp9, x_qye, y_mq) : i9tvc['readFile'](i4tl2, jrg3n8, new pvf$9d(hmwy, hmwy['onReadNativeCallBack'], [jrg3n8, $dzp, agjn, dvp9, x_qye, y_mq, ey_qx0]), $dzp);
        } else r3gnb['EnvConfig']['load']['call'](this, $dzp, agjn, dvp9, x_qye, y_mq);
      }
    }, l2ci['resMgrLoad'] = function (b3jrgn, q_e0yx, hm_wy, ukbjas, i4tc92, zp$dv, pozfe) {
      hm_wy === void 0x0 && (hm_wy = 0x0), ukbjas === void 0x0 && (ukbjas = ![]), i4tc92 === void 0x0 && (i4tc92 = ![]), zp$dv === void 0x0 && (zp$dv = 0x0), pozfe === void 0x0 && (pozfe = 0x3), b3jrgn['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', b3jrgn), r3gnb['EnvConfig']['resMgrLoad'](b3jrgn, (ofezp, d$vi, n8635) => {
        hmwy['prototype']['resMgrLoadCallBack'](ofezp, d$vi, n8635, q_e0yx);
      }, hm_wy, ukbjas, i4tc92, zp$dv, pozfe);
    }, l2ci['resMgrLoadCallBack'] = function (bjkua, n6g318, zp$fd7, f9vd$) {
      console['log']('buff:::', bjkua, zp$fd7, i9tvc['fileNativeDir'] + '///' + i9tvc['fileListName']), f9vd$(bjkua, n6g318, zp$fd7);
    }, l2ci['clearRes'] = function (ywm_5, kubaj) {
      kubaj === void 0x0 && (kubaj = ![]);var jaub = this;jaub['clearRes'](ywm_5, kubaj);var mq0_ = i9tvc['getFileInfo'](ywm_5);if (mq0_ && (ywm_5['indexOf']('http://') != -0x1 || ywm_5['indexOf']('https://') != -0x1)) {
        var o70ex = mq0_['md5'],
            w85h = i9tvc['getFileNativePath'](o70ex);i9tvc['remove'](w85h);
      }
    }, hmwy['onReadNativeCallBack'] = function (epf7, wmy_h, hm6w_5, cvit, w18, vdpf$9, wm6h_, eq7ox, qz0e7o) {
      cvit === void 0x0 && (cvit = !![]), vdpf$9 === void 0x0 && (vdpf$9 = ![]), eq7ox === void 0x0 && (eq7ox = 0x0);if (!eq7ox) {
        var b3gr;if (hm6w_5 == 'json' || hm6w_5 == 'atlas') b3gr = r3gnb['getJson'](qz0e7o['data']);else hm6w_5 == 'xml' ? b3gr = w85h16['parseXMLFromString'](qz0e7o['data']) : b3gr = qz0e7o['data'];wm6h_['onLoaded'](b3gr), !r3gnb['isZiYu'] && r3gnb['isPosMsgYu'] && hm6w_5 != 'arraybuffer' && wx['postMessage']({ 'url': wmy_h, 'data': b3gr, 'isLoad': !![] });
      } else eq7ox == 0x1 && r3gnb['EnvConfig']['load']['call'](wm6h_, wmy_h, hm6w_5, cvit, w18, vdpf$9);
    }, xywh(hmwy, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), hmwy;
  }(),
      i9tvc = function (eo) {
    function c4ti92() {
      c4ti92['__super']['call'](this);;
    }return g163(c4ti92, 'laya.wx.mini.MiniFileMgr', eo), c4ti92['isLoadFile'] = function (krsbj) {
      return c4ti92['_fileTypeArr']['indexOf'](krsbj) != -0x1 ? !![] : ![];
    }, c4ti92['getFileInfo'] = function (hyw_5) {
      var agkrj = hyw_5['split']('?')[0x0],
          n3g1 = c4ti92['filesListObj'][agkrj];if (n3g1 == null) return null;else return n3g1;return null;
    }, c4ti92['onFileUpdate'] = function (z$d7, bskju) {
      var bskrja = z$d7['split']('/'),
          xqy = bskrja[bskrja['length'] - 0x1],
          qym0_x = c4ti92['getFileInfo'](bskju);if (qym0_x == null) c4ti92['onSaveFile'](bskju, xqy);else {
        if (qym0_x['readyUrl'] != bskju) c4ti92['remove'](xqy, bskju);
      }
    }, c4ti92['exits'] = function (w_6m5, agbn) {
      var h15m = c4ti92['getFileNativePath'](w_6m5);c4ti92['fs']['getFileInfo']({ 'filePath': h15m, 'success': function (jnrg38) {
          agbn != null && agbn['runWith']([0x0, jnrg38]);
        }, 'fail': function (x7q) {
          agbn != null && agbn['runWith']([0x1, x7q]);
        } });
    }, c4ti92['read'] = function (tv9ic$, rnjg, dvf$9p, vf$pzd) {
      rnjg === void 0x0 && (rnjg = 'ascill'), vf$pzd === void 0x0 && (vf$pzd = '');var jngba;vf$pzd != '' ? jngba = c4ti92['getFileNativePath'](tv9ic$) : jngba = tv9ic$, c4ti92['fs']['readFile']({ 'filePath': jngba, 'encoding': rnjg, 'success': function (eqfo) {
          dvf$9p != null && dvf$9p['runWith']([0x0, eqfo]);
        }, 'fail': function (gn136) {
          if (gn136 && vf$pzd != '') c4ti92['down'](vf$pzd, rnjg, dvf$9p, vf$pzd);else dvf$9p != null && dvf$9p['runWith']([0x1]);
        } });
    }, c4ti92['readNativeFile'] = function (bksjua, $v9dp) {
      c4ti92['fs']['readFile']({ 'filePath': bksjua, 'encoding': '', 'success': function (c29i4t) {
          $v9dp != null && $v9dp['runWith']([0x0]);
        }, 'fail': function (x0y_q) {
          $v9dp != null && $v9dp['runWith']([0x1]);
        } });
    }, c4ti92['down'] = function (_w5m6h, _hxy0m, $pv9d, sjrkba) {
      _hxy0m === void 0x0 && (_hxy0m = 'ascill'), sjrkba === void 0x0 && (sjrkba = '');var dvfpz = c4ti92['getFileNativePath'](sjrkba),
          hw5_ym = c4ti92['wxdown']({ 'url': _w5m6h, 'filePath': dvfpz, 'success': function (y_mqx) {
          if (y_mqx['statusCode'] === 0xc8) c4ti92['readFile'](y_mqx['filePath'], _hxy0m, $pv9d, sjrkba);
        }, 'fail': function (n8j3rg) {
          $pv9d != null && $pv9d['runWith']([0x1, n8j3rg]);
        } });hw5_ym['onProgressUpdate'](function (epfz7) {
        $pv9d != null && $pv9d['runWith']([0x2, epfz7['progress']]);
      });
    }, c4ti92['readFile'] = function (m_qx, fd9$pv, oq7x, eopzf) {
      fd9$pv === void 0x0 && (fd9$pv = 'ascill'), eopzf === void 0x0 && (eopzf = ''), c4ti92['fs']['readFile']({ 'filePath': m_qx, 'encoding': fd9$pv, 'success': function (dciv9$) {
          if (m_qx['indexOf']('http://') != -0x1 || m_qx['indexOf']('https://') != -0x1) c4ti92['onFileUpdate'](m_qx, eopzf);oq7x != null && oq7x['runWith']([0x0, dciv9$]);
        }, 'fail': function (h1w5m) {
          if (h1w5m) oq7x != null && oq7x['runWith']([0x1, h1w5m]);
        } });
    }, c4ti92['downImg'] = function (n3rjb, c9v2, rngab) {
      rngab === void 0x0 && (rngab = '');var fzd7p = c4ti92['wxdown']({ 'url': n3rjb, 'success': function (h6) {
          h6['statusCode'] === 0xc8 && c4ti92['copyFile'](h6['tempFilePath'], rngab, c9v2);
        }, 'fail': function (gr318n) {
          c9v2 != null && c9v2['runWith']([0x1, gr318n]);
        } });
    }, c4ti92['copyFile'] = function (jbasr, zfdp$v, _hym) {
      var gnb3j = jbasr['split']('/'),
          y0xq_m = gnb3j[gnb3j['length'] - 0x1],
          gjnab = zfdp$v['split']('?')[0x0],
          n3gjrb = c4ti92['getFileInfo'](zfdp$v),
          gabrn = c4ti92['getFileNativePath'](y0xq_m);c4ti92['fs']['copyFile']({ 'srcPath': jbasr, 'destPath': gabrn, 'success': function (asjub) {
          if (!n3gjrb) c4ti92['onSaveFile'](zfdp$v, y0xq_m), _hym != null && _hym['runWith']([0x0]);else {
            if (n3gjrb['readyUrl'] != zfdp$v) c4ti92['remove'](y0xq_m, zfdp$v, _hym);
          }
        }, 'fail': function (xe0yq) {
          _hym != null && _hym['runWith']([0x1, xe0yq]);
        } });
    }, c4ti92['getFileNativePath'] = function (ajskrb) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ajskrb;
    }, c4ti92['remove'] = function (icdv, wh568, w5_hmy) {
      wh568 === void 0x0 && (wh568 = '');var rgnba = c4ti92['getFileInfo'](wh568),
          bjnr3g = c4ti92['getFileNativePath'](rgnba['md5']);w85h6['loader']['clearRes'](rgnba['readyUrl']), c4ti92['fs']['unlink']({ 'filePath': bjnr3g, 'success': function (rbjsa) {
          if (wh568 != '') c4ti92['onSaveFile'](wh568, icdv);w5_hmy != null && w5_hmy['runWith']([0x0]);
        }, 'fail': function (xm_0) {} });
    }, c4ti92['onSaveFile'] = function (ep7foz, rajkbg) {
      var j8nrg = ep7foz['split']('?')[0x0];c4ti92['filesListObj'][j8nrg] = { 'md5': rajkbg, 'readyUrl': ep7foz }, c4ti92['fs']['writeFile']({ 'filePath': c4ti92['fileNativeDir'] + '/' + c4ti92['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](c4ti92['filesListObj']), 'success': function (z70e) {
          console['log']('写入测试测试成功：', z70e);
        }, 'fail': function (jrsba) {
          console['log']('写入测试测试失败：', jrsba);
        } });
    }, c4ti92['existDir'] = function (abngr, gjrkb) {
      c4ti92['fs']['mkdir']({ 'dirPath': abngr, 'success': function (_5hmyw) {
          gjrkb != null && gjrkb['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (gkbjr) {
          if (gkbjr['errMsg']['indexOf']('file already exists') != -0x1) c4ti92['readSync'](c4ti92['fileListName'], 'utf8', gjrkb);else gjrkb != null && gjrkb['runWith']([0x1, gkbjr]);
        } });
    }, c4ti92['readSync'] = function (w561mh, zofd, rkajg, rg13n8) {
      zofd === void 0x0 && (zofd = 'ascill'), rg13n8 === void 0x0 && (rg13n8 = '');var eqfo7 = c4ti92['getFileNativePath'](w561mh),
          anbg;try {
        anbg = c4ti92['fs']['readFileSync'](eqfo7), rkajg != null && rkajg['runWith']([0x0, { 'data': anbg }]);
      } catch (fvp$d) {
        rkajg != null && rkajg['runWith']([0x1]);
      }
    }, c4ti92['readCache'] = function () {}, c4ti92['writeCache'] = function (bgjr3n) {
      var cvi29 = readyUrl['split']('?')[0x0];c4ti92['filesListObj'][cvi29] = { 'md5': md5Name, 'readyUrl': readyUrl }, c4ti92['fs']['writeFile']({ 'filePath': c4ti92['fileNativeDir'] + '/' + c4ti92['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](c4ti92['filesListObj']), 'success': function (jrgka) {}, 'fail': function (ubakjs) {} });
    }, c4ti92['setNativeFileDir'] = function (n683g1) {
      c4ti92['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + n683g1;
    }, c4ti92['filesListObj'] = {}, c4ti92['fileNativeDir'] = null, c4ti92['fileListName'] = 'layaairfiles.txt', c4ti92['ziyuFileData'] = {}, xywh(c4ti92, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), c4ti92;
  }(t942ci),
      sjrk = function (c4it92) {
    function ragnj() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ragnj['__super']['call'](this), this['_sound'] = ragnj['_createSound']();
    }g163(ragnj, 'laya.wx.mini.MiniSound', c4it92);var ubaks = ragnj['prototype'];return ubaks['load'] = function (f7zd$) {
      var itcv$9 = this;f7zd$ = y_5hmw['formatURL'](f7zd$), this['url'] = f7zd$;if (ragnj['_audioCache'][f7zd$]) {
        this['event']('complete');return;
      }function iv$cd9() {
        if (ragnj['_null'] != undefined) itcv$9['_sound']['onCanplay'](ragnj['_null']), itcv$9['_sound']['onError'](ragnj['_null']);else try {
          itcv$9['_sound']['onCanplay'](null), itcv$9['_sound']['onError'](null), ragnj['_null'] = null;
        } catch (jasbk) {
          console['warn']('[wxmini] _clearSound:' + jasbk), itcv$9['_sound']['onCanplay'](qxo0e), itcv$9['_sound']['onError'](qxo0e), ragnj['_null'] = qxo0e;
        }
      }function yxmw_() {
        iv$cd9(), g61['loaded'] = !![], g61['event']('complete'), ragnj['_audioCache'][g61['url']] = g61;
      }function xh_0m(ti$9vc) {
        console['error']('errCode=' + ti$9vc['errCode'] + '  errMsg=' + ti$9vc['errMsg']), iv$cd9(), g61['event']('error');
      }function qxo0e() {}this['_sound']['onCanplay'](yxmw_), this['_sound']['onError'](xh_0m), this['_sound']['src'] = f7zd$;var g61 = this;
    }, ubaks['play'] = function (_hm0, _xwymh) {
      _hm0 === void 0x0 && (_hm0 = 0x0), _xwymh === void 0x0 && (_xwymh = 0x0);var _ymw;if (this['url'] == barsjk['_tMusic']) {
        if (!ragnj['_musicAudio']) ragnj['_musicAudio'] = ragnj['_createSound']();_ymw = ragnj['_musicAudio'];
      } else _ymw = ragnj['_createSound']();_ymw['src'] = this['url'];var vdic = new gbrjna(_ymw);return vdic['url'] = this['url'], vdic['loops'] = _xwymh, vdic['startTime'] = _hm0, vdic['play'](), barsjk['addChannel'](vdic), vdic;
    }, ubaks['dispose'] = function () {
      var d$vpz = ragnj['_audioCache'][this['url']];d$vpz && (d$vpz['src'] = '', delete ragnj['_audioCache'][this['url']]);
    }, yx0_m(0x0, ubaks, 'duration', function () {
      return this['_sound']['duration'];
    }), ragnj['_createSound'] = function () {
      return ragnj['_id']++, r3gnb['window']['wx']['createInnerAudioContext']();
    }, ragnj['_musicAudio'] = null, ragnj['_id'] = 0x0, ragnj['_audioCache'] = {}, ragnj['_null'] = undefined, ragnj;
  }(t942ci),
      gbrjna = function (abkju) {
    function c$vi9d(j38rgn) {
      this['_audio'] = null, this['_onEnd'] = null, c$vi9d['__super']['call'](this), this['_audio'] = j38rgn, this['_onEnd'] = w85h16['bind'](this['__onEnd'], this), j38rgn['onEnded'](this['_onEnd']);
    }g163(c$vi9d, 'laya.wx.mini.MiniSoundChannel', abkju);var d7fp = c$vi9d['prototype'];return d7fp['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (w85h6['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, d7fp['__onNull'] = function () {}, d7fp['play'] = function () {
      this['isStopped'] = ![], barsjk['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, d7fp['stop'] = function () {
      this['isStopped'] = !![], barsjk['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (c$vi9d['_null'] != undefined) this['_audio']['onEnded'](c$vi9d['_null']);else try {
        this['_audio']['onEnded'](null), c$vi9d['_null'] = null;
      } catch ($cdi9) {
        console['warn']('[wxmini] stop:' + $cdi9), this['_audio']['onEnded'](w85h16['bind'](this['__onNull'], this)), c$vi9d['_null'] = w85h16['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, d7fp['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, d7fp['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], barsjk['addChannel'](this), this['_audio']['play']();
    }, yx0_m(0x0, d7fp, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), yx0_m(0x0, d7fp, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), yx0_m(0x0, d7fp, 'volume', function () {
      return 0x1;
    }, function (bjagr) {}), c$vi9d['_null'] = undefined, c$vi9d;
  }(hwm651);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var pz7eof in Laya) {
    var bjskau = Laya[pz7eof];bjskau && bjskau['__isclass'] && (exports[pz7eof] = bjskau);
  }
});