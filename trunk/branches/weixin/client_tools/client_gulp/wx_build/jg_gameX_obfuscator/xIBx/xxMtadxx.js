var u = wx.$x;
(function (window, document, wb1k03) {
  var _paeqh = wb1k03['un'],
      nflcj9 = wb1k03['uns'],
      oxs = wb1k03['static'],
      jdvgnu = wb1k03['class'],
      vcjf = wb1k03['getset'],
      pq0ha = wb1k03['__newvec'],
      t315 = laya['utils']['Browser'],
      rapq_ = laya['events']['Event'],
      x4gvdi = laya['events']['EventDispatcher'],
      tw1kb3 = laya['resource']['HTMLImage'],
      b3tk = laya['utils']['Handler'],
      w3bkt = laya['display']['Input'],
      sixom = laya['net']['Loader'],
      ea_hqp = laya['maths']['Matrix'],
      ix4om = laya['renders']['Render'],
      aqhe_ = laya['utils']['RunDriver'],
      nvfju = laya['media']['Sound'],
      oxims4 = laya['media']['SoundChannel'],
      xi4dgs = laya['media']['SoundManager'],
      i4vgxd = laya['display']['Stage'],
      fl8c = laya['net']['URL'],
      u9cjnf = laya['utils']['Utils'],
      sxo4i = function () {
    function w0bk() {}return jdvgnu(w0bk, 'laya.wx.mini.MiniAdpter'), w0bk['getJson'] = function (zt62o) {
      return JSON['parse'](zt62o);
    }, w0bk['init'] = function (ug4vdn, d4nug) {
      ug4vdn === void 0x0 && (ug4vdn = ![]), d4nug === void 0x0 && (d4nug = ![]);if (w0bk['_inited']) return;w0bk['window'] = window;if (w0bk['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;w0bk['_inited'] = !![], w0bk['isZiYu'] = d4nug, w0bk['isPosMsgYu'] = ug4vdn, w0bk['EnvConfig'] = {}, !w0bk['isZiYu'] && (omxsz5['setNativeFileDir']('/layaairGame'), omxsz5['existDir'](omxsz5['fileNativeDir'], b3tk['create'](w0bk, w0bk['onMkdirCallBack']))), w0bk['window']['focus'] = function () {}, wb1k03['getUrlPath'] = function () {}, w0bk['window']['logtime'] = function (ktb3w) {}, w0bk['window']['alertTimeLog'] = function (nl9) {}, w0bk['window']['resetShareInfo'] = function () {}, w0bk['window']['CanvasRenderingContext2D'] = function () {}, w0bk['window']['CanvasRenderingContext2D']['prototype'] = w0bk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], w0bk['window']['document']['body']['appendChild'] = function () {}, w0bk['EnvConfig']['pixelRatioInt'] = 0x0, aqhe_['getPixelRatio'] = w0bk['pixelRatio'], w0bk['_preCreateElement'] = t315['createElement'], t315['createElement'] = w0bk['createElement'], aqhe_['createShaderCondition'] = w0bk['createShaderCondition'], u9cjnf['parseXMLFromString'] = w0bk['parseXMLFromString'], w3bkt['_createInputElement'] = szx5m['_createInputElement'], w0bk['EnvConfig']['load'] = sixom['prototype']['load'], sixom['prototype']['load'] = njugdv['prototype']['load'], w0bk['isZiYu'] && ug4vdn && wx['onMessage'](function (ep0bah) {
        ep0bah['isLoad'] && (omxsz5['ziyuFileData'][ep0bah['url']] = ep0bah['data']);
      });
    }, w0bk['onMkdirCallBack'] = function (qr_ha, wk1be0) {
      if (!qr_ha) omxsz5['filesListObj'] = JSON['parse'](wk1be0['data']);
    }, w0bk['pixelRatio'] = function () {
      if (!w0bk['EnvConfig']['pixelRatioInt']) try {
        var jcdvu = wx['getSystemInfoSync']();return w0bk['EnvConfig']['pixelRatioInt'] = jcdvu['pixelRatio'], jcdvu = jcdvu, jcdvu['pixelRatio'];
      } catch (g4imsx) {}return w0bk['EnvConfig']['pixelRatioInt'];
    }, w0bk['createElement'] = function (hqa_p) {
      if (hqa_p == 'canvas') {
        var z5oxs;return w0bk['idx'] == 0x1 ? w0bk['isZiYu'] ? (z5oxs = sharedCanvas, z5oxs['style'] = {}) : z5oxs = window['canvas'] : z5oxs = window['wx']['createCanvas'](), w0bk['idx']++, z5oxs;
      } else {
        if (hqa_p == 'textarea' || hqa_p == 'input') return w0bk['onCreateInput'](hqa_p);else {
          if (hqa_p == 'div') {
            var djnc = w0bk['_preCreateElement'](hqa_p);return djnc['contains'] = function (o5) {
              return null;
            }, djnc['removeChild'] = function (osxzmi) {}, djnc;
          } else return w0bk['_preCreateElement'](hqa_p);
        }
      }
    }, w0bk['onCreateInput'] = function (ndujgv) {
      var unf9jc = w0bk['_preCreateElement'](ndujgv);return unf9jc['focus'] = szx5m['wxinputFocus'], unf9jc['blur'] = szx5m['wxinputblur'], unf9jc['style'] = {}, unf9jc['value'] = 0x0, unf9jc['parentElement'] = {}, unf9jc['placeholder'] = {}, unf9jc['type'] = {}, unf9jc['setColor'] = function (r_pqa) {}, unf9jc['setType'] = function (h0pba) {}, unf9jc['setFontFace'] = function (jvnucd) {}, unf9jc['addEventListener'] = function (wb103k) {}, unf9jc['contains'] = function (dung) {
        return null;
      }, unf9jc['removeChild'] = function (digvx4) {}, unf9jc;
    }, w0bk['createShaderCondition'] = function (cjfl79) {
      var t13b = this,
          oi4mx = function () {
        var g4msx = cjfl79;return t13b[cjfl79['replace']('this.', '')];
      };return oi4mx;
    }, w0bk['EnvConfig'] = null, w0bk['window'] = null, w0bk['_preCreateElement'] = null, w0bk['_inited'] = ![], w0bk['wxRequest'] = null, w0bk['systemInfo'] = null, w0bk['version'] = '0.0.1', w0bk['isZiYu'] = ![], w0bk['isPosMsgYu'] = ![], w0bk['parseXMLFromString'] = function (hq0pa) {
      var g4mis, w2t631;hq0pa = hq0pa['replace'](/>\s+</g, '><');try {
        g4mis = new window['Parser']['DOMParser']()['parseFromString'](hq0pa, 'text/xml');
      } catch (l9yf87) {
        throw '需要引入xml解析库文件';
      }return g4mis;
    }, w0bk['idx'] = 0x1, w0bk;
  }(),
      s4io = function () {
    function o2m6z() {}jdvgnu(o2m6z, 'laya.wx.mini.MiniImage');var sg4i = o2m6z['prototype'];return sg4i['_loadImage'] = function (giu4d) {
      var hpa = this,
          wbkt = ![];giu4d['indexOf']('layaNativeDir/') == -0x1 && (wbkt = !![], giu4d = fl8c['formatURL'](giu4d));if (!omxsz5['getFileInfo'](giu4d)) {
        if (giu4d['indexOf']('http://') != -0x1 || giu4d['indexOf']('https://') != -0x1) omxsz5['downImg'](giu4d, new b3tk(o2m6z, o2m6z['onDownImgCallBack'], [giu4d, hpa]), giu4d);else o2m6z['onCreateImage'](giu4d, hpa, !![]);
      } else o2m6z['onCreateImage'](giu4d, hpa, !wbkt);
    }, o2m6z['onDownImgCallBack'] = function (szoixm, c7j9fl, arph_q) {
      if (!arph_q) o2m6z['onCreateImage'](szoixm, c7j9fl);else c7j9fl['onError'](null);
    }, o2m6z['onCreateImage'] = function (l9c78f, bah0pe, iv4gu) {
      iv4gu === void 0x0 && (iv4gu = ![]);var gd;if (!iv4gu) {
        var wbk10 = omxsz5['getFileInfo'](l9c78f),
            ebp0a = wbk10['md5'];gd = omxsz5['getFileNativePath'](ebp0a);
      } else gd = l9c78f;if (bah0pe['imgCache'] == null) bah0pe['imgCache'] = {};var wekh;function ep0ba() {
        wekh['onload'] = null, wekh['onerror'] = null, delete bah0pe['imgCache'][l9c78f];
      };var vdcujn = function () {
        ep0ba(), bah0pe['onLoaded'](wekh);
      },
          eb01kw = function () {
        ep0ba(), bah0pe['event']('error', 'Load image failed');
      };bah0pe['_type'] == 'nativeimage' ? (wekh = new t315['window']['Image'](), wekh['crossOrigin'] = '', wekh['onload'] = vdcujn, wekh['onerror'] = eb01kw, wekh['src'] = gd, bah0pe['imgCache'][l9c78f] = wekh) : new tw1kb3['create'](gd, { 'onload': vdcujn, 'onerror': eb01kw, 'onCreate': function (mo56) {
          wekh = mo56, bah0pe['imgCache'][l9c78f] = mo56;
        } });
    }, o2m6z;
  }(),
      szx5m = function () {
    function hebap() {}return jdvgnu(hebap, 'laya.wx.mini.MiniInput'), hebap['_createInputElement'] = function () {
      w3bkt['_initInput'](w3bkt['area'] = t315['createElement']('textarea')), w3bkt['_initInput'](w3bkt['input'] = t315['createElement']('input')), w3bkt['inputContainer'] = t315['createElement']('div'), w3bkt['inputContainer']['style']['position'] = 'absolute', w3bkt['inputContainer']['style']['zIndex'] = 0x186a0, t315['container']['appendChild'](w3bkt['inputContainer']), w3bkt['inputContainer']['setPos'] = function (ujng, d4xigs) {
        w3bkt['inputContainer']['style']['left'] = ujng + 'px', w3bkt['inputContainer']['style']['top'] = d4xigs + 'px';
      }, wb1k03['stage']['on']('resize', null, hebap['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($7yl89) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xi4dgs['_soundClass'] = igd4v, xi4dgs['_musicClass'] = igd4v;
    }, hebap['_onStageResize'] = function () {
      var ismzx = wb1k03['stage']['_canvasTransform']['identity']();ismzx['scale'](t315['width'] / ix4om['canvas']['width'] / aqhe_['getPixelRatio'](), t315['height'] / ix4om['canvas']['height'] / aqhe_['getPixelRatio']());
    }, hebap['wxinputFocus'] = function (ixgvd) {
      var f89lc7 = w3bkt['inputElement']['target'];if (f89lc7 && !f89lc7['editable']) return;sxo4i['window']['wx']['offKeyboardConfirm'](), sxo4i['window']['wx']['offKeyboardInput'](), sxo4i['window']['wx']['showKeyboard']({ 'defaultValue': f89lc7['text'], 'maxLength': f89lc7['maxChars'], 'multiple': f89lc7['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (fvc) {}, 'fail': function (ljcfn) {} }), sxo4i['window']['wx']['onKeyboardConfirm'](function (w1b0k3) {
        var is4xm = w1b0k3 ? w1b0k3['value'] : '';f89lc7['text'] = is4xm, f89lc7['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), sxo4i['window']['wx']['onKeyboardInput'](function (bew) {
        var w31kb0 = bew ? bew['value'] : '';if (!f89lc7['multiline']) {
          if (w31kb0['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }f89lc7['text'] = w31kb0, f89lc7['event']('input');
      });
    }, hebap['inputEnter'] = function () {
      w3bkt['inputElement']['target']['focus'] = ![];
    }, hebap['wxinputblur'] = function () {
      hebap['hideKeyboard']();
    }, hebap['hideKeyboard'] = function () {
      sxo4i['window']['wx']['offKeyboardConfirm'](), sxo4i['window']['wx']['offKeyboardInput'](), sxo4i['window']['wx']['hideKeyboard']({ 'success': function (fujcvn) {
          console['log']('隐藏键盘');
        }, 'fail': function (webh0k) {
          console['log']('隐藏键盘出错:' + (webh0k ? webh0k['errMsg'] : ''));
        } });
    }, hebap;
  }(),
      njugdv = function () {
    function web0k() {}jdvgnu(web0k, 'laya.wx.mini.MiniLoader');var k1t3wb = web0k['prototype'];return k1t3wb['load'] = function (tzo65, b0kw1, k361wt, tz6325, kebh0p) {
      k361wt === void 0x0 && (k361wt = !![]), kebh0p === void 0x0 && (kebh0p = ![]);var ehqp_a = this;ehqp_a['_url'] = tzo65;if (tzo65['indexOf']('data:image') === 0x0) ehqp_a['_type'] = b0kw1 = 'image';else ehqp_a['_type'] = b0kw1 || (b0kw1 = ehqp_a['getTypeFromUrl'](tzo65));ehqp_a['_cache'] = k361wt, ehqp_a['_data'] = null;var mzo25 = 'ascii';if (tzo65['indexOf']('.fnt') != -0x1) mzo25 = 'utf8';else b0kw1 == 'arraybuffer' && (mzo25 = '');;var w362 = u9cjnf['getFileExtension'](tzo65);if (web0k['_fileTypeArr']['indexOf'](w362) != -0x1) sxo4i['EnvConfig']['load']['call'](this, tzo65, b0kw1, k361wt, tz6325, kebh0p);else {
        if (!omxsz5['getFileInfo'](tzo65)) {
          if (tzo65['indexOf']('layaNativeDir/') != -0x1) {
            if (sxo4i['isZiYu']) {
              var xi4gds = omxsz5['ziyuFileData'][tzo65];ehqp_a['onLoaded'](xi4gds);return;
            } else {
              cosnole['log']('read read'), omxsz5['read'](tzo65, mzo25, new b3tk(web0k, web0k['onReadNativeCallBack'], [mzo25, tzo65, b0kw1, k361wt, tz6325, kebh0p, ehqp_a]));return;
            }
          }if (fl8c['rootPath'] == '') var sim4xo = tzo65;else sim4xo = tzo65['split'](fl8c['rootPath'])[0x0];tzo65['indexOf']('http://') != -0x1 || tzo65['indexOf']('https://') != -0x1 ? sxo4i['EnvConfig']['load']['call'](ehqp_a, tzo65, b0kw1, k361wt, tz6325, kebh0p) : omxsz5['readFile'](sim4xo, mzo25, new b3tk(web0k, web0k['onReadNativeCallBack'], [mzo25, tzo65, b0kw1, k361wt, tz6325, kebh0p, ehqp_a]), tzo65);
        } else sxo4i['EnvConfig']['load']['call'](this, tzo65, b0kw1, k361wt, tz6325, kebh0p);
      }
    }, k1t3wb['resMgrLoad'] = function (_rhqpa, undjv, hq_epa, pehbk, to265z, dujnv, duvgi4) {
      hq_epa === void 0x0 && (hq_epa = 0x0), pehbk === void 0x0 && (pehbk = ![]), to265z === void 0x0 && (to265z = ![]), dujnv === void 0x0 && (dujnv = 0x0), duvgi4 === void 0x0 && (duvgi4 = 0x3), _rhqpa['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _rhqpa), sxo4i['EnvConfig']['resMgrLoad'](_rhqpa, (w13bk, peh0bk, d4uig) => {
        web0k['prototype']['resMgrLoadCallBack'](w13bk, peh0bk, d4uig, undjv);
      }, hq_epa, pehbk, to265z, dujnv, duvgi4);
    }, k1t3wb['resMgrLoadCallBack'] = function (ujvnfc, t2536, arph, hpr_q) {
      console['log']('buff:::', ujvnfc, arph, omxsz5['fileNativeDir'] + '///' + omxsz5['fileListName']), hpr_q(ujvnfc, t2536, arph);
    }, k1t3wb['clearRes'] = function (hp_qra, gx4si) {
      gx4si === void 0x0 && (gx4si = ![]);var $yl7 = this;$yl7['clearRes'](hp_qra, gx4si);var ms4xig = omxsz5['getFileInfo'](hp_qra);if (ms4xig && (hp_qra['indexOf']('http://') != -0x1 || hp_qra['indexOf']('https://') != -0x1)) {
        var kb3tw1 = ms4xig['md5'],
            pehb0a = omxsz5['getFileNativePath'](kb3tw1);omxsz5['remove'](pehb0a);
      }
    }, web0k['onReadNativeCallBack'] = function (t1623w, k1b3wt, ig4xvd, kb3w1, $7y9l8, djcun, vjcd, m625z, f7l98) {
      kb3w1 === void 0x0 && (kb3w1 = !![]), djcun === void 0x0 && (djcun = ![]), m625z === void 0x0 && (m625z = 0x0);if (!m625z) {
        var qph0;if (ig4xvd == 'json' || ig4xvd == 'atlas') qph0 = sxo4i['getJson'](f7l98['data']);else ig4xvd == 'xml' ? qph0 = u9cjnf['parseXMLFromString'](f7l98['data']) : qph0 = f7l98['data'];vjcd['onLoaded'](qph0), !sxo4i['isZiYu'] && sxo4i['isPosMsgYu'] && ig4xvd != 'arraybuffer' && wx['postMessage']({ 'url': k1b3wt, 'data': qph0, 'isLoad': !![] });
      } else m625z == 0x1 && sxo4i['EnvConfig']['load']['call'](vjcd, k1b3wt, ig4xvd, kb3w1, $7y9l8, djcun);
    }, oxs(web0k, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), web0k;
  }(),
      omxsz5 = function (z6om2) {
    function gvui4d() {
      gvui4d['__super']['call'](this);;
    }return jdvgnu(gvui4d, 'laya.wx.mini.MiniFileMgr', z6om2), gvui4d['isLoadFile'] = function (h_arqp) {
      return gvui4d['_fileTypeArr']['indexOf'](h_arqp) != -0x1 ? !![] : ![];
    }, gvui4d['getFileInfo'] = function (t52z) {
      var k0hpeb = t52z['split']('?')[0x0],
          e10bw = gvui4d['filesListObj'][k0hpeb];if (e10bw == null) return null;else return e10bw;return null;
    }, gvui4d['onFileUpdate'] = function (vigx4, hew) {
      var gjvnu = vigx4['split']('/'),
          _heap = gjvnu[gjvnu['length'] - 0x1],
          s4xmo = gvui4d['getFileInfo'](hew);if (s4xmo == null) gvui4d['onSaveFile'](hew, _heap);else {
        if (s4xmo['readyUrl'] != hew) gvui4d['remove'](_heap, hew);
      }
    }, gvui4d['exits'] = function (hkbe0p, k1tw3b) {
      var njfu9c = gvui4d['getFileNativePath'](hkbe0p);gvui4d['fs']['getFileInfo']({ 'filePath': njfu9c, 'success': function (o6tz2) {
          k1tw3b != null && k1tw3b['runWith']([0x0, o6tz2]);
        }, 'fail': function (ap0qhe) {
          k1tw3b != null && k1tw3b['runWith']([0x1, ap0qhe]);
        } });
    }, gvui4d['read'] = function (diug4, _ahepq, om2sz5, gdi4xs) {
      _ahepq === void 0x0 && (_ahepq = 'ascill'), gdi4xs === void 0x0 && (gdi4xs = '');var k0ebph;gdi4xs != '' ? k0ebph = gvui4d['getFileNativePath'](diug4) : k0ebph = diug4, gvui4d['fs']['readFile']({ 'filePath': k0ebph, 'encoding': _ahepq, 'success': function (z6235) {
          om2sz5 != null && om2sz5['runWith']([0x0, z6235]);
        }, 'fail': function (oz6t) {
          if (oz6t && gdi4xs != '') gvui4d['down'](gdi4xs, _ahepq, om2sz5, gdi4xs);else om2sz5 != null && om2sz5['runWith']([0x1]);
        } });
    }, gvui4d['readNativeFile'] = function (c987f, sx4gim) {
      gvui4d['fs']['readFile']({ 'filePath': c987f, 'encoding': '', 'success': function (w13tbk) {
          sx4gim != null && sx4gim['runWith']([0x0]);
        }, 'fail': function (udg4) {
          sx4gim != null && sx4gim['runWith']([0x1]);
        } });
    }, gvui4d['down'] = function (smio4, y79l8$, w1bk, vcujnf) {
      y79l8$ === void 0x0 && (y79l8$ = 'ascill'), vcujnf === void 0x0 && (vcujnf = '');var o4sx = gvui4d['getFileNativePath'](vcujnf),
          hpqa_e = gvui4d['wxdown']({ 'url': smio4, 'filePath': o4sx, 'success': function ($y87l) {
          if ($y87l['statusCode'] === 0xc8) gvui4d['readFile']($y87l['filePath'], y79l8$, w1bk, vcujnf);
        }, 'fail': function (dnuvg4) {
          w1bk != null && w1bk['runWith']([0x1, dnuvg4]);
        } });hpqa_e['onProgressUpdate'](function (zmixso) {
        w1bk != null && w1bk['runWith']([0x2, zmixso['progress']]);
      });
    }, gvui4d['readFile'] = function (t1w3bk, oxzsm, cnvj, vxg4di) {
      oxzsm === void 0x0 && (oxzsm = 'ascill'), vxg4di === void 0x0 && (vxg4di = ''), gvui4d['fs']['readFile']({ 'filePath': t1w3bk, 'encoding': oxzsm, 'success': function (uvjgd) {
          if (t1w3bk['indexOf']('http://') != -0x1 || t1w3bk['indexOf']('https://') != -0x1) gvui4d['onFileUpdate'](t1w3bk, vxg4di);cnvj != null && cnvj['runWith']([0x0, uvjgd]);
        }, 'fail': function (ufvjnc) {
          if (ufvjnc) cnvj != null && cnvj['runWith']([0x1, ufvjnc]);
        } });
    }, gvui4d['downImg'] = function (ozm625, bkh0pe, pqea_h) {
      pqea_h === void 0x0 && (pqea_h = '');var dvi4xg = gvui4d['wxdown']({ 'url': ozm625, 'success': function (ahp) {
          ahp['statusCode'] === 0xc8 && gvui4d['copyFile'](ahp['tempFilePath'], pqea_h, bkh0pe);
        }, 'fail': function (gx4ivd) {
          bkh0pe != null && bkh0pe['runWith']([0x1, gx4ivd]);
        } });
    }, gvui4d['copyFile'] = function (k10w, w1k36t, gsmx4i) {
      var wb0k1 = k10w['split']('/'),
          ap0qe = wb0k1[wb0k1['length'] - 0x1],
          wtk613 = w1k36t['split']('?')[0x0],
          omx4i = gvui4d['getFileInfo'](w1k36t),
          n4gv = gvui4d['getFileNativePath'](ap0qe);gvui4d['fs']['copyFile']({ 'srcPath': k10w, 'destPath': n4gv, 'success': function (cjf97) {
          if (!omx4i) gvui4d['onSaveFile'](w1k36t, ap0qe), gsmx4i != null && gsmx4i['runWith']([0x0]);else {
            if (omx4i['readyUrl'] != w1k36t) gvui4d['remove'](ap0qe, w1k36t, gsmx4i);
          }
        }, 'fail': function (w01keb) {
          gsmx4i != null && gsmx4i['runWith']([0x1, w01keb]);
        } });
    }, gvui4d['getFileNativePath'] = function (vjcufn) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vjcufn;
    }, gvui4d['remove'] = function (e1bwk, zms5xo, cvndj) {
      zms5xo === void 0x0 && (zms5xo = '');var cnvf = gvui4d['getFileInfo'](zms5xo),
          ucnvf = gvui4d['getFileNativePath'](cnvf['md5']);wb1k03['loader']['clearRes'](cnvf['readyUrl']), gvui4d['fs']['unlink']({ 'filePath': ucnvf, 'success': function (iug4v) {
          if (zms5xo != '') gvui4d['onSaveFile'](zms5xo, e1bwk);cvndj != null && cvndj['runWith']([0x0]);
        }, 'fail': function (eqpha) {} });
    }, gvui4d['onSaveFile'] = function (gxd4vi, phqe) {
      var pb0ha = gxd4vi['split']('?')[0x0];gvui4d['filesListObj'][pb0ha] = { 'md5': phqe, 'readyUrl': gxd4vi }, gvui4d['fs']['writeFile']({ 'filePath': gvui4d['fileNativeDir'] + '/' + gvui4d['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gvui4d['filesListObj']), 'success': function (mz2so5) {
          console['log']('写入测试测试成功：', mz2so5);
        }, 'fail': function (o5z62m) {
          console['log']('写入测试测试失败：', o5z62m);
        } });
    }, gvui4d['existDir'] = function (kbe, io4sx) {
      gvui4d['fs']['mkdir']({ 'dirPath': kbe, 'success': function (qahp0) {
          io4sx != null && io4sx['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (qea0) {
          if (qea0['errMsg']['indexOf']('file already exists') != -0x1) gvui4d['readSync'](gvui4d['fileListName'], 'utf8', io4sx);else io4sx != null && io4sx['runWith']([0x1, qea0]);
        } });
    }, gvui4d['readSync'] = function (aphqr, vd4ug, g4sm, _phqae) {
      vd4ug === void 0x0 && (vd4ug = 'ascill'), _phqae === void 0x0 && (_phqae = '');var h_rqap = gvui4d['getFileNativePath'](aphqr),
          mios4x;try {
        mios4x = gvui4d['fs']['readFileSync'](h_rqap), g4sm != null && g4sm['runWith']([0x0, { 'data': mios4x }]);
      } catch (jcun9) {
        g4sm != null && g4sm['runWith']([0x1]);
      }
    }, gvui4d['readCache'] = function () {}, gvui4d['writeCache'] = function (hkp0eb) {
      var yl7$9 = readyUrl['split']('?')[0x0];gvui4d['filesListObj'][yl7$9] = { 'md5': md5Name, 'readyUrl': readyUrl }, gvui4d['fs']['writeFile']({ 'filePath': gvui4d['fileNativeDir'] + '/' + gvui4d['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gvui4d['filesListObj']), 'success': function (sg4dix) {}, 'fail': function (zso52) {} });
    }, gvui4d['setNativeFileDir'] = function (jvncd) {
      gvui4d['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + jvncd;
    }, gvui4d['filesListObj'] = {}, gvui4d['fileNativeDir'] = null, gvui4d['fileListName'] = 'layaairfiles.txt', gvui4d['ziyuFileData'] = {}, oxs(gvui4d, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), gvui4d;
  }(x4gvdi),
      igd4v = function (gnjdv) {
    function zxosmi() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], zxosmi['__super']['call'](this), this['_sound'] = zxosmi['_createSound']();
    }jdvgnu(zxosmi, 'laya.wx.mini.MiniSound', gnjdv);var t631k = zxosmi['prototype'];return t631k['load'] = function (om5z2) {
      var cudvjn = this;om5z2 = fl8c['formatURL'](om5z2), this['url'] = om5z2;if (zxosmi['_audioCache'][om5z2]) {
        this['event']('complete');return;
      }function oxz5m() {
        if (zxosmi['_null'] != undefined) cudvjn['_sound']['onCanplay'](zxosmi['_null']), cudvjn['_sound']['onError'](zxosmi['_null']);else try {
          cudvjn['_sound']['onCanplay'](null), cudvjn['_sound']['onError'](null), zxosmi['_null'] = null;
        } catch (t63w1k) {
          console['warn']('[wxmini] _clearSound:' + t63w1k), cudvjn['_sound']['onCanplay'](cjf9nu), cudvjn['_sound']['onError'](cjf9nu), zxosmi['_null'] = cjf9nu;
        }
      }function lj7() {
        oxz5m(), h_qr['loaded'] = !![], h_qr['event']('complete'), zxosmi['_audioCache'][h_qr['url']] = h_qr;
      }function dui4gv(jdcvnu) {
        console['error']('errCode=' + jdcvnu['errCode'] + '  errMsg=' + jdcvnu['errMsg']), oxz5m(), h_qr['event']('error');
      }function cjf9nu() {}this['_sound']['onCanplay'](lj7), this['_sound']['onError'](dui4gv), this['_sound']['src'] = om5z2;var h_qr = this;
    }, t631k['play'] = function (vucnf, nvgd4) {
      vucnf === void 0x0 && (vucnf = 0x0), nvgd4 === void 0x0 && (nvgd4 = 0x0);var jfnu9;if (this['url'] == xi4dgs['_tMusic']) {
        if (!zxosmi['_musicAudio']) zxosmi['_musicAudio'] = zxosmi['_createSound']();jfnu9 = zxosmi['_musicAudio'];
      } else jfnu9 = zxosmi['_createSound']();jfnu9['src'] = this['url'];var i4os = new fuvj(jfnu9);return i4os['url'] = this['url'], i4os['loops'] = nvgd4, i4os['startTime'] = vucnf, i4os['play'](), xi4dgs['addChannel'](i4os), i4os;
    }, t631k['dispose'] = function () {
      var gxim4 = zxosmi['_audioCache'][this['url']];gxim4 && (gxim4['src'] = '', delete zxosmi['_audioCache'][this['url']]);
    }, vcjf(0x0, t631k, 'duration', function () {
      return this['_sound']['duration'];
    }), zxosmi['_createSound'] = function () {
      return zxosmi['_id']++, sxo4i['window']['wx']['createInnerAudioContext']();
    }, zxosmi['_musicAudio'] = null, zxosmi['_id'] = 0x0, zxosmi['_audioCache'] = {}, zxosmi['_null'] = undefined, zxosmi;
  }(x4gvdi),
      fuvj = function (j9nlcf) {
    function zom562(lncfj9) {
      this['_audio'] = null, this['_onEnd'] = null, zom562['__super']['call'](this), this['_audio'] = lncfj9, this['_onEnd'] = u9cjnf['bind'](this['__onEnd'], this), lncfj9['onEnded'](this['_onEnd']);
    }jdvgnu(zom562, 'laya.wx.mini.MiniSoundChannel', j9nlcf);var jfncv = zom562['prototype'];return jfncv['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (wb1k03['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jfncv['__onNull'] = function () {}, jfncv['play'] = function () {
      this['isStopped'] = ![], xi4dgs['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, jfncv['stop'] = function () {
      this['isStopped'] = !![], xi4dgs['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (zom562['_null'] != undefined) this['_audio']['onEnded'](zom562['_null']);else try {
        this['_audio']['onEnded'](null), zom562['_null'] = null;
      } catch (isx4g) {
        console['warn']('[wxmini] stop:' + isx4g), this['_audio']['onEnded'](u9cjnf['bind'](this['__onNull'], this)), zom562['_null'] = u9cjnf['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, jfncv['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, jfncv['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xi4dgs['addChannel'](this), this['_audio']['play']();
    }, vcjf(0x0, jfncv, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), vcjf(0x0, jfncv, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), vcjf(0x0, jfncv, 'volume', function () {
      return 0x1;
    }, function (b1k0we) {}), zom562['_null'] = undefined, zom562;
  }(oxims4);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var qeap0 in Laya) {
    var vdungj = Laya[qeap0];vdungj && vdungj['__isclass'] && (exports[qeap0] = vdungj);
  }
});