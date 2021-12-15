var O = wx.$C;
(function (window, document, v_syn) {
  var hdq0w = v_syn['un'],
      fn4v_g = v_syn['uns'],
      ucl5o = v_syn['static'],
      u98z = v_syn['class'],
      d8jrz = v_syn['getset'],
      ibae62 = v_syn['__newvec'],
      vsg_n = laya['utils']['Browser'],
      xq170w = laya['events']['Event'],
      qf731 = laya['events']['EventDispatcher'],
      g_fsn = laya['resource']['HTMLImage'],
      ays_6 = laya['utils']['Handler'],
      z$u8r = laya['display']['Input'],
      loctp = laya['net']['Loader'],
      r8$9uz = laya['maths']['Matrix'],
      a6s2ny = laya['renders']['Render'],
      aiys = laya['utils']['RunDriver'],
      xdhj0w = laya['media']['Sound'],
      p5lu = laya['media']['SoundChannel'],
      $9j8z = laya['media']['SoundManager'],
      pu$l5 = laya['display']['Stage'],
      h9dzwj = laya['net']['URL'],
      jr$z89 = laya['utils']['Utils'],
      gf43v1 = function () {
    function clpt() {}return u98z(clpt, 'laya.wx.mini.MiniAdpter'), clpt['getJson'] = function (plcu5) {
      return JSON['parse'](plcu5);
    }, clpt['init'] = function (y_na, nvfgs_) {
      y_na === void 0x0 && (y_na = ![]), nvfgs_ === void 0x0 && (nvfgs_ = ![]);if (clpt['_inited']) return;clpt['window'] = window;if (clpt['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;clpt['_inited'] = !![], clpt['isZiYu'] = nvfgs_, clpt['isPosMsgYu'] = y_na, clpt['EnvConfig'] = {}, !clpt['isZiYu'] && (b2yi6['setNativeFileDir']('/layaairGame'), b2yi6['existDir'](b2yi6['fileNativeDir'], ays_6['create'](clpt, clpt['onMkdirCallBack']))), clpt['window']['focus'] = function () {}, v_syn['getUrlPath'] = function () {}, clpt['window']['logtime'] = function (ab6) {}, clpt['window']['alertTimeLog'] = function ($ur9z8) {}, clpt['window']['resetShareInfo'] = function () {}, clpt['window']['CanvasRenderingContext2D'] = function () {}, clpt['window']['CanvasRenderingContext2D']['prototype'] = clpt['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], clpt['window']['document']['body']['appendChild'] = function () {}, clpt['EnvConfig']['pixelRatioInt'] = 0x0, aiys['getPixelRatio'] = clpt['pixelRatio'], clpt['_preCreateElement'] = vsg_n['createElement'], vsg_n['createElement'] = clpt['createElement'], aiys['createShaderCondition'] = clpt['createShaderCondition'], jr$z89['parseXMLFromString'] = clpt['parseXMLFromString'], z$u8r['_createInputElement'] = aysvn['_createInputElement'], clpt['EnvConfig']['load'] = loctp['prototype']['load'], loctp['prototype']['load'] = x1743['prototype']['load'], clpt['isZiYu'] && y_na && wx['onMessage'](function (_4fng) {
        _4fng['isLoad'] && (b2yi6['ziyuFileData'][_4fng['url']] = _4fng['data']);
      });
    }, clpt['onMkdirCallBack'] = function (gn_fvs, ltm5ok) {
      if (!gn_fvs) b2yi6['filesListObj'] = JSON['parse'](ltm5ok['data']);
    }, clpt['pixelRatio'] = function () {
      if (!clpt['EnvConfig']['pixelRatioInt']) try {
        var $ruz = wx['getSystemInfoSync']();return clpt['EnvConfig']['pixelRatioInt'] = $ruz['pixelRatio'], $ruz = $ruz, $ruz['pixelRatio'];
      } catch (ysa_n) {}return clpt['EnvConfig']['pixelRatioInt'];
    }, clpt['createElement'] = function (tlcpo) {
      if (tlcpo == 'canvas') {
        var ur8$pc;return clpt['idx'] == 0x1 ? clpt['isZiYu'] ? (ur8$pc = sharedCanvas, ur8$pc['style'] = {}) : ur8$pc = window['canvas'] : ur8$pc = window['wx']['createCanvas'](), clpt['idx']++, ur8$pc;
      } else {
        if (tlcpo == 'textarea' || tlcpo == 'input') return clpt['onCreateInput'](tlcpo);else {
          if (tlcpo == 'div') {
            var f3v1 = clpt['_preCreateElement'](tlcpo);return f3v1['contains'] = function (i26bya) {
              return null;
            }, f3v1['removeChild'] = function (o5tlmk) {}, f3v1;
          } else return clpt['_preCreateElement'](tlcpo);
        }
      }
    }, clpt['onCreateInput'] = function (g4f_) {
      var tlkmo = clpt['_preCreateElement'](g4f_);return tlkmo['focus'] = aysvn['wxinputFocus'], tlkmo['blur'] = aysvn['wxinputblur'], tlkmo['style'] = {}, tlkmo['value'] = 0x0, tlkmo['parentElement'] = {}, tlkmo['placeholder'] = {}, tlkmo['type'] = {}, tlkmo['setColor'] = function (clpo) {}, tlkmo['setType'] = function (n4_fvg) {}, tlkmo['setFontFace'] = function (sy2i) {}, tlkmo['addEventListener'] = function (dx0hj) {}, tlkmo['contains'] = function (svg_fn) {
        return null;
      }, tlkmo['removeChild'] = function (xwhq70) {}, tlkmo;
    }, clpt['createShaderCondition'] = function (t5cplo) {
      var d98 = this,
          f143v = function () {
        var fg3v14 = t5cplo;return d98[t5cplo['replace']('this.', '')];
      };return f143v;
    }, clpt['EnvConfig'] = null, clpt['window'] = null, clpt['_preCreateElement'] = null, clpt['_inited'] = ![], clpt['wxRequest'] = null, clpt['systemInfo'] = null, clpt['version'] = '0.0.1', clpt['isZiYu'] = ![], clpt['isPosMsgYu'] = ![], clpt['parseXMLFromString'] = function (fsgvn_) {
      var z9hr, r$98uz;fsgvn_ = fsgvn_['replace'](/>\s+</g, '><');try {
        z9hr = new window['Parser']['DOMParser']()['parseFromString'](fsgvn_, 'text/xml');
      } catch (zrd9h) {
        throw '需要引入xml解析库文件';
      }return z9hr;
    }, clpt['idx'] = 0x1, clpt;
  }(),
      o5mltk = function () {
    function $ru8c() {}u98z($ru8c, 'laya.wx.mini.MiniImage');var mtk5 = $ru8c['prototype'];return mtk5['_loadImage'] = function ($lcp) {
      var z9jwdh = this,
          g_yvn = ![];$lcp['indexOf']('layaNativeDir/') == -0x1 && (g_yvn = !![], $lcp = h9dzwj['formatURL']($lcp));if (!b2yi6['getFileInfo']($lcp)) {
        if ($lcp['indexOf']('http://') != -0x1 || $lcp['indexOf']('https://') != -0x1) b2yi6['downImg']($lcp, new ays_6($ru8c, $ru8c['onDownImgCallBack'], [$lcp, z9jwdh]), $lcp);else $ru8c['onCreateImage']($lcp, z9jwdh, !![]);
      } else $ru8c['onCreateImage']($lcp, z9jwdh, !g_yvn);
    }, $ru8c['onDownImgCallBack'] = function (s_anv, gv4_nf, sfv_ng) {
      if (!sfv_ng) $ru8c['onCreateImage'](s_anv, gv4_nf);else gv4_nf['onError'](null);
    }, $ru8c['onCreateImage'] = function (ab6e2i, g4v_3, $r8upc) {
      $r8upc === void 0x0 && ($r8upc = ![]);var v3f14;if (!$r8upc) {
        var qx1703 = b2yi6['getFileInfo'](ab6e2i),
            cu8$lp = qx1703['md5'];v3f14 = b2yi6['getFileNativePath'](cu8$lp);
      } else v3f14 = ab6e2i;if (g4v_3['imgCache'] == null) g4v_3['imgCache'] = {};var xjw0;function q14f7() {
        xjw0['onload'] = null, xjw0['onerror'] = null, delete g4v_3['imgCache'][ab6e2i];
      };var r$pc8 = function () {
        q14f7(), g4v_3['onLoaded'](xjw0);
      },
          z8u$pr = function () {
        q14f7(), g4v_3['event']('error', 'Load image failed');
      };g4v_3['_type'] == 'nativeimage' ? (xjw0 = new vsg_n['window']['Image'](), xjw0['crossOrigin'] = '', xjw0['onload'] = r$pc8, xjw0['onerror'] = z8u$pr, xjw0['src'] = v3f14, g4v_3['imgCache'][ab6e2i] = xjw0) : new g_fsn['create'](v3f14, { 'onload': r$pc8, 'onerror': z8u$pr, 'onCreate': function (va_s) {
          xjw0 = va_s, g4v_3['imgCache'][ab6e2i] = va_s;
        } });
    }, $ru8c;
  }(),
      aysvn = function () {
    function vf143g() {}return u98z(vf143g, 'laya.wx.mini.MiniInput'), vf143g['_createInputElement'] = function () {
      z$u8r['_initInput'](z$u8r['area'] = vsg_n['createElement']('textarea')), z$u8r['_initInput'](z$u8r['input'] = vsg_n['createElement']('input')), z$u8r['inputContainer'] = vsg_n['createElement']('div'), z$u8r['inputContainer']['style']['position'] = 'absolute', z$u8r['inputContainer']['style']['zIndex'] = 0x186a0, vsg_n['container']['appendChild'](z$u8r['inputContainer']), z$u8r['inputContainer']['setPos'] = function (nvsf, n4f) {
        z$u8r['inputContainer']['style']['left'] = nvsf + 'px', z$u8r['inputContainer']['style']['top'] = n4f + 'px';
      }, v_syn['stage']['on']('resize', null, vf143g['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (y_av) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), $9j8z['_soundClass'] = wjx0dh, $9j8z['_musicClass'] = wjx0dh;
    }, vf143g['_onStageResize'] = function () {
      var pc8u$r = v_syn['stage']['_canvasTransform']['identity']();pc8u$r['scale'](vsg_n['width'] / a6s2ny['canvas']['width'] / aiys['getPixelRatio'](), vsg_n['height'] / a6s2ny['canvas']['height'] / aiys['getPixelRatio']());
    }, vf143g['wxinputFocus'] = function (biya2) {
      var tmcl5o = z$u8r['inputElement']['target'];if (tmcl5o && !tmcl5o['editable']) return;gf43v1['window']['wx']['offKeyboardConfirm'](), gf43v1['window']['wx']['offKeyboardInput'](), gf43v1['window']['wx']['showKeyboard']({ 'defaultValue': tmcl5o['text'], 'maxLength': tmcl5o['maxChars'], 'multiple': tmcl5o['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (whxj0d) {}, 'fail': function (mlct5) {} }), gf43v1['window']['wx']['onKeyboardConfirm'](function (fgvn_) {
        var sa2i = fgvn_ ? fgvn_['value'] : '';tmcl5o['text'] = sa2i, tmcl5o['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), gf43v1['window']['wx']['onKeyboardInput'](function (hzwj9d) {
        var vsng_f = hzwj9d ? hzwj9d['value'] : '';if (!tmcl5o['multiline']) {
          if (vsng_f['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }tmcl5o['text'] = vsng_f, tmcl5o['event']('input');
      });
    }, vf143g['inputEnter'] = function () {
      z$u8r['inputElement']['target']['focus'] = ![];
    }, vf143g['wxinputblur'] = function () {
      vf143g['hideKeyboard']();
    }, vf143g['hideKeyboard'] = function () {
      gf43v1['window']['wx']['offKeyboardConfirm'](), gf43v1['window']['wx']['offKeyboardInput'](), gf43v1['window']['wx']['hideKeyboard']({ 'success': function (pcu$5) {
          console['log']('隐藏键盘');
        }, 'fail': function (j0hdw) {
          console['log']('隐藏键盘出错:' + (j0hdw ? j0hdw['errMsg'] : ''));
        } });
    }, vf143g;
  }(),
      x1743 = function () {
    function pu8$cr() {}u98z(pu8$cr, 'laya.wx.mini.MiniLoader');var d9j0hw = pu8$cr['prototype'];return d9j0hw['load'] = function (hjdr9, s2any, z$ur89, hjzwd, hjd09) {
      z$ur89 === void 0x0 && (z$ur89 = !![]), hjd09 === void 0x0 && (hjd09 = ![]);var _n6sa = this;_n6sa['_url'] = hjdr9;if (hjdr9['indexOf']('data:image') === 0x0) _n6sa['_type'] = s2any = 'image';else _n6sa['_type'] = s2any || (s2any = _n6sa['getTypeFromUrl'](hjdr9));_n6sa['_cache'] = z$ur89, _n6sa['_data'] = null;var sy6na2 = 'ascii';if (hjdr9['indexOf']('.fnt') != -0x1) sy6na2 = 'utf8';else s2any == 'arraybuffer' && (sy6na2 = '');;var iayb6 = jr$z89['getFileExtension'](hjdr9);if (pu8$cr['_fileTypeArr']['indexOf'](iayb6) != -0x1) gf43v1['EnvConfig']['load']['call'](this, hjdr9, s2any, z$ur89, hjzwd, hjd09);else {
        if (!b2yi6['getFileInfo'](hjdr9)) {
          if (hjdr9['indexOf']('layaNativeDir/') != -0x1) {
            if (gf43v1['isZiYu']) {
              var r9$8zu = b2yi6['ziyuFileData'][hjdr9];_n6sa['onLoaded'](r9$8zu);return;
            } else {
              cosnole['log']('read read'), b2yi6['read'](hjdr9, sy6na2, new ays_6(pu8$cr, pu8$cr['onReadNativeCallBack'], [sy6na2, hjdr9, s2any, z$ur89, hjzwd, hjd09, _n6sa]));return;
            }
          }if (h9dzwj['rootPath'] == '') var f_ngv4 = hjdr9;else f_ngv4 = hjdr9['split'](h9dzwj['rootPath'])[0x0];hjdr9['indexOf']('http://') != -0x1 || hjdr9['indexOf']('https://') != -0x1 ? gf43v1['EnvConfig']['load']['call'](_n6sa, hjdr9, s2any, z$ur89, hjzwd, hjd09) : b2yi6['readFile'](f_ngv4, sy6na2, new ays_6(pu8$cr, pu8$cr['onReadNativeCallBack'], [sy6na2, hjdr9, s2any, z$ur89, hjzwd, hjd09, _n6sa]), hjdr9);
        } else gf43v1['EnvConfig']['load']['call'](this, hjdr9, s2any, z$ur89, hjzwd, hjd09);
      }
    }, d9j0hw['resMgrLoad'] = function (_anvys, co5ltp, fv_gns, u$8clp, s6ya2n, u5lpco, p$8clu) {
      fv_gns === void 0x0 && (fv_gns = 0x0), u$8clp === void 0x0 && (u$8clp = ![]), s6ya2n === void 0x0 && (s6ya2n = ![]), u5lpco === void 0x0 && (u5lpco = 0x0), p$8clu === void 0x0 && (p$8clu = 0x3), _anvys['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _anvys), gf43v1['EnvConfig']['resMgrLoad'](_anvys, (n6sa_y, xq0h7, $lcup8) => {
        pu8$cr['prototype']['resMgrLoadCallBack'](n6sa_y, xq0h7, $lcup8, co5ltp);
      }, fv_gns, u$8clp, s6ya2n, u5lpco, p$8clu);
    }, d9j0hw['resMgrLoadCallBack'] = function (opl5u, u$pzr, jzw, $up8r) {
      console['log']('buff:::', opl5u, jzw, b2yi6['fileNativeDir'] + '///' + b2yi6['fileListName']), $up8r(opl5u, u$pzr, jzw);
    }, d9j0hw['clearRes'] = function (djxh0w, g4_3v) {
      g4_3v === void 0x0 && (g4_3v = ![]);var ay_nsv = this;ay_nsv['clearRes'](djxh0w, g4_3v);var h7qxw = b2yi6['getFileInfo'](djxh0w);if (h7qxw && (djxh0w['indexOf']('http://') != -0x1 || djxh0w['indexOf']('https://') != -0x1)) {
        var uc5$p = h7qxw['md5'],
            l8u$ = b2yi6['getFileNativePath'](uc5$p);b2yi6['remove'](l8u$);
      }
    }, pu8$cr['onReadNativeCallBack'] = function (_f3vg, sfgn_, gf431, an_syv, z$rpu8, $8jz9, hq70xw, rd9jh, f413gv) {
      an_syv === void 0x0 && (an_syv = !![]), $8jz9 === void 0x0 && ($8jz9 = ![]), rd9jh === void 0x0 && (rd9jh = 0x0);if (!rd9jh) {
        var b6iy;if (gf431 == 'json' || gf431 == 'atlas') b6iy = gf43v1['getJson'](f413gv['data']);else gf431 == 'xml' ? b6iy = jr$z89['parseXMLFromString'](f413gv['data']) : b6iy = f413gv['data'];hq70xw['onLoaded'](b6iy), !gf43v1['isZiYu'] && gf43v1['isPosMsgYu'] && gf431 != 'arraybuffer' && wx['postMessage']({ 'url': sfgn_, 'data': b6iy, 'isLoad': !![] });
      } else rd9jh == 0x1 && gf43v1['EnvConfig']['load']['call'](hq70xw, sfgn_, gf431, an_syv, z$rpu8, $8jz9);
    }, ucl5o(pu8$cr, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), pu8$cr;
  }(),
      b2yi6 = function (w7x10q) {
    function hxwdq() {
      hxwdq['__super']['call'](this);;
    }return u98z(hxwdq, 'laya.wx.mini.MiniFileMgr', w7x10q), hxwdq['isLoadFile'] = function (jr8$) {
      return hxwdq['_fileTypeArr']['indexOf'](jr8$) != -0x1 ? !![] : ![];
    }, hxwdq['getFileInfo'] = function (hjdw0x) {
      var _avnsy = hjdw0x['split']('?')[0x0],
          rdjz8 = hxwdq['filesListObj'][_avnsy];if (rdjz8 == null) return null;else return rdjz8;return null;
    }, hxwdq['onFileUpdate'] = function (_g3vf4, t5kom) {
      var ot5 = _g3vf4['split']('/'),
          hdqx0 = ot5[ot5['length'] - 0x1],
          ysi6 = hxwdq['getFileInfo'](t5kom);if (ysi6 == null) hxwdq['onSaveFile'](t5kom, hdqx0);else {
        if (ysi6['readyUrl'] != t5kom) hxwdq['remove'](hdqx0, t5kom);
      }
    }, hxwdq['exits'] = function (j9zhwd, toplc) {
      var gf_n = hxwdq['getFileNativePath'](j9zhwd);hxwdq['fs']['getFileInfo']({ 'filePath': gf_n, 'success': function (j8dr9z) {
          toplc != null && toplc['runWith']([0x0, j8dr9z]);
        }, 'fail': function (f_ngsv) {
          toplc != null && toplc['runWith']([0x1, f_ngsv]);
        } });
    }, hxwdq['read'] = function (s_yav, omctl, g4v3_, zjhdr) {
      omctl === void 0x0 && (omctl = 'ascill'), zjhdr === void 0x0 && (zjhdr = '');var v4_nf;zjhdr != '' ? v4_nf = hxwdq['getFileNativePath'](s_yav) : v4_nf = s_yav, hxwdq['fs']['readFile']({ 'filePath': v4_nf, 'encoding': omctl, 'success': function (hzrj) {
          g4v3_ != null && g4v3_['runWith']([0x0, hzrj]);
        }, 'fail': function (an6_sy) {
          if (an6_sy && zjhdr != '') hxwdq['down'](zjhdr, omctl, g4v3_, zjhdr);else g4v3_ != null && g4v3_['runWith']([0x1]);
        } });
    }, hxwdq['readNativeFile'] = function (y2b6i, v_4fng) {
      hxwdq['fs']['readFile']({ 'filePath': y2b6i, 'encoding': '', 'success': function (fsng_) {
          v_4fng != null && v_4fng['runWith']([0x0]);
        }, 'fail': function (to5mk) {
          v_4fng != null && v_4fng['runWith']([0x1]);
        } });
    }, hxwdq['down'] = function (r$zj9, dh9jrz, y_nvsa, x1q3) {
      dh9jrz === void 0x0 && (dh9jrz = 'ascill'), x1q3 === void 0x0 && (x1q3 = '');var u8$pz = hxwdq['getFileNativePath'](x1q3),
          gnv_4f = hxwdq['wxdown']({ 'url': r$zj9, 'filePath': u8$pz, 'success': function (d8z9rj) {
          if (d8z9rj['statusCode'] === 0xc8) hxwdq['readFile'](d8z9rj['filePath'], dh9jrz, y_nvsa, x1q3);
        }, 'fail': function (zrdj89) {
          y_nvsa != null && y_nvsa['runWith']([0x1, zrdj89]);
        } });gnv_4f['onProgressUpdate'](function (o5lmk) {
        y_nvsa != null && y_nvsa['runWith']([0x2, o5lmk['progress']]);
      });
    }, hxwdq['readFile'] = function (nva_sy, q7031x, gvs_nf, rzp$u) {
      q7031x === void 0x0 && (q7031x = 'ascill'), rzp$u === void 0x0 && (rzp$u = ''), hxwdq['fs']['readFile']({ 'filePath': nva_sy, 'encoding': q7031x, 'success': function (kmt5lo) {
          if (nva_sy['indexOf']('http://') != -0x1 || nva_sy['indexOf']('https://') != -0x1) hxwdq['onFileUpdate'](nva_sy, rzp$u);gvs_nf != null && gvs_nf['runWith']([0x0, kmt5lo]);
        }, 'fail': function (x437q) {
          if (x437q) gvs_nf != null && gvs_nf['runWith']([0x1, x437q]);
        } });
    }, hxwdq['downImg'] = function (nasy6_, mco5tl, yv_ngs) {
      yv_ngs === void 0x0 && (yv_ngs = '');var tko5 = hxwdq['wxdown']({ 'url': nasy6_, 'success': function (xq1307) {
          xq1307['statusCode'] === 0xc8 && hxwdq['copyFile'](xq1307['tempFilePath'], yv_ngs, mco5tl);
        }, 'fail': function (g4n_fv) {
          mco5tl != null && mco5tl['runWith']([0x1, g4n_fv]);
        } });
    }, hxwdq['copyFile'] = function (vgf4n, sia, x437) {
      var zd9r8 = vgf4n['split']('/'),
          y26bi = zd9r8[zd9r8['length'] - 0x1],
          q4x71 = sia['split']('?')[0x0],
          pl8 = hxwdq['getFileInfo'](sia),
          an6_ys = hxwdq['getFileNativePath'](y26bi);hxwdq['fs']['copyFile']({ 'srcPath': vgf4n, 'destPath': an6_ys, 'success': function (ebi6) {
          if (!pl8) hxwdq['onSaveFile'](sia, y26bi), x437 != null && x437['runWith']([0x0]);else {
            if (pl8['readyUrl'] != sia) hxwdq['remove'](y26bi, sia, x437);
          }
        }, 'fail': function (as2yi6) {
          x437 != null && x437['runWith']([0x1, as2yi6]);
        } });
    }, hxwdq['getFileNativePath'] = function (iays62) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + iays62;
    }, hxwdq['remove'] = function (dj89, a6_sn, na2ys) {
      a6_sn === void 0x0 && (a6_sn = '');var _ngsv = hxwdq['getFileInfo'](a6_sn),
          n4gf_v = hxwdq['getFileNativePath'](_ngsv['md5']);v_syn['loader']['clearRes'](_ngsv['readyUrl']), hxwdq['fs']['unlink']({ 'filePath': n4gf_v, 'success': function (sv_g) {
          if (a6_sn != '') hxwdq['onSaveFile'](a6_sn, dj89);na2ys != null && na2ys['runWith']([0x0]);
        }, 'fail': function (q741f3) {} });
    }, hxwdq['onSaveFile'] = function (motkl5, ibea6) {
      var q317x = motkl5['split']('?')[0x0];hxwdq['filesListObj'][q317x] = { 'md5': ibea6, 'readyUrl': motkl5 }, hxwdq['fs']['writeFile']({ 'filePath': hxwdq['fileNativeDir'] + '/' + hxwdq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hxwdq['filesListObj']), 'success': function ($z89j) {
          console['log']('写入测试测试成功：', $z89j);
        }, 'fail': function (lpt5c) {
          console['log']('写入测试测试失败：', lpt5c);
        } });
    }, hxwdq['existDir'] = function (sn6ya2, p5c$ul) {
      hxwdq['fs']['mkdir']({ 'dirPath': sn6ya2, 'success': function (wqx71) {
          p5c$ul != null && p5c$ul['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (_vg3f) {
          if (_vg3f['errMsg']['indexOf']('file already exists') != -0x1) hxwdq['readSync'](hxwdq['fileListName'], 'utf8', p5c$ul);else p5c$ul != null && p5c$ul['runWith']([0x1, _vg3f]);
        } });
    }, hxwdq['readSync'] = function (ol5tmc, $8zr, pu5o, p$zur) {
      $8zr === void 0x0 && ($8zr = 'ascill'), p$zur === void 0x0 && (p$zur = '');var $z89jr = hxwdq['getFileNativePath'](ol5tmc),
          fgv_n4;try {
        fgv_n4 = hxwdq['fs']['readFileSync']($z89jr), pu5o != null && pu5o['runWith']([0x0, { 'data': fgv_n4 }]);
      } catch (ctlom5) {
        pu5o != null && pu5o['runWith']([0x1]);
      }
    }, hxwdq['readCache'] = function () {}, hxwdq['writeCache'] = function (s2ny6a) {
      var jw9zd = readyUrl['split']('?')[0x0];hxwdq['filesListObj'][jw9zd] = { 'md5': md5Name, 'readyUrl': readyUrl }, hxwdq['fs']['writeFile']({ 'filePath': hxwdq['fileNativeDir'] + '/' + hxwdq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hxwdq['filesListObj']), 'success': function (_ygvn) {}, 'fail': function (f4_ng) {} });
    }, hxwdq['setNativeFileDir'] = function (wdj) {
      hxwdq['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + wdj;
    }, hxwdq['filesListObj'] = {}, hxwdq['fileNativeDir'] = null, hxwdq['fileListName'] = 'layaairfiles.txt', hxwdq['ziyuFileData'] = {}, ucl5o(hxwdq, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), hxwdq;
  }(qf731),
      wjx0dh = function (_fngv) {
    function q73f14() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], q73f14['__super']['call'](this), this['_sound'] = q73f14['_createSound']();
    }u98z(q73f14, 'laya.wx.mini.MiniSound', _fngv);var xh0dq = q73f14['prototype'];return xh0dq['load'] = function (g3f14v) {
      var v1f4g3 = this;g3f14v = h9dzwj['formatURL'](g3f14v), this['url'] = g3f14v;if (q73f14['_audioCache'][g3f14v]) {
        this['event']('complete');return;
      }function jxwd0() {
        if (q73f14['_null'] != undefined) v1f4g3['_sound']['onCanplay'](q73f14['_null']), v1f4g3['_sound']['onError'](q73f14['_null']);else try {
          v1f4g3['_sound']['onCanplay'](null), v1f4g3['_sound']['onError'](null), q73f14['_null'] = null;
        } catch ($up8zr) {
          console['warn']('[wxmini] _clearSound:' + $up8zr), v1f4g3['_sound']['onCanplay'](c5tlpo), v1f4g3['_sound']['onError'](c5tlpo), q73f14['_null'] = c5tlpo;
        }
      }function fvgn4_() {
        jxwd0(), fv4g3['loaded'] = !![], fv4g3['event']('complete'), q73f14['_audioCache'][fv4g3['url']] = fv4g3;
      }function a2iy6b(ny_vg) {
        console['error']('errCode=' + ny_vg['errCode'] + '  errMsg=' + ny_vg['errMsg']), jxwd0(), fv4g3['event']('error');
      }function c5tlpo() {}this['_sound']['onCanplay'](fvgn4_), this['_sound']['onError'](a2iy6b), this['_sound']['src'] = g3f14v;var fv4g3 = this;
    }, xh0dq['play'] = function (oklmt5, l5opct) {
      oklmt5 === void 0x0 && (oklmt5 = 0x0), l5opct === void 0x0 && (l5opct = 0x0);var cmtlo5;if (this['url'] == $9j8z['_tMusic']) {
        if (!q73f14['_musicAudio']) q73f14['_musicAudio'] = q73f14['_createSound']();cmtlo5 = q73f14['_musicAudio'];
      } else cmtlo5 = q73f14['_createSound']();cmtlo5['src'] = this['url'];var i2yas = new x0dwq(cmtlo5);return i2yas['url'] = this['url'], i2yas['loops'] = l5opct, i2yas['startTime'] = oklmt5, i2yas['play'](), $9j8z['addChannel'](i2yas), i2yas;
    }, xh0dq['dispose'] = function () {
      var wd9h0 = q73f14['_audioCache'][this['url']];wd9h0 && (wd9h0['src'] = '', delete q73f14['_audioCache'][this['url']]);
    }, d8jrz(0x0, xh0dq, 'duration', function () {
      return this['_sound']['duration'];
    }), q73f14['_createSound'] = function () {
      return q73f14['_id']++, gf43v1['window']['wx']['createInnerAudioContext']();
    }, q73f14['_musicAudio'] = null, q73f14['_id'] = 0x0, q73f14['_audioCache'] = {}, q73f14['_null'] = undefined, q73f14;
  }(qf731),
      x0dwq = function (hwjdz9) {
    function xqhwd(hjdxw) {
      this['_audio'] = null, this['_onEnd'] = null, xqhwd['__super']['call'](this), this['_audio'] = hjdxw, this['_onEnd'] = jr$z89['bind'](this['__onEnd'], this), hjdxw['onEnded'](this['_onEnd']);
    }u98z(xqhwd, 'laya.wx.mini.MiniSoundChannel', hwjdz9);var zdj8r9 = xqhwd['prototype'];return zdj8r9['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (v_syn['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, zdj8r9['__onNull'] = function () {}, zdj8r9['play'] = function () {
      this['isStopped'] = ![], $9j8z['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, zdj8r9['stop'] = function () {
      this['isStopped'] = !![], $9j8z['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (xqhwd['_null'] != undefined) this['_audio']['onEnded'](xqhwd['_null']);else try {
        this['_audio']['onEnded'](null), xqhwd['_null'] = null;
      } catch (d0hjxw) {
        console['warn']('[wxmini] stop:' + d0hjxw), this['_audio']['onEnded'](jr$z89['bind'](this['__onNull'], this)), xqhwd['_null'] = jr$z89['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, zdj8r9['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, zdj8r9['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], $9j8z['addChannel'](this), this['_audio']['play']();
    }, d8jrz(0x0, zdj8r9, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), d8jrz(0x0, zdj8r9, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), d8jrz(0x0, zdj8r9, 'volume', function () {
      return 0x1;
    }, function (xwh0q7) {}), xqhwd['_null'] = undefined, xqhwd;
  }(p5lu);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var cr8 in Laya) {
    var _fgn = Laya[cr8];_fgn && _fgn['__isclass'] && (exports[cr8] = _fgn);
  }
});