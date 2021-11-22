var K = wx.$S;
(function (window, document, _cwi09) {
  var eo3urv = _cwi09['un'],
      w_ck0 = _cwi09['uns'],
      a$5hyd = _cwi09['static'],
      ysa5dh = _cwi09['class'],
      dyh5ps = _cwi09['getset'],
      bl816f = _cwi09['__newvec'],
      w9kvoz = laya['utils']['Browser'],
      xm2ci = laya['events']['Event'],
      c0kw = laya['events']['EventDispatcher'],
      v3zor = laya['resource']['HTMLImage'],
      t2ixmn = laya['utils']['Handler'],
      qysjgp = laya['display']['Input'],
      pj1gq8 = laya['net']['Loader'],
      e4$dau = laya['maths']['Matrix'],
      j8qbg = laya['renders']['Render'],
      gpsjq = laya['utils']['RunDriver'],
      okzv39 = laya['media']['Sound'],
      k_9c0w = laya['media']['SoundChannel'],
      eruo34 = laya['media']['SoundManager'],
      nxtim2 = laya['display']['Stage'],
      j618lb = laya['net']['URL'],
      vokw9z = laya['utils']['Utils'],
      wk9 = function () {
    function bqj() {}return ysa5dh(bqj, 'laya.wx.mini.MiniAdpter'), bqj['getJson'] = function (kzv3ro) {
      return JSON['parse'](kzv3ro);
    }, bqj['init'] = function (sgqpy, vr3zuo) {
      sgqpy === void 0x0 && (sgqpy = ![]), vr3zuo === void 0x0 && (vr3zuo = ![]);if (bqj['_inited']) return;bqj['window'] = window;if (bqj['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;bqj['_inited'] = !![], bqj['isZiYu'] = vr3zuo, bqj['isPosMsgYu'] = sgqpy, bqj['EnvConfig'] = {}, !bqj['isZiYu'] && (xi_2c['setNativeFileDir']('/layaairGame'), xi_2c['existDir'](xi_2c['fileNativeDir'], t2ixmn['create'](bqj, bqj['onMkdirCallBack']))), bqj['window']['focus'] = function () {}, _cwi09['getUrlPath'] = function () {}, bqj['window']['logtime'] = function (u$4ra) {}, bqj['window']['alertTimeLog'] = function (yhsda) {}, bqj['window']['resetShareInfo'] = function () {}, bqj['window']['CanvasRenderingContext2D'] = function () {}, bqj['window']['CanvasRenderingContext2D']['prototype'] = bqj['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], bqj['window']['document']['body']['appendChild'] = function () {}, bqj['EnvConfig']['pixelRatioInt'] = 0x0, gpsjq['getPixelRatio'] = bqj['pixelRatio'], bqj['_preCreateElement'] = w9kvoz['createElement'], w9kvoz['createElement'] = bqj['createElement'], gpsjq['createShaderCondition'] = bqj['createShaderCondition'], vokw9z['parseXMLFromString'] = bqj['parseXMLFromString'], qysjgp['_createInputElement'] = syqgjp['_createInputElement'], bqj['EnvConfig']['load'] = pj1gq8['prototype']['load'], pj1gq8['prototype']['load'] = e4ua$r['prototype']['load'], bqj['isZiYu'] && sgqpy && wx['onMessage'](function (_2c) {
        _2c['isLoad'] && (xi_2c['ziyuFileData'][_2c['url']] = _2c['data']);
      });
    }, bqj['onMkdirCallBack'] = function (sph5y, gj) {
      if (!sph5y) xi_2c['filesListObj'] = JSON['parse'](gj['data']);
    }, bqj['pixelRatio'] = function () {
      if (!bqj['EnvConfig']['pixelRatioInt']) try {
        var wvk9 = wx['getSystemInfoSync']();return bqj['EnvConfig']['pixelRatioInt'] = wvk9['pixelRatio'], wvk9 = wvk9, wvk9['pixelRatio'];
      } catch (zkrov3) {}return bqj['EnvConfig']['pixelRatioInt'];
    }, bqj['createElement'] = function (xtmn) {
      if (xtmn == 'canvas') {
        var oz9wv;return bqj['idx'] == 0x1 ? bqj['isZiYu'] ? (oz9wv = sharedCanvas, oz9wv['style'] = {}) : oz9wv = window['canvas'] : oz9wv = window['wx']['createCanvas'](), bqj['idx']++, oz9wv;
      } else {
        if (xtmn == 'textarea' || xtmn == 'input') return bqj['onCreateInput'](xtmn);else {
          if (xtmn == 'div') {
            var jq8p = bqj['_preCreateElement'](xtmn);return jq8p['contains'] = function (p8gq) {
              return null;
            }, jq8p['removeChild'] = function (i_2m) {}, jq8p;
          } else return bqj['_preCreateElement'](xtmn);
        }
      }
    }, bqj['onCreateInput'] = function (kw9ozv) {
      var ouer = bqj['_preCreateElement'](kw9ozv);return ouer['focus'] = syqgjp['wxinputFocus'], ouer['blur'] = syqgjp['wxinputblur'], ouer['style'] = {}, ouer['value'] = 0x0, ouer['parentElement'] = {}, ouer['placeholder'] = {}, ouer['type'] = {}, ouer['setColor'] = function (asy5h) {}, ouer['setType'] = function (gb68j1) {}, ouer['setFontFace'] = function (yqhpsg) {}, ouer['addEventListener'] = function (ko3v9z) {}, ouer['contains'] = function (z0v) {
        return null;
      }, ouer['removeChild'] = function (duea) {}, ouer;
    }, bqj['createShaderCondition'] = function (zw09v) {
      var vz9kw = this,
          pgqs = function () {
        var gp1sjq = zw09v;return vz9kw[zw09v['replace']('this.', '')];
      };return pgqs;
    }, bqj['EnvConfig'] = null, bqj['window'] = null, bqj['_preCreateElement'] = null, bqj['_inited'] = ![], bqj['wxRequest'] = null, bqj['systemInfo'] = null, bqj['version'] = '0.0.1', bqj['isZiYu'] = ![], bqj['isPosMsgYu'] = ![], bqj['parseXMLFromString'] = function (_09ck) {
      var z3ou, p5yhq;_09ck = _09ck['replace'](/>\s+</g, '><');try {
        z3ou = new window['Parser']['DOMParser']()['parseFromString'](_09ck, 'text/xml');
      } catch (okz3r) {
        throw '需要引入xml解析库文件';
      }return z3ou;
    }, bqj['idx'] = 0x1, bqj;
  }(),
      ayhd$5 = function () {
    function itmxn2() {}ysa5dh(itmxn2, 'laya.wx.mini.MiniImage');var w_x0ci = itmxn2['prototype'];return w_x0ci['_loadImage'] = function (n2tx7) {
      var hsd5ay = this,
          gsyj = ![];n2tx7['indexOf']('layaNativeDir/') == -0x1 && (gsyj = !![], n2tx7 = j618lb['formatURL'](n2tx7));if (!xi_2c['getFileInfo'](n2tx7)) {
        if (n2tx7['indexOf']('http://') != -0x1 || n2tx7['indexOf']('https://') != -0x1) xi_2c['downImg'](n2tx7, new t2ixmn(itmxn2, itmxn2['onDownImgCallBack'], [n2tx7, hsd5ay]), n2tx7);else itmxn2['onCreateImage'](n2tx7, hsd5ay, !![]);
      } else itmxn2['onCreateImage'](n2tx7, hsd5ay, !gsyj);
    }, itmxn2['onDownImgCallBack'] = function (i_mx2c, rue43o, tmnx27) {
      if (!tmnx27) itmxn2['onCreateImage'](i_mx2c, rue43o);else rue43o['onError'](null);
    }, itmxn2['onCreateImage'] = function (jb6g18, vo9wz, gjbq1) {
      gjbq1 === void 0x0 && (gjbq1 = ![]);var hady$;if (!gjbq1) {
        var oz = xi_2c['getFileInfo'](jb6g18),
            jg18pq = oz['md5'];hady$ = xi_2c['getFileNativePath'](jg18pq);
      } else hady$ = jb6g18;if (vo9wz['imgCache'] == null) vo9wz['imgCache'] = {};var xt7;function i0_xcw() {
        xt7['onload'] = null, xt7['onerror'] = null, delete vo9wz['imgCache'][jb6g18];
      };var yqpgjs = function () {
        i0_xcw(), vo9wz['onLoaded'](xt7);
      },
          qshyp = function () {
        i0_xcw(), vo9wz['event']('error', 'Load image failed');
      };vo9wz['_type'] == 'nativeimage' ? (xt7 = new w9kvoz['window']['Image'](), xt7['crossOrigin'] = '', xt7['onload'] = yqpgjs, xt7['onerror'] = qshyp, xt7['src'] = hady$, vo9wz['imgCache'][jb6g18] = xt7) : new v3zor['create'](hady$, { 'onload': yqpgjs, 'onerror': qshyp, 'onCreate': function (dha54$) {
          xt7 = dha54$, vo9wz['imgCache'][jb6g18] = dha54$;
        } });
    }, itmxn2;
  }(),
      syqgjp = function () {
    function aude$4() {}return ysa5dh(aude$4, 'laya.wx.mini.MiniInput'), aude$4['_createInputElement'] = function () {
      qysjgp['_initInput'](qysjgp['area'] = w9kvoz['createElement']('textarea')), qysjgp['_initInput'](qysjgp['input'] = w9kvoz['createElement']('input')), qysjgp['inputContainer'] = w9kvoz['createElement']('div'), qysjgp['inputContainer']['style']['position'] = 'absolute', qysjgp['inputContainer']['style']['zIndex'] = 0x186a0, w9kvoz['container']['appendChild'](qysjgp['inputContainer']), qysjgp['inputContainer']['setPos'] = function (u$ra4e, shyq5p) {
        qysjgp['inputContainer']['style']['left'] = u$ra4e + 'px', qysjgp['inputContainer']['style']['top'] = shyq5p + 'px';
      }, _cwi09['stage']['on']('resize', null, aude$4['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($a4ed) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), eruo34['_soundClass'] = z3uv, eruo34['_musicClass'] = z3uv;
    }, aude$4['_onStageResize'] = function () {
      var l6j = _cwi09['stage']['_canvasTransform']['identity']();l6j['scale'](w9kvoz['width'] / j8qbg['canvas']['width'] / gpsjq['getPixelRatio'](), w9kvoz['height'] / j8qbg['canvas']['height'] / gpsjq['getPixelRatio']());
    }, aude$4['wxinputFocus'] = function (vouer3) {
      var k9w0v = qysjgp['inputElement']['target'];if (k9w0v && !k9w0v['editable']) return;wk9['window']['wx']['offKeyboardConfirm'](), wk9['window']['wx']['offKeyboardInput'](), wk9['window']['wx']['showKeyboard']({ 'defaultValue': k9w0v['text'], 'maxLength': k9w0v['maxChars'], 'multiple': k9w0v['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (im2n) {}, 'fail': function (sqh5p) {} }), wk9['window']['wx']['onKeyboardConfirm'](function (w0kc9z) {
        var gj1qb = w0kc9z ? w0kc9z['value'] : '';k9w0v['text'] = gj1qb, k9w0v['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), wk9['window']['wx']['onKeyboardInput'](function (mtn2i) {
        var urea4$ = mtn2i ? mtn2i['value'] : '';if (!k9w0v['multiline']) {
          if (urea4$['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }k9w0v['text'] = urea4$, k9w0v['event']('input');
      });
    }, aude$4['inputEnter'] = function () {
      qysjgp['inputElement']['target']['focus'] = ![];
    }, aude$4['wxinputblur'] = function () {
      aude$4['hideKeyboard']();
    }, aude$4['hideKeyboard'] = function () {
      wk9['window']['wx']['offKeyboardConfirm'](), wk9['window']['wx']['offKeyboardInput'](), wk9['window']['wx']['hideKeyboard']({ 'success': function (cx2i_) {
          console['log']('隐藏键盘');
        }, 'fail': function (oruve3) {
          console['log']('隐藏键盘出错:' + (oruve3 ? oruve3['errMsg'] : ''));
        } });
    }, aude$4;
  }(),
      e4ua$r = function () {
    function uor4e() {}ysa5dh(uor4e, 'laya.wx.mini.MiniLoader');var euo3r = uor4e['prototype'];return euo3r['load'] = function (qs1g, syqhpg, vrk3z, gj1sqp, q1pgjs) {
      vrk3z === void 0x0 && (vrk3z = !![]), q1pgjs === void 0x0 && (q1pgjs = ![]);var cx0_i = this;cx0_i['_url'] = qs1g;if (qs1g['indexOf']('data:image') === 0x0) cx0_i['_type'] = syqhpg = 'image';else cx0_i['_type'] = syqhpg || (syqhpg = cx0_i['getTypeFromUrl'](qs1g));cx0_i['_cache'] = vrk3z, cx0_i['_data'] = null;var hsayd = 'ascii';if (qs1g['indexOf']('.fnt') != -0x1) hsayd = 'utf8';else syqhpg == 'arraybuffer' && (hsayd = '');;var v39zk = vokw9z['getFileExtension'](qs1g);if (uor4e['_fileTypeArr']['indexOf'](v39zk) != -0x1) wk9['EnvConfig']['load']['call'](this, qs1g, syqhpg, vrk3z, gj1sqp, q1pgjs);else {
        if (!xi_2c['getFileInfo'](qs1g)) {
          if (qs1g['indexOf']('layaNativeDir/') != -0x1) {
            if (wk9['isZiYu']) {
              var zkcw09 = xi_2c['ziyuFileData'][qs1g];cx0_i['onLoaded'](zkcw09);return;
            } else {
              cosnole['log']('read read'), xi_2c['read'](qs1g, hsayd, new t2ixmn(uor4e, uor4e['onReadNativeCallBack'], [hsayd, qs1g, syqhpg, vrk3z, gj1sqp, q1pgjs, cx0_i]));return;
            }
          }if (j618lb['rootPath'] == '') var $45ha = qs1g;else $45ha = qs1g['split'](j618lb['rootPath'])[0x0];qs1g['indexOf']('http://') != -0x1 || qs1g['indexOf']('https://') != -0x1 ? wk9['EnvConfig']['load']['call'](cx0_i, qs1g, syqhpg, vrk3z, gj1sqp, q1pgjs) : xi_2c['readFile']($45ha, hsayd, new t2ixmn(uor4e, uor4e['onReadNativeCallBack'], [hsayd, qs1g, syqhpg, vrk3z, gj1sqp, q1pgjs, cx0_i]), qs1g);
        } else wk9['EnvConfig']['load']['call'](this, qs1g, syqhpg, vrk3z, gj1sqp, q1pgjs);
      }
    }, euo3r['resMgrLoad'] = function (bg6, gsph, x7mtn, gb1, yad$h, k0cwz, wk9zvo) {
      x7mtn === void 0x0 && (x7mtn = 0x0), gb1 === void 0x0 && (gb1 = ![]), yad$h === void 0x0 && (yad$h = ![]), k0cwz === void 0x0 && (k0cwz = 0x0), wk9zvo === void 0x0 && (wk9zvo = 0x3), bg6['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bg6), wk9['EnvConfig']['resMgrLoad'](bg6, (mnt7, g18jb6, da54e$) => {
        uor4e['prototype']['resMgrLoadCallBack'](mnt7, g18jb6, da54e$, gsph);
      }, x7mtn, gb1, yad$h, k0cwz, wk9zvo);
    }, euo3r['resMgrLoadCallBack'] = function (qsjyg, a5shdy, j86l1b, sgyhpq) {
      console['log']('buff:::', qsjyg, j86l1b, xi_2c['fileNativeDir'] + '///' + xi_2c['fileListName']), sgyhpq(qsjyg, a5shdy, j86l1b);
    }, euo3r['clearRes'] = function (d$45ae, zk0c9) {
      zk0c9 === void 0x0 && (zk0c9 = ![]);var gjpqsy = this;gjpqsy['clearRes'](d$45ae, zk0c9);var dyh5a = xi_2c['getFileInfo'](d$45ae);if (dyh5a && (d$45ae['indexOf']('http://') != -0x1 || d$45ae['indexOf']('https://') != -0x1)) {
        var m2intx = dyh5a['md5'],
            i0mc_ = xi_2c['getFileNativePath'](m2intx);xi_2c['remove'](i0mc_);
      }
    }, uor4e['onReadNativeCallBack'] = function (l1bj8, rovkz3, e$u34, ad$y5h, v3eur, gspq1, gs1jp, d5a4h, v90z) {
      ad$y5h === void 0x0 && (ad$y5h = !![]), gspq1 === void 0x0 && (gspq1 = ![]), d5a4h === void 0x0 && (d5a4h = 0x0);if (!d5a4h) {
        var lb8;if (e$u34 == 'json' || e$u34 == 'atlas') lb8 = wk9['getJson'](v90z['data']);else e$u34 == 'xml' ? lb8 = vokw9z['parseXMLFromString'](v90z['data']) : lb8 = v90z['data'];gs1jp['onLoaded'](lb8), !wk9['isZiYu'] && wk9['isPosMsgYu'] && e$u34 != 'arraybuffer' && wx['postMessage']({ 'url': rovkz3, 'data': lb8, 'isLoad': !![] });
      } else d5a4h == 0x1 && wk9['EnvConfig']['load']['call'](gs1jp, rovkz3, e$u34, ad$y5h, v3eur, gspq1);
    }, a$5hyd(uor4e, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), uor4e;
  }(),
      xi_2c = function (kr3ovz) {
    function t7mnx2() {
      t7mnx2['__super']['call'](this);;
    }return ysa5dh(t7mnx2, 'laya.wx.mini.MiniFileMgr', kr3ovz), t7mnx2['isLoadFile'] = function (uov3er) {
      return t7mnx2['_fileTypeArr']['indexOf'](uov3er) != -0x1 ? !![] : ![];
    }, t7mnx2['getFileInfo'] = function (cx_im) {
      var wkvzo = cx_im['split']('?')[0x0],
          ouer43 = t7mnx2['filesListObj'][wkvzo];if (ouer43 == null) return null;else return ouer43;return null;
    }, t7mnx2['onFileUpdate'] = function (w90ci_, _2xc) {
      var qg1bj8 = w90ci_['split']('/'),
          b1gj6 = qg1bj8[qg1bj8['length'] - 0x1],
          xt27nm = t7mnx2['getFileInfo'](_2xc);if (xt27nm == null) t7mnx2['onSaveFile'](_2xc, b1gj6);else {
        if (xt27nm['readyUrl'] != _2xc) t7mnx2['remove'](b1gj6, _2xc);
      }
    }, t7mnx2['exits'] = function (y5dhsa, yshg) {
      var ruv3o = t7mnx2['getFileNativePath'](y5dhsa);t7mnx2['fs']['getFileInfo']({ 'filePath': ruv3o, 'success': function ($ade45) {
          yshg != null && yshg['runWith']([0x0, $ade45]);
        }, 'fail': function (kwzc09) {
          yshg != null && yshg['runWith']([0x1, kwzc09]);
        } });
    }, t7mnx2['read'] = function (ysgpq, pyjqsg, wz09ck, wk09c) {
      pyjqsg === void 0x0 && (pyjqsg = 'ascill'), wk09c === void 0x0 && (wk09c = '');var dash5y;wk09c != '' ? dash5y = t7mnx2['getFileNativePath'](ysgpq) : dash5y = ysgpq, t7mnx2['fs']['readFile']({ 'filePath': dash5y, 'encoding': pyjqsg, 'success': function (w_9c0i) {
          wz09ck != null && wz09ck['runWith']([0x0, w_9c0i]);
        }, 'fail': function (imxt2n) {
          if (imxt2n && wk09c != '') t7mnx2['down'](wk09c, pyjqsg, wz09ck, wk09c);else wz09ck != null && wz09ck['runWith']([0x1]);
        } });
    }, t7mnx2['readNativeFile'] = function (b861lj, h5dya$) {
      t7mnx2['fs']['readFile']({ 'filePath': b861lj, 'encoding': '', 'success': function (zwk0v9) {
          h5dya$ != null && h5dya$['runWith']([0x0]);
        }, 'fail': function (hpdy5) {
          h5dya$ != null && h5dya$['runWith']([0x1]);
        } });
    }, t7mnx2['down'] = function (a5d4$e, m_ixc0, f81b6, $yda) {
      m_ixc0 === void 0x0 && (m_ixc0 = 'ascill'), $yda === void 0x0 && ($yda = '');var a$dh4 = t7mnx2['getFileNativePath']($yda),
          r3uo4e = t7mnx2['wxdown']({ 'url': a5d4$e, 'filePath': a$dh4, 'success': function (a$5dyh) {
          if (a$5dyh['statusCode'] === 0xc8) t7mnx2['readFile'](a$5dyh['filePath'], m_ixc0, f81b6, $yda);
        }, 'fail': function (hpqsyg) {
          f81b6 != null && f81b6['runWith']([0x1, hpqsyg]);
        } });r3uo4e['onProgressUpdate'](function (im_c0) {
        f81b6 != null && f81b6['runWith']([0x2, im_c0['progress']]);
      });
    }, t7mnx2['readFile'] = function ($5dae4, hgysp, sqhp5y, kc09) {
      hgysp === void 0x0 && (hgysp = 'ascill'), kc09 === void 0x0 && (kc09 = ''), t7mnx2['fs']['readFile']({ 'filePath': $5dae4, 'encoding': hgysp, 'success': function (f86b1) {
          if ($5dae4['indexOf']('http://') != -0x1 || $5dae4['indexOf']('https://') != -0x1) t7mnx2['onFileUpdate']($5dae4, kc09);sqhp5y != null && sqhp5y['runWith']([0x0, f86b1]);
        }, 'fail': function (ozk93) {
          if (ozk93) sqhp5y != null && sqhp5y['runWith']([0x1, ozk93]);
        } });
    }, t7mnx2['downImg'] = function (ya$hd5, hspyqg, re$u3) {
      re$u3 === void 0x0 && (re$u3 = '');var g1bq8j = t7mnx2['wxdown']({ 'url': ya$hd5, 'success': function (p1qg) {
          p1qg['statusCode'] === 0xc8 && t7mnx2['copyFile'](p1qg['tempFilePath'], re$u3, hspyqg);
        }, 'fail': function (gbj86) {
          hspyqg != null && hspyqg['runWith']([0x1, gbj86]);
        } });
    }, t7mnx2['copyFile'] = function (e5d$a4, sdha5, xim_c0) {
      var t7xn2m = e5d$a4['split']('/'),
          zo9vkw = t7xn2m[t7xn2m['length'] - 0x1],
          qshg = sdha5['split']('?')[0x0],
          b861g = t7mnx2['getFileInfo'](sdha5),
          eu4da$ = t7mnx2['getFileNativePath'](zo9vkw);t7mnx2['fs']['copyFile']({ 'srcPath': e5d$a4, 'destPath': eu4da$, 'success': function (d$54ha) {
          if (!b861g) t7mnx2['onSaveFile'](sdha5, zo9vkw), xim_c0 != null && xim_c0['runWith']([0x0]);else {
            if (b861g['readyUrl'] != sdha5) t7mnx2['remove'](zo9vkw, sdha5, xim_c0);
          }
        }, 'fail': function (uer3v) {
          xim_c0 != null && xim_c0['runWith']([0x1, uer3v]);
        } });
    }, t7mnx2['getFileNativePath'] = function (j1p) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + j1p;
    }, t7mnx2['remove'] = function ($h54, gq1pjs, uv3eo) {
      gq1pjs === void 0x0 && (gq1pjs = '');var xmt2in = t7mnx2['getFileInfo'](gq1pjs),
          g1j8b = t7mnx2['getFileNativePath'](xmt2in['md5']);_cwi09['loader']['clearRes'](xmt2in['readyUrl']), t7mnx2['fs']['unlink']({ 'filePath': g1j8b, 'success': function (h$a5yd) {
          if (gq1pjs != '') t7mnx2['onSaveFile'](gq1pjs, $h54);uv3eo != null && uv3eo['runWith']([0x0]);
        }, 'fail': function (bg6j81) {} });
    }, t7mnx2['onSaveFile'] = function (kv3rz, jq) {
      var _i9wc = kv3rz['split']('?')[0x0];t7mnx2['filesListObj'][_i9wc] = { 'md5': jq, 'readyUrl': kv3rz }, t7mnx2['fs']['writeFile']({ 'filePath': t7mnx2['fileNativeDir'] + '/' + t7mnx2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t7mnx2['filesListObj']), 'success': function (e3vu) {
          console['log']('写入测试测试成功：', e3vu);
        }, 'fail': function (voruz) {
          console['log']('写入测试测试失败：', voruz);
        } });
    }, t7mnx2['existDir'] = function (kcwz09, p5qs) {
      t7mnx2['fs']['mkdir']({ 'dirPath': kcwz09, 'success': function (x_i2n) {
          p5qs != null && p5qs['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (c0x_iw) {
          if (c0x_iw['errMsg']['indexOf']('file already exists') != -0x1) t7mnx2['readSync'](t7mnx2['fileListName'], 'utf8', p5qs);else p5qs != null && p5qs['runWith']([0x1, c0x_iw]);
        } });
    }, t7mnx2['readSync'] = function (qp5y, w0kzc9, d$5e4a, hdp) {
      w0kzc9 === void 0x0 && (w0kzc9 = 'ascill'), hdp === void 0x0 && (hdp = '');var _x0wci = t7mnx2['getFileNativePath'](qp5y),
          y5pd;try {
        y5pd = t7mnx2['fs']['readFileSync'](_x0wci), d$5e4a != null && d$5e4a['runWith']([0x0, { 'data': y5pd }]);
      } catch (ade5$4) {
        d$5e4a != null && d$5e4a['runWith']([0x1]);
      }
    }, t7mnx2['readCache'] = function () {}, t7mnx2['writeCache'] = function (zo3uvr) {
      var d4a5$e = readyUrl['split']('?')[0x0];t7mnx2['filesListObj'][d4a5$e] = { 'md5': md5Name, 'readyUrl': readyUrl }, t7mnx2['fs']['writeFile']({ 'filePath': t7mnx2['fileNativeDir'] + '/' + t7mnx2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t7mnx2['filesListObj']), 'success': function (s5qhp) {}, 'fail': function (xim2n_) {} });
    }, t7mnx2['setNativeFileDir'] = function (nxim2_) {
      t7mnx2['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + nxim2_;
    }, t7mnx2['filesListObj'] = {}, t7mnx2['fileNativeDir'] = null, t7mnx2['fileListName'] = 'layaairfiles.txt', t7mnx2['ziyuFileData'] = {}, a$5hyd(t7mnx2, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), t7mnx2;
  }(c0kw),
      z3uv = function (e4u$ra) {
    function zkwc() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], zkwc['__super']['call'](this), this['_sound'] = zkwc['_createSound']();
    }ysa5dh(zkwc, 'laya.wx.mini.MiniSound', e4u$ra);var deua$ = zkwc['prototype'];return deua$['load'] = function (pq8j1g) {
      var dya5s = this;pq8j1g = j618lb['formatURL'](pq8j1g), this['url'] = pq8j1g;if (zkwc['_audioCache'][pq8j1g]) {
        this['event']('complete');return;
      }function c_0xmi() {
        if (zkwc['_null'] != undefined) dya5s['_sound']['onCanplay'](zkwc['_null']), dya5s['_sound']['onError'](zkwc['_null']);else try {
          dya5s['_sound']['onCanplay'](null), dya5s['_sound']['onError'](null), zkwc['_null'] = null;
        } catch (ae5d) {
          console['warn']('[wxmini] _clearSound:' + ae5d), dya5s['_sound']['onCanplay'](ovz39k), dya5s['_sound']['onError'](ovz39k), zkwc['_null'] = ovz39k;
        }
      }function veo3ur() {
        c_0xmi(), mtx27n['loaded'] = !![], mtx27n['event']('complete'), zkwc['_audioCache'][mtx27n['url']] = mtx27n;
      }function $5ead4(jypgq) {
        console['error']('errCode=' + jypgq['errCode'] + '  errMsg=' + jypgq['errMsg']), c_0xmi(), mtx27n['event']('error');
      }function ovz39k() {}this['_sound']['onCanplay'](veo3ur), this['_sound']['onError']($5ead4), this['_sound']['src'] = pq8j1g;var mtx27n = this;
    }, deua$['play'] = function (ya5dh, y5pds) {
      ya5dh === void 0x0 && (ya5dh = 0x0), y5pds === void 0x0 && (y5pds = 0x0);var pqhygs;if (this['url'] == eruo34['_tMusic']) {
        if (!zkwc['_musicAudio']) zkwc['_musicAudio'] = zkwc['_createSound']();pqhygs = zkwc['_musicAudio'];
      } else pqhygs = zkwc['_createSound']();pqhygs['src'] = this['url'];var e4uad$ = new tmn2xi(pqhygs);return e4uad$['url'] = this['url'], e4uad$['loops'] = y5pds, e4uad$['startTime'] = ya5dh, e4uad$['play'](), eruo34['addChannel'](e4uad$), e4uad$;
    }, deua$['dispose'] = function () {
      var wvok = zkwc['_audioCache'][this['url']];wvok && (wvok['src'] = '', delete zkwc['_audioCache'][this['url']]);
    }, dyh5ps(0x0, deua$, 'duration', function () {
      return this['_sound']['duration'];
    }), zkwc['_createSound'] = function () {
      return zkwc['_id']++, wk9['window']['wx']['createInnerAudioContext']();
    }, zkwc['_musicAudio'] = null, zkwc['_id'] = 0x0, zkwc['_audioCache'] = {}, zkwc['_null'] = undefined, zkwc;
  }(c0kw),
      tmn2xi = function (orz3k) {
    function rue3vo(vzkw9o) {
      this['_audio'] = null, this['_onEnd'] = null, rue3vo['__super']['call'](this), this['_audio'] = vzkw9o, this['_onEnd'] = vokw9z['bind'](this['__onEnd'], this), vzkw9o['onEnded'](this['_onEnd']);
    }ysa5dh(rue3vo, 'laya.wx.mini.MiniSoundChannel', orz3k);var q8pgj1 = rue3vo['prototype'];return q8pgj1['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (_cwi09['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, q8pgj1['__onNull'] = function () {}, q8pgj1['play'] = function () {
      this['isStopped'] = ![], eruo34['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, q8pgj1['stop'] = function () {
      this['isStopped'] = !![], eruo34['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (rue3vo['_null'] != undefined) this['_audio']['onEnded'](rue3vo['_null']);else try {
        this['_audio']['onEnded'](null), rue3vo['_null'] = null;
      } catch (hay5sd) {
        console['warn']('[wxmini] stop:' + hay5sd), this['_audio']['onEnded'](vokw9z['bind'](this['__onNull'], this)), rue3vo['_null'] = vokw9z['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, q8pgj1['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, q8pgj1['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], eruo34['addChannel'](this), this['_audio']['play']();
    }, dyh5ps(0x0, q8pgj1, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), dyh5ps(0x0, q8pgj1, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), dyh5ps(0x0, q8pgj1, 'volume', function () {
      return 0x1;
    }, function (au$e4r) {}), rue3vo['_null'] = undefined, rue3vo;
  }(k_9c0w);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var kvz9w0 in Laya) {
    var zk9vo3 = Laya[kvz9w0];zk9vo3 && zk9vo3['__isclass'] && (exports[kvz9w0] = zk9vo3);
  }
});