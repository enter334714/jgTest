var Q = wx.$v;
(function (window, document, y16_zh) {
  var o2 = y16_zh['un'],
      dkm7c0 = y16_zh['uns'],
      t_132 = y16_zh['static'],
      nh_ = y16_zh['class'],
      s$rf9 = y16_zh['getset'],
      mk7dc = y16_zh['__newvec'],
      i4o$3 = laya['utils']['Browser'],
      majd0 = laya['events']['Event'],
      ylzh6u = laya['events']['EventDispatcher'],
      hn2t = laya['resource']['HTMLImage'],
      nt3_ = laya['utils']['Handler'],
      uw = laya['display']['Input'],
      mad0jc = laya['net']['Loader'],
      t1n23_ = laya['maths']['Matrix'],
      wegbqx = laya['renders']['Render'],
      i9f$s = laya['utils']['RunDriver'],
      lzh6 = laya['media']['Sound'],
      ly1 = laya['media']['SoundChannel'],
      o423 = laya['media']['SoundManager'],
      $sifo4 = laya['display']['Stage'],
      h1yz6_ = laya['net']['URL'],
      vpk75 = laya['utils']['Utils'],
      zeu = function () {
    function xpgqe() {}return nh_(xpgqe, 'laya.wx.mini.MiniAdpter'), xpgqe['getJson'] = function (ebl8u) {
      return JSON['parse'](ebl8u);
    }, xpgqe['init'] = function (s9f$ri, _tnh) {
      s9f$ri === void 0x0 && (s9f$ri = ![]), _tnh === void 0x0 && (_tnh = ![]);if (xpgqe['_inited']) return;xpgqe['window'] = window;if (xpgqe['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;xpgqe['_inited'] = !![], xpgqe['isZiYu'] = _tnh, xpgqe['isPosMsgYu'] = s9f$ri, xpgqe['EnvConfig'] = {}, !xpgqe['isZiYu'] && (kx5v['setNativeFileDir']('/layaairGame'), kx5v['existDir'](kx5v['fileNativeDir'], nt3_['create'](xpgqe, xpgqe['onMkdirCallBack']))), xpgqe['window']['focus'] = function () {}, y16_zh['getUrlPath'] = function () {}, xpgqe['window']['logtime'] = function (n4ot3$) {}, xpgqe['window']['alertTimeLog'] = function (nht_) {}, xpgqe['window']['resetShareInfo'] = function () {}, xpgqe['window']['CanvasRenderingContext2D'] = function () {}, xpgqe['window']['CanvasRenderingContext2D']['prototype'] = xpgqe['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xpgqe['window']['document']['body']['appendChild'] = function () {}, xpgqe['EnvConfig']['pixelRatioInt'] = 0x0, i9f$s['getPixelRatio'] = xpgqe['pixelRatio'], xpgqe['_preCreateElement'] = i4o$3['createElement'], i4o$3['createElement'] = xpgqe['createElement'], i9f$s['createShaderCondition'] = xpgqe['createShaderCondition'], vpk75['parseXMLFromString'] = xpgqe['parseXMLFromString'], uw['_createInputElement'] = z_16['_createInputElement'], xpgqe['EnvConfig']['load'] = mad0jc['prototype']['load'], mad0jc['prototype']['load'] = m07c5['prototype']['load'], xpgqe['isZiYu'] && s9f$ri && wx['onMessage'](function (dkm70c) {
        dkm70c['isLoad'] && (kx5v['ziyuFileData'][dkm70c['url']] = dkm70c['data']);
      });
    }, xpgqe['onMkdirCallBack'] = function (sf$9ir, i4s3$o) {
      if (!sf$9ir) kx5v['filesListObj'] = JSON['parse'](i4s3$o['data']);
    }, xpgqe['pixelRatio'] = function () {
      if (!xpgqe['EnvConfig']['pixelRatioInt']) try {
        var v0c5k = wx['getSystemInfoSync']();return xpgqe['EnvConfig']['pixelRatioInt'] = v0c5k['pixelRatio'], v0c5k = v0c5k, v0c5k['pixelRatio'];
      } catch (no$43s) {}return xpgqe['EnvConfig']['pixelRatioInt'];
    }, xpgqe['createElement'] = function (z6hy_) {
      if (z6hy_ == 'canvas') {
        var l1y;return xpgqe['idx'] == 0x1 ? xpgqe['isZiYu'] ? (l1y = sharedCanvas, l1y['style'] = {}) : l1y = window['canvas'] : l1y = window['wx']['createCanvas'](), xpgqe['idx']++, l1y;
      } else {
        if (z6hy_ == 'textarea' || z6hy_ == 'input') return xpgqe['onCreateInput'](z6hy_);else {
          if (z6hy_ == 'div') {
            var t2hy_ = xpgqe['_preCreateElement'](z6hy_);return t2hy_['contains'] = function (dkm0cj) {
              return null;
            }, t2hy_['removeChild'] = function (lub6z8) {}, t2hy_;
          } else return xpgqe['_preCreateElement'](z6hy_);
        }
      }
    }, xpgqe['onCreateInput'] = function (buql8e) {
      var qvxwpg = xpgqe['_preCreateElement'](buql8e);return qvxwpg['focus'] = z_16['wxinputFocus'], qvxwpg['blur'] = z_16['wxinputblur'], qvxwpg['style'] = {}, qvxwpg['value'] = 0x0, qvxwpg['parentElement'] = {}, qvxwpg['placeholder'] = {}, qvxwpg['type'] = {}, qvxwpg['setColor'] = function (rfis9) {}, qvxwpg['setType'] = function (lyh1) {}, qvxwpg['setFontFace'] = function (s3i4$) {}, qvxwpg['addEventListener'] = function (s4$oif) {}, qvxwpg['contains'] = function (m0dkcj) {
        return null;
      }, qvxwpg['removeChild'] = function (n13_2t) {}, qvxwpg;
    }, xpgqe['createShaderCondition'] = function (xkp5v) {
      var v5p = this,
          ons43$ = function () {
        var q8gbw = xkp5v;return v5p[xkp5v['replace']('this.', '')];
      };return ons43$;
    }, xpgqe['EnvConfig'] = null, xpgqe['window'] = null, xpgqe['_preCreateElement'] = null, xpgqe['_inited'] = ![], xpgqe['wxRequest'] = null, xpgqe['systemInfo'] = null, xpgqe['version'] = '0.0.1', xpgqe['isZiYu'] = ![], xpgqe['isPosMsgYu'] = ![], xpgqe['parseXMLFromString'] = function (fo$si4) {
      var _123, xv7kp5;fo$si4 = fo$si4['replace'](/>\s+</g, '><');try {
        _123 = new window['Parser']['DOMParser']()['parseFromString'](fo$si4, 'text/xml');
      } catch (bex) {
        throw '需要引入xml解析库文件';
      }return _123;
    }, xpgqe['idx'] = 0x1, xpgqe;
  }(),
      b6l = function () {
    function zbl8u() {}nh_(zbl8u, 'laya.wx.mini.MiniImage');var ajc0 = zbl8u['prototype'];return ajc0['_loadImage'] = function (vk0c75) {
      var eqpxw = this,
          km057 = ![];vk0c75['indexOf']('layaNativeDir/') == -0x1 && (km057 = !![], vk0c75 = h1yz6_['formatURL'](vk0c75));if (!kx5v['getFileInfo'](vk0c75)) {
        if (vk0c75['indexOf']('http://') != -0x1 || vk0c75['indexOf']('https://') != -0x1) kx5v['downImg'](vk0c75, new nt3_(zbl8u, zbl8u['onDownImgCallBack'], [vk0c75, eqpxw]), vk0c75);else zbl8u['onCreateImage'](vk0c75, eqpxw, !![]);
      } else zbl8u['onCreateImage'](vk0c75, eqpxw, !km057);
    }, zbl8u['onDownImgCallBack'] = function (qwebg, k075p, e8bwq) {
      if (!e8bwq) zbl8u['onCreateImage'](qwebg, k075p);else k075p['onError'](null);
    }, zbl8u['onCreateImage'] = function (_hz61y, yz6hul, x5vpwg) {
      x5vpwg === void 0x0 && (x5vpwg = ![]);var n4t2_3;if (!x5vpwg) {
        var wvqpxg = kx5v['getFileInfo'](_hz61y),
            uzl6y = wvqpxg['md5'];n4t2_3 = kx5v['getFileNativePath'](uzl6y);
      } else n4t2_3 = _hz61y;if (yz6hul['imgCache'] == null) yz6hul['imgCache'] = {};var bxgqw;function _6zy1() {
        bxgqw['onload'] = null, bxgqw['onerror'] = null, delete yz6hul['imgCache'][_hz61y];
      };var cm075k = function () {
        _6zy1(), yz6hul['onLoaded'](bxgqw);
      },
          s4ofi$ = function () {
        _6zy1(), yz6hul['event']('error', 'Load image failed');
      };yz6hul['_type'] == 'nativeimage' ? (bxgqw = new i4o$3['window']['Image'](), bxgqw['crossOrigin'] = '', bxgqw['onload'] = cm075k, bxgqw['onerror'] = s4ofi$, bxgqw['src'] = n4t2_3, yz6hul['imgCache'][_hz61y] = bxgqw) : new hn2t['create'](n4t2_3, { 'onload': cm075k, 'onerror': s4ofi$, 'onCreate': function (ly61h) {
          bxgqw = ly61h, yz6hul['imgCache'][_hz61y] = ly61h;
        } });
    }, zbl8u;
  }(),
      z_16 = function () {
    function n$s4o3() {}return nh_(n$s4o3, 'laya.wx.mini.MiniInput'), n$s4o3['_createInputElement'] = function () {
      uw['_initInput'](uw['area'] = i4o$3['createElement']('textarea')), uw['_initInput'](uw['input'] = i4o$3['createElement']('input')), uw['inputContainer'] = i4o$3['createElement']('div'), uw['inputContainer']['style']['position'] = 'absolute', uw['inputContainer']['style']['zIndex'] = 0x186a0, i4o$3['container']['appendChild'](uw['inputContainer']), uw['inputContainer']['setPos'] = function (qebgw8, qbge) {
        uw['inputContainer']['style']['left'] = qebgw8 + 'px', uw['inputContainer']['style']['top'] = qbge + 'px';
      }, y16_zh['stage']['on']('resize', null, n$s4o3['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (h1_t2n) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), o423['_soundClass'] = egbxw, o423['_musicClass'] = egbxw;
    }, n$s4o3['_onStageResize'] = function () {
      var si9f$ = y16_zh['stage']['_canvasTransform']['identity']();si9f$['scale'](i4o$3['width'] / wegbqx['canvas']['width'] / i9f$s['getPixelRatio'](), i4o$3['height'] / wegbqx['canvas']['height'] / i9f$s['getPixelRatio']());
    }, n$s4o3['wxinputFocus'] = function (vxpwgq) {
      var pg5v7x = uw['inputElement']['target'];if (pg5v7x && !pg5v7x['editable']) return;zeu['window']['wx']['offKeyboardConfirm'](), zeu['window']['wx']['offKeyboardInput'](), zeu['window']['wx']['showKeyboard']({ 'defaultValue': pg5v7x['text'], 'maxLength': pg5v7x['maxChars'], 'multiple': pg5v7x['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (u8lze) {}, 'fail': function (bzu8) {} }), zeu['window']['wx']['onKeyboardConfirm'](function (z8lyu) {
        var c75mk0 = z8lyu ? z8lyu['value'] : '';pg5v7x['text'] = c75mk0, pg5v7x['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), zeu['window']['wx']['onKeyboardInput'](function (p7gxv5) {
        var c5k70v = p7gxv5 ? p7gxv5['value'] : '';if (!pg5v7x['multiline']) {
          if (c5k70v['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }pg5v7x['text'] = c5k70v, pg5v7x['event']('input');
      });
    }, n$s4o3['inputEnter'] = function () {
      uw['inputElement']['target']['focus'] = ![];
    }, n$s4o3['wxinputblur'] = function () {
      n$s4o3['hideKeyboard']();
    }, n$s4o3['hideKeyboard'] = function () {
      zeu['window']['wx']['offKeyboardConfirm'](), zeu['window']['wx']['offKeyboardInput'](), zeu['window']['wx']['hideKeyboard']({ 'success': function ($on3t4) {
          console['log']('隐藏键盘');
        }, 'fail': function (t12n_) {
          console['log']('隐藏键盘出错:' + (t12n_ ? t12n_['errMsg'] : ''));
        } });
    }, n$s4o3;
  }(),
      m07c5 = function () {
    function bw8() {}nh_(bw8, 'laya.wx.mini.MiniLoader');var oi3s4$ = bw8['prototype'];return oi3s4$['load'] = function (yl16zh, pwqxgv, qgexb, dc0aj, jd0am) {
      qgexb === void 0x0 && (qgexb = !![]), jd0am === void 0x0 && (jd0am = ![]);var k5vc70 = this;k5vc70['_url'] = yl16zh;if (yl16zh['indexOf']('data:image') === 0x0) k5vc70['_type'] = pwqxgv = 'image';else k5vc70['_type'] = pwqxgv || (pwqxgv = k5vc70['getTypeFromUrl'](yl16zh));k5vc70['_cache'] = qgexb, k5vc70['_data'] = null;var bwqeg = 'ascii';if (yl16zh['indexOf']('.fnt') != -0x1) bwqeg = 'utf8';else pwqxgv == 'arraybuffer' && (bwqeg = '');;var km50c7 = vpk75['getFileExtension'](yl16zh);if (bw8['_fileTypeArr']['indexOf'](km50c7) != -0x1) zeu['EnvConfig']['load']['call'](this, yl16zh, pwqxgv, qgexb, dc0aj, jd0am);else {
        if (!kx5v['getFileInfo'](yl16zh)) {
          if (yl16zh['indexOf']('layaNativeDir/') != -0x1) {
            if (zeu['isZiYu']) {
              var m7c5k0 = kx5v['ziyuFileData'][yl16zh];k5vc70['onLoaded'](m7c5k0);return;
            } else {
              cosnole['log']('read read'), kx5v['read'](yl16zh, bwqeg, new nt3_(bw8, bw8['onReadNativeCallBack'], [bwqeg, yl16zh, pwqxgv, qgexb, dc0aj, jd0am, k5vc70]));return;
            }
          }if (h1yz6_['rootPath'] == '') var ezul8b = yl16zh;else ezul8b = yl16zh['split'](h1yz6_['rootPath'])[0x0];yl16zh['indexOf']('http://') != -0x1 || yl16zh['indexOf']('https://') != -0x1 ? zeu['EnvConfig']['load']['call'](k5vc70, yl16zh, pwqxgv, qgexb, dc0aj, jd0am) : kx5v['readFile'](ezul8b, bwqeg, new nt3_(bw8, bw8['onReadNativeCallBack'], [bwqeg, yl16zh, pwqxgv, qgexb, dc0aj, jd0am, k5vc70]), yl16zh);
        } else zeu['EnvConfig']['load']['call'](this, yl16zh, pwqxgv, qgexb, dc0aj, jd0am);
      }
    }, oi3s4$['resMgrLoad'] = function (s3n$4o, z8ul6b, oif, xwqvp, $so3n, y2h1t_, sf$r9i) {
      oif === void 0x0 && (oif = 0x0), xwqvp === void 0x0 && (xwqvp = ![]), $so3n === void 0x0 && ($so3n = ![]), y2h1t_ === void 0x0 && (y2h1t_ = 0x0), sf$r9i === void 0x0 && (sf$r9i = 0x3), s3n$4o['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', s3n$4o), zeu['EnvConfig']['resMgrLoad'](s3n$4o, (qxwgvp, lb8euq, vx5kp7) => {
        bw8['prototype']['resMgrLoadCallBack'](qxwgvp, lb8euq, vx5kp7, z8ul6b);
      }, oif, xwqvp, $so3n, y2h1t_, sf$r9i);
    }, oi3s4$['resMgrLoadCallBack'] = function (gqvwpx, wpv5x, n4t3o2, ckd0m) {
      console['log']('buff:::', gqvwpx, n4t3o2, kx5v['fileNativeDir'] + '///' + kx5v['fileListName']), ckd0m(gqvwpx, wpv5x, n4t3o2);
    }, oi3s4$['clearRes'] = function (s4f$, t2_n1h) {
      t2_n1h === void 0x0 && (t2_n1h = ![]);var sf$9ri = this;sf$9ri['clearRes'](s4f$, t2_n1h);var uyl86 = kx5v['getFileInfo'](s4f$);if (uyl86 && (s4f$['indexOf']('http://') != -0x1 || s4f$['indexOf']('https://') != -0x1)) {
        var lhz6yu = uyl86['md5'],
            lbqe = kx5v['getFileNativePath'](lhz6yu);kx5v['remove'](lbqe);
      }
    }, bw8['onReadNativeCallBack'] = function (mj0ca, si9$r, bxew, $oisf9, expqg, gvxpqw, n342o, n1th_, xv5g) {
      $oisf9 === void 0x0 && ($oisf9 = !![]), gvxpqw === void 0x0 && (gvxpqw = ![]), n1th_ === void 0x0 && (n1th_ = 0x0);if (!n1th_) {
        var so$i9;if (bxew == 'json' || bxew == 'atlas') so$i9 = zeu['getJson'](xv5g['data']);else bxew == 'xml' ? so$i9 = vpk75['parseXMLFromString'](xv5g['data']) : so$i9 = xv5g['data'];n342o['onLoaded'](so$i9), !zeu['isZiYu'] && zeu['isPosMsgYu'] && bxew != 'arraybuffer' && wx['postMessage']({ 'url': si9$r, 'data': so$i9, 'isLoad': !![] });
      } else n1th_ == 0x1 && zeu['EnvConfig']['load']['call'](n342o, si9$r, bxew, $oisf9, expqg, gvxpqw);
    }, t_132(bw8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), bw8;
  }(),
      kx5v = function (t3no4) {
    function ueqw8b() {
      ueqw8b['__super']['call'](this);;
    }return nh_(ueqw8b, 'laya.wx.mini.MiniFileMgr', t3no4), ueqw8b['isLoadFile'] = function (z6uhly) {
      return ueqw8b['_fileTypeArr']['indexOf'](z6uhly) != -0x1 ? !![] : ![];
    }, ueqw8b['getFileInfo'] = function (ulebq8) {
      var pwgvqx = ulebq8['split']('?')[0x0],
          eqpwg = ueqw8b['filesListObj'][pwgvqx];if (eqpwg == null) return null;else return eqpwg;return null;
    }, ueqw8b['onFileUpdate'] = function (ebwuq8, bu8l) {
      var u6zylh = ebwuq8['split']('/'),
          h6zl = u6zylh[u6zylh['length'] - 0x1],
          vgx5p = ueqw8b['getFileInfo'](bu8l);if (vgx5p == null) ueqw8b['onSaveFile'](bu8l, h6zl);else {
        if (vgx5p['readyUrl'] != bu8l) ueqw8b['remove'](h6zl, bu8l);
      }
    }, ueqw8b['exits'] = function (no$3t4, wgbx) {
      var t3no42 = ueqw8b['getFileNativePath'](no$3t4);ueqw8b['fs']['getFileInfo']({ 'filePath': t3no42, 'success': function (yt21h) {
          wgbx != null && wgbx['runWith']([0x0, yt21h]);
        }, 'fail': function (_2t1hn) {
          wgbx != null && wgbx['runWith']([0x1, _2t1hn]);
        } });
    }, ueqw8b['read'] = function (bez8lu, on$3t4, $on4, djc0) {
      on$3t4 === void 0x0 && (on$3t4 = 'ascill'), djc0 === void 0x0 && (djc0 = '');var $nos34;djc0 != '' ? $nos34 = ueqw8b['getFileNativePath'](bez8lu) : $nos34 = bez8lu, ueqw8b['fs']['readFile']({ 'filePath': $nos34, 'encoding': on$3t4, 'success': function (h2yt1_) {
          $on4 != null && $on4['runWith']([0x0, h2yt1_]);
        }, 'fail': function (pegq) {
          if (pegq && djc0 != '') ueqw8b['down'](djc0, on$3t4, $on4, djc0);else $on4 != null && $on4['runWith']([0x1]);
        } });
    }, ueqw8b['readNativeFile'] = function (pv75gx, zblu6) {
      ueqw8b['fs']['readFile']({ 'filePath': pv75gx, 'encoding': '', 'success': function (i$f4os) {
          zblu6 != null && zblu6['runWith']([0x0]);
        }, 'fail': function (ma0jc) {
          zblu6 != null && zblu6['runWith']([0x1]);
        } });
    }, ueqw8b['down'] = function (lequb8, u8ewbq, hyz16, $s4o) {
      u8ewbq === void 0x0 && (u8ewbq = 'ascill'), $s4o === void 0x0 && ($s4o = '');var lhuy6 = ueqw8b['getFileNativePath']($s4o),
          vkc57 = ueqw8b['wxdown']({ 'url': lequb8, 'filePath': lhuy6, 'success': function (qexgp) {
          if (qexgp['statusCode'] === 0xc8) ueqw8b['readFile'](qexgp['filePath'], u8ewbq, hyz16, $s4o);
        }, 'fail': function (_2yth1) {
          hyz16 != null && hyz16['runWith']([0x1, _2yth1]);
        } });vkc57['onProgressUpdate'](function (zy6u8l) {
        hyz16 != null && hyz16['runWith']([0x2, zy6u8l['progress']]);
      });
    }, ueqw8b['readFile'] = function (p5xvw, vkp0, o3n4$t, uelb8) {
      vkp0 === void 0x0 && (vkp0 = 'ascill'), uelb8 === void 0x0 && (uelb8 = ''), ueqw8b['fs']['readFile']({ 'filePath': p5xvw, 'encoding': vkp0, 'success': function (pwegx) {
          if (p5xvw['indexOf']('http://') != -0x1 || p5xvw['indexOf']('https://') != -0x1) ueqw8b['onFileUpdate'](p5xvw, uelb8);o3n4$t != null && o3n4$t['runWith']([0x0, pwegx]);
        }, 'fail': function (o4$sn) {
          if (o4$sn) o3n4$t != null && o3n4$t['runWith']([0x1, o4$sn]);
        } });
    }, ueqw8b['downImg'] = function (z8ble, eubql, b8u6) {
      b8u6 === void 0x0 && (b8u6 = '');var $o34sn = ueqw8b['wxdown']({ 'url': z8ble, 'success': function (hy6lu) {
          hy6lu['statusCode'] === 0xc8 && ueqw8b['copyFile'](hy6lu['tempFilePath'], b8u6, eubql);
        }, 'fail': function (kvpx75) {
          eubql != null && eubql['runWith']([0x1, kvpx75]);
        } });
    }, ueqw8b['copyFile'] = function (kcdjm, cv07, jdcma) {
      var w8eqbg = kcdjm['split']('/'),
          _162yh = w8eqbg[w8eqbg['length'] - 0x1],
          xepgw = cv07['split']('?')[0x0],
          vp570k = ueqw8b['getFileInfo'](cv07),
          hy16_z = ueqw8b['getFileNativePath'](_162yh);ueqw8b['fs']['copyFile']({ 'srcPath': kcdjm, 'destPath': hy16_z, 'success': function (pwgxv5) {
          if (!vp570k) ueqw8b['onSaveFile'](cv07, _162yh), jdcma != null && jdcma['runWith']([0x0]);else {
            if (vp570k['readyUrl'] != cv07) ueqw8b['remove'](_162yh, cv07, jdcma);
          }
        }, 'fail': function (p50v7k) {
          jdcma != null && jdcma['runWith']([0x1, p50v7k]);
        } });
    }, ueqw8b['getFileNativePath'] = function (dam) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + dam;
    }, ueqw8b['remove'] = function (egpxw, on$4t, s9$rf) {
      on$4t === void 0x0 && (on$4t = '');var epgqxw = ueqw8b['getFileInfo'](on$4t),
          n_12h = ueqw8b['getFileNativePath'](epgqxw['md5']);y16_zh['loader']['clearRes'](epgqxw['readyUrl']), ueqw8b['fs']['unlink']({ 'filePath': n_12h, 'success': function (k7mc0) {
          if (on$4t != '') ueqw8b['onSaveFile'](on$4t, egpxw);s9$rf != null && s9$rf['runWith']([0x0]);
        }, 'fail': function (mdaj) {} });
    }, ueqw8b['onSaveFile'] = function (fs4$oi, fi4s) {
      var lz61hy = fs4$oi['split']('?')[0x0];ueqw8b['filesListObj'][lz61hy] = { 'md5': fi4s, 'readyUrl': fs4$oi }, ueqw8b['fs']['writeFile']({ 'filePath': ueqw8b['fileNativeDir'] + '/' + ueqw8b['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ueqw8b['filesListObj']), 'success': function (pg5w) {
          console['log']('写入测试测试成功：', pg5w);
        }, 'fail': function (z16_h) {
          console['log']('写入测试测试失败：', z16_h);
        } });
    }, ueqw8b['existDir'] = function ($ri9, yuz6) {
      ueqw8b['fs']['mkdir']({ 'dirPath': $ri9, 'success': function (sfi$) {
          yuz6 != null && yuz6['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (i4f) {
          if (i4f['errMsg']['indexOf']('file already exists') != -0x1) ueqw8b['readSync'](ueqw8b['fileListName'], 'utf8', yuz6);else yuz6 != null && yuz6['runWith']([0x1, i4f]);
        } });
    }, ueqw8b['readSync'] = function (sn43o, l6zbu, bwqe8u, qgeb8) {
      l6zbu === void 0x0 && (l6zbu = 'ascill'), qgeb8 === void 0x0 && (qgeb8 = '');var _243tn = ueqw8b['getFileNativePath'](sn43o),
          f$r9is;try {
        f$r9is = ueqw8b['fs']['readFileSync'](_243tn), bwqe8u != null && bwqe8u['runWith']([0x0, { 'data': f$r9is }]);
      } catch (xk5pv7) {
        bwqe8u != null && bwqe8u['runWith']([0x1]);
      }
    }, ueqw8b['readCache'] = function () {}, ueqw8b['writeCache'] = function (ul86b) {
      var o9fs$ = readyUrl['split']('?')[0x0];ueqw8b['filesListObj'][o9fs$] = { 'md5': md5Name, 'readyUrl': readyUrl }, ueqw8b['fs']['writeFile']({ 'filePath': ueqw8b['fileNativeDir'] + '/' + ueqw8b['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ueqw8b['filesListObj']), 'success': function ($3i) {}, 'fail': function ($4osif) {} });
    }, ueqw8b['setNativeFileDir'] = function (ul6zyh) {
      ueqw8b['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ul6zyh;
    }, ueqw8b['filesListObj'] = {}, ueqw8b['fileNativeDir'] = null, ueqw8b['fileListName'] = 'layaairfiles.txt', ueqw8b['ziyuFileData'] = {}, t_132(ueqw8b, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ueqw8b;
  }(ylzh6u),
      egbxw = function ($fis) {
    function so$34i() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], so$34i['__super']['call'](this), this['_sound'] = so$34i['_createSound']();
    }nh_(so$34i, 'laya.wx.mini.MiniSound', $fis);var k0v75p = so$34i['prototype'];return k0v75p['load'] = function (bl8uz) {
      var pgv75x = this;bl8uz = h1yz6_['formatURL'](bl8uz), this['url'] = bl8uz;if (so$34i['_audioCache'][bl8uz]) {
        this['event']('complete');return;
      }function x57pg() {
        if (so$34i['_null'] != undefined) pgv75x['_sound']['onCanplay'](so$34i['_null']), pgv75x['_sound']['onError'](so$34i['_null']);else try {
          pgv75x['_sound']['onCanplay'](null), pgv75x['_sound']['onError'](null), so$34i['_null'] = null;
        } catch (f$sio) {
          console['warn']('[wxmini] _clearSound:' + f$sio), pgv75x['_sound']['onCanplay'](nt_432), pgv75x['_sound']['onError'](nt_432), so$34i['_null'] = nt_432;
        }
      }function uwb8eq() {
        x57pg(), _y1h2t['loaded'] = !![], _y1h2t['event']('complete'), so$34i['_audioCache'][_y1h2t['url']] = _y1h2t;
      }function io9fs(h6zyl) {
        console['error']('errCode=' + h6zyl['errCode'] + '  errMsg=' + h6zyl['errMsg']), x57pg(), _y1h2t['event']('error');
      }function nt_432() {}this['_sound']['onCanplay'](uwb8eq), this['_sound']['onError'](io9fs), this['_sound']['src'] = bl8uz;var _y1h2t = this;
    }, k0v75p['play'] = function (d7c0k, eb8uwq) {
      d7c0k === void 0x0 && (d7c0k = 0x0), eb8uwq === void 0x0 && (eb8uwq = 0x0);var yth1;if (this['url'] == o423['_tMusic']) {
        if (!so$34i['_musicAudio']) so$34i['_musicAudio'] = so$34i['_createSound']();yth1 = so$34i['_musicAudio'];
      } else yth1 = so$34i['_createSound']();yth1['src'] = this['url'];var wqb = new i$sof4(yth1);return wqb['url'] = this['url'], wqb['loops'] = eb8uwq, wqb['startTime'] = d7c0k, wqb['play'](), o423['addChannel'](wqb), wqb;
    }, k0v75p['dispose'] = function () {
      var o$4i = so$34i['_audioCache'][this['url']];o$4i && (o$4i['src'] = '', delete so$34i['_audioCache'][this['url']]);
    }, s$rf9(0x0, k0v75p, 'duration', function () {
      return this['_sound']['duration'];
    }), so$34i['_createSound'] = function () {
      return so$34i['_id']++, zeu['window']['wx']['createInnerAudioContext']();
    }, so$34i['_musicAudio'] = null, so$34i['_id'] = 0x0, so$34i['_audioCache'] = {}, so$34i['_null'] = undefined, so$34i;
  }(ylzh6u),
      i$sof4 = function (z1_yh6) {
    function ewqxg(vpq) {
      this['_audio'] = null, this['_onEnd'] = null, ewqxg['__super']['call'](this), this['_audio'] = vpq, this['_onEnd'] = vpk75['bind'](this['__onEnd'], this), vpq['onEnded'](this['_onEnd']);
    }nh_(ewqxg, 'laya.wx.mini.MiniSoundChannel', z1_yh6);var h6lz = ewqxg['prototype'];return h6lz['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (y16_zh['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, h6lz['__onNull'] = function () {}, h6lz['play'] = function () {
      this['isStopped'] = ![], o423['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, h6lz['stop'] = function () {
      this['isStopped'] = !![], o423['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ewqxg['_null'] != undefined) this['_audio']['onEnded'](ewqxg['_null']);else try {
        this['_audio']['onEnded'](null), ewqxg['_null'] = null;
      } catch (p7xg) {
        console['warn']('[wxmini] stop:' + p7xg), this['_audio']['onEnded'](vpk75['bind'](this['__onNull'], this)), ewqxg['_null'] = vpk75['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, h6lz['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, h6lz['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], o423['addChannel'](this), this['_audio']['play']();
    }, s$rf9(0x0, h6lz, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), s$rf9(0x0, h6lz, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), s$rf9(0x0, h6lz, 'volume', function () {
      return 0x1;
    }, function (u8ezl) {}), ewqxg['_null'] = undefined, ewqxg;
  }(ly1);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var y_2h6 in Laya) {
    var vqxwpg = Laya[y_2h6];vqxwpg && vqxwpg['__isclass'] && (exports[y_2h6] = vqxwpg);
  }
});