var k = wx.$f;
(function (window, document, dnexw) {
  var co6j24 = dnexw['un'],
      ay3r$7 = dnexw['uns'],
      rx7 = dnexw['static'],
      re8x7 = dnexw['class'],
      uib1m = dnexw['getset'],
      hqtmf0 = dnexw['__newvec'],
      q_05hk = laya['utils']['Browser'],
      hmb = laya['events']['Event'],
      v1ubm = laya['events']['EventDispatcher'],
      ra3y$ = laya['resource']['HTMLImage'],
      o2dj6 = laya['utils']['Handler'],
      qhf0m = laya['display']['Input'],
      t0hifm = laya['net']['Loader'],
      z7$r = laya['maths']['Matrix'],
      dwjs = laya['renders']['Render'],
      $3r8y = laya['utils']['RunDriver'],
      j62oc4 = laya['media']['Sound'],
      c4oj26 = laya['media']['SoundChannel'],
      $8z7r3 = laya['media']['SoundManager'],
      ibmfv = laya['display']['Stage'],
      wexnds = laya['net']['URL'],
      u19bgv = laya['utils']['Utils'],
      zn8wex = function () {
    function o6sjd() {}return re8x7(o6sjd, 'laya.wx.mini.MiniAdpter'), o6sjd['getJson'] = function (o4c2_) {
      return JSON['parse'](o4c2_);
    }, o6sjd['init'] = function (xd, b1uivm) {
      xd === void 0x0 && (xd = ![]), b1uivm === void 0x0 && (b1uivm = ![]);if (o6sjd['_inited']) return;o6sjd['window'] = window;if (o6sjd['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;o6sjd['_inited'] = !![], o6sjd['isZiYu'] = b1uivm, o6sjd['isPosMsgYu'] = xd, o6sjd['EnvConfig'] = {}, !o6sjd['isZiYu'] && (ya$p7['setNativeFileDir']('/layaairGame'), ya$p7['existDir'](ya$p7['fileNativeDir'], o2dj6['create'](o6sjd, o6sjd['onMkdirCallBack']))), o6sjd['window']['focus'] = function () {}, dnexw['getUrlPath'] = function () {}, o6sjd['window']['logtime'] = function (swzxen) {}, o6sjd['window']['alertTimeLog'] = function (xern8z) {}, o6sjd['window']['resetShareInfo'] = function () {}, o6sjd['window']['CanvasRenderingContext2D'] = function () {}, o6sjd['window']['CanvasRenderingContext2D']['prototype'] = o6sjd['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], o6sjd['window']['document']['body']['appendChild'] = function () {}, o6sjd['EnvConfig']['pixelRatioInt'] = 0x0, $3r8y['getPixelRatio'] = o6sjd['pixelRatio'], o6sjd['_preCreateElement'] = q_05hk['createElement'], q_05hk['createElement'] = o6sjd['createElement'], $3r8y['createShaderCondition'] = o6sjd['createShaderCondition'], u19bgv['parseXMLFromString'] = o6sjd['parseXMLFromString'], qhf0m['_createInputElement'] = bitmfh['_createInputElement'], o6sjd['EnvConfig']['load'] = t0hifm['prototype']['load'], t0hifm['prototype']['load'] = zer7$8['prototype']['load'], o6sjd['isZiYu'] && xd && wx['onMessage'](function (mfibuv) {
        mfibuv['isLoad'] && (ya$p7['ziyuFileData'][mfibuv['url']] = mfibuv['data']);
      });
    }, o6sjd['onMkdirCallBack'] = function ($7r8y, _4k0q) {
      if (!$7r8y) ya$p7['filesListObj'] = JSON['parse'](_4k0q['data']);
    }, o6sjd['pixelRatio'] = function () {
      if (!o6sjd['EnvConfig']['pixelRatioInt']) try {
        var x87re = wx['getSystemInfoSync']();return o6sjd['EnvConfig']['pixelRatioInt'] = x87re['pixelRatio'], x87re = x87re, x87re['pixelRatio'];
      } catch (vfbum) {}return o6sjd['EnvConfig']['pixelRatioInt'];
    }, o6sjd['createElement'] = function (bfmivt) {
      if (bfmivt == 'canvas') {
        var tmfqh0;return o6sjd['idx'] == 0x1 ? o6sjd['isZiYu'] ? (tmfqh0 = sharedCanvas, tmfqh0['style'] = {}) : tmfqh0 = window['canvas'] : tmfqh0 = window['wx']['createCanvas'](), o6sjd['idx']++, tmfqh0;
      } else {
        if (bfmivt == 'textarea' || bfmivt == 'input') return o6sjd['onCreateInput'](bfmivt);else {
          if (bfmivt == 'div') {
            var cswn = o6sjd['_preCreateElement'](bfmivt);return cswn['contains'] = function (enx8wz) {
              return null;
            }, cswn['removeChild'] = function (y7ap3$) {}, cswn;
          } else return o6sjd['_preCreateElement'](bfmivt);
        }
      }
    }, o6sjd['onCreateInput'] = function (wcjsdn) {
      var wdsen = o6sjd['_preCreateElement'](wcjsdn);return wdsen['focus'] = bitmfh['wxinputFocus'], wdsen['blur'] = bitmfh['wxinputblur'], wdsen['style'] = {}, wdsen['value'] = 0x0, wdsen['parentElement'] = {}, wdsen['placeholder'] = {}, wdsen['type'] = {}, wdsen['setColor'] = function (b1v9ui) {}, wdsen['setType'] = function (imfvb) {}, wdsen['setFontFace'] = function (o2dj6c) {}, wdsen['addEventListener'] = function (qmt) {}, wdsen['contains'] = function (buvim1) {
        return null;
      }, wdsen['removeChild'] = function (q0k_h) {}, wdsen;
    }, o6sjd['createShaderCondition'] = function (mifbvt) {
      var z$r738 = this,
          s6ojd = function () {
        var ner8zx = mifbvt;return z$r738[mifbvt['replace']('this.', '')];
      };return s6ojd;
    }, o6sjd['EnvConfig'] = null, o6sjd['window'] = null, o6sjd['_preCreateElement'] = null, o6sjd['_inited'] = ![], o6sjd['wxRequest'] = null, o6sjd['systemInfo'] = null, o6sjd['version'] = '0.0.1', o6sjd['isZiYu'] = ![], o6sjd['isPosMsgYu'] = ![], o6sjd['parseXMLFromString'] = function (a3r) {
      var zr$e, n8ezxw;a3r = a3r['replace'](/>\s+</g, '><');try {
        zr$e = new window['Parser']['DOMParser']()['parseFromString'](a3r, 'text/xml');
      } catch (hfmti0) {
        throw '需要引入xml解析库文件';
      }return zr$e;
    }, o6sjd['idx'] = 0x1, o6sjd;
  }(),
      mqhft0 = function () {
    function eznx8r() {}re8x7(eznx8r, 'laya.wx.mini.MiniImage');var jcdso = eznx8r['prototype'];return jcdso['_loadImage'] = function (b1g) {
      var $73ra = this,
          fbvitm = ![];b1g['indexOf']('layaNativeDir/') == -0x1 && (fbvitm = !![], b1g = wexnds['formatURL'](b1g));if (!ya$p7['getFileInfo'](b1g)) {
        if (b1g['indexOf']('http://') != -0x1 || b1g['indexOf']('https://') != -0x1) ya$p7['downImg'](b1g, new o2dj6(eznx8r, eznx8r['onDownImgCallBack'], [b1g, $73ra]), b1g);else eznx8r['onCreateImage'](b1g, $73ra, !![]);
      } else eznx8r['onCreateImage'](b1g, $73ra, !fbvitm);
    }, eznx8r['onDownImgCallBack'] = function (r7xz8e, ndwjsc, exzsnw) {
      if (!exzsnw) eznx8r['onCreateImage'](r7xz8e, ndwjsc);else ndwjsc['onError'](null);
    }, eznx8r['onCreateImage'] = function (mf0ith, $z73r8, e$78) {
      e$78 === void 0x0 && (e$78 = ![]);var yra$3;if (!e$78) {
        var mfqh = ya$p7['getFileInfo'](mf0ith),
            y$387r = mfqh['md5'];yra$3 = ya$p7['getFileNativePath'](y$387r);
      } else yra$3 = mf0ith;if ($z73r8['imgCache'] == null) $z73r8['imgCache'] = {};var r7x8z;function nsxjwd() {
        r7x8z['onload'] = null, r7x8z['onerror'] = null, delete $z73r8['imgCache'][mf0ith];
      };var xwndse = function () {
        nsxjwd(), $z73r8['onLoaded'](r7x8z);
      },
          q50t = function () {
        nsxjwd(), $z73r8['event']('error', 'Load image failed');
      };$z73r8['_type'] == 'nativeimage' ? (r7x8z = new q_05hk['window']['Image'](), r7x8z['crossOrigin'] = '', r7x8z['onload'] = xwndse, r7x8z['onerror'] = q50t, r7x8z['src'] = yra$3, $z73r8['imgCache'][mf0ith] = r7x8z) : new ra3y$['create'](yra$3, { 'onload': xwndse, 'onerror': q50t, 'onCreate': function (dncjw) {
          r7x8z = dncjw, $z73r8['imgCache'][mf0ith] = dncjw;
        } });
    }, eznx8r;
  }(),
      bitmfh = function () {
    function z83$7r() {}return re8x7(z83$7r, 'laya.wx.mini.MiniInput'), z83$7r['_createInputElement'] = function () {
      qhf0m['_initInput'](qhf0m['area'] = q_05hk['createElement']('textarea')), qhf0m['_initInput'](qhf0m['input'] = q_05hk['createElement']('input')), qhf0m['inputContainer'] = q_05hk['createElement']('div'), qhf0m['inputContainer']['style']['position'] = 'absolute', qhf0m['inputContainer']['style']['zIndex'] = 0x186a0, q_05hk['container']['appendChild'](qhf0m['inputContainer']), qhf0m['inputContainer']['setPos'] = function (vb1ui9, fqm0h) {
        qhf0m['inputContainer']['style']['left'] = vb1ui9 + 'px', qhf0m['inputContainer']['style']['top'] = fqm0h + 'px';
      }, dnexw['stage']['on']('resize', null, z83$7r['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xswndj) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), $8z7r3['_soundClass'] = thq0fm, $8z7r3['_musicClass'] = thq0fm;
    }, z83$7r['_onStageResize'] = function () {
      var t0fqm = dnexw['stage']['_canvasTransform']['identity']();t0fqm['scale'](q_05hk['width'] / dwjs['canvas']['width'] / $3r8y['getPixelRatio'](), q_05hk['height'] / dwjs['canvas']['height'] / $3r8y['getPixelRatio']());
    }, z83$7r['wxinputFocus'] = function (qk4_0) {
      var fbith = qhf0m['inputElement']['target'];if (fbith && !fbith['editable']) return;zn8wex['window']['wx']['offKeyboardConfirm'](), zn8wex['window']['wx']['offKeyboardInput'](), zn8wex['window']['wx']['showKeyboard']({ 'defaultValue': fbith['text'], 'maxLength': fbith['maxChars'], 'multiple': fbith['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (nxdjws) {}, 'fail': function (hfm0tq) {} }), zn8wex['window']['wx']['onKeyboardConfirm'](function (oc2_4) {
        var _kq52 = oc2_4 ? oc2_4['value'] : '';fbith['text'] = _kq52, fbith['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), zn8wex['window']['wx']['onKeyboardInput'](function (qhk5_) {
        var scow = qhk5_ ? qhk5_['value'] : '';if (!fbith['multiline']) {
          if (scow['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }fbith['text'] = scow, fbith['event']('input');
      });
    }, z83$7r['inputEnter'] = function () {
      qhf0m['inputElement']['target']['focus'] = ![];
    }, z83$7r['wxinputblur'] = function () {
      z83$7r['hideKeyboard']();
    }, z83$7r['hideKeyboard'] = function () {
      zn8wex['window']['wx']['offKeyboardConfirm'](), zn8wex['window']['wx']['offKeyboardInput'](), zn8wex['window']['wx']['hideKeyboard']({ 'success': function (i91uv) {
          console['log']('隐藏键盘');
        }, 'fail': function (q05kh_) {
          console['log']('隐藏键盘出错:' + (q05kh_ ? q05kh_['errMsg'] : ''));
        } });
    }, z83$7r;
  }(),
      zer7$8 = function () {
    function exz8w() {}re8x7(exz8w, 'laya.wx.mini.MiniLoader');var doj26c = exz8w['prototype'];return doj26c['load'] = function (mvui1, oj2c4, snxed, _2564k, $3ypa7) {
      snxed === void 0x0 && (snxed = !![]), $3ypa7 === void 0x0 && ($3ypa7 = ![]);var th0qk5 = this;th0qk5['_url'] = mvui1;if (mvui1['indexOf']('data:image') === 0x0) th0qk5['_type'] = oj2c4 = 'image';else th0qk5['_type'] = oj2c4 || (oj2c4 = th0qk5['getTypeFromUrl'](mvui1));th0qk5['_cache'] = snxed, th0qk5['_data'] = null;var bv1i = 'ascii';if (mvui1['indexOf']('.fnt') != -0x1) bv1i = 'utf8';else oj2c4 == 'arraybuffer' && (bv1i = '');;var d2j6c = u19bgv['getFileExtension'](mvui1);if (exz8w['_fileTypeArr']['indexOf'](d2j6c) != -0x1) zn8wex['EnvConfig']['load']['call'](this, mvui1, oj2c4, snxed, _2564k, $3ypa7);else {
        if (!ya$p7['getFileInfo'](mvui1)) {
          if (mvui1['indexOf']('layaNativeDir/') != -0x1) {
            if (zn8wex['isZiYu']) {
              var a3p$7 = ya$p7['ziyuFileData'][mvui1];th0qk5['onLoaded'](a3p$7);return;
            } else {
              cosnole['log']('read read'), ya$p7['read'](mvui1, bv1i, new o2dj6(exz8w, exz8w['onReadNativeCallBack'], [bv1i, mvui1, oj2c4, snxed, _2564k, $3ypa7, th0qk5]));return;
            }
          }if (wexnds['rootPath'] == '') var docsj = mvui1;else docsj = mvui1['split'](wexnds['rootPath'])[0x0];mvui1['indexOf']('http://') != -0x1 || mvui1['indexOf']('https://') != -0x1 ? zn8wex['EnvConfig']['load']['call'](th0qk5, mvui1, oj2c4, snxed, _2564k, $3ypa7) : ya$p7['readFile'](docsj, bv1i, new o2dj6(exz8w, exz8w['onReadNativeCallBack'], [bv1i, mvui1, oj2c4, snxed, _2564k, $3ypa7, th0qk5]), mvui1);
        } else zn8wex['EnvConfig']['load']['call'](this, mvui1, oj2c4, snxed, _2564k, $3ypa7);
      }
    }, doj26c['resMgrLoad'] = function (dsc6o, jdxws, bvmfu, $a37yp, ivbm, ibmufv, dco6j) {
      bvmfu === void 0x0 && (bvmfu = 0x0), $a37yp === void 0x0 && ($a37yp = ![]), ivbm === void 0x0 && (ivbm = ![]), ibmufv === void 0x0 && (ibmufv = 0x0), dco6j === void 0x0 && (dco6j = 0x3), dsc6o['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', dsc6o), zn8wex['EnvConfig']['resMgrLoad'](dsc6o, (bifthm, dwsn, jo26c4) => {
        exz8w['prototype']['resMgrLoadCallBack'](bifthm, dwsn, jo26c4, jdxws);
      }, bvmfu, $a37yp, ivbm, ibmufv, dco6j);
    }, doj26c['resMgrLoadCallBack'] = function (dwjxn, fhmit0, uibm, mftvbi) {
      console['log']('buff:::', dwjxn, uibm, ya$p7['fileNativeDir'] + '///' + ya$p7['fileListName']), mftvbi(dwjxn, fhmit0, uibm);
    }, doj26c['clearRes'] = function (jwcnsd, fbuivm) {
      fbuivm === void 0x0 && (fbuivm = ![]);var fh0mq = this;fh0mq['clearRes'](jwcnsd, fbuivm);var g91vu = ya$p7['getFileInfo'](jwcnsd);if (g91vu && (jwcnsd['indexOf']('http://') != -0x1 || jwcnsd['indexOf']('https://') != -0x1)) {
        var soj6cd = g91vu['md5'],
            y$pa37 = ya$p7['getFileNativePath'](soj6cd);ya$p7['remove'](y$pa37);
      }
    }, exz8w['onReadNativeCallBack'] = function (mbiu, jnsxw, h5tqk0, $8y, q_42k, hq0t5k, c4o, ndjcs, kqh0_) {
      $8y === void 0x0 && ($8y = !![]), hq0t5k === void 0x0 && (hq0t5k = ![]), ndjcs === void 0x0 && (ndjcs = 0x0);if (!ndjcs) {
        var ya$3p7;if (h5tqk0 == 'json' || h5tqk0 == 'atlas') ya$3p7 = zn8wex['getJson'](kqh0_['data']);else h5tqk0 == 'xml' ? ya$3p7 = u19bgv['parseXMLFromString'](kqh0_['data']) : ya$3p7 = kqh0_['data'];c4o['onLoaded'](ya$3p7), !zn8wex['isZiYu'] && zn8wex['isPosMsgYu'] && h5tqk0 != 'arraybuffer' && wx['postMessage']({ 'url': jnsxw, 'data': ya$3p7, 'isLoad': !![] });
      } else ndjcs == 0x1 && zn8wex['EnvConfig']['load']['call'](c4o, jnsxw, h5tqk0, $8y, q_42k, hq0t5k);
    }, rx7(exz8w, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), exz8w;
  }(),
      ya$p7 = function (v1gb9) {
    function mui() {
      mui['__super']['call'](this);;
    }return re8x7(mui, 'laya.wx.mini.MiniFileMgr', v1gb9), mui['isLoadFile'] = function (o6_k2) {
      return mui['_fileTypeArr']['indexOf'](o6_k2) != -0x1 ? !![] : ![];
    }, mui['getFileInfo'] = function (csdjo) {
      var vg1bu9 = csdjo['split']('?')[0x0],
          o6_k42 = mui['filesListObj'][vg1bu9];if (o6_k42 == null) return null;else return o6_k42;return null;
    }, mui['onFileUpdate'] = function (jsd, odwj) {
      var u9iv1 = jsd['split']('/'),
          nxwze8 = u9iv1[u9iv1['length'] - 0x1],
          r$z = mui['getFileInfo'](odwj);if (r$z == null) mui['onSaveFile'](odwj, nxwze8);else {
        if (r$z['readyUrl'] != odwj) mui['remove'](nxwze8, odwj);
      }
    }, mui['exits'] = function (ibmfht, jowscd) {
      var odwcs = mui['getFileNativePath'](ibmfht);mui['fs']['getFileInfo']({ 'filePath': odwcs, 'success': function (mit0hf) {
          jowscd != null && jowscd['runWith']([0x0, mit0hf]);
        }, 'fail': function (zsx) {
          jowscd != null && jowscd['runWith']([0x1, zsx]);
        } });
    }, mui['read'] = function (ko462, vifbtm, swdne, hqft05) {
      vifbtm === void 0x0 && (vifbtm = 'ascill'), hqft05 === void 0x0 && (hqft05 = '');var wdjsn;hqft05 != '' ? wdjsn = mui['getFileNativePath'](ko462) : wdjsn = ko462, mui['fs']['readFile']({ 'filePath': wdjsn, 'encoding': vifbtm, 'success': function (khq5_0) {
          swdne != null && swdne['runWith']([0x0, khq5_0]);
        }, 'fail': function (swdjoc) {
          if (swdjoc && hqft05 != '') mui['down'](hqft05, vifbtm, swdne, hqft05);else swdne != null && swdne['runWith']([0x1]);
        } });
    }, mui['readNativeFile'] = function (i1vubm, $r8z7) {
      mui['fs']['readFile']({ 'filePath': i1vubm, 'encoding': '', 'success': function (ze8rnx) {
          $r8z7 != null && $r8z7['runWith']([0x0]);
        }, 'fail': function (zerxn8) {
          $r8z7 != null && $r8z7['runWith']([0x1]);
        } });
    }, mui['down'] = function ($7r8z, wnxzes, c24jo, k45_) {
      wnxzes === void 0x0 && (wnxzes = 'ascill'), k45_ === void 0x0 && (k45_ = '');var _654k = mui['getFileNativePath'](k45_),
          mbvf = mui['wxdown']({ 'url': $7r8z, 'filePath': _654k, 'success': function (cj2od) {
          if (cj2od['statusCode'] === 0xc8) mui['readFile'](cj2od['filePath'], wnxzes, c24jo, k45_);
        }, 'fail': function (btv) {
          c24jo != null && c24jo['runWith']([0x1, btv]);
        } });mbvf['onProgressUpdate'](function (dsnc) {
        c24jo != null && c24jo['runWith']([0x2, dsnc['progress']]);
      });
    }, mui['readFile'] = function (h05tfq, xdnews, $r3z, sdo6j) {
      xdnews === void 0x0 && (xdnews = 'ascill'), sdo6j === void 0x0 && (sdo6j = ''), mui['fs']['readFile']({ 'filePath': h05tfq, 'encoding': xdnews, 'success': function (qkh5) {
          if (h05tfq['indexOf']('http://') != -0x1 || h05tfq['indexOf']('https://') != -0x1) mui['onFileUpdate'](h05tfq, sdo6j);$r3z != null && $r3z['runWith']([0x0, qkh5]);
        }, 'fail': function (q425k) {
          if (q425k) $r3z != null && $r3z['runWith']([0x1, q425k]);
        } });
    }, mui['downImg'] = function (k5_2q4, viufbm, tfivm) {
      tfivm === void 0x0 && (tfivm = '');var z8rx = mui['wxdown']({ 'url': k5_2q4, 'success': function (zwexns) {
          zwexns['statusCode'] === 0xc8 && mui['copyFile'](zwexns['tempFilePath'], tfivm, viufbm);
        }, 'fail': function (exwzn8) {
          viufbm != null && viufbm['runWith']([0x1, exwzn8]);
        } });
    }, mui['copyFile'] = function (scjdo6, yap7$3, iumvb) {
      var bvu9i = scjdo6['split']('/'),
          jc6o2d = bvu9i[bvu9i['length'] - 0x1],
          re8x7z = yap7$3['split']('?')[0x0],
          o_k = mui['getFileInfo'](yap7$3),
          htmi0 = mui['getFileNativePath'](jc6o2d);mui['fs']['copyFile']({ 'srcPath': scjdo6, 'destPath': htmi0, 'success': function (dsncj) {
          if (!o_k) mui['onSaveFile'](yap7$3, jc6o2d), iumvb != null && iumvb['runWith']([0x0]);else {
            if (o_k['readyUrl'] != yap7$3) mui['remove'](jc6o2d, yap7$3, iumvb);
          }
        }, 'fail': function (hq0kt5) {
          iumvb != null && iumvb['runWith']([0x1, hq0kt5]);
        } });
    }, mui['getFileNativePath'] = function (ifbvm) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ifbvm;
    }, mui['remove'] = function (kt5h, co2d6j, qhfmt) {
      co2d6j === void 0x0 && (co2d6j = '');var ayr3 = mui['getFileInfo'](co2d6j),
          imf0 = mui['getFileNativePath'](ayr3['md5']);dnexw['loader']['clearRes'](ayr3['readyUrl']), mui['fs']['unlink']({ 'filePath': imf0, 'success': function (csjo6d) {
          if (co2d6j != '') mui['onSaveFile'](co2d6j, kt5h);qhfmt != null && qhfmt['runWith']([0x0]);
        }, 'fail': function (nzwe) {} });
    }, mui['onSaveFile'] = function (bfih, c6josd) {
      var q245_k = bfih['split']('?')[0x0];mui['filesListObj'][q245_k] = { 'md5': c6josd, 'readyUrl': bfih }, mui['fs']['writeFile']({ 'filePath': mui['fileNativeDir'] + '/' + mui['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mui['filesListObj']), 'success': function (imbfuv) {
          console['log']('写入测试测试成功：', imbfuv);
        }, 'fail': function (dojscw) {
          console['log']('写入测试测试失败：', dojscw);
        } });
    }, mui['existDir'] = function (_4k52q, r8e7z$) {
      mui['fs']['mkdir']({ 'dirPath': _4k52q, 'success': function (bv1mi) {
          r8e7z$ != null && r8e7z$['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (er8$7) {
          if (er8$7['errMsg']['indexOf']('file already exists') != -0x1) mui['readSync'](mui['fileListName'], 'utf8', r8e7z$);else r8e7z$ != null && r8e7z$['runWith']([0x1, er8$7]);
        } });
    }, mui['readSync'] = function (_0kq, wdjcs, njxs, x7zer) {
      wdjcs === void 0x0 && (wdjcs = 'ascill'), x7zer === void 0x0 && (x7zer = '');var qftm = mui['getFileNativePath'](_0kq),
          mibufv;try {
        mibufv = mui['fs']['readFileSync'](qftm), njxs != null && njxs['runWith']([0x0, { 'data': mibufv }]);
      } catch (z8enw) {
        njxs != null && njxs['runWith']([0x1]);
      }
    }, mui['readCache'] = function () {}, mui['writeCache'] = function ($7a3) {
      var im0th = readyUrl['split']('?')[0x0];mui['filesListObj'][im0th] = { 'md5': md5Name, 'readyUrl': readyUrl }, mui['fs']['writeFile']({ 'filePath': mui['fileNativeDir'] + '/' + mui['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mui['filesListObj']), 'success': function (kq054) {}, 'fail': function (q0kh_5) {} });
    }, mui['setNativeFileDir'] = function (q25k) {
      mui['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + q25k;
    }, mui['filesListObj'] = {}, mui['fileNativeDir'] = null, mui['fileListName'] = 'layaairfiles.txt', mui['ziyuFileData'] = {}, rx7(mui, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), mui;
  }(v1ubm),
      thq0fm = function (dwcnjs) {
    function k_426() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], k_426['__super']['call'](this), this['_sound'] = k_426['_createSound']();
    }re8x7(k_426, 'laya.wx.mini.MiniSound', dwcnjs);var cwd = k_426['prototype'];return cwd['load'] = function (t0) {
      var ze7r8$ = this;t0 = wexnds['formatURL'](t0), this['url'] = t0;if (k_426['_audioCache'][t0]) {
        this['event']('complete');return;
      }function swocjd() {
        if (k_426['_null'] != undefined) ze7r8$['_sound']['onCanplay'](k_426['_null']), ze7r8$['_sound']['onError'](k_426['_null']);else try {
          ze7r8$['_sound']['onCanplay'](null), ze7r8$['_sound']['onError'](null), k_426['_null'] = null;
        } catch (_k6o) {
          console['warn']('[wxmini] _clearSound:' + _k6o), ze7r8$['_sound']['onCanplay'](mqf0h), ze7r8$['_sound']['onError'](mqf0h), k_426['_null'] = mqf0h;
        }
      }function j642c() {
        swocjd(), do6j['loaded'] = !![], do6j['event']('complete'), k_426['_audioCache'][do6j['url']] = do6j;
      }function _qk05(htfmbi) {
        console['error']('errCode=' + htfmbi['errCode'] + '  errMsg=' + htfmbi['errMsg']), swocjd(), do6j['event']('error');
      }function mqf0h() {}this['_sound']['onCanplay'](j642c), this['_sound']['onError'](_qk05), this['_sound']['src'] = t0;var do6j = this;
    }, cwd['play'] = function (dwnjxs, co24_6) {
      dwnjxs === void 0x0 && (dwnjxs = 0x0), co24_6 === void 0x0 && (co24_6 = 0x0);var znesx;if (this['url'] == $8z7r3['_tMusic']) {
        if (!k_426['_musicAudio']) k_426['_musicAudio'] = k_426['_createSound']();znesx = k_426['_musicAudio'];
      } else znesx = k_426['_createSound']();znesx['src'] = this['url'];var sxzwne = new w8nzex(znesx);return sxzwne['url'] = this['url'], sxzwne['loops'] = co24_6, sxzwne['startTime'] = dwnjxs, sxzwne['play'](), $8z7r3['addChannel'](sxzwne), sxzwne;
    }, cwd['dispose'] = function () {
      var uiv1m = k_426['_audioCache'][this['url']];uiv1m && (uiv1m['src'] = '', delete k_426['_audioCache'][this['url']]);
    }, uib1m(0x0, cwd, 'duration', function () {
      return this['_sound']['duration'];
    }), k_426['_createSound'] = function () {
      return k_426['_id']++, zn8wex['window']['wx']['createInnerAudioContext']();
    }, k_426['_musicAudio'] = null, k_426['_id'] = 0x0, k_426['_audioCache'] = {}, k_426['_null'] = undefined, k_426;
  }(v1ubm),
      w8nzex = function (ibu1v9) {
    function sojwd(oc6d2) {
      this['_audio'] = null, this['_onEnd'] = null, sojwd['__super']['call'](this), this['_audio'] = oc6d2, this['_onEnd'] = u19bgv['bind'](this['__onEnd'], this), oc6d2['onEnded'](this['_onEnd']);
    }re8x7(sojwd, 'laya.wx.mini.MiniSoundChannel', ibu1v9);var j6dsc = sojwd['prototype'];return j6dsc['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (dnexw['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, j6dsc['__onNull'] = function () {}, j6dsc['play'] = function () {
      this['isStopped'] = ![], $8z7r3['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, j6dsc['stop'] = function () {
      this['isStopped'] = !![], $8z7r3['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (sojwd['_null'] != undefined) this['_audio']['onEnded'](sojwd['_null']);else try {
        this['_audio']['onEnded'](null), sojwd['_null'] = null;
      } catch (z3r) {
        console['warn']('[wxmini] stop:' + z3r), this['_audio']['onEnded'](u19bgv['bind'](this['__onNull'], this)), sojwd['_null'] = u19bgv['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, j6dsc['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, j6dsc['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], $8z7r3['addChannel'](this), this['_audio']['play']();
    }, uib1m(0x0, j6dsc, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), uib1m(0x0, j6dsc, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), uib1m(0x0, j6dsc, 'volume', function () {
      return 0x1;
    }, function (itfmhb) {}), sojwd['_null'] = undefined, sojwd;
  }(c4oj26);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var co6jd2 in Laya) {
    var ifmb = Laya[co6jd2];ifmb && ifmb['__isclass'] && (exports[co6jd2] = ifmb);
  }
});