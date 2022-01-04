var F = wx.$D;
(function (window, document, zhi_r2) {
  var _z2lri = zhi_r2['un'],
      zli_ = zhi_r2['uns'],
      xma5g = zhi_r2['static'],
      jaogm5 = zhi_r2['class'],
      wj6qxk = zhi_r2['getset'],
      m5oja = zhi_r2['__newvec'],
      zlmoi = laya['utils']['Browser'],
      yh8n1$ = laya['events']['Event'],
      e0svc = laya['events']['EventDispatcher'],
      bpcu93 = laya['resource']['HTMLImage'],
      xwkq6 = laya['utils']['Handler'],
      zilo_ = laya['display']['Input'],
      upb30c = laya['net']['Loader'],
      lz2i = laya['maths']['Matrix'],
      oliz_m = laya['renders']['Render'],
      qwet = laya['utils']['RunDriver'],
      ojmg = laya['media']['Sound'],
      scu03e = laya['media']['SoundChannel'],
      n2h8r1 = laya['media']['SoundManager'],
      xg6jak = laya['display']['Stage'],
      _2ilzr = laya['net']['URL'],
      kjxag = laya['utils']['Utils'],
      zi2r_l = function () {
    function bp39c() {}return jaogm5(bp39c, 'laya.wx.mini.MiniAdpter'), bp39c['getJson'] = function (zl_ri2) {
      return JSON['parse'](zl_ri2);
    }, bp39c['init'] = function (ub0p3c, twqk) {
      ub0p3c === void 0x0 && (ub0p3c = ![]), twqk === void 0x0 && (twqk = ![]);if (bp39c['_inited']) return;bp39c['window'] = window;if (bp39c['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;bp39c['_inited'] = !![], bp39c['isZiYu'] = twqk, bp39c['isPosMsgYu'] = ub0p3c, bp39c['EnvConfig'] = {}, !bp39c['isZiYu'] && (og_lm5['setNativeFileDir']('/layaairGame'), og_lm5['existDir'](og_lm5['fileNativeDir'], xwkq6['create'](bp39c, bp39c['onMkdirCallBack']))), bp39c['window']['focus'] = function () {}, zhi_r2['getUrlPath'] = function () {}, bp39c['window']['logtime'] = function (wt6qvk) {}, bp39c['window']['alertTimeLog'] = function (cupb03) {}, bp39c['window']['resetShareInfo'] = function () {}, bp39c['window']['CanvasRenderingContext2D'] = function () {}, bp39c['window']['CanvasRenderingContext2D']['prototype'] = bp39c['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], bp39c['window']['document']['body']['appendChild'] = function () {}, bp39c['EnvConfig']['pixelRatioInt'] = 0x0, qwet['getPixelRatio'] = bp39c['pixelRatio'], bp39c['_preCreateElement'] = zlmoi['createElement'], zlmoi['createElement'] = bp39c['createElement'], qwet['createShaderCondition'] = bp39c['createShaderCondition'], kjxag['parseXMLFromString'] = bp39c['parseXMLFromString'], zilo_['_createInputElement'] = kq6jx['_createInputElement'], bp39c['EnvConfig']['load'] = upb30c['prototype']['load'], upb30c['prototype']['load'] = olg5ma['prototype']['load'], bp39c['isZiYu'] && ub0p3c && wx['onMessage'](function (omaj) {
        omaj['isLoad'] && (og_lm5['ziyuFileData'][omaj['url']] = omaj['data']);
      });
    }, bp39c['onMkdirCallBack'] = function (z2hn, kswv) {
      if (!z2hn) og_lm5['filesListObj'] = JSON['parse'](kswv['data']);
    }, bp39c['pixelRatio'] = function () {
      if (!bp39c['EnvConfig']['pixelRatioInt']) try {
        var lr_z2i = wx['getSystemInfoSync']();return bp39c['EnvConfig']['pixelRatioInt'] = lr_z2i['pixelRatio'], lr_z2i = lr_z2i, lr_z2i['pixelRatio'];
      } catch (_zoiml) {}return bp39c['EnvConfig']['pixelRatioInt'];
    }, bp39c['createElement'] = function (nh8y) {
      if (nh8y == 'canvas') {
        var m5lo_g;return bp39c['idx'] == 0x1 ? bp39c['isZiYu'] ? (m5lo_g = sharedCanvas, m5lo_g['style'] = {}) : m5lo_g = window['canvas'] : m5lo_g = window['wx']['createCanvas'](), bp39c['idx']++, m5lo_g;
      } else {
        if (nh8y == 'textarea' || nh8y == 'input') return bp39c['onCreateInput'](nh8y);else {
          if (nh8y == 'div') {
            var irzh1 = bp39c['_preCreateElement'](nh8y);return irzh1['contains'] = function (kvwqs) {
              return null;
            }, irzh1['removeChild'] = function (axwk) {}, irzh1;
          } else return bp39c['_preCreateElement'](nh8y);
        }
      }
    }, bp39c['onCreateInput'] = function (ri_l2) {
      var o5gm = bp39c['_preCreateElement'](ri_l2);return o5gm['focus'] = kq6jx['wxinputFocus'], o5gm['blur'] = kq6jx['wxinputblur'], o5gm['style'] = {}, o5gm['value'] = 0x0, o5gm['parentElement'] = {}, o5gm['placeholder'] = {}, o5gm['type'] = {}, o5gm['setColor'] = function (iz1r2) {}, o5gm['setType'] = function (ewsqt) {}, o5gm['setFontFace'] = function (u0ce3) {}, o5gm['addEventListener'] = function (i_z2) {}, o5gm['contains'] = function (l_oirz) {
        return null;
      }, o5gm['removeChild'] = function (ec0u) {}, o5gm;
    }, bp39c['createShaderCondition'] = function (n281hr) {
      var w6tvqk = this,
          zril_ = function () {
        var o5gmja = n281hr;return w6tvqk[n281hr['replace']('this.', '')];
      };return zril_;
    }, bp39c['EnvConfig'] = null, bp39c['window'] = null, bp39c['_preCreateElement'] = null, bp39c['_inited'] = ![], bp39c['wxRequest'] = null, bp39c['systemInfo'] = null, bp39c['version'] = '0.0.1', bp39c['isZiYu'] = ![], bp39c['isPosMsgYu'] = ![], bp39c['parseXMLFromString'] = function (b9cup) {
      var vqtwe, hrnz12;b9cup = b9cup['replace'](/>\s+</g, '><');try {
        vqtwe = new window['Parser']['DOMParser']()['parseFromString'](b9cup, 'text/xml');
      } catch (qx6k) {
        throw '需要引入xml解析库文件';
      }return vqtwe;
    }, bp39c['idx'] = 0x1, bp39c;
  }(),
      hr1nz2 = function () {
    function vw6qk() {}jaogm5(vw6qk, 'laya.wx.mini.MiniImage');var vtq = vw6qk['prototype'];return vtq['_loadImage'] = function (s3t0c) {
      var cp3eu0 = this,
          jgk6x = ![];s3t0c['indexOf']('layaNativeDir/') == -0x1 && (jgk6x = !![], s3t0c = _2ilzr['formatURL'](s3t0c));if (!og_lm5['getFileInfo'](s3t0c)) {
        if (s3t0c['indexOf']('http://') != -0x1 || s3t0c['indexOf']('https://') != -0x1) og_lm5['downImg'](s3t0c, new xwkq6(vw6qk, vw6qk['onDownImgCallBack'], [s3t0c, cp3eu0]), s3t0c);else vw6qk['onCreateImage'](s3t0c, cp3eu0, !![]);
      } else vw6qk['onCreateImage'](s3t0c, cp3eu0, !jgk6x);
    }, vw6qk['onDownImgCallBack'] = function (wajk6x, waj6xk, xwja) {
      if (!xwja) vw6qk['onCreateImage'](wajk6x, waj6xk);else waj6xk['onError'](null);
    }, vw6qk['onCreateImage'] = function (o_mzil, p7f, sqkt) {
      sqkt === void 0x0 && (sqkt = ![]);var _i2rh;if (!sqkt) {
        var z2h_ = og_lm5['getFileInfo'](o_mzil),
            u39bfp = z2h_['md5'];_i2rh = og_lm5['getFileNativePath'](u39bfp);
      } else _i2rh = o_mzil;if (p7f['imgCache'] == null) p7f['imgCache'] = {};var gjkxa6;function twsvqk() {
        gjkxa6['onload'] = null, gjkxa6['onerror'] = null, delete p7f['imgCache'][o_mzil];
      };var mg5_ = function () {
        twsvqk(), p7f['onLoaded'](gjkxa6);
      },
          tvces = function () {
        twsvqk(), p7f['event']('error', 'Load image failed');
      };p7f['_type'] == 'nativeimage' ? (gjkxa6 = new zlmoi['window']['Image'](), gjkxa6['crossOrigin'] = '', gjkxa6['onload'] = mg5_, gjkxa6['onerror'] = tvces, gjkxa6['src'] = _i2rh, p7f['imgCache'][o_mzil] = gjkxa6) : new bpcu93['create'](_i2rh, { 'onload': mg5_, 'onerror': tvces, 'onCreate': function (bcu) {
          gjkxa6 = bcu, p7f['imgCache'][o_mzil] = bcu;
        } });
    }, vw6qk;
  }(),
      kq6jx = function () {
    function h128r() {}return jaogm5(h128r, 'laya.wx.mini.MiniInput'), h128r['_createInputElement'] = function () {
      zilo_['_initInput'](zilo_['area'] = zlmoi['createElement']('textarea')), zilo_['_initInput'](zilo_['input'] = zlmoi['createElement']('input')), zilo_['inputContainer'] = zlmoi['createElement']('div'), zilo_['inputContainer']['style']['position'] = 'absolute', zilo_['inputContainer']['style']['zIndex'] = 0x186a0, zlmoi['container']['appendChild'](zilo_['inputContainer']), zilo_['inputContainer']['setPos'] = function (wstvq, sqwte) {
        zilo_['inputContainer']['style']['left'] = wstvq + 'px', zilo_['inputContainer']['style']['top'] = sqwte + 'px';
      }, zhi_r2['stage']['on']('resize', null, h128r['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_rio) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), n2h8r1['_soundClass'] = vqk6, n2h8r1['_musicClass'] = vqk6;
    }, h128r['_onStageResize'] = function () {
      var w6xvqk = zhi_r2['stage']['_canvasTransform']['identity']();w6xvqk['scale'](zlmoi['width'] / oliz_m['canvas']['width'] / qwet['getPixelRatio'](), zlmoi['height'] / oliz_m['canvas']['height'] / qwet['getPixelRatio']());
    }, h128r['wxinputFocus'] = function (tsc3) {
      var zhr1i2 = zilo_['inputElement']['target'];if (zhr1i2 && !zhr1i2['editable']) return;zi2r_l['window']['wx']['offKeyboardConfirm'](), zi2r_l['window']['wx']['offKeyboardInput'](), zi2r_l['window']['wx']['showKeyboard']({ 'defaultValue': zhr1i2['text'], 'maxLength': zhr1i2['maxChars'], 'multiple': zhr1i2['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ues3c0) {}, 'fail': function (estq) {} }), zi2r_l['window']['wx']['onKeyboardConfirm'](function (glm5) {
        var bp9u3 = glm5 ? glm5['value'] : '';zhr1i2['text'] = bp9u3, zhr1i2['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), zi2r_l['window']['wx']['onKeyboardInput'](function (hzr2_) {
        var b0cu3p = hzr2_ ? hzr2_['value'] : '';if (!zhr1i2['multiline']) {
          if (b0cu3p['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }zhr1i2['text'] = b0cu3p, zhr1i2['event']('input');
      });
    }, h128r['inputEnter'] = function () {
      zilo_['inputElement']['target']['focus'] = ![];
    }, h128r['wxinputblur'] = function () {
      h128r['hideKeyboard']();
    }, h128r['hideKeyboard'] = function () {
      zi2r_l['window']['wx']['offKeyboardConfirm'](), zi2r_l['window']['wx']['offKeyboardInput'](), zi2r_l['window']['wx']['hideKeyboard']({ 'success': function (ih2_) {
          console['log']('隐藏键盘');
        }, 'fail': function (vw6q) {
          console['log']('隐藏键盘出错:' + (vw6q ? vw6q['errMsg'] : ''));
        } });
    }, h128r;
  }(),
      olg5ma = function () {
    function lgoma() {}jaogm5(lgoma, 'laya.wx.mini.MiniLoader');var svetqw = lgoma['prototype'];return svetqw['load'] = function (kgja6x, se0qvt, m5aogl, n1$yh8, h2$18) {
      m5aogl === void 0x0 && (m5aogl = !![]), h2$18 === void 0x0 && (h2$18 = ![]);var jwk = this;jwk['_url'] = kgja6x;if (kgja6x['indexOf']('data:image') === 0x0) jwk['_type'] = se0qvt = 'image';else jwk['_type'] = se0qvt || (se0qvt = jwk['getTypeFromUrl'](kgja6x));jwk['_cache'] = m5aogl, jwk['_data'] = null;var c0se3u = 'ascii';if (kgja6x['indexOf']('.fnt') != -0x1) c0se3u = 'utf8';else se0qvt == 'arraybuffer' && (c0se3u = '');;var e3cu = kjxag['getFileExtension'](kgja6x);if (lgoma['_fileTypeArr']['indexOf'](e3cu) != -0x1) zi2r_l['EnvConfig']['load']['call'](this, kgja6x, se0qvt, m5aogl, n1$yh8, h2$18);else {
        if (!og_lm5['getFileInfo'](kgja6x)) {
          if (kgja6x['indexOf']('layaNativeDir/') != -0x1) {
            if (zi2r_l['isZiYu']) {
              var j65gxa = og_lm5['ziyuFileData'][kgja6x];jwk['onLoaded'](j65gxa);return;
            } else {
              cosnole['log']('read read'), og_lm5['read'](kgja6x, c0se3u, new xwkq6(lgoma, lgoma['onReadNativeCallBack'], [c0se3u, kgja6x, se0qvt, m5aogl, n1$yh8, h2$18, jwk]));return;
            }
          }if (_2ilzr['rootPath'] == '') var $hny1 = kgja6x;else $hny1 = kgja6x['split'](_2ilzr['rootPath'])[0x0];kgja6x['indexOf']('http://') != -0x1 || kgja6x['indexOf']('https://') != -0x1 ? zi2r_l['EnvConfig']['load']['call'](jwk, kgja6x, se0qvt, m5aogl, n1$yh8, h2$18) : og_lm5['readFile']($hny1, c0se3u, new xwkq6(lgoma, lgoma['onReadNativeCallBack'], [c0se3u, kgja6x, se0qvt, m5aogl, n1$yh8, h2$18, jwk]), kgja6x);
        } else zi2r_l['EnvConfig']['load']['call'](this, kgja6x, se0qvt, m5aogl, n1$yh8, h2$18);
      }
    }, svetqw['resMgrLoad'] = function (ilrz_, _rli, ogja5m, kxjwq6, _moli5, zi2l_, ol5_g) {
      ogja5m === void 0x0 && (ogja5m = 0x0), kxjwq6 === void 0x0 && (kxjwq6 = ![]), _moli5 === void 0x0 && (_moli5 = ![]), zi2l_ === void 0x0 && (zi2l_ = 0x0), ol5_g === void 0x0 && (ol5_g = 0x3), ilrz_['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ilrz_), zi2r_l['EnvConfig']['resMgrLoad'](ilrz_, (v0ces, h2n8$, hzi1r) => {
        lgoma['prototype']['resMgrLoadCallBack'](v0ces, h2n8$, hzi1r, _rli);
      }, ogja5m, kxjwq6, _moli5, zi2l_, ol5_g);
    }, svetqw['resMgrLoadCallBack'] = function (qwes, axm5g, vtseq0, et3c0) {
      console['log']('buff:::', qwes, vtseq0, og_lm5['fileNativeDir'] + '///' + og_lm5['fileListName']), et3c0(qwes, axm5g, vtseq0);
    }, svetqw['clearRes'] = function (irl_o, w6jkax) {
      w6jkax === void 0x0 && (w6jkax = ![]);var c03upe = this;c03upe['clearRes'](irl_o, w6jkax);var ior_zl = og_lm5['getFileInfo'](irl_o);if (ior_zl && (irl_o['indexOf']('http://') != -0x1 || irl_o['indexOf']('https://') != -0x1)) {
        var u9bf7 = ior_zl['md5'],
            n8r1h = og_lm5['getFileNativePath'](u9bf7);og_lm5['remove'](n8r1h);
      }
    }, lgoma['onReadNativeCallBack'] = function (cpeu03, _ogl5, t0csv, mi_, vq6wkx, h2nr8, akg6j, j6wak, p39bfu) {
      mi_ === void 0x0 && (mi_ = !![]), h2nr8 === void 0x0 && (h2nr8 = ![]), j6wak === void 0x0 && (j6wak = 0x0);if (!j6wak) {
        var se0cvt;if (t0csv == 'json' || t0csv == 'atlas') se0cvt = zi2r_l['getJson'](p39bfu['data']);else t0csv == 'xml' ? se0cvt = kjxag['parseXMLFromString'](p39bfu['data']) : se0cvt = p39bfu['data'];akg6j['onLoaded'](se0cvt), !zi2r_l['isZiYu'] && zi2r_l['isPosMsgYu'] && t0csv != 'arraybuffer' && wx['postMessage']({ 'url': _ogl5, 'data': se0cvt, 'isLoad': !![] });
      } else j6wak == 0x1 && zi2r_l['EnvConfig']['load']['call'](akg6j, _ogl5, t0csv, mi_, vq6wkx, h2nr8);
    }, xma5g(lgoma, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), lgoma;
  }(),
      og_lm5 = function (pecu03) {
    function n$18hy() {
      n$18hy['__super']['call'](this);;
    }return jaogm5(n$18hy, 'laya.wx.mini.MiniFileMgr', pecu03), n$18hy['isLoadFile'] = function (uf9pb7) {
      return n$18hy['_fileTypeArr']['indexOf'](uf9pb7) != -0x1 ? !![] : ![];
    }, n$18hy['getFileInfo'] = function (xwkvq) {
      var vsqwet = xwkvq['split']('?')[0x0],
          om_ilz = n$18hy['filesListObj'][vsqwet];if (om_ilz == null) return null;else return om_ilz;return null;
    }, n$18hy['onFileUpdate'] = function (nhr18, tvq6w) {
      var ucb9p = nhr18['split']('/'),
          svq0t = ucb9p[ucb9p['length'] - 0x1],
          jwq6k = n$18hy['getFileInfo'](tvq6w);if (jwq6k == null) n$18hy['onSaveFile'](tvq6w, svq0t);else {
        if (jwq6k['readyUrl'] != tvq6w) n$18hy['remove'](svq0t, tvq6w);
      }
    }, n$18hy['exits'] = function (_ioml5, olm_i) {
      var pf9u3 = n$18hy['getFileNativePath'](_ioml5);n$18hy['fs']['getFileInfo']({ 'filePath': pf9u3, 'success': function (r_iz2h) {
          olm_i != null && olm_i['runWith']([0x0, r_iz2h]);
        }, 'fail': function (p3ufb) {
          olm_i != null && olm_i['runWith']([0x1, p3ufb]);
        } });
    }, n$18hy['read'] = function (xga5jm, ao5jmg, kjq6x, aj6kxg) {
      ao5jmg === void 0x0 && (ao5jmg = 'ascill'), aj6kxg === void 0x0 && (aj6kxg = '');var u7f9p;aj6kxg != '' ? u7f9p = n$18hy['getFileNativePath'](xga5jm) : u7f9p = xga5jm, n$18hy['fs']['readFile']({ 'filePath': u7f9p, 'encoding': ao5jmg, 'success': function (wqsvet) {
          kjq6x != null && kjq6x['runWith']([0x0, wqsvet]);
        }, 'fail': function (lozi_r) {
          if (lozi_r && aj6kxg != '') n$18hy['down'](aj6kxg, ao5jmg, kjq6x, aj6kxg);else kjq6x != null && kjq6x['runWith']([0x1]);
        } });
    }, n$18hy['readNativeFile'] = function (b79pfu, eqswt) {
      n$18hy['fs']['readFile']({ 'filePath': b79pfu, 'encoding': '', 'success': function (p9b74f) {
          eqswt != null && eqswt['runWith']([0x0]);
        }, 'fail': function (ml_zi) {
          eqswt != null && eqswt['runWith']([0x1]);
        } });
    }, n$18hy['down'] = function (u39pcb, stqve, rz_ih2, sc0u3e) {
      stqve === void 0x0 && (stqve = 'ascill'), sc0u3e === void 0x0 && (sc0u3e = '');var cse0t3 = n$18hy['getFileNativePath'](sc0u3e),
          gxja65 = n$18hy['wxdown']({ 'url': u39pcb, 'filePath': cse0t3, 'success': function (_miz) {
          if (_miz['statusCode'] === 0xc8) n$18hy['readFile'](_miz['filePath'], stqve, rz_ih2, sc0u3e);
        }, 'fail': function (ce3p0) {
          rz_ih2 != null && rz_ih2['runWith']([0x1, ce3p0]);
        } });gxja65['onProgressUpdate'](function (ktsqvw) {
        rz_ih2 != null && rz_ih2['runWith']([0x2, ktsqvw['progress']]);
      });
    }, n$18hy['readFile'] = function (mogj5a, _moiz, nzr, gmax) {
      _moiz === void 0x0 && (_moiz = 'ascill'), gmax === void 0x0 && (gmax = ''), n$18hy['fs']['readFile']({ 'filePath': mogj5a, 'encoding': _moiz, 'success': function (sqtewv) {
          if (mogj5a['indexOf']('http://') != -0x1 || mogj5a['indexOf']('https://') != -0x1) n$18hy['onFileUpdate'](mogj5a, gmax);nzr != null && nzr['runWith']([0x0, sqtewv]);
        }, 'fail': function (h2rz_) {
          if (h2rz_) nzr != null && nzr['runWith']([0x1, h2rz_]);
        } });
    }, n$18hy['downImg'] = function (lri, w6kt, wk6jax) {
      wk6jax === void 0x0 && (wk6jax = '');var pc93bu = n$18hy['wxdown']({ 'url': lri, 'success': function (g5lao) {
          g5lao['statusCode'] === 0xc8 && n$18hy['copyFile'](g5lao['tempFilePath'], wk6jax, w6kt);
        }, 'fail': function (akgj6) {
          w6kt != null && w6kt['runWith']([0x1, akgj6]);
        } });
    }, n$18hy['copyFile'] = function (wvsqtk, z1rhn2, kjwa) {
      var miol_ = wvsqtk['split']('/'),
          jm5ago = miol_[miol_['length'] - 0x1],
          ja5g6x = z1rhn2['split']('?')[0x0],
          hri2z_ = n$18hy['getFileInfo'](z1rhn2),
          lm_zio = n$18hy['getFileNativePath'](jm5ago);n$18hy['fs']['copyFile']({ 'srcPath': wvsqtk, 'destPath': lm_zio, 'success': function (eusc0) {
          if (!hri2z_) n$18hy['onSaveFile'](z1rhn2, jm5ago), kjwa != null && kjwa['runWith']([0x0]);else {
            if (hri2z_['readyUrl'] != z1rhn2) n$18hy['remove'](jm5ago, z1rhn2, kjwa);
          }
        }, 'fail': function (peuc3) {
          kjwa != null && kjwa['runWith']([0x1, peuc3]);
        } });
    }, n$18hy['getFileNativePath'] = function (rih21) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rih21;
    }, n$18hy['remove'] = function (i5m_ol, i2rl, ihr2_z) {
      i2rl === void 0x0 && (i2rl = '');var z_oml = n$18hy['getFileInfo'](i2rl),
          stqvk = n$18hy['getFileNativePath'](z_oml['md5']);zhi_r2['loader']['clearRes'](z_oml['readyUrl']), n$18hy['fs']['unlink']({ 'filePath': stqvk, 'success': function (kwvq6t) {
          if (i2rl != '') n$18hy['onSaveFile'](i2rl, i5m_ol);ihr2_z != null && ihr2_z['runWith']([0x0]);
        }, 'fail': function (olrz_i) {} });
    }, n$18hy['onSaveFile'] = function (vkwqt, fu3pb) {
      var mi5lo_ = vkwqt['split']('?')[0x0];n$18hy['filesListObj'][mi5lo_] = { 'md5': fu3pb, 'readyUrl': vkwqt }, n$18hy['fs']['writeFile']({ 'filePath': n$18hy['fileNativeDir'] + '/' + n$18hy['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n$18hy['filesListObj']), 'success': function (hn1zr2) {
          console['log']('写入测试测试成功：', hn1zr2);
        }, 'fail': function (fu79pb) {
          console['log']('写入测试测试失败：', fu79pb);
        } });
    }, n$18hy['existDir'] = function (b3cp, uf9b3p) {
      n$18hy['fs']['mkdir']({ 'dirPath': b3cp, 'success': function (swvqt) {
          uf9b3p != null && uf9b3p['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (b03u) {
          if (b03u['errMsg']['indexOf']('file already exists') != -0x1) n$18hy['readSync'](n$18hy['fileListName'], 'utf8', uf9b3p);else uf9b3p != null && uf9b3p['runWith']([0x1, b03u]);
        } });
    }, n$18hy['readSync'] = function (jxgk6, ao5lgm, e0uc3, gmaj5o) {
      ao5lgm === void 0x0 && (ao5lgm = 'ascill'), gmaj5o === void 0x0 && (gmaj5o = '');var x6agj5 = n$18hy['getFileNativePath'](jxgk6),
          wskqt;try {
        wskqt = n$18hy['fs']['readFileSync'](x6agj5), e0uc3 != null && e0uc3['runWith']([0x0, { 'data': wskqt }]);
      } catch (rzi2l_) {
        e0uc3 != null && e0uc3['runWith']([0x1]);
      }
    }, n$18hy['readCache'] = function () {}, n$18hy['writeCache'] = function (il_zro) {
      var pfb7 = readyUrl['split']('?')[0x0];n$18hy['filesListObj'][pfb7] = { 'md5': md5Name, 'readyUrl': readyUrl }, n$18hy['fs']['writeFile']({ 'filePath': n$18hy['fileNativeDir'] + '/' + n$18hy['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n$18hy['filesListObj']), 'success': function (u93b) {}, 'fail': function (zr1hn2) {} });
    }, n$18hy['setNativeFileDir'] = function (eus3) {
      n$18hy['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + eus3;
    }, n$18hy['filesListObj'] = {}, n$18hy['fileNativeDir'] = null, n$18hy['fileListName'] = 'layaairfiles.txt', n$18hy['ziyuFileData'] = {}, xma5g(n$18hy, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), n$18hy;
  }(e0svc),
      vqk6 = function (rzih_2) {
    function fb39up() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], fb39up['__super']['call'](this), this['_sound'] = fb39up['_createSound']();
    }jaogm5(fb39up, 'laya.wx.mini.MiniSound', rzih_2);var qvxkw6 = fb39up['prototype'];return qvxkw6['load'] = function (_lm5g) {
      var kqvxw = this;_lm5g = _2ilzr['formatURL'](_lm5g), this['url'] = _lm5g;if (fb39up['_audioCache'][_lm5g]) {
        this['event']('complete');return;
      }function q6xvw() {
        if (fb39up['_null'] != undefined) kqvxw['_sound']['onCanplay'](fb39up['_null']), kqvxw['_sound']['onError'](fb39up['_null']);else try {
          kqvxw['_sound']['onCanplay'](null), kqvxw['_sound']['onError'](null), fb39up['_null'] = null;
        } catch (e0sc3u) {
          console['warn']('[wxmini] _clearSound:' + e0sc3u), kqvxw['_sound']['onCanplay'](b3pu0c), kqvxw['_sound']['onError'](b3pu0c), fb39up['_null'] = b3pu0c;
        }
      }function et3s0c() {
        q6xvw(), z2_il['loaded'] = !![], z2_il['event']('complete'), fb39up['_audioCache'][z2_il['url']] = z2_il;
      }function ufp93b(vkqstw) {
        console['error']('errCode=' + vkqstw['errCode'] + '  errMsg=' + vkqstw['errMsg']), q6xvw(), z2_il['event']('error');
      }function b3pu0c() {}this['_sound']['onCanplay'](et3s0c), this['_sound']['onError'](ufp93b), this['_sound']['src'] = _lm5g;var z2_il = this;
    }, qvxkw6['play'] = function (i_mlo, pc3b0) {
      i_mlo === void 0x0 && (i_mlo = 0x0), pc3b0 === void 0x0 && (pc3b0 = 0x0);var vs0etq;if (this['url'] == n2h8r1['_tMusic']) {
        if (!fb39up['_musicAudio']) fb39up['_musicAudio'] = fb39up['_createSound']();vs0etq = fb39up['_musicAudio'];
      } else vs0etq = fb39up['_createSound']();vs0etq['src'] = this['url'];var p9cb3 = new ce0pu3(vs0etq);return p9cb3['url'] = this['url'], p9cb3['loops'] = pc3b0, p9cb3['startTime'] = i_mlo, p9cb3['play'](), n2h8r1['addChannel'](p9cb3), p9cb3;
    }, qvxkw6['dispose'] = function () {
      var lmg_5o = fb39up['_audioCache'][this['url']];lmg_5o && (lmg_5o['src'] = '', delete fb39up['_audioCache'][this['url']]);
    }, wj6qxk(0x0, qvxkw6, 'duration', function () {
      return this['_sound']['duration'];
    }), fb39up['_createSound'] = function () {
      return fb39up['_id']++, zi2r_l['window']['wx']['createInnerAudioContext']();
    }, fb39up['_musicAudio'] = null, fb39up['_id'] = 0x0, fb39up['_audioCache'] = {}, fb39up['_null'] = undefined, fb39up;
  }(e0svc),
      ce0pu3 = function (tv6qkw) {
    function ajmo5g(skvwqt) {
      this['_audio'] = null, this['_onEnd'] = null, ajmo5g['__super']['call'](this), this['_audio'] = skvwqt, this['_onEnd'] = kjxag['bind'](this['__onEnd'], this), skvwqt['onEnded'](this['_onEnd']);
    }jaogm5(ajmo5g, 'laya.wx.mini.MiniSoundChannel', tv6qkw);var mgxja = ajmo5g['prototype'];return mgxja['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (zhi_r2['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, mgxja['__onNull'] = function () {}, mgxja['play'] = function () {
      this['isStopped'] = ![], n2h8r1['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, mgxja['stop'] = function () {
      this['isStopped'] = !![], n2h8r1['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ajmo5g['_null'] != undefined) this['_audio']['onEnded'](ajmo5g['_null']);else try {
        this['_audio']['onEnded'](null), ajmo5g['_null'] = null;
      } catch (pubf9) {
        console['warn']('[wxmini] stop:' + pubf9), this['_audio']['onEnded'](kjxag['bind'](this['__onNull'], this)), ajmo5g['_null'] = kjxag['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, mgxja['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, mgxja['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], n2h8r1['addChannel'](this), this['_audio']['play']();
    }, wj6qxk(0x0, mgxja, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), wj6qxk(0x0, mgxja, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), wj6qxk(0x0, mgxja, 'volume', function () {
      return 0x1;
    }, function (ilmz_o) {}), ajmo5g['_null'] = undefined, ajmo5g;
  }(scu03e);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var a5xm in Laya) {
    var gmoja = Laya[a5xm];gmoja && gmoja['__isclass'] && (exports[a5xm] = gmoja);
  }
});