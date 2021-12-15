var B = wx.$z;
(function (window, document, inq3m) {
  var $mq = inq3m['un'],
      l7i3mn = inq3m['uns'],
      pgh64 = inq3m['static'],
      w520u = inq3m['class'],
      bydtok = inq3m['getset'],
      rb8_5 = inq3m['__newvec'],
      fv7iln = laya['utils']['Browser'],
      ydbok8 = laya['events']['Event'],
      dtyezo = laya['events']['EventDispatcher'],
      tzoas = laya['resource']['HTMLImage'],
      ztye = laya['utils']['Handler'],
      l7nivm = laya['display']['Input'],
      j$iqm3 = laya['net']['Loader'],
      ax1h9s = laya['maths']['Matrix'],
      w25_0 = laya['renders']['Render'],
      liv7mn = laya['utils']['RunDriver'],
      ytodkz = laya['media']['Sound'],
      m7qni = laya['media']['SoundChannel'],
      j3iq$m = laya['media']['SoundManager'],
      n3ml = laya['display']['Stage'],
      v64nlf = laya['net']['URL'],
      h491g = laya['utils']['Utils'],
      q7i$3m = function () {
    function oztad() {}return w520u(oztad, 'laya.wx.mini.MiniAdpter'), oztad['getJson'] = function (f7v6nl) {
      return JSON['parse'](f7v6nl);
    }, oztad['init'] = function (bkotd, doybk) {
      bkotd === void 0x0 && (bkotd = ![]), doybk === void 0x0 && (doybk = ![]);if (oztad['_inited']) return;oztad['window'] = window;if (oztad['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;oztad['_inited'] = !![], oztad['isZiYu'] = doybk, oztad['isPosMsgYu'] = bkotd, oztad['EnvConfig'] = {}, !oztad['isZiYu'] && (odktb['setNativeFileDir']('/layaairGame'), odktb['existDir'](odktb['fileNativeDir'], ztye['create'](oztad, oztad['onMkdirCallBack']))), oztad['window']['focus'] = function () {}, inq3m['getUrlPath'] = function () {}, oztad['window']['logtime'] = function (mq7i3n) {}, oztad['window']['alertTimeLog'] = function (nlif) {}, oztad['window']['resetShareInfo'] = function () {}, oztad['window']['CanvasRenderingContext2D'] = function () {}, oztad['window']['CanvasRenderingContext2D']['prototype'] = oztad['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], oztad['window']['document']['body']['appendChild'] = function () {}, oztad['EnvConfig']['pixelRatioInt'] = 0x0, liv7mn['getPixelRatio'] = oztad['pixelRatio'], oztad['_preCreateElement'] = fv7iln['createElement'], fv7iln['createElement'] = oztad['createElement'], liv7mn['createShaderCondition'] = oztad['createShaderCondition'], h491g['parseXMLFromString'] = oztad['parseXMLFromString'], l7nivm['_createInputElement'] = hg16p['_createInputElement'], oztad['EnvConfig']['load'] = j$iqm3['prototype']['load'], j$iqm3['prototype']['load'] = jq$m['prototype']['load'], oztad['isZiYu'] && bkotd && wx['onMessage'](function (wu52r_) {
        wu52r_['isLoad'] && (odktb['ziyuFileData'][wu52r_['url']] = wu52r_['data']);
      });
    }, oztad['onMkdirCallBack'] = function (tzoy, uw052_) {
      if (!tzoy) odktb['filesListObj'] = JSON['parse'](uw052_['data']);
    }, oztad['pixelRatio'] = function () {
      if (!oztad['EnvConfig']['pixelRatioInt']) try {
        var asxetz = wx['getSystemInfoSync']();return oztad['EnvConfig']['pixelRatioInt'] = asxetz['pixelRatio'], asxetz = asxetz, asxetz['pixelRatio'];
      } catch (p4h1g9) {}return oztad['EnvConfig']['pixelRatioInt'];
    }, oztad['createElement'] = function (setzax) {
      if (setzax == 'canvas') {
        var s9exa;return oztad['idx'] == 0x1 ? oztad['isZiYu'] ? (s9exa = sharedCanvas, s9exa['style'] = {}) : s9exa = window['canvas'] : s9exa = window['wx']['createCanvas'](), oztad['idx']++, s9exa;
      } else {
        if (setzax == 'textarea' || setzax == 'input') return oztad['onCreateInput'](setzax);else {
          if (setzax == 'div') {
            var l64vf = oztad['_preCreateElement'](setzax);return l64vf['contains'] = function (r8b_) {
              return null;
            }, l64vf['removeChild'] = function (hgp416) {}, l64vf;
          } else return oztad['_preCreateElement'](setzax);
        }
      }
    }, oztad['onCreateInput'] = function (etdoyz) {
      var lv46g = oztad['_preCreateElement'](etdoyz);return lv46g['focus'] = hg16p['wxinputFocus'], lv46g['blur'] = hg16p['wxinputblur'], lv46g['style'] = {}, lv46g['value'] = 0x0, lv46g['parentElement'] = {}, lv46g['placeholder'] = {}, lv46g['type'] = {}, lv46g['setColor'] = function (x91gh) {}, lv46g['setType'] = function (r5_2u) {}, lv46g['setFontFace'] = function (etzsxa) {}, lv46g['addEventListener'] = function (has9x1) {}, lv46g['contains'] = function (as9e1x) {
        return null;
      }, lv46g['removeChild'] = function (fn6v) {}, lv46g;
    }, oztad['createShaderCondition'] = function (o8kydb) {
      var px9h = this,
          nvlf7 = function () {
        var etdzao = o8kydb;return px9h[o8kydb['replace']('this.', '')];
      };return nvlf7;
    }, oztad['EnvConfig'] = null, oztad['window'] = null, oztad['_preCreateElement'] = null, oztad['_inited'] = ![], oztad['wxRequest'] = null, oztad['systemInfo'] = null, oztad['version'] = '0.0.1', oztad['isZiYu'] = ![], oztad['isPosMsgYu'] = ![], oztad['parseXMLFromString'] = function (hp4f6g) {
      var ps91x, hxgp1;hp4f6g = hp4f6g['replace'](/>\s+</g, '><');try {
        ps91x = new window['Parser']['DOMParser']()['parseFromString'](hp4f6g, 'text/xml');
      } catch (zeoast) {
        throw '需要引入xml解析库文件';
      }return ps91x;
    }, oztad['idx'] = 0x1, oztad;
  }(),
      k_8ybr = function () {
    function hpg6f4() {}w520u(hpg6f4, 'laya.wx.mini.MiniImage');var ivnlf7 = hpg6f4['prototype'];return ivnlf7['_loadImage'] = function (y8_r) {
      var vfgp6 = this,
          viln7 = ![];y8_r['indexOf']('layaNativeDir/') == -0x1 && (viln7 = !![], y8_r = v64nlf['formatURL'](y8_r));if (!odktb['getFileInfo'](y8_r)) {
        if (y8_r['indexOf']('http://') != -0x1 || y8_r['indexOf']('https://') != -0x1) odktb['downImg'](y8_r, new ztye(hpg6f4, hpg6f4['onDownImgCallBack'], [y8_r, vfgp6]), y8_r);else hpg6f4['onCreateImage'](y8_r, vfgp6, !![]);
      } else hpg6f4['onCreateImage'](y8_r, vfgp6, !viln7);
    }, hpg6f4['onDownImgCallBack'] = function (eaozs, adzeto, p1h64g) {
      if (!p1h64g) hpg6f4['onCreateImage'](eaozs, adzeto);else adzeto['onError'](null);
    }, hpg6f4['onCreateImage'] = function (_285b, dtzyeo, ry8_k) {
      ry8_k === void 0x0 && (ry8_k = ![]);var v67;if (!ry8_k) {
        var szta = odktb['getFileInfo'](_285b),
            ydetzo = szta['md5'];v67 = odktb['getFileNativePath'](ydetzo);
      } else v67 = _285b;if (dtzyeo['imgCache'] == null) dtzyeo['imgCache'] = {};var kyzdot;function xtsaez() {
        kyzdot['onload'] = null, kyzdot['onerror'] = null, delete dtzyeo['imgCache'][_285b];
      };var gp146 = function () {
        xtsaez(), dtzyeo['onLoaded'](kyzdot);
      },
          s1h9xa = function () {
        xtsaez(), dtzyeo['event']('error', 'Load image failed');
      };dtzyeo['_type'] == 'nativeimage' ? (kyzdot = new fv7iln['window']['Image'](), kyzdot['crossOrigin'] = '', kyzdot['onload'] = gp146, kyzdot['onerror'] = s1h9xa, kyzdot['src'] = v67, dtzyeo['imgCache'][_285b] = kyzdot) : new tzoas['create'](v67, { 'onload': gp146, 'onerror': s1h9xa, 'onCreate': function (a1es) {
          kyzdot = a1es, dtzyeo['imgCache'][_285b] = a1es;
        } });
    }, hpg6f4;
  }(),
      hg16p = function () {
    function tokd() {}return w520u(tokd, 'laya.wx.mini.MiniInput'), tokd['_createInputElement'] = function () {
      l7nivm['_initInput'](l7nivm['area'] = fv7iln['createElement']('textarea')), l7nivm['_initInput'](l7nivm['input'] = fv7iln['createElement']('input')), l7nivm['inputContainer'] = fv7iln['createElement']('div'), l7nivm['inputContainer']['style']['position'] = 'absolute', l7nivm['inputContainer']['style']['zIndex'] = 0x186a0, fv7iln['container']['appendChild'](l7nivm['inputContainer']), l7nivm['inputContainer']['setPos'] = function (x1a9s, hxg1p9) {
        l7nivm['inputContainer']['style']['left'] = x1a9s + 'px', l7nivm['inputContainer']['style']['top'] = hxg1p9 + 'px';
      }, inq3m['stage']['on']('resize', null, tokd['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (eotdz) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), j3iq$m['_soundClass'] = eots, j3iq$m['_musicClass'] = eots;
    }, tokd['_onStageResize'] = function () {
      var i3lm7n = inq3m['stage']['_canvasTransform']['identity']();i3lm7n['scale'](fv7iln['width'] / w25_0['canvas']['width'] / liv7mn['getPixelRatio'](), fv7iln['height'] / w25_0['canvas']['height'] / liv7mn['getPixelRatio']());
    }, tokd['wxinputFocus'] = function (asx91h) {
      var _w2r5 = l7nivm['inputElement']['target'];if (_w2r5 && !_w2r5['editable']) return;q7i$3m['window']['wx']['offKeyboardConfirm'](), q7i$3m['window']['wx']['offKeyboardInput'](), q7i$3m['window']['wx']['showKeyboard']({ 'defaultValue': _w2r5['text'], 'maxLength': _w2r5['maxChars'], 'multiple': _w2r5['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (vg6lf4) {}, 'fail': function ($i3jq) {} }), q7i$3m['window']['wx']['onKeyboardConfirm'](function (nq7i3m) {
        var kby8_r = nq7i3m ? nq7i3m['value'] : '';_w2r5['text'] = kby8_r, _w2r5['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), q7i$3m['window']['wx']['onKeyboardInput'](function (ijqm3$) {
        var fnl64v = ijqm3$ ? ijqm3$['value'] : '';if (!_w2r5['multiline']) {
          if (fnl64v['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_w2r5['text'] = fnl64v, _w2r5['event']('input');
      });
    }, tokd['inputEnter'] = function () {
      l7nivm['inputElement']['target']['focus'] = ![];
    }, tokd['wxinputblur'] = function () {
      tokd['hideKeyboard']();
    }, tokd['hideKeyboard'] = function () {
      q7i$3m['window']['wx']['offKeyboardConfirm'](), q7i$3m['window']['wx']['offKeyboardInput'](), q7i$3m['window']['wx']['hideKeyboard']({ 'success': function (_2w5) {
          console['log']('隐藏键盘');
        }, 'fail': function (h9a1sx) {
          console['log']('隐藏键盘出错:' + (h9a1sx ? h9a1sx['errMsg'] : ''));
        } });
    }, tokd;
  }(),
      jq$m = function () {
    function todkyb() {}w520u(todkyb, 'laya.wx.mini.MiniLoader');var m7nqi3 = todkyb['prototype'];return m7nqi3['load'] = function (oets, li7m, q3jim, p6hfg, jmq$3i) {
      q3jim === void 0x0 && (q3jim = !![]), jmq$3i === void 0x0 && (jmq$3i = ![]);var _r58u = this;_r58u['_url'] = oets;if (oets['indexOf']('data:image') === 0x0) _r58u['_type'] = li7m = 'image';else _r58u['_type'] = li7m || (li7m = _r58u['getTypeFromUrl'](oets));_r58u['_cache'] = q3jim, _r58u['_data'] = null;var x9h1pg = 'ascii';if (oets['indexOf']('.fnt') != -0x1) x9h1pg = 'utf8';else li7m == 'arraybuffer' && (x9h1pg = '');;var nl46f = h491g['getFileExtension'](oets);if (todkyb['_fileTypeArr']['indexOf'](nl46f) != -0x1) q7i$3m['EnvConfig']['load']['call'](this, oets, li7m, q3jim, p6hfg, jmq$3i);else {
        if (!odktb['getFileInfo'](oets)) {
          if (oets['indexOf']('layaNativeDir/') != -0x1) {
            if (q7i$3m['isZiYu']) {
              var e1a9x = odktb['ziyuFileData'][oets];_r58u['onLoaded'](e1a9x);return;
            } else {
              cosnole['log']('read read'), odktb['read'](oets, x9h1pg, new ztye(todkyb, todkyb['onReadNativeCallBack'], [x9h1pg, oets, li7m, q3jim, p6hfg, jmq$3i, _r58u]));return;
            }
          }if (v64nlf['rootPath'] == '') var xaezst = oets;else xaezst = oets['split'](v64nlf['rootPath'])[0x0];oets['indexOf']('http://') != -0x1 || oets['indexOf']('https://') != -0x1 ? q7i$3m['EnvConfig']['load']['call'](_r58u, oets, li7m, q3jim, p6hfg, jmq$3i) : odktb['readFile'](xaezst, x9h1pg, new ztye(todkyb, todkyb['onReadNativeCallBack'], [x9h1pg, oets, li7m, q3jim, p6hfg, jmq$3i, _r58u]), oets);
        } else q7i$3m['EnvConfig']['load']['call'](this, oets, li7m, q3jim, p6hfg, jmq$3i);
      }
    }, m7nqi3['resMgrLoad'] = function (n67vlf, y8krb_, hg41p9, etsoz, aexst, iqn37, vfnli) {
      hg41p9 === void 0x0 && (hg41p9 = 0x0), etsoz === void 0x0 && (etsoz = ![]), aexst === void 0x0 && (aexst = ![]), iqn37 === void 0x0 && (iqn37 = 0x0), vfnli === void 0x0 && (vfnli = 0x3), n67vlf['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', n67vlf), q7i$3m['EnvConfig']['resMgrLoad'](n67vlf, (xe19as, g1px9h, _2br) => {
        todkyb['prototype']['resMgrLoadCallBack'](xe19as, g1px9h, _2br, y8krb_);
      }, hg41p9, etsoz, aexst, iqn37, vfnli);
    }, m7nqi3['resMgrLoadCallBack'] = function (tbyok, n64vfl, fph, h1px) {
      console['log']('buff:::', tbyok, fph, odktb['fileNativeDir'] + '///' + odktb['fileListName']), h1px(tbyok, n64vfl, fph);
    }, m7nqi3['clearRes'] = function (za9sxe, g4fv) {
      g4fv === void 0x0 && (g4fv = ![]);var sxha9 = this;sxha9['clearRes'](za9sxe, g4fv);var eosa = odktb['getFileInfo'](za9sxe);if (eosa && (za9sxe['indexOf']('http://') != -0x1 || za9sxe['indexOf']('https://') != -0x1)) {
        var zedyo = eosa['md5'],
            ztsaoe = odktb['getFileNativePath'](zedyo);odktb['remove'](ztsaoe);
      }
    }, todkyb['onReadNativeCallBack'] = function (ybr_, l4fv6n, nl64f, il37n, h9xa1, niflv7, bkodyt, pgfv64, vfi7l) {
      il37n === void 0x0 && (il37n = !![]), niflv7 === void 0x0 && (niflv7 = ![]), pgfv64 === void 0x0 && (pgfv64 = 0x0);if (!pgfv64) {
        var lvnf46;if (nl64f == 'json' || nl64f == 'atlas') lvnf46 = q7i$3m['getJson'](vfi7l['data']);else nl64f == 'xml' ? lvnf46 = h491g['parseXMLFromString'](vfi7l['data']) : lvnf46 = vfi7l['data'];bkodyt['onLoaded'](lvnf46), !q7i$3m['isZiYu'] && q7i$3m['isPosMsgYu'] && nl64f != 'arraybuffer' && wx['postMessage']({ 'url': l4fv6n, 'data': lvnf46, 'isLoad': !![] });
      } else pgfv64 == 0x1 && q7i$3m['EnvConfig']['load']['call'](bkodyt, l4fv6n, nl64f, il37n, h9xa1, niflv7);
    }, pgh64(todkyb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), todkyb;
  }(),
      odktb = function (nlfv6) {
    function es1xa9() {
      es1xa9['__super']['call'](this);;
    }return w520u(es1xa9, 'laya.wx.mini.MiniFileMgr', nlfv6), es1xa9['isLoadFile'] = function (dyzko) {
      return es1xa9['_fileTypeArr']['indexOf'](dyzko) != -0x1 ? !![] : ![];
    }, es1xa9['getFileInfo'] = function (tyeod) {
      var imnl7v = tyeod['split']('?')[0x0],
          tdzoa = es1xa9['filesListObj'][imnl7v];if (tdzoa == null) return null;else return tdzoa;return null;
    }, es1xa9['onFileUpdate'] = function (fgh6, r28u_) {
      var asxtez = fgh6['split']('/'),
          r_u8 = asxtez[asxtez['length'] - 0x1],
          nlm3i = es1xa9['getFileInfo'](r28u_);if (nlm3i == null) es1xa9['onSaveFile'](r28u_, r_u8);else {
        if (nlm3i['readyUrl'] != r28u_) es1xa9['remove'](r_u8, r28u_);
      }
    }, es1xa9['exits'] = function (im37nl, daze) {
      var ni7fvl = es1xa9['getFileNativePath'](im37nl);es1xa9['fs']['getFileInfo']({ 'filePath': ni7fvl, 'success': function (r52) {
          daze != null && daze['runWith']([0x0, r52]);
        }, 'fail': function (k_rb8y) {
          daze != null && daze['runWith']([0x1, k_rb8y]);
        } });
    }, es1xa9['read'] = function (li7m3n, hp4g91, ate, g914ph) {
      hp4g91 === void 0x0 && (hp4g91 = 'ascill'), g914ph === void 0x0 && (g914ph = '');var i$qm37;g914ph != '' ? i$qm37 = es1xa9['getFileNativePath'](li7m3n) : i$qm37 = li7m3n, es1xa9['fs']['readFile']({ 'filePath': i$qm37, 'encoding': hp4g91, 'success': function (ln64fv) {
          ate != null && ate['runWith']([0x0, ln64fv]);
        }, 'fail': function (b5_8k) {
          if (b5_8k && g914ph != '') es1xa9['down'](g914ph, hp4g91, ate, g914ph);else ate != null && ate['runWith']([0x1]);
        } });
    }, es1xa9['readNativeFile'] = function (ktyzod, li7nm) {
      es1xa9['fs']['readFile']({ 'filePath': ktyzod, 'encoding': '', 'success': function (satzxe) {
          li7nm != null && li7nm['runWith']([0x0]);
        }, 'fail': function (exzsa9) {
          li7nm != null && li7nm['runWith']([0x1]);
        } });
    }, es1xa9['down'] = function (mln7iv, m7$i3q, l6nv7, a1xs9e) {
      m7$i3q === void 0x0 && (m7$i3q = 'ascill'), a1xs9e === void 0x0 && (a1xs9e = '');var xhg = es1xa9['getFileNativePath'](a1xs9e),
          u_8r = es1xa9['wxdown']({ 'url': mln7iv, 'filePath': xhg, 'success': function (_bry8) {
          if (_bry8['statusCode'] === 0xc8) es1xa9['readFile'](_bry8['filePath'], m7$i3q, l6nv7, a1xs9e);
        }, 'fail': function (px9gh1) {
          l6nv7 != null && l6nv7['runWith']([0x1, px9gh1]);
        } });u_8r['onProgressUpdate'](function (ezyto) {
        l6nv7 != null && l6nv7['runWith']([0x2, ezyto['progress']]);
      });
    }, es1xa9['readFile'] = function (_8y, iqm$j, f4pgv6, livm) {
      iqm$j === void 0x0 && (iqm$j = 'ascill'), livm === void 0x0 && (livm = ''), es1xa9['fs']['readFile']({ 'filePath': _8y, 'encoding': iqm$j, 'success': function ($m3qi7) {
          if (_8y['indexOf']('http://') != -0x1 || _8y['indexOf']('https://') != -0x1) es1xa9['onFileUpdate'](_8y, livm);f4pgv6 != null && f4pgv6['runWith']([0x0, $m3qi7]);
        }, 'fail': function (ztoas) {
          if (ztoas) f4pgv6 != null && f4pgv6['runWith']([0x1, ztoas]);
        } });
    }, es1xa9['downImg'] = function (tbokyd, e9, r8u2) {
      r8u2 === void 0x0 && (r8u2 = '');var nvm7l = es1xa9['wxdown']({ 'url': tbokyd, 'success': function (ktydo) {
          ktydo['statusCode'] === 0xc8 && es1xa9['copyFile'](ktydo['tempFilePath'], r8u2, e9);
        }, 'fail': function (ruw52) {
          e9 != null && e9['runWith']([0x1, ruw52]);
        } });
    }, es1xa9['copyFile'] = function (e9x1as, phg461, oykdtb) {
      var asez9x = e9x1as['split']('/'),
          eaztd = asez9x[asez9x['length'] - 0x1],
          wr_5u2 = phg461['split']('?')[0x0],
          xs1a9h = es1xa9['getFileInfo'](phg461),
          nmvl7 = es1xa9['getFileNativePath'](eaztd);es1xa9['fs']['copyFile']({ 'srcPath': e9x1as, 'destPath': nmvl7, 'success': function (eazotd) {
          if (!xs1a9h) es1xa9['onSaveFile'](phg461, eaztd), oykdtb != null && oykdtb['runWith']([0x0]);else {
            if (xs1a9h['readyUrl'] != phg461) es1xa9['remove'](eaztd, phg461, oykdtb);
          }
        }, 'fail': function (nli73m) {
          oykdtb != null && oykdtb['runWith']([0x1, nli73m]);
        } });
    }, es1xa9['getFileNativePath'] = function (rb8k) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rb8k;
    }, es1xa9['remove'] = function (n7vfi, ztkoyd, $qi73) {
      ztkoyd === void 0x0 && (ztkoyd = '');var hp1xg = es1xa9['getFileInfo'](ztkoyd),
          px91hs = es1xa9['getFileNativePath'](hp1xg['md5']);inq3m['loader']['clearRes'](hp1xg['readyUrl']), es1xa9['fs']['unlink']({ 'filePath': px91hs, 'success': function ($3jq) {
          if (ztkoyd != '') es1xa9['onSaveFile'](ztkoyd, n7vfi);$qi73 != null && $qi73['runWith']([0x0]);
        }, 'fail': function (iqn3m7) {} });
    }, es1xa9['onSaveFile'] = function ($miq73, hf64gp) {
      var u52_wr = $miq73['split']('?')[0x0];es1xa9['filesListObj'][u52_wr] = { 'md5': hf64gp, 'readyUrl': $miq73 }, es1xa9['fs']['writeFile']({ 'filePath': es1xa9['fileNativeDir'] + '/' + es1xa9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](es1xa9['filesListObj']), 'success': function (y8_bkr) {
          console['log']('写入测试测试成功：', y8_bkr);
        }, 'fail': function (r5_8u2) {
          console['log']('写入测试测试失败：', r5_8u2);
        } });
    }, es1xa9['existDir'] = function (bk8, mv7nil) {
      es1xa9['fs']['mkdir']({ 'dirPath': bk8, 'success': function (pg6v4f) {
          mv7nil != null && mv7nil['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (y_k8b) {
          if (y_k8b['errMsg']['indexOf']('file already exists') != -0x1) es1xa9['readSync'](es1xa9['fileListName'], 'utf8', mv7nil);else mv7nil != null && mv7nil['runWith']([0x1, y_k8b]);
        } });
    }, es1xa9['readSync'] = function ($7m, uw5_2, g4h61, aoszet) {
      uw5_2 === void 0x0 && (uw5_2 = 'ascill'), aoszet === void 0x0 && (aoszet = '');var mi3$7 = es1xa9['getFileNativePath']($7m),
          krb8y;try {
        krb8y = es1xa9['fs']['readFileSync'](mi3$7), g4h61 != null && g4h61['runWith']([0x0, { 'data': krb8y }]);
      } catch (ko8bd) {
        g4h61 != null && g4h61['runWith']([0x1]);
      }
    }, es1xa9['readCache'] = function () {}, es1xa9['writeCache'] = function (sx9h) {
      var yozdet = readyUrl['split']('?')[0x0];es1xa9['filesListObj'][yozdet] = { 'md5': md5Name, 'readyUrl': readyUrl }, es1xa9['fs']['writeFile']({ 'filePath': es1xa9['fileNativeDir'] + '/' + es1xa9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](es1xa9['filesListObj']), 'success': function (vilfn7) {}, 'fail': function (q3$j) {} });
    }, es1xa9['setNativeFileDir'] = function (lnm3) {
      es1xa9['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + lnm3;
    }, es1xa9['filesListObj'] = {}, es1xa9['fileNativeDir'] = null, es1xa9['fileListName'] = 'layaairfiles.txt', es1xa9['ziyuFileData'] = {}, pgh64(es1xa9, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), es1xa9;
  }(dtyezo),
      eots = function (u285r) {
    function r8y_kb() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], r8y_kb['__super']['call'](this), this['_sound'] = r8y_kb['_createSound']();
    }w520u(r8y_kb, 'laya.wx.mini.MiniSound', u285r);var p41gh9 = r8y_kb['prototype'];return p41gh9['load'] = function (n37mil) {
      var nv7fl = this;n37mil = v64nlf['formatURL'](n37mil), this['url'] = n37mil;if (r8y_kb['_audioCache'][n37mil]) {
        this['event']('complete');return;
      }function gpxh9() {
        if (r8y_kb['_null'] != undefined) nv7fl['_sound']['onCanplay'](r8y_kb['_null']), nv7fl['_sound']['onError'](r8y_kb['_null']);else try {
          nv7fl['_sound']['onCanplay'](null), nv7fl['_sound']['onError'](null), r8y_kb['_null'] = null;
        } catch (oykb8d) {
          console['warn']('[wxmini] _clearSound:' + oykb8d), nv7fl['_sound']['onCanplay'](a9esxz), nv7fl['_sound']['onError'](a9esxz), r8y_kb['_null'] = a9esxz;
        }
      }function lnmiv() {
        gpxh9(), staxz['loaded'] = !![], staxz['event']('complete'), r8y_kb['_audioCache'][staxz['url']] = staxz;
      }function v6nf4l(qjm$i3) {
        console['error']('errCode=' + qjm$i3['errCode'] + '  errMsg=' + qjm$i3['errMsg']), gpxh9(), staxz['event']('error');
      }function a9esxz() {}this['_sound']['onCanplay'](lnmiv), this['_sound']['onError'](v6nf4l), this['_sound']['src'] = n37mil;var staxz = this;
    }, p41gh9['play'] = function (k8yrbd, w2u0_) {
      k8yrbd === void 0x0 && (k8yrbd = 0x0), w2u0_ === void 0x0 && (w2u0_ = 0x0);var mq3j$i;if (this['url'] == j3iq$m['_tMusic']) {
        if (!r8y_kb['_musicAudio']) r8y_kb['_musicAudio'] = r8y_kb['_createSound']();mq3j$i = r8y_kb['_musicAudio'];
      } else mq3j$i = r8y_kb['_createSound']();mq3j$i['src'] = this['url'];var e1sx = new vl7if(mq3j$i);return e1sx['url'] = this['url'], e1sx['loops'] = w2u0_, e1sx['startTime'] = k8yrbd, e1sx['play'](), j3iq$m['addChannel'](e1sx), e1sx;
    }, p41gh9['dispose'] = function () {
      var s91ph = r8y_kb['_audioCache'][this['url']];s91ph && (s91ph['src'] = '', delete r8y_kb['_audioCache'][this['url']]);
    }, bydtok(0x0, p41gh9, 'duration', function () {
      return this['_sound']['duration'];
    }), r8y_kb['_createSound'] = function () {
      return r8y_kb['_id']++, q7i$3m['window']['wx']['createInnerAudioContext']();
    }, r8y_kb['_musicAudio'] = null, r8y_kb['_id'] = 0x0, r8y_kb['_audioCache'] = {}, r8y_kb['_null'] = undefined, r8y_kb;
  }(dtyezo),
      vl7if = function (_kr5b8) {
    function ybk8d(ahx9s) {
      this['_audio'] = null, this['_onEnd'] = null, ybk8d['__super']['call'](this), this['_audio'] = ahx9s, this['_onEnd'] = h491g['bind'](this['__onEnd'], this), ahx9s['onEnded'](this['_onEnd']);
    }w520u(ybk8d, 'laya.wx.mini.MiniSoundChannel', _kr5b8);var atezos = ybk8d['prototype'];return atezos['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (inq3m['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, atezos['__onNull'] = function () {}, atezos['play'] = function () {
      this['isStopped'] = ![], j3iq$m['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, atezos['stop'] = function () {
      this['isStopped'] = !![], j3iq$m['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ybk8d['_null'] != undefined) this['_audio']['onEnded'](ybk8d['_null']);else try {
        this['_audio']['onEnded'](null), ybk8d['_null'] = null;
      } catch (xsha19) {
        console['warn']('[wxmini] stop:' + xsha19), this['_audio']['onEnded'](h491g['bind'](this['__onNull'], this)), ybk8d['_null'] = h491g['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, atezos['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, atezos['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], j3iq$m['addChannel'](this), this['_audio']['play']();
    }, bydtok(0x0, atezos, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), bydtok(0x0, atezos, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), bydtok(0x0, atezos, 'volume', function () {
      return 0x1;
    }, function (axzet) {}), ybk8d['_null'] = undefined, ybk8d;
  }(m7qni);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var i7lmvn in Laya) {
    var v6lg4 = Laya[i7lmvn];v6lg4 && v6lg4['__isclass'] && (exports[i7lmvn] = v6lg4);
  }
});