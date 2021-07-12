var _$ = wx.x$;
!function (mqonpr, xtsv) {
  xtsv['un'], xtsv['uns'];var orspn = xtsv['static'],
      $3240 = xtsv['class'],
      sptro = xtsv['getset'];xtsv['__newvec'];var gkihl = laya['utils']['Browser'],
      y01$zx = (laya['events']['Event'], laya['events']['EventDispatcher']),
      ljghik = laya['resource']['HTMLImage'],
      efhgdc = laya['utils']['Handler'],
      onmrqp = laya['display']['Input'],
      mjnolk = laya['net']['Loader'];laya['maths']['Matrix'];var zyw$0x = laya['renders']['Render'],
      badcfe = laya['utils']['RunDriver'];laya['media']['Sound'];var vytxuw = laya['media']['SoundChannel'],
      qrvs = laya['media']['SoundManager'],
      bcdfg = (laya['display']['Stage'], laya['net']['URL']),
      yz0 = laya['utils']['Utils'],
      eg = ($3240(jgeh, 'laya.wx.mini.MiniAdpter'), jgeh['getJson'] = function (uwzvyx) {
    return JSON['parse'](uwzvyx);
  }, jgeh['init'] = function (wuvs, deacb) {
    void 0x0 === wuvs && (wuvs = !0x1), void 0x0 === deacb && (deacb = !0x1), jgeh['_inited'] || (jgeh['window'] = mqonpr)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (jgeh['_inited'] = !0x0, jgeh['isZiYu'] = deacb, jgeh['isPosMsgYu'] = wuvs, jgeh['EnvConfig'] = {}, jgeh['isZiYu'] || (tspro['setNativeFileDir']('/layaairGame'), tspro['existDir'](tspro['fileNativeDir'], efhgdc['create'](jgeh, jgeh['onMkdirCallBack']))), jgeh['window']['focus'] = function () {}, xtsv['getUrlPath'] = function () {}, jgeh['window']['logtime'] = function (omkl) {}, jgeh['window']['alertTimeLog'] = function (vuxyzw) {}, jgeh['window']['resetShareInfo'] = function () {}, jgeh['window']['CanvasRenderingContext2D'] = function () {}, jgeh['window']['CanvasRenderingContext2D']['prototype'] = jgeh['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], jgeh['window']['document']['body']['appendChild'] = function () {}, jgeh['EnvConfig']['pixelRatioInt'] = 0x0, badcfe['getPixelRatio'] = jgeh['pixelRatio'], jgeh['_preCreateElement'] = gkihl['createElement'], gkihl['createElement'] = jgeh['createElement'], badcfe['createShaderCondition'] = jgeh['createShaderCondition'], yz0['parseXMLFromString'] = jgeh['parseXMLFromString'], onmrqp['_createInputElement'] = gejhf['_createInputElement'], jgeh['EnvConfig']['load'] = mjnolk['prototype']['load'], mjnolk['prototype']['load'] = niljm['prototype']['load'], jgeh['isZiYu'] && wuvs && wx['onMessage'](function (qnorsp) {
      qnorsp['isLoad'] && (tspro['ziyuFileData'][qnorsp['url']] = qnorsp['data']);
    }));
  }, jgeh['onMkdirCallBack'] = function (hkgjli, adfcb) {
    hkgjli || (tspro['filesListObj'] = JSON['parse'](adfcb['data']));
  }, jgeh['pixelRatio'] = function () {
    if (!jgeh['EnvConfig']['pixelRatioInt']) try {
      var khgijl = wx['getSystemInfoSync']();return jgeh['EnvConfig']['pixelRatioInt'] = khgijl['pixelRatio'], khgijl['pixelRatio'];
    } catch (tsoqrp) {}return jgeh['EnvConfig']['pixelRatioInt'];
  }, jgeh['createElement'] = function (cdfae) {
    var xyz$10;if ('canvas' == cdfae) return 0x1 == jgeh['idx'] ? jgeh['isZiYu'] ? (xyz$10 = sharedCanvas)['style'] = {} : xyz$10 = mqonpr['canvas'] : xyz$10 = mqonpr['wx']['createCanvas'](), jgeh['idx']++, xyz$10;if ('textarea' == cdfae || 'input' == cdfae) return jgeh['onCreateInput'](cdfae);if ('div' != cdfae) return jgeh['_preCreateElement'](cdfae);return cdfae = jgeh['_preCreateElement'](cdfae), (cdfae['contains'] = function (dhef) {
      return null;
    }, cdfae['removeChild'] = function (oprtsq) {}, cdfae);
  }, jgeh['onCreateInput'] = function (uwtvsr) {
    return uwtvsr = jgeh['_preCreateElement'](uwtvsr), (uwtvsr['focus'] = gejhf['wxinputFocus'], uwtvsr['blur'] = gejhf['wxinputblur'], uwtvsr['style'] = {}, uwtvsr['value'] = 0x0, uwtvsr['parentElement'] = {}, uwtvsr['placeholder'] = {}, uwtvsr['type'] = {}, uwtvsr['setColor'] = function (yx$zwv) {}, uwtvsr['setType'] = function (lk) {}, uwtvsr['setFontFace'] = function (dige) {}, uwtvsr['addEventListener'] = function (kgjhfi) {}, uwtvsr['contains'] = function (tqvsu) {
      return null;
    }, uwtvsr['removeChild'] = function (oknmlp) {}, uwtvsr);
  }, jgeh['createShaderCondition'] = function ($320z) {
    var mploq = this;return function () {
      return mploq[$320z['replace']('this.', '')];
    };
  }, jgeh['EnvConfig'] = null, jgeh['window'] = null, jgeh['_preCreateElement'] = null, jgeh['_inited'] = !0x1, jgeh['wxRequest'] = null, jgeh['ZHGF'] = null, jgeh['version'] = '0.0.1', jgeh['isZiYu'] = !0x1, jgeh['isPosMsgYu'] = !0x1, jgeh['parseXMLFromString'] = function (olkmp) {
    var tsvq;olkmp = olkmp['replace'](/>\s+</g, '><');try {
      tsvq = new mqonpr['Parser']['DOMParser']()['parseFromString'](olkmp, 'text/xml');
    } catch ($1z302) {
      throw '需要引入xml解析库文件';
    }return tsvq;
  }, jgeh['idx'] = 0x1, jgeh);function jgeh() {}$3240(hilkjg, 'laya.wx.mini.MiniImage'), hilkjg['prototype']['_loadImage'] = function (gcfhd) {
    var mklpon = !0x1;-0x1 == gcfhd['indexOf']('layaNativeDir/') && (mklpon = !0x0, gcfhd = bcdfg['formatURL'](gcfhd)), tspro['getFileInfo'](gcfhd) ? hilkjg['onCreateImage'](gcfhd, this, !mklpon) : -0x1 != gcfhd['indexOf']('http://') || -0x1 != gcfhd['indexOf']('https://') ? tspro['downImg'](gcfhd, new efhgdc(hilkjg, hilkjg['onDownImgCallBack'], [gcfhd, this]), gcfhd) : hilkjg['onCreateImage'](gcfhd, this, !0x0);
  }, hilkjg['onDownImgCallBack'] = function (bcafde, sptur, z021y) {
    z021y ? sptur['onError'](null) : hilkjg['onCreateImage'](bcafde, sptur);
  }, hilkjg['onCreateImage'] = function (urvstw, qptsru, $32z) {
    var yuw, yzuxw;function pqts() {
      yzuxw['onload'] = null, yzuxw['onerror'] = null, delete qptsru['imgCache'][urvstw];
    }yuw = ($32z = void 0x0 === $32z ? !0x1 : $32z) ? urvstw : (cfbeg = tspro['getFileInfo'](urvstw)['md5'], tspro['getFileNativePath'](cfbeg)), null == qptsru['imgCache'] && (qptsru['imgCache'] = {}), $32z = function () {
      pqts(), qptsru['onLoaded'](yzuxw);
    };var cfbeg = function () {
      pqts(), qptsru['event']('error', 'Load image failed');
    };'nativeimage' == qptsru['_type'] ? ((yzuxw = new gkihl['window']['Image']())['crossOrigin'] = '', yzuxw['onload'] = $32z, yzuxw['onerror'] = cfbeg, yzuxw['src'] = yuw, qptsru['imgCache'][urvstw] = yzuxw) : new ljghik['create'](yuw, { 'onload': $32z, 'onerror': cfbeg, 'onCreate': function ($yx1z0) {
        yzuxw = $yx1z0, qptsru['imgCache'][urvstw] = $yx1z0;
      } });
  };function hilkjg() {}var gejhf = ($3240(fabce, 'laya.wx.mini.MiniInput'), fabce['_createInputElement'] = function () {
    onmrqp['_initInput'](onmrqp['area'] = gkihl['createElement']('textarea')), onmrqp['_initInput'](onmrqp['input'] = gkihl['createElement']('input')), onmrqp['inputContainer'] = gkihl['createElement']('div'), onmrqp['inputContainer']['style']['position'] = 'absolute', onmrqp['inputContainer']['style']['zIndex'] = 0x186a0, gkihl['container']['appendChild'](onmrqp['inputContainer']), onmrqp['inputContainer']['setPos'] = function (lkihmj, lhjkm) {
      onmrqp['inputContainer']['style']['left'] = lkihmj + 'px', onmrqp['inputContainer']['style']['top'] = lhjkm + 'px';
    }, xtsv['stage']['on']('resize', null, fabce['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (qpmoln) {
      mqonpr['dispatchEvent'] && mqonpr['dispatchEvent']('resize');
    }), qrvs['_soundClass'] = omlpnk, qrvs['_musicClass'] = omlpnk;
  }, fabce['_onStageResize'] = function () {
    xtsv['stage']['_canvasTransform']['identity']()['scale'](gkihl['width'] / zyw$0x['canvas']['width'] / badcfe['getPixelRatio'](), gkihl['height'] / zyw$0x['canvas']['height'] / badcfe['getPixelRatio']());
  }, fabce['wxinputFocus'] = function (feig) {
    var olkmj = onmrqp['inputElement']['target'];olkmj && !olkmj['editable'] || (eg['window']['wx']['offKeyboardConfirm'](), eg['window']['wx']['offKeyboardInput'](), eg['window']['wx']['showKeyboard']({ 'defaultValue': olkmj['text'], 'maxLength': olkmj['maxChars'], 'multiple': olkmj['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (lkjmih) {}, 'fail': function (yxvz$w) {} }), eg['window']['wx']['onKeyboardConfirm'](function (tvqs) {
      tvqs = tvqs ? tvqs['value'] : '', (olkmj['text'] = tvqs, olkmj['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), eg['window']['wx']['onKeyboardInput'](function (zy0$21) {
      zy0$21 = zy0$21 ? zy0$21['value'] : '', olkmj['multiline'] || -0x1 == zy0$21['indexOf']('\x0a') ? (olkmj['text'] = zy0$21, olkmj['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, fabce['inputEnter'] = function () {
    onmrqp['inputElement']['target']['focus'] = !0x1;
  }, fabce['wxinputblur'] = function () {
    fabce['hideKeyboard']();
  }, fabce['hideKeyboard'] = function () {
    eg['window']['wx']['offKeyboardConfirm'](), eg['window']['wx']['offKeyboardInput'](), eg['window']['wx']['hideKeyboard']({ 'success': function (pklno) {
        console['log']('隐藏键盘');
      }, 'fail': function (vxwyut) {
        console['log']('隐藏键盘出错:' + (vxwyut ? vxwyut['errMsg'] : ''));
      } });
  }, fabce);function fabce() {}var niljm = function () {
    function uyxzvw() {}$3240(uyxzvw, 'laya.wx.mini.MiniLoader');var onpqr = uyxzvw['prototype'];return onpqr['load'] = function (kjo, hfk, z1xy0$, ikjnlm, nkpmol) {
      void 0x0 === z1xy0$ && (z1xy0$ = !0x0), void 0x0 === nkpmol && (nkpmol = !0x1);var ikhjf = this;0x0 === (ikhjf['_url'] = kjo)['indexOf']('data:image') ? ikhjf['_type'] = hfk = 'image' : ikhjf['_type'] = hfk = hfk || ikhjf['getTypeFromUrl'](kjo), ikhjf['_cache'] = z1xy0$, ikhjf['_data'] = null;var y12$0z = 'ascii';-0x1 != kjo['indexOf']('.fnt') ? y12$0z = 'utf8' : 'arraybuffer' == hfk && (y12$0z = '');var uzvy = yz0['getFileExtension'](kjo);if (-0x1 != uyxzvw['_fileTypeArr']['indexOf'](uzvy)) eg['EnvConfig']['load']['call'](this, kjo, hfk, z1xy0$, ikjnlm, nkpmol);else {
        if (tspro['getFileInfo'](kjo)) eg['EnvConfig']['load']['call'](this, kjo, hfk, z1xy0$, ikjnlm, nkpmol);else {
          if (-0x1 != kjo['indexOf']('layaNativeDir/')) {
            if (eg['isZiYu']) {
              var ehcdf = tspro['ziyuFileData'][kjo];return void ikhjf['onLoaded'](ehcdf);
            }return cosnole['log']('read read'), void tspro['read'](kjo, y12$0z, new efhgdc(uyxzvw, uyxzvw['onReadNativeCallBack'], [y12$0z, kjo, hfk, z1xy0$, ikjnlm, nkpmol, ikhjf]));
          }ehcdf = '' == bcdfg['rootPath'] ? kjo : kjo['split'](bcdfg['rootPath'])[0x0], -0x1 != kjo['indexOf']('http://') || -0x1 != kjo['indexOf']('https://') ? eg['EnvConfig']['load']['call'](ikhjf, kjo, hfk, z1xy0$, ikjnlm, nkpmol) : tspro['readFile'](ehcdf, y12$0z, new efhgdc(uyxzvw, uyxzvw['onReadNativeCallBack'], [y12$0z, kjo, hfk, z1xy0$, ikjnlm, nkpmol, ikhjf]), kjo);
        }
      }
    }, onpqr['resMgrLoad'] = function (kghjf, zx0y, jkmi, uswrt, nmplq, nmlkij, chef) {
      void 0x0 === jkmi && (jkmi = 0x0), void 0x0 === uswrt && (uswrt = !0x1), void 0x0 === nmplq && (nmplq = !0x1), void 0x0 === nmlkij && (nmlkij = 0x0), void 0x0 === chef && (chef = 0x3), -0x1 != kghjf['indexOf']('mpack') && console['log']('=============resMgrLoad url:', kghjf), eg['EnvConfig']['resMgrLoad'](kghjf, (w0zx$, gidhfe, olqnpm) => {
        uyxzvw['prototype']['resMgrLoadCallBack'](w0zx$, gidhfe, olqnpm, zx0y);
      }, jkmi, uswrt, nmplq, nmlkij, chef);
    }, onpqr['resMgrLoadCallBack'] = function (rswvtu, rvwtus, nrpoq, uwtvyx) {
      console['log']('buff:::', rswvtu, nrpoq, tspro['fileNativeDir'] + '///' + tspro['fileListName']), uwtvyx(rswvtu, rvwtus, nrpoq);
    }, onpqr['clearRes'] = function (prqstu, hcgdef) {
      this['clearRes'](prqstu, hcgdef = void 0x0 === hcgdef ? !0x1 : hcgdef), hcgdef = tspro['getFileInfo'](prqstu), !hcgdef || -0x1 == prqstu['indexOf']('http://') && -0x1 == prqstu['indexOf']('https://') || (hcgdef = hcgdef['md5'], hcgdef = tspro['getFileNativePath'](hcgdef), tspro['remove'](hcgdef));
    }, uyxzvw['onReadNativeCallBack'] = function (oqtrps, jlgi, jlmin, kljim, tqvur, bedcfg, $wzx0, uytx, zyx$0w) {
      void 0x0 === kljim && (kljim = !0x0), void 0x0 === bedcfg && (bedcfg = !0x1), (uytx = void 0x0 === uytx ? 0x0 : uytx) ? 0x1 == uytx && eg['EnvConfig']['load']['call']($wzx0, jlgi, jlmin, kljim, tqvur, bedcfg) : (zyx$0w = 'json' == jlmin || 'atlas' == jlmin ? eg['getJson'](zyx$0w['data']) : 'xml' == jlmin ? yz0['parseXMLFromString'](zyx$0w['data']) : zyx$0w['data'], $wzx0['onLoaded'](zyx$0w), !eg['isZiYu'] && eg['isPosMsgYu'] && 'arraybuffer' != jlmin && wx['postMessage']({ 'url': jlgi, 'data': zyx$0w, 'isLoad': !0x0 }));
    }, orspn(uyxzvw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), uyxzvw;
  }(),
      tspro = ($3240(sruwv, 'laya.wx.mini.MiniFileMgr', y01$zx), sruwv['isLoadFile'] = function (gdef) {
    return -0x1 != sruwv['_fileTypeArr']['indexOf'](gdef);
  }, sruwv['getFileInfo'] = function (mjl) {
    return mjl = mjl['split']('?')[0x0], mjl = sruwv['filesListObj'][mjl], null == mjl ? null : mjl;
  }, sruwv['onFileUpdate'] = function (qvrst, qutvsr) {
    var feghid = qvrst['split']('/');qvrst = feghid[feghid['length'] - 0x1], feghid = sruwv['getFileInfo'](qutvsr), null == feghid ? sruwv['onSaveFile'](qutvsr, qvrst) : feghid['readyUrl'] != qutvsr && sruwv['remove'](qvrst, qutvsr);
  }, sruwv['exits'] = function (z$230, hfjikg) {
    z$230 = sruwv['getFileNativePath'](z$230), sruwv['fs']['getFileInfo']({ 'filePath': z$230, 'success': function (x0y) {
        null != hfjikg && hfjikg['runWith']([0x0, x0y]);
      }, 'fail': function (gcfbe) {
        null != hfjikg && hfjikg['runWith']([0x1, gcfbe]);
      } });
  }, sruwv['read'] = function (pnqol, pnorqs, nmoqpr, yx1z0) {
    void 0x0 === pnorqs && (pnorqs = 'ascill'), pnqol = '' != (yx1z0 = void 0x0 === yx1z0 ? '' : yx1z0) ? sruwv['getFileNativePath'](pnqol) : pnqol, sruwv['fs']['readFile']({ 'filePath': pnqol, 'encoding': pnorqs, 'success': function (gfiej) {
        null != nmoqpr && nmoqpr['runWith']([0x0, gfiej]);
      }, 'fail': function (toqsrp) {
        toqsrp && '' != yx1z0 ? sruwv['down'](yx1z0, pnorqs, nmoqpr, yx1z0) : null != nmoqpr && nmoqpr['runWith']([0x1]);
      } });
  }, sruwv['readNativeFile'] = function (y2$01z, cefa) {
    sruwv['fs']['readFile']({ 'filePath': y2$01z, 'encoding': '', 'success': function (nklmi) {
        null != cefa && cefa['runWith']([0x0]);
      }, 'fail': function (nokmlp) {
        null != cefa && cefa['runWith']([0x1]);
      } });
  }, sruwv['down'] = function (cgefdb, cedh, rsvqu, nmopr) {
    void 0x0 === cedh && (cedh = 'ascill'), void 0x0 === nmopr && (nmopr = '');var gbdcf = sruwv['getFileNativePath'](nmopr);sruwv['wxdown']({ 'url': cgefdb, 'filePath': gbdcf, 'success': function (ustvwr) {
        0xc8 === ustvwr['statusCode'] && sruwv['readFile'](ustvwr['filePath'], cedh, rsvqu, nmopr);
      }, 'fail': function (tuvsqr) {
        null != rsvqu && rsvqu['runWith']([0x1, tuvsqr]);
      } })['onProgressUpdate'](function (ijnm) {
      null != rsvqu && rsvqu['runWith']([0x2, ijnm['progress']]);
    });
  }, sruwv['readFile'] = function (nsroq, $y1zx, xwsuv, y0zx$) {
    void 0x0 === y0zx$ && (y0zx$ = ''), sruwv['fs']['readFile']({ 'filePath': nsroq, 'encoding': $y1zx = void 0x0 === $y1zx ? 'ascill' : $y1zx, 'success': function (trquvs) {
        -0x1 == nsroq['indexOf']('http://') && -0x1 == nsroq['indexOf']('https://') || sruwv['onFileUpdate'](nsroq, y0zx$), null != xwsuv && xwsuv['runWith']([0x0, trquvs]);
      }, 'fail': function (urqstp) {
        urqstp && null != xwsuv && xwsuv['runWith']([0x1, urqstp]);
      } });
  }, sruwv['downImg'] = function (yv$x, ljikh, gfj) {
    void 0x0 === gfj && (gfj = ''), sruwv['wxdown']({ 'url': yv$x, 'success': function (dacbf) {
        0xc8 === dacbf['statusCode'] && sruwv['copyFile'](dacbf['tempFilePath'], gfj, ljikh);
      }, 'fail': function (kmljo) {
        null != ljikh && ljikh['runWith']([0x1, kmljo]);
      } });
  }, sruwv['copyFile'] = function (trwsuv, vtwsru, mqnr) {
    var nqpmro = trwsuv['split']('/'),
        trvqu = nqpmro[nqpmro['length'] - 0x1];vtwsru['split']('?')[0x0];var jkolmn = sruwv['getFileInfo'](vtwsru);nqpmro = sruwv['getFileNativePath'](trvqu), sruwv['fs']['copyFile']({ 'srcPath': trwsuv, 'destPath': nqpmro, 'success': function (wzuvxy) {
        jkolmn ? jkolmn['readyUrl'] != vtwsru && sruwv['remove'](trvqu, vtwsru, mqnr) : (sruwv['onSaveFile'](vtwsru, trvqu), null != mqnr && mqnr['runWith']([0x0]));
      }, 'fail': function (hfkg) {
        null != mqnr && mqnr['runWith']([0x1, hfkg]);
      } });
  }, sruwv['getFileNativePath'] = function (ehigfd) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ehigfd;
  }, sruwv['remove'] = function (wzy$, qrspon, afdcb) {
    void 0x0 === qrspon && (qrspon = '');var lnmkj = sruwv['getFileInfo'](qrspon),
        hkmil = sruwv['getFileNativePath'](lnmkj['md5']);xtsv['loader']['clearRes'](lnmkj['readyUrl']), sruwv['fs']['unlink']({ 'filePath': hkmil, 'success': function ($yzvx) {
        '' != qrspon && sruwv['onSaveFile'](qrspon, wzy$), null != afdcb && afdcb['runWith']([0x0]);
      }, 'fail': function (ehdfgi) {} });
  }, sruwv['onSaveFile'] = function (qpust, onlqm) {
    var ikgjf = qpust['split']('?')[0x0];sruwv['filesListObj'][ikgjf] = { 'md5': onlqm, 'readyUrl': qpust }, sruwv['fs']['writeFile']({ 'filePath': sruwv['fileNativeDir'] + '/' + sruwv['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](sruwv['filesListObj']), 'success': function (nlmpq) {
        console['log']('写入测试测试成功：', nlmpq);
      }, 'fail': function (vwz$y) {
        console['log']('写入测试测试失败：', vwz$y);
      } });
  }, sruwv['existDir'] = function (fhjikg, ecfg) {
    sruwv['fs']['mkdir']({ 'dirPath': fhjikg, 'success': function (qusptr) {
        null != ecfg && ecfg['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (nmoq) {
        -0x1 != nmoq['errMsg']['indexOf']('file already exists') ? sruwv['readSync'](sruwv['fileListName'], 'utf8', ecfg) : null != ecfg && ecfg['runWith']([0x1, nmoq]);
      } });
  }, sruwv['readSync'] = function (wvuytx, jhfikg, mlijh, qmlo) {
    void 0x0 === jhfikg && (jhfikg = 'ascill'), void 0x0 === qmlo && (qmlo = ''), wvuytx = sruwv['getFileNativePath'](wvuytx);var txwuyv;try {
      txwuyv = sruwv['fs']['readFileSync'](wvuytx), null != mlijh && mlijh['runWith']([0x0, { 'data': txwuyv }]);
    } catch (rstvu) {
      null != mlijh && mlijh['runWith']([0x1]);
    }
  }, sruwv['readCache'] = function () {}, sruwv['writeCache'] = function (mkjilh) {
    var nrpsq = readyUrl['split']('?')[0x0];sruwv['filesListObj'][nrpsq] = { 'md5': md5Name, 'readyUrl': readyUrl }, sruwv['fs']['writeFile']({ 'filePath': sruwv['fileNativeDir'] + '/' + sruwv['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](sruwv['filesListObj']), 'success': function (hlkgji) {}, 'fail': function (qruvs) {} });
  }, sruwv['setNativeFileDir'] = function (ihlkm) {
    sruwv['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ihlkm;
  }, sruwv['filesListObj'] = {}, sruwv['fileNativeDir'] = null, sruwv['fileListName'] = 'layaairfiles.txt', sruwv['ziyuFileData'] = {}, orspn(sruwv, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), sruwv);function sruwv() {
    sruwv['__super']['call'](this);
  }var omlpnk = function () {
    function polk() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, polk['__super']['call'](this), this['_sound'] = polk['_createSound']();
    }$3240(polk, 'laya.wx.mini.MiniSound', y01$zx);var baefdc = polk['prototype'];return baefdc['load'] = function (yzx$vw) {
      var vxz = this,
          efgjh;function vtursw() {
        if (null != polk['_null']) vxz['_sound']['onCanplay'](polk['_null']), vxz['_sound']['onError'](polk['_null']);else try {
          vxz['_sound']['onCanplay'](null), vxz['_sound']['onError'](null), polk['_null'] = null;
        } catch (gklj) {
          console['warn']('[wxmini] _clearSound:' + gklj), vxz['_sound']['onCanplay'](qpmnol), vxz['_sound']['onError'](qpmnol), polk['_null'] = qpmnol;
        }
      }function qpmnol() {}yzx$vw = bcdfg['formatURL'](yzx$vw), this['url'] = yzx$vw, polk['_audioCache'][yzx$vw] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        vtursw(), efgjh['loaded'] = !0x0, efgjh['event']('complete'), polk['_audioCache'][efgjh['url']] = efgjh;
      }), this['_sound']['onError'](function (rqnp) {
        console['error']('errCode=' + rqnp['errCode'] + '  errMsg=' + rqnp['errMsg']), vtursw(), efgjh['event']('error');
      }), this['_sound']['src'] = yzx$vw, efgjh = this);
    }, baefdc['play'] = function (rvswt, vtsx) {
      void 0x0 === rvswt && (rvswt = 0x0), void 0x0 === vtsx && (vtsx = 0x0), (z1y02$ = this['url'] == qrvs['_tMusic'] ? (polk['_musicAudio'] || (polk['_musicAudio'] = polk['_createSound']()), polk['_musicAudio']) : polk['_createSound']())['src'] = this['url'];var z1y02$ = new gfiedh(z1y02$);return z1y02$['url'] = this['url'], z1y02$['loops'] = vtsx, z1y02$['startTime'] = rvswt, z1y02$['play'](), qrvs['addChannel'](z1y02$), z1y02$;
    }, baefdc['dispose'] = function () {
      var molpkn = polk['_audioCache'][this['url']];molpkn && (molpkn['src'] = '', delete polk['_audioCache'][this['url']]);
    }, sptro(0x0, baefdc, 'duration', function () {
      return this['_sound']['duration'];
    }), polk['_createSound'] = function () {
      return polk['_id']++, eg['window']['wx']['createInnerAudioContext']();
    }, polk['_musicAudio'] = null, polk['_id'] = 0x0, polk['_audioCache'] = {}, polk['_null'] = void 0x0, polk;
  }(),
      gfiedh = function () {
    function xvzw$y(fgbcd) {
      this['_audio'] = null, this['_onEnd'] = null, xvzw$y['__super']['call'](this), this['_audio'] = fgbcd, this['_onEnd'] = yz0['bind'](this['__onEnd'], this), fgbcd['onEnded'](this['_onEnd']);
    }$3240(xvzw$y, 'laya.wx.mini.MiniSoundChannel', vytxuw);var xsuvwt = xvzw$y['prototype'];return xsuvwt['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (xtsv['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, xsuvwt['__onNull'] = function () {}, xsuvwt['play'] = function () {
      this['isStopped'] = !0x1, qrvs['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, xsuvwt['stop'] = function () {
      if (this['isStopped'] = !0x0, qrvs['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != xvzw$y['_null']) this['_audio']['onEnded'](xvzw$y['_null']);else try {
          this['_audio']['onEnded'](null), xvzw$y['_null'] = null;
        } catch (gbcefd) {
          console['warn']('[wxmini] stop:' + gbcefd), this['_audio']['onEnded'](yz0['bind'](this['__onNull'], this)), xvzw$y['_null'] = yz0['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, xsuvwt['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, xsuvwt['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, qrvs['addChannel'](this), this['_audio']['play']());
    }, sptro(0x0, xsuvwt, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), sptro(0x0, xsuvwt, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), sptro(0x0, xsuvwt, 'volume', function () {
      return 0x1;
    }, function (rpoqm) {}), xvzw$y['_null'] = void 0x0, xvzw$y;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (klihj, ytxwv) {
  'use strict';

  for (var iefhg in Object['defineProperty'](ytxwv, '__esModule', { 'value': !0x0 }), Laya) {
    var zy2$ = Laya[iefhg];zy2$ && zy2$['__isclass'] && (ytxwv[iefhg] = zy2$);
  }
});