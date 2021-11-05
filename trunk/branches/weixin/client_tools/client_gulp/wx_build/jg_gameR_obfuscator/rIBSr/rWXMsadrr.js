var i = wx.$R;
(function (window, document, isz2x) {
  var xoiy8j = isz2x['un'],
      _bau1h = isz2x['uns'],
      gdqpe = isz2x['static'],
      tzl = isz2x['class'],
      npdfqc = isz2x['getset'],
      i8kjy = isz2x['__newvec'],
      grwm = laya['utils']['Browser'],
      y8joik = laya['events']['Event'],
      h_ua = laya['events']['EventDispatcher'],
      rmqg7e = laya['resource']['HTMLImage'],
      wry8 = laya['utils']['Handler'],
      dfcq = laya['display']['Input'],
      e7grqp = laya['net']['Loader'],
      n5c_h = laya['maths']['Matrix'],
      kwgm7r = laya['renders']['Render'],
      y8iwk = laya['utils']['RunDriver'],
      ah1_u6 = laya['media']['Sound'],
      lsztv3 = laya['media']['SoundChannel'],
      dfc6n5 = laya['media']['SoundManager'],
      iyxo2j = laya['display']['Stage'],
      sv0tl3 = laya['net']['URL'],
      oxi2y = laya['utils']['Utils'],
      oymwk8 = function () {
    function bh1ua_() {}return tzl(bh1ua_, 'laya.wx.mini.MiniAdpter'), bh1ua_['getJson'] = function (m8rk) {
      return JSON['parse'](m8rk);
    }, bh1ua_['init'] = function (b1a4$, cdqpn) {
      b1a4$ === void 0x0 && (b1a4$ = ![]), cdqpn === void 0x0 && (cdqpn = ![]);if (bh1ua_['_inited']) return;bh1ua_['window'] = window;if (bh1ua_['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;bh1ua_['_inited'] = !![], bh1ua_['isZiYu'] = cdqpn, bh1ua_['isPosMsgYu'] = b1a4$, bh1ua_['EnvConfig'] = {}, !bh1ua_['isZiYu'] && (mky8rw['setNativeFileDir']('/layaairGame'), mky8rw['existDir'](mky8rw['fileNativeDir'], wry8['create'](bh1ua_, bh1ua_['onMkdirCallBack']))), bh1ua_['window']['focus'] = function () {}, isz2x['getUrlPath'] = function () {}, bh1ua_['window']['logtime'] = function (fpnqcd) {}, bh1ua_['window']['alertTimeLog'] = function (uh51_) {}, bh1ua_['window']['resetShareInfo'] = function () {}, bh1ua_['window']['CanvasRenderingContext2D'] = function () {}, bh1ua_['window']['CanvasRenderingContext2D']['prototype'] = bh1ua_['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], bh1ua_['window']['document']['body']['appendChild'] = function () {}, bh1ua_['EnvConfig']['pixelRatioInt'] = 0x0, y8iwk['getPixelRatio'] = bh1ua_['pixelRatio'], bh1ua_['_preCreateElement'] = grwm['createElement'], grwm['createElement'] = bh1ua_['createElement'], y8iwk['createShaderCondition'] = bh1ua_['createShaderCondition'], oxi2y['parseXMLFromString'] = bh1ua_['parseXMLFromString'], dfcq['_createInputElement'] = h_nc65['_createInputElement'], bh1ua_['EnvConfig']['load'] = e7grqp['prototype']['load'], e7grqp['prototype']['load'] = l3v['prototype']['load'], bh1ua_['isZiYu'] && b1a4$ && wx['onMessage'](function (u_15) {
        u_15['isLoad'] && (mky8rw['ziyuFileData'][u_15['url']] = u_15['data']);
      });
    }, bh1ua_['onMkdirCallBack'] = function (pdfqne, chf) {
      if (!pdfqne) mky8rw['filesListObj'] = JSON['parse'](chf['data']);
    }, bh1ua_['pixelRatio'] = function () {
      if (!bh1ua_['EnvConfig']['pixelRatioInt']) try {
        var nhc6f5 = wx['getSystemInfoSync']();return bh1ua_['EnvConfig']['pixelRatioInt'] = nhc6f5['pixelRatio'], nhc6f5 = nhc6f5, nhc6f5['pixelRatio'];
      } catch (zt2ls) {}return bh1ua_['EnvConfig']['pixelRatioInt'];
    }, bh1ua_['createElement'] = function (_bha1u) {
      if (_bha1u == 'canvas') {
        var a1bhu;return bh1ua_['idx'] == 0x1 ? bh1ua_['isZiYu'] ? (a1bhu = sharedCanvas, a1bhu['style'] = {}) : a1bhu = window['canvas'] : a1bhu = window['wx']['createCanvas'](), bh1ua_['idx']++, a1bhu;
      } else {
        if (_bha1u == 'textarea' || _bha1u == 'input') return bh1ua_['onCreateInput'](_bha1u);else {
          if (_bha1u == 'div') {
            var z2sjx = bh1ua_['_preCreateElement'](_bha1u);return z2sjx['contains'] = function (a_h) {
              return null;
            }, z2sjx['removeChild'] = function (nfcqdp) {}, z2sjx;
          } else return bh1ua_['_preCreateElement'](_bha1u);
        }
      }
    }, bh1ua_['onCreateInput'] = function (_u$1b) {
      var ge7dpq = bh1ua_['_preCreateElement'](_u$1b);return ge7dpq['focus'] = h_nc65['wxinputFocus'], ge7dpq['blur'] = h_nc65['wxinputblur'], ge7dpq['style'] = {}, ge7dpq['value'] = 0x0, ge7dpq['parentElement'] = {}, ge7dpq['placeholder'] = {}, ge7dpq['type'] = {}, ge7dpq['setColor'] = function (oyki8j) {}, ge7dpq['setType'] = function (qcnpd) {}, ge7dpq['setFontFace'] = function (dpnf5c) {}, ge7dpq['addEventListener'] = function (_6hcn5) {}, ge7dpq['contains'] = function (c5hn_6) {
        return null;
      }, ge7dpq['removeChild'] = function (gmqr) {}, ge7dpq;
    }, bh1ua_['createShaderCondition'] = function (j2yoi) {
      var ub1h_a = this,
          q7gem = function () {
        var c5f6nh = j2yoi;return ub1h_a[j2yoi['replace']('this.', '')];
      };return q7gem;
    }, bh1ua_['EnvConfig'] = null, bh1ua_['window'] = null, bh1ua_['_preCreateElement'] = null, bh1ua_['_inited'] = ![], bh1ua_['wxRequest'] = null, bh1ua_['systemInfo'] = null, bh1ua_['version'] = '0.0.1', bh1ua_['isZiYu'] = ![], bh1ua_['isPosMsgYu'] = ![], bh1ua_['parseXMLFromString'] = function (egwr) {
      var u_h6, _1uah6;egwr = egwr['replace'](/>\s+</g, '><');try {
        u_h6 = new window['Parser']['DOMParser']()['parseFromString'](egwr, 'text/xml');
      } catch (egqd7) {
        throw '需要引入xml解析库文件';
      }return u_h6;
    }, bh1ua_['idx'] = 0x1, bh1ua_;
  }(),
      s2jzx = function () {
    function _u1hab() {}tzl(_u1hab, 'laya.wx.mini.MiniImage');var au9b1 = _u1hab['prototype'];return au9b1['_loadImage'] = function (ndpfc) {
      var a14b9$ = this,
          cd5 = ![];ndpfc['indexOf']('layaNativeDir/') == -0x1 && (cd5 = !![], ndpfc = sv0tl3['formatURL'](ndpfc));if (!mky8rw['getFileInfo'](ndpfc)) {
        if (ndpfc['indexOf']('http://') != -0x1 || ndpfc['indexOf']('https://') != -0x1) mky8rw['downImg'](ndpfc, new wry8(_u1hab, _u1hab['onDownImgCallBack'], [ndpfc, a14b9$]), ndpfc);else _u1hab['onCreateImage'](ndpfc, a14b9$, !![]);
      } else _u1hab['onCreateImage'](ndpfc, a14b9$, !cd5);
    }, _u1hab['onDownImgCallBack'] = function (fpnqde, jzis2, gep7rq) {
      if (!gep7rq) _u1hab['onCreateImage'](fpnqde, jzis2);else jzis2['onError'](null);
    }, _u1hab['onCreateImage'] = function (zjo2i, nfqpc, erpq7g) {
      erpq7g === void 0x0 && (erpq7g = ![]);var hc6nf5;if (!erpq7g) {
        var sjxzi2 = mky8rw['getFileInfo'](zjo2i),
            ewgrm = sjxzi2['md5'];hc6nf5 = mky8rw['getFileNativePath'](ewgrm);
      } else hc6nf5 = zjo2i;if (nfqpc['imgCache'] == null) nfqpc['imgCache'] = {};var r8k;function a491b$() {
        r8k['onload'] = null, r8k['onerror'] = null, delete nfqpc['imgCache'][zjo2i];
      };var dgp = function () {
        a491b$(), nfqpc['onLoaded'](r8k);
      },
          ztxs3 = function () {
        a491b$(), nfqpc['event']('error', 'Load image failed');
      };nfqpc['_type'] == 'nativeimage' ? (r8k = new grwm['window']['Image'](), r8k['crossOrigin'] = '', r8k['onload'] = dgp, r8k['onerror'] = ztxs3, r8k['src'] = hc6nf5, nfqpc['imgCache'][zjo2i] = r8k) : new rmqg7e['create'](hc6nf5, { 'onload': dgp, 'onerror': ztxs3, 'onCreate': function (yi8j) {
          r8k = yi8j, nfqpc['imgCache'][zjo2i] = yi8j;
        } });
    }, _u1hab;
  }(),
      h_nc65 = function () {
    function rk78mw() {}return tzl(rk78mw, 'laya.wx.mini.MiniInput'), rk78mw['_createInputElement'] = function () {
      dfcq['_initInput'](dfcq['area'] = grwm['createElement']('textarea')), dfcq['_initInput'](dfcq['input'] = grwm['createElement']('input')), dfcq['inputContainer'] = grwm['createElement']('div'), dfcq['inputContainer']['style']['position'] = 'absolute', dfcq['inputContainer']['style']['zIndex'] = 0x186a0, grwm['container']['appendChild'](dfcq['inputContainer']), dfcq['inputContainer']['setPos'] = function (u6ch, u1a6_) {
        dfcq['inputContainer']['style']['left'] = u6ch + 'px', dfcq['inputContainer']['style']['top'] = u1a6_ + 'px';
      }, isz2x['stage']['on']('resize', null, rk78mw['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (js2txz) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), dfc6n5['_soundClass'] = tj2szx, dfc6n5['_musicClass'] = tj2szx;
    }, rk78mw['_onStageResize'] = function () {
      var uah1b_ = isz2x['stage']['_canvasTransform']['identity']();uah1b_['scale'](grwm['width'] / kwgm7r['canvas']['width'] / y8iwk['getPixelRatio'](), grwm['height'] / kwgm7r['canvas']['height'] / y8iwk['getPixelRatio']());
    }, rk78mw['wxinputFocus'] = function (b91$ua) {
      var w7gmr = dfcq['inputElement']['target'];if (w7gmr && !w7gmr['editable']) return;oymwk8['window']['wx']['offKeyboardConfirm'](), oymwk8['window']['wx']['offKeyboardInput'](), oymwk8['window']['wx']['showKeyboard']({ 'defaultValue': w7gmr['text'], 'maxLength': w7gmr['maxChars'], 'multiple': w7gmr['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (wer7gm) {}, 'fail': function (ergqm7) {} }), oymwk8['window']['wx']['onKeyboardConfirm'](function (pdnfeq) {
        var dqpefg = pdnfeq ? pdnfeq['value'] : '';w7gmr['text'] = dqpefg, w7gmr['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), oymwk8['window']['wx']['onKeyboardInput'](function (oi8yjx) {
        var u6c = oi8yjx ? oi8yjx['value'] : '';if (!w7gmr['multiline']) {
          if (u6c['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }w7gmr['text'] = u6c, w7gmr['event']('input');
      });
    }, rk78mw['inputEnter'] = function () {
      dfcq['inputElement']['target']['focus'] = ![];
    }, rk78mw['wxinputblur'] = function () {
      rk78mw['hideKeyboard']();
    }, rk78mw['hideKeyboard'] = function () {
      oymwk8['window']['wx']['offKeyboardConfirm'](), oymwk8['window']['wx']['offKeyboardInput'](), oymwk8['window']['wx']['hideKeyboard']({ 'success': function (oi8wy) {
          console['log']('隐藏键盘');
        }, 'fail': function (dpeqgf) {
          console['log']('隐藏键盘出错:' + (dpeqgf ? dpeqgf['errMsg'] : ''));
        } });
    }, rk78mw;
  }(),
      l3v = function () {
    function hb_a1() {}tzl(hb_a1, 'laya.wx.mini.MiniLoader');var wmr7ge = hb_a1['prototype'];return wmr7ge['load'] = function (l3st2z, sz3l2t, ozxij2, cfpnd, chn_65) {
      ozxij2 === void 0x0 && (ozxij2 = !![]), chn_65 === void 0x0 && (chn_65 = ![]);var mrwky = this;mrwky['_url'] = l3st2z;if (l3st2z['indexOf']('data:image') === 0x0) mrwky['_type'] = sz3l2t = 'image';else mrwky['_type'] = sz3l2t || (sz3l2t = mrwky['getTypeFromUrl'](l3st2z));mrwky['_cache'] = ozxij2, mrwky['_data'] = null;var fn6h = 'ascii';if (l3st2z['indexOf']('.fnt') != -0x1) fn6h = 'utf8';else sz3l2t == 'arraybuffer' && (fn6h = '');;var yo8xji = oxi2y['getFileExtension'](l3st2z);if (hb_a1['_fileTypeArr']['indexOf'](yo8xji) != -0x1) oymwk8['EnvConfig']['load']['call'](this, l3st2z, sz3l2t, ozxij2, cfpnd, chn_65);else {
        if (!mky8rw['getFileInfo'](l3st2z)) {
          if (l3st2z['indexOf']('layaNativeDir/') != -0x1) {
            if (oymwk8['isZiYu']) {
              var cd65fn = mky8rw['ziyuFileData'][l3st2z];mrwky['onLoaded'](cd65fn);return;
            } else {
              cosnole['log']('read read'), mky8rw['read'](l3st2z, fn6h, new wry8(hb_a1, hb_a1['onReadNativeCallBack'], [fn6h, l3st2z, sz3l2t, ozxij2, cfpnd, chn_65, mrwky]));return;
            }
          }if (sv0tl3['rootPath'] == '') var p7gqd = l3st2z;else p7gqd = l3st2z['split'](sv0tl3['rootPath'])[0x0];l3st2z['indexOf']('http://') != -0x1 || l3st2z['indexOf']('https://') != -0x1 ? oymwk8['EnvConfig']['load']['call'](mrwky, l3st2z, sz3l2t, ozxij2, cfpnd, chn_65) : mky8rw['readFile'](p7gqd, fn6h, new wry8(hb_a1, hb_a1['onReadNativeCallBack'], [fn6h, l3st2z, sz3l2t, ozxij2, cfpnd, chn_65, mrwky]), l3st2z);
        } else oymwk8['EnvConfig']['load']['call'](this, l3st2z, sz3l2t, ozxij2, cfpnd, chn_65);
      }
    }, wmr7ge['resMgrLoad'] = function (nh_5, c5ndf, fcpdqn, iwyok8, h6_u5c, c_6n5h, fdeqgp) {
      fcpdqn === void 0x0 && (fcpdqn = 0x0), iwyok8 === void 0x0 && (iwyok8 = ![]), h6_u5c === void 0x0 && (h6_u5c = ![]), c_6n5h === void 0x0 && (c_6n5h = 0x0), fdeqgp === void 0x0 && (fdeqgp = 0x3), nh_5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', nh_5), oymwk8['EnvConfig']['resMgrLoad'](nh_5, (t2szl, pedqnf, oxyj8) => {
        hb_a1['prototype']['resMgrLoadCallBack'](t2szl, pedqnf, oxyj8, c5ndf);
      }, fcpdqn, iwyok8, h6_u5c, c_6n5h, fdeqgp);
    }, wmr7ge['resMgrLoadCallBack'] = function (n65h, a91u, i8ojky, oyik8j) {
      console['log']('buff:::', n65h, i8ojky, mky8rw['fileNativeDir'] + '///' + mky8rw['fileListName']), oyik8j(n65h, a91u, i8ojky);
    }, wmr7ge['clearRes'] = function (h6ua1, fc6h) {
      fc6h === void 0x0 && (fc6h = ![]);var m78rkw = this;m78rkw['clearRes'](h6ua1, fc6h);var dgpq7 = mky8rw['getFileInfo'](h6ua1);if (dgpq7 && (h6ua1['indexOf']('http://') != -0x1 || h6ua1['indexOf']('https://') != -0x1)) {
        var a_16u = dgpq7['md5'],
            qdgefp = mky8rw['getFileNativePath'](a_16u);mky8rw['remove'](qdgefp);
      }
    }, hb_a1['onReadNativeCallBack'] = function (dfegp, ua6h_1, iy8wo, oj8iy, _61u5, h1a6_, qfnedp, xoyji2, pnqfd) {
      oj8iy === void 0x0 && (oj8iy = !![]), h1a6_ === void 0x0 && (h1a6_ = ![]), xoyji2 === void 0x0 && (xoyji2 = 0x0);if (!xoyji2) {
        var u1_ahb;if (iy8wo == 'json' || iy8wo == 'atlas') u1_ahb = oymwk8['getJson'](pnqfd['data']);else iy8wo == 'xml' ? u1_ahb = oxi2y['parseXMLFromString'](pnqfd['data']) : u1_ahb = pnqfd['data'];qfnedp['onLoaded'](u1_ahb), !oymwk8['isZiYu'] && oymwk8['isPosMsgYu'] && iy8wo != 'arraybuffer' && wx['postMessage']({ 'url': ua6h_1, 'data': u1_ahb, 'isLoad': !![] });
      } else xoyji2 == 0x1 && oymwk8['EnvConfig']['load']['call'](qfnedp, ua6h_1, iy8wo, oj8iy, _61u5, h1a6_);
    }, gdqpe(hb_a1, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), hb_a1;
  }(),
      mky8rw = function (z2sx) {
    function pqedg() {
      pqedg['__super']['call'](this);;
    }return tzl(pqedg, 'laya.wx.mini.MiniFileMgr', z2sx), pqedg['isLoadFile'] = function (s3tzl) {
      return pqedg['_fileTypeArr']['indexOf'](s3tzl) != -0x1 ? !![] : ![];
    }, pqedg['getFileInfo'] = function (ls0v3t) {
      var yi2x = ls0v3t['split']('?')[0x0],
          a_uh16 = pqedg['filesListObj'][yi2x];if (a_uh16 == null) return null;else return a_uh16;return null;
    }, pqedg['onFileUpdate'] = function (nf5h, js2xzi) {
      var b1_hua = nf5h['split']('/'),
          p5dn = b1_hua[b1_hua['length'] - 0x1],
          rgkw7 = pqedg['getFileInfo'](js2xzi);if (rgkw7 == null) pqedg['onSaveFile'](js2xzi, p5dn);else {
        if (rgkw7['readyUrl'] != js2xzi) pqedg['remove'](p5dn, js2xzi);
      }
    }, pqedg['exits'] = function (_u1ab$, tj) {
      var xjzoi2 = pqedg['getFileNativePath'](_u1ab$);pqedg['fs']['getFileInfo']({ 'filePath': xjzoi2, 'success': function (ah1_6) {
          tj != null && tj['runWith']([0x0, ah1_6]);
        }, 'fail': function (qge7r) {
          tj != null && tj['runWith']([0x1, qge7r]);
        } });
    }, pqedg['read'] = function (yk8iw, qcnfdp, u_6h, d5cf6) {
      qcnfdp === void 0x0 && (qcnfdp = 'ascill'), d5cf6 === void 0x0 && (d5cf6 = '');var hu5;d5cf6 != '' ? hu5 = pqedg['getFileNativePath'](yk8iw) : hu5 = yk8iw, pqedg['fs']['readFile']({ 'filePath': hu5, 'encoding': qcnfdp, 'success': function (xy8oji) {
          u_6h != null && u_6h['runWith']([0x0, xy8oji]);
        }, 'fail': function (h_c65n) {
          if (h_c65n && d5cf6 != '') pqedg['down'](d5cf6, qcnfdp, u_6h, d5cf6);else u_6h != null && u_6h['runWith']([0x1]);
        } });
    }, pqedg['readNativeFile'] = function (p7deqg, zxs32t) {
      pqedg['fs']['readFile']({ 'filePath': p7deqg, 'encoding': '', 'success': function (kio8wy) {
          zxs32t != null && zxs32t['runWith']([0x0]);
        }, 'fail': function (_6u1h5) {
          zxs32t != null && zxs32t['runWith']([0x1]);
        } });
    }, pqedg['down'] = function (qm7ge, ermw7, ykwio, _ua1b$) {
      ermw7 === void 0x0 && (ermw7 = 'ascill'), _ua1b$ === void 0x0 && (_ua1b$ = '');var wym8ko = pqedg['getFileNativePath'](_ua1b$),
          gefdqp = pqedg['wxdown']({ 'url': qm7ge, 'filePath': wym8ko, 'success': function (z2oxi) {
          if (z2oxi['statusCode'] === 0xc8) pqedg['readFile'](z2oxi['filePath'], ermw7, ykwio, _ua1b$);
        }, 'fail': function (koym8w) {
          ykwio != null && ykwio['runWith']([0x1, koym8w]);
        } });gefdqp['onProgressUpdate'](function (au$_1b) {
        ykwio != null && ykwio['runWith']([0x2, au$_1b['progress']]);
      });
    }, pqedg['readFile'] = function (cqdnfp, dqfcpn, sztj2, rqmg) {
      dqfcpn === void 0x0 && (dqfcpn = 'ascill'), rqmg === void 0x0 && (rqmg = ''), pqedg['fs']['readFile']({ 'filePath': cqdnfp, 'encoding': dqfcpn, 'success': function (yjio) {
          if (cqdnfp['indexOf']('http://') != -0x1 || cqdnfp['indexOf']('https://') != -0x1) pqedg['onFileUpdate'](cqdnfp, rqmg);sztj2 != null && sztj2['runWith']([0x0, yjio]);
        }, 'fail': function (myk8o) {
          if (myk8o) sztj2 != null && sztj2['runWith']([0x1, myk8o]);
        } });
    }, pqedg['downImg'] = function (eqfgd, _ha1b, yiwko8) {
      yiwko8 === void 0x0 && (yiwko8 = '');var _615hu = pqedg['wxdown']({ 'url': eqfgd, 'success': function (nfh56) {
          nfh56['statusCode'] === 0xc8 && pqedg['copyFile'](nfh56['tempFilePath'], yiwko8, _ha1b);
        }, 'fail': function (zjts2x) {
          _ha1b != null && _ha1b['runWith']([0x1, zjts2x]);
        } });
    }, pqedg['copyFile'] = function (mo8kwy, m7wk, koj8y) {
      var yxi2jo = mo8kwy['split']('/'),
          joy8ki = yxi2jo[yxi2jo['length'] - 0x1],
          omwky = m7wk['split']('?')[0x0],
          sxz2tj = pqedg['getFileInfo'](m7wk),
          lv3zt = pqedg['getFileNativePath'](joy8ki);pqedg['fs']['copyFile']({ 'srcPath': mo8kwy, 'destPath': lv3zt, 'success': function (pfedn) {
          if (!sxz2tj) pqedg['onSaveFile'](m7wk, joy8ki), koj8y != null && koj8y['runWith']([0x0]);else {
            if (sxz2tj['readyUrl'] != m7wk) pqedg['remove'](joy8ki, m7wk, koj8y);
          }
        }, 'fail': function (oxy2) {
          koj8y != null && koj8y['runWith']([0x1, oxy2]);
        } });
    }, pqedg['getFileNativePath'] = function (oi8ywk) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + oi8ywk;
    }, pqedg['remove'] = function (zlts32, eqr7pg, h_u165) {
      eqr7pg === void 0x0 && (eqr7pg = '');var d6fc = pqedg['getFileInfo'](eqr7pg),
          xi2oyj = pqedg['getFileNativePath'](d6fc['md5']);isz2x['loader']['clearRes'](d6fc['readyUrl']), pqedg['fs']['unlink']({ 'filePath': xi2oyj, 'success': function (y8jixo) {
          if (eqr7pg != '') pqedg['onSaveFile'](eqr7pg, zlts32);h_u165 != null && h_u165['runWith']([0x0]);
        }, 'fail': function (s2xtz3) {} });
    }, pqedg['onSaveFile'] = function (n5c6h_, nfeqp) {
      var c56_nh = n5c6h_['split']('?')[0x0];pqedg['filesListObj'][c56_nh] = { 'md5': nfeqp, 'readyUrl': n5c6h_ }, pqedg['fs']['writeFile']({ 'filePath': pqedg['fileNativeDir'] + '/' + pqedg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pqedg['filesListObj']), 'success': function (oyjix2) {
          console['log']('写入测试测试成功：', oyjix2);
        }, 'fail': function (gwr7km) {
          console['log']('写入测试测试失败：', gwr7km);
        } });
    }, pqedg['existDir'] = function (kw8yom, lv0st) {
      pqedg['fs']['mkdir']({ 'dirPath': kw8yom, 'success': function (w8) {
          lv0st != null && lv0st['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (cnf5dp) {
          if (cnf5dp['errMsg']['indexOf']('file already exists') != -0x1) pqedg['readSync'](pqedg['fileListName'], 'utf8', lv0st);else lv0st != null && lv0st['runWith']([0x1, cnf5dp]);
        } });
    }, pqedg['readSync'] = function (yr8mk, gdfpeq, edpqf, mreg7w) {
      gdfpeq === void 0x0 && (gdfpeq = 'ascill'), mreg7w === void 0x0 && (mreg7w = '');var gemwr = pqedg['getFileNativePath'](yr8mk),
          yokj;try {
        yokj = pqedg['fs']['readFileSync'](gemwr), edpqf != null && edpqf['runWith']([0x0, { 'data': yokj }]);
      } catch (vst3l) {
        edpqf != null && edpqf['runWith']([0x1]);
      }
    }, pqedg['readCache'] = function () {}, pqedg['writeCache'] = function (s30tvl) {
      var rk8m7 = readyUrl['split']('?')[0x0];pqedg['filesListObj'][rk8m7] = { 'md5': md5Name, 'readyUrl': readyUrl }, pqedg['fs']['writeFile']({ 'filePath': pqedg['fileNativeDir'] + '/' + pqedg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pqedg['filesListObj']), 'success': function (ergp7q) {}, 'fail': function (ba491) {} });
    }, pqedg['setNativeFileDir'] = function (dfn5cp) {
      pqedg['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + dfn5cp;
    }, pqedg['filesListObj'] = {}, pqedg['fileNativeDir'] = null, pqedg['fileListName'] = 'layaairfiles.txt', pqedg['ziyuFileData'] = {}, gdqpe(pqedg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), pqedg;
  }(h_ua),
      tj2szx = function (cfnpdq) {
    function ndcfq() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ndcfq['__super']['call'](this), this['_sound'] = ndcfq['_createSound']();
    }tzl(ndcfq, 'laya.wx.mini.MiniSound', cfnpdq);var b$_1a = ndcfq['prototype'];return b$_1a['load'] = function (tzl32) {
      var ndqpef = this;tzl32 = sv0tl3['formatURL'](tzl32), this['url'] = tzl32;if (ndcfq['_audioCache'][tzl32]) {
        this['event']('complete');return;
      }function tx2z3s() {
        if (ndcfq['_null'] != undefined) ndqpef['_sound']['onCanplay'](ndcfq['_null']), ndqpef['_sound']['onError'](ndcfq['_null']);else try {
          ndqpef['_sound']['onCanplay'](null), ndqpef['_sound']['onError'](null), ndcfq['_null'] = null;
        } catch ($b_) {
          console['warn']('[wxmini] _clearSound:' + $b_), ndqpef['_sound']['onCanplay'](iozj2x), ndqpef['_sound']['onError'](iozj2x), ndcfq['_null'] = iozj2x;
        }
      }function ls0tv() {
        tx2z3s(), l32zst['loaded'] = !![], l32zst['event']('complete'), ndcfq['_audioCache'][l32zst['url']] = l32zst;
      }function nf5ch(w7rmkg) {
        console['error']('errCode=' + w7rmkg['errCode'] + '  errMsg=' + w7rmkg['errMsg']), tx2z3s(), l32zst['event']('error');
      }function iozj2x() {}this['_sound']['onCanplay'](ls0tv), this['_sound']['onError'](nf5ch), this['_sound']['src'] = tzl32;var l32zst = this;
    }, b$_1a['play'] = function (sxtj, fd5pcn) {
      sxtj === void 0x0 && (sxtj = 0x0), fd5pcn === void 0x0 && (fd5pcn = 0x0);var qpgre;if (this['url'] == dfc6n5['_tMusic']) {
        if (!ndcfq['_musicAudio']) ndcfq['_musicAudio'] = ndcfq['_createSound']();qpgre = ndcfq['_musicAudio'];
      } else qpgre = ndcfq['_createSound']();qpgre['src'] = this['url'];var joy8ix = new a49b1$(qpgre);return joy8ix['url'] = this['url'], joy8ix['loops'] = fd5pcn, joy8ix['startTime'] = sxtj, joy8ix['play'](), dfc6n5['addChannel'](joy8ix), joy8ix;
    }, b$_1a['dispose'] = function () {
      var xzsj2 = ndcfq['_audioCache'][this['url']];xzsj2 && (xzsj2['src'] = '', delete ndcfq['_audioCache'][this['url']]);
    }, npdfqc(0x0, b$_1a, 'duration', function () {
      return this['_sound']['duration'];
    }), ndcfq['_createSound'] = function () {
      return ndcfq['_id']++, oymwk8['window']['wx']['createInnerAudioContext']();
    }, ndcfq['_musicAudio'] = null, ndcfq['_id'] = 0x0, ndcfq['_audioCache'] = {}, ndcfq['_null'] = undefined, ndcfq;
  }(h_ua),
      a49b1$ = function (v3tsl0) {
    function ge7qrp(mowky8) {
      this['_audio'] = null, this['_onEnd'] = null, ge7qrp['__super']['call'](this), this['_audio'] = mowky8, this['_onEnd'] = oxi2y['bind'](this['__onEnd'], this), mowky8['onEnded'](this['_onEnd']);
    }tzl(ge7qrp, 'laya.wx.mini.MiniSoundChannel', v3tsl0);var x2sjz = ge7qrp['prototype'];return x2sjz['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (isz2x['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, x2sjz['__onNull'] = function () {}, x2sjz['play'] = function () {
      this['isStopped'] = ![], dfc6n5['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, x2sjz['stop'] = function () {
      this['isStopped'] = !![], dfc6n5['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ge7qrp['_null'] != undefined) this['_audio']['onEnded'](ge7qrp['_null']);else try {
        this['_audio']['onEnded'](null), ge7qrp['_null'] = null;
      } catch (rqeg) {
        console['warn']('[wxmini] stop:' + rqeg), this['_audio']['onEnded'](oxi2y['bind'](this['__onNull'], this)), ge7qrp['_null'] = oxi2y['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, x2sjz['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, x2sjz['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], dfc6n5['addChannel'](this), this['_audio']['play']();
    }, npdfqc(0x0, x2sjz, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), npdfqc(0x0, x2sjz, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), npdfqc(0x0, x2sjz, 'volume', function () {
      return 0x1;
    }, function (nqepf) {}), ge7qrp['_null'] = undefined, ge7qrp;
  }(lsztv3);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var iy8ojk in Laya) {
    var zoxji2 = Laya[iy8ojk];zoxji2 && zoxji2['__isclass'] && (exports[iy8ojk] = zoxji2);
  }
});