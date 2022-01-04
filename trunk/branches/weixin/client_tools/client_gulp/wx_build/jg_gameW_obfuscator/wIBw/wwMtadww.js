var s = wx.$W;
(function (window, document, ptu80h) {
  var v_l9$a = ptu80h['un'],
      yv$l9a = ptu80h['uns'],
      $v9a = ptu80h['static'],
      bg5kcd = ptu80h['class'],
      b8gk = ptu80h['getset'],
      jofn = ptu80h['__newvec'],
      wjomsn = laya['utils']['Browser'],
      ydxbk = laya['events']['Event'],
      zfnjw = laya['events']['EventDispatcher'],
      v$x9ya = laya['resource']['HTMLImage'],
      aydxr = laya['utils']['Handler'],
      cg5kd = laya['display']['Input'],
      njofwe = laya['net']['Loader'],
      fe21z = laya['maths']['Matrix'],
      jfowns = laya['renders']['Render'],
      drakxy = laya['utils']['RunDriver'],
      vl$9a = laya['media']['Sound'],
      y9$lv = laya['media']['SoundChannel'],
      smnojw = laya['media']['SoundManager'],
      xd$ay = laya['display']['Stage'],
      mq4s6p = laya['net']['URL'],
      y$9val = laya['utils']['Utils'],
      bg50c8 = function () {
    function j3zf() {}return bg5kcd(j3zf, 'laya.wx.mini.MiniAdpter'), j3zf['getJson'] = function (la_9) {
      return JSON['parse'](la_9);
    }, j3zf['init'] = function (fz31j, fze1jw) {
      fz31j === void 0x0 && (fz31j = ![]), fze1jw === void 0x0 && (fze1jw = ![]);if (j3zf['_inited']) return;j3zf['window'] = window;if (j3zf['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;j3zf['_inited'] = !![], j3zf['isZiYu'] = fze1jw, j3zf['isPosMsgYu'] = fz31j, j3zf['EnvConfig'] = {}, !j3zf['isZiYu'] && (kxda['setNativeFileDir']('/layaairGame'), kxda['existDir'](kxda['fileNativeDir'], aydxr['create'](j3zf, j3zf['onMkdirCallBack']))), j3zf['window']['focus'] = function () {}, ptu80h['getUrlPath'] = function () {}, j3zf['window']['logtime'] = function (hp64q) {}, j3zf['window']['alertTimeLog'] = function (h6pt4) {}, j3zf['window']['resetShareInfo'] = function () {}, j3zf['window']['CanvasRenderingContext2D'] = function () {}, j3zf['window']['CanvasRenderingContext2D']['prototype'] = j3zf['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], j3zf['window']['document']['body']['appendChild'] = function () {}, j3zf['EnvConfig']['pixelRatioInt'] = 0x0, drakxy['getPixelRatio'] = j3zf['pixelRatio'], j3zf['_preCreateElement'] = wjomsn['createElement'], wjomsn['createElement'] = j3zf['createElement'], drakxy['createShaderCondition'] = j3zf['createShaderCondition'], y$9val['parseXMLFromString'] = j3zf['parseXMLFromString'], cg5kd['_createInputElement'] = $va9xy['_createInputElement'], j3zf['EnvConfig']['load'] = njofwe['prototype']['load'], njofwe['prototype']['load'] = gt05['prototype']['load'], j3zf['isZiYu'] && fz31j && wx['onMessage'](function (qpm) {
        qpm['isLoad'] && (kxda['ziyuFileData'][qpm['url']] = qpm['data']);
      });
    }, j3zf['onMkdirCallBack'] = function (tup08, dxgb) {
      if (!tup08) kxda['filesListObj'] = JSON['parse'](dxgb['data']);
    }, j3zf['pixelRatio'] = function () {
      if (!j3zf['EnvConfig']['pixelRatioInt']) try {
        var p46uqh = wx['getSystemInfoSync']();return j3zf['EnvConfig']['pixelRatioInt'] = p46uqh['pixelRatio'], p46uqh = p46uqh, p46uqh['pixelRatio'];
      } catch (bgx) {}return j3zf['EnvConfig']['pixelRatioInt'];
    }, j3zf['createElement'] = function ($lva_) {
      if ($lva_ == 'canvas') {
        var oq4sn;return j3zf['idx'] == 0x1 ? j3zf['isZiYu'] ? (oq4sn = sharedCanvas, oq4sn['style'] = {}) : oq4sn = window['canvas'] : oq4sn = window['wx']['createCanvas'](), j3zf['idx']++, oq4sn;
      } else {
        if ($lva_ == 'textarea' || $lva_ == 'input') return j3zf['onCreateInput']($lva_);else {
          if ($lva_ == 'div') {
            var znwfje = j3zf['_preCreateElement']($lva_);return znwfje['contains'] = function (u64pt) {
              return null;
            }, znwfje['removeChild'] = function (grdxkb) {}, znwfje;
          } else return j3zf['_preCreateElement']($lva_);
        }
      }
    }, j3zf['onCreateInput'] = function (dcg5bk) {
      var h4qp6 = j3zf['_preCreateElement'](dcg5bk);return h4qp6['focus'] = $va9xy['wxinputFocus'], h4qp6['blur'] = $va9xy['wxinputblur'], h4qp6['style'] = {}, h4qp6['value'] = 0x0, h4qp6['parentElement'] = {}, h4qp6['placeholder'] = {}, h4qp6['type'] = {}, h4qp6['setColor'] = function (fejw1z) {}, h4qp6['setType'] = function (q6s) {}, h4qp6['setFontFace'] = function (nqm4os) {}, h4qp6['addEventListener'] = function (dkxybr) {}, h4qp6['contains'] = function (yadk) {
        return null;
      }, h4qp6['removeChild'] = function (jnewzf) {}, h4qp6;
    }, j3zf['createShaderCondition'] = function (ayv9x$) {
      var h64qm = this,
          $ydaxr = function () {
        var zfje13 = ayv9x$;return h64qm[ayv9x$['replace']('this.', '')];
      };return $ydaxr;
    }, j3zf['EnvConfig'] = null, j3zf['window'] = null, j3zf['_preCreateElement'] = null, j3zf['_inited'] = ![], j3zf['wxRequest'] = null, j3zf['systemInfo'] = null, j3zf['version'] = '0.0.1', j3zf['isZiYu'] = ![], j3zf['isPosMsgYu'] = ![], j3zf['parseXMLFromString'] = function ($radx) {
      var kcbdrg, zefjw;$radx = $radx['replace'](/>\s+</g, '><');try {
        kcbdrg = new window['Parser']['DOMParser']()['parseFromString']($radx, 'text/xml');
      } catch (t08uhp) {
        throw '需要引入xml解析库文件';
      }return kcbdrg;
    }, j3zf['idx'] = 0x1, j3zf;
  }(),
      $xv9a = function () {
    function j3ef1z() {}bg5kcd(j3ef1z, 'laya.wx.mini.MiniImage');var i172z = j3ef1z['prototype'];return i172z['_loadImage'] = function (yvar) {
      var e31z2f = this,
          t0p = ![];yvar['indexOf']('layaNativeDir/') == -0x1 && (t0p = !![], yvar = mq4s6p['formatURL'](yvar));if (!kxda['getFileInfo'](yvar)) {
        if (yvar['indexOf']('http://') != -0x1 || yvar['indexOf']('https://') != -0x1) kxda['downImg'](yvar, new aydxr(j3ef1z, j3ef1z['onDownImgCallBack'], [yvar, e31z2f]), yvar);else j3ef1z['onCreateImage'](yvar, e31z2f, !![]);
      } else j3ef1z['onCreateImage'](yvar, e31z2f, !t0p);
    }, j3ef1z['onDownImgCallBack'] = function (qs6, h6t0, vyxa$9) {
      if (!vyxa$9) j3ef1z['onCreateImage'](qs6, h6t0);else h6t0['onError'](null);
    }, j3ef1z['onCreateImage'] = function (l_9$v, i371, ewfzj1) {
      ewfzj1 === void 0x0 && (ewfzj1 = ![]);var q46osm;if (!ewfzj1) {
        var da$yx = kxda['getFileInfo'](l_9$v),
            xavyr = da$yx['md5'];q46osm = kxda['getFileNativePath'](xavyr);
      } else q46osm = l_9$v;if (i371['imgCache'] == null) i371['imgCache'] = {};var c58t;function yla9() {
        c58t['onload'] = null, c58t['onerror'] = null, delete i371['imgCache'][l_9$v];
      };var _$lav9 = function () {
        yla9(), i371['onLoaded'](c58t);
      },
          n4m = function () {
        yla9(), i371['event']('error', 'Load image failed');
      };i371['_type'] == 'nativeimage' ? (c58t = new wjomsn['window']['Image'](), c58t['crossOrigin'] = '', c58t['onload'] = _$lav9, c58t['onerror'] = n4m, c58t['src'] = q46osm, i371['imgCache'][l_9$v] = c58t) : new v$x9ya['create'](q46osm, { 'onload': _$lav9, 'onerror': n4m, 'onCreate': function (efjnw) {
          c58t = efjnw, i371['imgCache'][l_9$v] = efjnw;
        } });
    }, j3ef1z;
  }(),
      $va9xy = function () {
    function ef123() {}return bg5kcd(ef123, 'laya.wx.mini.MiniInput'), ef123['_createInputElement'] = function () {
      cg5kd['_initInput'](cg5kd['area'] = wjomsn['createElement']('textarea')), cg5kd['_initInput'](cg5kd['input'] = wjomsn['createElement']('input')), cg5kd['inputContainer'] = wjomsn['createElement']('div'), cg5kd['inputContainer']['style']['position'] = 'absolute', cg5kd['inputContainer']['style']['zIndex'] = 0x186a0, wjomsn['container']['appendChild'](cg5kd['inputContainer']), cg5kd['inputContainer']['setPos'] = function (ze713, mosnq) {
        cg5kd['inputContainer']['style']['left'] = ze713 + 'px', cg5kd['inputContainer']['style']['top'] = mosnq + 'px';
      }, ptu80h['stage']['on']('resize', null, ef123['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (u05th) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), smnojw['_soundClass'] = lay9$, smnojw['_musicClass'] = lay9$;
    }, ef123['_onStageResize'] = function () {
      var fnsjow = ptu80h['stage']['_canvasTransform']['identity']();fnsjow['scale'](wjomsn['width'] / jfowns['canvas']['width'] / drakxy['getPixelRatio'](), wjomsn['height'] / jfowns['canvas']['height'] / drakxy['getPixelRatio']());
    }, ef123['wxinputFocus'] = function (ayrdxk) {
      var nwmqso = cg5kd['inputElement']['target'];if (nwmqso && !nwmqso['editable']) return;bg50c8['window']['wx']['offKeyboardConfirm'](), bg50c8['window']['wx']['offKeyboardInput'](), bg50c8['window']['wx']['showKeyboard']({ 'defaultValue': nwmqso['text'], 'maxLength': nwmqso['maxChars'], 'multiple': nwmqso['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (pt8u0) {}, 'fail': function (x$day) {} }), bg50c8['window']['wx']['onKeyboardConfirm'](function (s6oq4) {
        var aykrxd = s6oq4 ? s6oq4['value'] : '';nwmqso['text'] = aykrxd, nwmqso['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), bg50c8['window']['wx']['onKeyboardInput'](function (qhpu6) {
        var rxa$vy = qhpu6 ? qhpu6['value'] : '';if (!nwmqso['multiline']) {
          if (rxa$vy['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }nwmqso['text'] = rxa$vy, nwmqso['event']('input');
      });
    }, ef123['inputEnter'] = function () {
      cg5kd['inputElement']['target']['focus'] = ![];
    }, ef123['wxinputblur'] = function () {
      ef123['hideKeyboard']();
    }, ef123['hideKeyboard'] = function () {
      bg50c8['window']['wx']['offKeyboardConfirm'](), bg50c8['window']['wx']['offKeyboardInput'](), bg50c8['window']['wx']['hideKeyboard']({ 'success': function (z23i7) {
          console['log']('隐藏键盘');
        }, 'fail': function (osfnj) {
          console['log']('隐藏键盘出错:' + (osfnj ? osfnj['errMsg'] : ''));
        } });
    }, ef123;
  }(),
      gt05 = function () {
    function m6o4s() {}bg5kcd(m6o4s, 'laya.wx.mini.MiniLoader');var wnfej = m6o4s['prototype'];return wnfej['load'] = function (sp4m6, fwzejn, ct0u85, snfjo, h46utp) {
      ct0u85 === void 0x0 && (ct0u85 = !![]), h46utp === void 0x0 && (h46utp = ![]);var $daxyr = this;$daxyr['_url'] = sp4m6;if (sp4m6['indexOf']('data:image') === 0x0) $daxyr['_type'] = fwzejn = 'image';else $daxyr['_type'] = fwzejn || (fwzejn = $daxyr['getTypeFromUrl'](sp4m6));$daxyr['_cache'] = ct0u85, $daxyr['_data'] = null;var wq = 'ascii';if (sp4m6['indexOf']('.fnt') != -0x1) wq = 'utf8';else fwzejn == 'arraybuffer' && (wq = '');;var efz231 = y$9val['getFileExtension'](sp4m6);if (m6o4s['_fileTypeArr']['indexOf'](efz231) != -0x1) bg50c8['EnvConfig']['load']['call'](this, sp4m6, fwzejn, ct0u85, snfjo, h46utp);else {
        if (!kxda['getFileInfo'](sp4m6)) {
          if (sp4m6['indexOf']('layaNativeDir/') != -0x1) {
            if (bg50c8['isZiYu']) {
              var e31fz2 = kxda['ziyuFileData'][sp4m6];$daxyr['onLoaded'](e31fz2);return;
            } else {
              cosnole['log']('read read'), kxda['read'](sp4m6, wq, new aydxr(m6o4s, m6o4s['onReadNativeCallBack'], [wq, sp4m6, fwzejn, ct0u85, snfjo, h46utp, $daxyr]));return;
            }
          }if (mq4s6p['rootPath'] == '') var nofwej = sp4m6;else nofwej = sp4m6['split'](mq4s6p['rootPath'])[0x0];sp4m6['indexOf']('http://') != -0x1 || sp4m6['indexOf']('https://') != -0x1 ? bg50c8['EnvConfig']['load']['call']($daxyr, sp4m6, fwzejn, ct0u85, snfjo, h46utp) : kxda['readFile'](nofwej, wq, new aydxr(m6o4s, m6o4s['onReadNativeCallBack'], [wq, sp4m6, fwzejn, ct0u85, snfjo, h46utp, $daxyr]), sp4m6);
        } else bg50c8['EnvConfig']['load']['call'](this, sp4m6, fwzejn, ct0u85, snfjo, h46utp);
      }
    }, wnfej['resMgrLoad'] = function (gc8t50, qnow, th805, krbcd, xrav$y, th058, g5tc8) {
      th805 === void 0x0 && (th805 = 0x0), krbcd === void 0x0 && (krbcd = ![]), xrav$y === void 0x0 && (xrav$y = ![]), th058 === void 0x0 && (th058 = 0x0), g5tc8 === void 0x0 && (g5tc8 = 0x3), gc8t50['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', gc8t50), bg50c8['EnvConfig']['resMgrLoad'](gc8t50, (rdxkbg, t08uc5, je1fw) => {
        m6o4s['prototype']['resMgrLoadCallBack'](rdxkbg, t08uc5, je1fw, qnow);
      }, th805, krbcd, xrav$y, th058, g5tc8);
    }, wnfej['resMgrLoadCallBack'] = function (da$, znejfw, hupq4, xa$9vy) {
      console['log']('buff:::', da$, hupq4, kxda['fileNativeDir'] + '///' + kxda['fileListName']), xa$9vy(da$, znejfw, hupq4);
    }, wnfej['clearRes'] = function (bcgkd, $x9va) {
      $x9va === void 0x0 && ($x9va = ![]);var gb08c5 = this;gb08c5['clearRes'](bcgkd, $x9va);var wnfjz = kxda['getFileInfo'](bcgkd);if (wnfjz && (bcgkd['indexOf']('http://') != -0x1 || bcgkd['indexOf']('https://') != -0x1)) {
        var $xar = wnfjz['md5'],
            $_la = kxda['getFileNativePath']($xar);kxda['remove']($_la);
      }
    }, m6o4s['onReadNativeCallBack'] = function (mqp6h4, znwje, m4oqs6, $yavl9, c8g5k, b8g5c, oqm4, c8kbg5, yxrva) {
      $yavl9 === void 0x0 && ($yavl9 = !![]), b8g5c === void 0x0 && (b8g5c = ![]), c8kbg5 === void 0x0 && (c8kbg5 = 0x0);if (!c8kbg5) {
        var va$ryx;if (m4oqs6 == 'json' || m4oqs6 == 'atlas') va$ryx = bg50c8['getJson'](yxrva['data']);else m4oqs6 == 'xml' ? va$ryx = y$9val['parseXMLFromString'](yxrva['data']) : va$ryx = yxrva['data'];oqm4['onLoaded'](va$ryx), !bg50c8['isZiYu'] && bg50c8['isPosMsgYu'] && m4oqs6 != 'arraybuffer' && wx['postMessage']({ 'url': znwje, 'data': va$ryx, 'isLoad': !![] });
      } else c8kbg5 == 0x1 && bg50c8['EnvConfig']['load']['call'](oqm4, znwje, m4oqs6, $yavl9, c8g5k, b8g5c);
    }, $v9a(m6o4s, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), m6o4s;
  }(),
      kxda = function (jze1wf) {
    function bk8c5g() {
      bk8c5g['__super']['call'](this);;
    }return bg5kcd(bk8c5g, 'laya.wx.mini.MiniFileMgr', jze1wf), bk8c5g['isLoadFile'] = function (r$xya) {
      return bk8c5g['_fileTypeArr']['indexOf'](r$xya) != -0x1 ? !![] : ![];
    }, bk8c5g['getFileInfo'] = function (wnjms) {
      var bkc5 = wnjms['split']('?')[0x0],
          ax$vy = bk8c5g['filesListObj'][bkc5];if (ax$vy == null) return null;else return ax$vy;return null;
    }, bk8c5g['onFileUpdate'] = function (drbkxg, noqms) {
      var ewnjzf = drbkxg['split']('/'),
          jomwns = ewnjzf[ewnjzf['length'] - 0x1],
          msp46 = bk8c5g['getFileInfo'](noqms);if (msp46 == null) bk8c5g['onSaveFile'](noqms, jomwns);else {
        if (msp46['readyUrl'] != noqms) bk8c5g['remove'](jomwns, noqms);
      }
    }, bk8c5g['exits'] = function (qmhp46, qh46pm) {
      var ya$rv = bk8c5g['getFileNativePath'](qmhp46);bk8c5g['fs']['getFileInfo']({ 'filePath': ya$rv, 'success': function (wmosjn) {
          qh46pm != null && qh46pm['runWith']([0x0, wmosjn]);
        }, 'fail': function (z7e21) {
          qh46pm != null && qh46pm['runWith']([0x1, z7e21]);
        } });
    }, bk8c5g['read'] = function (wnzfe, brykdx, rakdyx, u6hpt0) {
      brykdx === void 0x0 && (brykdx = 'ascill'), u6hpt0 === void 0x0 && (u6hpt0 = '');var krgdc;u6hpt0 != '' ? krgdc = bk8c5g['getFileNativePath'](wnzfe) : krgdc = wnzfe, bk8c5g['fs']['readFile']({ 'filePath': krgdc, 'encoding': brykdx, 'success': function (kxbdg) {
          rakdyx != null && rakdyx['runWith']([0x0, kxbdg]);
        }, 'fail': function (jfez) {
          if (jfez && u6hpt0 != '') bk8c5g['down'](u6hpt0, brykdx, rakdyx, u6hpt0);else rakdyx != null && rakdyx['runWith']([0x1]);
        } });
    }, bk8c5g['readNativeFile'] = function (xra$yd, gdkr) {
      bk8c5g['fs']['readFile']({ 'filePath': xra$yd, 'encoding': '', 'success': function (raky) {
          gdkr != null && gdkr['runWith']([0x0]);
        }, 'fail': function (nofjwe) {
          gdkr != null && gdkr['runWith']([0x1]);
        } });
    }, bk8c5g['down'] = function (pq6mh, $9a_v, s64mo, ct08) {
      $9a_v === void 0x0 && ($9a_v = 'ascill'), ct08 === void 0x0 && (ct08 = '');var hu580 = bk8c5g['getFileNativePath'](ct08),
          tc0u58 = bk8c5g['wxdown']({ 'url': pq6mh, 'filePath': hu580, 'success': function (mjsw) {
          if (mjsw['statusCode'] === 0xc8) bk8c5g['readFile'](mjsw['filePath'], $9a_v, s64mo, ct08);
        }, 'fail': function (mq6hp4) {
          s64mo != null && s64mo['runWith']([0x1, mq6hp4]);
        } });tc0u58['onProgressUpdate'](function (psqm4) {
        s64mo != null && s64mo['runWith']([0x2, psqm4['progress']]);
      });
    }, bk8c5g['readFile'] = function (feonw, e31z72, omjsw, ryxkbd) {
      e31z72 === void 0x0 && (e31z72 = 'ascill'), ryxkbd === void 0x0 && (ryxkbd = ''), bk8c5g['fs']['readFile']({ 'filePath': feonw, 'encoding': e31z72, 'success': function (tpu0h8) {
          if (feonw['indexOf']('http://') != -0x1 || feonw['indexOf']('https://') != -0x1) bk8c5g['onFileUpdate'](feonw, ryxkbd);omjsw != null && omjsw['runWith']([0x0, tpu0h8]);
        }, 'fail': function (hu850t) {
          if (hu850t) omjsw != null && omjsw['runWith']([0x1, hu850t]);
        } });
    }, bk8c5g['downImg'] = function (zf12e3, nzwejf, zfenw) {
      zfenw === void 0x0 && (zfenw = '');var drkyx = bk8c5g['wxdown']({ 'url': zf12e3, 'success': function (z23i17) {
          z23i17['statusCode'] === 0xc8 && bk8c5g['copyFile'](z23i17['tempFilePath'], zfenw, nzwejf);
        }, 'fail': function (ya$xvr) {
          nzwejf != null && nzwejf['runWith']([0x1, ya$xvr]);
        } });
    }, bk8c5g['copyFile'] = function (jefz31, oswnfj, $valy) {
      var t50g = jefz31['split']('/'),
          hut05 = t50g[t50g['length'] - 0x1],
          pqm6s4 = oswnfj['split']('?')[0x0],
          l$9vay = bk8c5g['getFileInfo'](oswnfj),
          gckbr = bk8c5g['getFileNativePath'](hut05);bk8c5g['fs']['copyFile']({ 'srcPath': jefz31, 'destPath': gckbr, 'success': function (wnsj) {
          if (!l$9vay) bk8c5g['onSaveFile'](oswnfj, hut05), $valy != null && $valy['runWith']([0x0]);else {
            if (l$9vay['readyUrl'] != oswnfj) bk8c5g['remove'](hut05, oswnfj, $valy);
          }
        }, 'fail': function (gdrkbc) {
          $valy != null && $valy['runWith']([0x1, gdrkbc]);
        } });
    }, bk8c5g['getFileNativePath'] = function (vy$ax) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vy$ax;
    }, bk8c5g['remove'] = function (rx$vay, xv$rya, dxyra$) {
      xv$rya === void 0x0 && (xv$rya = '');var vxa$y = bk8c5g['getFileInfo'](xv$rya),
          bxydk = bk8c5g['getFileNativePath'](vxa$y['md5']);ptu80h['loader']['clearRes'](vxa$y['readyUrl']), bk8c5g['fs']['unlink']({ 'filePath': bxydk, 'success': function (tup80) {
          if (xv$rya != '') bk8c5g['onSaveFile'](xv$rya, rx$vay);dxyra$ != null && dxyra$['runWith']([0x0]);
        }, 'fail': function (swqom) {} });
    }, bk8c5g['onSaveFile'] = function (a_l$9, gbrkx) {
      var al$y = a_l$9['split']('?')[0x0];bk8c5g['filesListObj'][al$y] = { 'md5': gbrkx, 'readyUrl': a_l$9 }, bk8c5g['fs']['writeFile']({ 'filePath': bk8c5g['fileNativeDir'] + '/' + bk8c5g['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bk8c5g['filesListObj']), 'success': function (ph6qm) {
          console['log']('写入测试测试成功：', ph6qm);
        }, 'fail': function (f2z) {
          console['log']('写入测试测试失败：', f2z);
        } });
    }, bk8c5g['existDir'] = function (f13ejz, av$yx) {
      bk8c5g['fs']['mkdir']({ 'dirPath': f13ejz, 'success': function (fe2z31) {
          av$yx != null && av$yx['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (gc5kd) {
          if (gc5kd['errMsg']['indexOf']('file already exists') != -0x1) bk8c5g['readSync'](bk8c5g['fileListName'], 'utf8', av$yx);else av$yx != null && av$yx['runWith']([0x1, gc5kd]);
        } });
    }, bk8c5g['readSync'] = function (soqmwn, jwfez, u085ht, smqno) {
      jwfez === void 0x0 && (jwfez = 'ascill'), smqno === void 0x0 && (smqno = '');var rykxb = bk8c5g['getFileNativePath'](soqmwn),
          $yl9v;try {
        $yl9v = bk8c5g['fs']['readFileSync'](rykxb), u085ht != null && u085ht['runWith']([0x0, { 'data': $yl9v }]);
      } catch ($ayxd) {
        u085ht != null && u085ht['runWith']([0x1]);
      }
    }, bk8c5g['readCache'] = function () {}, bk8c5g['writeCache'] = function (fwnzj) {
      var rgdkbx = readyUrl['split']('?')[0x0];bk8c5g['filesListObj'][rgdkbx] = { 'md5': md5Name, 'readyUrl': readyUrl }, bk8c5g['fs']['writeFile']({ 'filePath': bk8c5g['fileNativeDir'] + '/' + bk8c5g['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bk8c5g['filesListObj']), 'success': function (jsonw) {}, 'fail': function (gbxkrd) {} });
    }, bk8c5g['setNativeFileDir'] = function (yraxdk) {
      bk8c5g['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + yraxdk;
    }, bk8c5g['filesListObj'] = {}, bk8c5g['fileNativeDir'] = null, bk8c5g['fileListName'] = 'layaairfiles.txt', bk8c5g['ziyuFileData'] = {}, $v9a(bk8c5g, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), bk8c5g;
  }(zfnjw),
      lay9$ = function (y$xdra) {
    function xrkyad() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], xrkyad['__super']['call'](this), this['_sound'] = xrkyad['_createSound']();
    }bg5kcd(xrkyad, 'laya.wx.mini.MiniSound', y$xdra);var y9vx$ = xrkyad['prototype'];return y9vx$['load'] = function (n4qmso) {
      var enjzwf = this;n4qmso = mq4s6p['formatURL'](n4qmso), this['url'] = n4qmso;if (xrkyad['_audioCache'][n4qmso]) {
        this['event']('complete');return;
      }function z27i13() {
        if (xrkyad['_null'] != undefined) enjzwf['_sound']['onCanplay'](xrkyad['_null']), enjzwf['_sound']['onError'](xrkyad['_null']);else try {
          enjzwf['_sound']['onCanplay'](null), enjzwf['_sound']['onError'](null), xrkyad['_null'] = null;
        } catch (a$lvy) {
          console['warn']('[wxmini] _clearSound:' + a$lvy), enjzwf['_sound']['onCanplay'](wjfsno), enjzwf['_sound']['onError'](wjfsno), xrkyad['_null'] = wjfsno;
        }
      }function mnwjos() {
        z27i13(), zwnfje['loaded'] = !![], zwnfje['event']('complete'), xrkyad['_audioCache'][zwnfje['url']] = zwnfje;
      }function dbry(fjwoe) {
        console['error']('errCode=' + fjwoe['errCode'] + '  errMsg=' + fjwoe['errMsg']), z27i13(), zwnfje['event']('error');
      }function wjfsno() {}this['_sound']['onCanplay'](mnwjos), this['_sound']['onError'](dbry), this['_sound']['src'] = n4qmso;var zwnfje = this;
    }, y9vx$['play'] = function (b5dcg, jznfwe) {
      b5dcg === void 0x0 && (b5dcg = 0x0), jznfwe === void 0x0 && (jznfwe = 0x0);var dcb5k;if (this['url'] == smnojw['_tMusic']) {
        if (!xrkyad['_musicAudio']) xrkyad['_musicAudio'] = xrkyad['_createSound']();dcb5k = xrkyad['_musicAudio'];
      } else dcb5k = xrkyad['_createSound']();dcb5k['src'] = this['url'];var p6s = new p6hmq4(dcb5k);return p6s['url'] = this['url'], p6s['loops'] = jznfwe, p6s['startTime'] = b5dcg, p6s['play'](), smnojw['addChannel'](p6s), p6s;
    }, y9vx$['dispose'] = function () {
      var nwojms = xrkyad['_audioCache'][this['url']];nwojms && (nwojms['src'] = '', delete xrkyad['_audioCache'][this['url']]);
    }, b8gk(0x0, y9vx$, 'duration', function () {
      return this['_sound']['duration'];
    }), xrkyad['_createSound'] = function () {
      return xrkyad['_id']++, bg50c8['window']['wx']['createInnerAudioContext']();
    }, xrkyad['_musicAudio'] = null, xrkyad['_id'] = 0x0, xrkyad['_audioCache'] = {}, xrkyad['_null'] = undefined, xrkyad;
  }(zfnjw),
      p6hmq4 = function (u60t) {
    function ejn(y$axd) {
      this['_audio'] = null, this['_onEnd'] = null, ejn['__super']['call'](this), this['_audio'] = y$axd, this['_onEnd'] = y$9val['bind'](this['__onEnd'], this), y$axd['onEnded'](this['_onEnd']);
    }bg5kcd(ejn, 'laya.wx.mini.MiniSoundChannel', u60t);var msw = ejn['prototype'];return msw['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ptu80h['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, msw['__onNull'] = function () {}, msw['play'] = function () {
      this['isStopped'] = ![], smnojw['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, msw['stop'] = function () {
      this['isStopped'] = !![], smnojw['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ejn['_null'] != undefined) this['_audio']['onEnded'](ejn['_null']);else try {
        this['_audio']['onEnded'](null), ejn['_null'] = null;
      } catch (t80hpu) {
        console['warn']('[wxmini] stop:' + t80hpu), this['_audio']['onEnded'](y$9val['bind'](this['__onNull'], this)), ejn['_null'] = y$9val['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, msw['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, msw['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], smnojw['addChannel'](this), this['_audio']['play']();
    }, b8gk(0x0, msw, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), b8gk(0x0, msw, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), b8gk(0x0, msw, 'volume', function () {
      return 0x1;
    }, function (brkgdx) {}), ejn['_null'] = undefined, ejn;
  }(y9$lv);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var h0up8 in Laya) {
    var nfojs = Laya[h0up8];nfojs && nfojs['__isclass'] && (exports[h0up8] = nfojs);
  }
});