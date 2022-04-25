var v = wx.$d;
(function (window, document, gktuif) {
  var vp$w7y = gktuif['un'],
      iuetdm = gktuif['uns'],
      q0gft = gktuif['static'],
      oc3925 = gktuif['class'],
      _5o39c = gktuif['getset'],
      kgq0fz = gktuif['__newvec'],
      $vp7ly = laya['utils']['Browser'],
      gftiku = laya['events']['Event'],
      mj46hn = laya['events']['EventDispatcher'],
      djem6 = laya['resource']['HTMLImage'],
      y7$ = laya['utils']['Handler'],
      kdtifu = laya['display']['Input'],
      zakq = laya['net']['Loader'],
      a0zgqb = laya['maths']['Matrix'],
      a8r1x = laya['renders']['Render'],
      ehjmn6 = laya['utils']['RunDriver'],
      iutmed = laya['media']['Sound'],
      fgku = laya['media']['SoundChannel'],
      rw$pv7 = laya['media']['SoundManager'],
      e6dhi = laya['display']['Stage'],
      zk0fg = laya['net']['URL'],
      r$81 = laya['utils']['Utils'],
      mhedi = function () {
    function x8rbw1() {}return oc3925(x8rbw1, 'laya.wx.mini.MiniAdpter'), x8rbw1['getJson'] = function (r18x) {
      return JSON['parse'](r18x);
    }, x8rbw1['init'] = function (ply$v, p$wyv7) {
      ply$v === void 0x0 && (ply$v = ![]), p$wyv7 === void 0x0 && (p$wyv7 = ![]);if (x8rbw1['_inited']) return;x8rbw1['window'] = window;if (x8rbw1['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;x8rbw1['_inited'] = !![], x8rbw1['isZiYu'] = p$wyv7, x8rbw1['isPosMsgYu'] = ply$v, x8rbw1['EnvConfig'] = {}, !x8rbw1['isZiYu'] && (ar8bx1['setNativeFileDir']('/layaairGame'), ar8bx1['existDir'](ar8bx1['fileNativeDir'], y7$['create'](x8rbw1, x8rbw1['onMkdirCallBack']))), x8rbw1['window']['focus'] = function () {}, gktuif['getUrlPath'] = function () {}, x8rbw1['window']['logtime'] = function (bxaz0) {}, x8rbw1['window']['alertTimeLog'] = function (c95o2) {}, x8rbw1['window']['resetShareInfo'] = function () {}, x8rbw1['window']['CanvasRenderingContext2D'] = function () {}, x8rbw1['window']['CanvasRenderingContext2D']['prototype'] = x8rbw1['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], x8rbw1['window']['document']['body']['appendChild'] = function () {}, x8rbw1['EnvConfig']['pixelRatioInt'] = 0x0, ehjmn6['getPixelRatio'] = x8rbw1['pixelRatio'], x8rbw1['_preCreateElement'] = $vp7ly['createElement'], $vp7ly['createElement'] = x8rbw1['createElement'], ehjmn6['createShaderCondition'] = x8rbw1['createShaderCondition'], r$81['parseXMLFromString'] = x8rbw1['parseXMLFromString'], kdtifu['_createInputElement'] = h_6nj4['_createInputElement'], x8rbw1['EnvConfig']['load'] = zakq['prototype']['load'], zakq['prototype']['load'] = xq0a['prototype']['load'], x8rbw1['isZiYu'] && ply$v && wx['onMessage'](function (gzaq) {
        gzaq['isLoad'] && (ar8bx1['ziyuFileData'][gzaq['url']] = gzaq['data']);
      });
    }, x8rbw1['onMkdirCallBack'] = function (qbzx0, wr18$) {
      if (!qbzx0) ar8bx1['filesListObj'] = JSON['parse'](wr18$['data']);
    }, x8rbw1['pixelRatio'] = function () {
      if (!x8rbw1['EnvConfig']['pixelRatioInt']) try {
        var o94c = wx['getSystemInfoSync']();return x8rbw1['EnvConfig']['pixelRatioInt'] = o94c['pixelRatio'], o94c = o94c, o94c['pixelRatio'];
      } catch (dfukt) {}return x8rbw1['EnvConfig']['pixelRatioInt'];
    }, x8rbw1['createElement'] = function (y7$lpv) {
      if (y7$lpv == 'canvas') {
        var udefti;return x8rbw1['idx'] == 0x1 ? x8rbw1['isZiYu'] ? (udefti = sharedCanvas, udefti['style'] = {}) : udefti = window['canvas'] : udefti = window['wx']['createCanvas'](), x8rbw1['idx']++, udefti;
      } else {
        if (y7$lpv == 'textarea' || y7$lpv == 'input') return x8rbw1['onCreateInput'](y7$lpv);else {
          if (y7$lpv == 'div') {
            var hj6emd = x8rbw1['_preCreateElement'](y7$lpv);return hj6emd['contains'] = function (gqfu) {
              return null;
            }, hj6emd['removeChild'] = function ($7yvlp) {}, hj6emd;
          } else return x8rbw1['_preCreateElement'](y7$lpv);
        }
      }
    }, x8rbw1['onCreateInput'] = function (dteuim) {
      var c9o3_5 = x8rbw1['_preCreateElement'](dteuim);return c9o3_5['focus'] = h_6nj4['wxinputFocus'], c9o3_5['blur'] = h_6nj4['wxinputblur'], c9o3_5['style'] = {}, c9o3_5['value'] = 0x0, c9o3_5['parentElement'] = {}, c9o3_5['placeholder'] = {}, c9o3_5['type'] = {}, c9o3_5['setColor'] = function (ehi6md) {}, c9o3_5['setType'] = function (gfkui) {}, c9o3_5['setFontFace'] = function (qugft) {}, c9o3_5['addEventListener'] = function (o3c95) {}, c9o3_5['contains'] = function (nj6h_4) {
        return null;
      }, c9o3_5['removeChild'] = function (x1a8r) {}, c9o3_5;
    }, x8rbw1['createShaderCondition'] = function (gikfu) {
      var x1r$w8 = this,
          tkgifu = function () {
        var utie = gikfu;return x1r$w8[gikfu['replace']('this.', '')];
      };return tkgifu;
    }, x8rbw1['EnvConfig'] = null, x8rbw1['window'] = null, x8rbw1['_preCreateElement'] = null, x8rbw1['_inited'] = ![], x8rbw1['wxRequest'] = null, x8rbw1['systemInfo'] = null, x8rbw1['version'] = '0.0.1', x8rbw1['isZiYu'] = ![], x8rbw1['isPosMsgYu'] = ![], x8rbw1['parseXMLFromString'] = function (vw1$p) {
      var z8bxa0, gfq0t;vw1$p = vw1$p['replace'](/>\s+</g, '><');try {
        z8bxa0 = new window['Parser']['DOMParser']()['parseFromString'](vw1$p, 'text/xml');
      } catch (zkgq0f) {
        throw '需要引入xml解析库文件';
      }return z8bxa0;
    }, x8rbw1['idx'] = 0x1, x8rbw1;
  }(),
      zfqgk0 = function () {
    function zba0xq() {}oc3925(zba0xq, 'laya.wx.mini.MiniImage');var njhe = zba0xq['prototype'];return njhe['_loadImage'] = function (tied) {
      var _359co = this,
          xa8br = ![];tied['indexOf']('layaNativeDir/') == -0x1 && (xa8br = !![], tied = zk0fg['formatURL'](tied));if (!ar8bx1['getFileInfo'](tied)) {
        if (tied['indexOf']('http://') != -0x1 || tied['indexOf']('https://') != -0x1) ar8bx1['downImg'](tied, new y7$(zba0xq, zba0xq['onDownImgCallBack'], [tied, _359co]), tied);else zba0xq['onCreateImage'](tied, _359co, !![]);
      } else zba0xq['onCreateImage'](tied, _359co, !xa8br);
    }, zba0xq['onDownImgCallBack'] = function (diftk, kqzg0a, r1$wp8) {
      if (!r1$wp8) zba0xq['onCreateImage'](diftk, kqzg0a);else kqzg0a['onError'](null);
    }, zba0xq['onCreateImage'] = function (rx$, $pvrw, gb0qza) {
      gb0qza === void 0x0 && (gb0qza = ![]);var r$8xw1;if (!gb0qza) {
        var tiufgk = ar8bx1['getFileInfo'](rx$),
            zxba0q = tiufgk['md5'];r$8xw1 = ar8bx1['getFileNativePath'](zxba0q);
      } else r$8xw1 = rx$;if ($pvrw['imgCache'] == null) $pvrw['imgCache'] = {};var qzb0ga;function h_n64j() {
        qzb0ga['onload'] = null, qzb0ga['onerror'] = null, delete $pvrw['imgCache'][rx$];
      };var ud6e = function () {
        h_n64j(), $pvrw['onLoaded'](qzb0ga);
      },
          qfzk0g = function () {
        h_n64j(), $pvrw['event']('error', 'Load image failed');
      };$pvrw['_type'] == 'nativeimage' ? (qzb0ga = new $vp7ly['window']['Image'](), qzb0ga['crossOrigin'] = '', qzb0ga['onload'] = ud6e, qzb0ga['onerror'] = qfzk0g, qzb0ga['src'] = r$8xw1, $pvrw['imgCache'][rx$] = qzb0ga) : new djem6['create'](r$8xw1, { 'onload': ud6e, 'onerror': qfzk0g, 'onCreate': function (iufkgt) {
          qzb0ga = iufkgt, $pvrw['imgCache'][rx$] = iufkgt;
        } });
    }, zba0xq;
  }(),
      h_6nj4 = function () {
    function dtiufe() {}return oc3925(dtiufe, 'laya.wx.mini.MiniInput'), dtiufe['_createInputElement'] = function () {
      kdtifu['_initInput'](kdtifu['area'] = $vp7ly['createElement']('textarea')), kdtifu['_initInput'](kdtifu['input'] = $vp7ly['createElement']('input')), kdtifu['inputContainer'] = $vp7ly['createElement']('div'), kdtifu['inputContainer']['style']['position'] = 'absolute', kdtifu['inputContainer']['style']['zIndex'] = 0x186a0, $vp7ly['container']['appendChild'](kdtifu['inputContainer']), kdtifu['inputContainer']['setPos'] = function (f0kgz, $wyv7) {
        kdtifu['inputContainer']['style']['left'] = f0kgz + 'px', kdtifu['inputContainer']['style']['top'] = $wyv7 + 'px';
      }, gktuif['stage']['on']('resize', null, dtiufe['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (p18w$) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), rw$pv7['_soundClass'] = futq, rw$pv7['_musicClass'] = futq, window['_videoClass'] = ypw$v;
    }, dtiufe['_onStageResize'] = function () {
      var o53c_ = gktuif['stage']['_canvasTransform']['identity']();o53c_['scale']($vp7ly['width'] / a8r1x['canvas']['width'] / ehjmn6['getPixelRatio'](), $vp7ly['height'] / a8r1x['canvas']['height'] / ehjmn6['getPixelRatio']());
    }, dtiufe['wxinputFocus'] = function (xq0z) {
      var x8z1 = kdtifu['inputElement']['target'];if (x8z1 && !x8z1['editable']) return;mhedi['window']['wx']['offKeyboardConfirm'](), mhedi['window']['wx']['offKeyboardInput'](), mhedi['window']['wx']['showKeyboard']({ 'defaultValue': x8z1['text'], 'maxLength': x8z1['maxChars'], 'multiple': x8z1['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (xaq0b) {}, 'fail': function (deufti) {} }), mhedi['window']['wx']['onKeyboardConfirm'](function (wrp1v$) {
        var n_394j = wrp1v$ ? wrp1v$['value'] : '';x8z1['text'] = n_394j, x8z1['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), mhedi['window']['wx']['onKeyboardInput'](function (qb0az) {
        var wbr = qb0az ? qb0az['value'] : '';if (!x8z1['multiline']) {
          if (wbr['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }x8z1['text'] = wbr, x8z1['event']('input');
      });
    }, dtiufe['inputEnter'] = function () {
      kdtifu['inputElement']['target']['focus'] = ![];
    }, dtiufe['wxinputblur'] = function () {
      dtiufe['hideKeyboard']();
    }, dtiufe['hideKeyboard'] = function () {
      mhedi['window']['wx']['offKeyboardConfirm'](), mhedi['window']['wx']['offKeyboardInput'](), mhedi['window']['wx']['hideKeyboard']({ 'success': function (kugqtf) {
          console['log']('隐藏键盘');
        }, 'fail': function (iktg) {
          console['log']('隐藏键盘出错:' + (iktg ? iktg['errMsg'] : ''));
        } });
    }, dtiufe;
  }(),
      xq0a = function () {
    function kugi() {}oc3925(kugi, 'laya.wx.mini.MiniLoader');var fdu = kugi['prototype'];return fdu['load'] = function ($18xrw, mhen6, w1$p8r, v7l$py, n4_j3) {
      w1$p8r === void 0x0 && (w1$p8r = !![]), n4_j3 === void 0x0 && (n4_j3 = ![]);var mhen6j = this;mhen6j['_url'] = $18xrw;if ($18xrw['indexOf']('data:image') === 0x0) mhen6j['_type'] = mhen6 = 'image';else mhen6j['_type'] = mhen6 || (mhen6 = mhen6j['getTypeFromUrl']($18xrw));mhen6j['_cache'] = w1$p8r, mhen6j['_data'] = null;var tuikdf = 'ascii';if ($18xrw['indexOf']('.fnt') != -0x1) tuikdf = 'utf8';else mhen6 == 'arraybuffer' && (tuikdf = '');;var rpw81 = r$81['getFileExtension']($18xrw);if (kugi['_fileTypeArr']['indexOf'](rpw81) != -0x1) mhedi['EnvConfig']['load']['call'](this, $18xrw, mhen6, w1$p8r, v7l$py, n4_j3);else {
        if (!ar8bx1['getFileInfo']($18xrw)) {
          if ($18xrw['indexOf']('layaNativeDir/') != -0x1) {
            if (mhedi['isZiYu']) {
              var dm6hie = ar8bx1['ziyuFileData'][$18xrw];mhen6j['onLoaded'](dm6hie);return;
            } else {
              cosnole['log']('read read'), ar8bx1['read']($18xrw, tuikdf, new y7$(kugi, kugi['onReadNativeCallBack'], [tuikdf, $18xrw, mhen6, w1$p8r, v7l$py, n4_j3, mhen6j]));return;
            }
          }if (zk0fg['rootPath'] == '') var tmid = $18xrw;else tmid = $18xrw['split'](zk0fg['rootPath'])[0x0];$18xrw['indexOf']('http://') != -0x1 || $18xrw['indexOf']('https://') != -0x1 ? mhedi['EnvConfig']['load']['call'](mhen6j, $18xrw, mhen6, w1$p8r, v7l$py, n4_j3) : ar8bx1['readFile'](tmid, tuikdf, new y7$(kugi, kugi['onReadNativeCallBack'], [tuikdf, $18xrw, mhen6, w1$p8r, v7l$py, n4_j3, mhen6j]), $18xrw);
        } else mhedi['EnvConfig']['load']['call'](this, $18xrw, mhen6, w1$p8r, v7l$py, n4_j3);
      }
    }, fdu['resMgrLoad'] = function (vrp7w$, hjdm6, hj_n4, tdfiuk, wr$7, d6mu, detmi) {
      hj_n4 === void 0x0 && (hj_n4 = 0x0), tdfiuk === void 0x0 && (tdfiuk = ![]), wr$7 === void 0x0 && (wr$7 = ![]), d6mu === void 0x0 && (d6mu = 0x0), detmi === void 0x0 && (detmi = 0x3), vrp7w$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', vrp7w$), mhedi['EnvConfig']['resMgrLoad'](vrp7w$, (oc_4, z1axb8, _n4h6) => {
        kugi['prototype']['resMgrLoadCallBack'](oc_4, z1axb8, _n4h6, hjdm6);
      }, hj_n4, tdfiuk, wr$7, d6mu, detmi);
    }, fdu['resMgrLoadCallBack'] = function (ktquf, gzq, ukgitf, euitd) {
      console['log']('buff:::', ktquf, ukgitf, ar8bx1['fileNativeDir'] + '///' + ar8bx1['fileListName']), euitd(ktquf, gzq, ukgitf);
    }, fdu['clearRes'] = function (rwp1$8, gfk0zq) {
      gfk0zq === void 0x0 && (gfk0zq = ![]);var hnj4 = this;hnj4['clearRes'](rwp1$8, gfk0zq);var a0xq = ar8bx1['getFileInfo'](rwp1$8);if (a0xq && (rwp1$8['indexOf']('http://') != -0x1 || rwp1$8['indexOf']('https://') != -0x1)) {
        var dmut = a0xq['md5'],
            etuf = ar8bx1['getFileNativePath'](dmut);ar8bx1['remove'](etuf);
      }
    }, kugi['onReadNativeCallBack'] = function (tudmie, ftkq, r1w$, $w7vyp, j_n46h, mdiu6e, fqgk0z, wb8r, dukit) {
      $w7vyp === void 0x0 && ($w7vyp = !![]), mdiu6e === void 0x0 && (mdiu6e = ![]), wb8r === void 0x0 && (wb8r = 0x0);if (!wb8r) {
        var _c953;if (r1w$ == 'json' || r1w$ == 'atlas') _c953 = mhedi['getJson'](dukit['data']);else r1w$ == 'xml' ? _c953 = r$81['parseXMLFromString'](dukit['data']) : _c953 = dukit['data'];fqgk0z['onLoaded'](_c953), !mhedi['isZiYu'] && mhedi['isPosMsgYu'] && r1w$ != 'arraybuffer' && wx['postMessage']({ 'url': ftkq, 'data': _c953, 'isLoad': !![] });
      } else wb8r == 0x1 && mhedi['EnvConfig']['load']['call'](fqgk0z, ftkq, r1w$, $w7vyp, j_n46h, mdiu6e);
    }, q0gft(kugi, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), kugi;
  }(),
      ar8bx1 = function (c93o_) {
    function w1rx$() {
      w1rx$['__super']['call'](this);;
    }return oc3925(w1rx$, 'laya.wx.mini.MiniFileMgr', c93o_), w1rx$['isLoadFile'] = function (qz0b) {
      return w1rx$['_fileTypeArr']['indexOf'](qz0b) != -0x1 ? !![] : ![];
    }, w1rx$['getFileInfo'] = function (fkg0) {
      var gqzba = fkg0['split']('?')[0x0],
          dih6em = w1rx$['filesListObj'][gqzba];if (dih6em == null) return null;else return dih6em;return null;
    }, w1rx$['onFileUpdate'] = function (eh6jn, kzgq) {
      var dfitk = eh6jn['split']('/'),
          az18x = dfitk[dfitk['length'] - 0x1],
          mehi6d = w1rx$['getFileInfo'](kzgq);if (mehi6d == null) w1rx$['onSaveFile'](kzgq, az18x);else {
        if (mehi6d['readyUrl'] != kzgq) w1rx$['remove'](az18x, kzgq);
      }
    }, w1rx$['exits'] = function (ugftqk, ude6mi) {
      var jm64 = w1rx$['getFileNativePath'](ugftqk);w1rx$['fs']['getFileInfo']({ 'filePath': jm64, 'success': function (mj6he) {
          ude6mi != null && ude6mi['runWith']([0x0, mj6he]);
        }, 'fail': function (imude) {
          ude6mi != null && ude6mi['runWith']([0x1, imude]);
        } });
    }, w1rx$['read'] = function (xz0a, bzgaq, hime6d, iudmet) {
      bzgaq === void 0x0 && (bzgaq = 'ascill'), iudmet === void 0x0 && (iudmet = '');var fkiutg;iudmet != '' ? fkiutg = w1rx$['getFileNativePath'](xz0a) : fkiutg = xz0a, w1rx$['fs']['readFile']({ 'filePath': fkiutg, 'encoding': bzgaq, 'success': function (fkzq) {
          hime6d != null && hime6d['runWith']([0x0, fkzq]);
        }, 'fail': function (qzx0) {
          if (qzx0 && iudmet != '') w1rx$['down'](iudmet, bzgaq, hime6d, iudmet);else hime6d != null && hime6d['runWith']([0x1]);
        } });
    }, w1rx$['readNativeFile'] = function (w8b1x, p8r1w$) {
      w1rx$['fs']['readFile']({ 'filePath': w8b1x, 'encoding': '', 'success': function (q0kzg) {
          p8r1w$ != null && p8r1w$['runWith']([0x0]);
        }, 'fail': function (gqbz) {
          p8r1w$ != null && p8r1w$['runWith']([0x1]);
        } });
    }, w1rx$['down'] = function (bg0aqz, mhn4j, fqkgz, udeti) {
      mhn4j === void 0x0 && (mhn4j = 'ascill'), udeti === void 0x0 && (udeti = '');var w8b1rx = w1rx$['getFileNativePath'](udeti),
          mh64n = w1rx$['wxdown']({ 'url': bg0aqz, 'filePath': w8b1rx, 'success': function (hj46_n) {
          if (hj46_n['statusCode'] === 0xc8) w1rx$['readFile'](hj46_n['filePath'], mhn4j, fqkgz, udeti);
        }, 'fail': function ($rpvw7) {
          fqkgz != null && fqkgz['runWith']([0x1, $rpvw7]);
        } });mh64n['onProgressUpdate'](function (_3n4j) {
        fqkgz != null && fqkgz['runWith']([0x2, _3n4j['progress']]);
      });
    }, w1rx$['readFile'] = function (_9hnj4, uiemd6, nmj, wr1$x8) {
      uiemd6 === void 0x0 && (uiemd6 = 'ascill'), wr1$x8 === void 0x0 && (wr1$x8 = ''), w1rx$['fs']['readFile']({ 'filePath': _9hnj4, 'encoding': uiemd6, 'success': function (rxb81a) {
          if (_9hnj4['indexOf']('http://') != -0x1 || _9hnj4['indexOf']('https://') != -0x1) w1rx$['onFileUpdate'](_9hnj4, wr1$x8);nmj != null && nmj['runWith']([0x0, rxb81a]);
        }, 'fail': function (q0tgk) {
          if (q0tgk) nmj != null && nmj['runWith']([0x1, q0tgk]);
        } });
    }, w1rx$['downImg'] = function (nhmj4, p1$8w, b1xrw8) {
      b1xrw8 === void 0x0 && (b1xrw8 = '');var g0fqtk = w1rx$['wxdown']({ 'url': nhmj4, 'success': function (gkf0qz) {
          gkf0qz['statusCode'] === 0xc8 && w1rx$['copyFile'](gkf0qz['tempFilePath'], b1xrw8, p1$8w);
        }, 'fail': function (j6de) {
          p1$8w != null && p1$8w['runWith']([0x1, j6de]);
        } });
    }, w1rx$['copyFile'] = function (em6nj, $x1w8, j6hemd) {
      var fid = em6nj['split']('/'),
          b0ga = fid[fid['length'] - 0x1],
          _j6h4 = $x1w8['split']('?')[0x0],
          a1xbr = w1rx$['getFileInfo']($x1w8),
          zx0qa = w1rx$['getFileNativePath'](b0ga);w1rx$['fs']['copyFile']({ 'srcPath': em6nj, 'destPath': zx0qa, 'success': function (qgz0k) {
          if (!a1xbr) w1rx$['onSaveFile']($x1w8, b0ga), j6hemd != null && j6hemd['runWith']([0x0]);else {
            if (a1xbr['readyUrl'] != $x1w8) w1rx$['remove'](b0ga, $x1w8, j6hemd);
          }
        }, 'fail': function (b1xrw) {
          j6hemd != null && j6hemd['runWith']([0x1, b1xrw]);
        } });
    }, w1rx$['getFileNativePath'] = function (j9h_4) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + j9h_4;
    }, w1rx$['remove'] = function (nmj46h, gqz0, q0bzg) {
      gqz0 === void 0x0 && (gqz0 = '');var p7$wv = w1rx$['getFileInfo'](gqz0),
          axzb0 = w1rx$['getFileNativePath'](p7$wv['md5']);gktuif['loader']['clearRes'](p7$wv['readyUrl']), w1rx$['fs']['unlink']({ 'filePath': axzb0, 'success': function (e6jdmh) {
          if (gqz0 != '') w1rx$['onSaveFile'](gqz0, nmj46h);q0bzg != null && q0bzg['runWith']([0x0]);
        }, 'fail': function (rwp8) {} });
    }, w1rx$['onSaveFile'] = function (fkguqt, pr7v$w) {
      var aqzb0x = fkguqt['split']('?')[0x0];w1rx$['filesListObj'][aqzb0x] = { 'md5': pr7v$w, 'readyUrl': fkguqt }, w1rx$['fs']['writeFile']({ 'filePath': w1rx$['fileNativeDir'] + '/' + w1rx$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](w1rx$['filesListObj']), 'success': function (hn6mej) {
          console['log']('写入测试测试成功：', hn6mej);
        }, 'fail': function (r7wpv) {
          console['log']('写入测试测试失败：', r7wpv);
        } });
    }, w1rx$['existDir'] = function (jnh94_, eutf) {
      w1rx$['fs']['mkdir']({ 'dirPath': jnh94_, 'success': function (rx1$) {
          eutf != null && eutf['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (gq) {
          if (gq['errMsg']['indexOf']('file already exists') != -0x1) w1rx$['readSync'](w1rx$['fileListName'], 'utf8', eutf);else eutf != null && eutf['runWith']([0x1, gq]);
        } });
    }, w1rx$['readSync'] = function (e6jhn, gkf, uitfe, zqkg0f) {
      gkf === void 0x0 && (gkf = 'ascill'), zqkg0f === void 0x0 && (zqkg0f = '');var qtkufg = w1rx$['getFileNativePath'](e6jhn),
          rwv$;try {
        rwv$ = w1rx$['fs']['readFileSync'](qtkufg), uitfe != null && uitfe['runWith']([0x0, { 'data': rwv$ }]);
      } catch (hd6mej) {
        uitfe != null && uitfe['runWith']([0x1]);
      }
    }, w1rx$['readCache'] = function () {}, w1rx$['writeCache'] = function (ax81r) {
      var zqag0k = readyUrl['split']('?')[0x0];w1rx$['filesListObj'][zqag0k] = { 'md5': md5Name, 'readyUrl': readyUrl }, w1rx$['fs']['writeFile']({ 'filePath': w1rx$['fileNativeDir'] + '/' + w1rx$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](w1rx$['filesListObj']), 'success': function (o4) {}, 'fail': function (b1rw8x) {} });
    }, w1rx$['setNativeFileDir'] = function (tqkgf0) {
      w1rx$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + tqkgf0;
    }, w1rx$['filesListObj'] = {}, w1rx$['fileNativeDir'] = null, w1rx$['fileListName'] = 'layaairfiles.txt', w1rx$['ziyuFileData'] = {}, q0gft(w1rx$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), w1rx$;
  }(mj46hn),
      futq = function (j39_4) {
    function qz0bg() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], qz0bg['__super']['call'](this), this['_sound'] = qz0bg['_createSound'](), this['_chanell'] = new c2(this['_sound']);
    }oc3925(qz0bg, 'laya.wx.mini.MiniSound', j39_4);var m6ejn = qz0bg['prototype'];return m6ejn['load'] = function (gtiu) {
      var $1wr8p = this;gtiu = zk0fg['formatURL'](gtiu), this['url'] = gtiu;if (qz0bg['_audioCache'][gtiu]) {
        this['event']('complete');return;
      }function z8ax1b() {
        if (qz0bg['_null'] != undefined) $1wr8p['_sound']['onCanplay'](qz0bg['_null']), $1wr8p['_sound']['onError'](qz0bg['_null']);else try {
          $1wr8p['_sound']['onCanplay'](null), $1wr8p['_sound']['onError'](null), qz0bg['_null'] = null;
        } catch (n4m6hj) {
          console['warn']('[wxmini] _clearSound:' + n4m6hj), $1wr8p['_sound']['onCanplay'](mdjhe6), $1wr8p['_sound']['onError'](mdjhe6), qz0bg['_null'] = mdjhe6;
        }
      }function ikfutd() {
        udtf['loaded'] = !![], udtf['event']('complete'), qz0bg['_audioCache'][udtf['url']] = udtf;
      }function a0g(bqxa0) {
        console['error']('errCode=' + bqxa0['errCode'] + '  errMsg=' + bqxa0['errMsg']), udtf['event']('error');
      }function mdjhe6() {}this['_sound']['onCanplay'](ikfutd), this['_sound']['onError'](a0g), this['_sound']['src'] = gtiu;var udtf = this;
    }, m6ejn['play'] = function (xbza08, mn4j6h) {
      xbza08 === void 0x0 && (xbza08 = 0x0), mn4j6h === void 0x0 && (mn4j6h = 0x0);var n4j_93, p1vrw;if (this['url'] == rw$pv7['_tMusic']) {
        if (!qz0bg['_musicAudio']) qz0bg['_musicAudio'] = this['_sound'];n4j_93 = qz0bg['_musicAudio'], p1vrw = this['_chanell'];
      } else n4j_93 = this['_sound'], p1vrw = this['_chanell'];return n4j_93['src'] = this['url'], n4j_93['startTime'] = 0x0, p1vrw['isStopped'] && (p1vrw['url'] = this['url'], p1vrw['loops'] = mn4j6h, p1vrw['startTime'] = xbza08, p1vrw['play'](), rw$pv7['addChannel'](p1vrw)), p1vrw;
    }, m6ejn['dispose'] = function () {
      var j3n4_ = qz0bg['_audioCache'][this['url']];j3n4_ && (j3n4_['src'] = '', delete qz0bg['_audioCache'][this['url']]);
    }, _5o39c(0x0, m6ejn, 'duration', function () {
      return this['_sound']['duration'];
    }), qz0bg['_createSound'] = function () {
      qz0bg['_id']++;var n9h = mhedi['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return n9h;
    }, qz0bg['_musicAudio'] = null, qz0bg['_id'] = 0x0, qz0bg['_audioCache'] = {}, qz0bg['_null'] = undefined, qz0bg;
  }(mj46hn),
      c2 = function (c9253) {
    function p$vw7r(zfgk0q) {
      this['_audio'] = null, this['_onEnd'] = null, p$vw7r['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = zfgk0q, this['_onEnd'] = r$81['bind'](this['__onEnd'], this), zfgk0q['onEnded'](this['_onEnd']);
    }oc3925(p$vw7r, 'laya.wx.mini.MiniSoundChannel', c9253);var uqgkf = p$vw7r['prototype'];return uqgkf['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (gktuif['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, uqgkf['__onNull'] = function () {}, uqgkf['play'] = function () {
      this['isStopped'] = ![], rw$pv7['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, uqgkf['stop'] = function () {
      this['isStopped'] = !![], rw$pv7['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, uqgkf['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, uqgkf['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], rw$pv7['addChannel'](this), this['_audio']['play']();
    }, _5o39c(0x0, uqgkf, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), _5o39c(0x0, uqgkf, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), _5o39c(0x0, uqgkf, 'volume', function () {
      return 0x1;
    }, function ($lvpy7) {}), p$vw7r['_null'] = undefined, p$vw7r;
  }(fgku),
      ypw$v = function () {
    function b8x1z() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = mhedi['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }oc3925(b8x1z, 'laya.wx.mini.MiniVideo');var fkui = b8x1z['prototype'];return fkui['on'] = function (bw1xr, bz0x8, x0b8az) {
      if (bw1xr == 'loadedmetadata') this['onPlayFunc'] = x0b8az['bind'](bz0x8), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else bw1xr == 'ended' && (this['onEndedFunC'] = x0b8az['bind'](bz0x8), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, fkui['onTimeUpdateFunc'] = function (oc_53) {
      this['position'] = oc_53['position'], this['_duration'] = oc_53['duration'];
    }, fkui['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, fkui['onended'] = function (fietd, n9hj_) {
      this['onEndedFunC'] = n9hj_['bind'](fietd), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, fkui['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, fkui['off'] = function (gfiktu, c5o9_, bazq0g) {
      if (gfiktu == 'loadedmetadata') this['onPlayFunc'] = bazq0g['bind'](c5o9_), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else gfiktu == 'ended' && (this['onEndedFunC'] = bazq0g['bind'](c5o9_), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, fkui['load'] = function (mied6u) {
      if (!this['videoElement']) return;this['videoElement']['src'] = mied6u;
    }, fkui['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, fkui['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, fkui['size'] = function (vrw7p, m46j) {
      if (!this['videoElement']) return;this['videoElement']['width'] = vrw7p, this['videoElement']['height'] = m46j;
    }, fkui['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, fkui['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, _5o39c(0x0, fkui, 'duration', function () {
      return this['_duration'];
    }), _5o39c(0x0, fkui, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (etuif) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = etuif;
    }), _5o39c(0x0, fkui, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), _5o39c(0x0, fkui, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), _5o39c(0x0, fkui, 'ended', function () {
      return this['videoend'];
    }), _5o39c(0x0, fkui, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (xr8w1$) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = xr8w1$;
    }), _5o39c(0x0, fkui, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (nejhm) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = nejhm;
    }), _5o39c(0x0, fkui, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (h6jde) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = h6jde;
    }), _5o39c(0x0, fkui, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), _5o39c(0x0, fkui, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (h4mj6) {
      if (!this['videoElement']) return;this['videoElement']['x'] = h4mj6;
    }), _5o39c(0x0, fkui, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (n94) {
      if (!this['videoElement']) return;this['videoElement']['y'] = n94;
    }), _5o39c(0x0, fkui, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), _5o39c(0x0, fkui, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (zfqg0) {
      if (!this['videoElement']) return;this['videoElement']['src'] = zfqg0;
    }), _5o39c(0x0, fkui, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (l7p) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = l7p;
    }), _5o39c(0x0, fkui, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (fukdti) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = fukdti;
    }), b8x1z;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var utqfk in Laya) {
    var f0gkzq = Laya[utqfk];f0gkzq && f0gkzq['__isclass'] && (exports[utqfk] = f0gkzq);
  }
});