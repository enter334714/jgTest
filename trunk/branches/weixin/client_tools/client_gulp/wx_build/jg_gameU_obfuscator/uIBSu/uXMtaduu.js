var o = wx.$U;
(function (window, document, hlmiqo) {
  var pfsue = hlmiqo['un'],
      d59z2t = hlmiqo['uns'],
      su$fp = hlmiqo['static'],
      zxw7g9 = hlmiqo['class'],
      ac0k6r = hlmiqo['getset'],
      es_v$n = hlmiqo['__newvec'],
      xiol = laya['utils']['Browser'],
      d9t5z2 = laya['events']['Event'],
      ihm4j3 = laya['events']['EventDispatcher'],
      uj34p = laya['resource']['HTMLImage'],
      hpf4j3 = laya['utils']['Handler'],
      _vnk$ = laya['display']['Input'],
      iomqj = laya['net']['Loader'],
      sna_kv = laya['maths']['Matrix'],
      nu$esf = laya['renders']['Render'],
      vnks$ = laya['utils']['RunDriver'],
      homiqj = laya['media']['Sound'],
      xgw9 = laya['media']['SoundChannel'],
      vns = laya['media']['SoundManager'],
      $k_nvs = laya['display']['Stage'],
      svank_ = laya['net']['URL'],
      wg79xz = laya['utils']['Utils'],
      a6r0kc = function () {
    function cr061() {}return zxw7g9(cr061, 'laya.wx.mini.MiniAdpter'), cr061['getJson'] = function (xl7gq) {
      return JSON['parse'](xl7gq);
    }, cr061['init'] = function (feup, qoxi7) {
      feup === void 0x0 && (feup = ![]), qoxi7 === void 0x0 && (qoxi7 = ![]);if (cr061['_inited']) return;cr061['window'] = window;if (cr061['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;cr061['_inited'] = !![], cr061['isZiYu'] = qoxi7, cr061['isPosMsgYu'] = feup, cr061['EnvConfig'] = {}, !cr061['isZiYu'] && (ph3jm4['setNativeFileDir']('/layaairGame'), ph3jm4['existDir'](ph3jm4['fileNativeDir'], hpf4j3['create'](cr061, cr061['onMkdirCallBack']))), cr061['window']['focus'] = function () {}, hlmiqo['getUrlPath'] = function () {}, cr061['window']['logtime'] = function (kc6v_) {}, cr061['window']['alertTimeLog'] = function (jh3i4m) {}, cr061['window']['resetShareInfo'] = function () {}, cr061['window']['CanvasRenderingContext2D'] = function () {}, cr061['window']['CanvasRenderingContext2D']['prototype'] = cr061['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], cr061['window']['document']['body']['appendChild'] = function () {}, cr061['EnvConfig']['pixelRatioInt'] = 0x0, vnks$['getPixelRatio'] = cr061['pixelRatio'], cr061['_preCreateElement'] = xiol['createElement'], xiol['createElement'] = cr061['createElement'], vnks$['createShaderCondition'] = cr061['createShaderCondition'], wg79xz['parseXMLFromString'] = cr061['parseXMLFromString'], _vnk$['_createInputElement'] = xqolm['_createInputElement'], cr061['EnvConfig']['load'] = iomqj['prototype']['load'], iomqj['prototype']['load'] = sk_['prototype']['load'], cr061['isZiYu'] && feup && wx['onMessage'](function (r01y8) {
        r01y8['isLoad'] && (ph3jm4['ziyuFileData'][r01y8['url']] = r01y8['data']);
      });
    }, cr061['onMkdirCallBack'] = function (uj3fp4, _ks$vn) {
      if (!uj3fp4) ph3jm4['filesListObj'] = JSON['parse'](_ks$vn['data']);
    }, cr061['pixelRatio'] = function () {
      if (!cr061['EnvConfig']['pixelRatioInt']) try {
        var u4epf = wx['getSystemInfoSync']();return cr061['EnvConfig']['pixelRatioInt'] = u4epf['pixelRatio'], u4epf = u4epf, u4epf['pixelRatio'];
      } catch (c6r0k) {}return cr061['EnvConfig']['pixelRatioInt'];
    }, cr061['createElement'] = function (esvu$n) {
      if (esvu$n == 'canvas') {
        var lohim;return cr061['idx'] == 0x1 ? cr061['isZiYu'] ? (lohim = sharedCanvas, lohim['style'] = {}) : lohim = window['canvas'] : lohim = window['wx']['createCanvas'](), cr061['idx']++, lohim;
      } else {
        if (esvu$n == 'textarea' || esvu$n == 'input') return cr061['onCreateInput'](esvu$n);else {
          if (esvu$n == 'div') {
            var e$fpsu = cr061['_preCreateElement'](esvu$n);return e$fpsu['contains'] = function (dtz925) {
              return null;
            }, e$fpsu['removeChild'] = function ($skv_) {}, e$fpsu;
          } else return cr061['_preCreateElement'](esvu$n);
        }
      }
    }, cr061['onCreateInput'] = function (rc816) {
      var oqimj = cr061['_preCreateElement'](rc816);return oqimj['focus'] = xqolm['wxinputFocus'], oqimj['blur'] = xqolm['wxinputblur'], oqimj['style'] = {}, oqimj['value'] = 0x0, oqimj['parentElement'] = {}, oqimj['placeholder'] = {}, oqimj['type'] = {}, oqimj['setColor'] = function (jmihq) {}, oqimj['setType'] = function (omjqh) {}, oqimj['setFontFace'] = function (c0r68) {}, oqimj['addEventListener'] = function (g9z5td) {}, oqimj['contains'] = function (gzd7w9) {
        return null;
      }, oqimj['removeChild'] = function (wd7gz) {}, oqimj;
    }, cr061['createShaderCondition'] = function (iqhmj) {
      var xz97gw = this,
          d79g = function () {
        var _nask = iqhmj;return xz97gw[iqhmj['replace']('this.', '')];
      };return d79g;
    }, cr061['EnvConfig'] = null, cr061['window'] = null, cr061['_preCreateElement'] = null, cr061['_inited'] = ![], cr061['wxRequest'] = null, cr061['systemInfo'] = null, cr061['version'] = '0.0.1', cr061['isZiYu'] = ![], cr061['isPosMsgYu'] = ![], cr061['parseXMLFromString'] = function (eup$f) {
      var imqhlo, miojh3;eup$f = eup$f['replace'](/>\s+</g, '><');try {
        imqhlo = new window['Parser']['DOMParser']()['parseFromString'](eup$f, 'text/xml');
      } catch (k6nv_a) {
        throw '需要引入xml解析库文件';
      }return imqhlo;
    }, cr061['idx'] = 0x1, cr061;
  }(),
      k_ra6c = function () {
    function gl97x() {}zxw7g9(gl97x, 'laya.wx.mini.MiniImage');var $4pfue = gl97x['prototype'];return $4pfue['_loadImage'] = function (v_ka6n) {
      var cr_a6k = this,
          ev_sn = ![];v_ka6n['indexOf']('layaNativeDir/') == -0x1 && (ev_sn = !![], v_ka6n = svank_['formatURL'](v_ka6n));if (!ph3jm4['getFileInfo'](v_ka6n)) {
        if (v_ka6n['indexOf']('http://') != -0x1 || v_ka6n['indexOf']('https://') != -0x1) ph3jm4['downImg'](v_ka6n, new hpf4j3(gl97x, gl97x['onDownImgCallBack'], [v_ka6n, cr_a6k]), v_ka6n);else gl97x['onCreateImage'](v_ka6n, cr_a6k, !![]);
      } else gl97x['onCreateImage'](v_ka6n, cr_a6k, !ev_sn);
    }, gl97x['onDownImgCallBack'] = function (p$f4u, mojiq, zwg95) {
      if (!zwg95) gl97x['onCreateImage'](p$f4u, mojiq);else mojiq['onError'](null);
    }, gl97x['onCreateImage'] = function (xloq7i, xlio, b18r) {
      b18r === void 0x0 && (b18r = ![]);var $_sknv;if (!b18r) {
        var seu$f = ph3jm4['getFileInfo'](xloq7i),
            mohql = seu$f['md5'];$_sknv = ph3jm4['getFileNativePath'](mohql);
      } else $_sknv = xloq7i;if (xlio['imgCache'] == null) xlio['imgCache'] = {};var vskn_a;function avc6() {
        vskn_a['onload'] = null, vskn_a['onerror'] = null, delete xlio['imgCache'][xloq7i];
      };var dg9zw5 = function () {
        avc6(), xlio['onLoaded'](vskn_a);
      },
          qg7x = function () {
        avc6(), xlio['event']('error', 'Load image failed');
      };xlio['_type'] == 'nativeimage' ? (vskn_a = new xiol['window']['Image'](), vskn_a['crossOrigin'] = '', vskn_a['onload'] = dg9zw5, vskn_a['onerror'] = qg7x, vskn_a['src'] = $_sknv, xlio['imgCache'][xloq7i] = vskn_a) : new uj34p['create']($_sknv, { 'onload': dg9zw5, 'onerror': qg7x, 'onCreate': function (g5w9dz) {
          vskn_a = g5w9dz, xlio['imgCache'][xloq7i] = g5w9dz;
        } });
    }, gl97x;
  }(),
      xqolm = function () {
    function wqglx7() {}return zxw7g9(wqglx7, 'laya.wx.mini.MiniInput'), wqglx7['_createInputElement'] = function () {
      _vnk$['_initInput'](_vnk$['area'] = xiol['createElement']('textarea')), _vnk$['_initInput'](_vnk$['input'] = xiol['createElement']('input')), _vnk$['inputContainer'] = xiol['createElement']('div'), _vnk$['inputContainer']['style']['position'] = 'absolute', _vnk$['inputContainer']['style']['zIndex'] = 0x186a0, xiol['container']['appendChild'](_vnk$['inputContainer']), _vnk$['inputContainer']['setPos'] = function (e4$pu, n$kvs_) {
        _vnk$['inputContainer']['style']['left'] = e4$pu + 'px', _vnk$['inputContainer']['style']['top'] = n$kvs_ + 'px';
      }, hlmiqo['stage']['on']('resize', null, wqglx7['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (lxqwg) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), vns['_soundClass'] = loqmi, vns['_musicClass'] = loqmi;
    }, wqglx7['_onStageResize'] = function () {
      var fpue = hlmiqo['stage']['_canvasTransform']['identity']();fpue['scale'](xiol['width'] / nu$esf['canvas']['width'] / vnks$['getPixelRatio'](), xiol['height'] / nu$esf['canvas']['height'] / vnks$['getPixelRatio']());
    }, wqglx7['wxinputFocus'] = function (hj3mo) {
      var omixq = _vnk$['inputElement']['target'];if (omixq && !omixq['editable']) return;a6r0kc['window']['wx']['offKeyboardConfirm'](), a6r0kc['window']['wx']['offKeyboardInput'](), a6r0kc['window']['wx']['showKeyboard']({ 'defaultValue': omixq['text'], 'maxLength': omixq['maxChars'], 'multiple': omixq['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (nu$efs) {}, 'fail': function (m3hoji) {} }), a6r0kc['window']['wx']['onKeyboardConfirm'](function (kc60) {
        var usen = kc60 ? kc60['value'] : '';omixq['text'] = usen, omixq['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), a6r0kc['window']['wx']['onKeyboardInput'](function (jqmih) {
        var krc_6a = jqmih ? jqmih['value'] : '';if (!omixq['multiline']) {
          if (krc_6a['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }omixq['text'] = krc_6a, omixq['event']('input');
      });
    }, wqglx7['inputEnter'] = function () {
      _vnk$['inputElement']['target']['focus'] = ![];
    }, wqglx7['wxinputblur'] = function () {
      wqglx7['hideKeyboard']();
    }, wqglx7['hideKeyboard'] = function () {
      a6r0kc['window']['wx']['offKeyboardConfirm'](), a6r0kc['window']['wx']['offKeyboardInput'](), a6r0kc['window']['wx']['hideKeyboard']({ 'success': function (b0yr1) {
          console['log']('隐藏键盘');
        }, 'fail': function (oqlxw) {
          console['log']('隐藏键盘出错:' + (oqlxw ? oqlxw['errMsg'] : ''));
        } });
    }, wqglx7;
  }(),
      sk_ = function () {
    function h4pj3f() {}zxw7g9(h4pj3f, 'laya.wx.mini.MiniLoader');var yb18r = h4pj3f['prototype'];return yb18r['load'] = function (hmo3ij, ufp43, _nvk$s, $se_n, _svak) {
      _nvk$s === void 0x0 && (_nvk$s = !![]), _svak === void 0x0 && (_svak = ![]);var n$ks_v = this;n$ks_v['_url'] = hmo3ij;if (hmo3ij['indexOf']('data:image') === 0x0) n$ks_v['_type'] = ufp43 = 'image';else n$ks_v['_type'] = ufp43 || (ufp43 = n$ks_v['getTypeFromUrl'](hmo3ij));n$ks_v['_cache'] = _nvk$s, n$ks_v['_data'] = null;var pj4m3h = 'ascii';if (hmo3ij['indexOf']('.fnt') != -0x1) pj4m3h = 'utf8';else ufp43 == 'arraybuffer' && (pj4m3h = '');;var qlom = wg79xz['getFileExtension'](hmo3ij);if (h4pj3f['_fileTypeArr']['indexOf'](qlom) != -0x1) a6r0kc['EnvConfig']['load']['call'](this, hmo3ij, ufp43, _nvk$s, $se_n, _svak);else {
        if (!ph3jm4['getFileInfo'](hmo3ij)) {
          if (hmo3ij['indexOf']('layaNativeDir/') != -0x1) {
            if (a6r0kc['isZiYu']) {
              var hm4j3i = ph3jm4['ziyuFileData'][hmo3ij];n$ks_v['onLoaded'](hm4j3i);return;
            } else {
              cosnole['log']('read read'), ph3jm4['read'](hmo3ij, pj4m3h, new hpf4j3(h4pj3f, h4pj3f['onReadNativeCallBack'], [pj4m3h, hmo3ij, ufp43, _nvk$s, $se_n, _svak, n$ks_v]));return;
            }
          }if (svank_['rootPath'] == '') var nv_se$ = hmo3ij;else nv_se$ = hmo3ij['split'](svank_['rootPath'])[0x0];hmo3ij['indexOf']('http://') != -0x1 || hmo3ij['indexOf']('https://') != -0x1 ? a6r0kc['EnvConfig']['load']['call'](n$ks_v, hmo3ij, ufp43, _nvk$s, $se_n, _svak) : ph3jm4['readFile'](nv_se$, pj4m3h, new hpf4j3(h4pj3f, h4pj3f['onReadNativeCallBack'], [pj4m3h, hmo3ij, ufp43, _nvk$s, $se_n, _svak, n$ks_v]), hmo3ij);
        } else a6r0kc['EnvConfig']['load']['call'](this, hmo3ij, ufp43, _nvk$s, $se_n, _svak);
      }
    }, yb18r['resMgrLoad'] = function (wgdz5, f3jh4p, mh3j4, _vnks, vsn_k, lhoiqm, pu3f4j) {
      mh3j4 === void 0x0 && (mh3j4 = 0x0), _vnks === void 0x0 && (_vnks = ![]), vsn_k === void 0x0 && (vsn_k = ![]), lhoiqm === void 0x0 && (lhoiqm = 0x0), pu3f4j === void 0x0 && (pu3f4j = 0x3), wgdz5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', wgdz5), a6r0kc['EnvConfig']['resMgrLoad'](wgdz5, (p4mjh3, imhjo, feup4$) => {
        h4pj3f['prototype']['resMgrLoadCallBack'](p4mjh3, imhjo, feup4$, f3jh4p);
      }, mh3j4, _vnks, vsn_k, lhoiqm, pu3f4j);
    }, yb18r['resMgrLoadCallBack'] = function (x9z, ufp4, xqg7, jhmioq) {
      console['log']('buff:::', x9z, xqg7, ph3jm4['fileNativeDir'] + '///' + ph3jm4['fileListName']), jhmioq(x9z, ufp4, xqg7);
    }, yb18r['clearRes'] = function (jfpu34, _anvsk) {
      _anvsk === void 0x0 && (_anvsk = ![]);var qxw7lg = this;qxw7lg['clearRes'](jfpu34, _anvsk);var gz7w = ph3jm4['getFileInfo'](jfpu34);if (gz7w && (jfpu34['indexOf']('http://') != -0x1 || jfpu34['indexOf']('https://') != -0x1)) {
        var jom3i = gz7w['md5'],
            br08c1 = ph3jm4['getFileNativePath'](jom3i);ph3jm4['remove'](br08c1);
      }
    }, h4pj3f['onReadNativeCallBack'] = function (xgz7w, f4p$ue, dz2t95, en$vs_, k_avc6, v_ca, gd7z, h3pm4, ns_v$) {
      en$vs_ === void 0x0 && (en$vs_ = !![]), v_ca === void 0x0 && (v_ca = ![]), h3pm4 === void 0x0 && (h3pm4 = 0x0);if (!h3pm4) {
        var $e4;if (dz2t95 == 'json' || dz2t95 == 'atlas') $e4 = a6r0kc['getJson'](ns_v$['data']);else dz2t95 == 'xml' ? $e4 = wg79xz['parseXMLFromString'](ns_v$['data']) : $e4 = ns_v$['data'];gd7z['onLoaded']($e4), !a6r0kc['isZiYu'] && a6r0kc['isPosMsgYu'] && dz2t95 != 'arraybuffer' && wx['postMessage']({ 'url': f4p$ue, 'data': $e4, 'isLoad': !![] });
      } else h3pm4 == 0x1 && a6r0kc['EnvConfig']['load']['call'](gd7z, f4p$ue, dz2t95, en$vs_, k_avc6, v_ca);
    }, su$fp(h4pj3f, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), h4pj3f;
  }(),
      ph3jm4 = function (joqihm) {
    function ixqm() {
      ixqm['__super']['call'](this);;
    }return zxw7g9(ixqm, 'laya.wx.mini.MiniFileMgr', joqihm), ixqm['isLoadFile'] = function (r1860) {
      return ixqm['_fileTypeArr']['indexOf'](r1860) != -0x1 ? !![] : ![];
    }, ixqm['getFileInfo'] = function (wlx97) {
      var a_nv6 = wlx97['split']('?')[0x0],
          f$spue = ixqm['filesListObj'][a_nv6];if (f$spue == null) return null;else return f$spue;return null;
    }, ixqm['onFileUpdate'] = function (c061r, im4hj) {
      var gx97l = c061r['split']('/'),
          j3p4 = gx97l[gx97l['length'] - 0x1],
          ohmqij = ixqm['getFileInfo'](im4hj);if (ohmqij == null) ixqm['onSaveFile'](im4hj, j3p4);else {
        if (ohmqij['readyUrl'] != im4hj) ixqm['remove'](j3p4, im4hj);
      }
    }, ixqm['exits'] = function (b8rc10, oimhj3) {
      var h43jim = ixqm['getFileNativePath'](b8rc10);ixqm['fs']['getFileInfo']({ 'filePath': h43jim, 'success': function (l7oxi) {
          oimhj3 != null && oimhj3['runWith']([0x0, l7oxi]);
        }, 'fail': function (efus$n) {
          oimhj3 != null && oimhj3['runWith']([0x1, efus$n]);
        } });
    }, ixqm['read'] = function (pujf4, q7wlxg, r0y81b, vnuse$) {
      q7wlxg === void 0x0 && (q7wlxg = 'ascill'), vnuse$ === void 0x0 && (vnuse$ = '');var lxgqw7;vnuse$ != '' ? lxgqw7 = ixqm['getFileNativePath'](pujf4) : lxgqw7 = pujf4, ixqm['fs']['readFile']({ 'filePath': lxgqw7, 'encoding': q7wlxg, 'success': function (r68a) {
          r0y81b != null && r0y81b['runWith']([0x0, r68a]);
        }, 'fail': function (_envs$) {
          if (_envs$ && vnuse$ != '') ixqm['down'](vnuse$, q7wlxg, r0y81b, vnuse$);else r0y81b != null && r0y81b['runWith']([0x1]);
        } });
    }, ixqm['readNativeFile'] = function (fj34up, s$fup) {
      ixqm['fs']['readFile']({ 'filePath': fj34up, 'encoding': '', 'success': function (avk6c) {
          s$fup != null && s$fup['runWith']([0x0]);
        }, 'fail': function (r8c6a0) {
          s$fup != null && s$fup['runWith']([0x1]);
        } });
    }, ixqm['down'] = function (ues$pf, c6ar0k, x7lw9, dtz295) {
      c6ar0k === void 0x0 && (c6ar0k = 'ascill'), dtz295 === void 0x0 && (dtz295 = '');var u3j4pf = ixqm['getFileNativePath'](dtz295),
          v_a6c = ixqm['wxdown']({ 'url': ues$pf, 'filePath': u3j4pf, 'success': function (j4ih3) {
          if (j4ih3['statusCode'] === 0xc8) ixqm['readFile'](j4ih3['filePath'], c6ar0k, x7lw9, dtz295);
        }, 'fail': function (ufjp) {
          x7lw9 != null && x7lw9['runWith']([0x1, ufjp]);
        } });v_a6c['onProgressUpdate'](function (j3i4mh) {
        x7lw9 != null && x7lw9['runWith']([0x2, j3i4mh['progress']]);
      });
    }, ixqm['readFile'] = function (zx97, qoxlw, moiql, dg7zw9) {
      qoxlw === void 0x0 && (qoxlw = 'ascill'), dg7zw9 === void 0x0 && (dg7zw9 = ''), ixqm['fs']['readFile']({ 'filePath': zx97, 'encoding': qoxlw, 'success': function (r608) {
          if (zx97['indexOf']('http://') != -0x1 || zx97['indexOf']('https://') != -0x1) ixqm['onFileUpdate'](zx97, dg7zw9);moiql != null && moiql['runWith']([0x0, r608]);
        }, 'fail': function (n_vks$) {
          if (n_vks$) moiql != null && moiql['runWith']([0x1, n_vks$]);
        } });
    }, ixqm['downImg'] = function (k06ca, ztd5g, sav_k) {
      sav_k === void 0x0 && (sav_k = '');var avkns_ = ixqm['wxdown']({ 'url': k06ca, 'success': function (e$snv_) {
          e$snv_['statusCode'] === 0xc8 && ixqm['copyFile'](e$snv_['tempFilePath'], sav_k, ztd5g);
        }, 'fail': function (hilo) {
          ztd5g != null && ztd5g['runWith']([0x1, hilo]);
        } });
    }, ixqm['copyFile'] = function (kc6av_, xo7lwq, wzd5g) {
      var x9g7 = kc6av_['split']('/'),
          oh3jm = x9g7[x9g7['length'] - 0x1],
          gz9d7w = xo7lwq['split']('?')[0x0],
          k_svn = ixqm['getFileInfo'](xo7lwq),
          miqhoj = ixqm['getFileNativePath'](oh3jm);ixqm['fs']['copyFile']({ 'srcPath': kc6av_, 'destPath': miqhoj, 'success': function (xl7wq) {
          if (!k_svn) ixqm['onSaveFile'](xo7lwq, oh3jm), wzd5g != null && wzd5g['runWith']([0x0]);else {
            if (k_svn['readyUrl'] != xo7lwq) ixqm['remove'](oh3jm, xo7lwq, wzd5g);
          }
        }, 'fail': function (nkvs) {
          wzd5g != null && wzd5g['runWith']([0x1, nkvs]);
        } });
    }, ixqm['getFileNativePath'] = function (e$p4u) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + e$p4u;
    }, ixqm['remove'] = function (v_$k, $ensf, olhiqm) {
      $ensf === void 0x0 && ($ensf = '');var jhomi3 = ixqm['getFileInfo']($ensf),
          u$4e = ixqm['getFileNativePath'](jhomi3['md5']);hlmiqo['loader']['clearRes'](jhomi3['readyUrl']), ixqm['fs']['unlink']({ 'filePath': u$4e, 'success': function (fp34uj) {
          if ($ensf != '') ixqm['onSaveFile']($ensf, v_$k);olhiqm != null && olhiqm['runWith']([0x0]);
        }, 'fail': function (h4ji3) {} });
    }, ixqm['onSaveFile'] = function (r60ak, v6ack_) {
      var ox7l = r60ak['split']('?')[0x0];ixqm['filesListObj'][ox7l] = { 'md5': v6ack_, 'readyUrl': r60ak }, ixqm['fs']['writeFile']({ 'filePath': ixqm['fileNativeDir'] + '/' + ixqm['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ixqm['filesListObj']), 'success': function (n_kvas) {
          console['log']('写入测试测试成功：', n_kvas);
        }, 'fail': function (ufp4e) {
          console['log']('写入测试测试失败：', ufp4e);
        } });
    }, ixqm['existDir'] = function (en$usv, usnve) {
      ixqm['fs']['mkdir']({ 'dirPath': en$usv, 'success': function (qijohm) {
          usnve != null && usnve['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (a6kv) {
          if (a6kv['errMsg']['indexOf']('file already exists') != -0x1) ixqm['readSync'](ixqm['fileListName'], 'utf8', usnve);else usnve != null && usnve['runWith']([0x1, a6kv]);
        } });
    }, ixqm['readSync'] = function (ansk_v, d92zt, nvs_$k, t95d) {
      d92zt === void 0x0 && (d92zt = 'ascill'), t95d === void 0x0 && (t95d = '');var xloqw = ixqm['getFileNativePath'](ansk_v),
          zw95d;try {
        zw95d = ixqm['fs']['readFileSync'](xloqw), nvs_$k != null && nvs_$k['runWith']([0x0, { 'data': zw95d }]);
      } catch (qixolm) {
        nvs_$k != null && nvs_$k['runWith']([0x1]);
      }
    }, ixqm['readCache'] = function () {}, ixqm['writeCache'] = function (ask) {
      var pu4e = readyUrl['split']('?')[0x0];ixqm['filesListObj'][pu4e] = { 'md5': md5Name, 'readyUrl': readyUrl }, ixqm['fs']['writeFile']({ 'filePath': ixqm['fileNativeDir'] + '/' + ixqm['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ixqm['filesListObj']), 'success': function (eu43p) {}, 'fail': function (zg7x9) {} });
    }, ixqm['setNativeFileDir'] = function (hjpf34) {
      ixqm['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hjpf34;
    }, ixqm['filesListObj'] = {}, ixqm['fileNativeDir'] = null, ixqm['fileListName'] = 'layaairfiles.txt', ixqm['ziyuFileData'] = {}, su$fp(ixqm, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ixqm;
  }(ihm4j3),
      loqmi = function (dg5tz9) {
    function e4pf$u() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], e4pf$u['__super']['call'](this), this['_sound'] = e4pf$u['_createSound']();
    }zxw7g9(e4pf$u, 'laya.wx.mini.MiniSound', dg5tz9);var w7lqgx = e4pf$u['prototype'];return w7lqgx['load'] = function (ra0ck6) {
      var _vc6 = this;ra0ck6 = svank_['formatURL'](ra0ck6), this['url'] = ra0ck6;if (e4pf$u['_audioCache'][ra0ck6]) {
        this['event']('complete');return;
      }function kv6ca_() {
        if (e4pf$u['_null'] != undefined) _vc6['_sound']['onCanplay'](e4pf$u['_null']), _vc6['_sound']['onError'](e4pf$u['_null']);else try {
          _vc6['_sound']['onCanplay'](null), _vc6['_sound']['onError'](null), e4pf$u['_null'] = null;
        } catch (_snvka) {
          console['warn']('[wxmini] _clearSound:' + _snvka), _vc6['_sound']['onCanplay']($k_vns), _vc6['_sound']['onError']($k_vns), e4pf$u['_null'] = $k_vns;
        }
      }function crka6() {
        kv6ca_(), seu$fn['loaded'] = !![], seu$fn['event']('complete'), e4pf$u['_audioCache'][seu$fn['url']] = seu$fn;
      }function h3mj4p(a6_r) {
        console['error']('errCode=' + a6_r['errCode'] + '  errMsg=' + a6_r['errMsg']), kv6ca_(), seu$fn['event']('error');
      }function $k_vns() {}this['_sound']['onCanplay'](crka6), this['_sound']['onError'](h3mj4p), this['_sound']['src'] = ra0ck6;var seu$fn = this;
    }, w7lqgx['play'] = function (qwl7ox, f4$pu) {
      qwl7ox === void 0x0 && (qwl7ox = 0x0), f4$pu === void 0x0 && (f4$pu = 0x0);var jm;if (this['url'] == vns['_tMusic']) {
        if (!e4pf$u['_musicAudio']) e4pf$u['_musicAudio'] = e4pf$u['_createSound']();jm = e4pf$u['_musicAudio'];
      } else jm = e4pf$u['_createSound']();jm['src'] = this['url'];var r_6ac = new p4uf$e(jm);return r_6ac['url'] = this['url'], r_6ac['loops'] = f4$pu, r_6ac['startTime'] = qwl7ox, r_6ac['play'](), vns['addChannel'](r_6ac), r_6ac;
    }, w7lqgx['dispose'] = function () {
      var zdt92 = e4pf$u['_audioCache'][this['url']];zdt92 && (zdt92['src'] = '', delete e4pf$u['_audioCache'][this['url']]);
    }, ac0k6r(0x0, w7lqgx, 'duration', function () {
      return this['_sound']['duration'];
    }), e4pf$u['_createSound'] = function () {
      return e4pf$u['_id']++, a6r0kc['window']['wx']['createInnerAudioContext']();
    }, e4pf$u['_musicAudio'] = null, e4pf$u['_id'] = 0x0, e4pf$u['_audioCache'] = {}, e4pf$u['_null'] = undefined, e4pf$u;
  }(ihm4j3),
      p4uf$e = function (n$svu) {
    function qxlo(es_nv) {
      this['_audio'] = null, this['_onEnd'] = null, qxlo['__super']['call'](this), this['_audio'] = es_nv, this['_onEnd'] = wg79xz['bind'](this['__onEnd'], this), es_nv['onEnded'](this['_onEnd']);
    }zxw7g9(qxlo, 'laya.wx.mini.MiniSoundChannel', n$svu);var sfup = qxlo['prototype'];return sfup['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (hlmiqo['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, sfup['__onNull'] = function () {}, sfup['play'] = function () {
      this['isStopped'] = ![], vns['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, sfup['stop'] = function () {
      this['isStopped'] = !![], vns['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (qxlo['_null'] != undefined) this['_audio']['onEnded'](qxlo['_null']);else try {
        this['_audio']['onEnded'](null), qxlo['_null'] = null;
      } catch (nakv6) {
        console['warn']('[wxmini] stop:' + nakv6), this['_audio']['onEnded'](wg79xz['bind'](this['__onNull'], this)), qxlo['_null'] = wg79xz['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, sfup['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, sfup['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], vns['addChannel'](this), this['_audio']['play']();
    }, ac0k6r(0x0, sfup, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ac0k6r(0x0, sfup, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ac0k6r(0x0, sfup, 'volume', function () {
      return 0x1;
    }, function (m3j4hi) {}), qxlo['_null'] = undefined, qxlo;
  }(xgw9);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var w7zg in Laya) {
    var v_ansk = Laya[w7zg];v_ansk && v_ansk['__isclass'] && (exports[w7zg] = v_ansk);
  }
});