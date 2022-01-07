var s = wx.$W;
(function (window, document, krdgbc) {
  var xa9y = krdgbc['un'],
      fejw1 = krdgbc['uns'],
      smq4o = krdgbc['static'],
      ph46mq = krdgbc['class'],
      z13jef = krdgbc['getset'],
      fjonwe = krdgbc['__newvec'],
      bgkdrc = laya['utils']['Browser'],
      pmh6q4 = laya['events']['Event'],
      a9v$l = laya['events']['EventDispatcher'],
      mnqow = laya['resource']['HTMLImage'],
      uph4 = laya['utils']['Handler'],
      dgrkbc = laya['display']['Input'],
      cgrdk = laya['net']['Loader'],
      ut58c0 = laya['maths']['Matrix'],
      h0p6t = laya['renders']['Render'],
      ms64qo = laya['utils']['RunDriver'],
      g8kb5c = laya['media']['Sound'],
      nfjze = laya['media']['SoundChannel'],
      puht80 = laya['media']['SoundManager'],
      g5c = laya['display']['Stage'],
      wofjne = laya['net']['URL'],
      tp6uh = laya['utils']['Utils'],
      enwjz = function () {
    function avy9$() {}return ph46mq(avy9$, 'laya.wx.mini.MiniAdpter'), avy9$['getJson'] = function (joswf) {
      return JSON['parse'](joswf);
    }, avy9$['init'] = function (noq4m, i3z12) {
      noq4m === void 0x0 && (noq4m = ![]), i3z12 === void 0x0 && (i3z12 = ![]);if (avy9$['_inited']) return;avy9$['window'] = window;if (avy9$['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;avy9$['_inited'] = !![], avy9$['isZiYu'] = i3z12, avy9$['isPosMsgYu'] = noq4m, avy9$['EnvConfig'] = {}, !avy9$['isZiYu'] && (u0ht6p['setNativeFileDir']('/layaairGame'), u0ht6p['existDir'](u0ht6p['fileNativeDir'], uph4['create'](avy9$, avy9$['onMkdirCallBack']))), avy9$['window']['focus'] = function () {}, krdgbc['getUrlPath'] = function () {}, avy9$['window']['logtime'] = function (yv9$a) {}, avy9$['window']['alertTimeLog'] = function ($ylva9) {}, avy9$['window']['resetShareInfo'] = function () {}, avy9$['window']['CanvasRenderingContext2D'] = function () {}, avy9$['window']['CanvasRenderingContext2D']['prototype'] = avy9$['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], avy9$['window']['document']['body']['appendChild'] = function () {}, avy9$['EnvConfig']['pixelRatioInt'] = 0x0, ms64qo['getPixelRatio'] = avy9$['pixelRatio'], avy9$['_preCreateElement'] = bgkdrc['createElement'], bgkdrc['createElement'] = avy9$['createElement'], ms64qo['createShaderCondition'] = avy9$['createShaderCondition'], tp6uh['parseXMLFromString'] = avy9$['parseXMLFromString'], dgrkbc['_createInputElement'] = kdyaxr['_createInputElement'], avy9$['EnvConfig']['load'] = cgrdk['prototype']['load'], cgrdk['prototype']['load'] = zejfw1['prototype']['load'], avy9$['isZiYu'] && noq4m && wx['onMessage'](function (wofjs) {
        wofjs['isLoad'] && (u0ht6p['ziyuFileData'][wofjs['url']] = wofjs['data']);
      });
    }, avy9$['onMkdirCallBack'] = function (u8p0, gb85) {
      if (!u8p0) u0ht6p['filesListObj'] = JSON['parse'](gb85['data']);
    }, avy9$['pixelRatio'] = function () {
      if (!avy9$['EnvConfig']['pixelRatioInt']) try {
        var hpu6t0 = wx['getSystemInfoSync']();return avy9$['EnvConfig']['pixelRatioInt'] = hpu6t0['pixelRatio'], hpu6t0 = hpu6t0, hpu6t0['pixelRatio'];
      } catch ($daxry) {}return avy9$['EnvConfig']['pixelRatioInt'];
    }, avy9$['createElement'] = function (oefjw) {
      if (oefjw == 'canvas') {
        var yrad$;return avy9$['idx'] == 0x1 ? avy9$['isZiYu'] ? (yrad$ = sharedCanvas, yrad$['style'] = {}) : yrad$ = window['canvas'] : yrad$ = window['wx']['createCanvas'](), avy9$['idx']++, yrad$;
      } else {
        if (oefjw == 'textarea' || oefjw == 'input') return avy9$['onCreateInput'](oefjw);else {
          if (oefjw == 'div') {
            var wofejn = avy9$['_preCreateElement'](oefjw);return wofejn['contains'] = function (xvyra$) {
              return null;
            }, wofejn['removeChild'] = function ($vaxy9) {}, wofejn;
          } else return avy9$['_preCreateElement'](oefjw);
        }
      }
    }, avy9$['onCreateInput'] = function (ej31f) {
      var osqwmn = avy9$['_preCreateElement'](ej31f);return osqwmn['focus'] = kdyaxr['wxinputFocus'], osqwmn['blur'] = kdyaxr['wxinputblur'], osqwmn['style'] = {}, osqwmn['value'] = 0x0, osqwmn['parentElement'] = {}, osqwmn['placeholder'] = {}, osqwmn['type'] = {}, osqwmn['setColor'] = function (fjwz) {}, osqwmn['setType'] = function (t8c5) {}, osqwmn['setFontFace'] = function (gc508b) {}, osqwmn['addEventListener'] = function (q6smo4) {}, osqwmn['contains'] = function (m6phq4) {
        return null;
      }, osqwmn['removeChild'] = function (cbgdk5) {}, osqwmn;
    }, avy9$['createShaderCondition'] = function (jwfezn) {
      var ay$x9v = this,
          bkrdcg = function () {
        var zi731 = jwfezn;return ay$x9v[jwfezn['replace']('this.', '')];
      };return bkrdcg;
    }, avy9$['EnvConfig'] = null, avy9$['window'] = null, avy9$['_preCreateElement'] = null, avy9$['_inited'] = ![], avy9$['wxRequest'] = null, avy9$['systemInfo'] = null, avy9$['version'] = '0.0.1', avy9$['isZiYu'] = ![], avy9$['isPosMsgYu'] = ![], avy9$['parseXMLFromString'] = function ($yvla) {
      var zfj13e, o4ms6;$yvla = $yvla['replace'](/>\s+</g, '><');try {
        zfj13e = new window['Parser']['DOMParser']()['parseFromString']($yvla, 'text/xml');
      } catch (h6pqm) {
        throw '需要引入xml解析库文件';
      }return zfj13e;
    }, avy9$['idx'] = 0x1, avy9$;
  }(),
      rdgxb = function () {
    function l9v$ay() {}ph46mq(l9v$ay, 'laya.wx.mini.MiniImage');var jfwzn = l9v$ay['prototype'];return jfwzn['_loadImage'] = function (brkdx) {
      var ly = this,
          o6q4 = ![];brkdx['indexOf']('layaNativeDir/') == -0x1 && (o6q4 = !![], brkdx = wofjne['formatURL'](brkdx));if (!u0ht6p['getFileInfo'](brkdx)) {
        if (brkdx['indexOf']('http://') != -0x1 || brkdx['indexOf']('https://') != -0x1) u0ht6p['downImg'](brkdx, new uph4(l9v$ay, l9v$ay['onDownImgCallBack'], [brkdx, ly]), brkdx);else l9v$ay['onCreateImage'](brkdx, ly, !![]);
      } else l9v$ay['onCreateImage'](brkdx, ly, !o6q4);
    }, l9v$ay['onDownImgCallBack'] = function (i372z1, e17z, ofen) {
      if (!ofen) l9v$ay['onCreateImage'](i372z1, e17z);else e17z['onError'](null);
    }, l9v$ay['onCreateImage'] = function (phtu64, kxydrb, wsmjn) {
      wsmjn === void 0x0 && (wsmjn = ![]);var y$rvax;if (!wsmjn) {
        var kcb8 = u0ht6p['getFileInfo'](phtu64),
            p6h4 = kcb8['md5'];y$rvax = u0ht6p['getFileNativePath'](p6h4);
      } else y$rvax = phtu64;if (kxydrb['imgCache'] == null) kxydrb['imgCache'] = {};var v9$ly;function osqm46() {
        v9$ly['onload'] = null, v9$ly['onerror'] = null, delete kxydrb['imgCache'][phtu64];
      };var vxy9 = function () {
        osqm46(), kxydrb['onLoaded'](v9$ly);
      },
          i7312z = function () {
        osqm46(), kxydrb['event']('error', 'Load image failed');
      };kxydrb['_type'] == 'nativeimage' ? (v9$ly = new bgkdrc['window']['Image'](), v9$ly['crossOrigin'] = '', v9$ly['onload'] = vxy9, v9$ly['onerror'] = i7312z, v9$ly['src'] = y$rvax, kxydrb['imgCache'][phtu64] = v9$ly) : new mnqow['create'](y$rvax, { 'onload': vxy9, 'onerror': i7312z, 'onCreate': function (fezj) {
          v9$ly = fezj, kxydrb['imgCache'][phtu64] = fezj;
        } });
    }, l9v$ay;
  }(),
      kdyaxr = function () {
    function wmojs() {}return ph46mq(wmojs, 'laya.wx.mini.MiniInput'), wmojs['_createInputElement'] = function () {
      dgrkbc['_initInput'](dgrkbc['area'] = bgkdrc['createElement']('textarea')), dgrkbc['_initInput'](dgrkbc['input'] = bgkdrc['createElement']('input')), dgrkbc['inputContainer'] = bgkdrc['createElement']('div'), dgrkbc['inputContainer']['style']['position'] = 'absolute', dgrkbc['inputContainer']['style']['zIndex'] = 0x186a0, bgkdrc['container']['appendChild'](dgrkbc['inputContainer']), dgrkbc['inputContainer']['setPos'] = function (yrdxkb, msoqw) {
        dgrkbc['inputContainer']['style']['left'] = yrdxkb + 'px', dgrkbc['inputContainer']['style']['top'] = msoqw + 'px';
      }, krdgbc['stage']['on']('resize', null, wmojs['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (owsjnm) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), puht80['_soundClass'] = l9$vay, puht80['_musicClass'] = l9$vay;
    }, wmojs['_onStageResize'] = function () {
      var enwjfz = krdgbc['stage']['_canvasTransform']['identity']();enwjfz['scale'](bgkdrc['width'] / h0p6t['canvas']['width'] / ms64qo['getPixelRatio'](), bgkdrc['height'] / h0p6t['canvas']['height'] / ms64qo['getPixelRatio']());
    }, wmojs['wxinputFocus'] = function (l9$vya) {
      var v9a$ly = dgrkbc['inputElement']['target'];if (v9a$ly && !v9a$ly['editable']) return;enwjz['window']['wx']['offKeyboardConfirm'](), enwjz['window']['wx']['offKeyboardInput'](), enwjz['window']['wx']['showKeyboard']({ 'defaultValue': v9a$ly['text'], 'maxLength': v9a$ly['maxChars'], 'multiple': v9a$ly['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (fwsoj) {}, 'fail': function (ay$v9l) {} }), enwjz['window']['wx']['onKeyboardConfirm'](function (mq6ps) {
        var bgdkc = mq6ps ? mq6ps['value'] : '';v9a$ly['text'] = bgdkc, v9a$ly['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), enwjz['window']['wx']['onKeyboardInput'](function (kbrgdx) {
        var cbdkg5 = kbrgdx ? kbrgdx['value'] : '';if (!v9a$ly['multiline']) {
          if (cbdkg5['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }v9a$ly['text'] = cbdkg5, v9a$ly['event']('input');
      });
    }, wmojs['inputEnter'] = function () {
      dgrkbc['inputElement']['target']['focus'] = ![];
    }, wmojs['wxinputblur'] = function () {
      wmojs['hideKeyboard']();
    }, wmojs['hideKeyboard'] = function () {
      enwjz['window']['wx']['offKeyboardConfirm'](), enwjz['window']['wx']['offKeyboardInput'](), enwjz['window']['wx']['hideKeyboard']({ 'success': function (yd$xra) {
          console['log']('隐藏键盘');
        }, 'fail': function (jwnsmo) {
          console['log']('隐藏键盘出错:' + (jwnsmo ? jwnsmo['errMsg'] : ''));
        } });
    }, wmojs;
  }(),
      zejfw1 = function () {
    function up4q6() {}ph46mq(up4q6, 'laya.wx.mini.MiniLoader');var wosmjn = up4q6['prototype'];return wosmjn['load'] = function (qsmp64, $y9lv, qnom4, gt085c, wone) {
      qnom4 === void 0x0 && (qnom4 = !![]), wone === void 0x0 && (wone = ![]);var som6q = this;som6q['_url'] = qsmp64;if (qsmp64['indexOf']('data:image') === 0x0) som6q['_type'] = $y9lv = 'image';else som6q['_type'] = $y9lv || ($y9lv = som6q['getTypeFromUrl'](qsmp64));som6q['_cache'] = qnom4, som6q['_data'] = null;var fweo = 'ascii';if (qsmp64['indexOf']('.fnt') != -0x1) fweo = 'utf8';else $y9lv == 'arraybuffer' && (fweo = '');;var ay$9lv = tp6uh['getFileExtension'](qsmp64);if (up4q6['_fileTypeArr']['indexOf'](ay$9lv) != -0x1) enwjz['EnvConfig']['load']['call'](this, qsmp64, $y9lv, qnom4, gt085c, wone);else {
        if (!u0ht6p['getFileInfo'](qsmp64)) {
          if (qsmp64['indexOf']('layaNativeDir/') != -0x1) {
            if (enwjz['isZiYu']) {
              var $alv_9 = u0ht6p['ziyuFileData'][qsmp64];som6q['onLoaded']($alv_9);return;
            } else {
              cosnole['log']('read read'), u0ht6p['read'](qsmp64, fweo, new uph4(up4q6, up4q6['onReadNativeCallBack'], [fweo, qsmp64, $y9lv, qnom4, gt085c, wone, som6q]));return;
            }
          }if (wofjne['rootPath'] == '') var u4p6qh = qsmp64;else u4p6qh = qsmp64['split'](wofjne['rootPath'])[0x0];qsmp64['indexOf']('http://') != -0x1 || qsmp64['indexOf']('https://') != -0x1 ? enwjz['EnvConfig']['load']['call'](som6q, qsmp64, $y9lv, qnom4, gt085c, wone) : u0ht6p['readFile'](u4p6qh, fweo, new uph4(up4q6, up4q6['onReadNativeCallBack'], [fweo, qsmp64, $y9lv, qnom4, gt085c, wone, som6q]), qsmp64);
        } else enwjz['EnvConfig']['load']['call'](this, qsmp64, $y9lv, qnom4, gt085c, wone);
      }
    }, wosmjn['resMgrLoad'] = function (ct0u, monqws, uh0pt6, $9avyl, wsonfj, g5kcdb, dxgb) {
      uh0pt6 === void 0x0 && (uh0pt6 = 0x0), $9avyl === void 0x0 && ($9avyl = ![]), wsonfj === void 0x0 && (wsonfj = ![]), g5kcdb === void 0x0 && (g5kcdb = 0x0), dxgb === void 0x0 && (dxgb = 0x3), ct0u['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ct0u), enwjz['EnvConfig']['resMgrLoad'](ct0u, (omqnw, ydx$ra, qomn4) => {
        up4q6['prototype']['resMgrLoadCallBack'](omqnw, ydx$ra, qomn4, monqws);
      }, uh0pt6, $9avyl, wsonfj, g5kcdb, dxgb);
    }, wosmjn['resMgrLoadCallBack'] = function (bg8ck, jnowe, $xrvay, v$la_9) {
      console['log']('buff:::', bg8ck, $xrvay, u0ht6p['fileNativeDir'] + '///' + u0ht6p['fileListName']), v$la_9(bg8ck, jnowe, $xrvay);
    }, wosmjn['clearRes'] = function (dy$, xkdayr) {
      xkdayr === void 0x0 && (xkdayr = ![]);var cbd5g = this;cbd5g['clearRes'](dy$, xkdayr);var e3zfj1 = u0ht6p['getFileInfo'](dy$);if (e3zfj1 && (dy$['indexOf']('http://') != -0x1 || dy$['indexOf']('https://') != -0x1)) {
        var yxrad = e3zfj1['md5'],
            jswonf = u0ht6p['getFileNativePath'](yxrad);u0ht6p['remove'](jswonf);
      }
    }, up4q6['onReadNativeCallBack'] = function (kbcrgd, efwz1j, c085tg, grdxbk, qs6o4, p4uh, f23e1, dbckrg, fj1ze) {
      grdxbk === void 0x0 && (grdxbk = !![]), p4uh === void 0x0 && (p4uh = ![]), dbckrg === void 0x0 && (dbckrg = 0x0);if (!dbckrg) {
        var gkbc85;if (c085tg == 'json' || c085tg == 'atlas') gkbc85 = enwjz['getJson'](fj1ze['data']);else c085tg == 'xml' ? gkbc85 = tp6uh['parseXMLFromString'](fj1ze['data']) : gkbc85 = fj1ze['data'];f23e1['onLoaded'](gkbc85), !enwjz['isZiYu'] && enwjz['isPosMsgYu'] && c085tg != 'arraybuffer' && wx['postMessage']({ 'url': efwz1j, 'data': gkbc85, 'isLoad': !![] });
      } else dbckrg == 0x1 && enwjz['EnvConfig']['load']['call'](f23e1, efwz1j, c085tg, grdxbk, qs6o4, p4uh);
    }, smq4o(up4q6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), up4q6;
  }(),
      u0ht6p = function ($rayv) {
    function v9ya$() {
      v9ya$['__super']['call'](this);;
    }return ph46mq(v9ya$, 'laya.wx.mini.MiniFileMgr', $rayv), v9ya$['isLoadFile'] = function ($xyad) {
      return v9ya$['_fileTypeArr']['indexOf']($xyad) != -0x1 ? !![] : ![];
    }, v9ya$['getFileInfo'] = function (cg5kb8) {
      var avl$ = cg5kb8['split']('?')[0x0],
          m46spq = v9ya$['filesListObj'][avl$];if (m46spq == null) return null;else return m46spq;return null;
    }, v9ya$['onFileUpdate'] = function (pmh6q, nmqo4) {
      var bg8k5 = pmh6q['split']('/'),
          tu05c = bg8k5[bg8k5['length'] - 0x1],
          qh6pm = v9ya$['getFileInfo'](nmqo4);if (qh6pm == null) v9ya$['onSaveFile'](nmqo4, tu05c);else {
        if (qh6pm['readyUrl'] != nmqo4) v9ya$['remove'](tu05c, nmqo4);
      }
    }, v9ya$['exits'] = function (drkbgc, cgbkr) {
      var ezjfnw = v9ya$['getFileNativePath'](drkbgc);v9ya$['fs']['getFileInfo']({ 'filePath': ezjfnw, 'success': function (u8t5h) {
          cgbkr != null && cgbkr['runWith']([0x0, u8t5h]);
        }, 'fail': function (mqp46h) {
          cgbkr != null && cgbkr['runWith']([0x1, mqp46h]);
        } });
    }, v9ya$['read'] = function (gkcd, $9yavl, wezjf1, raxv$y) {
      $9yavl === void 0x0 && ($9yavl = 'ascill'), raxv$y === void 0x0 && (raxv$y = '');var b05gc;raxv$y != '' ? b05gc = v9ya$['getFileNativePath'](gkcd) : b05gc = gkcd, v9ya$['fs']['readFile']({ 'filePath': b05gc, 'encoding': $9yavl, 'success': function (p0ht8u) {
          wezjf1 != null && wezjf1['runWith']([0x0, p0ht8u]);
        }, 'fail': function (n4oq) {
          if (n4oq && raxv$y != '') v9ya$['down'](raxv$y, $9yavl, wezjf1, raxv$y);else wezjf1 != null && wezjf1['runWith']([0x1]);
        } });
    }, v9ya$['readNativeFile'] = function (mq4on, bkxyr) {
      v9ya$['fs']['readFile']({ 'filePath': mq4on, 'encoding': '', 'success': function ($yal) {
          bkxyr != null && bkxyr['runWith']([0x0]);
        }, 'fail': function (xryav$) {
          bkxyr != null && bkxyr['runWith']([0x1]);
        } });
    }, v9ya$['down'] = function (m46qs, cu05t8, ydr$a, qnmo4s) {
      cu05t8 === void 0x0 && (cu05t8 = 'ascill'), qnmo4s === void 0x0 && (qnmo4s = '');var cd5kgb = v9ya$['getFileNativePath'](qnmo4s),
          c8gt0 = v9ya$['wxdown']({ 'url': m46qs, 'filePath': cd5kgb, 'success': function (v9ay$l) {
          if (v9ay$l['statusCode'] === 0xc8) v9ya$['readFile'](v9ay$l['filePath'], cu05t8, ydr$a, qnmo4s);
        }, 'fail': function (akxy) {
          ydr$a != null && ydr$a['runWith']([0x1, akxy]);
        } });c8gt0['onProgressUpdate'](function (gk5dc) {
        ydr$a != null && ydr$a['runWith']([0x2, gk5dc['progress']]);
      });
    }, v9ya$['readFile'] = function (avrxy, $va_l, t58gc, kdra) {
      $va_l === void 0x0 && ($va_l = 'ascill'), kdra === void 0x0 && (kdra = ''), v9ya$['fs']['readFile']({ 'filePath': avrxy, 'encoding': $va_l, 'success': function (wqonms) {
          if (avrxy['indexOf']('http://') != -0x1 || avrxy['indexOf']('https://') != -0x1) v9ya$['onFileUpdate'](avrxy, kdra);t58gc != null && t58gc['runWith']([0x0, wqonms]);
        }, 'fail': function (pqm64h) {
          if (pqm64h) t58gc != null && t58gc['runWith']([0x1, pqm64h]);
        } });
    }, v9ya$['downImg'] = function (ht5u, z3127e, nwsfo) {
      nwsfo === void 0x0 && (nwsfo = '');var ewf1jz = v9ya$['wxdown']({ 'url': ht5u, 'success': function (nso4m) {
          nso4m['statusCode'] === 0xc8 && v9ya$['copyFile'](nso4m['tempFilePath'], nwsfo, z3127e);
        }, 'fail': function (xya$d) {
          z3127e != null && z3127e['runWith']([0x1, xya$d]);
        } });
    }, v9ya$['copyFile'] = function (oq6m4, tg5c80, iz23) {
      var qsmo = oq6m4['split']('/'),
          eown = qsmo[qsmo['length'] - 0x1],
          lya9v$ = tg5c80['split']('?')[0x0],
          xvy9a$ = v9ya$['getFileInfo'](tg5c80),
          j1fzew = v9ya$['getFileNativePath'](eown);v9ya$['fs']['copyFile']({ 'srcPath': oq6m4, 'destPath': j1fzew, 'success': function (t08c5u) {
          if (!xvy9a$) v9ya$['onSaveFile'](tg5c80, eown), iz23 != null && iz23['runWith']([0x0]);else {
            if (xvy9a$['readyUrl'] != tg5c80) v9ya$['remove'](eown, tg5c80, iz23);
          }
        }, 'fail': function (qmnow) {
          iz23 != null && iz23['runWith']([0x1, qmnow]);
        } });
    }, v9ya$['getFileNativePath'] = function (fw1ze) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + fw1ze;
    }, v9ya$['remove'] = function (swfon, qp46m, c58ut) {
      qp46m === void 0x0 && (qp46m = '');var t6hp = v9ya$['getFileInfo'](qp46m),
          ckgb8 = v9ya$['getFileNativePath'](t6hp['md5']);krdgbc['loader']['clearRes'](t6hp['readyUrl']), v9ya$['fs']['unlink']({ 'filePath': ckgb8, 'success': function (qs4mo) {
          if (qp46m != '') v9ya$['onSaveFile'](qp46m, swfon);c58ut != null && c58ut['runWith']([0x0]);
        }, 'fail': function (krbdg) {} });
    }, v9ya$['onSaveFile'] = function (y$xarv, z13i27) {
      var p64mqh = y$xarv['split']('?')[0x0];v9ya$['filesListObj'][p64mqh] = { 'md5': z13i27, 'readyUrl': y$xarv }, v9ya$['fs']['writeFile']({ 'filePath': v9ya$['fileNativeDir'] + '/' + v9ya$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v9ya$['filesListObj']), 'success': function (jnos) {
          console['log']('写入测试测试成功：', jnos);
        }, 'fail': function (e731z2) {
          console['log']('写入测试测试失败：', e731z2);
        } });
    }, v9ya$['existDir'] = function (rkgdb, tph4u6) {
      v9ya$['fs']['mkdir']({ 'dirPath': rkgdb, 'success': function (t0up6h) {
          tph4u6 != null && tph4u6['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (nfwosj) {
          if (nfwosj['errMsg']['indexOf']('file already exists') != -0x1) v9ya$['readSync'](v9ya$['fileListName'], 'utf8', tph4u6);else tph4u6 != null && tph4u6['runWith']([0x1, nfwosj]);
        } });
    }, v9ya$['readSync'] = function (g8ct0, kgc58b, w1jzef, lv_) {
      kgc58b === void 0x0 && (kgc58b = 'ascill'), lv_ === void 0x0 && (lv_ = '');var $ayl = v9ya$['getFileNativePath'](g8ct0),
          nowjsf;try {
        nowjsf = v9ya$['fs']['readFileSync']($ayl), w1jzef != null && w1jzef['runWith']([0x0, { 'data': nowjsf }]);
      } catch ($ly9a) {
        w1jzef != null && w1jzef['runWith']([0x1]);
      }
    }, v9ya$['readCache'] = function () {}, v9ya$['writeCache'] = function (jfwso) {
      var osjnwf = readyUrl['split']('?')[0x0];v9ya$['filesListObj'][osjnwf] = { 'md5': md5Name, 'readyUrl': readyUrl }, v9ya$['fs']['writeFile']({ 'filePath': v9ya$['fileNativeDir'] + '/' + v9ya$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v9ya$['filesListObj']), 'success': function (f3z21) {}, 'fail': function (omnsw) {} });
    }, v9ya$['setNativeFileDir'] = function (jfzew) {
      v9ya$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + jfzew;
    }, v9ya$['filesListObj'] = {}, v9ya$['fileNativeDir'] = null, v9ya$['fileListName'] = 'layaairfiles.txt', v9ya$['ziyuFileData'] = {}, smq4o(v9ya$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), v9ya$;
  }(a9v$l),
      l9$vay = function (bxgkd) {
    function fsj() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], fsj['__super']['call'](this), this['_sound'] = fsj['_createSound']();
    }ph46mq(fsj, 'laya.wx.mini.MiniSound', bxgkd);var t80uph = fsj['prototype'];return t80uph['load'] = function (onwef) {
      var qm4 = this;onwef = wofjne['formatURL'](onwef), this['url'] = onwef;if (fsj['_audioCache'][onwef]) {
        this['event']('complete');return;
      }function rkbdx() {
        if (fsj['_null'] != undefined) qm4['_sound']['onCanplay'](fsj['_null']), qm4['_sound']['onError'](fsj['_null']);else try {
          qm4['_sound']['onCanplay'](null), qm4['_sound']['onError'](null), fsj['_null'] = null;
        } catch (kardyx) {
          console['warn']('[wxmini] _clearSound:' + kardyx), qm4['_sound']['onCanplay'](fnewzj), qm4['_sound']['onError'](fnewzj), fsj['_null'] = fnewzj;
        }
      }function z1j() {
        rkbdx(), p4tuh['loaded'] = !![], p4tuh['event']('complete'), fsj['_audioCache'][p4tuh['url']] = p4tuh;
      }function x$ar(bgkxdr) {
        console['error']('errCode=' + bgkxdr['errCode'] + '  errMsg=' + bgkxdr['errMsg']), rkbdx(), p4tuh['event']('error');
      }function fnewzj() {}this['_sound']['onCanplay'](z1j), this['_sound']['onError'](x$ar), this['_sound']['src'] = onwef;var p4tuh = this;
    }, t80uph['play'] = function (gcbkr, mqn4o) {
      gcbkr === void 0x0 && (gcbkr = 0x0), mqn4o === void 0x0 && (mqn4o = 0x0);var wjnfez;if (this['url'] == puht80['_tMusic']) {
        if (!fsj['_musicAudio']) fsj['_musicAudio'] = fsj['_createSound']();wjnfez = fsj['_musicAudio'];
      } else wjnfez = fsj['_createSound']();wjnfez['src'] = this['url'];var pth4 = new krbcd(wjnfez);return pth4['url'] = this['url'], pth4['loops'] = mqn4o, pth4['startTime'] = gcbkr, pth4['play'](), puht80['addChannel'](pth4), pth4;
    }, t80uph['dispose'] = function () {
      var jf1wze = fsj['_audioCache'][this['url']];jf1wze && (jf1wze['src'] = '', delete fsj['_audioCache'][this['url']]);
    }, z13jef(0x0, t80uph, 'duration', function () {
      return this['_sound']['duration'];
    }), fsj['_createSound'] = function () {
      return fsj['_id']++, enwjz['window']['wx']['createInnerAudioContext']();
    }, fsj['_musicAudio'] = null, fsj['_id'] = 0x0, fsj['_audioCache'] = {}, fsj['_null'] = undefined, fsj;
  }(a9v$l),
      krbcd = function (l$a9vy) {
    function uc580(bcdrg) {
      this['_audio'] = null, this['_onEnd'] = null, uc580['__super']['call'](this), this['_audio'] = bcdrg, this['_onEnd'] = tp6uh['bind'](this['__onEnd'], this), bcdrg['onEnded'](this['_onEnd']);
    }ph46mq(uc580, 'laya.wx.mini.MiniSoundChannel', l$a9vy);var u4q = uc580['prototype'];return u4q['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (krdgbc['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, u4q['__onNull'] = function () {}, u4q['play'] = function () {
      this['isStopped'] = ![], puht80['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, u4q['stop'] = function () {
      this['isStopped'] = !![], puht80['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (uc580['_null'] != undefined) this['_audio']['onEnded'](uc580['_null']);else try {
        this['_audio']['onEnded'](null), uc580['_null'] = null;
      } catch (kaxyr) {
        console['warn']('[wxmini] stop:' + kaxyr), this['_audio']['onEnded'](tp6uh['bind'](this['__onNull'], this)), uc580['_null'] = tp6uh['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, u4q['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, u4q['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], puht80['addChannel'](this), this['_audio']['play']();
    }, z13jef(0x0, u4q, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), z13jef(0x0, u4q, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), z13jef(0x0, u4q, 'volume', function () {
      return 0x1;
    }, function (mnswoj) {}), uc580['_null'] = undefined, uc580;
  }(nfjze);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var j3ef1 in Laya) {
    var h64q = Laya[j3ef1];h64q && h64q['__isclass'] && (exports[j3ef1] = h64q);
  }
});