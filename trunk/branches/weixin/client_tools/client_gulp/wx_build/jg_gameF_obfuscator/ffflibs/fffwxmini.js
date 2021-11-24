var k = wx.$f;
(function (window, document, vmbfiu) {
  var k405q_ = vmbfiu['un'],
      vbu1g = vmbfiu['uns'],
      $3y7r = vmbfiu['static'],
      h0k5 = vmbfiu['class'],
      snwex = vmbfiu['getset'],
      jcosw = vmbfiu['__newvec'],
      oj62cd = laya['utils']['Browser'],
      jdwosc = laya['events']['Event'],
      ft0q5 = laya['events']['EventDispatcher'],
      hbitfm = laya['resource']['HTMLImage'],
      c4jo6 = laya['utils']['Handler'],
      f0qm = laya['display']['Input'],
      p$37a = laya['net']['Loader'],
      kh5_q = laya['maths']['Matrix'],
      xwnjd = laya['renders']['Render'],
      r387$z = laya['utils']['RunDriver'],
      vb91g = laya['media']['Sound'],
      $3ay = laya['media']['SoundChannel'],
      xdnews = laya['media']['SoundManager'],
      odwsj = laya['display']['Stage'],
      xnr8 = laya['net']['URL'],
      zn8er = laya['utils']['Utils'],
      uv91ib = function () {
    function ko2_() {}return h0k5(ko2_, 'laya.wx.mini.MiniAdpter'), ko2_['getJson'] = function (fhm0ti) {
      return JSON['parse'](fhm0ti);
    }, ko2_['init'] = function (co6_24, dwcjns) {
      co6_24 === void 0x0 && (co6_24 = ![]), dwcjns === void 0x0 && (dwcjns = ![]);if (ko2_['_inited']) return;ko2_['window'] = window;if (ko2_['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ko2_['_inited'] = !![], ko2_['isZiYu'] = dwcjns, ko2_['isPosMsgYu'] = co6_24, ko2_['EnvConfig'] = {}, !ko2_['isZiYu'] && (e78zr['setNativeFileDir']('/layaairGame'), e78zr['existDir'](e78zr['fileNativeDir'], c4jo6['create'](ko2_, ko2_['onMkdirCallBack']))), ko2_['window']['focus'] = function () {}, vmbfiu['getUrlPath'] = function () {}, ko2_['window']['logtime'] = function (bu91) {}, ko2_['window']['alertTimeLog'] = function (scnjwd) {}, ko2_['window']['resetShareInfo'] = function () {}, ko2_['window']['CanvasRenderingContext2D'] = function () {}, ko2_['window']['CanvasRenderingContext2D']['prototype'] = ko2_['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ko2_['window']['document']['body']['appendChild'] = function () {}, ko2_['EnvConfig']['pixelRatioInt'] = 0x0, r387$z['getPixelRatio'] = ko2_['pixelRatio'], ko2_['_preCreateElement'] = oj62cd['createElement'], oj62cd['createElement'] = ko2_['createElement'], r387$z['createShaderCondition'] = ko2_['createShaderCondition'], zn8er['parseXMLFromString'] = ko2_['parseXMLFromString'], f0qm['_createInputElement'] = muiv1b['_createInputElement'], ko2_['EnvConfig']['load'] = p$37a['prototype']['load'], p$37a['prototype']['load'] = h0tfq['prototype']['load'], ko2_['isZiYu'] && co6_24 && wx['onMessage'](function (h0qfm) {
        h0qfm['isLoad'] && (e78zr['ziyuFileData'][h0qfm['url']] = h0qfm['data']);
      });
    }, ko2_['onMkdirCallBack'] = function (uifbmv, re8z$7) {
      if (!uifbmv) e78zr['filesListObj'] = JSON['parse'](re8z$7['data']);
    }, ko2_['pixelRatio'] = function () {
      if (!ko2_['EnvConfig']['pixelRatioInt']) try {
        var enwz8 = wx['getSystemInfoSync']();return ko2_['EnvConfig']['pixelRatioInt'] = enwz8['pixelRatio'], enwz8 = enwz8, enwz8['pixelRatio'];
      } catch (zr8$) {}return ko2_['EnvConfig']['pixelRatioInt'];
    }, ko2_['createElement'] = function (o2cjd6) {
      if (o2cjd6 == 'canvas') {
        var cdojws;return ko2_['idx'] == 0x1 ? ko2_['isZiYu'] ? (cdojws = sharedCanvas, cdojws['style'] = {}) : cdojws = window['canvas'] : cdojws = window['wx']['createCanvas'](), ko2_['idx']++, cdojws;
      } else {
        if (o2cjd6 == 'textarea' || o2cjd6 == 'input') return ko2_['onCreateInput'](o2cjd6);else {
          if (o2cjd6 == 'div') {
            var rz8e7x = ko2_['_preCreateElement'](o2cjd6);return rz8e7x['contains'] = function (sxnwze) {
              return null;
            }, rz8e7x['removeChild'] = function (vb19i) {}, rz8e7x;
          } else return ko2_['_preCreateElement'](o2cjd6);
        }
      }
    }, ko2_['onCreateInput'] = function (t0k5qh) {
      var $7r8ez = ko2_['_preCreateElement'](t0k5qh);return $7r8ez['focus'] = muiv1b['wxinputFocus'], $7r8ez['blur'] = muiv1b['wxinputblur'], $7r8ez['style'] = {}, $7r8ez['value'] = 0x0, $7r8ez['parentElement'] = {}, $7r8ez['placeholder'] = {}, $7r8ez['type'] = {}, $7r8ez['setColor'] = function (xwsj) {}, $7r8ez['setType'] = function (qt0hk5) {}, $7r8ez['setFontFace'] = function (o6cdj) {}, $7r8ez['addEventListener'] = function (hqt0f5) {}, $7r8ez['contains'] = function (r$7z83) {
        return null;
      }, $7r8ez['removeChild'] = function (r83y7) {}, $7r8ez;
    }, ko2_['createShaderCondition'] = function (s6djo) {
      var t05qfh = this,
          ry7$3 = function () {
        var j2o4c = s6djo;return t05qfh[s6djo['replace']('this.', '')];
      };return ry7$3;
    }, ko2_['EnvConfig'] = null, ko2_['window'] = null, ko2_['_preCreateElement'] = null, ko2_['_inited'] = ![], ko2_['wxRequest'] = null, ko2_['systemInfo'] = null, ko2_['version'] = '0.0.1', ko2_['isZiYu'] = ![], ko2_['isPosMsgYu'] = ![], ko2_['parseXMLFromString'] = function (t0q5) {
      var swndxe, r7xez8;t0q5 = t0q5['replace'](/>\s+</g, '><');try {
        swndxe = new window['Parser']['DOMParser']()['parseFromString'](t0q5, 'text/xml');
      } catch (e7rzx) {
        throw '需要引入xml解析库文件';
      }return swndxe;
    }, ko2_['idx'] = 0x1, ko2_;
  }(),
      vb1umi = function () {
    function wznxe() {}h0k5(wznxe, 'laya.wx.mini.MiniImage');var mv1biu = wznxe['prototype'];return mv1biu['_loadImage'] = function (fhib) {
      var q_04k5 = this,
          r$3y7 = ![];fhib['indexOf']('layaNativeDir/') == -0x1 && (r$3y7 = !![], fhib = xnr8['formatURL'](fhib));if (!e78zr['getFileInfo'](fhib)) {
        if (fhib['indexOf']('http://') != -0x1 || fhib['indexOf']('https://') != -0x1) e78zr['downImg'](fhib, new c4jo6(wznxe, wznxe['onDownImgCallBack'], [fhib, q_04k5]), fhib);else wznxe['onCreateImage'](fhib, q_04k5, !![]);
      } else wznxe['onCreateImage'](fhib, q_04k5, !r$3y7);
    }, wznxe['onDownImgCallBack'] = function (ftvmib, qfmh, r$ze) {
      if (!r$ze) wznxe['onCreateImage'](ftvmib, qfmh);else qfmh['onError'](null);
    }, wznxe['onCreateImage'] = function (ithmf0, ifhmb, snx) {
      snx === void 0x0 && (snx = ![]);var snwcj;if (!snx) {
        var vfimu = e78zr['getFileInfo'](ithmf0),
            ry$a73 = vfimu['md5'];snwcj = e78zr['getFileNativePath'](ry$a73);
      } else snwcj = ithmf0;if (ifhmb['imgCache'] == null) ifhmb['imgCache'] = {};var fibhm;function jocsw() {
        fibhm['onload'] = null, fibhm['onerror'] = null, delete ifhmb['imgCache'][ithmf0];
      };var znes = function () {
        jocsw(), ifhmb['onLoaded'](fibhm);
      },
          c_o64 = function () {
        jocsw(), ifhmb['event']('error', 'Load image failed');
      };ifhmb['_type'] == 'nativeimage' ? (fibhm = new oj62cd['window']['Image'](), fibhm['crossOrigin'] = '', fibhm['onload'] = znes, fibhm['onerror'] = c_o64, fibhm['src'] = snwcj, ifhmb['imgCache'][ithmf0] = fibhm) : new hbitfm['create'](snwcj, { 'onload': znes, 'onerror': c_o64, 'onCreate': function (q_4) {
          fibhm = q_4, ifhmb['imgCache'][ithmf0] = q_4;
        } });
    }, wznxe;
  }(),
      muiv1b = function () {
    function mfhqt() {}return h0k5(mfhqt, 'laya.wx.mini.MiniInput'), mfhqt['_createInputElement'] = function () {
      f0qm['_initInput'](f0qm['area'] = oj62cd['createElement']('textarea')), f0qm['_initInput'](f0qm['input'] = oj62cd['createElement']('input')), f0qm['inputContainer'] = oj62cd['createElement']('div'), f0qm['inputContainer']['style']['position'] = 'absolute', f0qm['inputContainer']['style']['zIndex'] = 0x186a0, oj62cd['container']['appendChild'](f0qm['inputContainer']), f0qm['inputContainer']['setPos'] = function (sjcowd, fivtbm) {
        f0qm['inputContainer']['style']['left'] = sjcowd + 'px', f0qm['inputContainer']['style']['top'] = fivtbm + 'px';
      }, vmbfiu['stage']['on']('resize', null, mfhqt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (swcojd) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xdnews['_soundClass'] = enz8rx, xdnews['_musicClass'] = enz8rx;
    }, mfhqt['_onStageResize'] = function () {
      var z8re$ = vmbfiu['stage']['_canvasTransform']['identity']();z8re$['scale'](oj62cd['width'] / xwnjd['canvas']['width'] / r387$z['getPixelRatio'](), oj62cd['height'] / xwnjd['canvas']['height'] / r387$z['getPixelRatio']());
    }, mfhqt['wxinputFocus'] = function (ko462_) {
      var do62 = f0qm['inputElement']['target'];if (do62 && !do62['editable']) return;uv91ib['window']['wx']['offKeyboardConfirm'](), uv91ib['window']['wx']['offKeyboardInput'](), uv91ib['window']['wx']['showKeyboard']({ 'defaultValue': do62['text'], 'maxLength': do62['maxChars'], 'multiple': do62['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ocdj62) {}, 'fail': function (snjd) {} }), uv91ib['window']['wx']['onKeyboardConfirm'](function (y$ar7) {
        var nrex8z = y$ar7 ? y$ar7['value'] : '';do62['text'] = nrex8z, do62['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), uv91ib['window']['wx']['onKeyboardInput'](function (nxz8e) {
        var wjnsd = nxz8e ? nxz8e['value'] : '';if (!do62['multiline']) {
          if (wjnsd['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }do62['text'] = wjnsd, do62['event']('input');
      });
    }, mfhqt['inputEnter'] = function () {
      f0qm['inputElement']['target']['focus'] = ![];
    }, mfhqt['wxinputblur'] = function () {
      mfhqt['hideKeyboard']();
    }, mfhqt['hideKeyboard'] = function () {
      uv91ib['window']['wx']['offKeyboardConfirm'](), uv91ib['window']['wx']['offKeyboardInput'](), uv91ib['window']['wx']['hideKeyboard']({ 'success': function (e8z7xr) {
          console['log']('隐藏键盘');
        }, 'fail': function (dxesw) {
          console['log']('隐藏键盘出错:' + (dxesw ? dxesw['errMsg'] : ''));
        } });
    }, mfhqt;
  }(),
      h0tfq = function () {
    function ibh() {}h0k5(ibh, 'laya.wx.mini.MiniLoader');var dwsnxe = ibh['prototype'];return dwsnxe['load'] = function (tqh5k0, imvfbu, zre8x, bthifm, exz87) {
      zre8x === void 0x0 && (zre8x = !![]), exz87 === void 0x0 && (exz87 = ![]);var _4k52q = this;_4k52q['_url'] = tqh5k0;if (tqh5k0['indexOf']('data:image') === 0x0) _4k52q['_type'] = imvfbu = 'image';else _4k52q['_type'] = imvfbu || (imvfbu = _4k52q['getTypeFromUrl'](tqh5k0));_4k52q['_cache'] = zre8x, _4k52q['_data'] = null;var ih0f = 'ascii';if (tqh5k0['indexOf']('.fnt') != -0x1) ih0f = 'utf8';else imvfbu == 'arraybuffer' && (ih0f = '');;var y$7a3p = zn8er['getFileExtension'](tqh5k0);if (ibh['_fileTypeArr']['indexOf'](y$7a3p) != -0x1) uv91ib['EnvConfig']['load']['call'](this, tqh5k0, imvfbu, zre8x, bthifm, exz87);else {
        if (!e78zr['getFileInfo'](tqh5k0)) {
          if (tqh5k0['indexOf']('layaNativeDir/') != -0x1) {
            if (uv91ib['isZiYu']) {
              var tbmfvi = e78zr['ziyuFileData'][tqh5k0];_4k52q['onLoaded'](tbmfvi);return;
            } else {
              cosnole['log']('read read'), e78zr['read'](tqh5k0, ih0f, new c4jo6(ibh, ibh['onReadNativeCallBack'], [ih0f, tqh5k0, imvfbu, zre8x, bthifm, exz87, _4k52q]));return;
            }
          }if (xnr8['rootPath'] == '') var i19bvu = tqh5k0;else i19bvu = tqh5k0['split'](xnr8['rootPath'])[0x0];tqh5k0['indexOf']('http://') != -0x1 || tqh5k0['indexOf']('https://') != -0x1 ? uv91ib['EnvConfig']['load']['call'](_4k52q, tqh5k0, imvfbu, zre8x, bthifm, exz87) : e78zr['readFile'](i19bvu, ih0f, new c4jo6(ibh, ibh['onReadNativeCallBack'], [ih0f, tqh5k0, imvfbu, zre8x, bthifm, exz87, _4k52q]), tqh5k0);
        } else uv91ib['EnvConfig']['load']['call'](this, tqh5k0, imvfbu, zre8x, bthifm, exz87);
      }
    }, dwsnxe['resMgrLoad'] = function (_62k, swne, rexz8n, c6oj2, r78y3, _6oc42, c642_) {
      rexz8n === void 0x0 && (rexz8n = 0x0), c6oj2 === void 0x0 && (c6oj2 = ![]), r78y3 === void 0x0 && (r78y3 = ![]), _6oc42 === void 0x0 && (_6oc42 = 0x0), c642_ === void 0x0 && (c642_ = 0x3), _62k['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _62k), uv91ib['EnvConfig']['resMgrLoad'](_62k, (mfuibv, wcsdjo, co6sj) => {
        ibh['prototype']['resMgrLoadCallBack'](mfuibv, wcsdjo, co6sj, swne);
      }, rexz8n, c6oj2, r78y3, _6oc42, c642_);
    }, dwsnxe['resMgrLoadCallBack'] = function (xenws, e$8, miftbv, wzensx) {
      console['log']('buff:::', xenws, miftbv, e78zr['fileNativeDir'] + '///' + e78zr['fileListName']), wzensx(xenws, e$8, miftbv);
    }, dwsnxe['clearRes'] = function (q0kh5_, tvbifm) {
      tvbifm === void 0x0 && (tvbifm = ![]);var k40_ = this;k40_['clearRes'](q0kh5_, tvbifm);var mt0hf = e78zr['getFileInfo'](q0kh5_);if (mt0hf && (q0kh5_['indexOf']('http://') != -0x1 || q0kh5_['indexOf']('https://') != -0x1)) {
        var vifu = mt0hf['md5'],
            wsnjc = e78zr['getFileNativePath'](vifu);e78zr['remove'](wsnjc);
      }
    }, ibh['onReadNativeCallBack'] = function (jo6c2, xez8, h0t5qk, ypa$, zesnxw, $zr83, dxwsne, k4256, wszexn) {
      ypa$ === void 0x0 && (ypa$ = !![]), $zr83 === void 0x0 && ($zr83 = ![]), k4256 === void 0x0 && (k4256 = 0x0);if (!k4256) {
        var dswc;if (h0t5qk == 'json' || h0t5qk == 'atlas') dswc = uv91ib['getJson'](wszexn['data']);else h0t5qk == 'xml' ? dswc = zn8er['parseXMLFromString'](wszexn['data']) : dswc = wszexn['data'];dxwsne['onLoaded'](dswc), !uv91ib['isZiYu'] && uv91ib['isPosMsgYu'] && h0t5qk != 'arraybuffer' && wx['postMessage']({ 'url': xez8, 'data': dswc, 'isLoad': !![] });
      } else k4256 == 0x1 && uv91ib['EnvConfig']['load']['call'](dxwsne, xez8, h0t5qk, ypa$, zesnxw, $zr83);
    }, $3y7r(ibh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ibh;
  }(),
      e78zr = function (_q2k4) {
    function qkh5t() {
      qkh5t['__super']['call'](this);;
    }return h0k5(qkh5t, 'laya.wx.mini.MiniFileMgr', _q2k4), qkh5t['isLoadFile'] = function (mbihf) {
      return qkh5t['_fileTypeArr']['indexOf'](mbihf) != -0x1 ? !![] : ![];
    }, qkh5t['getFileInfo'] = function (ftihmb) {
      var e8zx7r = ftihmb['split']('?')[0x0],
          iv9ub = qkh5t['filesListObj'][e8zx7r];if (iv9ub == null) return null;else return iv9ub;return null;
    }, qkh5t['onFileUpdate'] = function (mhit0, mbiv) {
      var vbimf = mhit0['split']('/'),
          r83$7z = vbimf[vbimf['length'] - 0x1],
          jnwdsx = qkh5t['getFileInfo'](mbiv);if (jnwdsx == null) qkh5t['onSaveFile'](mbiv, r83$7z);else {
        if (jnwdsx['readyUrl'] != mbiv) qkh5t['remove'](r83$7z, mbiv);
      }
    }, qkh5t['exits'] = function (fmvubi, zxwe8n) {
      var cdoj6s = qkh5t['getFileNativePath'](fmvubi);qkh5t['fs']['getFileInfo']({ 'filePath': cdoj6s, 'success': function (er78$) {
          zxwe8n != null && zxwe8n['runWith']([0x0, er78$]);
        }, 'fail': function (thqmf0) {
          zxwe8n != null && zxwe8n['runWith']([0x1, thqmf0]);
        } });
    }, qkh5t['read'] = function (mfvt, _k2q45, zx7er8, v1ui9) {
      _k2q45 === void 0x0 && (_k2q45 = 'ascill'), v1ui9 === void 0x0 && (v1ui9 = '');var xnzre8;v1ui9 != '' ? xnzre8 = qkh5t['getFileNativePath'](mfvt) : xnzre8 = mfvt, qkh5t['fs']['readFile']({ 'filePath': xnzre8, 'encoding': _k2q45, 'success': function (bum1v) {
          zx7er8 != null && zx7er8['runWith']([0x0, bum1v]);
        }, 'fail': function (jodcs) {
          if (jodcs && v1ui9 != '') qkh5t['down'](v1ui9, _k2q45, zx7er8, v1ui9);else zx7er8 != null && zx7er8['runWith']([0x1]);
        } });
    }, qkh5t['readNativeFile'] = function (q5ht, x7re8) {
      qkh5t['fs']['readFile']({ 'filePath': q5ht, 'encoding': '', 'success': function (q0tmfh) {
          x7re8 != null && x7re8['runWith']([0x0]);
        }, 'fail': function (cdo2j) {
          x7re8 != null && x7re8['runWith']([0x1]);
        } });
    }, qkh5t['down'] = function (u9v1i, itmbv, wdjsnx, oscwdj) {
      itmbv === void 0x0 && (itmbv = 'ascill'), oscwdj === void 0x0 && (oscwdj = '');var thq0f5 = qkh5t['getFileNativePath'](oscwdj),
          bmfivu = qkh5t['wxdown']({ 'url': u9v1i, 'filePath': thq0f5, 'success': function ($z8r73) {
          if ($z8r73['statusCode'] === 0xc8) qkh5t['readFile']($z8r73['filePath'], itmbv, wdjsnx, oscwdj);
        }, 'fail': function (r8ez$) {
          wdjsnx != null && wdjsnx['runWith']([0x1, r8ez$]);
        } });bmfivu['onProgressUpdate'](function (snwez) {
        wdjsnx != null && wdjsnx['runWith']([0x2, snwez['progress']]);
      });
    }, qkh5t['readFile'] = function (qh50k_, xz7r, c26, $7ya3r) {
      xz7r === void 0x0 && (xz7r = 'ascill'), $7ya3r === void 0x0 && ($7ya3r = ''), qkh5t['fs']['readFile']({ 'filePath': qh50k_, 'encoding': xz7r, 'success': function (hkq0t5) {
          if (qh50k_['indexOf']('http://') != -0x1 || qh50k_['indexOf']('https://') != -0x1) qkh5t['onFileUpdate'](qh50k_, $7ya3r);c26 != null && c26['runWith']([0x0, hkq0t5]);
        }, 'fail': function (gbv19) {
          if (gbv19) c26 != null && c26['runWith']([0x1, gbv19]);
        } });
    }, qkh5t['downImg'] = function (z7er, mith0f, bumf) {
      bumf === void 0x0 && (bumf = '');var bivtmf = qkh5t['wxdown']({ 'url': z7er, 'success': function (q2k5_) {
          q2k5_['statusCode'] === 0xc8 && qkh5t['copyFile'](q2k5_['tempFilePath'], bumf, mith0f);
        }, 'fail': function (qt50hf) {
          mith0f != null && mith0f['runWith']([0x1, qt50hf]);
        } });
    }, qkh5t['copyFile'] = function (scdwjn, _hk0q, ftq0h5) {
      var nwdcsj = scdwjn['split']('/'),
          ub1g9 = nwdcsj[nwdcsj['length'] - 0x1],
          bm1i = _hk0q['split']('?')[0x0],
          t50kqh = qkh5t['getFileInfo'](_hk0q),
          nsxwze = qkh5t['getFileNativePath'](ub1g9);qkh5t['fs']['copyFile']({ 'srcPath': scdwjn, 'destPath': nsxwze, 'success': function (_h05k) {
          if (!t50kqh) qkh5t['onSaveFile'](_hk0q, ub1g9), ftq0h5 != null && ftq0h5['runWith']([0x0]);else {
            if (t50kqh['readyUrl'] != _hk0q) qkh5t['remove'](ub1g9, _hk0q, ftq0h5);
          }
        }, 'fail': function (ftiv) {
          ftq0h5 != null && ftq0h5['runWith']([0x1, ftiv]);
        } });
    }, qkh5t['getFileNativePath'] = function (c2_o64) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + c2_o64;
    }, qkh5t['remove'] = function (c246jo, wdens, _k526) {
      wdens === void 0x0 && (wdens = '');var nwjxd = qkh5t['getFileInfo'](wdens),
          fbiv = qkh5t['getFileNativePath'](nwjxd['md5']);vmbfiu['loader']['clearRes'](nwjxd['readyUrl']), qkh5t['fs']['unlink']({ 'filePath': fbiv, 'success': function (re8nxz) {
          if (wdens != '') qkh5t['onSaveFile'](wdens, c246jo);_k526 != null && _k526['runWith']([0x0]);
        }, 'fail': function (v1bi9) {} });
    }, qkh5t['onSaveFile'] = function (oc_246, er8$7z) {
      var cj2 = oc_246['split']('?')[0x0];qkh5t['filesListObj'][cj2] = { 'md5': er8$7z, 'readyUrl': oc_246 }, qkh5t['fs']['writeFile']({ 'filePath': qkh5t['fileNativeDir'] + '/' + qkh5t['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qkh5t['filesListObj']), 'success': function (k4_265) {
          console['log']('写入测试测试成功：', k4_265);
        }, 'fail': function (dxjwsn) {
          console['log']('写入测试测试失败：', dxjwsn);
        } });
    }, qkh5t['existDir'] = function (dsc6o, xwns) {
      qkh5t['fs']['mkdir']({ 'dirPath': dsc6o, 'success': function (z3r$78) {
          xwns != null && xwns['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (t5fh0q) {
          if (t5fh0q['errMsg']['indexOf']('file already exists') != -0x1) qkh5t['readSync'](qkh5t['fileListName'], 'utf8', xwns);else xwns != null && xwns['runWith']([0x1, t5fh0q]);
        } });
    }, qkh5t['readSync'] = function (j462oc, ko4_6, wjdx, ifmb) {
      ko4_6 === void 0x0 && (ko4_6 = 'ascill'), ifmb === void 0x0 && (ifmb = '');var hfmbi = qkh5t['getFileNativePath'](j462oc),
          mhtf0i;try {
        mhtf0i = qkh5t['fs']['readFileSync'](hfmbi), wjdx != null && wjdx['runWith']([0x0, { 'data': mhtf0i }]);
      } catch (n8) {
        wjdx != null && wjdx['runWith']([0x1]);
      }
    }, qkh5t['readCache'] = function () {}, qkh5t['writeCache'] = function (z78r3$) {
      var xesnd = readyUrl['split']('?')[0x0];qkh5t['filesListObj'][xesnd] = { 'md5': md5Name, 'readyUrl': readyUrl }, qkh5t['fs']['writeFile']({ 'filePath': qkh5t['fileNativeDir'] + '/' + qkh5t['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qkh5t['filesListObj']), 'success': function (wdojs) {}, 'fail': function (w8ezxn) {} });
    }, qkh5t['setNativeFileDir'] = function (gb19vu) {
      qkh5t['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gb19vu;
    }, qkh5t['filesListObj'] = {}, qkh5t['fileNativeDir'] = null, qkh5t['fileListName'] = 'layaairfiles.txt', qkh5t['ziyuFileData'] = {}, $3y7r(qkh5t, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qkh5t;
  }(ft0q5),
      enz8rx = function (fh0qt) {
    function wsxed() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], wsxed['__super']['call'](this), this['_sound'] = wsxed['_createSound']();
    }h0k5(wsxed, 'laya.wx.mini.MiniSound', fh0qt);var y$3a7 = wsxed['prototype'];return y$3a7['load'] = function (zxr78e) {
      var edxsw = this;zxr78e = xnr8['formatURL'](zxr78e), this['url'] = zxr78e;if (wsxed['_audioCache'][zxr78e]) {
        this['event']('complete');return;
      }function t0ifm() {
        if (wsxed['_null'] != undefined) edxsw['_sound']['onCanplay'](wsxed['_null']), edxsw['_sound']['onError'](wsxed['_null']);else try {
          edxsw['_sound']['onCanplay'](null), edxsw['_sound']['onError'](null), wsxed['_null'] = null;
        } catch (enx) {
          console['warn']('[wxmini] _clearSound:' + enx), edxsw['_sound']['onCanplay'](fqt0mh), edxsw['_sound']['onError'](fqt0mh), wsxed['_null'] = fqt0mh;
        }
      }function itvfbm() {
        t0ifm(), ftivb['loaded'] = !![], ftivb['event']('complete'), wsxed['_audioCache'][ftivb['url']] = ftivb;
      }function q50hkt(timbv) {
        console['error']('errCode=' + timbv['errCode'] + '  errMsg=' + timbv['errMsg']), t0ifm(), ftivb['event']('error');
      }function fqt0mh() {}this['_sound']['onCanplay'](itvfbm), this['_sound']['onError'](q50hkt), this['_sound']['src'] = zxr78e;var ftivb = this;
    }, y$3a7['play'] = function (bfimt, djnsw) {
      bfimt === void 0x0 && (bfimt = 0x0), djnsw === void 0x0 && (djnsw = 0x0);var t0fqh;if (this['url'] == xdnews['_tMusic']) {
        if (!wsxed['_musicAudio']) wsxed['_musicAudio'] = wsxed['_createSound']();t0fqh = wsxed['_musicAudio'];
      } else t0fqh = wsxed['_createSound']();t0fqh['src'] = this['url'];var dwnsex = new jdwco(t0fqh);return dwnsex['url'] = this['url'], dwnsex['loops'] = djnsw, dwnsex['startTime'] = bfimt, dwnsex['play'](), xdnews['addChannel'](dwnsex), dwnsex;
    }, y$3a7['dispose'] = function () {
      var mfubv = wsxed['_audioCache'][this['url']];mfubv && (mfubv['src'] = '', delete wsxed['_audioCache'][this['url']]);
    }, snwex(0x0, y$3a7, 'duration', function () {
      return this['_sound']['duration'];
    }), wsxed['_createSound'] = function () {
      return wsxed['_id']++, uv91ib['window']['wx']['createInnerAudioContext']();
    }, wsxed['_musicAudio'] = null, wsxed['_id'] = 0x0, wsxed['_audioCache'] = {}, wsxed['_null'] = undefined, wsxed;
  }(ft0q5),
      jdwco = function (imft) {
    function z37r$8(csd6j) {
      this['_audio'] = null, this['_onEnd'] = null, z37r$8['__super']['call'](this), this['_audio'] = csd6j, this['_onEnd'] = zn8er['bind'](this['__onEnd'], this), csd6j['onEnded'](this['_onEnd']);
    }h0k5(z37r$8, 'laya.wx.mini.MiniSoundChannel', imft);var njsdx = z37r$8['prototype'];return njsdx['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (vmbfiu['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, njsdx['__onNull'] = function () {}, njsdx['play'] = function () {
      this['isStopped'] = ![], xdnews['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, njsdx['stop'] = function () {
      this['isStopped'] = !![], xdnews['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (z37r$8['_null'] != undefined) this['_audio']['onEnded'](z37r$8['_null']);else try {
        this['_audio']['onEnded'](null), z37r$8['_null'] = null;
      } catch (gvb1u9) {
        console['warn']('[wxmini] stop:' + gvb1u9), this['_audio']['onEnded'](zn8er['bind'](this['__onNull'], this)), z37r$8['_null'] = zn8er['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, njsdx['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, njsdx['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xdnews['addChannel'](this), this['_audio']['play']();
    }, snwex(0x0, njsdx, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), snwex(0x0, njsdx, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), snwex(0x0, njsdx, 'volume', function () {
      return 0x1;
    }, function (cj6do2) {}), z37r$8['_null'] = undefined, z37r$8;
  }($3ay);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var h5f in Laya) {
    var dsjxw = Laya[h5f];dsjxw && dsjxw['__isclass'] && (exports[h5f] = dsjxw);
  }
});