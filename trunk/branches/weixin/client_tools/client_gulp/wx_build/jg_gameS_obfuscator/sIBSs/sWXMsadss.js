var K = wx.$S;
(function (window, document, vk9o3) {
  var pqy5s = vk9o3['un'],
      xm2n7 = vk9o3['uns'],
      u34 = vk9o3['static'],
      a45$dh = vk9o3['class'],
      l8bj1 = vk9o3['getset'],
      bg816j = vk9o3['__newvec'],
      g1jq8b = laya['utils']['Browser'],
      _xcm = laya['events']['Event'],
      i9cw_0 = laya['events']['EventDispatcher'],
      tmin2x = laya['resource']['HTMLImage'],
      e$uad4 = laya['utils']['Handler'],
      n7tx = laya['display']['Input'],
      qypgs = laya['net']['Loader'],
      _xim2c = laya['maths']['Matrix'],
      lj86 = laya['renders']['Render'],
      v3oreu = laya['utils']['RunDriver'],
      a4e$ru = laya['media']['Sound'],
      c_w0k = laya['media']['SoundChannel'],
      b86f1l = laya['media']['SoundManager'],
      qyjgsp = laya['display']['Stage'],
      ozuv = laya['net']['URL'],
      c9iw_0 = laya['utils']['Utils'],
      adh$45 = function () {
    function k3o9() {}return a45$dh(k3o9, 'laya.wx.mini.MiniAdpter'), k3o9['getJson'] = function (ozv3) {
      return JSON['parse'](ozv3);
    }, k3o9['init'] = function (mx_2ci, sdh5) {
      mx_2ci === void 0x0 && (mx_2ci = ![]), sdh5 === void 0x0 && (sdh5 = ![]);if (k3o9['_inited']) return;k3o9['window'] = window;if (k3o9['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;k3o9['_inited'] = !![], k3o9['isZiYu'] = sdh5, k3o9['isPosMsgYu'] = mx_2ci, k3o9['EnvConfig'] = {}, !k3o9['isZiYu'] && (eua4$r['setNativeFileDir']('/layaairGame'), eua4$r['existDir'](eua4$r['fileNativeDir'], e$uad4['create'](k3o9, k3o9['onMkdirCallBack']))), k3o9['window']['focus'] = function () {}, vk9o3['getUrlPath'] = function () {}, k3o9['window']['logtime'] = function (k3rovz) {}, k3o9['window']['alertTimeLog'] = function (ud4) {}, k3o9['window']['resetShareInfo'] = function () {}, k3o9['window']['CanvasRenderingContext2D'] = function () {}, k3o9['window']['CanvasRenderingContext2D']['prototype'] = k3o9['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], k3o9['window']['document']['body']['appendChild'] = function () {}, k3o9['EnvConfig']['pixelRatioInt'] = 0x0, v3oreu['getPixelRatio'] = k3o9['pixelRatio'], k3o9['_preCreateElement'] = g1jq8b['createElement'], g1jq8b['createElement'] = k3o9['createElement'], v3oreu['createShaderCondition'] = k3o9['createShaderCondition'], c9iw_0['parseXMLFromString'] = k3o9['parseXMLFromString'], n7tx['_createInputElement'] = c9k_['_createInputElement'], k3o9['EnvConfig']['load'] = qypgs['prototype']['load'], qypgs['prototype']['load'] = ypshgq['prototype']['load'], k3o9['isZiYu'] && mx_2ci && wx['onMessage'](function (pqhg) {
        pqhg['isLoad'] && (eua4$r['ziyuFileData'][pqhg['url']] = pqhg['data']);
      });
    }, k3o9['onMkdirCallBack'] = function (n2x_i, vro3zu) {
      if (!n2x_i) eua4$r['filesListObj'] = JSON['parse'](vro3zu['data']);
    }, k3o9['pixelRatio'] = function () {
      if (!k3o9['EnvConfig']['pixelRatioInt']) try {
        var _0wc9 = wx['getSystemInfoSync']();return k3o9['EnvConfig']['pixelRatioInt'] = _0wc9['pixelRatio'], _0wc9 = _0wc9, _0wc9['pixelRatio'];
      } catch (jb1l) {}return k3o9['EnvConfig']['pixelRatioInt'];
    }, k3o9['createElement'] = function (cz90wk) {
      if (cz90wk == 'canvas') {
        var yqgsj;return k3o9['idx'] == 0x1 ? k3o9['isZiYu'] ? (yqgsj = sharedCanvas, yqgsj['style'] = {}) : yqgsj = window['canvas'] : yqgsj = window['wx']['createCanvas'](), k3o9['idx']++, yqgsj;
      } else {
        if (cz90wk == 'textarea' || cz90wk == 'input') return k3o9['onCreateInput'](cz90wk);else {
          if (cz90wk == 'div') {
            var gsypqh = k3o9['_preCreateElement'](cz90wk);return gsypqh['contains'] = function (f8) {
              return null;
            }, gsypqh['removeChild'] = function (kzrvo3) {}, gsypqh;
          } else return k3o9['_preCreateElement'](cz90wk);
        }
      }
    }, k3o9['onCreateInput'] = function (c0_mxi) {
      var q8p1 = k3o9['_preCreateElement'](c0_mxi);return q8p1['focus'] = c9k_['wxinputFocus'], q8p1['blur'] = c9k_['wxinputblur'], q8p1['style'] = {}, q8p1['value'] = 0x0, q8p1['parentElement'] = {}, q8p1['placeholder'] = {}, q8p1['type'] = {}, q8p1['setColor'] = function (rouzv) {}, q8p1['setType'] = function ($5e4da) {}, q8p1['setFontFace'] = function (v3zor) {}, q8p1['addEventListener'] = function (zr) {}, q8p1['contains'] = function (k_09wc) {
        return null;
      }, q8p1['removeChild'] = function (da5yhs) {}, q8p1;
    }, k3o9['createShaderCondition'] = function (i9_c0w) {
      var $4urea = this,
          x0m_ic = function () {
        var imxn = i9_c0w;return $4urea[i9_c0w['replace']('this.', '')];
      };return x0m_ic;
    }, k3o9['EnvConfig'] = null, k3o9['window'] = null, k3o9['_preCreateElement'] = null, k3o9['_inited'] = ![], k3o9['wxRequest'] = null, k3o9['systemInfo'] = null, k3o9['version'] = '0.0.1', k3o9['isZiYu'] = ![], k3o9['isPosMsgYu'] = ![], k3o9['parseXMLFromString'] = function (fbl16) {
      var bj81qg, ydah$;fbl16 = fbl16['replace'](/>\s+</g, '><');try {
        bj81qg = new window['Parser']['DOMParser']()['parseFromString'](fbl16, 'text/xml');
      } catch (jp81qg) {
        throw '需要引入xml解析库文件';
      }return bj81qg;
    }, k3o9['idx'] = 0x1, k3o9;
  }(),
      _2xcm = function () {
    function hsy() {}a45$dh(hsy, 'laya.wx.mini.MiniImage');var l8b61 = hsy['prototype'];return l8b61['_loadImage'] = function (hsy5pd) {
      var qp1j = this,
          jp = ![];hsy5pd['indexOf']('layaNativeDir/') == -0x1 && (jp = !![], hsy5pd = ozuv['formatURL'](hsy5pd));if (!eua4$r['getFileInfo'](hsy5pd)) {
        if (hsy5pd['indexOf']('http://') != -0x1 || hsy5pd['indexOf']('https://') != -0x1) eua4$r['downImg'](hsy5pd, new e$uad4(hsy, hsy['onDownImgCallBack'], [hsy5pd, qp1j]), hsy5pd);else hsy['onCreateImage'](hsy5pd, qp1j, !![]);
      } else hsy['onCreateImage'](hsy5pd, qp1j, !jp);
    }, hsy['onDownImgCallBack'] = function (rozvu, bj681, uorzv) {
      if (!uorzv) hsy['onCreateImage'](rozvu, bj681);else bj681['onError'](null);
    }, hsy['onCreateImage'] = function (o9zwkv, sgq1pj, e4da$) {
      e4da$ === void 0x0 && (e4da$ = ![]);var vroe3;if (!e4da$) {
        var tnx2m = eua4$r['getFileInfo'](o9zwkv),
            x2cm = tnx2m['md5'];vroe3 = eua4$r['getFileNativePath'](x2cm);
      } else vroe3 = o9zwkv;if (sgq1pj['imgCache'] == null) sgq1pj['imgCache'] = {};var x2tin;function yh5sp() {
        x2tin['onload'] = null, x2tin['onerror'] = null, delete sgq1pj['imgCache'][o9zwkv];
      };var $a4e = function () {
        yh5sp(), sgq1pj['onLoaded'](x2tin);
      },
          fl816b = function () {
        yh5sp(), sgq1pj['event']('error', 'Load image failed');
      };sgq1pj['_type'] == 'nativeimage' ? (x2tin = new g1jq8b['window']['Image'](), x2tin['crossOrigin'] = '', x2tin['onload'] = $a4e, x2tin['onerror'] = fl816b, x2tin['src'] = vroe3, sgq1pj['imgCache'][o9zwkv] = x2tin) : new tmin2x['create'](vroe3, { 'onload': $a4e, 'onerror': fl816b, 'onCreate': function (e3uovr) {
          x2tin = e3uovr, sgq1pj['imgCache'][o9zwkv] = e3uovr;
        } });
    }, hsy;
  }(),
      c9k_ = function () {
    function hayd5() {}return a45$dh(hayd5, 'laya.wx.mini.MiniInput'), hayd5['_createInputElement'] = function () {
      n7tx['_initInput'](n7tx['area'] = g1jq8b['createElement']('textarea')), n7tx['_initInput'](n7tx['input'] = g1jq8b['createElement']('input')), n7tx['inputContainer'] = g1jq8b['createElement']('div'), n7tx['inputContainer']['style']['position'] = 'absolute', n7tx['inputContainer']['style']['zIndex'] = 0x186a0, g1jq8b['container']['appendChild'](n7tx['inputContainer']), n7tx['inputContainer']['setPos'] = function (dh5$a4, ahs5) {
        n7tx['inputContainer']['style']['left'] = dh5$a4 + 'px', n7tx['inputContainer']['style']['top'] = ahs5 + 'px';
      }, vk9o3['stage']['on']('resize', null, hayd5['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hqs) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), b86f1l['_soundClass'] = g1jb8, b86f1l['_musicClass'] = g1jb8;
    }, hayd5['_onStageResize'] = function () {
      var qsphy = vk9o3['stage']['_canvasTransform']['identity']();qsphy['scale'](g1jq8b['width'] / lj86['canvas']['width'] / v3oreu['getPixelRatio'](), g1jq8b['height'] / lj86['canvas']['height'] / v3oreu['getPixelRatio']());
    }, hayd5['wxinputFocus'] = function (jgqb81) {
      var ha4$d = n7tx['inputElement']['target'];if (ha4$d && !ha4$d['editable']) return;adh$45['window']['wx']['offKeyboardConfirm'](), adh$45['window']['wx']['offKeyboardInput'](), adh$45['window']['wx']['showKeyboard']({ 'defaultValue': ha4$d['text'], 'maxLength': ha4$d['maxChars'], 'multiple': ha4$d['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (lbj861) {}, 'fail': function (gqyhp) {} }), adh$45['window']['wx']['onKeyboardConfirm'](function (w9okvz) {
        var y5pdsh = w9okvz ? w9okvz['value'] : '';ha4$d['text'] = y5pdsh, ha4$d['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), adh$45['window']['wx']['onKeyboardInput'](function (x_0im) {
        var kvoz93 = x_0im ? x_0im['value'] : '';if (!ha4$d['multiline']) {
          if (kvoz93['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ha4$d['text'] = kvoz93, ha4$d['event']('input');
      });
    }, hayd5['inputEnter'] = function () {
      n7tx['inputElement']['target']['focus'] = ![];
    }, hayd5['wxinputblur'] = function () {
      hayd5['hideKeyboard']();
    }, hayd5['hideKeyboard'] = function () {
      adh$45['window']['wx']['offKeyboardConfirm'](), adh$45['window']['wx']['offKeyboardInput'](), adh$45['window']['wx']['hideKeyboard']({ 'success': function (k0v9wz) {
          console['log']('隐藏键盘');
        }, 'fail': function (yah$5) {
          console['log']('隐藏键盘出错:' + (yah$5 ? yah$5['errMsg'] : ''));
        } });
    }, hayd5;
  }(),
      ypshgq = function () {
    function jsqypg() {}a45$dh(jsqypg, 'laya.wx.mini.MiniLoader');var $5had = jsqypg['prototype'];return $5had['load'] = function (qpsyjg, vork3z, u3$re, _xc0mi, hsy5dp) {
      u3$re === void 0x0 && (u3$re = !![]), hsy5dp === void 0x0 && (hsy5dp = ![]);var vor3 = this;vor3['_url'] = qpsyjg;if (qpsyjg['indexOf']('data:image') === 0x0) vor3['_type'] = vork3z = 'image';else vor3['_type'] = vork3z || (vork3z = vor3['getTypeFromUrl'](qpsyjg));vor3['_cache'] = u3$re, vor3['_data'] = null;var eu$ar = 'ascii';if (qpsyjg['indexOf']('.fnt') != -0x1) eu$ar = 'utf8';else vork3z == 'arraybuffer' && (eu$ar = '');;var zck0w9 = c9iw_0['getFileExtension'](qpsyjg);if (jsqypg['_fileTypeArr']['indexOf'](zck0w9) != -0x1) adh$45['EnvConfig']['load']['call'](this, qpsyjg, vork3z, u3$re, _xc0mi, hsy5dp);else {
        if (!eua4$r['getFileInfo'](qpsyjg)) {
          if (qpsyjg['indexOf']('layaNativeDir/') != -0x1) {
            if (adh$45['isZiYu']) {
              var r3uveo = eua4$r['ziyuFileData'][qpsyjg];vor3['onLoaded'](r3uveo);return;
            } else {
              cosnole['log']('read read'), eua4$r['read'](qpsyjg, eu$ar, new e$uad4(jsqypg, jsqypg['onReadNativeCallBack'], [eu$ar, qpsyjg, vork3z, u3$re, _xc0mi, hsy5dp, vor3]));return;
            }
          }if (ozuv['rootPath'] == '') var zw0c = qpsyjg;else zw0c = qpsyjg['split'](ozuv['rootPath'])[0x0];qpsyjg['indexOf']('http://') != -0x1 || qpsyjg['indexOf']('https://') != -0x1 ? adh$45['EnvConfig']['load']['call'](vor3, qpsyjg, vork3z, u3$re, _xc0mi, hsy5dp) : eua4$r['readFile'](zw0c, eu$ar, new e$uad4(jsqypg, jsqypg['onReadNativeCallBack'], [eu$ar, qpsyjg, vork3z, u3$re, _xc0mi, hsy5dp, vor3]), qpsyjg);
        } else adh$45['EnvConfig']['load']['call'](this, qpsyjg, vork3z, u3$re, _xc0mi, hsy5dp);
      }
    }, $5had['resMgrLoad'] = function (zk3ov9, k9wzov, ure3o4, $dh5ay, x2itn, f861l, j1qbg) {
      ure3o4 === void 0x0 && (ure3o4 = 0x0), $dh5ay === void 0x0 && ($dh5ay = ![]), x2itn === void 0x0 && (x2itn = ![]), f861l === void 0x0 && (f861l = 0x0), j1qbg === void 0x0 && (j1qbg = 0x3), zk3ov9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zk3ov9), adh$45['EnvConfig']['resMgrLoad'](zk3ov9, (qsg1, e54a$, xtm2i) => {
        jsqypg['prototype']['resMgrLoadCallBack'](qsg1, e54a$, xtm2i, k9wzov);
      }, ure3o4, $dh5ay, x2itn, f861l, j1qbg);
    }, $5had['resMgrLoadCallBack'] = function (hp5sy, zrvk3, w_ic09, kcw9z0) {
      console['log']('buff:::', hp5sy, w_ic09, eua4$r['fileNativeDir'] + '///' + eua4$r['fileListName']), kcw9z0(hp5sy, zrvk3, w_ic09);
    }, $5had['clearRes'] = function (r3kzvo, gq1bj8) {
      gq1bj8 === void 0x0 && (gq1bj8 = ![]);var wkv90z = this;wkv90z['clearRes'](r3kzvo, gq1bj8);var ve3u = eua4$r['getFileInfo'](r3kzvo);if (ve3u && (r3kzvo['indexOf']('http://') != -0x1 || r3kzvo['indexOf']('https://') != -0x1)) {
        var ci0w_9 = ve3u['md5'],
            qbg18j = eua4$r['getFileNativePath'](ci0w_9);eua4$r['remove'](qbg18j);
      }
    }, jsqypg['onReadNativeCallBack'] = function (ixmn_, qjg1sp, xi2mn_, $4ead, a4$e5, ru4ea$, vrk3oz, uovre, a$5) {
      $4ead === void 0x0 && ($4ead = !![]), ru4ea$ === void 0x0 && (ru4ea$ = ![]), uovre === void 0x0 && (uovre = 0x0);if (!uovre) {
        var _x2mc;if (xi2mn_ == 'json' || xi2mn_ == 'atlas') _x2mc = adh$45['getJson'](a$5['data']);else xi2mn_ == 'xml' ? _x2mc = c9iw_0['parseXMLFromString'](a$5['data']) : _x2mc = a$5['data'];vrk3oz['onLoaded'](_x2mc), !adh$45['isZiYu'] && adh$45['isPosMsgYu'] && xi2mn_ != 'arraybuffer' && wx['postMessage']({ 'url': qjg1sp, 'data': _x2mc, 'isLoad': !![] });
      } else uovre == 0x1 && adh$45['EnvConfig']['load']['call'](vrk3oz, qjg1sp, xi2mn_, $4ead, a4$e5, ru4ea$);
    }, u34(jsqypg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jsqypg;
  }(),
      eua4$r = function (gqsh) {
    function dhys5p() {
      dhys5p['__super']['call'](this);;
    }return a45$dh(dhys5p, 'laya.wx.mini.MiniFileMgr', gqsh), dhys5p['isLoadFile'] = function (syda5h) {
      return dhys5p['_fileTypeArr']['indexOf'](syda5h) != -0x1 ? !![] : ![];
    }, dhys5p['getFileInfo'] = function (c0_9i) {
      var qypjsg = c0_9i['split']('?')[0x0],
          j8gb1q = dhys5p['filesListObj'][qypjsg];if (j8gb1q == null) return null;else return j8gb1q;return null;
    }, dhys5p['onFileUpdate'] = function (iw0x_c, cxmi) {
      var dys5hp = iw0x_c['split']('/'),
          sd5h = dys5hp[dys5hp['length'] - 0x1],
          vrkoz = dhys5p['getFileInfo'](cxmi);if (vrkoz == null) dhys5p['onSaveFile'](cxmi, sd5h);else {
        if (vrkoz['readyUrl'] != cxmi) dhys5p['remove'](sd5h, cxmi);
      }
    }, dhys5p['exits'] = function (yjpsq, q18gp) {
      var c0_mix = dhys5p['getFileNativePath'](yjpsq);dhys5p['fs']['getFileInfo']({ 'filePath': c0_mix, 'success': function (g18pj) {
          q18gp != null && q18gp['runWith']([0x0, g18pj]);
        }, 'fail': function (j18qgb) {
          q18gp != null && q18gp['runWith']([0x1, j18qgb]);
        } });
    }, dhys5p['read'] = function (rkoz3, okv3z9, ero3uv, im2_n) {
      okv3z9 === void 0x0 && (okv3z9 = 'ascill'), im2_n === void 0x0 && (im2_n = '');var _xwi0c;im2_n != '' ? _xwi0c = dhys5p['getFileNativePath'](rkoz3) : _xwi0c = rkoz3, dhys5p['fs']['readFile']({ 'filePath': _xwi0c, 'encoding': okv3z9, 'success': function (gqphy) {
          ero3uv != null && ero3uv['runWith']([0x0, gqphy]);
        }, 'fail': function (pgyjqs) {
          if (pgyjqs && im2_n != '') dhys5p['down'](im2_n, okv3z9, ero3uv, im2_n);else ero3uv != null && ero3uv['runWith']([0x1]);
        } });
    }, dhys5p['readNativeFile'] = function (hp5ds, _0xc) {
      dhys5p['fs']['readFile']({ 'filePath': hp5ds, 'encoding': '', 'success': function (j81gp) {
          _0xc != null && _0xc['runWith']([0x0]);
        }, 'fail': function (yda5s) {
          _0xc != null && _0xc['runWith']([0x1]);
        } });
    }, dhys5p['down'] = function (ghp, bqg81j, pygjq, gb68j1) {
      bqg81j === void 0x0 && (bqg81j = 'ascill'), gb68j1 === void 0x0 && (gb68j1 = '');var ys5dph = dhys5p['getFileNativePath'](gb68j1),
          eu4or = dhys5p['wxdown']({ 'url': ghp, 'filePath': ys5dph, 'success': function (b81gjq) {
          if (b81gjq['statusCode'] === 0xc8) dhys5p['readFile'](b81gjq['filePath'], bqg81j, pygjq, gb68j1);
        }, 'fail': function (q81gbj) {
          pygjq != null && pygjq['runWith']([0x1, q81gbj]);
        } });eu4or['onProgressUpdate'](function (i_w0c9) {
        pygjq != null && pygjq['runWith']([0x2, i_w0c9['progress']]);
      });
    }, dhys5p['readFile'] = function (nx72tm, _mx0ic, zvrk, y5qp) {
      _mx0ic === void 0x0 && (_mx0ic = 'ascill'), y5qp === void 0x0 && (y5qp = ''), dhys5p['fs']['readFile']({ 'filePath': nx72tm, 'encoding': _mx0ic, 'success': function (i2m_x) {
          if (nx72tm['indexOf']('http://') != -0x1 || nx72tm['indexOf']('https://') != -0x1) dhys5p['onFileUpdate'](nx72tm, y5qp);zvrk != null && zvrk['runWith']([0x0, i2m_x]);
        }, 'fail': function (zkvro3) {
          if (zkvro3) zvrk != null && zvrk['runWith']([0x1, zkvro3]);
        } });
    }, dhys5p['downImg'] = function (xtn27, gspyjq, f8b16l) {
      f8b16l === void 0x0 && (f8b16l = '');var _cw9k0 = dhys5p['wxdown']({ 'url': xtn27, 'success': function (w9kc_) {
          w9kc_['statusCode'] === 0xc8 && dhys5p['copyFile'](w9kc_['tempFilePath'], f8b16l, gspyjq);
        }, 'fail': function ($4edua) {
          gspyjq != null && gspyjq['runWith']([0x1, $4edua]);
        } });
    }, dhys5p['copyFile'] = function (lb18f6, gq1pj, zour3) {
      var yasdh = lb18f6['split']('/'),
          x2im_n = yasdh[yasdh['length'] - 0x1],
          qpygh = gq1pj['split']('?')[0x0],
          bqj1g = dhys5p['getFileInfo'](gq1pj),
          _kw90c = dhys5p['getFileNativePath'](x2im_n);dhys5p['fs']['copyFile']({ 'srcPath': lb18f6, 'destPath': _kw90c, 'success': function (aedu$) {
          if (!bqj1g) dhys5p['onSaveFile'](gq1pj, x2im_n), zour3 != null && zour3['runWith']([0x0]);else {
            if (bqj1g['readyUrl'] != gq1pj) dhys5p['remove'](x2im_n, gq1pj, zour3);
          }
        }, 'fail': function (j18bgq) {
          zour3 != null && zour3['runWith']([0x1, j18bgq]);
        } });
    }, dhys5p['getFileNativePath'] = function (a4du) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + a4du;
    }, dhys5p['remove'] = function (w90_i, psyhq, xc_w0i) {
      psyhq === void 0x0 && (psyhq = '');var hs5qyp = dhys5p['getFileInfo'](psyhq),
          jbg86 = dhys5p['getFileNativePath'](hs5qyp['md5']);vk9o3['loader']['clearRes'](hs5qyp['readyUrl']), dhys5p['fs']['unlink']({ 'filePath': jbg86, 'success': function (g6b) {
          if (psyhq != '') dhys5p['onSaveFile'](psyhq, w90_i);xc_w0i != null && xc_w0i['runWith']([0x0]);
        }, 'fail': function (wovz) {} });
    }, dhys5p['onSaveFile'] = function (k09vw, rvuoz3) {
      var zov39 = k09vw['split']('?')[0x0];dhys5p['filesListObj'][zov39] = { 'md5': rvuoz3, 'readyUrl': k09vw }, dhys5p['fs']['writeFile']({ 'filePath': dhys5p['fileNativeDir'] + '/' + dhys5p['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](dhys5p['filesListObj']), 'success': function (z09vwk) {
          console['log']('写入测试测试成功：', z09vwk);
        }, 'fail': function (ko3zrv) {
          console['log']('写入测试测试失败：', ko3zrv);
        } });
    }, dhys5p['existDir'] = function (ov3uz, cmi2_) {
      dhys5p['fs']['mkdir']({ 'dirPath': ov3uz, 'success': function (du$ae4) {
          cmi2_ != null && cmi2_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (u$ed4a) {
          if (u$ed4a['errMsg']['indexOf']('file already exists') != -0x1) dhys5p['readSync'](dhys5p['fileListName'], 'utf8', cmi2_);else cmi2_ != null && cmi2_['runWith']([0x1, u$ed4a]);
        } });
    }, dhys5p['readSync'] = function (_2imx, ud4e$, h$5yd, i9_cw0) {
      ud4e$ === void 0x0 && (ud4e$ = 'ascill'), i9_cw0 === void 0x0 && (i9_cw0 = '');var czk9 = dhys5p['getFileNativePath'](_2imx),
          syph;try {
        syph = dhys5p['fs']['readFileSync'](czk9), h$5yd != null && h$5yd['runWith']([0x0, { 'data': syph }]);
      } catch (a5shd) {
        h$5yd != null && h$5yd['runWith']([0x1]);
      }
    }, dhys5p['readCache'] = function () {}, dhys5p['writeCache'] = function (krzv3o) {
      var vzr3ko = readyUrl['split']('?')[0x0];dhys5p['filesListObj'][vzr3ko] = { 'md5': md5Name, 'readyUrl': readyUrl }, dhys5p['fs']['writeFile']({ 'filePath': dhys5p['fileNativeDir'] + '/' + dhys5p['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](dhys5p['filesListObj']), 'success': function (sjyq) {}, 'fail': function (ae4du) {} });
    }, dhys5p['setNativeFileDir'] = function (b6g1j) {
      dhys5p['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + b6g1j;
    }, dhys5p['filesListObj'] = {}, dhys5p['fileNativeDir'] = null, dhys5p['fileListName'] = 'layaairfiles.txt', dhys5p['ziyuFileData'] = {}, u34(dhys5p, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), dhys5p;
  }(i9cw_0),
      g1jb8 = function (y5sphq) {
    function vr3ueo() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], vr3ueo['__super']['call'](this), this['_sound'] = vr3ueo['_createSound']();
    }a45$dh(vr3ueo, 'laya.wx.mini.MiniSound', y5sphq);var kvw90 = vr3ueo['prototype'];return kvw90['load'] = function (g1bjq) {
      var g1b8j6 = this;g1bjq = ozuv['formatURL'](g1bjq), this['url'] = g1bjq;if (vr3ueo['_audioCache'][g1bjq]) {
        this['event']('complete');return;
      }function j1pgqs() {
        if (vr3ueo['_null'] != undefined) g1b8j6['_sound']['onCanplay'](vr3ueo['_null']), g1b8j6['_sound']['onError'](vr3ueo['_null']);else try {
          g1b8j6['_sound']['onCanplay'](null), g1b8j6['_sound']['onError'](null), vr3ueo['_null'] = null;
        } catch (gjp1qs) {
          console['warn']('[wxmini] _clearSound:' + gjp1qs), g1b8j6['_sound']['onCanplay'](vwo9), g1b8j6['_sound']['onError'](vwo9), vr3ueo['_null'] = vwo9;
        }
      }function ci_x() {
        j1pgqs(), bg1jq8['loaded'] = !![], bg1jq8['event']('complete'), vr3ueo['_audioCache'][bg1jq8['url']] = bg1jq8;
      }function x_n2m(okzwv9) {
        console['error']('errCode=' + okzwv9['errCode'] + '  errMsg=' + okzwv9['errMsg']), j1pgqs(), bg1jq8['event']('error');
      }function vwo9() {}this['_sound']['onCanplay'](ci_x), this['_sound']['onError'](x_n2m), this['_sound']['src'] = g1bjq;var bg1jq8 = this;
    }, kvw90['play'] = function (zwkc9, ypsgjq) {
      zwkc9 === void 0x0 && (zwkc9 = 0x0), ypsgjq === void 0x0 && (ypsgjq = 0x0);var psq1gj;if (this['url'] == b86f1l['_tMusic']) {
        if (!vr3ueo['_musicAudio']) vr3ueo['_musicAudio'] = vr3ueo['_createSound']();psq1gj = vr3ueo['_musicAudio'];
      } else psq1gj = vr3ueo['_createSound']();psq1gj['src'] = this['url'];var qs1jg = new qgjps(psq1gj);return qs1jg['url'] = this['url'], qs1jg['loops'] = ypsgjq, qs1jg['startTime'] = zwkc9, qs1jg['play'](), b86f1l['addChannel'](qs1jg), qs1jg;
    }, kvw90['dispose'] = function () {
      var wczk = vr3ueo['_audioCache'][this['url']];wczk && (wczk['src'] = '', delete vr3ueo['_audioCache'][this['url']]);
    }, l8bj1(0x0, kvw90, 'duration', function () {
      return this['_sound']['duration'];
    }), vr3ueo['_createSound'] = function () {
      return vr3ueo['_id']++, adh$45['window']['wx']['createInnerAudioContext']();
    }, vr3ueo['_musicAudio'] = null, vr3ueo['_id'] = 0x0, vr3ueo['_audioCache'] = {}, vr3ueo['_null'] = undefined, vr3ueo;
  }(i9cw_0),
      qgjps = function (phqy5s) {
    function kzw90c(dah5$) {
      this['_audio'] = null, this['_onEnd'] = null, kzw90c['__super']['call'](this), this['_audio'] = dah5$, this['_onEnd'] = c9iw_0['bind'](this['__onEnd'], this), dah5$['onEnded'](this['_onEnd']);
    }a45$dh(kzw90c, 'laya.wx.mini.MiniSoundChannel', phqy5s);var v3koz = kzw90c['prototype'];return v3koz['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (vk9o3['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, v3koz['__onNull'] = function () {}, v3koz['play'] = function () {
      this['isStopped'] = ![], b86f1l['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, v3koz['stop'] = function () {
      this['isStopped'] = !![], b86f1l['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (kzw90c['_null'] != undefined) this['_audio']['onEnded'](kzw90c['_null']);else try {
        this['_audio']['onEnded'](null), kzw90c['_null'] = null;
      } catch (n27t) {
        console['warn']('[wxmini] stop:' + n27t), this['_audio']['onEnded'](c9iw_0['bind'](this['__onNull'], this)), kzw90c['_null'] = c9iw_0['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, v3koz['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, v3koz['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], b86f1l['addChannel'](this), this['_audio']['play']();
    }, l8bj1(0x0, v3koz, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), l8bj1(0x0, v3koz, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), l8bj1(0x0, v3koz, 'volume', function () {
      return 0x1;
    }, function (p8) {}), kzw90c['_null'] = undefined, kzw90c;
  }(c_w0k);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var j81l6 in Laya) {
    var sa5dy = Laya[j81l6];sa5dy && sa5dy['__isclass'] && (exports[j81l6] = sa5dy);
  }
});