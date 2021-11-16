var M = wx.$T;
(function (window, document, kgjrba) {
  var vpz$f = kgjrba['un'],
      m15h = kgjrba['uns'],
      dpfz7$ = kgjrba['static'],
      t9i2vc = kgjrba['class'],
      dvp9i = kgjrba['getset'],
      w5mh_y = kgjrba['__newvec'],
      m_h = laya['utils']['Browser'],
      ti2c9 = laya['events']['Event'],
      n8561 = laya['events']['EventDispatcher'],
      eoz07 = laya['resource']['HTMLImage'],
      c4i = laya['utils']['Handler'],
      jabkrs = laya['display']['Input'],
      jb3nrg = laya['net']['Loader'],
      q_exy = laya['maths']['Matrix'],
      f9vpd = laya['renders']['Render'],
      i9t$cv = laya['utils']['RunDriver'],
      oe = laya['media']['Sound'],
      p7fz = laya['media']['SoundChannel'],
      ci2l4t = laya['media']['SoundManager'],
      dof7pz = laya['display']['Stage'],
      m_5h6w = laya['net']['URL'],
      gbrna = laya['utils']['Utils'],
      nabrjg = function () {
    function yxe0_q() {}return t9i2vc(yxe0_q, 'laya.wx.mini.MiniAdpter'), yxe0_q['getJson'] = function ($7fpz) {
      return JSON['parse']($7fpz);
    }, yxe0_q['init'] = function (m0xh_, kuasj) {
      m0xh_ === void 0x0 && (m0xh_ = ![]), kuasj === void 0x0 && (kuasj = ![]);if (yxe0_q['_inited']) return;yxe0_q['window'] = window;if (yxe0_q['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;yxe0_q['_inited'] = !![], yxe0_q['isZiYu'] = kuasj, yxe0_q['isPosMsgYu'] = m0xh_, yxe0_q['EnvConfig'] = {}, !yxe0_q['isZiYu'] && (h6w51m['setNativeFileDir']('/layaairGame'), h6w51m['existDir'](h6w51m['fileNativeDir'], c4i['create'](yxe0_q, yxe0_q['onMkdirCallBack']))), yxe0_q['window']['focus'] = function () {}, kgjrba['getUrlPath'] = function () {}, yxe0_q['window']['logtime'] = function (f$dvzp) {}, yxe0_q['window']['alertTimeLog'] = function (i9dvc$) {}, yxe0_q['window']['resetShareInfo'] = function () {}, yxe0_q['window']['CanvasRenderingContext2D'] = function () {}, yxe0_q['window']['CanvasRenderingContext2D']['prototype'] = yxe0_q['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yxe0_q['window']['document']['body']['appendChild'] = function () {}, yxe0_q['EnvConfig']['pixelRatioInt'] = 0x0, i9t$cv['getPixelRatio'] = yxe0_q['pixelRatio'], yxe0_q['_preCreateElement'] = m_h['createElement'], m_h['createElement'] = yxe0_q['createElement'], i9t$cv['createShaderCondition'] = yxe0_q['createShaderCondition'], gbrna['parseXMLFromString'] = yxe0_q['parseXMLFromString'], jabkrs['_createInputElement'] = ze7po['_createInputElement'], yxe0_q['EnvConfig']['load'] = jb3nrg['prototype']['load'], jb3nrg['prototype']['load'] = p7ofez['prototype']['load'], yxe0_q['isZiYu'] && m0xh_ && wx['onMessage'](function (c$vid9) {
        c$vid9['isLoad'] && (h6w51m['ziyuFileData'][c$vid9['url']] = c$vid9['data']);
      });
    }, yxe0_q['onMkdirCallBack'] = function (ajrn, ti9c2) {
      if (!ajrn) h6w51m['filesListObj'] = JSON['parse'](ti9c2['data']);
    }, yxe0_q['pixelRatio'] = function () {
      if (!yxe0_q['EnvConfig']['pixelRatioInt']) try {
        var grakjb = wx['getSystemInfoSync']();return yxe0_q['EnvConfig']['pixelRatioInt'] = grakjb['pixelRatio'], grakjb = grakjb, grakjb['pixelRatio'];
      } catch (rgn831) {}return yxe0_q['EnvConfig']['pixelRatioInt'];
    }, yxe0_q['createElement'] = function (x70qe) {
      if (x70qe == 'canvas') {
        var zp$d7;return yxe0_q['idx'] == 0x1 ? yxe0_q['isZiYu'] ? (zp$d7 = sharedCanvas, zp$d7['style'] = {}) : zp$d7 = window['canvas'] : zp$d7 = window['wx']['createCanvas'](), yxe0_q['idx']++, zp$d7;
      } else {
        if (x70qe == 'textarea' || x70qe == 'input') return yxe0_q['onCreateInput'](x70qe);else {
          if (x70qe == 'div') {
            var po7z = yxe0_q['_preCreateElement'](x70qe);return po7z['contains'] = function (xwyh_m) {
              return null;
            }, po7z['removeChild'] = function (mwy5_) {}, po7z;
          } else return yxe0_q['_preCreateElement'](x70qe);
        }
      }
    }, yxe0_q['onCreateInput'] = function (n3g81) {
      var ofzep = yxe0_q['_preCreateElement'](n3g81);return ofzep['focus'] = ze7po['wxinputFocus'], ofzep['blur'] = ze7po['wxinputblur'], ofzep['style'] = {}, ofzep['value'] = 0x0, ofzep['parentElement'] = {}, ofzep['placeholder'] = {}, ofzep['type'] = {}, ofzep['setColor'] = function (y0oq) {}, ofzep['setType'] = function (bsak) {}, ofzep['setFontFace'] = function (z7podf) {}, ofzep['addEventListener'] = function (ofz7p) {}, ofzep['contains'] = function (p$iv9d) {
        return null;
      }, ofzep['removeChild'] = function (it942) {}, ofzep;
    }, yxe0_q['createShaderCondition'] = function (jbausk) {
      var jrn8 = this,
          ausjbk = function () {
        var xeqo = jbausk;return jrn8[jbausk['replace']('this.', '')];
      };return ausjbk;
    }, yxe0_q['EnvConfig'] = null, yxe0_q['window'] = null, yxe0_q['_preCreateElement'] = null, yxe0_q['_inited'] = ![], yxe0_q['wxRequest'] = null, yxe0_q['systemInfo'] = null, yxe0_q['version'] = '0.0.1', yxe0_q['isZiYu'] = ![], yxe0_q['isPosMsgYu'] = ![], yxe0_q['parseXMLFromString'] = function (dc$9iv) {
      var krgabj, m61h5w;dc$9iv = dc$9iv['replace'](/>\s+</g, '><');try {
        krgabj = new window['Parser']['DOMParser']()['parseFromString'](dc$9iv, 'text/xml');
      } catch (ic2t4) {
        throw '需要引入xml解析库文件';
      }return krgabj;
    }, yxe0_q['idx'] = 0x1, yxe0_q;
  }(),
      rjgka = function () {
    function $fzpvd() {}t9i2vc($fzpvd, 'laya.wx.mini.MiniImage');var ymxh = $fzpvd['prototype'];return ymxh['_loadImage'] = function (bkrajg) {
      var jr3b = this,
          askujb = ![];bkrajg['indexOf']('layaNativeDir/') == -0x1 && (askujb = !![], bkrajg = m_5h6w['formatURL'](bkrajg));if (!h6w51m['getFileInfo'](bkrajg)) {
        if (bkrajg['indexOf']('http://') != -0x1 || bkrajg['indexOf']('https://') != -0x1) h6w51m['downImg'](bkrajg, new c4i($fzpvd, $fzpvd['onDownImgCallBack'], [bkrajg, jr3b]), bkrajg);else $fzpvd['onCreateImage'](bkrajg, jr3b, !![]);
      } else $fzpvd['onCreateImage'](bkrajg, jr3b, !askujb);
    }, $fzpvd['onDownImgCallBack'] = function (jbng, dfp9, oefp) {
      if (!oefp) $fzpvd['onCreateImage'](jbng, dfp9);else dfp9['onError'](null);
    }, $fzpvd['onCreateImage'] = function (d$i9pv, f7dzo, _hxm0) {
      _hxm0 === void 0x0 && (_hxm0 = ![]);var fdz$vp;if (!_hxm0) {
        var ajbs = h6w51m['getFileInfo'](d$i9pv),
            h5w8 = ajbs['md5'];fdz$vp = h6w51m['getFileNativePath'](h5w8);
      } else fdz$vp = d$i9pv;if (f7dzo['imgCache'] == null) f7dzo['imgCache'] = {};var rnbag;function xh_0my() {
        rnbag['onload'] = null, rnbag['onerror'] = null, delete f7dzo['imgCache'][d$i9pv];
      };var $f9d = function () {
        xh_0my(), f7dzo['onLoaded'](rnbag);
      },
          m0yxh_ = function () {
        xh_0my(), f7dzo['event']('error', 'Load image failed');
      };f7dzo['_type'] == 'nativeimage' ? (rnbag = new m_h['window']['Image'](), rnbag['crossOrigin'] = '', rnbag['onload'] = $f9d, rnbag['onerror'] = m0yxh_, rnbag['src'] = fdz$vp, f7dzo['imgCache'][d$i9pv] = rnbag) : new eoz07['create'](fdz$vp, { 'onload': $f9d, 'onerror': m0yxh_, 'onCreate': function (i492tc) {
          rnbag = i492tc, f7dzo['imgCache'][d$i9pv] = i492tc;
        } });
    }, $fzpvd;
  }(),
      ze7po = function () {
    function vd$f9() {}return t9i2vc(vd$f9, 'laya.wx.mini.MiniInput'), vd$f9['_createInputElement'] = function () {
      jabkrs['_initInput'](jabkrs['area'] = m_h['createElement']('textarea')), jabkrs['_initInput'](jabkrs['input'] = m_h['createElement']('input')), jabkrs['inputContainer'] = m_h['createElement']('div'), jabkrs['inputContainer']['style']['position'] = 'absolute', jabkrs['inputContainer']['style']['zIndex'] = 0x186a0, m_h['container']['appendChild'](jabkrs['inputContainer']), jabkrs['inputContainer']['setPos'] = function (yxeq, oxy0) {
        jabkrs['inputContainer']['style']['left'] = yxeq + 'px', jabkrs['inputContainer']['style']['top'] = oxy0 + 'px';
      }, kgjrba['stage']['on']('resize', null, vd$f9['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xqoy0e) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ci2l4t['_soundClass'] = bsjkra, ci2l4t['_musicClass'] = bsjkra;
    }, vd$f9['_onStageResize'] = function () {
      var civ$9d = kgjrba['stage']['_canvasTransform']['identity']();civ$9d['scale'](m_h['width'] / f9vpd['canvas']['width'] / i9t$cv['getPixelRatio'](), m_h['height'] / f9vpd['canvas']['height'] / i9t$cv['getPixelRatio']());
    }, vd$f9['wxinputFocus'] = function (sjabrk) {
      var peofz = jabkrs['inputElement']['target'];if (peofz && !peofz['editable']) return;nabrjg['window']['wx']['offKeyboardConfirm'](), nabrjg['window']['wx']['offKeyboardInput'](), nabrjg['window']['wx']['showKeyboard']({ 'defaultValue': peofz['text'], 'maxLength': peofz['maxChars'], 'multiple': peofz['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ajkbr) {}, 'fail': function (_wh65m) {} }), nabrjg['window']['wx']['onKeyboardConfirm'](function (_w5yh) {
        var mxy_ = _w5yh ? _w5yh['value'] : '';peofz['text'] = mxy_, peofz['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), nabrjg['window']['wx']['onKeyboardInput'](function (lit24) {
        var m61w5h = lit24 ? lit24['value'] : '';if (!peofz['multiline']) {
          if (m61w5h['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }peofz['text'] = m61w5h, peofz['event']('input');
      });
    }, vd$f9['inputEnter'] = function () {
      jabkrs['inputElement']['target']['focus'] = ![];
    }, vd$f9['wxinputblur'] = function () {
      vd$f9['hideKeyboard']();
    }, vd$f9['hideKeyboard'] = function () {
      nabrjg['window']['wx']['offKeyboardConfirm'](), nabrjg['window']['wx']['offKeyboardInput'](), nabrjg['window']['wx']['hideKeyboard']({ 'success': function (akjrsb) {
          console['log']('隐藏键盘');
        }, 'fail': function (jbn3gr) {
          console['log']('隐藏键盘出错:' + (jbn3gr ? jbn3gr['errMsg'] : ''));
        } });
    }, vd$f9;
  }(),
      p7ofez = function () {
    function v$pf9d() {}t9i2vc(v$pf9d, 'laya.wx.mini.MiniLoader');var sbuajk = v$pf9d['prototype'];return sbuajk['load'] = function (rkbsaj, c9i2tv, grn318, o7dzpf, odz7pf) {
      grn318 === void 0x0 && (grn318 = !![]), odz7pf === void 0x0 && (odz7pf = ![]);var e7qxo = this;e7qxo['_url'] = rkbsaj;if (rkbsaj['indexOf']('data:image') === 0x0) e7qxo['_type'] = c9i2tv = 'image';else e7qxo['_type'] = c9i2tv || (c9i2tv = e7qxo['getTypeFromUrl'](rkbsaj));e7qxo['_cache'] = grn318, e7qxo['_data'] = null;var yw5m_h = 'ascii';if (rkbsaj['indexOf']('.fnt') != -0x1) yw5m_h = 'utf8';else c9i2tv == 'arraybuffer' && (yw5m_h = '');;var lt2i4c = gbrna['getFileExtension'](rkbsaj);if (v$pf9d['_fileTypeArr']['indexOf'](lt2i4c) != -0x1) nabrjg['EnvConfig']['load']['call'](this, rkbsaj, c9i2tv, grn318, o7dzpf, odz7pf);else {
        if (!h6w51m['getFileInfo'](rkbsaj)) {
          if (rkbsaj['indexOf']('layaNativeDir/') != -0x1) {
            if (nabrjg['isZiYu']) {
              var yxh = h6w51m['ziyuFileData'][rkbsaj];e7qxo['onLoaded'](yxh);return;
            } else {
              cosnole['log']('read read'), h6w51m['read'](rkbsaj, yw5m_h, new c4i(v$pf9d, v$pf9d['onReadNativeCallBack'], [yw5m_h, rkbsaj, c9i2tv, grn318, o7dzpf, odz7pf, e7qxo]));return;
            }
          }if (m_5h6w['rootPath'] == '') var dvi$9c = rkbsaj;else dvi$9c = rkbsaj['split'](m_5h6w['rootPath'])[0x0];rkbsaj['indexOf']('http://') != -0x1 || rkbsaj['indexOf']('https://') != -0x1 ? nabrjg['EnvConfig']['load']['call'](e7qxo, rkbsaj, c9i2tv, grn318, o7dzpf, odz7pf) : h6w51m['readFile'](dvi$9c, yw5m_h, new c4i(v$pf9d, v$pf9d['onReadNativeCallBack'], [yw5m_h, rkbsaj, c9i2tv, grn318, o7dzpf, odz7pf, e7qxo]), rkbsaj);
        } else nabrjg['EnvConfig']['load']['call'](this, rkbsaj, c9i2tv, grn318, o7dzpf, odz7pf);
      }
    }, sbuajk['resMgrLoad'] = function (qefz7, eyx_q, ci9dv$, hm_wyx, oefq7, it9vc, krgja) {
      ci9dv$ === void 0x0 && (ci9dv$ = 0x0), hm_wyx === void 0x0 && (hm_wyx = ![]), oefq7 === void 0x0 && (oefq7 = ![]), it9vc === void 0x0 && (it9vc = 0x0), krgja === void 0x0 && (krgja = 0x3), qefz7['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', qefz7), nabrjg['EnvConfig']['resMgrLoad'](qefz7, (qe7o0z, m5w_, m1hw65) => {
        v$pf9d['prototype']['resMgrLoadCallBack'](qe7o0z, m5w_, m1hw65, eyx_q);
      }, ci9dv$, hm_wyx, oefq7, it9vc, krgja);
    }, sbuajk['resMgrLoadCallBack'] = function (q0ey_x, arjk, suakbj, zf7peo) {
      console['log']('buff:::', q0ey_x, suakbj, h6w51m['fileNativeDir'] + '///' + h6w51m['fileListName']), zf7peo(q0ey_x, arjk, suakbj);
    }, sbuajk['clearRes'] = function ($tc9i, iv9t$c) {
      iv9t$c === void 0x0 && (iv9t$c = ![]);var g3n681 = this;g3n681['clearRes']($tc9i, iv9t$c);var fpz$v = h6w51m['getFileInfo']($tc9i);if (fpz$v && ($tc9i['indexOf']('http://') != -0x1 || $tc9i['indexOf']('https://') != -0x1)) {
        var agjbn = fpz$v['md5'],
            t4c92i = h6w51m['getFileNativePath'](agjbn);h6w51m['remove'](t4c92i);
      }
    }, v$pf9d['onReadNativeCallBack'] = function (q_exy0, bgakr, qefoz, q0_myx, jkbaus, e7pzo, w6m15h, ngabj, mw56h) {
      q0_myx === void 0x0 && (q0_myx = !![]), e7pzo === void 0x0 && (e7pzo = ![]), ngabj === void 0x0 && (ngabj = 0x0);if (!ngabj) {
        var pd$vz;if (qefoz == 'json' || qefoz == 'atlas') pd$vz = nabrjg['getJson'](mw56h['data']);else qefoz == 'xml' ? pd$vz = gbrna['parseXMLFromString'](mw56h['data']) : pd$vz = mw56h['data'];w6m15h['onLoaded'](pd$vz), !nabrjg['isZiYu'] && nabrjg['isPosMsgYu'] && qefoz != 'arraybuffer' && wx['postMessage']({ 'url': bgakr, 'data': pd$vz, 'isLoad': !![] });
      } else ngabj == 0x1 && nabrjg['EnvConfig']['load']['call'](w6m15h, bgakr, qefoz, q0_myx, jkbaus, e7pzo);
    }, dpfz7$(v$pf9d, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), v$pf9d;
  }(),
      h6w51m = function ($pzdvf) {
    function xeyq_0() {
      xeyq_0['__super']['call'](this);;
    }return t9i2vc(xeyq_0, 'laya.wx.mini.MiniFileMgr', $pzdvf), xeyq_0['isLoadFile'] = function (fpzd$7) {
      return xeyq_0['_fileTypeArr']['indexOf'](fpzd$7) != -0x1 ? !![] : ![];
    }, xeyq_0['getFileInfo'] = function (ozq7ef) {
      var fpze = ozq7ef['split']('?')[0x0],
          fodpz7 = xeyq_0['filesListObj'][fpze];if (fodpz7 == null) return null;else return fodpz7;return null;
    }, xeyq_0['onFileUpdate'] = function (zdfp7, jbrgna) {
      var cilt42 = zdfp7['split']('/'),
          x0yqe = cilt42[cilt42['length'] - 0x1],
          jrakb = xeyq_0['getFileInfo'](jbrgna);if (jrakb == null) xeyq_0['onSaveFile'](jbrgna, x0yqe);else {
        if (jrakb['readyUrl'] != jbrgna) xeyq_0['remove'](x0yqe, jbrgna);
      }
    }, xeyq_0['exits'] = function (arbs, rnjgb) {
      var d9v$f = xeyq_0['getFileNativePath'](arbs);xeyq_0['fs']['getFileInfo']({ 'filePath': d9v$f, 'success': function (ajsb) {
          rnjgb != null && rnjgb['runWith']([0x0, ajsb]);
        }, 'fail': function ($9cdiv) {
          rnjgb != null && rnjgb['runWith']([0x1, $9cdiv]);
        } });
    }, xeyq_0['read'] = function (qo7ze0, efqzo, zd7po, rsjk) {
      efqzo === void 0x0 && (efqzo = 'ascill'), rsjk === void 0x0 && (rsjk = '');var v$i9c;rsjk != '' ? v$i9c = xeyq_0['getFileNativePath'](qo7ze0) : v$i9c = qo7ze0, xeyq_0['fs']['readFile']({ 'filePath': v$i9c, 'encoding': efqzo, 'success': function (basujk) {
          zd7po != null && zd7po['runWith']([0x0, basujk]);
        }, 'fail': function (_mh5yw) {
          if (_mh5yw && rsjk != '') xeyq_0['down'](rsjk, efqzo, zd7po, rsjk);else zd7po != null && zd7po['runWith']([0x1]);
        } });
    }, xeyq_0['readNativeFile'] = function (fd7po, mwyx) {
      xeyq_0['fs']['readFile']({ 'filePath': fd7po, 'encoding': '', 'success': function (n3158) {
          mwyx != null && mwyx['runWith']([0x0]);
        }, 'fail': function (v9pfd) {
          mwyx != null && mwyx['runWith']([0x1]);
        } });
    }, xeyq_0['down'] = function (fdpvz$, zeof7, p9dvi$, fpzdv) {
      zeof7 === void 0x0 && (zeof7 = 'ascill'), fpzdv === void 0x0 && (fpzdv = '');var hw_m = xeyq_0['getFileNativePath'](fpzdv),
          m651h = xeyq_0['wxdown']({ 'url': fdpvz$, 'filePath': hw_m, 'success': function (y0_qxe) {
          if (y0_qxe['statusCode'] === 0xc8) xeyq_0['readFile'](y0_qxe['filePath'], zeof7, p9dvi$, fpzdv);
        }, 'fail': function (pdofz7) {
          p9dvi$ != null && p9dvi$['runWith']([0x1, pdofz7]);
        } });m651h['onProgressUpdate'](function (b3rjgn) {
        p9dvi$ != null && p9dvi$['runWith']([0x2, b3rjgn['progress']]);
      });
    }, xeyq_0['readFile'] = function (h61w5, kasjr, _exq0, xo0q) {
      kasjr === void 0x0 && (kasjr = 'ascill'), xo0q === void 0x0 && (xo0q = ''), xeyq_0['fs']['readFile']({ 'filePath': h61w5, 'encoding': kasjr, 'success': function (abrjgk) {
          if (h61w5['indexOf']('http://') != -0x1 || h61w5['indexOf']('https://') != -0x1) xeyq_0['onFileUpdate'](h61w5, xo0q);_exq0 != null && _exq0['runWith']([0x0, abrjgk]);
        }, 'fail': function (n683) {
          if (n683) _exq0 != null && _exq0['runWith']([0x1, n683]);
        } });
    }, xeyq_0['downImg'] = function (dpi$v9, rn3gbj, ct294) {
      ct294 === void 0x0 && (ct294 = '');var _q0x = xeyq_0['wxdown']({ 'url': dpi$v9, 'success': function (qz7o0) {
          qz7o0['statusCode'] === 0xc8 && xeyq_0['copyFile'](qz7o0['tempFilePath'], ct294, rn3gbj);
        }, 'fail': function (jgn3r) {
          rn3gbj != null && rn3gbj['runWith']([0x1, jgn3r]);
        } });
    }, xeyq_0['copyFile'] = function (pvd$i, bgajn, efpoz7) {
      var e0oqy = pvd$i['split']('/'),
          rg18n3 = e0oqy[e0oqy['length'] - 0x1],
          ci29t4 = bgajn['split']('?')[0x0],
          zodpf7 = xeyq_0['getFileInfo'](bgajn),
          y0qeo = xeyq_0['getFileNativePath'](rg18n3);xeyq_0['fs']['copyFile']({ 'srcPath': pvd$i, 'destPath': y0qeo, 'success': function (asrk) {
          if (!zodpf7) xeyq_0['onSaveFile'](bgajn, rg18n3), efpoz7 != null && efpoz7['runWith']([0x0]);else {
            if (zodpf7['readyUrl'] != bgajn) xeyq_0['remove'](rg18n3, bgajn, efpoz7);
          }
        }, 'fail': function (w5_6mh) {
          efpoz7 != null && efpoz7['runWith']([0x1, w5_6mh]);
        } });
    }, xeyq_0['getFileNativePath'] = function (pd9i) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + pd9i;
    }, xeyq_0['remove'] = function (r1gn8, xo0yqe, n8153) {
      xo0yqe === void 0x0 && (xo0yqe = '');var t$i9cv = xeyq_0['getFileInfo'](xo0yqe),
          f7dozp = xeyq_0['getFileNativePath'](t$i9cv['md5']);kgjrba['loader']['clearRes'](t$i9cv['readyUrl']), xeyq_0['fs']['unlink']({ 'filePath': f7dozp, 'success': function (i2clt) {
          if (xo0yqe != '') xeyq_0['onSaveFile'](xo0yqe, r1gn8);n8153 != null && n8153['runWith']([0x0]);
        }, 'fail': function (yx0hm_) {} });
    }, xeyq_0['onSaveFile'] = function (sujba, q_0yxm) {
      var x_hm = sujba['split']('?')[0x0];xeyq_0['filesListObj'][x_hm] = { 'md5': q_0yxm, 'readyUrl': sujba }, xeyq_0['fs']['writeFile']({ 'filePath': xeyq_0['fileNativeDir'] + '/' + xeyq_0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xeyq_0['filesListObj']), 'success': function (i9v) {
          console['log']('写入测试测试成功：', i9v);
        }, 'fail': function (jagkbr) {
          console['log']('写入测试测试失败：', jagkbr);
        } });
    }, xeyq_0['existDir'] = function (fod7p, g831nr) {
      xeyq_0['fs']['mkdir']({ 'dirPath': fod7p, 'success': function ($vpdfz) {
          g831nr != null && g831nr['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (eo7fzq) {
          if (eo7fzq['errMsg']['indexOf']('file already exists') != -0x1) xeyq_0['readSync'](xeyq_0['fileListName'], 'utf8', g831nr);else g831nr != null && g831nr['runWith']([0x1, eo7fzq]);
        } });
    }, xeyq_0['readSync'] = function (vdzp, vcti29, rjbga, argbk) {
      vcti29 === void 0x0 && (vcti29 = 'ascill'), argbk === void 0x0 && (argbk = '');var vic$t9 = xeyq_0['getFileNativePath'](vdzp),
          brakjs;try {
        brakjs = xeyq_0['fs']['readFileSync'](vic$t9), rjbga != null && rjbga['runWith']([0x0, { 'data': brakjs }]);
      } catch (bskjau) {
        rjbga != null && rjbga['runWith']([0x1]);
      }
    }, xeyq_0['readCache'] = function () {}, xeyq_0['writeCache'] = function (e7fo) {
      var xyqe_ = readyUrl['split']('?')[0x0];xeyq_0['filesListObj'][xyqe_] = { 'md5': md5Name, 'readyUrl': readyUrl }, xeyq_0['fs']['writeFile']({ 'filePath': xeyq_0['fileNativeDir'] + '/' + xeyq_0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xeyq_0['filesListObj']), 'success': function (zf7opd) {}, 'fail': function (xq_0ey) {} });
    }, xeyq_0['setNativeFileDir'] = function (rj3gn8) {
      xeyq_0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rj3gn8;
    }, xeyq_0['filesListObj'] = {}, xeyq_0['fileNativeDir'] = null, xeyq_0['fileListName'] = 'layaairfiles.txt', xeyq_0['ziyuFileData'] = {}, dpfz7$(xeyq_0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), xeyq_0;
  }(n8561),
      bsjkra = function (branj) {
    function ye_q() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ye_q['__super']['call'](this), this['_sound'] = ye_q['_createSound']();
    }t9i2vc(ye_q, 'laya.wx.mini.MiniSound', branj);var bkgajr = ye_q['prototype'];return bkgajr['load'] = function (oey0xq) {
      var z7epf = this;oey0xq = m_5h6w['formatURL'](oey0xq), this['url'] = oey0xq;if (ye_q['_audioCache'][oey0xq]) {
        this['event']('complete');return;
      }function _yw5hm() {
        if (ye_q['_null'] != undefined) z7epf['_sound']['onCanplay'](ye_q['_null']), z7epf['_sound']['onError'](ye_q['_null']);else try {
          z7epf['_sound']['onCanplay'](null), z7epf['_sound']['onError'](null), ye_q['_null'] = null;
        } catch (mwh5_y) {
          console['warn']('[wxmini] _clearSound:' + mwh5_y), z7epf['_sound']['onCanplay'](e0q_y), z7epf['_sound']['onError'](e0q_y), ye_q['_null'] = e0q_y;
        }
      }function idv$c() {
        _yw5hm(), fpd9['loaded'] = !![], fpd9['event']('complete'), ye_q['_audioCache'][fpd9['url']] = fpd9;
      }function q7oex0(r3nj8) {
        console['error']('errCode=' + r3nj8['errCode'] + '  errMsg=' + r3nj8['errMsg']), _yw5hm(), fpd9['event']('error');
      }function e0q_y() {}this['_sound']['onCanplay'](idv$c), this['_sound']['onError'](q7oex0), this['_sound']['src'] = oey0xq;var fpd9 = this;
    }, bkgajr['play'] = function (g8nr13, rgn183) {
      g8nr13 === void 0x0 && (g8nr13 = 0x0), rgn183 === void 0x0 && (rgn183 = 0x0);var agkrb;if (this['url'] == ci2l4t['_tMusic']) {
        if (!ye_q['_musicAudio']) ye_q['_musicAudio'] = ye_q['_createSound']();agkrb = ye_q['_musicAudio'];
      } else agkrb = ye_q['_createSound']();agkrb['src'] = this['url'];var ym_qx = new hyw_m(agkrb);return ym_qx['url'] = this['url'], ym_qx['loops'] = rgn183, ym_qx['startTime'] = g8nr13, ym_qx['play'](), ci2l4t['addChannel'](ym_qx), ym_qx;
    }, bkgajr['dispose'] = function () {
      var hw_5m6 = ye_q['_audioCache'][this['url']];hw_5m6 && (hw_5m6['src'] = '', delete ye_q['_audioCache'][this['url']]);
    }, dvp9i(0x0, bkgajr, 'duration', function () {
      return this['_sound']['duration'];
    }), ye_q['_createSound'] = function () {
      return ye_q['_id']++, nabrjg['window']['wx']['createInnerAudioContext']();
    }, ye_q['_musicAudio'] = null, ye_q['_id'] = 0x0, ye_q['_audioCache'] = {}, ye_q['_null'] = undefined, ye_q;
  }(n8561),
      hyw_m = function (p$fdz7) {
    function ng3brj(xhm_w) {
      this['_audio'] = null, this['_onEnd'] = null, ng3brj['__super']['call'](this), this['_audio'] = xhm_w, this['_onEnd'] = gbrna['bind'](this['__onEnd'], this), xhm_w['onEnded'](this['_onEnd']);
    }t9i2vc(ng3brj, 'laya.wx.mini.MiniSoundChannel', p$fdz7);var m_y0h = ng3brj['prototype'];return m_y0h['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (kgjrba['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, m_y0h['__onNull'] = function () {}, m_y0h['play'] = function () {
      this['isStopped'] = ![], ci2l4t['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, m_y0h['stop'] = function () {
      this['isStopped'] = !![], ci2l4t['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ng3brj['_null'] != undefined) this['_audio']['onEnded'](ng3brj['_null']);else try {
        this['_audio']['onEnded'](null), ng3brj['_null'] = null;
      } catch (mx0yq_) {
        console['warn']('[wxmini] stop:' + mx0yq_), this['_audio']['onEnded'](gbrna['bind'](this['__onNull'], this)), ng3brj['_null'] = gbrna['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, m_y0h['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, m_y0h['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ci2l4t['addChannel'](this), this['_audio']['play']();
    }, dvp9i(0x0, m_y0h, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), dvp9i(0x0, m_y0h, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), dvp9i(0x0, m_y0h, 'volume', function () {
      return 0x1;
    }, function (wh681) {}), ng3brj['_null'] = undefined, ng3brj;
  }(p7fz);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var zpoe in Laya) {
    var pdv9f = Laya[zpoe];pdv9f && pdv9f['__isclass'] && (exports[zpoe] = pdv9f);
  }
});