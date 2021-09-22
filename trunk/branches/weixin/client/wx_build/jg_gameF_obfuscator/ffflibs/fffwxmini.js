var k = wx.$f;
!function (n0h5u_, u05nwh) {
  u05nwh['un'], u05nwh['uns'];var k_$4ds = u05nwh['static'],
      zg4r$j = u05nwh['class'],
      gk$r = u05nwh['getset'];u05nwh['__newvec'];var gr$4zk = laya['utils']['Browser'],
      twepq = (laya['events']['Event'], laya['events']['EventDispatcher']),
      pmqv = laya['resource']['HTMLImage'],
      $4sdrk = laya['utils']['Handler'],
      y6oc = laya['display']['Input'],
      ks4_d = laya['net']['Loader'];laya['maths']['Matrix'];var xrjg4z = laya['renders']['Render'],
      macy = laya['utils']['RunDriver'];laya['media']['Sound'];var ioyc61 = laya['media']['SoundChannel'],
      dks$4r = laya['media']['SoundManager'],
      phwe2 = (laya['display']['Stage'], laya['net']['URL']),
      kn_us = laya['utils']['Utils'],
      r$4zkg = (zg4r$j(tmvayi, 'laya.wx.mini.MiniAdpter'), tmvayi['getJson'] = function (oy16c) {
    return JSON['parse'](oy16c);
  }, tmvayi['init'] = function (ytmavi, imcv) {
    void 0x0 === ytmavi && (ytmavi = !0x1), void 0x0 === imcv && (imcv = !0x1), tmvayi['_inited'] || (tmvayi['window'] = n0h5u_)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (tmvayi['_inited'] = !0x0, tmvayi['isZiYu'] = imcv, tmvayi['isPosMsgYu'] = ytmavi, tmvayi['EnvConfig'] = {}, tmvayi['isZiYu'] || (qvami['setNativeFileDir']('/layaairGame'), qvami['existDir'](qvami['fileNativeDir'], $4sdrk['create'](tmvayi, tmvayi['onMkdirCallBack']))), tmvayi['window']['focus'] = function () {}, u05nwh['getUrlPath'] = function () {}, tmvayi['window']['logtime'] = function (ob76) {}, tmvayi['window']['alertTimeLog'] = function (w0nuh) {}, tmvayi['window']['resetShareInfo'] = function () {}, tmvayi['window']['CanvasRenderingContext2D'] = function () {}, tmvayi['window']['CanvasRenderingContext2D']['prototype'] = tmvayi['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], tmvayi['window']['document']['body']['appendChild'] = function () {}, tmvayi['EnvConfig']['pixelRatioInt'] = 0x0, macy['getPixelRatio'] = tmvayi['pixelRatio'], tmvayi['_preCreateElement'] = gr$4zk['createElement'], gr$4zk['createElement'] = tmvayi['createElement'], macy['createShaderCondition'] = tmvayi['createShaderCondition'], kn_us['parseXMLFromString'] = tmvayi['parseXMLFromString'], y6oc['_createInputElement'] = y6ic['_createInputElement'], tmvayi['EnvConfig']['load'] = ks4_d['prototype']['load'], ks4_d['prototype']['load'] = dk_nsu['prototype']['load'], tmvayi['isZiYu'] && ytmavi && wx['onMessage'](function (aoi1cy) {
      aoi1cy['isLoad'] && (qvami['ziyuFileData'][aoi1cy['url']] = aoi1cy['data']);
    }));
  }, tmvayi['onMkdirCallBack'] = function (pvtaq, uk_d$) {
    pvtaq || (qvami['filesListObj'] = JSON['parse'](uk_d$['data']));
  }, tmvayi['pixelRatio'] = function () {
    if (!tmvayi['EnvConfig']['pixelRatioInt']) try {
      var _nh50u = wx['getSystemInfoSync']();return tmvayi['EnvConfig']['pixelRatioInt'] = _nh50u['pixelRatio'], _nh50u['pixelRatio'];
    } catch (s_$uk) {}return tmvayi['EnvConfig']['pixelRatioInt'];
  }, tmvayi['createElement'] = function (yoc1) {
    var k$sd;if ('canvas' == yoc1) return 0x1 == tmvayi['idx'] ? tmvayi['isZiYu'] ? (k$sd = sharedCanvas)['style'] = {} : k$sd = n0h5u_['canvas'] : k$sd = n0h5u_['wx']['createCanvas'](), tmvayi['idx']++, k$sd;if ('textarea' == yoc1 || 'input' == yoc1) return tmvayi['onCreateInput'](yoc1);if ('div' != yoc1) return tmvayi['_preCreateElement'](yoc1);return yoc1 = tmvayi['_preCreateElement'](yoc1), (yoc1['contains'] = function (uh_d0n) {
      return null;
    }, yoc1['removeChild'] = function (y1aoc) {}, yoc1);
  }, tmvayi['onCreateInput'] = function (oc61yi) {
    return oc61yi = tmvayi['_preCreateElement'](oc61yi), (oc61yi['focus'] = y6ic['wxinputFocus'], oc61yi['blur'] = y6ic['wxinputblur'], oc61yi['style'] = {}, oc61yi['value'] = 0x0, oc61yi['parentElement'] = {}, oc61yi['placeholder'] = {}, oc61yi['type'] = {}, oc61yi['setColor'] = function (r$s4dk) {}, oc61yi['setType'] = function (pqvt2) {}, oc61yi['setFontFace'] = function (sku_d) {}, oc61yi['addEventListener'] = function (nw052h) {}, oc61yi['contains'] = function (_s0nud) {
      return null;
    }, oc61yi['removeChild'] = function (vacmiy) {}, oc61yi);
  }, tmvayi['createShaderCondition'] = function (h02n5w) {
    var s$rkg4 = this;return function () {
      return s$rkg4[h02n5w['replace']('this.', '')];
    };
  }, tmvayi['EnvConfig'] = null, tmvayi['window'] = null, tmvayi['_preCreateElement'] = null, tmvayi['_inited'] = !0x1, tmvayi['wxRequest'] = null, tmvayi['systemInfo'] = null, tmvayi['version'] = '0.0.1', tmvayi['isZiYu'] = !0x1, tmvayi['isPosMsgYu'] = !0x1, tmvayi['parseXMLFromString'] = function (b97o) {
    var macyi1;b97o = b97o['replace'](/>\s+</g, '><');try {
      macyi1 = new n0h5u_['Parser']['DOMParser']()['parseFromString'](b97o, 'text/xml');
    } catch (_duks) {
      throw '需要引入xml解析库文件';
    }return macyi1;
  }, tmvayi['idx'] = 0x1, tmvayi);function tmvayi() {}zg4r$j(rzg4jx, 'laya.wx.mini.MiniImage'), rzg4jx['prototype']['_loadImage'] = function (bc8o61) {
    var $kg4r = !0x1;-0x1 == bc8o61['indexOf']('layaNativeDir/') && ($kg4r = !0x0, bc8o61 = phwe2['formatURL'](bc8o61)), qvami['getFileInfo'](bc8o61) ? rzg4jx['onCreateImage'](bc8o61, this, !$kg4r) : -0x1 != bc8o61['indexOf']('http://') || -0x1 != bc8o61['indexOf']('https://') ? qvami['downImg'](bc8o61, new $4sdrk(rzg4jx, rzg4jx['onDownImgCallBack'], [bc8o61, this]), bc8o61) : rzg4jx['onCreateImage'](bc8o61, this, !0x0);
  }, rzg4jx['onDownImgCallBack'] = function (b916, o769b8, mca1i) {
    mca1i ? o769b8['onError'](null) : rzg4jx['onCreateImage'](b916, o769b8);
  }, rzg4jx['onCreateImage'] = function (cia1m, pwq2e5, qvmai) {
    var y861c, nhw052;function d_nk() {
      nhw052['onload'] = null, nhw052['onerror'] = null, delete pwq2e5['imgCache'][cia1m];
    }y861c = (qvmai = void 0x0 === qvmai ? !0x1 : qvmai) ? cia1m : (ic1oy6 = qvami['getFileInfo'](cia1m)['md5'], qvami['getFileNativePath'](ic1oy6)), null == pwq2e5['imgCache'] && (pwq2e5['imgCache'] = {}), qvmai = function () {
      d_nk(), pwq2e5['onLoaded'](nhw052);
    };var ic1oy6 = function () {
      d_nk(), pwq2e5['event']('error', 'Load image failed');
    };'nativeimage' == pwq2e5['_type'] ? ((nhw052 = new gr$4zk['window']['Image']())['crossOrigin'] = '', nhw052['onload'] = qvmai, nhw052['onerror'] = ic1oy6, nhw052['src'] = y861c, pwq2e5['imgCache'][cia1m] = nhw052) : new pmqv['create'](y861c, { 'onload': qvmai, 'onerror': ic1oy6, 'onCreate': function (eq2vtp) {
        nhw052 = eq2vtp, pwq2e5['imgCache'][cia1m] = eq2vtp;
      } });
  };function rzg4jx() {}var y6ic = (zg4r$j(ud$sk, 'laya.wx.mini.MiniInput'), ud$sk['_createInputElement'] = function () {
    y6oc['_initInput'](y6oc['area'] = gr$4zk['createElement']('textarea')), y6oc['_initInput'](y6oc['input'] = gr$4zk['createElement']('input')), y6oc['inputContainer'] = gr$4zk['createElement']('div'), y6oc['inputContainer']['style']['position'] = 'absolute', y6oc['inputContainer']['style']['zIndex'] = 0x186a0, gr$4zk['container']['appendChild'](y6oc['inputContainer']), y6oc['inputContainer']['setPos'] = function (z$rk4, _hun05) {
      y6oc['inputContainer']['style']['left'] = z$rk4 + 'px', y6oc['inputContainer']['style']['top'] = _hun05 + 'px';
    }, u05nwh['stage']['on']('resize', null, ud$sk['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (oa1ci) {
      n0h5u_['dispatchEvent'] && n0h5u_['dispatchEvent']('resize');
    }), dks$4r['_soundClass'] = zj4gxr, dks$4r['_musicClass'] = zj4gxr;
  }, ud$sk['_onStageResize'] = function () {
    u05nwh['stage']['_canvasTransform']['identity']()['scale'](gr$4zk['width'] / xrjg4z['canvas']['width'] / macy['getPixelRatio'](), gr$4zk['height'] / xrjg4z['canvas']['height'] / macy['getPixelRatio']());
  }, ud$sk['wxinputFocus'] = function (itvamq) {
    var co61iy = y6oc['inputElement']['target'];co61iy && !co61iy['editable'] || (r$4zkg['window']['wx']['offKeyboardConfirm'](), r$4zkg['window']['wx']['offKeyboardInput'](), r$4zkg['window']['wx']['showKeyboard']({ 'defaultValue': co61iy['text'], 'maxLength': co61iy['maxChars'], 'multiple': co61iy['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (cyaio) {}, 'fail': function (pet2q) {} }), r$4zkg['window']['wx']['onKeyboardConfirm'](function (ma1yi) {
      ma1yi = ma1yi ? ma1yi['value'] : '', (co61iy['text'] = ma1yi, co61iy['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), r$4zkg['window']['wx']['onKeyboardInput'](function (wp2qe) {
      wp2qe = wp2qe ? wp2qe['value'] : '', co61iy['multiline'] || -0x1 == wp2qe['indexOf']('\x0a') ? (co61iy['text'] = wp2qe, co61iy['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, ud$sk['inputEnter'] = function () {
    y6oc['inputElement']['target']['focus'] = !0x1;
  }, ud$sk['wxinputblur'] = function () {
    ud$sk['hideKeyboard']();
  }, ud$sk['hideKeyboard'] = function () {
    r$4zkg['window']['wx']['offKeyboardConfirm'](), r$4zkg['window']['wx']['offKeyboardInput'](), r$4zkg['window']['wx']['hideKeyboard']({ 'success': function (cy16io) {
        console['log']('隐藏键盘');
      }, 'fail': function (ph2w5) {
        console['log']('隐藏键盘出错:' + (ph2w5 ? ph2w5['errMsg'] : ''));
      } });
  }, ud$sk);function ud$sk() {}var dk_nsu = function () {
    function _0nds() {}zg4r$j(_0nds, 'laya.wx.mini.MiniLoader');var uw5h0 = _0nds['prototype'];return uw5h0['load'] = function (qiatvm, tqmpve, iymvat, w5hep2, qe25) {
      void 0x0 === iymvat && (iymvat = !0x0), void 0x0 === qe25 && (qe25 = !0x1);var un05h_ = this;0x0 === (un05h_['_url'] = qiatvm)['indexOf']('data:image') ? un05h_['_type'] = tqmpve = 'image' : un05h_['_type'] = tqmpve = tqmpve || un05h_['getTypeFromUrl'](qiatvm), un05h_['_cache'] = iymvat, un05h_['_data'] = null;var io1y = 'ascii';-0x1 != qiatvm['indexOf']('.fnt') ? io1y = 'utf8' : 'arraybuffer' == tqmpve && (io1y = '');var tqamv = kn_us['getFileExtension'](qiatvm);if (-0x1 != _0nds['_fileTypeArr']['indexOf'](tqamv)) r$4zkg['EnvConfig']['load']['call'](this, qiatvm, tqmpve, iymvat, w5hep2, qe25);else {
        if (qvami['getFileInfo'](qiatvm)) r$4zkg['EnvConfig']['load']['call'](this, qiatvm, tqmpve, iymvat, w5hep2, qe25);else {
          if (-0x1 != qiatvm['indexOf']('layaNativeDir/')) {
            if (r$4zkg['isZiYu']) {
              var qwp5e2 = qvami['ziyuFileData'][qiatvm];return void un05h_['onLoaded'](qwp5e2);
            }return cosnole['log']('read read'), void qvami['read'](qiatvm, io1y, new $4sdrk(_0nds, _0nds['onReadNativeCallBack'], [io1y, qiatvm, tqmpve, iymvat, w5hep2, qe25, un05h_]));
          }qwp5e2 = '' == phwe2['rootPath'] ? qiatvm : qiatvm['split'](phwe2['rootPath'])[0x0], -0x1 != qiatvm['indexOf']('http://') || -0x1 != qiatvm['indexOf']('https://') ? r$4zkg['EnvConfig']['load']['call'](un05h_, qiatvm, tqmpve, iymvat, w5hep2, qe25) : qvami['readFile'](qwp5e2, io1y, new $4sdrk(_0nds, _0nds['onReadNativeCallBack'], [io1y, qiatvm, tqmpve, iymvat, w5hep2, qe25, un05h_]), qiatvm);
        }
      }
    }, uw5h0['resMgrLoad'] = function (q2ptew, tmqapv, vti, nus0d_, _0ds, h0n5, imycv) {
      void 0x0 === vti && (vti = 0x0), void 0x0 === nus0d_ && (nus0d_ = !0x1), void 0x0 === _0ds && (_0ds = !0x1), void 0x0 === h0n5 && (h0n5 = 0x0), void 0x0 === imycv && (imycv = 0x3), -0x1 != q2ptew['indexOf']('mpack') && console['log']('=============resMgrLoad url:', q2ptew), r$4zkg['EnvConfig']['resMgrLoad'](q2ptew, (_sdk4$, usn0, $d_s4) => {
        _0nds['prototype']['resMgrLoadCallBack'](_sdk4$, usn0, $d_s4, tmqapv);
      }, vti, nus0d_, _0ds, h0n5, imycv);
    }, uw5h0['resMgrLoadCallBack'] = function ($4rd, sud_k, cam1, co1i6) {
      console['log']('buff:::', $4rd, cam1, qvami['fileNativeDir'] + '///' + qvami['fileListName']), co1i6($4rd, sud_k, cam1);
    }, uw5h0['clearRes'] = function (tpme, _0dnuh) {
      this['clearRes'](tpme, _0dnuh = void 0x0 === _0dnuh ? !0x1 : _0dnuh), _0dnuh = qvami['getFileInfo'](tpme), !_0dnuh || -0x1 == tpme['indexOf']('http://') && -0x1 == tpme['indexOf']('https://') || (_0dnuh = _0dnuh['md5'], _0dnuh = qvami['getFileNativePath'](_0dnuh), qvami['remove'](_0dnuh));
    }, _0nds['onReadNativeCallBack'] = function (z$jr4g, tvaqmp, mityav, ytim, maqivt, su_dn0, bco61, aimt, vtaqim) {
      void 0x0 === ytim && (ytim = !0x0), void 0x0 === su_dn0 && (su_dn0 = !0x1), (aimt = void 0x0 === aimt ? 0x0 : aimt) ? 0x1 == aimt && r$4zkg['EnvConfig']['load']['call'](bco61, tvaqmp, mityav, ytim, maqivt, su_dn0) : (vtaqim = 'json' == mityav || 'atlas' == mityav ? r$4zkg['getJson'](vtaqim['data']) : 'xml' == mityav ? kn_us['parseXMLFromString'](vtaqim['data']) : vtaqim['data'], bco61['onLoaded'](vtaqim), !r$4zkg['isZiYu'] && r$4zkg['isPosMsgYu'] && 'arraybuffer' != mityav && wx['postMessage']({ 'url': tvaqmp, 'data': vtaqim, 'isLoad': !0x0 }));
    }, k_$4ds(_0nds, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _0nds;
  }(),
      qvami = (zg4r$j(ksr$4g, 'laya.wx.mini.MiniFileMgr', twepq), ksr$4g['isLoadFile'] = function (k4$z) {
    return -0x1 != ksr$4g['_fileTypeArr']['indexOf'](k4$z);
  }, ksr$4g['getFileInfo'] = function (wqt2p) {
    return wqt2p = wqt2p['split']('?')[0x0], wqt2p = ksr$4g['filesListObj'][wqt2p], null == wqt2p ? null : wqt2p;
  }, ksr$4g['onFileUpdate'] = function (jrg, nuh) {
    var vcmyi = jrg['split']('/');jrg = vcmyi[vcmyi['length'] - 0x1], vcmyi = ksr$4g['getFileInfo'](nuh), null == vcmyi ? ksr$4g['onSaveFile'](nuh, jrg) : vcmyi['readyUrl'] != nuh && ksr$4g['remove'](jrg, nuh);
  }, ksr$4g['exits'] = function (s_0nud, cmvya) {
    s_0nud = ksr$4g['getFileNativePath'](s_0nud), ksr$4g['fs']['getFileInfo']({ 'filePath': s_0nud, 'success': function (mtiva) {
        null != cmvya && cmvya['runWith']([0x0, mtiva]);
      }, 'fail': function (xrg3z) {
        null != cmvya && cmvya['runWith']([0x1, xrg3z]);
      } });
  }, ksr$4g['read'] = function (ioy6c, o69b81, e2wph5, d_$kus) {
    void 0x0 === o69b81 && (o69b81 = 'ascill'), ioy6c = '' != (d_$kus = void 0x0 === d_$kus ? '' : d_$kus) ? ksr$4g['getFileNativePath'](ioy6c) : ioy6c, ksr$4g['fs']['readFile']({ 'filePath': ioy6c, 'encoding': o69b81, 'success': function (vitaym) {
        null != e2wph5 && e2wph5['runWith']([0x0, vitaym]);
      }, 'fail': function (p2wetq) {
        p2wetq && '' != d_$kus ? ksr$4g['down'](d_$kus, o69b81, e2wph5, d_$kus) : null != e2wph5 && e2wph5['runWith']([0x1]);
      } });
  }, ksr$4g['readNativeFile'] = function ($k_dsu, vtpme) {
    ksr$4g['fs']['readFile']({ 'filePath': $k_dsu, 'encoding': '', 'success': function (tiaqvm) {
        null != vtpme && vtpme['runWith']([0x0]);
      }, 'fail': function (f9b876) {
        null != vtpme && vtpme['runWith']([0x1]);
      } });
  }, ksr$4g['down'] = function (xzr4jg, e2pvqt, amyvt, p2eqw5) {
    void 0x0 === e2pvqt && (e2pvqt = 'ascill'), void 0x0 === p2eqw5 && (p2eqw5 = '');var _4skd$ = ksr$4g['getFileNativePath'](p2eqw5);ksr$4g['wxdown']({ 'url': xzr4jg, 'filePath': _4skd$, 'success': function (h502e) {
        0xc8 === h502e['statusCode'] && ksr$4g['readFile'](h502e['filePath'], e2pvqt, amyvt, p2eqw5);
      }, 'fail': function (k_$us) {
        null != amyvt && amyvt['runWith']([0x1, k_$us]);
      } })['onProgressUpdate'](function (s$dk4r) {
      null != amyvt && amyvt['runWith']([0x2, s$dk4r['progress']]);
    });
  }, ksr$4g['readFile'] = function (_uhnd, dus$, yiatvm, w52eph) {
    void 0x0 === w52eph && (w52eph = ''), ksr$4g['fs']['readFile']({ 'filePath': _uhnd, 'encoding': dus$ = void 0x0 === dus$ ? 'ascill' : dus$, 'success': function (uds_nk) {
        -0x1 == _uhnd['indexOf']('http://') && -0x1 == _uhnd['indexOf']('https://') || ksr$4g['onFileUpdate'](_uhnd, w52eph), null != yiatvm && yiatvm['runWith']([0x0, uds_nk]);
      }, 'fail': function (amc1yi) {
        amc1yi && null != yiatvm && yiatvm['runWith']([0x1, amc1yi]);
      } });
  }, ksr$4g['downImg'] = function (io1yc, f896b7, vqte) {
    void 0x0 === vqte && (vqte = ''), ksr$4g['wxdown']({ 'url': io1yc, 'success': function (hwn05u) {
        0xc8 === hwn05u['statusCode'] && ksr$4g['copyFile'](hwn05u['tempFilePath'], vqte, f896b7);
      }, 'fail': function (r4gj$z) {
        null != f896b7 && f896b7['runWith']([0x1, r4gj$z]);
      } });
  }, ksr$4g['copyFile'] = function ($ds4kr, ep5qw2, q2pew) {
    var u5hw0n = $ds4kr['split']('/'),
        _$duks = u5hw0n[u5hw0n['length'] - 0x1];ep5qw2['split']('?')[0x0];var aym1ci = ksr$4g['getFileInfo'](ep5qw2);u5hw0n = ksr$4g['getFileNativePath'](_$duks), ksr$4g['fs']['copyFile']({ 'srcPath': $ds4kr, 'destPath': u5hw0n, 'success': function ($4dk) {
        aym1ci ? aym1ci['readyUrl'] != ep5qw2 && ksr$4g['remove'](_$duks, ep5qw2, q2pew) : (ksr$4g['onSaveFile'](ep5qw2, _$duks), null != q2pew && q2pew['runWith']([0x0]));
      }, 'fail': function (_$sukd) {
        null != q2pew && q2pew['runWith']([0x1, _$sukd]);
      } });
  }, ksr$4g['getFileNativePath'] = function (ivqm) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ivqm;
  }, ksr$4g['remove'] = function (h0ud_, tqapmv, krs4d) {
    void 0x0 === tqapmv && (tqapmv = '');var zk$r4 = ksr$4g['getFileInfo'](tqapmv),
        $j4z = ksr$4g['getFileNativePath'](zk$r4['md5']);u05nwh['loader']['clearRes'](zk$r4['readyUrl']), ksr$4g['fs']['unlink']({ 'filePath': $j4z, 'success': function (jzr4g) {
        '' != tqapmv && ksr$4g['onSaveFile'](tqapmv, h0ud_), null != krs4d && krs4d['runWith']([0x0]);
      }, 'fail': function (emvp) {} });
  }, ksr$4g['onSaveFile'] = function (kdrs$, ayivcm) {
    var sdu_k = kdrs$['split']('?')[0x0];ksr$4g['filesListObj'][sdu_k] = { 'md5': ayivcm, 'readyUrl': kdrs$ }, ksr$4g['fs']['writeFile']({ 'filePath': ksr$4g['fileNativeDir'] + '/' + ksr$4g['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ksr$4g['filesListObj']), 'success': function (c1oyia) {
        console['log']('写入测试测试成功：', c1oyia);
      }, 'fail': function (e2qvt) {
        console['log']('写入测试测试失败：', e2qvt);
      } });
  }, ksr$4g['existDir'] = function (pqma, wp25eq) {
    ksr$4g['fs']['mkdir']({ 'dirPath': pqma, 'success': function (c186y) {
        null != wp25eq && wp25eq['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (imayvt) {
        -0x1 != imayvt['errMsg']['indexOf']('file already exists') ? ksr$4g['readSync'](ksr$4g['fileListName'], 'utf8', wp25eq) : null != wp25eq && wp25eq['runWith']([0x1, imayvt]);
      } });
  }, ksr$4g['readSync'] = function (amtyiv, c1m, m1yaci, grzxj) {
    void 0x0 === c1m && (c1m = 'ascill'), void 0x0 === grzxj && (grzxj = ''), amtyiv = ksr$4g['getFileNativePath'](amtyiv);var gk$rs;try {
      gk$rs = ksr$4g['fs']['readFileSync'](amtyiv), null != m1yaci && m1yaci['runWith']([0x0, { 'data': gk$rs }]);
    } catch (i1mc) {
      null != m1yaci && m1yaci['runWith']([0x1]);
    }
  }, ksr$4g['readCache'] = function () {}, ksr$4g['writeCache'] = function ($dks4r) {
    var qe52pw = readyUrl['split']('?')[0x0];ksr$4g['filesListObj'][qe52pw] = { 'md5': md5Name, 'readyUrl': readyUrl }, ksr$4g['fs']['writeFile']({ 'filePath': ksr$4g['fileNativeDir'] + '/' + ksr$4g['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ksr$4g['filesListObj']), 'success': function (ytiav) {}, 'fail': function (_u0ndh) {} });
  }, ksr$4g['setNativeFileDir'] = function (d_usk) {
    ksr$4g['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + d_usk;
  }, ksr$4g['filesListObj'] = {}, ksr$4g['fileNativeDir'] = null, ksr$4g['fileListName'] = 'layaairfiles.txt', ksr$4g['ziyuFileData'] = {}, k_$4ds(ksr$4g, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), ksr$4g);function ksr$4g() {
    ksr$4g['__super']['call'](this);
  }var zj4gxr = function () {
    function qempv() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, qempv['__super']['call'](this), this['_sound'] = qempv['_createSound']();
    }zg4r$j(qempv, 'laya.wx.mini.MiniSound', twepq);var pqta = qempv['prototype'];return pqta['load'] = function (s$_kdu) {
      var nudh_ = this,
          mviayt;function nuhw05() {
        if (null != qempv['_null']) nudh_['_sound']['onCanplay'](qempv['_null']), nudh_['_sound']['onError'](qempv['_null']);else try {
          nudh_['_sound']['onCanplay'](null), nudh_['_sound']['onError'](null), qempv['_null'] = null;
        } catch (qwp2e) {
          console['warn']('[wxmini] _clearSound:' + qwp2e), nudh_['_sound']['onCanplay'](q25pwe), nudh_['_sound']['onError'](q25pwe), qempv['_null'] = q25pwe;
        }
      }function q25pwe() {}s$_kdu = phwe2['formatURL'](s$_kdu), this['url'] = s$_kdu, qempv['_audioCache'][s$_kdu] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        nuhw05(), mviayt['loaded'] = !0x0, mviayt['event']('complete'), qempv['_audioCache'][mviayt['url']] = mviayt;
      }), this['_sound']['onError'](function (uk_$) {
        console['error']('errCode=' + uk_$['errCode'] + '  errMsg=' + uk_$['errMsg']), nuhw05(), mviayt['event']('error');
      }), this['_sound']['src'] = s$_kdu, mviayt = this);
    }, pqta['play'] = function (y6cio, $gzj4) {
      void 0x0 === y6cio && (y6cio = 0x0), void 0x0 === $gzj4 && ($gzj4 = 0x0), (gz4$j = this['url'] == dks$4r['_tMusic'] ? (qempv['_musicAudio'] || (qempv['_musicAudio'] = qempv['_createSound']()), qempv['_musicAudio']) : qempv['_createSound']())['src'] = this['url'];var gz4$j = new qvaim(gz4$j);return gz4$j['url'] = this['url'], gz4$j['loops'] = $gzj4, gz4$j['startTime'] = y6cio, gz4$j['play'](), dks$4r['addChannel'](gz4$j), gz4$j;
    }, pqta['dispose'] = function () {
      var n205w = qempv['_audioCache'][this['url']];n205w && (n205w['src'] = '', delete qempv['_audioCache'][this['url']]);
    }, gk$r(0x0, pqta, 'duration', function () {
      return this['_sound']['duration'];
    }), qempv['_createSound'] = function () {
      return qempv['_id']++, r$4zkg['window']['wx']['createInnerAudioContext']();
    }, qempv['_musicAudio'] = null, qempv['_id'] = 0x0, qempv['_audioCache'] = {}, qempv['_null'] = void 0x0, qempv;
  }(),
      qvaim = function () {
    function vemtp(f8b79) {
      this['_audio'] = null, this['_onEnd'] = null, vemtp['__super']['call'](this), this['_audio'] = f8b79, this['_onEnd'] = kn_us['bind'](this['__onEnd'], this), f8b79['onEnded'](this['_onEnd']);
    }zg4r$j(vemtp, 'laya.wx.mini.MiniSoundChannel', ioyc61);var bo79 = vemtp['prototype'];return bo79['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (u05nwh['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, bo79['__onNull'] = function () {}, bo79['play'] = function () {
      this['isStopped'] = !0x1, dks$4r['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, bo79['stop'] = function () {
      if (this['isStopped'] = !0x0, dks$4r['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != vemtp['_null']) this['_audio']['onEnded'](vemtp['_null']);else try {
          this['_audio']['onEnded'](null), vemtp['_null'] = null;
        } catch (zgxj3) {
          console['warn']('[wxmini] stop:' + zgxj3), this['_audio']['onEnded'](kn_us['bind'](this['__onNull'], this)), vemtp['_null'] = kn_us['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, bo79['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, bo79['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, dks$4r['addChannel'](this), this['_audio']['play']());
    }, gk$r(0x0, bo79, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), gk$r(0x0, bo79, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), gk$r(0x0, bo79, 'volume', function () {
      return 0x1;
    }, function (nh_5u) {}), vemtp['_null'] = void 0x0, vemtp;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (u50, e205h) {
  'use strict';

  for (var s$du_ in Object['defineProperty'](e205h, '__esModule', { 'value': !0x0 }), Laya) {
    var q2pet = Laya[s$du_];q2pet && q2pet['__isclass'] && (e205h[s$du_] = q2pet);
  }
});