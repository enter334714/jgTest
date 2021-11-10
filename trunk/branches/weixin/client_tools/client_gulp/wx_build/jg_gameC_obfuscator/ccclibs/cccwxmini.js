var p = wx.$h;
(function (window, document, yob$) {
  var pw374 = yob$['un'],
      g2v_n = yob$['uns'],
      $yeib6 = yob$['static'],
      _hgxv0 = yob$['class'],
      nxg2 = yob$['getset'],
      tds5c = yob$['__newvec'],
      w2nvr = laya['utils']['Browser'],
      bye$6i = laya['events']['Event'],
      fs3t1 = laya['events']['EventDispatcher'],
      zqbyo = laya['resource']['HTMLImage'],
      j7t4f = laya['utils']['Handler'],
      ms51d = laya['display']['Input'],
      _h08gv = laya['net']['Loader'],
      xn_2vg = laya['maths']['Matrix'],
      nxv_r2 = laya['renders']['Render'],
      yk$i6e = laya['utils']['RunDriver'],
      gn2xv_ = laya['media']['Sound'],
      y$6bei = laya['media']['SoundChannel'],
      yzb9oq = laya['media']['SoundManager'],
      oz9yi = laya['display']['Stage'],
      q9oby = laya['net']['URL'],
      sftc1j = laya['utils']['Utils'],
      j3t4f = function () {
    function yi9ebo() {}return _hgxv0(yi9ebo, 'laya.wx.mini.MiniAdpter'), yi9ebo['getJson'] = function (awnpr) {
      return JSON['parse'](awnpr);
    }, yi9ebo['init'] = function (a47fp3, x2rpw) {
      a47fp3 === void 0x0 && (a47fp3 = ![]), x2rpw === void 0x0 && (x2rpw = ![]);if (yi9ebo['_inited']) return;yi9ebo['window'] = window;if (yi9ebo['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;yi9ebo['_inited'] = !![], yi9ebo['isZiYu'] = x2rpw, yi9ebo['isPosMsgYu'] = a47fp3, yi9ebo['EnvConfig'] = {}, !yi9ebo['isZiYu'] && (c5t1s['setNativeFileDir']('/layaairGame'), c5t1s['existDir'](c5t1s['fileNativeDir'], j7t4f['create'](yi9ebo, yi9ebo['onMkdirCallBack']))), yi9ebo['window']['focus'] = function () {}, yob$['getUrlPath'] = function () {}, yi9ebo['window']['logtime'] = function (y9zib) {}, yi9ebo['window']['alertTimeLog'] = function (f347t) {}, yi9ebo['window']['resetShareInfo'] = function () {}, yi9ebo['window']['CanvasRenderingContext2D'] = function () {}, yi9ebo['window']['CanvasRenderingContext2D']['prototype'] = yi9ebo['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yi9ebo['window']['document']['body']['appendChild'] = function () {}, yi9ebo['EnvConfig']['pixelRatioInt'] = 0x0, yk$i6e['getPixelRatio'] = yi9ebo['pixelRatio'], yi9ebo['_preCreateElement'] = w2nvr['createElement'], w2nvr['createElement'] = yi9ebo['createElement'], yk$i6e['createShaderCondition'] = yi9ebo['createShaderCondition'], sftc1j['parseXMLFromString'] = yi9ebo['parseXMLFromString'], ms51d['_createInputElement'] = b$yie['_createInputElement'], yi9ebo['EnvConfig']['load'] = _h08gv['prototype']['load'], _h08gv['prototype']['load'] = mdcsl5['prototype']['load'], yi9ebo['isZiYu'] && a47fp3 && wx['onMessage'](function ($k8h0) {
        $k8h0['isLoad'] && (c5t1s['ziyuFileData'][$k8h0['url']] = $k8h0['data']);
      });
    }, yi9ebo['onMkdirCallBack'] = function (e$hk68, oqzyb) {
      if (!e$hk68) c5t1s['filesListObj'] = JSON['parse'](oqzyb['data']);
    }, yi9ebo['pixelRatio'] = function () {
      if (!yi9ebo['EnvConfig']['pixelRatioInt']) try {
        var yqoz9b = wx['getSystemInfoSync']();return yi9ebo['EnvConfig']['pixelRatioInt'] = yqoz9b['pixelRatio'], yqoz9b = yqoz9b, yqoz9b['pixelRatio'];
      } catch (f43jt7) {}return yi9ebo['EnvConfig']['pixelRatioInt'];
    }, yi9ebo['createElement'] = function (gv_20) {
      if (gv_20 == 'canvas') {
        var x2_v0g;return yi9ebo['idx'] == 0x1 ? yi9ebo['isZiYu'] ? (x2_v0g = sharedCanvas, x2_v0g['style'] = {}) : x2_v0g = window['canvas'] : x2_v0g = window['wx']['createCanvas'](), yi9ebo['idx']++, x2_v0g;
      } else {
        if (gv_20 == 'textarea' || gv_20 == 'input') return yi9ebo['onCreateInput'](gv_20);else {
          if (gv_20 == 'div') {
            var i8k$ = yi9ebo['_preCreateElement'](gv_20);return i8k$['contains'] = function (r2wpa) {
              return null;
            }, i8k$['removeChild'] = function ($boyi) {}, i8k$;
          } else return yi9ebo['_preCreateElement'](gv_20);
        }
      }
    }, yi9ebo['onCreateInput'] = function (beoyi$) {
      var oq9z = yi9ebo['_preCreateElement'](beoyi$);return oq9z['focus'] = b$yie['wxinputFocus'], oq9z['blur'] = b$yie['wxinputblur'], oq9z['style'] = {}, oq9z['value'] = 0x0, oq9z['parentElement'] = {}, oq9z['placeholder'] = {}, oq9z['type'] = {}, oq9z['setColor'] = function (eyik6) {}, oq9z['setType'] = function (j1ft3s) {}, oq9z['setFontFace'] = function (tds51c) {}, oq9z['addEventListener'] = function (jfsc1) {}, oq9z['contains'] = function (y$i) {
        return null;
      }, oq9z['removeChild'] = function (rw2pxn) {}, oq9z;
    }, yi9ebo['createShaderCondition'] = function (prn2x) {
      var g8_0kh = this,
          o9eyi = function () {
        var cjt15 = prn2x;return g8_0kh[prn2x['replace']('this.', '')];
      };return o9eyi;
    }, yi9ebo['EnvConfig'] = null, yi9ebo['window'] = null, yi9ebo['_preCreateElement'] = null, yi9ebo['_inited'] = ![], yi9ebo['wxRequest'] = null, yi9ebo['systemInfo'] = null, yi9ebo['version'] = '0.0.1', yi9ebo['isZiYu'] = ![], yi9ebo['isPosMsgYu'] = ![], yi9ebo['parseXMLFromString'] = function (eyobi) {
      var e$6ky, a473fj;eyobi = eyobi['replace'](/>\s+</g, '><');try {
        e$6ky = new window['Parser']['DOMParser']()['parseFromString'](eyobi, 'text/xml');
      } catch ($6keiy) {
        throw '需要引入xml解析库文件';
      }return e$6ky;
    }, yi9ebo['idx'] = 0x1, yi9ebo;
  }(),
      ei8k$ = function () {
    function rwpan4() {}_hgxv0(rwpan4, 'laya.wx.mini.MiniImage');var d5smc = rwpan4['prototype'];return d5smc['_loadImage'] = function (bi6y$e) {
      var p2rnx = this,
          n_vxg = ![];bi6y$e['indexOf']('layaNativeDir/') == -0x1 && (n_vxg = !![], bi6y$e = q9oby['formatURL'](bi6y$e));if (!c5t1s['getFileInfo'](bi6y$e)) {
        if (bi6y$e['indexOf']('http://') != -0x1 || bi6y$e['indexOf']('https://') != -0x1) c5t1s['downImg'](bi6y$e, new j7t4f(rwpan4, rwpan4['onDownImgCallBack'], [bi6y$e, p2rnx]), bi6y$e);else rwpan4['onCreateImage'](bi6y$e, p2rnx, !![]);
      } else rwpan4['onCreateImage'](bi6y$e, p2rnx, !n_vxg);
    }, rwpan4['onDownImgCallBack'] = function (s5clmd, x_2gv0, a73f4) {
      if (!a73f4) rwpan4['onCreateImage'](s5clmd, x_2gv0);else x_2gv0['onError'](null);
    }, rwpan4['onCreateImage'] = function (t5j1s, xvr_n2, h6$k80) {
      h6$k80 === void 0x0 && (h6$k80 = ![]);var awr7p4;if (!h6$k80) {
        var paw4 = c5t1s['getFileInfo'](t5j1s),
            kh8g0 = paw4['md5'];awr7p4 = c5t1s['getFileNativePath'](kh8g0);
      } else awr7p4 = t5j1s;if (xvr_n2['imgCache'] == null) xvr_n2['imgCache'] = {};var vng2_;function w2rxv() {
        vng2_['onload'] = null, vng2_['onerror'] = null, delete xvr_n2['imgCache'][t5j1s];
      };var nwvx = function () {
        w2rxv(), xvr_n2['onLoaded'](vng2_);
      },
          _vg2n = function () {
        w2rxv(), xvr_n2['event']('error', 'Load image failed');
      };xvr_n2['_type'] == 'nativeimage' ? (vng2_ = new w2nvr['window']['Image'](), vng2_['crossOrigin'] = '', vng2_['onload'] = nwvx, vng2_['onerror'] = _vg2n, vng2_['src'] = awr7p4, xvr_n2['imgCache'][t5j1s] = vng2_) : new zqbyo['create'](awr7p4, { 'onload': nwvx, 'onerror': _vg2n, 'onCreate': function (gh_v) {
          vng2_ = gh_v, xvr_n2['imgCache'][t5j1s] = gh_v;
        } });
    }, rwpan4;
  }(),
      b$yie = function () {
    function w7r4() {}return _hgxv0(w7r4, 'laya.wx.mini.MiniInput'), w7r4['_createInputElement'] = function () {
      ms51d['_initInput'](ms51d['area'] = w2nvr['createElement']('textarea')), ms51d['_initInput'](ms51d['input'] = w2nvr['createElement']('input')), ms51d['inputContainer'] = w2nvr['createElement']('div'), ms51d['inputContainer']['style']['position'] = 'absolute', ms51d['inputContainer']['style']['zIndex'] = 0x186a0, w2nvr['container']['appendChild'](ms51d['inputContainer']), ms51d['inputContainer']['setPos'] = function (s51, cs5j1t) {
        ms51d['inputContainer']['style']['left'] = s51 + 'px', ms51d['inputContainer']['style']['top'] = cs5j1t + 'px';
      }, yob$['stage']['on']('resize', null, w7r4['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (g80_hk) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), yzb9oq['_soundClass'] = rpx2w, yzb9oq['_musicClass'] = rpx2w;
    }, w7r4['_onStageResize'] = function () {
      var pwan = yob$['stage']['_canvasTransform']['identity']();pwan['scale'](w2nvr['width'] / nxv_r2['canvas']['width'] / yk$i6e['getPixelRatio'](), w2nvr['height'] / nxv_r2['canvas']['height'] / yk$i6e['getPixelRatio']());
    }, w7r4['wxinputFocus'] = function (_0gvh8) {
      var cs1jft = ms51d['inputElement']['target'];if (cs1jft && !cs1jft['editable']) return;j3t4f['window']['wx']['offKeyboardConfirm'](), j3t4f['window']['wx']['offKeyboardInput'](), j3t4f['window']['wx']['showKeyboard']({ 'defaultValue': cs1jft['text'], 'maxLength': cs1jft['maxChars'], 'multiple': cs1jft['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (f1t3j7) {}, 'fail': function (wp7r) {} }), j3t4f['window']['wx']['onKeyboardConfirm'](function (hk68$0) {
        var $yieb = hk68$0 ? hk68$0['value'] : '';cs1jft['text'] = $yieb, cs1jft['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), j3t4f['window']['wx']['onKeyboardInput'](function (s1md) {
        var aw = s1md ? s1md['value'] : '';if (!cs1jft['multiline']) {
          if (aw['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }cs1jft['text'] = aw, cs1jft['event']('input');
      });
    }, w7r4['inputEnter'] = function () {
      ms51d['inputElement']['target']['focus'] = ![];
    }, w7r4['wxinputblur'] = function () {
      w7r4['hideKeyboard']();
    }, w7r4['hideKeyboard'] = function () {
      j3t4f['window']['wx']['offKeyboardConfirm'](), j3t4f['window']['wx']['offKeyboardInput'](), j3t4f['window']['wx']['hideKeyboard']({ 'success': function (rnp4aw) {
          console['log']('隐藏键盘');
        }, 'fail': function (r4n) {
          console['log']('隐藏键盘出错:' + (r4n ? r4n['errMsg'] : ''));
        } });
    }, w7r4;
  }(),
      mdcsl5 = function () {
    function w2pran() {}_hgxv0(w2pran, 'laya.wx.mini.MiniLoader');var pwnar2 = w2pran['prototype'];return pwnar2['load'] = function (gx_h0v, rv_n, f4ap73, xvg0_2, c1smd5) {
      f4ap73 === void 0x0 && (f4ap73 = !![]), c1smd5 === void 0x0 && (c1smd5 = ![]);var pa4w7 = this;pa4w7['_url'] = gx_h0v;if (gx_h0v['indexOf']('data:image') === 0x0) pa4w7['_type'] = rv_n = 'image';else pa4w7['_type'] = rv_n || (rv_n = pa4w7['getTypeFromUrl'](gx_h0v));pa4w7['_cache'] = f4ap73, pa4w7['_data'] = null;var hk8$e6 = 'ascii';if (gx_h0v['indexOf']('.fnt') != -0x1) hk8$e6 = 'utf8';else rv_n == 'arraybuffer' && (hk8$e6 = '');;var xgh0_ = sftc1j['getFileExtension'](gx_h0v);if (w2pran['_fileTypeArr']['indexOf'](xgh0_) != -0x1) j3t4f['EnvConfig']['load']['call'](this, gx_h0v, rv_n, f4ap73, xvg0_2, c1smd5);else {
        if (!c5t1s['getFileInfo'](gx_h0v)) {
          if (gx_h0v['indexOf']('layaNativeDir/') != -0x1) {
            if (j3t4f['isZiYu']) {
              var b9o = c5t1s['ziyuFileData'][gx_h0v];pa4w7['onLoaded'](b9o);return;
            } else {
              cosnole['log']('read read'), c5t1s['read'](gx_h0v, hk8$e6, new j7t4f(w2pran, w2pran['onReadNativeCallBack'], [hk8$e6, gx_h0v, rv_n, f4ap73, xvg0_2, c1smd5, pa4w7]));return;
            }
          }if (q9oby['rootPath'] == '') var iboz9 = gx_h0v;else iboz9 = gx_h0v['split'](q9oby['rootPath'])[0x0];gx_h0v['indexOf']('http://') != -0x1 || gx_h0v['indexOf']('https://') != -0x1 ? j3t4f['EnvConfig']['load']['call'](pa4w7, gx_h0v, rv_n, f4ap73, xvg0_2, c1smd5) : c5t1s['readFile'](iboz9, hk8$e6, new j7t4f(w2pran, w2pran['onReadNativeCallBack'], [hk8$e6, gx_h0v, rv_n, f4ap73, xvg0_2, c1smd5, pa4w7]), gx_h0v);
        } else j3t4f['EnvConfig']['load']['call'](this, gx_h0v, rv_n, f4ap73, xvg0_2, c1smd5);
      }
    }, pwnar2['resMgrLoad'] = function (wnrx2p, cfjs1, c1mds5, i$6ke8, pxn2, rwan2p, xg_v02) {
      c1mds5 === void 0x0 && (c1mds5 = 0x0), i$6ke8 === void 0x0 && (i$6ke8 = ![]), pxn2 === void 0x0 && (pxn2 = ![]), rwan2p === void 0x0 && (rwan2p = 0x0), xg_v02 === void 0x0 && (xg_v02 = 0x3), wnrx2p['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', wnrx2p), j3t4f['EnvConfig']['resMgrLoad'](wnrx2p, (wrx2v, tcfs1j, dt1c) => {
        w2pran['prototype']['resMgrLoadCallBack'](wrx2v, tcfs1j, dt1c, cfjs1);
      }, c1mds5, i$6ke8, pxn2, rwan2p, xg_v02);
    }, pwnar2['resMgrLoadCallBack'] = function (w47pr, bozyq9, wa7p, r4wan) {
      console['log']('buff:::', w47pr, wa7p, c5t1s['fileNativeDir'] + '///' + c5t1s['fileListName']), r4wan(w47pr, bozyq9, wa7p);
    }, pwnar2['clearRes'] = function (_08g, e8ik$6) {
      e8ik$6 === void 0x0 && (e8ik$6 = ![]);var oqzyb9 = this;oqzyb9['clearRes'](_08g, e8ik$6);var k08g6h = c5t1s['getFileInfo'](_08g);if (k08g6h && (_08g['indexOf']('http://') != -0x1 || _08g['indexOf']('https://') != -0x1)) {
        var c5lmds = k08g6h['md5'],
            cjst51 = c5t1s['getFileNativePath'](c5lmds);c5t1s['remove'](cjst51);
      }
    }, w2pran['onReadNativeCallBack'] = function (yz9q, fstj31, csml5d, pn4war, h_k08g, h8ke$, _8v0, dm5csl, scjft) {
      pn4war === void 0x0 && (pn4war = !![]), h8ke$ === void 0x0 && (h8ke$ = ![]), dm5csl === void 0x0 && (dm5csl = 0x0);if (!dm5csl) {
        var b9oyqz;if (csml5d == 'json' || csml5d == 'atlas') b9oyqz = j3t4f['getJson'](scjft['data']);else csml5d == 'xml' ? b9oyqz = sftc1j['parseXMLFromString'](scjft['data']) : b9oyqz = scjft['data'];_8v0['onLoaded'](b9oyqz), !j3t4f['isZiYu'] && j3t4f['isPosMsgYu'] && csml5d != 'arraybuffer' && wx['postMessage']({ 'url': fstj31, 'data': b9oyqz, 'isLoad': !![] });
      } else dm5csl == 0x1 && j3t4f['EnvConfig']['load']['call'](_8v0, fstj31, csml5d, pn4war, h_k08g, h8ke$);
    }, $yeib6(w2pran, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), w2pran;
  }(),
      c5t1s = function (eiby$6) {
    function fj731t() {
      fj731t['__super']['call'](this);;
    }return _hgxv0(fj731t, 'laya.wx.mini.MiniFileMgr', eiby$6), fj731t['isLoadFile'] = function (jf1ts3) {
      return fj731t['_fileTypeArr']['indexOf'](jf1ts3) != -0x1 ? !![] : ![];
    }, fj731t['getFileInfo'] = function (bzyo) {
      var fp7a3 = bzyo['split']('?')[0x0],
          r7aw4p = fj731t['filesListObj'][fp7a3];if (r7aw4p == null) return null;else return r7aw4p;return null;
    }, fj731t['onFileUpdate'] = function (k6$eh, ki$8e) {
      var _rx2v = k6$eh['split']('/'),
          pna4 = _rx2v[_rx2v['length'] - 0x1],
          kiy6e = fj731t['getFileInfo'](ki$8e);if (kiy6e == null) fj731t['onSaveFile'](ki$8e, pna4);else {
        if (kiy6e['readyUrl'] != ki$8e) fj731t['remove'](pna4, ki$8e);
      }
    }, fj731t['exits'] = function (np2ar, vr2nx_) {
      var x_h0v = fj731t['getFileNativePath'](np2ar);fj731t['fs']['getFileInfo']({ 'filePath': x_h0v, 'success': function (t1cs5) {
          vr2nx_ != null && vr2nx_['runWith']([0x0, t1cs5]);
        }, 'fail': function (arn4) {
          vr2nx_ != null && vr2nx_['runWith']([0x1, arn4]);
        } });
    }, fj731t['read'] = function (rx2, k0g6h8, v2xn_r, wnxrp2) {
      k0g6h8 === void 0x0 && (k0g6h8 = 'ascill'), wnxrp2 === void 0x0 && (wnxrp2 = '');var xrw2vn;wnxrp2 != '' ? xrw2vn = fj731t['getFileNativePath'](rx2) : xrw2vn = rx2, fj731t['fs']['readFile']({ 'filePath': xrw2vn, 'encoding': k0g6h8, 'success': function (oyibz) {
          v2xn_r != null && v2xn_r['runWith']([0x0, oyibz]);
        }, 'fail': function (rwa4p) {
          if (rwa4p && wnxrp2 != '') fj731t['down'](wnxrp2, k0g6h8, v2xn_r, wnxrp2);else v2xn_r != null && v2xn_r['runWith']([0x1]);
        } });
    }, fj731t['readNativeFile'] = function (p4a, tj5s1c) {
      fj731t['fs']['readFile']({ 'filePath': p4a, 'encoding': '', 'success': function (a74wr) {
          tj5s1c != null && tj5s1c['runWith']([0x0]);
        }, 'fail': function (ey) {
          tj5s1c != null && tj5s1c['runWith']([0x1]);
        } });
    }, fj731t['down'] = function (g0h_8v, np4a, h$86, q9yo) {
      np4a === void 0x0 && (np4a = 'ascill'), q9yo === void 0x0 && (q9yo = '');var h8$ek = fj731t['getFileNativePath'](q9yo),
          k86 = fj731t['wxdown']({ 'url': g0h_8v, 'filePath': h8$ek, 'success': function (i$boey) {
          if (i$boey['statusCode'] === 0xc8) fj731t['readFile'](i$boey['filePath'], np4a, h$86, q9yo);
        }, 'fail': function (rvw) {
          h$86 != null && h$86['runWith']([0x1, rvw]);
        } });k86['onProgressUpdate'](function (wrnp2a) {
        h$86 != null && h$86['runWith']([0x2, wrnp2a['progress']]);
      });
    }, fj731t['readFile'] = function (_vgnx2, jsct1f, h0_gk8, wnrvx) {
      jsct1f === void 0x0 && (jsct1f = 'ascill'), wnrvx === void 0x0 && (wnrvx = ''), fj731t['fs']['readFile']({ 'filePath': _vgnx2, 'encoding': jsct1f, 'success': function (s1d) {
          if (_vgnx2['indexOf']('http://') != -0x1 || _vgnx2['indexOf']('https://') != -0x1) fj731t['onFileUpdate'](_vgnx2, wnrvx);h0_gk8 != null && h0_gk8['runWith']([0x0, s1d]);
        }, 'fail': function (_n2vxg) {
          if (_n2vxg) h0_gk8 != null && h0_gk8['runWith']([0x1, _n2vxg]);
        } });
    }, fj731t['downImg'] = function (k0gh68, yoz9bq, rn4pa) {
      rn4pa === void 0x0 && (rn4pa = '');var t15cj = fj731t['wxdown']({ 'url': k0gh68, 'success': function (iby$e) {
          iby$e['statusCode'] === 0xc8 && fj731t['copyFile'](iby$e['tempFilePath'], rn4pa, yoz9bq);
        }, 'fail': function (gx_nv2) {
          yoz9bq != null && yoz9bq['runWith']([0x1, gx_nv2]);
        } });
    }, fj731t['copyFile'] = function (_g0v, wrpn2x, ctfsj) {
      var sdcm51 = _g0v['split']('/'),
          ms1c = sdcm51[sdcm51['length'] - 0x1],
          cs5md1 = wrpn2x['split']('?')[0x0],
          yk$e6 = fj731t['getFileInfo'](wrpn2x),
          yz9bio = fj731t['getFileNativePath'](ms1c);fj731t['fs']['copyFile']({ 'srcPath': _g0v, 'destPath': yz9bio, 'success': function (g8_0) {
          if (!yk$e6) fj731t['onSaveFile'](wrpn2x, ms1c), ctfsj != null && ctfsj['runWith']([0x0]);else {
            if (yk$e6['readyUrl'] != wrpn2x) fj731t['remove'](ms1c, wrpn2x, ctfsj);
          }
        }, 'fail': function (r2n_xv) {
          ctfsj != null && ctfsj['runWith']([0x1, r2n_xv]);
        } });
    }, fj731t['getFileNativePath'] = function (nw2v) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + nw2v;
    }, fj731t['remove'] = function (nv_2rx, rwpn4, h80vg_) {
      rwpn4 === void 0x0 && (rwpn4 = '');var oq9 = fj731t['getFileInfo'](rwpn4),
          hkg860 = fj731t['getFileNativePath'](oq9['md5']);yob$['loader']['clearRes'](oq9['readyUrl']), fj731t['fs']['unlink']({ 'filePath': hkg860, 'success': function (hgv80) {
          if (rwpn4 != '') fj731t['onSaveFile'](rwpn4, nv_2rx);h80vg_ != null && h80vg_['runWith']([0x0]);
        }, 'fail': function (v_2xng) {} });
    }, fj731t['onSaveFile'] = function (i6ek, bzq) {
      var n_vx = i6ek['split']('?')[0x0];fj731t['filesListObj'][n_vx] = { 'md5': bzq, 'readyUrl': i6ek }, fj731t['fs']['writeFile']({ 'filePath': fj731t['fileNativeDir'] + '/' + fj731t['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fj731t['filesListObj']), 'success': function (pa47r) {
          console['log']('写入测试测试成功：', pa47r);
        }, 'fail': function (_2rv) {
          console['log']('写入测试测试失败：', _2rv);
        } });
    }, fj731t['existDir'] = function (iby6, xgn2v_) {
      fj731t['fs']['mkdir']({ 'dirPath': iby6, 'success': function ($y6bi) {
          xgn2v_ != null && xgn2v_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (scd1t5) {
          if (scd1t5['errMsg']['indexOf']('file already exists') != -0x1) fj731t['readSync'](fj731t['fileListName'], 'utf8', xgn2v_);else xgn2v_ != null && xgn2v_['runWith']([0x1, scd1t5]);
        } });
    }, fj731t['readSync'] = function (_nxvr, w4n, fj3s1, cms1) {
      w4n === void 0x0 && (w4n = 'ascill'), cms1 === void 0x0 && (cms1 = '');var j1tfc = fj731t['getFileNativePath'](_nxvr),
          beoiy9;try {
        beoiy9 = fj731t['fs']['readFileSync'](j1tfc), fj3s1 != null && fj3s1['runWith']([0x0, { 'data': beoiy9 }]);
      } catch (an4pr) {
        fj3s1 != null && fj3s1['runWith']([0x1]);
      }
    }, fj731t['readCache'] = function () {}, fj731t['writeCache'] = function (r2nvx) {
      var h0g_v = readyUrl['split']('?')[0x0];fj731t['filesListObj'][h0g_v] = { 'md5': md5Name, 'readyUrl': readyUrl }, fj731t['fs']['writeFile']({ 'filePath': fj731t['fileNativeDir'] + '/' + fj731t['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fj731t['filesListObj']), 'success': function (x2_vnr) {}, 'fail': function (wp7a34) {} });
    }, fj731t['setNativeFileDir'] = function (dsm5cl) {
      fj731t['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + dsm5cl;
    }, fj731t['filesListObj'] = {}, fj731t['fileNativeDir'] = null, fj731t['fileListName'] = 'layaairfiles.txt', fj731t['ziyuFileData'] = {}, $yeib6(fj731t, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), fj731t;
  }(fs3t1),
      rpx2w = function (f1jts) {
    function kyei$() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], kyei$['__super']['call'](this), this['_sound'] = kyei$['_createSound']();
    }_hgxv0(kyei$, 'laya.wx.mini.MiniSound', f1jts);var rwan4 = kyei$['prototype'];return rwan4['load'] = function (_2v0gx) {
      var afj743 = this;_2v0gx = q9oby['formatURL'](_2v0gx), this['url'] = _2v0gx;if (kyei$['_audioCache'][_2v0gx]) {
        this['event']('complete');return;
      }function oizby9() {
        if (kyei$['_null'] != undefined) afj743['_sound']['onCanplay'](kyei$['_null']), afj743['_sound']['onError'](kyei$['_null']);else try {
          afj743['_sound']['onCanplay'](null), afj743['_sound']['onError'](null), kyei$['_null'] = null;
        } catch (t4j3f) {
          console['warn']('[wxmini] _clearSound:' + t4j3f), afj743['_sound']['onCanplay']($6he8k), afj743['_sound']['onError']($6he8k), kyei$['_null'] = $6he8k;
        }
      }function scd5ml() {
        oizby9(), _g0x2['loaded'] = !![], _g0x2['event']('complete'), kyei$['_audioCache'][_g0x2['url']] = _g0x2;
      }function ek8i(m5sl) {
        console['error']('errCode=' + m5sl['errCode'] + '  errMsg=' + m5sl['errMsg']), oizby9(), _g0x2['event']('error');
      }function $6he8k() {}this['_sound']['onCanplay'](scd5ml), this['_sound']['onError'](ek8i), this['_sound']['src'] = _2v0gx;var _g0x2 = this;
    }, rwan4['play'] = function (be9oy, nxv_) {
      be9oy === void 0x0 && (be9oy = 0x0), nxv_ === void 0x0 && (nxv_ = 0x0);var wnp2rx;if (this['url'] == yzb9oq['_tMusic']) {
        if (!kyei$['_musicAudio']) kyei$['_musicAudio'] = kyei$['_createSound']();wnp2rx = kyei$['_musicAudio'];
      } else wnp2rx = kyei$['_createSound']();wnp2rx['src'] = this['url'];var r2npx = new w34a(wnp2rx);return r2npx['url'] = this['url'], r2npx['loops'] = nxv_, r2npx['startTime'] = be9oy, r2npx['play'](), yzb9oq['addChannel'](r2npx), r2npx;
    }, rwan4['dispose'] = function () {
      var aw43p = kyei$['_audioCache'][this['url']];aw43p && (aw43p['src'] = '', delete kyei$['_audioCache'][this['url']]);
    }, nxg2(0x0, rwan4, 'duration', function () {
      return this['_sound']['duration'];
    }), kyei$['_createSound'] = function () {
      return kyei$['_id']++, j3t4f['window']['wx']['createInnerAudioContext']();
    }, kyei$['_musicAudio'] = null, kyei$['_id'] = 0x0, kyei$['_audioCache'] = {}, kyei$['_null'] = undefined, kyei$;
  }(fs3t1),
      w34a = function (a47p3w) {
    function e8$ik(ft3j7) {
      this['_audio'] = null, this['_onEnd'] = null, e8$ik['__super']['call'](this), this['_audio'] = ft3j7, this['_onEnd'] = sftc1j['bind'](this['__onEnd'], this), ft3j7['onEnded'](this['_onEnd']);
    }_hgxv0(e8$ik, 'laya.wx.mini.MiniSoundChannel', a47p3w);var an4wrp = e8$ik['prototype'];return an4wrp['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (yob$['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, an4wrp['__onNull'] = function () {}, an4wrp['play'] = function () {
      this['isStopped'] = ![], yzb9oq['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, an4wrp['stop'] = function () {
      this['isStopped'] = !![], yzb9oq['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (e8$ik['_null'] != undefined) this['_audio']['onEnded'](e8$ik['_null']);else try {
        this['_audio']['onEnded'](null), e8$ik['_null'] = null;
      } catch (e8$k6h) {
        console['warn']('[wxmini] stop:' + e8$k6h), this['_audio']['onEnded'](sftc1j['bind'](this['__onNull'], this)), e8$ik['_null'] = sftc1j['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, an4wrp['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, an4wrp['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], yzb9oq['addChannel'](this), this['_audio']['play']();
    }, nxg2(0x0, an4wrp, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), nxg2(0x0, an4wrp, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), nxg2(0x0, an4wrp, 'volume', function () {
      return 0x1;
    }, function (wn4rp) {}), e8$ik['_null'] = undefined, e8$ik;
  }(y$6bei);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var iboy$e in Laya) {
    var tjf47 = Laya[iboy$e];tjf47 && tjf47['__isclass'] && (exports[iboy$e] = tjf47);
  }
});