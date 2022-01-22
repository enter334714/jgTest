var I1 = wx.h$;
(function (window, document, kcg) {
  var ojvy5r = kcg['un'],
      jo5 = kcg['uns'],
      a43nu1 = kcg['static'],
      jnix = kcg['class'],
      t_ez = kcg['getset'],
      etzhpc = kcg['__newvec'],
      ix7jr = laya['utils']['Browser'],
      wep_z = laya['events']['Event'],
      n34xi = laya['events']['EventDispatcher'],
      g6bdk0 = laya['resource']['HTMLImage'],
      thze_p = laya['utils']['Handler'],
      ni43 = laya['display']['Input'],
      tchd68 = laya['net']['Loader'],
      gkqb = laya['maths']['Matrix'],
      o5bk0q = laya['renders']['Render'],
      _9pfw2 = laya['utils']['RunDriver'],
      h8zet = laya['media']['Sound'],
      f9p2w = laya['media']['SoundChannel'],
      d68cth = laya['media']['SoundManager'],
      a13ul = laya['display']['Stage'],
      chtp = laya['net']['URL'],
      ws$2f9 = laya['utils']['Utils'],
      _ew2p9 = function () {
    function k0gqb() {}return jnix(k0gqb, 'laya.wx.mini.MiniAdpter'), k0gqb['getJson'] = function (pczet) {
      return JSON['parse'](pczet);
    }, k0gqb['init'] = function (f92w$, oby05) {
      f92w$ === void 0x0 && (f92w$ = ![]), oby05 === void 0x0 && (oby05 = ![]);if (k0gqb['_inited']) return;k0gqb['window'] = window;if (k0gqb['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;k0gqb['_inited'] = !![], k0gqb['isZiYu'] = oby05, k0gqb['isPosMsgYu'] = f92w$, k0gqb['EnvConfig'] = {}, !k0gqb['isZiYu'] && (q05oy['setNativeFileDir']('/layaairGame'), q05oy['existDir'](q05oy['fileNativeDir'], thze_p['create'](k0gqb, k0gqb['onMkdirCallBack']))), k0gqb['window']['focus'] = function () {}, kcg['getUrlPath'] = function () {}, k0gqb['window']['logtime'] = function (x3in41) {}, k0gqb['window']['alertTimeLog'] = function (dkqbg0) {}, k0gqb['window']['resetShareInfo'] = function () {}, k0gqb['window']['CanvasRenderingContext2D'] = function () {}, k0gqb['window']['CanvasRenderingContext2D']['prototype'] = k0gqb['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], k0gqb['window']['document']['body']['appendChild'] = function () {}, k0gqb['EnvConfig']['pixelRatioInt'] = 0x0, _9pfw2['getPixelRatio'] = k0gqb['pixelRatio'], k0gqb['_preCreateElement'] = ix7jr['createElement'], ix7jr['createElement'] = k0gqb['createElement'], _9pfw2['createShaderCondition'] = k0gqb['createShaderCondition'], ws$2f9['parseXMLFromString'] = k0gqb['parseXMLFromString'], ni43['_createInputElement'] = i1x47['_createInputElement'], k0gqb['EnvConfig']['load'] = tchd68['prototype']['load'], tchd68['prototype']['load'] = h_p2ez['prototype']['load'], k0gqb['isZiYu'] && f92w$ && wx['onMessage'](function (ni4u13) {
        ni4u13['isLoad'] && (q05oy['ziyuFileData'][ni4u13['url']] = ni4u13['data']);
      });
    }, k0gqb['onMkdirCallBack'] = function (bgqk50, ewz_p) {
      if (!bgqk50) q05oy['filesListObj'] = JSON['parse'](ewz_p['data']);
    }, k0gqb['pixelRatio'] = function () {
      if (!k0gqb['EnvConfig']['pixelRatioInt']) try {
        var qbkgd = wx['getSystemInfoSync']();return k0gqb['EnvConfig']['pixelRatioInt'] = qbkgd['pixelRatio'], qbkgd = qbkgd, qbkgd['pixelRatio'];
      } catch (yrjx) {}return k0gqb['EnvConfig']['pixelRatioInt'];
    }, k0gqb['createElement'] = function (pew_z2) {
      if (pew_z2 == 'canvas') {
        var gkbdq;return k0gqb['idx'] == 0x1 ? k0gqb['isZiYu'] ? (gkbdq = sharedCanvas, gkbdq['style'] = {}) : gkbdq = window['canvas'] : gkbdq = window['wx']['createCanvas'](), k0gqb['idx']++, gkbdq;
      } else {
        if (pew_z2 == 'textarea' || pew_z2 == 'input') return k0gqb['onCreateInput'](pew_z2);else {
          if (pew_z2 == 'div') {
            var x3in14 = k0gqb['_preCreateElement'](pew_z2);return x3in14['contains'] = function (um3l4a) {
              return null;
            }, x3in14['removeChild'] = function (hdc68t) {}, x3in14;
          } else return k0gqb['_preCreateElement'](pew_z2);
        }
      }
    }, k0gqb['onCreateInput'] = function (rybo5q) {
      var cg6k8 = k0gqb['_preCreateElement'](rybo5q);return cg6k8['focus'] = i1x47['wxinputFocus'], cg6k8['blur'] = i1x47['wxinputblur'], cg6k8['style'] = {}, cg6k8['value'] = 0x0, cg6k8['parentElement'] = {}, cg6k8['placeholder'] = {}, cg6k8['type'] = {}, cg6k8['setColor'] = function (f2w9) {}, cg6k8['setType'] = function (oq0yb5) {}, cg6k8['setFontFace'] = function (na341u) {}, cg6k8['addEventListener'] = function (kg8c) {}, cg6k8['contains'] = function (fw9s2) {
        return null;
      }, cg6k8['removeChild'] = function (xrj7v) {}, cg6k8;
    }, k0gqb['createShaderCondition'] = function (p9_f) {
      var d6cg8t = this,
          malu43 = function () {
        var jx7ry = p9_f;return d6cg8t[p9_f['replace']('this.', '')];
      };return malu43;
    }, k0gqb['EnvConfig'] = null, k0gqb['window'] = null, k0gqb['_preCreateElement'] = null, k0gqb['_inited'] = ![], k0gqb['wxRequest'] = null, k0gqb['systemInfo'] = null, k0gqb['version'] = '0.0.1', k0gqb['isZiYu'] = ![], k0gqb['isPosMsgYu'] = ![], k0gqb['parseXMLFromString'] = function (fw_$92) {
      var xijn1, iu14;fw_$92 = fw_$92['replace'](/>\s+</g, '><');try {
        xijn1 = new window['Parser']['DOMParser']()['parseFromString'](fw_$92, 'text/xml');
      } catch (dbgqk0) {
        throw '需要引入xml解析库文件';
      }return xijn1;
    }, k0gqb['idx'] = 0x1, k0gqb;
  }(),
      $f29ws = function () {
    function bg5q0k() {}jnix(bg5q0k, 'laya.wx.mini.MiniImage');var $9_2w = bg5q0k['prototype'];return $9_2w['_loadImage'] = function (nua43) {
      var ephct = this,
          w_f9$2 = ![];nua43['indexOf']('layaNativeDir/') == -0x1 && (w_f9$2 = !![], nua43 = chtp['formatURL'](nua43));if (!q05oy['getFileInfo'](nua43)) {
        if (nua43['indexOf']('http://') != -0x1 || nua43['indexOf']('https://') != -0x1) q05oy['downImg'](nua43, new thze_p(bg5q0k, bg5q0k['onDownImgCallBack'], [nua43, ephct]), nua43);else bg5q0k['onCreateImage'](nua43, ephct, !![]);
      } else bg5q0k['onCreateImage'](nua43, ephct, !w_f9$2);
    }, bg5q0k['onDownImgCallBack'] = function (z2pew, tepz, sw$9f2) {
      if (!sw$9f2) bg5q0k['onCreateImage'](z2pew, tepz);else tepz['onError'](null);
    }, bg5q0k['onCreateImage'] = function (vj7rx, z_e2w, u3lm4) {
      u3lm4 === void 0x0 && (u3lm4 = ![]);var ybq0;if (!u3lm4) {
        var q0b = q05oy['getFileInfo'](vj7rx),
            e_pzt = q0b['md5'];ybq0 = q05oy['getFileNativePath'](e_pzt);
      } else ybq0 = vj7rx;if (z_e2w['imgCache'] == null) z_e2w['imgCache'] = {};var g6dtc8;function u13la4() {
        g6dtc8['onload'] = null, g6dtc8['onerror'] = null, delete z_e2w['imgCache'][vj7rx];
      };var bdgk0 = function () {
        u13la4(), z_e2w['onLoaded'](g6dtc8);
      },
          boqr = function () {
        u13la4(), z_e2w['event']('error', 'Load image failed');
      };z_e2w['_type'] == 'nativeimage' ? (g6dtc8 = new ix7jr['window']['Image'](), g6dtc8['crossOrigin'] = '', g6dtc8['onload'] = bdgk0, g6dtc8['onerror'] = boqr, g6dtc8['src'] = ybq0, z_e2w['imgCache'][vj7rx] = g6dtc8) : new g6bdk0['create'](ybq0, { 'onload': bdgk0, 'onerror': boqr, 'onCreate': function (pethzc) {
          g6dtc8 = pethzc, z_e2w['imgCache'][vj7rx] = pethzc;
        } });
    }, bg5q0k;
  }(),
      i1x47 = function () {
    function njiv7x() {}return jnix(njiv7x, 'laya.wx.mini.MiniInput'), njiv7x['_createInputElement'] = function () {
      ni43['_initInput'](ni43['area'] = ix7jr['createElement']('textarea')), ni43['_initInput'](ni43['input'] = ix7jr['createElement']('input')), ni43['inputContainer'] = ix7jr['createElement']('div'), ni43['inputContainer']['style']['position'] = 'absolute', ni43['inputContainer']['style']['zIndex'] = 0x186a0, ix7jr['container']['appendChild'](ni43['inputContainer']), ni43['inputContainer']['setPos'] = function (e9wp2_, qoby05) {
        ni43['inputContainer']['style']['left'] = e9wp2_ + 'px', ni43['inputContainer']['style']['top'] = qoby05 + 'px';
      }, kcg['stage']['on']('resize', null, njiv7x['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (bqg0dk) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), d68cth['_soundClass'] = jv, d68cth['_musicClass'] = jv;
    }, njiv7x['_onStageResize'] = function () {
      var tg86c = kcg['stage']['_canvasTransform']['identity']();tg86c['scale'](ix7jr['width'] / o5bk0q['canvas']['width'] / _9pfw2['getPixelRatio'](), ix7jr['height'] / o5bk0q['canvas']['height'] / _9pfw2['getPixelRatio']());
    }, njiv7x['wxinputFocus'] = function (thzpec) {
      var x341 = ni43['inputElement']['target'];if (x341 && !x341['editable']) return;_ew2p9['window']['wx']['offKeyboardConfirm'](), _ew2p9['window']['wx']['offKeyboardInput'](), _ew2p9['window']['wx']['showKeyboard']({ 'defaultValue': x341['text'], 'maxLength': x341['maxChars'], 'multiple': x341['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (k5q0) {}, 'fail': function (i1j) {} }), _ew2p9['window']['wx']['onKeyboardConfirm'](function (f9_2w$) {
        var bq5ok0 = f9_2w$ ? f9_2w$['value'] : '';x341['text'] = bq5ok0, x341['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _ew2p9['window']['wx']['onKeyboardInput'](function (yv5roq) {
        var tecp = yv5roq ? yv5roq['value'] : '';if (!x341['multiline']) {
          if (tecp['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }x341['text'] = tecp, x341['event']('input');
      });
    }, njiv7x['inputEnter'] = function () {
      ni43['inputElement']['target']['focus'] = ![];
    }, njiv7x['wxinputblur'] = function () {
      njiv7x['hideKeyboard']();
    }, njiv7x['hideKeyboard'] = function () {
      _ew2p9['window']['wx']['offKeyboardConfirm'](), _ew2p9['window']['wx']['offKeyboardInput'](), _ew2p9['window']['wx']['hideKeyboard']({ 'success': function (byqo) {
          console['log']('隐藏键盘');
        }, 'fail': function (kgd0bq) {
          console['log']('隐藏键盘出错:' + (kgd0bq ? kgd0bq['errMsg'] : ''));
        } });
    }, njiv7x;
  }(),
      h_p2ez = function () {
    function rxvyj7() {}jnix(rxvyj7, 'laya.wx.mini.MiniLoader');var k8d0g6 = rxvyj7['prototype'];return k8d0g6['load'] = function (kq0bd, in1x4, bdk0, $w9sf2, epw29) {
      bdk0 === void 0x0 && (bdk0 = !![]), epw29 === void 0x0 && (epw29 = ![]);var ixrjv7 = this;ixrjv7['_url'] = kq0bd;if (kq0bd['indexOf']('data:image') === 0x0) ixrjv7['_type'] = in1x4 = 'image';else ixrjv7['_type'] = in1x4 || (in1x4 = ixrjv7['getTypeFromUrl'](kq0bd));ixrjv7['_cache'] = bdk0, ixrjv7['_data'] = null;var e_hp2z = 'ascii';if (kq0bd['indexOf']('.fnt') != -0x1) e_hp2z = 'utf8';else in1x4 == 'arraybuffer' && (e_hp2z = '');;var pzh_t = ws$2f9['getFileExtension'](kq0bd);if (rxvyj7['_fileTypeArr']['indexOf'](pzh_t) != -0x1) _ew2p9['EnvConfig']['load']['call'](this, kq0bd, in1x4, bdk0, $w9sf2, epw29);else {
        if (!q05oy['getFileInfo'](kq0bd)) {
          if (kq0bd['indexOf']('layaNativeDir/') != -0x1) {
            if (_ew2p9['isZiYu']) {
              var cd8ht = q05oy['ziyuFileData'][kq0bd];ixrjv7['onLoaded'](cd8ht);return;
            } else {
              cosnole['log']('read read'), q05oy['read'](kq0bd, e_hp2z, new thze_p(rxvyj7, rxvyj7['onReadNativeCallBack'], [e_hp2z, kq0bd, in1x4, bdk0, $w9sf2, epw29, ixrjv7]));return;
            }
          }if (chtp['rootPath'] == '') var nj = kq0bd;else nj = kq0bd['split'](chtp['rootPath'])[0x0];kq0bd['indexOf']('http://') != -0x1 || kq0bd['indexOf']('https://') != -0x1 ? _ew2p9['EnvConfig']['load']['call'](ixrjv7, kq0bd, in1x4, bdk0, $w9sf2, epw29) : q05oy['readFile'](nj, e_hp2z, new thze_p(rxvyj7, rxvyj7['onReadNativeCallBack'], [e_hp2z, kq0bd, in1x4, bdk0, $w9sf2, epw29, ixrjv7]), kq0bd);
        } else _ew2p9['EnvConfig']['load']['call'](this, kq0bd, in1x4, bdk0, $w9sf2, epw29);
      }
    }, k8d0g6['resMgrLoad'] = function (vy7xj, boy5rq, jvxr, ixvnj7, h8z6ct, y7, chp) {
      jvxr === void 0x0 && (jvxr = 0x0), ixvnj7 === void 0x0 && (ixvnj7 = ![]), h8z6ct === void 0x0 && (h8z6ct = ![]), y7 === void 0x0 && (y7 = 0x0), chp === void 0x0 && (chp = 0x3), vy7xj['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', vy7xj), _ew2p9['EnvConfig']['resMgrLoad'](vy7xj, (qrvoy5, p_29wf, oyvjr5) => {
        rxvyj7['prototype']['resMgrLoadCallBack'](qrvoy5, p_29wf, oyvjr5, boy5rq);
      }, jvxr, ixvnj7, h8z6ct, y7, chp);
    }, k8d0g6['resMgrLoadCallBack'] = function (au413n, kb05qo, n1ji, z8ceh) {
      console['log']('buff:::', au413n, n1ji, q05oy['fileNativeDir'] + '///' + q05oy['fileListName']), z8ceh(au413n, kb05qo, n1ji);
    }, k8d0g6['clearRes'] = function (gdb6k, b0qdkg) {
      b0qdkg === void 0x0 && (b0qdkg = ![]);var tep_zh = this;tep_zh['clearRes'](gdb6k, b0qdkg);var k0b5g = q05oy['getFileInfo'](gdb6k);if (k0b5g && (gdb6k['indexOf']('http://') != -0x1 || gdb6k['indexOf']('https://') != -0x1)) {
        var al43mu = k0b5g['md5'],
            g8k60 = q05oy['getFileNativePath'](al43mu);q05oy['remove'](g8k60);
      }
    }, rxvyj7['onReadNativeCallBack'] = function (zhp_te, jinx7v, xi1nj, yo7rjv, gc8k6d, $wf_92, d086kg, het8z, f29_w$) {
      yo7rjv === void 0x0 && (yo7rjv = !![]), $wf_92 === void 0x0 && ($wf_92 = ![]), het8z === void 0x0 && (het8z = 0x0);if (!het8z) {
        var bkqdg0;if (xi1nj == 'json' || xi1nj == 'atlas') bkqdg0 = _ew2p9['getJson'](f29_w$['data']);else xi1nj == 'xml' ? bkqdg0 = ws$2f9['parseXMLFromString'](f29_w$['data']) : bkqdg0 = f29_w$['data'];d086kg['onLoaded'](bkqdg0), !_ew2p9['isZiYu'] && _ew2p9['isPosMsgYu'] && xi1nj != 'arraybuffer' && wx['postMessage']({ 'url': jinx7v, 'data': bkqdg0, 'isLoad': !![] });
      } else het8z == 0x1 && _ew2p9['EnvConfig']['load']['call'](d086kg, jinx7v, xi1nj, yo7rjv, gc8k6d, $wf_92);
    }, a43nu1(rxvyj7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), rxvyj7;
  }(),
      q05oy = function (o0kbq5) {
    function k6cg8() {
      k6cg8['__super']['call'](this);;
    }return jnix(k6cg8, 'laya.wx.mini.MiniFileMgr', o0kbq5), k6cg8['isLoadFile'] = function (v5jro) {
      return k6cg8['_fileTypeArr']['indexOf'](v5jro) != -0x1 ? !![] : ![];
    }, k6cg8['getFileInfo'] = function (jxiv7r) {
      var phtcze = jxiv7r['split']('?')[0x0],
          rvj7i = k6cg8['filesListObj'][phtcze];if (rvj7i == null) return null;else return rvj7i;return null;
    }, k6cg8['onFileUpdate'] = function (pz2ew_, ua3n14) {
      var e9w_p2 = pz2ew_['split']('/'),
          _2f9pw = e9w_p2[e9w_p2['length'] - 0x1],
          b5gk0q = k6cg8['getFileInfo'](ua3n14);if (b5gk0q == null) k6cg8['onSaveFile'](ua3n14, _2f9pw);else {
        if (b5gk0q['readyUrl'] != ua3n14) k6cg8['remove'](_2f9pw, ua3n14);
      }
    }, k6cg8['exits'] = function (w$9fs2, yo5qb0) {
      var v5jryo = k6cg8['getFileNativePath'](w$9fs2);k6cg8['fs']['getFileInfo']({ 'filePath': v5jryo, 'success': function (u4la13) {
          yo5qb0 != null && yo5qb0['runWith']([0x0, u4la13]);
        }, 'fail': function (etzhc8) {
          yo5qb0 != null && yo5qb0['runWith']([0x1, etzhc8]);
        } });
    }, k6cg8['read'] = function (jo5yv, w$2, k806dg, bo5yq0) {
      w$2 === void 0x0 && (w$2 = 'ascill'), bo5yq0 === void 0x0 && (bo5yq0 = '');var m3lua;bo5yq0 != '' ? m3lua = k6cg8['getFileNativePath'](jo5yv) : m3lua = jo5yv, k6cg8['fs']['readFile']({ 'filePath': m3lua, 'encoding': w$2, 'success': function (i14u3n) {
          k806dg != null && k806dg['runWith']([0x0, i14u3n]);
        }, 'fail': function (ew2pz_) {
          if (ew2pz_ && bo5yq0 != '') k6cg8['down'](bo5yq0, w$2, k806dg, bo5yq0);else k806dg != null && k806dg['runWith']([0x1]);
        } });
    }, k6cg8['readNativeFile'] = function (bk5oq, k8dcg) {
      k6cg8['fs']['readFile']({ 'filePath': bk5oq, 'encoding': '', 'success': function (r7xjy) {
          k8dcg != null && k8dcg['runWith']([0x0]);
        }, 'fail': function (w_e2p9) {
          k8dcg != null && k8dcg['runWith']([0x1]);
        } });
    }, k6cg8['down'] = function (pwze_2, c6gd8t, rjyov5, b5qg0) {
      c6gd8t === void 0x0 && (c6gd8t = 'ascill'), b5qg0 === void 0x0 && (b5qg0 = '');var z86thc = k6cg8['getFileNativePath'](b5qg0),
          xn3 = k6cg8['wxdown']({ 'url': pwze_2, 'filePath': z86thc, 'success': function (_ep2hz) {
          if (_ep2hz['statusCode'] === 0xc8) k6cg8['readFile'](_ep2hz['filePath'], c6gd8t, rjyov5, b5qg0);
        }, 'fail': function (rqov) {
          rjyov5 != null && rjyov5['runWith']([0x1, rqov]);
        } });xn3['onProgressUpdate'](function ($wf2_9) {
        rjyov5 != null && rjyov5['runWith']([0x2, $wf2_9['progress']]);
      });
    }, k6cg8['readFile'] = function (ep2zh, h8tez, wp_92e, e_pz2w) {
      h8tez === void 0x0 && (h8tez = 'ascill'), e_pz2w === void 0x0 && (e_pz2w = ''), k6cg8['fs']['readFile']({ 'filePath': ep2zh, 'encoding': h8tez, 'success': function (qko0b5) {
          if (ep2zh['indexOf']('http://') != -0x1 || ep2zh['indexOf']('https://') != -0x1) k6cg8['onFileUpdate'](ep2zh, e_pz2w);wp_92e != null && wp_92e['runWith']([0x0, qko0b5]);
        }, 'fail': function (ixn1j7) {
          if (ixn1j7) wp_92e != null && wp_92e['runWith']([0x1, ixn1j7]);
        } });
    }, k6cg8['downImg'] = function (zew2_p, bk0g6, q05gbk) {
      q05gbk === void 0x0 && (q05gbk = '');var vjxn7i = k6cg8['wxdown']({ 'url': zew2_p, 'success': function (i7jr) {
          i7jr['statusCode'] === 0xc8 && k6cg8['copyFile'](i7jr['tempFilePath'], q05gbk, bk0g6);
        }, 'fail': function (hzep) {
          bk0g6 != null && bk0g6['runWith']([0x1, hzep]);
        } });
    }, k6cg8['copyFile'] = function (yqbo5r, $f2s9, pzew) {
      var i17nx = yqbo5r['split']('/'),
          f2$9w = i17nx[i17nx['length'] - 0x1],
          hpz2 = $f2s9['split']('?')[0x0],
          x3i4n = k6cg8['getFileInfo']($f2s9),
          wf9$2_ = k6cg8['getFileNativePath'](f2$9w);k6cg8['fs']['copyFile']({ 'srcPath': yqbo5r, 'destPath': wf9$2_, 'success': function (ko50q) {
          if (!x3i4n) k6cg8['onSaveFile']($f2s9, f2$9w), pzew != null && pzew['runWith']([0x0]);else {
            if (x3i4n['readyUrl'] != $f2s9) k6cg8['remove'](f2$9w, $f2s9, pzew);
          }
        }, 'fail': function (d8kg0) {
          pzew != null && pzew['runWith']([0x1, d8kg0]);
        } });
    }, k6cg8['getFileNativePath'] = function (sf9$) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + sf9$;
    }, k6cg8['remove'] = function (al34, $2_wf, jr5yov) {
      $2_wf === void 0x0 && ($2_wf = '');var na1u34 = k6cg8['getFileInfo']($2_wf),
          gd0k6 = k6cg8['getFileNativePath'](na1u34['md5']);kcg['loader']['clearRes'](na1u34['readyUrl']), k6cg8['fs']['unlink']({ 'filePath': gd0k6, 'success': function (kc) {
          if ($2_wf != '') k6cg8['onSaveFile']($2_wf, al34);jr5yov != null && jr5yov['runWith']([0x0]);
        }, 'fail': function (vx7inj) {} });
    }, k6cg8['onSaveFile'] = function (x1nji, fsw$) {
      var chzet8 = x1nji['split']('?')[0x0];k6cg8['filesListObj'][chzet8] = { 'md5': fsw$, 'readyUrl': x1nji }, k6cg8['fs']['writeFile']({ 'filePath': k6cg8['fileNativeDir'] + '/' + k6cg8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](k6cg8['filesListObj']), 'success': function (inx471) {
          console['log']('写入测试测试成功：', inx471);
        }, 'fail': function (x7j1) {
          console['log']('写入测试测试失败：', x7j1);
        } });
    }, k6cg8['existDir'] = function (jv7inx, n43u1) {
      k6cg8['fs']['mkdir']({ 'dirPath': jv7inx, 'success': function (n4ua31) {
          n43u1 != null && n43u1['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (kg06d8) {
          if (kg06d8['errMsg']['indexOf']('file already exists') != -0x1) k6cg8['readSync'](k6cg8['fileListName'], 'utf8', n43u1);else n43u1 != null && n43u1['runWith']([0x1, kg06d8]);
        } });
    }, k6cg8['readSync'] = function (ryjov7, u43al1, cthpz, d6th8) {
      u43al1 === void 0x0 && (u43al1 = 'ascill'), d6th8 === void 0x0 && (d6th8 = '');var vyroj5 = k6cg8['getFileNativePath'](ryjov7),
          _2$fw;try {
        _2$fw = k6cg8['fs']['readFileSync'](vyroj5), cthpz != null && cthpz['runWith']([0x0, { 'data': _2$fw }]);
      } catch (au31l) {
        cthpz != null && cthpz['runWith']([0x1]);
      }
    }, k6cg8['readCache'] = function () {}, k6cg8['writeCache'] = function (rvxji) {
      var hzc = readyUrl['split']('?')[0x0];k6cg8['filesListObj'][hzc] = { 'md5': md5Name, 'readyUrl': readyUrl }, k6cg8['fs']['writeFile']({ 'filePath': k6cg8['fileNativeDir'] + '/' + k6cg8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](k6cg8['filesListObj']), 'success': function (czth86) {}, 'fail': function (p9fw2) {} });
    }, k6cg8['setNativeFileDir'] = function (x7jvr) {
      k6cg8['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + x7jvr;
    }, k6cg8['filesListObj'] = {}, k6cg8['fileNativeDir'] = null, k6cg8['fileListName'] = 'layaairfiles.txt', k6cg8['ziyuFileData'] = {}, a43nu1(k6cg8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), k6cg8;
  }(n34xi),
      jv = function (hp_te) {
    function r5yobq() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], r5yobq['__super']['call'](this), this['_sound'] = r5yobq['_createSound']();
    }jnix(r5yobq, 'laya.wx.mini.MiniSound', hp_te);var p2f_w = r5yobq['prototype'];return p2f_w['load'] = function (q05byo) {
      var pzwe2 = this;q05byo = chtp['formatURL'](q05byo), this['url'] = q05byo;if (r5yobq['_audioCache'][q05byo]) {
        this['event']('complete');return;
      }function _p9w2e() {
        if (r5yobq['_null'] != undefined) pzwe2['_sound']['onCanplay'](r5yobq['_null']), pzwe2['_sound']['onError'](r5yobq['_null']);else try {
          pzwe2['_sound']['onCanplay'](null), pzwe2['_sound']['onError'](null), r5yobq['_null'] = null;
        } catch (fw$2) {
          console['warn']('[wxmini] _clearSound:' + fw$2), pzwe2['_sound']['onCanplay'](r5oqy), pzwe2['_sound']['onError'](r5oqy), r5yobq['_null'] = r5oqy;
        }
      }function rovyj5() {
        _p9w2e(), n41ua['loaded'] = !![], n41ua['event']('complete'), r5yobq['_audioCache'][n41ua['url']] = n41ua;
      }function pchzt(k0gq5b) {
        console['error']('errCode=' + k0gq5b['errCode'] + '  errMsg=' + k0gq5b['errMsg']), _p9w2e(), n41ua['event']('error');
      }function r5oqy() {}this['_sound']['onCanplay'](rovyj5), this['_sound']['onError'](pchzt), this['_sound']['src'] = q05byo;var n41ua = this;
    }, p2f_w['play'] = function (r7y, z_pew2) {
      r7y === void 0x0 && (r7y = 0x0), z_pew2 === void 0x0 && (z_pew2 = 0x0);var ijr7xv;if (this['url'] == d68cth['_tMusic']) {
        if (!r5yobq['_musicAudio']) r5yobq['_musicAudio'] = r5yobq['_createSound']();ijr7xv = r5yobq['_musicAudio'];
      } else ijr7xv = r5yobq['_createSound']();ijr7xv['src'] = this['url'];var ch6td = new pe2w_z(ijr7xv);return ch6td['url'] = this['url'], ch6td['loops'] = z_pew2, ch6td['startTime'] = r7y, ch6td['play'](), d68cth['addChannel'](ch6td), ch6td;
    }, p2f_w['dispose'] = function () {
      var zt_hep = r5yobq['_audioCache'][this['url']];zt_hep && (zt_hep['src'] = '', delete r5yobq['_audioCache'][this['url']]);
    }, t_ez(0x0, p2f_w, 'duration', function () {
      return this['_sound']['duration'];
    }), r5yobq['_createSound'] = function () {
      return r5yobq['_id']++, _ew2p9['window']['wx']['createInnerAudioContext']();
    }, r5yobq['_musicAudio'] = null, r5yobq['_id'] = 0x0, r5yobq['_audioCache'] = {}, r5yobq['_null'] = undefined, r5yobq;
  }(n34xi),
      pe2w_z = function (hecptz) {
    function w2ep_(he2pz_) {
      this['_audio'] = null, this['_onEnd'] = null, w2ep_['__super']['call'](this), this['_audio'] = he2pz_, this['_onEnd'] = ws$2f9['bind'](this['__onEnd'], this), he2pz_['onEnded'](this['_onEnd']);
    }jnix(w2ep_, 'laya.wx.mini.MiniSoundChannel', hecptz);var ua31n = w2ep_['prototype'];return ua31n['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (kcg['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ua31n['__onNull'] = function () {}, ua31n['play'] = function () {
      this['isStopped'] = ![], d68cth['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ua31n['stop'] = function () {
      this['isStopped'] = !![], d68cth['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (w2ep_['_null'] != undefined) this['_audio']['onEnded'](w2ep_['_null']);else try {
        this['_audio']['onEnded'](null), w2ep_['_null'] = null;
      } catch (dtcg68) {
        console['warn']('[wxmini] stop:' + dtcg68), this['_audio']['onEnded'](ws$2f9['bind'](this['__onNull'], this)), w2ep_['_null'] = ws$2f9['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ua31n['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ua31n['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], d68cth['addChannel'](this), this['_audio']['play']();
    }, t_ez(0x0, ua31n, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), t_ez(0x0, ua31n, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), t_ez(0x0, ua31n, 'volume', function () {
      return 0x1;
    }, function (ob5kq) {}), w2ep_['_null'] = undefined, w2ep_;
  }(f9p2w);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var g8k60d in Laya) {
    var pez_h = Laya[g8k60d];pez_h && pez_h['__isclass'] && (exports[g8k60d] = pez_h);
  }
});