var U = wx.$k;
!function (dzu2, e$384) {
  e$384['un'], e$384['uns'];var vf5n = e$384['static'],
      rkw607 = e$384['class'],
      h8br1 = e$384['getset'];e$384['__newvec'];var glayq = laya['utils']['Browser'],
      glyouq = (laya['events']['Event'], laya['events']['EventDispatcher']),
      pgl = laya['resource']['HTMLImage'],
      jic6w = laya['utils']['Handler'],
      m3n9f = laya['display']['Input'],
      rw7bsk = laya['net']['Loader'];laya['maths']['Matrix'];var pjqal = laya['renders']['Render'],
      fn93 = laya['utils']['RunDriver'];laya['media']['Sound'];var b1hs8r = laya['media']['SoundChannel'],
      ozyugq = laya['media']['SoundManager'],
      ud2zto = (laya['display']['Stage'], laya['net']['URL']),
      $f53 = laya['utils']['Utils'],
      e35n$ = (rkw607(yzutd, 'laya.wx.mini.MiniAdpter'), yzutd['getJson'] = function (d2zt_) {
    return JSON['parse'](d2zt_);
  }, yzutd['init'] = function (w06jk, pigqla) {
    void 0x0 === w06jk && (w06jk = !0x1), void 0x0 === pigqla && (pigqla = !0x1), yzutd['_inited'] || (yzutd['window'] = dzu2)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (yzutd['_inited'] = !0x0, yzutd['isZiYu'] = pigqla, yzutd['isPosMsgYu'] = w06jk, yzutd['EnvConfig'] = {}, yzutd['isZiYu'] || (iqalp['setNativeFileDir']('/layaairGame'), iqalp['existDir'](iqalp['fileNativeDir'], jic6w['create'](yzutd, yzutd['onMkdirCallBack']))), yzutd['window']['focus'] = function () {}, e$384['getUrlPath'] = function () {}, yzutd['window']['logtime'] = function (n35mf9) {}, yzutd['window']['alertTimeLog'] = function (n9f53$) {}, yzutd['window']['resetShareInfo'] = function () {}, yzutd['window']['CanvasRenderingContext2D'] = function () {}, yzutd['window']['CanvasRenderingContext2D']['prototype'] = yzutd['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yzutd['window']['document']['body']['appendChild'] = function () {}, yzutd['EnvConfig']['pixelRatioInt'] = 0x0, fn93['getPixelRatio'] = yzutd['pixelRatio'], yzutd['_preCreateElement'] = glayq['createElement'], glayq['createElement'] = yzutd['createElement'], fn93['createShaderCondition'] = yzutd['createShaderCondition'], $f53['parseXMLFromString'] = yzutd['parseXMLFromString'], m3n9f['_createInputElement'] = x348e['_createInputElement'], yzutd['EnvConfig']['load'] = rw7bsk['prototype']['load'], rw7bsk['prototype']['load'] = dytuz['prototype']['load'], yzutd['isZiYu'] && w06jk && wx['onMessage'](function ($8x3) {
      $8x3['isLoad'] && (iqalp['ziyuFileData'][$8x3['url']] = $8x3['data']);
    }));
  }, yzutd['onMkdirCallBack'] = function (e$345, ztyoug) {
    e$345 || (iqalp['filesListObj'] = JSON['parse'](ztyoug['data']));
  }, yzutd['pixelRatio'] = function () {
    if (!yzutd['EnvConfig']['pixelRatioInt']) try {
      var f5v9mn = wx['getSystemInfoSync']();return yzutd['EnvConfig']['pixelRatioInt'] = f5v9mn['pixelRatio'], f5v9mn['pixelRatio'];
    } catch (s1h48) {}return yzutd['EnvConfig']['pixelRatioInt'];
  }, yzutd['createElement'] = function (qoug) {
    var ouyl;if ('canvas' == qoug) return 0x1 == yzutd['idx'] ? yzutd['isZiYu'] ? (ouyl = sharedCanvas)['style'] = {} : ouyl = dzu2['canvas'] : ouyl = dzu2['wx']['createCanvas'](), yzutd['idx']++, ouyl;if ('textarea' == qoug || 'input' == qoug) return yzutd['onCreateInput'](qoug);if ('div' != qoug) return yzutd['_preCreateElement'](qoug);return qoug = yzutd['_preCreateElement'](qoug), (qoug['contains'] = function (zugoyq) {
      return null;
    }, qoug['removeChild'] = function (zdyuto) {}, qoug);
  }, yzutd['onCreateInput'] = function (zyutd) {
    return zyutd = yzutd['_preCreateElement'](zyutd), (zyutd['focus'] = x348e['wxinputFocus'], zyutd['blur'] = x348e['wxinputblur'], zyutd['style'] = {}, zyutd['value'] = 0x0, zyutd['parentElement'] = {}, zyutd['placeholder'] = {}, zyutd['type'] = {}, zyutd['setColor'] = function (jqailp) {}, zyutd['setType'] = function (k7r0w6) {}, zyutd['setFontFace'] = function (_d2zo) {}, zyutd['addEventListener'] = function (tug) {}, zyutd['contains'] = function (zuotd2) {
      return null;
    }, zyutd['removeChild'] = function (jcwk0) {}, zyutd);
  }, yzutd['createShaderCondition'] = function (udoyt) {
    var s1b7kr = this;return function () {
      return s1b7kr[udoyt['replace']('this.', '')];
    };
  }, yzutd['EnvConfig'] = null, yzutd['window'] = null, yzutd['_preCreateElement'] = null, yzutd['_inited'] = !0x1, yzutd['wxRequest'] = null, yzutd['systemInfo'] = null, yzutd['version'] = '0.0.1', yzutd['isZiYu'] = !0x1, yzutd['isPosMsgYu'] = !0x1, yzutd['parseXMLFromString'] = function (ouygql) {
    var dtz;ouygql = ouygql['replace'](/>\s+</g, '><');try {
      dtz = new dzu2['Parser']['DOMParser']()['parseFromString'](ouygql, 'text/xml');
    } catch (kr07) {
      throw '需要引入xml解析库文件';
    }return dtz;
  }, yzutd['idx'] = 0x1, yzutd);function yzutd() {}rkw607(cwk067, 'laya.wx.mini.MiniImage'), cwk067['prototype']['_loadImage'] = function ($eh4) {
    var pljiac = !0x1;-0x1 == $eh4['indexOf']('layaNativeDir/') && (pljiac = !0x0, $eh4 = ud2zto['formatURL']($eh4)), iqalp['getFileInfo']($eh4) ? cwk067['onCreateImage']($eh4, this, !pljiac) : -0x1 != $eh4['indexOf']('http://') || -0x1 != $eh4['indexOf']('https://') ? iqalp['downImg']($eh4, new jic6w(cwk067, cwk067['onDownImgCallBack'], [$eh4, this]), $eh4) : cwk067['onCreateImage']($eh4, this, !0x0);
  }, cwk067['onDownImgCallBack'] = function (ajcip0, odzty, e8x$4h) {
    e8x$4h ? odzty['onError'](null) : cwk067['onCreateImage'](ajcip0, odzty);
  }, cwk067['onCreateImage'] = function (aciplj, ja60ci, srbk) {
    var dzo2tu, uoyqg;function x81he() {
      uoyqg['onload'] = null, uoyqg['onerror'] = null, delete ja60ci['imgCache'][aciplj];
    }dzo2tu = (srbk = void 0x0 === srbk ? !0x1 : srbk) ? aciplj : (ypgql = iqalp['getFileInfo'](aciplj)['md5'], iqalp['getFileNativePath'](ypgql)), null == ja60ci['imgCache'] && (ja60ci['imgCache'] = {}), srbk = function () {
      x81he(), ja60ci['onLoaded'](uoyqg);
    };var ypgql = function () {
      x81he(), ja60ci['event']('error', 'Load image failed');
    };'nativeimage' == ja60ci['_type'] ? ((uoyqg = new glayq['window']['Image']())['crossOrigin'] = '', uoyqg['onload'] = srbk, uoyqg['onerror'] = ypgql, uoyqg['src'] = dzo2tu, ja60ci['imgCache'][aciplj] = uoyqg) : new pgl['create'](dzo2tu, { 'onload': srbk, 'onerror': ypgql, 'onCreate': function (en5$f) {
        uoyqg = en5$f, ja60ci['imgCache'][aciplj] = en5$f;
      } });
  };function cwk067() {}var x348e = (rkw607(gozuyq, 'laya.wx.mini.MiniInput'), gozuyq['_createInputElement'] = function () {
    m3n9f['_initInput'](m3n9f['area'] = glayq['createElement']('textarea')), m3n9f['_initInput'](m3n9f['input'] = glayq['createElement']('input')), m3n9f['inputContainer'] = glayq['createElement']('div'), m3n9f['inputContainer']['style']['position'] = 'absolute', m3n9f['inputContainer']['style']['zIndex'] = 0x186a0, glayq['container']['appendChild'](m3n9f['inputContainer']), m3n9f['inputContainer']['setPos'] = function (ac6i, goquly) {
      m3n9f['inputContainer']['style']['left'] = ac6i + 'px', m3n9f['inputContainer']['style']['top'] = goquly + 'px';
    }, e$384['stage']['on']('resize', null, gozuyq['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (cj6ia0) {
      dzu2['dispatchEvent'] && dzu2['dispatchEvent']('resize');
    }), ozyugq['_soundClass'] = guyqpl, ozyugq['_musicClass'] = guyqpl;
  }, gozuyq['_onStageResize'] = function () {
    e$384['stage']['_canvasTransform']['identity']()['scale'](glayq['width'] / pjqal['canvas']['width'] / fn93['getPixelRatio'](), glayq['height'] / pjqal['canvas']['height'] / fn93['getPixelRatio']());
  }, gozuyq['wxinputFocus'] = function (fx35e$) {
    var w6r7 = m3n9f['inputElement']['target'];w6r7 && !w6r7['editable'] || (e35n$['window']['wx']['offKeyboardConfirm'](), e35n$['window']['wx']['offKeyboardInput'](), e35n$['window']['wx']['showKeyboard']({ 'defaultValue': w6r7['text'], 'maxLength': w6r7['maxChars'], 'multiple': w6r7['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (exf$35) {}, 'fail': function (t2ozd_) {} }), e35n$['window']['wx']['onKeyboardConfirm'](function (zuygqo) {
      zuygqo = zuygqo ? zuygqo['value'] : '', (w6r7['text'] = zuygqo, w6r7['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), e35n$['window']['wx']['onKeyboardInput'](function (h71brs) {
      h71brs = h71brs ? h71brs['value'] : '', w6r7['multiline'] || -0x1 == h71brs['indexOf']('\x0a') ? (w6r7['text'] = h71brs, w6r7['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, gozuyq['inputEnter'] = function () {
    m3n9f['inputElement']['target']['focus'] = !0x1;
  }, gozuyq['wxinputblur'] = function () {
    gozuyq['hideKeyboard']();
  }, gozuyq['hideKeyboard'] = function () {
    e35n$['window']['wx']['offKeyboardConfirm'](), e35n$['window']['wx']['offKeyboardInput'](), e35n$['window']['wx']['hideKeyboard']({ 'success': function (k67) {
        console['log']('隐藏键盘');
      }, 'fail': function (pil) {
        console['log']('隐藏键盘出错:' + (pil ? pil['errMsg'] : ''));
      } });
  }, gozuyq);function gozuyq() {}var dytuz = function () {
    function bkw() {}rkw607(bkw, 'laya.wx.mini.MiniLoader');var x$83e = bkw['prototype'];return x$83e['load'] = function (gzoqu, gyqol, b7h1rs, f$9n, j0wc6k) {
      void 0x0 === b7h1rs && (b7h1rs = !0x0), void 0x0 === j0wc6k && (j0wc6k = !0x1);var qgouly = this;0x0 === (qgouly['_url'] = gzoqu)['indexOf']('data:image') ? qgouly['_type'] = gyqol = 'image' : qgouly['_type'] = gyqol = gyqol || qgouly['getTypeFromUrl'](gzoqu), qgouly['_cache'] = b7h1rs, qgouly['_data'] = null;var e438$x = 'ascii';-0x1 != gzoqu['indexOf']('.fnt') ? e438$x = 'utf8' : 'arraybuffer' == gyqol && (e438$x = '');var b8sh1 = $f53['getFileExtension'](gzoqu);if (-0x1 != bkw['_fileTypeArr']['indexOf'](b8sh1)) e35n$['EnvConfig']['load']['call'](this, gzoqu, gyqol, b7h1rs, f$9n, j0wc6k);else {
        if (iqalp['getFileInfo'](gzoqu)) e35n$['EnvConfig']['load']['call'](this, gzoqu, gyqol, b7h1rs, f$9n, j0wc6k);else {
          if (-0x1 != gzoqu['indexOf']('layaNativeDir/')) {
            if (e35n$['isZiYu']) {
              var apgqy = iqalp['ziyuFileData'][gzoqu];return void qgouly['onLoaded'](apgqy);
            }return cosnole['log']('read read'), void iqalp['read'](gzoqu, e438$x, new jic6w(bkw, bkw['onReadNativeCallBack'], [e438$x, gzoqu, gyqol, b7h1rs, f$9n, j0wc6k, qgouly]));
          }apgqy = '' == ud2zto['rootPath'] ? gzoqu : gzoqu['split'](ud2zto['rootPath'])[0x0], -0x1 != gzoqu['indexOf']('http://') || -0x1 != gzoqu['indexOf']('https://') ? e35n$['EnvConfig']['load']['call'](qgouly, gzoqu, gyqol, b7h1rs, f$9n, j0wc6k) : iqalp['readFile'](apgqy, e438$x, new jic6w(bkw, bkw['onReadNativeCallBack'], [e438$x, gzoqu, gyqol, b7h1rs, f$9n, j0wc6k, qgouly]), gzoqu);
        }
      }
    }, x$83e['resMgrLoad'] = function (quzog, alqjp, f593mn, lqig, rhs7, s841hb, zto2d_) {
      void 0x0 === f593mn && (f593mn = 0x0), void 0x0 === lqig && (lqig = !0x1), void 0x0 === rhs7 && (rhs7 = !0x1), void 0x0 === s841hb && (s841hb = 0x0), void 0x0 === zto2d_ && (zto2d_ = 0x3), -0x1 != quzog['indexOf']('mpack') && console['log']('=============resMgrLoad url:', quzog), e35n$['EnvConfig']['resMgrLoad'](quzog, (ljiapc, otguzy, b76wrk) => {
        bkw['prototype']['resMgrLoadCallBack'](ljiapc, otguzy, b76wrk, alqjp);
      }, f593mn, lqig, rhs7, s841hb, zto2d_);
    }, x$83e['resMgrLoadCallBack'] = function (gzoqy, h8r1bs, srb17h, aipqjl) {
      console['log']('buff:::', gzoqy, srb17h, iqalp['fileNativeDir'] + '///' + iqalp['fileListName']), aipqjl(gzoqy, h8r1bs, srb17h);
    }, x$83e['clearRes'] = function (e4x$h, rs1bh) {
      this['clearRes'](e4x$h, rs1bh = void 0x0 === rs1bh ? !0x1 : rs1bh), rs1bh = iqalp['getFileInfo'](e4x$h), !rs1bh || -0x1 == e4x$h['indexOf']('http://') && -0x1 == e4x$h['indexOf']('https://') || (rs1bh = rs1bh['md5'], rs1bh = iqalp['getFileNativePath'](rs1bh), iqalp['remove'](rs1bh));
    }, bkw['onReadNativeCallBack'] = function (ilpja, yqzug, f93m5, oyutdz, r7wkbs, j0ci6a, uzo2td, wkc607, fn$53e) {
      void 0x0 === oyutdz && (oyutdz = !0x0), void 0x0 === j0ci6a && (j0ci6a = !0x1), (wkc607 = void 0x0 === wkc607 ? 0x0 : wkc607) ? 0x1 == wkc607 && e35n$['EnvConfig']['load']['call'](uzo2td, yqzug, f93m5, oyutdz, r7wkbs, j0ci6a) : (fn$53e = 'json' == f93m5 || 'atlas' == f93m5 ? e35n$['getJson'](fn$53e['data']) : 'xml' == f93m5 ? $f53['parseXMLFromString'](fn$53e['data']) : fn$53e['data'], uzo2td['onLoaded'](fn$53e), !e35n$['isZiYu'] && e35n$['isPosMsgYu'] && 'arraybuffer' != f93m5 && wx['postMessage']({ 'url': yqzug, 'data': fn$53e, 'isLoad': !0x0 }));
    }, vf5n(bkw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), bkw;
  }(),
      iqalp = (rkw607(e148h, 'laya.wx.mini.MiniFileMgr', glyouq), e148h['isLoadFile'] = function (paqgyl) {
    return -0x1 != e148h['_fileTypeArr']['indexOf'](paqgyl);
  }, e148h['getFileInfo'] = function (bhs71r) {
    return bhs71r = bhs71r['split']('?')[0x0], bhs71r = e148h['filesListObj'][bhs71r], null == bhs71r ? null : bhs71r;
  }, e148h['onFileUpdate'] = function (o2utzd, n5e$f3) {
    var $8e34x = o2utzd['split']('/');o2utzd = $8e34x[$8e34x['length'] - 0x1], $8e34x = e148h['getFileInfo'](n5e$f3), null == $8e34x ? e148h['onSaveFile'](n5e$f3, o2utzd) : $8e34x['readyUrl'] != n5e$f3 && e148h['remove'](o2utzd, n5e$f3);
  }, e148h['exits'] = function (rsbwk7, _2otdz) {
    rsbwk7 = e148h['getFileNativePath'](rsbwk7), e148h['fs']['getFileInfo']({ 'filePath': rsbwk7, 'success': function (yqglup) {
        null != _2otdz && _2otdz['runWith']([0x0, yqglup]);
      }, 'fail': function (sbrh1) {
        null != _2otdz && _2otdz['runWith']([0x1, sbrh1]);
      } });
  }, e148h['read'] = function ($3xfe, c6ijw0, pqga, aj6ci0) {
    void 0x0 === c6ijw0 && (c6ijw0 = 'ascill'), $3xfe = '' != (aj6ci0 = void 0x0 === aj6ci0 ? '' : aj6ci0) ? e148h['getFileNativePath']($3xfe) : $3xfe, e148h['fs']['readFile']({ 'filePath': $3xfe, 'encoding': c6ijw0, 'success': function (lipaj) {
        null != pqga && pqga['runWith']([0x0, lipaj]);
      }, 'fail': function (lpgai) {
        lpgai && '' != aj6ci0 ? e148h['down'](aj6ci0, c6ijw0, pqga, aj6ci0) : null != pqga && pqga['runWith']([0x1]);
      } });
  }, e148h['readNativeFile'] = function (ljiap, $34xe) {
    e148h['fs']['readFile']({ 'filePath': ljiap, 'encoding': '', 'success': function (e38$x) {
        null != $34xe && $34xe['runWith']([0x0]);
      }, 'fail': function ($e5n) {
        null != $34xe && $34xe['runWith']([0x1]);
      } });
  }, e148h['down'] = function (jiwc60, ytou, zuogyq, wrk67) {
    void 0x0 === ytou && (ytou = 'ascill'), void 0x0 === wrk67 && (wrk67 = '');var lapgqy = e148h['getFileNativePath'](wrk67);e148h['wxdown']({ 'url': jiwc60, 'filePath': lapgqy, 'success': function (gquol) {
        0xc8 === gquol['statusCode'] && e148h['readFile'](gquol['filePath'], ytou, zuogyq, wrk67);
      }, 'fail': function (i6cja) {
        null != zuogyq && zuogyq['runWith']([0x1, i6cja]);
      } })['onProgressUpdate'](function (zydtou) {
      null != zuogyq && zuogyq['runWith']([0x2, zydtou['progress']]);
    });
  }, e148h['readFile'] = function ($xe3f5, jai6c, b67rk, c60jw) {
    void 0x0 === c60jw && (c60jw = ''), e148h['fs']['readFile']({ 'filePath': $xe3f5, 'encoding': jai6c = void 0x0 === jai6c ? 'ascill' : jai6c, 'success': function (hs1br) {
        -0x1 == $xe3f5['indexOf']('http://') && -0x1 == $xe3f5['indexOf']('https://') || e148h['onFileUpdate']($xe3f5, c60jw), null != b67rk && b67rk['runWith']([0x0, hs1br]);
      }, 'fail': function (ca06ij) {
        ca06ij && null != b67rk && b67rk['runWith']([0x1, ca06ij]);
      } });
  }, e148h['downImg'] = function (pji0a, jwc0i6, f9$3) {
    void 0x0 === f9$3 && (f9$3 = ''), e148h['wxdown']({ 'url': pji0a, 'success': function (zudtyo) {
        0xc8 === zudtyo['statusCode'] && e148h['copyFile'](zudtyo['tempFilePath'], f9$3, jwc0i6);
      }, 'fail': function (luqogy) {
        null != jwc0i6 && jwc0i6['runWith']([0x1, luqogy]);
      } });
  }, e148h['copyFile'] = function (wjk6c0, pj0cia, bh7s1r) {
    var alp = wjk6c0['split']('/'),
        c6wij0 = alp[alp['length'] - 0x1];pj0cia['split']('?')[0x0];var vnf95m = e148h['getFileInfo'](pj0cia);alp = e148h['getFileNativePath'](c6wij0), e148h['fs']['copyFile']({ 'srcPath': wjk6c0, 'destPath': alp, 'success': function (i6ajc0) {
        vnf95m ? vnf95m['readyUrl'] != pj0cia && e148h['remove'](c6wij0, pj0cia, bh7s1r) : (e148h['onSaveFile'](pj0cia, c6wij0), null != bh7s1r && bh7s1r['runWith']([0x0]));
      }, 'fail': function (ozudty) {
        null != bh7s1r && bh7s1r['runWith']([0x1, ozudty]);
      } });
  }, e148h['getFileNativePath'] = function (pilgqa) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + pilgqa;
  }, e148h['remove'] = function (h7s, uqzo, pia0c) {
    void 0x0 === uqzo && (uqzo = '');var e814h = e148h['getFileInfo'](uqzo),
        xe48$ = e148h['getFileNativePath'](e814h['md5']);e$384['loader']['clearRes'](e814h['readyUrl']), e148h['fs']['unlink']({ 'filePath': xe48$, 'success': function (qlyguo) {
        '' != uqzo && e148h['onSaveFile'](uqzo, h7s), null != pia0c && pia0c['runWith']([0x0]);
      }, 'fail': function (tyzoud) {} });
  }, e148h['onSaveFile'] = function (b6rkw7, c0jap) {
    var ksrbw7 = b6rkw7['split']('?')[0x0];e148h['filesListObj'][ksrbw7] = { 'md5': c0jap, 'readyUrl': b6rkw7 }, e148h['fs']['writeFile']({ 'filePath': e148h['fileNativeDir'] + '/' + e148h['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](e148h['filesListObj']), 'success': function (uqzoyg) {
        console['log']('写入测试测试成功：', uqzoyg);
      }, 'fail': function (plqia) {
        console['log']('写入测试测试失败：', plqia);
      } });
  }, e148h['existDir'] = function (lyuqgp, oguty) {
    e148h['fs']['mkdir']({ 'dirPath': lyuqgp, 'success': function (ugzoty) {
        null != oguty && oguty['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (oqlgy) {
        -0x1 != oqlgy['errMsg']['indexOf']('file already exists') ? e148h['readSync'](e148h['fileListName'], 'utf8', oguty) : null != oguty && oguty['runWith']([0x1, oqlgy]);
      } });
  }, e148h['readSync'] = function (nmf95, udoz, $843xe, srhb71) {
    void 0x0 === udoz && (udoz = 'ascill'), void 0x0 === srhb71 && (srhb71 = ''), nmf95 = e148h['getFileNativePath'](nmf95);var algpqy;try {
      algpqy = e148h['fs']['readFileSync'](nmf95), null != $843xe && $843xe['runWith']([0x0, { 'data': algpqy }]);
    } catch (bkrs1) {
      null != $843xe && $843xe['runWith']([0x1]);
    }
  }, e148h['readCache'] = function () {}, e148h['writeCache'] = function (pqyu) {
    var o_2ztd = readyUrl['split']('?')[0x0];e148h['filesListObj'][o_2ztd] = { 'md5': md5Name, 'readyUrl': readyUrl }, e148h['fs']['writeFile']({ 'filePath': e148h['fileNativeDir'] + '/' + e148h['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](e148h['filesListObj']), 'success': function (x53e4) {}, 'fail': function (jpqia) {} });
  }, e148h['setNativeFileDir'] = function (rbk17) {
    e148h['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rbk17;
  }, e148h['filesListObj'] = {}, e148h['fileNativeDir'] = null, e148h['fileListName'] = 'layaairfiles.txt', e148h['ziyuFileData'] = {}, vf5n(e148h, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), e148h);function e148h() {
    e148h['__super']['call'](this);
  }var guyqpl = function () {
    function cwk() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, cwk['__super']['call'](this), this['_sound'] = cwk['_createSound']();
    }rkw607(cwk, 'laya.wx.mini.MiniSound', glyouq);var x5f3$ = cwk['prototype'];return x5f3$['load'] = function (br8h) {
      var gtzouy = this,
          ljqpia;function rw70() {
        if (null != cwk['_null']) gtzouy['_sound']['onCanplay'](cwk['_null']), gtzouy['_sound']['onError'](cwk['_null']);else try {
          gtzouy['_sound']['onCanplay'](null), gtzouy['_sound']['onError'](null), cwk['_null'] = null;
        } catch (kbr1) {
          console['warn']('[wxmini] _clearSound:' + kbr1), gtzouy['_sound']['onCanplay'](e8h), gtzouy['_sound']['onError'](e8h), cwk['_null'] = e8h;
        }
      }function e8h() {}br8h = ud2zto['formatURL'](br8h), this['url'] = br8h, cwk['_audioCache'][br8h] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        rw70(), ljqpia['loaded'] = !0x0, ljqpia['event']('complete'), cwk['_audioCache'][ljqpia['url']] = ljqpia;
      }), this['_sound']['onError'](function (gqyuol) {
        console['error']('errCode=' + gqyuol['errCode'] + '  errMsg=' + gqyuol['errMsg']), rw70(), ljqpia['event']('error');
      }), this['_sound']['src'] = br8h, ljqpia = this);
    }, x5f3$['play'] = function (bwr7, $5x4e) {
      void 0x0 === bwr7 && (bwr7 = 0x0), void 0x0 === $5x4e && ($5x4e = 0x0), (vm9f = this['url'] == ozyugq['_tMusic'] ? (cwk['_musicAudio'] || (cwk['_musicAudio'] = cwk['_createSound']()), cwk['_musicAudio']) : cwk['_createSound']())['src'] = this['url'];var vm9f = new e$x5f3(vm9f);return vm9f['url'] = this['url'], vm9f['loops'] = $5x4e, vm9f['startTime'] = bwr7, vm9f['play'](), ozyugq['addChannel'](vm9f), vm9f;
    }, x5f3$['dispose'] = function () {
      var jilpq = cwk['_audioCache'][this['url']];jilpq && (jilpq['src'] = '', delete cwk['_audioCache'][this['url']]);
    }, h8br1(0x0, x5f3$, 'duration', function () {
      return this['_sound']['duration'];
    }), cwk['_createSound'] = function () {
      return cwk['_id']++, e35n$['window']['wx']['createInnerAudioContext']();
    }, cwk['_musicAudio'] = null, cwk['_id'] = 0x0, cwk['_audioCache'] = {}, cwk['_null'] = void 0x0, cwk;
  }(),
      e$x5f3 = function () {
    function x3fe$5(f53$) {
      this['_audio'] = null, this['_onEnd'] = null, x3fe$5['__super']['call'](this), this['_audio'] = f53$, this['_onEnd'] = $f53['bind'](this['__onEnd'], this), f53$['onEnded'](this['_onEnd']);
    }rkw607(x3fe$5, 'laya.wx.mini.MiniSoundChannel', b1hs8r);var lcapij = x3fe$5['prototype'];return lcapij['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (e$384['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, lcapij['__onNull'] = function () {}, lcapij['play'] = function () {
      this['isStopped'] = !0x1, ozyugq['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, lcapij['stop'] = function () {
      if (this['isStopped'] = !0x0, ozyugq['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != x3fe$5['_null']) this['_audio']['onEnded'](x3fe$5['_null']);else try {
          this['_audio']['onEnded'](null), x3fe$5['_null'] = null;
        } catch (nv5mf) {
          console['warn']('[wxmini] stop:' + nv5mf), this['_audio']['onEnded']($f53['bind'](this['__onNull'], this)), x3fe$5['_null'] = $f53['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, lcapij['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, lcapij['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, ozyugq['addChannel'](this), this['_audio']['play']());
    }, h8br1(0x0, lcapij, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), h8br1(0x0, lcapij, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), h8br1(0x0, lcapij, 'volume', function () {
      return 0x1;
    }, function (x8e$h) {}), x3fe$5['_null'] = void 0x0, x3fe$5;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (japic0, yqag) {
  'use strict';

  for (var iac0j6 in Object['defineProperty'](yqag, '__esModule', { 'value': !0x0 }), Laya) {
    var yqlgou = Laya[iac0j6];yqlgou && yqlgou['__isclass'] && (yqag[iac0j6] = yqlgou);
  }
});