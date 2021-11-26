var u = wx.$x;
(function (window, document, ujd) {
  var omi4x = ujd['un'],
      zsm2 = ujd['uns'],
      paqr_ = ujd['static'],
      k0ehwb = ujd['class'],
      hwb0k = ujd['getset'],
      sxz5 = ujd['__newvec'],
      fuj9cn = laya['utils']['Browser'],
      mo4xis = laya['events']['Event'],
      l9y78f = laya['events']['EventDispatcher'],
      phaeq_ = laya['resource']['HTMLImage'],
      jcvfnu = laya['utils']['Handler'],
      mo26z5 = laya['display']['Input'],
      l97jfc = laya['net']['Loader'],
      dx4isg = laya['maths']['Matrix'],
      t56oz = laya['renders']['Render'],
      jcnfu = laya['utils']['RunDriver'],
      dvix = laya['media']['Sound'],
      juncfv = laya['media']['SoundChannel'],
      cfu9j = laya['media']['SoundManager'],
      aqphr_ = laya['display']['Stage'],
      f897lc = laya['net']['URL'],
      nvdguj = laya['utils']['Utils'],
      haqp_e = function () {
    function vngu() {}return k0ehwb(vngu, 'laya.wx.mini.MiniAdpter'), vngu['getJson'] = function (zso) {
      return JSON['parse'](zso);
    }, vngu['init'] = function (ucvdnj, l9cfj7) {
      ucvdnj === void 0x0 && (ucvdnj = ![]), l9cfj7 === void 0x0 && (l9cfj7 = ![]);if (vngu['_inited']) return;vngu['window'] = window;if (vngu['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;vngu['_inited'] = !![], vngu['isZiYu'] = l9cfj7, vngu['isPosMsgYu'] = ucvdnj, vngu['EnvConfig'] = {}, !vngu['isZiYu'] && (ix4om['setNativeFileDir']('/layaairGame'), ix4om['existDir'](ix4om['fileNativeDir'], jcvfnu['create'](vngu, vngu['onMkdirCallBack']))), vngu['window']['focus'] = function () {}, ujd['getUrlPath'] = function () {}, vngu['window']['logtime'] = function (_ahqp) {}, vngu['window']['alertTimeLog'] = function (khb0ep) {}, vngu['window']['resetShareInfo'] = function () {}, vngu['window']['CanvasRenderingContext2D'] = function () {}, vngu['window']['CanvasRenderingContext2D']['prototype'] = vngu['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], vngu['window']['document']['body']['appendChild'] = function () {}, vngu['EnvConfig']['pixelRatioInt'] = 0x0, jcnfu['getPixelRatio'] = vngu['pixelRatio'], vngu['_preCreateElement'] = fuj9cn['createElement'], fuj9cn['createElement'] = vngu['createElement'], jcnfu['createShaderCondition'] = vngu['createShaderCondition'], nvdguj['parseXMLFromString'] = vngu['parseXMLFromString'], mo26z5['_createInputElement'] = dgu4vn['_createInputElement'], vngu['EnvConfig']['load'] = l97jfc['prototype']['load'], l97jfc['prototype']['load'] = unvcjd['prototype']['load'], vngu['isZiYu'] && ucvdnj && wx['onMessage'](function (dnugj) {
        dnugj['isLoad'] && (ix4om['ziyuFileData'][dnugj['url']] = dnugj['data']);
      });
    }, vngu['onMkdirCallBack'] = function (wk31tb, h_arp) {
      if (!wk31tb) ix4om['filesListObj'] = JSON['parse'](h_arp['data']);
    }, vngu['pixelRatio'] = function () {
      if (!vngu['EnvConfig']['pixelRatioInt']) try {
        var b0pae = wx['getSystemInfoSync']();return vngu['EnvConfig']['pixelRatioInt'] = b0pae['pixelRatio'], b0pae = b0pae, b0pae['pixelRatio'];
      } catch (ar_q) {}return vngu['EnvConfig']['pixelRatioInt'];
    }, vngu['createElement'] = function (mz652o) {
      if (mz652o == 'canvas') {
        var s4dxig;return vngu['idx'] == 0x1 ? vngu['isZiYu'] ? (s4dxig = sharedCanvas, s4dxig['style'] = {}) : s4dxig = window['canvas'] : s4dxig = window['wx']['createCanvas'](), vngu['idx']++, s4dxig;
      } else {
        if (mz652o == 'textarea' || mz652o == 'input') return vngu['onCreateInput'](mz652o);else {
          if (mz652o == 'div') {
            var jfncl = vngu['_preCreateElement'](mz652o);return jfncl['contains'] = function (xg4v) {
              return null;
            }, jfncl['removeChild'] = function (pe0bah) {}, jfncl;
          } else return vngu['_preCreateElement'](mz652o);
        }
      }
    }, vngu['onCreateInput'] = function (ewbk0) {
      var z25t36 = vngu['_preCreateElement'](ewbk0);return z25t36['focus'] = dgu4vn['wxinputFocus'], z25t36['blur'] = dgu4vn['wxinputblur'], z25t36['style'] = {}, z25t36['value'] = 0x0, z25t36['parentElement'] = {}, z25t36['placeholder'] = {}, z25t36['type'] = {}, z25t36['setColor'] = function (gdvujn) {}, z25t36['setType'] = function (phba) {}, z25t36['setFontFace'] = function (aqh0p) {}, z25t36['addEventListener'] = function (o6t52z) {}, z25t36['contains'] = function (osxmiz) {
        return null;
      }, z25t36['removeChild'] = function (cf9j7) {}, z25t36;
    }, vngu['createShaderCondition'] = function (eh0pk) {
      var a0eq = this,
          t1b3w = function () {
        var epaq_ = eh0pk;return a0eq[eh0pk['replace']('this.', '')];
      };return t1b3w;
    }, vngu['EnvConfig'] = null, vngu['window'] = null, vngu['_preCreateElement'] = null, vngu['_inited'] = ![], vngu['wxRequest'] = null, vngu['systemInfo'] = null, vngu['version'] = '0.0.1', vngu['isZiYu'] = ![], vngu['isPosMsgYu'] = ![], vngu['parseXMLFromString'] = function (zso5m2) {
      var f8lc79, q0hep;zso5m2 = zso5m2['replace'](/>\s+</g, '><');try {
        f8lc79 = new window['Parser']['DOMParser']()['parseFromString'](zso5m2, 'text/xml');
      } catch (wt61k3) {
        throw '需要引入xml解析库文件';
      }return f8lc79;
    }, vngu['idx'] = 0x1, vngu;
  }(),
      i4dvg = function () {
    function y987() {}k0ehwb(y987, 'laya.wx.mini.MiniImage');var vdgnu4 = y987['prototype'];return vdgnu4['_loadImage'] = function (fj7cl9) {
      var dvixg = this,
          v4xdig = ![];fj7cl9['indexOf']('layaNativeDir/') == -0x1 && (v4xdig = !![], fj7cl9 = f897lc['formatURL'](fj7cl9));if (!ix4om['getFileInfo'](fj7cl9)) {
        if (fj7cl9['indexOf']('http://') != -0x1 || fj7cl9['indexOf']('https://') != -0x1) ix4om['downImg'](fj7cl9, new jcvfnu(y987, y987['onDownImgCallBack'], [fj7cl9, dvixg]), fj7cl9);else y987['onCreateImage'](fj7cl9, dvixg, !![]);
      } else y987['onCreateImage'](fj7cl9, dvixg, !v4xdig);
    }, y987['onDownImgCallBack'] = function (kehb0w, vcjndu, j7c9l) {
      if (!j7c9l) y987['onCreateImage'](kehb0w, vcjndu);else vcjndu['onError'](null);
    }, y987['onCreateImage'] = function (ivxdg4, hp0qe, c79l) {
      c79l === void 0x0 && (c79l = ![]);var epqh0a;if (!c79l) {
        var aeq_p = ix4om['getFileInfo'](ivxdg4),
            xdi4gv = aeq_p['md5'];epqh0a = ix4om['getFileNativePath'](xdi4gv);
      } else epqh0a = ivxdg4;if (hp0qe['imgCache'] == null) hp0qe['imgCache'] = {};var oxmis;function ebh0() {
        oxmis['onload'] = null, oxmis['onerror'] = null, delete hp0qe['imgCache'][ivxdg4];
      };var w6kt13 = function () {
        ebh0(), hp0qe['onLoaded'](oxmis);
      },
          msxz5 = function () {
        ebh0(), hp0qe['event']('error', 'Load image failed');
      };hp0qe['_type'] == 'nativeimage' ? (oxmis = new fuj9cn['window']['Image'](), oxmis['crossOrigin'] = '', oxmis['onload'] = w6kt13, oxmis['onerror'] = msxz5, oxmis['src'] = epqh0a, hp0qe['imgCache'][ivxdg4] = oxmis) : new phaeq_['create'](epqh0a, { 'onload': w6kt13, 'onerror': msxz5, 'onCreate': function (vgdunj) {
          oxmis = vgdunj, hp0qe['imgCache'][ivxdg4] = vgdunj;
        } });
    }, y987;
  }(),
      dgu4vn = function () {
    function vudgn4() {}return k0ehwb(vudgn4, 'laya.wx.mini.MiniInput'), vudgn4['_createInputElement'] = function () {
      mo26z5['_initInput'](mo26z5['area'] = fuj9cn['createElement']('textarea')), mo26z5['_initInput'](mo26z5['input'] = fuj9cn['createElement']('input')), mo26z5['inputContainer'] = fuj9cn['createElement']('div'), mo26z5['inputContainer']['style']['position'] = 'absolute', mo26z5['inputContainer']['style']['zIndex'] = 0x186a0, fuj9cn['container']['appendChild'](mo26z5['inputContainer']), mo26z5['inputContainer']['setPos'] = function (bhe0wk, sxg4d) {
        mo26z5['inputContainer']['style']['left'] = bhe0wk + 'px', mo26z5['inputContainer']['style']['top'] = sxg4d + 'px';
      }, ujd['stage']['on']('resize', null, vudgn4['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hpqa_r) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), cfu9j['_soundClass'] = t1k36, cfu9j['_musicClass'] = t1k36;
    }, vudgn4['_onStageResize'] = function () {
      var s4 = ujd['stage']['_canvasTransform']['identity']();s4['scale'](fuj9cn['width'] / t56oz['canvas']['width'] / jcnfu['getPixelRatio'](), fuj9cn['height'] / t56oz['canvas']['height'] / jcnfu['getPixelRatio']());
    }, vudgn4['wxinputFocus'] = function (vud4ng) {
      var t3kbw1 = mo26z5['inputElement']['target'];if (t3kbw1 && !t3kbw1['editable']) return;haqp_e['window']['wx']['offKeyboardConfirm'](), haqp_e['window']['wx']['offKeyboardInput'](), haqp_e['window']['wx']['showKeyboard']({ 'defaultValue': t3kbw1['text'], 'maxLength': t3kbw1['maxChars'], 'multiple': t3kbw1['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (uidg) {}, 'fail': function (fjl79) {} }), haqp_e['window']['wx']['onKeyboardConfirm'](function (z26om5) {
        var dung4 = z26om5 ? z26om5['value'] : '';t3kbw1['text'] = dung4, t3kbw1['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), haqp_e['window']['wx']['onKeyboardInput'](function (t3z26) {
        var vngj = t3z26 ? t3z26['value'] : '';if (!t3kbw1['multiline']) {
          if (vngj['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }t3kbw1['text'] = vngj, t3kbw1['event']('input');
      });
    }, vudgn4['inputEnter'] = function () {
      mo26z5['inputElement']['target']['focus'] = ![];
    }, vudgn4['wxinputblur'] = function () {
      vudgn4['hideKeyboard']();
    }, vudgn4['hideKeyboard'] = function () {
      haqp_e['window']['wx']['offKeyboardConfirm'](), haqp_e['window']['wx']['offKeyboardInput'](), haqp_e['window']['wx']['hideKeyboard']({ 'success': function (f8y9l) {
          console['log']('隐藏键盘');
        }, 'fail': function (n9fc) {
          console['log']('隐藏键盘出错:' + (n9fc ? n9fc['errMsg'] : ''));
        } });
    }, vudgn4;
  }(),
      unvcjd = function () {
    function g4dviu() {}k0ehwb(g4dviu, 'laya.wx.mini.MiniLoader');var sizmo = g4dviu['prototype'];return sizmo['load'] = function (gdjvn, jf9cun, q_hp, xs4io, ncuj) {
      q_hp === void 0x0 && (q_hp = !![]), ncuj === void 0x0 && (ncuj = ![]);var pa_qhe = this;pa_qhe['_url'] = gdjvn;if (gdjvn['indexOf']('data:image') === 0x0) pa_qhe['_type'] = jf9cun = 'image';else pa_qhe['_type'] = jf9cun || (jf9cun = pa_qhe['getTypeFromUrl'](gdjvn));pa_qhe['_cache'] = q_hp, pa_qhe['_data'] = null;var dn4ugv = 'ascii';if (gdjvn['indexOf']('.fnt') != -0x1) dn4ugv = 'utf8';else jf9cun == 'arraybuffer' && (dn4ugv = '');;var zt2365 = nvdguj['getFileExtension'](gdjvn);if (g4dviu['_fileTypeArr']['indexOf'](zt2365) != -0x1) haqp_e['EnvConfig']['load']['call'](this, gdjvn, jf9cun, q_hp, xs4io, ncuj);else {
        if (!ix4om['getFileInfo'](gdjvn)) {
          if (gdjvn['indexOf']('layaNativeDir/') != -0x1) {
            if (haqp_e['isZiYu']) {
              var zxsmoi = ix4om['ziyuFileData'][gdjvn];pa_qhe['onLoaded'](zxsmoi);return;
            } else {
              cosnole['log']('read read'), ix4om['read'](gdjvn, dn4ugv, new jcvfnu(g4dviu, g4dviu['onReadNativeCallBack'], [dn4ugv, gdjvn, jf9cun, q_hp, xs4io, ncuj, pa_qhe]));return;
            }
          }if (f897lc['rootPath'] == '') var udvg4i = gdjvn;else udvg4i = gdjvn['split'](f897lc['rootPath'])[0x0];gdjvn['indexOf']('http://') != -0x1 || gdjvn['indexOf']('https://') != -0x1 ? haqp_e['EnvConfig']['load']['call'](pa_qhe, gdjvn, jf9cun, q_hp, xs4io, ncuj) : ix4om['readFile'](udvg4i, dn4ugv, new jcvfnu(g4dviu, g4dviu['onReadNativeCallBack'], [dn4ugv, gdjvn, jf9cun, q_hp, xs4io, ncuj, pa_qhe]), gdjvn);
        } else haqp_e['EnvConfig']['load']['call'](this, gdjvn, jf9cun, q_hp, xs4io, ncuj);
      }
    }, sizmo['resMgrLoad'] = function (cdvnju, osm5x, we0bh, o6t25z, ximo4, izxmso, i4m) {
      we0bh === void 0x0 && (we0bh = 0x0), o6t25z === void 0x0 && (o6t25z = ![]), ximo4 === void 0x0 && (ximo4 = ![]), izxmso === void 0x0 && (izxmso = 0x0), i4m === void 0x0 && (i4m = 0x3), cdvnju['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', cdvnju), haqp_e['EnvConfig']['resMgrLoad'](cdvnju, (sz52om, ndguj, hqa_ep) => {
        g4dviu['prototype']['resMgrLoadCallBack'](sz52om, ndguj, hqa_ep, osm5x);
      }, we0bh, o6t25z, ximo4, izxmso, i4m);
    }, sizmo['resMgrLoadCallBack'] = function (zt6o25, kphe, fl7y8, ms4gx) {
      console['log']('buff:::', zt6o25, fl7y8, ix4om['fileNativeDir'] + '///' + ix4om['fileListName']), ms4gx(zt6o25, kphe, fl7y8);
    }, sizmo['clearRes'] = function (mxo4s, cjn9f) {
      cjn9f === void 0x0 && (cjn9f = ![]);var z5o = this;z5o['clearRes'](mxo4s, cjn9f);var xmzs = ix4om['getFileInfo'](mxo4s);if (xmzs && (mxo4s['indexOf']('http://') != -0x1 || mxo4s['indexOf']('https://') != -0x1)) {
        var lcnfj9 = xmzs['md5'],
            w3t16k = ix4om['getFileNativePath'](lcnfj9);ix4om['remove'](w3t16k);
      }
    }, g4dviu['onReadNativeCallBack'] = function (o6z52t, vjcudn, guvi, hb0kpe, f7y98l, igv4dx, bkehp, ivdg4, he0kb) {
      hb0kpe === void 0x0 && (hb0kpe = !![]), igv4dx === void 0x0 && (igv4dx = ![]), ivdg4 === void 0x0 && (ivdg4 = 0x0);if (!ivdg4) {
        var kb0ph;if (guvi == 'json' || guvi == 'atlas') kb0ph = haqp_e['getJson'](he0kb['data']);else guvi == 'xml' ? kb0ph = nvdguj['parseXMLFromString'](he0kb['data']) : kb0ph = he0kb['data'];bkehp['onLoaded'](kb0ph), !haqp_e['isZiYu'] && haqp_e['isPosMsgYu'] && guvi != 'arraybuffer' && wx['postMessage']({ 'url': vjcudn, 'data': kb0ph, 'isLoad': !![] });
      } else ivdg4 == 0x1 && haqp_e['EnvConfig']['load']['call'](bkehp, vjcudn, guvi, hb0kpe, f7y98l, igv4dx);
    }, paqr_(g4dviu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), g4dviu;
  }(),
      ix4om = function (t26153) {
    function ahb0() {
      ahb0['__super']['call'](this);;
    }return k0ehwb(ahb0, 'laya.wx.mini.MiniFileMgr', t26153), ahb0['isLoadFile'] = function (oxim) {
      return ahb0['_fileTypeArr']['indexOf'](oxim) != -0x1 ? !![] : ![];
    }, ahb0['getFileInfo'] = function (vdcun) {
      var dvucjn = vdcun['split']('?')[0x0],
          s2zom5 = ahb0['filesListObj'][dvucjn];if (s2zom5 == null) return null;else return s2zom5;return null;
    }, ahb0['onFileUpdate'] = function (wbeh, eh0qa) {
      var c87lf9 = wbeh['split']('/'),
          k0b1ew = c87lf9[c87lf9['length'] - 0x1],
          whe0b = ahb0['getFileInfo'](eh0qa);if (whe0b == null) ahb0['onSaveFile'](eh0qa, k0b1ew);else {
        if (whe0b['readyUrl'] != eh0qa) ahb0['remove'](k0b1ew, eh0qa);
      }
    }, ahb0['exits'] = function (z56, $8l7y) {
      var fl9y = ahb0['getFileNativePath'](z56);ahb0['fs']['getFileInfo']({ 'filePath': fl9y, 'success': function (u9jcn) {
          $8l7y != null && $8l7y['runWith']([0x0, u9jcn]);
        }, 'fail': function (w1t3k) {
          $8l7y != null && $8l7y['runWith']([0x1, w1t3k]);
        } });
    }, ahb0['read'] = function (n9jfcl, cj9un, bkp0h, xsmio) {
      cj9un === void 0x0 && (cj9un = 'ascill'), xsmio === void 0x0 && (xsmio = '');var s5mzx;xsmio != '' ? s5mzx = ahb0['getFileNativePath'](n9jfcl) : s5mzx = n9jfcl, ahb0['fs']['readFile']({ 'filePath': s5mzx, 'encoding': cj9un, 'success': function (hekpb0) {
          bkp0h != null && bkp0h['runWith']([0x0, hekpb0]);
        }, 'fail': function (sxigd4) {
          if (sxigd4 && xsmio != '') ahb0['down'](xsmio, cj9un, bkp0h, xsmio);else bkp0h != null && bkp0h['runWith']([0x1]);
        } });
    }, ahb0['readNativeFile'] = function (vdngu4, sxom4) {
      ahb0['fs']['readFile']({ 'filePath': vdngu4, 'encoding': '', 'success': function (xgvd) {
          sxom4 != null && sxom4['runWith']([0x0]);
        }, 'fail': function (cf79l8) {
          sxom4 != null && sxom4['runWith']([0x1]);
        } });
    }, ahb0['down'] = function (ozmsx5, jfcun9, wk0b1, e0kb) {
      jfcun9 === void 0x0 && (jfcun9 = 'ascill'), e0kb === void 0x0 && (e0kb = '');var bpkh0e = ahb0['getFileNativePath'](e0kb),
          nuvcf = ahb0['wxdown']({ 'url': ozmsx5, 'filePath': bpkh0e, 'success': function (hbkpe) {
          if (hbkpe['statusCode'] === 0xc8) ahb0['readFile'](hbkpe['filePath'], jfcun9, wk0b1, e0kb);
        }, 'fail': function (jf9ncu) {
          wk0b1 != null && wk0b1['runWith']([0x1, jf9ncu]);
        } });nuvcf['onProgressUpdate'](function (is4o) {
        wk0b1 != null && wk0b1['runWith']([0x2, is4o['progress']]);
      });
    }, ahb0['readFile'] = function (vig, qpa0eh, pekb, vi4gd) {
      qpa0eh === void 0x0 && (qpa0eh = 'ascill'), vi4gd === void 0x0 && (vi4gd = ''), ahb0['fs']['readFile']({ 'filePath': vig, 'encoding': qpa0eh, 'success': function (p0ekh) {
          if (vig['indexOf']('http://') != -0x1 || vig['indexOf']('https://') != -0x1) ahb0['onFileUpdate'](vig, vi4gd);pekb != null && pekb['runWith']([0x0, p0ekh]);
        }, 'fail': function (_haqr) {
          if (_haqr) pekb != null && pekb['runWith']([0x1, _haqr]);
        } });
    }, ahb0['downImg'] = function (om5z2, qe_pah, cl7f98) {
      cl7f98 === void 0x0 && (cl7f98 = '');var m6o5z = ahb0['wxdown']({ 'url': om5z2, 'success': function (i4oxs) {
          i4oxs['statusCode'] === 0xc8 && ahb0['copyFile'](i4oxs['tempFilePath'], cl7f98, qe_pah);
        }, 'fail': function (z2mso) {
          qe_pah != null && qe_pah['runWith']([0x1, z2mso]);
        } });
    }, ahb0['copyFile'] = function (e10wk, c78l9f, ivgx) {
      var s2ozm = e10wk['split']('/'),
          dnvuc = s2ozm[s2ozm['length'] - 0x1],
          jdvu = c78l9f['split']('?')[0x0],
          kb1wt3 = ahb0['getFileInfo'](c78l9f),
          z32t = ahb0['getFileNativePath'](dnvuc);ahb0['fs']['copyFile']({ 'srcPath': e10wk, 'destPath': z32t, 'success': function (ms4oi) {
          if (!kb1wt3) ahb0['onSaveFile'](c78l9f, dnvuc), ivgx != null && ivgx['runWith']([0x0]);else {
            if (kb1wt3['readyUrl'] != c78l9f) ahb0['remove'](dnvuc, c78l9f, ivgx);
          }
        }, 'fail': function (ncdu) {
          ivgx != null && ivgx['runWith']([0x1, ncdu]);
        } });
    }, ahb0['getFileNativePath'] = function (ix4so) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ix4so;
    }, ahb0['remove'] = function (haq_pr, dg4xiv, z5smxo) {
      dg4xiv === void 0x0 && (dg4xiv = '');var xmsg4 = ahb0['getFileInfo'](dg4xiv),
          f7c9 = ahb0['getFileNativePath'](xmsg4['md5']);ujd['loader']['clearRes'](xmsg4['readyUrl']), ahb0['fs']['unlink']({ 'filePath': f7c9, 'success': function (zo2ms5) {
          if (dg4xiv != '') ahb0['onSaveFile'](dg4xiv, haq_pr);z5smxo != null && z5smxo['runWith']([0x0]);
        }, 'fail': function (_qrpah) {} });
    }, ahb0['onSaveFile'] = function (c9lfjn, nufc9) {
      var ph0kbe = c9lfjn['split']('?')[0x0];ahb0['filesListObj'][ph0kbe] = { 'md5': nufc9, 'readyUrl': c9lfjn }, ahb0['fs']['writeFile']({ 'filePath': ahb0['fileNativeDir'] + '/' + ahb0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ahb0['filesListObj']), 'success': function (s52oz) {
          console['log']('写入测试测试成功：', s52oz);
        }, 'fail': function (c97lf8) {
          console['log']('写入测试测试失败：', c97lf8);
        } });
    }, ahb0['existDir'] = function (t361w2, p_heqa) {
      ahb0['fs']['mkdir']({ 'dirPath': t361w2, 'success': function (iox4sm) {
          p_heqa != null && p_heqa['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (e0bhkw) {
          if (e0bhkw['errMsg']['indexOf']('file already exists') != -0x1) ahb0['readSync'](ahb0['fileListName'], 'utf8', p_heqa);else p_heqa != null && p_heqa['runWith']([0x1, e0bhkw]);
        } });
    }, ahb0['readSync'] = function (t5326, j9ln, szom5, jlf9c) {
      j9ln === void 0x0 && (j9ln = 'ascill'), jlf9c === void 0x0 && (jlf9c = '');var fj7 = ahb0['getFileNativePath'](t5326),
          zmsxo;try {
        zmsxo = ahb0['fs']['readFileSync'](fj7), szom5 != null && szom5['runWith']([0x0, { 'data': zmsxo }]);
      } catch (du4gn) {
        szom5 != null && szom5['runWith']([0x1]);
      }
    }, ahb0['readCache'] = function () {}, ahb0['writeCache'] = function (qhpea_) {
      var q_pah = readyUrl['split']('?')[0x0];ahb0['filesListObj'][q_pah] = { 'md5': md5Name, 'readyUrl': readyUrl }, ahb0['fs']['writeFile']({ 'filePath': ahb0['fileNativeDir'] + '/' + ahb0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ahb0['filesListObj']), 'success': function (mi4xso) {}, 'fail': function (paqe0h) {} });
    }, ahb0['setNativeFileDir'] = function (bhpae0) {
      ahb0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bhpae0;
    }, ahb0['filesListObj'] = {}, ahb0['fileNativeDir'] = null, ahb0['fileListName'] = 'layaairfiles.txt', ahb0['ziyuFileData'] = {}, paqr_(ahb0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ahb0;
  }(l9y78f),
      t1k36 = function (phkb0) {
    function z2t536() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], z2t536['__super']['call'](this), this['_sound'] = z2t536['_createSound']();
    }k0ehwb(z2t536, 'laya.wx.mini.MiniSound', phkb0);var nufc = z2t536['prototype'];return nufc['load'] = function (qahpr_) {
      var idgsx = this;qahpr_ = f897lc['formatURL'](qahpr_), this['url'] = qahpr_;if (z2t536['_audioCache'][qahpr_]) {
        this['event']('complete');return;
      }function p_hqea() {
        if (z2t536['_null'] != undefined) idgsx['_sound']['onCanplay'](z2t536['_null']), idgsx['_sound']['onError'](z2t536['_null']);else try {
          idgsx['_sound']['onCanplay'](null), idgsx['_sound']['onError'](null), z2t536['_null'] = null;
        } catch (sdg) {
          console['warn']('[wxmini] _clearSound:' + sdg), idgsx['_sound']['onCanplay'](xvig4d), idgsx['_sound']['onError'](xvig4d), z2t536['_null'] = xvig4d;
        }
      }function fljn() {
        p_hqea(), cdjn['loaded'] = !![], cdjn['event']('complete'), z2t536['_audioCache'][cdjn['url']] = cdjn;
      }function gd4nuv(uvjfc) {
        console['error']('errCode=' + uvjfc['errCode'] + '  errMsg=' + uvjfc['errMsg']), p_hqea(), cdjn['event']('error');
      }function xvig4d() {}this['_sound']['onCanplay'](fljn), this['_sound']['onError'](gd4nuv), this['_sound']['src'] = qahpr_;var cdjn = this;
    }, nufc['play'] = function (s4moxi, epk0bh) {
      s4moxi === void 0x0 && (s4moxi = 0x0), epk0bh === void 0x0 && (epk0bh = 0x0);var vudjg;if (this['url'] == cfu9j['_tMusic']) {
        if (!z2t536['_musicAudio']) z2t536['_musicAudio'] = z2t536['_createSound']();vudjg = z2t536['_musicAudio'];
      } else vudjg = z2t536['_createSound']();vudjg['src'] = this['url'];var m4io = new m52szo(vudjg);return m4io['url'] = this['url'], m4io['loops'] = epk0bh, m4io['startTime'] = s4moxi, m4io['play'](), cfu9j['addChannel'](m4io), m4io;
    }, nufc['dispose'] = function () {
      var eap_ = z2t536['_audioCache'][this['url']];eap_ && (eap_['src'] = '', delete z2t536['_audioCache'][this['url']]);
    }, hwb0k(0x0, nufc, 'duration', function () {
      return this['_sound']['duration'];
    }), z2t536['_createSound'] = function () {
      return z2t536['_id']++, haqp_e['window']['wx']['createInnerAudioContext']();
    }, z2t536['_musicAudio'] = null, z2t536['_id'] = 0x0, z2t536['_audioCache'] = {}, z2t536['_null'] = undefined, z2t536;
  }(l9y78f),
      m52szo = function (jf9ln) {
    function x4osim(j9nlc) {
      this['_audio'] = null, this['_onEnd'] = null, x4osim['__super']['call'](this), this['_audio'] = j9nlc, this['_onEnd'] = nvdguj['bind'](this['__onEnd'], this), j9nlc['onEnded'](this['_onEnd']);
    }k0ehwb(x4osim, 'laya.wx.mini.MiniSoundChannel', jf9ln);var jnc9l = x4osim['prototype'];return jnc9l['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ujd['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jnc9l['__onNull'] = function () {}, jnc9l['play'] = function () {
      this['isStopped'] = ![], cfu9j['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, jnc9l['stop'] = function () {
      this['isStopped'] = !![], cfu9j['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (x4osim['_null'] != undefined) this['_audio']['onEnded'](x4osim['_null']);else try {
        this['_audio']['onEnded'](null), x4osim['_null'] = null;
      } catch (igv4du) {
        console['warn']('[wxmini] stop:' + igv4du), this['_audio']['onEnded'](nvdguj['bind'](this['__onNull'], this)), x4osim['_null'] = nvdguj['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, jnc9l['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, jnc9l['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], cfu9j['addChannel'](this), this['_audio']['play']();
    }, hwb0k(0x0, jnc9l, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), hwb0k(0x0, jnc9l, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), hwb0k(0x0, jnc9l, 'volume', function () {
      return 0x1;
    }, function (z6t352) {}), x4osim['_null'] = undefined, x4osim;
  }(juncfv);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ae0bh in Laya) {
    var aheqp = Laya[ae0bh];aheqp && aheqp['__isclass'] && (exports[ae0bh] = aheqp);
  }
});