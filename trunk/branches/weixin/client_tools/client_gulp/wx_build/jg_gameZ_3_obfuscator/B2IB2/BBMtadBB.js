var D = wx.$b;
(function (window, document, kgxr) {
  var z$38a = kgxr['un'],
      azy = kgxr['uns'],
      pkvgxr = kgxr['static'],
      ieht2 = kgxr['class'],
      rkvpg = kgxr['getset'],
      otjl2 = kgxr['__newvec'],
      qojl = laya['utils']['Browser'],
      rvgpk = laya['events']['Event'],
      a7uy$w = laya['events']['EventDispatcher'],
      s12h = laya['resource']['HTMLImage'],
      kxgp = laya['utils']['Handler'],
      pgvxkr = laya['display']['Input'],
      pvkxrg = laya['net']['Loader'],
      mc0 = laya['maths']['Matrix'],
      _d7f4 = laya['renders']['Render'],
      jo2lt = laya['utils']['RunDriver'],
      qetloj = laya['media']['Sound'],
      ifs1m = laya['media']['SoundChannel'],
      othi2 = laya['media']['SoundManager'],
      olj = laya['display']['Stage'],
      eihot2 = laya['net']['URL'],
      $zun83 = laya['utils']['Utils'],
      ot2eih = function () {
    function au7ydw() {}return ieht2(au7ydw, 'laya.wx.mini.MiniAdpter'), au7ydw['getJson'] = function (f7d4_) {
      return JSON['parse'](f7d4_);
    }, au7ydw['init'] = function ($uyza8, ihsc1m) {
      $uyza8 === void 0x0 && ($uyza8 = ![]), ihsc1m === void 0x0 && (ihsc1m = ![]);if (au7ydw['_inited']) return;au7ydw['window'] = window;if (au7ydw['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;au7ydw['_inited'] = !![], au7ydw['isZiYu'] = ihsc1m, au7ydw['isPosMsgYu'] = $uyza8, au7ydw['EnvConfig'] = {}, !au7ydw['isZiYu'] && (v56krg['setNativeFileDir']('/layaairGame'), v56krg['existDir'](v56krg['fileNativeDir'], kxgp['create'](au7ydw, au7ydw['onMkdirCallBack']))), au7ydw['window']['focus'] = function () {}, kgxr['getUrlPath'] = function () {}, au7ydw['window']['logtime'] = function (qjeol) {}, au7ydw['window']['alertTimeLog'] = function (c1shmi) {}, au7ydw['window']['resetShareInfo'] = function () {}, au7ydw['window']['CanvasRenderingContext2D'] = function () {}, au7ydw['window']['CanvasRenderingContext2D']['prototype'] = au7ydw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], au7ydw['window']['document']['body']['appendChild'] = function () {}, au7ydw['EnvConfig']['pixelRatioInt'] = 0x0, jo2lt['getPixelRatio'] = au7ydw['pixelRatio'], au7ydw['_preCreateElement'] = qojl['createElement'], qojl['createElement'] = au7ydw['createElement'], jo2lt['createShaderCondition'] = au7ydw['createShaderCondition'], $zun83['parseXMLFromString'] = au7ydw['parseXMLFromString'], pgvxkr['_createInputElement'] = gqj659['_createInputElement'], au7ydw['EnvConfig']['load'] = pvkxrg['prototype']['load'], pvkxrg['prototype']['load'] = y7awd['prototype']['load'], au7ydw['isZiYu'] && $uyza8 && wx['onMessage'](function (uy8$) {
        uy8$['isLoad'] && (v56krg['ziyuFileData'][uy8$['url']] = uy8$['data']);
      });
    }, au7ydw['onMkdirCallBack'] = function (aw7ydu, y4d7) {
      if (!aw7ydu) v56krg['filesListObj'] = JSON['parse'](y4d7['data']);
    }, au7ydw['pixelRatio'] = function () {
      if (!au7ydw['EnvConfig']['pixelRatioInt']) try {
        var gpkr6 = wx['getSystemInfoSync']();return au7ydw['EnvConfig']['pixelRatioInt'] = gpkr6['pixelRatio'], gpkr6 = gpkr6, gpkr6['pixelRatio'];
      } catch (c1fim) {}return au7ydw['EnvConfig']['pixelRatioInt'];
    }, au7ydw['createElement'] = function (r965) {
      if (r965 == 'canvas') {
        var h2c1s;return au7ydw['idx'] == 0x1 ? au7ydw['isZiYu'] ? (h2c1s = sharedCanvas, h2c1s['style'] = {}) : h2c1s = window['canvas'] : h2c1s = window['wx']['createCanvas'](), au7ydw['idx']++, h2c1s;
      } else {
        if (r965 == 'textarea' || r965 == 'input') return au7ydw['onCreateInput'](r965);else {
          if (r965 == 'div') {
            var y47w_ = au7ydw['_preCreateElement'](r965);return y47w_['contains'] = function (c0sf1) {
              return null;
            }, y47w_['removeChild'] = function (ywauz$) {}, y47w_;
          } else return au7ydw['_preCreateElement'](r965);
        }
      }
    }, au7ydw['onCreateInput'] = function (etol2) {
      var l569q = au7ydw['_preCreateElement'](etol2);return l569q['focus'] = gqj659['wxinputFocus'], l569q['blur'] = gqj659['wxinputblur'], l569q['style'] = {}, l569q['value'] = 0x0, l569q['parentElement'] = {}, l569q['placeholder'] = {}, l569q['type'] = {}, l569q['setColor'] = function (i2ct1h) {}, l569q['setType'] = function (u7w$ay) {}, l569q['setFontFace'] = function (s1cfm0) {}, l569q['addEventListener'] = function (eh2tlo) {}, l569q['contains'] = function (_7d4w0) {
        return null;
      }, l569q['removeChild'] = function (r5g69k) {}, l569q;
    }, au7ydw['createShaderCondition'] = function (csi) {
      var ayu7w = this,
          te2loj = function () {
        var awudy = csi;return ayu7w[csi['replace']('this.', '')];
      };return te2loj;
    }, au7ydw['EnvConfig'] = null, au7ydw['window'] = null, au7ydw['_preCreateElement'] = null, au7ydw['_inited'] = ![], au7ydw['wxRequest'] = null, au7ydw['systemInfo'] = null, au7ydw['version'] = '0.0.1', au7ydw['isZiYu'] = ![], au7ydw['isPosMsgYu'] = ![], au7ydw['parseXMLFromString'] = function (uyza8) {
      var xvrpk, ol5j9;uyza8 = uyza8['replace'](/>\s+</g, '><');try {
        xvrpk = new window['Parser']['DOMParser']()['parseFromString'](uyza8, 'text/xml');
      } catch (nu$8) {
        throw '需要引入xml解析库文件';
      }return xvrpk;
    }, au7ydw['idx'] = 0x1, au7ydw;
  }(),
      g6q = function () {
    function m1sfic() {}ieht2(m1sfic, 'laya.wx.mini.MiniImage');var ltq = m1sfic['prototype'];return ltq['_loadImage'] = function (gj69q) {
      var g5r9q6 = this,
          cih12s = ![];gj69q['indexOf']('layaNativeDir/') == -0x1 && (cih12s = !![], gj69q = eihot2['formatURL'](gj69q));if (!v56krg['getFileInfo'](gj69q)) {
        if (gj69q['indexOf']('http://') != -0x1 || gj69q['indexOf']('https://') != -0x1) v56krg['downImg'](gj69q, new kxgp(m1sfic, m1sfic['onDownImgCallBack'], [gj69q, g5r9q6]), gj69q);else m1sfic['onCreateImage'](gj69q, g5r9q6, !![]);
      } else m1sfic['onCreateImage'](gj69q, g5r9q6, !cih12s);
    }, m1sfic['onDownImgCallBack'] = function (y$wz, c0smf1, fd047) {
      if (!fd047) m1sfic['onCreateImage'](y$wz, c0smf1);else c0smf1['onError'](null);
    }, m1sfic['onCreateImage'] = function (a$wuy7, e2tcih, scf1m) {
      scf1m === void 0x0 && (scf1m = ![]);var uwaz;if (!scf1m) {
        var gkpvrx = v56krg['getFileInfo'](a$wuy7),
            s1icmf = gkpvrx['md5'];uwaz = v56krg['getFileNativePath'](s1icmf);
      } else uwaz = a$wuy7;if (e2tcih['imgCache'] == null) e2tcih['imgCache'] = {};var kprxv;function f1m0s() {
        kprxv['onload'] = null, kprxv['onerror'] = null, delete e2tcih['imgCache'][a$wuy7];
      };var ojtleq = function () {
        f1m0s(), e2tcih['onLoaded'](kprxv);
      },
          rv6pk = function () {
        f1m0s(), e2tcih['event']('error', 'Load image failed');
      };e2tcih['_type'] == 'nativeimage' ? (kprxv = new qojl['window']['Image'](), kprxv['crossOrigin'] = '', kprxv['onload'] = ojtleq, kprxv['onerror'] = rv6pk, kprxv['src'] = uwaz, e2tcih['imgCache'][a$wuy7] = kprxv) : new s12h['create'](uwaz, { 'onload': ojtleq, 'onerror': rv6pk, 'onCreate': function (mis1f) {
          kprxv = mis1f, e2tcih['imgCache'][a$wuy7] = mis1f;
        } });
    }, m1sfic;
  }(),
      gqj659 = function () {
    function lte2h() {}return ieht2(lte2h, 'laya.wx.mini.MiniInput'), lte2h['_createInputElement'] = function () {
      pgvxkr['_initInput'](pgvxkr['area'] = qojl['createElement']('textarea')), pgvxkr['_initInput'](pgvxkr['input'] = qojl['createElement']('input')), pgvxkr['inputContainer'] = qojl['createElement']('div'), pgvxkr['inputContainer']['style']['position'] = 'absolute', pgvxkr['inputContainer']['style']['zIndex'] = 0x186a0, qojl['container']['appendChild'](pgvxkr['inputContainer']), pgvxkr['inputContainer']['setPos'] = function (u8yz$, y8$azu) {
        pgvxkr['inputContainer']['style']['left'] = u8yz$ + 'px', pgvxkr['inputContainer']['style']['top'] = y8$azu + 'px';
      }, kgxr['stage']['on']('resize', null, lte2h['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fc1ims) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), othi2['_soundClass'] = olqt, othi2['_musicClass'] = olqt;
    }, lte2h['_onStageResize'] = function () {
      var w$uzay = kgxr['stage']['_canvasTransform']['identity']();w$uzay['scale'](qojl['width'] / _d7f4['canvas']['width'] / jo2lt['getPixelRatio'](), qojl['height'] / _d7f4['canvas']['height'] / jo2lt['getPixelRatio']());
    }, lte2h['wxinputFocus'] = function (jlq9o) {
      var s0m1c = pgvxkr['inputElement']['target'];if (s0m1c && !s0m1c['editable']) return;ot2eih['window']['wx']['offKeyboardConfirm'](), ot2eih['window']['wx']['offKeyboardInput'](), ot2eih['window']['wx']['showKeyboard']({ 'defaultValue': s0m1c['text'], 'maxLength': s0m1c['maxChars'], 'multiple': s0m1c['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ci2et) {}, 'fail': function (g6rq) {} }), ot2eih['window']['wx']['onKeyboardConfirm'](function (ihc2t) {
        var ih1 = ihc2t ? ihc2t['value'] : '';s0m1c['text'] = ih1, s0m1c['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ot2eih['window']['wx']['onKeyboardInput'](function (wda7yu) {
        var za8u$ = wda7yu ? wda7yu['value'] : '';if (!s0m1c['multiline']) {
          if (za8u$['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }s0m1c['text'] = za8u$, s0m1c['event']('input');
      });
    }, lte2h['inputEnter'] = function () {
      pgvxkr['inputElement']['target']['focus'] = ![];
    }, lte2h['wxinputblur'] = function () {
      lte2h['hideKeyboard']();
    }, lte2h['hideKeyboard'] = function () {
      ot2eih['window']['wx']['offKeyboardConfirm'](), ot2eih['window']['wx']['offKeyboardInput'](), ot2eih['window']['wx']['hideKeyboard']({ 'success': function (k6v5gr) {
          console['log']('隐藏键盘');
        }, 'fail': function (eltqj) {
          console['log']('隐藏键盘出错:' + (eltqj ? eltqj['errMsg'] : ''));
        } });
    }, lte2h;
  }(),
      y7awd = function () {
    function a8$uz() {}ieht2(a8$uz, 'laya.wx.mini.MiniLoader');var lehto2 = a8$uz['prototype'];return lehto2['load'] = function (_0m4df, leqto, f0dm_, y4wd7, _40w7) {
      f0dm_ === void 0x0 && (f0dm_ = !![]), _40w7 === void 0x0 && (_40w7 = ![]);var dw7uay = this;dw7uay['_url'] = _0m4df;if (_0m4df['indexOf']('data:image') === 0x0) dw7uay['_type'] = leqto = 'image';else dw7uay['_type'] = leqto || (leqto = dw7uay['getTypeFromUrl'](_0m4df));dw7uay['_cache'] = f0dm_, dw7uay['_data'] = null;var uy$z = 'ascii';if (_0m4df['indexOf']('.fnt') != -0x1) uy$z = 'utf8';else leqto == 'arraybuffer' && (uy$z = '');;var uz$a8y = $zun83['getFileExtension'](_0m4df);if (a8$uz['_fileTypeArr']['indexOf'](uz$a8y) != -0x1) ot2eih['EnvConfig']['load']['call'](this, _0m4df, leqto, f0dm_, y4wd7, _40w7);else {
        if (!v56krg['getFileInfo'](_0m4df)) {
          if (_0m4df['indexOf']('layaNativeDir/') != -0x1) {
            if (ot2eih['isZiYu']) {
              var qjg96 = v56krg['ziyuFileData'][_0m4df];dw7uay['onLoaded'](qjg96);return;
            } else {
              cosnole['log']('read read'), v56krg['read'](_0m4df, uy$z, new kxgp(a8$uz, a8$uz['onReadNativeCallBack'], [uy$z, _0m4df, leqto, f0dm_, y4wd7, _40w7, dw7uay]));return;
            }
          }if (eihot2['rootPath'] == '') var g6rk5 = _0m4df;else g6rk5 = _0m4df['split'](eihot2['rootPath'])[0x0];_0m4df['indexOf']('http://') != -0x1 || _0m4df['indexOf']('https://') != -0x1 ? ot2eih['EnvConfig']['load']['call'](dw7uay, _0m4df, leqto, f0dm_, y4wd7, _40w7) : v56krg['readFile'](g6rk5, uy$z, new kxgp(a8$uz, a8$uz['onReadNativeCallBack'], [uy$z, _0m4df, leqto, f0dm_, y4wd7, _40w7, dw7uay]), _0m4df);
        } else ot2eih['EnvConfig']['load']['call'](this, _0m4df, leqto, f0dm_, y4wd7, _40w7);
      }
    }, lehto2['resMgrLoad'] = function (rgkv, lqtoe, j5g6q, gpkvr6, gr6kv5, rq95, j9olqe) {
      j5g6q === void 0x0 && (j5g6q = 0x0), gpkvr6 === void 0x0 && (gpkvr6 = ![]), gr6kv5 === void 0x0 && (gr6kv5 = ![]), rq95 === void 0x0 && (rq95 = 0x0), j9olqe === void 0x0 && (j9olqe = 0x3), rgkv['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', rgkv), ot2eih['EnvConfig']['resMgrLoad'](rgkv, (fd4_07, iot2e, adw74y) => {
        a8$uz['prototype']['resMgrLoadCallBack'](fd4_07, iot2e, adw74y, lqtoe);
      }, j5g6q, gpkvr6, gr6kv5, rq95, j9olqe);
    }, lehto2['resMgrLoadCallBack'] = function (qjg956, rk56vg, kr5v, t1h2c) {
      console['log']('buff:::', qjg956, kr5v, v56krg['fileNativeDir'] + '///' + v56krg['fileListName']), t1h2c(qjg956, rk56vg, kr5v);
    }, lehto2['clearRes'] = function (oq9jle, rkp6gv) {
      rkp6gv === void 0x0 && (rkp6gv = ![]);var az8yu$ = this;az8yu$['clearRes'](oq9jle, rkp6gv);var s0_fm = v56krg['getFileInfo'](oq9jle);if (s0_fm && (oq9jle['indexOf']('http://') != -0x1 || oq9jle['indexOf']('https://') != -0x1)) {
        var m0d_f = s0_fm['md5'],
            n$u = v56krg['getFileNativePath'](m0d_f);v56krg['remove'](n$u);
      }
    }, a8$uz['onReadNativeCallBack'] = function (cth2, scmhi1, csfm0, f_4sm0, kprgx, d7f0_, xpgvr, ohte, zy8$) {
      f_4sm0 === void 0x0 && (f_4sm0 = !![]), d7f0_ === void 0x0 && (d7f0_ = ![]), ohte === void 0x0 && (ohte = 0x0);if (!ohte) {
        var oti2h;if (csfm0 == 'json' || csfm0 == 'atlas') oti2h = ot2eih['getJson'](zy8$['data']);else csfm0 == 'xml' ? oti2h = $zun83['parseXMLFromString'](zy8$['data']) : oti2h = zy8$['data'];xpgvr['onLoaded'](oti2h), !ot2eih['isZiYu'] && ot2eih['isPosMsgYu'] && csfm0 != 'arraybuffer' && wx['postMessage']({ 'url': scmhi1, 'data': oti2h, 'isLoad': !![] });
      } else ohte == 0x1 && ot2eih['EnvConfig']['load']['call'](xpgvr, scmhi1, csfm0, f_4sm0, kprgx, d7f0_);
    }, pkvgxr(a8$uz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), a8$uz;
  }(),
      v56krg = function (ay7$uw) {
    function qole9() {
      qole9['__super']['call'](this);;
    }return ieht2(qole9, 'laya.wx.mini.MiniFileMgr', ay7$uw), qole9['isLoadFile'] = function (fm0_d) {
      return qole9['_fileTypeArr']['indexOf'](fm0_d) != -0x1 ? !![] : ![];
    }, qole9['getFileInfo'] = function (o2ejlt) {
      var _s10mf = o2ejlt['split']('?')[0x0],
          uy8z$a = qole9['filesListObj'][_s10mf];if (uy8z$a == null) return null;else return uy8z$a;return null;
    }, qole9['onFileUpdate'] = function (_md04f, teol2) {
      var fim = _md04f['split']('/'),
          t21hci = fim[fim['length'] - 0x1],
          un83$ = qole9['getFileInfo'](teol2);if (un83$ == null) qole9['onSaveFile'](teol2, t21hci);else {
        if (un83$['readyUrl'] != teol2) qole9['remove'](t21hci, teol2);
      }
    }, qole9['exits'] = function (ethc, to2eh) {
      var kgrxvp = qole9['getFileNativePath'](ethc);qole9['fs']['getFileInfo']({ 'filePath': kgrxvp, 'success': function (jqlto) {
          to2eh != null && to2eh['runWith']([0x0, jqlto]);
        }, 'fail': function (s12hic) {
          to2eh != null && to2eh['runWith']([0x1, s12hic]);
        } });
    }, qole9['read'] = function (jto2e, hoie2t, jl9q65, othie2) {
      hoie2t === void 0x0 && (hoie2t = 'ascill'), othie2 === void 0x0 && (othie2 = '');var l2htoe;othie2 != '' ? l2htoe = qole9['getFileNativePath'](jto2e) : l2htoe = jto2e, qole9['fs']['readFile']({ 'filePath': l2htoe, 'encoding': hoie2t, 'success': function (ol5qj9) {
          jl9q65 != null && jl9q65['runWith']([0x0, ol5qj9]);
        }, 'fail': function (f07d_4) {
          if (f07d_4 && othie2 != '') qole9['down'](othie2, hoie2t, jl9q65, othie2);else jl9q65 != null && jl9q65['runWith']([0x1]);
        } });
    }, qole9['readNativeFile'] = function (lj9eqo, m01_s) {
      qole9['fs']['readFile']({ 'filePath': lj9eqo, 'encoding': '', 'success': function (s1cmi) {
          m01_s != null && m01_s['runWith']([0x0]);
        }, 'fail': function (k5gr6v) {
          m01_s != null && m01_s['runWith']([0x1]);
        } });
    }, qole9['down'] = function (s01fm, ywu7d, zwau, eqljot) {
      ywu7d === void 0x0 && (ywu7d = 'ascill'), eqljot === void 0x0 && (eqljot = '');var g6k5r9 = qole9['getFileNativePath'](eqljot),
          rgpvx = qole9['wxdown']({ 'url': s01fm, 'filePath': g6k5r9, 'success': function (f07_) {
          if (f07_['statusCode'] === 0xc8) qole9['readFile'](f07_['filePath'], ywu7d, zwau, eqljot);
        }, 'fail': function (sm1cfi) {
          zwau != null && zwau['runWith']([0x1, sm1cfi]);
        } });rgpvx['onProgressUpdate'](function (_4sm) {
        zwau != null && zwau['runWith']([0x2, _4sm['progress']]);
      });
    }, qole9['readFile'] = function (w7_y4d, mfc1s0, h2t, j9lq65) {
      mfc1s0 === void 0x0 && (mfc1s0 = 'ascill'), j9lq65 === void 0x0 && (j9lq65 = ''), qole9['fs']['readFile']({ 'filePath': w7_y4d, 'encoding': mfc1s0, 'success': function (_mfs40) {
          if (w7_y4d['indexOf']('http://') != -0x1 || w7_y4d['indexOf']('https://') != -0x1) qole9['onFileUpdate'](w7_y4d, j9lq65);h2t != null && h2t['runWith']([0x0, _mfs40]);
        }, 'fail': function (qgr95) {
          if (qgr95) h2t != null && h2t['runWith']([0x1, qgr95]);
        } });
    }, qole9['downImg'] = function (toleh2, tihe2o, nz) {
      nz === void 0x0 && (nz = '');var a$yuz8 = qole9['wxdown']({ 'url': toleh2, 'success': function (w47y) {
          w47y['statusCode'] === 0xc8 && qole9['copyFile'](w47y['tempFilePath'], nz, tihe2o);
        }, 'fail': function (leoj2t) {
          tihe2o != null && tihe2o['runWith']([0x1, leoj2t]);
        } });
    }, qole9['copyFile'] = function (e2lho, lojeqt, qlo59j) {
      var zway$u = e2lho['split']('/'),
          oeq9j = zway$u[zway$u['length'] - 0x1],
          rg6k95 = lojeqt['split']('?')[0x0],
          kg6v = qole9['getFileInfo'](lojeqt),
          _74f0d = qole9['getFileNativePath'](oeq9j);qole9['fs']['copyFile']({ 'srcPath': e2lho, 'destPath': _74f0d, 'success': function (w47d0) {
          if (!kg6v) qole9['onSaveFile'](lojeqt, oeq9j), qlo59j != null && qlo59j['runWith']([0x0]);else {
            if (kg6v['readyUrl'] != lojeqt) qole9['remove'](oeq9j, lojeqt, qlo59j);
          }
        }, 'fail': function (jg6q) {
          qlo59j != null && qlo59j['runWith']([0x1, jg6q]);
        } });
    }, qole9['getFileNativePath'] = function (a4ydw) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + a4ydw;
    }, qole9['remove'] = function (o2eltj, lj9oeq, oe9ql) {
      lj9oeq === void 0x0 && (lj9oeq = '');var jlo95q = qole9['getFileInfo'](lj9oeq),
          s1c0 = qole9['getFileNativePath'](jlo95q['md5']);kgxr['loader']['clearRes'](jlo95q['readyUrl']), qole9['fs']['unlink']({ 'filePath': s1c0, 'success': function (qrg5) {
          if (lj9oeq != '') qole9['onSaveFile'](lj9oeq, o2eltj);oe9ql != null && oe9ql['runWith']([0x0]);
        }, 'fail': function (prxvk) {} });
    }, qole9['onSaveFile'] = function (mcf01s, g69jq) {
      var o2el = mcf01s['split']('?')[0x0];qole9['filesListObj'][o2el] = { 'md5': g69jq, 'readyUrl': mcf01s }, qole9['fs']['writeFile']({ 'filePath': qole9['fileNativeDir'] + '/' + qole9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qole9['filesListObj']), 'success': function (chs2i1) {
          console['log']('写入测试测试成功：', chs2i1);
        }, 'fail': function (tqloj) {
          console['log']('写入测试测试失败：', tqloj);
        } });
    }, qole9['existDir'] = function (c1hsi, dy7uaw) {
      qole9['fs']['mkdir']({ 'dirPath': c1hsi, 'success': function (gj6q59) {
          dy7uaw != null && dy7uaw['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (smci1h) {
          if (smci1h['errMsg']['indexOf']('file already exists') != -0x1) qole9['readSync'](qole9['fileListName'], 'utf8', dy7uaw);else dy7uaw != null && dy7uaw['runWith']([0x1, smci1h]);
        } });
    }, qole9['readSync'] = function (r6kv, imsf, q5j6, ltoje) {
      imsf === void 0x0 && (imsf = 'ascill'), ltoje === void 0x0 && (ltoje = '');var za8$u = qole9['getFileNativePath'](r6kv),
          tehl2;try {
        tehl2 = qole9['fs']['readFileSync'](za8$u), q5j6 != null && q5j6['runWith']([0x0, { 'data': tehl2 }]);
      } catch (etic2) {
        q5j6 != null && q5j6['runWith']([0x1]);
      }
    }, qole9['readCache'] = function () {}, qole9['writeCache'] = function (_d4w0) {
      var h12s = readyUrl['split']('?')[0x0];qole9['filesListObj'][h12s] = { 'md5': md5Name, 'readyUrl': readyUrl }, qole9['fs']['writeFile']({ 'filePath': qole9['fileNativeDir'] + '/' + qole9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qole9['filesListObj']), 'success': function (vr6pgk) {}, 'fail': function (g65r9) {} });
    }, qole9['setNativeFileDir'] = function ($8azy) {
      qole9['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $8azy;
    }, qole9['filesListObj'] = {}, qole9['fileNativeDir'] = null, qole9['fileListName'] = 'layaairfiles.txt', qole9['ziyuFileData'] = {}, pkvgxr(qole9, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qole9;
  }(a7uy$w),
      olqt = function (i21htc) {
    function isc2h1() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], isc2h1['__super']['call'](this), this['_sound'] = isc2h1['_createSound']();
    }ieht2(isc2h1, 'laya.wx.mini.MiniSound', i21htc);var nz3 = isc2h1['prototype'];return nz3['load'] = function (a4ydw7) {
      var yau7$w = this;a4ydw7 = eihot2['formatURL'](a4ydw7), this['url'] = a4ydw7;if (isc2h1['_audioCache'][a4ydw7]) {
        this['event']('complete');return;
      }function vk5() {
        if (isc2h1['_null'] != undefined) yau7$w['_sound']['onCanplay'](isc2h1['_null']), yau7$w['_sound']['onError'](isc2h1['_null']);else try {
          yau7$w['_sound']['onCanplay'](null), yau7$w['_sound']['onError'](null), isc2h1['_null'] = null;
        } catch (ei2ct) {
          console['warn']('[wxmini] _clearSound:' + ei2ct), yau7$w['_sound']['onCanplay'](teolh), yau7$w['_sound']['onError'](teolh), isc2h1['_null'] = teolh;
        }
      }function $8zuya() {
        vk5(), ihm['loaded'] = !![], ihm['event']('complete'), isc2h1['_audioCache'][ihm['url']] = ihm;
      }function imsc1(cfs1) {
        console['error']('errCode=' + cfs1['errCode'] + '  errMsg=' + cfs1['errMsg']), vk5(), ihm['event']('error');
      }function teolh() {}this['_sound']['onCanplay']($8zuya), this['_sound']['onError'](imsc1), this['_sound']['src'] = a4ydw7;var ihm = this;
    }, nz3['play'] = function (_sfm01, az38$u) {
      _sfm01 === void 0x0 && (_sfm01 = 0x0), az38$u === void 0x0 && (az38$u = 0x0);var _fm0s1;if (this['url'] == othi2['_tMusic']) {
        if (!isc2h1['_musicAudio']) isc2h1['_musicAudio'] = isc2h1['_createSound']();_fm0s1 = isc2h1['_musicAudio'];
      } else _fm0s1 = isc2h1['_createSound']();_fm0s1['src'] = this['url'];var ljto2 = new e2oth(_fm0s1);return ljto2['url'] = this['url'], ljto2['loops'] = az38$u, ljto2['startTime'] = _sfm01, ljto2['play'](), othi2['addChannel'](ljto2), ljto2;
    }, nz3['dispose'] = function () {
      var r9kg5 = isc2h1['_audioCache'][this['url']];r9kg5 && (r9kg5['src'] = '', delete isc2h1['_audioCache'][this['url']]);
    }, rkvpg(0x0, nz3, 'duration', function () {
      return this['_sound']['duration'];
    }), isc2h1['_createSound'] = function () {
      return isc2h1['_id']++, ot2eih['window']['wx']['createInnerAudioContext']();
    }, isc2h1['_musicAudio'] = null, isc2h1['_id'] = 0x0, isc2h1['_audioCache'] = {}, isc2h1['_null'] = undefined, isc2h1;
  }(a7uy$w),
      e2oth = function (rxvpgk) {
    function $au3z(mics1f) {
      this['_audio'] = null, this['_onEnd'] = null, $au3z['__super']['call'](this), this['_audio'] = mics1f, this['_onEnd'] = $zun83['bind'](this['__onEnd'], this), mics1f['onEnded'](this['_onEnd']);
    }ieht2($au3z, 'laya.wx.mini.MiniSoundChannel', rxvpgk);var zua$yw = $au3z['prototype'];return zua$yw['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (kgxr['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, zua$yw['__onNull'] = function () {}, zua$yw['play'] = function () {
      this['isStopped'] = ![], othi2['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, zua$yw['stop'] = function () {
      this['isStopped'] = !![], othi2['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if ($au3z['_null'] != undefined) this['_audio']['onEnded']($au3z['_null']);else try {
        this['_audio']['onEnded'](null), $au3z['_null'] = null;
      } catch (tcih1) {
        console['warn']('[wxmini] stop:' + tcih1), this['_audio']['onEnded']($zun83['bind'](this['__onNull'], this)), $au3z['_null'] = $zun83['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, zua$yw['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, zua$yw['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], othi2['addChannel'](this), this['_audio']['play']();
    }, rkvpg(0x0, zua$yw, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), rkvpg(0x0, zua$yw, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), rkvpg(0x0, zua$yw, 'volume', function () {
      return 0x1;
    }, function (ietc2h) {}), $au3z['_null'] = undefined, $au3z;
  }(ifs1m);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var l9qej in Laya) {
    var _wyd74 = Laya[l9qej];_wyd74 && _wyd74['__isclass'] && (exports[l9qej] = _wyd74);
  }
});