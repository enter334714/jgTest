var m = wx.$g;
(function (window, document, z4d2o) {
  var _4ft3 = z4d2o['un'],
      w1yekh = z4d2o['uns'],
      pf_0 = z4d2o['static'],
      lcs8q = z4d2o['class'],
      svg7cq = z4d2o['getset'],
      axhw1k = z4d2o['__newvec'],
      muj$r6 = laya['utils']['Browser'],
      jd26z = laya['events']['Event'],
      tfb_ = laya['events']['EventDispatcher'],
      p0t4f = laya['resource']['HTMLImage'],
      b0i5pa = laya['utils']['Handler'],
      qvy7e = laya['display']['Input'],
      zodt = laya['net']['Loader'],
      ekvw = laya['maths']['Matrix'],
      drz26o = laya['renders']['Render'],
      c8qls = laya['utils']['RunDriver'],
      i51a = laya['media']['Sound'],
      pf4t_0 = laya['media']['SoundChannel'],
      do4tf = laya['media']['SoundManager'],
      b0a5ip = laya['display']['Stage'],
      pbia5 = laya['net']['URL'],
      ih1ax5 = laya['utils']['Utils'],
      zdo3t = function () {
    function y1k() {}return lcs8q(y1k, 'laya.wx.mini.MiniAdpter'), y1k['getJson'] = function (ekyv) {
      return JSON['parse'](ekyv);
    }, y1k['init'] = function (qvce, ekw7vy) {
      qvce === void 0x0 && (qvce = ![]), ekw7vy === void 0x0 && (ekw7vy = ![]);if (y1k['_inited']) return;y1k['window'] = window;if (y1k['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;y1k['_inited'] = !![], y1k['isZiYu'] = ekw7vy, y1k['isPosMsgYu'] = qvce, y1k['EnvConfig'] = {}, !y1k['isZiYu'] && (o423zd['setNativeFileDir']('/layaairGame'), o423zd['existDir'](o423zd['fileNativeDir'], b0i5pa['create'](y1k, y1k['onMkdirCallBack']))), y1k['window']['focus'] = function () {}, z4d2o['getUrlPath'] = function () {}, y1k['window']['logtime'] = function (o34t) {}, y1k['window']['alertTimeLog'] = function (qsc7vg) {}, y1k['window']['resetShareInfo'] = function () {}, y1k['window']['CanvasRenderingContext2D'] = function () {}, y1k['window']['CanvasRenderingContext2D']['prototype'] = y1k['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], y1k['window']['document']['body']['appendChild'] = function () {}, y1k['EnvConfig']['pixelRatioInt'] = 0x0, c8qls['getPixelRatio'] = y1k['pixelRatio'], y1k['_preCreateElement'] = muj$r6['createElement'], muj$r6['createElement'] = y1k['createElement'], c8qls['createShaderCondition'] = y1k['createShaderCondition'], ih1ax5['parseXMLFromString'] = y1k['parseXMLFromString'], qvy7e['_createInputElement'] = egqvc['_createInputElement'], y1k['EnvConfig']['load'] = zodt['prototype']['load'], zodt['prototype']['load'] = qce7gv['prototype']['load'], y1k['isZiYu'] && qvce && wx['onMessage'](function (f_5pb0) {
        f_5pb0['isLoad'] && (o423zd['ziyuFileData'][f_5pb0['url']] = f_5pb0['data']);
      });
    }, y1k['onMkdirCallBack'] = function (cvsqg, hxak1) {
      if (!cvsqg) o423zd['filesListObj'] = JSON['parse'](hxak1['data']);
    }, y1k['pixelRatio'] = function () {
      if (!y1k['EnvConfig']['pixelRatioInt']) try {
        var lscg = wx['getSystemInfoSync']();return y1k['EnvConfig']['pixelRatioInt'] = lscg['pixelRatio'], lscg = lscg, lscg['pixelRatio'];
      } catch (abi5x) {}return y1k['EnvConfig']['pixelRatioInt'];
    }, y1k['createElement'] = function (dfto) {
      if (dfto == 'canvas') {
        var t3f_;return y1k['idx'] == 0x1 ? y1k['isZiYu'] ? (t3f_ = sharedCanvas, t3f_['style'] = {}) : t3f_ = window['canvas'] : t3f_ = window['wx']['createCanvas'](), y1k['idx']++, t3f_;
      } else {
        if (dfto == 'textarea' || dfto == 'input') return y1k['onCreateInput'](dfto);else {
          if (dfto == 'div') {
            var r$6uj2 = y1k['_preCreateElement'](dfto);return r$6uj2['contains'] = function (od4z3) {
              return null;
            }, r$6uj2['removeChild'] = function (vye7w) {}, r$6uj2;
          } else return y1k['_preCreateElement'](dfto);
        }
      }
    }, y1k['onCreateInput'] = function (jr$6m) {
      var ke1vy = y1k['_preCreateElement'](jr$6m);return ke1vy['focus'] = egqvc['wxinputFocus'], ke1vy['blur'] = egqvc['wxinputblur'], ke1vy['style'] = {}, ke1vy['value'] = 0x0, ke1vy['parentElement'] = {}, ke1vy['placeholder'] = {}, ke1vy['type'] = {}, ke1vy['setColor'] = function (tfo_43) {}, ke1vy['setType'] = function (pf_tb) {}, ke1vy['setFontFace'] = function (ah5i) {}, ke1vy['addEventListener'] = function (hy1ekw) {}, ke1vy['contains'] = function (wkyx1) {
        return null;
      }, ke1vy['removeChild'] = function (pbi5ax) {}, ke1vy;
    }, y1k['createShaderCondition'] = function (df3) {
      var lgs8c9 = this,
          oz4t3d = function () {
        var ykhwe1 = df3;return lgs8c9[df3['replace']('this.', '')];
      };return oz4t3d;
    }, y1k['EnvConfig'] = null, y1k['window'] = null, y1k['_preCreateElement'] = null, y1k['_inited'] = ![], y1k['wxRequest'] = null, y1k['systemInfo'] = null, y1k['version'] = '0.0.1', y1k['isZiYu'] = ![], y1k['isPosMsgYu'] = ![], y1k['parseXMLFromString'] = function (x5ip) {
      var p5baix, gsvcq7;x5ip = x5ip['replace'](/>\s+</g, '><');try {
        p5baix = new window['Parser']['DOMParser']()['parseFromString'](x5ip, 'text/xml');
      } catch (keyh1w) {
        throw '需要引入xml解析库文件';
      }return p5baix;
    }, y1k['idx'] = 0x1, y1k;
  }(),
      hw1yxk = function () {
    function t03f4_() {}lcs8q(t03f4_, 'laya.wx.mini.MiniImage');var jzrd62 = t03f4_['prototype'];return jzrd62['_loadImage'] = function (i5p_b0) {
      var f_o34 = this,
          c8qgl = ![];i5p_b0['indexOf']('layaNativeDir/') == -0x1 && (c8qgl = !![], i5p_b0 = pbia5['formatURL'](i5p_b0));if (!o423zd['getFileInfo'](i5p_b0)) {
        if (i5p_b0['indexOf']('http://') != -0x1 || i5p_b0['indexOf']('https://') != -0x1) o423zd['downImg'](i5p_b0, new b0i5pa(t03f4_, t03f4_['onDownImgCallBack'], [i5p_b0, f_o34]), i5p_b0);else t03f4_['onCreateImage'](i5p_b0, f_o34, !![]);
      } else t03f4_['onCreateImage'](i5p_b0, f_o34, !c8qgl);
    }, t03f4_['onDownImgCallBack'] = function (vg7yqe, xaihb5, bip5a0) {
      if (!bip5a0) t03f4_['onCreateImage'](vg7yqe, xaihb5);else xaihb5['onError'](null);
    }, t03f4_['onCreateImage'] = function (e7gq, xia5, _04pf) {
      _04pf === void 0x0 && (_04pf = ![]);var e1yhwk;if (!_04pf) {
        var egv7qc = o423zd['getFileInfo'](e7gq),
            zodr62 = egv7qc['md5'];e1yhwk = o423zd['getFileNativePath'](zodr62);
      } else e1yhwk = e7gq;if (xia5['imgCache'] == null) xia5['imgCache'] = {};var cgvq7e;function yv1ewk() {
        cgvq7e['onload'] = null, cgvq7e['onerror'] = null, delete xia5['imgCache'][e7gq];
      };var qyw = function () {
        yv1ewk(), xia5['onLoaded'](cgvq7e);
      },
          he1kyw = function () {
        yv1ewk(), xia5['event']('error', 'Load image failed');
      };xia5['_type'] == 'nativeimage' ? (cgvq7e = new muj$r6['window']['Image'](), cgvq7e['crossOrigin'] = '', cgvq7e['onload'] = qyw, cgvq7e['onerror'] = he1kyw, cgvq7e['src'] = e1yhwk, xia5['imgCache'][e7gq] = cgvq7e) : new p0t4f['create'](e1yhwk, { 'onload': qyw, 'onerror': he1kyw, 'onCreate': function (yke1wv) {
          cgvq7e = yke1wv, xia5['imgCache'][e7gq] = yke1wv;
        } });
    }, t03f4_;
  }(),
      egqvc = function () {
    function awkhx1() {}return lcs8q(awkhx1, 'laya.wx.mini.MiniInput'), awkhx1['_createInputElement'] = function () {
      qvy7e['_initInput'](qvy7e['area'] = muj$r6['createElement']('textarea')), qvy7e['_initInput'](qvy7e['input'] = muj$r6['createElement']('input')), qvy7e['inputContainer'] = muj$r6['createElement']('div'), qvy7e['inputContainer']['style']['position'] = 'absolute', qvy7e['inputContainer']['style']['zIndex'] = 0x186a0, muj$r6['container']['appendChild'](qvy7e['inputContainer']), qvy7e['inputContainer']['setPos'] = function (e7vwy, pfb5_0) {
        qvy7e['inputContainer']['style']['left'] = e7vwy + 'px', qvy7e['inputContainer']['style']['top'] = pfb5_0 + 'px';
      }, z4d2o['stage']['on']('resize', null, awkhx1['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (akhxi1) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), do4tf['_soundClass'] = d2or6, do4tf['_musicClass'] = d2or6;
    }, awkhx1['_onStageResize'] = function () {
      var rzd6o = z4d2o['stage']['_canvasTransform']['identity']();rzd6o['scale'](muj$r6['width'] / drz26o['canvas']['width'] / c8qls['getPixelRatio'](), muj$r6['height'] / drz26o['canvas']['height'] / c8qls['getPixelRatio']());
    }, awkhx1['wxinputFocus'] = function (p50_b) {
      var xapi5 = qvy7e['inputElement']['target'];if (xapi5 && !xapi5['editable']) return;zdo3t['window']['wx']['offKeyboardConfirm'](), zdo3t['window']['wx']['offKeyboardInput'](), zdo3t['window']['wx']['showKeyboard']({ 'defaultValue': xapi5['text'], 'maxLength': xapi5['maxChars'], 'multiple': xapi5['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (v7ywq) {}, 'fail': function (i15x) {} }), zdo3t['window']['wx']['onKeyboardConfirm'](function (p5ixab) {
        var t3_f0 = p5ixab ? p5ixab['value'] : '';xapi5['text'] = t3_f0, xapi5['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), zdo3t['window']['wx']['onKeyboardInput'](function (cqg78) {
        var iapxb = cqg78 ? cqg78['value'] : '';if (!xapi5['multiline']) {
          if (iapxb['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }xapi5['text'] = iapxb, xapi5['event']('input');
      });
    }, awkhx1['inputEnter'] = function () {
      qvy7e['inputElement']['target']['focus'] = ![];
    }, awkhx1['wxinputblur'] = function () {
      awkhx1['hideKeyboard']();
    }, awkhx1['hideKeyboard'] = function () {
      zdo3t['window']['wx']['offKeyboardConfirm'](), zdo3t['window']['wx']['offKeyboardInput'](), zdo3t['window']['wx']['hideKeyboard']({ 'success': function (o4d3z2) {
          console['log']('隐藏键盘');
        }, 'fail': function (kw1eyh) {
          console['log']('隐藏键盘出错:' + (kw1eyh ? kw1eyh['errMsg'] : ''));
        } });
    }, awkhx1;
  }(),
      qce7gv = function () {
    function t3doz() {}lcs8q(t3doz, 'laya.wx.mini.MiniLoader');var q7wyev = t3doz['prototype'];return q7wyev['load'] = function (cq7vsg, ofdt43, weyv, hxaki1, khyw1e) {
      weyv === void 0x0 && (weyv = !![]), khyw1e === void 0x0 && (khyw1e = ![]);var xaih1k = this;xaih1k['_url'] = cq7vsg;if (cq7vsg['indexOf']('data:image') === 0x0) xaih1k['_type'] = ofdt43 = 'image';else xaih1k['_type'] = ofdt43 || (ofdt43 = xaih1k['getTypeFromUrl'](cq7vsg));xaih1k['_cache'] = weyv, xaih1k['_data'] = null;var $6urjm = 'ascii';if (cq7vsg['indexOf']('.fnt') != -0x1) $6urjm = 'utf8';else ofdt43 == 'arraybuffer' && ($6urjm = '');;var x5iab = ih1ax5['getFileExtension'](cq7vsg);if (t3doz['_fileTypeArr']['indexOf'](x5iab) != -0x1) zdo3t['EnvConfig']['load']['call'](this, cq7vsg, ofdt43, weyv, hxaki1, khyw1e);else {
        if (!o423zd['getFileInfo'](cq7vsg)) {
          if (cq7vsg['indexOf']('layaNativeDir/') != -0x1) {
            if (zdo3t['isZiYu']) {
              var bpa0i5 = o423zd['ziyuFileData'][cq7vsg];xaih1k['onLoaded'](bpa0i5);return;
            } else {
              cosnole['log']('read read'), o423zd['read'](cq7vsg, $6urjm, new b0i5pa(t3doz, t3doz['onReadNativeCallBack'], [$6urjm, cq7vsg, ofdt43, weyv, hxaki1, khyw1e, xaih1k]));return;
            }
          }if (pbia5['rootPath'] == '') var cqvgs7 = cq7vsg;else cqvgs7 = cq7vsg['split'](pbia5['rootPath'])[0x0];cq7vsg['indexOf']('http://') != -0x1 || cq7vsg['indexOf']('https://') != -0x1 ? zdo3t['EnvConfig']['load']['call'](xaih1k, cq7vsg, ofdt43, weyv, hxaki1, khyw1e) : o423zd['readFile'](cqvgs7, $6urjm, new b0i5pa(t3doz, t3doz['onReadNativeCallBack'], [$6urjm, cq7vsg, ofdt43, weyv, hxaki1, khyw1e, xaih1k]), cq7vsg);
        } else zdo3t['EnvConfig']['load']['call'](this, cq7vsg, ofdt43, weyv, hxaki1, khyw1e);
      }
    }, q7wyev['resMgrLoad'] = function (zdo3, odrz2, c9g8, p0aib5, aix5p, cgsl8q, hwkxa1) {
      c9g8 === void 0x0 && (c9g8 = 0x0), p0aib5 === void 0x0 && (p0aib5 = ![]), aix5p === void 0x0 && (aix5p = ![]), cgsl8q === void 0x0 && (cgsl8q = 0x0), hwkxa1 === void 0x0 && (hwkxa1 = 0x3), zdo3['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zdo3), zdo3t['EnvConfig']['resMgrLoad'](zdo3, (evyqw, bi0a5p, hkx1y) => {
        t3doz['prototype']['resMgrLoadCallBack'](evyqw, bi0a5p, hkx1y, odrz2);
      }, c9g8, p0aib5, aix5p, cgsl8q, hwkxa1);
    }, q7wyev['resMgrLoadCallBack'] = function (xia1k, zd324, h1ax5, wvqe7) {
      console['log']('buff:::', xia1k, h1ax5, o423zd['fileNativeDir'] + '///' + o423zd['fileListName']), wvqe7(xia1k, zd324, h1ax5);
    }, q7wyev['clearRes'] = function (ey7wkv, iax1) {
      iax1 === void 0x0 && (iax1 = ![]);var ih5a1x = this;ih5a1x['clearRes'](ey7wkv, iax1);var v7e = o423zd['getFileInfo'](ey7wkv);if (v7e && (ey7wkv['indexOf']('http://') != -0x1 || ey7wkv['indexOf']('https://') != -0x1)) {
        var glq8cs = v7e['md5'],
            hkaxi1 = o423zd['getFileNativePath'](glq8cs);o423zd['remove'](hkaxi1);
      }
    }, t3doz['onReadNativeCallBack'] = function (ehw, wqyv7e, s9l8gc, o342d, sg8qlc, m$j6ru, k7ye, $r6zj2, gc7vs) {
      o342d === void 0x0 && (o342d = !![]), m$j6ru === void 0x0 && (m$j6ru = ![]), $r6zj2 === void 0x0 && ($r6zj2 = 0x0);if (!$r6zj2) {
        var j6r$m;if (s9l8gc == 'json' || s9l8gc == 'atlas') j6r$m = zdo3t['getJson'](gc7vs['data']);else s9l8gc == 'xml' ? j6r$m = ih1ax5['parseXMLFromString'](gc7vs['data']) : j6r$m = gc7vs['data'];k7ye['onLoaded'](j6r$m), !zdo3t['isZiYu'] && zdo3t['isPosMsgYu'] && s9l8gc != 'arraybuffer' && wx['postMessage']({ 'url': wqyv7e, 'data': j6r$m, 'isLoad': !![] });
      } else $r6zj2 == 0x1 && zdo3t['EnvConfig']['load']['call'](k7ye, wqyv7e, s9l8gc, o342d, sg8qlc, m$j6ru);
    }, pf_0(t3doz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), t3doz;
  }(),
      o423zd = function (xi5pa) {
    function x5haib() {
      x5haib['__super']['call'](this);;
    }return lcs8q(x5haib, 'laya.wx.mini.MiniFileMgr', xi5pa), x5haib['isLoadFile'] = function (r62j$u) {
      return x5haib['_fileTypeArr']['indexOf'](r62j$u) != -0x1 ? !![] : ![];
    }, x5haib['getFileInfo'] = function (z6d23o) {
      var jmur$ = z6d23o['split']('?')[0x0],
          ju2$r6 = x5haib['filesListObj'][jmur$];if (ju2$r6 == null) return null;else return ju2$r6;return null;
    }, x5haib['onFileUpdate'] = function (dz4t, a5bxi) {
      var khx1y = dz4t['split']('/'),
          f_43o = khx1y[khx1y['length'] - 0x1],
          yegvq7 = x5haib['getFileInfo'](a5bxi);if (yegvq7 == null) x5haib['onSaveFile'](a5bxi, f_43o);else {
        if (yegvq7['readyUrl'] != a5bxi) x5haib['remove'](f_43o, a5bxi);
      }
    }, x5haib['exits'] = function (g7yevq, bp_5i0) {
      var xh51ia = x5haib['getFileNativePath'](g7yevq);x5haib['fs']['getFileInfo']({ 'filePath': xh51ia, 'success': function (ey1kv) {
          bp_5i0 != null && bp_5i0['runWith']([0x0, ey1kv]);
        }, 'fail': function (r6o2zd) {
          bp_5i0 != null && bp_5i0['runWith']([0x1, r6o2zd]);
        } });
    }, x5haib['read'] = function (s7vcqg, u$6, ih5ba, b5hiax) {
      u$6 === void 0x0 && (u$6 = 'ascill'), b5hiax === void 0x0 && (b5hiax = '');var dzot34;b5hiax != '' ? dzot34 = x5haib['getFileNativePath'](s7vcqg) : dzot34 = s7vcqg, x5haib['fs']['readFile']({ 'filePath': dzot34, 'encoding': u$6, 'success': function (ru6mj) {
          ih5ba != null && ih5ba['runWith']([0x0, ru6mj]);
        }, 'fail': function (fdt34) {
          if (fdt34 && b5hiax != '') x5haib['down'](b5hiax, u$6, ih5ba, b5hiax);else ih5ba != null && ih5ba['runWith']([0x1]);
        } });
    }, x5haib['readNativeFile'] = function (rj2$z6, b_50i) {
      x5haib['fs']['readFile']({ 'filePath': rj2$z6, 'encoding': '', 'success': function (z43o) {
          b_50i != null && b_50i['runWith']([0x0]);
        }, 'fail': function (ywh1k) {
          b_50i != null && b_50i['runWith']([0x1]);
        } });
    }, x5haib['down'] = function (cqs7gv, evyw1, ft4od, xaibp) {
      evyw1 === void 0x0 && (evyw1 = 'ascill'), xaibp === void 0x0 && (xaibp = '');var r$6zj = x5haib['getFileNativePath'](xaibp),
          x5pbi = x5haib['wxdown']({ 'url': cqs7gv, 'filePath': r$6zj, 'success': function (dtfo) {
          if (dtfo['statusCode'] === 0xc8) x5haib['readFile'](dtfo['filePath'], evyw1, ft4od, xaibp);
        }, 'fail': function (kwhy1x) {
          ft4od != null && ft4od['runWith']([0x1, kwhy1x]);
        } });x5pbi['onProgressUpdate'](function (vgcsq7) {
        ft4od != null && ft4od['runWith']([0x2, vgcsq7['progress']]);
      });
    }, x5haib['readFile'] = function (we1, l98gc, a5xpb, xwhky1) {
      l98gc === void 0x0 && (l98gc = 'ascill'), xwhky1 === void 0x0 && (xwhky1 = ''), x5haib['fs']['readFile']({ 'filePath': we1, 'encoding': l98gc, 'success': function (ord6z) {
          if (we1['indexOf']('http://') != -0x1 || we1['indexOf']('https://') != -0x1) x5haib['onFileUpdate'](we1, xwhky1);a5xpb != null && a5xpb['runWith']([0x0, ord6z]);
        }, 'fail': function (otdz4) {
          if (otdz4) a5xpb != null && a5xpb['runWith']([0x1, otdz4]);
        } });
    }, x5haib['downImg'] = function (egv7q, ls8c, lscqg) {
      lscqg === void 0x0 && (lscqg = '');var i50ab = x5haib['wxdown']({ 'url': egv7q, 'success': function (w1xkha) {
          w1xkha['statusCode'] === 0xc8 && x5haib['copyFile'](w1xkha['tempFilePath'], lscqg, ls8c);
        }, 'fail': function (xbpai) {
          ls8c != null && ls8c['runWith']([0x1, xbpai]);
        } });
    }, x5haib['copyFile'] = function (i0bpa5, dj62rz, _5fp0) {
      var qvsg7 = i0bpa5['split']('/'),
          zd2or6 = qvsg7[qvsg7['length'] - 0x1],
          t0fb = dj62rz['split']('?')[0x0],
          z6o2 = x5haib['getFileInfo'](dj62rz),
          v7wky = x5haib['getFileNativePath'](zd2or6);x5haib['fs']['copyFile']({ 'srcPath': i0bpa5, 'destPath': v7wky, 'success': function (ozd42) {
          if (!z6o2) x5haib['onSaveFile'](dj62rz, zd2or6), _5fp0 != null && _5fp0['runWith']([0x0]);else {
            if (z6o2['readyUrl'] != dj62rz) x5haib['remove'](zd2or6, dj62rz, _5fp0);
          }
        }, 'fail': function (p_ft40) {
          _5fp0 != null && _5fp0['runWith']([0x1, p_ft40]);
        } });
    }, x5haib['getFileNativePath'] = function (ikx1ha) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ikx1ha;
    }, x5haib['remove'] = function (u6rjm, ke7vyw, ve7cg) {
      ke7vyw === void 0x0 && (ke7vyw = '');var sq7cg = x5haib['getFileInfo'](ke7vyw),
          f3d = x5haib['getFileNativePath'](sq7cg['md5']);z4d2o['loader']['clearRes'](sq7cg['readyUrl']), x5haib['fs']['unlink']({ 'filePath': f3d, 'success': function (xhba) {
          if (ke7vyw != '') x5haib['onSaveFile'](ke7vyw, u6rjm);ve7cg != null && ve7cg['runWith']([0x0]);
        }, 'fail': function (ftod4) {} });
    }, x5haib['onSaveFile'] = function (q7v, eq7yvg) {
      var lsg89 = q7v['split']('?')[0x0];x5haib['filesListObj'][lsg89] = { 'md5': eq7yvg, 'readyUrl': q7v }, x5haib['fs']['writeFile']({ 'filePath': x5haib['fileNativeDir'] + '/' + x5haib['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](x5haib['filesListObj']), 'success': function (y1kew) {
          console['log']('写入测试测试成功：', y1kew);
        }, 'fail': function (c8g) {
          console['log']('写入测试测试失败：', c8g);
        } });
    }, x5haib['existDir'] = function (qecgv7, a5bixp) {
      x5haib['fs']['mkdir']({ 'dirPath': qecgv7, 'success': function (kixh1) {
          a5bixp != null && a5bixp['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (xwyhk) {
          if (xwyhk['errMsg']['indexOf']('file already exists') != -0x1) x5haib['readSync'](x5haib['fileListName'], 'utf8', a5bixp);else a5bixp != null && a5bixp['runWith']([0x1, xwyhk]);
        } });
    }, x5haib['readSync'] = function (weqy, ot4zd3, v7ge, g7scvq) {
      ot4zd3 === void 0x0 && (ot4zd3 = 'ascill'), g7scvq === void 0x0 && (g7scvq = '');var lsgc98 = x5haib['getFileNativePath'](weqy),
          ax1hi;try {
        ax1hi = x5haib['fs']['readFileSync'](lsgc98), v7ge != null && v7ge['runWith']([0x0, { 'data': ax1hi }]);
      } catch (gscl9) {
        v7ge != null && v7ge['runWith']([0x1]);
      }
    }, x5haib['readCache'] = function () {}, x5haib['writeCache'] = function (otf3) {
      var jur$6 = readyUrl['split']('?')[0x0];x5haib['filesListObj'][jur$6] = { 'md5': md5Name, 'readyUrl': readyUrl }, x5haib['fs']['writeFile']({ 'filePath': x5haib['fileNativeDir'] + '/' + x5haib['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](x5haib['filesListObj']), 'success': function (z632) {}, 'fail': function (bp0f5_) {} });
    }, x5haib['setNativeFileDir'] = function (ru2j6) {
      x5haib['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ru2j6;
    }, x5haib['filesListObj'] = {}, x5haib['fileNativeDir'] = null, x5haib['fileListName'] = 'layaairfiles.txt', x5haib['ziyuFileData'] = {}, pf_0(x5haib, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), x5haib;
  }(tfb_),
      d2or6 = function (q8gl) {
    function t0f_pb() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], t0f_pb['__super']['call'](this), this['_sound'] = t0f_pb['_createSound']();
    }lcs8q(t0f_pb, 'laya.wx.mini.MiniSound', q8gl);var otfd = t0f_pb['prototype'];return otfd['load'] = function (_5pbi0) {
      var ro26 = this;_5pbi0 = pbia5['formatURL'](_5pbi0), this['url'] = _5pbi0;if (t0f_pb['_audioCache'][_5pbi0]) {
        this['event']('complete');return;
      }function zj6rd() {
        if (t0f_pb['_null'] != undefined) ro26['_sound']['onCanplay'](t0f_pb['_null']), ro26['_sound']['onError'](t0f_pb['_null']);else try {
          ro26['_sound']['onCanplay'](null), ro26['_sound']['onError'](null), t0f_pb['_null'] = null;
        } catch (kwyx) {
          console['warn']('[wxmini] _clearSound:' + kwyx), ro26['_sound']['onCanplay'](d6z2jr), ro26['_sound']['onError'](d6z2jr), t0f_pb['_null'] = d6z2jr;
        }
      }function r$62jz() {
        zj6rd(), hakw1x['loaded'] = !![], hakw1x['event']('complete'), t0f_pb['_audioCache'][hakw1x['url']] = hakw1x;
      }function v7sc(z324d) {
        console['error']('errCode=' + z324d['errCode'] + '  errMsg=' + z324d['errMsg']), zj6rd(), hakw1x['event']('error');
      }function d6z2jr() {}this['_sound']['onCanplay'](r$62jz), this['_sound']['onError'](v7sc), this['_sound']['src'] = _5pbi0;var hakw1x = this;
    }, otfd['play'] = function (f0t_4, eqw) {
      f0t_4 === void 0x0 && (f0t_4 = 0x0), eqw === void 0x0 && (eqw = 0x0);var u6r$;if (this['url'] == do4tf['_tMusic']) {
        if (!t0f_pb['_musicAudio']) t0f_pb['_musicAudio'] = t0f_pb['_createSound']();u6r$ = t0f_pb['_musicAudio'];
      } else u6r$ = t0f_pb['_createSound']();u6r$['src'] = this['url'];var xka = new lqc8sg(u6r$);return xka['url'] = this['url'], xka['loops'] = eqw, xka['startTime'] = f0t_4, xka['play'](), do4tf['addChannel'](xka), xka;
    }, otfd['dispose'] = function () {
      var bixh5a = t0f_pb['_audioCache'][this['url']];bixh5a && (bixh5a['src'] = '', delete t0f_pb['_audioCache'][this['url']]);
    }, svg7cq(0x0, otfd, 'duration', function () {
      return this['_sound']['duration'];
    }), t0f_pb['_createSound'] = function () {
      return t0f_pb['_id']++, zdo3t['window']['wx']['createInnerAudioContext']();
    }, t0f_pb['_musicAudio'] = null, t0f_pb['_id'] = 0x0, t0f_pb['_audioCache'] = {}, t0f_pb['_null'] = undefined, t0f_pb;
  }(tfb_),
      lqc8sg = function (odz2r6) {
    function d342z(wax) {
      this['_audio'] = null, this['_onEnd'] = null, d342z['__super']['call'](this), this['_audio'] = wax, this['_onEnd'] = ih1ax5['bind'](this['__onEnd'], this), wax['onEnded'](this['_onEnd']);
    }lcs8q(d342z, 'laya.wx.mini.MiniSoundChannel', odz2r6);var scl98g = d342z['prototype'];return scl98g['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (z4d2o['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, scl98g['__onNull'] = function () {}, scl98g['play'] = function () {
      this['isStopped'] = ![], do4tf['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, scl98g['stop'] = function () {
      this['isStopped'] = !![], do4tf['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (d342z['_null'] != undefined) this['_audio']['onEnded'](d342z['_null']);else try {
        this['_audio']['onEnded'](null), d342z['_null'] = null;
      } catch (a0bp5) {
        console['warn']('[wxmini] stop:' + a0bp5), this['_audio']['onEnded'](ih1ax5['bind'](this['__onNull'], this)), d342z['_null'] = ih1ax5['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, scl98g['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, scl98g['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], do4tf['addChannel'](this), this['_audio']['play']();
    }, svg7cq(0x0, scl98g, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), svg7cq(0x0, scl98g, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), svg7cq(0x0, scl98g, 'volume', function () {
      return 0x1;
    }, function (h1yek) {}), d342z['_null'] = undefined, d342z;
  }(pf4t_0);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var p0i5_b in Laya) {
    var s7qcg = Laya[p0i5_b];s7qcg && s7qcg['__isclass'] && (exports[p0i5_b] = s7qcg);
  }
});