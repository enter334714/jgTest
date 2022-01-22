var J = wx.h$;
(function (window, document, t_epzh) {
  var mu3l4a = t_epzh['un'],
      q5o0yb = t_epzh['uns'],
      qko5 = t_epzh['static'],
      u341an = t_epzh['class'],
      _wpez = t_epzh['getset'],
      w2_ep = t_epzh['__newvec'],
      jvoyr5 = laya['utils']['Browser'],
      rovj5 = laya['events']['Event'],
      qbk = laya['events']['EventDispatcher'],
      byo5rq = laya['resource']['HTMLImage'],
      et = laya['utils']['Handler'],
      tdh68c = laya['display']['Input'],
      jnx = laya['net']['Loader'],
      j7nxv = laya['maths']['Matrix'],
      a4l31 = laya['renders']['Render'],
      u13ni4 = laya['utils']['RunDriver'],
      f9$w = laya['media']['Sound'],
      jvo5r = laya['media']['SoundChannel'],
      gdc6 = laya['media']['SoundManager'],
      zpcthe = laya['display']['Stage'],
      yr = laya['net']['URL'],
      una13 = laya['utils']['Utils'],
      lma3 = function () {
    function yo0q5b() {}return u341an(yo0q5b, 'laya.wx.mini.MiniAdpter'), yo0q5b['getJson'] = function (zw_2e) {
      return JSON['parse'](zw_2e);
    }, yo0q5b['init'] = function (c6kd8, ov5yr) {
      c6kd8 === void 0x0 && (c6kd8 = ![]), ov5yr === void 0x0 && (ov5yr = ![]);if (yo0q5b['_inited']) return;yo0q5b['window'] = window;if (yo0q5b['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;yo0q5b['_inited'] = !![], yo0q5b['isZiYu'] = ov5yr, yo0q5b['isPosMsgYu'] = c6kd8, yo0q5b['EnvConfig'] = {}, !yo0q5b['isZiYu'] && (wze_p['setNativeFileDir']('/layaairGame'), wze_p['existDir'](wze_p['fileNativeDir'], et['create'](yo0q5b, yo0q5b['onMkdirCallBack']))), yo0q5b['window']['focus'] = function () {}, t_epzh['getUrlPath'] = function () {}, yo0q5b['window']['logtime'] = function (yvqr) {}, yo0q5b['window']['alertTimeLog'] = function (by0oq5) {}, yo0q5b['window']['resetShareInfo'] = function () {}, yo0q5b['window']['CanvasRenderingContext2D'] = function () {}, yo0q5b['window']['CanvasRenderingContext2D']['prototype'] = yo0q5b['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yo0q5b['window']['document']['body']['appendChild'] = function () {}, yo0q5b['EnvConfig']['pixelRatioInt'] = 0x0, u13ni4['getPixelRatio'] = yo0q5b['pixelRatio'], yo0q5b['_preCreateElement'] = jvoyr5['createElement'], jvoyr5['createElement'] = yo0q5b['createElement'], u13ni4['createShaderCondition'] = yo0q5b['createShaderCondition'], una13['parseXMLFromString'] = yo0q5b['parseXMLFromString'], tdh68c['_createInputElement'] = f2_pw9['_createInputElement'], yo0q5b['EnvConfig']['load'] = jnx['prototype']['load'], jnx['prototype']['load'] = t6dch8['prototype']['load'], yo0q5b['isZiYu'] && c6kd8 && wx['onMessage'](function (cg6dk) {
        cg6dk['isLoad'] && (wze_p['ziyuFileData'][cg6dk['url']] = cg6dk['data']);
      });
    }, yo0q5b['onMkdirCallBack'] = function (mal3u, k0ob5) {
      if (!mal3u) wze_p['filesListObj'] = JSON['parse'](k0ob5['data']);
    }, yo0q5b['pixelRatio'] = function () {
      if (!yo0q5b['EnvConfig']['pixelRatioInt']) try {
        var zhetcp = wx['getSystemInfoSync']();return yo0q5b['EnvConfig']['pixelRatioInt'] = zhetcp['pixelRatio'], zhetcp = zhetcp, zhetcp['pixelRatio'];
      } catch (d0gk8) {}return yo0q5b['EnvConfig']['pixelRatioInt'];
    }, yo0q5b['createElement'] = function (oj7ry) {
      if (oj7ry == 'canvas') {
        var ul3a;return yo0q5b['idx'] == 0x1 ? yo0q5b['isZiYu'] ? (ul3a = sharedCanvas, ul3a['style'] = {}) : ul3a = window['canvas'] : ul3a = window['wx']['createCanvas'](), yo0q5b['idx']++, ul3a;
      } else {
        if (oj7ry == 'textarea' || oj7ry == 'input') return yo0q5b['onCreateInput'](oj7ry);else {
          if (oj7ry == 'div') {
            var czet8 = yo0q5b['_preCreateElement'](oj7ry);return czet8['contains'] = function (o5vjy) {
              return null;
            }, czet8['removeChild'] = function (x4n7i1) {}, czet8;
          } else return yo0q5b['_preCreateElement'](oj7ry);
        }
      }
    }, yo0q5b['onCreateInput'] = function (n3x4i1) {
      var kgdqb0 = yo0q5b['_preCreateElement'](n3x4i1);return kgdqb0['focus'] = f2_pw9['wxinputFocus'], kgdqb0['blur'] = f2_pw9['wxinputblur'], kgdqb0['style'] = {}, kgdqb0['value'] = 0x0, kgdqb0['parentElement'] = {}, kgdqb0['placeholder'] = {}, kgdqb0['type'] = {}, kgdqb0['setColor'] = function (kd0gb) {}, kgdqb0['setType'] = function (ob0y) {}, kgdqb0['setFontFace'] = function (e_2p) {}, kgdqb0['addEventListener'] = function (n1x) {}, kgdqb0['contains'] = function (ix7nv) {
        return null;
      }, kgdqb0['removeChild'] = function (bo5qr) {}, kgdqb0;
    }, yo0q5b['createShaderCondition'] = function (lmau) {
      var oryj7v = this,
          orqv5y = function () {
        var htzcp = lmau;return oryj7v[lmau['replace']('this.', '')];
      };return orqv5y;
    }, yo0q5b['EnvConfig'] = null, yo0q5b['window'] = null, yo0q5b['_preCreateElement'] = null, yo0q5b['_inited'] = ![], yo0q5b['wxRequest'] = null, yo0q5b['systemInfo'] = null, yo0q5b['version'] = '0.0.1', yo0q5b['isZiYu'] = ![], yo0q5b['isPosMsgYu'] = ![], yo0q5b['parseXMLFromString'] = function (ovq5y) {
      var ixj71, w92$;ovq5y = ovq5y['replace'](/>\s+</g, '><');try {
        ixj71 = new window['Parser']['DOMParser']()['parseFromString'](ovq5y, 'text/xml');
      } catch (f2s9w) {
        throw '需要引入xml解析库文件';
      }return ixj71;
    }, yo0q5b['idx'] = 0x1, yo0q5b;
  }(),
      ewz2_ = function () {
    function i14n3x() {}u341an(i14n3x, 'laya.wx.mini.MiniImage');var c8thez = i14n3x['prototype'];return c8thez['_loadImage'] = function (yrqob) {
      var ji7xrv = this,
          i1nu43 = ![];yrqob['indexOf']('layaNativeDir/') == -0x1 && (i1nu43 = !![], yrqob = yr['formatURL'](yrqob));if (!wze_p['getFileInfo'](yrqob)) {
        if (yrqob['indexOf']('http://') != -0x1 || yrqob['indexOf']('https://') != -0x1) wze_p['downImg'](yrqob, new et(i14n3x, i14n3x['onDownImgCallBack'], [yrqob, ji7xrv]), yrqob);else i14n3x['onCreateImage'](yrqob, ji7xrv, !![]);
      } else i14n3x['onCreateImage'](yrqob, ji7xrv, !i1nu43);
    }, i14n3x['onDownImgCallBack'] = function (w_pf92, i1n3, jov7) {
      if (!jov7) i14n3x['onCreateImage'](w_pf92, i1n3);else i1n3['onError'](null);
    }, i14n3x['onCreateImage'] = function (e8chtz, tdcg8, d6ct8g) {
      d6ct8g === void 0x0 && (d6ct8g = ![]);var bqk5o0;if (!d6ct8g) {
        var ctzhp = wze_p['getFileInfo'](e8chtz),
            d60k = ctzhp['md5'];bqk5o0 = wze_p['getFileNativePath'](d60k);
      } else bqk5o0 = e8chtz;if (tdcg8['imgCache'] == null) tdcg8['imgCache'] = {};var kcd86g;function z2p_ew() {
        kcd86g['onload'] = null, kcd86g['onerror'] = null, delete tdcg8['imgCache'][e8chtz];
      };var fs = function () {
        z2p_ew(), tdcg8['onLoaded'](kcd86g);
      },
          rxyjv7 = function () {
        z2p_ew(), tdcg8['event']('error', 'Load image failed');
      };tdcg8['_type'] == 'nativeimage' ? (kcd86g = new jvoyr5['window']['Image'](), kcd86g['crossOrigin'] = '', kcd86g['onload'] = fs, kcd86g['onerror'] = rxyjv7, kcd86g['src'] = bqk5o0, tdcg8['imgCache'][e8chtz] = kcd86g) : new byo5rq['create'](bqk5o0, { 'onload': fs, 'onerror': rxyjv7, 'onCreate': function (yqo5vr) {
          kcd86g = yqo5vr, tdcg8['imgCache'][e8chtz] = yqo5vr;
        } });
    }, i14n3x;
  }(),
      f2_pw9 = function () {
    function t_ezhp() {}return u341an(t_ezhp, 'laya.wx.mini.MiniInput'), t_ezhp['_createInputElement'] = function () {
      tdh68c['_initInput'](tdh68c['area'] = jvoyr5['createElement']('textarea')), tdh68c['_initInput'](tdh68c['input'] = jvoyr5['createElement']('input')), tdh68c['inputContainer'] = jvoyr5['createElement']('div'), tdh68c['inputContainer']['style']['position'] = 'absolute', tdh68c['inputContainer']['style']['zIndex'] = 0x186a0, jvoyr5['container']['appendChild'](tdh68c['inputContainer']), tdh68c['inputContainer']['setPos'] = function (_zeh, tc68h) {
        tdh68c['inputContainer']['style']['left'] = _zeh + 'px', tdh68c['inputContainer']['style']['top'] = tc68h + 'px';
      }, t_epzh['stage']['on']('resize', null, t_ezhp['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jr7ix) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), gdc6['_soundClass'] = k6dcg, gdc6['_musicClass'] = k6dcg;
    }, t_ezhp['_onStageResize'] = function () {
      var bq5ok = t_epzh['stage']['_canvasTransform']['identity']();bq5ok['scale'](jvoyr5['width'] / a4l31['canvas']['width'] / u13ni4['getPixelRatio'](), jvoyr5['height'] / a4l31['canvas']['height'] / u13ni4['getPixelRatio']());
    }, t_ezhp['wxinputFocus'] = function (ov5rj) {
      var xnji1 = tdh68c['inputElement']['target'];if (xnji1 && !xnji1['editable']) return;lma3['window']['wx']['offKeyboardConfirm'](), lma3['window']['wx']['offKeyboardInput'](), lma3['window']['wx']['showKeyboard']({ 'defaultValue': xnji1['text'], 'maxLength': xnji1['maxChars'], 'multiple': xnji1['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ob0) {}, 'fail': function (d0bg6) {} }), lma3['window']['wx']['onKeyboardConfirm'](function (yv5roj) {
        var inu341 = yv5roj ? yv5roj['value'] : '';xnji1['text'] = inu341, xnji1['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), lma3['window']['wx']['onKeyboardInput'](function (royjv5) {
        var yobrq5 = royjv5 ? royjv5['value'] : '';if (!xnji1['multiline']) {
          if (yobrq5['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }xnji1['text'] = yobrq5, xnji1['event']('input');
      });
    }, t_ezhp['inputEnter'] = function () {
      tdh68c['inputElement']['target']['focus'] = ![];
    }, t_ezhp['wxinputblur'] = function () {
      t_ezhp['hideKeyboard']();
    }, t_ezhp['hideKeyboard'] = function () {
      lma3['window']['wx']['offKeyboardConfirm'](), lma3['window']['wx']['offKeyboardInput'](), lma3['window']['wx']['hideKeyboard']({ 'success': function (d0kq) {
          console['log']('隐藏键盘');
        }, 'fail': function (i41un3) {
          console['log']('隐藏键盘出错:' + (i41un3 ? i41un3['errMsg'] : ''));
        } });
    }, t_ezhp;
  }(),
      t6dch8 = function () {
    function jnix1() {}u341an(jnix1, 'laya.wx.mini.MiniLoader');var fsw92 = jnix1['prototype'];return fsw92['load'] = function (j71xin, q5oryb, i14x7n, j7yorv, ht86c) {
      i14x7n === void 0x0 && (i14x7n = !![]), ht86c === void 0x0 && (ht86c = ![]);var bkdg06 = this;bkdg06['_url'] = j71xin;if (j71xin['indexOf']('data:image') === 0x0) bkdg06['_type'] = q5oryb = 'image';else bkdg06['_type'] = q5oryb || (q5oryb = bkdg06['getTypeFromUrl'](j71xin));bkdg06['_cache'] = i14x7n, bkdg06['_data'] = null;var wz_2ep = 'ascii';if (j71xin['indexOf']('.fnt') != -0x1) wz_2ep = 'utf8';else q5oryb == 'arraybuffer' && (wz_2ep = '');;var ep9 = una13['getFileExtension'](j71xin);if (jnix1['_fileTypeArr']['indexOf'](ep9) != -0x1) lma3['EnvConfig']['load']['call'](this, j71xin, q5oryb, i14x7n, j7yorv, ht86c);else {
        if (!wze_p['getFileInfo'](j71xin)) {
          if (j71xin['indexOf']('layaNativeDir/') != -0x1) {
            if (lma3['isZiYu']) {
              var r7vxji = wze_p['ziyuFileData'][j71xin];bkdg06['onLoaded'](r7vxji);return;
            } else {
              cosnole['log']('read read'), wze_p['read'](j71xin, wz_2ep, new et(jnix1, jnix1['onReadNativeCallBack'], [wz_2ep, j71xin, q5oryb, i14x7n, j7yorv, ht86c, bkdg06]));return;
            }
          }if (yr['rootPath'] == '') var q0y5ob = j71xin;else q0y5ob = j71xin['split'](yr['rootPath'])[0x0];j71xin['indexOf']('http://') != -0x1 || j71xin['indexOf']('https://') != -0x1 ? lma3['EnvConfig']['load']['call'](bkdg06, j71xin, q5oryb, i14x7n, j7yorv, ht86c) : wze_p['readFile'](q0y5ob, wz_2ep, new et(jnix1, jnix1['onReadNativeCallBack'], [wz_2ep, j71xin, q5oryb, i14x7n, j7yorv, ht86c, bkdg06]), j71xin);
        } else lma3['EnvConfig']['load']['call'](this, j71xin, q5oryb, i14x7n, j7yorv, ht86c);
      }
    }, fsw92['resMgrLoad'] = function (w_2$9f, nivj, f9$sw2, a4m3l, qk50ob, n7jvx, b05qy) {
      f9$sw2 === void 0x0 && (f9$sw2 = 0x0), a4m3l === void 0x0 && (a4m3l = ![]), qk50ob === void 0x0 && (qk50ob = ![]), n7jvx === void 0x0 && (n7jvx = 0x0), b05qy === void 0x0 && (b05qy = 0x3), w_2$9f['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', w_2$9f), lma3['EnvConfig']['resMgrLoad'](w_2$9f, (ctg68, gq0b5, alu413) => {
        jnix1['prototype']['resMgrLoadCallBack'](ctg68, gq0b5, alu413, nivj);
      }, f9$sw2, a4m3l, qk50ob, n7jvx, b05qy);
    }, fsw92['resMgrLoadCallBack'] = function (g8t6, ula34m, u1i4n3, $f9sw) {
      console['log']('buff:::', g8t6, u1i4n3, wze_p['fileNativeDir'] + '///' + wze_p['fileListName']), $f9sw(g8t6, ula34m, u1i4n3);
    }, fsw92['clearRes'] = function (wp_, ecpthz) {
      ecpthz === void 0x0 && (ecpthz = ![]);var jiv = this;jiv['clearRes'](wp_, ecpthz);var p2e9 = wze_p['getFileInfo'](wp_);if (p2e9 && (wp_['indexOf']('http://') != -0x1 || wp_['indexOf']('https://') != -0x1)) {
        var wp92_f = p2e9['md5'],
            vqo5ry = wze_p['getFileNativePath'](wp92_f);wze_p['remove'](vqo5ry);
      }
    }, jnix1['onReadNativeCallBack'] = function (oyjv7r, dh8t6, jyo, b0gk6d, n3au41, qok0b5, r7jiv, z_hpet, kb60) {
      b0gk6d === void 0x0 && (b0gk6d = !![]), qok0b5 === void 0x0 && (qok0b5 = ![]), z_hpet === void 0x0 && (z_hpet = 0x0);if (!z_hpet) {
        var a1u4n;if (jyo == 'json' || jyo == 'atlas') a1u4n = lma3['getJson'](kb60['data']);else jyo == 'xml' ? a1u4n = una13['parseXMLFromString'](kb60['data']) : a1u4n = kb60['data'];r7jiv['onLoaded'](a1u4n), !lma3['isZiYu'] && lma3['isPosMsgYu'] && jyo != 'arraybuffer' && wx['postMessage']({ 'url': dh8t6, 'data': a1u4n, 'isLoad': !![] });
      } else z_hpet == 0x1 && lma3['EnvConfig']['load']['call'](r7jiv, dh8t6, jyo, b0gk6d, n3au41, qok0b5);
    }, qko5(jnix1, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jnix1;
  }(),
      wze_p = function (u3l1) {
    function irjv7() {
      irjv7['__super']['call'](this);;
    }return u341an(irjv7, 'laya.wx.mini.MiniFileMgr', u3l1), irjv7['isLoadFile'] = function (y7jvrx) {
      return irjv7['_fileTypeArr']['indexOf'](y7jvrx) != -0x1 ? !![] : ![];
    }, irjv7['getFileInfo'] = function (xnji7) {
      var _9w$f = xnji7['split']('?')[0x0],
          ybrqo = irjv7['filesListObj'][_9w$f];if (ybrqo == null) return null;else return ybrqo;return null;
    }, irjv7['onFileUpdate'] = function (c6dk, nj) {
      var kqgb50 = c6dk['split']('/'),
          i4x3n = kqgb50[kqgb50['length'] - 0x1],
          z_phet = irjv7['getFileInfo'](nj);if (z_phet == null) irjv7['onSaveFile'](nj, i4x3n);else {
        if (z_phet['readyUrl'] != nj) irjv7['remove'](i4x3n, nj);
      }
    }, irjv7['exits'] = function (rjo5vy, mal34u) {
      var $fw2_ = irjv7['getFileNativePath'](rjo5vy);irjv7['fs']['getFileInfo']({ 'filePath': $fw2_, 'success': function (au13n4) {
          mal34u != null && mal34u['runWith']([0x0, au13n4]);
        }, 'fail': function (o0qk) {
          mal34u != null && mal34u['runWith']([0x1, o0qk]);
        } });
    }, irjv7['read'] = function (jn7vxi, al134, w$f9s2, l3ua4) {
      al134 === void 0x0 && (al134 = 'ascill'), l3ua4 === void 0x0 && (l3ua4 = '');var echztp;l3ua4 != '' ? echztp = irjv7['getFileNativePath'](jn7vxi) : echztp = jn7vxi, irjv7['fs']['readFile']({ 'filePath': echztp, 'encoding': al134, 'success': function (jvoyr) {
          w$f9s2 != null && w$f9s2['runWith']([0x0, jvoyr]);
        }, 'fail': function (_we) {
          if (_we && l3ua4 != '') irjv7['down'](l3ua4, al134, w$f9s2, l3ua4);else w$f9s2 != null && w$f9s2['runWith']([0x1]);
        } });
    }, irjv7['readNativeFile'] = function (m3l4, ct8eh) {
      irjv7['fs']['readFile']({ 'filePath': m3l4, 'encoding': '', 'success': function (xjvn7i) {
          ct8eh != null && ct8eh['runWith']([0x0]);
        }, 'fail': function (fw92$s) {
          ct8eh != null && ct8eh['runWith']([0x1]);
        } });
    }, irjv7['down'] = function (vx7jni, k50, u3a4n1, pe_2zw) {
      k50 === void 0x0 && (k50 = 'ascill'), pe_2zw === void 0x0 && (pe_2zw = '');var t8dg6 = irjv7['getFileNativePath'](pe_2zw),
          yb0o5 = irjv7['wxdown']({ 'url': vx7jni, 'filePath': t8dg6, 'success': function (th86cd) {
          if (th86cd['statusCode'] === 0xc8) irjv7['readFile'](th86cd['filePath'], k50, u3a4n1, pe_2zw);
        }, 'fail': function (u3a) {
          u3a4n1 != null && u3a4n1['runWith']([0x1, u3a]);
        } });yb0o5['onProgressUpdate'](function (n14au) {
        u3a4n1 != null && u3a4n1['runWith']([0x2, n14au['progress']]);
      });
    }, irjv7['readFile'] = function (yqv5ro, m3ul4a, c86thz, u1la) {
      m3ul4a === void 0x0 && (m3ul4a = 'ascill'), u1la === void 0x0 && (u1la = ''), irjv7['fs']['readFile']({ 'filePath': yqv5ro, 'encoding': m3ul4a, 'success': function (c68dt) {
          if (yqv5ro['indexOf']('http://') != -0x1 || yqv5ro['indexOf']('https://') != -0x1) irjv7['onFileUpdate'](yqv5ro, u1la);c86thz != null && c86thz['runWith']([0x0, c68dt]);
        }, 'fail': function (eth8) {
          if (eth8) c86thz != null && c86thz['runWith']([0x1, eth8]);
        } });
    }, irjv7['downImg'] = function (vqo5y, dc6g8, vjoyr7) {
      vjoyr7 === void 0x0 && (vjoyr7 = '');var gb0kq5 = irjv7['wxdown']({ 'url': vqo5y, 'success': function (xi7v) {
          xi7v['statusCode'] === 0xc8 && irjv7['copyFile'](xi7v['tempFilePath'], vjoyr7, dc6g8);
        }, 'fail': function (brq5yo) {
          dc6g8 != null && dc6g8['runWith']([0x1, brq5yo]);
        } });
    }, irjv7['copyFile'] = function (hctz6, pew_2z, r5yqob) {
      var h8ctze = hctz6['split']('/'),
          al13 = h8ctze[h8ctze['length'] - 0x1],
          br5 = pew_2z['split']('?')[0x0],
          alm3u = irjv7['getFileInfo'](pew_2z),
          vrjxy = irjv7['getFileNativePath'](al13);irjv7['fs']['copyFile']({ 'srcPath': hctz6, 'destPath': vrjxy, 'success': function (fwp_) {
          if (!alm3u) irjv7['onSaveFile'](pew_2z, al13), r5yqob != null && r5yqob['runWith']([0x0]);else {
            if (alm3u['readyUrl'] != pew_2z) irjv7['remove'](al13, pew_2z, r5yqob);
          }
        }, 'fail': function (hzp2) {
          r5yqob != null && r5yqob['runWith']([0x1, hzp2]);
        } });
    }, irjv7['getFileNativePath'] = function (zh_e) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + zh_e;
    }, irjv7['remove'] = function (k0qb5, vnx7ij, y5vjr) {
      vnx7ij === void 0x0 && (vnx7ij = '');var z_hetp = irjv7['getFileInfo'](vnx7ij),
          nvxj7 = irjv7['getFileNativePath'](z_hetp['md5']);t_epzh['loader']['clearRes'](z_hetp['readyUrl']), irjv7['fs']['unlink']({ 'filePath': nvxj7, 'success': function (qyr5ov) {
          if (vnx7ij != '') irjv7['onSaveFile'](vnx7ij, k0qb5);y5vjr != null && y5vjr['runWith']([0x0]);
        }, 'fail': function (e2ph_) {} });
    }, irjv7['onSaveFile'] = function (jy7vx, gqk) {
      var qrbyo5 = jy7vx['split']('?')[0x0];irjv7['filesListObj'][qrbyo5] = { 'md5': gqk, 'readyUrl': jy7vx }, irjv7['fs']['writeFile']({ 'filePath': irjv7['fileNativeDir'] + '/' + irjv7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](irjv7['filesListObj']), 'success': function (hztepc) {
          console['log']('写入测试测试成功：', hztepc);
        }, 'fail': function (au431l) {
          console['log']('写入测试测试失败：', au431l);
        } });
    }, irjv7['existDir'] = function (xjyvr, htd68c) {
      irjv7['fs']['mkdir']({ 'dirPath': xjyvr, 'success': function (iu14n) {
          htd68c != null && htd68c['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (x7riv) {
          if (x7riv['errMsg']['indexOf']('file already exists') != -0x1) irjv7['readSync'](irjv7['fileListName'], 'utf8', htd68c);else htd68c != null && htd68c['runWith']([0x1, x7riv]);
        } });
    }, irjv7['readSync'] = function (kb6, ck8d6g, dkb6, oyr7jv) {
      ck8d6g === void 0x0 && (ck8d6g = 'ascill'), oyr7jv === void 0x0 && (oyr7jv = '');var u4alm = irjv7['getFileNativePath'](kb6),
          w9f2_p;try {
        w9f2_p = irjv7['fs']['readFileSync'](u4alm), dkb6 != null && dkb6['runWith']([0x0, { 'data': w9f2_p }]);
      } catch (qdgb0) {
        dkb6 != null && dkb6['runWith']([0x1]);
      }
    }, irjv7['readCache'] = function () {}, irjv7['writeCache'] = function (umal34) {
      var ovqyr = readyUrl['split']('?')[0x0];irjv7['filesListObj'][ovqyr] = { 'md5': md5Name, 'readyUrl': readyUrl }, irjv7['fs']['writeFile']({ 'filePath': irjv7['fileNativeDir'] + '/' + irjv7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](irjv7['filesListObj']), 'success': function (vjnx) {}, 'fail': function (zwpe2_) {} });
    }, irjv7['setNativeFileDir'] = function (b50qyo) {
      irjv7['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + b50qyo;
    }, irjv7['filesListObj'] = {}, irjv7['fileNativeDir'] = null, irjv7['fileListName'] = 'layaairfiles.txt', irjv7['ziyuFileData'] = {}, qko5(irjv7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), irjv7;
  }(qbk),
      k6dcg = function (k6g0bd) {
    function yojv7r() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], yojv7r['__super']['call'](this), this['_sound'] = yojv7r['_createSound']();
    }u341an(yojv7r, 'laya.wx.mini.MiniSound', k6g0bd);var fp9w_ = yojv7r['prototype'];return fp9w_['load'] = function (ch8t6d) {
      var lm43 = this;ch8t6d = yr['formatURL'](ch8t6d), this['url'] = ch8t6d;if (yojv7r['_audioCache'][ch8t6d]) {
        this['event']('complete');return;
      }function jxir() {
        if (yojv7r['_null'] != undefined) lm43['_sound']['onCanplay'](yojv7r['_null']), lm43['_sound']['onError'](yojv7r['_null']);else try {
          lm43['_sound']['onCanplay'](null), lm43['_sound']['onError'](null), yojv7r['_null'] = null;
        } catch (g05bk) {
          console['warn']('[wxmini] _clearSound:' + g05bk), lm43['_sound']['onCanplay'](_92wpf), lm43['_sound']['onError'](_92wpf), yojv7r['_null'] = _92wpf;
        }
      }function i4n3() {
        jxir(), d0kg['loaded'] = !![], d0kg['event']('complete'), yojv7r['_audioCache'][d0kg['url']] = d0kg;
      }function sfw$(c8gt6) {
        console['error']('errCode=' + c8gt6['errCode'] + '  errMsg=' + c8gt6['errMsg']), jxir(), d0kg['event']('error');
      }function _92wpf() {}this['_sound']['onCanplay'](i4n3), this['_sound']['onError'](sfw$), this['_sound']['src'] = ch8t6d;var d0kg = this;
    }, fp9w_['play'] = function (ij7n, n14a) {
      ij7n === void 0x0 && (ij7n = 0x0), n14a === void 0x0 && (n14a = 0x0);var qr5vyo;if (this['url'] == gdc6['_tMusic']) {
        if (!yojv7r['_musicAudio']) yojv7r['_musicAudio'] = yojv7r['_createSound']();qr5vyo = yojv7r['_musicAudio'];
      } else qr5vyo = yojv7r['_createSound']();qr5vyo['src'] = this['url'];var cg8td = new g5qbk0(qr5vyo);return cg8td['url'] = this['url'], cg8td['loops'] = n14a, cg8td['startTime'] = ij7n, cg8td['play'](), gdc6['addChannel'](cg8td), cg8td;
    }, fp9w_['dispose'] = function () {
      var fp2_9 = yojv7r['_audioCache'][this['url']];fp2_9 && (fp2_9['src'] = '', delete yojv7r['_audioCache'][this['url']]);
    }, _wpez(0x0, fp9w_, 'duration', function () {
      return this['_sound']['duration'];
    }), yojv7r['_createSound'] = function () {
      return yojv7r['_id']++, lma3['window']['wx']['createInnerAudioContext']();
    }, yojv7r['_musicAudio'] = null, yojv7r['_id'] = 0x0, yojv7r['_audioCache'] = {}, yojv7r['_null'] = undefined, yojv7r;
  }(qbk),
      g5qbk0 = function (q50yob) {
    function x1n4(x1n47i) {
      this['_audio'] = null, this['_onEnd'] = null, x1n4['__super']['call'](this), this['_audio'] = x1n47i, this['_onEnd'] = una13['bind'](this['__onEnd'], this), x1n47i['onEnded'](this['_onEnd']);
    }u341an(x1n4, 'laya.wx.mini.MiniSoundChannel', q50yob);var dk06bg = x1n4['prototype'];return dk06bg['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (t_epzh['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, dk06bg['__onNull'] = function () {}, dk06bg['play'] = function () {
      this['isStopped'] = ![], gdc6['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, dk06bg['stop'] = function () {
      this['isStopped'] = !![], gdc6['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (x1n4['_null'] != undefined) this['_audio']['onEnded'](x1n4['_null']);else try {
        this['_audio']['onEnded'](null), x1n4['_null'] = null;
      } catch (ph2z_e) {
        console['warn']('[wxmini] stop:' + ph2z_e), this['_audio']['onEnded'](una13['bind'](this['__onNull'], this)), x1n4['_null'] = una13['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, dk06bg['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, dk06bg['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], gdc6['addChannel'](this), this['_audio']['play']();
    }, _wpez(0x0, dk06bg, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), _wpez(0x0, dk06bg, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), _wpez(0x0, dk06bg, 'volume', function () {
      return 0x1;
    }, function (n1jxi7) {}), x1n4['_null'] = undefined, x1n4;
  }(jvo5r);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var k08g6d in Laya) {
    var _w2f9p = Laya[k08g6d];_w2f9p && _w2f9p['__isclass'] && (exports[k08g6d] = _w2f9p);
  }
});