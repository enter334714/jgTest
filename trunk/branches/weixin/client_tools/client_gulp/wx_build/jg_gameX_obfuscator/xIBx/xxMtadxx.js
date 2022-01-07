var u = wx.$x;
(function (window, document, i4dsxg) {
  var fuj9cn = i4dsxg['un'],
      o5mz2s = i4dsxg['uns'],
      ozs5mx = i4dsxg['static'],
      o2zm65 = i4dsxg['class'],
      igs4dx = i4dsxg['getset'],
      dnvjg = i4dsxg['__newvec'],
      wbt3k = laya['utils']['Browser'],
      zmisx = laya['events']['Event'],
      jl79 = laya['events']['EventDispatcher'],
      q_parh = laya['resource']['HTMLImage'],
      hp_eaq = laya['utils']['Handler'],
      vcunjd = laya['display']['Input'],
      x5omzs = laya['net']['Loader'],
      pheq_ = laya['maths']['Matrix'],
      jn9cfl = laya['renders']['Render'],
      jvcn = laya['utils']['RunDriver'],
      c78f9 = laya['media']['Sound'],
      _qahe = laya['media']['SoundChannel'],
      k1tw6 = laya['media']['SoundManager'],
      cjvnuf = laya['display']['Stage'],
      xsid = laya['net']['URL'],
      e1w0b = laya['utils']['Utils'],
      z256o = function () {
    function fc97lj() {}return o2zm65(fc97lj, 'laya.wx.mini.MiniAdpter'), fc97lj['getJson'] = function (b103) {
      return JSON['parse'](b103);
    }, fc97lj['init'] = function (hae0qp, z25osm) {
      hae0qp === void 0x0 && (hae0qp = ![]), z25osm === void 0x0 && (z25osm = ![]);if (fc97lj['_inited']) return;fc97lj['window'] = window;if (fc97lj['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;fc97lj['_inited'] = !![], fc97lj['isZiYu'] = z25osm, fc97lj['isPosMsgYu'] = hae0qp, fc97lj['EnvConfig'] = {}, !fc97lj['isZiYu'] && (xims4o['setNativeFileDir']('/layaairGame'), xims4o['existDir'](xims4o['fileNativeDir'], hp_eaq['create'](fc97lj, fc97lj['onMkdirCallBack']))), fc97lj['window']['focus'] = function () {}, i4dsxg['getUrlPath'] = function () {}, fc97lj['window']['logtime'] = function (eahp) {}, fc97lj['window']['alertTimeLog'] = function (ujndgv) {}, fc97lj['window']['resetShareInfo'] = function () {}, fc97lj['window']['CanvasRenderingContext2D'] = function () {}, fc97lj['window']['CanvasRenderingContext2D']['prototype'] = fc97lj['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], fc97lj['window']['document']['body']['appendChild'] = function () {}, fc97lj['EnvConfig']['pixelRatioInt'] = 0x0, jvcn['getPixelRatio'] = fc97lj['pixelRatio'], fc97lj['_preCreateElement'] = wbt3k['createElement'], wbt3k['createElement'] = fc97lj['createElement'], jvcn['createShaderCondition'] = fc97lj['createShaderCondition'], e1w0b['parseXMLFromString'] = fc97lj['parseXMLFromString'], vcunjd['_createInputElement'] = l79c8f['_createInputElement'], fc97lj['EnvConfig']['load'] = x5omzs['prototype']['load'], x5omzs['prototype']['load'] = f89yl7['prototype']['load'], fc97lj['isZiYu'] && hae0qp && wx['onMessage'](function (njcd) {
        njcd['isLoad'] && (xims4o['ziyuFileData'][njcd['url']] = njcd['data']);
      });
    }, fc97lj['onMkdirCallBack'] = function (nfl9c, mi4sgx) {
      if (!nfl9c) xims4o['filesListObj'] = JSON['parse'](mi4sgx['data']);
    }, fc97lj['pixelRatio'] = function () {
      if (!fc97lj['EnvConfig']['pixelRatioInt']) try {
        var w0hek = wx['getSystemInfoSync']();return fc97lj['EnvConfig']['pixelRatioInt'] = w0hek['pixelRatio'], w0hek = w0hek, w0hek['pixelRatio'];
      } catch (hbek0w) {}return fc97lj['EnvConfig']['pixelRatioInt'];
    }, fc97lj['createElement'] = function (e1kwb0) {
      if (e1kwb0 == 'canvas') {
        var m52o;return fc97lj['idx'] == 0x1 ? fc97lj['isZiYu'] ? (m52o = sharedCanvas, m52o['style'] = {}) : m52o = window['canvas'] : m52o = window['wx']['createCanvas'](), fc97lj['idx']++, m52o;
      } else {
        if (e1kwb0 == 'textarea' || e1kwb0 == 'input') return fc97lj['onCreateInput'](e1kwb0);else {
          if (e1kwb0 == 'div') {
            var rahp = fc97lj['_preCreateElement'](e1kwb0);return rahp['contains'] = function (z5s2) {
              return null;
            }, rahp['removeChild'] = function (ah_qep) {}, rahp;
          } else return fc97lj['_preCreateElement'](e1kwb0);
        }
      }
    }, fc97lj['onCreateInput'] = function (w30b1k) {
      var vix4 = fc97lj['_preCreateElement'](w30b1k);return vix4['focus'] = l79c8f['wxinputFocus'], vix4['blur'] = l79c8f['wxinputblur'], vix4['style'] = {}, vix4['value'] = 0x0, vix4['parentElement'] = {}, vix4['placeholder'] = {}, vix4['type'] = {}, vix4['setColor'] = function (abep0) {}, vix4['setType'] = function (u4dn) {}, vix4['setFontFace'] = function (bhpe0k) {}, vix4['addEventListener'] = function (guv4i) {}, vix4['contains'] = function (jl9cf) {
        return null;
      }, vix4['removeChild'] = function (t3wbk) {}, vix4;
    }, fc97lj['createShaderCondition'] = function (nf9ju) {
      var aeqph0 = this,
          u4 = function () {
        var o26tz = nf9ju;return aeqph0[nf9ju['replace']('this.', '')];
      };return u4;
    }, fc97lj['EnvConfig'] = null, fc97lj['window'] = null, fc97lj['_preCreateElement'] = null, fc97lj['_inited'] = ![], fc97lj['wxRequest'] = null, fc97lj['systemInfo'] = null, fc97lj['version'] = '0.0.1', fc97lj['isZiYu'] = ![], fc97lj['isPosMsgYu'] = ![], fc97lj['parseXMLFromString'] = function (qpa_h) {
      var fcjnl, oisxmz;qpa_h = qpa_h['replace'](/>\s+</g, '><');try {
        fcjnl = new window['Parser']['DOMParser']()['parseFromString'](qpa_h, 'text/xml');
      } catch (_pqeha) {
        throw '需要引入xml解析库文件';
      }return fcjnl;
    }, fc97lj['idx'] = 0x1, fc97lj;
  }(),
      qeha = function () {
    function gids() {}o2zm65(gids, 'laya.wx.mini.MiniImage');var m6oz2 = gids['prototype'];return m6oz2['_loadImage'] = function (oixzm) {
      var gdi4s = this,
          pqe_ = ![];oixzm['indexOf']('layaNativeDir/') == -0x1 && (pqe_ = !![], oixzm = xsid['formatURL'](oixzm));if (!xims4o['getFileInfo'](oixzm)) {
        if (oixzm['indexOf']('http://') != -0x1 || oixzm['indexOf']('https://') != -0x1) xims4o['downImg'](oixzm, new hp_eaq(gids, gids['onDownImgCallBack'], [oixzm, gdi4s]), oixzm);else gids['onCreateImage'](oixzm, gdi4s, !![]);
      } else gids['onCreateImage'](oixzm, gdi4s, !pqe_);
    }, gids['onDownImgCallBack'] = function (o5t, zomsxi, k031bw) {
      if (!k031bw) gids['onCreateImage'](o5t, zomsxi);else zomsxi['onError'](null);
    }, gids['onCreateImage'] = function (bpa0eh, hpaq0e, dvgix4) {
      dvgix4 === void 0x0 && (dvgix4 = ![]);var zt5o;if (!dvgix4) {
        var cvnudj = xims4o['getFileInfo'](bpa0eh),
            pqae_ = cvnudj['md5'];zt5o = xims4o['getFileNativePath'](pqae_);
      } else zt5o = bpa0eh;if (hpaq0e['imgCache'] == null) hpaq0e['imgCache'] = {};var v4xd;function he0aqp() {
        v4xd['onload'] = null, v4xd['onerror'] = null, delete hpaq0e['imgCache'][bpa0eh];
      };var gmsi = function () {
        he0aqp(), hpaq0e['onLoaded'](v4xd);
      },
          cdujvn = function () {
        he0aqp(), hpaq0e['event']('error', 'Load image failed');
      };hpaq0e['_type'] == 'nativeimage' ? (v4xd = new wbt3k['window']['Image'](), v4xd['crossOrigin'] = '', v4xd['onload'] = gmsi, v4xd['onerror'] = cdujvn, v4xd['src'] = zt5o, hpaq0e['imgCache'][bpa0eh] = v4xd) : new q_parh['create'](zt5o, { 'onload': gmsi, 'onerror': cdujvn, 'onCreate': function (oz5t26) {
          v4xd = oz5t26, hpaq0e['imgCache'][bpa0eh] = oz5t26;
        } });
    }, gids;
  }(),
      l79c8f = function () {
    function ucfj9() {}return o2zm65(ucfj9, 'laya.wx.mini.MiniInput'), ucfj9['_createInputElement'] = function () {
      vcunjd['_initInput'](vcunjd['area'] = wbt3k['createElement']('textarea')), vcunjd['_initInput'](vcunjd['input'] = wbt3k['createElement']('input')), vcunjd['inputContainer'] = wbt3k['createElement']('div'), vcunjd['inputContainer']['style']['position'] = 'absolute', vcunjd['inputContainer']['style']['zIndex'] = 0x186a0, wbt3k['container']['appendChild'](vcunjd['inputContainer']), vcunjd['inputContainer']['setPos'] = function (gvixd, ahq0ep) {
        vcunjd['inputContainer']['style']['left'] = gvixd + 'px', vcunjd['inputContainer']['style']['top'] = ahq0ep + 'px';
      }, i4dsxg['stage']['on']('resize', null, ucfj9['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (dvx4) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), k1tw6['_soundClass'] = pqh0e, k1tw6['_musicClass'] = pqh0e;
    }, ucfj9['_onStageResize'] = function () {
      var u4gdnv = i4dsxg['stage']['_canvasTransform']['identity']();u4gdnv['scale'](wbt3k['width'] / jn9cfl['canvas']['width'] / jvcn['getPixelRatio'](), wbt3k['height'] / jn9cfl['canvas']['height'] / jvcn['getPixelRatio']());
    }, ucfj9['wxinputFocus'] = function (ah_pq) {
      var ly7 = vcunjd['inputElement']['target'];if (ly7 && !ly7['editable']) return;z256o['window']['wx']['offKeyboardConfirm'](), z256o['window']['wx']['offKeyboardInput'](), z256o['window']['wx']['showKeyboard']({ 'defaultValue': ly7['text'], 'maxLength': ly7['maxChars'], 'multiple': ly7['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (arp_q) {}, 'fail': function (kw3tb) {} }), z256o['window']['wx']['onKeyboardConfirm'](function (djncv) {
        var gujvdn = djncv ? djncv['value'] : '';ly7['text'] = gujvdn, ly7['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), z256o['window']['wx']['onKeyboardInput'](function (k1bw3t) {
        var imoz = k1bw3t ? k1bw3t['value'] : '';if (!ly7['multiline']) {
          if (imoz['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ly7['text'] = imoz, ly7['event']('input');
      });
    }, ucfj9['inputEnter'] = function () {
      vcunjd['inputElement']['target']['focus'] = ![];
    }, ucfj9['wxinputblur'] = function () {
      ucfj9['hideKeyboard']();
    }, ucfj9['hideKeyboard'] = function () {
      z256o['window']['wx']['offKeyboardConfirm'](), z256o['window']['wx']['offKeyboardInput'](), z256o['window']['wx']['hideKeyboard']({ 'success': function (e_pha) {
          console['log']('隐藏键盘');
        }, 'fail': function (qha_pe) {
          console['log']('隐藏键盘出错:' + (qha_pe ? qha_pe['errMsg'] : ''));
        } });
    }, ucfj9;
  }(),
      f89yl7 = function () {
    function mosx4i() {}o2zm65(mosx4i, 'laya.wx.mini.MiniLoader');var fju9n = mosx4i['prototype'];return fju9n['load'] = function (xivg4, $l7y8, zmi, bwekh, ugvdn) {
      zmi === void 0x0 && (zmi = !![]), ugvdn === void 0x0 && (ugvdn = ![]);var xgvi4d = this;xgvi4d['_url'] = xivg4;if (xivg4['indexOf']('data:image') === 0x0) xgvi4d['_type'] = $l7y8 = 'image';else xgvi4d['_type'] = $l7y8 || ($l7y8 = xgvi4d['getTypeFromUrl'](xivg4));xgvi4d['_cache'] = zmi, xgvi4d['_data'] = null;var moizx = 'ascii';if (xivg4['indexOf']('.fnt') != -0x1) moizx = 'utf8';else $l7y8 == 'arraybuffer' && (moizx = '');;var osx4m = e1w0b['getFileExtension'](xivg4);if (mosx4i['_fileTypeArr']['indexOf'](osx4m) != -0x1) z256o['EnvConfig']['load']['call'](this, xivg4, $l7y8, zmi, bwekh, ugvdn);else {
        if (!xims4o['getFileInfo'](xivg4)) {
          if (xivg4['indexOf']('layaNativeDir/') != -0x1) {
            if (z256o['isZiYu']) {
              var z256 = xims4o['ziyuFileData'][xivg4];xgvi4d['onLoaded'](z256);return;
            } else {
              cosnole['log']('read read'), xims4o['read'](xivg4, moizx, new hp_eaq(mosx4i, mosx4i['onReadNativeCallBack'], [moizx, xivg4, $l7y8, zmi, bwekh, ugvdn, xgvi4d]));return;
            }
          }if (xsid['rootPath'] == '') var udv4gi = xivg4;else udv4gi = xivg4['split'](xsid['rootPath'])[0x0];xivg4['indexOf']('http://') != -0x1 || xivg4['indexOf']('https://') != -0x1 ? z256o['EnvConfig']['load']['call'](xgvi4d, xivg4, $l7y8, zmi, bwekh, ugvdn) : xims4o['readFile'](udv4gi, moizx, new hp_eaq(mosx4i, mosx4i['onReadNativeCallBack'], [moizx, xivg4, $l7y8, zmi, bwekh, ugvdn, xgvi4d]), xivg4);
        } else z256o['EnvConfig']['load']['call'](this, xivg4, $l7y8, zmi, bwekh, ugvdn);
      }
    }, fju9n['resMgrLoad'] = function (w123t6, xd4gs, d4xgi, ehbkw0, omxis, wbt13k, sxgmi) {
      d4xgi === void 0x0 && (d4xgi = 0x0), ehbkw0 === void 0x0 && (ehbkw0 = ![]), omxis === void 0x0 && (omxis = ![]), wbt13k === void 0x0 && (wbt13k = 0x0), sxgmi === void 0x0 && (sxgmi = 0x3), w123t6['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', w123t6), z256o['EnvConfig']['resMgrLoad'](w123t6, (xd4vig, fl78y9, dnv4) => {
        mosx4i['prototype']['resMgrLoadCallBack'](xd4vig, fl78y9, dnv4, xd4gs);
      }, d4xgi, ehbkw0, omxis, wbt13k, sxgmi);
    }, fju9n['resMgrLoadCallBack'] = function (l97$, mosi, b0e1w, i4xmos) {
      console['log']('buff:::', l97$, b0e1w, xims4o['fileNativeDir'] + '///' + xims4o['fileListName']), i4xmos(l97$, mosi, b0e1w);
    }, fju9n['clearRes'] = function (hekbw0, aeh0bp) {
      aeh0bp === void 0x0 && (aeh0bp = ![]);var xgvid = this;xgvid['clearRes'](hekbw0, aeh0bp);var t52z6o = xims4o['getFileInfo'](hekbw0);if (t52z6o && (hekbw0['indexOf']('http://') != -0x1 || hekbw0['indexOf']('https://') != -0x1)) {
        var eb1wk = t52z6o['md5'],
            guvid4 = xims4o['getFileNativePath'](eb1wk);xims4o['remove'](guvid4);
      }
    }, mosx4i['onReadNativeCallBack'] = function (kbehw, zsoxm, iug4dv, jncvud, y7lf89, cnjfuv, e0kpbh, sxi4, d4giuv) {
      jncvud === void 0x0 && (jncvud = !![]), cnjfuv === void 0x0 && (cnjfuv = ![]), sxi4 === void 0x0 && (sxi4 = 0x0);if (!sxi4) {
        var l$y978;if (iug4dv == 'json' || iug4dv == 'atlas') l$y978 = z256o['getJson'](d4giuv['data']);else iug4dv == 'xml' ? l$y978 = e1w0b['parseXMLFromString'](d4giuv['data']) : l$y978 = d4giuv['data'];e0kpbh['onLoaded'](l$y978), !z256o['isZiYu'] && z256o['isPosMsgYu'] && iug4dv != 'arraybuffer' && wx['postMessage']({ 'url': zsoxm, 'data': l$y978, 'isLoad': !![] });
      } else sxi4 == 0x1 && z256o['EnvConfig']['load']['call'](e0kpbh, zsoxm, iug4dv, jncvud, y7lf89, cnjfuv);
    }, ozs5mx(mosx4i, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), mosx4i;
  }(),
      xims4o = function (cj97fl) {
    function aqpeh0() {
      aqpeh0['__super']['call'](this);;
    }return o2zm65(aqpeh0, 'laya.wx.mini.MiniFileMgr', cj97fl), aqpeh0['isLoadFile'] = function (oszxi) {
      return aqpeh0['_fileTypeArr']['indexOf'](oszxi) != -0x1 ? !![] : ![];
    }, aqpeh0['getFileInfo'] = function (gd4iu) {
      var aehbp = gd4iu['split']('?')[0x0],
          wkb0eh = aqpeh0['filesListObj'][aehbp];if (wkb0eh == null) return null;else return wkb0eh;return null;
    }, aqpeh0['onFileUpdate'] = function (zism, is4ox) {
      var t3wbk1 = zism['split']('/'),
          _qar = t3wbk1[t3wbk1['length'] - 0x1],
          h0ewk = aqpeh0['getFileInfo'](is4ox);if (h0ewk == null) aqpeh0['onSaveFile'](is4ox, _qar);else {
        if (h0ewk['readyUrl'] != is4ox) aqpeh0['remove'](_qar, is4ox);
      }
    }, aqpeh0['exits'] = function (f879yl, t32w16) {
      var o26m5z = aqpeh0['getFileNativePath'](f879yl);aqpeh0['fs']['getFileInfo']({ 'filePath': o26m5z, 'success': function (wbtk31) {
          t32w16 != null && t32w16['runWith']([0x0, wbtk31]);
        }, 'fail': function (nvf) {
          t32w16 != null && t32w16['runWith']([0x1, nvf]);
        } });
    }, aqpeh0['read'] = function (ozimx, hb0epa, ncufj9, l97f8y) {
      hb0epa === void 0x0 && (hb0epa = 'ascill'), l97f8y === void 0x0 && (l97f8y = '');var unv4gd;l97f8y != '' ? unv4gd = aqpeh0['getFileNativePath'](ozimx) : unv4gd = ozimx, aqpeh0['fs']['readFile']({ 'filePath': unv4gd, 'encoding': hb0epa, 'success': function (qpe_ah) {
          ncufj9 != null && ncufj9['runWith']([0x0, qpe_ah]);
        }, 'fail': function (gdv4n) {
          if (gdv4n && l97f8y != '') aqpeh0['down'](l97f8y, hb0epa, ncufj9, l97f8y);else ncufj9 != null && ncufj9['runWith']([0x1]);
        } });
    }, aqpeh0['readNativeFile'] = function (i4msxo, m4igsx) {
      aqpeh0['fs']['readFile']({ 'filePath': i4msxo, 'encoding': '', 'success': function (k1w3b) {
          m4igsx != null && m4igsx['runWith']([0x0]);
        }, 'fail': function (nu4g) {
          m4igsx != null && m4igsx['runWith']([0x1]);
        } });
    }, aqpeh0['down'] = function (lfy879, b3kw1t, un9jcf, zoixsm) {
      b3kw1t === void 0x0 && (b3kw1t = 'ascill'), zoixsm === void 0x0 && (zoixsm = '');var lf79cj = aqpeh0['getFileNativePath'](zoixsm),
          $8l9 = aqpeh0['wxdown']({ 'url': lfy879, 'filePath': lf79cj, 'success': function (m2z65o) {
          if (m2z65o['statusCode'] === 0xc8) aqpeh0['readFile'](m2z65o['filePath'], b3kw1t, un9jcf, zoixsm);
        }, 'fail': function (t6w3) {
          un9jcf != null && un9jcf['runWith']([0x1, t6w3]);
        } });$8l9['onProgressUpdate'](function (cjund) {
        un9jcf != null && un9jcf['runWith']([0x2, cjund['progress']]);
      });
    }, aqpeh0['readFile'] = function (hea_qp, x5zms, o62tz5, jfln9c) {
      x5zms === void 0x0 && (x5zms = 'ascill'), jfln9c === void 0x0 && (jfln9c = ''), aqpeh0['fs']['readFile']({ 'filePath': hea_qp, 'encoding': x5zms, 'success': function (m52z6o) {
          if (hea_qp['indexOf']('http://') != -0x1 || hea_qp['indexOf']('https://') != -0x1) aqpeh0['onFileUpdate'](hea_qp, jfln9c);o62tz5 != null && o62tz5['runWith']([0x0, m52z6o]);
        }, 'fail': function (f78ly9) {
          if (f78ly9) o62tz5 != null && o62tz5['runWith']([0x1, f78ly9]);
        } });
    }, aqpeh0['downImg'] = function (gms4xi, iomxz, gdix4) {
      gdix4 === void 0x0 && (gdix4 = '');var ea_hpq = aqpeh0['wxdown']({ 'url': gms4xi, 'success': function (l78yf) {
          l78yf['statusCode'] === 0xc8 && aqpeh0['copyFile'](l78yf['tempFilePath'], gdix4, iomxz);
        }, 'fail': function (z5o26) {
          iomxz != null && iomxz['runWith']([0x1, z5o26]);
        } });
    }, aqpeh0['copyFile'] = function (q_ahpr, vdugn, xmo5zs) {
      var _paeqh = q_ahpr['split']('/'),
          hepb0a = _paeqh[_paeqh['length'] - 0x1],
          bk30w = vdugn['split']('?')[0x0],
          pq0ae = aqpeh0['getFileInfo'](vdugn),
          lf8y = aqpeh0['getFileNativePath'](hepb0a);aqpeh0['fs']['copyFile']({ 'srcPath': q_ahpr, 'destPath': lf8y, 'success': function (udi4g) {
          if (!pq0ae) aqpeh0['onSaveFile'](vdugn, hepb0a), xmo5zs != null && xmo5zs['runWith']([0x0]);else {
            if (pq0ae['readyUrl'] != vdugn) aqpeh0['remove'](hepb0a, vdugn, xmo5zs);
          }
        }, 'fail': function (p_rah) {
          xmo5zs != null && xmo5zs['runWith']([0x1, p_rah]);
        } });
    }, aqpeh0['getFileNativePath'] = function (bpha) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + bpha;
    }, aqpeh0['remove'] = function (l7c9, apbh, kwhb0e) {
      apbh === void 0x0 && (apbh = '');var pq_e = aqpeh0['getFileInfo'](apbh),
          phkbe = aqpeh0['getFileNativePath'](pq_e['md5']);i4dsxg['loader']['clearRes'](pq_e['readyUrl']), aqpeh0['fs']['unlink']({ 'filePath': phkbe, 'success': function (he0qp) {
          if (apbh != '') aqpeh0['onSaveFile'](apbh, l7c9);kwhb0e != null && kwhb0e['runWith']([0x0]);
        }, 'fail': function (y$l87) {} });
    }, aqpeh0['onSaveFile'] = function (gunjvd, vufcn) {
      var t1w2 = gunjvd['split']('?')[0x0];aqpeh0['filesListObj'][t1w2] = { 'md5': vufcn, 'readyUrl': gunjvd }, aqpeh0['fs']['writeFile']({ 'filePath': aqpeh0['fileNativeDir'] + '/' + aqpeh0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](aqpeh0['filesListObj']), 'success': function (vudg) {
          console['log']('写入测试测试成功：', vudg);
        }, 'fail': function (gdxis) {
          console['log']('写入测试测试失败：', gdxis);
        } });
    }, aqpeh0['existDir'] = function (dvigu4, unfjc9) {
      aqpeh0['fs']['mkdir']({ 'dirPath': dvigu4, 'success': function (ugnjdv) {
          unfjc9 != null && unfjc9['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (t361w) {
          if (t361w['errMsg']['indexOf']('file already exists') != -0x1) aqpeh0['readSync'](aqpeh0['fileListName'], 'utf8', unfjc9);else unfjc9 != null && unfjc9['runWith']([0x1, t361w]);
        } });
    }, aqpeh0['readSync'] = function ($l9y8, ozm265, ufjcnv, qa0peh) {
      ozm265 === void 0x0 && (ozm265 = 'ascill'), qa0peh === void 0x0 && (qa0peh = '');var o52z = aqpeh0['getFileNativePath']($l9y8),
          cflj79;try {
        cflj79 = aqpeh0['fs']['readFileSync'](o52z), ufjcnv != null && ufjcnv['runWith']([0x0, { 'data': cflj79 }]);
      } catch (nfl9jc) {
        ufjcnv != null && ufjcnv['runWith']([0x1]);
      }
    }, aqpeh0['readCache'] = function () {}, aqpeh0['writeCache'] = function (e0aqhp) {
      var misxz = readyUrl['split']('?')[0x0];aqpeh0['filesListObj'][misxz] = { 'md5': md5Name, 'readyUrl': readyUrl }, aqpeh0['fs']['writeFile']({ 'filePath': aqpeh0['fileNativeDir'] + '/' + aqpeh0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](aqpeh0['filesListObj']), 'success': function (cnu9fj) {}, 'fail': function (bpeh0) {} });
    }, aqpeh0['setNativeFileDir'] = function (cnj9fu) {
      aqpeh0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + cnj9fu;
    }, aqpeh0['filesListObj'] = {}, aqpeh0['fileNativeDir'] = null, aqpeh0['fileListName'] = 'layaairfiles.txt', aqpeh0['ziyuFileData'] = {}, ozs5mx(aqpeh0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), aqpeh0;
  }(jl79),
      pqh0e = function (ahpe) {
    function vix4dg() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], vix4dg['__super']['call'](this), this['_sound'] = vix4dg['_createSound']();
    }o2zm65(vix4dg, 'laya.wx.mini.MiniSound', ahpe);var pah0q = vix4dg['prototype'];return pah0q['load'] = function (jgunvd) {
      var zsximo = this;jgunvd = xsid['formatURL'](jgunvd), this['url'] = jgunvd;if (vix4dg['_audioCache'][jgunvd]) {
        this['event']('complete');return;
      }function ljcf() {
        if (vix4dg['_null'] != undefined) zsximo['_sound']['onCanplay'](vix4dg['_null']), zsximo['_sound']['onError'](vix4dg['_null']);else try {
          zsximo['_sound']['onCanplay'](null), zsximo['_sound']['onError'](null), vix4dg['_null'] = null;
        } catch (mgsi4x) {
          console['warn']('[wxmini] _clearSound:' + mgsi4x), zsximo['_sound']['onCanplay'](ig4m), zsximo['_sound']['onError'](ig4m), vix4dg['_null'] = ig4m;
        }
      }function fj97cl() {
        ljcf(), dug4i['loaded'] = !![], dug4i['event']('complete'), vix4dg['_audioCache'][dug4i['url']] = dug4i;
      }function vu4dgi(tz2356) {
        console['error']('errCode=' + tz2356['errCode'] + '  errMsg=' + tz2356['errMsg']), ljcf(), dug4i['event']('error');
      }function ig4m() {}this['_sound']['onCanplay'](fj97cl), this['_sound']['onError'](vu4dgi), this['_sound']['src'] = jgunvd;var dug4i = this;
    }, pah0q['play'] = function (sx4, l97fcj) {
      sx4 === void 0x0 && (sx4 = 0x0), l97fcj === void 0x0 && (l97fcj = 0x0);var rp_q;if (this['url'] == k1tw6['_tMusic']) {
        if (!vix4dg['_musicAudio']) vix4dg['_musicAudio'] = vix4dg['_createSound']();rp_q = vix4dg['_musicAudio'];
      } else rp_q = vix4dg['_createSound']();rp_q['src'] = this['url'];var o6t2z5 = new mgi(rp_q);return o6t2z5['url'] = this['url'], o6t2z5['loops'] = l97fcj, o6t2z5['startTime'] = sx4, o6t2z5['play'](), k1tw6['addChannel'](o6t2z5), o6t2z5;
    }, pah0q['dispose'] = function () {
      var zmxsoi = vix4dg['_audioCache'][this['url']];zmxsoi && (zmxsoi['src'] = '', delete vix4dg['_audioCache'][this['url']]);
    }, igs4dx(0x0, pah0q, 'duration', function () {
      return this['_sound']['duration'];
    }), vix4dg['_createSound'] = function () {
      return vix4dg['_id']++, z256o['window']['wx']['createInnerAudioContext']();
    }, vix4dg['_musicAudio'] = null, vix4dg['_id'] = 0x0, vix4dg['_audioCache'] = {}, vix4dg['_null'] = undefined, vix4dg;
  }(jl79),
      mgi = function (kehw0) {
    function kw0eh(tw621) {
      this['_audio'] = null, this['_onEnd'] = null, kw0eh['__super']['call'](this), this['_audio'] = tw621, this['_onEnd'] = e1w0b['bind'](this['__onEnd'], this), tw621['onEnded'](this['_onEnd']);
    }o2zm65(kw0eh, 'laya.wx.mini.MiniSoundChannel', kehw0);var tk3wb1 = kw0eh['prototype'];return tk3wb1['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (i4dsxg['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, tk3wb1['__onNull'] = function () {}, tk3wb1['play'] = function () {
      this['isStopped'] = ![], k1tw6['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, tk3wb1['stop'] = function () {
      this['isStopped'] = !![], k1tw6['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (kw0eh['_null'] != undefined) this['_audio']['onEnded'](kw0eh['_null']);else try {
        this['_audio']['onEnded'](null), kw0eh['_null'] = null;
      } catch (b1k) {
        console['warn']('[wxmini] stop:' + b1k), this['_audio']['onEnded'](e1w0b['bind'](this['__onNull'], this)), kw0eh['_null'] = e1w0b['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, tk3wb1['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, tk3wb1['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], k1tw6['addChannel'](this), this['_audio']['play']();
    }, igs4dx(0x0, tk3wb1, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), igs4dx(0x0, tk3wb1, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), igs4dx(0x0, tk3wb1, 'volume', function () {
      return 0x1;
    }, function (cndu) {}), kw0eh['_null'] = undefined, kw0eh;
  }(_qahe);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var wt63 in Laya) {
    var w1b3k0 = Laya[wt63];w1b3k0 && w1b3k0['__isclass'] && (exports[wt63] = w1b3k0);
  }
});