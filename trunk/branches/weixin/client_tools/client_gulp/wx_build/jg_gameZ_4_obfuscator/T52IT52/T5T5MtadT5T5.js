var B = wx.$B;
(function (window, document, ns67) {
  var uniepg = ns67['un'],
      iae3w = ns67['uns'],
      z9bkh = ns67['static'],
      ae2piw = ns67['class'],
      gsnh7 = ns67['getset'],
      w53f8 = ns67['__newvec'],
      tq$x = laya['utils']['Browser'],
      kbv4zl = laya['events']['Event'],
      apwei2 = laya['events']['EventDispatcher'],
      h796ks = laya['resource']['HTMLImage'],
      gnpu7 = laya['utils']['Handler'],
      j5rf = laya['display']['Input'],
      nseg = laya['net']['Loader'],
      ytl = laya['maths']['Matrix'],
      x$d_ = laya['renders']['Render'],
      vyl4bz = laya['utils']['RunDriver'],
      hns67 = laya['media']['Sound'],
      fa83r = laya['media']['SoundChannel'],
      qd_$tx = laya['media']['SoundManager'],
      kz9b4 = laya['display']['Stage'],
      ybzvl4 = laya['net']['URL'],
      pnugei = laya['utils']['Utils'],
      jf51rm = function () {
    function vkb4() {}return ae2piw(vkb4, 'laya.wx.mini.MiniAdpter'), vkb4['getJson'] = function (j5o1mr) {
      return JSON['parse'](j5o1mr);
    }, vkb4['init'] = function (y4bv, kb6h79) {
      y4bv === void 0x0 && (y4bv = ![]), kb6h79 === void 0x0 && (kb6h79 = ![]);if (vkb4['_inited']) return;vkb4['window'] = window;if (vkb4['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;vkb4['_inited'] = !![], vkb4['isZiYu'] = kb6h79, vkb4['isPosMsgYu'] = y4bv, vkb4['EnvConfig'] = {}, !vkb4['isZiYu'] && (q$tdx_['setNativeFileDir']('/layaairGame'), q$tdx_['existDir'](q$tdx_['fileNativeDir'], gnpu7['create'](vkb4, vkb4['onMkdirCallBack']))), vkb4['window']['focus'] = function () {}, ns67['getUrlPath'] = function () {}, vkb4['window']['logtime'] = function (l04zv) {}, vkb4['window']['alertTimeLog'] = function (d$0t_) {}, vkb4['window']['resetShareInfo'] = function () {}, vkb4['window']['CanvasRenderingContext2D'] = function () {}, vkb4['window']['CanvasRenderingContext2D']['prototype'] = vkb4['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], vkb4['window']['document']['body']['appendChild'] = function () {}, vkb4['EnvConfig']['pixelRatioInt'] = 0x0, vyl4bz['getPixelRatio'] = vkb4['pixelRatio'], vkb4['_preCreateElement'] = tq$x['createElement'], tq$x['createElement'] = vkb4['createElement'], vyl4bz['createShaderCondition'] = vkb4['createShaderCondition'], pnugei['parseXMLFromString'] = vkb4['parseXMLFromString'], j5rf['_createInputElement'] = x0td_$['_createInputElement'], vkb4['EnvConfig']['load'] = nseg['prototype']['load'], nseg['prototype']['load'] = nhs69['prototype']['load'], vkb4['isZiYu'] && y4bv && wx['onMessage'](function (hs79) {
        hs79['isLoad'] && (q$tdx_['ziyuFileData'][hs79['url']] = hs79['data']);
      });
    }, vkb4['onMkdirCallBack'] = function (iw3ae, _tqd$) {
      if (!iw3ae) q$tdx_['filesListObj'] = JSON['parse'](_tqd$['data']);
    }, vkb4['pixelRatio'] = function () {
      if (!vkb4['EnvConfig']['pixelRatioInt']) try {
        var eaig2p = wx['getSystemInfoSync']();return vkb4['EnvConfig']['pixelRatioInt'] = eaig2p['pixelRatio'], eaig2p = eaig2p, eaig2p['pixelRatio'];
      } catch (y0v4z) {}return vkb4['EnvConfig']['pixelRatioInt'];
    }, vkb4['createElement'] = function (yl0$4) {
      if (yl0$4 == 'canvas') {
        var gei2;return vkb4['idx'] == 0x1 ? vkb4['isZiYu'] ? (gei2 = sharedCanvas, gei2['style'] = {}) : gei2 = window['canvas'] : gei2 = window['wx']['createCanvas'](), vkb4['idx']++, gei2;
      } else {
        if (yl0$4 == 'textarea' || yl0$4 == 'input') return vkb4['onCreateInput'](yl0$4);else {
          if (yl0$4 == 'div') {
            var $tx_0y = vkb4['_preCreateElement'](yl0$4);return $tx_0y['contains'] = function ($yt0) {
              return null;
            }, $tx_0y['removeChild'] = function (n76h) {}, $tx_0y;
          } else return vkb4['_preCreateElement'](yl0$4);
        }
      }
    }, vkb4['onCreateInput'] = function (s7np) {
      var $yxt0v = vkb4['_preCreateElement'](s7np);return $yxt0v['focus'] = x0td_$['wxinputFocus'], $yxt0v['blur'] = x0td_$['wxinputblur'], $yxt0v['style'] = {}, $yxt0v['value'] = 0x0, $yxt0v['parentElement'] = {}, $yxt0v['placeholder'] = {}, $yxt0v['type'] = {}, $yxt0v['setColor'] = function (l9z) {}, $yxt0v['setType'] = function (r3aw) {}, $yxt0v['setFontFace'] = function (iue2p) {}, $yxt0v['addEventListener'] = function (klzb4v) {}, $yxt0v['contains'] = function (a2e3) {
        return null;
      }, $yxt0v['removeChild'] = function (dq_t$x) {}, $yxt0v;
    }, vkb4['createShaderCondition'] = function (iunp) {
      var gsune = this,
          gush = function () {
        var p2aegi = iunp;return gsune[iunp['replace']('this.', '')];
      };return gush;
    }, vkb4['EnvConfig'] = null, vkb4['window'] = null, vkb4['_preCreateElement'] = null, vkb4['_inited'] = ![], vkb4['wxRequest'] = null, vkb4['systemInfo'] = null, vkb4['version'] = '0.0.1', vkb4['isZiYu'] = ![], vkb4['isPosMsgYu'] = ![], vkb4['parseXMLFromString'] = function (t$xd_) {
      var y4lvb, we32i;t$xd_ = t$xd_['replace'](/>\s+</g, '><');try {
        y4lvb = new window['Parser']['DOMParser']()['parseFromString'](t$xd_, 'text/xml');
      } catch (a2ipew) {
        throw '需要引入xml解析库文件';
      }return y4lvb;
    }, vkb4['idx'] = 0x1, vkb4;
  }(),
      nhg7us = function () {
    function f8jr15() {}ae2piw(f8jr15, 'laya.wx.mini.MiniImage');var hk96 = f8jr15['prototype'];return hk96['_loadImage'] = function (vlty0) {
      var uenpgi = this,
          zbh9k6 = ![];vlty0['indexOf']('layaNativeDir/') == -0x1 && (zbh9k6 = !![], vlty0 = ybzvl4['formatURL'](vlty0));if (!q$tdx_['getFileInfo'](vlty0)) {
        if (vlty0['indexOf']('http://') != -0x1 || vlty0['indexOf']('https://') != -0x1) q$tdx_['downImg'](vlty0, new gnpu7(f8jr15, f8jr15['onDownImgCallBack'], [vlty0, uenpgi]), vlty0);else f8jr15['onCreateImage'](vlty0, uenpgi, !![]);
      } else f8jr15['onCreateImage'](vlty0, uenpgi, !zbh9k6);
    }, f8jr15['onDownImgCallBack'] = function (h7k6s9, psu7gn, fr38j) {
      if (!fr38j) f8jr15['onCreateImage'](h7k6s9, psu7gn);else psu7gn['onError'](null);
    }, f8jr15['onCreateImage'] = function (wrfa8, igeap2, shn7g) {
      shn7g === void 0x0 && (shn7g = ![]);var rw35f8;if (!shn7g) {
        var yx_0$ = q$tdx_['getFileInfo'](wrfa8),
            snghu = yx_0$['md5'];rw35f8 = q$tdx_['getFileNativePath'](snghu);
      } else rw35f8 = wrfa8;if (igeap2['imgCache'] == null) igeap2['imgCache'] = {};var vy$0tx;function _0t() {
        vy$0tx['onload'] = null, vy$0tx['onerror'] = null, delete igeap2['imgCache'][wrfa8];
      };var xq$td = function () {
        _0t(), igeap2['onLoaded'](vy$0tx);
      },
          xqtd = function () {
        _0t(), igeap2['event']('error', 'Load image failed');
      };igeap2['_type'] == 'nativeimage' ? (vy$0tx = new tq$x['window']['Image'](), vy$0tx['crossOrigin'] = '', vy$0tx['onload'] = xq$td, vy$0tx['onerror'] = xqtd, vy$0tx['src'] = rw35f8, igeap2['imgCache'][wrfa8] = vy$0tx) : new h796ks['create'](rw35f8, { 'onload': xq$td, 'onerror': xqtd, 'onCreate': function (awei23) {
          vy$0tx = awei23, igeap2['imgCache'][wrfa8] = awei23;
        } });
    }, f8jr15;
  }(),
      x0td_$ = function () {
    function su7g() {}return ae2piw(su7g, 'laya.wx.mini.MiniInput'), su7g['_createInputElement'] = function () {
      j5rf['_initInput'](j5rf['area'] = tq$x['createElement']('textarea')), j5rf['_initInput'](j5rf['input'] = tq$x['createElement']('input')), j5rf['inputContainer'] = tq$x['createElement']('div'), j5rf['inputContainer']['style']['position'] = 'absolute', j5rf['inputContainer']['style']['zIndex'] = 0x186a0, tq$x['container']['appendChild'](j5rf['inputContainer']), j5rf['inputContainer']['setPos'] = function (_$d0, ns7ghu) {
        j5rf['inputContainer']['style']['left'] = _$d0 + 'px', j5rf['inputContainer']['style']['top'] = ns7ghu + 'px';
      }, ns67['stage']['on']('resize', null, su7g['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hn6su) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), qd_$tx['_soundClass'] = yv0z, qd_$tx['_musicClass'] = yv0z;
    }, su7g['_onStageResize'] = function () {
      var z6k = ns67['stage']['_canvasTransform']['identity']();z6k['scale'](tq$x['width'] / x$d_['canvas']['width'] / vyl4bz['getPixelRatio'](), tq$x['height'] / x$d_['canvas']['height'] / vyl4bz['getPixelRatio']());
    }, su7g['wxinputFocus'] = function (xv$t) {
      var x$_tqd = j5rf['inputElement']['target'];if (x$_tqd && !x$_tqd['editable']) return;jf51rm['window']['wx']['offKeyboardConfirm'](), jf51rm['window']['wx']['offKeyboardInput'](), jf51rm['window']['wx']['showKeyboard']({ 'defaultValue': x$_tqd['text'], 'maxLength': x$_tqd['maxChars'], 'multiple': x$_tqd['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (vzy4lb) {}, 'fail': function (omj5r1) {} }), jf51rm['window']['wx']['onKeyboardConfirm'](function (hbk697) {
        var f1m5rj = hbk697 ? hbk697['value'] : '';x$_tqd['text'] = f1m5rj, x$_tqd['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), jf51rm['window']['wx']['onKeyboardInput'](function (vzly40) {
        var i23a8w = vzly40 ? vzly40['value'] : '';if (!x$_tqd['multiline']) {
          if (i23a8w['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }x$_tqd['text'] = i23a8w, x$_tqd['event']('input');
      });
    }, su7g['inputEnter'] = function () {
      j5rf['inputElement']['target']['focus'] = ![];
    }, su7g['wxinputblur'] = function () {
      su7g['hideKeyboard']();
    }, su7g['hideKeyboard'] = function () {
      jf51rm['window']['wx']['offKeyboardConfirm'](), jf51rm['window']['wx']['offKeyboardInput'](), jf51rm['window']['wx']['hideKeyboard']({ 'success': function (kb4zvl) {
          console['log']('隐藏键盘');
        }, 'fail': function (ush7n) {
          console['log']('隐藏键盘出错:' + (ush7n ? ush7n['errMsg'] : ''));
        } });
    }, su7g;
  }(),
      nhs69 = function () {
    function w23ai8() {}ae2piw(w23ai8, 'laya.wx.mini.MiniLoader');var i2pgae = w23ai8['prototype'];return i2pgae['load'] = function (z6b9hk, bh96zk, uegip2, z4yl0, b4zvyl) {
      uegip2 === void 0x0 && (uegip2 = !![]), b4zvyl === void 0x0 && (b4zvyl = ![]);var y$0lv = this;y$0lv['_url'] = z6b9hk;if (z6b9hk['indexOf']('data:image') === 0x0) y$0lv['_type'] = bh96zk = 'image';else y$0lv['_type'] = bh96zk || (bh96zk = y$0lv['getTypeFromUrl'](z6b9hk));y$0lv['_cache'] = uegip2, y$0lv['_data'] = null;var y4lvz = 'ascii';if (z6b9hk['indexOf']('.fnt') != -0x1) y4lvz = 'utf8';else bh96zk == 'arraybuffer' && (y4lvz = '');;var zyvlb = pnugei['getFileExtension'](z6b9hk);if (w23ai8['_fileTypeArr']['indexOf'](zyvlb) != -0x1) jf51rm['EnvConfig']['load']['call'](this, z6b9hk, bh96zk, uegip2, z4yl0, b4zvyl);else {
        if (!q$tdx_['getFileInfo'](z6b9hk)) {
          if (z6b9hk['indexOf']('layaNativeDir/') != -0x1) {
            if (jf51rm['isZiYu']) {
              var z69k4b = q$tdx_['ziyuFileData'][z6b9hk];y$0lv['onLoaded'](z69k4b);return;
            } else {
              cosnole['log']('read read'), q$tdx_['read'](z6b9hk, y4lvz, new gnpu7(w23ai8, w23ai8['onReadNativeCallBack'], [y4lvz, z6b9hk, bh96zk, uegip2, z4yl0, b4zvyl, y$0lv]));return;
            }
          }if (ybzvl4['rootPath'] == '') var l$ytv0 = z6b9hk;else l$ytv0 = z6b9hk['split'](ybzvl4['rootPath'])[0x0];z6b9hk['indexOf']('http://') != -0x1 || z6b9hk['indexOf']('https://') != -0x1 ? jf51rm['EnvConfig']['load']['call'](y$0lv, z6b9hk, bh96zk, uegip2, z4yl0, b4zvyl) : q$tdx_['readFile'](l$ytv0, y4lvz, new gnpu7(w23ai8, w23ai8['onReadNativeCallBack'], [y4lvz, z6b9hk, bh96zk, uegip2, z4yl0, b4zvyl, y$0lv]), z6b9hk);
        } else jf51rm['EnvConfig']['load']['call'](this, z6b9hk, bh96zk, uegip2, z4yl0, b4zvyl);
      }
    }, i2pgae['resMgrLoad'] = function (nsu7pg, a32fw, wa2i, ia32ew, hb679, sepung, h697sk) {
      wa2i === void 0x0 && (wa2i = 0x0), ia32ew === void 0x0 && (ia32ew = ![]), hb679 === void 0x0 && (hb679 = ![]), sepung === void 0x0 && (sepung = 0x0), h697sk === void 0x0 && (h697sk = 0x3), nsu7pg['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', nsu7pg), jf51rm['EnvConfig']['resMgrLoad'](nsu7pg, (k9h6b7, guei2p, j1r85f) => {
        w23ai8['prototype']['resMgrLoadCallBack'](k9h6b7, guei2p, j1r85f, a32fw);
      }, wa2i, ia32ew, hb679, sepung, h697sk);
    }, i2pgae['resMgrLoadCallBack'] = function (ps7gu, vlz4, e2agip, t$l) {
      console['log']('buff:::', ps7gu, e2agip, q$tdx_['fileNativeDir'] + '///' + q$tdx_['fileListName']), t$l(ps7gu, vlz4, e2agip);
    }, i2pgae['clearRes'] = function (ksh6, zbk649) {
      zbk649 === void 0x0 && (zbk649 = ![]);var rmj51 = this;rmj51['clearRes'](ksh6, zbk649);var y0tl$v = q$tdx_['getFileInfo'](ksh6);if (y0tl$v && (ksh6['indexOf']('http://') != -0x1 || ksh6['indexOf']('https://') != -0x1)) {
        var yz4bvl = y0tl$v['md5'],
            ra83f = q$tdx_['getFileNativePath'](yz4bvl);q$tdx_['remove'](ra83f);
      }
    }, w23ai8['onReadNativeCallBack'] = function (hk9s67, uepg2i, i2epa, e2igpu, xv0, pusgn, ae32iw, gip2ae, j5o1rm) {
      e2igpu === void 0x0 && (e2igpu = !![]), pusgn === void 0x0 && (pusgn = ![]), gip2ae === void 0x0 && (gip2ae = 0x0);if (!gip2ae) {
        var pneui;if (i2epa == 'json' || i2epa == 'atlas') pneui = jf51rm['getJson'](j5o1rm['data']);else i2epa == 'xml' ? pneui = pnugei['parseXMLFromString'](j5o1rm['data']) : pneui = j5o1rm['data'];ae32iw['onLoaded'](pneui), !jf51rm['isZiYu'] && jf51rm['isPosMsgYu'] && i2epa != 'arraybuffer' && wx['postMessage']({ 'url': uepg2i, 'data': pneui, 'isLoad': !![] });
      } else gip2ae == 0x1 && jf51rm['EnvConfig']['load']['call'](ae32iw, uepg2i, i2epa, e2igpu, xv0, pusgn);
    }, z9bkh(w23ai8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), w23ai8;
  }(),
      q$tdx_ = function (nu76hs) {
    function ipuneg() {
      ipuneg['__super']['call'](this);;
    }return ae2piw(ipuneg, 'laya.wx.mini.MiniFileMgr', nu76hs), ipuneg['isLoadFile'] = function (h6k79b) {
      return ipuneg['_fileTypeArr']['indexOf'](h6k79b) != -0x1 ? !![] : ![];
    }, ipuneg['getFileInfo'] = function (nepi) {
      var k6hz = nepi['split']('?')[0x0],
          gpns7 = ipuneg['filesListObj'][k6hz];if (gpns7 == null) return null;else return gpns7;return null;
    }, ipuneg['onFileUpdate'] = function (_x$ty0, j85f) {
      var inuepg = _x$ty0['split']('/'),
          ns7h6u = inuepg[inuepg['length'] - 0x1],
          h967 = ipuneg['getFileInfo'](j85f);if (h967 == null) ipuneg['onSaveFile'](j85f, ns7h6u);else {
        if (h967['readyUrl'] != j85f) ipuneg['remove'](ns7h6u, j85f);
      }
    }, ipuneg['exits'] = function (w3fa, n97h6s) {
      var vylt0 = ipuneg['getFileNativePath'](w3fa);ipuneg['fs']['getFileInfo']({ 'filePath': vylt0, 'success': function (z0y4vl) {
          n97h6s != null && n97h6s['runWith']([0x0, z0y4vl]);
        }, 'fail': function (e2wi3a) {
          n97h6s != null && n97h6s['runWith']([0x1, e2wi3a]);
        } });
    }, ipuneg['read'] = function (bvly4, fr358j, punseg, o1rj5m) {
      fr358j === void 0x0 && (fr358j = 'ascill'), o1rj5m === void 0x0 && (o1rj5m = '');var r3w5f;o1rj5m != '' ? r3w5f = ipuneg['getFileNativePath'](bvly4) : r3w5f = bvly4, ipuneg['fs']['readFile']({ 'filePath': r3w5f, 'encoding': fr358j, 'success': function (hs7n9) {
          punseg != null && punseg['runWith']([0x0, hs7n9]);
        }, 'fail': function (lk9bz4) {
          if (lk9bz4 && o1rj5m != '') ipuneg['down'](o1rj5m, fr358j, punseg, o1rj5m);else punseg != null && punseg['runWith']([0x1]);
        } });
    }, ipuneg['readNativeFile'] = function (ineup, bkzl) {
      ipuneg['fs']['readFile']({ 'filePath': ineup, 'encoding': '', 'success': function (lvt$0y) {
          bkzl != null && bkzl['runWith']([0x0]);
        }, 'fail': function (un7sgp) {
          bkzl != null && bkzl['runWith']([0x1]);
        } });
    }, ipuneg['down'] = function (s7pg, n6hs97, pe2gui, wap2e) {
      n6hs97 === void 0x0 && (n6hs97 = 'ascill'), wap2e === void 0x0 && (wap2e = '');var vytx$0 = ipuneg['getFileNativePath'](wap2e),
          yv4l$ = ipuneg['wxdown']({ 'url': s7pg, 'filePath': vytx$0, 'success': function ($xv0y) {
          if ($xv0y['statusCode'] === 0xc8) ipuneg['readFile']($xv0y['filePath'], n6hs97, pe2gui, wap2e);
        }, 'fail': function ($0y_t) {
          pe2gui != null && pe2gui['runWith']([0x1, $0y_t]);
        } });yv4l$['onProgressUpdate'](function (a2epi) {
        pe2gui != null && pe2gui['runWith']([0x2, a2epi['progress']]);
      });
    }, ipuneg['readFile'] = function (i8wa23, t_d$xq, a2fw38, s9nh) {
      t_d$xq === void 0x0 && (t_d$xq = 'ascill'), s9nh === void 0x0 && (s9nh = ''), ipuneg['fs']['readFile']({ 'filePath': i8wa23, 'encoding': t_d$xq, 'success': function (hb976k) {
          if (i8wa23['indexOf']('http://') != -0x1 || i8wa23['indexOf']('https://') != -0x1) ipuneg['onFileUpdate'](i8wa23, s9nh);a2fw38 != null && a2fw38['runWith']([0x0, hb976k]);
        }, 'fail': function (fj51r8) {
          if (fj51r8) a2fw38 != null && a2fw38['runWith']([0x1, fj51r8]);
        } });
    }, ipuneg['downImg'] = function (igea2p, dq_, frj83) {
      frj83 === void 0x0 && (frj83 = '');var y0l4 = ipuneg['wxdown']({ 'url': igea2p, 'success': function (_t$xd0) {
          _t$xd0['statusCode'] === 0xc8 && ipuneg['copyFile'](_t$xd0['tempFilePath'], frj83, dq_);
        }, 'fail': function (vt$0yl) {
          dq_ != null && dq_['runWith']([0x1, vt$0yl]);
        } });
    }, ipuneg['copyFile'] = function (ewipa2, x$_d, f8rj35) {
      var vxy$t0 = ewipa2['split']('/'),
          w32af8 = vxy$t0[vxy$t0['length'] - 0x1],
          fawr3 = x$_d['split']('?')[0x0],
          x_$qtd = ipuneg['getFileInfo'](x$_d),
          n7suh = ipuneg['getFileNativePath'](w32af8);ipuneg['fs']['copyFile']({ 'srcPath': ewipa2, 'destPath': n7suh, 'success': function (yl4$v) {
          if (!x_$qtd) ipuneg['onSaveFile'](x$_d, w32af8), f8rj35 != null && f8rj35['runWith']([0x0]);else {
            if (x_$qtd['readyUrl'] != x$_d) ipuneg['remove'](w32af8, x$_d, f8rj35);
          }
        }, 'fail': function (ia23ew) {
          f8rj35 != null && f8rj35['runWith']([0x1, ia23ew]);
        } });
    }, ipuneg['getFileNativePath'] = function (peaig) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + peaig;
    }, ipuneg['remove'] = function (x_d0$, a83wfr, un6hs) {
      a83wfr === void 0x0 && (a83wfr = '');var bhk = ipuneg['getFileInfo'](a83wfr),
          mfr15j = ipuneg['getFileNativePath'](bhk['md5']);ns67['loader']['clearRes'](bhk['readyUrl']), ipuneg['fs']['unlink']({ 'filePath': mfr15j, 'success': function (ei2pg) {
          if (a83wfr != '') ipuneg['onSaveFile'](a83wfr, x_d0$);un6hs != null && un6hs['runWith']([0x0]);
        }, 'fail': function (uegpni) {} });
    }, ipuneg['onSaveFile'] = function (t$qd, gspue) {
      var b679hk = t$qd['split']('?')[0x0];ipuneg['filesListObj'][b679hk] = { 'md5': gspue, 'readyUrl': t$qd }, ipuneg['fs']['writeFile']({ 'filePath': ipuneg['fileNativeDir'] + '/' + ipuneg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ipuneg['filesListObj']), 'success': function (s6n9h) {
          console['log']('写入测试测试成功：', s6n9h);
        }, 'fail': function (upieng) {
          console['log']('写入测试测试失败：', upieng);
        } });
    }, ipuneg['existDir'] = function (z4lvby, w2f83) {
      ipuneg['fs']['mkdir']({ 'dirPath': z4lvby, 'success': function (iupne) {
          w2f83 != null && w2f83['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hbk67) {
          if (hbk67['errMsg']['indexOf']('file already exists') != -0x1) ipuneg['readSync'](ipuneg['fileListName'], 'utf8', w2f83);else w2f83 != null && w2f83['runWith']([0x1, hbk67]);
        } });
    }, ipuneg['readSync'] = function (aew2i3, nghus, wf83a2, ep2ai) {
      nghus === void 0x0 && (nghus = 'ascill'), ep2ai === void 0x0 && (ep2ai = '');var jmr51o = ipuneg['getFileNativePath'](aew2i3),
          piegu2;try {
        piegu2 = ipuneg['fs']['readFileSync'](jmr51o), wf83a2 != null && wf83a2['runWith']([0x0, { 'data': piegu2 }]);
      } catch (w82a3f) {
        wf83a2 != null && wf83a2['runWith']([0x1]);
      }
    }, ipuneg['readCache'] = function () {}, ipuneg['writeCache'] = function (s6kh79) {
      var ewpi2a = readyUrl['split']('?')[0x0];ipuneg['filesListObj'][ewpi2a] = { 'md5': md5Name, 'readyUrl': readyUrl }, ipuneg['fs']['writeFile']({ 'filePath': ipuneg['fileNativeDir'] + '/' + ipuneg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ipuneg['filesListObj']), 'success': function (ugesn) {}, 'fail': function (t_0$d) {} });
    }, ipuneg['setNativeFileDir'] = function (hung7) {
      ipuneg['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hung7;
    }, ipuneg['filesListObj'] = {}, ipuneg['fileNativeDir'] = null, ipuneg['fileListName'] = 'layaairfiles.txt', ipuneg['ziyuFileData'] = {}, z9bkh(ipuneg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ipuneg;
  }(apwei2),
      yv0z = function (i8a23) {
    function bhk976() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], bhk976['__super']['call'](this), this['_sound'] = bhk976['_createSound']();
    }ae2piw(bhk976, 'laya.wx.mini.MiniSound', i8a23);var $d_qx = bhk976['prototype'];return $d_qx['load'] = function (rwf385) {
      var zk94b6 = this;rwf385 = ybzvl4['formatURL'](rwf385), this['url'] = rwf385;if (bhk976['_audioCache'][rwf385]) {
        this['event']('complete');return;
      }function _t0dx() {
        if (bhk976['_null'] != undefined) zk94b6['_sound']['onCanplay'](bhk976['_null']), zk94b6['_sound']['onError'](bhk976['_null']);else try {
          zk94b6['_sound']['onCanplay'](null), zk94b6['_sound']['onError'](null), bhk976['_null'] = null;
        } catch (y0_t$x) {
          console['warn']('[wxmini] _clearSound:' + y0_t$x), zk94b6['_sound']['onCanplay'](ks69), zk94b6['_sound']['onError'](ks69), bhk976['_null'] = ks69;
        }
      }function s76n9h() {
        _t0dx(), x$_dtq['loaded'] = !![], x$_dtq['event']('complete'), bhk976['_audioCache'][x$_dtq['url']] = x$_dtq;
      }function ieungp(x$d) {
        console['error']('errCode=' + x$d['errCode'] + '  errMsg=' + x$d['errMsg']), _t0dx(), x$_dtq['event']('error');
      }function ks69() {}this['_sound']['onCanplay'](s76n9h), this['_sound']['onError'](ieungp), this['_sound']['src'] = rwf385;var x$_dtq = this;
    }, $d_qx['play'] = function (y$t0l, t0$vl) {
      y$t0l === void 0x0 && (y$t0l = 0x0), t0$vl === void 0x0 && (t0$vl = 0x0);var pwia;if (this['url'] == qd_$tx['_tMusic']) {
        if (!bhk976['_musicAudio']) bhk976['_musicAudio'] = bhk976['_createSound']();pwia = bhk976['_musicAudio'];
      } else pwia = bhk976['_createSound']();pwia['src'] = this['url'];var l$0yvt = new gus7nh(pwia);return l$0yvt['url'] = this['url'], l$0yvt['loops'] = t0$vl, l$0yvt['startTime'] = y$t0l, l$0yvt['play'](), qd_$tx['addChannel'](l$0yvt), l$0yvt;
    }, $d_qx['dispose'] = function () {
      var hkb967 = bhk976['_audioCache'][this['url']];hkb967 && (hkb967['src'] = '', delete bhk976['_audioCache'][this['url']]);
    }, gsnh7(0x0, $d_qx, 'duration', function () {
      return this['_sound']['duration'];
    }), bhk976['_createSound'] = function () {
      return bhk976['_id']++, jf51rm['window']['wx']['createInnerAudioContext']();
    }, bhk976['_musicAudio'] = null, bhk976['_id'] = 0x0, bhk976['_audioCache'] = {}, bhk976['_null'] = undefined, bhk976;
  }(apwei2),
      gus7nh = function (u7nsg) {
    function $qtd(uegi2) {
      this['_audio'] = null, this['_onEnd'] = null, $qtd['__super']['call'](this), this['_audio'] = uegi2, this['_onEnd'] = pnugei['bind'](this['__onEnd'], this), uegi2['onEnded'](this['_onEnd']);
    }ae2piw($qtd, 'laya.wx.mini.MiniSoundChannel', u7nsg);var _t$d0x = $qtd['prototype'];return _t$d0x['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ns67['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _t$d0x['__onNull'] = function () {}, _t$d0x['play'] = function () {
      this['isStopped'] = ![], qd_$tx['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _t$d0x['stop'] = function () {
      this['isStopped'] = !![], qd_$tx['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if ($qtd['_null'] != undefined) this['_audio']['onEnded']($qtd['_null']);else try {
        this['_audio']['onEnded'](null), $qtd['_null'] = null;
      } catch (yb4zl) {
        console['warn']('[wxmini] stop:' + yb4zl), this['_audio']['onEnded'](pnugei['bind'](this['__onNull'], this)), $qtd['_null'] = pnugei['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, _t$d0x['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _t$d0x['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], qd_$tx['addChannel'](this), this['_audio']['play']();
    }, gsnh7(0x0, _t$d0x, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), gsnh7(0x0, _t$d0x, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), gsnh7(0x0, _t$d0x, 'volume', function () {
      return 0x1;
    }, function (gsu7p) {}), $qtd['_null'] = undefined, $qtd;
  }(fa83r);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var lvzyb in Laya) {
    var puni = Laya[lvzyb];puni && puni['__isclass'] && (exports[lvzyb] = puni);
  }
});