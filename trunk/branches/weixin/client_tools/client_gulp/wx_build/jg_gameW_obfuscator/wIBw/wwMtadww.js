var s = wx.$W;
(function (window, document, ubw3) {
  var ypi_ = ubw3['un'],
      _rp0y = ubw3['uns'],
      u1b3 = ubw3['static'],
      rka7c = ubw3['class'],
      a87kec = ubw3['getset'],
      ohd46v = ubw3['__newvec'],
      _0ry = laya['utils']['Browser'],
      dv46oh = laya['events']['Event'],
      db6wo = laya['events']['EventDispatcher'],
      sqt2f$ = laya['resource']['HTMLImage'],
      qsnl$t = laya['utils']['Handler'],
      $stlq = laya['display']['Input'],
      mvxgh = laya['net']['Loader'],
      npli09 = laya['maths']['Matrix'],
      ipn09y = laya['renders']['Render'],
      zb5wu3 = laya['utils']['RunDriver'],
      s$ntil = laya['media']['Sound'],
      k18ca = laya['media']['SoundChannel'],
      bouw35 = laya['media']['SoundManager'],
      h4v = laya['display']['Stage'],
      o5vw6d = laya['net']['URL'],
      xv46hm = laya['utils']['Utils'],
      ubdo = function () {
    function i9pn0() {}return rka7c(i9pn0, 'laya.wx.mini.MiniAdpter'), i9pn0['getJson'] = function (cj7rk) {
      return JSON['parse'](cj7rk);
    }, i9pn0['init'] = function (ae18, p9_0yr) {
      ae18 === void 0x0 && (ae18 = ![]), p9_0yr === void 0x0 && (p9_0yr = ![]);if (i9pn0['_inited']) return;i9pn0['window'] = window;if (i9pn0['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;i9pn0['_inited'] = !![], i9pn0['isZiYu'] = p9_0yr, i9pn0['isPosMsgYu'] = ae18, i9pn0['EnvConfig'] = {}, !i9pn0['isZiYu'] && ($its['setNativeFileDir']('/layaairGame'), $its['existDir']($its['fileNativeDir'], qsnl$t['create'](i9pn0, i9pn0['onMkdirCallBack']))), i9pn0['window']['focus'] = function () {}, ubw3['getUrlPath'] = function () {}, i9pn0['window']['logtime'] = function (m4gvhx) {}, i9pn0['window']['alertTimeLog'] = function (mv4gh) {}, i9pn0['window']['resetShareInfo'] = function () {}, i9pn0['window']['CanvasRenderingContext2D'] = function () {}, i9pn0['window']['CanvasRenderingContext2D']['prototype'] = i9pn0['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i9pn0['window']['document']['body']['appendChild'] = function () {}, i9pn0['EnvConfig']['pixelRatioInt'] = 0x0, zb5wu3['getPixelRatio'] = i9pn0['pixelRatio'], i9pn0['_preCreateElement'] = _0ry['createElement'], _0ry['createElement'] = i9pn0['createElement'], zb5wu3['createShaderCondition'] = i9pn0['createShaderCondition'], xv46hm['parseXMLFromString'] = i9pn0['parseXMLFromString'], $stlq['_createInputElement'] = r97_jy['_createInputElement'], i9pn0['EnvConfig']['load'] = mvxgh['prototype']['load'], mvxgh['prototype']['load'] = k1cae8['prototype']['load'], i9pn0['isZiYu'] && ae18 && wx['onMessage'](function (oudb5) {
        oudb5['isLoad'] && ($its['ziyuFileData'][oudb5['url']] = oudb5['data']);
      });
    }, i9pn0['onMkdirCallBack'] = function (dw56vo, e8c7a) {
      if (!dw56vo) $its['filesListObj'] = JSON['parse'](e8c7a['data']);
    }, i9pn0['pixelRatio'] = function () {
      if (!i9pn0['EnvConfig']['pixelRatioInt']) try {
        var p0iy9 = wx['getSystemInfoSync']();return i9pn0['EnvConfig']['pixelRatioInt'] = p0iy9['pixelRatio'], p0iy9 = p0iy9, p0iy9['pixelRatio'];
      } catch (_jrpy) {}return i9pn0['EnvConfig']['pixelRatioInt'];
    }, i9pn0['createElement'] = function (odbwu) {
      if (odbwu == 'canvas') {
        var vow6d5;return i9pn0['idx'] == 0x1 ? i9pn0['isZiYu'] ? (vow6d5 = sharedCanvas, vow6d5['style'] = {}) : vow6d5 = window['canvas'] : vow6d5 = window['wx']['createCanvas'](), i9pn0['idx']++, vow6d5;
      } else {
        if (odbwu == 'textarea' || odbwu == 'input') return i9pn0['onCreateInput'](odbwu);else {
          if (odbwu == 'div') {
            var rya = i9pn0['_preCreateElement'](odbwu);return rya['contains'] = function (j7cakr) {
              return null;
            }, rya['removeChild'] = function (bwu1z) {}, rya;
          } else return i9pn0['_preCreateElement'](odbwu);
        }
      }
    }, i9pn0['onCreateInput'] = function (gm4xhv) {
      var h6mv4x = i9pn0['_preCreateElement'](gm4xhv);return h6mv4x['focus'] = r97_jy['wxinputFocus'], h6mv4x['blur'] = r97_jy['wxinputblur'], h6mv4x['style'] = {}, h6mv4x['value'] = 0x0, h6mv4x['parentElement'] = {}, h6mv4x['placeholder'] = {}, h6mv4x['type'] = {}, h6mv4x['setColor'] = function (a7jrkc) {}, h6mv4x['setType'] = function ($nt0) {}, h6mv4x['setFontFace'] = function (n0ti$l) {}, h6mv4x['addEventListener'] = function (k1ca8) {}, h6mv4x['contains'] = function (b13ze) {
        return null;
      }, h6mv4x['removeChild'] = function (wz5bu) {}, h6mv4x;
    }, i9pn0['createShaderCondition'] = function (ac7krj) {
      var ov5dw = this,
          l$sfq = function () {
        var dvwo6 = ac7krj;return ov5dw[ac7krj['replace']('this.', '')];
      };return l$sfq;
    }, i9pn0['EnvConfig'] = null, i9pn0['window'] = null, i9pn0['_preCreateElement'] = null, i9pn0['_inited'] = ![], i9pn0['wxRequest'] = null, i9pn0['systemInfo'] = null, i9pn0['version'] = '0.0.1', i9pn0['isZiYu'] = ![], i9pn0['isPosMsgYu'] = ![], i9pn0['parseXMLFromString'] = function (wd6bo5) {
      var pi_09y, ark7cj;wd6bo5 = wd6bo5['replace'](/>\s+</g, '><');try {
        pi_09y = new window['Parser']['DOMParser']()['parseFromString'](wd6bo5, 'text/xml');
      } catch (p9i0_) {
        throw '需要引入xml解析库文件';
      }return pi_09y;
    }, i9pn0['idx'] = 0x1, i9pn0;
  }(),
      il0n9 = function () {
    function kcjra7() {}rka7c(kcjra7, 'laya.wx.mini.MiniImage');var dwuo5 = kcjra7['prototype'];return dwuo5['_loadImage'] = function (rkj7c) {
      var wdb5 = this,
          ubo3w = ![];rkj7c['indexOf']('layaNativeDir/') == -0x1 && (ubo3w = !![], rkj7c = o5vw6d['formatURL'](rkj7c));if (!$its['getFileInfo'](rkj7c)) {
        if (rkj7c['indexOf']('http://') != -0x1 || rkj7c['indexOf']('https://') != -0x1) $its['downImg'](rkj7c, new qsnl$t(kcjra7, kcjra7['onDownImgCallBack'], [rkj7c, wdb5]), rkj7c);else kcjra7['onCreateImage'](rkj7c, wdb5, !![]);
      } else kcjra7['onCreateImage'](rkj7c, wdb5, !ubo3w);
    }, kcjra7['onDownImgCallBack'] = function (v4doh6, xvgm, hvd6o4) {
      if (!hvd6o4) kcjra7['onCreateImage'](v4doh6, xvgm);else xvgm['onError'](null);
    }, kcjra7['onCreateImage'] = function (wdvo, w5odu, w6o5v) {
      w6o5v === void 0x0 && (w6o5v = ![]);var ryp_;if (!w6o5v) {
        var _p9ryj = $its['getFileInfo'](wdvo),
            eac1k8 = _p9ryj['md5'];ryp_ = $its['getFileNativePath'](eac1k8);
      } else ryp_ = wdvo;if (w5odu['imgCache'] == null) w5odu['imgCache'] = {};var l$itn;function x4gvmh() {
        l$itn['onload'] = null, l$itn['onerror'] = null, delete w5odu['imgCache'][wdvo];
      };var vo5dh6 = function () {
        x4gvmh(), w5odu['onLoaded'](l$itn);
      },
          c1k8 = function () {
        x4gvmh(), w5odu['event']('error', 'Load image failed');
      };w5odu['_type'] == 'nativeimage' ? (l$itn = new _0ry['window']['Image'](), l$itn['crossOrigin'] = '', l$itn['onload'] = vo5dh6, l$itn['onerror'] = c1k8, l$itn['src'] = ryp_, w5odu['imgCache'][wdvo] = l$itn) : new sqt2f$['create'](ryp_, { 'onload': vo5dh6, 'onerror': c1k8, 'onCreate': function (hmgv) {
          l$itn = hmgv, w5odu['imgCache'][wdvo] = hmgv;
        } });
    }, kcjra7;
  }(),
      r97_jy = function () {
    function r7_ay() {}return rka7c(r7_ay, 'laya.wx.mini.MiniInput'), r7_ay['_createInputElement'] = function () {
      $stlq['_initInput']($stlq['area'] = _0ry['createElement']('textarea')), $stlq['_initInput']($stlq['input'] = _0ry['createElement']('input')), $stlq['inputContainer'] = _0ry['createElement']('div'), $stlq['inputContainer']['style']['position'] = 'absolute', $stlq['inputContainer']['style']['zIndex'] = 0x186a0, _0ry['container']['appendChild']($stlq['inputContainer']), $stlq['inputContainer']['setPos'] = function (dvx4h6, kce8) {
        $stlq['inputContainer']['style']['left'] = dvx4h6 + 'px', $stlq['inputContainer']['style']['top'] = kce8 + 'px';
      }, ubw3['stage']['on']('resize', null, r7_ay['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (tn$i) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), bouw35['_soundClass'] = owbu5d, bouw35['_musicClass'] = owbu5d;
    }, r7_ay['_onStageResize'] = function () {
      var p0l$ = ubw3['stage']['_canvasTransform']['identity']();p0l$['scale'](_0ry['width'] / ipn09y['canvas']['width'] / zb5wu3['getPixelRatio'](), _0ry['height'] / ipn09y['canvas']['height'] / zb5wu3['getPixelRatio']());
    }, r7_ay['wxinputFocus'] = function (vdh6x) {
      var y9_0pi = $stlq['inputElement']['target'];if (y9_0pi && !y9_0pi['editable']) return;ubdo['window']['wx']['offKeyboardConfirm'](), ubdo['window']['wx']['offKeyboardInput'](), ubdo['window']['wx']['showKeyboard']({ 'defaultValue': y9_0pi['text'], 'maxLength': y9_0pi['maxChars'], 'multiple': y9_0pi['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (gmh4xv) {}, 'fail': function (oub3w) {} }), ubdo['window']['wx']['onKeyboardConfirm'](function (vw5o) {
        var c8ekz1 = vw5o ? vw5o['value'] : '';y9_0pi['text'] = c8ekz1, y9_0pi['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ubdo['window']['wx']['onKeyboardInput'](function (b53ouw) {
        var ce8z1 = b53ouw ? b53ouw['value'] : '';if (!y9_0pi['multiline']) {
          if (ce8z1['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }y9_0pi['text'] = ce8z1, y9_0pi['event']('input');
      });
    }, r7_ay['inputEnter'] = function () {
      $stlq['inputElement']['target']['focus'] = ![];
    }, r7_ay['wxinputblur'] = function () {
      r7_ay['hideKeyboard']();
    }, r7_ay['hideKeyboard'] = function () {
      ubdo['window']['wx']['offKeyboardConfirm'](), ubdo['window']['wx']['offKeyboardInput'](), ubdo['window']['wx']['hideKeyboard']({ 'success': function (bu3o5) {
          console['log']('隐藏键盘');
        }, 'fail': function (ls$qt) {
          console['log']('隐藏键盘出错:' + (ls$qt ? ls$qt['errMsg'] : ''));
        } });
    }, r7_ay;
  }(),
      k1cae8 = function () {
    function ac81k() {}rka7c(ac81k, 'laya.wx.mini.MiniLoader');var _kraj7 = ac81k['prototype'];return _kraj7['load'] = function (l$itns, uow35b, w56vd, gvx, yrjp) {
      w56vd === void 0x0 && (w56vd = !![]), yrjp === void 0x0 && (yrjp = ![]);var _ar7kj = this;_ar7kj['_url'] = l$itns;if (l$itns['indexOf']('data:image') === 0x0) _ar7kj['_type'] = uow35b = 'image';else _ar7kj['_type'] = uow35b || (uow35b = _ar7kj['getTypeFromUrl'](l$itns));_ar7kj['_cache'] = w56vd, _ar7kj['_data'] = null;var _jary7 = 'ascii';if (l$itns['indexOf']('.fnt') != -0x1) _jary7 = 'utf8';else uow35b == 'arraybuffer' && (_jary7 = '');;var stn$lq = xv46hm['getFileExtension'](l$itns);if (ac81k['_fileTypeArr']['indexOf'](stn$lq) != -0x1) ubdo['EnvConfig']['load']['call'](this, l$itns, uow35b, w56vd, gvx, yrjp);else {
        if (!$its['getFileInfo'](l$itns)) {
          if (l$itns['indexOf']('layaNativeDir/') != -0x1) {
            if (ubdo['isZiYu']) {
              var ip09_ = $its['ziyuFileData'][l$itns];_ar7kj['onLoaded'](ip09_);return;
            } else {
              cosnole['log']('read read'), $its['read'](l$itns, _jary7, new qsnl$t(ac81k, ac81k['onReadNativeCallBack'], [_jary7, l$itns, uow35b, w56vd, gvx, yrjp, _ar7kj]));return;
            }
          }if (o5vw6d['rootPath'] == '') var j_y7ar = l$itns;else j_y7ar = l$itns['split'](o5vw6d['rootPath'])[0x0];l$itns['indexOf']('http://') != -0x1 || l$itns['indexOf']('https://') != -0x1 ? ubdo['EnvConfig']['load']['call'](_ar7kj, l$itns, uow35b, w56vd, gvx, yrjp) : $its['readFile'](j_y7ar, _jary7, new qsnl$t(ac81k, ac81k['onReadNativeCallBack'], [_jary7, l$itns, uow35b, w56vd, gvx, yrjp, _ar7kj]), l$itns);
        } else ubdo['EnvConfig']['load']['call'](this, l$itns, uow35b, w56vd, gvx, yrjp);
      }
    }, _kraj7['resMgrLoad'] = function (il0pn$, iyn0, rac7kj, zce8k1, ray_, jyp_9, e13bu) {
      rac7kj === void 0x0 && (rac7kj = 0x0), zce8k1 === void 0x0 && (zce8k1 = ![]), ray_ === void 0x0 && (ray_ = ![]), jyp_9 === void 0x0 && (jyp_9 = 0x0), e13bu === void 0x0 && (e13bu = 0x3), il0pn$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', il0pn$), ubdo['EnvConfig']['resMgrLoad'](il0pn$, ($tqs, u13zb, a7jcr) => {
        ac81k['prototype']['resMgrLoadCallBack']($tqs, u13zb, a7jcr, iyn0);
      }, rac7kj, zce8k1, ray_, jyp_9, e13bu);
    }, _kraj7['resMgrLoadCallBack'] = function (mhxg4, dh56o, kajcr, aj8k7c) {
      console['log']('buff:::', mhxg4, kajcr, $its['fileNativeDir'] + '///' + $its['fileListName']), aj8k7c(mhxg4, dh56o, kajcr);
    }, _kraj7['clearRes'] = function (dov5w, lqt$) {
      lqt$ === void 0x0 && (lqt$ = ![]);var zc1k8 = this;zc1k8['clearRes'](dov5w, lqt$);var ak7 = $its['getFileInfo'](dov5w);if (ak7 && (dov5w['indexOf']('http://') != -0x1 || dov5w['indexOf']('https://') != -0x1)) {
        var wob5ud = ak7['md5'],
            uow = $its['getFileNativePath'](wob5ud);$its['remove'](uow);
      }
    }, ac81k['onReadNativeCallBack'] = function (kj_7ra, vd4ho6, ntls$q, cez38, slit$n, py0_9, z1c38e, n$lsi, n$list) {
      cez38 === void 0x0 && (cez38 = !![]), py0_9 === void 0x0 && (py0_9 = ![]), n$lsi === void 0x0 && (n$lsi = 0x0);if (!n$lsi) {
        var xdh6v;if (ntls$q == 'json' || ntls$q == 'atlas') xdh6v = ubdo['getJson'](n$list['data']);else ntls$q == 'xml' ? xdh6v = xv46hm['parseXMLFromString'](n$list['data']) : xdh6v = n$list['data'];z1c38e['onLoaded'](xdh6v), !ubdo['isZiYu'] && ubdo['isPosMsgYu'] && ntls$q != 'arraybuffer' && wx['postMessage']({ 'url': vd4ho6, 'data': xdh6v, 'isLoad': !![] });
      } else n$lsi == 0x1 && ubdo['EnvConfig']['load']['call'](z1c38e, vd4ho6, ntls$q, cez38, slit$n, py0_9);
    }, u1b3(ac81k, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ac81k;
  }(),
      $its = function (n90) {
    function ubo() {
      ubo['__super']['call'](this);;
    }return rka7c(ubo, 'laya.wx.mini.MiniFileMgr', n90), ubo['isLoadFile'] = function (eca87k) {
      return ubo['_fileTypeArr']['indexOf'](eca87k) != -0x1 ? !![] : ![];
    }, ubo['getFileInfo'] = function (in9y0p) {
      var z1e8k = in9y0p['split']('?')[0x0],
          ekc8a = ubo['filesListObj'][z1e8k];if (ekc8a == null) return null;else return ekc8a;return null;
    }, ubo['onFileUpdate'] = function (ip9l0, b1uz3w) {
      var l0p$i = ip9l0['split']('/'),
          lnpi90 = l0p$i[l0p$i['length'] - 0x1],
          bz31w = ubo['getFileInfo'](b1uz3w);if (bz31w == null) ubo['onSaveFile'](b1uz3w, lnpi90);else {
        if (bz31w['readyUrl'] != b1uz3w) ubo['remove'](lnpi90, b1uz3w);
      }
    }, ubo['exits'] = function (ayj7r, kar_7) {
      var w5o3b = ubo['getFileNativePath'](ayj7r);ubo['fs']['getFileInfo']({ 'filePath': w5o3b, 'success': function (hdv4x6) {
          kar_7 != null && kar_7['runWith']([0x0, hdv4x6]);
        }, 'fail': function (bzu1e3) {
          kar_7 != null && kar_7['runWith']([0x1, bzu1e3]);
        } });
    }, ubo['read'] = function (c3z81, mxvh4g, $lt0n, t$lfqs) {
      mxvh4g === void 0x0 && (mxvh4g = 'ascill'), t$lfqs === void 0x0 && (t$lfqs = '');var mghv4;t$lfqs != '' ? mghv4 = ubo['getFileNativePath'](c3z81) : mghv4 = c3z81, ubo['fs']['readFile']({ 'filePath': mghv4, 'encoding': mxvh4g, 'success': function (rj7kac) {
          $lt0n != null && $lt0n['runWith']([0x0, rj7kac]);
        }, 'fail': function (sfq$2t) {
          if (sfq$2t && t$lfqs != '') ubo['down'](t$lfqs, mxvh4g, $lt0n, t$lfqs);else $lt0n != null && $lt0n['runWith']([0x1]);
        } });
    }, ubo['readNativeFile'] = function (m6h4, tn$lsq) {
      ubo['fs']['readFile']({ 'filePath': m6h4, 'encoding': '', 'success': function (tqfl$) {
          tn$lsq != null && tn$lsq['runWith']([0x0]);
        }, 'fail': function (ekz18) {
          tn$lsq != null && tn$lsq['runWith']([0x1]);
        } });
    }, ubo['down'] = function (dvx4, u1wz, m4gh, e7ac) {
      u1wz === void 0x0 && (u1wz = 'ascill'), e7ac === void 0x0 && (e7ac = '');var e183uz = ubo['getFileNativePath'](e7ac),
          lni$p = ubo['wxdown']({ 'url': dvx4, 'filePath': e183uz, 'success': function (sf$qt2) {
          if (sf$qt2['statusCode'] === 0xc8) ubo['readFile'](sf$qt2['filePath'], u1wz, m4gh, e7ac);
        }, 'fail': function (lni$0p) {
          m4gh != null && m4gh['runWith']([0x1, lni$0p]);
        } });lni$p['onProgressUpdate'](function (_yp0r) {
        m4gh != null && m4gh['runWith']([0x2, _yp0r['progress']]);
      });
    }, ubo['readFile'] = function (o56vh, sf2q$t, dho56v, li0$n) {
      sf2q$t === void 0x0 && (sf2q$t = 'ascill'), li0$n === void 0x0 && (li0$n = ''), ubo['fs']['readFile']({ 'filePath': o56vh, 'encoding': sf2q$t, 'success': function (ohd6) {
          if (o56vh['indexOf']('http://') != -0x1 || o56vh['indexOf']('https://') != -0x1) ubo['onFileUpdate'](o56vh, li0$n);dho56v != null && dho56v['runWith']([0x0, ohd6]);
        }, 'fail': function (b3wo5) {
          if (b3wo5) dho56v != null && dho56v['runWith']([0x1, b3wo5]);
        } });
    }, ubo['downImg'] = function (ob5d6w, w31buz, a8ek7c) {
      a8ek7c === void 0x0 && (a8ek7c = '');var fslq = ubo['wxdown']({ 'url': ob5d6w, 'success': function (j9pr_y) {
          j9pr_y['statusCode'] === 0xc8 && ubo['copyFile'](j9pr_y['tempFilePath'], a8ek7c, w31buz);
        }, 'fail': function (d6wo5b) {
          w31buz != null && w31buz['runWith']([0x1, d6wo5b]);
        } });
    }, ubo['copyFile'] = function (n$pl0, ipny0, cz81e3) {
      var r7ak = n$pl0['split']('/'),
          vm6xh4 = r7ak[r7ak['length'] - 0x1],
          vg4xhm = ipny0['split']('?')[0x0],
          $qltsn = ubo['getFileInfo'](ipny0),
          bowu5 = ubo['getFileNativePath'](vm6xh4);ubo['fs']['copyFile']({ 'srcPath': n$pl0, 'destPath': bowu5, 'success': function (ouwb5) {
          if (!$qltsn) ubo['onSaveFile'](ipny0, vm6xh4), cz81e3 != null && cz81e3['runWith']([0x0]);else {
            if ($qltsn['readyUrl'] != ipny0) ubo['remove'](vm6xh4, ipny0, cz81e3);
          }
        }, 'fail': function (v4hx6d) {
          cz81e3 != null && cz81e3['runWith']([0x1, v4hx6d]);
        } });
    }, ubo['getFileNativePath'] = function (yajr_) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + yajr_;
    }, ubo['remove'] = function (qslft$, wzbu3, p9jr) {
      wzbu3 === void 0x0 && (wzbu3 = '');var l$sint = ubo['getFileInfo'](wzbu3),
          in0y9p = ubo['getFileNativePath'](l$sint['md5']);ubw3['loader']['clearRes'](l$sint['readyUrl']), ubo['fs']['unlink']({ 'filePath': in0y9p, 'success': function (ov5hd) {
          if (wzbu3 != '') ubo['onSaveFile'](wzbu3, qslft$);p9jr != null && p9jr['runWith']([0x0]);
        }, 'fail': function (d64ho) {} });
    }, ubo['onSaveFile'] = function (pi0n$, lst$qn) {
      var p0y9_r = pi0n$['split']('?')[0x0];ubo['filesListObj'][p0y9_r] = { 'md5': lst$qn, 'readyUrl': pi0n$ }, ubo['fs']['writeFile']({ 'filePath': ubo['fileNativeDir'] + '/' + ubo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ubo['filesListObj']), 'success': function (ov65hd) {
          console['log']('写入测试测试成功：', ov65hd);
        }, 'fail': function (hxv4gm) {
          console['log']('写入测试测试失败：', hxv4gm);
        } });
    }, ubo['existDir'] = function (b5od6w, _ajr) {
      ubo['fs']['mkdir']({ 'dirPath': b5od6w, 'success': function (q2sft$) {
          _ajr != null && _ajr['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ajkc) {
          if (ajkc['errMsg']['indexOf']('file already exists') != -0x1) ubo['readSync'](ubo['fileListName'], 'utf8', _ajr);else _ajr != null && _ajr['runWith']([0x1, ajkc]);
        } });
    }, ubo['readSync'] = function (r0yp_9, d5owub, dwobu5, p9nl0i) {
      d5owub === void 0x0 && (d5owub = 'ascill'), p9nl0i === void 0x0 && (p9nl0i = '');var bz13wu = ubo['getFileNativePath'](r0yp_9),
          aj7ry;try {
        aj7ry = ubo['fs']['readFileSync'](bz13wu), dwobu5 != null && dwobu5['runWith']([0x0, { 'data': aj7ry }]);
      } catch (ezkc18) {
        dwobu5 != null && dwobu5['runWith']([0x1]);
      }
    }, ubo['readCache'] = function () {}, ubo['writeCache'] = function (p9y_j) {
      var p_yj = readyUrl['split']('?')[0x0];ubo['filesListObj'][p_yj] = { 'md5': md5Name, 'readyUrl': readyUrl }, ubo['fs']['writeFile']({ 'filePath': ubo['fileNativeDir'] + '/' + ubo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ubo['filesListObj']), 'success': function (uz53w) {}, 'fail': function (mx4g) {} });
    }, ubo['setNativeFileDir'] = function (ow3b5) {
      ubo['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ow3b5;
    }, ubo['filesListObj'] = {}, ubo['fileNativeDir'] = null, ubo['fileListName'] = 'layaairfiles.txt', ubo['ziyuFileData'] = {}, u1b3(ubo, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ubo;
  }(db6wo),
      owbu5d = function (_9pjr) {
    function k7acj8() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], k7acj8['__super']['call'](this), this['_sound'] = k7acj8['_createSound']();
    }rka7c(k7acj8, 'laya.wx.mini.MiniSound', _9pjr);var vhxd6 = k7acj8['prototype'];return vhxd6['load'] = function (wbz1u) {
      var cjk = this;wbz1u = o5vw6d['formatURL'](wbz1u), this['url'] = wbz1u;if (k7acj8['_audioCache'][wbz1u]) {
        this['event']('complete');return;
      }function c1a8ek() {
        if (k7acj8['_null'] != undefined) cjk['_sound']['onCanplay'](k7acj8['_null']), cjk['_sound']['onError'](k7acj8['_null']);else try {
          cjk['_sound']['onCanplay'](null), cjk['_sound']['onError'](null), k7acj8['_null'] = null;
        } catch (rya7j_) {
          console['warn']('[wxmini] _clearSound:' + rya7j_), cjk['_sound']['onCanplay'](h6od5), cjk['_sound']['onError'](h6od5), k7acj8['_null'] = h6od5;
        }
      }function $tfsq2() {
        c1a8ek(), kj7a8c['loaded'] = !![], kj7a8c['event']('complete'), k7acj8['_audioCache'][kj7a8c['url']] = kj7a8c;
      }function hv5(e381uz) {
        console['error']('errCode=' + e381uz['errCode'] + '  errMsg=' + e381uz['errMsg']), c1a8ek(), kj7a8c['event']('error');
      }function h6od5() {}this['_sound']['onCanplay']($tfsq2), this['_sound']['onError'](hv5), this['_sound']['src'] = wbz1u;var kj7a8c = this;
    }, vhxd6['play'] = function (qsf2t$, a8kc1) {
      qsf2t$ === void 0x0 && (qsf2t$ = 0x0), a8kc1 === void 0x0 && (a8kc1 = 0x0);var k78ea;if (this['url'] == bouw35['_tMusic']) {
        if (!k7acj8['_musicAudio']) k7acj8['_musicAudio'] = k7acj8['_createSound']();k78ea = k7acj8['_musicAudio'];
      } else k78ea = k7acj8['_createSound']();k78ea['src'] = this['url'];var b3wz = new ni9pl0(k78ea);return b3wz['url'] = this['url'], b3wz['loops'] = a8kc1, b3wz['startTime'] = qsf2t$, b3wz['play'](), bouw35['addChannel'](b3wz), b3wz;
    }, vhxd6['dispose'] = function () {
      var cajk8 = k7acj8['_audioCache'][this['url']];cajk8 && (cajk8['src'] = '', delete k7acj8['_audioCache'][this['url']]);
    }, a87kec(0x0, vhxd6, 'duration', function () {
      return this['_sound']['duration'];
    }), k7acj8['_createSound'] = function () {
      return k7acj8['_id']++, ubdo['window']['wx']['createInnerAudioContext']();
    }, k7acj8['_musicAudio'] = null, k7acj8['_id'] = 0x0, k7acj8['_audioCache'] = {}, k7acj8['_null'] = undefined, k7acj8;
  }(db6wo),
      ni9pl0 = function (zbwu53) {
    function stnli(o6dvh4) {
      this['_audio'] = null, this['_onEnd'] = null, stnli['__super']['call'](this), this['_audio'] = o6dvh4, this['_onEnd'] = xv46hm['bind'](this['__onEnd'], this), o6dvh4['onEnded'](this['_onEnd']);
    }rka7c(stnli, 'laya.wx.mini.MiniSoundChannel', zbwu53);var b3zw5 = stnli['prototype'];return b3zw5['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ubw3['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, b3zw5['__onNull'] = function () {}, b3zw5['play'] = function () {
      this['isStopped'] = ![], bouw35['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, b3zw5['stop'] = function () {
      this['isStopped'] = !![], bouw35['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (stnli['_null'] != undefined) this['_audio']['onEnded'](stnli['_null']);else try {
        this['_audio']['onEnded'](null), stnli['_null'] = null;
      } catch (tnslq) {
        console['warn']('[wxmini] stop:' + tnslq), this['_audio']['onEnded'](xv46hm['bind'](this['__onNull'], this)), stnli['_null'] = xv46hm['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, b3zw5['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, b3zw5['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], bouw35['addChannel'](this), this['_audio']['play']();
    }, a87kec(0x0, b3zw5, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), a87kec(0x0, b3zw5, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), a87kec(0x0, b3zw5, 'volume', function () {
      return 0x1;
    }, function (ln9p) {}), stnli['_null'] = undefined, stnli;
  }(k18ca);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var e1a8kc in Laya) {
    var itls$n = Laya[e1a8kc];itls$n && itls$n['__isclass'] && (exports[e1a8kc] = itls$n);
  }
});