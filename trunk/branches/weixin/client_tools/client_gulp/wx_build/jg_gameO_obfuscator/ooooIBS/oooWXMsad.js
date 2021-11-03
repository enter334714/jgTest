var c = wx.$o;
!function (phcr8, w91) {
  w91['un'], w91['uns'];var rp5qmt = w91['static'],
      pmrq5 = w91['class'],
      gx4hb = w91['getset'];w91['__newvec'];var n3uy = laya['utils']['Browser'],
      hbgo4 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      oxb4g = laya['resource']['HTMLImage'],
      bh4gxo = laya['utils']['Handler'],
      b4go = laya['display']['Input'],
      diw1f2 = laya['net']['Loader'];laya['maths']['Matrix'];var zo8cb = laya['renders']['Render'],
      qtms5 = laya['utils']['RunDriver'];laya['media']['Sound'];var uvn_3l = laya['media']['SoundChannel'],
      ey0$jk = laya['media']['SoundManager'],
      _yu3v = (laya['display']['Stage'], laya['net']['URL']),
      mts5rq = laya['utils']['Utils'],
      rs5 = (pmrq5(widf1, 'laya.wx.mini.MiniAdpter'), widf1['getJson'] = function (bzo8ch) {
    return JSON['parse'](bzo8ch);
  }, widf1['init'] = function (ukyen_, cpr8z) {
    void 0x0 === ukyen_ && (ukyen_ = !0x1), void 0x0 === cpr8z && (cpr8z = !0x1), widf1['_inited'] || (widf1['window'] = phcr8)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (widf1['_inited'] = !0x0, widf1['isZiYu'] = cpr8z, widf1['isPosMsgYu'] = ukyen_, widf1['EnvConfig'] = {}, widf1['isZiYu'] || (jy0ek$['setNativeFileDir']('/layaairGame'), jy0ek$['existDir'](jy0ek$['fileNativeDir'], bh4gxo['create'](widf1, widf1['onMkdirCallBack']))), widf1['window']['focus'] = function () {}, w91['getUrlPath'] = function () {}, widf1['window']['logtime'] = function (i1wf9) {}, widf1['window']['alertTimeLog'] = function (xfw4g9) {}, widf1['window']['resetShareInfo'] = function () {}, widf1['window']['CanvasRenderingContext2D'] = function () {}, widf1['window']['CanvasRenderingContext2D']['prototype'] = widf1['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], widf1['window']['document']['body']['appendChild'] = function () {}, widf1['EnvConfig']['pixelRatioInt'] = 0x0, qtms5['getPixelRatio'] = widf1['pixelRatio'], widf1['_preCreateElement'] = n3uy['createElement'], n3uy['createElement'] = widf1['createElement'], qtms5['createShaderCondition'] = widf1['createShaderCondition'], mts5rq['parseXMLFromString'] = widf1['parseXMLFromString'], b4go['_createInputElement'] = chpzr['_createInputElement'], widf1['EnvConfig']['load'] = diw1f2['prototype']['load'], diw1f2['prototype']['load'] = wdi1['prototype']['load'], widf1['isZiYu'] && ukyen_ && wx['onMessage'](function (yv3un_) {
      yv3un_['isLoad'] && (jy0ek$['ziyuFileData'][yv3un_['url']] = yv3un_['data']);
    }));
  }, widf1['onMkdirCallBack'] = function (cmr8, $0eyjk) {
    cmr8 || (jy0ek$['filesListObj'] = JSON['parse']($0eyjk['data']));
  }, widf1['pixelRatio'] = function () {
    if (!widf1['EnvConfig']['pixelRatioInt']) try {
      var bx94go = wx['getSystemInfoSync']();return widf1['EnvConfig']['pixelRatioInt'] = bx94go['pixelRatio'], bx94go['pixelRatio'];
    } catch (a2vd6) {}return widf1['EnvConfig']['pixelRatioInt'];
  }, widf1['createElement'] = function (hzprc8) {
    var zhgb4;if ('canvas' == hzprc8) return 0x1 == widf1['idx'] ? widf1['isZiYu'] ? (zhgb4 = sharedCanvas)['style'] = {} : zhgb4 = phcr8['canvas'] : zhgb4 = phcr8['wx']['createCanvas'](), widf1['idx']++, zhgb4;if ('textarea' == hzprc8 || 'input' == hzprc8) return widf1['onCreateInput'](hzprc8);if ('div' != hzprc8) return widf1['_preCreateElement'](hzprc8);return hzprc8 = widf1['_preCreateElement'](hzprc8), (hzprc8['contains'] = function (_$0ey) {
      return null;
    }, hzprc8['removeChild'] = function (wf912) {}, hzprc8);
  }, widf1['onCreateInput'] = function (_k0yue) {
    return _k0yue = widf1['_preCreateElement'](_k0yue), (_k0yue['focus'] = chpzr['wxinputFocus'], _k0yue['blur'] = chpzr['wxinputblur'], _k0yue['style'] = {}, _k0yue['value'] = 0x0, _k0yue['parentElement'] = {}, _k0yue['placeholder'] = {}, _k0yue['type'] = {}, _k0yue['setColor'] = function (h8czr) {}, _k0yue['setType'] = function ($e_k0) {}, _k0yue['setFontFace'] = function (nu_yke) {}, _k0yue['addEventListener'] = function (_u3ny) {}, _k0yue['contains'] = function (p8zchr) {
      return null;
    }, _k0yue['removeChild'] = function (uy0) {}, _k0yue);
  }, widf1['createShaderCondition'] = function (cr) {
    var g49xw = this;return function () {
      return g49xw[cr['replace']('this.', '')];
    };
  }, widf1['EnvConfig'] = null, widf1['window'] = null, widf1['_preCreateElement'] = null, widf1['_inited'] = !0x1, widf1['wxRequest'] = null, widf1['systemInfo'] = null, widf1['version'] = '0.0.1', widf1['isZiYu'] = !0x1, widf1['isPosMsgYu'] = !0x1, widf1['parseXMLFromString'] = function (pz8rc) {
    var m7qst5;pz8rc = pz8rc['replace'](/>\s+</g, '><');try {
      m7qst5 = new phcr8['Parser']['DOMParser']()['parseFromString'](pz8rc, 'text/xml');
    } catch (nla3v6) {
      throw '需要引入xml解析库文件';
    }return m7qst5;
  }, widf1['idx'] = 0x1, widf1);function widf1() {}pmrq5(nke_uy, 'laya.wx.mini.MiniImage'), nke_uy['prototype']['_loadImage'] = function (nvu_3l) {
    var i6a1 = !0x1;-0x1 == nvu_3l['indexOf']('layaNativeDir/') && (i6a1 = !0x0, nvu_3l = _yu3v['formatURL'](nvu_3l)), jy0ek$['getFileInfo'](nvu_3l) ? nke_uy['onCreateImage'](nvu_3l, this, !i6a1) : -0x1 != nvu_3l['indexOf']('http://') || -0x1 != nvu_3l['indexOf']('https://') ? jy0ek$['downImg'](nvu_3l, new bh4gxo(nke_uy, nke_uy['onDownImgCallBack'], [nvu_3l, this]), nvu_3l) : nke_uy['onCreateImage'](nvu_3l, this, !0x0);
  }, nke_uy['onDownImgCallBack'] = function (c5tmrp, pzm8r, x9of) {
    x9of ? pzm8r['onError'](null) : nke_uy['onCreateImage'](c5tmrp, pzm8r);
  }, nke_uy['onCreateImage'] = function (hpr8cz, v6aln3, z4hb) {
    var hg8obz, van63;function al3n6() {
      van63['onload'] = null, van63['onerror'] = null, delete v6aln3['imgCache'][hpr8cz];
    }hg8obz = (z4hb = void 0x0 === z4hb ? !0x1 : z4hb) ? hpr8cz : (n3la6v = jy0ek$['getFileInfo'](hpr8cz)['md5'], jy0ek$['getFileNativePath'](n3la6v)), null == v6aln3['imgCache'] && (v6aln3['imgCache'] = {}), z4hb = function () {
      al3n6(), v6aln3['onLoaded'](van63);
    };var n3la6v = function () {
      al3n6(), v6aln3['event']('error', 'Load image failed');
    };'nativeimage' == v6aln3['_type'] ? ((van63 = new n3uy['window']['Image']())['crossOrigin'] = '', van63['onload'] = z4hb, van63['onerror'] = n3la6v, van63['src'] = hg8obz, v6aln3['imgCache'][hpr8cz] = van63) : new oxb4g['create'](hg8obz, { 'onload': z4hb, 'onerror': n3la6v, 'onCreate': function (bgz8h) {
        van63 = bgz8h, v6aln3['imgCache'][hpr8cz] = bgz8h;
      } });
  };function nke_uy() {}var chpzr = (pmrq5(f41x9, 'laya.wx.mini.MiniInput'), f41x9['_createInputElement'] = function () {
    b4go['_initInput'](b4go['area'] = n3uy['createElement']('textarea')), b4go['_initInput'](b4go['input'] = n3uy['createElement']('input')), b4go['inputContainer'] = n3uy['createElement']('div'), b4go['inputContainer']['style']['position'] = 'absolute', b4go['inputContainer']['style']['zIndex'] = 0x186a0, n3uy['container']['appendChild'](b4go['inputContainer']), b4go['inputContainer']['setPos'] = function (zh8bg, ct5m) {
      b4go['inputContainer']['style']['left'] = zh8bg + 'px', b4go['inputContainer']['style']['top'] = ct5m + 'px';
    }, w91['stage']['on']('resize', null, f41x9['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (y_ken) {
      phcr8['dispatchEvent'] && phcr8['dispatchEvent']('resize');
    }), ey0$jk['_soundClass'] = _eyk0u, ey0$jk['_musicClass'] = _eyk0u;
  }, f41x9['_onStageResize'] = function () {
    w91['stage']['_canvasTransform']['identity']()['scale'](n3uy['width'] / zo8cb['canvas']['width'] / qtms5['getPixelRatio'](), n3uy['height'] / zo8cb['canvas']['height'] / qtms5['getPixelRatio']());
  }, f41x9['wxinputFocus'] = function (r8pzmc) {
    var cmr5pt = b4go['inputElement']['target'];cmr5pt && !cmr5pt['editable'] || (rs5['window']['wx']['offKeyboardConfirm'](), rs5['window']['wx']['offKeyboardInput'](), rs5['window']['wx']['showKeyboard']({ 'defaultValue': cmr5pt['text'], 'maxLength': cmr5pt['maxChars'], 'multiple': cmr5pt['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (e$ky0) {}, 'fail': function (k_ey0) {} }), rs5['window']['wx']['onKeyboardConfirm'](function (_nu3v) {
      _nu3v = _nu3v ? _nu3v['value'] : '', (cmr5pt['text'] = _nu3v, cmr5pt['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), rs5['window']['wx']['onKeyboardInput'](function (pzb8h) {
      pzb8h = pzb8h ? pzb8h['value'] : '', cmr5pt['multiline'] || -0x1 == pzb8h['indexOf']('\x0a') ? (cmr5pt['text'] = pzb8h, cmr5pt['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, f41x9['inputEnter'] = function () {
    b4go['inputElement']['target']['focus'] = !0x1;
  }, f41x9['wxinputblur'] = function () {
    f41x9['hideKeyboard']();
  }, f41x9['hideKeyboard'] = function () {
    rs5['window']['wx']['offKeyboardConfirm'](), rs5['window']['wx']['offKeyboardInput'](), rs5['window']['wx']['hideKeyboard']({ 'success': function (e0k$_) {
        console['log']('隐藏键盘');
      }, 'fail': function (ln3u_v) {
        console['log']('隐藏键盘出错:' + (ln3u_v ? ln3u_v['errMsg'] : ''));
      } });
  }, f41x9);function f41x9() {}var wdi1 = function () {
    function $_y0e() {}pmrq5($_y0e, 'laya.wx.mini.MiniLoader');var l6di2a = $_y0e['prototype'];return l6di2a['load'] = function (yk0_$, avn63, lnv_3, oczh, n_e3u) {
      void 0x0 === lnv_3 && (lnv_3 = !0x0), void 0x0 === n_e3u && (n_e3u = !0x1);var k$e0y_ = this;0x0 === (k$e0y_['_url'] = yk0_$)['indexOf']('data:image') ? k$e0y_['_type'] = avn63 = 'image' : k$e0y_['_type'] = avn63 = avn63 || k$e0y_['getTypeFromUrl'](yk0_$), k$e0y_['_cache'] = lnv_3, k$e0y_['_data'] = null;var v6a2dl = 'ascii';-0x1 != yk0_$['indexOf']('.fnt') ? v6a2dl = 'utf8' : 'arraybuffer' == avn63 && (v6a2dl = '');var h8zcob = mts5rq['getFileExtension'](yk0_$);if (-0x1 != $_y0e['_fileTypeArr']['indexOf'](h8zcob)) rs5['EnvConfig']['load']['call'](this, yk0_$, avn63, lnv_3, oczh, n_e3u);else {
        if (jy0ek$['getFileInfo'](yk0_$)) rs5['EnvConfig']['load']['call'](this, yk0_$, avn63, lnv_3, oczh, n_e3u);else {
          if (-0x1 != yk0_$['indexOf']('layaNativeDir/')) {
            if (rs5['isZiYu']) {
              var hgozb4 = jy0ek$['ziyuFileData'][yk0_$];return void k$e0y_['onLoaded'](hgozb4);
            }return cosnole['log']('read read'), void jy0ek$['read'](yk0_$, v6a2dl, new bh4gxo($_y0e, $_y0e['onReadNativeCallBack'], [v6a2dl, yk0_$, avn63, lnv_3, oczh, n_e3u, k$e0y_]));
          }hgozb4 = '' == _yu3v['rootPath'] ? yk0_$ : yk0_$['split'](_yu3v['rootPath'])[0x0], -0x1 != yk0_$['indexOf']('http://') || -0x1 != yk0_$['indexOf']('https://') ? rs5['EnvConfig']['load']['call'](k$e0y_, yk0_$, avn63, lnv_3, oczh, n_e3u) : jy0ek$['readFile'](hgozb4, v6a2dl, new bh4gxo($_y0e, $_y0e['onReadNativeCallBack'], [v6a2dl, yk0_$, avn63, lnv_3, oczh, n_e3u, k$e0y_]), yk0_$);
        }
      }
    }, l6di2a['resMgrLoad'] = function (al2i, rmc5p, iw61, pmc8zr, ue0k_, g4x9, y_uek0) {
      void 0x0 === iw61 && (iw61 = 0x0), void 0x0 === pmc8zr && (pmc8zr = !0x1), void 0x0 === ue0k_ && (ue0k_ = !0x1), void 0x0 === g4x9 && (g4x9 = 0x0), void 0x0 === y_uek0 && (y_uek0 = 0x3), -0x1 != al2i['indexOf']('mpack') && console['log']('=============resMgrLoad url:', al2i), rs5['EnvConfig']['resMgrLoad'](al2i, (u_vny3, p5c8mr, x914) => {
        $_y0e['prototype']['resMgrLoadCallBack'](u_vny3, p5c8mr, x914, rmc5p);
      }, iw61, pmc8zr, ue0k_, g4x9, y_uek0);
    }, l6di2a['resMgrLoadCallBack'] = function (bczo8h, ke_nyu, rhcp, pm5qtr) {
      console['log']('buff:::', bczo8h, rhcp, jy0ek$['fileNativeDir'] + '///' + jy0ek$['fileListName']), pm5qtr(bczo8h, ke_nyu, rhcp);
    }, l6di2a['clearRes'] = function (p5m8, hrpzc) {
      this['clearRes'](p5m8, hrpzc = void 0x0 === hrpzc ? !0x1 : hrpzc), hrpzc = jy0ek$['getFileInfo'](p5m8), !hrpzc || -0x1 == p5m8['indexOf']('http://') && -0x1 == p5m8['indexOf']('https://') || (hrpzc = hrpzc['md5'], hrpzc = jy0ek$['getFileNativePath'](hrpzc), jy0ek$['remove'](hrpzc));
    }, $_y0e['onReadNativeCallBack'] = function (rm5ctp, i2d1a6, rp5mtc, une, $jk, yn_uv3, ozbch8, b8go, a36dv) {
      void 0x0 === une && (une = !0x0), void 0x0 === yn_uv3 && (yn_uv3 = !0x1), (b8go = void 0x0 === b8go ? 0x0 : b8go) ? 0x1 == b8go && rs5['EnvConfig']['load']['call'](ozbch8, i2d1a6, rp5mtc, une, $jk, yn_uv3) : (a36dv = 'json' == rp5mtc || 'atlas' == rp5mtc ? rs5['getJson'](a36dv['data']) : 'xml' == rp5mtc ? mts5rq['parseXMLFromString'](a36dv['data']) : a36dv['data'], ozbch8['onLoaded'](a36dv), !rs5['isZiYu'] && rs5['isPosMsgYu'] && 'arraybuffer' != rp5mtc && wx['postMessage']({ 'url': i2d1a6, 'data': a36dv, 'isLoad': !0x0 }));
    }, rp5qmt($_y0e, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), $_y0e;
  }(),
      jy0ek$ = (pmrq5(ykj$e0, 'laya.wx.mini.MiniFileMgr', hbgo4), ykj$e0['isLoadFile'] = function (jy0k$) {
    return -0x1 != ykj$e0['_fileTypeArr']['indexOf'](jy0k$);
  }, ykj$e0['getFileInfo'] = function (mrpct) {
    return mrpct = mrpct['split']('?')[0x0], mrpct = ykj$e0['filesListObj'][mrpct], null == mrpct ? null : mrpct;
  }, ykj$e0['onFileUpdate'] = function (hrp8zc, bgx49) {
    var rpmtq = hrp8zc['split']('/');hrp8zc = rpmtq[rpmtq['length'] - 0x1], rpmtq = ykj$e0['getFileInfo'](bgx49), null == rpmtq ? ykj$e0['onSaveFile'](bgx49, hrp8zc) : rpmtq['readyUrl'] != bgx49 && ykj$e0['remove'](hrp8zc, bgx49);
  }, ykj$e0['exits'] = function (pr8h, gbz8oh) {
    pr8h = ykj$e0['getFileNativePath'](pr8h), ykj$e0['fs']['getFileInfo']({ 'filePath': pr8h, 'success': function (ueny_3) {
        null != gbz8oh && gbz8oh['runWith']([0x0, ueny_3]);
      }, 'fail': function ($y0je) {
        null != gbz8oh && gbz8oh['runWith']([0x1, $y0je]);
      } });
  }, ykj$e0['read'] = function (mstq7, $yk0je, l6a3nv, cbp8zh) {
    void 0x0 === $yk0je && ($yk0je = 'ascill'), mstq7 = '' != (cbp8zh = void 0x0 === cbp8zh ? '' : cbp8zh) ? ykj$e0['getFileNativePath'](mstq7) : mstq7, ykj$e0['fs']['readFile']({ 'filePath': mstq7, 'encoding': $yk0je, 'success': function (c5pm) {
        null != l6a3nv && l6a3nv['runWith']([0x0, c5pm]);
      }, 'fail': function (pt) {
        pt && '' != cbp8zh ? ykj$e0['down'](cbp8zh, $yk0je, l6a3nv, cbp8zh) : null != l6a3nv && l6a3nv['runWith']([0x1]);
      } });
  }, ykj$e0['readNativeFile'] = function (nlua3, jey0) {
    ykj$e0['fs']['readFile']({ 'filePath': nlua3, 'encoding': '', 'success': function (a6dvl2) {
        null != jey0 && jey0['runWith']([0x0]);
      }, 'fail': function (ia2ld) {
        null != jey0 && jey0['runWith']([0x1]);
      } });
  }, ykj$e0['down'] = function (mt5prq, val62d, rz8hc, lanu3) {
    void 0x0 === val62d && (val62d = 'ascill'), void 0x0 === lanu3 && (lanu3 = '');var key$0 = ykj$e0['getFileNativePath'](lanu3);ykj$e0['wxdown']({ 'url': mt5prq, 'filePath': key$0, 'success': function (w41fx) {
        0xc8 === w41fx['statusCode'] && ykj$e0['readFile'](w41fx['filePath'], val62d, rz8hc, lanu3);
      }, 'fail': function (hobxg) {
        null != rz8hc && rz8hc['runWith']([0x1, hobxg]);
      } })['onProgressUpdate'](function (h4bo) {
      null != rz8hc && rz8hc['runWith']([0x2, h4bo['progress']]);
    });
  }, ykj$e0['readFile'] = function (hg8zb, ek0u_y, a6i1d, hb4gzo) {
    void 0x0 === hb4gzo && (hb4gzo = ''), ykj$e0['fs']['readFile']({ 'filePath': hg8zb, 'encoding': ek0u_y = void 0x0 === ek0u_y ? 'ascill' : ek0u_y, 'success': function (lvnu3a) {
        -0x1 == hg8zb['indexOf']('http://') && -0x1 == hg8zb['indexOf']('https://') || ykj$e0['onFileUpdate'](hg8zb, hb4gzo), null != a6i1d && a6i1d['runWith']([0x0, lvnu3a]);
      }, 'fail': function (cph8bz) {
        cph8bz && null != a6i1d && a6i1d['runWith']([0x1, cph8bz]);
      } });
  }, ykj$e0['downImg'] = function (_uekn, fw9gx4, a3nvul) {
    void 0x0 === a3nvul && (a3nvul = ''), ykj$e0['wxdown']({ 'url': _uekn, 'success': function (fw9ix) {
        0xc8 === fw9ix['statusCode'] && ykj$e0['copyFile'](fw9ix['tempFilePath'], a3nvul, fw9gx4);
      }, 'fail': function (o8bc) {
        null != fw9gx4 && fw9gx4['runWith']([0x1, o8bc]);
      } });
  }, ykj$e0['copyFile'] = function (g9bo, xwf149, pcm85) {
    var da62li = g9bo['split']('/'),
        czhpr = da62li[da62li['length'] - 0x1];xwf149['split']('?')[0x0];var _e3ynu = ykj$e0['getFileInfo'](xwf149);da62li = ykj$e0['getFileNativePath'](czhpr), ykj$e0['fs']['copyFile']({ 'srcPath': g9bo, 'destPath': da62li, 'success': function (k_y$0e) {
        _e3ynu ? _e3ynu['readyUrl'] != xwf149 && ykj$e0['remove'](czhpr, xwf149, pcm85) : (ykj$e0['onSaveFile'](xwf149, czhpr), null != pcm85 && pcm85['runWith']([0x0]));
      }, 'fail': function (oxfg4) {
        null != pcm85 && pcm85['runWith']([0x1, oxfg4]);
      } });
  }, ykj$e0['getFileNativePath'] = function (rq5tsm) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rq5tsm;
  }, ykj$e0['remove'] = function (ek0uy_, w1d62, t5qs) {
    void 0x0 === w1d62 && (w1d62 = '');var _3yeu = ykj$e0['getFileInfo'](w1d62),
        cp8mrz = ykj$e0['getFileNativePath'](_3yeu['md5']);w91['loader']['clearRes'](_3yeu['readyUrl']), ykj$e0['fs']['unlink']({ 'filePath': cp8mrz, 'success': function (_yeuk) {
        '' != w1d62 && ykj$e0['onSaveFile'](w1d62, ek0uy_), null != t5qs && t5qs['runWith']([0x0]);
      }, 'fail': function (s5mtrq) {} });
  }, ykj$e0['onSaveFile'] = function (e_uyk, ey$0j) {
    var uky0_ = e_uyk['split']('?')[0x0];ykj$e0['filesListObj'][uky0_] = { 'md5': ey$0j, 'readyUrl': e_uyk }, ykj$e0['fs']['writeFile']({ 'filePath': ykj$e0['fileNativeDir'] + '/' + ykj$e0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ykj$e0['filesListObj']), 'success': function (c8hobz) {
        console['log']('写入测试测试成功：', c8hobz);
      }, 'fail': function (g4zhbo) {
        console['log']('写入测试测试失败：', g4zhbo);
      } });
  }, ykj$e0['existDir'] = function (vd62la, vl63an) {
    ykj$e0['fs']['mkdir']({ 'dirPath': vd62la, 'success': function (jy$k) {
        null != vl63an && vl63an['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (zbchp8) {
        -0x1 != zbchp8['errMsg']['indexOf']('file already exists') ? ykj$e0['readSync'](ykj$e0['fileListName'], 'utf8', vl63an) : null != vl63an && vl63an['runWith']([0x1, zbchp8]);
      } });
  }, ykj$e0['readSync'] = function (e$yk0j, bhog4x, en_u3y, eu_yk0) {
    void 0x0 === bhog4x && (bhog4x = 'ascill'), void 0x0 === eu_yk0 && (eu_yk0 = ''), e$yk0j = ykj$e0['getFileNativePath'](e$yk0j);var gxohb4;try {
      gxohb4 = ykj$e0['fs']['readFileSync'](e$yk0j), null != en_u3y && en_u3y['runWith']([0x0, { 'data': gxohb4 }]);
    } catch (ld6va2) {
      null != en_u3y && en_u3y['runWith']([0x1]);
    }
  }, ykj$e0['readCache'] = function () {}, ykj$e0['writeCache'] = function (w21d6i) {
    var c8boh = readyUrl['split']('?')[0x0];ykj$e0['filesListObj'][c8boh] = { 'md5': md5Name, 'readyUrl': readyUrl }, ykj$e0['fs']['writeFile']({ 'filePath': ykj$e0['fileNativeDir'] + '/' + ykj$e0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ykj$e0['filesListObj']), 'success': function (i2la6) {}, 'fail': function (bz8h) {} });
  }, ykj$e0['setNativeFileDir'] = function (gzoh) {
    ykj$e0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gzoh;
  }, ykj$e0['filesListObj'] = {}, ykj$e0['fileNativeDir'] = null, ykj$e0['fileListName'] = 'layaairfiles.txt', ykj$e0['ziyuFileData'] = {}, rp5qmt(ykj$e0, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), ykj$e0);function ykj$e0() {
    ykj$e0['__super']['call'](this);
  }var _eyk0u = function () {
    function mr58() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, mr58['__super']['call'](this), this['_sound'] = mr58['_createSound']();
    }pmrq5(mr58, 'laya.wx.mini.MiniSound', hbgo4);var dwi26 = mr58['prototype'];return dwi26['load'] = function (pqrmt5) {
      var t75smq = this,
          a12i;function mcrpt() {
        if (null != mr58['_null']) t75smq['_sound']['onCanplay'](mr58['_null']), t75smq['_sound']['onError'](mr58['_null']);else try {
          t75smq['_sound']['onCanplay'](null), t75smq['_sound']['onError'](null), mr58['_null'] = null;
        } catch (ynu_e) {
          console['warn']('[wxmini] _clearSound:' + ynu_e), t75smq['_sound']['onCanplay'](eny3_), t75smq['_sound']['onError'](eny3_), mr58['_null'] = eny3_;
        }
      }function eny3_() {}pqrmt5 = _yu3v['formatURL'](pqrmt5), this['url'] = pqrmt5, mr58['_audioCache'][pqrmt5] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        mcrpt(), a12i['loaded'] = !0x0, a12i['event']('complete'), mr58['_audioCache'][a12i['url']] = a12i;
      }), this['_sound']['onError'](function (cz8bp) {
        console['error']('errCode=' + cz8bp['errCode'] + '  errMsg=' + cz8bp['errMsg']), mcrpt(), a12i['event']('error');
      }), this['_sound']['src'] = pqrmt5, a12i = this);
    }, dwi26['play'] = function (f9w2, f9xg) {
      void 0x0 === f9w2 && (f9w2 = 0x0), void 0x0 === f9xg && (f9xg = 0x0), (yuke_ = this['url'] == ey0$jk['_tMusic'] ? (mr58['_musicAudio'] || (mr58['_musicAudio'] = mr58['_createSound']()), mr58['_musicAudio']) : mr58['_createSound']())['src'] = this['url'];var yuke_ = new hzp8bc(yuke_);return yuke_['url'] = this['url'], yuke_['loops'] = f9xg, yuke_['startTime'] = f9w2, yuke_['play'](), ey0$jk['addChannel'](yuke_), yuke_;
    }, dwi26['dispose'] = function () {
      var i16ad2 = mr58['_audioCache'][this['url']];i16ad2 && (i16ad2['src'] = '', delete mr58['_audioCache'][this['url']]);
    }, gx4hb(0x0, dwi26, 'duration', function () {
      return this['_sound']['duration'];
    }), mr58['_createSound'] = function () {
      return mr58['_id']++, rs5['window']['wx']['createInnerAudioContext']();
    }, mr58['_musicAudio'] = null, mr58['_id'] = 0x0, mr58['_audioCache'] = {}, mr58['_null'] = void 0x0, mr58;
  }(),
      hzp8bc = function () {
    function $k0y_e(w261d) {
      this['_audio'] = null, this['_onEnd'] = null, $k0y_e['__super']['call'](this), this['_audio'] = w261d, this['_onEnd'] = mts5rq['bind'](this['__onEnd'], this), w261d['onEnded'](this['_onEnd']);
    }pmrq5($k0y_e, 'laya.wx.mini.MiniSoundChannel', uvn_3l);var w1fx9 = $k0y_e['prototype'];return w1fx9['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (w91['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, w1fx9['__onNull'] = function () {}, w1fx9['play'] = function () {
      this['isStopped'] = !0x1, ey0$jk['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, w1fx9['stop'] = function () {
      if (this['isStopped'] = !0x0, ey0$jk['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != $k0y_e['_null']) this['_audio']['onEnded']($k0y_e['_null']);else try {
          this['_audio']['onEnded'](null), $k0y_e['_null'] = null;
        } catch (mt7sq5) {
          console['warn']('[wxmini] stop:' + mt7sq5), this['_audio']['onEnded'](mts5rq['bind'](this['__onNull'], this)), $k0y_e['_null'] = mts5rq['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, w1fx9['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, w1fx9['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, ey0$jk['addChannel'](this), this['_audio']['play']());
    }, gx4hb(0x0, w1fx9, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), gx4hb(0x0, w1fx9, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), gx4hb(0x0, w1fx9, 'volume', function () {
      return 0x1;
    }, function (g9xf4w) {}), $k0y_e['_null'] = void 0x0, $k0y_e;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (xf4og9, mzcp8r) {
  'use strict';

  for (var ke$jy0 in Object['defineProperty'](mzcp8r, '__esModule', { 'value': !0x0 }), Laya) {
    var mt5sq = Laya[ke$jy0];mt5sq && mt5sq['__isclass'] && (mzcp8r[ke$jy0] = mt5sq);
  }
});