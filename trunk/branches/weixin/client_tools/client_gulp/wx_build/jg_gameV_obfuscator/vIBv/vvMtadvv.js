var Q = wx.$v;
(function (window, document, wf5vd) {
  var $qekf_ = wf5vd['un'],
      l3s7m = wf5vd['uns'],
      a6b4lz = wf5vd['static'],
      $i1_eq = wf5vd['class'],
      i0u_r = wf5vd['getset'],
      q$w = wf5vd['__newvec'],
      nriuz0 = laya['utils']['Browser'],
      co2t = laya['events']['Event'],
      la49b7 = laya['events']['EventDispatcher'],
      $f_e1q = laya['resource']['HTMLImage'],
      ml937s = laya['utils']['Handler'],
      qf_ek$ = laya['display']['Input'],
      b39l4 = laya['net']['Loader'],
      tms932 = laya['maths']['Matrix'],
      j2t8m = laya['renders']['Render'],
      k$_qe = laya['utils']['RunDriver'],
      o8jh = laya['media']['Sound'],
      a4z6un = laya['media']['SoundChannel'],
      cj82mt = laya['media']['SoundManager'],
      k5fq$ = laya['display']['Stage'],
      $wvkf = laya['net']['URL'],
      kvf = laya['utils']['Utils'],
      s39bl = function () {
    function qk5f$() {}return $i1_eq(qk5f$, 'laya.wx.mini.MiniAdpter'), qk5f$['getJson'] = function (dwvf) {
      return JSON['parse'](dwvf);
    }, qk5f$['init'] = function (lba974, yjc8t) {
      lba974 === void 0x0 && (lba974 = ![]), yjc8t === void 0x0 && (yjc8t = ![]);if (qk5f$['_inited']) return;qk5f$['window'] = window;if (qk5f$['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;qk5f$['_inited'] = !![], qk5f$['isZiYu'] = yjc8t, qk5f$['isPosMsgYu'] = lba974, qk5f$['EnvConfig'] = {}, !qk5f$['isZiYu'] && (zlb6['setNativeFileDir']('/layaairGame'), zlb6['existDir'](zlb6['fileNativeDir'], ml937s['create'](qk5f$, qk5f$['onMkdirCallBack']))), qk5f$['window']['focus'] = function () {}, wf5vd['getUrlPath'] = function () {}, qk5f$['window']['logtime'] = function (tmc2j8) {}, qk5f$['window']['alertTimeLog'] = function (o8tcyj) {}, qk5f$['window']['resetShareInfo'] = function () {}, qk5f$['window']['CanvasRenderingContext2D'] = function () {}, qk5f$['window']['CanvasRenderingContext2D']['prototype'] = qk5f$['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qk5f$['window']['document']['body']['appendChild'] = function () {}, qk5f$['EnvConfig']['pixelRatioInt'] = 0x0, k$_qe['getPixelRatio'] = qk5f$['pixelRatio'], qk5f$['_preCreateElement'] = nriuz0['createElement'], nriuz0['createElement'] = qk5f$['createElement'], k$_qe['createShaderCondition'] = qk5f$['createShaderCondition'], kvf['parseXMLFromString'] = qk5f$['parseXMLFromString'], qf_ek$['_createInputElement'] = ts923m['_createInputElement'], qk5f$['EnvConfig']['load'] = b39l4['prototype']['load'], b39l4['prototype']['load'] = mt23s['prototype']['load'], qk5f$['isZiYu'] && lba974 && wx['onMessage'](function (jtc28m) {
        jtc28m['isLoad'] && (zlb6['ziyuFileData'][jtc28m['url']] = jtc28m['data']);
      });
    }, qk5f$['onMkdirCallBack'] = function (kvdxw, e0_1i) {
      if (!kvdxw) zlb6['filesListObj'] = JSON['parse'](e0_1i['data']);
    }, qk5f$['pixelRatio'] = function () {
      if (!qk5f$['EnvConfig']['pixelRatioInt']) try {
        var c3smt = wx['getSystemInfoSync']();return qk5f$['EnvConfig']['pixelRatioInt'] = c3smt['pixelRatio'], c3smt = c3smt, c3smt['pixelRatio'];
      } catch (m379) {}return qk5f$['EnvConfig']['pixelRatioInt'];
    }, qk5f$['createElement'] = function (nu46a) {
      if (nu46a == 'canvas') {
        var b74a9l;return qk5f$['idx'] == 0x1 ? qk5f$['isZiYu'] ? (b74a9l = sharedCanvas, b74a9l['style'] = {}) : b74a9l = window['canvas'] : b74a9l = window['wx']['createCanvas'](), qk5f$['idx']++, b74a9l;
      } else {
        if (nu46a == 'textarea' || nu46a == 'input') return qk5f$['onCreateInput'](nu46a);else {
          if (nu46a == 'div') {
            var ypj = qk5f$['_preCreateElement'](nu46a);return ypj['contains'] = function (e1iq_$) {
              return null;
            }, ypj['removeChild'] = function (jcy8) {}, ypj;
          } else return qk5f$['_preCreateElement'](nu46a);
        }
      }
    }, qk5f$['onCreateInput'] = function (kvw5f) {
      var zinr = qk5f$['_preCreateElement'](kvw5f);return zinr['focus'] = ts923m['wxinputFocus'], zinr['blur'] = ts923m['wxinputblur'], zinr['style'] = {}, zinr['value'] = 0x0, zinr['parentElement'] = {}, zinr['placeholder'] = {}, zinr['type'] = {}, zinr['setColor'] = function (zan) {}, zinr['setType'] = function (mcst2) {}, zinr['setFontFace'] = function (ui1_r) {}, zinr['addEventListener'] = function (yt8ocj) {}, zinr['contains'] = function (j28mct) {
        return null;
      }, zinr['removeChild'] = function (oh8) {}, zinr;
    }, qk5f$['createShaderCondition'] = function (q$_1ei) {
      var fe1$_ = this,
          uaznr = function () {
        var qw5kf$ = q$_1ei;return fe1$_[q$_1ei['replace']('this.', '')];
      };return uaznr;
    }, qk5f$['EnvConfig'] = null, qk5f$['window'] = null, qk5f$['_preCreateElement'] = null, qk5f$['_inited'] = ![], qk5f$['wxRequest'] = null, qk5f$['systemInfo'] = null, qk5f$['version'] = '0.0.1', qk5f$['isZiYu'] = ![], qk5f$['isPosMsgYu'] = ![], qk5f$['parseXMLFromString'] = function (lz6) {
      var s93tm, iz0nr;lz6 = lz6['replace'](/>\s+</g, '><');try {
        s93tm = new window['Parser']['DOMParser']()['parseFromString'](lz6, 'text/xml');
      } catch (_u1ri0) {
        throw '需要引入xml解析库文件';
      }return s93tm;
    }, qk5f$['idx'] = 0x1, qk5f$;
  }(),
      yctoj = function () {
    function n1i0ur() {}$i1_eq(n1i0ur, 'laya.wx.mini.MiniImage');var s397bl = n1i0ur['prototype'];return s397bl['_loadImage'] = function (vkfw$5) {
      var nab46z = this,
          e1q_$f = ![];vkfw$5['indexOf']('layaNativeDir/') == -0x1 && (e1q_$f = !![], vkfw$5 = $wvkf['formatURL'](vkfw$5));if (!zlb6['getFileInfo'](vkfw$5)) {
        if (vkfw$5['indexOf']('http://') != -0x1 || vkfw$5['indexOf']('https://') != -0x1) zlb6['downImg'](vkfw$5, new ml937s(n1i0ur, n1i0ur['onDownImgCallBack'], [vkfw$5, nab46z]), vkfw$5);else n1i0ur['onCreateImage'](vkfw$5, nab46z, !![]);
      } else n1i0ur['onCreateImage'](vkfw$5, nab46z, !e1q_$f);
    }, n1i0ur['onDownImgCallBack'] = function (l497b, qef$1_, n6za4u) {
      if (!n6za4u) n1i0ur['onCreateImage'](l497b, qef$1_);else qef$1_['onError'](null);
    }, n1i0ur['onCreateImage'] = function (wkfvd, o2tc8, m2c3ts) {
      m2c3ts === void 0x0 && (m2c3ts = ![]);var s3279;if (!m2c3ts) {
        var $_1eqi = zlb6['getFileInfo'](wkfvd),
            n6zu4 = $_1eqi['md5'];s3279 = zlb6['getFileNativePath'](n6zu4);
      } else s3279 = wkfvd;if (o2tc8['imgCache'] == null) o2tc8['imgCache'] = {};var nzar6u;function zlba6() {
        nzar6u['onload'] = null, nzar6u['onerror'] = null, delete o2tc8['imgCache'][wkfvd];
      };var u0i1r_ = function () {
        zlba6(), o2tc8['onLoaded'](nzar6u);
      },
          hojpy8 = function () {
        zlba6(), o2tc8['event']('error', 'Load image failed');
      };o2tc8['_type'] == 'nativeimage' ? (nzar6u = new nriuz0['window']['Image'](), nzar6u['crossOrigin'] = '', nzar6u['onload'] = u0i1r_, nzar6u['onerror'] = hojpy8, nzar6u['src'] = s3279, o2tc8['imgCache'][wkfvd] = nzar6u) : new $f_e1q['create'](s3279, { 'onload': u0i1r_, 'onerror': hojpy8, 'onCreate': function (cohj8y) {
          nzar6u = cohj8y, o2tc8['imgCache'][wkfvd] = cohj8y;
        } });
    }, n1i0ur;
  }(),
      ts923m = function () {
    function a64zbn() {}return $i1_eq(a64zbn, 'laya.wx.mini.MiniInput'), a64zbn['_createInputElement'] = function () {
      qf_ek$['_initInput'](qf_ek$['area'] = nriuz0['createElement']('textarea')), qf_ek$['_initInput'](qf_ek$['input'] = nriuz0['createElement']('input')), qf_ek$['inputContainer'] = nriuz0['createElement']('div'), qf_ek$['inputContainer']['style']['position'] = 'absolute', qf_ek$['inputContainer']['style']['zIndex'] = 0x186a0, nriuz0['container']['appendChild'](qf_ek$['inputContainer']), qf_ek$['inputContainer']['setPos'] = function (c8jyh, r0unzi) {
        qf_ek$['inputContainer']['style']['left'] = c8jyh + 'px', qf_ek$['inputContainer']['style']['top'] = r0unzi + 'px';
      }, wf5vd['stage']['on']('resize', null, a64zbn['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (la74b9) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), cj82mt['_soundClass'] = dv5fk, cj82mt['_musicClass'] = dv5fk;
    }, a64zbn['_onStageResize'] = function () {
      var uan64 = wf5vd['stage']['_canvasTransform']['identity']();uan64['scale'](nriuz0['width'] / j2t8m['canvas']['width'] / k$_qe['getPixelRatio'](), nriuz0['height'] / j2t8m['canvas']['height'] / k$_qe['getPixelRatio']());
    }, a64zbn['wxinputFocus'] = function (hoj8cy) {
      var kfd5v = qf_ek$['inputElement']['target'];if (kfd5v && !kfd5v['editable']) return;s39bl['window']['wx']['offKeyboardConfirm'](), s39bl['window']['wx']['offKeyboardInput'](), s39bl['window']['wx']['showKeyboard']({ 'defaultValue': kfd5v['text'], 'maxLength': kfd5v['maxChars'], 'multiple': kfd5v['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (e$fq) {}, 'fail': function (jty8o) {} }), s39bl['window']['wx']['onKeyboardConfirm'](function (urn06) {
        var m2stj = urn06 ? urn06['value'] : '';kfd5v['text'] = m2stj, kfd5v['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), s39bl['window']['wx']['onKeyboardInput'](function (q_$e1i) {
        var eq_1f = q_$e1i ? q_$e1i['value'] : '';if (!kfd5v['multiline']) {
          if (eq_1f['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }kfd5v['text'] = eq_1f, kfd5v['event']('input');
      });
    }, a64zbn['inputEnter'] = function () {
      qf_ek$['inputElement']['target']['focus'] = ![];
    }, a64zbn['wxinputblur'] = function () {
      a64zbn['hideKeyboard']();
    }, a64zbn['hideKeyboard'] = function () {
      s39bl['window']['wx']['offKeyboardConfirm'](), s39bl['window']['wx']['offKeyboardInput'](), s39bl['window']['wx']['hideKeyboard']({ 'success': function (bla746) {
          console['log']('隐藏键盘');
        }, 'fail': function (ts2m93) {
          console['log']('隐藏键盘出错:' + (ts2m93 ? ts2m93['errMsg'] : ''));
        } });
    }, a64zbn;
  }(),
      mt23s = function () {
    function f$5ekq() {}$i1_eq(f$5ekq, 'laya.wx.mini.MiniLoader');var zb6a4l = f$5ekq['prototype'];return zb6a4l['load'] = function (kvdxw5, _u10ir, ohyjp8, ytjoc, za6nb4) {
      ohyjp8 === void 0x0 && (ohyjp8 = !![]), za6nb4 === void 0x0 && (za6nb4 = ![]);var nau46 = this;nau46['_url'] = kvdxw5;if (kvdxw5['indexOf']('data:image') === 0x0) nau46['_type'] = _u10ir = 'image';else nau46['_type'] = _u10ir || (_u10ir = nau46['getTypeFromUrl'](kvdxw5));nau46['_cache'] = ohyjp8, nau46['_data'] = null;var q$wk5f = 'ascii';if (kvdxw5['indexOf']('.fnt') != -0x1) q$wk5f = 'utf8';else _u10ir == 'arraybuffer' && (q$wk5f = '');;var qe$_kf = kvf['getFileExtension'](kvdxw5);if (f$5ekq['_fileTypeArr']['indexOf'](qe$_kf) != -0x1) s39bl['EnvConfig']['load']['call'](this, kvdxw5, _u10ir, ohyjp8, ytjoc, za6nb4);else {
        if (!zlb6['getFileInfo'](kvdxw5)) {
          if (kvdxw5['indexOf']('layaNativeDir/') != -0x1) {
            if (s39bl['isZiYu']) {
              var dxwg = zlb6['ziyuFileData'][kvdxw5];nau46['onLoaded'](dxwg);return;
            } else {
              cosnole['log']('read read'), zlb6['read'](kvdxw5, q$wk5f, new ml937s(f$5ekq, f$5ekq['onReadNativeCallBack'], [q$wk5f, kvdxw5, _u10ir, ohyjp8, ytjoc, za6nb4, nau46]));return;
            }
          }if ($wvkf['rootPath'] == '') var s2c3 = kvdxw5;else s2c3 = kvdxw5['split']($wvkf['rootPath'])[0x0];kvdxw5['indexOf']('http://') != -0x1 || kvdxw5['indexOf']('https://') != -0x1 ? s39bl['EnvConfig']['load']['call'](nau46, kvdxw5, _u10ir, ohyjp8, ytjoc, za6nb4) : zlb6['readFile'](s2c3, q$wk5f, new ml937s(f$5ekq, f$5ekq['onReadNativeCallBack'], [q$wk5f, kvdxw5, _u10ir, ohyjp8, ytjoc, za6nb4, nau46]), kvdxw5);
        } else s39bl['EnvConfig']['load']['call'](this, kvdxw5, _u10ir, ohyjp8, ytjoc, za6nb4);
      }
    }, zb6a4l['resMgrLoad'] = function (o8tyjc, d5gvx, i_0r, jo8c, zu60, ranu6z, q$fe5k) {
      i_0r === void 0x0 && (i_0r = 0x0), jo8c === void 0x0 && (jo8c = ![]), zu60 === void 0x0 && (zu60 = ![]), ranu6z === void 0x0 && (ranu6z = 0x0), q$fe5k === void 0x0 && (q$fe5k = 0x3), o8tyjc['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', o8tyjc), s39bl['EnvConfig']['resMgrLoad'](o8tyjc, (dx5wg, n4za6b, e_$kq) => {
        f$5ekq['prototype']['resMgrLoadCallBack'](dx5wg, n4za6b, e_$kq, d5gvx);
      }, i_0r, jo8c, zu60, ranu6z, q$fe5k);
    }, zb6a4l['resMgrLoadCallBack'] = function (ty8jo, $kqf5e, bzl46, ocj8hy) {
      console['log']('buff:::', ty8jo, bzl46, zlb6['fileNativeDir'] + '///' + zlb6['fileListName']), ocj8hy(ty8jo, $kqf5e, bzl46);
    }, zb6a4l['clearRes'] = function (_ir01, iru10) {
      iru10 === void 0x0 && (iru10 = ![]);var uznir = this;uznir['clearRes'](_ir01, iru10);var a4nu6 = zlb6['getFileInfo'](_ir01);if (a4nu6 && (_ir01['indexOf']('http://') != -0x1 || _ir01['indexOf']('https://') != -0x1)) {
        var un60zr = a4nu6['md5'],
            otj2 = zlb6['getFileNativePath'](un60zr);zlb6['remove'](otj2);
      }
    }, f$5ekq['onReadNativeCallBack'] = function (nr1ui, lb9s3, tmc, wf5, $1fq_e, cot8, w$kv5, kv5fdw, q$ekf_) {
      wf5 === void 0x0 && (wf5 = !![]), cot8 === void 0x0 && (cot8 = ![]), kv5fdw === void 0x0 && (kv5fdw = 0x0);if (!kv5fdw) {
        var e$k_f;if (tmc == 'json' || tmc == 'atlas') e$k_f = s39bl['getJson'](q$ekf_['data']);else tmc == 'xml' ? e$k_f = kvf['parseXMLFromString'](q$ekf_['data']) : e$k_f = q$ekf_['data'];w$kv5['onLoaded'](e$k_f), !s39bl['isZiYu'] && s39bl['isPosMsgYu'] && tmc != 'arraybuffer' && wx['postMessage']({ 'url': lb9s3, 'data': e$k_f, 'isLoad': !![] });
      } else kv5fdw == 0x1 && s39bl['EnvConfig']['load']['call'](w$kv5, lb9s3, tmc, wf5, $1fq_e, cot8);
    }, a6b4lz(f$5ekq, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), f$5ekq;
  }(),
      zlb6 = function (i0rznu) {
    function v5$kfw() {
      v5$kfw['__super']['call'](this);;
    }return $i1_eq(v5$kfw, 'laya.wx.mini.MiniFileMgr', i0rznu), v5$kfw['isLoadFile'] = function (nr60) {
      return v5$kfw['_fileTypeArr']['indexOf'](nr60) != -0x1 ? !![] : ![];
    }, v5$kfw['getFileInfo'] = function ($q1i) {
      var e1f_$q = $q1i['split']('?')[0x0],
          qf5$k = v5$kfw['filesListObj'][e1f_$q];if (qf5$k == null) return null;else return qf5$k;return null;
    }, v5$kfw['onFileUpdate'] = function (tcm, nuar6) {
      var uinrz = tcm['split']('/'),
          kfqw$5 = uinrz[uinrz['length'] - 0x1],
          mcsj2 = v5$kfw['getFileInfo'](nuar6);if (mcsj2 == null) v5$kfw['onSaveFile'](nuar6, kfqw$5);else {
        if (mcsj2['readyUrl'] != nuar6) v5$kfw['remove'](kfqw$5, nuar6);
      }
    }, v5$kfw['exits'] = function (mtcj2, riun0) {
      var n06rzu = v5$kfw['getFileNativePath'](mtcj2);v5$kfw['fs']['getFileInfo']({ 'filePath': n06rzu, 'success': function (_e0iq1) {
          riun0 != null && riun0['runWith']([0x0, _e0iq1]);
        }, 'fail': function (eri1_0) {
          riun0 != null && riun0['runWith']([0x1, eri1_0]);
        } });
    }, v5$kfw['read'] = function (ei_1$, vk$5wf, _i1r0u, inuzr) {
      vk$5wf === void 0x0 && (vk$5wf = 'ascill'), inuzr === void 0x0 && (inuzr = '');var mj2tc8;inuzr != '' ? mj2tc8 = v5$kfw['getFileNativePath'](ei_1$) : mj2tc8 = ei_1$, v5$kfw['fs']['readFile']({ 'filePath': mj2tc8, 'encoding': vk$5wf, 'success': function (m93st) {
          _i1r0u != null && _i1r0u['runWith']([0x0, m93st]);
        }, 'fail': function (u6zanr) {
          if (u6zanr && inuzr != '') v5$kfw['down'](inuzr, vk$5wf, _i1r0u, inuzr);else _i1r0u != null && _i1r0u['runWith']([0x1]);
        } });
    }, v5$kfw['readNativeFile'] = function ($5wvfk, inurz0) {
      v5$kfw['fs']['readFile']({ 'filePath': $5wvfk, 'encoding': '', 'success': function (s3927m) {
          inurz0 != null && inurz0['runWith']([0x0]);
        }, 'fail': function (nbz4a) {
          inurz0 != null && inurz0['runWith']([0x1]);
        } });
    }, v5$kfw['down'] = function (b3ls, in01, kq5$fw, _q01e) {
      in01 === void 0x0 && (in01 = 'ascill'), _q01e === void 0x0 && (_q01e = '');var z0iu = v5$kfw['getFileNativePath'](_q01e),
          kwq5f$ = v5$kfw['wxdown']({ 'url': b3ls, 'filePath': z0iu, 'success': function (ru1i_) {
          if (ru1i_['statusCode'] === 0xc8) v5$kfw['readFile'](ru1i_['filePath'], in01, kq5$fw, _q01e);
        }, 'fail': function (razu6n) {
          kq5$fw != null && kq5$fw['runWith']([0x1, razu6n]);
        } });kwq5f$['onProgressUpdate'](function (tc2m) {
        kq5$fw != null && kq5$fw['runWith']([0x2, tc2m['progress']]);
      });
    }, v5$kfw['readFile'] = function (qf5$kw, slb79, r1uin, qf_e1$) {
      slb79 === void 0x0 && (slb79 = 'ascill'), qf_e1$ === void 0x0 && (qf_e1$ = ''), v5$kfw['fs']['readFile']({ 'filePath': qf5$kw, 'encoding': slb79, 'success': function (bzn64a) {
          if (qf5$kw['indexOf']('http://') != -0x1 || qf5$kw['indexOf']('https://') != -0x1) v5$kfw['onFileUpdate'](qf5$kw, qf_e1$);r1uin != null && r1uin['runWith']([0x0, bzn64a]);
        }, 'fail': function (q5f$ek) {
          if (q5f$ek) r1uin != null && r1uin['runWith']([0x1, q5f$ek]);
        } });
    }, v5$kfw['downImg'] = function (coyt8j, _qe1$f, iu01_) {
      iu01_ === void 0x0 && (iu01_ = '');var f$ekq = v5$kfw['wxdown']({ 'url': coyt8j, 'success': function (i_0er) {
          i_0er['statusCode'] === 0xc8 && v5$kfw['copyFile'](i_0er['tempFilePath'], iu01_, _qe1$f);
        }, 'fail': function (k$q5ef) {
          _qe1$f != null && _qe1$f['runWith']([0x1, k$q5ef]);
        } });
    }, v5$kfw['copyFile'] = function (c8t2mj, i_01eq, vkxw) {
      var lba467 = c8t2mj['split']('/'),
          e_r0 = lba467[lba467['length'] - 0x1],
          j2ct8o = i_01eq['split']('?')[0x0],
          u4nza = v5$kfw['getFileInfo'](i_01eq),
          zn64a = v5$kfw['getFileNativePath'](e_r0);v5$kfw['fs']['copyFile']({ 'srcPath': c8t2mj, 'destPath': zn64a, 'success': function (an6u4) {
          if (!u4nza) v5$kfw['onSaveFile'](i_01eq, e_r0), vkxw != null && vkxw['runWith']([0x0]);else {
            if (u4nza['readyUrl'] != i_01eq) v5$kfw['remove'](e_r0, i_01eq, vkxw);
          }
        }, 'fail': function (mt2sj) {
          vkxw != null && vkxw['runWith']([0x1, mt2sj]);
        } });
    }, v5$kfw['getFileNativePath'] = function (st392m) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + st392m;
    }, v5$kfw['remove'] = function (xw5gv, ei, wdv5xg) {
      ei === void 0x0 && (ei = '');var $5fqkw = v5$kfw['getFileInfo'](ei),
          dxv5gw = v5$kfw['getFileNativePath']($5fqkw['md5']);wf5vd['loader']['clearRes']($5fqkw['readyUrl']), v5$kfw['fs']['unlink']({ 'filePath': dxv5gw, 'success': function (qkf$w5) {
          if (ei != '') v5$kfw['onSaveFile'](ei, xw5gv);wdv5xg != null && wdv5xg['runWith']([0x0]);
        }, 'fail': function (au6nr) {} });
    }, v5$kfw['onSaveFile'] = function (n0irzu, bl394) {
      var qfe$k_ = n0irzu['split']('?')[0x0];v5$kfw['filesListObj'][qfe$k_] = { 'md5': bl394, 'readyUrl': n0irzu }, v5$kfw['fs']['writeFile']({ 'filePath': v5$kfw['fileNativeDir'] + '/' + v5$kfw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v5$kfw['filesListObj']), 'success': function (i_e$q) {
          console['log']('写入测试测试成功：', i_e$q);
        }, 'fail': function (c2m8t) {
          console['log']('写入测试测试失败：', c2m8t);
        } });
    }, v5$kfw['existDir'] = function (nau64z, n64uza) {
      v5$kfw['fs']['mkdir']({ 'dirPath': nau64z, 'success': function (r6auzn) {
          n64uza != null && n64uza['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (v5$wkf) {
          if (v5$wkf['errMsg']['indexOf']('file already exists') != -0x1) v5$kfw['readSync'](v5$kfw['fileListName'], 'utf8', n64uza);else n64uza != null && n64uza['runWith']([0x1, v5$wkf]);
        } });
    }, v5$kfw['readSync'] = function (w5gvdx, iu01n, irzu0n, rn0ziu) {
      iu01n === void 0x0 && (iu01n = 'ascill'), rn0ziu === void 0x0 && (rn0ziu = '');var e_$qfk = v5$kfw['getFileNativePath'](w5gvdx),
          $eq5kf;try {
        $eq5kf = v5$kfw['fs']['readFileSync'](e_$qfk), irzu0n != null && irzu0n['runWith']([0x0, { 'data': $eq5kf }]);
      } catch (c2tj8m) {
        irzu0n != null && irzu0n['runWith']([0x1]);
      }
    }, v5$kfw['readCache'] = function () {}, v5$kfw['writeCache'] = function (vw5kf) {
      var smt39 = readyUrl['split']('?')[0x0];v5$kfw['filesListObj'][smt39] = { 'md5': md5Name, 'readyUrl': readyUrl }, v5$kfw['fs']['writeFile']({ 'filePath': v5$kfw['fileNativeDir'] + '/' + v5$kfw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v5$kfw['filesListObj']), 'success': function (na6b) {}, 'fail': function (n6b4az) {} });
    }, v5$kfw['setNativeFileDir'] = function (kx5dwv) {
      v5$kfw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + kx5dwv;
    }, v5$kfw['filesListObj'] = {}, v5$kfw['fileNativeDir'] = null, v5$kfw['fileListName'] = 'layaairfiles.txt', v5$kfw['ziyuFileData'] = {}, a6b4lz(v5$kfw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), v5$kfw;
  }(la49b7),
      dv5fk = function (efq1_) {
    function cyhoj() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], cyhoj['__super']['call'](this), this['_sound'] = cyhoj['_createSound']();
    }$i1_eq(cyhoj, 'laya.wx.mini.MiniSound', efq1_);var nzu64a = cyhoj['prototype'];return nzu64a['load'] = function (q_01) {
      var b6azn = this;q_01 = $wvkf['formatURL'](q_01), this['url'] = q_01;if (cyhoj['_audioCache'][q_01]) {
        this['event']('complete');return;
      }function bl9() {
        if (cyhoj['_null'] != undefined) b6azn['_sound']['onCanplay'](cyhoj['_null']), b6azn['_sound']['onError'](cyhoj['_null']);else try {
          b6azn['_sound']['onCanplay'](null), b6azn['_sound']['onError'](null), cyhoj['_null'] = null;
        } catch (kw5v) {
          console['warn']('[wxmini] _clearSound:' + kw5v), b6azn['_sound']['onCanplay'](_0eir), b6azn['_sound']['onError'](_0eir), cyhoj['_null'] = _0eir;
        }
      }function wfk$5() {
        bl9(), vwgd['loaded'] = !![], vwgd['event']('complete'), cyhoj['_audioCache'][vwgd['url']] = vwgd;
      }function v5$kwf(a4zbn) {
        console['error']('errCode=' + a4zbn['errCode'] + '  errMsg=' + a4zbn['errMsg']), bl9(), vwgd['event']('error');
      }function _0eir() {}this['_sound']['onCanplay'](wfk$5), this['_sound']['onError'](v5$kwf), this['_sound']['src'] = q_01;var vwgd = this;
    }, nzu64a['play'] = function (cojyt8, xwkd5) {
      cojyt8 === void 0x0 && (cojyt8 = 0x0), xwkd5 === void 0x0 && (xwkd5 = 0x0);var _ir1e0;if (this['url'] == cj82mt['_tMusic']) {
        if (!cyhoj['_musicAudio']) cyhoj['_musicAudio'] = cyhoj['_createSound']();_ir1e0 = cyhoj['_musicAudio'];
      } else _ir1e0 = cyhoj['_createSound']();_ir1e0['src'] = this['url'];var z4nb6 = new ts2cj(_ir1e0);return z4nb6['url'] = this['url'], z4nb6['loops'] = xwkd5, z4nb6['startTime'] = cojyt8, z4nb6['play'](), cj82mt['addChannel'](z4nb6), z4nb6;
    }, nzu64a['dispose'] = function () {
      var m3s9l = cyhoj['_audioCache'][this['url']];m3s9l && (m3s9l['src'] = '', delete cyhoj['_audioCache'][this['url']]);
    }, i0u_r(0x0, nzu64a, 'duration', function () {
      return this['_sound']['duration'];
    }), cyhoj['_createSound'] = function () {
      return cyhoj['_id']++, s39bl['window']['wx']['createInnerAudioContext']();
    }, cyhoj['_musicAudio'] = null, cyhoj['_id'] = 0x0, cyhoj['_audioCache'] = {}, cyhoj['_null'] = undefined, cyhoj;
  }(la49b7),
      ts2cj = function (dvw5x) {
    function wkv5df(toc2j) {
      this['_audio'] = null, this['_onEnd'] = null, wkv5df['__super']['call'](this), this['_audio'] = toc2j, this['_onEnd'] = kvf['bind'](this['__onEnd'], this), toc2j['onEnded'](this['_onEnd']);
    }$i1_eq(wkv5df, 'laya.wx.mini.MiniSoundChannel', dvw5x);var i0nruz = wkv5df['prototype'];return i0nruz['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (wf5vd['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, i0nruz['__onNull'] = function () {}, i0nruz['play'] = function () {
      this['isStopped'] = ![], cj82mt['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, i0nruz['stop'] = function () {
      this['isStopped'] = !![], cj82mt['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (wkv5df['_null'] != undefined) this['_audio']['onEnded'](wkv5df['_null']);else try {
        this['_audio']['onEnded'](null), wkv5df['_null'] = null;
      } catch (f$kq) {
        console['warn']('[wxmini] stop:' + f$kq), this['_audio']['onEnded'](kvf['bind'](this['__onNull'], this)), wkv5df['_null'] = kvf['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, i0nruz['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, i0nruz['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], cj82mt['addChannel'](this), this['_audio']['play']();
    }, i0u_r(0x0, i0nruz, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), i0u_r(0x0, i0nruz, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), i0u_r(0x0, i0nruz, 'volume', function () {
      return 0x1;
    }, function (scm3t2) {}), wkv5df['_null'] = undefined, wkv5df;
  }(a4z6un);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var mj2stc in Laya) {
    var q5fke = Laya[mj2stc];q5fke && q5fke['__isclass'] && (exports[mj2stc] = q5fke);
  }
});