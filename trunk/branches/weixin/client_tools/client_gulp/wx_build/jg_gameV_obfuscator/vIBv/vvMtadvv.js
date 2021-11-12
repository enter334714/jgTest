var Q = wx.$v;
(function (window, document, sjtmc2) {
  var azr6n = sjtmc2['un'],
      sm2jct = sjtmc2['uns'],
      a46zu = sjtmc2['static'],
      z64b = sjtmc2['class'],
      msc32t = sjtmc2['getset'],
      q5$fw = sjtmc2['__newvec'],
      xvwkd = laya['utils']['Browser'],
      s7239m = laya['events']['Event'],
      tjmc28 = laya['events']['EventDispatcher'],
      kd5fwv = laya['resource']['HTMLImage'],
      fke$5q = laya['utils']['Handler'],
      ms3792 = laya['display']['Input'],
      _1ri = laya['net']['Loader'],
      kq$ = laya['maths']['Matrix'],
      ir0zu = laya['renders']['Render'],
      oyj = laya['utils']['RunDriver'],
      fdv5wk = laya['media']['Sound'],
      inurz0 = laya['media']['SoundChannel'],
      aru6n = laya['media']['SoundManager'],
      dfkw5 = laya['display']['Stage'],
      ojct82 = laya['net']['URL'],
      iru_0 = laya['utils']['Utils'],
      oj8hcy = function () {
    function fk_q() {}return z64b(fk_q, 'laya.wx.mini.MiniAdpter'), fk_q['getJson'] = function (uanr6) {
      return JSON['parse'](uanr6);
    }, fk_q['init'] = function (cjt2s, d5wfv) {
      cjt2s === void 0x0 && (cjt2s = ![]), d5wfv === void 0x0 && (d5wfv = ![]);if (fk_q['_inited']) return;fk_q['window'] = window;if (fk_q['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;fk_q['_inited'] = !![], fk_q['isZiYu'] = d5wfv, fk_q['isPosMsgYu'] = cjt2s, fk_q['EnvConfig'] = {}, !fk_q['isZiYu'] && (ri0e1['setNativeFileDir']('/layaairGame'), ri0e1['existDir'](ri0e1['fileNativeDir'], fke$5q['create'](fk_q, fk_q['onMkdirCallBack']))), fk_q['window']['focus'] = function () {}, sjtmc2['getUrlPath'] = function () {}, fk_q['window']['logtime'] = function (i1_re0) {}, fk_q['window']['alertTimeLog'] = function (kvw5$) {}, fk_q['window']['resetShareInfo'] = function () {}, fk_q['window']['CanvasRenderingContext2D'] = function () {}, fk_q['window']['CanvasRenderingContext2D']['prototype'] = fk_q['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], fk_q['window']['document']['body']['appendChild'] = function () {}, fk_q['EnvConfig']['pixelRatioInt'] = 0x0, oyj['getPixelRatio'] = fk_q['pixelRatio'], fk_q['_preCreateElement'] = xvwkd['createElement'], xvwkd['createElement'] = fk_q['createElement'], oyj['createShaderCondition'] = fk_q['createShaderCondition'], iru_0['parseXMLFromString'] = fk_q['parseXMLFromString'], ms3792['_createInputElement'] = qi1$['_createInputElement'], fk_q['EnvConfig']['load'] = _1ri['prototype']['load'], _1ri['prototype']['load'] = $_qfek['prototype']['load'], fk_q['isZiYu'] && cjt2s && wx['onMessage'](function (l3m7) {
        l3m7['isLoad'] && (ri0e1['ziyuFileData'][l3m7['url']] = l3m7['data']);
      });
    }, fk_q['onMkdirCallBack'] = function (_10ei, mt2c3) {
      if (!_10ei) ri0e1['filesListObj'] = JSON['parse'](mt2c3['data']);
    }, fk_q['pixelRatio'] = function () {
      if (!fk_q['EnvConfig']['pixelRatioInt']) try {
        var q_$1ie = wx['getSystemInfoSync']();return fk_q['EnvConfig']['pixelRatioInt'] = q_$1ie['pixelRatio'], q_$1ie = q_$1ie, q_$1ie['pixelRatio'];
      } catch (b7sl93) {}return fk_q['EnvConfig']['pixelRatioInt'];
    }, fk_q['createElement'] = function (och8jy) {
      if (och8jy == 'canvas') {
        var i$e_q1;return fk_q['idx'] == 0x1 ? fk_q['isZiYu'] ? (i$e_q1 = sharedCanvas, i$e_q1['style'] = {}) : i$e_q1 = window['canvas'] : i$e_q1 = window['wx']['createCanvas'](), fk_q['idx']++, i$e_q1;
      } else {
        if (och8jy == 'textarea' || och8jy == 'input') return fk_q['onCreateInput'](och8jy);else {
          if (och8jy == 'div') {
            var $5qefk = fk_q['_preCreateElement'](och8jy);return $5qefk['contains'] = function (stcj2m) {
              return null;
            }, $5qefk['removeChild'] = function (n0urz) {}, $5qefk;
          } else return fk_q['_preCreateElement'](och8jy);
        }
      }
    }, fk_q['onCreateInput'] = function (jc8y) {
      var k5vxdw = fk_q['_preCreateElement'](jc8y);return k5vxdw['focus'] = qi1$['wxinputFocus'], k5vxdw['blur'] = qi1$['wxinputblur'], k5vxdw['style'] = {}, k5vxdw['value'] = 0x0, k5vxdw['parentElement'] = {}, k5vxdw['placeholder'] = {}, k5vxdw['type'] = {}, k5vxdw['setColor'] = function (o82tcj) {}, k5vxdw['setType'] = function (_i$1qe) {}, k5vxdw['setFontFace'] = function (oc2j8) {}, k5vxdw['addEventListener'] = function (a6bz4l) {}, k5vxdw['contains'] = function ($qef5) {
        return null;
      }, k5vxdw['removeChild'] = function (s7l9b3) {}, k5vxdw;
    }, fk_q['createShaderCondition'] = function (lb79) {
      var joyhp = this,
          a7bl6 = function () {
        var j2cts = lb79;return joyhp[lb79['replace']('this.', '')];
      };return a7bl6;
    }, fk_q['EnvConfig'] = null, fk_q['window'] = null, fk_q['_preCreateElement'] = null, fk_q['_inited'] = ![], fk_q['wxRequest'] = null, fk_q['systemInfo'] = null, fk_q['version'] = '0.0.1', fk_q['isZiYu'] = ![], fk_q['isPosMsgYu'] = ![], fk_q['parseXMLFromString'] = function (i0qe_) {
      var $qw5k, zau4n6;i0qe_ = i0qe_['replace'](/>\s+</g, '><');try {
        $qw5k = new window['Parser']['DOMParser']()['parseFromString'](i0qe_, 'text/xml');
      } catch (_qfek) {
        throw '需要引入xml解析库文件';
      }return $qw5k;
    }, fk_q['idx'] = 0x1, fk_q;
  }(),
      a64bzl = function () {
    function r_i0() {}z64b(r_i0, 'laya.wx.mini.MiniImage');var _ie01r = r_i0['prototype'];return _ie01r['_loadImage'] = function (unaz46) {
      var o8ytcj = this,
          fq5ek = ![];unaz46['indexOf']('layaNativeDir/') == -0x1 && (fq5ek = !![], unaz46 = ojct82['formatURL'](unaz46));if (!ri0e1['getFileInfo'](unaz46)) {
        if (unaz46['indexOf']('http://') != -0x1 || unaz46['indexOf']('https://') != -0x1) ri0e1['downImg'](unaz46, new fke$5q(r_i0, r_i0['onDownImgCallBack'], [unaz46, o8ytcj]), unaz46);else r_i0['onCreateImage'](unaz46, o8ytcj, !![]);
      } else r_i0['onCreateImage'](unaz46, o8ytcj, !fq5ek);
    }, r_i0['onDownImgCallBack'] = function (k$f_qe, qfe5$, lb493) {
      if (!lb493) r_i0['onCreateImage'](k$f_qe, qfe5$);else qfe5$['onError'](null);
    }, r_i0['onCreateImage'] = function (s2m3tc, xdwvg5, u1rin) {
      u1rin === void 0x0 && (u1rin = ![]);var $5efq;if (!u1rin) {
        var al674 = ri0e1['getFileInfo'](s2m3tc),
            re_i01 = al674['md5'];$5efq = ri0e1['getFileNativePath'](re_i01);
      } else $5efq = s2m3tc;if (xdwvg5['imgCache'] == null) xdwvg5['imgCache'] = {};var uzn0i;function vwdg5x() {
        uzn0i['onload'] = null, uzn0i['onerror'] = null, delete xdwvg5['imgCache'][s2m3tc];
      };var jhypo8 = function () {
        vwdg5x(), xdwvg5['onLoaded'](uzn0i);
      },
          $ek_f = function () {
        vwdg5x(), xdwvg5['event']('error', 'Load image failed');
      };xdwvg5['_type'] == 'nativeimage' ? (uzn0i = new xvwkd['window']['Image'](), uzn0i['crossOrigin'] = '', uzn0i['onload'] = jhypo8, uzn0i['onerror'] = $ek_f, uzn0i['src'] = $5efq, xdwvg5['imgCache'][s2m3tc] = uzn0i) : new kd5fwv['create']($5efq, { 'onload': jhypo8, 'onerror': $ek_f, 'onCreate': function (k$wvf5) {
          uzn0i = k$wvf5, xdwvg5['imgCache'][s2m3tc] = k$wvf5;
        } });
    }, r_i0;
  }(),
      qi1$ = function () {
    function t23sc() {}return z64b(t23sc, 'laya.wx.mini.MiniInput'), t23sc['_createInputElement'] = function () {
      ms3792['_initInput'](ms3792['area'] = xvwkd['createElement']('textarea')), ms3792['_initInput'](ms3792['input'] = xvwkd['createElement']('input')), ms3792['inputContainer'] = xvwkd['createElement']('div'), ms3792['inputContainer']['style']['position'] = 'absolute', ms3792['inputContainer']['style']['zIndex'] = 0x186a0, xvwkd['container']['appendChild'](ms3792['inputContainer']), ms3792['inputContainer']['setPos'] = function (i_10ru, yop8h) {
        ms3792['inputContainer']['style']['left'] = i_10ru + 'px', ms3792['inputContainer']['style']['top'] = yop8h + 'px';
      }, sjtmc2['stage']['on']('resize', null, t23sc['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (q_i1$) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), aru6n['_soundClass'] = _ui10, aru6n['_musicClass'] = _ui10;
    }, t23sc['_onStageResize'] = function () {
      var r_i10e = sjtmc2['stage']['_canvasTransform']['identity']();r_i10e['scale'](xvwkd['width'] / ir0zu['canvas']['width'] / oyj['getPixelRatio'](), xvwkd['height'] / ir0zu['canvas']['height'] / oyj['getPixelRatio']());
    }, t23sc['wxinputFocus'] = function (i10re_) {
      var m2cjts = ms3792['inputElement']['target'];if (m2cjts && !m2cjts['editable']) return;oj8hcy['window']['wx']['offKeyboardConfirm'](), oj8hcy['window']['wx']['offKeyboardInput'](), oj8hcy['window']['wx']['showKeyboard']({ 'defaultValue': m2cjts['text'], 'maxLength': m2cjts['maxChars'], 'multiple': m2cjts['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (mt9s32) {}, 'fail': function (i1e_q0) {} }), oj8hcy['window']['wx']['onKeyboardConfirm'](function (i_r01e) {
        var dx5vw = i_r01e ? i_r01e['value'] : '';m2cjts['text'] = dx5vw, m2cjts['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), oj8hcy['window']['wx']['onKeyboardInput'](function (jyct8) {
        var e1i_q0 = jyct8 ? jyct8['value'] : '';if (!m2cjts['multiline']) {
          if (e1i_q0['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }m2cjts['text'] = e1i_q0, m2cjts['event']('input');
      });
    }, t23sc['inputEnter'] = function () {
      ms3792['inputElement']['target']['focus'] = ![];
    }, t23sc['wxinputblur'] = function () {
      t23sc['hideKeyboard']();
    }, t23sc['hideKeyboard'] = function () {
      oj8hcy['window']['wx']['offKeyboardConfirm'](), oj8hcy['window']['wx']['offKeyboardInput'](), oj8hcy['window']['wx']['hideKeyboard']({ 'success': function (uinr1) {
          console['log']('隐藏键盘');
        }, 'fail': function (wkf5d) {
          console['log']('隐藏键盘出错:' + (wkf5d ? wkf5d['errMsg'] : ''));
        } });
    }, t23sc;
  }(),
      $_qfek = function () {
    function i0_u() {}z64b(i0_u, 'laya.wx.mini.MiniLoader');var cyotj = i0_u['prototype'];return cyotj['load'] = function ($ieq_, yoc, l7b3s, w$f5vk, k_) {
      l7b3s === void 0x0 && (l7b3s = !![]), k_ === void 0x0 && (k_ = ![]);var cm8j2t = this;cm8j2t['_url'] = $ieq_;if ($ieq_['indexOf']('data:image') === 0x0) cm8j2t['_type'] = yoc = 'image';else cm8j2t['_type'] = yoc || (yoc = cm8j2t['getTypeFromUrl']($ieq_));cm8j2t['_cache'] = l7b3s, cm8j2t['_data'] = null;var c2o8j = 'ascii';if ($ieq_['indexOf']('.fnt') != -0x1) c2o8j = 'utf8';else yoc == 'arraybuffer' && (c2o8j = '');;var m82c = iru_0['getFileExtension']($ieq_);if (i0_u['_fileTypeArr']['indexOf'](m82c) != -0x1) oj8hcy['EnvConfig']['load']['call'](this, $ieq_, yoc, l7b3s, w$f5vk, k_);else {
        if (!ri0e1['getFileInfo']($ieq_)) {
          if ($ieq_['indexOf']('layaNativeDir/') != -0x1) {
            if (oj8hcy['isZiYu']) {
              var s9l37m = ri0e1['ziyuFileData'][$ieq_];cm8j2t['onLoaded'](s9l37m);return;
            } else {
              cosnole['log']('read read'), ri0e1['read']($ieq_, c2o8j, new fke$5q(i0_u, i0_u['onReadNativeCallBack'], [c2o8j, $ieq_, yoc, l7b3s, w$f5vk, k_, cm8j2t]));return;
            }
          }if (ojct82['rootPath'] == '') var znui0 = $ieq_;else znui0 = $ieq_['split'](ojct82['rootPath'])[0x0];$ieq_['indexOf']('http://') != -0x1 || $ieq_['indexOf']('https://') != -0x1 ? oj8hcy['EnvConfig']['load']['call'](cm8j2t, $ieq_, yoc, l7b3s, w$f5vk, k_) : ri0e1['readFile'](znui0, c2o8j, new fke$5q(i0_u, i0_u['onReadNativeCallBack'], [c2o8j, $ieq_, yoc, l7b3s, w$f5vk, k_, cm8j2t]), $ieq_);
        } else oj8hcy['EnvConfig']['load']['call'](this, $ieq_, yoc, l7b3s, w$f5vk, k_);
      }
    }, cyotj['resMgrLoad'] = function (lbza64, tm329, i_$e1q, $ei_q1, t3ms92, inu0rz, cstm32) {
      i_$e1q === void 0x0 && (i_$e1q = 0x0), $ei_q1 === void 0x0 && ($ei_q1 = ![]), t3ms92 === void 0x0 && (t3ms92 = ![]), inu0rz === void 0x0 && (inu0rz = 0x0), cstm32 === void 0x0 && (cstm32 = 0x3), lbza64['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', lbza64), oj8hcy['EnvConfig']['resMgrLoad'](lbza64, (re1_0i, yh8, urza) => {
        i0_u['prototype']['resMgrLoadCallBack'](re1_0i, yh8, urza, tm329);
      }, i_$e1q, $ei_q1, t3ms92, inu0rz, cstm32);
    }, cyotj['resMgrLoadCallBack'] = function ($q1i_e, zru0ni, kf$qe5, $eq1_) {
      console['log']('buff:::', $q1i_e, kf$qe5, ri0e1['fileNativeDir'] + '///' + ri0e1['fileListName']), $eq1_($q1i_e, zru0ni, kf$qe5);
    }, cyotj['clearRes'] = function (m7sl39, vk5xdw) {
      vk5xdw === void 0x0 && (vk5xdw = ![]);var u6 = this;u6['clearRes'](m7sl39, vk5xdw);var l347 = ri0e1['getFileInfo'](m7sl39);if (l347 && (m7sl39['indexOf']('http://') != -0x1 || m7sl39['indexOf']('https://') != -0x1)) {
        var _i0u1 = l347['md5'],
            az6unr = ri0e1['getFileNativePath'](_i0u1);ri0e1['remove'](az6unr);
      }
    }, i0_u['onReadNativeCallBack'] = function (b73sl9, zn4a6u, ocy8, zi0urn, s37lb, yojh8c, azu6n, rnu0z, nr01) {
      zi0urn === void 0x0 && (zi0urn = !![]), yojh8c === void 0x0 && (yojh8c = ![]), rnu0z === void 0x0 && (rnu0z = 0x0);if (!rnu0z) {
        var eq_0i1;if (ocy8 == 'json' || ocy8 == 'atlas') eq_0i1 = oj8hcy['getJson'](nr01['data']);else ocy8 == 'xml' ? eq_0i1 = iru_0['parseXMLFromString'](nr01['data']) : eq_0i1 = nr01['data'];azu6n['onLoaded'](eq_0i1), !oj8hcy['isZiYu'] && oj8hcy['isPosMsgYu'] && ocy8 != 'arraybuffer' && wx['postMessage']({ 'url': zn4a6u, 'data': eq_0i1, 'isLoad': !![] });
      } else rnu0z == 0x1 && oj8hcy['EnvConfig']['load']['call'](azu6n, zn4a6u, ocy8, zi0urn, s37lb, yojh8c);
    }, a46zu(i0_u, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), i0_u;
  }(),
      ri0e1 = function (kf_q$e) {
    function t8cjyo() {
      t8cjyo['__super']['call'](this);;
    }return z64b(t8cjyo, 'laya.wx.mini.MiniFileMgr', kf_q$e), t8cjyo['isLoadFile'] = function (b746la) {
      return t8cjyo['_fileTypeArr']['indexOf'](b746la) != -0x1 ? !![] : ![];
    }, t8cjyo['getFileInfo'] = function (gxv) {
      var cstm2j = gxv['split']('?')[0x0],
          n6r0zu = t8cjyo['filesListObj'][cstm2j];if (n6r0zu == null) return null;else return n6r0zu;return null;
    }, t8cjyo['onFileUpdate'] = function (e$f_q, e_i$1) {
      var tj2m8c = e$f_q['split']('/'),
          qke5$f = tj2m8c[tj2m8c['length'] - 0x1],
          fe$k5q = t8cjyo['getFileInfo'](e_i$1);if (fe$k5q == null) t8cjyo['onSaveFile'](e_i$1, qke5$f);else {
        if (fe$k5q['readyUrl'] != e_i$1) t8cjyo['remove'](qke5$f, e_i$1);
      }
    }, t8cjyo['exits'] = function ($qkw5, f5$ekq) {
      var b3749l = t8cjyo['getFileNativePath']($qkw5);t8cjyo['fs']['getFileInfo']({ 'filePath': b3749l, 'success': function (n6ab4z) {
          f5$ekq != null && f5$ekq['runWith']([0x0, n6ab4z]);
        }, 'fail': function (iu10n) {
          f5$ekq != null && f5$ekq['runWith']([0x1, iu10n]);
        } });
    }, t8cjyo['read'] = function (l97b43, ba4zl, jhyoc8, la7b4) {
      ba4zl === void 0x0 && (ba4zl = 'ascill'), la7b4 === void 0x0 && (la7b4 = '');var bl479a;la7b4 != '' ? bl479a = t8cjyo['getFileNativePath'](l97b43) : bl479a = l97b43, t8cjyo['fs']['readFile']({ 'filePath': bl479a, 'encoding': ba4zl, 'success': function (b49l73) {
          jhyoc8 != null && jhyoc8['runWith']([0x0, b49l73]);
        }, 'fail': function (f_$ek) {
          if (f_$ek && la7b4 != '') t8cjyo['down'](la7b4, ba4zl, jhyoc8, la7b4);else jhyoc8 != null && jhyoc8['runWith']([0x1]);
        } });
    }, t8cjyo['readNativeFile'] = function (eq5$kf, zb4a) {
      t8cjyo['fs']['readFile']({ 'filePath': eq5$kf, 'encoding': '', 'success': function (uar6n) {
          zb4a != null && zb4a['runWith']([0x0]);
        }, 'fail': function (r0u1_i) {
          zb4a != null && zb4a['runWith']([0x1]);
        } });
    }, t8cjyo['down'] = function (ochy8, q_$1, bnaz, a6nz4) {
      q_$1 === void 0x0 && (q_$1 = 'ascill'), a6nz4 === void 0x0 && (a6nz4 = '');var b734 = t8cjyo['getFileNativePath'](a6nz4),
          ctjsm2 = t8cjyo['wxdown']({ 'url': ochy8, 'filePath': b734, 'success': function (st2jm) {
          if (st2jm['statusCode'] === 0xc8) t8cjyo['readFile'](st2jm['filePath'], q_$1, bnaz, a6nz4);
        }, 'fail': function (fk$qe_) {
          bnaz != null && bnaz['runWith']([0x1, fk$qe_]);
        } });ctjsm2['onProgressUpdate'](function (m7s239) {
        bnaz != null && bnaz['runWith']([0x2, m7s239['progress']]);
      });
    }, t8cjyo['readFile'] = function (_u0r1i, joy8tc, feq$1_, q_1e0) {
      joy8tc === void 0x0 && (joy8tc = 'ascill'), q_1e0 === void 0x0 && (q_1e0 = ''), t8cjyo['fs']['readFile']({ 'filePath': _u0r1i, 'encoding': joy8tc, 'success': function (kvwfd5) {
          if (_u0r1i['indexOf']('http://') != -0x1 || _u0r1i['indexOf']('https://') != -0x1) t8cjyo['onFileUpdate'](_u0r1i, q_1e0);feq$1_ != null && feq$1_['runWith']([0x0, kvwfd5]);
        }, 'fail': function (bl467a) {
          if (bl467a) feq$1_ != null && feq$1_['runWith']([0x1, bl467a]);
        } });
    }, t8cjyo['downImg'] = function (qf$_e, l79a4, tmc28) {
      tmc28 === void 0x0 && (tmc28 = '');var uznr6 = t8cjyo['wxdown']({ 'url': qf$_e, 'success': function (wkdf5) {
          wkdf5['statusCode'] === 0xc8 && t8cjyo['copyFile'](wkdf5['tempFilePath'], tmc28, l79a4);
        }, 'fail': function (cjtoy8) {
          l79a4 != null && l79a4['runWith']([0x1, cjtoy8]);
        } });
    }, t8cjyo['copyFile'] = function (_1r0ui, u4azn, _1qie$) {
      var zun60 = _1r0ui['split']('/'),
          k$wfv5 = zun60[zun60['length'] - 0x1],
          ct8jm2 = u4azn['split']('?')[0x0],
          e_r0i = t8cjyo['getFileInfo'](u4azn),
          m2j8ct = t8cjyo['getFileNativePath'](k$wfv5);t8cjyo['fs']['copyFile']({ 'srcPath': _1r0ui, 'destPath': m2j8ct, 'success': function (t239sm) {
          if (!e_r0i) t8cjyo['onSaveFile'](u4azn, k$wfv5), _1qie$ != null && _1qie$['runWith']([0x0]);else {
            if (e_r0i['readyUrl'] != u4azn) t8cjyo['remove'](k$wfv5, u4azn, _1qie$);
          }
        }, 'fail': function (m23ts9) {
          _1qie$ != null && _1qie$['runWith']([0x1, m23ts9]);
        } });
    }, t8cjyo['getFileNativePath'] = function (co8j2) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + co8j2;
    }, t8cjyo['remove'] = function (fqe$_, q$5ek, $eq5) {
      q$5ek === void 0x0 && (q$5ek = '');var k5dwv = t8cjyo['getFileInfo'](q$5ek),
          iun01 = t8cjyo['getFileNativePath'](k5dwv['md5']);sjtmc2['loader']['clearRes'](k5dwv['readyUrl']), t8cjyo['fs']['unlink']({ 'filePath': iun01, 'success': function (jyhoc8) {
          if (q$5ek != '') t8cjyo['onSaveFile'](q$5ek, fqe$_);$eq5 != null && $eq5['runWith']([0x0]);
        }, 'fail': function (l73sb) {} });
    }, t8cjyo['onSaveFile'] = function (hojp8y, jsmc) {
      var zla6b4 = hojp8y['split']('?')[0x0];t8cjyo['filesListObj'][zla6b4] = { 'md5': jsmc, 'readyUrl': hojp8y }, t8cjyo['fs']['writeFile']({ 'filePath': t8cjyo['fileNativeDir'] + '/' + t8cjyo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t8cjyo['filesListObj']), 'success': function (b9s7) {
          console['log']('写入测试测试成功：', b9s7);
        }, 'fail': function ($k_e) {
          console['log']('写入测试测试失败：', $k_e);
        } });
    }, t8cjyo['existDir'] = function (ctm23, nrz6) {
      t8cjyo['fs']['mkdir']({ 'dirPath': ctm23, 'success': function (fwqk5$) {
          nrz6 != null && nrz6['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (lab9) {
          if (lab9['errMsg']['indexOf']('file already exists') != -0x1) t8cjyo['readSync'](t8cjyo['fileListName'], 'utf8', nrz6);else nrz6 != null && nrz6['runWith']([0x1, lab9]);
        } });
    }, t8cjyo['readSync'] = function (kxwv, m3c2, s923m7, _q$i) {
      m3c2 === void 0x0 && (m3c2 = 'ascill'), _q$i === void 0x0 && (_q$i = '');var m3ls79 = t8cjyo['getFileNativePath'](kxwv),
          z6ru;try {
        z6ru = t8cjyo['fs']['readFileSync'](m3ls79), s923m7 != null && s923m7['runWith']([0x0, { 'data': z6ru }]);
      } catch (z4b) {
        s923m7 != null && s923m7['runWith']([0x1]);
      }
    }, t8cjyo['readCache'] = function () {}, t8cjyo['writeCache'] = function (_e0i1) {
      var t23mc = readyUrl['split']('?')[0x0];t8cjyo['filesListObj'][t23mc] = { 'md5': md5Name, 'readyUrl': readyUrl }, t8cjyo['fs']['writeFile']({ 'filePath': t8cjyo['fileNativeDir'] + '/' + t8cjyo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t8cjyo['filesListObj']), 'success': function (cjot8) {}, 'fail': function (fkwvd5) {} });
    }, t8cjyo['setNativeFileDir'] = function (tocj8) {
      t8cjyo['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + tocj8;
    }, t8cjyo['filesListObj'] = {}, t8cjyo['fileNativeDir'] = null, t8cjyo['fileListName'] = 'layaairfiles.txt', t8cjyo['ziyuFileData'] = {}, a46zu(t8cjyo, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), t8cjyo;
  }(tjmc28),
      _ui10 = function ($e1qf_) {
    function x5dwkv() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], x5dwkv['__super']['call'](this), this['_sound'] = x5dwkv['_createSound']();
    }z64b(x5dwkv, 'laya.wx.mini.MiniSound', $e1qf_);var chj8oy = x5dwkv['prototype'];return chj8oy['load'] = function (abl4z6) {
      var y8cjho = this;abl4z6 = ojct82['formatURL'](abl4z6), this['url'] = abl4z6;if (x5dwkv['_audioCache'][abl4z6]) {
        this['event']('complete');return;
      }function t2c8mj() {
        if (x5dwkv['_null'] != undefined) y8cjho['_sound']['onCanplay'](x5dwkv['_null']), y8cjho['_sound']['onError'](x5dwkv['_null']);else try {
          y8cjho['_sound']['onCanplay'](null), y8cjho['_sound']['onError'](null), x5dwkv['_null'] = null;
        } catch (an46zu) {
          console['warn']('[wxmini] _clearSound:' + an46zu), y8cjho['_sound']['onCanplay'](s279m3), y8cjho['_sound']['onError'](s279m3), x5dwkv['_null'] = s279m3;
        }
      }function oc8y() {
        t2c8mj(), ho8c['loaded'] = !![], ho8c['event']('complete'), x5dwkv['_audioCache'][ho8c['url']] = ho8c;
      }function nz4ua(jh8oc) {
        console['error']('errCode=' + jh8oc['errCode'] + '  errMsg=' + jh8oc['errMsg']), t2c8mj(), ho8c['event']('error');
      }function s279m3() {}this['_sound']['onCanplay'](oc8y), this['_sound']['onError'](nz4ua), this['_sound']['src'] = abl4z6;var ho8c = this;
    }, chj8oy['play'] = function (h8ocy, zn0ur) {
      h8ocy === void 0x0 && (h8ocy = 0x0), zn0ur === void 0x0 && (zn0ur = 0x0);var _i0ru;if (this['url'] == aru6n['_tMusic']) {
        if (!x5dwkv['_musicAudio']) x5dwkv['_musicAudio'] = x5dwkv['_createSound']();_i0ru = x5dwkv['_musicAudio'];
      } else _i0ru = x5dwkv['_createSound']();_i0ru['src'] = this['url'];var e_01r = new dv5wk(_i0ru);return e_01r['url'] = this['url'], e_01r['loops'] = zn0ur, e_01r['startTime'] = h8ocy, e_01r['play'](), aru6n['addChannel'](e_01r), e_01r;
    }, chj8oy['dispose'] = function () {
      var zn6u = x5dwkv['_audioCache'][this['url']];zn6u && (zn6u['src'] = '', delete x5dwkv['_audioCache'][this['url']]);
    }, msc32t(0x0, chj8oy, 'duration', function () {
      return this['_sound']['duration'];
    }), x5dwkv['_createSound'] = function () {
      return x5dwkv['_id']++, oj8hcy['window']['wx']['createInnerAudioContext']();
    }, x5dwkv['_musicAudio'] = null, x5dwkv['_id'] = 0x0, x5dwkv['_audioCache'] = {}, x5dwkv['_null'] = undefined, x5dwkv;
  }(tjmc28),
      dv5wk = function (o82t) {
    function eqf$1_(u64n) {
      this['_audio'] = null, this['_onEnd'] = null, eqf$1_['__super']['call'](this), this['_audio'] = u64n, this['_onEnd'] = iru_0['bind'](this['__onEnd'], this), u64n['onEnded'](this['_onEnd']);
    }z64b(eqf$1_, 'laya.wx.mini.MiniSoundChannel', o82t);var r01_i = eqf$1_['prototype'];return r01_i['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (sjtmc2['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, r01_i['__onNull'] = function () {}, r01_i['play'] = function () {
      this['isStopped'] = ![], aru6n['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, r01_i['stop'] = function () {
      this['isStopped'] = !![], aru6n['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (eqf$1_['_null'] != undefined) this['_audio']['onEnded'](eqf$1_['_null']);else try {
        this['_audio']['onEnded'](null), eqf$1_['_null'] = null;
      } catch (rn0z) {
        console['warn']('[wxmini] stop:' + rn0z), this['_audio']['onEnded'](iru_0['bind'](this['__onNull'], this)), eqf$1_['_null'] = iru_0['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, r01_i['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, r01_i['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], aru6n['addChannel'](this), this['_audio']['play']();
    }, msc32t(0x0, r01_i, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), msc32t(0x0, r01_i, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), msc32t(0x0, r01_i, 'volume', function () {
      return 0x1;
    }, function (c8oty) {}), eqf$1_['_null'] = undefined, eqf$1_;
  }(inurz0);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var _f$eq1 in Laya) {
    var tj2o = Laya[_f$eq1];tj2o && tj2o['__isclass'] && (exports[_f$eq1] = tj2o);
  }
});