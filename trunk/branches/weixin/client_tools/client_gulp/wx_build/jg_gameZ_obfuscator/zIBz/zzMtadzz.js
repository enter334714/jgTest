var B = wx.$z;
(function (window, document, ezodta) {
  var zx9 = ezodta['un'],
      db8yrk = ezodta['uns'],
      j3imq = ezodta['static'],
      otzase = ezodta['class'],
      sxeza9 = ezodta['getset'],
      lf7nv = ezodta['__newvec'],
      xzseat = laya['utils']['Browser'],
      sx9p1h = laya['events']['Event'],
      taosze = laya['events']['EventDispatcher'],
      $3m7iq = laya['resource']['HTMLImage'],
      _258br = laya['utils']['Handler'],
      nm7iv = laya['display']['Input'],
      ru5_2w = laya['net']['Loader'],
      nm3i7q = laya['maths']['Matrix'],
      sxa9e1 = laya['renders']['Render'],
      k8oyb = laya['utils']['RunDriver'],
      aozts = laya['media']['Sound'],
      zedoat = laya['media']['SoundChannel'],
      pxgh91 = laya['media']['SoundManager'],
      ilvn7m = laya['display']['Stage'],
      r2b58 = laya['net']['URL'],
      f6v7nl = laya['utils']['Utils'],
      i37lmn = function () {
    function esx19() {}return otzase(esx19, 'laya.wx.mini.MiniAdpter'), esx19['getJson'] = function (_rbk) {
      return JSON['parse'](_rbk);
    }, esx19['init'] = function (w05u_2, l7imnv) {
      w05u_2 === void 0x0 && (w05u_2 = ![]), l7imnv === void 0x0 && (l7imnv = ![]);if (esx19['_inited']) return;esx19['window'] = window;if (esx19['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;esx19['_inited'] = !![], esx19['isZiYu'] = l7imnv, esx19['isPosMsgYu'] = w05u_2, esx19['EnvConfig'] = {}, !esx19['isZiYu'] && (vg6fl4['setNativeFileDir']('/layaairGame'), vg6fl4['existDir'](vg6fl4['fileNativeDir'], _258br['create'](esx19, esx19['onMkdirCallBack']))), esx19['window']['focus'] = function () {}, ezodta['getUrlPath'] = function () {}, esx19['window']['logtime'] = function (kbrdy8) {}, esx19['window']['alertTimeLog'] = function (xa91s) {}, esx19['window']['resetShareInfo'] = function () {}, esx19['window']['CanvasRenderingContext2D'] = function () {}, esx19['window']['CanvasRenderingContext2D']['prototype'] = esx19['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], esx19['window']['document']['body']['appendChild'] = function () {}, esx19['EnvConfig']['pixelRatioInt'] = 0x0, k8oyb['getPixelRatio'] = esx19['pixelRatio'], esx19['_preCreateElement'] = xzseat['createElement'], xzseat['createElement'] = esx19['createElement'], k8oyb['createShaderCondition'] = esx19['createShaderCondition'], f6v7nl['parseXMLFromString'] = esx19['parseXMLFromString'], nm7iv['_createInputElement'] = tszoa['_createInputElement'], esx19['EnvConfig']['load'] = ru5_2w['prototype']['load'], ru5_2w['prototype']['load'] = zeats['prototype']['load'], esx19['isZiYu'] && w05u_2 && wx['onMessage'](function (i$mjq3) {
        i$mjq3['isLoad'] && (vg6fl4['ziyuFileData'][i$mjq3['url']] = i$mjq3['data']);
      });
    }, esx19['onMkdirCallBack'] = function (j3i$qm, h9pgx) {
      if (!j3i$qm) vg6fl4['filesListObj'] = JSON['parse'](h9pgx['data']);
    }, esx19['pixelRatio'] = function () {
      if (!esx19['EnvConfig']['pixelRatioInt']) try {
        var aetszx = wx['getSystemInfoSync']();return esx19['EnvConfig']['pixelRatioInt'] = aetszx['pixelRatio'], aetszx = aetszx, aetszx['pixelRatio'];
      } catch (pgx19h) {}return esx19['EnvConfig']['pixelRatioInt'];
    }, esx19['createElement'] = function (zytokd) {
      if (zytokd == 'canvas') {
        var l7i3n;return esx19['idx'] == 0x1 ? esx19['isZiYu'] ? (l7i3n = sharedCanvas, l7i3n['style'] = {}) : l7i3n = window['canvas'] : l7i3n = window['wx']['createCanvas'](), esx19['idx']++, l7i3n;
      } else {
        if (zytokd == 'textarea' || zytokd == 'input') return esx19['onCreateInput'](zytokd);else {
          if (zytokd == 'div') {
            var yteoz = esx19['_preCreateElement'](zytokd);return yteoz['contains'] = function (ax1e9s) {
              return null;
            }, yteoz['removeChild'] = function (fl6vn7) {}, yteoz;
          } else return esx19['_preCreateElement'](zytokd);
        }
      }
    }, esx19['onCreateInput'] = function (fp6g4v) {
      var gph1x = esx19['_preCreateElement'](fp6g4v);return gph1x['focus'] = tszoa['wxinputFocus'], gph1x['blur'] = tszoa['wxinputblur'], gph1x['style'] = {}, gph1x['value'] = 0x0, gph1x['parentElement'] = {}, gph1x['placeholder'] = {}, gph1x['type'] = {}, gph1x['setColor'] = function (dyzteo) {}, gph1x['setType'] = function (vn64f) {}, gph1x['setFontFace'] = function (w5_r) {}, gph1x['addEventListener'] = function (ydkzto) {}, gph1x['contains'] = function (kobytd) {
        return null;
      }, gph1x['removeChild'] = function (zoyt) {}, gph1x;
    }, esx19['createShaderCondition'] = function (oatdz) {
      var g4phf = this,
          g4fhp6 = function () {
        var i7n3 = oatdz;return g4phf[oatdz['replace']('this.', '')];
      };return g4fhp6;
    }, esx19['EnvConfig'] = null, esx19['window'] = null, esx19['_preCreateElement'] = null, esx19['_inited'] = ![], esx19['wxRequest'] = null, esx19['systemInfo'] = null, esx19['version'] = '0.0.1', esx19['isZiYu'] = ![], esx19['isPosMsgYu'] = ![], esx19['parseXMLFromString'] = function (x19phg) {
      var deotzy, r_8u;x19phg = x19phg['replace'](/>\s+</g, '><');try {
        deotzy = new window['Parser']['DOMParser']()['parseFromString'](x19phg, 'text/xml');
      } catch (satxe) {
        throw '需要引入xml解析库文件';
      }return deotzy;
    }, esx19['idx'] = 0x1, esx19;
  }(),
      u2_0w = function () {
    function tsezo() {}otzase(tsezo, 'laya.wx.mini.MiniImage');var nm7vli = tsezo['prototype'];return nm7vli['_loadImage'] = function (f6) {
      var m73qi = this,
          vnli7m = ![];f6['indexOf']('layaNativeDir/') == -0x1 && (vnli7m = !![], f6 = r2b58['formatURL'](f6));if (!vg6fl4['getFileInfo'](f6)) {
        if (f6['indexOf']('http://') != -0x1 || f6['indexOf']('https://') != -0x1) vg6fl4['downImg'](f6, new _258br(tsezo, tsezo['onDownImgCallBack'], [f6, m73qi]), f6);else tsezo['onCreateImage'](f6, m73qi, !![]);
      } else tsezo['onCreateImage'](f6, m73qi, !vnli7m);
    }, tsezo['onDownImgCallBack'] = function (brydk, r8ykd, zxe) {
      if (!zxe) tsezo['onCreateImage'](brydk, r8ykd);else r8ykd['onError'](null);
    }, tsezo['onCreateImage'] = function (zesa9, yetz, eoytz) {
      eoytz === void 0x0 && (eoytz = ![]);var b5k_8r;if (!eoytz) {
        var fv4n6l = vg6fl4['getFileInfo'](zesa9),
            n6fl4v = fv4n6l['md5'];b5k_8r = vg6fl4['getFileNativePath'](n6fl4v);
      } else b5k_8r = zesa9;if (yetz['imgCache'] == null) yetz['imgCache'] = {};var b8doky;function pvg64f() {
        b8doky['onload'] = null, b8doky['onerror'] = null, delete yetz['imgCache'][zesa9];
      };var f64lnv = function () {
        pvg64f(), yetz['onLoaded'](b8doky);
      },
          hpsx1 = function () {
        pvg64f(), yetz['event']('error', 'Load image failed');
      };yetz['_type'] == 'nativeimage' ? (b8doky = new xzseat['window']['Image'](), b8doky['crossOrigin'] = '', b8doky['onload'] = f64lnv, b8doky['onerror'] = hpsx1, b8doky['src'] = b5k_8r, yetz['imgCache'][zesa9] = b8doky) : new $3m7iq['create'](b5k_8r, { 'onload': f64lnv, 'onerror': hpsx1, 'onCreate': function (m7qn3) {
          b8doky = m7qn3, yetz['imgCache'][zesa9] = m7qn3;
        } });
    }, tsezo;
  }(),
      tszoa = function () {
    function mi37q$() {}return otzase(mi37q$, 'laya.wx.mini.MiniInput'), mi37q$['_createInputElement'] = function () {
      nm7iv['_initInput'](nm7iv['area'] = xzseat['createElement']('textarea')), nm7iv['_initInput'](nm7iv['input'] = xzseat['createElement']('input')), nm7iv['inputContainer'] = xzseat['createElement']('div'), nm7iv['inputContainer']['style']['position'] = 'absolute', nm7iv['inputContainer']['style']['zIndex'] = 0x186a0, xzseat['container']['appendChild'](nm7iv['inputContainer']), nm7iv['inputContainer']['setPos'] = function (ln7vf6, mq7$) {
        nm7iv['inputContainer']['style']['left'] = ln7vf6 + 'px', nm7iv['inputContainer']['style']['top'] = mq7$ + 'px';
      }, ezodta['stage']['on']('resize', null, mi37q$['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (bkryd) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), pxgh91['_soundClass'] = rkd, pxgh91['_musicClass'] = rkd;
    }, mi37q$['_onStageResize'] = function () {
      var lin3 = ezodta['stage']['_canvasTransform']['identity']();lin3['scale'](xzseat['width'] / sxa9e1['canvas']['width'] / k8oyb['getPixelRatio'](), xzseat['height'] / sxa9e1['canvas']['height'] / k8oyb['getPixelRatio']());
    }, mi37q$['wxinputFocus'] = function (jm$iq3) {
      var hpx1 = nm7iv['inputElement']['target'];if (hpx1 && !hpx1['editable']) return;i37lmn['window']['wx']['offKeyboardConfirm'](), i37lmn['window']['wx']['offKeyboardInput'](), i37lmn['window']['wx']['showKeyboard']({ 'defaultValue': hpx1['text'], 'maxLength': hpx1['maxChars'], 'multiple': hpx1['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (lgvf64) {}, 'fail': function (tkybd) {} }), i37lmn['window']['wx']['onKeyboardConfirm'](function (u82_r) {
        var l7vnf6 = u82_r ? u82_r['value'] : '';hpx1['text'] = l7vnf6, hpx1['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), i37lmn['window']['wx']['onKeyboardInput'](function (qin37m) {
        var dkztoy = qin37m ? qin37m['value'] : '';if (!hpx1['multiline']) {
          if (dkztoy['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }hpx1['text'] = dkztoy, hpx1['event']('input');
      });
    }, mi37q$['inputEnter'] = function () {
      nm7iv['inputElement']['target']['focus'] = ![];
    }, mi37q$['wxinputblur'] = function () {
      mi37q$['hideKeyboard']();
    }, mi37q$['hideKeyboard'] = function () {
      i37lmn['window']['wx']['offKeyboardConfirm'](), i37lmn['window']['wx']['offKeyboardInput'](), i37lmn['window']['wx']['hideKeyboard']({ 'success': function (xz9as) {
          console['log']('隐藏键盘');
        }, 'fail': function (vlf7ni) {
          console['log']('隐藏键盘出错:' + (vlf7ni ? vlf7ni['errMsg'] : ''));
        } });
    }, mi37q$;
  }(),
      zeats = function () {
    function odtbk() {}otzase(odtbk, 'laya.wx.mini.MiniLoader');var r5k = odtbk['prototype'];return r5k['load'] = function (sh1ax9, x1aes9, ah1x9, yodzte, tbdok) {
      ah1x9 === void 0x0 && (ah1x9 = !![]), tbdok === void 0x0 && (tbdok = ![]);var $3mq7 = this;$3mq7['_url'] = sh1ax9;if (sh1ax9['indexOf']('data:image') === 0x0) $3mq7['_type'] = x1aes9 = 'image';else $3mq7['_type'] = x1aes9 || (x1aes9 = $3mq7['getTypeFromUrl'](sh1ax9));$3mq7['_cache'] = ah1x9, $3mq7['_data'] = null;var oetdz = 'ascii';if (sh1ax9['indexOf']('.fnt') != -0x1) oetdz = 'utf8';else x1aes9 == 'arraybuffer' && (oetdz = '');;var tdyoez = f6v7nl['getFileExtension'](sh1ax9);if (odtbk['_fileTypeArr']['indexOf'](tdyoez) != -0x1) i37lmn['EnvConfig']['load']['call'](this, sh1ax9, x1aes9, ah1x9, yodzte, tbdok);else {
        if (!vg6fl4['getFileInfo'](sh1ax9)) {
          if (sh1ax9['indexOf']('layaNativeDir/') != -0x1) {
            if (i37lmn['isZiYu']) {
              var mlniv7 = vg6fl4['ziyuFileData'][sh1ax9];$3mq7['onLoaded'](mlniv7);return;
            } else {
              cosnole['log']('read read'), vg6fl4['read'](sh1ax9, oetdz, new _258br(odtbk, odtbk['onReadNativeCallBack'], [oetdz, sh1ax9, x1aes9, ah1x9, yodzte, tbdok, $3mq7]));return;
            }
          }if (r2b58['rootPath'] == '') var lvfin7 = sh1ax9;else lvfin7 = sh1ax9['split'](r2b58['rootPath'])[0x0];sh1ax9['indexOf']('http://') != -0x1 || sh1ax9['indexOf']('https://') != -0x1 ? i37lmn['EnvConfig']['load']['call']($3mq7, sh1ax9, x1aes9, ah1x9, yodzte, tbdok) : vg6fl4['readFile'](lvfin7, oetdz, new _258br(odtbk, odtbk['onReadNativeCallBack'], [oetdz, sh1ax9, x1aes9, ah1x9, yodzte, tbdok, $3mq7]), sh1ax9);
        } else i37lmn['EnvConfig']['load']['call'](this, sh1ax9, x1aes9, ah1x9, yodzte, tbdok);
      }
    }, r5k['resMgrLoad'] = function (dtoaez, h64gp1, tbykd, ezt, _20w5, m73l, filnv7) {
      tbykd === void 0x0 && (tbykd = 0x0), ezt === void 0x0 && (ezt = ![]), _20w5 === void 0x0 && (_20w5 = ![]), m73l === void 0x0 && (m73l = 0x0), filnv7 === void 0x0 && (filnv7 = 0x3), dtoaez['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', dtoaez), i37lmn['EnvConfig']['resMgrLoad'](dtoaez, (zeytdo, r25_u, edzao) => {
        odtbk['prototype']['resMgrLoadCallBack'](zeytdo, r25_u, edzao, h64gp1);
      }, tbykd, ezt, _20w5, m73l, filnv7);
    }, r5k['resMgrLoadCallBack'] = function (etyod, _8kbyr, _8kb5r, lvf4g6) {
      console['log']('buff:::', etyod, _8kb5r, vg6fl4['fileNativeDir'] + '///' + vg6fl4['fileListName']), lvf4g6(etyod, _8kbyr, _8kb5r);
    }, r5k['clearRes'] = function (y8b, xshp19) {
      xshp19 === void 0x0 && (xshp19 = ![]);var gpx1h9 = this;gpx1h9['clearRes'](y8b, xshp19);var xp1h = vg6fl4['getFileInfo'](y8b);if (xp1h && (y8b['indexOf']('http://') != -0x1 || y8b['indexOf']('https://') != -0x1)) {
        var _uw50 = xp1h['md5'],
            dtkoyb = vg6fl4['getFileNativePath'](_uw50);vg6fl4['remove'](dtkoyb);
      }
    }, odtbk['onReadNativeCallBack'] = function (ivn, l67nf, oteasz, dteozy, e91xsa, d8byk, otes, ed, b8kdoy) {
      dteozy === void 0x0 && (dteozy = !![]), d8byk === void 0x0 && (d8byk = ![]), ed === void 0x0 && (ed = 0x0);if (!ed) {
        var q73min;if (oteasz == 'json' || oteasz == 'atlas') q73min = i37lmn['getJson'](b8kdoy['data']);else oteasz == 'xml' ? q73min = f6v7nl['parseXMLFromString'](b8kdoy['data']) : q73min = b8kdoy['data'];otes['onLoaded'](q73min), !i37lmn['isZiYu'] && i37lmn['isPosMsgYu'] && oteasz != 'arraybuffer' && wx['postMessage']({ 'url': l67nf, 'data': q73min, 'isLoad': !![] });
      } else ed == 0x1 && i37lmn['EnvConfig']['load']['call'](otes, l67nf, oteasz, dteozy, e91xsa, d8byk);
    }, j3imq(odtbk, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), odtbk;
  }(),
      vg6fl4 = function (mi7n3) {
    function lfgv6() {
      lfgv6['__super']['call'](this);;
    }return otzase(lfgv6, 'laya.wx.mini.MiniFileMgr', mi7n3), lfgv6['isLoadFile'] = function (tzkyo) {
      return lfgv6['_fileTypeArr']['indexOf'](tzkyo) != -0x1 ? !![] : ![];
    }, lfgv6['getFileInfo'] = function (lf7ni) {
      var mq7 = lf7ni['split']('?')[0x0],
          minq37 = lfgv6['filesListObj'][mq7];if (minq37 == null) return null;else return minq37;return null;
    }, lfgv6['onFileUpdate'] = function (kytozd, b_8k) {
      var a9h1s = kytozd['split']('/'),
          k_5r8 = a9h1s[a9h1s['length'] - 0x1],
          fnivl7 = lfgv6['getFileInfo'](b_8k);if (fnivl7 == null) lfgv6['onSaveFile'](b_8k, k_5r8);else {
        if (fnivl7['readyUrl'] != b_8k) lfgv6['remove'](k_5r8, b_8k);
      }
    }, lfgv6['exits'] = function (pv, tbok) {
      var deta = lfgv6['getFileNativePath'](pv);lfgv6['fs']['getFileInfo']({ 'filePath': deta, 'success': function (vfpg4) {
          tbok != null && tbok['runWith']([0x0, vfpg4]);
        }, 'fail': function (fg6p) {
          tbok != null && tbok['runWith']([0x1, fg6p]);
        } });
    }, lfgv6['read'] = function (y8kr_b, tsxa, k8ybo, xeaz) {
      tsxa === void 0x0 && (tsxa = 'ascill'), xeaz === void 0x0 && (xeaz = '');var azesto;xeaz != '' ? azesto = lfgv6['getFileNativePath'](y8kr_b) : azesto = y8kr_b, lfgv6['fs']['readFile']({ 'filePath': azesto, 'encoding': tsxa, 'success': function (phsx1) {
          k8ybo != null && k8ybo['runWith']([0x0, phsx1]);
        }, 'fail': function (asoz) {
          if (asoz && xeaz != '') lfgv6['down'](xeaz, tsxa, k8ybo, xeaz);else k8ybo != null && k8ybo['runWith']([0x1]);
        } });
    }, lfgv6['readNativeFile'] = function (lgf46, nf76vl) {
      lfgv6['fs']['readFile']({ 'filePath': lgf46, 'encoding': '', 'success': function (ytzeod) {
          nf76vl != null && nf76vl['runWith']([0x0]);
        }, 'fail': function (i3m7q$) {
          nf76vl != null && nf76vl['runWith']([0x1]);
        } });
    }, lfgv6['down'] = function (lnfiv, ru5w2_, u_52r8, edaot) {
      ru5w2_ === void 0x0 && (ru5w2_ = 'ascill'), edaot === void 0x0 && (edaot = '');var uw2 = lfgv6['getFileNativePath'](edaot),
          daotz = lfgv6['wxdown']({ 'url': lnfiv, 'filePath': uw2, 'success': function (dktyz) {
          if (dktyz['statusCode'] === 0xc8) lfgv6['readFile'](dktyz['filePath'], ru5w2_, u_52r8, edaot);
        }, 'fail': function (w25u0_) {
          u_52r8 != null && u_52r8['runWith']([0x1, w25u0_]);
        } });daotz['onProgressUpdate'](function ($qj3im) {
        u_52r8 != null && u_52r8['runWith']([0x2, $qj3im['progress']]);
      });
    }, lfgv6['readFile'] = function (h9p, nlv7im, nfil7v, _2w5u) {
      nlv7im === void 0x0 && (nlv7im = 'ascill'), _2w5u === void 0x0 && (_2w5u = ''), lfgv6['fs']['readFile']({ 'filePath': h9p, 'encoding': nlv7im, 'success': function (vf76) {
          if (h9p['indexOf']('http://') != -0x1 || h9p['indexOf']('https://') != -0x1) lfgv6['onFileUpdate'](h9p, _2w5u);nfil7v != null && nfil7v['runWith']([0x0, vf76]);
        }, 'fail': function (phsx9) {
          if (phsx9) nfil7v != null && nfil7v['runWith']([0x1, phsx9]);
        } });
    }, lfgv6['downImg'] = function (dykrb, xaetz, vmni) {
      vmni === void 0x0 && (vmni = '');var mn7q = lfgv6['wxdown']({ 'url': dykrb, 'success': function (f46g) {
          f46g['statusCode'] === 0xc8 && lfgv6['copyFile'](f46g['tempFilePath'], vmni, xaetz);
        }, 'fail': function (iq7m3) {
          xaetz != null && xaetz['runWith']([0x1, iq7m3]);
        } });
    }, lfgv6['copyFile'] = function (_2w5, u5w, p91hg4) {
      var g46l = _2w5['split']('/'),
          zdtko = g46l[g46l['length'] - 0x1],
          u_8r2 = u5w['split']('?')[0x0],
          xst = lfgv6['getFileInfo'](u5w),
          ashx91 = lfgv6['getFileNativePath'](zdtko);lfgv6['fs']['copyFile']({ 'srcPath': _2w5, 'destPath': ashx91, 'success': function (qm$7i3) {
          if (!xst) lfgv6['onSaveFile'](u5w, zdtko), p91hg4 != null && p91hg4['runWith']([0x0]);else {
            if (xst['readyUrl'] != u5w) lfgv6['remove'](zdtko, u5w, p91hg4);
          }
        }, 'fail': function (vfi) {
          p91hg4 != null && p91hg4['runWith']([0x1, vfi]);
        } });
    }, lfgv6['getFileNativePath'] = function (kb_yr8) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + kb_yr8;
    }, lfgv6['remove'] = function (r_w25u, v7minl, toydkz) {
      v7minl === void 0x0 && (v7minl = '');var tsex = lfgv6['getFileInfo'](v7minl),
          q7n = lfgv6['getFileNativePath'](tsex['md5']);ezodta['loader']['clearRes'](tsex['readyUrl']), lfgv6['fs']['unlink']({ 'filePath': q7n, 'success': function (w0u_) {
          if (v7minl != '') lfgv6['onSaveFile'](v7minl, r_w25u);toydkz != null && toydkz['runWith']([0x0]);
        }, 'fail': function (ru582_) {} });
    }, lfgv6['onSaveFile'] = function (v7n6l, _2wr5u) {
      var qij$m = v7n6l['split']('?')[0x0];lfgv6['filesListObj'][qij$m] = { 'md5': _2wr5u, 'readyUrl': v7n6l }, lfgv6['fs']['writeFile']({ 'filePath': lfgv6['fileNativeDir'] + '/' + lfgv6['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](lfgv6['filesListObj']), 'success': function (xp9s1h) {
          console['log']('写入测试测试成功：', xp9s1h);
        }, 'fail': function (teozdy) {
          console['log']('写入测试测试失败：', teozdy);
        } });
    }, lfgv6['existDir'] = function (stezax, bkr8y_) {
      lfgv6['fs']['mkdir']({ 'dirPath': stezax, 'success': function (by8k_r) {
          bkr8y_ != null && bkr8y_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (aesxz) {
          if (aesxz['errMsg']['indexOf']('file already exists') != -0x1) lfgv6['readSync'](lfgv6['fileListName'], 'utf8', bkr8y_);else bkr8y_ != null && bkr8y_['runWith']([0x1, aesxz]);
        } });
    }, lfgv6['readSync'] = function (atszex, $q73mi, p1xh9s, vlg4f) {
      $q73mi === void 0x0 && ($q73mi = 'ascill'), vlg4f === void 0x0 && (vlg4f = '');var vfni7 = lfgv6['getFileNativePath'](atszex),
          gl4f6;try {
        gl4f6 = lfgv6['fs']['readFileSync'](vfni7), p1xh9s != null && p1xh9s['runWith']([0x0, { 'data': gl4f6 }]);
      } catch (in7) {
        p1xh9s != null && p1xh9s['runWith']([0x1]);
      }
    }, lfgv6['readCache'] = function () {}, lfgv6['writeCache'] = function (qimn3) {
      var h91xps = readyUrl['split']('?')[0x0];lfgv6['filesListObj'][h91xps] = { 'md5': md5Name, 'readyUrl': readyUrl }, lfgv6['fs']['writeFile']({ 'filePath': lfgv6['fileNativeDir'] + '/' + lfgv6['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](lfgv6['filesListObj']), 'success': function (g4p19) {}, 'fail': function (zxates) {} });
    }, lfgv6['setNativeFileDir'] = function (atesz) {
      lfgv6['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + atesz;
    }, lfgv6['filesListObj'] = {}, lfgv6['fileNativeDir'] = null, lfgv6['fileListName'] = 'layaairfiles.txt', lfgv6['ziyuFileData'] = {}, j3imq(lfgv6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), lfgv6;
  }(taosze),
      rkd = function (_25uw) {
    function f7nvli() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], f7nvli['__super']['call'](this), this['_sound'] = f7nvli['_createSound']();
    }otzase(f7nvli, 'laya.wx.mini.MiniSound', _25uw);var kbyt = f7nvli['prototype'];return kbyt['load'] = function (r_582) {
      var r52u_8 = this;r_582 = r2b58['formatURL'](r_582), this['url'] = r_582;if (f7nvli['_audioCache'][r_582]) {
        this['event']('complete');return;
      }function p61g() {
        if (f7nvli['_null'] != undefined) r52u_8['_sound']['onCanplay'](f7nvli['_null']), r52u_8['_sound']['onError'](f7nvli['_null']);else try {
          r52u_8['_sound']['onCanplay'](null), r52u_8['_sound']['onError'](null), f7nvli['_null'] = null;
        } catch (jmq$3i) {
          console['warn']('[wxmini] _clearSound:' + jmq$3i), r52u_8['_sound']['onCanplay'](p9sxh1), r52u_8['_sound']['onError'](p9sxh1), f7nvli['_null'] = p9sxh1;
        }
      }function byrdk8() {
        p61g(), xsez9a['loaded'] = !![], xsez9a['event']('complete'), f7nvli['_audioCache'][xsez9a['url']] = xsez9a;
      }function gp49h(_502w) {
        console['error']('errCode=' + _502w['errCode'] + '  errMsg=' + _502w['errMsg']), p61g(), xsez9a['event']('error');
      }function p9sxh1() {}this['_sound']['onCanplay'](byrdk8), this['_sound']['onError'](gp49h), this['_sound']['src'] = r_582;var xsez9a = this;
    }, kbyt['play'] = function (ydkotz, gf4pv6) {
      ydkotz === void 0x0 && (ydkotz = 0x0), gf4pv6 === void 0x0 && (gf4pv6 = 0x0);var h91sp;if (this['url'] == pxgh91['_tMusic']) {
        if (!f7nvli['_musicAudio']) f7nvli['_musicAudio'] = f7nvli['_createSound']();h91sp = f7nvli['_musicAudio'];
      } else h91sp = f7nvli['_createSound']();h91sp['src'] = this['url'];var nvl64f = new zeoadt(h91sp);return nvl64f['url'] = this['url'], nvl64f['loops'] = gf4pv6, nvl64f['startTime'] = ydkotz, nvl64f['play'](), pxgh91['addChannel'](nvl64f), nvl64f;
    }, kbyt['dispose'] = function () {
      var taosz = f7nvli['_audioCache'][this['url']];taosz && (taosz['src'] = '', delete f7nvli['_audioCache'][this['url']]);
    }, sxeza9(0x0, kbyt, 'duration', function () {
      return this['_sound']['duration'];
    }), f7nvli['_createSound'] = function () {
      return f7nvli['_id']++, i37lmn['window']['wx']['createInnerAudioContext']();
    }, f7nvli['_musicAudio'] = null, f7nvli['_id'] = 0x0, f7nvli['_audioCache'] = {}, f7nvli['_null'] = undefined, f7nvli;
  }(taosze),
      zeoadt = function (aszxe) {
    function h9xsa1($miq3) {
      this['_audio'] = null, this['_onEnd'] = null, h9xsa1['__super']['call'](this), this['_audio'] = $miq3, this['_onEnd'] = f6v7nl['bind'](this['__onEnd'], this), $miq3['onEnded'](this['_onEnd']);
    }otzase(h9xsa1, 'laya.wx.mini.MiniSoundChannel', aszxe);var eat = h9xsa1['prototype'];return eat['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ezodta['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, eat['__onNull'] = function () {}, eat['play'] = function () {
      this['isStopped'] = ![], pxgh91['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, eat['stop'] = function () {
      this['isStopped'] = !![], pxgh91['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (h9xsa1['_null'] != undefined) this['_audio']['onEnded'](h9xsa1['_null']);else try {
        this['_audio']['onEnded'](null), h9xsa1['_null'] = null;
      } catch (lvinf) {
        console['warn']('[wxmini] stop:' + lvinf), this['_audio']['onEnded'](f6v7nl['bind'](this['__onNull'], this)), h9xsa1['_null'] = f6v7nl['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, eat['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, eat['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], pxgh91['addChannel'](this), this['_audio']['play']();
    }, sxeza9(0x0, eat, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), sxeza9(0x0, eat, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), sxeza9(0x0, eat, 'volume', function () {
      return 0x1;
    }, function (_k8b5r) {}), h9xsa1['_null'] = undefined, h9xsa1;
  }(zedoat);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var l7inv in Laya) {
    var n7mq = Laya[l7inv];n7mq && n7mq['__isclass'] && (exports[l7inv] = n7mq);
  }
});