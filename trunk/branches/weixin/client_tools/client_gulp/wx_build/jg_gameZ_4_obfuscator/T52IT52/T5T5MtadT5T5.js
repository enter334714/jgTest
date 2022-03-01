var B = wx.$B;
(function (window, document, bzh9) {
  var k96zbh = bzh9['un'],
      nug7sp = bzh9['uns'],
      yvx$ = bzh9['static'],
      _$0txd = bzh9['class'],
      png7u = bzh9['getset'],
      ieagp2 = bzh9['__newvec'],
      hk6s9 = laya['utils']['Browser'],
      apwei = laya['events']['Event'],
      _qtx = laya['events']['EventDispatcher'],
      vlkbz = laya['resource']['HTMLImage'],
      f5wr3 = laya['utils']['Handler'],
      zv4l0y = laya['display']['Input'],
      apw2ie = laya['net']['Loader'],
      l4byvz = laya['maths']['Matrix'],
      gpeus = laya['renders']['Render'],
      b49zkl = laya['utils']['RunDriver'],
      h9ns7 = laya['media']['Sound'],
      sh7nug = laya['media']['SoundChannel'],
      sgnu7h = laya['media']['SoundManager'],
      lk94zb = laya['display']['Stage'],
      h9s7 = laya['net']['URL'],
      rm1fj = laya['utils']['Utils'],
      hs9 = function () {
    function n7sgp() {}return _$0txd(n7sgp, 'laya.wx.mini.MiniAdpter'), n7sgp['getJson'] = function (ew2pi) {
      return JSON['parse'](ew2pi);
    }, n7sgp['init'] = function ($4vly0, r1jf8) {
      $4vly0 === void 0x0 && ($4vly0 = ![]), r1jf8 === void 0x0 && (r1jf8 = ![]);if (n7sgp['_inited']) return;n7sgp['window'] = window;if (n7sgp['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;n7sgp['_inited'] = !![], n7sgp['isZiYu'] = r1jf8, n7sgp['isPosMsgYu'] = $4vly0, n7sgp['EnvConfig'] = {}, !n7sgp['isZiYu'] && (seugn['setNativeFileDir']('/layaairGame'), seugn['existDir'](seugn['fileNativeDir'], f5wr3['create'](n7sgp, n7sgp['onMkdirCallBack']))), n7sgp['window']['focus'] = function () {}, bzh9['getUrlPath'] = function () {}, n7sgp['window']['logtime'] = function (lbyvz) {}, n7sgp['window']['alertTimeLog'] = function (xyt$) {}, n7sgp['window']['resetShareInfo'] = function () {}, n7sgp['window']['CanvasRenderingContext2D'] = function () {}, n7sgp['window']['CanvasRenderingContext2D']['prototype'] = n7sgp['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], n7sgp['window']['document']['body']['appendChild'] = function () {}, n7sgp['EnvConfig']['pixelRatioInt'] = 0x0, b49zkl['getPixelRatio'] = n7sgp['pixelRatio'], n7sgp['_preCreateElement'] = hk6s9['createElement'], hk6s9['createElement'] = n7sgp['createElement'], b49zkl['createShaderCondition'] = n7sgp['createShaderCondition'], rm1fj['parseXMLFromString'] = n7sgp['parseXMLFromString'], zv4l0y['_createInputElement'] = v40lyz['_createInputElement'], n7sgp['EnvConfig']['load'] = apw2ie['prototype']['load'], apw2ie['prototype']['load'] = m51jf['prototype']['load'], n7sgp['isZiYu'] && $4vly0 && wx['onMessage'](function (xq$d_t) {
        xq$d_t['isLoad'] && (seugn['ziyuFileData'][xq$d_t['url']] = xq$d_t['data']);
      });
    }, n7sgp['onMkdirCallBack'] = function (f1mj5r, f51mr) {
      if (!f1mj5r) seugn['filesListObj'] = JSON['parse'](f51mr['data']);
    }, n7sgp['pixelRatio'] = function () {
      if (!n7sgp['EnvConfig']['pixelRatioInt']) try {
        var l$ty = wx['getSystemInfoSync']();return n7sgp['EnvConfig']['pixelRatioInt'] = l$ty['pixelRatio'], l$ty = l$ty, l$ty['pixelRatio'];
      } catch (j51r) {}return n7sgp['EnvConfig']['pixelRatioInt'];
    }, n7sgp['createElement'] = function (jr5mo) {
      if (jr5mo == 'canvas') {
        var m1jr5;return n7sgp['idx'] == 0x1 ? n7sgp['isZiYu'] ? (m1jr5 = sharedCanvas, m1jr5['style'] = {}) : m1jr5 = window['canvas'] : m1jr5 = window['wx']['createCanvas'](), n7sgp['idx']++, m1jr5;
      } else {
        if (jr5mo == 'textarea' || jr5mo == 'input') return n7sgp['onCreateInput'](jr5mo);else {
          if (jr5mo == 'div') {
            var api2ge = n7sgp['_preCreateElement'](jr5mo);return api2ge['contains'] = function (bvkz) {
              return null;
            }, api2ge['removeChild'] = function (f32) {}, api2ge;
          } else return n7sgp['_preCreateElement'](jr5mo);
        }
      }
    }, n7sgp['onCreateInput'] = function ($_0dx) {
      var rfaw38 = n7sgp['_preCreateElement']($_0dx);return rfaw38['focus'] = v40lyz['wxinputFocus'], rfaw38['blur'] = v40lyz['wxinputblur'], rfaw38['style'] = {}, rfaw38['value'] = 0x0, rfaw38['parentElement'] = {}, rfaw38['placeholder'] = {}, rfaw38['type'] = {}, rfaw38['setColor'] = function (bzyv4) {}, rfaw38['setType'] = function (e2giap) {}, rfaw38['setFontFace'] = function (n7gps) {}, rfaw38['addEventListener'] = function (zlbk9) {}, rfaw38['contains'] = function (ae2pg) {
        return null;
      }, rfaw38['removeChild'] = function (geipa) {}, rfaw38;
    }, n7sgp['createShaderCondition'] = function (tq$d_) {
      var $x0vty = this,
          i2wape = function () {
        var ipunge = tq$d_;return $x0vty[tq$d_['replace']('this.', '')];
      };return i2wape;
    }, n7sgp['EnvConfig'] = null, n7sgp['window'] = null, n7sgp['_preCreateElement'] = null, n7sgp['_inited'] = ![], n7sgp['wxRequest'] = null, n7sgp['systemInfo'] = null, n7sgp['version'] = '0.0.1', n7sgp['isZiYu'] = ![], n7sgp['isPosMsgYu'] = ![], n7sgp['parseXMLFromString'] = function (w8i3) {
      var r8j5, h6ks9;w8i3 = w8i3['replace'](/>\s+</g, '><');try {
        r8j5 = new window['Parser']['DOMParser']()['parseFromString'](w8i3, 'text/xml');
      } catch (shgnu7) {
        throw '需要引入xml解析库文件';
      }return r8j5;
    }, n7sgp['idx'] = 0x1, n7sgp;
  }(),
      $d0xt_ = function () {
    function dxq() {}_$0txd(dxq, 'laya.wx.mini.MiniImage');var s7n6hu = dxq['prototype'];return s7n6hu['_loadImage'] = function (n7s96) {
      var e2w = this,
          z49k6b = ![];n7s96['indexOf']('layaNativeDir/') == -0x1 && (z49k6b = !![], n7s96 = h9s7['formatURL'](n7s96));if (!seugn['getFileInfo'](n7s96)) {
        if (n7s96['indexOf']('http://') != -0x1 || n7s96['indexOf']('https://') != -0x1) seugn['downImg'](n7s96, new f5wr3(dxq, dxq['onDownImgCallBack'], [n7s96, e2w]), n7s96);else dxq['onCreateImage'](n7s96, e2w, !![]);
      } else dxq['onCreateImage'](n7s96, e2w, !z49k6b);
    }, dxq['onDownImgCallBack'] = function (zkl4bv, d_t0$, r15mj) {
      if (!r15mj) dxq['onCreateImage'](zkl4bv, d_t0$);else d_t0$['onError'](null);
    }, dxq['onCreateImage'] = function (s76h9k, up2eg, t0_x$y) {
      t0_x$y === void 0x0 && (t0_x$y = ![]);var x0_yt;if (!t0_x$y) {
        var $ltvy = seugn['getFileInfo'](s76h9k),
            dtx$q = $ltvy['md5'];x0_yt = seugn['getFileNativePath'](dtx$q);
      } else x0_yt = s76h9k;if (up2eg['imgCache'] == null) up2eg['imgCache'] = {};var ytx$0;function usgh7() {
        ytx$0['onload'] = null, ytx$0['onerror'] = null, delete up2eg['imgCache'][s76h9k];
      };var vtyl0$ = function () {
        usgh7(), up2eg['onLoaded'](ytx$0);
      },
          kbzh96 = function () {
        usgh7(), up2eg['event']('error', 'Load image failed');
      };up2eg['_type'] == 'nativeimage' ? (ytx$0 = new hk6s9['window']['Image'](), ytx$0['crossOrigin'] = '', ytx$0['onload'] = vtyl0$, ytx$0['onerror'] = kbzh96, ytx$0['src'] = x0_yt, up2eg['imgCache'][s76h9k] = ytx$0) : new vlkbz['create'](x0_yt, { 'onload': vtyl0$, 'onerror': kbzh96, 'onCreate': function (t$xd_0) {
          ytx$0 = t$xd_0, up2eg['imgCache'][s76h9k] = t$xd_0;
        } });
    }, dxq;
  }(),
      v40lyz = function () {
    function w2() {}return _$0txd(w2, 'laya.wx.mini.MiniInput'), w2['_createInputElement'] = function () {
      zv4l0y['_initInput'](zv4l0y['area'] = hk6s9['createElement']('textarea')), zv4l0y['_initInput'](zv4l0y['input'] = hk6s9['createElement']('input')), zv4l0y['inputContainer'] = hk6s9['createElement']('div'), zv4l0y['inputContainer']['style']['position'] = 'absolute', zv4l0y['inputContainer']['style']['zIndex'] = 0x186a0, hk6s9['container']['appendChild'](zv4l0y['inputContainer']), zv4l0y['inputContainer']['setPos'] = function (a328wf, l40vyz) {
        zv4l0y['inputContainer']['style']['left'] = a328wf + 'px', zv4l0y['inputContainer']['style']['top'] = l40vyz + 'px';
      }, bzh9['stage']['on']('resize', null, w2['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (i3awe) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), sgnu7h['_soundClass'] = h976ns, sgnu7h['_musicClass'] = h976ns;
    }, w2['_onStageResize'] = function () {
      var tx_0$ = bzh9['stage']['_canvasTransform']['identity']();tx_0$['scale'](hk6s9['width'] / gpeus['canvas']['width'] / b49zkl['getPixelRatio'](), hk6s9['height'] / gpeus['canvas']['height'] / b49zkl['getPixelRatio']());
    }, w2['wxinputFocus'] = function (aw2pei) {
      var ylv4b = zv4l0y['inputElement']['target'];if (ylv4b && !ylv4b['editable']) return;hs9['window']['wx']['offKeyboardConfirm'](), hs9['window']['wx']['offKeyboardInput'](), hs9['window']['wx']['showKeyboard']({ 'defaultValue': ylv4b['text'], 'maxLength': ylv4b['maxChars'], 'multiple': ylv4b['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ipaw) {}, 'fail': function (r38fj) {} }), hs9['window']['wx']['onKeyboardConfirm'](function (e3wi2a) {
        var t$dxq = e3wi2a ? e3wi2a['value'] : '';ylv4b['text'] = t$dxq, ylv4b['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), hs9['window']['wx']['onKeyboardInput'](function (ra3f) {
        var jf51r = ra3f ? ra3f['value'] : '';if (!ylv4b['multiline']) {
          if (jf51r['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ylv4b['text'] = jf51r, ylv4b['event']('input');
      });
    }, w2['inputEnter'] = function () {
      zv4l0y['inputElement']['target']['focus'] = ![];
    }, w2['wxinputblur'] = function () {
      w2['hideKeyboard']();
    }, w2['hideKeyboard'] = function () {
      hs9['window']['wx']['offKeyboardConfirm'](), hs9['window']['wx']['offKeyboardInput'](), hs9['window']['wx']['hideKeyboard']({ 'success': function (gusn) {
          console['log']('隐藏键盘');
        }, 'fail': function (vyt0$) {
          console['log']('隐藏键盘出错:' + (vyt0$ ? vyt0$['errMsg'] : ''));
        } });
    }, w2;
  }(),
      m51jf = function () {
    function s7nguh() {}_$0txd(s7nguh, 'laya.wx.mini.MiniLoader');var pgnsu = s7nguh['prototype'];return pgnsu['load'] = function (sgue, y_x0t, vyx, $dt_x, $tv0yl) {
      vyx === void 0x0 && (vyx = !![]), $tv0yl === void 0x0 && ($tv0yl = ![]);var epga2 = this;epga2['_url'] = sgue;if (sgue['indexOf']('data:image') === 0x0) epga2['_type'] = y_x0t = 'image';else epga2['_type'] = y_x0t || (y_x0t = epga2['getTypeFromUrl'](sgue));epga2['_cache'] = vyx, epga2['_data'] = null;var e2upi = 'ascii';if (sgue['indexOf']('.fnt') != -0x1) e2upi = 'utf8';else y_x0t == 'arraybuffer' && (e2upi = '');;var supn7 = rm1fj['getFileExtension'](sgue);if (s7nguh['_fileTypeArr']['indexOf'](supn7) != -0x1) hs9['EnvConfig']['load']['call'](this, sgue, y_x0t, vyx, $dt_x, $tv0yl);else {
        if (!seugn['getFileInfo'](sgue)) {
          if (sgue['indexOf']('layaNativeDir/') != -0x1) {
            if (hs9['isZiYu']) {
              var snpegu = seugn['ziyuFileData'][sgue];epga2['onLoaded'](snpegu);return;
            } else {
              cosnole['log']('read read'), seugn['read'](sgue, e2upi, new f5wr3(s7nguh, s7nguh['onReadNativeCallBack'], [e2upi, sgue, y_x0t, vyx, $dt_x, $tv0yl, epga2]));return;
            }
          }if (h9s7['rootPath'] == '') var b96h7k = sgue;else b96h7k = sgue['split'](h9s7['rootPath'])[0x0];sgue['indexOf']('http://') != -0x1 || sgue['indexOf']('https://') != -0x1 ? hs9['EnvConfig']['load']['call'](epga2, sgue, y_x0t, vyx, $dt_x, $tv0yl) : seugn['readFile'](b96h7k, e2upi, new f5wr3(s7nguh, s7nguh['onReadNativeCallBack'], [e2upi, sgue, y_x0t, vyx, $dt_x, $tv0yl, epga2]), sgue);
        } else hs9['EnvConfig']['load']['call'](this, sgue, y_x0t, vyx, $dt_x, $tv0yl);
      }
    }, pgnsu['resMgrLoad'] = function (w853, kzb6h, l4vbzy, peuign, $xty0_, negupi, jf51rm) {
      l4vbzy === void 0x0 && (l4vbzy = 0x0), peuign === void 0x0 && (peuign = ![]), $xty0_ === void 0x0 && ($xty0_ = ![]), negupi === void 0x0 && (negupi = 0x0), jf51rm === void 0x0 && (jf51rm = 0x3), w853['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', w853), hs9['EnvConfig']['resMgrLoad'](w853, (j583f, d$_0tx, vz4y) => {
        s7nguh['prototype']['resMgrLoadCallBack'](j583f, d$_0tx, vz4y, kzb6h);
      }, l4vbzy, peuign, $xty0_, negupi, jf51rm);
    }, pgnsu['resMgrLoadCallBack'] = function (uip2g, z496bk, z94kb, ylz4b) {
      console['log']('buff:::', uip2g, z94kb, seugn['fileNativeDir'] + '///' + seugn['fileListName']), ylz4b(uip2g, z496bk, z94kb);
    }, pgnsu['clearRes'] = function (lb94z, vtl0$y) {
      vtl0$y === void 0x0 && (vtl0$y = ![]);var iue2g = this;iue2g['clearRes'](lb94z, vtl0$y);var genpiu = seugn['getFileInfo'](lb94z);if (genpiu && (lb94z['indexOf']('http://') != -0x1 || lb94z['indexOf']('https://') != -0x1)) {
        var gp7nus = genpiu['md5'],
            k97sh6 = seugn['getFileNativePath'](gp7nus);seugn['remove'](k97sh6);
      }
    }, s7nguh['onReadNativeCallBack'] = function (kl4b9, w32ie, $lv0y4, kv4zb, j15rom, fj1rm, y_$t0, epgia, tv$ly) {
      kv4zb === void 0x0 && (kv4zb = !![]), fj1rm === void 0x0 && (fj1rm = ![]), epgia === void 0x0 && (epgia = 0x0);if (!epgia) {
        var z9klb4;if ($lv0y4 == 'json' || $lv0y4 == 'atlas') z9klb4 = hs9['getJson'](tv$ly['data']);else $lv0y4 == 'xml' ? z9klb4 = rm1fj['parseXMLFromString'](tv$ly['data']) : z9klb4 = tv$ly['data'];y_$t0['onLoaded'](z9klb4), !hs9['isZiYu'] && hs9['isPosMsgYu'] && $lv0y4 != 'arraybuffer' && wx['postMessage']({ 'url': w32ie, 'data': z9klb4, 'isLoad': !![] });
      } else epgia == 0x1 && hs9['EnvConfig']['load']['call'](y_$t0, w32ie, $lv0y4, kv4zb, j15rom, fj1rm);
    }, yvx$(s7nguh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), s7nguh;
  }(),
      seugn = function (eg2ip) {
    function vl04$() {
      vl04$['__super']['call'](this);;
    }return _$0txd(vl04$, 'laya.wx.mini.MiniFileMgr', eg2ip), vl04$['isLoadFile'] = function (k96b) {
      return vl04$['_fileTypeArr']['indexOf'](k96b) != -0x1 ? !![] : ![];
    }, vl04$['getFileInfo'] = function (aiw28) {
      var jm1 = aiw28['split']('?')[0x0],
          e3a = vl04$['filesListObj'][jm1];if (e3a == null) return null;else return e3a;return null;
    }, vl04$['onFileUpdate'] = function (yv4lz, yl4zv) {
      var s9h7n6 = yv4lz['split']('/'),
          $dt_qx = s9h7n6[s9h7n6['length'] - 0x1],
          ng7up = vl04$['getFileInfo'](yl4zv);if (ng7up == null) vl04$['onSaveFile'](yl4zv, $dt_qx);else {
        if (ng7up['readyUrl'] != yl4zv) vl04$['remove']($dt_qx, yl4zv);
      }
    }, vl04$['exits'] = function (aiep2g, m5j1f) {
      var faw3r = vl04$['getFileNativePath'](aiep2g);vl04$['fs']['getFileInfo']({ 'filePath': faw3r, 'success': function (mjo51) {
          m5j1f != null && m5j1f['runWith']([0x0, mjo51]);
        }, 'fail': function ($yl4v) {
          m5j1f != null && m5j1f['runWith']([0x1, $yl4v]);
        } });
    }, vl04$['read'] = function (i3e2w, ushg, zv4ybl, fr8wa) {
      ushg === void 0x0 && (ushg = 'ascill'), fr8wa === void 0x0 && (fr8wa = '');var h6ns9;fr8wa != '' ? h6ns9 = vl04$['getFileNativePath'](i3e2w) : h6ns9 = i3e2w, vl04$['fs']['readFile']({ 'filePath': h6ns9, 'encoding': ushg, 'success': function (giep2u) {
          zv4ybl != null && zv4ybl['runWith']([0x0, giep2u]);
        }, 'fail': function ($0xtyv) {
          if ($0xtyv && fr8wa != '') vl04$['down'](fr8wa, ushg, zv4ybl, fr8wa);else zv4ybl != null && zv4ybl['runWith']([0x1]);
        } });
    }, vl04$['readNativeFile'] = function (x_ty0$, nipgeu) {
      vl04$['fs']['readFile']({ 'filePath': x_ty0$, 'encoding': '', 'success': function (pgiue) {
          nipgeu != null && nipgeu['runWith']([0x0]);
        }, 'fail': function (vy0$tx) {
          nipgeu != null && nipgeu['runWith']([0x1]);
        } });
    }, vl04$['down'] = function (i2pae, y$tvx, y$v40l, h9s7k6) {
      y$tvx === void 0x0 && (y$tvx = 'ascill'), h9s7k6 === void 0x0 && (h9s7k6 = '');var t0vx$ = vl04$['getFileNativePath'](h9s7k6),
          nu7s6 = vl04$['wxdown']({ 'url': i2pae, 'filePath': t0vx$, 'success': function (uineg) {
          if (uineg['statusCode'] === 0xc8) vl04$['readFile'](uineg['filePath'], y$tvx, y$v40l, h9s7k6);
        }, 'fail': function (y4vblz) {
          y$v40l != null && y$v40l['runWith']([0x1, y4vblz]);
        } });nu7s6['onProgressUpdate'](function (zl4y) {
        y$v40l != null && y$v40l['runWith']([0x2, zl4y['progress']]);
      });
    }, vl04$['readFile'] = function (suh7n6, n7h6u, g7suhn, zbv4y) {
      n7h6u === void 0x0 && (n7h6u = 'ascill'), zbv4y === void 0x0 && (zbv4y = ''), vl04$['fs']['readFile']({ 'filePath': suh7n6, 'encoding': n7h6u, 'success': function (peu2gi) {
          if (suh7n6['indexOf']('http://') != -0x1 || suh7n6['indexOf']('https://') != -0x1) vl04$['onFileUpdate'](suh7n6, zbv4y);g7suhn != null && g7suhn['runWith']([0x0, peu2gi]);
        }, 'fail': function (hk79b) {
          if (hk79b) g7suhn != null && g7suhn['runWith']([0x1, hk79b]);
        } });
    }, vl04$['downImg'] = function (hs76, hbzk6, mjr5o1) {
      mjr5o1 === void 0x0 && (mjr5o1 = '');var rjf158 = vl04$['wxdown']({ 'url': hs76, 'success': function (vblk4z) {
          vblk4z['statusCode'] === 0xc8 && vl04$['copyFile'](vblk4z['tempFilePath'], mjr5o1, hbzk6);
        }, 'fail': function (nu7g) {
          hbzk6 != null && hbzk6['runWith']([0x1, nu7g]);
        } });
    }, vl04$['copyFile'] = function (zvbl4k, npiegu, k9h6s) {
      var s697hk = zvbl4k['split']('/'),
          k769bh = s697hk[s697hk['length'] - 0x1],
          puesgn = npiegu['split']('?')[0x0],
          xqd_ = vl04$['getFileInfo'](npiegu),
          u76hns = vl04$['getFileNativePath'](k769bh);vl04$['fs']['copyFile']({ 'srcPath': zvbl4k, 'destPath': u76hns, 'success': function (bzk649) {
          if (!xqd_) vl04$['onSaveFile'](npiegu, k769bh), k9h6s != null && k9h6s['runWith']([0x0]);else {
            if (xqd_['readyUrl'] != npiegu) vl04$['remove'](k769bh, npiegu, k9h6s);
          }
        }, 'fail': function (pniug) {
          k9h6s != null && k9h6s['runWith']([0x1, pniug]);
        } });
    }, vl04$['getFileNativePath'] = function (ly0zv4) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ly0zv4;
    }, vl04$['remove'] = function (uns7hg, rf385, z9h) {
      rf385 === void 0x0 && (rf385 = '');var yvlzb4 = vl04$['getFileInfo'](rf385),
          q_$ = vl04$['getFileNativePath'](yvlzb4['md5']);bzh9['loader']['clearRes'](yvlzb4['readyUrl']), vl04$['fs']['unlink']({ 'filePath': q_$, 'success': function (ai2gpe) {
          if (rf385 != '') vl04$['onSaveFile'](rf385, uns7hg);z9h != null && z9h['runWith']([0x0]);
        }, 'fail': function (wai83) {} });
    }, vl04$['onSaveFile'] = function (jmr1f, n697) {
      var rj835 = jmr1f['split']('?')[0x0];vl04$['filesListObj'][rj835] = { 'md5': n697, 'readyUrl': jmr1f }, vl04$['fs']['writeFile']({ 'filePath': vl04$['fileNativeDir'] + '/' + vl04$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](vl04$['filesListObj']), 'success': function (b9k64z) {
          console['log']('写入测试测试成功：', b9k64z);
        }, 'fail': function (gi2eup) {
          console['log']('写入测试测试失败：', gi2eup);
        } });
    }, vl04$['existDir'] = function (y$l4v, f3war) {
      vl04$['fs']['mkdir']({ 'dirPath': y$l4v, 'success': function (j51rm) {
          f3war != null && f3war['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (nh79s6) {
          if (nh79s6['errMsg']['indexOf']('file already exists') != -0x1) vl04$['readSync'](vl04$['fileListName'], 'utf8', f3war);else f3war != null && f3war['runWith']([0x1, nh79s6]);
        } });
    }, vl04$['readSync'] = function (fr8w, snu7gh, gpnus7, kh6b9) {
      snu7gh === void 0x0 && (snu7gh = 'ascill'), kh6b9 === void 0x0 && (kh6b9 = '');var r5oj = vl04$['getFileNativePath'](fr8w),
          vy0tx;try {
        vy0tx = vl04$['fs']['readFileSync'](r5oj), gpnus7 != null && gpnus7['runWith']([0x0, { 'data': vy0tx }]);
      } catch (f328wa) {
        gpnus7 != null && gpnus7['runWith']([0x1]);
      }
    }, vl04$['readCache'] = function () {}, vl04$['writeCache'] = function (s76n9) {
      var yblv = readyUrl['split']('?')[0x0];vl04$['filesListObj'][yblv] = { 'md5': md5Name, 'readyUrl': readyUrl }, vl04$['fs']['writeFile']({ 'filePath': vl04$['fileNativeDir'] + '/' + vl04$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](vl04$['filesListObj']), 'success': function ($dxt) {}, 'fail': function (bk79) {} });
    }, vl04$['setNativeFileDir'] = function (f8w3ra) {
      vl04$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + f8w3ra;
    }, vl04$['filesListObj'] = {}, vl04$['fileNativeDir'] = null, vl04$['fileListName'] = 'layaairfiles.txt', vl04$['ziyuFileData'] = {}, yvx$(vl04$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), vl04$;
  }(_qtx),
      h976ns = function (lzy) {
    function tx_qd$() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], tx_qd$['__super']['call'](this), this['_sound'] = tx_qd$['_createSound']();
    }_$0txd(tx_qd$, 'laya.wx.mini.MiniSound', lzy);var lv0z4y = tx_qd$['prototype'];return lv0z4y['load'] = function (v$xty0) {
      var dx0t_ = this;v$xty0 = h9s7['formatURL'](v$xty0), this['url'] = v$xty0;if (tx_qd$['_audioCache'][v$xty0]) {
        this['event']('complete');return;
      }function unsgpe() {
        if (tx_qd$['_null'] != undefined) dx0t_['_sound']['onCanplay'](tx_qd$['_null']), dx0t_['_sound']['onError'](tx_qd$['_null']);else try {
          dx0t_['_sound']['onCanplay'](null), dx0t_['_sound']['onError'](null), tx_qd$['_null'] = null;
        } catch (vyz40l) {
          console['warn']('[wxmini] _clearSound:' + vyz40l), dx0t_['_sound']['onCanplay'](u2egip), dx0t_['_sound']['onError'](u2egip), tx_qd$['_null'] = u2egip;
        }
      }function gn7() {
        unsgpe(), f5m1rj['loaded'] = !![], f5m1rj['event']('complete'), tx_qd$['_audioCache'][f5m1rj['url']] = f5m1rj;
      }function peag(z9bk4) {
        console['error']('errCode=' + z9bk4['errCode'] + '  errMsg=' + z9bk4['errMsg']), unsgpe(), f5m1rj['event']('error');
      }function u2egip() {}this['_sound']['onCanplay'](gn7), this['_sound']['onError'](peag), this['_sound']['src'] = v$xty0;var f5m1rj = this;
    }, lv0z4y['play'] = function (v4bly, u2egpi) {
      v4bly === void 0x0 && (v4bly = 0x0), u2egpi === void 0x0 && (u2egpi = 0x0);var ylvt0;if (this['url'] == sgnu7h['_tMusic']) {
        if (!tx_qd$['_musicAudio']) tx_qd$['_musicAudio'] = tx_qd$['_createSound']();ylvt0 = tx_qd$['_musicAudio'];
      } else ylvt0 = tx_qd$['_createSound']();ylvt0['src'] = this['url'];var _txd = new ugps(ylvt0);return _txd['url'] = this['url'], _txd['loops'] = u2egpi, _txd['startTime'] = v4bly, _txd['play'](), sgnu7h['addChannel'](_txd), _txd;
    }, lv0z4y['dispose'] = function () {
      var d0x_t$ = tx_qd$['_audioCache'][this['url']];d0x_t$ && (d0x_t$['src'] = '', delete tx_qd$['_audioCache'][this['url']]);
    }, png7u(0x0, lv0z4y, 'duration', function () {
      return this['_sound']['duration'];
    }), tx_qd$['_createSound'] = function () {
      return tx_qd$['_id']++, hs9['window']['wx']['createInnerAudioContext']();
    }, tx_qd$['_musicAudio'] = null, tx_qd$['_id'] = 0x0, tx_qd$['_audioCache'] = {}, tx_qd$['_null'] = undefined, tx_qd$;
  }(_qtx),
      ugps = function (yl$t0v) {
    function wae3(h76n9s) {
      this['_audio'] = null, this['_onEnd'] = null, wae3['__super']['call'](this), this['_audio'] = h76n9s, this['_onEnd'] = rm1fj['bind'](this['__onEnd'], this), h76n9s['onEnded'](this['_onEnd']);
    }_$0txd(wae3, 'laya.wx.mini.MiniSoundChannel', yl$t0v);var faw83 = wae3['prototype'];return faw83['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (bzh9['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, faw83['__onNull'] = function () {}, faw83['play'] = function () {
      this['isStopped'] = ![], sgnu7h['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, faw83['stop'] = function () {
      this['isStopped'] = !![], sgnu7h['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (wae3['_null'] != undefined) this['_audio']['onEnded'](wae3['_null']);else try {
        this['_audio']['onEnded'](null), wae3['_null'] = null;
      } catch ($_xtd) {
        console['warn']('[wxmini] stop:' + $_xtd), this['_audio']['onEnded'](rm1fj['bind'](this['__onNull'], this)), wae3['_null'] = rm1fj['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, faw83['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, faw83['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], sgnu7h['addChannel'](this), this['_audio']['play']();
    }, png7u(0x0, faw83, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), png7u(0x0, faw83, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), png7u(0x0, faw83, 'volume', function () {
      return 0x1;
    }, function (bh96) {}), wae3['_null'] = undefined, wae3;
  }(sh7nug);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var pgesu in Laya) {
    var or1j5 = Laya[pgesu];or1j5 && or1j5['__isclass'] && (exports[pgesu] = or1j5);
  }
});