var p = wx.$h;
!function (torspq, jhmk) {
  jhmk['un'], jhmk['uns'];var fgidhe = jhmk['static'],
      jgh = jhmk['class'],
      onpmlq = jhmk['getset'];jhmk['__newvec'];var srvpq = laya['utils']['Browser'],
      imlh = (laya['events']['Event'], laya['events']['EventDispatcher']),
      xstrwv = laya['resource']['HTMLImage'],
      _3014 = laya['utils']['Handler'],
      qns = laya['display']['Input'],
      y0z1$_ = laya['net']['Loader'];laya['maths']['Matrix'];var sqrpo = laya['renders']['Render'],
      kmojln = laya['utils']['RunDriver'];laya['media']['Sound'];var rxtw = laya['media']['SoundChannel'],
      ghfdec = laya['media']['SoundManager'],
      z_yxw = (laya['display']['Stage'], laya['net']['URL']),
      z_x = laya['utils']['Utils'],
      defac = (jgh(mpqro, 'laya.wx.mini.MiniAdpter'), mpqro['getJson'] = function (hjef) {
    return JSON['parse'](hjef);
  }, mpqro['init'] = function (olnqm, rsxwv) {
    void 0x0 === olnqm && (olnqm = !0x1), void 0x0 === rsxwv && (rsxwv = !0x1), mpqro['_inited'] || (mpqro['window'] = torspq)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (mpqro['_inited'] = !0x0, mpqro['isZiYu'] = rsxwv, mpqro['isPosMsgYu'] = olnqm, mpqro['EnvConfig'] = {}, mpqro['isZiYu'] || (mkjlih['setNativeFileDir']('/layaairGame'), mkjlih['existDir'](mkjlih['fileNativeDir'], _3014['create'](mpqro, mpqro['onMkdirCallBack']))), mpqro['window']['focus'] = function () {}, jhmk['getUrlPath'] = function () {}, mpqro['window']['logtime'] = function (beafdc) {}, mpqro['window']['alertTimeLog'] = function (qompl) {}, mpqro['window']['resetShareInfo'] = function () {}, mpqro['window']['CanvasRenderingContext2D'] = function () {}, mpqro['window']['CanvasRenderingContext2D']['prototype'] = mpqro['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], mpqro['window']['document']['body']['appendChild'] = function () {}, mpqro['EnvConfig']['pixelRatioInt'] = 0x0, kmojln['getPixelRatio'] = mpqro['pixelRatio'], mpqro['_preCreateElement'] = srvpq['createElement'], srvpq['createElement'] = mpqro['createElement'], kmojln['createShaderCondition'] = mpqro['createShaderCondition'], z_x['parseXMLFromString'] = mpqro['parseXMLFromString'], qns['_createInputElement'] = rtqosp['_createInputElement'], mpqro['EnvConfig']['load'] = y0z1$_['prototype']['load'], y0z1$_['prototype']['load'] = ilmnk['prototype']['load'], mpqro['isZiYu'] && olnqm && wx['onMessage'](function (vstxwy) {
      vstxwy['isLoad'] && (mkjlih['ziyuFileData'][vstxwy['url']] = vstxwy['data']);
    }));
  }, mpqro['onMkdirCallBack'] = function (jghkif, xywv$z) {
    jghkif || (mkjlih['filesListObj'] = JSON['parse'](xywv$z['data']));
  }, mpqro['pixelRatio'] = function () {
    if (!mpqro['EnvConfig']['pixelRatioInt']) try {
      var digfhe = wx['getSystemInfoSync']();return mpqro['EnvConfig']['pixelRatioInt'] = digfhe['pixelRatio'], digfhe['pixelRatio'];
    } catch (kjimn) {}return mpqro['EnvConfig']['pixelRatioInt'];
  }, mpqro['createElement'] = function (afbe) {
    var $1z2_0;if ('canvas' == afbe) return 0x1 == mpqro['idx'] ? mpqro['isZiYu'] ? ($1z2_0 = sharedCanvas)['style'] = {} : $1z2_0 = torspq['canvas'] : $1z2_0 = torspq['wx']['createCanvas'](), mpqro['idx']++, $1z2_0;if ('textarea' == afbe || 'input' == afbe) return mpqro['onCreateInput'](afbe);if ('div' != afbe) return mpqro['_preCreateElement'](afbe);return afbe = mpqro['_preCreateElement'](afbe), (afbe['contains'] = function (gfhjki) {
      return null;
    }, afbe['removeChild'] = function (afecd) {}, afbe);
  }, mpqro['onCreateInput'] = function (fehidg) {
    return fehidg = mpqro['_preCreateElement'](fehidg), (fehidg['focus'] = rtqosp['wxinputFocus'], fehidg['blur'] = rtqosp['wxinputblur'], fehidg['style'] = {}, fehidg['value'] = 0x0, fehidg['parentElement'] = {}, fehidg['placeholder'] = {}, fehidg['type'] = {}, fehidg['setColor'] = function (ojmkn) {}, fehidg['setType'] = function (mikln) {}, fehidg['setFontFace'] = function (lkmh) {}, fehidg['addEventListener'] = function (cafebd) {}, fehidg['contains'] = function (pronm) {
      return null;
    }, fehidg['removeChild'] = function (wsvty) {}, fehidg);
  }, mpqro['createShaderCondition'] = function (x_z$) {
    var lopmnq = this;return function () {
      return lopmnq[x_z$['replace']('this.', '')];
    };
  }, mpqro['EnvConfig'] = null, mpqro['window'] = null, mpqro['_preCreateElement'] = null, mpqro['_inited'] = !0x1, mpqro['wxRequest'] = null, mpqro['systemInfo'] = null, mpqro['version'] = '0.0.1', mpqro['isZiYu'] = !0x1, mpqro['isPosMsgYu'] = !0x1, mpqro['parseXMLFromString'] = function (hdecf) {
    var igfe;hdecf = hdecf['replace'](/>\s+</g, '><');try {
      igfe = new torspq['Parser']['DOMParser']()['parseFromString'](hdecf, 'text/xml');
    } catch (pstroq) {
      throw '需要引入xml解析库文件';
    }return igfe;
  }, mpqro['idx'] = 0x1, mpqro);function mpqro() {}jgh(igkjhf, 'laya.wx.mini.MiniImage'), igkjhf['prototype']['_loadImage'] = function (hjgkil) {
    var xtvsyw = !0x1;-0x1 == hjgkil['indexOf']('layaNativeDir/') && (xtvsyw = !0x0, hjgkil = z_yxw['formatURL'](hjgkil)), mkjlih['getFileInfo'](hjgkil) ? igkjhf['onCreateImage'](hjgkil, this, !xtvsyw) : -0x1 != hjgkil['indexOf']('http://') || -0x1 != hjgkil['indexOf']('https://') ? mkjlih['downImg'](hjgkil, new _3014(igkjhf, igkjhf['onDownImgCallBack'], [hjgkil, this]), hjgkil) : igkjhf['onCreateImage'](hjgkil, this, !0x0);
  }, igkjhf['onDownImgCallBack'] = function (njok, cdafeb, ihlkg) {
    ihlkg ? cdafeb['onError'](null) : igkjhf['onCreateImage'](njok, cdafeb);
  }, igkjhf['onCreateImage'] = function (eghijf, gdcb, dcgefh) {
    var mnpkol, nlmpko;function jlmhk() {
      nlmpko['onload'] = null, nlmpko['onerror'] = null, delete gdcb['imgCache'][eghijf];
    }mnpkol = (dcgefh = void 0x0 === dcgefh ? !0x1 : dcgefh) ? eghijf : (zx_0$y = mkjlih['getFileInfo'](eghijf)['md5'], mkjlih['getFileNativePath'](zx_0$y)), null == gdcb['imgCache'] && (gdcb['imgCache'] = {}), dcgefh = function () {
      jlmhk(), gdcb['onLoaded'](nlmpko);
    };var zx_0$y = function () {
      jlmhk(), gdcb['event']('error', 'Load image failed');
    };'nativeimage' == gdcb['_type'] ? ((nlmpko = new srvpq['window']['Image']())['crossOrigin'] = '', nlmpko['onload'] = dcgefh, nlmpko['onerror'] = zx_0$y, nlmpko['src'] = mnpkol, gdcb['imgCache'][eghijf] = nlmpko) : new xstrwv['create'](mnpkol, { 'onload': dcgefh, 'onerror': zx_0$y, 'onCreate': function (mrpnoq) {
        nlmpko = mrpnoq, gdcb['imgCache'][eghijf] = mrpnoq;
      } });
  };function igkjhf() {}var rtqosp = (jgh(zx$_, 'laya.wx.mini.MiniInput'), zx$_['_createInputElement'] = function () {
    qns['_initInput'](qns['area'] = srvpq['createElement']('textarea')), qns['_initInput'](qns['input'] = srvpq['createElement']('input')), qns['inputContainer'] = srvpq['createElement']('div'), qns['inputContainer']['style']['position'] = 'absolute', qns['inputContainer']['style']['zIndex'] = 0x186a0, srvpq['container']['appendChild'](qns['inputContainer']), qns['inputContainer']['setPos'] = function (mnlop, lonpkm) {
      qns['inputContainer']['style']['left'] = mnlop + 'px', qns['inputContainer']['style']['top'] = lonpkm + 'px';
    }, jhmk['stage']['on']('resize', null, zx$_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (egbd) {
      torspq['dispatchEvent'] && torspq['dispatchEvent']('resize');
    }), ghfdec['_soundClass'] = nqsp, ghfdec['_musicClass'] = nqsp;
  }, zx$_['_onStageResize'] = function () {
    jhmk['stage']['_canvasTransform']['identity']()['scale'](srvpq['width'] / sqrpo['canvas']['width'] / kmojln['getPixelRatio'](), srvpq['height'] / sqrpo['canvas']['height'] / kmojln['getPixelRatio']());
  }, zx$_['wxinputFocus'] = function (qrots) {
    var _y$10z = qns['inputElement']['target'];_y$10z && !_y$10z['editable'] || (defac['window']['wx']['offKeyboardConfirm'](), defac['window']['wx']['offKeyboardInput'](), defac['window']['wx']['showKeyboard']({ 'defaultValue': _y$10z['text'], 'maxLength': _y$10z['maxChars'], 'multiple': _y$10z['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (z0_x) {}, 'fail': function (kmpl) {} }), defac['window']['wx']['onKeyboardConfirm'](function ($_210z) {
      $_210z = $_210z ? $_210z['value'] : '', (_y$10z['text'] = $_210z, _y$10z['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), defac['window']['wx']['onKeyboardInput'](function (lknm) {
      lknm = lknm ? lknm['value'] : '', _y$10z['multiline'] || -0x1 == lknm['indexOf']('\x0a') ? (_y$10z['text'] = lknm, _y$10z['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, zx$_['inputEnter'] = function () {
    qns['inputElement']['target']['focus'] = !0x1;
  }, zx$_['wxinputblur'] = function () {
    zx$_['hideKeyboard']();
  }, zx$_['hideKeyboard'] = function () {
    defac['window']['wx']['offKeyboardConfirm'](), defac['window']['wx']['offKeyboardInput'](), defac['window']['wx']['hideKeyboard']({ 'success': function (ytwvzx) {
        console['log']('隐藏键盘');
      }, 'fail': function (wtzvy) {
        console['log']('隐藏键盘出错:' + (wtzvy ? wtzvy['errMsg'] : ''));
      } });
  }, zx$_);function zx$_() {}var ilmnk = function () {
    function nmlkjo() {}jgh(nmlkjo, 'laya.wx.mini.MiniLoader');var hidefg = nmlkjo['prototype'];return hidefg['load'] = function (torsqp, ihgjef, mlon, _1$2, swtxyv) {
      void 0x0 === mlon && (mlon = !0x0), void 0x0 === swtxyv && (swtxyv = !0x1);var ebfgdc = this;0x0 === (ebfgdc['_url'] = torsqp)['indexOf']('data:image') ? ebfgdc['_type'] = ihgjef = 'image' : ebfgdc['_type'] = ihgjef = ihgjef || ebfgdc['getTypeFromUrl'](torsqp), ebfgdc['_cache'] = mlon, ebfgdc['_data'] = null;var mlkopn = 'ascii';-0x1 != torsqp['indexOf']('.fnt') ? mlkopn = 'utf8' : 'arraybuffer' == ihgjef && (mlkopn = '');var qpmonl = z_x['getFileExtension'](torsqp);if (-0x1 != nmlkjo['_fileTypeArr']['indexOf'](qpmonl)) defac['EnvConfig']['load']['call'](this, torsqp, ihgjef, mlon, _1$2, swtxyv);else {
        if (mkjlih['getFileInfo'](torsqp)) defac['EnvConfig']['load']['call'](this, torsqp, ihgjef, mlon, _1$2, swtxyv);else {
          if (-0x1 != torsqp['indexOf']('layaNativeDir/')) {
            if (defac['isZiYu']) {
              var fjgh = mkjlih['ziyuFileData'][torsqp];return void ebfgdc['onLoaded'](fjgh);
            }return cosnole['log']('read read'), void mkjlih['read'](torsqp, mlkopn, new _3014(nmlkjo, nmlkjo['onReadNativeCallBack'], [mlkopn, torsqp, ihgjef, mlon, _1$2, swtxyv, ebfgdc]));
          }fjgh = '' == z_yxw['rootPath'] ? torsqp : torsqp['split'](z_yxw['rootPath'])[0x0], -0x1 != torsqp['indexOf']('http://') || -0x1 != torsqp['indexOf']('https://') ? defac['EnvConfig']['load']['call'](ebfgdc, torsqp, ihgjef, mlon, _1$2, swtxyv) : mkjlih['readFile'](fjgh, mlkopn, new _3014(nmlkjo, nmlkjo['onReadNativeCallBack'], [mlkopn, torsqp, ihgjef, mlon, _1$2, swtxyv, ebfgdc]), torsqp);
        }
      }
    }, hidefg['resMgrLoad'] = function (figed, otsprq, romqnp, qtpos, vxstrw, jokl, rqtp) {
      void 0x0 === romqnp && (romqnp = 0x0), void 0x0 === qtpos && (qtpos = !0x1), void 0x0 === vxstrw && (vxstrw = !0x1), void 0x0 === jokl && (jokl = 0x0), void 0x0 === rqtp && (rqtp = 0x3), -0x1 != figed['indexOf']('mpack') && console['log']('=============resMgrLoad url:', figed), defac['EnvConfig']['resMgrLoad'](figed, (snop, y_$z, niklm) => {
        nmlkjo['prototype']['resMgrLoadCallBack'](snop, y_$z, niklm, otsprq);
      }, romqnp, qtpos, vxstrw, jokl, rqtp);
    }, hidefg['resMgrLoadCallBack'] = function (rqopst, ejgfih, qpsvr, oplnk) {
      console['log']('buff:::', rqopst, qpsvr, mkjlih['fileNativeDir'] + '///' + mkjlih['fileListName']), oplnk(rqopst, ejgfih, qpsvr);
    }, hidefg['clearRes'] = function (mljhi, mqnpr) {
      this['clearRes'](mljhi, mqnpr = void 0x0 === mqnpr ? !0x1 : mqnpr), mqnpr = mkjlih['getFileInfo'](mljhi), !mqnpr || -0x1 == mljhi['indexOf']('http://') && -0x1 == mljhi['indexOf']('https://') || (mqnpr = mqnpr['md5'], mqnpr = mkjlih['getFileNativePath'](mqnpr), mkjlih['remove'](mqnpr));
    }, nmlkjo['onReadNativeCallBack'] = function (fcbd, gikjhl, hfegji, _0312$, knljm, trsvqp, qvwtr, higjef, yx0z$_) {
      void 0x0 === _0312$ && (_0312$ = !0x0), void 0x0 === trsvqp && (trsvqp = !0x1), (higjef = void 0x0 === higjef ? 0x0 : higjef) ? 0x1 == higjef && defac['EnvConfig']['load']['call'](qvwtr, gikjhl, hfegji, _0312$, knljm, trsvqp) : (yx0z$_ = 'json' == hfegji || 'atlas' == hfegji ? defac['getJson'](yx0z$_['data']) : 'xml' == hfegji ? z_x['parseXMLFromString'](yx0z$_['data']) : yx0z$_['data'], qvwtr['onLoaded'](yx0z$_), !defac['isZiYu'] && defac['isPosMsgYu'] && 'arraybuffer' != hfegji && wx['postMessage']({ 'url': gikjhl, 'data': yx0z$_, 'isLoad': !0x0 }));
    }, fgidhe(nmlkjo, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), nmlkjo;
  }(),
      mkjlih = (jgh(pvtr, 'laya.wx.mini.MiniFileMgr', imlh), pvtr['isLoadFile'] = function (z$_xyw) {
    return -0x1 != pvtr['_fileTypeArr']['indexOf'](z$_xyw);
  }, pvtr['getFileInfo'] = function (jknmli) {
    return jknmli = jknmli['split']('?')[0x0], jknmli = pvtr['filesListObj'][jknmli], null == jknmli ? null : jknmli;
  }, pvtr['onFileUpdate'] = function (bgcedf, lji) {
    var sxwtvr = bgcedf['split']('/');bgcedf = sxwtvr[sxwtvr['length'] - 0x1], sxwtvr = pvtr['getFileInfo'](lji), null == sxwtvr ? pvtr['onSaveFile'](lji, bgcedf) : sxwtvr['readyUrl'] != lji && pvtr['remove'](bgcedf, lji);
  }, pvtr['exits'] = function (bdfceg, rsptv) {
    bdfceg = pvtr['getFileNativePath'](bdfceg), pvtr['fs']['getFileInfo']({ 'filePath': bdfceg, 'success': function (qrwvs) {
        null != rsptv && rsptv['runWith']([0x0, qrwvs]);
      }, 'fail': function (igfjkh) {
        null != rsptv && rsptv['runWith']([0x1, igfjkh]);
      } });
  }, pvtr['read'] = function (gij, dhiegf, fcbged, _yx$z) {
    void 0x0 === dhiegf && (dhiegf = 'ascill'), gij = '' != (_yx$z = void 0x0 === _yx$z ? '' : _yx$z) ? pvtr['getFileNativePath'](gij) : gij, pvtr['fs']['readFile']({ 'filePath': gij, 'encoding': dhiegf, 'success': function (cdgfe) {
        null != fcbged && fcbged['runWith']([0x0, cdgfe]);
      }, 'fail': function (pmoknl) {
        pmoknl && '' != _yx$z ? pvtr['down'](_yx$z, dhiegf, fcbged, _yx$z) : null != fcbged && fcbged['runWith']([0x1]);
      } });
  }, pvtr['readNativeFile'] = function (jnkm, yxz$w) {
    pvtr['fs']['readFile']({ 'filePath': jnkm, 'encoding': '', 'success': function ($10yz) {
        null != yxz$w && yxz$w['runWith']([0x0]);
      }, 'fail': function (fgcdb) {
        null != yxz$w && yxz$w['runWith']([0x1]);
      } });
  }, pvtr['down'] = function (okpnl, jkhfig, _203$1, dbfg) {
    void 0x0 === jkhfig && (jkhfig = 'ascill'), void 0x0 === dbfg && (dbfg = '');var deih = pvtr['getFileNativePath'](dbfg);pvtr['wxdown']({ 'url': okpnl, 'filePath': deih, 'success': function (konlpm) {
        0xc8 === konlpm['statusCode'] && pvtr['readFile'](konlpm['filePath'], jkhfig, _203$1, dbfg);
      }, 'fail': function (jigfeh) {
        null != _203$1 && _203$1['runWith']([0x1, jigfeh]);
      } })['onProgressUpdate'](function (dcabef) {
      null != _203$1 && _203$1['runWith']([0x2, dcabef['progress']]);
    });
  }, pvtr['readFile'] = function (tospr, yxwtv, okjln, pqmlo) {
    void 0x0 === pqmlo && (pqmlo = ''), pvtr['fs']['readFile']({ 'filePath': tospr, 'encoding': yxwtv = void 0x0 === yxwtv ? 'ascill' : yxwtv, 'success': function (_32140) {
        -0x1 == tospr['indexOf']('http://') && -0x1 == tospr['indexOf']('https://') || pvtr['onFileUpdate'](tospr, pqmlo), null != okjln && okjln['runWith']([0x0, _32140]);
      }, 'fail': function (mrqnop) {
        mrqnop && null != okjln && okjln['runWith']([0x1, mrqnop]);
      } });
  }, pvtr['downImg'] = function (_$0zx, hgfdc, _wyz$) {
    void 0x0 === _wyz$ && (_wyz$ = ''), pvtr['wxdown']({ 'url': _$0zx, 'success': function (fcbdea) {
        0xc8 === fcbdea['statusCode'] && pvtr['copyFile'](fcbdea['tempFilePath'], _wyz$, hgfdc);
      }, 'fail': function ($213_0) {
        null != hgfdc && hgfdc['runWith']([0x1, $213_0]);
      } });
  }, pvtr['copyFile'] = function (orspnq, hfdige, hjlmik) {
    var figj = orspnq['split']('/'),
        fgikj = figj[figj['length'] - 0x1];hfdige['split']('?')[0x0];var ihgej = pvtr['getFileInfo'](hfdige);figj = pvtr['getFileNativePath'](fgikj), pvtr['fs']['copyFile']({ 'srcPath': orspnq, 'destPath': figj, 'success': function (fcdb) {
        ihgej ? ihgej['readyUrl'] != hfdige && pvtr['remove'](fgikj, hfdige, hjlmik) : (pvtr['onSaveFile'](hfdige, fgikj), null != hjlmik && hjlmik['runWith']([0x0]));
      }, 'fail': function (psvrtq) {
        null != hjlmik && hjlmik['runWith']([0x1, psvrtq]);
      } });
  }, pvtr['getFileNativePath'] = function (_$zw) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _$zw;
  }, pvtr['remove'] = function (gcehdf, fdebca, hjefg) {
    void 0x0 === fdebca && (fdebca = '');var giedfh = pvtr['getFileInfo'](fdebca),
        gfhei = pvtr['getFileNativePath'](giedfh['md5']);jhmk['loader']['clearRes'](giedfh['readyUrl']), pvtr['fs']['unlink']({ 'filePath': gfhei, 'success': function (tswqr) {
        '' != fdebca && pvtr['onSaveFile'](fdebca, gcehdf), null != hjefg && hjefg['runWith']([0x0]);
      }, 'fail': function (lqomnp) {} });
  }, pvtr['onSaveFile'] = function (tpor, z$wy) {
    var jnklmo = tpor['split']('?')[0x0];pvtr['filesListObj'][jnklmo] = { 'md5': z$wy, 'readyUrl': tpor }, pvtr['fs']['writeFile']({ 'filePath': pvtr['fileNativeDir'] + '/' + pvtr['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pvtr['filesListObj']), 'success': function (rpstqo) {
        console['log']('写入测试测试成功：', rpstqo);
      }, 'fail': function (yx$z_0) {
        console['log']('写入测试测试失败：', yx$z_0);
      } });
  }, pvtr['existDir'] = function (higl, bfcaed) {
    pvtr['fs']['mkdir']({ 'dirPath': higl, 'success': function (poqst) {
        null != bfcaed && bfcaed['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (ztyvx) {
        -0x1 != ztyvx['errMsg']['indexOf']('file already exists') ? pvtr['readSync'](pvtr['fileListName'], 'utf8', bfcaed) : null != bfcaed && bfcaed['runWith']([0x1, ztyvx]);
      } });
  }, pvtr['readSync'] = function (hiegd, gifhd, _24301, ijfkg) {
    void 0x0 === gifhd && (gifhd = 'ascill'), void 0x0 === ijfkg && (ijfkg = ''), hiegd = pvtr['getFileNativePath'](hiegd);var _1$0zy;try {
      _1$0zy = pvtr['fs']['readFileSync'](hiegd), null != _24301 && _24301['runWith']([0x0, { 'data': _1$0zy }]);
    } catch (likjhm) {
      null != _24301 && _24301['runWith']([0x1]);
    }
  }, pvtr['readCache'] = function () {}, pvtr['writeCache'] = function (khif) {
    var rxwts = readyUrl['split']('?')[0x0];pvtr['filesListObj'][rxwts] = { 'md5': md5Name, 'readyUrl': readyUrl }, pvtr['fs']['writeFile']({ 'filePath': pvtr['fileNativeDir'] + '/' + pvtr['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pvtr['filesListObj']), 'success': function (spoq) {}, 'fail': function (jgilhk) {} });
  }, pvtr['setNativeFileDir'] = function (jkmonl) {
    pvtr['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + jkmonl;
  }, pvtr['filesListObj'] = {}, pvtr['fileNativeDir'] = null, pvtr['fileListName'] = 'layaairfiles.txt', pvtr['ziyuFileData'] = {}, fgidhe(pvtr, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), pvtr);function pvtr() {
    pvtr['__super']['call'](this);
  }var nqsp = function () {
    function gfkhji() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, gfkhji['__super']['call'](this), this['_sound'] = gfkhji['_createSound']();
    }jgh(gfkhji, 'laya.wx.mini.MiniSound', imlh);var _$02z1 = gfkhji['prototype'];return _$02z1['load'] = function (_23$0) {
      var qsrvp = this,
          fiegj;function hfikjg() {
        if (null != gfkhji['_null']) qsrvp['_sound']['onCanplay'](gfkhji['_null']), qsrvp['_sound']['onError'](gfkhji['_null']);else try {
          qsrvp['_sound']['onCanplay'](null), qsrvp['_sound']['onError'](null), gfkhji['_null'] = null;
        } catch (efcbda) {
          console['warn']('[wxmini] _clearSound:' + efcbda), qsrvp['_sound']['onCanplay'](rvtsx), qsrvp['_sound']['onError'](rvtsx), gfkhji['_null'] = rvtsx;
        }
      }function rvtsx() {}_23$0 = z_yxw['formatURL'](_23$0), this['url'] = _23$0, gfkhji['_audioCache'][_23$0] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        hfikjg(), fiegj['loaded'] = !0x0, fiegj['event']('complete'), gfkhji['_audioCache'][fiegj['url']] = fiegj;
      }), this['_sound']['onError'](function (lkji) {
        console['error']('errCode=' + lkji['errCode'] + '  errMsg=' + lkji['errMsg']), hfikjg(), fiegj['event']('error');
      }), this['_sound']['src'] = _23$0, fiegj = this);
    }, _$02z1['play'] = function (fgijeh, onsqp) {
      void 0x0 === fgijeh && (fgijeh = 0x0), void 0x0 === onsqp && (onsqp = 0x0), (hikljg = this['url'] == ghfdec['_tMusic'] ? (gfkhji['_musicAudio'] || (gfkhji['_musicAudio'] = gfkhji['_createSound']()), gfkhji['_musicAudio']) : gfkhji['_createSound']())['src'] = this['url'];var hikljg = new z1$0_2(hikljg);return hikljg['url'] = this['url'], hikljg['loops'] = onsqp, hikljg['startTime'] = fgijeh, hikljg['play'](), ghfdec['addChannel'](hikljg), hikljg;
    }, _$02z1['dispose'] = function () {
      var cfdh = gfkhji['_audioCache'][this['url']];cfdh && (cfdh['src'] = '', delete gfkhji['_audioCache'][this['url']]);
    }, onpmlq(0x0, _$02z1, 'duration', function () {
      return this['_sound']['duration'];
    }), gfkhji['_createSound'] = function () {
      return gfkhji['_id']++, defac['window']['wx']['createInnerAudioContext']();
    }, gfkhji['_musicAudio'] = null, gfkhji['_id'] = 0x0, gfkhji['_audioCache'] = {}, gfkhji['_null'] = void 0x0, gfkhji;
  }(),
      z1$0_2 = function () {
    function _2(lnkjo) {
      this['_audio'] = null, this['_onEnd'] = null, _2['__super']['call'](this), this['_audio'] = lnkjo, this['_onEnd'] = z_x['bind'](this['__onEnd'], this), lnkjo['onEnded'](this['_onEnd']);
    }jgh(_2, 'laya.wx.mini.MiniSoundChannel', rxtw);var mlhki = _2['prototype'];return mlhki['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (jhmk['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, mlhki['__onNull'] = function () {}, mlhki['play'] = function () {
      this['isStopped'] = !0x1, ghfdec['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, mlhki['stop'] = function () {
      if (this['isStopped'] = !0x0, ghfdec['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != _2['_null']) this['_audio']['onEnded'](_2['_null']);else try {
          this['_audio']['onEnded'](null), _2['_null'] = null;
        } catch (yxwt) {
          console['warn']('[wxmini] stop:' + yxwt), this['_audio']['onEnded'](z_x['bind'](this['__onNull'], this)), _2['_null'] = z_x['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, mlhki['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, mlhki['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, ghfdec['addChannel'](this), this['_audio']['play']());
    }, onpmlq(0x0, mlhki, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), onpmlq(0x0, mlhki, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), onpmlq(0x0, mlhki, 'volume', function () {
      return 0x1;
    }, function (qstwr) {}), _2['_null'] = void 0x0, _2;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (zwtxv, wrxvt) {
  'use strict';
  for (var _$z1 in Object['defineProperty'](wrxvt, '__esModule', { 'value': !0x0 }), Laya) {
    var vpqstr = Laya[_$z1];vpqstr && vpqstr['__isclass'] && (wrxvt[_$z1] = vpqstr);
  }
});