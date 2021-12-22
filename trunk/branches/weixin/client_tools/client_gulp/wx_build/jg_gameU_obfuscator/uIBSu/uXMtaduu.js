var o = wx.$U;
(function (window, document, c6r_k) {
  var liomhq = c6r_k['un'],
      sfn = c6r_k['uns'],
      k$vn_ = c6r_k['static'],
      kvc6_a = c6r_k['class'],
      n_vs$ = c6r_k['getset'],
      jiho3m = c6r_k['__newvec'],
      tdg95z = laya['utils']['Browser'],
      sveu$ = laya['events']['Event'],
      a_6ckr = laya['events']['EventDispatcher'],
      oihmq = laya['resource']['HTMLImage'],
      $uep4 = laya['utils']['Handler'],
      _ra6kc = laya['display']['Input'],
      l7gx9w = laya['net']['Loader'],
      oxwl7 = laya['maths']['Matrix'],
      eu4f$p = laya['renders']['Render'],
      oqwlx7 = laya['utils']['RunDriver'],
      f$usen = laya['media']['Sound'],
      knv_sa = laya['media']['SoundChannel'],
      w9zg7 = laya['media']['SoundManager'],
      ak_s = laya['display']['Stage'],
      e_$nsv = laya['net']['URL'],
      gx97 = laya['utils']['Utils'],
      j4mi = function () {
    function usn() {}return kvc6_a(usn, 'laya.wx.mini.MiniAdpter'), usn['getJson'] = function (p4jf3) {
      return JSON['parse'](p4jf3);
    }, usn['init'] = function (v$ns, h4jmp) {
      v$ns === void 0x0 && (v$ns = ![]), h4jmp === void 0x0 && (h4jmp = ![]);if (usn['_inited']) return;usn['window'] = window;if (usn['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;usn['_inited'] = !![], usn['isZiYu'] = h4jmp, usn['isPosMsgYu'] = v$ns, usn['EnvConfig'] = {}, !usn['isZiYu'] && ($k_nv['setNativeFileDir']('/layaairGame'), $k_nv['existDir']($k_nv['fileNativeDir'], $uep4['create'](usn, usn['onMkdirCallBack']))), usn['window']['focus'] = function () {}, c6r_k['getUrlPath'] = function () {}, usn['window']['logtime'] = function (e_svn$) {}, usn['window']['alertTimeLog'] = function (r180by) {}, usn['window']['resetShareInfo'] = function () {}, usn['window']['CanvasRenderingContext2D'] = function () {}, usn['window']['CanvasRenderingContext2D']['prototype'] = usn['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], usn['window']['document']['body']['appendChild'] = function () {}, usn['EnvConfig']['pixelRatioInt'] = 0x0, oqwlx7['getPixelRatio'] = usn['pixelRatio'], usn['_preCreateElement'] = tdg95z['createElement'], tdg95z['createElement'] = usn['createElement'], oqwlx7['createShaderCondition'] = usn['createShaderCondition'], gx97['parseXMLFromString'] = usn['parseXMLFromString'], _ra6kc['_createInputElement'] = e$fps['_createInputElement'], usn['EnvConfig']['load'] = l7gx9w['prototype']['load'], l7gx9w['prototype']['load'] = sfnu$e['prototype']['load'], usn['isZiYu'] && v$ns && wx['onMessage'](function (vck_6a) {
        vck_6a['isLoad'] && ($k_nv['ziyuFileData'][vck_6a['url']] = vck_6a['data']);
      });
    }, usn['onMkdirCallBack'] = function (d9z25t, vkna_6) {
      if (!d9z25t) $k_nv['filesListObj'] = JSON['parse'](vkna_6['data']);
    }, usn['pixelRatio'] = function () {
      if (!usn['EnvConfig']['pixelRatioInt']) try {
        var mliqox = wx['getSystemInfoSync']();return usn['EnvConfig']['pixelRatioInt'] = mliqox['pixelRatio'], mliqox = mliqox, mliqox['pixelRatio'];
      } catch (jhp43m) {}return usn['EnvConfig']['pixelRatioInt'];
    }, usn['createElement'] = function ($4e) {
      if ($4e == 'canvas') {
        var g7zwd9;return usn['idx'] == 0x1 ? usn['isZiYu'] ? (g7zwd9 = sharedCanvas, g7zwd9['style'] = {}) : g7zwd9 = window['canvas'] : g7zwd9 = window['wx']['createCanvas'](), usn['idx']++, g7zwd9;
      } else {
        if ($4e == 'textarea' || $4e == 'input') return usn['onCreateInput']($4e);else {
          if ($4e == 'div') {
            var ohlmqi = usn['_preCreateElement']($4e);return ohlmqi['contains'] = function (_k$sv) {
              return null;
            }, ohlmqi['removeChild'] = function (dgzw97) {}, ohlmqi;
          } else return usn['_preCreateElement']($4e);
        }
      }
    }, usn['onCreateInput'] = function (espu) {
      var jufp4 = usn['_preCreateElement'](espu);return jufp4['focus'] = e$fps['wxinputFocus'], jufp4['blur'] = e$fps['wxinputblur'], jufp4['style'] = {}, jufp4['value'] = 0x0, jufp4['parentElement'] = {}, jufp4['placeholder'] = {}, jufp4['type'] = {}, jufp4['setColor'] = function (efn$u) {}, jufp4['setType'] = function (funs$e) {}, jufp4['setFontFace'] = function (t59dzg) {}, jufp4['addEventListener'] = function (ohjqi) {}, jufp4['contains'] = function (_nsav) {
        return null;
      }, jufp4['removeChild'] = function (_ac6k) {}, jufp4;
    }, usn['createShaderCondition'] = function (ka_cr) {
      var d9g7z = this,
          $v_sk = function () {
        var z59g = ka_cr;return d9g7z[ka_cr['replace']('this.', '')];
      };return $v_sk;
    }, usn['EnvConfig'] = null, usn['window'] = null, usn['_preCreateElement'] = null, usn['_inited'] = ![], usn['wxRequest'] = null, usn['systemInfo'] = null, usn['version'] = '0.0.1', usn['isZiYu'] = ![], usn['isPosMsgYu'] = ![], usn['parseXMLFromString'] = function (v6ka_c) {
      var lmoxq, ihoml;v6ka_c = v6ka_c['replace'](/>\s+</g, '><');try {
        lmoxq = new window['Parser']['DOMParser']()['parseFromString'](v6ka_c, 'text/xml');
      } catch (gl) {
        throw '需要引入xml解析库文件';
      }return lmoxq;
    }, usn['idx'] = 0x1, usn;
  }(),
      zdt29 = function () {
    function gdw79z() {}kvc6_a(gdw79z, 'laya.wx.mini.MiniImage');var ack6_v = gdw79z['prototype'];return ack6_v['_loadImage'] = function (hmojq) {
      var d59w = this,
          b0cr18 = ![];hmojq['indexOf']('layaNativeDir/') == -0x1 && (b0cr18 = !![], hmojq = e_$nsv['formatURL'](hmojq));if (!$k_nv['getFileInfo'](hmojq)) {
        if (hmojq['indexOf']('http://') != -0x1 || hmojq['indexOf']('https://') != -0x1) $k_nv['downImg'](hmojq, new $uep4(gdw79z, gdw79z['onDownImgCallBack'], [hmojq, d59w]), hmojq);else gdw79z['onCreateImage'](hmojq, d59w, !![]);
      } else gdw79z['onCreateImage'](hmojq, d59w, !b0cr18);
    }, gdw79z['onDownImgCallBack'] = function (lqmh, $v_kn, ilxo7q) {
      if (!ilxo7q) gdw79z['onCreateImage'](lqmh, $v_kn);else $v_kn['onError'](null);
    }, gdw79z['onCreateImage'] = function (f43puj, mqxio, n_6vka) {
      n_6vka === void 0x0 && (n_6vka = ![]);var ar08c6;if (!n_6vka) {
        var nvse_ = $k_nv['getFileInfo'](f43puj),
            vn_$ks = nvse_['md5'];ar08c6 = $k_nv['getFileNativePath'](vn_$ks);
      } else ar08c6 = f43puj;if (mqxio['imgCache'] == null) mqxio['imgCache'] = {};var c6r_a;function ac6r() {
        c6r_a['onload'] = null, c6r_a['onerror'] = null, delete mqxio['imgCache'][f43puj];
      };var uf$pe4 = function () {
        ac6r(), mqxio['onLoaded'](c6r_a);
      },
          h3pm4 = function () {
        ac6r(), mqxio['event']('error', 'Load image failed');
      };mqxio['_type'] == 'nativeimage' ? (c6r_a = new tdg95z['window']['Image'](), c6r_a['crossOrigin'] = '', c6r_a['onload'] = uf$pe4, c6r_a['onerror'] = h3pm4, c6r_a['src'] = ar08c6, mqxio['imgCache'][f43puj] = c6r_a) : new oihmq['create'](ar08c6, { 'onload': uf$pe4, 'onerror': h3pm4, 'onCreate': function (lxi7o) {
          c6r_a = lxi7o, mqxio['imgCache'][f43puj] = lxi7o;
        } });
    }, gdw79z;
  }(),
      e$fps = function () {
    function fns() {}return kvc6_a(fns, 'laya.wx.mini.MiniInput'), fns['_createInputElement'] = function () {
      _ra6kc['_initInput'](_ra6kc['area'] = tdg95z['createElement']('textarea')), _ra6kc['_initInput'](_ra6kc['input'] = tdg95z['createElement']('input')), _ra6kc['inputContainer'] = tdg95z['createElement']('div'), _ra6kc['inputContainer']['style']['position'] = 'absolute', _ra6kc['inputContainer']['style']['zIndex'] = 0x186a0, tdg95z['container']['appendChild'](_ra6kc['inputContainer']), _ra6kc['inputContainer']['setPos'] = function (ufp4e$, dwg79) {
        _ra6kc['inputContainer']['style']['left'] = ufp4e$ + 'px', _ra6kc['inputContainer']['style']['top'] = dwg79 + 'px';
      }, c6r_k['stage']['on']('resize', null, fns['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (kn_v6) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), w9zg7['_soundClass'] = evus$n, w9zg7['_musicClass'] = evus$n;
    }, fns['_onStageResize'] = function () {
      var mohqj = c6r_k['stage']['_canvasTransform']['identity']();mohqj['scale'](tdg95z['width'] / eu4f$p['canvas']['width'] / oqwlx7['getPixelRatio'](), tdg95z['height'] / eu4f$p['canvas']['height'] / oqwlx7['getPixelRatio']());
    }, fns['wxinputFocus'] = function (vk6_an) {
      var v_nes$ = _ra6kc['inputElement']['target'];if (v_nes$ && !v_nes$['editable']) return;j4mi['window']['wx']['offKeyboardConfirm'](), j4mi['window']['wx']['offKeyboardInput'](), j4mi['window']['wx']['showKeyboard']({ 'defaultValue': v_nes$['text'], 'maxLength': v_nes$['maxChars'], 'multiple': v_nes$['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (s$nu) {}, 'fail': function (p3feu4) {} }), j4mi['window']['wx']['onKeyboardConfirm'](function (x79wgl) {
        var g7w9x = x79wgl ? x79wgl['value'] : '';v_nes$['text'] = g7w9x, v_nes$['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), j4mi['window']['wx']['onKeyboardInput'](function ($fsnue) {
        var kv$ns_ = $fsnue ? $fsnue['value'] : '';if (!v_nes$['multiline']) {
          if (kv$ns_['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }v_nes$['text'] = kv$ns_, v_nes$['event']('input');
      });
    }, fns['inputEnter'] = function () {
      _ra6kc['inputElement']['target']['focus'] = ![];
    }, fns['wxinputblur'] = function () {
      fns['hideKeyboard']();
    }, fns['hideKeyboard'] = function () {
      j4mi['window']['wx']['offKeyboardConfirm'](), j4mi['window']['wx']['offKeyboardInput'](), j4mi['window']['wx']['hideKeyboard']({ 'success': function (l9xwg7) {
          console['log']('隐藏键盘');
        }, 'fail': function (mpjh34) {
          console['log']('隐藏键盘出错:' + (mpjh34 ? mpjh34['errMsg'] : ''));
        } });
    }, fns;
  }(),
      sfnu$e = function () {
    function ilhom() {}kvc6_a(ilhom, 'laya.wx.mini.MiniLoader');var ztd25 = ilhom['prototype'];return ztd25['load'] = function (akn_sv, $seunv, av_6kc, ckv_a6, a6ckr_) {
      av_6kc === void 0x0 && (av_6kc = !![]), a6ckr_ === void 0x0 && (a6ckr_ = ![]);var vn_6a = this;vn_6a['_url'] = akn_sv;if (akn_sv['indexOf']('data:image') === 0x0) vn_6a['_type'] = $seunv = 'image';else vn_6a['_type'] = $seunv || ($seunv = vn_6a['getTypeFromUrl'](akn_sv));vn_6a['_cache'] = av_6kc, vn_6a['_data'] = null;var crk0 = 'ascii';if (akn_sv['indexOf']('.fnt') != -0x1) crk0 = 'utf8';else $seunv == 'arraybuffer' && (crk0 = '');;var ra80c6 = gx97['getFileExtension'](akn_sv);if (ilhom['_fileTypeArr']['indexOf'](ra80c6) != -0x1) j4mi['EnvConfig']['load']['call'](this, akn_sv, $seunv, av_6kc, ckv_a6, a6ckr_);else {
        if (!$k_nv['getFileInfo'](akn_sv)) {
          if (akn_sv['indexOf']('layaNativeDir/') != -0x1) {
            if (j4mi['isZiYu']) {
              var d9 = $k_nv['ziyuFileData'][akn_sv];vn_6a['onLoaded'](d9);return;
            } else {
              cosnole['log']('read read'), $k_nv['read'](akn_sv, crk0, new $uep4(ilhom, ilhom['onReadNativeCallBack'], [crk0, akn_sv, $seunv, av_6kc, ckv_a6, a6ckr_, vn_6a]));return;
            }
          }if (e_$nsv['rootPath'] == '') var $usv = akn_sv;else $usv = akn_sv['split'](e_$nsv['rootPath'])[0x0];akn_sv['indexOf']('http://') != -0x1 || akn_sv['indexOf']('https://') != -0x1 ? j4mi['EnvConfig']['load']['call'](vn_6a, akn_sv, $seunv, av_6kc, ckv_a6, a6ckr_) : $k_nv['readFile']($usv, crk0, new $uep4(ilhom, ilhom['onReadNativeCallBack'], [crk0, akn_sv, $seunv, av_6kc, ckv_a6, a6ckr_, vn_6a]), akn_sv);
        } else j4mi['EnvConfig']['load']['call'](this, akn_sv, $seunv, av_6kc, ckv_a6, a6ckr_);
      }
    }, ztd25['resMgrLoad'] = function (hlmio, t95gd, xm, f$p4e, himql, mh34p, tdg9z5) {
      xm === void 0x0 && (xm = 0x0), f$p4e === void 0x0 && (f$p4e = ![]), himql === void 0x0 && (himql = ![]), mh34p === void 0x0 && (mh34p = 0x0), tdg9z5 === void 0x0 && (tdg9z5 = 0x3), hlmio['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', hlmio), j4mi['EnvConfig']['resMgrLoad'](hlmio, (mj3oih, vac_k6, a8r0) => {
        ilhom['prototype']['resMgrLoadCallBack'](mj3oih, vac_k6, a8r0, t95gd);
      }, xm, f$p4e, himql, mh34p, tdg9z5);
    }, ztd25['resMgrLoadCallBack'] = function (g97xzw, _e$vns, oixm, xloqm) {
      console['log']('buff:::', g97xzw, oixm, $k_nv['fileNativeDir'] + '///' + $k_nv['fileListName']), xloqm(g97xzw, _e$vns, oixm);
    }, ztd25['clearRes'] = function (mqjoi, akns) {
      akns === void 0x0 && (akns = ![]);var gz7d9w = this;gz7d9w['clearRes'](mqjoi, akns);var qmlohi = $k_nv['getFileInfo'](mqjoi);if (qmlohi && (mqjoi['indexOf']('http://') != -0x1 || mqjoi['indexOf']('https://') != -0x1)) {
        var h4pjf3 = qmlohi['md5'],
            snevu = $k_nv['getFileNativePath'](h4pjf3);$k_nv['remove'](snevu);
      }
    }, ilhom['onReadNativeCallBack'] = function (knsav, ne_$vs, ojmhiq, _k6car, crak60, mloq, k6_vac, usep, hiom3j) {
      _k6car === void 0x0 && (_k6car = !![]), mloq === void 0x0 && (mloq = ![]), usep === void 0x0 && (usep = 0x0);if (!usep) {
        var mhqij;if (ojmhiq == 'json' || ojmhiq == 'atlas') mhqij = j4mi['getJson'](hiom3j['data']);else ojmhiq == 'xml' ? mhqij = gx97['parseXMLFromString'](hiom3j['data']) : mhqij = hiom3j['data'];k6_vac['onLoaded'](mhqij), !j4mi['isZiYu'] && j4mi['isPosMsgYu'] && ojmhiq != 'arraybuffer' && wx['postMessage']({ 'url': ne_$vs, 'data': mhqij, 'isLoad': !![] });
      } else usep == 0x1 && j4mi['EnvConfig']['load']['call'](k6_vac, ne_$vs, ojmhiq, _k6car, crak60, mloq);
    }, k$vn_(ilhom, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ilhom;
  }(),
      $k_nv = function (fpse$u) {
    function d95gwz() {
      d95gwz['__super']['call'](this);;
    }return kvc6_a(d95gwz, 'laya.wx.mini.MiniFileMgr', fpse$u), d95gwz['isLoadFile'] = function (x9wlg7) {
      return d95gwz['_fileTypeArr']['indexOf'](x9wlg7) != -0x1 ? !![] : ![];
    }, d95gwz['getFileInfo'] = function (oq7xli) {
      var n$sfe = oq7xli['split']('?')[0x0],
          epfsu$ = d95gwz['filesListObj'][n$sfe];if (epfsu$ == null) return null;else return epfsu$;return null;
    }, d95gwz['onFileUpdate'] = function (nv_$se, jhi3) {
      var pfhj43 = nv_$se['split']('/'),
          mhi = pfhj43[pfhj43['length'] - 0x1],
          e$unf = d95gwz['getFileInfo'](jhi3);if (e$unf == null) d95gwz['onSaveFile'](jhi3, mhi);else {
        if (e$unf['readyUrl'] != jhi3) d95gwz['remove'](mhi, jhi3);
      }
    }, d95gwz['exits'] = function (vna_6, bry1) {
      var vak6_ = d95gwz['getFileNativePath'](vna_6);d95gwz['fs']['getFileInfo']({ 'filePath': vak6_, 'success': function (sknv) {
          bry1 != null && bry1['runWith']([0x0, sknv]);
        }, 'fail': function (v6ka_n) {
          bry1 != null && bry1['runWith']([0x1, v6ka_n]);
        } });
    }, d95gwz['read'] = function (an_k6, zd9g5w, efp$4u, _kac6) {
      zd9g5w === void 0x0 && (zd9g5w = 'ascill'), _kac6 === void 0x0 && (_kac6 = '');var dwg79z;_kac6 != '' ? dwg79z = d95gwz['getFileNativePath'](an_k6) : dwg79z = an_k6, d95gwz['fs']['readFile']({ 'filePath': dwg79z, 'encoding': zd9g5w, 'success': function (pe$4) {
          efp$4u != null && efp$4u['runWith']([0x0, pe$4]);
        }, 'fail': function (_a6vnk) {
          if (_a6vnk && _kac6 != '') d95gwz['down'](_kac6, zd9g5w, efp$4u, _kac6);else efp$4u != null && efp$4u['runWith']([0x1]);
        } });
    }, d95gwz['readNativeFile'] = function (snkv$_, vseun$) {
      d95gwz['fs']['readFile']({ 'filePath': snkv$_, 'encoding': '', 'success': function (vnask) {
          vseun$ != null && vseun$['runWith']([0x0]);
        }, 'fail': function (mijho) {
          vseun$ != null && vseun$['runWith']([0x1]);
        } });
    }, d95gwz['down'] = function (hi3mo, knav6_, miojhq, r08ca6) {
      knav6_ === void 0x0 && (knav6_ = 'ascill'), r08ca6 === void 0x0 && (r08ca6 = '');var fnu$ = d95gwz['getFileNativePath'](r08ca6),
          rcb180 = d95gwz['wxdown']({ 'url': hi3mo, 'filePath': fnu$, 'success': function (fpj) {
          if (fpj['statusCode'] === 0xc8) d95gwz['readFile'](fpj['filePath'], knav6_, miojhq, r08ca6);
        }, 'fail': function (jqhmo) {
          miojhq != null && miojhq['runWith']([0x1, jqhmo]);
        } });rcb180['onProgressUpdate'](function (jm43hp) {
        miojhq != null && miojhq['runWith']([0x2, jm43hp['progress']]);
      });
    }, d95gwz['readFile'] = function (zdgw, mhp43, vs_n, fpu) {
      mhp43 === void 0x0 && (mhp43 = 'ascill'), fpu === void 0x0 && (fpu = ''), d95gwz['fs']['readFile']({ 'filePath': zdgw, 'encoding': mhp43, 'success': function (tdgz9) {
          if (zdgw['indexOf']('http://') != -0x1 || zdgw['indexOf']('https://') != -0x1) d95gwz['onFileUpdate'](zdgw, fpu);vs_n != null && vs_n['runWith']([0x0, tdgz9]);
        }, 'fail': function (efpu4) {
          if (efpu4) vs_n != null && vs_n['runWith']([0x1, efpu4]);
        } });
    }, d95gwz['downImg'] = function (qoxw7l, ihlq, gz9w5d) {
      gz9w5d === void 0x0 && (gz9w5d = '');var k6v_na = d95gwz['wxdown']({ 'url': qoxw7l, 'success': function (joiqh) {
          joiqh['statusCode'] === 0xc8 && d95gwz['copyFile'](joiqh['tempFilePath'], gz9w5d, ihlq);
        }, 'fail': function (suen) {
          ihlq != null && ihlq['runWith']([0x1, suen]);
        } });
    }, d95gwz['copyFile'] = function ($ksn, dz97gw, k0r) {
      var xqlmo = $ksn['split']('/'),
          lq7x = xqlmo[xqlmo['length'] - 0x1],
          _6k = dz97gw['split']('?')[0x0],
          a60c8 = d95gwz['getFileInfo'](dz97gw),
          zgdt = d95gwz['getFileNativePath'](lq7x);d95gwz['fs']['copyFile']({ 'srcPath': $ksn, 'destPath': zgdt, 'success': function (sanv_) {
          if (!a60c8) d95gwz['onSaveFile'](dz97gw, lq7x), k0r != null && k0r['runWith']([0x0]);else {
            if (a60c8['readyUrl'] != dz97gw) d95gwz['remove'](lq7x, dz97gw, k0r);
          }
        }, 'fail': function (kar6) {
          k0r != null && k0r['runWith']([0x1, kar6]);
        } });
    }, d95gwz['getFileNativePath'] = function (vnks$) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vnks$;
    }, d95gwz['remove'] = function (_6arc, w7qx, eunsv$) {
      w7qx === void 0x0 && (w7qx = '');var eu$sn = d95gwz['getFileInfo'](w7qx),
          eu$ps = d95gwz['getFileNativePath'](eu$sn['md5']);c6r_k['loader']['clearRes'](eu$sn['readyUrl']), d95gwz['fs']['unlink']({ 'filePath': eu$ps, 'success': function (c6ra0k) {
          if (w7qx != '') d95gwz['onSaveFile'](w7qx, _6arc);eunsv$ != null && eunsv$['runWith']([0x0]);
        }, 'fail': function (na6_vk) {} });
    }, d95gwz['onSaveFile'] = function (k_6c, gd9zt) {
      var $vn_e = k_6c['split']('?')[0x0];d95gwz['filesListObj'][$vn_e] = { 'md5': gd9zt, 'readyUrl': k_6c }, d95gwz['fs']['writeFile']({ 'filePath': d95gwz['fileNativeDir'] + '/' + d95gwz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](d95gwz['filesListObj']), 'success': function (i4h) {
          console['log']('写入测试测试成功：', i4h);
        }, 'fail': function (xlo7iq) {
          console['log']('写入测试测试失败：', xlo7iq);
        } });
    }, d95gwz['existDir'] = function (c80rb, jm3p) {
      d95gwz['fs']['mkdir']({ 'dirPath': c80rb, 'success': function (j4pmh3) {
          jm3p != null && jm3p['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (fe$up) {
          if (fe$up['errMsg']['indexOf']('file already exists') != -0x1) d95gwz['readSync'](d95gwz['fileListName'], 'utf8', jm3p);else jm3p != null && jm3p['runWith']([0x1, fe$up]);
        } });
    }, d95gwz['readSync'] = function (wg7dz9, h4m3p, a60cr, $_kns) {
      h4m3p === void 0x0 && (h4m3p = 'ascill'), $_kns === void 0x0 && ($_kns = '');var s$env = d95gwz['getFileNativePath'](wg7dz9),
          ak_c6;try {
        ak_c6 = d95gwz['fs']['readFileSync'](s$env), a60cr != null && a60cr['runWith']([0x0, { 'data': ak_c6 }]);
      } catch (k6ca0r) {
        a60cr != null && a60cr['runWith']([0x1]);
      }
    }, d95gwz['readCache'] = function () {}, d95gwz['writeCache'] = function (c1r60) {
      var sn$vk_ = readyUrl['split']('?')[0x0];d95gwz['filesListObj'][sn$vk_] = { 'md5': md5Name, 'readyUrl': readyUrl }, d95gwz['fs']['writeFile']({ 'filePath': d95gwz['fileNativeDir'] + '/' + d95gwz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](d95gwz['filesListObj']), 'success': function (juf3) {}, 'fail': function (d9wz7) {} });
    }, d95gwz['setNativeFileDir'] = function (jmh3) {
      d95gwz['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + jmh3;
    }, d95gwz['filesListObj'] = {}, d95gwz['fileNativeDir'] = null, d95gwz['fileListName'] = 'layaairfiles.txt', d95gwz['ziyuFileData'] = {}, k$vn_(d95gwz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), d95gwz;
  }(a_6ckr),
      evus$n = function (wl7xq) {
    function mph43() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], mph43['__super']['call'](this), this['_sound'] = mph43['_createSound']();
    }kvc6_a(mph43, 'laya.wx.mini.MiniSound', wl7xq);var efsn$u = mph43['prototype'];return efsn$u['load'] = function (knsav_) {
      var t5gzd9 = this;knsav_ = e_$nsv['formatURL'](knsav_), this['url'] = knsav_;if (mph43['_audioCache'][knsav_]) {
        this['event']('complete');return;
      }function t5d9gz() {
        if (mph43['_null'] != undefined) t5gzd9['_sound']['onCanplay'](mph43['_null']), t5gzd9['_sound']['onError'](mph43['_null']);else try {
          t5gzd9['_sound']['onCanplay'](null), t5gzd9['_sound']['onError'](null), mph43['_null'] = null;
        } catch (omiqlh) {
          console['warn']('[wxmini] _clearSound:' + omiqlh), t5gzd9['_sound']['onCanplay'](qlix), t5gzd9['_sound']['onError'](qlix), mph43['_null'] = qlix;
        }
      }function oxq7lw() {
        t5d9gz(), qhol['loaded'] = !![], qhol['event']('complete'), mph43['_audioCache'][qhol['url']] = qhol;
      }function lxow7(t5d2) {
        console['error']('errCode=' + t5d2['errCode'] + '  errMsg=' + t5d2['errMsg']), t5d9gz(), qhol['event']('error');
      }function qlix() {}this['_sound']['onCanplay'](oxq7lw), this['_sound']['onError'](lxow7), this['_sound']['src'] = knsav_;var qhol = this;
    }, efsn$u['play'] = function (p4feu3, v_ks$n) {
      p4feu3 === void 0x0 && (p4feu3 = 0x0), v_ks$n === void 0x0 && (v_ks$n = 0x0);var zg5dt;if (this['url'] == w9zg7['_tMusic']) {
        if (!mph43['_musicAudio']) mph43['_musicAudio'] = mph43['_createSound']();zg5dt = mph43['_musicAudio'];
      } else zg5dt = mph43['_createSound']();zg5dt['src'] = this['url'];var lx9gw7 = new r8y0b(zg5dt);return lx9gw7['url'] = this['url'], lx9gw7['loops'] = v_ks$n, lx9gw7['startTime'] = p4feu3, lx9gw7['play'](), w9zg7['addChannel'](lx9gw7), lx9gw7;
    }, efsn$u['dispose'] = function () {
      var hqijom = mph43['_audioCache'][this['url']];hqijom && (hqijom['src'] = '', delete mph43['_audioCache'][this['url']]);
    }, n_vs$(0x0, efsn$u, 'duration', function () {
      return this['_sound']['duration'];
    }), mph43['_createSound'] = function () {
      return mph43['_id']++, j4mi['window']['wx']['createInnerAudioContext']();
    }, mph43['_musicAudio'] = null, mph43['_id'] = 0x0, mph43['_audioCache'] = {}, mph43['_null'] = undefined, mph43;
  }(a_6ckr),
      r8y0b = function (fpj43) {
    function cr1068(_vakn) {
      this['_audio'] = null, this['_onEnd'] = null, cr1068['__super']['call'](this), this['_audio'] = _vakn, this['_onEnd'] = gx97['bind'](this['__onEnd'], this), _vakn['onEnded'](this['_onEnd']);
    }kvc6_a(cr1068, 'laya.wx.mini.MiniSoundChannel', fpj43);var p43f = cr1068['prototype'];return p43f['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (c6r_k['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, p43f['__onNull'] = function () {}, p43f['play'] = function () {
      this['isStopped'] = ![], w9zg7['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, p43f['stop'] = function () {
      this['isStopped'] = !![], w9zg7['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (cr1068['_null'] != undefined) this['_audio']['onEnded'](cr1068['_null']);else try {
        this['_audio']['onEnded'](null), cr1068['_null'] = null;
      } catch (c0186r) {
        console['warn']('[wxmini] stop:' + c0186r), this['_audio']['onEnded'](gx97['bind'](this['__onNull'], this)), cr1068['_null'] = gx97['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, p43f['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, p43f['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], w9zg7['addChannel'](this), this['_audio']['play']();
    }, n_vs$(0x0, p43f, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), n_vs$(0x0, p43f, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), n_vs$(0x0, p43f, 'volume', function () {
      return 0x1;
    }, function (jp4hm3) {}), cr1068['_null'] = undefined, cr1068;
  }(knv_sa);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var fh3jp4 in Laya) {
    var dzw79g = Laya[fh3jp4];dzw79g && dzw79g['__isclass'] && (exports[fh3jp4] = dzw79g);
  }
});