var a = wx.$y;
(function (window, document, kn2i$) {
  var $nck29 = kn2i$['un'],
      c8s7_ = kn2i$['uns'],
      d1am5u = kn2i$['static'],
      nk29 = kn2i$['class'],
      wdhjt = kn2i$['getset'],
      in$kg2 = kn2i$['__newvec'],
      jth4ow = laya['utils']['Browser'],
      h4dtj = laya['events']['Event'],
      muda1 = laya['events']['EventDispatcher'],
      lof_ = laya['resource']['HTMLImage'],
      $9 = laya['utils']['Handler'],
      uma5d1 = laya['display']['Input'],
      k$2n = laya['net']['Loader'],
      nc2ks9 = laya['maths']['Matrix'],
      uwdm1 = laya['renders']['Render'],
      nkc92s = laya['utils']['RunDriver'],
      csl2k = laya['media']['Sound'],
      wdt41u = laya['media']['SoundChannel'],
      ksc8 = laya['media']['SoundManager'],
      dwtu1m = laya['display']['Stage'],
      mt1ud5 = laya['net']['URL'],
      htd14 = laya['utils']['Utils'],
      _o7j8 = function () {
    function y6v0a3() {}return nk29(y6v0a3, 'laya.wx.mini.MiniAdpter'), y6v0a3['getJson'] = function (ut4) {
      return JSON['parse'](ut4);
    }, y6v0a3['init'] = function ($nq, hwf4o) {
      $nq === void 0x0 && ($nq = ![]), hwf4o === void 0x0 && (hwf4o = ![]);if (y6v0a3['_inited']) return;y6v0a3['window'] = window;if (y6v0a3['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;y6v0a3['_inited'] = !![], y6v0a3['isZiYu'] = hwf4o, y6v0a3['isPosMsgYu'] = $nq, y6v0a3['EnvConfig'] = {}, !y6v0a3['isZiYu'] && (qg$ni2['setNativeFileDir']('/layaairGame'), qg$ni2['existDir'](qg$ni2['fileNativeDir'], $9['create'](y6v0a3, y6v0a3['onMkdirCallBack']))), y6v0a3['window']['focus'] = function () {}, kn2i$['getUrlPath'] = function () {}, y6v0a3['window']['logtime'] = function (kls8) {}, y6v0a3['window']['alertTimeLog'] = function (u16m5) {}, y6v0a3['window']['resetShareInfo'] = function () {}, y6v0a3['window']['CanvasRenderingContext2D'] = function () {}, y6v0a3['window']['CanvasRenderingContext2D']['prototype'] = y6v0a3['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], y6v0a3['window']['document']['body']['appendChild'] = function () {}, y6v0a3['EnvConfig']['pixelRatioInt'] = 0x0, nkc92s['getPixelRatio'] = y6v0a3['pixelRatio'], y6v0a3['_preCreateElement'] = jth4ow['createElement'], jth4ow['createElement'] = y6v0a3['createElement'], nkc92s['createShaderCondition'] = y6v0a3['createShaderCondition'], htd14['parseXMLFromString'] = y6v0a3['parseXMLFromString'], uma5d1['_createInputElement'] = m5v36['_createInputElement'], y6v0a3['EnvConfig']['load'] = k$2n['prototype']['load'], k$2n['prototype']['load'] = lf7_s8['prototype']['load'], y6v0a3['isZiYu'] && $nq && wx['onMessage'](function (dj4t) {
        dj4t['isLoad'] && (qg$ni2['ziyuFileData'][dj4t['url']] = dj4t['data']);
      });
    }, y6v0a3['onMkdirCallBack'] = function (dj4htw, _sl87) {
      if (!dj4htw) qg$ni2['filesListObj'] = JSON['parse'](_sl87['data']);
    }, y6v0a3['pixelRatio'] = function () {
      if (!y6v0a3['EnvConfig']['pixelRatioInt']) try {
        var p$ngqi = wx['getSystemInfoSync']();return y6v0a3['EnvConfig']['pixelRatioInt'] = p$ngqi['pixelRatio'], p$ngqi = p$ngqi, p$ngqi['pixelRatio'];
      } catch (d4w) {}return y6v0a3['EnvConfig']['pixelRatioInt'];
    }, y6v0a3['createElement'] = function (h4tjw) {
      if (h4tjw == 'canvas') {
        var tojw;return y6v0a3['idx'] == 0x1 ? y6v0a3['isZiYu'] ? (tojw = sharedCanvas, tojw['style'] = {}) : tojw = window['canvas'] : tojw = window['wx']['createCanvas'](), y6v0a3['idx']++, tojw;
      } else {
        if (h4tjw == 'textarea' || h4tjw == 'input') return y6v0a3['onCreateInput'](h4tjw);else {
          if (h4tjw == 'div') {
            var nskc92 = y6v0a3['_preCreateElement'](h4tjw);return nskc92['contains'] = function (ni$p) {
              return null;
            }, nskc92['removeChild'] = function (yzr3v) {}, nskc92;
          } else return y6v0a3['_preCreateElement'](h4tjw);
        }
      }
    }, y6v0a3['onCreateInput'] = function (cn92) {
      var sl7_c8 = y6v0a3['_preCreateElement'](cn92);return sl7_c8['focus'] = m5v36['wxinputFocus'], sl7_c8['blur'] = m5v36['wxinputblur'], sl7_c8['style'] = {}, sl7_c8['value'] = 0x0, sl7_c8['parentElement'] = {}, sl7_c8['placeholder'] = {}, sl7_c8['type'] = {}, sl7_c8['setColor'] = function (j4) {}, sl7_c8['setType'] = function (ngqp) {}, sl7_c8['setFontFace'] = function (v65ma3) {}, sl7_c8['addEventListener'] = function (u5d1t) {}, sl7_c8['contains'] = function (wd4htj) {
        return null;
      }, sl7_c8['removeChild'] = function (y360r) {}, sl7_c8;
    }, y6v0a3['createShaderCondition'] = function (slc89) {
      var _ls7c8 = this,
          c2n9k$ = function () {
        var ol7 = slc89;return _ls7c8[slc89['replace']('this.', '')];
      };return c2n9k$;
    }, y6v0a3['EnvConfig'] = null, y6v0a3['window'] = null, y6v0a3['_preCreateElement'] = null, y6v0a3['_inited'] = ![], y6v0a3['wxRequest'] = null, y6v0a3['systemInfo'] = null, y6v0a3['version'] = '0.0.1', y6v0a3['isZiYu'] = ![], y6v0a3['isPosMsgYu'] = ![], y6v0a3['parseXMLFromString'] = function (ezyx) {
      var nk92c$, $n2kc9;ezyx = ezyx['replace'](/>\s+</g, '><');try {
        nk92c$ = new window['Parser']['DOMParser']()['parseFromString'](ezyx, 'text/xml');
      } catch (hfo4jw) {
        throw '需要引入xml解析库文件';
      }return nk92c$;
    }, y6v0a3['idx'] = 0x1, y6v0a3;
  }(),
      k9ng$2 = function () {
    function dt5u() {}nk29(dt5u, 'laya.wx.mini.MiniImage');var fhw4oj = dt5u['prototype'];return fhw4oj['_loadImage'] = function (v60ry3) {
      var vy63 = this,
          dhwt14 = ![];v60ry3['indexOf']('layaNativeDir/') == -0x1 && (dhwt14 = !![], v60ry3 = mt1ud5['formatURL'](v60ry3));if (!qg$ni2['getFileInfo'](v60ry3)) {
        if (v60ry3['indexOf']('http://') != -0x1 || v60ry3['indexOf']('https://') != -0x1) qg$ni2['downImg'](v60ry3, new $9(dt5u, dt5u['onDownImgCallBack'], [v60ry3, vy63]), v60ry3);else dt5u['onCreateImage'](v60ry3, vy63, !![]);
      } else dt5u['onCreateImage'](v60ry3, vy63, !dhwt14);
    }, dt5u['onDownImgCallBack'] = function (tdm15u, ay630v, c89l) {
      if (!c89l) dt5u['onCreateImage'](tdm15u, ay630v);else ay630v['onError'](null);
    }, dt5u['onCreateImage'] = function (o8j7f_, j4of_, k8lsc9) {
      k8lsc9 === void 0x0 && (k8lsc9 = ![]);var _foj7;if (!k8lsc9) {
        var _8of7j = qg$ni2['getFileInfo'](o8j7f_),
            cs89k = _8of7j['md5'];_foj7 = qg$ni2['getFileNativePath'](cs89k);
      } else _foj7 = o8j7f_;if (j4of_['imgCache'] == null) j4of_['imgCache'] = {};var ryvz03;function of87_j() {
        ryvz03['onload'] = null, ryvz03['onerror'] = null, delete j4of_['imgCache'][o8j7f_];
      };var u561 = function () {
        of87_j(), j4of_['onLoaded'](ryvz03);
      },
          udw1mt = function () {
        of87_j(), j4of_['event']('error', 'Load image failed');
      };j4of_['_type'] == 'nativeimage' ? (ryvz03 = new jth4ow['window']['Image'](), ryvz03['crossOrigin'] = '', ryvz03['onload'] = u561, ryvz03['onerror'] = udw1mt, ryvz03['src'] = _foj7, j4of_['imgCache'][o8j7f_] = ryvz03) : new lof_['create'](_foj7, { 'onload': u561, 'onerror': udw1mt, 'onCreate': function (tdu5m) {
          ryvz03 = tdu5m, j4of_['imgCache'][o8j7f_] = tdu5m;
        } });
    }, dt5u;
  }(),
      m5v36 = function () {
    function a5() {}return nk29(a5, 'laya.wx.mini.MiniInput'), a5['_createInputElement'] = function () {
      uma5d1['_initInput'](uma5d1['area'] = jth4ow['createElement']('textarea')), uma5d1['_initInput'](uma5d1['input'] = jth4ow['createElement']('input')), uma5d1['inputContainer'] = jth4ow['createElement']('div'), uma5d1['inputContainer']['style']['position'] = 'absolute', uma5d1['inputContainer']['style']['zIndex'] = 0x186a0, jth4ow['container']['appendChild'](uma5d1['inputContainer']), uma5d1['inputContainer']['setPos'] = function (dwut14, f7ho_j) {
        uma5d1['inputContainer']['style']['left'] = dwut14 + 'px', uma5d1['inputContainer']['style']['top'] = f7ho_j + 'px';
      }, kn2i$['stage']['on']('resize', null, a5['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (y0) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ksc8['_soundClass'] = jwh4, ksc8['_musicClass'] = jwh4, window['_videoClass'] = zxy;
    }, a5['_onStageResize'] = function () {
      var ojf8_7 = kn2i$['stage']['_canvasTransform']['identity']();ojf8_7['scale'](jth4ow['width'] / uwdm1['canvas']['width'] / nkc92s['getPixelRatio'](), jth4ow['height'] / uwdm1['canvas']['height'] / nkc92s['getPixelRatio']());
    }, a5['wxinputFocus'] = function (i$npqg) {
      var y30rv6 = uma5d1['inputElement']['target'];if (y30rv6 && !y30rv6['editable']) return;_o7j8['window']['wx']['offKeyboardConfirm'](), _o7j8['window']['wx']['offKeyboardInput'](), _o7j8['window']['wx']['showKeyboard']({ 'defaultValue': y30rv6['text'], 'maxLength': y30rv6['maxChars'], 'multiple': y30rv6['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ls2ck) {}, 'fail': function (_lf) {} }), _o7j8['window']['wx']['onKeyboardConfirm'](function (s8c9lk) {
        var qn$2ig = s8c9lk ? s8c9lk['value'] : '';y30rv6['text'] = qn$2ig, y30rv6['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _o7j8['window']['wx']['onKeyboardInput'](function (r3vzy) {
        var a5v63m = r3vzy ? r3vzy['value'] : '';if (!y30rv6['multiline']) {
          if (a5v63m['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }y30rv6['text'] = a5v63m, y30rv6['event']('input');
      });
    }, a5['inputEnter'] = function () {
      uma5d1['inputElement']['target']['focus'] = ![];
    }, a5['wxinputblur'] = function () {
      a5['hideKeyboard']();
    }, a5['hideKeyboard'] = function () {
      _o7j8['window']['wx']['offKeyboardConfirm'](), _o7j8['window']['wx']['offKeyboardInput'](), _o7j8['window']['wx']['hideKeyboard']({ 'success': function (cnk2$9) {
          console['log']('隐藏键盘');
        }, 'fail': function (ud14wt) {
          console['log']('隐藏键盘出错:' + (ud14wt ? ud14wt['errMsg'] : ''));
        } });
    }, a5;
  }(),
      lf7_s8 = function () {
    function f_8ls7() {}nk29(f_8ls7, 'laya.wx.mini.MiniLoader');var rxyz0 = f_8ls7['prototype'];return rxyz0['load'] = function (zvy0r, v6y3r, u5m6a, yzv3r, wjtoh4) {
      u5m6a === void 0x0 && (u5m6a = !![]), wjtoh4 === void 0x0 && (wjtoh4 = ![]);var jo7f_8 = this;jo7f_8['_url'] = zvy0r;if (zvy0r['indexOf']('data:image') === 0x0) jo7f_8['_type'] = v6y3r = 'image';else jo7f_8['_type'] = v6y3r || (v6y3r = jo7f_8['getTypeFromUrl'](zvy0r));jo7f_8['_cache'] = u5m6a, jo7f_8['_data'] = null;var nk9$g = 'ascii';if (zvy0r['indexOf']('.fnt') != -0x1) nk9$g = 'utf8';else v6y3r == 'arraybuffer' && (nk9$g = '');;var ezy0x = htd14['getFileExtension'](zvy0r);if (f_8ls7['_fileTypeArr']['indexOf'](ezy0x) != -0x1) _o7j8['EnvConfig']['load']['call'](this, zvy0r, v6y3r, u5m6a, yzv3r, wjtoh4);else {
        if (!qg$ni2['getFileInfo'](zvy0r)) {
          if (zvy0r['indexOf']('layaNativeDir/') != -0x1) {
            if (_o7j8['isZiYu']) {
              var c2$9kn = qg$ni2['ziyuFileData'][zvy0r];jo7f_8['onLoaded'](c2$9kn);return;
            } else {
              cosnole['log']('read read'), qg$ni2['read'](zvy0r, nk9$g, new $9(f_8ls7, f_8ls7['onReadNativeCallBack'], [nk9$g, zvy0r, v6y3r, u5m6a, yzv3r, wjtoh4, jo7f_8]));return;
            }
          }if (mt1ud5['rootPath'] == '') var ay3 = zvy0r;else ay3 = zvy0r['split'](mt1ud5['rootPath'])[0x0];zvy0r['indexOf']('http://') != -0x1 || zvy0r['indexOf']('https://') != -0x1 ? _o7j8['EnvConfig']['load']['call'](jo7f_8, zvy0r, v6y3r, u5m6a, yzv3r, wjtoh4) : qg$ni2['readFile'](ay3, nk9$g, new $9(f_8ls7, f_8ls7['onReadNativeCallBack'], [nk9$g, zvy0r, v6y3r, u5m6a, yzv3r, wjtoh4, jo7f_8]), zvy0r);
        } else _o7j8['EnvConfig']['load']['call'](this, zvy0r, v6y3r, u5m6a, yzv3r, wjtoh4);
      }
    }, rxyz0['resMgrLoad'] = function (c2k$n, au3m65, wtd4, pig$, jt4hwd, td4wu1, va60y3) {
      wtd4 === void 0x0 && (wtd4 = 0x0), pig$ === void 0x0 && (pig$ = ![]), jt4hwd === void 0x0 && (jt4hwd = ![]), td4wu1 === void 0x0 && (td4wu1 = 0x0), va60y3 === void 0x0 && (va60y3 = 0x3), c2k$n['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', c2k$n), _o7j8['EnvConfig']['resMgrLoad'](c2k$n, (ry063, mt1u5, of4_j) => {
        f_8ls7['prototype']['resMgrLoadCallBack'](ry063, mt1u5, of4_j, au3m65);
      }, wtd4, pig$, jt4hwd, td4wu1, va60y3);
    }, rxyz0['resMgrLoadCallBack'] = function (yrvz, _4hjo, gpin, tdm1u) {
      console['log']('buff:::', yrvz, gpin, qg$ni2['fileNativeDir'] + '///' + qg$ni2['fileListName']), tdm1u(yrvz, _4hjo, gpin);
    }, rxyz0['clearRes'] = function ($2kign, udw14t) {
      udw14t === void 0x0 && (udw14t = ![]);var a5um61 = this;a5um61['clearRes']($2kign, udw14t);var y3r6 = qg$ni2['getFileInfo']($2kign);if (y3r6 && ($2kign['indexOf']('http://') != -0x1 || $2kign['indexOf']('https://') != -0x1)) {
        var tdmw1u = y3r6['md5'],
            u51ma6 = qg$ni2['getFileNativePath'](tdmw1u);qg$ni2['remove'](u51ma6);
      }
    }, f_8ls7['onReadNativeCallBack'] = function (nigq2, dtw4jh, rxz0ey, vm653, jdhwt, utd4w1, ua561, h4wdjt, kns92c) {
      vm653 === void 0x0 && (vm653 = !![]), utd4w1 === void 0x0 && (utd4w1 = ![]), h4wdjt === void 0x0 && (h4wdjt = 0x0);if (!h4wdjt) {
        var m16u5a;if (rxz0ey == 'json' || rxz0ey == 'atlas') m16u5a = _o7j8['getJson'](kns92c['data']);else rxz0ey == 'xml' ? m16u5a = htd14['parseXMLFromString'](kns92c['data']) : m16u5a = kns92c['data'];ua561['onLoaded'](m16u5a), !_o7j8['isZiYu'] && _o7j8['isPosMsgYu'] && rxz0ey != 'arraybuffer' && wx['postMessage']({ 'url': dtw4jh, 'data': m16u5a, 'isLoad': !![] });
      } else h4wdjt == 0x1 && _o7j8['EnvConfig']['load']['call'](ua561, dtw4jh, rxz0ey, vm653, jdhwt, utd4w1);
    }, d1am5u(f_8ls7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), f_8ls7;
  }(),
      qg$ni2 = function (mt1dwu) {
    function jw4toh() {
      jw4toh['__super']['call'](this);;
    }return nk29(jw4toh, 'laya.wx.mini.MiniFileMgr', mt1dwu), jw4toh['isLoadFile'] = function (v30ay6) {
      return jw4toh['_fileTypeArr']['indexOf'](v30ay6) != -0x1 ? !![] : ![];
    }, jw4toh['getFileInfo'] = function (wdjh4) {
      var wh = wdjh4['split']('?')[0x0],
          uad51m = jw4toh['filesListObj'][wh];if (uad51m == null) return null;else return uad51m;return null;
    }, jw4toh['onFileUpdate'] = function (c9k2ls, u1a5) {
      var a0v3y = c9k2ls['split']('/'),
          ck$ = a0v3y[a0v3y['length'] - 0x1],
          tw41 = jw4toh['getFileInfo'](u1a5);if (tw41 == null) jw4toh['onSaveFile'](u1a5, ck$);else {
        if (tw41['readyUrl'] != u1a5) jw4toh['remove'](ck$, u1a5);
      }
    }, jw4toh['exits'] = function (wh41d, jo_f7h) {
      var v0yzx = jw4toh['getFileNativePath'](wh41d);jw4toh['fs']['getFileInfo']({ 'filePath': v0yzx, 'success': function (l8c7_) {
          jo_f7h != null && jo_f7h['runWith']([0x0, l8c7_]);
        }, 'fail': function (ck8ls) {
          jo_f7h != null && jo_f7h['runWith']([0x1, ck8ls]);
        } });
    }, jw4toh['read'] = function (wohjf4, zr0xv, wt4d1, _oj4f) {
      zr0xv === void 0x0 && (zr0xv = 'ascill'), _oj4f === void 0x0 && (_oj4f = '');var m536au;_oj4f != '' ? m536au = jw4toh['getFileNativePath'](wohjf4) : m536au = wohjf4, jw4toh['fs']['readFile']({ 'filePath': m536au, 'encoding': zr0xv, 'success': function (oj_h7) {
          wt4d1 != null && wt4d1['runWith']([0x0, oj_h7]);
        }, 'fail': function (l9kc8s) {
          if (l9kc8s && _oj4f != '') jw4toh['down'](_oj4f, zr0xv, wt4d1, _oj4f);else wt4d1 != null && wt4d1['runWith']([0x1]);
        } });
    }, jw4toh['readNativeFile'] = function (hjf4_, y0r3zv) {
      jw4toh['fs']['readFile']({ 'filePath': hjf4_, 'encoding': '', 'success': function (y6av30) {
          y0r3zv != null && y0r3zv['runWith']([0x0]);
        }, 'fail': function (fwjho) {
          y0r3zv != null && y0r3zv['runWith']([0x1]);
        } });
    }, jw4toh['down'] = function (lc7s98, v6m35, _jf78o, th4djw) {
      v6m35 === void 0x0 && (v6m35 = 'ascill'), th4djw === void 0x0 && (th4djw = '');var a5vm36 = jw4toh['getFileNativePath'](th4djw),
          tdum1 = jw4toh['wxdown']({ 'url': lc7s98, 'filePath': a5vm36, 'success': function (o_f4h) {
          if (o_f4h['statusCode'] === 0xc8) jw4toh['readFile'](o_f4h['filePath'], v6m35, _jf78o, th4djw);
        }, 'fail': function (yz0rxv) {
          _jf78o != null && _jf78o['runWith']([0x1, yz0rxv]);
        } });tdum1['onProgressUpdate'](function (h_ofj4) {
        _jf78o != null && _jf78o['runWith']([0x2, h_ofj4['progress']]);
      });
    }, jw4toh['readFile'] = function (fo_87, snk9, erz0xy, fs87l) {
      snk9 === void 0x0 && (snk9 = 'ascill'), fs87l === void 0x0 && (fs87l = ''), jw4toh['fs']['readFile']({ 'filePath': fo_87, 'encoding': snk9, 'success': function (l8_7c) {
          if (fo_87['indexOf']('http://') != -0x1 || fo_87['indexOf']('https://') != -0x1) jw4toh['onFileUpdate'](fo_87, fs87l);erz0xy != null && erz0xy['runWith']([0x0, l8_7c]);
        }, 'fail': function (ksn29) {
          if (ksn29) erz0xy != null && erz0xy['runWith']([0x1, ksn29]);
        } });
    }, jw4toh['downImg'] = function (mwd1ut, rv03, kls98) {
      kls98 === void 0x0 && (kls98 = '');var v0zyx = jw4toh['wxdown']({ 'url': mwd1ut, 'success': function (m1a6u5) {
          m1a6u5['statusCode'] === 0xc8 && jw4toh['copyFile'](m1a6u5['tempFilePath'], kls98, rv03);
        }, 'fail': function (udw41t) {
          rv03 != null && rv03['runWith']([0x1, udw41t]);
        } });
    }, jw4toh['copyFile'] = function ($2gkin, ht1d, ma) {
      var i2k$n = $2gkin['split']('/'),
          tmuw = i2k$n[i2k$n['length'] - 0x1],
          kg2in = ht1d['split']('?')[0x0],
          vya5 = jw4toh['getFileInfo'](ht1d),
          in$2g = jw4toh['getFileNativePath'](tmuw);jw4toh['fs']['copyFile']({ 'srcPath': $2gkin, 'destPath': in$2g, 'success': function (g9$2k) {
          if (!vya5) jw4toh['onSaveFile'](ht1d, tmuw), ma != null && ma['runWith']([0x0]);else {
            if (vya5['readyUrl'] != ht1d) jw4toh['remove'](tmuw, ht1d, ma);
          }
        }, 'fail': function (l_78f) {
          ma != null && ma['runWith']([0x1, l_78f]);
        } });
    }, jw4toh['getFileNativePath'] = function (mwudt) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + mwudt;
    }, jw4toh['remove'] = function (t4wdu, tdwjh, jth4w) {
      tdwjh === void 0x0 && (tdwjh = '');var cl89s = jw4toh['getFileInfo'](tdwjh),
          m1dua5 = jw4toh['getFileNativePath'](cl89s['md5']);kn2i$['loader']['clearRes'](cl89s['readyUrl']), jw4toh['fs']['unlink']({ 'filePath': m1dua5, 'success': function (hj4td) {
          if (tdwjh != '') jw4toh['onSaveFile'](tdwjh, t4wdu);jth4w != null && jth4w['runWith']([0x0]);
        }, 'fail': function (fjh_4o) {} });
    }, jw4toh['onSaveFile'] = function (vay360, ngi2$q) {
      var l8k = vay360['split']('?')[0x0];jw4toh['filesListObj'][l8k] = { 'md5': ngi2$q, 'readyUrl': vay360 }, jw4toh['fs']['writeFile']({ 'filePath': jw4toh['fileNativeDir'] + '/' + jw4toh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jw4toh['filesListObj']), 'success': function (u5dt) {
          console['log']('写入测试测试成功：', u5dt);
        }, 'fail': function (wdtum1) {
          console['log']('写入测试测试失败：', wdtum1);
        } });
    }, jw4toh['existDir'] = function (_4foj, j4fwoh) {
      jw4toh['fs']['mkdir']({ 'dirPath': _4foj, 'success': function (xrzv) {
          j4fwoh != null && j4fwoh['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (au61m5) {
          if (au61m5['errMsg']['indexOf']('file already exists') != -0x1) jw4toh['readSync'](jw4toh['fileListName'], 'utf8', j4fwoh);else j4fwoh != null && j4fwoh['runWith']([0x1, au61m5]);
        } });
    }, jw4toh['readSync'] = function ($q2ngi, o_hf7, fj8_7, lo8_f7) {
      o_hf7 === void 0x0 && (o_hf7 = 'ascill'), lo8_f7 === void 0x0 && (lo8_f7 = '');var $gn2k9 = jw4toh['getFileNativePath']($q2ngi),
          lc98sk;try {
        lc98sk = jw4toh['fs']['readFileSync']($gn2k9), fj8_7 != null && fj8_7['runWith']([0x0, { 'data': lc98sk }]);
      } catch (r630y) {
        fj8_7 != null && fj8_7['runWith']([0x1]);
      }
    }, jw4toh['readCache'] = function () {}, jw4toh['writeCache'] = function (h4w1) {
      var ck9ns2 = readyUrl['split']('?')[0x0];jw4toh['filesListObj'][ck9ns2] = { 'md5': md5Name, 'readyUrl': readyUrl }, jw4toh['fs']['writeFile']({ 'filePath': jw4toh['fileNativeDir'] + '/' + jw4toh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jw4toh['filesListObj']), 'success': function (l8c7_s) {}, 'fail': function (n29kc$) {} });
    }, jw4toh['setNativeFileDir'] = function (m1u5dt) {
      jw4toh['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + m1u5dt;
    }, jw4toh['filesListObj'] = {}, jw4toh['fileNativeDir'] = null, jw4toh['fileListName'] = 'layaairfiles.txt', jw4toh['ziyuFileData'] = {}, d1am5u(jw4toh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), jw4toh;
  }(muda1),
      jwh4 = function (t5m1u) {
    function u1amd5() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], u1amd5['__super']['call'](this), this['_sound'] = u1amd5['_createSound'](), this['_chanell'] = new slf78(this['_sound']);
    }nk29(u1amd5, 'laya.wx.mini.MiniSound', t5m1u);var a35v = u1amd5['prototype'];return a35v['load'] = function ($cn29k) {
      var eyz = this;$cn29k = mt1ud5['formatURL']($cn29k), this['url'] = $cn29k;if (u1amd5['_audioCache'][$cn29k]) {
        this['event']('complete');return;
      }function yv03a6() {
        if (u1amd5['_null'] != undefined) eyz['_sound']['onCanplay'](u1amd5['_null']), eyz['_sound']['onError'](u1amd5['_null']);else try {
          eyz['_sound']['onCanplay'](null), eyz['_sound']['onError'](null), u1amd5['_null'] = null;
        } catch (ngik$2) {
          console['warn']('[wxmini] _clearSound:' + ngik$2), eyz['_sound']['onCanplay'](n$giqp), eyz['_sound']['onError'](n$giqp), u1amd5['_null'] = n$giqp;
        }
      }function mut15() {
        dtu1m['loaded'] = !![], dtu1m['event']('complete'), u1amd5['_audioCache'][dtu1m['url']] = dtu1m;
      }function duma(g$q2i) {
        console['error']('errCode=' + g$q2i['errCode'] + '  errMsg=' + g$q2i['errMsg']), dtu1m['event']('error');
      }function n$giqp() {}this['_sound']['onCanplay'](mut15), this['_sound']['onError'](duma), this['_sound']['src'] = $cn29k;var dtu1m = this;
    }, a35v['play'] = function (_78fls, h4owtj) {
      _78fls === void 0x0 && (_78fls = 0x0), h4owtj === void 0x0 && (h4owtj = 0x0);var wd4t1u, vryx;if (this['url'] == ksc8['_tMusic']) {
        if (!u1amd5['_musicAudio']) u1amd5['_musicAudio'] = this['_sound'];wd4t1u = u1amd5['_musicAudio'], vryx = this['_chanell'];
      } else wd4t1u = this['_sound'], vryx = this['_chanell'];return wd4t1u['src'] = this['url'], wd4t1u['startTime'] = 0x0, vryx['isStopped'] && (vryx['url'] = this['url'], vryx['loops'] = h4owtj, vryx['startTime'] = _78fls, vryx['play'](), ksc8['addChannel'](vryx)), vryx;
    }, a35v['dispose'] = function () {
      var ryv360 = u1amd5['_audioCache'][this['url']];ryv360 && (ryv360['src'] = '', delete u1amd5['_audioCache'][this['url']]);
    }, wdhjt(0x0, a35v, 'duration', function () {
      return this['_sound']['duration'];
    }), u1amd5['_createSound'] = function () {
      u1amd5['_id']++;var ry0vx = _o7j8['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return ry0vx;
    }, u1amd5['_musicAudio'] = null, u1amd5['_id'] = 0x0, u1amd5['_audioCache'] = {}, u1amd5['_null'] = undefined, u1amd5;
  }(muda1),
      slf78 = function (g$ip) {
    function yxr0z(dh4wj) {
      this['_audio'] = null, this['_onEnd'] = null, yxr0z['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = dh4wj, this['_onEnd'] = htd14['bind'](this['__onEnd'], this), dh4wj['onEnded'](this['_onEnd']);
    }nk29(yxr0z, 'laya.wx.mini.MiniSoundChannel', g$ip);var jf_7h = yxr0z['prototype'];return jf_7h['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (kn2i$['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jf_7h['__onNull'] = function () {}, jf_7h['play'] = function () {
      this['isStopped'] = ![], ksc8['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, jf_7h['stop'] = function () {
      this['isStopped'] = !![], ksc8['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, jf_7h['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, jf_7h['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ksc8['addChannel'](this), this['_audio']['play']();
    }, wdhjt(0x0, jf_7h, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), wdhjt(0x0, jf_7h, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), wdhjt(0x0, jf_7h, 'volume', function () {
      return 0x1;
    }, function (yx0vz) {}), yxr0z['_null'] = undefined, yxr0z;
  }(wdt41u),
      zxy = function () {
    function t5d() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = _o7j8['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }nk29(t5d, 'laya.wx.mini.MiniVideo');var z0v3y = t5d['prototype'];return z0v3y['on'] = function (whtj4, am3v65, s9lc7) {
      if (whtj4 == 'loadedmetadata') this['onPlayFunc'] = s9lc7['bind'](am3v65), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else whtj4 == 'ended' && (this['onEndedFunC'] = s9lc7['bind'](am3v65), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, z0v3y['onTimeUpdateFunc'] = function (r0xyz) {
      this['position'] = r0xyz['position'], this['_duration'] = r0xyz['duration'];
    }, z0v3y['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, z0v3y['onended'] = function (hf4o, dthj4) {
      this['onEndedFunC'] = dthj4['bind'](hf4o), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, z0v3y['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, z0v3y['off'] = function (dt1m5, ckl8, twdu14) {
      if (dt1m5 == 'loadedmetadata') this['onPlayFunc'] = twdu14['bind'](ckl8), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else dt1m5 == 'ended' && (this['onEndedFunC'] = twdu14['bind'](ckl8), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, z0v3y['load'] = function (a036y) {
      if (!this['videoElement']) return;this['videoElement']['src'] = a036y;
    }, z0v3y['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, z0v3y['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, z0v3y['size'] = function (cs98kl, xyvr0z) {
      if (!this['videoElement']) return;this['videoElement']['width'] = cs98kl, this['videoElement']['height'] = xyvr0z;
    }, z0v3y['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, z0v3y['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, wdhjt(0x0, z0v3y, 'duration', function () {
      return this['_duration'];
    }), wdhjt(0x0, z0v3y, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (zr03v) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = zr03v;
    }), wdhjt(0x0, z0v3y, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), wdhjt(0x0, z0v3y, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), wdhjt(0x0, z0v3y, 'ended', function () {
      return this['videoend'];
    }), wdhjt(0x0, z0v3y, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (hfo4_j) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = hfo4_j;
    }), wdhjt(0x0, z0v3y, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (mu6a3) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = mu6a3;
    }), wdhjt(0x0, z0v3y, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (a635vy) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = a635vy;
    }), wdhjt(0x0, z0v3y, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), wdhjt(0x0, z0v3y, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (fl87s_) {
      if (!this['videoElement']) return;this['videoElement']['x'] = fl87s_;
    }), wdhjt(0x0, z0v3y, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (ua3m56) {
      if (!this['videoElement']) return;this['videoElement']['y'] = ua3m56;
    }), wdhjt(0x0, z0v3y, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), wdhjt(0x0, z0v3y, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (wmdt) {
      if (!this['videoElement']) return;this['videoElement']['src'] = wmdt;
    }), wdhjt(0x0, z0v3y, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (x0eyzr) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = x0eyzr;
    }), wdhjt(0x0, z0v3y, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (au5m1) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = au5m1;
    }), t5d;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var n$k9c in Laya) {
    var v3m5a6 = Laya[n$k9c];v3m5a6 && v3m5a6['__isclass'] && (exports[n$k9c] = v3m5a6);
  }
});