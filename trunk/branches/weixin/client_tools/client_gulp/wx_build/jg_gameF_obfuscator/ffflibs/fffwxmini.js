var k = wx.$f;
(function (window, document, z7r$38) {
  var $3z7 = z7r$38['un'],
      tivfm = z7r$38['uns'],
      z8r$73 = z7r$38['static'],
      ubfim = z7r$38['class'],
      jsnwc = z7r$38['getset'],
      mhfbit = z7r$38['__newvec'],
      j2od = laya['utils']['Browser'],
      jwdns = laya['events']['Event'],
      hbtifm = laya['events']['EventDispatcher'],
      djsnx = laya['resource']['HTMLImage'],
      c6osjd = laya['utils']['Handler'],
      c462o = laya['display']['Input'],
      uib1mv = laya['net']['Loader'],
      yar$3 = laya['maths']['Matrix'],
      doscjw = laya['renders']['Render'],
      q5t0kh = laya['utils']['RunDriver'],
      kh05_ = laya['media']['Sound'],
      xe78r = laya['media']['SoundChannel'],
      qk_540 = laya['media']['SoundManager'],
      r$8z3 = laya['display']['Stage'],
      tf0h5 = laya['net']['URL'],
      ibmft = laya['utils']['Utils'],
      ar$7y = function () {
    function bmfith() {}return ubfim(bmfith, 'laya.wx.mini.MiniAdpter'), bmfith['getJson'] = function (fbhtim) {
      return JSON['parse'](fbhtim);
    }, bmfith['init'] = function (jnxdw, cj6dos) {
      jnxdw === void 0x0 && (jnxdw = ![]), cj6dos === void 0x0 && (cj6dos = ![]);if (bmfith['_inited']) return;bmfith['window'] = window;if (bmfith['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;bmfith['_inited'] = !![], bmfith['isZiYu'] = cj6dos, bmfith['isPosMsgYu'] = jnxdw, bmfith['EnvConfig'] = {}, !bmfith['isZiYu'] && (fihm['setNativeFileDir']('/layaairGame'), fihm['existDir'](fihm['fileNativeDir'], c6osjd['create'](bmfith, bmfith['onMkdirCallBack']))), bmfith['window']['focus'] = function () {}, z7r$38['getUrlPath'] = function () {}, bmfith['window']['logtime'] = function (e7zrx) {}, bmfith['window']['alertTimeLog'] = function (_6k524) {}, bmfith['window']['resetShareInfo'] = function () {}, bmfith['window']['CanvasRenderingContext2D'] = function () {}, bmfith['window']['CanvasRenderingContext2D']['prototype'] = bmfith['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], bmfith['window']['document']['body']['appendChild'] = function () {}, bmfith['EnvConfig']['pixelRatioInt'] = 0x0, q5t0kh['getPixelRatio'] = bmfith['pixelRatio'], bmfith['_preCreateElement'] = j2od['createElement'], j2od['createElement'] = bmfith['createElement'], q5t0kh['createShaderCondition'] = bmfith['createShaderCondition'], ibmft['parseXMLFromString'] = bmfith['parseXMLFromString'], c462o['_createInputElement'] = fmtqh['_createInputElement'], bmfith['EnvConfig']['load'] = uib1mv['prototype']['load'], uib1mv['prototype']['load'] = ub1v9g['prototype']['load'], bmfith['isZiYu'] && jnxdw && wx['onMessage'](function (rex87) {
        rex87['isLoad'] && (fihm['ziyuFileData'][rex87['url']] = rex87['data']);
      });
    }, bmfith['onMkdirCallBack'] = function (qhfm, coj64) {
      if (!qhfm) fihm['filesListObj'] = JSON['parse'](coj64['data']);
    }, bmfith['pixelRatio'] = function () {
      if (!bmfith['EnvConfig']['pixelRatioInt']) try {
        var djos6 = wx['getSystemInfoSync']();return bmfith['EnvConfig']['pixelRatioInt'] = djos6['pixelRatio'], djos6 = djos6, djos6['pixelRatio'];
      } catch (_62c4o) {}return bmfith['EnvConfig']['pixelRatioInt'];
    }, bmfith['createElement'] = function (bimfvu) {
      if (bimfvu == 'canvas') {
        var htm0fi;return bmfith['idx'] == 0x1 ? bmfith['isZiYu'] ? (htm0fi = sharedCanvas, htm0fi['style'] = {}) : htm0fi = window['canvas'] : htm0fi = window['wx']['createCanvas'](), bmfith['idx']++, htm0fi;
      } else {
        if (bimfvu == 'textarea' || bimfvu == 'input') return bmfith['onCreateInput'](bimfvu);else {
          if (bimfvu == 'div') {
            var dwjn = bmfith['_preCreateElement'](bimfvu);return dwjn['contains'] = function (tf0qh5) {
              return null;
            }, dwjn['removeChild'] = function (ftimb) {}, dwjn;
          } else return bmfith['_preCreateElement'](bimfvu);
        }
      }
    }, bmfith['onCreateInput'] = function (bfvmiu) {
      var t0hqm = bmfith['_preCreateElement'](bfvmiu);return t0hqm['focus'] = fmtqh['wxinputFocus'], t0hqm['blur'] = fmtqh['wxinputblur'], t0hqm['style'] = {}, t0hqm['value'] = 0x0, t0hqm['parentElement'] = {}, t0hqm['placeholder'] = {}, t0hqm['type'] = {}, t0hqm['setColor'] = function (wendxs) {}, t0hqm['setType'] = function (bv1uim) {}, t0hqm['setFontFace'] = function (qk_52) {}, t0hqm['addEventListener'] = function (osdc6) {}, t0hqm['contains'] = function (z78er$) {
        return null;
      }, t0hqm['removeChild'] = function (itvfm) {}, t0hqm;
    }, bmfith['createShaderCondition'] = function (zxw8n) {
      var hfmt0i = this,
          $py73 = function () {
        var dsco6 = zxw8n;return hfmt0i[zxw8n['replace']('this.', '')];
      };return $py73;
    }, bmfith['EnvConfig'] = null, bmfith['window'] = null, bmfith['_preCreateElement'] = null, bmfith['_inited'] = ![], bmfith['wxRequest'] = null, bmfith['systemInfo'] = null, bmfith['version'] = '0.0.1', bmfith['isZiYu'] = ![], bmfith['isPosMsgYu'] = ![], bmfith['parseXMLFromString'] = function (itfbmv) {
      var a3y$p, mh0it;itfbmv = itfbmv['replace'](/>\s+</g, '><');try {
        a3y$p = new window['Parser']['DOMParser']()['parseFromString'](itfbmv, 'text/xml');
      } catch (hmfq0t) {
        throw '需要引入xml解析库文件';
      }return a3y$p;
    }, bmfith['idx'] = 0x1, bmfith;
  }(),
      ze8x7 = function () {
    function umb1i() {}ubfim(umb1i, 'laya.wx.mini.MiniImage');var viub9 = umb1i['prototype'];return viub9['_loadImage'] = function (nxew) {
      var py3 = this,
          tf05hq = ![];nxew['indexOf']('layaNativeDir/') == -0x1 && (tf05hq = !![], nxew = tf0h5['formatURL'](nxew));if (!fihm['getFileInfo'](nxew)) {
        if (nxew['indexOf']('http://') != -0x1 || nxew['indexOf']('https://') != -0x1) fihm['downImg'](nxew, new c6osjd(umb1i, umb1i['onDownImgCallBack'], [nxew, py3]), nxew);else umb1i['onCreateImage'](nxew, py3, !![]);
      } else umb1i['onCreateImage'](nxew, py3, !tf05hq);
    }, umb1i['onDownImgCallBack'] = function (fm0hit, y$r38, dcosw) {
      if (!dcosw) umb1i['onCreateImage'](fm0hit, y$r38);else y$r38['onError'](null);
    }, umb1i['onCreateImage'] = function (ncsjw, p$7y3, mvifbt) {
      mvifbt === void 0x0 && (mvifbt = ![]);var h5_0kq;if (!mvifbt) {
        var cj426o = fihm['getFileInfo'](ncsjw),
            z7e8$ = cj426o['md5'];h5_0kq = fihm['getFileNativePath'](z7e8$);
      } else h5_0kq = ncsjw;if (p$7y3['imgCache'] == null) p$7y3['imgCache'] = {};var b1iuv;function fmvbi() {
        b1iuv['onload'] = null, b1iuv['onerror'] = null, delete p$7y3['imgCache'][ncsjw];
      };var ihf = function () {
        fmvbi(), p$7y3['onLoaded'](b1iuv);
      },
          z$37r = function () {
        fmvbi(), p$7y3['event']('error', 'Load image failed');
      };p$7y3['_type'] == 'nativeimage' ? (b1iuv = new j2od['window']['Image'](), b1iuv['crossOrigin'] = '', b1iuv['onload'] = ihf, b1iuv['onerror'] = z$37r, b1iuv['src'] = h5_0kq, p$7y3['imgCache'][ncsjw] = b1iuv) : new djsnx['create'](h5_0kq, { 'onload': ihf, 'onerror': z$37r, 'onCreate': function (wdjnc) {
          b1iuv = wdjnc, p$7y3['imgCache'][ncsjw] = wdjnc;
        } });
    }, umb1i;
  }(),
      fmtqh = function () {
    function o_46c() {}return ubfim(o_46c, 'laya.wx.mini.MiniInput'), o_46c['_createInputElement'] = function () {
      c462o['_initInput'](c462o['area'] = j2od['createElement']('textarea')), c462o['_initInput'](c462o['input'] = j2od['createElement']('input')), c462o['inputContainer'] = j2od['createElement']('div'), c462o['inputContainer']['style']['position'] = 'absolute', c462o['inputContainer']['style']['zIndex'] = 0x186a0, j2od['container']['appendChild'](c462o['inputContainer']), c462o['inputContainer']['setPos'] = function (vu1i9, jo246) {
        c462o['inputContainer']['style']['left'] = vu1i9 + 'px', c462o['inputContainer']['style']['top'] = jo246 + 'px';
      }, z7r$38['stage']['on']('resize', null, o_46c['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hk_05) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), qk_540['_soundClass'] = vbmft, qk_540['_musicClass'] = vbmft;
    }, o_46c['_onStageResize'] = function () {
      var e7x = z7r$38['stage']['_canvasTransform']['identity']();e7x['scale'](j2od['width'] / doscjw['canvas']['width'] / q5t0kh['getPixelRatio'](), j2od['height'] / doscjw['canvas']['height'] / q5t0kh['getPixelRatio']());
    }, o_46c['wxinputFocus'] = function (tm0qhf) {
      var ezw8nx = c462o['inputElement']['target'];if (ezw8nx && !ezw8nx['editable']) return;ar$7y['window']['wx']['offKeyboardConfirm'](), ar$7y['window']['wx']['offKeyboardInput'](), ar$7y['window']['wx']['showKeyboard']({ 'defaultValue': ezw8nx['text'], 'maxLength': ezw8nx['maxChars'], 'multiple': ezw8nx['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (r3$7z) {}, 'fail': function (qt0k) {} }), ar$7y['window']['wx']['onKeyboardConfirm'](function (u1mivb) {
        var fq05h = u1mivb ? u1mivb['value'] : '';ezw8nx['text'] = fq05h, ezw8nx['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ar$7y['window']['wx']['onKeyboardInput'](function (y87r$3) {
        var q04_5k = y87r$3 ? y87r$3['value'] : '';if (!ezw8nx['multiline']) {
          if (q04_5k['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ezw8nx['text'] = q04_5k, ezw8nx['event']('input');
      });
    }, o_46c['inputEnter'] = function () {
      c462o['inputElement']['target']['focus'] = ![];
    }, o_46c['wxinputblur'] = function () {
      o_46c['hideKeyboard']();
    }, o_46c['hideKeyboard'] = function () {
      ar$7y['window']['wx']['offKeyboardConfirm'](), ar$7y['window']['wx']['offKeyboardInput'](), ar$7y['window']['wx']['hideKeyboard']({ 'success': function (_4q0) {
          console['log']('隐藏键盘');
        }, 'fail': function (t0fmhq) {
          console['log']('隐藏键盘出错:' + (t0fmhq ? t0fmhq['errMsg'] : ''));
        } });
    }, o_46c;
  }(),
      ub1v9g = function () {
    function jowds() {}ubfim(jowds, 'laya.wx.mini.MiniLoader');var fitm0h = jowds['prototype'];return fitm0h['load'] = function (jco246, wojcd, p7a, sj6doc, vu9g1b) {
      p7a === void 0x0 && (p7a = !![]), vu9g1b === void 0x0 && (vu9g1b = ![]);var cj6osd = this;cj6osd['_url'] = jco246;if (jco246['indexOf']('data:image') === 0x0) cj6osd['_type'] = wojcd = 'image';else cj6osd['_type'] = wojcd || (wojcd = cj6osd['getTypeFromUrl'](jco246));cj6osd['_cache'] = p7a, cj6osd['_data'] = null;var o2_4k = 'ascii';if (jco246['indexOf']('.fnt') != -0x1) o2_4k = 'utf8';else wojcd == 'arraybuffer' && (o2_4k = '');;var nxw8ez = ibmft['getFileExtension'](jco246);if (jowds['_fileTypeArr']['indexOf'](nxw8ez) != -0x1) ar$7y['EnvConfig']['load']['call'](this, jco246, wojcd, p7a, sj6doc, vu9g1b);else {
        if (!fihm['getFileInfo'](jco246)) {
          if (jco246['indexOf']('layaNativeDir/') != -0x1) {
            if (ar$7y['isZiYu']) {
              var ewdxsn = fihm['ziyuFileData'][jco246];cj6osd['onLoaded'](ewdxsn);return;
            } else {
              cosnole['log']('read read'), fihm['read'](jco246, o2_4k, new c6osjd(jowds, jowds['onReadNativeCallBack'], [o2_4k, jco246, wojcd, p7a, sj6doc, vu9g1b, cj6osd]));return;
            }
          }if (tf0h5['rootPath'] == '') var sdowjc = jco246;else sdowjc = jco246['split'](tf0h5['rootPath'])[0x0];jco246['indexOf']('http://') != -0x1 || jco246['indexOf']('https://') != -0x1 ? ar$7y['EnvConfig']['load']['call'](cj6osd, jco246, wojcd, p7a, sj6doc, vu9g1b) : fihm['readFile'](sdowjc, o2_4k, new c6osjd(jowds, jowds['onReadNativeCallBack'], [o2_4k, jco246, wojcd, p7a, sj6doc, vu9g1b, cj6osd]), jco246);
        } else ar$7y['EnvConfig']['load']['call'](this, jco246, wojcd, p7a, sj6doc, vu9g1b);
      }
    }, fitm0h['resMgrLoad'] = function (ewsz, zswe, exnwds, mftibv, r$ez78, sdexn, k52_46) {
      exnwds === void 0x0 && (exnwds = 0x0), mftibv === void 0x0 && (mftibv = ![]), r$ez78 === void 0x0 && (r$ez78 = ![]), sdexn === void 0x0 && (sdexn = 0x0), k52_46 === void 0x0 && (k52_46 = 0x3), ewsz['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ewsz), ar$7y['EnvConfig']['resMgrLoad'](ewsz, (ayr73$, _4q25, vi1bm) => {
        jowds['prototype']['resMgrLoadCallBack'](ayr73$, _4q25, vi1bm, zswe);
      }, exnwds, mftibv, r$ez78, sdexn, k52_46);
    }, fitm0h['resMgrLoadCallBack'] = function (f0mqht, y37p$, q2k45, _k25) {
      console['log']('buff:::', f0mqht, q2k45, fihm['fileNativeDir'] + '///' + fihm['fileListName']), _k25(f0mqht, y37p$, q2k45);
    }, fitm0h['clearRes'] = function (dsnx, fqmh0) {
      fqmh0 === void 0x0 && (fqmh0 = ![]);var b1g9u = this;b1g9u['clearRes'](dsnx, fqmh0);var codjsw = fihm['getFileInfo'](dsnx);if (codjsw && (dsnx['indexOf']('http://') != -0x1 || dsnx['indexOf']('https://') != -0x1)) {
        var ft0q5h = codjsw['md5'],
            bitm = fihm['getFileNativePath'](ft0q5h);fihm['remove'](bitm);
      }
    }, jowds['onReadNativeCallBack'] = function (xdnews, i9ub, dsjoc6, fimvtb, r783z, wezx, swcdj, htq0mf, $8zre7) {
      fimvtb === void 0x0 && (fimvtb = !![]), wezx === void 0x0 && (wezx = ![]), htq0mf === void 0x0 && (htq0mf = 0x0);if (!htq0mf) {
        var kq0th;if (dsjoc6 == 'json' || dsjoc6 == 'atlas') kq0th = ar$7y['getJson']($8zre7['data']);else dsjoc6 == 'xml' ? kq0th = ibmft['parseXMLFromString']($8zre7['data']) : kq0th = $8zre7['data'];swcdj['onLoaded'](kq0th), !ar$7y['isZiYu'] && ar$7y['isPosMsgYu'] && dsjoc6 != 'arraybuffer' && wx['postMessage']({ 'url': i9ub, 'data': kq0th, 'isLoad': !![] });
      } else htq0mf == 0x1 && ar$7y['EnvConfig']['load']['call'](swcdj, i9ub, dsjoc6, fimvtb, r783z, wezx);
    }, z8r$73(jowds, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jowds;
  }(),
      fihm = function ($3rz8) {
    function hitfm() {
      hitfm['__super']['call'](this);;
    }return ubfim(hitfm, 'laya.wx.mini.MiniFileMgr', $3rz8), hitfm['isLoadFile'] = function (ivbum1) {
      return hitfm['_fileTypeArr']['indexOf'](ivbum1) != -0x1 ? !![] : ![];
    }, hitfm['getFileInfo'] = function (hk0q5) {
      var q_4k05 = hk0q5['split']('?')[0x0],
          nwe8 = hitfm['filesListObj'][q_4k05];if (nwe8 == null) return null;else return nwe8;return null;
    }, hitfm['onFileUpdate'] = function (y73a$, d6ojs) {
      var tmvbf = y73a$['split']('/'),
          cojs = tmvbf[tmvbf['length'] - 0x1],
          xr8ze7 = hitfm['getFileInfo'](d6ojs);if (xr8ze7 == null) hitfm['onSaveFile'](d6ojs, cojs);else {
        if (xr8ze7['readyUrl'] != d6ojs) hitfm['remove'](cojs, d6ojs);
      }
    }, hitfm['exits'] = function (nwjcd, mfi0h) {
      var xenzsw = hitfm['getFileNativePath'](nwjcd);hitfm['fs']['getFileInfo']({ 'filePath': xenzsw, 'success': function (iuv19) {
          mfi0h != null && mfi0h['runWith']([0x0, iuv19]);
        }, 'fail': function (hmqft0) {
          mfi0h != null && mfi0h['runWith']([0x1, hmqft0]);
        } });
    }, hitfm['read'] = function (tmqh0, t0hmfq, imbhft, oc6j2d) {
      t0hmfq === void 0x0 && (t0hmfq = 'ascill'), oc6j2d === void 0x0 && (oc6j2d = '');var fq05th;oc6j2d != '' ? fq05th = hitfm['getFileNativePath'](tmqh0) : fq05th = tmqh0, hitfm['fs']['readFile']({ 'filePath': fq05th, 'encoding': t0hmfq, 'success': function (esdnxw) {
          imbhft != null && imbhft['runWith']([0x0, esdnxw]);
        }, 'fail': function (exz78) {
          if (exz78 && oc6j2d != '') hitfm['down'](oc6j2d, t0hmfq, imbhft, oc6j2d);else imbhft != null && imbhft['runWith']([0x1]);
        } });
    }, hitfm['readNativeFile'] = function (exdnsw, fhm0i) {
      hitfm['fs']['readFile']({ 'filePath': exdnsw, 'encoding': '', 'success': function (_o246) {
          fhm0i != null && fhm0i['runWith']([0x0]);
        }, 'fail': function (znxr8) {
          fhm0i != null && fhm0i['runWith']([0x1]);
        } });
    }, hitfm['down'] = function (bi1v, ibfhmt, d6o2, x7rz) {
      ibfhmt === void 0x0 && (ibfhmt = 'ascill'), x7rz === void 0x0 && (x7rz = '');var _q45k0 = hitfm['getFileNativePath'](x7rz),
          swednx = hitfm['wxdown']({ 'url': bi1v, 'filePath': _q45k0, 'success': function (k_50q4) {
          if (k_50q4['statusCode'] === 0xc8) hitfm['readFile'](k_50q4['filePath'], ibfhmt, d6o2, x7rz);
        }, 'fail': function (xsewdn) {
          d6o2 != null && d6o2['runWith']([0x1, xsewdn]);
        } });swednx['onProgressUpdate'](function (miubf) {
        d6o2 != null && d6o2['runWith']([0x2, miubf['progress']]);
      });
    }, hitfm['readFile'] = function (ubifmv, hbifm, gvu1b9, fmbth) {
      hbifm === void 0x0 && (hbifm = 'ascill'), fmbth === void 0x0 && (fmbth = ''), hitfm['fs']['readFile']({ 'filePath': ubifmv, 'encoding': hbifm, 'success': function (fmvub) {
          if (ubifmv['indexOf']('http://') != -0x1 || ubifmv['indexOf']('https://') != -0x1) hitfm['onFileUpdate'](ubifmv, fmbth);gvu1b9 != null && gvu1b9['runWith']([0x0, fmvub]);
        }, 'fail': function (_q52k) {
          if (_q52k) gvu1b9 != null && gvu1b9['runWith']([0x1, _q52k]);
        } });
    }, hitfm['downImg'] = function (swdoj, _2o64, $e78z) {
      $e78z === void 0x0 && ($e78z = '');var mthif0 = hitfm['wxdown']({ 'url': swdoj, 'success': function (a7$py) {
          a7$py['statusCode'] === 0xc8 && hitfm['copyFile'](a7$py['tempFilePath'], $e78z, _2o64);
        }, 'fail': function (tfmh0q) {
          _2o64 != null && _2o64['runWith']([0x1, tfmh0q]);
        } });
    }, hitfm['copyFile'] = function (n8exzr, tihmb, sj6cd) {
      var zxesn = n8exzr['split']('/'),
          $ry38 = zxesn[zxesn['length'] - 0x1],
          hti = tihmb['split']('?')[0x0],
          zr8$3 = hitfm['getFileInfo'](tihmb),
          wdxnj = hitfm['getFileNativePath']($ry38);hitfm['fs']['copyFile']({ 'srcPath': n8exzr, 'destPath': wdxnj, 'success': function (ezxwns) {
          if (!zr8$3) hitfm['onSaveFile'](tihmb, $ry38), sj6cd != null && sj6cd['runWith']([0x0]);else {
            if (zr8$3['readyUrl'] != tihmb) hitfm['remove']($ry38, tihmb, sj6cd);
          }
        }, 'fail': function (bvg19) {
          sj6cd != null && sj6cd['runWith']([0x1, bvg19]);
        } });
    }, hitfm['getFileNativePath'] = function (wdex) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wdex;
    }, hitfm['remove'] = function (n8xezw, h0ifm, fmbt) {
      h0ifm === void 0x0 && (h0ifm = '');var rz$387 = hitfm['getFileInfo'](h0ifm),
          b19ivu = hitfm['getFileNativePath'](rz$387['md5']);z7r$38['loader']['clearRes'](rz$387['readyUrl']), hitfm['fs']['unlink']({ 'filePath': b19ivu, 'success': function (b9vu1i) {
          if (h0ifm != '') hitfm['onSaveFile'](h0ifm, n8xezw);fmbt != null && fmbt['runWith']([0x0]);
        }, 'fail': function (rxze78) {} });
    }, hitfm['onSaveFile'] = function (jsnxd, vug91b) {
      var xdnsj = jsnxd['split']('?')[0x0];hitfm['filesListObj'][xdnsj] = { 'md5': vug91b, 'readyUrl': jsnxd }, hitfm['fs']['writeFile']({ 'filePath': hitfm['fileNativeDir'] + '/' + hitfm['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hitfm['filesListObj']), 'success': function ($y3a7r) {
          console['log']('写入测试测试成功：', $y3a7r);
        }, 'fail': function ($e87r) {
          console['log']('写入测试测试失败：', $e87r);
        } });
    }, hitfm['existDir'] = function (bug91v, ze$r7) {
      hitfm['fs']['mkdir']({ 'dirPath': bug91v, 'success': function (nszxw) {
          ze$r7 != null && ze$r7['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (zesxn) {
          if (zesxn['errMsg']['indexOf']('file already exists') != -0x1) hitfm['readSync'](hitfm['fileListName'], 'utf8', ze$r7);else ze$r7 != null && ze$r7['runWith']([0x1, zesxn]);
        } });
    }, hitfm['readSync'] = function (ar$3y, sncjdw, ez78x, f0imt) {
      sncjdw === void 0x0 && (sncjdw = 'ascill'), f0imt === void 0x0 && (f0imt = '');var mvitfb = hitfm['getFileNativePath'](ar$3y),
          gvbu;try {
        gvbu = hitfm['fs']['readFileSync'](mvitfb), ez78x != null && ez78x['runWith']([0x0, { 'data': gvbu }]);
      } catch (bmv1iu) {
        ez78x != null && ez78x['runWith']([0x1]);
      }
    }, hitfm['readCache'] = function () {}, hitfm['writeCache'] = function (g9bv) {
      var cwdj = readyUrl['split']('?')[0x0];hitfm['filesListObj'][cwdj] = { 'md5': md5Name, 'readyUrl': readyUrl }, hitfm['fs']['writeFile']({ 'filePath': hitfm['fileNativeDir'] + '/' + hitfm['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hitfm['filesListObj']), 'success': function (js6oc) {}, 'fail': function (jdcsw) {} });
    }, hitfm['setNativeFileDir'] = function (cjwod) {
      hitfm['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + cjwod;
    }, hitfm['filesListObj'] = {}, hitfm['fileNativeDir'] = null, hitfm['fileListName'] = 'layaairfiles.txt', hitfm['ziyuFileData'] = {}, z8r$73(hitfm, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), hitfm;
  }(hbtifm),
      vbmft = function (xsdwne) {
    function _05q() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _05q['__super']['call'](this), this['_sound'] = _05q['_createSound']();
    }ubfim(_05q, 'laya.wx.mini.MiniSound', xsdwne);var _q05hk = _05q['prototype'];return _q05hk['load'] = function (_k2o46) {
      var sdowj = this;_k2o46 = tf0h5['formatURL'](_k2o46), this['url'] = _k2o46;if (_05q['_audioCache'][_k2o46]) {
        this['event']('complete');return;
      }function h0fqmt() {
        if (_05q['_null'] != undefined) sdowj['_sound']['onCanplay'](_05q['_null']), sdowj['_sound']['onError'](_05q['_null']);else try {
          sdowj['_sound']['onCanplay'](null), sdowj['_sound']['onError'](null), _05q['_null'] = null;
        } catch (_26k45) {
          console['warn']('[wxmini] _clearSound:' + _26k45), sdowj['_sound']['onCanplay'](tmfibv), sdowj['_sound']['onError'](tmfibv), _05q['_null'] = tmfibv;
        }
      }function wenxzs() {
        h0fqmt(), th0mfi['loaded'] = !![], th0mfi['event']('complete'), _05q['_audioCache'][th0mfi['url']] = th0mfi;
      }function rxz8(mubi1) {
        console['error']('errCode=' + mubi1['errCode'] + '  errMsg=' + mubi1['errMsg']), h0fqmt(), th0mfi['event']('error');
      }function tmfibv() {}this['_sound']['onCanplay'](wenxzs), this['_sound']['onError'](rxz8), this['_sound']['src'] = _k2o46;var th0mfi = this;
    }, _q05hk['play'] = function (b9ivu1, ifvbmt) {
      b9ivu1 === void 0x0 && (b9ivu1 = 0x0), ifvbmt === void 0x0 && (ifvbmt = 0x0);var b9vgu1;if (this['url'] == qk_540['_tMusic']) {
        if (!_05q['_musicAudio']) _05q['_musicAudio'] = _05q['_createSound']();b9vgu1 = _05q['_musicAudio'];
      } else b9vgu1 = _05q['_createSound']();b9vgu1['src'] = this['url'];var e7zx8 = new $ya7p3(b9vgu1);return e7zx8['url'] = this['url'], e7zx8['loops'] = ifvbmt, e7zx8['startTime'] = b9ivu1, e7zx8['play'](), qk_540['addChannel'](e7zx8), e7zx8;
    }, _q05hk['dispose'] = function () {
      var rnze8 = _05q['_audioCache'][this['url']];rnze8 && (rnze8['src'] = '', delete _05q['_audioCache'][this['url']]);
    }, jsnwc(0x0, _q05hk, 'duration', function () {
      return this['_sound']['duration'];
    }), _05q['_createSound'] = function () {
      return _05q['_id']++, ar$7y['window']['wx']['createInnerAudioContext']();
    }, _05q['_musicAudio'] = null, _05q['_id'] = 0x0, _05q['_audioCache'] = {}, _05q['_null'] = undefined, _05q;
  }(hbtifm),
      $ya7p3 = function (ibhf) {
    function rez7$($87r) {
      this['_audio'] = null, this['_onEnd'] = null, rez7$['__super']['call'](this), this['_audio'] = $87r, this['_onEnd'] = ibmft['bind'](this['__onEnd'], this), $87r['onEnded'](this['_onEnd']);
    }ubfim(rez7$, 'laya.wx.mini.MiniSoundChannel', ibhf);var bmvfit = rez7$['prototype'];return bmvfit['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (z7r$38['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, bmvfit['__onNull'] = function () {}, bmvfit['play'] = function () {
      this['isStopped'] = ![], qk_540['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, bmvfit['stop'] = function () {
      this['isStopped'] = !![], qk_540['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (rez7$['_null'] != undefined) this['_audio']['onEnded'](rez7$['_null']);else try {
        this['_audio']['onEnded'](null), rez7$['_null'] = null;
      } catch (coj26d) {
        console['warn']('[wxmini] stop:' + coj26d), this['_audio']['onEnded'](ibmft['bind'](this['__onNull'], this)), rez7$['_null'] = ibmft['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, bmvfit['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, bmvfit['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], qk_540['addChannel'](this), this['_audio']['play']();
    }, jsnwc(0x0, bmvfit, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), jsnwc(0x0, bmvfit, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), jsnwc(0x0, bmvfit, 'volume', function () {
      return 0x1;
    }, function (fq0htm) {}), rez7$['_null'] = undefined, rez7$;
  }(xe78r);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var c64o in Laya) {
    var c6djo = Laya[c64o];c6djo && c6djo['__isclass'] && (exports[c64o] = c6djo);
  }
});