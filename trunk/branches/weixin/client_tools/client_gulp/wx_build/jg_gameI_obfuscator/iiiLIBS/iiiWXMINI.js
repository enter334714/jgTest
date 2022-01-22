var Q = wx.$I;
(function (window, document, ctm91v) {
  var rv9mi = ctm91v['un'],
      vm19tc = ctm91v['uns'],
      r9t1 = ctm91v['static'],
      ks2eq = ctm91v['class'],
      ebsqu = ctm91v['getset'],
      j8fcp_ = ctm91v['__newvec'],
      _836aj = laya['utils']['Browser'],
      uesq = laya['events']['Event'],
      c1vtm = laya['events']['EventDispatcher'],
      e7b3a6 = laya['resource']['HTMLImage'],
      j8367a = laya['utils']['Handler'],
      knus = laya['display']['Input'],
      y0olg = laya['net']['Loader'],
      ogzly = laya['maths']['Matrix'],
      f8c_pj = laya['renders']['Render'],
      $9r = laya['utils']['RunDriver'],
      ksu2qe = laya['media']['Sound'],
      ja7386 = laya['media']['SoundChannel'],
      loy0 = laya['media']['SoundManager'],
      p_f1c8 = laya['display']['Stage'],
      $t9lr = laya['net']['URL'],
      qbke = laya['utils']['Utils'],
      q2wk5 = function () {
    function ap_f() {}return ks2eq(ap_f, 'laya.wx.mini.MiniAdpter'), ap_f['getJson'] = function ($zritl) {
      return JSON['parse']($zritl);
    }, ap_f['init'] = function (eus2q, jf68_) {
      eus2q === void 0x0 && (eus2q = ![]), jf68_ === void 0x0 && (jf68_ = ![]);if (ap_f['_inited']) return;ap_f['window'] = window;if (ap_f['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ap_f['_inited'] = !![], ap_f['isZiYu'] = jf68_, ap_f['isPosMsgYu'] = eus2q, ap_f['EnvConfig'] = {}, !ap_f['isZiYu'] && (ea6['setNativeFileDir']('/layaairGame'), ea6['existDir'](ea6['fileNativeDir'], j8367a['create'](ap_f, ap_f['onMkdirCallBack']))), ap_f['window']['focus'] = function () {}, ctm91v['getUrlPath'] = function () {}, ap_f['window']['logtime'] = function (tl$ir9) {}, ap_f['window']['alertTimeLog'] = function (z$l0og) {}, ap_f['window']['resetShareInfo'] = function () {}, ap_f['window']['CanvasRenderingContext2D'] = function () {}, ap_f['window']['CanvasRenderingContext2D']['prototype'] = ap_f['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ap_f['window']['document']['body']['appendChild'] = function () {}, ap_f['EnvConfig']['pixelRatioInt'] = 0x0, $9r['getPixelRatio'] = ap_f['pixelRatio'], ap_f['_preCreateElement'] = _836aj['createElement'], _836aj['createElement'] = ap_f['createElement'], $9r['createShaderCondition'] = ap_f['createShaderCondition'], qbke['parseXMLFromString'] = ap_f['parseXMLFromString'], knus['_createInputElement'] = qun5k['_createInputElement'], ap_f['EnvConfig']['load'] = y0olg['prototype']['load'], y0olg['prototype']['load'] = $l0gi['prototype']['load'], ap_f['isZiYu'] && eus2q && wx['onMessage'](function (q4wn25) {
        q4wn25['isLoad'] && (ea6['ziyuFileData'][q4wn25['url']] = q4wn25['data']);
      });
    }, ap_f['onMkdirCallBack'] = function (o$zl, p_cfj8) {
      if (!o$zl) ea6['filesListObj'] = JSON['parse'](p_cfj8['data']);
    }, ap_f['pixelRatio'] = function () {
      if (!ap_f['EnvConfig']['pixelRatioInt']) try {
        var f8p_c = wx['getSystemInfoSync']();return ap_f['EnvConfig']['pixelRatioInt'] = f8p_c['pixelRatio'], f8p_c = f8p_c, f8p_c['pixelRatio'];
      } catch (zi0l$g) {}return ap_f['EnvConfig']['pixelRatioInt'];
    }, ap_f['createElement'] = function (w5nk2) {
      if (w5nk2 == 'canvas') {
        var ab3e7;return ap_f['idx'] == 0x1 ? ap_f['isZiYu'] ? (ab3e7 = sharedCanvas, ab3e7['style'] = {}) : ab3e7 = window['canvas'] : ab3e7 = window['wx']['createCanvas'](), ap_f['idx']++, ab3e7;
      } else {
        if (w5nk2 == 'textarea' || w5nk2 == 'input') return ap_f['onCreateInput'](w5nk2);else {
          if (w5nk2 == 'div') {
            var t$9riv = ap_f['_preCreateElement'](w5nk2);return t$9riv['contains'] = function (skbeuq) {
              return null;
            }, t$9riv['removeChild'] = function (esu) {}, t$9riv;
          } else return ap_f['_preCreateElement'](w5nk2);
        }
      }
    }, ap_f['onCreateInput'] = function (mvc1fp) {
      var r9mti = ap_f['_preCreateElement'](mvc1fp);return r9mti['focus'] = qun5k['wxinputFocus'], r9mti['blur'] = qun5k['wxinputblur'], r9mti['style'] = {}, r9mti['value'] = 0x0, r9mti['parentElement'] = {}, r9mti['placeholder'] = {}, r9mti['type'] = {}, r9mti['setColor'] = function (w5q) {}, r9mti['setType'] = function (f1pcmv) {}, r9mti['setFontFace'] = function (zl$irt) {}, r9mti['addEventListener'] = function (mf_1cp) {}, r9mti['contains'] = function (bskqeu) {
        return null;
      }, r9mti['removeChild'] = function (j83_6) {}, r9mti;
    }, ap_f['createShaderCondition'] = function (qke2us) {
      var u2kqn5 = this,
          s36be7 = function () {
        var vr19mt = qke2us;return u2kqn5[qke2us['replace']('this.', '')];
      };return s36be7;
    }, ap_f['EnvConfig'] = null, ap_f['window'] = null, ap_f['_preCreateElement'] = null, ap_f['_inited'] = ![], ap_f['wxRequest'] = null, ap_f['systemInfo'] = null, ap_f['version'] = '0.0.1', ap_f['isZiYu'] = ![], ap_f['isPosMsgYu'] = ![], ap_f['parseXMLFromString'] = function (n4h5w2) {
      var vrmti9, $l0oz;n4h5w2 = n4h5w2['replace'](/>\s+</g, '><');try {
        vrmti9 = new window['Parser']['DOMParser']()['parseFromString'](n4h5w2, 'text/xml');
      } catch (rzl0$) {
        throw '需要引入xml解析库文件';
      }return vrmti9;
    }, ap_f['idx'] = 0x1, ap_f;
  }(),
      dyzg0 = function () {
    function mr1tv9() {}ks2eq(mr1tv9, 'laya.wx.mini.MiniImage');var eksq2u = mr1tv9['prototype'];return eksq2u['_loadImage'] = function (il0r) {
      var ogyl0z = this,
          jf_86a = ![];il0r['indexOf']('layaNativeDir/') == -0x1 && (jf_86a = !![], il0r = $t9lr['formatURL'](il0r));if (!ea6['getFileInfo'](il0r)) {
        if (il0r['indexOf']('http://') != -0x1 || il0r['indexOf']('https://') != -0x1) ea6['downImg'](il0r, new j8367a(mr1tv9, mr1tv9['onDownImgCallBack'], [il0r, ogyl0z]), il0r);else mr1tv9['onCreateImage'](il0r, ogyl0z, !![]);
      } else mr1tv9['onCreateImage'](il0r, ogyl0z, !jf_86a);
    }, mr1tv9['onDownImgCallBack'] = function (vfc, yd, zlo0yg) {
      if (!zlo0yg) mr1tv9['onCreateImage'](vfc, yd);else yd['onError'](null);
    }, mr1tv9['onCreateImage'] = function (zgy0d, kqesu, pc1mv) {
      pc1mv === void 0x0 && (pc1mv = ![]);var tzl$ri;if (!pc1mv) {
        var m_c1pf = ea6['getFileInfo'](zgy0d),
            s73b = m_c1pf['md5'];tzl$ri = ea6['getFileNativePath'](s73b);
      } else tzl$ri = zgy0d;if (kqesu['imgCache'] == null) kqesu['imgCache'] = {};var nh5xw4;function v9ri$() {
        nh5xw4['onload'] = null, nh5xw4['onerror'] = null, delete kqesu['imgCache'][zgy0d];
      };var dy0ogz = function () {
        v9ri$(), kqesu['onLoaded'](nh5xw4);
      },
          ig$zl0 = function () {
        v9ri$(), kqesu['event']('error', 'Load image failed');
      };kqesu['_type'] == 'nativeimage' ? (nh5xw4 = new _836aj['window']['Image'](), nh5xw4['crossOrigin'] = '', nh5xw4['onload'] = dy0ogz, nh5xw4['onerror'] = ig$zl0, nh5xw4['src'] = tzl$ri, kqesu['imgCache'][zgy0d] = nh5xw4) : new e7b3a6['create'](tzl$ri, { 'onload': dy0ogz, 'onerror': ig$zl0, 'onCreate': function (c_p81) {
          nh5xw4 = c_p81, kqesu['imgCache'][zgy0d] = c_p81;
        } });
    }, mr1tv9;
  }(),
      qun5k = function () {
    function sknuq2() {}return ks2eq(sknuq2, 'laya.wx.mini.MiniInput'), sknuq2['_createInputElement'] = function () {
      knus['_initInput'](knus['area'] = _836aj['createElement']('textarea')), knus['_initInput'](knus['input'] = _836aj['createElement']('input')), knus['inputContainer'] = _836aj['createElement']('div'), knus['inputContainer']['style']['position'] = 'absolute', knus['inputContainer']['style']['zIndex'] = 0x186a0, _836aj['container']['appendChild'](knus['inputContainer']), knus['inputContainer']['setPos'] = function (ogz0l$, c_p1fm) {
        knus['inputContainer']['style']['left'] = ogz0l$ + 'px', knus['inputContainer']['style']['top'] = c_p1fm + 'px';
      }, ctm91v['stage']['on']('resize', null, sknuq2['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (v1pfm) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), loy0['_soundClass'] = fa_j, loy0['_musicClass'] = fa_j;
    }, sknuq2['_onStageResize'] = function () {
      var fc18p_ = ctm91v['stage']['_canvasTransform']['identity']();fc18p_['scale'](_836aj['width'] / f8c_pj['canvas']['width'] / $9r['getPixelRatio'](), _836aj['height'] / f8c_pj['canvas']['height'] / $9r['getPixelRatio']());
    }, sknuq2['wxinputFocus'] = function (suk2qe) {
      var cp1_f = knus['inputElement']['target'];if (cp1_f && !cp1_f['editable']) return;q2wk5['window']['wx']['offKeyboardConfirm'](), q2wk5['window']['wx']['offKeyboardInput'](), q2wk5['window']['wx']['showKeyboard']({ 'defaultValue': cp1_f['text'], 'maxLength': cp1_f['maxChars'], 'multiple': cp1_f['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function ($gl0o) {}, 'fail': function (gyzol0) {} }), q2wk5['window']['wx']['onKeyboardConfirm'](function (zd0goy) {
        var tlr$zi = zd0goy ? zd0goy['value'] : '';cp1_f['text'] = tlr$zi, cp1_f['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), q2wk5['window']['wx']['onKeyboardInput'](function (j83_a) {
        var kqw52 = j83_a ? j83_a['value'] : '';if (!cp1_f['multiline']) {
          if (kqw52['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }cp1_f['text'] = kqw52, cp1_f['event']('input');
      });
    }, sknuq2['inputEnter'] = function () {
      knus['inputElement']['target']['focus'] = ![];
    }, sknuq2['wxinputblur'] = function () {
      sknuq2['hideKeyboard']();
    }, sknuq2['hideKeyboard'] = function () {
      q2wk5['window']['wx']['offKeyboardConfirm'](), q2wk5['window']['wx']['offKeyboardInput'](), q2wk5['window']['wx']['hideKeyboard']({ 'success': function (cfpvm1) {
          console['log']('隐藏键盘');
        }, 'fail': function (n5q2) {
          console['log']('隐藏键盘出错:' + (n5q2 ? n5q2['errMsg'] : ''));
        } });
    }, sknuq2;
  }(),
      $l0gi = function () {
    function nu52k() {}ks2eq(nu52k, 'laya.wx.mini.MiniLoader');var _cmf1p = nu52k['prototype'];return _cmf1p['load'] = function (ir, wh52n, t$i9l, x54nh, esb67) {
      t$i9l === void 0x0 && (t$i9l = !![]), esb67 === void 0x0 && (esb67 = ![]);var vt$9ri = this;vt$9ri['_url'] = ir;if (ir['indexOf']('data:image') === 0x0) vt$9ri['_type'] = wh52n = 'image';else vt$9ri['_type'] = wh52n || (wh52n = vt$9ri['getTypeFromUrl'](ir));vt$9ri['_cache'] = t$i9l, vt$9ri['_data'] = null;var ku2sqn = 'ascii';if (ir['indexOf']('.fnt') != -0x1) ku2sqn = 'utf8';else wh52n == 'arraybuffer' && (ku2sqn = '');;var t9vm1c = qbke['getFileExtension'](ir);if (nu52k['_fileTypeArr']['indexOf'](t9vm1c) != -0x1) q2wk5['EnvConfig']['load']['call'](this, ir, wh52n, t$i9l, x54nh, esb67);else {
        if (!ea6['getFileInfo'](ir)) {
          if (ir['indexOf']('layaNativeDir/') != -0x1) {
            if (q2wk5['isZiYu']) {
              var seuqkb = ea6['ziyuFileData'][ir];vt$9ri['onLoaded'](seuqkb);return;
            } else {
              cosnole['log']('read read'), ea6['read'](ir, ku2sqn, new j8367a(nu52k, nu52k['onReadNativeCallBack'], [ku2sqn, ir, wh52n, t$i9l, x54nh, esb67, vt$9ri]));return;
            }
          }if ($t9lr['rootPath'] == '') var a38j6_ = ir;else a38j6_ = ir['split']($t9lr['rootPath'])[0x0];ir['indexOf']('http://') != -0x1 || ir['indexOf']('https://') != -0x1 ? q2wk5['EnvConfig']['load']['call'](vt$9ri, ir, wh52n, t$i9l, x54nh, esb67) : ea6['readFile'](a38j6_, ku2sqn, new j8367a(nu52k, nu52k['onReadNativeCallBack'], [ku2sqn, ir, wh52n, t$i9l, x54nh, esb67, vt$9ri]), ir);
        } else q2wk5['EnvConfig']['load']['call'](this, ir, wh52n, t$i9l, x54nh, esb67);
      }
    }, _cmf1p['resMgrLoad'] = function (ri$tv9, j86a3_, f_cpj, uq2se, mtv1c, lrzt$i, cvm1t9) {
      f_cpj === void 0x0 && (f_cpj = 0x0), uq2se === void 0x0 && (uq2se = ![]), mtv1c === void 0x0 && (mtv1c = ![]), lrzt$i === void 0x0 && (lrzt$i = 0x0), cvm1t9 === void 0x0 && (cvm1t9 = 0x3), ri$tv9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ri$tv9), q2wk5['EnvConfig']['resMgrLoad'](ri$tv9, (l0go$z, ja68_3, $irl) => {
        nu52k['prototype']['resMgrLoadCallBack'](l0go$z, ja68_3, $irl, j86a3_);
      }, f_cpj, uq2se, mtv1c, lrzt$i, cvm1t9);
    }, _cmf1p['resMgrLoadCallBack'] = function (cmv1p9, mvr9t, j8pf, q5wn2) {
      console['log']('buff:::', cmv1p9, j8pf, ea6['fileNativeDir'] + '///' + ea6['fileListName']), q5wn2(cmv1p9, mvr9t, j8pf);
    }, _cmf1p['clearRes'] = function (tv9c1, q4w2) {
      q4w2 === void 0x0 && (q4w2 = ![]);var pfm1 = this;pfm1['clearRes'](tv9c1, q4w2);var mrvt1 = ea6['getFileInfo'](tv9c1);if (mrvt1 && (tv9c1['indexOf']('http://') != -0x1 || tv9c1['indexOf']('https://') != -0x1)) {
        var irv = mrvt1['md5'],
            rl0$zi = ea6['getFileNativePath'](irv);ea6['remove'](rl0$zi);
      }
    }, nu52k['onReadNativeCallBack'] = function ($i0gl, mfp_c1, iltzr, e3su7, $ilzg, _j683a, s7eb3, cfv1p, q5kn2u) {
      e3su7 === void 0x0 && (e3su7 = !![]), _j683a === void 0x0 && (_j683a = ![]), cfv1p === void 0x0 && (cfv1p = 0x0);if (!cfv1p) {
        var m19rt;if (iltzr == 'json' || iltzr == 'atlas') m19rt = q2wk5['getJson'](q5kn2u['data']);else iltzr == 'xml' ? m19rt = qbke['parseXMLFromString'](q5kn2u['data']) : m19rt = q5kn2u['data'];s7eb3['onLoaded'](m19rt), !q2wk5['isZiYu'] && q2wk5['isPosMsgYu'] && iltzr != 'arraybuffer' && wx['postMessage']({ 'url': mfp_c1, 'data': m19rt, 'isLoad': !![] });
      } else cfv1p == 0x1 && q2wk5['EnvConfig']['load']['call'](s7eb3, mfp_c1, iltzr, e3su7, $ilzg, _j683a);
    }, r9t1(nu52k, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), nu52k;
  }(),
      ea6 = function (e67ba) {
    function ti$zr() {
      ti$zr['__super']['call'](this);;
    }return ks2eq(ti$zr, 'laya.wx.mini.MiniFileMgr', e67ba), ti$zr['isLoadFile'] = function (mf_p) {
      return ti$zr['_fileTypeArr']['indexOf'](mf_p) != -0x1 ? !![] : ![];
    }, ti$zr['getFileInfo'] = function (tlr$iz) {
      var wn52qk = tlr$iz['split']('?')[0x0],
          s7eku = ti$zr['filesListObj'][wn52qk];if (s7eku == null) return null;else return s7eku;return null;
    }, ti$zr['onFileUpdate'] = function (a763be, k2nq5w) {
      var pc1m = a763be['split']('/'),
          od0gyz = pc1m[pc1m['length'] - 0x1],
          ukeb = ti$zr['getFileInfo'](k2nq5w);if (ukeb == null) ti$zr['onSaveFile'](k2nq5w, od0gyz);else {
        if (ukeb['readyUrl'] != k2nq5w) ti$zr['remove'](od0gyz, k2nq5w);
      }
    }, ti$zr['exits'] = function (l9ti, jcp) {
      var trzil = ti$zr['getFileNativePath'](l9ti);ti$zr['fs']['getFileInfo']({ 'filePath': trzil, 'success': function (f8apj_) {
          jcp != null && jcp['runWith']([0x0, f8apj_]);
        }, 'fail': function (mfc1vp) {
          jcp != null && jcp['runWith']([0x1, mfc1vp]);
        } });
    }, ti$zr['read'] = function (lg$oz, ba73e6, _1fcm, $9tilr) {
      ba73e6 === void 0x0 && (ba73e6 = 'ascill'), $9tilr === void 0x0 && ($9tilr = '');var nh54x;$9tilr != '' ? nh54x = ti$zr['getFileNativePath'](lg$oz) : nh54x = lg$oz, ti$zr['fs']['readFile']({ 'filePath': nh54x, 'encoding': ba73e6, 'success': function (pm_cf) {
          _1fcm != null && _1fcm['runWith']([0x0, pm_cf]);
        }, 'fail': function (uq2skn) {
          if (uq2skn && $9tilr != '') ti$zr['down']($9tilr, ba73e6, _1fcm, $9tilr);else _1fcm != null && _1fcm['runWith']([0x1]);
        } });
    }, ti$zr['readNativeFile'] = function (g0$zil, u7es) {
      ti$zr['fs']['readFile']({ 'filePath': g0$zil, 'encoding': '', 'success': function (vt19) {
          u7es != null && u7es['runWith']([0x0]);
        }, 'fail': function (t9vmri) {
          u7es != null && u7es['runWith']([0x1]);
        } });
    }, ti$zr['down'] = function (cm9t1, gyzo0d, fp8j_, li0r$z) {
      gyzo0d === void 0x0 && (gyzo0d = 'ascill'), li0r$z === void 0x0 && (li0r$z = '');var oz0ygd = ti$zr['getFileNativePath'](li0r$z),
          o$z0gl = ti$zr['wxdown']({ 'url': cm9t1, 'filePath': oz0ygd, 'success': function (kn25) {
          if (kn25['statusCode'] === 0xc8) ti$zr['readFile'](kn25['filePath'], gyzo0d, fp8j_, li0r$z);
        }, 'fail': function (aj368) {
          fp8j_ != null && fp8j_['runWith']([0x1, aj368]);
        } });o$z0gl['onProgressUpdate'](function (ir0$z) {
        fp8j_ != null && fp8j_['runWith']([0x2, ir0$z['progress']]);
      });
    }, ti$zr['readFile'] = function (a_jfp8, mvpc91, mp91, n2wq4) {
      mvpc91 === void 0x0 && (mvpc91 = 'ascill'), n2wq4 === void 0x0 && (n2wq4 = ''), ti$zr['fs']['readFile']({ 'filePath': a_jfp8, 'encoding': mvpc91, 'success': function (dg0zyo) {
          if (a_jfp8['indexOf']('http://') != -0x1 || a_jfp8['indexOf']('https://') != -0x1) ti$zr['onFileUpdate'](a_jfp8, n2wq4);mp91 != null && mp91['runWith']([0x0, dg0zyo]);
        }, 'fail': function (_jcpf8) {
          if (_jcpf8) mp91 != null && mp91['runWith']([0x1, _jcpf8]);
        } });
    }, ti$zr['downImg'] = function (mc9v, bu7, j6a_f8) {
      j6a_f8 === void 0x0 && (j6a_f8 = '');var a3eb7 = ti$zr['wxdown']({ 'url': mc9v, 'success': function (b37ea) {
          b37ea['statusCode'] === 0xc8 && ti$zr['copyFile'](b37ea['tempFilePath'], j6a_f8, bu7);
        }, 'fail': function (yg0lz) {
          bu7 != null && bu7['runWith']([0x1, yg0lz]);
        } });
    }, ti$zr['copyFile'] = function (ek7sbu, pm_f1c, se367) {
      var subq = ek7sbu['split']('/'),
          v9rm1 = subq[subq['length'] - 0x1],
          squk2n = pm_f1c['split']('?')[0x0],
          _jfpa8 = ti$zr['getFileInfo'](pm_f1c),
          q2ku5 = ti$zr['getFileNativePath'](v9rm1);ti$zr['fs']['copyFile']({ 'srcPath': ek7sbu, 'destPath': q2ku5, 'success': function (zlir$0) {
          if (!_jfpa8) ti$zr['onSaveFile'](pm_f1c, v9rm1), se367 != null && se367['runWith']([0x0]);else {
            if (_jfpa8['readyUrl'] != pm_f1c) ti$zr['remove'](v9rm1, pm_f1c, se367);
          }
        }, 'fail': function (qse2uk) {
          se367 != null && se367['runWith']([0x1, qse2uk]);
        } });
    }, ti$zr['getFileNativePath'] = function (kq2w5) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + kq2w5;
    }, ti$zr['remove'] = function (fa6_8, nk2squ, zi$gl0) {
      nk2squ === void 0x0 && (nk2squ = '');var lzir = ti$zr['getFileInfo'](nk2squ),
          _cj8 = ti$zr['getFileNativePath'](lzir['md5']);ctm91v['loader']['clearRes'](lzir['readyUrl']), ti$zr['fs']['unlink']({ 'filePath': _cj8, 'success': function (rvt9m) {
          if (nk2squ != '') ti$zr['onSaveFile'](nk2squ, fa6_8);zi$gl0 != null && zi$gl0['runWith']([0x0]);
        }, 'fail': function (f1_8c) {} });
    }, ti$zr['onSaveFile'] = function (n4w25q, w2k) {
      var zogy0d = n4w25q['split']('?')[0x0];ti$zr['filesListObj'][zogy0d] = { 'md5': w2k, 'readyUrl': n4w25q }, ti$zr['fs']['writeFile']({ 'filePath': ti$zr['fileNativeDir'] + '/' + ti$zr['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ti$zr['filesListObj']), 'success': function (un) {
          console['log']('写入测试测试成功：', un);
        }, 'fail': function (nwq5k) {
          console['log']('写入测试测试失败：', nwq5k);
        } });
    }, ti$zr['existDir'] = function (vpfm1c, mvf1c) {
      ti$zr['fs']['mkdir']({ 'dirPath': vpfm1c, 'success': function (mfcv) {
          mvf1c != null && mvf1c['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (vm19pc) {
          if (vm19pc['errMsg']['indexOf']('file already exists') != -0x1) ti$zr['readSync'](ti$zr['fileListName'], 'utf8', mvf1c);else mvf1c != null && mvf1c['runWith']([0x1, vm19pc]);
        } });
    }, ti$zr['readSync'] = function (uqeksb, kue, mc1fvp, ril$zt) {
      kue === void 0x0 && (kue = 'ascill'), ril$zt === void 0x0 && (ril$zt = '');var j6a83_ = ti$zr['getFileNativePath'](uqeksb),
          c8_p1;try {
        c8_p1 = ti$zr['fs']['readFileSync'](j6a83_), mc1fvp != null && mc1fvp['runWith']([0x0, { 'data': c8_p1 }]);
      } catch (u7e) {
        mc1fvp != null && mc1fvp['runWith']([0x1]);
      }
    }, ti$zr['readCache'] = function () {}, ti$zr['writeCache'] = function (j3a87) {
      var keubs = readyUrl['split']('?')[0x0];ti$zr['filesListObj'][keubs] = { 'md5': md5Name, 'readyUrl': readyUrl }, ti$zr['fs']['writeFile']({ 'filePath': ti$zr['fileNativeDir'] + '/' + ti$zr['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ti$zr['filesListObj']), 'success': function (be76) {}, 'fail': function (g0ozl$) {} });
    }, ti$zr['setNativeFileDir'] = function (f1_8pc) {
      ti$zr['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + f1_8pc;
    }, ti$zr['filesListObj'] = {}, ti$zr['fileNativeDir'] = null, ti$zr['fileListName'] = 'layaairfiles.txt', ti$zr['ziyuFileData'] = {}, r9t1(ti$zr, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ti$zr;
  }(c1vtm),
      fa_j = function (f1mvp) {
    function q52nku() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], q52nku['__super']['call'](this), this['_sound'] = q52nku['_createSound']();
    }ks2eq(q52nku, 'laya.wx.mini.MiniSound', f1mvp);var paj = q52nku['prototype'];return paj['load'] = function (nsk2uq) {
      var t$9i = this;nsk2uq = $t9lr['formatURL'](nsk2uq), this['url'] = nsk2uq;if (q52nku['_audioCache'][nsk2uq]) {
        this['event']('complete');return;
      }function mvt9c() {
        if (q52nku['_null'] != undefined) t$9i['_sound']['onCanplay'](q52nku['_null']), t$9i['_sound']['onError'](q52nku['_null']);else try {
          t$9i['_sound']['onCanplay'](null), t$9i['_sound']['onError'](null), q52nku['_null'] = null;
        } catch (sque2) {
          console['warn']('[wxmini] _clearSound:' + sque2), t$9i['_sound']['onCanplay'](z0o$l), t$9i['_sound']['onError'](z0o$l), q52nku['_null'] = z0o$l;
        }
      }function tcv1() {
        mvt9c(), r$l9it['loaded'] = !![], r$l9it['event']('complete'), q52nku['_audioCache'][r$l9it['url']] = r$l9it;
      }function a_fj86(fap8) {
        console['error']('errCode=' + fap8['errCode'] + '  errMsg=' + fap8['errMsg']), mvt9c(), r$l9it['event']('error');
      }function z0o$l() {}this['_sound']['onCanplay'](tcv1), this['_sound']['onError'](a_fj86), this['_sound']['src'] = nsk2uq;var r$l9it = this;
    }, paj['play'] = function (vmit9, $t9ilr) {
      vmit9 === void 0x0 && (vmit9 = 0x0), $t9ilr === void 0x0 && ($t9ilr = 0x0);var r$0zl;if (this['url'] == loy0['_tMusic']) {
        if (!q52nku['_musicAudio']) q52nku['_musicAudio'] = q52nku['_createSound']();r$0zl = q52nku['_musicAudio'];
      } else r$0zl = q52nku['_createSound']();r$0zl['src'] = this['url'];var b37ae6 = new esuk2q(r$0zl);return b37ae6['url'] = this['url'], b37ae6['loops'] = $t9ilr, b37ae6['startTime'] = vmit9, b37ae6['play'](), loy0['addChannel'](b37ae6), b37ae6;
    }, paj['dispose'] = function () {
      var fmvpc1 = q52nku['_audioCache'][this['url']];fmvpc1 && (fmvpc1['src'] = '', delete q52nku['_audioCache'][this['url']]);
    }, ebsqu(0x0, paj, 'duration', function () {
      return this['_sound']['duration'];
    }), q52nku['_createSound'] = function () {
      return q52nku['_id']++, q2wk5['window']['wx']['createInnerAudioContext']();
    }, q52nku['_musicAudio'] = null, q52nku['_id'] = 0x0, q52nku['_audioCache'] = {}, q52nku['_null'] = undefined, q52nku;
  }(c1vtm),
      esuk2q = function (aj3867) {
    function b7us(q2nku5) {
      this['_audio'] = null, this['_onEnd'] = null, b7us['__super']['call'](this), this['_audio'] = q2nku5, this['_onEnd'] = qbke['bind'](this['__onEnd'], this), q2nku5['onEnded'](this['_onEnd']);
    }ks2eq(b7us, 'laya.wx.mini.MiniSoundChannel', aj3867);var un2 = b7us['prototype'];return un2['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ctm91v['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, un2['__onNull'] = function () {}, un2['play'] = function () {
      this['isStopped'] = ![], loy0['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, un2['stop'] = function () {
      this['isStopped'] = !![], loy0['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (b7us['_null'] != undefined) this['_audio']['onEnded'](b7us['_null']);else try {
        this['_audio']['onEnded'](null), b7us['_null'] = null;
      } catch (c1p8) {
        console['warn']('[wxmini] stop:' + c1p8), this['_audio']['onEnded'](qbke['bind'](this['__onNull'], this)), b7us['_null'] = qbke['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, un2['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, un2['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], loy0['addChannel'](this), this['_audio']['play']();
    }, ebsqu(0x0, un2, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ebsqu(0x0, un2, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ebsqu(0x0, un2, 'volume', function () {
      return 0x1;
    }, function (usk7) {}), b7us['_null'] = undefined, b7us;
  }(ja7386);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var f_aj8p in Laya) {
    var pfj_ = Laya[f_aj8p];pfj_ && pfj_['__isclass'] && (exports[f_aj8p] = pfj_);
  }
});