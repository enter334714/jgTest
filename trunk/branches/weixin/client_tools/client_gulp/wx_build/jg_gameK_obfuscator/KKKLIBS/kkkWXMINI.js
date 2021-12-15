var U = wx.$k;
(function (window, document, nv1bo) {
  var he67ti = nv1bo['un'],
      xdu$a = nv1bo['uns'],
      r_$dpl = nv1bo['static'],
      vz1wo = nv1bo['class'],
      pdl_$ = nv1bo['getset'],
      zxbvwo = nv1bo['__newvec'],
      ks28 = laya['utils']['Browser'],
      qvo1 = laya['events']['Event'],
      n8q2 = laya['events']['EventDispatcher'],
      obv1zw = laya['resource']['HTMLImage'],
      fc3y5 = laya['utils']['Handler'],
      uzlxa = laya['display']['Input'],
      pg3c = laya['net']['Loader'],
      $alxu = laya['maths']['Matrix'],
      xuazbw = laya['renders']['Render'],
      axud = laya['utils']['RunDriver'],
      hk6i = laya['media']['Sound'],
      zxwbua = laya['media']['SoundChannel'],
      _rp35d = laya['media']['SoundManager'],
      dp53 = laya['display']['Stage'],
      r$pd_ = laya['net']['URL'],
      ieh7t = laya['utils']['Utils'],
      bazo = function () {
    function f53cyg() {}return vz1wo(f53cyg, 'laya.wx.mini.MiniAdpter'), f53cyg['getJson'] = function (bzwvxo) {
      return JSON['parse'](bzwvxo);
    }, f53cyg['init'] = function (ethk, adlx$) {
      ethk === void 0x0 && (ethk = ![]), adlx$ === void 0x0 && (adlx$ = ![]);if (f53cyg['_inited']) return;f53cyg['window'] = window;if (f53cyg['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;f53cyg['_inited'] = !![], f53cyg['isZiYu'] = adlx$, f53cyg['isPosMsgYu'] = ethk, f53cyg['EnvConfig'] = {}, !f53cyg['isZiYu'] && (n0q829['setNativeFileDir']('/layaairGame'), n0q829['existDir'](n0q829['fileNativeDir'], fc3y5['create'](f53cyg, f53cyg['onMkdirCallBack']))), f53cyg['window']['focus'] = function () {}, nv1bo['getUrlPath'] = function () {}, f53cyg['window']['logtime'] = function (wbzv1) {}, f53cyg['window']['alertTimeLog'] = function (teihj) {}, f53cyg['window']['resetShareInfo'] = function () {}, f53cyg['window']['CanvasRenderingContext2D'] = function () {}, f53cyg['window']['CanvasRenderingContext2D']['prototype'] = f53cyg['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], f53cyg['window']['document']['body']['appendChild'] = function () {}, f53cyg['EnvConfig']['pixelRatioInt'] = 0x0, axud['getPixelRatio'] = f53cyg['pixelRatio'], f53cyg['_preCreateElement'] = ks28['createElement'], ks28['createElement'] = f53cyg['createElement'], axud['createShaderCondition'] = f53cyg['createShaderCondition'], ieh7t['parseXMLFromString'] = f53cyg['parseXMLFromString'], uzlxa['_createInputElement'] = s62k89['_createInputElement'], f53cyg['EnvConfig']['load'] = pg3c['prototype']['load'], pg3c['prototype']['load'] = lx$ud['prototype']['load'], f53cyg['isZiYu'] && ethk && wx['onMessage'](function (ij4tm7) {
        ij4tm7['isLoad'] && (n0q829['ziyuFileData'][ij4tm7['url']] = ij4tm7['data']);
      });
    }, f53cyg['onMkdirCallBack'] = function (xaboz, s692kh) {
      if (!xaboz) n0q829['filesListObj'] = JSON['parse'](s692kh['data']);
    }, f53cyg['pixelRatio'] = function () {
      if (!f53cyg['EnvConfig']['pixelRatioInt']) try {
        var em7 = wx['getSystemInfoSync']();return f53cyg['EnvConfig']['pixelRatioInt'] = em7['pixelRatio'], em7 = em7, em7['pixelRatio'];
      } catch (i7ej) {}return f53cyg['EnvConfig']['pixelRatioInt'];
    }, f53cyg['createElement'] = function (u$lax) {
      if (u$lax == 'canvas') {
        var q028n9;return f53cyg['idx'] == 0x1 ? f53cyg['isZiYu'] ? (q028n9 = sharedCanvas, q028n9['style'] = {}) : q028n9 = window['canvas'] : q028n9 = window['wx']['createCanvas'](), f53cyg['idx']++, q028n9;
      } else {
        if (u$lax == 'textarea' || u$lax == 'input') return f53cyg['onCreateInput'](u$lax);else {
          if (u$lax == 'div') {
            var xual$d = f53cyg['_preCreateElement'](u$lax);return xual$d['contains'] = function (k82) {
              return null;
            }, xual$d['removeChild'] = function (awz) {}, xual$d;
          } else return f53cyg['_preCreateElement'](u$lax);
        }
      }
    }, f53cyg['onCreateInput'] = function (dx$la) {
      var oawb = f53cyg['_preCreateElement'](dx$la);return oawb['focus'] = s62k89['wxinputFocus'], oawb['blur'] = s62k89['wxinputblur'], oawb['style'] = {}, oawb['value'] = 0x0, oawb['parentElement'] = {}, oawb['placeholder'] = {}, oawb['type'] = {}, oawb['setColor'] = function (ke6si) {}, oawb['setType'] = function (rp$5_) {}, oawb['setFontFace'] = function (shie) {}, oawb['addEventListener'] = function (k862s) {}, oawb['contains'] = function (timj4) {
        return null;
      }, oawb['removeChild'] = function (s28k96) {}, oawb;
    }, f53cyg['createShaderCondition'] = function (dlau$) {
      var ijht7e = this,
          ijeh7 = function () {
        var hte7ji = dlau$;return ijht7e[dlau$['replace']('this.', '')];
      };return ijeh7;
    }, f53cyg['EnvConfig'] = null, f53cyg['window'] = null, f53cyg['_preCreateElement'] = null, f53cyg['_inited'] = ![], f53cyg['wxRequest'] = null, f53cyg['systemInfo'] = null, f53cyg['version'] = '0.0.1', f53cyg['isZiYu'] = ![], f53cyg['isPosMsgYu'] = ![], f53cyg['parseXMLFromString'] = function (etkh) {
      var hki6se, dau$lx;etkh = etkh['replace'](/>\s+</g, '><');try {
        hki6se = new window['Parser']['DOMParser']()['parseFromString'](etkh, 'text/xml');
      } catch (he7j) {
        throw '需要引入xml解析库文件';
      }return hki6se;
    }, f53cyg['idx'] = 0x1, f53cyg;
  }(),
      a$_lu = function () {
    function uald() {}vz1wo(uald, 'laya.wx.mini.MiniImage');var _r$p5 = uald['prototype'];return _r$p5['_loadImage'] = function (axzblu) {
      var _dal$ = this,
          rp3_g5 = ![];axzblu['indexOf']('layaNativeDir/') == -0x1 && (rp3_g5 = !![], axzblu = r$pd_['formatURL'](axzblu));if (!n0q829['getFileInfo'](axzblu)) {
        if (axzblu['indexOf']('http://') != -0x1 || axzblu['indexOf']('https://') != -0x1) n0q829['downImg'](axzblu, new fc3y5(uald, uald['onDownImgCallBack'], [axzblu, _dal$]), axzblu);else uald['onCreateImage'](axzblu, _dal$, !![]);
      } else uald['onCreateImage'](axzblu, _dal$, !rp3_g5);
    }, uald['onDownImgCallBack'] = function (_pdr53, w1vnob, vowzbx) {
      if (!vowzbx) uald['onCreateImage'](_pdr53, w1vnob);else w1vnob['onError'](null);
    }, uald['onCreateImage'] = function (axbuzl, wv1zb, xl$az) {
      xl$az === void 0x0 && (xl$az = ![]);var qwv1no;if (!xl$az) {
        var rpd53_ = n0q829['getFileInfo'](axbuzl),
            bxzal = rpd53_['md5'];qwv1no = n0q829['getFileNativePath'](bxzal);
      } else qwv1no = axbuzl;if (wv1zb['imgCache'] == null) wv1zb['imgCache'] = {};var d$lru;function lu_$rd() {
        d$lru['onload'] = null, d$lru['onerror'] = null, delete wv1zb['imgCache'][axbuzl];
      };var l$u = function () {
        lu_$rd(), wv1zb['onLoaded'](d$lru);
      },
          e6i7t = function () {
        lu_$rd(), wv1zb['event']('error', 'Load image failed');
      };wv1zb['_type'] == 'nativeimage' ? (d$lru = new ks28['window']['Image'](), d$lru['crossOrigin'] = '', d$lru['onload'] = l$u, d$lru['onerror'] = e6i7t, d$lru['src'] = qwv1no, wv1zb['imgCache'][axbuzl] = d$lru) : new obv1zw['create'](qwv1no, { 'onload': l$u, 'onerror': e6i7t, 'onCreate': function (nvob1) {
          d$lru = nvob1, wv1zb['imgCache'][axbuzl] = nvob1;
        } });
    }, uald;
  }(),
      s62k89 = function () {
    function l$u_da() {}return vz1wo(l$u_da, 'laya.wx.mini.MiniInput'), l$u_da['_createInputElement'] = function () {
      uzlxa['_initInput'](uzlxa['area'] = ks28['createElement']('textarea')), uzlxa['_initInput'](uzlxa['input'] = ks28['createElement']('input')), uzlxa['inputContainer'] = ks28['createElement']('div'), uzlxa['inputContainer']['style']['position'] = 'absolute', uzlxa['inputContainer']['style']['zIndex'] = 0x186a0, ks28['container']['appendChild'](uzlxa['inputContainer']), uzlxa['inputContainer']['setPos'] = function (t7ieh, _d3pr5) {
        uzlxa['inputContainer']['style']['left'] = t7ieh + 'px', uzlxa['inputContainer']['style']['top'] = _d3pr5 + 'px';
      }, nv1bo['stage']['on']('resize', null, l$u_da['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ei7htj) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), _rp35d['_soundClass'] = zbwv1, _rp35d['_musicClass'] = zbwv1;
    }, l$u_da['_onStageResize'] = function () {
      var aux$lz = nv1bo['stage']['_canvasTransform']['identity']();aux$lz['scale'](ks28['width'] / xuazbw['canvas']['width'] / axud['getPixelRatio'](), ks28['height'] / xuazbw['canvas']['height'] / axud['getPixelRatio']());
    }, l$u_da['wxinputFocus'] = function (z1bwvo) {
      var dlr$_p = uzlxa['inputElement']['target'];if (dlr$_p && !dlr$_p['editable']) return;bazo['window']['wx']['offKeyboardConfirm'](), bazo['window']['wx']['offKeyboardInput'](), bazo['window']['wx']['showKeyboard']({ 'defaultValue': dlr$_p['text'], 'maxLength': dlr$_p['maxChars'], 'multiple': dlr$_p['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (xuba) {}, 'fail': function (eitkh) {} }), bazo['window']['wx']['onKeyboardConfirm'](function (q9s82) {
        var bawzu = q9s82 ? q9s82['value'] : '';dlr$_p['text'] = bawzu, dlr$_p['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), bazo['window']['wx']['onKeyboardInput'](function (u$l_d) {
        var zxu$la = u$l_d ? u$l_d['value'] : '';if (!dlr$_p['multiline']) {
          if (zxu$la['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }dlr$_p['text'] = zxu$la, dlr$_p['event']('input');
      });
    }, l$u_da['inputEnter'] = function () {
      uzlxa['inputElement']['target']['focus'] = ![];
    }, l$u_da['wxinputblur'] = function () {
      l$u_da['hideKeyboard']();
    }, l$u_da['hideKeyboard'] = function () {
      bazo['window']['wx']['offKeyboardConfirm'](), bazo['window']['wx']['offKeyboardInput'](), bazo['window']['wx']['hideKeyboard']({ 'success': function (j7iet) {
          console['log']('隐藏键盘');
        }, 'fail': function (axd) {
          console['log']('隐藏键盘出错:' + (axd ? axd['errMsg'] : ''));
        } });
    }, l$u_da;
  }(),
      lx$ud = function () {
    function d5pr3_() {}vz1wo(d5pr3_, 'laya.wx.mini.MiniLoader');var s6iehk = d5pr3_['prototype'];return s6iehk['load'] = function ($zuax, _5d3pr, e76, plr$_d, xldau) {
      e76 === void 0x0 && (e76 = !![]), xldau === void 0x0 && (xldau = ![]);var uaxd$ = this;uaxd$['_url'] = $zuax;if ($zuax['indexOf']('data:image') === 0x0) uaxd$['_type'] = _5d3pr = 'image';else uaxd$['_type'] = _5d3pr || (_5d3pr = uaxd$['getTypeFromUrl']($zuax));uaxd$['_cache'] = e76, uaxd$['_data'] = null;var dur_l$ = 'ascii';if ($zuax['indexOf']('.fnt') != -0x1) dur_l$ = 'utf8';else _5d3pr == 'arraybuffer' && (dur_l$ = '');;var th7ji = ieh7t['getFileExtension']($zuax);if (d5pr3_['_fileTypeArr']['indexOf'](th7ji) != -0x1) bazo['EnvConfig']['load']['call'](this, $zuax, _5d3pr, e76, plr$_d, xldau);else {
        if (!n0q829['getFileInfo']($zuax)) {
          if ($zuax['indexOf']('layaNativeDir/') != -0x1) {
            if (bazo['isZiYu']) {
              var je7itm = n0q829['ziyuFileData'][$zuax];uaxd$['onLoaded'](je7itm);return;
            } else {
              cosnole['log']('read read'), n0q829['read']($zuax, dur_l$, new fc3y5(d5pr3_, d5pr3_['onReadNativeCallBack'], [dur_l$, $zuax, _5d3pr, e76, plr$_d, xldau, uaxd$]));return;
            }
          }if (r$pd_['rootPath'] == '') var _rg = $zuax;else _rg = $zuax['split'](r$pd_['rootPath'])[0x0];$zuax['indexOf']('http://') != -0x1 || $zuax['indexOf']('https://') != -0x1 ? bazo['EnvConfig']['load']['call'](uaxd$, $zuax, _5d3pr, e76, plr$_d, xldau) : n0q829['readFile'](_rg, dur_l$, new fc3y5(d5pr3_, d5pr3_['onReadNativeCallBack'], [dur_l$, $zuax, _5d3pr, e76, plr$_d, xldau, uaxd$]), $zuax);
        } else bazo['EnvConfig']['load']['call'](this, $zuax, _5d3pr, e76, plr$_d, xldau);
      }
    }, s6iehk['resMgrLoad'] = function (nvbwo, gyf35c, gr_3p5, i7tjhe, s2890, _gr3p, j74imt) {
      gr_3p5 === void 0x0 && (gr_3p5 = 0x0), i7tjhe === void 0x0 && (i7tjhe = ![]), s2890 === void 0x0 && (s2890 = ![]), _gr3p === void 0x0 && (_gr3p = 0x0), j74imt === void 0x0 && (j74imt = 0x3), nvbwo['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', nvbwo), bazo['EnvConfig']['resMgrLoad'](nvbwo, (tij74m, r$_lp, l$pr) => {
        d5pr3_['prototype']['resMgrLoadCallBack'](tij74m, r$_lp, l$pr, gyf35c);
      }, gr_3p5, i7tjhe, s2890, _gr3p, j74imt);
    }, s6iehk['resMgrLoadCallBack'] = function (_dp$r, ke69s, khe6t, fpr35) {
      console['log']('buff:::', _dp$r, khe6t, n0q829['fileNativeDir'] + '///' + n0q829['fileListName']), fpr35(_dp$r, ke69s, khe6t);
    }, s6iehk['clearRes'] = function (q218n0, sq89) {
      sq89 === void 0x0 && (sq89 = ![]);var ozxwb = this;ozxwb['clearRes'](q218n0, sq89);var wovzb1 = n0q829['getFileInfo'](q218n0);if (wovzb1 && (q218n0['indexOf']('http://') != -0x1 || q218n0['indexOf']('https://') != -0x1)) {
        var f3cgp = wovzb1['md5'],
            i7tje = n0q829['getFileNativePath'](f3cgp);n0q829['remove'](i7tje);
      }
    }, d5pr3_['onReadNativeCallBack'] = function (ethik6, isekh, zv1o, buxwza, u$rd, ki6sh, hti6ek, nqovw, $pd_r) {
      buxwza === void 0x0 && (buxwza = !![]), ki6sh === void 0x0 && (ki6sh = ![]), nqovw === void 0x0 && (nqovw = 0x0);if (!nqovw) {
        var _da;if (zv1o == 'json' || zv1o == 'atlas') _da = bazo['getJson']($pd_r['data']);else zv1o == 'xml' ? _da = ieh7t['parseXMLFromString']($pd_r['data']) : _da = $pd_r['data'];hti6ek['onLoaded'](_da), !bazo['isZiYu'] && bazo['isPosMsgYu'] && zv1o != 'arraybuffer' && wx['postMessage']({ 'url': isekh, 'data': _da, 'isLoad': !![] });
      } else nqovw == 0x1 && bazo['EnvConfig']['load']['call'](hti6ek, isekh, zv1o, buxwza, u$rd, ki6sh);
    }, r_$dpl(d5pr3_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), d5pr3_;
  }(),
      n0q829 = function (p_rd$l) {
    function ih6ks() {
      ih6ks['__super']['call'](this);;
    }return vz1wo(ih6ks, 'laya.wx.mini.MiniFileMgr', p_rd$l), ih6ks['isLoadFile'] = function ($dr_u) {
      return ih6ks['_fileTypeArr']['indexOf']($dr_u) != -0x1 ? !![] : ![];
    }, ih6ks['getFileInfo'] = function (ad_lu) {
      var luz$ = ad_lu['split']('?')[0x0],
          zxbuwa = ih6ks['filesListObj'][luz$];if (zxbuwa == null) return null;else return zxbuwa;return null;
    }, ih6ks['onFileUpdate'] = function (zabxo, g3cy5) {
      var rg5p3 = zabxo['split']('/'),
          khite6 = rg5p3[rg5p3['length'] - 0x1],
          vwozb = ih6ks['getFileInfo'](g3cy5);if (vwozb == null) ih6ks['onSaveFile'](g3cy5, khite6);else {
        if (vwozb['readyUrl'] != g3cy5) ih6ks['remove'](khite6, g3cy5);
      }
    }, ih6ks['exits'] = function (r$dpl_, te7ij) {
      var iejtm7 = ih6ks['getFileNativePath'](r$dpl_);ih6ks['fs']['getFileInfo']({ 'filePath': iejtm7, 'success': function (owzxba) {
          te7ij != null && te7ij['runWith']([0x0, owzxba]);
        }, 'fail': function (k6eish) {
          te7ij != null && te7ij['runWith']([0x1, k6eish]);
        } });
    }, ih6ks['read'] = function (etijh7, ke9hs6, wnov1, vwbn) {
      ke9hs6 === void 0x0 && (ke9hs6 = 'ascill'), vwbn === void 0x0 && (vwbn = '');var mti7;vwbn != '' ? mti7 = ih6ks['getFileNativePath'](etijh7) : mti7 = etijh7, ih6ks['fs']['readFile']({ 'filePath': mti7, 'encoding': ke9hs6, 'success': function (abuwz) {
          wnov1 != null && wnov1['runWith']([0x0, abuwz]);
        }, 'fail': function (yg5cf) {
          if (yg5cf && vwbn != '') ih6ks['down'](vwbn, ke9hs6, wnov1, vwbn);else wnov1 != null && wnov1['runWith']([0x1]);
        } });
    }, ih6ks['readNativeFile'] = function (o0vn1, vz1ob) {
      ih6ks['fs']['readFile']({ 'filePath': o0vn1, 'encoding': '', 'success': function (c35y) {
          vz1ob != null && vz1ob['runWith']([0x0]);
        }, 'fail': function (xabzwu) {
          vz1ob != null && vz1ob['runWith']([0x1]);
        } });
    }, ih6ks['down'] = function (rldp$_, $audx, bxwzau, j7eth) {
      $audx === void 0x0 && ($audx = 'ascill'), j7eth === void 0x0 && (j7eth = '');var ladu$ = ih6ks['getFileNativePath'](j7eth),
          xzubla = ih6ks['wxdown']({ 'url': rldp$_, 'filePath': ladu$, 'success': function (thjie7) {
          if (thjie7['statusCode'] === 0xc8) ih6ks['readFile'](thjie7['filePath'], $audx, bxwzau, j7eth);
        }, 'fail': function (bxlaz) {
          bxwzau != null && bxwzau['runWith']([0x1, bxlaz]);
        } });xzubla['onProgressUpdate'](function (n08q12) {
        bxwzau != null && bxwzau['runWith']([0x2, n08q12['progress']]);
      });
    }, ih6ks['readFile'] = function (al$uzx, xlbzau, ihek, v1oqn0) {
      xlbzau === void 0x0 && (xlbzau = 'ascill'), v1oqn0 === void 0x0 && (v1oqn0 = ''), ih6ks['fs']['readFile']({ 'filePath': al$uzx, 'encoding': xlbzau, 'success': function ($zxal) {
          if (al$uzx['indexOf']('http://') != -0x1 || al$uzx['indexOf']('https://') != -0x1) ih6ks['onFileUpdate'](al$uzx, v1oqn0);ihek != null && ihek['runWith']([0x0, $zxal]);
        }, 'fail': function (_3pd5) {
          if (_3pd5) ihek != null && ihek['runWith']([0x1, _3pd5]);
        } });
    }, ih6ks['downImg'] = function (obvwzx, s8q09, uld) {
      uld === void 0x0 && (uld = '');var v1obz = ih6ks['wxdown']({ 'url': obvwzx, 'success': function (_3dpr5) {
          _3dpr5['statusCode'] === 0xc8 && ih6ks['copyFile'](_3dpr5['tempFilePath'], uld, s8q09);
        }, 'fail': function (d$r_pl) {
          s8q09 != null && s8q09['runWith']([0x1, d$r_pl]);
        } });
    }, ih6ks['copyFile'] = function (it47, lau_$, g53cf) {
      var a$dlx = it47['split']('/'),
          rd3_p = a$dlx[a$dlx['length'] - 0x1],
          uzba = lau_$['split']('?')[0x0],
          ks926 = ih6ks['getFileInfo'](lau_$),
          rd5$ = ih6ks['getFileNativePath'](rd3_p);ih6ks['fs']['copyFile']({ 'srcPath': it47, 'destPath': rd5$, 'success': function (r_35g) {
          if (!ks926) ih6ks['onSaveFile'](lau_$, rd3_p), g53cf != null && g53cf['runWith']([0x0]);else {
            if (ks926['readyUrl'] != lau_$) ih6ks['remove'](rd3_p, lau_$, g53cf);
          }
        }, 'fail': function (_5p3dr) {
          g53cf != null && g53cf['runWith']([0x1, _5p3dr]);
        } });
    }, ih6ks['getFileNativePath'] = function (ru_ld) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ru_ld;
    }, ih6ks['remove'] = function (_rul$, r3g_p, dr$p5) {
      r3g_p === void 0x0 && (r3g_p = '');var d$lu_ = ih6ks['getFileInfo'](r3g_p),
          azbxu = ih6ks['getFileNativePath'](d$lu_['md5']);nv1bo['loader']['clearRes'](d$lu_['readyUrl']), ih6ks['fs']['unlink']({ 'filePath': azbxu, 'success': function (ux$l) {
          if (r3g_p != '') ih6ks['onSaveFile'](r3g_p, _rul$);dr$p5 != null && dr$p5['runWith']([0x0]);
        }, 'fail': function (h6e) {} });
    }, ih6ks['onSaveFile'] = function (ieh76t, wvoqn1) {
      var bxaul = ieh76t['split']('?')[0x0];ih6ks['filesListObj'][bxaul] = { 'md5': wvoqn1, 'readyUrl': ieh76t }, ih6ks['fs']['writeFile']({ 'filePath': ih6ks['fileNativeDir'] + '/' + ih6ks['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ih6ks['filesListObj']), 'success': function (xzuwb) {
          console['log']('写入测试测试成功：', xzuwb);
        }, 'fail': function (q180nv) {
          console['log']('写入测试测试失败：', q180nv);
        } });
    }, ih6ks['existDir'] = function (g5r_p3, _alu$d) {
      ih6ks['fs']['mkdir']({ 'dirPath': g5r_p3, 'success': function (q812n0) {
          _alu$d != null && _alu$d['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (t6hke) {
          if (t6hke['errMsg']['indexOf']('file already exists') != -0x1) ih6ks['readSync'](ih6ks['fileListName'], 'utf8', _alu$d);else _alu$d != null && _alu$d['runWith']([0x1, t6hke]);
        } });
    }, ih6ks['readSync'] = function (ihetj7, prd$5_, qwvn, q8n20) {
      prd$5_ === void 0x0 && (prd$5_ = 'ascill'), q8n20 === void 0x0 && (q8n20 = '');var qown1 = ih6ks['getFileNativePath'](ihetj7),
          zbxov;try {
        zbxov = ih6ks['fs']['readFileSync'](qown1), qwvn != null && qwvn['runWith']([0x0, { 'data': zbxov }]);
      } catch (auld) {
        qwvn != null && qwvn['runWith']([0x1]);
      }
    }, ih6ks['readCache'] = function () {}, ih6ks['writeCache'] = function (cgy53f) {
      var f35yc = readyUrl['split']('?')[0x0];ih6ks['filesListObj'][f35yc] = { 'md5': md5Name, 'readyUrl': readyUrl }, ih6ks['fs']['writeFile']({ 'filePath': ih6ks['fileNativeDir'] + '/' + ih6ks['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ih6ks['filesListObj']), 'success': function (pd5_$r) {}, 'fail': function (oqv0n) {} });
    }, ih6ks['setNativeFileDir'] = function (n1wvbo) {
      ih6ks['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + n1wvbo;
    }, ih6ks['filesListObj'] = {}, ih6ks['fileNativeDir'] = null, ih6ks['fileListName'] = 'layaairfiles.txt', ih6ks['ziyuFileData'] = {}, r_$dpl(ih6ks, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ih6ks;
  }(n8q2),
      zbwv1 = function (wbvxzo) {
    function $lp_() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], $lp_['__super']['call'](this), this['_sound'] = $lp_['_createSound']();
    }vz1wo($lp_, 'laya.wx.mini.MiniSound', wbvxzo);var f35c = $lp_['prototype'];return f35c['load'] = function (n209) {
      var prfg = this;n209 = r$pd_['formatURL'](n209), this['url'] = n209;if ($lp_['_audioCache'][n209]) {
        this['event']('complete');return;
      }function t4j7mi() {
        if ($lp_['_null'] != undefined) prfg['_sound']['onCanplay']($lp_['_null']), prfg['_sound']['onError']($lp_['_null']);else try {
          prfg['_sound']['onCanplay'](null), prfg['_sound']['onError'](null), $lp_['_null'] = null;
        } catch (m7i4) {
          console['warn']('[wxmini] _clearSound:' + m7i4), prfg['_sound']['onCanplay'](h29ks), prfg['_sound']['onError'](h29ks), $lp_['_null'] = h29ks;
        }
      }function ld$_ua() {
        t4j7mi(), $d_l['loaded'] = !![], $d_l['event']('complete'), $lp_['_audioCache'][$d_l['url']] = $d_l;
      }function bwux(dx$ul) {
        console['error']('errCode=' + dx$ul['errCode'] + '  errMsg=' + dx$ul['errMsg']), t4j7mi(), $d_l['event']('error');
      }function h29ks() {}this['_sound']['onCanplay'](ld$_ua), this['_sound']['onError'](bwux), this['_sound']['src'] = n209;var $d_l = this;
    }, f35c['play'] = function (q2n108, bzvo1) {
      q2n108 === void 0x0 && (q2n108 = 0x0), bzvo1 === void 0x0 && (bzvo1 = 0x0);var _dr$u;if (this['url'] == _rp35d['_tMusic']) {
        if (!$lp_['_musicAudio']) $lp_['_musicAudio'] = $lp_['_createSound']();_dr$u = $lp_['_musicAudio'];
      } else _dr$u = $lp_['_createSound']();_dr$u['src'] = this['url'];var kse9 = new xua$z(_dr$u);return kse9['url'] = this['url'], kse9['loops'] = bzvo1, kse9['startTime'] = q2n108, kse9['play'](), _rp35d['addChannel'](kse9), kse9;
    }, f35c['dispose'] = function () {
      var _grp35 = $lp_['_audioCache'][this['url']];_grp35 && (_grp35['src'] = '', delete $lp_['_audioCache'][this['url']]);
    }, pdl_$(0x0, f35c, 'duration', function () {
      return this['_sound']['duration'];
    }), $lp_['_createSound'] = function () {
      return $lp_['_id']++, bazo['window']['wx']['createInnerAudioContext']();
    }, $lp_['_musicAudio'] = null, $lp_['_id'] = 0x0, $lp_['_audioCache'] = {}, $lp_['_null'] = undefined, $lp_;
  }(n8q2),
      xua$z = function (sh6ie) {
    function lz(bv1woz) {
      this['_audio'] = null, this['_onEnd'] = null, lz['__super']['call'](this), this['_audio'] = bv1woz, this['_onEnd'] = ieh7t['bind'](this['__onEnd'], this), bv1woz['onEnded'](this['_onEnd']);
    }vz1wo(lz, 'laya.wx.mini.MiniSoundChannel', sh6ie);var hi7 = lz['prototype'];return hi7['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (nv1bo['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hi7['__onNull'] = function () {}, hi7['play'] = function () {
      this['isStopped'] = ![], _rp35d['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, hi7['stop'] = function () {
      this['isStopped'] = !![], _rp35d['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (lz['_null'] != undefined) this['_audio']['onEnded'](lz['_null']);else try {
        this['_audio']['onEnded'](null), lz['_null'] = null;
      } catch (v8n0) {
        console['warn']('[wxmini] stop:' + v8n0), this['_audio']['onEnded'](ieh7t['bind'](this['__onNull'], this)), lz['_null'] = ieh7t['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, hi7['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, hi7['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], _rp35d['addChannel'](this), this['_audio']['play']();
    }, pdl_$(0x0, hi7, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), pdl_$(0x0, hi7, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), pdl_$(0x0, hi7, 'volume', function () {
      return 0x1;
    }, function (etih76) {}), lz['_null'] = undefined, lz;
  }(zxwbua);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var mt7ei in Laya) {
    var d$au_ = Laya[mt7ei];d$au_ && d$au_['__isclass'] && (exports[mt7ei] = d$au_);
  }
});