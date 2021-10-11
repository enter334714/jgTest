var p = wx.$h;
!function (f62z, bsnpd) {
  bsnpd['un'], bsnpd['uns'];var fk2tjz = bsnpd['static'],
      t_1x$ = bsnpd['class'],
      z26fkj = bsnpd['getset'];bsnpd['__newvec'];var $tfx = laya['utils']['Browser'],
      g8rcy3 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      dwsbnp = laya['resource']['HTMLImage'],
      faj26k = laya['utils']['Handler'],
      srdb = laya['display']['Input'],
      jzx = laya['net']['Loader'];laya['maths']['Matrix'];var $i_1mv = laya['renders']['Render'],
      x_$m = laya['utils']['RunDriver'];laya['media']['Sound'];var m9_i = laya['media']['SoundChannel'],
      jfzk2t = laya['media']['SoundManager'],
      _i1m = (laya['display']['Stage'], laya['net']['URL']),
      c038 = laya['utils']['Utils'],
      nwcrds = (t_1x$(g9o5v, 'laya.wx.mini.MiniAdpter'), g9o5v['getJson'] = function (nswrc) {
    return JSON['parse'](nswrc);
  }, g9o5v['init'] = function (go905v, z2k) {
    void 0x0 === go905v && (go905v = !0x1), void 0x0 === z2k && (z2k = !0x1), g9o5v['_inited'] || (g9o5v['window'] = f62z)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (g9o5v['_inited'] = !0x0, g9o5v['isZiYu'] = z2k, g9o5v['isPosMsgYu'] = go905v, g9o5v['EnvConfig'] = {}, g9o5v['isZiYu'] || (xt_$z['setNativeFileDir']('/layaairGame'), xt_$z['existDir'](xt_$z['fileNativeDir'], faj26k['create'](g9o5v, g9o5v['onMkdirCallBack']))), g9o5v['window']['focus'] = function () {}, bsnpd['getUrlPath'] = function () {}, g9o5v['window']['logtime'] = function (hqa64) {}, g9o5v['window']['alertTimeLog'] = function (nbwds) {}, g9o5v['window']['resetShareInfo'] = function () {}, g9o5v['window']['CanvasRenderingContext2D'] = function () {}, g9o5v['window']['CanvasRenderingContext2D']['prototype'] = g9o5v['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], g9o5v['window']['document']['body']['appendChild'] = function () {}, g9o5v['EnvConfig']['pixelRatioInt'] = 0x0, x_$m['getPixelRatio'] = g9o5v['pixelRatio'], g9o5v['_preCreateElement'] = $tfx['createElement'], $tfx['createElement'] = g9o5v['createElement'], x_$m['createShaderCondition'] = g9o5v['createShaderCondition'], c038['parseXMLFromString'] = g9o5v['parseXMLFromString'], srdb['_createInputElement'] = crnds['_createInputElement'], g9o5v['EnvConfig']['load'] = jzx['prototype']['load'], jzx['prototype']['load'] = scy3r['prototype']['load'], g9o5v['isZiYu'] && go905v && wx['onMessage'](function (a624kq) {
      a624kq['isLoad'] && (xt_$z['ziyuFileData'][a624kq['url']] = a624kq['data']);
    }));
  }, g9o5v['onMkdirCallBack'] = function (kqah4, mo_v9i) {
    kqah4 || (xt_$z['filesListObj'] = JSON['parse'](mo_v9i['data']));
  }, g9o5v['pixelRatio'] = function () {
    if (!g9o5v['EnvConfig']['pixelRatioInt']) try {
      var swdbnr = wx['getSystemInfoSync']();return g9o5v['EnvConfig']['pixelRatioInt'] = swdbnr['pixelRatio'], swdbnr['pixelRatio'];
    } catch (z2f) {}return g9o5v['EnvConfig']['pixelRatioInt'];
  }, g9o5v['createElement'] = function (miv9o5) {
    var c8yg30;if ('canvas' == miv9o5) return 0x1 == g9o5v['idx'] ? g9o5v['isZiYu'] ? (c8yg30 = sharedCanvas)['style'] = {} : c8yg30 = f62z['canvas'] : c8yg30 = f62z['wx']['createCanvas'](), g9o5v['idx']++, c8yg30;if ('textarea' == miv9o5 || 'input' == miv9o5) return g9o5v['onCreateInput'](miv9o5);if ('div' != miv9o5) return g9o5v['_preCreateElement'](miv9o5);return miv9o5 = g9o5v['_preCreateElement'](miv9o5), (miv9o5['contains'] = function (fzj6) {
      return null;
    }, miv9o5['removeChild'] = function (y85g) {}, miv9o5);
  }, g9o5v['onCreateInput'] = function (h46akq) {
    return h46akq = g9o5v['_preCreateElement'](h46akq), (h46akq['focus'] = crnds['wxinputFocus'], h46akq['blur'] = crnds['wxinputblur'], h46akq['style'] = {}, h46akq['value'] = 0x0, h46akq['parentElement'] = {}, h46akq['placeholder'] = {}, h46akq['type'] = {}, h46akq['setColor'] = function (bpn7l) {}, h46akq['setType'] = function (kfjzt) {}, h46akq['setFontFace'] = function (cwsrd) {}, h46akq['addEventListener'] = function (c03y) {}, h46akq['contains'] = function ($zxtj1) {
      return null;
    }, h46akq['removeChild'] = function (swndc) {}, h46akq);
  }, g9o5v['createShaderCondition'] = function ($x_it1) {
    var vm0o95 = this;return function () {
      return vm0o95[$x_it1['replace']('this.', '')];
    };
  }, g9o5v['EnvConfig'] = null, g9o5v['window'] = null, g9o5v['_preCreateElement'] = null, g9o5v['_inited'] = !0x1, g9o5v['wxRequest'] = null, g9o5v['systemInfo'] = null, g9o5v['version'] = '0.0.1', g9o5v['isZiYu'] = !0x1, g9o5v['isPosMsgYu'] = !0x1, g9o5v['parseXMLFromString'] = function (ak462) {
    var c308;ak462 = ak462['replace'](/>\s+</g, '><');try {
      c308 = new f62z['Parser']['DOMParser']()['parseFromString'](ak462, 'text/xml');
    } catch (wdrb) {
      throw '需要引入xml解析库文件';
    }return c308;
  }, g9o5v['idx'] = 0x1, g9o5v);function g9o5v() {}t_1x$(mi5v, 'laya.wx.mini.MiniImage'), mi5v['prototype']['_loadImage'] = function (qakh4) {
    var jt2z = !0x1;-0x1 == qakh4['indexOf']('layaNativeDir/') && (jt2z = !0x0, qakh4 = _i1m['formatURL'](qakh4)), xt_$z['getFileInfo'](qakh4) ? mi5v['onCreateImage'](qakh4, this, !jt2z) : -0x1 != qakh4['indexOf']('http://') || -0x1 != qakh4['indexOf']('https://') ? xt_$z['downImg'](qakh4, new faj26k(mi5v, mi5v['onDownImgCallBack'], [qakh4, this]), qakh4) : mi5v['onCreateImage'](qakh4, this, !0x0);
  }, mi5v['onDownImgCallBack'] = function (y9go0, c0g38, ztf$) {
    ztf$ ? c0g38['onError'](null) : mi5v['onCreateImage'](y9go0, c0g38);
  }, mi5v['onCreateImage'] = function (oi95v, z1jt$, yrg38) {
    var wdcrs, spwnb;function cs8dwr() {
      spwnb['onload'] = null, spwnb['onerror'] = null, delete z1jt$['imgCache'][oi95v];
    }wdcrs = (yrg38 = void 0x0 === yrg38 ? !0x1 : yrg38) ? oi95v : (yo509 = xt_$z['getFileInfo'](oi95v)['md5'], xt_$z['getFileNativePath'](yo509)), null == z1jt$['imgCache'] && (z1jt$['imgCache'] = {}), yrg38 = function () {
      cs8dwr(), z1jt$['onLoaded'](spwnb);
    };var yo509 = function () {
      cs8dwr(), z1jt$['event']('error', 'Load image failed');
    };'nativeimage' == z1jt$['_type'] ? ((spwnb = new $tfx['window']['Image']())['crossOrigin'] = '', spwnb['onload'] = yrg38, spwnb['onerror'] = yo509, spwnb['src'] = wdcrs, z1jt$['imgCache'][oi95v] = spwnb) : new dwsbnp['create'](wdcrs, { 'onload': yrg38, 'onerror': yo509, 'onCreate': function (c8rys) {
        spwnb = c8rys, z1jt$['imgCache'][oi95v] = c8rys;
      } });
  };function mi5v() {}var crnds = (t_1x$(y9350g, 'laya.wx.mini.MiniInput'), y9350g['_createInputElement'] = function () {
    srdb['_initInput'](srdb['area'] = $tfx['createElement']('textarea')), srdb['_initInput'](srdb['input'] = $tfx['createElement']('input')), srdb['inputContainer'] = $tfx['createElement']('div'), srdb['inputContainer']['style']['position'] = 'absolute', srdb['inputContainer']['style']['zIndex'] = 0x186a0, $tfx['container']['appendChild'](srdb['inputContainer']), srdb['inputContainer']['setPos'] = function (nswdcr, f62ajk) {
      srdb['inputContainer']['style']['left'] = nswdcr + 'px', srdb['inputContainer']['style']['top'] = f62ajk + 'px';
    }, bsnpd['stage']['on']('resize', null, y9350g['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ix_1) {
      f62z['dispatchEvent'] && f62z['dispatchEvent']('resize');
    }), jfzk2t['_soundClass'] = yr3s8, jfzk2t['_musicClass'] = yr3s8;
  }, y9350g['_onStageResize'] = function () {
    bsnpd['stage']['_canvasTransform']['identity']()['scale']($tfx['width'] / $i_1mv['canvas']['width'] / x_$m['getPixelRatio'](), $tfx['height'] / $i_1mv['canvas']['height'] / x_$m['getPixelRatio']());
  }, y9350g['wxinputFocus'] = function (bpndw7) {
    var rcndws = srdb['inputElement']['target'];rcndws && !rcndws['editable'] || (nwcrds['window']['wx']['offKeyboardConfirm'](), nwcrds['window']['wx']['offKeyboardInput'](), nwcrds['window']['wx']['showKeyboard']({ 'defaultValue': rcndws['text'], 'maxLength': rcndws['maxChars'], 'multiple': rcndws['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (xj2) {}, 'fail': function (c3gy8r) {} }), nwcrds['window']['wx']['onKeyboardConfirm'](function (io95v) {
      io95v = io95v ? io95v['value'] : '', (rcndws['text'] = io95v, rcndws['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), nwcrds['window']['wx']['onKeyboardInput'](function (qa4) {
      qa4 = qa4 ? qa4['value'] : '', rcndws['multiline'] || -0x1 == qa4['indexOf']('\x0a') ? (rcndws['text'] = qa4, rcndws['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, y9350g['inputEnter'] = function () {
    srdb['inputElement']['target']['focus'] = !0x1;
  }, y9350g['wxinputblur'] = function () {
    y9350g['hideKeyboard']();
  }, y9350g['hideKeyboard'] = function () {
    nwcrds['window']['wx']['offKeyboardConfirm'](), nwcrds['window']['wx']['offKeyboardInput'](), nwcrds['window']['wx']['hideKeyboard']({ 'success': function ($xt_1z) {
        console['log']('隐藏键盘');
      }, 'fail': function (sdpbnw) {
        console['log']('隐藏键盘出错:' + (sdpbnw ? sdpbnw['errMsg'] : ''));
      } });
  }, y9350g);function y9350g() {}var scy3r = function () {
    function $ix_() {}t_1x$($ix_, 'laya.wx.mini.MiniLoader');var epnw = $ix_['prototype'];return epnw['load'] = function (bew7pn, dwsbn, _$zx1t, xzf, drncw) {
      void 0x0 === _$zx1t && (_$zx1t = !0x0), void 0x0 === drncw && (drncw = !0x1);var dwrcn = this;0x0 === (dwrcn['_url'] = bew7pn)['indexOf']('data:image') ? dwrcn['_type'] = dwsbn = 'image' : dwrcn['_type'] = dwsbn = dwsbn || dwrcn['getTypeFromUrl'](bew7pn), dwrcn['_cache'] = _$zx1t, dwrcn['_data'] = null;var rg3y8 = 'ascii';-0x1 != bew7pn['indexOf']('.fnt') ? rg3y8 = 'utf8' : 'arraybuffer' == dwsbn && (rg3y8 = '');var rnbdws = c038['getFileExtension'](bew7pn);if (-0x1 != $ix_['_fileTypeArr']['indexOf'](rnbdws)) nwcrds['EnvConfig']['load']['call'](this, bew7pn, dwsbn, _$zx1t, xzf, drncw);else {
        if (xt_$z['getFileInfo'](bew7pn)) nwcrds['EnvConfig']['load']['call'](this, bew7pn, dwsbn, _$zx1t, xzf, drncw);else {
          if (-0x1 != bew7pn['indexOf']('layaNativeDir/')) {
            if (nwcrds['isZiYu']) {
              var dpnsbw = xt_$z['ziyuFileData'][bew7pn];return void dwrcn['onLoaded'](dpnsbw);
            }return cosnole['log']('read read'), void xt_$z['read'](bew7pn, rg3y8, new faj26k($ix_, $ix_['onReadNativeCallBack'], [rg3y8, bew7pn, dwsbn, _$zx1t, xzf, drncw, dwrcn]));
          }dpnsbw = '' == _i1m['rootPath'] ? bew7pn : bew7pn['split'](_i1m['rootPath'])[0x0], -0x1 != bew7pn['indexOf']('http://') || -0x1 != bew7pn['indexOf']('https://') ? nwcrds['EnvConfig']['load']['call'](dwrcn, bew7pn, dwsbn, _$zx1t, xzf, drncw) : xt_$z['readFile'](dpnsbw, rg3y8, new faj26k($ix_, $ix_['onReadNativeCallBack'], [rg3y8, bew7pn, dwsbn, _$zx1t, xzf, drncw, dwrcn]), bew7pn);
        }
      }
    }, epnw['resMgrLoad'] = function (a4hq6k, pwds, y83gc, i1x$_t, t_i$1, rcswn, xfjt$) {
      void 0x0 === y83gc && (y83gc = 0x0), void 0x0 === i1x$_t && (i1x$_t = !0x1), void 0x0 === t_i$1 && (t_i$1 = !0x1), void 0x0 === rcswn && (rcswn = 0x0), void 0x0 === xfjt$ && (xfjt$ = 0x3), -0x1 != a4hq6k['indexOf']('mpack') && console['log']('=============resMgrLoad url:', a4hq6k), nwcrds['EnvConfig']['resMgrLoad'](a4hq6k, (bndwp, iom5, d8swrc) => {
        $ix_['prototype']['resMgrLoadCallBack'](bndwp, iom5, d8swrc, pwds);
      }, y83gc, i1x$_t, t_i$1, rcswn, xfjt$);
    }, epnw['resMgrLoadCallBack'] = function (_$1mxi, eb7lnp, bndpw, b7nlpe) {
      console['log']('buff:::', _$1mxi, bndpw, xt_$z['fileNativeDir'] + '///' + xt_$z['fileListName']), b7nlpe(_$1mxi, eb7lnp, bndpw);
    }, epnw['clearRes'] = function (bpwnd7, v5go09) {
      this['clearRes'](bpwnd7, v5go09 = void 0x0 === v5go09 ? !0x1 : v5go09), v5go09 = xt_$z['getFileInfo'](bpwnd7), !v5go09 || -0x1 == bpwnd7['indexOf']('http://') && -0x1 == bpwnd7['indexOf']('https://') || (v5go09 = v5go09['md5'], v5go09 = xt_$z['getFileNativePath'](v5go09), xt_$z['remove'](v5go09));
    }, $ix_['onReadNativeCallBack'] = function ($1mxi, _1$z, wrndsc, y0g59o, gy09o5, y5380g, rnwdbs, oi_v9, nsrdwc) {
      void 0x0 === y0g59o && (y0g59o = !0x0), void 0x0 === y5380g && (y5380g = !0x1), (oi_v9 = void 0x0 === oi_v9 ? 0x0 : oi_v9) ? 0x1 == oi_v9 && nwcrds['EnvConfig']['load']['call'](rnwdbs, _1$z, wrndsc, y0g59o, gy09o5, y5380g) : (nsrdwc = 'json' == wrndsc || 'atlas' == wrndsc ? nwcrds['getJson'](nsrdwc['data']) : 'xml' == wrndsc ? c038['parseXMLFromString'](nsrdwc['data']) : nsrdwc['data'], rnwdbs['onLoaded'](nsrdwc), !nwcrds['isZiYu'] && nwcrds['isPosMsgYu'] && 'arraybuffer' != wrndsc && wx['postMessage']({ 'url': _1$z, 'data': nsrdwc, 'isLoad': !0x0 }));
    }, fk2tjz($ix_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), $ix_;
  }(),
      xt_$z = (t_1x$(hak46, 'laya.wx.mini.MiniFileMgr', g8rcy3), hak46['isLoadFile'] = function (o05gv9) {
    return -0x1 != hak46['_fileTypeArr']['indexOf'](o05gv9);
  }, hak46['getFileInfo'] = function (m_1x) {
    return m_1x = m_1x['split']('?')[0x0], m_1x = hak46['filesListObj'][m_1x], null == m_1x ? null : m_1x;
  }, hak46['onFileUpdate'] = function (qah6k, ewpnb7) {
    var fzkt2j = qah6k['split']('/');qah6k = fzkt2j[fzkt2j['length'] - 0x1], fzkt2j = hak46['getFileInfo'](ewpnb7), null == fzkt2j ? hak46['onSaveFile'](ewpnb7, qah6k) : fzkt2j['readyUrl'] != ewpnb7 && hak46['remove'](qah6k, ewpnb7);
  }, hak46['exits'] = function (v0g, bpwen7) {
    v0g = hak46['getFileNativePath'](v0g), hak46['fs']['getFileInfo']({ 'filePath': v0g, 'success': function ($mv1_i) {
        null != bpwen7 && bpwen7['runWith']([0x0, $mv1_i]);
      }, 'fail': function (jkzf6) {
        null != bpwen7 && bpwen7['runWith']([0x1, jkzf6]);
      } });
  }, hak46['read'] = function (kqh6a4, nwp, wcnrd, fzx$) {
    void 0x0 === nwp && (nwp = 'ascill'), kqh6a4 = '' != (fzx$ = void 0x0 === fzx$ ? '' : fzx$) ? hak46['getFileNativePath'](kqh6a4) : kqh6a4, hak46['fs']['readFile']({ 'filePath': kqh6a4, 'encoding': nwp, 'success': function (tx_) {
        null != wcnrd && wcnrd['runWith']([0x0, tx_]);
      }, 'fail': function (wrsbdn) {
        wrsbdn && '' != fzx$ ? hak46['down'](fzx$, nwp, wcnrd, fzx$) : null != wcnrd && wcnrd['runWith']([0x1]);
      } });
  }, hak46['readNativeFile'] = function (pb7eln, wpneb7) {
    hak46['fs']['readFile']({ 'filePath': pb7eln, 'encoding': '', 'success': function (zjk62f) {
        null != wpneb7 && wpneb7['runWith']([0x0]);
      }, 'fail': function (v1o) {
        null != wpneb7 && wpneb7['runWith']([0x1]);
      } });
  }, hak46['down'] = function (dbsrwn, im1_$, ds3r8, $m_v) {
    void 0x0 === im1_$ && (im1_$ = 'ascill'), void 0x0 === $m_v && ($m_v = '');var mo95i = hak46['getFileNativePath']($m_v);hak46['wxdown']({ 'url': dbsrwn, 'filePath': mo95i, 'success': function (rsd8w) {
        0xc8 === rsd8w['statusCode'] && hak46['readFile'](rsd8w['filePath'], im1_$, ds3r8, $m_v);
      }, 'fail': function (x1$ti_) {
        null != ds3r8 && ds3r8['runWith']([0x1, x1$ti_]);
      } })['onProgressUpdate'](function (rcd3s8) {
      null != ds3r8 && ds3r8['runWith']([0x2, rcd3s8['progress']]);
    });
  }, hak46['readFile'] = function (rdsn, d8crws, v950o, z$j1t) {
    void 0x0 === z$j1t && (z$j1t = ''), hak46['fs']['readFile']({ 'filePath': rdsn, 'encoding': d8crws = void 0x0 === d8crws ? 'ascill' : d8crws, 'success': function (f2ktz) {
        -0x1 == rdsn['indexOf']('http://') && -0x1 == rdsn['indexOf']('https://') || hak46['onFileUpdate'](rdsn, z$j1t), null != v950o && v950o['runWith']([0x0, f2ktz]);
      }, 'fail': function ($xtjfz) {
        $xtjfz && null != v950o && v950o['runWith']([0x1, $xtjfz]);
      } });
  }, hak46['downImg'] = function (tjx1z$, nwrbs, i95) {
    void 0x0 === i95 && (i95 = ''), hak46['wxdown']({ 'url': tjx1z$, 'success': function (m5oiv9) {
        0xc8 === m5oiv9['statusCode'] && hak46['copyFile'](m5oiv9['tempFilePath'], i95, nwrbs);
      }, 'fail': function (x1m_i$) {
        null != nwrbs && nwrbs['runWith']([0x1, x1m_i$]);
      } });
  }, hak46['copyFile'] = function (aq6f2k, dsrc, xzt) {
    var v9o0 = aq6f2k['split']('/'),
        z2xtjf = v9o0[v9o0['length'] - 0x1];dsrc['split']('?')[0x0];var cgy30 = hak46['getFileInfo'](dsrc);v9o0 = hak46['getFileNativePath'](z2xtjf), hak46['fs']['copyFile']({ 'srcPath': aq6f2k, 'destPath': v9o0, 'success': function (vo9m5) {
        cgy30 ? cgy30['readyUrl'] != dsrc && hak46['remove'](z2xtjf, dsrc, xzt) : (hak46['onSaveFile'](dsrc, z2xtjf), null != xzt && xzt['runWith']([0x0]));
      }, 'fail': function (n7pwd) {
        null != xzt && xzt['runWith']([0x1, n7pwd]);
      } });
  }, hak46['getFileNativePath'] = function (ebnlp7) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ebnlp7;
  }, hak46['remove'] = function (a6k4hq, yrc3g8, yc03) {
    void 0x0 === yrc3g8 && (yrc3g8 = '');var $t_x1i = hak46['getFileInfo'](yrc3g8),
        vm = hak46['getFileNativePath']($t_x1i['md5']);bsnpd['loader']['clearRes']($t_x1i['readyUrl']), hak46['fs']['unlink']({ 'filePath': vm, 'success': function (kfa6q2) {
        '' != yrc3g8 && hak46['onSaveFile'](yrc3g8, a6k4hq), null != yc03 && yc03['runWith']([0x0]);
      }, 'fail': function (nep7lb) {} });
  }, hak46['onSaveFile'] = function (tx1z$j, ftzxj) {
    var itx1 = tx1z$j['split']('?')[0x0];hak46['filesListObj'][itx1] = { 'md5': ftzxj, 'readyUrl': tx1z$j }, hak46['fs']['writeFile']({ 'filePath': hak46['fileNativeDir'] + '/' + hak46['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hak46['filesListObj']), 'success': function (y3crg8) {
        console['log']('写入测试测试成功：', y3crg8);
      }, 'fail': function (m590v) {
        console['log']('写入测试测试失败：', m590v);
      } });
  }, hak46['existDir'] = function (o0m5, nbp7wd) {
    hak46['fs']['mkdir']({ 'dirPath': o0m5, 'success': function (h6a) {
        null != nbp7wd && nbp7wd['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (o1_miv) {
        -0x1 != o1_miv['errMsg']['indexOf']('file already exists') ? hak46['readSync'](hak46['fileListName'], 'utf8', nbp7wd) : null != nbp7wd && nbp7wd['runWith']([0x1, o1_miv]);
      } });
  }, hak46['readSync'] = function (y9305g, o5m9iv, cdsrwn, crdw) {
    void 0x0 === o5m9iv && (o5m9iv = 'ascill'), void 0x0 === crdw && (crdw = ''), y9305g = hak46['getFileNativePath'](y9305g);var m$v1i;try {
      m$v1i = hak46['fs']['readFileSync'](y9305g), null != cdsrwn && cdsrwn['runWith']([0x0, { 'data': m$v1i }]);
    } catch (og09) {
      null != cdsrwn && cdsrwn['runWith']([0x1]);
    }
  }, hak46['readCache'] = function () {}, hak46['writeCache'] = function (_iv1mo) {
    var yrs8 = readyUrl['split']('?')[0x0];hak46['filesListObj'][yrs8] = { 'md5': md5Name, 'readyUrl': readyUrl }, hak46['fs']['writeFile']({ 'filePath': hak46['fileNativeDir'] + '/' + hak46['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hak46['filesListObj']), 'success': function (bw7dpn) {}, 'fail': function (kfjtz2) {} });
  }, hak46['setNativeFileDir'] = function (p7dnbw) {
    hak46['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + p7dnbw;
  }, hak46['filesListObj'] = {}, hak46['fileNativeDir'] = null, hak46['fileListName'] = 'layaairfiles.txt', hak46['ziyuFileData'] = {}, fk2tjz(hak46, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), hak46);function hak46() {
    hak46['__super']['call'](this);
  }var yr3s8 = function () {
    function dbpsw() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, dbpsw['__super']['call'](this), this['_sound'] = dbpsw['_createSound']();
    }t_1x$(dbpsw, 'laya.wx.mini.MiniSound', g8rcy3);var swnrb = dbpsw['prototype'];return swnrb['load'] = function (iv1om_) {
      var cd8r3s = this,
          _mvo1;function txj$1() {
        if (null != dbpsw['_null']) cd8r3s['_sound']['onCanplay'](dbpsw['_null']), cd8r3s['_sound']['onError'](dbpsw['_null']);else try {
          cd8r3s['_sound']['onCanplay'](null), cd8r3s['_sound']['onError'](null), dbpsw['_null'] = null;
        } catch (dnpw7b) {
          console['warn']('[wxmini] _clearSound:' + dnpw7b), cd8r3s['_sound']['onCanplay'](v05om9), cd8r3s['_sound']['onError'](v05om9), dbpsw['_null'] = v05om9;
        }
      }function v05om9() {}iv1om_ = _i1m['formatURL'](iv1om_), this['url'] = iv1om_, dbpsw['_audioCache'][iv1om_] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        txj$1(), _mvo1['loaded'] = !0x0, _mvo1['event']('complete'), dbpsw['_audioCache'][_mvo1['url']] = _mvo1;
      }), this['_sound']['onError'](function (t$1xi_) {
        console['error']('errCode=' + t$1xi_['errCode'] + '  errMsg=' + t$1xi_['errMsg']), txj$1(), _mvo1['event']('error');
      }), this['_sound']['src'] = iv1om_, _mvo1 = this);
    }, swnrb['play'] = function (bep7nw, _o9imv) {
      void 0x0 === bep7nw && (bep7nw = 0x0), void 0x0 === _o9imv && (_o9imv = 0x0), (tx1z = this['url'] == jfzk2t['_tMusic'] ? (dbpsw['_musicAudio'] || (dbpsw['_musicAudio'] = dbpsw['_createSound']()), dbpsw['_musicAudio']) : dbpsw['_createSound']())['src'] = this['url'];var tx1z = new mo_vi(tx1z);return tx1z['url'] = this['url'], tx1z['loops'] = _o9imv, tx1z['startTime'] = bep7nw, tx1z['play'](), jfzk2t['addChannel'](tx1z), tx1z;
    }, swnrb['dispose'] = function () {
      var ivm1_$ = dbpsw['_audioCache'][this['url']];ivm1_$ && (ivm1_$['src'] = '', delete dbpsw['_audioCache'][this['url']]);
    }, z26fkj(0x0, swnrb, 'duration', function () {
      return this['_sound']['duration'];
    }), dbpsw['_createSound'] = function () {
      return dbpsw['_id']++, nwcrds['window']['wx']['createInnerAudioContext']();
    }, dbpsw['_musicAudio'] = null, dbpsw['_id'] = 0x0, dbpsw['_audioCache'] = {}, dbpsw['_null'] = void 0x0, dbpsw;
  }(),
      mo_vi = function () {
    function afj2k6(nbsr) {
      this['_audio'] = null, this['_onEnd'] = null, afj2k6['__super']['call'](this), this['_audio'] = nbsr, this['_onEnd'] = c038['bind'](this['__onEnd'], this), nbsr['onEnded'](this['_onEnd']);
    }t_1x$(afj2k6, 'laya.wx.mini.MiniSoundChannel', m9_i);var bwsp = afj2k6['prototype'];return bwsp['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (bsnpd['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, bwsp['__onNull'] = function () {}, bwsp['play'] = function () {
      this['isStopped'] = !0x1, jfzk2t['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, bwsp['stop'] = function () {
      if (this['isStopped'] = !0x0, jfzk2t['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != afj2k6['_null']) this['_audio']['onEnded'](afj2k6['_null']);else try {
          this['_audio']['onEnded'](null), afj2k6['_null'] = null;
        } catch (dwnpsb) {
          console['warn']('[wxmini] stop:' + dwnpsb), this['_audio']['onEnded'](c038['bind'](this['__onNull'], this)), afj2k6['_null'] = c038['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, bwsp['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, bwsp['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, jfzk2t['addChannel'](this), this['_audio']['play']());
    }, z26fkj(0x0, bwsp, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), z26fkj(0x0, bwsp, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), z26fkj(0x0, bwsp, 'volume', function () {
      return 0x1;
    }, function (m1vio) {}), afj2k6['_null'] = void 0x0, afj2k6;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (iov9m_, rs83yc) {
  'use strict';

  for (var $zftxj in Object['defineProperty'](rs83yc, '__esModule', { 'value': !0x0 }), Laya) {
    var f$jzxt = Laya[$zftxj];f$jzxt && f$jzxt['__isclass'] && (rs83yc[$zftxj] = f$jzxt);
  }
});