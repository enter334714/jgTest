var B = wx.$B;
(function (window, document, _x$t0) {
  var spun = _x$t0['un'],
      negspu = _x$t0['uns'],
      z0yl4 = _x$t0['static'],
      zk9lb4 = _x$t0['class'],
      g7puns = _x$t0['getset'],
      z9hk6b = _x$t0['__newvec'],
      $l0vty = laya['utils']['Browser'],
      xtqd$ = laya['events']['Event'],
      y0vx = laya['events']['EventDispatcher'],
      y40l = laya['resource']['HTMLImage'],
      ia3w2 = laya['utils']['Handler'],
      jrom51 = laya['display']['Input'],
      zh96bk = laya['net']['Loader'],
      $t_ = laya['maths']['Matrix'],
      s96kh7 = laya['renders']['Render'],
      x$y0t_ = laya['utils']['RunDriver'],
      tdx_$ = laya['media']['Sound'],
      apige2 = laya['media']['SoundChannel'],
      u7gsn = laya['media']['SoundManager'],
      w238ai = laya['display']['Stage'],
      zlvby4 = laya['net']['URL'],
      l$yvt = laya['utils']['Utils'],
      sp7ng = function () {
    function gpesun() {}return zk9lb4(gpesun, 'laya.wx.mini.MiniAdpter'), gpesun['getJson'] = function (lz4y0) {
      return JSON['parse'](lz4y0);
    }, gpesun['init'] = function (w5f3r, bh96z) {
      w5f3r === void 0x0 && (w5f3r = ![]), bh96z === void 0x0 && (bh96z = ![]);if (gpesun['_inited']) return;gpesun['window'] = window;if (gpesun['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;gpesun['_inited'] = !![], gpesun['isZiYu'] = bh96z, gpesun['isPosMsgYu'] = w5f3r, gpesun['EnvConfig'] = {}, !gpesun['isZiYu'] && (i2wa['setNativeFileDir']('/layaairGame'), i2wa['existDir'](i2wa['fileNativeDir'], ia3w2['create'](gpesun, gpesun['onMkdirCallBack']))), gpesun['window']['focus'] = function () {}, _x$t0['getUrlPath'] = function () {}, gpesun['window']['logtime'] = function (z6bk4) {}, gpesun['window']['alertTimeLog'] = function (egniu) {}, gpesun['window']['resetShareInfo'] = function () {}, gpesun['window']['CanvasRenderingContext2D'] = function () {}, gpesun['window']['CanvasRenderingContext2D']['prototype'] = gpesun['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], gpesun['window']['document']['body']['appendChild'] = function () {}, gpesun['EnvConfig']['pixelRatioInt'] = 0x0, x$y0t_['getPixelRatio'] = gpesun['pixelRatio'], gpesun['_preCreateElement'] = $l0vty['createElement'], $l0vty['createElement'] = gpesun['createElement'], x$y0t_['createShaderCondition'] = gpesun['createShaderCondition'], l$yvt['parseXMLFromString'] = gpesun['parseXMLFromString'], jrom51['_createInputElement'] = kb94z6['_createInputElement'], gpesun['EnvConfig']['load'] = zh96bk['prototype']['load'], zh96bk['prototype']['load'] = qd$_xt['prototype']['load'], gpesun['isZiYu'] && w5f3r && wx['onMessage'](function (ngu7hs) {
        ngu7hs['isLoad'] && (i2wa['ziyuFileData'][ngu7hs['url']] = ngu7hs['data']);
      });
    }, gpesun['onMkdirCallBack'] = function (khb76, _dtqx) {
      if (!khb76) i2wa['filesListObj'] = JSON['parse'](_dtqx['data']);
    }, gpesun['pixelRatio'] = function () {
      if (!gpesun['EnvConfig']['pixelRatioInt']) try {
        var zlvb = wx['getSystemInfoSync']();return gpesun['EnvConfig']['pixelRatioInt'] = zlvb['pixelRatio'], zlvb = zlvb, zlvb['pixelRatio'];
      } catch (su7h6n) {}return gpesun['EnvConfig']['pixelRatioInt'];
    }, gpesun['createElement'] = function (ar3wf8) {
      if (ar3wf8 == 'canvas') {
        var vy0z4l;return gpesun['idx'] == 0x1 ? gpesun['isZiYu'] ? (vy0z4l = sharedCanvas, vy0z4l['style'] = {}) : vy0z4l = window['canvas'] : vy0z4l = window['wx']['createCanvas'](), gpesun['idx']++, vy0z4l;
      } else {
        if (ar3wf8 == 'textarea' || ar3wf8 == 'input') return gpesun['onCreateInput'](ar3wf8);else {
          if (ar3wf8 == 'div') {
            var npgsue = gpesun['_preCreateElement'](ar3wf8);return npgsue['contains'] = function (us7gpn) {
              return null;
            }, npgsue['removeChild'] = function (yzlbv4) {}, npgsue;
          } else return gpesun['_preCreateElement'](ar3wf8);
        }
      }
    }, gpesun['onCreateInput'] = function ($txd_) {
      var zy40 = gpesun['_preCreateElement']($txd_);return zy40['focus'] = kb94z6['wxinputFocus'], zy40['blur'] = kb94z6['wxinputblur'], zy40['style'] = {}, zy40['value'] = 0x0, zy40['parentElement'] = {}, zy40['placeholder'] = {}, zy40['type'] = {}, zy40['setColor'] = function (g2ipea) {}, zy40['setType'] = function (w3fra) {}, zy40['setFontFace'] = function (a3rw8f) {}, zy40['addEventListener'] = function (xyt0v$) {}, zy40['contains'] = function (f3j85) {
        return null;
      }, zy40['removeChild'] = function (awi2) {}, zy40;
    }, gpesun['createShaderCondition'] = function (_yx$0t) {
      var f2a3w8 = this,
          iw28a3 = function () {
        var lbzv4 = _yx$0t;return f2a3w8[_yx$0t['replace']('this.', '')];
      };return iw28a3;
    }, gpesun['EnvConfig'] = null, gpesun['window'] = null, gpesun['_preCreateElement'] = null, gpesun['_inited'] = ![], gpesun['wxRequest'] = null, gpesun['systemInfo'] = null, gpesun['version'] = '0.0.1', gpesun['isZiYu'] = ![], gpesun['isPosMsgYu'] = ![], gpesun['parseXMLFromString'] = function (rwaf8) {
      var gs7unh, epwa2i;rwaf8 = rwaf8['replace'](/>\s+</g, '><');try {
        gs7unh = new window['Parser']['DOMParser']()['parseFromString'](rwaf8, 'text/xml');
      } catch (kzb4l) {
        throw '需要引入xml解析库文件';
      }return gs7unh;
    }, gpesun['idx'] = 0x1, gpesun;
  }(),
      shu67 = function () {
    function xvy$0() {}zk9lb4(xvy$0, 'laya.wx.mini.MiniImage');var s7ugnh = xvy$0['prototype'];return s7ugnh['_loadImage'] = function (ugsne) {
      var b96kz = this,
          i2wa83 = ![];ugsne['indexOf']('layaNativeDir/') == -0x1 && (i2wa83 = !![], ugsne = zlvby4['formatURL'](ugsne));if (!i2wa['getFileInfo'](ugsne)) {
        if (ugsne['indexOf']('http://') != -0x1 || ugsne['indexOf']('https://') != -0x1) i2wa['downImg'](ugsne, new ia3w2(xvy$0, xvy$0['onDownImgCallBack'], [ugsne, b96kz]), ugsne);else xvy$0['onCreateImage'](ugsne, b96kz, !![]);
      } else xvy$0['onCreateImage'](ugsne, b96kz, !i2wa83);
    }, xvy$0['onDownImgCallBack'] = function (u2ie, zvly4, snhgu7) {
      if (!snhgu7) xvy$0['onCreateImage'](u2ie, zvly4);else zvly4['onError'](null);
    }, xvy$0['onCreateImage'] = function (r385, ewpa2i, bk7h69) {
      bk7h69 === void 0x0 && (bk7h69 = ![]);var jfm1r5;if (!bk7h69) {
        var upi2eg = i2wa['getFileInfo'](r385),
            un67sh = upi2eg['md5'];jfm1r5 = i2wa['getFileNativePath'](un67sh);
      } else jfm1r5 = r385;if (ewpa2i['imgCache'] == null) ewpa2i['imgCache'] = {};var xtdq_;function giu2() {
        xtdq_['onload'] = null, xtdq_['onerror'] = null, delete ewpa2i['imgCache'][r385];
      };var frj158 = function () {
        giu2(), ewpa2i['onLoaded'](xtdq_);
      },
          hk976b = function () {
        giu2(), ewpa2i['event']('error', 'Load image failed');
      };ewpa2i['_type'] == 'nativeimage' ? (xtdq_ = new $l0vty['window']['Image'](), xtdq_['crossOrigin'] = '', xtdq_['onload'] = frj158, xtdq_['onerror'] = hk976b, xtdq_['src'] = jfm1r5, ewpa2i['imgCache'][r385] = xtdq_) : new y40l['create'](jfm1r5, { 'onload': frj158, 'onerror': hk976b, 'onCreate': function (kv4lbz) {
          xtdq_ = kv4lbz, ewpa2i['imgCache'][r385] = kv4lbz;
        } });
    }, xvy$0;
  }(),
      kb94z6 = function () {
    function qdtx$() {}return zk9lb4(qdtx$, 'laya.wx.mini.MiniInput'), qdtx$['_createInputElement'] = function () {
      jrom51['_initInput'](jrom51['area'] = $l0vty['createElement']('textarea')), jrom51['_initInput'](jrom51['input'] = $l0vty['createElement']('input')), jrom51['inputContainer'] = $l0vty['createElement']('div'), jrom51['inputContainer']['style']['position'] = 'absolute', jrom51['inputContainer']['style']['zIndex'] = 0x186a0, $l0vty['container']['appendChild'](jrom51['inputContainer']), jrom51['inputContainer']['setPos'] = function (w83r5f, negipu) {
        jrom51['inputContainer']['style']['left'] = w83r5f + 'px', jrom51['inputContainer']['style']['top'] = negipu + 'px';
      }, _x$t0['stage']['on']('resize', null, qdtx$['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (kl9bz4) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), u7gsn['_soundClass'] = l$y0, u7gsn['_musicClass'] = l$y0;
    }, qdtx$['_onStageResize'] = function () {
      var jm1f5 = _x$t0['stage']['_canvasTransform']['identity']();jm1f5['scale']($l0vty['width'] / s96kh7['canvas']['width'] / x$y0t_['getPixelRatio'](), $l0vty['height'] / s96kh7['canvas']['height'] / x$y0t_['getPixelRatio']());
    }, qdtx$['wxinputFocus'] = function (fjm15) {
      var pgea2i = jrom51['inputElement']['target'];if (pgea2i && !pgea2i['editable']) return;sp7ng['window']['wx']['offKeyboardConfirm'](), sp7ng['window']['wx']['offKeyboardInput'](), sp7ng['window']['wx']['showKeyboard']({ 'defaultValue': pgea2i['text'], 'maxLength': pgea2i['maxChars'], 'multiple': pgea2i['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (rf5j3) {}, 'fail': function (xd_qt) {} }), sp7ng['window']['wx']['onKeyboardConfirm'](function (b9zl4k) {
        var nusg7p = b9zl4k ? b9zl4k['value'] : '';pgea2i['text'] = nusg7p, pgea2i['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), sp7ng['window']['wx']['onKeyboardInput'](function (hu7gsn) {
        var zl40y = hu7gsn ? hu7gsn['value'] : '';if (!pgea2i['multiline']) {
          if (zl40y['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }pgea2i['text'] = zl40y, pgea2i['event']('input');
      });
    }, qdtx$['inputEnter'] = function () {
      jrom51['inputElement']['target']['focus'] = ![];
    }, qdtx$['wxinputblur'] = function () {
      qdtx$['hideKeyboard']();
    }, qdtx$['hideKeyboard'] = function () {
      sp7ng['window']['wx']['offKeyboardConfirm'](), sp7ng['window']['wx']['offKeyboardInput'](), sp7ng['window']['wx']['hideKeyboard']({ 'success': function (guspe) {
          console['log']('隐藏键盘');
        }, 'fail': function (gp7snu) {
          console['log']('隐藏键盘出错:' + (gp7snu ? gp7snu['errMsg'] : ''));
        } });
    }, qdtx$;
  }(),
      qd$_xt = function () {
    function gp2ae() {}zk9lb4(gp2ae, 'laya.wx.mini.MiniLoader');var v4zyl = gp2ae['prototype'];return v4zyl['load'] = function (igap2e, rw38, a2f3, y_t$, npiug) {
      a2f3 === void 0x0 && (a2f3 = !![]), npiug === void 0x0 && (npiug = ![]);var y40 = this;y40['_url'] = igap2e;if (igap2e['indexOf']('data:image') === 0x0) y40['_type'] = rw38 = 'image';else y40['_type'] = rw38 || (rw38 = y40['getTypeFromUrl'](igap2e));y40['_cache'] = a2f3, y40['_data'] = null;var kvbzl = 'ascii';if (igap2e['indexOf']('.fnt') != -0x1) kvbzl = 'utf8';else rw38 == 'arraybuffer' && (kvbzl = '');;var i2e3a = l$yvt['getFileExtension'](igap2e);if (gp2ae['_fileTypeArr']['indexOf'](i2e3a) != -0x1) sp7ng['EnvConfig']['load']['call'](this, igap2e, rw38, a2f3, y_t$, npiug);else {
        if (!i2wa['getFileInfo'](igap2e)) {
          if (igap2e['indexOf']('layaNativeDir/') != -0x1) {
            if (sp7ng['isZiYu']) {
              var f8ra3 = i2wa['ziyuFileData'][igap2e];y40['onLoaded'](f8ra3);return;
            } else {
              cosnole['log']('read read'), i2wa['read'](igap2e, kvbzl, new ia3w2(gp2ae, gp2ae['onReadNativeCallBack'], [kvbzl, igap2e, rw38, a2f3, y_t$, npiug, y40]));return;
            }
          }if (zlvby4['rootPath'] == '') var p2gi = igap2e;else p2gi = igap2e['split'](zlvby4['rootPath'])[0x0];igap2e['indexOf']('http://') != -0x1 || igap2e['indexOf']('https://') != -0x1 ? sp7ng['EnvConfig']['load']['call'](y40, igap2e, rw38, a2f3, y_t$, npiug) : i2wa['readFile'](p2gi, kvbzl, new ia3w2(gp2ae, gp2ae['onReadNativeCallBack'], [kvbzl, igap2e, rw38, a2f3, y_t$, npiug, y40]), igap2e);
        } else sp7ng['EnvConfig']['load']['call'](this, igap2e, rw38, a2f3, y_t$, npiug);
      }
    }, v4zyl['resMgrLoad'] = function (dt$_, n67sh, t_$0xd, enpsg, j51rm, f8a3w, ieun) {
      t_$0xd === void 0x0 && (t_$0xd = 0x0), enpsg === void 0x0 && (enpsg = ![]), j51rm === void 0x0 && (j51rm = ![]), f8a3w === void 0x0 && (f8a3w = 0x0), ieun === void 0x0 && (ieun = 0x3), dt$_['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', dt$_), sp7ng['EnvConfig']['resMgrLoad'](dt$_, (zvlbk4, f5jr83, guhns7) => {
        gp2ae['prototype']['resMgrLoadCallBack'](zvlbk4, f5jr83, guhns7, n67sh);
      }, t_$0xd, enpsg, j51rm, f8a3w, ieun);
    }, v4zyl['resMgrLoadCallBack'] = function (zlk, zb6hk9, bvz4l, w8f3a) {
      console['log']('buff:::', zlk, bvz4l, i2wa['fileNativeDir'] + '///' + i2wa['fileListName']), w8f3a(zlk, zb6hk9, bvz4l);
    }, v4zyl['clearRes'] = function (z49kb6, vy4$0l) {
      vy4$0l === void 0x0 && (vy4$0l = ![]);var dt0x$_ = this;dt0x$_['clearRes'](z49kb6, vy4$0l);var nsugp7 = i2wa['getFileInfo'](z49kb6);if (nsugp7 && (z49kb6['indexOf']('http://') != -0x1 || z49kb6['indexOf']('https://') != -0x1)) {
        var pi2gea = nsugp7['md5'],
            pg7nsu = i2wa['getFileNativePath'](pi2gea);i2wa['remove'](pg7nsu);
      }
    }, gp2ae['onReadNativeCallBack'] = function (i2ewp, epinu, shnu67, pensgu, m51jor, iwe2ap, nipgue, a82i3w, a2piw) {
      pensgu === void 0x0 && (pensgu = !![]), iwe2ap === void 0x0 && (iwe2ap = ![]), a82i3w === void 0x0 && (a82i3w = 0x0);if (!a82i3w) {
        var npi;if (shnu67 == 'json' || shnu67 == 'atlas') npi = sp7ng['getJson'](a2piw['data']);else shnu67 == 'xml' ? npi = l$yvt['parseXMLFromString'](a2piw['data']) : npi = a2piw['data'];nipgue['onLoaded'](npi), !sp7ng['isZiYu'] && sp7ng['isPosMsgYu'] && shnu67 != 'arraybuffer' && wx['postMessage']({ 'url': epinu, 'data': npi, 'isLoad': !![] });
      } else a82i3w == 0x1 && sp7ng['EnvConfig']['load']['call'](nipgue, epinu, shnu67, pensgu, m51jor, iwe2ap);
    }, z0yl4(gp2ae, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), gp2ae;
  }(),
      i2wa = function (ei3) {
    function z9hkb6() {
      z9hkb6['__super']['call'](this);;
    }return zk9lb4(z9hkb6, 'laya.wx.mini.MiniFileMgr', ei3), z9hkb6['isLoadFile'] = function (zvlb4k) {
      return z9hkb6['_fileTypeArr']['indexOf'](zvlb4k) != -0x1 ? !![] : ![];
    }, z9hkb6['getFileInfo'] = function (y0$lv) {
      var uhsn7 = y0$lv['split']('?')[0x0],
          sh76k = z9hkb6['filesListObj'][uhsn7];if (sh76k == null) return null;else return sh76k;return null;
    }, z9hkb6['onFileUpdate'] = function (blyv4, nsgh7) {
      var y0t = blyv4['split']('/'),
          nhs7g = y0t[y0t['length'] - 0x1],
          xd0_t$ = z9hkb6['getFileInfo'](nsgh7);if (xd0_t$ == null) z9hkb6['onSaveFile'](nsgh7, nhs7g);else {
        if (xd0_t$['readyUrl'] != nsgh7) z9hkb6['remove'](nhs7g, nsgh7);
      }
    }, z9hkb6['exits'] = function (txd_$0, aeip2) {
      var qd_$xt = z9hkb6['getFileNativePath'](txd_$0);z9hkb6['fs']['getFileInfo']({ 'filePath': qd_$xt, 'success': function (wr83fa) {
          aeip2 != null && aeip2['runWith']([0x0, wr83fa]);
        }, 'fail': function (j8f35r) {
          aeip2 != null && aeip2['runWith']([0x1, j8f35r]);
        } });
    }, z9hkb6['read'] = function (xy_t, kz9b4, d$0, l$04) {
      kz9b4 === void 0x0 && (kz9b4 = 'ascill'), l$04 === void 0x0 && (l$04 = '');var ae2piw;l$04 != '' ? ae2piw = z9hkb6['getFileNativePath'](xy_t) : ae2piw = xy_t, z9hkb6['fs']['readFile']({ 'filePath': ae2piw, 'encoding': kz9b4, 'success': function (z9k4bl) {
          d$0 != null && d$0['runWith']([0x0, z9k4bl]);
        }, 'fail': function (ytx0v) {
          if (ytx0v && l$04 != '') z9hkb6['down'](l$04, kz9b4, d$0, l$04);else d$0 != null && d$0['runWith']([0x1]);
        } });
    }, z9hkb6['readNativeFile'] = function (ng7pus, np7su) {
      z9hkb6['fs']['readFile']({ 'filePath': ng7pus, 'encoding': '', 'success': function (w3ra8) {
          np7su != null && np7su['runWith']([0x0]);
        }, 'fail': function (ew2pai) {
          np7su != null && np7su['runWith']([0x1]);
        } });
    }, z9hkb6['down'] = function (epiu2g, gpusn7, h69s, puign) {
      gpusn7 === void 0x0 && (gpusn7 = 'ascill'), puign === void 0x0 && (puign = '');var tvly0 = z9hkb6['getFileNativePath'](puign),
          eiung = z9hkb6['wxdown']({ 'url': epiu2g, 'filePath': tvly0, 'success': function (tlv$0) {
          if (tlv$0['statusCode'] === 0xc8) z9hkb6['readFile'](tlv$0['filePath'], gpusn7, h69s, puign);
        }, 'fail': function (vl4kzb) {
          h69s != null && h69s['runWith']([0x1, vl4kzb]);
        } });eiung['onProgressUpdate'](function (ojr51) {
        h69s != null && h69s['runWith']([0x2, ojr51['progress']]);
      });
    }, z9hkb6['readFile'] = function (y0$tv, vtyx$0, j8r3, k94z6) {
      vtyx$0 === void 0x0 && (vtyx$0 = 'ascill'), k94z6 === void 0x0 && (k94z6 = ''), z9hkb6['fs']['readFile']({ 'filePath': y0$tv, 'encoding': vtyx$0, 'success': function (wae2p) {
          if (y0$tv['indexOf']('http://') != -0x1 || y0$tv['indexOf']('https://') != -0x1) z9hkb6['onFileUpdate'](y0$tv, k94z6);j8r3 != null && j8r3['runWith']([0x0, wae2p]);
        }, 'fail': function (j1r5mf) {
          if (j1r5mf) j8r3 != null && j8r3['runWith']([0x1, j1r5mf]);
        } });
    }, z9hkb6['downImg'] = function (td_0, l4z0, vb4lzy) {
      vb4lzy === void 0x0 && (vb4lzy = '');var ngsuh = z9hkb6['wxdown']({ 'url': td_0, 'success': function (jr35f8) {
          jr35f8['statusCode'] === 0xc8 && z9hkb6['copyFile'](jr35f8['tempFilePath'], vb4lzy, l4z0);
        }, 'fail': function (uniepg) {
          l4z0 != null && l4z0['runWith']([0x1, uniepg]);
        } });
    }, z9hkb6['copyFile'] = function (z9k6, hkbz6, zylvb4) {
      var gusnh7 = z9k6['split']('/'),
          tdx$q_ = gusnh7[gusnh7['length'] - 0x1],
          yx0t = hkbz6['split']('?')[0x0],
          j81rf = z9hkb6['getFileInfo'](hkbz6),
          b6zh9k = z9hkb6['getFileNativePath'](tdx$q_);z9hkb6['fs']['copyFile']({ 'srcPath': z9k6, 'destPath': b6zh9k, 'success': function (w2e3) {
          if (!j81rf) z9hkb6['onSaveFile'](hkbz6, tdx$q_), zylvb4 != null && zylvb4['runWith']([0x0]);else {
            if (j81rf['readyUrl'] != hkbz6) z9hkb6['remove'](tdx$q_, hkbz6, zylvb4);
          }
        }, 'fail': function (k49bz) {
          zylvb4 != null && zylvb4['runWith']([0x1, k49bz]);
        } });
    }, z9hkb6['getFileNativePath'] = function (jmf1) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + jmf1;
    }, z9hkb6['remove'] = function (_tdxq, o1r, k7sh69) {
      o1r === void 0x0 && (o1r = '');var f85jr3 = z9hkb6['getFileInfo'](o1r),
          yblv = z9hkb6['getFileNativePath'](f85jr3['md5']);_x$t0['loader']['clearRes'](f85jr3['readyUrl']), z9hkb6['fs']['unlink']({ 'filePath': yblv, 'success': function (dx0$_) {
          if (o1r != '') z9hkb6['onSaveFile'](o1r, _tdxq);k7sh69 != null && k7sh69['runWith']([0x0]);
        }, 'fail': function (rf385j) {} });
    }, z9hkb6['onSaveFile'] = function (w3r8f, y0lz) {
      var eniu = w3r8f['split']('?')[0x0];z9hkb6['filesListObj'][eniu] = { 'md5': y0lz, 'readyUrl': w3r8f }, z9hkb6['fs']['writeFile']({ 'filePath': z9hkb6['fileNativeDir'] + '/' + z9hkb6['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](z9hkb6['filesListObj']), 'success': function (t_0$x) {
          console['log']('写入测试测试成功：', t_0$x);
        }, 'fail': function (bh796) {
          console['log']('写入测试测试失败：', bh796);
        } });
    }, z9hkb6['existDir'] = function (wi328, x$0t_y) {
      z9hkb6['fs']['mkdir']({ 'dirPath': wi328, 'success': function (af3w8r) {
          x$0t_y != null && x$0t_y['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (mr1o5j) {
          if (mr1o5j['errMsg']['indexOf']('file already exists') != -0x1) z9hkb6['readSync'](z9hkb6['fileListName'], 'utf8', x$0t_y);else x$0t_y != null && x$0t_y['runWith']([0x1, mr1o5j]);
        } });
    }, z9hkb6['readSync'] = function (xt_0$y, a8fwr3, r83j5f, paei2w) {
      a8fwr3 === void 0x0 && (a8fwr3 = 'ascill'), paei2w === void 0x0 && (paei2w = '');var v4y0$ = z9hkb6['getFileNativePath'](xt_0$y),
          yxtv0;try {
        yxtv0 = z9hkb6['fs']['readFileSync'](v4y0$), r83j5f != null && r83j5f['runWith']([0x0, { 'data': yxtv0 }]);
      } catch (gesupn) {
        r83j5f != null && r83j5f['runWith']([0x1]);
      }
    }, z9hkb6['readCache'] = function () {}, z9hkb6['writeCache'] = function (z64k9b) {
      var $dqt_ = readyUrl['split']('?')[0x0];z9hkb6['filesListObj'][$dqt_] = { 'md5': md5Name, 'readyUrl': readyUrl }, z9hkb6['fs']['writeFile']({ 'filePath': z9hkb6['fileNativeDir'] + '/' + z9hkb6['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](z9hkb6['filesListObj']), 'success': function (l$v04y) {}, 'fail': function (nhu7s6) {} });
    }, z9hkb6['setNativeFileDir'] = function (k7b6) {
      z9hkb6['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + k7b6;
    }, z9hkb6['filesListObj'] = {}, z9hkb6['fileNativeDir'] = null, z9hkb6['fileListName'] = 'layaairfiles.txt', z9hkb6['ziyuFileData'] = {}, z0yl4(z9hkb6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), z9hkb6;
  }(y0vx),
      l$y0 = function (puie) {
    function $d_x0() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], $d_x0['__super']['call'](this), this['_sound'] = $d_x0['_createSound']();
    }zk9lb4($d_x0, 'laya.wx.mini.MiniSound', puie);var uns7gh = $d_x0['prototype'];return uns7gh['load'] = function (apew) {
      var ap2ge = this;apew = zlvby4['formatURL'](apew), this['url'] = apew;if ($d_x0['_audioCache'][apew]) {
        this['event']('complete');return;
      }function w83fr() {
        if ($d_x0['_null'] != undefined) ap2ge['_sound']['onCanplay']($d_x0['_null']), ap2ge['_sound']['onError']($d_x0['_null']);else try {
          ap2ge['_sound']['onCanplay'](null), ap2ge['_sound']['onError'](null), $d_x0['_null'] = null;
        } catch (f53wr) {
          console['warn']('[wxmini] _clearSound:' + f53wr), ap2ge['_sound']['onCanplay']($y0_tx), ap2ge['_sound']['onError']($y0_tx), $d_x0['_null'] = $y0_tx;
        }
      }function k4b9l() {
        w83fr(), epni['loaded'] = !![], epni['event']('complete'), $d_x0['_audioCache'][epni['url']] = epni;
      }function k9zh6b(y0v$tl) {
        console['error']('errCode=' + y0v$tl['errCode'] + '  errMsg=' + y0v$tl['errMsg']), w83fr(), epni['event']('error');
      }function $y0_tx() {}this['_sound']['onCanplay'](k4b9l), this['_sound']['onError'](k9zh6b), this['_sound']['src'] = apew;var epni = this;
    }, uns7gh['play'] = function (n7hgs, s7nguh) {
      n7hgs === void 0x0 && (n7hgs = 0x0), s7nguh === void 0x0 && (s7nguh = 0x0);var f3w85r;if (this['url'] == u7gsn['_tMusic']) {
        if (!$d_x0['_musicAudio']) $d_x0['_musicAudio'] = $d_x0['_createSound']();f3w85r = $d_x0['_musicAudio'];
      } else f3w85r = $d_x0['_createSound']();f3w85r['src'] = this['url'];var $vl40y = new gapie(f3w85r);return $vl40y['url'] = this['url'], $vl40y['loops'] = s7nguh, $vl40y['startTime'] = n7hgs, $vl40y['play'](), u7gsn['addChannel']($vl40y), $vl40y;
    }, uns7gh['dispose'] = function () {
      var h67k9s = $d_x0['_audioCache'][this['url']];h67k9s && (h67k9s['src'] = '', delete $d_x0['_audioCache'][this['url']]);
    }, g7puns(0x0, uns7gh, 'duration', function () {
      return this['_sound']['duration'];
    }), $d_x0['_createSound'] = function () {
      return $d_x0['_id']++, sp7ng['window']['wx']['createInnerAudioContext']();
    }, $d_x0['_musicAudio'] = null, $d_x0['_id'] = 0x0, $d_x0['_audioCache'] = {}, $d_x0['_null'] = undefined, $d_x0;
  }(y0vx),
      gapie = function (genpsu) {
    function yl$0tv(y0x$) {
      this['_audio'] = null, this['_onEnd'] = null, yl$0tv['__super']['call'](this), this['_audio'] = y0x$, this['_onEnd'] = l$yvt['bind'](this['__onEnd'], this), y0x$['onEnded'](this['_onEnd']);
    }zk9lb4(yl$0tv, 'laya.wx.mini.MiniSoundChannel', genpsu);var k796 = yl$0tv['prototype'];return k796['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (_x$t0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, k796['__onNull'] = function () {}, k796['play'] = function () {
      this['isStopped'] = ![], u7gsn['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, k796['stop'] = function () {
      this['isStopped'] = !![], u7gsn['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (yl$0tv['_null'] != undefined) this['_audio']['onEnded'](yl$0tv['_null']);else try {
        this['_audio']['onEnded'](null), yl$0tv['_null'] = null;
      } catch (ugsp) {
        console['warn']('[wxmini] stop:' + ugsp), this['_audio']['onEnded'](l$yvt['bind'](this['__onNull'], this)), yl$0tv['_null'] = l$yvt['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, k796['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, k796['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], u7gsn['addChannel'](this), this['_audio']['play']();
    }, g7puns(0x0, k796, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), g7puns(0x0, k796, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), g7puns(0x0, k796, 'volume', function () {
      return 0x1;
    }, function (i328w) {}), yl$0tv['_null'] = undefined, yl$0tv;
  }(apige2);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var sh7ug in Laya) {
    var aegi = Laya[sh7ug];aegi && aegi['__isclass'] && (exports[sh7ug] = aegi);
  }
});