var I = wx.$R;
(function (window, document, jxis2z) {
  var s3zt2 = jxis2z['un'],
      dpgef = jxis2z['uns'],
      kowi8y = jxis2z['static'],
      cnfqd = jxis2z['class'],
      x2ioy = jxis2z['getset'],
      _16a = jxis2z['__newvec'],
      $ab_1 = laya['utils']['Browser'],
      gqedp = laya['events']['Event'],
      wrm7k = laya['events']['EventDispatcher'],
      k8iwyo = laya['resource']['HTMLImage'],
      hc65 = laya['utils']['Handler'],
      fdc5pn = laya['display']['Input'],
      o8wm = laya['net']['Loader'],
      rkmw7g = laya['maths']['Matrix'],
      dqnef = laya['renders']['Render'],
      g7qdpe = laya['utils']['RunDriver'],
      j2xyio = laya['media']['Sound'],
      o8iyjk = laya['media']['SoundChannel'],
      w7rkg = laya['media']['SoundManager'],
      ji2xy = laya['display']['Stage'],
      edpn = laya['net']['URL'],
      nc5fd = laya['utils']['Utils'],
      qerg7p = function () {
    function fndp() {}return cnfqd(fndp, 'laya.wx.mini.MiniAdpter'), fndp['getJson'] = function ($9a1u) {
      return JSON['parse']($9a1u);
    }, fndp['init'] = function (x2sjt, c5h6u_) {
      x2sjt === void 0x0 && (x2sjt = ![]), c5h6u_ === void 0x0 && (c5h6u_ = ![]);if (fndp['_inited']) return;fndp['window'] = window;if (fndp['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;fndp['_inited'] = !![], fndp['isZiYu'] = c5h6u_, fndp['isPosMsgYu'] = x2sjt, fndp['EnvConfig'] = {}, !fndp['isZiYu'] && (okmy['setNativeFileDir']('/layaairGame'), okmy['existDir'](okmy['fileNativeDir'], hc65['create'](fndp, fndp['onMkdirCallBack']))), fndp['window']['focus'] = function () {}, jxis2z['getUrlPath'] = function () {}, fndp['window']['logtime'] = function (fn6ch) {}, fndp['window']['alertTimeLog'] = function (jyo8ki) {}, fndp['window']['resetShareInfo'] = function () {}, fndp['window']['CanvasRenderingContext2D'] = function () {}, fndp['window']['CanvasRenderingContext2D']['prototype'] = fndp['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], fndp['window']['document']['body']['appendChild'] = function () {}, fndp['EnvConfig']['pixelRatioInt'] = 0x0, g7qdpe['getPixelRatio'] = fndp['pixelRatio'], fndp['_preCreateElement'] = $ab_1['createElement'], $ab_1['createElement'] = fndp['createElement'], g7qdpe['createShaderCondition'] = fndp['createShaderCondition'], nc5fd['parseXMLFromString'] = fndp['parseXMLFromString'], fdc5pn['_createInputElement'] = $4ab91['_createInputElement'], fndp['EnvConfig']['load'] = o8wm['prototype']['load'], o8wm['prototype']['load'] = g7qde['prototype']['load'], fndp['isZiYu'] && x2sjt && wx['onMessage'](function (oj8kyi) {
        oj8kyi['isLoad'] && (okmy['ziyuFileData'][oj8kyi['url']] = oj8kyi['data']);
      });
    }, fndp['onMkdirCallBack'] = function (tlz3sv, rqe7p) {
      if (!tlz3sv) okmy['filesListObj'] = JSON['parse'](rqe7p['data']);
    }, fndp['pixelRatio'] = function () {
      if (!fndp['EnvConfig']['pixelRatioInt']) try {
        var s23x = wx['getSystemInfoSync']();return fndp['EnvConfig']['pixelRatioInt'] = s23x['pixelRatio'], s23x = s23x, s23x['pixelRatio'];
      } catch (oij8y) {}return fndp['EnvConfig']['pixelRatioInt'];
    }, fndp['createElement'] = function (q7depg) {
      if (q7depg == 'canvas') {
        var sv3tlz;return fndp['idx'] == 0x1 ? fndp['isZiYu'] ? (sv3tlz = sharedCanvas, sv3tlz['style'] = {}) : sv3tlz = window['canvas'] : sv3tlz = window['wx']['createCanvas'](), fndp['idx']++, sv3tlz;
      } else {
        if (q7depg == 'textarea' || q7depg == 'input') return fndp['onCreateInput'](q7depg);else {
          if (q7depg == 'div') {
            var zsx23 = fndp['_preCreateElement'](q7depg);return zsx23['contains'] = function (chnf65) {
              return null;
            }, zsx23['removeChild'] = function (j2yx) {}, zsx23;
          } else return fndp['_preCreateElement'](q7depg);
        }
      }
    }, fndp['onCreateInput'] = function (u6ch_) {
      var ykio = fndp['_preCreateElement'](u6ch_);return ykio['focus'] = $4ab91['wxinputFocus'], ykio['blur'] = $4ab91['wxinputblur'], ykio['style'] = {}, ykio['value'] = 0x0, ykio['parentElement'] = {}, ykio['placeholder'] = {}, ykio['type'] = {}, ykio['setColor'] = function (ow8) {}, ykio['setType'] = function (ij2xyo) {}, ykio['setFontFace'] = function (mwky) {}, ykio['addEventListener'] = function (zt3xs2) {}, ykio['contains'] = function (fedpnq) {
        return null;
      }, ykio['removeChild'] = function (gm7qre) {}, ykio;
    }, fndp['createShaderCondition'] = function (qfdnpe) {
      var isz = this,
          zis2j = function () {
        var pdegq7 = qfdnpe;return isz[qfdnpe['replace']('this.', '')];
      };return zis2j;
    }, fndp['EnvConfig'] = null, fndp['window'] = null, fndp['_preCreateElement'] = null, fndp['_inited'] = ![], fndp['wxRequest'] = null, fndp['systemInfo'] = null, fndp['version'] = '0.0.1', fndp['isZiYu'] = ![], fndp['isPosMsgYu'] = ![], fndp['parseXMLFromString'] = function (c5_6uh) {
      var a19b$, gep7qd;c5_6uh = c5_6uh['replace'](/>\s+</g, '><');try {
        a19b$ = new window['Parser']['DOMParser']()['parseFromString'](c5_6uh, 'text/xml');
      } catch (depq) {
        throw '需要引入xml解析库文件';
      }return a19b$;
    }, fndp['idx'] = 0x1, fndp;
  }(),
      _56h1 = function () {
    function fqe() {}cnfqd(fqe, 'laya.wx.mini.MiniImage');var iwyok8 = fqe['prototype'];return iwyok8['_loadImage'] = function (yxoji) {
      var dpfe = this,
          jzi2 = ![];yxoji['indexOf']('layaNativeDir/') == -0x1 && (jzi2 = !![], yxoji = edpn['formatURL'](yxoji));if (!okmy['getFileInfo'](yxoji)) {
        if (yxoji['indexOf']('http://') != -0x1 || yxoji['indexOf']('https://') != -0x1) okmy['downImg'](yxoji, new hc65(fqe, fqe['onDownImgCallBack'], [yxoji, dpfe]), yxoji);else fqe['onCreateImage'](yxoji, dpfe, !![]);
      } else fqe['onCreateImage'](yxoji, dpfe, !jzi2);
    }, fqe['onDownImgCallBack'] = function (h_6, u_bah1, rky8wm) {
      if (!rky8wm) fqe['onCreateImage'](h_6, u_bah1);else u_bah1['onError'](null);
    }, fqe['onCreateImage'] = function (qedpg, oi2zj, g7eq) {
      g7eq === void 0x0 && (g7eq = ![]);var grkwm;if (!g7eq) {
        var my8owk = okmy['getFileInfo'](qedpg),
            mr8w7 = my8owk['md5'];grkwm = okmy['getFileNativePath'](mr8w7);
      } else grkwm = qedpg;if (oi2zj['imgCache'] == null) oi2zj['imgCache'] = {};var wi8yk;function jstx() {
        wi8yk['onload'] = null, wi8yk['onerror'] = null, delete oi2zj['imgCache'][qedpg];
      };var tszx2 = function () {
        jstx(), oi2zj['onLoaded'](wi8yk);
      },
          zxt32 = function () {
        jstx(), oi2zj['event']('error', 'Load image failed');
      };oi2zj['_type'] == 'nativeimage' ? (wi8yk = new $ab_1['window']['Image'](), wi8yk['crossOrigin'] = '', wi8yk['onload'] = tszx2, wi8yk['onerror'] = zxt32, wi8yk['src'] = grkwm, oi2zj['imgCache'][qedpg] = wi8yk) : new k8iwyo['create'](grkwm, { 'onload': tszx2, 'onerror': zxt32, 'onCreate': function (iojy2) {
          wi8yk = iojy2, oi2zj['imgCache'][qedpg] = iojy2;
        } });
    }, fqe;
  }(),
      $4ab91 = function () {
    function pqgefd() {}return cnfqd(pqgefd, 'laya.wx.mini.MiniInput'), pqgefd['_createInputElement'] = function () {
      fdc5pn['_initInput'](fdc5pn['area'] = $ab_1['createElement']('textarea')), fdc5pn['_initInput'](fdc5pn['input'] = $ab_1['createElement']('input')), fdc5pn['inputContainer'] = $ab_1['createElement']('div'), fdc5pn['inputContainer']['style']['position'] = 'absolute', fdc5pn['inputContainer']['style']['zIndex'] = 0x186a0, $ab_1['container']['appendChild'](fdc5pn['inputContainer']), fdc5pn['inputContainer']['setPos'] = function (ndpqef, egrw7) {
        fdc5pn['inputContainer']['style']['left'] = ndpqef + 'px', fdc5pn['inputContainer']['style']['top'] = egrw7 + 'px';
      }, jxis2z['stage']['on']('resize', null, pqgefd['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (mrwy) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), w7rkg['_soundClass'] = owk8ym, w7rkg['_musicClass'] = owk8ym;
    }, pqgefd['_onStageResize'] = function () {
      var iky8w = jxis2z['stage']['_canvasTransform']['identity']();iky8w['scale']($ab_1['width'] / dqnef['canvas']['width'] / g7qdpe['getPixelRatio'](), $ab_1['height'] / dqnef['canvas']['height'] / g7qdpe['getPixelRatio']());
    }, pqgefd['wxinputFocus'] = function (n5_h) {
      var t2zsxj = fdc5pn['inputElement']['target'];if (t2zsxj && !t2zsxj['editable']) return;qerg7p['window']['wx']['offKeyboardConfirm'](), qerg7p['window']['wx']['offKeyboardInput'](), qerg7p['window']['wx']['showKeyboard']({ 'defaultValue': t2zsxj['text'], 'maxLength': t2zsxj['maxChars'], 'multiple': t2zsxj['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (sxjzi2) {}, 'fail': function (km8rw7) {} }), qerg7p['window']['wx']['onKeyboardConfirm'](function (mqerg7) {
        var ub$_1 = mqerg7 ? mqerg7['value'] : '';t2zsxj['text'] = ub$_1, t2zsxj['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), qerg7p['window']['wx']['onKeyboardInput'](function (tl3sv0) {
        var ojzi = tl3sv0 ? tl3sv0['value'] : '';if (!t2zsxj['multiline']) {
          if (ojzi['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }t2zsxj['text'] = ojzi, t2zsxj['event']('input');
      });
    }, pqgefd['inputEnter'] = function () {
      fdc5pn['inputElement']['target']['focus'] = ![];
    }, pqgefd['wxinputblur'] = function () {
      pqgefd['hideKeyboard']();
    }, pqgefd['hideKeyboard'] = function () {
      qerg7p['window']['wx']['offKeyboardConfirm'](), qerg7p['window']['wx']['offKeyboardInput'](), qerg7p['window']['wx']['hideKeyboard']({ 'success': function (j2izxo) {
          console['log']('隐藏键盘');
        }, 'fail': function (h_c65) {
          console['log']('隐藏键盘出错:' + (h_c65 ? h_c65['errMsg'] : ''));
        } });
    }, pqgefd;
  }(),
      g7qde = function () {
    function zxtj2s() {}cnfqd(zxtj2s, 'laya.wx.mini.MiniLoader');var ijx2z = zxtj2s['prototype'];return ijx2z['load'] = function (zvst3, k7rgmw, pqer, iwko8, bh) {
      pqer === void 0x0 && (pqer = !![]), bh === void 0x0 && (bh = ![]);var rmgkw7 = this;rmgkw7['_url'] = zvst3;if (zvst3['indexOf']('data:image') === 0x0) rmgkw7['_type'] = k7rgmw = 'image';else rmgkw7['_type'] = k7rgmw || (k7rgmw = rmgkw7['getTypeFromUrl'](zvst3));rmgkw7['_cache'] = pqer, rmgkw7['_data'] = null;var ndepq = 'ascii';if (zvst3['indexOf']('.fnt') != -0x1) ndepq = 'utf8';else k7rgmw == 'arraybuffer' && (ndepq = '');;var szx32 = nc5fd['getFileExtension'](zvst3);if (zxtj2s['_fileTypeArr']['indexOf'](szx32) != -0x1) qerg7p['EnvConfig']['load']['call'](this, zvst3, k7rgmw, pqer, iwko8, bh);else {
        if (!okmy['getFileInfo'](zvst3)) {
          if (zvst3['indexOf']('layaNativeDir/') != -0x1) {
            if (qerg7p['isZiYu']) {
              var d6nfc5 = okmy['ziyuFileData'][zvst3];rmgkw7['onLoaded'](d6nfc5);return;
            } else {
              cosnole['log']('read read'), okmy['read'](zvst3, ndepq, new hc65(zxtj2s, zxtj2s['onReadNativeCallBack'], [ndepq, zvst3, k7rgmw, pqer, iwko8, bh, rmgkw7]));return;
            }
          }if (edpn['rootPath'] == '') var s0l3v = zvst3;else s0l3v = zvst3['split'](edpn['rootPath'])[0x0];zvst3['indexOf']('http://') != -0x1 || zvst3['indexOf']('https://') != -0x1 ? qerg7p['EnvConfig']['load']['call'](rmgkw7, zvst3, k7rgmw, pqer, iwko8, bh) : okmy['readFile'](s0l3v, ndepq, new hc65(zxtj2s, zxtj2s['onReadNativeCallBack'], [ndepq, zvst3, k7rgmw, pqer, iwko8, bh, rmgkw7]), zvst3);
        } else qerg7p['EnvConfig']['load']['call'](this, zvst3, k7rgmw, pqer, iwko8, bh);
      }
    }, ijx2z['resMgrLoad'] = function (mwkoy, fqeg, s2xjz, npqdfe, pqgdfe, f5h6cn, nfped) {
      s2xjz === void 0x0 && (s2xjz = 0x0), npqdfe === void 0x0 && (npqdfe = ![]), pqgdfe === void 0x0 && (pqgdfe = ![]), f5h6cn === void 0x0 && (f5h6cn = 0x0), nfped === void 0x0 && (nfped = 0x3), mwkoy['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', mwkoy), qerg7p['EnvConfig']['resMgrLoad'](mwkoy, (h6_1a, fn5dpc, y8mwko) => {
        zxtj2s['prototype']['resMgrLoadCallBack'](h6_1a, fn5dpc, y8mwko, fqeg);
      }, s2xjz, npqdfe, pqgdfe, f5h6cn, nfped);
    }, ijx2z['resMgrLoadCallBack'] = function (ozij, dfpegq, k8rwym, mk87wr) {
      console['log']('buff:::', ozij, k8rwym, okmy['fileNativeDir'] + '///' + okmy['fileListName']), mk87wr(ozij, dfpegq, k8rwym);
    }, ijx2z['clearRes'] = function (qpdcf, $abu19) {
      $abu19 === void 0x0 && ($abu19 = ![]);var oijy = this;oijy['clearRes'](qpdcf, $abu19);var dfnqp = okmy['getFileInfo'](qpdcf);if (dfnqp && (qpdcf['indexOf']('http://') != -0x1 || qpdcf['indexOf']('https://') != -0x1)) {
        var t2l3sz = dfnqp['md5'],
            kgr7m = okmy['getFileNativePath'](t2l3sz);okmy['remove'](kgr7m);
      }
    }, zxtj2s['onReadNativeCallBack'] = function (oy2ixj, fdg, hu_16, m8kr7w, n_6ch, l3tzs2, u61_a, hc_, sl3tv0) {
      m8kr7w === void 0x0 && (m8kr7w = !![]), l3tzs2 === void 0x0 && (l3tzs2 = ![]), hc_ === void 0x0 && (hc_ = 0x0);if (!hc_) {
        var x2zjs;if (hu_16 == 'json' || hu_16 == 'atlas') x2zjs = qerg7p['getJson'](sl3tv0['data']);else hu_16 == 'xml' ? x2zjs = nc5fd['parseXMLFromString'](sl3tv0['data']) : x2zjs = sl3tv0['data'];u61_a['onLoaded'](x2zjs), !qerg7p['isZiYu'] && qerg7p['isPosMsgYu'] && hu_16 != 'arraybuffer' && wx['postMessage']({ 'url': fdg, 'data': x2zjs, 'isLoad': !![] });
      } else hc_ == 0x1 && qerg7p['EnvConfig']['load']['call'](u61_a, fdg, hu_16, m8kr7w, n_6ch, l3tzs2);
    }, kowi8y(zxtj2s, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), zxtj2s;
  }(),
      okmy = function (a4b9$1) {
    function pdnqf() {
      pdnqf['__super']['call'](this);;
    }return cnfqd(pdnqf, 'laya.wx.mini.MiniFileMgr', a4b9$1), pdnqf['isLoadFile'] = function (_$1bua) {
      return pdnqf['_fileTypeArr']['indexOf'](_$1bua) != -0x1 ? !![] : ![];
    }, pdnqf['getFileInfo'] = function (_huab1) {
      var gfep = _huab1['split']('?')[0x0],
          qerm = pdnqf['filesListObj'][gfep];if (qerm == null) return null;else return qerm;return null;
    }, pdnqf['onFileUpdate'] = function (fc5p, xzsij) {
      var mwkr8y = fc5p['split']('/'),
          s2xzj = mwkr8y[mwkr8y['length'] - 0x1],
          h5ncf6 = pdnqf['getFileInfo'](xzsij);if (h5ncf6 == null) pdnqf['onSaveFile'](xzsij, s2xzj);else {
        if (h5ncf6['readyUrl'] != xzsij) pdnqf['remove'](s2xzj, xzsij);
      }
    }, pdnqf['exits'] = function (pr, nfeq) {
      var y8kwmr = pdnqf['getFileNativePath'](pr);pdnqf['fs']['getFileInfo']({ 'filePath': y8kwmr, 'success': function (n5dcfp) {
          nfeq != null && nfeq['runWith']([0x0, n5dcfp]);
        }, 'fail': function (koyj8) {
          nfeq != null && nfeq['runWith']([0x1, koyj8]);
        } });
    }, pdnqf['read'] = function (b9$ua1, uch6_5, w8oyk, oxiy2) {
      uch6_5 === void 0x0 && (uch6_5 = 'ascill'), oxiy2 === void 0x0 && (oxiy2 = '');var yxjoi8;oxiy2 != '' ? yxjoi8 = pdnqf['getFileNativePath'](b9$ua1) : yxjoi8 = b9$ua1, pdnqf['fs']['readFile']({ 'filePath': yxjoi8, 'encoding': uch6_5, 'success': function (lst3z) {
          w8oyk != null && w8oyk['runWith']([0x0, lst3z]);
        }, 'fail': function (ojxz2) {
          if (ojxz2 && oxiy2 != '') pdnqf['down'](oxiy2, uch6_5, w8oyk, oxiy2);else w8oyk != null && w8oyk['runWith']([0x1]);
        } });
    }, pdnqf['readNativeFile'] = function (qnpdcf, meq7g) {
      pdnqf['fs']['readFile']({ 'filePath': qnpdcf, 'encoding': '', 'success': function (ixy2jo) {
          meq7g != null && meq7g['runWith']([0x0]);
        }, 'fail': function (cdqnfp) {
          meq7g != null && meq7g['runWith']([0x1]);
        } });
    }, pdnqf['down'] = function (erqm, pdqnef, ky, e7dgq) {
      pdqnef === void 0x0 && (pdqnef = 'ascill'), e7dgq === void 0x0 && (e7dgq = '');var lsz2 = pdnqf['getFileNativePath'](e7dgq),
          dnfcp = pdnqf['wxdown']({ 'url': erqm, 'filePath': lsz2, 'success': function (ts2z) {
          if (ts2z['statusCode'] === 0xc8) pdnqf['readFile'](ts2z['filePath'], pdqnef, ky, e7dgq);
        }, 'fail': function (oj2xyi) {
          ky != null && ky['runWith']([0x1, oj2xyi]);
        } });dnfcp['onProgressUpdate'](function (stz3) {
        ky != null && ky['runWith']([0x2, stz3['progress']]);
      });
    }, pdnqf['readFile'] = function (pnfdcq, abu$9, b1a9u, fgdpe) {
      abu$9 === void 0x0 && (abu$9 = 'ascill'), fgdpe === void 0x0 && (fgdpe = ''), pdnqf['fs']['readFile']({ 'filePath': pnfdcq, 'encoding': abu$9, 'success': function (rwk7m) {
          if (pnfdcq['indexOf']('http://') != -0x1 || pnfdcq['indexOf']('https://') != -0x1) pdnqf['onFileUpdate'](pnfdcq, fgdpe);b1a9u != null && b1a9u['runWith']([0x0, rwk7m]);
        }, 'fail': function (gd7) {
          if (gd7) b1a9u != null && b1a9u['runWith']([0x1, gd7]);
        } });
    }, pdnqf['downImg'] = function (_h1ba, oxyj2, u61ha_) {
      u61ha_ === void 0x0 && (u61ha_ = '');var lstzv3 = pdnqf['wxdown']({ 'url': _h1ba, 'success': function (pdgf) {
          pdgf['statusCode'] === 0xc8 && pdnqf['copyFile'](pdgf['tempFilePath'], u61ha_, oxyj2);
        }, 'fail': function (b_$1ua) {
          oxyj2 != null && oxyj2['runWith']([0x1, b_$1ua]);
        } });
    }, pdnqf['copyFile'] = function (mgkwr, hu16, ozijx2) {
      var ztvs = mgkwr['split']('/'),
          vtsl0 = ztvs[ztvs['length'] - 0x1],
          e7qgdp = hu16['split']('?')[0x0],
          rwme = pdnqf['getFileInfo'](hu16),
          fh65cn = pdnqf['getFileNativePath'](vtsl0);pdnqf['fs']['copyFile']({ 'srcPath': mgkwr, 'destPath': fh65cn, 'success': function (_6ahu) {
          if (!rwme) pdnqf['onSaveFile'](hu16, vtsl0), ozijx2 != null && ozijx2['runWith']([0x0]);else {
            if (rwme['readyUrl'] != hu16) pdnqf['remove'](vtsl0, hu16, ozijx2);
          }
        }, 'fail': function (ab94$) {
          ozijx2 != null && ozijx2['runWith']([0x1, ab94$]);
        } });
    }, pdnqf['getFileNativePath'] = function (fpqdge) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + fpqdge;
    }, pdnqf['remove'] = function (edgp7q, xs3t2z, x2stzj) {
      xs3t2z === void 0x0 && (xs3t2z = '');var pqedgf = pdnqf['getFileInfo'](xs3t2z),
          xzt23s = pdnqf['getFileNativePath'](pqedgf['md5']);jxis2z['loader']['clearRes'](pqedgf['readyUrl']), pdnqf['fs']['unlink']({ 'filePath': xzt23s, 'success': function ($a4b9) {
          if (xs3t2z != '') pdnqf['onSaveFile'](xs3t2z, edgp7q);x2stzj != null && x2stzj['runWith']([0x0]);
        }, 'fail': function (omky8w) {} });
    }, pdnqf['onSaveFile'] = function (j2zxio, ub1$_a) {
      var r8mkwy = j2zxio['split']('?')[0x0];pdnqf['filesListObj'][r8mkwy] = { 'md5': ub1$_a, 'readyUrl': j2zxio }, pdnqf['fs']['writeFile']({ 'filePath': pdnqf['fileNativeDir'] + '/' + pdnqf['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pdnqf['filesListObj']), 'success': function (isx2zj) {
          console['log']('写入测试测试成功：', isx2zj);
        }, 'fail': function (rw78mk) {
          console['log']('写入测试测试失败：', rw78mk);
        } });
    }, pdnqf['existDir'] = function (egqfpd, xsz2i) {
      pdnqf['fs']['mkdir']({ 'dirPath': egqfpd, 'success': function (t2x) {
          xsz2i != null && xsz2i['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (eqm7r) {
          if (eqm7r['errMsg']['indexOf']('file already exists') != -0x1) pdnqf['readSync'](pdnqf['fileListName'], 'utf8', xsz2i);else xsz2i != null && xsz2i['runWith']([0x1, eqm7r]);
        } });
    }, pdnqf['readSync'] = function (lvstz, rm7k, pedfgq, u_abh) {
      rm7k === void 0x0 && (rm7k = 'ascill'), u_abh === void 0x0 && (u_abh = '');var kjoiy8 = pdnqf['getFileNativePath'](lvstz),
          cndpfq;try {
        cndpfq = pdnqf['fs']['readFileSync'](kjoiy8), pedfgq != null && pedfgq['runWith']([0x0, { 'data': cndpfq }]);
      } catch (qdn) {
        pedfgq != null && pedfgq['runWith']([0x1]);
      }
    }, pdnqf['readCache'] = function () {}, pdnqf['writeCache'] = function (u5ch6) {
      var tvzs3 = readyUrl['split']('?')[0x0];pdnqf['filesListObj'][tvzs3] = { 'md5': md5Name, 'readyUrl': readyUrl }, pdnqf['fs']['writeFile']({ 'filePath': pdnqf['fileNativeDir'] + '/' + pdnqf['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pdnqf['filesListObj']), 'success': function (cp5nd) {}, 'fail': function (sl3v0t) {} });
    }, pdnqf['setNativeFileDir'] = function (e7rqpg) {
      pdnqf['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + e7rqpg;
    }, pdnqf['filesListObj'] = {}, pdnqf['fileNativeDir'] = null, pdnqf['fileListName'] = 'layaairfiles.txt', pdnqf['ziyuFileData'] = {}, kowi8y(pdnqf, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), pdnqf;
  }(wrm7k),
      owk8ym = function (m87wr) {
    function ba_1hu() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ba_1hu['__super']['call'](this), this['_sound'] = ba_1hu['_createSound']();
    }cnfqd(ba_1hu, 'laya.wx.mini.MiniSound', m87wr);var jxyi2o = ba_1hu['prototype'];return jxyi2o['load'] = function (oij2xy) {
      var sxzi = this;oij2xy = edpn['formatURL'](oij2xy), this['url'] = oij2xy;if (ba_1hu['_audioCache'][oij2xy]) {
        this['event']('complete');return;
      }function hc_n65() {
        if (ba_1hu['_null'] != undefined) sxzi['_sound']['onCanplay'](ba_1hu['_null']), sxzi['_sound']['onError'](ba_1hu['_null']);else try {
          sxzi['_sound']['onCanplay'](null), sxzi['_sound']['onError'](null), ba_1hu['_null'] = null;
        } catch (y2ijo) {
          console['warn']('[wxmini] _clearSound:' + y2ijo), sxzi['_sound']['onCanplay'](pgdeqf), sxzi['_sound']['onError'](pgdeqf), ba_1hu['_null'] = pgdeqf;
        }
      }function u6h15_() {
        hc_n65(), zsjtx['loaded'] = !![], zsjtx['event']('complete'), ba_1hu['_audioCache'][zsjtx['url']] = zsjtx;
      }function nc5fp(uh_a61) {
        console['error']('errCode=' + uh_a61['errCode'] + '  errMsg=' + uh_a61['errMsg']), hc_n65(), zsjtx['event']('error');
      }function pgdeqf() {}this['_sound']['onCanplay'](u6h15_), this['_sound']['onError'](nc5fp), this['_sound']['src'] = oij2xy;var zsjtx = this;
    }, jxyi2o['play'] = function (pcfqdn, ym8w) {
      pcfqdn === void 0x0 && (pcfqdn = 0x0), ym8w === void 0x0 && (ym8w = 0x0);var joy8ix;if (this['url'] == w7rkg['_tMusic']) {
        if (!ba_1hu['_musicAudio']) ba_1hu['_musicAudio'] = ba_1hu['_createSound']();joy8ix = ba_1hu['_musicAudio'];
      } else joy8ix = ba_1hu['_createSound']();joy8ix['src'] = this['url'];var ioy8 = new j2yixo(joy8ix);return ioy8['url'] = this['url'], ioy8['loops'] = ym8w, ioy8['startTime'] = pcfqdn, ioy8['play'](), w7rkg['addChannel'](ioy8), ioy8;
    }, jxyi2o['dispose'] = function () {
      var zts3lv = ba_1hu['_audioCache'][this['url']];zts3lv && (zts3lv['src'] = '', delete ba_1hu['_audioCache'][this['url']]);
    }, x2ioy(0x0, jxyi2o, 'duration', function () {
      return this['_sound']['duration'];
    }), ba_1hu['_createSound'] = function () {
      return ba_1hu['_id']++, qerg7p['window']['wx']['createInnerAudioContext']();
    }, ba_1hu['_musicAudio'] = null, ba_1hu['_id'] = 0x0, ba_1hu['_audioCache'] = {}, ba_1hu['_null'] = undefined, ba_1hu;
  }(wrm7k),
      j2yixo = function (km8ywo) {
    function fpgd(s32z) {
      this['_audio'] = null, this['_onEnd'] = null, fpgd['__super']['call'](this), this['_audio'] = s32z, this['_onEnd'] = nc5fd['bind'](this['__onEnd'], this), s32z['onEnded'](this['_onEnd']);
    }cnfqd(fpgd, 'laya.wx.mini.MiniSoundChannel', km8ywo);var mrwe7g = fpgd['prototype'];return mrwe7g['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (jxis2z['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, mrwe7g['__onNull'] = function () {}, mrwe7g['play'] = function () {
      this['isStopped'] = ![], w7rkg['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, mrwe7g['stop'] = function () {
      this['isStopped'] = !![], w7rkg['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (fpgd['_null'] != undefined) this['_audio']['onEnded'](fpgd['_null']);else try {
        this['_audio']['onEnded'](null), fpgd['_null'] = null;
      } catch (w7mgrk) {
        console['warn']('[wxmini] stop:' + w7mgrk), this['_audio']['onEnded'](nc5fd['bind'](this['__onNull'], this)), fpgd['_null'] = nc5fd['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, mrwe7g['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, mrwe7g['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], w7rkg['addChannel'](this), this['_audio']['play']();
    }, x2ioy(0x0, mrwe7g, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), x2ioy(0x0, mrwe7g, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), x2ioy(0x0, mrwe7g, 'volume', function () {
      return 0x1;
    }, function (qdncf) {}), fpgd['_null'] = undefined, fpgd;
  }(o8iyjk);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var r8w7m in Laya) {
    var jtsx = Laya[r8w7m];jtsx && jtsx['__isclass'] && (exports[r8w7m] = jtsx);
  }
});