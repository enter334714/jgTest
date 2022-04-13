var B = wx.$z;
(function (window, document, fg4h6) {
  var mli3n7 = fg4h6['un'],
      ph4g16 = fg4h6['uns'],
      bk_r5 = fg4h6['static'],
      b8ydko = fg4h6['class'],
      eodat = fg4h6['getset'],
      fh4p6g = fg4h6['__newvec'],
      s9ph1x = laya['utils']['Browser'],
      txezsa = laya['events']['Event'],
      sh1x9p = laya['events']['EventDispatcher'],
      i3$7qm = laya['resource']['HTMLImage'],
      u25wr = laya['utils']['Handler'],
      zodtk = laya['display']['Input'],
      dr8b = laya['net']['Loader'],
      exazts = laya['maths']['Matrix'],
      $mq = laya['renders']['Render'],
      vf7n6l = laya['utils']['RunDriver'],
      pgh46 = laya['media']['Sound'],
      b825r = laya['media']['SoundChannel'],
      zaetdo = laya['media']['SoundManager'],
      zx9ea = laya['display']['Stage'],
      u_wr52 = laya['net']['URL'],
      sphx = laya['utils']['Utils'],
      kboyt = function () {
    function q3im() {}return b8ydko(q3im, 'laya.wx.mini.MiniAdpter'), q3im['getJson'] = function (fnv4) {
      return JSON['parse'](fnv4);
    }, q3im['init'] = function (ry8kb_, nm37i) {
      ry8kb_ === void 0x0 && (ry8kb_ = ![]), nm37i === void 0x0 && (nm37i = ![]);if (q3im['_inited']) return;q3im['window'] = window;if (q3im['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;q3im['_inited'] = !![], q3im['isZiYu'] = nm37i, q3im['isPosMsgYu'] = ry8kb_, q3im['EnvConfig'] = {}, !q3im['isZiYu'] && (seaz9x['setNativeFileDir']('/layaairGame'), seaz9x['existDir'](seaz9x['fileNativeDir'], u25wr['create'](q3im, q3im['onMkdirCallBack']))), q3im['window']['focus'] = function () {}, fg4h6['getUrlPath'] = function () {}, q3im['window']['logtime'] = function (et) {}, q3im['window']['alertTimeLog'] = function (se19x) {}, q3im['window']['resetShareInfo'] = function () {}, q3im['window']['CanvasRenderingContext2D'] = function () {}, q3im['window']['CanvasRenderingContext2D']['prototype'] = q3im['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], q3im['window']['document']['body']['appendChild'] = function () {}, q3im['EnvConfig']['pixelRatioInt'] = 0x0, vf7n6l['getPixelRatio'] = q3im['pixelRatio'], q3im['_preCreateElement'] = s9ph1x['createElement'], s9ph1x['createElement'] = q3im['createElement'], vf7n6l['createShaderCondition'] = q3im['createShaderCondition'], sphx['parseXMLFromString'] = q3im['parseXMLFromString'], zodtk['_createInputElement'] = sxe19['_createInputElement'], q3im['EnvConfig']['load'] = dr8b['prototype']['load'], dr8b['prototype']['load'] = mq$i37['prototype']['load'], q3im['isZiYu'] && ry8kb_ && wx['onMessage'](function (p491h) {
        p491h['isLoad'] && (seaz9x['ziyuFileData'][p491h['url']] = p491h['data']);
      });
    }, q3im['onMkdirCallBack'] = function (adet, azxets) {
      if (!adet) seaz9x['filesListObj'] = JSON['parse'](azxets['data']);
    }, q3im['pixelRatio'] = function () {
      if (!q3im['EnvConfig']['pixelRatioInt']) try {
        var dtza = wx['getSystemInfoSync']();return q3im['EnvConfig']['pixelRatioInt'] = dtza['pixelRatio'], dtza = dtza, dtza['pixelRatio'];
      } catch (mi7ln) {}return q3im['EnvConfig']['pixelRatioInt'];
    }, q3im['createElement'] = function (f76n) {
      if (f76n == 'canvas') {
        var hx19g;return q3im['idx'] == 0x1 ? q3im['isZiYu'] ? (hx19g = sharedCanvas, hx19g['style'] = {}) : hx19g = window['canvas'] : hx19g = window['wx']['createCanvas'](), q3im['idx']++, hx19g;
      } else {
        if (f76n == 'textarea' || f76n == 'input') return q3im['onCreateInput'](f76n);else {
          if (f76n == 'div') {
            var u20_w = q3im['_preCreateElement'](f76n);return u20_w['contains'] = function (gh6f) {
              return null;
            }, u20_w['removeChild'] = function (mnivl7) {}, u20_w;
          } else return q3im['_preCreateElement'](f76n);
        }
      }
    }, q3im['onCreateInput'] = function (xs9ph1) {
      var fnl7 = q3im['_preCreateElement'](xs9ph1);return fnl7['focus'] = sxe19['wxinputFocus'], fnl7['blur'] = sxe19['wxinputblur'], fnl7['style'] = {}, fnl7['value'] = 0x0, fnl7['parentElement'] = {}, fnl7['placeholder'] = {}, fnl7['type'] = {}, fnl7['setColor'] = function (_b8yr) {}, fnl7['setType'] = function (dzyet) {}, fnl7['setFontFace'] = function (gvl) {}, fnl7['addEventListener'] = function (fvnli7) {}, fnl7['contains'] = function (sexa1) {
        return null;
      }, fnl7['removeChild'] = function (hxsp9) {}, fnl7;
    }, q3im['createShaderCondition'] = function (zeasx) {
      var hpgx = this,
          tbyok = function () {
        var _25u8r = zeasx;return hpgx[zeasx['replace']('this.', '')];
      };return tbyok;
    }, q3im['EnvConfig'] = null, q3im['window'] = null, q3im['_preCreateElement'] = null, q3im['_inited'] = ![], q3im['wxRequest'] = null, q3im['systemInfo'] = null, q3im['version'] = '0.0.1', q3im['isZiYu'] = ![], q3im['isPosMsgYu'] = ![], q3im['parseXMLFromString'] = function (tsoeaz) {
      var yobdk8, w25;tsoeaz = tsoeaz['replace'](/>\s+</g, '><');try {
        yobdk8 = new window['Parser']['DOMParser']()['parseFromString'](tsoeaz, 'text/xml');
      } catch (r2b5_) {
        throw '需要引入xml解析库文件';
      }return yobdk8;
    }, q3im['idx'] = 0x1, q3im;
  }(),
      xesa19 = function () {
    function kr8_5() {}b8ydko(kr8_5, 'laya.wx.mini.MiniImage');var stzea = kr8_5['prototype'];return stzea['_loadImage'] = function (z9aex) {
      var uw052_ = this,
          h416gp = ![];z9aex['indexOf']('layaNativeDir/') == -0x1 && (h416gp = !![], z9aex = u_wr52['formatURL'](z9aex));if (!seaz9x['getFileInfo'](z9aex)) {
        if (z9aex['indexOf']('http://') != -0x1 || z9aex['indexOf']('https://') != -0x1) seaz9x['downImg'](z9aex, new u25wr(kr8_5, kr8_5['onDownImgCallBack'], [z9aex, uw052_]), z9aex);else kr8_5['onCreateImage'](z9aex, uw052_, !![]);
      } else kr8_5['onCreateImage'](z9aex, uw052_, !h416gp);
    }, kr8_5['onDownImgCallBack'] = function (zasx9e, h46pg, q$i3j) {
      if (!q$i3j) kr8_5['onCreateImage'](zasx9e, h46pg);else h46pg['onError'](null);
    }, kr8_5['onCreateImage'] = function (dotyze, p614h, _w05u) {
      _w05u === void 0x0 && (_w05u = ![]);var dkyrb8;if (!_w05u) {
        var g1h9xp = seaz9x['getFileInfo'](dotyze),
            r_u5w = g1h9xp['md5'];dkyrb8 = seaz9x['getFileNativePath'](r_u5w);
      } else dkyrb8 = dotyze;if (p614h['imgCache'] == null) p614h['imgCache'] = {};var sexz9a;function _2ru58() {
        sexz9a['onload'] = null, sexz9a['onerror'] = null, delete p614h['imgCache'][dotyze];
      };var ztesoa = function () {
        _2ru58(), p614h['onLoaded'](sexz9a);
      },
          adoze = function () {
        _2ru58(), p614h['event']('error', 'Load image failed');
      };p614h['_type'] == 'nativeimage' ? (sexz9a = new s9ph1x['window']['Image'](), sexz9a['crossOrigin'] = '', sexz9a['onload'] = ztesoa, sexz9a['onerror'] = adoze, sexz9a['src'] = dkyrb8, p614h['imgCache'][dotyze] = sexz9a) : new i3$7qm['create'](dkyrb8, { 'onload': ztesoa, 'onerror': adoze, 'onCreate': function (xp91g) {
          sexz9a = xp91g, p614h['imgCache'][dotyze] = xp91g;
        } });
    }, kr8_5;
  }(),
      sxe19 = function () {
    function nli7m3() {}return b8ydko(nli7m3, 'laya.wx.mini.MiniInput'), nli7m3['_createInputElement'] = function () {
      zodtk['_initInput'](zodtk['area'] = s9ph1x['createElement']('textarea')), zodtk['_initInput'](zodtk['input'] = s9ph1x['createElement']('input')), zodtk['inputContainer'] = s9ph1x['createElement']('div'), zodtk['inputContainer']['style']['position'] = 'absolute', zodtk['inputContainer']['style']['zIndex'] = 0x186a0, s9ph1x['container']['appendChild'](zodtk['inputContainer']), zodtk['inputContainer']['setPos'] = function (by8r_, n3il) {
        zodtk['inputContainer']['style']['left'] = by8r_ + 'px', zodtk['inputContainer']['style']['top'] = n3il + 'px';
      }, fg4h6['stage']['on']('resize', null, nli7m3['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (aeszot) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), zaetdo['_soundClass'] = bkto, zaetdo['_musicClass'] = bkto, window['_videoClass'] = _ur852;
    }, nli7m3['_onStageResize'] = function () {
      var otbd = fg4h6['stage']['_canvasTransform']['identity']();otbd['scale'](s9ph1x['width'] / $mq['canvas']['width'] / vf7n6l['getPixelRatio'](), s9ph1x['height'] / $mq['canvas']['height'] / vf7n6l['getPixelRatio']());
    }, nli7m3['wxinputFocus'] = function (g4p19h) {
      var sxa91e = zodtk['inputElement']['target'];if (sxa91e && !sxa91e['editable']) return;kboyt['window']['wx']['offKeyboardConfirm'](), kboyt['window']['wx']['offKeyboardInput'](), kboyt['window']['wx']['showKeyboard']({ 'defaultValue': sxa91e['text'], 'maxLength': sxa91e['maxChars'], 'multiple': sxa91e['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (lv4f6n) {}, 'fail': function (osza) {} }), kboyt['window']['wx']['onKeyboardConfirm'](function (axs1h) {
        var yodtze = axs1h ? axs1h['value'] : '';sxa91e['text'] = yodtze, sxa91e['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), kboyt['window']['wx']['onKeyboardInput'](function (f6v7) {
        var tbdk = f6v7 ? f6v7['value'] : '';if (!sxa91e['multiline']) {
          if (tbdk['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }sxa91e['text'] = tbdk, sxa91e['event']('input');
      });
    }, nli7m3['inputEnter'] = function () {
      zodtk['inputElement']['target']['focus'] = ![];
    }, nli7m3['wxinputblur'] = function () {
      nli7m3['hideKeyboard']();
    }, nli7m3['hideKeyboard'] = function () {
      kboyt['window']['wx']['offKeyboardConfirm'](), kboyt['window']['wx']['offKeyboardInput'](), kboyt['window']['wx']['hideKeyboard']({ 'success': function (m7lniv) {
          console['log']('隐藏键盘');
        }, 'fail': function (imnl7v) {
          console['log']('隐藏键盘出错:' + (imnl7v ? imnl7v['errMsg'] : ''));
        } });
    }, nli7m3;
  }(),
      mq$i37 = function () {
    function a9zes() {}b8ydko(a9zes, 'laya.wx.mini.MiniLoader');var g941 = a9zes['prototype'];return g941['load'] = function (seza9, rb_25, _0u5w2, zyk, hpg9x1) {
      _0u5w2 === void 0x0 && (_0u5w2 = !![]), hpg9x1 === void 0x0 && (hpg9x1 = ![]);var yotzd = this;yotzd['_url'] = seza9;if (seza9['indexOf']('data:image') === 0x0) yotzd['_type'] = rb_25 = 'image';else yotzd['_type'] = rb_25 || (rb_25 = yotzd['getTypeFromUrl'](seza9));yotzd['_cache'] = _0u5w2, yotzd['_data'] = null;var f46vp = 'ascii';if (seza9['indexOf']('.fnt') != -0x1) f46vp = 'utf8';else rb_25 == 'arraybuffer' && (f46vp = '');;var gpvf = sphx['getFileExtension'](seza9);if (a9zes['_fileTypeArr']['indexOf'](gpvf) != -0x1) kboyt['EnvConfig']['load']['call'](this, seza9, rb_25, _0u5w2, zyk, hpg9x1);else {
        if (!seaz9x['getFileInfo'](seza9)) {
          if (seza9['indexOf']('layaNativeDir/') != -0x1) {
            if (kboyt['isZiYu']) {
              var qm3in7 = seaz9x['ziyuFileData'][seza9];yotzd['onLoaded'](qm3in7);return;
            } else {
              cosnole['log']('read read'), seaz9x['read'](seza9, f46vp, new u25wr(a9zes, a9zes['onReadNativeCallBack'], [f46vp, seza9, rb_25, _0u5w2, zyk, hpg9x1, yotzd]));return;
            }
          }if (u_wr52['rootPath'] == '') var gfvl4 = seza9;else gfvl4 = seza9['split'](u_wr52['rootPath'])[0x0];seza9['indexOf']('http://') != -0x1 || seza9['indexOf']('https://') != -0x1 ? kboyt['EnvConfig']['load']['call'](yotzd, seza9, rb_25, _0u5w2, zyk, hpg9x1) : seaz9x['readFile'](gfvl4, f46vp, new u25wr(a9zes, a9zes['onReadNativeCallBack'], [f46vp, seza9, rb_25, _0u5w2, zyk, hpg9x1, yotzd]), seza9);
        } else kboyt['EnvConfig']['load']['call'](this, seza9, rb_25, _0u5w2, zyk, hpg9x1);
      }
    }, g941['resMgrLoad'] = function (h6pg, steao, ln6f7, x9ph, fv6l, tosae, h1x9pg) {
      ln6f7 === void 0x0 && (ln6f7 = 0x0), x9ph === void 0x0 && (x9ph = ![]), fv6l === void 0x0 && (fv6l = ![]), tosae === void 0x0 && (tosae = 0x0), h1x9pg === void 0x0 && (h1x9pg = 0x3), h6pg['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', h6pg), kboyt['EnvConfig']['resMgrLoad'](h6pg, (etso, hx19ps, pgh4f6) => {
        a9zes['prototype']['resMgrLoadCallBack'](etso, hx19ps, pgh4f6, steao);
      }, ln6f7, x9ph, fv6l, tosae, h1x9pg);
    }, g941['resMgrLoadCallBack'] = function (g9h, px9s1h, eaozst, hx19pg) {
      console['log']('buff:::', g9h, eaozst, seaz9x['fileNativeDir'] + '///' + seaz9x['fileListName']), hx19pg(g9h, px9s1h, eaozst);
    }, g941['clearRes'] = function (oybk8, doye) {
      doye === void 0x0 && (doye = ![]);var etsa = this;etsa['clearRes'](oybk8, doye);var kdytoz = seaz9x['getFileInfo'](oybk8);if (kdytoz && (oybk8['indexOf']('http://') != -0x1 || oybk8['indexOf']('https://') != -0x1)) {
        var _rbk = kdytoz['md5'],
            ko8d = seaz9x['getFileNativePath'](_rbk);seaz9x['remove'](ko8d);
      }
    }, a9zes['onReadNativeCallBack'] = function (im$73, $mjiq3, xs1ae9, p6fh, tzyk, otzsa, v4gf, nq37im, obk8) {
      p6fh === void 0x0 && (p6fh = !![]), otzsa === void 0x0 && (otzsa = ![]), nq37im === void 0x0 && (nq37im = 0x0);if (!nq37im) {
        var eotsza;if (xs1ae9 == 'json' || xs1ae9 == 'atlas') eotsza = kboyt['getJson'](obk8['data']);else xs1ae9 == 'xml' ? eotsza = sphx['parseXMLFromString'](obk8['data']) : eotsza = obk8['data'];v4gf['onLoaded'](eotsza), !kboyt['isZiYu'] && kboyt['isPosMsgYu'] && xs1ae9 != 'arraybuffer' && wx['postMessage']({ 'url': $mjiq3, 'data': eotsza, 'isLoad': !![] });
      } else nq37im == 0x1 && kboyt['EnvConfig']['load']['call'](v4gf, $mjiq3, xs1ae9, p6fh, tzyk, otzsa);
    }, bk_r5(a9zes, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), a9zes;
  }(),
      seaz9x = function (lnv7im) {
    function adetzo() {
      adetzo['__super']['call'](this);;
    }return b8ydko(adetzo, 'laya.wx.mini.MiniFileMgr', lnv7im), adetzo['isLoadFile'] = function (oyzdet) {
      return adetzo['_fileTypeArr']['indexOf'](oyzdet) != -0x1 ? !![] : ![];
    }, adetzo['getFileInfo'] = function (r25u8) {
      var hg416 = r25u8['split']('?')[0x0],
          ln76v = adetzo['filesListObj'][hg416];if (ln76v == null) return null;else return ln76v;return null;
    }, adetzo['onFileUpdate'] = function (vf7ln6, atzxse) {
      var $jqi3 = vf7ln6['split']('/'),
          vf6 = $jqi3[$jqi3['length'] - 0x1],
          atzxes = adetzo['getFileInfo'](atzxse);if (atzxes == null) adetzo['onSaveFile'](atzxse, vf6);else {
        if (atzxes['readyUrl'] != atzxse) adetzo['remove'](vf6, atzxse);
      }
    }, adetzo['exits'] = function (x1ph9s, vnf67) {
      var esozta = adetzo['getFileNativePath'](x1ph9s);adetzo['fs']['getFileInfo']({ 'filePath': esozta, 'success': function (tzos) {
          vnf67 != null && vnf67['runWith']([0x0, tzos]);
        }, 'fail': function (l6vfn) {
          vnf67 != null && vnf67['runWith']([0x1, l6vfn]);
        } });
    }, adetzo['read'] = function (edtaoz, $jm3q, _8ybrk, lnif7) {
      $jm3q === void 0x0 && ($jm3q = 'ascill'), lnif7 === void 0x0 && (lnif7 = '');var f7nil;lnif7 != '' ? f7nil = adetzo['getFileNativePath'](edtaoz) : f7nil = edtaoz, adetzo['fs']['readFile']({ 'filePath': f7nil, 'encoding': $jm3q, 'success': function (vfg4p6) {
          _8ybrk != null && _8ybrk['runWith']([0x0, vfg4p6]);
        }, 'fail': function (rdky8) {
          if (rdky8 && lnif7 != '') adetzo['down'](lnif7, $jm3q, _8ybrk, lnif7);else _8ybrk != null && _8ybrk['runWith']([0x1]);
        } });
    }, adetzo['readNativeFile'] = function (ydokz, kody8b) {
      adetzo['fs']['readFile']({ 'filePath': ydokz, 'encoding': '', 'success': function (ybdot) {
          kody8b != null && kody8b['runWith']([0x0]);
        }, 'fail': function (zyetod) {
          kody8b != null && kody8b['runWith']([0x1]);
        } });
    }, adetzo['down'] = function (ni7, f6vnl4, xaes19, ru58_) {
      f6vnl4 === void 0x0 && (f6vnl4 = 'ascill'), ru58_ === void 0x0 && (ru58_ = '');var p14h = adetzo['getFileNativePath'](ru58_),
          fvn76 = adetzo['wxdown']({ 'url': ni7, 'filePath': p14h, 'success': function (eyz) {
          if (eyz['statusCode'] === 0xc8) adetzo['readFile'](eyz['filePath'], f6vnl4, xaes19, ru58_);
        }, 'fail': function (r58k) {
          xaes19 != null && xaes19['runWith']([0x1, r58k]);
        } });fvn76['onProgressUpdate'](function (m7nqi) {
        xaes19 != null && xaes19['runWith']([0x2, m7nqi['progress']]);
      });
    }, adetzo['readFile'] = function (flvg6, ykbo8d, gx91h, g614h) {
      ykbo8d === void 0x0 && (ykbo8d = 'ascill'), g614h === void 0x0 && (g614h = ''), adetzo['fs']['readFile']({ 'filePath': flvg6, 'encoding': ykbo8d, 'success': function (zeodta) {
          if (flvg6['indexOf']('http://') != -0x1 || flvg6['indexOf']('https://') != -0x1) adetzo['onFileUpdate'](flvg6, g614h);gx91h != null && gx91h['runWith']([0x0, zeodta]);
        }, 'fail': function (oadz) {
          if (oadz) gx91h != null && gx91h['runWith']([0x1, oadz]);
        } });
    }, adetzo['downImg'] = function (ijm, bykdo, u02_w5) {
      u02_w5 === void 0x0 && (u02_w5 = '');var b5_rk = adetzo['wxdown']({ 'url': ijm, 'success': function (axhs1) {
          axhs1['statusCode'] === 0xc8 && adetzo['copyFile'](axhs1['tempFilePath'], u02_w5, bykdo);
        }, 'fail': function (w_5ru) {
          bykdo != null && bykdo['runWith']([0x1, w_5ru]);
        } });
    }, adetzo['copyFile'] = function (odeaz, sx91hp, ykrb8_) {
      var krby = odeaz['split']('/'),
          odyt = krby[krby['length'] - 0x1],
          v7imnl = sx91hp['split']('?')[0x0],
          w2_5ru = adetzo['getFileInfo'](sx91hp),
          _r28 = adetzo['getFileNativePath'](odyt);adetzo['fs']['copyFile']({ 'srcPath': odeaz, 'destPath': _r28, 'success': function (_852b) {
          if (!w2_5ru) adetzo['onSaveFile'](sx91hp, odyt), ykrb8_ != null && ykrb8_['runWith']([0x0]);else {
            if (w2_5ru['readyUrl'] != sx91hp) adetzo['remove'](odyt, sx91hp, ykrb8_);
          }
        }, 'fail': function ($m3q7i) {
          ykrb8_ != null && ykrb8_['runWith']([0x1, $m3q7i]);
        } });
    }, adetzo['getFileNativePath'] = function (as91) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + as91;
    }, adetzo['remove'] = function (haxs, x1eas, l3nm7i) {
      x1eas === void 0x0 && (x1eas = '');var kdbty = adetzo['getFileInfo'](x1eas),
          sxe9az = adetzo['getFileNativePath'](kdbty['md5']);fg4h6['loader']['clearRes'](kdbty['readyUrl']), adetzo['fs']['unlink']({ 'filePath': sxe9az, 'success': function (krb8yd) {
          if (x1eas != '') adetzo['onSaveFile'](x1eas, haxs);l3nm7i != null && l3nm7i['runWith']([0x0]);
        }, 'fail': function (ezsx) {} });
    }, adetzo['onSaveFile'] = function (sxtza, kry8_b) {
      var fi7nl = sxtza['split']('?')[0x0];adetzo['filesListObj'][fi7nl] = { 'md5': kry8_b, 'readyUrl': sxtza }, adetzo['fs']['writeFile']({ 'filePath': adetzo['fileNativeDir'] + '/' + adetzo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](adetzo['filesListObj']), 'success': function (v7lnim) {
          console['log']('写入测试测试成功：', v7lnim);
        }, 'fail': function (yodez) {
          console['log']('写入测试测试失败：', yodez);
        } });
    }, adetzo['existDir'] = function (zydote, oazset) {
      adetzo['fs']['mkdir']({ 'dirPath': zydote, 'success': function (e9sazx) {
          oazset != null && oazset['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (lnmi37) {
          if (lnmi37['errMsg']['indexOf']('file already exists') != -0x1) adetzo['readSync'](adetzo['fileListName'], 'utf8', oazset);else oazset != null && oazset['runWith']([0x1, lnmi37]);
        } });
    }, adetzo['readSync'] = function (tdyokb, tyezo, vgfp46, r52w_) {
      tyezo === void 0x0 && (tyezo = 'ascill'), r52w_ === void 0x0 && (r52w_ = '');var i7nqm3 = adetzo['getFileNativePath'](tdyokb),
          sex1a9;try {
        sex1a9 = adetzo['fs']['readFileSync'](i7nqm3), vgfp46 != null && vgfp46['runWith']([0x0, { 'data': sex1a9 }]);
      } catch (phg9x1) {
        vgfp46 != null && vgfp46['runWith']([0x1]);
      }
    }, adetzo['readCache'] = function () {}, adetzo['writeCache'] = function (tzyoe) {
      var vpfg = readyUrl['split']('?')[0x0];adetzo['filesListObj'][vpfg] = { 'md5': md5Name, 'readyUrl': readyUrl }, adetzo['fs']['writeFile']({ 'filePath': adetzo['fileNativeDir'] + '/' + adetzo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](adetzo['filesListObj']), 'success': function (mqij) {}, 'fail': function (p6h1g4) {} });
    }, adetzo['setNativeFileDir'] = function (fp64hg) {
      adetzo['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + fp64hg;
    }, adetzo['filesListObj'] = {}, adetzo['fileNativeDir'] = null, adetzo['fileListName'] = 'layaairfiles.txt', adetzo['ziyuFileData'] = {}, bk_r5(adetzo, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), adetzo;
  }(sh1x9p),
      bkto = function (mlv7i) {
    function rwu2_() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], rwu2_['__super']['call'](this), this['_sound'] = rwu2_['_createSound'](), this['_chanell'] = new saoetz(this['_sound']);
    }b8ydko(rwu2_, 'laya.wx.mini.MiniSound', mlv7i);var dyoz = rwu2_['prototype'];return dyoz['load'] = function (mqi73) {
      var dyteoz = this;mqi73 = u_wr52['formatURL'](mqi73), this['url'] = mqi73;if (rwu2_['_audioCache'][mqi73]) {
        this['event']('complete');return;
      }function nliv7() {
        if (rwu2_['_null'] != undefined) dyteoz['_sound']['onCanplay'](rwu2_['_null']), dyteoz['_sound']['onError'](rwu2_['_null']);else try {
          dyteoz['_sound']['onCanplay'](null), dyteoz['_sound']['onError'](null), rwu2_['_null'] = null;
        } catch (gph146) {
          console['warn']('[wxmini] _clearSound:' + gph146), dyteoz['_sound']['onCanplay'](imjq), dyteoz['_sound']['onError'](imjq), rwu2_['_null'] = imjq;
        }
      }function zetao() {
        axsh91['loaded'] = !![], axsh91['event']('complete'), rwu2_['_audioCache'][axsh91['url']] = axsh91;
      }function i3nmq(ahs1x) {
        console['error']('errCode=' + ahs1x['errCode'] + '  errMsg=' + ahs1x['errMsg']), axsh91['event']('error');
      }function imjq() {}this['_sound']['onCanplay'](zetao), this['_sound']['onError'](i3nmq), this['_sound']['src'] = mqi73;var axsh91 = this;
    }, dyoz['play'] = function (okd, axste) {
      okd === void 0x0 && (okd = 0x0), axste === void 0x0 && (axste = 0x0);var boktyd, aetod;if (this['url'] == zaetdo['_tMusic']) {
        if (!rwu2_['_musicAudio']) rwu2_['_musicAudio'] = this['_sound'];boktyd = rwu2_['_musicAudio'], aetod = this['_chanell'];
      } else boktyd = this['_sound'], aetod = this['_chanell'];return boktyd['src'] = this['url'], boktyd['startTime'] = 0x0, aetod['isStopped'] && (aetod['url'] = this['url'], aetod['loops'] = axste, aetod['startTime'] = okd, aetod['play'](), zaetdo['addChannel'](aetod)), aetod;
    }, dyoz['dispose'] = function () {
      var kzyodt = rwu2_['_audioCache'][this['url']];kzyodt && (kzyodt['src'] = '', delete rwu2_['_audioCache'][this['url']]);
    }, eodat(0x0, dyoz, 'duration', function () {
      return this['_sound']['duration'];
    }), rwu2_['_createSound'] = function () {
      rwu2_['_id']++;var v7fl6n = kboyt['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return v7fl6n;
    }, rwu2_['_musicAudio'] = null, rwu2_['_id'] = 0x0, rwu2_['_audioCache'] = {}, rwu2_['_null'] = undefined, rwu2_;
  }(sh1x9p),
      saoetz = function (n7vm) {
    function q3mij(vf46nl) {
      this['_audio'] = null, this['_onEnd'] = null, q3mij['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = vf46nl, this['_onEnd'] = sphx['bind'](this['__onEnd'], this), vf46nl['onEnded'](this['_onEnd']);
    }b8ydko(q3mij, 'laya.wx.mini.MiniSoundChannel', n7vm);var by8rkd = q3mij['prototype'];return by8rkd['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (fg4h6['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, by8rkd['__onNull'] = function () {}, by8rkd['play'] = function () {
      this['isStopped'] = ![], zaetdo['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, by8rkd['stop'] = function () {
      this['isStopped'] = !![], zaetdo['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, by8rkd['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, by8rkd['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], zaetdo['addChannel'](this), this['_audio']['play']();
    }, eodat(0x0, by8rkd, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), eodat(0x0, by8rkd, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), eodat(0x0, by8rkd, 'volume', function () {
      return 0x1;
    }, function (mnl) {}), q3mij['_null'] = undefined, q3mij;
  }(b825r),
      _ur852 = function () {
    function zetydo() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = kboyt['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }b8ydko(zetydo, 'laya.wx.mini.MiniVideo');var ydtoez = zetydo['prototype'];return ydtoez['on'] = function (r5b8k_, obtdk, hxp91) {
      if (r5b8k_ == 'loadedmetadata') this['onPlayFunc'] = hxp91['bind'](obtdk), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else r5b8k_ == 'ended' && (this['onEndedFunC'] = hxp91['bind'](obtdk), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, ydtoez['onTimeUpdateFunc'] = function (fvli) {
      this['position'] = fvli['position'], this['_duration'] = fvli['duration'];
    }, ydtoez['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, ydtoez['onended'] = function (zx9sa, ated) {
      this['onEndedFunC'] = ated['bind'](zx9sa), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, ydtoez['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, ydtoez['off'] = function (qm$ij, xha1s9, dtok) {
      if (qm$ij == 'loadedmetadata') this['onPlayFunc'] = dtok['bind'](xha1s9), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else qm$ij == 'ended' && (this['onEndedFunC'] = dtok['bind'](xha1s9), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, ydtoez['load'] = function (dtoezy) {
      if (!this['videoElement']) return;this['videoElement']['src'] = dtoezy;
    }, ydtoez['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, ydtoez['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, ydtoez['size'] = function (ozeat, ru2_w5) {
      if (!this['videoElement']) return;this['videoElement']['width'] = ozeat, this['videoElement']['height'] = ru2_w5;
    }, ydtoez['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, ydtoez['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, eodat(0x0, ydtoez, 'duration', function () {
      return this['_duration'];
    }), eodat(0x0, ydtoez, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (filvn) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = filvn;
    }), eodat(0x0, ydtoez, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), eodat(0x0, ydtoez, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), eodat(0x0, ydtoez, 'ended', function () {
      return this['videoend'];
    }), eodat(0x0, ydtoez, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (r2_8) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = r2_8;
    }), eodat(0x0, ydtoez, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (hsx1) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = hsx1;
    }), eodat(0x0, ydtoez, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (ykzo) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = ykzo;
    }), eodat(0x0, ydtoez, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), eodat(0x0, ydtoez, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (u8) {
      if (!this['videoElement']) return;this['videoElement']['x'] = u8;
    }), eodat(0x0, ydtoez, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (ky8dbo) {
      if (!this['videoElement']) return;this['videoElement']['y'] = ky8dbo;
    }), eodat(0x0, ydtoez, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), eodat(0x0, ydtoez, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (m3l7ni) {
      if (!this['videoElement']) return;this['videoElement']['src'] = m3l7ni;
    }), eodat(0x0, ydtoez, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (u_2r58) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = u_2r58;
    }), eodat(0x0, ydtoez, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (b8_25) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = b8_25;
    }), zetydo;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var n6f4l in Laya) {
    var yktoz = Laya[n6f4l];yktoz && yktoz['__isclass'] && (exports[n6f4l] = yktoz);
  }
});