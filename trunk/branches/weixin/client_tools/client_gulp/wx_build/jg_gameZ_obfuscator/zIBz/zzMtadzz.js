var B = wx.$z;
(function (window, document, ozdea) {
  var finlv7 = ozdea['un'],
      seaztx = ozdea['uns'],
      nf64v = ozdea['static'],
      l4v6gf = ozdea['class'],
      vfg64l = ozdea['getset'],
      ytbk = ozdea['__newvec'],
      _ru52w = laya['utils']['Browser'],
      bdy8k = laya['events']['Event'],
      wr52_u = laya['events']['EventDispatcher'],
      vf6gp4 = laya['resource']['HTMLImage'],
      tbdoky = laya['utils']['Handler'],
      ml73ni = laya['display']['Input'],
      ydkrb = laya['net']['Loader'],
      x1hsa = laya['maths']['Matrix'],
      iq73m = laya['renders']['Render'],
      krby = laya['utils']['RunDriver'],
      g14 = laya['media']['Sound'],
      astzoe = laya['media']['SoundChannel'],
      yezo = laya['media']['SoundManager'],
      lm7inv = laya['display']['Stage'],
      xhsa = laya['net']['URL'],
      e9sa1x = laya['utils']['Utils'],
      l3in7m = function () {
    function atszex() {}return l4v6gf(atszex, 'laya.wx.mini.MiniAdpter'), atszex['getJson'] = function (iq3jm$) {
      return JSON['parse'](iq3jm$);
    }, atszex['init'] = function (sx9a1e, xphs) {
      sx9a1e === void 0x0 && (sx9a1e = ![]), xphs === void 0x0 && (xphs = ![]);if (atszex['_inited']) return;atszex['window'] = window;if (atszex['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;atszex['_inited'] = !![], atszex['isZiYu'] = xphs, atszex['isPosMsgYu'] = sx9a1e, atszex['EnvConfig'] = {}, !atszex['isZiYu'] && (e91as['setNativeFileDir']('/layaairGame'), e91as['existDir'](e91as['fileNativeDir'], tbdoky['create'](atszex, atszex['onMkdirCallBack']))), atszex['window']['focus'] = function () {}, ozdea['getUrlPath'] = function () {}, atszex['window']['logtime'] = function (mi3n7q) {}, atszex['window']['alertTimeLog'] = function (hp6f4) {}, atszex['window']['resetShareInfo'] = function () {}, atszex['window']['CanvasRenderingContext2D'] = function () {}, atszex['window']['CanvasRenderingContext2D']['prototype'] = atszex['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], atszex['window']['document']['body']['appendChild'] = function () {}, atszex['EnvConfig']['pixelRatioInt'] = 0x0, krby['getPixelRatio'] = atszex['pixelRatio'], atszex['_preCreateElement'] = _ru52w['createElement'], _ru52w['createElement'] = atszex['createElement'], krby['createShaderCondition'] = atszex['createShaderCondition'], e9sa1x['parseXMLFromString'] = atszex['parseXMLFromString'], ml73ni['_createInputElement'] = pg64fh['_createInputElement'], atszex['EnvConfig']['load'] = ydkrb['prototype']['load'], ydkrb['prototype']['load'] = i7fnv['prototype']['load'], atszex['isZiYu'] && sx9a1e && wx['onMessage'](function (lm7ivn) {
        lm7ivn['isLoad'] && (e91as['ziyuFileData'][lm7ivn['url']] = lm7ivn['data']);
      });
    }, atszex['onMkdirCallBack'] = function (ydzoe, hsxa91) {
      if (!ydzoe) e91as['filesListObj'] = JSON['parse'](hsxa91['data']);
    }, atszex['pixelRatio'] = function () {
      if (!atszex['EnvConfig']['pixelRatioInt']) try {
        var i$q3m7 = wx['getSystemInfoSync']();return atszex['EnvConfig']['pixelRatioInt'] = i$q3m7['pixelRatio'], i$q3m7 = i$q3m7, i$q3m7['pixelRatio'];
      } catch (pgv) {}return atszex['EnvConfig']['pixelRatioInt'];
    }, atszex['createElement'] = function (todzye) {
      if (todzye == 'canvas') {
        var fn46;return atszex['idx'] == 0x1 ? atszex['isZiYu'] ? (fn46 = sharedCanvas, fn46['style'] = {}) : fn46 = window['canvas'] : fn46 = window['wx']['createCanvas'](), atszex['idx']++, fn46;
      } else {
        if (todzye == 'textarea' || todzye == 'input') return atszex['onCreateInput'](todzye);else {
          if (todzye == 'div') {
            var a1xh9 = atszex['_preCreateElement'](todzye);return a1xh9['contains'] = function (lv76f) {
              return null;
            }, a1xh9['removeChild'] = function (i3qn7) {}, a1xh9;
          } else return atszex['_preCreateElement'](todzye);
        }
      }
    }, atszex['onCreateInput'] = function (nfv6l) {
      var b5r_8 = atszex['_preCreateElement'](nfv6l);return b5r_8['focus'] = pg64fh['wxinputFocus'], b5r_8['blur'] = pg64fh['wxinputblur'], b5r_8['style'] = {}, b5r_8['value'] = 0x0, b5r_8['parentElement'] = {}, b5r_8['placeholder'] = {}, b5r_8['type'] = {}, b5r_8['setColor'] = function (nivml) {}, b5r_8['setType'] = function (v7lmni) {}, b5r_8['setFontFace'] = function (asez9x) {}, b5r_8['addEventListener'] = function (es19ax) {}, b5r_8['contains'] = function (w2u5) {
        return null;
      }, b5r_8['removeChild'] = function (odetzy) {}, b5r_8;
    }, atszex['createShaderCondition'] = function (vf4g6) {
      var uw2r_ = this,
          filv = function () {
        var minlv7 = vf4g6;return uw2r_[vf4g6['replace']('this.', '')];
      };return filv;
    }, atszex['EnvConfig'] = null, atszex['window'] = null, atszex['_preCreateElement'] = null, atszex['_inited'] = ![], atszex['wxRequest'] = null, atszex['systemInfo'] = null, atszex['version'] = '0.0.1', atszex['isZiYu'] = ![], atszex['isPosMsgYu'] = ![], atszex['parseXMLFromString'] = function (i7qm3) {
      var ps9h, vin7fl;i7qm3 = i7qm3['replace'](/>\s+</g, '><');try {
        ps9h = new window['Parser']['DOMParser']()['parseFromString'](i7qm3, 'text/xml');
      } catch (b_8kr) {
        throw '需要引入xml解析库文件';
      }return ps9h;
    }, atszex['idx'] = 0x1, atszex;
  }(),
      yoztdk = function () {
    function stzeoa() {}l4v6gf(stzeoa, 'laya.wx.mini.MiniImage');var n7ivml = stzeoa['prototype'];return n7ivml['_loadImage'] = function (q$3m) {
      var _r8b2 = this,
          xas19h = ![];q$3m['indexOf']('layaNativeDir/') == -0x1 && (xas19h = !![], q$3m = xhsa['formatURL'](q$3m));if (!e91as['getFileInfo'](q$3m)) {
        if (q$3m['indexOf']('http://') != -0x1 || q$3m['indexOf']('https://') != -0x1) e91as['downImg'](q$3m, new tbdoky(stzeoa, stzeoa['onDownImgCallBack'], [q$3m, _r8b2]), q$3m);else stzeoa['onCreateImage'](q$3m, _r8b2, !![]);
      } else stzeoa['onCreateImage'](q$3m, _r8b2, !xas19h);
    }, stzeoa['onDownImgCallBack'] = function (taoed, nm3l7i, yztdoe) {
      if (!yztdoe) stzeoa['onCreateImage'](taoed, nm3l7i);else nm3l7i['onError'](null);
    }, stzeoa['onCreateImage'] = function (ydbkt, otzedy, ru25_w) {
      ru25_w === void 0x0 && (ru25_w = ![]);var r2u85_;if (!ru25_w) {
        var wu2r5 = e91as['getFileInfo'](ydbkt),
            br_k85 = wu2r5['md5'];r2u85_ = e91as['getFileNativePath'](br_k85);
      } else r2u85_ = ydbkt;if (otzedy['imgCache'] == null) otzedy['imgCache'] = {};var n3i7l;function byokd8() {
        n3i7l['onload'] = null, n3i7l['onerror'] = null, delete otzedy['imgCache'][ydbkt];
      };var mqi37n = function () {
        byokd8(), otzedy['onLoaded'](n3i7l);
      },
          atzxe = function () {
        byokd8(), otzedy['event']('error', 'Load image failed');
      };otzedy['_type'] == 'nativeimage' ? (n3i7l = new _ru52w['window']['Image'](), n3i7l['crossOrigin'] = '', n3i7l['onload'] = mqi37n, n3i7l['onerror'] = atzxe, n3i7l['src'] = r2u85_, otzedy['imgCache'][ydbkt] = n3i7l) : new vf6gp4['create'](r2u85_, { 'onload': mqi37n, 'onerror': atzxe, 'onCreate': function (oetazs) {
          n3i7l = oetazs, otzedy['imgCache'][ydbkt] = oetazs;
        } });
    }, stzeoa;
  }(),
      pg64fh = function () {
    function lv6g() {}return l4v6gf(lv6g, 'laya.wx.mini.MiniInput'), lv6g['_createInputElement'] = function () {
      ml73ni['_initInput'](ml73ni['area'] = _ru52w['createElement']('textarea')), ml73ni['_initInput'](ml73ni['input'] = _ru52w['createElement']('input')), ml73ni['inputContainer'] = _ru52w['createElement']('div'), ml73ni['inputContainer']['style']['position'] = 'absolute', ml73ni['inputContainer']['style']['zIndex'] = 0x186a0, _ru52w['container']['appendChild'](ml73ni['inputContainer']), ml73ni['inputContainer']['setPos'] = function (f6gp4, kyodbt) {
        ml73ni['inputContainer']['style']['left'] = f6gp4 + 'px', ml73ni['inputContainer']['style']['top'] = kyodbt + 'px';
      }, ozdea['stage']['on']('resize', null, lv6g['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (pghx91) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), yezo['_soundClass'] = eazod, yezo['_musicClass'] = eazod;
    }, lv6g['_onStageResize'] = function () {
      var p19xsh = ozdea['stage']['_canvasTransform']['identity']();p19xsh['scale'](_ru52w['width'] / iq73m['canvas']['width'] / krby['getPixelRatio'](), _ru52w['height'] / iq73m['canvas']['height'] / krby['getPixelRatio']());
    }, lv6g['wxinputFocus'] = function (r_25wu) {
      var ezy = ml73ni['inputElement']['target'];if (ezy && !ezy['editable']) return;l3in7m['window']['wx']['offKeyboardConfirm'](), l3in7m['window']['wx']['offKeyboardInput'](), l3in7m['window']['wx']['showKeyboard']({ 'defaultValue': ezy['text'], 'maxLength': ezy['maxChars'], 'multiple': ezy['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (lvf67n) {}, 'fail': function (ezstax) {} }), l3in7m['window']['wx']['onKeyboardConfirm'](function (l7mn) {
        var s9xe1 = l7mn ? l7mn['value'] : '';ezy['text'] = s9xe1, ezy['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), l3in7m['window']['wx']['onKeyboardInput'](function (dotyb) {
        var n7m3qi = dotyb ? dotyb['value'] : '';if (!ezy['multiline']) {
          if (n7m3qi['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ezy['text'] = n7m3qi, ezy['event']('input');
      });
    }, lv6g['inputEnter'] = function () {
      ml73ni['inputElement']['target']['focus'] = ![];
    }, lv6g['wxinputblur'] = function () {
      lv6g['hideKeyboard']();
    }, lv6g['hideKeyboard'] = function () {
      l3in7m['window']['wx']['offKeyboardConfirm'](), l3in7m['window']['wx']['offKeyboardInput'](), l3in7m['window']['wx']['hideKeyboard']({ 'success': function (ykdr) {
          console['log']('隐藏键盘');
        }, 'fail': function (li7fvn) {
          console['log']('隐藏键盘出错:' + (li7fvn ? li7fvn['errMsg'] : ''));
        } });
    }, lv6g;
  }(),
      i7fnv = function () {
    function gphf64() {}l4v6gf(gphf64, 'laya.wx.mini.MiniLoader');var tzdkyo = gphf64['prototype'];return tzdkyo['load'] = function (odztye, ex1s9, _k8br, ji3$, q3mn) {
      _k8br === void 0x0 && (_k8br = !![]), q3mn === void 0x0 && (q3mn = ![]);var fln6 = this;fln6['_url'] = odztye;if (odztye['indexOf']('data:image') === 0x0) fln6['_type'] = ex1s9 = 'image';else fln6['_type'] = ex1s9 || (ex1s9 = fln6['getTypeFromUrl'](odztye));fln6['_cache'] = _k8br, fln6['_data'] = null;var zeyodt = 'ascii';if (odztye['indexOf']('.fnt') != -0x1) zeyodt = 'utf8';else ex1s9 == 'arraybuffer' && (zeyodt = '');;var fl7 = e9sa1x['getFileExtension'](odztye);if (gphf64['_fileTypeArr']['indexOf'](fl7) != -0x1) l3in7m['EnvConfig']['load']['call'](this, odztye, ex1s9, _k8br, ji3$, q3mn);else {
        if (!e91as['getFileInfo'](odztye)) {
          if (odztye['indexOf']('layaNativeDir/') != -0x1) {
            if (l3in7m['isZiYu']) {
              var zastx = e91as['ziyuFileData'][odztye];fln6['onLoaded'](zastx);return;
            } else {
              cosnole['log']('read read'), e91as['read'](odztye, zeyodt, new tbdoky(gphf64, gphf64['onReadNativeCallBack'], [zeyodt, odztye, ex1s9, _k8br, ji3$, q3mn, fln6]));return;
            }
          }if (xhsa['rootPath'] == '') var jiqm3$ = odztye;else jiqm3$ = odztye['split'](xhsa['rootPath'])[0x0];odztye['indexOf']('http://') != -0x1 || odztye['indexOf']('https://') != -0x1 ? l3in7m['EnvConfig']['load']['call'](fln6, odztye, ex1s9, _k8br, ji3$, q3mn) : e91as['readFile'](jiqm3$, zeyodt, new tbdoky(gphf64, gphf64['onReadNativeCallBack'], [zeyodt, odztye, ex1s9, _k8br, ji3$, q3mn, fln6]), odztye);
        } else l3in7m['EnvConfig']['load']['call'](this, odztye, ex1s9, _k8br, ji3$, q3mn);
      }
    }, tzdkyo['resMgrLoad'] = function (f6vl, oseazt, f64vgl, hg91xp, oezyd, gph9x, atozes) {
      f64vgl === void 0x0 && (f64vgl = 0x0), hg91xp === void 0x0 && (hg91xp = ![]), oezyd === void 0x0 && (oezyd = ![]), gph9x === void 0x0 && (gph9x = 0x0), atozes === void 0x0 && (atozes = 0x3), f6vl['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', f6vl), l3in7m['EnvConfig']['resMgrLoad'](f6vl, (u2r_5, sex91a, dkobty) => {
        gphf64['prototype']['resMgrLoadCallBack'](u2r_5, sex91a, dkobty, oseazt);
      }, f64vgl, hg91xp, oezyd, gph9x, atozes);
    }, tzdkyo['resMgrLoadCallBack'] = function (oazted, b2r_85, f64pgv, szxat) {
      console['log']('buff:::', oazted, f64pgv, e91as['fileNativeDir'] + '///' + e91as['fileListName']), szxat(oazted, b2r_85, f64pgv);
    }, tzdkyo['clearRes'] = function (okbyd, iq37) {
      iq37 === void 0x0 && (iq37 = ![]);var l37nmi = this;l37nmi['clearRes'](okbyd, iq37);var p9g1h4 = e91as['getFileInfo'](okbyd);if (p9g1h4 && (okbyd['indexOf']('http://') != -0x1 || okbyd['indexOf']('https://') != -0x1)) {
        var fg46lv = p9g1h4['md5'],
            q7mn = e91as['getFileNativePath'](fg46lv);e91as['remove'](q7mn);
      }
    }, gphf64['onReadNativeCallBack'] = function (lfg4v, x1hs9, aesxz, etaozs, nimvl7, bk8_, rkb_y, rw2_5u, vgp4) {
      etaozs === void 0x0 && (etaozs = !![]), bk8_ === void 0x0 && (bk8_ = ![]), rw2_5u === void 0x0 && (rw2_5u = 0x0);if (!rw2_5u) {
        var i3qm;if (aesxz == 'json' || aesxz == 'atlas') i3qm = l3in7m['getJson'](vgp4['data']);else aesxz == 'xml' ? i3qm = e9sa1x['parseXMLFromString'](vgp4['data']) : i3qm = vgp4['data'];rkb_y['onLoaded'](i3qm), !l3in7m['isZiYu'] && l3in7m['isPosMsgYu'] && aesxz != 'arraybuffer' && wx['postMessage']({ 'url': x1hs9, 'data': i3qm, 'isLoad': !![] });
      } else rw2_5u == 0x1 && l3in7m['EnvConfig']['load']['call'](rkb_y, x1hs9, aesxz, etaozs, nimvl7, bk8_);
    }, nf64v(gphf64, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), gphf64;
  }(),
      e91as = function (x9ha) {
    function ex9s1a() {
      ex9s1a['__super']['call'](this);;
    }return l4v6gf(ex9s1a, 'laya.wx.mini.MiniFileMgr', x9ha), ex9s1a['isLoadFile'] = function (h94pg1) {
      return ex9s1a['_fileTypeArr']['indexOf'](h94pg1) != -0x1 ? !![] : ![];
    }, ex9s1a['getFileInfo'] = function (pgfh4) {
      var vilmn = pgfh4['split']('?')[0x0],
          zeotad = ex9s1a['filesListObj'][vilmn];if (zeotad == null) return null;else return zeotad;return null;
    }, ex9s1a['onFileUpdate'] = function (p4gv6f, wu5_r) {
      var ezxsa = p4gv6f['split']('/'),
          y_k8br = ezxsa[ezxsa['length'] - 0x1],
          lin7v = ex9s1a['getFileInfo'](wu5_r);if (lin7v == null) ex9s1a['onSaveFile'](wu5_r, y_k8br);else {
        if (lin7v['readyUrl'] != wu5_r) ex9s1a['remove'](y_k8br, wu5_r);
      }
    }, ex9s1a['exits'] = function (otzk, w_502u) {
      var nlv76f = ex9s1a['getFileNativePath'](otzk);ex9s1a['fs']['getFileInfo']({ 'filePath': nlv76f, 'success': function (_rk58b) {
          w_502u != null && w_502u['runWith']([0x0, _rk58b]);
        }, 'fail': function (dtboy) {
          w_502u != null && w_502u['runWith']([0x1, dtboy]);
        } });
    }, ex9s1a['read'] = function (tdok, ex9azs, g19pxh, i7q3$m) {
      ex9azs === void 0x0 && (ex9azs = 'ascill'), i7q3$m === void 0x0 && (i7q3$m = '');var i7$qm3;i7q3$m != '' ? i7$qm3 = ex9s1a['getFileNativePath'](tdok) : i7$qm3 = tdok, ex9s1a['fs']['readFile']({ 'filePath': i7$qm3, 'encoding': ex9azs, 'success': function (_bk8yr) {
          g19pxh != null && g19pxh['runWith']([0x0, _bk8yr]);
        }, 'fail': function (nlfi7) {
          if (nlfi7 && i7q3$m != '') ex9s1a['down'](i7q3$m, ex9azs, g19pxh, i7q3$m);else g19pxh != null && g19pxh['runWith']([0x1]);
        } });
    }, ex9s1a['readNativeFile'] = function (yztok, xp19) {
      ex9s1a['fs']['readFile']({ 'filePath': yztok, 'encoding': '', 'success': function (fiv7n) {
          xp19 != null && xp19['runWith']([0x0]);
        }, 'fail': function (u_02) {
          xp19 != null && xp19['runWith']([0x1]);
        } });
    }, ex9s1a['down'] = function (yokdtb, $mij3q, q7i3n, sx9ah1) {
      $mij3q === void 0x0 && ($mij3q = 'ascill'), sx9ah1 === void 0x0 && (sx9ah1 = '');var e9a1 = ex9s1a['getFileNativePath'](sx9ah1),
          u_02w = ex9s1a['wxdown']({ 'url': yokdtb, 'filePath': e9a1, 'success': function (etzao) {
          if (etzao['statusCode'] === 0xc8) ex9s1a['readFile'](etzao['filePath'], $mij3q, q7i3n, sx9ah1);
        }, 'fail': function (vif7l) {
          q7i3n != null && q7i3n['runWith']([0x1, vif7l]);
        } });u_02w['onProgressUpdate'](function (xah1s9) {
        q7i3n != null && q7i3n['runWith']([0x2, xah1s9['progress']]);
      });
    }, ex9s1a['readFile'] = function (tzkdyo, f6gl, ah1x, kbrdy8) {
      f6gl === void 0x0 && (f6gl = 'ascill'), kbrdy8 === void 0x0 && (kbrdy8 = ''), ex9s1a['fs']['readFile']({ 'filePath': tzkdyo, 'encoding': f6gl, 'success': function (p41g9) {
          if (tzkdyo['indexOf']('http://') != -0x1 || tzkdyo['indexOf']('https://') != -0x1) ex9s1a['onFileUpdate'](tzkdyo, kbrdy8);ah1x != null && ah1x['runWith']([0x0, p41g9]);
        }, 'fail': function (tybdk) {
          if (tybdk) ah1x != null && ah1x['runWith']([0x1, tybdk]);
        } });
    }, ex9s1a['downImg'] = function (lnivm7, dykto, zeatod) {
      zeatod === void 0x0 && (zeatod = '');var dotyz = ex9s1a['wxdown']({ 'url': lnivm7, 'success': function (m73qni) {
          m73qni['statusCode'] === 0xc8 && ex9s1a['copyFile'](m73qni['tempFilePath'], zeatod, dykto);
        }, 'fail': function (mi7ln3) {
          dykto != null && dykto['runWith']([0x1, mi7ln3]);
        } });
    }, ex9s1a['copyFile'] = function (mjq$, axtzes, p4hg61) {
      var ztdoa = mjq$['split']('/'),
          zyteo = ztdoa[ztdoa['length'] - 0x1],
          $m3ijq = axtzes['split']('?')[0x0],
          a1s = ex9s1a['getFileInfo'](axtzes),
          p9xhs = ex9s1a['getFileNativePath'](zyteo);ex9s1a['fs']['copyFile']({ 'srcPath': mjq$, 'destPath': p9xhs, 'success': function (btykd) {
          if (!a1s) ex9s1a['onSaveFile'](axtzes, zyteo), p4hg61 != null && p4hg61['runWith']([0x0]);else {
            if (a1s['readyUrl'] != axtzes) ex9s1a['remove'](zyteo, axtzes, p4hg61);
          }
        }, 'fail': function (_bkry8) {
          p4hg61 != null && p4hg61['runWith']([0x1, _bkry8]);
        } });
    }, ex9s1a['getFileNativePath'] = function (l37imn) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + l37imn;
    }, ex9s1a['remove'] = function (sze9xa, fl4vg, aozste) {
      fl4vg === void 0x0 && (fl4vg = '');var ij$m3q = ex9s1a['getFileInfo'](fl4vg),
          zkyot = ex9s1a['getFileNativePath'](ij$m3q['md5']);ozdea['loader']['clearRes'](ij$m3q['readyUrl']), ex9s1a['fs']['unlink']({ 'filePath': zkyot, 'success': function (vm7nl) {
          if (fl4vg != '') ex9s1a['onSaveFile'](fl4vg, sze9xa);aozste != null && aozste['runWith']([0x0]);
        }, 'fail': function (zsotea) {} });
    }, ex9s1a['onSaveFile'] = function (k8drby, kobd8y) {
      var p6ghf4 = k8drby['split']('?')[0x0];ex9s1a['filesListObj'][p6ghf4] = { 'md5': kobd8y, 'readyUrl': k8drby }, ex9s1a['fs']['writeFile']({ 'filePath': ex9s1a['fileNativeDir'] + '/' + ex9s1a['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ex9s1a['filesListObj']), 'success': function (wu025_) {
          console['log']('写入测试测试成功：', wu025_);
        }, 'fail': function (odyktz) {
          console['log']('写入测试测试失败：', odyktz);
        } });
    }, ex9s1a['existDir'] = function (xh1a9s, fp4gv6) {
      ex9s1a['fs']['mkdir']({ 'dirPath': xh1a9s, 'success': function (ln6vf4) {
          fp4gv6 != null && fp4gv6['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (zteoyd) {
          if (zteoyd['errMsg']['indexOf']('file already exists') != -0x1) ex9s1a['readSync'](ex9s1a['fileListName'], 'utf8', fp4gv6);else fp4gv6 != null && fp4gv6['runWith']([0x1, zteoyd]);
        } });
    }, ex9s1a['readSync'] = function (yzoed, gl6f, xe9zas, qm7n3i) {
      gl6f === void 0x0 && (gl6f = 'ascill'), qm7n3i === void 0x0 && (qm7n3i = '');var nm3i7 = ex9s1a['getFileNativePath'](yzoed),
          b8ydok;try {
        b8ydok = ex9s1a['fs']['readFileSync'](nm3i7), xe9zas != null && xe9zas['runWith']([0x0, { 'data': b8ydok }]);
      } catch (rby8k) {
        xe9zas != null && xe9zas['runWith']([0x1]);
      }
    }, ex9s1a['readCache'] = function () {}, ex9s1a['writeCache'] = function (pg4fv) {
      var okd8by = readyUrl['split']('?')[0x0];ex9s1a['filesListObj'][okd8by] = { 'md5': md5Name, 'readyUrl': readyUrl }, ex9s1a['fs']['writeFile']({ 'filePath': ex9s1a['fileNativeDir'] + '/' + ex9s1a['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ex9s1a['filesListObj']), 'success': function (phf4) {}, 'fail': function (mli7n3) {} });
    }, ex9s1a['setNativeFileDir'] = function (oestaz) {
      ex9s1a['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + oestaz;
    }, ex9s1a['filesListObj'] = {}, ex9s1a['fileNativeDir'] = null, ex9s1a['fileListName'] = 'layaairfiles.txt', ex9s1a['ziyuFileData'] = {}, nf64v(ex9s1a, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ex9s1a;
  }(wr52_u),
      eazod = function (f4h6gp) {
    function h1g94() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], h1g94['__super']['call'](this), this['_sound'] = h1g94['_createSound']();
    }l4v6gf(h1g94, 'laya.wx.mini.MiniSound', f4h6gp);var nliv7 = h1g94['prototype'];return nliv7['load'] = function (ydo8) {
      var ytod = this;ydo8 = xhsa['formatURL'](ydo8), this['url'] = ydo8;if (h1g94['_audioCache'][ydo8]) {
        this['event']('complete');return;
      }function $37iqm() {
        if (h1g94['_null'] != undefined) ytod['_sound']['onCanplay'](h1g94['_null']), ytod['_sound']['onError'](h1g94['_null']);else try {
          ytod['_sound']['onCanplay'](null), ytod['_sound']['onError'](null), h1g94['_null'] = null;
        } catch (ji3m$) {
          console['warn']('[wxmini] _clearSound:' + ji3m$), ytod['_sound']['onCanplay'](nv7lf), ytod['_sound']['onError'](nv7lf), h1g94['_null'] = nv7lf;
        }
      }function yodzt() {
        $37iqm(), ezytd['loaded'] = !![], ezytd['event']('complete'), h1g94['_audioCache'][ezytd['url']] = ezytd;
      }function r8b5k(r5b8_2) {
        console['error']('errCode=' + r5b8_2['errCode'] + '  errMsg=' + r5b8_2['errMsg']), $37iqm(), ezytd['event']('error');
      }function nv7lf() {}this['_sound']['onCanplay'](yodzt), this['_sound']['onError'](r8b5k), this['_sound']['src'] = ydo8;var ezytd = this;
    }, nliv7['play'] = function (szxta, obdyt) {
      szxta === void 0x0 && (szxta = 0x0), obdyt === void 0x0 && (obdyt = 0x0);var vm7nli;if (this['url'] == yezo['_tMusic']) {
        if (!h1g94['_musicAudio']) h1g94['_musicAudio'] = h1g94['_createSound']();vm7nli = h1g94['_musicAudio'];
      } else vm7nli = h1g94['_createSound']();vm7nli['src'] = this['url'];var mnvli = new oyzkd(vm7nli);return mnvli['url'] = this['url'], mnvli['loops'] = obdyt, mnvli['startTime'] = szxta, mnvli['play'](), yezo['addChannel'](mnvli), mnvli;
    }, nliv7['dispose'] = function () {
      var r8byk = h1g94['_audioCache'][this['url']];r8byk && (r8byk['src'] = '', delete h1g94['_audioCache'][this['url']]);
    }, vfg64l(0x0, nliv7, 'duration', function () {
      return this['_sound']['duration'];
    }), h1g94['_createSound'] = function () {
      return h1g94['_id']++, l3in7m['window']['wx']['createInnerAudioContext']();
    }, h1g94['_musicAudio'] = null, h1g94['_id'] = 0x0, h1g94['_audioCache'] = {}, h1g94['_null'] = undefined, h1g94;
  }(wr52_u),
      oyzkd = function (_5u0) {
    function p1hx9(ea1xs) {
      this['_audio'] = null, this['_onEnd'] = null, p1hx9['__super']['call'](this), this['_audio'] = ea1xs, this['_onEnd'] = e9sa1x['bind'](this['__onEnd'], this), ea1xs['onEnded'](this['_onEnd']);
    }l4v6gf(p1hx9, 'laya.wx.mini.MiniSoundChannel', _5u0);var f7i = p1hx9['prototype'];return f7i['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ozdea['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, f7i['__onNull'] = function () {}, f7i['play'] = function () {
      this['isStopped'] = ![], yezo['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, f7i['stop'] = function () {
      this['isStopped'] = !![], yezo['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (p1hx9['_null'] != undefined) this['_audio']['onEnded'](p1hx9['_null']);else try {
        this['_audio']['onEnded'](null), p1hx9['_null'] = null;
      } catch (teda) {
        console['warn']('[wxmini] stop:' + teda), this['_audio']['onEnded'](e9sa1x['bind'](this['__onNull'], this)), p1hx9['_null'] = e9sa1x['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, f7i['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, f7i['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], yezo['addChannel'](this), this['_audio']['play']();
    }, vfg64l(0x0, f7i, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), vfg64l(0x0, f7i, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), vfg64l(0x0, f7i, 'volume', function () {
      return 0x1;
    }, function (h19sxa) {}), p1hx9['_null'] = undefined, p1hx9;
  }(astzoe);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var xsa1e9 in Laya) {
    var v4pfg = Laya[xsa1e9];v4pfg && v4pfg['__isclass'] && (exports[xsa1e9] = v4pfg);
  }
});