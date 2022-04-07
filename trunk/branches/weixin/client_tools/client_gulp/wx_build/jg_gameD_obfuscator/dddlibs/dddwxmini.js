var v = wx.$d;
(function (window, document, o9_c4) {
  var gifutk = o9_c4['un'],
      nc93 = o9_c4['uns'],
      m6hd = o9_c4['static'],
      rw$pv7 = o9_c4['class'],
      ifkud = o9_c4['getset'],
      yvlp$7 = o9_c4['__newvec'],
      emud6i = laya['utils']['Browser'],
      fkuidt = laya['events']['Event'],
      dimeut = laya['events']['EventDispatcher'],
      tfukdi = laya['resource']['HTMLImage'],
      z8b1xa = laya['utils']['Handler'],
      ufkqgt = laya['display']['Input'],
      tfkuq = laya['net']['Loader'],
      r$1p8w = laya['maths']['Matrix'],
      ufkgit = laya['renders']['Render'],
      fqtukg = laya['utils']['RunDriver'],
      _94hn = laya['media']['Sound'],
      jhmed6 = laya['media']['SoundChannel'],
      he6jm = laya['media']['SoundManager'],
      c93n_4 = laya['display']['Stage'],
      aqb0zx = laya['net']['URL'],
      n43 = laya['utils']['Utils'],
      n_3c49 = function () {
    function xra18() {}return rw$pv7(xra18, 'laya.wx.mini.MiniAdpter'), xra18['getJson'] = function (kfuqg) {
      return JSON['parse'](kfuqg);
    }, xra18['init'] = function (xw81rb, bxzaq) {
      xw81rb === void 0x0 && (xw81rb = ![]), bxzaq === void 0x0 && (bxzaq = ![]);if (xra18['_inited']) return;xra18['window'] = window;if (xra18['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;xra18['_inited'] = !![], xra18['isZiYu'] = bxzaq, xra18['isPosMsgYu'] = xw81rb, xra18['EnvConfig'] = {}, !xra18['isZiYu'] && (x$1rw['setNativeFileDir']('/layaairGame'), x$1rw['existDir'](x$1rw['fileNativeDir'], z8b1xa['create'](xra18, xra18['onMkdirCallBack']))), xra18['window']['focus'] = function () {}, o9_c4['getUrlPath'] = function () {}, xra18['window']['logtime'] = function (nem6h) {}, xra18['window']['alertTimeLog'] = function ($vpr7w) {}, xra18['window']['resetShareInfo'] = function () {}, xra18['window']['CanvasRenderingContext2D'] = function () {}, xra18['window']['CanvasRenderingContext2D']['prototype'] = xra18['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xra18['window']['document']['body']['appendChild'] = function () {}, xra18['EnvConfig']['pixelRatioInt'] = 0x0, fqtukg['getPixelRatio'] = xra18['pixelRatio'], xra18['_preCreateElement'] = emud6i['createElement'], emud6i['createElement'] = xra18['createElement'], fqtukg['createShaderCondition'] = xra18['createShaderCondition'], n43['parseXMLFromString'] = xra18['parseXMLFromString'], ufkqgt['_createInputElement'] = tuefi['_createInputElement'], xra18['EnvConfig']['load'] = tfkuq['prototype']['load'], tfkuq['prototype']['load'] = $rxw1['prototype']['load'], xra18['isZiYu'] && xw81rb && wx['onMessage'](function (eduift) {
        eduift['isLoad'] && (x$1rw['ziyuFileData'][eduift['url']] = eduift['data']);
      });
    }, xra18['onMkdirCallBack'] = function (mhn64, p7vyw$) {
      if (!mhn64) x$1rw['filesListObj'] = JSON['parse'](p7vyw$['data']);
    }, xra18['pixelRatio'] = function () {
      if (!xra18['EnvConfig']['pixelRatioInt']) try {
        var tmediu = wx['getSystemInfoSync']();return xra18['EnvConfig']['pixelRatioInt'] = tmediu['pixelRatio'], tmediu = tmediu, tmediu['pixelRatio'];
      } catch ($w18x) {}return xra18['EnvConfig']['pixelRatioInt'];
    }, xra18['createElement'] = function ($8r) {
      if ($8r == 'canvas') {
        var nmj6h;return xra18['idx'] == 0x1 ? xra18['isZiYu'] ? (nmj6h = sharedCanvas, nmj6h['style'] = {}) : nmj6h = window['canvas'] : nmj6h = window['wx']['createCanvas'](), xra18['idx']++, nmj6h;
      } else {
        if ($8r == 'textarea' || $8r == 'input') return xra18['onCreateInput']($8r);else {
          if ($8r == 'div') {
            var c349_n = xra18['_preCreateElement']($8r);return c349_n['contains'] = function (rp8w$1) {
              return null;
            }, c349_n['removeChild'] = function (mdtue) {}, c349_n;
          } else return xra18['_preCreateElement']($8r);
        }
      }
    }, xra18['onCreateInput'] = function (difuet) {
      var hj6enm = xra18['_preCreateElement'](difuet);return hj6enm['focus'] = tuefi['wxinputFocus'], hj6enm['blur'] = tuefi['wxinputblur'], hj6enm['style'] = {}, hj6enm['value'] = 0x0, hj6enm['parentElement'] = {}, hj6enm['placeholder'] = {}, hj6enm['type'] = {}, hj6enm['setColor'] = function (de6mhj) {}, hj6enm['setType'] = function (him6ed) {}, hj6enm['setFontFace'] = function (brx) {}, hj6enm['addEventListener'] = function (gktf0) {}, hj6enm['contains'] = function (fuktdi) {
        return null;
      }, hj6enm['removeChild'] = function (idu6em) {}, hj6enm;
    }, xra18['createShaderCondition'] = function (z0bqa) {
      var zba0x8 = this,
          c934o = function () {
        var fgti = z0bqa;return zba0x8[z0bqa['replace']('this.', '')];
      };return c934o;
    }, xra18['EnvConfig'] = null, xra18['window'] = null, xra18['_preCreateElement'] = null, xra18['_inited'] = ![], xra18['wxRequest'] = null, xra18['systemInfo'] = null, xra18['version'] = '0.0.1', xra18['isZiYu'] = ![], xra18['isPosMsgYu'] = ![], xra18['parseXMLFromString'] = function (zkag0q) {
      var aq0kgz, _3c5o9;zkag0q = zkag0q['replace'](/>\s+</g, '><');try {
        aq0kgz = new window['Parser']['DOMParser']()['parseFromString'](zkag0q, 'text/xml');
      } catch (b8a1z) {
        throw '需要引入xml解析库文件';
      }return aq0kgz;
    }, xra18['idx'] = 0x1, xra18;
  }(),
      utdeim = function () {
    function c352o() {}rw$pv7(c352o, 'laya.wx.mini.MiniImage');var $vp7l = c352o['prototype'];return $vp7l['_loadImage'] = function (n6jem) {
      var v$7wp = this,
          kq0a = ![];n6jem['indexOf']('layaNativeDir/') == -0x1 && (kq0a = !![], n6jem = aqb0zx['formatURL'](n6jem));if (!x$1rw['getFileInfo'](n6jem)) {
        if (n6jem['indexOf']('http://') != -0x1 || n6jem['indexOf']('https://') != -0x1) x$1rw['downImg'](n6jem, new z8b1xa(c352o, c352o['onDownImgCallBack'], [n6jem, v$7wp]), n6jem);else c352o['onCreateImage'](n6jem, v$7wp, !![]);
      } else c352o['onCreateImage'](n6jem, v$7wp, !kq0a);
    }, c352o['onDownImgCallBack'] = function (aqk0zg, $vp7w, gbaz) {
      if (!gbaz) c352o['onCreateImage'](aqk0zg, $vp7w);else $vp7w['onError'](null);
    }, c352o['onCreateImage'] = function (dhem, vw$r, abzx08) {
      abzx08 === void 0x0 && (abzx08 = ![]);var $rp7vw;if (!abzx08) {
        var em6hjn = x$1rw['getFileInfo'](dhem),
            itfkdu = em6hjn['md5'];$rp7vw = x$1rw['getFileNativePath'](itfkdu);
      } else $rp7vw = dhem;if (vw$r['imgCache'] == null) vw$r['imgCache'] = {};var ftgk;function dhe6im() {
        ftgk['onload'] = null, ftgk['onerror'] = null, delete vw$r['imgCache'][dhem];
      };var j6medh = function () {
        dhe6im(), vw$r['onLoaded'](ftgk);
      },
          iudm6e = function () {
        dhe6im(), vw$r['event']('error', 'Load image failed');
      };vw$r['_type'] == 'nativeimage' ? (ftgk = new emud6i['window']['Image'](), ftgk['crossOrigin'] = '', ftgk['onload'] = j6medh, ftgk['onerror'] = iudm6e, ftgk['src'] = $rp7vw, vw$r['imgCache'][dhem] = ftgk) : new tfukdi['create']($rp7vw, { 'onload': j6medh, 'onerror': iudm6e, 'onCreate': function (gkzf0) {
          ftgk = gkzf0, vw$r['imgCache'][dhem] = gkzf0;
        } });
    }, c352o;
  }(),
      tuefi = function () {
    function ifkgt() {}return rw$pv7(ifkgt, 'laya.wx.mini.MiniInput'), ifkgt['_createInputElement'] = function () {
      ufkqgt['_initInput'](ufkqgt['area'] = emud6i['createElement']('textarea')), ufkqgt['_initInput'](ufkqgt['input'] = emud6i['createElement']('input')), ufkqgt['inputContainer'] = emud6i['createElement']('div'), ufkqgt['inputContainer']['style']['position'] = 'absolute', ufkqgt['inputContainer']['style']['zIndex'] = 0x186a0, emud6i['container']['appendChild'](ufkqgt['inputContainer']), ufkqgt['inputContainer']['setPos'] = function (n_4, ly7$pv) {
        ufkqgt['inputContainer']['style']['left'] = n_4 + 'px', ufkqgt['inputContainer']['style']['top'] = ly7$pv + 'px';
      }, o9_c4['stage']['on']('resize', null, ifkgt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xa0zb) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), he6jm['_soundClass'] = hn46m, he6jm['_musicClass'] = hn46m, window['_videoClass'] = ihmde6;
    }, ifkgt['_onStageResize'] = function () {
      var udim6e = o9_c4['stage']['_canvasTransform']['identity']();udim6e['scale'](emud6i['width'] / ufkgit['canvas']['width'] / fqtukg['getPixelRatio'](), emud6i['height'] / ufkgit['canvas']['height'] / fqtukg['getPixelRatio']());
    }, ifkgt['wxinputFocus'] = function (akgz) {
      var za0b = ufkqgt['inputElement']['target'];if (za0b && !za0b['editable']) return;n_3c49['window']['wx']['offKeyboardConfirm'](), n_3c49['window']['wx']['offKeyboardInput'](), n_3c49['window']['wx']['showKeyboard']({ 'defaultValue': za0b['text'], 'maxLength': za0b['maxChars'], 'multiple': za0b['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (h6jmde) {}, 'fail': function (pw1v$) {} }), n_3c49['window']['wx']['onKeyboardConfirm'](function (iuedt) {
        var tdfi = iuedt ? iuedt['value'] : '';za0b['text'] = tdfi, za0b['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), n_3c49['window']['wx']['onKeyboardInput'](function (idue6) {
        var n_c39 = idue6 ? idue6['value'] : '';if (!za0b['multiline']) {
          if (n_c39['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }za0b['text'] = n_c39, za0b['event']('input');
      });
    }, ifkgt['inputEnter'] = function () {
      ufkqgt['inputElement']['target']['focus'] = ![];
    }, ifkgt['wxinputblur'] = function () {
      ifkgt['hideKeyboard']();
    }, ifkgt['hideKeyboard'] = function () {
      n_3c49['window']['wx']['offKeyboardConfirm'](), n_3c49['window']['wx']['offKeyboardInput'](), n_3c49['window']['wx']['hideKeyboard']({ 'success': function (hne6jm) {
          console['log']('隐藏键盘');
        }, 'fail': function (fdiktu) {
          console['log']('隐藏键盘出错:' + (fdiktu ? fdiktu['errMsg'] : ''));
        } });
    }, ifkgt;
  }(),
      $rxw1 = function () {
    function o_c59() {}rw$pv7(o_c59, 'laya.wx.mini.MiniLoader');var $l7pvy = o_c59['prototype'];return $l7pvy['load'] = function (_hjn6, medj6h, qzak0g, c593_, bqgza) {
      qzak0g === void 0x0 && (qzak0g = !![]), bqgza === void 0x0 && (bqgza = ![]);var ar8bx1 = this;ar8bx1['_url'] = _hjn6;if (_hjn6['indexOf']('data:image') === 0x0) ar8bx1['_type'] = medj6h = 'image';else ar8bx1['_type'] = medj6h || (medj6h = ar8bx1['getTypeFromUrl'](_hjn6));ar8bx1['_cache'] = qzak0g, ar8bx1['_data'] = null;var uikgft = 'ascii';if (_hjn6['indexOf']('.fnt') != -0x1) uikgft = 'utf8';else medj6h == 'arraybuffer' && (uikgft = '');;var n4h_j9 = n43['getFileExtension'](_hjn6);if (o_c59['_fileTypeArr']['indexOf'](n4h_j9) != -0x1) n_3c49['EnvConfig']['load']['call'](this, _hjn6, medj6h, qzak0g, c593_, bqgza);else {
        if (!x$1rw['getFileInfo'](_hjn6)) {
          if (_hjn6['indexOf']('layaNativeDir/') != -0x1) {
            if (n_3c49['isZiYu']) {
              var z0gqa = x$1rw['ziyuFileData'][_hjn6];ar8bx1['onLoaded'](z0gqa);return;
            } else {
              cosnole['log']('read read'), x$1rw['read'](_hjn6, uikgft, new z8b1xa(o_c59, o_c59['onReadNativeCallBack'], [uikgft, _hjn6, medj6h, qzak0g, c593_, bqgza, ar8bx1]));return;
            }
          }if (aqb0zx['rootPath'] == '') var rpw7 = _hjn6;else rpw7 = _hjn6['split'](aqb0zx['rootPath'])[0x0];_hjn6['indexOf']('http://') != -0x1 || _hjn6['indexOf']('https://') != -0x1 ? n_3c49['EnvConfig']['load']['call'](ar8bx1, _hjn6, medj6h, qzak0g, c593_, bqgza) : x$1rw['readFile'](rpw7, uikgft, new z8b1xa(o_c59, o_c59['onReadNativeCallBack'], [uikgft, _hjn6, medj6h, qzak0g, c593_, bqgza, ar8bx1]), _hjn6);
        } else n_3c49['EnvConfig']['load']['call'](this, _hjn6, medj6h, qzak0g, c593_, bqgza);
      }
    }, $l7pvy['resMgrLoad'] = function (rx$w, c3_o59, utgkf, gzqak0, l$vyp, x1wrb8, e6hmd) {
      utgkf === void 0x0 && (utgkf = 0x0), gzqak0 === void 0x0 && (gzqak0 = ![]), l$vyp === void 0x0 && (l$vyp = ![]), x1wrb8 === void 0x0 && (x1wrb8 = 0x0), e6hmd === void 0x0 && (e6hmd = 0x3), rx$w['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', rx$w), n_3c49['EnvConfig']['resMgrLoad'](rx$w, (abq0g, $pvr1, dme6j) => {
        o_c59['prototype']['resMgrLoadCallBack'](abq0g, $pvr1, dme6j, c3_o59);
      }, utgkf, gzqak0, l$vyp, x1wrb8, e6hmd);
    }, $l7pvy['resMgrLoadCallBack'] = function (kqgtuf, hn_, enjm6h, _5o9) {
      console['log']('buff:::', kqgtuf, enjm6h, x$1rw['fileNativeDir'] + '///' + x$1rw['fileListName']), _5o9(kqgtuf, hn_, enjm6h);
    }, $l7pvy['clearRes'] = function (xb18ra, en6hm) {
      en6hm === void 0x0 && (en6hm = ![]);var q0gkzf = this;q0gkzf['clearRes'](xb18ra, en6hm);var $wpv7y = x$1rw['getFileInfo'](xb18ra);if ($wpv7y && (xb18ra['indexOf']('http://') != -0x1 || xb18ra['indexOf']('https://') != -0x1)) {
        var o_49 = $wpv7y['md5'],
            gfukt = x$1rw['getFileNativePath'](o_49);x$1rw['remove'](gfukt);
      }
    }, o_c59['onReadNativeCallBack'] = function (qagb, azg0k, j9n34, itudme, fgiktu, xbqaz, jm6n4, ftqg, v$p7wy) {
      itudme === void 0x0 && (itudme = !![]), xbqaz === void 0x0 && (xbqaz = ![]), ftqg === void 0x0 && (ftqg = 0x0);if (!ftqg) {
        var gqb0z;if (j9n34 == 'json' || j9n34 == 'atlas') gqb0z = n_3c49['getJson'](v$p7wy['data']);else j9n34 == 'xml' ? gqb0z = n43['parseXMLFromString'](v$p7wy['data']) : gqb0z = v$p7wy['data'];jm6n4['onLoaded'](gqb0z), !n_3c49['isZiYu'] && n_3c49['isPosMsgYu'] && j9n34 != 'arraybuffer' && wx['postMessage']({ 'url': azg0k, 'data': gqb0z, 'isLoad': !![] });
      } else ftqg == 0x1 && n_3c49['EnvConfig']['load']['call'](jm6n4, azg0k, j9n34, itudme, fgiktu, xbqaz);
    }, m6hd(o_c59, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), o_c59;
  }(),
      x$1rw = function (meudit) {
    function $ply() {
      $ply['__super']['call'](this);;
    }return rw$pv7($ply, 'laya.wx.mini.MiniFileMgr', meudit), $ply['isLoadFile'] = function (xrba1) {
      return $ply['_fileTypeArr']['indexOf'](xrba1) != -0x1 ? !![] : ![];
    }, $ply['getFileInfo'] = function (p$8wr) {
      var tugkif = p$8wr['split']('?')[0x0],
          c3o925 = $ply['filesListObj'][tugkif];if (c3o925 == null) return null;else return c3o925;return null;
    }, $ply['onFileUpdate'] = function (ehj, r8b1x) {
      var fkqg = ehj['split']('/'),
          jmn46 = fkqg[fkqg['length'] - 0x1],
          rw7p$v = $ply['getFileInfo'](r8b1x);if (rw7p$v == null) $ply['onSaveFile'](r8b1x, jmn46);else {
        if (rw7p$v['readyUrl'] != r8b1x) $ply['remove'](jmn46, r8b1x);
      }
    }, $ply['exits'] = function (j_9nh4, qzkag0) {
      var x80 = $ply['getFileNativePath'](j_9nh4);$ply['fs']['getFileInfo']({ 'filePath': x80, 'success': function (uftei) {
          qzkag0 != null && qzkag0['runWith']([0x0, uftei]);
        }, 'fail': function (tedim) {
          qzkag0 != null && qzkag0['runWith']([0x1, tedim]);
        } });
    }, $ply['read'] = function (_3j4n, defti, pvwr7$, $r1wvp) {
      defti === void 0x0 && (defti = 'ascill'), $r1wvp === void 0x0 && ($r1wvp = '');var o9c53_;$r1wvp != '' ? o9c53_ = $ply['getFileNativePath'](_3j4n) : o9c53_ = _3j4n, $ply['fs']['readFile']({ 'filePath': o9c53_, 'encoding': defti, 'success': function (nj6h4_) {
          pvwr7$ != null && pvwr7$['runWith']([0x0, nj6h4_]);
        }, 'fail': function (w18x) {
          if (w18x && $r1wvp != '') $ply['down']($r1wvp, defti, pvwr7$, $r1wvp);else pvwr7$ != null && pvwr7$['runWith']([0x1]);
        } });
    }, $ply['readNativeFile'] = function (bax1, r1$w8p) {
      $ply['fs']['readFile']({ 'filePath': bax1, 'encoding': '', 'success': function (he6mdj) {
          r1$w8p != null && r1$w8p['runWith']([0x0]);
        }, 'fail': function (rw$p1) {
          r1$w8p != null && r1$w8p['runWith']([0x1]);
        } });
    }, $ply['down'] = function (tgfq0k, yvw$7p, vl$p7y, ditk) {
      yvw$7p === void 0x0 && (yvw$7p = 'ascill'), ditk === void 0x0 && (ditk = '');var _j49nh = $ply['getFileNativePath'](ditk),
          h6jmed = $ply['wxdown']({ 'url': tgfq0k, 'filePath': _j49nh, 'success': function (_9o53) {
          if (_9o53['statusCode'] === 0xc8) $ply['readFile'](_9o53['filePath'], yvw$7p, vl$p7y, ditk);
        }, 'fail': function (j_9n34) {
          vl$p7y != null && vl$p7y['runWith']([0x1, j_9n34]);
        } });h6jmed['onProgressUpdate'](function (midh6) {
        vl$p7y != null && vl$p7y['runWith']([0x2, midh6['progress']]);
      });
    }, $ply['readFile'] = function (ab81xr, zx0baq, h64nj_, w81pr$) {
      zx0baq === void 0x0 && (zx0baq = 'ascill'), w81pr$ === void 0x0 && (w81pr$ = ''), $ply['fs']['readFile']({ 'filePath': ab81xr, 'encoding': zx0baq, 'success': function (eidum) {
          if (ab81xr['indexOf']('http://') != -0x1 || ab81xr['indexOf']('https://') != -0x1) $ply['onFileUpdate'](ab81xr, w81pr$);h64nj_ != null && h64nj_['runWith']([0x0, eidum]);
        }, 'fail': function (hjem6d) {
          if (hjem6d) h64nj_ != null && h64nj_['runWith']([0x1, hjem6d]);
        } });
    }, $ply['downImg'] = function (_n4h6j, xr18w, m6dehj) {
      m6dehj === void 0x0 && (m6dehj = '');var rx81$w = $ply['wxdown']({ 'url': _n4h6j, 'success': function (uiefd) {
          uiefd['statusCode'] === 0xc8 && $ply['copyFile'](uiefd['tempFilePath'], m6dehj, xr18w);
        }, 'fail': function (gq0tk) {
          xr18w != null && xr18w['runWith']([0x1, gq0tk]);
        } });
    }, $ply['copyFile'] = function (medtu, jnh6e, zbqag0) {
      var vpy7w$ = medtu['split']('/'),
          duetf = vpy7w$[vpy7w$['length'] - 0x1],
          pv = jnh6e['split']('?')[0x0],
          dm6ie = $ply['getFileInfo'](jnh6e),
          _c34n9 = $ply['getFileNativePath'](duetf);$ply['fs']['copyFile']({ 'srcPath': medtu, 'destPath': _c34n9, 'success': function (ed6mhj) {
          if (!dm6ie) $ply['onSaveFile'](jnh6e, duetf), zbqag0 != null && zbqag0['runWith']([0x0]);else {
            if (dm6ie['readyUrl'] != jnh6e) $ply['remove'](duetf, jnh6e, zbqag0);
          }
        }, 'fail': function (ufgitk) {
          zbqag0 != null && zbqag0['runWith']([0x1, ufgitk]);
        } });
    }, $ply['getFileNativePath'] = function (gqftk) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gqftk;
    }, $ply['remove'] = function (o2953, midh6e, gtq0f) {
      midh6e === void 0x0 && (midh6e = '');var c593o2 = $ply['getFileInfo'](midh6e),
          _o493c = $ply['getFileNativePath'](c593o2['md5']);o9_c4['loader']['clearRes'](c593o2['readyUrl']), $ply['fs']['unlink']({ 'filePath': _o493c, 'success': function (ufkqt) {
          if (midh6e != '') $ply['onSaveFile'](midh6e, o2953);gtq0f != null && gtq0f['runWith']([0x0]);
        }, 'fail': function (_4n6jh) {} });
    }, $ply['onSaveFile'] = function (p18$wr, bax0qz) {
      var $1rpw8 = p18$wr['split']('?')[0x0];$ply['filesListObj'][$1rpw8] = { 'md5': bax0qz, 'readyUrl': p18$wr }, $ply['fs']['writeFile']({ 'filePath': $ply['fileNativeDir'] + '/' + $ply['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($ply['filesListObj']), 'success': function (menh) {
          console['log']('写入测试测试成功：', menh);
        }, 'fail': function (gfz0k) {
          console['log']('写入测试测试失败：', gfz0k);
        } });
    }, $ply['existDir'] = function (n34c9_, nj64h) {
      $ply['fs']['mkdir']({ 'dirPath': n34c9_, 'success': function (qbazx) {
          nj64h != null && nj64h['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (_4nh) {
          if (_4nh['errMsg']['indexOf']('file already exists') != -0x1) $ply['readSync']($ply['fileListName'], 'utf8', nj64h);else nj64h != null && nj64h['runWith']([0x1, _4nh]);
        } });
    }, $ply['readSync'] = function (kf0tg, jem6nh, etumdi, zgb) {
      jem6nh === void 0x0 && (jem6nh = 'ascill'), zgb === void 0x0 && (zgb = '');var u6m = $ply['getFileNativePath'](kf0tg),
          g0zqb;try {
        g0zqb = $ply['fs']['readFileSync'](u6m), etumdi != null && etumdi['runWith']([0x0, { 'data': g0zqb }]);
      } catch (co_59) {
        etumdi != null && etumdi['runWith']([0x1]);
      }
    }, $ply['readCache'] = function () {}, $ply['writeCache'] = function (x80abz) {
      var t0kgfq = readyUrl['split']('?')[0x0];$ply['filesListObj'][t0kgfq] = { 'md5': md5Name, 'readyUrl': readyUrl }, $ply['fs']['writeFile']({ 'filePath': $ply['fileNativeDir'] + '/' + $ply['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($ply['filesListObj']), 'success': function (ne6hm) {}, 'fail': function (e6idu) {} });
    }, $ply['setNativeFileDir'] = function (jh6m4n) {
      $ply['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + jh6m4n;
    }, $ply['filesListObj'] = {}, $ply['fileNativeDir'] = null, $ply['fileListName'] = 'layaairfiles.txt', $ply['ziyuFileData'] = {}, m6hd($ply, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $ply;
  }(dimeut),
      hn46m = function (xbr18) {
    function y$7wv() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], y$7wv['__super']['call'](this), this['_sound'] = y$7wv['_createSound'](), this['_chanell'] = new py7lv(this['_sound']);
    }rw$pv7(y$7wv, 'laya.wx.mini.MiniSound', xbr18);var q0gazk = y$7wv['prototype'];return q0gazk['load'] = function (kgqtuf) {
      var d6eu = this;kgqtuf = aqb0zx['formatURL'](kgqtuf), this['url'] = kgqtuf;if (y$7wv['_audioCache'][kgqtuf]) {
        this['event']('complete');return;
      }function eitmud() {
        if (y$7wv['_null'] != undefined) d6eu['_sound']['onCanplay'](y$7wv['_null']), d6eu['_sound']['onError'](y$7wv['_null']);else try {
          d6eu['_sound']['onCanplay'](null), d6eu['_sound']['onError'](null), y$7wv['_null'] = null;
        } catch (mdhj6e) {
          console['warn']('[wxmini] _clearSound:' + mdhj6e), d6eu['_sound']['onCanplay']($8xr), d6eu['_sound']['onError']($8xr), y$7wv['_null'] = $8xr;
        }
      }function za1x8() {
        fguitk['loaded'] = !![], fguitk['event']('complete'), y$7wv['_audioCache'][fguitk['url']] = fguitk;
      }function gqb0a(nhje) {
        console['error']('errCode=' + nhje['errCode'] + '  errMsg=' + nhje['errMsg']), fguitk['event']('error');
      }function $8xr() {}this['_sound']['onCanplay'](za1x8), this['_sound']['onError'](gqb0a), this['_sound']['src'] = kgqtuf;var fguitk = this;
    }, q0gazk['play'] = function (gzq0b, xwbr18) {
      gzq0b === void 0x0 && (gzq0b = 0x0), xwbr18 === void 0x0 && (xwbr18 = 0x0);var ueftd, r1wv$;if (this['url'] == he6jm['_tMusic']) {
        if (!y$7wv['_musicAudio']) y$7wv['_musicAudio'] = this['_sound'];ueftd = y$7wv['_musicAudio'], r1wv$ = this['_chanell'];
      } else ueftd = this['_sound'], r1wv$ = this['_chanell'];return ueftd['src'] = this['url'], ueftd['startTime'] = 0x0, r1wv$['isStopped'] && (r1wv$['url'] = this['url'], r1wv$['loops'] = xwbr18, r1wv$['startTime'] = gzq0b, r1wv$['play'](), he6jm['addChannel'](r1wv$)), r1wv$;
    }, q0gazk['dispose'] = function () {
      var x1abz8 = y$7wv['_audioCache'][this['url']];x1abz8 && (x1abz8['src'] = '', delete y$7wv['_audioCache'][this['url']]);
    }, ifkud(0x0, q0gazk, 'duration', function () {
      return this['_sound']['duration'];
    }), y$7wv['_createSound'] = function () {
      y$7wv['_id']++;var _3cn49 = n_3c49['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return _3cn49;
    }, y$7wv['_musicAudio'] = null, y$7wv['_id'] = 0x0, y$7wv['_audioCache'] = {}, y$7wv['_null'] = undefined, y$7wv;
  }(dimeut),
      py7lv = function (mnjh) {
    function _o9c(vly7$p) {
      this['_audio'] = null, this['_onEnd'] = null, _o9c['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = vly7$p, this['_onEnd'] = n43['bind'](this['__onEnd'], this), vly7$p['onEnded'](this['_onEnd']);
    }rw$pv7(_o9c, 'laya.wx.mini.MiniSoundChannel', mnjh);var $8prw1 = _o9c['prototype'];return $8prw1['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (o9_c4['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $8prw1['__onNull'] = function () {}, $8prw1['play'] = function () {
      this['isStopped'] = ![], he6jm['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $8prw1['stop'] = function () {
      this['isStopped'] = !![], he6jm['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, $8prw1['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $8prw1['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], he6jm['addChannel'](this), this['_audio']['play']();
    }, ifkud(0x0, $8prw1, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ifkud(0x0, $8prw1, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ifkud(0x0, $8prw1, 'volume', function () {
      return 0x1;
    }, function (nc93_4) {}), _o9c['_null'] = undefined, _o9c;
  }(jhmed6),
      ihmde6 = function () {
    function xb0a() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = n_3c49['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }rw$pv7(xb0a, 'laya.wx.mini.MiniVideo');var dufkti = xb0a['prototype'];return dufkti['on'] = function (a0bgq, n6hm, gzfqk) {
      if (a0bgq == 'loadedmetadata') this['onPlayFunc'] = gzfqk['bind'](n6hm), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else a0bgq == 'ended' && (this['onEndedFunC'] = gzfqk['bind'](n6hm), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, dufkti['onTimeUpdateFunc'] = function (kdf) {
      this['position'] = kdf['position'], this['_duration'] = kdf['duration'];
    }, dufkti['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, dufkti['onended'] = function (pwv7$, ihme6) {
      this['onEndedFunC'] = ihme6['bind'](pwv7$), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, dufkti['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, dufkti['off'] = function (iemudt, uidt, r$7pv) {
      if (iemudt == 'loadedmetadata') this['onPlayFunc'] = r$7pv['bind'](uidt), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else iemudt == 'ended' && (this['onEndedFunC'] = r$7pv['bind'](uidt), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, dufkti['load'] = function ($r1pw) {
      if (!this['videoElement']) return;this['videoElement']['src'] = $r1pw;
    }, dufkti['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, dufkti['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, dufkti['size'] = function (deh, _9o5c3) {
      if (!this['videoElement']) return;this['videoElement']['width'] = deh, this['videoElement']['height'] = _9o5c3;
    }, dufkti['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, dufkti['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, ifkud(0x0, dufkti, 'duration', function () {
      return this['_duration'];
    }), ifkud(0x0, dufkti, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (imted) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = imted;
    }), ifkud(0x0, dufkti, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), ifkud(0x0, dufkti, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), ifkud(0x0, dufkti, 'ended', function () {
      return this['videoend'];
    }), ifkud(0x0, dufkti, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (vly$7p) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = vly$7p;
    }), ifkud(0x0, dufkti, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (v$pl7) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = v$pl7;
    }), ifkud(0x0, dufkti, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (dfutk) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = dfutk;
    }), ifkud(0x0, dufkti, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), ifkud(0x0, dufkti, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (dj6mhe) {
      if (!this['videoElement']) return;this['videoElement']['x'] = dj6mhe;
    }), ifkud(0x0, dufkti, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (hd6jem) {
      if (!this['videoElement']) return;this['videoElement']['y'] = hd6jem;
    }), ifkud(0x0, dufkti, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), ifkud(0x0, dufkti, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (diem6h) {
      if (!this['videoElement']) return;this['videoElement']['src'] = diem6h;
    }), ifkud(0x0, dufkti, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (arb18) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = arb18;
    }), ifkud(0x0, dufkti, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (p$1) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = p$1;
    }), xb0a;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var c9o34_ in Laya) {
    var p7wr$ = Laya[c9o34_];p7wr$ && p7wr$['__isclass'] && (exports[c9o34_] = p7wr$);
  }
});