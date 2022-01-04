var I = wx.$R;
(function (window, document, cdnpqf) {
  var kio8y = cdnpqf['un'],
      b9a4 = cdnpqf['uns'],
      z3ts = cdnpqf['static'],
      owi8ky = cdnpqf['class'],
      ijsz2x = cdnpqf['getset'],
      kywom8 = cdnpqf['__newvec'],
      $_uab = laya['utils']['Browser'],
      wy8omk = laya['events']['Event'],
      _1auh = laya['events']['EventDispatcher'],
      egmwr = laya['resource']['HTMLImage'],
      ab19u$ = laya['utils']['Handler'],
      ij2yxo = laya['display']['Input'],
      ywoik8 = laya['net']['Loader'],
      dncpq = laya['maths']['Matrix'],
      omk8yw = laya['renders']['Render'],
      u_$1ba = laya['utils']['RunDriver'],
      m8k7w = laya['media']['Sound'],
      h_5u = laya['media']['SoundChannel'],
      i8jyox = laya['media']['SoundManager'],
      n5_hc6 = laya['display']['Stage'],
      $91ab4 = laya['net']['URL'],
      sj2zx = laya['utils']['Utils'],
      cqdfp = function () {
    function yjxoi8() {}return owi8ky(yjxoi8, 'laya.wx.mini.MiniAdpter'), yjxoi8['getJson'] = function (m7krgw) {
      return JSON['parse'](m7krgw);
    }, yjxoi8['init'] = function (ozij2, ijs2) {
      ozij2 === void 0x0 && (ozij2 = ![]), ijs2 === void 0x0 && (ijs2 = ![]);if (yjxoi8['_inited']) return;yjxoi8['window'] = window;if (yjxoi8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;yjxoi8['_inited'] = !![], yjxoi8['isZiYu'] = ijs2, yjxoi8['isPosMsgYu'] = ozij2, yjxoi8['EnvConfig'] = {}, !yjxoi8['isZiYu'] && (gqdpe['setNativeFileDir']('/layaairGame'), gqdpe['existDir'](gqdpe['fileNativeDir'], ab19u$['create'](yjxoi8, yjxoi8['onMkdirCallBack']))), yjxoi8['window']['focus'] = function () {}, cdnpqf['getUrlPath'] = function () {}, yjxoi8['window']['logtime'] = function (t3l2) {}, yjxoi8['window']['alertTimeLog'] = function (egrqm7) {}, yjxoi8['window']['resetShareInfo'] = function () {}, yjxoi8['window']['CanvasRenderingContext2D'] = function () {}, yjxoi8['window']['CanvasRenderingContext2D']['prototype'] = yjxoi8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yjxoi8['window']['document']['body']['appendChild'] = function () {}, yjxoi8['EnvConfig']['pixelRatioInt'] = 0x0, u_$1ba['getPixelRatio'] = yjxoi8['pixelRatio'], yjxoi8['_preCreateElement'] = $_uab['createElement'], $_uab['createElement'] = yjxoi8['createElement'], u_$1ba['createShaderCondition'] = yjxoi8['createShaderCondition'], sj2zx['parseXMLFromString'] = yjxoi8['parseXMLFromString'], ij2yxo['_createInputElement'] = ub$1a_['_createInputElement'], yjxoi8['EnvConfig']['load'] = ywoik8['prototype']['load'], ywoik8['prototype']['load'] = u6h_a['prototype']['load'], yjxoi8['isZiYu'] && ozij2 && wx['onMessage'](function (rkw) {
        rkw['isLoad'] && (gqdpe['ziyuFileData'][rkw['url']] = rkw['data']);
      });
    }, yjxoi8['onMkdirCallBack'] = function (szi2, gfdeqp) {
      if (!szi2) gqdpe['filesListObj'] = JSON['parse'](gfdeqp['data']);
    }, yjxoi8['pixelRatio'] = function () {
      if (!yjxoi8['EnvConfig']['pixelRatioInt']) try {
        var wrm7ge = wx['getSystemInfoSync']();return yjxoi8['EnvConfig']['pixelRatioInt'] = wrm7ge['pixelRatio'], wrm7ge = wrm7ge, wrm7ge['pixelRatio'];
      } catch (koym8) {}return yjxoi8['EnvConfig']['pixelRatioInt'];
    }, yjxoi8['createElement'] = function (ab41$9) {
      if (ab41$9 == 'canvas') {
        var u$_b;return yjxoi8['idx'] == 0x1 ? yjxoi8['isZiYu'] ? (u$_b = sharedCanvas, u$_b['style'] = {}) : u$_b = window['canvas'] : u$_b = window['wx']['createCanvas'](), yjxoi8['idx']++, u$_b;
      } else {
        if (ab41$9 == 'textarea' || ab41$9 == 'input') return yjxoi8['onCreateInput'](ab41$9);else {
          if (ab41$9 == 'div') {
            var owkm8y = yjxoi8['_preCreateElement'](ab41$9);return owkm8y['contains'] = function (wgre7) {
              return null;
            }, owkm8y['removeChild'] = function (t2xzjs) {}, owkm8y;
          } else return yjxoi8['_preCreateElement'](ab41$9);
        }
      }
    }, yjxoi8['onCreateInput'] = function (rmg7ew) {
      var wemr7 = yjxoi8['_preCreateElement'](rmg7ew);return wemr7['focus'] = ub$1a_['wxinputFocus'], wemr7['blur'] = ub$1a_['wxinputblur'], wemr7['style'] = {}, wemr7['value'] = 0x0, wemr7['parentElement'] = {}, wemr7['placeholder'] = {}, wemr7['type'] = {}, wemr7['setColor'] = function (rqeg) {}, wemr7['setType'] = function (_ah1b) {}, wemr7['setFontFace'] = function (cfdn56) {}, wemr7['addEventListener'] = function (myo8k) {}, wemr7['contains'] = function (zs2t3l) {
        return null;
      }, wemr7['removeChild'] = function (iykj8o) {}, wemr7;
    }, yjxoi8['createShaderCondition'] = function (fc6hn5) {
      var n6hc = this,
          koiy8w = function () {
        var xo2iy = fc6hn5;return n6hc[fc6hn5['replace']('this.', '')];
      };return koiy8w;
    }, yjxoi8['EnvConfig'] = null, yjxoi8['window'] = null, yjxoi8['_preCreateElement'] = null, yjxoi8['_inited'] = ![], yjxoi8['wxRequest'] = null, yjxoi8['systemInfo'] = null, yjxoi8['version'] = '0.0.1', yjxoi8['isZiYu'] = ![], yjxoi8['isPosMsgYu'] = ![], yjxoi8['parseXMLFromString'] = function (_61uh5) {
      var okywm, zvtl;_61uh5 = _61uh5['replace'](/>\s+</g, '><');try {
        okywm = new window['Parser']['DOMParser']()['parseFromString'](_61uh5, 'text/xml');
      } catch (i2jxzo) {
        throw '需要引入xml解析库文件';
      }return okywm;
    }, yjxoi8['idx'] = 0x1, yjxoi8;
  }(),
      fqegpd = function () {
    function s23() {}owi8ky(s23, 'laya.wx.mini.MiniImage');var cf56 = s23['prototype'];return cf56['_loadImage'] = function (mrkw78) {
      var fegqdp = this,
          g7dqp = ![];mrkw78['indexOf']('layaNativeDir/') == -0x1 && (g7dqp = !![], mrkw78 = $91ab4['formatURL'](mrkw78));if (!gqdpe['getFileInfo'](mrkw78)) {
        if (mrkw78['indexOf']('http://') != -0x1 || mrkw78['indexOf']('https://') != -0x1) gqdpe['downImg'](mrkw78, new ab19u$(s23, s23['onDownImgCallBack'], [mrkw78, fegqdp]), mrkw78);else s23['onCreateImage'](mrkw78, fegqdp, !![]);
      } else s23['onCreateImage'](mrkw78, fegqdp, !g7dqp);
    }, s23['onDownImgCallBack'] = function (bua1_, mrky8w, q7erp) {
      if (!q7erp) s23['onCreateImage'](bua1_, mrky8w);else mrky8w['onError'](null);
    }, s23['onCreateImage'] = function (g7werm, xj2tz, b$ua91) {
      b$ua91 === void 0x0 && (b$ua91 = ![]);var bahu_1;if (!b$ua91) {
        var _h6cn5 = gqdpe['getFileInfo'](g7werm),
            tzsx = _h6cn5['md5'];bahu_1 = gqdpe['getFileNativePath'](tzsx);
      } else bahu_1 = g7werm;if (xj2tz['imgCache'] == null) xj2tz['imgCache'] = {};var gpeqf;function h5u6c() {
        gpeqf['onload'] = null, gpeqf['onerror'] = null, delete xj2tz['imgCache'][g7werm];
      };var grpeq = function () {
        h5u6c(), xj2tz['onLoaded'](gpeqf);
      },
          a1_b$ = function () {
        h5u6c(), xj2tz['event']('error', 'Load image failed');
      };xj2tz['_type'] == 'nativeimage' ? (gpeqf = new $_uab['window']['Image'](), gpeqf['crossOrigin'] = '', gpeqf['onload'] = grpeq, gpeqf['onerror'] = a1_b$, gpeqf['src'] = bahu_1, xj2tz['imgCache'][g7werm] = gpeqf) : new egmwr['create'](bahu_1, { 'onload': grpeq, 'onerror': a1_b$, 'onCreate': function (rgk7mw) {
          gpeqf = rgk7mw, xj2tz['imgCache'][g7werm] = rgk7mw;
        } });
    }, s23;
  }(),
      ub$1a_ = function () {
    function tv0s3l() {}return owi8ky(tv0s3l, 'laya.wx.mini.MiniInput'), tv0s3l['_createInputElement'] = function () {
      ij2yxo['_initInput'](ij2yxo['area'] = $_uab['createElement']('textarea')), ij2yxo['_initInput'](ij2yxo['input'] = $_uab['createElement']('input')), ij2yxo['inputContainer'] = $_uab['createElement']('div'), ij2yxo['inputContainer']['style']['position'] = 'absolute', ij2yxo['inputContainer']['style']['zIndex'] = 0x186a0, $_uab['container']['appendChild'](ij2yxo['inputContainer']), ij2yxo['inputContainer']['setPos'] = function (q7gepd, wmyr8k) {
        ij2yxo['inputContainer']['style']['left'] = q7gepd + 'px', ij2yxo['inputContainer']['style']['top'] = wmyr8k + 'px';
      }, cdnpqf['stage']['on']('resize', null, tv0s3l['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (lt3v0s) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), i8jyox['_soundClass'] = ah6_u, i8jyox['_musicClass'] = ah6_u;
    }, tv0s3l['_onStageResize'] = function () {
      var a61h_ = cdnpqf['stage']['_canvasTransform']['identity']();a61h_['scale']($_uab['width'] / omk8yw['canvas']['width'] / u_$1ba['getPixelRatio'](), $_uab['height'] / omk8yw['canvas']['height'] / u_$1ba['getPixelRatio']());
    }, tv0s3l['wxinputFocus'] = function (z2st) {
      var dge7pq = ij2yxo['inputElement']['target'];if (dge7pq && !dge7pq['editable']) return;cqdfp['window']['wx']['offKeyboardConfirm'](), cqdfp['window']['wx']['offKeyboardInput'](), cqdfp['window']['wx']['showKeyboard']({ 'defaultValue': dge7pq['text'], 'maxLength': dge7pq['maxChars'], 'multiple': dge7pq['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (mq7) {}, 'fail': function (cpnd5) {} }), cqdfp['window']['wx']['onKeyboardConfirm'](function (r7kmw8) {
        var iyjo = r7kmw8 ? r7kmw8['value'] : '';dge7pq['text'] = iyjo, dge7pq['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), cqdfp['window']['wx']['onKeyboardInput'](function (_$1au) {
        var tsz3l2 = _$1au ? _$1au['value'] : '';if (!dge7pq['multiline']) {
          if (tsz3l2['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }dge7pq['text'] = tsz3l2, dge7pq['event']('input');
      });
    }, tv0s3l['inputEnter'] = function () {
      ij2yxo['inputElement']['target']['focus'] = ![];
    }, tv0s3l['wxinputblur'] = function () {
      tv0s3l['hideKeyboard']();
    }, tv0s3l['hideKeyboard'] = function () {
      cqdfp['window']['wx']['offKeyboardConfirm'](), cqdfp['window']['wx']['offKeyboardInput'](), cqdfp['window']['wx']['hideKeyboard']({ 'success': function (b91a$4) {
          console['log']('隐藏键盘');
        }, 'fail': function (js2tx) {
          console['log']('隐藏键盘出错:' + (js2tx ? js2tx['errMsg'] : ''));
        } });
    }, tv0s3l;
  }(),
      u6h_a = function () {
    function w7e() {}owi8ky(w7e, 'laya.wx.mini.MiniLoader');var yw8rm = w7e['prototype'];return yw8rm['load'] = function (zsv3, p5fnc, uc5, izo2jx, j2iyox) {
      uc5 === void 0x0 && (uc5 = !![]), j2iyox === void 0x0 && (j2iyox = ![]);var mrw7g = this;mrw7g['_url'] = zsv3;if (zsv3['indexOf']('data:image') === 0x0) mrw7g['_type'] = p5fnc = 'image';else mrw7g['_type'] = p5fnc || (p5fnc = mrw7g['getTypeFromUrl'](zsv3));mrw7g['_cache'] = uc5, mrw7g['_data'] = null;var fc6nd = 'ascii';if (zsv3['indexOf']('.fnt') != -0x1) fc6nd = 'utf8';else p5fnc == 'arraybuffer' && (fc6nd = '');;var _bu$ = sj2zx['getFileExtension'](zsv3);if (w7e['_fileTypeArr']['indexOf'](_bu$) != -0x1) cqdfp['EnvConfig']['load']['call'](this, zsv3, p5fnc, uc5, izo2jx, j2iyox);else {
        if (!gqdpe['getFileInfo'](zsv3)) {
          if (zsv3['indexOf']('layaNativeDir/') != -0x1) {
            if (cqdfp['isZiYu']) {
              var km8yow = gqdpe['ziyuFileData'][zsv3];mrw7g['onLoaded'](km8yow);return;
            } else {
              cosnole['log']('read read'), gqdpe['read'](zsv3, fc6nd, new ab19u$(w7e, w7e['onReadNativeCallBack'], [fc6nd, zsv3, p5fnc, uc5, izo2jx, j2iyox, mrw7g]));return;
            }
          }if ($91ab4['rootPath'] == '') var s2jxi = zsv3;else s2jxi = zsv3['split']($91ab4['rootPath'])[0x0];zsv3['indexOf']('http://') != -0x1 || zsv3['indexOf']('https://') != -0x1 ? cqdfp['EnvConfig']['load']['call'](mrw7g, zsv3, p5fnc, uc5, izo2jx, j2iyox) : gqdpe['readFile'](s2jxi, fc6nd, new ab19u$(w7e, w7e['onReadNativeCallBack'], [fc6nd, zsv3, p5fnc, uc5, izo2jx, j2iyox, mrw7g]), zsv3);
        } else cqdfp['EnvConfig']['load']['call'](this, zsv3, p5fnc, uc5, izo2jx, j2iyox);
      }
    }, yw8rm['resMgrLoad'] = function (dfqg, qgr7ep, e7wmrg, xyij2, cfdn, geqrp, sx2ji) {
      e7wmrg === void 0x0 && (e7wmrg = 0x0), xyij2 === void 0x0 && (xyij2 = ![]), cfdn === void 0x0 && (cfdn = ![]), geqrp === void 0x0 && (geqrp = 0x0), sx2ji === void 0x0 && (sx2ji = 0x3), dfqg['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', dfqg), cqdfp['EnvConfig']['resMgrLoad'](dfqg, (w8mok, yo8wi, yxj2io) => {
        w7e['prototype']['resMgrLoadCallBack'](w8mok, yo8wi, yxj2io, qgr7ep);
      }, e7wmrg, xyij2, cfdn, geqrp, sx2ji);
    }, yw8rm['resMgrLoadCallBack'] = function (xs3zt, jk8i, v3zl, xzoij) {
      console['log']('buff:::', xs3zt, v3zl, gqdpe['fileNativeDir'] + '///' + gqdpe['fileListName']), xzoij(xs3zt, jk8i, v3zl);
    }, yw8rm['clearRes'] = function (a_ubh, joixy8) {
      joixy8 === void 0x0 && (joixy8 = ![]);var dc56fn = this;dc56fn['clearRes'](a_ubh, joixy8);var gpr7e = gqdpe['getFileInfo'](a_ubh);if (gpr7e && (a_ubh['indexOf']('http://') != -0x1 || a_ubh['indexOf']('https://') != -0x1)) {
        var ioyk = gpr7e['md5'],
            egm7 = gqdpe['getFileNativePath'](ioyk);gqdpe['remove'](egm7);
      }
    }, w7e['onReadNativeCallBack'] = function (joxzi, n5_6c, yi2j, xz3t, b49$a1, k7mgrw, h1_56u, hfc, _5n) {
      xz3t === void 0x0 && (xz3t = !![]), k7mgrw === void 0x0 && (k7mgrw = ![]), hfc === void 0x0 && (hfc = 0x0);if (!hfc) {
        var emqgr7;if (yi2j == 'json' || yi2j == 'atlas') emqgr7 = cqdfp['getJson'](_5n['data']);else yi2j == 'xml' ? emqgr7 = sj2zx['parseXMLFromString'](_5n['data']) : emqgr7 = _5n['data'];h1_56u['onLoaded'](emqgr7), !cqdfp['isZiYu'] && cqdfp['isPosMsgYu'] && yi2j != 'arraybuffer' && wx['postMessage']({ 'url': n5_6c, 'data': emqgr7, 'isLoad': !![] });
      } else hfc == 0x1 && cqdfp['EnvConfig']['load']['call'](h1_56u, n5_6c, yi2j, xz3t, b49$a1, k7mgrw);
    }, z3ts(w7e, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), w7e;
  }(),
      gqdpe = function (depfgq) {
    function qepd7() {
      qepd7['__super']['call'](this);;
    }return owi8ky(qepd7, 'laya.wx.mini.MiniFileMgr', depfgq), qepd7['isLoadFile'] = function (wermg7) {
      return qepd7['_fileTypeArr']['indexOf'](wermg7) != -0x1 ? !![] : ![];
    }, qepd7['getFileInfo'] = function (k8wm7) {
      var fpnd = k8wm7['split']('?')[0x0],
          qpfde = qepd7['filesListObj'][fpnd];if (qpfde == null) return null;else return qpfde;return null;
    }, qepd7['onFileUpdate'] = function (sjztx, _a1uh6) {
      var qgfed = sjztx['split']('/'),
          y2jxio = qgfed[qgfed['length'] - 0x1],
          pdnqfe = qepd7['getFileInfo'](_a1uh6);if (pdnqfe == null) qepd7['onSaveFile'](_a1uh6, y2jxio);else {
        if (pdnqfe['readyUrl'] != _a1uh6) qepd7['remove'](y2jxio, _a1uh6);
      }
    }, qepd7['exits'] = function (q7grp, xt2jsz) {
      var h5u1_ = qepd7['getFileNativePath'](q7grp);qepd7['fs']['getFileInfo']({ 'filePath': h5u1_, 'success': function (h_u6a) {
          xt2jsz != null && xt2jsz['runWith']([0x0, h_u6a]);
        }, 'fail': function (oz2jx) {
          xt2jsz != null && xt2jsz['runWith']([0x1, oz2jx]);
        } });
    }, qepd7['read'] = function (mgr7wk, nfedp, s30vtl, kyr8m) {
      nfedp === void 0x0 && (nfedp = 'ascill'), kyr8m === void 0x0 && (kyr8m = '');var j2stzx;kyr8m != '' ? j2stzx = qepd7['getFileNativePath'](mgr7wk) : j2stzx = mgr7wk, qepd7['fs']['readFile']({ 'filePath': j2stzx, 'encoding': nfedp, 'success': function (au$b_) {
          s30vtl != null && s30vtl['runWith']([0x0, au$b_]);
        }, 'fail': function (a94$b1) {
          if (a94$b1 && kyr8m != '') qepd7['down'](kyr8m, nfedp, s30vtl, kyr8m);else s30vtl != null && s30vtl['runWith']([0x1]);
        } });
    }, qepd7['readNativeFile'] = function (lt0s3v, grmkw7) {
      qepd7['fs']['readFile']({ 'filePath': lt0s3v, 'encoding': '', 'success': function (geqmr7) {
          grmkw7 != null && grmkw7['runWith']([0x0]);
        }, 'fail': function (qcndf) {
          grmkw7 != null && grmkw7['runWith']([0x1]);
        } });
    }, qepd7['down'] = function (_ub1ah, nqdfpe, yko8w, _n56) {
      nqdfpe === void 0x0 && (nqdfpe = 'ascill'), _n56 === void 0x0 && (_n56 = '');var rqgm = qepd7['getFileNativePath'](_n56),
          ba9u1$ = qepd7['wxdown']({ 'url': _ub1ah, 'filePath': rqgm, 'success': function (tz2sjx) {
          if (tz2sjx['statusCode'] === 0xc8) qepd7['readFile'](tz2sjx['filePath'], nqdfpe, yko8w, _n56);
        }, 'fail': function (h_ba1u) {
          yko8w != null && yko8w['runWith']([0x1, h_ba1u]);
        } });ba9u1$['onProgressUpdate'](function (mkyow8) {
        yko8w != null && yko8w['runWith']([0x2, mkyow8['progress']]);
      });
    }, qepd7['readFile'] = function (mkrwy8, oyj2ix, ix2oj, jzix2) {
      oyj2ix === void 0x0 && (oyj2ix = 'ascill'), jzix2 === void 0x0 && (jzix2 = ''), qepd7['fs']['readFile']({ 'filePath': mkrwy8, 'encoding': oyj2ix, 'success': function (oxyij) {
          if (mkrwy8['indexOf']('http://') != -0x1 || mkrwy8['indexOf']('https://') != -0x1) qepd7['onFileUpdate'](mkrwy8, jzix2);ix2oj != null && ix2oj['runWith']([0x0, oxyij]);
        }, 'fail': function (g7epqd) {
          if (g7epqd) ix2oj != null && ix2oj['runWith']([0x1, g7epqd]);
        } });
    }, qepd7['downImg'] = function (me7rg, _ua1b, k8wymo) {
      k8wymo === void 0x0 && (k8wymo = '');var jixy8o = qepd7['wxdown']({ 'url': me7rg, 'success': function (kwr7mg) {
          kwr7mg['statusCode'] === 0xc8 && qepd7['copyFile'](kwr7mg['tempFilePath'], k8wymo, _ua1b);
        }, 'fail': function (c5ndf) {
          _ua1b != null && _ua1b['runWith']([0x1, c5ndf]);
        } });
    }, qepd7['copyFile'] = function (yjkoi8, mw8yko, ah1_ub) {
      var gdqfp = yjkoi8['split']('/'),
          jiyo2x = gdqfp[gdqfp['length'] - 0x1],
          iow8 = mw8yko['split']('?')[0x0],
          uh1ab = qepd7['getFileInfo'](mw8yko),
          j2oyxi = qepd7['getFileNativePath'](jiyo2x);qepd7['fs']['copyFile']({ 'srcPath': yjkoi8, 'destPath': j2oyxi, 'success': function (n5fcpd) {
          if (!uh1ab) qepd7['onSaveFile'](mw8yko, jiyo2x), ah1_ub != null && ah1_ub['runWith']([0x0]);else {
            if (uh1ab['readyUrl'] != mw8yko) qepd7['remove'](jiyo2x, mw8yko, ah1_ub);
          }
        }, 'fail': function (iyojx2) {
          ah1_ub != null && ah1_ub['runWith']([0x1, iyojx2]);
        } });
    }, qepd7['getFileNativePath'] = function (g7dp) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + g7dp;
    }, qepd7['remove'] = function (qdefp, sxjtz, qr7gm) {
      sxjtz === void 0x0 && (sxjtz = '');var g7wemr = qepd7['getFileInfo'](sxjtz),
          tvs0l3 = qepd7['getFileNativePath'](g7wemr['md5']);cdnpqf['loader']['clearRes'](g7wemr['readyUrl']), qepd7['fs']['unlink']({ 'filePath': tvs0l3, 'success': function (oi2xjy) {
          if (sxjtz != '') qepd7['onSaveFile'](sxjtz, qdefp);qr7gm != null && qr7gm['runWith']([0x0]);
        }, 'fail': function (k8owmy) {} });
    }, qepd7['onSaveFile'] = function (b41a9$, fhc6n5) {
      var fhc5n = b41a9$['split']('?')[0x0];qepd7['filesListObj'][fhc5n] = { 'md5': fhc6n5, 'readyUrl': b41a9$ }, qepd7['fs']['writeFile']({ 'filePath': qepd7['fileNativeDir'] + '/' + qepd7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qepd7['filesListObj']), 'success': function (qgdpe7) {
          console['log']('写入测试测试成功：', qgdpe7);
        }, 'fail': function (n_h56c) {
          console['log']('写入测试测试失败：', n_h56c);
        } });
    }, qepd7['existDir'] = function (zts3l, zt3s2x) {
      qepd7['fs']['mkdir']({ 'dirPath': zts3l, 'success': function (o8kmyw) {
          zt3s2x != null && zt3s2x['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (nc5dpf) {
          if (nc5dpf['errMsg']['indexOf']('file already exists') != -0x1) qepd7['readSync'](qepd7['fileListName'], 'utf8', zt3s2x);else zt3s2x != null && zt3s2x['runWith']([0x1, nc5dpf]);
        } });
    }, qepd7['readSync'] = function (m8ywrk, chn56_, t2zsx3, m7erqg) {
      chn56_ === void 0x0 && (chn56_ = 'ascill'), m7erqg === void 0x0 && (m7erqg = '');var oyw = qepd7['getFileNativePath'](m8ywrk),
          eqgdfp;try {
        eqgdfp = qepd7['fs']['readFileSync'](oyw), t2zsx3 != null && t2zsx3['runWith']([0x0, { 'data': eqgdfp }]);
      } catch (fch) {
        t2zsx3 != null && t2zsx3['runWith']([0x1]);
      }
    }, qepd7['readCache'] = function () {}, qepd7['writeCache'] = function (e7pqgd) {
      var wkr78m = readyUrl['split']('?')[0x0];qepd7['filesListObj'][wkr78m] = { 'md5': md5Name, 'readyUrl': readyUrl }, qepd7['fs']['writeFile']({ 'filePath': qepd7['fileNativeDir'] + '/' + qepd7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qepd7['filesListObj']), 'success': function (z3txs2) {}, 'fail': function (fndcpq) {} });
    }, qepd7['setNativeFileDir'] = function (fh56cn) {
      qepd7['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + fh56cn;
    }, qepd7['filesListObj'] = {}, qepd7['fileNativeDir'] = null, qepd7['fileListName'] = 'layaairfiles.txt', qepd7['ziyuFileData'] = {}, z3ts(qepd7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qepd7;
  }(_1auh),
      ah6_u = function ($a19b) {
    function dncfp() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], dncfp['__super']['call'](this), this['_sound'] = dncfp['_createSound']();
    }owi8ky(dncfp, 'laya.wx.mini.MiniSound', $a19b);var epg7qd = dncfp['prototype'];return epg7qd['load'] = function (emwrg) {
      var qrmge = this;emwrg = $91ab4['formatURL'](emwrg), this['url'] = emwrg;if (dncfp['_audioCache'][emwrg]) {
        this['event']('complete');return;
      }function deg7q() {
        if (dncfp['_null'] != undefined) qrmge['_sound']['onCanplay'](dncfp['_null']), qrmge['_sound']['onError'](dncfp['_null']);else try {
          qrmge['_sound']['onCanplay'](null), qrmge['_sound']['onError'](null), dncfp['_null'] = null;
        } catch (v3s0tl) {
          console['warn']('[wxmini] _clearSound:' + v3s0tl), qrmge['_sound']['onCanplay'](b$194), qrmge['_sound']['onError'](b$194), dncfp['_null'] = b$194;
        }
      }function t32sxz() {
        deg7q(), sz3tx['loaded'] = !![], sz3tx['event']('complete'), dncfp['_audioCache'][sz3tx['url']] = sz3tx;
      }function a$u_b(dqep7g) {
        console['error']('errCode=' + dqep7g['errCode'] + '  errMsg=' + dqep7g['errMsg']), deg7q(), sz3tx['event']('error');
      }function b$194() {}this['_sound']['onCanplay'](t32sxz), this['_sound']['onError'](a$u_b), this['_sound']['src'] = emwrg;var sz3tx = this;
    }, epg7qd['play'] = function (svl3t0, efdq) {
      svl3t0 === void 0x0 && (svl3t0 = 0x0), efdq === void 0x0 && (efdq = 0x0);var dfnqep;if (this['url'] == i8jyox['_tMusic']) {
        if (!dncfp['_musicAudio']) dncfp['_musicAudio'] = dncfp['_createSound']();dfnqep = dncfp['_musicAudio'];
      } else dfnqep = dncfp['_createSound']();dfnqep['src'] = this['url'];var $4a91b = new ge7mrw(dfnqep);return $4a91b['url'] = this['url'], $4a91b['loops'] = efdq, $4a91b['startTime'] = svl3t0, $4a91b['play'](), i8jyox['addChannel']($4a91b), $4a91b;
    }, epg7qd['dispose'] = function () {
      var rkmwg7 = dncfp['_audioCache'][this['url']];rkmwg7 && (rkmwg7['src'] = '', delete dncfp['_audioCache'][this['url']]);
    }, ijsz2x(0x0, epg7qd, 'duration', function () {
      return this['_sound']['duration'];
    }), dncfp['_createSound'] = function () {
      return dncfp['_id']++, cqdfp['window']['wx']['createInnerAudioContext']();
    }, dncfp['_musicAudio'] = null, dncfp['_id'] = 0x0, dncfp['_audioCache'] = {}, dncfp['_null'] = undefined, dncfp;
  }(_1auh),
      ge7mrw = function (owm8k) {
    function cpfn5($b9au1) {
      this['_audio'] = null, this['_onEnd'] = null, cpfn5['__super']['call'](this), this['_audio'] = $b9au1, this['_onEnd'] = sj2zx['bind'](this['__onEnd'], this), $b9au1['onEnded'](this['_onEnd']);
    }owi8ky(cpfn5, 'laya.wx.mini.MiniSoundChannel', owm8k);var fcdqn = cpfn5['prototype'];return fcdqn['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (cdnpqf['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, fcdqn['__onNull'] = function () {}, fcdqn['play'] = function () {
      this['isStopped'] = ![], i8jyox['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, fcdqn['stop'] = function () {
      this['isStopped'] = !![], i8jyox['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (cpfn5['_null'] != undefined) this['_audio']['onEnded'](cpfn5['_null']);else try {
        this['_audio']['onEnded'](null), cpfn5['_null'] = null;
      } catch (hfc6n5) {
        console['warn']('[wxmini] stop:' + hfc6n5), this['_audio']['onEnded'](sj2zx['bind'](this['__onNull'], this)), cpfn5['_null'] = sj2zx['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, fcdqn['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, fcdqn['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], i8jyox['addChannel'](this), this['_audio']['play']();
    }, ijsz2x(0x0, fcdqn, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ijsz2x(0x0, fcdqn, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ijsz2x(0x0, fcdqn, 'volume', function () {
      return 0x1;
    }, function (tv03) {}), cpfn5['_null'] = undefined, cpfn5;
  }(h_5u);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var nfp5 in Laya) {
    var _5cn6h = Laya[nfp5];_5cn6h && _5cn6h['__isclass'] && (exports[nfp5] = _5cn6h);
  }
});