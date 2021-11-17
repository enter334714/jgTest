var k = wx.$f;
(function (window, document, nzxwe) {
  var jocwsd = nzxwe['un'],
      z3r7 = nzxwe['uns'],
      qtf0h5 = nzxwe['static'],
      csjowd = nzxwe['class'],
      p$ya7 = nzxwe['getset'],
      _2oc = nzxwe['__newvec'],
      _64o2k = laya['utils']['Browser'],
      buv91i = laya['events']['Event'],
      ihfm0t = laya['events']['EventDispatcher'],
      qhm0ft = laya['resource']['HTMLImage'],
      sdj6oc = laya['utils']['Handler'],
      bimtvf = laya['display']['Input'],
      e8nrxz = laya['net']['Loader'],
      y3$8r7 = laya['maths']['Matrix'],
      vu9i = laya['renders']['Render'],
      uimb1 = laya['utils']['RunDriver'],
      c264o = laya['media']['Sound'],
      q0k_5 = laya['media']['SoundChannel'],
      dsc6o = laya['media']['SoundManager'],
      mftqh0 = laya['display']['Stage'],
      fqt50 = laya['net']['URL'],
      _ko42 = laya['utils']['Utils'],
      dj6ocs = function () {
    function dxnsw() {}return csjowd(dxnsw, 'laya.wx.mini.MiniAdpter'), dxnsw['getJson'] = function (b1m) {
      return JSON['parse'](b1m);
    }, dxnsw['init'] = function (dsjc6o, i1vbum) {
      dsjc6o === void 0x0 && (dsjc6o = ![]), i1vbum === void 0x0 && (i1vbum = ![]);if (dxnsw['_inited']) return;dxnsw['window'] = window;if (dxnsw['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;dxnsw['_inited'] = !![], dxnsw['isZiYu'] = i1vbum, dxnsw['isPosMsgYu'] = dsjc6o, dxnsw['EnvConfig'] = {}, !dxnsw['isZiYu'] && (tfhim0['setNativeFileDir']('/layaairGame'), tfhim0['existDir'](tfhim0['fileNativeDir'], sdj6oc['create'](dxnsw, dxnsw['onMkdirCallBack']))), dxnsw['window']['focus'] = function () {}, nzxwe['getUrlPath'] = function () {}, dxnsw['window']['logtime'] = function (vm1uib) {}, dxnsw['window']['alertTimeLog'] = function (sodcwj) {}, dxnsw['window']['resetShareInfo'] = function () {}, dxnsw['window']['CanvasRenderingContext2D'] = function () {}, dxnsw['window']['CanvasRenderingContext2D']['prototype'] = dxnsw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], dxnsw['window']['document']['body']['appendChild'] = function () {}, dxnsw['EnvConfig']['pixelRatioInt'] = 0x0, uimb1['getPixelRatio'] = dxnsw['pixelRatio'], dxnsw['_preCreateElement'] = _64o2k['createElement'], _64o2k['createElement'] = dxnsw['createElement'], uimb1['createShaderCondition'] = dxnsw['createShaderCondition'], _ko42['parseXMLFromString'] = dxnsw['parseXMLFromString'], bimtvf['_createInputElement'] = dcow['_createInputElement'], dxnsw['EnvConfig']['load'] = e8nrxz['prototype']['load'], e8nrxz['prototype']['load'] = c2o64j['prototype']['load'], dxnsw['isZiYu'] && dsjc6o && wx['onMessage'](function (e$r7z) {
        e$r7z['isLoad'] && (tfhim0['ziyuFileData'][e$r7z['url']] = e$r7z['data']);
      });
    }, dxnsw['onMkdirCallBack'] = function (c64, cj2od6) {
      if (!c64) tfhim0['filesListObj'] = JSON['parse'](cj2od6['data']);
    }, dxnsw['pixelRatio'] = function () {
      if (!dxnsw['EnvConfig']['pixelRatioInt']) try {
        var $r3y7a = wx['getSystemInfoSync']();return dxnsw['EnvConfig']['pixelRatioInt'] = $r3y7a['pixelRatio'], $r3y7a = $r3y7a, $r3y7a['pixelRatio'];
      } catch ($8er7) {}return dxnsw['EnvConfig']['pixelRatioInt'];
    }, dxnsw['createElement'] = function (bmuivf) {
      if (bmuivf == 'canvas') {
        var $er78;return dxnsw['idx'] == 0x1 ? dxnsw['isZiYu'] ? ($er78 = sharedCanvas, $er78['style'] = {}) : $er78 = window['canvas'] : $er78 = window['wx']['createCanvas'](), dxnsw['idx']++, $er78;
      } else {
        if (bmuivf == 'textarea' || bmuivf == 'input') return dxnsw['onCreateInput'](bmuivf);else {
          if (bmuivf == 'div') {
            var wcosj = dxnsw['_preCreateElement'](bmuivf);return wcosj['contains'] = function (erz7) {
              return null;
            }, wcosj['removeChild'] = function (viubf) {}, wcosj;
          } else return dxnsw['_preCreateElement'](bmuivf);
        }
      }
    }, dxnsw['onCreateInput'] = function (tihbfm) {
      var tbifm = dxnsw['_preCreateElement'](tihbfm);return tbifm['focus'] = dcow['wxinputFocus'], tbifm['blur'] = dcow['wxinputblur'], tbifm['style'] = {}, tbifm['value'] = 0x0, tbifm['parentElement'] = {}, tbifm['placeholder'] = {}, tbifm['type'] = {}, tbifm['setColor'] = function (rexz8) {}, tbifm['setType'] = function (ibfvu) {}, tbifm['setFontFace'] = function (k_5264) {}, tbifm['addEventListener'] = function (wsdnx) {}, tbifm['contains'] = function (ze7$8r) {
        return null;
      }, tbifm['removeChild'] = function (vbg1) {}, tbifm;
    }, dxnsw['createShaderCondition'] = function (_652k4) {
      var xz8ern = this,
          snxwez = function () {
        var q0k45 = _652k4;return xz8ern[_652k4['replace']('this.', '')];
      };return snxwez;
    }, dxnsw['EnvConfig'] = null, dxnsw['window'] = null, dxnsw['_preCreateElement'] = null, dxnsw['_inited'] = ![], dxnsw['wxRequest'] = null, dxnsw['systemInfo'] = null, dxnsw['version'] = '0.0.1', dxnsw['isZiYu'] = ![], dxnsw['isPosMsgYu'] = ![], dxnsw['parseXMLFromString'] = function (vfmi) {
      var scdjo6, o426k_;vfmi = vfmi['replace'](/>\s+</g, '><');try {
        scdjo6 = new window['Parser']['DOMParser']()['parseFromString'](vfmi, 'text/xml');
      } catch (o642_k) {
        throw '需要引入xml解析库文件';
      }return scdjo6;
    }, dxnsw['idx'] = 0x1, dxnsw;
  }(),
      a3ry$ = function () {
    function fmv() {}csjowd(fmv, 'laya.wx.mini.MiniImage');var cj2o = fmv['prototype'];return cj2o['_loadImage'] = function (tqk5h0) {
      var ez7x8 = this,
          nxez8r = ![];tqk5h0['indexOf']('layaNativeDir/') == -0x1 && (nxez8r = !![], tqk5h0 = fqt50['formatURL'](tqk5h0));if (!tfhim0['getFileInfo'](tqk5h0)) {
        if (tqk5h0['indexOf']('http://') != -0x1 || tqk5h0['indexOf']('https://') != -0x1) tfhim0['downImg'](tqk5h0, new sdj6oc(fmv, fmv['onDownImgCallBack'], [tqk5h0, ez7x8]), tqk5h0);else fmv['onCreateImage'](tqk5h0, ez7x8, !![]);
      } else fmv['onCreateImage'](tqk5h0, ez7x8, !nxez8r);
    }, fmv['onDownImgCallBack'] = function (nzxr, vbitm, h0tq5f) {
      if (!h0tq5f) fmv['onCreateImage'](nzxr, vbitm);else vbitm['onError'](null);
    }, fmv['onCreateImage'] = function (cwsojd, x8wzen, ewndxs) {
      ewndxs === void 0x0 && (ewndxs = ![]);var ap73$y;if (!ewndxs) {
        var ivufm = tfhim0['getFileInfo'](cwsojd),
            v1ug9 = ivufm['md5'];ap73$y = tfhim0['getFileNativePath'](v1ug9);
      } else ap73$y = cwsojd;if (x8wzen['imgCache'] == null) x8wzen['imgCache'] = {};var h0tqk;function sj6od() {
        h0tqk['onload'] = null, h0tqk['onerror'] = null, delete x8wzen['imgCache'][cwsojd];
      };var tmh0 = function () {
        sj6od(), x8wzen['onLoaded'](h0tqk);
      },
          ry38$7 = function () {
        sj6od(), x8wzen['event']('error', 'Load image failed');
      };x8wzen['_type'] == 'nativeimage' ? (h0tqk = new _64o2k['window']['Image'](), h0tqk['crossOrigin'] = '', h0tqk['onload'] = tmh0, h0tqk['onerror'] = ry38$7, h0tqk['src'] = ap73$y, x8wzen['imgCache'][cwsojd] = h0tqk) : new qhm0ft['create'](ap73$y, { 'onload': tmh0, 'onerror': ry38$7, 'onCreate': function (fimhtb) {
          h0tqk = fimhtb, x8wzen['imgCache'][cwsojd] = fimhtb;
        } });
    }, fmv;
  }(),
      dcow = function () {
    function oscwj() {}return csjowd(oscwj, 'laya.wx.mini.MiniInput'), oscwj['_createInputElement'] = function () {
      bimtvf['_initInput'](bimtvf['area'] = _64o2k['createElement']('textarea')), bimtvf['_initInput'](bimtvf['input'] = _64o2k['createElement']('input')), bimtvf['inputContainer'] = _64o2k['createElement']('div'), bimtvf['inputContainer']['style']['position'] = 'absolute', bimtvf['inputContainer']['style']['zIndex'] = 0x186a0, _64o2k['container']['appendChild'](bimtvf['inputContainer']), bimtvf['inputContainer']['setPos'] = function (dxne, fqht05) {
        bimtvf['inputContainer']['style']['left'] = dxne + 'px', bimtvf['inputContainer']['style']['top'] = fqht05 + 'px';
      }, nzxwe['stage']['on']('resize', null, oscwj['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (e8nzxw) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), dsc6o['_soundClass'] = ub9, dsc6o['_musicClass'] = ub9;
    }, oscwj['_onStageResize'] = function () {
      var k50htq = nzxwe['stage']['_canvasTransform']['identity']();k50htq['scale'](_64o2k['width'] / vu9i['canvas']['width'] / uimb1['getPixelRatio'](), _64o2k['height'] / vu9i['canvas']['height'] / uimb1['getPixelRatio']());
    }, oscwj['wxinputFocus'] = function (tibfvm) {
      var f0h5tq = bimtvf['inputElement']['target'];if (f0h5tq && !f0h5tq['editable']) return;dj6ocs['window']['wx']['offKeyboardConfirm'](), dj6ocs['window']['wx']['offKeyboardInput'](), dj6ocs['window']['wx']['showKeyboard']({ 'defaultValue': f0h5tq['text'], 'maxLength': f0h5tq['maxChars'], 'multiple': f0h5tq['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (jdo6sc) {}, 'fail': function (v1b9i) {} }), dj6ocs['window']['wx']['onKeyboardConfirm'](function (k0hq_5) {
        var imvft = k0hq_5 ? k0hq_5['value'] : '';f0h5tq['text'] = imvft, f0h5tq['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), dj6ocs['window']['wx']['onKeyboardInput'](function (njcws) {
        var fm0thi = njcws ? njcws['value'] : '';if (!f0h5tq['multiline']) {
          if (fm0thi['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }f0h5tq['text'] = fm0thi, f0h5tq['event']('input');
      });
    }, oscwj['inputEnter'] = function () {
      bimtvf['inputElement']['target']['focus'] = ![];
    }, oscwj['wxinputblur'] = function () {
      oscwj['hideKeyboard']();
    }, oscwj['hideKeyboard'] = function () {
      dj6ocs['window']['wx']['offKeyboardConfirm'](), dj6ocs['window']['wx']['offKeyboardInput'](), dj6ocs['window']['wx']['hideKeyboard']({ 'success': function (dwncsj) {
          console['log']('隐藏键盘');
        }, 'fail': function (vumi) {
          console['log']('隐藏键盘出错:' + (vumi ? vumi['errMsg'] : ''));
        } });
    }, oscwj;
  }(),
      c2o64j = function () {
    function jnscd() {}csjowd(jnscd, 'laya.wx.mini.MiniLoader');var kq0_5h = jnscd['prototype'];return kq0_5h['load'] = function (uvmfi, sdnwj, co2dj6, x8zr7e, dcwnj) {
      co2dj6 === void 0x0 && (co2dj6 = !![]), dcwnj === void 0x0 && (dcwnj = ![]);var m0h = this;m0h['_url'] = uvmfi;if (uvmfi['indexOf']('data:image') === 0x0) m0h['_type'] = sdnwj = 'image';else m0h['_type'] = sdnwj || (sdnwj = m0h['getTypeFromUrl'](uvmfi));m0h['_cache'] = co2dj6, m0h['_data'] = null;var _0hk = 'ascii';if (uvmfi['indexOf']('.fnt') != -0x1) _0hk = 'utf8';else sdnwj == 'arraybuffer' && (_0hk = '');;var yar37$ = _ko42['getFileExtension'](uvmfi);if (jnscd['_fileTypeArr']['indexOf'](yar37$) != -0x1) dj6ocs['EnvConfig']['load']['call'](this, uvmfi, sdnwj, co2dj6, x8zr7e, dcwnj);else {
        if (!tfhim0['getFileInfo'](uvmfi)) {
          if (uvmfi['indexOf']('layaNativeDir/') != -0x1) {
            if (dj6ocs['isZiYu']) {
              var xerz78 = tfhim0['ziyuFileData'][uvmfi];m0h['onLoaded'](xerz78);return;
            } else {
              cosnole['log']('read read'), tfhim0['read'](uvmfi, _0hk, new sdj6oc(jnscd, jnscd['onReadNativeCallBack'], [_0hk, uvmfi, sdnwj, co2dj6, x8zr7e, dcwnj, m0h]));return;
            }
          }if (fqt50['rootPath'] == '') var xwnzs = uvmfi;else xwnzs = uvmfi['split'](fqt50['rootPath'])[0x0];uvmfi['indexOf']('http://') != -0x1 || uvmfi['indexOf']('https://') != -0x1 ? dj6ocs['EnvConfig']['load']['call'](m0h, uvmfi, sdnwj, co2dj6, x8zr7e, dcwnj) : tfhim0['readFile'](xwnzs, _0hk, new sdj6oc(jnscd, jnscd['onReadNativeCallBack'], [_0hk, uvmfi, sdnwj, co2dj6, x8zr7e, dcwnj, m0h]), uvmfi);
        } else dj6ocs['EnvConfig']['load']['call'](this, uvmfi, sdnwj, co2dj6, x8zr7e, dcwnj);
      }
    }, kq0_5h['resMgrLoad'] = function (tbihf, y$7r3, tfhm, mfh0it, mtq, hmf0tq, xzwes) {
      tfhm === void 0x0 && (tfhm = 0x0), mfh0it === void 0x0 && (mfh0it = ![]), mtq === void 0x0 && (mtq = ![]), hmf0tq === void 0x0 && (hmf0tq = 0x0), xzwes === void 0x0 && (xzwes = 0x3), tbihf['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', tbihf), dj6ocs['EnvConfig']['resMgrLoad'](tbihf, (eznxw8, a3$, xzner) => {
        jnscd['prototype']['resMgrLoadCallBack'](eznxw8, a3$, xzner, y$7r3);
      }, tfhm, mfh0it, mtq, hmf0tq, xzwes);
    }, kq0_5h['resMgrLoadCallBack'] = function (mfbivu, y7a$p3, ndcjs, p$3ay) {
      console['log']('buff:::', mfbivu, ndcjs, tfhim0['fileNativeDir'] + '///' + tfhim0['fileListName']), p$3ay(mfbivu, y7a$p3, ndcjs);
    }, kq0_5h['clearRes'] = function (nezx8r, i0hmtf) {
      i0hmtf === void 0x0 && (i0hmtf = ![]);var zr$ = this;zr$['clearRes'](nezx8r, i0hmtf);var o4k6_ = tfhim0['getFileInfo'](nezx8r);if (o4k6_ && (nezx8r['indexOf']('http://') != -0x1 || nezx8r['indexOf']('https://') != -0x1)) {
        var z73r$ = o4k6_['md5'],
            $83rz = tfhim0['getFileNativePath'](z73r$);tfhim0['remove']($83rz);
      }
    }, jnscd['onReadNativeCallBack'] = function (vmu1ib, nxes, _40qk5, q50k4, a7r3$y, jcd62, xne8r, ze8r$, jscod) {
      q50k4 === void 0x0 && (q50k4 = !![]), jcd62 === void 0x0 && (jcd62 = ![]), ze8r$ === void 0x0 && (ze8r$ = 0x0);if (!ze8r$) {
        var vmiftb;if (_40qk5 == 'json' || _40qk5 == 'atlas') vmiftb = dj6ocs['getJson'](jscod['data']);else _40qk5 == 'xml' ? vmiftb = _ko42['parseXMLFromString'](jscod['data']) : vmiftb = jscod['data'];xne8r['onLoaded'](vmiftb), !dj6ocs['isZiYu'] && dj6ocs['isPosMsgYu'] && _40qk5 != 'arraybuffer' && wx['postMessage']({ 'url': nxes, 'data': vmiftb, 'isLoad': !![] });
      } else ze8r$ == 0x1 && dj6ocs['EnvConfig']['load']['call'](xne8r, nxes, _40qk5, q50k4, a7r3$y, jcd62);
    }, qtf0h5(jnscd, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jnscd;
  }(),
      tfhim0 = function (c26_o4) {
    function dsxn() {
      dsxn['__super']['call'](this);;
    }return csjowd(dsxn, 'laya.wx.mini.MiniFileMgr', c26_o4), dsxn['isLoadFile'] = function (dwjcn) {
      return dsxn['_fileTypeArr']['indexOf'](dwjcn) != -0x1 ? !![] : ![];
    }, dsxn['getFileInfo'] = function (ub1v) {
      var fmhqt0 = ub1v['split']('?')[0x0],
          hm0tqf = dsxn['filesListObj'][fmhqt0];if (hm0tqf == null) return null;else return hm0tqf;return null;
    }, dsxn['onFileUpdate'] = function ($7ya3, swcodj) {
      var v1i9u = $7ya3['split']('/'),
          sjcdow = v1i9u[v1i9u['length'] - 0x1],
          mufib = dsxn['getFileInfo'](swcodj);if (mufib == null) dsxn['onSaveFile'](swcodj, sjcdow);else {
        if (mufib['readyUrl'] != swcodj) dsxn['remove'](sjcdow, swcodj);
      }
    }, dsxn['exits'] = function (z8r73, fmhq0) {
      var ht0if = dsxn['getFileNativePath'](z8r73);dsxn['fs']['getFileInfo']({ 'filePath': ht0if, 'success': function (hqtf05) {
          fmhq0 != null && fmhq0['runWith']([0x0, hqtf05]);
        }, 'fail': function (dnsxe) {
          fmhq0 != null && fmhq0['runWith']([0x1, dnsxe]);
        } });
    }, dsxn['read'] = function (bmiuv, zx8ern, vtbif, xzsnwe) {
      zx8ern === void 0x0 && (zx8ern = 'ascill'), xzsnwe === void 0x0 && (xzsnwe = '');var fuvbmi;xzsnwe != '' ? fuvbmi = dsxn['getFileNativePath'](bmiuv) : fuvbmi = bmiuv, dsxn['fs']['readFile']({ 'filePath': fuvbmi, 'encoding': zx8ern, 'success': function (ib9v) {
          vtbif != null && vtbif['runWith']([0x0, ib9v]);
        }, 'fail': function (snwze) {
          if (snwze && xzsnwe != '') dsxn['down'](xzsnwe, zx8ern, vtbif, xzsnwe);else vtbif != null && vtbif['runWith']([0x1]);
        } });
    }, dsxn['readNativeFile'] = function (rz783$, fthq50) {
      dsxn['fs']['readFile']({ 'filePath': rz783$, 'encoding': '', 'success': function (ht50qf) {
          fthq50 != null && fthq50['runWith']([0x0]);
        }, 'fail': function (c26oj) {
          fthq50 != null && fthq50['runWith']([0x1]);
        } });
    }, dsxn['down'] = function (th50, jcndw, d26cj, sxwjdn) {
      jcndw === void 0x0 && (jcndw = 'ascill'), sxwjdn === void 0x0 && (sxwjdn = '');var fbtmhi = dsxn['getFileNativePath'](sxwjdn),
          u19bv = dsxn['wxdown']({ 'url': th50, 'filePath': fbtmhi, 'success': function (mfibv) {
          if (mfibv['statusCode'] === 0xc8) dsxn['readFile'](mfibv['filePath'], jcndw, d26cj, sxwjdn);
        }, 'fail': function (q25_k4) {
          d26cj != null && d26cj['runWith']([0x1, q25_k4]);
        } });u19bv['onProgressUpdate'](function (c246oj) {
        d26cj != null && d26cj['runWith']([0x2, c246oj['progress']]);
      });
    }, dsxn['readFile'] = function (mfbivt, tqf0mh, i1v9u, dsxenw) {
      tqf0mh === void 0x0 && (tqf0mh = 'ascill'), dsxenw === void 0x0 && (dsxenw = ''), dsxn['fs']['readFile']({ 'filePath': mfbivt, 'encoding': tqf0mh, 'success': function (ar$y3) {
          if (mfbivt['indexOf']('http://') != -0x1 || mfbivt['indexOf']('https://') != -0x1) dsxn['onFileUpdate'](mfbivt, dsxenw);i1v9u != null && i1v9u['runWith']([0x0, ar$y3]);
        }, 'fail': function (py7a3) {
          if (py7a3) i1v9u != null && i1v9u['runWith']([0x1, py7a3]);
        } });
    }, dsxn['downImg'] = function (_q4k, k4o62, tfqhm0) {
      tfqhm0 === void 0x0 && (tfqhm0 = '');var josdwc = dsxn['wxdown']({ 'url': _q4k, 'success': function (fhtbm) {
          fhtbm['statusCode'] === 0xc8 && dsxn['copyFile'](fhtbm['tempFilePath'], tfqhm0, k4o62);
        }, 'fail': function (pa73y$) {
          k4o62 != null && k4o62['runWith']([0x1, pa73y$]);
        } });
    }, dsxn['copyFile'] = function (vbft, ya7r3$, b1gu9v) {
      var mfi0 = vbft['split']('/'),
          ktqh05 = mfi0[mfi0['length'] - 0x1],
          jcdn = ya7r3$['split']('?')[0x0],
          bifvtm = dsxn['getFileInfo'](ya7r3$),
          co426 = dsxn['getFileNativePath'](ktqh05);dsxn['fs']['copyFile']({ 'srcPath': vbft, 'destPath': co426, 'success': function (ya$3r) {
          if (!bifvtm) dsxn['onSaveFile'](ya7r3$, ktqh05), b1gu9v != null && b1gu9v['runWith']([0x0]);else {
            if (bifvtm['readyUrl'] != ya7r3$) dsxn['remove'](ktqh05, ya7r3$, b1gu9v);
          }
        }, 'fail': function (tfih0) {
          b1gu9v != null && b1gu9v['runWith']([0x1, tfih0]);
        } });
    }, dsxn['getFileNativePath'] = function (p$y37) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + p$y37;
    }, dsxn['remove'] = function (dxjwn, ya7$3r, h0ftim) {
      ya7$3r === void 0x0 && (ya7$3r = '');var vu1gb = dsxn['getFileInfo'](ya7$3r),
          tmhq = dsxn['getFileNativePath'](vu1gb['md5']);nzxwe['loader']['clearRes'](vu1gb['readyUrl']), dsxn['fs']['unlink']({ 'filePath': tmhq, 'success': function (vbfitm) {
          if (ya7$3r != '') dsxn['onSaveFile'](ya7$3r, dxjwn);h0ftim != null && h0ftim['runWith']([0x0]);
        }, 'fail': function (xjsdnw) {} });
    }, dsxn['onSaveFile'] = function (uv9gb1, mtqhf0) {
      var qth = uv9gb1['split']('?')[0x0];dsxn['filesListObj'][qth] = { 'md5': mtqhf0, 'readyUrl': uv9gb1 }, dsxn['fs']['writeFile']({ 'filePath': dsxn['fileNativeDir'] + '/' + dsxn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](dsxn['filesListObj']), 'success': function (um) {
          console['log']('写入测试测试成功：', um);
        }, 'fail': function (co26dj) {
          console['log']('写入测试测试失败：', co26dj);
        } });
    }, dsxn['existDir'] = function (_54k62, k4q5_) {
      dsxn['fs']['mkdir']({ 'dirPath': _54k62, 'success': function (jdoc2) {
          k4q5_ != null && k4q5_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ojd62) {
          if (ojd62['errMsg']['indexOf']('file already exists') != -0x1) dsxn['readSync'](dsxn['fileListName'], 'utf8', k4q5_);else k4q5_ != null && k4q5_['runWith']([0x1, ojd62]);
        } });
    }, dsxn['readSync'] = function (umvib1, kt0hq5, a$r, gu9bv) {
      kt0hq5 === void 0x0 && (kt0hq5 = 'ascill'), gu9bv === void 0x0 && (gu9bv = '');var o2c6d = dsxn['getFileNativePath'](umvib1),
          scjdo;try {
        scjdo = dsxn['fs']['readFileSync'](o2c6d), a$r != null && a$r['runWith']([0x0, { 'data': scjdo }]);
      } catch (fibhmt) {
        a$r != null && a$r['runWith']([0x1]);
      }
    }, dsxn['readCache'] = function () {}, dsxn['writeCache'] = function (hmiftb) {
      var zwn8x = readyUrl['split']('?')[0x0];dsxn['filesListObj'][zwn8x] = { 'md5': md5Name, 'readyUrl': readyUrl }, dsxn['fs']['writeFile']({ 'filePath': dsxn['fileNativeDir'] + '/' + dsxn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](dsxn['filesListObj']), 'success': function (h0kt5) {}, 'fail': function (do26cj) {} });
    }, dsxn['setNativeFileDir'] = function (p73ay) {
      dsxn['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + p73ay;
    }, dsxn['filesListObj'] = {}, dsxn['fileNativeDir'] = null, dsxn['fileListName'] = 'layaairfiles.txt', dsxn['ziyuFileData'] = {}, qtf0h5(dsxn, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), dsxn;
  }(ihfm0t),
      ub9 = function (oc2dj6) {
    function ivb19u() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ivb19u['__super']['call'](this), this['_sound'] = ivb19u['_createSound']();
    }csjowd(ivb19u, 'laya.wx.mini.MiniSound', oc2dj6);var cso6jd = ivb19u['prototype'];return cso6jd['load'] = function (o6c4j2) {
      var z8r = this;o6c4j2 = fqt50['formatURL'](o6c4j2), this['url'] = o6c4j2;if (ivb19u['_audioCache'][o6c4j2]) {
        this['event']('complete');return;
      }function osdj6c() {
        if (ivb19u['_null'] != undefined) z8r['_sound']['onCanplay'](ivb19u['_null']), z8r['_sound']['onError'](ivb19u['_null']);else try {
          z8r['_sound']['onCanplay'](null), z8r['_sound']['onError'](null), ivb19u['_null'] = null;
        } catch (kq450) {
          console['warn']('[wxmini] _clearSound:' + kq450), z8r['_sound']['onCanplay'](i0htf), z8r['_sound']['onError'](i0htf), ivb19u['_null'] = i0htf;
        }
      }function biuf() {
        osdj6c(), vb1um['loaded'] = !![], vb1um['event']('complete'), ivb19u['_audioCache'][vb1um['url']] = vb1um;
      }function vi1u9(x8nezr) {
        console['error']('errCode=' + x8nezr['errCode'] + '  errMsg=' + x8nezr['errMsg']), osdj6c(), vb1um['event']('error');
      }function i0htf() {}this['_sound']['onCanplay'](biuf), this['_sound']['onError'](vi1u9), this['_sound']['src'] = o6c4j2;var vb1um = this;
    }, cso6jd['play'] = function (ibfumv, sd6ojc) {
      ibfumv === void 0x0 && (ibfumv = 0x0), sd6ojc === void 0x0 && (sd6ojc = 0x0);var jwdso;if (this['url'] == dsc6o['_tMusic']) {
        if (!ivb19u['_musicAudio']) ivb19u['_musicAudio'] = ivb19u['_createSound']();jwdso = ivb19u['_musicAudio'];
      } else jwdso = ivb19u['_createSound']();jwdso['src'] = this['url'];var x7rz8 = new uvfbi(jwdso);return x7rz8['url'] = this['url'], x7rz8['loops'] = sd6ojc, x7rz8['startTime'] = ibfumv, x7rz8['play'](), dsc6o['addChannel'](x7rz8), x7rz8;
    }, cso6jd['dispose'] = function () {
      var j26cod = ivb19u['_audioCache'][this['url']];j26cod && (j26cod['src'] = '', delete ivb19u['_audioCache'][this['url']]);
    }, p$ya7(0x0, cso6jd, 'duration', function () {
      return this['_sound']['duration'];
    }), ivb19u['_createSound'] = function () {
      return ivb19u['_id']++, dj6ocs['window']['wx']['createInnerAudioContext']();
    }, ivb19u['_musicAudio'] = null, ivb19u['_id'] = 0x0, ivb19u['_audioCache'] = {}, ivb19u['_null'] = undefined, ivb19u;
  }(ihfm0t),
      uvfbi = function ($y783r) {
    function xnj(uv1) {
      this['_audio'] = null, this['_onEnd'] = null, xnj['__super']['call'](this), this['_audio'] = uv1, this['_onEnd'] = _ko42['bind'](this['__onEnd'], this), uv1['onEnded'](this['_onEnd']);
    }csjowd(xnj, 'laya.wx.mini.MiniSoundChannel', $y783r);var y7ar3 = xnj['prototype'];return y7ar3['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (nzxwe['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, y7ar3['__onNull'] = function () {}, y7ar3['play'] = function () {
      this['isStopped'] = ![], dsc6o['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, y7ar3['stop'] = function () {
      this['isStopped'] = !![], dsc6o['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (xnj['_null'] != undefined) this['_audio']['onEnded'](xnj['_null']);else try {
        this['_audio']['onEnded'](null), xnj['_null'] = null;
      } catch (nsjwdx) {
        console['warn']('[wxmini] stop:' + nsjwdx), this['_audio']['onEnded'](_ko42['bind'](this['__onNull'], this)), xnj['_null'] = _ko42['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, y7ar3['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, y7ar3['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], dsc6o['addChannel'](this), this['_audio']['play']();
    }, p$ya7(0x0, y7ar3, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), p$ya7(0x0, y7ar3, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), p$ya7(0x0, y7ar3, 'volume', function () {
      return 0x1;
    }, function (nxesdw) {}), xnj['_null'] = undefined, xnj;
  }(q0k_5);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var t50hf in Laya) {
    var sjdo = Laya[t50hf];sjdo && sjdo['__isclass'] && (exports[t50hf] = sjdo);
  }
});