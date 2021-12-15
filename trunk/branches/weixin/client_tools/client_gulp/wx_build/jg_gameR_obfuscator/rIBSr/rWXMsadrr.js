var I = wx.$R;
(function (window, document, xts32z) {
  var vt0s3 = xts32z['un'],
      qgr = xts32z['uns'],
      c5nf6d = xts32z['static'],
      bu$91 = xts32z['class'],
      qegd = xts32z['getset'],
      jizsx2 = xts32z['__newvec'],
      sz3t = laya['utils']['Browser'],
      kmywr = laya['events']['Event'],
      s3zt2 = laya['events']['EventDispatcher'],
      r7m8w = laya['resource']['HTMLImage'],
      dnpq = laya['utils']['Handler'],
      $b1ua9 = laya['display']['Input'],
      zjx2io = laya['net']['Loader'],
      cnf5dp = laya['maths']['Matrix'],
      $b_au1 = laya['renders']['Render'],
      ch_6u5 = laya['utils']['RunDriver'],
      moywk8 = laya['media']['Sound'],
      hc5n = laya['media']['SoundChannel'],
      sij2x = laya['media']['SoundManager'],
      y8mkwo = laya['display']['Stage'],
      l30ts = laya['net']['URL'],
      tsvz3 = laya['utils']['Utils'],
      d7qegp = function () {
    function i2joxy() {}return bu$91(i2joxy, 'laya.wx.mini.MiniAdpter'), i2joxy['getJson'] = function (okiy) {
      return JSON['parse'](okiy);
    }, i2joxy['init'] = function (m87rk, i2sjxz) {
      m87rk === void 0x0 && (m87rk = ![]), i2sjxz === void 0x0 && (i2sjxz = ![]);if (i2joxy['_inited']) return;i2joxy['window'] = window;if (i2joxy['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;i2joxy['_inited'] = !![], i2joxy['isZiYu'] = i2sjxz, i2joxy['isPosMsgYu'] = m87rk, i2joxy['EnvConfig'] = {}, !i2joxy['isZiYu'] && (mqgre7['setNativeFileDir']('/layaairGame'), mqgre7['existDir'](mqgre7['fileNativeDir'], dnpq['create'](i2joxy, i2joxy['onMkdirCallBack']))), i2joxy['window']['focus'] = function () {}, xts32z['getUrlPath'] = function () {}, i2joxy['window']['logtime'] = function (hf5cn) {}, i2joxy['window']['alertTimeLog'] = function (a1b$u9) {}, i2joxy['window']['resetShareInfo'] = function () {}, i2joxy['window']['CanvasRenderingContext2D'] = function () {}, i2joxy['window']['CanvasRenderingContext2D']['prototype'] = i2joxy['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i2joxy['window']['document']['body']['appendChild'] = function () {}, i2joxy['EnvConfig']['pixelRatioInt'] = 0x0, ch_6u5['getPixelRatio'] = i2joxy['pixelRatio'], i2joxy['_preCreateElement'] = sz3t['createElement'], sz3t['createElement'] = i2joxy['createElement'], ch_6u5['createShaderCondition'] = i2joxy['createShaderCondition'], tsvz3['parseXMLFromString'] = i2joxy['parseXMLFromString'], $b1ua9['_createInputElement'] = c5pnf['_createInputElement'], i2joxy['EnvConfig']['load'] = zjx2io['prototype']['load'], zjx2io['prototype']['load'] = jzix2s['prototype']['load'], i2joxy['isZiYu'] && m87rk && wx['onMessage'](function (jxi2zs) {
        jxi2zs['isLoad'] && (mqgre7['ziyuFileData'][jxi2zs['url']] = jxi2zs['data']);
      });
    }, i2joxy['onMkdirCallBack'] = function (r7gewm, b1au_$) {
      if (!r7gewm) mqgre7['filesListObj'] = JSON['parse'](b1au_$['data']);
    }, i2joxy['pixelRatio'] = function () {
      if (!i2joxy['EnvConfig']['pixelRatioInt']) try {
        var kmwy8o = wx['getSystemInfoSync']();return i2joxy['EnvConfig']['pixelRatioInt'] = kmwy8o['pixelRatio'], kmwy8o = kmwy8o, kmwy8o['pixelRatio'];
      } catch (hu_516) {}return i2joxy['EnvConfig']['pixelRatioInt'];
    }, i2joxy['createElement'] = function (nfed) {
      if (nfed == 'canvas') {
        var mrwgk;return i2joxy['idx'] == 0x1 ? i2joxy['isZiYu'] ? (mrwgk = sharedCanvas, mrwgk['style'] = {}) : mrwgk = window['canvas'] : mrwgk = window['wx']['createCanvas'](), i2joxy['idx']++, mrwgk;
      } else {
        if (nfed == 'textarea' || nfed == 'input') return i2joxy['onCreateInput'](nfed);else {
          if (nfed == 'div') {
            var sl0 = i2joxy['_preCreateElement'](nfed);return sl0['contains'] = function (ixo8yj) {
              return null;
            }, sl0['removeChild'] = function (fcpqd) {}, sl0;
          } else return i2joxy['_preCreateElement'](nfed);
        }
      }
    }, i2joxy['onCreateInput'] = function (feqpd) {
      var tjsz = i2joxy['_preCreateElement'](feqpd);return tjsz['focus'] = c5pnf['wxinputFocus'], tjsz['blur'] = c5pnf['wxinputblur'], tjsz['style'] = {}, tjsz['value'] = 0x0, tjsz['parentElement'] = {}, tjsz['placeholder'] = {}, tjsz['type'] = {}, tjsz['setColor'] = function (w8yko) {}, tjsz['setType'] = function (q7erg) {}, tjsz['setFontFace'] = function (ymkw8) {}, tjsz['addEventListener'] = function (koyi) {}, tjsz['contains'] = function (s0tlv) {
        return null;
      }, tjsz['removeChild'] = function (qmrge7) {}, tjsz;
    }, i2joxy['createShaderCondition'] = function (fdenpq) {
      var wgre7m = this,
          y8mkr = function () {
        var epfdg = fdenpq;return wgre7m[fdenpq['replace']('this.', '')];
      };return y8mkr;
    }, i2joxy['EnvConfig'] = null, i2joxy['window'] = null, i2joxy['_preCreateElement'] = null, i2joxy['_inited'] = ![], i2joxy['wxRequest'] = null, i2joxy['systemInfo'] = null, i2joxy['version'] = '0.0.1', i2joxy['isZiYu'] = ![], i2joxy['isPosMsgYu'] = ![], i2joxy['parseXMLFromString'] = function (r7mg) {
      var ep7dg, v0ts;r7mg = r7mg['replace'](/>\s+</g, '><');try {
        ep7dg = new window['Parser']['DOMParser']()['parseFromString'](r7mg, 'text/xml');
      } catch (n6dc5) {
        throw '需要引入xml解析库文件';
      }return ep7dg;
    }, i2joxy['idx'] = 0x1, i2joxy;
  }(),
      i8jkyo = function () {
    function cqpndf() {}bu$91(cqpndf, 'laya.wx.mini.MiniImage');var fpgeq = cqpndf['prototype'];return fpgeq['_loadImage'] = function (emgwr7) {
      var a91bu$ = this,
          xjizo = ![];emgwr7['indexOf']('layaNativeDir/') == -0x1 && (xjizo = !![], emgwr7 = l30ts['formatURL'](emgwr7));if (!mqgre7['getFileInfo'](emgwr7)) {
        if (emgwr7['indexOf']('http://') != -0x1 || emgwr7['indexOf']('https://') != -0x1) mqgre7['downImg'](emgwr7, new dnpq(cqpndf, cqpndf['onDownImgCallBack'], [emgwr7, a91bu$]), emgwr7);else cqpndf['onCreateImage'](emgwr7, a91bu$, !![]);
      } else cqpndf['onCreateImage'](emgwr7, a91bu$, !xjizo);
    }, cqpndf['onDownImgCallBack'] = function (xio2j, _uh6a1, l03stv) {
      if (!l03stv) cqpndf['onCreateImage'](xio2j, _uh6a1);else _uh6a1['onError'](null);
    }, cqpndf['onCreateImage'] = function (tjxzs2, hc6n5_, kwg7) {
      kwg7 === void 0x0 && (kwg7 = ![]);var izox2j;if (!kwg7) {
        var cfh65n = mqgre7['getFileInfo'](tjxzs2),
            jsxz = cfh65n['md5'];izox2j = mqgre7['getFileNativePath'](jsxz);
      } else izox2j = tjxzs2;if (hc6n5_['imgCache'] == null) hc6n5_['imgCache'] = {};var fegqp;function cn_65() {
        fegqp['onload'] = null, fegqp['onerror'] = null, delete hc6n5_['imgCache'][tjxzs2];
      };var om8kwy = function () {
        cn_65(), hc6n5_['onLoaded'](fegqp);
      },
          enfdp = function () {
        cn_65(), hc6n5_['event']('error', 'Load image failed');
      };hc6n5_['_type'] == 'nativeimage' ? (fegqp = new sz3t['window']['Image'](), fegqp['crossOrigin'] = '', fegqp['onload'] = om8kwy, fegqp['onerror'] = enfdp, fegqp['src'] = izox2j, hc6n5_['imgCache'][tjxzs2] = fegqp) : new r7m8w['create'](izox2j, { 'onload': om8kwy, 'onerror': enfdp, 'onCreate': function (iox8j) {
          fegqp = iox8j, hc6n5_['imgCache'][tjxzs2] = iox8j;
        } });
    }, cqpndf;
  }(),
      c5pnf = function () {
    function deqn() {}return bu$91(deqn, 'laya.wx.mini.MiniInput'), deqn['_createInputElement'] = function () {
      $b1ua9['_initInput']($b1ua9['area'] = sz3t['createElement']('textarea')), $b1ua9['_initInput']($b1ua9['input'] = sz3t['createElement']('input')), $b1ua9['inputContainer'] = sz3t['createElement']('div'), $b1ua9['inputContainer']['style']['position'] = 'absolute', $b1ua9['inputContainer']['style']['zIndex'] = 0x186a0, sz3t['container']['appendChild']($b1ua9['inputContainer']), $b1ua9['inputContainer']['setPos'] = function (yi8, qfncpd) {
        $b1ua9['inputContainer']['style']['left'] = yi8 + 'px', $b1ua9['inputContainer']['style']['top'] = qfncpd + 'px';
      }, xts32z['stage']['on']('resize', null, deqn['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (rmg) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), sij2x['_soundClass'] = mweg, sij2x['_musicClass'] = mweg;
    }, deqn['_onStageResize'] = function () {
      var r7m8wk = xts32z['stage']['_canvasTransform']['identity']();r7m8wk['scale'](sz3t['width'] / $b_au1['canvas']['width'] / ch_6u5['getPixelRatio'](), sz3t['height'] / $b_au1['canvas']['height'] / ch_6u5['getPixelRatio']());
    }, deqn['wxinputFocus'] = function (uh65_1) {
      var _h6ua = $b1ua9['inputElement']['target'];if (_h6ua && !_h6ua['editable']) return;d7qegp['window']['wx']['offKeyboardConfirm'](), d7qegp['window']['wx']['offKeyboardInput'](), d7qegp['window']['wx']['showKeyboard']({ 'defaultValue': _h6ua['text'], 'maxLength': _h6ua['maxChars'], 'multiple': _h6ua['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (efdpg) {}, 'fail': function (dfcqp) {} }), d7qegp['window']['wx']['onKeyboardConfirm'](function (jtsx2) {
        var fqdp = jtsx2 ? jtsx2['value'] : '';_h6ua['text'] = fqdp, _h6ua['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), d7qegp['window']['wx']['onKeyboardInput'](function (ow8myk) {
        var erp7gq = ow8myk ? ow8myk['value'] : '';if (!_h6ua['multiline']) {
          if (erp7gq['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_h6ua['text'] = erp7gq, _h6ua['event']('input');
      });
    }, deqn['inputEnter'] = function () {
      $b1ua9['inputElement']['target']['focus'] = ![];
    }, deqn['wxinputblur'] = function () {
      deqn['hideKeyboard']();
    }, deqn['hideKeyboard'] = function () {
      d7qegp['window']['wx']['offKeyboardConfirm'](), d7qegp['window']['wx']['offKeyboardInput'](), d7qegp['window']['wx']['hideKeyboard']({ 'success': function (nf56cd) {
          console['log']('隐藏键盘');
        }, 'fail': function (dgfep) {
          console['log']('隐藏键盘出错:' + (dgfep ? dgfep['errMsg'] : ''));
        } });
    }, deqn;
  }(),
      jzix2s = function () {
    function h1a_() {}bu$91(h1a_, 'laya.wx.mini.MiniLoader');var wm7kr = h1a_['prototype'];return wm7kr['load'] = function (wyk8mr, rwmk78, m7ewrg, jxis2z, a4$9b1) {
      m7ewrg === void 0x0 && (m7ewrg = !![]), a4$9b1 === void 0x0 && (a4$9b1 = ![]);var geqpd7 = this;geqpd7['_url'] = wyk8mr;if (wyk8mr['indexOf']('data:image') === 0x0) geqpd7['_type'] = rwmk78 = 'image';else geqpd7['_type'] = rwmk78 || (rwmk78 = geqpd7['getTypeFromUrl'](wyk8mr));geqpd7['_cache'] = m7ewrg, geqpd7['_data'] = null;var rk7m = 'ascii';if (wyk8mr['indexOf']('.fnt') != -0x1) rk7m = 'utf8';else rwmk78 == 'arraybuffer' && (rk7m = '');;var dnqefp = tsvz3['getFileExtension'](wyk8mr);if (h1a_['_fileTypeArr']['indexOf'](dnqefp) != -0x1) d7qegp['EnvConfig']['load']['call'](this, wyk8mr, rwmk78, m7ewrg, jxis2z, a4$9b1);else {
        if (!mqgre7['getFileInfo'](wyk8mr)) {
          if (wyk8mr['indexOf']('layaNativeDir/') != -0x1) {
            if (d7qegp['isZiYu']) {
              var kyoi8w = mqgre7['ziyuFileData'][wyk8mr];geqpd7['onLoaded'](kyoi8w);return;
            } else {
              cosnole['log']('read read'), mqgre7['read'](wyk8mr, rk7m, new dnpq(h1a_, h1a_['onReadNativeCallBack'], [rk7m, wyk8mr, rwmk78, m7ewrg, jxis2z, a4$9b1, geqpd7]));return;
            }
          }if (l30ts['rootPath'] == '') var vst3l = wyk8mr;else vst3l = wyk8mr['split'](l30ts['rootPath'])[0x0];wyk8mr['indexOf']('http://') != -0x1 || wyk8mr['indexOf']('https://') != -0x1 ? d7qegp['EnvConfig']['load']['call'](geqpd7, wyk8mr, rwmk78, m7ewrg, jxis2z, a4$9b1) : mqgre7['readFile'](vst3l, rk7m, new dnpq(h1a_, h1a_['onReadNativeCallBack'], [rk7m, wyk8mr, rwmk78, m7ewrg, jxis2z, a4$9b1, geqpd7]), wyk8mr);
        } else d7qegp['EnvConfig']['load']['call'](this, wyk8mr, rwmk78, m7ewrg, jxis2z, a4$9b1);
      }
    }, wm7kr['resMgrLoad'] = function (jxy2, l03vs, w7mrkg, k8oijy, _6uc5, uha1_, chf6n5) {
      w7mrkg === void 0x0 && (w7mrkg = 0x0), k8oijy === void 0x0 && (k8oijy = ![]), _6uc5 === void 0x0 && (_6uc5 = ![]), uha1_ === void 0x0 && (uha1_ = 0x0), chf6n5 === void 0x0 && (chf6n5 = 0x3), jxy2['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jxy2), d7qegp['EnvConfig']['resMgrLoad'](jxy2, (ij8yo, y8joi, ba41$) => {
        h1a_['prototype']['resMgrLoadCallBack'](ij8yo, y8joi, ba41$, l03vs);
      }, w7mrkg, k8oijy, _6uc5, uha1_, chf6n5);
    }, wm7kr['resMgrLoadCallBack'] = function ($4, rgwm, jyk8i, ykr8w) {
      console['log']('buff:::', $4, jyk8i, mqgre7['fileNativeDir'] + '///' + mqgre7['fileListName']), ykr8w($4, rgwm, jyk8i);
    }, wm7kr['clearRes'] = function (g7rqep, ls0t3v) {
      ls0t3v === void 0x0 && (ls0t3v = ![]);var xst3z = this;xst3z['clearRes'](g7rqep, ls0t3v);var u$1ab = mqgre7['getFileInfo'](g7rqep);if (u$1ab && (g7rqep['indexOf']('http://') != -0x1 || g7rqep['indexOf']('https://') != -0x1)) {
        var x2oj = u$1ab['md5'],
            e7rm = mqgre7['getFileNativePath'](x2oj);mqgre7['remove'](e7rm);
      }
    }, h1a_['onReadNativeCallBack'] = function (xsij2z, qgr7me, s0l3tv, qdc, yio8, oi8wk, dpfg, h5nc6_, k8iwyo) {
      qdc === void 0x0 && (qdc = !![]), oi8wk === void 0x0 && (oi8wk = ![]), h5nc6_ === void 0x0 && (h5nc6_ = 0x0);if (!h5nc6_) {
        var ua$b19;if (s0l3tv == 'json' || s0l3tv == 'atlas') ua$b19 = d7qegp['getJson'](k8iwyo['data']);else s0l3tv == 'xml' ? ua$b19 = tsvz3['parseXMLFromString'](k8iwyo['data']) : ua$b19 = k8iwyo['data'];dpfg['onLoaded'](ua$b19), !d7qegp['isZiYu'] && d7qegp['isPosMsgYu'] && s0l3tv != 'arraybuffer' && wx['postMessage']({ 'url': qgr7me, 'data': ua$b19, 'isLoad': !![] });
      } else h5nc6_ == 0x1 && d7qegp['EnvConfig']['load']['call'](dpfg, qgr7me, s0l3tv, qdc, yio8, oi8wk);
    }, c5nf6d(h1a_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), h1a_;
  }(),
      mqgre7 = function (i8jyok) {
    function xjzo() {
      xjzo['__super']['call'](this);;
    }return bu$91(xjzo, 'laya.wx.mini.MiniFileMgr', i8jyok), xjzo['isLoadFile'] = function (d5cfp) {
      return xjzo['_fileTypeArr']['indexOf'](d5cfp) != -0x1 ? !![] : ![];
    }, xjzo['getFileInfo'] = function (h_c) {
      var _5nh = h_c['split']('?')[0x0],
          oyi8j = xjzo['filesListObj'][_5nh];if (oyi8j == null) return null;else return oyi8j;return null;
    }, xjzo['onFileUpdate'] = function (xzji2, c6uh_5) {
      var haub_1 = xzji2['split']('/'),
          ox2jiz = haub_1[haub_1['length'] - 0x1],
          k8m7r = xjzo['getFileInfo'](c6uh_5);if (k8m7r == null) xjzo['onSaveFile'](c6uh_5, ox2jiz);else {
        if (k8m7r['readyUrl'] != c6uh_5) xjzo['remove'](ox2jiz, c6uh_5);
      }
    }, xjzo['exits'] = function (z2st3, dnfqep) {
      var qnfepd = xjzo['getFileNativePath'](z2st3);xjzo['fs']['getFileInfo']({ 'filePath': qnfepd, 'success': function (okwm8) {
          dnfqep != null && dnfqep['runWith']([0x0, okwm8]);
        }, 'fail': function (yoi8kj) {
          dnfqep != null && dnfqep['runWith']([0x1, yoi8kj]);
        } });
    }, xjzo['read'] = function (cqfdnp, dfnqc, a_$u1b, x2yjo) {
      dfnqc === void 0x0 && (dfnqc = 'ascill'), x2yjo === void 0x0 && (x2yjo = '');var dfcnq;x2yjo != '' ? dfcnq = xjzo['getFileNativePath'](cqfdnp) : dfcnq = cqfdnp, xjzo['fs']['readFile']({ 'filePath': dfcnq, 'encoding': dfnqc, 'success': function (i2oxzj) {
          a_$u1b != null && a_$u1b['runWith']([0x0, i2oxzj]);
        }, 'fail': function (ywkoi) {
          if (ywkoi && x2yjo != '') xjzo['down'](x2yjo, dfnqc, a_$u1b, x2yjo);else a_$u1b != null && a_$u1b['runWith']([0x1]);
        } });
    }, xjzo['readNativeFile'] = function (szx2ij, b9a$14) {
      xjzo['fs']['readFile']({ 'filePath': szx2ij, 'encoding': '', 'success': function (tsz2x) {
          b9a$14 != null && b9a$14['runWith']([0x0]);
        }, 'fail': function (ba914) {
          b9a$14 != null && b9a$14['runWith']([0x1]);
        } });
    }, xjzo['down'] = function (qdcpn, eg7mr, nfdeqp, zt2jsx) {
      eg7mr === void 0x0 && (eg7mr = 'ascill'), zt2jsx === void 0x0 && (zt2jsx = '');var zxoi2 = xjzo['getFileNativePath'](zt2jsx),
          ozx2 = xjzo['wxdown']({ 'url': qdcpn, 'filePath': zxoi2, 'success': function (_u6ch5) {
          if (_u6ch5['statusCode'] === 0xc8) xjzo['readFile'](_u6ch5['filePath'], eg7mr, nfdeqp, zt2jsx);
        }, 'fail': function (g7qm) {
          nfdeqp != null && nfdeqp['runWith']([0x1, g7qm]);
        } });ozx2['onProgressUpdate'](function (d5nf6c) {
        nfdeqp != null && nfdeqp['runWith']([0x2, d5nf6c['progress']]);
      });
    }, xjzo['readFile'] = function (nf6c, dc6f5n, a94b1, owkm8) {
      dc6f5n === void 0x0 && (dc6f5n = 'ascill'), owkm8 === void 0x0 && (owkm8 = ''), xjzo['fs']['readFile']({ 'filePath': nf6c, 'encoding': dc6f5n, 'success': function (i8oxy) {
          if (nf6c['indexOf']('http://') != -0x1 || nf6c['indexOf']('https://') != -0x1) xjzo['onFileUpdate'](nf6c, owkm8);a94b1 != null && a94b1['runWith']([0x0, i8oxy]);
        }, 'fail': function (r7eqm) {
          if (r7eqm) a94b1 != null && a94b1['runWith']([0x1, r7eqm]);
        } });
    }, xjzo['downImg'] = function (meg7rq, m7egwr, j2ozx) {
      j2ozx === void 0x0 && (j2ozx = '');var h5nf6c = xjzo['wxdown']({ 'url': meg7rq, 'success': function (rw8km) {
          rw8km['statusCode'] === 0xc8 && xjzo['copyFile'](rw8km['tempFilePath'], j2ozx, m7egwr);
        }, 'fail': function (ep7gq) {
          m7egwr != null && m7egwr['runWith']([0x1, ep7gq]);
        } });
    }, xjzo['copyFile'] = function (bu1a_$, bu1$_a, x8oji) {
      var ikj8 = bu1a_$['split']('/'),
          wom8ky = ikj8[ikj8['length'] - 0x1],
          tl32sz = bu1$_a['split']('?')[0x0],
          sjzx = xjzo['getFileInfo'](bu1$_a),
          nfdqpe = xjzo['getFileNativePath'](wom8ky);xjzo['fs']['copyFile']({ 'srcPath': bu1a_$, 'destPath': nfdqpe, 'success': function (_ab) {
          if (!sjzx) xjzo['onSaveFile'](bu1$_a, wom8ky), x8oji != null && x8oji['runWith']([0x0]);else {
            if (sjzx['readyUrl'] != bu1$_a) xjzo['remove'](wom8ky, bu1$_a, x8oji);
          }
        }, 'fail': function (u_bha1) {
          x8oji != null && x8oji['runWith']([0x1, u_bha1]);
        } });
    }, xjzo['getFileNativePath'] = function (_uh1a6) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _uh1a6;
    }, xjzo['remove'] = function (fdpnqe, qgerp, xj2tzs) {
      qgerp === void 0x0 && (qgerp = '');var jxo2iy = xjzo['getFileInfo'](qgerp),
          w7mkr8 = xjzo['getFileNativePath'](jxo2iy['md5']);xts32z['loader']['clearRes'](jxo2iy['readyUrl']), xjzo['fs']['unlink']({ 'filePath': w7mkr8, 'success': function (b941$a) {
          if (qgerp != '') xjzo['onSaveFile'](qgerp, fdpnqe);xj2tzs != null && xj2tzs['runWith']([0x0]);
        }, 'fail': function (ncdqpf) {} });
    }, xjzo['onSaveFile'] = function (o8jyi, ojixy) {
      var mw7kgr = o8jyi['split']('?')[0x0];xjzo['filesListObj'][mw7kgr] = { 'md5': ojixy, 'readyUrl': o8jyi }, xjzo['fs']['writeFile']({ 'filePath': xjzo['fileNativeDir'] + '/' + xjzo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xjzo['filesListObj']), 'success': function (qnepd) {
          console['log']('写入测试测试成功：', qnepd);
        }, 'fail': function (ikj) {
          console['log']('写入测试测试失败：', ikj);
        } });
    }, xjzo['existDir'] = function (uh516, kyiw8) {
      xjzo['fs']['mkdir']({ 'dirPath': uh516, 'success': function (_6a1hu) {
          kyiw8 != null && kyiw8['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (s3vtz) {
          if (s3vtz['errMsg']['indexOf']('file already exists') != -0x1) xjzo['readSync'](xjzo['fileListName'], 'utf8', kyiw8);else kyiw8 != null && kyiw8['runWith']([0x1, s3vtz]);
        } });
    }, xjzo['readSync'] = function (o2xiyj, tz2js, zs3v, dpn5f) {
      tz2js === void 0x0 && (tz2js = 'ascill'), dpn5f === void 0x0 && (dpn5f = '');var fc65n = xjzo['getFileNativePath'](o2xiyj),
          tz3sv;try {
        tz3sv = xjzo['fs']['readFileSync'](fc65n), zs3v != null && zs3v['runWith']([0x0, { 'data': tz3sv }]);
      } catch (nc65_) {
        zs3v != null && zs3v['runWith']([0x1]);
      }
    }, xjzo['readCache'] = function () {}, xjzo['writeCache'] = function ($a91) {
      var fqped = readyUrl['split']('?')[0x0];xjzo['filesListObj'][fqped] = { 'md5': md5Name, 'readyUrl': readyUrl }, xjzo['fs']['writeFile']({ 'filePath': xjzo['fileNativeDir'] + '/' + xjzo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xjzo['filesListObj']), 'success': function (c6h5u) {}, 'fail': function (eqpfgd) {} });
    }, xjzo['setNativeFileDir'] = function (xzsi2j) {
      xjzo['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + xzsi2j;
    }, xjzo['filesListObj'] = {}, xjzo['fileNativeDir'] = null, xjzo['fileListName'] = 'layaairfiles.txt', xjzo['ziyuFileData'] = {}, c5nf6d(xjzo, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), xjzo;
  }(s3zt2),
      mweg = function (_5h6cu) {
    function b_hu() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], b_hu['__super']['call'](this), this['_sound'] = b_hu['_createSound']();
    }bu$91(b_hu, 'laya.wx.mini.MiniSound', _5h6cu);var a491$ = b_hu['prototype'];return a491$['load'] = function (cdqp) {
      var oky8ji = this;cdqp = l30ts['formatURL'](cdqp), this['url'] = cdqp;if (b_hu['_audioCache'][cdqp]) {
        this['event']('complete');return;
      }function gm() {
        if (b_hu['_null'] != undefined) oky8ji['_sound']['onCanplay'](b_hu['_null']), oky8ji['_sound']['onError'](b_hu['_null']);else try {
          oky8ji['_sound']['onCanplay'](null), oky8ji['_sound']['onError'](null), b_hu['_null'] = null;
        } catch (wg7rmk) {
          console['warn']('[wxmini] _clearSound:' + wg7rmk), oky8ji['_sound']['onCanplay'](f6dnc5), oky8ji['_sound']['onError'](f6dnc5), b_hu['_null'] = f6dnc5;
        }
      }function yk8joi() {
        gm(), kiwo8['loaded'] = !![], kiwo8['event']('complete'), b_hu['_audioCache'][kiwo8['url']] = kiwo8;
      }function yk8ow(rm78k) {
        console['error']('errCode=' + rm78k['errCode'] + '  errMsg=' + rm78k['errMsg']), gm(), kiwo8['event']('error');
      }function f6dnc5() {}this['_sound']['onCanplay'](yk8joi), this['_sound']['onError'](yk8ow), this['_sound']['src'] = cdqp;var kiwo8 = this;
    }, a491$['play'] = function (egrmq, t3l) {
      egrmq === void 0x0 && (egrmq = 0x0), t3l === void 0x0 && (t3l = 0x0);var cn56h_;if (this['url'] == sij2x['_tMusic']) {
        if (!b_hu['_musicAudio']) b_hu['_musicAudio'] = b_hu['_createSound']();cn56h_ = b_hu['_musicAudio'];
      } else cn56h_ = b_hu['_createSound']();cn56h_['src'] = this['url'];var oixz = new tzs2l(cn56h_);return oixz['url'] = this['url'], oixz['loops'] = t3l, oixz['startTime'] = egrmq, oixz['play'](), sij2x['addChannel'](oixz), oixz;
    }, a491$['dispose'] = function () {
      var vlt0 = b_hu['_audioCache'][this['url']];vlt0 && (vlt0['src'] = '', delete b_hu['_audioCache'][this['url']]);
    }, qegd(0x0, a491$, 'duration', function () {
      return this['_sound']['duration'];
    }), b_hu['_createSound'] = function () {
      return b_hu['_id']++, d7qegp['window']['wx']['createInnerAudioContext']();
    }, b_hu['_musicAudio'] = null, b_hu['_id'] = 0x0, b_hu['_audioCache'] = {}, b_hu['_null'] = undefined, b_hu;
  }(s3zt2),
      tzs2l = function (ojzxi) {
    function j2ioz(tl2zs3) {
      this['_audio'] = null, this['_onEnd'] = null, j2ioz['__super']['call'](this), this['_audio'] = tl2zs3, this['_onEnd'] = tsvz3['bind'](this['__onEnd'], this), tl2zs3['onEnded'](this['_onEnd']);
    }bu$91(j2ioz, 'laya.wx.mini.MiniSoundChannel', ojzxi);var yo8jki = j2ioz['prototype'];return yo8jki['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (xts32z['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, yo8jki['__onNull'] = function () {}, yo8jki['play'] = function () {
      this['isStopped'] = ![], sij2x['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, yo8jki['stop'] = function () {
      this['isStopped'] = !![], sij2x['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (j2ioz['_null'] != undefined) this['_audio']['onEnded'](j2ioz['_null']);else try {
        this['_audio']['onEnded'](null), j2ioz['_null'] = null;
      } catch (x2isj) {
        console['warn']('[wxmini] stop:' + x2isj), this['_audio']['onEnded'](tsvz3['bind'](this['__onNull'], this)), j2ioz['_null'] = tsvz3['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, yo8jki['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, yo8jki['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], sij2x['addChannel'](this), this['_audio']['play']();
    }, qegd(0x0, yo8jki, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), qegd(0x0, yo8jki, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), qegd(0x0, yo8jki, 'volume', function () {
      return 0x1;
    }, function (fn5p) {}), j2ioz['_null'] = undefined, j2ioz;
  }(hc5n);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var nfc56 in Laya) {
    var ijs2z = Laya[nfc56];ijs2z && ijs2z['__isclass'] && (exports[nfc56] = ijs2z);
  }
});