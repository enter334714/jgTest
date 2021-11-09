var A = wx.$N;
(function (window, document, dznxml) {
  var dxl = dznxml['un'],
      hmlz = dznxml['uns'],
      dhlzx = dznxml['static'],
      oa2wb6 = dznxml['class'],
      g3vf8 = dznxml['getset'],
      hkxl_m = dznxml['__newvec'],
      fvirgy = laya['utils']['Browser'],
      cns7d = laya['events']['Event'],
      fg = laya['events']['EventDispatcher'],
      jq5p9 = laya['resource']['HTMLImage'],
      o38ear = laya['utils']['Handler'],
      c7nzds = laya['display']['Input'],
      gr8f = laya['net']['Loader'],
      dxmh = laya['maths']['Matrix'],
      oa32 = laya['renders']['Render'],
      sndczx = laya['utils']['RunDriver'],
      yqjp9 = laya['media']['Sound'],
      v3ero8 = laya['media']['SoundChannel'],
      v3ger = laya['media']['SoundManager'],
      h_xlm = laya['display']['Stage'],
      p5sc0 = laya['net']['URL'],
      p0c97 = laya['utils']['Utils'],
      yrvf3g = function () {
    function i9p0j() {}return oa2wb6(i9p0j, 'laya.wx.mini.MiniAdpter'), i9p0j['getJson'] = function (gyjq) {
      return JSON['parse'](gyjq);
    }, i9p0j['init'] = function (w6b2a, dxhmlk) {
      w6b2a === void 0x0 && (w6b2a = ![]), dxhmlk === void 0x0 && (dxhmlk = ![]);if (i9p0j['_inited']) return;i9p0j['window'] = window;if (i9p0j['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;i9p0j['_inited'] = !![], i9p0j['isZiYu'] = dxhmlk, i9p0j['isPosMsgYu'] = w6b2a, i9p0j['EnvConfig'] = {}, !i9p0j['isZiYu'] && (dxznml['setNativeFileDir']('/layaairGame'), dxznml['existDir'](dxznml['fileNativeDir'], o38ear['create'](i9p0j, i9p0j['onMkdirCallBack']))), i9p0j['window']['focus'] = function () {}, dznxml['getUrlPath'] = function () {}, i9p0j['window']['logtime'] = function (vf3yrg) {}, i9p0j['window']['alertTimeLog'] = function (qjy9fi) {}, i9p0j['window']['resetShareInfo'] = function () {}, i9p0j['window']['CanvasRenderingContext2D'] = function () {}, i9p0j['window']['CanvasRenderingContext2D']['prototype'] = i9p0j['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i9p0j['window']['document']['body']['appendChild'] = function () {}, i9p0j['EnvConfig']['pixelRatioInt'] = 0x0, sndczx['getPixelRatio'] = i9p0j['pixelRatio'], i9p0j['_preCreateElement'] = fvirgy['createElement'], fvirgy['createElement'] = i9p0j['createElement'], sndczx['createShaderCondition'] = i9p0j['createShaderCondition'], p0c97['parseXMLFromString'] = i9p0j['parseXMLFromString'], c7nzds['_createInputElement'] = aw6tb2['_createInputElement'], i9p0j['EnvConfig']['load'] = gr8f['prototype']['load'], gr8f['prototype']['load'] = pq09i['prototype']['load'], i9p0j['isZiYu'] && w6b2a && wx['onMessage'](function (abow62) {
        abow62['isLoad'] && (dxznml['ziyuFileData'][abow62['url']] = abow62['data']);
      });
    }, i9p0j['onMkdirCallBack'] = function (q7059, dnlxz) {
      if (!q7059) dxznml['filesListObj'] = JSON['parse'](dnlxz['data']);
    }, i9p0j['pixelRatio'] = function () {
      if (!i9p0j['EnvConfig']['pixelRatioInt']) try {
        var z75snc = wx['getSystemInfoSync']();return i9p0j['EnvConfig']['pixelRatioInt'] = z75snc['pixelRatio'], z75snc = z75snc, z75snc['pixelRatio'];
      } catch (w2boa6) {}return i9p0j['EnvConfig']['pixelRatioInt'];
    }, i9p0j['createElement'] = function (rgy) {
      if (rgy == 'canvas') {
        var rgiyf;return i9p0j['idx'] == 0x1 ? i9p0j['isZiYu'] ? (rgiyf = sharedCanvas, rgiyf['style'] = {}) : rgiyf = window['canvas'] : rgiyf = window['wx']['createCanvas'](), i9p0j['idx']++, rgiyf;
      } else {
        if (rgy == 'textarea' || rgy == 'input') return i9p0j['onCreateInput'](rgy);else {
          if (rgy == 'div') {
            var zdxlmn = i9p0j['_preCreateElement'](rgy);return zdxlmn['contains'] = function (yvg) {
              return null;
            }, zdxlmn['removeChild'] = function (csdz7n) {}, zdxlmn;
          } else return i9p0j['_preCreateElement'](rgy);
        }
      }
    }, i9p0j['onCreateInput'] = function (xmkldh) {
      var m_$lk = i9p0j['_preCreateElement'](xmkldh);return m_$lk['focus'] = aw6tb2['wxinputFocus'], m_$lk['blur'] = aw6tb2['wxinputblur'], m_$lk['style'] = {}, m_$lk['value'] = 0x0, m_$lk['parentElement'] = {}, m_$lk['placeholder'] = {}, m_$lk['type'] = {}, m_$lk['setColor'] = function (khlm_x) {}, m_$lk['setType'] = function (hlm_$k) {}, m_$lk['setFontFace'] = function (mdxh) {}, m_$lk['addEventListener'] = function (dz7cn) {}, m_$lk['contains'] = function (p05j9) {
        return null;
      }, m_$lk['removeChild'] = function (kdx) {}, m_$lk;
    }, i9p0j['createShaderCondition'] = function (_1uk$4) {
      var hk_l = this,
          ldnzmx = function () {
        var oa38e = _1uk$4;return hk_l[_1uk$4['replace']('this.', '')];
      };return ldnzmx;
    }, i9p0j['EnvConfig'] = null, i9p0j['window'] = null, i9p0j['_preCreateElement'] = null, i9p0j['_inited'] = ![], i9p0j['wxRequest'] = null, i9p0j['systemInfo'] = null, i9p0j['version'] = '0.0.1', i9p0j['isZiYu'] = ![], i9p0j['isPosMsgYu'] = ![], i9p0j['parseXMLFromString'] = function (a3e28o) {
      var zlnxd, y3rvf;a3e28o = a3e28o['replace'](/>\s+</g, '><');try {
        zlnxd = new window['Parser']['DOMParser']()['parseFromString'](a3e28o, 'text/xml');
      } catch (zsd7c) {
        throw '需要引入xml解析库文件';
      }return zlnxd;
    }, i9p0j['idx'] = 0x1, i9p0j;
  }(),
      klh_$ = function () {
    function sp7c50() {}oa2wb6(sp7c50, 'laya.wx.mini.MiniImage');var igqf = sp7c50['prototype'];return igqf['_loadImage'] = function (ge) {
      var q9ipjy = this,
          v3oer8 = ![];ge['indexOf']('layaNativeDir/') == -0x1 && (v3oer8 = !![], ge = p5sc0['formatURL'](ge));if (!dxznml['getFileInfo'](ge)) {
        if (ge['indexOf']('http://') != -0x1 || ge['indexOf']('https://') != -0x1) dxznml['downImg'](ge, new o38ear(sp7c50, sp7c50['onDownImgCallBack'], [ge, q9ipjy]), ge);else sp7c50['onCreateImage'](ge, q9ipjy, !![]);
      } else sp7c50['onCreateImage'](ge, q9ipjy, !v3oer8);
    }, sp7c50['onDownImgCallBack'] = function (mxhlzd, eo6a2w, v8rg3e) {
      if (!v8rg3e) sp7c50['onCreateImage'](mxhlzd, eo6a2w);else eo6a2w['onError'](null);
    }, sp7c50['onCreateImage'] = function (yvgifr, t26w, jyiqgf) {
      jyiqgf === void 0x0 && (jyiqgf = ![]);var or3ea;if (!jyiqgf) {
        var dlmzh = dxznml['getFileInfo'](yvgifr),
            wta62 = dlmzh['md5'];or3ea = dxznml['getFileNativePath'](wta62);
      } else or3ea = yvgifr;if (t26w['imgCache'] == null) t26w['imgCache'] = {};var gv8r3f;function wbta62() {
        gv8r3f['onload'] = null, gv8r3f['onerror'] = null, delete t26w['imgCache'][yvgifr];
      };var ryvgfi = function () {
        wbta62(), t26w['onLoaded'](gv8r3f);
      },
          b6aw2o = function () {
        wbta62(), t26w['event']('error', 'Load image failed');
      };t26w['_type'] == 'nativeimage' ? (gv8r3f = new fvirgy['window']['Image'](), gv8r3f['crossOrigin'] = '', gv8r3f['onload'] = ryvgfi, gv8r3f['onerror'] = b6aw2o, gv8r3f['src'] = or3ea, t26w['imgCache'][yvgifr] = gv8r3f) : new jq5p9['create'](or3ea, { 'onload': ryvgfi, 'onerror': b6aw2o, 'onCreate': function (c7dzs) {
          gv8r3f = c7dzs, t26w['imgCache'][yvgifr] = c7dzs;
        } });
    }, sp7c50;
  }(),
      aw6tb2 = function () {
    function e86oa2() {}return oa2wb6(e86oa2, 'laya.wx.mini.MiniInput'), e86oa2['_createInputElement'] = function () {
      c7nzds['_initInput'](c7nzds['area'] = fvirgy['createElement']('textarea')), c7nzds['_initInput'](c7nzds['input'] = fvirgy['createElement']('input')), c7nzds['inputContainer'] = fvirgy['createElement']('div'), c7nzds['inputContainer']['style']['position'] = 'absolute', c7nzds['inputContainer']['style']['zIndex'] = 0x186a0, fvirgy['container']['appendChild'](c7nzds['inputContainer']), c7nzds['inputContainer']['setPos'] = function (sncz5, l$mk_h) {
        c7nzds['inputContainer']['style']['left'] = sncz5 + 'px', c7nzds['inputContainer']['style']['top'] = l$mk_h + 'px';
      }, dznxml['stage']['on']('resize', null, e86oa2['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (kl_$h) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), v3ger['_soundClass'] = ps075, v3ger['_musicClass'] = ps075;
    }, e86oa2['_onStageResize'] = function () {
      var lmhk_ = dznxml['stage']['_canvasTransform']['identity']();lmhk_['scale'](fvirgy['width'] / oa32['canvas']['width'] / sndczx['getPixelRatio'](), fvirgy['height'] / oa32['canvas']['height'] / sndczx['getPixelRatio']());
    }, e86oa2['wxinputFocus'] = function (lmdnzx) {
      var _1ku4$ = c7nzds['inputElement']['target'];if (_1ku4$ && !_1ku4$['editable']) return;yrvf3g['window']['wx']['offKeyboardConfirm'](), yrvf3g['window']['wx']['offKeyboardInput'](), yrvf3g['window']['wx']['showKeyboard']({ 'defaultValue': _1ku4$['text'], 'maxLength': _1ku4$['maxChars'], 'multiple': _1ku4$['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (yj9ip) {}, 'fail': function (dxklmh) {} }), yrvf3g['window']['wx']['onKeyboardConfirm'](function (k_xlmh) {
        var rfgv3 = k_xlmh ? k_xlmh['value'] : '';_1ku4$['text'] = rfgv3, _1ku4$['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), yrvf3g['window']['wx']['onKeyboardInput'](function (kxlmh_) {
        var mk_xlh = kxlmh_ ? kxlmh_['value'] : '';if (!_1ku4$['multiline']) {
          if (mk_xlh['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_1ku4$['text'] = mk_xlh, _1ku4$['event']('input');
      });
    }, e86oa2['inputEnter'] = function () {
      c7nzds['inputElement']['target']['focus'] = ![];
    }, e86oa2['wxinputblur'] = function () {
      e86oa2['hideKeyboard']();
    }, e86oa2['hideKeyboard'] = function () {
      yrvf3g['window']['wx']['offKeyboardConfirm'](), yrvf3g['window']['wx']['offKeyboardInput'](), yrvf3g['window']['wx']['hideKeyboard']({ 'success': function (lxdn) {
          console['log']('隐藏键盘');
        }, 'fail': function (qigyfj) {
          console['log']('隐藏键盘出错:' + (qigyfj ? qigyfj['errMsg'] : ''));
        } });
    }, e86oa2;
  }(),
      pq09i = function () {
    function rgf3y() {}oa2wb6(rgf3y, 'laya.wx.mini.MiniLoader');var czs = rgf3y['prototype'];return czs['load'] = function (hlxk_m, zmxnl, qj9pi, qjpy9, $4_u1) {
      qj9pi === void 0x0 && (qj9pi = !![]), $4_u1 === void 0x0 && ($4_u1 = ![]);var mdnzxl = this;mdnzxl['_url'] = hlxk_m;if (hlxk_m['indexOf']('data:image') === 0x0) mdnzxl['_type'] = zmxnl = 'image';else mdnzxl['_type'] = zmxnl || (zmxnl = mdnzxl['getTypeFromUrl'](hlxk_m));mdnzxl['_cache'] = qj9pi, mdnzxl['_data'] = null;var iyjgqf = 'ascii';if (hlxk_m['indexOf']('.fnt') != -0x1) iyjgqf = 'utf8';else zmxnl == 'arraybuffer' && (iyjgqf = '');;var dxlsn = p0c97['getFileExtension'](hlxk_m);if (rgf3y['_fileTypeArr']['indexOf'](dxlsn) != -0x1) yrvf3g['EnvConfig']['load']['call'](this, hlxk_m, zmxnl, qj9pi, qjpy9, $4_u1);else {
        if (!dxznml['getFileInfo'](hlxk_m)) {
          if (hlxk_m['indexOf']('layaNativeDir/') != -0x1) {
            if (yrvf3g['isZiYu']) {
              var pj9i0q = dxznml['ziyuFileData'][hlxk_m];mdnzxl['onLoaded'](pj9i0q);return;
            } else {
              cosnole['log']('read read'), dxznml['read'](hlxk_m, iyjgqf, new o38ear(rgf3y, rgf3y['onReadNativeCallBack'], [iyjgqf, hlxk_m, zmxnl, qj9pi, qjpy9, $4_u1, mdnzxl]));return;
            }
          }if (p5sc0['rootPath'] == '') var n705s = hlxk_m;else n705s = hlxk_m['split'](p5sc0['rootPath'])[0x0];hlxk_m['indexOf']('http://') != -0x1 || hlxk_m['indexOf']('https://') != -0x1 ? yrvf3g['EnvConfig']['load']['call'](mdnzxl, hlxk_m, zmxnl, qj9pi, qjpy9, $4_u1) : dxznml['readFile'](n705s, iyjgqf, new o38ear(rgf3y, rgf3y['onReadNativeCallBack'], [iyjgqf, hlxk_m, zmxnl, qj9pi, qjpy9, $4_u1, mdnzxl]), hlxk_m);
        } else yrvf3g['EnvConfig']['load']['call'](this, hlxk_m, zmxnl, qj9pi, qjpy9, $4_u1);
      }
    }, czs['resMgrLoad'] = function (ov83re, eaw2o6, mnxzl, eao38, mlzhd, dhmxk, qij9p) {
      mnxzl === void 0x0 && (mnxzl = 0x0), eao38 === void 0x0 && (eao38 = ![]), mlzhd === void 0x0 && (mlzhd = ![]), dhmxk === void 0x0 && (dhmxk = 0x0), qij9p === void 0x0 && (qij9p = 0x3), ov83re['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ov83re), yrvf3g['EnvConfig']['resMgrLoad'](ov83re, (a2e38o, $_1uk4, sdcn) => {
        rgf3y['prototype']['resMgrLoadCallBack'](a2e38o, $_1uk4, sdcn, eaw2o6);
      }, mnxzl, eao38, mlzhd, dhmxk, qij9p);
    }, czs['resMgrLoadCallBack'] = function (jip9qy, era3o, xcsdz, ldhkx) {
      console['log']('buff:::', jip9qy, xcsdz, dxznml['fileNativeDir'] + '///' + dxznml['fileListName']), ldhkx(jip9qy, era3o, xcsdz);
    }, czs['clearRes'] = function (gfqiyj, irygv) {
      irygv === void 0x0 && (irygv = ![]);var o86ea = this;o86ea['clearRes'](gfqiyj, irygv);var _mxlhk = dxznml['getFileInfo'](gfqiyj);if (_mxlhk && (gfqiyj['indexOf']('http://') != -0x1 || gfqiyj['indexOf']('https://') != -0x1)) {
        var vfiygj = _mxlhk['md5'],
            _hlmk$ = dxznml['getFileNativePath'](vfiygj);dxznml['remove'](_hlmk$);
      }
    }, rgf3y['onReadNativeCallBack'] = function (jq09pi, igjfv, er3o8a, z5c7sn, c970, eao83r, hlmx_k, dxkmh, k$_41) {
      z5c7sn === void 0x0 && (z5c7sn = !![]), eao83r === void 0x0 && (eao83r = ![]), dxkmh === void 0x0 && (dxkmh = 0x0);if (!dxkmh) {
        var cz57n;if (er3o8a == 'json' || er3o8a == 'atlas') cz57n = yrvf3g['getJson'](k$_41['data']);else er3o8a == 'xml' ? cz57n = p0c97['parseXMLFromString'](k$_41['data']) : cz57n = k$_41['data'];hlmx_k['onLoaded'](cz57n), !yrvf3g['isZiYu'] && yrvf3g['isPosMsgYu'] && er3o8a != 'arraybuffer' && wx['postMessage']({ 'url': igjfv, 'data': cz57n, 'isLoad': !![] });
      } else dxkmh == 0x1 && yrvf3g['EnvConfig']['load']['call'](hlmx_k, igjfv, er3o8a, z5c7sn, c970, eao83r);
    }, dhlzx(rgf3y, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), rgf3y;
  }(),
      dxznml = function (xdklh) {
    function fvigr() {
      fvigr['__super']['call'](this);;
    }return oa2wb6(fvigr, 'laya.wx.mini.MiniFileMgr', xdklh), fvigr['isLoadFile'] = function (h_4$) {
      return fvigr['_fileTypeArr']['indexOf'](h_4$) != -0x1 ? !![] : ![];
    }, fvigr['getFileInfo'] = function (k1u$_) {
      var ipjy9q = k1u$_['split']('?')[0x0],
          gifv = fvigr['filesListObj'][ipjy9q];if (gifv == null) return null;else return gifv;return null;
    }, fvigr['onFileUpdate'] = function (w26tb, zs7cd) {
      var jqfiy9 = w26tb['split']('/'),
          iqp9j0 = jqfiy9[jqfiy9['length'] - 0x1],
          firgv = fvigr['getFileInfo'](zs7cd);if (firgv == null) fvigr['onSaveFile'](zs7cd, iqp9j0);else {
        if (firgv['readyUrl'] != zs7cd) fvigr['remove'](iqp9j0, zs7cd);
      }
    }, fvigr['exits'] = function (yfivjg, eo8r3a) {
      var pjyq9i = fvigr['getFileNativePath'](yfivjg);fvigr['fs']['getFileInfo']({ 'filePath': pjyq9i, 'success': function (o6a28) {
          eo8r3a != null && eo8r3a['runWith']([0x0, o6a28]);
        }, 'fail': function (ivyjg) {
          eo8r3a != null && eo8r3a['runWith']([0x1, ivyjg]);
        } });
    }, fvigr['read'] = function (hk_m$4, lk_xhm, u14k_, mndzx) {
      lk_xhm === void 0x0 && (lk_xhm = 'ascill'), mndzx === void 0x0 && (mndzx = '');var m4h;mndzx != '' ? m4h = fvigr['getFileNativePath'](hk_m$4) : m4h = hk_m$4, fvigr['fs']['readFile']({ 'filePath': m4h, 'encoding': lk_xhm, 'success': function (jy9iq) {
          u14k_ != null && u14k_['runWith']([0x0, jy9iq]);
        }, 'fail': function (yipjq) {
          if (yipjq && mndzx != '') fvigr['down'](mndzx, lk_xhm, u14k_, mndzx);else u14k_ != null && u14k_['runWith']([0x1]);
        } });
    }, fvigr['readNativeFile'] = function (h_lk, vg3fry) {
      fvigr['fs']['readFile']({ 'filePath': h_lk, 'encoding': '', 'success': function (c7nsdz) {
          vg3fry != null && vg3fry['runWith']([0x0]);
        }, 'fail': function (vor38) {
          vg3fry != null && vg3fry['runWith']([0x1]);
        } });
    }, fvigr['down'] = function (cz75s, o268a, mhdlzx, wbat26) {
      o268a === void 0x0 && (o268a = 'ascill'), wbat26 === void 0x0 && (wbat26 = '');var er3ov8 = fvigr['getFileNativePath'](wbat26),
          zdnm = fvigr['wxdown']({ 'url': cz75s, 'filePath': er3ov8, 'success': function (yg3vrf) {
          if (yg3vrf['statusCode'] === 0xc8) fvigr['readFile'](yg3vrf['filePath'], o268a, mhdlzx, wbat26);
        }, 'fail': function (sp50) {
          mhdlzx != null && mhdlzx['runWith']([0x1, sp50]);
        } });zdnm['onProgressUpdate'](function (x_klmh) {
        mhdlzx != null && mhdlzx['runWith']([0x2, x_klmh['progress']]);
      });
    }, fvigr['readFile'] = function ($_kh, iyq9jp, b6tw2a, vr8f) {
      iyq9jp === void 0x0 && (iyq9jp = 'ascill'), vr8f === void 0x0 && (vr8f = ''), fvigr['fs']['readFile']({ 'filePath': $_kh, 'encoding': iyq9jp, 'success': function (dzlxns) {
          if ($_kh['indexOf']('http://') != -0x1 || $_kh['indexOf']('https://') != -0x1) fvigr['onFileUpdate']($_kh, vr8f);b6tw2a != null && b6tw2a['runWith']([0x0, dzlxns]);
        }, 'fail': function (f3gr8) {
          if (f3gr8) b6tw2a != null && b6tw2a['runWith']([0x1, f3gr8]);
        } });
    }, fvigr['downImg'] = function (lzhdm, zndscx, hzdlm) {
      hzdlm === void 0x0 && (hzdlm = '');var fiq9y = fvigr['wxdown']({ 'url': lzhdm, 'success': function (sc5nz) {
          sc5nz['statusCode'] === 0xc8 && fvigr['copyFile'](sc5nz['tempFilePath'], hzdlm, zndscx);
        }, 'fail': function (gyfqji) {
          zndscx != null && zndscx['runWith']([0x1, gyfqji]);
        } });
    }, fvigr['copyFile'] = function (j9q, e6aw2o, vjifgy) {
      var l$mhk = j9q['split']('/'),
          kx_hm = l$mhk[l$mhk['length'] - 0x1],
          iqpj09 = e6aw2o['split']('?')[0x0],
          kmhdx = fvigr['getFileInfo'](e6aw2o),
          e2o6wa = fvigr['getFileNativePath'](kx_hm);fvigr['fs']['copyFile']({ 'srcPath': j9q, 'destPath': e2o6wa, 'success': function (nzlxd) {
          if (!kmhdx) fvigr['onSaveFile'](e6aw2o, kx_hm), vjifgy != null && vjifgy['runWith']([0x0]);else {
            if (kmhdx['readyUrl'] != e6aw2o) fvigr['remove'](kx_hm, e6aw2o, vjifgy);
          }
        }, 'fail': function (e8roa3) {
          vjifgy != null && vjifgy['runWith']([0x1, e8roa3]);
        } });
    }, fvigr['getFileNativePath'] = function (gyvfri) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gyvfri;
    }, fvigr['remove'] = function (c7s5n, gr38ve, gjfv) {
      gr38ve === void 0x0 && (gr38ve = '');var mdkxh = fvigr['getFileInfo'](gr38ve),
          firy = fvigr['getFileNativePath'](mdkxh['md5']);dznxml['loader']['clearRes'](mdkxh['readyUrl']), fvigr['fs']['unlink']({ 'filePath': firy, 'success': function (ijfgyq) {
          if (gr38ve != '') fvigr['onSaveFile'](gr38ve, c7s5n);gjfv != null && gjfv['runWith']([0x0]);
        }, 'fail': function (s70) {} });
    }, fvigr['onSaveFile'] = function (lmkdhx, dkmlhx) {
      var p9q5 = lmkdhx['split']('?')[0x0];fvigr['filesListObj'][p9q5] = { 'md5': dkmlhx, 'readyUrl': lmkdhx }, fvigr['fs']['writeFile']({ 'filePath': fvigr['fileNativeDir'] + '/' + fvigr['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fvigr['filesListObj']), 'success': function (mdlxzn) {
          console['log']('写入测试测试成功：', mdlxzn);
        }, 'fail': function (ra8oe3) {
          console['log']('写入测试测试失败：', ra8oe3);
        } });
    }, fvigr['existDir'] = function (dlxzmh, g3fyrv) {
      fvigr['fs']['mkdir']({ 'dirPath': dlxzmh, 'success': function (j05p9) {
          g3fyrv != null && g3fyrv['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (pq9j05) {
          if (pq9j05['errMsg']['indexOf']('file already exists') != -0x1) fvigr['readSync'](fvigr['fileListName'], 'utf8', g3fyrv);else g3fyrv != null && g3fyrv['runWith']([0x1, pq9j05]);
        } });
    }, fvigr['readSync'] = function (ypij, ba2w6o, yf3vr, pcs05) {
      ba2w6o === void 0x0 && (ba2w6o = 'ascill'), pcs05 === void 0x0 && (pcs05 = '');var s75 = fvigr['getFileNativePath'](ypij),
          k$1_;try {
        k$1_ = fvigr['fs']['readFileSync'](s75), yf3vr != null && yf3vr['runWith']([0x0, { 'data': k$1_ }]);
      } catch (fr3vyg) {
        yf3vr != null && yf3vr['runWith']([0x1]);
      }
    }, fvigr['readCache'] = function () {}, fvigr['writeCache'] = function (u_kh4$) {
      var kmxh_ = readyUrl['split']('?')[0x0];fvigr['filesListObj'][kmxh_] = { 'md5': md5Name, 'readyUrl': readyUrl }, fvigr['fs']['writeFile']({ 'filePath': fvigr['fileNativeDir'] + '/' + fvigr['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fvigr['filesListObj']), 'success': function (mlhx_) {}, 'fail': function (j590pq) {} });
    }, fvigr['setNativeFileDir'] = function (qgifjy) {
      fvigr['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + qgifjy;
    }, fvigr['filesListObj'] = {}, fvigr['fileNativeDir'] = null, fvigr['fileListName'] = 'layaairfiles.txt', fvigr['ziyuFileData'] = {}, dhlzx(fvigr, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), fvigr;
  }(fg),
      ps075 = function (jfiq9y) {
    function lznmdx() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], lznmdx['__super']['call'](this), this['_sound'] = lznmdx['_createSound']();
    }oa2wb6(lznmdx, 'laya.wx.mini.MiniSound', jfiq9y);var vyrg = lznmdx['prototype'];return vyrg['load'] = function (e2) {
      var l_mk$h = this;e2 = p5sc0['formatURL'](e2), this['url'] = e2;if (lznmdx['_audioCache'][e2]) {
        this['event']('complete');return;
      }function sp50c() {
        if (lznmdx['_null'] != undefined) l_mk$h['_sound']['onCanplay'](lznmdx['_null']), l_mk$h['_sound']['onError'](lznmdx['_null']);else try {
          l_mk$h['_sound']['onCanplay'](null), l_mk$h['_sound']['onError'](null), lznmdx['_null'] = null;
        } catch (q09p5) {
          console['warn']('[wxmini] _clearSound:' + q09p5), l_mk$h['_sound']['onCanplay'](fv3ygr), l_mk$h['_sound']['onError'](fv3ygr), lznmdx['_null'] = fv3ygr;
        }
      }function xh_l() {
        sp50c(), q9pyji['loaded'] = !![], q9pyji['event']('complete'), lznmdx['_audioCache'][q9pyji['url']] = q9pyji;
      }function k$lh_(a32e8) {
        console['error']('errCode=' + a32e8['errCode'] + '  errMsg=' + a32e8['errMsg']), sp50c(), q9pyji['event']('error');
      }function fv3ygr() {}this['_sound']['onCanplay'](xh_l), this['_sound']['onError'](k$lh_), this['_sound']['src'] = e2;var q9pyji = this;
    }, vyrg['play'] = function (sp07c5, pji09) {
      sp07c5 === void 0x0 && (sp07c5 = 0x0), pji09 === void 0x0 && (pji09 = 0x0);var jp059;if (this['url'] == v3ger['_tMusic']) {
        if (!lznmdx['_musicAudio']) lznmdx['_musicAudio'] = lznmdx['_createSound']();jp059 = lznmdx['_musicAudio'];
      } else jp059 = lznmdx['_createSound']();jp059['src'] = this['url'];var iqgfjy = new e628a(jp059);return iqgfjy['url'] = this['url'], iqgfjy['loops'] = pji09, iqgfjy['startTime'] = sp07c5, iqgfjy['play'](), v3ger['addChannel'](iqgfjy), iqgfjy;
    }, vyrg['dispose'] = function () {
      var o3vr = lznmdx['_audioCache'][this['url']];o3vr && (o3vr['src'] = '', delete lznmdx['_audioCache'][this['url']]);
    }, g3vf8(0x0, vyrg, 'duration', function () {
      return this['_sound']['duration'];
    }), lznmdx['_createSound'] = function () {
      return lznmdx['_id']++, yrvf3g['window']['wx']['createInnerAudioContext']();
    }, lznmdx['_musicAudio'] = null, lznmdx['_id'] = 0x0, lznmdx['_audioCache'] = {}, lznmdx['_null'] = undefined, lznmdx;
  }(fg),
      e628a = function (dkml) {
    function n7s5zc(ry3) {
      this['_audio'] = null, this['_onEnd'] = null, n7s5zc['__super']['call'](this), this['_audio'] = ry3, this['_onEnd'] = p0c97['bind'](this['__onEnd'], this), ry3['onEnded'](this['_onEnd']);
    }oa2wb6(n7s5zc, 'laya.wx.mini.MiniSoundChannel', dkml);var ev8ro3 = n7s5zc['prototype'];return ev8ro3['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (dznxml['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ev8ro3['__onNull'] = function () {}, ev8ro3['play'] = function () {
      this['isStopped'] = ![], v3ger['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ev8ro3['stop'] = function () {
      this['isStopped'] = !![], v3ger['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (n7s5zc['_null'] != undefined) this['_audio']['onEnded'](n7s5zc['_null']);else try {
        this['_audio']['onEnded'](null), n7s5zc['_null'] = null;
      } catch (x_mh) {
        console['warn']('[wxmini] stop:' + x_mh), this['_audio']['onEnded'](p0c97['bind'](this['__onNull'], this)), n7s5zc['_null'] = p0c97['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ev8ro3['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ev8ro3['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], v3ger['addChannel'](this), this['_audio']['play']();
    }, g3vf8(0x0, ev8ro3, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), g3vf8(0x0, ev8ro3, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), g3vf8(0x0, ev8ro3, 'volume', function () {
      return 0x1;
    }, function (j9iq0p) {}), n7s5zc['_null'] = undefined, n7s5zc;
  }(v3ero8);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var igjqfy in Laya) {
    var k_lhm$ = Laya[igjqfy];k_lhm$ && k_lhm$['__isclass'] && (exports[igjqfy] = k_lhm$);
  }
});