var O = wx.$C;
(function (window, document, mcot5l) {
  var hq0dxw = mcot5l['un'],
      p8r$uc = mcot5l['uns'],
      w17x0q = mcot5l['static'],
      q0dhw = mcot5l['class'],
      rz9j8 = mcot5l['getset'],
      q0hx7w = mcot5l['__newvec'],
      z8$j = laya['utils']['Browser'],
      gnf_4v = laya['events']['Event'],
      vgnsf = laya['events']['EventDispatcher'],
      copl = laya['resource']['HTMLImage'],
      cl5pou = laya['utils']['Handler'],
      $u98rz = laya['display']['Input'],
      $c8upr = laya['net']['Loader'],
      ltc = laya['maths']['Matrix'],
      _n6asy = laya['renders']['Render'],
      nvgy_ = laya['utils']['RunDriver'],
      d9zr8 = laya['media']['Sound'],
      xq1473 = laya['media']['SoundChannel'],
      xh0qwd = laya['media']['SoundManager'],
      f13g = laya['display']['Stage'],
      q73x14 = laya['net']['URL'],
      v3gf1 = laya['utils']['Utils'],
      vn_4 = function () {
    function qf1347() {}return q0dhw(qf1347, 'laya.wx.mini.MiniAdpter'), qf1347['getJson'] = function (eb6a) {
      return JSON['parse'](eb6a);
    }, qf1347['init'] = function (z9hjd, nayvs_) {
      z9hjd === void 0x0 && (z9hjd = ![]), nayvs_ === void 0x0 && (nayvs_ = ![]);if (qf1347['_inited']) return;qf1347['window'] = window;if (qf1347['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;qf1347['_inited'] = !![], qf1347['isZiYu'] = nayvs_, qf1347['isPosMsgYu'] = z9hjd, qf1347['EnvConfig'] = {}, !qf1347['isZiYu'] && (zjdw9['setNativeFileDir']('/layaairGame'), zjdw9['existDir'](zjdw9['fileNativeDir'], cl5pou['create'](qf1347, qf1347['onMkdirCallBack']))), qf1347['window']['focus'] = function () {}, mcot5l['getUrlPath'] = function () {}, qf1347['window']['logtime'] = function (vsgy_) {}, qf1347['window']['alertTimeLog'] = function (ygvs) {}, qf1347['window']['resetShareInfo'] = function () {}, qf1347['window']['CanvasRenderingContext2D'] = function () {}, qf1347['window']['CanvasRenderingContext2D']['prototype'] = qf1347['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qf1347['window']['document']['body']['appendChild'] = function () {}, qf1347['EnvConfig']['pixelRatioInt'] = 0x0, nvgy_['getPixelRatio'] = qf1347['pixelRatio'], qf1347['_preCreateElement'] = z8$j['createElement'], z8$j['createElement'] = qf1347['createElement'], nvgy_['createShaderCondition'] = qf1347['createShaderCondition'], v3gf1['parseXMLFromString'] = qf1347['parseXMLFromString'], $u98rz['_createInputElement'] = m5o['_createInputElement'], qf1347['EnvConfig']['load'] = $c8upr['prototype']['load'], $c8upr['prototype']['load'] = a6nsy['prototype']['load'], qf1347['isZiYu'] && z9hjd && wx['onMessage'](function (ltcmo) {
        ltcmo['isLoad'] && (zjdw9['ziyuFileData'][ltcmo['url']] = ltcmo['data']);
      });
    }, qf1347['onMkdirCallBack'] = function (yav_sn, k5olt) {
      if (!yav_sn) zjdw9['filesListObj'] = JSON['parse'](k5olt['data']);
    }, qf1347['pixelRatio'] = function () {
      if (!qf1347['EnvConfig']['pixelRatioInt']) try {
        var tpoc5l = wx['getSystemInfoSync']();return qf1347['EnvConfig']['pixelRatioInt'] = tpoc5l['pixelRatio'], tpoc5l = tpoc5l, tpoc5l['pixelRatio'];
      } catch (v_nsy) {}return qf1347['EnvConfig']['pixelRatioInt'];
    }, qf1347['createElement'] = function (dr8j9) {
      if (dr8j9 == 'canvas') {
        var fq74;return qf1347['idx'] == 0x1 ? qf1347['isZiYu'] ? (fq74 = sharedCanvas, fq74['style'] = {}) : fq74 = window['canvas'] : fq74 = window['wx']['createCanvas'](), qf1347['idx']++, fq74;
      } else {
        if (dr8j9 == 'textarea' || dr8j9 == 'input') return qf1347['onCreateInput'](dr8j9);else {
          if (dr8j9 == 'div') {
            var aie26b = qf1347['_preCreateElement'](dr8j9);return aie26b['contains'] = function (t5clop) {
              return null;
            }, aie26b['removeChild'] = function (xwqdh) {}, aie26b;
          } else return qf1347['_preCreateElement'](dr8j9);
        }
      }
    }, qf1347['onCreateInput'] = function (_gvsnf) {
      var hxwqd = qf1347['_preCreateElement'](_gvsnf);return hxwqd['focus'] = m5o['wxinputFocus'], hxwqd['blur'] = m5o['wxinputblur'], hxwqd['style'] = {}, hxwqd['value'] = 0x0, hxwqd['parentElement'] = {}, hxwqd['placeholder'] = {}, hxwqd['type'] = {}, hxwqd['setColor'] = function (cml5to) {}, hxwqd['setType'] = function (vg3_4) {}, hxwqd['setFontFace'] = function (lpuc8$) {}, hxwqd['addEventListener'] = function (lom5t) {}, hxwqd['contains'] = function (olkt) {
        return null;
      }, hxwqd['removeChild'] = function (x0173) {}, hxwqd;
    }, qf1347['createShaderCondition'] = function (xhjdw) {
      var pur8c = this,
          x7 = function () {
        var vgf_s = xhjdw;return pur8c[xhjdw['replace']('this.', '')];
      };return x7;
    }, qf1347['EnvConfig'] = null, qf1347['window'] = null, qf1347['_preCreateElement'] = null, qf1347['_inited'] = ![], qf1347['wxRequest'] = null, qf1347['systemInfo'] = null, qf1347['version'] = '0.0.1', qf1347['isZiYu'] = ![], qf1347['isPosMsgYu'] = ![], qf1347['parseXMLFromString'] = function (sna6_) {
      var ul8c$p, is2y6a;sna6_ = sna6_['replace'](/>\s+</g, '><');try {
        ul8c$p = new window['Parser']['DOMParser']()['parseFromString'](sna6_, 'text/xml');
      } catch (f37g) {
        throw '需要引入xml解析库文件';
      }return ul8c$p;
    }, qf1347['idx'] = 0x1, qf1347;
  }(),
      ng_vf = function () {
    function ulpc8() {}q0dhw(ulpc8, 'laya.wx.mini.MiniImage');var jhrzd9 = ulpc8['prototype'];return jhrzd9['_loadImage'] = function (x01q7w) {
      var v4g = this,
          jz$8 = ![];x01q7w['indexOf']('layaNativeDir/') == -0x1 && (jz$8 = !![], x01q7w = q73x14['formatURL'](x01q7w));if (!zjdw9['getFileInfo'](x01q7w)) {
        if (x01q7w['indexOf']('http://') != -0x1 || x01q7w['indexOf']('https://') != -0x1) zjdw9['downImg'](x01q7w, new cl5pou(ulpc8, ulpc8['onDownImgCallBack'], [x01q7w, v4g]), x01q7w);else ulpc8['onCreateImage'](x01q7w, v4g, !![]);
      } else ulpc8['onCreateImage'](x01q7w, v4g, !jz$8);
    }, ulpc8['onDownImgCallBack'] = function (u9z, _v4gf3, yi26) {
      if (!yi26) ulpc8['onCreateImage'](u9z, _v4gf3);else _v4gf3['onError'](null);
    }, ulpc8['onCreateImage'] = function ($8zur9, lupoc, vysn_) {
      vysn_ === void 0x0 && (vysn_ = ![]);var kmo5l;if (!vysn_) {
        var _vnsay = zjdw9['getFileInfo']($8zur9),
            hd9zj = _vnsay['md5'];kmo5l = zjdw9['getFileNativePath'](hd9zj);
      } else kmo5l = $8zur9;if (lupoc['imgCache'] == null) lupoc['imgCache'] = {};var y26bia;function $8ucp() {
        y26bia['onload'] = null, y26bia['onerror'] = null, delete lupoc['imgCache'][$8zur9];
      };var moc5 = function () {
        $8ucp(), lupoc['onLoaded'](y26bia);
      },
          j89rd = function () {
        $8ucp(), lupoc['event']('error', 'Load image failed');
      };lupoc['_type'] == 'nativeimage' ? (y26bia = new z8$j['window']['Image'](), y26bia['crossOrigin'] = '', y26bia['onload'] = moc5, y26bia['onerror'] = j89rd, y26bia['src'] = kmo5l, lupoc['imgCache'][$8zur9] = y26bia) : new copl['create'](kmo5l, { 'onload': moc5, 'onerror': j89rd, 'onCreate': function (urz) {
          y26bia = urz, lupoc['imgCache'][$8zur9] = urz;
        } });
    }, ulpc8;
  }(),
      m5o = function () {
    function pu$5() {}return q0dhw(pu$5, 'laya.wx.mini.MiniInput'), pu$5['_createInputElement'] = function () {
      $u98rz['_initInput']($u98rz['area'] = z8$j['createElement']('textarea')), $u98rz['_initInput']($u98rz['input'] = z8$j['createElement']('input')), $u98rz['inputContainer'] = z8$j['createElement']('div'), $u98rz['inputContainer']['style']['position'] = 'absolute', $u98rz['inputContainer']['style']['zIndex'] = 0x186a0, z8$j['container']['appendChild']($u98rz['inputContainer']), $u98rz['inputContainer']['setPos'] = function (hj90w, $rzu89) {
        $u98rz['inputContainer']['style']['left'] = hj90w + 'px', $u98rz['inputContainer']['style']['top'] = $rzu89 + 'px';
      }, mcot5l['stage']['on']('resize', null, pu$5['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (rz$pu) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xh0qwd['_soundClass'] = upz$, xh0qwd['_musicClass'] = upz$;
    }, pu$5['_onStageResize'] = function () {
      var ptl5c = mcot5l['stage']['_canvasTransform']['identity']();ptl5c['scale'](z8$j['width'] / _n6asy['canvas']['width'] / nvgy_['getPixelRatio'](), z8$j['height'] / _n6asy['canvas']['height'] / nvgy_['getPixelRatio']());
    }, pu$5['wxinputFocus'] = function (jhwdx) {
      var dj0hw = $u98rz['inputElement']['target'];if (dj0hw && !dj0hw['editable']) return;vn_4['window']['wx']['offKeyboardConfirm'](), vn_4['window']['wx']['offKeyboardInput'](), vn_4['window']['wx']['showKeyboard']({ 'defaultValue': dj0hw['text'], 'maxLength': dj0hw['maxChars'], 'multiple': dj0hw['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (hr9z) {}, 'fail': function (qwh07) {} }), vn_4['window']['wx']['onKeyboardConfirm'](function (y6ns_) {
        var iab2y = y6ns_ ? y6ns_['value'] : '';dj0hw['text'] = iab2y, dj0hw['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), vn_4['window']['wx']['onKeyboardInput'](function (gsvy_) {
        var a26ib = gsvy_ ? gsvy_['value'] : '';if (!dj0hw['multiline']) {
          if (a26ib['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }dj0hw['text'] = a26ib, dj0hw['event']('input');
      });
    }, pu$5['inputEnter'] = function () {
      $u98rz['inputElement']['target']['focus'] = ![];
    }, pu$5['wxinputblur'] = function () {
      pu$5['hideKeyboard']();
    }, pu$5['hideKeyboard'] = function () {
      vn_4['window']['wx']['offKeyboardConfirm'](), vn_4['window']['wx']['offKeyboardInput'](), vn_4['window']['wx']['hideKeyboard']({ 'success': function (hwdx0) {
          console['log']('隐藏键盘');
        }, 'fail': function (b6y) {
          console['log']('隐藏键盘出错:' + (b6y ? b6y['errMsg'] : ''));
        } });
    }, pu$5;
  }(),
      a6nsy = function () {
    function x7q1w() {}q0dhw(x7q1w, 'laya.wx.mini.MiniLoader');var r$8zp = x7q1w['prototype'];return r$8zp['load'] = function (hxj0, v_4g3f, asy_nv, d9z8, x1w7) {
      asy_nv === void 0x0 && (asy_nv = !![]), x1w7 === void 0x0 && (x1w7 = ![]);var isa6y2 = this;isa6y2['_url'] = hxj0;if (hxj0['indexOf']('data:image') === 0x0) isa6y2['_type'] = v_4g3f = 'image';else isa6y2['_type'] = v_4g3f || (v_4g3f = isa6y2['getTypeFromUrl'](hxj0));isa6y2['_cache'] = asy_nv, isa6y2['_data'] = null;var mo5lct = 'ascii';if (hxj0['indexOf']('.fnt') != -0x1) mo5lct = 'utf8';else v_4g3f == 'arraybuffer' && (mo5lct = '');;var m5oktl = v3gf1['getFileExtension'](hxj0);if (x7q1w['_fileTypeArr']['indexOf'](m5oktl) != -0x1) vn_4['EnvConfig']['load']['call'](this, hxj0, v_4g3f, asy_nv, d9z8, x1w7);else {
        if (!zjdw9['getFileInfo'](hxj0)) {
          if (hxj0['indexOf']('layaNativeDir/') != -0x1) {
            if (vn_4['isZiYu']) {
              var $u = zjdw9['ziyuFileData'][hxj0];isa6y2['onLoaded']($u);return;
            } else {
              cosnole['log']('read read'), zjdw9['read'](hxj0, mo5lct, new cl5pou(x7q1w, x7q1w['onReadNativeCallBack'], [mo5lct, hxj0, v_4g3f, asy_nv, d9z8, x1w7, isa6y2]));return;
            }
          }if (q73x14['rootPath'] == '') var snfgv_ = hxj0;else snfgv_ = hxj0['split'](q73x14['rootPath'])[0x0];hxj0['indexOf']('http://') != -0x1 || hxj0['indexOf']('https://') != -0x1 ? vn_4['EnvConfig']['load']['call'](isa6y2, hxj0, v_4g3f, asy_nv, d9z8, x1w7) : zjdw9['readFile'](snfgv_, mo5lct, new cl5pou(x7q1w, x7q1w['onReadNativeCallBack'], [mo5lct, hxj0, v_4g3f, asy_nv, d9z8, x1w7, isa6y2]), hxj0);
        } else vn_4['EnvConfig']['load']['call'](this, hxj0, v_4g3f, asy_nv, d9z8, x1w7);
      }
    }, r$8zp['resMgrLoad'] = function (bi2y6, _sfv, _gy, qx4173, zr$p8, dj, g_nv4f) {
      _gy === void 0x0 && (_gy = 0x0), qx4173 === void 0x0 && (qx4173 = ![]), zr$p8 === void 0x0 && (zr$p8 = ![]), dj === void 0x0 && (dj = 0x0), g_nv4f === void 0x0 && (g_nv4f = 0x3), bi2y6['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bi2y6), vn_4['EnvConfig']['resMgrLoad'](bi2y6, (snv_, l5tko, rj9dz) => {
        x7q1w['prototype']['resMgrLoadCallBack'](snv_, l5tko, rj9dz, _sfv);
      }, _gy, qx4173, zr$p8, dj, g_nv4f);
    }, r$8zp['resMgrLoadCallBack'] = function (poct5l, q1307, pu$cl5, r8jzd9) {
      console['log']('buff:::', poct5l, pu$cl5, zjdw9['fileNativeDir'] + '///' + zjdw9['fileListName']), r8jzd9(poct5l, q1307, pu$cl5);
    }, r$8zp['clearRes'] = function (l5cup$, pcr8u$) {
      pcr8u$ === void 0x0 && (pcr8u$ = ![]);var ng_fs = this;ng_fs['clearRes'](l5cup$, pcr8u$);var $uz98r = zjdw9['getFileInfo'](l5cup$);if ($uz98r && (l5cup$['indexOf']('http://') != -0x1 || l5cup$['indexOf']('https://') != -0x1)) {
        var g43fv_ = $uz98r['md5'],
            t5olm = zjdw9['getFileNativePath'](g43fv_);zjdw9['remove'](t5olm);
      }
    }, x7q1w['onReadNativeCallBack'] = function (hx0wdj, _fv4n, tml5co, dhr9z, y2bia6, y_gnv, asyi6, otl5mc, sa6yn_) {
      dhr9z === void 0x0 && (dhr9z = !![]), y_gnv === void 0x0 && (y_gnv = ![]), otl5mc === void 0x0 && (otl5mc = 0x0);if (!otl5mc) {
        var j9zhw;if (tml5co == 'json' || tml5co == 'atlas') j9zhw = vn_4['getJson'](sa6yn_['data']);else tml5co == 'xml' ? j9zhw = v3gf1['parseXMLFromString'](sa6yn_['data']) : j9zhw = sa6yn_['data'];asyi6['onLoaded'](j9zhw), !vn_4['isZiYu'] && vn_4['isPosMsgYu'] && tml5co != 'arraybuffer' && wx['postMessage']({ 'url': _fv4n, 'data': j9zhw, 'isLoad': !![] });
      } else otl5mc == 0x1 && vn_4['EnvConfig']['load']['call'](asyi6, _fv4n, tml5co, dhr9z, y2bia6, y_gnv);
    }, w17x0q(x7q1w, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), x7q1w;
  }(),
      zjdw9 = function (_gfnv) {
    function tokl5() {
      tokl5['__super']['call'](this);;
    }return q0dhw(tokl5, 'laya.wx.mini.MiniFileMgr', _gfnv), tokl5['isLoadFile'] = function (o5tkm) {
      return tokl5['_fileTypeArr']['indexOf'](o5tkm) != -0x1 ? !![] : ![];
    }, tokl5['getFileInfo'] = function (g_v4nf) {
      var l5p$c = g_v4nf['split']('?')[0x0],
          jhz9w = tokl5['filesListObj'][l5p$c];if (jhz9w == null) return null;else return jhz9w;return null;
    }, tokl5['onFileUpdate'] = function (vnygs_, g4f_3v) {
      var oml5t = vnygs_['split']('/'),
          aei2b = oml5t[oml5t['length'] - 0x1],
          tlomk5 = tokl5['getFileInfo'](g4f_3v);if (tlomk5 == null) tokl5['onSaveFile'](g4f_3v, aei2b);else {
        if (tlomk5['readyUrl'] != g4f_3v) tokl5['remove'](aei2b, g4f_3v);
      }
    }, tokl5['exits'] = function (gf_vn4, fn_gvs) {
      var jx0hwd = tokl5['getFileNativePath'](gf_vn4);tokl5['fs']['getFileInfo']({ 'filePath': jx0hwd, 'success': function (gf_3) {
          fn_gvs != null && fn_gvs['runWith']([0x0, gf_3]);
        }, 'fail': function (ieb6) {
          fn_gvs != null && fn_gvs['runWith']([0x1, ieb6]);
        } });
    }, tokl5['read'] = function (hwjd90, c$pu5, i62aeb, komlt) {
      c$pu5 === void 0x0 && (c$pu5 = 'ascill'), komlt === void 0x0 && (komlt = '');var is26ay;komlt != '' ? is26ay = tokl5['getFileNativePath'](hwjd90) : is26ay = hwjd90, tokl5['fs']['readFile']({ 'filePath': is26ay, 'encoding': c$pu5, 'success': function (j0w9hd) {
          i62aeb != null && i62aeb['runWith']([0x0, j0w9hd]);
        }, 'fail': function (_nfgv4) {
          if (_nfgv4 && komlt != '') tokl5['down'](komlt, c$pu5, i62aeb, komlt);else i62aeb != null && i62aeb['runWith']([0x1]);
        } });
    }, tokl5['readNativeFile'] = function (e2b6i, ns6y_a) {
      tokl5['fs']['readFile']({ 'filePath': e2b6i, 'encoding': '', 'success': function (vnf4_g) {
          ns6y_a != null && ns6y_a['runWith']([0x0]);
        }, 'fail': function (vg13) {
          ns6y_a != null && ns6y_a['runWith']([0x1]);
        } });
    }, tokl5['down'] = function ($ucl5p, g3, xw0hqd, a6iys2) {
      g3 === void 0x0 && (g3 = 'ascill'), a6iys2 === void 0x0 && (a6iys2 = '');var lpuo = tokl5['getFileNativePath'](a6iys2),
          zj9r8d = tokl5['wxdown']({ 'url': $ucl5p, 'filePath': lpuo, 'success': function (_nsvya) {
          if (_nsvya['statusCode'] === 0xc8) tokl5['readFile'](_nsvya['filePath'], g3, xw0hqd, a6iys2);
        }, 'fail': function (dqw0h) {
          xw0hqd != null && xw0hqd['runWith']([0x1, dqw0h]);
        } });zj9r8d['onProgressUpdate'](function (_synvg) {
        xw0hqd != null && xw0hqd['runWith']([0x2, _synvg['progress']]);
      });
    }, tokl5['readFile'] = function (oclm5, lctop, n62ay, i2asy6) {
      lctop === void 0x0 && (lctop = 'ascill'), i2asy6 === void 0x0 && (i2asy6 = ''), tokl5['fs']['readFile']({ 'filePath': oclm5, 'encoding': lctop, 'success': function (hjxd0) {
          if (oclm5['indexOf']('http://') != -0x1 || oclm5['indexOf']('https://') != -0x1) tokl5['onFileUpdate'](oclm5, i2asy6);n62ay != null && n62ay['runWith']([0x0, hjxd0]);
        }, 'fail': function ($9r8jz) {
          if ($9r8jz) n62ay != null && n62ay['runWith']([0x1, $9r8jz]);
        } });
    }, tokl5['downImg'] = function (whj, uolcp5, _vn4) {
      _vn4 === void 0x0 && (_vn4 = '');var wq7hx0 = tokl5['wxdown']({ 'url': whj, 'success': function (f3g14v) {
          f3g14v['statusCode'] === 0xc8 && tokl5['copyFile'](f3g14v['tempFilePath'], _vn4, uolcp5);
        }, 'fail': function (k5) {
          uolcp5 != null && uolcp5['runWith']([0x1, k5]);
        } });
    }, tokl5['copyFile'] = function (qxh7w0, vygn, z8rpu$) {
      var wdqh = qxh7w0['split']('/'),
          fv3g4 = wdqh[wdqh['length'] - 0x1],
          x1q43 = vygn['split']('?')[0x0],
          sya6n2 = tokl5['getFileInfo'](vygn),
          snvgy_ = tokl5['getFileNativePath'](fv3g4);tokl5['fs']['copyFile']({ 'srcPath': qxh7w0, 'destPath': snvgy_, 'success': function (vg14f) {
          if (!sya6n2) tokl5['onSaveFile'](vygn, fv3g4), z8rpu$ != null && z8rpu$['runWith']([0x0]);else {
            if (sya6n2['readyUrl'] != vygn) tokl5['remove'](fv3g4, vygn, z8rpu$);
          }
        }, 'fail': function (qx314) {
          z8rpu$ != null && z8rpu$['runWith']([0x1, qx314]);
        } });
    }, tokl5['getFileNativePath'] = function (u5pcl) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + u5pcl;
    }, tokl5['remove'] = function (v4, hj9wd0, nf_vg) {
      hj9wd0 === void 0x0 && (hj9wd0 = '');var dhw9j0 = tokl5['getFileInfo'](hj9wd0),
          sngv = tokl5['getFileNativePath'](dhw9j0['md5']);mcot5l['loader']['clearRes'](dhw9j0['readyUrl']), tokl5['fs']['unlink']({ 'filePath': sngv, 'success': function (v_gfn4) {
          if (hj9wd0 != '') tokl5['onSaveFile'](hj9wd0, v4);nf_vg != null && nf_vg['runWith']([0x0]);
        }, 'fail': function (ruc$p8) {} });
    }, tokl5['onSaveFile'] = function (aybi, ba6i2) {
      var g_ny = aybi['split']('?')[0x0];tokl5['filesListObj'][g_ny] = { 'md5': ba6i2, 'readyUrl': aybi }, tokl5['fs']['writeFile']({ 'filePath': tokl5['fileNativeDir'] + '/' + tokl5['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tokl5['filesListObj']), 'success': function (wdjz) {
          console['log']('写入测试测试成功：', wdjz);
        }, 'fail': function (d8jz) {
          console['log']('写入测试测试失败：', d8jz);
        } });
    }, tokl5['existDir'] = function (c$urp8, olc5tm) {
      tokl5['fs']['mkdir']({ 'dirPath': c$urp8, 'success': function (ib2e6a) {
          olc5tm != null && olc5tm['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (rc$8p) {
          if (rc$8p['errMsg']['indexOf']('file already exists') != -0x1) tokl5['readSync'](tokl5['fileListName'], 'utf8', olc5tm);else olc5tm != null && olc5tm['runWith']([0x1, rc$8p]);
        } });
    }, tokl5['readSync'] = function (c5plu$, $u89rz, nsgv_, r9jz) {
      $u89rz === void 0x0 && ($u89rz = 'ascill'), r9jz === void 0x0 && (r9jz = '');var c5lup = tokl5['getFileNativePath'](c5plu$),
          rz9jdh;try {
        rz9jdh = tokl5['fs']['readFileSync'](c5lup), nsgv_ != null && nsgv_['runWith']([0x0, { 'data': rz9jdh }]);
      } catch (yn_a) {
        nsgv_ != null && nsgv_['runWith']([0x1]);
      }
    }, tokl5['readCache'] = function () {}, tokl5['writeCache'] = function (asyn_v) {
      var o5ulpc = readyUrl['split']('?')[0x0];tokl5['filesListObj'][o5ulpc] = { 'md5': md5Name, 'readyUrl': readyUrl }, tokl5['fs']['writeFile']({ 'filePath': tokl5['fileNativeDir'] + '/' + tokl5['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tokl5['filesListObj']), 'success': function (whx0q7) {}, 'fail': function (tkm5ol) {} });
    }, tokl5['setNativeFileDir'] = function (q7310x) {
      tokl5['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + q7310x;
    }, tokl5['filesListObj'] = {}, tokl5['fileNativeDir'] = null, tokl5['fileListName'] = 'layaairfiles.txt', tokl5['ziyuFileData'] = {}, w17x0q(tokl5, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), tokl5;
  }(vgnsf),
      upz$ = function (iayb2) {
    function xwdh0j() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], xwdh0j['__super']['call'](this), this['_sound'] = xwdh0j['_createSound']();
    }q0dhw(xwdh0j, 'laya.wx.mini.MiniSound', iayb2);var wh0jx = xwdh0j['prototype'];return wh0jx['load'] = function (j9hrzd) {
      var w7xq01 = this;j9hrzd = q73x14['formatURL'](j9hrzd), this['url'] = j9hrzd;if (xwdh0j['_audioCache'][j9hrzd]) {
        this['event']('complete');return;
      }function nvs() {
        if (xwdh0j['_null'] != undefined) w7xq01['_sound']['onCanplay'](xwdh0j['_null']), w7xq01['_sound']['onError'](xwdh0j['_null']);else try {
          w7xq01['_sound']['onCanplay'](null), w7xq01['_sound']['onError'](null), xwdh0j['_null'] = null;
        } catch (qf3147) {
          console['warn']('[wxmini] _clearSound:' + qf3147), w7xq01['_sound']['onCanplay'](ktoml), w7xq01['_sound']['onError'](ktoml), xwdh0j['_null'] = ktoml;
        }
      }function v_3gf4() {
        nvs(), l8cpu['loaded'] = !![], l8cpu['event']('complete'), xwdh0j['_audioCache'][l8cpu['url']] = l8cpu;
      }function jd9wzh(kml5t) {
        console['error']('errCode=' + kml5t['errCode'] + '  errMsg=' + kml5t['errMsg']), nvs(), l8cpu['event']('error');
      }function ktoml() {}this['_sound']['onCanplay'](v_3gf4), this['_sound']['onError'](jd9wzh), this['_sound']['src'] = j9hrzd;var l8cpu = this;
    }, wh0jx['play'] = function (yab62i, w0jdh) {
      yab62i === void 0x0 && (yab62i = 0x0), w0jdh === void 0x0 && (w0jdh = 0x0);var ay_s6;if (this['url'] == xh0qwd['_tMusic']) {
        if (!xwdh0j['_musicAudio']) xwdh0j['_musicAudio'] = xwdh0j['_createSound']();ay_s6 = xwdh0j['_musicAudio'];
      } else ay_s6 = xwdh0j['_createSound']();ay_s6['src'] = this['url'];var pot5cl = new _43gf(ay_s6);return pot5cl['url'] = this['url'], pot5cl['loops'] = w0jdh, pot5cl['startTime'] = yab62i, pot5cl['play'](), xh0qwd['addChannel'](pot5cl), pot5cl;
    }, wh0jx['dispose'] = function () {
      var ur$z8p = xwdh0j['_audioCache'][this['url']];ur$z8p && (ur$z8p['src'] = '', delete xwdh0j['_audioCache'][this['url']]);
    }, rz9j8(0x0, wh0jx, 'duration', function () {
      return this['_sound']['duration'];
    }), xwdh0j['_createSound'] = function () {
      return xwdh0j['_id']++, vn_4['window']['wx']['createInnerAudioContext']();
    }, xwdh0j['_musicAudio'] = null, xwdh0j['_id'] = 0x0, xwdh0j['_audioCache'] = {}, xwdh0j['_null'] = undefined, xwdh0j;
  }(vgnsf),
      _43gf = function (r8$j9) {
    function dh0j9w(rj$98z) {
      this['_audio'] = null, this['_onEnd'] = null, dh0j9w['__super']['call'](this), this['_audio'] = rj$98z, this['_onEnd'] = v3gf1['bind'](this['__onEnd'], this), rj$98z['onEnded'](this['_onEnd']);
    }q0dhw(dh0j9w, 'laya.wx.mini.MiniSoundChannel', r8$j9);var v43_ = dh0j9w['prototype'];return v43_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (mcot5l['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, v43_['__onNull'] = function () {}, v43_['play'] = function () {
      this['isStopped'] = ![], xh0qwd['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, v43_['stop'] = function () {
      this['isStopped'] = !![], xh0qwd['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (dh0j9w['_null'] != undefined) this['_audio']['onEnded'](dh0j9w['_null']);else try {
        this['_audio']['onEnded'](null), dh0j9w['_null'] = null;
      } catch (nsa_) {
        console['warn']('[wxmini] stop:' + nsa_), this['_audio']['onEnded'](v3gf1['bind'](this['__onNull'], this)), dh0j9w['_null'] = v3gf1['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, v43_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, v43_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xh0qwd['addChannel'](this), this['_audio']['play']();
    }, rz9j8(0x0, v43_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), rz9j8(0x0, v43_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), rz9j8(0x0, v43_, 'volume', function () {
      return 0x1;
    }, function (ru$8pz) {}), dh0j9w['_null'] = undefined, dh0j9w;
  }(xq1473);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var km5lt in Laya) {
    var rdjz9h = Laya[km5lt];rdjz9h && rdjz9h['__isclass'] && (exports[km5lt] = rdjz9h);
  }
});