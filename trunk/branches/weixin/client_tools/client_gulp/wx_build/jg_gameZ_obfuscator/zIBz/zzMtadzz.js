var B = wx.$z;
(function (window, document, as1x9) {
  var mn37 = as1x9['un'],
      _u2rw5 = as1x9['uns'],
      qi$m73 = as1x9['static'],
      n3qm = as1x9['class'],
      xgh91 = as1x9['getset'],
      dezt = as1x9['__newvec'],
      u52r8 = laya['utils']['Browser'],
      aztex = laya['events']['Event'],
      v6pf4 = laya['events']['EventDispatcher'],
      g14h6 = laya['resource']['HTMLImage'],
      eazost = laya['utils']['Handler'],
      gf4p6v = laya['display']['Input'],
      f6vnl4 = laya['net']['Loader'],
      obd8 = laya['maths']['Matrix'],
      kyb8r_ = laya['renders']['Render'],
      iqm3j = laya['utils']['RunDriver'],
      xasez = laya['media']['Sound'],
      kdrb8 = laya['media']['SoundChannel'],
      kbryd = laya['media']['SoundManager'],
      kyrb = laya['display']['Stage'],
      otzade = laya['net']['URL'],
      miqn73 = laya['utils']['Utils'],
      g4pfv = function () {
    function br_k5() {}return n3qm(br_k5, 'laya.wx.mini.MiniAdpter'), br_k5['getJson'] = function (vfg6l) {
      return JSON['parse'](vfg6l);
    }, br_k5['init'] = function (nfvl7i, es19xa) {
      nfvl7i === void 0x0 && (nfvl7i = ![]), es19xa === void 0x0 && (es19xa = ![]);if (br_k5['_inited']) return;br_k5['window'] = window;if (br_k5['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;br_k5['_inited'] = !![], br_k5['isZiYu'] = es19xa, br_k5['isPosMsgYu'] = nfvl7i, br_k5['EnvConfig'] = {}, !br_k5['isZiYu'] && (s9hxp1['setNativeFileDir']('/layaairGame'), s9hxp1['existDir'](s9hxp1['fileNativeDir'], eazost['create'](br_k5, br_k5['onMkdirCallBack']))), br_k5['window']['focus'] = function () {}, as1x9['getUrlPath'] = function () {}, br_k5['window']['logtime'] = function (bdtko) {}, br_k5['window']['alertTimeLog'] = function (u205w) {}, br_k5['window']['resetShareInfo'] = function () {}, br_k5['window']['CanvasRenderingContext2D'] = function () {}, br_k5['window']['CanvasRenderingContext2D']['prototype'] = br_k5['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], br_k5['window']['document']['body']['appendChild'] = function () {}, br_k5['EnvConfig']['pixelRatioInt'] = 0x0, iqm3j['getPixelRatio'] = br_k5['pixelRatio'], br_k5['_preCreateElement'] = u52r8['createElement'], u52r8['createElement'] = br_k5['createElement'], iqm3j['createShaderCondition'] = br_k5['createShaderCondition'], miqn73['parseXMLFromString'] = br_k5['parseXMLFromString'], gf4p6v['_createInputElement'] = ztao['_createInputElement'], br_k5['EnvConfig']['load'] = f6vnl4['prototype']['load'], f6vnl4['prototype']['load'] = flni7v['prototype']['load'], br_k5['isZiYu'] && nfvl7i && wx['onMessage'](function (sae19x) {
        sae19x['isLoad'] && (s9hxp1['ziyuFileData'][sae19x['url']] = sae19x['data']);
      });
    }, br_k5['onMkdirCallBack'] = function (dyzkto, v4fl6) {
      if (!dyzkto) s9hxp1['filesListObj'] = JSON['parse'](v4fl6['data']);
    }, br_k5['pixelRatio'] = function () {
      if (!br_k5['EnvConfig']['pixelRatioInt']) try {
        var yzetod = wx['getSystemInfoSync']();return br_k5['EnvConfig']['pixelRatioInt'] = yzetod['pixelRatio'], yzetod = yzetod, yzetod['pixelRatio'];
      } catch (nim73l) {}return br_k5['EnvConfig']['pixelRatioInt'];
    }, br_k5['createElement'] = function (vnmi7l) {
      if (vnmi7l == 'canvas') {
        var ph194g;return br_k5['idx'] == 0x1 ? br_k5['isZiYu'] ? (ph194g = sharedCanvas, ph194g['style'] = {}) : ph194g = window['canvas'] : ph194g = window['wx']['createCanvas'](), br_k5['idx']++, ph194g;
      } else {
        if (vnmi7l == 'textarea' || vnmi7l == 'input') return br_k5['onCreateInput'](vnmi7l);else {
          if (vnmi7l == 'div') {
            var kbyr = br_k5['_preCreateElement'](vnmi7l);return kbyr['contains'] = function (px9hg1) {
              return null;
            }, kbyr['removeChild'] = function (q3ij) {}, kbyr;
          } else return br_k5['_preCreateElement'](vnmi7l);
        }
      }
    }, br_k5['onCreateInput'] = function (yztk) {
      var r5u28 = br_k5['_preCreateElement'](yztk);return r5u28['focus'] = ztao['wxinputFocus'], r5u28['blur'] = ztao['wxinputblur'], r5u28['style'] = {}, r5u28['value'] = 0x0, r5u28['parentElement'] = {}, r5u28['placeholder'] = {}, r5u28['type'] = {}, r5u28['setColor'] = function (o8kybd) {}, r5u28['setType'] = function (tazesx) {}, r5u28['setFontFace'] = function (vi7l) {}, r5u28['addEventListener'] = function (q7m$3) {}, r5u28['contains'] = function (ztodky) {
        return null;
      }, r5u28['removeChild'] = function (p6gv4f) {}, r5u28;
    }, br_k5['createShaderCondition'] = function (k85b_r) {
      var vnfil = this,
          okd8yb = function () {
        var v6lf4n = k85b_r;return vnfil[k85b_r['replace']('this.', '')];
      };return okd8yb;
    }, br_k5['EnvConfig'] = null, br_k5['window'] = null, br_k5['_preCreateElement'] = null, br_k5['_inited'] = ![], br_k5['wxRequest'] = null, br_k5['systemInfo'] = null, br_k5['version'] = '0.0.1', br_k5['isZiYu'] = ![], br_k5['isPosMsgYu'] = ![], br_k5['parseXMLFromString'] = function (w_25u) {
      var uw_5r2, w_205u;w_25u = w_25u['replace'](/>\s+</g, '><');try {
        uw_5r2 = new window['Parser']['DOMParser']()['parseFromString'](w_25u, 'text/xml');
      } catch (f7ln6v) {
        throw '需要引入xml解析库文件';
      }return uw_5r2;
    }, br_k5['idx'] = 0x1, br_k5;
  }(),
      v4f6ln = function () {
    function xha91() {}n3qm(xha91, 'laya.wx.mini.MiniImage');var tdeyz = xha91['prototype'];return tdeyz['_loadImage'] = function (b8dk) {
      var okzty = this,
          f7lniv = ![];b8dk['indexOf']('layaNativeDir/') == -0x1 && (f7lniv = !![], b8dk = otzade['formatURL'](b8dk));if (!s9hxp1['getFileInfo'](b8dk)) {
        if (b8dk['indexOf']('http://') != -0x1 || b8dk['indexOf']('https://') != -0x1) s9hxp1['downImg'](b8dk, new eazost(xha91, xha91['onDownImgCallBack'], [b8dk, okzty]), b8dk);else xha91['onCreateImage'](b8dk, okzty, !![]);
      } else xha91['onCreateImage'](b8dk, okzty, !f7lniv);
    }, xha91['onDownImgCallBack'] = function (otzdk, soe, w2u_r) {
      if (!w2u_r) xha91['onCreateImage'](otzdk, soe);else soe['onError'](null);
    }, xha91['onCreateImage'] = function (x91h, _r82u, qmni37) {
      qmni37 === void 0x0 && (qmni37 = ![]);var rwu5_2;if (!qmni37) {
        var mn37q = s9hxp1['getFileInfo'](x91h),
            vl76nf = mn37q['md5'];rwu5_2 = s9hxp1['getFileNativePath'](vl76nf);
      } else rwu5_2 = x91h;if (_r82u['imgCache'] == null) _r82u['imgCache'] = {};var jqi3m;function x19e() {
        jqi3m['onload'] = null, jqi3m['onerror'] = null, delete _r82u['imgCache'][x91h];
      };var otzyk = function () {
        x19e(), _r82u['onLoaded'](jqi3m);
      },
          l7nim = function () {
        x19e(), _r82u['event']('error', 'Load image failed');
      };_r82u['_type'] == 'nativeimage' ? (jqi3m = new u52r8['window']['Image'](), jqi3m['crossOrigin'] = '', jqi3m['onload'] = otzyk, jqi3m['onerror'] = l7nim, jqi3m['src'] = rwu5_2, _r82u['imgCache'][x91h] = jqi3m) : new g14h6['create'](rwu5_2, { 'onload': otzyk, 'onerror': l7nim, 'onCreate': function (aezxts) {
          jqi3m = aezxts, _r82u['imgCache'][x91h] = aezxts;
        } });
    }, xha91;
  }(),
      ztao = function () {
    function ni7mv() {}return n3qm(ni7mv, 'laya.wx.mini.MiniInput'), ni7mv['_createInputElement'] = function () {
      gf4p6v['_initInput'](gf4p6v['area'] = u52r8['createElement']('textarea')), gf4p6v['_initInput'](gf4p6v['input'] = u52r8['createElement']('input')), gf4p6v['inputContainer'] = u52r8['createElement']('div'), gf4p6v['inputContainer']['style']['position'] = 'absolute', gf4p6v['inputContainer']['style']['zIndex'] = 0x186a0, u52r8['container']['appendChild'](gf4p6v['inputContainer']), gf4p6v['inputContainer']['setPos'] = function (tzaxs, _urw52) {
        gf4p6v['inputContainer']['style']['left'] = tzaxs + 'px', gf4p6v['inputContainer']['style']['top'] = _urw52 + 'px';
      }, as1x9['stage']['on']('resize', null, ni7mv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xpg9h1) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), kbryd['_soundClass'] = phs91, kbryd['_musicClass'] = phs91;
    }, ni7mv['_onStageResize'] = function () {
      var n7i3q = as1x9['stage']['_canvasTransform']['identity']();n7i3q['scale'](u52r8['width'] / kyb8r_['canvas']['width'] / iqm3j['getPixelRatio'](), u52r8['height'] / kyb8r_['canvas']['height'] / iqm3j['getPixelRatio']());
    }, ni7mv['wxinputFocus'] = function (inml73) {
      var x1sha9 = gf4p6v['inputElement']['target'];if (x1sha9 && !x1sha9['editable']) return;g4pfv['window']['wx']['offKeyboardConfirm'](), g4pfv['window']['wx']['offKeyboardInput'](), g4pfv['window']['wx']['showKeyboard']({ 'defaultValue': x1sha9['text'], 'maxLength': x1sha9['maxChars'], 'multiple': x1sha9['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (xaz9e) {}, 'fail': function (tdeaoz) {} }), g4pfv['window']['wx']['onKeyboardConfirm'](function (gf6p4v) {
        var xzsae9 = gf6p4v ? gf6p4v['value'] : '';x1sha9['text'] = xzsae9, x1sha9['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), g4pfv['window']['wx']['onKeyboardInput'](function (_2uw) {
        var otzaed = _2uw ? _2uw['value'] : '';if (!x1sha9['multiline']) {
          if (otzaed['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }x1sha9['text'] = otzaed, x1sha9['event']('input');
      });
    }, ni7mv['inputEnter'] = function () {
      gf4p6v['inputElement']['target']['focus'] = ![];
    }, ni7mv['wxinputblur'] = function () {
      ni7mv['hideKeyboard']();
    }, ni7mv['hideKeyboard'] = function () {
      g4pfv['window']['wx']['offKeyboardConfirm'](), g4pfv['window']['wx']['offKeyboardInput'](), g4pfv['window']['wx']['hideKeyboard']({ 'success': function (n3m) {
          console['log']('隐藏键盘');
        }, 'fail': function (pfv64) {
          console['log']('隐藏键盘出错:' + (pfv64 ? pfv64['errMsg'] : ''));
        } });
    }, ni7mv;
  }(),
      flni7v = function () {
    function x91sp() {}n3qm(x91sp, 'laya.wx.mini.MiniLoader');var nl7v6f = x91sp['prototype'];return nl7v6f['load'] = function (kb8dyr, ivl7f, nlv7m, qmi7n3, yodtze) {
      nlv7m === void 0x0 && (nlv7m = !![]), yodtze === void 0x0 && (yodtze = ![]);var h6pfg4 = this;h6pfg4['_url'] = kb8dyr;if (kb8dyr['indexOf']('data:image') === 0x0) h6pfg4['_type'] = ivl7f = 'image';else h6pfg4['_type'] = ivl7f || (ivl7f = h6pfg4['getTypeFromUrl'](kb8dyr));h6pfg4['_cache'] = nlv7m, h6pfg4['_data'] = null;var tezyo = 'ascii';if (kb8dyr['indexOf']('.fnt') != -0x1) tezyo = 'utf8';else ivl7f == 'arraybuffer' && (tezyo = '');;var zatd = miqn73['getFileExtension'](kb8dyr);if (x91sp['_fileTypeArr']['indexOf'](zatd) != -0x1) g4pfv['EnvConfig']['load']['call'](this, kb8dyr, ivl7f, nlv7m, qmi7n3, yodtze);else {
        if (!s9hxp1['getFileInfo'](kb8dyr)) {
          if (kb8dyr['indexOf']('layaNativeDir/') != -0x1) {
            if (g4pfv['isZiYu']) {
              var gfv6l = s9hxp1['ziyuFileData'][kb8dyr];h6pfg4['onLoaded'](gfv6l);return;
            } else {
              cosnole['log']('read read'), s9hxp1['read'](kb8dyr, tezyo, new eazost(x91sp, x91sp['onReadNativeCallBack'], [tezyo, kb8dyr, ivl7f, nlv7m, qmi7n3, yodtze, h6pfg4]));return;
            }
          }if (otzade['rootPath'] == '') var rw_5u = kb8dyr;else rw_5u = kb8dyr['split'](otzade['rootPath'])[0x0];kb8dyr['indexOf']('http://') != -0x1 || kb8dyr['indexOf']('https://') != -0x1 ? g4pfv['EnvConfig']['load']['call'](h6pfg4, kb8dyr, ivl7f, nlv7m, qmi7n3, yodtze) : s9hxp1['readFile'](rw_5u, tezyo, new eazost(x91sp, x91sp['onReadNativeCallBack'], [tezyo, kb8dyr, ivl7f, nlv7m, qmi7n3, yodtze, h6pfg4]), kb8dyr);
        } else g4pfv['EnvConfig']['load']['call'](this, kb8dyr, ivl7f, nlv7m, qmi7n3, yodtze);
      }
    }, nl7v6f['resMgrLoad'] = function ($jmi3q, yk8_rb, vif7l, pxhg91, q$j3mi, _u0w52, lv7n) {
      vif7l === void 0x0 && (vif7l = 0x0), pxhg91 === void 0x0 && (pxhg91 = ![]), q$j3mi === void 0x0 && (q$j3mi = ![]), _u0w52 === void 0x0 && (_u0w52 = 0x0), lv7n === void 0x0 && (lv7n = 0x3), $jmi3q['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', $jmi3q), g4pfv['EnvConfig']['resMgrLoad']($jmi3q, (lvf7i, sx1a9, fgp6) => {
        x91sp['prototype']['resMgrLoadCallBack'](lvf7i, sx1a9, fgp6, yk8_rb);
      }, vif7l, pxhg91, q$j3mi, _u0w52, lv7n);
    }, nl7v6f['resMgrLoadCallBack'] = function (a1hsx9, hxg, l4gvf, gp4v6f) {
      console['log']('buff:::', a1hsx9, l4gvf, s9hxp1['fileNativeDir'] + '///' + s9hxp1['fileListName']), gp4v6f(a1hsx9, hxg, l4gvf);
    }, nl7v6f['clearRes'] = function (bkdyr, zatexs) {
      zatexs === void 0x0 && (zatexs = ![]);var l67n = this;l67n['clearRes'](bkdyr, zatexs);var kr5_b8 = s9hxp1['getFileInfo'](bkdyr);if (kr5_b8 && (bkdyr['indexOf']('http://') != -0x1 || bkdyr['indexOf']('https://') != -0x1)) {
        var r_5k8b = kr5_b8['md5'],
            hg91p4 = s9hxp1['getFileNativePath'](r_5k8b);s9hxp1['remove'](hg91p4);
      }
    }, x91sp['onReadNativeCallBack'] = function (sa9x, iv7fn, bdtok, q3mi$7, j$mqi, eatxzs, x1p9gh, sxph19, kdryb) {
      q3mi$7 === void 0x0 && (q3mi$7 = !![]), eatxzs === void 0x0 && (eatxzs = ![]), sxph19 === void 0x0 && (sxph19 = 0x0);if (!sxph19) {
        var p6v;if (bdtok == 'json' || bdtok == 'atlas') p6v = g4pfv['getJson'](kdryb['data']);else bdtok == 'xml' ? p6v = miqn73['parseXMLFromString'](kdryb['data']) : p6v = kdryb['data'];x1p9gh['onLoaded'](p6v), !g4pfv['isZiYu'] && g4pfv['isPosMsgYu'] && bdtok != 'arraybuffer' && wx['postMessage']({ 'url': iv7fn, 'data': p6v, 'isLoad': !![] });
      } else sxph19 == 0x1 && g4pfv['EnvConfig']['load']['call'](x1p9gh, iv7fn, bdtok, q3mi$7, j$mqi, eatxzs);
    }, qi$m73(x91sp, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), x91sp;
  }(),
      s9hxp1 = function (yktdo) {
    function aexs91() {
      aexs91['__super']['call'](this);;
    }return n3qm(aexs91, 'laya.wx.mini.MiniFileMgr', yktdo), aexs91['isLoadFile'] = function (qm$ji3) {
      return aexs91['_fileTypeArr']['indexOf'](qm$ji3) != -0x1 ? !![] : ![];
    }, aexs91['getFileInfo'] = function (rb8k_y) {
      var vgp64f = rb8k_y['split']('?')[0x0],
          hx1g9p = aexs91['filesListObj'][vgp64f];if (hx1g9p == null) return null;else return hx1g9p;return null;
    }, aexs91['onFileUpdate'] = function (hx9, aztdeo) {
      var ilmn3 = hx9['split']('/'),
          ph9x = ilmn3[ilmn3['length'] - 0x1],
          dryb8 = aexs91['getFileInfo'](aztdeo);if (dryb8 == null) aexs91['onSaveFile'](aztdeo, ph9x);else {
        if (dryb8['readyUrl'] != aztdeo) aexs91['remove'](ph9x, aztdeo);
      }
    }, aexs91['exits'] = function (esx1a, zaxest) {
      var l7fiv = aexs91['getFileNativePath'](esx1a);aexs91['fs']['getFileInfo']({ 'filePath': l7fiv, 'success': function (yozte) {
          zaxest != null && zaxest['runWith']([0x0, yozte]);
        }, 'fail': function (ybo8) {
          zaxest != null && zaxest['runWith']([0x1, ybo8]);
        } });
    }, aexs91['read'] = function (aedoz, oetaz, pf64gh, x9phs1) {
      oetaz === void 0x0 && (oetaz = 'ascill'), x9phs1 === void 0x0 && (x9phs1 = '');var v7n6l;x9phs1 != '' ? v7n6l = aexs91['getFileNativePath'](aedoz) : v7n6l = aedoz, aexs91['fs']['readFile']({ 'filePath': v7n6l, 'encoding': oetaz, 'success': function (dokty) {
          pf64gh != null && pf64gh['runWith']([0x0, dokty]);
        }, 'fail': function (m$3jiq) {
          if (m$3jiq && x9phs1 != '') aexs91['down'](x9phs1, oetaz, pf64gh, x9phs1);else pf64gh != null && pf64gh['runWith']([0x1]);
        } });
    }, aexs91['readNativeFile'] = function (_r82b, otda) {
      aexs91['fs']['readFile']({ 'filePath': _r82b, 'encoding': '', 'success': function (_5bk8) {
          otda != null && otda['runWith']([0x0]);
        }, 'fail': function (im3q7) {
          otda != null && otda['runWith']([0x1]);
        } });
    }, aexs91['down'] = function (fp6gv, mq3in7, zse9xa, ph149) {
      mq3in7 === void 0x0 && (mq3in7 = 'ascill'), ph149 === void 0x0 && (ph149 = '');var vg6l4 = aexs91['getFileNativePath'](ph149),
          miqj$ = aexs91['wxdown']({ 'url': fp6gv, 'filePath': vg6l4, 'success': function (szteo) {
          if (szteo['statusCode'] === 0xc8) aexs91['readFile'](szteo['filePath'], mq3in7, zse9xa, ph149);
        }, 'fail': function (oykb8) {
          zse9xa != null && zse9xa['runWith']([0x1, oykb8]);
        } });miqj$['onProgressUpdate'](function (_025w) {
        zse9xa != null && zse9xa['runWith']([0x2, _025w['progress']]);
      });
    }, aexs91['readFile'] = function (btyok, i7q$, w5_u2, flg6) {
      i7q$ === void 0x0 && (i7q$ = 'ascill'), flg6 === void 0x0 && (flg6 = ''), aexs91['fs']['readFile']({ 'filePath': btyok, 'encoding': i7q$, 'success': function (pg9h14) {
          if (btyok['indexOf']('http://') != -0x1 || btyok['indexOf']('https://') != -0x1) aexs91['onFileUpdate'](btyok, flg6);w5_u2 != null && w5_u2['runWith']([0x0, pg9h14]);
        }, 'fail': function (fnlv7) {
          if (fnlv7) w5_u2 != null && w5_u2['runWith']([0x1, fnlv7]);
        } });
    }, aexs91['downImg'] = function (vnl67f, b_r25, v4g6fp) {
      v4g6fp === void 0x0 && (v4g6fp = '');var tsaxze = aexs91['wxdown']({ 'url': vnl67f, 'success': function (im3jq$) {
          im3jq$['statusCode'] === 0xc8 && aexs91['copyFile'](im3jq$['tempFilePath'], v4g6fp, b_r25);
        }, 'fail': function (rw2u_) {
          b_r25 != null && b_r25['runWith']([0x1, rw2u_]);
        } });
    }, aexs91['copyFile'] = function (dr8k, yobk8d, bk8od) {
      var ilmnv = dr8k['split']('/'),
          b25r = ilmnv[ilmnv['length'] - 0x1],
          kdozy = yobk8d['split']('?')[0x0],
          k85_ = aexs91['getFileInfo'](yobk8d),
          f46h = aexs91['getFileNativePath'](b25r);aexs91['fs']['copyFile']({ 'srcPath': dr8k, 'destPath': f46h, 'success': function (lmv7ni) {
          if (!k85_) aexs91['onSaveFile'](yobk8d, b25r), bk8od != null && bk8od['runWith']([0x0]);else {
            if (k85_['readyUrl'] != yobk8d) aexs91['remove'](b25r, yobk8d, bk8od);
          }
        }, 'fail': function (j3i$) {
          bk8od != null && bk8od['runWith']([0x1, j3i$]);
        } });
    }, aexs91['getFileNativePath'] = function (gp6h4f) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gp6h4f;
    }, aexs91['remove'] = function (bkdt, ph614g, xp9g1) {
      ph614g === void 0x0 && (ph614g = '');var aedt = aexs91['getFileInfo'](ph614g),
          y8okb = aexs91['getFileNativePath'](aedt['md5']);as1x9['loader']['clearRes'](aedt['readyUrl']), aexs91['fs']['unlink']({ 'filePath': y8okb, 'success': function (mq73) {
          if (ph614g != '') aexs91['onSaveFile'](ph614g, bkdt);xp9g1 != null && xp9g1['runWith']([0x0]);
        }, 'fail': function (b8ykdo) {} });
    }, aexs91['onSaveFile'] = function (y_kb, ztkdy) {
      var xsa1h9 = y_kb['split']('?')[0x0];aexs91['filesListObj'][xsa1h9] = { 'md5': ztkdy, 'readyUrl': y_kb }, aexs91['fs']['writeFile']({ 'filePath': aexs91['fileNativeDir'] + '/' + aexs91['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](aexs91['filesListObj']), 'success': function (m3il7) {
          console['log']('写入测试测试成功：', m3il7);
        }, 'fail': function (bo8dy) {
          console['log']('写入测试测试失败：', bo8dy);
        } });
    }, aexs91['existDir'] = function (xh1gp9, gpfh) {
      aexs91['fs']['mkdir']({ 'dirPath': xh1gp9, 'success': function (y_r8k) {
          gpfh != null && gpfh['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (a91xsh) {
          if (a91xsh['errMsg']['indexOf']('file already exists') != -0x1) aexs91['readSync'](aexs91['fileListName'], 'utf8', gpfh);else gpfh != null && gpfh['runWith']([0x1, a91xsh]);
        } });
    }, aexs91['readSync'] = function (iv7fnl, n6fl, ky8_br, g416p) {
      n6fl === void 0x0 && (n6fl = 'ascill'), g416p === void 0x0 && (g416p = '');var zatoed = aexs91['getFileNativePath'](iv7fnl),
          r852u_;try {
        r852u_ = aexs91['fs']['readFileSync'](zatoed), ky8_br != null && ky8_br['runWith']([0x0, { 'data': r852u_ }]);
      } catch (ykrd8) {
        ky8_br != null && ky8_br['runWith']([0x1]);
      }
    }, aexs91['readCache'] = function () {}, aexs91['writeCache'] = function (tdez) {
      var m7liv = readyUrl['split']('?')[0x0];aexs91['filesListObj'][m7liv] = { 'md5': md5Name, 'readyUrl': readyUrl }, aexs91['fs']['writeFile']({ 'filePath': aexs91['fileNativeDir'] + '/' + aexs91['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](aexs91['filesListObj']), 'success': function (v7fn) {}, 'fail': function (q3m7i$) {} });
    }, aexs91['setNativeFileDir'] = function (ghp9x1) {
      aexs91['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ghp9x1;
    }, aexs91['filesListObj'] = {}, aexs91['fileNativeDir'] = null, aexs91['fileListName'] = 'layaairfiles.txt', aexs91['ziyuFileData'] = {}, qi$m73(aexs91, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), aexs91;
  }(v6pf4),
      phs91 = function (_82r) {
    function qmn7i3() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], qmn7i3['__super']['call'](this), this['_sound'] = qmn7i3['_createSound']();
    }n3qm(qmn7i3, 'laya.wx.mini.MiniSound', _82r);var etadoz = qmn7i3['prototype'];return etadoz['load'] = function (h64p1g) {
      var fivl = this;h64p1g = otzade['formatURL'](h64p1g), this['url'] = h64p1g;if (qmn7i3['_audioCache'][h64p1g]) {
        this['event']('complete');return;
      }function im$j3() {
        if (qmn7i3['_null'] != undefined) fivl['_sound']['onCanplay'](qmn7i3['_null']), fivl['_sound']['onError'](qmn7i3['_null']);else try {
          fivl['_sound']['onCanplay'](null), fivl['_sound']['onError'](null), qmn7i3['_null'] = null;
        } catch (gh16p4) {
          console['warn']('[wxmini] _clearSound:' + gh16p4), fivl['_sound']['onCanplay'](px1gh9), fivl['_sound']['onError'](px1gh9), qmn7i3['_null'] = px1gh9;
        }
      }function _2rw5() {
        im$j3(), v6l4['loaded'] = !![], v6l4['event']('complete'), qmn7i3['_audioCache'][v6l4['url']] = v6l4;
      }function btdkoy(gf4vp6) {
        console['error']('errCode=' + gf4vp6['errCode'] + '  errMsg=' + gf4vp6['errMsg']), im$j3(), v6l4['event']('error');
      }function px1gh9() {}this['_sound']['onCanplay'](_2rw5), this['_sound']['onError'](btdkoy), this['_sound']['src'] = h64p1g;var v6l4 = this;
    }, etadoz['play'] = function (ozktyd, n3l) {
      ozktyd === void 0x0 && (ozktyd = 0x0), n3l === void 0x0 && (n3l = 0x0);var pg4f6h;if (this['url'] == kbryd['_tMusic']) {
        if (!qmn7i3['_musicAudio']) qmn7i3['_musicAudio'] = qmn7i3['_createSound']();pg4f6h = qmn7i3['_musicAudio'];
      } else pg4f6h = qmn7i3['_createSound']();pg4f6h['src'] = this['url'];var phgx91 = new $jmi(pg4f6h);return phgx91['url'] = this['url'], phgx91['loops'] = n3l, phgx91['startTime'] = ozktyd, phgx91['play'](), kbryd['addChannel'](phgx91), phgx91;
    }, etadoz['dispose'] = function () {
      var ur_582 = qmn7i3['_audioCache'][this['url']];ur_582 && (ur_582['src'] = '', delete qmn7i3['_audioCache'][this['url']]);
    }, xgh91(0x0, etadoz, 'duration', function () {
      return this['_sound']['duration'];
    }), qmn7i3['_createSound'] = function () {
      return qmn7i3['_id']++, g4pfv['window']['wx']['createInnerAudioContext']();
    }, qmn7i3['_musicAudio'] = null, qmn7i3['_id'] = 0x0, qmn7i3['_audioCache'] = {}, qmn7i3['_null'] = undefined, qmn7i3;
  }(v6pf4),
      $jmi = function (yzotde) {
    function ur25w_(_ykr8b) {
      this['_audio'] = null, this['_onEnd'] = null, ur25w_['__super']['call'](this), this['_audio'] = _ykr8b, this['_onEnd'] = miqn73['bind'](this['__onEnd'], this), _ykr8b['onEnded'](this['_onEnd']);
    }n3qm(ur25w_, 'laya.wx.mini.MiniSoundChannel', yzotde);var a9xhs = ur25w_['prototype'];return a9xhs['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (as1x9['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, a9xhs['__onNull'] = function () {}, a9xhs['play'] = function () {
      this['isStopped'] = ![], kbryd['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, a9xhs['stop'] = function () {
      this['isStopped'] = !![], kbryd['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ur25w_['_null'] != undefined) this['_audio']['onEnded'](ur25w_['_null']);else try {
        this['_audio']['onEnded'](null), ur25w_['_null'] = null;
      } catch (sexta) {
        console['warn']('[wxmini] stop:' + sexta), this['_audio']['onEnded'](miqn73['bind'](this['__onNull'], this)), ur25w_['_null'] = miqn73['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, a9xhs['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, a9xhs['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], kbryd['addChannel'](this), this['_audio']['play']();
    }, xgh91(0x0, a9xhs, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), xgh91(0x0, a9xhs, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), xgh91(0x0, a9xhs, 'volume', function () {
      return 0x1;
    }, function (n3ml7) {}), ur25w_['_null'] = undefined, ur25w_;
  }(kdrb8);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var y8ok in Laya) {
    var dzaot = Laya[y8ok];dzaot && dzaot['__isclass'] && (exports[y8ok] = dzaot);
  }
});