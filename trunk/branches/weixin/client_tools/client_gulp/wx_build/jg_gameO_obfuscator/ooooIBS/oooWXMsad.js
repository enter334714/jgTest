var c = wx.$o;
(function (window, document, ix19) {
  var mr5ptq = ix19['un'],
      rz8cmp = ix19['uns'],
      yeku0 = ix19['static'],
      w941xf = ix19['class'],
      _k0$y = ix19['getset'],
      yeun3 = ix19['__newvec'],
      iw1f9x = laya['utils']['Browser'],
      b4hzgo = laya['events']['Event'],
      fiwd2 = laya['events']['EventDispatcher'],
      go4bhz = laya['resource']['HTMLImage'],
      e0$kyj = laya['utils']['Handler'],
      j$ky0e = laya['display']['Input'],
      y_3eun = laya['net']['Loader'],
      f419w = laya['maths']['Matrix'],
      kynu = laya['renders']['Render'],
      uyn_v = laya['utils']['RunDriver'],
      gfx94 = laya['media']['Sound'],
      wgfx94 = laya['media']['SoundChannel'],
      l2a6di = laya['media']['SoundManager'],
      oh4bz = laya['display']['Stage'],
      p8bch = laya['net']['URL'],
      b8pzh = laya['utils']['Utils'],
      aunv = function () {
    function rpqmt5() {}return w941xf(rpqmt5, 'laya.wx.mini.MiniAdpter'), rpqmt5['getJson'] = function (prt5cm) {
      return JSON['parse'](prt5cm);
    }, rpqmt5['init'] = function (bco8zh, t5qms7) {
      bco8zh === void 0x0 && (bco8zh = ![]), t5qms7 === void 0x0 && (t5qms7 = ![]);if (rpqmt5['_inited']) return;rpqmt5['window'] = window;if (rpqmt5['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;rpqmt5['_inited'] = !![], rpqmt5['isZiYu'] = t5qms7, rpqmt5['isPosMsgYu'] = bco8zh, rpqmt5['EnvConfig'] = {}, !rpqmt5['isZiYu'] && (enk_yu['setNativeFileDir']('/layaairGame'), enk_yu['existDir'](enk_yu['fileNativeDir'], e0$kyj['create'](rpqmt5, rpqmt5['onMkdirCallBack']))), rpqmt5['window']['focus'] = function () {}, ix19['getUrlPath'] = function () {}, rpqmt5['window']['logtime'] = function (ek0yu) {}, rpqmt5['window']['alertTimeLog'] = function (pz8crh) {}, rpqmt5['window']['resetShareInfo'] = function () {}, rpqmt5['window']['CanvasRenderingContext2D'] = function () {}, rpqmt5['window']['CanvasRenderingContext2D']['prototype'] = rpqmt5['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], rpqmt5['window']['document']['body']['appendChild'] = function () {}, rpqmt5['EnvConfig']['pixelRatioInt'] = 0x0, uyn_v['getPixelRatio'] = rpqmt5['pixelRatio'], rpqmt5['_preCreateElement'] = iw1f9x['createElement'], iw1f9x['createElement'] = rpqmt5['createElement'], uyn_v['createShaderCondition'] = rpqmt5['createShaderCondition'], b8pzh['parseXMLFromString'] = rpqmt5['parseXMLFromString'], j$ky0e['_createInputElement'] = da3v6l['_createInputElement'], rpqmt5['EnvConfig']['load'] = y_3eun['prototype']['load'], y_3eun['prototype']['load'] = _yv3un['prototype']['load'], rpqmt5['isZiYu'] && bco8zh && wx['onMessage'](function (_ukey0) {
        _ukey0['isLoad'] && (enk_yu['ziyuFileData'][_ukey0['url']] = _ukey0['data']);
      });
    }, rpqmt5['onMkdirCallBack'] = function (v_yn3, ohg8bz) {
      if (!v_yn3) enk_yu['filesListObj'] = JSON['parse'](ohg8bz['data']);
    }, rpqmt5['pixelRatio'] = function () {
      if (!rpqmt5['EnvConfig']['pixelRatioInt']) try {
        var xg94fo = wx['getSystemInfoSync']();return rpqmt5['EnvConfig']['pixelRatioInt'] = xg94fo['pixelRatio'], xg94fo = xg94fo, xg94fo['pixelRatio'];
      } catch (adi2l) {}return rpqmt5['EnvConfig']['pixelRatioInt'];
    }, rpqmt5['createElement'] = function (g9f4xo) {
      if (g9f4xo == 'canvas') {
        var phrzc;return rpqmt5['idx'] == 0x1 ? rpqmt5['isZiYu'] ? (phrzc = sharedCanvas, phrzc['style'] = {}) : phrzc = window['canvas'] : phrzc = window['wx']['createCanvas'](), rpqmt5['idx']++, phrzc;
      } else {
        if (g9f4xo == 'textarea' || g9f4xo == 'input') return rpqmt5['onCreateInput'](g9f4xo);else {
          if (g9f4xo == 'div') {
            var v_ul = rpqmt5['_preCreateElement'](g9f4xo);return v_ul['contains'] = function (prcm85) {
              return null;
            }, v_ul['removeChild'] = function (k_yeun) {}, v_ul;
          } else return rpqmt5['_preCreateElement'](g9f4xo);
        }
      }
    }, rpqmt5['onCreateInput'] = function (fx1i) {
      var rt5mqs = rpqmt5['_preCreateElement'](fx1i);return rt5mqs['focus'] = da3v6l['wxinputFocus'], rt5mqs['blur'] = da3v6l['wxinputblur'], rt5mqs['style'] = {}, rt5mqs['value'] = 0x0, rt5mqs['parentElement'] = {}, rt5mqs['placeholder'] = {}, rt5mqs['type'] = {}, rt5mqs['setColor'] = function (r5ctm) {}, rt5mqs['setType'] = function (ph8zcr) {}, rt5mqs['setFontFace'] = function (d26avl) {}, rt5mqs['addEventListener'] = function (gxwf4) {}, rt5mqs['contains'] = function (yje$0k) {
        return null;
      }, rt5mqs['removeChild'] = function (q5sm7t) {}, rt5mqs;
    }, rpqmt5['createShaderCondition'] = function (k_neuy) {
      var n3yvu = this,
          fw194 = function () {
        var qsr5tm = k_neuy;return n3yvu[k_neuy['replace']('this.', '')];
      };return fw194;
    }, rpqmt5['EnvConfig'] = null, rpqmt5['window'] = null, rpqmt5['_preCreateElement'] = null, rpqmt5['_inited'] = ![], rpqmt5['wxRequest'] = null, rpqmt5['systemInfo'] = null, rpqmt5['version'] = '0.0.1', rpqmt5['isZiYu'] = ![], rpqmt5['isPosMsgYu'] = ![], rpqmt5['parseXMLFromString'] = function (hoxg4) {
      var wf21i9, pcmtr;hoxg4 = hoxg4['replace'](/>\s+</g, '><');try {
        wf21i9 = new window['Parser']['DOMParser']()['parseFromString'](hoxg4, 'text/xml');
      } catch (ke_un) {
        throw '需要引入xml解析库文件';
      }return wf21i9;
    }, rpqmt5['idx'] = 0x1, rpqmt5;
  }(),
      y0_$ = function () {
    function y3nv_u() {}w941xf(y3nv_u, 'laya.wx.mini.MiniImage');var vuyn_ = y3nv_u['prototype'];return vuyn_['_loadImage'] = function (bhpc) {
      var f1xwi9 = this,
          yk_e = ![];bhpc['indexOf']('layaNativeDir/') == -0x1 && (yk_e = !![], bhpc = p8bch['formatURL'](bhpc));if (!enk_yu['getFileInfo'](bhpc)) {
        if (bhpc['indexOf']('http://') != -0x1 || bhpc['indexOf']('https://') != -0x1) enk_yu['downImg'](bhpc, new e0$kyj(y3nv_u, y3nv_u['onDownImgCallBack'], [bhpc, f1xwi9]), bhpc);else y3nv_u['onCreateImage'](bhpc, f1xwi9, !![]);
      } else y3nv_u['onCreateImage'](bhpc, f1xwi9, !yk_e);
    }, y3nv_u['onDownImgCallBack'] = function (dal6, trms5q, cprhz8) {
      if (!cprhz8) y3nv_u['onCreateImage'](dal6, trms5q);else trms5q['onError'](null);
    }, y3nv_u['onCreateImage'] = function (q5trp, st7m5, ne_yku) {
      ne_yku === void 0x0 && (ne_yku = ![]);var hpc8z;if (!ne_yku) {
        var eu0y_ = enk_yu['getFileInfo'](q5trp),
            fx941w = eu0y_['md5'];hpc8z = enk_yu['getFileNativePath'](fx941w);
      } else hpc8z = q5trp;if (st7m5['imgCache'] == null) st7m5['imgCache'] = {};var gobhx4;function r5tmpc() {
        gobhx4['onload'] = null, gobhx4['onerror'] = null, delete st7m5['imgCache'][q5trp];
      };var e3uy = function () {
        r5tmpc(), st7m5['onLoaded'](gobhx4);
      },
          ohczb8 = function () {
        r5tmpc(), st7m5['event']('error', 'Load image failed');
      };st7m5['_type'] == 'nativeimage' ? (gobhx4 = new iw1f9x['window']['Image'](), gobhx4['crossOrigin'] = '', gobhx4['onload'] = e3uy, gobhx4['onerror'] = ohczb8, gobhx4['src'] = hpc8z, st7m5['imgCache'][q5trp] = gobhx4) : new go4bhz['create'](hpc8z, { 'onload': e3uy, 'onerror': ohczb8, 'onCreate': function (hcr8pz) {
          gobhx4 = hcr8pz, st7m5['imgCache'][q5trp] = hcr8pz;
        } });
    }, y3nv_u;
  }(),
      da3v6l = function () {
    function iw9f() {}return w941xf(iw9f, 'laya.wx.mini.MiniInput'), iw9f['_createInputElement'] = function () {
      j$ky0e['_initInput'](j$ky0e['area'] = iw1f9x['createElement']('textarea')), j$ky0e['_initInput'](j$ky0e['input'] = iw1f9x['createElement']('input')), j$ky0e['inputContainer'] = iw1f9x['createElement']('div'), j$ky0e['inputContainer']['style']['position'] = 'absolute', j$ky0e['inputContainer']['style']['zIndex'] = 0x186a0, iw1f9x['container']['appendChild'](j$ky0e['inputContainer']), j$ky0e['inputContainer']['setPos'] = function (uv3nla, y$_ek) {
        j$ky0e['inputContainer']['style']['left'] = uv3nla + 'px', j$ky0e['inputContainer']['style']['top'] = y$_ek + 'px';
      }, ix19['stage']['on']('resize', null, iw9f['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (pqtmr5) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), l2a6di['_soundClass'] = d12if, l2a6di['_musicClass'] = d12if;
    }, iw9f['_onStageResize'] = function () {
      var vn3 = ix19['stage']['_canvasTransform']['identity']();vn3['scale'](iw1f9x['width'] / kynu['canvas']['width'] / uyn_v['getPixelRatio'](), iw1f9x['height'] / kynu['canvas']['height'] / uyn_v['getPixelRatio']());
    }, iw9f['wxinputFocus'] = function (yunv3_) {
      var y$ek_ = j$ky0e['inputElement']['target'];if (y$ek_ && !y$ek_['editable']) return;aunv['window']['wx']['offKeyboardConfirm'](), aunv['window']['wx']['offKeyboardInput'](), aunv['window']['wx']['showKeyboard']({ 'defaultValue': y$ek_['text'], 'maxLength': y$ek_['maxChars'], 'multiple': y$ek_['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (zc8pb) {}, 'fail': function (box4) {} }), aunv['window']['wx']['onKeyboardConfirm'](function (rp8czm) {
        var ghob4z = rp8czm ? rp8czm['value'] : '';y$ek_['text'] = ghob4z, y$ek_['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), aunv['window']['wx']['onKeyboardInput'](function (a63ld) {
        var aln3 = a63ld ? a63ld['value'] : '';if (!y$ek_['multiline']) {
          if (aln3['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }y$ek_['text'] = aln3, y$ek_['event']('input');
      });
    }, iw9f['inputEnter'] = function () {
      j$ky0e['inputElement']['target']['focus'] = ![];
    }, iw9f['wxinputblur'] = function () {
      iw9f['hideKeyboard']();
    }, iw9f['hideKeyboard'] = function () {
      aunv['window']['wx']['offKeyboardConfirm'](), aunv['window']['wx']['offKeyboardInput'](), aunv['window']['wx']['hideKeyboard']({ 'success': function (if2w) {
          console['log']('隐藏键盘');
        }, 'fail': function (t5cpmr) {
          console['log']('隐藏键盘出错:' + (t5cpmr ? t5cpmr['errMsg'] : ''));
        } });
    }, iw9f;
  }(),
      _yv3un = function () {
    function hg8() {}w941xf(hg8, 'laya.wx.mini.MiniLoader');var fw192 = hg8['prototype'];return fw192['load'] = function (oghb, xf91, wi9fx1, u_n3y, pbzhc8) {
      wi9fx1 === void 0x0 && (wi9fx1 = !![]), pbzhc8 === void 0x0 && (pbzhc8 = ![]);var na3l6v = this;na3l6v['_url'] = oghb;if (oghb['indexOf']('data:image') === 0x0) na3l6v['_type'] = xf91 = 'image';else na3l6v['_type'] = xf91 || (xf91 = na3l6v['getTypeFromUrl'](oghb));na3l6v['_cache'] = wi9fx1, na3l6v['_data'] = null;var _kyenu = 'ascii';if (oghb['indexOf']('.fnt') != -0x1) _kyenu = 'utf8';else xf91 == 'arraybuffer' && (_kyenu = '');;var zpmr = b8pzh['getFileExtension'](oghb);if (hg8['_fileTypeArr']['indexOf'](zpmr) != -0x1) aunv['EnvConfig']['load']['call'](this, oghb, xf91, wi9fx1, u_n3y, pbzhc8);else {
        if (!enk_yu['getFileInfo'](oghb)) {
          if (oghb['indexOf']('layaNativeDir/') != -0x1) {
            if (aunv['isZiYu']) {
              var l6dai2 = enk_yu['ziyuFileData'][oghb];na3l6v['onLoaded'](l6dai2);return;
            } else {
              cosnole['log']('read read'), enk_yu['read'](oghb, _kyenu, new e0$kyj(hg8, hg8['onReadNativeCallBack'], [_kyenu, oghb, xf91, wi9fx1, u_n3y, pbzhc8, na3l6v]));return;
            }
          }if (p8bch['rootPath'] == '') var ke0jy = oghb;else ke0jy = oghb['split'](p8bch['rootPath'])[0x0];oghb['indexOf']('http://') != -0x1 || oghb['indexOf']('https://') != -0x1 ? aunv['EnvConfig']['load']['call'](na3l6v, oghb, xf91, wi9fx1, u_n3y, pbzhc8) : enk_yu['readFile'](ke0jy, _kyenu, new e0$kyj(hg8, hg8['onReadNativeCallBack'], [_kyenu, oghb, xf91, wi9fx1, u_n3y, pbzhc8, na3l6v]), oghb);
        } else aunv['EnvConfig']['load']['call'](this, oghb, xf91, wi9fx1, u_n3y, pbzhc8);
      }
    }, fw192['resMgrLoad'] = function (wfdi, k_y0u, o4bxhg, f1w9i, bo4gz, unlav3, _y$ek0) {
      o4bxhg === void 0x0 && (o4bxhg = 0x0), f1w9i === void 0x0 && (f1w9i = ![]), bo4gz === void 0x0 && (bo4gz = ![]), unlav3 === void 0x0 && (unlav3 = 0x0), _y$ek0 === void 0x0 && (_y$ek0 = 0x3), wfdi['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', wfdi), aunv['EnvConfig']['resMgrLoad'](wfdi, (wif1, o4b9x, eyun_3) => {
        hg8['prototype']['resMgrLoadCallBack'](wif1, o4b9x, eyun_3, k_y0u);
      }, o4bxhg, f1w9i, bo4gz, unlav3, _y$ek0);
    }, fw192['resMgrLoadCallBack'] = function (x1i9, uen, pcb8hz, rpzch8) {
      console['log']('buff:::', x1i9, pcb8hz, enk_yu['fileNativeDir'] + '///' + enk_yu['fileListName']), rpzch8(x1i9, uen, pcb8hz);
    }, fw192['clearRes'] = function (zghob, gw9xf4) {
      gw9xf4 === void 0x0 && (gw9xf4 = ![]);var i216dw = this;i216dw['clearRes'](zghob, gw9xf4);var xgf = enk_yu['getFileInfo'](zghob);if (xgf && (zghob['indexOf']('http://') != -0x1 || zghob['indexOf']('https://') != -0x1)) {
        var nyu3v = xgf['md5'],
            ny_ke = enk_yu['getFileNativePath'](nyu3v);enk_yu['remove'](ny_ke);
      }
    }, hg8['onReadNativeCallBack'] = function (y0jk$, ek_$y, mtc, _l3vnu, x9og, zbgh8, zo8g, li, zobg) {
      _l3vnu === void 0x0 && (_l3vnu = !![]), zbgh8 === void 0x0 && (zbgh8 = ![]), li === void 0x0 && (li = 0x0);if (!li) {
        var ad6v2;if (mtc == 'json' || mtc == 'atlas') ad6v2 = aunv['getJson'](zobg['data']);else mtc == 'xml' ? ad6v2 = b8pzh['parseXMLFromString'](zobg['data']) : ad6v2 = zobg['data'];zo8g['onLoaded'](ad6v2), !aunv['isZiYu'] && aunv['isPosMsgYu'] && mtc != 'arraybuffer' && wx['postMessage']({ 'url': ek_$y, 'data': ad6v2, 'isLoad': !![] });
      } else li == 0x1 && aunv['EnvConfig']['load']['call'](zo8g, ek_$y, mtc, _l3vnu, x9og, zbgh8);
    }, yeku0(hg8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), hg8;
  }(),
      enk_yu = function (vaunl3) {
    function ukye_n() {
      ukye_n['__super']['call'](this);;
    }return w941xf(ukye_n, 'laya.wx.mini.MiniFileMgr', vaunl3), ukye_n['isLoadFile'] = function (i2dl6) {
      return ukye_n['_fileTypeArr']['indexOf'](i2dl6) != -0x1 ? !![] : ![];
    }, ukye_n['getFileInfo'] = function (vl_u3) {
      var r58c = vl_u3['split']('?')[0x0],
          r8cp = ukye_n['filesListObj'][r58c];if (r8cp == null) return null;else return r8cp;return null;
    }, ukye_n['onFileUpdate'] = function (ptrq5, av3ul) {
      var a2d6 = ptrq5['split']('/'),
          b8hz = a2d6[a2d6['length'] - 0x1],
          ueny_3 = ukye_n['getFileInfo'](av3ul);if (ueny_3 == null) ukye_n['onSaveFile'](av3ul, b8hz);else {
        if (ueny_3['readyUrl'] != av3ul) ukye_n['remove'](b8hz, av3ul);
      }
    }, ukye_n['exits'] = function (ye0ku, vla2) {
      var hb8cpz = ukye_n['getFileNativePath'](ye0ku);ukye_n['fs']['getFileInfo']({ 'filePath': hb8cpz, 'success': function (v6lan3) {
          vla2 != null && vla2['runWith']([0x0, v6lan3]);
        }, 'fail': function (v3yu_n) {
          vla2 != null && vla2['runWith']([0x1, v3yu_n]);
        } });
    }, ukye_n['read'] = function (nv3y_u, anvl36, b8ph, w1d6) {
      anvl36 === void 0x0 && (anvl36 = 'ascill'), w1d6 === void 0x0 && (w1d6 = '');var nl3v_;w1d6 != '' ? nl3v_ = ukye_n['getFileNativePath'](nv3y_u) : nl3v_ = nv3y_u, ukye_n['fs']['readFile']({ 'filePath': nl3v_, 'encoding': anvl36, 'success': function (d2w1) {
          b8ph != null && b8ph['runWith']([0x0, d2w1]);
        }, 'fail': function (ts7m) {
          if (ts7m && w1d6 != '') ukye_n['down'](w1d6, anvl36, b8ph, w1d6);else b8ph != null && b8ph['runWith']([0x1]);
        } });
    }, ukye_n['readNativeFile'] = function (fw4, $y0ke) {
      ukye_n['fs']['readFile']({ 'filePath': fw4, 'encoding': '', 'success': function (m5qs7) {
          $y0ke != null && $y0ke['runWith']([0x0]);
        }, 'fail': function (ekyu_n) {
          $y0ke != null && $y0ke['runWith']([0x1]);
        } });
    }, ukye_n['down'] = function (di6l2a, nu_kye, k_0yeu, a62d) {
      nu_kye === void 0x0 && (nu_kye = 'ascill'), a62d === void 0x0 && (a62d = '');var bhzoc = ukye_n['getFileNativePath'](a62d),
          yuek_n = ukye_n['wxdown']({ 'url': di6l2a, 'filePath': bhzoc, 'success': function (_y0ke$) {
          if (_y0ke$['statusCode'] === 0xc8) ukye_n['readFile'](_y0ke$['filePath'], nu_kye, k_0yeu, a62d);
        }, 'fail': function (eyuk) {
          k_0yeu != null && k_0yeu['runWith']([0x1, eyuk]);
        } });yuek_n['onProgressUpdate'](function (h8bco) {
        k_0yeu != null && k_0yeu['runWith']([0x2, h8bco['progress']]);
      });
    }, ukye_n['readFile'] = function (w6di21, eukyn_, tqs57m, mpc8zr) {
      eukyn_ === void 0x0 && (eukyn_ = 'ascill'), mpc8zr === void 0x0 && (mpc8zr = ''), ukye_n['fs']['readFile']({ 'filePath': w6di21, 'encoding': eukyn_, 'success': function (x9gwf) {
          if (w6di21['indexOf']('http://') != -0x1 || w6di21['indexOf']('https://') != -0x1) ukye_n['onFileUpdate'](w6di21, mpc8zr);tqs57m != null && tqs57m['runWith']([0x0, x9gwf]);
        }, 'fail': function (lnuav3) {
          if (lnuav3) tqs57m != null && tqs57m['runWith']([0x1, lnuav3]);
        } });
    }, ukye_n['downImg'] = function (ix91fw, b8g, a6lvd2) {
      a6lvd2 === void 0x0 && (a6lvd2 = '');var f2d1i = ukye_n['wxdown']({ 'url': ix91fw, 'success': function (dva3l) {
          dva3l['statusCode'] === 0xc8 && ukye_n['copyFile'](dva3l['tempFilePath'], a6lvd2, b8g);
        }, 'fail': function (a6d3) {
          b8g != null && b8g['runWith']([0x1, a6d3]);
        } });
    }, ukye_n['copyFile'] = function (ogzh4, g8bhoz, hbgz4o) {
      var aid126 = ogzh4['split']('/'),
          c8rzh = aid126[aid126['length'] - 0x1],
          eny_3 = g8bhoz['split']('?')[0x0],
          d3val6 = ukye_n['getFileInfo'](g8bhoz),
          p5m8 = ukye_n['getFileNativePath'](c8rzh);ukye_n['fs']['copyFile']({ 'srcPath': ogzh4, 'destPath': p5m8, 'success': function (i2dfw1) {
          if (!d3val6) ukye_n['onSaveFile'](g8bhoz, c8rzh), hbgz4o != null && hbgz4o['runWith']([0x0]);else {
            if (d3val6['readyUrl'] != g8bhoz) ukye_n['remove'](c8rzh, g8bhoz, hbgz4o);
          }
        }, 'fail': function (uyn_3e) {
          hbgz4o != null && hbgz4o['runWith']([0x1, uyn_3e]);
        } });
    }, ukye_n['getFileNativePath'] = function (gbx4o9) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gbx4o9;
    }, ukye_n['remove'] = function (stqm, rqmt, y$e_0) {
      rqmt === void 0x0 && (rqmt = '');var t5m7sq = ukye_n['getFileInfo'](rqmt),
          ix9w1f = ukye_n['getFileNativePath'](t5m7sq['md5']);ix19['loader']['clearRes'](t5m7sq['readyUrl']), ukye_n['fs']['unlink']({ 'filePath': ix9w1f, 'success': function (s7qm5t) {
          if (rqmt != '') ukye_n['onSaveFile'](rqmt, stqm);y$e_0 != null && y$e_0['runWith']([0x0]);
        }, 'fail': function (pmz8) {} });
    }, ukye_n['onSaveFile'] = function (y3enu_, d26val) {
      var k_yneu = y3enu_['split']('?')[0x0];ukye_n['filesListObj'][k_yneu] = { 'md5': d26val, 'readyUrl': y3enu_ }, ukye_n['fs']['writeFile']({ 'filePath': ukye_n['fileNativeDir'] + '/' + ukye_n['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ukye_n['filesListObj']), 'success': function (al63v) {
          console['log']('写入测试测试成功：', al63v);
        }, 'fail': function (ue_ykn) {
          console['log']('写入测试测试失败：', ue_ykn);
        } });
    }, ukye_n['existDir'] = function (zh8cp, bohg8z) {
      ukye_n['fs']['mkdir']({ 'dirPath': zh8cp, 'success': function (m57s) {
          bohg8z != null && bohg8z['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (n3uav) {
          if (n3uav['errMsg']['indexOf']('file already exists') != -0x1) ukye_n['readSync'](ukye_n['fileListName'], 'utf8', bohg8z);else bohg8z != null && bohg8z['runWith']([0x1, n3uav]);
        } });
    }, ukye_n['readSync'] = function (a3lun, cp8zrm, obgx, tsq5m) {
      cp8zrm === void 0x0 && (cp8zrm = 'ascill'), tsq5m === void 0x0 && (tsq5m = '');var l3nv = ukye_n['getFileNativePath'](a3lun),
          i2dw61;try {
        i2dw61 = ukye_n['fs']['readFileSync'](l3nv), obgx != null && obgx['runWith']([0x0, { 'data': i2dw61 }]);
      } catch (pchz8b) {
        obgx != null && obgx['runWith']([0x1]);
      }
    }, ukye_n['readCache'] = function () {}, ukye_n['writeCache'] = function (g9oxb4) {
      var ohzgb = readyUrl['split']('?')[0x0];ukye_n['filesListObj'][ohzgb] = { 'md5': md5Name, 'readyUrl': readyUrl }, ukye_n['fs']['writeFile']({ 'filePath': ukye_n['fileNativeDir'] + '/' + ukye_n['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ukye_n['filesListObj']), 'success': function (pmzcr8) {}, 'fail': function (xiwf) {} });
    }, ukye_n['setNativeFileDir'] = function (rct5m) {
      ukye_n['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rct5m;
    }, ukye_n['filesListObj'] = {}, ukye_n['fileNativeDir'] = null, ukye_n['fileListName'] = 'layaairfiles.txt', ukye_n['ziyuFileData'] = {}, yeku0(ukye_n, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ukye_n;
  }(fiwd2),
      d12if = function (ey$k0j) {
    function adl26v() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], adl26v['__super']['call'](this), this['_sound'] = adl26v['_createSound']();
    }w941xf(adl26v, 'laya.wx.mini.MiniSound', ey$k0j);var xg9b4 = adl26v['prototype'];return xg9b4['load'] = function (yj0e) {
      var i12fdw = this;yj0e = p8bch['formatURL'](yj0e), this['url'] = yj0e;if (adl26v['_audioCache'][yj0e]) {
        this['event']('complete');return;
      }function prtm5q() {
        if (adl26v['_null'] != undefined) i12fdw['_sound']['onCanplay'](adl26v['_null']), i12fdw['_sound']['onError'](adl26v['_null']);else try {
          i12fdw['_sound']['onCanplay'](null), i12fdw['_sound']['onError'](null), adl26v['_null'] = null;
        } catch ($k0yje) {
          console['warn']('[wxmini] _clearSound:' + $k0yje), i12fdw['_sound']['onCanplay'](hrpz8c), i12fdw['_sound']['onError'](hrpz8c), adl26v['_null'] = hrpz8c;
        }
      }function x4g() {
        prtm5q(), yeukn_['loaded'] = !![], yeukn_['event']('complete'), adl26v['_audioCache'][yeukn_['url']] = yeukn_;
      }function vnlua3(prm8) {
        console['error']('errCode=' + prm8['errCode'] + '  errMsg=' + prm8['errMsg']), prtm5q(), yeukn_['event']('error');
      }function hrpz8c() {}this['_sound']['onCanplay'](x4g), this['_sound']['onError'](vnlua3), this['_sound']['src'] = yj0e;var yeukn_ = this;
    }, xg9b4['play'] = function (h4zbgo, ifw1) {
      h4zbgo === void 0x0 && (h4zbgo = 0x0), ifw1 === void 0x0 && (ifw1 = 0x0);var m57;if (this['url'] == l2a6di['_tMusic']) {
        if (!adl26v['_musicAudio']) adl26v['_musicAudio'] = adl26v['_createSound']();m57 = adl26v['_musicAudio'];
      } else m57 = adl26v['_createSound']();m57['src'] = this['url'];var lv6d = new qprmt5(m57);return lv6d['url'] = this['url'], lv6d['loops'] = ifw1, lv6d['startTime'] = h4zbgo, lv6d['play'](), l2a6di['addChannel'](lv6d), lv6d;
    }, xg9b4['dispose'] = function () {
      var e0k_$ = adl26v['_audioCache'][this['url']];e0k_$ && (e0k_$['src'] = '', delete adl26v['_audioCache'][this['url']]);
    }, _k0$y(0x0, xg9b4, 'duration', function () {
      return this['_sound']['duration'];
    }), adl26v['_createSound'] = function () {
      return adl26v['_id']++, aunv['window']['wx']['createInnerAudioContext']();
    }, adl26v['_musicAudio'] = null, adl26v['_id'] = 0x0, adl26v['_audioCache'] = {}, adl26v['_null'] = undefined, adl26v;
  }(fiwd2),
      qprmt5 = function (a3vdl) {
    function c8zpmr(_y0ku) {
      this['_audio'] = null, this['_onEnd'] = null, c8zpmr['__super']['call'](this), this['_audio'] = _y0ku, this['_onEnd'] = b8pzh['bind'](this['__onEnd'], this), _y0ku['onEnded'](this['_onEnd']);
    }w941xf(c8zpmr, 'laya.wx.mini.MiniSoundChannel', a3vdl);var avd3 = c8zpmr['prototype'];return avd3['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ix19['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, avd3['__onNull'] = function () {}, avd3['play'] = function () {
      this['isStopped'] = ![], l2a6di['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, avd3['stop'] = function () {
      this['isStopped'] = !![], l2a6di['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (c8zpmr['_null'] != undefined) this['_audio']['onEnded'](c8zpmr['_null']);else try {
        this['_audio']['onEnded'](null), c8zpmr['_null'] = null;
      } catch (vl6d2a) {
        console['warn']('[wxmini] stop:' + vl6d2a), this['_audio']['onEnded'](b8pzh['bind'](this['__onNull'], this)), c8zpmr['_null'] = b8pzh['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, avd3['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, avd3['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], l2a6di['addChannel'](this), this['_audio']['play']();
    }, _k0$y(0x0, avd3, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), _k0$y(0x0, avd3, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), _k0$y(0x0, avd3, 'volume', function () {
      return 0x1;
    }, function (al6nv) {}), c8zpmr['_null'] = undefined, c8zpmr;
  }(wgfx94);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var cr5m8p in Laya) {
    var l_3nu = Laya[cr5m8p];l_3nu && l_3nu['__isclass'] && (exports[cr5m8p] = l_3nu);
  }
});