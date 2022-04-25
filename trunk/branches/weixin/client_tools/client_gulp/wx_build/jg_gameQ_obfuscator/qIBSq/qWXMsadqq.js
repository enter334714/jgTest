var g = wx.$Q;
(function (window, document, dy5kt) {
  var oe6mn9 = dy5kt['un'],
      xyk3t = dy5kt['uns'],
      pilbga = dy5kt['static'],
      xytk53 = dy5kt['class'],
      ydcr = dy5kt['getset'],
      usjwh8 = dy5kt['__newvec'],
      vlibag = laya['utils']['Browser'],
      pbglia = laya['events']['Event'],
      ujqws8 = laya['events']['EventDispatcher'],
      n_e$o = laya['resource']['HTMLImage'],
      afpgl0 = laya['utils']['Handler'],
      mon14 = laya['display']['Input'],
      lapfg = laya['net']['Loader'],
      swh8j = laya['maths']['Matrix'],
      fpx2l = laya['renders']['Render'],
      _$ezrd = laya['utils']['RunDriver'],
      aflpb = laya['media']['Sound'],
      n6o9e = laya['media']['SoundChannel'],
      xpf03 = laya['media']['SoundManager'],
      jwhs81 = laya['display']['Stage'],
      p0xl = laya['net']['URL'],
      $rdc = laya['utils']['Utils'],
      wjshu = function () {
    function pbgila() {}return xytk53(pbgila, 'laya.wx.mini.MiniAdpter'), pbgila['getJson'] = function (_$rdez) {
      return JSON['parse'](_$rdez);
    }, pbgila['init'] = function (k325y, yckt3) {
      k325y === void 0x0 && (k325y = ![]), yckt3 === void 0x0 && (yckt3 = ![]);if (pbgila['_inited']) return;pbgila['window'] = window;if (pbgila['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;pbgila['_inited'] = !![], pbgila['isZiYu'] = yckt3, pbgila['isPosMsgYu'] = k325y, pbgila['EnvConfig'] = {}, !pbgila['isZiYu'] && (j8wush['setNativeFileDir']('/layaairGame'), j8wush['existDir'](j8wush['fileNativeDir'], afpgl0['create'](pbgila, pbgila['onMkdirCallBack']))), pbgila['window']['focus'] = function () {}, dy5kt['getUrlPath'] = function () {}, pbgila['window']['logtime'] = function (aipg) {}, pbgila['window']['alertTimeLog'] = function (sh8wju) {}, pbgila['window']['resetShareInfo'] = function () {}, pbgila['window']['CanvasRenderingContext2D'] = function () {}, pbgila['window']['CanvasRenderingContext2D']['prototype'] = pbgila['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], pbgila['window']['document']['body']['appendChild'] = function () {}, pbgila['EnvConfig']['pixelRatioInt'] = 0x0, _$ezrd['getPixelRatio'] = pbgila['pixelRatio'], pbgila['_preCreateElement'] = vlibag['createElement'], vlibag['createElement'] = pbgila['createElement'], _$ezrd['createShaderCondition'] = pbgila['createShaderCondition'], $rdc['parseXMLFromString'] = pbgila['parseXMLFromString'], mon14['_createInputElement'] = mne6['_createInputElement'], pbgila['EnvConfig']['load'] = lapfg['prototype']['load'], lapfg['prototype']['load'] = tryd['prototype']['load'], pbgila['isZiYu'] && k325y && wx['onMessage'](function (rdc$_z) {
        rdc$_z['isLoad'] && (j8wush['ziyuFileData'][rdc$_z['url']] = rdc$_z['data']);
      });
    }, pbgila['onMkdirCallBack'] = function (drzt$, l0afp) {
      if (!drzt$) j8wush['filesListObj'] = JSON['parse'](l0afp['data']);
    }, pbgila['pixelRatio'] = function () {
      if (!pbgila['EnvConfig']['pixelRatioInt']) try {
        var k2x3 = wx['getSystemInfoSync']();return pbgila['EnvConfig']['pixelRatioInt'] = k2x3['pixelRatio'], k2x3 = k2x3, k2x3['pixelRatio'];
      } catch (x5kty3) {}return pbgila['EnvConfig']['pixelRatioInt'];
    }, pbgila['createElement'] = function (abigvl) {
      if (abigvl == 'canvas') {
        var o_e9$n;return pbgila['idx'] == 0x1 ? pbgila['isZiYu'] ? (o_e9$n = sharedCanvas, o_e9$n['style'] = {}) : o_e9$n = window['canvas'] : o_e9$n = window['wx']['createCanvas'](), pbgila['idx']++, o_e9$n;
      } else {
        if (abigvl == 'textarea' || abigvl == 'input') return pbgila['onCreateInput'](abigvl);else {
          if (abigvl == 'div') {
            var y5t3 = pbgila['_preCreateElement'](abigvl);return y5t3['contains'] = function (oe_9$) {
              return null;
            }, y5t3['removeChild'] = function (crtdz$) {}, y5t3;
          } else return pbgila['_preCreateElement'](abigvl);
        }
      }
    }, pbgila['onCreateInput'] = function (drz$tc) {
      var $dzr_e = pbgila['_preCreateElement'](drz$tc);return $dzr_e['focus'] = mne6['wxinputFocus'], $dzr_e['blur'] = mne6['wxinputblur'], $dzr_e['style'] = {}, $dzr_e['value'] = 0x0, $dzr_e['parentElement'] = {}, $dzr_e['placeholder'] = {}, $dzr_e['type'] = {}, $dzr_e['setColor'] = function (eo9$_z) {}, $dzr_e['setType'] = function (glbpf) {}, $dzr_e['setFontFace'] = function (zde_) {}, $dzr_e['addEventListener'] = function (ze9_) {}, $dzr_e['contains'] = function (n4hm61) {
        return null;
      }, $dzr_e['removeChild'] = function (d_rcz) {}, $dzr_e;
    }, pbgila['createShaderCondition'] = function (glafbp) {
      var lp0fga = this,
          fa = function () {
        var nhm41 = glafbp;return lp0fga[glafbp['replace']('this.', '')];
      };return fa;
    }, pbgila['EnvConfig'] = null, pbgila['window'] = null, pbgila['_preCreateElement'] = null, pbgila['_inited'] = ![], pbgila['wxRequest'] = null, pbgila['systemInfo'] = null, pbgila['version'] = '0.0.1', pbgila['isZiYu'] = ![], pbgila['isPosMsgYu'] = ![], pbgila['parseXMLFromString'] = function (o9$en) {
      var m1h8, alivbg;o9$en = o9$en['replace'](/>\s+</g, '><');try {
        m1h8 = new window['Parser']['DOMParser']()['parseFromString'](o9$en, 'text/xml');
      } catch (drc$_) {
        throw '需要引入xml解析库文件';
      }return m1h8;
    }, pbgila['idx'] = 0x1, pbgila;
  }(),
      c5yk = function () {
    function lgai() {}xytk53(lgai, 'laya.wx.mini.MiniImage');var d$rzct = lgai['prototype'];return d$rzct['_loadImage'] = function (dzrkct) {
      var pflga0 = this,
          blgpai = ![];dzrkct['indexOf']('layaNativeDir/') == -0x1 && (blgpai = !![], dzrkct = p0xl['formatURL'](dzrkct));if (!j8wush['getFileInfo'](dzrkct)) {
        if (dzrkct['indexOf']('http://') != -0x1 || dzrkct['indexOf']('https://') != -0x1) j8wush['downImg'](dzrkct, new afpgl0(lgai, lgai['onDownImgCallBack'], [dzrkct, pflga0]), dzrkct);else lgai['onCreateImage'](dzrkct, pflga0, !![]);
      } else lgai['onCreateImage'](dzrkct, pflga0, !blgpai);
    }, lgai['onDownImgCallBack'] = function (eo9$n_, dctr, gibv) {
      if (!gibv) lgai['onCreateImage'](eo9$n_, dctr);else dctr['onError'](null);
    }, lgai['onCreateImage'] = function (z9$oe_, x02y35, y53tck) {
      y53tck === void 0x0 && (y53tck = ![]);var agbpli;if (!y53tck) {
        var j8qsuw = j8wush['getFileInfo'](z9$oe_),
            c5dykt = j8qsuw['md5'];agbpli = j8wush['getFileNativePath'](c5dykt);
      } else agbpli = z9$oe_;if (x02y35['imgCache'] == null) x02y35['imgCache'] = {};var k35y2x;function libgpa() {
        k35y2x['onload'] = null, k35y2x['onerror'] = null, delete x02y35['imgCache'][z9$oe_];
      };var vgbali = function () {
        libgpa(), x02y35['onLoaded'](k35y2x);
      },
          ktdcry = function () {
        libgpa(), x02y35['event']('error', 'Load image failed');
      };x02y35['_type'] == 'nativeimage' ? (k35y2x = new vlibag['window']['Image'](), k35y2x['crossOrigin'] = '', k35y2x['onload'] = vgbali, k35y2x['onerror'] = ktdcry, k35y2x['src'] = agbpli, x02y35['imgCache'][z9$oe_] = k35y2x) : new n_e$o['create'](agbpli, { 'onload': vgbali, 'onerror': ktdcry, 'onCreate': function (n4mo69) {
          k35y2x = n4mo69, x02y35['imgCache'][z9$oe_] = n4mo69;
        } });
    }, lgai;
  }(),
      mne6 = function () {
    function neo_9() {}return xytk53(neo_9, 'laya.wx.mini.MiniInput'), neo_9['_createInputElement'] = function () {
      mon14['_initInput'](mon14['area'] = vlibag['createElement']('textarea')), mon14['_initInput'](mon14['input'] = vlibag['createElement']('input')), mon14['inputContainer'] = vlibag['createElement']('div'), mon14['inputContainer']['style']['position'] = 'absolute', mon14['inputContainer']['style']['zIndex'] = 0x186a0, vlibag['container']['appendChild'](mon14['inputContainer']), mon14['inputContainer']['setPos'] = function (_9oe$z, j8wshu) {
        mon14['inputContainer']['style']['left'] = _9oe$z + 'px', mon14['inputContainer']['style']['top'] = j8wshu + 'px';
      }, dy5kt['stage']['on']('resize', null, neo_9['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (m81jh4) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xpf03['_soundClass'] = zctr$, xpf03['_musicClass'] = zctr$, window['_videoClass'] = n6mh41;
    }, neo_9['_onStageResize'] = function () {
      var bai = dy5kt['stage']['_canvasTransform']['identity']();bai['scale'](vlibag['width'] / fpx2l['canvas']['width'] / _$ezrd['getPixelRatio'](), vlibag['height'] / fpx2l['canvas']['height'] / _$ezrd['getPixelRatio']());
    }, neo_9['wxinputFocus'] = function (biagpl) {
      var abgi = mon14['inputElement']['target'];if (abgi && !abgi['editable']) return;wjshu['window']['wx']['offKeyboardConfirm'](), wjshu['window']['wx']['offKeyboardInput'](), wjshu['window']['wx']['showKeyboard']({ 'defaultValue': abgi['text'], 'maxLength': abgi['maxChars'], 'multiple': abgi['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (t3y) {}, 'fail': function (lbipa) {} }), wjshu['window']['wx']['onKeyboardConfirm'](function (kx5y3) {
        var h64m81 = kx5y3 ? kx5y3['value'] : '';abgi['text'] = h64m81, abgi['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), wjshu['window']['wx']['onKeyboardInput'](function (fga0pl) {
        var agv7 = fga0pl ? fga0pl['value'] : '';if (!abgi['multiline']) {
          if (agv7['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }abgi['text'] = agv7, abgi['event']('input');
      });
    }, neo_9['inputEnter'] = function () {
      mon14['inputElement']['target']['focus'] = ![];
    }, neo_9['wxinputblur'] = function () {
      neo_9['hideKeyboard']();
    }, neo_9['hideKeyboard'] = function () {
      wjshu['window']['wx']['offKeyboardConfirm'](), wjshu['window']['wx']['offKeyboardInput'](), wjshu['window']['wx']['hideKeyboard']({ 'success': function (js418) {
          console['log']('隐藏键盘');
        }, 'fail': function (pabigl) {
          console['log']('隐藏键盘出错:' + (pabigl ? pabigl['errMsg'] : ''));
        } });
    }, neo_9;
  }(),
      tryd = function () {
    function mh4j18() {}xytk53(mh4j18, 'laya.wx.mini.MiniLoader');var k5xt = mh4j18['prototype'];return k5xt['load'] = function (om69en, ztc$rd, en6o9, rkytc, nom16) {
      en6o9 === void 0x0 && (en6o9 = !![]), nom16 === void 0x0 && (nom16 = ![]);var igvab7 = this;igvab7['_url'] = om69en;if (om69en['indexOf']('data:image') === 0x0) igvab7['_type'] = ztc$rd = 'image';else igvab7['_type'] = ztc$rd || (ztc$rd = igvab7['getTypeFromUrl'](om69en));igvab7['_cache'] = en6o9, igvab7['_data'] = null;var zcr$d_ = 'ascii';if (om69en['indexOf']('.fnt') != -0x1) zcr$d_ = 'utf8';else ztc$rd == 'arraybuffer' && (zcr$d_ = '');;var kcdy = $rdc['getFileExtension'](om69en);if (mh4j18['_fileTypeArr']['indexOf'](kcdy) != -0x1) wjshu['EnvConfig']['load']['call'](this, om69en, ztc$rd, en6o9, rkytc, nom16);else {
        if (!j8wush['getFileInfo'](om69en)) {
          if (om69en['indexOf']('layaNativeDir/') != -0x1) {
            if (wjshu['isZiYu']) {
              var nm9e6o = j8wush['ziyuFileData'][om69en];igvab7['onLoaded'](nm9e6o);return;
            } else {
              cosnole['log']('read read'), j8wush['read'](om69en, zcr$d_, new afpgl0(mh4j18, mh4j18['onReadNativeCallBack'], [zcr$d_, om69en, ztc$rd, en6o9, rkytc, nom16, igvab7]));return;
            }
          }if (p0xl['rootPath'] == '') var p02laf = om69en;else p02laf = om69en['split'](p0xl['rootPath'])[0x0];om69en['indexOf']('http://') != -0x1 || om69en['indexOf']('https://') != -0x1 ? wjshu['EnvConfig']['load']['call'](igvab7, om69en, ztc$rd, en6o9, rkytc, nom16) : j8wush['readFile'](p02laf, zcr$d_, new afpgl0(mh4j18, mh4j18['onReadNativeCallBack'], [zcr$d_, om69en, ztc$rd, en6o9, rkytc, nom16, igvab7]), om69en);
        } else wjshu['EnvConfig']['load']['call'](this, om69en, ztc$rd, en6o9, rkytc, nom16);
      }
    }, k5xt['resMgrLoad'] = function ($e9o_, vliabg, flap, n4m6o1, u8wqsj, yct5d, mn694o) {
      flap === void 0x0 && (flap = 0x0), n4m6o1 === void 0x0 && (n4m6o1 = ![]), u8wqsj === void 0x0 && (u8wqsj = ![]), yct5d === void 0x0 && (yct5d = 0x0), mn694o === void 0x0 && (mn694o = 0x3), $e9o_['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', $e9o_), wjshu['EnvConfig']['resMgrLoad']($e9o_, (m14jh, pa0, drtkz) => {
        mh4j18['prototype']['resMgrLoadCallBack'](m14jh, pa0, drtkz, vliabg);
      }, flap, n4m6o1, u8wqsj, yct5d, mn694o);
    }, k5xt['resMgrLoadCallBack'] = function (apib, gbfpal, lgapf0, dcr_) {
      console['log']('buff:::', apib, lgapf0, j8wush['fileNativeDir'] + '///' + j8wush['fileListName']), dcr_(apib, gbfpal, lgapf0);
    }, k5xt['clearRes'] = function (xf2l0p, jsqw8u) {
      jsqw8u === void 0x0 && (jsqw8u = ![]);var y3x5 = this;y3x5['clearRes'](xf2l0p, jsqw8u);var e_zdr = j8wush['getFileInfo'](xf2l0p);if (e_zdr && (xf2l0p['indexOf']('http://') != -0x1 || xf2l0p['indexOf']('https://') != -0x1)) {
        var n16m4 = e_zdr['md5'],
            f0pl = j8wush['getFileNativePath'](n16m4);j8wush['remove'](f0pl);
      }
    }, mh4j18['onReadNativeCallBack'] = function (dr$_c, vabilg, a0lp2f, z9$o, glibv, yrdkc, dytkcr, agbv7i, tcyd5) {
      z9$o === void 0x0 && (z9$o = !![]), yrdkc === void 0x0 && (yrdkc = ![]), agbv7i === void 0x0 && (agbv7i = 0x0);if (!agbv7i) {
        var h1j8m;if (a0lp2f == 'json' || a0lp2f == 'atlas') h1j8m = wjshu['getJson'](tcyd5['data']);else a0lp2f == 'xml' ? h1j8m = $rdc['parseXMLFromString'](tcyd5['data']) : h1j8m = tcyd5['data'];dytkcr['onLoaded'](h1j8m), !wjshu['isZiYu'] && wjshu['isPosMsgYu'] && a0lp2f != 'arraybuffer' && wx['postMessage']({ 'url': vabilg, 'data': h1j8m, 'isLoad': !![] });
      } else agbv7i == 0x1 && wjshu['EnvConfig']['load']['call'](dytkcr, vabilg, a0lp2f, z9$o, glibv, yrdkc);
    }, pilbga(mh4j18, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), mh4j18;
  }(),
      j8wush = function (ne_o) {
    function n_$() {
      n_$['__super']['call'](this);;
    }return xytk53(n_$, 'laya.wx.mini.MiniFileMgr', ne_o), n_$['isLoadFile'] = function (glpabf) {
      return n_$['_fileTypeArr']['indexOf'](glpabf) != -0x1 ? !![] : ![];
    }, n_$['getFileInfo'] = function (_dcr$z) {
      var _$zoe9 = _dcr$z['split']('?')[0x0],
          $_oze9 = n_$['filesListObj'][_$zoe9];if ($_oze9 == null) return null;else return $_oze9;return null;
    }, n_$['onFileUpdate'] = function (aflp2, xyk53) {
      var xt3yk = aflp2['split']('/'),
          igval = xt3yk[xt3yk['length'] - 0x1],
          c5kyt3 = n_$['getFileInfo'](xyk53);if (c5kyt3 == null) n_$['onSaveFile'](xyk53, igval);else {
        if (c5kyt3['readyUrl'] != xyk53) n_$['remove'](igval, xyk53);
      }
    }, n_$['exits'] = function (pf02xl, a2flp) {
      var z9e$o = n_$['getFileNativePath'](pf02xl);n_$['fs']['getFileInfo']({ 'filePath': z9e$o, 'success': function (x5302f) {
          a2flp != null && a2flp['runWith']([0x0, x5302f]);
        }, 'fail': function (x5k32) {
          a2flp != null && a2flp['runWith']([0x1, x5k32]);
        } });
    }, n_$['read'] = function (_dz$cr, m6148, shj148, n$9e_o) {
      m6148 === void 0x0 && (m6148 = 'ascill'), n$9e_o === void 0x0 && (n$9e_o = '');var txyk35;n$9e_o != '' ? txyk35 = n_$['getFileNativePath'](_dz$cr) : txyk35 = _dz$cr, n_$['fs']['readFile']({ 'filePath': txyk35, 'encoding': m6148, 'success': function (apibgl) {
          shj148 != null && shj148['runWith']([0x0, apibgl]);
        }, 'fail': function (h8jsw1) {
          if (h8jsw1 && n$9e_o != '') n_$['down'](n$9e_o, m6148, shj148, n$9e_o);else shj148 != null && shj148['runWith']([0x1]);
        } });
    }, n_$['readNativeFile'] = function (drz_e$, p0xf3) {
      n_$['fs']['readFile']({ 'filePath': drz_e$, 'encoding': '', 'success': function (_oz9$) {
          p0xf3 != null && p0xf3['runWith']([0x0]);
        }, 'fail': function (kty53x) {
          p0xf3 != null && p0xf3['runWith']([0x1]);
        } });
    }, n_$['down'] = function (gvilba, fabpgl, s8uwj, ga7vi) {
      fabpgl === void 0x0 && (fabpgl = 'ascill'), ga7vi === void 0x0 && (ga7vi = '');var x20fp3 = n_$['getFileNativePath'](ga7vi),
          qsj8wu = n_$['wxdown']({ 'url': gvilba, 'filePath': x20fp3, 'success': function (gliavb) {
          if (gliavb['statusCode'] === 0xc8) n_$['readFile'](gliavb['filePath'], fabpgl, s8uwj, ga7vi);
        }, 'fail': function (rcd$t) {
          s8uwj != null && s8uwj['runWith']([0x1, rcd$t]);
        } });qsj8wu['onProgressUpdate'](function (ilbgav) {
        s8uwj != null && s8uwj['runWith']([0x2, ilbgav['progress']]);
      });
    }, n_$['readFile'] = function (o46n9m, s8q, jw8u, kx3) {
      s8q === void 0x0 && (s8q = 'ascill'), kx3 === void 0x0 && (kx3 = ''), n_$['fs']['readFile']({ 'filePath': o46n9m, 'encoding': s8q, 'success': function (o6m41n) {
          if (o46n9m['indexOf']('http://') != -0x1 || o46n9m['indexOf']('https://') != -0x1) n_$['onFileUpdate'](o46n9m, kx3);jw8u != null && jw8u['runWith']([0x0, o6m41n]);
        }, 'fail': function (dky5t) {
          if (dky5t) jw8u != null && jw8u['runWith']([0x1, dky5t]);
        } });
    }, n_$['downImg'] = function (ctyd5k, va7ig, rezd_$) {
      rezd_$ === void 0x0 && (rezd_$ = '');var n49mo6 = n_$['wxdown']({ 'url': ctyd5k, 'success': function (o6em9n) {
          o6em9n['statusCode'] === 0xc8 && n_$['copyFile'](o6em9n['tempFilePath'], rezd_$, va7ig);
        }, 'fail': function (gbli) {
          va7ig != null && va7ig['runWith']([0x1, gbli]);
        } });
    }, n_$['copyFile'] = function (z$_, $_ezo, vbla) {
      var jh84s = z$_['split']('/'),
          t35cy = jh84s[jh84s['length'] - 0x1],
          x035y2 = $_ezo['split']('?')[0x0],
          rz_$de = n_$['getFileInfo']($_ezo),
          zdrc_ = n_$['getFileNativePath'](t35cy);n_$['fs']['copyFile']({ 'srcPath': z$_, 'destPath': zdrc_, 'success': function (pfx2) {
          if (!rz_$de) n_$['onSaveFile']($_ezo, t35cy), vbla != null && vbla['runWith']([0x0]);else {
            if (rz_$de['readyUrl'] != $_ezo) n_$['remove'](t35cy, $_ezo, vbla);
          }
        }, 'fail': function (y5kx23) {
          vbla != null && vbla['runWith']([0x1, y5kx23]);
        } });
    }, n_$['getFileNativePath'] = function (y5230x) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + y5230x;
    }, n_$['remove'] = function (avi7g, lgpbaf, ydkrct) {
      lgpbaf === void 0x0 && (lgpbaf = '');var ne69mo = n_$['getFileInfo'](lgpbaf),
          kdcy5 = n_$['getFileNativePath'](ne69mo['md5']);dy5kt['loader']['clearRes'](ne69mo['readyUrl']), n_$['fs']['unlink']({ 'filePath': kdcy5, 'success': function (gapilb) {
          if (lgpbaf != '') n_$['onSaveFile'](lgpbaf, avi7g);ydkrct != null && ydkrct['runWith']([0x0]);
        }, 'fail': function (sh14j8) {} });
    }, n_$['onSaveFile'] = function (qjswu, _n9eo) {
      var e9no_ = qjswu['split']('?')[0x0];n_$['filesListObj'][e9no_] = { 'md5': _n9eo, 'readyUrl': qjswu }, n_$['fs']['writeFile']({ 'filePath': n_$['fileNativeDir'] + '/' + n_$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n_$['filesListObj']), 'success': function (dcrtkz) {
          console['log']('写入测试测试成功：', dcrtkz);
        }, 'fail': function (kyt3) {
          console['log']('写入测试测试失败：', kyt3);
        } });
    }, n_$['existDir'] = function (h64n1m, $zd_er) {
      n_$['fs']['mkdir']({ 'dirPath': h64n1m, 'success': function (_6ne) {
          $zd_er != null && $zd_er['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (fa02) {
          if (fa02['errMsg']['indexOf']('file already exists') != -0x1) n_$['readSync'](n_$['fileListName'], 'utf8', $zd_er);else $zd_er != null && $zd_er['runWith']([0x1, fa02]);
        } });
    }, n_$['readSync'] = function (y53k, x3y02, l0xpf2, yt5ck) {
      x3y02 === void 0x0 && (x3y02 = 'ascill'), yt5ck === void 0x0 && (yt5ck = '');var hm1n4 = n_$['getFileNativePath'](y53k),
          ilvabg;try {
        ilvabg = n_$['fs']['readFileSync'](hm1n4), l0xpf2 != null && l0xpf2['runWith']([0x0, { 'data': ilvabg }]);
      } catch (y253x) {
        l0xpf2 != null && l0xpf2['runWith']([0x1]);
      }
    }, n_$['readCache'] = function () {}, n_$['writeCache'] = function (rtkzcd) {
      var r$zc_ = readyUrl['split']('?')[0x0];n_$['filesListObj'][r$zc_] = { 'md5': md5Name, 'readyUrl': readyUrl }, n_$['fs']['writeFile']({ 'filePath': n_$['fileNativeDir'] + '/' + n_$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n_$['filesListObj']), 'success': function (one96) {}, 'fail': function (kdrtz) {} });
    }, n_$['setNativeFileDir'] = function (plg0af) {
      n_$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + plg0af;
    }, n_$['filesListObj'] = {}, n_$['fileNativeDir'] = null, n_$['fileListName'] = 'layaairfiles.txt', n_$['ziyuFileData'] = {}, pilbga(n_$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), n_$;
  }(ujqws8),
      zctr$ = function (dtrkcy) {
    function txy5k() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], txy5k['__super']['call'](this), this['_sound'] = txy5k['_createSound'](), this['_chanell'] = new j481hs(this['_sound']);
    }xytk53(txy5k, 'laya.wx.mini.MiniSound', dtrkcy);var _r9$ = txy5k['prototype'];return _r9$['load'] = function (c5ty) {
      var apf0l = this;c5ty = p0xl['formatURL'](c5ty), this['url'] = c5ty;if (txy5k['_audioCache'][c5ty]) {
        this['event']('complete');return;
      }function h8j1m() {
        if (txy5k['_null'] != undefined) apf0l['_sound']['onCanplay'](txy5k['_null']), apf0l['_sound']['onError'](txy5k['_null']);else try {
          apf0l['_sound']['onCanplay'](null), apf0l['_sound']['onError'](null), txy5k['_null'] = null;
        } catch (no9e6) {
          console['warn']('[wxmini] _clearSound:' + no9e6), apf0l['_sound']['onCanplay'](z_$dre), apf0l['_sound']['onError'](z_$dre), txy5k['_null'] = z_$dre;
        }
      }function cd$tr() {
        hm8146['loaded'] = !![], hm8146['event']('complete'), txy5k['_audioCache'][hm8146['url']] = hm8146;
      }function j81sw(y2x) {
        console['error']('errCode=' + y2x['errCode'] + '  errMsg=' + y2x['errMsg']), hm8146['event']('error');
      }function z_$dre() {}this['_sound']['onCanplay'](cd$tr), this['_sound']['onError'](j81sw), this['_sound']['src'] = c5ty;var hm8146 = this;
    }, _r9$['play'] = function (dykctr, mn946) {
      dykctr === void 0x0 && (dykctr = 0x0), mn946 === void 0x0 && (mn946 = 0x0);var qsjwu8, r$zed;if (this['url'] == xpf03['_tMusic']) {
        if (!txy5k['_musicAudio']) txy5k['_musicAudio'] = this['_sound'];qsjwu8 = txy5k['_musicAudio'], r$zed = this['_chanell'];
      } else qsjwu8 = this['_sound'], r$zed = this['_chanell'];return qsjwu8['src'] = this['url'], qsjwu8['startTime'] = 0x0, r$zed['isStopped'] && (r$zed['url'] = this['url'], r$zed['loops'] = mn946, r$zed['startTime'] = dykctr, r$zed['play'](), xpf03['addChannel'](r$zed)), r$zed;
    }, _r9$['dispose'] = function () {
      var gipal = txy5k['_audioCache'][this['url']];gipal && (gipal['src'] = '', delete txy5k['_audioCache'][this['url']]);
    }, ydcr(0x0, _r9$, 'duration', function () {
      return this['_sound']['duration'];
    }), txy5k['_createSound'] = function () {
      txy5k['_id']++;var td$c = wjshu['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return td$c;
    }, txy5k['_musicAudio'] = null, txy5k['_id'] = 0x0, txy5k['_audioCache'] = {}, txy5k['_null'] = undefined, txy5k;
  }(ujqws8),
      j481hs = function (oen9_6) {
    function cr_z$d(e_$o) {
      this['_audio'] = null, this['_onEnd'] = null, cr_z$d['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = e_$o, this['_onEnd'] = $rdc['bind'](this['__onEnd'], this), e_$o['onEnded'](this['_onEnd']);
    }xytk53(cr_z$d, 'laya.wx.mini.MiniSoundChannel', oen9_6);var h41n = cr_z$d['prototype'];return h41n['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (dy5kt['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, h41n['__onNull'] = function () {}, h41n['play'] = function () {
      this['isStopped'] = ![], xpf03['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, h41n['stop'] = function () {
      this['isStopped'] = !![], xpf03['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, h41n['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, h41n['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xpf03['addChannel'](this), this['_audio']['play']();
    }, ydcr(0x0, h41n, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ydcr(0x0, h41n, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ydcr(0x0, h41n, 'volume', function () {
      return 0x1;
    }, function (pfgl) {}), cr_z$d['_null'] = undefined, cr_z$d;
  }(n6o9e),
      n6mh41 = function () {
    function _e$9z() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = wjshu['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }xytk53(_e$9z, 'laya.wx.mini.MiniVideo');var tyk3c = _e$9z['prototype'];return tyk3c['on'] = function (_9o$, sh8jw1, z_r9$e) {
      if (_9o$ == 'loadedmetadata') this['onPlayFunc'] = z_r9$e['bind'](sh8jw1), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else _9o$ == 'ended' && (this['onEndedFunC'] = z_r9$e['bind'](sh8jw1), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, tyk3c['onTimeUpdateFunc'] = function (lgbvi) {
      this['position'] = lgbvi['position'], this['_duration'] = lgbvi['duration'];
    }, tyk3c['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, tyk3c['onended'] = function (zrd$c, z_o$) {
      this['onEndedFunC'] = z_o$['bind'](zrd$c), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, tyk3c['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, tyk3c['off'] = function (jhw18s, e_9r$, vil) {
      if (jhw18s == 'loadedmetadata') this['onPlayFunc'] = vil['bind'](e_9r$), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else jhw18s == 'ended' && (this['onEndedFunC'] = vil['bind'](e_9r$), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, tyk3c['load'] = function (m6n41o) {
      if (!this['videoElement']) return;this['videoElement']['src'] = m6n41o;
    }, tyk3c['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, tyk3c['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, tyk3c['size'] = function (drcyk, m614o) {
      if (!this['videoElement']) return;this['videoElement']['width'] = drcyk, this['videoElement']['height'] = m614o;
    }, tyk3c['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, tyk3c['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, ydcr(0x0, tyk3c, 'duration', function () {
      return this['_duration'];
    }), ydcr(0x0, tyk3c, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (lavbi) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = lavbi;
    }), ydcr(0x0, tyk3c, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), ydcr(0x0, tyk3c, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), ydcr(0x0, tyk3c, 'ended', function () {
      return this['videoend'];
    }), ydcr(0x0, tyk3c, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (s1j8h) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = s1j8h;
    }), ydcr(0x0, tyk3c, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (omn69) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = omn69;
    }), ydcr(0x0, tyk3c, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (wus8hj) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = wus8hj;
    }), ydcr(0x0, tyk3c, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), ydcr(0x0, tyk3c, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (lpagib) {
      if (!this['videoElement']) return;this['videoElement']['x'] = lpagib;
    }), ydcr(0x0, tyk3c, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (e6m) {
      if (!this['videoElement']) return;this['videoElement']['y'] = e6m;
    }), ydcr(0x0, tyk3c, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), ydcr(0x0, tyk3c, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (hj41) {
      if (!this['videoElement']) return;this['videoElement']['src'] = hj41;
    }), ydcr(0x0, tyk3c, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (tkcy5d) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = tkcy5d;
    }), ydcr(0x0, tyk3c, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (o96me) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = o96me;
    }), _e$9z;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var lpgiba in Laya) {
    var o49mn = Laya[lpgiba];o49mn && o49mn['__isclass'] && (exports[lpgiba] = o49mn);
  }
});