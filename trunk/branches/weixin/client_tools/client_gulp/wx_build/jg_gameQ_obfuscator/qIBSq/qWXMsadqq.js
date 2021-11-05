var g = wx.$Q;
(function (window, document, lpag) {
  var c_d$z = lpag['un'],
      c$zd = lpag['uns'],
      hm4n1 = lpag['static'],
      u8jsw = lpag['class'],
      sju8wq = lpag['getset'],
      afl0gp = lpag['__newvec'],
      emn69 = laya['utils']['Browser'],
      zdtckr = laya['events']['Event'],
      drky = laya['events']['EventDispatcher'],
      _$9eno = laya['resource']['HTMLImage'],
      _e6on9 = laya['utils']['Handler'],
      wuqj = laya['display']['Input'],
      f5203x = laya['net']['Loader'],
      lgpfab = laya['maths']['Matrix'],
      c$r = laya['renders']['Render'],
      w8ujsh = laya['utils']['RunDriver'],
      m46hn1 = laya['media']['Sound'],
      zd$_re = laya['media']['SoundChannel'],
      e_d$ = laya['media']['SoundManager'],
      o69_ne = laya['display']['Stage'],
      x2p03f = laya['net']['URL'],
      jh1m84 = laya['utils']['Utils'],
      h681 = function () {
    function g0fal() {}return u8jsw(g0fal, 'laya.wx.mini.MiniAdpter'), g0fal['getJson'] = function (rydtck) {
      return JSON['parse'](rydtck);
    }, g0fal['init'] = function (blgpai, $n9o_) {
      blgpai === void 0x0 && (blgpai = ![]), $n9o_ === void 0x0 && ($n9o_ = ![]);if (g0fal['_inited']) return;g0fal['window'] = window;if (g0fal['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;g0fal['_inited'] = !![], g0fal['isZiYu'] = $n9o_, g0fal['isPosMsgYu'] = blgpai, g0fal['EnvConfig'] = {}, !g0fal['isZiYu'] && (k35y2['setNativeFileDir']('/layaairGame'), k35y2['existDir'](k35y2['fileNativeDir'], _e6on9['create'](g0fal, g0fal['onMkdirCallBack']))), g0fal['window']['focus'] = function () {}, lpag['getUrlPath'] = function () {}, g0fal['window']['logtime'] = function (z_e) {}, g0fal['window']['alertTimeLog'] = function (_rdez) {}, g0fal['window']['resetShareInfo'] = function () {}, g0fal['window']['CanvasRenderingContext2D'] = function () {}, g0fal['window']['CanvasRenderingContext2D']['prototype'] = g0fal['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], g0fal['window']['document']['body']['appendChild'] = function () {}, g0fal['EnvConfig']['pixelRatioInt'] = 0x0, w8ujsh['getPixelRatio'] = g0fal['pixelRatio'], g0fal['_preCreateElement'] = emn69['createElement'], emn69['createElement'] = g0fal['createElement'], w8ujsh['createShaderCondition'] = g0fal['createShaderCondition'], jh1m84['parseXMLFromString'] = g0fal['parseXMLFromString'], wuqj['_createInputElement'] = hwj8['_createInputElement'], g0fal['EnvConfig']['load'] = f5203x['prototype']['load'], f5203x['prototype']['load'] = h841jm['prototype']['load'], g0fal['isZiYu'] && blgpai && wx['onMessage'](function (k5y3x2) {
        k5y3x2['isLoad'] && (k35y2['ziyuFileData'][k5y3x2['url']] = k5y3x2['data']);
      });
    }, g0fal['onMkdirCallBack'] = function (glipab, ez$_d) {
      if (!glipab) k35y2['filesListObj'] = JSON['parse'](ez$_d['data']);
    }, g0fal['pixelRatio'] = function () {
      if (!g0fal['EnvConfig']['pixelRatioInt']) try {
        var bafg = wx['getSystemInfoSync']();return g0fal['EnvConfig']['pixelRatioInt'] = bafg['pixelRatio'], bafg = bafg, bafg['pixelRatio'];
      } catch (l20) {}return g0fal['EnvConfig']['pixelRatioInt'];
    }, g0fal['createElement'] = function (y35k2x) {
      if (y35k2x == 'canvas') {
        var $re_z9;return g0fal['idx'] == 0x1 ? g0fal['isZiYu'] ? ($re_z9 = sharedCanvas, $re_z9['style'] = {}) : $re_z9 = window['canvas'] : $re_z9 = window['wx']['createCanvas'](), g0fal['idx']++, $re_z9;
      } else {
        if (y35k2x == 'textarea' || y35k2x == 'input') return g0fal['onCreateInput'](y35k2x);else {
          if (y35k2x == 'div') {
            var o16m = g0fal['_preCreateElement'](y35k2x);return o16m['contains'] = function (afpl02) {
              return null;
            }, o16m['removeChild'] = function (bgvail) {}, o16m;
          } else return g0fal['_preCreateElement'](y35k2x);
        }
      }
    }, g0fal['onCreateInput'] = function (_eo9n) {
      var gali = g0fal['_preCreateElement'](_eo9n);return gali['focus'] = hwj8['wxinputFocus'], gali['blur'] = hwj8['wxinputblur'], gali['style'] = {}, gali['value'] = 0x0, gali['parentElement'] = {}, gali['placeholder'] = {}, gali['type'] = {}, gali['setColor'] = function (fpg0la) {}, gali['setType'] = function (ycdktr) {}, gali['setFontFace'] = function (r$t) {}, gali['addEventListener'] = function (rzcd$_) {}, gali['contains'] = function (aigb7) {
        return null;
      }, gali['removeChild'] = function (p0ga) {}, gali;
    }, g0fal['createShaderCondition'] = function (q8wsuj) {
      var qw8uj = this,
          s8j1 = function () {
        var d$_e = q8wsuj;return qw8uj[q8wsuj['replace']('this.', '')];
      };return s8j1;
    }, g0fal['EnvConfig'] = null, g0fal['window'] = null, g0fal['_preCreateElement'] = null, g0fal['_inited'] = ![], g0fal['wxRequest'] = null, g0fal['systemInfo'] = null, g0fal['version'] = '0.0.1', g0fal['isZiYu'] = ![], g0fal['isPosMsgYu'] = ![], g0fal['parseXMLFromString'] = function (lpgbf) {
      var m14h6, sw8u;lpgbf = lpgbf['replace'](/>\s+</g, '><');try {
        m14h6 = new window['Parser']['DOMParser']()['parseFromString'](lpgbf, 'text/xml');
      } catch (ykr) {
        throw '需要引入xml解析库文件';
      }return m14h6;
    }, g0fal['idx'] = 0x1, g0fal;
  }(),
      mno16 = function () {
    function albpg() {}u8jsw(albpg, 'laya.wx.mini.MiniImage');var gl0apf = albpg['prototype'];return gl0apf['_loadImage'] = function (sh184) {
      var dz_e$ = this,
          ligbpa = ![];sh184['indexOf']('layaNativeDir/') == -0x1 && (ligbpa = !![], sh184 = x2p03f['formatURL'](sh184));if (!k35y2['getFileInfo'](sh184)) {
        if (sh184['indexOf']('http://') != -0x1 || sh184['indexOf']('https://') != -0x1) k35y2['downImg'](sh184, new _e6on9(albpg, albpg['onDownImgCallBack'], [sh184, dz_e$]), sh184);else albpg['onCreateImage'](sh184, dz_e$, !![]);
      } else albpg['onCreateImage'](sh184, dz_e$, !ligbpa);
    }, albpg['onDownImgCallBack'] = function (abgvil, u8qjs, yx23) {
      if (!yx23) albpg['onCreateImage'](abgvil, u8qjs);else u8qjs['onError'](null);
    }, albpg['onCreateImage'] = function (fpx320, _e9no6, p0a2fl) {
      p0a2fl === void 0x0 && (p0a2fl = ![]);var qs8jwu;if (!p0a2fl) {
        var rzdt$c = k35y2['getFileInfo'](fpx320),
            rze_$ = rzdt$c['md5'];qs8jwu = k35y2['getFileNativePath'](rze_$);
      } else qs8jwu = fpx320;if (_e9no6['imgCache'] == null) _e9no6['imgCache'] = {};var qjsu;function er9_z() {
        qjsu['onload'] = null, qjsu['onerror'] = null, delete _e9no6['imgCache'][fpx320];
      };var suj8wh = function () {
        er9_z(), _e9no6['onLoaded'](qjsu);
      },
          juqs = function () {
        er9_z(), _e9no6['event']('error', 'Load image failed');
      };_e9no6['_type'] == 'nativeimage' ? (qjsu = new emn69['window']['Image'](), qjsu['crossOrigin'] = '', qjsu['onload'] = suj8wh, qjsu['onerror'] = juqs, qjsu['src'] = qs8jwu, _e9no6['imgCache'][fpx320] = qjsu) : new _$9eno['create'](qs8jwu, { 'onload': suj8wh, 'onerror': juqs, 'onCreate': function (m6nh1) {
          qjsu = m6nh1, _e9no6['imgCache'][fpx320] = m6nh1;
        } });
    }, albpg;
  }(),
      hwj8 = function () {
    function algp0f() {}return u8jsw(algp0f, 'laya.wx.mini.MiniInput'), algp0f['_createInputElement'] = function () {
      wuqj['_initInput'](wuqj['area'] = emn69['createElement']('textarea')), wuqj['_initInput'](wuqj['input'] = emn69['createElement']('input')), wuqj['inputContainer'] = emn69['createElement']('div'), wuqj['inputContainer']['style']['position'] = 'absolute', wuqj['inputContainer']['style']['zIndex'] = 0x186a0, emn69['container']['appendChild'](wuqj['inputContainer']), wuqj['inputContainer']['setPos'] = function (y52k, cdr_z$) {
        wuqj['inputContainer']['style']['left'] = y52k + 'px', wuqj['inputContainer']['style']['top'] = cdr_z$ + 'px';
      }, lpag['stage']['on']('resize', null, algp0f['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fp32x0) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), e_d$['_soundClass'] = su8hwj, e_d$['_musicClass'] = su8hwj;
    }, algp0f['_onStageResize'] = function () {
      var d5ykct = lpag['stage']['_canvasTransform']['identity']();d5ykct['scale'](emn69['width'] / c$r['canvas']['width'] / w8ujsh['getPixelRatio'](), emn69['height'] / c$r['canvas']['height'] / w8ujsh['getPixelRatio']());
    }, algp0f['wxinputFocus'] = function (tcdkry) {
      var ws8q = wuqj['inputElement']['target'];if (ws8q && !ws8q['editable']) return;h681['window']['wx']['offKeyboardConfirm'](), h681['window']['wx']['offKeyboardInput'](), h681['window']['wx']['showKeyboard']({ 'defaultValue': ws8q['text'], 'maxLength': ws8q['maxChars'], 'multiple': ws8q['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (trkcd) {}, 'fail': function (ba7g) {} }), h681['window']['wx']['onKeyboardConfirm'](function (igp) {
        var y3kx = igp ? igp['value'] : '';ws8q['text'] = y3kx, ws8q['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), h681['window']['wx']['onKeyboardInput'](function (ktx53) {
        var m6e = ktx53 ? ktx53['value'] : '';if (!ws8q['multiline']) {
          if (m6e['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ws8q['text'] = m6e, ws8q['event']('input');
      });
    }, algp0f['inputEnter'] = function () {
      wuqj['inputElement']['target']['focus'] = ![];
    }, algp0f['wxinputblur'] = function () {
      algp0f['hideKeyboard']();
    }, algp0f['hideKeyboard'] = function () {
      h681['window']['wx']['offKeyboardConfirm'](), h681['window']['wx']['offKeyboardInput'](), h681['window']['wx']['hideKeyboard']({ 'success': function (n6em9) {
          console['log']('隐藏键盘');
        }, 'fail': function (iplbag) {
          console['log']('隐藏键盘出错:' + (iplbag ? iplbag['errMsg'] : ''));
        } });
    }, algp0f;
  }(),
      h841jm = function () {
    function cz$r_() {}u8jsw(cz$r_, 'laya.wx.mini.MiniLoader');var gal0f = cz$r_['prototype'];return gal0f['load'] = function (bipga, $_dz, f0x2l, w8j1, baflg) {
      f0x2l === void 0x0 && (f0x2l = !![]), baflg === void 0x0 && (baflg = ![]);var blagpi = this;blagpi['_url'] = bipga;if (bipga['indexOf']('data:image') === 0x0) blagpi['_type'] = $_dz = 'image';else blagpi['_type'] = $_dz || ($_dz = blagpi['getTypeFromUrl'](bipga));blagpi['_cache'] = f0x2l, blagpi['_data'] = null;var hjws81 = 'ascii';if (bipga['indexOf']('.fnt') != -0x1) hjws81 = 'utf8';else $_dz == 'arraybuffer' && (hjws81 = '');;var $9o = jh1m84['getFileExtension'](bipga);if (cz$r_['_fileTypeArr']['indexOf']($9o) != -0x1) h681['EnvConfig']['load']['call'](this, bipga, $_dz, f0x2l, w8j1, baflg);else {
        if (!k35y2['getFileInfo'](bipga)) {
          if (bipga['indexOf']('layaNativeDir/') != -0x1) {
            if (h681['isZiYu']) {
              var xt3k = k35y2['ziyuFileData'][bipga];blagpi['onLoaded'](xt3k);return;
            } else {
              cosnole['log']('read read'), k35y2['read'](bipga, hjws81, new _e6on9(cz$r_, cz$r_['onReadNativeCallBack'], [hjws81, bipga, $_dz, f0x2l, w8j1, baflg, blagpi]));return;
            }
          }if (x2p03f['rootPath'] == '') var enom96 = bipga;else enom96 = bipga['split'](x2p03f['rootPath'])[0x0];bipga['indexOf']('http://') != -0x1 || bipga['indexOf']('https://') != -0x1 ? h681['EnvConfig']['load']['call'](blagpi, bipga, $_dz, f0x2l, w8j1, baflg) : k35y2['readFile'](enom96, hjws81, new _e6on9(cz$r_, cz$r_['onReadNativeCallBack'], [hjws81, bipga, $_dz, f0x2l, w8j1, baflg, blagpi]), bipga);
        } else h681['EnvConfig']['load']['call'](this, bipga, $_dz, f0x2l, w8j1, baflg);
      }
    }, gal0f['resMgrLoad'] = function (zer9_, r_e$z9, $_er, x23y05, nh1m4, lvgi, abi7g) {
      $_er === void 0x0 && ($_er = 0x0), x23y05 === void 0x0 && (x23y05 = ![]), nh1m4 === void 0x0 && (nh1m4 = ![]), lvgi === void 0x0 && (lvgi = 0x0), abi7g === void 0x0 && (abi7g = 0x3), zer9_['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zer9_), h681['EnvConfig']['resMgrLoad'](zer9_, (en96_o, zctdr, e_dzr) => {
        cz$r_['prototype']['resMgrLoadCallBack'](en96_o, zctdr, e_dzr, r_e$z9);
      }, $_er, x23y05, nh1m4, lvgi, abi7g);
    }, gal0f['resMgrLoadCallBack'] = function (x3y2k, _n6oe, $zrtd, hn641) {
      console['log']('buff:::', x3y2k, $zrtd, k35y2['fileNativeDir'] + '///' + k35y2['fileListName']), hn641(x3y2k, _n6oe, $zrtd);
    }, gal0f['clearRes'] = function (zcrd$, h148) {
      h148 === void 0x0 && (h148 = ![]);var x35f = this;x35f['clearRes'](zcrd$, h148);var mj = k35y2['getFileInfo'](zcrd$);if (mj && (zcrd$['indexOf']('http://') != -0x1 || zcrd$['indexOf']('https://') != -0x1)) {
        var wjq8us = mj['md5'],
            zr$ctd = k35y2['getFileNativePath'](wjq8us);k35y2['remove'](zr$ctd);
      }
    }, cz$r_['onReadNativeCallBack'] = function (xfpl2, x5yk3t, w8sh1, o4nm9, zktrcd, fx0235, td$rc, lpa2f0, ilgabv) {
      o4nm9 === void 0x0 && (o4nm9 = !![]), fx0235 === void 0x0 && (fx0235 = ![]), lpa2f0 === void 0x0 && (lpa2f0 = 0x0);if (!lpa2f0) {
        var shw18j;if (w8sh1 == 'json' || w8sh1 == 'atlas') shw18j = h681['getJson'](ilgabv['data']);else w8sh1 == 'xml' ? shw18j = jh1m84['parseXMLFromString'](ilgabv['data']) : shw18j = ilgabv['data'];td$rc['onLoaded'](shw18j), !h681['isZiYu'] && h681['isPosMsgYu'] && w8sh1 != 'arraybuffer' && wx['postMessage']({ 'url': x5yk3t, 'data': shw18j, 'isLoad': !![] });
      } else lpa2f0 == 0x1 && h681['EnvConfig']['load']['call'](td$rc, x5yk3t, w8sh1, o4nm9, zktrcd, fx0235);
    }, hm4n1(cz$r_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), cz$r_;
  }(),
      k35y2 = function (x25yk3) {
    function ujsw() {
      ujsw['__super']['call'](this);;
    }return u8jsw(ujsw, 'laya.wx.mini.MiniFileMgr', x25yk3), ujsw['isLoadFile'] = function (xy520) {
      return ujsw['_fileTypeArr']['indexOf'](xy520) != -0x1 ? !![] : ![];
    }, ujsw['getFileInfo'] = function (swj8qu) {
      var z_o$9e = swj8qu['split']('?')[0x0],
          mo9n = ujsw['filesListObj'][z_o$9e];if (mo9n == null) return null;else return mo9n;return null;
    }, ujsw['onFileUpdate'] = function (t3kyc5, $dzre_) {
      var o$9en_ = t3kyc5['split']('/'),
          d$t = o$9en_[o$9en_['length'] - 0x1],
          plai = ujsw['getFileInfo']($dzre_);if (plai == null) ujsw['onSaveFile']($dzre_, d$t);else {
        if (plai['readyUrl'] != $dzre_) ujsw['remove'](d$t, $dzre_);
      }
    }, ujsw['exits'] = function (ipgba, w8quj) {
      var e6mn9 = ujsw['getFileNativePath'](ipgba);ujsw['fs']['getFileInfo']({ 'filePath': e6mn9, 'success': function (zdtkrc) {
          w8quj != null && w8quj['runWith']([0x0, zdtkrc]);
        }, 'fail': function (z_9$r) {
          w8quj != null && w8quj['runWith']([0x1, z_9$r]);
        } });
    }, ujsw['read'] = function (_o69, hwjus, uw8sj, m41n) {
      hwjus === void 0x0 && (hwjus = 'ascill'), m41n === void 0x0 && (m41n = '');var s8uwjq;m41n != '' ? s8uwjq = ujsw['getFileNativePath'](_o69) : s8uwjq = _o69, ujsw['fs']['readFile']({ 'filePath': s8uwjq, 'encoding': hwjus, 'success': function (t3y5x) {
          uw8sj != null && uw8sj['runWith']([0x0, t3y5x]);
        }, 'fail': function (e9o$_) {
          if (e9o$_ && m41n != '') ujsw['down'](m41n, hwjus, uw8sj, m41n);else uw8sj != null && uw8sj['runWith']([0x1]);
        } });
    }, ujsw['readNativeFile'] = function (h6m841, m9no6) {
      ujsw['fs']['readFile']({ 'filePath': h6m841, 'encoding': '', 'success': function (plgfa0) {
          m9no6 != null && m9no6['runWith']([0x0]);
        }, 'fail': function (e69_o) {
          m9no6 != null && m9no6['runWith']([0x1]);
        } });
    }, ujsw['down'] = function (drt$c, r9z_$e, afl0, cydkt5) {
      r9z_$e === void 0x0 && (r9z_$e = 'ascill'), cydkt5 === void 0x0 && (cydkt5 = '');var piabl = ujsw['getFileNativePath'](cydkt5),
          agpf = ujsw['wxdown']({ 'url': drt$c, 'filePath': piabl, 'success': function ($zcdtr) {
          if ($zcdtr['statusCode'] === 0xc8) ujsw['readFile']($zcdtr['filePath'], r9z_$e, afl0, cydkt5);
        }, 'fail': function (c5ydt) {
          afl0 != null && afl0['runWith']([0x1, c5ydt]);
        } });agpf['onProgressUpdate'](function (z_$crd) {
        afl0 != null && afl0['runWith']([0x2, z_$crd['progress']]);
      });
    }, ujsw['readFile'] = function (hj8u, _on9e, kyrdct, gpali) {
      _on9e === void 0x0 && (_on9e = 'ascill'), gpali === void 0x0 && (gpali = ''), ujsw['fs']['readFile']({ 'filePath': hj8u, 'encoding': _on9e, 'success': function (o9z$e) {
          if (hj8u['indexOf']('http://') != -0x1 || hj8u['indexOf']('https://') != -0x1) ujsw['onFileUpdate'](hj8u, gpali);kyrdct != null && kyrdct['runWith']([0x0, o9z$e]);
        }, 'fail': function (x20flp) {
          if (x20flp) kyrdct != null && kyrdct['runWith']([0x1, x20flp]);
        } });
    }, ujsw['downImg'] = function (m481jh, m6h48, agi7vb) {
      agi7vb === void 0x0 && (agi7vb = '');var sw1hj8 = ujsw['wxdown']({ 'url': m481jh, 'success': function (zrdkc) {
          zrdkc['statusCode'] === 0xc8 && ujsw['copyFile'](zrdkc['tempFilePath'], agi7vb, m6h48);
        }, 'fail': function (p2l0fa) {
          m6h48 != null && m6h48['runWith']([0x1, p2l0fa]);
        } });
    }, ujsw['copyFile'] = function (tkzrdc, x5302, n96em) {
      var fgbalp = tkzrdc['split']('/'),
          xky3 = fgbalp[fgbalp['length'] - 0x1],
          e_6n9o = x5302['split']('?')[0x0],
          $_zrcd = ujsw['getFileInfo'](x5302),
          bgpaf = ujsw['getFileNativePath'](xky3);ujsw['fs']['copyFile']({ 'srcPath': tkzrdc, 'destPath': bgpaf, 'success': function (dctzrk) {
          if (!$_zrcd) ujsw['onSaveFile'](x5302, xky3), n96em != null && n96em['runWith']([0x0]);else {
            if ($_zrcd['readyUrl'] != x5302) ujsw['remove'](xky3, x5302, n96em);
          }
        }, 'fail': function (tzrcdk) {
          n96em != null && n96em['runWith']([0x1, tzrcdk]);
        } });
    }, ujsw['getFileNativePath'] = function (uhsj8w) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + uhsj8w;
    }, ujsw['remove'] = function (eo6mn, xl20f, x5yk3) {
      xl20f === void 0x0 && (xl20f = '');var pg0a = ujsw['getFileInfo'](xl20f),
          x2k5y3 = ujsw['getFileNativePath'](pg0a['md5']);lpag['loader']['clearRes'](pg0a['readyUrl']), ujsw['fs']['unlink']({ 'filePath': x2k5y3, 'success': function (pa0lg) {
          if (xl20f != '') ujsw['onSaveFile'](xl20f, eo6mn);x5yk3 != null && x5yk3['runWith']([0x0]);
        }, 'fail': function (pf2la0) {} });
    }, ujsw['onSaveFile'] = function (yd5kc, jwsuh8) {
      var $_9noe = yd5kc['split']('?')[0x0];ujsw['filesListObj'][$_9noe] = { 'md5': jwsuh8, 'readyUrl': yd5kc }, ujsw['fs']['writeFile']({ 'filePath': ujsw['fileNativeDir'] + '/' + ujsw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ujsw['filesListObj']), 'success': function (ezd) {
          console['log']('写入测试测试成功：', ezd);
        }, 'fail': function (h8wj) {
          console['log']('写入测试测试失败：', h8wj);
        } });
    }, ujsw['existDir'] = function (hj4m8, ctd5) {
      ujsw['fs']['mkdir']({ 'dirPath': hj4m8, 'success': function (fa2l0p) {
          ctd5 != null && ctd5['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (galbpf) {
          if (galbpf['errMsg']['indexOf']('file already exists') != -0x1) ujsw['readSync'](ujsw['fileListName'], 'utf8', ctd5);else ctd5 != null && ctd5['runWith']([0x1, galbpf]);
        } });
    }, ujsw['readSync'] = function (trdkcz, o_$9en, emo96, tkdzr) {
      o_$9en === void 0x0 && (o_$9en = 'ascill'), tkdzr === void 0x0 && (tkdzr = '');var m46n1h = ujsw['getFileNativePath'](trdkcz),
          tdz$cr;try {
        tdz$cr = ujsw['fs']['readFileSync'](m46n1h), emo96 != null && emo96['runWith']([0x0, { 'data': tdz$cr }]);
      } catch (oen$_9) {
        emo96 != null && emo96['runWith']([0x1]);
      }
    }, ujsw['readCache'] = function () {}, ujsw['writeCache'] = function (k5ytx3) {
      var b7giv = readyUrl['split']('?')[0x0];ujsw['filesListObj'][b7giv] = { 'md5': md5Name, 'readyUrl': readyUrl }, ujsw['fs']['writeFile']({ 'filePath': ujsw['fileNativeDir'] + '/' + ujsw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ujsw['filesListObj']), 'success': function ($ez_o) {}, 'fail': function (l0fpx2) {} });
    }, ujsw['setNativeFileDir'] = function (yckdrt) {
      ujsw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + yckdrt;
    }, ujsw['filesListObj'] = {}, ujsw['fileNativeDir'] = null, ujsw['fileListName'] = 'layaairfiles.txt', ujsw['ziyuFileData'] = {}, hm4n1(ujsw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ujsw;
  }(drky),
      su8hwj = function (fplbag) {
    function t5xky3() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], t5xky3['__super']['call'](this), this['_sound'] = t5xky3['_createSound']();
    }u8jsw(t5xky3, 'laya.wx.mini.MiniSound', fplbag);var tc3yk5 = t5xky3['prototype'];return tc3yk5['load'] = function (n1mo64) {
      var mn4h16 = this;n1mo64 = x2p03f['formatURL'](n1mo64), this['url'] = n1mo64;if (t5xky3['_audioCache'][n1mo64]) {
        this['event']('complete');return;
      }function r$dt() {
        if (t5xky3['_null'] != undefined) mn4h16['_sound']['onCanplay'](t5xky3['_null']), mn4h16['_sound']['onError'](t5xky3['_null']);else try {
          mn4h16['_sound']['onCanplay'](null), mn4h16['_sound']['onError'](null), t5xky3['_null'] = null;
        } catch (zrd$ct) {
          console['warn']('[wxmini] _clearSound:' + zrd$ct), mn4h16['_sound']['onCanplay']($oz_9e), mn4h16['_sound']['onError']($oz_9e), t5xky3['_null'] = $oz_9e;
        }
      }function h8jm41() {
        r$dt(), mn69o4['loaded'] = !![], mn69o4['event']('complete'), t5xky3['_audioCache'][mn69o4['url']] = mn69o4;
      }function _$zerd(dr_z) {
        console['error']('errCode=' + dr_z['errCode'] + '  errMsg=' + dr_z['errMsg']), r$dt(), mn69o4['event']('error');
      }function $oz_9e() {}this['_sound']['onCanplay'](h8jm41), this['_sound']['onError'](_$zerd), this['_sound']['src'] = n1mo64;var mn69o4 = this;
    }, tc3yk5['play'] = function (tkzdcr, ck35y) {
      tkzdcr === void 0x0 && (tkzdcr = 0x0), ck35y === void 0x0 && (ck35y = 0x0);var z$drt;if (this['url'] == e_d$['_tMusic']) {
        if (!t5xky3['_musicAudio']) t5xky3['_musicAudio'] = t5xky3['_createSound']();z$drt = t5xky3['_musicAudio'];
      } else z$drt = t5xky3['_createSound']();z$drt['src'] = this['url'];var abglip = new x32pf(z$drt);return abglip['url'] = this['url'], abglip['loops'] = ck35y, abglip['startTime'] = tkzdcr, abglip['play'](), e_d$['addChannel'](abglip), abglip;
    }, tc3yk5['dispose'] = function () {
      var rdt$z = t5xky3['_audioCache'][this['url']];rdt$z && (rdt$z['src'] = '', delete t5xky3['_audioCache'][this['url']]);
    }, sju8wq(0x0, tc3yk5, 'duration', function () {
      return this['_sound']['duration'];
    }), t5xky3['_createSound'] = function () {
      return t5xky3['_id']++, h681['window']['wx']['createInnerAudioContext']();
    }, t5xky3['_musicAudio'] = null, t5xky3['_id'] = 0x0, t5xky3['_audioCache'] = {}, t5xky3['_null'] = undefined, t5xky3;
  }(drky),
      x32pf = function (lpiab) {
    function tdkcry(ky3t5x) {
      this['_audio'] = null, this['_onEnd'] = null, tdkcry['__super']['call'](this), this['_audio'] = ky3t5x, this['_onEnd'] = jh1m84['bind'](this['__onEnd'], this), ky3t5x['onEnded'](this['_onEnd']);
    }u8jsw(tdkcry, 'laya.wx.mini.MiniSoundChannel', lpiab);var pla0 = tdkcry['prototype'];return pla0['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (lpag['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, pla0['__onNull'] = function () {}, pla0['play'] = function () {
      this['isStopped'] = ![], e_d$['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, pla0['stop'] = function () {
      this['isStopped'] = !![], e_d$['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (tdkcry['_null'] != undefined) this['_audio']['onEnded'](tdkcry['_null']);else try {
        this['_audio']['onEnded'](null), tdkcry['_null'] = null;
      } catch (swu) {
        console['warn']('[wxmini] stop:' + swu), this['_audio']['onEnded'](jh1m84['bind'](this['__onNull'], this)), tdkcry['_null'] = jh1m84['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, pla0['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, pla0['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], e_d$['addChannel'](this), this['_audio']['play']();
    }, sju8wq(0x0, pla0, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), sju8wq(0x0, pla0, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), sju8wq(0x0, pla0, 'volume', function () {
      return 0x1;
    }, function (avbi7g) {}), tdkcry['_null'] = undefined, tdkcry;
  }(zd$_re);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var uws8hj in Laya) {
    var cty = Laya[uws8hj];cty && cty['__isclass'] && (exports[uws8hj] = cty);
  }
});