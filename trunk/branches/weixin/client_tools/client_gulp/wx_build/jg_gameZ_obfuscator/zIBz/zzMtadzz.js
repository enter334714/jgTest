var B = wx.$z;
(function (window, document, odzety) {
  var v7fn6l = odzety['un'],
      w5u_2r = odzety['uns'],
      rb8y = odzety['static'],
      p19xg = odzety['class'],
      ok8b = odzety['getset'],
      u5_r28 = odzety['__newvec'],
      _b5r28 = laya['utils']['Browser'],
      u25w0 = laya['events']['Event'],
      kby8rd = laya['events']['EventDispatcher'],
      ghp9x1 = laya['resource']['HTMLImage'],
      _8r2b = laya['utils']['Handler'],
      as1hx = laya['display']['Input'],
      $imq37 = laya['net']['Loader'],
      n7ilf = laya['maths']['Matrix'],
      u28r_5 = laya['renders']['Render'],
      sz9axe = laya['utils']['RunDriver'],
      o8kb = laya['media']['Sound'],
      oy8k = laya['media']['SoundChannel'],
      u5w_02 = laya['media']['SoundManager'],
      kod8b = laya['display']['Stage'],
      bt = laya['net']['URL'],
      gh146p = laya['utils']['Utils'],
      tzdyok = function () {
    function o8yk() {}return p19xg(o8yk, 'laya.wx.mini.MiniAdpter'), o8yk['getJson'] = function (u052_w) {
      return JSON['parse'](u052_w);
    }, o8yk['init'] = function (kdty, xtsea) {
      kdty === void 0x0 && (kdty = ![]), xtsea === void 0x0 && (xtsea = ![]);if (o8yk['_inited']) return;o8yk['window'] = window;if (o8yk['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;o8yk['_inited'] = !![], o8yk['isZiYu'] = xtsea, o8yk['isPosMsgYu'] = kdty, o8yk['EnvConfig'] = {}, !o8yk['isZiYu'] && (s9eaz['setNativeFileDir']('/layaairGame'), s9eaz['existDir'](s9eaz['fileNativeDir'], _8r2b['create'](o8yk, o8yk['onMkdirCallBack']))), o8yk['window']['focus'] = function () {}, odzety['getUrlPath'] = function () {}, o8yk['window']['logtime'] = function (gh94) {}, o8yk['window']['alertTimeLog'] = function (in73q) {}, o8yk['window']['resetShareInfo'] = function () {}, o8yk['window']['CanvasRenderingContext2D'] = function () {}, o8yk['window']['CanvasRenderingContext2D']['prototype'] = o8yk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], o8yk['window']['document']['body']['appendChild'] = function () {}, o8yk['EnvConfig']['pixelRatioInt'] = 0x0, sz9axe['getPixelRatio'] = o8yk['pixelRatio'], o8yk['_preCreateElement'] = _b5r28['createElement'], _b5r28['createElement'] = o8yk['createElement'], sz9axe['createShaderCondition'] = o8yk['createShaderCondition'], gh146p['parseXMLFromString'] = o8yk['parseXMLFromString'], as1hx['_createInputElement'] = g914h['_createInputElement'], o8yk['EnvConfig']['load'] = $imq37['prototype']['load'], $imq37['prototype']['load'] = esaozt['prototype']['load'], o8yk['isZiYu'] && kdty && wx['onMessage'](function (v6n4f) {
        v6n4f['isLoad'] && (s9eaz['ziyuFileData'][v6n4f['url']] = v6n4f['data']);
      });
    }, o8yk['onMkdirCallBack'] = function (vf76nl, tzsoa) {
      if (!vf76nl) s9eaz['filesListObj'] = JSON['parse'](tzsoa['data']);
    }, o8yk['pixelRatio'] = function () {
      if (!o8yk['EnvConfig']['pixelRatioInt']) try {
        var at = wx['getSystemInfoSync']();return o8yk['EnvConfig']['pixelRatioInt'] = at['pixelRatio'], at = at, at['pixelRatio'];
      } catch (j3$iq) {}return o8yk['EnvConfig']['pixelRatioInt'];
    }, o8yk['createElement'] = function (x1aes) {
      if (x1aes == 'canvas') {
        var xeszat;return o8yk['idx'] == 0x1 ? o8yk['isZiYu'] ? (xeszat = sharedCanvas, xeszat['style'] = {}) : xeszat = window['canvas'] : xeszat = window['wx']['createCanvas'](), o8yk['idx']++, xeszat;
      } else {
        if (x1aes == 'textarea' || x1aes == 'input') return o8yk['onCreateInput'](x1aes);else {
          if (x1aes == 'div') {
            var sxp9 = o8yk['_preCreateElement'](x1aes);return sxp9['contains'] = function (kr58b_) {
              return null;
            }, sxp9['removeChild'] = function (l3i) {}, sxp9;
          } else return o8yk['_preCreateElement'](x1aes);
        }
      }
    }, o8yk['onCreateInput'] = function (qi$m3j) {
      var gpxh91 = o8yk['_preCreateElement'](qi$m3j);return gpxh91['focus'] = g914h['wxinputFocus'], gpxh91['blur'] = g914h['wxinputblur'], gpxh91['style'] = {}, gpxh91['value'] = 0x0, gpxh91['parentElement'] = {}, gpxh91['placeholder'] = {}, gpxh91['type'] = {}, gpxh91['setColor'] = function (p1shx9) {}, gpxh91['setType'] = function (r_k5b8) {}, gpxh91['setFontFace'] = function (pgfv6) {}, gpxh91['addEventListener'] = function (azxets) {}, gpxh91['contains'] = function (u_5w) {
        return null;
      }, gpxh91['removeChild'] = function (ni7vlm) {}, gpxh91;
    }, o8yk['createShaderCondition'] = function (l7n3m) {
      var krb = this,
          _kry = function () {
        var fhg6 = l7n3m;return krb[l7n3m['replace']('this.', '')];
      };return _kry;
    }, o8yk['EnvConfig'] = null, o8yk['window'] = null, o8yk['_preCreateElement'] = null, o8yk['_inited'] = ![], o8yk['wxRequest'] = null, o8yk['systemInfo'] = null, o8yk['version'] = '0.0.1', o8yk['isZiYu'] = ![], o8yk['isPosMsgYu'] = ![], o8yk['parseXMLFromString'] = function (dtykbo) {
      var _0u2w, m37nil;dtykbo = dtykbo['replace'](/>\s+</g, '><');try {
        _0u2w = new window['Parser']['DOMParser']()['parseFromString'](dtykbo, 'text/xml');
      } catch (eaztdo) {
        throw '需要引入xml解析库文件';
      }return _0u2w;
    }, o8yk['idx'] = 0x1, o8yk;
  }(),
      b528_r = function () {
    function b852_r() {}p19xg(b852_r, 'laya.wx.mini.MiniImage');var zaeos = b852_r['prototype'];return zaeos['_loadImage'] = function (g149hp) {
      var q$jim3 = this,
          nviml7 = ![];g149hp['indexOf']('layaNativeDir/') == -0x1 && (nviml7 = !![], g149hp = bt['formatURL'](g149hp));if (!s9eaz['getFileInfo'](g149hp)) {
        if (g149hp['indexOf']('http://') != -0x1 || g149hp['indexOf']('https://') != -0x1) s9eaz['downImg'](g149hp, new _8r2b(b852_r, b852_r['onDownImgCallBack'], [g149hp, q$jim3]), g149hp);else b852_r['onCreateImage'](g149hp, q$jim3, !![]);
      } else b852_r['onCreateImage'](g149hp, q$jim3, !nviml7);
    }, b852_r['onDownImgCallBack'] = function (szoeat, kd8ry, fvin) {
      if (!fvin) b852_r['onCreateImage'](szoeat, kd8ry);else kd8ry['onError'](null);
    }, b852_r['onCreateImage'] = function (eztdoa, y8_bk, iv7nlf) {
      iv7nlf === void 0x0 && (iv7nlf = ![]);var dztyok;if (!iv7nlf) {
        var _yrk = s9eaz['getFileInfo'](eztdoa),
            odkzty = _yrk['md5'];dztyok = s9eaz['getFileNativePath'](odkzty);
      } else dztyok = eztdoa;if (y8_bk['imgCache'] == null) y8_bk['imgCache'] = {};var nvlm7i;function texsza() {
        nvlm7i['onload'] = null, nvlm7i['onerror'] = null, delete y8_bk['imgCache'][eztdoa];
      };var fg6hp4 = function () {
        texsza(), y8_bk['onLoaded'](nvlm7i);
      },
          ase1x9 = function () {
        texsza(), y8_bk['event']('error', 'Load image failed');
      };y8_bk['_type'] == 'nativeimage' ? (nvlm7i = new _b5r28['window']['Image'](), nvlm7i['crossOrigin'] = '', nvlm7i['onload'] = fg6hp4, nvlm7i['onerror'] = ase1x9, nvlm7i['src'] = dztyok, y8_bk['imgCache'][eztdoa] = nvlm7i) : new ghp9x1['create'](dztyok, { 'onload': fg6hp4, 'onerror': ase1x9, 'onCreate': function (shp9x1) {
          nvlm7i = shp9x1, y8_bk['imgCache'][eztdoa] = shp9x1;
        } });
    }, b852_r;
  }(),
      g914h = function () {
    function m3j$qi() {}return p19xg(m3j$qi, 'laya.wx.mini.MiniInput'), m3j$qi['_createInputElement'] = function () {
      as1hx['_initInput'](as1hx['area'] = _b5r28['createElement']('textarea')), as1hx['_initInput'](as1hx['input'] = _b5r28['createElement']('input')), as1hx['inputContainer'] = _b5r28['createElement']('div'), as1hx['inputContainer']['style']['position'] = 'absolute', as1hx['inputContainer']['style']['zIndex'] = 0x186a0, _b5r28['container']['appendChild'](as1hx['inputContainer']), as1hx['inputContainer']['setPos'] = function (nilm3, qn7mi3) {
        as1hx['inputContainer']['style']['left'] = nilm3 + 'px', as1hx['inputContainer']['style']['top'] = qn7mi3 + 'px';
      }, odzety['stage']['on']('resize', null, m3j$qi['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (sxatze) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), u5w_02['_soundClass'] = tkdbo, u5w_02['_musicClass'] = tkdbo;
    }, m3j$qi['_onStageResize'] = function () {
      var fvn4l = odzety['stage']['_canvasTransform']['identity']();fvn4l['scale'](_b5r28['width'] / u28r_5['canvas']['width'] / sz9axe['getPixelRatio'](), _b5r28['height'] / u28r_5['canvas']['height'] / sz9axe['getPixelRatio']());
    }, m3j$qi['wxinputFocus'] = function (_852) {
      var w25r_u = as1hx['inputElement']['target'];if (w25r_u && !w25r_u['editable']) return;tzdyok['window']['wx']['offKeyboardConfirm'](), tzdyok['window']['wx']['offKeyboardInput'](), tzdyok['window']['wx']['showKeyboard']({ 'defaultValue': w25r_u['text'], 'maxLength': w25r_u['maxChars'], 'multiple': w25r_u['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (sxa91e) {}, 'fail': function (tdkyzo) {} }), tzdyok['window']['wx']['onKeyboardConfirm'](function (hgf46p) {
        var fghp64 = hgf46p ? hgf46p['value'] : '';w25r_u['text'] = fghp64, w25r_u['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), tzdyok['window']['wx']['onKeyboardInput'](function (zkdty) {
        var p4hg6f = zkdty ? zkdty['value'] : '';if (!w25r_u['multiline']) {
          if (p4hg6f['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }w25r_u['text'] = p4hg6f, w25r_u['event']('input');
      });
    }, m3j$qi['inputEnter'] = function () {
      as1hx['inputElement']['target']['focus'] = ![];
    }, m3j$qi['wxinputblur'] = function () {
      m3j$qi['hideKeyboard']();
    }, m3j$qi['hideKeyboard'] = function () {
      tzdyok['window']['wx']['offKeyboardConfirm'](), tzdyok['window']['wx']['offKeyboardInput'](), tzdyok['window']['wx']['hideKeyboard']({ 'success': function (tbk) {
          console['log']('隐藏键盘');
        }, 'fail': function (r5_2u) {
          console['log']('隐藏键盘出错:' + (r5_2u ? r5_2u['errMsg'] : ''));
        } });
    }, m3j$qi;
  }(),
      esaozt = function () {
    function _wu25r() {}p19xg(_wu25r, 'laya.wx.mini.MiniLoader');var inm3q = _wu25r['prototype'];return inm3q['load'] = function (pf6gh, yeozdt, ruw_25, atso, li37m) {
      ruw_25 === void 0x0 && (ruw_25 = !![]), li37m === void 0x0 && (li37m = ![]);var k8boy = this;k8boy['_url'] = pf6gh;if (pf6gh['indexOf']('data:image') === 0x0) k8boy['_type'] = yeozdt = 'image';else k8boy['_type'] = yeozdt || (yeozdt = k8boy['getTypeFromUrl'](pf6gh));k8boy['_cache'] = ruw_25, k8boy['_data'] = null;var s19x = 'ascii';if (pf6gh['indexOf']('.fnt') != -0x1) s19x = 'utf8';else yeozdt == 'arraybuffer' && (s19x = '');;var rb8dk = gh146p['getFileExtension'](pf6gh);if (_wu25r['_fileTypeArr']['indexOf'](rb8dk) != -0x1) tzdyok['EnvConfig']['load']['call'](this, pf6gh, yeozdt, ruw_25, atso, li37m);else {
        if (!s9eaz['getFileInfo'](pf6gh)) {
          if (pf6gh['indexOf']('layaNativeDir/') != -0x1) {
            if (tzdyok['isZiYu']) {
              var gp46h1 = s9eaz['ziyuFileData'][pf6gh];k8boy['onLoaded'](gp46h1);return;
            } else {
              cosnole['log']('read read'), s9eaz['read'](pf6gh, s19x, new _8r2b(_wu25r, _wu25r['onReadNativeCallBack'], [s19x, pf6gh, yeozdt, ruw_25, atso, li37m, k8boy]));return;
            }
          }if (bt['rootPath'] == '') var v64glf = pf6gh;else v64glf = pf6gh['split'](bt['rootPath'])[0x0];pf6gh['indexOf']('http://') != -0x1 || pf6gh['indexOf']('https://') != -0x1 ? tzdyok['EnvConfig']['load']['call'](k8boy, pf6gh, yeozdt, ruw_25, atso, li37m) : s9eaz['readFile'](v64glf, s19x, new _8r2b(_wu25r, _wu25r['onReadNativeCallBack'], [s19x, pf6gh, yeozdt, ruw_25, atso, li37m, k8boy]), pf6gh);
        } else tzdyok['EnvConfig']['load']['call'](this, pf6gh, yeozdt, ruw_25, atso, li37m);
      }
    }, inm3q['resMgrLoad'] = function (pxg1h9, v7fil, inm3l7, pvg4, f4vlg, gf64l, axse19) {
      inm3l7 === void 0x0 && (inm3l7 = 0x0), pvg4 === void 0x0 && (pvg4 = ![]), f4vlg === void 0x0 && (f4vlg = ![]), gf64l === void 0x0 && (gf64l = 0x0), axse19 === void 0x0 && (axse19 = 0x3), pxg1h9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', pxg1h9), tzdyok['EnvConfig']['resMgrLoad'](pxg1h9, (brd8k, zose, f67vl) => {
        _wu25r['prototype']['resMgrLoadCallBack'](brd8k, zose, f67vl, v7fil);
      }, inm3l7, pvg4, f4vlg, gf64l, axse19);
    }, inm3q['resMgrLoadCallBack'] = function (u05w_, oky8, asxh19, uw02) {
      console['log']('buff:::', u05w_, asxh19, s9eaz['fileNativeDir'] + '///' + s9eaz['fileListName']), uw02(u05w_, oky8, asxh19);
    }, inm3q['clearRes'] = function (eota, gfv46p) {
      gfv46p === void 0x0 && (gfv46p = ![]);var dytk = this;dytk['clearRes'](eota, gfv46p);var toyzk = s9eaz['getFileInfo'](eota);if (toyzk && (eota['indexOf']('http://') != -0x1 || eota['indexOf']('https://') != -0x1)) {
        var obtky = toyzk['md5'],
            r82_b5 = s9eaz['getFileNativePath'](obtky);s9eaz['remove'](r82_b5);
      }
    }, _wu25r['onReadNativeCallBack'] = function (aeztod, odtzyk, zyod, l6f7vn, z9xsea, tadoez, l4fgv, u_58r2, vmnli) {
      l6f7vn === void 0x0 && (l6f7vn = !![]), tadoez === void 0x0 && (tadoez = ![]), u_58r2 === void 0x0 && (u_58r2 = 0x0);if (!u_58r2) {
        var y8_rkb;if (zyod == 'json' || zyod == 'atlas') y8_rkb = tzdyok['getJson'](vmnli['data']);else zyod == 'xml' ? y8_rkb = gh146p['parseXMLFromString'](vmnli['data']) : y8_rkb = vmnli['data'];l4fgv['onLoaded'](y8_rkb), !tzdyok['isZiYu'] && tzdyok['isPosMsgYu'] && zyod != 'arraybuffer' && wx['postMessage']({ 'url': odtzyk, 'data': y8_rkb, 'isLoad': !![] });
      } else u_58r2 == 0x1 && tzdyok['EnvConfig']['load']['call'](l4fgv, odtzyk, zyod, l6f7vn, z9xsea, tadoez);
    }, rb8y(_wu25r, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _wu25r;
  }(),
      s9eaz = function (tzosae) {
    function r8bk5_() {
      r8bk5_['__super']['call'](this);;
    }return p19xg(r8bk5_, 'laya.wx.mini.MiniFileMgr', tzosae), r8bk5_['isLoadFile'] = function (zsea) {
      return r8bk5_['_fileTypeArr']['indexOf'](zsea) != -0x1 ? !![] : ![];
    }, r8bk5_['getFileInfo'] = function (pg6fh) {
      var hxp = pg6fh['split']('?')[0x0],
          kyb8dr = r8bk5_['filesListObj'][hxp];if (kyb8dr == null) return null;else return kyb8dr;return null;
    }, r8bk5_['onFileUpdate'] = function (h9x1gp, r58_kb) {
      var kbr8yd = h9x1gp['split']('/'),
          ni7mq = kbr8yd[kbr8yd['length'] - 0x1],
          otzes = r8bk5_['getFileInfo'](r58_kb);if (otzes == null) r8bk5_['onSaveFile'](r58_kb, ni7mq);else {
        if (otzes['readyUrl'] != r58_kb) r8bk5_['remove'](ni7mq, r58_kb);
      }
    }, r8bk5_['exits'] = function (brdyk, f7lvn6) {
      var k8doby = r8bk5_['getFileNativePath'](brdyk);r8bk5_['fs']['getFileInfo']({ 'filePath': k8doby, 'success': function (dzkoty) {
          f7lvn6 != null && f7lvn6['runWith']([0x0, dzkoty]);
        }, 'fail': function (kdbry8) {
          f7lvn6 != null && f7lvn6['runWith']([0x1, kdbry8]);
        } });
    }, r8bk5_['read'] = function (oesatz, h4pg, i$73m, kbr_5) {
      h4pg === void 0x0 && (h4pg = 'ascill'), kbr_5 === void 0x0 && (kbr_5 = '');var kb5_8;kbr_5 != '' ? kb5_8 = r8bk5_['getFileNativePath'](oesatz) : kb5_8 = oesatz, r8bk5_['fs']['readFile']({ 'filePath': kb5_8, 'encoding': h4pg, 'success': function (ztxesa) {
          i$73m != null && i$73m['runWith']([0x0, ztxesa]);
        }, 'fail': function (p4gf6) {
          if (p4gf6 && kbr_5 != '') r8bk5_['down'](kbr_5, h4pg, i$73m, kbr_5);else i$73m != null && i$73m['runWith']([0x1]);
        } });
    }, r8bk5_['readNativeFile'] = function (ijmq, db8ryk) {
      r8bk5_['fs']['readFile']({ 'filePath': ijmq, 'encoding': '', 'success': function (teyod) {
          db8ryk != null && db8ryk['runWith']([0x0]);
        }, 'fail': function (hxp91g) {
          db8ryk != null && db8ryk['runWith']([0x1]);
        } });
    }, r8bk5_['down'] = function (_5r8u, es19a, inlm3, r58k_) {
      es19a === void 0x0 && (es19a = 'ascill'), r58k_ === void 0x0 && (r58k_ = '');var m3iq7$ = r8bk5_['getFileNativePath'](r58k_),
          sx91ph = r8bk5_['wxdown']({ 'url': _5r8u, 'filePath': m3iq7$, 'success': function (aode) {
          if (aode['statusCode'] === 0xc8) r8bk5_['readFile'](aode['filePath'], es19a, inlm3, r58k_);
        }, 'fail': function (axh91s) {
          inlm3 != null && inlm3['runWith']([0x1, axh91s]);
        } });sx91ph['onProgressUpdate'](function (hp16) {
        inlm3 != null && inlm3['runWith']([0x2, hp16['progress']]);
      });
    }, r8bk5_['readFile'] = function (kotybd, etzdy, tzkyod, xpgh91) {
      etzdy === void 0x0 && (etzdy = 'ascill'), xpgh91 === void 0x0 && (xpgh91 = ''), r8bk5_['fs']['readFile']({ 'filePath': kotybd, 'encoding': etzdy, 'success': function (drk8yb) {
          if (kotybd['indexOf']('http://') != -0x1 || kotybd['indexOf']('https://') != -0x1) r8bk5_['onFileUpdate'](kotybd, xpgh91);tzkyod != null && tzkyod['runWith']([0x0, drk8yb]);
        }, 'fail': function (pg164) {
          if (pg164) tzkyod != null && tzkyod['runWith']([0x1, pg164]);
        } });
    }, r8bk5_['downImg'] = function (li7mvn, phg14, mvlni) {
      mvlni === void 0x0 && (mvlni = '');var tozdey = r8bk5_['wxdown']({ 'url': li7mvn, 'success': function (b25_r) {
          b25_r['statusCode'] === 0xc8 && r8bk5_['copyFile'](b25_r['tempFilePath'], mvlni, phg14);
        }, 'fail': function (i$37) {
          phg14 != null && phg14['runWith']([0x1, i$37]);
        } });
    }, r8bk5_['copyFile'] = function (lm7n3, etyzd, lf7n) {
      var sa19x = lm7n3['split']('/'),
          botkyd = sa19x[sa19x['length'] - 0x1],
          yotbk = etyzd['split']('?')[0x0],
          soeza = r8bk5_['getFileInfo'](etyzd),
          otzdyk = r8bk5_['getFileNativePath'](botkyd);r8bk5_['fs']['copyFile']({ 'srcPath': lm7n3, 'destPath': otzdyk, 'success': function (iqj$3m) {
          if (!soeza) r8bk5_['onSaveFile'](etyzd, botkyd), lf7n != null && lf7n['runWith']([0x0]);else {
            if (soeza['readyUrl'] != etyzd) r8bk5_['remove'](botkyd, etyzd, lf7n);
          }
        }, 'fail': function (nl7if) {
          lf7n != null && lf7n['runWith']([0x1, nl7if]);
        } });
    }, r8bk5_['getFileNativePath'] = function (odteaz) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + odteaz;
    }, r8bk5_['remove'] = function (m$3qij, rbky8d, q3n7mi) {
      rbky8d === void 0x0 && (rbky8d = '');var u258 = r8bk5_['getFileInfo'](rbky8d),
          w5ru_2 = r8bk5_['getFileNativePath'](u258['md5']);odzety['loader']['clearRes'](u258['readyUrl']), r8bk5_['fs']['unlink']({ 'filePath': w5ru_2, 'success': function (kr85_b) {
          if (rbky8d != '') r8bk5_['onSaveFile'](rbky8d, m$3qij);q3n7mi != null && q3n7mi['runWith']([0x0]);
        }, 'fail': function (xsh1p9) {} });
    }, r8bk5_['onSaveFile'] = function (r2w5_u, phx) {
      var h61pg4 = r2w5_u['split']('?')[0x0];r8bk5_['filesListObj'][h61pg4] = { 'md5': phx, 'readyUrl': r2w5_u }, r8bk5_['fs']['writeFile']({ 'filePath': r8bk5_['fileNativeDir'] + '/' + r8bk5_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r8bk5_['filesListObj']), 'success': function (v7l6f) {
          console['log']('写入测试测试成功：', v7l6f);
        }, 'fail': function (dotkz) {
          console['log']('写入测试测试失败：', dotkz);
        } });
    }, r8bk5_['existDir'] = function (fvin7l, $qjim3) {
      r8bk5_['fs']['mkdir']({ 'dirPath': fvin7l, 'success': function (mi7q$) {
          $qjim3 != null && $qjim3['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (k8bryd) {
          if (k8bryd['errMsg']['indexOf']('file already exists') != -0x1) r8bk5_['readSync'](r8bk5_['fileListName'], 'utf8', $qjim3);else $qjim3 != null && $qjim3['runWith']([0x1, k8bryd]);
        } });
    }, r8bk5_['readSync'] = function (xestza, rkdb8y, oetzyd, easxz9) {
      rkdb8y === void 0x0 && (rkdb8y = 'ascill'), easxz9 === void 0x0 && (easxz9 = '');var oy8b = r8bk5_['getFileNativePath'](xestza),
          ph91x;try {
        ph91x = r8bk5_['fs']['readFileSync'](oy8b), oetzyd != null && oetzyd['runWith']([0x0, { 'data': ph91x }]);
      } catch (ahs1) {
        oetzyd != null && oetzyd['runWith']([0x1]);
      }
    }, r8bk5_['readCache'] = function () {}, r8bk5_['writeCache'] = function (esz9) {
      var yzd = readyUrl['split']('?')[0x0];r8bk5_['filesListObj'][yzd] = { 'md5': md5Name, 'readyUrl': readyUrl }, r8bk5_['fs']['writeFile']({ 'filePath': r8bk5_['fileNativeDir'] + '/' + r8bk5_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r8bk5_['filesListObj']), 'success': function (btykd) {}, 'fail': function (krd8b) {} });
    }, r8bk5_['setNativeFileDir'] = function (xstze) {
      r8bk5_['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + xstze;
    }, r8bk5_['filesListObj'] = {}, r8bk5_['fileNativeDir'] = null, r8bk5_['fileListName'] = 'layaairfiles.txt', r8bk5_['ziyuFileData'] = {}, rb8y(r8bk5_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), r8bk5_;
  }(kby8rd),
      tkdbo = function (r52_u8) {
    function f7lvi() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], f7lvi['__super']['call'](this), this['_sound'] = f7lvi['_createSound']();
    }p19xg(f7lvi, 'laya.wx.mini.MiniSound', r52_u8);var _b825 = f7lvi['prototype'];return _b825['load'] = function (li37) {
      var a9hs = this;li37 = bt['formatURL'](li37), this['url'] = li37;if (f7lvi['_audioCache'][li37]) {
        this['event']('complete');return;
      }function vnl6() {
        if (f7lvi['_null'] != undefined) a9hs['_sound']['onCanplay'](f7lvi['_null']), a9hs['_sound']['onError'](f7lvi['_null']);else try {
          a9hs['_sound']['onCanplay'](null), a9hs['_sound']['onError'](null), f7lvi['_null'] = null;
        } catch (zatde) {
          console['warn']('[wxmini] _clearSound:' + zatde), a9hs['_sound']['onCanplay'](hx91sa), a9hs['_sound']['onError'](hx91sa), f7lvi['_null'] = hx91sa;
        }
      }function ifnv() {
        vnl6(), y8b_kr['loaded'] = !![], y8b_kr['event']('complete'), f7lvi['_audioCache'][y8b_kr['url']] = y8b_kr;
      }function u_05w2(i7q$3m) {
        console['error']('errCode=' + i7q$3m['errCode'] + '  errMsg=' + i7q$3m['errMsg']), vnl6(), y8b_kr['event']('error');
      }function hx91sa() {}this['_sound']['onCanplay'](ifnv), this['_sound']['onError'](u_05w2), this['_sound']['src'] = li37;var y8b_kr = this;
    }, _b825['play'] = function (xph9s, zdey) {
      xph9s === void 0x0 && (xph9s = 0x0), zdey === void 0x0 && (zdey = 0x0);var bdr8yk;if (this['url'] == u5w_02['_tMusic']) {
        if (!f7lvi['_musicAudio']) f7lvi['_musicAudio'] = f7lvi['_createSound']();bdr8yk = f7lvi['_musicAudio'];
      } else bdr8yk = f7lvi['_createSound']();bdr8yk['src'] = this['url'];var dyotb = new dzoyte(bdr8yk);return dyotb['url'] = this['url'], dyotb['loops'] = zdey, dyotb['startTime'] = xph9s, dyotb['play'](), u5w_02['addChannel'](dyotb), dyotb;
    }, _b825['dispose'] = function () {
      var zoedty = f7lvi['_audioCache'][this['url']];zoedty && (zoedty['src'] = '', delete f7lvi['_audioCache'][this['url']]);
    }, ok8b(0x0, _b825, 'duration', function () {
      return this['_sound']['duration'];
    }), f7lvi['_createSound'] = function () {
      return f7lvi['_id']++, tzdyok['window']['wx']['createInnerAudioContext']();
    }, f7lvi['_musicAudio'] = null, f7lvi['_id'] = 0x0, f7lvi['_audioCache'] = {}, f7lvi['_null'] = undefined, f7lvi;
  }(kby8rd),
      dzoyte = function (xe91s) {
    function u_58r(ea1sx) {
      this['_audio'] = null, this['_onEnd'] = null, u_58r['__super']['call'](this), this['_audio'] = ea1sx, this['_onEnd'] = gh146p['bind'](this['__onEnd'], this), ea1sx['onEnded'](this['_onEnd']);
    }p19xg(u_58r, 'laya.wx.mini.MiniSoundChannel', xe91s);var g1p4h9 = u_58r['prototype'];return g1p4h9['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (odzety['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, g1p4h9['__onNull'] = function () {}, g1p4h9['play'] = function () {
      this['isStopped'] = ![], u5w_02['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, g1p4h9['stop'] = function () {
      this['isStopped'] = !![], u5w_02['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (u_58r['_null'] != undefined) this['_audio']['onEnded'](u_58r['_null']);else try {
        this['_audio']['onEnded'](null), u_58r['_null'] = null;
      } catch (vfl7ni) {
        console['warn']('[wxmini] stop:' + vfl7ni), this['_audio']['onEnded'](gh146p['bind'](this['__onNull'], this)), u_58r['_null'] = gh146p['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, g1p4h9['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, g1p4h9['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], u5w_02['addChannel'](this), this['_audio']['play']();
    }, ok8b(0x0, g1p4h9, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ok8b(0x0, g1p4h9, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ok8b(0x0, g1p4h9, 'volume', function () {
      return 0x1;
    }, function (rybdk8) {}), u_58r['_null'] = undefined, u_58r;
  }(oy8k);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ztso in Laya) {
    var b_r528 = Laya[ztso];b_r528 && b_r528['__isclass'] && (exports[ztso] = b_r528);
  }
});