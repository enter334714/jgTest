var b = wx.$e;
(function (window, document, d5280) {
  var sb06k9 = d5280['un'],
      ks9q = d5280['uns'],
      squ93 = d5280['static'],
      zhrglt = d5280['class'],
      q3inju = d5280['getset'],
      qj$ix = d5280['__newvec'],
      ijqn$ = laya['utils']['Browser'],
      s6u9 = laya['events']['Event'],
      apm7o = laya['events']['EventDispatcher'],
      f_a4v = laya['resource']['HTMLImage'],
      g$xhl = laya['utils']['Handler'],
      tgrhz = laya['display']['Input'],
      lfzyr = laya['net']['Loader'],
      qu9kns = laya['maths']['Matrix'],
      qij3 = laya['renders']['Render'],
      a4_mc7 = laya['utils']['RunDriver'],
      dw580b = laya['media']['Sound'],
      nqksu9 = laya['media']['SoundChannel'],
      _c4a7 = laya['media']['SoundManager'],
      mv74a = laya['display']['Stage'],
      _47vyf = laya['net']['URL'],
      qk9un = laya['utils']['Utils'],
      tl$igx = function () {
    function k6u9() {}return zhrglt(k6u9, 'laya.wx.mini.MiniAdpter'), k6u9['getJson'] = function (zgrlt) {
      return JSON['parse'](zgrlt);
    }, k6u9['init'] = function (i$j3n, txrlhg) {
      i$j3n === void 0x0 && (i$j3n = ![]), txrlhg === void 0x0 && (txrlhg = ![]);if (k6u9['_inited']) return;k6u9['window'] = window;if (k6u9['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;k6u9['_inited'] = !![], k6u9['isZiYu'] = txrlhg, k6u9['isPosMsgYu'] = i$j3n, k6u9['EnvConfig'] = {}, !k6u9['isZiYu'] && (qui3j['setNativeFileDir']('/layaairGame'), qui3j['existDir'](qui3j['fileNativeDir'], g$xhl['create'](k6u9, k6u9['onMkdirCallBack']))), k6u9['window']['focus'] = function () {}, d5280['getUrlPath'] = function () {}, k6u9['window']['logtime'] = function (vfr4yz) {}, k6u9['window']['alertTimeLog'] = function (d5182w) {}, k6u9['window']['resetShareInfo'] = function () {}, k6u9['window']['CanvasRenderingContext2D'] = function () {}, k6u9['window']['CanvasRenderingContext2D']['prototype'] = k6u9['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], k6u9['window']['document']['body']['appendChild'] = function () {}, k6u9['EnvConfig']['pixelRatioInt'] = 0x0, a4_mc7['getPixelRatio'] = k6u9['pixelRatio'], k6u9['_preCreateElement'] = ijqn$['createElement'], ijqn$['createElement'] = k6u9['createElement'], a4_mc7['createShaderCondition'] = k6u9['createShaderCondition'], qk9un['parseXMLFromString'] = k6u9['parseXMLFromString'], tgrhz['_createInputElement'] = lzytr['_createInputElement'], k6u9['EnvConfig']['load'] = lfzyr['prototype']['load'], lfzyr['prototype']['load'] = b08wd5['prototype']['load'], k6u9['isZiYu'] && i$j3n && wx['onMessage'](function (niq$j) {
        niq$j['isLoad'] && (qui3j['ziyuFileData'][niq$j['url']] = niq$j['data']);
      });
    }, k6u9['onMkdirCallBack'] = function (wd052, skn9uq) {
      if (!wd052) qui3j['filesListObj'] = JSON['parse'](skn9uq['data']);
    }, k6u9['pixelRatio'] = function () {
      if (!k6u9['EnvConfig']['pixelRatioInt']) try {
        var k6sb90 = wx['getSystemInfoSync']();return k6u9['EnvConfig']['pixelRatioInt'] = k6sb90['pixelRatio'], k6sb90 = k6sb90, k6sb90['pixelRatio'];
      } catch (v4rzy) {}return k6u9['EnvConfig']['pixelRatioInt'];
    }, k6u9['createElement'] = function (hyzrlt) {
      if (hyzrlt == 'canvas') {
        var i3qnuj;return k6u9['idx'] == 0x1 ? k6u9['isZiYu'] ? (i3qnuj = sharedCanvas, i3qnuj['style'] = {}) : i3qnuj = window['canvas'] : i3qnuj = window['wx']['createCanvas'](), k6u9['idx']++, i3qnuj;
      } else {
        if (hyzrlt == 'textarea' || hyzrlt == 'input') return k6u9['onCreateInput'](hyzrlt);else {
          if (hyzrlt == 'div') {
            var frz4y = k6u9['_preCreateElement'](hyzrlt);return frz4y['contains'] = function (va74_m) {
              return null;
            }, frz4y['removeChild'] = function (zv_y) {}, frz4y;
          } else return k6u9['_preCreateElement'](hyzrlt);
        }
      }
    }, k6u9['onCreateInput'] = function (m7apo) {
      var ylrzth = k6u9['_preCreateElement'](m7apo);return ylrzth['focus'] = lzytr['wxinputFocus'], ylrzth['blur'] = lzytr['wxinputblur'], ylrzth['style'] = {}, ylrzth['value'] = 0x0, ylrzth['parentElement'] = {}, ylrzth['placeholder'] = {}, ylrzth['type'] = {}, ylrzth['setColor'] = function (ghrlt) {}, ylrzth['setType'] = function (_yf4z) {}, ylrzth['setFontFace'] = function (_4vzyf) {}, ylrzth['addEventListener'] = function (gh$lt) {}, ylrzth['contains'] = function (rflh) {
        return null;
      }, ylrzth['removeChild'] = function (yfv4zr) {}, ylrzth;
    }, k6u9['createShaderCondition'] = function (yhrvz) {
      var jgi3x$ = this,
          k6db9 = function () {
        var d5812w = yhrvz;return jgi3x$[yhrvz['replace']('this.', '')];
      };return k6db9;
    }, k6u9['EnvConfig'] = null, k6u9['window'] = null, k6u9['_preCreateElement'] = null, k6u9['_inited'] = ![], k6u9['wxRequest'] = null, k6u9['systemInfo'] = null, k6u9['version'] = '0.0.1', k6u9['isZiYu'] = ![], k6u9['isPosMsgYu'] = ![], k6u9['parseXMLFromString'] = function (gj3$i) {
      var hlgz, tlig$x;gj3$i = gj3$i['replace'](/>\s+</g, '><');try {
        hlgz = new window['Parser']['DOMParser']()['parseFromString'](gj3$i, 'text/xml');
      } catch (m7oc_a) {
        throw '需要引入xml解析库文件';
      }return hlgz;
    }, k6u9['idx'] = 0x1, k6u9;
  }(),
      uq93ns = function () {
    function v7_af4() {}zhrglt(v7_af4, 'laya.wx.mini.MiniImage');var oemacp = v7_af4['prototype'];return oemacp['_loadImage'] = function ($htxlg) {
      var k650 = this,
          htlx = ![];$htxlg['indexOf']('layaNativeDir/') == -0x1 && (htlx = !![], $htxlg = _47vyf['formatURL']($htxlg));if (!qui3j['getFileInfo']($htxlg)) {
        if ($htxlg['indexOf']('http://') != -0x1 || $htxlg['indexOf']('https://') != -0x1) qui3j['downImg']($htxlg, new g$xhl(v7_af4, v7_af4['onDownImgCallBack'], [$htxlg, k650]), $htxlg);else v7_af4['onCreateImage']($htxlg, k650, !![]);
      } else v7_af4['onCreateImage']($htxlg, k650, !htlx);
    }, v7_af4['onDownImgCallBack'] = function (qs3ujn, $3qi, yfz_4) {
      if (!yfz_4) v7_af4['onCreateImage'](qs3ujn, $3qi);else $3qi['onError'](null);
    }, v7_af4['onCreateImage'] = function (nj3qi, fzvyr4, vfy4_) {
      vfy4_ === void 0x0 && (vfy4_ = ![]);var rhyvfz;if (!vfy4_) {
        var aem = qui3j['getFileInfo'](nj3qi),
            $xijq = aem['md5'];rhyvfz = qui3j['getFileNativePath']($xijq);
      } else rhyvfz = nj3qi;if (fzvyr4['imgCache'] == null) fzvyr4['imgCache'] = {};var zgt;function mecpao() {
        zgt['onload'] = null, zgt['onerror'] = null, delete fzvyr4['imgCache'][nj3qi];
      };var xhrlt = function () {
        mecpao(), fzvyr4['onLoaded'](zgt);
      },
          ukns6 = function () {
        mecpao(), fzvyr4['event']('error', 'Load image failed');
      };fzvyr4['_type'] == 'nativeimage' ? (zgt = new ijqn$['window']['Image'](), zgt['crossOrigin'] = '', zgt['onload'] = xhrlt, zgt['onerror'] = ukns6, zgt['src'] = rhyvfz, fzvyr4['imgCache'][nj3qi] = zgt) : new f_a4v['create'](rhyvfz, { 'onload': xhrlt, 'onerror': ukns6, 'onCreate': function (sknq9u) {
          zgt = sknq9u, fzvyr4['imgCache'][nj3qi] = sknq9u;
        } });
    }, v7_af4;
  }(),
      lzytr = function () {
    function v7a() {}return zhrglt(v7a, 'laya.wx.mini.MiniInput'), v7a['_createInputElement'] = function () {
      tgrhz['_initInput'](tgrhz['area'] = ijqn$['createElement']('textarea')), tgrhz['_initInput'](tgrhz['input'] = ijqn$['createElement']('input')), tgrhz['inputContainer'] = ijqn$['createElement']('div'), tgrhz['inputContainer']['style']['position'] = 'absolute', tgrhz['inputContainer']['style']['zIndex'] = 0x186a0, ijqn$['container']['appendChild'](tgrhz['inputContainer']), tgrhz['inputContainer']['setPos'] = function (va_m4, $3igxj) {
        tgrhz['inputContainer']['style']['left'] = va_m4 + 'px', tgrhz['inputContainer']['style']['top'] = $3igxj + 'px';
      }, d5280['stage']['on']('resize', null, v7a['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (gzhrl) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), _c4a7['_soundClass'] = _v74af, _c4a7['_musicClass'] = _v74af;
    }, v7a['_onStageResize'] = function () {
      var vyrfh = d5280['stage']['_canvasTransform']['identity']();vyrfh['scale'](ijqn$['width'] / qij3['canvas']['width'] / a4_mc7['getPixelRatio'](), ijqn$['height'] / qij3['canvas']['height'] / a4_mc7['getPixelRatio']());
    }, v7a['wxinputFocus'] = function (v4f7y) {
      var qk9nsu = tgrhz['inputElement']['target'];if (qk9nsu && !qk9nsu['editable']) return;tl$igx['window']['wx']['offKeyboardConfirm'](), tl$igx['window']['wx']['offKeyboardInput'](), tl$igx['window']['wx']['showKeyboard']({ 'defaultValue': qk9nsu['text'], 'maxLength': qk9nsu['maxChars'], 'multiple': qk9nsu['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (n$3qji) {}, 'fail': function (opamc) {} }), tl$igx['window']['wx']['onKeyboardConfirm'](function (snk9qu) {
        var mav74_ = snk9qu ? snk9qu['value'] : '';qk9nsu['text'] = mav74_, qk9nsu['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), tl$igx['window']['wx']['onKeyboardInput'](function (ocaepm) {
        var lztg = ocaepm ? ocaepm['value'] : '';if (!qk9nsu['multiline']) {
          if (lztg['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }qk9nsu['text'] = lztg, qk9nsu['event']('input');
      });
    }, v7a['inputEnter'] = function () {
      tgrhz['inputElement']['target']['focus'] = ![];
    }, v7a['wxinputblur'] = function () {
      v7a['hideKeyboard']();
    }, v7a['hideKeyboard'] = function () {
      tl$igx['window']['wx']['offKeyboardConfirm'](), tl$igx['window']['wx']['offKeyboardInput'](), tl$igx['window']['wx']['hideKeyboard']({ 'success': function (_avm74) {
          console['log']('隐藏键盘');
        }, 'fail': function (d5802) {
          console['log']('隐藏键盘出错:' + (d5802 ? d5802['errMsg'] : ''));
        } });
    }, v7a;
  }(),
      b08wd5 = function () {
    function d28w05() {}zhrglt(d28w05, 'laya.wx.mini.MiniLoader');var vzf4_y = d28w05['prototype'];return vzf4_y['load'] = function (ji3g$x, ijnuq3, tlrz, a7_4m, yzlrt) {
      tlrz === void 0x0 && (tlrz = !![]), yzlrt === void 0x0 && (yzlrt = ![]);var u3nsqj = this;u3nsqj['_url'] = ji3g$x;if (ji3g$x['indexOf']('data:image') === 0x0) u3nsqj['_type'] = ijnuq3 = 'image';else u3nsqj['_type'] = ijnuq3 || (ijnuq3 = u3nsqj['getTypeFromUrl'](ji3g$x));u3nsqj['_cache'] = tlrz, u3nsqj['_data'] = null;var x$gh = 'ascii';if (ji3g$x['indexOf']('.fnt') != -0x1) x$gh = 'utf8';else ijnuq3 == 'arraybuffer' && (x$gh = '');;var vhrfz = qk9un['getFileExtension'](ji3g$x);if (d28w05['_fileTypeArr']['indexOf'](vhrfz) != -0x1) tl$igx['EnvConfig']['load']['call'](this, ji3g$x, ijnuq3, tlrz, a7_4m, yzlrt);else {
        if (!qui3j['getFileInfo'](ji3g$x)) {
          if (ji3g$x['indexOf']('layaNativeDir/') != -0x1) {
            if (tl$igx['isZiYu']) {
              var fv4z_ = qui3j['ziyuFileData'][ji3g$x];u3nsqj['onLoaded'](fv4z_);return;
            } else {
              cosnole['log']('read read'), qui3j['read'](ji3g$x, x$gh, new g$xhl(d28w05, d28w05['onReadNativeCallBack'], [x$gh, ji3g$x, ijnuq3, tlrz, a7_4m, yzlrt, u3nsqj]));return;
            }
          }if (_47vyf['rootPath'] == '') var ijq$3x = ji3g$x;else ijq$3x = ji3g$x['split'](_47vyf['rootPath'])[0x0];ji3g$x['indexOf']('http://') != -0x1 || ji3g$x['indexOf']('https://') != -0x1 ? tl$igx['EnvConfig']['load']['call'](u3nsqj, ji3g$x, ijnuq3, tlrz, a7_4m, yzlrt) : qui3j['readFile'](ijq$3x, x$gh, new g$xhl(d28w05, d28w05['onReadNativeCallBack'], [x$gh, ji3g$x, ijnuq3, tlrz, a7_4m, yzlrt, u3nsqj]), ji3g$x);
        } else tl$igx['EnvConfig']['load']['call'](this, ji3g$x, ijnuq3, tlrz, a7_4m, yzlrt);
      }
    }, vzf4_y['resMgrLoad'] = function (q$nj3i, uk96ns, k90d6b, unqj3i, rhzglt, un3q9, acoemp) {
      k90d6b === void 0x0 && (k90d6b = 0x0), unqj3i === void 0x0 && (unqj3i = ![]), rhzglt === void 0x0 && (rhzglt = ![]), un3q9 === void 0x0 && (un3q9 = 0x0), acoemp === void 0x0 && (acoemp = 0x3), q$nj3i['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', q$nj3i), tl$igx['EnvConfig']['resMgrLoad'](q$nj3i, (s9ukn, ghtlx$, hzfrv) => {
        d28w05['prototype']['resMgrLoadCallBack'](s9ukn, ghtlx$, hzfrv, uk96ns);
      }, k90d6b, unqj3i, rhzglt, un3q9, acoemp);
    }, vzf4_y['resMgrLoadCallBack'] = function (niq3$, b906, hrtx, m4_ac) {
      console['log']('buff:::', niq3$, hrtx, qui3j['fileNativeDir'] + '///' + qui3j['fileListName']), m4_ac(niq3$, b906, hrtx);
    }, vzf4_y['clearRes'] = function (gj$x3, ij3gx) {
      ij3gx === void 0x0 && (ij3gx = ![]);var vf4y7 = this;vf4y7['clearRes'](gj$x3, ij3gx);var k09sb6 = qui3j['getFileInfo'](gj$x3);if (k09sb6 && (gj$x3['indexOf']('http://') != -0x1 || gj$x3['indexOf']('https://') != -0x1)) {
        var w850d2 = k09sb6['md5'],
            lrhztg = qui3j['getFileNativePath'](w850d2);qui3j['remove'](lrhztg);
      }
    }, d28w05['onReadNativeCallBack'] = function (va_7m, rzfvhy, ig$xtl, c7m4_a, q3inu, s9bku, b65dk0, x$jig, d205w) {
      c7m4_a === void 0x0 && (c7m4_a = !![]), s9bku === void 0x0 && (s9bku = ![]), x$jig === void 0x0 && (x$jig = 0x0);if (!x$jig) {
        var dk6b09;if (ig$xtl == 'json' || ig$xtl == 'atlas') dk6b09 = tl$igx['getJson'](d205w['data']);else ig$xtl == 'xml' ? dk6b09 = qk9un['parseXMLFromString'](d205w['data']) : dk6b09 = d205w['data'];b65dk0['onLoaded'](dk6b09), !tl$igx['isZiYu'] && tl$igx['isPosMsgYu'] && ig$xtl != 'arraybuffer' && wx['postMessage']({ 'url': rzfvhy, 'data': dk6b09, 'isLoad': !![] });
      } else x$jig == 0x1 && tl$igx['EnvConfig']['load']['call'](b65dk0, rzfvhy, ig$xtl, c7m4_a, q3inu, s9bku);
    }, squ93(d28w05, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), d28w05;
  }(),
      qui3j = function (fyz4v_) {
    function gl$ix() {
      gl$ix['__super']['call'](this);;
    }return zhrglt(gl$ix, 'laya.wx.mini.MiniFileMgr', fyz4v_), gl$ix['isLoadFile'] = function (w0d28) {
      return gl$ix['_fileTypeArr']['indexOf'](w0d28) != -0x1 ? !![] : ![];
    }, gl$ix['getFileInfo'] = function (fv4y7) {
      var _vy7f = fv4y7['split']('?')[0x0],
          y74_ = gl$ix['filesListObj'][_vy7f];if (y74_ == null) return null;else return y74_;return null;
    }, gl$ix['onFileUpdate'] = function (jx$q3, in3quj) {
      var db5680 = jx$q3['split']('/'),
          paoec = db5680[db5680['length'] - 0x1],
          zhrf = gl$ix['getFileInfo'](in3quj);if (zhrf == null) gl$ix['onSaveFile'](in3quj, paoec);else {
        if (zhrf['readyUrl'] != in3quj) gl$ix['remove'](paoec, in3quj);
      }
    }, gl$ix['exits'] = function (zthgl, xlrh) {
      var lgtrzh = gl$ix['getFileNativePath'](zthgl);gl$ix['fs']['getFileInfo']({ 'filePath': lgtrzh, 'success': function (yfzhvr) {
          xlrh != null && xlrh['runWith']([0x0, yfzhvr]);
        }, 'fail': function (av7_f) {
          xlrh != null && xlrh['runWith']([0x1, av7_f]);
        } });
    }, gl$ix['read'] = function (mcapo7, qsu39n, i3xqj, b96k0) {
      qsu39n === void 0x0 && (qsu39n = 'ascill'), b96k0 === void 0x0 && (b96k0 = '');var htlzry;b96k0 != '' ? htlzry = gl$ix['getFileNativePath'](mcapo7) : htlzry = mcapo7, gl$ix['fs']['readFile']({ 'filePath': htlzry, 'encoding': qsu39n, 'success': function (xilt$) {
          i3xqj != null && i3xqj['runWith']([0x0, xilt$]);
        }, 'fail': function (yrfhvz) {
          if (yrfhvz && b96k0 != '') gl$ix['down'](b96k0, qsu39n, i3xqj, b96k0);else i3xqj != null && i3xqj['runWith']([0x1]);
        } });
    }, gl$ix['readNativeFile'] = function (fzryl, ub6k9) {
      gl$ix['fs']['readFile']({ 'filePath': fzryl, 'encoding': '', 'success': function (s6kb09) {
          ub6k9 != null && ub6k9['runWith']([0x0]);
        }, 'fail': function (k9nusq) {
          ub6k9 != null && ub6k9['runWith']([0x1]);
        } });
    }, gl$ix['down'] = function (m_74va, s96buk, coame, g$htlx) {
      s96buk === void 0x0 && (s96buk = 'ascill'), g$htlx === void 0x0 && (g$htlx = '');var vfy47 = gl$ix['getFileNativePath'](g$htlx),
          _oam = gl$ix['wxdown']({ 'url': m_74va, 'filePath': vfy47, 'success': function (grxhlt) {
          if (grxhlt['statusCode'] === 0xc8) gl$ix['readFile'](grxhlt['filePath'], s96buk, coame, g$htlx);
        }, 'fail': function (vyf4_z) {
          coame != null && coame['runWith']([0x1, vyf4_z]);
        } });_oam['onProgressUpdate'](function (c74am_) {
        coame != null && coame['runWith']([0x2, c74am_['progress']]);
      });
    }, gl$ix['readFile'] = function (k0s6b, y4_vz, vfrz4, ac7_om) {
      y4_vz === void 0x0 && (y4_vz = 'ascill'), ac7_om === void 0x0 && (ac7_om = ''), gl$ix['fs']['readFile']({ 'filePath': k0s6b, 'encoding': y4_vz, 'success': function (zthrl) {
          if (k0s6b['indexOf']('http://') != -0x1 || k0s6b['indexOf']('https://') != -0x1) gl$ix['onFileUpdate'](k0s6b, ac7_om);vfrz4 != null && vfrz4['runWith']([0x0, zthrl]);
        }, 'fail': function (pc7oa) {
          if (pc7oa) vfrz4 != null && vfrz4['runWith']([0x1, pc7oa]);
        } });
    }, gl$ix['downImg'] = function (thgx, zryhf, ytzr) {
      ytzr === void 0x0 && (ytzr = '');var buk6s9 = gl$ix['wxdown']({ 'url': thgx, 'success': function (fzy4_v) {
          fzy4_v['statusCode'] === 0xc8 && gl$ix['copyFile'](fzy4_v['tempFilePath'], ytzr, zryhf);
        }, 'fail': function (nkusq9) {
          zryhf != null && zryhf['runWith']([0x1, nkusq9]);
        } });
    }, gl$ix['copyFile'] = function (_zf4yv, qsu9kn, k9bus6) {
      var j3$qi = _zf4yv['split']('/'),
          vyz_4 = j3$qi[j3$qi['length'] - 0x1],
          v7a_4f = qsu9kn['split']('?')[0x0],
          yfrlh = gl$ix['getFileInfo'](qsu9kn),
          pom7 = gl$ix['getFileNativePath'](vyz_4);gl$ix['fs']['copyFile']({ 'srcPath': _zf4yv, 'destPath': pom7, 'success': function (yrhzlf) {
          if (!yfrlh) gl$ix['onSaveFile'](qsu9kn, vyz_4), k9bus6 != null && k9bus6['runWith']([0x0]);else {
            if (yfrlh['readyUrl'] != qsu9kn) gl$ix['remove'](vyz_4, qsu9kn, k9bus6);
          }
        }, 'fail': function (dw1) {
          k9bus6 != null && k9bus6['runWith']([0x1, dw1]);
        } });
    }, gl$ix['getFileNativePath'] = function (vfr4) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vfr4;
    }, gl$ix['remove'] = function (meapo, nq3ji$, $3gj) {
      nq3ji$ === void 0x0 && (nq3ji$ = '');var k6u9n = gl$ix['getFileInfo'](nq3ji$),
          unjsq3 = gl$ix['getFileNativePath'](k6u9n['md5']);d5280['loader']['clearRes'](k6u9n['readyUrl']), gl$ix['fs']['unlink']({ 'filePath': unjsq3, 'success': function (snj) {
          if (nq3ji$ != '') gl$ix['onSaveFile'](nq3ji$, meapo);$3gj != null && $3gj['runWith']([0x0]);
        }, 'fail': function (zgtlr) {} });
    }, gl$ix['onSaveFile'] = function (nj3i, d05w28) {
      var zlrhtg = nj3i['split']('?')[0x0];gl$ix['filesListObj'][zlrhtg] = { 'md5': d05w28, 'readyUrl': nj3i }, gl$ix['fs']['writeFile']({ 'filePath': gl$ix['fileNativeDir'] + '/' + gl$ix['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gl$ix['filesListObj']), 'success': function (z_vy4f) {
          console['log']('写入测试测试成功：', z_vy4f);
        }, 'fail': function (gijx) {
          console['log']('写入测试测试失败：', gijx);
        } });
    }, gl$ix['existDir'] = function (ocpam7, cpeaom) {
      gl$ix['fs']['mkdir']({ 'dirPath': ocpam7, 'success': function (b085wd) {
          cpeaom != null && cpeaom['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hylfrz) {
          if (hylfrz['errMsg']['indexOf']('file already exists') != -0x1) gl$ix['readSync'](gl$ix['fileListName'], 'utf8', cpeaom);else cpeaom != null && cpeaom['runWith']([0x1, hylfrz]);
        } });
    }, gl$ix['readSync'] = function (pmaeo, zvhf, unqjs3, a7mco_) {
      zvhf === void 0x0 && (zvhf = 'ascill'), a7mco_ === void 0x0 && (a7mco_ = '');var i$qn3 = gl$ix['getFileNativePath'](pmaeo),
          c_m7oa;try {
        c_m7oa = gl$ix['fs']['readFileSync'](i$qn3), unqjs3 != null && unqjs3['runWith']([0x0, { 'data': c_m7oa }]);
      } catch (cm7a_4) {
        unqjs3 != null && unqjs3['runWith']([0x1]);
      }
    }, gl$ix['readCache'] = function () {}, gl$ix['writeCache'] = function (v4a_) {
      var jig3x$ = readyUrl['split']('?')[0x0];gl$ix['filesListObj'][jig3x$] = { 'md5': md5Name, 'readyUrl': readyUrl }, gl$ix['fs']['writeFile']({ 'filePath': gl$ix['fileNativeDir'] + '/' + gl$ix['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gl$ix['filesListObj']), 'success': function (w52d80) {}, 'fail': function (tgxlr) {} });
    }, gl$ix['setNativeFileDir'] = function (snk6u9) {
      gl$ix['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + snk6u9;
    }, gl$ix['filesListObj'] = {}, gl$ix['fileNativeDir'] = null, gl$ix['fileListName'] = 'layaairfiles.txt', gl$ix['ziyuFileData'] = {}, squ93(gl$ix, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), gl$ix;
  }(apm7o),
      _v74af = function (h$gxl) {
    function ocamp() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ocamp['__super']['call'](this), this['_sound'] = ocamp['_createSound']();
    }zhrglt(ocamp, 'laya.wx.mini.MiniSound', h$gxl);var oae = ocamp['prototype'];return oae['load'] = function (sb6k9) {
      var cp7aom = this;sb6k9 = _47vyf['formatURL'](sb6k9), this['url'] = sb6k9;if (ocamp['_audioCache'][sb6k9]) {
        this['event']('complete');return;
      }function nuq9sk() {
        if (ocamp['_null'] != undefined) cp7aom['_sound']['onCanplay'](ocamp['_null']), cp7aom['_sound']['onError'](ocamp['_null']);else try {
          cp7aom['_sound']['onCanplay'](null), cp7aom['_sound']['onError'](null), ocamp['_null'] = null;
        } catch (b608d) {
          console['warn']('[wxmini] _clearSound:' + b608d), cp7aom['_sound']['onCanplay'](j3$xg), cp7aom['_sound']['onError'](j3$xg), ocamp['_null'] = j3$xg;
        }
      }function $jnq() {
        nuq9sk(), nqi$j['loaded'] = !![], nqi$j['event']('complete'), ocamp['_audioCache'][nqi$j['url']] = nqi$j;
      }function xgi$jt(uq9kn) {
        console['error']('errCode=' + uq9kn['errCode'] + '  errMsg=' + uq9kn['errMsg']), nuq9sk(), nqi$j['event']('error');
      }function j3$xg() {}this['_sound']['onCanplay']($jnq), this['_sound']['onError'](xgi$jt), this['_sound']['src'] = sb6k9;var nqi$j = this;
    }, oae['play'] = function (ij$3q, uinq3) {
      ij$3q === void 0x0 && (ij$3q = 0x0), uinq3 === void 0x0 && (uinq3 = 0x0);var iq3xj;if (this['url'] == _c4a7['_tMusic']) {
        if (!ocamp['_musicAudio']) ocamp['_musicAudio'] = ocamp['_createSound']();iq3xj = ocamp['_musicAudio'];
      } else iq3xj = ocamp['_createSound']();iq3xj['src'] = this['url'];var lrfz = new x3ji(iq3xj);return lrfz['url'] = this['url'], lrfz['loops'] = uinq3, lrfz['startTime'] = ij$3q, lrfz['play'](), _c4a7['addChannel'](lrfz), lrfz;
    }, oae['dispose'] = function () {
      var qs9n3 = ocamp['_audioCache'][this['url']];qs9n3 && (qs9n3['src'] = '', delete ocamp['_audioCache'][this['url']]);
    }, q3inju(0x0, oae, 'duration', function () {
      return this['_sound']['duration'];
    }), ocamp['_createSound'] = function () {
      return ocamp['_id']++, tl$igx['window']['wx']['createInnerAudioContext']();
    }, ocamp['_musicAudio'] = null, ocamp['_id'] = 0x0, ocamp['_audioCache'] = {}, ocamp['_null'] = undefined, ocamp;
  }(apm7o),
      x3ji = function (us6kn) {
    function jx$3qi(cpom) {
      this['_audio'] = null, this['_onEnd'] = null, jx$3qi['__super']['call'](this), this['_audio'] = cpom, this['_onEnd'] = qk9un['bind'](this['__onEnd'], this), cpom['onEnded'](this['_onEnd']);
    }zhrglt(jx$3qi, 'laya.wx.mini.MiniSoundChannel', us6kn);var qu9nsk = jx$3qi['prototype'];return qu9nsk['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (d5280['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, qu9nsk['__onNull'] = function () {}, qu9nsk['play'] = function () {
      this['isStopped'] = ![], _c4a7['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, qu9nsk['stop'] = function () {
      this['isStopped'] = !![], _c4a7['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (jx$3qi['_null'] != undefined) this['_audio']['onEnded'](jx$3qi['_null']);else try {
        this['_audio']['onEnded'](null), jx$3qi['_null'] = null;
      } catch (am_74) {
        console['warn']('[wxmini] stop:' + am_74), this['_audio']['onEnded'](qk9un['bind'](this['__onNull'], this)), jx$3qi['_null'] = qk9un['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, qu9nsk['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, qu9nsk['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], _c4a7['addChannel'](this), this['_audio']['play']();
    }, q3inju(0x0, qu9nsk, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), q3inju(0x0, qu9nsk, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), q3inju(0x0, qu9nsk, 'volume', function () {
      return 0x1;
    }, function (v_a) {}), jx$3qi['_null'] = undefined, jx$3qi;
  }(nqksu9);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var b850dw in Laya) {
    var apmeoc = Laya[b850dw];apmeoc && apmeoc['__isclass'] && (exports[b850dw] = apmeoc);
  }
});