var v = wx.$d;
(function (window, document, vzkyw) {
  var _63z = vzkyw['un'],
      $q0mho = vzkyw['uns'],
      i1_286 = vzkyw['static'],
      vz_62 = vzkyw['class'],
      cwz3ky = vzkyw['getset'],
      dap5 = vzkyw['__newvec'],
      _28 = laya['utils']['Browser'],
      lui8bf = laya['events']['Event'],
      ufad9x = laya['events']['EventDispatcher'],
      $gtmo0 = laya['resource']['HTMLImage'],
      dp95ax = laya['utils']['Handler'],
      z623_ = laya['display']['Input'],
      faxd9 = laya['net']['Loader'],
      ejc7n = laya['maths']['Matrix'],
      ubd8 = laya['renders']['Render'],
      x4p59a = laya['utils']['RunDriver'],
      fbi8l = laya['media']['Sound'],
      bd9ulf = laya['media']['SoundChannel'],
      ufl9 = laya['media']['SoundManager'],
      wkyvz3 = laya['display']['Stage'],
      y3kzwv = laya['net']['URL'],
      crnj = laya['utils']['Utils'],
      $mgot = function () {
    function l8u() {}return vz_62(l8u, 'laya.wx.mini.MiniAdpter'), l8u['getJson'] = function (lu9xdf) {
      return JSON['parse'](lu9xdf);
    }, l8u['init'] = function (pxa4q, qph4o0) {
      pxa4q === void 0x0 && (pxa4q = ![]), qph4o0 === void 0x0 && (qph4o0 = ![]);if (l8u['_inited']) return;l8u['window'] = window;if (l8u['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;l8u['_inited'] = !![], l8u['isZiYu'] = qph4o0, l8u['isPosMsgYu'] = pxa4q, l8u['EnvConfig'] = {}, !l8u['isZiYu'] && (wr7ec['setNativeFileDir']('/layaairGame'), wr7ec['existDir'](wr7ec['fileNativeDir'], dp95ax['create'](l8u, l8u['onMkdirCallBack']))), l8u['window']['focus'] = function () {}, vzkyw['getUrlPath'] = function () {}, l8u['window']['logtime'] = function (ph0) {}, l8u['window']['alertTimeLog'] = function (aqh54) {}, l8u['window']['resetShareInfo'] = function () {}, l8u['window']['CanvasRenderingContext2D'] = function () {}, l8u['window']['CanvasRenderingContext2D']['prototype'] = l8u['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], l8u['window']['document']['body']['appendChild'] = function () {}, l8u['EnvConfig']['pixelRatioInt'] = 0x0, x4p59a['getPixelRatio'] = l8u['pixelRatio'], l8u['_preCreateElement'] = _28['createElement'], _28['createElement'] = l8u['createElement'], x4p59a['createShaderCondition'] = l8u['createShaderCondition'], crnj['parseXMLFromString'] = l8u['parseXMLFromString'], z623_['_createInputElement'] = ophq40['_createInputElement'], l8u['EnvConfig']['load'] = faxd9['prototype']['load'], faxd9['prototype']['load'] = w7nk['prototype']['load'], l8u['isZiYu'] && pxa4q && wx['onMessage'](function (m0q4) {
        m0q4['isLoad'] && (wr7ec['ziyuFileData'][m0q4['url']] = m0q4['data']);
      });
    }, l8u['onMkdirCallBack'] = function (k_z3, i_6812) {
      if (!k_z3) wr7ec['filesListObj'] = JSON['parse'](i_6812['data']);
    }, l8u['pixelRatio'] = function () {
      if (!l8u['EnvConfig']['pixelRatioInt']) try {
        var wyvz = wx['getSystemInfoSync']();return l8u['EnvConfig']['pixelRatioInt'] = wyvz['pixelRatio'], wyvz = wyvz, wyvz['pixelRatio'];
      } catch (lf1b8i) {}return l8u['EnvConfig']['pixelRatioInt'];
    }, l8u['createElement'] = function (qoh0p4) {
      if (qoh0p4 == 'canvas') {
        var pahq;return l8u['idx'] == 0x1 ? l8u['isZiYu'] ? (pahq = sharedCanvas, pahq['style'] = {}) : pahq = window['canvas'] : pahq = window['wx']['createCanvas'](), l8u['idx']++, pahq;
      } else {
        if (qoh0p4 == 'textarea' || qoh0p4 == 'input') return l8u['onCreateInput'](qoh0p4);else {
          if (qoh0p4 == 'div') {
            var ib16 = l8u['_preCreateElement'](qoh0p4);return ib16['contains'] = function (cy7nkw) {
              return null;
            }, ib16['removeChild'] = function (ynw) {}, ib16;
          } else return l8u['_preCreateElement'](qoh0p4);
        }
      }
    }, l8u['onCreateInput'] = function (xd9a5) {
      var m0ot$h = l8u['_preCreateElement'](xd9a5);return m0ot$h['focus'] = ophq40['wxinputFocus'], m0ot$h['blur'] = ophq40['wxinputblur'], m0ot$h['style'] = {}, m0ot$h['value'] = 0x0, m0ot$h['parentElement'] = {}, m0ot$h['placeholder'] = {}, m0ot$h['type'] = {}, m0ot$h['setColor'] = function (db8ful) {}, m0ot$h['setType'] = function (qxap4) {}, m0ot$h['setFontFace'] = function (lf8bd) {}, m0ot$h['addEventListener'] = function (uld8f) {}, m0ot$h['contains'] = function (yk32z) {
        return null;
      }, m0ot$h['removeChild'] = function (rn7wc) {}, m0ot$h;
    }, l8u['createShaderCondition'] = function (q0mho) {
      var wyk = this,
          $0go = function () {
        var ilbu = q0mho;return wyk[q0mho['replace']('this.', '')];
      };return $0go;
    }, l8u['EnvConfig'] = null, l8u['window'] = null, l8u['_preCreateElement'] = null, l8u['_inited'] = ![], l8u['wxRequest'] = null, l8u['systemInfo'] = null, l8u['version'] = '0.0.1', l8u['isZiYu'] = ![], l8u['isPosMsgYu'] = ![], l8u['parseXMLFromString'] = function (bdlu9f) {
      var h5qa4, v2i6;bdlu9f = bdlu9f['replace'](/>\s+</g, '><');try {
        h5qa4 = new window['Parser']['DOMParser']()['parseFromString'](bdlu9f, 'text/xml');
      } catch (cwzk3) {
        throw '需要引入xml解析库文件';
      }return h5qa4;
    }, l8u['idx'] = 0x1, l8u;
  }(),
      b1_6i8 = function () {
    function w7kync() {}vz_62(w7kync, 'laya.wx.mini.MiniImage');var aqp5h4 = w7kync['prototype'];return aqp5h4['_loadImage'] = function (kcwy) {
      var c73yw = this,
          zcy3wk = ![];kcwy['indexOf']('layaNativeDir/') == -0x1 && (zcy3wk = !![], kcwy = y3kzwv['formatURL'](kcwy));if (!wr7ec['getFileInfo'](kcwy)) {
        if (kcwy['indexOf']('http://') != -0x1 || kcwy['indexOf']('https://') != -0x1) wr7ec['downImg'](kcwy, new dp95ax(w7kync, w7kync['onDownImgCallBack'], [kcwy, c73yw]), kcwy);else w7kync['onCreateImage'](kcwy, c73yw, !![]);
      } else w7kync['onCreateImage'](kcwy, c73yw, !zcy3wk);
    }, w7kync['onDownImgCallBack'] = function (paq4h5, v32_, dux5a) {
      if (!dux5a) w7kync['onCreateImage'](paq4h5, v32_);else v32_['onError'](null);
    }, w7kync['onCreateImage'] = function (v61_2, lxud, ykcw) {
      ykcw === void 0x0 && (ykcw = ![]);var kcny;if (!ykcw) {
        var v6z_1 = wr7ec['getFileInfo'](v61_2),
            l8if1b = v6z_1['md5'];kcny = wr7ec['getFileNativePath'](l8if1b);
      } else kcny = v61_2;if (lxud['imgCache'] == null) lxud['imgCache'] = {};var h0qpo;function lfib() {
        h0qpo['onload'] = null, h0qpo['onerror'] = null, delete lxud['imgCache'][v61_2];
      };var fuaxd = function () {
        lfib(), lxud['onLoaded'](h0qpo);
      },
          _z63v = function () {
        lfib(), lxud['event']('error', 'Load image failed');
      };lxud['_type'] == 'nativeimage' ? (h0qpo = new _28['window']['Image'](), h0qpo['crossOrigin'] = '', h0qpo['onload'] = fuaxd, h0qpo['onerror'] = _z63v, h0qpo['src'] = kcny, lxud['imgCache'][v61_2] = h0qpo) : new $gtmo0['create'](kcny, { 'onload': fuaxd, 'onerror': _z63v, 'onCreate': function (_61vi2) {
          h0qpo = _61vi2, lxud['imgCache'][v61_2] = _61vi2;
        } });
    }, w7kync;
  }(),
      ophq40 = function () {
    function z3_2v6() {}return vz_62(z3_2v6, 'laya.wx.mini.MiniInput'), z3_2v6['_createInputElement'] = function () {
      z623_['_initInput'](z623_['area'] = _28['createElement']('textarea')), z623_['_initInput'](z623_['input'] = _28['createElement']('input')), z623_['inputContainer'] = _28['createElement']('div'), z623_['inputContainer']['style']['position'] = 'absolute', z623_['inputContainer']['style']['zIndex'] = 0x186a0, _28['container']['appendChild'](z623_['inputContainer']), z623_['inputContainer']['setPos'] = function (du9fxa, y3ck7) {
        z623_['inputContainer']['style']['left'] = du9fxa + 'px', z623_['inputContainer']['style']['top'] = y3ck7 + 'px';
      }, vzkyw['stage']['on']('resize', null, z3_2v6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ho0qp4) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ufl9['_soundClass'] = xda9u5, ufl9['_musicClass'] = xda9u5;
    }, z3_2v6['_onStageResize'] = function () {
      var wykzc3 = vzkyw['stage']['_canvasTransform']['identity']();wykzc3['scale'](_28['width'] / ubd8['canvas']['width'] / x4p59a['getPixelRatio'](), _28['height'] / ubd8['canvas']['height'] / x4p59a['getPixelRatio']());
    }, z3_2v6['wxinputFocus'] = function (hm$o) {
      var e7cnw = z623_['inputElement']['target'];if (e7cnw && !e7cnw['editable']) return;$mgot['window']['wx']['offKeyboardConfirm'](), $mgot['window']['wx']['offKeyboardInput'](), $mgot['window']['wx']['showKeyboard']({ 'defaultValue': e7cnw['text'], 'maxLength': e7cnw['maxChars'], 'multiple': e7cnw['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (x9uda5) {}, 'fail': function (x9dua5) {} }), $mgot['window']['wx']['onKeyboardConfirm'](function (hq4mo0) {
        var k3w7c = hq4mo0 ? hq4mo0['value'] : '';e7cnw['text'] = k3w7c, e7cnw['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), $mgot['window']['wx']['onKeyboardInput'](function (l6b1i) {
        var x95apd = l6b1i ? l6b1i['value'] : '';if (!e7cnw['multiline']) {
          if (x95apd['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }e7cnw['text'] = x95apd, e7cnw['event']('input');
      });
    }, z3_2v6['inputEnter'] = function () {
      z623_['inputElement']['target']['focus'] = ![];
    }, z3_2v6['wxinputblur'] = function () {
      z3_2v6['hideKeyboard']();
    }, z3_2v6['hideKeyboard'] = function () {
      $mgot['window']['wx']['offKeyboardConfirm'](), $mgot['window']['wx']['offKeyboardInput'](), $mgot['window']['wx']['hideKeyboard']({ 'success': function (fbul) {
          console['log']('隐藏键盘');
        }, 'fail': function (x59dua) {
          console['log']('隐藏键盘出错:' + (x59dua ? x59dua['errMsg'] : ''));
        } });
    }, z3_2v6;
  }(),
      w7nk = function () {
    function g$mto() {}vz_62(g$mto, 'laya.wx.mini.MiniLoader');var aphq54 = g$mto['prototype'];return aphq54['load'] = function (lfb9u, m0$hqo, ld8fub, b8fdul, $tohm) {
      ld8fub === void 0x0 && (ld8fub = !![]), $tohm === void 0x0 && ($tohm = ![]);var hop0 = this;hop0['_url'] = lfb9u;if (lfb9u['indexOf']('data:image') === 0x0) hop0['_type'] = m0$hqo = 'image';else hop0['_type'] = m0$hqo || (m0$hqo = hop0['getTypeFromUrl'](lfb9u));hop0['_cache'] = ld8fub, hop0['_data'] = null;var er7 = 'ascii';if (lfb9u['indexOf']('.fnt') != -0x1) er7 = 'utf8';else m0$hqo == 'arraybuffer' && (er7 = '');;var moh$t0 = crnj['getFileExtension'](lfb9u);if (g$mto['_fileTypeArr']['indexOf'](moh$t0) != -0x1) $mgot['EnvConfig']['load']['call'](this, lfb9u, m0$hqo, ld8fub, b8fdul, $tohm);else {
        if (!wr7ec['getFileInfo'](lfb9u)) {
          if (lfb9u['indexOf']('layaNativeDir/') != -0x1) {
            if ($mgot['isZiYu']) {
              var v1_i2 = wr7ec['ziyuFileData'][lfb9u];hop0['onLoaded'](v1_i2);return;
            } else {
              cosnole['log']('read read'), wr7ec['read'](lfb9u, er7, new dp95ax(g$mto, g$mto['onReadNativeCallBack'], [er7, lfb9u, m0$hqo, ld8fub, b8fdul, $tohm, hop0]));return;
            }
          }if (y3kzwv['rootPath'] == '') var ewy7cn = lfb9u;else ewy7cn = lfb9u['split'](y3kzwv['rootPath'])[0x0];lfb9u['indexOf']('http://') != -0x1 || lfb9u['indexOf']('https://') != -0x1 ? $mgot['EnvConfig']['load']['call'](hop0, lfb9u, m0$hqo, ld8fub, b8fdul, $tohm) : wr7ec['readFile'](ewy7cn, er7, new dp95ax(g$mto, g$mto['onReadNativeCallBack'], [er7, lfb9u, m0$hqo, ld8fub, b8fdul, $tohm, hop0]), lfb9u);
        } else $mgot['EnvConfig']['load']['call'](this, lfb9u, m0$hqo, ld8fub, b8fdul, $tohm);
      }
    }, aphq54['resMgrLoad'] = function (kwyz3v, i81blf, oq4ph, nkc7, hmo0$t, x4a95, q4pah5) {
      oq4ph === void 0x0 && (oq4ph = 0x0), nkc7 === void 0x0 && (nkc7 = ![]), hmo0$t === void 0x0 && (hmo0$t = ![]), x4a95 === void 0x0 && (x4a95 = 0x0), q4pah5 === void 0x0 && (q4pah5 = 0x3), kwyz3v['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', kwyz3v), $mgot['EnvConfig']['resMgrLoad'](kwyz3v, (lf81i, fd9xlu, pq5oh4) => {
        g$mto['prototype']['resMgrLoadCallBack'](lf81i, fd9xlu, pq5oh4, i81blf);
      }, oq4ph, nkc7, hmo0$t, x4a95, q4pah5);
    }, aphq54['resMgrLoadCallBack'] = function (ync, hpa45q, dx9pa5, mgto) {
      console['log']('buff:::', ync, dx9pa5, wr7ec['fileNativeDir'] + '///' + wr7ec['fileListName']), mgto(ync, hpa45q, dx9pa5);
    }, aphq54['clearRes'] = function (wcen, i6b18_) {
      i6b18_ === void 0x0 && (i6b18_ = ![]);var fli81b = this;fli81b['clearRes'](wcen, i6b18_);var o0mg$ = wr7ec['getFileInfo'](wcen);if (o0mg$ && (wcen['indexOf']('http://') != -0x1 || wcen['indexOf']('https://') != -0x1)) {
        var uldfb = o0mg$['md5'],
            a5q = wr7ec['getFileNativePath'](uldfb);wr7ec['remove'](a5q);
      }
    }, g$mto['onReadNativeCallBack'] = function (u5xa9d, omth0, d9flub, lf8ubd, kw3zc, duf9lx, a9p45, y3c7wk, hq$) {
      lf8ubd === void 0x0 && (lf8ubd = !![]), duf9lx === void 0x0 && (duf9lx = ![]), y3c7wk === void 0x0 && (y3c7wk = 0x0);if (!y3c7wk) {
        var dluf9x;if (d9flub == 'json' || d9flub == 'atlas') dluf9x = $mgot['getJson'](hq$['data']);else d9flub == 'xml' ? dluf9x = crnj['parseXMLFromString'](hq$['data']) : dluf9x = hq$['data'];a9p45['onLoaded'](dluf9x), !$mgot['isZiYu'] && $mgot['isPosMsgYu'] && d9flub != 'arraybuffer' && wx['postMessage']({ 'url': omth0, 'data': dluf9x, 'isLoad': !![] });
      } else y3c7wk == 0x1 && $mgot['EnvConfig']['load']['call'](a9p45, omth0, d9flub, lf8ubd, kw3zc, duf9lx);
    }, i1_286(g$mto, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), g$mto;
  }(),
      wr7ec = function (ul9fxd) {
    function ncje7r() {
      ncje7r['__super']['call'](this);;
    }return vz_62(ncje7r, 'laya.wx.mini.MiniFileMgr', ul9fxd), ncje7r['isLoadFile'] = function (il8bfu) {
      return ncje7r['_fileTypeArr']['indexOf'](il8bfu) != -0x1 ? !![] : ![];
    }, ncje7r['getFileInfo'] = function (fubdl8) {
      var i6b8_1 = fubdl8['split']('?')[0x0],
          l9dbf = ncje7r['filesListObj'][i6b8_1];if (l9dbf == null) return null;else return l9dbf;return null;
    }, ncje7r['onFileUpdate'] = function (c7ywn, i6_1v) {
      var uib8f = c7ywn['split']('/'),
          h04poq = uib8f[uib8f['length'] - 0x1],
          i8u = ncje7r['getFileInfo'](i6_1v);if (i8u == null) ncje7r['onSaveFile'](i6_1v, h04poq);else {
        if (i8u['readyUrl'] != i6_1v) ncje7r['remove'](h04poq, i6_1v);
      }
    }, ncje7r['exits'] = function (d9ful, p0o4qh) {
      var i8f1 = ncje7r['getFileNativePath'](d9ful);ncje7r['fs']['getFileInfo']({ 'filePath': i8f1, 'success': function (jnec7) {
          p0o4qh != null && p0o4qh['runWith']([0x0, jnec7]);
        }, 'fail': function (wc73k) {
          p0o4qh != null && p0o4qh['runWith']([0x1, wc73k]);
        } });
    }, ncje7r['read'] = function (qho4, p5x49a, pqa5h4, u5x9a) {
      p5x49a === void 0x0 && (p5x49a = 'ascill'), u5x9a === void 0x0 && (u5x9a = '');var hm0$;u5x9a != '' ? hm0$ = ncje7r['getFileNativePath'](qho4) : hm0$ = qho4, ncje7r['fs']['readFile']({ 'filePath': hm0$, 'encoding': p5x49a, 'success': function (gtom$0) {
          pqa5h4 != null && pqa5h4['runWith']([0x0, gtom$0]);
        }, 'fail': function (o4qh0p) {
          if (o4qh0p && u5x9a != '') ncje7r['down'](u5x9a, p5x49a, pqa5h4, u5x9a);else pqa5h4 != null && pqa5h4['runWith']([0x1]);
        } });
    }, ncje7r['readNativeFile'] = function (v32_6, d9x5pa) {
      ncje7r['fs']['readFile']({ 'filePath': v32_6, 'encoding': '', 'success': function (yn) {
          d9x5pa != null && d9x5pa['runWith']([0x0]);
        }, 'fail': function (y2kvz3) {
          d9x5pa != null && d9x5pa['runWith']([0x1]);
        } });
    }, ncje7r['down'] = function (wky73, $ht0mo, u8flb, r7necj) {
      $ht0mo === void 0x0 && ($ht0mo = 'ascill'), r7necj === void 0x0 && (r7necj = '');var du9x = ncje7r['getFileNativePath'](r7necj),
          a9dxu = ncje7r['wxdown']({ 'url': wky73, 'filePath': du9x, 'success': function (zk3ywv) {
          if (zk3ywv['statusCode'] === 0xc8) ncje7r['readFile'](zk3ywv['filePath'], $ht0mo, u8flb, r7necj);
        }, 'fail': function (pxa4) {
          u8flb != null && u8flb['runWith']([0x1, pxa4]);
        } });a9dxu['onProgressUpdate'](function (xuadf) {
        u8flb != null && u8flb['runWith']([0x2, xuadf['progress']]);
      });
    }, ncje7r['readFile'] = function (a9dux, v6_z3, mqh4o, ulb) {
      v6_z3 === void 0x0 && (v6_z3 = 'ascill'), ulb === void 0x0 && (ulb = ''), ncje7r['fs']['readFile']({ 'filePath': a9dux, 'encoding': v6_z3, 'success': function (uf9lb) {
          if (a9dux['indexOf']('http://') != -0x1 || a9dux['indexOf']('https://') != -0x1) ncje7r['onFileUpdate'](a9dux, ulb);mqh4o != null && mqh4o['runWith']([0x0, uf9lb]);
        }, 'fail': function (ny7wec) {
          if (ny7wec) mqh4o != null && mqh4o['runWith']([0x1, ny7wec]);
        } });
    }, ncje7r['downImg'] = function (xdau5, _1vz6, duf) {
      duf === void 0x0 && (duf = '');var ejnc7r = ncje7r['wxdown']({ 'url': xdau5, 'success': function (vzk2y3) {
          vzk2y3['statusCode'] === 0xc8 && ncje7r['copyFile'](vzk2y3['tempFilePath'], duf, _1vz6);
        }, 'fail': function (nw7ky) {
          _1vz6 != null && _1vz6['runWith']([0x1, nw7ky]);
        } });
    }, ncje7r['copyFile'] = function ($om0hq, f9dlbu, y7c3) {
      var a5qh = $om0hq['split']('/'),
          nkcwy = a5qh[a5qh['length'] - 0x1],
          hpq5 = f9dlbu['split']('?')[0x0],
          duxl9 = ncje7r['getFileInfo'](f9dlbu),
          wk37y = ncje7r['getFileNativePath'](nkcwy);ncje7r['fs']['copyFile']({ 'srcPath': $om0hq, 'destPath': wk37y, 'success': function (ilb61) {
          if (!duxl9) ncje7r['onSaveFile'](f9dlbu, nkcwy), y7c3 != null && y7c3['runWith']([0x0]);else {
            if (duxl9['readyUrl'] != f9dlbu) ncje7r['remove'](nkcwy, f9dlbu, y7c3);
          }
        }, 'fail': function (i681_2) {
          y7c3 != null && y7c3['runWith']([0x1, i681_2]);
        } });
    }, ncje7r['getFileNativePath'] = function (ulf9dx) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ulf9dx;
    }, ncje7r['remove'] = function (vk3_2, hqo5p, kw7cyn) {
      hqo5p === void 0x0 && (hqo5p = '');var _z623 = ncje7r['getFileInfo'](hqo5p),
          b1_i86 = ncje7r['getFileNativePath'](_z623['md5']);vzkyw['loader']['clearRes'](_z623['readyUrl']), ncje7r['fs']['unlink']({ 'filePath': b1_i86, 'success': function (g$tmo0) {
          if (hqo5p != '') ncje7r['onSaveFile'](hqo5p, vk3_2);kw7cyn != null && kw7cyn['runWith']([0x0]);
        }, 'fail': function (v_23kz) {} });
    }, ncje7r['onSaveFile'] = function (a59xud, xa549) {
      var yckw7 = a59xud['split']('?')[0x0];ncje7r['filesListObj'][yckw7] = { 'md5': xa549, 'readyUrl': a59xud }, ncje7r['fs']['writeFile']({ 'filePath': ncje7r['fileNativeDir'] + '/' + ncje7r['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ncje7r['filesListObj']), 'success': function ($tm0h) {
          console['log']('写入测试测试成功：', $tm0h);
        }, 'fail': function (hq45o) {
          console['log']('写入测试测试失败：', hq45o);
        } });
    }, ncje7r['existDir'] = function (ywkc7n, lb18i6) {
      ncje7r['fs']['mkdir']({ 'dirPath': ywkc7n, 'success': function (dap59x) {
          lb18i6 != null && lb18i6['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (qha45p) {
          if (qha45p['errMsg']['indexOf']('file already exists') != -0x1) ncje7r['readSync'](ncje7r['fileListName'], 'utf8', lb18i6);else lb18i6 != null && lb18i6['runWith']([0x1, qha45p]);
        } });
    }, ncje7r['readSync'] = function (u8flbd, xld9, z3ykwv, x9p5ad) {
      xld9 === void 0x0 && (xld9 = 'ascill'), x9p5ad === void 0x0 && (x9p5ad = '');var ho4m = ncje7r['getFileNativePath'](u8flbd),
          fl8db;try {
        fl8db = ncje7r['fs']['readFileSync'](ho4m), z3ykwv != null && z3ykwv['runWith']([0x0, { 'data': fl8db }]);
      } catch (li61b) {
        z3ykwv != null && z3ykwv['runWith']([0x1]);
      }
    }, ncje7r['readCache'] = function () {}, ncje7r['writeCache'] = function (udlfb8) {
      var lfubd9 = readyUrl['split']('?')[0x0];ncje7r['filesListObj'][lfubd9] = { 'md5': md5Name, 'readyUrl': readyUrl }, ncje7r['fs']['writeFile']({ 'filePath': ncje7r['fileNativeDir'] + '/' + ncje7r['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ncje7r['filesListObj']), 'success': function (vw3z) {}, 'fail': function (f9auxd) {} });
    }, ncje7r['setNativeFileDir'] = function (qp4ho0) {
      ncje7r['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + qp4ho0;
    }, ncje7r['filesListObj'] = {}, ncje7r['fileNativeDir'] = null, ncje7r['fileListName'] = 'layaairfiles.txt', ncje7r['ziyuFileData'] = {}, i1_286(ncje7r, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ncje7r;
  }(ufad9x),
      xda9u5 = function (w3k7yc) {
    function erw7n() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], erw7n['__super']['call'](this), this['_sound'] = erw7n['_createSound']();
    }vz_62(erw7n, 'laya.wx.mini.MiniSound', w3k7yc);var d5ux9a = erw7n['prototype'];return d5ux9a['load'] = function (oq45) {
      var xpad = this;oq45 = y3kzwv['formatURL'](oq45), this['url'] = oq45;if (erw7n['_audioCache'][oq45]) {
        this['event']('complete');return;
      }function wzy3kv() {
        if (erw7n['_null'] != undefined) xpad['_sound']['onCanplay'](erw7n['_null']), xpad['_sound']['onError'](erw7n['_null']);else try {
          xpad['_sound']['onCanplay'](null), xpad['_sound']['onError'](null), erw7n['_null'] = null;
        } catch (e7rn) {
          console['warn']('[wxmini] _clearSound:' + e7rn), xpad['_sound']['onCanplay'](pq54o), xpad['_sound']['onError'](pq54o), erw7n['_null'] = pq54o;
        }
      }function hqpo54() {
        wzy3kv(), ufb9l['loaded'] = !![], ufb9l['event']('complete'), erw7n['_audioCache'][ufb9l['url']] = ufb9l;
      }function flbi1(nc7jre) {
        console['error']('errCode=' + nc7jre['errCode'] + '  errMsg=' + nc7jre['errMsg']), wzy3kv(), ufb9l['event']('error');
      }function pq54o() {}this['_sound']['onCanplay'](hqpo54), this['_sound']['onError'](flbi1), this['_sound']['src'] = oq45;var ufb9l = this;
    }, d5ux9a['play'] = function (wynec7, xd9af) {
      wynec7 === void 0x0 && (wynec7 = 0x0), xd9af === void 0x0 && (xd9af = 0x0);var yvz;if (this['url'] == ufl9['_tMusic']) {
        if (!erw7n['_musicAudio']) erw7n['_musicAudio'] = erw7n['_createSound']();yvz = erw7n['_musicAudio'];
      } else yvz = erw7n['_createSound']();yvz['src'] = this['url'];var q4hop = new ulfdb(yvz);return q4hop['url'] = this['url'], q4hop['loops'] = xd9af, q4hop['startTime'] = wynec7, q4hop['play'](), ufl9['addChannel'](q4hop), q4hop;
    }, d5ux9a['dispose'] = function () {
      var vwk3zy = erw7n['_audioCache'][this['url']];vwk3zy && (vwk3zy['src'] = '', delete erw7n['_audioCache'][this['url']]);
    }, cwz3ky(0x0, d5ux9a, 'duration', function () {
      return this['_sound']['duration'];
    }), erw7n['_createSound'] = function () {
      return erw7n['_id']++, $mgot['window']['wx']['createInnerAudioContext']();
    }, erw7n['_musicAudio'] = null, erw7n['_id'] = 0x0, erw7n['_audioCache'] = {}, erw7n['_null'] = undefined, erw7n;
  }(ufad9x),
      ulfdb = function (fad9x) {
    function z63(p5hoq4) {
      this['_audio'] = null, this['_onEnd'] = null, z63['__super']['call'](this), this['_audio'] = p5hoq4, this['_onEnd'] = crnj['bind'](this['__onEnd'], this), p5hoq4['onEnded'](this['_onEnd']);
    }vz_62(z63, 'laya.wx.mini.MiniSoundChannel', fad9x);var _vi612 = z63['prototype'];return _vi612['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (vzkyw['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _vi612['__onNull'] = function () {}, _vi612['play'] = function () {
      this['isStopped'] = ![], ufl9['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _vi612['stop'] = function () {
      this['isStopped'] = !![], ufl9['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (z63['_null'] != undefined) this['_audio']['onEnded'](z63['_null']);else try {
        this['_audio']['onEnded'](null), z63['_null'] = null;
      } catch (_21i86) {
        console['warn']('[wxmini] stop:' + _21i86), this['_audio']['onEnded'](crnj['bind'](this['__onNull'], this)), z63['_null'] = crnj['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, _vi612['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _vi612['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ufl9['addChannel'](this), this['_audio']['play']();
    }, cwz3ky(0x0, _vi612, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), cwz3ky(0x0, _vi612, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), cwz3ky(0x0, _vi612, 'volume', function () {
      return 0x1;
    }, function (zkv2y) {}), z63['_null'] = undefined, z63;
  }(bd9ulf);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var omg0t$ in Laya) {
    var ykwzc3 = Laya[omg0t$];ykwzc3 && ykwzc3['__isclass'] && (exports[omg0t$] = ykwzc3);
  }
});