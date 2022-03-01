var b = wx.$e;
!function ($n3qij, ecoap) {
  ecoap['un'], ecoap['uns'];var txi$lg = ecoap['static'],
      rvhzyf = ecoap['class'],
      k09sb6 = ecoap['getset'];ecoap['__newvec'];var zthlgr = laya['utils']['Browser'],
      nju3qs = (laya['events']['Event'], laya['events']['EventDispatcher']),
      xltg$i = laya['resource']['HTMLImage'],
      ligt$ = laya['utils']['Handler'],
      co_7 = laya['display']['Input'],
      jun3s = laya['net']['Loader'];laya['maths']['Matrix'];var s0bk9 = laya['renders']['Render'],
      i$3gj = laya['utils']['RunDriver'];laya['media']['Sound'];var xg$i3 = laya['media']['SoundChannel'],
      dk609 = laya['media']['SoundManager'],
      lrhyfz = (laya['display']['Stage'], laya['net']['URL']),
      b658d0 = laya['utils']['Utils'];rvhzyf(_4yzfv, 'laya.wx.mini.MiniAdpter'), _4yzfv['getJson'] = function (zyhfvr) {
    return JSON['parse'](zyhfvr);
  }, _4yzfv['init'] = function (xght, f4vy_z) {
    void 0x0 === xght && (xght = !0x1), void 0x0 === f4vy_z && (f4vy_z = !0x1), _4yzfv['_inited'] || (_4yzfv['window'] = $n3qij)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (_4yzfv['_inited'] = !0x0, _4yzfv['isZiYu'] = f4vy_z, _4yzfv['isPosMsgYu'] = xght, _4yzfv['EnvConfig'] = {}, _4yzfv['isZiYu'] || (sk60b9['setNativeFileDir']('/layaairGame'), sk60b9['existDir'](sk60b9['fileNativeDir'], ligt$['create'](_4yzfv, _4yzfv['onMkdirCallBack']))), _4yzfv['window']['focus'] = function () {}, ecoap['getUrlPath'] = function () {}, _4yzfv['window']['logtime'] = function (nj3iq) {}, _4yzfv['window']['alertTimeLog'] = function (tlg$hx) {}, _4yzfv['window']['resetShareInfo'] = function () {}, _4yzfv['window']['CanvasRenderingContext2D'] = function () {}, _4yzfv['window']['CanvasRenderingContext2D']['prototype'] = _4yzfv['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], _4yzfv['window']['document']['body']['appendChild'] = function () {}, _4yzfv['EnvConfig']['pixelRatioInt'] = 0x0, i$3gj['getPixelRatio'] = _4yzfv['pixelRatio'], _4yzfv['_preCreateElement'] = zthlgr['createElement'], zthlgr['createElement'] = _4yzfv['createElement'], i$3gj['createShaderCondition'] = _4yzfv['createShaderCondition'], b658d0['parseXMLFromString'] = _4yzfv['parseXMLFromString'], co_7['_createInputElement'] = y_4zfv['_createInputElement'], _4yzfv['EnvConfig']['load'] = jun3s['prototype']['load'], jun3s['prototype']['load'] = rxg['prototype']['load'], _4yzfv['isZiYu'] && xght && wx['onMessage'](function (yrlzfh) {
      yrlzfh['isLoad'] && (sk60b9['ziyuFileData'][yrlzfh['url']] = yrlzfh['data']);
    }));
  }, _4yzfv['onMkdirCallBack'] = function (vhrf, i3$) {
    vhrf || (sk60b9['filesListObj'] = JSON['parse'](i3$['data']));
  }, _4yzfv['pixelRatio'] = function () {
    if (!_4yzfv['EnvConfig']['pixelRatioInt']) try {
      var eaomc = wx['getSystemInfoSync']();return _4yzfv['EnvConfig']['pixelRatioInt'] = eaomc['pixelRatio'], eaomc['pixelRatio'];
    } catch (zghtrl) {}return _4yzfv['EnvConfig']['pixelRatioInt'];
  }, _4yzfv['createElement'] = function (nsqk) {
    return 'canvas' != nsqk ? 'textarea' == nsqk || 'input' == nsqk ? _4yzfv['onCreateInput'](nsqk) : 'div' == nsqk ? ((ig$xt = _4yzfv['_preCreateElement'](nsqk))['contains'] = function (lhzgt) {
      return null;
    }, ig$xt['removeChild'] = function (b506kd) {}, ig$xt) : _4yzfv['_preCreateElement'](nsqk) : (0x1 == _4yzfv['idx'] ? _4yzfv['isZiYu'] ? (a7mpoc = sharedCanvas)['style'] = {} : a7mpoc = $n3qij['canvas'] : a7mpoc = $n3qij['wx']['createCanvas'](), _4yzfv['idx']++, a7mpoc);var a7mpoc, ig$xt;
  }, _4yzfv['onCreateInput'] = function (rvy4f) {
    return rvy4f = _4yzfv['_preCreateElement'](rvy4f), (rvy4f['focus'] = y_4zfv['wxinputFocus'], rvy4f['blur'] = y_4zfv['wxinputblur'], rvy4f['style'] = {}, rvy4f['value'] = 0x0, rvy4f['parentElement'] = {}, rvy4f['placeholder'] = {}, rvy4f['type'] = {}, rvy4f['setColor'] = function (wb08d5) {}, rvy4f['setType'] = function (c_7a4m) {}, rvy4f['setFontFace'] = function (ampco7) {}, rvy4f['addEventListener'] = function (trlyz) {}, rvy4f['contains'] = function (vrzy4f) {
      return null;
    }, rvy4f['removeChild'] = function (zfhlyr) {}, rvy4f);
  }, _4yzfv['createShaderCondition'] = function (peocam) {
    var s9q3nu = this;return function () {
      return s9q3nu[peocam['replace']('this.', '')];
    };
  }, _4yzfv['EnvConfig'] = null, _4yzfv['window'] = null, _4yzfv['_preCreateElement'] = null, _4yzfv['_inited'] = !0x1, _4yzfv['wxRequest'] = null, _4yzfv['systemInfo'] = null, _4yzfv['version'] = '0.0.1', _4yzfv['isZiYu'] = !0x1, _4yzfv['isPosMsgYu'] = !0x1, _4yzfv['parseXMLFromString'] = function ($ilxgt) {
    var tx$jg;$ilxgt = $ilxgt['replace'](/>\s+</g, '><');try {
      tx$jg = new $n3qij['Parser']['DOMParser']()['parseFromString']($ilxgt, 'text/xml');
    } catch (su9b) {
      throw '需要引入xml解析库文件';
    }return tx$jg;
  }, _4yzfv['idx'] = 0x1;var b865d0 = _4yzfv;function _4yzfv() {}rvhzyf($3gjxi, 'laya.wx.mini.MiniImage'), $3gjxi['prototype']['_loadImage'] = function (mca7op) {
    var tgxli = !0x1;-0x1 == mca7op['indexOf']('layaNativeDir/') && (tgxli = !0x0, mca7op = lrhyfz['formatURL'](mca7op)), sk60b9['getFileInfo'](mca7op) ? $3gjxi['onCreateImage'](mca7op, this, !tgxli) : -0x1 != mca7op['indexOf']('http://') || -0x1 != mca7op['indexOf']('https://') ? sk60b9['downImg'](mca7op, new ligt$($3gjxi, $3gjxi['onDownImgCallBack'], [mca7op, this]), mca7op) : $3gjxi['onCreateImage'](mca7op, this, !0x0);
  }, $3gjxi['onDownImgCallBack'] = function (jit$, hlxtrg, ub6ks9) {
    ub6ks9 ? hlxtrg['onError'](null) : $3gjxi['onCreateImage'](jit$, hlxtrg);
  }, $3gjxi['onCreateImage'] = function (b0d56, knu, nquij3) {
    var d65b08;function s6k9b() {
      d65b08['onload'] = null, d65b08['onerror'] = null, delete knu['imgCache'][b0d56];
    }nquij3 = (nquij3 = void 0x0 === nquij3 ? !0x1 : nquij3) ? b0d56 : (nquij3 = sk60b9['getFileInfo'](b0d56)['md5'], sk60b9['getFileNativePath'](nquij3)), null == knu['imgCache'] && (knu['imgCache'] = {});function us93() {
      s6k9b(), knu['onLoaded'](d65b08);
    }function z4_vy() {
      s6k9b(), knu['event']('error', 'Load image failed');
    }'nativeimage' == knu['_type'] ? ((d65b08 = new zthlgr['window']['Image']())['crossOrigin'] = '', d65b08['onload'] = us93, d65b08['onerror'] = z4_vy, d65b08['src'] = nquij3, knu['imgCache'][b0d56] = d65b08) : new xltg$i['create'](nquij3, { 'onload': us93, 'onerror': z4_vy, 'onCreate': function (d0b6) {
        d65b08 = d0b6, knu['imgCache'][b0d56] = d0b6;
      } });
  };function $3gjxi() {}rvhzyf(frlzh, 'laya.wx.mini.MiniInput'), frlzh['_createInputElement'] = function () {
    co_7['_initInput'](co_7['area'] = zthlgr['createElement']('textarea')), co_7['_initInput'](co_7['input'] = zthlgr['createElement']('input')), co_7['inputContainer'] = zthlgr['createElement']('div'), co_7['inputContainer']['style']['position'] = 'absolute', co_7['inputContainer']['style']['zIndex'] = 0x186a0, zthlgr['container']['appendChild'](co_7['inputContainer']), co_7['inputContainer']['setPos'] = function (k9sun6, kd096) {
      co_7['inputContainer']['style']['left'] = k9sun6 + 'px', co_7['inputContainer']['style']['top'] = kd096 + 'px';
    }, ecoap['stage']['on']('resize', null, frlzh['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (x$3jqi) {
      $n3qij['dispatchEvent'] && $n3qij['dispatchEvent']('resize');
    }), dk609['_soundClass'] = hvyfz, dk609['_musicClass'] = hvyfz;
  }, frlzh['_onStageResize'] = function () {
    ecoap['stage']['_canvasTransform']['identity']()['scale'](zthlgr['width'] / s0bk9['canvas']['width'] / i$3gj['getPixelRatio'](), zthlgr['height'] / s0bk9['canvas']['height'] / i$3gj['getPixelRatio']());
  }, frlzh['wxinputFocus'] = function (txj$g) {
    var aomc_7 = co_7['inputElement']['target'];aomc_7 && !aomc_7['editable'] || (b865d0['window']['wx']['offKeyboardConfirm'](), b865d0['window']['wx']['offKeyboardInput'](), b865d0['window']['wx']['showKeyboard']({ 'defaultValue': aomc_7['text'], 'maxLength': aomc_7['maxChars'], 'multiple': aomc_7['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (vyhzfr) {}, 'fail': function (hrlztg) {} }), b865d0['window']['wx']['onKeyboardConfirm'](function (rgltzh) {
      rgltzh = rgltzh ? rgltzh['value'] : '', (aomc_7['text'] = rgltzh, aomc_7['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), b865d0['window']['wx']['onKeyboardInput'](function (u6k9s) {
      u6k9s = u6k9s ? u6k9s['value'] : '', aomc_7['multiline'] || -0x1 == u6k9s['indexOf']('\x0a') ? (aomc_7['text'] = u6k9s, aomc_7['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, frlzh['inputEnter'] = function () {
    co_7['inputElement']['target']['focus'] = !0x1;
  }, frlzh['wxinputblur'] = function () {
    frlzh['hideKeyboard']();
  }, frlzh['hideKeyboard'] = function () {
    b865d0['window']['wx']['offKeyboardConfirm'](), b865d0['window']['wx']['offKeyboardInput'](), b865d0['window']['wx']['hideKeyboard']({ 'success': function (mp7ca) {
        console['log']('隐藏键盘');
      }, 'fail': function (i$nqj3) {
        console['log']('隐藏键盘出错:' + (i$nqj3 ? i$nqj3['errMsg'] : ''));
      } });
  };var y_4zfv = frlzh;function frlzh() {}rvhzyf(nksq9, 'laya.wx.mini.MiniLoader'), (knqs = nksq9['prototype'])['load'] = function ($x3ji, cpe, c7ma, _4f7va, q3us) {
    void 0x0 === c7ma && (c7ma = !0x0), void 0x0 === q3us && (q3us = !0x1);var nsku69 = this;0x0 === (nsku69['_url'] = $x3ji)['indexOf']('data:image') ? nsku69['_type'] = cpe = 'image' : nsku69['_type'] = cpe = cpe || nsku69['getTypeFromUrl']($x3ji), nsku69['_cache'] = c7ma, nsku69['_data'] = null;var tyzr = 'ascii';-0x1 != $x3ji['indexOf']('.fnt') ? tyzr = 'utf8' : 'arraybuffer' == cpe && (tyzr = '');var nqjiu3 = b658d0['getFileExtension']($x3ji);if (-0x1 != nksq9['_fileTypeArr']['indexOf'](nqjiu3)) b865d0['EnvConfig']['load']['call'](this, $x3ji, cpe, c7ma, _4f7va, q3us);else {
      if (sk60b9['getFileInfo']($x3ji)) b865d0['EnvConfig']['load']['call'](this, $x3ji, cpe, c7ma, _4f7va, q3us);else {
        if (-0x1 != $x3ji['indexOf']('layaNativeDir/')) return b865d0['isZiYu'] ? (nqjiu3 = sk60b9['ziyuFileData'][$x3ji], void nsku69['onLoaded'](nqjiu3)) : (cosnole['log']('read read'), void sk60b9['read']($x3ji, tyzr, new ligt$(nksq9, nksq9['onReadNativeCallBack'], [tyzr, $x3ji, cpe, c7ma, _4f7va, q3us, nsku69])));nqjiu3 = '' == lrhyfz['rootPath'] ? $x3ji : $x3ji['split'](lrhyfz['rootPath'])[0x0], -0x1 != $x3ji['indexOf']('http://') || -0x1 != $x3ji['indexOf']('https://') ? b865d0['EnvConfig']['load']['call'](nsku69, $x3ji, cpe, c7ma, _4f7va, q3us) : sk60b9['readFile'](nqjiu3, tyzr, new ligt$(nksq9, nksq9['onReadNativeCallBack'], [tyzr, $x3ji, cpe, c7ma, _4f7va, q3us, nsku69]), $x3ji);
      }
    }
  }, knqs['resMgrLoad'] = function (hlxt$, igt$lx, d025w, gtrlh, rvzh, tg$hx, zfy4_) {
    void 0x0 === d025w && (d025w = 0x0), void 0x0 === gtrlh && (gtrlh = !0x1), void 0x0 === rvzh && (rvzh = !0x1), void 0x0 === tg$hx && (tg$hx = 0x0), void 0x0 === zfy4_ && (zfy4_ = 0x3), -0x1 != hlxt$['indexOf']('mpack') && console['log']('=============resMgrLoad url:', hlxt$), b865d0['EnvConfig']['resMgrLoad'](hlxt$, (nq3us, u3ij, ytrh) => {
      nksq9['prototype']['resMgrLoadCallBack'](nq3us, u3ij, ytrh, igt$lx);
    }, d025w, gtrlh, rvzh, tg$hx, zfy4_);
  }, knqs['resMgrLoadCallBack'] = function (xgti$l, uqnks9, vyz4_, vyf_74) {
    console['log']('buff:::', xgti$l, vyz4_, sk60b9['fileNativeDir'] + '///' + sk60b9['fileListName']), vyf_74(xgti$l, uqnks9, vyz4_);
  }, knqs['clearRes'] = function (grhltz, hrxltg) {
    this['clearRes'](grhltz, hrxltg = void 0x0 === hrxltg ? !0x1 : hrxltg), hrxltg = sk60b9['getFileInfo'](grhltz), !hrxltg || -0x1 == grhltz['indexOf']('http://') && -0x1 == grhltz['indexOf']('https://') || (grhltz = hrxltg['md5'], hrxltg = sk60b9['getFileNativePath'](grhltz), sk60b9['remove'](hrxltg));
  }, nksq9['onReadNativeCallBack'] = function (xh$glt, f_vzy, fylrhz, d0b685, paocm, fz4y, lzrhtg, l$gxi, ghl$tx) {
    void 0x0 === d0b685 && (d0b685 = !0x0), void 0x0 === fz4y && (fz4y = !0x1), (l$gxi = void 0x0 === l$gxi ? 0x0 : l$gxi) ? 0x1 == l$gxi && b865d0['EnvConfig']['load']['call'](lzrhtg, f_vzy, fylrhz, d0b685, paocm, fz4y) : (l$gxi = 'json' == fylrhz || 'atlas' == fylrhz ? b865d0['getJson'](ghl$tx['data']) : 'xml' == fylrhz ? b658d0['parseXMLFromString'](ghl$tx['data']) : ghl$tx['data'], lzrhtg['onLoaded'](l$gxi), !b865d0['isZiYu'] && b865d0['isPosMsgYu'] && 'arraybuffer' != fylrhz && wx['postMessage']({ 'url': f_vzy, 'data': l$gxi, 'isLoad': !0x0 }));
  }, txi$lg(nksq9, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
  }]);var rxg = nksq9;function nksq9() {}rvhzyf(zrlfh, 'laya.wx.mini.MiniFileMgr', nju3qs), zrlfh['isLoadFile'] = function (yfhvrz) {
    return -0x1 != zrlfh['_fileTypeArr']['indexOf'](yfhvrz);
  }, zrlfh['getFileInfo'] = function (lzyrht) {
    return lzyrht = lzyrht['split']('?')[0x0], lzyrht = zrlfh['filesListObj'][lzyrht], null == lzyrht ? null : lzyrht;
  }, zrlfh['onFileUpdate'] = function (buk9, a_7c4) {
    buk9 = buk9['split']('/'), buk9 = buk9[buk9['length'] - 0x1];var lrzhfy = zrlfh['getFileInfo'](a_7c4);null == lrzhfy ? zrlfh['onSaveFile'](a_7c4, buk9) : lrzhfy['readyUrl'] != a_7c4 && zrlfh['remove'](buk9, a_7c4);
  }, zrlfh['exits'] = function (acm7o_, q3ix$) {
    acm7o_ = zrlfh['getFileNativePath'](acm7o_), zrlfh['fs']['getFileInfo']({ 'filePath': acm7o_, 'success': function (gti$j) {
        null != q3ix$ && q3ix$['runWith']([0x0, gti$j]);
      }, 'fail': function (nujiq) {
        null != q3ix$ && q3ix$['runWith']([0x1, nujiq]);
      } });
  }, zrlfh['read'] = function (b09k6d, tg$lh, yfvz4r, w502d) {
    void 0x0 === tg$lh && (tg$lh = 'ascill'), b09k6d = '' != (w502d = void 0x0 === w502d ? '' : w502d) ? zrlfh['getFileNativePath'](b09k6d) : b09k6d, zrlfh['fs']['readFile']({ 'filePath': b09k6d, 'encoding': tg$lh, 'success': function (k90bd6) {
        null != yfvz4r && yfvz4r['runWith']([0x0, k90bd6]);
      }, 'fail': function (pa7) {
        pa7 && '' != w502d ? zrlfh['down'](w502d, tg$lh, yfvz4r, w502d) : null != yfvz4r && yfvz4r['runWith']([0x1]);
      } });
  }, zrlfh['readNativeFile'] = function (xgt$ji, d0586) {
    zrlfh['fs']['readFile']({ 'filePath': xgt$ji, 'encoding': '', 'success': function (bd65) {
        null != d0586 && d0586['runWith']([0x0]);
      }, 'fail': function (nu3qs) {
        null != d0586 && d0586['runWith']([0x1]);
      } });
  }, zrlfh['down'] = function ($txgl, _v7y4f, ltz, f4v7y) {
    void 0x0 === _v7y4f && (_v7y4f = 'ascill'), void 0x0 === f4v7y && (f4v7y = '');var a7m = zrlfh['getFileNativePath'](f4v7y);zrlfh['wxdown']({ 'url': $txgl, 'filePath': a7m, 'success': function (d0bk96) {
        0xc8 === d0bk96['statusCode'] && zrlfh['readFile'](d0bk96['filePath'], _v7y4f, ltz, f4v7y);
      }, 'fail': function (k0db56) {
        null != ltz && ltz['runWith']([0x1, k0db56]);
      } })['onProgressUpdate'](function (xtig$l) {
      null != ltz && ltz['runWith']([0x2, xtig$l['progress']]);
    });
  }, zrlfh['readFile'] = function (wd250, yf4zv, i3$xg, i3qju) {
    void 0x0 === i3qju && (i3qju = ''), zrlfh['fs']['readFile']({ 'filePath': wd250, 'encoding': yf4zv = void 0x0 === yf4zv ? 'ascill' : yf4zv, 'success': function (b8w) {
        -0x1 == wd250['indexOf']('http://') && -0x1 == wd250['indexOf']('https://') || zrlfh['onFileUpdate'](wd250, i3qju), null != i3$xg && i3$xg['runWith']([0x0, b8w]);
      }, 'fail': function (frlhyz) {
        frlhyz && null != i3$xg && i3$xg['runWith']([0x1, frlhyz]);
      } });
  }, zrlfh['downImg'] = function (zrfhl, rgxht, mcoap7) {
    void 0x0 === mcoap7 && (mcoap7 = ''), zrlfh['wxdown']({ 'url': zrfhl, 'success': function (lyzth) {
        0xc8 === lyzth['statusCode'] && zrlfh['copyFile'](lyzth['tempFilePath'], mcoap7, rgxht);
      }, 'fail': function (yrtl) {
        null != rgxht && rgxht['runWith']([0x1, yrtl]);
      } });
  }, zrlfh['copyFile'] = function (k09b, j3iqn$, y4_vf) {
    var c_ma74 = k09b['split']('/'),
        $q3in = c_ma74[c_ma74['length'] - 0x1];j3iqn$['split']('?')[0x0];var x$hl = zrlfh['getFileInfo'](j3iqn$);c_ma74 = zrlfh['getFileNativePath']($q3in), zrlfh['fs']['copyFile']({ 'srcPath': k09b, 'destPath': c_ma74, 'success': function (hrlty) {
        x$hl ? x$hl['readyUrl'] != j3iqn$ && zrlfh['remove']($q3in, j3iqn$, y4_vf) : (zrlfh['onSaveFile'](j3iqn$, $q3in), null != y4_vf && y4_vf['runWith']([0x0]));
      }, 'fail': function (xj$q3i) {
        null != y4_vf && y4_vf['runWith']([0x1, xj$q3i]);
      } });
  }, zrlfh['getFileNativePath'] = function (ixjg3) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ixjg3;
  }, zrlfh['remove'] = function (x$itjg, qnj3iu, hfryl) {
    void 0x0 === qnj3iu && (qnj3iu = '');var w1825 = zrlfh['getFileInfo'](qnj3iu),
        glzht = zrlfh['getFileNativePath'](w1825['md5']);ecoap['loader']['clearRes'](w1825['readyUrl']), zrlfh['fs']['unlink']({ 'filePath': glzht, 'success': function (qu3ji) {
        '' != qnj3iu && zrlfh['onSaveFile'](qnj3iu, x$itjg), null != hfryl && hfryl['runWith']([0x0]);
      }, 'fail': function (junq3) {} });
  }, zrlfh['onSaveFile'] = function (s9qknu, yfrvz4) {
    var hrvfy = s9qknu['split']('?')[0x0];zrlfh['filesListObj'][hrvfy] = { 'md5': yfrvz4, 'readyUrl': s9qknu }, zrlfh['fs']['writeFile']({ 'filePath': zrlfh['fileNativeDir'] + '/' + zrlfh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](zrlfh['filesListObj']), 'success': function (fvzhr) {
        console['log']('写入测试测试成功：', fvzhr);
      }, 'fail': function (lfryhz) {
        console['log']('写入测试测试失败：', lfryhz);
      } });
  }, zrlfh['existDir'] = function (hgrxl, cmaeop) {
    zrlfh['fs']['mkdir']({ 'dirPath': hgrxl, 'success': function (s9bk6) {
        null != cmaeop && cmaeop['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (n3iuj) {
        -0x1 != n3iuj['errMsg']['indexOf']('file already exists') ? zrlfh['readSync'](zrlfh['fileListName'], 'utf8', cmaeop) : null != cmaeop && cmaeop['runWith']([0x1, n3iuj]);
      } });
  }, zrlfh['readSync'] = function (_4vyfz, qn9su, m7_ac, _7fav) {
    void 0x0 === qn9su && (qn9su = 'ascill'), void 0x0 === _7fav && (_7fav = ''), qn9su = zrlfh['getFileNativePath'](_4vyfz);var vyrz4f;try {
      vyrz4f = zrlfh['fs']['readFileSync'](qn9su), null != m7_ac && m7_ac['runWith']([0x0, { 'data': vyrz4f }]);
    } catch (b906ks) {
      null != m7_ac && m7_ac['runWith']([0x1]);
    }
  }, zrlfh['readCache'] = function () {}, zrlfh['writeCache'] = function (mecp) {
    var n3q$ij = readyUrl['split']('?')[0x0];zrlfh['filesListObj'][n3q$ij] = { 'md5': md5Name, 'readyUrl': readyUrl }, zrlfh['fs']['writeFile']({ 'filePath': zrlfh['fileNativeDir'] + '/' + zrlfh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](zrlfh['filesListObj']), 'success': function (a7c_4m) {}, 'fail': function (tilg) {} });
  }, zrlfh['setNativeFileDir'] = function (qn9u3s) {
    zrlfh['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + qn9u3s;
  }, zrlfh['filesListObj'] = {}, zrlfh['fileNativeDir'] = null, zrlfh['fileListName'] = 'layaairfiles.txt', zrlfh['ziyuFileData'] = {}, txi$lg(zrlfh, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]);var sk60b9 = zrlfh;function zrlfh() {
    zrlfh['__super']['call'](this);
  }rvhzyf(k690b, 'laya.wx.mini.MiniSound', nju3qs), (knqs = k690b['prototype'])['load'] = function (a74_mv) {
    var zylrh = this,
        ma47c;function hx$ltg() {
      if (null != k690b['_null']) zylrh['_sound']['onCanplay'](k690b['_null']), zylrh['_sound']['onError'](k690b['_null']);else try {
        zylrh['_sound']['onCanplay'](null), zylrh['_sound']['onError'](null), k690b['_null'] = null;
      } catch (bk96s) {
        console['warn']('[wxmini] _clearSound:' + bk96s), zylrh['_sound']['onCanplay'](lxt$g), zylrh['_sound']['onError'](lxt$g), k690b['_null'] = lxt$g;
      }
    }function lxt$g() {}a74_mv = lrhyfz['formatURL'](a74_mv), this['url'] = a74_mv, k690b['_audioCache'][a74_mv] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
      hx$ltg(), ma47c['loaded'] = !0x0, ma47c['event']('complete'), k690b['_audioCache'][ma47c['url']] = ma47c;
    }), this['_sound']['onError'](function (yfr4) {
      console['error']('errCode=' + yfr4['errCode'] + '  errMsg=' + yfr4['errMsg']), hx$ltg(), ma47c['event']('error');
    }), this['_sound']['src'] = a74_mv, ma47c = this);
  }, knqs['play'] = function (pmcoe, d9) {
    void 0x0 === pmcoe && (pmcoe = 0x0), void 0x0 === d9 && (d9 = 0x0), (aepcm = this['url'] == dk609['_tMusic'] ? (k690b['_musicAudio'] || (k690b['_musicAudio'] = k690b['_createSound']()), k690b['_musicAudio']) : k690b['_createSound']())['src'] = this['url'];var aepcm = new ui3jn(aepcm);return aepcm['url'] = this['url'], aepcm['loops'] = d9, aepcm['startTime'] = pmcoe, aepcm['play'](), dk609['addChannel'](aepcm), aepcm;
  }, knqs['dispose'] = function () {
    var suqj = k690b['_audioCache'][this['url']];suqj && (suqj['src'] = '', delete k690b['_audioCache'][this['url']]);
  }, k09sb6(0x0, knqs, 'duration', function () {
    return this['_sound']['duration'];
  }), k690b['_createSound'] = function () {
    return k690b['_id']++, b865d0['window']['wx']['createInnerAudioContext']();
  }, k690b['_musicAudio'] = null, k690b['_id'] = 0x0, k690b['_audioCache'] = {}, k690b['_null'] = void 0x0;var hvyfz = k690b;function k690b() {
    this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, k690b['__super']['call'](this), this['_sound'] = k690b['_createSound']();
  }var knqs;rvhzyf(jsnu3q, 'laya.wx.mini.MiniSoundChannel', xg$i3), (txi$lg = jsnu3q['prototype'])['__onEnd'] = function () {
    if (0x1 == this['loops']) return this['completeHandler'] && (ecoap['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
  }, txi$lg['__onNull'] = function () {}, txi$lg['play'] = function () {
    this['isStopped'] = !0x1, dk609['addChannel'](this), this['_audio'] && this['_audio']['play']();
  }, txi$lg['stop'] = function () {
    if (this['isStopped'] = !0x0, dk609['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
      if (this['_audio']['stop'](), null != jsnu3q['_null']) this['_audio']['onEnded'](jsnu3q['_null']);else try {
        this['_audio']['onEnded'](null), jsnu3q['_null'] = null;
      } catch (aco) {
        console['warn']('[wxmini] stop:' + aco), this['_audio']['onEnded'](b658d0['bind'](this['__onNull'], this)), jsnu3q['_null'] = b658d0['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }
  }, txi$lg['pause'] = function () {
    this['isStopped'] = !0x0, this['_audio']['pause']();
  }, txi$lg['resume'] = function () {
    this['_audio'] && (this['isStopped'] = !0x1, dk609['addChannel'](this), this['_audio']['play']());
  }, k09sb6(0x0, txi$lg, 'position', function () {
    return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
  }), k09sb6(0x0, txi$lg, 'duration', function () {
    return this['_audio'] ? this['_audio']['duration'] : 0x0;
  }), k09sb6(0x0, txi$lg, 'volume', function () {
    return 0x1;
  }, function ($j) {}), jsnu3q['_null'] = void 0x0;var ui3jn = jsnu3q;function jsnu3q(ns93q) {
    this['_audio'] = null, this['_onEnd'] = null, jsnu3q['__super']['call'](this), this['_audio'] = ns93q, this['_onEnd'] = b658d0['bind'](this['__onEnd'], this), ns93q['onEnded'](this['_onEnd']);
  }
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (o7_cm, us3qnj) {
  'use strict';

  for (var nk69us in Object['defineProperty'](us3qnj, '__esModule', { 'value': !0x0 }), Laya) {
    var lrhytz = Laya[nk69us];lrhytz && lrhytz['__isclass'] && (us3qnj[nk69us] = lrhytz);
  }
});