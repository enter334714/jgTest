var O = wx.$C;
(function (window, document, yb2wa7) {
  var ej_v5z = yb2wa7['un'],
      n1d6l = yb2wa7['uns'],
      c$rpgs = yb2wa7['static'],
      o3lk48 = yb2wa7['class'],
      mfq96x = yb2wa7['getset'],
      l814ok = yb2wa7['__newvec'],
      olk841 = laya['utils']['Browser'],
      scp$g = laya['events']['Event'],
      jhevz5 = laya['events']['EventDispatcher'],
      a273y = laya['resource']['HTMLImage'],
      _jev = laya['utils']['Handler'],
      lno1k8 = laya['display']['Input'],
      z5jvhe = laya['net']['Loader'],
      u02w7 = laya['maths']['Matrix'],
      mqhxef = laya['renders']['Render'],
      a2bwy7 = laya['utils']['RunDriver'],
      e_z5jv = laya['media']['Sound'],
      k3a4yb = laya['media']['SoundChannel'],
      sw0u2t = laya['media']['SoundManager'],
      nl1od = laya['display']['Stage'],
      gsu0pt = laya['net']['URL'],
      n6od9 = laya['utils']['Utils'],
      qfemzh = function () {
    function m9q6x() {}return o3lk48(m9q6x, 'laya.wx.mini.MiniAdpter'), m9q6x['getJson'] = function (ndqx6) {
      return JSON['parse'](ndqx6);
    }, m9q6x['init'] = function (ptg0u, vf5z) {
      ptg0u === void 0x0 && (ptg0u = ![]), vf5z === void 0x0 && (vf5z = ![]);if (m9q6x['_inited']) return;m9q6x['window'] = window;if (m9q6x['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;m9q6x['_inited'] = !![], m9q6x['isZiYu'] = vf5z, m9q6x['isPosMsgYu'] = ptg0u, m9q6x['EnvConfig'] = {}, !m9q6x['isZiYu'] && (spg$0['setNativeFileDir']('/layaairGame'), spg$0['existDir'](spg$0['fileNativeDir'], _jev['create'](m9q6x, m9q6x['onMkdirCallBack']))), m9q6x['window']['focus'] = function () {}, yb2wa7['getUrlPath'] = function () {}, m9q6x['window']['logtime'] = function (m9dqx) {}, m9q6x['window']['alertTimeLog'] = function (nd81ol) {}, m9q6x['window']['resetShareInfo'] = function () {}, m9q6x['window']['CanvasRenderingContext2D'] = function () {}, m9q6x['window']['CanvasRenderingContext2D']['prototype'] = m9q6x['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], m9q6x['window']['document']['body']['appendChild'] = function () {}, m9q6x['EnvConfig']['pixelRatioInt'] = 0x0, a2bwy7['getPixelRatio'] = m9q6x['pixelRatio'], m9q6x['_preCreateElement'] = olk841['createElement'], olk841['createElement'] = m9q6x['createElement'], a2bwy7['createShaderCondition'] = m9q6x['createShaderCondition'], n6od9['parseXMLFromString'] = m9q6x['parseXMLFromString'], lno1k8['_createInputElement'] = o9n1d['_createInputElement'], m9q6x['EnvConfig']['load'] = z5jvhe['prototype']['load'], z5jvhe['prototype']['load'] = x96nq['prototype']['load'], m9q6x['isZiYu'] && ptg0u && wx['onMessage'](function (byk48) {
        byk48['isLoad'] && (spg$0['ziyuFileData'][byk48['url']] = byk48['data']);
      });
    }, m9q6x['onMkdirCallBack'] = function (mxhe, cp$gri) {
      if (!mxhe) spg$0['filesListObj'] = JSON['parse'](cp$gri['data']);
    }, m9q6x['pixelRatio'] = function () {
      if (!m9q6x['EnvConfig']['pixelRatioInt']) try {
        var l4k8o3 = wx['getSystemInfoSync']();return m9q6x['EnvConfig']['pixelRatioInt'] = l4k8o3['pixelRatio'], l4k8o3 = l4k8o3, l4k8o3['pixelRatio'];
      } catch (ve_) {}return m9q6x['EnvConfig']['pixelRatioInt'];
    }, m9q6x['createElement'] = function (gtc0sp) {
      if (gtc0sp == 'canvas') {
        var ehf5;return m9q6x['idx'] == 0x1 ? m9q6x['isZiYu'] ? (ehf5 = sharedCanvas, ehf5['style'] = {}) : ehf5 = window['canvas'] : ehf5 = window['wx']['createCanvas'](), m9q6x['idx']++, ehf5;
      } else {
        if (gtc0sp == 'textarea' || gtc0sp == 'input') return m9q6x['onCreateInput'](gtc0sp);else {
          if (gtc0sp == 'div') {
            var hf5ezm = m9q6x['_preCreateElement'](gtc0sp);return hf5ezm['contains'] = function (mfqz) {
              return null;
            }, hf5ezm['removeChild'] = function (jzv) {}, hf5ezm;
          } else return m9q6x['_preCreateElement'](gtc0sp);
        }
      }
    }, m9q6x['onCreateInput'] = function (ln1ok) {
      var ya47b3 = m9q6x['_preCreateElement'](ln1ok);return ya47b3['focus'] = o9n1d['wxinputFocus'], ya47b3['blur'] = o9n1d['wxinputblur'], ya47b3['style'] = {}, ya47b3['value'] = 0x0, ya47b3['parentElement'] = {}, ya47b3['placeholder'] = {}, ya47b3['type'] = {}, ya47b3['setColor'] = function (bk438) {}, ya47b3['setType'] = function (psc0$) {}, ya47b3['setFontFace'] = function ($rpcgi) {}, ya47b3['addEventListener'] = function (d9qxn) {}, ya47b3['contains'] = function (q9m6fx) {
        return null;
      }, ya47b3['removeChild'] = function (fhxme) {}, ya47b3;
    }, m9q6x['createShaderCondition'] = function (rgc$ip) {
      var fqexh = this,
          vzeh = function () {
        var y4kl3 = rgc$ip;return fqexh[rgc$ip['replace']('this.', '')];
      };return vzeh;
    }, m9q6x['EnvConfig'] = null, m9q6x['window'] = null, m9q6x['_preCreateElement'] = null, m9q6x['_inited'] = ![], m9q6x['wxRequest'] = null, m9q6x['systemInfo'] = null, m9q6x['version'] = '0.0.1', m9q6x['isZiYu'] = ![], m9q6x['isPosMsgYu'] = ![], m9q6x['parseXMLFromString'] = function (qhezf) {
      var cgsr, twu7a2;qhezf = qhezf['replace'](/>\s+</g, '><');try {
        cgsr = new window['Parser']['DOMParser']()['parseFromString'](qhezf, 'text/xml');
      } catch (b72wya) {
        throw '需要引入xml解析库文件';
      }return cgsr;
    }, m9q6x['idx'] = 0x1, m9q6x;
  }(),
      v_5ezj = function () {
    function yk84l() {}o3lk48(yk84l, 'laya.wx.mini.MiniImage');var hxmqf = yk84l['prototype'];return hxmqf['_loadImage'] = function (xq96nd) {
      var wut720 = this,
          pgsc$0 = ![];xq96nd['indexOf']('layaNativeDir/') == -0x1 && (pgsc$0 = !![], xq96nd = gsu0pt['formatURL'](xq96nd));if (!spg$0['getFileInfo'](xq96nd)) {
        if (xq96nd['indexOf']('http://') != -0x1 || xq96nd['indexOf']('https://') != -0x1) spg$0['downImg'](xq96nd, new _jev(yk84l, yk84l['onDownImgCallBack'], [xq96nd, wut720]), xq96nd);else yk84l['onCreateImage'](xq96nd, wut720, !![]);
      } else yk84l['onCreateImage'](xq96nd, wut720, !pgsc$0);
    }, yk84l['onDownImgCallBack'] = function (utwp0s, f96qxm, pw0us) {
      if (!pw0us) yk84l['onCreateImage'](utwp0s, f96qxm);else f96qxm['onError'](null);
    }, yk84l['onCreateImage'] = function (w20st, f6xq, u2t7aw) {
      u2t7aw === void 0x0 && (u2t7aw = ![]);var ndo961;if (!u2t7aw) {
        var y4ka = spg$0['getFileInfo'](w20st),
            tsw2u = y4ka['md5'];ndo961 = spg$0['getFileNativePath'](tsw2u);
      } else ndo961 = w20st;if (f6xq['imgCache'] == null) f6xq['imgCache'] = {};var jhze5v;function zvj_() {
        jhze5v['onload'] = null, jhze5v['onerror'] = null, delete f6xq['imgCache'][w20st];
      };var $grcip = function () {
        zvj_(), f6xq['onLoaded'](jhze5v);
      },
          gc0tps = function () {
        zvj_(), f6xq['event']('error', 'Load image failed');
      };f6xq['_type'] == 'nativeimage' ? (jhze5v = new olk841['window']['Image'](), jhze5v['crossOrigin'] = '', jhze5v['onload'] = $grcip, jhze5v['onerror'] = gc0tps, jhze5v['src'] = ndo961, f6xq['imgCache'][w20st] = jhze5v) : new a273y['create'](ndo961, { 'onload': $grcip, 'onerror': gc0tps, 'onCreate': function (ko18n) {
          jhze5v = ko18n, f6xq['imgCache'][w20st] = ko18n;
        } });
    }, yk84l;
  }(),
      o9n1d = function () {
    function rgcp$i() {}return o3lk48(rgcp$i, 'laya.wx.mini.MiniInput'), rgcp$i['_createInputElement'] = function () {
      lno1k8['_initInput'](lno1k8['area'] = olk841['createElement']('textarea')), lno1k8['_initInput'](lno1k8['input'] = olk841['createElement']('input')), lno1k8['inputContainer'] = olk841['createElement']('div'), lno1k8['inputContainer']['style']['position'] = 'absolute', lno1k8['inputContainer']['style']['zIndex'] = 0x186a0, olk841['container']['appendChild'](lno1k8['inputContainer']), lno1k8['inputContainer']['setPos'] = function (tu7w0, $gcrs) {
        lno1k8['inputContainer']['style']['left'] = tu7w0 + 'px', lno1k8['inputContainer']['style']['top'] = $gcrs + 'px';
      }, yb2wa7['stage']['on']('resize', null, rgcp$i['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xf96m) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), sw0u2t['_soundClass'] = dnl16o, sw0u2t['_musicClass'] = dnl16o;
    }, rgcp$i['_onStageResize'] = function () {
      var dn81lo = yb2wa7['stage']['_canvasTransform']['identity']();dn81lo['scale'](olk841['width'] / mqhxef['canvas']['width'] / a2bwy7['getPixelRatio'](), olk841['height'] / mqhxef['canvas']['height'] / a2bwy7['getPixelRatio']());
    }, rgcp$i['wxinputFocus'] = function (z5evhf) {
      var wt2ua7 = lno1k8['inputElement']['target'];if (wt2ua7 && !wt2ua7['editable']) return;qfemzh['window']['wx']['offKeyboardConfirm'](), qfemzh['window']['wx']['offKeyboardInput'](), qfemzh['window']['wx']['showKeyboard']({ 'defaultValue': wt2ua7['text'], 'maxLength': wt2ua7['maxChars'], 'multiple': wt2ua7['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (qmfhz) {}, 'fail': function (xd69mq) {} }), qfemzh['window']['wx']['onKeyboardConfirm'](function (okl834) {
        var hz5m = okl834 ? okl834['value'] : '';wt2ua7['text'] = hz5m, wt2ua7['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), qfemzh['window']['wx']['onKeyboardInput'](function (xefmq) {
        var kl184 = xefmq ? xefmq['value'] : '';if (!wt2ua7['multiline']) {
          if (kl184['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }wt2ua7['text'] = kl184, wt2ua7['event']('input');
      });
    }, rgcp$i['inputEnter'] = function () {
      lno1k8['inputElement']['target']['focus'] = ![];
    }, rgcp$i['wxinputblur'] = function () {
      rgcp$i['hideKeyboard']();
    }, rgcp$i['hideKeyboard'] = function () {
      qfemzh['window']['wx']['offKeyboardConfirm'](), qfemzh['window']['wx']['offKeyboardInput'](), qfemzh['window']['wx']['hideKeyboard']({ 'success': function (l841k) {
          console['log']('隐藏键盘');
        }, 'fail': function (xfm96) {
          console['log']('隐藏键盘出错:' + (xfm96 ? xfm96['errMsg'] : ''));
        } });
    }, rgcp$i;
  }(),
      x96nq = function () {
    function s$rpg() {}o3lk48(s$rpg, 'laya.wx.mini.MiniLoader');var nlk1o8 = s$rpg['prototype'];return nlk1o8['load'] = function (d9q, at72uw, w2a7y, hxmq, spgc$) {
      w2a7y === void 0x0 && (w2a7y = !![]), spgc$ === void 0x0 && (spgc$ = ![]);var y4k3b = this;y4k3b['_url'] = d9q;if (d9q['indexOf']('data:image') === 0x0) y4k3b['_type'] = at72uw = 'image';else y4k3b['_type'] = at72uw || (at72uw = y4k3b['getTypeFromUrl'](d9q));y4k3b['_cache'] = w2a7y, y4k3b['_data'] = null;var y347ab = 'ascii';if (d9q['indexOf']('.fnt') != -0x1) y347ab = 'utf8';else at72uw == 'arraybuffer' && (y347ab = '');;var dqxm9 = n6od9['getFileExtension'](d9q);if (s$rpg['_fileTypeArr']['indexOf'](dqxm9) != -0x1) qfemzh['EnvConfig']['load']['call'](this, d9q, at72uw, w2a7y, hxmq, spgc$);else {
        if (!spg$0['getFileInfo'](d9q)) {
          if (d9q['indexOf']('layaNativeDir/') != -0x1) {
            if (qfemzh['isZiYu']) {
              var bky8 = spg$0['ziyuFileData'][d9q];y4k3b['onLoaded'](bky8);return;
            } else {
              cosnole['log']('read read'), spg$0['read'](d9q, y347ab, new _jev(s$rpg, s$rpg['onReadNativeCallBack'], [y347ab, d9q, at72uw, w2a7y, hxmq, spgc$, y4k3b]));return;
            }
          }if (gsu0pt['rootPath'] == '') var hxfm9q = d9q;else hxfm9q = d9q['split'](gsu0pt['rootPath'])[0x0];d9q['indexOf']('http://') != -0x1 || d9q['indexOf']('https://') != -0x1 ? qfemzh['EnvConfig']['load']['call'](y4k3b, d9q, at72uw, w2a7y, hxmq, spgc$) : spg$0['readFile'](hxfm9q, y347ab, new _jev(s$rpg, s$rpg['onReadNativeCallBack'], [y347ab, d9q, at72uw, w2a7y, hxmq, spgc$, y4k3b]), d9q);
        } else qfemzh['EnvConfig']['load']['call'](this, d9q, at72uw, w2a7y, hxmq, spgc$);
      }
    }, nlk1o8['resMgrLoad'] = function (zmfeh5, h9xm, gsrpc, zmehq, fmehqx, fqmehx, z5e_) {
      gsrpc === void 0x0 && (gsrpc = 0x0), zmehq === void 0x0 && (zmehq = ![]), fmehqx === void 0x0 && (fmehqx = ![]), fqmehx === void 0x0 && (fqmehx = 0x0), z5e_ === void 0x0 && (z5e_ = 0x3), zmfeh5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zmfeh5), qfemzh['EnvConfig']['resMgrLoad'](zmfeh5, (o6lnd1, zhmqef, h5emf) => {
        s$rpg['prototype']['resMgrLoadCallBack'](o6lnd1, zhmqef, h5emf, h9xm);
      }, gsrpc, zmehq, fmehqx, fqmehx, z5e_);
    }, nlk1o8['resMgrLoadCallBack'] = function (sut0g, exqhf, mfhxeq, nld61o) {
      console['log']('buff:::', sut0g, mfhxeq, spg$0['fileNativeDir'] + '///' + spg$0['fileListName']), nld61o(sut0g, exqhf, mfhxeq);
    }, nlk1o8['clearRes'] = function (gp$0sc, vz_j5) {
      vz_j5 === void 0x0 && (vz_j5 = ![]);var gtups = this;gtups['clearRes'](gp$0sc, vz_j5);var lo8k1n = spg$0['getFileInfo'](gp$0sc);if (lo8k1n && (gp$0sc['indexOf']('http://') != -0x1 || gp$0sc['indexOf']('https://') != -0x1)) {
        var fqmex = lo8k1n['md5'],
            l4ky8 = spg$0['getFileNativePath'](fqmex);spg$0['remove'](l4ky8);
      }
    }, s$rpg['onReadNativeCallBack'] = function (twps0u, ab34k, l83ky4, qehmx, pci$gr, u2w7, kl41, ev5_z, scgp$0) {
      qehmx === void 0x0 && (qehmx = !![]), u2w7 === void 0x0 && (u2w7 = ![]), ev5_z === void 0x0 && (ev5_z = 0x0);if (!ev5_z) {
        var tgc0p;if (l83ky4 == 'json' || l83ky4 == 'atlas') tgc0p = qfemzh['getJson'](scgp$0['data']);else l83ky4 == 'xml' ? tgc0p = n6od9['parseXMLFromString'](scgp$0['data']) : tgc0p = scgp$0['data'];kl41['onLoaded'](tgc0p), !qfemzh['isZiYu'] && qfemzh['isPosMsgYu'] && l83ky4 != 'arraybuffer' && wx['postMessage']({ 'url': ab34k, 'data': tgc0p, 'isLoad': !![] });
      } else ev5_z == 0x1 && qfemzh['EnvConfig']['load']['call'](kl41, ab34k, l83ky4, qehmx, pci$gr, u2w7);
    }, c$rpgs(s$rpg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), s$rpg;
  }(),
      spg$0 = function (_5vje) {
    function ehqzf() {
      ehqzf['__super']['call'](this);;
    }return o3lk48(ehqzf, 'laya.wx.mini.MiniFileMgr', _5vje), ehqzf['isLoadFile'] = function (ndlo81) {
      return ehqzf['_fileTypeArr']['indexOf'](ndlo81) != -0x1 ? !![] : ![];
    }, ehqzf['getFileInfo'] = function ($crgip) {
      var aw72tu = $crgip['split']('?')[0x0],
          d8l = ehqzf['filesListObj'][aw72tu];if (d8l == null) return null;else return d8l;return null;
    }, ehqzf['onFileUpdate'] = function (h5zvj, _5jvz) {
      var cp0gs$ = h5zvj['split']('/'),
          a2uw7t = cp0gs$[cp0gs$['length'] - 0x1],
          mqh9 = ehqzf['getFileInfo'](_5jvz);if (mqh9 == null) ehqzf['onSaveFile'](_5jvz, a2uw7t);else {
        if (mqh9['readyUrl'] != _5jvz) ehqzf['remove'](a2uw7t, _5jvz);
      }
    }, ehqzf['exits'] = function (u2b7aw, j5vz_) {
      var bk3y48 = ehqzf['getFileNativePath'](u2b7aw);ehqzf['fs']['getFileInfo']({ 'filePath': bk3y48, 'success': function (nx6qd9) {
          j5vz_ != null && j5vz_['runWith']([0x0, nx6qd9]);
        }, 'fail': function (waby2) {
          j5vz_ != null && j5vz_['runWith']([0x1, waby2]);
        } });
    }, ehqzf['read'] = function (q9xmh, ya732b, t7wu0, sgtp) {
      ya732b === void 0x0 && (ya732b = 'ascill'), sgtp === void 0x0 && (sgtp = '');var od19n6;sgtp != '' ? od19n6 = ehqzf['getFileNativePath'](q9xmh) : od19n6 = q9xmh, ehqzf['fs']['readFile']({ 'filePath': od19n6, 'encoding': ya732b, 'success': function (jez_5) {
          t7wu0 != null && t7wu0['runWith']([0x0, jez_5]);
        }, 'fail': function (zf) {
          if (zf && sgtp != '') ehqzf['down'](sgtp, ya732b, t7wu0, sgtp);else t7wu0 != null && t7wu0['runWith']([0x1]);
        } });
    }, ehqzf['readNativeFile'] = function (l418ko, t20wu) {
      ehqzf['fs']['readFile']({ 'filePath': l418ko, 'encoding': '', 'success': function (wb2ya7) {
          t20wu != null && t20wu['runWith']([0x0]);
        }, 'fail': function (dx61n) {
          t20wu != null && t20wu['runWith']([0x1]);
        } });
    }, ehqzf['down'] = function (zevhf5, x961n, ko8l4, onlk8) {
      x961n === void 0x0 && (x961n = 'ascill'), onlk8 === void 0x0 && (onlk8 = '');var hev5jz = ehqzf['getFileNativePath'](onlk8),
          n6xq9 = ehqzf['wxdown']({ 'url': zevhf5, 'filePath': hev5jz, 'success': function (qhx9m) {
          if (qhx9m['statusCode'] === 0xc8) ehqzf['readFile'](qhx9m['filePath'], x961n, ko8l4, onlk8);
        }, 'fail': function (l34y) {
          ko8l4 != null && ko8l4['runWith']([0x1, l34y]);
        } });n6xq9['onProgressUpdate'](function (v5ej_) {
        ko8l4 != null && ko8l4['runWith']([0x2, v5ej_['progress']]);
      });
    }, ehqzf['readFile'] = function (spcr, put0s, kb843, o3k4) {
      put0s === void 0x0 && (put0s = 'ascill'), o3k4 === void 0x0 && (o3k4 = ''), ehqzf['fs']['readFile']({ 'filePath': spcr, 'encoding': put0s, 'success': function (spu0g) {
          if (spcr['indexOf']('http://') != -0x1 || spcr['indexOf']('https://') != -0x1) ehqzf['onFileUpdate'](spcr, o3k4);kb843 != null && kb843['runWith']([0x0, spu0g]);
        }, 'fail': function (t0scg) {
          if (t0scg) kb843 != null && kb843['runWith']([0x1, t0scg]);
        } });
    }, ehqzf['downImg'] = function (w7u2t, crsp$, yabk3) {
      yabk3 === void 0x0 && (yabk3 = '');var ya3k = ehqzf['wxdown']({ 'url': w7u2t, 'success': function (jze_) {
          jze_['statusCode'] === 0xc8 && ehqzf['copyFile'](jze_['tempFilePath'], yabk3, crsp$);
        }, 'fail': function (ko1l48) {
          crsp$ != null && crsp$['runWith']([0x1, ko1l48]);
        } });
    }, ehqzf['copyFile'] = function ($c0gps, _j5ve, z_ejv5) {
      var gpsr = $c0gps['split']('/'),
          ug0ps = gpsr[gpsr['length'] - 0x1],
          waub27 = _j5ve['split']('?')[0x0],
          xfm6q9 = ehqzf['getFileInfo'](_j5ve),
          ol61n = ehqzf['getFileNativePath'](ug0ps);ehqzf['fs']['copyFile']({ 'srcPath': $c0gps, 'destPath': ol61n, 'success': function (l1k) {
          if (!xfm6q9) ehqzf['onSaveFile'](_j5ve, ug0ps), z_ejv5 != null && z_ejv5['runWith']([0x0]);else {
            if (xfm6q9['readyUrl'] != _j5ve) ehqzf['remove'](ug0ps, _j5ve, z_ejv5);
          }
        }, 'fail': function (mfhxqe) {
          z_ejv5 != null && z_ejv5['runWith']([0x1, mfhxqe]);
        } });
    }, ehqzf['getFileNativePath'] = function (b7ya4) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + b7ya4;
    }, ehqzf['remove'] = function (y7b2aw, mfhez, hvje5) {
      mfhez === void 0x0 && (mfhez = '');var k4ab = ehqzf['getFileInfo'](mfhez),
          u7baw2 = ehqzf['getFileNativePath'](k4ab['md5']);yb2wa7['loader']['clearRes'](k4ab['readyUrl']), ehqzf['fs']['unlink']({ 'filePath': u7baw2, 'success': function (dlo8n1) {
          if (mfhez != '') ehqzf['onSaveFile'](mfhez, y7b2aw);hvje5 != null && hvje5['runWith']([0x0]);
        }, 'fail': function (o619dn) {} });
    }, ehqzf['onSaveFile'] = function (tpuw, j5ezv) {
      var mxf96q = tpuw['split']('?')[0x0];ehqzf['filesListObj'][mxf96q] = { 'md5': j5ezv, 'readyUrl': tpuw }, ehqzf['fs']['writeFile']({ 'filePath': ehqzf['fileNativeDir'] + '/' + ehqzf['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ehqzf['filesListObj']), 'success': function (eqhzm) {
          console['log']('写入测试测试成功：', eqhzm);
        }, 'fail': function (y27) {
          console['log']('写入测试测试失败：', y27);
        } });
    }, ehqzf['existDir'] = function (yl, hmf9qx) {
      ehqzf['fs']['mkdir']({ 'dirPath': yl, 'success': function (zehjv) {
          hmf9qx != null && hmf9qx['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (d1o) {
          if (d1o['errMsg']['indexOf']('file already exists') != -0x1) ehqzf['readSync'](ehqzf['fileListName'], 'utf8', hmf9qx);else hmf9qx != null && hmf9qx['runWith']([0x1, d1o]);
        } });
    }, ehqzf['readSync'] = function (meqfx, w2b, ip$gc, u72) {
      w2b === void 0x0 && (w2b = 'ascill'), u72 === void 0x0 && (u72 = '');var pwst0u = ehqzf['getFileNativePath'](meqfx),
          ci$rp;try {
        ci$rp = ehqzf['fs']['readFileSync'](pwst0u), ip$gc != null && ip$gc['runWith']([0x0, { 'data': ci$rp }]);
      } catch (fqmhxe) {
        ip$gc != null && ip$gc['runWith']([0x1]);
      }
    }, ehqzf['readCache'] = function () {}, ehqzf['writeCache'] = function (ba473y) {
      var tpcg = readyUrl['split']('?')[0x0];ehqzf['filesListObj'][tpcg] = { 'md5': md5Name, 'readyUrl': readyUrl }, ehqzf['fs']['writeFile']({ 'filePath': ehqzf['fileNativeDir'] + '/' + ehqzf['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ehqzf['filesListObj']), 'success': function (lon8) {}, 'fail': function (k8ol34) {} });
    }, ehqzf['setNativeFileDir'] = function (fehxmq) {
      ehqzf['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + fehxmq;
    }, ehqzf['filesListObj'] = {}, ehqzf['fileNativeDir'] = null, ehqzf['fileListName'] = 'layaairfiles.txt', ehqzf['ziyuFileData'] = {}, c$rpgs(ehqzf, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ehqzf;
  }(jhevz5),
      dnl16o = function (zvjh) {
    function u2aw7() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], u2aw7['__super']['call'](this), this['_sound'] = u2aw7['_createSound']();
    }o3lk48(u2aw7, 'laya.wx.mini.MiniSound', zvjh);var hvf5 = u2aw7['prototype'];return hvf5['load'] = function (uwa2b) {
      var o8kl1n = this;uwa2b = gsu0pt['formatURL'](uwa2b), this['url'] = uwa2b;if (u2aw7['_audioCache'][uwa2b]) {
        this['event']('complete');return;
      }function efmzhq() {
        if (u2aw7['_null'] != undefined) o8kl1n['_sound']['onCanplay'](u2aw7['_null']), o8kl1n['_sound']['onError'](u2aw7['_null']);else try {
          o8kl1n['_sound']['onCanplay'](null), o8kl1n['_sound']['onError'](null), u2aw7['_null'] = null;
        } catch (uw7at2) {
          console['warn']('[wxmini] _clearSound:' + uw7at2), o8kl1n['_sound']['onCanplay'](n61lo), o8kl1n['_sound']['onError'](n61lo), u2aw7['_null'] = n61lo;
        }
      }function w027tu() {
        efmzhq(), ay37['loaded'] = !![], ay37['event']('complete'), u2aw7['_audioCache'][ay37['url']] = ay37;
      }function wtus0(sp0) {
        console['error']('errCode=' + sp0['errCode'] + '  errMsg=' + sp0['errMsg']), efmzhq(), ay37['event']('error');
      }function n61lo() {}this['_sound']['onCanplay'](w027tu), this['_sound']['onError'](wtus0), this['_sound']['src'] = uwa2b;var ay37 = this;
    }, hvf5['play'] = function (n8ld, l1dno) {
      n8ld === void 0x0 && (n8ld = 0x0), l1dno === void 0x0 && (l1dno = 0x0);var pcir;if (this['url'] == sw0u2t['_tMusic']) {
        if (!u2aw7['_musicAudio']) u2aw7['_musicAudio'] = u2aw7['_createSound']();pcir = u2aw7['_musicAudio'];
      } else pcir = u2aw7['_createSound']();pcir['src'] = this['url'];var w7u2at = new b4ayk(pcir);return w7u2at['url'] = this['url'], w7u2at['loops'] = l1dno, w7u2at['startTime'] = n8ld, w7u2at['play'](), sw0u2t['addChannel'](w7u2at), w7u2at;
    }, hvf5['dispose'] = function () {
      var y327a = u2aw7['_audioCache'][this['url']];y327a && (y327a['src'] = '', delete u2aw7['_audioCache'][this['url']]);
    }, mfq96x(0x0, hvf5, 'duration', function () {
      return this['_sound']['duration'];
    }), u2aw7['_createSound'] = function () {
      return u2aw7['_id']++, qfemzh['window']['wx']['createInnerAudioContext']();
    }, u2aw7['_musicAudio'] = null, u2aw7['_id'] = 0x0, u2aw7['_audioCache'] = {}, u2aw7['_null'] = undefined, u2aw7;
  }(jhevz5),
      b4ayk = function (xem) {
    function prci$(hqxmef) {
      this['_audio'] = null, this['_onEnd'] = null, prci$['__super']['call'](this), this['_audio'] = hqxmef, this['_onEnd'] = n6od9['bind'](this['__onEnd'], this), hqxmef['onEnded'](this['_onEnd']);
    }o3lk48(prci$, 'laya.wx.mini.MiniSoundChannel', xem);var ok438 = prci$['prototype'];return ok438['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (yb2wa7['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ok438['__onNull'] = function () {}, ok438['play'] = function () {
      this['isStopped'] = ![], sw0u2t['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ok438['stop'] = function () {
      this['isStopped'] = !![], sw0u2t['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (prci$['_null'] != undefined) this['_audio']['onEnded'](prci$['_null']);else try {
        this['_audio']['onEnded'](null), prci$['_null'] = null;
      } catch (k84y) {
        console['warn']('[wxmini] stop:' + k84y), this['_audio']['onEnded'](n6od9['bind'](this['__onNull'], this)), prci$['_null'] = n6od9['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ok438['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ok438['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], sw0u2t['addChannel'](this), this['_audio']['play']();
    }, mfq96x(0x0, ok438, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), mfq96x(0x0, ok438, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), mfq96x(0x0, ok438, 'volume', function () {
      return 0x1;
    }, function (sp0gtc) {}), prci$['_null'] = undefined, prci$;
  }(k3a4yb);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var gcrpi in Laya) {
    var tsw2 = Laya[gcrpi];tsw2 && tsw2['__isclass'] && (exports[gcrpi] = tsw2);
  }
});