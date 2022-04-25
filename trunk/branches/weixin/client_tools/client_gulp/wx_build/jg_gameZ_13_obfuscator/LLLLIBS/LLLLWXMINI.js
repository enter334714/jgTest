var Z = wx.$L;
(function (window, document, xtuzf) {
  var xfzu = xtuzf['un'],
      pm90i = xtuzf['uns'],
      q4vn5s = xtuzf['static'],
      qvsgn = xtuzf['class'],
      s45qnv = xtuzf['getset'],
      d8lc = xtuzf['__newvec'],
      $7elkd = laya['utils']['Browser'],
      dk7l$ = laya['events']['Event'],
      x6rz0 = laya['events']['EventDispatcher'],
      c2hy = laya['resource']['HTMLImage'],
      svgqn = laya['utils']['Handler'],
      ea7k$ = laya['display']['Input'],
      zxr09 = laya['net']['Loader'],
      _joy1 = laya['maths']['Matrix'],
      cedl78 = laya['renders']['Render'],
      fwux = laya['utils']['RunDriver'],
      lehdc8 = laya['media']['Sound'],
      xw6zt = laya['media']['SoundChannel'],
      $7kg5 = laya['media']['SoundManager'],
      hedy8 = laya['display']['Stage'],
      _bi1p = laya['net']['URL'],
      a5$sk = laya['utils']['Utils'],
      sg$ka = function () {
    function ec8dl7() {}return qvsgn(ec8dl7, 'laya.wx.mini.MiniAdpter'), ec8dl7['getJson'] = function (aq$5sg) {
      return JSON['parse'](aq$5sg);
    }, ec8dl7['init'] = function (_jh2y, pib90m) {
      _jh2y === void 0x0 && (_jh2y = ![]), pib90m === void 0x0 && (pib90m = ![]);if (ec8dl7['_inited']) return;ec8dl7['window'] = window;if (ec8dl7['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ec8dl7['_inited'] = !![], ec8dl7['isZiYu'] = pib90m, ec8dl7['isPosMsgYu'] = _jh2y, ec8dl7['EnvConfig'] = {}, !ec8dl7['isZiYu'] && (cehdl['setNativeFileDir']('/layaairGame'), cehdl['existDir'](cehdl['fileNativeDir'], svgqn['create'](ec8dl7, ec8dl7['onMkdirCallBack']))), ec8dl7['window']['focus'] = function () {}, xtuzf['getUrlPath'] = function () {}, ec8dl7['window']['logtime'] = function (e8lc7d) {}, ec8dl7['window']['alertTimeLog'] = function (sk5g) {}, ec8dl7['window']['resetShareInfo'] = function () {}, ec8dl7['window']['CanvasRenderingContext2D'] = function () {}, ec8dl7['window']['CanvasRenderingContext2D']['prototype'] = ec8dl7['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ec8dl7['window']['document']['body']['appendChild'] = function () {}, ec8dl7['EnvConfig']['pixelRatioInt'] = 0x0, fwux['getPixelRatio'] = ec8dl7['pixelRatio'], ec8dl7['_preCreateElement'] = $7elkd['createElement'], $7elkd['createElement'] = ec8dl7['createElement'], fwux['createShaderCondition'] = ec8dl7['createShaderCondition'], a5$sk['parseXMLFromString'] = ec8dl7['parseXMLFromString'], ea7k$['_createInputElement'] = m9ir0p['_createInputElement'], ec8dl7['EnvConfig']['load'] = zxr09['prototype']['load'], zxr09['prototype']['load'] = e8lhc['prototype']['load'], ec8dl7['isZiYu'] && _jh2y && wx['onMessage'](function (wt6uzx) {
        wt6uzx['isLoad'] && (cehdl['ziyuFileData'][wt6uzx['url']] = wt6uzx['data']);
      });
    }, ec8dl7['onMkdirCallBack'] = function (r0x96p, l7ecdk) {
      if (!r0x96p) cehdl['filesListObj'] = JSON['parse'](l7ecdk['data']);
    }, ec8dl7['pixelRatio'] = function () {
      if (!ec8dl7['EnvConfig']['pixelRatioInt']) try {
        var ag$75k = wx['getSystemInfoSync']();return ec8dl7['EnvConfig']['pixelRatioInt'] = ag$75k['pixelRatio'], ag$75k = ag$75k, ag$75k['pixelRatio'];
      } catch (j2y8ho) {}return ec8dl7['EnvConfig']['pixelRatioInt'];
    }, ec8dl7['createElement'] = function (txfw) {
      if (txfw == 'canvas') {
        var sq$ag;return ec8dl7['idx'] == 0x1 ? ec8dl7['isZiYu'] ? (sq$ag = sharedCanvas, sq$ag['style'] = {}) : sq$ag = window['canvas'] : sq$ag = window['wx']['createCanvas'](), ec8dl7['idx']++, sq$ag;
      } else {
        if (txfw == 'textarea' || txfw == 'input') return ec8dl7['onCreateInput'](txfw);else {
          if (txfw == 'div') {
            var kd7cl = ec8dl7['_preCreateElement'](txfw);return kd7cl['contains'] = function (a$gk5) {
              return null;
            }, kd7cl['removeChild'] = function ($k7lae) {}, kd7cl;
          } else return ec8dl7['_preCreateElement'](txfw);
        }
      }
    }, ec8dl7['onCreateInput'] = function (r90i) {
      var oh2_yj = ec8dl7['_preCreateElement'](r90i);return oh2_yj['focus'] = m9ir0p['wxinputFocus'], oh2_yj['blur'] = m9ir0p['wxinputblur'], oh2_yj['style'] = {}, oh2_yj['value'] = 0x0, oh2_yj['parentElement'] = {}, oh2_yj['placeholder'] = {}, oh2_yj['type'] = {}, oh2_yj['setColor'] = function (dechl) {}, oh2_yj['setType'] = function (y8edhc) {}, oh2_yj['setFontFace'] = function (yj21_) {}, oh2_yj['addEventListener'] = function (sagk$) {}, oh2_yj['contains'] = function (elcd7) {
        return null;
      }, oh2_yj['removeChild'] = function (kl7$) {}, oh2_yj;
    }, ec8dl7['createShaderCondition'] = function (wt6zr) {
      var z90xr6 = this,
          sgk5$ = function () {
        var p09ir6 = wt6zr;return z90xr6[wt6zr['replace']('this.', '')];
      };return sgk5$;
    }, ec8dl7['EnvConfig'] = null, ec8dl7['window'] = null, ec8dl7['_preCreateElement'] = null, ec8dl7['_inited'] = ![], ec8dl7['wxRequest'] = null, ec8dl7['systemInfo'] = null, ec8dl7['version'] = '0.0.1', ec8dl7['isZiYu'] = ![], ec8dl7['isPosMsgYu'] = ![], ec8dl7['parseXMLFromString'] = function (vngsq5) {
      var k7dl$e, lg$k7a;vngsq5 = vngsq5['replace'](/>\s+</g, '><');try {
        k7dl$e = new window['Parser']['DOMParser']()['parseFromString'](vngsq5, 'text/xml');
      } catch (cd) {
        throw '需要引入xml解析库文件';
      }return k7dl$e;
    }, ec8dl7['idx'] = 0x1, ec8dl7;
  }(),
      ags5q$ = function () {
    function an5sgq() {}qvsgn(an5sgq, 'laya.wx.mini.MiniImage');var b1p_m = an5sgq['prototype'];return b1p_m['_loadImage'] = function (q4v5) {
      var i_pbm = this,
          lecd78 = ![];q4v5['indexOf']('layaNativeDir/') == -0x1 && (lecd78 = !![], q4v5 = _bi1p['formatURL'](q4v5));if (!cehdl['getFileInfo'](q4v5)) {
        if (q4v5['indexOf']('http://') != -0x1 || q4v5['indexOf']('https://') != -0x1) cehdl['downImg'](q4v5, new svgqn(an5sgq, an5sgq['onDownImgCallBack'], [q4v5, i_pbm]), q4v5);else an5sgq['onCreateImage'](q4v5, i_pbm, !![]);
      } else an5sgq['onCreateImage'](q4v5, i_pbm, !lecd78);
    }, an5sgq['onDownImgCallBack'] = function (n5ga, z6wtux, e7l8c) {
      if (!e7l8c) an5sgq['onCreateImage'](n5ga, z6wtux);else z6wtux['onError'](null);
    }, an5sgq['onCreateImage'] = function (j_hy2, zr9x06, h8ydc2) {
      h8ydc2 === void 0x0 && (h8ydc2 = ![]);var sqa$g;if (!h8ydc2) {
        var j1m_b = cehdl['getFileInfo'](j_hy2),
            z3tuwf = j1m_b['md5'];sqa$g = cehdl['getFileNativePath'](z3tuwf);
      } else sqa$g = j_hy2;if (zr9x06['imgCache'] == null) zr9x06['imgCache'] = {};var nsa5qg;function qns54v() {
        nsa5qg['onload'] = null, nsa5qg['onerror'] = null, delete zr9x06['imgCache'][j_hy2];
      };var t0r6x = function () {
        qns54v(), zr9x06['onLoaded'](nsa5qg);
      },
          ns5qag = function () {
        qns54v(), zr9x06['event']('error', 'Load image failed');
      };zr9x06['_type'] == 'nativeimage' ? (nsa5qg = new $7elkd['window']['Image'](), nsa5qg['crossOrigin'] = '', nsa5qg['onload'] = t0r6x, nsa5qg['onerror'] = ns5qag, nsa5qg['src'] = sqa$g, zr9x06['imgCache'][j_hy2] = nsa5qg) : new c2hy['create'](sqa$g, { 'onload': t0r6x, 'onerror': ns5qag, 'onCreate': function (ks$ga) {
          nsa5qg = ks$ga, zr9x06['imgCache'][j_hy2] = ks$ga;
        } });
    }, an5sgq;
  }(),
      m9ir0p = function () {
    function o2y() {}return qvsgn(o2y, 'laya.wx.mini.MiniInput'), o2y['_createInputElement'] = function () {
      ea7k$['_initInput'](ea7k$['area'] = $7elkd['createElement']('textarea')), ea7k$['_initInput'](ea7k$['input'] = $7elkd['createElement']('input')), ea7k$['inputContainer'] = $7elkd['createElement']('div'), ea7k$['inputContainer']['style']['position'] = 'absolute', ea7k$['inputContainer']['style']['zIndex'] = 0x186a0, $7elkd['container']['appendChild'](ea7k$['inputContainer']), ea7k$['inputContainer']['setPos'] = function (dy2hc, ob_21j) {
        ea7k$['inputContainer']['style']['left'] = dy2hc + 'px', ea7k$['inputContainer']['style']['top'] = ob_21j + 'px';
      }, xtuzf['stage']['on']('resize', null, o2y['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (om1_b) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), $7kg5['_soundClass'] = gvsq, $7kg5['_musicClass'] = gvsq, window['_videoClass'] = pb_mi1;
    }, o2y['_onStageResize'] = function () {
      var wftuxz = xtuzf['stage']['_canvasTransform']['identity']();wftuxz['scale']($7elkd['width'] / cedl78['canvas']['width'] / fwux['getPixelRatio'](), $7elkd['height'] / cedl78['canvas']['height'] / fwux['getPixelRatio']());
    }, o2y['wxinputFocus'] = function (hd8eyc) {
      var uw6xtz = ea7k$['inputElement']['target'];if (uw6xtz && !uw6xtz['editable']) return;sg$ka['window']['wx']['offKeyboardConfirm'](), sg$ka['window']['wx']['offKeyboardInput'](), sg$ka['window']['wx']['showKeyboard']({ 'defaultValue': uw6xtz['text'], 'maxLength': uw6xtz['maxChars'], 'multiple': uw6xtz['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (z609xr) {}, 'fail': function (kela7$) {} }), sg$ka['window']['wx']['onKeyboardConfirm'](function (b_1jo) {
        var yh_2oj = b_1jo ? b_1jo['value'] : '';uw6xtz['text'] = yh_2oj, uw6xtz['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), sg$ka['window']['wx']['onKeyboardInput'](function (jh8y2c) {
        var z90rx6 = jh8y2c ? jh8y2c['value'] : '';if (!uw6xtz['multiline']) {
          if (z90rx6['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }uw6xtz['text'] = z90rx6, uw6xtz['event']('input');
      });
    }, o2y['inputEnter'] = function () {
      ea7k$['inputElement']['target']['focus'] = ![];
    }, o2y['wxinputblur'] = function () {
      o2y['hideKeyboard']();
    }, o2y['hideKeyboard'] = function () {
      sg$ka['window']['wx']['offKeyboardConfirm'](), sg$ka['window']['wx']['offKeyboardInput'](), sg$ka['window']['wx']['hideKeyboard']({ 'success': function (bp_m1i) {
          console['log']('隐藏键盘');
        }, 'fail': function (pi_b1m) {
          console['log']('隐藏键盘出错:' + (pi_b1m ? pi_b1m['errMsg'] : ''));
        } });
    }, o2y;
  }(),
      e8lhc = function () {
    function im90rp() {}qvsgn(im90rp, 'laya.wx.mini.MiniLoader');var yo1_2j = im90rp['prototype'];return yo1_2j['load'] = function (ld$7ke, uzxt6, k7$eal, cleh8d, hcjy28) {
      k7$eal === void 0x0 && (k7$eal = !![]), hcjy28 === void 0x0 && (hcjy28 = ![]);var dke$l7 = this;dke$l7['_url'] = ld$7ke;if (ld$7ke['indexOf']('data:image') === 0x0) dke$l7['_type'] = uzxt6 = 'image';else dke$l7['_type'] = uzxt6 || (uzxt6 = dke$l7['getTypeFromUrl'](ld$7ke));dke$l7['_cache'] = k7$eal, dke$l7['_data'] = null;var jo2_y = 'ascii';if (ld$7ke['indexOf']('.fnt') != -0x1) jo2_y = 'utf8';else uzxt6 == 'arraybuffer' && (jo2_y = '');;var p0bm9 = a5$sk['getFileExtension'](ld$7ke);if (im90rp['_fileTypeArr']['indexOf'](p0bm9) != -0x1) sg$ka['EnvConfig']['load']['call'](this, ld$7ke, uzxt6, k7$eal, cleh8d, hcjy28);else {
        if (!cehdl['getFileInfo'](ld$7ke)) {
          if (ld$7ke['indexOf']('layaNativeDir/') != -0x1) {
            if (sg$ka['isZiYu']) {
              var a$5ks = cehdl['ziyuFileData'][ld$7ke];dke$l7['onLoaded'](a$5ks);return;
            } else {
              cosnole['log']('read read'), cehdl['read'](ld$7ke, jo2_y, new svgqn(im90rp, im90rp['onReadNativeCallBack'], [jo2_y, ld$7ke, uzxt6, k7$eal, cleh8d, hcjy28, dke$l7]));return;
            }
          }if (_bi1p['rootPath'] == '') var i96p = ld$7ke;else i96p = ld$7ke['split'](_bi1p['rootPath'])[0x0];ld$7ke['indexOf']('http://') != -0x1 || ld$7ke['indexOf']('https://') != -0x1 ? sg$ka['EnvConfig']['load']['call'](dke$l7, ld$7ke, uzxt6, k7$eal, cleh8d, hcjy28) : cehdl['readFile'](i96p, jo2_y, new svgqn(im90rp, im90rp['onReadNativeCallBack'], [jo2_y, ld$7ke, uzxt6, k7$eal, cleh8d, hcjy28, dke$l7]), ld$7ke);
        } else sg$ka['EnvConfig']['load']['call'](this, ld$7ke, uzxt6, k7$eal, cleh8d, hcjy28);
      }
    }, yo1_2j['resMgrLoad'] = function (leh8cd, xztr6w, wtuz6, l7akg, x6p, al7$, o1_b) {
      wtuz6 === void 0x0 && (wtuz6 = 0x0), l7akg === void 0x0 && (l7akg = ![]), x6p === void 0x0 && (x6p = ![]), al7$ === void 0x0 && (al7$ = 0x0), o1_b === void 0x0 && (o1_b = 0x3), leh8cd['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', leh8cd), sg$ka['EnvConfig']['resMgrLoad'](leh8cd, (a$7k5g, sa5g$k, j_yh2o) => {
        im90rp['prototype']['resMgrLoadCallBack'](a$7k5g, sa5g$k, j_yh2o, xztr6w);
      }, wtuz6, l7akg, x6p, al7$, o1_b);
    }, yo1_2j['resMgrLoadCallBack'] = function (ychd, al$gk7, m0i9pr, zrx6wt) {
      console['log']('buff:::', ychd, m0i9pr, cehdl['fileNativeDir'] + '///' + cehdl['fileListName']), zrx6wt(ychd, al$gk7, m0i9pr);
    }, yo1_2j['clearRes'] = function (ob_im, m1i_o) {
      m1i_o === void 0x0 && (m1i_o = ![]);var _h2yj = this;_h2yj['clearRes'](ob_im, m1i_o);var i19pmb = cehdl['getFileInfo'](ob_im);if (i19pmb && (ob_im['indexOf']('http://') != -0x1 || ob_im['indexOf']('https://') != -0x1)) {
        var $7dkel = i19pmb['md5'],
            wufz3 = cehdl['getFileNativePath']($7dkel);cehdl['remove'](wufz3);
      }
    }, im90rp['onReadNativeCallBack'] = function (_oy2j1, qs5gn, b_1ip, ecd8hy, xrwt, ibpm9, zwu3f, im_o1b, tzw6rx) {
      ecd8hy === void 0x0 && (ecd8hy = !![]), ibpm9 === void 0x0 && (ibpm9 = ![]), im_o1b === void 0x0 && (im_o1b = 0x0);if (!im_o1b) {
        var txwfuz;if (b_1ip == 'json' || b_1ip == 'atlas') txwfuz = sg$ka['getJson'](tzw6rx['data']);else b_1ip == 'xml' ? txwfuz = a5$sk['parseXMLFromString'](tzw6rx['data']) : txwfuz = tzw6rx['data'];zwu3f['onLoaded'](txwfuz), !sg$ka['isZiYu'] && sg$ka['isPosMsgYu'] && b_1ip != 'arraybuffer' && wx['postMessage']({ 'url': qs5gn, 'data': txwfuz, 'isLoad': !![] });
      } else im_o1b == 0x1 && sg$ka['EnvConfig']['load']['call'](zwu3f, qs5gn, b_1ip, ecd8hy, xrwt, ibpm9);
    }, q4vn5s(im90rp, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), im90rp;
  }(),
      cehdl = function (s5a$qg) {
    function i19pm() {
      i19pm['__super']['call'](this);;
    }return qvsgn(i19pm, 'laya.wx.mini.MiniFileMgr', s5a$qg), i19pm['isLoadFile'] = function (s5qag$) {
      return i19pm['_fileTypeArr']['indexOf'](s5qag$) != -0x1 ? !![] : ![];
    }, i19pm['getFileInfo'] = function (ydh8c2) {
      var qg5ns = ydh8c2['split']('?')[0x0],
          b1omi = i19pm['filesListObj'][qg5ns];if (b1omi == null) return null;else return b1omi;return null;
    }, i19pm['onFileUpdate'] = function (bp90, zuwft3) {
      var tz6xuw = bp90['split']('/'),
          pr9im = tz6xuw[tz6xuw['length'] - 0x1],
          _joy = i19pm['getFileInfo'](zuwft3);if (_joy == null) i19pm['onSaveFile'](zuwft3, pr9im);else {
        if (_joy['readyUrl'] != zuwft3) i19pm['remove'](pr9im, zuwft3);
      }
    }, i19pm['exits'] = function (oj1bm_, nsq54) {
      var h2y8oj = i19pm['getFileNativePath'](oj1bm_);i19pm['fs']['getFileInfo']({ 'filePath': h2y8oj, 'success': function (cl7edk) {
          nsq54 != null && nsq54['runWith']([0x0, cl7edk]);
        }, 'fail': function (i1om) {
          nsq54 != null && nsq54['runWith']([0x1, i1om]);
        } });
    }, i19pm['read'] = function (l7ed8, p9x0, c2jh8, a$g7kl) {
      p9x0 === void 0x0 && (p9x0 = 'ascill'), a$g7kl === void 0x0 && (a$g7kl = '');var s$k;a$g7kl != '' ? s$k = i19pm['getFileNativePath'](l7ed8) : s$k = l7ed8, i19pm['fs']['readFile']({ 'filePath': s$k, 'encoding': p9x0, 'success': function (h8jc2y) {
          c2jh8 != null && c2jh8['runWith']([0x0, h8jc2y]);
        }, 'fail': function (wfuxz) {
          if (wfuxz && a$g7kl != '') i19pm['down'](a$g7kl, p9x0, c2jh8, a$g7kl);else c2jh8 != null && c2jh8['runWith']([0x1]);
        } });
    }, i19pm['readNativeFile'] = function (_ojyh2, $gqs5a) {
      i19pm['fs']['readFile']({ 'filePath': _ojyh2, 'encoding': '', 'success': function (o2jb_) {
          $gqs5a != null && $gqs5a['runWith']([0x0]);
        }, 'fail': function (p9r0i) {
          $gqs5a != null && $gqs5a['runWith']([0x1]);
        } });
    }, i19pm['down'] = function (i1m_p, ed8c7, joy21_, _o1jb) {
      ed8c7 === void 0x0 && (ed8c7 = 'ascill'), _o1jb === void 0x0 && (_o1jb = '');var a7g$kl = i19pm['getFileNativePath'](_o1jb),
          xzt0 = i19pm['wxdown']({ 'url': i1m_p, 'filePath': a7g$kl, 'success': function (p90xr6) {
          if (p90xr6['statusCode'] === 0xc8) i19pm['readFile'](p90xr6['filePath'], ed8c7, joy21_, _o1jb);
        }, 'fail': function (utwf) {
          joy21_ != null && joy21_['runWith']([0x1, utwf]);
        } });xzt0['onProgressUpdate'](function (e7l$ka) {
        joy21_ != null && joy21_['runWith']([0x2, e7l$ka['progress']]);
      });
    }, i19pm['readFile'] = function (cdhel8, bpm09i, zx69r, o_bj1m) {
      bpm09i === void 0x0 && (bpm09i = 'ascill'), o_bj1m === void 0x0 && (o_bj1m = ''), i19pm['fs']['readFile']({ 'filePath': cdhel8, 'encoding': bpm09i, 'success': function ($7alek) {
          if (cdhel8['indexOf']('http://') != -0x1 || cdhel8['indexOf']('https://') != -0x1) i19pm['onFileUpdate'](cdhel8, o_bj1m);zx69r != null && zx69r['runWith']([0x0, $7alek]);
        }, 'fail': function (l8dceh) {
          if (l8dceh) zx69r != null && zx69r['runWith']([0x1, l8dceh]);
        } });
    }, i19pm['downImg'] = function (g$5ask, hyc8e, jm_ob1) {
      jm_ob1 === void 0x0 && (jm_ob1 = '');var k5$ = i19pm['wxdown']({ 'url': g$5ask, 'success': function (uxfwtz) {
          uxfwtz['statusCode'] === 0xc8 && i19pm['copyFile'](uxfwtz['tempFilePath'], jm_ob1, hyc8e);
        }, 'fail': function (alkg7$) {
          hyc8e != null && hyc8e['runWith']([0x1, alkg7$]);
        } });
    }, i19pm['copyFile'] = function (cehyd, uftzw, $s5ak) {
      var xtz60r = cehyd['split']('/'),
          wzutxf = xtz60r[xtz60r['length'] - 0x1],
          s5g$a = uftzw['split']('?')[0x0],
          $g5ks = i19pm['getFileInfo'](uftzw),
          q$sag = i19pm['getFileNativePath'](wzutxf);i19pm['fs']['copyFile']({ 'srcPath': cehyd, 'destPath': q$sag, 'success': function (r96p) {
          if (!$g5ks) i19pm['onSaveFile'](uftzw, wzutxf), $s5ak != null && $s5ak['runWith']([0x0]);else {
            if ($g5ks['readyUrl'] != uftzw) i19pm['remove'](wzutxf, uftzw, $s5ak);
          }
        }, 'fail': function (_1ojmb) {
          $s5ak != null && $s5ak['runWith']([0x1, _1ojmb]);
        } });
    }, i19pm['getFileNativePath'] = function (vg5sqn) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vg5sqn;
    }, i19pm['remove'] = function (bo1im_, ip9m1, ho8) {
      ip9m1 === void 0x0 && (ip9m1 = '');var _bi1 = i19pm['getFileInfo'](ip9m1),
          wzt3f = i19pm['getFileNativePath'](_bi1['md5']);xtuzf['loader']['clearRes'](_bi1['readyUrl']), i19pm['fs']['unlink']({ 'filePath': wzt3f, 'success': function (rpi6) {
          if (ip9m1 != '') i19pm['onSaveFile'](ip9m1, bo1im_);ho8 != null && ho8['runWith']([0x0]);
        }, 'fail': function (q$as5g) {} });
    }, i19pm['onSaveFile'] = function (hecdy8, fwuztx) {
      var c2y8h = hecdy8['split']('?')[0x0];i19pm['filesListObj'][c2y8h] = { 'md5': fwuztx, 'readyUrl': hecdy8 }, i19pm['fs']['writeFile']({ 'filePath': i19pm['fileNativeDir'] + '/' + i19pm['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](i19pm['filesListObj']), 'success': function (_johy) {
          console['log']('写入测试测试成功：', _johy);
        }, 'fail': function (o2h) {
          console['log']('写入测试测试失败：', o2h);
        } });
    }, i19pm['existDir'] = function ($kg7al, s5k) {
      i19pm['fs']['mkdir']({ 'dirPath': $kg7al, 'success': function (oy_hj) {
          s5k != null && s5k['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (b_12j) {
          if (b_12j['errMsg']['indexOf']('file already exists') != -0x1) i19pm['readSync'](i19pm['fileListName'], 'utf8', s5k);else s5k != null && s5k['runWith']([0x1, b_12j]);
        } });
    }, i19pm['readSync'] = function (z690x, a$lg7k, aqns, b1mip9) {
      a$lg7k === void 0x0 && (a$lg7k = 'ascill'), b1mip9 === void 0x0 && (b1mip9 = '');var k5a$g = i19pm['getFileNativePath'](z690x),
          b9p1i;try {
        b9p1i = i19pm['fs']['readFileSync'](k5a$g), aqns != null && aqns['runWith']([0x0, { 'data': b9p1i }]);
      } catch (trx6) {
        aqns != null && aqns['runWith']([0x1]);
      }
    }, i19pm['readCache'] = function () {}, i19pm['writeCache'] = function (wutz6) {
      var mpb09i = readyUrl['split']('?')[0x0];i19pm['filesListObj'][mpb09i] = { 'md5': md5Name, 'readyUrl': readyUrl }, i19pm['fs']['writeFile']({ 'filePath': i19pm['fileNativeDir'] + '/' + i19pm['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](i19pm['filesListObj']), 'success': function (i9p6r0) {}, 'fail': function (l$7eka) {} });
    }, i19pm['setNativeFileDir'] = function (ycj2) {
      i19pm['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ycj2;
    }, i19pm['filesListObj'] = {}, i19pm['fileNativeDir'] = null, i19pm['fileListName'] = 'layaairfiles.txt', i19pm['ziyuFileData'] = {}, q4vn5s(i19pm, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), i19pm;
  }(x6rz0),
      gvsq = function (z6xt0r) {
    function n5s4() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], n5s4['__super']['call'](this), this['_sound'] = n5s4['_createSound'](), this['_chanell'] = new rp9i6(this['_sound']);
    }qvsgn(n5s4, 'laya.wx.mini.MiniSound', z6xt0r);var hyced8 = n5s4['prototype'];return hyced8['load'] = function (ag5qn) {
      var b0pi = this;ag5qn = _bi1p['formatURL'](ag5qn), this['url'] = ag5qn;if (n5s4['_audioCache'][ag5qn]) {
        this['event']('complete');return;
      }function _jbo() {
        if (n5s4['_null'] != undefined) b0pi['_sound']['onCanplay'](n5s4['_null']), b0pi['_sound']['onError'](n5s4['_null']);else try {
          b0pi['_sound']['onCanplay'](null), b0pi['_sound']['onError'](null), n5s4['_null'] = null;
        } catch (irmp9) {
          console['warn']('[wxmini] _clearSound:' + irmp9), b0pi['_sound']['onCanplay'](ch82jy), b0pi['_sound']['onError'](ch82jy), n5s4['_null'] = ch82jy;
        }
      }function sgan5() {
        d$['loaded'] = !![], d$['event']('complete'), n5s4['_audioCache'][d$['url']] = d$;
      }function i1b(xtzr06) {
        console['error']('errCode=' + xtzr06['errCode'] + '  errMsg=' + xtzr06['errMsg']), d$['event']('error');
      }function ch82jy() {}this['_sound']['onCanplay'](sgan5), this['_sound']['onError'](i1b), this['_sound']['src'] = ag5qn;var d$ = this;
    }, hyced8['play'] = function (deh8yc, fxuwzt) {
      deh8yc === void 0x0 && (deh8yc = 0x0), fxuwzt === void 0x0 && (fxuwzt = 0x0);var ipr0m9, k5sag$;if (this['url'] == $7kg5['_tMusic']) {
        if (!n5s4['_musicAudio']) n5s4['_musicAudio'] = this['_sound'];ipr0m9 = n5s4['_musicAudio'], k5sag$ = this['_chanell'];
      } else ipr0m9 = this['_sound'], k5sag$ = this['_chanell'];return ipr0m9['src'] = this['url'], ipr0m9['startTime'] = 0x0, k5sag$['isStopped'] && (k5sag$['url'] = this['url'], k5sag$['loops'] = fxuwzt, k5sag$['startTime'] = deh8yc, k5sag$['play'](), $7kg5['addChannel'](k5sag$)), k5sag$;
    }, hyced8['dispose'] = function () {
      var mobi_ = n5s4['_audioCache'][this['url']];mobi_ && (mobi_['src'] = '', delete n5s4['_audioCache'][this['url']]);
    }, s45qnv(0x0, hyced8, 'duration', function () {
      return this['_sound']['duration'];
    }), n5s4['_createSound'] = function () {
      n5s4['_id']++;var g$k7al = sg$ka['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return g$k7al;
    }, n5s4['_musicAudio'] = null, n5s4['_id'] = 0x0, n5s4['_audioCache'] = {}, n5s4['_null'] = undefined, n5s4;
  }(x6rz0),
      rp9i6 = function (ombj1_) {
    function jy2c(x0z6t) {
      this['_audio'] = null, this['_onEnd'] = null, jy2c['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = x0z6t, this['_onEnd'] = a5$sk['bind'](this['__onEnd'], this), x0z6t['onEnded'](this['_onEnd']);
    }qvsgn(jy2c, 'laya.wx.mini.MiniSoundChannel', ombj1_);var z0x6t = jy2c['prototype'];return z0x6t['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (xtuzf['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, z0x6t['__onNull'] = function () {}, z0x6t['play'] = function () {
      this['isStopped'] = ![], $7kg5['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, z0x6t['stop'] = function () {
      this['isStopped'] = !![], $7kg5['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, z0x6t['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, z0x6t['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], $7kg5['addChannel'](this), this['_audio']['play']();
    }, s45qnv(0x0, z0x6t, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), s45qnv(0x0, z0x6t, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), s45qnv(0x0, z0x6t, 'volume', function () {
      return 0x1;
    }, function (chyj2) {}), jy2c['_null'] = undefined, jy2c;
  }(xw6zt),
      pb_mi1 = function () {
    function cl7() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = sg$ka['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }qvsgn(cl7, 'laya.wx.mini.MiniVideo');var kceld = cl7['prototype'];return kceld['on'] = function (edlc8h, h82ojy, a7gk$l) {
      if (edlc8h == 'loadedmetadata') this['onPlayFunc'] = a7gk$l['bind'](h82ojy), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else edlc8h == 'ended' && (this['onEndedFunC'] = a7gk$l['bind'](h82ojy), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, kceld['onTimeUpdateFunc'] = function ($ake7) {
      this['position'] = $ake7['position'], this['_duration'] = $ake7['duration'];
    }, kceld['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, kceld['onended'] = function (l8cehd, x6r09p) {
      this['onEndedFunC'] = x6r09p['bind'](l8cehd), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, kceld['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, kceld['off'] = function (ftuz3, rz6x0, uxzwft) {
      if (ftuz3 == 'loadedmetadata') this['onPlayFunc'] = uxzwft['bind'](rz6x0), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else ftuz3 == 'ended' && (this['onEndedFunC'] = uxzwft['bind'](rz6x0), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, kceld['load'] = function (w6zxtu) {
      if (!this['videoElement']) return;this['videoElement']['src'] = w6zxtu;
    }, kceld['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, kceld['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, kceld['size'] = function (_i1mp, lck7e) {
      if (!this['videoElement']) return;this['videoElement']['width'] = _i1mp, this['videoElement']['height'] = lck7e;
    }, kceld['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, kceld['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, s45qnv(0x0, kceld, 'duration', function () {
      return this['_duration'];
    }), s45qnv(0x0, kceld, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (dk7le) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = dk7le;
    }), s45qnv(0x0, kceld, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), s45qnv(0x0, kceld, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), s45qnv(0x0, kceld, 'ended', function () {
      return this['videoend'];
    }), s45qnv(0x0, kceld, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (de7$lk) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = de7$lk;
    }), s45qnv(0x0, kceld, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (o1y_2j) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = o1y_2j;
    }), s45qnv(0x0, kceld, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (de8c7) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = de8c7;
    }), s45qnv(0x0, kceld, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), s45qnv(0x0, kceld, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (om_1b) {
      if (!this['videoElement']) return;this['videoElement']['x'] = om_1b;
    }), s45qnv(0x0, kceld, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (d8elhc) {
      if (!this['videoElement']) return;this['videoElement']['y'] = d8elhc;
    }), s45qnv(0x0, kceld, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), s45qnv(0x0, kceld, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (wzuxt) {
      if (!this['videoElement']) return;this['videoElement']['src'] = wzuxt;
    }), s45qnv(0x0, kceld, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (c7ld) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = c7ld;
    }), s45qnv(0x0, kceld, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (lkde7) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = lkde7;
    }), cl7;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ib1mp9 in Laya) {
    var u3fwzt = Laya[ib1mp9];u3fwzt && u3fwzt['__isclass'] && (exports[ib1mp9] = u3fwzt);
  }
});