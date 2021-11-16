var W = wx.$l;
(function (window, document, hlzk) {
  var n3rx0 = hlzk['un'],
      $sd284 = hlzk['uns'],
      d$2as = hlzk['static'],
      rxny0 = hlzk['class'],
      $2d84 = hlzk['getset'],
      qfltz5 = hlzk['__newvec'],
      ot57f9 = laya['utils']['Browser'],
      lhtq = laya['events']['Event'],
      jqzhtl = laya['events']['EventDispatcher'],
      jakdb2 = laya['resource']['HTMLImage'],
      ve1g6 = laya['utils']['Handler'],
      v9fo = laya['display']['Input'],
      kjqhl = laya['net']['Loader'],
      v71of = laya['maths']['Matrix'],
      qtlzh5 = laya['renders']['Render'],
      thq5zl = laya['utils']['RunDriver'],
      k$2adb = laya['media']['Sound'],
      vo719e = laya['media']['SoundChannel'],
      rycm0 = laya['media']['SoundManager'],
      $8s_n = laya['display']['Stage'],
      x0_ = laya['net']['URL'],
      g1evo7 = laya['utils']['Utils'],
      kd$2b = function () {
    function hjqlzt() {}return rxny0(hjqlzt, 'laya.wx.mini.MiniAdpter'), hjqlzt['getJson'] = function (y30rmc) {
      return JSON['parse'](y30rmc);
    }, hjqlzt['init'] = function ($28b, zftq) {
      $28b === void 0x0 && ($28b = ![]), zftq === void 0x0 && (zftq = ![]);if (hjqlzt['_inited']) return;hjqlzt['window'] = window;if (hjqlzt['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;hjqlzt['_inited'] = !![], hjqlzt['isZiYu'] = zftq, hjqlzt['isPosMsgYu'] = $28b, hjqlzt['EnvConfig'] = {}, !hjqlzt['isZiYu'] && (n_0x3y['setNativeFileDir']('/layaairGame'), n_0x3y['existDir'](n_0x3y['fileNativeDir'], ve1g6['create'](hjqlzt, hjqlzt['onMkdirCallBack']))), hjqlzt['window']['focus'] = function () {}, hlzk['getUrlPath'] = function () {}, hjqlzt['window']['logtime'] = function (v7eg) {}, hjqlzt['window']['alertTimeLog'] = function (ol9ft5) {}, hjqlzt['window']['resetShareInfo'] = function () {}, hjqlzt['window']['CanvasRenderingContext2D'] = function () {}, hjqlzt['window']['CanvasRenderingContext2D']['prototype'] = hjqlzt['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], hjqlzt['window']['document']['body']['appendChild'] = function () {}, hjqlzt['EnvConfig']['pixelRatioInt'] = 0x0, thq5zl['getPixelRatio'] = hjqlzt['pixelRatio'], hjqlzt['_preCreateElement'] = ot57f9['createElement'], ot57f9['createElement'] = hjqlzt['createElement'], thq5zl['createShaderCondition'] = hjqlzt['createShaderCondition'], g1evo7['parseXMLFromString'] = hjqlzt['parseXMLFromString'], v9fo['_createInputElement'] = ynx_0['_createInputElement'], hjqlzt['EnvConfig']['load'] = kjqhl['prototype']['load'], kjqhl['prototype']['load'] = rc3i['prototype']['load'], hjqlzt['isZiYu'] && $28b && wx['onMessage'](function (ev719) {
        ev719['isLoad'] && (n_0x3y['ziyuFileData'][ev719['url']] = ev719['data']);
      });
    }, hjqlzt['onMkdirCallBack'] = function (o9f5tl, cx3y0) {
      if (!o9f5tl) n_0x3y['filesListObj'] = JSON['parse'](cx3y0['data']);
    }, hjqlzt['pixelRatio'] = function () {
      if (!hjqlzt['EnvConfig']['pixelRatioInt']) try {
        var b$d2sa = wx['getSystemInfoSync']();return hjqlzt['EnvConfig']['pixelRatioInt'] = b$d2sa['pixelRatio'], b$d2sa = b$d2sa, b$d2sa['pixelRatio'];
      } catch (v1g) {}return hjqlzt['EnvConfig']['pixelRatioInt'];
    }, hjqlzt['createElement'] = function (ri30) {
      if (ri30 == 'canvas') {
        var sn48x;return hjqlzt['idx'] == 0x1 ? hjqlzt['isZiYu'] ? (sn48x = sharedCanvas, sn48x['style'] = {}) : sn48x = window['canvas'] : sn48x = window['wx']['createCanvas'](), hjqlzt['idx']++, sn48x;
      } else {
        if (ri30 == 'textarea' || ri30 == 'input') return hjqlzt['onCreateInput'](ri30);else {
          if (ri30 == 'div') {
            var hkzl = hjqlzt['_preCreateElement'](ri30);return hkzl['contains'] = function (bad2s) {
              return null;
            }, hkzl['removeChild'] = function (h5tzq) {}, hkzl;
          } else return hjqlzt['_preCreateElement'](ri30);
        }
      }
    }, hjqlzt['onCreateInput'] = function (kahj) {
      var jb2ah = hjqlzt['_preCreateElement'](kahj);return jb2ah['focus'] = ynx_0['wxinputFocus'], jb2ah['blur'] = ynx_0['wxinputblur'], jb2ah['style'] = {}, jb2ah['value'] = 0x0, jb2ah['parentElement'] = {}, jb2ah['placeholder'] = {}, jb2ah['type'] = {}, jb2ah['setColor'] = function (s4$d_) {}, jb2ah['setType'] = function (d4$s28) {}, jb2ah['setFontFace'] = function (xs48n_) {}, jb2ah['addEventListener'] = function (adb$2k) {}, jb2ah['contains'] = function (v971e) {
        return null;
      }, jb2ah['removeChild'] = function (y4n0_x) {}, jb2ah;
    }, hjqlzt['createShaderCondition'] = function (ugv61) {
      var $bd2 = this,
          tqjlzh = function () {
        var bdak2j = ugv61;return $bd2[ugv61['replace']('this.', '')];
      };return tqjlzh;
    }, hjqlzt['EnvConfig'] = null, hjqlzt['window'] = null, hjqlzt['_preCreateElement'] = null, hjqlzt['_inited'] = ![], hjqlzt['wxRequest'] = null, hjqlzt['systemInfo'] = null, hjqlzt['version'] = '0.0.1', hjqlzt['isZiYu'] = ![], hjqlzt['isPosMsgYu'] = ![], hjqlzt['parseXMLFromString'] = function (r0ynx) {
      var s4$_8n, eg71;r0ynx = r0ynx['replace'](/>\s+</g, '><');try {
        s4$_8n = new window['Parser']['DOMParser']()['parseFromString'](r0ynx, 'text/xml');
      } catch (f97v1) {
        throw '需要引入xml解析库文件';
      }return s4$_8n;
    }, hjqlzt['idx'] = 0x1, hjqlzt;
  }(),
      zf5qtl = function () {
    function v6u1g() {}rxny0(v6u1g, 'laya.wx.mini.MiniImage');var xc = v6u1g['prototype'];return xc['_loadImage'] = function (cr0mi3) {
      var d$4s8 = this,
          ltjqhz = ![];cr0mi3['indexOf']('layaNativeDir/') == -0x1 && (ltjqhz = !![], cr0mi3 = x0_['formatURL'](cr0mi3));if (!n_0x3y['getFileInfo'](cr0mi3)) {
        if (cr0mi3['indexOf']('http://') != -0x1 || cr0mi3['indexOf']('https://') != -0x1) n_0x3y['downImg'](cr0mi3, new ve1g6(v6u1g, v6u1g['onDownImgCallBack'], [cr0mi3, d$4s8]), cr0mi3);else v6u1g['onCreateImage'](cr0mi3, d$4s8, !![]);
      } else v6u1g['onCreateImage'](cr0mi3, d$4s8, !ltjqhz);
    }, v6u1g['onDownImgCallBack'] = function (thzqjl, qjlhkz, lf95qt) {
      if (!lf95qt) v6u1g['onCreateImage'](thzqjl, qjlhkz);else qjlhkz['onError'](null);
    }, v6u1g['onCreateImage'] = function (cimr30, ug6ve, fqlt5) {
      fqlt5 === void 0x0 && (fqlt5 = ![]);var o95vf7;if (!fqlt5) {
        var t759 = n_0x3y['getFileInfo'](cimr30),
            kbzjah = t759['md5'];o95vf7 = n_0x3y['getFileNativePath'](kbzjah);
      } else o95vf7 = cimr30;if (ug6ve['imgCache'] == null) ug6ve['imgCache'] = {};var sd8b;function flqzt5() {
        sd8b['onload'] = null, sd8b['onerror'] = null, delete ug6ve['imgCache'][cimr30];
      };var ol9ft = function () {
        flqzt5(), ug6ve['onLoaded'](sd8b);
      },
          fzql5t = function () {
        flqzt5(), ug6ve['event']('error', 'Load image failed');
      };ug6ve['_type'] == 'nativeimage' ? (sd8b = new ot57f9['window']['Image'](), sd8b['crossOrigin'] = '', sd8b['onload'] = ol9ft, sd8b['onerror'] = fzql5t, sd8b['src'] = o95vf7, ug6ve['imgCache'][cimr30] = sd8b) : new jakdb2['create'](o95vf7, { 'onload': ol9ft, 'onerror': fzql5t, 'onCreate': function (cir) {
          sd8b = cir, ug6ve['imgCache'][cimr30] = cir;
        } });
    }, v6u1g;
  }(),
      ynx_0 = function () {
    function hz5ql() {}return rxny0(hz5ql, 'laya.wx.mini.MiniInput'), hz5ql['_createInputElement'] = function () {
      v9fo['_initInput'](v9fo['area'] = ot57f9['createElement']('textarea')), v9fo['_initInput'](v9fo['input'] = ot57f9['createElement']('input')), v9fo['inputContainer'] = ot57f9['createElement']('div'), v9fo['inputContainer']['style']['position'] = 'absolute', v9fo['inputContainer']['style']['zIndex'] = 0x186a0, ot57f9['container']['appendChild'](v9fo['inputContainer']), v9fo['inputContainer']['setPos'] = function (lhjk, aqhkz) {
        v9fo['inputContainer']['style']['left'] = lhjk + 'px', v9fo['inputContainer']['style']['top'] = aqhkz + 'px';
      }, hlzk['stage']['on']('resize', null, hz5ql['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (bds2) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), rycm0['_soundClass'] = s8, rycm0['_musicClass'] = s8;
    }, hz5ql['_onStageResize'] = function () {
      var yx0n = hlzk['stage']['_canvasTransform']['identity']();yx0n['scale'](ot57f9['width'] / qtlzh5['canvas']['width'] / thq5zl['getPixelRatio'](), ot57f9['height'] / qtlzh5['canvas']['height'] / thq5zl['getPixelRatio']());
    }, hz5ql['wxinputFocus'] = function (x8ny_4) {
      var f5o9v = v9fo['inputElement']['target'];if (f5o9v && !f5o9v['editable']) return;kd$2b['window']['wx']['offKeyboardConfirm'](), kd$2b['window']['wx']['offKeyboardInput'](), kd$2b['window']['wx']['showKeyboard']({ 'defaultValue': f5o9v['text'], 'maxLength': f5o9v['maxChars'], 'multiple': f5o9v['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ahqkz) {}, 'fail': function (b$2k) {} }), kd$2b['window']['wx']['onKeyboardConfirm'](function (wri3c) {
        var thql5z = wri3c ? wri3c['value'] : '';f5o9v['text'] = thql5z, f5o9v['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), kd$2b['window']['wx']['onKeyboardInput'](function (rmci3) {
        var geu17v = rmci3 ? rmci3['value'] : '';if (!f5o9v['multiline']) {
          if (geu17v['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }f5o9v['text'] = geu17v, f5o9v['event']('input');
      });
    }, hz5ql['inputEnter'] = function () {
      v9fo['inputElement']['target']['focus'] = ![];
    }, hz5ql['wxinputblur'] = function () {
      hz5ql['hideKeyboard']();
    }, hz5ql['hideKeyboard'] = function () {
      kd$2b['window']['wx']['offKeyboardConfirm'](), kd$2b['window']['wx']['offKeyboardInput'](), kd$2b['window']['wx']['hideKeyboard']({ 'success': function (f79vo) {
          console['log']('隐藏键盘');
        }, 'fail': function (s$_) {
          console['log']('隐藏键盘出错:' + (s$_ ? s$_['errMsg'] : ''));
        } });
    }, hz5ql;
  }(),
      rc3i = function () {
    function x3ycr0() {}rxny0(x3ycr0, 'laya.wx.mini.MiniLoader');var e6ug1p = x3ycr0['prototype'];return e6ug1p['load'] = function (ltzfq5, $428s, e7g1, oge1v, zqjha) {
      e7g1 === void 0x0 && (e7g1 = !![]), zqjha === void 0x0 && (zqjha = ![]);var dkab$ = this;dkab$['_url'] = ltzfq5;if (ltzfq5['indexOf']('data:image') === 0x0) dkab$['_type'] = $428s = 'image';else dkab$['_type'] = $428s || ($428s = dkab$['getTypeFromUrl'](ltzfq5));dkab$['_cache'] = e7g1, dkab$['_data'] = null;var v1gue7 = 'ascii';if (ltzfq5['indexOf']('.fnt') != -0x1) v1gue7 = 'utf8';else $428s == 'arraybuffer' && (v1gue7 = '');;var akd$2b = g1evo7['getFileExtension'](ltzfq5);if (x3ycr0['_fileTypeArr']['indexOf'](akd$2b) != -0x1) kd$2b['EnvConfig']['load']['call'](this, ltzfq5, $428s, e7g1, oge1v, zqjha);else {
        if (!n_0x3y['getFileInfo'](ltzfq5)) {
          if (ltzfq5['indexOf']('layaNativeDir/') != -0x1) {
            if (kd$2b['isZiYu']) {
              var x0_y3 = n_0x3y['ziyuFileData'][ltzfq5];dkab$['onLoaded'](x0_y3);return;
            } else {
              cosnole['log']('read read'), n_0x3y['read'](ltzfq5, v1gue7, new ve1g6(x3ycr0, x3ycr0['onReadNativeCallBack'], [v1gue7, ltzfq5, $428s, e7g1, oge1v, zqjha, dkab$]));return;
            }
          }if (x0_['rootPath'] == '') var _0ynx = ltzfq5;else _0ynx = ltzfq5['split'](x0_['rootPath'])[0x0];ltzfq5['indexOf']('http://') != -0x1 || ltzfq5['indexOf']('https://') != -0x1 ? kd$2b['EnvConfig']['load']['call'](dkab$, ltzfq5, $428s, e7g1, oge1v, zqjha) : n_0x3y['readFile'](_0ynx, v1gue7, new ve1g6(x3ycr0, x3ycr0['onReadNativeCallBack'], [v1gue7, ltzfq5, $428s, e7g1, oge1v, zqjha, dkab$]), ltzfq5);
        } else kd$2b['EnvConfig']['load']['call'](this, ltzfq5, $428s, e7g1, oge1v, zqjha);
      }
    }, e6ug1p['resMgrLoad'] = function (ba2$dk, ci03mr, g1up6, epu1g6, akdbj, s8n$_, mc3r0i) {
      g1up6 === void 0x0 && (g1up6 = 0x0), epu1g6 === void 0x0 && (epu1g6 = ![]), akdbj === void 0x0 && (akdbj = ![]), s8n$_ === void 0x0 && (s8n$_ = 0x0), mc3r0i === void 0x0 && (mc3r0i = 0x3), ba2$dk['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ba2$dk), kd$2b['EnvConfig']['resMgrLoad'](ba2$dk, (ztl5f, f9v7o5, n0ryx) => {
        x3ycr0['prototype']['resMgrLoadCallBack'](ztl5f, f9v7o5, n0ryx, ci03mr);
      }, g1up6, epu1g6, akdbj, s8n$_, mc3r0i);
    }, e6ug1p['resMgrLoadCallBack'] = function (yxnr3, zajk, sxn_84, sn8_$) {
      console['log']('buff:::', yxnr3, sxn_84, n_0x3y['fileNativeDir'] + '///' + n_0x3y['fileListName']), sn8_$(yxnr3, zajk, sxn_84);
    }, e6ug1p['clearRes'] = function (tq9f5, lhztjq) {
      lhztjq === void 0x0 && (lhztjq = ![]);var lq9f5 = this;lq9f5['clearRes'](tq9f5, lhztjq);var x8ny4 = n_0x3y['getFileInfo'](tq9f5);if (x8ny4 && (tq9f5['indexOf']('http://') != -0x1 || tq9f5['indexOf']('https://') != -0x1)) {
        var d$8bs2 = x8ny4['md5'],
            go7ve = n_0x3y['getFileNativePath'](d$8bs2);n_0x3y['remove'](go7ve);
      }
    }, x3ycr0['onReadNativeCallBack'] = function (ov17g, d4_s8, ve17, vf7o, nx8y_, t59, htzl5q, x_48ny, qjz) {
      vf7o === void 0x0 && (vf7o = !![]), t59 === void 0x0 && (t59 = ![]), x_48ny === void 0x0 && (x_48ny = 0x0);if (!x_48ny) {
        var ab$2s;if (ve17 == 'json' || ve17 == 'atlas') ab$2s = kd$2b['getJson'](qjz['data']);else ve17 == 'xml' ? ab$2s = g1evo7['parseXMLFromString'](qjz['data']) : ab$2s = qjz['data'];htzl5q['onLoaded'](ab$2s), !kd$2b['isZiYu'] && kd$2b['isPosMsgYu'] && ve17 != 'arraybuffer' && wx['postMessage']({ 'url': d4_s8, 'data': ab$2s, 'isLoad': !![] });
      } else x_48ny == 0x1 && kd$2b['EnvConfig']['load']['call'](htzl5q, d4_s8, ve17, vf7o, nx8y_, t59);
    }, d$2as(x3ycr0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), x3ycr0;
  }(),
      n_0x3y = function (s8n$) {
    function ciw3m() {
      ciw3m['__super']['call'](this);;
    }return rxny0(ciw3m, 'laya.wx.mini.MiniFileMgr', s8n$), ciw3m['isLoadFile'] = function (geov17) {
      return ciw3m['_fileTypeArr']['indexOf'](geov17) != -0x1 ? !![] : ![];
    }, ciw3m['getFileInfo'] = function (bahjz) {
      var jb2 = bahjz['split']('?')[0x0],
          r3y0mc = ciw3m['filesListObj'][jb2];if (r3y0mc == null) return null;else return r3y0mc;return null;
    }, ciw3m['onFileUpdate'] = function (k2dj, o179vf) {
      var $k2dba = k2dj['split']('/'),
          s8n_4$ = $k2dba[$k2dba['length'] - 0x1],
          ry0cx = ciw3m['getFileInfo'](o179vf);if (ry0cx == null) ciw3m['onSaveFile'](o179vf, s8n_4$);else {
        if (ry0cx['readyUrl'] != o179vf) ciw3m['remove'](s8n_4$, o179vf);
      }
    }, ciw3m['exits'] = function (c0ry, rx0yn3) {
      var xn_8s = ciw3m['getFileNativePath'](c0ry);ciw3m['fs']['getFileInfo']({ 'filePath': xn_8s, 'success': function ($ns48) {
          rx0yn3 != null && rx0yn3['runWith']([0x0, $ns48]);
        }, 'fail': function (yr3x0n) {
          rx0yn3 != null && rx0yn3['runWith']([0x1, yr3x0n]);
        } });
    }, ciw3m['read'] = function (og7e1v, x0y3nr, cm3i0, cy3mr) {
      x0y3nr === void 0x0 && (x0y3nr = 'ascill'), cy3mr === void 0x0 && (cy3mr = '');var hkabz;cy3mr != '' ? hkabz = ciw3m['getFileNativePath'](og7e1v) : hkabz = og7e1v, ciw3m['fs']['readFile']({ 'filePath': hkabz, 'encoding': x0y3nr, 'success': function (q5th) {
          cm3i0 != null && cm3i0['runWith']([0x0, q5th]);
        }, 'fail': function (gv6u1e) {
          if (gv6u1e && cy3mr != '') ciw3m['down'](cy3mr, x0y3nr, cm3i0, cy3mr);else cm3i0 != null && cm3i0['runWith']([0x1]);
        } });
    }, ciw3m['readNativeFile'] = function (jahkb2, lq5t9f) {
      ciw3m['fs']['readFile']({ 'filePath': jahkb2, 'encoding': '', 'success': function (g1u6ep) {
          lq5t9f != null && lq5t9f['runWith']([0x0]);
        }, 'fail': function (icrm0) {
          lq5t9f != null && lq5t9f['runWith']([0x1]);
        } });
    }, ciw3m['down'] = function (bdas, qlkz, zjhbka, e6uv) {
      qlkz === void 0x0 && (qlkz = 'ascill'), e6uv === void 0x0 && (e6uv = '');var y03cmr = ciw3m['getFileNativePath'](e6uv),
          jkbahz = ciw3m['wxdown']({ 'url': bdas, 'filePath': y03cmr, 'success': function (p16ue) {
          if (p16ue['statusCode'] === 0xc8) ciw3m['readFile'](p16ue['filePath'], qlkz, zjhbka, e6uv);
        }, 'fail': function (qtzfl5) {
          zjhbka != null && zjhbka['runWith']([0x1, qtzfl5]);
        } });jkbahz['onProgressUpdate'](function (_8$4s) {
        zjhbka != null && zjhbka['runWith']([0x2, _8$4s['progress']]);
      });
    }, ciw3m['readFile'] = function (hjqakz, xr0yc3, vf97o5, y0n_4x) {
      xr0yc3 === void 0x0 && (xr0yc3 = 'ascill'), y0n_4x === void 0x0 && (y0n_4x = ''), ciw3m['fs']['readFile']({ 'filePath': hjqakz, 'encoding': xr0yc3, 'success': function (xns48_) {
          if (hjqakz['indexOf']('http://') != -0x1 || hjqakz['indexOf']('https://') != -0x1) ciw3m['onFileUpdate'](hjqakz, y0n_4x);vf97o5 != null && vf97o5['runWith']([0x0, xns48_]);
        }, 'fail': function (c3mrwi) {
          if (c3mrwi) vf97o5 != null && vf97o5['runWith']([0x1, c3mrwi]);
        } });
    }, ciw3m['downImg'] = function (db$ak, lhzqjk, sda2) {
      sda2 === void 0x0 && (sda2 = '');var n8s_4x = ciw3m['wxdown']({ 'url': db$ak, 'success': function (_84xny) {
          _84xny['statusCode'] === 0xc8 && ciw3m['copyFile'](_84xny['tempFilePath'], sda2, lhzqjk);
        }, 'fail': function (g16ep) {
          lhzqjk != null && lhzqjk['runWith']([0x1, g16ep]);
        } });
    }, ciw3m['copyFile'] = function (x0ryn, hjlqzk, m3cr0) {
      var nx_4 = x0ryn['split']('/'),
          olft59 = nx_4[nx_4['length'] - 0x1],
          qjazh = hjlqzk['split']('?')[0x0],
          zjht = ciw3m['getFileInfo'](hjlqzk),
          ft5ol9 = ciw3m['getFileNativePath'](olft59);ciw3m['fs']['copyFile']({ 'srcPath': x0ryn, 'destPath': ft5ol9, 'success': function (o7g1v) {
          if (!zjht) ciw3m['onSaveFile'](hjlqzk, olft59), m3cr0 != null && m3cr0['runWith']([0x0]);else {
            if (zjht['readyUrl'] != hjlqzk) ciw3m['remove'](olft59, hjlqzk, m3cr0);
          }
        }, 'fail': function (my3cr0) {
          m3cr0 != null && m3cr0['runWith']([0x1, my3cr0]);
        } });
    }, ciw3m['getFileNativePath'] = function (of95) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + of95;
    }, ciw3m['remove'] = function (v1g6, f95tl, qlzft) {
      f95tl === void 0x0 && (f95tl = '');var g6up1e = ciw3m['getFileInfo'](f95tl),
          bahk2j = ciw3m['getFileNativePath'](g6up1e['md5']);hlzk['loader']['clearRes'](g6up1e['readyUrl']), ciw3m['fs']['unlink']({ 'filePath': bahk2j, 'success': function (v5f79o) {
          if (f95tl != '') ciw3m['onSaveFile'](f95tl, v1g6);qlzft != null && qlzft['runWith']([0x0]);
        }, 'fail': function (da2bk) {} });
    }, ciw3m['onSaveFile'] = function (k$bd2, kaqjh) {
      var rc30m = k$bd2['split']('?')[0x0];ciw3m['filesListObj'][rc30m] = { 'md5': kaqjh, 'readyUrl': k$bd2 }, ciw3m['fs']['writeFile']({ 'filePath': ciw3m['fileNativeDir'] + '/' + ciw3m['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ciw3m['filesListObj']), 'success': function (o7f9t) {
          console['log']('写入测试测试成功：', o7f9t);
        }, 'fail': function (zlqj) {
          console['log']('写入测试测试失败：', zlqj);
        } });
    }, ciw3m['existDir'] = function (y_n48x, _ns8) {
      ciw3m['fs']['mkdir']({ 'dirPath': y_n48x, 'success': function (_ns48) {
          _ns8 != null && _ns8['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (kbazj) {
          if (kbazj['errMsg']['indexOf']('file already exists') != -0x1) ciw3m['readSync'](ciw3m['fileListName'], 'utf8', _ns8);else _ns8 != null && _ns8['runWith']([0x1, kbazj]);
        } });
    }, ciw3m['readSync'] = function (egu6v1, db8$2s, vue1, hq5l) {
      db8$2s === void 0x0 && (db8$2s = 'ascill'), hq5l === void 0x0 && (hq5l = '');var jhk2b = ciw3m['getFileNativePath'](egu6v1),
          hjq;try {
        hjq = ciw3m['fs']['readFileSync'](jhk2b), vue1 != null && vue1['runWith']([0x0, { 'data': hjq }]);
      } catch (qjklzh) {
        vue1 != null && vue1['runWith']([0x1]);
      }
    }, ciw3m['readCache'] = function () {}, ciw3m['writeCache'] = function (zqjklh) {
      var n0_4y = readyUrl['split']('?')[0x0];ciw3m['filesListObj'][n0_4y] = { 'md5': md5Name, 'readyUrl': readyUrl }, ciw3m['fs']['writeFile']({ 'filePath': ciw3m['fileNativeDir'] + '/' + ciw3m['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ciw3m['filesListObj']), 'success': function (aqjhkz) {}, 'fail': function (o79ft) {} });
    }, ciw3m['setNativeFileDir'] = function (jkdab) {
      ciw3m['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + jkdab;
    }, ciw3m['filesListObj'] = {}, ciw3m['fileNativeDir'] = null, ciw3m['fileListName'] = 'layaairfiles.txt', ciw3m['ziyuFileData'] = {}, d$2as(ciw3m, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ciw3m;
  }(jqzhtl),
      s8 = function (ev1o79) {
    function _n30y() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _n30y['__super']['call'](this), this['_sound'] = _n30y['_createSound']();
    }rxny0(_n30y, 'laya.wx.mini.MiniSound', ev1o79);var lkqjz = _n30y['prototype'];return lkqjz['load'] = function (bahj2) {
      var _x0yn4 = this;bahj2 = x0_['formatURL'](bahj2), this['url'] = bahj2;if (_n30y['_audioCache'][bahj2]) {
        this['event']('complete');return;
      }function lqkj() {
        if (_n30y['_null'] != undefined) _x0yn4['_sound']['onCanplay'](_n30y['_null']), _x0yn4['_sound']['onError'](_n30y['_null']);else try {
          _x0yn4['_sound']['onCanplay'](null), _x0yn4['_sound']['onError'](null), _n30y['_null'] = null;
        } catch (y0xn3) {
          console['warn']('[wxmini] _clearSound:' + y0xn3), _x0yn4['_sound']['onCanplay'](ymr30), _x0yn4['_sound']['onError'](ymr30), _n30y['_null'] = ymr30;
        }
      }function $s_n48() {
        lqkj(), n_x3y0['loaded'] = !![], n_x3y0['event']('complete'), _n30y['_audioCache'][n_x3y0['url']] = n_x3y0;
      }function d82bs(v5f7) {
        console['error']('errCode=' + v5f7['errCode'] + '  errMsg=' + v5f7['errMsg']), lqkj(), n_x3y0['event']('error');
      }function ymr30() {}this['_sound']['onCanplay']($s_n48), this['_sound']['onError'](d82bs), this['_sound']['src'] = bahj2;var n_x3y0 = this;
    }, lkqjz['play'] = function (o5tf79, qlhtjz) {
      o5tf79 === void 0x0 && (o5tf79 = 0x0), qlhtjz === void 0x0 && (qlhtjz = 0x0);var lt5zf;if (this['url'] == rycm0['_tMusic']) {
        if (!_n30y['_musicAudio']) _n30y['_musicAudio'] = _n30y['_createSound']();lt5zf = _n30y['_musicAudio'];
      } else lt5zf = _n30y['_createSound']();lt5zf['src'] = this['url'];var a2bk$d = new f57ov9(lt5zf);return a2bk$d['url'] = this['url'], a2bk$d['loops'] = qlhtjz, a2bk$d['startTime'] = o5tf79, a2bk$d['play'](), rycm0['addChannel'](a2bk$d), a2bk$d;
    }, lkqjz['dispose'] = function () {
      var lt5zh = _n30y['_audioCache'][this['url']];lt5zh && (lt5zh['src'] = '', delete _n30y['_audioCache'][this['url']]);
    }, $2d84(0x0, lkqjz, 'duration', function () {
      return this['_sound']['duration'];
    }), _n30y['_createSound'] = function () {
      return _n30y['_id']++, kd$2b['window']['wx']['createInnerAudioContext']();
    }, _n30y['_musicAudio'] = null, _n30y['_id'] = 0x0, _n30y['_audioCache'] = {}, _n30y['_null'] = undefined, _n30y;
  }(jqzhtl),
      f57ov9 = function (kqljh) {
    function l5qtz(sn8x_) {
      this['_audio'] = null, this['_onEnd'] = null, l5qtz['__super']['call'](this), this['_audio'] = sn8x_, this['_onEnd'] = g1evo7['bind'](this['__onEnd'], this), sn8x_['onEnded'](this['_onEnd']);
    }rxny0(l5qtz, 'laya.wx.mini.MiniSoundChannel', kqljh);var f5to97 = l5qtz['prototype'];return f5to97['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (hlzk['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, f5to97['__onNull'] = function () {}, f5to97['play'] = function () {
      this['isStopped'] = ![], rycm0['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, f5to97['stop'] = function () {
      this['isStopped'] = !![], rycm0['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (l5qtz['_null'] != undefined) this['_audio']['onEnded'](l5qtz['_null']);else try {
        this['_audio']['onEnded'](null), l5qtz['_null'] = null;
      } catch (p1ueg) {
        console['warn']('[wxmini] stop:' + p1ueg), this['_audio']['onEnded'](g1evo7['bind'](this['__onNull'], this)), l5qtz['_null'] = g1evo7['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, f5to97['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, f5to97['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], rycm0['addChannel'](this), this['_audio']['play']();
    }, $2d84(0x0, f5to97, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), $2d84(0x0, f5to97, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), $2d84(0x0, f5to97, 'volume', function () {
      return 0x1;
    }, function (puge61) {}), l5qtz['_null'] = undefined, l5qtz;
  }(vo719e);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var jlkqz in Laya) {
    var r0im3 = Laya[jlkqz];r0im3 && r0im3['__isclass'] && (exports[jlkqz] = r0im3);
  }
});