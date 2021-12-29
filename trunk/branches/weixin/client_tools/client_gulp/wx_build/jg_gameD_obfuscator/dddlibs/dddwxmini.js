var v = wx.$d;
(function (window, document, r7vw$p) {
  var z0xb = r7vw$p['un'],
      qkt0fg = r7vw$p['uns'],
      h4jn6_ = r7vw$p['static'],
      o59 = r7vw$p['class'],
      deum = r7vw$p['getset'],
      fqgukt = r7vw$p['__newvec'],
      dm6ieh = laya['utils']['Browser'],
      qugtf = laya['events']['Event'],
      qtfgku = laya['events']['EventDispatcher'],
      ief = laya['resource']['HTMLImage'],
      w$p1v = laya['utils']['Handler'],
      pr1v$w = laya['display']['Input'],
      qfz0kg = laya['net']['Loader'],
      ab0g = laya['maths']['Matrix'],
      $7prw = laya['renders']['Render'],
      l7vp$y = laya['utils']['RunDriver'],
      dutemi = laya['media']['Sound'],
      hem6di = laya['media']['SoundChannel'],
      v$7rp = laya['media']['SoundManager'],
      n3j_9 = laya['display']['Stage'],
      pw$7r = laya['net']['URL'],
      gqt0fk = laya['utils']['Utils'],
      _59co3 = function () {
    function n4_39j() {}return o59(n4_39j, 'laya.wx.mini.MiniAdpter'), n4_39j['getJson'] = function (iukf) {
      return JSON['parse'](iukf);
    }, n4_39j['init'] = function (kgqf0z, j64n_h) {
      kgqf0z === void 0x0 && (kgqf0z = ![]), j64n_h === void 0x0 && (j64n_h = ![]);if (n4_39j['_inited']) return;n4_39j['window'] = window;if (n4_39j['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;n4_39j['_inited'] = !![], n4_39j['isZiYu'] = j64n_h, n4_39j['isPosMsgYu'] = kgqf0z, n4_39j['EnvConfig'] = {}, !n4_39j['isZiYu'] && (j93['setNativeFileDir']('/layaairGame'), j93['existDir'](j93['fileNativeDir'], w$p1v['create'](n4_39j, n4_39j['onMkdirCallBack']))), n4_39j['window']['focus'] = function () {}, r7vw$p['getUrlPath'] = function () {}, n4_39j['window']['logtime'] = function (zakqg0) {}, n4_39j['window']['alertTimeLog'] = function (kiuf) {}, n4_39j['window']['resetShareInfo'] = function () {}, n4_39j['window']['CanvasRenderingContext2D'] = function () {}, n4_39j['window']['CanvasRenderingContext2D']['prototype'] = n4_39j['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], n4_39j['window']['document']['body']['appendChild'] = function () {}, n4_39j['EnvConfig']['pixelRatioInt'] = 0x0, l7vp$y['getPixelRatio'] = n4_39j['pixelRatio'], n4_39j['_preCreateElement'] = dm6ieh['createElement'], dm6ieh['createElement'] = n4_39j['createElement'], l7vp$y['createShaderCondition'] = n4_39j['createShaderCondition'], gqt0fk['parseXMLFromString'] = n4_39j['parseXMLFromString'], pr1v$w['_createInputElement'] = _46njh['_createInputElement'], n4_39j['EnvConfig']['load'] = qfz0kg['prototype']['load'], qfz0kg['prototype']['load'] = zqak0['prototype']['load'], n4_39j['isZiYu'] && kgqf0z && wx['onMessage'](function (x8$w) {
        x8$w['isLoad'] && (j93['ziyuFileData'][x8$w['url']] = x8$w['data']);
      });
    }, n4_39j['onMkdirCallBack'] = function (ufdtik, hmied) {
      if (!ufdtik) j93['filesListObj'] = JSON['parse'](hmied['data']);
    }, n4_39j['pixelRatio'] = function () {
      if (!n4_39j['EnvConfig']['pixelRatioInt']) try {
        var etuif = wx['getSystemInfoSync']();return n4_39j['EnvConfig']['pixelRatioInt'] = etuif['pixelRatio'], etuif = etuif, etuif['pixelRatio'];
      } catch (fg0zk) {}return n4_39j['EnvConfig']['pixelRatioInt'];
    }, n4_39j['createElement'] = function (ka0qgz) {
      if (ka0qgz == 'canvas') {
        var vr;return n4_39j['idx'] == 0x1 ? n4_39j['isZiYu'] ? (vr = sharedCanvas, vr['style'] = {}) : vr = window['canvas'] : vr = window['wx']['createCanvas'](), n4_39j['idx']++, vr;
      } else {
        if (ka0qgz == 'textarea' || ka0qgz == 'input') return n4_39j['onCreateInput'](ka0qgz);else {
          if (ka0qgz == 'div') {
            var hei6dm = n4_39j['_preCreateElement'](ka0qgz);return hei6dm['contains'] = function (pw$v7y) {
              return null;
            }, hei6dm['removeChild'] = function (gqukf) {}, hei6dm;
          } else return n4_39j['_preCreateElement'](ka0qgz);
        }
      }
    }, n4_39j['onCreateInput'] = function (c4_3o) {
      var $vwpy7 = n4_39j['_preCreateElement'](c4_3o);return $vwpy7['focus'] = _46njh['wxinputFocus'], $vwpy7['blur'] = _46njh['wxinputblur'], $vwpy7['style'] = {}, $vwpy7['value'] = 0x0, $vwpy7['parentElement'] = {}, $vwpy7['placeholder'] = {}, $vwpy7['type'] = {}, $vwpy7['setColor'] = function (ed6ium) {}, $vwpy7['setType'] = function (idumt) {}, $vwpy7['setFontFace'] = function (mdeh6j) {}, $vwpy7['addEventListener'] = function (tkgfi) {}, $vwpy7['contains'] = function (r7wp$v) {
        return null;
      }, $vwpy7['removeChild'] = function (ftidk) {}, $vwpy7;
    }, n4_39j['createShaderCondition'] = function (kfzqg) {
      var itedu = this,
          qgbaz = function () {
        var gitkfu = kfzqg;return itedu[kfzqg['replace']('this.', '')];
      };return qgbaz;
    }, n4_39j['EnvConfig'] = null, n4_39j['window'] = null, n4_39j['_preCreateElement'] = null, n4_39j['_inited'] = ![], n4_39j['wxRequest'] = null, n4_39j['systemInfo'] = null, n4_39j['version'] = '0.0.1', n4_39j['isZiYu'] = ![], n4_39j['isPosMsgYu'] = ![], n4_39j['parseXMLFromString'] = function (zka0) {
      var a0gqz, x81bar;zka0 = zka0['replace'](/>\s+</g, '><');try {
        a0gqz = new window['Parser']['DOMParser']()['parseFromString'](zka0, 'text/xml');
      } catch (pv7r) {
        throw '需要引入xml解析库文件';
      }return a0gqz;
    }, n4_39j['idx'] = 0x1, n4_39j;
  }(),
      zx80a = function () {
    function o_c59() {}o59(o_c59, 'laya.wx.mini.MiniImage');var qfktu = o_c59['prototype'];return qfktu['_loadImage'] = function (hj6nem) {
      var fgutkq = this,
          w81p$ = ![];hj6nem['indexOf']('layaNativeDir/') == -0x1 && (w81p$ = !![], hj6nem = pw$7r['formatURL'](hj6nem));if (!j93['getFileInfo'](hj6nem)) {
        if (hj6nem['indexOf']('http://') != -0x1 || hj6nem['indexOf']('https://') != -0x1) j93['downImg'](hj6nem, new w$p1v(o_c59, o_c59['onDownImgCallBack'], [hj6nem, fgutkq]), hj6nem);else o_c59['onCreateImage'](hj6nem, fgutkq, !![]);
      } else o_c59['onCreateImage'](hj6nem, fgutkq, !w81p$);
    }, o_c59['onDownImgCallBack'] = function (mtiu, aqzgb0, emiudt) {
      if (!emiudt) o_c59['onCreateImage'](mtiu, aqzgb0);else aqzgb0['onError'](null);
    }, o_c59['onCreateImage'] = function ($wpr81, gkz0fq, $1x8wr) {
      $1x8wr === void 0x0 && ($1x8wr = ![]);var _h9j4n;if (!$1x8wr) {
        var gq0zab = j93['getFileInfo']($wpr81),
            udim6 = gq0zab['md5'];_h9j4n = j93['getFileNativePath'](udim6);
      } else _h9j4n = $wpr81;if (gkz0fq['imgCache'] == null) gkz0fq['imgCache'] = {};var d6jehm;function jn349_() {
        d6jehm['onload'] = null, d6jehm['onerror'] = null, delete gkz0fq['imgCache'][$wpr81];
      };var dutik = function () {
        jn349_(), gkz0fq['onLoaded'](d6jehm);
      },
          kz0fgq = function () {
        jn349_(), gkz0fq['event']('error', 'Load image failed');
      };gkz0fq['_type'] == 'nativeimage' ? (d6jehm = new dm6ieh['window']['Image'](), d6jehm['crossOrigin'] = '', d6jehm['onload'] = dutik, d6jehm['onerror'] = kz0fgq, d6jehm['src'] = _h9j4n, gkz0fq['imgCache'][$wpr81] = d6jehm) : new ief['create'](_h9j4n, { 'onload': dutik, 'onerror': kz0fgq, 'onCreate': function (jhn4m6) {
          d6jehm = jhn4m6, gkz0fq['imgCache'][$wpr81] = jhn4m6;
        } });
    }, o_c59;
  }(),
      _46njh = function () {
    function gtuqfk() {}return o59(gtuqfk, 'laya.wx.mini.MiniInput'), gtuqfk['_createInputElement'] = function () {
      pr1v$w['_initInput'](pr1v$w['area'] = dm6ieh['createElement']('textarea')), pr1v$w['_initInput'](pr1v$w['input'] = dm6ieh['createElement']('input')), pr1v$w['inputContainer'] = dm6ieh['createElement']('div'), pr1v$w['inputContainer']['style']['position'] = 'absolute', pr1v$w['inputContainer']['style']['zIndex'] = 0x186a0, dm6ieh['container']['appendChild'](pr1v$w['inputContainer']), pr1v$w['inputContainer']['setPos'] = function (j46hmn, m6dehj) {
        pr1v$w['inputContainer']['style']['left'] = j46hmn + 'px', pr1v$w['inputContainer']['style']['top'] = m6dehj + 'px';
      }, r7vw$p['stage']['on']('resize', null, gtuqfk['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fqkzg) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), v$7rp['_soundClass'] = e6hdmi, v$7rp['_musicClass'] = e6hdmi;
    }, gtuqfk['_onStageResize'] = function () {
      var ly$v7p = r7vw$p['stage']['_canvasTransform']['identity']();ly$v7p['scale'](dm6ieh['width'] / $7prw['canvas']['width'] / l7vp$y['getPixelRatio'](), dm6ieh['height'] / $7prw['canvas']['height'] / l7vp$y['getPixelRatio']());
    }, gtuqfk['wxinputFocus'] = function (pyw$v) {
      var uie6 = pr1v$w['inputElement']['target'];if (uie6 && !uie6['editable']) return;_59co3['window']['wx']['offKeyboardConfirm'](), _59co3['window']['wx']['offKeyboardInput'](), _59co3['window']['wx']['showKeyboard']({ 'defaultValue': uie6['text'], 'maxLength': uie6['maxChars'], 'multiple': uie6['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (tueidm) {}, 'fail': function (wv$rp1) {} }), _59co3['window']['wx']['onKeyboardConfirm'](function (ufgtk) {
        var tikufg = ufgtk ? ufgtk['value'] : '';uie6['text'] = tikufg, uie6['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _59co3['window']['wx']['onKeyboardInput'](function (tifguk) {
        var fkz0 = tifguk ? tifguk['value'] : '';if (!uie6['multiline']) {
          if (fkz0['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }uie6['text'] = fkz0, uie6['event']('input');
      });
    }, gtuqfk['inputEnter'] = function () {
      pr1v$w['inputElement']['target']['focus'] = ![];
    }, gtuqfk['wxinputblur'] = function () {
      gtuqfk['hideKeyboard']();
    }, gtuqfk['hideKeyboard'] = function () {
      _59co3['window']['wx']['offKeyboardConfirm'](), _59co3['window']['wx']['offKeyboardInput'](), _59co3['window']['wx']['hideKeyboard']({ 'success': function (imtued) {
          console['log']('隐藏键盘');
        }, 'fail': function (itmed) {
          console['log']('隐藏键盘出错:' + (itmed ? itmed['errMsg'] : ''));
        } });
    }, gtuqfk;
  }(),
      zqak0 = function () {
    function jen6mh() {}o59(jen6mh, 'laya.wx.mini.MiniLoader');var v$1pw = jen6mh['prototype'];return v$1pw['load'] = function (v$wyp7, vy$w, k0zgaq, rp$v1w, mnh46j) {
      k0zgaq === void 0x0 && (k0zgaq = !![]), mnh46j === void 0x0 && (mnh46j = ![]);var v7r$w = this;v7r$w['_url'] = v$wyp7;if (v$wyp7['indexOf']('data:image') === 0x0) v7r$w['_type'] = vy$w = 'image';else v7r$w['_type'] = vy$w || (vy$w = v7r$w['getTypeFromUrl'](v$wyp7));v7r$w['_cache'] = k0zgaq, v7r$w['_data'] = null;var o4c_ = 'ascii';if (v$wyp7['indexOf']('.fnt') != -0x1) o4c_ = 'utf8';else vy$w == 'arraybuffer' && (o4c_ = '');;var kuidft = gqt0fk['getFileExtension'](v$wyp7);if (jen6mh['_fileTypeArr']['indexOf'](kuidft) != -0x1) _59co3['EnvConfig']['load']['call'](this, v$wyp7, vy$w, k0zgaq, rp$v1w, mnh46j);else {
        if (!j93['getFileInfo'](v$wyp7)) {
          if (v$wyp7['indexOf']('layaNativeDir/') != -0x1) {
            if (_59co3['isZiYu']) {
              var _3oc = j93['ziyuFileData'][v$wyp7];v7r$w['onLoaded'](_3oc);return;
            } else {
              cosnole['log']('read read'), j93['read'](v$wyp7, o4c_, new w$p1v(jen6mh, jen6mh['onReadNativeCallBack'], [o4c_, v$wyp7, vy$w, k0zgaq, rp$v1w, mnh46j, v7r$w]));return;
            }
          }if (pw$7r['rootPath'] == '') var menh = v$wyp7;else menh = v$wyp7['split'](pw$7r['rootPath'])[0x0];v$wyp7['indexOf']('http://') != -0x1 || v$wyp7['indexOf']('https://') != -0x1 ? _59co3['EnvConfig']['load']['call'](v7r$w, v$wyp7, vy$w, k0zgaq, rp$v1w, mnh46j) : j93['readFile'](menh, o4c_, new w$p1v(jen6mh, jen6mh['onReadNativeCallBack'], [o4c_, v$wyp7, vy$w, k0zgaq, rp$v1w, mnh46j, v7r$w]), v$wyp7);
        } else _59co3['EnvConfig']['load']['call'](this, v$wyp7, vy$w, k0zgaq, rp$v1w, mnh46j);
      }
    }, v$1pw['resMgrLoad'] = function (v7y$, bw1xr, hjmen, ly7vp$, hje6md, mjd6he, ukqg) {
      hjmen === void 0x0 && (hjmen = 0x0), ly7vp$ === void 0x0 && (ly7vp$ = ![]), hje6md === void 0x0 && (hje6md = ![]), mjd6he === void 0x0 && (mjd6he = 0x0), ukqg === void 0x0 && (ukqg = 0x3), v7y$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', v7y$), _59co3['EnvConfig']['resMgrLoad'](v7y$, (w1$rv, _j49n, aqb) => {
        jen6mh['prototype']['resMgrLoadCallBack'](w1$rv, _j49n, aqb, bw1xr);
      }, hjmen, ly7vp$, hje6md, mjd6he, ukqg);
    }, v$1pw['resMgrLoadCallBack'] = function (p$r1w, h_4j9n, c49n3, fg0tqk) {
      console['log']('buff:::', p$r1w, c49n3, j93['fileNativeDir'] + '///' + j93['fileListName']), fg0tqk(p$r1w, h_4j9n, c49n3);
    }, v$1pw['clearRes'] = function (baqx, dktfu) {
      dktfu === void 0x0 && (dktfu = ![]);var t0gfkq = this;t0gfkq['clearRes'](baqx, dktfu);var p$wv7r = j93['getFileInfo'](baqx);if (p$wv7r && (baqx['indexOf']('http://') != -0x1 || baqx['indexOf']('https://') != -0x1)) {
        var aq0gzk = p$wv7r['md5'],
            ieum6 = j93['getFileNativePath'](aq0gzk);j93['remove'](ieum6);
      }
    }, jen6mh['onReadNativeCallBack'] = function (kz0ga, qazb, fzk0gq, rxwb18, tfdu, bxaz, _c93o, uidef, itfud) {
      rxwb18 === void 0x0 && (rxwb18 = !![]), bxaz === void 0x0 && (bxaz = ![]), uidef === void 0x0 && (uidef = 0x0);if (!uidef) {
        var wr1x8b;if (fzk0gq == 'json' || fzk0gq == 'atlas') wr1x8b = _59co3['getJson'](itfud['data']);else fzk0gq == 'xml' ? wr1x8b = gqt0fk['parseXMLFromString'](itfud['data']) : wr1x8b = itfud['data'];_c93o['onLoaded'](wr1x8b), !_59co3['isZiYu'] && _59co3['isPosMsgYu'] && fzk0gq != 'arraybuffer' && wx['postMessage']({ 'url': qazb, 'data': wr1x8b, 'isLoad': !![] });
      } else uidef == 0x1 && _59co3['EnvConfig']['load']['call'](_c93o, qazb, fzk0gq, rxwb18, tfdu, bxaz);
    }, h4jn6_(jen6mh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jen6mh;
  }(),
      j93 = function (ifukt) {
    function qzbx0() {
      qzbx0['__super']['call'](this);;
    }return o59(qzbx0, 'laya.wx.mini.MiniFileMgr', ifukt), qzbx0['isLoadFile'] = function (z0ab8) {
      return qzbx0['_fileTypeArr']['indexOf'](z0ab8) != -0x1 ? !![] : ![];
    }, qzbx0['getFileInfo'] = function (zqka0g) {
      var diueft = zqka0g['split']('?')[0x0],
          jne6hm = qzbx0['filesListObj'][diueft];if (jne6hm == null) return null;else return jne6hm;return null;
    }, qzbx0['onFileUpdate'] = function (kgazq, jnh_46) {
      var iukdf = kgazq['split']('/'),
          nj = iukdf[iukdf['length'] - 0x1],
          yv$l7p = qzbx0['getFileInfo'](jnh_46);if (yv$l7p == null) qzbx0['onSaveFile'](jnh_46, nj);else {
        if (yv$l7p['readyUrl'] != jnh_46) qzbx0['remove'](nj, jnh_46);
      }
    }, qzbx0['exits'] = function (jnhe, w1xr8b) {
      var kifudt = qzbx0['getFileNativePath'](jnhe);qzbx0['fs']['getFileInfo']({ 'filePath': kifudt, 'success': function (tuifkd) {
          w1xr8b != null && w1xr8b['runWith']([0x0, tuifkd]);
        }, 'fail': function (vr$7w) {
          w1xr8b != null && w1xr8b['runWith']([0x1, vr$7w]);
        } });
    }, qzbx0['read'] = function (z0bax8, umei6, miude, _9nc43) {
      umei6 === void 0x0 && (umei6 = 'ascill'), _9nc43 === void 0x0 && (_9nc43 = '');var deu6mi;_9nc43 != '' ? deu6mi = qzbx0['getFileNativePath'](z0bax8) : deu6mi = z0bax8, qzbx0['fs']['readFile']({ 'filePath': deu6mi, 'encoding': umei6, 'success': function (n4_39c) {
          miude != null && miude['runWith']([0x0, n4_39c]);
        }, 'fail': function (_o4c39) {
          if (_o4c39 && _9nc43 != '') qzbx0['down'](_9nc43, umei6, miude, _9nc43);else miude != null && miude['runWith']([0x1]);
        } });
    }, qzbx0['readNativeFile'] = function (bx0z, hedm6) {
      qzbx0['fs']['readFile']({ 'filePath': bx0z, 'encoding': '', 'success': function (w$r7pv) {
          hedm6 != null && hedm6['runWith']([0x0]);
        }, 'fail': function (qutg) {
          hedm6 != null && hedm6['runWith']([0x1]);
        } });
    }, qzbx0['down'] = function (h4jn_, hjn4m, $rwpv, j4h9n) {
      hjn4m === void 0x0 && (hjn4m = 'ascill'), j4h9n === void 0x0 && (j4h9n = '');var h6imed = qzbx0['getFileNativePath'](j4h9n),
          wr8x1b = qzbx0['wxdown']({ 'url': h4jn_, 'filePath': h6imed, 'success': function ($p7vy) {
          if ($p7vy['statusCode'] === 0xc8) qzbx0['readFile']($p7vy['filePath'], hjn4m, $rwpv, j4h9n);
        }, 'fail': function (v7ly) {
          $rwpv != null && $rwpv['runWith']([0x1, v7ly]);
        } });wr8x1b['onProgressUpdate'](function (f0kqg) {
        $rwpv != null && $rwpv['runWith']([0x2, f0kqg['progress']]);
      });
    }, qzbx0['readFile'] = function (xab8, mh6en, $ypwv, eidftu) {
      mh6en === void 0x0 && (mh6en = 'ascill'), eidftu === void 0x0 && (eidftu = ''), qzbx0['fs']['readFile']({ 'filePath': xab8, 'encoding': mh6en, 'success': function (n46h) {
          if (xab8['indexOf']('http://') != -0x1 || xab8['indexOf']('https://') != -0x1) qzbx0['onFileUpdate'](xab8, eidftu);$ypwv != null && $ypwv['runWith']([0x0, n46h]);
        }, 'fail': function (h_nj64) {
          if (h_nj64) $ypwv != null && $ypwv['runWith']([0x1, h_nj64]);
        } });
    }, qzbx0['downImg'] = function (q0zfgk, x1w$8r, n_6h4j) {
      n_6h4j === void 0x0 && (n_6h4j = '');var dkitf = qzbx0['wxdown']({ 'url': q0zfgk, 'success': function (ei6m) {
          ei6m['statusCode'] === 0xc8 && qzbx0['copyFile'](ei6m['tempFilePath'], n_6h4j, x1w$8r);
        }, 'fail': function (utfkig) {
          x1w$8r != null && x1w$8r['runWith']([0x1, utfkig]);
        } });
    }, qzbx0['copyFile'] = function (i6meh, zf0kgq, p$rv) {
      var o3529 = i6meh['split']('/'),
          zkqga = o3529[o3529['length'] - 0x1],
          c4_3n9 = zf0kgq['split']('?')[0x0],
          pv$ly7 = qzbx0['getFileInfo'](zf0kgq),
          fzgq0k = qzbx0['getFileNativePath'](zkqga);qzbx0['fs']['copyFile']({ 'srcPath': i6meh, 'destPath': fzgq0k, 'success': function (nmje) {
          if (!pv$ly7) qzbx0['onSaveFile'](zf0kgq, zkqga), p$rv != null && p$rv['runWith']([0x0]);else {
            if (pv$ly7['readyUrl'] != zf0kgq) qzbx0['remove'](zkqga, zf0kgq, p$rv);
          }
        }, 'fail': function (tmueid) {
          p$rv != null && p$rv['runWith']([0x1, tmueid]);
        } });
    }, qzbx0['getFileNativePath'] = function (tduim) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + tduim;
    }, qzbx0['remove'] = function (n94_3j, ed6mi, _34jn9) {
      ed6mi === void 0x0 && (ed6mi = '');var xwb = qzbx0['getFileInfo'](ed6mi),
          rv1w$p = qzbx0['getFileNativePath'](xwb['md5']);r7vw$p['loader']['clearRes'](xwb['readyUrl']), qzbx0['fs']['unlink']({ 'filePath': rv1w$p, 'success': function (hemdi6) {
          if (ed6mi != '') qzbx0['onSaveFile'](ed6mi, n94_3j);_34jn9 != null && _34jn9['runWith']([0x0]);
        }, 'fail': function (gufikt) {} });
    }, qzbx0['onSaveFile'] = function (ie6hdm, bq0zax) {
      var x18ba = ie6hdm['split']('?')[0x0];qzbx0['filesListObj'][x18ba] = { 'md5': bq0zax, 'readyUrl': ie6hdm }, qzbx0['fs']['writeFile']({ 'filePath': qzbx0['fileNativeDir'] + '/' + qzbx0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qzbx0['filesListObj']), 'success': function (qtukg) {
          console['log']('写入测试测试成功：', qtukg);
        }, 'fail': function (qbx0az) {
          console['log']('写入测试测试失败：', qbx0az);
        } });
    }, qzbx0['existDir'] = function (g0abqz, x18r$) {
      qzbx0['fs']['mkdir']({ 'dirPath': g0abqz, 'success': function (xz08ba) {
          x18r$ != null && x18r$['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (a1rx) {
          if (a1rx['errMsg']['indexOf']('file already exists') != -0x1) qzbx0['readSync'](qzbx0['fileListName'], 'utf8', x18r$);else x18r$ != null && x18r$['runWith']([0x1, a1rx]);
        } });
    }, qzbx0['readSync'] = function (g0tqk, bqazx0, uimted, p$r8w1) {
      bqazx0 === void 0x0 && (bqazx0 = 'ascill'), p$r8w1 === void 0x0 && (p$r8w1 = '');var b1xaz = qzbx0['getFileNativePath'](g0tqk),
          zx80b;try {
        zx80b = qzbx0['fs']['readFileSync'](b1xaz), uimted != null && uimted['runWith']([0x0, { 'data': zx80b }]);
      } catch (p1v$w) {
        uimted != null && uimted['runWith']([0x1]);
      }
    }, qzbx0['readCache'] = function () {}, qzbx0['writeCache'] = function ($wr7pv) {
      var k0qfgt = readyUrl['split']('?')[0x0];qzbx0['filesListObj'][k0qfgt] = { 'md5': md5Name, 'readyUrl': readyUrl }, qzbx0['fs']['writeFile']({ 'filePath': qzbx0['fileNativeDir'] + '/' + qzbx0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qzbx0['filesListObj']), 'success': function (bx0aq) {}, 'fail': function (utgi) {} });
    }, qzbx0['setNativeFileDir'] = function (uemitd) {
      qzbx0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + uemitd;
    }, qzbx0['filesListObj'] = {}, qzbx0['fileNativeDir'] = null, qzbx0['fileListName'] = 'layaairfiles.txt', qzbx0['ziyuFileData'] = {}, h4jn6_(qzbx0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qzbx0;
  }(qtfgku),
      e6hdmi = function (xa0z8b) {
    function azqb0() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], azqb0['__super']['call'](this), this['_sound'] = azqb0['_createSound']();
    }o59(azqb0, 'laya.wx.mini.MiniSound', xa0z8b);var gutki = azqb0['prototype'];return gutki['load'] = function (gqakz) {
      var eimud6 = this;gqakz = pw$7r['formatURL'](gqakz), this['url'] = gqakz;if (azqb0['_audioCache'][gqakz]) {
        this['event']('complete');return;
      }function qzx0() {
        if (azqb0['_null'] != undefined) eimud6['_sound']['onCanplay'](azqb0['_null']), eimud6['_sound']['onError'](azqb0['_null']);else try {
          eimud6['_sound']['onCanplay'](null), eimud6['_sound']['onError'](null), azqb0['_null'] = null;
        } catch (hem6id) {
          console['warn']('[wxmini] _clearSound:' + hem6id), eimud6['_sound']['onCanplay'](vp$7r), eimud6['_sound']['onError'](vp$7r), azqb0['_null'] = vp$7r;
        }
      }function z0bqxa() {
        qzx0(), b8z0['loaded'] = !![], b8z0['event']('complete'), azqb0['_audioCache'][b8z0['url']] = b8z0;
      }function $wvyp(kazg0) {
        console['error']('errCode=' + kazg0['errCode'] + '  errMsg=' + kazg0['errMsg']), qzx0(), b8z0['event']('error');
      }function vp$7r() {}this['_sound']['onCanplay'](z0bqxa), this['_sound']['onError']($wvyp), this['_sound']['src'] = gqakz;var b8z0 = this;
    }, gutki['play'] = function (bqza, rb1xa8) {
      bqza === void 0x0 && (bqza = 0x0), rb1xa8 === void 0x0 && (rb1xa8 = 0x0);var dejm6h;if (this['url'] == v$7rp['_tMusic']) {
        if (!azqb0['_musicAudio']) azqb0['_musicAudio'] = azqb0['_createSound']();dejm6h = azqb0['_musicAudio'];
      } else dejm6h = azqb0['_createSound']();dejm6h['src'] = this['url'];var aqz0kg = new tguki(dejm6h);return aqz0kg['url'] = this['url'], aqz0kg['loops'] = rb1xa8, aqz0kg['startTime'] = bqza, aqz0kg['play'](), v$7rp['addChannel'](aqz0kg), aqz0kg;
    }, gutki['dispose'] = function () {
      var r8w1$p = azqb0['_audioCache'][this['url']];r8w1$p && (r8w1$p['src'] = '', delete azqb0['_audioCache'][this['url']]);
    }, deum(0x0, gutki, 'duration', function () {
      return this['_sound']['duration'];
    }), azqb0['_createSound'] = function () {
      return azqb0['_id']++, _59co3['window']['wx']['createInnerAudioContext']();
    }, azqb0['_musicAudio'] = null, azqb0['_id'] = 0x0, azqb0['_audioCache'] = {}, azqb0['_null'] = undefined, azqb0;
  }(qtfgku),
      tguki = function (x8za) {
    function h_94j(h6iem) {
      this['_audio'] = null, this['_onEnd'] = null, h_94j['__super']['call'](this), this['_audio'] = h6iem, this['_onEnd'] = gqt0fk['bind'](this['__onEnd'], this), h6iem['onEnded'](this['_onEnd']);
    }o59(h_94j, 'laya.wx.mini.MiniSoundChannel', x8za);var b0zga = h_94j['prototype'];return b0zga['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (r7vw$p['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, b0zga['__onNull'] = function () {}, b0zga['play'] = function () {
      this['isStopped'] = ![], v$7rp['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, b0zga['stop'] = function () {
      this['isStopped'] = !![], v$7rp['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (h_94j['_null'] != undefined) this['_audio']['onEnded'](h_94j['_null']);else try {
        this['_audio']['onEnded'](null), h_94j['_null'] = null;
      } catch (n6m4h) {
        console['warn']('[wxmini] stop:' + n6m4h), this['_audio']['onEnded'](gqt0fk['bind'](this['__onNull'], this)), h_94j['_null'] = gqt0fk['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, b0zga['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, b0zga['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], v$7rp['addChannel'](this), this['_audio']['play']();
    }, deum(0x0, b0zga, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), deum(0x0, b0zga, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), deum(0x0, b0zga, 'volume', function () {
      return 0x1;
    }, function (z8bxa1) {}), h_94j['_null'] = undefined, h_94j;
  }(hem6di);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var qzak in Laya) {
    var b8r1x = Laya[qzak];b8r1x && b8r1x['__isclass'] && (exports[qzak] = b8r1x);
  }
});