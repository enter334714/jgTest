var A = wx.$N;
(function (window, document, gfyvij) {
  var l_hmx = gfyvij['un'],
      t62wab = gfyvij['uns'],
      fv3ryg = gfyvij['static'],
      rif = gfyvij['class'],
      e62ao8 = gfyvij['getset'],
      yr3vg = gfyvij['__newvec'],
      xdsczn = laya['utils']['Browser'],
      j9q05p = laya['events']['Event'],
      xhlmdz = laya['events']['EventDispatcher'],
      qjfi9y = laya['resource']['HTMLImage'],
      zc75ns = laya['utils']['Handler'],
      aro8 = laya['display']['Input'],
      eor38 = laya['net']['Loader'],
      ry3gf = laya['maths']['Matrix'],
      b2at = laya['renders']['Render'],
      orv3e8 = laya['utils']['RunDriver'],
      yij9q = laya['media']['Sound'],
      xscd = laya['media']['SoundChannel'],
      a6bw2t = laya['media']['SoundManager'],
      jgif = laya['display']['Stage'],
      vf3gr = laya['net']['URL'],
      q9jfi = laya['utils']['Utils'],
      ygqfij = function () {
    function o3e82a() {}return rif(o3e82a, 'laya.wx.mini.MiniAdpter'), o3e82a['getJson'] = function (ora3e) {
      return JSON['parse'](ora3e);
    }, o3e82a['init'] = function (oe8rv3, oa83e) {
      oe8rv3 === void 0x0 && (oe8rv3 = ![]), oa83e === void 0x0 && (oa83e = ![]);if (o3e82a['_inited']) return;o3e82a['window'] = window;if (o3e82a['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;o3e82a['_inited'] = !![], o3e82a['isZiYu'] = oa83e, o3e82a['isPosMsgYu'] = oe8rv3, o3e82a['EnvConfig'] = {}, !o3e82a['isZiYu'] && (p059j['setNativeFileDir']('/layaairGame'), p059j['existDir'](p059j['fileNativeDir'], zc75ns['create'](o3e82a, o3e82a['onMkdirCallBack']))), o3e82a['window']['focus'] = function () {}, gfyvij['getUrlPath'] = function () {}, o3e82a['window']['logtime'] = function (i0qp9) {}, o3e82a['window']['alertTimeLog'] = function (vfygj) {}, o3e82a['window']['resetShareInfo'] = function () {}, o3e82a['window']['CanvasRenderingContext2D'] = function () {}, o3e82a['window']['CanvasRenderingContext2D']['prototype'] = o3e82a['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], o3e82a['window']['document']['body']['appendChild'] = function () {}, o3e82a['EnvConfig']['pixelRatioInt'] = 0x0, orv3e8['getPixelRatio'] = o3e82a['pixelRatio'], o3e82a['_preCreateElement'] = xdsczn['createElement'], xdsczn['createElement'] = o3e82a['createElement'], orv3e8['createShaderCondition'] = o3e82a['createShaderCondition'], q9jfi['parseXMLFromString'] = o3e82a['parseXMLFromString'], aro8['_createInputElement'] = ipyj['_createInputElement'], o3e82a['EnvConfig']['load'] = eor38['prototype']['load'], eor38['prototype']['load'] = $4_u1k['prototype']['load'], o3e82a['isZiYu'] && oe8rv3 && wx['onMessage'](function (yi9p) {
        yi9p['isLoad'] && (p059j['ziyuFileData'][yi9p['url']] = yi9p['data']);
      });
    }, o3e82a['onMkdirCallBack'] = function (yqip9j, gfivyr) {
      if (!yqip9j) p059j['filesListObj'] = JSON['parse'](gfivyr['data']);
    }, o3e82a['pixelRatio'] = function () {
      if (!o3e82a['EnvConfig']['pixelRatioInt']) try {
        var if9yq = wx['getSystemInfoSync']();return o3e82a['EnvConfig']['pixelRatioInt'] = if9yq['pixelRatio'], if9yq = if9yq, if9yq['pixelRatio'];
      } catch (nzds7c) {}return o3e82a['EnvConfig']['pixelRatioInt'];
    }, o3e82a['createElement'] = function (gf8vr3) {
      if (gf8vr3 == 'canvas') {
        var b6o2aw;return o3e82a['idx'] == 0x1 ? o3e82a['isZiYu'] ? (b6o2aw = sharedCanvas, b6o2aw['style'] = {}) : b6o2aw = window['canvas'] : b6o2aw = window['wx']['createCanvas'](), o3e82a['idx']++, b6o2aw;
      } else {
        if (gf8vr3 == 'textarea' || gf8vr3 == 'input') return o3e82a['onCreateInput'](gf8vr3);else {
          if (gf8vr3 == 'div') {
            var sdc = o3e82a['_preCreateElement'](gf8vr3);return sdc['contains'] = function (kdhxl) {
              return null;
            }, sdc['removeChild'] = function (hmxlz) {}, sdc;
          } else return o3e82a['_preCreateElement'](gf8vr3);
        }
      }
    }, o3e82a['onCreateInput'] = function (e83ovr) {
      var p9ji = o3e82a['_preCreateElement'](e83ovr);return p9ji['focus'] = ipyj['wxinputFocus'], p9ji['blur'] = ipyj['wxinputblur'], p9ji['style'] = {}, p9ji['value'] = 0x0, p9ji['parentElement'] = {}, p9ji['placeholder'] = {}, p9ji['type'] = {}, p9ji['setColor'] = function (ijgyq) {}, p9ji['setType'] = function (lk_) {}, p9ji['setFontFace'] = function (i0p9j) {}, p9ji['addEventListener'] = function (wat2b) {}, p9ji['contains'] = function (fij9y) {
        return null;
      }, p9ji['removeChild'] = function (ae238) {}, p9ji;
    }, o3e82a['createShaderCondition'] = function (v3ger8) {
      var $kuh4_ = this,
          b6wt2 = function () {
        var erov83 = v3ger8;return $kuh4_[v3ger8['replace']('this.', '')];
      };return b6wt2;
    }, o3e82a['EnvConfig'] = null, o3e82a['window'] = null, o3e82a['_preCreateElement'] = null, o3e82a['_inited'] = ![], o3e82a['wxRequest'] = null, o3e82a['systemInfo'] = null, o3e82a['version'] = '0.0.1', o3e82a['isZiYu'] = ![], o3e82a['isPosMsgYu'] = ![], o3e82a['parseXMLFromString'] = function (pqjiy) {
      var ea286o, q9p750;pqjiy = pqjiy['replace'](/>\s+</g, '><');try {
        ea286o = new window['Parser']['DOMParser']()['parseFromString'](pqjiy, 'text/xml');
      } catch (lkmxdh) {
        throw '需要引入xml解析库文件';
      }return ea286o;
    }, o3e82a['idx'] = 0x1, o3e82a;
  }(),
      v3gy = function () {
    function vrygi() {}rif(vrygi, 'laya.wx.mini.MiniImage');var a2wob6 = vrygi['prototype'];return a2wob6['_loadImage'] = function (d7) {
      var l$hk_m = this,
          sc5nz7 = ![];d7['indexOf']('layaNativeDir/') == -0x1 && (sc5nz7 = !![], d7 = vf3gr['formatURL'](d7));if (!p059j['getFileInfo'](d7)) {
        if (d7['indexOf']('http://') != -0x1 || d7['indexOf']('https://') != -0x1) p059j['downImg'](d7, new zc75ns(vrygi, vrygi['onDownImgCallBack'], [d7, l$hk_m]), d7);else vrygi['onCreateImage'](d7, l$hk_m, !![]);
      } else vrygi['onCreateImage'](d7, l$hk_m, !sc5nz7);
    }, vrygi['onDownImgCallBack'] = function (p95c, e8o6, h4mk_) {
      if (!h4mk_) vrygi['onCreateImage'](p95c, e8o6);else e8o6['onError'](null);
    }, vrygi['onCreateImage'] = function (mxlk_h, a862e, qjfyi9) {
      qjfyi9 === void 0x0 && (qjfyi9 = ![]);var csn5z;if (!qjfyi9) {
        var nd7cz = p059j['getFileInfo'](mxlk_h),
            igqfyj = nd7cz['md5'];csn5z = p059j['getFileNativePath'](igqfyj);
      } else csn5z = mxlk_h;if (a862e['imgCache'] == null) a862e['imgCache'] = {};var sxnzl;function mdkl() {
        sxnzl['onload'] = null, sxnzl['onerror'] = null, delete a862e['imgCache'][mxlk_h];
      };var qig = function () {
        mdkl(), a862e['onLoaded'](sxnzl);
      },
          klmh = function () {
        mdkl(), a862e['event']('error', 'Load image failed');
      };a862e['_type'] == 'nativeimage' ? (sxnzl = new xdsczn['window']['Image'](), sxnzl['crossOrigin'] = '', sxnzl['onload'] = qig, sxnzl['onerror'] = klmh, sxnzl['src'] = csn5z, a862e['imgCache'][mxlk_h] = sxnzl) : new qjfi9y['create'](csn5z, { 'onload': qig, 'onerror': klmh, 'onCreate': function ($k14_) {
          sxnzl = $k14_, a862e['imgCache'][mxlk_h] = $k14_;
        } });
    }, vrygi;
  }(),
      ipyj = function () {
    function g3rvf8() {}return rif(g3rvf8, 'laya.wx.mini.MiniInput'), g3rvf8['_createInputElement'] = function () {
      aro8['_initInput'](aro8['area'] = xdsczn['createElement']('textarea')), aro8['_initInput'](aro8['input'] = xdsczn['createElement']('input')), aro8['inputContainer'] = xdsczn['createElement']('div'), aro8['inputContainer']['style']['position'] = 'absolute', aro8['inputContainer']['style']['zIndex'] = 0x186a0, xdsczn['container']['appendChild'](aro8['inputContainer']), aro8['inputContainer']['setPos'] = function (p079q, t62w) {
        aro8['inputContainer']['style']['left'] = p079q + 'px', aro8['inputContainer']['style']['top'] = t62w + 'px';
      }, gfyvij['stage']['on']('resize', null, g3rvf8['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (dsxcnz) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), a6bw2t['_soundClass'] = f9iy, a6bw2t['_musicClass'] = f9iy;
    }, g3rvf8['_onStageResize'] = function () {
      var cxnd = gfyvij['stage']['_canvasTransform']['identity']();cxnd['scale'](xdsczn['width'] / b2at['canvas']['width'] / orv3e8['getPixelRatio'](), xdsczn['height'] / b2at['canvas']['height'] / orv3e8['getPixelRatio']());
    }, g3rvf8['wxinputFocus'] = function (cnxdzs) {
      var a26wbt = aro8['inputElement']['target'];if (a26wbt && !a26wbt['editable']) return;ygqfij['window']['wx']['offKeyboardConfirm'](), ygqfij['window']['wx']['offKeyboardInput'](), ygqfij['window']['wx']['showKeyboard']({ 'defaultValue': a26wbt['text'], 'maxLength': a26wbt['maxChars'], 'multiple': a26wbt['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (_4$u1k) {}, 'fail': function (dhlxk) {} }), ygqfij['window']['wx']['onKeyboardConfirm'](function (ov83) {
        var bwao2 = ov83 ? ov83['value'] : '';a26wbt['text'] = bwao2, a26wbt['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ygqfij['window']['wx']['onKeyboardInput'](function (qjp95) {
        var t26awb = qjp95 ? qjp95['value'] : '';if (!a26wbt['multiline']) {
          if (t26awb['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }a26wbt['text'] = t26awb, a26wbt['event']('input');
      });
    }, g3rvf8['inputEnter'] = function () {
      aro8['inputElement']['target']['focus'] = ![];
    }, g3rvf8['wxinputblur'] = function () {
      g3rvf8['hideKeyboard']();
    }, g3rvf8['hideKeyboard'] = function () {
      ygqfij['window']['wx']['offKeyboardConfirm'](), ygqfij['window']['wx']['offKeyboardInput'](), ygqfij['window']['wx']['hideKeyboard']({ 'success': function (gjqyf) {
          console['log']('隐藏键盘');
        }, 'fail': function (c5097p) {
          console['log']('隐藏键盘出错:' + (c5097p ? c5097p['errMsg'] : ''));
        } });
    }, g3rvf8;
  }(),
      $4_u1k = function () {
    function giyvr() {}rif(giyvr, 'laya.wx.mini.MiniLoader');var vgf3ry = giyvr['prototype'];return vgf3ry['load'] = function (b26w, yqigf, _m$hl, jygfvi, wbta2) {
      _m$hl === void 0x0 && (_m$hl = !![]), wbta2 === void 0x0 && (wbta2 = ![]);var q905jp = this;q905jp['_url'] = b26w;if (b26w['indexOf']('data:image') === 0x0) q905jp['_type'] = yqigf = 'image';else q905jp['_type'] = yqigf || (yqigf = q905jp['getTypeFromUrl'](b26w));q905jp['_cache'] = _m$hl, q905jp['_data'] = null;var kh$_lm = 'ascii';if (b26w['indexOf']('.fnt') != -0x1) kh$_lm = 'utf8';else yqigf == 'arraybuffer' && (kh$_lm = '');;var c507n = q9jfi['getFileExtension'](b26w);if (giyvr['_fileTypeArr']['indexOf'](c507n) != -0x1) ygqfij['EnvConfig']['load']['call'](this, b26w, yqigf, _m$hl, jygfvi, wbta2);else {
        if (!p059j['getFileInfo'](b26w)) {
          if (b26w['indexOf']('layaNativeDir/') != -0x1) {
            if (ygqfij['isZiYu']) {
              var ivgjyf = p059j['ziyuFileData'][b26w];q905jp['onLoaded'](ivgjyf);return;
            } else {
              cosnole['log']('read read'), p059j['read'](b26w, kh$_lm, new zc75ns(giyvr, giyvr['onReadNativeCallBack'], [kh$_lm, b26w, yqigf, _m$hl, jygfvi, wbta2, q905jp]));return;
            }
          }if (vf3gr['rootPath'] == '') var dsnlzx = b26w;else dsnlzx = b26w['split'](vf3gr['rootPath'])[0x0];b26w['indexOf']('http://') != -0x1 || b26w['indexOf']('https://') != -0x1 ? ygqfij['EnvConfig']['load']['call'](q905jp, b26w, yqigf, _m$hl, jygfvi, wbta2) : p059j['readFile'](dsnlzx, kh$_lm, new zc75ns(giyvr, giyvr['onReadNativeCallBack'], [kh$_lm, b26w, yqigf, _m$hl, jygfvi, wbta2, q905jp]), b26w);
        } else ygqfij['EnvConfig']['load']['call'](this, b26w, yqigf, _m$hl, jygfvi, wbta2);
      }
    }, vgf3ry['resMgrLoad'] = function (lm$_h, lnzxm, e83aro, aeo, sc7n5, f3grv8, gfyjiv) {
      e83aro === void 0x0 && (e83aro = 0x0), aeo === void 0x0 && (aeo = ![]), sc7n5 === void 0x0 && (sc7n5 = ![]), f3grv8 === void 0x0 && (f3grv8 = 0x0), gfyjiv === void 0x0 && (gfyjiv = 0x3), lm$_h['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', lm$_h), ygqfij['EnvConfig']['resMgrLoad'](lm$_h, (rvge, xzdcs, erov8) => {
        giyvr['prototype']['resMgrLoadCallBack'](rvge, xzdcs, erov8, lnzxm);
      }, e83aro, aeo, sc7n5, f3grv8, gfyjiv);
    }, vgf3ry['resMgrLoadCallBack'] = function (fygjq, ge38rv, yiqpj, v3g8re) {
      console['log']('buff:::', fygjq, yiqpj, p059j['fileNativeDir'] + '///' + p059j['fileListName']), v3g8re(fygjq, ge38rv, yiqpj);
    }, vgf3ry['clearRes'] = function (re3v, lxdkmh) {
      lxdkmh === void 0x0 && (lxdkmh = ![]);var pq09j = this;pq09j['clearRes'](re3v, lxdkmh);var j0pi = p059j['getFileInfo'](re3v);if (j0pi && (re3v['indexOf']('http://') != -0x1 || re3v['indexOf']('https://') != -0x1)) {
        var cndszx = j0pi['md5'],
            xzmln = p059j['getFileNativePath'](cndszx);p059j['remove'](xzmln);
      }
    }, giyvr['onReadNativeCallBack'] = function (eor3a8, yq9ji, ncszxd, $hkm4, bowa2, bt2wa6, e862oa, xmndlz, _$hklm) {
      $hkm4 === void 0x0 && ($hkm4 = !![]), bt2wa6 === void 0x0 && (bt2wa6 = ![]), xmndlz === void 0x0 && (xmndlz = 0x0);if (!xmndlz) {
        var eao83;if (ncszxd == 'json' || ncszxd == 'atlas') eao83 = ygqfij['getJson'](_$hklm['data']);else ncszxd == 'xml' ? eao83 = q9jfi['parseXMLFromString'](_$hklm['data']) : eao83 = _$hklm['data'];e862oa['onLoaded'](eao83), !ygqfij['isZiYu'] && ygqfij['isPosMsgYu'] && ncszxd != 'arraybuffer' && wx['postMessage']({ 'url': yq9ji, 'data': eao83, 'isLoad': !![] });
      } else xmndlz == 0x1 && ygqfij['EnvConfig']['load']['call'](e862oa, yq9ji, ncszxd, $hkm4, bowa2, bt2wa6);
    }, fv3ryg(giyvr, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), giyvr;
  }(),
      p059j = function (oaw6e) {
    function xdlmz() {
      xdlmz['__super']['call'](this);;
    }return rif(xdlmz, 'laya.wx.mini.MiniFileMgr', oaw6e), xdlmz['isLoadFile'] = function (fv3r8) {
      return xdlmz['_fileTypeArr']['indexOf'](fv3r8) != -0x1 ? !![] : ![];
    }, xdlmz['getFileInfo'] = function (dkmlx) {
      var g3re8v = dkmlx['split']('?')[0x0],
          nz7cs5 = xdlmz['filesListObj'][g3re8v];if (nz7cs5 == null) return null;else return nz7cs5;return null;
    }, xdlmz['onFileUpdate'] = function (rf8g3v, $14uk_) {
      var ndcs7 = rf8g3v['split']('/'),
          fvgj = ndcs7[ndcs7['length'] - 0x1],
          oa2w6e = xdlmz['getFileInfo']($14uk_);if (oa2w6e == null) xdlmz['onSaveFile']($14uk_, fvgj);else {
        if (oa2w6e['readyUrl'] != $14uk_) xdlmz['remove'](fvgj, $14uk_);
      }
    }, xdlmz['exits'] = function (a6o2e, _klmhx) {
      var ab2tw6 = xdlmz['getFileNativePath'](a6o2e);xdlmz['fs']['getFileInfo']({ 'filePath': ab2tw6, 'success': function (mldhx) {
          _klmhx != null && _klmhx['runWith']([0x0, mldhx]);
        }, 'fail': function (hdlk) {
          _klmhx != null && _klmhx['runWith']([0x1, hdlk]);
        } });
    }, xdlmz['read'] = function (csndz, yvfij, $h_uk4, fqj9iy) {
      yvfij === void 0x0 && (yvfij = 'ascill'), fqj9iy === void 0x0 && (fqj9iy = '');var lzhx;fqj9iy != '' ? lzhx = xdlmz['getFileNativePath'](csndz) : lzhx = csndz, xdlmz['fs']['readFile']({ 'filePath': lzhx, 'encoding': yvfij, 'success': function (xncd) {
          $h_uk4 != null && $h_uk4['runWith']([0x0, xncd]);
        }, 'fail': function (jyfqi) {
          if (jyfqi && fqj9iy != '') xdlmz['down'](fqj9iy, yvfij, $h_uk4, fqj9iy);else $h_uk4 != null && $h_uk4['runWith']([0x1]);
        } });
    }, xdlmz['readNativeFile'] = function (dzcns, g38vrf) {
      xdlmz['fs']['readFile']({ 'filePath': dzcns, 'encoding': '', 'success': function (grvyi) {
          g38vrf != null && g38vrf['runWith']([0x0]);
        }, 'fail': function ($k_4hm) {
          g38vrf != null && g38vrf['runWith']([0x1]);
        } });
    }, xdlmz['down'] = function (wa26e, vygfi, ry3fgv, sz7c5) {
      vygfi === void 0x0 && (vygfi = 'ascill'), sz7c5 === void 0x0 && (sz7c5 = '');var szc5n = xdlmz['getFileNativePath'](sz7c5),
          nsxd = xdlmz['wxdown']({ 'url': wa26e, 'filePath': szc5n, 'success': function (lzdhmx) {
          if (lzdhmx['statusCode'] === 0xc8) xdlmz['readFile'](lzdhmx['filePath'], vygfi, ry3fgv, sz7c5);
        }, 'fail': function (aw2t6b) {
          ry3fgv != null && ry3fgv['runWith']([0x1, aw2t6b]);
        } });nsxd['onProgressUpdate'](function (qjp09i) {
        ry3fgv != null && ry3fgv['runWith']([0x2, qjp09i['progress']]);
      });
    }, xdlmz['readFile'] = function (_ku$4h, gvjyfi, xsldz, q97p5) {
      gvjyfi === void 0x0 && (gvjyfi = 'ascill'), q97p5 === void 0x0 && (q97p5 = ''), xdlmz['fs']['readFile']({ 'filePath': _ku$4h, 'encoding': gvjyfi, 'success': function (nlmxd) {
          if (_ku$4h['indexOf']('http://') != -0x1 || _ku$4h['indexOf']('https://') != -0x1) xdlmz['onFileUpdate'](_ku$4h, q97p5);xsldz != null && xsldz['runWith']([0x0, nlmxd]);
        }, 'fail': function (cdzsn7) {
          if (cdzsn7) xsldz != null && xsldz['runWith']([0x1, cdzsn7]);
        } });
    }, xdlmz['downImg'] = function (dszn7c, pq0j5, a2bw) {
      a2bw === void 0x0 && (a2bw = '');var yq9ijf = xdlmz['wxdown']({ 'url': dszn7c, 'success': function (qj9fy) {
          qj9fy['statusCode'] === 0xc8 && xdlmz['copyFile'](qj9fy['tempFilePath'], a2bw, pq0j5);
        }, 'fail': function (jq0p5) {
          pq0j5 != null && pq0j5['runWith']([0x1, jq0p5]);
        } });
    }, xdlmz['copyFile'] = function (gjyfiq, rg8vf3, e6a8) {
      var mkdlhx = gjyfiq['split']('/'),
          zdnc = mkdlhx[mkdlhx['length'] - 0x1],
          ae26 = rg8vf3['split']('?')[0x0],
          hmk = xdlmz['getFileInfo'](rg8vf3),
          dzsxc = xdlmz['getFileNativePath'](zdnc);xdlmz['fs']['copyFile']({ 'srcPath': gjyfiq, 'destPath': dzsxc, 'success': function (ldkxhm) {
          if (!hmk) xdlmz['onSaveFile'](rg8vf3, zdnc), e6a8 != null && e6a8['runWith']([0x0]);else {
            if (hmk['readyUrl'] != rg8vf3) xdlmz['remove'](zdnc, rg8vf3, e6a8);
          }
        }, 'fail': function (dnslx) {
          e6a8 != null && e6a8['runWith']([0x1, dnslx]);
        } });
    }, xdlmz['getFileNativePath'] = function ($_hmk) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $_hmk;
    }, xdlmz['remove'] = function (ip9yjq, q95p0j, _m$4hk) {
      q95p0j === void 0x0 && (q95p0j = '');var xnm = xdlmz['getFileInfo'](q95p0j),
          ev8or3 = xdlmz['getFileNativePath'](xnm['md5']);gfyvij['loader']['clearRes'](xnm['readyUrl']), xdlmz['fs']['unlink']({ 'filePath': ev8or3, 'success': function ($lk) {
          if (q95p0j != '') xdlmz['onSaveFile'](q95p0j, ip9yjq);_m$4hk != null && _m$4hk['runWith']([0x0]);
        }, 'fail': function (lxmzdn) {} });
    }, xdlmz['onSaveFile'] = function (c7s5p0, mnxld) {
      var cs5p = c7s5p0['split']('?')[0x0];xdlmz['filesListObj'][cs5p] = { 'md5': mnxld, 'readyUrl': c7s5p0 }, xdlmz['fs']['writeFile']({ 'filePath': xdlmz['fileNativeDir'] + '/' + xdlmz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xdlmz['filesListObj']), 'success': function (a283) {
          console['log']('写入测试测试成功：', a283);
        }, 'fail': function (twb26) {
          console['log']('写入测试测试失败：', twb26);
        } });
    }, xdlmz['existDir'] = function (znscx, a3r8oe) {
      xdlmz['fs']['mkdir']({ 'dirPath': znscx, 'success': function (bw6at2) {
          a3r8oe != null && a3r8oe['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (vfyigj) {
          if (vfyigj['errMsg']['indexOf']('file already exists') != -0x1) xdlmz['readSync'](xdlmz['fileListName'], 'utf8', a3r8oe);else a3r8oe != null && a3r8oe['runWith']([0x1, vfyigj]);
        } });
    }, xdlmz['readSync'] = function (ndcsx, jiq90, yjp9q, $kl) {
      jiq90 === void 0x0 && (jiq90 = 'ascill'), $kl === void 0x0 && ($kl = '');var fgvyj = xdlmz['getFileNativePath'](ndcsx),
          hdxzml;try {
        hdxzml = xdlmz['fs']['readFileSync'](fgvyj), yjp9q != null && yjp9q['runWith']([0x0, { 'data': hdxzml }]);
      } catch (hmlk) {
        yjp9q != null && yjp9q['runWith']([0x1]);
      }
    }, xdlmz['readCache'] = function () {}, xdlmz['writeCache'] = function (lxkd) {
      var ifygvj = readyUrl['split']('?')[0x0];xdlmz['filesListObj'][ifygvj] = { 'md5': md5Name, 'readyUrl': readyUrl }, xdlmz['fs']['writeFile']({ 'filePath': xdlmz['fileNativeDir'] + '/' + xdlmz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xdlmz['filesListObj']), 'success': function (aw2ob6) {}, 'fail': function (eor3v) {} });
    }, xdlmz['setNativeFileDir'] = function (n7dcs) {
      xdlmz['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + n7dcs;
    }, xdlmz['filesListObj'] = {}, xdlmz['fileNativeDir'] = null, xdlmz['fileListName'] = 'layaairfiles.txt', xdlmz['ziyuFileData'] = {}, fv3ryg(xdlmz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), xdlmz;
  }(xhlmdz),
      f9iy = function (_$klhm) {
    function mxdlnz() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], mxdlnz['__super']['call'](this), this['_sound'] = mxdlnz['_createSound']();
    }rif(mxdlnz, 'laya.wx.mini.MiniSound', _$klhm);var xdscn = mxdlnz['prototype'];return xdscn['load'] = function (o26bw) {
      var yfjgiv = this;o26bw = vf3gr['formatURL'](o26bw), this['url'] = o26bw;if (mxdlnz['_audioCache'][o26bw]) {
        this['event']('complete');return;
      }function _hxklm() {
        if (mxdlnz['_null'] != undefined) yfjgiv['_sound']['onCanplay'](mxdlnz['_null']), yfjgiv['_sound']['onError'](mxdlnz['_null']);else try {
          yfjgiv['_sound']['onCanplay'](null), yfjgiv['_sound']['onError'](null), mxdlnz['_null'] = null;
        } catch (dklxmh) {
          console['warn']('[wxmini] _clearSound:' + dklxmh), yfjgiv['_sound']['onCanplay'](hm_l$k), yfjgiv['_sound']['onError'](hm_l$k), mxdlnz['_null'] = hm_l$k;
        }
      }function fgivjy() {
        _hxklm(), k$4hu['loaded'] = !![], k$4hu['event']('complete'), mxdlnz['_audioCache'][k$4hu['url']] = k$4hu;
      }function ro8ea(igv) {
        console['error']('errCode=' + igv['errCode'] + '  errMsg=' + igv['errMsg']), _hxklm(), k$4hu['event']('error');
      }function hm_l$k() {}this['_sound']['onCanplay'](fgivjy), this['_sound']['onError'](ro8ea), this['_sound']['src'] = o26bw;var k$4hu = this;
    }, xdscn['play'] = function (firv, ygjfv) {
      firv === void 0x0 && (firv = 0x0), ygjfv === void 0x0 && (ygjfv = 0x0);var qjpyi9;if (this['url'] == a6bw2t['_tMusic']) {
        if (!mxdlnz['_musicAudio']) mxdlnz['_musicAudio'] = mxdlnz['_createSound']();qjpyi9 = mxdlnz['_musicAudio'];
      } else qjpyi9 = mxdlnz['_createSound']();qjpyi9['src'] = this['url'];var o3vre8 = new eo3ra8(qjpyi9);return o3vre8['url'] = this['url'], o3vre8['loops'] = ygjfv, o3vre8['startTime'] = firv, o3vre8['play'](), a6bw2t['addChannel'](o3vre8), o3vre8;
    }, xdscn['dispose'] = function () {
      var hmxl_ = mxdlnz['_audioCache'][this['url']];hmxl_ && (hmxl_['src'] = '', delete mxdlnz['_audioCache'][this['url']]);
    }, e62ao8(0x0, xdscn, 'duration', function () {
      return this['_sound']['duration'];
    }), mxdlnz['_createSound'] = function () {
      return mxdlnz['_id']++, ygqfij['window']['wx']['createInnerAudioContext']();
    }, mxdlnz['_musicAudio'] = null, mxdlnz['_id'] = 0x0, mxdlnz['_audioCache'] = {}, mxdlnz['_null'] = undefined, mxdlnz;
  }(xhlmdz),
      eo3ra8 = function (zlh) {
    function gjvy(m4k$) {
      this['_audio'] = null, this['_onEnd'] = null, gjvy['__super']['call'](this), this['_audio'] = m4k$, this['_onEnd'] = q9jfi['bind'](this['__onEnd'], this), m4k$['onEnded'](this['_onEnd']);
    }rif(gjvy, 'laya.wx.mini.MiniSoundChannel', zlh);var fg3ry = gjvy['prototype'];return fg3ry['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (gfyvij['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, fg3ry['__onNull'] = function () {}, fg3ry['play'] = function () {
      this['isStopped'] = ![], a6bw2t['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, fg3ry['stop'] = function () {
      this['isStopped'] = !![], a6bw2t['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (gjvy['_null'] != undefined) this['_audio']['onEnded'](gjvy['_null']);else try {
        this['_audio']['onEnded'](null), gjvy['_null'] = null;
      } catch (p905) {
        console['warn']('[wxmini] stop:' + p905), this['_audio']['onEnded'](q9jfi['bind'](this['__onNull'], this)), gjvy['_null'] = q9jfi['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, fg3ry['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, fg3ry['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], a6bw2t['addChannel'](this), this['_audio']['play']();
    }, e62ao8(0x0, fg3ry, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), e62ao8(0x0, fg3ry, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), e62ao8(0x0, fg3ry, 'volume', function () {
      return 0x1;
    }, function (re8v3o) {}), gjvy['_null'] = undefined, gjvy;
  }(xscd);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var p57sc in Laya) {
    var aeo23 = Laya[p57sc];aeo23 && aeo23['__isclass'] && (exports[p57sc] = aeo23);
  }
});