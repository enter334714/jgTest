var s = wx.$W;
(function (window, document, wofn) {
  var hput60 = wofn['un'],
      vyra$x = wofn['uns'],
      uhp6t = wofn['static'],
      cg58kb = wofn['class'],
      h46qu = wofn['getset'],
      fezwn = wofn['__newvec'],
      akxyr = laya['utils']['Browser'],
      ms64qo = laya['events']['Event'],
      bgkrdc = laya['events']['EventDispatcher'],
      wsnfoj = laya['resource']['HTMLImage'],
      t8p0hu = laya['utils']['Handler'],
      u8t50h = laya['display']['Input'],
      t4p6hu = laya['net']['Loader'],
      rbkdcg = laya['maths']['Matrix'],
      tc08u5 = laya['renders']['Render'],
      ctg50 = laya['utils']['RunDriver'],
      nwzfej = laya['media']['Sound'],
      mnoswq = laya['media']['SoundChannel'],
      zfe3 = laya['media']['SoundManager'],
      i23z = laya['display']['Stage'],
      grbc = laya['net']['URL'],
      g8kbc = laya['utils']['Utils'],
      dykbrx = function () {
    function wonfj() {}return cg58kb(wonfj, 'laya.wx.mini.MiniAdpter'), wonfj['getJson'] = function (p60h) {
      return JSON['parse'](p60h);
    }, wonfj['init'] = function (bg08c, xydark) {
      bg08c === void 0x0 && (bg08c = ![]), xydark === void 0x0 && (xydark = ![]);if (wonfj['_inited']) return;wonfj['window'] = window;if (wonfj['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;wonfj['_inited'] = !![], wonfj['isZiYu'] = xydark, wonfj['isPosMsgYu'] = bg08c, wonfj['EnvConfig'] = {}, !wonfj['isZiYu'] && (dxgkbr['setNativeFileDir']('/layaairGame'), dxgkbr['existDir'](dxgkbr['fileNativeDir'], t8p0hu['create'](wonfj, wonfj['onMkdirCallBack']))), wonfj['window']['focus'] = function () {}, wofn['getUrlPath'] = function () {}, wonfj['window']['logtime'] = function (kdb5cg) {}, wonfj['window']['alertTimeLog'] = function (up46qh) {}, wonfj['window']['resetShareInfo'] = function () {}, wonfj['window']['CanvasRenderingContext2D'] = function () {}, wonfj['window']['CanvasRenderingContext2D']['prototype'] = wonfj['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], wonfj['window']['document']['body']['appendChild'] = function () {}, wonfj['EnvConfig']['pixelRatioInt'] = 0x0, ctg50['getPixelRatio'] = wonfj['pixelRatio'], wonfj['_preCreateElement'] = akxyr['createElement'], akxyr['createElement'] = wonfj['createElement'], ctg50['createShaderCondition'] = wonfj['createShaderCondition'], g8kbc['parseXMLFromString'] = wonfj['parseXMLFromString'], u8t50h['_createInputElement'] = neoj['_createInputElement'], wonfj['EnvConfig']['load'] = t4p6hu['prototype']['load'], t4p6hu['prototype']['load'] = efnzj['prototype']['load'], wonfj['isZiYu'] && bg08c && wx['onMessage'](function (jwsmno) {
        jwsmno['isLoad'] && (dxgkbr['ziyuFileData'][jwsmno['url']] = jwsmno['data']);
      });
    }, wonfj['onMkdirCallBack'] = function (nsoj, $ay9vl) {
      if (!nsoj) dxgkbr['filesListObj'] = JSON['parse']($ay9vl['data']);
    }, wonfj['pixelRatio'] = function () {
      if (!wonfj['EnvConfig']['pixelRatioInt']) try {
        var jswmn = wx['getSystemInfoSync']();return wonfj['EnvConfig']['pixelRatioInt'] = jswmn['pixelRatio'], jswmn = jswmn, jswmn['pixelRatio'];
      } catch (h4uqp) {}return wonfj['EnvConfig']['pixelRatioInt'];
    }, wonfj['createElement'] = function (xbryk) {
      if (xbryk == 'canvas') {
        var wfnz;return wonfj['idx'] == 0x1 ? wonfj['isZiYu'] ? (wfnz = sharedCanvas, wfnz['style'] = {}) : wfnz = window['canvas'] : wfnz = window['wx']['createCanvas'](), wonfj['idx']++, wfnz;
      } else {
        if (xbryk == 'textarea' || xbryk == 'input') return wonfj['onCreateInput'](xbryk);else {
          if (xbryk == 'div') {
            var enfojw = wonfj['_preCreateElement'](xbryk);return enfojw['contains'] = function (pq6s) {
              return null;
            }, enfojw['removeChild'] = function (ax$ryv) {}, enfojw;
          } else return wonfj['_preCreateElement'](xbryk);
        }
      }
    }, wonfj['onCreateInput'] = function (nfeoj) {
      var cu50t = wonfj['_preCreateElement'](nfeoj);return cu50t['focus'] = neoj['wxinputFocus'], cu50t['blur'] = neoj['wxinputblur'], cu50t['style'] = {}, cu50t['value'] = 0x0, cu50t['parentElement'] = {}, cu50t['placeholder'] = {}, cu50t['type'] = {}, cu50t['setColor'] = function (qmnow) {}, cu50t['setType'] = function (ojfnew) {}, cu50t['setFontFace'] = function (so4mq6) {}, cu50t['addEventListener'] = function (tc8g5) {}, cu50t['contains'] = function (hpqm) {
        return null;
      }, cu50t['removeChild'] = function (hut0p) {}, cu50t;
    }, wonfj['createShaderCondition'] = function (xdyakr) {
      var a_l$9 = this,
          s4moq = function () {
        var mwsnoj = xdyakr;return a_l$9[xdyakr['replace']('this.', '')];
      };return s4moq;
    }, wonfj['EnvConfig'] = null, wonfj['window'] = null, wonfj['_preCreateElement'] = null, wonfj['_inited'] = ![], wonfj['wxRequest'] = null, wonfj['systemInfo'] = null, wonfj['version'] = '0.0.1', wonfj['isZiYu'] = ![], wonfj['isPosMsgYu'] = ![], wonfj['parseXMLFromString'] = function (s6qom4) {
      var c05b8, uc80;s6qom4 = s6qom4['replace'](/>\s+</g, '><');try {
        c05b8 = new window['Parser']['DOMParser']()['parseFromString'](s6qom4, 'text/xml');
      } catch (g508) {
        throw '需要引入xml解析库文件';
      }return c05b8;
    }, wonfj['idx'] = 0x1, wonfj;
  }(),
      rdgxbk = function () {
    function bk8() {}cg58kb(bk8, 'laya.wx.mini.MiniImage');var rkcdbg = bk8['prototype'];return rkcdbg['_loadImage'] = function (p08thu) {
      var dbgck5 = this,
          $axdr = ![];p08thu['indexOf']('layaNativeDir/') == -0x1 && ($axdr = !![], p08thu = grbc['formatURL'](p08thu));if (!dxgkbr['getFileInfo'](p08thu)) {
        if (p08thu['indexOf']('http://') != -0x1 || p08thu['indexOf']('https://') != -0x1) dxgkbr['downImg'](p08thu, new t8p0hu(bk8, bk8['onDownImgCallBack'], [p08thu, dbgck5]), p08thu);else bk8['onCreateImage'](p08thu, dbgck5, !![]);
      } else bk8['onCreateImage'](p08thu, dbgck5, !$axdr);
    }, bk8['onDownImgCallBack'] = function (bkrgd, ry$da, w1ezjf) {
      if (!w1ezjf) bk8['onCreateImage'](bkrgd, ry$da);else ry$da['onError'](null);
    }, bk8['onCreateImage'] = function (njwez, njfows, $vl) {
      $vl === void 0x0 && ($vl = ![]);var dkary;if (!$vl) {
        var tup60h = dxgkbr['getFileInfo'](njwez),
            a$vy9l = tup60h['md5'];dkary = dxgkbr['getFileNativePath'](a$vy9l);
      } else dkary = njwez;if (njfows['imgCache'] == null) njfows['imgCache'] = {};var ayl9;function u8h0pt() {
        ayl9['onload'] = null, ayl9['onerror'] = null, delete njfows['imgCache'][njwez];
      };var yxrbkd = function () {
        u8h0pt(), njfows['onLoaded'](ayl9);
      },
          efz1w = function () {
        u8h0pt(), njfows['event']('error', 'Load image failed');
      };njfows['_type'] == 'nativeimage' ? (ayl9 = new akxyr['window']['Image'](), ayl9['crossOrigin'] = '', ayl9['onload'] = yxrbkd, ayl9['onerror'] = efz1w, ayl9['src'] = dkary, njfows['imgCache'][njwez] = ayl9) : new wsnfoj['create'](dkary, { 'onload': yxrbkd, 'onerror': efz1w, 'onCreate': function (a$x9v) {
          ayl9 = a$x9v, njfows['imgCache'][njwez] = a$x9v;
        } });
    }, bk8;
  }(),
      neoj = function () {
    function y9av$() {}return cg58kb(y9av$, 'laya.wx.mini.MiniInput'), y9av$['_createInputElement'] = function () {
      u8t50h['_initInput'](u8t50h['area'] = akxyr['createElement']('textarea')), u8t50h['_initInput'](u8t50h['input'] = akxyr['createElement']('input')), u8t50h['inputContainer'] = akxyr['createElement']('div'), u8t50h['inputContainer']['style']['position'] = 'absolute', u8t50h['inputContainer']['style']['zIndex'] = 0x186a0, akxyr['container']['appendChild'](u8t50h['inputContainer']), u8t50h['inputContainer']['setPos'] = function (c085bg, xkrdyb) {
        u8t50h['inputContainer']['style']['left'] = c085bg + 'px', u8t50h['inputContainer']['style']['top'] = xkrdyb + 'px';
      }, wofn['stage']['on']('resize', null, y9av$['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (k8gc5b) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), zfe3['_soundClass'] = smonq4, zfe3['_musicClass'] = smonq4;
    }, y9av$['_onStageResize'] = function () {
      var jofw = wofn['stage']['_canvasTransform']['identity']();jofw['scale'](akxyr['width'] / tc08u5['canvas']['width'] / ctg50['getPixelRatio'](), akxyr['height'] / tc08u5['canvas']['height'] / ctg50['getPixelRatio']());
    }, y9av$['wxinputFocus'] = function (cg8b5k) {
      var zewnj = u8t50h['inputElement']['target'];if (zewnj && !zewnj['editable']) return;dykbrx['window']['wx']['offKeyboardConfirm'](), dykbrx['window']['wx']['offKeyboardInput'](), dykbrx['window']['wx']['showKeyboard']({ 'defaultValue': zewnj['text'], 'maxLength': zewnj['maxChars'], 'multiple': zewnj['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (nswjom) {}, 'fail': function (swnjf) {} }), dykbrx['window']['wx']['onKeyboardConfirm'](function (x$ard) {
        var g5dbc = x$ard ? x$ard['value'] : '';zewnj['text'] = g5dbc, zewnj['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), dykbrx['window']['wx']['onKeyboardInput'](function (c80gt5) {
        var e213fz = c80gt5 ? c80gt5['value'] : '';if (!zewnj['multiline']) {
          if (e213fz['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }zewnj['text'] = e213fz, zewnj['event']('input');
      });
    }, y9av$['inputEnter'] = function () {
      u8t50h['inputElement']['target']['focus'] = ![];
    }, y9av$['wxinputblur'] = function () {
      y9av$['hideKeyboard']();
    }, y9av$['hideKeyboard'] = function () {
      dykbrx['window']['wx']['offKeyboardConfirm'](), dykbrx['window']['wx']['offKeyboardInput'](), dykbrx['window']['wx']['hideKeyboard']({ 'success': function (ybdr) {
          console['log']('隐藏键盘');
        }, 'fail': function (h6pq) {
          console['log']('隐藏键盘出错:' + (h6pq ? h6pq['errMsg'] : ''));
        } });
    }, y9av$;
  }(),
      efnzj = function () {
    function mnwj() {}cg58kb(mnwj, 'laya.wx.mini.MiniLoader');var wonefj = mnwj['prototype'];return wonefj['load'] = function (xdray$, ck58gb, o6s, tpu08, h8u50) {
      o6s === void 0x0 && (o6s = !![]), h8u50 === void 0x0 && (h8u50 = ![]);var wmnoq = this;wmnoq['_url'] = xdray$;if (xdray$['indexOf']('data:image') === 0x0) wmnoq['_type'] = ck58gb = 'image';else wmnoq['_type'] = ck58gb || (ck58gb = wmnoq['getTypeFromUrl'](xdray$));wmnoq['_cache'] = o6s, wmnoq['_data'] = null;var tph6u0 = 'ascii';if (xdray$['indexOf']('.fnt') != -0x1) tph6u0 = 'utf8';else ck58gb == 'arraybuffer' && (tph6u0 = '');;var rx$yad = g8kbc['getFileExtension'](xdray$);if (mnwj['_fileTypeArr']['indexOf'](rx$yad) != -0x1) dykbrx['EnvConfig']['load']['call'](this, xdray$, ck58gb, o6s, tpu08, h8u50);else {
        if (!dxgkbr['getFileInfo'](xdray$)) {
          if (xdray$['indexOf']('layaNativeDir/') != -0x1) {
            if (dykbrx['isZiYu']) {
              var z3i71 = dxgkbr['ziyuFileData'][xdray$];wmnoq['onLoaded'](z3i71);return;
            } else {
              cosnole['log']('read read'), dxgkbr['read'](xdray$, tph6u0, new t8p0hu(mnwj, mnwj['onReadNativeCallBack'], [tph6u0, xdray$, ck58gb, o6s, tpu08, h8u50, wmnoq]));return;
            }
          }if (grbc['rootPath'] == '') var ofnwej = xdray$;else ofnwej = xdray$['split'](grbc['rootPath'])[0x0];xdray$['indexOf']('http://') != -0x1 || xdray$['indexOf']('https://') != -0x1 ? dykbrx['EnvConfig']['load']['call'](wmnoq, xdray$, ck58gb, o6s, tpu08, h8u50) : dxgkbr['readFile'](ofnwej, tph6u0, new t8p0hu(mnwj, mnwj['onReadNativeCallBack'], [tph6u0, xdray$, ck58gb, o6s, tpu08, h8u50, wmnoq]), xdray$);
        } else dykbrx['EnvConfig']['load']['call'](this, xdray$, ck58gb, o6s, tpu08, h8u50);
      }
    }, wonefj['resMgrLoad'] = function (oefjnw, xavry$, ybrdkx, fe1w, pu46t, $ydxr, put80) {
      ybrdkx === void 0x0 && (ybrdkx = 0x0), fe1w === void 0x0 && (fe1w = ![]), pu46t === void 0x0 && (pu46t = ![]), $ydxr === void 0x0 && ($ydxr = 0x0), put80 === void 0x0 && (put80 = 0x3), oefjnw['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', oefjnw), dykbrx['EnvConfig']['resMgrLoad'](oefjnw, (z172e3, krdgbx, u0t6) => {
        mnwj['prototype']['resMgrLoadCallBack'](z172e3, krdgbx, u0t6, xavry$);
      }, ybrdkx, fe1w, pu46t, $ydxr, put80);
    }, wonefj['resMgrLoadCallBack'] = function (fw1jz, yrbk, soqn4, arxyv$) {
      console['log']('buff:::', fw1jz, soqn4, dxgkbr['fileNativeDir'] + '///' + dxgkbr['fileListName']), arxyv$(fw1jz, yrbk, soqn4);
    }, wonefj['clearRes'] = function (f3e12z, u0pth) {
      u0pth === void 0x0 && (u0pth = ![]);var nsoq4m = this;nsoq4m['clearRes'](f3e12z, u0pth);var y$xa9v = dxgkbr['getFileInfo'](f3e12z);if (y$xa9v && (f3e12z['indexOf']('http://') != -0x1 || f3e12z['indexOf']('https://') != -0x1)) {
        var $vayrx = y$xa9v['md5'],
            xyv9$a = dxgkbr['getFileNativePath']($vayrx);dxgkbr['remove'](xyv9$a);
      }
    }, mnwj['onReadNativeCallBack'] = function (hp4t6, zfjn, mq46, nmows, axv9, tpu08h, w1ezj, k5c8, mqh64p) {
      nmows === void 0x0 && (nmows = !![]), tpu08h === void 0x0 && (tpu08h = ![]), k5c8 === void 0x0 && (k5c8 = 0x0);if (!k5c8) {
        var qom46s;if (mq46 == 'json' || mq46 == 'atlas') qom46s = dykbrx['getJson'](mqh64p['data']);else mq46 == 'xml' ? qom46s = g8kbc['parseXMLFromString'](mqh64p['data']) : qom46s = mqh64p['data'];w1ezj['onLoaded'](qom46s), !dykbrx['isZiYu'] && dykbrx['isPosMsgYu'] && mq46 != 'arraybuffer' && wx['postMessage']({ 'url': zfjn, 'data': qom46s, 'isLoad': !![] });
      } else k5c8 == 0x1 && dykbrx['EnvConfig']['load']['call'](w1ezj, zfjn, mq46, nmows, axv9, tpu08h);
    }, uhp6t(mnwj, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), mnwj;
  }(),
      dxgkbr = function (g8t50c) {
    function kdcb() {
      kdcb['__super']['call'](this);;
    }return cg58kb(kdcb, 'laya.wx.mini.MiniFileMgr', g8t50c), kdcb['isLoadFile'] = function (a$xryd) {
      return kdcb['_fileTypeArr']['indexOf'](a$xryd) != -0x1 ? !![] : ![];
    }, kdcb['getFileInfo'] = function (jenowf) {
      var zenjf = jenowf['split']('?')[0x0],
          z7i1 = kdcb['filesListObj'][zenjf];if (z7i1 == null) return null;else return z7i1;return null;
    }, kdcb['onFileUpdate'] = function (qo4s, ef231z) {
      var h08u5t = qo4s['split']('/'),
          yl9v$a = h08u5t[h08u5t['length'] - 0x1],
          ejnzw = kdcb['getFileInfo'](ef231z);if (ejnzw == null) kdcb['onSaveFile'](ef231z, yl9v$a);else {
        if (ejnzw['readyUrl'] != ef231z) kdcb['remove'](yl9v$a, ef231z);
      }
    }, kdcb['exits'] = function (ezf31j, upt0h6) {
      var a9 = kdcb['getFileNativePath'](ezf31j);kdcb['fs']['getFileInfo']({ 'filePath': a9, 'success': function (xa$d) {
          upt0h6 != null && upt0h6['runWith']([0x0, xa$d]);
        }, 'fail': function (ph8u0) {
          upt0h6 != null && upt0h6['runWith']([0x1, ph8u0]);
        } });
    }, kdcb['read'] = function (qm4s6o, uth4, grdx, oq64ms) {
      uth4 === void 0x0 && (uth4 = 'ascill'), oq64ms === void 0x0 && (oq64ms = '');var xrgkbd;oq64ms != '' ? xrgkbd = kdcb['getFileNativePath'](qm4s6o) : xrgkbd = qm4s6o, kdcb['fs']['readFile']({ 'filePath': xrgkbd, 'encoding': uth4, 'success': function (pt4h6u) {
          grdx != null && grdx['runWith']([0x0, pt4h6u]);
        }, 'fail': function (kd5cbg) {
          if (kd5cbg && oq64ms != '') kdcb['down'](oq64ms, uth4, grdx, oq64ms);else grdx != null && grdx['runWith']([0x1]);
        } });
    }, kdcb['readNativeFile'] = function ($v9la, tc50g) {
      kdcb['fs']['readFile']({ 'filePath': $v9la, 'encoding': '', 'success': function (up4th) {
          tc50g != null && tc50g['runWith']([0x0]);
        }, 'fail': function (k5gcbd) {
          tc50g != null && tc50g['runWith']([0x1]);
        } });
    }, kdcb['down'] = function (sqnmw, drxkgb, ravxy, rdckg) {
      drxkgb === void 0x0 && (drxkgb = 'ascill'), rdckg === void 0x0 && (rdckg = '');var t8g5c0 = kdcb['getFileNativePath'](rdckg),
          nezfjw = kdcb['wxdown']({ 'url': sqnmw, 'filePath': t8g5c0, 'success': function (ya$xv) {
          if (ya$xv['statusCode'] === 0xc8) kdcb['readFile'](ya$xv['filePath'], drxkgb, ravxy, rdckg);
        }, 'fail': function (bdrgc) {
          ravxy != null && ravxy['runWith']([0x1, bdrgc]);
        } });nezfjw['onProgressUpdate'](function (thu850) {
        ravxy != null && ravxy['runWith']([0x2, thu850['progress']]);
      });
    }, kdcb['readFile'] = function (a$ryxd, sjnof, zjefnw, $9avxy) {
      sjnof === void 0x0 && (sjnof = 'ascill'), $9avxy === void 0x0 && ($9avxy = ''), kdcb['fs']['readFile']({ 'filePath': a$ryxd, 'encoding': sjnof, 'success': function (qwnosm) {
          if (a$ryxd['indexOf']('http://') != -0x1 || a$ryxd['indexOf']('https://') != -0x1) kdcb['onFileUpdate'](a$ryxd, $9avxy);zjefnw != null && zjefnw['runWith']([0x0, qwnosm]);
        }, 'fail': function (kgb58c) {
          if (kgb58c) zjefnw != null && zjefnw['runWith']([0x1, kgb58c]);
        } });
    }, kdcb['downImg'] = function (drbkc, i712z, y$va9) {
      y$va9 === void 0x0 && (y$va9 = '');var xbkrdy = kdcb['wxdown']({ 'url': drbkc, 'success': function ($9l_v) {
          $9l_v['statusCode'] === 0xc8 && kdcb['copyFile']($9l_v['tempFilePath'], y$va9, i712z);
        }, 'fail': function (c8t0u5) {
          i712z != null && i712z['runWith']([0x1, c8t0u5]);
        } });
    }, kdcb['copyFile'] = function (f13zj, mp4s6, z37i1) {
      var owjmn = f13zj['split']('/'),
          hu8pt0 = owjmn[owjmn['length'] - 0x1],
          gdkxb = mp4s6['split']('?')[0x0],
          dray$ = kdcb['getFileInfo'](mp4s6),
          osnw = kdcb['getFileNativePath'](hu8pt0);kdcb['fs']['copyFile']({ 'srcPath': f13zj, 'destPath': osnw, 'success': function (om4qs6) {
          if (!dray$) kdcb['onSaveFile'](mp4s6, hu8pt0), z37i1 != null && z37i1['runWith']([0x0]);else {
            if (dray$['readyUrl'] != mp4s6) kdcb['remove'](hu8pt0, mp4s6, z37i1);
          }
        }, 'fail': function (t4ph6u) {
          z37i1 != null && z37i1['runWith']([0x1, t4ph6u]);
        } });
    }, kdcb['getFileNativePath'] = function (xrd) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xrd;
    }, kdcb['remove'] = function (la$9, fzj1e3, qms46p) {
      fzj1e3 === void 0x0 && (fzj1e3 = '');var h85t = kdcb['getFileInfo'](fzj1e3),
          kbyxrd = kdcb['getFileNativePath'](h85t['md5']);wofn['loader']['clearRes'](h85t['readyUrl']), kdcb['fs']['unlink']({ 'filePath': kbyxrd, 'success': function (jzwf1) {
          if (fzj1e3 != '') kdcb['onSaveFile'](fzj1e3, la$9);qms46p != null && qms46p['runWith']([0x0]);
        }, 'fail': function (dcrkgb) {} });
    }, kdcb['onSaveFile'] = function (s4qnm, gkrcb) {
      var xavy9 = s4qnm['split']('?')[0x0];kdcb['filesListObj'][xavy9] = { 'md5': gkrcb, 'readyUrl': s4qnm }, kdcb['fs']['writeFile']({ 'filePath': kdcb['fileNativeDir'] + '/' + kdcb['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kdcb['filesListObj']), 'success': function (mspq64) {
          console['log']('写入测试测试成功：', mspq64);
        }, 'fail': function (ckd5gb) {
          console['log']('写入测试测试失败：', ckd5gb);
        } });
    }, kdcb['existDir'] = function (tc805g, xd$ary) {
      kdcb['fs']['mkdir']({ 'dirPath': tc805g, 'success': function (uh6pq) {
          xd$ary != null && xd$ary['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (c058b) {
          if (c058b['errMsg']['indexOf']('file already exists') != -0x1) kdcb['readSync'](kdcb['fileListName'], 'utf8', xd$ary);else xd$ary != null && xd$ary['runWith']([0x1, c058b]);
        } });
    }, kdcb['readSync'] = function (nmswq, zf1ej3, kgrdbc, ya9$xv) {
      zf1ej3 === void 0x0 && (zf1ej3 = 'ascill'), ya9$xv === void 0x0 && (ya9$xv = '');var fsjonw = kdcb['getFileNativePath'](nmswq),
          k58cbg;try {
        k58cbg = kdcb['fs']['readFileSync'](fsjonw), kgrdbc != null && kgrdbc['runWith']([0x0, { 'data': k58cbg }]);
      } catch ($9lv) {
        kgrdbc != null && kgrdbc['runWith']([0x1]);
      }
    }, kdcb['readCache'] = function () {}, kdcb['writeCache'] = function (qns4mo) {
      var jwze = readyUrl['split']('?')[0x0];kdcb['filesListObj'][jwze] = { 'md5': md5Name, 'readyUrl': readyUrl }, kdcb['fs']['writeFile']({ 'filePath': kdcb['fileNativeDir'] + '/' + kdcb['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kdcb['filesListObj']), 'success': function (bk5d) {}, 'fail': function (jonef) {} });
    }, kdcb['setNativeFileDir'] = function (s6mpq) {
      kdcb['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + s6mpq;
    }, kdcb['filesListObj'] = {}, kdcb['fileNativeDir'] = null, kdcb['fileListName'] = 'layaairfiles.txt', kdcb['ziyuFileData'] = {}, uhp6t(kdcb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), kdcb;
  }(bgkrdc),
      smonq4 = function (d$yxar) {
    function grcbk() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], grcbk['__super']['call'](this), this['_sound'] = grcbk['_createSound']();
    }cg58kb(grcbk, 'laya.wx.mini.MiniSound', d$yxar);var enjwo = grcbk['prototype'];return enjwo['load'] = function (nwjze) {
      var rdckbg = this;nwjze = grbc['formatURL'](nwjze), this['url'] = nwjze;if (grcbk['_audioCache'][nwjze]) {
        this['event']('complete');return;
      }function kayrdx() {
        if (grcbk['_null'] != undefined) rdckbg['_sound']['onCanplay'](grcbk['_null']), rdckbg['_sound']['onError'](grcbk['_null']);else try {
          rdckbg['_sound']['onCanplay'](null), rdckbg['_sound']['onError'](null), grcbk['_null'] = null;
        } catch ($arxdy) {
          console['warn']('[wxmini] _clearSound:' + $arxdy), rdckbg['_sound']['onCanplay'](f123e), rdckbg['_sound']['onError'](f123e), grcbk['_null'] = f123e;
        }
      }function hp8u0t() {
        kayrdx(), qhup4['loaded'] = !![], qhup4['event']('complete'), grcbk['_audioCache'][qhup4['url']] = qhup4;
      }function wnfjze(z1ej3f) {
        console['error']('errCode=' + z1ej3f['errCode'] + '  errMsg=' + z1ej3f['errMsg']), kayrdx(), qhup4['event']('error');
      }function f123e() {}this['_sound']['onCanplay'](hp8u0t), this['_sound']['onError'](wnfjze), this['_sound']['src'] = nwjze;var qhup4 = this;
    }, enjwo['play'] = function (zefj1, c80) {
      zefj1 === void 0x0 && (zefj1 = 0x0), c80 === void 0x0 && (c80 = 0x0);var wonjm;if (this['url'] == zfe3['_tMusic']) {
        if (!grcbk['_musicAudio']) grcbk['_musicAudio'] = grcbk['_createSound']();wonjm = grcbk['_musicAudio'];
      } else wonjm = grcbk['_createSound']();wonjm['src'] = this['url'];var xrbydk = new b5k8gc(wonjm);return xrbydk['url'] = this['url'], xrbydk['loops'] = c80, xrbydk['startTime'] = zefj1, xrbydk['play'](), zfe3['addChannel'](xrbydk), xrbydk;
    }, enjwo['dispose'] = function () {
      var y$xv = grcbk['_audioCache'][this['url']];y$xv && (y$xv['src'] = '', delete grcbk['_audioCache'][this['url']]);
    }, h46qu(0x0, enjwo, 'duration', function () {
      return this['_sound']['duration'];
    }), grcbk['_createSound'] = function () {
      return grcbk['_id']++, dykbrx['window']['wx']['createInnerAudioContext']();
    }, grcbk['_musicAudio'] = null, grcbk['_id'] = 0x0, grcbk['_audioCache'] = {}, grcbk['_null'] = undefined, grcbk;
  }(bgkrdc),
      b5k8gc = function (sfwnoj) {
    function kdcgb(av_9$l) {
      this['_audio'] = null, this['_onEnd'] = null, kdcgb['__super']['call'](this), this['_audio'] = av_9$l, this['_onEnd'] = g8kbc['bind'](this['__onEnd'], this), av_9$l['onEnded'](this['_onEnd']);
    }cg58kb(kdcgb, 'laya.wx.mini.MiniSoundChannel', sfwnoj);var b0c = kdcgb['prototype'];return b0c['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (wofn['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, b0c['__onNull'] = function () {}, b0c['play'] = function () {
      this['isStopped'] = ![], zfe3['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, b0c['stop'] = function () {
      this['isStopped'] = !![], zfe3['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (kdcgb['_null'] != undefined) this['_audio']['onEnded'](kdcgb['_null']);else try {
        this['_audio']['onEnded'](null), kdcgb['_null'] = null;
      } catch (dxrbkg) {
        console['warn']('[wxmini] stop:' + dxrbkg), this['_audio']['onEnded'](g8kbc['bind'](this['__onNull'], this)), kdcgb['_null'] = g8kbc['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, b0c['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, b0c['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], zfe3['addChannel'](this), this['_audio']['play']();
    }, h46qu(0x0, b0c, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), h46qu(0x0, b0c, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), h46qu(0x0, b0c, 'volume', function () {
      return 0x1;
    }, function ($yxav9) {}), kdcgb['_null'] = undefined, kdcgb;
  }(mnoswq);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var a9v_ in Laya) {
    var gckb5d = Laya[a9v_];gckb5d && gckb5d['__isclass'] && (exports[a9v_] = gckb5d);
  }
});