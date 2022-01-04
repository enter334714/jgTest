var A = wx.$N;
(function (window, document, $mkl_) {
  var fqj = $mkl_['un'],
      h_xmkl = $mkl_['uns'],
      jq0p9i = $mkl_['static'],
      w6eoa = $mkl_['class'],
      csxdnz = $mkl_['getset'],
      ifgryv = $mkl_['__newvec'],
      k_4u1 = laya['utils']['Browser'],
      $u_k1 = laya['events']['Event'],
      $_khml = laya['events']['EventDispatcher'],
      dhzlmx = laya['resource']['HTMLImage'],
      xndz = laya['utils']['Handler'],
      yvifr = laya['display']['Input'],
      $hk_ml = laya['net']['Loader'],
      o6ewa = laya['maths']['Matrix'],
      e26oaw = laya['renders']['Render'],
      l_mhk$ = laya['utils']['RunDriver'],
      uhk$_4 = laya['media']['Sound'],
      k$h4_m = laya['media']['SoundChannel'],
      szx = laya['media']['SoundManager'],
      frig = laya['display']['Stage'],
      iqfj9y = laya['net']['URL'],
      ow6ab2 = laya['utils']['Utils'],
      dxnsc = function () {
    function qjfgyi() {}return w6eoa(qjfgyi, 'laya.wx.mini.MiniAdpter'), qjfgyi['getJson'] = function (iyqj9) {
      return JSON['parse'](iyqj9);
    }, qjfgyi['init'] = function (oba6w2, k14_) {
      oba6w2 === void 0x0 && (oba6w2 = ![]), k14_ === void 0x0 && (k14_ = ![]);if (qjfgyi['_inited']) return;qjfgyi['window'] = window;if (qjfgyi['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;qjfgyi['_inited'] = !![], qjfgyi['isZiYu'] = k14_, qjfgyi['isPosMsgYu'] = oba6w2, qjfgyi['EnvConfig'] = {}, !qjfgyi['isZiYu'] && (nxsczd['setNativeFileDir']('/layaairGame'), nxsczd['existDir'](nxsczd['fileNativeDir'], xndz['create'](qjfgyi, qjfgyi['onMkdirCallBack']))), qjfgyi['window']['focus'] = function () {}, $mkl_['getUrlPath'] = function () {}, qjfgyi['window']['logtime'] = function (aw6o2b) {}, qjfgyi['window']['alertTimeLog'] = function (cz57s) {}, qjfgyi['window']['resetShareInfo'] = function () {}, qjfgyi['window']['CanvasRenderingContext2D'] = function () {}, qjfgyi['window']['CanvasRenderingContext2D']['prototype'] = qjfgyi['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qjfgyi['window']['document']['body']['appendChild'] = function () {}, qjfgyi['EnvConfig']['pixelRatioInt'] = 0x0, l_mhk$['getPixelRatio'] = qjfgyi['pixelRatio'], qjfgyi['_preCreateElement'] = k_4u1['createElement'], k_4u1['createElement'] = qjfgyi['createElement'], l_mhk$['createShaderCondition'] = qjfgyi['createShaderCondition'], ow6ab2['parseXMLFromString'] = qjfgyi['parseXMLFromString'], yvifr['_createInputElement'] = re38o['_createInputElement'], qjfgyi['EnvConfig']['load'] = $hk_ml['prototype']['load'], $hk_ml['prototype']['load'] = m$h_['prototype']['load'], qjfgyi['isZiYu'] && oba6w2 && wx['onMessage'](function (p950jq) {
        p950jq['isLoad'] && (nxsczd['ziyuFileData'][p950jq['url']] = p950jq['data']);
      });
    }, qjfgyi['onMkdirCallBack'] = function (aw6b2t, yfjiq) {
      if (!aw6b2t) nxsczd['filesListObj'] = JSON['parse'](yfjiq['data']);
    }, qjfgyi['pixelRatio'] = function () {
      if (!qjfgyi['EnvConfig']['pixelRatioInt']) try {
        var sc7p = wx['getSystemInfoSync']();return qjfgyi['EnvConfig']['pixelRatioInt'] = sc7p['pixelRatio'], sc7p = sc7p, sc7p['pixelRatio'];
      } catch (v38rfg) {}return qjfgyi['EnvConfig']['pixelRatioInt'];
    }, qjfgyi['createElement'] = function (xncszd) {
      if (xncszd == 'canvas') {
        var csdnz7;return qjfgyi['idx'] == 0x1 ? qjfgyi['isZiYu'] ? (csdnz7 = sharedCanvas, csdnz7['style'] = {}) : csdnz7 = window['canvas'] : csdnz7 = window['wx']['createCanvas'](), qjfgyi['idx']++, csdnz7;
      } else {
        if (xncszd == 'textarea' || xncszd == 'input') return qjfgyi['onCreateInput'](xncszd);else {
          if (xncszd == 'div') {
            var jqi90p = qjfgyi['_preCreateElement'](xncszd);return jqi90p['contains'] = function (vf3g8r) {
              return null;
            }, jqi90p['removeChild'] = function (ndxmzl) {}, jqi90p;
          } else return qjfgyi['_preCreateElement'](xncszd);
        }
      }
    }, qjfgyi['onCreateInput'] = function (ivyfrg) {
      var fqijgy = qjfgyi['_preCreateElement'](ivyfrg);return fqijgy['focus'] = re38o['wxinputFocus'], fqijgy['blur'] = re38o['wxinputblur'], fqijgy['style'] = {}, fqijgy['value'] = 0x0, fqijgy['parentElement'] = {}, fqijgy['placeholder'] = {}, fqijgy['type'] = {}, fqijgy['setColor'] = function (wo6ea2) {}, fqijgy['setType'] = function (vfry3) {}, fqijgy['setFontFace'] = function (p790) {}, fqijgy['addEventListener'] = function (rg8v3e) {}, fqijgy['contains'] = function (mxhldk) {
        return null;
      }, fqijgy['removeChild'] = function (ygifrv) {}, fqijgy;
    }, qjfgyi['createShaderCondition'] = function (aer83o) {
      var ev3rg8 = this,
          iq0j = function () {
        var csdzx = aer83o;return ev3rg8[aer83o['replace']('this.', '')];
      };return iq0j;
    }, qjfgyi['EnvConfig'] = null, qjfgyi['window'] = null, qjfgyi['_preCreateElement'] = null, qjfgyi['_inited'] = ![], qjfgyi['wxRequest'] = null, qjfgyi['systemInfo'] = null, qjfgyi['version'] = '0.0.1', qjfgyi['isZiYu'] = ![], qjfgyi['isPosMsgYu'] = ![], qjfgyi['parseXMLFromString'] = function (g8e) {
      var k41_u$, xmdln;g8e = g8e['replace'](/>\s+</g, '><');try {
        k41_u$ = new window['Parser']['DOMParser']()['parseFromString'](g8e, 'text/xml');
      } catch (vjiyg) {
        throw '需要引入xml解析库文件';
      }return k41_u$;
    }, qjfgyi['idx'] = 0x1, qjfgyi;
  }(),
      xdcsz = function () {
    function p0q59() {}w6eoa(p0q59, 'laya.wx.mini.MiniImage');var xzncs = p0q59['prototype'];return xzncs['_loadImage'] = function (lsdn) {
      var p9570c = this,
          hmk4$_ = ![];lsdn['indexOf']('layaNativeDir/') == -0x1 && (hmk4$_ = !![], lsdn = iqfj9y['formatURL'](lsdn));if (!nxsczd['getFileInfo'](lsdn)) {
        if (lsdn['indexOf']('http://') != -0x1 || lsdn['indexOf']('https://') != -0x1) nxsczd['downImg'](lsdn, new xndz(p0q59, p0q59['onDownImgCallBack'], [lsdn, p9570c]), lsdn);else p0q59['onCreateImage'](lsdn, p9570c, !![]);
      } else p0q59['onCreateImage'](lsdn, p9570c, !hmk4$_);
    }, p0q59['onDownImgCallBack'] = function (lxkhm, c7p059, cxsnzd) {
      if (!cxsnzd) p0q59['onCreateImage'](lxkhm, c7p059);else c7p059['onError'](null);
    }, p0q59['onCreateImage'] = function (_khu4$, vr38oe, nldz) {
      nldz === void 0x0 && (nldz = ![]);var nxslzd;if (!nldz) {
        var p05q97 = nxsczd['getFileInfo'](_khu4$),
            k_mxlh = p05q97['md5'];nxslzd = nxsczd['getFileNativePath'](k_mxlh);
      } else nxslzd = _khu4$;if (vr38oe['imgCache'] == null) vr38oe['imgCache'] = {};var psc57;function zxlsnd() {
        psc57['onload'] = null, psc57['onerror'] = null, delete vr38oe['imgCache'][_khu4$];
      };var o8e62 = function () {
        zxlsnd(), vr38oe['onLoaded'](psc57);
      },
          k_uh = function () {
        zxlsnd(), vr38oe['event']('error', 'Load image failed');
      };vr38oe['_type'] == 'nativeimage' ? (psc57 = new k_4u1['window']['Image'](), psc57['crossOrigin'] = '', psc57['onload'] = o8e62, psc57['onerror'] = k_uh, psc57['src'] = nxslzd, vr38oe['imgCache'][_khu4$] = psc57) : new dhzlmx['create'](nxslzd, { 'onload': o8e62, 'onerror': k_uh, 'onCreate': function (cxdsn) {
          psc57 = cxdsn, vr38oe['imgCache'][_khu4$] = cxdsn;
        } });
    }, p0q59;
  }(),
      re38o = function () {
    function lxhdm() {}return w6eoa(lxhdm, 'laya.wx.mini.MiniInput'), lxhdm['_createInputElement'] = function () {
      yvifr['_initInput'](yvifr['area'] = k_4u1['createElement']('textarea')), yvifr['_initInput'](yvifr['input'] = k_4u1['createElement']('input')), yvifr['inputContainer'] = k_4u1['createElement']('div'), yvifr['inputContainer']['style']['position'] = 'absolute', yvifr['inputContainer']['style']['zIndex'] = 0x186a0, k_4u1['container']['appendChild'](yvifr['inputContainer']), yvifr['inputContainer']['setPos'] = function (nmdxzl, yifq9) {
        yvifr['inputContainer']['style']['left'] = nmdxzl + 'px', yvifr['inputContainer']['style']['top'] = yifq9 + 'px';
      }, $mkl_['stage']['on']('resize', null, lxhdm['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (eo2w) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), szx['_soundClass'] = firgyv, szx['_musicClass'] = firgyv;
    }, lxhdm['_onStageResize'] = function () {
      var sdnx = $mkl_['stage']['_canvasTransform']['identity']();sdnx['scale'](k_4u1['width'] / e26oaw['canvas']['width'] / l_mhk$['getPixelRatio'](), k_4u1['height'] / e26oaw['canvas']['height'] / l_mhk$['getPixelRatio']());
    }, lxhdm['wxinputFocus'] = function (nsld) {
      var k$4u_ = yvifr['inputElement']['target'];if (k$4u_ && !k$4u_['editable']) return;dxnsc['window']['wx']['offKeyboardConfirm'](), dxnsc['window']['wx']['offKeyboardInput'](), dxnsc['window']['wx']['showKeyboard']({ 'defaultValue': k$4u_['text'], 'maxLength': k$4u_['maxChars'], 'multiple': k$4u_['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ldxhz) {}, 'fail': function (mhk_xl) {} }), dxnsc['window']['wx']['onKeyboardConfirm'](function (xlkhd) {
        var $4_mkh = xlkhd ? xlkhd['value'] : '';k$4u_['text'] = $4_mkh, k$4u_['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), dxnsc['window']['wx']['onKeyboardInput'](function (zsdln) {
        var sn5zc = zsdln ? zsdln['value'] : '';if (!k$4u_['multiline']) {
          if (sn5zc['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }k$4u_['text'] = sn5zc, k$4u_['event']('input');
      });
    }, lxhdm['inputEnter'] = function () {
      yvifr['inputElement']['target']['focus'] = ![];
    }, lxhdm['wxinputblur'] = function () {
      lxhdm['hideKeyboard']();
    }, lxhdm['hideKeyboard'] = function () {
      dxnsc['window']['wx']['offKeyboardConfirm'](), dxnsc['window']['wx']['offKeyboardInput'](), dxnsc['window']['wx']['hideKeyboard']({ 'success': function (wb6o) {
          console['log']('隐藏键盘');
        }, 'fail': function (_mlkh) {
          console['log']('隐藏键盘出错:' + (_mlkh ? _mlkh['errMsg'] : ''));
        } });
    }, lxhdm;
  }(),
      m$h_ = function () {
    function rfvy3g() {}w6eoa(rfvy3g, 'laya.wx.mini.MiniLoader');var ps70c5 = rfvy3g['prototype'];return ps70c5['load'] = function (nsxd, j0q59, nz57s, dmxk, kldxhm) {
      nz57s === void 0x0 && (nz57s = !![]), kldxhm === void 0x0 && (kldxhm = ![]);var ae8ro3 = this;ae8ro3['_url'] = nsxd;if (nsxd['indexOf']('data:image') === 0x0) ae8ro3['_type'] = j0q59 = 'image';else ae8ro3['_type'] = j0q59 || (j0q59 = ae8ro3['getTypeFromUrl'](nsxd));ae8ro3['_cache'] = nz57s, ae8ro3['_data'] = null;var $u4h_ = 'ascii';if (nsxd['indexOf']('.fnt') != -0x1) $u4h_ = 'utf8';else j0q59 == 'arraybuffer' && ($u4h_ = '');;var p05s7c = ow6ab2['getFileExtension'](nsxd);if (rfvy3g['_fileTypeArr']['indexOf'](p05s7c) != -0x1) dxnsc['EnvConfig']['load']['call'](this, nsxd, j0q59, nz57s, dmxk, kldxhm);else {
        if (!nxsczd['getFileInfo'](nsxd)) {
          if (nsxd['indexOf']('layaNativeDir/') != -0x1) {
            if (dxnsc['isZiYu']) {
              var e3a82 = nxsczd['ziyuFileData'][nsxd];ae8ro3['onLoaded'](e3a82);return;
            } else {
              cosnole['log']('read read'), nxsczd['read'](nsxd, $u4h_, new xndz(rfvy3g, rfvy3g['onReadNativeCallBack'], [$u4h_, nsxd, j0q59, nz57s, dmxk, kldxhm, ae8ro3]));return;
            }
          }if (iqfj9y['rootPath'] == '') var k$4hm = nsxd;else k$4hm = nsxd['split'](iqfj9y['rootPath'])[0x0];nsxd['indexOf']('http://') != -0x1 || nsxd['indexOf']('https://') != -0x1 ? dxnsc['EnvConfig']['load']['call'](ae8ro3, nsxd, j0q59, nz57s, dmxk, kldxhm) : nxsczd['readFile'](k$4hm, $u4h_, new xndz(rfvy3g, rfvy3g['onReadNativeCallBack'], [$u4h_, nsxd, j0q59, nz57s, dmxk, kldxhm, ae8ro3]), nsxd);
        } else dxnsc['EnvConfig']['load']['call'](this, nsxd, j0q59, nz57s, dmxk, kldxhm);
      }
    }, ps70c5['resMgrLoad'] = function (_hml$k, fv3gry, jqypi9, zdxsn, i9jp0, _1$k4u, sc507n) {
      jqypi9 === void 0x0 && (jqypi9 = 0x0), zdxsn === void 0x0 && (zdxsn = ![]), i9jp0 === void 0x0 && (i9jp0 = ![]), _1$k4u === void 0x0 && (_1$k4u = 0x0), sc507n === void 0x0 && (sc507n = 0x3), _hml$k['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _hml$k), dxnsc['EnvConfig']['resMgrLoad'](_hml$k, (a8r, kl$mh_, yq9ij) => {
        rfvy3g['prototype']['resMgrLoadCallBack'](a8r, kl$mh_, yq9ij, fv3gry);
      }, jqypi9, zdxsn, i9jp0, _1$k4u, sc507n);
    }, ps70c5['resMgrLoadCallBack'] = function (a26obw, xmlzdh, grf8, _4$1k) {
      console['log']('buff:::', a26obw, grf8, nxsczd['fileNativeDir'] + '///' + nxsczd['fileListName']), _4$1k(a26obw, xmlzdh, grf8);
    }, ps70c5['clearRes'] = function (jyq9, $hk4u) {
      $hk4u === void 0x0 && ($hk4u = ![]);var jq9iyf = this;jq9iyf['clearRes'](jyq9, $hk4u);var qy9ijp = nxsczd['getFileInfo'](jyq9);if (qy9ijp && (jyq9['indexOf']('http://') != -0x1 || jyq9['indexOf']('https://') != -0x1)) {
        var cn057 = qy9ijp['md5'],
            yjpqi9 = nxsczd['getFileNativePath'](cn057);nxsczd['remove'](yjpqi9);
      }
    }, rfvy3g['onReadNativeCallBack'] = function (z7dnsc, p0q, k4m$_h, gr3fv8, p9570q, $_4kuh, wtb62a, yrfig, iqjgfy) {
      gr3fv8 === void 0x0 && (gr3fv8 = !![]), $_4kuh === void 0x0 && ($_4kuh = ![]), yrfig === void 0x0 && (yrfig = 0x0);if (!yrfig) {
        var lmdznx;if (k4m$_h == 'json' || k4m$_h == 'atlas') lmdznx = dxnsc['getJson'](iqjgfy['data']);else k4m$_h == 'xml' ? lmdznx = ow6ab2['parseXMLFromString'](iqjgfy['data']) : lmdznx = iqjgfy['data'];wtb62a['onLoaded'](lmdznx), !dxnsc['isZiYu'] && dxnsc['isPosMsgYu'] && k4m$_h != 'arraybuffer' && wx['postMessage']({ 'url': p0q, 'data': lmdznx, 'isLoad': !![] });
      } else yrfig == 0x1 && dxnsc['EnvConfig']['load']['call'](wtb62a, p0q, k4m$_h, gr3fv8, p9570q, $_4kuh);
    }, jq0p9i(rfvy3g, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), rfvy3g;
  }(),
      nxsczd = function (wa62o) {
    function sdcz7n() {
      sdcz7n['__super']['call'](this);;
    }return w6eoa(sdcz7n, 'laya.wx.mini.MiniFileMgr', wa62o), sdcz7n['isLoadFile'] = function (u4$_) {
      return sdcz7n['_fileTypeArr']['indexOf'](u4$_) != -0x1 ? !![] : ![];
    }, sdcz7n['getFileInfo'] = function (cdxnsz) {
      var s750cp = cdxnsz['split']('?')[0x0],
          c9p07 = sdcz7n['filesListObj'][s750cp];if (c9p07 == null) return null;else return c9p07;return null;
    }, sdcz7n['onFileUpdate'] = function (k_$1u4, fgyqj) {
      var qp790 = k_$1u4['split']('/'),
          p70cs5 = qp790[qp790['length'] - 0x1],
          a6o = sdcz7n['getFileInfo'](fgyqj);if (a6o == null) sdcz7n['onSaveFile'](fgyqj, p70cs5);else {
        if (a6o['readyUrl'] != fgyqj) sdcz7n['remove'](p70cs5, fgyqj);
      }
    }, sdcz7n['exits'] = function (_14ku, y3gfvr) {
      var zlxdnm = sdcz7n['getFileNativePath'](_14ku);sdcz7n['fs']['getFileInfo']({ 'filePath': zlxdnm, 'success': function (vr8g) {
          y3gfvr != null && y3gfvr['runWith']([0x0, vr8g]);
        }, 'fail': function (xdklm) {
          y3gfvr != null && y3gfvr['runWith']([0x1, xdklm]);
        } });
    }, sdcz7n['read'] = function (_lhk$, ygijvf, jqfiyg, a8e32) {
      ygijvf === void 0x0 && (ygijvf = 'ascill'), a8e32 === void 0x0 && (a8e32 = '');var h$k4u_;a8e32 != '' ? h$k4u_ = sdcz7n['getFileNativePath'](_lhk$) : h$k4u_ = _lhk$, sdcz7n['fs']['readFile']({ 'filePath': h$k4u_, 'encoding': ygijvf, 'success': function (mzxdhl) {
          jqfiyg != null && jqfiyg['runWith']([0x0, mzxdhl]);
        }, 'fail': function (iq9pj) {
          if (iq9pj && a8e32 != '') sdcz7n['down'](a8e32, ygijvf, jqfiyg, a8e32);else jqfiyg != null && jqfiyg['runWith']([0x1]);
        } });
    }, sdcz7n['readNativeFile'] = function (ypjiq9, cnzds7) {
      sdcz7n['fs']['readFile']({ 'filePath': ypjiq9, 'encoding': '', 'success': function (qyfjg) {
          cnzds7 != null && cnzds7['runWith']([0x0]);
        }, 'fail': function (q0p) {
          cnzds7 != null && cnzds7['runWith']([0x1]);
        } });
    }, sdcz7n['down'] = function (_$k4u1, gyifjv, nz7cds, b2o6aw) {
      gyifjv === void 0x0 && (gyifjv = 'ascill'), b2o6aw === void 0x0 && (b2o6aw = '');var gyjiv = sdcz7n['getFileNativePath'](b2o6aw),
          s7n50 = sdcz7n['wxdown']({ 'url': _$k4u1, 'filePath': gyjiv, 'success': function (wae26o) {
          if (wae26o['statusCode'] === 0xc8) sdcz7n['readFile'](wae26o['filePath'], gyifjv, nz7cds, b2o6aw);
        }, 'fail': function (rvf3) {
          nz7cds != null && nz7cds['runWith']([0x1, rvf3]);
        } });s7n50['onProgressUpdate'](function (h_$4u) {
        nz7cds != null && nz7cds['runWith']([0x2, h_$4u['progress']]);
      });
    }, sdcz7n['readFile'] = function (lxkm_, zhdx, fjgqi, oae862) {
      zhdx === void 0x0 && (zhdx = 'ascill'), oae862 === void 0x0 && (oae862 = ''), sdcz7n['fs']['readFile']({ 'filePath': lxkm_, 'encoding': zhdx, 'success': function (pqj9i0) {
          if (lxkm_['indexOf']('http://') != -0x1 || lxkm_['indexOf']('https://') != -0x1) sdcz7n['onFileUpdate'](lxkm_, oae862);fjgqi != null && fjgqi['runWith']([0x0, pqj9i0]);
        }, 'fail': function (xzscd) {
          if (xzscd) fjgqi != null && fjgqi['runWith']([0x1, xzscd]);
        } });
    }, sdcz7n['downImg'] = function (z5sc7, yiq9jp, lsxznd) {
      lsxznd === void 0x0 && (lsxznd = '');var a62e8o = sdcz7n['wxdown']({ 'url': z5sc7, 'success': function (vrfig) {
          vrfig['statusCode'] === 0xc8 && sdcz7n['copyFile'](vrfig['tempFilePath'], lsxznd, yiq9jp);
        }, 'fail': function (jgfyq) {
          yiq9jp != null && yiq9jp['runWith']([0x1, jgfyq]);
        } });
    }, sdcz7n['copyFile'] = function (k4m_$, zlmnxd, aw2bt6) {
      var ldnsx = k4m_$['split']('/'),
          gr3f = ldnsx[ldnsx['length'] - 0x1],
          mhk_x = zlmnxd['split']('?')[0x0],
          kmh_l = sdcz7n['getFileInfo'](zlmnxd),
          or3v8 = sdcz7n['getFileNativePath'](gr3f);sdcz7n['fs']['copyFile']({ 'srcPath': k4m_$, 'destPath': or3v8, 'success': function (zsnxdc) {
          if (!kmh_l) sdcz7n['onSaveFile'](zlmnxd, gr3f), aw2bt6 != null && aw2bt6['runWith']([0x0]);else {
            if (kmh_l['readyUrl'] != zlmnxd) sdcz7n['remove'](gr3f, zlmnxd, aw2bt6);
          }
        }, 'fail': function (q7905) {
          aw2bt6 != null && aw2bt6['runWith']([0x1, q7905]);
        } });
    }, sdcz7n['getFileNativePath'] = function (mhdxl) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + mhdxl;
    }, sdcz7n['remove'] = function (csdnx, ivjgfy, dmxzh) {
      ivjgfy === void 0x0 && (ivjgfy = '');var owb = sdcz7n['getFileInfo'](ivjgfy),
          ro83ev = sdcz7n['getFileNativePath'](owb['md5']);$mkl_['loader']['clearRes'](owb['readyUrl']), sdcz7n['fs']['unlink']({ 'filePath': ro83ev, 'success': function (p957q) {
          if (ivjgfy != '') sdcz7n['onSaveFile'](ivjgfy, csdnx);dmxzh != null && dmxzh['runWith']([0x0]);
        }, 'fail': function (woe2) {} });
    }, sdcz7n['onSaveFile'] = function (a6twb2, zxnsdl) {
      var kmhlx_ = a6twb2['split']('?')[0x0];sdcz7n['filesListObj'][kmhlx_] = { 'md5': zxnsdl, 'readyUrl': a6twb2 }, sdcz7n['fs']['writeFile']({ 'filePath': sdcz7n['fileNativeDir'] + '/' + sdcz7n['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](sdcz7n['filesListObj']), 'success': function (s5znc) {
          console['log']('写入测试测试成功：', s5znc);
        }, 'fail': function (lzhx) {
          console['log']('写入测试测试失败：', lzhx);
        } });
    }, sdcz7n['existDir'] = function (ra, s7cdn) {
      sdcz7n['fs']['mkdir']({ 'dirPath': ra, 'success': function (rygvfi) {
          s7cdn != null && s7cdn['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (k$u4h) {
          if (k$u4h['errMsg']['indexOf']('file already exists') != -0x1) sdcz7n['readSync'](sdcz7n['fileListName'], 'utf8', s7cdn);else s7cdn != null && s7cdn['runWith']([0x1, k$u4h]);
        } });
    }, sdcz7n['readSync'] = function (ijqyf, xlszn, ta62w, kh$_l) {
      xlszn === void 0x0 && (xlszn = 'ascill'), kh$_l === void 0x0 && (kh$_l = '');var j0p9q = sdcz7n['getFileNativePath'](ijqyf),
          c5p90;try {
        c5p90 = sdcz7n['fs']['readFileSync'](j0p9q), ta62w != null && ta62w['runWith']([0x0, { 'data': c5p90 }]);
      } catch (w6e2o) {
        ta62w != null && ta62w['runWith']([0x1]);
      }
    }, sdcz7n['readCache'] = function () {}, sdcz7n['writeCache'] = function (i09jq) {
      var oae832 = readyUrl['split']('?')[0x0];sdcz7n['filesListObj'][oae832] = { 'md5': md5Name, 'readyUrl': readyUrl }, sdcz7n['fs']['writeFile']({ 'filePath': sdcz7n['fileNativeDir'] + '/' + sdcz7n['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](sdcz7n['filesListObj']), 'success': function (ip9qjy) {}, 'fail': function (u1k_4$) {} });
    }, sdcz7n['setNativeFileDir'] = function (eora38) {
      sdcz7n['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + eora38;
    }, sdcz7n['filesListObj'] = {}, sdcz7n['fileNativeDir'] = null, sdcz7n['fileListName'] = 'layaairfiles.txt', sdcz7n['ziyuFileData'] = {}, jq0p9i(sdcz7n, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), sdcz7n;
  }($_khml),
      firgyv = function (dn7s) {
    function nzx() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], nzx['__super']['call'](this), this['_sound'] = nzx['_createSound']();
    }w6eoa(nzx, 'laya.wx.mini.MiniSound', dn7s);var o3e28 = nzx['prototype'];return o3e28['load'] = function (jfiygq) {
      var gre8v3 = this;jfiygq = iqfj9y['formatURL'](jfiygq), this['url'] = jfiygq;if (nzx['_audioCache'][jfiygq]) {
        this['event']('complete');return;
      }function a3o28e() {
        if (nzx['_null'] != undefined) gre8v3['_sound']['onCanplay'](nzx['_null']), gre8v3['_sound']['onError'](nzx['_null']);else try {
          gre8v3['_sound']['onCanplay'](null), gre8v3['_sound']['onError'](null), nzx['_null'] = null;
        } catch (re3a8) {
          console['warn']('[wxmini] _clearSound:' + re3a8), gre8v3['_sound']['onCanplay'](yr3g), gre8v3['_sound']['onError'](yr3g), nzx['_null'] = yr3g;
        }
      }function piqyj() {
        a3o28e(), cds7nz['loaded'] = !![], cds7nz['event']('complete'), nzx['_audioCache'][cds7nz['url']] = cds7nz;
      }function _mlhx(k4hm$_) {
        console['error']('errCode=' + k4hm$_['errCode'] + '  errMsg=' + k4hm$_['errMsg']), a3o28e(), cds7nz['event']('error');
      }function yr3g() {}this['_sound']['onCanplay'](piqyj), this['_sound']['onError'](_mlhx), this['_sound']['src'] = jfiygq;var cds7nz = this;
    }, o3e28['play'] = function (pq709, zcndx) {
      pq709 === void 0x0 && (pq709 = 0x0), zcndx === void 0x0 && (zcndx = 0x0);var aeo3;if (this['url'] == szx['_tMusic']) {
        if (!nzx['_musicAudio']) nzx['_musicAudio'] = nzx['_createSound']();aeo3 = nzx['_musicAudio'];
      } else aeo3 = nzx['_createSound']();aeo3['src'] = this['url'];var e3ov = new fgv38(aeo3);return e3ov['url'] = this['url'], e3ov['loops'] = zcndx, e3ov['startTime'] = pq709, e3ov['play'](), szx['addChannel'](e3ov), e3ov;
    }, o3e28['dispose'] = function () {
      var ev3gr8 = nzx['_audioCache'][this['url']];ev3gr8 && (ev3gr8['src'] = '', delete nzx['_audioCache'][this['url']]);
    }, csxdnz(0x0, o3e28, 'duration', function () {
      return this['_sound']['duration'];
    }), nzx['_createSound'] = function () {
      return nzx['_id']++, dxnsc['window']['wx']['createInnerAudioContext']();
    }, nzx['_musicAudio'] = null, nzx['_id'] = 0x0, nzx['_audioCache'] = {}, nzx['_null'] = undefined, nzx;
  }($_khml),
      fgv38 = function (nxldm) {
    function o8vre3(zndcs7) {
      this['_audio'] = null, this['_onEnd'] = null, o8vre3['__super']['call'](this), this['_audio'] = zndcs7, this['_onEnd'] = ow6ab2['bind'](this['__onEnd'], this), zndcs7['onEnded'](this['_onEnd']);
    }w6eoa(o8vre3, 'laya.wx.mini.MiniSoundChannel', nxldm);var jyivf = o8vre3['prototype'];return jyivf['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && ($mkl_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jyivf['__onNull'] = function () {}, jyivf['play'] = function () {
      this['isStopped'] = ![], szx['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, jyivf['stop'] = function () {
      this['isStopped'] = !![], szx['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (o8vre3['_null'] != undefined) this['_audio']['onEnded'](o8vre3['_null']);else try {
        this['_audio']['onEnded'](null), o8vre3['_null'] = null;
      } catch (cxzdn) {
        console['warn']('[wxmini] stop:' + cxzdn), this['_audio']['onEnded'](ow6ab2['bind'](this['__onNull'], this)), o8vre3['_null'] = ow6ab2['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, jyivf['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, jyivf['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], szx['addChannel'](this), this['_audio']['play']();
    }, csxdnz(0x0, jyivf, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), csxdnz(0x0, jyivf, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), csxdnz(0x0, jyivf, 'volume', function () {
      return 0x1;
    }, function (jyqi9f) {}), o8vre3['_null'] = undefined, o8vre3;
  }(k$h4_m);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var twa62 in Laya) {
    var g3v8r = Laya[twa62];g3v8r && g3v8r['__isclass'] && (exports[twa62] = g3v8r);
  }
});