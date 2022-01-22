var A = wx.$N;
(function (window, document, df7h5) {
  var dfuh = df7h5['un'],
      d8fht5 = df7h5['uns'],
      b4qr = df7h5['static'],
      vxsi = df7h5['class'],
      mj0n = df7h5['getset'],
      t5dfh = df7h5['__newvec'],
      rb49yq = laya['utils']['Browser'],
      f8_mh = laya['events']['Event'],
      yo3 = laya['events']['EventDispatcher'],
      l3n0 = laya['resource']['HTMLImage'],
      g5x17c = laya['utils']['Handler'],
      rbq49$ = laya['display']['Input'],
      ljo30 = laya['net']['Loader'],
      wrq = laya['maths']['Matrix'],
      yzo34 = laya['renders']['Render'],
      mlunj = laya['utils']['RunDriver'],
      w$96bq = laya['media']['Sound'],
      qb49r$ = laya['media']['SoundChannel'],
      l3ezy = laya['media']['SoundManager'],
      wqb6a$ = laya['display']['Stage'],
      zyo34e = laya['net']['URL'],
      nj_0 = laya['utils']['Utils'],
      eoj3 = function () {
    function qbr4() {}return vxsi(qbr4, 'laya.wx.mini.MiniAdpter'), qbr4['getJson'] = function (h8_tdf) {
      return JSON['parse'](h8_tdf);
    }, qbr4['init'] = function (vkixs, mhnu_8) {
      vkixs === void 0x0 && (vkixs = ![]), mhnu_8 === void 0x0 && (mhnu_8 = ![]);if (qbr4['_inited']) return;qbr4['window'] = window;if (qbr4['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;qbr4['_inited'] = !![], qbr4['isZiYu'] = mhnu_8, qbr4['isPosMsgYu'] = vkixs, qbr4['EnvConfig'] = {}, !qbr4['isZiYu'] && (eljo30['setNativeFileDir']('/layaairGame'), eljo30['existDir'](eljo30['fileNativeDir'], g5x17c['create'](qbr4, qbr4['onMkdirCallBack']))), qbr4['window']['focus'] = function () {}, df7h5['getUrlPath'] = function () {}, qbr4['window']['logtime'] = function (t5dh) {}, qbr4['window']['alertTimeLog'] = function (lmnu0) {}, qbr4['window']['resetShareInfo'] = function () {}, qbr4['window']['CanvasRenderingContext2D'] = function () {}, qbr4['window']['CanvasRenderingContext2D']['prototype'] = qbr4['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qbr4['window']['document']['body']['appendChild'] = function () {}, qbr4['EnvConfig']['pixelRatioInt'] = 0x0, mlunj['getPixelRatio'] = qbr4['pixelRatio'], qbr4['_preCreateElement'] = rb49yq['createElement'], rb49yq['createElement'] = qbr4['createElement'], mlunj['createShaderCondition'] = qbr4['createShaderCondition'], nj_0['parseXMLFromString'] = qbr4['parseXMLFromString'], rbq49$['_createInputElement'] = q$wbr9['_createInputElement'], qbr4['EnvConfig']['load'] = ljo30['prototype']['load'], ljo30['prototype']['load'] = f_d8uh['prototype']['load'], qbr4['isZiYu'] && vkixs && wx['onMessage'](function (vs1) {
        vs1['isLoad'] && (eljo30['ziyuFileData'][vs1['url']] = vs1['data']);
      });
    }, qbr4['onMkdirCallBack'] = function ($wq9rb, ryo9z4) {
      if (!$wq9rb) eljo30['filesListObj'] = JSON['parse'](ryo9z4['data']);
    }, qbr4['pixelRatio'] = function () {
      if (!qbr4['EnvConfig']['pixelRatioInt']) try {
        var sxkcvi = wx['getSystemInfoSync']();return qbr4['EnvConfig']['pixelRatioInt'] = sxkcvi['pixelRatio'], sxkcvi = sxkcvi, sxkcvi['pixelRatio'];
      } catch (yr4q9b) {}return qbr4['EnvConfig']['pixelRatioInt'];
    }, qbr4['createElement'] = function (o0lze) {
      if (o0lze == 'canvas') {
        var cv1gx;return qbr4['idx'] == 0x1 ? qbr4['isZiYu'] ? (cv1gx = sharedCanvas, cv1gx['style'] = {}) : cv1gx = window['canvas'] : cv1gx = window['wx']['createCanvas'](), qbr4['idx']++, cv1gx;
      } else {
        if (o0lze == 'textarea' || o0lze == 'input') return qbr4['onCreateInput'](o0lze);else {
          if (o0lze == 'div') {
            var b9q$4r = qbr4['_preCreateElement'](o0lze);return b9q$4r['contains'] = function (csgv) {
              return null;
            }, b9q$4r['removeChild'] = function (qw6b9) {}, b9q$4r;
          } else return qbr4['_preCreateElement'](o0lze);
        }
      }
    }, qbr4['onCreateInput'] = function (kv2s) {
      var yz9q4r = qbr4['_preCreateElement'](kv2s);return yz9q4r['focus'] = q$wbr9['wxinputFocus'], yz9q4r['blur'] = q$wbr9['wxinputblur'], yz9q4r['style'] = {}, yz9q4r['value'] = 0x0, yz9q4r['parentElement'] = {}, yz9q4r['placeholder'] = {}, yz9q4r['type'] = {}, yz9q4r['setColor'] = function (nml) {}, yz9q4r['setType'] = function (num8j_) {}, yz9q4r['setFontFace'] = function (jl3en) {}, yz9q4r['addEventListener'] = function (j0mlne) {}, yz9q4r['contains'] = function (rw9$b) {
        return null;
      }, yz9q4r['removeChild'] = function (dh_u) {}, yz9q4r;
    }, qbr4['createShaderCondition'] = function (o4ryz) {
      var t71d = this,
          f5dgt = function () {
        var g17dt5 = o4ryz;return t71d[o4ryz['replace']('this.', '')];
      };return f5dgt;
    }, qbr4['EnvConfig'] = null, qbr4['window'] = null, qbr4['_preCreateElement'] = null, qbr4['_inited'] = ![], qbr4['wxRequest'] = null, qbr4['systemInfo'] = null, qbr4['version'] = '0.0.1', qbr4['isZiYu'] = ![], qbr4['isPosMsgYu'] = ![], qbr4['parseXMLFromString'] = function (pkis) {
      var dt5fh8, yqb9;pkis = pkis['replace'](/>\s+</g, '><');try {
        dt5fh8 = new window['Parser']['DOMParser']()['parseFromString'](pkis, 'text/xml');
      } catch (zoy9r) {
        throw '需要引入xml解析库文件';
      }return dt5fh8;
    }, qbr4['idx'] = 0x1, qbr4;
  }(),
      zol3e = function () {
    function j3en() {}vxsi(j3en, 'laya.wx.mini.MiniImage');var pkvi2s = j3en['prototype'];return pkvi2s['_loadImage'] = function (udf_h8) {
      var b$9qr = this,
          xikcv = ![];udf_h8['indexOf']('layaNativeDir/') == -0x1 && (xikcv = !![], udf_h8 = zyo34e['formatURL'](udf_h8));if (!eljo30['getFileInfo'](udf_h8)) {
        if (udf_h8['indexOf']('http://') != -0x1 || udf_h8['indexOf']('https://') != -0x1) eljo30['downImg'](udf_h8, new g5x17c(j3en, j3en['onDownImgCallBack'], [udf_h8, b$9qr]), udf_h8);else j3en['onCreateImage'](udf_h8, b$9qr, !![]);
      } else j3en['onCreateImage'](udf_h8, b$9qr, !xikcv);
    }, j3en['onDownImgCallBack'] = function (i2vskp, n0uj, tg5df) {
      if (!tg5df) j3en['onCreateImage'](i2vskp, n0uj);else n0uj['onError'](null);
    }, j3en['onCreateImage'] = function (o34zy, g5c17, hu8_) {
      hu8_ === void 0x0 && (hu8_ = ![]);var _mju0;if (!hu8_) {
        var mnjel = eljo30['getFileInfo'](o34zy),
            xsc1g7 = mnjel['md5'];_mju0 = eljo30['getFileNativePath'](xsc1g7);
      } else _mju0 = o34zy;if (g5c17['imgCache'] == null) g5c17['imgCache'] = {};var dft7h;function cxskv1() {
        dft7h['onload'] = null, dft7h['onerror'] = null, delete g5c17['imgCache'][o34zy];
      };var duh_8f = function () {
        cxskv1(), g5c17['onLoaded'](dft7h);
      },
          cv1sg = function () {
        cxskv1(), g5c17['event']('error', 'Load image failed');
      };g5c17['_type'] == 'nativeimage' ? (dft7h = new rb49yq['window']['Image'](), dft7h['crossOrigin'] = '', dft7h['onload'] = duh_8f, dft7h['onerror'] = cv1sg, dft7h['src'] = _mju0, g5c17['imgCache'][o34zy] = dft7h) : new l3n0['create'](_mju0, { 'onload': duh_8f, 'onerror': cv1sg, 'onCreate': function (fdh7t) {
          dft7h = fdh7t, g5c17['imgCache'][o34zy] = fdh7t;
        } });
    }, j3en;
  }(),
      q$wbr9 = function () {
    function ljn0() {}return vxsi(ljn0, 'laya.wx.mini.MiniInput'), ljn0['_createInputElement'] = function () {
      rbq49$['_initInput'](rbq49$['area'] = rb49yq['createElement']('textarea')), rbq49$['_initInput'](rbq49$['input'] = rb49yq['createElement']('input')), rbq49$['inputContainer'] = rb49yq['createElement']('div'), rbq49$['inputContainer']['style']['position'] = 'absolute', rbq49$['inputContainer']['style']['zIndex'] = 0x186a0, rb49yq['container']['appendChild'](rbq49$['inputContainer']), rbq49$['inputContainer']['setPos'] = function ($4brq9, b94r$) {
        rbq49$['inputContainer']['style']['left'] = $4brq9 + 'px', rbq49$['inputContainer']['style']['top'] = b94r$ + 'px';
      }, df7h5['stage']['on']('resize', null, ljn0['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hd7f) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), l3ezy['_soundClass'] = csivxk, l3ezy['_musicClass'] = csivxk;
    }, ljn0['_onStageResize'] = function () {
      var f8htd_ = df7h5['stage']['_canvasTransform']['identity']();f8htd_['scale'](rb49yq['width'] / yzo34['canvas']['width'] / mlunj['getPixelRatio'](), rb49yq['height'] / yzo34['canvas']['height'] / mlunj['getPixelRatio']());
    }, ljn0['wxinputFocus'] = function (fth75) {
      var gf5dt = rbq49$['inputElement']['target'];if (gf5dt && !gf5dt['editable']) return;eoj3['window']['wx']['offKeyboardConfirm'](), eoj3['window']['wx']['offKeyboardInput'](), eoj3['window']['wx']['showKeyboard']({ 'defaultValue': gf5dt['text'], 'maxLength': gf5dt['maxChars'], 'multiple': gf5dt['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (_uhd) {}, 'fail': function (dh8tf5) {} }), eoj3['window']['wx']['onKeyboardConfirm'](function (umh8_n) {
        var si2p = umh8_n ? umh8_n['value'] : '';gf5dt['text'] = si2p, gf5dt['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), eoj3['window']['wx']['onKeyboardInput'](function (o3ezl) {
        var uh_nm8 = o3ezl ? o3ezl['value'] : '';if (!gf5dt['multiline']) {
          if (uh_nm8['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }gf5dt['text'] = uh_nm8, gf5dt['event']('input');
      });
    }, ljn0['inputEnter'] = function () {
      rbq49$['inputElement']['target']['focus'] = ![];
    }, ljn0['wxinputblur'] = function () {
      ljn0['hideKeyboard']();
    }, ljn0['hideKeyboard'] = function () {
      eoj3['window']['wx']['offKeyboardConfirm'](), eoj3['window']['wx']['offKeyboardInput'](), eoj3['window']['wx']['hideKeyboard']({ 'success': function (t51g) {
          console['log']('隐藏键盘');
        }, 'fail': function (v2xski) {
          console['log']('隐藏键盘出错:' + (v2xski ? v2xski['errMsg'] : ''));
        } });
    }, ljn0;
  }(),
      f_d8uh = function () {
    function spikv2() {}vxsi(spikv2, 'laya.wx.mini.MiniLoader');var l0zo3 = spikv2['prototype'];return l0zo3['load'] = function (z4q9ry, g1vxs, qw6$9, h5ftd8, sgvc1x) {
      qw6$9 === void 0x0 && (qw6$9 = !![]), sgvc1x === void 0x0 && (sgvc1x = ![]);var o4r9yz = this;o4r9yz['_url'] = z4q9ry;if (z4q9ry['indexOf']('data:image') === 0x0) o4r9yz['_type'] = g1vxs = 'image';else o4r9yz['_type'] = g1vxs || (g1vxs = o4r9yz['getTypeFromUrl'](z4q9ry));o4r9yz['_cache'] = qw6$9, o4r9yz['_data'] = null;var zl0eo = 'ascii';if (z4q9ry['indexOf']('.fnt') != -0x1) zl0eo = 'utf8';else g1vxs == 'arraybuffer' && (zl0eo = '');;var dh_8u = nj_0['getFileExtension'](z4q9ry);if (spikv2['_fileTypeArr']['indexOf'](dh_8u) != -0x1) eoj3['EnvConfig']['load']['call'](this, z4q9ry, g1vxs, qw6$9, h5ftd8, sgvc1x);else {
        if (!eljo30['getFileInfo'](z4q9ry)) {
          if (z4q9ry['indexOf']('layaNativeDir/') != -0x1) {
            if (eoj3['isZiYu']) {
              var yole3z = eljo30['ziyuFileData'][z4q9ry];o4r9yz['onLoaded'](yole3z);return;
            } else {
              cosnole['log']('read read'), eljo30['read'](z4q9ry, zl0eo, new g5x17c(spikv2, spikv2['onReadNativeCallBack'], [zl0eo, z4q9ry, g1vxs, qw6$9, h5ftd8, sgvc1x, o4r9yz]));return;
            }
          }if (zyo34e['rootPath'] == '') var dt_f = z4q9ry;else dt_f = z4q9ry['split'](zyo34e['rootPath'])[0x0];z4q9ry['indexOf']('http://') != -0x1 || z4q9ry['indexOf']('https://') != -0x1 ? eoj3['EnvConfig']['load']['call'](o4r9yz, z4q9ry, g1vxs, qw6$9, h5ftd8, sgvc1x) : eljo30['readFile'](dt_f, zl0eo, new g5x17c(spikv2, spikv2['onReadNativeCallBack'], [zl0eo, z4q9ry, g1vxs, qw6$9, h5ftd8, sgvc1x, o4r9yz]), z4q9ry);
        } else eoj3['EnvConfig']['load']['call'](this, z4q9ry, g1vxs, qw6$9, h5ftd8, sgvc1x);
      }
    }, l0zo3['resMgrLoad'] = function (l30nj, spkv2, s1v, mn8_uj, kxv2i, o4ezy, ixksv2) {
      s1v === void 0x0 && (s1v = 0x0), mn8_uj === void 0x0 && (mn8_uj = ![]), kxv2i === void 0x0 && (kxv2i = ![]), o4ezy === void 0x0 && (o4ezy = 0x0), ixksv2 === void 0x0 && (ixksv2 = 0x3), l30nj['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', l30nj), eoj3['EnvConfig']['resMgrLoad'](l30nj, (n0j_, gc7t15, lo3je0) => {
        spikv2['prototype']['resMgrLoadCallBack'](n0j_, gc7t15, lo3je0, spkv2);
      }, s1v, mn8_uj, kxv2i, o4ezy, ixksv2);
    }, l0zo3['resMgrLoadCallBack'] = function (q49$b, unj0m, n_m8u, td75fh) {
      console['log']('buff:::', q49$b, n_m8u, eljo30['fileNativeDir'] + '///' + eljo30['fileListName']), td75fh(q49$b, unj0m, n_m8u);
    }, l0zo3['clearRes'] = function (du8fh, xkscvi) {
      xkscvi === void 0x0 && (xkscvi = ![]);var wqbr$ = this;wqbr$['clearRes'](du8fh, xkscvi);var julnm0 = eljo30['getFileInfo'](du8fh);if (julnm0 && (du8fh['indexOf']('http://') != -0x1 || du8fh['indexOf']('https://') != -0x1)) {
        var ml0nu = julnm0['md5'],
            rb$49 = eljo30['getFileNativePath'](ml0nu);eljo30['remove'](rb$49);
      }
    }, spikv2['onReadNativeCallBack'] = function (sxki, n_m8ju, b6$w9, td8f_h, $wab6, d_thf, ivsp2, _umjn, wa6$) {
      td8f_h === void 0x0 && (td8f_h = !![]), d_thf === void 0x0 && (d_thf = ![]), _umjn === void 0x0 && (_umjn = 0x0);if (!_umjn) {
        var bq$w69;if (b6$w9 == 'json' || b6$w9 == 'atlas') bq$w69 = eoj3['getJson'](wa6$['data']);else b6$w9 == 'xml' ? bq$w69 = nj_0['parseXMLFromString'](wa6$['data']) : bq$w69 = wa6$['data'];ivsp2['onLoaded'](bq$w69), !eoj3['isZiYu'] && eoj3['isPosMsgYu'] && b6$w9 != 'arraybuffer' && wx['postMessage']({ 'url': n_m8ju, 'data': bq$w69, 'isLoad': !![] });
      } else _umjn == 0x1 && eoj3['EnvConfig']['load']['call'](ivsp2, n_m8ju, b6$w9, td8f_h, $wab6, d_thf);
    }, b4qr(spikv2, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), spikv2;
  }(),
      eljo30 = function (_mfu8h) {
    function h8num_() {
      h8num_['__super']['call'](this);;
    }return vxsi(h8num_, 'laya.wx.mini.MiniFileMgr', _mfu8h), h8num_['isLoadFile'] = function (xc5g7) {
      return h8num_['_fileTypeArr']['indexOf'](xc5g7) != -0x1 ? !![] : ![];
    }, h8num_['getFileInfo'] = function (o3zyr) {
      var oel03 = o3zyr['split']('?')[0x0],
          td58h = h8num_['filesListObj'][oel03];if (td58h == null) return null;else return td58h;return null;
    }, h8num_['onFileUpdate'] = function (d7f5h, xs7g1c) {
      var cg15x = d7f5h['split']('/'),
          lnj0u = cg15x[cg15x['length'] - 0x1],
          h7tdf = h8num_['getFileInfo'](xs7g1c);if (h7tdf == null) h8num_['onSaveFile'](xs7g1c, lnj0u);else {
        if (h7tdf['readyUrl'] != xs7g1c) h8num_['remove'](lnj0u, xs7g1c);
      }
    }, h8num_['exits'] = function (t17cg, lme0nj) {
      var t8 = h8num_['getFileNativePath'](t17cg);h8num_['fs']['getFileInfo']({ 'filePath': t8, 'success': function (xvkcs) {
          lme0nj != null && lme0nj['runWith']([0x0, xvkcs]);
        }, 'fail': function (elo0z3) {
          lme0nj != null && lme0nj['runWith']([0x1, elo0z3]);
        } });
    }, h8num_['read'] = function (o9yzr4, unm_8, jl0n, p2sv) {
      unm_8 === void 0x0 && (unm_8 = 'ascill'), p2sv === void 0x0 && (p2sv = '');var eo43;p2sv != '' ? eo43 = h8num_['getFileNativePath'](o9yzr4) : eo43 = o9yzr4, h8num_['fs']['readFile']({ 'filePath': eo43, 'encoding': unm_8, 'success': function (ksi2pv) {
          jl0n != null && jl0n['runWith']([0x0, ksi2pv]);
        }, 'fail': function (yzor) {
          if (yzor && p2sv != '') h8num_['down'](p2sv, unm_8, jl0n, p2sv);else jl0n != null && jl0n['runWith']([0x1]);
        } });
    }, h8num_['readNativeFile'] = function (dh5f, ksivp) {
      h8num_['fs']['readFile']({ 'filePath': dh5f, 'encoding': '', 'success': function (u8mnh) {
          ksivp != null && ksivp['runWith']([0x0]);
        }, 'fail': function (u_jnm0) {
          ksivp != null && ksivp['runWith']([0x1]);
        } });
    }, h8num_['down'] = function (cgs71x, umj8_, m8jnu, q4rzy) {
      umj8_ === void 0x0 && (umj8_ = 'ascill'), q4rzy === void 0x0 && (q4rzy = '');var rb9w$ = h8num_['getFileNativePath'](q4rzy),
          oe43 = h8num_['wxdown']({ 'url': cgs71x, 'filePath': rb9w$, 'success': function (ljme) {
          if (ljme['statusCode'] === 0xc8) h8num_['readFile'](ljme['filePath'], umj8_, m8jnu, q4rzy);
        }, 'fail': function (nmle) {
          m8jnu != null && m8jnu['runWith']([0x1, nmle]);
        } });oe43['onProgressUpdate'](function (df75gt) {
        m8jnu != null && m8jnu['runWith']([0x2, df75gt['progress']]);
      });
    }, h8num_['readFile'] = function (iv2spk, vxki, s7cg, unlj) {
      vxki === void 0x0 && (vxki = 'ascill'), unlj === void 0x0 && (unlj = ''), h8num_['fs']['readFile']({ 'filePath': iv2spk, 'encoding': vxki, 'success': function (ej0l3n) {
          if (iv2spk['indexOf']('http://') != -0x1 || iv2spk['indexOf']('https://') != -0x1) h8num_['onFileUpdate'](iv2spk, unlj);s7cg != null && s7cg['runWith']([0x0, ej0l3n]);
        }, 'fail': function (yo4r3z) {
          if (yo4r3z) s7cg != null && s7cg['runWith']([0x1, yo4r3z]);
        } });
    }, h8num_['downImg'] = function (h_d8u, b$q96, hm8fu) {
      hm8fu === void 0x0 && (hm8fu = '');var r4o9y = h8num_['wxdown']({ 'url': h_d8u, 'success': function (_8nhmu) {
          _8nhmu['statusCode'] === 0xc8 && h8num_['copyFile'](_8nhmu['tempFilePath'], hm8fu, b$q96);
        }, 'fail': function (kcxv1) {
          b$q96 != null && b$q96['runWith']([0x1, kcxv1]);
        } });
    }, h8num_['copyFile'] = function (vk1scx, xkisv2, eoyl3) {
      var d_8hfu = vk1scx['split']('/'),
          yro3z = d_8hfu[d_8hfu['length'] - 0x1],
          nlj30 = xkisv2['split']('?')[0x0],
          $6wqb = h8num_['getFileInfo'](xkisv2),
          th_f8 = h8num_['getFileNativePath'](yro3z);h8num_['fs']['copyFile']({ 'srcPath': vk1scx, 'destPath': th_f8, 'success': function (ki2xv) {
          if (!$6wqb) h8num_['onSaveFile'](xkisv2, yro3z), eoyl3 != null && eoyl3['runWith']([0x0]);else {
            if ($6wqb['readyUrl'] != xkisv2) h8num_['remove'](yro3z, xkisv2, eoyl3);
          }
        }, 'fail': function (gs1cxv) {
          eoyl3 != null && eoyl3['runWith']([0x1, gs1cxv]);
        } });
    }, h8num_['getFileNativePath'] = function (f8hd5t) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + f8hd5t;
    }, h8num_['remove'] = function (r$b4q, $wbq69, wba) {
      $wbq69 === void 0x0 && ($wbq69 = '');var m_fuh8 = h8num_['getFileInfo']($wbq69),
          h_du8 = h8num_['getFileNativePath'](m_fuh8['md5']);df7h5['loader']['clearRes'](m_fuh8['readyUrl']), h8num_['fs']['unlink']({ 'filePath': h_du8, 'success': function (zr34o) {
          if ($wbq69 != '') h8num_['onSaveFile']($wbq69, r$b4q);wba != null && wba['runWith']([0x0]);
        }, 'fail': function (oey43) {} });
    }, h8num_['onSaveFile'] = function (dfth8_, j0lnem) {
      var ejnml = dfth8_['split']('?')[0x0];h8num_['filesListObj'][ejnml] = { 'md5': j0lnem, 'readyUrl': dfth8_ }, h8num_['fs']['writeFile']({ 'filePath': h8num_['fileNativeDir'] + '/' + h8num_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](h8num_['filesListObj']), 'success': function (ksi2v) {
          console['log']('写入测试测试成功：', ksi2v);
        }, 'fail': function (ispv2) {
          console['log']('写入测试测试失败：', ispv2);
        } });
    }, h8num_['existDir'] = function (h8dtf, r4$) {
      h8num_['fs']['mkdir']({ 'dirPath': h8dtf, 'success': function (y4z9rq) {
          r4$ != null && r4$['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hn_8um) {
          if (hn_8um['errMsg']['indexOf']('file already exists') != -0x1) h8num_['readSync'](h8num_['fileListName'], 'utf8', r4$);else r4$ != null && r4$['runWith']([0x1, hn_8um]);
        } });
    }, h8num_['readSync'] = function (f7g5, mjnul, o9zry4, un0j_) {
      mjnul === void 0x0 && (mjnul = 'ascill'), un0j_ === void 0x0 && (un0j_ = '');var f8h_du = h8num_['getFileNativePath'](f7g5),
          q96$wb;try {
        q96$wb = h8num_['fs']['readFileSync'](f8h_du), o9zry4 != null && o9zry4['runWith']([0x0, { 'data': q96$wb }]);
      } catch (n3e0j) {
        o9zry4 != null && o9zry4['runWith']([0x1]);
      }
    }, h8num_['readCache'] = function () {}, h8num_['writeCache'] = function (kicsvx) {
      var qbwr$9 = readyUrl['split']('?')[0x0];h8num_['filesListObj'][qbwr$9] = { 'md5': md5Name, 'readyUrl': readyUrl }, h8num_['fs']['writeFile']({ 'filePath': h8num_['fileNativeDir'] + '/' + h8num_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](h8num_['filesListObj']), 'success': function (qa$wb6) {}, 'fail': function (vip2s) {} });
    }, h8num_['setNativeFileDir'] = function (zr49y) {
      h8num_['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zr49y;
    }, h8num_['filesListObj'] = {}, h8num_['fileNativeDir'] = null, h8num_['fileListName'] = 'layaairfiles.txt', h8num_['ziyuFileData'] = {}, b4qr(h8num_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), h8num_;
  }(yo3),
      csivxk = function (svcxi) {
    function rz3oy() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], rz3oy['__super']['call'](this), this['_sound'] = rz3oy['_createSound']();
    }vxsi(rz3oy, 'laya.wx.mini.MiniSound', svcxi);var ejnlm0 = rz3oy['prototype'];return ejnlm0['load'] = function (ez4y3) {
      var kivscx = this;ez4y3 = zyo34e['formatURL'](ez4y3), this['url'] = ez4y3;if (rz3oy['_audioCache'][ez4y3]) {
        this['event']('complete');return;
      }function yzr49q() {
        if (rz3oy['_null'] != undefined) kivscx['_sound']['onCanplay'](rz3oy['_null']), kivscx['_sound']['onError'](rz3oy['_null']);else try {
          kivscx['_sound']['onCanplay'](null), kivscx['_sound']['onError'](null), rz3oy['_null'] = null;
        } catch (bq9$w6) {
          console['warn']('[wxmini] _clearSound:' + bq9$w6), kivscx['_sound']['onCanplay'](loej3), kivscx['_sound']['onError'](loej3), rz3oy['_null'] = loej3;
        }
      }function $q69wb() {
        yzr49q(), c1vkxs['loaded'] = !![], c1vkxs['event']('complete'), rz3oy['_audioCache'][c1vkxs['url']] = c1vkxs;
      }function t175c(vkxi) {
        console['error']('errCode=' + vkxi['errCode'] + '  errMsg=' + vkxi['errMsg']), yzr49q(), c1vkxs['event']('error');
      }function loej3() {}this['_sound']['onCanplay']($q69wb), this['_sound']['onError'](t175c), this['_sound']['src'] = ez4y3;var c1vkxs = this;
    }, ejnlm0['play'] = function (oyr43, t7g15c) {
      oyr43 === void 0x0 && (oyr43 = 0x0), t7g15c === void 0x0 && (t7g15c = 0x0);var rb4q;if (this['url'] == l3ezy['_tMusic']) {
        if (!rz3oy['_musicAudio']) rz3oy['_musicAudio'] = rz3oy['_createSound']();rb4q = rz3oy['_musicAudio'];
      } else rb4q = rz3oy['_createSound']();rb4q['src'] = this['url'];var bq$9 = new d5tgf(rb4q);return bq$9['url'] = this['url'], bq$9['loops'] = t7g15c, bq$9['startTime'] = oyr43, bq$9['play'](), l3ezy['addChannel'](bq$9), bq$9;
    }, ejnlm0['dispose'] = function () {
      var cvgxs = rz3oy['_audioCache'][this['url']];cvgxs && (cvgxs['src'] = '', delete rz3oy['_audioCache'][this['url']]);
    }, mj0n(0x0, ejnlm0, 'duration', function () {
      return this['_sound']['duration'];
    }), rz3oy['_createSound'] = function () {
      return rz3oy['_id']++, eoj3['window']['wx']['createInnerAudioContext']();
    }, rz3oy['_musicAudio'] = null, rz3oy['_id'] = 0x0, rz3oy['_audioCache'] = {}, rz3oy['_null'] = undefined, rz3oy;
  }(yo3),
      d5tgf = function (l0enm) {
    function pis2kv(a$6bq) {
      this['_audio'] = null, this['_onEnd'] = null, pis2kv['__super']['call'](this), this['_audio'] = a$6bq, this['_onEnd'] = nj_0['bind'](this['__onEnd'], this), a$6bq['onEnded'](this['_onEnd']);
    }vxsi(pis2kv, 'laya.wx.mini.MiniSoundChannel', l0enm);var rq4by = pis2kv['prototype'];return rq4by['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (df7h5['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, rq4by['__onNull'] = function () {}, rq4by['play'] = function () {
      this['isStopped'] = ![], l3ezy['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, rq4by['stop'] = function () {
      this['isStopped'] = !![], l3ezy['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (pis2kv['_null'] != undefined) this['_audio']['onEnded'](pis2kv['_null']);else try {
        this['_audio']['onEnded'](null), pis2kv['_null'] = null;
      } catch (vx1sc) {
        console['warn']('[wxmini] stop:' + vx1sc), this['_audio']['onEnded'](nj_0['bind'](this['__onNull'], this)), pis2kv['_null'] = nj_0['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, rq4by['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, rq4by['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], l3ezy['addChannel'](this), this['_audio']['play']();
    }, mj0n(0x0, rq4by, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), mj0n(0x0, rq4by, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), mj0n(0x0, rq4by, 'volume', function () {
      return 0x1;
    }, function (c5g71x) {}), pis2kv['_null'] = undefined, pis2kv;
  }(qb49r$);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var mnu8h_ in Laya) {
    var gc7x1 = Laya[mnu8h_];gc7x1 && gc7x1['__isclass'] && (exports[mnu8h_] = gc7x1);
  }
});