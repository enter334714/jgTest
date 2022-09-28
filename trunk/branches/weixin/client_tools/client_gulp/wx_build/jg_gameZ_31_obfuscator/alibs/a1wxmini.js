var c = wx.$a;
(function (window, document, zhd6qk) {
  var pi735r = zhd6qk['un'],
      fj21x = zhd6qk['uns'],
      oy40b = zhd6qk['static'],
      mbl9 = zhd6qk['class'],
      bla9m$ = zhd6qk['getset'],
      tq5dr = zhd6qk['__newvec'],
      jznkv = laya['utils']['Browser'],
      t58qdr = laya['events']['Event'],
      $b0yo = laya['events']['EventDispatcher'],
      nxhvj = laya['resource']['HTMLImage'],
      b9l$ma = laya['utils']['Handler'],
      qd8z6k = laya['display']['Input'],
      dz6q8k = laya['net']['Loader'],
      ymlb = laya['maths']['Matrix'],
      w4ge = laya['renders']['Render'],
      $yc = laya['utils']['RunDriver'],
      zdq6h = laya['media']['Sound'],
      dtq85 = laya['media']['SoundChannel'],
      uew_2 = laya['media']['SoundManager'],
      gfx21s = laya['display']['Stage'],
      jnvfsx = laya['net']['URL'],
      ymclb$ = laya['utils']['Utils'],
      xshvj = function () {
    function z6d8k() {}return mbl9(z6d8k, 'laya.wx.mini.MiniAdpter'), z6d8k['getJson'] = function (ml$bcy) {
      return JSON['parse'](ml$bcy);
    }, z6d8k['init'] = function (tpr73, z6hnvk) {
      tpr73 === void 0x0 && (tpr73 = ![]), z6hnvk === void 0x0 && (z6hnvk = ![]);if (z6d8k['_inited']) return;z6d8k['window'] = window;if (z6d8k['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;z6d8k['_inited'] = !![], z6d8k['isZiYu'] = z6hnvk, z6d8k['isPosMsgYu'] = tpr73, z6d8k['EnvConfig'] = {}, !z6d8k['isZiYu'] && (vkhznj['setNativeFileDir']('/layaairGame'), vkhznj['existDir'](vkhznj['fileNativeDir'], b9l$ma['create'](z6d8k, z6d8k['onMkdirCallBack']))), z6d8k['window']['focus'] = function () {}, zhd6qk['getUrlPath'] = function () {}, z6d8k['window']['logtime'] = function ($mlb9) {}, z6d8k['window']['alertTimeLog'] = function (f1wgu) {}, z6d8k['window']['resetShareInfo'] = function () {}, z6d8k['window']['CanvasRenderingContext2D'] = function () {}, z6d8k['window']['CanvasRenderingContext2D']['prototype'] = z6d8k['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], z6d8k['window']['document']['body']['appendChild'] = function () {}, z6d8k['EnvConfig']['pixelRatioInt'] = 0x0, $yc['getPixelRatio'] = z6d8k['pixelRatio'], z6d8k['_preCreateElement'] = jznkv['createElement'], jznkv['createElement'] = z6d8k['createElement'], $yc['createShaderCondition'] = z6d8k['createShaderCondition'], ymclb$['parseXMLFromString'] = z6d8k['parseXMLFromString'], qd8z6k['_createInputElement'] = vknh6z['_createInputElement'], z6d8k['EnvConfig']['load'] = dz6q8k['prototype']['load'], dz6q8k['prototype']['load'] = $bclma['prototype']['load'], z6d8k['isZiYu'] && tpr73 && wx['onMessage'](function (ge_w) {
        ge_w['isLoad'] && (vkhznj['ziyuFileData'][ge_w['url']] = ge_w['data']);
      });
    }, z6d8k['onMkdirCallBack'] = function (cy$l, zhn6v) {
      if (!cy$l) vkhznj['filesListObj'] = JSON['parse'](zhn6v['data']);
    }, z6d8k['pixelRatio'] = function () {
      if (!z6d8k['EnvConfig']['pixelRatioInt']) try {
        var r3p = wx['getSystemInfoSync']();return z6d8k['EnvConfig']['pixelRatioInt'] = r3p['pixelRatio'], r3p = r3p, r3p['pixelRatio'];
      } catch (o4ew) {}return z6d8k['EnvConfig']['pixelRatioInt'];
    }, z6d8k['createElement'] = function (shzvnj) {
      if (shzvnj == 'canvas') {
        var e_u2gw;return z6d8k['idx'] == 0x1 ? z6d8k['isZiYu'] ? (e_u2gw = sharedCanvas, e_u2gw['style'] = {}) : e_u2gw = window['canvas'] : e_u2gw = window['wx']['createCanvas'](), z6d8k['idx']++, e_u2gw;
      } else {
        if (shzvnj == 'textarea' || shzvnj == 'input') return z6d8k['onCreateInput'](shzvnj);else {
          if (shzvnj == 'div') {
            var xjhsvn = z6d8k['_preCreateElement'](shzvnj);return xjhsvn['contains'] = function (_0o4w) {
              return null;
            }, xjhsvn['removeChild'] = function ($blcm) {}, xjhsvn;
          } else return z6d8k['_preCreateElement'](shzvnj);
        }
      }
    }, z6d8k['onCreateInput'] = function (fnjsx) {
      var vnjxsf = z6d8k['_preCreateElement'](fnjsx);return vnjxsf['focus'] = vknh6z['wxinputFocus'], vnjxsf['blur'] = vknh6z['wxinputblur'], vnjxsf['style'] = {}, vnjxsf['value'] = 0x0, vnjxsf['parentElement'] = {}, vnjxsf['placeholder'] = {}, vnjxsf['type'] = {}, vnjxsf['setColor'] = function (p735r) {}, vnjxsf['setType'] = function (zknjh) {}, vnjxsf['setFontFace'] = function (gu1wf) {}, vnjxsf['addEventListener'] = function (_uwge4) {}, vnjxsf['contains'] = function (cy$mlb) {
        return null;
      }, vnjxsf['removeChild'] = function (bm9a$l) {}, vnjxsf;
    }, z6d8k['createShaderCondition'] = function (ow0_e4) {
      var geu_w = this,
          uw2ge = function () {
        var cyb40o = ow0_e4;return geu_w[ow0_e4['replace']('this.', '')];
      };return uw2ge;
    }, z6d8k['EnvConfig'] = null, z6d8k['window'] = null, z6d8k['_preCreateElement'] = null, z6d8k['_inited'] = ![], z6d8k['wxRequest'] = null, z6d8k['systemInfo'] = null, z6d8k['version'] = '0.0.1', z6d8k['isZiYu'] = ![], z6d8k['isPosMsgYu'] = ![], z6d8k['parseXMLFromString'] = function (qtrd58) {
      var xsgf, b0o4cy;qtrd58 = qtrd58['replace'](/>\s+</g, '><');try {
        xsgf = new window['Parser']['DOMParser']()['parseFromString'](qtrd58, 'text/xml');
      } catch (gf21w) {
        throw '需要引入xml解析库文件';
      }return xsgf;
    }, z6d8k['idx'] = 0x1, z6d8k;
  }(),
      p573ir = function () {
    function dt8rq() {}mbl9(dt8rq, 'laya.wx.mini.MiniImage');var svjnfx = dt8rq['prototype'];return svjnfx['_loadImage'] = function (u4_weg) {
      var nshzjv = this,
          nsxvj = ![];u4_weg['indexOf']('layaNativeDir/') == -0x1 && (nsxvj = !![], u4_weg = jnvfsx['formatURL'](u4_weg));if (!vkhznj['getFileInfo'](u4_weg)) {
        if (u4_weg['indexOf']('http://') != -0x1 || u4_weg['indexOf']('https://') != -0x1) vkhznj['downImg'](u4_weg, new b9l$ma(dt8rq, dt8rq['onDownImgCallBack'], [u4_weg, nshzjv]), u4_weg);else dt8rq['onCreateImage'](u4_weg, nshzjv, !![]);
      } else dt8rq['onCreateImage'](u4_weg, nshzjv, !nsxvj);
    }, dt8rq['onDownImgCallBack'] = function (d58qtr, dzq86k, cbo) {
      if (!cbo) dt8rq['onCreateImage'](d58qtr, dzq86k);else dzq86k['onError'](null);
    }, dt8rq['onCreateImage'] = function ($labm, njxvf, nzhjs) {
      nzhjs === void 0x0 && (nzhjs = ![]);var k6q8t;if (!nzhjs) {
        var eug_4 = vkhznj['getFileInfo']($labm),
            g_w4ue = eug_4['md5'];k6q8t = vkhznj['getFileNativePath'](g_w4ue);
      } else k6q8t = $labm;if (njxvf['imgCache'] == null) njxvf['imgCache'] = {};var vzhnsj;function tkqd() {
        vzhnsj['onload'] = null, vzhnsj['onerror'] = null, delete njxvf['imgCache'][$labm];
      };var $labc = function () {
        tkqd(), njxvf['onLoaded'](vzhnsj);
      },
          qdt5r = function () {
        tkqd(), njxvf['event']('error', 'Load image failed');
      };njxvf['_type'] == 'nativeimage' ? (vzhnsj = new jznkv['window']['Image'](), vzhnsj['crossOrigin'] = '', vzhnsj['onload'] = $labc, vzhnsj['onerror'] = qdt5r, vzhnsj['src'] = k6q8t, njxvf['imgCache'][$labm] = vzhnsj) : new nxhvj['create'](k6q8t, { 'onload': $labc, 'onerror': qdt5r, 'onCreate': function (sxnj1) {
          vzhnsj = sxnj1, njxvf['imgCache'][$labm] = sxnj1;
        } });
    }, dt8rq;
  }(),
      vknh6z = function () {
    function qd85rt() {}return mbl9(qd85rt, 'laya.wx.mini.MiniInput'), qd85rt['_createInputElement'] = function () {
      qd8z6k['_initInput'](qd8z6k['area'] = jznkv['createElement']('textarea')), qd8z6k['_initInput'](qd8z6k['input'] = jznkv['createElement']('input')), qd8z6k['inputContainer'] = jznkv['createElement']('div'), qd8z6k['inputContainer']['style']['position'] = 'absolute', qd8z6k['inputContainer']['style']['zIndex'] = 0x186a0, jznkv['container']['appendChild'](qd8z6k['inputContainer']), qd8z6k['inputContainer']['setPos'] = function (drq8t6, hvkz6d) {
        qd8z6k['inputContainer']['style']['left'] = drq8t6 + 'px', qd8z6k['inputContainer']['style']['top'] = hvkz6d + 'px';
      }, zhd6qk['stage']['on']('resize', null, qd85rt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (l$mb9) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), uew_2['_soundClass'] = dzk68q, uew_2['_musicClass'] = dzk68q, window['_videoClass'] = _e04;
    }, qd85rt['_onStageResize'] = function () {
      var y$mlb = zhd6qk['stage']['_canvasTransform']['identity']();y$mlb['scale'](jznkv['width'] / w4ge['canvas']['width'] / $yc['getPixelRatio'](), jznkv['height'] / w4ge['canvas']['height'] / $yc['getPixelRatio']());
    }, qd85rt['wxinputFocus'] = function (t86rdq) {
      var $ly = qd8z6k['inputElement']['target'];if ($ly && !$ly['editable']) return;xshvj['window']['wx']['offKeyboardConfirm'](), xshvj['window']['wx']['offKeyboardInput'](), xshvj['window']['wx']['showKeyboard']({ 'defaultValue': $ly['text'], 'maxLength': $ly['maxChars'], 'multiple': $ly['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (dv6) {}, 'fail': function (m9$abl) {} }), xshvj['window']['wx']['onKeyboardConfirm'](function (f2xg) {
        var jsxnv = f2xg ? f2xg['value'] : '';$ly['text'] = jsxnv, $ly['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), xshvj['window']['wx']['onKeyboardInput'](function (yo$b0) {
        var l0yc = yo$b0 ? yo$b0['value'] : '';if (!$ly['multiline']) {
          if (l0yc['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }$ly['text'] = l0yc, $ly['event']('input');
      });
    }, qd85rt['inputEnter'] = function () {
      qd8z6k['inputElement']['target']['focus'] = ![];
    }, qd85rt['wxinputblur'] = function () {
      qd85rt['hideKeyboard']();
    }, qd85rt['hideKeyboard'] = function () {
      xshvj['window']['wx']['offKeyboardConfirm'](), xshvj['window']['wx']['offKeyboardInput'](), xshvj['window']['wx']['hideKeyboard']({ 'success': function (y_o4e) {
          console['log']('隐藏键盘');
        }, 'fail': function (dtqr6) {
          console['log']('隐藏键盘出错:' + (dtqr6 ? dtqr6['errMsg'] : ''));
        } });
    }, qd85rt;
  }(),
      $bclma = function () {
    function td6k() {}mbl9(td6k, 'laya.wx.mini.MiniLoader');var jvnkh = td6k['prototype'];return jvnkh['load'] = function (hzkq6, jkhvz, tr6q8d, $lbcma, njzhs) {
      tr6q8d === void 0x0 && (tr6q8d = !![]), njzhs === void 0x0 && (njzhs = ![]);var hz6k = this;hz6k['_url'] = hzkq6;if (hzkq6['indexOf']('data:image') === 0x0) hz6k['_type'] = jkhvz = 'image';else hz6k['_type'] = jkhvz || (jkhvz = hz6k['getTypeFromUrl'](hzkq6));hz6k['_cache'] = tr6q8d, hz6k['_data'] = null;var vzd = 'ascii';if (hzkq6['indexOf']('.fnt') != -0x1) vzd = 'utf8';else jkhvz == 'arraybuffer' && (vzd = '');;var yo_0c = ymclb$['getFileExtension'](hzkq6);if (td6k['_fileTypeArr']['indexOf'](yo_0c) != -0x1) xshvj['EnvConfig']['load']['call'](this, hzkq6, jkhvz, tr6q8d, $lbcma, njzhs);else {
        if (!vkhznj['getFileInfo'](hzkq6)) {
          if (hzkq6['indexOf']('layaNativeDir/') != -0x1) {
            if (xshvj['isZiYu']) {
              var b$lycm = vkhznj['ziyuFileData'][hzkq6];hz6k['onLoaded'](b$lycm);return;
            } else {
              cosnole['log']('read read'), vkhznj['read'](hzkq6, vzd, new b9l$ma(td6k, td6k['onReadNativeCallBack'], [vzd, hzkq6, jkhvz, tr6q8d, $lbcma, njzhs, hz6k]));return;
            }
          }if (jnvfsx['rootPath'] == '') var hk6vzd = hzkq6;else hk6vzd = hzkq6['split'](jnvfsx['rootPath'])[0x0];hzkq6['indexOf']('http://') != -0x1 || hzkq6['indexOf']('https://') != -0x1 ? xshvj['EnvConfig']['load']['call'](hz6k, hzkq6, jkhvz, tr6q8d, $lbcma, njzhs) : vkhznj['readFile'](hk6vzd, vzd, new b9l$ma(td6k, td6k['onReadNativeCallBack'], [vzd, hzkq6, jkhvz, tr6q8d, $lbcma, njzhs, hz6k]), hzkq6);
        } else xshvj['EnvConfig']['load']['call'](this, hzkq6, jkhvz, tr6q8d, $lbcma, njzhs);
      }
    }, jvnkh['resMgrLoad'] = function (y4bc, p73i5, e2w1g, x2fu, jvnhx, ym$bcl, alb) {
      e2w1g === void 0x0 && (e2w1g = 0x0), x2fu === void 0x0 && (x2fu = ![]), jvnhx === void 0x0 && (jvnhx = ![]), ym$bcl === void 0x0 && (ym$bcl = 0x0), alb === void 0x0 && (alb = 0x3), y4bc['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', y4bc), xshvj['EnvConfig']['resMgrLoad'](y4bc, (vjsxh, jfx1, znhkv6) => {
        td6k['prototype']['resMgrLoadCallBack'](vjsxh, jfx1, znhkv6, p73i5);
      }, e2w1g, x2fu, jvnhx, ym$bcl, alb);
    }, jvnkh['resMgrLoadCallBack'] = function (k6hq, g2x1s, vhnxjs, ml$yb) {
      console['log']('buff:::', k6hq, vhnxjs, vkhznj['fileNativeDir'] + '///' + vkhznj['fileListName']), ml$yb(k6hq, g2x1s, vhnxjs);
    }, jvnkh['clearRes'] = function (kvd6, oc40y_) {
      oc40y_ === void 0x0 && (oc40y_ = ![]);var zhjnk = this;zhjnk['clearRes'](kvd6, oc40y_);var u4w_g = vkhznj['getFileInfo'](kvd6);if (u4w_g && (kvd6['indexOf']('http://') != -0x1 || kvd6['indexOf']('https://') != -0x1)) {
        var mcab$l = u4w_g['md5'],
            fsnx1j = vkhznj['getFileNativePath'](mcab$l);vkhznj['remove'](fsnx1j);
      }
    }, td6k['onReadNativeCallBack'] = function (mb$ycl, xjfn1s, hjxnsv, knzj, ug4_, vh6nzk, jxnshv, rdt58q, ew2g_u) {
      knzj === void 0x0 && (knzj = !![]), vh6nzk === void 0x0 && (vh6nzk = ![]), rdt58q === void 0x0 && (rdt58q = 0x0);if (!rdt58q) {
        var jfsn1x;if (hjxnsv == 'json' || hjxnsv == 'atlas') jfsn1x = xshvj['getJson'](ew2g_u['data']);else hjxnsv == 'xml' ? jfsn1x = ymclb$['parseXMLFromString'](ew2g_u['data']) : jfsn1x = ew2g_u['data'];jxnshv['onLoaded'](jfsn1x), !xshvj['isZiYu'] && xshvj['isPosMsgYu'] && hjxnsv != 'arraybuffer' && wx['postMessage']({ 'url': xjfn1s, 'data': jfsn1x, 'isLoad': !![] });
      } else rdt58q == 0x1 && xshvj['EnvConfig']['load']['call'](jxnshv, xjfn1s, hjxnsv, knzj, ug4_, vh6nzk);
    }, oy40b(td6k, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), td6k;
  }(),
      vkhznj = function (v6zhd) {
    function ir3p7() {
      ir3p7['__super']['call'](this);;
    }return mbl9(ir3p7, 'laya.wx.mini.MiniFileMgr', v6zhd), ir3p7['isLoadFile'] = function (r58t37) {
      return ir3p7['_fileTypeArr']['indexOf'](r58t37) != -0x1 ? !![] : ![];
    }, ir3p7['getFileInfo'] = function (xnjsh) {
      var kvznjh = xnjsh['split']('?')[0x0],
          d68kzq = ir3p7['filesListObj'][kvznjh];if (d68kzq == null) return null;else return d68kzq;return null;
    }, ir3p7['onFileUpdate'] = function (qh6dz, uwg_2e) {
      var z6qdkh = qh6dz['split']('/'),
          vkjh = z6qdkh[z6qdkh['length'] - 0x1],
          x12sgf = ir3p7['getFileInfo'](uwg_2e);if (x12sgf == null) ir3p7['onSaveFile'](uwg_2e, vkjh);else {
        if (x12sgf['readyUrl'] != uwg_2e) ir3p7['remove'](vkjh, uwg_2e);
      }
    }, ir3p7['exits'] = function (u4w_ge, r58dqt) {
      var zqd68k = ir3p7['getFileNativePath'](u4w_ge);ir3p7['fs']['getFileInfo']({ 'filePath': zqd68k, 'success': function (uwf1g) {
          r58dqt != null && r58dqt['runWith']([0x0, uwf1g]);
        }, 'fail': function (_uweg4) {
          r58dqt != null && r58dqt['runWith']([0x1, _uweg4]);
        } });
    }, ir3p7['read'] = function (zvdh, u_ewo, pi75r, b4yc) {
      u_ewo === void 0x0 && (u_ewo = 'ascill'), b4yc === void 0x0 && (b4yc = '');var xfj1sn;b4yc != '' ? xfj1sn = ir3p7['getFileNativePath'](zvdh) : xfj1sn = zvdh, ir3p7['fs']['readFile']({ 'filePath': xfj1sn, 'encoding': u_ewo, 'success': function (_4y) {
          pi75r != null && pi75r['runWith']([0x0, _4y]);
        }, 'fail': function (oy0c4b) {
          if (oy0c4b && b4yc != '') ir3p7['down'](b4yc, u_ewo, pi75r, b4yc);else pi75r != null && pi75r['runWith']([0x1]);
        } });
    }, ir3p7['readNativeFile'] = function (r5t8d, uw_2ge) {
      ir3p7['fs']['readFile']({ 'filePath': r5t8d, 'encoding': '', 'success': function (gu1we2) {
          uw_2ge != null && uw_2ge['runWith']([0x0]);
        }, 'fail': function (hvk6) {
          uw_2ge != null && uw_2ge['runWith']([0x1]);
        } });
    }, ir3p7['down'] = function (jn, jshxv, q6kdt8, jzkvhn) {
      jshxv === void 0x0 && (jshxv = 'ascill'), jzkvhn === void 0x0 && (jzkvhn = '');var _ewg2 = ir3p7['getFileNativePath'](jzkvhn),
          q86kd = ir3p7['wxdown']({ 'url': jn, 'filePath': _ewg2, 'success': function (u1gwf2) {
          if (u1gwf2['statusCode'] === 0xc8) ir3p7['readFile'](u1gwf2['filePath'], jshxv, q6kdt8, jzkvhn);
        }, 'fail': function ($ob0cy) {
          q6kdt8 != null && q6kdt8['runWith']([0x1, $ob0cy]);
        } });q86kd['onProgressUpdate'](function (jhnx) {
        q6kdt8 != null && q6kdt8['runWith']([0x2, jhnx['progress']]);
      });
    }, ir3p7['readFile'] = function (c0b$oy, l$y0, e1gw2u, nzhkj) {
      l$y0 === void 0x0 && (l$y0 = 'ascill'), nzhkj === void 0x0 && (nzhkj = ''), ir3p7['fs']['readFile']({ 'filePath': c0b$oy, 'encoding': l$y0, 'success': function (jsfvn) {
          if (c0b$oy['indexOf']('http://') != -0x1 || c0b$oy['indexOf']('https://') != -0x1) ir3p7['onFileUpdate'](c0b$oy, nzhkj);e1gw2u != null && e1gw2u['runWith']([0x0, jsfvn]);
        }, 'fail': function (kdq8z) {
          if (kdq8z) e1gw2u != null && e1gw2u['runWith']([0x1, kdq8z]);
        } });
    }, ir3p7['downImg'] = function (n6kzh, qzdh6k, nhkjz) {
      nhkjz === void 0x0 && (nhkjz = '');var jhvnsx = ir3p7['wxdown']({ 'url': n6kzh, 'success': function (vk6znh) {
          vk6znh['statusCode'] === 0xc8 && ir3p7['copyFile'](vk6znh['tempFilePath'], nhkjz, qzdh6k);
        }, 'fail': function (pi357r) {
          qzdh6k != null && qzdh6k['runWith']([0x1, pi357r]);
        } });
    }, ir3p7['copyFile'] = function (jzhsvn, nzv6h, vzjhk) {
      var fxnvs = jzhsvn['split']('/'),
          xjsf21 = fxnvs[fxnvs['length'] - 0x1],
          owe0_4 = nzv6h['split']('?')[0x0],
          fux = ir3p7['getFileInfo'](nzv6h),
          x2g1fu = ir3p7['getFileNativePath'](xjsf21);ir3p7['fs']['copyFile']({ 'srcPath': jzhsvn, 'destPath': x2g1fu, 'success': function (qd5) {
          if (!fux) ir3p7['onSaveFile'](nzv6h, xjsf21), vzjhk != null && vzjhk['runWith']([0x0]);else {
            if (fux['readyUrl'] != nzv6h) ir3p7['remove'](xjsf21, nzv6h, vzjhk);
          }
        }, 'fail': function (t8dkq6) {
          vzjhk != null && vzjhk['runWith']([0x1, t8dkq6]);
        } });
    }, ir3p7['getFileNativePath'] = function (dz6khq) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + dz6khq;
    }, ir3p7['remove'] = function (rqt875, m9bl$a, xfjsn) {
      m9bl$a === void 0x0 && (m9bl$a = '');var xgf1s2 = ir3p7['getFileInfo'](m9bl$a),
          $ylbc = ir3p7['getFileNativePath'](xgf1s2['md5']);zhd6qk['loader']['clearRes'](xgf1s2['readyUrl']), ir3p7['fs']['unlink']({ 'filePath': $ylbc, 'success': function (kt68q) {
          if (m9bl$a != '') ir3p7['onSaveFile'](m9bl$a, rqt875);xfjsn != null && xfjsn['runWith']([0x0]);
        }, 'fail': function (f1g2uw) {} });
    }, ir3p7['onSaveFile'] = function (xsfjnv, nhjxv) {
      var _yc40 = xsfjnv['split']('?')[0x0];ir3p7['filesListObj'][_yc40] = { 'md5': nhjxv, 'readyUrl': xsfjnv }, ir3p7['fs']['writeFile']({ 'filePath': ir3p7['fileNativeDir'] + '/' + ir3p7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ir3p7['filesListObj']), 'success': function (c$ab) {
          console['log']('写入测试测试成功：', c$ab);
        }, 'fail': function (am9bl$) {
          console['log']('写入测试测试失败：', am9bl$);
        } });
    }, ir3p7['existDir'] = function (y04e_, cyo0_4) {
      ir3p7['fs']['mkdir']({ 'dirPath': y04e_, 'success': function (qdkzh6) {
          cyo0_4 != null && cyo0_4['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (g4wue) {
          if (g4wue['errMsg']['indexOf']('file already exists') != -0x1) ir3p7['readSync'](ir3p7['fileListName'], 'utf8', cyo0_4);else cyo0_4 != null && cyo0_4['runWith']([0x1, g4wue]);
        } });
    }, ir3p7['readSync'] = function (lambc, y4bco0, vsfnxj, bcmy) {
      y4bco0 === void 0x0 && (y4bco0 = 'ascill'), bcmy === void 0x0 && (bcmy = '');var q7t = ir3p7['getFileNativePath'](lambc),
          cmlba;try {
        cmlba = ir3p7['fs']['readFileSync'](q7t), vsfnxj != null && vsfnxj['runWith']([0x0, { 'data': cmlba }]);
      } catch (_oe04y) {
        vsfnxj != null && vsfnxj['runWith']([0x1]);
      }
    }, ir3p7['readCache'] = function () {}, ir3p7['writeCache'] = function (acbml$) {
      var xhvsj = readyUrl['split']('?')[0x0];ir3p7['filesListObj'][xhvsj] = { 'md5': md5Name, 'readyUrl': readyUrl }, ir3p7['fs']['writeFile']({ 'filePath': ir3p7['fileNativeDir'] + '/' + ir3p7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ir3p7['filesListObj']), 'success': function ($lmcab) {}, 'fail': function (_we4u) {} });
    }, ir3p7['setNativeFileDir'] = function (zkhvd) {
      ir3p7['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zkhvd;
    }, ir3p7['filesListObj'] = {}, ir3p7['fileNativeDir'] = null, ir3p7['fileListName'] = 'layaairfiles.txt', ir3p7['ziyuFileData'] = {}, oy40b(ir3p7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ir3p7;
  }($b0yo),
      dzk68q = function (hk6qzd) {
    function t75q8r() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], t75q8r['__super']['call'](this), this['_sound'] = t75q8r['_createSound'](), this['_chanell'] = new cby$ml(this['_sound']);
    }mbl9(t75q8r, 'laya.wx.mini.MiniSound', hk6qzd);var t6d = t75q8r['prototype'];return t6d['load'] = function (qd58) {
      var e4wu_g = this;qd58 = jnvfsx['formatURL'](qd58), this['url'] = qd58;if (t75q8r['_audioCache'][qd58]) {
        this['event']('complete');return;
      }function wo40_() {
        if (t75q8r['_null'] != undefined) e4wu_g['_sound']['onCanplay'](t75q8r['_null']), e4wu_g['_sound']['onError'](t75q8r['_null']);else try {
          e4wu_g['_sound']['onCanplay'](null), e4wu_g['_sound']['onError'](null), t75q8r['_null'] = null;
        } catch (zsj) {
          console['warn']('[wxmini] _clearSound:' + zsj), e4wu_g['_sound']['onCanplay'](n1jxs), e4wu_g['_sound']['onError'](n1jxs), t75q8r['_null'] = n1jxs;
        }
      }function ue21w() {
        qt8d5['loaded'] = !![], qt8d5['event']('complete'), t75q8r['_audioCache'][qt8d5['url']] = qt8d5;
      }function u2wgf1(qh6zdk) {
        console['error']('errCode=' + qh6zdk['errCode'] + '  errMsg=' + qh6zdk['errMsg']), qt8d5['event']('error');
      }function n1jxs() {}this['_sound']['onCanplay'](ue21w), this['_sound']['onError'](u2wgf1), this['_sound']['src'] = qd58;var qt8d5 = this;
    }, t6d['play'] = function (nfs1x, p5i7r) {
      nfs1x === void 0x0 && (nfs1x = 0x0), p5i7r === void 0x0 && (p5i7r = 0x0);var r8t57q, kz8q6d;if (this['url'] == uew_2['_tMusic']) {
        if (!t75q8r['_musicAudio']) t75q8r['_musicAudio'] = this['_sound'];r8t57q = t75q8r['_musicAudio'], kz8q6d = this['_chanell'];
      } else r8t57q = this['_sound'], kz8q6d = this['_chanell'];return r8t57q['src'] = this['url'], r8t57q['startTime'] = 0x0, kz8q6d['isStopped'] && (kz8q6d['url'] = this['url'], kz8q6d['loops'] = p5i7r, kz8q6d['startTime'] = nfs1x, kz8q6d['play'](), uew_2['addChannel'](kz8q6d)), kz8q6d;
    }, t6d['dispose'] = function () {
      var njvk = t75q8r['_audioCache'][this['url']];njvk && (njvk['src'] = '', delete t75q8r['_audioCache'][this['url']]);
    }, bla9m$(0x0, t6d, 'duration', function () {
      return this['_sound']['duration'];
    }), t75q8r['_createSound'] = function () {
      t75q8r['_id']++;var yb0lc$ = xshvj['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return yb0lc$;
    }, t75q8r['_musicAudio'] = null, t75q8r['_id'] = 0x0, t75q8r['_audioCache'] = {}, t75q8r['_null'] = undefined, t75q8r;
  }($b0yo),
      cby$ml = function ($oy0b) {
    function xfnjsv($clyb0) {
      this['_audio'] = null, this['_onEnd'] = null, xfnjsv['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = $clyb0, this['_onEnd'] = ymclb$['bind'](this['__onEnd'], this), $clyb0['onEnded'](this['_onEnd']);
    }mbl9(xfnjsv, 'laya.wx.mini.MiniSoundChannel', $oy0b);var xnsjh = xfnjsv['prototype'];return xnsjh['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (zhd6qk['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, xnsjh['__onNull'] = function () {}, xnsjh['play'] = function () {
      this['isStopped'] = ![], uew_2['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, xnsjh['stop'] = function () {
      this['isStopped'] = !![], uew_2['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, xnsjh['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, xnsjh['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], uew_2['addChannel'](this), this['_audio']['play']();
    }, bla9m$(0x0, xnsjh, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), bla9m$(0x0, xnsjh, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), bla9m$(0x0, xnsjh, 'volume', function () {
      return 0x1;
    }, function (o0b$) {}), xfnjsv['_null'] = undefined, xfnjsv;
  }(dtq85),
      _e04 = function () {
    function u2egw() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = xshvj['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }mbl9(u2egw, 'laya.wx.mini.MiniVideo');var dv6kh = u2egw['prototype'];return dv6kh['on'] = function (zvjkh, ueg_2, r7t8q) {
      if (zvjkh == 'loadedmetadata') this['onPlayFunc'] = r7t8q['bind'](ueg_2), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else zvjkh == 'ended' && (this['onEndedFunC'] = r7t8q['bind'](ueg_2), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, dv6kh['onTimeUpdateFunc'] = function ($lyc0) {
      this['position'] = $lyc0['position'], this['_duration'] = $lyc0['duration'];
    }, dv6kh['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, dv6kh['onended'] = function (c_o, _4cy) {
      this['onEndedFunC'] = _4cy['bind'](c_o), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, dv6kh['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, dv6kh['off'] = function (nvhk6z, oy$b0, h6vkdz) {
      if (nvhk6z == 'loadedmetadata') this['onPlayFunc'] = h6vkdz['bind'](oy$b0), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else nvhk6z == 'ended' && (this['onEndedFunC'] = h6vkdz['bind'](oy$b0), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, dv6kh['load'] = function (a9bl$m) {
      if (!this['videoElement']) return;this['videoElement']['src'] = a9bl$m;
    }, dv6kh['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, dv6kh['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, dv6kh['size'] = function (oe_4, w4_ge) {
      if (!this['videoElement']) return;this['videoElement']['width'] = oe_4, this['videoElement']['height'] = w4_ge;
    }, dv6kh['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, dv6kh['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, bla9m$(0x0, dv6kh, 'duration', function () {
      return this['_duration'];
    }), bla9m$(0x0, dv6kh, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (fs21xj) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = fs21xj;
    }), bla9m$(0x0, dv6kh, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), bla9m$(0x0, dv6kh, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), bla9m$(0x0, dv6kh, 'ended', function () {
      return this['videoend'];
    }), bla9m$(0x0, dv6kh, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (fvj) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = fvj;
    }), bla9m$(0x0, dv6kh, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (m$bl9a) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = m$bl9a;
    }), bla9m$(0x0, dv6kh, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (zshnvj) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = zshnvj;
    }), bla9m$(0x0, dv6kh, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), bla9m$(0x0, dv6kh, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (hkvzjn) {
      if (!this['videoElement']) return;this['videoElement']['x'] = hkvzjn;
    }), bla9m$(0x0, dv6kh, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (jvxsfn) {
      if (!this['videoElement']) return;this['videoElement']['y'] = jvxsfn;
    }), bla9m$(0x0, dv6kh, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), bla9m$(0x0, dv6kh, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (q68zdk) {
      if (!this['videoElement']) return;this['videoElement']['src'] = q68zdk;
    }), bla9m$(0x0, dv6kh, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (vjsx) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = vjsx;
    }), bla9m$(0x0, dv6kh, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (vjsfxn) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = vjsfxn;
    }), u2egw;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var eow in Laya) {
    var j1xf2s = Laya[eow];j1xf2s && j1xf2s['__isclass'] && (exports[eow] = j1xf2s);
  }
});