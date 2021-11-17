var c = wx.$o;
(function (window, document, fw41) {
  var _0$ke = fw41['un'],
      w4xf = fw41['uns'],
      qrt = fw41['static'],
      n6l3 = fw41['class'],
      g4bxo9 = fw41['getset'],
      _uy0e = fw41['__newvec'],
      z8crh = laya['utils']['Browser'],
      q5rmts = laya['events']['Event'],
      p8bz = laya['events']['EventDispatcher'],
      bgoh4 = laya['resource']['HTMLImage'],
      gx4hbo = laya['utils']['Handler'],
      ye0_ = laya['display']['Input'],
      i91 = laya['net']['Loader'],
      b4hgx = laya['maths']['Matrix'],
      _y0ke$ = laya['renders']['Render'],
      _kyu = laya['utils']['RunDriver'],
      kenu_ = laya['media']['Sound'],
      k0_uey = laya['media']['SoundChannel'],
      vn3ula = laya['media']['SoundManager'],
      _yuv = laya['display']['Stage'],
      c8zrp = laya['net']['URL'],
      obz8hg = laya['utils']['Utils'],
      gfx9 = function () {
    function iw2d1() {}return n6l3(iw2d1, 'laya.wx.mini.MiniAdpter'), iw2d1['getJson'] = function (uken_) {
      return JSON['parse'](uken_);
    }, iw2d1['init'] = function (wfg9x, ptr5cm) {
      wfg9x === void 0x0 && (wfg9x = ![]), ptr5cm === void 0x0 && (ptr5cm = ![]);if (iw2d1['_inited']) return;iw2d1['window'] = window;if (iw2d1['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;iw2d1['_inited'] = !![], iw2d1['isZiYu'] = ptr5cm, iw2d1['isPosMsgYu'] = wfg9x, iw2d1['EnvConfig'] = {}, !iw2d1['isZiYu'] && (mst5['setNativeFileDir']('/layaairGame'), mst5['existDir'](mst5['fileNativeDir'], gx4hbo['create'](iw2d1, iw2d1['onMkdirCallBack']))), iw2d1['window']['focus'] = function () {}, fw41['getUrlPath'] = function () {}, iw2d1['window']['logtime'] = function (u_n3e) {}, iw2d1['window']['alertTimeLog'] = function (cpbz8) {}, iw2d1['window']['resetShareInfo'] = function () {}, iw2d1['window']['CanvasRenderingContext2D'] = function () {}, iw2d1['window']['CanvasRenderingContext2D']['prototype'] = iw2d1['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], iw2d1['window']['document']['body']['appendChild'] = function () {}, iw2d1['EnvConfig']['pixelRatioInt'] = 0x0, _kyu['getPixelRatio'] = iw2d1['pixelRatio'], iw2d1['_preCreateElement'] = z8crh['createElement'], z8crh['createElement'] = iw2d1['createElement'], _kyu['createShaderCondition'] = iw2d1['createShaderCondition'], obz8hg['parseXMLFromString'] = iw2d1['parseXMLFromString'], ye0_['_createInputElement'] = euy0_['_createInputElement'], iw2d1['EnvConfig']['load'] = i91['prototype']['load'], i91['prototype']['load'] = vl6a3n['prototype']['load'], iw2d1['isZiYu'] && wfg9x && wx['onMessage'](function (tq5srm) {
        tq5srm['isLoad'] && (mst5['ziyuFileData'][tq5srm['url']] = tq5srm['data']);
      });
    }, iw2d1['onMkdirCallBack'] = function (y_3uen, o9bx) {
      if (!y_3uen) mst5['filesListObj'] = JSON['parse'](o9bx['data']);
    }, iw2d1['pixelRatio'] = function () {
      if (!iw2d1['EnvConfig']['pixelRatioInt']) try {
        var w26di = wx['getSystemInfoSync']();return iw2d1['EnvConfig']['pixelRatioInt'] = w26di['pixelRatio'], w26di = w26di, w26di['pixelRatio'];
      } catch (o9f4g) {}return iw2d1['EnvConfig']['pixelRatioInt'];
    }, iw2d1['createElement'] = function (v63a) {
      if (v63a == 'canvas') {
        var wif21d;return iw2d1['idx'] == 0x1 ? iw2d1['isZiYu'] ? (wif21d = sharedCanvas, wif21d['style'] = {}) : wif21d = window['canvas'] : wif21d = window['wx']['createCanvas'](), iw2d1['idx']++, wif21d;
      } else {
        if (v63a == 'textarea' || v63a == 'input') return iw2d1['onCreateInput'](v63a);else {
          if (v63a == 'div') {
            var ohbz8g = iw2d1['_preCreateElement'](v63a);return ohbz8g['contains'] = function (pzhb8c) {
              return null;
            }, ohbz8g['removeChild'] = function (w94xf) {}, ohbz8g;
          } else return iw2d1['_preCreateElement'](v63a);
        }
      }
    }, iw2d1['onCreateInput'] = function (cp8rzh) {
      var vnlau3 = iw2d1['_preCreateElement'](cp8rzh);return vnlau3['focus'] = euy0_['wxinputFocus'], vnlau3['blur'] = euy0_['wxinputblur'], vnlau3['style'] = {}, vnlau3['value'] = 0x0, vnlau3['parentElement'] = {}, vnlau3['placeholder'] = {}, vnlau3['type'] = {}, vnlau3['setColor'] = function (mqp5tr) {}, vnlau3['setType'] = function (bhzo4) {}, vnlau3['setFontFace'] = function (ulvan3) {}, vnlau3['addEventListener'] = function (tmpcr5) {}, vnlau3['contains'] = function (n_kue) {
        return null;
      }, vnlau3['removeChild'] = function (e_k0$) {}, vnlau3;
    }, iw2d1['createShaderCondition'] = function (zphrc) {
      var _3vnlu = this,
          k_yneu = function () {
        var mpz8 = zphrc;return _3vnlu[zphrc['replace']('this.', '')];
      };return k_yneu;
    }, iw2d1['EnvConfig'] = null, iw2d1['window'] = null, iw2d1['_preCreateElement'] = null, iw2d1['_inited'] = ![], iw2d1['wxRequest'] = null, iw2d1['systemInfo'] = null, iw2d1['version'] = '0.0.1', iw2d1['isZiYu'] = ![], iw2d1['isPosMsgYu'] = ![], iw2d1['parseXMLFromString'] = function (mqrpt) {
      var wf194, fxg4o;mqrpt = mqrpt['replace'](/>\s+</g, '><');try {
        wf194 = new window['Parser']['DOMParser']()['parseFromString'](mqrpt, 'text/xml');
      } catch (u3_yn) {
        throw '需要引入xml解析库文件';
      }return wf194;
    }, iw2d1['idx'] = 0x1, iw2d1;
  }(),
      idw612 = function () {
    function i12a6d() {}n6l3(i12a6d, 'laya.wx.mini.MiniImage');var dw12i = i12a6d['prototype'];return dw12i['_loadImage'] = function (_e3u) {
      var uek0y_ = this,
          c5r = ![];_e3u['indexOf']('layaNativeDir/') == -0x1 && (c5r = !![], _e3u = c8zrp['formatURL'](_e3u));if (!mst5['getFileInfo'](_e3u)) {
        if (_e3u['indexOf']('http://') != -0x1 || _e3u['indexOf']('https://') != -0x1) mst5['downImg'](_e3u, new gx4hbo(i12a6d, i12a6d['onDownImgCallBack'], [_e3u, uek0y_]), _e3u);else i12a6d['onCreateImage'](_e3u, uek0y_, !![]);
      } else i12a6d['onCreateImage'](_e3u, uek0y_, !c5r);
    }, i12a6d['onDownImgCallBack'] = function (ku0, m7qt, n_ey3u) {
      if (!n_ey3u) i12a6d['onCreateImage'](ku0, m7qt);else m7qt['onError'](null);
    }, i12a6d['onCreateImage'] = function (f9iw21, yje0k, yn_uek) {
      yn_uek === void 0x0 && (yn_uek = ![]);var c58mp;if (!yn_uek) {
        var rcpm5t = mst5['getFileInfo'](f9iw21),
            ochb = rcpm5t['md5'];c58mp = mst5['getFileNativePath'](ochb);
      } else c58mp = f9iw21;if (yje0k['imgCache'] == null) yje0k['imgCache'] = {};var m75tqs;function hzo4g() {
        m75tqs['onload'] = null, m75tqs['onerror'] = null, delete yje0k['imgCache'][f9iw21];
      };var g9x4w = function () {
        hzo4g(), yje0k['onLoaded'](m75tqs);
      },
          v3na6l = function () {
        hzo4g(), yje0k['event']('error', 'Load image failed');
      };yje0k['_type'] == 'nativeimage' ? (m75tqs = new z8crh['window']['Image'](), m75tqs['crossOrigin'] = '', m75tqs['onload'] = g9x4w, m75tqs['onerror'] = v3na6l, m75tqs['src'] = c58mp, yje0k['imgCache'][f9iw21] = m75tqs) : new bgoh4['create'](c58mp, { 'onload': g9x4w, 'onerror': v3na6l, 'onCreate': function (bcph) {
          m75tqs = bcph, yje0k['imgCache'][f9iw21] = bcph;
        } });
    }, i12a6d;
  }(),
      euy0_ = function () {
    function vln3_() {}return n6l3(vln3_, 'laya.wx.mini.MiniInput'), vln3_['_createInputElement'] = function () {
      ye0_['_initInput'](ye0_['area'] = z8crh['createElement']('textarea')), ye0_['_initInput'](ye0_['input'] = z8crh['createElement']('input')), ye0_['inputContainer'] = z8crh['createElement']('div'), ye0_['inputContainer']['style']['position'] = 'absolute', ye0_['inputContainer']['style']['zIndex'] = 0x186a0, z8crh['container']['appendChild'](ye0_['inputContainer']), ye0_['inputContainer']['setPos'] = function (gf, bcozh) {
        ye0_['inputContainer']['style']['left'] = gf + 'px', ye0_['inputContainer']['style']['top'] = bcozh + 'px';
      }, fw41['stage']['on']('resize', null, vln3_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (lnvu_3) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), vn3ula['_soundClass'] = g8boz, vn3ula['_musicClass'] = g8boz;
    }, vln3_['_onStageResize'] = function () {
      var qrptm5 = fw41['stage']['_canvasTransform']['identity']();qrptm5['scale'](z8crh['width'] / _y0ke$['canvas']['width'] / _kyu['getPixelRatio'](), z8crh['height'] / _y0ke$['canvas']['height'] / _kyu['getPixelRatio']());
    }, vln3_['wxinputFocus'] = function (b8hcz) {
      var avd6l = ye0_['inputElement']['target'];if (avd6l && !avd6l['editable']) return;gfx9['window']['wx']['offKeyboardConfirm'](), gfx9['window']['wx']['offKeyboardInput'](), gfx9['window']['wx']['showKeyboard']({ 'defaultValue': avd6l['text'], 'maxLength': avd6l['maxChars'], 'multiple': avd6l['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (fo49gx) {}, 'fail': function (dai6) {} }), gfx9['window']['wx']['onKeyboardConfirm'](function (lva2d) {
        var tcrmp = lva2d ? lva2d['value'] : '';avd6l['text'] = tcrmp, avd6l['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), gfx9['window']['wx']['onKeyboardInput'](function (mqr) {
        var lid26a = mqr ? mqr['value'] : '';if (!avd6l['multiline']) {
          if (lid26a['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }avd6l['text'] = lid26a, avd6l['event']('input');
      });
    }, vln3_['inputEnter'] = function () {
      ye0_['inputElement']['target']['focus'] = ![];
    }, vln3_['wxinputblur'] = function () {
      vln3_['hideKeyboard']();
    }, vln3_['hideKeyboard'] = function () {
      gfx9['window']['wx']['offKeyboardConfirm'](), gfx9['window']['wx']['offKeyboardInput'](), gfx9['window']['wx']['hideKeyboard']({ 'success': function (e_0kuy) {
          console['log']('隐藏键盘');
        }, 'fail': function ($kje0y) {
          console['log']('隐藏键盘出错:' + ($kje0y ? $kje0y['errMsg'] : ''));
        } });
    }, vln3_;
  }(),
      vl6a3n = function () {
    function f21() {}n6l3(f21, 'laya.wx.mini.MiniLoader');var d162ia = f21['prototype'];return d162ia['load'] = function (tprmc, rtpmc5, vlad63, yjek$0, o9gf4x) {
      vlad63 === void 0x0 && (vlad63 = !![]), o9gf4x === void 0x0 && (o9gf4x = ![]);var f9w4gx = this;f9w4gx['_url'] = tprmc;if (tprmc['indexOf']('data:image') === 0x0) f9w4gx['_type'] = rtpmc5 = 'image';else f9w4gx['_type'] = rtpmc5 || (rtpmc5 = f9w4gx['getTypeFromUrl'](tprmc));f9w4gx['_cache'] = vlad63, f9w4gx['_data'] = null;var t7qms = 'ascii';if (tprmc['indexOf']('.fnt') != -0x1) t7qms = 'utf8';else rtpmc5 == 'arraybuffer' && (t7qms = '');;var hpb = obz8hg['getFileExtension'](tprmc);if (f21['_fileTypeArr']['indexOf'](hpb) != -0x1) gfx9['EnvConfig']['load']['call'](this, tprmc, rtpmc5, vlad63, yjek$0, o9gf4x);else {
        if (!mst5['getFileInfo'](tprmc)) {
          if (tprmc['indexOf']('layaNativeDir/') != -0x1) {
            if (gfx9['isZiYu']) {
              var x49wgf = mst5['ziyuFileData'][tprmc];f9w4gx['onLoaded'](x49wgf);return;
            } else {
              cosnole['log']('read read'), mst5['read'](tprmc, t7qms, new gx4hbo(f21, f21['onReadNativeCallBack'], [t7qms, tprmc, rtpmc5, vlad63, yjek$0, o9gf4x, f9w4gx]));return;
            }
          }if (c8zrp['rootPath'] == '') var euyn3_ = tprmc;else euyn3_ = tprmc['split'](c8zrp['rootPath'])[0x0];tprmc['indexOf']('http://') != -0x1 || tprmc['indexOf']('https://') != -0x1 ? gfx9['EnvConfig']['load']['call'](f9w4gx, tprmc, rtpmc5, vlad63, yjek$0, o9gf4x) : mst5['readFile'](euyn3_, t7qms, new gx4hbo(f21, f21['onReadNativeCallBack'], [t7qms, tprmc, rtpmc5, vlad63, yjek$0, o9gf4x, f9w4gx]), tprmc);
        } else gfx9['EnvConfig']['load']['call'](this, tprmc, rtpmc5, vlad63, yjek$0, o9gf4x);
      }
    }, d162ia['resMgrLoad'] = function (ld3a6v, e0_uy, pmrc8, v_u3ny, b4gzho, dia26l, nav3ul) {
      pmrc8 === void 0x0 && (pmrc8 = 0x0), v_u3ny === void 0x0 && (v_u3ny = ![]), b4gzho === void 0x0 && (b4gzho = ![]), dia26l === void 0x0 && (dia26l = 0x0), nav3ul === void 0x0 && (nav3ul = 0x3), ld3a6v['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ld3a6v), gfx9['EnvConfig']['resMgrLoad'](ld3a6v, (rcp8m5, wi216d, gbx49o) => {
        f21['prototype']['resMgrLoadCallBack'](rcp8m5, wi216d, gbx49o, e0_uy);
      }, pmrc8, v_u3ny, b4gzho, dia26l, nav3ul);
    }, d162ia['resMgrLoadCallBack'] = function (uyk_e, nu_3yv, pcmrz8, n6al3v) {
      console['log']('buff:::', uyk_e, pcmrz8, mst5['fileNativeDir'] + '///' + mst5['fileListName']), n6al3v(uyk_e, nu_3yv, pcmrz8);
    }, d162ia['clearRes'] = function (ocbhz, cm8rp5) {
      cm8rp5 === void 0x0 && (cm8rp5 = ![]);var q7s5tm = this;q7s5tm['clearRes'](ocbhz, cm8rp5);var ye0k_ = mst5['getFileInfo'](ocbhz);if (ye0k_ && (ocbhz['indexOf']('http://') != -0x1 || ocbhz['indexOf']('https://') != -0x1)) {
        var i6wd21 = ye0k_['md5'],
            pz8hcb = mst5['getFileNativePath'](i6wd21);mst5['remove'](pz8hcb);
      }
    }, f21['onReadNativeCallBack'] = function (ho8bcz, la62, mtq5rp, un3ey_, mt7sq, v3a6dl, hcz8, ekyu_0, i26ld) {
      un3ey_ === void 0x0 && (un3ey_ = !![]), v3a6dl === void 0x0 && (v3a6dl = ![]), ekyu_0 === void 0x0 && (ekyu_0 = 0x0);if (!ekyu_0) {
        var ghoz4;if (mtq5rp == 'json' || mtq5rp == 'atlas') ghoz4 = gfx9['getJson'](i26ld['data']);else mtq5rp == 'xml' ? ghoz4 = obz8hg['parseXMLFromString'](i26ld['data']) : ghoz4 = i26ld['data'];hcz8['onLoaded'](ghoz4), !gfx9['isZiYu'] && gfx9['isPosMsgYu'] && mtq5rp != 'arraybuffer' && wx['postMessage']({ 'url': la62, 'data': ghoz4, 'isLoad': !![] });
      } else ekyu_0 == 0x1 && gfx9['EnvConfig']['load']['call'](hcz8, la62, mtq5rp, un3ey_, mt7sq, v3a6dl);
    }, qrt(f21, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), f21;
  }(),
      mst5 = function (r8zch) {
    function ue3n_y() {
      ue3n_y['__super']['call'](this);;
    }return n6l3(ue3n_y, 'laya.wx.mini.MiniFileMgr', r8zch), ue3n_y['isLoadFile'] = function (xf9iw1) {
      return ue3n_y['_fileTypeArr']['indexOf'](xf9iw1) != -0x1 ? !![] : ![];
    }, ue3n_y['getFileInfo'] = function (dvl62) {
      var mr85c = dvl62['split']('?')[0x0],
          zhg4ob = ue3n_y['filesListObj'][mr85c];if (zhg4ob == null) return null;else return zhg4ob;return null;
    }, ue3n_y['onFileUpdate'] = function (cmt, e_nyku) {
      var cohz8b = cmt['split']('/'),
          vad3l = cohz8b[cohz8b['length'] - 0x1],
          x1i9 = ue3n_y['getFileInfo'](e_nyku);if (x1i9 == null) ue3n_y['onSaveFile'](e_nyku, vad3l);else {
        if (x1i9['readyUrl'] != e_nyku) ue3n_y['remove'](vad3l, e_nyku);
      }
    }, ue3n_y['exits'] = function (au3nlv, if912w) {
      var fw12d = ue3n_y['getFileNativePath'](au3nlv);ue3n_y['fs']['getFileInfo']({ 'filePath': fw12d, 'success': function (v3_uny) {
          if912w != null && if912w['runWith']([0x0, v3_uny]);
        }, 'fail': function (nv_3lu) {
          if912w != null && if912w['runWith']([0x1, nv_3lu]);
        } });
    }, ue3n_y['read'] = function (gxf49, pr58c, w9xi, gx4of9) {
      pr58c === void 0x0 && (pr58c = 'ascill'), gx4of9 === void 0x0 && (gx4of9 = '');var ghxob;gx4of9 != '' ? ghxob = ue3n_y['getFileNativePath'](gxf49) : ghxob = gxf49, ue3n_y['fs']['readFile']({ 'filePath': ghxob, 'encoding': pr58c, 'success': function (bzho8c) {
          w9xi != null && w9xi['runWith']([0x0, bzho8c]);
        }, 'fail': function (czrh8) {
          if (czrh8 && gx4of9 != '') ue3n_y['down'](gx4of9, pr58c, w9xi, gx4of9);else w9xi != null && w9xi['runWith']([0x1]);
        } });
    }, ue3n_y['readNativeFile'] = function (_vnu3, hzo4bg) {
      ue3n_y['fs']['readFile']({ 'filePath': _vnu3, 'encoding': '', 'success': function (tqm7) {
          hzo4bg != null && hzo4bg['runWith']([0x0]);
        }, 'fail': function (bp8zh) {
          hzo4bg != null && hzo4bg['runWith']([0x1]);
        } });
    }, ue3n_y['down'] = function (fx941w, rcz8mp, f1d, gh4xbo) {
      rcz8mp === void 0x0 && (rcz8mp = 'ascill'), gh4xbo === void 0x0 && (gh4xbo = '');var o4xghb = ue3n_y['getFileNativePath'](gh4xbo),
          dal3 = ue3n_y['wxdown']({ 'url': fx941w, 'filePath': o4xghb, 'success': function (fi921w) {
          if (fi921w['statusCode'] === 0xc8) ue3n_y['readFile'](fi921w['filePath'], rcz8mp, f1d, gh4xbo);
        }, 'fail': function (lun3a) {
          f1d != null && f1d['runWith']([0x1, lun3a]);
        } });dal3['onProgressUpdate'](function (rpmq5t) {
        f1d != null && f1d['runWith']([0x2, rpmq5t['progress']]);
      });
    }, ue3n_y['readFile'] = function (z8rcph, bphzc, m7tq5s, la2id6) {
      bphzc === void 0x0 && (bphzc = 'ascill'), la2id6 === void 0x0 && (la2id6 = ''), ue3n_y['fs']['readFile']({ 'filePath': z8rcph, 'encoding': bphzc, 'success': function (q5ms7) {
          if (z8rcph['indexOf']('http://') != -0x1 || z8rcph['indexOf']('https://') != -0x1) ue3n_y['onFileUpdate'](z8rcph, la2id6);m7tq5s != null && m7tq5s['runWith']([0x0, q5ms7]);
        }, 'fail': function (bhx4go) {
          if (bhx4go) m7tq5s != null && m7tq5s['runWith']([0x1, bhx4go]);
        } });
    }, ue3n_y['downImg'] = function (rc8pzh, qmt7s5, k$e0jy) {
      k$e0jy === void 0x0 && (k$e0jy = '');var fg94ox = ue3n_y['wxdown']({ 'url': rc8pzh, 'success': function (zcpr) {
          zcpr['statusCode'] === 0xc8 && ue3n_y['copyFile'](zcpr['tempFilePath'], k$e0jy, qmt7s5);
        }, 'fail': function (ogz) {
          qmt7s5 != null && qmt7s5['runWith']([0x1, ogz]);
        } });
    }, ue3n_y['copyFile'] = function (ldv36, e_ky0, pt5) {
      var mr5cp = ldv36['split']('/'),
          zhb4og = mr5cp[mr5cp['length'] - 0x1],
          euyn_k = e_ky0['split']('?')[0x0],
          l2vd6 = ue3n_y['getFileInfo'](e_ky0),
          fx9iw = ue3n_y['getFileNativePath'](zhb4og);ue3n_y['fs']['copyFile']({ 'srcPath': ldv36, 'destPath': fx9iw, 'success': function (pctr) {
          if (!l2vd6) ue3n_y['onSaveFile'](e_ky0, zhb4og), pt5 != null && pt5['runWith']([0x0]);else {
            if (l2vd6['readyUrl'] != e_ky0) ue3n_y['remove'](zhb4og, e_ky0, pt5);
          }
        }, 'fail': function (lunav3) {
          pt5 != null && pt5['runWith']([0x1, lunav3]);
        } });
    }, ue3n_y['getFileNativePath'] = function (stmrq5) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + stmrq5;
    }, ue3n_y['remove'] = function (wi, _enkyu, uk0_ye) {
      _enkyu === void 0x0 && (_enkyu = '');var chpb8 = ue3n_y['getFileInfo'](_enkyu),
          d1i2a = ue3n_y['getFileNativePath'](chpb8['md5']);fw41['loader']['clearRes'](chpb8['readyUrl']), ue3n_y['fs']['unlink']({ 'filePath': d1i2a, 'success': function (zpcr8h) {
          if (_enkyu != '') ue3n_y['onSaveFile'](_enkyu, wi);uk0_ye != null && uk0_ye['runWith']([0x0]);
        }, 'fail': function (o9g4f) {} });
    }, ue3n_y['onSaveFile'] = function (m8rz, gzbo4) {
      var mz8c = m8rz['split']('?')[0x0];ue3n_y['filesListObj'][mz8c] = { 'md5': gzbo4, 'readyUrl': m8rz }, ue3n_y['fs']['writeFile']({ 'filePath': ue3n_y['fileNativeDir'] + '/' + ue3n_y['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ue3n_y['filesListObj']), 'success': function (czphb) {
          console['log']('写入测试测试成功：', czphb);
        }, 'fail': function (w126d) {
          console['log']('写入测试测试失败：', w126d);
        } });
    }, ue3n_y['existDir'] = function (xgo94b, d12iw) {
      ue3n_y['fs']['mkdir']({ 'dirPath': xgo94b, 'success': function (aulvn3) {
          d12iw != null && d12iw['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (choz8b) {
          if (choz8b['errMsg']['indexOf']('file already exists') != -0x1) ue3n_y['readSync'](ue3n_y['fileListName'], 'utf8', d12iw);else d12iw != null && d12iw['runWith']([0x1, choz8b]);
        } });
    }, ue3n_y['readSync'] = function (ulv3na, t5rqm, enuy_k, y_3vn) {
      t5rqm === void 0x0 && (t5rqm = 'ascill'), y_3vn === void 0x0 && (y_3vn = '');var f9i1xw = ue3n_y['getFileNativePath'](ulv3na),
          g9wf4x;try {
        g9wf4x = ue3n_y['fs']['readFileSync'](f9i1xw), enuy_k != null && enuy_k['runWith']([0x0, { 'data': g9wf4x }]);
      } catch (xohb) {
        enuy_k != null && enuy_k['runWith']([0x1]);
      }
    }, ue3n_y['readCache'] = function () {}, ue3n_y['writeCache'] = function (pmrc5) {
      var l2da6 = readyUrl['split']('?')[0x0];ue3n_y['filesListObj'][l2da6] = { 'md5': md5Name, 'readyUrl': readyUrl }, ue3n_y['fs']['writeFile']({ 'filePath': ue3n_y['fileNativeDir'] + '/' + ue3n_y['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ue3n_y['filesListObj']), 'success': function (rzpm) {}, 'fail': function (r5qmpt) {} });
    }, ue3n_y['setNativeFileDir'] = function (wd1fi2) {
      ue3n_y['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + wd1fi2;
    }, ue3n_y['filesListObj'] = {}, ue3n_y['fileNativeDir'] = null, ue3n_y['fileListName'] = 'layaairfiles.txt', ue3n_y['ziyuFileData'] = {}, qrt(ue3n_y, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ue3n_y;
  }(p8bz),
      g8boz = function (z8pcb) {
    function q5pmr() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], q5pmr['__super']['call'](this), this['_sound'] = q5pmr['_createSound']();
    }n6l3(q5pmr, 'laya.wx.mini.MiniSound', z8pcb);var gzbo8h = q5pmr['prototype'];return gzbo8h['load'] = function (xwg4) {
      var z8gobh = this;xwg4 = c8zrp['formatURL'](xwg4), this['url'] = xwg4;if (q5pmr['_audioCache'][xwg4]) {
        this['event']('complete');return;
      }function _un3() {
        if (q5pmr['_null'] != undefined) z8gobh['_sound']['onCanplay'](q5pmr['_null']), z8gobh['_sound']['onError'](q5pmr['_null']);else try {
          z8gobh['_sound']['onCanplay'](null), z8gobh['_sound']['onError'](null), q5pmr['_null'] = null;
        } catch (aldv62) {
          console['warn']('[wxmini] _clearSound:' + aldv62), z8gobh['_sound']['onCanplay'](unvl_3), z8gobh['_sound']['onError'](unvl_3), q5pmr['_null'] = unvl_3;
        }
      }function u_3nlv() {
        _un3(), bzcph['loaded'] = !![], bzcph['event']('complete'), q5pmr['_audioCache'][bzcph['url']] = bzcph;
      }function c8mzr(i162) {
        console['error']('errCode=' + i162['errCode'] + '  errMsg=' + i162['errMsg']), _un3(), bzcph['event']('error');
      }function unvl_3() {}this['_sound']['onCanplay'](u_3nlv), this['_sound']['onError'](c8mzr), this['_sound']['src'] = xwg4;var bzcph = this;
    }, gzbo8h['play'] = function (o4fxg9, zgohb4) {
      o4fxg9 === void 0x0 && (o4fxg9 = 0x0), zgohb4 === void 0x0 && (zgohb4 = 0x0);var av2dl;if (this['url'] == vn3ula['_tMusic']) {
        if (!q5pmr['_musicAudio']) q5pmr['_musicAudio'] = q5pmr['_createSound']();av2dl = q5pmr['_musicAudio'];
      } else av2dl = q5pmr['_createSound']();av2dl['src'] = this['url'];var rcptm = new yej0k$(av2dl);return rcptm['url'] = this['url'], rcptm['loops'] = zgohb4, rcptm['startTime'] = o4fxg9, rcptm['play'](), vn3ula['addChannel'](rcptm), rcptm;
    }, gzbo8h['dispose'] = function () {
      var wfx41 = q5pmr['_audioCache'][this['url']];wfx41 && (wfx41['src'] = '', delete q5pmr['_audioCache'][this['url']]);
    }, g4bxo9(0x0, gzbo8h, 'duration', function () {
      return this['_sound']['duration'];
    }), q5pmr['_createSound'] = function () {
      return q5pmr['_id']++, gfx9['window']['wx']['createInnerAudioContext']();
    }, q5pmr['_musicAudio'] = null, q5pmr['_id'] = 0x0, q5pmr['_audioCache'] = {}, q5pmr['_null'] = undefined, q5pmr;
  }(p8bz),
      yej0k$ = function (m5r8) {
    function $e0yj(ohbx) {
      this['_audio'] = null, this['_onEnd'] = null, $e0yj['__super']['call'](this), this['_audio'] = ohbx, this['_onEnd'] = obz8hg['bind'](this['__onEnd'], this), ohbx['onEnded'](this['_onEnd']);
    }n6l3($e0yj, 'laya.wx.mini.MiniSoundChannel', m5r8);var rmzp8c = $e0yj['prototype'];return rmzp8c['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (fw41['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, rmzp8c['__onNull'] = function () {}, rmzp8c['play'] = function () {
      this['isStopped'] = ![], vn3ula['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, rmzp8c['stop'] = function () {
      this['isStopped'] = !![], vn3ula['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if ($e0yj['_null'] != undefined) this['_audio']['onEnded']($e0yj['_null']);else try {
        this['_audio']['onEnded'](null), $e0yj['_null'] = null;
      } catch (yke0u_) {
        console['warn']('[wxmini] stop:' + yke0u_), this['_audio']['onEnded'](obz8hg['bind'](this['__onNull'], this)), $e0yj['_null'] = obz8hg['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, rmzp8c['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, rmzp8c['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], vn3ula['addChannel'](this), this['_audio']['play']();
    }, g4bxo9(0x0, rmzp8c, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), g4bxo9(0x0, rmzp8c, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), g4bxo9(0x0, rmzp8c, 'volume', function () {
      return 0x1;
    }, function (uv_y) {}), $e0yj['_null'] = undefined, $e0yj;
  }(k0_uey);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var qts5mr in Laya) {
    var zpcrh = Laya[qts5mr];zpcrh && zpcrh['__isclass'] && (exports[qts5mr] = zpcrh);
  }
});