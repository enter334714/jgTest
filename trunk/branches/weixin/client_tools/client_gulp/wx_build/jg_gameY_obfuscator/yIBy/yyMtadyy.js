var a = wx.$y;
(function (window, document, w4tjdh) {
  var fjh4_ = w4tjdh['un'],
      a1u5md = w4tjdh['uns'],
      ki$gn = w4tjdh['static'],
      n2cs9 = w4tjdh['class'],
      dwh4jt = w4tjdh['getset'],
      ya603v = w4tjdh['__newvec'],
      s89ckl = laya['utils']['Browser'],
      vy0zr3 = laya['events']['Event'],
      u4wtd = laya['events']['EventDispatcher'],
      f4_ohj = laya['resource']['HTMLImage'],
      $2k9nc = laya['utils']['Handler'],
      utd1w = laya['display']['Input'],
      fohj7_ = laya['net']['Loader'],
      oh4wfj = laya['maths']['Matrix'],
      mud51t = laya['renders']['Render'],
      hd1w = laya['utils']['RunDriver'],
      kgn$29 = laya['media']['Sound'],
      w4dht1 = laya['media']['SoundChannel'],
      _ofh7j = laya['media']['SoundManager'],
      ad51um = laya['display']['Stage'],
      m15dua = laya['net']['URL'],
      tudw1m = laya['utils']['Utils'],
      _fs = function () {
    function v0a6() {}return n2cs9(v0a6, 'laya.wx.mini.MiniAdpter'), v0a6['getJson'] = function (wd14ut) {
      return JSON['parse'](wd14ut);
    }, v0a6['init'] = function (mda51, u36a5) {
      mda51 === void 0x0 && (mda51 = ![]), u36a5 === void 0x0 && (u36a5 = ![]);if (v0a6['_inited']) return;v0a6['window'] = window;if (v0a6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;v0a6['_inited'] = !![], v0a6['isZiYu'] = u36a5, v0a6['isPosMsgYu'] = mda51, v0a6['EnvConfig'] = {}, !v0a6['isZiYu'] && (cksn92['setNativeFileDir']('/layaairGame'), cksn92['existDir'](cksn92['fileNativeDir'], $2k9nc['create'](v0a6, v0a6['onMkdirCallBack']))), v0a6['window']['focus'] = function () {}, w4tjdh['getUrlPath'] = function () {}, v0a6['window']['logtime'] = function (_ofh4) {}, v0a6['window']['alertTimeLog'] = function (duwmt1) {}, v0a6['window']['resetShareInfo'] = function () {}, v0a6['window']['CanvasRenderingContext2D'] = function () {}, v0a6['window']['CanvasRenderingContext2D']['prototype'] = v0a6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], v0a6['window']['document']['body']['appendChild'] = function () {}, v0a6['EnvConfig']['pixelRatioInt'] = 0x0, hd1w['getPixelRatio'] = v0a6['pixelRatio'], v0a6['_preCreateElement'] = s89ckl['createElement'], s89ckl['createElement'] = v0a6['createElement'], hd1w['createShaderCondition'] = v0a6['createShaderCondition'], tudw1m['parseXMLFromString'] = v0a6['parseXMLFromString'], utd1w['_createInputElement'] = x0zeyr['_createInputElement'], v0a6['EnvConfig']['load'] = fohj7_['prototype']['load'], fohj7_['prototype']['load'] = ze0xr['prototype']['load'], v0a6['isZiYu'] && mda51 && wx['onMessage'](function (h7j) {
        h7j['isLoad'] && (cksn92['ziyuFileData'][h7j['url']] = h7j['data']);
      });
    }, v0a6['onMkdirCallBack'] = function (s78c9, j_fho) {
      if (!s78c9) cksn92['filesListObj'] = JSON['parse'](j_fho['data']);
    }, v0a6['pixelRatio'] = function () {
      if (!v0a6['EnvConfig']['pixelRatioInt']) try {
        var c8ls97 = wx['getSystemInfoSync']();return v0a6['EnvConfig']['pixelRatioInt'] = c8ls97['pixelRatio'], c8ls97 = c8ls97, c8ls97['pixelRatio'];
      } catch (v60ay) {}return v0a6['EnvConfig']['pixelRatioInt'];
    }, v0a6['createElement'] = function (t4wud) {
      if (t4wud == 'canvas') {
        var t1h4dw;return v0a6['idx'] == 0x1 ? v0a6['isZiYu'] ? (t1h4dw = sharedCanvas, t1h4dw['style'] = {}) : t1h4dw = window['canvas'] : t1h4dw = window['wx']['createCanvas'](), v0a6['idx']++, t1h4dw;
      } else {
        if (t4wud == 'textarea' || t4wud == 'input') return v0a6['onCreateInput'](t4wud);else {
          if (t4wud == 'div') {
            var cs9k8 = v0a6['_preCreateElement'](t4wud);return cs9k8['contains'] = function (h_jfo7) {
              return null;
            }, cs9k8['removeChild'] = function (i2kng$) {}, cs9k8;
          } else return v0a6['_preCreateElement'](t4wud);
        }
      }
    }, v0a6['onCreateInput'] = function (ls_78f) {
      var udt51 = v0a6['_preCreateElement'](ls_78f);return udt51['focus'] = x0zeyr['wxinputFocus'], udt51['blur'] = x0zeyr['wxinputblur'], udt51['style'] = {}, udt51['value'] = 0x0, udt51['parentElement'] = {}, udt51['placeholder'] = {}, udt51['type'] = {}, udt51['setColor'] = function (_l7fs) {}, udt51['setType'] = function ($9nkg2) {}, udt51['setFontFace'] = function (u5) {}, udt51['addEventListener'] = function (mu5a1d) {}, udt51['contains'] = function (k$2i) {
        return null;
      }, udt51['removeChild'] = function (f8l7) {}, udt51;
    }, v0a6['createShaderCondition'] = function (z0vy) {
      var g$n29 = this,
          lf87s = function () {
        var c9k$2n = z0vy;return g$n29[z0vy['replace']('this.', '')];
      };return lf87s;
    }, v0a6['EnvConfig'] = null, v0a6['window'] = null, v0a6['_preCreateElement'] = null, v0a6['_inited'] = ![], v0a6['wxRequest'] = null, v0a6['systemInfo'] = null, v0a6['version'] = '0.0.1', v0a6['isZiYu'] = ![], v0a6['isPosMsgYu'] = ![], v0a6['parseXMLFromString'] = function (ma51u) {
      var l7sf8_, h4t1wd;ma51u = ma51u['replace'](/>\s+</g, '><');try {
        l7sf8_ = new window['Parser']['DOMParser']()['parseFromString'](ma51u, 'text/xml');
      } catch (nc92ks) {
        throw '需要引入xml解析库文件';
      }return l7sf8_;
    }, v0a6['idx'] = 0x1, v0a6;
  }(),
      r30yz = function () {
    function _lf7() {}n2cs9(_lf7, 'laya.wx.mini.MiniImage');var fl8s_ = _lf7['prototype'];return fl8s_['_loadImage'] = function (l7fs) {
      var tm51 = this,
          ofwh4j = ![];l7fs['indexOf']('layaNativeDir/') == -0x1 && (ofwh4j = !![], l7fs = m15dua['formatURL'](l7fs));if (!cksn92['getFileInfo'](l7fs)) {
        if (l7fs['indexOf']('http://') != -0x1 || l7fs['indexOf']('https://') != -0x1) cksn92['downImg'](l7fs, new $2k9nc(_lf7, _lf7['onDownImgCallBack'], [l7fs, tm51]), l7fs);else _lf7['onCreateImage'](l7fs, tm51, !![]);
      } else _lf7['onCreateImage'](l7fs, tm51, !ofwh4j);
    }, _lf7['onDownImgCallBack'] = function (ojw4t, y3zr, hj_4o) {
      if (!hj_4o) _lf7['onCreateImage'](ojw4t, y3zr);else y3zr['onError'](null);
    }, _lf7['onCreateImage'] = function (i$npg, n$ki2, t4jhow) {
      t4jhow === void 0x0 && (t4jhow = ![]);var wmdut;if (!t4jhow) {
        var u4dwt1 = cksn92['getFileInfo'](i$npg),
            j4owhf = u4dwt1['md5'];wmdut = cksn92['getFileNativePath'](j4owhf);
      } else wmdut = i$npg;if (n$ki2['imgCache'] == null) n$ki2['imgCache'] = {};var w1u;function $qi2gn() {
        w1u['onload'] = null, w1u['onerror'] = null, delete n$ki2['imgCache'][i$npg];
      };var wmtd1u = function () {
        $qi2gn(), n$ki2['onLoaded'](w1u);
      },
          qg$pni = function () {
        $qi2gn(), n$ki2['event']('error', 'Load image failed');
      };n$ki2['_type'] == 'nativeimage' ? (w1u = new s89ckl['window']['Image'](), w1u['crossOrigin'] = '', w1u['onload'] = wmtd1u, w1u['onerror'] = qg$pni, w1u['src'] = wmdut, n$ki2['imgCache'][i$npg] = w1u) : new f4_ohj['create'](wmdut, { 'onload': wmtd1u, 'onerror': qg$pni, 'onCreate': function (v356) {
          w1u = v356, n$ki2['imgCache'][i$npg] = v356;
        } });
    }, _lf7;
  }(),
      x0zeyr = function () {
    function kc2n9() {}return n2cs9(kc2n9, 'laya.wx.mini.MiniInput'), kc2n9['_createInputElement'] = function () {
      utd1w['_initInput'](utd1w['area'] = s89ckl['createElement']('textarea')), utd1w['_initInput'](utd1w['input'] = s89ckl['createElement']('input')), utd1w['inputContainer'] = s89ckl['createElement']('div'), utd1w['inputContainer']['style']['position'] = 'absolute', utd1w['inputContainer']['style']['zIndex'] = 0x186a0, s89ckl['container']['appendChild'](utd1w['inputContainer']), utd1w['inputContainer']['setPos'] = function ($9ng2k, c29k$) {
        utd1w['inputContainer']['style']['left'] = $9ng2k + 'px', utd1w['inputContainer']['style']['top'] = c29k$ + 'px';
      }, w4tjdh['stage']['on']('resize', null, kc2n9['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (mut1wd) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), _ofh7j['_soundClass'] = d1w4tu, _ofh7j['_musicClass'] = d1w4tu, window['_videoClass'] = g92$kn;
    }, kc2n9['_onStageResize'] = function () {
      var o_lf7 = w4tjdh['stage']['_canvasTransform']['identity']();o_lf7['scale'](s89ckl['width'] / mud51t['canvas']['width'] / hd1w['getPixelRatio'](), s89ckl['height'] / mud51t['canvas']['height'] / hd1w['getPixelRatio']());
    }, kc2n9['wxinputFocus'] = function (am635) {
      var jfw = utd1w['inputElement']['target'];if (jfw && !jfw['editable']) return;_fs['window']['wx']['offKeyboardConfirm'](), _fs['window']['wx']['offKeyboardInput'](), _fs['window']['wx']['showKeyboard']({ 'defaultValue': jfw['text'], 'maxLength': jfw['maxChars'], 'multiple': jfw['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (qg$in) {}, 'fail': function (l798c) {} }), _fs['window']['wx']['onKeyboardConfirm'](function (va6y03) {
        var i$n2k = va6y03 ? va6y03['value'] : '';jfw['text'] = i$n2k, jfw['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _fs['window']['wx']['onKeyboardInput'](function (va63m5) {
        var hfw4oj = va63m5 ? va63m5['value'] : '';if (!jfw['multiline']) {
          if (hfw4oj['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }jfw['text'] = hfw4oj, jfw['event']('input');
      });
    }, kc2n9['inputEnter'] = function () {
      utd1w['inputElement']['target']['focus'] = ![];
    }, kc2n9['wxinputblur'] = function () {
      kc2n9['hideKeyboard']();
    }, kc2n9['hideKeyboard'] = function () {
      _fs['window']['wx']['offKeyboardConfirm'](), _fs['window']['wx']['offKeyboardInput'](), _fs['window']['wx']['hideKeyboard']({ 'success': function (v03yrz) {
          console['log']('隐藏键盘');
        }, 'fail': function (t1u4wd) {
          console['log']('隐藏键盘出错:' + (t1u4wd ? t1u4wd['errMsg'] : ''));
        } });
    }, kc2n9;
  }(),
      ze0xr = function () {
    function u1mdt() {}n2cs9(u1mdt, 'laya.wx.mini.MiniLoader');var t4ud1 = u1mdt['prototype'];return t4ud1['load'] = function (xy0r, mtw1u, a6m53, slc9, yrexz0) {
      a6m53 === void 0x0 && (a6m53 = !![]), yrexz0 === void 0x0 && (yrexz0 = ![]);var c$2kn = this;c$2kn['_url'] = xy0r;if (xy0r['indexOf']('data:image') === 0x0) c$2kn['_type'] = mtw1u = 'image';else c$2kn['_type'] = mtw1u || (mtw1u = c$2kn['getTypeFromUrl'](xy0r));c$2kn['_cache'] = a6m53, c$2kn['_data'] = null;var pg$qin = 'ascii';if (xy0r['indexOf']('.fnt') != -0x1) pg$qin = 'utf8';else mtw1u == 'arraybuffer' && (pg$qin = '');;var n9$k2c = tudw1m['getFileExtension'](xy0r);if (u1mdt['_fileTypeArr']['indexOf'](n9$k2c) != -0x1) _fs['EnvConfig']['load']['call'](this, xy0r, mtw1u, a6m53, slc9, yrexz0);else {
        if (!cksn92['getFileInfo'](xy0r)) {
          if (xy0r['indexOf']('layaNativeDir/') != -0x1) {
            if (_fs['isZiYu']) {
              var sc29l = cksn92['ziyuFileData'][xy0r];c$2kn['onLoaded'](sc29l);return;
            } else {
              cosnole['log']('read read'), cksn92['read'](xy0r, pg$qin, new $2k9nc(u1mdt, u1mdt['onReadNativeCallBack'], [pg$qin, xy0r, mtw1u, a6m53, slc9, yrexz0, c$2kn]));return;
            }
          }if (m15dua['rootPath'] == '') var gi$2 = xy0r;else gi$2 = xy0r['split'](m15dua['rootPath'])[0x0];xy0r['indexOf']('http://') != -0x1 || xy0r['indexOf']('https://') != -0x1 ? _fs['EnvConfig']['load']['call'](c$2kn, xy0r, mtw1u, a6m53, slc9, yrexz0) : cksn92['readFile'](gi$2, pg$qin, new $2k9nc(u1mdt, u1mdt['onReadNativeCallBack'], [pg$qin, xy0r, mtw1u, a6m53, slc9, yrexz0, c$2kn]), xy0r);
        } else _fs['EnvConfig']['load']['call'](this, xy0r, mtw1u, a6m53, slc9, yrexz0);
      }
    }, t4ud1['resMgrLoad'] = function (k8c9, h4_fo, $kn9c, ay6v30, c$9, rv603, s8cl9k) {
      $kn9c === void 0x0 && ($kn9c = 0x0), ay6v30 === void 0x0 && (ay6v30 = ![]), c$9 === void 0x0 && (c$9 = ![]), rv603 === void 0x0 && (rv603 = 0x0), s8cl9k === void 0x0 && (s8cl9k = 0x3), k8c9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', k8c9), _fs['EnvConfig']['resMgrLoad'](k8c9, (dhwt41, l2s, dmwt) => {
        u1mdt['prototype']['resMgrLoadCallBack'](dhwt41, l2s, dmwt, h4_fo);
      }, $kn9c, ay6v30, c$9, rv603, s8cl9k);
    }, t4ud1['resMgrLoadCallBack'] = function (o4wjf, gq2$n, w1umt, kgn92) {
      console['log']('buff:::', o4wjf, w1umt, cksn92['fileNativeDir'] + '///' + cksn92['fileListName']), kgn92(o4wjf, gq2$n, w1umt);
    }, t4ud1['clearRes'] = function (u15ma, gpn$iq) {
      gpn$iq === void 0x0 && (gpn$iq = ![]);var vry3z = this;vry3z['clearRes'](u15ma, gpn$iq);var $92cn = cksn92['getFileInfo'](u15ma);if ($92cn && (u15ma['indexOf']('http://') != -0x1 || u15ma['indexOf']('https://') != -0x1)) {
        var z3rvy0 = $92cn['md5'],
            xzryv = cksn92['getFileNativePath'](z3rvy0);cksn92['remove'](xzryv);
      }
    }, u1mdt['onReadNativeCallBack'] = function (u1mad5, yr03zv, j4owt, _flo87, wjhf4, m5u3, mwd1t, ns9kc, of8l7) {
      _flo87 === void 0x0 && (_flo87 = !![]), m5u3 === void 0x0 && (m5u3 = ![]), ns9kc === void 0x0 && (ns9kc = 0x0);if (!ns9kc) {
        var $2kgn9;if (j4owt == 'json' || j4owt == 'atlas') $2kgn9 = _fs['getJson'](of8l7['data']);else j4owt == 'xml' ? $2kgn9 = tudw1m['parseXMLFromString'](of8l7['data']) : $2kgn9 = of8l7['data'];mwd1t['onLoaded']($2kgn9), !_fs['isZiYu'] && _fs['isPosMsgYu'] && j4owt != 'arraybuffer' && wx['postMessage']({ 'url': yr03zv, 'data': $2kgn9, 'isLoad': !![] });
      } else ns9kc == 0x1 && _fs['EnvConfig']['load']['call'](mwd1t, yr03zv, j4owt, _flo87, wjhf4, m5u3);
    }, ki$gn(u1mdt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), u1mdt;
  }(),
      cksn92 = function (_4jfh) {
    function s8l7_() {
      s8l7_['__super']['call'](this);;
    }return n2cs9(s8l7_, 'laya.wx.mini.MiniFileMgr', _4jfh), s8l7_['isLoadFile'] = function (rz03v) {
      return s8l7_['_fileTypeArr']['indexOf'](rz03v) != -0x1 ? !![] : ![];
    }, s8l7_['getFileInfo'] = function (du1t5m) {
      var oh7fj = du1t5m['split']('?')[0x0],
          jhd4t = s8l7_['filesListObj'][oh7fj];if (jhd4t == null) return null;else return jhd4t;return null;
    }, s8l7_['onFileUpdate'] = function (y56va3, n9sck) {
      var k9csl8 = y56va3['split']('/'),
          _fj = k9csl8[k9csl8['length'] - 0x1],
          l2c9 = s8l7_['getFileInfo'](n9sck);if (l2c9 == null) s8l7_['onSaveFile'](n9sck, _fj);else {
        if (l2c9['readyUrl'] != n9sck) s8l7_['remove'](_fj, n9sck);
      }
    }, s8l7_['exits'] = function (inq$, wumt1) {
      var lcsk2 = s8l7_['getFileNativePath'](inq$);s8l7_['fs']['getFileInfo']({ 'filePath': lcsk2, 'success': function (o4hjwf) {
          wumt1 != null && wumt1['runWith']([0x0, o4hjwf]);
        }, 'fail': function (t1md) {
          wumt1 != null && wumt1['runWith']([0x1, t1md]);
        } });
    }, s8l7_['read'] = function (jhof7_, o7_f8l, _4ohj, jw4oh) {
      o7_f8l === void 0x0 && (o7_f8l = 'ascill'), jw4oh === void 0x0 && (jw4oh = '');var am56v3;jw4oh != '' ? am56v3 = s8l7_['getFileNativePath'](jhof7_) : am56v3 = jhof7_, s8l7_['fs']['readFile']({ 'filePath': am56v3, 'encoding': o7_f8l, 'success': function (y65va3) {
          _4ohj != null && _4ohj['runWith']([0x0, y65va3]);
        }, 'fail': function (uma36) {
          if (uma36 && jw4oh != '') s8l7_['down'](jw4oh, o7_f8l, _4ohj, jw4oh);else _4ohj != null && _4ohj['runWith']([0x1]);
        } });
    }, s8l7_['readNativeFile'] = function (ho_fj, sckn9) {
      s8l7_['fs']['readFile']({ 'filePath': ho_fj, 'encoding': '', 'success': function (hf_7o) {
          sckn9 != null && sckn9['runWith']([0x0]);
        }, 'fail': function (mu1dt5) {
          sckn9 != null && sckn9['runWith']([0x1]);
        } });
    }, s8l7_['down'] = function (j4dthw, zexry, rvyz0x, v306ry) {
      zexry === void 0x0 && (zexry = 'ascill'), v306ry === void 0x0 && (v306ry = '');var ma536v = s8l7_['getFileNativePath'](v306ry),
          $gkn = s8l7_['wxdown']({ 'url': j4dthw, 'filePath': ma536v, 'success': function (jf7o) {
          if (jf7o['statusCode'] === 0xc8) s8l7_['readFile'](jf7o['filePath'], zexry, rvyz0x, v306ry);
        }, 'fail': function (m1wdt) {
          rvyz0x != null && rvyz0x['runWith']([0x1, m1wdt]);
        } });$gkn['onProgressUpdate'](function (jd4hw) {
        rvyz0x != null && rvyz0x['runWith']([0x2, jd4hw['progress']]);
      });
    }, s8l7_['readFile'] = function (_l78fs, uw4t1, c9s7l8, tw4h1) {
      uw4t1 === void 0x0 && (uw4t1 = 'ascill'), tw4h1 === void 0x0 && (tw4h1 = ''), s8l7_['fs']['readFile']({ 'filePath': _l78fs, 'encoding': uw4t1, 'success': function (uwtd) {
          if (_l78fs['indexOf']('http://') != -0x1 || _l78fs['indexOf']('https://') != -0x1) s8l7_['onFileUpdate'](_l78fs, tw4h1);c9s7l8 != null && c9s7l8['runWith']([0x0, uwtd]);
        }, 'fail': function (ikg$2n) {
          if (ikg$2n) c9s7l8 != null && c9s7l8['runWith']([0x1, ikg$2n]);
        } });
    }, s8l7_['downImg'] = function (xze0y, m3u6a5, twd4u1) {
      twd4u1 === void 0x0 && (twd4u1 = '');var k2sn9c = s8l7_['wxdown']({ 'url': xze0y, 'success': function (twdmu) {
          twdmu['statusCode'] === 0xc8 && s8l7_['copyFile'](twdmu['tempFilePath'], twd4u1, m3u6a5);
        }, 'fail': function (ns29kc) {
          m3u6a5 != null && m3u6a5['runWith']([0x1, ns29kc]);
        } });
    }, s8l7_['copyFile'] = function (ohjf7, ad51m, mu51) {
      var zy0xe = ohjf7['split']('/'),
          dh4jw = zy0xe[zy0xe['length'] - 0x1],
          p$inqg = ad51m['split']('?')[0x0],
          y0a6 = s8l7_['getFileInfo'](ad51m),
          er0xy = s8l7_['getFileNativePath'](dh4jw);s8l7_['fs']['copyFile']({ 'srcPath': ohjf7, 'destPath': er0xy, 'success': function (ofjh7) {
          if (!y0a6) s8l7_['onSaveFile'](ad51m, dh4jw), mu51 != null && mu51['runWith']([0x0]);else {
            if (y0a6['readyUrl'] != ad51m) s8l7_['remove'](dh4jw, ad51m, mu51);
          }
        }, 'fail': function (oj7_) {
          mu51 != null && mu51['runWith']([0x1, oj7_]);
        } });
    }, s8l7_['getFileNativePath'] = function (ho4j) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ho4j;
    }, s8l7_['remove'] = function (t1dw4h, lo_, gk92n$) {
      lo_ === void 0x0 && (lo_ = '');var jo8_7f = s8l7_['getFileInfo'](lo_),
          d5mut1 = s8l7_['getFileNativePath'](jo8_7f['md5']);w4tjdh['loader']['clearRes'](jo8_7f['readyUrl']), s8l7_['fs']['unlink']({ 'filePath': d5mut1, 'success': function (hdtwj) {
          if (lo_ != '') s8l7_['onSaveFile'](lo_, t1dw4h);gk92n$ != null && gk92n$['runWith']([0x0]);
        }, 'fail': function (zre0xy) {} });
    }, s8l7_['onSaveFile'] = function (lkcs92, $pi) {
      var mdu1wt = lkcs92['split']('?')[0x0];s8l7_['filesListObj'][mdu1wt] = { 'md5': $pi, 'readyUrl': lkcs92 }, s8l7_['fs']['writeFile']({ 'filePath': s8l7_['fileNativeDir'] + '/' + s8l7_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](s8l7_['filesListObj']), 'success': function (k9n$c) {
          console['log']('写入测试测试成功：', k9n$c);
        }, 'fail': function (s87_cl) {
          console['log']('写入测试测试失败：', s87_cl);
        } });
    }, s8l7_['existDir'] = function (c2ksl9, h4j_f) {
      s8l7_['fs']['mkdir']({ 'dirPath': c2ksl9, 'success': function (n2g9) {
          h4j_f != null && h4j_f['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ma5u16) {
          if (ma5u16['errMsg']['indexOf']('file already exists') != -0x1) s8l7_['readSync'](s8l7_['fileListName'], 'utf8', h4j_f);else h4j_f != null && h4j_f['runWith']([0x1, ma5u16]);
        } });
    }, s8l7_['readSync'] = function (whtjo, d5a1, vy06, iqgn$2) {
      d5a1 === void 0x0 && (d5a1 = 'ascill'), iqgn$2 === void 0x0 && (iqgn$2 = '');var f7_8lo = s8l7_['getFileNativePath'](whtjo),
          j4wo;try {
        j4wo = s8l7_['fs']['readFileSync'](f7_8lo), vy06 != null && vy06['runWith']([0x0, { 'data': j4wo }]);
      } catch (hofjw4) {
        vy06 != null && vy06['runWith']([0x1]);
      }
    }, s8l7_['readCache'] = function () {}, s8l7_['writeCache'] = function (fo8_7l) {
      var u14wt = readyUrl['split']('?')[0x0];s8l7_['filesListObj'][u14wt] = { 'md5': md5Name, 'readyUrl': readyUrl }, s8l7_['fs']['writeFile']({ 'filePath': s8l7_['fileNativeDir'] + '/' + s8l7_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](s8l7_['filesListObj']), 'success': function (pnq) {}, 'fail': function (w1t4h) {} });
    }, s8l7_['setNativeFileDir'] = function (jhfo_) {
      s8l7_['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + jhfo_;
    }, s8l7_['filesListObj'] = {}, s8l7_['fileNativeDir'] = null, s8l7_['fileListName'] = 'layaairfiles.txt', s8l7_['ziyuFileData'] = {}, ki$gn(s8l7_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), s8l7_;
  }(u4wtd),
      d1w4tu = function (uam356) {
    function k92scn() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], k92scn['__super']['call'](this), this['_sound'] = k92scn['_createSound'](), this['_chanell'] = new ig2$kn(this['_sound']);
    }n2cs9(k92scn, 'laya.wx.mini.MiniSound', uam356);var gk$9n2 = k92scn['prototype'];return gk$9n2['load'] = function (o_78lf) {
      var k$gin = this;o_78lf = m15dua['formatURL'](o_78lf), this['url'] = o_78lf;if (k92scn['_audioCache'][o_78lf]) {
        this['event']('complete');return;
      }function s2c9k() {
        if (k92scn['_null'] != undefined) k$gin['_sound']['onCanplay'](k92scn['_null']), k$gin['_sound']['onError'](k92scn['_null']);else try {
          k$gin['_sound']['onCanplay'](null), k$gin['_sound']['onError'](null), k92scn['_null'] = null;
        } catch (m1utd) {
          console['warn']('[wxmini] _clearSound:' + m1utd), k$gin['_sound']['onCanplay'](cs92l), k$gin['_sound']['onError'](cs92l), k92scn['_null'] = cs92l;
        }
      }function xvzyr() {
        r0zvy['loaded'] = !![], r0zvy['event']('complete'), k92scn['_audioCache'][r0zvy['url']] = r0zvy;
      }function wh1(k$g29) {
        console['error']('errCode=' + k$g29['errCode'] + '  errMsg=' + k$g29['errMsg']), r0zvy['event']('error');
      }function cs92l() {}this['_sound']['onCanplay'](xvzyr), this['_sound']['onError'](wh1), this['_sound']['src'] = o_78lf;var r0zvy = this;
    }, gk$9n2['play'] = function (_csl7, lc2s9) {
      _csl7 === void 0x0 && (_csl7 = 0x0), lc2s9 === void 0x0 && (lc2s9 = 0x0);var gni$q, yxvz;if (this['url'] == _ofh7j['_tMusic']) {
        if (!k92scn['_musicAudio']) k92scn['_musicAudio'] = this['_sound'];gni$q = k92scn['_musicAudio'], yxvz = this['_chanell'];
      } else gni$q = this['_sound'], yxvz = this['_chanell'];return gni$q['src'] = this['url'], gni$q['startTime'] = 0x0, yxvz['isStopped'] && (yxvz['url'] = this['url'], yxvz['loops'] = lc2s9, yxvz['startTime'] = _csl7, yxvz['play'](), _ofh7j['addChannel'](yxvz)), yxvz;
    }, gk$9n2['dispose'] = function () {
      var sck8l = k92scn['_audioCache'][this['url']];sck8l && (sck8l['src'] = '', delete k92scn['_audioCache'][this['url']]);
    }, dwh4jt(0x0, gk$9n2, 'duration', function () {
      return this['_sound']['duration'];
    }), k92scn['_createSound'] = function () {
      k92scn['_id']++;var s8f = _fs['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return s8f;
    }, k92scn['_musicAudio'] = null, k92scn['_id'] = 0x0, k92scn['_audioCache'] = {}, k92scn['_null'] = undefined, k92scn;
  }(u4wtd),
      ig2$kn = function (jo4hwt) {
    function yvzx0(c2k9ns) {
      this['_audio'] = null, this['_onEnd'] = null, yvzx0['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = c2k9ns, this['_onEnd'] = tudw1m['bind'](this['__onEnd'], this), c2k9ns['onEnded'](this['_onEnd']);
    }n2cs9(yvzx0, 'laya.wx.mini.MiniSoundChannel', jo4hwt);var m635v = yvzx0['prototype'];return m635v['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (w4tjdh['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, m635v['__onNull'] = function () {}, m635v['play'] = function () {
      this['isStopped'] = ![], _ofh7j['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, m635v['stop'] = function () {
      this['isStopped'] = !![], _ofh7j['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, m635v['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, m635v['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], _ofh7j['addChannel'](this), this['_audio']['play']();
    }, dwh4jt(0x0, m635v, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), dwh4jt(0x0, m635v, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), dwh4jt(0x0, m635v, 'volume', function () {
      return 0x1;
    }, function (hw4td) {}), yvzx0['_null'] = undefined, yvzx0;
  }(w4dht1),
      g92$kn = function () {
    function duma() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = _fs['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }n2cs9(duma, 'laya.wx.mini.MiniVideo');var _sc87l = duma['prototype'];return _sc87l['on'] = function (sl8_f, fj_, a06v3) {
      if (sl8_f == 'loadedmetadata') this['onPlayFunc'] = a06v3['bind'](fj_), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else sl8_f == 'ended' && (this['onEndedFunC'] = a06v3['bind'](fj_), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, _sc87l['onTimeUpdateFunc'] = function (fjoh4_) {
      this['position'] = fjoh4_['position'], this['_duration'] = fjoh4_['duration'];
    }, _sc87l['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, _sc87l['onended'] = function (scn2k9, g2nk$9) {
      this['onEndedFunC'] = g2nk$9['bind'](scn2k9), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, _sc87l['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, _sc87l['off'] = function (_78csl, ks98c, j4_ofh) {
      if (_78csl == 'loadedmetadata') this['onPlayFunc'] = j4_ofh['bind'](ks98c), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else _78csl == 'ended' && (this['onEndedFunC'] = j4_ofh['bind'](ks98c), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, _sc87l['load'] = function (gq2ni) {
      if (!this['videoElement']) return;this['videoElement']['src'] = gq2ni;
    }, _sc87l['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, _sc87l['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, _sc87l['size'] = function (hf_4oj, eyx0rz) {
      if (!this['videoElement']) return;this['videoElement']['width'] = hf_4oj, this['videoElement']['height'] = eyx0rz;
    }, _sc87l['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, _sc87l['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, dwh4jt(0x0, _sc87l, 'duration', function () {
      return this['_duration'];
    }), dwh4jt(0x0, _sc87l, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function ($gipq) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = $gipq;
    }), dwh4jt(0x0, _sc87l, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), dwh4jt(0x0, _sc87l, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), dwh4jt(0x0, _sc87l, 'ended', function () {
      return this['videoend'];
    }), dwh4jt(0x0, _sc87l, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (jo_4h) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = jo_4h;
    }), dwh4jt(0x0, _sc87l, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (d1t4h) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = d1t4h;
    }), dwh4jt(0x0, _sc87l, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (f7jo) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = f7jo;
    }), dwh4jt(0x0, _sc87l, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), dwh4jt(0x0, _sc87l, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (pg$in) {
      if (!this['videoElement']) return;this['videoElement']['x'] = pg$in;
    }), dwh4jt(0x0, _sc87l, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (ryvx) {
      if (!this['videoElement']) return;this['videoElement']['y'] = ryvx;
    }), dwh4jt(0x0, _sc87l, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), dwh4jt(0x0, _sc87l, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (gn$qip) {
      if (!this['videoElement']) return;this['videoElement']['src'] = gn$qip;
    }), dwh4jt(0x0, _sc87l, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (_l8c7) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = _l8c7;
    }), dwh4jt(0x0, _sc87l, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (av635y) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = av635y;
    }), duma;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var m36va5 in Laya) {
    var y36vr = Laya[m36va5];y36vr && y36vr['__isclass'] && (exports[m36va5] = y36vr);
  }
});