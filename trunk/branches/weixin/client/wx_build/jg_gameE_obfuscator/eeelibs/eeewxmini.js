var b = wx.$e;
!function (gvlp8, v9gp4d) {
  v9gp4d['un'], v9gp4d['uns'];var vgpl8 = v9gp4d['static'],
      sqweu6 = v9gp4d['class'],
      weuqn = v9gp4d['getset'];v9gp4d['__newvec'];var sne$5q = laya['utils']['Browser'],
      $rmo5n = (laya['events']['Event'], laya['events']['EventDispatcher']),
      ns$q5r = laya['resource']['HTMLImage'],
      f_yxit = laya['utils']['Handler'],
      fi_yxt = laya['display']['Input'],
      lvp82 = laya['net']['Loader'];laya['maths']['Matrix'];var mnsr$ = laya['renders']['Render'],
      ftu3w = laya['utils']['RunDriver'];laya['media']['Sound'];var i0za_7 = laya['media']['SoundChannel'],
      $lom2r = laya['media']['SoundManager'],
      ens$q5 = (laya['display']['Stage'], laya['net']['URL']),
      qw36ue = laya['utils']['Utils'],
      neqswu = (sqweu6(neq5sw, 'laya.wx.mini.MiniAdpter'), neq5sw['getJson'] = function (q$5nr) {
    return JSON['parse'](q$5nr);
  }, neq5sw['init'] = function (wsnuqe, h49pd) {
    void 0x0 === wsnuqe && (wsnuqe = !0x1), void 0x0 === h49pd && (h49pd = !0x1), neq5sw['_inited'] || (neq5sw['window'] = gvlp8)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (neq5sw['_inited'] = !0x0, neq5sw['isZiYu'] = h49pd, neq5sw['isPosMsgYu'] = wsnuqe, neq5sw['EnvConfig'] = {}, neq5sw['isZiYu'] || (rlm$['setNativeFileDir']('/layaairGame'), rlm$['existDir'](rlm$['fileNativeDir'], f_yxit['create'](neq5sw, neq5sw['onMkdirCallBack']))), neq5sw['window']['focus'] = function () {}, v9gp4d['getUrlPath'] = function () {}, neq5sw['window']['logtime'] = function (xftu6) {}, neq5sw['window']['alertTimeLog'] = function (p2l8v) {}, neq5sw['window']['resetShareInfo'] = function () {}, neq5sw['window']['CanvasRenderingContext2D'] = function () {}, neq5sw['window']['CanvasRenderingContext2D']['prototype'] = neq5sw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], neq5sw['window']['document']['body']['appendChild'] = function () {}, neq5sw['EnvConfig']['pixelRatioInt'] = 0x0, ftu3w['getPixelRatio'] = neq5sw['pixelRatio'], neq5sw['_preCreateElement'] = sne$5q['createElement'], sne$5q['createElement'] = neq5sw['createElement'], ftu3w['createShaderCondition'] = neq5sw['createShaderCondition'], qw36ue['parseXMLFromString'] = neq5sw['parseXMLFromString'], fi_yxt['_createInputElement'] = uqe36w['_createInputElement'], neq5sw['EnvConfig']['load'] = lvp82['prototype']['load'], lvp82['prototype']['load'] = _z07ba['prototype']['load'], neq5sw['isZiYu'] && wsnuqe && wx['onMessage'](function (f36xy) {
      f36xy['isLoad'] && (rlm$['ziyuFileData'][f36xy['url']] = f36xy['data']);
    }));
  }, neq5sw['onMkdirCallBack'] = function (dh9k1, yi_0) {
    dh9k1 || (rlm$['filesListObj'] = JSON['parse'](yi_0['data']));
  }, neq5sw['pixelRatio'] = function () {
    if (!neq5sw['EnvConfig']['pixelRatioInt']) try {
      var xf36 = wx['getSystemInfoSync']();return neq5sw['EnvConfig']['pixelRatioInt'] = xf36['pixelRatio'], xf36['pixelRatio'];
    } catch (w3u) {}return neq5sw['EnvConfig']['pixelRatioInt'];
  }, neq5sw['createElement'] = function (v2l8pg) {
    var lrom2$;if ('canvas' == v2l8pg) return 0x1 == neq5sw['idx'] ? neq5sw['isZiYu'] ? (lrom2$ = sharedCanvas)['style'] = {} : lrom2$ = gvlp8['canvas'] : lrom2$ = gvlp8['wx']['createCanvas'](), neq5sw['idx']++, lrom2$;if ('textarea' == v2l8pg || 'input' == v2l8pg) return neq5sw['onCreateInput'](v2l8pg);if ('div' != v2l8pg) return neq5sw['_preCreateElement'](v2l8pg);return v2l8pg = neq5sw['_preCreateElement'](v2l8pg), (v2l8pg['contains'] = function (phd) {
      return null;
    }, v2l8pg['removeChild'] = function (ayxit_) {}, v2l8pg);
  }, neq5sw['onCreateInput'] = function (yxfit) {
    return yxfit = neq5sw['_preCreateElement'](yxfit), (yxfit['focus'] = uqe36w['wxinputFocus'], yxfit['blur'] = uqe36w['wxinputblur'], yxfit['style'] = {}, yxfit['value'] = 0x0, yxfit['parentElement'] = {}, yxfit['placeholder'] = {}, yxfit['type'] = {}, yxfit['setColor'] = function (lmv2o8) {}, yxfit['setType'] = function (j9dh1k) {}, yxfit['setFontFace'] = function (g28pv) {}, yxfit['addEventListener'] = function (sew5n) {}, yxfit['contains'] = function (r2m8lo) {
      return null;
    }, yxfit['removeChild'] = function (d9gp41) {}, yxfit);
  }, neq5sw['createShaderCondition'] = function (vdg8p) {
    var tyax = this;return function () {
      return tyax[vdg8p['replace']('this.', '')];
    };
  }, neq5sw['EnvConfig'] = null, neq5sw['window'] = null, neq5sw['_preCreateElement'] = null, neq5sw['_inited'] = !0x1, neq5sw['wxRequest'] = null, neq5sw['systemInfo'] = null, neq5sw['version'] = '0.0.1', neq5sw['isZiYu'] = !0x1, neq5sw['isPosMsgYu'] = !0x1, neq5sw['parseXMLFromString'] = function (r2l$om) {
    var f6t3wu;r2l$om = r2l$om['replace'](/>\s+</g, '><');try {
      f6t3wu = new gvlp8['Parser']['DOMParser']()['parseFromString'](r2l$om, 'text/xml');
    } catch ($5ornm) {
      throw '需要引入xml解析库文件';
    }return f6t3wu;
  }, neq5sw['idx'] = 0x1, neq5sw);function neq5sw() {}sqweu6(m2l$or, 'laya.wx.mini.MiniImage'), m2l$or['prototype']['_loadImage'] = function (e6quw) {
    var o2rl8m = !0x1;-0x1 == e6quw['indexOf']('layaNativeDir/') && (o2rl8m = !0x0, e6quw = ens$q5['formatURL'](e6quw)), rlm$['getFileInfo'](e6quw) ? m2l$or['onCreateImage'](e6quw, this, !o2rl8m) : -0x1 != e6quw['indexOf']('http://') || -0x1 != e6quw['indexOf']('https://') ? rlm$['downImg'](e6quw, new f_yxit(m2l$or, m2l$or['onDownImgCallBack'], [e6quw, this]), e6quw) : m2l$or['onCreateImage'](e6quw, this, !0x0);
  }, m2l$or['onDownImgCallBack'] = function (ifyx, itxa_y, k1h9dj) {
    k1h9dj ? itxa_y['onError'](null) : m2l$or['onCreateImage'](ifyx, itxa_y);
  }, m2l$or['onCreateImage'] = function (_ax, d91p4, n5$or) {
    var jh1dk9, rn5m$o;function x6uf3() {
      rn5m$o['onload'] = null, rn5m$o['onerror'] = null, delete d91p4['imgCache'][_ax];
    }jh1dk9 = (n5$or = void 0x0 === n5$or ? !0x1 : n5$or) ? _ax : (_tfi = rlm$['getFileInfo'](_ax)['md5'], rlm$['getFileNativePath'](_tfi)), null == d91p4['imgCache'] && (d91p4['imgCache'] = {}), n5$or = function () {
      x6uf3(), d91p4['onLoaded'](rn5m$o);
    };var _tfi = function () {
      x6uf3(), d91p4['event']('error', 'Load image failed');
    };'nativeimage' == d91p4['_type'] ? ((rn5m$o = new sne$5q['window']['Image']())['crossOrigin'] = '', rn5m$o['onload'] = n5$or, rn5m$o['onerror'] = _tfi, rn5m$o['src'] = jh1dk9, d91p4['imgCache'][_ax] = rn5m$o) : new ns$q5r['create'](jh1dk9, { 'onload': n5$or, 'onerror': _tfi, 'onCreate': function (h4pd19) {
        rn5m$o = h4pd19, d91p4['imgCache'][_ax] = h4pd19;
      } });
  };function m2l$or() {}var uqe36w = (sqweu6(d41h9, 'laya.wx.mini.MiniInput'), d41h9['_createInputElement'] = function () {
    fi_yxt['_initInput'](fi_yxt['area'] = sne$5q['createElement']('textarea')), fi_yxt['_initInput'](fi_yxt['input'] = sne$5q['createElement']('input')), fi_yxt['inputContainer'] = sne$5q['createElement']('div'), fi_yxt['inputContainer']['style']['position'] = 'absolute', fi_yxt['inputContainer']['style']['zIndex'] = 0x186a0, sne$5q['container']['appendChild'](fi_yxt['inputContainer']), fi_yxt['inputContainer']['setPos'] = function (ro2$lm, vol8m) {
      fi_yxt['inputContainer']['style']['left'] = ro2$lm + 'px', fi_yxt['inputContainer']['style']['top'] = vol8m + 'px';
    }, v9gp4d['stage']['on']('resize', null, d41h9['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (tx_aiy) {
      gvlp8['dispatchEvent'] && gvlp8['dispatchEvent']('resize');
    }), $lom2r['_soundClass'] = uw36qe, $lom2r['_musicClass'] = uw36qe;
  }, d41h9['_onStageResize'] = function () {
    v9gp4d['stage']['_canvasTransform']['identity']()['scale'](sne$5q['width'] / mnsr$['canvas']['width'] / ftu3w['getPixelRatio'](), sne$5q['height'] / mnsr$['canvas']['height'] / ftu3w['getPixelRatio']());
  }, d41h9['wxinputFocus'] = function (e5snq) {
    var dhk914 = fi_yxt['inputElement']['target'];dhk914 && !dhk914['editable'] || (neqswu['window']['wx']['offKeyboardConfirm'](), neqswu['window']['wx']['offKeyboardInput'](), neqswu['window']['wx']['showKeyboard']({ 'defaultValue': dhk914['text'], 'maxLength': dhk914['maxChars'], 'multiple': dhk914['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (esqn$) {}, 'fail': function ($r5sn) {} }), neqswu['window']['wx']['onKeyboardConfirm'](function (_yai07) {
      _yai07 = _yai07 ? _yai07['value'] : '', (dhk914['text'] = _yai07, dhk914['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), neqswu['window']['wx']['onKeyboardInput'](function (z7_ai) {
      z7_ai = z7_ai ? z7_ai['value'] : '', dhk914['multiline'] || -0x1 == z7_ai['indexOf']('\x0a') ? (dhk914['text'] = z7_ai, dhk914['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, d41h9['inputEnter'] = function () {
    fi_yxt['inputElement']['target']['focus'] = !0x1;
  }, d41h9['wxinputblur'] = function () {
    d41h9['hideKeyboard']();
  }, d41h9['hideKeyboard'] = function () {
    neqswu['window']['wx']['offKeyboardConfirm'](), neqswu['window']['wx']['offKeyboardInput'](), neqswu['window']['wx']['hideKeyboard']({ 'success': function (djkh91) {
        console['log']('隐藏键盘');
      }, 'fail': function (l28mov) {
        console['log']('隐藏键盘出错:' + (l28mov ? l28mov['errMsg'] : ''));
      } });
  }, d41h9);function d41h9() {}var _z07ba = function () {
    function ws6euq() {}sqweu6(ws6euq, 'laya.wx.mini.MiniLoader');var jhd1 = ws6euq['prototype'];return jhd1['load'] = function (tfyx6, w6uqe3, uw3e6q, gdp19, ftu63w) {
      void 0x0 === uw3e6q && (uw3e6q = !0x0), void 0x0 === ftu63w && (ftu63w = !0x1);var $nm = this;0x0 === ($nm['_url'] = tfyx6)['indexOf']('data:image') ? $nm['_type'] = w6uqe3 = 'image' : $nm['_type'] = w6uqe3 = w6uqe3 || $nm['getTypeFromUrl'](tfyx6), $nm['_cache'] = uw3e6q, $nm['_data'] = null;var u63ewq = 'ascii';-0x1 != tfyx6['indexOf']('.fnt') ? u63ewq = 'utf8' : 'arraybuffer' == w6uqe3 && (u63ewq = '');var sr5$nq = qw36ue['getFileExtension'](tfyx6);if (-0x1 != ws6euq['_fileTypeArr']['indexOf'](sr5$nq)) neqswu['EnvConfig']['load']['call'](this, tfyx6, w6uqe3, uw3e6q, gdp19, ftu63w);else {
        if (rlm$['getFileInfo'](tfyx6)) neqswu['EnvConfig']['load']['call'](this, tfyx6, w6uqe3, uw3e6q, gdp19, ftu63w);else {
          if (-0x1 != tfyx6['indexOf']('layaNativeDir/')) {
            if (neqswu['isZiYu']) {
              var d4vg9p = rlm$['ziyuFileData'][tfyx6];return void $nm['onLoaded'](d4vg9p);
            }return cosnole['log']('read read'), void rlm$['read'](tfyx6, u63ewq, new f_yxit(ws6euq, ws6euq['onReadNativeCallBack'], [u63ewq, tfyx6, w6uqe3, uw3e6q, gdp19, ftu63w, $nm]));
          }d4vg9p = '' == ens$q5['rootPath'] ? tfyx6 : tfyx6['split'](ens$q5['rootPath'])[0x0], -0x1 != tfyx6['indexOf']('http://') || -0x1 != tfyx6['indexOf']('https://') ? neqswu['EnvConfig']['load']['call']($nm, tfyx6, w6uqe3, uw3e6q, gdp19, ftu63w) : rlm$['readFile'](d4vg9p, u63ewq, new f_yxit(ws6euq, ws6euq['onReadNativeCallBack'], [u63ewq, tfyx6, w6uqe3, uw3e6q, gdp19, ftu63w, $nm]), tfyx6);
        }
      }
    }, jhd1['resMgrLoad'] = function (qsnuw, qwue36, olr28m, dph194, u6wseq, xi_yta, vgpd4) {
      void 0x0 === olr28m && (olr28m = 0x0), void 0x0 === dph194 && (dph194 = !0x1), void 0x0 === u6wseq && (u6wseq = !0x1), void 0x0 === xi_yta && (xi_yta = 0x0), void 0x0 === vgpd4 && (vgpd4 = 0x3), -0x1 != qsnuw['indexOf']('mpack') && console['log']('=============resMgrLoad url:', qsnuw), neqswu['EnvConfig']['resMgrLoad'](qsnuw, (mrlo, $mo5, omr8l2) => {
        ws6euq['prototype']['resMgrLoadCallBack'](mrlo, $mo5, omr8l2, qwue36);
      }, olr28m, dph194, u6wseq, xi_yta, vgpd4);
    }, jhd1['resMgrLoadCallBack'] = function (r2ml$o, ftyx3i, u63, itay_) {
      console['log']('buff:::', r2ml$o, u63, rlm$['fileNativeDir'] + '///' + rlm$['fileListName']), itay_(r2ml$o, ftyx3i, u63);
    }, jhd1['clearRes'] = function (vmol, ty_f) {
      this['clearRes'](vmol, ty_f = void 0x0 === ty_f ? !0x1 : ty_f), ty_f = rlm$['getFileInfo'](vmol), !ty_f || -0x1 == vmol['indexOf']('http://') && -0x1 == vmol['indexOf']('https://') || (ty_f = ty_f['md5'], ty_f = rlm$['getFileNativePath'](ty_f), rlm$['remove'](ty_f));
    }, ws6euq['onReadNativeCallBack'] = function (seuwq, x3fut, ya_i, dg84vp, qewsu, y7ia_0, yaixt, az_0b, lg82o) {
      void 0x0 === dg84vp && (dg84vp = !0x0), void 0x0 === y7ia_0 && (y7ia_0 = !0x1), (az_0b = void 0x0 === az_0b ? 0x0 : az_0b) ? 0x1 == az_0b && neqswu['EnvConfig']['load']['call'](yaixt, x3fut, ya_i, dg84vp, qewsu, y7ia_0) : (lg82o = 'json' == ya_i || 'atlas' == ya_i ? neqswu['getJson'](lg82o['data']) : 'xml' == ya_i ? qw36ue['parseXMLFromString'](lg82o['data']) : lg82o['data'], yaixt['onLoaded'](lg82o), !neqswu['isZiYu'] && neqswu['isPosMsgYu'] && 'arraybuffer' != ya_i && wx['postMessage']({ 'url': x3fut, 'data': lg82o, 'isLoad': !0x0 }));
    }, vgpl8(ws6euq, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ws6euq;
  }(),
      rlm$ = (sqweu6(xa0, 'laya.wx.mini.MiniFileMgr', $rmo5n), xa0['isLoadFile'] = function (suqnew) {
    return -0x1 != xa0['_fileTypeArr']['indexOf'](suqnew);
  }, xa0['getFileInfo'] = function (hk14d) {
    return hk14d = hk14d['split']('?')[0x0], hk14d = xa0['filesListObj'][hk14d], null == hk14d ? null : hk14d;
  }, xa0['onFileUpdate'] = function ($orm5n, xaiy0_) {
    var x_0iay = $orm5n['split']('/');$orm5n = x_0iay[x_0iay['length'] - 0x1], x_0iay = xa0['getFileInfo'](xaiy0_), null == x_0iay ? xa0['onSaveFile'](xaiy0_, $orm5n) : x_0iay['readyUrl'] != xaiy0_ && xa0['remove']($orm5n, xaiy0_);
  }, xa0['exits'] = function (qns, gdp8) {
    qns = xa0['getFileNativePath'](qns), xa0['fs']['getFileInfo']({ 'filePath': qns, 'success': function (wunqs) {
        null != gdp8 && gdp8['runWith']([0x0, wunqs]);
      }, 'fail': function (f3tuw6) {
        null != gdp8 && gdp8['runWith']([0x1, f3tuw6]);
      } });
  }, xa0['read'] = function (s5r$mn, f3utx, pdh91, m$or5) {
    void 0x0 === f3utx && (f3utx = 'ascill'), s5r$mn = '' != (m$or5 = void 0x0 === m$or5 ? '' : m$or5) ? xa0['getFileNativePath'](s5r$mn) : s5r$mn, xa0['fs']['readFile']({ 'filePath': s5r$mn, 'encoding': f3utx, 'success': function (u3tw6) {
        null != pdh91 && pdh91['runWith']([0x0, u3tw6]);
      }, 'fail': function (wufe6) {
        wufe6 && '' != m$or5 ? xa0['down'](m$or5, f3utx, pdh91, m$or5) : null != pdh91 && pdh91['runWith']([0x1]);
      } });
  }, xa0['readNativeFile'] = function (tx36fu, z_b7a) {
    xa0['fs']['readFile']({ 'filePath': tx36fu, 'encoding': '', 'success': function (r$m5s) {
        null != z_b7a && z_b7a['runWith']([0x0]);
      }, 'fail': function (es5wn) {
        null != z_b7a && z_b7a['runWith']([0x1]);
      } });
  }, xa0['down'] = function (y3t6xf, twf6u, d19j, d9v4pg) {
    void 0x0 === twf6u && (twf6u = 'ascill'), void 0x0 === d9v4pg && (d9v4pg = '');var eswu6 = xa0['getFileNativePath'](d9v4pg);xa0['wxdown']({ 'url': y3t6xf, 'filePath': eswu6, 'success': function (lorm5) {
        0xc8 === lorm5['statusCode'] && xa0['readFile'](lorm5['filePath'], twf6u, d19j, d9v4pg);
      }, 'fail': function (swu6) {
        null != d19j && d19j['runWith']([0x1, swu6]);
      } })['onProgressUpdate'](function (q5) {
      null != d19j && d19j['runWith']([0x2, q5['progress']]);
    });
  }, xa0['readFile'] = function ($ol5, l$m2r, usew, xai_yt) {
    void 0x0 === xai_yt && (xai_yt = ''), xa0['fs']['readFile']({ 'filePath': $ol5, 'encoding': l$m2r = void 0x0 === l$m2r ? 'ascill' : l$m2r, 'success': function (r$l5om) {
        -0x1 == $ol5['indexOf']('http://') && -0x1 == $ol5['indexOf']('https://') || xa0['onFileUpdate']($ol5, xai_yt), null != usew && usew['runWith']([0x0, r$l5om]);
      }, 'fail': function (dhk41) {
        dhk41 && null != usew && usew['runWith']([0x1, dhk41]);
      } });
  }, xa0['downImg'] = function (ml$or, m$5lro, seuw) {
    void 0x0 === seuw && (seuw = ''), xa0['wxdown']({ 'url': ml$or, 'success': function (s5nqr) {
        0xc8 === s5nqr['statusCode'] && xa0['copyFile'](s5nqr['tempFilePath'], seuw, m$5lro);
      }, 'fail': function (pv8dg4) {
        null != m$5lro && m$5lro['runWith']([0x1, pv8dg4]);
      } });
  }, xa0['copyFile'] = function (v8lo2, t_fxi, nsm$r) {
    var _az70i = v8lo2['split']('/'),
        o2r$l = _az70i[_az70i['length'] - 0x1];t_fxi['split']('?')[0x0];var g48pdv = xa0['getFileInfo'](t_fxi);_az70i = xa0['getFileNativePath'](o2r$l), xa0['fs']['copyFile']({ 'srcPath': v8lo2, 'destPath': _az70i, 'success': function (y70ai) {
        g48pdv ? g48pdv['readyUrl'] != t_fxi && xa0['remove'](o2r$l, t_fxi, nsm$r) : (xa0['onSaveFile'](t_fxi, o2r$l), null != nsm$r && nsm$r['runWith']([0x0]));
      }, 'fail': function (tu3fx6) {
        null != nsm$r && nsm$r['runWith']([0x1, tu3fx6]);
      } });
  }, xa0['getFileNativePath'] = function (xyi0_a) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xyi0_a;
  }, xa0['remove'] = function (vg2pl8, om$lr, o2$mlr) {
    void 0x0 === om$lr && (om$lr = '');var nm$r5s = xa0['getFileInfo'](om$lr),
        _a7zb = xa0['getFileNativePath'](nm$r5s['md5']);v9gp4d['loader']['clearRes'](nm$r5s['readyUrl']), xa0['fs']['unlink']({ 'filePath': _a7zb, 'success': function ($sneq) {
        '' != om$lr && xa0['onSaveFile'](om$lr, vg2pl8), null != o2$mlr && o2$mlr['runWith']([0x0]);
      }, 'fail': function (nm5$) {} });
  }, xa0['onSaveFile'] = function (ifxt3, e6wus) {
    var ewusq = ifxt3['split']('?')[0x0];xa0['filesListObj'][ewusq] = { 'md5': e6wus, 'readyUrl': ifxt3 }, xa0['fs']['writeFile']({ 'filePath': xa0['fileNativeDir'] + '/' + xa0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xa0['filesListObj']), 'success': function ($lo5mr) {
        console['log']('写入测试测试成功：', $lo5mr);
      }, 'fail': function (vp48d) {
        console['log']('写入测试测试失败：', vp48d);
      } });
  }, xa0['existDir'] = function (w6tuf3, _0i7ay) {
    xa0['fs']['mkdir']({ 'dirPath': w6tuf3, 'success': function (t36wfu) {
        null != _0i7ay && _0i7ay['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (wn5q) {
        -0x1 != wn5q['errMsg']['indexOf']('file already exists') ? xa0['readSync'](xa0['fileListName'], 'utf8', _0i7ay) : null != _0i7ay && _0i7ay['runWith']([0x1, wn5q]);
      } });
  }, xa0['readSync'] = function (q36u, ovlg28, v8go2l, enw5qs) {
    void 0x0 === ovlg28 && (ovlg28 = 'ascill'), void 0x0 === enw5qs && (enw5qs = ''), q36u = xa0['getFileNativePath'](q36u);var _az0;try {
      _az0 = xa0['fs']['readFileSync'](q36u), null != v8go2l && v8go2l['runWith']([0x0, { 'data': _az0 }]);
    } catch (qsr$5) {
      null != v8go2l && v8go2l['runWith']([0x1]);
    }
  }, xa0['readCache'] = function () {}, xa0['writeCache'] = function (h9kjd1) {
    var itf3 = readyUrl['split']('?')[0x0];xa0['filesListObj'][itf3] = { 'md5': md5Name, 'readyUrl': readyUrl }, xa0['fs']['writeFile']({ 'filePath': xa0['fileNativeDir'] + '/' + xa0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xa0['filesListObj']), 'success': function (ro8lm2) {}, 'fail': function (m5snr$) {} });
  }, xa0['setNativeFileDir'] = function (weq3u6) {
    xa0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + weq3u6;
  }, xa0['filesListObj'] = {}, xa0['fileNativeDir'] = null, xa0['fileListName'] = 'layaairfiles.txt', xa0['ziyuFileData'] = {}, vgpl8(xa0, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), xa0);function xa0() {
    xa0['__super']['call'](this);
  }var uw36qe = function () {
    function e$5qsn() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, e$5qsn['__super']['call'](this), this['_sound'] = e$5qsn['_createSound']();
    }sqweu6(e$5qsn, 'laya.wx.mini.MiniSound', $rmo5n);var tyi3 = e$5qsn['prototype'];return tyi3['load'] = function (_7a0iy) {
      var sew6q = this,
          ewq5s;function jk19() {
        if (null != e$5qsn['_null']) sew6q['_sound']['onCanplay'](e$5qsn['_null']), sew6q['_sound']['onError'](e$5qsn['_null']);else try {
          sew6q['_sound']['onCanplay'](null), sew6q['_sound']['onError'](null), e$5qsn['_null'] = null;
        } catch (yxf_ti) {
          console['warn']('[wxmini] _clearSound:' + yxf_ti), sew6q['_sound']['onCanplay'](g28pl), sew6q['_sound']['onError'](g28pl), e$5qsn['_null'] = g28pl;
        }
      }function g28pl() {}_7a0iy = ens$q5['formatURL'](_7a0iy), this['url'] = _7a0iy, e$5qsn['_audioCache'][_7a0iy] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        jk19(), ewq5s['loaded'] = !0x0, ewq5s['event']('complete'), e$5qsn['_audioCache'][ewq5s['url']] = ewq5s;
      }), this['_sound']['onError'](function (uesqn) {
        console['error']('errCode=' + uesqn['errCode'] + '  errMsg=' + uesqn['errMsg']), jk19(), ewq5s['event']('error');
      }), this['_sound']['src'] = _7a0iy, ewq5s = this);
    }, tyi3['play'] = function (l8o2rm, y63xft) {
      void 0x0 === l8o2rm && (l8o2rm = 0x0), void 0x0 === y63xft && (y63xft = 0x0), (usqw6 = this['url'] == $lom2r['_tMusic'] ? (e$5qsn['_musicAudio'] || (e$5qsn['_musicAudio'] = e$5qsn['_createSound']()), e$5qsn['_musicAudio']) : e$5qsn['_createSound']())['src'] = this['url'];var usqw6 = new a_xi(usqw6);return usqw6['url'] = this['url'], usqw6['loops'] = y63xft, usqw6['startTime'] = l8o2rm, usqw6['play'](), $lom2r['addChannel'](usqw6), usqw6;
    }, tyi3['dispose'] = function () {
      var qesuw = e$5qsn['_audioCache'][this['url']];qesuw && (qesuw['src'] = '', delete e$5qsn['_audioCache'][this['url']]);
    }, weuqn(0x0, tyi3, 'duration', function () {
      return this['_sound']['duration'];
    }), e$5qsn['_createSound'] = function () {
      return e$5qsn['_id']++, neqswu['window']['wx']['createInnerAudioContext']();
    }, e$5qsn['_musicAudio'] = null, e$5qsn['_id'] = 0x0, e$5qsn['_audioCache'] = {}, e$5qsn['_null'] = void 0x0, e$5qsn;
  }(),
      a_xi = function () {
    function wu6es(p8v2gl) {
      this['_audio'] = null, this['_onEnd'] = null, wu6es['__super']['call'](this), this['_audio'] = p8v2gl, this['_onEnd'] = qw36ue['bind'](this['__onEnd'], this), p8v2gl['onEnded'](this['_onEnd']);
    }sqweu6(wu6es, 'laya.wx.mini.MiniSoundChannel', i0za_7);var dv9g4p = wu6es['prototype'];return dv9g4p['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (v9gp4d['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, dv9g4p['__onNull'] = function () {}, dv9g4p['play'] = function () {
      this['isStopped'] = !0x1, $lom2r['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, dv9g4p['stop'] = function () {
      if (this['isStopped'] = !0x0, $lom2r['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != wu6es['_null']) this['_audio']['onEnded'](wu6es['_null']);else try {
          this['_audio']['onEnded'](null), wu6es['_null'] = null;
        } catch (q5nwe) {
          console['warn']('[wxmini] stop:' + q5nwe), this['_audio']['onEnded'](qw36ue['bind'](this['__onNull'], this)), wu6es['_null'] = qw36ue['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, dv9g4p['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, dv9g4p['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, $lom2r['addChannel'](this), this['_audio']['play']());
    }, weuqn(0x0, dv9g4p, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), weuqn(0x0, dv9g4p, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), weuqn(0x0, dv9g4p, 'volume', function () {
      return 0x1;
    }, function (d94gvp) {}), wu6es['_null'] = void 0x0, wu6es;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function ($r5olm, a_i70) {
  'use strict';

  for (var rmol5 in Object['defineProperty'](a_i70, '__esModule', { 'value': !0x0 }), Laya) {
    var suq6ew = Laya[rmol5];suq6ew && suq6ew['__isclass'] && (a_i70[rmol5] = suq6ew);
  }
});