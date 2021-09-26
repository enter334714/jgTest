var p = wx.$h;
!function (ys80wq, b804z) {
  b804z['un'], b804z['uns'];var ztbgn = b804z['static'],
      nb0 = b804z['class'],
      d37i6 = b804z['getset'];b804z['__newvec'];var wmq8 = laya['utils']['Browser'],
      $v_g9 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      x3fd = laya['resource']['HTMLImage'],
      sywoj = laya['utils']['Handler'],
      yms8qw = laya['display']['Input'],
      r63di = laya['net']['Loader'];laya['maths']['Matrix'];var swoe = laya['renders']['Render'],
      b4n2tz = laya['utils']['RunDriver'];laya['media']['Sound'];var emcwjo = laya['media']['SoundChannel'],
      mwjcoe = laya['media']['SoundManager'],
      tngpb2 = (laya['display']['Stage'], laya['net']['URL']),
      x5di3 = laya['utils']['Utils'],
      bpvng = (nb0(sw08, 'laya.wx.mini.MiniAdpter'), sw08['getJson'] = function (ahkl1r) {
    return JSON['parse'](ahkl1r);
  }, sw08['init'] = function (r3di, _p9vgt) {
    void 0x0 === r3di && (r3di = !0x1), void 0x0 === _p9vgt && (_p9vgt = !0x1), sw08['_inited'] || (sw08['window'] = ys80wq)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (sw08['_inited'] = !0x0, sw08['isZiYu'] = _p9vgt, sw08['isPosMsgYu'] = r3di, sw08['EnvConfig'] = {}, sw08['isZiYu'] || (eomswj['setNativeFileDir']('/layaairGame'), eomswj['existDir'](eomswj['fileNativeDir'], sywoj['create'](sw08, sw08['onMkdirCallBack']))), sw08['window']['focus'] = function () {}, b804z['getUrlPath'] = function () {}, sw08['window']['logtime'] = function (r6ial7) {}, sw08['window']['alertTimeLog'] = function (bn2zt4) {}, sw08['window']['resetShareInfo'] = function () {}, sw08['window']['CanvasRenderingContext2D'] = function () {}, sw08['window']['CanvasRenderingContext2D']['prototype'] = sw08['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], sw08['window']['document']['body']['appendChild'] = function () {}, sw08['EnvConfig']['pixelRatioInt'] = 0x0, b4n2tz['getPixelRatio'] = sw08['pixelRatio'], sw08['_preCreateElement'] = wmq8['createElement'], wmq8['createElement'] = sw08['createElement'], b4n2tz['createShaderCondition'] = sw08['createShaderCondition'], x5di3['parseXMLFromString'] = sw08['parseXMLFromString'], yms8qw['_createInputElement'] = lrh1ak['_createInputElement'], sw08['EnvConfig']['load'] = r63di['prototype']['load'], r63di['prototype']['load'] = myowsj['prototype']['load'], sw08['isZiYu'] && r3di && wx['onMessage'](function (h$a_1) {
      h$a_1['isLoad'] && (eomswj['ziyuFileData'][h$a_1['url']] = h$a_1['data']);
    }));
  }, sw08['onMkdirCallBack'] = function (tbnp2, hlak$) {
    tbnp2 || (eomswj['filesListObj'] = JSON['parse'](hlak$['data']));
  }, sw08['pixelRatio'] = function () {
    if (!sw08['EnvConfig']['pixelRatioInt']) try {
      var soymwj = wx['getSystemInfoSync']();return sw08['EnvConfig']['pixelRatioInt'] = soymwj['pixelRatio'], soymwj['pixelRatio'];
    } catch (lra) {}return sw08['EnvConfig']['pixelRatioInt'];
  }, sw08['createElement'] = function (nptv9g) {
    var wq8sy0;if ('canvas' == nptv9g) return 0x1 == sw08['idx'] ? sw08['isZiYu'] ? (wq8sy0 = sharedCanvas)['style'] = {} : wq8sy0 = ys80wq['canvas'] : wq8sy0 = ys80wq['wx']['createCanvas'](), sw08['idx']++, wq8sy0;if ('textarea' == nptv9g || 'input' == nptv9g) return sw08['onCreateInput'](nptv9g);if ('div' != nptv9g) return sw08['_preCreateElement'](nptv9g);return nptv9g = sw08['_preCreateElement'](nptv9g), (nptv9g['contains'] = function (l36i7) {
      return null;
    }, nptv9g['removeChild'] = function (_9tpv) {}, nptv9g);
  }, sw08['onCreateInput'] = function (q802) {
    return q802 = sw08['_preCreateElement'](q802), (q802['focus'] = lrh1ak['wxinputFocus'], q802['blur'] = lrh1ak['wxinputblur'], q802['style'] = {}, q802['value'] = 0x0, q802['parentElement'] = {}, q802['placeholder'] = {}, q802['type'] = {}, q802['setColor'] = function (vntgpb) {}, q802['setType'] = function (bz4) {}, q802['setFontFace'] = function (pgv$) {}, q802['addEventListener'] = function (qz084y) {}, q802['contains'] = function (qy8msw) {
      return null;
    }, q802['removeChild'] = function (ntgbp) {}, q802);
  }, sw08['createShaderCondition'] = function (gtnbz2) {
    var l6ai7r = this;return function () {
      return l6ai7r[gtnbz2['replace']('this.', '')];
    };
  }, sw08['EnvConfig'] = null, sw08['window'] = null, sw08['_preCreateElement'] = null, sw08['_inited'] = !0x1, sw08['wxRequest'] = null, sw08['systemInfo'] = null, sw08['version'] = '0.0.1', sw08['isZiYu'] = !0x1, sw08['isPosMsgYu'] = !0x1, sw08['parseXMLFromString'] = function (gnt2z) {
    var z24btn;gnt2z = gnt2z['replace'](/>\s+</g, '><');try {
      z24btn = new ys80wq['Parser']['DOMParser']()['parseFromString'](gnt2z, 'text/xml');
    } catch (oqsw) {
      throw '需要引入xml解析库文件';
    }return z24btn;
  }, sw08['idx'] = 0x1, sw08);function sw08() {}nb0(y84z0q, 'laya.wx.mini.MiniImage'), y84z0q['prototype']['_loadImage'] = function (mjows) {
    var d6ix3 = !0x1;-0x1 == mjows['indexOf']('layaNativeDir/') && (d6ix3 = !0x0, mjows = tngpb2['formatURL'](mjows)), eomswj['getFileInfo'](mjows) ? y84z0q['onCreateImage'](mjows, this, !d6ix3) : -0x1 != mjows['indexOf']('http://') || -0x1 != mjows['indexOf']('https://') ? eomswj['downImg'](mjows, new sywoj(y84z0q, y84z0q['onDownImgCallBack'], [mjows, this]), mjows) : y84z0q['onCreateImage'](mjows, this, !0x0);
  }, y84z0q['onDownImgCallBack'] = function (tgnp, i673d, woejs) {
    woejs ? i673d['onError'](null) : y84z0q['onCreateImage'](tgnp, i673d);
  }, y84z0q['onCreateImage'] = function (l1hk, h1rla, tgpnbv) {
    var il73r6, bnvg;function _p() {
      bnvg['onload'] = null, bnvg['onerror'] = null, delete h1rla['imgCache'][l1hk];
    }il73r6 = (tgpnbv = void 0x0 === tgpnbv ? !0x1 : tgpnbv) ? l1hk : (i67r3l = eomswj['getFileInfo'](l1hk)['md5'], eomswj['getFileNativePath'](i67r3l)), null == h1rla['imgCache'] && (h1rla['imgCache'] = {}), tgpnbv = function () {
      _p(), h1rla['onLoaded'](bnvg);
    };var i67r3l = function () {
      _p(), h1rla['event']('error', 'Load image failed');
    };'nativeimage' == h1rla['_type'] ? ((bnvg = new wmq8['window']['Image']())['crossOrigin'] = '', bnvg['onload'] = tgpnbv, bnvg['onerror'] = i67r3l, bnvg['src'] = il73r6, h1rla['imgCache'][l1hk] = bnvg) : new x3fd['create'](il73r6, { 'onload': tgpnbv, 'onerror': i67r3l, 'onCreate': function (jyso) {
        bnvg = jyso, h1rla['imgCache'][l1hk] = jyso;
      } });
  };function y84z0q() {}var lrh1ak = (nb0(swyoj, 'laya.wx.mini.MiniInput'), swyoj['_createInputElement'] = function () {
    yms8qw['_initInput'](yms8qw['area'] = wmq8['createElement']('textarea')), yms8qw['_initInput'](yms8qw['input'] = wmq8['createElement']('input')), yms8qw['inputContainer'] = wmq8['createElement']('div'), yms8qw['inputContainer']['style']['position'] = 'absolute', yms8qw['inputContainer']['style']['zIndex'] = 0x186a0, wmq8['container']['appendChild'](yms8qw['inputContainer']), yms8qw['inputContainer']['setPos'] = function (liar, t_9vgp) {
      yms8qw['inputContainer']['style']['left'] = liar + 'px', yms8qw['inputContainer']['style']['top'] = t_9vgp + 'px';
    }, b804z['stage']['on']('resize', null, swyoj['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (alrkh) {
      ys80wq['dispatchEvent'] && ys80wq['dispatchEvent']('resize');
    }), mwjcoe['_soundClass'] = jom, mwjcoe['_musicClass'] = jom;
  }, swyoj['_onStageResize'] = function () {
    b804z['stage']['_canvasTransform']['identity']()['scale'](wmq8['width'] / swoe['canvas']['width'] / b4n2tz['getPixelRatio'](), wmq8['height'] / swoe['canvas']['height'] / b4n2tz['getPixelRatio']());
  }, swyoj['wxinputFocus'] = function (y8sm) {
    var rh1ka = yms8qw['inputElement']['target'];rh1ka && !rh1ka['editable'] || (bpvng['window']['wx']['offKeyboardConfirm'](), bpvng['window']['wx']['offKeyboardInput'](), bpvng['window']['wx']['showKeyboard']({ 'defaultValue': rh1ka['text'], 'maxLength': rh1ka['maxChars'], 'multiple': rh1ka['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (x7id) {}, 'fail': function (d67i3) {} }), bpvng['window']['wx']['onKeyboardConfirm'](function (qyw08s) {
      qyw08s = qyw08s ? qyw08s['value'] : '', (rh1ka['text'] = qyw08s, rh1ka['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), bpvng['window']['wx']['onKeyboardInput'](function (ymswjo) {
      ymswjo = ymswjo ? ymswjo['value'] : '', rh1ka['multiline'] || -0x1 == ymswjo['indexOf']('\x0a') ? (rh1ka['text'] = ymswjo, rh1ka['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, swyoj['inputEnter'] = function () {
    yms8qw['inputElement']['target']['focus'] = !0x1;
  }, swyoj['wxinputblur'] = function () {
    swyoj['hideKeyboard']();
  }, swyoj['hideKeyboard'] = function () {
    bpvng['window']['wx']['offKeyboardConfirm'](), bpvng['window']['wx']['offKeyboardInput'](), bpvng['window']['wx']['hideKeyboard']({ 'success': function (ecowjm) {
        console['log']('隐藏键盘');
      }, 'fail': function (lhark1) {
        console['log']('隐藏键盘出错:' + (lhark1 ? lhark1['errMsg'] : ''));
      } });
  }, swyoj);function swyoj() {}var myowsj = function () {
    function tgp2bn() {}nb0(tgp2bn, 'laya.wx.mini.MiniLoader');var zgb2t = tgp2bn['prototype'];return zgb2t['load'] = function (ntp9, gv9pt, wosj, ar716, harlk) {
      void 0x0 === wosj && (wosj = !0x0), void 0x0 === harlk && (harlk = !0x1);var h9$v = this;0x0 === (h9$v['_url'] = ntp9)['indexOf']('data:image') ? h9$v['_type'] = gv9pt = 'image' : h9$v['_type'] = gv9pt = gv9pt || h9$v['getTypeFromUrl'](ntp9), h9$v['_cache'] = wosj, h9$v['_data'] = null;var znb042 = 'ascii';-0x1 != ntp9['indexOf']('.fnt') ? znb042 = 'utf8' : 'arraybuffer' == gv9pt && (znb042 = '');var d36xi = x5di3['getFileExtension'](ntp9);if (-0x1 != tgp2bn['_fileTypeArr']['indexOf'](d36xi)) bpvng['EnvConfig']['load']['call'](this, ntp9, gv9pt, wosj, ar716, harlk);else {
        if (eomswj['getFileInfo'](ntp9)) bpvng['EnvConfig']['load']['call'](this, ntp9, gv9pt, wosj, ar716, harlk);else {
          if (-0x1 != ntp9['indexOf']('layaNativeDir/')) {
            if (bpvng['isZiYu']) {
              var mwoqs = eomswj['ziyuFileData'][ntp9];return void h9$v['onLoaded'](mwoqs);
            }return cosnole['log']('read read'), void eomswj['read'](ntp9, znb042, new sywoj(tgp2bn, tgp2bn['onReadNativeCallBack'], [znb042, ntp9, gv9pt, wosj, ar716, harlk, h9$v]));
          }mwoqs = '' == tngpb2['rootPath'] ? ntp9 : ntp9['split'](tngpb2['rootPath'])[0x0], -0x1 != ntp9['indexOf']('http://') || -0x1 != ntp9['indexOf']('https://') ? bpvng['EnvConfig']['load']['call'](h9$v, ntp9, gv9pt, wosj, ar716, harlk) : eomswj['readFile'](mwoqs, znb042, new sywoj(tgp2bn, tgp2bn['onReadNativeCallBack'], [znb042, ntp9, gv9pt, wosj, ar716, harlk, h9$v]), ntp9);
        }
      }
    }, zgb2t['resMgrLoad'] = function (ntgb, ng9tpv, yz408q, bpgtvn, f3d, gt_v9p, _v$k9h) {
      void 0x0 === yz408q && (yz408q = 0x0), void 0x0 === bpgtvn && (bpgtvn = !0x1), void 0x0 === f3d && (f3d = !0x1), void 0x0 === gt_v9p && (gt_v9p = 0x0), void 0x0 === _v$k9h && (_v$k9h = 0x3), -0x1 != ntgb['indexOf']('mpack') && console['log']('=============resMgrLoad url:', ntgb), bpvng['EnvConfig']['resMgrLoad'](ntgb, (_9pvt, di3fx5, wsme) => {
        tgp2bn['prototype']['resMgrLoadCallBack'](_9pvt, di3fx5, wsme, ng9tpv);
      }, yz408q, bpgtvn, f3d, gt_v9p, _v$k9h);
    }, zgb2t['resMgrLoadCallBack'] = function (rakl6, v$hk_9, _9hp, al6r) {
      console['log']('buff:::', rakl6, _9hp, eomswj['fileNativeDir'] + '///' + eomswj['fileListName']), al6r(rakl6, v$hk_9, _9hp);
    }, zgb2t['clearRes'] = function (yq8mws, ntvgb) {
      this['clearRes'](yq8mws, ntvgb = void 0x0 === ntvgb ? !0x1 : ntvgb), ntvgb = eomswj['getFileInfo'](yq8mws), !ntvgb || -0x1 == yq8mws['indexOf']('http://') && -0x1 == yq8mws['indexOf']('https://') || (ntvgb = ntvgb['md5'], ntvgb = eomswj['getFileNativePath'](ntvgb), eomswj['remove'](ntvgb));
    }, tgp2bn['onReadNativeCallBack'] = function (q8402z, qy804z, qy48z0, joemcw, nz2gtb, $_hvk9, ntb2, v_9tgp, wqyo) {
      void 0x0 === joemcw && (joemcw = !0x0), void 0x0 === $_hvk9 && ($_hvk9 = !0x1), (v_9tgp = void 0x0 === v_9tgp ? 0x0 : v_9tgp) ? 0x1 == v_9tgp && bpvng['EnvConfig']['load']['call'](ntb2, qy804z, qy48z0, joemcw, nz2gtb, $_hvk9) : (wqyo = 'json' == qy48z0 || 'atlas' == qy48z0 ? bpvng['getJson'](wqyo['data']) : 'xml' == qy48z0 ? x5di3['parseXMLFromString'](wqyo['data']) : wqyo['data'], ntb2['onLoaded'](wqyo), !bpvng['isZiYu'] && bpvng['isPosMsgYu'] && 'arraybuffer' != qy48z0 && wx['postMessage']({ 'url': qy804z, 'data': wqyo, 'isLoad': !0x0 }));
    }, ztbgn(tgp2bn, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), tgp2bn;
  }(),
      eomswj = (nb0(f35, 'laya.wx.mini.MiniFileMgr', $v_g9), f35['isLoadFile'] = function (r61lak) {
    return -0x1 != f35['_fileTypeArr']['indexOf'](r61lak);
  }, f35['getFileInfo'] = function (a6r1) {
    return a6r1 = a6r1['split']('?')[0x0], a6r1 = f35['filesListObj'][a6r1], null == a6r1 ? null : a6r1;
  }, f35['onFileUpdate'] = function ($al1h, gv9p_) {
    var kh1a_ = $al1h['split']('/');$al1h = kh1a_[kh1a_['length'] - 0x1], kh1a_ = f35['getFileInfo'](gv9p_), null == kh1a_ ? f35['onSaveFile'](gv9p_, $al1h) : kh1a_['readyUrl'] != gv9p_ && f35['remove']($al1h, gv9p_);
  }, f35['exits'] = function (dix637, btpvn) {
    dix637 = f35['getFileNativePath'](dix637), f35['fs']['getFileInfo']({ 'filePath': dix637, 'success': function (ywsmqo) {
        null != btpvn && btpvn['runWith']([0x0, ywsmqo]);
      }, 'fail': function (i673dr) {
        null != btpvn && btpvn['runWith']([0x1, i673dr]);
      } });
  }, f35['read'] = function (v_h9$k, ymswo, di573, v_gp$9) {
    void 0x0 === ymswo && (ymswo = 'ascill'), v_h9$k = '' != (v_gp$9 = void 0x0 === v_gp$9 ? '' : v_gp$9) ? f35['getFileNativePath'](v_h9$k) : v_h9$k, f35['fs']['readFile']({ 'filePath': v_h9$k, 'encoding': ymswo, 'success': function (yjmows) {
        null != di573 && di573['runWith']([0x0, yjmows]);
      }, 'fail': function (nbz2g) {
        nbz2g && '' != v_gp$9 ? f35['down'](v_gp$9, ymswo, di573, v_gp$9) : null != di573 && di573['runWith']([0x1]);
      } });
  }, f35['readNativeFile'] = function (v_$k, hra1lk) {
    f35['fs']['readFile']({ 'filePath': v_$k, 'encoding': '', 'success': function (s4y08) {
        null != hra1lk && hra1lk['runWith']([0x0]);
      }, 'fail': function (bz42n0) {
        null != hra1lk && hra1lk['runWith']([0x1]);
      } });
  }, f35['down'] = function (lhkr, pbtng, arl7, wcjeo) {
    void 0x0 === pbtng && (pbtng = 'ascill'), void 0x0 === wcjeo && (wcjeo = '');var tpn2bg = f35['getFileNativePath'](wcjeo);f35['wxdown']({ 'url': lhkr, 'filePath': tpn2bg, 'success': function (xi37) {
        0xc8 === xi37['statusCode'] && f35['readFile'](xi37['filePath'], pbtng, arl7, wcjeo);
      }, 'fail': function (tpnvb) {
        null != arl7 && arl7['runWith']([0x1, tpnvb]);
      } })['onProgressUpdate'](function (dr73i) {
      null != arl7 && arl7['runWith']([0x2, dr73i['progress']]);
    });
  }, f35['readFile'] = function (gntpvb, zngbt2, v$gp9, alk$h1) {
    void 0x0 === alk$h1 && (alk$h1 = ''), f35['fs']['readFile']({ 'filePath': gntpvb, 'encoding': zngbt2 = void 0x0 === zngbt2 ? 'ascill' : zngbt2, 'success': function (tvg9np) {
        -0x1 == gntpvb['indexOf']('http://') && -0x1 == gntpvb['indexOf']('https://') || f35['onFileUpdate'](gntpvb, alk$h1), null != v$gp9 && v$gp9['runWith']([0x0, tvg9np]);
      }, 'fail': function (nzg2bt) {
        nzg2bt && null != v$gp9 && v$gp9['runWith']([0x1, nzg2bt]);
      } });
  }, f35['downImg'] = function (hk9_$v, $ka1_h, _p9$h) {
    void 0x0 === _p9$h && (_p9$h = ''), f35['wxdown']({ 'url': hk9_$v, 'success': function (b4082z) {
        0xc8 === b4082z['statusCode'] && f35['copyFile'](b4082z['tempFilePath'], _p9$h, $ka1_h);
      }, 'fail': function (di7r36) {
        null != $ka1_h && $ka1_h['runWith']([0x1, di7r36]);
      } });
  }, f35['copyFile'] = function (d7ix6, h$9vp, k1l6a) {
    var vng9p = d7ix6['split']('/'),
        _9gpt = vng9p[vng9p['length'] - 0x1];h$9vp['split']('?')[0x0];var _$9gp = f35['getFileInfo'](h$9vp);vng9p = f35['getFileNativePath'](_9gpt), f35['fs']['copyFile']({ 'srcPath': d7ix6, 'destPath': vng9p, 'success': function (mcej) {
        _$9gp ? _$9gp['readyUrl'] != h$9vp && f35['remove'](_9gpt, h$9vp, k1l6a) : (f35['onSaveFile'](h$9vp, _9gpt), null != k1l6a && k1l6a['runWith']([0x0]));
      }, 'fail': function (bz0428) {
        null != k1l6a && k1l6a['runWith']([0x1, bz0428]);
      } });
  }, f35['getFileNativePath'] = function (wsmeoj) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wsmeoj;
  }, f35['remove'] = function (l1hka$, $hk91_, p2ngbt) {
    void 0x0 === $hk91_ && ($hk91_ = '');var lkh$1a = f35['getFileInfo']($hk91_),
        k$lh1 = f35['getFileNativePath'](lkh$1a['md5']);b804z['loader']['clearRes'](lkh$1a['readyUrl']), f35['fs']['unlink']({ 'filePath': k$lh1, 'success': function (sqwoym) {
        '' != $hk91_ && f35['onSaveFile']($hk91_, l1hka$), null != p2ngbt && p2ngbt['runWith']([0x0]);
      }, 'fail': function (q208z) {} });
  }, f35['onSaveFile'] = function (qy048z, hk_v9$) {
    var b2tp = qy048z['split']('?')[0x0];f35['filesListObj'][b2tp] = { 'md5': hk_v9$, 'readyUrl': qy048z }, f35['fs']['writeFile']({ 'filePath': f35['fileNativeDir'] + '/' + f35['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](f35['filesListObj']), 'success': function ($vg_p) {
        console['log']('写入测试测试成功：', $vg_p);
      }, 'fail': function (xf5d) {
        console['log']('写入测试测试失败：', xf5d);
      } });
  }, f35['existDir'] = function (a1rl67, smowjy) {
    f35['fs']['mkdir']({ 'dirPath': a1rl67, 'success': function (yoqmsw) {
        null != smowjy && smowjy['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (li73r) {
        -0x1 != li73r['errMsg']['indexOf']('file already exists') ? f35['readSync'](f35['fileListName'], 'utf8', smowjy) : null != smowjy && smowjy['runWith']([0x1, li73r]);
      } });
  }, f35['readSync'] = function (rah1kl, rl7i3, ptvbn, womysj) {
    void 0x0 === rl7i3 && (rl7i3 = 'ascill'), void 0x0 === womysj && (womysj = ''), rah1kl = f35['getFileNativePath'](rah1kl);var ria7;try {
      ria7 = f35['fs']['readFileSync'](rah1kl), null != ptvbn && ptvbn['runWith']([0x0, { 'data': ria7 }]);
    } catch (mwjc) {
      null != ptvbn && ptvbn['runWith']([0x1]);
    }
  }, f35['readCache'] = function () {}, f35['writeCache'] = function (_$ahk1) {
    var $k1lh = readyUrl['split']('?')[0x0];f35['filesListObj'][$k1lh] = { 'md5': md5Name, 'readyUrl': readyUrl }, f35['fs']['writeFile']({ 'filePath': f35['fileNativeDir'] + '/' + f35['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](f35['filesListObj']), 'success': function (v_9ph) {}, 'fail': function (z0n2b4) {} });
  }, f35['setNativeFileDir'] = function (zntbg) {
    f35['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zntbg;
  }, f35['filesListObj'] = {}, f35['fileNativeDir'] = null, f35['fileListName'] = 'layaairfiles.txt', f35['ziyuFileData'] = {}, ztbgn(f35, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), f35);function f35() {
    f35['__super']['call'](this);
  }var jom = function () {
    function p$9hv_() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, p$9hv_['__super']['call'](this), this['_sound'] = p$9hv_['_createSound']();
    }nb0(p$9hv_, 'laya.wx.mini.MiniSound', $v_g9);var qmy = p$9hv_['prototype'];return qmy['load'] = function (_gtvp9) {
      var a16l7 = this,
          il37;function gntpv9() {
        if (null != p$9hv_['_null']) a16l7['_sound']['onCanplay'](p$9hv_['_null']), a16l7['_sound']['onError'](p$9hv_['_null']);else try {
          a16l7['_sound']['onCanplay'](null), a16l7['_sound']['onError'](null), p$9hv_['_null'] = null;
        } catch (k$a) {
          console['warn']('[wxmini] _clearSound:' + k$a), a16l7['_sound']['onCanplay'](tgz2), a16l7['_sound']['onError'](tgz2), p$9hv_['_null'] = tgz2;
        }
      }function tgz2() {}_gtvp9 = tngpb2['formatURL'](_gtvp9), this['url'] = _gtvp9, p$9hv_['_audioCache'][_gtvp9] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        gntpv9(), il37['loaded'] = !0x0, il37['event']('complete'), p$9hv_['_audioCache'][il37['url']] = il37;
      }), this['_sound']['onError'](function (l17r6a) {
        console['error']('errCode=' + l17r6a['errCode'] + '  errMsg=' + l17r6a['errMsg']), gntpv9(), il37['event']('error');
      }), this['_sound']['src'] = _gtvp9, il37 = this);
    }, qmy['play'] = function ($g_pv, bgtp) {
      void 0x0 === $g_pv && ($g_pv = 0x0), void 0x0 === bgtp && (bgtp = 0x0), (lri7a = this['url'] == mwjcoe['_tMusic'] ? (p$9hv_['_musicAudio'] || (p$9hv_['_musicAudio'] = p$9hv_['_createSound']()), p$9hv_['_musicAudio']) : p$9hv_['_createSound']())['src'] = this['url'];var lri7a = new ri73d(lri7a);return lri7a['url'] = this['url'], lri7a['loops'] = bgtp, lri7a['startTime'] = $g_pv, lri7a['play'](), mwjcoe['addChannel'](lri7a), lri7a;
    }, qmy['dispose'] = function () {
      var h1$al = p$9hv_['_audioCache'][this['url']];h1$al && (h1$al['src'] = '', delete p$9hv_['_audioCache'][this['url']]);
    }, d37i6(0x0, qmy, 'duration', function () {
      return this['_sound']['duration'];
    }), p$9hv_['_createSound'] = function () {
      return p$9hv_['_id']++, bpvng['window']['wx']['createInnerAudioContext']();
    }, p$9hv_['_musicAudio'] = null, p$9hv_['_id'] = 0x0, p$9hv_['_audioCache'] = {}, p$9hv_['_null'] = void 0x0, p$9hv_;
  }(),
      ri73d = function () {
    function ri736l(p9$gv_) {
      this['_audio'] = null, this['_onEnd'] = null, ri736l['__super']['call'](this), this['_audio'] = p9$gv_, this['_onEnd'] = x5di3['bind'](this['__onEnd'], this), p9$gv_['onEnded'](this['_onEnd']);
    }nb0(ri736l, 'laya.wx.mini.MiniSoundChannel', emcwjo);var lkr16 = ri736l['prototype'];return lkr16['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (b804z['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, lkr16['__onNull'] = function () {}, lkr16['play'] = function () {
      this['isStopped'] = !0x1, mwjcoe['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, lkr16['stop'] = function () {
      if (this['isStopped'] = !0x0, mwjcoe['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != ri736l['_null']) this['_audio']['onEnded'](ri736l['_null']);else try {
          this['_audio']['onEnded'](null), ri736l['_null'] = null;
        } catch (nbgtz2) {
          console['warn']('[wxmini] stop:' + nbgtz2), this['_audio']['onEnded'](x5di3['bind'](this['__onNull'], this)), ri736l['_null'] = x5di3['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, lkr16['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, lkr16['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, mwjcoe['addChannel'](this), this['_audio']['play']());
    }, d37i6(0x0, lkr16, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), d37i6(0x0, lkr16, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), d37i6(0x0, lkr16, 'volume', function () {
      return 0x1;
    }, function (gvbntp) {}), ri736l['_null'] = void 0x0, ri736l;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (n2bt, ri6d37) {
  'use strict';

  for (var g2nzt in Object['defineProperty'](ri6d37, '__esModule', { 'value': !0x0 }), Laya) {
    var p_9v$h = Laya[g2nzt];p_9v$h && p_9v$h['__isclass'] && (ri6d37[g2nzt] = p_9v$h);
  }
});