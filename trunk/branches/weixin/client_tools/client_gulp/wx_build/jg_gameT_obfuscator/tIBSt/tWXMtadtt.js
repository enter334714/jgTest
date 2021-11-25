var M = wx.$T;
(function (window, document, tvc$i) {
  var g1nr3 = tvc$i['un'],
      abkrs = tvc$i['uns'],
      wh6 = tvc$i['static'],
      ivd$c = tvc$i['class'],
      g13n86 = tvc$i['getset'],
      n615 = tvc$i['__newvec'],
      z7oqef = laya['utils']['Browser'],
      fzdpo = laya['events']['Event'],
      d$pz7f = laya['events']['EventDispatcher'],
      d$pfz = laya['resource']['HTMLImage'],
      abrgjk = laya['utils']['Handler'],
      pzf = laya['display']['Input'],
      h_5m = laya['net']['Loader'],
      gj38 = laya['maths']['Matrix'],
      akrb = laya['renders']['Render'],
      t4icl2 = laya['utils']['RunDriver'],
      fdvpz$ = laya['media']['Sound'],
      garkb = laya['media']['SoundChannel'],
      fezo7 = laya['media']['SoundManager'],
      oq7e0x = laya['display']['Stage'],
      m_5ywh = laya['net']['URL'],
      rgba = laya['utils']['Utils'],
      r381 = function () {
    function kjrgba() {}return ivd$c(kjrgba, 'laya.wx.mini.MiniAdpter'), kjrgba['getJson'] = function (ci42) {
      return JSON['parse'](ci42);
    }, kjrgba['init'] = function (qez70, jrsbk) {
      qez70 === void 0x0 && (qez70 = ![]), jrsbk === void 0x0 && (jrsbk = ![]);if (kjrgba['_inited']) return;kjrgba['window'] = window;if (kjrgba['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;kjrgba['_inited'] = !![], kjrgba['isZiYu'] = jrsbk, kjrgba['isPosMsgYu'] = qez70, kjrgba['EnvConfig'] = {}, !kjrgba['isZiYu'] && (cvt9['setNativeFileDir']('/layaairGame'), cvt9['existDir'](cvt9['fileNativeDir'], abrgjk['create'](kjrgba, kjrgba['onMkdirCallBack']))), kjrgba['window']['focus'] = function () {}, tvc$i['getUrlPath'] = function () {}, kjrgba['window']['logtime'] = function (ci9t2v) {}, kjrgba['window']['alertTimeLog'] = function (abgk) {}, kjrgba['window']['resetShareInfo'] = function () {}, kjrgba['window']['CanvasRenderingContext2D'] = function () {}, kjrgba['window']['CanvasRenderingContext2D']['prototype'] = kjrgba['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], kjrgba['window']['document']['body']['appendChild'] = function () {}, kjrgba['EnvConfig']['pixelRatioInt'] = 0x0, t4icl2['getPixelRatio'] = kjrgba['pixelRatio'], kjrgba['_preCreateElement'] = z7oqef['createElement'], z7oqef['createElement'] = kjrgba['createElement'], t4icl2['createShaderCondition'] = kjrgba['createShaderCondition'], rgba['parseXMLFromString'] = kjrgba['parseXMLFromString'], pzf['_createInputElement'] = _myh5w['_createInputElement'], kjrgba['EnvConfig']['load'] = h_5m['prototype']['load'], h_5m['prototype']['load'] = f$p7zd['prototype']['load'], kjrgba['isZiYu'] && qez70 && wx['onMessage'](function (fv9p$d) {
        fv9p$d['isLoad'] && (cvt9['ziyuFileData'][fv9p$d['url']] = fv9p$d['data']);
      });
    }, kjrgba['onMkdirCallBack'] = function (_w56mh, b3rjg) {
      if (!_w56mh) cvt9['filesListObj'] = JSON['parse'](b3rjg['data']);
    }, kjrgba['pixelRatio'] = function () {
      if (!kjrgba['EnvConfig']['pixelRatioInt']) try {
        var rkj = wx['getSystemInfoSync']();return kjrgba['EnvConfig']['pixelRatioInt'] = rkj['pixelRatio'], rkj = rkj, rkj['pixelRatio'];
      } catch (j3rbg) {}return kjrgba['EnvConfig']['pixelRatioInt'];
    }, kjrgba['createElement'] = function (efz7qo) {
      if (efz7qo == 'canvas') {
        var _eq0yx;return kjrgba['idx'] == 0x1 ? kjrgba['isZiYu'] ? (_eq0yx = sharedCanvas, _eq0yx['style'] = {}) : _eq0yx = window['canvas'] : _eq0yx = window['wx']['createCanvas'](), kjrgba['idx']++, _eq0yx;
      } else {
        if (efz7qo == 'textarea' || efz7qo == 'input') return kjrgba['onCreateInput'](efz7qo);else {
          if (efz7qo == 'div') {
            var rn3gb = kjrgba['_preCreateElement'](efz7qo);return rn3gb['contains'] = function (_6hm5w) {
              return null;
            }, rn3gb['removeChild'] = function (h165) {}, rn3gb;
          } else return kjrgba['_preCreateElement'](efz7qo);
        }
      }
    }, kjrgba['onCreateInput'] = function (icd) {
      var my0_q = kjrgba['_preCreateElement'](icd);return my0_q['focus'] = _myh5w['wxinputFocus'], my0_q['blur'] = _myh5w['wxinputblur'], my0_q['style'] = {}, my0_q['value'] = 0x0, my0_q['parentElement'] = {}, my0_q['placeholder'] = {}, my0_q['type'] = {}, my0_q['setColor'] = function (jrksa) {}, my0_q['setType'] = function (ox7e) {}, my0_q['setFontFace'] = function (fe7opz) {}, my0_q['addEventListener'] = function (hy5wm) {}, my0_q['contains'] = function (w51h8) {
        return null;
      }, my0_q['removeChild'] = function (sajbk) {}, my0_q;
    }, kjrgba['createShaderCondition'] = function (q7e0x) {
      var tci249 = this,
          zo7q0 = function () {
        var h8516 = q7e0x;return tci249[q7e0x['replace']('this.', '')];
      };return zo7q0;
    }, kjrgba['EnvConfig'] = null, kjrgba['window'] = null, kjrgba['_preCreateElement'] = null, kjrgba['_inited'] = ![], kjrgba['wxRequest'] = null, kjrgba['systemInfo'] = null, kjrgba['version'] = '0.0.1', kjrgba['isZiYu'] = ![], kjrgba['isPosMsgYu'] = ![], kjrgba['parseXMLFromString'] = function (jbk) {
      var mxy_h0, fd9vp;jbk = jbk['replace'](/>\s+</g, '><');try {
        mxy_h0 = new window['Parser']['DOMParser']()['parseFromString'](jbk, 'text/xml');
      } catch (o7fpzd) {
        throw '需要引入xml解析库文件';
      }return mxy_h0;
    }, kjrgba['idx'] = 0x1, kjrgba;
  }(),
      pvd$9f = function () {
    function oxeq7() {}ivd$c(oxeq7, 'laya.wx.mini.MiniImage');var $fpv = oxeq7['prototype'];return $fpv['_loadImage'] = function (rgjan) {
      var poze = this,
          f7epo = ![];rgjan['indexOf']('layaNativeDir/') == -0x1 && (f7epo = !![], rgjan = m_5ywh['formatURL'](rgjan));if (!cvt9['getFileInfo'](rgjan)) {
        if (rgjan['indexOf']('http://') != -0x1 || rgjan['indexOf']('https://') != -0x1) cvt9['downImg'](rgjan, new abrgjk(oxeq7, oxeq7['onDownImgCallBack'], [rgjan, poze]), rgjan);else oxeq7['onCreateImage'](rgjan, poze, !![]);
      } else oxeq7['onCreateImage'](rgjan, poze, !f7epo);
    }, oxeq7['onDownImgCallBack'] = function (z7oq0e, pd$zf7, o7zeq0) {
      if (!o7zeq0) oxeq7['onCreateImage'](z7oq0e, pd$zf7);else pd$zf7['onError'](null);
    }, oxeq7['onCreateImage'] = function (dpfz$7, rngbj3, $7fzpd) {
      $7fzpd === void 0x0 && ($7fzpd = ![]);var tc94;if (!$7fzpd) {
        var e0oy = cvt9['getFileInfo'](dpfz$7),
            jr8ng = e0oy['md5'];tc94 = cvt9['getFileNativePath'](jr8ng);
      } else tc94 = dpfz$7;if (rngbj3['imgCache'] == null) rngbj3['imgCache'] = {};var abrk;function pd$zfv() {
        abrk['onload'] = null, abrk['onerror'] = null, delete rngbj3['imgCache'][dpfz$7];
      };var qyeo0x = function () {
        pd$zfv(), rngbj3['onLoaded'](abrk);
      },
          gnrb3 = function () {
        pd$zfv(), rngbj3['event']('error', 'Load image failed');
      };rngbj3['_type'] == 'nativeimage' ? (abrk = new z7oqef['window']['Image'](), abrk['crossOrigin'] = '', abrk['onload'] = qyeo0x, abrk['onerror'] = gnrb3, abrk['src'] = tc94, rngbj3['imgCache'][dpfz$7] = abrk) : new d$pfz['create'](tc94, { 'onload': qyeo0x, 'onerror': gnrb3, 'onCreate': function (jbu) {
          abrk = jbu, rngbj3['imgCache'][dpfz$7] = jbu;
        } });
    }, oxeq7;
  }(),
      _myh5w = function () {
    function ozfd7() {}return ivd$c(ozfd7, 'laya.wx.mini.MiniInput'), ozfd7['_createInputElement'] = function () {
      pzf['_initInput'](pzf['area'] = z7oqef['createElement']('textarea')), pzf['_initInput'](pzf['input'] = z7oqef['createElement']('input')), pzf['inputContainer'] = z7oqef['createElement']('div'), pzf['inputContainer']['style']['position'] = 'absolute', pzf['inputContainer']['style']['zIndex'] = 0x186a0, z7oqef['container']['appendChild'](pzf['inputContainer']), pzf['inputContainer']['setPos'] = function ($vdci, g3jr8n) {
        pzf['inputContainer']['style']['left'] = $vdci + 'px', pzf['inputContainer']['style']['top'] = g3jr8n + 'px';
      }, tvc$i['stage']['on']('resize', null, ozfd7['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xy0) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), fezo7['_soundClass'] = ezq7fo, fezo7['_musicClass'] = ezq7fo;
    }, ozfd7['_onStageResize'] = function () {
      var abkjr = tvc$i['stage']['_canvasTransform']['identity']();abkjr['scale'](z7oqef['width'] / akrb['canvas']['width'] / t4icl2['getPixelRatio'](), z7oqef['height'] / akrb['canvas']['height'] / t4icl2['getPixelRatio']());
    }, ozfd7['wxinputFocus'] = function (dp7z$) {
      var jrabn = pzf['inputElement']['target'];if (jrabn && !jrabn['editable']) return;r381['window']['wx']['offKeyboardConfirm'](), r381['window']['wx']['offKeyboardInput'](), r381['window']['wx']['showKeyboard']({ 'defaultValue': jrabn['text'], 'maxLength': jrabn['maxChars'], 'multiple': jrabn['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (v$pf) {}, 'fail': function (ezf7) {} }), r381['window']['wx']['onKeyboardConfirm'](function (aubkj) {
        var qe7foz = aubkj ? aubkj['value'] : '';jrabn['text'] = qe7foz, jrabn['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), r381['window']['wx']['onKeyboardInput'](function (ezof7) {
        var grjkb = ezof7 ? ezof7['value'] : '';if (!jrabn['multiline']) {
          if (grjkb['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }jrabn['text'] = grjkb, jrabn['event']('input');
      });
    }, ozfd7['inputEnter'] = function () {
      pzf['inputElement']['target']['focus'] = ![];
    }, ozfd7['wxinputblur'] = function () {
      ozfd7['hideKeyboard']();
    }, ozfd7['hideKeyboard'] = function () {
      r381['window']['wx']['offKeyboardConfirm'](), r381['window']['wx']['offKeyboardInput'](), r381['window']['wx']['hideKeyboard']({ 'success': function ($d9piv) {
          console['log']('隐藏键盘');
        }, 'fail': function (tv92ci) {
          console['log']('隐藏键盘出错:' + (tv92ci ? tv92ci['errMsg'] : ''));
        } });
    }, ozfd7;
  }(),
      f$p7zd = function () {
    function qy_0x() {}ivd$c(qy_0x, 'laya.wx.mini.MiniLoader');var g1r3n8 = qy_0x['prototype'];return g1r3n8['load'] = function (my_xh, _x0, rsjb, c2ti4l, q0ze7o) {
      rsjb === void 0x0 && (rsjb = !![]), q0ze7o === void 0x0 && (q0ze7o = ![]);var gnjba = this;gnjba['_url'] = my_xh;if (my_xh['indexOf']('data:image') === 0x0) gnjba['_type'] = _x0 = 'image';else gnjba['_type'] = _x0 || (_x0 = gnjba['getTypeFromUrl'](my_xh));gnjba['_cache'] = rsjb, gnjba['_data'] = null;var j3grn8 = 'ascii';if (my_xh['indexOf']('.fnt') != -0x1) j3grn8 = 'utf8';else _x0 == 'arraybuffer' && (j3grn8 = '');;var usakb = rgba['getFileExtension'](my_xh);if (qy_0x['_fileTypeArr']['indexOf'](usakb) != -0x1) r381['EnvConfig']['load']['call'](this, my_xh, _x0, rsjb, c2ti4l, q0ze7o);else {
        if (!cvt9['getFileInfo'](my_xh)) {
          if (my_xh['indexOf']('layaNativeDir/') != -0x1) {
            if (r381['isZiYu']) {
              var x0qm_ = cvt9['ziyuFileData'][my_xh];gnjba['onLoaded'](x0qm_);return;
            } else {
              cosnole['log']('read read'), cvt9['read'](my_xh, j3grn8, new abrgjk(qy_0x, qy_0x['onReadNativeCallBack'], [j3grn8, my_xh, _x0, rsjb, c2ti4l, q0ze7o, gnjba]));return;
            }
          }if (m_5ywh['rootPath'] == '') var d7f$ = my_xh;else d7f$ = my_xh['split'](m_5ywh['rootPath'])[0x0];my_xh['indexOf']('http://') != -0x1 || my_xh['indexOf']('https://') != -0x1 ? r381['EnvConfig']['load']['call'](gnjba, my_xh, _x0, rsjb, c2ti4l, q0ze7o) : cvt9['readFile'](d7f$, j3grn8, new abrgjk(qy_0x, qy_0x['onReadNativeCallBack'], [j3grn8, my_xh, _x0, rsjb, c2ti4l, q0ze7o, gnjba]), my_xh);
        } else r381['EnvConfig']['load']['call'](this, my_xh, _x0, rsjb, c2ti4l, q0ze7o);
      }
    }, g1r3n8['resMgrLoad'] = function (zpfdo7, w13, c9$i, vitc29, id9vc, _wm, _yxqm) {
      c9$i === void 0x0 && (c9$i = 0x0), vitc29 === void 0x0 && (vitc29 = ![]), id9vc === void 0x0 && (id9vc = ![]), _wm === void 0x0 && (_wm = 0x0), _yxqm === void 0x0 && (_yxqm = 0x3), zpfdo7['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zpfdo7), r381['EnvConfig']['resMgrLoad'](zpfdo7, (v2it9c, y0mqx_, eqy_x0) => {
        qy_0x['prototype']['resMgrLoadCallBack'](v2it9c, y0mqx_, eqy_x0, w13);
      }, c9$i, vitc29, id9vc, _wm, _yxqm);
    }, g1r3n8['resMgrLoadCallBack'] = function (jgbrn3, nr8gj3, h8561, jksb) {
      console['log']('buff:::', jgbrn3, h8561, cvt9['fileNativeDir'] + '///' + cvt9['fileListName']), jksb(jgbrn3, nr8gj3, h8561);
    }, g1r3n8['clearRes'] = function (g8j3n, x_m0qy) {
      x_m0qy === void 0x0 && (x_m0qy = ![]);var tci$9v = this;tci$9v['clearRes'](g8j3n, x_m0qy);var iv2c = cvt9['getFileInfo'](g8j3n);if (iv2c && (g8j3n['indexOf']('http://') != -0x1 || g8j3n['indexOf']('https://') != -0x1)) {
        var f7poe = iv2c['md5'],
            c29iv = cvt9['getFileNativePath'](f7poe);cvt9['remove'](c29iv);
      }
    }, qy_0x['onReadNativeCallBack'] = function (ze7ofq, rgbka, pdvfz, jnrg83, pd$v, ti94c, vpdf9$, ep7ozf, gb3jrn) {
      jnrg83 === void 0x0 && (jnrg83 = !![]), ti94c === void 0x0 && (ti94c = ![]), ep7ozf === void 0x0 && (ep7ozf = 0x0);if (!ep7ozf) {
        var bagrjk;if (pdvfz == 'json' || pdvfz == 'atlas') bagrjk = r381['getJson'](gb3jrn['data']);else pdvfz == 'xml' ? bagrjk = rgba['parseXMLFromString'](gb3jrn['data']) : bagrjk = gb3jrn['data'];vpdf9$['onLoaded'](bagrjk), !r381['isZiYu'] && r381['isPosMsgYu'] && pdvfz != 'arraybuffer' && wx['postMessage']({ 'url': rgbka, 'data': bagrjk, 'isLoad': !![] });
      } else ep7ozf == 0x1 && r381['EnvConfig']['load']['call'](vpdf9$, rgbka, pdvfz, jnrg83, pd$v, ti94c);
    }, wh6(qy_0x, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qy_0x;
  }(),
      cvt9 = function (pf7zo) {
    function ajn() {
      ajn['__super']['call'](this);;
    }return ivd$c(ajn, 'laya.wx.mini.MiniFileMgr', pf7zo), ajn['isLoadFile'] = function (jabsku) {
      return ajn['_fileTypeArr']['indexOf'](jabsku) != -0x1 ? !![] : ![];
    }, ajn['getFileInfo'] = function (rsab) {
      var c2li4 = rsab['split']('?')[0x0],
          _hwm5 = ajn['filesListObj'][c2li4];if (_hwm5 == null) return null;else return _hwm5;return null;
    }, ajn['onFileUpdate'] = function (yq0e_x, w5y_h) {
      var gr8n1 = yq0e_x['split']('/'),
          x_q0my = gr8n1[gr8n1['length'] - 0x1],
          e7zoq0 = ajn['getFileInfo'](w5y_h);if (e7zoq0 == null) ajn['onSaveFile'](w5y_h, x_q0my);else {
        if (e7zoq0['readyUrl'] != w5y_h) ajn['remove'](x_q0my, w5y_h);
      }
    }, ajn['exits'] = function (rbjkag, x0eqo7) {
      var m0_xqy = ajn['getFileNativePath'](rbjkag);ajn['fs']['getFileInfo']({ 'filePath': m0_xqy, 'success': function (_q0xey) {
          x0eqo7 != null && x0eqo7['runWith']([0x0, _q0xey]);
        }, 'fail': function (_0mhxy) {
          x0eqo7 != null && x0eqo7['runWith']([0x1, _0mhxy]);
        } });
    }, ajn['read'] = function (ze7fop, xh_ywm, pfod, $vtci) {
      xh_ywm === void 0x0 && (xh_ywm = 'ascill'), $vtci === void 0x0 && ($vtci = '');var xq0oye;$vtci != '' ? xq0oye = ajn['getFileNativePath'](ze7fop) : xq0oye = ze7fop, ajn['fs']['readFile']({ 'filePath': xq0oye, 'encoding': xh_ywm, 'success': function ($9dfv) {
          pfod != null && pfod['runWith']([0x0, $9dfv]);
        }, 'fail': function (z7eqo) {
          if (z7eqo && $vtci != '') ajn['down']($vtci, xh_ywm, pfod, $vtci);else pfod != null && pfod['runWith']([0x1]);
        } });
    }, ajn['readNativeFile'] = function (mw5y, ng81r) {
      ajn['fs']['readFile']({ 'filePath': mw5y, 'encoding': '', 'success': function (m0qx_y) {
          ng81r != null && ng81r['runWith']([0x0]);
        }, 'fail': function (yxe_0q) {
          ng81r != null && ng81r['runWith']([0x1]);
        } });
    }, ajn['down'] = function (g61n, jabsk, _mhyw, ngr83) {
      jabsk === void 0x0 && (jabsk = 'ascill'), ngr83 === void 0x0 && (ngr83 = '');var oqe0z = ajn['getFileNativePath'](ngr83),
          rjna = ajn['wxdown']({ 'url': g61n, 'filePath': oqe0z, 'success': function (asbjr) {
          if (asbjr['statusCode'] === 0xc8) ajn['readFile'](asbjr['filePath'], jabsk, _mhyw, ngr83);
        }, 'fail': function (mxy_hw) {
          _mhyw != null && _mhyw['runWith']([0x1, mxy_hw]);
        } });rjna['onProgressUpdate'](function (d$vci9) {
        _mhyw != null && _mhyw['runWith']([0x2, d$vci9['progress']]);
      });
    }, ajn['readFile'] = function (zefoq7, qx7eo, cti$, v$pfz) {
      qx7eo === void 0x0 && (qx7eo = 'ascill'), v$pfz === void 0x0 && (v$pfz = ''), ajn['fs']['readFile']({ 'filePath': zefoq7, 'encoding': qx7eo, 'success': function (p7fzod) {
          if (zefoq7['indexOf']('http://') != -0x1 || zefoq7['indexOf']('https://') != -0x1) ajn['onFileUpdate'](zefoq7, v$pfz);cti$ != null && cti$['runWith']([0x0, p7fzod]);
        }, 'fail': function (nj3gr8) {
          if (nj3gr8) cti$ != null && cti$['runWith']([0x1, nj3gr8]);
        } });
    }, ajn['downImg'] = function (rbj3, h16wm5, z7eqo0) {
      z7eqo0 === void 0x0 && (z7eqo0 = '');var fzeqo = ajn['wxdown']({ 'url': rbj3, 'success': function (jksuba) {
          jksuba['statusCode'] === 0xc8 && ajn['copyFile'](jksuba['tempFilePath'], z7eqo0, h16wm5);
        }, 'fail': function (tvi$9c) {
          h16wm5 != null && h16wm5['runWith']([0x1, tvi$9c]);
        } });
    }, ajn['copyFile'] = function (w1638, jkgabr, ivc29) {
      var jsakr = w1638['split']('/'),
          _yhwm = jsakr[jsakr['length'] - 0x1],
          n1g386 = jkgabr['split']('?')[0x0],
          v$d9ci = ajn['getFileInfo'](jkgabr),
          dpo7z = ajn['getFileNativePath'](_yhwm);ajn['fs']['copyFile']({ 'srcPath': w1638, 'destPath': dpo7z, 'success': function (h1m65w) {
          if (!v$d9ci) ajn['onSaveFile'](jkgabr, _yhwm), ivc29 != null && ivc29['runWith']([0x0]);else {
            if (v$d9ci['readyUrl'] != jkgabr) ajn['remove'](_yhwm, jkgabr, ivc29);
          }
        }, 'fail': function (tivc$) {
          ivc29 != null && ivc29['runWith']([0x1, tivc$]);
        } });
    }, ajn['getFileNativePath'] = function (baksrj) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + baksrj;
    }, ajn['remove'] = function (t9i$v, hxmy, jsa) {
      hxmy === void 0x0 && (hxmy = '');var dzf$7 = ajn['getFileInfo'](hxmy),
          v$c9 = ajn['getFileNativePath'](dzf$7['md5']);tvc$i['loader']['clearRes'](dzf$7['readyUrl']), ajn['fs']['unlink']({ 'filePath': v$c9, 'success': function (hxwy_m) {
          if (hxmy != '') ajn['onSaveFile'](hxmy, t9i$v);jsa != null && jsa['runWith']([0x0]);
        }, 'fail': function (g16) {} });
    }, ajn['onSaveFile'] = function (icdv9$, pd$9vf) {
      var xe0q = icdv9$['split']('?')[0x0];ajn['filesListObj'][xe0q] = { 'md5': pd$9vf, 'readyUrl': icdv9$ }, ajn['fs']['writeFile']({ 'filePath': ajn['fileNativeDir'] + '/' + ajn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ajn['filesListObj']), 'success': function (brajg) {
          console['log']('写入测试测试成功：', brajg);
        }, 'fail': function (brjaks) {
          console['log']('写入测试测试失败：', brjaks);
        } });
    }, ajn['existDir'] = function (fvd$9p, bkgja) {
      ajn['fs']['mkdir']({ 'dirPath': fvd$9p, 'success': function (_65mh) {
          bkgja != null && bkgja['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (qm_x) {
          if (qm_x['errMsg']['indexOf']('file already exists') != -0x1) ajn['readSync'](ajn['fileListName'], 'utf8', bkgja);else bkgja != null && bkgja['runWith']([0x1, qm_x]);
        } });
    }, ajn['readSync'] = function (cvti92, mwh165, jgkrab, m65hw) {
      mwh165 === void 0x0 && (mwh165 = 'ascill'), m65hw === void 0x0 && (m65hw = '');var ym5hw_ = ajn['getFileNativePath'](cvti92),
          rasbjk;try {
        rasbjk = ajn['fs']['readFileSync'](ym5hw_), jgkrab != null && jgkrab['runWith']([0x0, { 'data': rasbjk }]);
      } catch (_wm6h5) {
        jgkrab != null && jgkrab['runWith']([0x1]);
      }
    }, ajn['readCache'] = function () {}, ajn['writeCache'] = function (r3gn) {
      var t9i2v = readyUrl['split']('?')[0x0];ajn['filesListObj'][t9i2v] = { 'md5': md5Name, 'readyUrl': readyUrl }, ajn['fs']['writeFile']({ 'filePath': ajn['fileNativeDir'] + '/' + ajn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ajn['filesListObj']), 'success': function (yxhw_) {}, 'fail': function (c2itv) {} });
    }, ajn['setNativeFileDir'] = function (sra) {
      ajn['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + sra;
    }, ajn['filesListObj'] = {}, ajn['fileNativeDir'] = null, ajn['fileListName'] = 'layaairfiles.txt', ajn['ziyuFileData'] = {}, wh6(ajn, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ajn;
  }(d$pz7f),
      ezq7fo = function (hwymx_) {
    function jrabs() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], jrabs['__super']['call'](this), this['_sound'] = jrabs['_createSound']();
    }ivd$c(jrabs, 'laya.wx.mini.MiniSound', hwymx_);var oexy0 = jrabs['prototype'];return oexy0['load'] = function (di9$p) {
      var tcv$9i = this;di9$p = m_5ywh['formatURL'](di9$p), this['url'] = di9$p;if (jrabs['_audioCache'][di9$p]) {
        this['event']('complete');return;
      }function akr() {
        if (jrabs['_null'] != undefined) tcv$9i['_sound']['onCanplay'](jrabs['_null']), tcv$9i['_sound']['onError'](jrabs['_null']);else try {
          tcv$9i['_sound']['onCanplay'](null), tcv$9i['_sound']['onError'](null), jrabs['_null'] = null;
        } catch (dp$vi9) {
          console['warn']('[wxmini] _clearSound:' + dp$vi9), tcv$9i['_sound']['onCanplay'](kabgrj), tcv$9i['_sound']['onError'](kabgrj), jrabs['_null'] = kabgrj;
        }
      }function f7ozpe() {
        akr(), cd9vi['loaded'] = !![], cd9vi['event']('complete'), jrabs['_audioCache'][cd9vi['url']] = cd9vi;
      }function dop7(jbragn) {
        console['error']('errCode=' + jbragn['errCode'] + '  errMsg=' + jbragn['errMsg']), akr(), cd9vi['event']('error');
      }function kabgrj() {}this['_sound']['onCanplay'](f7ozpe), this['_sound']['onError'](dop7), this['_sound']['src'] = di9$p;var cd9vi = this;
    }, oexy0['play'] = function (f$vd9p, zqofe) {
      f$vd9p === void 0x0 && (f$vd9p = 0x0), zqofe === void 0x0 && (zqofe = 0x0);var abkjgr;if (this['url'] == fezo7['_tMusic']) {
        if (!jrabs['_musicAudio']) jrabs['_musicAudio'] = jrabs['_createSound']();abkjgr = jrabs['_musicAudio'];
      } else abkjgr = jrabs['_createSound']();abkjgr['src'] = this['url'];var h5m6_w = new rbaj(abkjgr);return h5m6_w['url'] = this['url'], h5m6_w['loops'] = zqofe, h5m6_w['startTime'] = f$vd9p, h5m6_w['play'](), fezo7['addChannel'](h5m6_w), h5m6_w;
    }, oexy0['dispose'] = function () {
      var y0 = jrabs['_audioCache'][this['url']];y0 && (y0['src'] = '', delete jrabs['_audioCache'][this['url']]);
    }, g13n86(0x0, oexy0, 'duration', function () {
      return this['_sound']['duration'];
    }), jrabs['_createSound'] = function () {
      return jrabs['_id']++, r381['window']['wx']['createInnerAudioContext']();
    }, jrabs['_musicAudio'] = null, jrabs['_id'] = 0x0, jrabs['_audioCache'] = {}, jrabs['_null'] = undefined, jrabs;
  }(d$pz7f),
      rbaj = function (qzoe7f) {
    function kbgarj(rakgbj) {
      this['_audio'] = null, this['_onEnd'] = null, kbgarj['__super']['call'](this), this['_audio'] = rakgbj, this['_onEnd'] = rgba['bind'](this['__onEnd'], this), rakgbj['onEnded'](this['_onEnd']);
    }ivd$c(kbgarj, 'laya.wx.mini.MiniSoundChannel', qzoe7f);var ajkrbg = kbgarj['prototype'];return ajkrbg['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (tvc$i['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ajkrbg['__onNull'] = function () {}, ajkrbg['play'] = function () {
      this['isStopped'] = ![], fezo7['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ajkrbg['stop'] = function () {
      this['isStopped'] = !![], fezo7['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (kbgarj['_null'] != undefined) this['_audio']['onEnded'](kbgarj['_null']);else try {
        this['_audio']['onEnded'](null), kbgarj['_null'] = null;
      } catch (qx0yo) {
        console['warn']('[wxmini] stop:' + qx0yo), this['_audio']['onEnded'](rgba['bind'](this['__onNull'], this)), kbgarj['_null'] = rgba['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ajkrbg['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ajkrbg['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], fezo7['addChannel'](this), this['_audio']['play']();
    }, g13n86(0x0, ajkrbg, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), g13n86(0x0, ajkrbg, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), g13n86(0x0, ajkrbg, 'volume', function () {
      return 0x1;
    }, function (xqo7) {}), kbgarj['_null'] = undefined, kbgarj;
  }(garkb);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var nrbgj in Laya) {
    var agjbn = Laya[nrbgj];agjbn && agjbn['__isclass'] && (exports[nrbgj] = agjbn);
  }
});