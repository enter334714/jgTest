var S = wx.$J;
!function (zf71n3, k4r_8t) {
  k4r_8t['un'], k4r_8t['uns'];var _38 = k4r_8t['static'],
      si$ah = k4r_8t['class'],
      $n7fz = k4r_8t['getset'];k4r_8t['__newvec'];var cqyp6 = laya['utils']['Browser'],
      g9265q = (laya['events']['Event'], laya['events']['EventDispatcher']),
      mvcpl = laya['resource']['HTMLImage'],
      $sizn = laya['utils']['Handler'],
      dg025j = laya['display']['Input'],
      s$n7z = laya['net']['Loader'];laya['maths']['Matrix'];var r8ou = laya['renders']['Render'],
      xroeku = laya['utils']['RunDriver'];laya['media']['Sound'];var z1n3 = laya['media']['SoundChannel'],
      kue8ro = laya['media']['SoundManager'],
      eor8u = (laya['display']['Stage'], laya['net']['URL']),
      o8uk = laya['utils']['Utils'],
      $f1n7 = (si$ah(sz$1ni, 'laya.wx.mini.MiniAdpter'), sz$1ni['getJson'] = function (hwj0ia) {
    return JSON['parse'](hwj0ia);
  }, sz$1ni['init'] = function (bpclmv, s17zn$) {
    void 0x0 === bpclmv && (bpclmv = !0x1), void 0x0 === s17zn$ && (s17zn$ = !0x1), sz$1ni['_inited'] || (sz$1ni['window'] = zf71n3)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (sz$1ni['_inited'] = !0x0, sz$1ni['isZiYu'] = s17zn$, sz$1ni['isPosMsgYu'] = bpclmv, sz$1ni['EnvConfig'] = {}, sz$1ni['isZiYu'] || (h0adwj['setNativeFileDir']('/layaairGame'), h0adwj['existDir'](h0adwj['fileNativeDir'], $sizn['create'](sz$1ni, sz$1ni['onMkdirCallBack']))), sz$1ni['window']['focus'] = function () {}, k4r_8t['getUrlPath'] = function () {}, sz$1ni['window']['logtime'] = function (tf_483) {}, sz$1ni['window']['alertTimeLog'] = function (f3_4t) {}, sz$1ni['window']['resetShareInfo'] = function () {}, sz$1ni['window']['CanvasRenderingContext2D'] = function () {}, sz$1ni['window']['CanvasRenderingContext2D']['prototype'] = sz$1ni['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], sz$1ni['window']['document']['body']['appendChild'] = function () {}, sz$1ni['EnvConfig']['pixelRatioInt'] = 0x0, xroeku['getPixelRatio'] = sz$1ni['pixelRatio'], sz$1ni['_preCreateElement'] = cqyp6['createElement'], cqyp6['createElement'] = sz$1ni['createElement'], xroeku['createShaderCondition'] = sz$1ni['createShaderCondition'], o8uk['parseXMLFromString'] = sz$1ni['parseXMLFromString'], dg025j['_createInputElement'] = winz$s['_createInputElement'], sz$1ni['EnvConfig']['load'] = s$n7z['prototype']['load'], s$n7z['prototype']['load'] = $nzwis['prototype']['load'], sz$1ni['isZiYu'] && bpclmv && wx['onMessage'](function (i0a) {
      i0a['isLoad'] && (h0adwj['ziyuFileData'][i0a['url']] = i0a['data']);
    }));
  }, sz$1ni['onMkdirCallBack'] = function (terk8_, lcp6y) {
    terk8_ || (h0adwj['filesListObj'] = JSON['parse'](lcp6y['data']));
  }, sz$1ni['pixelRatio'] = function () {
    if (!sz$1ni['EnvConfig']['pixelRatioInt']) try {
      var a0hd2j = wx['getSystemInfoSync']();return sz$1ni['EnvConfig']['pixelRatioInt'] = a0hd2j['pixelRatio'], a0hd2j['pixelRatio'];
    } catch (iwj0ha) {}return sz$1ni['EnvConfig']['pixelRatioInt'];
  }, sz$1ni['createElement'] = function (whai0) {
    var jwsha;if ('canvas' == whai0) return 0x1 == sz$1ni['idx'] ? sz$1ni['isZiYu'] ? (jwsha = sharedCanvas)['style'] = {} : jwsha = zf71n3['canvas'] : jwsha = zf71n3['wx']['createCanvas'](), sz$1ni['idx']++, jwsha;if ('textarea' == whai0 || 'input' == whai0) return sz$1ni['onCreateInput'](whai0);if ('div' != whai0) return sz$1ni['_preCreateElement'](whai0);return whai0 = sz$1ni['_preCreateElement'](whai0), (whai0['contains'] = function (urk8oe) {
      return null;
    }, whai0['removeChild'] = function (n71z$s) {}, whai0);
  }, sz$1ni['onCreateInput'] = function (sahi$) {
    return sahi$ = sz$1ni['_preCreateElement'](sahi$), (sahi$['focus'] = winz$s['wxinputFocus'], sahi$['blur'] = winz$s['wxinputblur'], sahi$['style'] = {}, sahi$['value'] = 0x0, sahi$['parentElement'] = {}, sahi$['placeholder'] = {}, sahi$['type'] = {}, sahi$['setColor'] = function (_r8t34) {}, sahi$['setType'] = function ($sn71z) {}, sahi$['setFontFace'] = function (azsi$) {}, sahi$['addEventListener'] = function (jda0w) {}, sahi$['contains'] = function (_3rt48) {
      return null;
    }, sahi$['removeChild'] = function (r_e8ok) {}, sahi$);
  }, sz$1ni['createShaderCondition'] = function (rexouk) {
    var _eko8r = this;return function () {
      return _eko8r[rexouk['replace']('this.', '')];
    };
  }, sz$1ni['EnvConfig'] = null, sz$1ni['window'] = null, sz$1ni['_preCreateElement'] = null, sz$1ni['_inited'] = !0x1, sz$1ni['wxRequest'] = null, sz$1ni['systemInfo'] = null, sz$1ni['version'] = '0.0.1', sz$1ni['isZiYu'] = !0x1, sz$1ni['isPosMsgYu'] = !0x1, sz$1ni['parseXMLFromString'] = function (aihsjw) {
    var cmlpy6;aihsjw = aihsjw['replace'](/>\s+</g, '><');try {
      cmlpy6 = new zf71n3['Parser']['DOMParser']()['parseFromString'](aihsjw, 'text/xml');
    } catch (wahsi$) {
      throw '需要引入xml解析库文件';
    }return cmlpy6;
  }, sz$1ni['idx'] = 0x1, sz$1ni);function sz$1ni() {}si$ah(q569g, 'laya.wx.mini.MiniImage'), q569g['prototype']['_loadImage'] = function (ypl6q) {
    var dj0awh = !0x1;-0x1 == ypl6q['indexOf']('layaNativeDir/') && (dj0awh = !0x0, ypl6q = eor8u['formatURL'](ypl6q)), h0adwj['getFileInfo'](ypl6q) ? q569g['onCreateImage'](ypl6q, this, !dj0awh) : -0x1 != ypl6q['indexOf']('http://') || -0x1 != ypl6q['indexOf']('https://') ? h0adwj['downImg'](ypl6q, new $sizn(q569g, q569g['onDownImgCallBack'], [ypl6q, this]), ypl6q) : q569g['onCreateImage'](ypl6q, this, !0x0);
  }, q569g['onDownImgCallBack'] = function (gp9yq, $n17, _ktr8) {
    _ktr8 ? $n17['onError'](null) : q569g['onCreateImage'](gp9yq, $n17);
  }, q569g['onCreateImage'] = function (s1$zn, uek8ro, vlbp) {
    var _4t83, gq2569;function jaswih() {
      gq2569['onload'] = null, gq2569['onerror'] = null, delete uek8ro['imgCache'][s1$zn];
    }_4t83 = (vlbp = void 0x0 === vlbp ? !0x1 : vlbp) ? s1$zn : (p6cmy = h0adwj['getFileInfo'](s1$zn)['md5'], h0adwj['getFileNativePath'](p6cmy)), null == uek8ro['imgCache'] && (uek8ro['imgCache'] = {}), vlbp = function () {
      jaswih(), uek8ro['onLoaded'](gq2569);
    };var p6cmy = function () {
      jaswih(), uek8ro['event']('error', 'Load image failed');
    };'nativeimage' == uek8ro['_type'] ? ((gq2569 = new cqyp6['window']['Image']())['crossOrigin'] = '', gq2569['onload'] = vlbp, gq2569['onerror'] = p6cmy, gq2569['src'] = _4t83, uek8ro['imgCache'][s1$zn] = gq2569) : new mvcpl['create'](_4t83, { 'onload': vlbp, 'onerror': p6cmy, 'onCreate': function (t8_kr4) {
        gq2569 = t8_kr4, uek8ro['imgCache'][s1$zn] = t8_kr4;
      } });
  };function q569g() {}var winz$s = (si$ah(y6lmc, 'laya.wx.mini.MiniInput'), y6lmc['_createInputElement'] = function () {
    dg025j['_initInput'](dg025j['area'] = cqyp6['createElement']('textarea')), dg025j['_initInput'](dg025j['input'] = cqyp6['createElement']('input')), dg025j['inputContainer'] = cqyp6['createElement']('div'), dg025j['inputContainer']['style']['position'] = 'absolute', dg025j['inputContainer']['style']['zIndex'] = 0x186a0, cqyp6['container']['appendChild'](dg025j['inputContainer']), dg025j['inputContainer']['setPos'] = function (sa$iz, zs1i) {
      dg025j['inputContainer']['style']['left'] = sa$iz + 'px', dg025j['inputContainer']['style']['top'] = zs1i + 'px';
    }, k4r_8t['stage']['on']('resize', null, y6lmc['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (swi$) {
      zf71n3['dispatchEvent'] && zf71n3['dispatchEvent']('resize');
    }), kue8ro['_soundClass'] = _7t3, kue8ro['_musicClass'] = _7t3;
  }, y6lmc['_onStageResize'] = function () {
    k4r_8t['stage']['_canvasTransform']['identity']()['scale'](cqyp6['width'] / r8ou['canvas']['width'] / xroeku['getPixelRatio'](), cqyp6['height'] / r8ou['canvas']['height'] / xroeku['getPixelRatio']());
  }, y6lmc['wxinputFocus'] = function (da2hj0) {
    var nfz71$ = dg025j['inputElement']['target'];nfz71$ && !nfz71$['editable'] || ($f1n7['window']['wx']['offKeyboardConfirm'](), $f1n7['window']['wx']['offKeyboardInput'](), $f1n7['window']['wx']['showKeyboard']({ 'defaultValue': nfz71$['text'], 'maxLength': nfz71$['maxChars'], 'multiple': nfz71$['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (lmypb) {}, 'fail': function (cplmbv) {} }), $f1n7['window']['wx']['onKeyboardConfirm'](function (t384f) {
      t384f = t384f ? t384f['value'] : '', (nfz71$['text'] = t384f, nfz71$['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), $f1n7['window']['wx']['onKeyboardInput'](function (f374n) {
      f374n = f374n ? f374n['value'] : '', nfz71$['multiline'] || -0x1 == f374n['indexOf']('\x0a') ? (nfz71$['text'] = f374n, nfz71$['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, y6lmc['inputEnter'] = function () {
    dg025j['inputElement']['target']['focus'] = !0x1;
  }, y6lmc['wxinputblur'] = function () {
    y6lmc['hideKeyboard']();
  }, y6lmc['hideKeyboard'] = function () {
    $f1n7['window']['wx']['offKeyboardConfirm'](), $f1n7['window']['wx']['offKeyboardInput'](), $f1n7['window']['wx']['hideKeyboard']({ 'success': function (jiw0ah) {
        console['log']('隐藏键盘');
      }, 'fail': function (ycl6m) {
        console['log']('隐藏键盘出错:' + (ycl6m ? ycl6m['errMsg'] : ''));
      } });
  }, y6lmc);function y6lmc() {}var $nzwis = function () {
    function ygp() {}si$ah(ygp, 'laya.wx.mini.MiniLoader');var qp6ylc = ygp['prototype'];return qp6ylc['load'] = function (ha$wis, j2h0d5, k8rt_, t4_kr8, eu8kor) {
      void 0x0 === k8rt_ && (k8rt_ = !0x0), void 0x0 === eu8kor && (eu8kor = !0x1);var mbcyl = this;0x0 === (mbcyl['_url'] = ha$wis)['indexOf']('data:image') ? mbcyl['_type'] = j2h0d5 = 'image' : mbcyl['_type'] = j2h0d5 = j2h0d5 || mbcyl['getTypeFromUrl'](ha$wis), mbcyl['_cache'] = k8rt_, mbcyl['_data'] = null;var n437f1 = 'ascii';-0x1 != ha$wis['indexOf']('.fnt') ? n437f1 = 'utf8' : 'arraybuffer' == j2h0d5 && (n437f1 = '');var oerk_ = o8uk['getFileExtension'](ha$wis);if (-0x1 != ygp['_fileTypeArr']['indexOf'](oerk_)) $f1n7['EnvConfig']['load']['call'](this, ha$wis, j2h0d5, k8rt_, t4_kr8, eu8kor);else {
        if (h0adwj['getFileInfo'](ha$wis)) $f1n7['EnvConfig']['load']['call'](this, ha$wis, j2h0d5, k8rt_, t4_kr8, eu8kor);else {
          if (-0x1 != ha$wis['indexOf']('layaNativeDir/')) {
            if ($f1n7['isZiYu']) {
              var ft483_ = h0adwj['ziyuFileData'][ha$wis];return void mbcyl['onLoaded'](ft483_);
            }return cosnole['log']('read read'), void h0adwj['read'](ha$wis, n437f1, new $sizn(ygp, ygp['onReadNativeCallBack'], [n437f1, ha$wis, j2h0d5, k8rt_, t4_kr8, eu8kor, mbcyl]));
          }ft483_ = '' == eor8u['rootPath'] ? ha$wis : ha$wis['split'](eor8u['rootPath'])[0x0], -0x1 != ha$wis['indexOf']('http://') || -0x1 != ha$wis['indexOf']('https://') ? $f1n7['EnvConfig']['load']['call'](mbcyl, ha$wis, j2h0d5, k8rt_, t4_kr8, eu8kor) : h0adwj['readFile'](ft483_, n437f1, new $sizn(ygp, ygp['onReadNativeCallBack'], [n437f1, ha$wis, j2h0d5, k8rt_, t4_kr8, eu8kor, mbcyl]), ha$wis);
        }
      }
    }, qp6ylc['resMgrLoad'] = function (zwni$, $1nzis, dwj, roe, f7n1$, mvplc, _tf) {
      void 0x0 === dwj && (dwj = 0x0), void 0x0 === roe && (roe = !0x1), void 0x0 === f7n1$ && (f7n1$ = !0x1), void 0x0 === mvplc && (mvplc = 0x0), void 0x0 === _tf && (_tf = 0x3), -0x1 != zwni$['indexOf']('mpack') && console['log']('=============resMgrLoad url:', zwni$), $f1n7['EnvConfig']['resMgrLoad'](zwni$, (ertk_8, f8t4_3, hwi$a) => {
        ygp['prototype']['resMgrLoadCallBack'](ertk_8, f8t4_3, hwi$a, $1nzis);
      }, dwj, roe, f7n1$, mvplc, _tf);
    }, qp6ylc['resMgrLoadCallBack'] = function (awd0, ruke8, t43_r, r4_8) {
      console['log']('buff:::', awd0, t43_r, h0adwj['fileNativeDir'] + '///' + h0adwj['fileListName']), r4_8(awd0, ruke8, t43_r);
    }, qp6ylc['clearRes'] = function (s1n$i, bmvcp) {
      this['clearRes'](s1n$i, bmvcp = void 0x0 === bmvcp ? !0x1 : bmvcp), bmvcp = h0adwj['getFileInfo'](s1n$i), !bmvcp || -0x1 == s1n$i['indexOf']('http://') && -0x1 == s1n$i['indexOf']('https://') || (bmvcp = bmvcp['md5'], bmvcp = h0adwj['getFileNativePath'](bmvcp), h0adwj['remove'](bmvcp));
    }, ygp['onReadNativeCallBack'] = function (_ret, wn$zi, a0jh2, g0d2j, vlbmpc, ahjs, bpcly, siajw, rueoxk) {
      void 0x0 === g0d2j && (g0d2j = !0x0), void 0x0 === ahjs && (ahjs = !0x1), (siajw = void 0x0 === siajw ? 0x0 : siajw) ? 0x1 == siajw && $f1n7['EnvConfig']['load']['call'](bpcly, wn$zi, a0jh2, g0d2j, vlbmpc, ahjs) : (rueoxk = 'json' == a0jh2 || 'atlas' == a0jh2 ? $f1n7['getJson'](rueoxk['data']) : 'xml' == a0jh2 ? o8uk['parseXMLFromString'](rueoxk['data']) : rueoxk['data'], bpcly['onLoaded'](rueoxk), !$f1n7['isZiYu'] && $f1n7['isPosMsgYu'] && 'arraybuffer' != a0jh2 && wx['postMessage']({ 'url': wn$zi, 'data': rueoxk, 'isLoad': !0x0 }));
    }, _38(ygp, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ygp;
  }(),
      h0adwj = (si$ah(swhj, 'laya.wx.mini.MiniFileMgr', g9265q), swhj['isLoadFile'] = function (y9c6p) {
    return -0x1 != swhj['_fileTypeArr']['indexOf'](y9c6p);
  }, swhj['getFileInfo'] = function (s$n71) {
    return s$n71 = s$n71['split']('?')[0x0], s$n71 = swhj['filesListObj'][s$n71], null == s$n71 ? null : s$n71;
  }, swhj['onFileUpdate'] = function (h20ad, f731t4) {
    var oe_ = h20ad['split']('/');h20ad = oe_[oe_['length'] - 0x1], oe_ = swhj['getFileInfo'](f731t4), null == oe_ ? swhj['onSaveFile'](f731t4, h20ad) : oe_['readyUrl'] != f731t4 && swhj['remove'](h20ad, f731t4);
  }, swhj['exits'] = function (y6ml, vclp) {
    y6ml = swhj['getFileNativePath'](y6ml), swhj['fs']['getFileInfo']({ 'filePath': y6ml, 'success': function (ypg6q9) {
        null != vclp && vclp['runWith']([0x0, ypg6q9]);
      }, 'fail': function (iz1ns) {
        null != vclp && vclp['runWith']([0x1, iz1ns]);
      } });
  }, swhj['read'] = function (xkoe, s1zi$, n1f43, wsjhi) {
    void 0x0 === s1zi$ && (s1zi$ = 'ascill'), xkoe = '' != (wsjhi = void 0x0 === wsjhi ? '' : wsjhi) ? swhj['getFileNativePath'](xkoe) : xkoe, swhj['fs']['readFile']({ 'filePath': xkoe, 'encoding': s1zi$, 'success': function (g5yq69) {
        null != n1f43 && n1f43['runWith']([0x0, g5yq69]);
      }, 'fail': function (d20g59) {
        d20g59 && '' != wsjhi ? swhj['down'](wsjhi, s1zi$, n1f43, wsjhi) : null != n1f43 && n1f43['runWith']([0x1]);
      } });
  }, swhj['readNativeFile'] = function (sn1i$z, plybcm) {
    swhj['fs']['readFile']({ 'filePath': sn1i$z, 'encoding': '', 'success': function (lycq6p) {
        null != plybcm && plybcm['runWith']([0x0]);
      }, 'fail': function (r_t43) {
        null != plybcm && plybcm['runWith']([0x1]);
      } });
  }, swhj['down'] = function (dj520, jd5h20, zi1sn, g5d902) {
    void 0x0 === jd5h20 && (jd5h20 = 'ascill'), void 0x0 === g5d902 && (g5d902 = '');var $nf17 = swhj['getFileNativePath'](g5d902);swhj['wxdown']({ 'url': dj520, 'filePath': $nf17, 'success': function (f1) {
        0xc8 === f1['statusCode'] && swhj['readFile'](f1['filePath'], jd5h20, zi1sn, g5d902);
      }, 'fail': function (yclm6) {
        null != zi1sn && zi1sn['runWith']([0x1, yclm6]);
      } })['onProgressUpdate'](function (lyq6cp) {
      null != zi1sn && zi1sn['runWith']([0x2, lyq6cp['progress']]);
    });
  }, swhj['readFile'] = function (r8_43t, w0aijh, r4t_k8, zwins) {
    void 0x0 === zwins && (zwins = ''), swhj['fs']['readFile']({ 'filePath': r8_43t, 'encoding': w0aijh = void 0x0 === w0aijh ? 'ascill' : w0aijh, 'success': function (s7z1n) {
        -0x1 == r8_43t['indexOf']('http://') && -0x1 == r8_43t['indexOf']('https://') || swhj['onFileUpdate'](r8_43t, zwins), null != r4t_k8 && r4t_k8['runWith']([0x0, s7z1n]);
      }, 'fail': function (h25) {
        h25 && null != r4t_k8 && r4t_k8['runWith']([0x1, h25]);
      } });
  }, swhj['downImg'] = function (y569g, e_tk8, $zasi) {
    void 0x0 === $zasi && ($zasi = ''), swhj['wxdown']({ 'url': y569g, 'success': function (zi) {
        0xc8 === zi['statusCode'] && swhj['copyFile'](zi['tempFilePath'], $zasi, e_tk8);
      }, 'fail': function (wisaz) {
        null != e_tk8 && e_tk8['runWith']([0x1, wisaz]);
      } });
  }, swhj['copyFile'] = function (fn$7z1, ktre, wasih) {
    var yg56q9 = fn$7z1['split']('/'),
        ybpm = yg56q9[yg56q9['length'] - 0x1];ktre['split']('?')[0x0];var t84_r = swhj['getFileInfo'](ktre);yg56q9 = swhj['getFileNativePath'](ybpm), swhj['fs']['copyFile']({ 'srcPath': fn$7z1, 'destPath': yg56q9, 'success': function (t8erk) {
        t84_r ? t84_r['readyUrl'] != ktre && swhj['remove'](ybpm, ktre, wasih) : (swhj['onSaveFile'](ktre, ybpm), null != wasih && wasih['runWith']([0x0]));
      }, 'fail': function (ybcl) {
        null != wasih && wasih['runWith']([0x1, ybcl]);
      } });
  }, swhj['getFileNativePath'] = function (tr8_4) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + tr8_4;
  }, swhj['remove'] = function (cblmyp, adj0h2, si1zn$) {
    void 0x0 === adj0h2 && (adj0h2 = '');var aih$ws = swhj['getFileInfo'](adj0h2),
        uxko = swhj['getFileNativePath'](aih$ws['md5']);k4r_8t['loader']['clearRes'](aih$ws['readyUrl']), swhj['fs']['unlink']({ 'filePath': uxko, 'success': function (haswij) {
        '' != adj0h2 && swhj['onSaveFile'](adj0h2, cblmyp), null != si1zn$ && si1zn$['runWith']([0x0]);
      }, 'fail': function (hi0ajw) {} });
  }, swhj['onSaveFile'] = function (z71sn, qc9y) {
    var y5gq = z71sn['split']('?')[0x0];swhj['filesListObj'][y5gq] = { 'md5': qc9y, 'readyUrl': z71sn }, swhj['fs']['writeFile']({ 'filePath': swhj['fileNativeDir'] + '/' + swhj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](swhj['filesListObj']), 'success': function (okr8_e) {
        console['log']('写入测试测试成功：', okr8_e);
      }, 'fail': function (pvlcm) {
        console['log']('写入测试测试失败：', pvlcm);
      } });
  }, swhj['existDir'] = function (_8kret, pcvlbm) {
    swhj['fs']['mkdir']({ 'dirPath': _8kret, 'success': function (clypb) {
        null != pcvlbm && pcvlbm['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (j0dh2a) {
        -0x1 != j0dh2a['errMsg']['indexOf']('file already exists') ? swhj['readSync'](swhj['fileListName'], 'utf8', pcvlbm) : null != pcvlbm && pcvlbm['runWith']([0x1, j0dh2a]);
      } });
  }, swhj['readSync'] = function (j02a, s7z1n$, gd529q, z71f) {
    void 0x0 === s7z1n$ && (s7z1n$ = 'ascill'), void 0x0 === z71f && (z71f = ''), j02a = swhj['getFileNativePath'](j02a);var yl6cmp;try {
      yl6cmp = swhj['fs']['readFileSync'](j02a), null != gd529q && gd529q['runWith']([0x0, { 'data': yl6cmp }]);
    } catch (ah0dj) {
      null != gd529q && gd529q['runWith']([0x1]);
    }
  }, swhj['readCache'] = function () {}, swhj['writeCache'] = function (ypl6qc) {
    var _ret8 = readyUrl['split']('?')[0x0];swhj['filesListObj'][_ret8] = { 'md5': md5Name, 'readyUrl': readyUrl }, swhj['fs']['writeFile']({ 'filePath': swhj['fileNativeDir'] + '/' + swhj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](swhj['filesListObj']), 'success': function (jsaiw) {}, 'fail': function (_8f43t) {} });
  }, swhj['setNativeFileDir'] = function (dj2g) {
    swhj['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + dj2g;
  }, swhj['filesListObj'] = {}, swhj['fileNativeDir'] = null, swhj['fileListName'] = 'layaairfiles.txt', swhj['ziyuFileData'] = {}, _38(swhj, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), swhj);function swhj() {
    swhj['__super']['call'](this);
  }var _7t3 = function () {
    function cy6p9() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, cy6p9['__super']['call'](this), this['_sound'] = cy6p9['_createSound']();
    }si$ah(cy6p9, 'laya.wx.mini.MiniSound', g9265q);var f843_ = cy6p9['prototype'];return f843_['load'] = function (r34t8) {
      var t8_34r = this,
          t3f147;function jawshi() {
        if (null != cy6p9['_null']) t8_34r['_sound']['onCanplay'](cy6p9['_null']), t8_34r['_sound']['onError'](cy6p9['_null']);else try {
          t8_34r['_sound']['onCanplay'](null), t8_34r['_sound']['onError'](null), cy6p9['_null'] = null;
        } catch (f173n) {
          console['warn']('[wxmini] _clearSound:' + f173n), t8_34r['_sound']['onCanplay'](vbpcm), t8_34r['_sound']['onError'](vbpcm), cy6p9['_null'] = vbpcm;
        }
      }function vbpcm() {}r34t8 = eor8u['formatURL'](r34t8), this['url'] = r34t8, cy6p9['_audioCache'][r34t8] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        jawshi(), t3f147['loaded'] = !0x0, t3f147['event']('complete'), cy6p9['_audioCache'][t3f147['url']] = t3f147;
      }), this['_sound']['onError'](function (f384_) {
        console['error']('errCode=' + f384_['errCode'] + '  errMsg=' + f384_['errMsg']), jawshi(), t3f147['event']('error');
      }), this['_sound']['src'] = r34t8, t3f147 = this);
    }, f843_['play'] = function ($n7s1, gq569) {
      void 0x0 === $n7s1 && ($n7s1 = 0x0), void 0x0 === gq569 && (gq569 = 0x0), ($wzias = this['url'] == kue8ro['_tMusic'] ? (cy6p9['_musicAudio'] || (cy6p9['_musicAudio'] = cy6p9['_createSound']()), cy6p9['_musicAudio']) : cy6p9['_createSound']())['src'] = this['url'];var $wzias = new j52dh0($wzias);return $wzias['url'] = this['url'], $wzias['loops'] = gq569, $wzias['startTime'] = $n7s1, $wzias['play'](), kue8ro['addChannel']($wzias), $wzias;
    }, f843_['dispose'] = function () {
      var cvlpbm = cy6p9['_audioCache'][this['url']];cvlpbm && (cvlpbm['src'] = '', delete cy6p9['_audioCache'][this['url']]);
    }, $n7fz(0x0, f843_, 'duration', function () {
      return this['_sound']['duration'];
    }), cy6p9['_createSound'] = function () {
      return cy6p9['_id']++, $f1n7['window']['wx']['createInnerAudioContext']();
    }, cy6p9['_musicAudio'] = null, cy6p9['_id'] = 0x0, cy6p9['_audioCache'] = {}, cy6p9['_null'] = void 0x0, cy6p9;
  }(),
      j52dh0 = function () {
    function eu8okr(iwh0aj) {
      this['_audio'] = null, this['_onEnd'] = null, eu8okr['__super']['call'](this), this['_audio'] = iwh0aj, this['_onEnd'] = o8uk['bind'](this['__onEnd'], this), iwh0aj['onEnded'](this['_onEnd']);
    }si$ah(eu8okr, 'laya.wx.mini.MiniSoundChannel', z1n3);var krexo = eu8okr['prototype'];return krexo['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (k4r_8t['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, krexo['__onNull'] = function () {}, krexo['play'] = function () {
      this['isStopped'] = !0x1, kue8ro['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, krexo['stop'] = function () {
      if (this['isStopped'] = !0x0, kue8ro['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != eu8okr['_null']) this['_audio']['onEnded'](eu8okr['_null']);else try {
          this['_audio']['onEnded'](null), eu8okr['_null'] = null;
        } catch (d20j5) {
          console['warn']('[wxmini] stop:' + d20j5), this['_audio']['onEnded'](o8uk['bind'](this['__onNull'], this)), eu8okr['_null'] = o8uk['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, krexo['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, krexo['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, kue8ro['addChannel'](this), this['_audio']['play']());
    }, $n7fz(0x0, krexo, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), $n7fz(0x0, krexo, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), $n7fz(0x0, krexo, 'volume', function () {
      return 0x1;
    }, function (lbpvc) {}), eu8okr['_null'] = void 0x0, eu8okr;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (f47_3, tr8k) {
  'use strict';

  for (var azws$ in Object['defineProperty'](tr8k, '__esModule', { 'value': !0x0 }), Laya) {
    var iswhaj = Laya[azws$];iswhaj && iswhaj['__isclass'] && (tr8k[azws$] = iswhaj);
  }
});