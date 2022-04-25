var u = wx.$x;
(function (window, document, q0aep) {
  var dnvu = q0aep['un'],
      cl7jf = q0aep['uns'],
      m4ixgs = q0aep['static'],
      kbeph = q0aep['class'],
      h_pr = q0aep['getset'],
      msxi4o = q0aep['__newvec'],
      gvi4ud = laya['utils']['Browser'],
      k63 = laya['events']['Event'],
      y8$7l9 = laya['events']['EventDispatcher'],
      s5oz2 = laya['resource']['HTMLImage'],
      y79 = laya['utils']['Handler'],
      lfn9c = laya['display']['Input'],
      u4ng = laya['net']['Loader'],
      wt = laya['maths']['Matrix'],
      m265oz = laya['renders']['Render'],
      cvnduj = laya['utils']['RunDriver'],
      t321w = laya['media']['Sound'],
      f7clj9 = laya['media']['SoundChannel'],
      moxz = laya['media']['SoundManager'],
      b3wtk1 = laya['display']['Stage'],
      dvgu = laya['net']['URL'],
      duig = laya['utils']['Utils'],
      ud4gn = function () {
    function l79cfj() {}return kbeph(l79cfj, 'laya.wx.mini.MiniAdpter'), l79cfj['getJson'] = function (ucjdv) {
      return JSON['parse'](ucjdv);
    }, l79cfj['init'] = function (vcfu, ncjuvd) {
      vcfu === void 0x0 && (vcfu = ![]), ncjuvd === void 0x0 && (ncjuvd = ![]);if (l79cfj['_inited']) return;l79cfj['window'] = window;if (l79cfj['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;l79cfj['_inited'] = !![], l79cfj['isZiYu'] = ncjuvd, l79cfj['isPosMsgYu'] = vcfu, l79cfj['EnvConfig'] = {}, !l79cfj['isZiYu'] && (xm5so['setNativeFileDir']('/layaairGame'), xm5so['existDir'](xm5so['fileNativeDir'], y79['create'](l79cfj, l79cfj['onMkdirCallBack']))), l79cfj['window']['focus'] = function () {}, q0aep['getUrlPath'] = function () {}, l79cfj['window']['logtime'] = function (aeq_) {}, l79cfj['window']['alertTimeLog'] = function (fc9lj) {}, l79cfj['window']['resetShareInfo'] = function () {}, l79cfj['window']['CanvasRenderingContext2D'] = function () {}, l79cfj['window']['CanvasRenderingContext2D']['prototype'] = l79cfj['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], l79cfj['window']['document']['body']['appendChild'] = function () {}, l79cfj['EnvConfig']['pixelRatioInt'] = 0x0, cvnduj['getPixelRatio'] = l79cfj['pixelRatio'], l79cfj['_preCreateElement'] = gvi4ud['createElement'], gvi4ud['createElement'] = l79cfj['createElement'], cvnduj['createShaderCondition'] = l79cfj['createShaderCondition'], duig['parseXMLFromString'] = l79cfj['parseXMLFromString'], lfn9c['_createInputElement'] = cnfjv['_createInputElement'], l79cfj['EnvConfig']['load'] = u4ng['prototype']['load'], u4ng['prototype']['load'] = gdvj['prototype']['load'], l79cfj['isZiYu'] && vcfu && wx['onMessage'](function (kw3bt) {
        kw3bt['isLoad'] && (xm5so['ziyuFileData'][kw3bt['url']] = kw3bt['data']);
      });
    }, l79cfj['onMkdirCallBack'] = function (ism4x, y8l9$7) {
      if (!ism4x) xm5so['filesListObj'] = JSON['parse'](y8l9$7['data']);
    }, l79cfj['pixelRatio'] = function () {
      if (!l79cfj['EnvConfig']['pixelRatioInt']) try {
        var nvcufj = wx['getSystemInfoSync']();return l79cfj['EnvConfig']['pixelRatioInt'] = nvcufj['pixelRatio'], nvcufj = nvcufj, nvcufj['pixelRatio'];
      } catch (duvjcn) {}return l79cfj['EnvConfig']['pixelRatioInt'];
    }, l79cfj['createElement'] = function (hekbw) {
      if (hekbw == 'canvas') {
        var nv4du;return l79cfj['idx'] == 0x1 ? l79cfj['isZiYu'] ? (nv4du = sharedCanvas, nv4du['style'] = {}) : nv4du = window['canvas'] : nv4du = window['wx']['createCanvas'](), l79cfj['idx']++, nv4du;
      } else {
        if (hekbw == 'textarea' || hekbw == 'input') return l79cfj['onCreateInput'](hekbw);else {
          if (hekbw == 'div') {
            var vjncfu = l79cfj['_preCreateElement'](hekbw);return vjncfu['contains'] = function (t21w63) {
              return null;
            }, vjncfu['removeChild'] = function (fnlj9) {}, vjncfu;
          } else return l79cfj['_preCreateElement'](hekbw);
        }
      }
    }, l79cfj['onCreateInput'] = function (qah0e) {
      var dvg4i = l79cfj['_preCreateElement'](qah0e);return dvg4i['focus'] = cnfjv['wxinputFocus'], dvg4i['blur'] = cnfjv['wxinputblur'], dvg4i['style'] = {}, dvg4i['value'] = 0x0, dvg4i['parentElement'] = {}, dvg4i['placeholder'] = {}, dvg4i['type'] = {}, dvg4i['setColor'] = function (f789lc) {}, dvg4i['setType'] = function (jfcl7) {}, dvg4i['setFontFace'] = function (i4gxsd) {}, dvg4i['addEventListener'] = function (gsxi4d) {}, dvg4i['contains'] = function (xmiso) {
        return null;
      }, dvg4i['removeChild'] = function (m5sxzo) {}, dvg4i;
    }, l79cfj['createShaderCondition'] = function (ke10wb) {
      var eqp_ah = this,
          xo4 = function () {
        var o65zt2 = ke10wb;return eqp_ah[ke10wb['replace']('this.', '')];
      };return xo4;
    }, l79cfj['EnvConfig'] = null, l79cfj['window'] = null, l79cfj['_preCreateElement'] = null, l79cfj['_inited'] = ![], l79cfj['wxRequest'] = null, l79cfj['systemInfo'] = null, l79cfj['version'] = '0.0.1', l79cfj['isZiYu'] = ![], l79cfj['isPosMsgYu'] = ![], l79cfj['parseXMLFromString'] = function (cljfn) {
      var cvdnju, _hap;cljfn = cljfn['replace'](/>\s+</g, '><');try {
        cvdnju = new window['Parser']['DOMParser']()['parseFromString'](cljfn, 'text/xml');
      } catch (zmsoi) {
        throw '需要引入xml解析库文件';
      }return cvdnju;
    }, l79cfj['idx'] = 0x1, l79cfj;
  }(),
      osxzim = function () {
    function pe() {}kbeph(pe, 'laya.wx.mini.MiniImage');var d4isg = pe['prototype'];return d4isg['_loadImage'] = function (b013) {
      var ms4xo = this,
          vdjngu = ![];b013['indexOf']('layaNativeDir/') == -0x1 && (vdjngu = !![], b013 = dvgu['formatURL'](b013));if (!xm5so['getFileInfo'](b013)) {
        if (b013['indexOf']('http://') != -0x1 || b013['indexOf']('https://') != -0x1) xm5so['downImg'](b013, new y79(pe, pe['onDownImgCallBack'], [b013, ms4xo]), b013);else pe['onCreateImage'](b013, ms4xo, !![]);
      } else pe['onCreateImage'](b013, ms4xo, !vdjngu);
    }, pe['onDownImgCallBack'] = function (qapeh, tw1kb3, zt56o) {
      if (!zt56o) pe['onCreateImage'](qapeh, tw1kb3);else tw1kb3['onError'](null);
    }, pe['onCreateImage'] = function (c9fl, bkpe0h, n9fc) {
      n9fc === void 0x0 && (n9fc = ![]);var ly8f7;if (!n9fc) {
        var un9jf = xm5so['getFileInfo'](c9fl),
            vdgnu = un9jf['md5'];ly8f7 = xm5so['getFileNativePath'](vdgnu);
      } else ly8f7 = c9fl;if (bkpe0h['imgCache'] == null) bkpe0h['imgCache'] = {};var fjcnvu;function ozs5x() {
        fjcnvu['onload'] = null, fjcnvu['onerror'] = null, delete bkpe0h['imgCache'][c9fl];
      };var t1wk63 = function () {
        ozs5x(), bkpe0h['onLoaded'](fjcnvu);
      },
          unvjf = function () {
        ozs5x(), bkpe0h['event']('error', 'Load image failed');
      };bkpe0h['_type'] == 'nativeimage' ? (fjcnvu = new gvi4ud['window']['Image'](), fjcnvu['crossOrigin'] = '', fjcnvu['onload'] = t1wk63, fjcnvu['onerror'] = unvjf, fjcnvu['src'] = ly8f7, bkpe0h['imgCache'][c9fl] = fjcnvu) : new s5oz2['create'](ly8f7, { 'onload': t1wk63, 'onerror': unvjf, 'onCreate': function (w31bt) {
          fjcnvu = w31bt, bkpe0h['imgCache'][c9fl] = w31bt;
        } });
    }, pe;
  }(),
      cnfjv = function () {
    function paeh() {}return kbeph(paeh, 'laya.wx.mini.MiniInput'), paeh['_createInputElement'] = function () {
      lfn9c['_initInput'](lfn9c['area'] = gvi4ud['createElement']('textarea')), lfn9c['_initInput'](lfn9c['input'] = gvi4ud['createElement']('input')), lfn9c['inputContainer'] = gvi4ud['createElement']('div'), lfn9c['inputContainer']['style']['position'] = 'absolute', lfn9c['inputContainer']['style']['zIndex'] = 0x186a0, gvi4ud['container']['appendChild'](lfn9c['inputContainer']), lfn9c['inputContainer']['setPos'] = function (dvcjn, v4uigd) {
        lfn9c['inputContainer']['style']['left'] = dvcjn + 'px', lfn9c['inputContainer']['style']['top'] = v4uigd + 'px';
      }, q0aep['stage']['on']('resize', null, paeh['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (kwb10e) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), moxz['_soundClass'] = zso5xm, moxz['_musicClass'] = zso5xm, window['_videoClass'] = sxiom;
    }, paeh['_onStageResize'] = function () {
      var fjnc9l = q0aep['stage']['_canvasTransform']['identity']();fjnc9l['scale'](gvi4ud['width'] / m265oz['canvas']['width'] / cvnduj['getPixelRatio'](), gvi4ud['height'] / m265oz['canvas']['height'] / cvnduj['getPixelRatio']());
    }, paeh['wxinputFocus'] = function (pehq_a) {
      var w2t613 = lfn9c['inputElement']['target'];if (w2t613 && !w2t613['editable']) return;ud4gn['window']['wx']['offKeyboardConfirm'](), ud4gn['window']['wx']['offKeyboardInput'](), ud4gn['window']['wx']['showKeyboard']({ 'defaultValue': w2t613['text'], 'maxLength': w2t613['maxChars'], 'multiple': w2t613['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (p0ebha) {}, 'fail': function (ufj9n) {} }), ud4gn['window']['wx']['onKeyboardConfirm'](function (oi4sxm) {
        var o2zt6 = oi4sxm ? oi4sxm['value'] : '';w2t613['text'] = o2zt6, w2t613['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ud4gn['window']['wx']['onKeyboardInput'](function (nlf9cj) {
        var k0ehw = nlf9cj ? nlf9cj['value'] : '';if (!w2t613['multiline']) {
          if (k0ehw['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }w2t613['text'] = k0ehw, w2t613['event']('input');
      });
    }, paeh['inputEnter'] = function () {
      lfn9c['inputElement']['target']['focus'] = ![];
    }, paeh['wxinputblur'] = function () {
      paeh['hideKeyboard']();
    }, paeh['hideKeyboard'] = function () {
      ud4gn['window']['wx']['offKeyboardConfirm'](), ud4gn['window']['wx']['offKeyboardInput'](), ud4gn['window']['wx']['hideKeyboard']({ 'success': function (w62t31) {
          console['log']('隐藏键盘');
        }, 'fail': function (t6k13) {
          console['log']('隐藏键盘出错:' + (t6k13 ? t6k13['errMsg'] : ''));
        } });
    }, paeh;
  }(),
      gdvj = function () {
    function jnvfcu() {}kbeph(jnvfcu, 'laya.wx.mini.MiniLoader');var ep0hk = jnvfcu['prototype'];return ep0hk['load'] = function (z62m5o, paqhe0, nucjf9, ae0h, sxig4m) {
      nucjf9 === void 0x0 && (nucjf9 = !![]), sxig4m === void 0x0 && (sxig4m = ![]);var qprah = this;qprah['_url'] = z62m5o;if (z62m5o['indexOf']('data:image') === 0x0) qprah['_type'] = paqhe0 = 'image';else qprah['_type'] = paqhe0 || (paqhe0 = qprah['getTypeFromUrl'](z62m5o));qprah['_cache'] = nucjf9, qprah['_data'] = null;var hp_arq = 'ascii';if (z62m5o['indexOf']('.fnt') != -0x1) hp_arq = 'utf8';else paqhe0 == 'arraybuffer' && (hp_arq = '');;var cfvunj = duig['getFileExtension'](z62m5o);if (jnvfcu['_fileTypeArr']['indexOf'](cfvunj) != -0x1) ud4gn['EnvConfig']['load']['call'](this, z62m5o, paqhe0, nucjf9, ae0h, sxig4m);else {
        if (!xm5so['getFileInfo'](z62m5o)) {
          if (z62m5o['indexOf']('layaNativeDir/') != -0x1) {
            if (ud4gn['isZiYu']) {
              var ah0bep = xm5so['ziyuFileData'][z62m5o];qprah['onLoaded'](ah0bep);return;
            } else {
              cosnole['log']('read read'), xm5so['read'](z62m5o, hp_arq, new y79(jnvfcu, jnvfcu['onReadNativeCallBack'], [hp_arq, z62m5o, paqhe0, nucjf9, ae0h, sxig4m, qprah]));return;
            }
          }if (dvgu['rootPath'] == '') var phraq_ = z62m5o;else phraq_ = z62m5o['split'](dvgu['rootPath'])[0x0];z62m5o['indexOf']('http://') != -0x1 || z62m5o['indexOf']('https://') != -0x1 ? ud4gn['EnvConfig']['load']['call'](qprah, z62m5o, paqhe0, nucjf9, ae0h, sxig4m) : xm5so['readFile'](phraq_, hp_arq, new y79(jnvfcu, jnvfcu['onReadNativeCallBack'], [hp_arq, z62m5o, paqhe0, nucjf9, ae0h, sxig4m, qprah]), z62m5o);
        } else ud4gn['EnvConfig']['load']['call'](this, z62m5o, paqhe0, nucjf9, ae0h, sxig4m);
      }
    }, ep0hk['resMgrLoad'] = function (njuvgd, cjlf7, j79flc, hbw0ek, gds4x, o562zt, so5) {
      j79flc === void 0x0 && (j79flc = 0x0), hbw0ek === void 0x0 && (hbw0ek = ![]), gds4x === void 0x0 && (gds4x = ![]), o562zt === void 0x0 && (o562zt = 0x0), so5 === void 0x0 && (so5 = 0x3), njuvgd['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', njuvgd), ud4gn['EnvConfig']['resMgrLoad'](njuvgd, (juvndg, $y97, aeh0pb) => {
        jnvfcu['prototype']['resMgrLoadCallBack'](juvndg, $y97, aeh0pb, cjlf7);
      }, j79flc, hbw0ek, gds4x, o562zt, so5);
    }, ep0hk['resMgrLoadCallBack'] = function (khpeb0, e10bwk, x4gdv, cnvd) {
      console['log']('buff:::', khpeb0, x4gdv, xm5so['fileNativeDir'] + '///' + xm5so['fileListName']), cnvd(khpeb0, e10bwk, x4gdv);
    }, ep0hk['clearRes'] = function (k0bew1, ismgx4) {
      ismgx4 === void 0x0 && (ismgx4 = ![]);var ox = this;ox['clearRes'](k0bew1, ismgx4);var web0k1 = xm5so['getFileInfo'](k0bew1);if (web0k1 && (k0bew1['indexOf']('http://') != -0x1 || k0bew1['indexOf']('https://') != -0x1)) {
        var ekbp = web0k1['md5'],
            apq_hr = xm5so['getFileNativePath'](ekbp);xm5so['remove'](apq_hr);
      }
    }, jnvfcu['onReadNativeCallBack'] = function (g4unvd, bp0h, kew0h, w2136t, n4dvgu, u4dvgn, szoxi, x4igv, k01wb) {
      w2136t === void 0x0 && (w2136t = !![]), u4dvgn === void 0x0 && (u4dvgn = ![]), x4igv === void 0x0 && (x4igv = 0x0);if (!x4igv) {
        var k0wbe1;if (kew0h == 'json' || kew0h == 'atlas') k0wbe1 = ud4gn['getJson'](k01wb['data']);else kew0h == 'xml' ? k0wbe1 = duig['parseXMLFromString'](k01wb['data']) : k0wbe1 = k01wb['data'];szoxi['onLoaded'](k0wbe1), !ud4gn['isZiYu'] && ud4gn['isPosMsgYu'] && kew0h != 'arraybuffer' && wx['postMessage']({ 'url': bp0h, 'data': k0wbe1, 'isLoad': !![] });
      } else x4igv == 0x1 && ud4gn['EnvConfig']['load']['call'](szoxi, bp0h, kew0h, w2136t, n4dvgu, u4dvgn);
    }, m4ixgs(jnvfcu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jnvfcu;
  }(),
      xm5so = function (hbk0pe) {
    function g4sdi() {
      g4sdi['__super']['call'](this);;
    }return kbeph(g4sdi, 'laya.wx.mini.MiniFileMgr', hbk0pe), g4sdi['isLoadFile'] = function (igu4) {
      return g4sdi['_fileTypeArr']['indexOf'](igu4) != -0x1 ? !![] : ![];
    }, g4sdi['getFileInfo'] = function (m2z6o5) {
      var zxmis = m2z6o5['split']('?')[0x0],
          kbpeh = g4sdi['filesListObj'][zxmis];if (kbpeh == null) return null;else return kbpeh;return null;
    }, g4sdi['onFileUpdate'] = function (b0ewhk, wk31) {
      var cjn9u = b0ewhk['split']('/'),
          t36z25 = cjn9u[cjn9u['length'] - 0x1],
          ig4sm = g4sdi['getFileInfo'](wk31);if (ig4sm == null) g4sdi['onSaveFile'](wk31, t36z25);else {
        if (ig4sm['readyUrl'] != wk31) g4sdi['remove'](t36z25, wk31);
      }
    }, g4sdi['exits'] = function (xso4, c9fujn) {
      var dvg4ix = g4sdi['getFileNativePath'](xso4);g4sdi['fs']['getFileInfo']({ 'filePath': dvg4ix, 'success': function (b01ew) {
          c9fujn != null && c9fujn['runWith']([0x0, b01ew]);
        }, 'fail': function (jcnl9f) {
          c9fujn != null && c9fujn['runWith']([0x1, jcnl9f]);
        } });
    }, g4sdi['read'] = function (l9c, y9lf87, _prhqa, dvungj) {
      y9lf87 === void 0x0 && (y9lf87 = 'ascill'), dvungj === void 0x0 && (dvungj = '');var lnjc9f;dvungj != '' ? lnjc9f = g4sdi['getFileNativePath'](l9c) : lnjc9f = l9c, g4sdi['fs']['readFile']({ 'filePath': lnjc9f, 'encoding': y9lf87, 'success': function (wtb13) {
          _prhqa != null && _prhqa['runWith']([0x0, wtb13]);
        }, 'fail': function (b0hke) {
          if (b0hke && dvungj != '') g4sdi['down'](dvungj, y9lf87, _prhqa, dvungj);else _prhqa != null && _prhqa['runWith']([0x1]);
        } });
    }, g4sdi['readNativeFile'] = function (abhp0, phaq0) {
      g4sdi['fs']['readFile']({ 'filePath': abhp0, 'encoding': '', 'success': function (djvc) {
          phaq0 != null && phaq0['runWith']([0x0]);
        }, 'fail': function (gvdui) {
          phaq0 != null && phaq0['runWith']([0x1]);
        } });
    }, g4sdi['down'] = function (zxsmo5, w2t136, omix4s, uvngdj) {
      w2t136 === void 0x0 && (w2t136 = 'ascill'), uvngdj === void 0x0 && (uvngdj = '');var xsmo5 = g4sdi['getFileNativePath'](uvngdj),
          sdgx4i = g4sdi['wxdown']({ 'url': zxsmo5, 'filePath': xsmo5, 'success': function (oimszx) {
          if (oimszx['statusCode'] === 0xc8) g4sdi['readFile'](oimszx['filePath'], w2t136, omix4s, uvngdj);
        }, 'fail': function (cfj97) {
          omix4s != null && omix4s['runWith']([0x1, cfj97]);
        } });sdgx4i['onProgressUpdate'](function (hpea_) {
        omix4s != null && omix4s['runWith']([0x2, hpea_['progress']]);
      });
    }, g4sdi['readFile'] = function (mxo5s, c9lf, y7fl8, w0hkeb) {
      c9lf === void 0x0 && (c9lf = 'ascill'), w0hkeb === void 0x0 && (w0hkeb = ''), g4sdi['fs']['readFile']({ 'filePath': mxo5s, 'encoding': c9lf, 'success': function (w2361t) {
          if (mxo5s['indexOf']('http://') != -0x1 || mxo5s['indexOf']('https://') != -0x1) g4sdi['onFileUpdate'](mxo5s, w0hkeb);y7fl8 != null && y7fl8['runWith']([0x0, w2361t]);
        }, 'fail': function (dnuvg4) {
          if (dnuvg4) y7fl8 != null && y7fl8['runWith']([0x1, dnuvg4]);
        } });
    }, g4sdi['downImg'] = function (n9ufjc, f98y, gm) {
      gm === void 0x0 && (gm = '');var jcnlf9 = g4sdi['wxdown']({ 'url': n9ufjc, 'success': function (ephb) {
          ephb['statusCode'] === 0xc8 && g4sdi['copyFile'](ephb['tempFilePath'], gm, f98y);
        }, 'fail': function (uf9jcn) {
          f98y != null && f98y['runWith']([0x1, uf9jcn]);
        } });
    }, g4sdi['copyFile'] = function (t1w632, mxsoz5, w1k3tb) {
      var xmg4is = t1w632['split']('/'),
          oxmszi = xmg4is[xmg4is['length'] - 0x1],
          m5zsx = mxsoz5['split']('?')[0x0],
          k13b0w = g4sdi['getFileInfo'](mxsoz5),
          epqh_ = g4sdi['getFileNativePath'](oxmszi);g4sdi['fs']['copyFile']({ 'srcPath': t1w632, 'destPath': epqh_, 'success': function (qeap_) {
          if (!k13b0w) g4sdi['onSaveFile'](mxsoz5, oxmszi), w1k3tb != null && w1k3tb['runWith']([0x0]);else {
            if (k13b0w['readyUrl'] != mxsoz5) g4sdi['remove'](oxmszi, mxsoz5, w1k3tb);
          }
        }, 'fail': function (lf7jc9) {
          w1k3tb != null && w1k3tb['runWith']([0x1, lf7jc9]);
        } });
    }, g4sdi['getFileNativePath'] = function (lcnf9j) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + lcnf9j;
    }, g4sdi['remove'] = function (e0aphq, cl9fj, pqahe_) {
      cl9fj === void 0x0 && (cl9fj = '');var ha0eqp = g4sdi['getFileInfo'](cl9fj),
          isgmx = g4sdi['getFileNativePath'](ha0eqp['md5']);q0aep['loader']['clearRes'](ha0eqp['readyUrl']), g4sdi['fs']['unlink']({ 'filePath': isgmx, 'success': function (cf9jn) {
          if (cl9fj != '') g4sdi['onSaveFile'](cl9fj, e0aphq);pqahe_ != null && pqahe_['runWith']([0x0]);
        }, 'fail': function (ahpe_) {} });
    }, g4sdi['onSaveFile'] = function (t26z35, kw0eb1) {
      var vdiu = t26z35['split']('?')[0x0];g4sdi['filesListObj'][vdiu] = { 'md5': kw0eb1, 'readyUrl': t26z35 }, g4sdi['fs']['writeFile']({ 'filePath': g4sdi['fileNativeDir'] + '/' + g4sdi['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](g4sdi['filesListObj']), 'success': function (xv4di) {
          console['log']('写入测试测试成功：', xv4di);
        }, 'fail': function (c9fnju) {
          console['log']('写入测试测试失败：', c9fnju);
        } });
    }, g4sdi['existDir'] = function (uvg4n, n4ugv) {
      g4sdi['fs']['mkdir']({ 'dirPath': uvg4n, 'success': function (omixsz) {
          n4ugv != null && n4ugv['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (gdnj) {
          if (gdnj['errMsg']['indexOf']('file already exists') != -0x1) g4sdi['readSync'](g4sdi['fileListName'], 'utf8', n4ugv);else n4ugv != null && n4ugv['runWith']([0x1, gdnj]);
        } });
    }, g4sdi['readSync'] = function (x4gsm, vndjcu, y79l$, cujnf) {
      vndjcu === void 0x0 && (vndjcu = 'ascill'), cujnf === void 0x0 && (cujnf = '');var sizomx = g4sdi['getFileNativePath'](x4gsm),
          j7l9f;try {
        j7l9f = g4sdi['fs']['readFileSync'](sizomx), y79l$ != null && y79l$['runWith']([0x0, { 'data': j7l9f }]);
      } catch (e0pahb) {
        y79l$ != null && y79l$['runWith']([0x1]);
      }
    }, g4sdi['readCache'] = function () {}, g4sdi['writeCache'] = function (n9ucj) {
      var pheab = readyUrl['split']('?')[0x0];g4sdi['filesListObj'][pheab] = { 'md5': md5Name, 'readyUrl': readyUrl }, g4sdi['fs']['writeFile']({ 'filePath': g4sdi['fileNativeDir'] + '/' + g4sdi['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](g4sdi['filesListObj']), 'success': function (ncfvu) {}, 'fail': function (zioxsm) {} });
    }, g4sdi['setNativeFileDir'] = function (o6m25) {
      g4sdi['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + o6m25;
    }, g4sdi['filesListObj'] = {}, g4sdi['fileNativeDir'] = null, g4sdi['fileListName'] = 'layaairfiles.txt', g4sdi['ziyuFileData'] = {}, m4ixgs(g4sdi, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), g4sdi;
  }(y8$7l9),
      zso5xm = function (tkbw13) {
    function cl98f() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], cl98f['__super']['call'](this), this['_sound'] = cl98f['_createSound'](), this['_chanell'] = new $9(this['_sound']);
    }kbeph(cl98f, 'laya.wx.mini.MiniSound', tkbw13);var dvunc = cl98f['prototype'];return dvunc['load'] = function (ufnc9) {
      var vdxgi = this;ufnc9 = dvgu['formatURL'](ufnc9), this['url'] = ufnc9;if (cl98f['_audioCache'][ufnc9]) {
        this['event']('complete');return;
      }function a_hrqp() {
        if (cl98f['_null'] != undefined) vdxgi['_sound']['onCanplay'](cl98f['_null']), vdxgi['_sound']['onError'](cl98f['_null']);else try {
          vdxgi['_sound']['onCanplay'](null), vdxgi['_sound']['onError'](null), cl98f['_null'] = null;
        } catch (t5o62) {
          console['warn']('[wxmini] _clearSound:' + t5o62), vdxgi['_sound']['onCanplay'](h0wbe), vdxgi['_sound']['onError'](h0wbe), cl98f['_null'] = h0wbe;
        }
      }function k613wt() {
        xsm4gi['loaded'] = !![], xsm4gi['event']('complete'), cl98f['_audioCache'][xsm4gi['url']] = xsm4gi;
      }function pqahr_(bae0h) {
        console['error']('errCode=' + bae0h['errCode'] + '  errMsg=' + bae0h['errMsg']), xsm4gi['event']('error');
      }function h0wbe() {}this['_sound']['onCanplay'](k613wt), this['_sound']['onError'](pqahr_), this['_sound']['src'] = ufnc9;var xsm4gi = this;
    }, dvunc['play'] = function (w13b, ap_h) {
      w13b === void 0x0 && (w13b = 0x0), ap_h === void 0x0 && (ap_h = 0x0);var qhp_r, ahq_pr;if (this['url'] == moxz['_tMusic']) {
        if (!cl98f['_musicAudio']) cl98f['_musicAudio'] = this['_sound'];qhp_r = cl98f['_musicAudio'], ahq_pr = this['_chanell'];
      } else qhp_r = this['_sound'], ahq_pr = this['_chanell'];return qhp_r['src'] = this['url'], qhp_r['startTime'] = 0x0, ahq_pr['isStopped'] && (ahq_pr['url'] = this['url'], ahq_pr['loops'] = ap_h, ahq_pr['startTime'] = w13b, ahq_pr['play'](), moxz['addChannel'](ahq_pr)), ahq_pr;
    }, dvunc['dispose'] = function () {
      var msg = cl98f['_audioCache'][this['url']];msg && (msg['src'] = '', delete cl98f['_audioCache'][this['url']]);
    }, h_pr(0x0, dvunc, 'duration', function () {
      return this['_sound']['duration'];
    }), cl98f['_createSound'] = function () {
      cl98f['_id']++;var duvgnj = ud4gn['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return duvgnj;
    }, cl98f['_musicAudio'] = null, cl98f['_id'] = 0x0, cl98f['_audioCache'] = {}, cl98f['_null'] = undefined, cl98f;
  }(y8$7l9),
      $9 = function (sd4gix) {
    function haqp0(z56om2) {
      this['_audio'] = null, this['_onEnd'] = null, haqp0['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = z56om2, this['_onEnd'] = duig['bind'](this['__onEnd'], this), z56om2['onEnded'](this['_onEnd']);
    }kbeph(haqp0, 'laya.wx.mini.MiniSoundChannel', sd4gix);var cvjfnu = haqp0['prototype'];return cvjfnu['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (q0aep['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, cvjfnu['__onNull'] = function () {}, cvjfnu['play'] = function () {
      this['isStopped'] = ![], moxz['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, cvjfnu['stop'] = function () {
      this['isStopped'] = !![], moxz['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, cvjfnu['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, cvjfnu['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], moxz['addChannel'](this), this['_audio']['play']();
    }, h_pr(0x0, cvjfnu, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), h_pr(0x0, cvjfnu, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), h_pr(0x0, cvjfnu, 'volume', function () {
      return 0x1;
    }, function (jc9) {}), haqp0['_null'] = undefined, haqp0;
  }(f7clj9),
      sxiom = function () {
    function nu9fc() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = ud4gn['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }kbeph(nu9fc, 'laya.wx.mini.MiniVideo');var aq0pe = nu9fc['prototype'];return aq0pe['on'] = function (hpbae0, _rha, hrq_a) {
      if (hpbae0 == 'loadedmetadata') this['onPlayFunc'] = hrq_a['bind'](_rha), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else hpbae0 == 'ended' && (this['onEndedFunC'] = hrq_a['bind'](_rha), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, aq0pe['onTimeUpdateFunc'] = function (ozt5) {
      this['position'] = ozt5['position'], this['_duration'] = ozt5['duration'];
    }, aq0pe['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, aq0pe['onended'] = function (fl8c79, fnju) {
      this['onEndedFunC'] = fnju['bind'](fl8c79), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, aq0pe['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, aq0pe['off'] = function (ewk0hb, oms4i, vix4) {
      if (ewk0hb == 'loadedmetadata') this['onPlayFunc'] = vix4['bind'](oms4i), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else ewk0hb == 'ended' && (this['onEndedFunC'] = vix4['bind'](oms4i), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, aq0pe['load'] = function (o6zt52) {
      if (!this['videoElement']) return;this['videoElement']['src'] = o6zt52;
    }, aq0pe['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, aq0pe['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, aq0pe['size'] = function (njlc, ly$879) {
      if (!this['videoElement']) return;this['videoElement']['width'] = njlc, this['videoElement']['height'] = ly$879;
    }, aq0pe['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, aq0pe['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, h_pr(0x0, aq0pe, 'duration', function () {
      return this['_duration'];
    }), h_pr(0x0, aq0pe, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (hrq_) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = hrq_;
    }), h_pr(0x0, aq0pe, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), h_pr(0x0, aq0pe, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), h_pr(0x0, aq0pe, 'ended', function () {
      return this['videoend'];
    }), h_pr(0x0, aq0pe, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (nguvdj) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = nguvdj;
    }), h_pr(0x0, aq0pe, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (j9fl7) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = j9fl7;
    }), h_pr(0x0, aq0pe, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (z6ot25) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = z6ot25;
    }), h_pr(0x0, aq0pe, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), h_pr(0x0, aq0pe, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (wb3t1k) {
      if (!this['videoElement']) return;this['videoElement']['x'] = wb3t1k;
    }), h_pr(0x0, aq0pe, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (r_hp) {
      if (!this['videoElement']) return;this['videoElement']['y'] = r_hp;
    }), h_pr(0x0, aq0pe, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), h_pr(0x0, aq0pe, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (wk30b) {
      if (!this['videoElement']) return;this['videoElement']['src'] = wk30b;
    }), h_pr(0x0, aq0pe, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (keb0h) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = keb0h;
    }), h_pr(0x0, aq0pe, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (whk0b) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = whk0b;
    }), nu9fc;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var vnujdg in Laya) {
    var ujncvd = Laya[vnujdg];ujncvd && ujncvd['__isclass'] && (exports[vnujdg] = ujncvd);
  }
});