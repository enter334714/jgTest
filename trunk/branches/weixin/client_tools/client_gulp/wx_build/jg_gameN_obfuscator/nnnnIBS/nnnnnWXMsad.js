var A = wx.$N;
(function (window, document, a6weo2) {
  var kl_hxm = a6weo2['un'],
      nmzld = a6weo2['uns'],
      f8g3vr = a6weo2['static'],
      oewa26 = a6weo2['class'],
      ku_h4$ = a6weo2['getset'],
      aor38e = a6weo2['__newvec'],
      r8v3gf = laya['utils']['Browser'],
      igr = laya['events']['Event'],
      nsc57z = laya['events']['EventDispatcher'],
      qfyg = laya['resource']['HTMLImage'],
      jifq = laya['utils']['Handler'],
      rf3v = laya['display']['Input'],
      r3e8ov = laya['net']['Loader'],
      o38ae2 = laya['maths']['Matrix'],
      yvgrf = laya['renders']['Render'],
      snczx = laya['utils']['RunDriver'],
      ryivf = laya['media']['Sound'],
      sxndl = laya['media']['SoundChannel'],
      rfyig = laya['media']['SoundManager'],
      wo26ea = laya['display']['Stage'],
      w6bao = laya['net']['URL'],
      xlzmdh = laya['utils']['Utils'],
      oea6w2 = function () {
    function xlk_() {}return oewa26(xlk_, 'laya.wx.mini.MiniAdpter'), xlk_['getJson'] = function (u$h4_) {
      return JSON['parse'](u$h4_);
    }, xlk_['init'] = function (eoar, jipy9q) {
      eoar === void 0x0 && (eoar = ![]), jipy9q === void 0x0 && (jipy9q = ![]);if (xlk_['_inited']) return;xlk_['window'] = window;if (xlk_['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;xlk_['_inited'] = !![], xlk_['isZiYu'] = jipy9q, xlk_['isPosMsgYu'] = eoar, xlk_['EnvConfig'] = {}, !xlk_['isZiYu'] && (hm$_lk['setNativeFileDir']('/layaairGame'), hm$_lk['existDir'](hm$_lk['fileNativeDir'], jifq['create'](xlk_, xlk_['onMkdirCallBack']))), xlk_['window']['focus'] = function () {}, a6weo2['getUrlPath'] = function () {}, xlk_['window']['logtime'] = function (b26a) {}, xlk_['window']['alertTimeLog'] = function (o38evr) {}, xlk_['window']['resetShareInfo'] = function () {}, xlk_['window']['CanvasRenderingContext2D'] = function () {}, xlk_['window']['CanvasRenderingContext2D']['prototype'] = xlk_['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xlk_['window']['document']['body']['appendChild'] = function () {}, xlk_['EnvConfig']['pixelRatioInt'] = 0x0, snczx['getPixelRatio'] = xlk_['pixelRatio'], xlk_['_preCreateElement'] = r8v3gf['createElement'], r8v3gf['createElement'] = xlk_['createElement'], snczx['createShaderCondition'] = xlk_['createShaderCondition'], xlzmdh['parseXMLFromString'] = xlk_['parseXMLFromString'], rf3v['_createInputElement'] = jfqgiy['_createInputElement'], xlk_['EnvConfig']['load'] = r3e8ov['prototype']['load'], r3e8ov['prototype']['load'] = c5zs7['prototype']['load'], xlk_['isZiYu'] && eoar && wx['onMessage'](function (dlkhm) {
        dlkhm['isLoad'] && (hm$_lk['ziyuFileData'][dlkhm['url']] = dlkhm['data']);
      });
    }, xlk_['onMkdirCallBack'] = function (a2w6o, lxmhk_) {
      if (!a2w6o) hm$_lk['filesListObj'] = JSON['parse'](lxmhk_['data']);
    }, xlk_['pixelRatio'] = function () {
      if (!xlk_['EnvConfig']['pixelRatioInt']) try {
        var c5p7 = wx['getSystemInfoSync']();return xlk_['EnvConfig']['pixelRatioInt'] = c5p7['pixelRatio'], c5p7 = c5p7, c5p7['pixelRatio'];
      } catch (e8g3) {}return xlk_['EnvConfig']['pixelRatioInt'];
    }, xlk_['createElement'] = function (e82o6a) {
      if (e82o6a == 'canvas') {
        var dxk;return xlk_['idx'] == 0x1 ? xlk_['isZiYu'] ? (dxk = sharedCanvas, dxk['style'] = {}) : dxk = window['canvas'] : dxk = window['wx']['createCanvas'](), xlk_['idx']++, dxk;
      } else {
        if (e82o6a == 'textarea' || e82o6a == 'input') return xlk_['onCreateInput'](e82o6a);else {
          if (e82o6a == 'div') {
            var dzcn7s = xlk_['_preCreateElement'](e82o6a);return dzcn7s['contains'] = function (fyq9j) {
              return null;
            }, dzcn7s['removeChild'] = function (q9fy) {}, dzcn7s;
          } else return xlk_['_preCreateElement'](e82o6a);
        }
      }
    }, xlk_['onCreateInput'] = function (yqpj) {
      var we6o2 = xlk_['_preCreateElement'](yqpj);return we6o2['focus'] = jfqgiy['wxinputFocus'], we6o2['blur'] = jfqgiy['wxinputblur'], we6o2['style'] = {}, we6o2['value'] = 0x0, we6o2['parentElement'] = {}, we6o2['placeholder'] = {}, we6o2['type'] = {}, we6o2['setColor'] = function (a6e2wo) {}, we6o2['setType'] = function (_kuh4) {}, we6o2['setFontFace'] = function (riyvg) {}, we6o2['addEventListener'] = function (sznldx) {}, we6o2['contains'] = function (eor38a) {
        return null;
      }, we6o2['removeChild'] = function (xkhlm_) {}, we6o2;
    }, xlk_['createShaderCondition'] = function (yfr3v) {
      var qigjfy = this,
          mhdlxk = function () {
        var iygfjv = yfr3v;return qigjfy[yfr3v['replace']('this.', '')];
      };return mhdlxk;
    }, xlk_['EnvConfig'] = null, xlk_['window'] = null, xlk_['_preCreateElement'] = null, xlk_['_inited'] = ![], xlk_['wxRequest'] = null, xlk_['systemInfo'] = null, xlk_['version'] = '0.0.1', xlk_['isZiYu'] = ![], xlk_['isPosMsgYu'] = ![], xlk_['parseXMLFromString'] = function (xcndzs) {
      var $_4khu, sd7nzc;xcndzs = xcndzs['replace'](/>\s+</g, '><');try {
        $_4khu = new window['Parser']['DOMParser']()['parseFromString'](xcndzs, 'text/xml');
      } catch (dscxzn) {
        throw '需要引入xml解析库文件';
      }return $_4khu;
    }, xlk_['idx'] = 0x1, xlk_;
  }(),
      uk41$ = function () {
    function _k4m$h() {}oewa26(_k4m$h, 'laya.wx.mini.MiniImage');var hxk_lm = _k4m$h['prototype'];return hxk_lm['_loadImage'] = function ($h_lkm) {
      var vifjy = this,
          voer = ![];$h_lkm['indexOf']('layaNativeDir/') == -0x1 && (voer = !![], $h_lkm = w6bao['formatURL']($h_lkm));if (!hm$_lk['getFileInfo']($h_lkm)) {
        if ($h_lkm['indexOf']('http://') != -0x1 || $h_lkm['indexOf']('https://') != -0x1) hm$_lk['downImg']($h_lkm, new jifq(_k4m$h, _k4m$h['onDownImgCallBack'], [$h_lkm, vifjy]), $h_lkm);else _k4m$h['onCreateImage']($h_lkm, vifjy, !![]);
      } else _k4m$h['onCreateImage']($h_lkm, vifjy, !voer);
    }, _k4m$h['onDownImgCallBack'] = function (u_1$, l_km$h, hk$u4) {
      if (!hk$u4) _k4m$h['onCreateImage'](u_1$, l_km$h);else l_km$h['onError'](null);
    }, _k4m$h['onCreateImage'] = function (pi9q, are3o, hlmdzx) {
      hlmdzx === void 0x0 && (hlmdzx = ![]);var ldxm;if (!hlmdzx) {
        var _k4uh$ = hm$_lk['getFileInfo'](pi9q),
            cn5zs = _k4uh$['md5'];ldxm = hm$_lk['getFileNativePath'](cn5zs);
      } else ldxm = pi9q;if (are3o['imgCache'] == null) are3o['imgCache'] = {};var s7ncdz;function v3ero8() {
        s7ncdz['onload'] = null, s7ncdz['onerror'] = null, delete are3o['imgCache'][pi9q];
      };var qgyf = function () {
        v3ero8(), are3o['onLoaded'](s7ncdz);
      },
          a28e6 = function () {
        v3ero8(), are3o['event']('error', 'Load image failed');
      };are3o['_type'] == 'nativeimage' ? (s7ncdz = new r8v3gf['window']['Image'](), s7ncdz['crossOrigin'] = '', s7ncdz['onload'] = qgyf, s7ncdz['onerror'] = a28e6, s7ncdz['src'] = ldxm, are3o['imgCache'][pi9q] = s7ncdz) : new qfyg['create'](ldxm, { 'onload': qgyf, 'onerror': a28e6, 'onCreate': function (fry3g) {
          s7ncdz = fry3g, are3o['imgCache'][pi9q] = fry3g;
        } });
    }, _k4m$h;
  }(),
      jfqgiy = function () {
    function fyiqg() {}return oewa26(fyiqg, 'laya.wx.mini.MiniInput'), fyiqg['_createInputElement'] = function () {
      rf3v['_initInput'](rf3v['area'] = r8v3gf['createElement']('textarea')), rf3v['_initInput'](rf3v['input'] = r8v3gf['createElement']('input')), rf3v['inputContainer'] = r8v3gf['createElement']('div'), rf3v['inputContainer']['style']['position'] = 'absolute', rf3v['inputContainer']['style']['zIndex'] = 0x186a0, r8v3gf['container']['appendChild'](rf3v['inputContainer']), rf3v['inputContainer']['setPos'] = function (jqyp9i, hlxdmz) {
        rf3v['inputContainer']['style']['left'] = jqyp9i + 'px', rf3v['inputContainer']['style']['top'] = hlxdmz + 'px';
      }, a6weo2['stage']['on']('resize', null, fyiqg['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (snz5) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), rfyig['_soundClass'] = gjfvi, rfyig['_musicClass'] = gjfvi;
    }, fyiqg['_onStageResize'] = function () {
      var hk_ml = a6weo2['stage']['_canvasTransform']['identity']();hk_ml['scale'](r8v3gf['width'] / yvgrf['canvas']['width'] / snczx['getPixelRatio'](), r8v3gf['height'] / yvgrf['canvas']['height'] / snczx['getPixelRatio']());
    }, fyiqg['wxinputFocus'] = function (hldkxm) {
      var gyf3 = rf3v['inputElement']['target'];if (gyf3 && !gyf3['editable']) return;oea6w2['window']['wx']['offKeyboardConfirm'](), oea6w2['window']['wx']['offKeyboardInput'](), oea6w2['window']['wx']['showKeyboard']({ 'defaultValue': gyf3['text'], 'maxLength': gyf3['maxChars'], 'multiple': gyf3['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (k_$4hm) {}, 'fail': function (yvifj) {} }), oea6w2['window']['wx']['onKeyboardConfirm'](function (o2a83e) {
        var lmxkdh = o2a83e ? o2a83e['value'] : '';gyf3['text'] = lmxkdh, gyf3['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), oea6w2['window']['wx']['onKeyboardInput'](function (zlnsxd) {
        var szndxc = zlnsxd ? zlnsxd['value'] : '';if (!gyf3['multiline']) {
          if (szndxc['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }gyf3['text'] = szndxc, gyf3['event']('input');
      });
    }, fyiqg['inputEnter'] = function () {
      rf3v['inputElement']['target']['focus'] = ![];
    }, fyiqg['wxinputblur'] = function () {
      fyiqg['hideKeyboard']();
    }, fyiqg['hideKeyboard'] = function () {
      oea6w2['window']['wx']['offKeyboardConfirm'](), oea6w2['window']['wx']['offKeyboardInput'](), oea6w2['window']['wx']['hideKeyboard']({ 'success': function (yjgvi) {
          console['log']('隐藏键盘');
        }, 'fail': function (oa6) {
          console['log']('隐藏键盘出错:' + (oa6 ? oa6['errMsg'] : ''));
        } });
    }, fyiqg;
  }(),
      c5zs7 = function () {
    function e8oa6() {}oewa26(e8oa6, 'laya.wx.mini.MiniLoader');var mklhx = e8oa6['prototype'];return mklhx['load'] = function (igyjfq, p9qj0, _k$hml, yfgiq, ndzmx) {
      _k$hml === void 0x0 && (_k$hml = !![]), ndzmx === void 0x0 && (ndzmx = ![]);var lndsz = this;lndsz['_url'] = igyjfq;if (igyjfq['indexOf']('data:image') === 0x0) lndsz['_type'] = p9qj0 = 'image';else lndsz['_type'] = p9qj0 || (p9qj0 = lndsz['getTypeFromUrl'](igyjfq));lndsz['_cache'] = _k$hml, lndsz['_data'] = null;var $1u4k_ = 'ascii';if (igyjfq['indexOf']('.fnt') != -0x1) $1u4k_ = 'utf8';else p9qj0 == 'arraybuffer' && ($1u4k_ = '');;var v38fr = xlzmdh['getFileExtension'](igyjfq);if (e8oa6['_fileTypeArr']['indexOf'](v38fr) != -0x1) oea6w2['EnvConfig']['load']['call'](this, igyjfq, p9qj0, _k$hml, yfgiq, ndzmx);else {
        if (!hm$_lk['getFileInfo'](igyjfq)) {
          if (igyjfq['indexOf']('layaNativeDir/') != -0x1) {
            if (oea6w2['isZiYu']) {
              var vr8oe3 = hm$_lk['ziyuFileData'][igyjfq];lndsz['onLoaded'](vr8oe3);return;
            } else {
              cosnole['log']('read read'), hm$_lk['read'](igyjfq, $1u4k_, new jifq(e8oa6, e8oa6['onReadNativeCallBack'], [$1u4k_, igyjfq, p9qj0, _k$hml, yfgiq, ndzmx, lndsz]));return;
            }
          }if (w6bao['rootPath'] == '') var pj9i = igyjfq;else pj9i = igyjfq['split'](w6bao['rootPath'])[0x0];igyjfq['indexOf']('http://') != -0x1 || igyjfq['indexOf']('https://') != -0x1 ? oea6w2['EnvConfig']['load']['call'](lndsz, igyjfq, p9qj0, _k$hml, yfgiq, ndzmx) : hm$_lk['readFile'](pj9i, $1u4k_, new jifq(e8oa6, e8oa6['onReadNativeCallBack'], [$1u4k_, igyjfq, p9qj0, _k$hml, yfgiq, ndzmx, lndsz]), igyjfq);
        } else oea6w2['EnvConfig']['load']['call'](this, igyjfq, p9qj0, _k$hml, yfgiq, ndzmx);
      }
    }, mklhx['resMgrLoad'] = function (fy9iq, fvri, sncd, vf3g8r, vjiyfg, fg38r, u$k14_) {
      sncd === void 0x0 && (sncd = 0x0), vf3g8r === void 0x0 && (vf3g8r = ![]), vjiyfg === void 0x0 && (vjiyfg = ![]), fg38r === void 0x0 && (fg38r = 0x0), u$k14_ === void 0x0 && (u$k14_ = 0x3), fy9iq['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', fy9iq), oea6w2['EnvConfig']['resMgrLoad'](fy9iq, (xslzn, h4_mk$, v8grf) => {
        e8oa6['prototype']['resMgrLoadCallBack'](xslzn, h4_mk$, v8grf, fvri);
      }, sncd, vf3g8r, vjiyfg, fg38r, u$k14_);
    }, mklhx['resMgrLoadCallBack'] = function (ea3o8, dxzscn, kl_m, h4ku$) {
      console['log']('buff:::', ea3o8, kl_m, hm$_lk['fileNativeDir'] + '///' + hm$_lk['fileListName']), h4ku$(ea3o8, dxzscn, kl_m);
    }, mklhx['clearRes'] = function (fiy, ijgqf) {
      ijgqf === void 0x0 && (ijgqf = ![]);var t62awb = this;t62awb['clearRes'](fiy, ijgqf);var fvgj = hm$_lk['getFileInfo'](fiy);if (fvgj && (fiy['indexOf']('http://') != -0x1 || fiy['indexOf']('https://') != -0x1)) {
        var o83e2 = fvgj['md5'],
            pi9q0 = hm$_lk['getFileNativePath'](o83e2);hm$_lk['remove'](pi9q0);
      }
    }, e8oa6['onReadNativeCallBack'] = function (_h4ku, ro3ea8, mhlk_$, fryivg, ku$4_1, _hk$u4, fgyqji, z7s5cn, aw2bt6) {
      fryivg === void 0x0 && (fryivg = !![]), _hk$u4 === void 0x0 && (_hk$u4 = ![]), z7s5cn === void 0x0 && (z7s5cn = 0x0);if (!z7s5cn) {
        var lxm_;if (mhlk_$ == 'json' || mhlk_$ == 'atlas') lxm_ = oea6w2['getJson'](aw2bt6['data']);else mhlk_$ == 'xml' ? lxm_ = xlzmdh['parseXMLFromString'](aw2bt6['data']) : lxm_ = aw2bt6['data'];fgyqji['onLoaded'](lxm_), !oea6w2['isZiYu'] && oea6w2['isPosMsgYu'] && mhlk_$ != 'arraybuffer' && wx['postMessage']({ 'url': ro3ea8, 'data': lxm_, 'isLoad': !![] });
      } else z7s5cn == 0x1 && oea6w2['EnvConfig']['load']['call'](fgyqji, ro3ea8, mhlk_$, fryivg, ku$4_1, _hk$u4);
    }, f8g3vr(e8oa6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), e8oa6;
  }(),
      hm$_lk = function (g8rfv3) {
    function o2e8a() {
      o2e8a['__super']['call'](this);;
    }return oewa26(o2e8a, 'laya.wx.mini.MiniFileMgr', g8rfv3), o2e8a['isLoadFile'] = function (g38rf) {
      return o2e8a['_fileTypeArr']['indexOf'](g38rf) != -0x1 ? !![] : ![];
    }, o2e8a['getFileInfo'] = function (ldmxhk) {
      var ta2b6w = ldmxhk['split']('?')[0x0],
          a28o3e = o2e8a['filesListObj'][ta2b6w];if (a28o3e == null) return null;else return a28o3e;return null;
    }, o2e8a['onFileUpdate'] = function (fgyjiq, dn7szc) {
      var khmxl = fgyjiq['split']('/'),
          zn75s = khmxl[khmxl['length'] - 0x1],
          sdlzx = o2e8a['getFileInfo'](dn7szc);if (sdlzx == null) o2e8a['onSaveFile'](dn7szc, zn75s);else {
        if (sdlzx['readyUrl'] != dn7szc) o2e8a['remove'](zn75s, dn7szc);
      }
    }, o2e8a['exits'] = function (vrg3e, ao23e8) {
      var kh_u = o2e8a['getFileNativePath'](vrg3e);o2e8a['fs']['getFileInfo']({ 'filePath': kh_u, 'success': function ($_4hku) {
          ao23e8 != null && ao23e8['runWith']([0x0, $_4hku]);
        }, 'fail': function (rv3yg) {
          ao23e8 != null && ao23e8['runWith']([0x1, rv3yg]);
        } });
    }, o2e8a['read'] = function (qp7950, gfiyqj, frgv, eo8a2) {
      gfiyqj === void 0x0 && (gfiyqj = 'ascill'), eo8a2 === void 0x0 && (eo8a2 = '');var zsln;eo8a2 != '' ? zsln = o2e8a['getFileNativePath'](qp7950) : zsln = qp7950, o2e8a['fs']['readFile']({ 'filePath': zsln, 'encoding': gfiyqj, 'success': function (czs7d) {
          frgv != null && frgv['runWith']([0x0, czs7d]);
        }, 'fail': function (pc509) {
          if (pc509 && eo8a2 != '') o2e8a['down'](eo8a2, gfiyqj, frgv, eo8a2);else frgv != null && frgv['runWith']([0x1]);
        } });
    }, o2e8a['readNativeFile'] = function (cp5709, hmzxld) {
      o2e8a['fs']['readFile']({ 'filePath': cp5709, 'encoding': '', 'success': function (piq9j0) {
          hmzxld != null && hmzxld['runWith']([0x0]);
        }, 'fail': function (dxnlsz) {
          hmzxld != null && hmzxld['runWith']([0x1]);
        } });
    }, o2e8a['down'] = function (lmzdn, rifgy, hxdzl, q59j) {
      rifgy === void 0x0 && (rifgy = 'ascill'), q59j === void 0x0 && (q59j = '');var jqpyi9 = o2e8a['getFileNativePath'](q59j),
          dxlsnz = o2e8a['wxdown']({ 'url': lmzdn, 'filePath': jqpyi9, 'success': function (mxnzl) {
          if (mxnzl['statusCode'] === 0xc8) o2e8a['readFile'](mxnzl['filePath'], rifgy, hxdzl, q59j);
        }, 'fail': function (dlhkm) {
          hxdzl != null && hxdzl['runWith']([0x1, dlhkm]);
        } });dxlsnz['onProgressUpdate'](function (yfqj) {
        hxdzl != null && hxdzl['runWith']([0x2, yfqj['progress']]);
      });
    }, o2e8a['readFile'] = function (s70n5, jvyfgi, _xkmh, pi9j0) {
      jvyfgi === void 0x0 && (jvyfgi = 'ascill'), pi9j0 === void 0x0 && (pi9j0 = ''), o2e8a['fs']['readFile']({ 'filePath': s70n5, 'encoding': jvyfgi, 'success': function (_khm$) {
          if (s70n5['indexOf']('http://') != -0x1 || s70n5['indexOf']('https://') != -0x1) o2e8a['onFileUpdate'](s70n5, pi9j0);_xkmh != null && _xkmh['runWith']([0x0, _khm$]);
        }, 'fail': function (kh$m4_) {
          if (kh$m4_) _xkmh != null && _xkmh['runWith']([0x1, kh$m4_]);
        } });
    }, o2e8a['downImg'] = function (dlxmhk, h_kml$, rae38) {
      rae38 === void 0x0 && (rae38 = '');var f9i = o2e8a['wxdown']({ 'url': dlxmhk, 'success': function (iqgfyj) {
          iqgfyj['statusCode'] === 0xc8 && o2e8a['copyFile'](iqgfyj['tempFilePath'], rae38, h_kml$);
        }, 'fail': function ($14_u) {
          h_kml$ != null && h_kml$['runWith']([0x1, $14_u]);
        } });
    }, o2e8a['copyFile'] = function (nszd, hl_xm, ndz7s) {
      var p9qi0j = nszd['split']('/'),
          fjygiq = p9qi0j[p9qi0j['length'] - 0x1],
          ae286o = hl_xm['split']('?')[0x0],
          e8o26a = o2e8a['getFileInfo'](hl_xm),
          sn7d = o2e8a['getFileNativePath'](fjygiq);o2e8a['fs']['copyFile']({ 'srcPath': nszd, 'destPath': sn7d, 'success': function (lndzsx) {
          if (!e8o26a) o2e8a['onSaveFile'](hl_xm, fjygiq), ndz7s != null && ndz7s['runWith']([0x0]);else {
            if (e8o26a['readyUrl'] != hl_xm) o2e8a['remove'](fjygiq, hl_xm, ndz7s);
          }
        }, 'fail': function (s50c7) {
          ndz7s != null && ndz7s['runWith']([0x1, s50c7]);
        } });
    }, o2e8a['getFileNativePath'] = function (h_$lk) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + h_$lk;
    }, o2e8a['remove'] = function (yigfr, i0j9p, $k4uh_) {
      i0j9p === void 0x0 && (i0j9p = '');var p9750c = o2e8a['getFileInfo'](i0j9p),
          wtb26 = o2e8a['getFileNativePath'](p9750c['md5']);a6weo2['loader']['clearRes'](p9750c['readyUrl']), o2e8a['fs']['unlink']({ 'filePath': wtb26, 'success': function (ps5c07) {
          if (i0j9p != '') o2e8a['onSaveFile'](i0j9p, yigfr);$k4uh_ != null && $k4uh_['runWith']([0x0]);
        }, 'fail': function (dznc7s) {} });
    }, o2e8a['onSaveFile'] = function (qp90ij, sn7zcd) {
      var zsdnc7 = qp90ij['split']('?')[0x0];o2e8a['filesListObj'][zsdnc7] = { 'md5': sn7zcd, 'readyUrl': qp90ij }, o2e8a['fs']['writeFile']({ 'filePath': o2e8a['fileNativeDir'] + '/' + o2e8a['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o2e8a['filesListObj']), 'success': function (i9yjqf) {
          console['log']('写入测试测试成功：', i9yjqf);
        }, 'fail': function (x_lhm) {
          console['log']('写入测试测试失败：', x_lhm);
        } });
    }, o2e8a['existDir'] = function (hkmd, lnmxdz) {
      o2e8a['fs']['mkdir']({ 'dirPath': hkmd, 'success': function (lh_$km) {
          lnmxdz != null && lnmxdz['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (c79) {
          if (c79['errMsg']['indexOf']('file already exists') != -0x1) o2e8a['readSync'](o2e8a['fileListName'], 'utf8', lnmxdz);else lnmxdz != null && lnmxdz['runWith']([0x1, c79]);
        } });
    }, o2e8a['readSync'] = function (iyjvg, oa62we, $hk4u_, oa382e) {
      oa62we === void 0x0 && (oa62we = 'ascill'), oa382e === void 0x0 && (oa382e = '');var xlnmd = o2e8a['getFileNativePath'](iyjvg),
          bw2ao6;try {
        bw2ao6 = o2e8a['fs']['readFileSync'](xlnmd), $hk4u_ != null && $hk4u_['runWith']([0x0, { 'data': bw2ao6 }]);
      } catch (zdsxc) {
        $hk4u_ != null && $hk4u_['runWith']([0x1]);
      }
    }, o2e8a['readCache'] = function () {}, o2e8a['writeCache'] = function (vfy3r) {
      var _$lk = readyUrl['split']('?')[0x0];o2e8a['filesListObj'][_$lk] = { 'md5': md5Name, 'readyUrl': readyUrl }, o2e8a['fs']['writeFile']({ 'filePath': o2e8a['fileNativeDir'] + '/' + o2e8a['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o2e8a['filesListObj']), 'success': function (u4) {}, 'fail': function (ao6b2w) {} });
    }, o2e8a['setNativeFileDir'] = function (i90pqj) {
      o2e8a['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + i90pqj;
    }, o2e8a['filesListObj'] = {}, o2e8a['fileNativeDir'] = null, o2e8a['fileListName'] = 'layaairfiles.txt', o2e8a['ziyuFileData'] = {}, f8g3vr(o2e8a, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), o2e8a;
  }(nsc57z),
      gjfvi = function (nscdzx) {
    function _hmk$4() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _hmk$4['__super']['call'](this), this['_sound'] = _hmk$4['_createSound']();
    }oewa26(_hmk$4, 'laya.wx.mini.MiniSound', nscdzx);var qifjgy = _hmk$4['prototype'];return qifjgy['load'] = function (jip9q) {
      var v3er = this;jip9q = w6bao['formatURL'](jip9q), this['url'] = jip9q;if (_hmk$4['_audioCache'][jip9q]) {
        this['event']('complete');return;
      }function ea3() {
        if (_hmk$4['_null'] != undefined) v3er['_sound']['onCanplay'](_hmk$4['_null']), v3er['_sound']['onError'](_hmk$4['_null']);else try {
          v3er['_sound']['onCanplay'](null), v3er['_sound']['onError'](null), _hmk$4['_null'] = null;
        } catch (nxmlzd) {
          console['warn']('[wxmini] _clearSound:' + nxmlzd), v3er['_sound']['onCanplay'](h$_mk4), v3er['_sound']['onError'](h$_mk4), _hmk$4['_null'] = h$_mk4;
        }
      }function hm_$() {
        ea3(), q7095['loaded'] = !![], q7095['event']('complete'), _hmk$4['_audioCache'][q7095['url']] = q7095;
      }function jiv(yrgvf3) {
        console['error']('errCode=' + yrgvf3['errCode'] + '  errMsg=' + yrgvf3['errMsg']), ea3(), q7095['event']('error');
      }function h$_mk4() {}this['_sound']['onCanplay'](hm_$), this['_sound']['onError'](jiv), this['_sound']['src'] = jip9q;var q7095 = this;
    }, qifjgy['play'] = function (e2wa6o, fiy9j) {
      e2wa6o === void 0x0 && (e2wa6o = 0x0), fiy9j === void 0x0 && (fiy9j = 0x0);var rae38o;if (this['url'] == rfyig['_tMusic']) {
        if (!_hmk$4['_musicAudio']) _hmk$4['_musicAudio'] = _hmk$4['_createSound']();rae38o = _hmk$4['_musicAudio'];
      } else rae38o = _hmk$4['_createSound']();rae38o['src'] = this['url'];var aw2tb6 = new qjyifg(rae38o);return aw2tb6['url'] = this['url'], aw2tb6['loops'] = fiy9j, aw2tb6['startTime'] = e2wa6o, aw2tb6['play'](), rfyig['addChannel'](aw2tb6), aw2tb6;
    }, qifjgy['dispose'] = function () {
      var ygv = _hmk$4['_audioCache'][this['url']];ygv && (ygv['src'] = '', delete _hmk$4['_audioCache'][this['url']]);
    }, ku_h4$(0x0, qifjgy, 'duration', function () {
      return this['_sound']['duration'];
    }), _hmk$4['_createSound'] = function () {
      return _hmk$4['_id']++, oea6w2['window']['wx']['createInnerAudioContext']();
    }, _hmk$4['_musicAudio'] = null, _hmk$4['_id'] = 0x0, _hmk$4['_audioCache'] = {}, _hmk$4['_null'] = undefined, _hmk$4;
  }(nsc57z),
      qjyifg = function (s7dnzc) {
    function d7snz(ndxzm) {
      this['_audio'] = null, this['_onEnd'] = null, d7snz['__super']['call'](this), this['_audio'] = ndxzm, this['_onEnd'] = xlzmdh['bind'](this['__onEnd'], this), ndxzm['onEnded'](this['_onEnd']);
    }oewa26(d7snz, 'laya.wx.mini.MiniSoundChannel', s7dnzc);var zsn7cd = d7snz['prototype'];return zsn7cd['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (a6weo2['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, zsn7cd['__onNull'] = function () {}, zsn7cd['play'] = function () {
      this['isStopped'] = ![], rfyig['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, zsn7cd['stop'] = function () {
      this['isStopped'] = !![], rfyig['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (d7snz['_null'] != undefined) this['_audio']['onEnded'](d7snz['_null']);else try {
        this['_audio']['onEnded'](null), d7snz['_null'] = null;
      } catch ($hu_k) {
        console['warn']('[wxmini] stop:' + $hu_k), this['_audio']['onEnded'](xlzmdh['bind'](this['__onNull'], this)), d7snz['_null'] = xlzmdh['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, zsn7cd['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, zsn7cd['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], rfyig['addChannel'](this), this['_audio']['play']();
    }, ku_h4$(0x0, zsn7cd, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ku_h4$(0x0, zsn7cd, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ku_h4$(0x0, zsn7cd, 'volume', function () {
      return 0x1;
    }, function (figyq) {}), d7snz['_null'] = undefined, d7snz;
  }(sxndl);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var fgiy in Laya) {
    var khl$ = Laya[fgiy];khl$ && khl$['__isclass'] && (exports[fgiy] = khl$);
  }
});