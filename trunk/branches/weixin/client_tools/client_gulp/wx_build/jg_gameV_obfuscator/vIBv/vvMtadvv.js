var Q = wx.$v;
(function (window, document, z6lh1) {
  var o3tn24 = z6lh1['un'],
      t2n3o4 = z6lh1['uns'],
      yuhl6 = z6lh1['static'],
      wpgx = z6lh1['class'],
      ue8b = z6lh1['getset'],
      zh1y6 = z6lh1['__newvec'],
      qxpe = laya['utils']['Browser'],
      l8bzeu = laya['events']['Event'],
      hyuz6 = laya['events']['EventDispatcher'],
      _3t12n = laya['resource']['HTMLImage'],
      no$t3 = laya['utils']['Handler'],
      qw8bg = laya['display']['Input'],
      qe8lu = laya['net']['Loader'],
      s$io = laya['maths']['Matrix'],
      km7c0d = laya['renders']['Render'],
      km7d0c = laya['utils']['RunDriver'],
      osif4$ = laya['media']['Sound'],
      s4ofi = laya['media']['SoundChannel'],
      lu8eqb = laya['media']['SoundManager'],
      lyh1z = laya['display']['Stage'],
      h6zyl1 = laya['net']['URL'],
      o3$4 = laya['utils']['Utils'],
      gxqewb = function () {
    function i$r9s() {}return wpgx(i$r9s, 'laya.wx.mini.MiniAdpter'), i$r9s['getJson'] = function (yzlu86) {
      return JSON['parse'](yzlu86);
    }, i$r9s['init'] = function (kcd07, gpv5x7) {
      kcd07 === void 0x0 && (kcd07 = ![]), gpv5x7 === void 0x0 && (gpv5x7 = ![]);if (i$r9s['_inited']) return;i$r9s['window'] = window;if (i$r9s['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;i$r9s['_inited'] = !![], i$r9s['isZiYu'] = gpv5x7, i$r9s['isPosMsgYu'] = kcd07, i$r9s['EnvConfig'] = {}, !i$r9s['isZiYu'] && (o$n4['setNativeFileDir']('/layaairGame'), o$n4['existDir'](o$n4['fileNativeDir'], no$t3['create'](i$r9s, i$r9s['onMkdirCallBack']))), i$r9s['window']['focus'] = function () {}, z6lh1['getUrlPath'] = function () {}, i$r9s['window']['logtime'] = function (lb8uze) {}, i$r9s['window']['alertTimeLog'] = function (xwg5pv) {}, i$r9s['window']['resetShareInfo'] = function () {}, i$r9s['window']['CanvasRenderingContext2D'] = function () {}, i$r9s['window']['CanvasRenderingContext2D']['prototype'] = i$r9s['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i$r9s['window']['document']['body']['appendChild'] = function () {}, i$r9s['EnvConfig']['pixelRatioInt'] = 0x0, km7d0c['getPixelRatio'] = i$r9s['pixelRatio'], i$r9s['_preCreateElement'] = qxpe['createElement'], qxpe['createElement'] = i$r9s['createElement'], km7d0c['createShaderCondition'] = i$r9s['createShaderCondition'], o3$4['parseXMLFromString'] = i$r9s['parseXMLFromString'], qw8bg['_createInputElement'] = ty12h_['_createInputElement'], i$r9s['EnvConfig']['load'] = qe8lu['prototype']['load'], qe8lu['prototype']['load'] = gxpw5v['prototype']['load'], i$r9s['isZiYu'] && kcd07 && wx['onMessage'](function (vxqgwp) {
        vxqgwp['isLoad'] && (o$n4['ziyuFileData'][vxqgwp['url']] = vxqgwp['data']);
      });
    }, i$r9s['onMkdirCallBack'] = function (wq8gb, r9sfi$) {
      if (!wq8gb) o$n4['filesListObj'] = JSON['parse'](r9sfi$['data']);
    }, i$r9s['pixelRatio'] = function () {
      if (!i$r9s['EnvConfig']['pixelRatioInt']) try {
        var x7pk = wx['getSystemInfoSync']();return i$r9s['EnvConfig']['pixelRatioInt'] = x7pk['pixelRatio'], x7pk = x7pk, x7pk['pixelRatio'];
      } catch (i9fo$) {}return i$r9s['EnvConfig']['pixelRatioInt'];
    }, i$r9s['createElement'] = function (vxpgq) {
      if (vxpgq == 'canvas') {
        var ons3$;return i$r9s['idx'] == 0x1 ? i$r9s['isZiYu'] ? (ons3$ = sharedCanvas, ons3$['style'] = {}) : ons3$ = window['canvas'] : ons3$ = window['wx']['createCanvas'](), i$r9s['idx']++, ons3$;
      } else {
        if (vxpgq == 'textarea' || vxpgq == 'input') return i$r9s['onCreateInput'](vxpgq);else {
          if (vxpgq == 'div') {
            var x75vkp = i$r9s['_preCreateElement'](vxpgq);return x75vkp['contains'] = function (uzeb8) {
              return null;
            }, x75vkp['removeChild'] = function (th21_n) {}, x75vkp;
          } else return i$r9s['_preCreateElement'](vxpgq);
        }
      }
    }, i$r9s['onCreateInput'] = function (uwq8eb) {
      var ueqb = i$r9s['_preCreateElement'](uwq8eb);return ueqb['focus'] = ty12h_['wxinputFocus'], ueqb['blur'] = ty12h_['wxinputblur'], ueqb['style'] = {}, ueqb['value'] = 0x0, ueqb['parentElement'] = {}, ueqb['placeholder'] = {}, ueqb['type'] = {}, ueqb['setColor'] = function (gw5xpv) {}, ueqb['setType'] = function (on42t) {}, ueqb['setFontFace'] = function (nt213) {}, ueqb['addEventListener'] = function (is$fo9) {}, ueqb['contains'] = function (elbuz8) {
        return null;
      }, ueqb['removeChild'] = function (fi$o9) {}, ueqb;
    }, i$r9s['createShaderCondition'] = function (tn4_) {
      var h1_62y = this,
          _t123n = function () {
        var zeub = tn4_;return h1_62y[tn4_['replace']('this.', '')];
      };return _t123n;
    }, i$r9s['EnvConfig'] = null, i$r9s['window'] = null, i$r9s['_preCreateElement'] = null, i$r9s['_inited'] = ![], i$r9s['wxRequest'] = null, i$r9s['systemInfo'] = null, i$r9s['version'] = '0.0.1', i$r9s['isZiYu'] = ![], i$r9s['isPosMsgYu'] = ![], i$r9s['parseXMLFromString'] = function (nht_21) {
      var io$sf4, on423;nht_21 = nht_21['replace'](/>\s+</g, '><');try {
        io$sf4 = new window['Parser']['DOMParser']()['parseFromString'](nht_21, 'text/xml');
      } catch (tno2) {
        throw '需要引入xml解析库文件';
      }return io$sf4;
    }, i$r9s['idx'] = 0x1, i$r9s;
  }(),
      i9$sf = function () {
    function on4s() {}wpgx(on4s, 'laya.wx.mini.MiniImage');var t3_n4 = on4s['prototype'];return t3_n4['_loadImage'] = function (vg7xp) {
      var lu8z = this,
          t23o = ![];vg7xp['indexOf']('layaNativeDir/') == -0x1 && (t23o = !![], vg7xp = h6zyl1['formatURL'](vg7xp));if (!o$n4['getFileInfo'](vg7xp)) {
        if (vg7xp['indexOf']('http://') != -0x1 || vg7xp['indexOf']('https://') != -0x1) o$n4['downImg'](vg7xp, new no$t3(on4s, on4s['onDownImgCallBack'], [vg7xp, lu8z]), vg7xp);else on4s['onCreateImage'](vg7xp, lu8z, !![]);
      } else on4s['onCreateImage'](vg7xp, lu8z, !t23o);
    }, on4s['onDownImgCallBack'] = function ($n43, ht2y1_, bgxq) {
      if (!bgxq) on4s['onCreateImage']($n43, ht2y1_);else ht2y1_['onError'](null);
    }, on4s['onCreateImage'] = function (be8q, so3i4$, tn43) {
      tn43 === void 0x0 && (tn43 = ![]);var otn43;if (!tn43) {
        var u6lhzy = o$n4['getFileInfo'](be8q),
            tn234o = u6lhzy['md5'];otn43 = o$n4['getFileNativePath'](tn234o);
      } else otn43 = be8q;if (so3i4$['imgCache'] == null) so3i4$['imgCache'] = {};var uwqbe8;function gpqex() {
        uwqbe8['onload'] = null, uwqbe8['onerror'] = null, delete so3i4$['imgCache'][be8q];
      };var o3n$ = function () {
        gpqex(), so3i4$['onLoaded'](uwqbe8);
      },
          wbeuq = function () {
        gpqex(), so3i4$['event']('error', 'Load image failed');
      };so3i4$['_type'] == 'nativeimage' ? (uwqbe8 = new qxpe['window']['Image'](), uwqbe8['crossOrigin'] = '', uwqbe8['onload'] = o3n$, uwqbe8['onerror'] = wbeuq, uwqbe8['src'] = otn43, so3i4$['imgCache'][be8q] = uwqbe8) : new _3t12n['create'](otn43, { 'onload': o3n$, 'onerror': wbeuq, 'onCreate': function (b8wueq) {
          uwqbe8 = b8wueq, so3i4$['imgCache'][be8q] = b8wueq;
        } });
    }, on4s;
  }(),
      ty12h_ = function () {
    function pxg7() {}return wpgx(pxg7, 'laya.wx.mini.MiniInput'), pxg7['_createInputElement'] = function () {
      qw8bg['_initInput'](qw8bg['area'] = qxpe['createElement']('textarea')), qw8bg['_initInput'](qw8bg['input'] = qxpe['createElement']('input')), qw8bg['inputContainer'] = qxpe['createElement']('div'), qw8bg['inputContainer']['style']['position'] = 'absolute', qw8bg['inputContainer']['style']['zIndex'] = 0x186a0, qxpe['container']['appendChild'](qw8bg['inputContainer']), qw8bg['inputContainer']['setPos'] = function (uzb86l, eq8blu) {
        qw8bg['inputContainer']['style']['left'] = uzb86l + 'px', qw8bg['inputContainer']['style']['top'] = eq8blu + 'px';
      }, z6lh1['stage']['on']('resize', null, pxg7['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (irs$9) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), lu8eqb['_soundClass'] = ezub8l, lu8eqb['_musicClass'] = ezub8l;
    }, pxg7['_onStageResize'] = function () {
      var p75xk = z6lh1['stage']['_canvasTransform']['identity']();p75xk['scale'](qxpe['width'] / km7c0d['canvas']['width'] / km7d0c['getPixelRatio'](), qxpe['height'] / km7c0d['canvas']['height'] / km7d0c['getPixelRatio']());
    }, pxg7['wxinputFocus'] = function (isr9$) {
      var _23t4n = qw8bg['inputElement']['target'];if (_23t4n && !_23t4n['editable']) return;gxqewb['window']['wx']['offKeyboardConfirm'](), gxqewb['window']['wx']['offKeyboardInput'](), gxqewb['window']['wx']['showKeyboard']({ 'defaultValue': _23t4n['text'], 'maxLength': _23t4n['maxChars'], 'multiple': _23t4n['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (eb8z) {}, 'fail': function (pgqwex) {} }), gxqewb['window']['wx']['onKeyboardConfirm'](function (wgqeb8) {
        var k7vxp = wgqeb8 ? wgqeb8['value'] : '';_23t4n['text'] = k7vxp, _23t4n['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), gxqewb['window']['wx']['onKeyboardInput'](function (qlbe8) {
        var xqewgp = qlbe8 ? qlbe8['value'] : '';if (!_23t4n['multiline']) {
          if (xqewgp['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_23t4n['text'] = xqewgp, _23t4n['event']('input');
      });
    }, pxg7['inputEnter'] = function () {
      qw8bg['inputElement']['target']['focus'] = ![];
    }, pxg7['wxinputblur'] = function () {
      pxg7['hideKeyboard']();
    }, pxg7['hideKeyboard'] = function () {
      gxqewb['window']['wx']['offKeyboardConfirm'](), gxqewb['window']['wx']['offKeyboardInput'](), gxqewb['window']['wx']['hideKeyboard']({ 'success': function (th2_1y) {
          console['log']('隐藏键盘');
        }, 'fail': function (s4n3o) {
          console['log']('隐藏键盘出错:' + (s4n3o ? s4n3o['errMsg'] : ''));
        } });
    }, pxg7;
  }(),
      gxpw5v = function () {
    function xpgv5w() {}wpgx(xpgv5w, 'laya.wx.mini.MiniLoader');var z16h = xpgv5w['prototype'];return z16h['load'] = function (weqbgx, bqgw8, qewpg, cm5, wvxq) {
      qewpg === void 0x0 && (qewpg = !![]), wvxq === void 0x0 && (wvxq = ![]);var eublq8 = this;eublq8['_url'] = weqbgx;if (weqbgx['indexOf']('data:image') === 0x0) eublq8['_type'] = bqgw8 = 'image';else eublq8['_type'] = bqgw8 || (bqgw8 = eublq8['getTypeFromUrl'](weqbgx));eublq8['_cache'] = qewpg, eublq8['_data'] = null;var l8b6z = 'ascii';if (weqbgx['indexOf']('.fnt') != -0x1) l8b6z = 'utf8';else bqgw8 == 'arraybuffer' && (l8b6z = '');;var u6zlb8 = o3$4['getFileExtension'](weqbgx);if (xpgv5w['_fileTypeArr']['indexOf'](u6zlb8) != -0x1) gxqewb['EnvConfig']['load']['call'](this, weqbgx, bqgw8, qewpg, cm5, wvxq);else {
        if (!o$n4['getFileInfo'](weqbgx)) {
          if (weqbgx['indexOf']('layaNativeDir/') != -0x1) {
            if (gxqewb['isZiYu']) {
              var bwqu8 = o$n4['ziyuFileData'][weqbgx];eublq8['onLoaded'](bwqu8);return;
            } else {
              cosnole['log']('read read'), o$n4['read'](weqbgx, l8b6z, new no$t3(xpgv5w, xpgv5w['onReadNativeCallBack'], [l8b6z, weqbgx, bqgw8, qewpg, cm5, wvxq, eublq8]));return;
            }
          }if (h6zyl1['rootPath'] == '') var v7kp = weqbgx;else v7kp = weqbgx['split'](h6zyl1['rootPath'])[0x0];weqbgx['indexOf']('http://') != -0x1 || weqbgx['indexOf']('https://') != -0x1 ? gxqewb['EnvConfig']['load']['call'](eublq8, weqbgx, bqgw8, qewpg, cm5, wvxq) : o$n4['readFile'](v7kp, l8b6z, new no$t3(xpgv5w, xpgv5w['onReadNativeCallBack'], [l8b6z, weqbgx, bqgw8, qewpg, cm5, wvxq, eublq8]), weqbgx);
        } else gxqewb['EnvConfig']['load']['call'](this, weqbgx, bqgw8, qewpg, cm5, wvxq);
      }
    }, z16h['resMgrLoad'] = function (gpv7x5, hulyz, hylz1, to$4n, _3n12, camj, ty_12h) {
      hylz1 === void 0x0 && (hylz1 = 0x0), to$4n === void 0x0 && (to$4n = ![]), _3n12 === void 0x0 && (_3n12 = ![]), camj === void 0x0 && (camj = 0x0), ty_12h === void 0x0 && (ty_12h = 0x3), gpv7x5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', gpv7x5), gxqewb['EnvConfig']['resMgrLoad'](gpv7x5, (bew8g, i$o34s, sofi4) => {
        xpgv5w['prototype']['resMgrLoadCallBack'](bew8g, i$o34s, sofi4, hulyz);
      }, hylz1, to$4n, _3n12, camj, ty_12h);
    }, z16h['resMgrLoadCallBack'] = function (ueq8bl, isfr$9, pqgwvx, h2n_1) {
      console['log']('buff:::', ueq8bl, pqgwvx, o$n4['fileNativeDir'] + '///' + o$n4['fileListName']), h2n_1(ueq8bl, isfr$9, pqgwvx);
    }, z16h['clearRes'] = function (n3t42, vp0k5) {
      vp0k5 === void 0x0 && (vp0k5 = ![]);var _h1yz = this;_h1yz['clearRes'](n3t42, vp0k5);var $ofs = o$n4['getFileInfo'](n3t42);if ($ofs && (n3t42['indexOf']('http://') != -0x1 || n3t42['indexOf']('https://') != -0x1)) {
        var h_y16z = $ofs['md5'],
            qxpgew = o$n4['getFileNativePath'](h_y16z);o$n4['remove'](qxpgew);
      }
    }, xpgv5w['onReadNativeCallBack'] = function (gxv75, bl8, kdm0c, t_43n2, xwgq, _n23t, v5g7, o$4sif, xwg5) {
      t_43n2 === void 0x0 && (t_43n2 = !![]), _n23t === void 0x0 && (_n23t = ![]), o$4sif === void 0x0 && (o$4sif = 0x0);if (!o$4sif) {
        var y_t2h1;if (kdm0c == 'json' || kdm0c == 'atlas') y_t2h1 = gxqewb['getJson'](xwg5['data']);else kdm0c == 'xml' ? y_t2h1 = o3$4['parseXMLFromString'](xwg5['data']) : y_t2h1 = xwg5['data'];v5g7['onLoaded'](y_t2h1), !gxqewb['isZiYu'] && gxqewb['isPosMsgYu'] && kdm0c != 'arraybuffer' && wx['postMessage']({ 'url': bl8, 'data': y_t2h1, 'isLoad': !![] });
      } else o$4sif == 0x1 && gxqewb['EnvConfig']['load']['call'](v5g7, bl8, kdm0c, t_43n2, xwgq, _n23t);
    }, yuhl6(xpgv5w, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), xpgv5w;
  }(),
      o$n4 = function (o34tn2) {
    function pqgv() {
      pqgv['__super']['call'](this);;
    }return wpgx(pqgv, 'laya.wx.mini.MiniFileMgr', o34tn2), pqgv['isLoadFile'] = function (ebu8ql) {
      return pqgv['_fileTypeArr']['indexOf'](ebu8ql) != -0x1 ? !![] : ![];
    }, pqgv['getFileInfo'] = function (vpxg75) {
      var qbe8ul = vpxg75['split']('?')[0x0],
          xegqbw = pqgv['filesListObj'][qbe8ul];if (xegqbw == null) return null;else return xegqbw;return null;
    }, pqgv['onFileUpdate'] = function (dkcm0j, s$on34) {
      var zhy1_6 = dkcm0j['split']('/'),
          k7vc50 = zhy1_6[zhy1_6['length'] - 0x1],
          u6z8ly = pqgv['getFileInfo'](s$on34);if (u6z8ly == null) pqgv['onSaveFile'](s$on34, k7vc50);else {
        if (u6z8ly['readyUrl'] != s$on34) pqgv['remove'](k7vc50, s$on34);
      }
    }, pqgv['exits'] = function (g5vxw, vc570) {
      var v07kp = pqgv['getFileNativePath'](g5vxw);pqgv['fs']['getFileInfo']({ 'filePath': v07kp, 'success': function (qgxvw) {
          vc570 != null && vc570['runWith']([0x0, qgxvw]);
        }, 'fail': function (kcm07) {
          vc570 != null && vc570['runWith']([0x1, kcm07]);
        } });
    }, pqgv['read'] = function ($n4so, so9i$, wqeg8, beu8q) {
      so9i$ === void 0x0 && (so9i$ = 'ascill'), beu8q === void 0x0 && (beu8q = '');var _nt34;beu8q != '' ? _nt34 = pqgv['getFileNativePath']($n4so) : _nt34 = $n4so, pqgv['fs']['readFile']({ 'filePath': _nt34, 'encoding': so9i$, 'success': function (pvkx5) {
          wqeg8 != null && wqeg8['runWith']([0x0, pvkx5]);
        }, 'fail': function (bu) {
          if (bu && beu8q != '') pqgv['down'](beu8q, so9i$, wqeg8, beu8q);else wqeg8 != null && wqeg8['runWith']([0x1]);
        } });
    }, pqgv['readNativeFile'] = function (b8uel, t3$4o) {
      pqgv['fs']['readFile']({ 'filePath': b8uel, 'encoding': '', 'success': function (gx5v7p) {
          t3$4o != null && t3$4o['runWith']([0x0]);
        }, 'fail': function (gb8qew) {
          t3$4o != null && t3$4o['runWith']([0x1]);
        } });
    }, pqgv['down'] = function (to$3, tn_234, uh6zl, soi$34) {
      tn_234 === void 0x0 && (tn_234 = 'ascill'), soi$34 === void 0x0 && (soi$34 = '');var y1_z6 = pqgv['getFileNativePath'](soi$34),
          s3i$4 = pqgv['wxdown']({ 'url': to$3, 'filePath': y1_z6, 'success': function (t_hn21) {
          if (t_hn21['statusCode'] === 0xc8) pqgv['readFile'](t_hn21['filePath'], tn_234, uh6zl, soi$34);
        }, 'fail': function (h1t2_y) {
          uh6zl != null && uh6zl['runWith']([0x1, h1t2_y]);
        } });s3i$4['onProgressUpdate'](function (vk0p75) {
        uh6zl != null && uh6zl['runWith']([0x2, vk0p75['progress']]);
      });
    }, pqgv['readFile'] = function (k5cv70, v7c05, $3nt4o, i3os4$) {
      v7c05 === void 0x0 && (v7c05 = 'ascill'), i3os4$ === void 0x0 && (i3os4$ = ''), pqgv['fs']['readFile']({ 'filePath': k5cv70, 'encoding': v7c05, 'success': function (k57vp) {
          if (k5cv70['indexOf']('http://') != -0x1 || k5cv70['indexOf']('https://') != -0x1) pqgv['onFileUpdate'](k5cv70, i3os4$);$3nt4o != null && $3nt4o['runWith']([0x0, k57vp]);
        }, 'fail': function (h6yl1z) {
          if (h6yl1z) $3nt4o != null && $3nt4o['runWith']([0x1, h6yl1z]);
        } });
    }, pqgv['downImg'] = function (ot234, $os4i3, is$9f) {
      is$9f === void 0x0 && (is$9f = '');var xbweg = pqgv['wxdown']({ 'url': ot234, 'success': function (s43$on) {
          s43$on['statusCode'] === 0xc8 && pqgv['copyFile'](s43$on['tempFilePath'], is$9f, $os4i3);
        }, 'fail': function (_1t2) {
          $os4i3 != null && $os4i3['runWith']([0x1, _1t2]);
        } });
    }, pqgv['copyFile'] = function (xqw, gqep, jmdac) {
      var xpkv57 = xqw['split']('/'),
          y61hlz = xpkv57[xpkv57['length'] - 0x1],
          m0jdca = gqep['split']('?')[0x0],
          h6zlyu = pqgv['getFileInfo'](gqep),
          tn24o3 = pqgv['getFileNativePath'](y61hlz);pqgv['fs']['copyFile']({ 'srcPath': xqw, 'destPath': tn24o3, 'success': function (y8uz6) {
          if (!h6zlyu) pqgv['onSaveFile'](gqep, y61hlz), jmdac != null && jmdac['runWith']([0x0]);else {
            if (h6zlyu['readyUrl'] != gqep) pqgv['remove'](y61hlz, gqep, jmdac);
          }
        }, 'fail': function ($o3tn) {
          jmdac != null && jmdac['runWith']([0x1, $o3tn]);
        } });
    }, pqgv['getFileNativePath'] = function (wg5px) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wg5px;
    }, pqgv['remove'] = function (n3to$4, fr$i9s, io3s4$) {
      fr$i9s === void 0x0 && (fr$i9s = '');var $sri = pqgv['getFileInfo'](fr$i9s),
          zel8 = pqgv['getFileNativePath']($sri['md5']);z6lh1['loader']['clearRes']($sri['readyUrl']), pqgv['fs']['unlink']({ 'filePath': zel8, 'success': function (v50p7k) {
          if (fr$i9s != '') pqgv['onSaveFile'](fr$i9s, n3to$4);io3s4$ != null && io3s4$['runWith']([0x0]);
        }, 'fail': function (_y1zh) {} });
    }, pqgv['onSaveFile'] = function (y_612h, y_216h) {
      var kx5v7 = y_612h['split']('?')[0x0];pqgv['filesListObj'][kx5v7] = { 'md5': y_216h, 'readyUrl': y_612h }, pqgv['fs']['writeFile']({ 'filePath': pqgv['fileNativeDir'] + '/' + pqgv['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pqgv['filesListObj']), 'success': function (u6zy) {
          console['log']('写入测试测试成功：', u6zy);
        }, 'fail': function (uzl6b8) {
          console['log']('写入测试测试失败：', uzl6b8);
        } });
    }, pqgv['existDir'] = function (qbxwg, _nt12) {
      pqgv['fs']['mkdir']({ 'dirPath': qbxwg, 'success': function (so$n34) {
          _nt12 != null && _nt12['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (is9o) {
          if (is9o['errMsg']['indexOf']('file already exists') != -0x1) pqgv['readSync'](pqgv['fileListName'], 'utf8', _nt12);else _nt12 != null && _nt12['runWith']([0x1, is9o]);
        } });
    }, pqgv['readSync'] = function (y2_61, yt_12, zyl8, jm0acd) {
      yt_12 === void 0x0 && (yt_12 = 'ascill'), jm0acd === void 0x0 && (jm0acd = '');var q8uew = pqgv['getFileNativePath'](y2_61),
          n_23t1;try {
        n_23t1 = pqgv['fs']['readFileSync'](q8uew), zyl8 != null && zyl8['runWith']([0x0, { 'data': n_23t1 }]);
      } catch (_hyt1) {
        zyl8 != null && zyl8['runWith']([0x1]);
      }
    }, pqgv['readCache'] = function () {}, pqgv['writeCache'] = function (qlub8) {
      var tn1_h = readyUrl['split']('?')[0x0];pqgv['filesListObj'][tn1_h] = { 'md5': md5Name, 'readyUrl': readyUrl }, pqgv['fs']['writeFile']({ 'filePath': pqgv['fileNativeDir'] + '/' + pqgv['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pqgv['filesListObj']), 'success': function (t3n4o$) {}, 'fail': function ($sri9) {} });
    }, pqgv['setNativeFileDir'] = function (hy61) {
      pqgv['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hy61;
    }, pqgv['filesListObj'] = {}, pqgv['fileNativeDir'] = null, pqgv['fileListName'] = 'layaairfiles.txt', pqgv['ziyuFileData'] = {}, yuhl6(pqgv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), pqgv;
  }(hyuz6),
      ezub8l = function (yzh6ul) {
    function x5vp7g() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], x5vp7g['__super']['call'](this), this['_sound'] = x5vp7g['_createSound']();
    }wpgx(x5vp7g, 'laya.wx.mini.MiniSound', yzh6ul);var jkd0c = x5vp7g['prototype'];return jkd0c['load'] = function (exw) {
      var tn3_12 = this;exw = h6zyl1['formatURL'](exw), this['url'] = exw;if (x5vp7g['_audioCache'][exw]) {
        this['event']('complete');return;
      }function dajm() {
        if (x5vp7g['_null'] != undefined) tn3_12['_sound']['onCanplay'](x5vp7g['_null']), tn3_12['_sound']['onError'](x5vp7g['_null']);else try {
          tn3_12['_sound']['onCanplay'](null), tn3_12['_sound']['onError'](null), x5vp7g['_null'] = null;
        } catch (no2) {
          console['warn']('[wxmini] _clearSound:' + no2), tn3_12['_sound']['onCanplay']($4osi), tn3_12['_sound']['onError']($4osi), x5vp7g['_null'] = $4osi;
        }
      }function qwbu() {
        dajm(), no$4t['loaded'] = !![], no$4t['event']('complete'), x5vp7g['_audioCache'][no$4t['url']] = no$4t;
      }function mc75k(begw8) {
        console['error']('errCode=' + begw8['errCode'] + '  errMsg=' + begw8['errMsg']), dajm(), no$4t['event']('error');
      }function $4osi() {}this['_sound']['onCanplay'](qwbu), this['_sound']['onError'](mc75k), this['_sound']['src'] = exw;var no$4t = this;
    }, jkd0c['play'] = function (xewgpq, wbqu) {
      xewgpq === void 0x0 && (xewgpq = 0x0), wbqu === void 0x0 && (wbqu = 0x0);var ir$sf;if (this['url'] == lu8eqb['_tMusic']) {
        if (!x5vp7g['_musicAudio']) x5vp7g['_musicAudio'] = x5vp7g['_createSound']();ir$sf = x5vp7g['_musicAudio'];
      } else ir$sf = x5vp7g['_createSound']();ir$sf['src'] = this['url'];var z8u6yl = new s9fo(ir$sf);return z8u6yl['url'] = this['url'], z8u6yl['loops'] = wbqu, z8u6yl['startTime'] = xewgpq, z8u6yl['play'](), lu8eqb['addChannel'](z8u6yl), z8u6yl;
    }, jkd0c['dispose'] = function () {
      var _n43 = x5vp7g['_audioCache'][this['url']];_n43 && (_n43['src'] = '', delete x5vp7g['_audioCache'][this['url']]);
    }, ue8b(0x0, jkd0c, 'duration', function () {
      return this['_sound']['duration'];
    }), x5vp7g['_createSound'] = function () {
      return x5vp7g['_id']++, gxqewb['window']['wx']['createInnerAudioContext']();
    }, x5vp7g['_musicAudio'] = null, x5vp7g['_id'] = 0x0, x5vp7g['_audioCache'] = {}, x5vp7g['_null'] = undefined, x5vp7g;
  }(hyuz6),
      s9fo = function (kcjdm0) {
    function fs$r(xvwqpg) {
      this['_audio'] = null, this['_onEnd'] = null, fs$r['__super']['call'](this), this['_audio'] = xvwqpg, this['_onEnd'] = o3$4['bind'](this['__onEnd'], this), xvwqpg['onEnded'](this['_onEnd']);
    }wpgx(fs$r, 'laya.wx.mini.MiniSoundChannel', kcjdm0);var n2to4 = fs$r['prototype'];return n2to4['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (z6lh1['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, n2to4['__onNull'] = function () {}, n2to4['play'] = function () {
      this['isStopped'] = ![], lu8eqb['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, n2to4['stop'] = function () {
      this['isStopped'] = !![], lu8eqb['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (fs$r['_null'] != undefined) this['_audio']['onEnded'](fs$r['_null']);else try {
        this['_audio']['onEnded'](null), fs$r['_null'] = null;
      } catch (euwbq) {
        console['warn']('[wxmini] stop:' + euwbq), this['_audio']['onEnded'](o3$4['bind'](this['__onNull'], this)), fs$r['_null'] = o3$4['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, n2to4['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, n2to4['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], lu8eqb['addChannel'](this), this['_audio']['play']();
    }, ue8b(0x0, n2to4, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ue8b(0x0, n2to4, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ue8b(0x0, n2to4, 'volume', function () {
      return 0x1;
    }, function (ylh) {}), fs$r['_null'] = undefined, fs$r;
  }(s4ofi);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var xwqepg in Laya) {
    var wgvqp = Laya[xwqepg];wgvqp && wgvqp['__isclass'] && (exports[xwqepg] = wgvqp);
  }
});