var p = wx.$h;
!function (j91npo, xv542b) {
  xv542b['un'], xv542b['uns'];var hcwe8t = xv542b['static'],
      woe8h = xv542b['class'],
      ia4fcx = xv542b['getset'];xv542b['__newvec'];var e81h9 = laya['utils']['Browser'],
      y_ql3 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      taiew = laya['resource']['HTMLImage'],
      o91jp8 = laya['utils']['Handler'],
      wia4fc = laya['display']['Input'],
      qy_ = laya['net']['Loader'];laya['maths']['Matrix'];var tho1e8 = laya['renders']['Render'],
      wteo8h = laya['utils']['RunDriver'];laya['media']['Sound'];var zlkrdm = laya['media']['SoundChannel'],
      tc8hwe = laya['media']['SoundManager'],
      x42f5 = (laya['display']['Stage'], laya['net']['URL']),
      rzlmd = laya['utils']['Utils'],
      ceit = (woe8h(h18teo, 'laya.wx.mini.MiniAdpter'), h18teo['getJson'] = function (pn16j9) {
    return JSON['parse'](pn16j9);
  }, h18teo['init'] = function (lmq_, pn96j$) {
    void 0x0 === lmq_ && (lmq_ = !0x1), void 0x0 === pn96j$ && (pn96j$ = !0x1), h18teo['_inited'] || (h18teo['window'] = j91npo)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (h18teo['_inited'] = !0x0, h18teo['isZiYu'] = pn96j$, h18teo['isPosMsgYu'] = lmq_, h18teo['EnvConfig'] = {}, h18teo['isZiYu'] || (atfic['setNativeFileDir']('/layaairGame'), atfic['existDir'](atfic['fileNativeDir'], o91jp8['create'](h18teo, h18teo['onMkdirCallBack']))), h18teo['window']['focus'] = function () {}, xv542b['getUrlPath'] = function () {}, h18teo['window']['logtime'] = function (y52xb) {}, h18teo['window']['alertTimeLog'] = function (ceiht) {}, h18teo['window']['resetShareInfo'] = function () {}, h18teo['window']['CanvasRenderingContext2D'] = function () {}, h18teo['window']['CanvasRenderingContext2D']['prototype'] = h18teo['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], h18teo['window']['document']['body']['appendChild'] = function () {}, h18teo['EnvConfig']['pixelRatioInt'] = 0x0, wteo8h['getPixelRatio'] = h18teo['pixelRatio'], h18teo['_preCreateElement'] = e81h9['createElement'], e81h9['createElement'] = h18teo['createElement'], wteo8h['createShaderCondition'] = h18teo['createShaderCondition'], rzlmd['parseXMLFromString'] = h18teo['parseXMLFromString'], wia4fc['_createInputElement'] = b52vqy['_createInputElement'], h18teo['EnvConfig']['load'] = qy_['prototype']['load'], qy_['prototype']['load'] = cawi['prototype']['load'], h18teo['isZiYu'] && lmq_ && wx['onMessage'](function (tche) {
      tche['isLoad'] && (atfic['ziyuFileData'][tche['url']] = tche['data']);
    }));
  }, h18teo['onMkdirCallBack'] = function (waiec, o1h98e) {
    waiec || (atfic['filesListObj'] = JSON['parse'](o1h98e['data']));
  }, h18teo['pixelRatio'] = function () {
    if (!h18teo['EnvConfig']['pixelRatioInt']) try {
      var v5b2 = wx['getSystemInfoSync']();return h18teo['EnvConfig']['pixelRatioInt'] = v5b2['pixelRatio'], v5b2['pixelRatio'];
    } catch (tciwhe) {}return h18teo['EnvConfig']['pixelRatioInt'];
  }, h18teo['createElement'] = function (n1op) {
    var lmr3d;if ('canvas' == n1op) return 0x1 == h18teo['idx'] ? h18teo['isZiYu'] ? (lmr3d = sharedCanvas)['style'] = {} : lmr3d = j91npo['canvas'] : lmr3d = j91npo['wx']['createCanvas'](), h18teo['idx']++, lmr3d;if ('textarea' == n1op || 'input' == n1op) return h18teo['onCreateInput'](n1op);if ('div' != n1op) return h18teo['_preCreateElement'](n1op);return n1op = h18teo['_preCreateElement'](n1op), (n1op['contains'] = function (jn91po) {
      return null;
    }, n1op['removeChild'] = function (ifx2) {}, n1op);
  }, h18teo['onCreateInput'] = function (l3zmr) {
    return l3zmr = h18teo['_preCreateElement'](l3zmr), (l3zmr['focus'] = b52vqy['wxinputFocus'], l3zmr['blur'] = b52vqy['wxinputblur'], l3zmr['style'] = {}, l3zmr['value'] = 0x0, l3zmr['parentElement'] = {}, l3zmr['placeholder'] = {}, l3zmr['type'] = {}, l3zmr['setColor'] = function (mrzld) {}, l3zmr['setType'] = function (vybqs5) {}, l3zmr['setFontFace'] = function (n$60pj) {}, l3zmr['addEventListener'] = function (sq5_y) {}, l3zmr['contains'] = function (sb3_qy) {
      return null;
    }, l3zmr['removeChild'] = function (tfwic) {}, l3zmr);
  }, h18teo['createShaderCondition'] = function (_rdlm3) {
    var actiw = this;return function () {
      return actiw[_rdlm3['replace']('this.', '')];
    };
  }, h18teo['EnvConfig'] = null, h18teo['window'] = null, h18teo['_preCreateElement'] = null, h18teo['_inited'] = !0x1, h18teo['wxRequest'] = null, h18teo['systemInfo'] = null, h18teo['version'] = '0.0.1', h18teo['isZiYu'] = !0x1, h18teo['isPosMsgYu'] = !0x1, h18teo['parseXMLFromString'] = function (cw8h) {
    var r3mdl_;cw8h = cw8h['replace'](/>\s+</g, '><');try {
      r3mdl_ = new j91npo['Parser']['DOMParser']()['parseFromString'](cw8h, 'text/xml');
    } catch (rzlmk) {
      throw '需要引入xml解析库文件';
    }return r3mdl_;
  }, h18teo['idx'] = 0x1, h18teo);function h18teo() {}woe8h(ieth, 'laya.wx.mini.MiniImage'), ieth['prototype']['_loadImage'] = function (vsb5yq) {
    var qs = !0x1;-0x1 == vsb5yq['indexOf']('layaNativeDir/') && (qs = !0x0, vsb5yq = x42f5['formatURL'](vsb5yq)), atfic['getFileInfo'](vsb5yq) ? ieth['onCreateImage'](vsb5yq, this, !qs) : -0x1 != vsb5yq['indexOf']('http://') || -0x1 != vsb5yq['indexOf']('https://') ? atfic['downImg'](vsb5yq, new o91jp8(ieth, ieth['onDownImgCallBack'], [vsb5yq, this]), vsb5yq) : ieth['onCreateImage'](vsb5yq, this, !0x0);
  }, ieth['onDownImgCallBack'] = function (x42bv5, _ls3rm, yq5v2b) {
    yq5v2b ? _ls3rm['onError'](null) : ieth['onCreateImage'](x42bv5, _ls3rm);
  }, ieth['onCreateImage'] = function (jp1o, v25yb, _yql) {
    var acweit, eihcwt;function xa2v4f() {
      eihcwt['onload'] = null, eihcwt['onerror'] = null, delete v25yb['imgCache'][jp1o];
    }acweit = (_yql = void 0x0 === _yql ? !0x1 : _yql) ? jp1o : (bvsq5 = atfic['getFileInfo'](jp1o)['md5'], atfic['getFileNativePath'](bvsq5)), null == v25yb['imgCache'] && (v25yb['imgCache'] = {}), _yql = function () {
      xa2v4f(), v25yb['onLoaded'](eihcwt);
    };var bvsq5 = function () {
      xa2v4f(), v25yb['event']('error', 'Load image failed');
    };'nativeimage' == v25yb['_type'] ? ((eihcwt = new e81h9['window']['Image']())['crossOrigin'] = '', eihcwt['onload'] = _yql, eihcwt['onerror'] = bvsq5, eihcwt['src'] = acweit, v25yb['imgCache'][jp1o] = eihcwt) : new taiew['create'](acweit, { 'onload': _yql, 'onerror': bvsq5, 'onCreate': function (drml3_) {
        eihcwt = drml3_, v25yb['imgCache'][jp1o] = drml3_;
      } });
  };function ieth() {}var b52vqy = (woe8h(_3qlsm, 'laya.wx.mini.MiniInput'), _3qlsm['_createInputElement'] = function () {
    wia4fc['_initInput'](wia4fc['area'] = e81h9['createElement']('textarea')), wia4fc['_initInput'](wia4fc['input'] = e81h9['createElement']('input')), wia4fc['inputContainer'] = e81h9['createElement']('div'), wia4fc['inputContainer']['style']['position'] = 'absolute', wia4fc['inputContainer']['style']['zIndex'] = 0x186a0, e81h9['container']['appendChild'](wia4fc['inputContainer']), wia4fc['inputContainer']['setPos'] = function (c4aiw, j60pn$) {
      wia4fc['inputContainer']['style']['left'] = c4aiw + 'px', wia4fc['inputContainer']['style']['top'] = j60pn$ + 'px';
    }, xv542b['stage']['on']('resize', null, _3qlsm['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zmrldk) {
      j91npo['dispatchEvent'] && j91npo['dispatchEvent']('resize');
    }), tc8hwe['_soundClass'] = b5sv, tc8hwe['_musicClass'] = b5sv;
  }, _3qlsm['_onStageResize'] = function () {
    xv542b['stage']['_canvasTransform']['identity']()['scale'](e81h9['width'] / tho1e8['canvas']['width'] / wteo8h['getPixelRatio'](), e81h9['height'] / tho1e8['canvas']['height'] / wteo8h['getPixelRatio']());
  }, _3qlsm['wxinputFocus'] = function (vyqsb) {
    var o8j9h1 = wia4fc['inputElement']['target'];o8j9h1 && !o8j9h1['editable'] || (ceit['window']['wx']['offKeyboardConfirm'](), ceit['window']['wx']['offKeyboardInput'](), ceit['window']['wx']['showKeyboard']({ 'defaultValue': o8j9h1['text'], 'maxLength': o8j9h1['maxChars'], 'multiple': o8j9h1['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (sv5qby) {}, 'fail': function (to8h) {} }), ceit['window']['wx']['onKeyboardConfirm'](function (y_b5q) {
      y_b5q = y_b5q ? y_b5q['value'] : '', (o8j9h1['text'] = y_b5q, o8j9h1['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), ceit['window']['wx']['onKeyboardInput'](function (n0g6$7) {
      n0g6$7 = n0g6$7 ? n0g6$7['value'] : '', o8j9h1['multiline'] || -0x1 == n0g6$7['indexOf']('\x0a') ? (o8j9h1['text'] = n0g6$7, o8j9h1['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, _3qlsm['inputEnter'] = function () {
    wia4fc['inputElement']['target']['focus'] = !0x1;
  }, _3qlsm['wxinputblur'] = function () {
    _3qlsm['hideKeyboard']();
  }, _3qlsm['hideKeyboard'] = function () {
    ceit['window']['wx']['offKeyboardConfirm'](), ceit['window']['wx']['offKeyboardInput'](), ceit['window']['wx']['hideKeyboard']({ 'success': function (zdlkmr) {
        console['log']('隐藏键盘');
      }, 'fail': function (ys_l3q) {
        console['log']('隐藏键盘出错:' + (ys_l3q ? ys_l3q['errMsg'] : ''));
      } });
  }, _3qlsm);function _3qlsm() {}var cawi = function () {
    function y25bxv() {}woe8h(y25bxv, 'laya.wx.mini.MiniLoader');var oeh819 = y25bxv['prototype'];return oeh819['load'] = function (iax4cf, hctwei, g7n$60, rdmkzl, n6j1p) {
      void 0x0 === g7n$60 && (g7n$60 = !0x0), void 0x0 === n6j1p && (n6j1p = !0x1);var npo9j = this;0x0 === (npo9j['_url'] = iax4cf)['indexOf']('data:image') ? npo9j['_type'] = hctwei = 'image' : npo9j['_type'] = hctwei = hctwei || npo9j['getTypeFromUrl'](iax4cf), npo9j['_cache'] = g7n$60, npo9j['_data'] = null;var _ybs5q = 'ascii';-0x1 != iax4cf['indexOf']('.fnt') ? _ybs5q = 'utf8' : 'arraybuffer' == hctwei && (_ybs5q = '');var o81jp9 = rzlmd['getFileExtension'](iax4cf);if (-0x1 != y25bxv['_fileTypeArr']['indexOf'](o81jp9)) ceit['EnvConfig']['load']['call'](this, iax4cf, hctwei, g7n$60, rdmkzl, n6j1p);else {
        if (atfic['getFileInfo'](iax4cf)) ceit['EnvConfig']['load']['call'](this, iax4cf, hctwei, g7n$60, rdmkzl, n6j1p);else {
          if (-0x1 != iax4cf['indexOf']('layaNativeDir/')) {
            if (ceit['isZiYu']) {
              var $ng0p = atfic['ziyuFileData'][iax4cf];return void npo9j['onLoaded']($ng0p);
            }return cosnole['log']('read read'), void atfic['read'](iax4cf, _ybs5q, new o91jp8(y25bxv, y25bxv['onReadNativeCallBack'], [_ybs5q, iax4cf, hctwei, g7n$60, rdmkzl, n6j1p, npo9j]));
          }$ng0p = '' == x42f5['rootPath'] ? iax4cf : iax4cf['split'](x42f5['rootPath'])[0x0], -0x1 != iax4cf['indexOf']('http://') || -0x1 != iax4cf['indexOf']('https://') ? ceit['EnvConfig']['load']['call'](npo9j, iax4cf, hctwei, g7n$60, rdmkzl, n6j1p) : atfic['readFile']($ng0p, _ybs5q, new o91jp8(y25bxv, y25bxv['onReadNativeCallBack'], [_ybs5q, iax4cf, hctwei, g7n$60, rdmkzl, n6j1p, npo9j]), iax4cf);
        }
      }
    }, oeh819['resMgrLoad'] = function (_q3lsm, j6$0n, yqsb_5, ctifwa, h1jo89, bys3q, heic) {
      void 0x0 === yqsb_5 && (yqsb_5 = 0x0), void 0x0 === ctifwa && (ctifwa = !0x1), void 0x0 === h1jo89 && (h1jo89 = !0x1), void 0x0 === bys3q && (bys3q = 0x0), void 0x0 === heic && (heic = 0x3), -0x1 != _q3lsm['indexOf']('mpack') && console['log']('=============resMgrLoad url:', _q3lsm), ceit['EnvConfig']['resMgrLoad'](_q3lsm, (pj169, d3rmzl, oj98h) => {
        y25bxv['prototype']['resMgrLoadCallBack'](pj169, d3rmzl, oj98h, j6$0n);
      }, yqsb_5, ctifwa, h1jo89, bys3q, heic);
    }, oeh819['resMgrLoadCallBack'] = function (hewtic, o1j89, fix42a, rd3lm_) {
      console['log']('buff:::', hewtic, fix42a, atfic['fileNativeDir'] + '///' + atfic['fileListName']), rd3lm_(hewtic, o1j89, fix42a);
    }, oeh819['clearRes'] = function (drlmk, _q5sb) {
      this['clearRes'](drlmk, _q5sb = void 0x0 === _q5sb ? !0x1 : _q5sb), _q5sb = atfic['getFileInfo'](drlmk), !_q5sb || -0x1 == drlmk['indexOf']('http://') && -0x1 == drlmk['indexOf']('https://') || (_q5sb = _q5sb['md5'], _q5sb = atfic['getFileNativePath'](_q5sb), atfic['remove'](_q5sb));
    }, y25bxv['onReadNativeCallBack'] = function (qyb5sv, if42ax, iatfw, e18h9o, b2, y2bqv5, g$06n, tcfiwa, w4aci) {
      void 0x0 === e18h9o && (e18h9o = !0x0), void 0x0 === y2bqv5 && (y2bqv5 = !0x1), (tcfiwa = void 0x0 === tcfiwa ? 0x0 : tcfiwa) ? 0x1 == tcfiwa && ceit['EnvConfig']['load']['call'](g$06n, if42ax, iatfw, e18h9o, b2, y2bqv5) : (w4aci = 'json' == iatfw || 'atlas' == iatfw ? ceit['getJson'](w4aci['data']) : 'xml' == iatfw ? rzlmd['parseXMLFromString'](w4aci['data']) : w4aci['data'], g$06n['onLoaded'](w4aci), !ceit['isZiYu'] && ceit['isPosMsgYu'] && 'arraybuffer' != iatfw && wx['postMessage']({ 'url': if42ax, 'data': w4aci, 'isLoad': !0x0 }));
    }, hcwe8t(y25bxv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), y25bxv;
  }(),
      atfic = (woe8h(gn$p60, 'laya.wx.mini.MiniFileMgr', y_ql3), gn$p60['isLoadFile'] = function (jpo81) {
    return -0x1 != gn$p60['_fileTypeArr']['indexOf'](jpo81);
  }, gn$p60['getFileInfo'] = function (p9$) {
    return p9$ = p9$['split']('?')[0x0], p9$ = gn$p60['filesListObj'][p9$], null == p9$ ? null : p9$;
  }, gn$p60['onFileUpdate'] = function (y52qvb, l3s_mr) {
    var j6p$0n = y52qvb['split']('/');y52qvb = j6p$0n[j6p$0n['length'] - 0x1], j6p$0n = gn$p60['getFileInfo'](l3s_mr), null == j6p$0n ? gn$p60['onSaveFile'](l3s_mr, y52qvb) : j6p$0n['readyUrl'] != l3s_mr && gn$p60['remove'](y52qvb, l3s_mr);
  }, gn$p60['exits'] = function (iwfc4a, sm_3) {
    iwfc4a = gn$p60['getFileNativePath'](iwfc4a), gn$p60['fs']['getFileInfo']({ 'filePath': iwfc4a, 'success': function (n60j$p) {
        null != sm_3 && sm_3['runWith']([0x0, n60j$p]);
      }, 'fail': function (tcwh8e) {
        null != sm_3 && sm_3['runWith']([0x1, tcwh8e]);
      } });
  }, gn$p60['read'] = function (g06$pn, _by5s, cwh, ecith) {
    void 0x0 === _by5s && (_by5s = 'ascill'), g06$pn = '' != (ecith = void 0x0 === ecith ? '' : ecith) ? gn$p60['getFileNativePath'](g06$pn) : g06$pn, gn$p60['fs']['readFile']({ 'filePath': g06$pn, 'encoding': _by5s, 'success': function (_lrs3m) {
        null != cwh && cwh['runWith']([0x0, _lrs3m]);
      }, 'fail': function (zrdkml) {
        zrdkml && '' != ecith ? gn$p60['down'](ecith, _by5s, cwh, ecith) : null != cwh && cwh['runWith']([0x1]);
      } });
  }, gn$p60['readNativeFile'] = function (ctehwi, rl3_s) {
    gn$p60['fs']['readFile']({ 'filePath': ctehwi, 'encoding': '', 'success': function (r3mldz) {
        null != rl3_s && rl3_s['runWith']([0x0]);
      }, 'fail': function (xvf42) {
        null != rl3_s && rl3_s['runWith']([0x1]);
      } });
  }, gn$p60['down'] = function (qy3_b, ls3mq_, wf4ac, np6$j) {
    void 0x0 === ls3mq_ && (ls3mq_ = 'ascill'), void 0x0 === np6$j && (np6$j = '');var ohw = gn$p60['getFileNativePath'](np6$j);gn$p60['wxdown']({ 'url': qy3_b, 'filePath': ohw, 'success': function (ic4waf) {
        0xc8 === ic4waf['statusCode'] && gn$p60['readFile'](ic4waf['filePath'], ls3mq_, wf4ac, np6$j);
      }, 'fail': function (f4v2x) {
        null != wf4ac && wf4ac['runWith']([0x1, f4v2x]);
      } })['onProgressUpdate'](function ($6npg0) {
      null != wf4ac && wf4ac['runWith']([0x2, $6npg0['progress']]);
    });
  }, gn$p60['readFile'] = function (faci4w, af4i, tcweh, mld_3) {
    void 0x0 === mld_3 && (mld_3 = ''), gn$p60['fs']['readFile']({ 'filePath': faci4w, 'encoding': af4i = void 0x0 === af4i ? 'ascill' : af4i, 'success': function (b5qv2) {
        -0x1 == faci4w['indexOf']('http://') && -0x1 == faci4w['indexOf']('https://') || gn$p60['onFileUpdate'](faci4w, mld_3), null != tcweh && tcweh['runWith']([0x0, b5qv2]);
      }, 'fail': function (w8ethc) {
        w8ethc && null != tcweh && tcweh['runWith']([0x1, w8ethc]);
      } });
  }, gn$p60['downImg'] = function (yvqs, _3mlr, vxb425) {
    void 0x0 === vxb425 && (vxb425 = ''), gn$p60['wxdown']({ 'url': yvqs, 'success': function (iaxf) {
        0xc8 === iaxf['statusCode'] && gn$p60['copyFile'](iaxf['tempFilePath'], vxb425, _3mlr);
      }, 'fail': function (v4x52f) {
        null != _3mlr && _3mlr['runWith']([0x1, v4x52f]);
      } });
  }, gn$p60['copyFile'] = function (fx24v, x4ca, joh819) {
    var xvb42 = fx24v['split']('/'),
        mrdl3 = xvb42[xvb42['length'] - 0x1];x4ca['split']('?')[0x0];var $njp = gn$p60['getFileInfo'](x4ca);xvb42 = gn$p60['getFileNativePath'](mrdl3), gn$p60['fs']['copyFile']({ 'srcPath': fx24v, 'destPath': xvb42, 'success': function (n9jo1) {
        $njp ? $njp['readyUrl'] != x4ca && gn$p60['remove'](mrdl3, x4ca, joh819) : (gn$p60['onSaveFile'](x4ca, mrdl3), null != joh819 && joh819['runWith']([0x0]));
      }, 'fail': function (syq3b) {
        null != joh819 && joh819['runWith']([0x1, syq3b]);
      } });
  }, gn$p60['getFileNativePath'] = function (s5vbq) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + s5vbq;
  }, gn$p60['remove'] = function (p198jo, rkmzd, v2qyb5) {
    void 0x0 === rkmzd && (rkmzd = '');var weth8o = gn$p60['getFileInfo'](rkmzd),
        aw4fci = gn$p60['getFileNativePath'](weth8o['md5']);xv542b['loader']['clearRes'](weth8o['readyUrl']), gn$p60['fs']['unlink']({ 'filePath': aw4fci, 'success': function (ojp9n1) {
        '' != rkmzd && gn$p60['onSaveFile'](rkmzd, p198jo), null != v2qyb5 && v2qyb5['runWith']([0x0]);
      }, 'fail': function (x4ifa2) {} });
  }, gn$p60['onSaveFile'] = function (p6n91j, qsvby5) {
    var j9po81 = p6n91j['split']('?')[0x0];gn$p60['filesListObj'][j9po81] = { 'md5': qsvby5, 'readyUrl': p6n91j }, gn$p60['fs']['writeFile']({ 'filePath': gn$p60['fileNativeDir'] + '/' + gn$p60['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gn$p60['filesListObj']), 'success': function (_q3slm) {
        console['log']('写入测试测试成功：', _q3slm);
      }, 'fail': function (op18j9) {
        console['log']('写入测试测试失败：', op18j9);
      } });
  }, gn$p60['existDir'] = function (ewhtci, j$60n) {
    gn$p60['fs']['mkdir']({ 'dirPath': ewhtci, 'success': function (yqb5s) {
        null != j$60n && j$60n['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (tifw) {
        -0x1 != tifw['errMsg']['indexOf']('file already exists') ? gn$p60['readSync'](gn$p60['fileListName'], 'utf8', j$60n) : null != j$60n && j$60n['runWith']([0x1, tifw]);
      } });
  }, gn$p60['readSync'] = function (bys5qv, etciwa, iacf4w, to) {
    void 0x0 === etciwa && (etciwa = 'ascill'), void 0x0 === to && (to = ''), bys5qv = gn$p60['getFileNativePath'](bys5qv);var awitfc;try {
      awitfc = gn$p60['fs']['readFileSync'](bys5qv), null != iacf4w && iacf4w['runWith']([0x0, { 'data': awitfc }]);
    } catch (y25vxb) {
      null != iacf4w && iacf4w['runWith']([0x1]);
    }
  }, gn$p60['readCache'] = function () {}, gn$p60['writeCache'] = function (yq2v5) {
    var v4f2x = readyUrl['split']('?')[0x0];gn$p60['filesListObj'][v4f2x] = { 'md5': md5Name, 'readyUrl': readyUrl }, gn$p60['fs']['writeFile']({ 'filePath': gn$p60['fileNativeDir'] + '/' + gn$p60['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gn$p60['filesListObj']), 'success': function (a2xi4) {}, 'fail': function (fxic) {} });
  }, gn$p60['setNativeFileDir'] = function (mlrd_3) {
    gn$p60['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + mlrd_3;
  }, gn$p60['filesListObj'] = {}, gn$p60['fileNativeDir'] = null, gn$p60['fileListName'] = 'layaairfiles.txt', gn$p60['ziyuFileData'] = {}, hcwe8t(gn$p60, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), gn$p60);function gn$p60() {
    gn$p60['__super']['call'](this);
  }var b5sv = function () {
    function x5f42v() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, x5f42v['__super']['call'](this), this['_sound'] = x5f42v['_createSound']();
    }woe8h(x5f42v, 'laya.wx.mini.MiniSound', y_ql3);var y_5q = x5f42v['prototype'];return y_5q['load'] = function (n0p$6j) {
      var c4wfai = this,
          $pjn9;function bvyqs() {
        if (null != x5f42v['_null']) c4wfai['_sound']['onCanplay'](x5f42v['_null']), c4wfai['_sound']['onError'](x5f42v['_null']);else try {
          c4wfai['_sound']['onCanplay'](null), c4wfai['_sound']['onError'](null), x5f42v['_null'] = null;
        } catch (acfw) {
          console['warn']('[wxmini] _clearSound:' + acfw), c4wfai['_sound']['onCanplay'](ldr3m), c4wfai['_sound']['onError'](ldr3m), x5f42v['_null'] = ldr3m;
        }
      }function ldr3m() {}n0p$6j = x42f5['formatURL'](n0p$6j), this['url'] = n0p$6j, x5f42v['_audioCache'][n0p$6j] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        bvyqs(), $pjn9['loaded'] = !0x0, $pjn9['event']('complete'), x5f42v['_audioCache'][$pjn9['url']] = $pjn9;
      }), this['_sound']['onError'](function (_s3qyl) {
        console['error']('errCode=' + _s3qyl['errCode'] + '  errMsg=' + _s3qyl['errMsg']), bvyqs(), $pjn9['event']('error');
      }), this['_sound']['src'] = n0p$6j, $pjn9 = this);
    }, y_5q['play'] = function (slmq3, whtoe8) {
      void 0x0 === slmq3 && (slmq3 = 0x0), void 0x0 === whtoe8 && (whtoe8 = 0x0), (p6$0j = this['url'] == tc8hwe['_tMusic'] ? (x5f42v['_musicAudio'] || (x5f42v['_musicAudio'] = x5f42v['_createSound']()), x5f42v['_musicAudio']) : x5f42v['_createSound']())['src'] = this['url'];var p6$0j = new vyx5b2(p6$0j);return p6$0j['url'] = this['url'], p6$0j['loops'] = whtoe8, p6$0j['startTime'] = slmq3, p6$0j['play'](), tc8hwe['addChannel'](p6$0j), p6$0j;
    }, y_5q['dispose'] = function () {
      var fcwa = x5f42v['_audioCache'][this['url']];fcwa && (fcwa['src'] = '', delete x5f42v['_audioCache'][this['url']]);
    }, ia4fcx(0x0, y_5q, 'duration', function () {
      return this['_sound']['duration'];
    }), x5f42v['_createSound'] = function () {
      return x5f42v['_id']++, ceit['window']['wx']['createInnerAudioContext']();
    }, x5f42v['_musicAudio'] = null, x5f42v['_id'] = 0x0, x5f42v['_audioCache'] = {}, x5f42v['_null'] = void 0x0, x5f42v;
  }(),
      vyx5b2 = function () {
    function slqy(fi4x2) {
      this['_audio'] = null, this['_onEnd'] = null, slqy['__super']['call'](this), this['_audio'] = fi4x2, this['_onEnd'] = rzlmd['bind'](this['__onEnd'], this), fi4x2['onEnded'](this['_onEnd']);
    }woe8h(slqy, 'laya.wx.mini.MiniSoundChannel', zlkrdm);var zdkr = slqy['prototype'];return zdkr['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (xv542b['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, zdkr['__onNull'] = function () {}, zdkr['play'] = function () {
      this['isStopped'] = !0x1, tc8hwe['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, zdkr['stop'] = function () {
      if (this['isStopped'] = !0x0, tc8hwe['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != slqy['_null']) this['_audio']['onEnded'](slqy['_null']);else try {
          this['_audio']['onEnded'](null), slqy['_null'] = null;
        } catch ($0jn6p) {
          console['warn']('[wxmini] stop:' + $0jn6p), this['_audio']['onEnded'](rzlmd['bind'](this['__onNull'], this)), slqy['_null'] = rzlmd['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, zdkr['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, zdkr['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, tc8hwe['addChannel'](this), this['_audio']['play']());
    }, ia4fcx(0x0, zdkr, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), ia4fcx(0x0, zdkr, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), ia4fcx(0x0, zdkr, 'volume', function () {
      return 0x1;
    }, function (ixca) {}), slqy['_null'] = void 0x0, slqy;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (yx5v, cxi) {
  'use strict';

  for (var njp$6 in Object['defineProperty'](cxi, '__esModule', { 'value': !0x0 }), Laya) {
    var byq25 = Laya[njp$6];byq25 && byq25['__isclass'] && (cxi[njp$6] = byq25);
  }
});