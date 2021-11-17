var s = wx.$W;
(function (window, document, layv$9) {
  var yavl9$ = layv$9['un'],
      c5bkg8 = layv$9['uns'],
      kgdcr = layv$9['static'],
      tph80 = layv$9['class'],
      k85cbg = layv$9['getset'],
      bkdc = layv$9['__newvec'],
      g5kcdb = laya['utils']['Browser'],
      ckg85 = laya['events']['Event'],
      q6pm4s = laya['events']['EventDispatcher'],
      xgdkb = laya['resource']['HTMLImage'],
      kbdxyr = laya['utils']['Handler'],
      gxbdk = laya['display']['Input'],
      tp80uh = laya['net']['Loader'],
      mwsojn = laya['maths']['Matrix'],
      thpu60 = laya['renders']['Render'],
      hqp64u = laya['utils']['RunDriver'],
      fwosj = laya['media']['Sound'],
      q4ph6m = laya['media']['SoundChannel'],
      t085uh = laya['media']['SoundManager'],
      efn = laya['display']['Stage'],
      rbdxy = laya['net']['URL'],
      m6s4oq = laya['utils']['Utils'],
      gdkcr = function () {
    function y9av$() {}return tph80(y9av$, 'laya.wx.mini.MiniAdpter'), y9av$['getJson'] = function (zewnfj) {
      return JSON['parse'](zewnfj);
    }, y9av$['init'] = function (ze3712, dkrayx) {
      ze3712 === void 0x0 && (ze3712 = ![]), dkrayx === void 0x0 && (dkrayx = ![]);if (y9av$['_inited']) return;y9av$['window'] = window;if (y9av$['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;y9av$['_inited'] = !![], y9av$['isZiYu'] = dkrayx, y9av$['isPosMsgYu'] = ze3712, y9av$['EnvConfig'] = {}, !y9av$['isZiYu'] && (xbkd['setNativeFileDir']('/layaairGame'), xbkd['existDir'](xbkd['fileNativeDir'], kbdxyr['create'](y9av$, y9av$['onMkdirCallBack']))), y9av$['window']['focus'] = function () {}, layv$9['getUrlPath'] = function () {}, y9av$['window']['logtime'] = function (wnjs) {}, y9av$['window']['alertTimeLog'] = function (nmqosw) {}, y9av$['window']['resetShareInfo'] = function () {}, y9av$['window']['CanvasRenderingContext2D'] = function () {}, y9av$['window']['CanvasRenderingContext2D']['prototype'] = y9av$['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], y9av$['window']['document']['body']['appendChild'] = function () {}, y9av$['EnvConfig']['pixelRatioInt'] = 0x0, hqp64u['getPixelRatio'] = y9av$['pixelRatio'], y9av$['_preCreateElement'] = g5kcdb['createElement'], g5kcdb['createElement'] = y9av$['createElement'], hqp64u['createShaderCondition'] = y9av$['createShaderCondition'], m6s4oq['parseXMLFromString'] = y9av$['parseXMLFromString'], gxbdk['_createInputElement'] = qsmwon['_createInputElement'], y9av$['EnvConfig']['load'] = tp80uh['prototype']['load'], tp80uh['prototype']['load'] = g805['prototype']['load'], y9av$['isZiYu'] && ze3712 && wx['onMessage'](function (enzjw) {
        enzjw['isLoad'] && (xbkd['ziyuFileData'][enzjw['url']] = enzjw['data']);
      });
    }, y9av$['onMkdirCallBack'] = function (tuph80, _la$9v) {
      if (!tuph80) xbkd['filesListObj'] = JSON['parse'](_la$9v['data']);
    }, y9av$['pixelRatio'] = function () {
      if (!y9av$['EnvConfig']['pixelRatioInt']) try {
        var gcr = wx['getSystemInfoSync']();return y9av$['EnvConfig']['pixelRatioInt'] = gcr['pixelRatio'], gcr = gcr, gcr['pixelRatio'];
      } catch (dxk) {}return y9av$['EnvConfig']['pixelRatioInt'];
    }, y9av$['createElement'] = function (v$a9_) {
      if (v$a9_ == 'canvas') {
        var qp4mh;return y9av$['idx'] == 0x1 ? y9av$['isZiYu'] ? (qp4mh = sharedCanvas, qp4mh['style'] = {}) : qp4mh = window['canvas'] : qp4mh = window['wx']['createCanvas'](), y9av$['idx']++, qp4mh;
      } else {
        if (v$a9_ == 'textarea' || v$a9_ == 'input') return y9av$['onCreateInput'](v$a9_);else {
          if (v$a9_ == 'div') {
            var mson = y9av$['_preCreateElement'](v$a9_);return mson['contains'] = function (osjf) {
              return null;
            }, mson['removeChild'] = function (p80h) {}, mson;
          } else return y9av$['_preCreateElement'](v$a9_);
        }
      }
    }, y9av$['onCreateInput'] = function (ck85b) {
      var p0hu8 = y9av$['_preCreateElement'](ck85b);return p0hu8['focus'] = qsmwon['wxinputFocus'], p0hu8['blur'] = qsmwon['wxinputblur'], p0hu8['style'] = {}, p0hu8['value'] = 0x0, p0hu8['parentElement'] = {}, p0hu8['placeholder'] = {}, p0hu8['type'] = {}, p0hu8['setColor'] = function (dxbry) {}, p0hu8['setType'] = function (onfjw) {}, p0hu8['setFontFace'] = function (t5h08u) {}, p0hu8['addEventListener'] = function (dkrbg) {}, p0hu8['contains'] = function (z31fj) {
        return null;
      }, p0hu8['removeChild'] = function (xakrdy) {}, p0hu8;
    }, y9av$['createShaderCondition'] = function (gdxr) {
      var ykrxad = this,
          ojsm = function () {
        var mowqn = gdxr;return ykrxad[gdxr['replace']('this.', '')];
      };return ojsm;
    }, y9av$['EnvConfig'] = null, y9av$['window'] = null, y9av$['_preCreateElement'] = null, y9av$['_inited'] = ![], y9av$['wxRequest'] = null, y9av$['systemInfo'] = null, y9av$['version'] = '0.0.1', y9av$['isZiYu'] = ![], y9av$['isPosMsgYu'] = ![], y9av$['parseXMLFromString'] = function (h6p0ut) {
      var zewf1j, jznfw;h6p0ut = h6p0ut['replace'](/>\s+</g, '><');try {
        zewf1j = new window['Parser']['DOMParser']()['parseFromString'](h6p0ut, 'text/xml');
      } catch (jon) {
        throw '需要引入xml解析库文件';
      }return zewf1j;
    }, y9av$['idx'] = 0x1, y9av$;
  }(),
      fz32 = function () {
    function bc5g08() {}tph80(bc5g08, 'laya.wx.mini.MiniImage');var daxyrk = bc5g08['prototype'];return daxyrk['_loadImage'] = function (cdrbk) {
      var uht580 = this,
          xkrbgd = ![];cdrbk['indexOf']('layaNativeDir/') == -0x1 && (xkrbgd = !![], cdrbk = rbdxy['formatURL'](cdrbk));if (!xbkd['getFileInfo'](cdrbk)) {
        if (cdrbk['indexOf']('http://') != -0x1 || cdrbk['indexOf']('https://') != -0x1) xbkd['downImg'](cdrbk, new kbdxyr(bc5g08, bc5g08['onDownImgCallBack'], [cdrbk, uht580]), cdrbk);else bc5g08['onCreateImage'](cdrbk, uht580, !![]);
      } else bc5g08['onCreateImage'](cdrbk, uht580, !xkrbgd);
    }, bc5g08['onDownImgCallBack'] = function (z2e371, tp6uh0, mow) {
      if (!mow) bc5g08['onCreateImage'](z2e371, tp6uh0);else tp6uh0['onError'](null);
    }, bc5g08['onCreateImage'] = function (a$rd, njwom, mosjnw) {
      mosjnw === void 0x0 && (mosjnw = ![]);var bdr;if (!mosjnw) {
        var rbgkdx = xbkd['getFileInfo'](a$rd),
            lvy9a = rbgkdx['md5'];bdr = xbkd['getFileNativePath'](lvy9a);
      } else bdr = a$rd;if (njwom['imgCache'] == null) njwom['imgCache'] = {};var fz3ej1;function yax$() {
        fz3ej1['onload'] = null, fz3ej1['onerror'] = null, delete njwom['imgCache'][a$rd];
      };var z273i = function () {
        yax$(), njwom['onLoaded'](fz3ej1);
      },
          e72z1 = function () {
        yax$(), njwom['event']('error', 'Load image failed');
      };njwom['_type'] == 'nativeimage' ? (fz3ej1 = new g5kcdb['window']['Image'](), fz3ej1['crossOrigin'] = '', fz3ej1['onload'] = z273i, fz3ej1['onerror'] = e72z1, fz3ej1['src'] = bdr, njwom['imgCache'][a$rd] = fz3ej1) : new xgdkb['create'](bdr, { 'onload': z273i, 'onerror': e72z1, 'onCreate': function (v9yx) {
          fz3ej1 = v9yx, njwom['imgCache'][a$rd] = v9yx;
        } });
    }, bc5g08;
  }(),
      qsmwon = function () {
    function cb805g() {}return tph80(cb805g, 'laya.wx.mini.MiniInput'), cb805g['_createInputElement'] = function () {
      gxbdk['_initInput'](gxbdk['area'] = g5kcdb['createElement']('textarea')), gxbdk['_initInput'](gxbdk['input'] = g5kcdb['createElement']('input')), gxbdk['inputContainer'] = g5kcdb['createElement']('div'), gxbdk['inputContainer']['style']['position'] = 'absolute', gxbdk['inputContainer']['style']['zIndex'] = 0x186a0, g5kcdb['container']['appendChild'](gxbdk['inputContainer']), gxbdk['inputContainer']['setPos'] = function (ewnfjo, krdyb) {
        gxbdk['inputContainer']['style']['left'] = ewnfjo + 'px', gxbdk['inputContainer']['style']['top'] = krdyb + 'px';
      }, layv$9['stage']['on']('resize', null, cb805g['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (oewnj) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), t085uh['_soundClass'] = wfojsn, t085uh['_musicClass'] = wfojsn;
    }, cb805g['_onStageResize'] = function () {
      var ydrk = layv$9['stage']['_canvasTransform']['identity']();ydrk['scale'](g5kcdb['width'] / thpu60['canvas']['width'] / hqp64u['getPixelRatio'](), g5kcdb['height'] / thpu60['canvas']['height'] / hqp64u['getPixelRatio']());
    }, cb805g['wxinputFocus'] = function ($axrv) {
      var wnfs = gxbdk['inputElement']['target'];if (wnfs && !wnfs['editable']) return;gdkcr['window']['wx']['offKeyboardConfirm'](), gdkcr['window']['wx']['offKeyboardInput'](), gdkcr['window']['wx']['showKeyboard']({ 'defaultValue': wnfs['text'], 'maxLength': wnfs['maxChars'], 'multiple': wnfs['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (phu8t0) {}, 'fail': function (p6t0h) {} }), gdkcr['window']['wx']['onKeyboardConfirm'](function (th0u6) {
        var v$al_9 = th0u6 ? th0u6['value'] : '';wnfs['text'] = v$al_9, wnfs['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), gdkcr['window']['wx']['onKeyboardInput'](function (smonwj) {
        var k5 = smonwj ? smonwj['value'] : '';if (!wnfs['multiline']) {
          if (k5['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }wnfs['text'] = k5, wnfs['event']('input');
      });
    }, cb805g['inputEnter'] = function () {
      gxbdk['inputElement']['target']['focus'] = ![];
    }, cb805g['wxinputblur'] = function () {
      cb805g['hideKeyboard']();
    }, cb805g['hideKeyboard'] = function () {
      gdkcr['window']['wx']['offKeyboardConfirm'](), gdkcr['window']['wx']['offKeyboardInput'](), gdkcr['window']['wx']['hideKeyboard']({ 'success': function (bgdrx) {
          console['log']('隐藏键盘');
        }, 'fail': function (swnmq) {
          console['log']('隐藏键盘出错:' + (swnmq ? swnmq['errMsg'] : ''));
        } });
    }, cb805g;
  }(),
      g805 = function () {
    function x$ayv() {}tph80(x$ayv, 'laya.wx.mini.MiniLoader');var ef1zwj = x$ayv['prototype'];return ef1zwj['load'] = function (gb5ckd, onjswm, a9$yx, kbdr, i3217z) {
      a9$yx === void 0x0 && (a9$yx = !![]), i3217z === void 0x0 && (i3217z = ![]);var sqo46m = this;sqo46m['_url'] = gb5ckd;if (gb5ckd['indexOf']('data:image') === 0x0) sqo46m['_type'] = onjswm = 'image';else sqo46m['_type'] = onjswm || (onjswm = sqo46m['getTypeFromUrl'](gb5ckd));sqo46m['_cache'] = a9$yx, sqo46m['_data'] = null;var s4omq = 'ascii';if (gb5ckd['indexOf']('.fnt') != -0x1) s4omq = 'utf8';else onjswm == 'arraybuffer' && (s4omq = '');;var up8h0t = m6s4oq['getFileExtension'](gb5ckd);if (x$ayv['_fileTypeArr']['indexOf'](up8h0t) != -0x1) gdkcr['EnvConfig']['load']['call'](this, gb5ckd, onjswm, a9$yx, kbdr, i3217z);else {
        if (!xbkd['getFileInfo'](gb5ckd)) {
          if (gb5ckd['indexOf']('layaNativeDir/') != -0x1) {
            if (gdkcr['isZiYu']) {
              var hu06tp = xbkd['ziyuFileData'][gb5ckd];sqo46m['onLoaded'](hu06tp);return;
            } else {
              cosnole['log']('read read'), xbkd['read'](gb5ckd, s4omq, new kbdxyr(x$ayv, x$ayv['onReadNativeCallBack'], [s4omq, gb5ckd, onjswm, a9$yx, kbdr, i3217z, sqo46m]));return;
            }
          }if (rbdxy['rootPath'] == '') var sfojnw = gb5ckd;else sfojnw = gb5ckd['split'](rbdxy['rootPath'])[0x0];gb5ckd['indexOf']('http://') != -0x1 || gb5ckd['indexOf']('https://') != -0x1 ? gdkcr['EnvConfig']['load']['call'](sqo46m, gb5ckd, onjswm, a9$yx, kbdr, i3217z) : xbkd['readFile'](sfojnw, s4omq, new kbdxyr(x$ayv, x$ayv['onReadNativeCallBack'], [s4omq, gb5ckd, onjswm, a9$yx, kbdr, i3217z, sqo46m]), gb5ckd);
        } else gdkcr['EnvConfig']['load']['call'](this, gb5ckd, onjswm, a9$yx, kbdr, i3217z);
      }
    }, ef1zwj['resMgrLoad'] = function (yxarkd, krxbyd, dbrcgk, swfno, b08c, h4q6pu, g05ct) {
      dbrcgk === void 0x0 && (dbrcgk = 0x0), swfno === void 0x0 && (swfno = ![]), b08c === void 0x0 && (b08c = ![]), h4q6pu === void 0x0 && (h4q6pu = 0x0), g05ct === void 0x0 && (g05ct = 0x3), yxarkd['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', yxarkd), gdkcr['EnvConfig']['resMgrLoad'](yxarkd, (ps6q4, $xrdya, onfjs) => {
        x$ayv['prototype']['resMgrLoadCallBack'](ps6q4, $xrdya, onfjs, krxbyd);
      }, dbrcgk, swfno, b08c, h4q6pu, g05ct);
    }, ef1zwj['resMgrLoadCallBack'] = function (ht6p0, jew, av$_9l, gc08b5) {
      console['log']('buff:::', ht6p0, av$_9l, xbkd['fileNativeDir'] + '///' + xbkd['fileListName']), gc08b5(ht6p0, jew, av$_9l);
    }, ef1zwj['clearRes'] = function (al$, pq6m4s) {
      pq6m4s === void 0x0 && (pq6m4s = ![]);var ayr$dx = this;ayr$dx['clearRes'](al$, pq6m4s);var bgdkr = xbkd['getFileInfo'](al$);if (bgdkr && (al$['indexOf']('http://') != -0x1 || al$['indexOf']('https://') != -0x1)) {
        var drbgck = bgdkr['md5'],
            pu8th = xbkd['getFileNativePath'](drbgck);xbkd['remove'](pu8th);
      }
    }, x$ayv['onReadNativeCallBack'] = function (u5c8t0, oq4ms6, fnjewo, $rxv, kxrb, yrxdka, z3127i, osq6m, ykrdx) {
      $rxv === void 0x0 && ($rxv = !![]), yrxdka === void 0x0 && (yrxdka = ![]), osq6m === void 0x0 && (osq6m = 0x0);if (!osq6m) {
        var cgbdk;if (fnjewo == 'json' || fnjewo == 'atlas') cgbdk = gdkcr['getJson'](ykrdx['data']);else fnjewo == 'xml' ? cgbdk = m6s4oq['parseXMLFromString'](ykrdx['data']) : cgbdk = ykrdx['data'];z3127i['onLoaded'](cgbdk), !gdkcr['isZiYu'] && gdkcr['isPosMsgYu'] && fnjewo != 'arraybuffer' && wx['postMessage']({ 'url': oq4ms6, 'data': cgbdk, 'isLoad': !![] });
      } else osq6m == 0x1 && gdkcr['EnvConfig']['load']['call'](z3127i, oq4ms6, fnjewo, $rxv, kxrb, yrxdka);
    }, kgdcr(x$ayv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), x$ayv;
  }(),
      xbkd = function (ht4p6u) {
    function pht4() {
      pht4['__super']['call'](this);;
    }return tph80(pht4, 'laya.wx.mini.MiniFileMgr', ht4p6u), pht4['isLoadFile'] = function (arkyxd) {
      return pht4['_fileTypeArr']['indexOf'](arkyxd) != -0x1 ? !![] : ![];
    }, pht4['getFileInfo'] = function (z1fe23) {
      var ejf1z = z1fe23['split']('?')[0x0],
          qonwms = pht4['filesListObj'][ejf1z];if (qonwms == null) return null;else return qonwms;return null;
    }, pht4['onFileUpdate'] = function (sfwjno, krbdgx) {
      var ef3 = sfwjno['split']('/'),
          fwzen = ef3[ef3['length'] - 0x1],
          qsm64o = pht4['getFileInfo'](krbdgx);if (qsm64o == null) pht4['onSaveFile'](krbdgx, fwzen);else {
        if (qsm64o['readyUrl'] != krbdgx) pht4['remove'](fwzen, krbdgx);
      }
    }, pht4['exits'] = function (v9y$ax, dkyrxb) {
      var fwo = pht4['getFileNativePath'](v9y$ax);pht4['fs']['getFileInfo']({ 'filePath': fwo, 'success': function (a$drx) {
          dkyrxb != null && dkyrxb['runWith']([0x0, a$drx]);
        }, 'fail': function (ckdbgr) {
          dkyrxb != null && dkyrxb['runWith']([0x1, ckdbgr]);
        } });
    }, pht4['read'] = function (jz1wf, pth6u4, tcg0, $_9avl) {
      pth6u4 === void 0x0 && (pth6u4 = 'ascill'), $_9avl === void 0x0 && ($_9avl = '');var jfnwo;$_9avl != '' ? jfnwo = pht4['getFileNativePath'](jz1wf) : jfnwo = jz1wf, pht4['fs']['readFile']({ 'filePath': jfnwo, 'encoding': pth6u4, 'success': function (kdar) {
          tcg0 != null && tcg0['runWith']([0x0, kdar]);
        }, 'fail': function (jmon) {
          if (jmon && $_9avl != '') pht4['down']($_9avl, pth6u4, tcg0, $_9avl);else tcg0 != null && tcg0['runWith']([0x1]);
        } });
    }, pht4['readNativeFile'] = function (tg058, $9yavx) {
      pht4['fs']['readFile']({ 'filePath': tg058, 'encoding': '', 'success': function (t80u5h) {
          $9yavx != null && $9yavx['runWith']([0x0]);
        }, 'fail': function (gbrcd) {
          $9yavx != null && $9yavx['runWith']([0x1]);
        } });
    }, pht4['down'] = function (bgc850, l_v$9, qpm46, w1jze) {
      l_v$9 === void 0x0 && (l_v$9 = 'ascill'), w1jze === void 0x0 && (w1jze = '');var iz132 = pht4['getFileNativePath'](w1jze),
          z31jef = pht4['wxdown']({ 'url': bgc850, 'filePath': iz132, 'success': function (a$_9lv) {
          if (a$_9lv['statusCode'] === 0xc8) pht4['readFile'](a$_9lv['filePath'], l_v$9, qpm46, w1jze);
        }, 'fail': function (e7213z) {
          qpm46 != null && qpm46['runWith']([0x1, e7213z]);
        } });z31jef['onProgressUpdate'](function (g5k8cb) {
        qpm46 != null && qpm46['runWith']([0x2, g5k8cb['progress']]);
      });
    }, pht4['readFile'] = function (os64, uh05t8, jwnfo, axyv$) {
      uh05t8 === void 0x0 && (uh05t8 = 'ascill'), axyv$ === void 0x0 && (axyv$ = ''), pht4['fs']['readFile']({ 'filePath': os64, 'encoding': uh05t8, 'success': function (vl$a_) {
          if (os64['indexOf']('http://') != -0x1 || os64['indexOf']('https://') != -0x1) pht4['onFileUpdate'](os64, axyv$);jwnfo != null && jwnfo['runWith']([0x0, vl$a_]);
        }, 'fail': function ($rxy) {
          if ($rxy) jwnfo != null && jwnfo['runWith']([0x1, $rxy]);
        } });
    }, pht4['downImg'] = function (osm4, jfz1e3, fnoje) {
      fnoje === void 0x0 && (fnoje = '');var hut0 = pht4['wxdown']({ 'url': osm4, 'success': function (ms64qo) {
          ms64qo['statusCode'] === 0xc8 && pht4['copyFile'](ms64qo['tempFilePath'], fnoje, jfz1e3);
        }, 'fail': function (fe1zj3) {
          jfz1e3 != null && jfz1e3['runWith']([0x1, fe1zj3]);
        } });
    }, pht4['copyFile'] = function (wjzf, kgc58b, vx9$y) {
      var k5c8g = wjzf['split']('/'),
          mnwj = k5c8g[k5c8g['length'] - 0x1],
          qh6mp4 = kgc58b['split']('?')[0x0],
          nwosqm = pht4['getFileInfo'](kgc58b),
          fsojw = pht4['getFileNativePath'](mnwj);pht4['fs']['copyFile']({ 'srcPath': wjzf, 'destPath': fsojw, 'success': function (gt58) {
          if (!nwosqm) pht4['onSaveFile'](kgc58b, mnwj), vx9$y != null && vx9$y['runWith']([0x0]);else {
            if (nwosqm['readyUrl'] != kgc58b) pht4['remove'](mnwj, kgc58b, vx9$y);
          }
        }, 'fail': function (oqs6) {
          vx9$y != null && vx9$y['runWith']([0x1, oqs6]);
        } });
    }, pht4['getFileNativePath'] = function (kdbg5c) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + kdbg5c;
    }, pht4['remove'] = function (rxkyb, b5cdgk, l_9va) {
      b5cdgk === void 0x0 && (b5cdgk = '');var _vla = pht4['getFileInfo'](b5cdgk),
          zfw1j = pht4['getFileNativePath'](_vla['md5']);layv$9['loader']['clearRes'](_vla['readyUrl']), pht4['fs']['unlink']({ 'filePath': zfw1j, 'success': function (dgrk) {
          if (b5cdgk != '') pht4['onSaveFile'](b5cdgk, rxkyb);l_9va != null && l_9va['runWith']([0x0]);
        }, 'fail': function (znejfw) {} });
    }, pht4['onSaveFile'] = function (kxdrby, th5u) {
      var rvxya$ = kxdrby['split']('?')[0x0];pht4['filesListObj'][rvxya$] = { 'md5': th5u, 'readyUrl': kxdrby }, pht4['fs']['writeFile']({ 'filePath': pht4['fileNativeDir'] + '/' + pht4['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pht4['filesListObj']), 'success': function (kxdgbr) {
          console['log']('写入测试测试成功：', kxdgbr);
        }, 'fail': function (mwsnq) {
          console['log']('写入测试测试失败：', mwsnq);
        } });
    }, pht4['existDir'] = function (j1e3z, enfjzw) {
      pht4['fs']['mkdir']({ 'dirPath': j1e3z, 'success': function (on4sq) {
          enfjzw != null && enfjzw['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (qno4) {
          if (qno4['errMsg']['indexOf']('file already exists') != -0x1) pht4['readSync'](pht4['fileListName'], 'utf8', enfjzw);else enfjzw != null && enfjzw['runWith']([0x1, qno4]);
        } });
    }, pht4['readSync'] = function (f3zj1, bgkcd5, e2f1z, fjosw) {
      bgkcd5 === void 0x0 && (bgkcd5 = 'ascill'), fjosw === void 0x0 && (fjosw = '');var $9yxav = pht4['getFileNativePath'](f3zj1),
          kxdyra;try {
        kxdyra = pht4['fs']['readFileSync']($9yxav), e2f1z != null && e2f1z['runWith']([0x0, { 'data': kxdyra }]);
      } catch (wjze) {
        e2f1z != null && e2f1z['runWith']([0x1]);
      }
    }, pht4['readCache'] = function () {}, pht4['writeCache'] = function ($axvry) {
      var msqnow = readyUrl['split']('?')[0x0];pht4['filesListObj'][msqnow] = { 'md5': md5Name, 'readyUrl': readyUrl }, pht4['fs']['writeFile']({ 'filePath': pht4['fileNativeDir'] + '/' + pht4['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pht4['filesListObj']), 'success': function (rbkcgd) {}, 'fail': function (qsn4o) {} });
    }, pht4['setNativeFileDir'] = function (dykbrx) {
      pht4['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + dykbrx;
    }, pht4['filesListObj'] = {}, pht4['fileNativeDir'] = null, pht4['fileListName'] = 'layaairfiles.txt', pht4['ziyuFileData'] = {}, kgdcr(pht4, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), pht4;
  }(q6pm4s),
      wfojsn = function (raxyv$) {
    function njfeow() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], njfeow['__super']['call'](this), this['_sound'] = njfeow['_createSound']();
    }tph80(njfeow, 'laya.wx.mini.MiniSound', raxyv$);var p60ht = njfeow['prototype'];return p60ht['load'] = function (m4qps6) {
      var gb085 = this;m4qps6 = rbdxy['formatURL'](m4qps6), this['url'] = m4qps6;if (njfeow['_audioCache'][m4qps6]) {
        this['event']('complete');return;
      }function cb05g8() {
        if (njfeow['_null'] != undefined) gb085['_sound']['onCanplay'](njfeow['_null']), gb085['_sound']['onError'](njfeow['_null']);else try {
          gb085['_sound']['onCanplay'](null), gb085['_sound']['onError'](null), njfeow['_null'] = null;
        } catch (g5c8bk) {
          console['warn']('[wxmini] _clearSound:' + g5c8bk), gb085['_sound']['onCanplay'](wqsnom), gb085['_sound']['onError'](wqsnom), njfeow['_null'] = wqsnom;
        }
      }function t058() {
        cb05g8(), grcd['loaded'] = !![], grcd['event']('complete'), njfeow['_audioCache'][grcd['url']] = grcd;
      }function l_av(nj) {
        console['error']('errCode=' + nj['errCode'] + '  errMsg=' + nj['errMsg']), cb05g8(), grcd['event']('error');
      }function wqsnom() {}this['_sound']['onCanplay'](t058), this['_sound']['onError'](l_av), this['_sound']['src'] = m4qps6;var grcd = this;
    }, p60ht['play'] = function (ut50h8, u0tph8) {
      ut50h8 === void 0x0 && (ut50h8 = 0x0), u0tph8 === void 0x0 && (u0tph8 = 0x0);var v9l$a_;if (this['url'] == t085uh['_tMusic']) {
        if (!njfeow['_musicAudio']) njfeow['_musicAudio'] = njfeow['_createSound']();v9l$a_ = njfeow['_musicAudio'];
      } else v9l$a_ = njfeow['_createSound']();v9l$a_['src'] = this['url'];var tu06ph = new rgdkcb(v9l$a_);return tu06ph['url'] = this['url'], tu06ph['loops'] = u0tph8, tu06ph['startTime'] = ut50h8, tu06ph['play'](), t085uh['addChannel'](tu06ph), tu06ph;
    }, p60ht['dispose'] = function () {
      var $x9a = njfeow['_audioCache'][this['url']];$x9a && ($x9a['src'] = '', delete njfeow['_audioCache'][this['url']]);
    }, k85cbg(0x0, p60ht, 'duration', function () {
      return this['_sound']['duration'];
    }), njfeow['_createSound'] = function () {
      return njfeow['_id']++, gdkcr['window']['wx']['createInnerAudioContext']();
    }, njfeow['_musicAudio'] = null, njfeow['_id'] = 0x0, njfeow['_audioCache'] = {}, njfeow['_null'] = undefined, njfeow;
  }(q6pm4s),
      rgdkcb = function (u5) {
    function zef213(darkyx) {
      this['_audio'] = null, this['_onEnd'] = null, zef213['__super']['call'](this), this['_audio'] = darkyx, this['_onEnd'] = m6s4oq['bind'](this['__onEnd'], this), darkyx['onEnded'](this['_onEnd']);
    }tph80(zef213, 'laya.wx.mini.MiniSoundChannel', u5);var iz7 = zef213['prototype'];return iz7['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (layv$9['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, iz7['__onNull'] = function () {}, iz7['play'] = function () {
      this['isStopped'] = ![], t085uh['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, iz7['stop'] = function () {
      this['isStopped'] = !![], t085uh['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (zef213['_null'] != undefined) this['_audio']['onEnded'](zef213['_null']);else try {
        this['_audio']['onEnded'](null), zef213['_null'] = null;
      } catch (sqmnow) {
        console['warn']('[wxmini] stop:' + sqmnow), this['_audio']['onEnded'](m6s4oq['bind'](this['__onNull'], this)), zef213['_null'] = m6s4oq['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, iz7['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, iz7['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], t085uh['addChannel'](this), this['_audio']['play']();
    }, k85cbg(0x0, iz7, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), k85cbg(0x0, iz7, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), k85cbg(0x0, iz7, 'volume', function () {
      return 0x1;
    }, function (swnom) {}), zef213['_null'] = undefined, zef213;
  }(q4ph6m);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var yr$axv in Laya) {
    var vya9l = Laya[yr$axv];vya9l && vya9l['__isclass'] && (exports[yr$axv] = vya9l);
  }
});