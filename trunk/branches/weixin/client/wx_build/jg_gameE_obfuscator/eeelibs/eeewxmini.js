var b = wx.$e;
!function (vgma0z, _984dk) {
  _984dk['un'], _984dk['uns'];var w97k1y = _984dk['static'],
      k9_d48 = _984dk['class'],
      spr2eb = _984dk['getset'];_984dk['__newvec'];var g2amv0 = laya['utils']['Browser'],
      zva0m = (laya['events']['Event'], laya['events']['EventDispatcher']),
      t3jix$ = laya['resource']['HTMLImage'],
      xtqu3$ = laya['utils']['Handler'],
      sb7pyw = laya['display']['Input'],
      av2egr = laya['net']['Loader'];laya['maths']['Matrix'];var qxlhut = laya['renders']['Render'],
      tjix3$ = laya['utils']['RunDriver'];laya['media']['Sound'];var srpa = laya['media']['SoundChannel'],
      pwbse = laya['media']['SoundManager'],
      ofn65 = (laya['display']['Stage'], laya['net']['URL']),
      n849d = laya['utils']['Utils'],
      _6n54 = (k9_d48(ti3$j, 'laya.wx.mini.MiniAdpter'), ti3$j['getJson'] = function (ysw7pb) {
    return JSON['parse'](ysw7pb);
  }, ti3$j['init'] = function (erp2s, o56) {
    void 0x0 === erp2s && (erp2s = !0x1), void 0x0 === o56 && (o56 = !0x1), ti3$j['_inited'] || (ti3$j['window'] = vgma0z)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (ti3$j['_inited'] = !0x0, ti3$j['isZiYu'] = o56, ti3$j['isPosMsgYu'] = erp2s, ti3$j['EnvConfig'] = {}, ti3$j['isZiYu'] || (ae['setNativeFileDir']('/layaairGame'), ae['existDir'](ae['fileNativeDir'], xtqu3$['create'](ti3$j, ti3$j['onMkdirCallBack']))), ti3$j['window']['focus'] = function () {}, _984dk['getUrlPath'] = function () {}, ti3$j['window']['logtime'] = function (thlxqu) {}, ti3$j['window']['alertTimeLog'] = function (j3zi) {}, ti3$j['window']['resetShareInfo'] = function () {}, ti3$j['window']['CanvasRenderingContext2D'] = function () {}, ti3$j['window']['CanvasRenderingContext2D']['prototype'] = ti3$j['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ti3$j['window']['document']['body']['appendChild'] = function () {}, ti3$j['EnvConfig']['pixelRatioInt'] = 0x0, tjix3$['getPixelRatio'] = ti3$j['pixelRatio'], ti3$j['_preCreateElement'] = g2amv0['createElement'], g2amv0['createElement'] = ti3$j['createElement'], tjix3$['createShaderCondition'] = ti3$j['createShaderCondition'], n849d['parseXMLFromString'] = ti3$j['parseXMLFromString'], sb7pyw['_createInputElement'] = ea2rp['_createInputElement'], ti3$j['EnvConfig']['load'] = av2egr['prototype']['load'], av2egr['prototype']['load'] = dn465f['prototype']['load'], ti3$j['isZiYu'] && erp2s && wx['onMessage'](function (beswrp) {
      beswrp['isLoad'] && (ae['ziyuFileData'][beswrp['url']] = beswrp['data']);
    }));
  }, ti3$j['onMkdirCallBack'] = function (e2bpr, bsypw) {
    e2bpr || (ae['filesListObj'] = JSON['parse'](bsypw['data']));
  }, ti3$j['pixelRatio'] = function () {
    if (!ti3$j['EnvConfig']['pixelRatioInt']) try {
      var a20vgr = wx['getSystemInfoSync']();return ti3$j['EnvConfig']['pixelRatioInt'] = a20vgr['pixelRatio'], a20vgr['pixelRatio'];
    } catch (d84n_) {}return ti3$j['EnvConfig']['pixelRatioInt'];
  }, ti3$j['createElement'] = function (easp2r) {
    var gv2ea;if ('canvas' == easp2r) return 0x1 == ti3$j['idx'] ? ti3$j['isZiYu'] ? (gv2ea = sharedCanvas)['style'] = {} : gv2ea = vgma0z['canvas'] : gv2ea = vgma0z['wx']['createCanvas'](), ti3$j['idx']++, gv2ea;if ('textarea' == easp2r || 'input' == easp2r) return ti3$j['onCreateInput'](easp2r);if ('div' != easp2r) return ti3$j['_preCreateElement'](easp2r);return easp2r = ti3$j['_preCreateElement'](easp2r), (easp2r['contains'] = function (jg0m) {
      return null;
    }, easp2r['removeChild'] = function (bspe) {}, easp2r);
  }, ti3$j['onCreateInput'] = function (d4k8_) {
    return d4k8_ = ti3$j['_preCreateElement'](d4k8_), (d4k8_['focus'] = ea2rp['wxinputFocus'], d4k8_['blur'] = ea2rp['wxinputblur'], d4k8_['style'] = {}, d4k8_['value'] = 0x0, d4k8_['parentElement'] = {}, d4k8_['placeholder'] = {}, d4k8_['type'] = {}, d4k8_['setColor'] = function (swr) {}, d4k8_['setType'] = function ($txqu) {}, d4k8_['setFontFace'] = function (p7yw1b) {}, d4k8_['addEventListener'] = function (bs7ypw) {}, d4k8_['contains'] = function (_791) {
      return null;
    }, d4k8_['removeChild'] = function (g2arve) {}, d4k8_);
  }, ti3$j['createShaderCondition'] = function (htqx) {
    var pwsreb = this;return function () {
      return pwsreb[htqx['replace']('this.', '')];
    };
  }, ti3$j['EnvConfig'] = null, ti3$j['window'] = null, ti3$j['_preCreateElement'] = null, ti3$j['_inited'] = !0x1, ti3$j['wxRequest'] = null, ti3$j['systemInfo'] = null, ti3$j['version'] = '0.0.1', ti3$j['isZiYu'] = !0x1, ti3$j['isPosMsgYu'] = !0x1, ti3$j['parseXMLFromString'] = function (qx3uth) {
    var txi$j3;qx3uth = qx3uth['replace'](/>\s+</g, '><');try {
      txi$j3 = new vgma0z['Parser']['DOMParser']()['parseFromString'](qx3uth, 'text/xml');
    } catch (fn4) {
      throw '需要引入xml解析库文件';
    }return txi$j3;
  }, ti3$j['idx'] = 0x1, ti3$j);function ti3$j() {}k9_d48(k71yb, 'laya.wx.mini.MiniImage'), k71yb['prototype']['_loadImage'] = function (ewprs) {
    var _978 = !0x1;-0x1 == ewprs['indexOf']('layaNativeDir/') && (_978 = !0x0, ewprs = ofn65['formatURL'](ewprs)), ae['getFileInfo'](ewprs) ? k71yb['onCreateImage'](ewprs, this, !_978) : -0x1 != ewprs['indexOf']('http://') || -0x1 != ewprs['indexOf']('https://') ? ae['downImg'](ewprs, new xtqu3$(k71yb, k71yb['onDownImgCallBack'], [ewprs, this]), ewprs) : k71yb['onCreateImage'](ewprs, this, !0x0);
  }, k71yb['onDownImgCallBack'] = function (raesv2, mzji3$, r2vae) {
    r2vae ? mzji3$['onError'](null) : k71yb['onCreateImage'](raesv2, mzji3$);
  }, k71yb['onCreateImage'] = function (k891_, thlux, m$ij0) {
    var d84_5, xu3hq;function d498k_() {
      xu3hq['onload'] = null, xu3hq['onerror'] = null, delete thlux['imgCache'][k891_];
    }d84_5 = (m$ij0 = void 0x0 === m$ij0 ? !0x1 : m$ij0) ? k891_ : (j3z$ = ae['getFileInfo'](k891_)['md5'], ae['getFileNativePath'](j3z$)), null == thlux['imgCache'] && (thlux['imgCache'] = {}), m$ij0 = function () {
      d498k_(), thlux['onLoaded'](xu3hq);
    };var j3z$ = function () {
      d498k_(), thlux['event']('error', 'Load image failed');
    };'nativeimage' == thlux['_type'] ? ((xu3hq = new g2amv0['window']['Image']())['crossOrigin'] = '', xu3hq['onload'] = m$ij0, xu3hq['onerror'] = j3z$, xu3hq['src'] = d84_5, thlux['imgCache'][k891_] = xu3hq) : new t3jix$['create'](d84_5, { 'onload': m$ij0, 'onerror': j3z$, 'onCreate': function (d4fn65) {
        xu3hq = d4fn65, thlux['imgCache'][k891_] = d4fn65;
      } });
  };function k71yb() {}var ea2rp = (k9_d48(p7wbsy, 'laya.wx.mini.MiniInput'), p7wbsy['_createInputElement'] = function () {
    sb7pyw['_initInput'](sb7pyw['area'] = g2amv0['createElement']('textarea')), sb7pyw['_initInput'](sb7pyw['input'] = g2amv0['createElement']('input')), sb7pyw['inputContainer'] = g2amv0['createElement']('div'), sb7pyw['inputContainer']['style']['position'] = 'absolute', sb7pyw['inputContainer']['style']['zIndex'] = 0x186a0, g2amv0['container']['appendChild'](sb7pyw['inputContainer']), sb7pyw['inputContainer']['setPos'] = function (g0rav, kw1y) {
      sb7pyw['inputContainer']['style']['left'] = g0rav + 'px', sb7pyw['inputContainer']['style']['top'] = kw1y + 'px';
    }, _984dk['stage']['on']('resize', null, p7wbsy['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (vzg0m) {
      vgma0z['dispatchEvent'] && vgma0z['dispatchEvent']('resize');
    }), pwbse['_soundClass'] = f5d4n6, pwbse['_musicClass'] = f5d4n6;
  }, p7wbsy['_onStageResize'] = function () {
    _984dk['stage']['_canvasTransform']['identity']()['scale'](g2amv0['width'] / qxlhut['canvas']['width'] / tjix3$['getPixelRatio'](), g2amv0['height'] / qxlhut['canvas']['height'] / tjix3$['getPixelRatio']());
  }, p7wbsy['wxinputFocus'] = function (fn65o) {
    var pwb = sb7pyw['inputElement']['target'];pwb && !pwb['editable'] || (_6n54['window']['wx']['offKeyboardConfirm'](), _6n54['window']['wx']['offKeyboardInput'](), _6n54['window']['wx']['showKeyboard']({ 'defaultValue': pwb['text'], 'maxLength': pwb['maxChars'], 'multiple': pwb['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (v0mzga) {}, 'fail': function (bpsre) {} }), _6n54['window']['wx']['onKeyboardConfirm'](function (wersb) {
      wersb = wersb ? wersb['value'] : '', (pwb['text'] = wersb, pwb['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), _6n54['window']['wx']['onKeyboardInput'](function (wk9y) {
      wk9y = wk9y ? wk9y['value'] : '', pwb['multiline'] || -0x1 == wk9y['indexOf']('\x0a') ? (pwb['text'] = wk9y, pwb['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, p7wbsy['inputEnter'] = function () {
    sb7pyw['inputElement']['target']['focus'] = !0x1;
  }, p7wbsy['wxinputblur'] = function () {
    p7wbsy['hideKeyboard']();
  }, p7wbsy['hideKeyboard'] = function () {
    _6n54['window']['wx']['offKeyboardConfirm'](), _6n54['window']['wx']['offKeyboardInput'](), _6n54['window']['wx']['hideKeyboard']({ 'success': function (_dk489) {
        console['log']('隐藏键盘');
      }, 'fail': function (m0zi$) {
        console['log']('隐藏键盘出错:' + (m0zi$ ? m0zi$['errMsg'] : ''));
      } });
  }, p7wbsy);function p7wbsy() {}var dn465f = function () {
    function vg2m0() {}k9_d48(vg2m0, 'laya.wx.mini.MiniLoader');var _d64 = vg2m0['prototype'];return _d64['load'] = function (tx$3i, jx3$z, fno5d6, mz3j$i, rwsep) {
      void 0x0 === fno5d6 && (fno5d6 = !0x0), void 0x0 === rwsep && (rwsep = !0x1);var b7spyw = this;0x0 === (b7spyw['_url'] = tx$3i)['indexOf']('data:image') ? b7spyw['_type'] = jx3$z = 'image' : b7spyw['_type'] = jx3$z = jx3$z || b7spyw['getTypeFromUrl'](tx$3i), b7spyw['_cache'] = fno5d6, b7spyw['_data'] = null;var dn46_ = 'ascii';-0x1 != tx$3i['indexOf']('.fnt') ? dn46_ = 'utf8' : 'arraybuffer' == jx3$z && (dn46_ = '');var arve = n849d['getFileExtension'](tx$3i);if (-0x1 != vg2m0['_fileTypeArr']['indexOf'](arve)) _6n54['EnvConfig']['load']['call'](this, tx$3i, jx3$z, fno5d6, mz3j$i, rwsep);else {
        if (ae['getFileInfo'](tx$3i)) _6n54['EnvConfig']['load']['call'](this, tx$3i, jx3$z, fno5d6, mz3j$i, rwsep);else {
          if (-0x1 != tx$3i['indexOf']('layaNativeDir/')) {
            if (_6n54['isZiYu']) {
              var x3z$ij = ae['ziyuFileData'][tx$3i];return void b7spyw['onLoaded'](x3z$ij);
            }return cosnole['log']('read read'), void ae['read'](tx$3i, dn46_, new xtqu3$(vg2m0, vg2m0['onReadNativeCallBack'], [dn46_, tx$3i, jx3$z, fno5d6, mz3j$i, rwsep, b7spyw]));
          }x3z$ij = '' == ofn65['rootPath'] ? tx$3i : tx$3i['split'](ofn65['rootPath'])[0x0], -0x1 != tx$3i['indexOf']('http://') || -0x1 != tx$3i['indexOf']('https://') ? _6n54['EnvConfig']['load']['call'](b7spyw, tx$3i, jx3$z, fno5d6, mz3j$i, rwsep) : ae['readFile'](x3z$ij, dn46_, new xtqu3$(vg2m0, vg2m0['onReadNativeCallBack'], [dn46_, tx$3i, jx3$z, fno5d6, mz3j$i, rwsep, b7spyw]), tx$3i);
        }
      }
    }, _d64['resMgrLoad'] = function (gji, yb71kw, gz0mvi, webpsr, tql, zm0g, aerps2) {
      void 0x0 === gz0mvi && (gz0mvi = 0x0), void 0x0 === webpsr && (webpsr = !0x1), void 0x0 === tql && (tql = !0x1), void 0x0 === zm0g && (zm0g = 0x0), void 0x0 === aerps2 && (aerps2 = 0x3), -0x1 != gji['indexOf']('mpack') && console['log']('=============resMgrLoad url:', gji), _6n54['EnvConfig']['resMgrLoad'](gji, (pbresw, wpbesy, k7w1y) => {
        vg2m0['prototype']['resMgrLoadCallBack'](pbresw, wpbesy, k7w1y, yb71kw);
      }, gz0mvi, webpsr, tql, zm0g, aerps2);
    }, _d64['resMgrLoadCallBack'] = function (u3xhq, pbeyw, rsepbw, gavz0m) {
      console['log']('buff:::', u3xhq, rsepbw, ae['fileNativeDir'] + '///' + ae['fileListName']), gavz0m(u3xhq, pbeyw, rsepbw);
    }, _d64['clearRes'] = function (g0avmz, o6dnf5) {
      this['clearRes'](g0avmz, o6dnf5 = void 0x0 === o6dnf5 ? !0x1 : o6dnf5), o6dnf5 = ae['getFileInfo'](g0avmz), !o6dnf5 || -0x1 == g0avmz['indexOf']('http://') && -0x1 == g0avmz['indexOf']('https://') || (o6dnf5 = o6dnf5['md5'], o6dnf5 = ae['getFileNativePath'](o6dnf5), ae['remove'](o6dnf5));
    }, vg2m0['onReadNativeCallBack'] = function (xj3i$t, xhtqlu, w7yk1, w1byk, wb7ky, xuqt3$, psewy, jxti3, iz0m$) {
      void 0x0 === w1byk && (w1byk = !0x0), void 0x0 === xuqt3$ && (xuqt3$ = !0x1), (jxti3 = void 0x0 === jxti3 ? 0x0 : jxti3) ? 0x1 == jxti3 && _6n54['EnvConfig']['load']['call'](psewy, xhtqlu, w7yk1, w1byk, wb7ky, xuqt3$) : (iz0m$ = 'json' == w7yk1 || 'atlas' == w7yk1 ? _6n54['getJson'](iz0m$['data']) : 'xml' == w7yk1 ? n849d['parseXMLFromString'](iz0m$['data']) : iz0m$['data'], psewy['onLoaded'](iz0m$), !_6n54['isZiYu'] && _6n54['isPosMsgYu'] && 'arraybuffer' != w7yk1 && wx['postMessage']({ 'url': xhtqlu, 'data': iz0m$, 'isLoad': !0x0 }));
    }, w97k1y(vg2m0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), vg2m0;
  }(),
      ae = (k9_d48(ebsywp, 'laya.wx.mini.MiniFileMgr', zva0m), ebsywp['isLoadFile'] = function (yb7sp) {
    return -0x1 != ebsywp['_fileTypeArr']['indexOf'](yb7sp);
  }, ebsywp['getFileInfo'] = function (vgae) {
    return vgae = vgae['split']('?')[0x0], vgae = ebsywp['filesListObj'][vgae], null == vgae ? null : vgae;
  }, ebsywp['onFileUpdate'] = function (rsve2a, e2prbs) {
    var jz0g = rsve2a['split']('/');rsve2a = jz0g[jz0g['length'] - 0x1], jz0g = ebsywp['getFileInfo'](e2prbs), null == jz0g ? ebsywp['onSaveFile'](e2prbs, rsve2a) : jz0g['readyUrl'] != e2prbs && ebsywp['remove'](rsve2a, e2prbs);
  }, ebsywp['exits'] = function (_48k1, xi3z$j) {
    _48k1 = ebsywp['getFileNativePath'](_48k1), ebsywp['fs']['getFileInfo']({ 'filePath': _48k1, 'success': function (_d49n) {
        null != xi3z$j && xi3z$j['runWith']([0x0, _d49n]);
      }, 'fail': function (jtux$) {
        null != xi3z$j && xi3z$j['runWith']([0x1, jtux$]);
      } });
  }, ebsywp['read'] = function (_n65d4, w1p7yb, lxuh, pyw1b7) {
    void 0x0 === w1p7yb && (w1p7yb = 'ascill'), _n65d4 = '' != (pyw1b7 = void 0x0 === pyw1b7 ? '' : pyw1b7) ? ebsywp['getFileNativePath'](_n65d4) : _n65d4, ebsywp['fs']['readFile']({ 'filePath': _n65d4, 'encoding': w1p7yb, 'success': function (uxhlt) {
        null != lxuh && lxuh['runWith']([0x0, uxhlt]);
      }, 'fail': function (ergv2) {
        ergv2 && '' != pyw1b7 ? ebsywp['down'](pyw1b7, w1p7yb, lxuh, pyw1b7) : null != lxuh && lxuh['runWith']([0x1]);
      } });
  }, ebsywp['readNativeFile'] = function (y7wb1p, z$j3m) {
    ebsywp['fs']['readFile']({ 'filePath': y7wb1p, 'encoding': '', 'success': function (_5n6) {
        null != z$j3m && z$j3m['runWith']([0x0]);
      }, 'fail': function (g0ma2v) {
        null != z$j3m && z$j3m['runWith']([0x1]);
      } });
  }, ebsywp['down'] = function ($utx3q, gm0jzi, z0gva, od6nf) {
    void 0x0 === gm0jzi && (gm0jzi = 'ascill'), void 0x0 === od6nf && (od6nf = '');var uqltxh = ebsywp['getFileNativePath'](od6nf);ebsywp['wxdown']({ 'url': $utx3q, 'filePath': uqltxh, 'success': function ($3mzij) {
        0xc8 === $3mzij['statusCode'] && ebsywp['readFile']($3mzij['filePath'], gm0jzi, z0gva, od6nf);
      }, 'fail': function (ysbwpe) {
        null != z0gva && z0gva['runWith']([0x1, ysbwpe]);
      } })['onProgressUpdate'](function (z$ijx3) {
      null != z0gva && z0gva['runWith']([0x2, z$ijx3['progress']]);
    });
  }, ebsywp['readFile'] = function (jim, j0miz$, imvz0g, k914) {
    void 0x0 === k914 && (k914 = ''), ebsywp['fs']['readFile']({ 'filePath': jim, 'encoding': j0miz$ = void 0x0 === j0miz$ ? 'ascill' : j0miz$, 'success': function (xit$3) {
        -0x1 == jim['indexOf']('http://') && -0x1 == jim['indexOf']('https://') || ebsywp['onFileUpdate'](jim, k914), null != imvz0g && imvz0g['runWith']([0x0, xit$3]);
      }, 'fail': function (utxj$3) {
        utxj$3 && null != imvz0g && imvz0g['runWith']([0x1, utxj$3]);
      } });
  }, ebsywp['downImg'] = function (wpb7, psy7b, ebswpy) {
    void 0x0 === ebswpy && (ebswpy = ''), ebsywp['wxdown']({ 'url': wpb7, 'success': function (bywspe) {
        0xc8 === bywspe['statusCode'] && ebsywp['copyFile'](bywspe['tempFilePath'], ebswpy, psy7b);
      }, 'fail': function (eswbp) {
        null != psy7b && psy7b['runWith']([0x1, eswbp]);
      } });
  }, ebsywp['copyFile'] = function (g0vra2, r2eavs, j3xiz$) {
    var zag0 = g0vra2['split']('/'),
        s2vea = zag0[zag0['length'] - 0x1];r2eavs['split']('?')[0x0];var x$3izj = ebsywp['getFileInfo'](r2eavs);zag0 = ebsywp['getFileNativePath'](s2vea), ebsywp['fs']['copyFile']({ 'srcPath': g0vra2, 'destPath': zag0, 'success': function (zj3$x) {
        x$3izj ? x$3izj['readyUrl'] != r2eavs && ebsywp['remove'](s2vea, r2eavs, j3xiz$) : (ebsywp['onSaveFile'](r2eavs, s2vea), null != j3xiz$ && j3xiz$['runWith']([0x0]));
      }, 'fail': function (y7sbpw) {
        null != j3xiz$ && j3xiz$['runWith']([0x1, y7sbpw]);
      } });
  }, ebsywp['getFileNativePath'] = function (gjiz0m) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gjiz0m;
  }, ebsywp['remove'] = function (d64f, huxq, fndo5) {
    void 0x0 === huxq && (huxq = '');var izm0$ = ebsywp['getFileInfo'](huxq),
        x3t$ij = ebsywp['getFileNativePath'](izm0$['md5']);_984dk['loader']['clearRes'](izm0$['readyUrl']), ebsywp['fs']['unlink']({ 'filePath': x3t$ij, 'success': function (xz3$ji) {
        '' != huxq && ebsywp['onSaveFile'](huxq, d64f), null != fndo5 && fndo5['runWith']([0x0]);
      }, 'fail': function (pyweb) {} });
  }, ebsywp['onSaveFile'] = function (o6f5dn, be2srp) {
    var rspbe = o6f5dn['split']('?')[0x0];ebsywp['filesListObj'][rspbe] = { 'md5': be2srp, 'readyUrl': o6f5dn }, ebsywp['fs']['writeFile']({ 'filePath': ebsywp['fileNativeDir'] + '/' + ebsywp['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ebsywp['filesListObj']), 'success': function (k789) {
        console['log']('写入测试测试成功：', k789);
      }, 'fail': function (wyesb) {
        console['log']('写入测试测试失败：', wyesb);
      } });
  }, ebsywp['existDir'] = function (pbwr, d98n) {
    ebsywp['fs']['mkdir']({ 'dirPath': pbwr, 'success': function (zig0v) {
        null != d98n && d98n['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (bep) {
        -0x1 != bep['errMsg']['indexOf']('file already exists') ? ebsywp['readSync'](ebsywp['fileListName'], 'utf8', d98n) : null != d98n && d98n['runWith']([0x1, bep]);
      } });
  }, ebsywp['readSync'] = function (pbrs, v0mgz, j$3xz, xjt3$u) {
    void 0x0 === v0mgz && (v0mgz = 'ascill'), void 0x0 === xjt3$u && (xjt3$u = ''), pbrs = ebsywp['getFileNativePath'](pbrs);var y718;try {
      y718 = ebsywp['fs']['readFileSync'](pbrs), null != j$3xz && j$3xz['runWith']([0x0, { 'data': y718 }]);
    } catch (va02r) {
      null != j$3xz && j$3xz['runWith']([0x1]);
    }
  }, ebsywp['readCache'] = function () {}, ebsywp['writeCache'] = function (ypwb7s) {
    var d4_k98 = readyUrl['split']('?')[0x0];ebsywp['filesListObj'][d4_k98] = { 'md5': md5Name, 'readyUrl': readyUrl }, ebsywp['fs']['writeFile']({ 'filePath': ebsywp['fileNativeDir'] + '/' + ebsywp['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ebsywp['filesListObj']), 'success': function (d8_4k) {}, 'fail': function (rwbp) {} });
  }, ebsywp['setNativeFileDir'] = function (swb7py) {
    ebsywp['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + swb7py;
  }, ebsywp['filesListObj'] = {}, ebsywp['fileNativeDir'] = null, ebsywp['fileListName'] = 'layaairfiles.txt', ebsywp['ziyuFileData'] = {}, w97k1y(ebsywp, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), ebsywp);function ebsywp() {
    ebsywp['__super']['call'](this);
  }var f5d4n6 = function () {
    function wsbr() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, wsbr['__super']['call'](this), this['_sound'] = wsbr['_createSound']();
    }k9_d48(wsbr, 'laya.wx.mini.MiniSound', zva0m);var gv02am = wsbr['prototype'];return gv02am['load'] = function (evg) {
      var wbk1 = this,
          z3i$m;function _n654d() {
        if (null != wsbr['_null']) wbk1['_sound']['onCanplay'](wsbr['_null']), wbk1['_sound']['onError'](wsbr['_null']);else try {
          wbk1['_sound']['onCanplay'](null), wbk1['_sound']['onError'](null), wsbr['_null'] = null;
        } catch (spyw7) {
          console['warn']('[wxmini] _clearSound:' + spyw7), wbk1['_sound']['onCanplay'](uthq3), wbk1['_sound']['onError'](uthq3), wsbr['_null'] = uthq3;
        }
      }function uthq3() {}evg = ofn65['formatURL'](evg), this['url'] = evg, wsbr['_audioCache'][evg] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        _n654d(), z3i$m['loaded'] = !0x0, z3i$m['event']('complete'), wsbr['_audioCache'][z3i$m['url']] = z3i$m;
      }), this['_sound']['onError'](function (tqh3xu) {
        console['error']('errCode=' + tqh3xu['errCode'] + '  errMsg=' + tqh3xu['errMsg']), _n654d(), z3i$m['event']('error');
      }), this['_sound']['src'] = evg, z3i$m = this);
    }, gv02am['play'] = function (k894d_, t$ix) {
      void 0x0 === k894d_ && (k894d_ = 0x0), void 0x0 === t$ix && (t$ix = 0x0), (x3hqtu = this['url'] == pwbse['_tMusic'] ? (wsbr['_musicAudio'] || (wsbr['_musicAudio'] = wsbr['_createSound']()), wsbr['_musicAudio']) : wsbr['_createSound']())['src'] = this['url'];var x3hqtu = new d64n5(x3hqtu);return x3hqtu['url'] = this['url'], x3hqtu['loops'] = t$ix, x3hqtu['startTime'] = k894d_, x3hqtu['play'](), pwbse['addChannel'](x3hqtu), x3hqtu;
    }, gv02am['dispose'] = function () {
      var tix = wsbr['_audioCache'][this['url']];tix && (tix['src'] = '', delete wsbr['_audioCache'][this['url']]);
    }, spr2eb(0x0, gv02am, 'duration', function () {
      return this['_sound']['duration'];
    }), wsbr['_createSound'] = function () {
      return wsbr['_id']++, _6n54['window']['wx']['createInnerAudioContext']();
    }, wsbr['_musicAudio'] = null, wsbr['_id'] = 0x0, wsbr['_audioCache'] = {}, wsbr['_null'] = void 0x0, wsbr;
  }(),
      d64n5 = function () {
    function _98d4k(r2ag0) {
      this['_audio'] = null, this['_onEnd'] = null, _98d4k['__super']['call'](this), this['_audio'] = r2ag0, this['_onEnd'] = n849d['bind'](this['__onEnd'], this), r2ag0['onEnded'](this['_onEnd']);
    }k9_d48(_98d4k, 'laya.wx.mini.MiniSoundChannel', srpa);var m0avgz = _98d4k['prototype'];return m0avgz['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (_984dk['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, m0avgz['__onNull'] = function () {}, m0avgz['play'] = function () {
      this['isStopped'] = !0x1, pwbse['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, m0avgz['stop'] = function () {
      if (this['isStopped'] = !0x0, pwbse['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != _98d4k['_null']) this['_audio']['onEnded'](_98d4k['_null']);else try {
          this['_audio']['onEnded'](null), _98d4k['_null'] = null;
        } catch (izjx) {
          console['warn']('[wxmini] stop:' + izjx), this['_audio']['onEnded'](n849d['bind'](this['__onNull'], this)), _98d4k['_null'] = n849d['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, m0avgz['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, m0avgz['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, pwbse['addChannel'](this), this['_audio']['play']());
    }, spr2eb(0x0, m0avgz, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), spr2eb(0x0, m0avgz, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), spr2eb(0x0, m0avgz, 'volume', function () {
      return 0x1;
    }, function (zm0i$j) {}), _98d4k['_null'] = void 0x0, _98d4k;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (yspb7, v0m2ag) {
  'use strict';

  for (var tjix3 in Object['defineProperty'](v0m2ag, '__esModule', { 'value': !0x0 }), Laya) {
    var yw7bs = Laya[tjix3];yw7bs && yw7bs['__isclass'] && (v0m2ag[tjix3] = yw7bs);
  }
});